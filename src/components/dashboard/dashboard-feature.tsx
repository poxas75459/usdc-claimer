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
    "r5Kky862GQN13JJCqPfH74eeUsnDHZBkwt1Qf2ZuxuKqZJPeNm5MknS1eFgW1w4v3NDhoLE6Y3UKJZ19j1dU4Ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TSiDk1PL5veeS1cp68a67Nr8nYyPzP7SkNTgg4ScQ1P75A8668YAuUbu6bhXts3mBVKaHaacYzFxJG1Qvn8KC32",
  "key1": "U6vzWAToPZyLhrzJdMjHetz9ME8zq7W7nSWXY6EwFwEtpLsz9TjshKDpcab8tck4xNaAARSUyXDF1FtBfihBbUG",
  "key2": "1c8QigUkRn3C8Ja1F3oN1YifaQTUonX8jmfY632Dgq3e9J8SuEygpiUNJh1S5qAfDBshsCV92mDQ527RqEsTdji",
  "key3": "3EtqXPuYJfKp8gGR7DUVHoQqtw53Zc1dfnxTzexyi2BQgfaiwDgDsep2YxMnnRYsmo1HTESyboAUazvUhMat2bwp",
  "key4": "aXbYrop376eeVCVZoJTsTneTE7igRSwmSEnKz4u5NxhF3ZA7xmJDZngEQnfUnt1fCjJQD28dVVEhWtd7dAkx4e1",
  "key5": "QJFCNRaqoFM2EfL5o5DjeyBbcfg4hMUKaaVkxh2GRtfgcbYG4kMHFigna7gbYWAjG5o48Bpoc8SiuhVewWC9FxW",
  "key6": "64rXRFdQLU4z995upxmzhBRmis7skncGVWPx7Xay7bgXp6sqysq1mMr6nJjbahqxqRYBm5SjcCiQEts6UNXw4XHk",
  "key7": "5niPZz3kacuTnufohWeS4w9hHGkXsif2ZUFrVP4ixj9ApQGLSkgBxpTmtPf5YPmbTVXVB2ZH8NoaETYNFPU45ER4",
  "key8": "MiUA1uLs6dREb3WPjm2skbjEM4YzYEgLn9yrhoa3G2uxQvsph89iP72kgNYxyr23P33gdFXuk3hxrV2wh1UdpTZ",
  "key9": "J9dX2wV3U5zkHwPFb8xr8RdeGUPCpFRVkxC5pCPpZ7e7S4u6PAHdMLcXgfYq7XBWFfU3HyDHdnK3qgZrEMwFECV",
  "key10": "4cpZdxj5xaVhX6Dbe5tCoM6jmEPvUMBsffihUoei9PB1XdZ92ZDZW1aUKon5nKLJ4SU2miB5iwpRAut7zC2uQZPm",
  "key11": "58FjfaMBhYrGwcjP6igjykwRfFrBcZJ2cydWDx1V7v98xiJBvDcU8EB8gNbGypc57Ytyf3UQeZiz6FKX5as6qL7N",
  "key12": "5mZ25aHUJGRzfgUeVYEpgzPi1z851JfqbDkPmYT3mDysXrjozEu7CuzPmRJBkoMZEBQTCd6bk9yrRXY7AVd5WFV4",
  "key13": "5a453gdQpmKuENvBeimjpdTtmsih5roN3fS4ZEM7pMPMnfruZekxzq7qJhJSiVxmC4jeFFW9L8cZ4sEcPUhSKaYm",
  "key14": "5J1GJNhPeVPhDz7oDQCnvGVhv7ct4VNbPEZBowMzKMGJBaC6ke5Vi4PuMVzUt7fiXnmqaybDr8vCMJtx5mwjqVYk",
  "key15": "31Z3wxa5UWTFDCT54n4CoZAJpNUkugMXbD5W1qN725TCXTXr5j44K1rfVyXFPfqDWjJP1THg89nXxqG47VkiWqCm",
  "key16": "2SNnsUEyXRqWd1o1u8r3xXoRDxmivtDbKh2xHf2eQ6mX91TANE8wZsn8p7EsbbsTFjEsPP3HTDRL41PQbjNLgRyW",
  "key17": "3AFiP8YkHaYmRwQe3rRHttUU3wqVAkpKnR9nXMtwyPdtbcbj1isSJMyqt35zPcNoA7qHqP3E15JLjyyeVUG3DPme",
  "key18": "wL7KpJBUHKv8GMRdD8EtRUmtE8tssrp48fPhgoRLof3vNMPqGjuv2EPNp1CLownq9MpAL6gkQUqAHvW6X4kMuhM",
  "key19": "464dqKMZX9oq6AZJDDhyxD9DZoU6XYLhs6RKaT512bVT6bhwyRCynKn7sVftoiEuwJugBbMFe2KGVbWn3iNFbnrm",
  "key20": "3ehHcQWZFtDpukZFfJpSSspRb8zsycHMc6p5Kg5TqEMu5XcKhR1f5zh4oK9m7tsWw3KucJiB2Ro28EU3QC2xfn48",
  "key21": "4MKZPBH9YhuYVeY8cNbVgocC5JcuXimqUS2xV2aJVfYmP3TB3369s9bijgzjrqZRhdNuijsqRRwQkDjrW1ox1uKh",
  "key22": "3n83U8MDoMfRmvmXYhsWZJt5nEsAwPrRjoAJJsJuVEwkUgzBNC78ppidv6ZexmUePrgCW4ASbLLE2XDnAHKKTLCt",
  "key23": "2HgxKmT6TA9bWVzzzJUBgfU4e7HhS2GM2L1PPdg2GgBMgYKDmUMoM72ikf3fF6hMzivqVv6bJsZGSHziK3aogxnE",
  "key24": "2hfYkLXTWMdgGxQG6xrpwR57vnksKgVPPRjw87aQJkLNBynpQ2p9QhkDmSmqev3Bxu2rBQ9f9UoV1Ven4L1LMckF",
  "key25": "29LT6UCtR1GjyikHt7jEdhuFoJLoBti3WZkbzTpmaBGG52KF3S9ZADggNsqs7oa7aUiFSuYBGpR8fT6f53ywHpZt",
  "key26": "2w6h3R2XGEzCeJDanstcgFsLCkchQ2sKo4v1hgF8QZLyQEUdzrrHPqdnqpEZtJ1GXQxCF7hbZadZ8dLKXwU82QF6",
  "key27": "4u1YcHay9ooqarWS1higgbjHRviHtumThb8Dkjen16Mb75tmFMYRBHtRB2ZF1dLQL2UxrTBmZR6wURsaZjLLhPsJ",
  "key28": "4R4aLskSHJ5qpncAe88inTEcMUYmG3t4vCHjqzRHB6qXeLf4zbsGr52S6vMsEda3Tjxn27EbDYoBva5bYNcjpTMC",
  "key29": "28W4myF95DShAYD4TTbKzvdNZ6At8egxPtVtbR1EkzrnAZuXQYDm24ayepF655TxZg3GFXaL9GzA1tVrADCoF2K9",
  "key30": "343o1BEKbfDvChjGFxbju43gbxraaHaf2Pq3uRFDgwGg4ZaJYFQgmRPe1my2DrYqEv8w7pNZR1BaKSKJipC5roSz",
  "key31": "3AZURoKUWFkLyNnDa9KyHnD6s1AntUKK1uioCvzaGQ6LDns1JkZx9RXYCe8EGmKy91KDpMb88zBj38suEwUNSejW",
  "key32": "4QiQCgH1UyveQ3SEzRPxjwU7DLU1qgH4SPXMvsaMtHRgWTBexsHJtXEQ9mPNzKtAR1Pq3wdxo98AuwxaRa53YDuE",
  "key33": "3wyzFXFx12e3Nisqmsi8B6bqxmKHQjzF8w5d6sW3oeop5uwsRZCb2XD12R2ZLhycEruHSfwKVhXVNYB4xd9ZYMBC",
  "key34": "tqKfLMXknKwnaoaBC3VbrEX1P498rEEdrWFgWPFerZYSc5yNrGparQYZZMoc2vtH6Bi45nt7ug36p71NY3oodRR",
  "key35": "2J8stuugXNvw5sAFXBgS6hjMFQkaM1Nev5ccSyHdVtSFfJQNK7MzSZADTkYyN9pArPVRHEBuRZWXtBkstFfBFbAk",
  "key36": "48eoXSAxyZUdgK4Ltiwp8kUzRd1Gdhie9CK1J6AZv8x2KbsqCE1zytSeM4vGiBoiAbP4TPYfXRQHgoer2GxL8CxN",
  "key37": "5ba3CzkSpv8QQgut5FtCW6tKMv7UZxDbSS2QidqEGA3STEwCViztNxiLoctLSJsJfg6YkMWNvGLGQUjUigBMJG5f",
  "key38": "c9EhSCroXb6C4bYMff8GWdSeFcU4YYFyZKQP4R23xwUr17WCfiPe9M7TSqMLL5Q4Ryn5jeCcNAGbP1ezr4hGxKZ",
  "key39": "4Yztgqzp6JVFVuCA81WjiyMzq8fbTYapv5cK4BsDdcZxtKxohr31wnj55nXGSPCrtUQGoBzhbB8u5L6CYtdqbGVX",
  "key40": "3VgovSQB4aqDKUWjapbmtb2JvX79Zm5BzJ5V4p6zQvpALLqMKUSD6Q2XvZwJ9EySgQ7gFSbmyUFm8wt494Coxpvv",
  "key41": "9ewtWZ8BzPAJvjygr5X24PZAwapTmHEYP4Vw41RZrQhKi3LmMwv3TRZpt4iQPL9Dgn63HEgvY7Fi366mjGxuGv2",
  "key42": "3QPmNByLBTXqgQtLJ3RF8dm9tFm11jx6acgcrvc8B1ioVmwacFhEzhXMJx2MeNPHA9t2zKPk7uPvB7waCowGdvw7"
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
