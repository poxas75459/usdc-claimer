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
    "WmQgdda9QpsqPtF1gKhduFaYaoAvcJCcTGJkN1kzGKe1vhYh38oqR4R1UxhddpWfJmyXd6BqGmmrGgYFh2kJ6VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2widWn9DN1onvxYpgoS1TG2A5KACs8TKGTmPvyXZQTwd2pnDqMoTZGWrrHGRPdKhBCk1UDufwdFCyvo7AqfqHp2R",
  "key1": "3YguzzBaTBRd7U7VL4XXR7mjMu9uvy8KLa299eRRZGM34NMwhZPqVzViVwZARfxFY3B5emPAQYBbs2VGKsFdkDgJ",
  "key2": "61RCoUPqkSBSwDAubWpeTLNg5jE5ZBnBvFqb6LVAaNUno11CnQAphDBgofvTQZXtHPsvRayhegNjRBLbHqgrmTED",
  "key3": "4PDf2SWaUeVZXsXjTSNXNRwUC4xXiZsWAH6Fm1W9EogT41HuFRVnbMmdYrBj88SnmdLqZ8xNUC8aHtgVnnugAtcN",
  "key4": "5HhGu2WPjdLgs23xyJMSomSzwjeFPqKVetxb17MCD1W9b2uqQ47YQF2ANm4Pgx3mXs9dHPSbdx8YpfqhVaYw2nS9",
  "key5": "39nJKhARgDxbDUsx3JR3rj6L1RgqdMHAvEGFsKwVUwqjfrxHRqkEbkCwLYy8wn3wV8NYyJANZM1ggu8uVFy1Exc",
  "key6": "5LDyof13R2iLx7vMU6Zt2R1kacBzTgsgumCsxLrjkVocmrBoQh5prPycunNTLUdei1UCqkMcBz9ZgaKAJZ4hjxob",
  "key7": "54VKp8aX7WeGaf4sHmn3my7Jd7JJUGEmKU9xPeVnbezRfVPFR8S8WpCmXg22NwHTU67k9ojzvFS8BsxPFBBqozE7",
  "key8": "4B62Rer9uj2mzuY67VSyeakyr3EHr8dPP73ynn4TG6S6SnF7pnHUEfaxByCvWJNwm8tBGQsvvLRtLnfM6Vur52MH",
  "key9": "39J6A5uftZQ1J1gvxogwJU7jgi9h9ydugdTMmLFGowXDwuwRbtQFeVVafWWZK1UafoFaHg1Gn2yheVMU7phmpjYX",
  "key10": "2zPzfAXWu7m2D9g99Tx78k8Pe4aSoheCQ38VdV6NuEriCEacPSCrGHefbGaLKGjkwXjhp9sRMo7wnBH3KYVKcTDZ",
  "key11": "hMk7uAEjtYRm9HtNdCFSsSktz7U3vsUSb6pP9akzmMVUvtVNec8oqK9qf7AoiYjeQd9zYgwL36Q4xZc6y4bCEHL",
  "key12": "5Aw2YqWNJfnM2fCMSS7k6MgvUA2T5YZo3h31vLyDPpf6PoGnyovg5FiXZMMS1RgQBDAcY6BEXY3DvZRRX1RueMYw",
  "key13": "2DTZgUa32u2QK7FnjXEvawRBsPTykv1nPXK67xrKQxY6eybEZejU6MraqsoaK8TTbFKvoNj9pHVfdjFb5WRNkF5v",
  "key14": "56Ln6gfisgUMajgWCaUcLZKWrXwzwnZxaRTfgKWdip5NaYTFKzxVbmuxkvaX8q6CPxx5zwPi3K49Xuy2gG2SW6Tz",
  "key15": "2EvGagZ9zScc4AFy6x8tQ8ozVgRg7DFTNX1TqJfNZh7gqx6ADR4L4Fx2WXQgQsA81StBVEVKrEYzf2ALVC3ms3Qz",
  "key16": "2YQmBE7PXgjBDiFa292MkfxxFax8Vk3GwK7hhRpPL17s2Zb3sxEHSAQ1bNEVntcU5Xa2aBGti5c7LWLxx4XCTHJg",
  "key17": "4dv2pFRvDRTycf7FuyXvHKwsQr1mt2pYwF6igq7kS23jCitnJetoACQPu14vCzMZfiA1sEDGzEFQptF7osSy4v5z",
  "key18": "3rnToku9tfgEzN9nnfLkPMDJiKzb6HperMtZbJ6LznrpHTWy1BkXktJRMWHozAjUoRf6rbpcL1yz6DjiEKDL8Hyb",
  "key19": "2BMmVueYCLURnvx22weu9RvAAVo8knhbpYXPr1zjDHRsc7CVW96FobrmK1XbdEQhW661LBNqe99EZC4pMTT5F6oh",
  "key20": "53Q77dhumf9raFpjo8n9CJHkWyonnutR2QqcAo8TB8RiZW1BTW465YKAgL7pbLZS1Yp3tdf1rshyAugfrfR6xVy7",
  "key21": "52j9EPKR8He3pDpHy37LfXQvTwRXZyWAbUZMzbm6fkaSJyxkwARQ2zeSkMYfb39Jyb8Bqr2MAnfWoKRs9pNG2y3d",
  "key22": "yD3UJFhmQSt1eJHoz6VmXsk3tFHJY3QnjzqParsAPmsGdHLpykPfzTMcAwv3yyojcnXSvekNeiWVdQ4gMCrfGU2",
  "key23": "5jEGtQMr9dLkMcnJ5pPbcwiU3ANR7sQcjnNo7tYrLiLPbyEzrb5qBXDPTokAwoKkigpR7sRtwi3KU2s85wyWzAkF",
  "key24": "4TvvudQ1VVVdNNjWb2kWnna4jBeNveik48u2g38oC9xKyZjYRquX7Ka7ddvQMnCvRkT3K1FQvUYNfxnNgX6A5T3d",
  "key25": "3Ju88w6a9Cyhf93haMBU9mkEbEf22xTGEACkj5viJMaExAiXJd2WZYoUFB2Xow7NMyuzaZJ3Nadfh69A6ALkMyBy",
  "key26": "YWu8JxNhRVZWwcfR4VYvpHWdWcvMTRMtucoqLbcN78VYm7dLMAQB3TdCP5cW5JdpHvMAudiky4PVCKrxdLEe5uy",
  "key27": "42FHTWoCW16h4GL5U9nsu3CTS1BnTwK8ER3JeT3cav1LZqXp3r1Gom8LR23LZVuG5AjPFYL9c3wshyTBjHdU62Kz",
  "key28": "5Ti7jG1MBMwU7gbCVHorpaUdUoZ7oMsmY6TDBVCHJb6WGgQAT6yyGXuP4uTjAK9xznKG2s6DSgipiH4V8tMGjyz4",
  "key29": "3SKJW2usb8VgbTj7g4PchU1WDXF1cjtmMASaBRTrLaaKzbZFJB1UscYpvCKmi1C69BMhaY5PKoK8S7uwETBUcX6b"
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
