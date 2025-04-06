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
    "2KzotzhQTQ2he5W1DduiebzLssofMqYksrWjhJRPiFUfsTtRcAjVqNJAYSYHvcGR5A6YBZkDy1swF7Drmtvi7fZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33H5BENRmGqrE8ooHgSn5Eer4ifYshD62UY53UBruCXPJgWn6FydLa1tFeN1d5uyqzLHw8M1uW7cfDCHTeAtJTfQ",
  "key1": "KvEhhVXshHK5NmYpy1Zh7oJhEAX5CmfAWYj8PtTsCAHCjugee5uc7EBs4ueMdxPa8x4RrSp7j2Uy7ZmtHfQ8gpV",
  "key2": "3SJbA4tkJVc13AX49DD8LdNNT8QhuoJTs3Hu8nB4AGAaJyLuoTecr54zPm88MCySwxCZ6ErwAjKmNgHSGdLsHX5U",
  "key3": "2HYmaEuVU2NmbR2V6ikkz9Nb5iK1xKvCrA9KjoNB212XFDeikmbwzKeTawzWTqnzXKhY6KVMw9mpPwULvXz4pJvU",
  "key4": "2hLuoq81CQgNdmttUie3114w2wYSSLUtqpUSLUmQ685HTDzXF4gSgkH9gThvqGFZSkgGEJKBm8Amvb8FUjxb3Yg",
  "key5": "3kzAyagaKRsUgVSB53VQYJt2UwwAzELQ7iLxmitMsogygNuqPGXLaSKkrqKVT6EE5UtQSSYv6cLjbLdNHZMJJS3j",
  "key6": "3ERaTnvsPxuKBmR7miSu8hjzcG5rvtqcdEHZtaq5Tj1xWU139WndrzHU6dQvVqbTtzN3aiufDNCBVfCoAZqykgUZ",
  "key7": "4Z9DdpbMhZPjUvvwNRr1ZVtMPe41WVLCpxMxD9jSerWdq6oop43PM3iEAmveP8D5DmqozfRABtfJUCzDTkFzrGcX",
  "key8": "5Sf3usBBysCnvYtBk8N56kDmid9i3FF65RxwiR1h25NwFRfzJGAkE11aAs2fCbmnRozYDdtbYsaHbseGpZagDQf4",
  "key9": "2XhJ9xe2A2ydbyFghyojPeCQJ7CAtQRHWychna934ctqm5PvdAZe7uHaqvEVYUrvGS2n4QsXMYn13nh7ExHDU6sv",
  "key10": "2Y19dDYXCywdLNp2ukckBxK1pepv1W8W5hd2zJ9gHgiMz71e1tAYZSRnAFeQLGzvtxWDAhZs6sivmZjXfVtv2Xni",
  "key11": "3acHWXbA378FyBAojBVGjdKMe9ArLGaKWBHj4Lbfjsw6ACMmqit255SJtZHQe4rq52H5irQMcNNR233uybtxEmXx",
  "key12": "5pVSiFompykQ9u4uaDvuYa12xSqb48erMZTGToUobcyw3JtKVFWxBmfHvYUaxXHD5U7C6y3ULx8ajBoP2Qey63zL",
  "key13": "41fXcAk9SCpwg3987QsJipkxVWsuH753YJxj4jCqrg3UaG1Xbh7hWGdgoihXW6BQDh8txLRYkRFgnpXbj6x8dwu5",
  "key14": "4Emjpm3um8ZWgY1nBt5HgFA98qHNstsibtVxbUP8znRMiqTpoqzpEoyRm47yhhZ5ezX74vDWKvbjgRcJwy5C2fnh",
  "key15": "2jMHcX3Tfa37CUWTQefwJX7q2v53ksSEhrHFTXGLuts7jqssDreXitgTReJHhuNw4wNsooXdcJGwVpH13z3rFx5a",
  "key16": "2Vonxyg6J6ZL1WEzPGFDhwYUPsnT7dCqJfU7SR3ChwcuQmLQNFpZBY82xMv8LP3HmFWDFvmmViHiwf2iFRGmiYHK",
  "key17": "2isYqNxm2gic4rbJhkksw9Sa47GS4D1ZMpaHuxro6SAASAoG8AC216bkwta6Xrr6AWuxFUuw94xVC6VQ4YzVkkwt",
  "key18": "2zYt55itHhYc9MvCbDejpY14poQDeyedsqwDL6TauKg2V3dyuYRTarAzjnVfeR4sja6B9BFKj1uo9XJcTBSwANrQ",
  "key19": "P33n2DmZYRjUh5VezxL3BBE5spJrcrUNkppZA39tLDMo8Y7a2ADaQ4BxX9VfQY2WQ7QMCz3y6NMMCK6PLXxs7Zv",
  "key20": "3pmPc51o5jZUUYwxzBag3UtQ9p6RFVHhgZt93M5D3KR6oor58tRaBbTjPU7qesGBJMeRfDQrUBYzgbhU4thd7wZX",
  "key21": "4vxQyHvu4D9y5a8hZFXiCeR6KDTW22pDsoM5ez1WsjjQUkirRFFnPXYNrwc8yidNwpeQW3BaMQvyxuLKaUyooenx",
  "key22": "4wBzzTkfKM79AzmaFPeTFtseqyUHmt6CEzDW3hm5RUE1nHpfGP1mp73ujpdZ9WCCKLcNFNJEZajJcb8iQAqBwyyn",
  "key23": "39c5ZXqD8ov6nb2vEFF5YdVi3LBHwNCe6KBT7z7JjTjx4PM94nhMDyykpQWsnsbdev7CrkgAhTRMkdt18MNtozoY",
  "key24": "2EU5v6CwFujQ4NyL58CSreBhEkgyAPjgScQzpwja8uD3yoXuSdavrpWFG8oXyAPPTLr5XSAEJKx1C1A5iMpTmdTA",
  "key25": "4DP5uVxnJpdEmzuXdbUzqNEz7uMmCWzZ8QdxvhYxJV9uaesfWNAbetLriq9bhCJToaFaKyB98zR8akL9EcfQtPGV",
  "key26": "2qTABy5myTVDD6xgR58QFdUuNj7qLPdtVqJnSuz5xJKwFuS4UGqCjmB4RLhPsCvb9fkidfNUUkcf2St1rh3a5hgo",
  "key27": "5LumsTtDNNMFiD9bmKTQZG8d5f6EUKkRyuY3nMRH8L6qyVMbtm5qBM13wpAEys63BS9Jw4XqpdaGRYA4xmpZuj6c",
  "key28": "3P7ynJD6FTEFZTnvHYXmQ8CqAnnN1Tim2UPoSQaVkZtLQyKgrevdpAoZnMufPc4dUPnoP3ZKFbmfrrSt2FUEPLyC",
  "key29": "3EzZQA9duDRHm86JuTKaE2QtQdeHoNJjqLXYVyYjN4wPDK1vTttLGbdsG15mfQJC65r2vEHM5R9ii21bkUbpBNUz",
  "key30": "4XSvR6VMFHm2NyHUdt8HBXaCh2hABeLfPoeM8TEwirz6ZSvWgTvfafWLUwj7PqxYhiGGM9cN865AcLSkFZK9Vo23",
  "key31": "SsNtAU9Au3UsYgYypnXdb31iEuCnjR3VQxedyiaxMg1hqnETnY1riE4KuLy6q6SjgkvypnLSWR1D4GVBkDkmvdu"
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
