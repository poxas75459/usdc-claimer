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
    "2QyQvEaB6sPqXVsYFUyUJvXgVMXhUQ1UDpvgRM1kbUZuczf8ExB59BbFMzbnr7pXHu1m1aK9LDAQLosRJEWTB5Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVcCCchQCpxFVgyFheYgvV4fUtQUA2YrxYJvoX6L6f6fTQmHgyGQzQbHKQJYFejHeiz3L7nMSvXAVG3eYYyhRBw",
  "key1": "2z1w7he4DxHjWZrJb4QuSp5rongZb98GALgKaBan9qchgwLjjEtkN5691gY8ibnBmCiHNnLk1kfaWVbdcwmWfZ2h",
  "key2": "3xs27scXoj7MGoGbcdXHoDx2yUtTgLW9BSDtduK7jnF1DMTKEax5akPtdGka1M9p4WCpEvM8av5Avp2n4ZjfeG5p",
  "key3": "4KkmPFLifNNB9WHz8XrEHhdWuwCTPhqvMoGHxh9Xcznm2894zTxGCAm2s1r3vkDqUS5ELWJNsrDSQ5y1GkdtyZFg",
  "key4": "5SXnQ7GaV8oakeUxncqJ3w8SMhCtDn7rXawdayMdrFKzmoH9jRUrNBxmJQ2o5rg62Tenjsq1ePiHWyAayixq4jtV",
  "key5": "3JquV6PttBVuvDcbt7iuzumyskmuxXuRd8eP2utop6r75GeTtmvkPQ362b2CsvjMJD88vcai76MngtbRrQsYqpDX",
  "key6": "5b9fev9q7HtibvTgMMEKU9Kzgd3zFhB88cSiBAwUkKAmSpJM5ZQLvfY1qpR9ACEcwxa1dtonxMQEceT3N4GFq9ZR",
  "key7": "5XzgqHKhfN3qV4j1N4SD6Y1V2ePXtPyz9XGdhbEkHVa9A75hho9vQYRc9ooNeNx2ibyFbyzmJimdUknFS6NkrokZ",
  "key8": "47yeKp9XGwrVD3NTnAAGJX9nYSmp71j7suvmYHNjcU49HS3cr2EcGtb7D13FK9uhd5Tvyws78g9CLN7A4SvqM74t",
  "key9": "3bHhSMijwh1fDJdSxhjLhn6nbsCtJiU5jAD4kxbp9uFUX3NxY4Jc95zJhhRKvVHDDypyFFYSgxPRxDfqHgyDAiFe",
  "key10": "5Lhid8o7JRm8xhwSg5h9mP15byUsyeRmfdZ7kHhJWHYrpNpiRzRAm4yxZ5n4xdxn1gG7ppJr3RvCUjU2BVy5XXi6",
  "key11": "5SjQEnCUcqnBHjTSDY1hkVsQ4cUoUZDv1oMq3vPzjMoLes2KKRoHgCZR4QfAwVRXPsNvqv7yE6s6VV8vxv7Razzz",
  "key12": "5PJpqi9LiC7BUBJb8B2zuEgSFzzaYwm4Ub7TMLuxvRDRpuMohJHnCCGQscJe4DYxBHjGxKZwH2sVFopvagKg1EYW",
  "key13": "3gQHbHBBwjTeRQKachS53fbaq34HN4MLG5jWQGFBNz9KA2oYsVHE3rjDBowWRHPGgoQYiFUXn6VXc164uEDDms5o",
  "key14": "4Uz33oxgYSzjnFivmsWfvanC5A5FE9rGK8KdtUu3oR8g8Y9KPaKHmYKBKJGxE2eu2CKNM2E2rLeW1ibumaxyNeir",
  "key15": "3ovq7e31zugNHYNon1GrhnnGeyfE5e566uQ22hF5zT5bxRgEb6CK6e8np7xWhFDVFf7k55CkzNm5X7zQveM5TFk4",
  "key16": "2NJhA9Roes1w3qkk8mzR3jGaw7kq7nXqvarkc8uZKsA6pL9nQs2fcJvjLhCZo7iz8bGwva639GMoizBJNiVTkSFM",
  "key17": "KRSPPjg1Scgp2isjsTU6pNtjkJDVyCEgb8d7s1QVwDdA19LTuz6mNnm2AVZqR5GDbLDxnYUvqVBYLSh1JUwejcr",
  "key18": "4QUC8XUUKTwdYbnH8XcyZGyTaTNB3ZWWF6nma6C5UNEZhuC2tfmqTzBXQbQx9iWLZRoYsaJvD27pqh5Eu3TNwzKB",
  "key19": "47qdqftVqegVBqH6Tcuq5tUXfbKZfoHh5qRWWHWAGsfN6A1SwvvcqfWB9Euxe5JSRpwLXPMcdnN12ZSo3eWwJuJM",
  "key20": "3YoFxhf7bLUm1sGegmF74h753Wcikx8PqPHHS5FT8RmBaUQ5oo39J7Lf4LQEhcsPS4h22RRZ2gahmSxTrxWpsP4V",
  "key21": "4frWj1FN3gCGYDf76NZsTkNWwsM1KhikxrCBXKDTAijbt47fu9myzo3xyRBtbFw5CdZsvpKH9EMWu8hvdQWZv1zY",
  "key22": "Xt3Nv1LUTX87NXKfNHgAsp26j4aECUHggqQUAFPMby3zUCXW5veo21zFqMkGJJrFp8fF8DtSTZ35VXrLSCN5bch",
  "key23": "MDmnzdatb1zS71QWEGf4P3DJyFc4Wb9yMfiHwzZkS4pCSsiRqugsSHEaRndtDEW94Rj6zP4B53dPbfbKCFMGeAB",
  "key24": "7GCTasfFcm35mLD9PJL9AJi4szJdCsMavCGG8VE81zJqNBopJQzDT2BsTSwbRMMrQTHTuH8ediXTLgWDbe4qDEj",
  "key25": "2CuiQ6BzyByxnsKpDCu4b4WKYm5ZCfgEoU8bJCPyXd8rFr15SDitibmcT5fkM58gaEJYrs1BTSyXGa26KVYPrcBe",
  "key26": "5uZhAvjpKyzU9udLRLzUkhrvC42bRDPyYjBEUxLSwo4wg8qnH2x4jJivrjaXp9sBusDc8syoPjpZE2WKLGbws29g",
  "key27": "4kDVyJVb2JBxXMFUxvMuNN31o1mMEkPMmKMejE71dYa3DicCCB9Lt6onxoqZmXyqWBBiozL88queqs8nbEate75p",
  "key28": "5Rabo1nGPvhEvBzyfo9opU4JjxZ3YCE5sDuo9seuMJt4KJksa3fErLVarQgixx9H4BaYBp5Hu9Taz9hRAWfMZ1ii",
  "key29": "231kwNstoomuQTLhpdX1rEHnmMDqimKhfWSWEqhmLASXZ9u16YzfHrxVi99bVDFgQaeCaueQTRLKM3vo3jE391nu",
  "key30": "vHAchLrPAcvJFGgwHboHpzHNiToEncQQY3yCvcawAZcJBgHwLs7qZvycJhrm9WikiLN48xRtwvqPgGGeLxtTjKU",
  "key31": "65TRiqg3tGGF8xVRheDNPY9MNAuV2uFaFG5nzhCMdWV38p2jrK1p6c5Y4vRdwMx67vYxz7mT9xD9GCqfKDSttwLK",
  "key32": "HXmVn1Jw9FHJbsd44P8bhBwoTDntU3tfEsGibskYBVzR79RJo4E1VZTxJYyjAp2WSyCUVsnmgbqCFtwSjsxkBRa",
  "key33": "125bHgfMKjiGXLQvVR9Q88MBgoKB5QmWcynPz1hk66QXZ17gNNe2wTbfkhTjVGCzLU9pVSX2ss2yZZJJ3gXYvb2D",
  "key34": "5S4La2tewoKFoUwVHjRqHu2waWXsdhEU6aWXTUg6NRXfWqxYuVAFAmYvCM5wJcDrAY2AqDLLQKXXckbQx8sK2UcF",
  "key35": "5KJtkoDC5egMwjSa4MnrQKYWDboFfxDriX13pVDYY7dMFMMxoUGqL6qAf7HsKq9TPxPk65iUu7HCUBB2bi5e8tx",
  "key36": "2Qdu6FEEQmFsTydtr2ppms56vwygr5ULc5rQAuPwc6Raf8BAmFgfRzkoTZoJeC2yb2xxZRp2zqBbcBkPbg2Lj1e2",
  "key37": "5BfRUFgtQmFNGuQoK2KuYD11cFZfceJG4P94VdWriL9cJ6Y7XbwCMuw7rS5BjWAx29ricp1FYHswPiq661FM5oQf",
  "key38": "3TfEURhDeT1DkW61ixAZUQdrUuUYmGhtrw8iJtj1F16Tv6eV3tqNFUdUBQcZfoYHcr6ybrF7m1w6w6h41BTJvn4s",
  "key39": "2E8XJibpDhd512Vaws1mBcCRdHMVzFJBLefyHfQdjzMuBcm4SLhQGBAUwaLtMPSb4gw6ufpwmgWYxfe4DzH1rbVS",
  "key40": "25YVfoHmcfKkDGCTpxoqfgcyrLDtTbYrDGUC3bEbGq4R1Yv5C1jEFxNra4UyP9nj73jkS9dVJHujNxjQaZQUxbXX",
  "key41": "2bA3dPQXymUCUtGseepJRiZrFkiA7dkoavSHkHgfh1CbdeVUHyMu7pwaD4EbzGfEx96mCY3KPrwwJDaQtBfjRCc",
  "key42": "5phSw2dx5vWZL9EtMBm9gB1PVc2tWxVWy8BJYpcWqkC6E4LgXAh4jc8dvV8Q8zaVrZ4pDc2RX3z3EYsMsJtXtyJD",
  "key43": "3gbMG5AFxyZi12GygXZkr5qPftfAVV4NjkdzdUvmT3u73tHkXdFtckaVBpPoRYsuvc6GnRPTVVBrPFcjb4dx7JtZ",
  "key44": "3MLYLkudkrdShFgoXUptdHi2NQQ9mK8xTehhfd4bXy2o1cjx7sEJJDQ97ioJK67AqJkEDh2F3tdZyC3i9v5JBxLm"
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
