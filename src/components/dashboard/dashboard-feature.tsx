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
    "5nNbhAcLomZmqCk64G2DANsAwh7dvieSRm5MqwxgiNvojNgSKwWViMpoZZsn7QM1Z8RoL5huN6Ajm8CRj5QvBp1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCRWZeEeLznsciPzdJVHdGouPzRHTb53FCrGbAuXUGg8kHnrp9nPN9BhHhHdR2AFx1D3VxnVsLSc3XGajDg61GM",
  "key1": "4sxCjTKYbAspiZryhnwqKVUquwsm6qS5kckGZQWRKe3cPrvua2fA6SfLUqr214MNnQe1VhB8UqoQiRVrAdsdTQhP",
  "key2": "3DmcVGCq5Ldityi1CKGWV8z63p2B8FxEo1LCubnzVoHRcvZNhCPoQQdtx6BbGuw3aYK4HKFSJg4akciTVjWXENTS",
  "key3": "2FouEjsEDbMNV8Eqx6pn4CTTXzFUpgt6io45sbg5KAjR342yH7aXRYiZsKgwYU9tNWtoymMhFascphSAGXSJp1gF",
  "key4": "21JUNmGM93Z2aqNMfmmnHpA3ZV3EMDdDvpwd8wf7hggncnR2SN7h11vRMnp9LZddczAwtmscD8DBnRqN2Au2PMKB",
  "key5": "5Re9cEjm7PUTsD9UP4KQTSus4aMDSHHXoqqNfsBgQNqLLtikiYCW3uZpY1EYZDcSMR1Z8K59LdhK56eHvRVPpYne",
  "key6": "4rEKJtARVsMSaYpuvsDWaKGJD8fQjFvbndV1gYJCWqFvCofCzegdB8mdAwgF3XdpA3jtNnGWas4KeWex7ZjfBxzE",
  "key7": "4ezny8RhUxASjbEAsiLX223fCgvMUTeDf1U1fNBnR8ULfkGM8UXDXA2QfyLenH2JQWd3SFH2zgh1GkUEkDjPtKBg",
  "key8": "1KkDbVZojGEosRtXLG92mwyaCZCJWijkfbE9kw7TGUUti3N5i4MBWiSKMYdzzJZnXkLE8tVH1gjsEdXbeFor2sE",
  "key9": "2xFdL8DA7hQ9W3cG6yPqdvDHmu6b2R4cQ2vhoTvPtKTJqEfmwj5QuLBEQQzY2G5Q6BXLi9nsE7GJZDPaUpTQABx7",
  "key10": "3inLep3hrHgap8r7aWidKRSACiG86c9fqXBYGPWssAsYHM5djxcPyDtSm7QZTa8vbyWXCa6E6Cr5Cvtq1mjquNsR",
  "key11": "aJP4yMZb2v5p9mwgNoxBh9xhx8nGpKQ6VKvDtiS3aVWtWK9dTVJdecVEeTFTh46VaKyBHscfh7feZcUderxLWi2",
  "key12": "5WHg1mkPPt6aDdZDoN81jBfoY6ZYtEaoaJQozoqAp8EmXgkC9iK87B3WhLDUUM5xVJu3RQn59h5M6pK7sjpkFczk",
  "key13": "5dh8wqiMEjYVGGJiD69VD9roZFGG8jHw8rGWXsT3tJLUHGcC1o7ZZSh7uUtUBYua5asUEWeEbfYoCsWVucPkKEsb",
  "key14": "5vN6GWRjeERDeQiH6gfuoU4wRE24thpWtDsH5L5LUGotLPGaH5UEzpzpojFqVThGpdrJ4BnqLrCzgjixFsmTZZn7",
  "key15": "raiGh8hCjTmWvfKYfUztxrAYhQuQ7zrjFyeKQY5XRm9rj8pBhyXLi4WgEhbx3KUfFnswkpBSgbdXEykEqHEK7jS",
  "key16": "3adN3gat18qdpEWYXbH2PCcrvjFhC2sGbY5Aafv9WqttGt8hbunGNQoxPCs9mQuyPu6iJFNBwd2MLRQnVMjQByfq",
  "key17": "37SNw4KeYt4T1wuQdHSGGMzXRnKXuWP1tVLX9LY42mU4iWBXHkhQnwrvZ7XWMG5w9fJLSU4GBzLfiNr4jgkiPFe2",
  "key18": "4HenWgYAPM2okJSReBCr4gyziYc44Qoppy9N3GLXjs5BNFSawA6NRnEBRjmTYMf7CuzB5dMiJgyjiwteAooHDRB2",
  "key19": "2ckwXqJSCYrj3kgWFSakefqgBeDcW1haQzsFydWZvGhCQHenSxCCwLN7LqayEepPV763ENyDETaf5NstAjebSC3Z",
  "key20": "4dUjsKnmSsSMXNwA9R8WqeSDq7WaqX6zV66u6CxZ5YuvzDvxGRTisxqnJJqdEbkwD9xJNB8RPj2VsUSH8XJRm78X",
  "key21": "42xFbvoCWNoM8fhpNKwvab7zk22z9ZXy5iBdQZBvwHSFLDCFEacqGgA3nw8ztDK2zqWSZDnj4tNoTmzAWpjrNMK",
  "key22": "TCrhBecwev7QfjUFs8wtchHDZYmWahbSGMwZjVRCUfm82maruRgKpuPDUYqWULLf4yidom76AvMnxSHJCukXgW8",
  "key23": "2gfgSJsMANF6gZiYPHgPx31dvsE4tRdCCWXGRKTrwstTFwcWthfPUQK3Ns9q4hyozsvyzhhW5oZWUn6ZCFngPWw7",
  "key24": "5Vh3ofyYHfiSDVfz4RdjgC5SbZ3GwpzNxVNRsjRUfMYxVbTYGMwRaPxCJCXWkiM312EQNGrX1wDSUWf1cDZi62pa",
  "key25": "4HCszgUpVySY7HDcMUFwzS3WGZvnXT4vg7uS5tPQWhz8v8UKuDnY7uTh382ZW5q7ntEuh4ncSbzHjKZQpf6DhfBY",
  "key26": "5eZ682Tf6cBPq13EyAcEewTGgh1h7W6NRhZNz3MCXnAjre1eMBSU7Y2Pv9Ttv3usSHYpRGoi2hA2rUWNbtpVKMHs",
  "key27": "5h1Q21c73QTBEorVpq92dibVgV7uPrVBf9jv6f2zccN5PVqkVYBmwo24xXZxHw7YhYPtcBy22TS5tfXxmfRhsTQQ",
  "key28": "62pUkFUZnexsEg33F5Tcaf3HTp4eWsMQBpYLt9KH8dsrtpCuwg2kN9o3afJiw1ZNHpWWpKHKHjCTxo99AWvFTwNb",
  "key29": "uAFoHuaSZGThRmwAn4qpon5f89wu1Uy36s8B6Mv9wRxaR36AZR3rEkQqXhYfgcAABV3ZFQ4gdLkLHfxFmwk1mnZ"
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
