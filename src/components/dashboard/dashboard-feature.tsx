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
    "4BEGzX72Ax2UvBC7ifjTfxX8viVgUUNUHkJEZsc8xHdxSj42kPEmWYQPyvtYe76ZavSxRhdxw5w3W4t9shWwjP46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67R1sHXaBYfqmnHYT6RQthQPVGBgyhZ2mXPMRevefCe1qG8hCt6BbtzUjzFa7Z8YRNZvHexXMHN2Lis9n5C3JM5g",
  "key1": "23TCyVaX8x6jdVGJzjHfRyTDknAnj2jgXQWYee3TVsb121Z9ygXmVnb6PjfpjkSjvE9ewTJHQNE7L4uF9sifg4dw",
  "key2": "5288VsTLrKUdaS8NpHsSTUvBJxqxNMqEZqj8CJdeFCpRXfyW3i9oDKeZ7F3BeWPCWKqumkF4CmRNFaTf5fyrcvxX",
  "key3": "4v4sSkWsjQHrxvh5GABbYENAxr9M5xtf6YUHuKZox7p16fDbTa63Fm4JAhvavGDEbfsijNRJX4uB7h6NuoR9goK5",
  "key4": "5RRrdZCYVpnrffFGE8VcAf5dZx8o3zsYSd7KETxapAy4VPxsR9RCTEwMHfLYSzAST8tKhFXmUykCatHFFatYj6ae",
  "key5": "4Ug6pMYAwm2uuacPoCgB13BNnPZMDndxcNxwheMCEoeAu1dcnWBTp7SLngb9ZJHq9BfZNSbQ1ta1ytNnHKWu7Z1T",
  "key6": "3tc43UQ6D3xqyF6Ep1DwDZoLTqChkRD8Qo7kUeCLniJLYxwBybivjxgMYZtoQhWwgmsGrc1eDFN6UEQVUMSh1XiD",
  "key7": "5uiUaKiCtLmayRrEvWEK4GcdGJFbgZ7SZufSSVhQmkG1A9wLFpSLNVSM1vfhrxrfygtgomzrQd9q3NKkfuvdtSAc",
  "key8": "5AUPApFG9ttivHB24nyFZc5ExwwBvUzLFWAgxbUvShbuW3L77Niy67WzunJevcj2a9uMw5NFihLU9epj64Edkphd",
  "key9": "GipVx9dFV5wBQWbDYtQTBZhwrewJndJv79r6FrKJi4Ye5pMddwbj3PLgpwhRbbse8XBWWRTuWjvKzphaVTGLkXk",
  "key10": "5HeCu5cAHjq7AKNG4J9ZjCEkvx5KcMDFMJoB7LU5odmvhsSHYVdLY8MMrNzFmkRChkLBCBQrevN7SEd8cE1J7gSJ",
  "key11": "3CnXuLRXPyQHwmPemPXdVM5Ms4ZZ8kVv6usaJfWDxnRYVvJHZ3BSnzgr9TTBz5p928hN6BFDyf4U4V2MAneMkVpJ",
  "key12": "35syoV2YEXM9ZHKc282SVbJzJopQinEcPj9JgrVqiUbonkyj4aigwkz5jfqxJw7uoTBGZatawhaHi8aXWiS5XaKt",
  "key13": "5Cwmri3J1m52VquFvTwQYNaVyg58rbSEKHcvpD1d7mFy5CmHhVhTutJCHZ9CAZXJQVxhNJLDjndvTJ2BjhVAZD9E",
  "key14": "33ZjadfmCkxLwMvz1oTxgKapkBAJ3iumGENYMihQnsgkX6eYn8nieaczS5rajPKj8rLF5vEy6vcBTtAmduDb8Aiz",
  "key15": "44VdR4hHbtuVFKywkYmRf5iU8cRxTCCKLSsiJq435Zse4tPVveN1XG1bHJTNZ3kwW26tmczBvSr6t7zmLyCshJRh",
  "key16": "2mHWUwyw7TSfLSDBGHWZ48uKFPUKQGe1LdFmFMDSZDrrJZrabFzMkXCeyRARENyqD5gwd9xz8HLX7msJcQ4ZnJDN",
  "key17": "5hD4Tt6gWNUZm3EphSbEomsicP7tJ91nXXsRM4YVXG49JFVw7tBzxL8KHQ88thBwACDhhkUsvdeUT8VxsFC3vERK",
  "key18": "3vLUKy4aoxPPkk3JLbfKQDWLa1MGSg19RhoKkL79VMMEvXHvUBWJHUHnCMZNMnkJpTs4taDpax9thmVbeTHoiaD1",
  "key19": "UuVdEgtxW3oFpa8dBVyV3S4j7E6qs5gmjzFRBtcGqdGpXkGbK4wXZukbXHGLiuHxehgT9CoexJuwNV83uf6KBZi",
  "key20": "5NdnsLqN29GHwaLZ6Nb9dxK4SRcfvjyC5gYgy7iDaJZj55QP3BDMceCXHeiUP5YQPkdKr5N5M2rr15e75fjxRSA6",
  "key21": "3qpPr9bjzywqnCUnxxfSWgK3QapbvpPRU8h24pVBNSG7g1nmaoumW9VZKZSgVzsBow64rZJrWt1FBLCADG4Bzy2p",
  "key22": "3Z9rdyHiJPqGFMZa4jY4ab3bn7zpjduaDY6daaKKGCz6Uu8XRTWHNJKmmfEDNYZg9wmLwvnuwZMRNuDJka6HFZy1",
  "key23": "5VSHh1pD3btsrdg66GmvGmzZLAhVWZfeSvuVneFxhGjJiovJxhHXGpJ2MaZncjjmtpZwUMNoJSxUNJhuWpszZ1R5",
  "key24": "4b2hPe3Zz5KT3Z5AHjooDbyk9WEA1WU1YjL5mKZydGqcAQPFpKnGzzZWxKU3m5rh2LTTkWCfFVcUU7HPkt9HvSCm",
  "key25": "wiUaugi8cKR8sjSq3aa5saxTwbMERaEhzYtVs2BinrRPra8P35hLfevNevLTNyPCU84KsFjmLBC4gyDE5dufkhm"
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
