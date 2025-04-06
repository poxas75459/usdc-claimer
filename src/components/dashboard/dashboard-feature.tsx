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
    "kG711KQbw4M94mcbSmMo8RHLmBGYAX747TohPWZ4TTNN7qvUrwgDuYfcghHosBWEJcKQbHdh5xN9HuVxKxwhzje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R9hdYi3xsB8ZCV37ZqgAi6y54gE9JiMjqQDsP7gr2RUofASmyvD3TMhaASWfdLzSz5Xmqge2pYiCrHFmpcxNbuL",
  "key1": "4pVUro7NXhYCy2Ar9uKgKSn18LcMtrnDSua5GD1hLsKXFamqoYXwuV6kHaovyRzPWDzSa9qQ8VsHMUuuNkeN6RyM",
  "key2": "3BiMx6yrwookkTdBiYRNqrv5u5PwMdq9fWe2Dk2kzHGHYcM9ET3eodpiGgW14NTyg22pjairszYbx4Yqy6Xbv6r9",
  "key3": "KEz1B5YATuiwSFRhDXDv7mwy2STgzk5PWQs3pxczUMPPBq7hCwibuE4GyhXe7tSN3MPFuJTPY6Tijqh5GKL9mAN",
  "key4": "3GJrCTH67cBt8ihqJRQ1Uo34QcgTvNZiKw9wr3yCLtS5vBLwziUW99vMvBAJ2zML1TjtKEBZW6CrAXYF7as5ADZx",
  "key5": "iFzzWW1hFxScMbtYCCGAEdoNt8MMB7jRQCegq5iXLCQi2WbcNHw8R4Ab5stGN3URkb86jVH16y8mNJ1wax6jGPp",
  "key6": "5nNvLDPRkxanV78MgtRNGmaCTHW1nfBFWEUsckH7PAawaBzr8ixLkTkjSuzzqaytGRPcAEV7gjaSDWptXQb9snUs",
  "key7": "PyYP8szm5nP3gk69DPvu1B8wXWtcZtcrjsooGm3YictoRQafdnfBViiy6qgUd5Q4hFCkzd3Soq7jZBeESDrpedW",
  "key8": "4g79YJD7DApsLyFxKuNx1cidGna4Uf8jUEChDSJ9idUcqBaN6v4y2LSEgLduneAmxhP43MVuqAvA7mryGTBMwD98",
  "key9": "QLCmQgun6PTvuiA297HrZiwqiC1deeQyBcMxDcSdNydaJL3QDN8jNXZaF7mR8o4UXZqGob9hq9YmjpboytM8rVJ",
  "key10": "5jXqv5trsvWE8mfWXKhNfQSHg3YN6xx9D9G844jp8K3VKWvxxmjBM5yX3aVUZ1qdiAfXkaB4YZpB67iRfYvzffhS",
  "key11": "59LBU5mMh9wCKU6PwYNKrdkqoPyvzJaj6iC5Let4EWnMKyCAnwSZrbEfZ5TDLvzqDCD7yW6WiGUAwXLrsstvh3XC",
  "key12": "2wKevd1fg39A5NhDdu1T89QPeKEnQHZX31DsCH5gpuFuSPvRWQYmrQBCdDbRg72Eu6oZ9CPBxpfMwJHrTg9sHVST",
  "key13": "3Hoe9Q7h8JU4vvhTQT5orEP4iv6PttN7pCi512AP6hiYc2TNYZSb39Y1CdxH8d1BHEUtmfDNhbpDEzK6wDxFSK9c",
  "key14": "25hBjd5RSVtbMgoLs9R9SgMpzXZSMNQn5gnedPVuGk4MzTGBQ7xojGXP4TvrpjnkRzr47AJVv9DEoNoF8nTyiUrE",
  "key15": "4bwZTedu4GVLtyq44yrHR31Z9SqWtZNUjNXqh2kqCYJAfELuFszymsSE5suS4yRcJ9Gi3YBxwYLCCQzqUGAEyp4i",
  "key16": "328TKy19eNQjewh1d7s2XhQvzP69AvCMpij3kd92k23fw3Ze1C8zX3uXS2ynT8f96E495SgBk2aMbHGr8bdYDtJy",
  "key17": "5nPaSJuTjBr4F25A36PYNNRNNkN7ikQMQ4MTo6HmWHqxqp9caHvD3Es3yx5E5JVmHCWQekAAHWg3qGuheu5g9Kvr",
  "key18": "32piAbFWygTbaNYD1f2mPHZYRZhnUT4ebRExCCApjPVTJLvhRPtqjQnyNPZuWWkGCNyzTvok6qJ3XKoc9CaUnd2X",
  "key19": "3JqhG95UdvFG1MUKz5fBmQYpwErhyJGxFt2JjduuWVa3jYUBdvecCHKCtbVWjxsoU6g9yXoaQj4Z4uL32iMmZKoT",
  "key20": "4g7WeZYizcQ6ZKCjfvvFFbdNmiDhxzCTQYtvxhX3uvW7b5G54y15zySfUv5PQMmrZEPU5zmCxJEPr4cgbPoo3uu8",
  "key21": "hEerrJfA2L6SffkLihGTmzf5aSXhVfbJBBNhfk8UT6axZamwN8cvRRL6ZsumWN7EDeDwko3nHzacXxvGECwrLVm",
  "key22": "22cBSGBuiKiApKsH3aijAyjozYFSh82zq6paspdQKHaj1CWbwctmiqPULBz8VsNKpkcEHHJBcieZFzKiqp53in4s",
  "key23": "R8iQz6t2kboewDF2abw6c9163KXiPfLp8Ty8dNEdgfEdMvmSKdHEt1CgUj39bPmcXnpSei8JxYzdcLg2VHoACHZ",
  "key24": "5ZUrk31tp7bwTyCXWufvzjcXhNg3q65BU7P6FxdMVsvarGktigpLEfXWuAt4Gt5tSSo3gYf5ynmbHVMM7TAVSoUV",
  "key25": "3sWfpssSYikiH9nDx43JfumDzhFpEGEYTz68Hu7twyp6tdPtPUMyh6jEBpo3KyGEFYfqazYb4CpsBe8Ykw6BXqii",
  "key26": "53jhrQwjuh8UC4tLA9oiZ3Bm4h71Vsyvqk7TdVB4mvWZVT4JaisFzLPE28TD1NYGYA1YLpfq52eGHaDSoU9waz7g",
  "key27": "5sFLXdxsoyxyt47GLR3YMgu6ermAumxdbHh4rQSSJWZBoMKz91Gh9d7fmQYW6CS4CpQ5BPHQFJat4DbckmmfeVTg",
  "key28": "4Y31zRNGZKg1tKCBah819CLhJAKJNPoQJrHo8hysrW2oUf3mHt6587Cs98b3NEXcYennR9xgpdkBrjhsA1qVR8Dw",
  "key29": "4Gg24Rn6pUraBm5ieak16tA38DDCMLZmksmWdNNuHTLd4Em18qPdusc1rPtN7GX95bpi618LejrtfTPB7stZYEhN",
  "key30": "5XJUgkWmk74UeSrLZ3USTG7Ku5bZ8Dfh259zm6dc6NMH7Zkvs5Ptpyo59GV76LaAQxSfqFCpt4Na3cgxKeHDLqFY",
  "key31": "3jfhYrVzr5yUaDcAbmKGxQuAfprJLPjhQLqEwindYmQE4UStqnWuG9hUkkWTHJe1DcyrEg5z4JZQKVLGMJ1gth1X",
  "key32": "Gbvww4jvHUYnjz3htxtDFWvGDHGMQXV84p7d9mwwESP4w49oB2w9ipwWg9bLtChN4PTCjfeNfcFpTSdUXu4KV4j",
  "key33": "5R1cbHkEdS68jbu8wn6hNzuAq79g8PzU1QA3sHC7n2h6YzCX2DRG5fGKFJQBMnPvLX2PLSyniydf4WUnKhqzCMtE",
  "key34": "5GxU3VdfubfEZbj4DqJzNPeaoGSk5TubUVJRcm74dZDeXbpDE5CHKQVPJMqVFZboQ7gKzgM9zvwWnWRUzH3kcKFw",
  "key35": "122pJNy4Pt3NVRiaC7Vh9nD8U6bGVMSXrdjQRM19zsE8TfXMWVy7FLfGckZ3pPMYGTV2G9DxBnxu1KtvcuTMQ1zf",
  "key36": "5rZ2TZvmfUsf3v9YC5pXyFhvmEbG2xAJiJqvuVgHrx7HRzhzE6pScoyhuTdNHvw6xbVkmq8jy4ijXLQE8F273JJ",
  "key37": "5ot2KQsgUVatirYW8iAKBeMD7jrFx3dbNJ1LM3DuSt8MPuyoTRCcFcYrKTrSBBZoSgtGUmskFZ862v8DmdJgWSav",
  "key38": "xUv9uNYo5V6T6Vs2s7pjnNa7iXiFvATrCJfgfN5i9dc7JVJDboB5vCBpwghVQ2PsE9tHmj6MLJipJ4mUSq1XYqR",
  "key39": "2qJVmwbmxNNYrmsY1kNTeNj6gdgjqZCAdZJj9AwXd6LGeAyKf3qxAT2dHfnhxCFwfJGviZqrjtdRvw25kRmmX8NE",
  "key40": "2GjEirs2wc3D4EEiYFH5R88wuh9dEVQH5p1FacWAV62442ovPvYTHAm4hFZmjZYCfZWjVNUWe1w2dp1EpZX3Gr8b",
  "key41": "DxATtJgcM2RvoiYS9rK7yG1mmsGp4CoQLSYcT9DfvKCttovAKiXoGJNQHMKqvE8EmDXuBvqBPFmkXNMgQej9zeP",
  "key42": "2eiKmNU5GSQi5nuh91cbqFPNdGgC1h6tDKQ65U1T6BEPZppLZBDQw3FjY5s2rs81j11RevSAU5ao4E9PEEBL1FvY",
  "key43": "4XTfhXzjDBtmdrEWgNUSLrgSjAjJ23Xh5GDjfx3WgSVyG1kNMNe389GYR7godtY2RzpJZtu1Ye1MjJQURGTjKzYR",
  "key44": "pKGeSMwU7CdtcRwYjVWhw3eCwi6qAFckfaxoQ2CNsSWuZQUmXiABC57XtKysfKNshjMhzK38T1mGxdsi1Nc28mS"
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
