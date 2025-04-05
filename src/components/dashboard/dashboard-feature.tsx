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
    "4rLMDQjaNpP9MRPLzoyt48kcoTtzTVKe3cmZnhLsTc8uuBFb5sp1u5sNrfyguhNVt7t1y3zJe5GiKCM7aRthn6vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wn8vYKHPx92SADQcxExZCwMnaW8yqhGq75U5TQbtzs6JSRXvZWfhTTnrLrWZE4QLqqyKvm4LeFi4HaL77wWBqWZ",
  "key1": "4DZDxjCwk9qoiKAD3auw2trJrhSkezwmb1WA4dCqtQnuApA4j3Efc2aeoEKUgc2hanoEZGcGqZsceWpeYFQUzq3z",
  "key2": "2CB8GHHy7WpihX42D7rgdqkp3BPhqP4t5vnSZscNffFHbUF3jNbyYpiPokYWPHi8yBEMGBbHH5anC49sRief5TM7",
  "key3": "3Bkyt2T17wfEZNPntgSqWLMbJmun7Q523QZNkiRBKndJnHbou4McDLhAwa2jwrERcmkJrXHd4gy91cUpV9yRCmzV",
  "key4": "2948TN4A8nTyHSnVKTttTX4Yeo2EXZ9jufnskVL9YS9o6AQy8dXoDzgjjsq967kR5BEsuJTMRWwWbvhsH9qJ1nap",
  "key5": "ZXmfdAqLkKrYFPYAbDbiGhmDji33YQH81tiCaXZtuhXAskRc2TqrULsEVqCoGViDtvRstcnLNGbpQfipgUoAa52",
  "key6": "3Ktt7TbZrVPnMAfHwNukzfAh7PhncvUMvdFxMp6YtcqDe8suW2y8Ktuku2Ehzro7i6bMNxNAxedrdSQKqb2P9Wgu",
  "key7": "5w8AWUSoGLQ3MJBhqCtDKgD118QXLZWLQ5usRNX5xPCZAtrDCmRQj7SJxKbxVTngraed9GcmiTTEmv1XcLBV1uzS",
  "key8": "5RhBytLPsw4Enij3Ra8w5LeZw7wU2zpFB1ZcNsvPKi8tTs8hQPTFadxKcL9gq6M4wiFpiFMpJwUboKfGBFkCf8P2",
  "key9": "4s1x8S6VyiJ9UH9yuTWQu6YLysiCaz6JrGi5d2LqLGZyRAT5Regk3E9iYCySwZ6geeLT2ZL78noFkkwCYhPBn6V",
  "key10": "4pLupubDH7NDkhNKUyqopkZAfDTPiNf8ZJAeagc3xhWKafkizqQHhpo3iUspidFKVJBAoiL6mVi1L8Xqa9mgEyHH",
  "key11": "3CC7KXt5WpJHmVVcL9LDZDK3jKuSUkyqLesKXhLDNmLUgnY3G3wJNgD3tqBk6djFR9dFnJ968Pgqsf6xFK2qodir",
  "key12": "5CyFcvgeqoCQYxKfA2k1jocqJo9UCtLqpYg4v2hu9v7TTZfLmpX2krUJfWF9Z6o1PrvSVdrQrY5Q52GwwQhZs7Av",
  "key13": "2zQNMwxwmFatcZAmRV5gXCM7a9VfLn2Ln7kYGVA9RM2tp6uVt78icS19gmFv757jw9Dd3QnHgPx3bTheFTy2K5VT",
  "key14": "45LpprmvtF1vipptr2oq85jBJViYFpGJfEKkCAe39TBFepRAeZHq35YhUAZMeddueUMsDT3uU9hqcVhTs5JVNrEX",
  "key15": "38hSLsc4QdNfz4H8i8xZehkGA9LskUqHxuFzAFUCy4X4vF8jTZdiyx2RKbBGkbDfzUShweRdVnk9ruNi5KbqtFFt",
  "key16": "3bdgG6GTUSJhQnyTuXUCATNYDafGNFC4vEAdSg2WESCheJ7x7i9JSfVRXTEDBkrooEx9ChHahD8fhk7LdjaDutcY",
  "key17": "29mjymmPi6gP6XDH758SqdZa3GaLfpuaCw4T9qsKRF6nxYAPerCJbCyZ15sbBHJjmui9GvN1PcHkNcoQEPkTJfPb",
  "key18": "62AVPVYS1T8VhYZsSZZLr4zsXhpFd9qb2iuoV6VfvMHCpofNBxXqgf39aRGWEkvnkKuKJsfMJvaPfxmabm19vewQ",
  "key19": "5yS3i2nfhgKq6rJ7M4G9GumZCTKLn8PibmXGB9hwo6srWfebRvBC4MDeByH7bkqL1nv4bjReR47Airvj4Mr5Jt1w",
  "key20": "yN5o1mQVY2FiJcJkutgTa3ao4fzzrWEazK9erx8AkrL9rTrdBpGUZgJpv4cmpbbq6MsDrRLzGVGDc8K3cBzLUuT",
  "key21": "2VsAyMtZebMyVVaf2QGcwpnxTugiUjMN7fgEK3xaVRW8fzni8CMEhZWjCZAS7sQ9ypRHekpMVySv4VKGGK47tFa9",
  "key22": "4h2v5txtAkCSiq38cKXuC3d9ik63H6UqTjN7PtyjoRSBRWvNyi2Y6Ci5qwYbXQU6yHrUe2a4Zpo2wM4mt1YRq54Y",
  "key23": "5XPVoEgsuHxHbpQ4o6XnNxicda7AG1tXb9HcUheWQeAP5aeTAw7UbheQJYKax82mC8JAkMqoBHvcDDa1SVTFFf1N",
  "key24": "DiiuvADwZjuDFdZzjRJxgGzaq2U3n52YUY2PAhBbNL3AXKzicMGkGkq3E166Nokd6UvsovJ75tAah2emuLhZCyf",
  "key25": "4zMvvDYdGbzpL3hvc1UjqyQGEn5GoxM3htappNYyVZgACSXQEJyCyu7L9rAuzo6jyoccyMVf6e2VVjc73ktaVxN",
  "key26": "5reBEBKuYskMDqEYPmp6HSWAMNCBepBFt5pGTq559Z6v5jHL442PWwC79o4iXM3AZ2o3umBL3Fd6yfYjKaw9cALE",
  "key27": "2cyV4v3MtVCjCNCAZFsLiA4gHnrejenKeWSNaKCLfLH3veBgfAaD3hSVGQZ1E3zcpcK6V5iwLMz89ZsbEUCY839Q",
  "key28": "5P2kTvnsxAkw5xkpLYuER7YRzRESrm9TmrYg6z71WKnrrmMExRhsMiABPfRSGUdMNYctHCNd33nJGuD6dMdRkJeF",
  "key29": "2iPgtTYLbQ4LY5Vg6poR2v5ytNVFxGoe1yWFqqRxwNyVdnUVvemkBmWbh4Gb4eNt3u8HNwyW5WvW8UPm7RXa3evF",
  "key30": "2HUExs6Ez76eUTJFkqPrfcz4xRofqkCmoDnJhDEd8EV9KLwCZHWypgfhk7ibfdos7mFy2AmJHnFQQ9bwuQ8XdSQ8",
  "key31": "62DoUA3xFbp869MBgghpUVozUqGmMj7Nyyiu8hMQJrBbmXNzjd6WSZfPLzHy6PyvxKMUYCGuMNb3dtX9NYb1dvRv",
  "key32": "5rzPGaR6ewbRhwndTsaxwZzaLZcDfcwMUtps8Sn4gFePK7HkYEzd2GQrZe7dti1wH3vu5gP9rJPSGvuJr6uQz6h5",
  "key33": "3fajrdYQipoEXcy8N4XtRuPu6B4PZBWRJAQkW6kgBiyfYKoM1FAjU3zahEF79kRYXffPH8mp9N1gVuJhBHi6xPRS",
  "key34": "4MhCZEK247m37gqeumid3J4JYCMfNUmCTZ7i3QELaRJUGevbMYPdAdbPcHP2LhTmi1hRYj4ttecHA8Sqha8oPf8o",
  "key35": "5GYk896WCPot3ZJ9wbX6wQdM3Ay5PwQWxaVbWmo5w86zU4wSNLojspP2nhzhb3tNDzCCrnyh7TeNEoaG568euT34",
  "key36": "2r1Lc8ix6YqPpoFzbpdCN6FgyzNMStpsBW3DxxhxD7qu1bBAFGyppA2Au6zfhcznZP5RipxuHHYcPMr2pFzWDa4X",
  "key37": "4vdEJaoq6Apb9MLLMECZLW6yfmpbKBEaWzB4UPXPEF8usFPXPyqMZBTKZbxMsyneLycyymkpKJxuW9sGuqSGkW8W",
  "key38": "3zsK3M7ujZisV5qHnFfDudhio4FJ46LvbNAw81LSBg5dJcecZS71cWXFoiFsyYAjam14ghtEFsaQReQrxDhXEPB4",
  "key39": "3ea2gesgMVZrSPUR1hJbj8DCprU1yHnRiXrjoQmeBLehp2wggJWx7nN5hdPeT8Tu6gG8VWtiHFaDM8JLCWCVLjBw",
  "key40": "3JpuGWxbzqWVa7Jhx4duF9knHdPDVHEMrdDdZzN72WTqCZp4ZkiGJJfmDEXYuTLdMxcCgMNccWJR8jCntJgQ82gd"
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
