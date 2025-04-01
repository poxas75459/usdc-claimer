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
    "5L9nF6NGnsQTE5y1FsiZeyQ1A6RpzyWnCFu9yXcd3vCgkoWuit2GqEuD1U4UuvvCuxA8hU56zq931fsq9vd8m7L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yofe6SruFhNMLCR7fyR2mTWizA8FBd6m9Vqw13rXnLaXrm3LUx1zXJ2LCC2bnBASCR68dU5ossreK4rLZijWFZj",
  "key1": "4x1gAU9iuU1gSZk31RKwu2VLgpAGGn2BmnRwk9QFYRD1dTmkYv58E9dHJ1hPPs4kpu8smM9Pqtf9g3GpTJjrrdo",
  "key2": "5vPV4njtvPyvvatiLh7pFRPn6XtGCrg9DMmxV5TTqVSae4isyif2WPnhtdK888uNF84HzaZXhS8Mpo6DCyP3nXG2",
  "key3": "kKzDdQfKEpYd3VXyAoYtYNrrVRZyTL5uuQVCZGakxEcrqaJCgMtCy1XXsxXwMbvPxtSMTAb7u76zFv4oiThjXGj",
  "key4": "LVzUVRpbrpPt3oMMGTzNBoh1eMVS8mEZJGqAMMoscAJBGgbaRGGBU2j7JsbPSFD9G7wSzdzFQ5T1JFHGMA8VwiH",
  "key5": "5rDBtEgHAjWhsuHnrRcTsHbXZUpgZgdVBPXUiYfzFRs1nRv4ja54SmAFrAzaZG1Fy8kzpf8YWb5GWWpksMn6NMh7",
  "key6": "2ZwSnHeHoQ4GnjXrnCfGCJKiKUowXVRx9QQqyShvoTFJZ7RNAL2jQRitdQG5L6nw2PbF4d13XK75d2ACioJWDf4w",
  "key7": "2WzPUDUXP2N6ccdTQTzodpBpYXC18wdRCmw7JUkSnztuakcGUgN7gQkKU6ZUzYYhxqQs7W4mumaot9WwhWGPaAsx",
  "key8": "2UmG6MVmiRVx3aoEoLefy55E14GhWAf84eBb8TdcDUfjAUUtX6WxAThkTV3ufrHjKH1V6MKXFwAsiC8hZyqotwH6",
  "key9": "66d46LE84MZnueiyVXZYhEiAhrUW5vDi7o4vPniuNEFGe8N2b3wRyrU6hZ5sVsJzX8YakKZdeapZsKDjsArpE9PN",
  "key10": "63wrru8qKqF6iizHC7ncFk9TvGijjSdVKMjBVAYCVzCpE8sQR3oFMJDgb5kyQsbL5Zku5HAifL4ecjBNYZLBK7bW",
  "key11": "84SbJsQP4VwvaFdYzaLGEpX68GfrxKL6oGFRxWwvNxadQUTjgCetHQmuW11TQ47mi3yNj4ZwoKW39byVUaqqcn7",
  "key12": "4j3S1zwW7vtEKy2ZCsxcarcBwShQc5GxDEvDXAmhHHrTN1HV5Ewtu9QF7E5MgxyN1gPMCkoZBzVdcio1ADaovA7e",
  "key13": "2XchpsjALgGuJ1JgiskM4Gd1xHmYmViTEM1ptq8fBfFfozJETqHJ3NBjt9zMPAZsFoSRhZwzvauySonZmSEWsN6c",
  "key14": "5g9p6MRtH3YbfAoR3ReCo4KUvXU8mAthoWbVY7bBUCHS4Zdm8kJfzXfJczGh4jbwSpEwjVSFAWPnZUN7yzxcgZ45",
  "key15": "4sXvBKqFwF2yatcRffkGwkeAw2ysAVHMz1sxh1TRRux6V5R5tQj5MEETUNUbRMxk2AMQaZUsigViS4vsiekEPqns",
  "key16": "59fbLt6v1Jeogrj3zxnxh7aP428MgvH5pWnAFknn1dQYeRLfxaYetqfaQ11Drf2SvzK7HjRorxGyyndmWTq11nyJ",
  "key17": "5sT4JdWtC1BUHDTU71F9tNgXeWysFEp4g8YR9Ux5PHWv6jXARACUC3Bc2cZUSE1QpieQ2cWPXoRf1D4BpN4MiM81",
  "key18": "2WFVyYp4P8e1fr2QjdYzKAgYMeMgSYu5go9d6V1kQiQkLRzNUMA5EMifoG5cGbb9nhcdJ5AYPD9uTBsEpqWs2Y9r",
  "key19": "JcXhKBi1rzsXR6H8AFquKky4Gvh3SsHriy8P1YckktjgwQAv8A5Z6GcpjYZzW8xe728nzqS2Rc1osaTGFKbg4JW",
  "key20": "EeZKDZs5ySx91rAYFmMbaZfteLjCM9x2hmw5WVAuC7c1mjQBnxN6Z4biMkevji47GYRTDjzUyxNjWDbTHvKdrZF",
  "key21": "4A5XcEZduE9ac4ucfFPqinR2q6UAWbFTnz2vrsbLvMRbA2ZFrTPspZEWHHUH9aYFr69NvM3E5cZnRFsBtdzFpnMQ",
  "key22": "439hixvEXHGoMU7f7yf2eDmXBMKzHSoQkGnj89fb5Zv2TqEQ8A3r3yTfFY8cq9R4m3pHMV3YhkdZR8Bi84XaXshK",
  "key23": "KxxFTLUoyPKzqcoKK46RDZyxcty2RQP7Z35tAVTWNC7C3aN3xfpopen3YDrqaFrwnM9pNFYoEydK3NYDDpeSz1Z",
  "key24": "5FgcpRXXrmnXVQaJLUxs64yrLs6a2USEuUPqoGU3PFcPzupYBwZSBNUiZAwUfCHVsTJ4CwafesUtw2LP8erYb6iS",
  "key25": "4XhYsGHAmDNjokgtCQJFL4iXXoVp1YHrTn4B6hPHUSphAztc1CKNfvxyBdYhtPyyUeqwCqASE9rne1NAAR2piM7Q",
  "key26": "3gX21tGbN7ms8w3La9DZbz1Sdg713hzEt7KMhVDo6yaumvRAzd5JEQZgDvmmaATYpM2sF5csAtuqMp9QiVmoe1PR",
  "key27": "Zat8fXCewgqae9crRwB7j2gMAQtfUQJoiNd2vPLT27Yg4Ufz4WdPtJv2u8ZiVQu8EVWJfwnb3QRSR8qRgwvdAcq",
  "key28": "5GWTQBRvkKeiG3UPhzesnaWKhAvnrV7u7F6UatN1eGuRFWGAQdcDXiSmBtV1kEw7XKUxZz3dkX8txnkWSukspqBd",
  "key29": "2c8CNHrgELEzf2cdtv77GJzH9S1RZH3yZ3L24Keda6gqr7v4C6R3255JoFLinTDtbZSVQPnRb9iP59Ps6pvphgnC",
  "key30": "F4A9ATkL4SLthM6zKRmiTDCRJzcuig56DBynXFZaE62qpGAQUCsoKgGQfFoKEUgg6RALkmPzYaBsisDK3iLB6YQ",
  "key31": "4A8GJXWy5ffDMtjwBN9mSBWNFniceqUXAxj5rURNpjZLQJP6cxRLc1qWRY8G6M6rUS7ZCVjSeohtzfxKvnJDhBw2",
  "key32": "2BHcR5K1NzPpswiunusFAzJeFqdCGf8C7PD8LwJRvmf1cRmoZGwW1izCBm8t4YLymWVEFZeHeckVryB9w3sNDUK2",
  "key33": "5kCwQedBynAicdTZpXEHUgZEZ2kqQbcg99ni3kWvzcCRrgRBAFurDEVvgp87AJWff7jeMqeWksr57kdgTnzmW9bK",
  "key34": "KNYe1Hawbp2rGzBF4QQ4rxBCj77rVNCxMxbfSB2btJZJknhoCogkHnGnfTfEQJVnqgPT2RNdYvrHkwc2cEDykKP",
  "key35": "34STBFDqAXjwkHULnF5qMC1ATvuHq2RHdqG9rntPLXDnjQruehCqwSxJtMVawHH5bXW8nREJf76UaBMUsdZDFvFR",
  "key36": "3EaTt63tNCzYSZTcV3iXE8w7G2CKNc9gJGKt39vzmzKHNEAVkEoxogt2KkRzy6RcKmT2BNa7BHrFNLG5hdyuFQzG",
  "key37": "36x84wCrNJPc1iD8DS4gFcEWPVwH3pbqCioRa7urvtKWxMVxoh3BbPnn98r7ghH1vUqmtY5ortCAjDSHvATWkf2C",
  "key38": "5QBGUn4LwrGY48nTERDJZiMftxyCXpxAcA7YBmh86dhLpzuUgyF7aUTV6XqP4FVtBhsfrYAmH5HR7GqA6sePLfyR",
  "key39": "SfEsV3XNRddNuFoUXXtB7fb4mGAt5W7p2rUB8nRCzhmLwwngphXxytwCMRK3FKrRKixgXjA65Hdi8PZcRQN762i",
  "key40": "z1jJQWvrLU3FTirKN3zLQ7LmXfM3NchRsZdwTt1JSGhufbdYpAc2KSzrdoWDFDZou3QGXzQXnmFnnrSrkUt5Sgv",
  "key41": "4DfLTq3wsXARr8q9q3mpV2x3BpASSR2xc6HWAVW5TD5qzBHPeokdYo9GUcb5iq3QSenHcEhovSVMk5zCfEfJ2As4"
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
