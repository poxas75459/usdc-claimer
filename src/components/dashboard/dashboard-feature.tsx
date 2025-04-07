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
    "51G95RToJ3mM6Pk5zrk9Bd7tvNRdiWsZqgvtTzbBSk1YRWKz3sztsbhqdMu8wojNncfwoKyBMGzBEi5D5BK5GW8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3cM5WgmCRFrJZboqM1dZyTgZLxxVimzwN1u1QHbmJjQr1mTLoYDEPDPbVWvAg3WSj9A6kYDYYA9hWzaDwgtsND",
  "key1": "45bDCEENLrkSQXt2YFqgXg8CK36FN1PPpeCYv4UvwdiWEY4p1c57DYFhBCHbDYCx82Tmb5fQm98yWuoZYHjxMPao",
  "key2": "xYVtNzhBBrdHDUnzw841dMMuCHrjzmrpgyC1BBjp7gZinNcDvHn4wTo1YvHFXTj9bZkwYyvG7ADk55TdeezX8VC",
  "key3": "5fLkCLT1vpCyn1vh3hTtwcgP8ra5xj1BSQmQ6cp8wJ1nfpCUmiLMgP6ngAdkvLrakCxyoR23w4FfePN2f1p8P5GZ",
  "key4": "3k1fkxXZRheRDUDbqe4S468VeiFZXEnmPDnHqGpWWzbgskDjx2nTjCHHRg5JEiYpPkgjriC7dAsf462aga1eX2Hy",
  "key5": "5L6aVBPvwLihTysSDtDo7U5gfbh5SFxXjTYmp2eiWsZicZ1UgLrBYJA27CEpwkvfS6ZW8qWKASC3H4W9eeThZg6y",
  "key6": "5XoEY7aGEWB5AcbRymAcXpUryE4rBKDFxcEo8L5iBZUjxZHZbVMk2Akpzkrm6QiG3VtKXCsbXxy9sEovjLzC6P8P",
  "key7": "2niNFK3LKy5TjRyNXFx22qRiWc7fWdY8sng8zg3KH3PD6GAvLSWnJqbPJ8zL4ntbGTHYSyZvqy2adqTMkuoXztd9",
  "key8": "4gCgzX6E29QgRprveK7HD725uHBThmysAdBCox5hXBMVdtw59Sx9MrWufdnu9VJ99bTp8BqajTra2iEWX9LPPuq4",
  "key9": "2HbXTT36X1JLzpQqQV1XrJT5hUmfMoy8AUdrBTd3up4xfVKBUxMBK39o641hMXtkMy64P82xgc5S2wRgvJTQUwF8",
  "key10": "2qMtq2pcSxTMZ8AqcKsh3ZpngLTFqQS3Eke5WhSrffxMHsSeqe2wAfBoMbbJUiTvN7tfP1jrcPFP64rtNikkqBvC",
  "key11": "ZSdNPgPcLVtcDSehrau38wQzCkw1Gi8sHRGjTA12cFRbt1ubt8WxJE1qhwCQqwxPuU4BrAF72HP8WeM95YdRkBa",
  "key12": "2SyKSa2obWxKGMzbfJspuV9agxy4cXbHK9KdAYjUgLJv9XtusLoodmMyc6GQgJ9MtFeWK6jGZxGu4Ht4kof6BeHm",
  "key13": "2itfwznDbdEo1oG2efccUnbLR5ivKWsBPDc9cGDDGNxFvGWCVoL7edb1GNrEQKL12PMQdAsPr9k1C18aSkzJi494",
  "key14": "fmSqAF5wywvzUrAzkjFhfWPEKJHbmRdcz2uXghuXY8iKg3aTuLpXv46j3pBUDsQD5ys4jb3qmcB35fJEZvjm74N",
  "key15": "NMZ2fW8R7rARCrgxtFdGdUQ7MTZLhkycRK5CgaqQxGDnY7tP9SxacBW67GHUS9vEbvq4YGDu4Sb9aL7TthX6ADv",
  "key16": "3sxfCS2tGnkxtAYjXNdEwEhr5pyZNiGdCo3Hgj24tw3HrKW8LawTfrjcoQGVkxjzEXVY9D7XUY2k9XLv6qqb5iz6",
  "key17": "4kWTmNJpwWAztCG85HtCk9Gudo928jMgErAqG1pQikvbn6vavaRvup2gmLyVyx1w3thoYZVcXHMhL5CP2oaLxviz",
  "key18": "66Ez4ga1tGAwxmkiboDEVChvHyXwcW1oASW3SccrqrGZJ5uiBV9FDGk4rVdLF5niE7j6omVuxMwWmWu8drJqHMGv",
  "key19": "2F1jQ1QMthu7bnWxvvAD5GL7kGU1mkVTKuDG1FpzfoyxPPDFjJJUTbfqnLh5q3JA7i8YDreDAsPSYw24dB7uDAqT",
  "key20": "3fifFiz56S28DfFMoS3ZMzSJeWSSuqkormiiEUTDcoRENEx7QLJpzCQEZhNE5bNQSn4St9Jxc927pKJxZuDWmBxo",
  "key21": "5bDcj5CduwGVdx2chKYT4bYqEHgxVoCjLDo5pg4foBcJr1AeStaFGYLNi1mBnatC33X5gtPzZ7mNHgC3VGBMVtUx",
  "key22": "4fBMi2zANPMNKht2mVe2o5NbJdDxjnh7cFn7DyVsm7GVgLD79HMHJkW3gBBCoB9kizHTUYXvmooFGSZ9RD1A4hCK",
  "key23": "63H4prHfuTshE2APxC9qoSAckYfdSLmSLRyUwtxGozAy9QehrY3iXWhnegz32cLuSy3J28bm65iqYUQr2vyaq87F",
  "key24": "5siNzQDu9Rj5ZkUJouXWRM4romM12AfmhoeyhKybAM8HNiaPeAo9KrsdLTmBSZkEnEpiVa4oz7mR6c5HwRxhuBZH",
  "key25": "4q8DPdLdjh85HmhCtdZejNCTF6RLmwWZTx29rMYw3i5GHyKUECZNTa4dZAjGwg7GNUyDPDS7phmE8Up82iAYUAp1",
  "key26": "21XiWZSARioashpds5oNyudTNgQs6Z7mBavMJGwMGvEJtF9AMJ7BuE7fyz1KeC8eHVUBoVhkiKCXsfFquC34cG19"
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
