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
    "2V6oYbheLb4XY3pdtZrpFzFcNoico1gMQBHWqvwpfRrjaPN7W4bXaKB3R3UuHTCFokPnhCo3USFgdv1y6H4V2ARh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQkaS91mGc7XpvyjNrPkmnpTaTBfd8qq4ZtioEiwGnLdTEwX8N7zp7QXNLb46JngGv8b7RbPBWs3PaHVuMEYex",
  "key1": "2f9EH7PhQPHqAFfVgrv6khUKPJRhJJ3tu8rNMENhkyPYDWJFakf5QJVZtQZpozt4Md8Vs6AvVTqhZ37vxNbpMu5v",
  "key2": "i2WDgyfizNYsbGh6rn6EvehXdu5BbXwiPLzVEahPKtrz67HnYMpzHAd94Va77bnzvUakvA56hQPFFRVoh19ZAEZ",
  "key3": "2ZENCX9EmiTGUNsomvNYCJV4b9gbhWUMSEC89K1RAaQknjC8MNyu8m9LX3ChV4f84EqGvfRUiNtZLyNxSJqfAiXq",
  "key4": "5bqwyC4ZuP3U4UPR3jrwaQ1e8E26JNzWJqFTFrokhFbFtzpEDaLkYmiyWxN4A2NC4kbtqWtgDB49FefHr9hYffxr",
  "key5": "2jLLHkaxfpEA1MLUPn7yMb7FfARcZzcBMJ2YHxwhpaHTHjatYTrcV5LeEDizcP2ZKmsWBw4UjazsHNyhDhhanoL7",
  "key6": "XR12Ya2EtoaV1RJKpxvTp54XxfAtH9D1xFuPUPVEZ7suhWcJ3LfKcVovAkQfAPPtFUBJNkyCr8Aq5c4W25jNaN3",
  "key7": "nHidgdYXxaYT8Rb81iDNfLfj9ENbtt1FLYqoydU3gAUbqvwFhe7ysK8oGi2Vw2PF2KoRDju7Df1xtrFp5f8DB8d",
  "key8": "q9iS6STzK2ZnJhaA4f42JpKav5VFhT9PHWWujiB8erbpwcFuJm67JUc2pHW41EJttBHDBTfcNPQ6qDZduNgrnCf",
  "key9": "4MMSeAfdaNz2caWg3JoMPpQLc5c1DCZrxhxyJ8rdkJ8eQNkTtJTopT7ZUe7h6oU3L9TpCq3zbhBSScojiNh3dhxV",
  "key10": "4FPmK528QTWQUNP51mq8FqnFyJfreSQ1fMWzXEtUrSFKnimSwRLrhxk4H5QcFx3KBHoxUE8kJ6U1LdLqFS6CCp7F",
  "key11": "tSpV6j4qNFabvtscPowVtHhiRfxXfRHV1DuqgJoWt2MhGfGm2Raj971Z15LujHit5h9a4vsweu7USs2mQ2HKpo8",
  "key12": "5Kyj8p6STBypF759yPf5KPf9ReeBTjwAwehZ2MruMQNCERCYNbc7uEiMbrLbzy3V4Bu61KWcRxcv28t65x1wW6Ce",
  "key13": "TUciKX4HhrqviaDN6o9sGdzCBiH9CPBBuugw8QMeN5Y4Z7JekVjwuKMxwrvFDXc9kTbJgkn4zZ42RatdMYWrq7v",
  "key14": "3rJyyWtrbZk7T7c15aqUgMZHhFEiJrTyRaSpc6Xy2wkRAEfQJbkJxj1qGq34kQmchcMUXqpFDyFMrZdzUJfww6er",
  "key15": "4PABVHaxxYF6VSExg5HZtfHSP4UMSKSY2M4DtDNkjHnDK3BGaCJzAHyZBCM14fxu9D3eRXnT9sLEZKhQZFfi66NF",
  "key16": "5JeGLKXmGxcSJpi2bS5SWwx84AHGvAZKbhW7FtSLogqnTe56UjPji4bB6paNaSZZQWcZ9HgGhPZFfcvD9nYUbgQ3",
  "key17": "4x4v85K3LsKtyZ9rLNDs1kii7b3A34p88zVs8rYKZzsuXpCXHyoMFo4vSSTfCz23NK5z24s6UiWcYLNUUqPU6WqM",
  "key18": "d8o8NgCXta5z76BD3vja87Tj8NREMEnRUzQftzyP7EuL7Sn5RHEFzCTdwc7niZq2mL1q1VGAngfgxWda4AZ9zVd",
  "key19": "32x68QfKwU2D9qsvCzgu3U8psHqZLRkNNGzfnmvh7Dn8dLgD2sDJsAQpDUVgrhhwZ9hojapv2qfDZzHpSzkRBoam",
  "key20": "3CNhtD7Wp1dqkGwF9FEdGdbmqa84bjskRGqiCfx7nHdhTHxxtXcTuzbMKG6dDyZXivif1CQ1SBEV5MHidi34JmHZ",
  "key21": "qaiEG1V5VXLK1YtUZYZr8oVp2STfuzS1p78usbE9iJ5bmpRiBVTwcUKZpGfhzoZ7j5pUuTt1Q9ADbSdL2Tq5hYp",
  "key22": "3yygS1tNTvrZfihrRgr4JPwJXSGnNZu8iGTPtb5RdKj7LULUzohyu1VxzUNq6S8mqWAVNQoNaGfCNj3eTtqLsW1C",
  "key23": "5ZdvDfeMBfDVFQb1B7sfXKwfXksKD7TeqyBvoV2gvPkEhnvno6GEq9WphXvJk3pNM9yNuUY6xMD1oesijsVHS5xT",
  "key24": "3ZgjAM4po8TAkyPdc58r2giudqkheGCxoNJLf6dhYUm2c5FxGzDYepUMTEJai8GRbEZ7QcQwAc61nUFVjLQqbbDS",
  "key25": "4p3Z68ikx4Vck83eMG1ogTSWPimhRhoq9WW4J2Vi4GevGeWaMXPVPLTpBAqMCwbtguD3uyMv1Tacwq98rJAc45Lx",
  "key26": "pE1rGkTm88d345mcu9NBXC5b7Mp6YGv3iZAEVJQTg4zdFEMG5H3gGVc6iJyst7rBogXLcDpd1YbWb53F8WpMy5P",
  "key27": "66wXKCe4QkFN5ZJgauXd6VMy1CfX9siuEx3qASvDquC7hshxwiRfwwF3fZ3dhe2V9PMfiFRQWinhB26HiWJGRwo3"
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
