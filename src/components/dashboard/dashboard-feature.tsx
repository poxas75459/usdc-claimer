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
    "XfCSF4uHDwrkkoLdYzvVYmNqAcQqXiBZe7enFx4Snvp9BhmK7Y8jxDbrcaj6ZqMMA7xwQ37gvuCMU5zZVGha3qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AF88gwSeGFx7rXY5FEUHr5YKgfCrEDBw3hb1c3E8pBLGL6i9it2mdjGvjSFL9FqawXpjUY94yUFwjjAhZCQnusW",
  "key1": "2tZb1L8HA1KSjCWFnPEvJgCVf4bQ1GzehwP17KpXi3eGSWtXcinGZLNfHyvXGTSxyLuvXC2SzYdFdnNXRGmX4b7D",
  "key2": "3idCwJP6KBru6Z6pWAEUDUtCpHxAGEaeRLTk3XzbTDAnoomP25KFqpTc1Hrxe62tam2yQkZne8CttbBnd7iQ7vLT",
  "key3": "2zJzqgK9bLjYNSfWAFU6xtjf7yq8933FD5bQeeCTPP3p3gffGPtdbnzH8GoGSz8oKEaH7rbZcjRXsrJouS9wYuee",
  "key4": "3amh95yxBJQYteNXeHdihE7xiaYCj7UivxPZKE3osm1UhAuXB3qEYuGUyxzLwCfLgCMk7fytwRpdZiN1ez5JtAyf",
  "key5": "3XTN8svG1Yc4d8XdDJMUqLoWPAkXYoX8fn7dVM7pTd2fdRHi4CaxGLdyXPnPwZmQMrB1C7j4udk3eW8xnSw9xs2W",
  "key6": "5EEq8J4qNTcevXxb8Bo4NPmieHZBjHAMeQojmbsduMATb9MJnXQ72uyirqno2ADAHS3wyRJMZWVK1Xb4yLeTRwy6",
  "key7": "4p9SXjfcDaJZbQm6GimFR5aURqAvUXERQRKELGrYo8bNFwqLqoTRaCnNrr3rSymPceH6Dhx368EDzqAEMZg54HMH",
  "key8": "5epwhVqHvyLeBF4frC4yb9rfTNESMNZqoZH6LUNi5wPagWVkac74oWmwKtuqqbMRotiErZdepZd4Y29LpWmdywD3",
  "key9": "EaDEXHUhHaSb3Qt8An9ocBkZUaMujuEer1uKwEyPjcstxZD5QrUWiFi8dHZQXtoXkuYVZ5i7Cm3QDRWrDkcNZ12",
  "key10": "61AoMjvyAzebpxifZnioXQBfSdXpSo7y8VgG8D7Bu13dZAMv4UPW3f7t1WeYWrLFtRPXdcCLjCGU5xPem6uKkcK6",
  "key11": "5QCXc8wL3whBwou2Sciu3QL3NVTktqeGAHjnKUaHK73Ep1p2ZAC82mpJ1ik7TC6iZhgFQKK4SJbcAxRJCuwrzgAn",
  "key12": "4zyH2BFZZet5Gz8m7rgGgt3YrtDPeMuRAwXP3yMuMAoW2v7vo8EU2M3orRapEqwzrNzLz2e5HPBUNrL7dTTq4gPm",
  "key13": "4dFqrN47TCQoxc3Qa8zg7Z5DjG9hLqwCLMFBpuNWFpV5uSRx3Jzv2V1SAySNTRoYPywrSGZ7SUE62i5r5tsQGtsC",
  "key14": "d4VDReeYmF4TKnt77sN4J16e5wgif7gCs1yJ2Bu2hPfTCifDezVQMHTWhhFY2mibFbyev9JU97mTYJPUTWNHL7x",
  "key15": "uyp4gQCbAngzFq2UWkbvdosfUNJ2Y13XjweG9anjXkCaBVWoppFAUhq81e1u9bhAduNDkaCWYVfW2BvFFeJAgAT",
  "key16": "5h7795n4Nc1i43DACPTGWCeYjaKyK59tvfrLxhCs54rnRoQNqYdPAdQs13abfh91nL6dPPNJaa9LTTwzrnqBHt7T",
  "key17": "532o1k6yEULp8BUsSrAbhiDCSHdNS73Q3x7UUyRrAC3uNHpMXy6dhGx79C1YsqrJd3y3DPSNLzkRk4mwLgpmQHk2",
  "key18": "62VeD9Jn92xrhXT4jpTRtqbfds81tqNe2yvoz4cVESbMjBp2gtw6A2XDKPw3u1nXeypRqMoJuTFU2XFvjtYCmLgi",
  "key19": "28usoh7PgPWS1mNBTDGskUSPchJ57LNHcRcSFFAURuQac1xLz9pC5PbN64SRHcZsososeTiB8M7Yn2xjmGddMsps",
  "key20": "4gCaXcUrp1EHAbT1YXTzX4LYqepa3pPmLCq7CShLo7HUU9ThYDeuP53Sh9hqMeCBSAYQbTJCEwFtbnVXVL2xXMXk",
  "key21": "iSF2EV4v4EgVNPMncjLdHV394UCkH2NF67a9EptsRFWD5dWKkdnrjniBAjK111vMRhp9QVihSEYucE1pCzyRTT5",
  "key22": "4KBAC4iN6eE7gEgRtarF4VEZzHrZ1kdA8dY9V7tV2sBbVCT2hovPkrckDs948Xs4sw45GwYtiJrJUuQGWbXvnj51",
  "key23": "57NQoGaPpgtLjdxwrtf9d3qzgRDTT56zxrJHgr34sGTz41NfesRyyxjSaker6nVTb4mgRQRxY84JYxBpCaZU8Xu5",
  "key24": "67nECKCjKVKmWwk5gwpb2ZragjXAtxxqztB2WeA9G22jD1uQosqw6PMhjwhNgR1QbHy9RBPMfMvbHRZ5zLivj5X1",
  "key25": "2bhvnjZi7rjvPsToYRsHT55p2nEcA1stnKoY9ZjjEudw2oevfkod4MpPs2PxQaM6HTctS3h86QPbfHXbXbbNw6TQ",
  "key26": "BMv2RkDdwJa2BCoyBNkiygQdP8pSFfEUy7Grb6BdyJj1rdwcuNAZSSKAynJp3nzhvgUod8Ti8FjM8vgJoDxaUUC",
  "key27": "39UUD4BcJMtrcw6G5nDspCTfr41GieJyX4MN9Facd9SxCLQ7R8A4AEvUTE8h6AhzeYc3hkHRgtLnpka2obHfBUwX",
  "key28": "eTZs7MACyuHQJFusT7jzbQXosaPFY1qTxQCyTT1Li2FJH66XkJDCy9sgVaeyXPLf9CCzEZoySU5GzYFnjpjbutX",
  "key29": "4ZXGZVpvZf6ZfqMjoJ9ZkVXNaFxHe4Joj2A9ZFe4PQjZbdhxRNgzwdaeHqj5pwE4dVW7Vcyv6E1y6hXWWiVdLtVw",
  "key30": "3A8cm4ZRVNFcZRkLNzAJHskq7XDmT912jNT5h121KJn56s1sVtJR3BTYiH4JspYVAFuigG4VRCK2yNHfxUzuWuUq",
  "key31": "4uUndQrWYeCN6SCCNmaWgahtCkQCBwy3o6GfZN8kKBRgiG3BFywXgpPAx8pLANhhPFq2d93eydJwjWusoH211jCC",
  "key32": "5G8xD7M3oaZV7ofxUNdQVkT6JQUCBrifJZriTa5NjUFSfo1uaPgLiHuhsbxkqLaBZQixN6dfrDv6AuqFEJWc4zPr",
  "key33": "4eC3bamYXbb5yPE9Jja4QrSbdS8WpN3qNAwXFuBWaKchEQo3ZBhCooyrJoGLv2Xc4vT9bvd7KES2y5jqYZTGsgat",
  "key34": "3B1epZXUyWsitskTS883pynz19NyzZVRx3TpB9wm7wuQRgMAJPuZN2bgykLwhitvDhMoJfz5rP2DS8aMMrtDikTG",
  "key35": "3WMFJHqQ9rNk6AaVQNhKxjxD1JRpBCN1yp11E7wVM7UMiuTmnDvHCuMVBcJv5ayQHaPDgS7Gfh1x5EULmY4ffD5u",
  "key36": "44wKzWKS9gfB737RpAaWqX2GG7jJ4o36WcWNzHGLBLT3KyNy7m5JrWrgxWuF4ymjYSsT6zYF1dDsEbXKCEVgHEMi",
  "key37": "3YwBZA4TM7AfoQ35KqnbqX7tJkbJUtRJrzhWcgfznLoqK64jhpLBZu2QixKpA4Z4arPXaxbEk4ndwJayX2z1KDnc"
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
