/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5KKWzFhr6RZ3bxq82oGRCueVHX4N7CK1WEKJh3TdtYMmShBXPCHdPdGDPTM7Esd2a3ey8Eno6FMXQFEUYtKLsphr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWuYSShC5MyLbjnyCYeimF2pfF8yP5nngu3ZLuEHuQeVeu7RhKZZvNJtXabkokByoG1EEJn48hLqbbqhRSK4fNd",
  "key1": "3e2Z35StmaoBtSWH6oPm1Gav3wPRbsUCykuFmHDi3ye2unGErfXtxYkZYF3VErrxdmPTxebZrHi8AMxJtiRZMsRB",
  "key2": "mLs4DWR4yE9poPwJQYwXfwVDd325gsTK4fJ1v518Zc1bYB6k5sBYfTCM3eSboozuymeLEu7hwrbkVZHvJyMxUbd",
  "key3": "5MLVuu31S6MBmX2yuw6r4rmEF3VEPhjRbUVgLqACtVfAAtqZ84tzFCT8whdYXd4VDk4HmEXbhnhMvwcfEezcvv71",
  "key4": "RLh1QcmBNNDLKmEXnnzdpRX3wQ3NwFYZWWwph4TbM5ssAJR5beqtvx8ReHjhRjeuWttH97DjTuEzxEqUemHP1YE",
  "key5": "623LsLD85ufiDna9K9mZTy9mCNEi87aHm6NNzFMemDn48qDDkH8czwWn4w1uo3m5vwpbvzJRYMDBvFS1L3zdzPym",
  "key6": "2zeV7DVq5gHdto2aBbkYdzY67smFbf4LzYJ9Eo6aqSKRRPSDbf4YLVvKqUsHPUZU2QpiXsuwa4pCvCEeCWhEegy8",
  "key7": "QVhF5CV9wEcLdzit8LoAxoffGNMsAWWGfmkvHYhgXtNjrpTffuc4xGnMpYCcsMyyVAvN88Nw5fWexRJD394joNW",
  "key8": "4vQbQuXUpiH65NbEhH1gBsCG5ygqvR1jG2AU9NiyzQJF5z2f83iKPgPZTtkfWUq941Jk9tDykuYvigKtvQxNpYMR",
  "key9": "2ZPNo2JWn3Zu2zsNJxkqwQXLJ2xAYzUJhN7U4VXFZpK4npiRRtDh5GhWZx3arDNTZfNB5kTf4W3dJCoyu9JWkDWW",
  "key10": "2NsnHZJPFNtz6dBWUj9XYUrf77Pk9nf5WQinaS5m3HpFLWcevHmz9mQHdTZAetZDLh2MMiW6K4kdxyhCFYA5Vhgn",
  "key11": "3F7xgTPokqaM7ZYxTfDHTB6Fmgu6coC4Z4qDtn6tKXzHEtjiaBpRjzV5am26n3ejkn33HR7gC5aFT8cCrkTrMNS9",
  "key12": "5E32XgKjX1in7gTw5Rk1gTZvxZkZfhUALZv2eBfVDK8FKQeP8d6DYfg3WATeTAmcZe7qYounZW3f6RFzpuBXZwy9",
  "key13": "29Su4cWL5PiimsP1bMprNodYe2mpMoqfRcqCmm463CkigjJLyvRyPzXXLBaEz3hKmoSDUFiooWiAJCuGQC4KGeNP",
  "key14": "2Zf64N9Mc68UGd4GR9HoVEVViFvaDnNb9X784XjT9qcwkj3aGuFduKy17Xyt61t9Ewzrp5kQQAZb31rFMkDVLafj",
  "key15": "25rQDUaH3H4r988VGkqF8WXCmSDJeJKbPHgz5A3bmCuHf9KgEBDuB6z3tCtqwfdCNk4ZVVATfgEg7k5FNNuAaySf",
  "key16": "34rHQB7k4HT4tkewXm4r8epxDJdB4qUENXF69x41XLParVAXe15jYGqzBu79MW38nF86FzudTsegUzZ38xBvcjhg",
  "key17": "4sCwvP4nFqbdZpKrMeZoqYu1JyunhVUNNanxyAAjuY5huPbN32FDMSvV7d2F7jxrKngzKgrXdtofcCCQANXRbpsL",
  "key18": "5Fwx2hty5Ra1SSWLcmCneFGYACRiZQYRmYJYefBzDhQmVTcCLLRZDUkfPpf3KrpnGJCVP274mYyJnZasAdCdNmAG",
  "key19": "3qQFuAkyUVvzKXNMRzdtyhKxvMKGoN8xwT8cjKrme4SQFfYq5MkNH11fxCRM1Wb1ZqGfXoU5iwHBP8XqU7JTVXug",
  "key20": "36bx42QvF3Xbt4zdDispG9SopBuXFRB4r97hryLoJVnEaVd262D7i9hmho6uds2kpn4tzDMA1pvajUegtTuZm1o5",
  "key21": "3CQA6tF575Qp1HDhhhfD7uccZpdsTepvBT7unWKBDTSWRu8sGE1opFbKRS2QDjg2tBXA9f8aXiExDpFCfE8fovUQ",
  "key22": "66waxypt7KA7vV4vM79nPjErVGv3RmMNEossRgaxCJ4a8HpgaVTq7qc1H1GoJecn26fuCaytqMCpj6tobcPtWHfq",
  "key23": "2y5jxPPAibt4D9Ap3Jp8J9hE2GRV52gKroQvDXMdfMJi5Jck64pYY5izvaL4y6q6WJXjLw37LDwPvrzPWEP2Je87",
  "key24": "29XorGNzVASRngLH7mAkzsRxfV9nP2zZPvtUjNgfXdkJu7GEsbpB3TbhRHmzsJFgoTidBNEJTqymrLRX5LBg9mXp",
  "key25": "4ET1iiLkshxnk6GCNiYTDpmYmHndTEveyi9VKH5xfxpzZytv3bozW4hscG45QFAA22vu49YiodXiQi8NJ8bHMK1N",
  "key26": "2gRzQr4xDjKY9eXqsGG2q7T6sQFZmMYxqsGpW3fjvF54q7MXJ7jkpbt8pnhAvEbhquzJA9ZsP6XP3mAfF2Ghko7u",
  "key27": "4LFJaZJomhoti5XYVwS1nZSA4gv9Lro5u9UpDxyNTdtdhFtmXwKp8mFiRbdydoWdfMNvon2VKuBqpa9Dkwgn6vAD",
  "key28": "3wifQ7pDSAezRtjVph4RCy4NXjg1CBuU7pLBj2JK7NHrdMuVuou8mYNGBn5z1vXT6jqR34bcKY7mE6se2VJJw8XT",
  "key29": "3v8V2wJTvh4zFPZsW4sAEFptP2zp3QMw1DQ5GtXCJBGZMYm356ZzpwvH33Fg7byyJejWYqG4V7S46ouFgez5Mwkw",
  "key30": "3AnWKw4nEttE7VpoinHVTVARYm6VVSt2y4uz6EHxJJVv6uYRfb6puqP6rNKnonbR5qjD8ScEssX31C29WQjy5gfi",
  "key31": "2a9i5Cgj8N4g6xv5ZUSt5KwjPQF5n4T6QoTRpSoy6nL35TD5NymMmqoC9dNFUCg7hCCRgu6yEQeQyruxaxGhwnNu",
  "key32": "2fgvor35HStD64JjURGhhmzgujHaKeCAGCSTArRjQxQF7FwtzCarJEH3KhvTaYoTWUp9TgmEmdScLirVUBXcEHf6",
  "key33": "5gm62UYjwxYDbTHaXE5pdDsxTLtCQiTBtuGpMKdi33cPWJCYF2cD5ZTiP54aa7xgzWNf1EYcWx7AHnjwkksBUdyh",
  "key34": "4dtZN55DSUyWBpHvtiFN78M9njAYLe3JqHRgH1GYNKXnwwPJT6KYgUaab17jDwuC15zPqpLnmNs4aXki4muJMy94",
  "key35": "5Xp1wPRBv2kEVR1TbvcwZZkaNSwTpUgiUWoym6tbtE89MkGLu1Wpg9k7MA8kJmRF5iQyMuUjmcZ8CmKmiQtNH4ed",
  "key36": "3K4AVjGndLQzMUd88dn93NmigUZbLSQ6MxJC9hqu47LA7eFwubV4MKZDXnqwbMebX4kJnCXrsGhx6vrcDL44cRrh",
  "key37": "3MtNRuVnMx1H5kjfz1kuEFL8TjE49xg3EHQjjnF8x7fRovuvzQ2Fd43nWkENSeB7bbaXjqAE8q5LqKhivTnUGpZi",
  "key38": "4VjkaE8E4qqAn18M7H1zGAoFvVJ3HNLEMzTsnWd2mAhPTxx7gLzQ2vFMKYW9Ld9AachTQjMW3i9mDf3hMbkeaV6L",
  "key39": "tE8bicsoDmWQwHnsmutTQeVPZ4dq2eA67zbixoyJyj1u6kvMccMhkt3iFjeapCAZ2kneUX2pF5h5jiH2oUomHcp",
  "key40": "3SxGjAneCfTEp3Qn5ML8Cs9XPXyYJj5Win5zcnMfo8YhizFDu4UEbRQRY1oFRbee4K5Vaa2c3AJ2aesKWUv7WREi",
  "key41": "66C2nWs5uSgWa2fee3oZy8uNLUzc3xiGU8cedUciQxw75La5VZ2bzhCuvDJ3Mf6BD2E1z1ymjZye8yFaW1BPNpYE",
  "key42": "2tvs2QdV152icNBWXmsD5BW6QwE6DXdxyCZN4jMWWKeiZY8Q5wULaSnrLbj3sCdxM45VYH5sbw4woJeZnYVLnquM",
  "key43": "3S7xuFVrPFKrRxAHPyjycirX5gsDX5sCRyAa4BeyZMQLEp6yFKncDuUS28HHJNmr5K9ee9iGw1LxGwV85r7vYNH1",
  "key44": "5ws36rBFAXigTWjue6ry722GBR4fNtry1SY5Abv89UeaE1nyPPqC47DKDdtFczenLF6xXehJv111cqY4EDUujUod",
  "key45": "5hVYKeJeVLyHpikjr1FYR5TrqW5pN42y4Bsme9sztsLMWu5vNKRF4e1vfxBBQfDDVGsECa8kwptTVst9bAu57Em",
  "key46": "4vVvtN6WqMJnXL6c87aMhrbqFPQmyX5CZmxfQENskcW2mAVEE1wevF8M4VhA7M4Ai5EqpM24WE5wFNRfzHaSTUPP",
  "key47": "4nFKoqtmYquxzc5aPy3ATc7QHbntXekxiA3gZfz6PD44NiGffcxGFRcBtAT2H9fV1t1jipCV3b4KLie5mKNAxrtF",
  "key48": "5vifYtMchrByF1PPf8pqwkPu3RvHXdhHrqqqTMaBvTvNzQdnMs9MLZbanBxn313S6mzZ4214kSP9KC8huATEs8zp",
  "key49": "3DSduYGEoSVHgxf6yiGEjs5tRcnvSzBFxzjkn1JABcJGf3TZNNJUx1DUP2zg5Y8rauT4D5HkYcN7d5nqTWByeCGN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
