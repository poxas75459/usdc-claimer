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
    "6dLpBAQ7SmzunKitetdUq7eB1Dq8VVZDs6iSc3GttwRzk8DfAXSZQpTDFbUV31DNYsD93a2mZThkezt6gnWhzCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FwZLYqq4YCwC1vrtB1XbX1y8WsCdn4tPsRAAVJvDANr54WeHGB1uKyuRKQpGPbqkSWWxLsubtPcUbLgrMbG9FEy",
  "key1": "5ncMMUx6qRYhjogEZG7wnoatoyKrXSe9DcAuVFasoDw127WP9dQh81dpbpNTDj2c1bSPab4Vu4tMEZQsApCHUaFb",
  "key2": "ejDLvVGjhkjEAm7Y2WLKsKdompA98sgzMrCank5JWt7XDAVnaz2atbtXS7m3wnR6wpUbFgfe49KntjnkVa7rWn5",
  "key3": "4929qBxMcPDMjhpdbizHqnRvBrU59RnQyYdTPwwvcyAbTydM9xbDGUgW7tAhAoxRtpFwSrcNi5w58zaqLxmaoyxq",
  "key4": "4LzQfhzuFbDaUDrbyLv3FzQrZwmqxWeUDSBkvfwN7MPj8CizNR2qkTdJVCVtyXNntAT4eSTHmQLiAq3ejJNYaAKF",
  "key5": "3zcgGGSRGuquQcwFPuwEgyJ75C7peFWgKzH5DrrCcgPGSKoVjojodkasHKbmLPg5nc1NJwMZFiJ6FW3JEs1kBMrt",
  "key6": "5dWQzfHZAV8x5kZvRuGaSHXymMkyDdf557Q6Ei4ENzGHKfLkBaQKgyJaNmUV4D3NVczpQmwCp62hcvP1w3GLPQo7",
  "key7": "UqHSsrLAq5sYK3yLLurNZwEXTfAbfo1F2L8M6MacBoARrjQJjvQ4aWmwrBKgqp67Z7y1pnPziacZXoJvpjuq6i2",
  "key8": "VNbU5J8mm6jD4TYx1UeccdGVgiWxy56ur3CgsEpKLLUxwLzMJRpEnubkw52hKtVH1cGKGe7W7GMTYaG9gVrLmkv",
  "key9": "5xW1eMcDv7XkvjjMs1kWGH9XGZ6udnD4ULLtTUWCeGdiMtWcHNu5k1UKoQ1tXrEDX2EKLS4Lna9aR7QBwr2EELrs",
  "key10": "3qMJCiccGnSVUbSwxzYuCcR1JeQAZ9NQ1LaqprEowmbTHtVVm8zvMTL3PiXEgHVmfYQR1gsQhn4qcrFMUX4Qh2FG",
  "key11": "2jrX9iMSSA3ySoTLEfaEj17py6A2gn52w8j6Edjih9e3SzAJnsbcyMU8DrusSQsKt2m4A2pNxthNrc9Ksyc2Bi9R",
  "key12": "AdTGnPuDfLTVYCTP8FQyPSbs9N65SbtAm3A1FiqXTE7fkRfBY6Q8M7KkdL7Q4nKBuQf8i5Y8E1DjjahDJefmVpT",
  "key13": "5ZUFtXtgygWY8uA9mCaCJLibaMSzbJZRZpvPyGZ9FEvqtiZxEDw4dP5k5yMWRCbFaKBVc66867kAxn5hCgdLeWZn",
  "key14": "5aaJtMLS9n6Q6mNtzzMxwX4kWi7h7jinDtsuBSSn3K3XqXTu3MWMJD5eqkwHLKPLPM1UyKbCJZhCCpRBdt9SQzU5",
  "key15": "4XWPxDZFREzhZR3nPnSvHYnXQCeCjmD58pND5sQnd8iZ3cNTi25XwNtXSuHQLrSHK1dZtYM5pie2LqbzPTBtFzHK",
  "key16": "5DCnwhV5D8CG39CX6QNKAyjZ5mJARmcK59EdapBWunf2xMaQaVU4xZXUsjDWkau5DHWeaL24y79XACyxevC7q3vD",
  "key17": "5kxSb69bK6hZ2gRupzUV2k8TetqRiFh8rT2sciRBUdgfiXGTGEamK5VkNt7Zx1bv2pHg1kKrYxgunfKxR5qswipg",
  "key18": "2e76Zb4eRvBy68Y4Zcbc49kkfBhcDY9tM2KbPkdxDkqcDMxhbURp5MhX7wrRygRGLE3erYSSWo5nA19kM97rR5Q4",
  "key19": "2dHwEhMExnA86TztAXQ5fHkdqfbNxphymW7kBqRRmjWxDiDQLdw11VQEDrAnB1sqNfUADKNK4qzDhPpFCAb9178n",
  "key20": "5MZYiFipxehFMCbKpGgCAij4ZcGcqGjCr1fEe9MiRYDhJPqr5LStR4RigUdPP7mZFGPTmx5dbRM7M5xhpXWi7B6i",
  "key21": "4n19zGA6cipuUo7c2ZQKABV85i2GvFoDE1TBygYWvm1vZaJACVRD31YxV75fRGPLKZeBLt6NkC12Z9es7bqfaq3V",
  "key22": "4T8zxjACzZRPPxSKK8TiaNNxWEKCadpaY9PYhAC7YYgBaQepb8RmKy6hKe86nkMNXQGCzbhdk1VHHkUx93bqCvpH",
  "key23": "3NtG6wwS8YKstSNQ66FVrhzk5JFkHouWBAuSVyn6cWFuLCXxh3NrnBq8BNiuUxR3KKBfEXieaoFmxzr7twjfDs7T",
  "key24": "3xfwodyvhG89BRwwwQbktk78EmNscvhEGruheeMoT5LxLmqi1DR1mtw47XrGk1kwAiHdvAPYSWjQ31hWjwPt1QvV",
  "key25": "5KcKToootPZGPoaHezHKWha4JzA6HJAK2HDeFDe93LyC3pMWHCRDNhZJaFv4Qaq88eyf8wiPhVRaCN66UzJxZNz1",
  "key26": "58d2jzzZgpTvgquUrctDXLkCRncBqwjFnHKHn8swaRAEXSLsN6i5MHmaKZGCiGRehCHGguLzQTCBFgSiTeYVcuTH",
  "key27": "5eMFA1EPD8Yx1CN1AdS1dboWxbJyzknYW8LmSmw3amQFHhPo3jmMreg3hPMB46RzfsdJFJiMSvh2zqjHP4skusnB",
  "key28": "dagGurbc7eDnvjH4gAVwFKxzkRBtsgACc4Kti1nDnUzQtkXVrXudNsWNJ48ar6hbeKC4i38ihPj7Wyun5VbJARa",
  "key29": "2iJ9P2LbxjhQ2GJFMtEV4eTPXvaqDch3apBCVYqga8XTMtC52uHkwZXowzXZx64vDruwnDjXfgJq3c6x9Qckohqh",
  "key30": "4uEnSiwBRkTUiksKHwG3ceSJrsVKkrWWDRdHHKrFJQ5PPxzzwcbCNgKyRHHYTvzekyYB5CzVK5Eyod6SVzbmbKxV",
  "key31": "3EsTHQ7AoYkquAEghJDaikUnEnyuKYPjJ6UJLDnbec2pV247EZra6qfZXK8QWQzRhJevrSCDF3eoqS2jUAMmRJ8q",
  "key32": "RCSSEFaPdq3xyaEFgz8VtuHtiytmAvPbJe5T5Pi52S45we9pkzj1PFBLJUbKSLAcXPaP8njX2VusDPggtgWj2qD",
  "key33": "4QzhFgfRowsB45pnocgwH5pLLWaVJiWqLaAZ1MbAy2FgmgXCckcAfBFWL21usu19X49MahsyX3Jv6kNrYG8RFarD",
  "key34": "QHLaqVdcBDvjGNXrPZLcBTL1wZxm1hMny7hWukGxVrmUVgrigqVM1s1fhBEx2JsrXBmCeb1sf1MXq4dUtXsV4xk"
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
