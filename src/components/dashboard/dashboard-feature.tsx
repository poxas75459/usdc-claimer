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
    "4vEpDD9TBPWNV6rjpBa2K2XDbiYWy9iMbigTPfjxdw6rTFhptEwMNNrrA4GxRNjMM1ypdRRMY8pCW9usp8Gm17nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnbHMXmMWSbpPeijwRry7W9eQuzhxyUwHzoUcqX6yBZDRF5LZPtSyrorauTXA3ohZFy5mbzjsjL4v7uzi7VR3tk",
  "key1": "jDSH7hawXQP7jmnumUyrsuZtocm7U1BVpMyChc3BdLsnsWBjyjHrW4hPhsVcPE12KmxWjf1jeeb51Qescjd7iFb",
  "key2": "goMzLiBfwA3Qka2d1cEuwukTGw9KX8j9hzt5AYx72NgvAdEwt6Bbsojcrc24Gm4LeG2cJJDCVLeoQguEzZnCiTo",
  "key3": "3SiRMvLiiMq9xXeSfNTpmhPEFwTa1vRrfy4WoLXdtFpwTPK5FJJkWwxT6JPpmgfrrh6KbgwaeEHBUkCmL8w2x6Qz",
  "key4": "49ijx8jajmvZgBnszDxc4q2fb8per3kPsY7qqrUsDHkBNQbhQTRrdbdyhDCZRdNdbJQbzNEicpVqCFSHGQXoXHdH",
  "key5": "2zTa2KrsTDJPpVeCy4B22PiGJsq36koadZ6rCcPhsssfUrprRPr5Yff53VpK2hXfwTCgYmKgT9gdUeuTwcTHYAsY",
  "key6": "5pWTa89zYCDCogzDcmdGFJ5FLu2jXMHBCKTuSvDjyXun7jffPXbtuEinhKZg1BNrGB5hE5B8v1bm9wXXBJza6WZz",
  "key7": "4bgG5HZeagD756WPiH3ctURdCbLH9coRBB7JQUJbeRcKJaJeCeiRJSFrVSEfURjJDccMcYiJWfQmfwVZkiFGX6SE",
  "key8": "5iGkwguYHTUvvwx8p5No7ZZSSPyf1NrBeRtQEHfDoAhCyp1x7UaFRrBsYDFnuTYgT8tjk8BL8hdWT5Ej2ke4bb1v",
  "key9": "3r2RKifh4rjyxJbDnsmnyJ8odZb1Wh4kE37TCbgFQ6wkDpY7uFBqVBSZZu7zPyDFR35Gs6mXRSSM8GGD3yqW4WM1",
  "key10": "5FeAqe8hKTt3XGPcixPDwiWzRSkFbyB13obPfUf3BY83ozoTp7vdoJbXEiAKy8CmPEwV8n7yJ9j2XkH6nbREc1jo",
  "key11": "oX5TGHTbVUDnw9wHzojff9mDLUnuEjUPfWCyM6RdTzU43fxiUUtvuJrFsxooJSXx2WjefEieynRAq9JKS1tM78E",
  "key12": "3J1tnUQ65DxXuGxwKfxToCusBMEPSzduQmRpaY9jJmbWjWazHrEu13Me2KCChvNt7ABDRLkM4j48bgMcK3AGx1hS",
  "key13": "SXputY4BEwRBtVFGLK5voksorqqoqQi98DUtByFshBiL3ccKW7kUMnpVT2mwTW34Ex9qQDHuRLozNuyXPobERU6",
  "key14": "5wxuAKhB3w5AA8r219YsZiGFd1U8UUcyeV2c1goEdLgbKEpg4M9bXyrSkkJTUk41ScJ4Yo4ADzeX6X1XJdFxXgPy",
  "key15": "4T9XYJPfmXbnkRuPkmdUuA9bL7uNcafGtz89tsbEEVNWViw8Rk1PRpa5Cg9M5ZTqkRfGbhuTEfTnw1Az1dwTmhVt",
  "key16": "3FbZ5FpotEFXMzcMrXHuW9SU2r8v86FHTFnQ9JAcBsgQR5LgjywR9jtAmZ5cjMeTcmSCUexZ4wwpqWsgRCkZ8cbD",
  "key17": "2dGUrREEH8Hpiu2RHihTejhGR9mCjDATZNYteHGeKoxbVfFPXupW1RqYq3n8YPWdWNJGUcuntFeX7R2ynVbsBehA",
  "key18": "3GZ9Fd6MmXR6HNcaZwvZQT3nJpP1F9mdhn5KpYXUzNLSyUho4WogQrgPMdsPbb4CFknAPrEvVpWmvFsxSZ8j6ZVd",
  "key19": "2PW8SCYuxFUFhxbbM7TSt7KYGDSUQWJCbkDyLB4um3No44U357QkmoCWXW9NT1GB7Do4nyhw5fLFWmUw2gthUyxu",
  "key20": "3e5AWjYVvKbQG9pqXx5P2WB38sKSNyRUZm7XSEacnea6EsPp73W7x6LAn3WSto5evYviaayvwXxm14WFFZBq3VLy",
  "key21": "59wcTeF3ZJXVuGQREG2anSdsrvSGVtc8uWpcAuiFrZ5BJWkWM1jwX6YDkZn3v96o99gCqaaixkEH4NH28EQ6mNmF",
  "key22": "2Q2KQMqe2kUi6U5x6quE8Pn2ZeLjvphbkqVFjnt1W77XmCNh7fSr895ffb8sLyFT3ZzYq7Nrg2Fvcf8cWDdDMPft",
  "key23": "HoWUwmsfJvQNV1sHQADuBMiLvHX8WY9vGuWAAQZnEMyUKArZeqRLXFZXge3wMsBLkUWikZYJNDVKZQFtD6MVpnh",
  "key24": "5uPWB4fknhPzoFwk9JrkDD2yKoSCA6Uv4At24D4oFtJNoBmTXy7YGXEx2RE7aNd8bCDATiWVMXkZxoEtgtZYps4g",
  "key25": "4pfhNBKWJ8zRhktySGGD4avRuviJP7RJxprAzSc8wdLkvakk6MeegUtkf7c1gFmYNVfmQbL83WU29Pgsgi48MdtE",
  "key26": "mV5w4UhEuhz2U8cxgNtGaZHtqaqQY9Mr84dymAQN1SzqQ23yUPK83ggny11Nr22MxYdTJmZptdm4vEXEWwfiVqb",
  "key27": "2A34k2rU9i7ddxHPA9uo58vmQA3HTrQ7RpM978MZaUa4X1ELZcoabQsKVZn4J1KBWk3trcUcsU3o9AoNRaQiB23F",
  "key28": "2CNf3yw9jwBiVay9rMoXkx9ZZkufS19Gquj19x3h7ZZWUudxxZ9Du5THnqpfL9BA2bVxjq17o5XWRjk7Essr4koY",
  "key29": "2EAg8P7jHMs32L8eNkJqckmmZJGw6waNLgLqCc1DW8agUp5Zz1rEBnfJb2CazCspEb5ohQmBHBzhRiwWXG1SActJ",
  "key30": "fwRgVeRtDeAhgJDt99kWbHNvVT4yiJJT2Fk88WkSDymQZ7mFsYuPjiSRMDtUQJ1TiakAMsC2SBCvf6n1CBDb9qS",
  "key31": "32thQaZwCzPHVRNLXp1cuW18ST1ZiqLopVGEvzH8QZy96x1T4vdSHWpSw6TDq5wzFVmzMLd7zGW3egsNxGt4758a",
  "key32": "56tvFtdKnbFdDfTQxiYysPwAaLCNmTPBkzdbMFYNVvPST1ovPoEr5wvKXwC81g8WW6j7YKbJoDWx5W7ZqNpSVfNg",
  "key33": "33nWRPpYoXHRii7tBpi3Bxpx4eabPfWME4qM3kP5XKNPqch6WTDXHLZrXQstWNBCC6Y4yiKpxFrerNgrb841Er6q",
  "key34": "e1X84gzS9wi5pSGxT8mpjgW8yuWg2s6JDAUa8nMpwgMNWx77x3mdMQDmKoN9PswdJyvfeAZ34FY95LUFKhm9mjf",
  "key35": "3ozDWtaLgU4k9mG9LQmUHaWubDbbsUXcppc5qj9zVyhhGzWBKaoZAr6MJ4P2KL53bwX3B1qP1ApcEpxz6WxLNto2",
  "key36": "25VSi5XyRZCUCXj94F4Vp5F7gMBQ4MKQMQ16tGdCC8JwdGBojKv3Fi3unvNSMmH6AjqTYfJBPiH3bVmdSNCMQJ2q",
  "key37": "3oDg2QXL3RCZ2uFzsCr8fX8rhnrGXjSh6dQ9iFazM8wP1Hc3RQtVF43knwTWRnKd2xZbPa8Ax6EBmJMx4mwyn4nE"
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
