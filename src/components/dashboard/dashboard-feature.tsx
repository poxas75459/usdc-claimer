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
    "5NmdZjBiQAGQcM1Fb711TNUEBcCEnLpjPP7JswvfFSMZxGjdo84F4YjpiELzR9DVLs2mStCdBkvRnDbqukKEViTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26rewDLhmfVzRY2qWRUvDSMAEczG561FupgrSaZuS9wjWQ3oa2Qqbi2yX8jh3c9abrPMpRqhhhmCagRues4LtbD3",
  "key1": "27XyyTaSPhRj9XggieyLTtAMWo9Ftyy7HwDkf6CdV85WAM6ZwPARWn25yiPXZeFDxzsxKnsdRpuzrzuGdrtwCLiG",
  "key2": "3ENuUHdekV4zCBqMK2Loq2LFaiyVBUL51U8fhhUiSQ3aV7bkcDLH1oEYNNSwUord6YeZzqsAC9ux99EXBdsMtnaR",
  "key3": "2rFXHVS9JaMfe1PCq5P7oWso7Nwb5ksWrQAQpTfhfW4bMrDWWesKRKoGEhTMk5QscptXwKDn7snUg8wAg3f3vmPw",
  "key4": "5EJtN8iSmHCytDoS3tXD3atdbVSUR7aK3HU2emyGSMEP7EBGZfxJCgXkM6fbe19feoWKRXqmcL8JNAfWHVfyJxoF",
  "key5": "4Qoszs9QwHTMUd55VoauwhJM8DcsWAtkoTNwEwY4csqiR6mHu2YSCaGBJQHCae73njbnZZkoXdikvdn5L3hwTjU4",
  "key6": "3K4XpzQt5x1DH5599LZScGu6gkWVrQch4jek3vqufnQc8YeGGEL1prJdeubZ8gupbZPEPJfG6gHt61EsZEb9hAH9",
  "key7": "4V4KoVfDmQboz1BRwddanaGr2JcS1cX4BtHqcTmuFDufQyDvnZsQEZqHXBqFzikmATxivXJLZtH2XUNcYzPbqESj",
  "key8": "29gJTj3NmJhZ7Mfgtd8guqFgFr4SLRHSPP5BcTKssoSF8Z3XRiLhYADcu883tFT6xZVwJyERnteeFn7VXGXrVr83",
  "key9": "58Kt3RvoscWqBqtDS28knjjPAX8EpD1RGesC8RwSNFARKcNLorKBpStHDZeAKQqYdNsPVGVc575oCeWz3kjm4Lgu",
  "key10": "36qmt8S5QyjNDTofTHz9B3Fpuf2RY9j4iQpBbubB8TqsRW7phSkqjD3jGw2Wmv7AhWewNAom9CmsycheQ8f7iQkS",
  "key11": "64CoVNp5bACRxPboEEwUXyqhGNNfYNzjGCn8w4dcCeKn6a6MJJ3WZvvj4vTV64SbBJjxe4YWLyQBHitG82UpMx1d",
  "key12": "3k3nQyDuVWLfQk78M1RKDQ2nZ9EuMjCxSZsCzx51Ldx6oBQi5AxBAAiFoCjuf7PxEsKEhxv8Wk6LbvrY2AcQ2vdV",
  "key13": "4CjeMXYTGPSPhQzp3EAJAam3oXRAHtiyYryuRcqu8T4y2Vu6eoHB6AtXUm6755e1g2ZpQRTLgUgTkA2ayUrhXjv7",
  "key14": "31tqhhcaUfodd7F6q4ZaXSFvSk9xdA56WE5zKNLpxikGczpXcCpNKfPTbr23woLE2WPP1zZBGpqtujb4E4hqi3Rb",
  "key15": "4WuZhFzeijP2MB7KztbYv7TtmmZsQ33S56wPZDHU7ckJy8eAUoC4M6nqy4VP7snTkyvdcAwLbN8rZ6g4wCgcq8Lh",
  "key16": "4t5hEiFhoQagQGfwJMRFZ5HS395keUkMw1gCsaM4MJPdCnFbQMSLKwYi73z38qAjPpm6kRKjBbfLRNhPK5Xp3LT7",
  "key17": "4uSXmAUFQurvB1Xi2aJjrG15W2UBJoM1QcA8zTEUJvJRwUHMiC3NkhEjYZcawqDYwXUL6NM65wxWizZ7bmeYtAw2",
  "key18": "5DqVsyUX3tvQT4wH2LoDu3x6yvdMQMCzAsYWsYaesZBYKL9Xn6uAVS5KR5wWYBiKPBnnEkmHXkMCXqeb9hmzdxji",
  "key19": "371Mh1GwU1DixfNPSpCJrjRznpFHb64UWqMHPGhnGSzY2f4mQXYwA2Ugj1JQLDk35DEius65jPjhjTGRyxoRDqwV",
  "key20": "3RmfdyYPfSJjRp4bUw8nAvVonGANMjQqmkkppvjRSvfharQ9u1KjDyBNeQsLKGq82JenSAyqYHtaTLDsuNFgBn5G",
  "key21": "ok8jnUnF76oR9dxdh8v4dmrJhKmjCKLjgWVq4DdSWHuisE44ezLaXZw9qpN4pAt5gzdCibNJFPvpLBEzG9qPM6n",
  "key22": "4npbrK6fmy3npJh2cH3W7xF9cWsebKk6RdJd25iv7aXtRbHSijsUArUTCTeaALLiKnBmtaRcgwg1PMtDCkERRwxU",
  "key23": "cQaq2HgBXER2wdL9HgNtG9HCGz3AhYutJpn9hcmYiVgjW3T23759b8MsLpEnBeAEzm4PmnwXvVLCLPW5GQ5gnYK",
  "key24": "5pLY3ukpFezbMnKj4Tzbo1bESd9LVMFqtEMZbtKvh3wfWnHH1v9wC9LQJvNG4XnDkZet19FkLVDBxBStZwrizrTd",
  "key25": "4WnciDGcr3nmWJechgU6kMpwdygpXHJjNL84FccAonFHZKvdi9X5o7gyTojn3GnhgpWA3ikzzHyRA2NGMnf83y3r",
  "key26": "5aaoz7RCZ6F7Wy3JmNXgbrKZdE67TSrtb3SxAqQLP1NQ5Gmz84D9YWC3XCfwNgSBivH2Fg1oaVrWeAqTZU6xbBxa",
  "key27": "hVzB5L8Co2UEzSX4VmeXYqqyijz8Qj1HqDjSELxWbURho9cLN845FpoNqTnvUjg1TF3fnNLymWZUbi2KdUbTye9",
  "key28": "56GysaDr6eRsyEANNAVYtm17Nq97kNaT7wMYHsjLKpUPWRHCNXMNfrtYrFHAw2Fcn3pCQCipgcug8zxL2tyP3pPN",
  "key29": "gS4MUsvBcKd37NuQYWt9a4EiivSZfCf6pXgtNaYasGugxpJxxVsQHksmjEpYLMw68xgM9A7ZAMkKW1gco7S16xz",
  "key30": "5ySaJjZBmrFgtHMu7u6LXWRkwTLBJXPZeEJMdzShCTjQuhUXHSHb2tsiqZQFYFaGi2dnDtputHim8B6ucDT6ByeC",
  "key31": "591S4DdLMtrrYoTTQaEX7bDeXqZPm8nm3CsxeeC9ZQQevrxeDFQi5427DY7GKAigc2d3CbmFwcvxCBujRaNFH7Xf",
  "key32": "4ZCukaQ3fkrABjgUC2z4keoqpV8zoaZwffXzNHr8DNjmnAwLChJgwzP5b6znSY8GWaZtNq3zXHzMqoVLbhbuWJxP"
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
