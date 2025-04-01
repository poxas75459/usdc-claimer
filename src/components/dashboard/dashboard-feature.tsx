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
    "62p1rgFkDM2vMuin2d6qGb4md9Fspv8GhykB5ypPTKcYcBYhTdv53oam44wBHj9uoUwUuvJJbfmFREp51BQFDFv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6dYHatHT1Z76rGYdVL7Mq42CcN2mp8as6unnDpTNMS3CgX3xnPqwUNJYkhjGhyYZUM4AYUqK4qAniPicyupLe1R",
  "key1": "4vtjyzMaV3aDftRCu6LCQozAz3EybMNxS1bpSAcMdGpaWFZPUNZQvuBHdNfZL2g7UaBYyxtxRrpocSdf5uTZsjzu",
  "key2": "2C2VEZUyMGoeuKSaSBRV8QYR8FqQG64jad9j36oRc5nkzmLu3hvbYC2gKfM2zVSTBdb9gVeKciu752oNQ7rtDaH6",
  "key3": "2gfpqfCKU8f5Hj7amkJvrw14BHxFp6UYqkZyqKmfTs5fJiNmVo35fXWQ96EDS5wDcTRfDavkskjEApMvKA73YbbU",
  "key4": "3xSfPZSbihYwSL5z578MVrcoEm14dXp6M2vAGitumxtzVVBcACxawNLmjeKd3JaPAvPwHJ3nrByLxxN8TmTCRZxX",
  "key5": "5X25pgsVGeEV9JFCxHSNfauDrTgJjqoXBBobq35V7mBTq1setG43rkL6wtmzWiWN1Mermz7bUXsoGTKX2gsDZo6f",
  "key6": "2NYbVe2Y3PN5CrsrguthQ45qZkqTEHPgYgKhwAz3Hchxxpy9y3oUQi55FR6M6GZvFuSZsEzBvcV7TxiRGcBYaY8e",
  "key7": "2t9U2ehkHoyS2DTmHMumyfnEvyhsheekNAp9m7DvB23uBhmTBQzgJY6ki2d6d42d9S2CzN5hG4h3K8quhZnNhC1c",
  "key8": "g53tuG3r5K8ovKK4wJaBejwhq5mRu5UCFvg6oTS2jMkAURC5bkNp93hMtkT2htE5y6MTHNcbAmQV6y36NXQGj87",
  "key9": "66m4gMPLFhLxiAYWkoyJerLJsM6DZ8RGV6rmJQVTBpVD8XgVWPm3vbnm9Lc375nriP8BrH9r5P2s46XGRnahWsKm",
  "key10": "2EnG58xgCckg4u3DsBCqQZH9ocHcWZzkZrEkknhcqYP3oBMyyN3pa55f2MS1GnW2qfuuykQgTmbbiWn9Hgx618Zf",
  "key11": "5A8T1ykB3Vu5SfNkEBcPwjv9pAmGSd9ucSpacyJokNSDMKVCaUpPZ6pMrfobihMLj1LVFqL3JD5Z3CFoCUXkVzcF",
  "key12": "4UpP7XFfP8sXmQ9nnJwRVHXtqaZumoK81Aws4QKeen8tDRMUdFXaCQkCZUKzwEvtyYBp2pYCgyoKR43uNnYWGuk7",
  "key13": "zrCM4gTv9dViqrD4qmLrffKBjpLJnRMNK3aiWsuQYwSFmDK5qNUfSZyuGQLuJHfFettAtFbLepW6sHJFCHYb2XN",
  "key14": "4xQt8KhSrAnK7vMyeSiUg8ToTiTzgMChdPBJG4DsHmBxpQD2o5YymAcBgmcdua4Pro5QuhGqLFUBWNKjCrwwQd4z",
  "key15": "MU2qaLseWBb7CCeAWp9RfJV12DMAUcpsB3GpGqZZRvxrKuiSGGVSZLc4xdoZdhfm5trZ6uRpw4T5Pstwj8M82zz",
  "key16": "4Jxh77hcyDiKNPGE8BaqCTZ7JELvrwnUs4yJMAkDHbVFd3MpSEggRkrZFrW3G3Zb5dvn8VtuCeL9q624sLGYgU1w",
  "key17": "3XoVKbr9HBARHdGpZkanXV1ahr6RSLB2hPrpoMfiXXyjxC3RTBhHWxPZbvPc7A272h5bEaVi4yMD1o32Aa6qhYeh",
  "key18": "2fxrY6Aco79CdgsS92maxXJSJwsXfwCVHZuzPs5EwjjNeJqXkwU7jUJyW8YPAQoV2UFAvZWcWhL5jQ13ivq98nwG",
  "key19": "414KE33vZzWtfV7NPEhEqxZJ7gRdgoVZJgSXbhsMvmZQTukJ3p2otJHk9GVr7BxYum4bUKmNk8jhsbyir57K6L22",
  "key20": "5CkMH1SpYLK9Hf3JY73iCSn7Tq5M4gozkxxqhw4gwYfPQpTgi76biNQr2rJSNkLBdca2QCwzPcmHp92ZDN6PginL",
  "key21": "P1bXy9azg6r5ZuaZ82giDgdKKFwLEsobsdbMcnftHP7UktYkpESJ3rDfSeDbxu413XgABBFX57Svq89VVSkbcGW",
  "key22": "376KZcRaq94DjKUWob33UCbL5GNiF7zRA5uNx1UfYeDwBnvhcn5wTTLbJ9Yxna44Lwyo6TVStMNRBU7YbftEXNfe",
  "key23": "4AtFgFwciTu8Gq4QbvQcXLYHHG6ZKty17EYXUyfohJvEibBSFP8NNie28ztF94Rs8XHmwFc2RX1aF69GEgPhwR8Q",
  "key24": "2FcgCfjza5wvsDBzfxavURdtDqPfLWDC5X7yMM1RauVUvzKTxh91bFS4NRWRoMGoGub8j11SMna5toik5csR7GdB",
  "key25": "2N7SjBMDMqPy5roVUpj4BCtc1CKuU6gg7JLnQ1rW6FWvwKbr63sHjcoaxk81hpDjmUjdrKZcNkdyei9giQCf2Gn7",
  "key26": "63ppWqU5B8gN5YojorZkJ8J8p3LMQZ4nckDyPma6DAfYrwhSwWcy86QmsHPFefDN45jrUmfCn8yHFg2kw58mp2NS",
  "key27": "5qNN5gxJczC9PeTEvjL81ZK3aaEDz2sQo2B4ucPikp6DTXK2cpJtd41kbpDpQMpUAgAMuVpXfMHBTE5btxAXGsbH",
  "key28": "3Tpt1reyA7aFWFgsyRjRA5qnciLvHxZXgW7TX7FZoyj5njeecXXsbfwDvRBbH6J9Bc5RPVms5fY1QrvSA62L2K5V",
  "key29": "5MUHou95XzgpBpeQVhP6kMxk5KpbjHMY4EUtt6MjFbSjzdQ2mKe6PcgjBeqeMEMajGqNa6eQpVCrJnXcZuJWH4YD",
  "key30": "2BHAn3TpYSUiZyXjTzVjB2EgpkmnZMqwP7h36f1wWYL3YJVnAkQWvA7rA3UxSBYqJXoS22mpANAthmMQ2M4JF5bn",
  "key31": "ytfSxECjLU4Yy85H2gpTYk4wuNciaXcEEzTXhye1veyyHsxV6iLbhRzkqV3uV3nGJKbriBqoYqceouTAPauDFSi",
  "key32": "2ynQYNRGGeFXMcALqXx6mEMbZb69j2V8Cfi6dW5HwbFZ7X5qCZzmMnDmSc8tVAQeTBGEphTYAtn56e9gmrYPKrXX",
  "key33": "3BoX64tmaPzgt2y2CZQR9ngifw3mDTTYSvs3KFsbxSJh6WqS4MjMKGAJXwNXLMFSAqb9PJuXj9uYkwKbKwjRbzQa",
  "key34": "3AHRrt26jW82B1jAvUtYuRHLMSg4jtgyneWpc1SizMG79fYxUn7awKkyKJ7rkMEQSJbSYcxtL7PH2YbLyyecU6xb",
  "key35": "659ykwkDuDXTGGeqw838iZ3SR3jqRA4bjwy34YdVSCWELhbgEDEsjCpSP8UcmeLAMJJFbqQvxPohBZizCdEk9MVL",
  "key36": "QVCSH9T7xFvX3dVCWeRccq7VbgKD5gdwt72L61nmLDEkEr1RE2z6ACNUaFU3gLKT8t8vmyWwwsYMU8Yhpk6XWrx",
  "key37": "5TFtX7Z4ZQF5GHYfAWp8V1DVkyMR28f3MFtek8HuKYE755FqAGCNXTcW6766BPWv7f2viruTap5p9GL8mJvq2aBN",
  "key38": "2T4YMzJymnyHEmZu5A5ofaqu51QK8GAWPckLTdqtVw1sfZHuB6uje3az8ni5aiDMohYkHAKPyrAEDms9qYUWtYVa",
  "key39": "5wGAwAnBBcj6vkEAGbHegVqnTkDux6wRS3w3X3jpXtiVcL9h1nBt1XuMUew3E8dW33WYAnymBEx2sLpipdq5o59m",
  "key40": "3nSUC8XshTde6MnCYnynumjoDcQEHJrQZToNRnSLsF1MYDfMLXWWveA83uTy1bsWpX9npkiCV67zUwH78fdDG1bp",
  "key41": "56GVSMJyans74BcFDNS3jchyzYbF311bWdBvifVFrF1ifb94LPXxLYJofXF63d6jjQmEqxH2A4TVjyfxtxZkc9nd",
  "key42": "4f9RWg5RZK6da4UyVv7pkMK8kZEPmWgyaNziiwGBmiJ3qV7pvyt1ZCY9tPjZy5KCgig8fM1UoMxMtL1z5jP8W7i1",
  "key43": "8k5E3f1qYCwAuBcgmTQmqWnnM7yeW2djFposv2KXF9nhNc4wVdqWF8pqKQ1FqzWaykNBuWSSwzJF3nDFUPMyBLb",
  "key44": "2KNU3jF1PXrV6EwGFf7Lasqh5t232havhBwbx7zScubHnj8xyagtC3tDFjPeoAvBbTgfHgSsbhXjREhZY1omYpWH"
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
