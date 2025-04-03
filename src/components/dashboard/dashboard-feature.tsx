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
    "UwHy4vU9WeFLKDKUmm71mqYEwpxj2DtkNEo13jWSqfFhQnU7PBrChcL3sqWEXKTm8BQTFeBCEmYtmSetkYUR8ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c75zVNHcjhuhDQTvGPdsksUJHQyd4bGYfAYWfW6HseAuXBfuSkmxbbe81xmHuaYcPhyunmVfbjjGhrTwMwLMr1g",
  "key1": "5ivZq67pXzKnvr2GyvBoCdDXnzbEaw8sNijmMoqmye3P9VsYQaPaPfMbN6JffMRfKFuVeW5guohWtkL7wNMBrsVx",
  "key2": "51zcjA7FKQyopdF9rPAeeYo69Sqfguew8Q73P8nY5BqLarJ4HiVgxPQbDWBMPu5eB2tAD3bBqPPmQ369zqMX1Jgp",
  "key3": "3Mir9tprDCH8ZHtgXpbJYWmzz31p7k5X8TAvRg3KQt8EXnabNhsymwUVn1arDVKD4gQwwjNLXAwdknmP1rjST51E",
  "key4": "3SYRPdEyZGTgYKggH2i6z7AUWNDaLBNyq4tC7UnmBh4pPUBW3REcoTmpx3X4HLjfMUGKXLukKx2pvaSkpbfGGSEZ",
  "key5": "5i1GmhjswCGf2cddVPntM25me5FC7G8EFvSotbtWNXhdQxXjE4MY42a9vAKMvTcwin2MhG8pTgCwQZ9mMPZwGmvQ",
  "key6": "kw6jexTRTt4fdVu4BZYfNSdJF6eJJvwWGqzpMLziWqaAR4Z3ta6ZGbVR2PJmfZZVfPsTTqeqoNACSwHXRd8k2vq",
  "key7": "4MkcXo3LAp7c38PpdwohYTtYQjNV7rCzi2FtW8smxiKedG641g6PmqQGjXpDT8qLVAbCGwPxZe7CjEpzkYwJVx1D",
  "key8": "JovUvkTA3U8zTWu1tXZZUu1oa81pmr4Mzuu87E5tegEdZzNjAytvpyecLTR4KBiVxFtgmfUSrbJZnfHutbo7yBq",
  "key9": "3SvW4rYLHRduybCCmGMkZad1AbVmGbVqBMZaEKKY9Tov5fUyrAS3k8fvykX7U49k8pEHkf2pZAoRc5XcdbDVoqNh",
  "key10": "2dSN2Jjrgv5jcwZ1kgDMct9LnEyARfUhTQRgAH3HmJYGDFpuQKEz2xKVZDvTnA4zAGNPHQ9ymYo8t1XGBYWRgQX3",
  "key11": "2rXmNqhRfsHz8Jg77o4UXLq3fNo7HsKsBMVqYskjeGZfjqrNNWW5Rg8maCZpkNSKGLKMqvSXfoEf6NPoGq73BQox",
  "key12": "MsjBuH7ezLwinn96fMB4eioCN3nvfoNwpyqQaTbVX7zxAaZ4Gxaqnk5ryaMryebXuvhHVdFpgufWEo3dismBpdB",
  "key13": "24FEDD9F5BcgbDYwxVoAS98Hn4pXNLkdAdbQQo2Qy5pirRYDEMtiwxt6q9KaNQykxSmsV4SfVtME23LAWGFcMmw4",
  "key14": "543pQi15sLzYvMxToersoc9EbCx5wtFoQVZ2cD7kn1Yy55ncZaQXvcgzpASTSdkQfYDZPmN7iMKbW8ZgRkKGVafT",
  "key15": "gcKbmERTtCR1K5ZFbMokX6PWh7whxA5SonUDTsocFkcU5AymL9pbvZaf3WsYb71sUsdghfC83xiVDX3qZdRWe6a",
  "key16": "4vaya2p84aL3Xc8iKZsLe4LjCfdRETfQfMF7AqwB2zxvTzQqh7qQpAJiiZZyfEqP1sGzUZU4Kinpsb9kGye7R2JX",
  "key17": "44xvMcAVXoVTh7xpDGEAuxLuCfaSCAw2uiE9BkkNhV6wtApJX3HDCd4bJ6RVf2Zjwy58WxpE19GAf9L52S7f5KkF",
  "key18": "3mba2oCEQe1GvzMscGMWCMKJ2a8PDgK95WdCbecMBybk6kbxsKM7apU4pLNYi36WukczbCuPQKqRdk5zP9yJsi2R",
  "key19": "4AUEmtFBUG2hEhK27LRqQ1tn5h8PN6QPq4GLN2zmFMqG46Nsktyes7KgX1wKQFWoXQHgjBqBseNTKNsaDjX9WpUk",
  "key20": "5mqNyh7qz8VC9yX9sHPa8qxenQRR1Kw5nUg7kwH55R1vmn5nhUttDW9vdeJj2ZbnKJ8nbcG26Xy3Q3xZSQCM6Abo",
  "key21": "2tCZU21pCDyXvQGaj1x6RPN9sLMWbYDzNeb6wCKhEzqdkvPkXmVeSFZHnztkaNCvz6HVJpu3gXHww9bvGJgKDujy",
  "key22": "48qVngd77qyUsB9eSRAYpZXY7R42HCVio6WAqteQEFazbBEeKhCoX46YK8UVvweHQNaaoCGqxkknLdQBiNvmQynz",
  "key23": "3URWjJxfB1hLEpjuyFE4s9ttsXdhaJwEdBzALWGXozZbPykT3Ede8PEijfos9Dk7v8A7xkBo6Jyp4Ue928S2HMmM",
  "key24": "2RBuKtAaBmqjZKeVZvn47mq6SpMA7oR4ASDAw3wf7ZBBEMKgEmueRXwzwFQCUL4Ae5fvhpENrZw565Tcafokppzr"
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
