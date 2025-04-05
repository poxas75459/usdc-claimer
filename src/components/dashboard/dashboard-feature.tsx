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
    "5gbntKFtgykqSwgm6hFNxPDRUd28wKGU66Cy2d7aaXWA9U1qv51FSs5EPPAyV1VNbhMLUJsgcnL5AghL6aQccPPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nKMyXauPwkxSWrzd1T9yGct542urUATLgqd5u71kaawPdfbqrqcCw4mjzVLEPzvjWNQsFXBLg6MqYxPde5o6JM",
  "key1": "3cfnCXagEhhp3fbz27ECaQGYaot7pWPhcDPNujV8PRXKJncXrxnD3DRyr5EFACrSSE2c434vSst5w4wFyuERtn6b",
  "key2": "4p8C3r25sSY4rapWhCfsYhtDkczGaoKdLZp1ybjc8UpvqhoGbxcduiUbsZCk6v5NK77pD3oGaHqwKZrQLkX5uGMm",
  "key3": "4mD1QzpkskxWxKjyYKEfUbsW8WTMa4yWheqrLXsA6EQJ4Hcks9ehtummsBGXHDGQRGCnjQJNrEAY3ihNqnpPkNma",
  "key4": "5YZoL4ZcqwimfgE2X7UjytArDhxbHHcncbwoi1ew1fc1iGeot87BAzawhdLaiWd1YPxdgnx5PRcvbDEDTYytdG3u",
  "key5": "48Mzng96Qc4xFSG64NrXESxcTKmrredN41yPsRGqrprszK9qeBc8vh2eBvRTbfS1T2vdz7VkWxStc95LJZCkMSJx",
  "key6": "51hh3UgM3wbHTLNm5NKX73Mi4VP2cSDgdrw5Nst38YuhP6GsXyiVD5GJKHChwMyidkJknEUAvFKV725WVZdv9kia",
  "key7": "4epKMZi48TtcSRsQ2wq3F4dysDNqAMbrYA8211rtm4cQ44UPsyt31c5SChBqhj2jRj8xqDDXTfcjA5Ls931cCYv9",
  "key8": "4ej5tEWtVwUwVpf8YHWgd5viXP4TVFNxBYX6PuEqguWAxrRYugeuiPdLaZ9awkvsLM2Jhptw9uKtcVTyQoebpk7G",
  "key9": "2Njw8ygo8vbRjneXwbcDHJsm26K4wtgwSYfnMoKsMoqgHLqocDw72RtUa4xkzzbbcNCc9h6UtDpJfbzcVQE1J7s5",
  "key10": "4xsqNC7YuPqCq2gMjaBfn1bjPc6X85oXUUBFfwPTfpDekG4hizZpSPGpBGn3hMciGRLqgQce7Qbaimp6V2uyYiWS",
  "key11": "49Rd8C3xy81fcxPsYx24y5rTsb6xVAgKatKFT4JJ5YFJ9bmGFHEsu2W3Fk5WJxaBj4VxFhxaiDLUTrUvP293Kear",
  "key12": "2iccihNG8bKJCxVZLV4xUocd3cuTXo6b4GqtpTtwpDps2z5mkh3b4MvN1A4B6QLWBZQcDPw39XpvpKRswKmxHDV2",
  "key13": "42Kb7ZyNJDu7FSxUijMnfu7ZsYzffZpGH7m7Yz3gCH2UmnuY41RQU3oL4UVRGEDK7auE9yw5osWRDV5BFCsSLqJ2",
  "key14": "5FYR2kiSMmiP2AUiL5KZdpD1YLWiqkDtEtP8eFD9TzfgsNSWvBirJoRcGwddj4NYiCZft4uYNucZSdJ3FaCmQ18V",
  "key15": "2sC1cSArzazcm5d5v9yCojuRckrQQr5Gzt6VtYDiYrTqu6mDfUj4xkJbd9GGizcKmFWj1C3Qk2ZEaX658Z2KmqH9",
  "key16": "NTHEjAzrdhK1PfR7onS5PEAiD22EHVQ6U6nNoh2F8FjpTdHjZKPSnqLACfPFDj3oHqAkPSRyZrdksvhF2YU5fFe",
  "key17": "2JvzFdgmWHyVMj6ofknBEq96vD2EvNnZqNsiJBii9uBsigohE2rPiSGtz5hoBc8GFeQhAq5X3PoS9arThT5GxvEs",
  "key18": "5ubX4R3KDE5Fvpz9yZWuysvc1Z8Vyn4hW19QBk69itnC475vJnzAbaEY8eQ9kAmK46TwbthrieggpnbS5Ff1QWoy",
  "key19": "2dVUGdZeSA2VioeQYd4Efw1rBZTavp6Zq97YPJbYXz7BRnGft8QJp56EP77ur5pJkHzyrEU5ZiqQx6A4XAzzc7ec",
  "key20": "3ANSgTfZGXkC3bM72WMhk8ig4HWpCXo3a39k1ArXwgsdaVfnp7GP2773ZjwVaXLTRh39HGumV7DWWEvSM4wLf1Tv",
  "key21": "5XGW5eXTVVmyXCynTrALeVBNCHDRRumVxWJbjH3VAj6cQQDWwHfJNyEwcDVnVe5MH47cqjwFiks649gDbXoxdTKM",
  "key22": "66ct7Zoh253FR5a43ReCnLFafdZg2gXV4vzy8uXqwVMSKVfH4Ut8FFETB6uQYVfeqR1Wt97fjiWtakexoDpzp6tz",
  "key23": "4pVpdkWbhahjpLuQSALTwLfaE4XFobBtB85bxoew8NB6eERjqDxur4K3abM21SsxitCjHf2EFkpJNEdHGTP6P4Lh",
  "key24": "2LAnUcQeJNu5PXChAdYBJSLsj4Hu7dfjgwy6jLn1TrAWVQVraJb4KKAdL4uEjMkTh5h16t4oej1ZrNt4kKF8nZJ9"
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
