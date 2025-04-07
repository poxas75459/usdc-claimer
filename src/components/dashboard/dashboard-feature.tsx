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
    "5oP8ou8V1MdGAfDjGYXvw9XNHKoMGenx87xKsF8nabbBSuPKxCiXT82uXvk9trMHXpvkVePaz1fVUXCbQzojWKed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JugVBNL3KgFMV3azgbUqtkHvoG7sEbzJcwRJFymAS7gDCnse4ANDXsrQQCSRcVLH4SCeApYFntTEJFKE4MX6Koi",
  "key1": "5HEvDirjwZJ7JYBh8A71MBJcwctAHrkSyYeQCzXDeEzqDj8wFmTtB3mLYkv8ubjs5R4dbHhR2Er2pqUmyDG3ETYg",
  "key2": "4ohBA96BCcbU287Q1AUYAXfSwgst2CTUAeC6hdd1NyjBadTDsPsK8JL6q1VGizHzoVtjtYwh5MTcjpSgzxL15Cga",
  "key3": "5hyHkzZ9vxrFTy2PEQdDSG1SpE5vHHRyG3Qng8dbaktvzjLrrXJy4rPDufgFyChEhXTBrwLtELwGjUQZKmWjRkV2",
  "key4": "55mZ7ka2Z7cKDuUdof8LfMsYa8NSydLaL2YtYZ2q7u5S4vfGraXN1WTeX3xtBxBimE9LoP7dyNHMh5yMaPntM1Yx",
  "key5": "5AYy36a2YJ9pexYtRJgGb99Qdgv9EpfhhfbrzpX633hruyHg73DyofyYSU7U3bgNbLv3nNfGRqh6qJqNB5o2KTyt",
  "key6": "5WopknXTRQg69ovjadyByD4LsKczaiwbbGk4ChjALE8bA47QXdppNCWz9HxiMW2QY8xoWcUCFjkV3x1WGdfihWPE",
  "key7": "JwUXDquYPGs7K9GBdt9Cpa1rGtoy5f1MMiYLvebVD6T2CcuAWjSiWPUJbCkLhh6rG5zFQQg6fJYi8F5pF52d1Ry",
  "key8": "3cdwoHChw1rQN2CYr6mhzTamzE9VgKo3AtRDLP5HcSZXK1azr8KuTQojvomNFGkT7Vw2CSSszsroFG3UNbjitUL3",
  "key9": "qNqe2b3rtsL6NLyj4pQH5PXWV9FM87s9zz5caswwQjpWSXbdA8hVvomv9bC3Ff4LGZg2apKxjCpF8fbhs3M7V4W",
  "key10": "3A8B7MsHwYQJXL7GepWK7ALGq6YsRTY61R1iZsPaRNGvKLZB9orf7KRgXRAJ7rPFynZYCijqE8KNumNMW86YnLx3",
  "key11": "5pqqy5tbKfnSqMeZD2LVycjvJnceDp9suNEKRRDF5RUpGUmWJe65U9irNCmFws7Rbo3J4MGQrcucPdmeiNTL2WJj",
  "key12": "4GnnCi2daMuVuR5GGTDWKgLcZXXsKE3uNvHLGxK9ZoNqE9QXP3XGabqhHakcPiH3TpmQSeuTcBncBK2J3jDSVAUX",
  "key13": "28eYk7YYqMxygzvPJo1VD634kFXBX1Y7uEDMhytS6sf3YpSJw7pWL7RMNs9dqrdAHSGiAjJNERRjCatxDYK7e1us",
  "key14": "5E698iFFT7weZT5ihgQTS2krMAvZ7kKbnFHKL5T1SBjpg85AdvWfNPTn56PnDuAGRhuntu233rQRjKQ2gHHcSwMi",
  "key15": "2TRDgHZ2oSxXurNx3Pu5NpMaD3kfXT4viwafFGXtb3xMYxte3G4UQugcdyRJEo5994MJHorATeX12YS9sdnfsNWi",
  "key16": "5H9bCUezT9DbPchYt7VZjzfRHzbTJDjK5mcCSBnuTEDU8z5y5gum2XSUu6WvpaPuhgEAsUdbbr2AazpvSKd96hK3",
  "key17": "2u72YpNoiZVtVfFrFr1oSQUk2zN4rAhtBbaYtADAwBuqcoBqVmrQ6t86rwxR2JDZ3LWDa7q1byouqGfnBheqeNnq",
  "key18": "3FwepMpUgHauBuyQZxEAQdw3Xzw8c3vM92AxWjThMuMFNo4667hTkwwigqskjsAvzUAJ6UTcTQqnScto22Custrb",
  "key19": "4wk7NPgJD9yHRjhxJKZGZF7ZcvPyMFCerW5vWUzFxZNM7aWf1T7VFBopmb8rdjhDMBSWL9TVvchSaK8PdtYC4rbt",
  "key20": "54kLnAhbydazR7A1ovqxFMiNUA8ooNTjEa4Sq6pf3bXJogKnnaE8HuWTnPBeX8N84Mf87vg4DtGJt7tiaKoZv13t",
  "key21": "66iFekHe7hNLNLJVXRzVrWg6e5UALexFaMfLWRrR7aWbctvdpCZ76DQWgVn9MRbeUsQhdK5fFLdPKroY9ueNrYfk",
  "key22": "3RaXJx8tDB9XgiJY6LbMoayjBMo4FX7XeDmtxNQgjqLh1gPB4bEzr9BivDPQ2osqn6jL2XV7EUvWoMYLk9EDRWja",
  "key23": "5LYaMDqQfoyQmEyd8jcTLxzbzUzYd8JFua28gjL88acJZ3odZ2G88T432yo75xH4uoEabhdq6nGBrvw2Mm5wRNKe",
  "key24": "37rPrU4XinRuubMJWSMjX8rezQZowV5hNXKR2KDm9VyNxhTzcM5q4LugZYQdstYw7sSfvBBJrpEmMnd6dq9hZvMu",
  "key25": "aymso1U6ew2kubPLwsZ8UjLCAbqRDMAeQNX4huNCFiBsM5s4TFhuG5z77XFkkNGUR4w2T7MzeMpBWGwzsT3Gt7Y",
  "key26": "2y2scaFgP24hsiZbHMeNuXHfmUGaktNxupk67uJ8xG5G3s5q5XJd9pgy28eNUfU9x3BrRyneZWXAxYyBWAKqvRR1",
  "key27": "5bLv1JtMj1nHcgEe75cs6F6yFv7k6ATLbkS2exxGpe9vCoH19a19sBSnXLYUHU8ZTgvxf2r7Rc39VAgFLp8rtw2",
  "key28": "5uW9DXCYksBTh13QcRh9SBYjFMG3615kSKvFJDqWgbSDW7YKEr93qrg9iZzT7Ep76e3gUKpUzBXRWdQJD6rB5SGq"
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
