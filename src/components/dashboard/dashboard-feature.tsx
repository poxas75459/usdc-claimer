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
    "QJ2ZE1ac3iaadEndRTR3seUKmtQ4ogqAnRJF6z8EAhHPe3dnBq61DoB3dWFKS1YsDx5c5JCWcfy3EY94TsJs1Q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rk6wRCc2AcfMkWvvVpU9WsPDgei6Y9CoD61tDaLyuBYNTHUyC715t1wDSFoN69KjBaeK2dyLGD7bMWKzybCEKuq",
  "key1": "3mmqvvWd4pYSj9ZuoxQy5V1gTFCmECpxr5EGHtmYq5c2PUDsQER1ygyFazW2yZjwnK1aVA6V1U2FLdDYHFsXp94X",
  "key2": "4eaWkGCdeQuWauodh9C2F3GeXxUAfuUnvB6vXXeNf8n2hQXCVWHnUYghzB7JnJ6srfHvQLxbHvRqMGFsGBk5jRjb",
  "key3": "52zawrexfpbrerZgsFLLBRYYCwJAVeTec4HZFaQgedJPiE6mvKXhbgL6WamocFXuNSpVp1s5DVS11btCPm4Xk394",
  "key4": "pE3EjjwM4Tt9XabCTsXW8JUGrd3srzJvErT6SgKUgD7Bcxx8pLwQsjREnTxqUBH2d9RLKaxCkjQ7xB6FGBtsRE1",
  "key5": "5UNQmgprdY7uakfw1qQ5gm9J5pWKKPnY5dAHHD3MPJK5iJpge9vYZQDrQsm9hMG6ind8EqgyDwWuZ4F7dts4tKX6",
  "key6": "3Q8enqMZSabi9hJZbAjXKgtPxV81S2qYXQgeBdC1DeYLsP5Av2bJ4oxKarXGTwsRmgikkHjp7GJ5mk2EuJxsFgwT",
  "key7": "3U6VfJkvo7upVf3j7FLvyRdtJQZ5Jo2rBdAaGU6PgJCvV95heHbqJtsZxFhJAGe9q6P1eRzubqCdUneoGEAKJn8",
  "key8": "2g3iFPxiw3cHDyu7pBqXBu64U5Ln75jVuQrAog78d4waKm1TehNnQiuAdGTXTiYknxAS2c3kSk9eGQzWmCPJFCNq",
  "key9": "4Mqv5Z79PH5afCp7TYJo6rLSKJqoHAWV13m3HYwTP7xGBmdtbZbK5Gnx8DbTq9ESH695awjkg1WjRMUe82i7MbSr",
  "key10": "3NpwRcD7P3Nq81Hfb2J72NSpxy8rS1ZXU1n86AEVHGHNJA1doGAVMbdiyLWs97cxX6e7bxN2yP5mmB5GUoP6CL9V",
  "key11": "3E42zNPdrVguhXHk7kYpovn4txbft1VdwexKaSeVhp711YXMyaUj7NCxgGtdgrLV1SfRcu5SSxhbdS1ie7pyLsqN",
  "key12": "5VikHjjiBEBWV8u6PzXyxT135zb2L7nFpgGqtiNTot8Ri7nAsTdzG6ARN5NjZojxzaoinRdUzEtoczhbWS2EE52S",
  "key13": "2G8cXmn9diqBdjdtNwN5VCUi6fVsNEmxRPTfEtNapABMe4XVoG7bZvjKv7ueDGuSozTUoeoVekAa3jr8xZmJsx5e",
  "key14": "49J4b2YUgv1exb84thjjniP6XHtBbJSwHCB1WpNnoo9UM4dpGqdLr1eCUWM5GV5AkWAk2gMguUUJS7QsRPdeesy9",
  "key15": "4zSSzdPuBLi5KJLwERAjCQEeL8aMoaj2g7hgHSMF1iBucjdp48PPgcEFTNQtFV6aeZvHSybhaZPxRtXSCd5rC93X",
  "key16": "57CWM1VCU9kWGDPazsPceQ4SvFBf4aCGpb9udod1KWfLJ4oZiAUdiLTVb5ZEPC2BdJ5gMhCLAVYYyYP6b42JudkM",
  "key17": "5p7RRsjxbNzZS7j3hdcKhHyuwefyV5kEF3ywRekUojBsXy8HRtNAVTcdTWW3uF7hkk3QfXN5oh4kds3TJ6esZKZt",
  "key18": "yp6vyyigiZHjSDpMgXjefNZbnkxsYjQ2QwNkQjF8pffppu1ESCV5kXdJWASvvZH5HSewN2VzPUFypEnLHPctUFS",
  "key19": "4LxMJKp9T9XY6J8JCR7ALjvM8gjGnKG6YMRpRp1zu7Q8LAfQTYpdBM4sFXNN6e6TLnWMjR9tQZ7B1fvFzYfHaTDA",
  "key20": "2fDfYy8Fy1SWuZrnffVFx3m7CpFNYDjwDwAoPc2YQX4va7Hm6Ua1t4R285FajEH1fwqHVDtsGZHZuXw26XFB8h8w",
  "key21": "51V3rr1Stnek4yNjqB5NkEuyzN1jQbgZ6nqnTo4P5UavSkSmg7cBsDVZzdb9kEE7dYRSMhCaMjSK1JKm5fZ1kWaV",
  "key22": "2awh4uLwpWwLXF4NssK5RyMcehhcT8q2WDvk1W1uvtcXANhJKumdhzeKDAZCcZ3VrbvqrY5WLBQ8kTLeBa92wRtx",
  "key23": "36Yi3SJEMbehk4NbHFvpXzAp9ZF6Q1a3fQYP8qN1XLab1oFwrTWbAeuERiPfcdngzUKEpLqi1PP7iEuyYAWuXVPN",
  "key24": "66Y2XAqPnjfv347a1jQpG2zP6zg73bgftHHctug5ht2EvZF36fHh6yq42KEPpk5cUvSfmZjpXGA9coUnJw3N99wd",
  "key25": "4BHcjoL4JFCbHKMpviaL4VsDLRzLNuXWwPMwQoHzd39gwbvro3u9MTkmkJuWJTUzo2CmcLPKPrk6At3Wtem2pLw5",
  "key26": "dDsFEoiWscGprFSAKqAEifUCVtxaUeGcDbme5T3Z5f2xS7hv2DrB4tqk62y1Pm9HiyUeGLh7JLat37Qm5X2tVEZ",
  "key27": "2mgxo5iH1jrnjfDxhXCmMm4f3b3ZAVzdUxhgt5oUgXhEVWViph3cQF349NoE5JrzmikQ4LVpevUgX1ZV3eUr4kwi",
  "key28": "67MkDC8H6ZBfy5nmD2XUoUBiUwfdfXCWznKfYCc77d4A2YTEeG4wi59CKfP1k1PTgksgYBGz91NMSGuxJ9SmTkXJ",
  "key29": "YLzQ2yr753kZXYqG7XMmWuq5SbkdQFBgTHHgs2e9KjQ3WXXRJW45vqoKni2em2M45JHsuwr9nWTDJpA8y474euN",
  "key30": "5ibyRYnD75pmnn4pYDbaZ9Y1fcKQpbLBHKpBKe8NQpaCKpufPB8VNXsExKdDVECNKvBMn3BB3F2GRBnJZZ3G81j8",
  "key31": "JBAjbdq2vRhGohvGGnHjtZwT6sDvkjaqS3a4vUyLpDYno3qPgVABtCk6Lf12n1cJKJAv81mxxkYiNfWruaZXtjo",
  "key32": "35AR1aw4tTwkUbPLtLcGF3RKaVHF4L8S1JBf6wSPB9CyXPBFk5ZgoiYM7bmKveuupX1imYphUqgFmyUmKWLQqv9Z",
  "key33": "JmUVeCLDELzPoQLPAz64U5YegkqsZ631Ke7m6mrFgvHKyg8zYwLkBtBkXufL14JawFecWrYDX5Yj7LQ4kQLxdEx"
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
