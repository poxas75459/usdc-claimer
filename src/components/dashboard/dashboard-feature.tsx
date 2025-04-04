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
    "5s4xGa2RBaixr8KLmEqXtQcPkbTgNS3fzWUKp9XuebHmoxN8JkbqSMaEEkfJq7cpubxETHaRWpyshJ3EyToZrphC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4uXYsdRmL6Tmq4UYBwGmL1LLiHmTMYcsT2EWWNSEgNMZKzn3EGysdEfVz6D6mJa2e5r69f6D1kVHhU16L6W7BE",
  "key1": "Kad9LtCxKphAFUnxRcoqNrriMnkZG3uiEADbdXBR9K2ig8mfterT5CkeoiDSzH9xvWTvDFP8jYacbJi6rh3gD7u",
  "key2": "cdTApchnxTQye4M8VXqWKrkHj6Y5d9cuandPKcwrcA1ndPaviYqmuknKcaKQu7hroNyuTxbNp5r1BL3VtmFE4JK",
  "key3": "KGbRWKC1FLrFm5M4tgNnVLS3KFnbdJCpHLV19QCrdxR8kkWypYSep49PiBFK5ZJZ9DQJGt5WqK9Vhrg2rDgGXSA",
  "key4": "RnkGvxFm3WRxF4NQTNbsxTcDMDf3yMDV5wsxWzWjThD6sCdynbseKpcTyMCDDKYaFXW1uh6dHRkWALoD6eHu8qA",
  "key5": "4UMCGLqco3jmpdYtBXk8UwGpS8NqgJNWfpS85mFz3cvMvPfCWCQwc7j6GFaWqMXgeHR9CmRXwPHooQSG2dJKuyqF",
  "key6": "5u3JkPyvfPftYsb1jaBQf8uci6LVafTHTE4VCuEVMqtk6cxSY6igbUhoMzAe7mTQuAhjQUHkv1yCSN2Zm2SSe5rN",
  "key7": "2uvrEoZnyWAQTqcvmQoatX5nW6chuSR4C2FpVpNJVQFcnnRFAYnBPY1s7TexnFE6TUatx3krzD7EYMAMGsbSufaF",
  "key8": "Ak8cMXAiPz5mXLUahEHESb6fyqRrT3GAxvZkVs6yetT59hXAv6JMAuTeRAVkWEueREDuosgqPZrZrUfPGzhbufR",
  "key9": "1EbYXVuBG68uLiZgpoe7crfMRrAdF97DMLbREc6zeMRXDUhSgBJnWjaP2TwvFm24wVT8HEX9moP2KgwXS2FwaTa",
  "key10": "4Q6N2HMe2sCYbXERdxqMrdcECCSStHgFK2xAuf33SKmi7AEuxGcHJoGzxq6NdqY8qrEFGiK8GkbkvwH61uktpkpn",
  "key11": "4qRNeCNX68j2Pfma1Z2JMmsuqSQ1QH9kW5UN5tt6sTvgsQnGtTwnHAgTef5dMg3BASFPXi5h7Skw3omXm78GJoXW",
  "key12": "5piA8mL8TzGPKE4Et2qJXpxE5u7rb27C2LMm5NYPqLCaCzrrDhGDZYQazMRkUUMs6Z6V1uarpf3FG6z6HYrsF23n",
  "key13": "3p95CfHNmMuNwNs3TNBnQZC3NwP25CyinhidUtDtAuRkz6XGxC2695aacpMcv68iPUt2ti1QnNhq665T1Cx2HPvp",
  "key14": "23M7NvnqDi2jFHF61SxWeQhbSigHXbeNGy7yCSEf1ygVFRXEUH6LAJ1geWKDX7eZCVr5PCqxFopyEGQH2wkAzr41",
  "key15": "5ZQa5ebYZ7axKoHR3PkgDqWUsGJdN9MKxSByEhMimknzhmkPJqw7WLM4wWRKWYvNRALhvikkSxrrfTZ7XpCySjka",
  "key16": "332VZ65rpyC2zoq1hGXRxv7R7xaHqLQnjUdhph3VE4mgv2xMrYNuNhKY3cKktHudysLxdhtANWhzndUZzDPKiq4j",
  "key17": "5iBSDWg2f9XLdAmRByiEbNer1RwRB5yKG6bFL4iEXVHfMx6ZxG7sfkj2qsaVKgostP633UAtmiGkHUBiv5g7FLwP",
  "key18": "2LB891WyvcVuEr3YwAeHwfXGaKktRwpVxsHW8yukV98WQJ1ZCSrsmPree66wr49596C6EqHxJy8w9fAHeiG8EMVz",
  "key19": "47ctaGxnDbEcC43HbR6fyLBxxFyNbYYkAJpsF8hxeZXy9FNrhbVsYbWURK6qoFkQqiawG2Mo7uVaFVjBQ2JSMHvH",
  "key20": "4nayu6KDfz5vyqGLoJ7XzSPeSMmw2UrBwhDeppxL18e4SLtuUm39x8EQkDJykoETedYaXVj9EjyB4CvoDqrpg1z3",
  "key21": "2k3YkmCQ5k3MH14iTWY24wp6nRmZWP1wsooG6fDc3XvD1HeE5b88JXz5mLe76eySUpEVVqmrEtpsNRXY9EHMjAtP",
  "key22": "5DQNKUjBn6W6umxcBvvdUNFfXMssaPmnKE3et5Lt9ppd32Xt47v4RRFbKGbhNnnyxzqpBSQmfwH7dYZ3qZbThtBG",
  "key23": "2iAzHKoGZLZDpyjcDiLL6s6gS5hbgU3L2j1QL3Lb6YH6Zj61Gsoy17gB8HHvgrbtuxLFnMjBs7HNX7cpfryWheRC",
  "key24": "3Y9VP2AZKNT8Tgkgjs3rBawfXRiTAQErU835YZKwGqgqK3m4bdUgsTCBFtVrj21YJ8F9HJtC2ewWCoRTJ4d2n1eM",
  "key25": "1NXPgVGsweeB5nyBj7fkuC23GvCaWt9ZL6FfAGgQxkqHuFJdVqb1c6crS2ryRQfYkNrRfzobmZHUcJYodmxjtfm",
  "key26": "5wkB1pZm7r5WpLQ4yBxYd7DminChusQVmByjH5rCSsc1Vym3i9MubxR9tvdkN5xSdJW5fbkqRP1rKTBFPuM6DnJB",
  "key27": "2ZEub7U3K9FhMdK4sbzSVLWp1GNXYesw1tkSpV6dpCZYmMViLmbsj1SaXXFmsyWA2r2wjwAembNwmW1pDJEyQdnH",
  "key28": "2buT7yG6rQmkVue3CmaCMMQzS3cD4oWe92dLMsPzuDXYgDX1jzPw2sVCfT1VZXKBJoM3bQcVQYx9NBJt6KCyM9JJ",
  "key29": "3JRri7GFYgSF5BZspPu5nSZiMUqGExfWZFfd7E331yMR4ibPekUtYMXdHFG2i6j5RV13yEC9RaWADW9fNpKUmSHi",
  "key30": "33FXuXfrAmgEvLGbt4tXJEHhyuQntxHsoDDuMLqvH3gb4JzNqwSAGPFPeoaeMky6mLyGvcfDMggYgtJEppG9gSZb",
  "key31": "2toj7qcUx7pQJiMMMSsUFa7tHPAaPqbJaazaXEi9S7TZpWK8faXA4r9iNrwQwjpBM59j8LJWnTiF1Y1v3ppU6VnD",
  "key32": "4qBYK9tofvS4CJmUYoVDrPMT3zxKHrbheGVvYb1XGibYszD9ugRAkbkqtWo6PW4fdpVbH8yzeQGwoFbBQxxMEdDP"
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
