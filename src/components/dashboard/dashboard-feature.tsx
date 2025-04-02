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
    "2YbF8DdVMYEJMKFb2YBtyxLnwyYhaHYgnGjiKQPPaGPk7iaMWGvXBe41qqLXReSLvPHWpQLuaGUtMo9LhQuryCGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZ9neM3BGbmLtmEQi8KCshWfAchRhmX4T7XP3vNtiaZBsh5KEyE3Y7EqrRtwtoo1SZn6hFeuTEm3RGH65PtoRma",
  "key1": "5VdaJcBVom4KGnzkYKSD71rSFzdbyQnNFqmo7wrNCLJNffKZdnVPNow9RaBtnR57eyUB2sPwN7EGpKoYVQ3FDpom",
  "key2": "66oUT4jHAfkTuW3xPXbP9wtwUsKmAwbyxh2MsZ3DJZgYj8xCMen21NrvK2e1WTu9Nn2Dcpk18yPUm6SU6qG1mq5z",
  "key3": "3FASeFwqWT6EhoNnHvYYgRpc6C8z62H3BiRWYZC1REiqHGQ1UVbz1NCK5jv8r1rdbWVPAJA4ojfjjab4XRQhdfxq",
  "key4": "3LbwZeTimaWByLyomJ4uKudkaZx7n2MBB8tDtfFVMxrTatm9XT2jq8MqeeyBR7rVvicFjXBRsn8hXhygAeCMuj8P",
  "key5": "tgLvBzfYGFRQZdQ9aZH92quWL848UFM9zosmDGdUDcL4qyCR3ucHqt2tTJix6knrUvTJKstM5F9RWTaLCrJGYYd",
  "key6": "4BzyVbDZxoDZUY247CPhRXjBDxYBTA2ZsWd8yEXidi5Siam7bMcSvzXKWgd7SVz6gi6G3rb4X3LPecBssrg1jVM1",
  "key7": "3cUkwcGGjU8RWogBC72gET3zYWjn2n47TouEjkkpejVfBtkvQryxvzxKpDRuo4BnDF2hJj2FYEMaFMyUDJsP9VBa",
  "key8": "4yLurx9myw71uyAeevJBnynKZfLdESfGHtikc5dBn9EGLWFCjqSqhMD4WVG1oayoGvBvbEb8fjpccQFBi4Gm2xiQ",
  "key9": "2nKki9my2WBXsXFF2g5nCTurhMhqt6mep8v9gqk9mSkvwTFuwD8S98zd5WnAvbsrrvvSnjAk5umkX2ZLYsFiC8EZ",
  "key10": "5Zqi3xe3sE3HymbaJxVEzwxGMuXXPpAjLgG7wJTkVpgLycNy4Gns5FzsoNd21MGNCvawExaEoDac66MiH8tKY9iy",
  "key11": "4biQp4fup81bih5JCFGv4pUHwQUd1k8hHjZTWsMsBpaDMT7JQD4avhob6prFBdvuJiifVte9QeubsgdyJV534t67",
  "key12": "tFUcvn2aHidq6u5XNwA6Dq4HNpW7GqD2SHsUruAQ6fLcWLNNYDrSbjzvyfunnaFW2waWeb4xJpQ8eXwhkeGTaHU",
  "key13": "4386WGpXvArotv2nf2LDeqBVehqD5wjJ6J2GZf68ZE6czgWcn6dyCi9ko7XAhYBx8b4uUtZQTtbyLKMbuhRf1Gz7",
  "key14": "4JQdvrk5cjkwyriQWZJgKi1RQy4i5XPLR5XgmZYoFtJU1CCFdN3VR3TG5Atx2EvcVhhQkkSRANA5Rk46owfckLNM",
  "key15": "3nyXHcZZ3YCkyTZHE2BdfTbVzvxDQdnNfagGkeTgkpVbGs7qfXpYcf4q1TgoECa9hGeirvw1ynPMj6RerVR33zSG",
  "key16": "3NdqKpaRWqf8WzNSN9PMvSYQ6SzBYFGvZjL6ACu9NbEzWWrXt8DrndKQ6PNjJcQjEdpWrZYqxnQ2hWWEpjqYRNF2",
  "key17": "3ukdChwyrEaCRejusHMEJXSoU8Q362eubNUZNXtjKqg7NRurUQAbJBychjtQFiuEtegW5NpUFg12N2gFtnbjmQcS",
  "key18": "5dBJXe8vfx5v3wRckbZLqxxLX3ThYidxCNWFco5eTGdG8ANTQan6vnCt3PRKaW38wNMpBwK4wAogWd5kjSPqdaNP",
  "key19": "5pL5WMH1W9r4zGTQs44kJpeSK39Nh39srkMDZML9LQL9zT9G8sSSb3mWxfbZKddu7UaPCHS1uTx6shd6wxpeXfrX",
  "key20": "4gKWF9hk85rprvFRoptDTbYvFiNLjoatdyZzCjLxtPj7MRxWkY9euT73PZqTPZkkGj2Pju8F2tq4543k4pPLXEQN",
  "key21": "dsQnnvtGq7z6fR3g8pWu4DSMgT7Z461AERyXEXhHXFjimKVoTHdJFH2ADjpntcxcqMw78KjirK8rJhXtBNcNrWb",
  "key22": "41L1eJ3gkDGr317UB1fD5KKJLcR7Lwe9Fjyz8xLi3gfxAQVFF7j8hVwvFaRfiBu3UKHVxvsVGwTus9hmkdh2HUkR",
  "key23": "21TYXmDaYvrDvHacBfkKjJCXu5LFHhLKq3ML3hAX1buiLUzTsdu38JhokLC9GBLALMh6h69Ea9gUxfVLhX7kvQ5U",
  "key24": "3639x1Ro9gkkfoGiaw6qckPDSmFw3DTs1b7jdTZdPcPW6KwHfcLU845RKtabahywbj6aSomVqW8zm3ntUxSSBhy4",
  "key25": "48F8rUWKNatfpA1hZ6SED4va6Hh9nLwjEM5jzNoX34g8yPFfEpacRsnY3chWf65JCRX6C5VLsffSJFoW6wQPA1wV",
  "key26": "58baYwpFDYNXueyist2N7hx4gJxinjdMHLwXMKzCovmdnEEYMk5xyi4NGXspV1KD92Au4GRYPDZ3AWkPvqtyjXwq",
  "key27": "2CdFGT1Tb8hyU6tS59CCMVULcCTt3DB1N6hbm2tyFxZUk3PUkScYr9wvDU3S5YjQW4HuL17tTrBWMLaTg5bCuZSs",
  "key28": "2eLmZhAoLdqahRhpganNamU3QMGooSG1itJkeL19VvMMsrcJ3XU7tkqd6xuV7EQ7fL16j1G6rbkVqt8YXzn5gBVh",
  "key29": "65oZu6VL9u5HL2DJpzRfuoKCDbmqeciduvFsUkeoL85M3V47sj7qrT5rC8TUmnv4YzsuWfnraPtvLZ3bG95p2QGR",
  "key30": "eMBABNFnUV2VAtPU6BH9ZAoR1Lv4bTytPE8NhH4m35wijwtVZ49i18jYqnJEzLZf1XWrVKYwPt6vkpUyLf15gXL",
  "key31": "2Xn3PzhowzxGNTYpnJWXz4296TjgmU6AsoqnfAAppFLbiRin1kG9ga3wByoHWvyef9jZHFdqJFWXx8Srm5vnWqGL",
  "key32": "2HfdoNPMMXL5C57XXHTBuCvm5g2bTNDwdkf1dnGEkB757oBGf22tBgRp2gDqsUYmTX27Xur7XDWXwZTUH9SgmjQe",
  "key33": "Sm6CSzQcsKioj2cBffX4i73sb5aXfLrPKG6Qa6vXqm3TxtqZDFYPpUoigPSUExMn2xGy7A6CQYQE6GFxAK3bTYq",
  "key34": "58TDJMywedm3jrittXg5kH4oKqSErujYHXWhJmRbjwZqoDy4pnxKVfJcuwct23akr6gJiDFD1M4tosTruZDhCwCs",
  "key35": "2JK5us1SMV5xnJ68Sn6FMFeSxBV4GCZkLSR77sff4vQypfg6Fewi7WXXbgyFmpS1CJ9sk7UDE87LAkS8epv4qTid",
  "key36": "4p6Y3hq2N3GGRksCiUTYa3ZmVj4qJ1bMVaTSrfxGASwwYAZbC99MpP5vfsbxUgP7JRVKZAXWgb6PKiT82RFvsNGy",
  "key37": "4SEoWs8Abcd27vTqmtjXCYUCYbmStskgnjYSKFjvCFX3DW47yBKuwskeJHJW22p9A2Cm2zEYESLdimw7Q8cZam1X",
  "key38": "2aGTV7U74wuEZQuLg6kNXUPCABbS8maTTUENZZzpwXdZcgLmfLzT8wafuC4HpxYdNNKuv35SettAwvFsjsZsJ95o",
  "key39": "3WbPVffEWJfU6zHNjRLUZ5L9thQ1msmag7XG181YDsD32HKkehBDWU8UqgGYFJAXwdqo28taFMSrLUmrEtYtGYXA",
  "key40": "5HSAW7RxZ18VeuyKtDtrLJaR4W7NFVGAveJPmJVgoT7Cj4SLd8czFfQa7PrUaMJoL7xPUvanUg9f9LMA59RPyRFw"
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
