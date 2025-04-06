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
    "Cd28WYB4Zb1UznPEDQodByPqWMJU3hAdpk6Yg8MCv9yexsFb5c2p4ZuqWrvsnWio6Etvq7HdfLJ2KvjehcsM6tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Db3ZZedeXpwYVKDacLBSdkxm74on2jda4ViBztTk9HRxV18kLoWjtdXNNRpNmieNq8XpT8obabseR47EWXNAGUz",
  "key1": "5nsNGBSnCqPWEuuoQ1EdhGR2WZwiRy7vuBe2QXAsA1PR3ei3M1r8Mu9XQQ2L65Etd7VH61W3fkCS8FPYajG9b3GB",
  "key2": "q2DbZ922sp76E8QuympmYATgPbNhUQ7i8gTyEWcW67Mv2xPhZ7nbC9bgyjc6Eaha1UaeZm2JPHoKGkJmLjLPeFq",
  "key3": "5bGfV1FWfWgQRAaaezK5hHT1z3sG28GMsjkVdNbkfDrgromxXXUVfmZDF5r5Gf9gT2EaPtMrywC1DAL6mt9VtUxA",
  "key4": "BZTUyxJMg6r3Gu61YSKb3TBKUNNjXN2gfeJDABU7fEHewYS1qTCGkGZuM5SRkHgMbykhYF1ruTN3gdyek8mo1ew",
  "key5": "4qcc7v89dkMoGC6kkthxz3KMTYVQ6yeJsCQ2qrU3tGAzfSaF1X1FcayBk6SKNy3HE3qQvsjTSRfP2jsCpxQJthkb",
  "key6": "5SLjec38EsB83ESG2GddV3NRnJWNZvsuJT2GgbEbEgGAivPojXpvkYHoEhkbQxLRceJV522BHksySf5vTJZK5P7b",
  "key7": "3Py3heKyopM89Dgn4PFwCktbFGAqm57td6sunDWCEcjxt31m2ppRAGvxJkZZ6RgNZZJ7xTKeM6L7DejkB9uExehH",
  "key8": "3WktJMjioZ6qNLz4kYya7T2YCyqS6MQqheZDaDhC3WGBQJgFwPPvmEuXYxYwffFEzAqaBnH5UUoGuFeK6y6RFXC6",
  "key9": "4Gp9xcX8ivpBLsBzdwzzAtM7Lq6DUcBpSLux16RthH7odrqsJi7FXCimtPCYkvPfUTKtzVAR2YNgXLZS3fub6xXD",
  "key10": "27TLJPaYhFdWwyghqWY19nsAv2rR67dkuMVcza4SqJuQbfd3adWEr8YR4uKQwsf39PeaUwr8cDoCNERU9M3gqp8e",
  "key11": "5NLjeZzfGhvDoBNj7fyCYqjKJPnHeHhwtfi3BWm9nCGT4dUyM1PAXdKYC8TmP4pKnA9LhUB63hAL1MW2g7g51J8V",
  "key12": "zopBJDaDtoRqYmHv8z898p9N59y9MqhSBZoiVNdTvznByXKjjrhGRVKKMH9Q51jg6568Sm4fnww8jixGbupEJJh",
  "key13": "448vh7JKZ1nHpHsYB7Tz56V6An9D4fQRbkCg4JT224UdYfj2YGMxCQwf6RTrozwDRGKAcrG4yBKBkaTvv4MgDVH7",
  "key14": "632eoHPgwcVfigResh9J7zvpJMZuWRp4jCrKnPJCVKnVzaYnrZ2GGdCcVsQRrV16zLzAH3kJjBKuW6J6R8XUhztJ",
  "key15": "2zWRhU8vWzhpwaPC6hLFGimRqyrbzX8U5QmGbQy1JaEJP587Md1gj6AfEnFx1fwp3Wc5spGbnbX2RPSUxSMBRjP1",
  "key16": "2Qzsug5T4HoWVEKZhAcE6gjZKAynUnScqLDtGhPAw1T6RUU9E9FVwWeu2jrzdmQmAteyhWXjn7jqHNq4VhvHDfMN",
  "key17": "RBeySEAvwAwDZNN6KXE5VdU8kVNhs7mV6L4SNL6awrTErAxCrwBQFyrR9rv2KxWtBRtoVRcRWARDK2jrLVMmS3M",
  "key18": "3usJPDsG48vppAAcJZXFgENEbum2oL3SNpnxNcBbmT97thYrTs9Zsm6fYz5bHWWVGyfNBU4cbmN1EU37d6GY64Zy",
  "key19": "5ugLc7VzqPLrVPacFHkY99FpvSAfyRfoHw8u9U9jPAReqXvE5fYmZjEpLKxRsN9Uxfnwbysd9wMWnW4eaZMdQemb",
  "key20": "2PUrH7MGWzL8mE4S4h3qH135QGVuEYiBsJyf1KnfUgzMPdyMkh2R84k2e3HK3nAr4rKZmyVj35cQ98E2ip1ntNRY",
  "key21": "4uLWMgLzg5qGUtqALC7Ve4mScXvUzBzDHgsGCbaBLdpXUqWLNcnht94kqY6ju4p76Q7WJa2dDd5vDgScJXjPMfzu",
  "key22": "2cu2nsKUU1cNkqzBvxtrAnu6tX5uSR677cxhHD3iy2CG1Sq15AsF8wF5Sj46PWiW5dXsCFfAztmG3WBVWdH4R8uL",
  "key23": "2Xycs3U8hUsVyVUk5jiwsEyaEyR8NhJs7kWwTVWZogndx5jT26xLP8snj5EAfxyWmeCQVrZx5DzsbkunwY38Rckn",
  "key24": "47kJZ2E7QsAXu9VRikHFeDNwnfUa42DU7m6PPUPdap5vFpwgQd3dWqxL9tBPgEQDmsYtgp6QRi6h1LEB2hrwnoLy",
  "key25": "398d739JFfhJHcrV53i9HaBtXJn7Z7eK83rEDw5iDsT3JtP3kvnKC5Nf4d4A5qecDnsVJcDtiqz4ekF5vmZy8TWF",
  "key26": "5KYGBK2ebbhmcN45XofFL1SKEATpoFEHUETWt6GX72mBsy81i5j5U22E14ghgSbviNtgCXppBgRWLMhjK8j3mnZd",
  "key27": "22pKiEjGLPUmZBBRw5eyZJmtuH7ee9KdK8nm8r5s4ncfyV6wqRtsYN8xNtKSiFEUtRF1EgBeKabui2hf8rP37G3h",
  "key28": "5kZzRMiFra1KJsrBBAXmSHeF1dmAfuYbdGRiRaRRNRaUUw7t1dSBbQpNRwdqCKUpoPQcsRcY5dEZDJbpCAw3H6p7",
  "key29": "4yhA1d9UURZdh6ocPJkQUbTLkRUFPxdCZU8wKyNggViH96GrgBJrGi25gHj5r9Wemzfe4fWeHv8nGMrjUPv4o4YA",
  "key30": "2ru2d4rN3yQbD4gJheChrmjRYtdmdPZLL59n8SoS2Zk7PAWGm2DSUMURuYi74VTEtNz6dAWjnN9n1PnPaJWH1QZp",
  "key31": "UotoDL4t1QErMJLwGsDKAUCm8Vy774bBkSj9S37EchkSudBMHUe6kbsoqyGnp7jTf4nfC7VCxupKicFzK72ZyU3",
  "key32": "2VBnM5r8F2wtL8Tyn34DfpStSTwsFfp9HNoCDr4xJcQLpYbfmWroFcrdTWKbaMas3bgZ12gvfKZi3GDQfKivT3Ui",
  "key33": "44r12eoVUzquD2ezkXwViNQ4HJNkb4vkaLQaX7jBepQrqbfBE5pK2zj3Mr8EcgLjndYeTtJMGSw5y16W92arUDi6"
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
