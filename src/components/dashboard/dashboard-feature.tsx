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
    "4f17zqj6U7mYnLCyJx7q5ZAVZzoY3MGnnAjXEFj1FKd2C6KoL9QFhGzjAdk5yAGKudmhaSQNSbTJ2WPZRZoyztMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UP6dvtXspsuZdF5kuuLumMuU2T2GPdijgfk5TJgbCJZMK8Tiz3fqo4vsTqZqt2gcYJNfkmzf2AKYqJ7BPLoU54V",
  "key1": "4mj5vJXnQxFnUpxw9w1bDdZUaoN6HaiSfovtFXNnj4jHCrMjP9BVeBDjUnFhK2Sw3d5bKuqTmMvyaP5VY9RDhasZ",
  "key2": "4YGSAEVM8eYZ6mN9yvThymWBgRVebnBXYGdPdZVbuAqDF5bQWv4t7E8kM5cUnHrsYR9QQEzXME3PtVa6tUV3iHf8",
  "key3": "58RGd8UqhFn73vHP7f1NWJrWpahJosNm2yEUmNaV4uRzH3XzYtQ5vvMrdBejpLoioacWoFJd9tEJBtM89j1wxPvo",
  "key4": "Ax3sW7mJemxKDrqigytjoKrBFaf1vJtLCZwDubX2EPj4KVSrKgVqMcXnGe1dck3Z6sCXxMD6XKZt4qd47AvVcvS",
  "key5": "5Joy8Y3JzydhfV3Gh5UCtJbHwsTyZuZAZBbuJMEyViNcffpvafYAhm1Wx55bRkePtdpTJb9cR2AhqepUhMpUHHCq",
  "key6": "5SjCk3jN4ppezRiisCsPSPKiQj4L5dJrQhRr4pCz4NToW8Ct14Nq8suzFe4KBP64eH57VNGaEkgxTfWqMtTSPTEj",
  "key7": "VGgAS8pkGskPDTBEpVQ35DUnuvp6jEC7Ju4x2p68h1rn7DBJ9mNxD8RhEYRGvzKE5etiKCwF16QqKyCq3MfBXTy",
  "key8": "2x4GpnPaPZqsJFhqTxk2ejhDaAJ4YbdqFoM8TzKRC9DG5ka5aRAQv8DTnifXpEHLQ1LX3oeLWz8tfMGo5piDDPRE",
  "key9": "3C6Nj2ZabCst6aaydmHhiEYyEGQfCzaMCshs16tqB6uD2QAimt6VveECWDCtrWc7WiENJRV1ZtMXrW83kbN1uYPg",
  "key10": "8aNaYP5un2PrF5Gz6SXEQPrzbkRgr3wF6c8MAX51DeAUdyAesu6Rn64TTr1VCPQA1iRhumkNPKsX7XjfB3dMdin",
  "key11": "53RvQiCC6ka5z8e6x3UfbJLMwQ5JU7z9nZfTVfFDGL2jYJQTnebNhzFx7yhtbPjjPFismJ1DciUCGmYsb8JDHqQa",
  "key12": "PaT4cpcN8tXyfxy87LCFT27x6j5jEiKCE8LRL1abJgZ2UyC8NkAdtaXrpgV6Za5XpUhB5enzL2QMEiAdYVP87h7",
  "key13": "XnnZPUpsk8ToLcpYwJvJdsFBW4gLZQEU26qkmR9MkxL91qvSYLZU4PAisFsP4tsDcSMLqz7rKcRLekwnvXaryRb",
  "key14": "dS6LdrqFWQ5Y5ycsx3piN7YSosmxCt7MceuVk9rsmNi3fBCvhZ71ZuxPnSd8pdBhtzeHeW1NSdZ6L78oJh1QbE6",
  "key15": "4HuyBoVYH6ceaTbKzY1i1aYgwRuZdRPwy49RbmRSqx1bAobuJFBPaQGaEFjLeM27jAQFwJaRJq6kJofug4ar2Leu",
  "key16": "46JkhzMeidyeBke4BMym5ZepQnZAvEDvQ8L24Ss7yr5wF4ePYQQzhW1vNd2Vooj6oPBTaHXjrfBjkqTV4sfJaD3Z",
  "key17": "5sKazSMbjw9E3Cx2ZB78Mo4ijPvzhZukLKTziKB4XRzgbDGNX6UvgpoV21MgxvpveZM3YxuxzoaAmnZZaki6JHEp",
  "key18": "5R8UXZbhBrDBWHiBA4VUSDziDC5ua7Cn3ysjmnEYuQKyfZAjaVTwfmHaZNsmsXqQCnhJBkfVEG5uBj2k6Pi29u38",
  "key19": "EdY5HdALHqQ7b2nKQkvL4XmejL6aXwj5WQy7FgVpkHjQ9a2nDmZZ9Y2476d5qjNNcyU1jLfvd8dAx2gSfSQtaiJ",
  "key20": "Se81UJDAZYDFrhBN44joHK8qiVCqkDQxmYaVhjwFcdXtXWphtQXPP648tro4QVdHi8smhnaYngLsVdKKDkGKBWT",
  "key21": "3ZD98vxNULu3TYMWKYMFp184tTrfujcGEYFnbSQb66BG5CZjvEKhXwypoQaWjF2PGd43CTc7wqphRGioH6e8B3WC",
  "key22": "5JBWXkQbV38hAdeMULJSSk52DgHk8AHiFRqJdMygiDeGv6TgmySMczpEdFR4851gGpTiki3Hj6uzbVSVLhh1YDNV",
  "key23": "2QSrh8Qci43iiHoUWRkRcKUrzzLuMUKJkvQAt8Y2nHEa37PiFSZvpT5DspuoapAo4g85Hee8WBP2dPYwZuA94Sv7",
  "key24": "58JdBimdenQCSP4DTW4YYkTA2qNxAXCYkPRybmZKWnN2qcWRgmzBkLaRBfQhpRCuxSUWfmMFamjFtsuUTCLJt1BD",
  "key25": "ZWqjzCNzTyaGAJSvWndr3wUcPoDgTNECeWADxmKdENki4ZD8ZZQkkGzanBtziWSdLvi5doMr5jYY41bv9LoLyH1",
  "key26": "2TJ4XASVEvHYkjxdzGGTNePHVWrHhLekZbb46U7qNRpk21gCM5QqVyyHEKPZhTzxJ6z2gCKAZhFnZo2bNTqfrN5Q",
  "key27": "3YqwTxoY4n8FGdyERRtaGfk36GmQhJfcfAfUFNGEabxUhJisTBC6bL3xHZJqem4T2oh46xKar4gAXTWqTigNgAEq",
  "key28": "2kJ4qemUEs8UNJWcrBYtFP73QdWKZApsmnNrMyQdpJQ2TuN8Dvsk7DbfrW6t7QetN79A3EbAXUGRFwLZXGmrfTuH",
  "key29": "49eWtPry8qXRoGAhz4WmU9w9wHKaHv1fmD3KBJjLYWHRFwWA4jo7Fwf22Dht1d17kGUHavpxtDMV7ESogw7PNL63",
  "key30": "2hioUsYGbTskELMzhAGWz3nLRyeAY2R7AHP1mc5wqrWxmAo2Jm9akaHpL4LXQxWKHziZgYMNWo57rSfc2jo1KoTW",
  "key31": "1dSKVnBrmGEyaWgWVrWvUtoULfSvMumG4M1fj4xA276qhi6cURuPtG1yiE8K8pnUXQgAzkcNTJ76KkivP4bwWM2",
  "key32": "3nok6HBaW4cefCMkZpbYJgWthxrKdmViT2iZsGbiZrKTN595T4V5UeMszJkemGXnAqUYEkh2Xoo8Uku8qntGyMjn",
  "key33": "vj1AwJAjESdqEDgZTN273ACtYVFY6Y8GphsDrUcavkBPLykJv4ngy3JTx19HdEfhZKRFH1S1B6PLRbKwzQoJdem",
  "key34": "hNA3u3UuQcGhPyoHHwF3G5uUjFH7AQgYGP64paFnk2oZx8YYkPmJ3EHaEmGsrx4KCYoftTtN4TG4yDRGRrfxyaB",
  "key35": "3AWqQ4X3rBetLUBmGAysd6DTmrixydoPtSezgyX5UZGZvhtq4kpkLANFC3Uvt2SQZRBhmoxVadsVCT37Pn1657eZ",
  "key36": "PVRGWwi31XcqYEGgbLYZEP3N7Ka597Le8CbNPGqsfRtrGfpyzkmAQ7F93S38PLdHJK5FpDiB6mcUKh2BzXEUZ4o",
  "key37": "42NdwA259SkKp8FA6sXQ8X6BYhzyjVfU5fLFqoWZFWX6wv55q2qZ38ZfvW5kQBiEEgnsWRqcUUyfVMxoK3JeATyN",
  "key38": "3owymiTZavDc4vqjeNkEg1ko41tVW5hg96thsn1BXot7tBwPiWSvGCZako37s8nCxxmPwHLXKVkUqPYxp7SLPdMh",
  "key39": "LoRRPd6AnRNyQAnHxMwL1Ly588htwd7rkw8qcZ4tr8wUC7tGzpdozdS5w28YQM1vHJmyy9fxX3j88jdKRJpRG8y",
  "key40": "MZ5RsmwtAcRCPjA8yzadwmvgkm7D6CSM9hmfMVEDxDeDnJMV5Q6UfJ8oPoTjrd6dmAu2uTFmzvJpbz7d149BzBK",
  "key41": "5id964K6P1r4uFXw29NwKJkSg1VN32zmXFe5wdDoBQHaTu2vgHkAz1NHBejbSVB5GgR4gtLhvs5oe4Cvxo3DRJwW",
  "key42": "4DJR47ecrgLQxZNDg4TCWbQLdkpjdhj4MJER285mrxAGz4WsgLQsgai8WHWmfbmEnLsfE9Z8XNUXT5rFt1J1iD15",
  "key43": "3FKjpAz3noGBDJUvj1fP3EmYKPV9Guvxkiae8fXfq7hgVf1nnNXaMqPMifXEVDPJmm5KTY7gPwt8Ew8Pi56c6Dvi",
  "key44": "3MR3Jn6ogiqQAdeydZZghYpA1mo5ggGXTRh33UqvvJT6FyqL69qiX8agu7qxSxvavQ3RH1HuQLHcEyngmKLTA9NP",
  "key45": "5VLJLCBjFRTubx57btRFVzBqi3bx4BsHdMtKTfB47qgPEtLB7UnRUjEsXa3EnjhbA9zKFmawta7SmHaKDB2yf25q",
  "key46": "4YRgB5mrQq3derTZFWiztSGcS7MFdR8cneCCABa4nkFoLkV6fCRnTjEpTMK5abfsswztXqobdLPvz2wkCHNZkSPp",
  "key47": "4vTk4yyNTMD5etnSyDEKwiPtV9E1TJe9SAKdTebNh89B6WaG4UDdDEGEBSs8VqZGt9dLc75fu1Am2jRN1jmesbMk",
  "key48": "5b2YbTy5bEv7SeumLfqnWYzzm3gQ1k39rJRPukPqE7mwdG2TBpziF2Q9SJEQrjbdoeBsgYUdWEtexEMrneunhHWb"
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
