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
    "3DQBPr17GwFXEgnjeKT2ZxzEVdv6SSC537DQj6i96k3tGfsuUNZfgVfxbQP287AbdDhnrbRM5skpJMHdtTboUgZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVdd2cAMJonGDZH2MZ9AdpgqFhLWtpdiPgfD4Q744dPm19mNxrYJxsbXhwSPi5F2HPNgcdA91gtjbnTYmkWxJne",
  "key1": "5cJhDB2NrJAPb6JZH1NNP5yquND5J3UbHEEtipZSke6YHpok4J4jdAyhc9o1qFpQYkv3hKEVnKNshEAfoGp6b1BT",
  "key2": "z9J69wX8d4CzzCcC3meUnyMBemP6tUBjuckxHauwaFz361m4ZFbLP5jSdpR7KXs5tKfuihbwcD8o9P7aXv5xunG",
  "key3": "4CrLjgJhJFaxnEDdZF4VdxH8EpxNCofJrUNsequmrYWG9jHKeKsoDrAC9oZuT8Kicw577CfpsKhczYBL5U9yqWiv",
  "key4": "66P9uJRrz6PcCawfxfpgiFWwnjQQeqgfu5XC5Zns6xfiXsKH6z1jkpgRc6of2A3kC12hSEfRLxBBb7mYei5KKKP",
  "key5": "tf3ixVNeA7kyRSEmsoSXeg3pkmp4x8uzh13LBiXRg8EtiqidgGYkAo1YTwR66jn3cMyvM8trxwrk1TsZxurjNNw",
  "key6": "3UGRj1oysS1aycFmtMYMaf772ZcAcq5SPqhxAkCe6iBye8i1WSjxdVzBW4WmN627wecZxrWgeFrbmmE3n5myViEd",
  "key7": "5u8ZPj6aKESBPxKCsrZckzMhJFAA9wiKAzxHAkqEjLpoVxDssqWpjdm9c5E9EKVwj44nTXMrCVV3aZgPGNk5kbpX",
  "key8": "3NFTcWNK68vaBN3qPVDZJ7ytGyBFcLf2BVmhm2bbewc5BPx272jjetjNzm11MbGWb98eyEvmSwJrdEoFfQj5BLrd",
  "key9": "4zHJ1juto2bRspgTsTJcBhHgh1xYDWjEgy9MT8oUZ3KB1B9uY1b7QtwXkLDdmyDvzmxdSsHXnmvNUvR51hVKMwbS",
  "key10": "37a3CysvDguj2UaDoXd9nKCr9kp5Dwj4e5CpBVaRrPReP2uY3yfdD7QvaSJNq1BmWgdRf6beCg2uVuGdksVCBonr",
  "key11": "456G9wyDaPAn1g7X4w9RkJxA7YBv8NB5kwFCckXwNzFcR6Fw5PriTcUo61W9eTUkLwnJXZbKdcQz9DwJUy7ND9YV",
  "key12": "4VKp9vxfDyGQLXzdhfwmEJLWtkCeb9gGiUpdXmgYthwbcLE6xdUPKZYMfTNgGqSitGjFZkLmXMnTY5Tf3r6ixibn",
  "key13": "4enJLLinyfAPeN5Yn5YjDZJPSBvAqJmtGk7faBjPQRJcNRWdMBSbUguK8ai9neUQLjWGx9Z9X5hSmzca2umZASjk",
  "key14": "2o69jKKse2V1G5djQPp6HdbbgsF1xvkbApXqMwGJULfjegP1FGX3nxojsYYDN1zbS21KUg1X8JHY7UmjSAS4sRmr",
  "key15": "NawDmAMRfyXH5TuwNTTk5R5LX6hR8JjEmDHBLwc8jrcBbUzqXppYzEUCN9V3CC36ma8JWugzm25G2o53zY2agfm",
  "key16": "4c5VFMBSbRJCK6BNNQ7HGK5qB7ojckxALJPckWVKyTZupStium4VEbxioB1UN9zHnoLc3cW8uCBuqFzMUG1dAZ6M",
  "key17": "5ef3GsyjgRruxQMeN2FwtZ9t4e233UiuA9SfQ12RQPtVHoD3gHGHSZMEbVZ15Pk3nR3ocq9rv2KWMN2VmPjyuhaq",
  "key18": "2bXFKXJfHc51dvCMigPFb1Bj7xAdSxvv4aBRi5Z2cG6iJnLqGoWangk1vjVbahgXLjQwuXcDLBR8hFHMSHuHkGCY",
  "key19": "3SXRsymbgASLVa6irk3Lu5picXrdwMFbBfteQCioWBuiY5ZH6Lnj7G4uJVxbnT5gcQqvmF7USfZNUj4YcQcZhNCW",
  "key20": "3DS3XbEjLH8cFa4n81MmGc5Qwxh6KBubXFQtJ2LaxLYA2rm95JHogAh5m5ei3jiQ7moqRXPBR2UdFtgZ1yYQ1s1Z",
  "key21": "CWm7PP1xeF3Qunr4YQbcq4FB87X6iyHpZP3MnkyuxZDuVYCMYfmFVrMAh4UoT8CtmxzHCLX1FUs8EFvVepuKKDU",
  "key22": "jya7rGRLp4imZmP9zUZkkp8x2J9jV2Fmw29bw5hJ9evN1p3NRs2SceFaofEEMLTvpBENKL6YbQBYDLktxLeJ5Gy",
  "key23": "3WWrqSaAp71SjyjjahRbVy5i6wMAwyKkQhcJbYx2V6Kr8xcqhAUesk9JqVtWXWRBHSP7YJ7HQ4bLd6RLwfbaXqMu",
  "key24": "5W8usyDz39Q3PWQA6stxge1bpJgD2bvR2YBb34DwqqkgAQeP4K7mSYUHwh8iW33S8Af7JwUGoomGZuhKkd84hyb8",
  "key25": "3o1jUYyHgcz2gQ3KT33DFEHVxmJ3eiW8JFGHGqFdMrJEKvaNZdGd8uqcAt9pGVQsH6FHwV27rzpfLDTNk9VNh9dv",
  "key26": "26TzjoF2tHenCDZSEtqABsmUAy2CYZ2MKihxE4hA9VNqJed7HzRSp8McmPF1d3P4ZHkVvJGbLu7pi54KudsP889T",
  "key27": "34wYTGfzaSAepVs2G28yPQWxsiJvV6C9WsswuXspsptUwFr95YY3DBBhm4xo3KUGTuvJH4hjQNZQeDNw3o1huVBN",
  "key28": "sf7tC3kCcYNYTpZFWooPDe4q9NBsJ8JN5XXkBRYibERRu8YbrAiNsfcWkk7YNQjayXUxHCTfgnDsCadSQcqnLiZ",
  "key29": "4C3HJNfBW2AWspKDAk2BFTo1SEJ5Hws1uGhxpwXdvwRiPVW3x3JBFxRKkJAgWdprB64mcyhFkMVpga5RvoSaccig",
  "key30": "2qd39mdKDDzPJmCxyvMs2qjUsi5kRhis4drg5BMFaGMbiPi4b2dq5ttALSPAFJrc9srQkRP83RHYPWhq4k3w3WcZ",
  "key31": "2j3WBpxtreo3YAuRQbAMVBmfH8Qp6nyBFfKvJWQXUfAXLxxmQpbA3DGSXCZTmZpCYMEsxyVvyy6SmYGRfm52fMjS",
  "key32": "UowosaPk8Pnazpx7bf8BvnwmJWUy7fRhsEB4nFTzoJ4ypwzufLLzeX4QFp7s86w7pfnN99yzidkC2tNXchFsqx3",
  "key33": "4cGC2FMairENXF5rT8UQZG7orhe5BfdKcPnu131XnS61Xxu59L8h5g4T4kNVf2x9XkQ1QnyZAJ3GXZoyF2D5Tcmf",
  "key34": "4oNyuozFvv9SiYMdo3vWCtrFUWtpT3fhvXb1fDr7NjRbY4Y7QvruXFe3MPSKwnhPLHGm9Lniv1dAMiGuZAzQ8GWg",
  "key35": "41M35dA83WdYy7Dv7eSJe2bS4BDhoDXDrUJS9qPLp27DTR8J77QqZbeHCRL3AxjW7UfaNLK6sTCFwP1AwPJTJXhe",
  "key36": "5rNmA5vyYXB59ijqeSsz4j8NpCRTCtdx3nSTHK1wT9jpTxBQouJveUXQ9hXoWWZL9Wi1YvBvxAu8jGJt3eX36jcf",
  "key37": "czo2rNMyUMXUWUqEuxruTEgNjLy53SoY3c3q5TgHXwqLo74RGcGSA9xo3doxK9iNwJNjUrinK1kUCbZZ22hWPV6",
  "key38": "24Xoa7PGQtrqa1wws4S9nKdHD1mEkxhEefwUQCtyVoaNZpnsTKvGacaBSL92e9Vvz8eUGKPFfdpsdWQ5B1AYxYdc",
  "key39": "3uUWtqkVup3TUcJ4STKGqghvJe4BEGgURDGCDY4cP6iYf9EsV95QpsrEpMmTg5VFdoffXh1KRgdw9NopjMpr12wh",
  "key40": "5QcXTGWznWmK1oMPWGfG1KBiz9NpTThRPAWumGdq8yH6rS9HcoVskBs27u9zqH3AmCrPqt6WkdcwtRqHaMt6zX2z",
  "key41": "4xfR1A28nyny6QVgVFYWP9hAfxnYRqhvSgMd427LqTpanZvEFwBtYz1cMgpB728CqpyhA6WcBopxgs14RVwSi2Ri",
  "key42": "3mJ9rJf4VFCkGaDfxHB8jBauGjvqAp2NgCL1a1rg3C9uGf7mLsp24zKbiSxxxscHnnGf25A9f1MZPwb9hYz82dam",
  "key43": "3Ew8M2qQshh4yRS8FyG9dVQpfrqSE6Q3VCxjiSnCEbdsCmrG4KCWCs75FRLgQoi2rRGQqGHFZAXPRih4XTfHmYEa",
  "key44": "k4KQrMdcGyLxMkaiS58Nt778mkUnp7LRtKx7xBkFGHRF3J5fkDhNYCtT4Mwz3RpvqSqLaAZ9SeFw2MzSUcZuQY6",
  "key45": "veEAc3diheiVzFvpZHMSXqvnv7Lw9s8whgqo2MHH4maJzENQqsr7ZFfush8PTiMYkVw5ueQ2bb2BZthNneTWgvE",
  "key46": "5NvByPxqpd7gvAYCr7nmbUSKXBfBorASLTuoSeQwLx25BWCZchGXW4NVbQjMUe1AG85Q4VEPYgJeog6JYfZYd5cg",
  "key47": "4sHCesdZSdgehzUrvrSWuV1bwDFN16GGJAkEFsUnfeDyJDqCJCCbbitzospjJSE53GT6i82m6VxuWATeA41Tfmt2",
  "key48": "4EThN5kkqCUs28MZ1qXEBLZhcDcsJh6C54NWQiP8Z2khLDMwyQeX9HRjPHegik8PsCQ789jaT5rzq3cMZvENwbx"
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
