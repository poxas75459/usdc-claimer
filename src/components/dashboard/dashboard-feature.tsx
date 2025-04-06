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
    "5MDuPiw31mYnEtCPUd5kaPKgG3T1qtxnaRJb6Tq3Ze1Q8uvGDSRyrJevTJuViPiFkyv7fVZ38vBHsQrNGS6KRLN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7j4nV1617o8o5GGrH7UPrCkQwvdtLS3DhzYDZjJzEhuoKLibBGFL5gBWfnrFwzZuqehUXWGPhdZCb6wbvHqALV",
  "key1": "4HLS1mHhNcdFViCFB9nQ3e9xDqoTTna8Yg5T8pj1aHEM3BMQLjyUqKWNBHxbTbnLZysGmVLc37jQrVU9RxhRBviH",
  "key2": "3MhWsHuQj2bCByeqenhRMK1FjuQnEij2i7L3xagqTUd1xoTna3k4STUyQbWU7fdd5e1jkmQL3sFHvYnKLJP3tLoi",
  "key3": "4cHd5HAmpMqEyKAxHF73HhCmQY2TYDPKbdbXUjWQN97surZAD7FebcyZJNSdqiMX3T41R7mMiyuza6hFyHvQUc6w",
  "key4": "vyxVPKHKNsuJ5QtmZ7Rt7zYqpNgVfnMt2WC6BxAGh6dBkP1RXNBxugv4Wn84SjHjAYoBvij3eYpErKeAMAk2UHr",
  "key5": "2nTqvwC9TEphJstHGP7KTyALNe5twW9sCHdW9xosGVY3BfckLQfnuG9Br7XpdL6Gz1scL6bHMFk3CFdbxs1HLvEd",
  "key6": "5qGzQihhCP1atuw16SiquDAnwrS3RDM92SPdBHuRrJwpwG8uSUFcQDAf4FU2CHfb5DUzS7Bp11Wwqbfr1emHhK88",
  "key7": "5YTpVrL4BSvEwvQexJMP2WpLU2ZrRMV1RPqxqjjQZaDen5SmwedigDh1E4Ye8favrgbBZQJFTJq7jC3k4kbFDMAi",
  "key8": "2gv82L8XoQ9PLcRnssR1ex7arZAtUM3CC6GUKeB3AqyQBeePyagoaQSM55pCkF1W8fQdid231Yo5mzBz8qDAFaCj",
  "key9": "5YNZDQ1cjcKdGDHNyUtHZ3NuAGV1ZoCp2hqEDoZVgNMCKDLJjukLHPd86edYA9DXBRUT8xCJgK3qc3oV3547oks4",
  "key10": "3y6mcmZWLYsSyF4CxMsemLPMeJpoyQvJNVZsWtVqfpdhzNqa9wAffVNwM6SouSdUayBrkyB91GHNKhswL2HJ9ZS6",
  "key11": "26CGKRGdgZJvY6jzcPwU8WEydRJgXPuh4bJmL4MSsuRR14eVvJWwr2pwsDDC5UqKRhrT1jd9YyrxXRpVWo8mQqdg",
  "key12": "3pxJwFkt9xcDXBdpedhnw4C6maasXnZJpAHaPR4eramKWj8qTSgcvdB3jHmhgzAHRv6Qm4XQxhMuFJ31NBJ1KTwB",
  "key13": "3k5mMqyTgwAnyg4RzraPJCEn9cYr6by3oXYMJjS9FzpSAT5zi7G6uJznwnV91jYPRp3K5nPgp6cgaBMPLjU6yPaw",
  "key14": "bXGiUwbzAQ2bYyk4bK1Sivo1UAoD57jpGfefPoUi8ZqNy6DjUnwH2EAAj6qwEJFhp7Giqu6298kXLWQuHYZqjbY",
  "key15": "F7hhemi29TL47nWqQ3Y6fFSjmiJTnEBFxMmqMftWMF2PyDkeL6F24Nxb5uUr3KSTXJHbi18y4x9i7TQKehFNZDW",
  "key16": "3z5A4ZG8WGGk46EfzEYJXk2N84WatyX2QuXXgiiFyka9jkyyDTPEyBgrT1Hcxys1gqb8Bv5pqtQrJdmra6CkxoyD",
  "key17": "4xD8b1cTQ237b95yY5GhVH1RrF2PpsQGcuF5UShk7d6FzKswvLTLLyJnqHSHDTjB2y767nLKxPJMLAEjHX5wjrZG",
  "key18": "ak7gAwnCERXu2sysirP8qr4FXvDkzFvvYFPhsxHHd7F68S7e3pyBQnKHrc7zbsPWgAe3WNitZEvpguSJnmdxQoW",
  "key19": "4EV9i2Tqd6oGf3ibucAhA2efobY3YDWUaV4uRPbmq4wQ8DY1r5egNSDYtdfKYQ32U5jAV2P1L8k2TJiFS5GVrT8e",
  "key20": "33bBc4mt3ZnEegd2XqciAYKA3x1MptxaaXgpsNBbkgJT847HExss2reio5WBsotrSKiZNZbxwy6Uv1Rsd3UBtbru",
  "key21": "22E8a4PoCavCNkWBc86f2ouTyqZEB5DdiKXsVh575Mz6jsCaVM5GQoQLrqUFHEd8p9WS5UbR37nqgWTjJy8fsBhq",
  "key22": "e2Q1LtN7zuQCJFqXccrL8XrYnre7ekxgTDwekLXiJRWCsKSGRMctcNRhgEjGmH4gA5riVC4onXv1xzDqwpmAoab",
  "key23": "3VJACoBufRWG9aTF7Jg8wdaES1SJdoYLGU6mHcr8xjtSBMZqfcoEWbjZsZoDrqJ2hx6Vbrvh9wa9m7hNQ2Eb7D6v",
  "key24": "3JvmUpRhdESHF21mHrrQtsm2ybGiFGzm18q5TH3GWSa69mnKwsoYTivAHNs5f8wfaXJ65RDu2LF2MLyv6aRSqa1T",
  "key25": "38bUYiUu3nHmTLvMtzkzQ4fYTzUckbDB3cyq2arsVtzxCyzXJUajbDpwVNUXhSpBo5tewCifLC5Skmbb5v3pRWgA",
  "key26": "36HyDvwLGokj9JTRYu7QK3CBVogzRmq6QeoC5HnWJS5WLcDwwiA1RKgaf6dgrHkcm4Xp5bqZNAvATpgvfpJWK7yL",
  "key27": "4s8kstrxpEwvoZryjsmfajyML65Znm9gcGm7b8777indhKuMXDSkLAm7yUu9eNF3aGmwvtb8QyYbjpnqnYNvCJQm",
  "key28": "27SfpVNNnjEqjLtPERyDvHnco69KWiGKMoY4rgiVS7Xa9YkGfeEtCxbpcGhY8XkzPNVAaivwXMHTx5iqec6MAaXA",
  "key29": "5vJ1WwvbzrexqP6vLHs59HpPFcWPpqKfQgT1EowFMub99KCQwZiUpGKNakRTeLFfhtb4q2DahXHCnE2sAiWi969Z",
  "key30": "5XvvxccFDq3t2dmWx3CCQh84RnBScVRdzQVh3jFnfBGhU6rw9UmE8z87KJ3kPYLBoaBfAviK6YwsX1dk7xHSHVKC",
  "key31": "5io64ZHpN9yu4wd4uvdNNZrooTwx74QNAWjjpdwvuCtGdGvNbf4CeKKCEradcsZ32Ag7eJ1TKFjQaz8aGAHDVnBP",
  "key32": "QW2z8B8e9RUaMTYvdC8BK19XfHUUAarC4hEpvLUm7mH12fqZAX31KVyK5EhUtGicpW3A7s8AVPaaEZ5DmPretn4",
  "key33": "2EWGrSctFkE5svst74nZawBG6ptBzBKooZQr4iwPRED2HNRnSH8tPTcK3E7pUrEMQEA76h8m58e3puEMYSq1VEZe",
  "key34": "5PcUrB5reVGJs2wDNsDE234XyDnWT9cJWyBq4Vhjgqn4r6WZyubf943tuaa4vhtioVG9KmsjYZsJXFaPM5HoMYxo",
  "key35": "YLAhCLky5er2691Zs8ttuqa1rnfatYL5K8vg6Udc2cp6NUPyKwVWQZASHrRCwimGuQcMWE6LtmvcbTjaEHai8LL",
  "key36": "4PeUVcyaaWsWVBZxVBqbau7JPxa8X5Xe124CFj3L89CK2LLkd7gRdi97t1zNYKawSC3BqTwYhaNT6LSqyw2XeLRT",
  "key37": "4aHH1ZEHi44vtWvp9UBAhbahX47EkKVQJ7UAhiGbt8t3QDXwDvzgByF1bRYR7fe2iGyCroBiFrHPGYekM9GiLCBH",
  "key38": "2iqUXdBGADLDoZcxfZSUiaQz9BzrikBRPp2aWdutGa59yGu1h7Q62RJqnYUvdLFNaWfNTYjx56nvqR9kexMvWd3e"
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
