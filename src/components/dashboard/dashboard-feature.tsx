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
    "rwC1x9h95pPdeQ7kcp1SZ6gjcjwg34EMA3GreE7G6CCDRh5jsnB9JJw15rypQq8og8RgSWfZmcr7Wzc9XbpTBUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cn2T9FMvsLXvVquU3ww8rQTAo3Q5y4dkQiT5ZvGF93DuThZ9auwwyMPoTkkXpKXtVMpdenkkx57Z1CMXkWVZ6am",
  "key1": "XVoJoGUg7yo2X3XDie5Rw6qVse7p6bDuk7BWW1DojCEApSAJtjriwvJd24sGvNMdvf369N74qMLMXnuSmqbYHA8",
  "key2": "xaqAPi9aKVJ3S5tqJWNRzLeXAu51hsabuUfzuyGnbDeSCqHEKmaf9R8oEN8yWLcCetDoxJtod1qNbDcHxwK7xnZ",
  "key3": "5GXnEXdLAQnGBpAnU89S6h1sJdppq4rsFghjggiU7EqR8GSXugZEkSd7emcob26LRX4VS2T2khm2LUcCA8Ve4uoF",
  "key4": "iDzHaRPy4wJhJtQMbxsnRrhVhG2t7nZK71ZfyEkhYeURwEG1DY9pCri2JzFsAAj11ba8zfSbYJdPpKoVrkTLJPn",
  "key5": "577HVK8bAqVnERX463d27h16GdzA4xBjtWmvY2Nf5U3sn84tuUKdjZ4LKrH4afCZd6VgwYwYrwsF8Z4yrWuFiooD",
  "key6": "4WETfUBymCGS7pCZDMS47xZNau9A9CVn9t6mQ2dx233d214pRfufjxQXw8FstVarynu5FnXJnjRCpw194erWCb8Z",
  "key7": "4tBMGtfAbhthZtmvVRY8Cz11RfmDUz1ehx8PQbcEjp3VpDhzGjawkHfZ8qkVxcJMgdaZ9rYv7MuHknrqJMK2rhYP",
  "key8": "4xePnbX3bidQvcFWgxY74Ge6rYGjAiJG8GJfw86FEfvTVxqwPdsphM4eX6kWKrzMZ3pdiYMsvwnP8ihpYfor7Xvu",
  "key9": "RSic7fVZMqpWSpfYU5y4W2zNnRTR5JekXWoTtsYEXUGUz8GW96QTLArwvixZJPTRNxTnJ64h5vejFYzHiudmD8n",
  "key10": "2HLinPdeSa7pXLFd4UMypEkdDv5oU972BBcKM9k8f6MCCbvMhDh7ZU8fdY5BVfas7XyS7og76JZWyUbiigVcaasV",
  "key11": "4bMHrp7saW32DbHDoiffMLe6htK6bCUz7jKTWNdAy8D2wehwaspzJsGbKr7wdJnBNySPm9Bu5oazrMu1kJgankPw",
  "key12": "bZgQh9gDbJG9B84qqY7uu1VnmH6NYsnXVvUCLTeVKFwoWZnuQeMAXADDZmE4Rsiq3TPuEyMJRzt5ugrwu7RULGj",
  "key13": "4LHSqCR1sB5xXCTdQwJCWjLeg6mifWtQ9fEYCC3m18PfV8GKvLpT8ojjdmW46cHDstrfvjrR3SeMSkRqn6kYovqA",
  "key14": "CmB6yDPn44EVNTu8HMRrMEnZo7izyoXRWjera7d5MdY3CFtofpZahBjgiSUREndWzsC6LrkegrH7VfiY6fjqeBT",
  "key15": "4Qb9Sqd4Cw8g7DYS8KQHRAMjkDwUBoGKVjoQbKkr5Wqr5s8ciHmQNF9PLzrw7ztrvSG7nK7NQLP2xCLkbKW2ECjJ",
  "key16": "HbxCzv4W2sTZdG3yrjE3KFRvvFL4zf54wsjeG2ZCq4KasP59hqsiANhKH3coHFNSNtLjHwcwtQknDFxJhBX2wQC",
  "key17": "2t4GjoJmipQSuaR2vSnWsMy7J8MJ1uMuVxCi2JvA2WzJ5dUkkygPAmMSqbwbEWAb1QG75fJ41d4EZH6cuc4hy6KL",
  "key18": "5q5abkEurHXq6N5yH5mLYJD3yUdzmVUD5D7v8BnGNJT1AB19x2x3dqSqW9we99C8zkQA3xtN7Gi6qAkW7nqcPS1u",
  "key19": "5ZZeMpLSf7JYEbvahRZuZrjeLANYvf65GTvDa5674MS65xP4BL5iYLRYVW8Fak58w5dq8tqKFyH9fCpXBi9AgKvo",
  "key20": "4Y3x6vt42igfqSS1Udk9EMoTyYuwubJqAKJPyVatqn8pNgtBbusDZEoECMGRL5d9dvUCNrNnF2xhDukFqQ6FJinC",
  "key21": "5eXXRd5nQ6N47KvdH3pW5mkcqQc75TtAnVGBREyLGfuQjMsHgxpjTz63zwxyReL93J3783uhf5Te9ZH4FgcoVWt5",
  "key22": "3fXtqf4HWDjDzQAkbY2TNuCsFD8MSuh6w1cG1yyyPsTerU2VkNoerVpFwwrrbep6ekaFHP7wHQRBoZCXqBbx7bao",
  "key23": "DrZrgA6VeEv3drd96TS7gHCc1TEdcPzeSTwGgUs57pv9DmybuuJf7CoYNPC6bnjkwW8QBuyeSztUKFyZoaRZFZk",
  "key24": "4BSNaetGSK5PMbhKjxP76UZK5T9cjaFTRyh2Cd3fGmgXpXc3HpbuXivH61Hxb9PAR1mwpVY45cfMrWuv7ZD24HM9",
  "key25": "4nQYgGdyszPjuMvADbrxYaKBDNFC1E35NQaYWVARFnYPgac3Kk1jiZXDv51vzsEJLsE9d7vvD5TxY15pQdk2Cn89",
  "key26": "4shzSiD6LuuGuhEWZCHd5N4H2J39bT9qXgWUi3nLr6o2RUddjWyYmheMLNziPU9DGR5iiKvFP1evtfeqH7M5Qh1Q",
  "key27": "2rMXmSYJB22URQQ1SuGGZnS58efx7NgUT5tFFoGmdqDrBVJRHoC8gp69q1nyDHqoDZNZ5fVVruqwto75YoARUsoY",
  "key28": "3MeoDbjRpCvx5oweVmzpAb3YNrwPhmBnM6Q8pqq771enu3ZiCTEVrXQb2er4w1FLh13L21vwVCPusZBoH9S6URBL",
  "key29": "6GcYiQNxHnSjEH5MvQfsF9JzvZoj7GdFsHJTKuyohvaKt7pnbwSwyVMhfaNuHDXKasRAXUbuXpKbhz1XUK3BQYT",
  "key30": "2Tn24GpFHMDhDhsfXSLV57vV9DWKdWkvrCjkTECAQuBSFeQt4UyjytXMuLFWh4hwV3ua1jjzgq7w3kgZf21zFsdL",
  "key31": "4wfg2CEkCWAMjmwXfr8GEh4ioaL3pZF9qk2H7DXqWTxwRVy2qkPzDtXpBwxnLY38YoYRt7mozkdRvta9QpckJdop",
  "key32": "H9faQuabmDGKBNQrNySEBwTXLgyj4m6kELa25hzjYDkdFj93mruPHL9hqZrrsTFZ1hZuGBbhuNsUFG2Tu5cczaA",
  "key33": "3qT1M9fzatECkgv9tNnpPu2WRCjTTfS2py4K5MVf7ta3kBogbRcey5joj838f7qm2kWh1CikSryYwTFgnSdv1VzQ",
  "key34": "2BV7G7XsXVAs2ghwbVXb2tyP323fD46rT9LpqKbpEgfMeRPNDmw6PDyJVRKWVNZxNrZ9C6djH13kzAhjgCVRtBxQ",
  "key35": "5GAMqqronAn79u1HVu3bd8Zn9a44MAL3ats6svnmEVLewHuLWJ2dCDFt96hmzQsmFMmXGtSqWM5B1ANPJrKQXWEh",
  "key36": "5mKFQsZFprrh2EXZgVd21pYZUxCKzAhiard1HA2bYbL2F7htdFEwXq4oDnYRSJbthhEc9U3L4yUNszfsRmQ637XM",
  "key37": "2wiYKUCAF3jGWg3RGFXgEyCkVuKTvMoLdBDX9S3q6n7Vcvzt51EHqcR5XAJRYBW3ce8gs298fXh9PTFPWbwxn7Gw",
  "key38": "qoR8Fsybo9fHkEwiExSrYCKSrstvE135Rxks1WFCoBC5H3EUTcGPr3zhpRTUps2Ymo9q3ePcYwW9RUCQ8pj1mUZ",
  "key39": "b5r5icYofCsMUEQGo9FhGNiDXZKgv15vRj2gbDXnW6mqzbSE9T2auBpzYyVwjQzKBu8jVpZGzg3PVMxCKmQYQdp",
  "key40": "2Mvqzh1b53CC8D36W39k7dAHCMmLEUWAULx8XQ8MyZ8JwzibqZMjMkkTAaKWDKM7NdkXphY8TDrBhaGq6vzZccge",
  "key41": "3NkqEBnzX9kD3XJkFBNSqAMJYZ1Mr43TGphNusRBgkNo9NEtEYzv7wF76DS8QYPT9BhxhDwYiFWDCmLoyBmSpCjG",
  "key42": "4MpEV7HW2zkENoUcXthNRv66kHEoMgQbmCP3ws1LUyJcprYP7FmLSGEdgBS5GXUQGFoc2cJHgPBw8nYDCkkkBJr4",
  "key43": "27jfBYriB4Eit4cMMAkBAEgVAcL64SXyW25D5TCrbTkFNWuVmwenRyDkorGqAU3BXCBRmmaFZB4P6bzy5UughacA",
  "key44": "28AHWoJKhx4aNpPVB24gfVaYq65W3FE5oFYpjnGZFijqKYYJpoh9aHAWS8eVsLXryLYtUpe624GDRj3JQm4Uy4Kn",
  "key45": "51xqsDTNvCLAVd9K5sJhTqFxF4seJhvLmf3TZdn1EqYTMFSxKW74hmaaTFsUdmoh5whmH3vxLouaiNQnA8eYcC1d",
  "key46": "4UgCapVeJH7Vgs43MXAgPuQrgf93HVrA18swKSVHHQcNW1BMksdbUhM2WDkVjeKyGibLTFeZCDY2GRBMqwxHa8UY",
  "key47": "3jaES7cn74yCMqAkXRKSnQZLieE7pLWGuCcuK3PzmrMCqFaMnmYbRNfj47kxWFdUpFq5CfsfEf9LrGgAkDTnEfX2",
  "key48": "oxHfpnd8Sr5t7LPjKNhfS8ppoQM7LtL5mdaqvYkvG9BgyWQJ2TcXR8PnawVz8YC66rwFUjBLR2JCf1iz4GAusCZ",
  "key49": "5LoewMHyj4kG1oWUxp6oiuiqEEarUnJFqUzdzgfRmBbBdoLobH31R5GAWc6r8eybHhrhUU5BjNd7ZtKqMymYNgbM"
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
