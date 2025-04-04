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
    "47KzCViQwFzydpVSZaFiRfFP53SHGSNcmWRTnji33FK8cc5syfqTFZLHAZW4BFo48HTTYZosD98AiEFJ6Ly3Knpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVbSuZyJn4AC8GaAe5hMA55arK6ERZUALtRV3rfR8oMyL3ETCzPwi7vWbzw3gpomgrJMbwW4wq1HzBkBwGXWJJG",
  "key1": "2M4Jfdtp1nBhgSpXeHK4BAbCqo8xSGMDs29emizSvnPc4mLfRiR7M2MenGY1KUT42TSi56zW9KX6rErnSrzHrq2h",
  "key2": "4SsvhVeNJXoZuYiA2rpVYnxHsxLHEFoGBmaRa3kKsP9DUJx7xqVG6ygNt28z7wq1bE4BPk1BS14QYaMYYoVMVmLw",
  "key3": "vs8PE9ra6HWYspxeePbk81an1NSyUua2WhALtvKk6jHv2kbsxaxGv56v8i9GHXnkKzeL1puvcMP6CDDD3LfPv5q",
  "key4": "2bZtasep8WtHUeAVbEd91xe21Jtav9pnqjvUDSq5XHPGEefZzB8uNFthDPAX95uf9noCgGt8EomyjTASmE9f7b7y",
  "key5": "BJ5ZWgyzv2tuHz8ZcdZ6UKoKw4ppn2tz9ybB9uNXo8uJVzCN21U9rtWhejsPXFchNYjDZZLqFCcrWcHPY2g4DMp",
  "key6": "3g2jhsMRbKNSYVNUujCd5ZyLeg7maCfMEeSLmnjaMGHA8iqAe5uhw4QfSPrqXfyqnEQLmzAqax1UiWgnD8Z4LjWT",
  "key7": "2kTCpxNh7h8X4uCjKc9uSchWZAepNwzssWsU4ATuiCxMBwVchAbkxnkbuapd6Uj57ftHDKW5BqSkCrw7xw3wt3rw",
  "key8": "ksp9UuwxCfmKVCj5qSiZe9ay9jADq4KHubQmG7hyeopHpvnkFoMRt9mpFUUqCrsUHe6GNo8jajpPTZ5aUuSdWsV",
  "key9": "Tc3aUUYXX8EMX53P7cptFqnzx4i89xZPF4qTKpVKPLFXjhrT5NYpmXehiCho5CecxjWdCo4NmJaDsVGbcizN4QZ",
  "key10": "5dsbKdsTriSA6gR5sCBePCdv9oTZAyZ8Tm6CeafQxjKABKiX2fhhN7krkWvXpTudporX2KPh3UjWik1Yymz3wCW",
  "key11": "24VaKQq2i16XpnvMxBdbdHz2EqvN6LbGfzEUUetnHMpNnALASVbAqcW2bpBUeS9icZEkUZogoyT6MddbH7r2FUN6",
  "key12": "FfByPAK6ua2rS7i4uhn7sSiCfjPpm9hC96xWNQxbm7Q2FuvDtx4xSS2o6d9yqdeFCMy8ZeKzHrAi7uzb2A2mGSo",
  "key13": "35di7JPbtm4JTGczy4DKh9MmjHCwkUDcXVLn2QPGksD3eTczr34jybobeMvJEZSJsaeuc2uYwbfpiLqS1qsijT9b",
  "key14": "5SGzbbRXSuWgc9bJ8syigW82MqmhiSDZ67byGiSnFX8VL9PezbNZY8XLqXHuqicWacqSdoyNhYvJAEssLuWZKTbH",
  "key15": "kHT1EiipT913fqiEPeAdq8wGMvT338wTdrQBMTh3EqWEfGMYktqbPe9BJAo7oCxhW9ESVNt1hXagdE24MaJ5j3i",
  "key16": "FV3Xwx5yUukWaYGtAA3bC6Z56SqPVTe1A2JfyYF4YdpLobC3jjQXpuDj9mLtUoFXCBUSYKFWbcUjHhd9coo6JN8",
  "key17": "5EwCZQoP7YpxuVyvfXdHdGYxosZTzSMmY6i9gYgiyUVf7Yb3o9U6M8stbSdiSiU8zz4GiVX3r79knxRTFsMncBQd",
  "key18": "24QHfBnyXHxujt3KQ7ZK42mFsMG3C1snVc6vZpm8MdvwQLg1N9w99Ye6NbLRdy9GUrFrWux5weq9suLM8WPwWW4p",
  "key19": "46EXD9Pp93zjc9cTMT8bUn8cDrapEmdrC6SA5H1P2GvG38edKPwaEw77QP3oqcEp4vRx6qggMnJZRGQdGgcECExz",
  "key20": "3gg26GNRrumPmBXKpRV66kjagFBdur6y15417J9ZkZyp9BdQ373vcdC9trBiGqz7eW6VphLBYkG2YUiQmyt43Hok",
  "key21": "2kH1svJtPHJoMks7HnCnUNUnJbGKdhgVRr37fmnd5CAS89bza5chnomQBihPPgRQwV3QoAqtCx2617HbUh3xCRSQ",
  "key22": "2a2xP2EQHADP1mE3s3vKsQhCydouLRyKfFKMJGxCj1jCT5ZDfNhMDCAd6tBGLgnqtDe4Npz1PXvnVCE7gbniBKWM",
  "key23": "2SF9CgLKQLVDewZDd64sU4N1F892pFUnLSiozDDixeR5uE4YqTaZzzDQStkGkuDehZcSZN5F6YuJMwFCKYYAmJ1Q",
  "key24": "epmx73S8zy7s8CRkTn8JwfKEpisyhUTQLBpv9krQqNrdLL8KBytbDGd6xk39A324XiZzYiYWbgKd4Bhy6vPWkde",
  "key25": "3xUfjvBynr9TjcPdx2KdEnLnXFa25DbHxNZV1UvrszQCVhhqioGDp4HiBjzQiKwx2rEaAsG5BJQHkWvfxTAZfFQY",
  "key26": "2UJWYFwwbVK6pJZMuuBVKmiS6ZLiQyKz8hQ1z5W7WUQD4ymptBn4rTAAMeVUXQwRA8pbUmfP18TDA6MCjNcCAQ9f",
  "key27": "jUpNNeLqvHRqDVkijRz4TjT8wMhLhRFobVSN1wq7pjwQhJUGvgZ2Z7JXKwrr7hck13J1yyaKpMwC8cgAsPUQ4NE",
  "key28": "2sA1kaonuaWSzcx5Vh5kovmwZ8UhzranLrx81ygTd7UtutXh1d7iaMA4Z3kKXRf1U6HErER113ALvijDpjsC1rid",
  "key29": "pzakPzS2hePVSPXva4TeM785jDFUccJT3UWcg97jJfQKRufKyjoiDCgHH9K36qZff2bJ1Fu1FdBhprbMRCHiK8W",
  "key30": "4ZdbTQjFyUq5zECukSdqen5M1WDqdCe5VB71DCYL5rv5cmHN93oUHtQPs9VPZoEkybx6okC2Ro37v9DMXkqFTn13",
  "key31": "61WUAMnXJcTPXbfWHN8dhZJPxsbnqTRYeWzU6GYRYzafcsQbThGtYxfyVe4U6usnbUuFpXCaMoC5yABMRdQNNj4P",
  "key32": "4PzbWVchCF2ohfmU4TJohHc4c2QLzbdeWkLKbm4SLJjZ4HAXRt29XPNdsymG7inMatgwRZmXDehm2QJMUUAcj9wY",
  "key33": "23HGrerK5t3Z75nt8nNTNXckkS1BRnpEycaNpGJatgvMBawVowR4YMK3aoyEHqMQE36GYHRCoeYsK2VGMazssGjM",
  "key34": "2WKGDBbRyMu5W9NuCfH4zW8zPWVqq6J21yRv3ZiHsEdGaBeeQ13uvck4NwDgcRusXouFxVtyU3EyDyAfEkfMGvDB",
  "key35": "3Z9Z8onGns9BoQZsZs92DQCrwr2RVEm7auoRByupNm967hacDYn1pr8pAyDz8MUhrtt8L4RUHmy41vw6YV8m9Gkt",
  "key36": "SVGqAfid4jZvXe8obhK47T4fUVcKz6ocBY7Cm43Ghhygsr3GeTVFNgf54H8i9fjzehn8Et9aoJ13gPRHJTvnLVJ",
  "key37": "3RaYuosaP2pnx3QRnjRgT6VhXrNKg27LjpBrnJVMoaqAMYrBuLekPeJcohDmFmKxiF9r6wACAnMDPHq5vcT4aqft",
  "key38": "RbbpTCSsLvQ1BPCHqRo4xLwY158cDLezPkyfHWQpLuhiB1aC17H6t9ZdnNo3Vsc3NPYSw9ikXps7PZCBTkAsK1P",
  "key39": "3fbme4E7Aswwihtm2EQg6jQ5NoFhjPu5gaLVXMTWf6FHEaEKBY2p1RooXNNsF1pQV8rKqCSV277hyFtvT6A5Nkxx"
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
