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
    "43LMqKGsvyvVFdo4CU5owSeVewQ51hc4zC23FVLqFE3pJY6ffWCbKrRNxEZQgaLt39adT75mfcZgvtNHWPM56NSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHFn33XeU1aXCsacKKq7nkqDYgnBLD6G6TpCeVsq4pLbBwJgoqrv56feJL9jSeuzadSrS6nMcyvYFLrXUFc89Ec",
  "key1": "48Ma3t3KpPNFJgyDSxsftFKFEQVfLGnNihis4QaCj3TrPh4Xi5TZNquB5kVuK5cU8kFPtQi4NVGMjEngUCHC7Etg",
  "key2": "gzF9KiGnPBs5kKCQ9tTwrA4DnZ1exWDbKzKFV4d4rBw1K9mCXExr2NkzS4b8DVuieJS9bV9ZUuQi3wgfbx5duPM",
  "key3": "4SSHB5yHnCMyexheTXmpmTCVGEtQRZprCDnGNw1XHXCCnWWEszozMCCsG8CTTgDC8gfNzsHAKQQRwZPAssBn3bri",
  "key4": "4Nm3sKy96CnbT9ESJCTDXTiDgRRyQ57nSxXzUFzWWEXxmqVyzekYFoZYhtT58tsFfMLJKYxCGep54wPWTxSAmKcn",
  "key5": "49jbUCb7y6HVavrSbswy3mMZJjBXsTR8WXV7nE8yaG34fz4idtXfgFAZSZm8Q1p7Mbn6vp7T66eWnX6LVyCsWh7p",
  "key6": "5h5QkbxNr4Dn6YaMm1SqAthuBxjqa4gRsDY7Bt1QeyQ2uHHkqjEf6DqCCTNgvpHDTnkjWLrdvFyrU1dPPzdrcpii",
  "key7": "37yxtNVppNtYgrHZFcarXg5VUEJweJScnqHxgSQgCdHXrmE72uGvETVFH6dfLWYE2243L58USnbrRkiJh7yYkpjG",
  "key8": "2NJec1koQyp62Eekuf58LwFV9Au8e4dmJkXsBNVCvYfqG8PsKX9KhjckXVHtTRMse9kmrwDC477a1zo4NWUPT5H",
  "key9": "64dmpBJNZDZXraRyQvrBHc9cLSgV1Ww3AeZjUvP1Ni4GfKjBnAbzpr2jS8SkJ8Pd1EKJuvcKatQwWahAr6iqeUa3",
  "key10": "2j8XsVPrumSp3UE3smZCGuoh4RVD1PXZ65aKewg1sWqSeRNkfbhZqWRw4J3hT4Sa5JGH5tACBd2JggLbeEXY5Hxe",
  "key11": "424p9sPG3oWzrkPq1o6skNM4rXooxmsnptHLtb2qbNXN4nJDScdJ6idiPecsNHPjUxqsk5nyAgwBB3ZZPxud88SN",
  "key12": "3VonMhEAy5iFdbnjoR9szWiqCZeX4TB6pd96s36q2aKaW4GvdD3ggMYbXBsoYDDZKDsAtqZnVDELEDB8q5fa7adL",
  "key13": "2tMnGVkikPhHheXaSwgVupnMZjwSdHPabb3BCk54664nbQzBM7gt47gLieVPyutHyKcWH3XYcuxajFAMPV1HFA8N",
  "key14": "5H1mC53scqoRKcnN6qe8Q2EQxvqPv99rxBE7SUcNLfXBR5KPfcADeHhc2EFU1pLGu2zkJDv4tfqshemue2xZcJUf",
  "key15": "4HiH9x4zmoyoLLRA4q7X7XF8ekmjDVnWHkgPrMiDAf8BN71Krfr3QHNB9imv369WQyfjZPwNgrgeL37CqqtVda4D",
  "key16": "37qrVacXcuST8sxAbDQdYuunZ1kHY6jayYQwNwHqhvbZD6ESEQ6k944fz6hgjGktiMa8uZ4unCL3Dx19mmpRrddY",
  "key17": "28HrurMGr4eTuPd8zYa3WXEtKAA5ZDEZ11RzLjj4rJz1d59EfQiY8v6EWx2MDMjjZo1dNkfnySHwpQrTMDrSKWMS",
  "key18": "5ChhrNqVwyxbgCca4zhLQwE2HZJXDwLdfE8rNtkySjMZGG6dhCGmEbGFpUgtieP9xUK5jBBeDN8YzaiEzM5qRMcL",
  "key19": "3djKpNeyUdeCFhUJPWuV2v4yUzKzVz9UhCyQYJKarUVDDW1mE7xPQzUKfUdNj5V51Mf5VSxUGKvqkFWM6xHXkXMX",
  "key20": "ceXAxJNM5HoPbNgJuLjk8iFsqrHym16da3yiMSfoS1zEa5sC9f85aAqALDAiwfmMexTVoxLbmJeqsYJvcNgGUrn",
  "key21": "2V4GAathu2pQHBTTCv2re62rGqXUC6so3RhP7owkEsygCPw6Ht9iPPbfX6sfzuLNegzXizwUpvXWcbwEW6FsaVrT",
  "key22": "dXfChFQetivWeaK6qz2m1vzQHgb3vqEoa2DAXu9AFQkWikb8JnXRQwFPnUWfc5u9EDqrr4dL36CPe2QfFmPAV9H",
  "key23": "3p2k3yZqnNKwA8nmsbEV9WJc9wA6YE9BEjyCqXeJAxFAbd9n9p2UadnW4MUygWw38g2wDVZqgKfsbyWnsKTXSNBM",
  "key24": "DSeHzRrDV8WBwo2Ggp85nbMYUc1j3wGrZw2X9fBbXXEyw1WLkPJ1CTUkRArAdyzhBbGQGuzSBsG14nnHu7FCpZW",
  "key25": "5ggqnJTbeBhpNWvUjvidnu5bkg7cQHCchDtXC2dCXiDSqAyFpQ7APipA2QkvMCBrme7t8nMTdmitxf1geLSspvJd",
  "key26": "nxca4UVdHFjGVVpPT8mnALiMLEJT7fo7QVsqrVhkvGxp693QtXn84XbzQLzWjobcpE8SqxZpX27SwBqeDx5xgPH",
  "key27": "smqfsBcV7tiXekxns33t5i5mpkM2J92g8seeHhVbTWwD9R2jCttbJ1uWdfki1QmrXFRYa1HBDvs7RywENHzJV2U",
  "key28": "5xnv2tuiQs9S5z8iYryAYczqP2jwT1jriVhgXVj1s9wmLYB6QQ2VZZvhsiH8Te7z8GRovt3NJwKbTVQ3ZN1QVbpz",
  "key29": "3wSX3YstWGoofKftNABqbivhQnnBMGftT3rYt23b59EVFhVq9jdekXLachehhXuJ2PndNeWpymS84of5RZbn1bpB",
  "key30": "32tsu54t5aMs22PNReHfa1fNJhd91AvLVuJoTN6WrMpZ7aF6gZyAWnxZH9cn62JRwdDXBByzWN1Nq9BkXap81oMA",
  "key31": "66SGMxA9TB7gW5gfUDQ6TEKYUjuHM6GaNGt8LMgFfEqQszXMS5ZNhLjJy84JW4SFk74R1sHf7sVG3Z4nBrpoYwP2",
  "key32": "66q8PxUV6Uhsu7Pd8gGyXM7dvFcvMpz11w6yLRN9CkVU8NdVCSgDXNZq39VNt4zouGf2xC3KmsJv1sr6adqRYi9J",
  "key33": "qg2Soce2sTkTPJ6HWFTWJ5R3o6MsUmmR1tmD1295erwJkdqiGq1pEkjPimYhSGu5XyRu3bJ9i9EjupeqwfnZnHS",
  "key34": "2rvD1g7LH8Qa75SWjKHJqwptRswBb4cwJN2ZXm3Z3gTVnau2cTTtaSURVbK7hkVA3qxQ1NDBanEShUtnWAEhzafa",
  "key35": "2BG9vmneqSzeMSZpjwYJModkwUHW4Q3QsoqGn2NqrvT96aekXJekhrjvcosz8JesUHid23Cxotrk88B2yomAAr3k",
  "key36": "8M2rUMHF6C12tXwgRcRHXzKBJgPqwjCsk7mtQ966EkXnCtcAVwi3q8A8S1k3vJ293G9Fa7mn42mYPDzrKSxBFmB",
  "key37": "25MpZX95JxRe2A1U1eWmVNjvr4sFYvuk3GxzcDoy1wfWmuPGnKi7Su3T86EocNezMiopzMefzxJCS1K4rjeMkizh",
  "key38": "56HLqgLkEbXY6fwAngbyXew4cJ3GPqEXEydGwiKSQARay6Tyg1HPLgfuRv5ZyU3gvntfgLAVjrDqxAjHJ1maUxty",
  "key39": "4TA66sGXeRwswqBFVJSf97Eq8HRuYB1HXcHmZtqYYG1NUVvpArHRg7546pPEWZtq8hivncFDj4ieBTqTnLCrsvz"
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
