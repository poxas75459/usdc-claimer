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
    "3LKjEwb1iDurAbrC4zvteBgsMGwYT77hGW2BegARGMms9C4zBSfgwPkiWJeZJ7fUboJmoEYccTsB3mFrxEFuXrTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVDWTPdqovZoFXxUp8f9eJTHy2d296nMARF29bKp6QCn66DX6L6dNdM4SwFm2yTjmSSiUUUjfz16tHuLomaHeMM",
  "key1": "5W8RE98McNVjrfDbs8axWZHujaqrPdZdczETqEdrpfdKWHk84eXiydTmkBbJUpLjNq126eHbhKofP5tFAequcjXx",
  "key2": "HYabWdpPzNaWmXSUZxfzs97ppNtc6j3vrL3FXH7TS21dyS8xjHTT8qzE5PqAwwMGUr8VppeuEQozFEs3ZVLqMFY",
  "key3": "4SPCzKTJphAiE3tezQqeZczmKXiEpzPQnmGWqRPQBeXQRN5WaiaErWgptbzafATBffFupgwsL17hTx61kdqqDY48",
  "key4": "4dfZ4qm1VuXAb3mBQ5FSfRGUEoPavRvNgQZDnGGqbL7tGgYAjEeQpJKmmcyctg1SNAY1Xm18heAVrGzbpyesQjx6",
  "key5": "2th8QxsZYb6jzGrmPzu7FiPESHKRwGdwfyBtrjeun6pHXM58UoBBbB4p5NEB5voUBE3U3NkJ2cmtbHKXJeunQT35",
  "key6": "5xYkxsENQ4NxKTj5vhGAqQ7bCUkZD43VYGV66ZYwWTfzuVPQhBvZoMBnahc2jwvh1euDPNqDfMXpFieqht6HPHrr",
  "key7": "4rG9t5i7Y2yfY7NeyYLANp8JM2aXRPDZnvGfkXjtY8SrcJJu9R1sreq52poyrVLxn4cKJauLZf8BZWNBAfAM1rMy",
  "key8": "seFRNkhzKBdnYhTKoL747UG7LEseEnX3tErPF1jc1aQBWKSKgqWmakvDbX6BJBWGgSoVgiS6FUw3RfRcUJ7DpCU",
  "key9": "5FAap9XEz77wQjAMXTDdqpzibzNgu9VcyyGF8UoBwNrxc3xjVzL5Gk8ZbxzoHPpXHZHFPFrN6WquQ8QmjWNfb8Cy",
  "key10": "7YdPV5L2a8ibfJhPa5mxTXfqjnwXs5k7hrBqFvDGNZNgwaKvTxTg91AJNTvkcGgbzMMRrA1sM3xCe841pF2L7hU",
  "key11": "2uo7X7LeF8e2Qkj4k1hvSh3SCX1HDpfenFZnLuj5WiWQYvcgdRzJzxuppAnLd97bPMiW2maptzT1CquUVV1ynux2",
  "key12": "3S9dYf6XTh5sxht8yY4eeJhG56AoqFhu67NsxopB5XBrp9m5BooRJfrxDiaotdvtXAAawt5UeajH6gT29958NyZ6",
  "key13": "jYXnfADgKrLtPhZGefvkF4Fkc9xBi5Rs7YNQTmWzLGMgRP6auEZU4WsVdXwEsR7E4vW5mAAGar49anpGmsuRbVs",
  "key14": "4QPKbQ8psdiw2LeqBd3hTyhL9TKzBRzACnjz1PHhZRJ22b1YDiVHzh7iKTJC1zvvPQahTcEpsRdWsuFRGjB3M4pq",
  "key15": "25pF68FLxrPVgUaouJ9EZvzmvND8VzUM3s3mgcKZNzWBSacurjyq4MxAM5iryQpejZsavyiyaEt1tWv9gd9HajLf",
  "key16": "3ksff7YYqXzX3kzi4qCEWD7F6auUEbvvFczqxv1ww5no9zjWFpNkQLzmjhXez5hbq4z6qpa1koxvVHr6wPctohMF",
  "key17": "32cA3cYFWKR3r1GnKShWkzvvCeJjypAmKdVthkFF3prmowbXvKNaei7r7o1togUpGWKTMrSAm7WhuGKqjemYmUbS",
  "key18": "5x438LgodGP4vgaDWoGuMBruVeBF1n1VUFm8r1zGiwH7SihwnaeJUnJjzqKtHkbAe9efM4fpSomGofoZmmNjJG2W",
  "key19": "4yWGGuDz8JEC2R24ouBB14T3iyCwinvL45NhisHMGwr5woTeQYaLAuP9FkmYaL4gSdNMbU6dxMffBk89Lwy3CYs6",
  "key20": "4RKE3iz3s7ptVdHTZn1qZKnx19VmBs9cvfoJj6JM9KaHowD8b8MJkgiju62vpDxCd6e41bLvLMhYha3xADktSpBs",
  "key21": "2jh6h4csdJyidiR4LM3TiaQoAVGeidX2GFRB8Qj3VPP1TTE7XwqakE5rdMXHb9BkVBgv9LRXaj6f2doywqbACS2p",
  "key22": "3T8pGPqiJQybD5TmC9uPQvqFmjgzLz2HuHgZ1UU5ra2vCfkyPLXgz49MSFY6PGdGtZ1PTjrWQAtCHDiVqFpugmNd",
  "key23": "5ySGAtEShRbJq236VGMh6kd5gqcLLJNfUBUMyGE6a14yK91crzKX5u4r48nJfcDK7rvWkqQAvzmEwwp1uj71bFXE",
  "key24": "3xiC7Ux2ALFUL6QAZXatEPo2rB6fvR69PX6Ltp5LbeGraoBF5kGD487eraxF9V3wj1nr4a8BkDWnT74pShtHMDbN",
  "key25": "2qP2TvHMqrpZsqxPbUse3SijAXLhX7D4YAMxEJiPecKTU6AhgPPWnhMnNjTAePojLnaBUZe8VWiSehFT75Q558iS",
  "key26": "56Q3ZdWf7BtmXVarn8VJam8G6chfuNL1r3dsvTMwXTSYrXPyAWFMShrGfjbzJ8kCNXLERappATiKxprzb83dHwpC",
  "key27": "dNdUWXLheFEnhacwhtadTxAm9wTKXELV6uAtrgrp49fZ3yfYgan8neQWU1mFgvq5rbAVY1sELvGetAkc3NGfXMY",
  "key28": "3Le1H8RpE9o2WKtFxLGVH1gAWoNj7ygJ8XKaGDeSk7mkxxtSNEi2U4is3jY8KUEXfu6gkGqsAKaPNsSybfpCABfq",
  "key29": "2Con1pmvE21HWQeXcdJJ7eDrxdQXUexy8NBgcpTev4j3KPH5CAJmBmnQEebRasKy1wVwr5W8kFT2y1WHgj1NGNni",
  "key30": "2SUz6iwb66NG5G675RgEkqNgCm58MvWFR3aKdKkeWLs7Ys6FZMQ8Ek9c6Zyhzhk5yxR7yqeLGAiWszYPV6BhvPxM",
  "key31": "2fZdAJJAqPq2VXPkK7BuENLFBJUX8FHGexZAMLGD8jD1er8eHUyinK8NCnwT3v5GzWoRn6Ubf6hwrervtadEfeQm",
  "key32": "xDLVR27BAEFAW9e2ZPwxmhfg1M3HGNtC7WxNjjF1LjEzh9HLymRY4YBNDkvHZWpj7EAcDC79bPwTSgtrtbTpHHS",
  "key33": "2y9HAg6kDmoq245hSCCxU5PR4XxA37gf93au33AnbU69tnh4mvzpYFwjNJuSm4872128nMrawV8jStvy1RPXhQ4Q",
  "key34": "51tVVg2xmUVbHE2LjhhXso2Uc7yAUX2XNfCS4WxzUZCiZMaYLgXEvgCp8Q8j3ktXBBxTCUfsceiBSW7ibwqQapQN",
  "key35": "iaC7iEL9dDtCncG4aW2MdJyvpWzGhQwzswF6F8TzeMUhHu6VqK7UXoiT518ftZnErdwi6Ess2Vort816BcPjeNS",
  "key36": "HVcq7qXg8FmrdPm73sos2jaDHY8k5WitmjUqBPW7nBpxDczj8pwEBNTrKzeQa7fZpRrZGf6NqdAirAYZ45HCB4t",
  "key37": "3YZF42TktxsyfZwJnY9ZFu2NHufoY1EW2diiAooU6S4H9FoUbFAhg1RAPfa7zVFyzDfagvUCPFHfekk6JPCoWWt1",
  "key38": "4aqRNio6XJxbCcwuTQmYVppQUVxCj48bRm7xHe2NL57wY2PbHFKbWBuL6KuHeepieW5L5B1s8qjQPd9uQydm1prU",
  "key39": "c1xUWGuWfFbs9FxfLRDPTnth5cBS49XSzY8q15VA1wRgyFwffGg7cEQi7YjbeNcYYKQgmDVPo6WPVPoSSEjURGU"
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
