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
    "3qWf1G7zWqwPh71f731fz46md55m7afxj7MECzNEWML6GpU1rTP9sE5nnYhsvt1aGkiCv5hitJN1MEoCiAfQPUE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JoRo9if8x74SdV2NqCBXjcN1T6KaSrVC23nvNciAtVYjiEfCoD9XNTVNvkYSsiwmWuLHm3AZfdohBFKYZ9hUfnq",
  "key1": "27LvwYtGYi3LzL7A7mQQKuqinKMUa9bohdgtwHYLurG1EefknMcPDKfEos2BgzANBgHQY2wsXGckW9MEDqrvzCm2",
  "key2": "4TUraFJY5uwsgGRteQ8mA4XLr7P72LuDGgmfkvREemqqRR1bAsrp1XFmjuC9BQ1iAEqAm1rxkmpyu93uPBBMnd4H",
  "key3": "2YSpx7tnhed7AALn42s4oyf2Y7tA7woMS8GhQYnN4aBZQ9KVPYBybwkdJFbQmzPYz6W4xfmKJMCyo7ui8Jqa1okU",
  "key4": "4anMFendS9B3qLC8ZGhc7qZLwKviqSGnMr7XSTKQwXK7Jgs5QbmGVCs65Bofc28VRTJFBNq4Yy5Ay7v2uNtTW9Ts",
  "key5": "3Sdf3LHrPxTpLKDhyM6ioHqF1Sv1bUiGfrfsHJDem7iDg9UHfK8tTu55AerLwrVnoD8QU3m3UdGNE6yBumvEVvWP",
  "key6": "GqaDGqbAq8cBK2y47CKiGtgWD1tSpjD4GC28GjFwMFc9bDxAaCQZYVAJzqnuNMu7hhgXbZ2CkmtTV883DdG7B88",
  "key7": "5TEtq1Ya4rit2UEg9yxquUte918N978vkniZUy3BeBWH9hemnzB9FwqoixYzmGBSC6DSwBbpFN3QNGKe8c2LyGWw",
  "key8": "2QcNVsNYbnBvVfeRuNZ4ZwuH8oR9w7XG3UksaymaC7A3QBaN8A6mwH1R7hygeoNQtQwfTw5xRGHa1DD1qhX8UUHc",
  "key9": "Tw6z9Pj8K3LCWQW7yFZF5tzmt47MuezfZhtMDh3eWacMBDkUiKR6BSpNC9XJu1GdXY3a4nXivGfVeV584iYWCv8",
  "key10": "3iGEk7vZPXk83vhhmQAw64mL6qRgKZg3KsCHo546fPDsUm9hZVC9nY7N9D7bUD7bTGNw2DoUMt7Z6BxgyF3gH1Vv",
  "key11": "5MWQMLdrQVzRMbqmgNAoHz1wS39qPGMW38GbFFZh1mFJCJwTD12QaKa3UamvQMC8UgsYnUeBCxeD6qCpvQfRBf3H",
  "key12": "5YocBis6TadZ17pJ5Jv5usgx6DzHM7JDBmDyj8cAqASrPTcBr9RdYb3DP9TB5oaoNxhLyphtNF5X8Pk7acqkz2jR",
  "key13": "5AL7Ke1sh3L6PhkLeGDvnaLbB2DTD3ZZqwu3x7ZQM9M3rx8udvwmVkc8kXhsSJp3xdRET6JY17LDi9rfBRpXwY2q",
  "key14": "3Mc8unKSBidxHUxGPnANkqigLjoaDz7QX9W1H75XDhZ2FJ46D7TW8aSUeLZPeGoAHrWs5yR2PZtbLaZK1G1iFQfp",
  "key15": "4HSAh2LMUVZFSBqLWL6Y4cjvKCWFZs7DcL79oMrCarYiyUKBJo3HM4qasERePkpMNyQyJ4YrA29q2H4bKgK8g3P4",
  "key16": "3WwWSZuNXtLhiEm4qTNtavp2JFq7n5AS84AGCJ8BqcpdxFvsK4LtNZZohmExuHyccoPRaD43FseL89v6cdBzyMdU",
  "key17": "2vqmZBX35vWs2j2FEiUFEzTRVinZWquVJ7FsDc5Cb6h3JpP5vFPUHL12ZDnqnA8movGFEBdJ7wk623yT7YeTz3d2",
  "key18": "2UVzVnPPzJVMk3x6oZizmcJcVmiiLKfHmT2VKWmGGHZuFw1DiBnqe4vQ3zD7CUWihMhN7tjq4EeEXbCCgH6DM4Ko",
  "key19": "5L3zXXG5mS6hpUB9nvQ6p5szNrWhaVPbQZX34U1qUTDXGAmbmK8nypiuF6HNN2HCzdwUWqbMKRwuoMn5GZk4eLfZ",
  "key20": "294up7CGPw3TqE11XMwME5xnsesGneHcvCenHRei7x9U8hG9437JEW3PJ3ZL6kVK7hkCXv3ty3UfaMNEhSMLKf33",
  "key21": "3mjB4T91p8QPKWqkdiDgRoWkBSUafT3FfbxgPMxiFKwh7GN34zWv5AwVTWeNSzNtxjKbkLn9YcdwjH4y28aypB8e",
  "key22": "54dkKy5VS8RzhemqGDKdix4rBzYrJ3KKtNpsfAU5cgbMR7NiuGeE4drPxRteZVbsvoft2sRukHnPMz6qRvCeWE8c",
  "key23": "HJYu3JvpCGbx4fiWF44LLfdVDYzZYvjcm7vf8hMYUALdcTw7JNEMK5ttxCUMgHAfxF94tLu3AVwDCC5W8m12MxF",
  "key24": "3CVaU1jZ7Yxaw934daBiqyQsXVyoz1m7oYQey5U8V2L25crMV73cUSgc2eSWBQWeoFuXs1qSf9tq1k6BqufX2g21",
  "key25": "2z7DntbQv6DSLnPfKpTrqmLoBjRxgbvfY7PuYnRcVFCYWGnM7qcukFxzAs4r8Ro5rHyXywjUNkpRZ8eYBxink8H3",
  "key26": "5zcdc6MHUKfQeyn6Endc4yy2NFUf4gb3JBY3aezTtZRthjLw1NUABXkFYwvjE7PVzM9vrdNRPnJGTeMZAfCcAJds",
  "key27": "3oFXUghKDLzzSkUW8ur2CRF8PQB4qrnBjUmiRsXat3VYFhUueQbUKp9dYzcHeeSvtJEMEURkWptR6Sy6PvV97HNc",
  "key28": "iahzM2G8dgmzXzByf4eBH8Yfpoj4AzRop5asFEMuuawZ5ukN2HH6usiQgG9dM59MomxWUPtjboEoxKcu4fNLC5i",
  "key29": "4Fvtqd5xeHoLzxa5BYVjWyYBJpe9JeYMicLqz4WC3M3bdPiQEJfrqYExZrJzz4eCETjzTs9deXmbxE7eFvUEgPt5",
  "key30": "BU8oh5atsqFwaHEpTgvzu8eGCMc3HkZZgicY3Tb7hv3GjXZZ2D9RoGM6qJKfjhRuNbC5cDFexzTrEKzoiokg2vm",
  "key31": "35ceJVUHYeLxaHMReDcwB1qeNPRsg7rzLLqnTUsfS7qPQDKM5xz1644VC464UbuaFNK4pKKyj7zGwpJuHM3oE1QH",
  "key32": "4ikypDDQTyy19REsAShxQ5rjJKnfP7UsRDfKPwpUtwxyKq6SjB5LPR2vyhuw61R93cxECfrrukstNVgUgbWEPVR6",
  "key33": "2JyGykmfrRsP8hHAxBecyPpBgnhZ7PCDSVDpaTYtQ191VnsJnnEWA5dFoTi9HL7DePsYyHEXXcnKVgykkpMqvxa8",
  "key34": "5BvfWzzfwnTdmq2SFfbfs2PoaQ3yEqcmHGumidyyv1aD4vD1AUPcwpFmGRE3r1WHpj5h9EwD7WcM72pvcCXDLSp7"
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
