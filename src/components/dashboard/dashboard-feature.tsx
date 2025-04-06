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
    "4jjHcRxmjaAD4MDNnn2e6dZVw3u2N9ZoLXHnUqPgFQsQRoKnLHvrywTpqMyq2Tph5SqekcJJVPPeBqWF7vPJEuyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rH34XAq1phbEQ2oZpnugSoRaMUF6Y73BkwL6uiRdZJKmTuppRbnZYPqMywhRTozbbrHHoEojYpNiaZfVzJvkZy",
  "key1": "4v1FF7p6DTfgSpEKpABK138SqV6DEF6o24tWUZQ7nTTmc8HCJ9gtQQVXbrfu7e35BAepTYcF6NijkFoCbZPMcPwo",
  "key2": "2oSoAsSdtryP8jfCSfkxZ1eTwcGrAsmU1geEPeM7EcxSVKezzdEK2s5NJA5hE7XKbDxZxSENW125skzckHV6WM6E",
  "key3": "RqCwekkbQ2NzRP2TufN1Zzf8LLVXqGe4z6dpsRQwd86c9D9cag8TDz1RpkK8Q7s6GPfcc1EcEp55EB2zNo8WWYf",
  "key4": "4gRFFnWiuVepCq6z7JZHzgQnpBR4uuUvzKSpx1xUG5T2s2HesXoQY9Qn5CyS63Vq4qSPiCHAU5cgnZ1iBtAJVrM2",
  "key5": "oTVGBZZsMuKJrubhc6i5XsCp5uPa7JimDJneBvy8WZYB3k2ezYDwDt9V7Lme7cNepRwzNNPKU5wUpmx7LEEe6CC",
  "key6": "5vAthkzoL2MLieBcKQB7DePKx8iidXo8vZVY73kVAD6FpfHmswXNhtAxRd64jvGeyAw99BSSr8EmouLtXRnzfao7",
  "key7": "5TZ8rDYNjtUh1Lv53FDVdx49x8U9BybDqAmsUjCJMcGg3FWge8hatCo7MHgnto2W9PGsUCAeKJ8cw3oTdMrTtHHb",
  "key8": "4jjGRS2RdEubrJdBtHTeJQ5n7MDeT8sERf9ZTRiufbJrAcVuYk5734ztt6ZokohgEpWo6jubsKsC21M7uG67Pod",
  "key9": "2JQrEpkdyz9jMuew7JQKbQgrs7L2GNGWuuPi8zhBXUwrLwuoBR91J1V96RQCqa65Ctg78aMpbEcxrruaaSX5fA26",
  "key10": "5EDYJdByq3MhmSfgBmk2eZbDZadmTnMPEuAUE41CYvsZcCCxkJsDYkE8KyuUYRUubRxwVDvM6KH8PnEZBy1xpcop",
  "key11": "2g5Yue3yA8TQSzEEXBBcPUYrfJVW9j5a13LE5Q35CfVfqkqWNs8vr5e3xVgzb6okDGC5WZunEMJXs9sWTHW3Byym",
  "key12": "58B5uqdLE2zWF6bsHYii7jahqMxkpYAQsZZZabAXKwwkpKxgRjutiT9LH71VcQaZuKmbLv4Atn3MjXDiupcqdgn6",
  "key13": "5yzFYBTnRTkoeiX9e4MCHYaveBDbmYH9Dw4tSwZ9L2svYRy2toRdjF2mjLzT2uCcRaC2U9dYPE7BW9BQC7MFgkhW",
  "key14": "NuYgBV7vs7RXVgPXh7cC9WEKPYFntDK7nVEs583HP96o7KDbzDHB1yke3RPfBEqVk2ZhFnBsEs7XcovD3X6HLVw",
  "key15": "3LPWg19BRV5dSbBCuCGXj36HMe9HW2cgipUJtQERgCsRU31pur7yUhV1VMcKB2bXgFggjMS5KQ5PBXyMA13gzbfA",
  "key16": "3fbpXjJopwZ7J611YFh7BKAAVBXVqeAfjMY3VEv6PbWBsM3sLQneiyYX3Vijq3hHxqTLQs4jyuJRMGimi2RZr3WS",
  "key17": "5mAwNcMhnruJ9HCazdGnPtJf8DMvNrPtP6sG57sYaWnBMA7fUMw3wG5bXc19TPECptbExeGKrkeRnNf2wJt8LFG",
  "key18": "4FLTzu4vpSNgo5UzXkHZfiQfcxYFgqAm4gHNKK8pEv9agaTY16gLTVQ9HCJodyzZR63C8ZNEfM2MXz6t7Gnb4DbE",
  "key19": "gDYufpFEMq8vUr1nqc4WHc1LCyvPcYCRkidQyL69WPPmKno8upixZNZfGkGDXfBQVS7jgHUuE3qfJyoX7Lb7Jm1",
  "key20": "38j12U4e12btok2moEqPMhL5NJJwdKWAUsnPUbXtWFJMxsVd1QYoViwiiaMz88hAeWSWXHtLSGiK9vK8RcSykLUz",
  "key21": "2zLjLBzBdHNK7HPZYQhyjtUQo3L4rj9jNHS7vczZ8TAvZhsv3nNYEtSHvm91YcGLpC3pAz5Kwvw9WdPuALUx1Mj9",
  "key22": "4td4nMjYnTc6a1rXxgDTsP76VedJsqsNukETgZ3hHKCCFjya92GuuvsMK9Lu2xAKanrPRcyu12VMQwXL4qFAZEBG",
  "key23": "2otC6MbXDKdxxw8NiKyX2QJbAZJcZbViyeDqUFXJHgJEfYvbhkUxe3vYnX6Vz5Z3AYRcDgWPSrcBJTrTaYRbbxvU",
  "key24": "41XyvXwySaQ3aZbAietCrPeBBEThTW7yu4K6VXPfXxawEua6ke3XDZdvuARppBsTSFj2iDYqX6YS19eHaqL3hMAL",
  "key25": "33yPcec1svq4zkp58VEgK1XKijmw7rop46ytQhoBdLLeL5zbuGzxhVSWR9aVLffdyEhFqKYYjYcvMmXDGeCycyzr",
  "key26": "4Py3gACT1szaWPVBvFkjTkicJ4Kky8Ru6pKMeBNtebMVAZnJY8hsFMe6EqJzJygp4S5kujJBmR3qyspyAm9kJMPD",
  "key27": "h1vXSx2gdVH5kc4wfHF8Knga6yS7vjQn9Uv4JhsYuitn2s8U4u86jiw91S9FXtrUXaLzP5Nank717oY2kw5kPZz",
  "key28": "3C1CEq6N4RFXaRM7fahBoxEorj2w2LgfotUjLxhju336ejFhToH2prCXvgbFyRPNTw4GBhXjm7WNF7hK3o8tKfBz",
  "key29": "35gTvk2N67mDsbQwb983pjZ6wvmCA4syDF2tnA6os4kCkqg1AE7EyjwXWeB4RxBSRHmUxioBDSjnXNTmfyRPQgkt",
  "key30": "281u6mTSmZm4yeKJ2ih1msnXESbGwaLRfCMXzutVdwPqp4vA3akKko6maL3hJ8pPNEjYJnBg1o9GUTGPsb81gPkj",
  "key31": "4ABaJpW4trQVpvHZNgULgvtp9bVe2iMWhJyjkNpFawri9Bohs6TKEVJj8xoUSzGFzMfztSY2xm3Z5Qv4hspXPhj6",
  "key32": "6H6qGhXc3Zb5QZByYirpRj9c1yN5k9JQaXNsEYwrQiCxnXUaQ7vRQ8GCacbnAxDd2zu1grwixdoV7vGqvC3b1dw",
  "key33": "2YYPpdoS6WoqVvdsYq9Ubgiz5b3wGNZBWzVNcWpJHFXkwRZrugmYvYNuFvhRZNvfKFbc86qCacbrxbruwfLTF9sN",
  "key34": "57dcC8gC4axEvcXKp14RKSi8SpcPNqUsvqzKwvvSuPGH9xQyYajgku35Mj1QQimSMwR3tBE73xaZxwkfvuTbbj2a",
  "key35": "51tjbg3JRVihATR9QJ1ih2A1gmmsoZ9RbzYak5zUApEouLEyJNKh6Xt3ZkpxFy8krNcuGdGHT5wZBUmxBxpAHLqJ",
  "key36": "36ufLCTWfwef3ZrnR4gknD3NDVRgAUTte6LLDAoeDK9HEtUdSUL49FnEPfQHBh2uFSNHpr5vGJzbdsGT7N3s3DTo",
  "key37": "5SeV1W1v6ugbKpYxLqC5zgHbxv4rdP3hu5nvWVa5dRgs8hw1Y97sha7orWZz2x6GSQ1MhrWSHoFk4ot4DDESckoy",
  "key38": "4SVvDZDN5eLtUowT8Wt56L35YKxNk8aTsqArLsQVXP6LrW1L2V6noYDg5CzcBX4zDRZbpBLVCXTuPRPynvPpAd8j",
  "key39": "3b4YcBWFdbGqoL11XAZwJb6UFQqVgYxU2irXLPu12uKdoE1poFtKKJc1dBhnzyAZKJtxSEZLqm4F7UF29oFyRcgC",
  "key40": "3vQ8qYA6aJAk6jGPDZQPdFXdyhTJpQeSMr1iUs7YHdCcgPpvGnbJio4BCi3YnBZaFRDZK6yVt44n45APTxoQXsMX"
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
