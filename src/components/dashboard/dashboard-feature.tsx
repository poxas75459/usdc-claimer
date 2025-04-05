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
    "39yNAVK1963M1j4AKARCD2oDZeVup4xYRQThZYhpCcgbkqBB4Wx5noV9tZED2UrUyVKnGy7ouB4tocUdSjjkBFTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQm6irogNFsAEkBpADM5tb5Jm2PUC8xfARBNxXQvyD4Yq2qMZ5XEq92SWvTkVunZPP42VDcXYSG12mnw44kAgDA",
  "key1": "64AhFoSm8GVwtEaZYrwKKiR25Xb9W5iYp5cLYTvduuZjXw6UyJii9VHvNSM96oXLZGkgia5XtmAU8CWDMbJLvKkW",
  "key2": "2zCtNyoh6Gk4GBWgmb5vNNwZ13SXkFvhmmMZe7JJ884KsJx5uaYa2XiKJzRPbKfo9ESC3PB3Mht6bM2MJijn6ZGg",
  "key3": "3jGsH668Jtq9aYPXUj4mwqJnWV3WKaM2X19PJcTeQ7gQGgus3YAvgMCGY4D3NnCwqduKP9WGKQHyUBXSqXuHH9V7",
  "key4": "2c7mG4N2jVLNrS4GRsWgfgdSepFszw7JFiXncPkjEh9CgQA1mdodVbVAXexeQyeAofvGmz2vn9nXgHUVC7BryAJB",
  "key5": "4UNSmHa3BKWWfVSyqRMBZRd1MoCxob9Cbo94WmBFSULMKea2LbTd8pn82iFaLwHUMP2ewwd9UenojZU1WEdtPEDD",
  "key6": "dDmFFGhN7AK8P5hiHnHeMYgSdMrovD3Kcubr2rywcaT7m2QGW31VBcxs2dQPMr8gbVRGmbvfUNxTXrvoAnpoKan",
  "key7": "3Me1TEci44gxqTMX38KSR2uETmH8QtxGvKVxNwkZcNUofEV3znjJLj2aJBZMAtcXmMWAV1PmNqG4kCLegVidXUuR",
  "key8": "BR2o5kLtQYberKef8bZSsh5FouzBcAuXZNxu1ijcUWFGweJMhJbEKMR5ea7FNScpUwpsMTzxp9nbXSncUGV38Ep",
  "key9": "4xH5z9DRmp6UhkZMQ45VXwFokRaPrmE3VqxBr6YnCx6NkvNTYEhj2f8p9RfM4t1tScGv4jgaZXHLsbsJ7mDpDBRB",
  "key10": "2n6Bf5pfGFEbsCsufwkyJNDE6FWEaWNrBgYkcLSVnCxwxPKdBnjJ6jZVHYZrN1Qo8oU6LJu7G2aMt3sx2GZjTMWm",
  "key11": "4WT7hMGtBRygjbeUWzA7EquezVUpA2Qk6xSfvc69H6NNBnrFmyuf2xdWVonZEWkSatsB45ueftpoKaSMGUwcBaz6",
  "key12": "2d3v3zwWiPpDQfib6YZKzCzu9537rU2n5Fj6H3MeDJEmrad3nTHufrrsh4EqKYjM5QrodEnEnwAk6gQEYT6K9yQs",
  "key13": "4hQGLScZyTbfUqK6b8xFyaBV62rS2nPMyXXayuHHbrj9gqweaBqq9LuEo6RTTJd2mQhiikRkwL8dtrAvBLK2FKwg",
  "key14": "2tghGhDzRNS4fWFrS1Hwf68c2y3zYQe8q6HMNP5hAfmhidYBhtCke7CzBYAqGJ9iBrLNwe7kaVoukHhku8196HMn",
  "key15": "YTX3SMdEBj3x5rHcUrqh9Gn4xsMeqfFRXpNGxaCTpnjDzq2iU9ErodakpKX33YyRp9R7X5G2xRLX9xnVRP6z3bY",
  "key16": "35uvirRhjfuA3SzdXipVK5Y5TdSqhu4BStMcywhoprApc2o5fRq2T3dePfvvKhSLeDiQU4GtAq51xY22brWEVK1B",
  "key17": "5C6uqBg6vZFFRYucju1ArXoQvNtiPfEMipPRTDF7UzMqsU7NWQFQNREaPxxPvndts3jz3AMvCSLF91o86fTuhHUG",
  "key18": "3B59kihTfozYvnWnGsu4biVUNnt9dnURbqRA9biKEYDAqPCRg7JYQ8h9yBXJipa5S1KZvvmjrZot36K6H7V9gYjV",
  "key19": "22VKmFDtjJfVeZU3WS4D9hRSyErJKVveJawHM6gqS4M8z4VWqry3ovXLaG6UXNLwtR7oQkm9wXjvMj9VLM1TWZY3",
  "key20": "29G33gDWLLRXYKJK7EWDUZGeSFAHD8RMmRZ5cBG4ZuieyVY1U7bcU65cozQvnSFXu4Z8ux4tfkvqjsgoLUBCqFmR",
  "key21": "2oL4bnZ23MyWAMKyTY8MKZC46CTwkuxXUfdtGivMnbfgpRoBPMx4vhL8oBbxcuNEysjh4seAvKZgjeub8r23qEvi",
  "key22": "2rfT9CaxZtYxHa9CbS9Ky53wN3nghZYcUrSPwPqen7q4qNvoWksKtgveCiuF6yfjA15W2XkdRkJVzcKBpCyHsnYY",
  "key23": "4cjedP5Tq7eAhYEEKknyE2T8dsyiYTDmyfahs3R6jf4F8J9j8iiF8NLFAmDNEnmXGYHNh8kvPSCr7mH6hYWLht3E",
  "key24": "5c2QMipzXh2SGG7n4gJ1N5J9H7JUCoTapffrNzTH2znfShteguaZ2ze4tYNxNWavFLUw2EPCPBUPaCuXzwFCgzeS",
  "key25": "5icaFa2aEi5JdrRr4btgcwjUKr8kqGMcNtQkZgpKn7ExPVvt65EX22Awiz4tGbAgEijXTrTVKAkEuywqUvNpbDEr",
  "key26": "5sy63UWGRhb5N7oHsrZZHVk3xiXLgHGfFwbsJCNtrn6dKV1i2BcarpX5yEPb3Gqd7PxrsJJ6fVMr7QEKAq8SqZho",
  "key27": "4A51ezCcA2882LPvrJSJM7x5tthEEq3Ne44pp528Hp4RvgNnNc4kiGoraEBNuttUhFQw9CQPJg6CrMf5Un4koCn7",
  "key28": "4gNgWvqMg6min2UnBaNRz6B2URQbsUHSvxBdWNB4TeMoCvjjfUkjNKeJUHCNWpVubY5ivQzVZAZd3u4moQ3eUH7A",
  "key29": "2ZBaeRLv1uDudSwd83zEjPd514MnHoGj955PrtHBLbncRB7aEimabyqkudJSmC6ZmyL7n7ZaS8nhK7pGTTvpDX84",
  "key30": "3m7LAqartccXT89K3FLTuHiYZKbGAU883VpEyGwAAUqGbq3osyyVmXKnnWE3JSExUCdBNtQNdhZsqCPQ8zLXDL9e",
  "key31": "5JDJJYk5a3Bn6P2w2p4MgqhFPBHWE9V2DkYneX6E3vsANBZhSVz7ktxsyQjukyqARYQUR64uE2pVcLg7ESdUmnH4",
  "key32": "4Sh1rvMoErXG4ttumKKkfMg4NggYV2MFzx2ZPcVdTTLJrnmUSX4qbg2jBogwDqXEczNFLjrqipFenGpfqXJtwKcN",
  "key33": "56WiEoiE8DrcsUXKXNjZKwFrL7k8d6MMRnhB64NjgijfRk8BZazwViHXj5S8Rkai73c8YH73D7jp98Sg2Yqd8t6r",
  "key34": "2TPd6mqaoSEM133HWLpHaMuUTAWy3gCDeTEx5pmJEKU17o6mdWMX7rt7J4GUgimK8BtCiPY5iJVN1DPZrtptjt3p",
  "key35": "3dWsueQD2KzfnhrVjn95MGLamYRMCTDuzuvsXqhW3jStJrtnjBcLyQiHSEXBNHjXu45fpCGwDA47kiRfhCw98fru"
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
