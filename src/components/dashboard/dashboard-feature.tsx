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
    "5ZKGNxyr4YSfBSEtNCm3EViQ5xDAC6BWQWwkY4t2h5F8gPVE4Ym3nPvYVZqE49NDFjPV7gfXHTwhA1DN2s2oCYWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XoRV5AWrMwwkRrYBidQTj4ijR92jEvriELgp8ojaDTN2vJXXYUv4bp265e6sBeoe3pfTN3xXeQ2kMdh7xNnqcyt",
  "key1": "25QZQUCZc355ZwGsCSaPNJ7VPf4LdiddMQe9kguQ1pyabLVrHD3eJ3QsjcxnL7uqJFiGfgSQzQURoLuRbZY5Wfyu",
  "key2": "2Pv9Pe3991BVdi49CPABLUyeEc5QkSgDXmzWNVwScvpZhvdaZpQz3Sq3XWXEr6pYtw1a9vsBQmkgDuzx3KfCZ8Tq",
  "key3": "JAmUg4P3m1fBQC5kmQsn1nY7WFsXyWdzEDXNb2p486n55fG51gtkb1rKRXzzsWXqFnjWj7gQhHjw7XRjXhxgZvV",
  "key4": "4BRSwhUvQ6wVMSAjJjkQpxNWYkmUEnFs9a3yjwAZoP48GF6Rr9ZnGVNrGNqpKF6PZLf4TGhesPso7kWZXqeva6eY",
  "key5": "2kAeLn1hMDQpu4motiDXBsWeH7oYJgAXwqKM9bNrhPgmPG4JHrZPzgvhaqcov2BhuLzpWEycZLne9k7nsyuoEnqQ",
  "key6": "pZJCL5cp32LQMyMrM7xBbzWbzJqKyW9DZDJ46gRPLKxTEp8mpbwbqHTLf38abnH5su4Gz1e2LPkbsagrDw3t94U",
  "key7": "3AkmXhFExippgEjK9eCLUPD2nYr4sr3RjeuXeBXhghPKLqfqwGqLKaRFrEQdm2dnRtdrLBns3yK3XgDvmUGU1ZN3",
  "key8": "3ih1PfSmhNYos3WUt2qcVQu8peRALbGAQ6ZwJAdEgtKPuFA9q8L6BQ5yutg9RpYb6i6vQYE6YnJoC5xBLXqQa43C",
  "key9": "uyCGm6ynBCUjioj95px1utP5x1ctoCCfprjwD72hcf8UKb8y1G8MzmFYwJiRNjJdN5NRYJgyKUh5dgCWSYAFatj",
  "key10": "37GGZG7XD8ipSK4bjh4LwGsyDvRibwzdfhFNsA2x4JMnqjWcFBRpnnn2Gq9RQMVFsL3QBfvPdYz8KqSrV9JghDPR",
  "key11": "365FBWRvXy2Y7WMvw74meH21r5SgfZb6pVtZ3dtZFuWxY4AhNqnfZLXg1y9HicpxnAXeN13MCUfrjVwFDjBwkHrg",
  "key12": "2nMzp9dV4hpoeSJ3ayyXA4wacSNjACdZQVv9yf75vU895QKUMgJhYpSKMASkCnHEpTYQ3Uy6583EPYwyjSQYeBxS",
  "key13": "55x9u9guHYRzmyzKTivo4u5AW63aoHyKy3LBPevvg4EnBwoPfUJvHxWbeamQkac8TduAKfAPQLvRpf7rPiBzKS1e",
  "key14": "2zgD176evgdoEDJaApE6N8AtSavrxETqCn5oMh7Vzry5iENpHTvkLRUF6eGyUouuFczNa3jCj7pNw9bFKVQzmaio",
  "key15": "twkA6zrdXw9Dt3U3jQF8fZC71yZin1NyMUPUcYnCcrg2LqdyxG9Di4RL6cThjrTngnSU1mhnETshypZpPo7q9Y9",
  "key16": "3JoBKdVVgSw7r66HWfayNvayS4ALMs67utwcrWZRAfyiqNjSc1cPSEPhYZDFJ4xon7wnba7KpnR9qsC3sXh2u22P",
  "key17": "UVdYKEveixzEmMvt5Hh6DWtv8aohSXQ7YW9cVgjmMAvNdRyMAVXxgFF9YVca2Yard7NW8jsNypdcpoiGV2MBCbB",
  "key18": "4tERndFBckZNheQcuKpqsa6NA2reiaJXXpHkTBLVeJBjS9kuuoQXJAhYKdjkFUeB9sFigKXakDPR3jNBzr6Tg8KW",
  "key19": "diwJb4JoHvzE6dNT63D61KzbcHy8qPW5r2K7UxLgu61rMh73CYshkais6BhsubLP1x5mbEbNbgZjyPzX5czjmyD",
  "key20": "47gejs5iSQrf3R5WZGxrAQAz9d48MLmPKAXJopb7jzEttPsK5JgNqXVV8qrs4dzCHjc2KoFyNn6cb57RZ2HtnJAh",
  "key21": "5kGk8hGdgNHtc89MPDrk62JTAzPv8zv5ESfsg6wFEiSLvhhExLzNj98UHdqyQfk1TeuDU7Z8Ysv2F4BAoFon2fp2",
  "key22": "2pdoz5DceZhvs8H34oCuBwMGUpXqUwC4G9JRastGvzWJce6YwkJ3WiUpWBuSXoyGFC422v78LGazSL2yh6vg62Ph",
  "key23": "599AoETDoWNaoLXRfuekEDS613Cgvf4Hq56zscU4qV4vL7D5DwF5Bh14LXEmvy4Lhy1SwnyiMtym7HPUPRsCCTYq",
  "key24": "22L5fVP39pNSqKLJRZm3xzvThHDeStEE2Qo57oFzFav5QS2Xd1AQXUYHmyS9oEZJLpu5gsD5qA8Um3BAPMtap546",
  "key25": "2YevEhHERikGy9S5n7YjYsBP6oWXAiUVNMnMDBGQvx7rsgHPgy1Mi7FvieKK13XHvTeGky1mgxRn1n82uUV85SX1",
  "key26": "31LGLAwAMaZ8MQjRBxwQ74c6H4iAmWMppKJwBcQWkh6g96iEqMaVKooHbomXMJirnvUhxMNcwM3NesWfcdBU3can",
  "key27": "3QLwzg12GF1spLiHdAzsRZu9m6kYT3SY5c7Yb6VEzn3tuiheWKH3RFzQvVVR86t5nmEttuSRjjqxj5zLHwxZSYW5",
  "key28": "3uvzticDQUhYdVQJv2zXwAFBmTGbFnbk9xX3mRgGHfT7FMRK6jGMk2g27vYT2KfC4nycwty7SuEEZ4yuGMhYLaGf",
  "key29": "2tcWWWsnYZDfnA8UkjNpgTTQtwy8s3hmeCmMwxdJ3NidRm7DggsPY8FFSQ42TmC3W7WcfKJLGpjePrhdxQoXJwUb",
  "key30": "hdiW13YobFu79zxZmvXvbX39fpeVnPTHhYv1TXbmwtYB7eezy9EcdzGVgna7eD25jjP1JQ5GnTL2KShb5SdtvGh",
  "key31": "K7ZvccFW4wtxEAoxt1GYtr39w6V3atX5CfebMmmgDVDyTe4MdMfQRMSKM2wTunvXjCnCjddToaYuogKYr3cTXox",
  "key32": "SqhPkXTt1TiPoRTFp3YvY3JZ8ago3QJewkVZyW2wAavatMPmnk2R8gUgc2ZaCLPzBAcCNNhtkUbmqwL8nVSaPp5",
  "key33": "Gz8BJ1H8C2SpD8y9YemJ5cQ7FAo6rp7kjyiPEoEdo1FNiZKzkoQCVgyMnhsNXTDzQbTBjdRtUykabBLoobFrGFJ",
  "key34": "3hUsYL7HJWz911FnfF581gF8d17KNexT1z6hozFAp8PcHP5mxDHNrMWwPx1EPyupfYMss4MwvpMJ2eaiSfr9BWQM",
  "key35": "4BTQKYXFhMuVh5RtNumSyjSX6gp7mL2FQyfGNpGKLvUwkQThpr3YqmnbHCdGvpArB4TAf8nEfdmWfonEvcjxRArR",
  "key36": "4tUV7abqVwR4u9xjTbThPVbbqSdrrFyyPH89V5doUZfHzN7UgnczfSwWQeYP4R9A91jDzyNRW2yefuFsPrTAKrJh",
  "key37": "29rEd6XoGqGVrTFAeSgFCEpCthMvfnEtqqf8rCz4ayZSNDdmmgVAd19zwQnKYiafun8CbTepFGTgaHqT8hP1KE4W",
  "key38": "tNqN5vmXVYjkg2WyXZcUWpXHWdDFz8fjjm2URShvPZYbERKVP3S7eiUweptYPqHaMYVymNu3iK65mkJqg959BAe",
  "key39": "5bLfZ9mNjuswaS7opRP3YfoDJLnnb1efVdEJz4qkmUBuGAXCWuqKz2mJwfkvafZ6PrQZCmNi3q3QVL4ZqWMQWM55",
  "key40": "5u8qFbCkqEk76mr3wovovQqD6e7rLZTjmu6EDKzEAcJpPjh6tgL4HgeAfVt1DNQFDbnYAJVYt8qe222je2d6rXpj",
  "key41": "gXZEPgC7woQ4ge33P3gU2EuEDbrvrkbJPghiR8S5EHZSqhnppyDYmG6m3h7cwxp9wqMfL1faHdqWB18vP4H3XzJ",
  "key42": "5p3GCzwWJiXiakfzf8mavG17GwTpJojycsJczHFqDgbTjAWstWHzf3b7qvRazUWQJNfikELfyTFh47k6TpMJLkok",
  "key43": "3bLqZzkxef79t8YZSrfHwjrUwPbgxKtn4vemGkDrFZRCTsTYp4F91cB51kuQzSw68JzsoaBJpvwRYW8akMT5V3mD",
  "key44": "5oCh5MgzLvM7TQMv5u69zmg31zBFZGhGvSk86jZmJXDvzVnV97CBqN2keDLMkvjB838CJQHsc2JKQR49DLhD5ktd",
  "key45": "2mHaBYU6Wa14LWUMaw1w1yxZLm4SP8mmMX4owZqNnAyqzhLEmL4j8d7GqLaSfFqeN2L8Djcxeztn2F9z4eXV2AJG",
  "key46": "5atWBtDdQ7aD5yVoJmzkP9BRtrqCXduK3kQ3oiJWVnVbV19pPyXLQActekobE3bVDh2grgMpprjYig2wWBs76oPo"
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
