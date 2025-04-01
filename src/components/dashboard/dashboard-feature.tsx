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
    "4kHiqtu7ZKJfwY5szHE8kabpQThE7ukepY37wMr9YqUZsoKADB4rMuFADSPFSAYXyjiNDyyGnuzStzouPZzd3sAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUEnaMzjTKAcGG4qrF19PoxxitwQqnPv6K8dVpV9KPpSRm9JpRoPcGd3bKagRe3UUZPeiXLVAQGFC7XaVUSa6ee",
  "key1": "ig7yVZyZbAZ9SBrDSBv38yB9BTdhmmcfXvDswk2y9dt7LZAGmwafSskbDFs9ZGCCBwGYscZobUVXUvhi3jYhQ94",
  "key2": "3Dw4w28krTCSeMmbpkVx4tW9Uc37x2TNP5QivWwW54mMEMNPBan45gWQgu99NiXnsiXdjCRbuoGXS3pYLQgRxcDP",
  "key3": "2wkKqMQoEddofbyf1jk5fwxpB9DjHto1jRrbJVUr9mhoaLy7AAryYEa7t3iCcHcRxJA7CTBPpRV6MZrJAHTChCX7",
  "key4": "5FHS2M7oYNkPyZPqktKxUoNzPw8tij19FjnBLE26HQhcfociGvo2MMSV83E96Z2tpu7BGzQZfAq83vp1yS6FxWSm",
  "key5": "KQwdZAAH67dUBc4mVDYumva5aWN6RkxuP43eVACocAT9nPwkX5ZmdadJNyRDm8cnqPozaQZwrytYAyo4ePsEkLx",
  "key6": "5KwZt3ocTF5XWkqtzDtxshTLdbREhqozb9SBqMzNxNf4V4fyT9bDLSv6k4GRniUVnR4r6N8W1Wf7HrdrtHGczGT",
  "key7": "ZimfQ9UFMUmawSe1wAhfCGU7ELMXS6KP2ty2wqM4iaf5XsQGbURHHRWpY6NhQieDkXwNFHSXiaSjyEECDSdrE6H",
  "key8": "5nm3s2zDgLyLE2qy3VCsPcTMJGoxdZkWcRAjuWCnrom17Zyb4S6V3EFS9LSAnDzwtmjADtPX4LgS439rdoqWWdnd",
  "key9": "3CQDf3x4b3eJTZ3e2RUhesDcdwVSJ3eBhPGESdvXWgdFWEK9oC3WtczQqc7ih41T9rZz1R1yauFT5UgxaefyqKRv",
  "key10": "5Y9RdCX1gZvebUichFSbDw3wxfWNFCT7P66MK1WYY4mRof4b8ZwnhLTntCBLMbzYb6PUQtVJBydd7Ps38UGb3QPZ",
  "key11": "3eK5M9WKMe2Dy13FEAvtEaMQNmfnS69TygFwthswPjbNQoxAkLF5VkH1VeQsNNFRUHRJa13xE6QRR5dNDXXHii6N",
  "key12": "5NfBTwTJduTex1FgCFcYEtMibEXriozDU81R5HoFPLtjAbM9FN9MNDkonHzwdFTqHvsAkWBDUrc9rhvqf1NxALSL",
  "key13": "4P89b6BEeMRZxGt9QMG7BULr5sZ3kKiL8NHAUTxREpfNR4fTUp4kCdrpKnSAJy8WYGPdC3RnJEFAa3nQ9M34QEnU",
  "key14": "4tuVfSwMtoqsncbtXG42b1UVKf6YdaKXq357tT2Gzh7b3JMNpDrqBsnSMivzwV6AX8eCWdPjjbyYAcid2DQKmiuD",
  "key15": "4QivGoEtCSF4N6EqgSoZhGNcdpdoELpXMSKbm5Ki7RPrcLirA3SaBdNCaaZQ7XtLBCvmRxsphzMAzifrzuwjrDDN",
  "key16": "5kAiVxHj7hjSTJ6MPwjBijAnjqN6WvcJbSoh5owm1VLLrZAxZ4oqqKwnwefMpcuWd2frDAxR3CYrERcWW1DbCyt1",
  "key17": "31dkbQJ1tXUdNAa9RQxSJ6yifxQNcbkxV5cx89aQjD5SJKF9YHsGfYmZdqZEo7iMb4B76vUYPfy5Ar3uG3EXpaGb",
  "key18": "5TA7BwwPqeGTBKZ72YyThm3e1HHE9KaszCrYswJvrwgf73TheE465wpkQGBNyqoceaynnHCwm34HeRQ7R7T4vunf",
  "key19": "b8smuhBqvbzy1D4q5GsKQo59FzpG3P8MKMVvzVHayGqHrnjdKMAXLbkWYxXrhmAamkHt9vuuMk8DfZn66f17mPE",
  "key20": "qgqXafVMhHbqDtMuFfaYZEU6cAtKDcnksJzmW9FvenWGVX1RwcPQ9EC28cHwqqBckxL1VWo5tsmVsHHqzcdtfkZ",
  "key21": "5RbqnGCNEh9cPTcPizXhTCh6bwh6vekQUCQPmuRGdPnJmUJ79Rza8cgCwWT3jZXvuVhK1YYgMrNbHPFrimSbnG6H",
  "key22": "4iG6jiMabSfvFqCJqKzESrQrBgwumuduCxnjbsCPTtxR8bQNLL3etzm9BbhCCejBMWMd8y5Gsjc7LTRdzy1R9go7",
  "key23": "37kKcSNUKjApv2iamBPZrX7QpiX4kSJeqrPDnuyMmXcGJ6c4yRYxfNap2stqqWu7LztXPSMNpvENem66vW9kBn2B",
  "key24": "5uFpgg2o4f5Fkn9kgjuUh4Y1BAaeG8yR6G9JtMsixM2kGXyafWnhuRgJbYTWHt3fEGYnf78JXtUh3D56iADjjzDG",
  "key25": "K86hEN3VuRJfrFAqCyadzPe4f1V7mrcJUrRrJQyZWgSACxSFmeGFDKC1rPHpBQWkcLJ5376zmnCjh9Ww3NUbnms",
  "key26": "2ZLc3p6BiFCpuE4sSFsGjnD1djGeNF58Qt2CFmYqNNUqxczHnq81avrkb2wgKnpP4LUZRPGM97jXnd6dPyeJQc7f",
  "key27": "4Lck5BEV9pNebWXW4GJRqpcNLfnGqv4aSoMiX5V6ha7m1TyGRp7JV63VeBgmT8y3du6X4kvv3s6PFdEvrvAtJZMf",
  "key28": "5MTSrNJHipVn1Wj3Pyyt3ETYvK6zRTATW3DnYvL7v12Ei1SXM2P1xt1NjAtVjQsGL3VfNSdSjXQk5SB4zQnwxPu9",
  "key29": "4kqG9VmupRjZ5pkT228GhxCv7bPqEBhA5U96D78SejcR9EfEZByh8U1o9kkdHmXVK7yaX5dcRYRD1LkCB11YU1MB",
  "key30": "3SChuzrzSFywoAFoaKSRmRixvwDt5CYi2DoaaaaGRVkq3JmfEX7RXr7HXy8vLRMqbL353N4c27XHBxuUABiinZ7T",
  "key31": "2ZSSvzDJTWSdkRY6SvechCKnikfpokrxUXijbxrHy56KLpRo4XbPZkHwHEA6WHapGKPuVY8uaVGzVgWgHoPasydH",
  "key32": "65dwiXyWPt9EkmiRHbJPGEK24MRiioDMbWA7WvaRg9LBWgDznHBPucQtRQ8jY7AYQgSgLVkRGu49KP64fN92QAmB",
  "key33": "2bRcGYBhGVBUJ2QqzhYoDJoUfo5MXLByy1KwayAdzatKgBkr5LiZhd7xUZuYU247KYZTDYVVWwpQrfiTMUVxAkZm",
  "key34": "4mWhEfwp9Pj79do6w7fC4conQ7fKMEJ8CkrVHVGRTefrTZtYL3VGnXGtid5RQrEY79z6Su9fC7MSzaBegUR12M1p",
  "key35": "5mop7UyyEberJmEAgYiY8dXfsxJyHk3cVUfmwqG8cf9cbvCkAD7bPGmE3P4cM1M8Vkr3ccpMSo8zmKBqiP1oZqov"
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
