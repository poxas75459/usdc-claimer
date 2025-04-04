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
    "FRKM8MbyB2PJfbdD13Dg9DVLeti4zCXoUXVKBCoxbNEt48n58h5auvcW4nwd4SKZjkgNESR88x3vm4iL4Cukzh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFKVsrYb3p2y8GY1EqFfG1VHqbzioRbKy4rANqiMmdxcS3Lq81vtNdhfRvyQRwEzJ9LiakXLX4GmRYwkEtZE4wF",
  "key1": "2cZFqAUbCXN44Hx2ZsPpXWYMzGj7ydbwZmoXwLGEV1m64yvhGbE8xYmWHHem1LeyaxmLnCxPBmrMEAWM7ED4WREa",
  "key2": "3L2iqE9Wv1bFgr7WS8ZZY8QK7PqBLs3zapPwusVfPD867N5CiEVDCTHEVk2Z7TKxDyLBf6j2mRKeJ9VoaVfwrTK9",
  "key3": "2T8bYSo1mkzVVUjHfCmMQJ4YwmoHb9uuRutqhCpVEwLC9kdz1L6zyMXt4eCF44MZS7CmLAAfhVxpAAjYiCQ81SBg",
  "key4": "3wmiEXYjSZSJ3y2zR3mozXdhXyE8viED4DNxNMc8aqsb4yeXFnzjU6EhUgDpZ4doHthfd23BE8S93gUymXiwrv1M",
  "key5": "31x5WQPA62wEd7fzL3KEWWwkkg6XZjJXk6voovabSTabTBdAjX63vBHiVDxXR5BKKuyEKEahmnTStx8jxEhbHVYD",
  "key6": "4ZL3AJY7haXR5ef6ANDUH9tZBasx3t9pRNnFmtaaMg7HDvvnsWt5JQByhjfi8iA78FoLYzypRAQ4eqVS6S3kUZas",
  "key7": "EZDReNePJMbvmT9uDZrroi5siDaR5piQSoZxenyHfKR6abY8MCE9akBJwa4iMYDj7N7oddCC53aeHMyazBg8oHK",
  "key8": "2ywBGyxVKMMQ48ZkfK6VdJgFR2pqR8yxBfTgN2GHuJpTHfVRVbXXeyt5LM2iZk26bZVUt4XHXTYMxWABQeFRss1f",
  "key9": "4KjHyspXxuKrvzo2mPt8qTpLB199vcdLKcKiQefkgtjUBzjJfCiAg4uwT921cHcNkXsgCXpkj4pLNK8SELaaiBGy",
  "key10": "qzvziN1W45zTkAV2Vyv3hNMzkuKjdiJWtshXPNhTyv8XsFhQ2h5sdfmZ6RvJ367U65hXJAxEGqYEWStqDWJMeaP",
  "key11": "38LpnYBU45RnaArryjK5EXxgZwk45Az2Me1y4Va7GojUCFngURrnFc4GMFumpnHAw7Zrjqu8vXrYWfLtc5Fb6rQf",
  "key12": "kNZ84w2nH5SSffVVUgdntqhtTr7VeA2SvZgumjtvVn3TaN7RxyXbwXfhxa15HuGqAFmnnnmwogfQh1XsCckNCz8",
  "key13": "124zQLKqhwHeUxnLuM38dsQaDSstanrmvu5QiRM4Qvu4qr55eoeiun6oBXqd3G9qj2J1CG5qN7ap54RnPobDBfoQ",
  "key14": "2dwXaxGMAYXsGcGJ2sUxDfjMV2AK5mfVqDeXyVgs9pzUDrr3U835eABbvbCe5hkAZ3HDBqFH1Jv1X8mQ3mQNPWrX",
  "key15": "5qput1ByYhLo8fDktJ5EcfAqJWV5A2nmBnsSFmAU9jtsFBpZpWZdVqD49ZM3N56pRvtSYxcphzmw34XQCDdvVWVJ",
  "key16": "2q4qrwjq7tRquHjYcTeY19bXuXGGsxz6NftJ2pxdWcHvdsRCi2C7oN9rF3noWvmaa9wUq6qSvSfBxQji7ZRDWSd4",
  "key17": "59PydPtNGKb6fcBkB2ApReVBNKeJtSXdjxUztswwngHyJG1s6Gi55PyBTFKyBFmbDroddGtLZnXsF6S7fzAUxcm2",
  "key18": "2EAuAhUM6uvDd2GRh5bJe4bHMXYHcEcS6vcDrYVEYdyvv8pBMxv7ApMsbt4DFjZCgaT5tPfkntScACZxeauqQmyb",
  "key19": "3W82dRaLeqFyT3djw2wFsMNZpFeDKqbXrMaPTbYDs2dQykYZtEhPYnsiiWr3bMmooETvus9PZ8pvgryGbAzW9pVh",
  "key20": "3P9DosX75TYmLrtC6n16k2qoTqKW1KKqxoaLEXKVn7anq953asYp2Axz6rS2m7nqv6q78airHmYQufaep3eU3Bdr",
  "key21": "G9VqMMqVZNf9ahx2soWcWa2hnZbqhvu1i8bXfRfqJzrTCBQ8tdhBku7p7b64saCYgc2iFTArxZZSYLUiTXBNb9R",
  "key22": "h54ELT5VQqunv24KKHkLXHmrw6a1xidvCSNsMvXUjM55jomszDRVckyr6DHzp5fidaKyptA62yHQxKPTYmR7qVe",
  "key23": "2PZ4MAvCxT9krQG4PWgPukHfzPkdxmc3Cv7K6wDvC5r2bvrtAFTooVV5xghYfRX2dh6gDdK22Ma37FaWFbbW2iBx",
  "key24": "5ZJKu8fmB2kKUibPrX5QpDYq8jgiJV3yjHu2Vc19cz8vYEcAN9gTgsem5Hof6TWo4GsYpfAgDtar3BfRV7g8w84D",
  "key25": "AuXLKccArkpSJrkFkWmdrgR5HtZE7we8eUjgTFoSmZREo38WbJkmHg6hxVf1vm3gj22BXUyhsHcyx9iaQbNd8eb"
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
