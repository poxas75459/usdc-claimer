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
    "8TXHt2WXDzh4jqGaCx4d9LvxGAkDbJ7s6SsGSy7aNeGW3tSYbj38rPUK2jUjSFjjDKj5U8HoEXd8hwMpiu6GPng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjf2b6jBmWJA3b3S4yU3BN9NCwhRy2q2pkHuiQhN3VAzLpLSN8wcEUhUbEBd7RYsmEQTNvFUtETd9cwyQfH8y8g",
  "key1": "5snkBmTszbW133RtAXUTGPZCX8TjghkyzU8jRBbQzj4XCnb2ipMwuTzvgBUEfVc4Z62Pd1TQPnSYdTwXEbS3C4qa",
  "key2": "4SVgcAZnDghwKPCUJY5EGJVjukQpnGscmpQsq57eEjZRyp3Ppp94UoH6drZF4JZdFhV161Ub3Z5YG5J9uVXR49Z8",
  "key3": "5g2mM6nPYXhDftCAsw6Dh2p71pKjG8GYMDuQgiUsoDcbBF7sFnyToxUSrv44DaZD4MyXJdziCP6ZRpgpR2jQAqMw",
  "key4": "4C2XEAuX9bP75xPCQSJFshqDrUUfpSLLUuhnxSDU9tJYCGkRHpUPLJ13sTP162uSXucGFbXdAbX3JVyZbUf7ZFc1",
  "key5": "4dV62HtDQ24nwnpsWTdUgzv3REtvJZW2VKkoUewucxSUkjBCdbwJSTZVACNm2ez2hGVuJWqdGrDjj32FZttEzFqH",
  "key6": "5upHYru7M7zcRbDwhjPhnouDU3S122XFkgPGUn2FrUGyi17Fj1XoJSWGJmMJ1S2sFQq7tVyfGXS1FJXQKXNEVjwF",
  "key7": "2aT6buw91xov8jU74RsGzKsxKbob1Pm3ZmwLWU86EWLT9AZ4X4J4MhrF9CzUFqx4wkHgVYywqsntRNQMbcRGR3tm",
  "key8": "37muim1ua1yB8gxVJjcrbt2YdsvrZj6AzWf1bghj2m7wdhokvUvaeMyb2pjkMyHGCq7PW4zcQrAwRkjbTrX1vQkh",
  "key9": "3tCSN31Fej6qBWo28ghCQUhF9P2PJy91MHp4kvCe6FNX4hAmLm7XKFbqZ6pU9UTWPtvXXBmLz16w9bSc2yv6JeiH",
  "key10": "2b1ityBZJ4Sr6Uf3xdDYFK7UfHHrD6Woer9wPZ9RUMHwtQVhNqDPSLFh2e36wTe3fgiWFKAMpkbWr18tBwFckVu",
  "key11": "2uoCLTv7dfXjXudmUk2o8oFUY6pXGWAgAkLU24p8aDvr6ss28TmpLidBu8uamtX4ndCcTyLXrdcjYbrh6dBf81tx",
  "key12": "4rjL4RBAbfXkyohFYV4jomNY4xzn5fduYYMY815y34w8kdT4JqDwVpBYQiAiFg3eAdmCDbR5Cr8SY4vyWq2i4SQ5",
  "key13": "CGjdyxs2XuibLqX3Gbmeks3DFkEV2jsSeVPgnVnyTo7Zdy8jkQ85nBQdfERtGh4btc8FsbQVziuF7PMvLWhL31s",
  "key14": "418qsHwAFUQ2pSHYw49kfLC86TRLAnsPerDQjNUmRXVSekfbY4NBc2TP3oXmSBH4q8DYN5JEvg4aukofGSakXty",
  "key15": "2h5SzdCMunyPN53rfZWgCC84bPSZYSnCHyiXv2kZvYKHiiFCPvFk6NjQeMvya7SnDRteNC6tRJMKhDVXqbK9AS1u",
  "key16": "3kBp3U8GJayWA6EJKLSZ3eeLHobkdkBDZPVMAeHngf52263VtiRoNo57mq67AwmoHRfVcNi6Hx7gqhYyqorZTjyb",
  "key17": "jNzZxNRhGnfY52qxxtLBUynj5Uk85W5oqx12QzYJvTEdD9rxTHJj45xqqQxDSq8nGJ8zz1mXqtcSBjaZNuy88Qj",
  "key18": "4mJhCwX8pxK4eaDr4DJew4bkFu1UEZVrC34DDk1emGXsB5J5J4zotePbMauZPtbQnM8vRGpChF1U9fXPGw6Dhh1q",
  "key19": "2SeAuN5qDzSbwTUmNqm7h9UtpeoceneDvjMyDqbiXxhUz6hrVANuwqcFUjjw8oPSMwzSF8jZ64NwgQqdacHKNzkD",
  "key20": "3QJVzT2ZN4Dx7AXEBExfda7c6Tf6mYBCpenScv5TxumyXDa3rbU7imBbJyQ1bj4FHVmQ6wohqG5XrH7eVMnN3vaW",
  "key21": "3nrVpG2GPLsTm231DjDuzVEFQojCc7soS2vebTa67Ajp9EdsnBtbPtbQG83nmPbqXE7Cd7A8iB17CoQ3GZzz9o9t",
  "key22": "5sft7yYS7EHyHso6j6SQdehHJNqAfJTWDN2bs5MZFhFcku8v2KLvhERv2PNAmbETvqdPuxeAJ3gLctNokjjycQGy",
  "key23": "7Qwv2NAEQQUcXgugpRjdVRbabSSjUuLEEeK9zvMD5sfiGytDjrjjuwU9m5TZ65V6SmGnbhGhyTVtL1VVH5xR61E",
  "key24": "3a1M2vHNFvwHiFWNDedG6WnEnHzEjpuLkf36GDVLrMirCKrWYNrUisZyXzLzms2dFCquCAHuafsta1qwF7EDcw66",
  "key25": "4HjtsCWY1rDodtiFq2X77mqbtN2iUVASr2KW3McnaJ7kzz3Moe3Yqh3TydqU5xreC7EagRiduxj8XBUknnEUvQn5",
  "key26": "4mXghkRfAfwmzH1Y4CpiQDrWuG8DSKPPJiQa5AZ8GoLDHiKJ5RxrJzYxtxYxKz8KogNna25fegEfcXv31H3Vvi7t",
  "key27": "f13JCuutMfj7b1VfBXCjQW7pBFroh3TuA9jzSGiXK9B9PBByoe5fa1KEGMsGuve3cbsHonyDF1Zjk7K4ayUJ1PR",
  "key28": "5YVHb9AEgKWbGkKbmi54Jcve56Zv4UW232T5sZwnPCUY4KpHxGhWJ2fJH19AjE4iDimqy98vXhdG4Kh6CbzTMyym",
  "key29": "e19Vfw3rro959KgKUNKVmYeWWxQdRxz58nqayUPfww3NDts9EFn7Jaw5GhDXJjd4VUTam1FAksGVe5uSD1tpQAr",
  "key30": "2x4X7MT64RxLGzXHMwWfdUdRW9vGtRLXsWjc3YMJgJgYfsGPLuDGVEWFQdX3768F9LQhbZEELYfXBJhW4YCa68h",
  "key31": "2DoUXmQA7MQXF6TpFRaUFYgSUWHH9EeoXsZka2DWa4Bhd6wpWK6QsWK4Xq1LwYXxA4PH8mJfnR3fBKQs7FwPsNAm",
  "key32": "2NbBLnNkcW9GioR9xs64wcNaxXVZ34yjYxiEQP4oAHm4ydZ4Cz9EbJuEtvFFZ99STCffkxewTL7eBmsyrsoY8F1W",
  "key33": "63uPUh9X3ps9NVWFBGk5L8dUKiX5pHywxthY2TBz7HKnKaumwEhL698r5xoT5M181pXEqDP42N6PUCQ3YZ7DLMn1",
  "key34": "3HrU2yC3ptNMXcz7G7SE1Tj2UXKCX2ApV2cw1hueoskQQRW8qkL1cWWvbP2QdNQnJ8JNGCrV5fvrk17CwALUZB5w",
  "key35": "2BgbHZxScsJrsY4Rwj4aXZ2Q6aTw9GqdmMPc6gaGW9SUJiFS4nvEHnr11sWLosMa8NsRnsmQuvVVQHfjCsKtaRsh",
  "key36": "5cNZKTbQwiuAH2PoTw7cq7tQYjD3gMYs6imEen1cUcNStFWVS1C9jxgUvoBf1qKytNteg8EFWAJG5yDW2XMwBC9k",
  "key37": "dkGer9ssxPe3WeamwHaUjgL1jiKeshdNqUDvU7DZcBrpL7DLhaPyf3TPwcjekDDh7yoqb9DWy5vonHgCMeXtJnB",
  "key38": "5pz2zGMkgX1QorGgBbxJ14dufCUgbzNtA6MUtmqx7V4H7atSm2YvNfyDGoRTFUdf2QJMGi7p9dy1JhnFP7FxeC4n",
  "key39": "BCrQ791HPb9Ze39zWbHry4hWuexXNv47TfvkvAUZoXMgWxpzAgoPa8PGEAuMqHeetAt2SPkTzLHoCXTGzBmRR1J",
  "key40": "4WC1PbaUUZ93LDTYEFqP4yYS9T27q7b7dMtPsFikQu4yoFKJQG1sLA19iKqpeyWmTA99v9AWSStLtk96ARaKFpBo",
  "key41": "4hBC9u7CzvAdGmyNYNFtyD1ccZYUBESF79bDk7MdGXpGqi94y4PdHVQnBXncw5YXviUsagAJVcy2xipk1EeaKiv1",
  "key42": "7aXHHnP1AjoosjHsijtyBCDJ8xTeETxnDeinH6SRZxPGc3p3ALtkmPrFkrHTGMBfg78suKnko6mgFvVdNStVRA3",
  "key43": "47AdvNWHW59TDteokfsnPV6XssUfNd2mX8VPWcPZK94FUvEz5YCcgFqSRnXHms6s9aLwjJHriP3PSjNWWieYxTyL",
  "key44": "3Vo5UVfcFEam4DXjXFXauh8jBzmL6gwLNFPNeFVipxV29KReX5wBgptyiHmTCq6fgtgmMyJRaTvAbLZnQrsMQqwx",
  "key45": "3saJyT1KyMEqMiyKj686BexFoUQMH25gg2vfDzVc3Vdhy5KW6rsRRT7VWPSE53NQCmwt1obh8ZeShtLuUv7JiyqN",
  "key46": "5yNxqgrjQRMAbFBxe3jhkEjKaug7d8ayb2Rmo9SapuWoB24nt8wmWy83CJpYJv6C16V3QHf5TD7ytEo45SZtqYMb"
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
