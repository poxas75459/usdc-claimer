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
    "4hyXUqhwRo3zCMqXhNfoNVznfyhS3bKwBShSD8F1GCTL9i2RFizyXBDeaPLW7mnP9ZSoG2F18GRhH1yV1eBNi3fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E92sMonutrJ35A2mMeoJAEgFLycsVAn6jpCCofDxoojke1bN8vk1eB3cPrJN9dMQZMezf5nLaaQUGnrCbueaKBt",
  "key1": "SP4ZTHDknCPKJ9nWTBm6oTpgwF8VgwQ5f2foQHgr62fJD6wj7Lh6sjD9ThP9kuS2RcnQVKDHmAx4RpxChrcCLjN",
  "key2": "2E4JewKwybeTqcMoqZUt3adGvXe5Zuytd2MCRpEzCz3959nP1TFJygbj89DPGvqsE4eqgqTC7kUeX3SiQCSGFpon",
  "key3": "2dGLMhNCuUqsWQNgM6JjHwQLHREHM7YdC73fqAzmaobJhvgVgg7j7BPm5uzwmiufZJw2x9AgTdYW3RFRPbBj3Vep",
  "key4": "3bF91RcJsjHnjX9zmyaWGgUzqL5d61hPRYCqNYQKy8XQRXLoRnXbmLkbzCXdDfANzNgE5FVJyuAWuwLuNt3NLyTz",
  "key5": "35WZws3Hif1EPpk5zaQm53ryMZ8tDBd7qv9QnQu7k8JTJMuuTKHV3YewcYsCFL5SFacNAr13VNY39eFM9knqhobT",
  "key6": "3tN8AWHBrAg8TLLQrpH8BnhtrtD8ob1vLmSqy8s4TdBGU1tvcjxT75BqUFKdr1aRJHpoLYvP6PgeTPDYPA7zZCbV",
  "key7": "65niLTayEcMW3WYrSksXX7g7FvPLfm6gFLhgWZ7xSe8Pn63bDcNKj4AfE7eNZBNzW4gASG6FKxHDSovcycGr71HX",
  "key8": "3h7m4jPGj33txbHwa3oKV33foGSUBJUNtdF5RtwWYT82LWvPZnhqdiCxiyL8VBxYVyiXqk7BVy3WtSWeS8Hoj9C4",
  "key9": "5hJhcyoHwmJjAoxCAT9tNMNz9mCQTszL2U9acWvLNrMuUdaWc8jLGWwJc6Bua9rGXuV8QtZW5wXwL5ecCf2uk6Wz",
  "key10": "2DworSBuk2aJvo6oGYviYR1FH85XWusxVNiXz5YunPcWgzDRvMoxMQRYSGkEToNStWnRjUJt8T66MQHpa4LZ8yee",
  "key11": "55txqNP8sGrZ7xji4CtzEMZgkcGuubhshh7CqFmCgwRTdFec6XvkTuP8xko4gfEpvcF4gHAmy9iLSR1LjCbGcj8A",
  "key12": "4SUGeoTbh5YAwSahRDQWLZbrxF3cp8cKys3QtLNRcypFzYPEKAaRBp2BcUFMUVX3MmkM8f83MDypVzuBs2oH8aKM",
  "key13": "5vy7cyN4tAijDRg24zhAASWoHFUzUamSrs3hTZzw1rzt7LaeSCNnMB6G1biGxPM52B7HPpqm8zC73DUPQoee2Crp",
  "key14": "2H3QErx9Mkp6EdJjB51zGPRVsHfjFi5nKACj1YTpmBtTJa3gHe6DVaWvHyx3EvfPWytBHA8CJktVohMSuMjD8Hq3",
  "key15": "4NYptnPvDg1YtSLa2SoGuCEPiXoGLWCb9BUiMdkhEL6aZnQGQQfQdAvD1jwHTwGZEgQPWE4yK9qZA28425kvWLDB",
  "key16": "f15cjhRhgeUH2CDwtZPMTkzeY9bHCd5EeKLP77Jg3ighz2B3cm7Gd6BxNtVXg7HTaoHsogCDtZD5vnpGKq4xSez",
  "key17": "1YfQQ7cukYf4cmT3cLx3QdLk1RwzRAvQ8N9J1iooFJTHsiLmmJ76mMdAd5w5YyWp9Tjkaydvy1KKDS5mxQpxMAs",
  "key18": "3R9jkLysCfE66rjfYtJDPBiyPrV7sh3jp1n6jYHHDLn4W2SjnXfYBJZEfMs4ovwmBifZVToatbn5LnkG3QkYwBKe",
  "key19": "3FzzdXUQ67pgLTzua9MaxKoPkFJqbxJRekMNkpkDUSio9PqxwE85epc2mEPmSQ2t6d71PmGHvSdykk55fE7goCvg",
  "key20": "ZqzfuHZfr7EfhawLfAvSiYSvvrmMgF1YzmW5gYhMGhBRzSetvaBkhvytzQRsCXXQ9nRuMvbndXy4UtoBm61d2vN",
  "key21": "38Qy1Yt9V4uWJK75bR5KCTABgWH3f8NxwNBWSD8yDzwAAHFwfnCrBa21DbJiA7rS7PkNH3vK9LudsLU1zpNWbJVb",
  "key22": "3UwP8qKxhUgF7tsPfw9s3TGC2yvnx3pG4NjiuHFy2p2zqDdqnJt968ob8PUVDmCTKY87xRwJ9jK1Qo8wSUvRx1NC",
  "key23": "4wPwdKs7e7cHiWLy3iw5rw3JdYjNunu7LhJ3dMSmWqz57Dd1DJ4XyD8QVEZULEzL9MRKR4ffLn8VBr7ybFk5DAWP",
  "key24": "5kGiuVMTs7hSgiwuGRguenM3XMH6p4tPfUGQC2rqSTt9FLCSmGE5uzsZB1bohhd3pnxSGrgGrthotLuUqrxAP4h7",
  "key25": "5KuQvyv4gdkqeD7Eii9tKADbJymkChMGRaEtqkzy3jizAawHBqn5e4beopEz8wdtYMdbDSyAYmGhLJje9kxivx4F"
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
