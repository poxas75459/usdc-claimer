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
    "3Rr4CuHTgviAMHs4t15XrB1bCgyhHWav84zsQutUkEDdT9YCZFfw8PieJGtHNiBWThXM6nJ9NDhDjwruo8pQnumz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCSAayZW4CYRcUjQyj8eDRMbfkRJwDA7ivD5TrbP82ofwHKa9htqzWH9DamRFBrMBS5YhH4SK3UJW6Qd2dVZzVQ",
  "key1": "2nL7Fi1vTD1qwop5L11fnr3UHhuNYGcFyB17o3Bvszg9699TeN4rq6njkJbbahoSkBiWajseQTAwf1DtyJf658bE",
  "key2": "YQfLdiV4ywJap2vERxAhpDf55kdnDBjs5CWqhp1SsXHmCVgfzgiME5nuZTMzQzWayQoNRDf6WMz3DvjxELHWjMm",
  "key3": "5zE5FV7u7uKePXMoPBeVbZFGKHJGGvnjWH2yiXYgBC7JsV6NXAeWpZ5NH2cn6UN34RUbg9jVCsP1Z7vd1XWykXk5",
  "key4": "4rd9wLqopBg3wm1m4tCY2iqZ8g2KU4KPZZgnFaWD9m3aY77RR4exRqnt5gotmr2RhyDutpBKs8sXtTgo2Vqr7awk",
  "key5": "3hC5ePw9xZiW5FgAnMhKm8PFajReMKLzKxPiRtqodgKnFbRBF1ENCzz1pRECbB3v2quzsqxeAhN5iE5RDUvRcsi",
  "key6": "1YDnTPe9NmHgoi1ueomANnAJfk3nviQzrAgR2xCJdT54rvCELvsQZcCAavAkEXMZc8RYwBTQF1daXYfzgbi9rAY",
  "key7": "42pCLhU38qTQJGpEy9b89aJLVbXhXHgPhQTm6Syqc2dv7xbB4eDxyFWfwBV5CnrTFZEWNQCaoM4xQNr6LmbAPKoR",
  "key8": "3qCDS65nm4KYH9AZybGjsN2rBQ1MUNtbESMFfKCE385A9vPD3qoyVgtpEX4z4N9HqR7vFWnGBkakyBESwNjng4xj",
  "key9": "3BNJcgwbGQzmDDk7eQeHtzBT1pcFAcC18YYuzkGbb1VAG9X7vczcvLt3gXjcSzuPJ4SpPeoMUZ9n7d7aiD9xi3GG",
  "key10": "2ZqmoSWFwWVxNmWLFFm68TgNjS5nCxc6NJEongNoF5MKcHW6PaRLT1ctb4Rh8zBNG8bVnAbJk4L4Sj4tvvNAQBsk",
  "key11": "KpwVLeLAYYZtjYc5dRif6Jxw5EWbRDKYGTxp953otV6WN4aJjsaZ8h5ydGWsafWmiKAyogxGYnkRZeo1nYfDs9Y",
  "key12": "5o33kHBXvT9DPMR59y6JEwrzzRF9SS9gpz65N49qpk59WE6aHFLxCdjrbYW5jaixH1pSdTukizZpwTbgJUJRqxRC",
  "key13": "4uXzsWAX3V1aDue9FZcuPcuRyyvnADvtNqEWsAShkkr5ofpvPw2ZW7F1ASbGHix7AReBm1TMJkqxHUYZseV4mekC",
  "key14": "5BHQ1t9CZ9ytNqzCJQRfNFnTjs2Qgwz9gCgfVmtnVhwLUEjVogie5g3FEVRGAcgvMSARcnURFbTBiwgsbprgjH5s",
  "key15": "5Cc3J9Uz3gJNhpBi3DiUgUSV4DbTx1T5gx3zMCx5LkaoAF9HugHbaHW2pijZwb3ziHW5iEavVhZVM2kmZGQtkbjk",
  "key16": "eQHu7znRSGxUDPcJ6adkan1PGwcXw1NWd1nRt8zpspa1821gbJca3h9rWQEWpvPSw16964EcFCWcQgKzM51LaLL",
  "key17": "2kuKBQBC1PRT5AAHWSmzCpx6c2fvonzUPBFja2QUwDu5s1iaZDJDayq8Nd4par1HV6SB7mPXycbEZeSCQjGiLBZe",
  "key18": "5pxKueFyQwX6URjfXzP6YvNbmGZG1yhES3hvAc5uB3gmHjxxxWunw8f8CBAmaVQyEhp95hB9enZYwcLLvikFRQVL",
  "key19": "3L5v9zXYW3LM2tfN3CtcBEwza3arz88gip56HXBTfwcNaH6sYtVf5gRTjAPtMEGQyQ9dACTkv6kmafo4nwu4gpgU",
  "key20": "3YGd4A1omjiepzdiJKJejjFAtWDh1eoUj2sznwTNqciEqDVbxMy7cwDNhJhWDJG2tSutT88hWqvMpiBYCR4Bz8td",
  "key21": "21mVY1SKefKBHQeo54miqQA9ZH7om6uZyJVDu91EbMkvKTP821QeBrcXf12gAVPCz8PKpZQMqx4PodqknDhVjohx",
  "key22": "4HJUAsT89U7bSQmuc43cFRaCVPzM5iVNnT3vZ73UG9pfcoBE2ywdLb4wmjM7Y2NUCfwoouJMFeXqteTjJV7qzh12",
  "key23": "3NS95KGt7czw6HoaLe1tpUQDEaaXLY7LSrKMwtAQ9KCuBz7WmmGYXvycWzDK7k1XvspaVBruL3tG8d5XvqqUxn2n",
  "key24": "3W3NCRiyt5UHY6W38Cy9mcKZd6HGAoXJAsLhPjsK8RAy6uFP1qkbGDyVHAfDnMYvi4v3C2yYTNwtqiJoyBrH2FYE",
  "key25": "63FdnGyWp4sSQ9zr6nqCV53hWzBwRznUNYVXdBfGwiyqWQ7YKyWe51DeviqMeR3etnj9DNbCkNYJmFwyKY9tMshA",
  "key26": "35mHR55fXPF2Rv5Fah3P2kTnoxybGrUqRBRBSJZ5Td92F2FUj6wR5hJW4KNHF2rmfLL9EF157eJSthnF3chmKpeR",
  "key27": "5hBC5nXyqZYMnNoX3trCeSrUH86CELCSqWyg961Ta6Z9w7ErEAd9HZz4qWxVaRPKAUhnpffarjAaQ2a2VC9wvwPK",
  "key28": "MTNmryc8RnTCF8Xi9PnMfbkesRUTg1TumWjzL9MMqbCcwfZ3fbqqCyvv75xde38SgUEj5cD1cAoNSZim929vXQx",
  "key29": "edTL7h5tuW4sFVngyxxhnVEQXCUbbVAYpNirPkTJ5pMHUAeYhV3PcXuaEiGbHgd9V33LAoEgg71xXWeC4WEcmQR",
  "key30": "v7RswJMpBi9T6ThwvtLhKvhVVcrGPpgJnUku24jsTgNoTcYoYiX7CYqgeTH1kBjAEAqBcq5Z1CBaqqmDeyW3NUP",
  "key31": "2cesS3URvr4dsKP5pRJEs9eX1v3WMfSxgXmMR3K8ZdVCKcddeWuieX4bEJCyiCUYNpoycQXBe35BEDUVY192WAgb",
  "key32": "5Qg6aHwfMibkwj87BfZB6znsm2tsitrJWwc7yPspSKhqPSRrNk9XmgsrDWognLdRVB6RB5ek8NokoFBBnkcPDqS3",
  "key33": "3Dr1SomDSgkpq78sWQ19p9wdUciLU9uTGFwbcGe9njtFBjbCJwFzeVhCAtEqXYMwo3FgQxYXQMhVYD7khfU8Xynw",
  "key34": "2FpEcPMJzVcMcA4Z4wrHsPcez7sRyGqEwaK8UGvtakSZi6QNn9SX5Unr7XrB2xG3oFCxeX8Q9wRsaPBKvKrm2CdS",
  "key35": "N8YuBJziwRJ2JU7bhergXTwMD7hqm9m219i13Ews1r1t2SyMJaEh49H89Woe9jyBNVxfqyBwRg5mqHtqx6pRvyB",
  "key36": "5irStKF3Q8FEngjLEAadg5mhnS5gxbhPxre7xM1naRSy3bi4Yu4KnYg5X4W6LphEjYteUWFfAfzkwDQKWivuwEUU",
  "key37": "5aPxQqpgWfsG98yHYvapnki29taRX2YgviU2KV8RGhjm9hHAahS8mUfRHUidE1nB86TybuNMTAjJHdxnizTKqcuD",
  "key38": "nogHPoMRDVgNfrnxQMT1wFmGCo2ZmbzmQ8UCehQcn6xxBNXKJYqCTGmGVnVSzeLpEfhBvduPKndxCMkGHQnau2D",
  "key39": "427p82H3Awp6CWG4sBnsK73LmCkSM1aXqswJaR7uCfuKuJNkgKcjyZM1sXk6kDeATUBxeDMGq5bDr4qvXKertTG3",
  "key40": "3mQ1AbEq4f33QwnZXaNnbsBw4zbnLb9BykH9cmPE47gGooJWAx7dfk8htt5XUWRSbbn1d5Q6GTvRwZsGMdVNM26L",
  "key41": "2rzt9kGuadzcZCnsx7aHW8XPc2Hripu7BvjfvLSMSHguh6Knumfoj1FYHtmmuK9bHeFJLFGa9PzNzPj2ZK6cerJq",
  "key42": "28HqpzFeFA91bi1fhiegfYMbUAZUyA7bobwh4idEksAPkD3Dt1R6e88Cjug9NBASMLuE5y4UKpyE5W51yLY4LhU9",
  "key43": "2QLtoZvoaBB7NNeSMZ38xgLfkJXt2398bkf4ogbeLQeZr9BiCaZui9AJikHyDBGUqvi2HpsK6CVXnzeGt7PgP9QZ",
  "key44": "3aaEPewhB729ErsAEH6TQ7mbcHcHnHJ9iKUpKcRwJiHkDe6aLrpoKEnpoh3hzMEBgxzPESNo8rjhKkBThCLvk2Fy",
  "key45": "5NWt2PjrcPQ9fQR9cTGkLyp9xWBNy4wcbMN14C4wQjN6CCkuZZMcxnbqjimoHLdur3NurNvqGnzaUjp8zdUF7Nuy",
  "key46": "2TcLYDwTq71YSsyuyn258iFzH77s8QUuLTAz9tWnaFinQMbqcmMW5Latfpb9193L6cV5drYnRhAXW3Uj7BopSQHd",
  "key47": "3g7vKfNBgpzdh6h6noRtCHdYwURXeGA2Xv2DFgukGGExnhnrc79nVyy2Wp1ipXkeoP17LzHTXdZEyUqu11wf7g5Q",
  "key48": "jwvfww1y9HBDMKsfFHFpQMN8YLL5SkjNRoe2Gtc9Zg5XquwcMvi6bbB74dfuwVhb8dwqxCT9cjw6DGq8eyRqRg4"
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
