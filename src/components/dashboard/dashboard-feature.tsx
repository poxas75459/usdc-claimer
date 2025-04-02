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
    "p9chMGSR71Fy7AHf2QfxU5AsJWfH9Ys8f1aY6A9s85ZD97iQF1Ca3178Z4xgneSWLerYCAzBRSzstbVSMhy5QH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AX1kjmMWmnC9azzGWctx1nVZd8vWRqHqHqQ3D8PWRV4P74qPqa2axbCB8HgV33WcPFQem4jewoGcVAnVroy29zx",
  "key1": "3mVuv6P6ioiFdZGqpGEjfKEvEdrmaQYCxmArQjTB4K6cWjsfV9VcsUb6698o5Nm54XR6GnW15XsYFAkG2hz4k5f9",
  "key2": "5aS7n41eDtX7YHsivzDRWcdKd2Q2a8kt74JJSXFoQsUPx1YZK4ikEXRnRgJ8ekw4XjZ8zSx6VpVv424zMy8eAJ5S",
  "key3": "54DJWZ4i1Hm4ZXB1F9UDJR3t1y4uT8MEboixc8zu5FJAvttTndkMwnQC3q4eivDJxvr6gxDUNCTXDvf7CcWb8UP6",
  "key4": "66AKrWX9MYib6KJXYmMVH17LgJUysQtZctdYs341wAZPgH6jmZZ4kXHX69NGTwjG7eAYWiiLY9WRBXJqv4v6dLVb",
  "key5": "4Kwtrfn61BvqReVge4v5UqFXeJMu69Ar5f6G3hsqg8YJYBEgAbZNTzeFo7P6ioqcuHg79p3dN1KHBpFn8vEC7dy7",
  "key6": "2NJW5XrSeL8Y9kpupcPYNLqPF8hNKXvSc94MjE9v6qUTLepMET7LuBe8JVkyCdiRQowEFTpvhvUVRN7cDpZ9pa3t",
  "key7": "2LEMjvYiadevYiVSh3SXyTFQkRkxAAFL4Jjx7ezg1fgTRz1j1ogo7a61THfgKzquuTcLgZdA27drYzrYzScXfCnA",
  "key8": "241GX2psrg2Fv8JJY5LuteGJxSBLjLhQdwX3qunvhWWwiBzpYhniEfrANv136avhNacn2VKmRBdANYbXXRgtwc58",
  "key9": "4QDcki8sFvnXert6BCPtbmYGQXmTvKiKcPvtUaKKH8ZsSyWHywcbNdeduJvAwbAXHjVNiB3XHBynWAM8p38wgh2L",
  "key10": "vcpmZf2mSVKPSxu1UZ7isj5JBbeBS2Y8cSaugKSTGD6brKD4DZbGYAfAsuMWxGy3ud6vtQ863gUowJUiBQUypkj",
  "key11": "5u9NUSZQ1W9YD49apmWFoG1M8tM4qpu7rozYAcAS2fskk5FyijQHX3CCoCsbrJUk9iEpExurfTky7MLW9S6zi4QK",
  "key12": "4evFnRbn6KWDejuK8jJ4B536Z72eo7c5LfYs69qieogJ5vzgeAWGuDsjknitjDFxFU34CWGV2oZipkadnev4J6Ps",
  "key13": "542QCKGLpu8F71hH1AzAsnyMnBkaKPtbuNkKhWNWdLBvQVwHmYdvCLBcBoFi1CLaLSiStqM1MtbTYwFLFeJqkxJP",
  "key14": "4ENArcJSLrX2rVhoi5JTmLH5Nu9MzTyBk3sntVTQSxR6XujfXTBjKxLedeqCBDS6D93itX5yMANHFgEnGs8sfPFj",
  "key15": "59Yu7y2sJ3kEwmRrVWpYwp51qKxUzsVp2paER4xEynPUpXVvxjf8E3t65jnsE1x5kgCiQs6dZEihXgYSoJJ9ponN",
  "key16": "38uKnDfpPSkMF1YfMLYSEzkSGPWDSMGEL43w1X8brbNzVHasy9zUuMBniXVy89G4i5sG7QdUzHVWrB3TfKvQPCU6",
  "key17": "3jZ3BcsYxEGYR9bNPmvS1bFCak1ypWdfvQ1BLCpHwTHFathaWLpEDJ6p9BJUjCgeEqJv6BgvUEDXSJEBfa3aMQFP",
  "key18": "3QRJU3xarqWnuP56xEVsq9M94RnG34xkCeW37jka4m4SUFBccheMcnitzKbUeG6g2CHw5C8AMM3r5cuyPpWdhqDC",
  "key19": "oy6LqnHMqKLVsYY9qWxjcrZBmJBu6K82zBtUDJ5nXHwiTRa6t9CYZGAkQaWGxyTHW8YesrLZJm5WCbre5GNRJBv",
  "key20": "CfiNPHPd97speGVZLYGsBs5DNVrX7EhKjb2YXYrGuiUhNAkWUZd54fYFsmsfxuCQLcfWE43xLop39SqDm7cJ7ao",
  "key21": "4M85vXofJ6HLAjrAxh7WxNLjJV9zCugKkYXZ8MDK6PVuBxZedFxCP3GPvqmhfH2bWkJrc8YL8L9GFETmSusfuWQN",
  "key22": "9jbunAZ3tPsC9B7k8KjXrv2EfbNZqKnUp6jNvUBc4g8SiYUr6CvJTuRWVjiJ4Goq5kCC3TjGQz4QzywwUKjJNMW",
  "key23": "2A2qnokNDiE37ALwxttdLYngaSX3MmrubnS7BiJYPXrwZcywfYcVjRFRR3n1gHRfWvit9yUCbdHfsfWah9vcdpKU",
  "key24": "3oGGtrdjs5BcZM42dChDTrsrVeZDvQcjHfPKfigFQgiVDiGGesUYHV4WvnWwhWtePHwjdMCheRxkX9dpE2oZ5vmx",
  "key25": "5oadWoA9N6mhxejKawE4LUTYo5WpDf6BdennLTUF3dMMQ8eGRoywBqnwibRiwFVjZ7JWAUqUqPvpeuaFDbnqgQHU",
  "key26": "5yFnGSJxsN34s56ouffv5399JSWzTmP5vQBkgWGTEdK7UTLViVMrH6HYyk4Z4Zo8eR7LJn8bEm4D9VWategaxU3c",
  "key27": "5zqgAEsfzmuJ1AERjQxycjDcXqwjHXdPgYTZbnBjroAqfs7ac22gqvvL5pi3fGeyQciPUy1A4hSxnMPQ3HoqH9Rj",
  "key28": "5xMBb9i8nxJLaNDqauWLb8WsMWrC9vtUfbk7BScKgWbmfSP9MBPhNgkxwWzv2W6S5VVvq4oYL5gDXNr4RWnYNuas",
  "key29": "556A4JQ9ZdSAKGZJSdEw42JdHqv21Zsrn6yJWBNDsJoJUCEukrWfQkx91BkSjGAiuwb24yMf7Zu3LeWX2pCQWxwA",
  "key30": "LgBsbYt8Y3XmrtbvzbqNFXcnW8twdrvjpTihV3g7Htk3ZyvDU9S5iBUUevaWAZsidskXMKEFJAkMBc8krooNtx3",
  "key31": "2pn2UZoHGCVyjMVMEkBFHyikU46rguXns9FyoceHtMtH1o31sYVGfRXKtXGaFspDoME3sd9sBYwxbiUwFHbi49br",
  "key32": "G956u8PTfMWrwk9Fhna8bu6GSVtYKZe6x1u46knMjw99SVNM7P2fQPQ4QmUFMhbcdcWUbwYW6dHa4SekZJ1smUp",
  "key33": "5G6M2a8DxbnPEkaY2uQNWyNiaUZrniqS596mUfeMfF6s173jPWdvaV5X63fKaEVmWoXQnifv4cArcnGmSRRpRAmT",
  "key34": "4NGMKid4oALru4jxpya2GSecJANpKw5VeSs9HaKJKhqunjFFhvJRrrwVjwtn8YiBipEcUZozSY5YfERVp1i9hhe5",
  "key35": "2W8tRTxbX6sxYvTm1MwCDve2NVaf4eFp7HkTtjSsqGiZ9CupxgMAtbLRRKYPMJjxBotZBszESrHckJJyk8KEKtwV",
  "key36": "atA2m7z19YbX8a9f7mdSdXygRUahywuvGU8Y6qgyk8kcu3B6bsDmVx1hdLnb5NtTsmaH29FP5rMaASMZcESMsqn",
  "key37": "46uSNxCjZGxejmHxp9YNzPeE62EpJ2ywG8v7Bs71Q6DdRwr6ju6MHpiQu6LPFkS6jXj5atKwTU4XQStLDsSCtAL5",
  "key38": "hGo5AxvgswgxUQBThZmNg7vFiAsz1zaEP5iwvBq78zhRXYYCJf36h3mnc45ZCqZVYh2VwLC6bgfKtthChskAXJU",
  "key39": "5kGFyA2friwV2qC7JFaHVKXK4AHg7c3diLKYG2mxfg6rgtnrVLbqaQivjCR5pvob17CqvM8xydimxFR6BVC841r6",
  "key40": "3R1APjLRKQhkmECszYRWDsV7TEpWveAfuZAR9TY8w27B8j1SjZtiQ6qLeFDFxMtd7PQpBe58ZRtBCoWYTetWTzcM",
  "key41": "2GVn6LsmapdD9KbkGi8BVit9mzT8DFYogeDEvgqpCtPBjGk6qfPGdP51vPMUJeyjgcHwUaB7AR4rgxyfefv9Cs19",
  "key42": "3UX4FtgTqAxAxZFKe3bEjqiwty45m6526iYTk8dMjk5g4yVz3Rovh55aX2Cg4RuN62nFJ2n42YJUGxSRectHsaoB",
  "key43": "5AydxZTkU1rk23hSxQjEgVyELeQTAnq7R9gP5ArA4wtsYSpU9fJiQwiG3FopgvFRQ84SEH8DnsNBNaPrCYBQ1ixj",
  "key44": "3o9iePBSS3R9pB3BoAHinjt8mj71UFYzfkhUUm7HFWMEMmBiq8sbpUoTFbD73rZCKUhwAVRuba21jzyu1t18G6TS",
  "key45": "2wbUpdavNnvXUTzJZ4jYR3VqjwXzCpQZ4RTNMFYU8fscMRNjoJPrGHEcEZPmCAG8Utbt1oM66HDL22GgYiHDqAaV",
  "key46": "35tTtQRhCyrARusrxEsmLAwtHnS3wM9FScHvzpRfSof85MHk4Ldj6SWDYRwks1qn51azxmUEZSZWLzMxgWQAMdej",
  "key47": "3o1xpvawa2Jbg1RwUduWE5ot8vQGgTpuvKrMJQjRLGQJYQoaKFgLEmxAPMNeDtax8gPyhH5cYdqWm22fk7aZL7Y1"
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
