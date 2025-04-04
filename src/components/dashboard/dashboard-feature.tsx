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
    "4FBtMa9BpPcCwvdAZZG1bDNSLcTa9quYx2Pyrg8L8gVxNktfsH38AXaB9QYkp1PBBCBy4pRR1tRTDz3QGb8sHVv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vd3ALLzWwmKnrZMeuSY9F4ZVyPCmmCTdhAYuMXgYcTNNDbZkyTmcUwvJZuwK7GngEBadFT67GC5Rus5rM8N4Yee",
  "key1": "42QnjGikx99QNwkhJksPB8J8purGHvCYkbzQKHQPhnwiWpHAearumtq47eAwiTNFGaScKpML46wL6wDU2oYMRpZt",
  "key2": "51ii635aH3zSqUsGSeqHJf9SBPg5Uat5E4FkHUMqmoadjKxzadLNSWGUiKv9EBgrFgdX1dn13msMiEoLGWnKo6u5",
  "key3": "4XGrJ1TtUJddubjDwpKYud9bVN4Qt76BAPgUfvz7NPNvJgsSFyinjBpXmDnZo512EqfTk2rgFkq66wGRfnZmyxE8",
  "key4": "FYcGjVAHwQVE9UfbYxt7KyPniUJ2bhhX5xNFqvJYPjRUmr8bWk4bTfCZ7mzVrJkmuDp7Y69KAYDDZPEAAFruk3r",
  "key5": "bJsktWENvMKJ6VdJwmn2MQiycGrmSQaP8XXWBeUKYYPttE8hautiPT774WGtLYQBWF2bPKicR68LUXkA6HEYRCh",
  "key6": "4GTABpKjHU4LkHu7VyaJJvv9isb5zqjBGY8jnLbdAF6kUPhDZRmsw7rDVSgqTuWdLLYFhcVDjLu4Yh4ocgoen6JY",
  "key7": "61s6NSWXEXtoDdQ1sc4QpLBdocEL1udEwe4LCmm3rDh8kHKWCtuwocaH334qNhhhmfkYEmrcURpzYzPimLgKMqVg",
  "key8": "53DuEjHw2CqF9FkPEgB18m93r435LjjqB79SUB72Nv1GsrRfwUBs8wyX1ZvrhWH9obZDWFKDNdLLChbUbNJCuH7o",
  "key9": "4bzPuFK9y9nyfBuYrT9BgjuXJeypBFTAeN6oKmzdsKXF3NHkFKx5vYq3GU79KxkQhFZ18So46naLAC5gpPuhBrVa",
  "key10": "3GUXzA9UB4N1M33qYzYM3QrGNMR4dX9NQHLZtB8Qqy5K6BqpYGMLMCVxamjubm8Sg9nKPCQiaZKuiQWo1CwfNUmS",
  "key11": "36knaAdBjSLRyc8aSp4WhBpq5CSrY64sX4BXxv9Aa5GB8gPwJkMNHQPQ3YHR3XRij4DGhvm11MK7eHLhuA17tfQF",
  "key12": "rDFW78p1XVXfWBT9CZJ6aNK52SHUmmsQqWAjq8CH7JgftAPG9YNjEAorVShuFynBRhMiWXiSvksZr5qSvA4CvFL",
  "key13": "2V3pGBb8zakUoVxT7qRFsdj3eAwzMpgmSDzxixaYYKC5S4CFhWnt9kEkw3kQGAMCgk86hzrHJWWEwGtFWcRK8APK",
  "key14": "5PRBvM8WCeFNYaRuKexKC6f86AFejQ3p7wipZwM71Ecc1uhak4n5HYrmHye213j3ih2jet54iSGYiEw4Jb95EpMf",
  "key15": "57pJz72Uy2cAkFTNfSNisqJBDX6Asbx1gSqCDdb1i5fyVNoubZ8AKY9Q3N1t2bhpVrfxzBF8ZHkpN86Qijm4579G",
  "key16": "238A1Q6p3cUJKJqihSCSGPGE6zmfv6jGh4GHqroXhChnGm3N9gvZxjiQPZin2ksatcLzjHg4VD3gCX7sRxPaT6qj",
  "key17": "KygzB5MM33MXXUm714gzNKuJsvneTk5WEKRybzzSiM1Jr3MYsmvBB55YLEWB59L8bwQzf4GvjxrdFuwhrdLXiS4",
  "key18": "3X9HRdLqE8BogAXserxFKJFKREHhX3ShvhhybdKJ9cqEGjHxdoTqqeMkLhtLQLFYt7aWYiRxRJ7B4zfo1mfookCo",
  "key19": "3pWFTHJY7dz78vBin4tqnzVpQu78B3urh51DC2qWsXuLne12yMmFQBGt84XtwJWshqWHRtiNF5VLUAFHqQ2AYWsk",
  "key20": "4DgyKeBcWUcRiVoh1AG8h6TiKUXzEqN8CK3A7fwhsceoB5xJvfcr7DbxiaEdPgQeErF1mbQSTGdxMisbzxZhX5to",
  "key21": "28hXFuHEpBrWewXHg6DjHSu8z4CiJLSSArv6LdeQmshQEk6sioQpccxg2YvwRDvbEuz26Xb8FA9EkgMw6jp1VWYf",
  "key22": "yQ77RZrwvwmC7FjrjC3PdTZPJxgGCcExBHBjHN9BJbed7QXU6J6wVDScavYrzNmNP3cUtvBLKQPvNJsafEpmvc2",
  "key23": "2V6iDdEiFSnSxGMfYWVehF2PqcWduJKNb144MvJCLMXeqQsBCxwbLu9ZtMEQ9R8bePRKcHgVKcHGZjqACrgmZYiB",
  "key24": "n3LXs5YAw1qzkjLSmMotnXUcdr1S4BAQiGeoHhRVKDPonTzrYxxxuaSu13eP5xK9epSELQWhW61M5QqCYYSvbvo",
  "key25": "61avNb3vdm2vjqzxXqzFMzeAMERP3o9H8md7kTJojyT4pKqdcn96r2kqkXM3C2eky8G24sPW7FGyn7ajmwmsrBUE",
  "key26": "2MjWiRrVKcAK7jbJaVAwjSUBQWWJ85NrKZ3CC2f7DYHbCSTsRd9gbzFLqX2uL3LSRhaAXQe15W5kXA8gmLC4KG9N",
  "key27": "4ae83HYyRSF5gz2Sc7SHEvnv7Uj8nSpR3xbz5V6QK5vNJyWM8hZasKCyNAuRCtca9NoKekmKj86EwZ7cdmchmaoN",
  "key28": "2bhUCUAEKr94CEvVSrL2u7SVmgepxGXnesCYUBnnmV7ab7iAA2s7wfTL4t1f5wdHQFGVRPQS1QvK8PiVYeFyfUeG",
  "key29": "3LD3RJUJXLpMfwwumPV5BPZi2n4STgCmFzdcZfGJSMh9T8WG7XHjrhJLBaCfsAH2JRtFjjuY4rSvR7VHxs9RM8z7",
  "key30": "41EPWxHgqvUfyu3nCWyrc7Bbop4ws1ZJm4J2CjCfuc4D5DvycEyKe3HAXESrsj2mnejP9zrpEUnv5TTbaHxTt1Xd",
  "key31": "jWUtXhvX6Ln8SfbbdKvkjz3AXkaxoKWLusnLdca19Dn5bQWhEWj7JQfJphYcXNHw2THy2yDB76vFamvBfEbyeVh",
  "key32": "4cUY8RjuvvTgDYYUKNHQ1Cgfka5g9StpKgdY88ZujLqRAvkwxpzhwBnaYbg1aiLfMf9KHoUuGMeCy1Hb7qViuFe4",
  "key33": "43Rqig8LNBFz7sEpsC4DXrbqCyiFZz1HfudcpVkmd6vF3xytWbvegTo9UazJGvdMmreVgUAUiMi5Vbjxpdyz9AkK",
  "key34": "3goAdTmiaXh9ctHkm4M9d7So8jcMThBivC7SZLLRnQvk5Q51DVUX6YQhMt7W32DzdhJcbRBjFhhpM8gDqLZkyDu",
  "key35": "QMtwVY4fdyrH7oGjQJzCp87LHNhYbHXX3yFc9uST9BdM6fQKenwxP7g8aJSfCgCPfuCqY4xLJcaLqzuA5Sf8BLD",
  "key36": "5L7eor6tswMYNVQztRDSUaBRfVD89Q4arCbgRquVpC66Fj9Vzh1rr8vTE7FgdWEeALWg9gULed9tQqiqrJgkM7Lt",
  "key37": "nC2DkXmU6oQEh4gcjqsdojAxgmxcwmgb4QSjkQLiXwPaAQE9A9niyPGbM6hxsL8YLDS76qwV9uDzTvNNCaWDhRw",
  "key38": "51TfP8pq3F5ULQrD2AXmpjN4rDPNjEiftCb8M5otRyhrpQHgSk2BuFf2vn3iJp4mukSU4QT931yghq68d3owtFn7",
  "key39": "5uwrJXoUBh2ANU44KwQZxwLM3NMAutztaEBZ5qv4sSWX5BwU5ZAB2G6z1dXktG5AYpr9h9ekZUE3AfHKtnjoT6Z6",
  "key40": "KTKkwH7MWvASHTJ9GxHjEJpWC4D6zcc3oV2Y2i3NBDK6tVwuviyqtAFpH22NcZtK5xDrT9qtycECoRXF1ZgWuBG",
  "key41": "grr3qn6WD8Mtjw4tkshRoz1SmtsetF9qYLwAoAgUKWw9EBKGJ6q5PtubwBCrJdCCvBNty1YqCtLtsQXEr61MdjV",
  "key42": "5pQc4jsgPVSSmxBF7sNQrfDQPJYWoK8ZUx3CmLBckuYWYrwwrtpmmvgu9Ui69vagbDD1CW61rcnc9127f1yeQe6R",
  "key43": "2dxgh1jQ9LuSBRDvaL3aYTg1eTynHz6LGNGqB63TYRwyK9FWJcE6JPm8yN1jGnZXF4As5b3JMhpGkhuGd6vTfnGf",
  "key44": "3PKJtEYguLXpihRzjjYQuBCmKC193MxrPpxW5rBn9QxT3siqcRzjyUoKZhxpWCPzJhw7136HQ2vxFzeWDXocBHBR",
  "key45": "3LLq9koq5PxEwcV1BNEkuUW1KRvQsa2yNeHDtX763vanUs3SPp2Qh5TWeVh5jwxz33oapdwDhCXJEfF3A2jk8rur",
  "key46": "KFCW1VVBf5cJV6d4z6goPk77etfcG3eU9wGvusrimLsUvAaHeM4J9ZVDUS8AE2rmAh4kFRDM2CqZhkhHZmSEn3w"
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
