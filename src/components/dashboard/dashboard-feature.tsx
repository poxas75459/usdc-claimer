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
    "4HtGRwC29CNuWtszahsQ2Ah4V745tkbCB67hiGSNhSXpJ9Y7VgEy9gAK1yAbsJp325CPqHoGXYn6zzWQDLS7a2QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F7jGSpaPqAXH2iMerEjNrEAynDgcRD1bJK2MKfi5BJX1MiFXYEVUtRFGujrcGSUm3NBvhpC1j4xMej4c3bFDrsG",
  "key1": "3bdmEE4wELXwDR8yZ82XC98Ba7iEdwbLW5LRfzztQPsb95fvj1bvrJDKzEBuaNzUgipCzYdwHpP785FYDPMaRvPN",
  "key2": "4x9iXpJ2UfmrtMRQc5MeCBFJe8hNXSVDSsaAZ9FyHNhWpC8Nw813oZFe7RpCGMFKWHYmURTn88GsZ9FzdGeH4rcC",
  "key3": "5SHNXfHjJFcYrLKueqcRbSg7iE7kyQH6iGsmvvXpPRNaFncJsLGNkannT8gh26znHPghBQ9QXH72gP5sMwCbE75g",
  "key4": "5A3DKGLbbSBetQJqDG1vCKCUeh8S5mkJAyvoeefRaJQcyTts3hSt3Thrk7cAW546UeVQx6uDNYjzEKZtGLEDBZLF",
  "key5": "5GpB6JMg6oiDPTgqCnLmDCtmwKhxXvipWoeMKAuR1yBuqdE7QefXtCgsmb28vUHK6f1KmJjDvG6eKWGjAUeGCrmH",
  "key6": "4w6ua6dJ4QUJpZDmR5vSVhSrCsfX3SxT1Gsk6JvvNiFMqR58VifzhsgoUPoC22ZMgR6BcR6ejzg4Aap1JaPM7ST5",
  "key7": "4jpGs94KUezBMBDgjqiHHD9R5jV2f6Yc9NgguJS7CGPDWQAAMtKuhpMVLLMyrokFD4AdBEGEKp7rhWzAu7DxgUQH",
  "key8": "3JUE5F54eKdZgmCif3tXfMF7CfKBv3cobwBwbRjhzQgtu2jdKrqRHLuudXyGoe7kzGfpTLYCA8PDenn2ocR6Hkj2",
  "key9": "Ni5k5UvzLC1T2kJ71LwVrANZdzmQGqyB4HbbQNM96nmFfoHN4aSeNtJgEgNLrszH6y8EM7PnM7N6LNc5zfdNjyu",
  "key10": "3R34DJvKQRcjLC13PzkHceWvHFUjUVB8RXBRaDMiMrGZphRXLPE2GrP2hB2y2TRF6oRj5s7WNt8V6i4TZqQibEnu",
  "key11": "rhKCrpKzFG6CtfsEq6Fgg9VtppRptL7CrKnHktXT587L1mAaQ2H71B8zr8HyYW2Rx8Jp17xgGM4WhuMLfj2pD7S",
  "key12": "3zAabQj1ihQU3NX7hBLyabgMMLzfBLpW55jBiM8qFJeHFULG2ByW4sPyXBVKqDgZ7162otK14MJJSnkKA8YadNmD",
  "key13": "5zk7hD1r4GsVXv6KkPup3JUVEabiVRshzB4V9SggLYx82osnV5LbqoC6ZEkaxQ7quigUnqD92CMtqFMFLn8JRbKK",
  "key14": "5krVXuk8YbC9SDAU926JzW81neQmUHuorDPgeTGkkEDPtVWUqSqWagQPoqiB3xXVZ8dixaqK2afZ7aCXsDX5on7A",
  "key15": "643jyneT3FGDBjtZT3HDXs6wGKpHh2TeKKrWZan9Jb38w3sfeAMHkP9icrtVJt7m2WrQhdJsUGbTeXcjbPD9EHHY",
  "key16": "3db8J895iMSSAaoPEn9oveSCstFxqWf9WfAHstTMfy6X7UndxNyApCdutwMT8HfgTYvikdunYn8tmCuF4sMMKL5Q",
  "key17": "3vKx9mhCNELAngQnE44JUW9ucd6apwoJMttL4WzkKyvXMXQpNG9qcVrdCqzCGRx8FKWkGwe8pCBB2i96UnF19kDc",
  "key18": "YJXuFfEZ2PNSUSv7heCYN1EGMK2Z5PQpndJXorWNj37cbusAiDqykXaguaPAre8ePwDEJ2HngUbvTTZBeim1zeT",
  "key19": "3a4sCa5MgifJX7KW9Y4Go4Yza6doHDvwarmBgS7jJSmab2mPDmM8TaV6S4bo37z1u6hFG11bv7N8pYUDrzbdYWcD",
  "key20": "2cePzqzDFZEndah5d3jbjtUb9jB38ufyoh8HrvC4dK8Gdzaymp6tzWw6mpfQGYa5MuvtKCfxZz8v49SpsHFDXJce",
  "key21": "43XL1DPgUwAKuY3j8cjWErVkUVhhL4jno2PbcxXApGo4Kq3XfkihrvF4ah39G4FbkPWkq8uVBgbxztf29kijrCo6",
  "key22": "dfWh3sSGYgfSzSiuxJbmPBtc8HRRMeTH4n2unFkrdcRkb8hRGZYaxZuXhuC2CiXuSUkWmDJrA3K676TkrBZ9Ahc",
  "key23": "5sFimoF8bg95wfzn52Ndt7R7DexEF2TLEeVPwopRgFvFrQRJ4S75f2hgPfNrgf5befrD3U4LxpDpPHstED4PfPV8",
  "key24": "ySkhvvJcyMiKhQXGoyfcKehBp9XUFArKAAy3DpUjb4mPuVMCL7Pn5GPnDcj9SWcUab8Vym9vGDGyPb98pTKzib7",
  "key25": "29G9GqiZJD3bfXPZAGujWKo3a8CTPDsqrZmJyv2vcUofwLrT29gg5DUxPCWWTEeLfdQJnm25rnfHH9iwNBpLuoEm",
  "key26": "2sBdi2GKd5i81AB2y5dnfDcaWTb96PvKth6dcoe5f5iVbCsYbCh1uKrSxAJeeWCQUZ58b76GddyyiU7fHnVq352N",
  "key27": "45ZihVyDWUzKJu3JBq6uuJ8fS5arWZ9MdmAp1QRPbvYA5WJCzkBgX9AWeMwsLBKN7FmRjU5vLECuTyhuVu8nemuj",
  "key28": "HRGaZ5pg6wvvndEd2BXdShSp61gGyCydXWHuUAYcV5rgNfrxgsbuataN4JAZ45EZGus3648heR539HCn2LeKfKz",
  "key29": "5fhgUTjb6jG3736Q8FYKmMTNPKRutY81MtAiG8zuGHmfX2JKfwXBSqT5hrAyYn8h4A6YhhunL5kQW8ZwC3k6VKyE"
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
