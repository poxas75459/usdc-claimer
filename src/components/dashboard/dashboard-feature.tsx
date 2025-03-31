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
    "42R3GCpXzfGvC8aJyN8a1DS3oiG3skagczahXUinGSYbcM8V3x9WySTARomkCSoPMpHjSA93ZnAYSow2QcZoEvCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzHqLvdAPaibFeafn82A5aqyboYoYwtMCgwofNeCjCRhKpVoBpEy5ZEq63nvrzHVk6PhNGkGFVAjz8wZukH4uGT",
  "key1": "4ZnrHKEBeBaBJyWL94eLeRAvrFkdcFigfezoTJd4GFCbwJYd6LhpkmzfbqAjb6Xcz1tjkMLsyYo4LCnGPnjc2wPs",
  "key2": "1225kVfVpsLRoVcedmYbFvrMeiuNVAsxFTKC9Y7uqapL3ESZ8nYSHSe1hXX3N15LKUztxQbHbfnzJRwHFsMd8bNX",
  "key3": "33CmVr5h1fxM23CrxC74ELtTB6LTp6GBC4NmDR52z6oCWtLK3rjee1agk81eVrgvA2JM7WVnRX9QMVknAmN2pioD",
  "key4": "5uxvQSivF2R13GJB2HJEpZAVP9ecsv9TBTNDgwEWzLSwvpAFBf5dfUKaevbwSw1SsaN7Q3KqrgFqDfsSV7gT8Htk",
  "key5": "5CYhVSuJspAfTZJesb9LE9sHeo7J3bpEy8ReZpzL7nDhnupeC56jULczyasR5zRhn9YbuwnJ7LWMC1CMouUuCPZo",
  "key6": "3b1aLqyp4AaReWQDAxjYc6H7jLAV9J3wve17qcwxq9b5MsuGguK2aZAk7HGDbiJh7cymGqz9Rdf3NNz9sQ44VX8k",
  "key7": "yK22V99ahWbqhs17jQ7Dy8otELt28XUUfekArL1mNtHHrZeLQHY9MW7NVy3sucNzPQH4RqnBYAAXTiZVjBzpWQh",
  "key8": "51puHW6nsFquaamBvwzioJXH6Erk83HdyPpNDLbKTNQdzqWhMDPytiAgrXPazxyjbtM9PD4mJ2C4mzF377bwkK4s",
  "key9": "4eu7hBd1WivTX9rkqaddi6CRor8mNtNYAtEcy6yarNJ8jWjQeSxAZke813yCKXXwF3r6DtjbcdWBb1VaQKL3BXek",
  "key10": "5Tg59PXWumWav26DoR76k5MQtn7WcHDNaPiomiJjNPGprd2uzgKthDkaXyVf5ygJmkjMayd77k1EKDpENL81ZJsM",
  "key11": "32TVfNuL56ec4oX3YiWLnw5EpN6cE72k6W92ahovcKc8v3Lv2QJKJ8LRtX6ZjGsa8fSGfiSesL9KTKDWR5vp4QYq",
  "key12": "4QyuvCRNNXtrs6Buc8dzRgtAwCTuuBegzxkWhLCf65fm2xdUDL67HtHXty7YTPok8zRfrpGQ3QJcx28uUXrf1zyo",
  "key13": "5H3KY2tTikGHtVQKRHxWXpUfeYHkJwi2FH5wk4jRwxi3FVGHnuF5JvkfXRDY7f2RrDczeaSNEP4SdAmzk2HBoeSg",
  "key14": "3FPAosHmyr2BdvgHZAK4T3CFsSYx9x5u8RRVbZ6Z9hJBCV4DFDQacSUz5eMBfDdkrSpiVViLHfJAJdg5eXUMKBNz",
  "key15": "4wqCPUPK2rbHfrpjWb9Rmmjec8eUskua2Uu1Vtsmxv653bCDyXUDT3q7N6sn2pVaX8sxagry5KcrvTg3Ekbkk5DD",
  "key16": "5Mv6JAN3y15NPBNVtu93Q8AHXKwMBYbLvrjdqW7kS1QA55VReEig23YHZfQpgn18Qp84s4pzSV1J3xMTGn3Gw1Yf",
  "key17": "4tyFMvJofJGSGbtqT2Mb26eFbG9WwBzXDCWZSu8DJiDa73kauWMrAHsYVLzeVyRyMDX81UWVxV5orZ1wvkv5v2Bj",
  "key18": "3eSzhUr5iZqyeafm4YSe4RVna7iU34EbmeoKmXnPNTSd9RtUReCLaQqPNHVPE5sdyhEz5Ax4qtFoBTpkHTX1mGhk",
  "key19": "5CZ2kmQCEV8drUkTG3aU8rLg5sw8jKdMVKAkJ8JrZwdFDApDa4yRY2Z6VnU3FTkaxYJRQj1ATnjAH2FBkpwFMrv4",
  "key20": "G9SredcCypCWo1dFVnVRYr2tposfabXMWuomMxeLEA4y4Gu4ptHegKQTfJU1pAN8BinAeBgyJDYZkfYgkvUYwEd",
  "key21": "YQZM1BaVCaRTJ66W3iHuWyygfLTuY1NvUsAPH8BZexu6TdT7VnX745oQ2dA9STnPKJvYDMEkjKzZytZJywTQ7Pi",
  "key22": "yHZWAf55koGjC7FLn5C6ok51stVAhhJi9NTvG9NDq2ZH5RhrSG8FcSTXxMTjUxRP1iBpWA6EsQLNmEQiwaSvaFa",
  "key23": "3sXK79ujWJgoV1vWAjX7g9S1RNEmhYhyn2GYvKkshJBYvJpxKRzSkSRLrH62W8w3H4199XJkwbj937dDu2UVxsdn",
  "key24": "2yRNpKYNnXzUWDUWeqrqzbBtYa9p7CUZon1hboxesLfRmFUWsqGwSYc63Cp6udLT7oYt6mJLMyvM3hVX5cEqfLbb",
  "key25": "5BEWLkW7uPXDybzqZjdfMV5JbETHxN47ddyCY6JE8zkfoxatupZQ7VXbm2BVv3M26fpHYtFGuGQsyLiiPvf4yFfU",
  "key26": "5iegnqfnGmSudvWZvW9Q5yxiiC2nnvKz2oiTSpTvidLJYr5YkH2CNh617PEtJboXxRcjHcbgNmSWgf4HxZPTkYxH",
  "key27": "4k5mXJPtxUwmSaNCN8yt4VFRsB84eBEp1p4dY5eh88d1DoLrdB88wNmWYvQ6CrbBS71QGNj8XRRkPi6S77hwYRi7",
  "key28": "3eyrnExPC78rn9YUEUuxc1P9qAf7Y71P7TpVYdttMiqnJ5k7iCnMXxF9GTMbvJPXNHVAuGpqitSoA5yZdp6LBq1Y",
  "key29": "sCSeqjf1DXw51x8BtFbtU8mycNwhB8DraYpRoPdTNHjZVFHgHtdKdyLK4fk8A2qN62WaQuhsBwik8bzkugpV4KS",
  "key30": "5Ukjf54bU5kdx1ht6GjnTsAFPAC8NLQTfqyeME5RJCFXW1bseL6QD4tEG6cSGeerjUXx7JEL7vCauJEyK4AtQmSN"
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
