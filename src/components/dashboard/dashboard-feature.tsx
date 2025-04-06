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
    "5az6Pe9mfJFGgmfNR5XXmp7vt9UXfQ3iLyEc9nh2QpBT4Xdb8mUQHcRNXjHWvL36JvNPVk3LZ3XmrXwexeuN7jGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZQjDPowRNC7WUMKHoVw2L3qnmrTnpAmu8mT7mB9QuESMUaDcezeJKSPGQ3HqLJTv9AJT6pez9Sff8wLxuzDDj9",
  "key1": "28Fiyot93yexVPCMJMC5p9Vg9aewcRxtN9EeADskzJbsivpvhkgTfb1dfrqstKrysgRxDYk7Ec6zwe63kWcmiQmz",
  "key2": "58BQzwn4CC49VxuV9b3ZjHEgKvNS3ZQizR6y8nitJ7c9qYcTyRRhQMdYLhNZxhG7evFxT1ctYhs1c82M4wmuzTzJ",
  "key3": "w63GpqjgyoAsrV7mvVcsLdcL1K4WFNXgd2hUie7rJMxBDvbwunusaffuxHZ1y9wp4QHAXGLfngfvEWLtD55ejhv",
  "key4": "48o4FLtfJ9AW8FvEREKcYL6EsuS8WMd6LZrZcL6mmeNzFKDCnNAcBEan3iFtgesqMeTtw2nn1R3J8gmE2w5FfmiB",
  "key5": "rqRHmHvb6aDkQyXA9NMz9M1u6EyLNYM8gmMA1px4FC5Sbrs6URS63jgKBWtTRXeZWLxEAG8hB4T6SrT7ptz65Z6",
  "key6": "4aRF3yhmMvngcAafNFaNHaXJvYLFwxX4NkvCtF1KFAnTNkafqLuPekLNb6iGhPyXSAiXcRpoehYy32kiNGGBL1PK",
  "key7": "4BtWpxMCpzCjnLMkRGkYz6MdMaEyu9aM4Exf6BxhSxuLTNyP6TBQLs1KesmjmPibAGsMEymKQ7K8LB4CQEcVHw2h",
  "key8": "2ggGztjcazoxhf8dKxt5VgbGuYwdBCBwfKRzganKyz9xZW5S8c9Gq7rPc89satRTVrDhqFfCn91uwuByd4fB9JM8",
  "key9": "5zq2NNF71VPWvDYYoRpqVkZpGn354pufYFJUvD1GnZmubzZPN3dSPFjPy4fC5f4c3oLtmCphtd9KUT9y8ukk7D7n",
  "key10": "4UgRLpb63txri1thJm48o4cDrYHRkMZYN7TnseYcQmErZL2YCNc9cZYkYzUBYXFVQdQu1SX5hbKWP4JPKwsrqLYW",
  "key11": "2RR9PGBMrY4mmAds2SSMiRQ9ZnZs6gwtv4qeWeiPLnMDFSAVv8YghoMFHk4daL81CQKTaPRwxPWSpi7nLe4n2tM",
  "key12": "59UQ9rnPn73RhdbEoMMYFDDQfc34m7dbBv4yHB47Cdq9HioB1aEvt4NMYqB8XYzBL2XpqJgbgyp9oWJswg3qMEDj",
  "key13": "26YPP81H9fHxX5M9anGjX3QeFRTLbHxbgTzFTaK1Ud9b32kUZSqFHH85yj7ztN4NZYuqPWAd5v2wP5zqC8RtKYi9",
  "key14": "5EkULn1fo6PoSETPxHMs1gAyXWUyXuqYPqHCLSPen4SxqwKthFEfk4Qs8iDkRa5ELgMEbpWeS7tUYcmgnQPvCcFa",
  "key15": "3LcxUjC7Q7UCLqaSjHSHWwZpvPHnVcvZ6ptMw7YLPFHt8WaLAAiJ8SG78qtMz6Ukdt6LE2MfXtp2aWb2tDjWC2A9",
  "key16": "3UYhQgesw6WyrAzDA8XNSNSeWBswtNyg6UK5WhztWf9HbawMewy8eqLDzP6RHYRg52yK7ZEdh6pstCzESH9w5e2X",
  "key17": "3TAqV43dTBaVBw49KegmdaHshsnLx7rWzF3G2xgFmGwZqe9ThcCYCYJnF5vvaBwkTgda1G2v3GD3dzGqYkUcML61",
  "key18": "TP7vBZh8F68CJi642PGQLooTH6jSpNAqFjQaX1rEnb95NpUkMn9T7SZCS9Pt354L8Mq3WLei3ovPHibERTQTMzX",
  "key19": "5MekLXLPXosTyWFAyXa26E1PcZ5Qz42xNnUFJFeagcYzYu2iaDqJp2DfPgnGko7MrnnDv9dPjrdbDHp8V9EkWdPP",
  "key20": "3uoE55tYbHxdACEJkHA7mRjLxwnMgn1EwhyQjbK2SXtN7Wfv5rHkkZVoJxsGKqzBLkHNkAyKMN7mSVWchopvTbQZ",
  "key21": "yag4XUz73hqCPjSC4JH6bpxo3AVNaxQGarezTbfEr8S2uuA7fRDRRFFbvpDrM5pDbvdTefp4TcQsWnM4R7rib6C",
  "key22": "wSnxZjGk9AddDw9wipZWMBRcREqC5MoNZXYoEZxoyhCVvGxYJkXZeiDNGxWkAkUEZLWBPBKUDQjVnJFKSn1SCqZ",
  "key23": "VGW2CDNT3FuhAynjUVqGbfHw9JjiAFsbdmh4ByZzVEeyYciCieqicTX6wGwNwK23uXjJKuoZGTUi7bxubi3HZcK",
  "key24": "4USVY3YLKFVZHUhBxb1L9WugAGfkmaWdZACf5NHENzimRpe9P53ZmnJnWmVBgp7Nq8BRvDkU999aBGo6gqWWSXdP",
  "key25": "3rPb8HhuwzNbpF8EfhjeY61AUKCcounTxkJ7Prms4vEx8oEc3vCTQpq3gVh8jaqiX2bFHV7ZoF7Why7YaC2NFjCX",
  "key26": "2D19rYVzs32sxQ9EkggQYnXM2ZsybZ47YQmPhYV4iB4BttPHYjG78JxdLZ27rp3HXRAphWrEo4HeGTKDpQ9P93k2",
  "key27": "67TTQ4P2iboXHVRT4gCkvpYNWFiMmQzRWbs3y6XSQ2EU1pWDVpsjvhxZBNJSFVnXDoeoHzxXtboXsGEbfuWocrus",
  "key28": "4JVNteniPv3ritAFwcJ28EJi2iR9A7Kv91KYgff9f83MP5DXr4XSThp1wt2PKiTTpT54xcXcbDsc2ScpWgPBfLUR",
  "key29": "4AQWCXiB8Af1GMDzs2wvb3LdUJuzAFkofkfBcAXGCNzn321UBA2y1NyPXYcqWh3GH8J7o5yuWgjLJFeN9Mbr9tev",
  "key30": "4Y4YSTuFgNy2yQphe74bboUkmyw8qpjuE4t54FgmnuRTSmkrrvcWJeAE4uAh71zXKqLxJWrduEtJcqxBwwisyKoZ",
  "key31": "5R7MjJTNNgkAnSpipeiuAE3x2AzBYK9DoWxUKPCG7Tzb9ASHYDmbQQWGxWf6vc5ndCq7nsKCWTUiNHWEGyaF1otr",
  "key32": "3LV7wXSD7MJMLgsnVvzDfLZ2zWmJTYAUsDm8KBkeTbViKTJFAAVjZWP5xHBZW69qyCrSk1TP4g4UsHRysLgqkp21",
  "key33": "3i6RX5QuRYkrsvmPbPGd2S4LZqPNJ4xRmiUvXjawkJEPt4FreMC3hmQ1Qh7APJrChNMFkhK92s9CeKoNsG5a43Tz",
  "key34": "HLGdRoELVMfg5dwQGVXc9uvuYwLnm2zZHyucBtWDvE5GYMcFHJKENDpxP9HEyvxEmhLjYCbpwjXPJbXxjS7GMj9",
  "key35": "3uf9a8gyRPAuaUbJ8Vt4L8NzrysfW2TEd7vm6jxeh3keuMhZvMaZSzoLNwoh1YYfjFhmTk9Eu91mkgGifScq9YjE",
  "key36": "9sHNMrh684FSU4J2NyCMEM1Lp9ovYRsn5ARYx3p7QkuVpQnARNJ3EqhytkkhPLpYwnaHKkiYJjYAJzGn2deoZ8g",
  "key37": "2pJ94wwKuzJjiQstyJDsSYdSXVLdLQycTA6Xfdg93hQD3cVRMFZNCCQDMUzTxfov8wdszbv7tU2CoUeVhNJaSJsP",
  "key38": "7c2ieWiEruGugattMyzE9QHkeDCpesZe9iM1FEaRjoipSMEdLmH91uCuowT6EPaKsthp8D2x7FRywPwBS8PHWur",
  "key39": "3zsrXs8W8heVZ2f8LpYxp82HKuggZeJHskQ5qr2bNqBvPr5FRokxY5ge7FvLDGS3KAa7iQAgEiLfNsRJhT9YJicS",
  "key40": "2SYW2BSS2DYFhKYrwQRUtfDKXJKEhw2QLgmTFN5Rt1XzSW9bncVuA1auEiPd5WfozskaSw3j6bLsTb9t8hrQUzMK",
  "key41": "g2rgnKdCUjiWCLVjbMncBFCMEkwn8ZamPBqnrQcsmzQ7KjhZJaND5eqWqhWi1Dr2x7YqEHEz74dDGVLbBb7oCYd",
  "key42": "5TdSXxMnNjn4RArCpH3LT2h1prJ4EdHNsfRZEPi6swgq8QN9YJSKsgF5iJZViLxD5s69K8ZXbT1KZJF6ZWqKnHyi",
  "key43": "5oU4LXRaCScFzvh4VNLKf1oDhgfHPReCHopTuReApMD4qkQTsvNiQHS9pffMA5wMT8ykVp1fy8hRFz8Yw7heokqY",
  "key44": "4RL6zcXduCNDoeSqg6dx3W9eWn4ojzTNqQ9qyE2NGwcumzc3nr8EEJ1F73PdYtGSkCSMZeJQJM7D4A37ddaRYiHz"
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
