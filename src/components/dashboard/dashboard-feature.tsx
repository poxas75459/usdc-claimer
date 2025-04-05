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
    "GiK3UvScN7dhz7NuTyRBGW6dX7XYi37wYv1CQeqtMEXimoUQ8ZazKihPmeBPz2q1ytdLnXJ2ytqoPTYAnHHjYET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1GykrkmEh2WjZNbtbSWA2p9tAeGkqtnLa3iwb5z5GcRLtTjNgQj8NoD3sFgx9JLQ6MQcsCJ94oZsUPwwV7j22z",
  "key1": "4SFysmxucTdvEAK9Y3np4317aNrtVLkS7ZeXFsuUhBjMG6nHPGB5JaaA898hNegpq8huUuygviFz3n9MoK1X5MrP",
  "key2": "8u8GqHLB1ra2EmnHxzMf6sfXcXEi5Pmfk9Q41ioqBEU3WEgtrM8xh1sYZTkJzZpcCKSQbTbs4CdiGZLbKcYb4FF",
  "key3": "5nprViijDpaDryarqV6j4sB1g1fCCZ13YJHmhQrhmkDo7ZXZqGQQQbh8iasnYZoxtTXLD78dHtKhkhSYbxT87JAW",
  "key4": "5uAquJqMA8nKDHa7n3Zzp22CrbeHsJ2ArxuNMhEtmSeFrTJTkCJcK1AwGbV8iSnkqUZAVPpyMgYrrhSEDpLHTtKx",
  "key5": "4JxSBzkVVWxYt37zYKHx2Xjn5AReGxyRRbXhjfNnGHGoj8V8WKA5wYAYRknron2u97bsWXLnTphoTJHZChM2bUq5",
  "key6": "5gRBxUnGyTrcuHmAHuo4oiqDdVoaZEd8DaeXNwSgPuLaoDS2BiTeirQV3AfePSXiKfvv7uTt3iE9JNRexYpcx3xW",
  "key7": "EvWWjXEgkjiC6e3Z98NH8LfG2uDBjLopUtshRcgtEc5rm1Q79kcXh6db4wfLP84yQ7z5wm69rBvs7rampNLuYsY",
  "key8": "4sqov17Cqt9HuDaRaprstQLa3QZCUcayrH6bK7SgeNtRingefvP9uMDFzNQqj4dsbtqQzsPY7eXD1t9BFeW5SeQx",
  "key9": "4WQ2szS4MmxRxKbYJTLz71uaJuqeqDXwTC2EUfx4rEyxDcou8ufuuy8V9cx13qaiaJNozVLMoTRZVNzTVZNJCtkG",
  "key10": "5oDqYbVzr631uXa7Z6fys7gAJwcWVen4xmkh7PPeqqHLYkPJDttE8WkPUBaU6o8TegsnRyK43kxFYyG1gYV3e2LW",
  "key11": "4X6LqbgEmLQj7mp3MspViEVdnxkgJnR2bTz9V3HCdWWEAkEMe6F7eoCCLp3Umv1HWzyYgnb1bzj2VGL5oUqhur9d",
  "key12": "jzBEyK73wDRpAFvGK9MFTboXPaZ6qKZR7fUoBYdc2vYcq3aQHSwuePVWdHKjnZu4R9dzHd1PYJitxydJnXTU843",
  "key13": "5E8BPDQKjseACDSa5MXDb17CpxT7VciisUdP2xBsbR58mJjJmoRAkG9QU5eXSyJz6Wt7C9qHESHdbjrnKjyTQEdP",
  "key14": "3K27BPxqKRSXqArWrXd3GUnK5UznXimnRqfwES5wKtrQKq1PZYpohHk5Tpqm8SXvj6ufDjxSjeNW4JN59vBC5aoX",
  "key15": "674Wgdy48YDpg8DZk9bDQ2BbGHQcaQQe3dW4fcUV1b17jnMu1HxCKadRsiap7L6tQr1pfRpjykPbZDzzqzm8rEc",
  "key16": "2WMHidZZ9P1m78UvXd5jPLC9mfZ1EMj9CXfXkobTJvdhTShQuNJ5biBjqkhhsurubs1MJrd4ky5AXRmTogp93jR3",
  "key17": "5PyM1cjFALEDDvLaANQLEx1N7Wkvf741rjKQdoiuQgHSdVFhNMjfj18gVnt3AwUMBVP6NRL9u4UTxEGGic1mCXZT",
  "key18": "uygDD5uZwUucyD3rAoyTNwpT9PhMUnmYfbbbmiWTBuKbrBTZxpn3sWfx5ZaHfhhejsPxd9yF4cQckWvkeGox1Ak",
  "key19": "4cFg5YQ4xDfCrEizF5zTD1s3bUDwF8B7peb6FyAwaHrksvwtEBZCjPQ7z33paZHjo7Fjm4cw212gw1gX3ASo4Mf3",
  "key20": "5tA7SXSz6machGShQFBTs64BkKL2WzEaKzANz6PE3A36vJ9XVqr94Kg79pnq68yYti2rre8uSGYPdvv5yhmqDkDZ",
  "key21": "48iXediNdskpy2deTtAwPYNJ4MyerATEFVrnS326VBPdVAEQbKDjeYQxyMsnaxQHJbBrN81uxCrnVTZavWywxhga",
  "key22": "5ySkbJ7RcwFVpabatDUBbAjfMBvb85wcrH6UL5Yrvjv2aaNyDagWd9WbXDYuQLwKR2VtEgPRCJkSrxYahLoF76CK",
  "key23": "29Rp7mSSNtBjgqBVEvqVsdrmsfQhf2xZ4d6dLePb77FWnowDrn1KKnhVQAuHNuKguuG5ZQ6coCcmxW6gqB55TTAj",
  "key24": "HTX8XbVY5bJoPWcCAqFhF2p42igXFMBspPCXRYpXEFaQ2tZBbXTYhCd2omAyNXfYNcW2cU4cRZuLxhhYeGAKo9y",
  "key25": "4nr9FyKczEXUc1kXXhAEBfeYpmQm9Fm9ujJo5GzHFfgLYmTurtxQgTz68kBdtLahjZt3NRmb1H85RJtoAhRrEvCJ",
  "key26": "3tV5qcqSUxv8jpnPdFmaK1H9dWdqiaxJwUwCrKRQj4Tp3HcAg64qUhuRSQQUyYgGFhz22fCn9EqLkyLueU1NXaft",
  "key27": "5UvhTa6N8LKWZ8pjYgiqbH361q2aFsH2QSB8ZHqCMA9XDZLg158B9eF2LZmTyGD26GZzmqEiw7s6ptNwyR24Kdw6",
  "key28": "326YFPcEyYs8gpqoEmEnh53dmfg9s8i3SMwesbqkG6RLuEaXkWEL6LW8gEBsmb9cx3s9YQSpDUipGJudxjo1PxdX"
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
