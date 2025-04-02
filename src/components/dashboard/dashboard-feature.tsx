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
    "2tf9BLRcMxmwG9Acw3fQhtQh8pho926rN1zNeVfvFRuJqNDQtkEc61poxTWX3MMFwBVUZSvhaXSEAKD7K62AQNUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHsTBe2TvufRaEZSkkr5nDLqhceZw1E8ptjSEH2bAgvpR5nBm3PvpASSojYzMUR3vvFZbJuBGT8sRVcUwPFP3VT",
  "key1": "5bPgbp3aJncXMiCv4RkBmnaKV9WjGrvC3mpirHhw26XoGEjjJchMkd57N6k2tvA6vZMQP9HUd1ZAZwkACihjxJZY",
  "key2": "a7Xcpq9DeufBgGJPT4W5hcxbWoeSvPGrsy2eym5Ly9wsAa8XKUEZHhSU1rC1W2S1jzrR9TVv1mBS9gKybiNc9ip",
  "key3": "5gDzHkZeReZnucFceQwAe88a26xGQ2jXzZXxpD4ZNymEWZovQgkN3XUMZU5Ms1eKDH6DWBgJtMV6j2DTrJ8fi2NB",
  "key4": "3VJA7kw4ssNbhNRqPR8RioUcevVcg3G7jgAGcVGXD8PLfae7q8HUPujgTLjsmD5S9PWQVYxvTRRxcjvWS7vqKLVE",
  "key5": "5KD3UK9jzom6bZ6ER9yjGFH3e9iy5Pay2d4GojoJJRi4qQ2i4u1RFV7yDCt6ap3ksft7oNP8brA2T3parTxHkkCU",
  "key6": "2KjjbvPbpkgRWG35396rPZ93Q7o7n4VdXWpcsgP9adm3QmprbRNsDmWozmnMynZEE5Y8davspbVr2RfNpGobB4xi",
  "key7": "2Hx5tXuL3ovts86iPUpY9LKunYaFXJHcJuFECpXogmhq87KuDicwCaQmcQzkJvC7QYArV6NSVTNitXJD7BkTKpCD",
  "key8": "2dezSmkApJoejUEHvZaaZ48Z1H5sophjnnqr7TSEpvaXYn24ZN2procUjTdXEam3VyojVu6HU7bMpcDFdtBznxh3",
  "key9": "2TFnpNngDkm8ZHJeFM63Wbtmms1iE5iQMFgPM4c1x8pjbTh9hFjpKFhxDVuZososHCT7Q3E8GRJ9CwhMePhihYeX",
  "key10": "icUvJhJQARnRoPsbHU8VhUjquK7o3Vh4RC6EjHC4imEfdU3JobdvzxWs21xRtMwKWRf6VVWDTDNA5sbKcxWtqi4",
  "key11": "4bsmNjMUYfYgpng651oVYcQAMxTd919Do8At9vb1S8AGUmBe1jqPA7dU6U1S343FmpCTXJ1qiV9bhu1hvka1aCiC",
  "key12": "38sN857kfQ35tjMKtorAghkA6aejKHa372mpwhneNLhFpdnYALLKq7awxtoQXWAmaAAywAWLiNBkuQNFZ1b816W2",
  "key13": "2K1M2cRXncUfcdHa8y2uceD8pZibHyMiQt8vgZXvW5ucQFrPWXNLVKhcidb6zfUYjhdSWXT3bJc8prca8AfCX6DV",
  "key14": "5XzTieCBvfgpmCSUyqrGz1sJK9omfs4iBaNnrn9tB88XNASQikovnrzM6dzQnhaXXzrd4DCZKDmppTpGE7MbFGfe",
  "key15": "4C2jYPs5WsAFsUMsuBeUsVLTxzqXFpbWY2oMJSs4QRAwdtxCCJAZVpg7JpouGGcMjgJhkn9mrh44qpMvGK9YHu56",
  "key16": "3pprh6LWmKYmWqyojod8AHPbGcTJz7oEJaxTDJhtjVaSBKjaqLgHFyqZgyYafT1PQ8xAqUndaKdM6zetZUWqZCiW",
  "key17": "2G1RYWscpdEFAfact7pc2UcbL61YSkw8qaQjqFSe4ns8CbFqqDv4giAzxQLmqCBgZoAcAAyVuzXpD5jjcYejtBi2",
  "key18": "5JfW4Mz273UfTufpqQJuxyGAAa5v9WKT1w6ekkGPfuhrw4SGswYi4ZCRmsHME2AH7GWC2LC9oye9tiQ5gpqfPMjf",
  "key19": "3N8E36QQyCifYtaKf39xt4Z8eLQATaL6QXkiBU1hmogCaSZY3Y7gpGRf9dX7c4z35LWw4mP1tWpQzebzSqA6oLLy",
  "key20": "24rQdiYUpZhXFULPRydqkraNzeL2S4eLxYTnMwiaNKvu97XkrwUTVotgVMUToXQCyqWs7XQ2LzSRkUteEXhxX1NR",
  "key21": "46Afabpw2BqDAgPf3hPS8wNGpeyBEpwL9ZCoAfymtNHiU9Ku4kG39fpaCXNtCuamnCecEDE1qhnpvADkw6VCoXvi",
  "key22": "3AatVTcy3KZbbc6iYyDqVN1FASQPYWPANzqMzh5Se9kgq6TQZHBshnLR9c1rvXLuWiqcR9VyLqjBVdSZYpfYQk4E",
  "key23": "5JMtmQfBvbUdcDrWt6RF7vt6F99o26f6W4XyLPrdwDautsJR7Ab3gL4ZHJ562yoSdUS84m8RWWmxhNon6a2p4NGt",
  "key24": "XMciMCexf1TeeUKyjVGEvSvqTsAQUmetyT6YiGVqSSrBjXDCTCUMWFr6zFxBchwhBYaE87StSd2pNvfrEWsd8dY",
  "key25": "2yPFEBr5qoKg711m2QvpHq7VCPc6jCGhix9em1y7gM438xD8W9iHZd6pBWcojUhCnwin6oumD3hfHgjd4283G9VJ",
  "key26": "52h3nqdXdhJuYer47uEYp856sT3bEtbMdMSWH6JNQsNTiZzxWBLtuvrBxLUtDdxrHKB2bPzBAQNba87bv9Ze1beU",
  "key27": "2MV8LhEMegw3pEhD1ovwWSm1aYF2xJ99z7Wr19MM5nBZh6FHAgkbvREZwo12Gk9SCqKgivzus3p1a9CNNF1BAQsn",
  "key28": "4xeGwWpzcMWwqu6AtqYejnEvEejcHCmoGq9yJM1sszc7F1RfDuzmJk4gnfWp4tPfe7p6ickt3hTWWpLoYCWf9mbo",
  "key29": "4SXy5TCfRL9EHBAXfNNfirBFJNe68huSWz9E47mkgjot3K6yhTsbNy91u8Uyzz32VGXjKmavGhfPBkyTmepPAQXB",
  "key30": "54wvM2qdvsCfCqDPVaM8PQfqVTnvvRJSNP6c93LeV8oMRPdmYJLBNefRrz1oR54JgXA4PynvHnCjGzkwXjgUEbJu",
  "key31": "5HaaEbkktVRfiN7ff6fMTabC6ADwxKwiri1h5929hYh7UVgxF4fxVFGZv5xWy2wk1N3RGYGfph8oD6B9ac92NYVX",
  "key32": "SU8xc3ZGvMYRwtfvT3UTBQFoR12UKvkXuZLgqHNGofAFcd5g6hDndS8QxDDX4nG1GfHAcnYaKoZBDkMRUnuD6Ry",
  "key33": "4rSRFuDgVTsv52R9ybeeALDHKdVTxW7gF1SrmPwUMnb3HrcCRbCZ3NtN9BdCD3iR7wdCy2thjctMvRPyQWzXtfMD",
  "key34": "2LeCfKcAwTWmw2wntWJWDsNvRbMUnBJUBJ6ApxJ773cKGh6b18XR8sNjzwjhinLWALZLrVvpZmW437kuXeUasJPs",
  "key35": "TLq7tEpdjsL8WB8eXL5vgePHRf1DSf2DWvVQ2x29HGkj38yt51rpQwS4N5NQBR4tQjaMaFnyBfGxTP7KFDFMAoY",
  "key36": "4qn75a1cBAEWMFKKhtYAxrai5HAXRQJHi8eBntDenh6ovXjTM9Nd7b5FnAqpypPRigxs9ycZSduiWSFJvZ5VPHnG",
  "key37": "2YhL99vcisTbzdySzctG99JKZtdgwFiVPhfgNZsmN6dpGWTFmRvmtrVC8Q5mc6Wze8hpkgiNkrV1jvxbzYZdnK6e",
  "key38": "5MVAK8w1Q8UkF7R9LCrocRWb8xKFxbrpkSdCxHBohUXrBkZ3YnFnnNjBDzY914NzQV4WAoUFoXx5dk5U3PnvGhWe",
  "key39": "55ARQSfNDZ31YP5KsCE9gcX9DRnSWmWUzRKXriXVXNG6jcBTVBycSpRs5oxuQium3Q7yNaekC5yKo7TV2onhMyV6",
  "key40": "4nVpXSZWSnBm39ggRsRQUEEMuHY62KHv72BgC7hjpYpfYWK4AbeqNS77EJ6Hks4ubHTZKWGeJPDKHcwK7XV3RXMX",
  "key41": "3QLLfGfR1McscH9RgNaoFQMHH7ygHLFp3zs2Se4w5KwnnhJbk9wSoy5YLMLoxbSGp4ZdCodTxnyeG6BT6Tf6VPso",
  "key42": "HTqtLwTQyH1P98UecN9XgfubzzJ6MFwZXA5SRxhtE2ap1SVUorT3axRMqbtT6kg3kyY9irScWurQHphmTJWHhp2",
  "key43": "kN5gDTdRqdhbQmKCE4bShabpZEo1DsRbZJ4v1k8u1rLa2NFrLVozDgTTTNwVMYfd7QVmyVyMxeYe6HBK48WKg6g",
  "key44": "d1Xm9E8ndUQDFjAP2WBWzdw6AWiUkZuta9b1PMdQ1UHTHL7GmTkKiYuu6d9eCHCMXWjcSDa7E8dNFPYZwXrQFai",
  "key45": "5CJFCheoRYpJzUEVeY84prL8RfhJGxt9Q3kMTWmLbybfG4xqkhTN1Ln4aY92gypPac7S7gxDwMuiRJhkpCJqpcyR",
  "key46": "5PhL8afTyqQB6tva36SAxeGY6cAoTJ2db8GRdGzQWuZx6vBz9ek9KBxVBeB23vNzkccbLS9yD2q5qGJ3Nry8qFSX",
  "key47": "55zWfzw5dQ4j4V13AWDLhPRgR89kxyY7tih9QVus1jmchsBeNy1cgoKAcAvu6bQTDCU2QoHJTjFR1WPx7vTjvQP4"
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
