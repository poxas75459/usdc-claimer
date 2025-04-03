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
    "2GCbPi1zUb4icgV3CHoareDy1A1HLfgoUujpWXFCxFFoQGZFJSKC8RBztYTAgz99vTfYU6fzt37rmce4F885AHqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyEgz3tpcJ7tsHjk8giBBdRqV4mDSGsghHMCrfT3P16VVvDNd573AdjKjQXzxWN7sBBQUkDfMHMFbhpCQsopbwk",
  "key1": "2mvEYKGTVfVqYkLBZii4VtvqGW7pBFW8GfTKf8QoSgdFKpvNo8VGgiCdQ7AV3fHqz6oENSBXsygbLjCvQGJqpx6B",
  "key2": "3jkEF5SxJ5oW5VihtWMsG4XmECguw7eSuxbNergXs7Uiig1hwz2Mkbn7poF3PtAb4ATYjcsiJreqfLZJSMMXpCiz",
  "key3": "2s77BvoKE1LS6f4yJQka6KVUjpzXagCQUJA5gdFE1TCdDtzHLfXr7j8EoYmAyWogncr6wGqFpm2gavbfHRUKVtbh",
  "key4": "5MXVubBVwffcZ71EdKnb89mfgg4PZLy9gxErawKKN75WdM4nEnNQnHcABeku3wgMRnkUA1tdKFHf3hVBRQwhrX8X",
  "key5": "31XjukKiyHqas562THny61C5qaXJdnzGM8vKBmkQsb1edQ2cyF51Pm6HtSnApprbkTKxjjPQgttvGyrgywE4D6qz",
  "key6": "4hLRbq8kxBhwf9G5HKbXEE1vBLj7MHR6FwhUeMNT9ki3W3TZ7nDjhVpPbcEnyRvEqE33vQGYUz6ciKonyVVHDCHZ",
  "key7": "2YnMSVHKUfuJKKYKn5ECgPtaEcv3cc1ndZbxhxpZXoBePyVAFkA2yHCnkN6VwZkPKUjFk82gQ5dBtTHpzpFeFM5z",
  "key8": "2U5uinnpXXb2q8JzLRZyoUQjjjX6VG6ZK6sccm1K8hM2X6ysHdvVupp6aBR2sQCeksEGpLoaB5RPp1AsUk2Psn8H",
  "key9": "31VX4BtM54zXYKnMQpHTzskz4e9UpUN1uFRKS6RbNzmnaVaym9ULv132JCvE5omQW4K8VGYP5RDWPuuxfXSg4XcW",
  "key10": "3UxZudSnSQ1chH6MWrDMp19WENkfx79jeUa1chiYchr2aWJc6KfJ3Ryg5e9SnnJhNREG8yGghyrhhFov1F749K2W",
  "key11": "VKn2jtCwxC4DjujRwX9QfdgDnSkoKsje6vmCMzet6iA8rvwSgdfopLHmMEnLRAFvBiQ4vTw6e9nDTiAi1JT7eXF",
  "key12": "5Bfhve6RTTDeGvjMP5sG5By9BBceS4Kvbv1X4drygD8jv5EVYoSD73WSopzh1WjrCEQKu57BfXcYez8RdFbSiWqG",
  "key13": "4gWFPEmVx4dWzwEmAKmCSFPaYqDJwprhvXtup213H3D6haKyKVBPxX41xtpKaUcqHqj7pNpEBAYcE5LYPKpM6WGQ",
  "key14": "62oTDorGsJGfXFKYDpfAFcHdSmZBe8ABJQX3TfjN4NYNixvbidvtnW5yfhf3s1puf1o9XyFWsN9tVJVCjjmiNDxr",
  "key15": "5juPVCeHaiB6KsDbJEfXWZjZ7o7PPthdpjkt29sPJMgpo4KQyZpKWCjEijAeQnf7MasGkWsaFMvhikAuPn8caikn",
  "key16": "2KuR8WyE5s7SdtSKUN2Dv8vKzYzJR3RykVvoUkEnYUs1uSRXPQrwe9eqvvQSKNKaf3YPwr9RRZX61Hwp4jkXgra9",
  "key17": "LCsA3E9fX3UC75UavYwMLax7UPHa6cvh9o47CB9oLnrWhMT7HMpqkTpZpG3ut8x4dXVeovKTnJNzSEouD2g6GTT",
  "key18": "4adcy5QxsA9XDWJ6bL571dMWPe4F5VPtkfdGSh4NnkGomCFTBSbKs7fhBdRVxJ8Jvr62xUWZpkMbFCKo2m8jajRg",
  "key19": "4WLAWaQPmpvRb9AEkJBkMckQuFqZa6K99SaQkAgRzqjzreihn1FaNWZPCAWLRzGkJhkTmEUNb3mtGRgMnXnPKKq7",
  "key20": "2UGzPaefR26YcdH8DqPFneMX8kUz7r8593p9kperS73AFWh93cXVvanGnhFrTW63mmxeh6fpEkXp8XXqd1e75nUn",
  "key21": "3WfFASz6MgyvR2TWVJttu5Z6eyCxv7fmHW4f5nA8kVUKqRaap4uGesq94NNTdyrrTNxxmzz9odhWh2MzrZhn5vD6",
  "key22": "4nu5qspbvcF5C49ENo6QRUejvTmsUYkopRm43hscsu7N7j6xBD4bky6JuQ9cfRWYgDobnK5FKyoEMuVhTzzC7dig",
  "key23": "k2dJRrg7NwwTWZVmBZUqfxLz7yqDdfJ8a7Nn5axHvbmiBNHAtxpikDg9e1HJhQdmWvvqq1N5GPSPeeiUYhcu4bg",
  "key24": "3cJX5aCUjzF9Grk7MiKHByGUKDwTu6UybbdKbWs2XwthGLB4QfNkCkVcQ3RWfkYgfR63B2Lp9u5UKZdpncTVvyPQ",
  "key25": "46jq7JKKkhGhT4haNTXUEy8RSCLb12KXVtA1Y7NW84p1BfVBJoTWqQWNbB1j1kwapD55iDArg2EPuYV46waYEw64",
  "key26": "5C2zMJGrPuzymzZCGKBVGRrfrvdnSpqz6nDs73HqiBkarXDKy9L3sJEYrfLeXfYR5ULsZgqafNgBMmKUtT7w5a1B",
  "key27": "5KcsgyPYN3QECcFWEuGao2PgzFMwjZsw46Bw7yV4Jg72ZieDbfBxHvpBp4fGWeo6bFoE7tKaRjbhX4mBcKXRPHXP",
  "key28": "2Wg2wCkQ54xskjkbWyFoaWzxcVfZfYmARB6yMrxk23sRMGZ9zY2ufMb4vNwuk84q3anuoELbcEtH9amEyyz7b66C",
  "key29": "5V1Sqcm5uEhydUWmD4v6CmpNxBWvubPewXQA85SQoCLEWQfbwicpUdQSqQiB6iwoVhfYc8ypkvQqjV6UsaHT5Frv",
  "key30": "ydoqFTDQVXStZZTYUyokTVmBzZUNtMidSkAfxd6KdZsDAd6goHFuxSzDcoX64fASFAKeeTMrZLaorJyXvGdxcwn",
  "key31": "2VjfEtq5ywCJV93FCiYVqZGE1gzANG8Xqj1XoQzWCn3rGMyR57MGcnoUzdCA6qhqJKVvYtDBCnjNKhBLWNmDGeBb",
  "key32": "5yUgoYGsGusKRQ8dC473wH2vK7UeL9uvSyjJryexzuchCxuhBrzsE1aXf9nHUhdHsQ82xjKF9n8LSV5Zo9tDxoyZ",
  "key33": "3HAgL2FFcyUT5hTaUGR3iNcbvfsbCGBa5VAz3TgnnYDMNF4ELpHXsK5sdgJJFjfoQjvM5NHEGdtXUWjJTAiWtbG",
  "key34": "3xdJGszw5vmgwznxWt5jr95Zov2rYTtcw8hhAqyMS2LpU72oQush63Nd1NAAQE6bYDGVqVUr8i7j4sKc8xxtRCJs",
  "key35": "9491xvVvd9eHH6hh7ndsgJ96P4JWDwSMuNGHcgZyg3SrKraKZcTYMHFzKsp5zeN5DLR98w1P1z6xuaAxwRKwPNz"
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
