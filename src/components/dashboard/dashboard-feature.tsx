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
    "4gogDCjcYyP1pjzX6Wbdr2Luhfr4Pd6nPRoii7tTN7C4y6WbXjMjfTGWKQ4sedjaQkfjG5aErB3v8PRYoo5xo3HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKiU3GSxHBvLv5sSVsNtFRTBfPysE2XKguqQo2GAtBZcDmwEFSe67wszCAbS4rDcsWwLwBdTf5ghaNTQM71L1vu",
  "key1": "3eAT2x9qQfgdtnvY9U3mbKDwDSpHJ9JGqdoNR4yo4PDptNB6tAVqwp64wDmmhD6MLKGDn4YjXPByhS3PJp1qB2Ch",
  "key2": "5wmB2a4ebTu2qdYua1o88bUGjdzDrAbnPsM58134s6pxV3SR29mjWuUHPvtwsJS27fXPA3FDSjtLsEwdDfbkDYso",
  "key3": "37FJ9ZrssqpNmYGUMDEm1h6ZFQkmoZ1CyTjtPyRvhAuChHC9snHLqeeEDQ37NoFb4QynMuxJLbjbLUJdWd1W7TMp",
  "key4": "2fxocDy9VzWR6qp836SoX5Rft6PxUdZY4qUy2yN7zBavfyXtZaxE6VCytFK7J7ghH4VDLbF7NMG6GsXRzBw1aVPm",
  "key5": "5d1e9cXFS3YE4D5k7mcxu9QycmjU3ZBgR4sjDeuh1HjMRcVxeBZEwTNeBA9ufjvv8abBbuWPHL3A14boK92x9DVV",
  "key6": "38ty4omuGKcV5aqTy72uzsVDuuvGFfBuTVwLofxf8e92dVvxULzUgjuN9gYhGZ7UaTQmUNuWqeGZYYTopgc9uEut",
  "key7": "kEutPisaCGq4UDbksMcHKyQBmGfA6WuHdWq8nG4iUT2jsNRSv3zPqU1rxZ8yY1NMM3BiDpkKUepFnvo9pCnDFX1",
  "key8": "4zET11FBXXZ17sf6CTdgaiKUukxJk5axQd3B18cad8Xn8PzQZRWwXEaGc4qMHf3eYSMZ89gShrPM7562wpVxAuKm",
  "key9": "2b2eDTyoDyaws4JmBKoRdFc77mcibnCmoAmvRnMx6eZ7mVYYUV8LdRdEPwuk8fVQVowduAKCLvbeY1HYQYi5oeE1",
  "key10": "24mBpVEh6UwXzHpCCTf5bu9tbVWLYdUgyrrqtu44rMggrsQGZRJ3eSV23Hwpnx95fuG3KYKdbcJnLJWu1tqJCCV5",
  "key11": "2vqtBJaecbPePNwd7vr3BDFApCR5sgTfmDPtmpVnKBUDjRSDqhEFRfXxRFtzeAN8z7muR6kSzu3nzv65cvxyh5Mz",
  "key12": "3GeeCu5rsoYH26FRD3nL2jUhUZxD3QnqRZjhVKvtxqgPW46sQWiGsaruYgXGCApGrAM9WPsUHNFwHGY5PPBMThKR",
  "key13": "ktomjPMTCBEuub9aM6KegGEC7jXFypjbkLDi1m49Gthmehm95v5CL9RoexfsNkaD3yYDxz1HemWLrqH75LsWvsn",
  "key14": "Wc1jcaa3xkaRedVfvjyV5DtreFv6drofFhetxWJkcwnS2V95VEnYWvZmGjpJEjzNvMW8VmS6t71DpbCgkNvQ7qd",
  "key15": "4kbiY74XaPRkbQSqZW3m7QVgAzy3B1hH5JUR24eo2yrqUL78zbcCgKrQysvCQSgy5kHhCyr5LgJwcogB4VkDLJH7",
  "key16": "2meWAuGb83e9uNhXRjxPQ8qaL9bkDvrpra9zN6H2ZD7wLMQWF76a2qSBWX9Uk3tKUdyJw5NqJYLARtgGdBy2fXkp",
  "key17": "2CbSGgcZ5BZzj9UMpcJrRkpQGHuEwhjMjVaHxE1ZSv71f5UKq2itTipecxZHAfSgPP6D8ZcT2hW1GzSS9jkYJJch",
  "key18": "2tiopixRoVpR9xBzWqWH6aJ1XkcJvfWxj9J7u5jWC8XaipKtPJPP9D55WbyEvr6WZXTM1QAxsHbDWe5pw3DYEJHY",
  "key19": "EEFmL4T2Bxq9PfKYoyZHiGzwSJ7VsFM8eCDaZMkXuZN1k5mwJ6VkWq9sAvDPMP3brkcZga2LbV7snAqRY1JfSvC",
  "key20": "eKpFBcrRCkCrfFN4Fvg6XDruQiPnCrzQSbmCDnT1RGnVu9XRwuxezSBmqyFxq2dck7dzeEu2tuWn3iEoDtFi8zs",
  "key21": "2nm73smHVrx6SCQF9A5Hr6tKyugbh7DVojZ88HkfvajVA7LssMuoAmAS7RQRqqj3oHFkr9WSXaJsxTiZnceXdRyR",
  "key22": "T1q66HNy1qzpkEcKgLcGCCUirFuhdTVy3S2umSv47iSzUUCtUj3U56DVNdAkjocQmYY9KvtDrtPmUzsL7JBJ1ug",
  "key23": "4FamFbGu7rgqnL4mi6mnkKCrpbmLGsjMo6qhgyZW7d3JkL257j1thCsonRBTXv88cWw6MamJNX4qFvqQRC3Hwco4",
  "key24": "5TwYHHnhynrfgtgQTVGCEnyirz3hNCEw9iQs2ZQX5xPdQxMzHoggerbJ4ixaNFeYcGZ22Yc4Wi95D3wq8yK1APRh",
  "key25": "2eeRLPXVAizmcgTkXe4zbunzuhFNuPh85R9Rrmy5qnAbFnbPkdR9Q6DLNShgLgxZwUtX2xX2T5HJr951nmCEJSk9",
  "key26": "bcre2PrazeQ49vgdtnT2dyPL5u9D9hEYqGU95pdfDVywWFmHTHJz3G6ynvmuuBLDuFdzUoA95ygyWeqij7jjcBc",
  "key27": "3TvHBY2QfuGxPD2NhJ7e9iUVk8g29Tn98Dyp8h1Sd95KWdjo4n7XCULcFYN3P9DJHSSvpT9ybuisHACULtbSg34v",
  "key28": "4VSMhgfQGVuVEiLpB8S8LG5BjFdfcNQYM5nw9aSpBTKnP6bV4T4NBYiFpvHrBPPcVUeiXFULAew7EVP6ztDLMU6b",
  "key29": "4ngC13N5fVMRpwgRdgNyQycUXrVNtnHS6T73wxeRd3NBtfZopsVMMY2B56CGojygw8jYiJfFUTEw6MF1TpGy7Kam",
  "key30": "37GRTeMg8dg8AUF5W5d7ifMbKCdyMxaxxRYwCv6YkYmpvLf6JBPqCQLd8F3qzj84pbdpXJ68Ac6c1TdHApHiPm9w",
  "key31": "Prh89BU6d59QqrhvXVjsuSaosKtpT2uc33oDb872hGVfvcg2tNDWA8fsBYfVBpE4Mwyx6wnUDgxu8nyUBY59aA3",
  "key32": "3s9RGPQgBe5wsseo4w87cJysXCMKiZSVZHyHq3GkrZV4GtDzzbpSTCxdGsmL2qvQokyaStDVKAqV2XZPwNXFfQwY",
  "key33": "2JnWpHRXkC94r6tTypbBkATfEP1eGJDYf2jxJTD33gMmVoUz58GPoiux82BTHYJSzPu8rhsrzkGe2V1G1Ug5ZwAF",
  "key34": "AnJ5zqcfY4YiDt1YFcfoVVBZVbterCtAX234Mf48vJ6AKgj1UfbYxXBtGvf1mz4N5oHbTh8xNXTU9iMhSooRp5B",
  "key35": "5HhkiEFtuQyrw3AgWHTs9Crm84UKHQ96uuxnQVmLYC15iwbW5Gam9AZfRTWCyfi9BfKFS17DoFB43V8e51gfkzaK",
  "key36": "2yeqD3ctbUUwKAikPvL8NEETavAndZ2cJzVdEvovtAy3oWMVCh8TwjH29BQHQKPjW1dwUjCfNXJeTg9CY2QryMwc",
  "key37": "2pghsFST3GTUxrDgEkMyBXvdztWhMMzCrXYmf9BsLQpACKwfStSd536RZ5NSY96E8iVR5LpcGH9BqQc1QcmQL13C",
  "key38": "3To2Z7fvsa7T2qyUn13wb54GvbdsV6b6X5K6X5ydgwdCwG1DjFP95H3AGKzGPrios2qPoXeZ1VTakCwruce37T5c",
  "key39": "129BSBcQuYUoVQsYb9KMc1kNFBcTYSizLpaUicP5v8dTzT4ueEzkq9SSn8LAFr2XZDYrUp59Rt7oY5pEoxu1EuWa",
  "key40": "5D5J5U1f9DJfsoJTJjc4BgdwJbqfefZyhAXaGkQfKtsttGNij9i627fVVEsY8wyaKbAxNESw2Nc2VVgqE9jQBjTT",
  "key41": "4gGpiE43r3Wjmwu5wCiGwttd4AYkojXzPSFwF9fPTW8rhjrmbyhfGBCFaDdKgsNwZJ2S2Ec1UhFYiFEs1qGYirm8",
  "key42": "iiFLkEgvExUQfQRGtvKZRryvdLWjK5ou3gt8VMwqwwBHnzspsS6QcHcippL3FT6ATS7Pwdh3oteXFxnPpgVorWQ",
  "key43": "4Uu1F4D3owAeXhSiq9FkNyzd6HPdELzSq8unGZLhnjWbJ6BCJfZURvFLAWyxbnCW7BPKvWUcZ1q5umRaex2qnY8e",
  "key44": "2KuY7EwNaq5zN3HmAFsg6r9N1fdsMfD41ToF7aMqszrqT9K7eFr4GD3gS8wx2LsMyEv5SCuTw1EY9qkZJ52nn4Se",
  "key45": "43QBqMC1WvLTAoCWez8GL3R2egsaJ3LVUMxziq2jSrRpJnwYqC7CA8a2MmPkEH2dXA4W1x8QtFNCVqGzhciF5aDB",
  "key46": "3PwyxaB7GpwgbSxWfSZ4jrGFDEvJzaDUWQESNdZNUQMynHgYX9HKbmhu3MUp1YQavzVz4JFPt5PospQRhW8MmzUx",
  "key47": "5SwjnNRVfr3a5dzdUGWPTLMr2fs1LKE6izcJ65M7gUYHs2Jnqp8prr3tn8gHjJvHc1xo69Nbf6LTkFPkgpnrwYdP"
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
