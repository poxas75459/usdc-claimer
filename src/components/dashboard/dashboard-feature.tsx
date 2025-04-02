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
    "3JVhqjBJCQkmtp4CPRJ9Hvz5veGw9mY6GY1crJcmz9sKj3ty2pEeq2JxnHqVzxsEqbsNW3ykrwJQa3pYfUcP7s1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ypFJzyfRdws5MMjhQXnBgDShqMR8fJrHokLdHiff1WwoHGwXbUVwdvCfQMZTUem3uJdPVqCavs61mazwExnbt3",
  "key1": "2JNQk8592V2wfb6jyqQHTsBuaaPDoed1equXWzoYgjgVL2E3vaePSMThfGGhb3LnBXQbPC3D5yhTPBzXTVVTnfH4",
  "key2": "5qhCC8Zb3378Ly8a1WxHavBoJp2Lw35FwqRgHi76v4kCiZNHBTNwuGTxiktZZ1nKniJBeYstZMdM3phWGudpDouS",
  "key3": "5HQtvt6cWJbiKX2JpvXFHaZ8fCBkLz4tW8omuoxfEu3tj45x7b7yg4ErRswFkSCQk953iDxnXNpFntDKXvyJypD9",
  "key4": "2ps8v4GgZRX2D2vUcDpNQKxkFnSw94urxPxT4xFiSjYedv3DoLYzVNLH3RCtPJxfhjhFbag8pYgMrUkwA8GYN4un",
  "key5": "5M4NMLTKSHh8RHK5BJorXsEo2PRUQvRHhefTZqdTQ9GNzgtd27jnXRokqRwidK75EiBjrTSa2FLLmHtPiGQVMjN",
  "key6": "4iB7ubLJn1bsUusFg5KnqcDJ5m2pJ3mAYYxZQishkWrYH49p1qKScsSxEd5sguchXfCXpum7buWv58fau6Foo3G6",
  "key7": "3ktKyPkGkAy7PBad89g4S8hMvgHYd6KF7gYDFfrcujRJz68ekb8M6bW75DkbMF7kw9YJGq7JpKX43e2cYkdUcqtp",
  "key8": "5x7otiC4vxoRxrK4Mb8TnwV596ZAgcrkbP3CysuaMYn9mokVJQ9k9kDNA9fZUBvLoXsLXsNoPB5BaUNcniR2ab86",
  "key9": "5cBYApCc62xDbRnWd5WZ4gAUYYGFyb5pF2Z7jFyBWo1XiiNCjnZnxudTWzhDDgm4cx1jJvbuFNda1QANs6cF9n3E",
  "key10": "4Fkp3nRRouGdJJp4MYeeAhegWhGod7EchWsV6uRKvyydhyZS1xTw9nheFYu5zQ1CEELGQd1pyxHvuxydTLUGJea2",
  "key11": "3cmF22kEdDF4Kd8FW2RHXnW4RfN1eryVsKhXG7FpMyepZ5PvgbuiMdDGqYtdcGsfirh6TBXpkAtNEQiGnxzzDgrJ",
  "key12": "3Zr4hpGPZ4C8C5TXdz8VqmE8UcVRKBYbt9yJesJM5HEdJtRdZgD9aENZRavrbmNNDR8GooLXWuhd2Q23Yf17arrn",
  "key13": "5xQY57cFJgG8qyH7xRRashYUAa1yeThdTrxjASppJKuzJNGFvE8dgx4rFVGfdwKBSC2v8ZZnde5fV1Rw3qJSf6zE",
  "key14": "L89XMeBQCnDQAENyuvBMKRoZP8ACJV743uA1iE2tfx1o8wzSYFF2LEjpK9KiYAnLVqVLZgAy2T2JjFvDTzu9Yu1",
  "key15": "7uoJt1uUPtMQG2GwBVByKmVUMK9b9u6ED1zivnekLyu3p7VHwDDEBErMsta1Rpi4d6K5oe8xJv4tgjz4W94ALd4",
  "key16": "3wNhaukUb5pdaTQcQcsj44TtPzXWq2x7it9G1EHD2vMeru3U5RLpq8z8PUn421YhqUa6Zkk7XUhukEbHByZtNq7T",
  "key17": "2rVwKGkJ4dciNhscExABTvio559aaZgC6uZ8pP7cX9UKpZx6RZ4SYekdjaQrV8WHwhkTRq5se1tbooKATyUKRGzo",
  "key18": "eUeRYs9yMmU89NqU62JKqB9ixAphy8TdgqETbQd4TYR2TVSHNHBZLgrDSYDTK6vUitGaZej2VpQztsEgni36aiZ",
  "key19": "42ZSsX1V92anrRxkxV8hggtSRUd5vzXMocXsGqsXeptpqkUWwsy4MsUP3N59boCfTdMpganJNx4718f4cRBSPrip",
  "key20": "3ZiTy24heMNYvRqkTYGNRrjX7nKGD8Gjh8d2n4Fjvo3vNTgTFdWrGeA5qeq8Yw3gweVhtLaKn9AugtErWQui8Qv9",
  "key21": "a4JaqhGgZ3ZnHKDCZoRuPMUooxm8z45UA9U2niz9x7X6Z6uDRRJKUiPTucDtauZdobvPbKpgZhcaiF9mTL1oEP4",
  "key22": "4Jv5oebFMLAeh3Fb1QbomEBzrB9bXcMEhRe1Gob5Pw3ZuL83QM7p3HRJndX4onNFvbePqXHqX2fPARtzc6yhAcHG",
  "key23": "KLEigNXJT6jYc1Ln7k1EhRA4D5LZ5ZrsNDHgHiHryqX3WUfixNrPA28TGHnp1NUMhKKJRpyQJhEF29ekF5f3PN2",
  "key24": "3fsz2gkm8GsJWmZ4Xj5sR32tndhDzSvmT59yCP4Hj2gfYeiUPSVEUtHcpqM1A2XmMTkWqtdEsUMV3dgBv2LZFQYn",
  "key25": "2PQ1WWVDGr13Da3Xr8VM7W8ij8K329FJc1iGcJgK1u7MWK1gHNJzGaSBXZEeKUssJqwviY1icyXcCmx6aSG9NJMg",
  "key26": "5Pb3hfnkCUFUnhHZiPh8CavL4z1RFapr61UJJbEjKS18JWbCwKnU1QGmbCpXZS1yce2recQdVuQE2eTXypAvL9t2",
  "key27": "512J8SZLb8321THV5vzpz5cEDD3FkysNVgVRdWYe5sQgF8sWRntpvFhpk956SZwVMqksCfPTj4B6p6QAozXYVZuS",
  "key28": "dNzvo9cXVBHqQL6LA5txc6GrSkGmtc3HwSF3o7RKhpCDdQFpkZp8n2thSywEnZEraoDx65ezjcmdLNyQh2es89G",
  "key29": "KgVjBf4LoF31ntuVQZp3gcVPpTT6j3wYtxb6q4QtskFKmhPPebNhQeNtUibbEkhDUAeLHvmBz2YfWUooKSLjyxR",
  "key30": "2oCkb6JtjMgVaAfuvX9aDhWg3BAsDBxEcSKbiDvCjptjWA1gd8E59m2MGdY5ueiucA1bTXGMv6waAN3Ynfbzy1SZ",
  "key31": "SnZos1Y55h9FjRjygX2beiofHU3quNYSYYqhknWYVyg9HevQq4uohzfqusp53QmNzxodaLrde3yaMWGgUNSBv74",
  "key32": "3SciqmZvczwYRNLXGiuozP9m4p9pC2SNGcMKrQ23N26YQHa6wDBfGA3PP6yPSSPnQJrehidGa1JrDJBa4ncEEzmD",
  "key33": "5xujhZc3k1RAFf332MYmqysut9FUmuhK5sa8e73Rtb16aAYXHwkmUSkL5pCVkXJWkvWaF6iKKJMYuEcrEJb3VT2H",
  "key34": "4PB2Nh6trTCr5q3MjWjHQfoPeVUzoXqXqAhWSh6hydNmobh41gkfVXWg51vxVogNsytiUeerse69fN3A9G4SHLha",
  "key35": "2Yi8eTB6smVRQjVCWPyj1UHsVYLgS6nmK1pW9hA7yMyqiAAsQCSi5dRY4Ut1C1A8ir9BHNRYKKgYoLoKquqcgPNK",
  "key36": "55mjee58hRZYGTJAmWKEtE2j7s2ZkXF2vtps6PRtse49156r2UhUvFJ3Z2C6fX67ZkwjB6EzmUPskzDHvMJMqeMS"
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
