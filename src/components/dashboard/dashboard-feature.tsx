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
    "MPn2xjcSLLwMxaFkFbzckoUChu25tS76SFwYnnTHFRNyknCpsvBfc6uSq721iikBur3Qi38hTzG6z9WqzajLz6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nV3wDDBvDCMejxDAvz4ARsj7iJzRUAbWpmiwkpcC4SRXsjvLpfazX2wBgDx49TteDsHHput9yYTw8WyuHoDgeSs",
  "key1": "2QP8kSy9TXF7wY2L77BLHCe8mc5gPpMcqWzX8auhrXraFyQ8CjQFdZMbxJeVQ3Won1aQbTNiKbgtAZfYoqRAGjMZ",
  "key2": "27vzZGeYGjSMVpoBXt1wsmADquPJZuGMi79nLeryDmypGkRMufuLyVp2ZvnLqnayhKFPer4BPN7GVfyNGuJQ5CjZ",
  "key3": "2ocXSVJ592JpnouWJ36CT4oCJsVP6uWubp8KaR6RCWD4Ptk4wDFS291vzJTef5US6qmbMu7R7D25tTaUuBkm8159",
  "key4": "2wPViFFokNJvTue4n1UggXLGqt2WhHdNY6Xrh2wrm5zzas9MWFfnwN6hnbs3pi6NeDoHTp38sV8iM6s1zs1ppxVx",
  "key5": "5YnPRRozTwqWYwLreBRmH969GEBZi9HEgb8Hu7BArT4RztD54rUUzyihPqnD5Q3REn8b3MY5hUYSKoURjptSV3nm",
  "key6": "5ydVzAk9xneuYkwhR3BL9mQVkf6qZRxp91kQtuAA5p96gA23fVaSiJZmQxJNDrdbwSXtFze8Sh95EXGVACFhogVb",
  "key7": "4u6Yxu93eRxjPQL4DwnUbCpsXa9p3Dc2JqyxEtepJqbUAu4n6exZKGjAqNKJUN8CaPvbXfdvwUhUL5arZoKSJyhX",
  "key8": "eedRND1wfBFyBMnsiQq6m3Akc224jX1afyXGkq1qzS3WQBEmvTVVmHdjec4uqgoQkUCxDvu7z3arVxbAFvR2Xmx",
  "key9": "52EYqR575N4WiamT4oT4GZgXP4ba6SJW6XzFaFT3ZciB8jGJw5dHBw4pSjJeAZNhR4shyCEPk23dPkN3m3hUFhUN",
  "key10": "2qk8w1RVRqgfkJ3ciSJnoocgYrFmSCGjdaUkJghB4ZPQbs8ujoxjoP2EMRr7npV6j4ztMSBp4a6GPW1Gdm1pKZGU",
  "key11": "3aHKDBqfJmGD4YTvpFPCY9po9LugqLkEzsoYFnyrQQhwZZnEyy8LmrdFqriJNzNkuAM7k4pHoDsJTATuCFQynyQz",
  "key12": "2wEiQJbxifsAc4Do25qzEUUVdvCcKS2YQpUV5ib42gJEM33xXuKvsmoDmZ2x2v4P81DYj8mPX1hnZxEWT2HrcLm7",
  "key13": "2tiwpkEicxk4zRr4MyYoPKEZE9nVx4EjB6JA8XJcmwuqBW3xJHTYBmBiYQKPViTWiTGjyaQA7JuQWR2MEm4Wf8Hf",
  "key14": "2x3xkKuuuL1WfcKNR56Lk4eAB48tf4hPsvDerRz7hqnD9xomkrcbgu25cxD2cGv4xZejFmbo9hBfHEcrCg4N2aw3",
  "key15": "44mPMYyLTA5VW3zBZchwsbWSDXhb5domNp29D45zB3j33aQA3KbE3XZ8GUL49s4qpe7KQSfocoEC5MKGr6ZrLohe",
  "key16": "33bhHnV2k4HHg7PByh69hbs3AxyRjPL21TXGsQ7EhCNKqpVPxjKJy7AHUKuNAwcyP4GBR71w4VDDBgJ348dJqTYh",
  "key17": "2WVZKYmpvAJEd2Jhb1jFqrBuCWXzJ7dD8ytYwEULbSx1i3XquNgWr2PRJs93Lcz9zRjvbWhgZKRg4LZfrZZUVE9t",
  "key18": "4hxF6CvKPpfLK7RuhSDXg8ycFo7cF8t4Wmi3tZFthRYtXjnbk74es8kCNZeUmxafywGiFvTkAW1RCbqr3FxSNre5",
  "key19": "4HRTx3hiZLn4pKPEpeAdFSE5T2ibBTVy7o5mNpmQ2uqDFuZCrXNdWZ7SzYz7uouPSaZQoLQnG1tPdQmjv4oKt5oa",
  "key20": "3Npjgkk68oxFVpXRvKGYJnNmCQmtmmfDMGgfmoehu4RHq9LwTXnFJ3QDTRG6UM8jzNEiwJhotbDAu5Yrt535pzzA",
  "key21": "ddtvJmXNz9TmAqTQetxuYKJAf1gD6BqSJhSAPd9kQdT4TQQ2jeFZ66xXziE1uCURqD5XSj92LdhYSKeMfJyxTRv",
  "key22": "2Bi283W5Kw2PtfiDyetKbmjorWiG3b3irwPAe9QzcAkNvaMcNoJUX9xXrsoTEbneGqViQKpoktJ8C587xixEXThv",
  "key23": "4kYRqgvtvwAUAgu16oEk9vLwMBCYvmKeKeeJFpbhajDdsngoR45V4BWLPbxGHvWEog4SYbiRu17TgdJTjqDsdYy3",
  "key24": "52tcveYrVrHDeu6QdwvyE8qpu4qUxMoVMM9GNsZKSBsBb1dSjvZ4f9Ekekh7VP3BTFPqwcjQz1QyLqJnTbTvQvk7",
  "key25": "4YjRMfHMEoFanJ5Yz346fzHDwo7XzYzsZtjPf92pct8ZrupXTWfYWv4yHghhrgWo4eFKpyoRQRPP85PiKFNqUYS9"
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
