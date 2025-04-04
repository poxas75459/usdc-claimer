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
    "zUW6UD9nrMt3izFMEjo2SWcXLEqMsBiG2gJQiBHr9KFPDbKTPHVcqrbnbSWtcfX9fVVXKnTxKAjrWXoeC6s9mmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8exYm3X5pujoQCSi7bNX4zk5HFXNBPzB97JYwecGKUtZCZ9jJmNNHjuthsVq1XUjYMA6SZkEWNjMehmmLBXmDC",
  "key1": "3c4ErdinEhtiemCQaSHhVR5KkG9QMr4wNiSbMvsozKsRopfaruFxqyAabcXJEi83EnRZwXEjvM1Gug14yKofdTKz",
  "key2": "5Ld3HbnAsPUseXSkk1fCwZfDFi6bskDx4rAUnFyiJavbB4uEkUzTCvAid2p5Z1HqYzG1KWgxvB67TGX5qkkYUAyP",
  "key3": "22DTv9AGCpMSFMghGzFHHaa6MFGE6KSvUBtxf3xK34NcWAiy1MqDA8KriA9jnjDhCSNC3w3CwMgoyNQdSSEUj8u4",
  "key4": "edFfW5X4eUubptiZakKmP3ZuUHYJx8Z5EJfDM6VVjhTtSBZQcYJKLmjr91AQXYg38jLA6CW5Fr6FvtewstDUxJa",
  "key5": "3M9iMUWM1BhepsorqoWHEXqKL56j9u5z6JbqkUr1hbB9KNiVUSvJKnHMygu8VWv1MPJoB282KXLkoMWRFufRvUxU",
  "key6": "4GK13TsLWnBbJCuA2v7BZ2GDyqqMphPkcfXs64VHo3jEqu8aifrT2CShkNy2HbTCtSwSq2BFE2DJ6VqqZN4dfkbW",
  "key7": "5TWgHvKgXPTWwfRSQUdZiKdXNgyyb62DAwb6yKZRrEWk4Y4CU9fehNoFFFdQ4gHEo4xSyYPDRgd9CQbG7tmwjgDC",
  "key8": "wMvJQh8upyxZ6EjVZh19EeE8iXXEvZH2JHW8FeSRfZH3RW7kMENQX7HnXiR8srkBWccttYS1FKwC52r7HFKRwKK",
  "key9": "5tBH3Z6vc49HpsYMG75vsnqXDukrk8TsWXibe3ZAXc1UxtuJGmnDqNzzqkmHqocMsZTJt5yGDwpiVU2bXzSukB6e",
  "key10": "451pKoRvFTNfCzf1UD54TzgmNV3TWwNY9o6FFMK9CC91T1uUELahspoeUGZ4dEJrdXaoUZmUkpc2JSRLKAdyU9Bh",
  "key11": "6ERDdjftEsYt5xZaUgHxr7A4WpK7P3GParK6HoHshxsx1dnGPfF6T2fpv459yNScN9xeDrAHs6SzZDxc7xfTbNJ",
  "key12": "411hP5WpBj21PxFdZubmKPKv1DgZThHFBMMLDELTAvrhEEAEuvRw6JTyqRYNEdtN9vKurEcPKdgqLLB2JVgZg5L",
  "key13": "4LN7ddt2zr8Ym5zB1oFVfW3FyfZTkLfvpyMuUUfAZa5hZoXSqF1aTSyVAYJQCqekuBZ5QbvEgJLr12c3pxRW5kRa",
  "key14": "2ameNbA8z7Xuh4V4wi7RuRdPXNAMQS5bJZxXUM4GNz1bo73QFpbTafFYPEUxemDzLhuQH1kTrqovauzmbfKbLKqx",
  "key15": "mBYf9H3QWbxRfd2WU5pu37LamQkt6ghsVurXVmYPh9XrmpiA9xwesJqmE2tgATaJW1XfVzBAk4aP9J2vhKZ9jYw",
  "key16": "3U4uZhiVVW9jtLQF493BshpRMUqutaCeahSVFLs9Kg1QZpL7tHvqsEwsPxmZjrJtnJpGzAByPXpxr3ZhkB4vgFrF",
  "key17": "4spVfAAJDmiAPREgTpyTtdivUz4qVsKE666cuiqsBGRQS9uxk9UoXwADL2c7xSQ4nnhPtC9xDJHgeBYpMkcJnR4T",
  "key18": "318EyUPBntFDExysdiYESmdFtp5YQB6d6gueU1oxJtCFoyFj95jVHNFyerGo1oUtH1Cb8EYsiu43C4GA8zdsqzWY",
  "key19": "5PGGmiTgebv7ZsXUSxTtCh2rysQ1nr43NfA6ureiKShFBEH18v1gjxSdcfpbAWk48DT97fBR7whPMJF2gPz68v8S",
  "key20": "5mH1si9Ec8C7ySsvZAGfS4JMU6V8sf2rNJ8vFCRX9CnnJ56aVaUQUL1rFfReynJh9aVxBYTPg39XWrJ6P2Pfb75A",
  "key21": "hoA2R3AE1J8cVA6PwNmGN5CLPGRmokrEwKv4Lu2bmgNfFN4jz3LCi7B25zjRtB5q1uMh5YrLcSh9EgwjUZ8SZLq",
  "key22": "4AZQc7UYRJvMbU2njFJyoXc2H2J3k6JRw7Hrv19LLUK6pDS62HAYfpMNMnrXzz3X2jMs6MJQ44hwCqgnoHYkaKeU",
  "key23": "2qreCrCgbHaNmmLwmSvWyC1dPfvacZh5NuRKK2nrB2G29WBGTJN3E9ixKs8psEkx5P2vBHE6ZuArR5ycJXfyoPJC",
  "key24": "2JAzus1JFHk7hf95rH5aazTnC1TfcUGG5gzLahVZ4f72C3sFWXqm7NRNMwohFdMpKj8P9cuSeE5dsrCfEtNLKEb3",
  "key25": "4yrvSuQ7eq6TnBDfptJb79qqsgqdfzXaiB4tws2PvaSrALKVAhPFpmW4gVdittUQrvZDhaXppY8tqhovAiVB7MeV",
  "key26": "xKHKL4vEK5dqcT9Y2d9Vw2uzPguo8BouWmtXDP5KfesqzLx7WZyuxRpXuFzumGz13FEvi18vRo8EDEVozgY16zc",
  "key27": "44ooEUsbYNBvYKPRoQzij2N9R4ZJynTXqTBWYqoqLkyJ8hmYGkewr3riM2STxHXtfKbU8o6wTztnXqb95reqvbSu",
  "key28": "4uqjANaJU7fha2cr9v1ErFn3jCLFmkfzeMDKWjF8gH4sUoUA6zTRJgrzeEL6qpELfPswaUn3VLxEGNiEdYdHBKaw",
  "key29": "2EKhaX4x5hA2HsJVPXtEtf2eprBRR1BsswqQ2wvStgWakAq4tMwJ6wYeZ1p2m34AU7oiRyNCXbqvTmHLacp28N29",
  "key30": "59kdPtwin65Cv7iWfo34pQ69VwLNv5Y8S8Ka3zyoTTi1BvNE7HdF2DGENbVyo9J278zuWfvAr7RYjJzvD77bBfWh"
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
