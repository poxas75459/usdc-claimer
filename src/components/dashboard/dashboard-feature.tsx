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
    "xrDDJd8HUY6eVvqnvQFvieAW1tMULrmvvXF8LQzKg9DmxunWLjEydwxcJB7G4x3FsShEBmcCXuqDmQuaw7ozCjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeePxxnv5Gj4NnWbBFFtBtBm7BZHp7EyFckzjDEKXkxhonvbChq3KsjEySad68BfeTrEfLXTUZJeYkJVWM6ZjM",
  "key1": "42RcCJijW6N4DVA1ZSKGQpEC1Uo5JwQdkDpnRVwbYHeuqjZReaHfRYpLzuqPx91cvHqmp9cPkj18E46k8YhWM2ns",
  "key2": "2XRQ1Hxgaa42EQdbFgT78QJPwGcXgShJJNNfxJgZdcjvgLizGtWqmsLi8Pw7w1y7PQnGmYuLpqML2C52pMkdyWST",
  "key3": "awh5MfbZDg1KALut5uR2ZRdg3ri69i8Ar3vWyJ1Ue1oLX1m9Uru9cVZNHtCytPXgZhGaK5zEyT632PLsveCYRm8",
  "key4": "5gQMo66kfziNhJcLPWx53paoVvMmL8wr3HTDZM13ub9sEeTCsi3ZjSTXRBFb4oFWJVuQGz6SVQDL2S4zHn7sv3of",
  "key5": "4pap32ZxV9HjKXvRr7EJktjJukeeQmWUPFQQ9X7rTbTyGdnJsYd7bh5Ykbm7XD5JSrrrZfduK8BkVcFay2DLcCHM",
  "key6": "5buSwkCpQC8E71zaiAMuLAFuQFVpve7Ebdiv47P895Dn1KuSfhycDf1GdZcgTFdUG3hQLPHMACuWESJML6ufpeDv",
  "key7": "TsNUHRNrfNHmyEM9ZvzauZdwF5JynmqB3un2NdCvJQQUG2tdLKbf5kbTRjJAhPYGupkEL1XrM51vHjBUMQ6qAFE",
  "key8": "YH5SVwVbs2NgiZAjcANHS6VAWu42uRTjixcTQ7tT3RirygngX2wZp7kCAQT9RBcub5EPUGcvvhnDVF9sg3HQHBM",
  "key9": "3JFFrrGkFKte74sp2R7ReFTgz3JKsHgspqvkmTfqTDN3YLbmmDC1ASRLChkjUztjB5esNugaJkS4totzsMZtdtSi",
  "key10": "52SajWy9bbowvjWbytvTsFhMCR3UvJe3UwtHWTHCVPjkyyCUVSVQDYfKMEzPL9vLvgRJhcpVqagn24aAqUgHH1uc",
  "key11": "5qz2eweRDCBMRyuhtdshY1h1swKFcvcMDLqVwKpbGBS5H11BJ5xeXoZWEojuWFKuWcf896MVoPLwuia41Z9LKdJC",
  "key12": "42oBNjj1wTAa9oDJ1hatik9ScxeRrrHshNhuQoWNfrTquab8B8SuLK2zgcQvoBk4cXzh6QwYCtAvURCN8byLzdSW",
  "key13": "SmacjJSEnqf5Va4rh8DYxVf2FH5juMVvatJ2Bz4jbDz6qtqZpzq4KGXidLh8eksamkDz9eVyxKtq9SSff2g2Huh",
  "key14": "4BaG79qUmMzf1E7tXtDuziHuxuCEhvnfRpB2n5kJ5DNgDJJvzAY4h8ZzYDQtAnYpXhuH8g8f7KdLQYH8U4CFvnK4",
  "key15": "3gLbSR1WihCDy9YASuewVe5cKvfvsNErNZXeSdJ8z8x8LMB9x7ScVB1Udy1rzEsnPcpYybUeKTpzuunQdGHKx9aK",
  "key16": "31eJm6P8Ra1zbBjuTHqepUq1vG2Xi8DD79w6ECqVVqFo8acsvGrnVsuMrfSN3xVQHw8rfExsp6Z6BSxxPCA7rsCJ",
  "key17": "4GgChGf48txEFgj7EEay4rpnTdvLHVuaNdLjJEkKbTYSt6foRKWfkhBxQR5d87KsZ8a6PFYHnwNevmULESmr6r67",
  "key18": "3QjFEaLL91gvMaGauaSnwgxyEP7fzBRjCcsjdej9opMTpeT7iUbLr548Ku9TMvjmaVD8XKxpcmhyAYFPpZUXdERY",
  "key19": "3FyrX6FzvdryzFMPdADoJzVJE43af5oDZfndcHoRrwhb4KF6PFNPMdvQQozLQwHN6j5ewvcGZLreQA6sT2DGDpem",
  "key20": "5k3vg6uCAA29ZjBs7tsTVDjRdra5Uk8MQH9EpEUibDTMbqKCM3zNk3iFCxaGfiptR7Fq96FvVjX9FcFRrEo8jFkU",
  "key21": "2HwxAWS26Hp2CrJFnKPjoq8Bnb5i6BLn3YY7sRh2kTZwThbNkqYE3ERPhMDzY2fQK5KimF7BC6PGiBrnzVq6rXwo",
  "key22": "4UfE8NH25MXtLrMjfsTBkiqecAugND1Dff9iesTpdH5WaxFLHN39cNZtXd7euuotaw5F6wctgtYcyHBNaQ8WiYke",
  "key23": "z2RvjduFCESydfxfnCyDVSEBW92QoKB4XxRVc86t6seX3YWZw8wh3Fv6BdwqWN64m95XFFrWg7kGVCnBzhtNFhU",
  "key24": "5QM9yKXtC5fz2k6trKuDnBPAcNAyCxrxgdfJpAE4dw7ycLxCZyhUG3ZAFViy2acTzqPiTgj2AqYh6UK54D89mYdE",
  "key25": "5CqPmqoRDUmSgwxUCoVCKnXyTaJiPz2YwcdYc4EG2GazPLijpFvkgEPrM13oubGZMva8hdDxcUezdDe8xUDnXhKN",
  "key26": "26BnfZAgZxvLWRAwA8PVhiBYZSAx6bhEhcdhDMTNQStiyBFv6QqdB7XRHZ6XEZiMn1oLTb9jvqUcLtnKW49xCcA5",
  "key27": "w6MSdMEMFrSsPqXxpZ2qEScfL8c9Cs92eCHUgJHa21ooU3cRqLVzcMJyF5Etu6pw3grdLjoeH85yi9p3Y6GN2SX",
  "key28": "3P1nqcJo4DsyKkCa7yBujk1KVaexr7bkcmPAoQZJe14RBnFeyRunBPt984ACbC6P4zaEpenJkkNALEAL7d3DGF1q",
  "key29": "2dfEMVymTjKRJFAkfrT5rXW5dQUN2zY8Acqzn5nNHqn9b1A59vbYgnnfnXHgarKNqTTUKafLD7mxtSeaAF4fta5S",
  "key30": "4EmRZHTmdFvUQGsyAgJjjw6TzVjxNV475iPLQUda5q3YrVn37gFh6nHGWVUEmbJoZsivABJUtko91UiQiQcsdgP7",
  "key31": "659y6kgRXRp1jLbVGRbizArCkuv2aYF14jSkgmpb21s7wvxP284EY6jcWKvm5i42n5Zx3rrgefS39iqST5q2k9Vt"
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
