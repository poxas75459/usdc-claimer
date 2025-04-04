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
    "M3YtcSUKe1sLbXnXs3PzJRQZmnVmbeaBEcAKHLfwLVx9Wq9PK6f6wyMfiu8uEi7gTS2WACm69DKRCVaY8wbAa7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMm1AEzzwcEAU7mtqTPFqirXgGQS35wVKLwWZumZ9eSjgoiJxFegp4PzVewd1ZXeoG1X4aYDAnUrMqwDNCEUbXX",
  "key1": "2JfPW7z85nMQd2RwkCzXJgtjxYL6WUQhUpL9QR71QjEwLReBj3UdCaDJrvs6iZJc23c9gsAzDrtjWvAHumzKRykA",
  "key2": "D2ksn6xLESFttejXkZMaPvHjBZbX3NMvc9SmJRQXFD3Q2NQdMT7TGnjpKdYUQhrMjwRqnfXpdZcRt5a5dYLxMRk",
  "key3": "EejnMdBVGPF19zRUQtQHMtkVziAEqzLwNiK6avBJRiBXfX7qKFiAmnvw6dCncDgXD44C2MEADuYJdGqfCSrvKNZ",
  "key4": "2dGjaJPBe7LYc1dxbEAJ1P2xLHAF5Efxp9dDQQDax5WoTRX4G3jyPoGvoNk42hPLHrgL3fwd6CgESM3i2aMtwGy7",
  "key5": "3TCjKu3KSc5eskbgQYNvDXZofXrAZqPmVPwjw5ovU6xsdpV38iQLKGVJ3hrcBB9rvRKtwvk6LUUb1CCWwxWVpwXB",
  "key6": "2WmDFRZH5UzVuN1hX5kphRNptWrjHaH8KSK4HzHdoRpNyRQibiL1kCrtcCw2PJMGWvweSUB3Q4PWK6Lfe8Kg4ZPY",
  "key7": "4FweQr1gXT7HGoN2eqpUivTU8AufWJceUBdRauZfjxvcTeuvUUg68odJoBe4sfGRtHmWygoQaA4AjjfyBEgbT5UM",
  "key8": "RAiaKKwH7i7BEtM2mbr4uGVcxNG9GbMYe3XMaKcR8sPpJbdXcpR12WeLCjxDCGSD8Tv15MjCZ8Vn3mvvioKz88K",
  "key9": "5bgAm16v1rthkQcqCkEuWK1h6FKLrUB46zGXDAboyoTVRdHF3iKhrujpSCGTh9a8nMuwPPJijMNRtjL5oJZ15Zr8",
  "key10": "ZH6EAtVKVXQFnsDbhSi5davqQa5FkLuJTHQdTT9BsrtWyKFLyxMqqYJrLuYPcAPrBKzikHfQEfjD5Mtx5d1JTdB",
  "key11": "4nMHBuQxPPkfvh5E39XKUzDDEVGjrBZWH3yC6kBAZnJH7uVtJCpyu79GRLHHVytrBsCtwqsLFejw6eP5MiHKWcJ4",
  "key12": "2sMJpBnqrrFfv9m7AoeeK2SoLYGCF5sDJkiy4GDWpxjFqz5uri33ZH7t9WaFrhf6gVBbcQSYGZSgNcVc4b9xFSPN",
  "key13": "4CogaDMscWdwHrcXBK5PzuqXpQbULPfKoB5SuEeKnXhg4zpZQd9t5nrraYLVf2Wnz4s24yjtxnYyqBe3xh3cFVQu",
  "key14": "Q8zTyiqtVNWHsbCA28hmgp3Hb6o4VJJ1dRpCJATmdxPtXddKvdm96yuVcMauSdC7uqdgyFR149ikFHHBqK5P4Eb",
  "key15": "5b3LcWzMGD4KbdSKSsgjyJ1Q5GNy6NfkDhjGALJjPqgPPVAmL6S1eqmG2VyYk4KcEeF7YaJEmVXJzMh8NxVAasVL",
  "key16": "2V53e4QQG8Q145fHRDKqsh4wyzj3AYywfH5x6rf7eLa29PnpD8u7tDUszbNk3AGFRkx7tmvcTcrauibJMG79XFaM",
  "key17": "5GxJQTnt7PLHXgpXgBqX7GaDq46hMyon5wecjCYWH4HqPp5tqByoDRZTzV9tq7Ueas4iMSjkHoJtBWGHfRH7i6Wh",
  "key18": "5Zu89xhYAmB9sMxWoPds42gmNZfrfYsQAC9izEnrsyFBQEPhGtz1F7gH6Nb35WNDh4ZkV7N7bsDQAX9M3oenoJfA",
  "key19": "2s471PCtRUt7QFw4wApiWXUuE1PYpZo2CC1HPkzR6Lqu9CBPPFLp6SFM9mwwUQyKeyCdjoJWBhUg7QUMMvbGd47z",
  "key20": "HjUu26xH2syy32GcS124MqiJS26wfbMzLjcg7LEXPsGgNAoMcQRoHnMHeGLXsmm7TbJQZrMaMKbX8pwjm2vwJrb",
  "key21": "t8CN3TGm1mnkVWVkLvYTXR12aFoJwmybveTJy8GvTho2DxL6urdghESjHGGLRRDjkCGNLfxvN76mBuJKr4JqVdP",
  "key22": "2xQ8sWFuvmg1LZeFx2DeAK8YdcUPFUrgRZMSt1WAsnfwdWaENCHuxyKZsibAnKNDBtmScVPr7i5r7nndyf4vwftf",
  "key23": "2aKR53crSbffkpRKNs57aMrSwWGEuh4VP5LW9KYzZdAaCVBFbCALotzHJ6Ttvcu5NWXXeR7oyZZJKAqWNLdX34a5",
  "key24": "4V1TzoU8umgaaK6F4i2dhWL7AKA2ik6UvuALoehRovraHZYZvyZ2qQSdwYAiyW982Qx97Ph8xueQfdcQexsfqsax",
  "key25": "5UCwyjDPKoKWDXWemtYojYGV2d4iThTXaAeDxM5KFBusDKqUXj9dFLx4mt9pExRKnqh1zhKpx5qGnwzWpaH8EFf6",
  "key26": "2Ao6AahHwDs1xYKHGTiCB1fnqkcnVQsHKcBAkb6UFTyYdrFimCLzfFaL4MLaLk8YiDHjHjGZNgP4icfAm5Qn69J7",
  "key27": "2CGz4T8LAJQeBKkSjQuhNyURC7Dtb4aPDJmGtJyMnq3UCfu4EH3x14evpkVXsQDhtmFZyx1hG6kNKhjufVrM1Py1",
  "key28": "c2hf8XhEJa8Y417hFusoLh4sLfCVHEb2bpPg75unsGrCWmdBAY8Zqz23f8yKMkXhiB8ynDtYTywFmfk2jKTEawt",
  "key29": "5DPn8vXftatyFg2APmUo5DWkya7qEUBEehjZ7vZKbz9VD6BK8gdCoY3sUymSx6hxPtFHntebZSsScbhQZNfVExgi"
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
