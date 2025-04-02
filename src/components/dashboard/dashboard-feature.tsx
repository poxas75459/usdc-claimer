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
    "5G7hDFLyMzRiR5yoE4E1iCLZPeUNcnu65CVb1FpcPa2TRQxdPquXPfQEBYmuCAG8sezz95Hqxkzrk1yipJ1JEXzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPA6bDahJ7mYyPRY5d1WEA2a5Vp78BuBrSoy2mCsXrABVvJ64cL6ucttg3tw8LanjmLZi4xrZMc4tMKog9DXB16",
  "key1": "evPJwivUTJJbax4eyPYM2SxWEWW1MQ6Tvsv8N5U1B8vRDAvAVof9wRbYXjiX1nJSFPZtU55EoDy4uEkRwgpo2X3",
  "key2": "yHV31wiUqahg2xaNxvjiCPkVZnkXkqPnbzMe1XZg4bKLPCBVS8CPFnTLsiQAcVCzR2p258LnMwfn34mWBu9t24N",
  "key3": "4gwXZtkcedGYbTEfLShQGAhTVfUuypWwPJDBrX6oNuGvUsqGyhZXjCXYdtE13ce19NjCAtaDgNVb4FVrX6Xom9NH",
  "key4": "3jqnkqJLCmkyGmsXsASjPLXdUHCCxuchGDGnNh2EtRyChwHT9mfLZxUnvPwbw22MHsXzYUEZLKU4bUut4L3C5B2e",
  "key5": "7uRReRAHkmaGWqYeL5aSg5Ax3M1y8ucaMtwyzvjD8zQ4wv4i2ZhdS4sTDrvLHyNsRD2Gf4fhhX3PaChRFxxXUWu",
  "key6": "5wQMTV92iXEjeM8MEJCZimt4KtkFBoG8T9bjN8z66xEPEKGvko8A3Qa2eEcypThqigMEF9d3MRqRqVUgkzqmDhEe",
  "key7": "3tpfQzbtz2SUk6cA8vXnxN2Hq975z4jWirXbnsA2kjigesuKG1gaPtPwSx3AP7xq85sksQ8KmdJ8r9tyFkrMQMgZ",
  "key8": "9cZLj3ktWMrVdMSRdYgok25M8Qcjn4djyw2k6hXA93ZnyygmFLsqtbzdqL8rFbAihgwPwaKxtYah4WbgqiHo5nq",
  "key9": "nrrJhACo2vUfNm58AmNwszwuKdNojnVUXmbnxvCKr4xzsYesBt3afLsJe2oJwu7YaEfv1oQkfwKgobDbRdPaTpT",
  "key10": "qLoBzNorFfn3L6nMx2USGwa3JaSA9962AppQc6qznu9LTvscTNLeS1mq3qpHW32RmxpYZMaH8EHkogp7s36E8ed",
  "key11": "5yBmCVhpnZcHiT76AgCoHj9sCUXjaR7r3GYYRKhrEBMrbDF4DVhSnnqKZdBRrn5ubCZzQsxvN57Zy38cDeN1Ssi6",
  "key12": "3mTX5diBToxyMJxxBM4U3EpLpwZF9XrUhvkYJU3M6atGhxYsNX284gRWUikzukM7RYgXNioX1CFfgnmCBSn8pC3a",
  "key13": "3hYe36Ueua59dDMDtCBZ2iV8HGcp9kJ3VtQCraRXd9WkbEQvHN7CT8w1y24HWHbqirVV8mej8FiUiPsMMGPamzf9",
  "key14": "51yQ1uvAReS6kPp3oK2PfKXR1PDPXWkH73ReX6kxMCHhcwzm2vCs1GXcrVjnMq73tFnzv2RVNJeHLkcgsfSTmeLc",
  "key15": "2X8TR7NpeLbAVYoCbF8Gigjf1BjdkPYucmWfV1rtCe4KxApRudpeM1yAYR3hvgYdreB8JDVWdsZtp1LLYXnJ48bk",
  "key16": "2ZdXZ3Z1vqjVBfDPoXfdFg4jvLAQ35oqZTQE2ieHdQcTH4v6BiwRJFqN6o3wyf5UbNmgvusisVDiuKyWgqnouw7b",
  "key17": "aKhuhLTcNxVf5fvSTZpUViyKotT84gUAX5CjpXZm6YF9kyB9Huh14Tj1XRX5prQWZx2KaGkmRqAbgzdztvcACxB",
  "key18": "2SB2h87qXJsZzYdnvcB5MLMrVdbhLxxjGPxRNdj4AJVwcqoqBbZBZj5rC61LuMijLXeCgBuyW5EZGAYGfM5CtHSy",
  "key19": "JcXmZdP4oMMnnmcFVfL3odSyUyrTPZXV69vnJTJVLdddNUtm3Hw2YJrgE3xEjjQjiQjUzRjW2Xs5Lfi5eo2jxQb",
  "key20": "5eKQmEgDSb4H33jRxu6CxdQNmrV8zLmjnrtYzGXha2zE4dJjGWP5sEf317NpJQjd7i8xXRtggPNhhsSwdqufoGtV",
  "key21": "3RQdHA5aX1sD34eF3MSB84waFhhMD6gzac1TEHxGfec5YRd3zZonVmEH1HYKQ8y31ndYhaCYLDVxXLf66zxbZKQA",
  "key22": "5uobdCgcRoTVVfef2gAMqDpizPNLq3ZUFL6ugJQEhanSTNuQbm7Grkgo2jjDUw1E1FPwriPXZP4pEJT4qopbkbHp",
  "key23": "2vwTaHKnRwEHE9QvnDGYEvoeUwdpkCWtqoktFiJ91GnRHtvUU8QYPN832m1GDSBYVNKmycUR6HNcMR7Xj9gjzAFy",
  "key24": "5vW6T3uZke3HFGYmMkuWafY7RAUgp3Vr5op8vHcyhHjsrKtXjhhwhbf5282wdRkZB7cYnkYVPaGjcUXxBoyTbgRE",
  "key25": "3YHB37oWs1y42ZAHzFdgt21MuVxV273KBMRAqBFx7L8cTJG9eLGUKSVEc3WkGsyUcUFvKpRQkfN7DF19ocA8sUGf",
  "key26": "5K5BdxHq3t4aGH2SCFHALwXMj66zxxGoTTBHGo65HVYCExz4WDGBeDAJ5t11usu5Viwdd9biBWUEYLn6Uaa1sd12",
  "key27": "Vfe9EAN5FARztsHwDiCsDpJChoKBVFC5xnVsuug2qSF3EJQi93vzQfSeaXvCVr9FkJ72J6QAEgsXENmawcXxkgs",
  "key28": "2XeBgZW8sVBrji3m7TX4HZx7E6WE8xvXQfSW7QL7rLvAoKTTPS2ELbKBHMxWGUsvaitKnR3BRy1Bd2JRXwo7pqsa",
  "key29": "5VzD31LrrfzEQCFBjpwUVzLAVCX2ye2xS77ybGgpc5mF5RCzp8PBAf36kwyVkcFJK7KaLTZmo1HPqMmRgu5JoR4X"
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
