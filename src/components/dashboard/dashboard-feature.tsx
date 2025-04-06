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
    "3GZkKWNeE6amgXGriTG4v7tVpQVnGQzpRJW9vZ581sxJv2YRnpbVAN4CueXY4RaMBAnvVmXRTceQJ8ESoek7YPbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrKLiH3H51kRUS4ednZW5PNMcxeAmqJsPjkpH6cTaJmkKAYX5zT2swXqgde1HnsUBCXXmTFwSrvyYvCYTbPMJhh",
  "key1": "23LSSmDH58pJUQWFuFzuwjzLWy4ZT55p5dSkFZWb7p7xuXutY8qA5Jrk6JY4FLE8crheiXBExYt492mmok81n7Gj",
  "key2": "5LSJQ8VXmEPJgv7paj8MsVXek68Ws8NvuxmKbq6JZMcpvFv2unficudp11e8H3cKtukmcUMqgNr2nu9cfbompeti",
  "key3": "3uog76oSYDv2YDNL9xjkwNwEvq5A85YPMR1uyzMHgPcwa3ge3fea1xgiBJmLvbrVPyo2FqPCxfsLJUM7vAVAPJ6Z",
  "key4": "4FzG2ntDFHCt2gmvd4q6iyxmXY52oJRj8vK8XfzgfiRZHbB9t2NNcXG82HrXN48tD6Y441f7dhhbLCAppBbAdTz6",
  "key5": "4F3PTtwVgRoQ7ssyH6byTtQdaq1LE5Br2VfcjWi7BT7tXqyW9KkHrKb4XfMv8JcVKrWKBAg7dTuhwRaGuyA2nKBM",
  "key6": "5XL34rcAZLjHtqeNrJDvLpygoJF6YgZEgaTL3JDWAj32qB5T4HmfKsg8u8NTkCL9tUaiSxmLUXpK8V48corXHo9P",
  "key7": "45j2uvuF9UfCZw16GMMsvJ5DrRDUt8ocTT7LDCUHUnspQErNLYGeGrLZadZhyz2uG5qxHkysF8SeN4WZ4JwLUUiq",
  "key8": "5Gxd3gAZQ1FSsdRcbp43G5dGZoJ1hgQLhVtqtr1wSnxFwRj8jL7M42hPXNqf5svDksMvjRdQxb74dogkcXPxFVk9",
  "key9": "3ensq6vKZddZBa1P4xNkbqNxqL2LzNNbdQbgZWyuMiwYMtr3aj5jiWABUXDEVcNdwTFaHAY7VR8cZ9V4epF7pTPW",
  "key10": "2mp1eoBMjrEDyHmoJBg3BWn9arsXdSNG7GpAKqBStyqyfrXytWt7XiXXJhnuHjcWY2aWxGt43ezF1cJq2EW2cYsp",
  "key11": "LYBHBF7fPSgqDriUETnWvb3MgwgTCGjGUMmv1Y2e68dGXhygRdN3hv85khMAEKf1qSvTwfVBxCH3rCJpse9h8VL",
  "key12": "2yWhCv1xcRiRocPpdb2uN2xdNaMCQQNmjgMBXSi8xjPX1Z5tdsSDDtyYDvZXfL9H47rwHrk4dBmc4sUNawNG2FGF",
  "key13": "jXfcD5x2FeVFoNao1fBgVYbu7z4fGNSFohev4sMB5NJBoUqqRrf7rthLZFVqC9dgGDxRfHwki9o1apcu8jXKLE2",
  "key14": "bA4mfhoyv8NXBs7bn2ZVms2hWHP1UeJtrUz3HDXAJuLJ1QCcgFpiLXz2D8V19WrTuxjm8EBsRvtiDoFMdvk2Nt9",
  "key15": "5tKmdkXgGucRhkPu4awyu3GXs4gpJkhDQTaM9fwwgyBKKqqsTUGRLWG83MrmefWbpBsz5R4FqTde6pSU9miCRCdr",
  "key16": "ZbejBZL2PWhmni5HwiG5R1c3G2uTN6NjdKinyEV67V6B3PCJAuFN39gME8Fd1TcWX8YGXd4xDB8djeNyZmGjpMr",
  "key17": "2YnvD1jDL5CuRNYYsYLJ7QsEEJhmEaCoS232TWriAtMgXrpwa1noV9bRQEk8XueffR8rNc5NZQ3HzUtrXZswnmno",
  "key18": "hwzgEFhxf7otgVa92CFKd3d6dra81pNFazbAtgFzgZ1FoiNSemXRC5dMPGeFGNKmUznFYpCd4cyEDYyJxTJGKan",
  "key19": "5DHSGhm3NnwhTnXeRCDt9NpFo3mgYKdzfzvTEE8rpWkciDrt6pWpzVG85BqrSZYYMfPEH9gQrfTWFhP85WjhhYMr",
  "key20": "4yCuyPCrKNvECwmHQWmpdtKXTG6bLFp2bjWPwTLXQerMXsxQgZZAbYVHjvhxJnJk3s4q6i5ZEACaE5oZ7RAKfkfb",
  "key21": "22QQ1ucU8VuunVMNLoDDKGbxDsHnFB47E2XSrbvSAkZos9tzyYosVKwKXyFPsXSZPaNMT6MmMjQKejC4aA7nskJq",
  "key22": "38Rw9eFxeVA3YsuDQrx2pBRFqNy9prvLFpweWJTh1CmzcvEv8AzQh4kuRwmxzHFta8zsj5DcXG2HiD4r4tmxtRmy",
  "key23": "3YV6WbVHifS9j3a24RWLMFsxdJeNpuMWaTqUcwR9sPBC7ccCiNozYXCi6hMLQkUsQG4pdd7U5vQ7iDoccguZRx3N",
  "key24": "7dPX9cP3AXf61Xott1jWoW2ThSCzuKnUzcaNib4XTxouEmd3hB2dcWmoyiNXYBQUQYWPbihxAFC3xUa3RQP659h",
  "key25": "2xFCiF5TbH3eqhLRHDJrVwFMCV3CvVxrxp6Yko4V96uZbHhtXb1dABNCu1uVmsnPsLo2kPgfkn4cyKmyWgXFUKEL",
  "key26": "2k2yjwmhFF8YZbXuQTn31WnLiMftquzN5Lb1j5ebgRLbvPT1hP133vaXV8tk7Y5d3vnFJyaAouVEy9NjSQYEKo8x"
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
