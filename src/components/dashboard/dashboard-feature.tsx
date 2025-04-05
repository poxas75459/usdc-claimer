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
    "WbFQzdm7J8aWYQ9RaS5NRmYgWfweF7mkrSPMsKRtWfVyGjcfhV1KD9kexMf3smiYfy8LbukAUdhBwnjQ8H9yRn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nA5nwfjnWcitj9593fgePzsT9jutbAJ65aexvvN5LEcjAdi9hJGNkdWMj3fLVJfLtvtWPPx1KVW2fo4Et5dVySs",
  "key1": "4e2dynb95LCq88XwWhnUKWjaDZvgszWpnG62QEdF7YauRp4S9xkQormNmxr7zoo2sg9o5E95Cvpqb6ZkVQM1Qk2c",
  "key2": "Jw5YCRF7ucbK9bwh5SX3Hj6M5cg1gJ8kURSvGvXQJoPa3UXVyJRH1RqZikQxiEZx8qSybaiLwa2nwyHgXMzoMw9",
  "key3": "5QRKyMKMh1k27tSLoceZjRBiupNFBu2BUeHxBrwzPSCppcwWxF3NVWS7pS6GcELqzu6YwHhUFAAeS197P4A7aMe3",
  "key4": "4HwcGuw6T2yQBAuHSNszeAGgeXppJZMnokWoCr8ekWhGijmcYbcoeptCAZd7Gfq3FrRXgDUXXLEXdGTVZj9jg272",
  "key5": "2opbUTe5YdLfYFUNx5Cw2LCBLh8sSqRSnmJuqXYkjtLhqcxj7GqZrUGetV8dqaiC2Cw6G4yiDgE6ZBLq5pBqoMGn",
  "key6": "2T74WviDHyzJ8wKcQBzPHus7J6fna7Jm6Cytrgaa8rN2MHFxXu5buCKjc2byHfyL1QxVJ4buwsvjHUzgqtfhhCJT",
  "key7": "5mYBgM8GKBGEfJ43hGrQv6vrFVJ4QMcbC6xkAhCS3TT4wuqNT5nK8rsBjmGqsSnufpZ2a6QuUSXDuSqyCrTZVMfX",
  "key8": "4wgEnnvvUZp9ZvUX23dTyhqE2TvBB5nM55xW2e6dv9GQA4yK71Gcfob8jsnTFKQgVAPAizNAz6TGTrFr63uaC7ge",
  "key9": "3735GSUr3EpWW1NNyx8GXHum5mNCLN7U5dJT4D18pjKo39UmwdAPAFpwDBfo7LXJC9JgXXh24Efm7Dn8gUXZcNSu",
  "key10": "4Jy3mP2GXnTxFnaw2bVrjXQSMTAShMoNPUnd2sU1BqSNGgpMb2Q17qBPFiWcnoVFywLQfziDhwEs2buaBFcBdb3d",
  "key11": "8VhFKfToeaE5Cg4zsuwPVcUnyNMkCuUnfihsknYZDVBDznjPByFT2L5eVBCC6joCvw5xZ31WMsGudb3AkBkLBrH",
  "key12": "5xRSU3FKdUtVaJP4SGZoLyiGmdRjSWARGWrFpuGU7W7dJmGwtNXfBtNN45QBJSuBmPyLMiG9cAmfmqUVdDCMuTC",
  "key13": "2NPBBEcuFGsRFJmSxnze4cARuMERzWJNDBmZndAS84BQQnTdj176JWW1vrARG2imT7cDV9NoiCQSiusoYiPDwKeu",
  "key14": "5goZQN8UiRY5nEr7fSoHQHohuVSt8rU4D2x8THQqYrMRuyGhiZ9x4w29F9hvsCeGjTM3JbsnsUpvJueAS1SGrb9d",
  "key15": "537175nNsrzgUvU2pgus7d3EEeRuf3gytKf3zLGU9LUP8AseRGQ5igJnmSEck2t9ZFgXkAPDSAXeaSZ1VrUagqqQ",
  "key16": "4aTwN6h7qaSPA2dzc4T89U3pXTwxn7ueS6FWPraZSCqRaNDeHqNfFK52m4tXgvxCuKYEwyqZ1toiEpuWfLxTk2ay",
  "key17": "2oNNbx43ASue8uRKA6EDgRQrhp3escX22toQJMbXwemxC9GXPZeSf1pjmjHWH9ZX83WFnPKmg4QhBFyykDjWKAPy",
  "key18": "4ADRiL75EPn151boFBHB1AFxoQhHsmFW87fbj4Fc1hEecXWdeEQSZJXXdLhxYqPJQwpF9DLzV5wQaHKjPEQwzKR6",
  "key19": "54diqwPnfeEWqeyAksrQ16bWMd93byWWkSCKbsVe97oFyeDfkZbJtYCiA8RJ9J6ts1g48kApvFCD83c89Uvjq89c",
  "key20": "4RGkFsxGg838FUe5EpPKAYcdYGu99UUHSFmBQykJeQwD77AJfMTjsYAUYJi9ycucwZVxh4d6Fu36hAJnGs3vcWJW",
  "key21": "64dsGLw9n3X9UVBKfQioq2SSundujXSQCSQGocDF4uRjME1ri7XLM4CmP7TqzM7Fdnwv6dSiQV6571MFrFuyhd6P",
  "key22": "aEN7aYxbg4NmpaKAokc5dhCAsruwdAAVKv5R3TGEoupqTFiBoWVtBq67STh6EXUmVJgAiDYs3sQ2jCWBDAoCh2A",
  "key23": "4ExNH4oFKd414hYnZMxMCQcyTRcvria1L8o4CW4D9Y7DQfxfRe34BMXkoHSTfckjNu7sKmiULMMPMj9jyCSL81aT",
  "key24": "YoW1TM4AZXnyCohuEevRTo9zj63dNJPmbpP2f27jKhpBU2GcuDhcpczjhJDp47XHg8U1cQs3ea7r3ezkoF3ufBb",
  "key25": "5qomywS69tWHRNrziNKS7MQ9mQTKPgUEtSvQH9chJd6fiSDRR5ZtZ3XSm1V9izwgHDNXzBsd8NxLcExCMhMRrzsz",
  "key26": "5Yt2DA7jyj2fui7Z6gN2inkp2BmshPV736ke1dG1g79DNtoXNzPvMpYwxnGsvj7FWoMVfHaA9DJqRt44Pk2Njdrg",
  "key27": "2UAnPJTvk53AyJSqvf3ajx9GLisBKNieXvuuUPV842TFNDyywd3xdw7Q7Q164dqViDYYrxcbGWM4kADR3a21t3s4",
  "key28": "2J7CzEnmZX5Fs7t1LUZxUMCtZ7KmgMeDky9NhZ4HcFrXvYQ6EdT2wSWZadk2pCrZztZcYHmHvADr8hfBocGJqzot",
  "key29": "3VHTKKgmDpSFMAeMxruZ9LadyRt6kpB6NjEjHxijTKsurg6dAHSpxx4kQRgB1qXAXo212UmxZfodNSN3XPDAorMh",
  "key30": "5Wnnn1nrYSeDwniGVR2trLzA7EijUHbGW9tLkuaAAaRNusjo1z5m3ji1xejWk9gH33cZPz6dCn6cnG9wnP5h6j7Z"
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
