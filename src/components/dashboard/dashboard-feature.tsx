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
    "Z5s4etGkD12tEGUQVwqmRyrtVKUPDiohXgjrhhxt9ce9RGDHb6vNbfJh9zmh2GqyQJiVgXdY9hVyPLZNDUh7AGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTGuwcD18Yzgc3c7eRJbC6PjY3r5nn51J59dWGVfiNPRawbrY4kJmGyR61WXsHuRgc9KeGDiitkrmaXsH3PKeW1",
  "key1": "5HMH3fLGfSD2NURgeiVVbVwmsWfXQogv7eLKpbFoH5cYp59CavLDWwwLzMGVXVKy3NbNp8HjtahnRLMcFDTWVzi9",
  "key2": "5n23e2PXtUGisRLdYCZHsCVdK2Eu35Yp628KykZvLvchjpexB91ek9Dse2tbNMhqRhTWBXEKCSQhAM1ukRZTxXJB",
  "key3": "3rvJ8WAjT2LHLGXvpWkaa4Nrh6d33SypwAzLfatKzxSzXNQNjH3pXtbStKDjeg9JwV9EFT1FicnCNiUYNRrztgN1",
  "key4": "Vzzz9EF7SkL16QgTgekgxz1mToYPyLAHscvxzAQ7MMb3xZR1HAU312S7TkJyZWvvb3J2mnCcuygxRDTKxM9ZHzf",
  "key5": "PPuPPYEq1sMHtwdZjpZ6eBGCUzxdCYhGpfwuNyYS3QbMTywSLHeidsBT8bKj7CDVEEuDZKKdKUH7grPF1nNkSyE",
  "key6": "4bbTzU54SDyhqAmJ9nH3QDAxXEM29sxC6Qm4S1uitsYXhrpyz8SM1DXWa2THTysqitqfWCw3M8H9Q5fdXS3GqLLi",
  "key7": "3cXcMPFHFSbYHZVLituq4uWZByWzXeTkkYhCjFxR7CPyp4qULG2HRjJp1CHrvGiix6eLpCkxmPujoWrD8JFzx4hB",
  "key8": "5GSxRzkxMViXCCebHmaFUZXkpk8Vk7VBgSSNZjnU8wWoMd3vXMjzt5Zc7ZT7tHTyBm1vpndNVhQv18qQhXMfgmou",
  "key9": "2AJFyNuB6KtF2iqP65Hg5RYZSoNkKmm7Genp4TmtBgP256xzwNhxMrqVVaWpC9cRi2LAdUJgYQceak5wijNv4a56",
  "key10": "5gzhVCBWVbJi7mVY869EiZs32cHoeKDTbnG1oy58PWKerhY7bv3oizbpDvaRkcJJ3Ato9RtwTkDBLResXzbrwkVk",
  "key11": "5SPchqXxuYpJZi6ZudPhuBvKRsJcyENXjgibFYosLGm1X1UbWBemY2Rcjn5zHzcYVTdfPxLibLL78fi2ZGCaEZao",
  "key12": "4dZPuHcYuPuYYe2zMxLAZnJQR7zyJY9viJGGqa1km9BSckG83x8SGbAnTPyWCL43vbpoN92EMoQmPCpRRBG3uGWV",
  "key13": "LY5kZ6AhLJYx8X9RNqNDoHqXVZdvx1JgcnTZKuWXtaKaGjvmG6usgwJAJuwick7AoL8zxgj8GdF9d7Wr1EGHjEP",
  "key14": "41B7Fzxk4KH2aZVAvTdnkMYojJyXqaFMTQfoXRxmG86iN5zAGqVMoG9RfqA5ce2aU4HZ6gPjMAa4FFmZu8iwZo1w",
  "key15": "5UHpqWj1dtTqZz5BWDyoBHYycbq4wkJBCMpG4ajnL3iaL8ej9kZyPunFqXVPjXmGQLA5renhSfFHwHXFhh8tWgQp",
  "key16": "2HLEyr9PXHtqLbqjsc8qSbD9dU5rkH1Gcb95rghAkcztan2q3EA7QkjnDyf9ceLLhHbpYUspG2NmNc8RsyCnJkMM",
  "key17": "r16Htp1fQNE7hHVAz9rRAMutSmU4rmQwdstQN4c4ykaYevRmMEjDTeQmGCCHzP86k3YokLJ3sX5tF8uTfCSGiTe",
  "key18": "3TXMvMaTyQLrNay3qrG9YV9Zjg9iiNjtBAW49Lt8HkcQTjfav76f8nTXxVeBa9qtTUHi7EKf5swNKH7BPPA7EjBb",
  "key19": "4nTE2LHdKdyGpZisAYXZmtLtpRGL6MwK55bi2i4628C3DPaRg7q3GvDQziDRKjwypYTWPVzqHTWpFHgXR9kwpdCZ",
  "key20": "44D2MGPWT1mMNYNJcEQQ5xBV6cHpBo7cvjEAYvnUeWmLMyhzFHcm5eAJJT5S5hspJBikDtoBFd8Toe2HqKGQ793q",
  "key21": "3Zf2qPLNvNnFi29XBPtyy24DLZAZjyFf8kcSzCtLQ7yoYVyWNgxC9PxvmeT7Sd4dLEUUXH8J7614ksjpwn9SfscQ",
  "key22": "3wYBAjgFg8PtX1a54nuhUyjis4N67Fk5ptbkqXWEeRQwNucZfa3ES3japa5Yk8NpuivgFm5fohDUA7uaChL9inob",
  "key23": "bvAe1PNLmgEaX9VXmEovouFdJ8pKJajPjUGbkHnQVQnDvYYUafdzm752qnteWnmCEaWe8fdkepSBCsbHobXdE5P",
  "key24": "3H1kNkiTPyy33fGLrodMqay9fzAwJs5A6iEGhyBVGk5vvRLB9afocoQ7f5KCt5oyTzgqb6oNqbCAoNp4vXVjPcJA",
  "key25": "4ptUa2xV8xjPKF4rvd6jpFvmMNJhEjNBDvzkigkSjUTpz7kzQJS8KkF13rDKofP3hwZQuTh22JQAkkC4UxdKx6wM",
  "key26": "z9HmFR7NA7i3cozXDRk4EZtpJP7Ai7FapfPJNY7kA3DfcqxbHednkMS3nfgxvytFvbZpr1dkjgpJMbJZPfWbCFw",
  "key27": "3dfJGgfRjaK6DUArFiheYiqMdknTw5TEtZJdR9RSdS3w9XXY5WPNFv2xbgohwokFXgvQWpHdv1CuS72ZmiuX89Zx",
  "key28": "5SvqcQxR3mFSgQ9TsXzSzMLhUjH9fQkkqUCQWr8uF9qiJTov5Edw9HmAv2jPDVX95WyBWMLXkPh387yBJDxydk6G",
  "key29": "3h4WLBig1Nn9t3NPoZbB6D8ithLnEbfpfX4bpsbwLEch3F1f24MSynTNW6FsjqeofQLYz4LHvszeibzCsUkQ8Yjn",
  "key30": "2Vg7xmwrucmeL76L6FK3LTMQvgCZTBSHnja6CX4k4Es6Mzn5QcQaWuLTXbCjhmpGLusbsnaZuMbWrD92yk7VWvx1",
  "key31": "LAN1nR5Zspz5zuiNwLifgY6EP1sWebhGwTKtSCQNRtvYHfPiW5Q5tg2grRteR4mNMZdKcuMppFzttwYLsVTN3aC",
  "key32": "2UXQSnYz9cgPJwibeuaTr35AKk4vEaYAh4vzt3fgnG5zDBS2nd6pmKr9mqzQt5pehY9iGC8Ea7wN4zRVjqev6YQm",
  "key33": "3hDPQq3jAwvNyRpgWd5nCpWcENqH4jRXjvGi1rNH3pQBRaHWkKjbpvs32Ms2rv2TzFMCJ9Lu1nkLK3w98k83EFG9",
  "key34": "3D4PVn755oTpvjgsHBkwjibwH3ec6vja4LvLGx6Rs66MDMipBNmHNvyqwsvhHMoKTpHLVwcktKxVvooEw5NtMJe5",
  "key35": "2Nxc3Bn1Hu8hfv3ktjd65gGMgjmubN9qeNQLWfTUsWt3qASLJBkhUSxyknZuJED67cpupEV24bXPrSxGLd3oR2nx",
  "key36": "5xAAZx2QxFyYrJgYYDM53CbXMWkPKqUJMzbstzQembJoV8BaMRm43iyFVGfjpjENUCC42BasxRiDCNuosDF1zGRd",
  "key37": "2njAzoumjDQG9u15DQsiGNsNekQs2nagbDigu9xVw3eByhkig8BwNVyHf3i4H36XTvVVPiPFZuQyUfDswG6QJvzc",
  "key38": "BBgJq6hfiNUUQGtu8tJ9NkYihuno5sn8xHUfzAQux9EqZLmPeRvNNrHcgNYh52NFUQLUBCQyThR2eEatJ7Jyxc5",
  "key39": "5CQgjJPGyjwQNidsihUehU9chbocPqHF4emWJs9XJXVLL64CWfqCFrE5NuvqLSSD42KfcSpNAWKLrpzM8xxeUthJ",
  "key40": "5y9CdUDUoyDFVbVxsTutea24KGLRHWPLvz3piraUZgjLfZ2pcZTbeist9mQSKyfSA1xanW1jDvjDxgoGZsWPqLtK",
  "key41": "7weANAc2h56v1oSz4gttPYBgBVJ7B9Zojpb67xsXqu4vAMjSY5PKbhVxTaZrknm41EDCXQuGfAP6vtmguetesVx",
  "key42": "2PyDcHYFDRxdUusuD3RBhmZY2rKqHVyZQJMyWBsSDE6ApgVc4ySPBuruuRgeppAjeeygcEAdRswnawpGMc7ktvTP",
  "key43": "3FZTkk1Z4GKXpbNvUngXbW7jWjdcJdKF9YgAtJDFsQQUfSP1awv5DG5QT2RZjEzsRfE4aFSN7MvsvLu1oHxqYqGj"
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
