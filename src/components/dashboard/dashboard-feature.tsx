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
    "2zFKkWWVA6p58sxTGkzB7WjwtcAJyQcMh59HTGm3bwwtp932QL7MEdqefVbmSFb1bQD3s1EEbcWhf3ZP5mm2Ev7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rhVVFRfQUvBNCYaVaCFCdwYzri97MLY25KMJKBBRLtB8YnReBUN9G3jGf5biZ2BdB853c925rXSDq6oit6fP3Af",
  "key1": "29YL5nHrJgZGuJ34ZXp49NYMa3ZLbDfPhwAqVQZyT37n2HSAyEy6B1vZaee2bqw3Jow3B5iP9hFSRuVTqhWE2S2W",
  "key2": "5rF5V56F2d48N4wx4Z7U2KJt2XHEB97ZtCFgFBTkMMmnUd5Q4D5HCBsp7frQW1U26c9SsyqyQwBFk33qUNSw7sSF",
  "key3": "2JATkm3ck7WDux9aDCP9ArhNdNCnwbXMT6hPAQYXBkN3voK21Tz5Vnt8ndEV2XwcQgwoiPrHnS27nZ7dWYQqekt6",
  "key4": "DiN3q7VfrvtF2Ejtw9LS3bXseehTm1PMDKJcsy629A3t3vFhnMM4Yz1EKC4SRLNr5DpTxoW4py1oEUqRGF9fbTT",
  "key5": "3nUpcRam4FJZ5v1yZXbT9ruL1ouMkeRDVkuxk2Z6dyqRJFFx6bamee2KeGKTdKEW3rRCBM14gAMTWQ8gRjcZemJj",
  "key6": "3Zm7iNZ1MDhRW4ckmZcXHxgKrCBPLKsCvwRy1Xm7xqssd7KfJ3aENkJVhMKr5VUYckAeaLtqgakyPcEBm1GASRHw",
  "key7": "x6T2Y6jdPo2B6Ft9GaBXaVHLiQg7MKZjxyPsymepCAN9sTjpFheBj6wuoNrvMMLuuysgd3u6vp7gGQ1mYgPo42g",
  "key8": "3Pt6PgZucze2cKcwQbhjVPdXwKHnq3njRcxqJ3NqiidA9wdk9xnHSDGGxF44bjNYHGwKBEDCfyVpBHVjxxxWeXRE",
  "key9": "5EnaQFxUt9YNmW6kyasSkS8m7JmBarTQEuvDfwhUPLuvhfALDx7jFGnT2gN4Y3YYDzH23gSy5UTkcH9ftmsM1CT5",
  "key10": "2xUzL95WNuMknoQHqRMCDJTqDZLZEnjVAtnjqRRMeJbXRoFqyXvD8fNcVf1mUPqbDoiUbMwaAtGtzNQhPcZuLAvH",
  "key11": "44b8hNGp571eCtuyQAJC7k9hUgAJQN7i5hmhjr9qeF8NPXYjURPhQRSd8TNufVsXTi8HApLZD8idUsLH2LwTxrxZ",
  "key12": "536WVpjcYtiGyrf9cCSLvZtihXBwTGVgudmukPKrxZf4PYgdUKPwMGFGXdSvHdtNqwrLHtzSW6Uc5CHqRsTgVMDP",
  "key13": "2Xoj99C7xxajjB27dLTH38TJPGVSc9YzzLbJTyd1KvncjDMwenJDaunFphvrdS2ypidCLJjgqPUZccaPMLwS2X8A",
  "key14": "4LpxTxYYtdBrtJKPJUuFXNEznhQkBGSTzG9eAdpiRgXPk9gLjzK14KTjpQSzryTAoLamqewmH6RqR9q92T5Fv68v",
  "key15": "3uH6TZguD9Po1g52sD2oRLPfcPMzr8K8ANyQqUCaUhwvww5wiLgMaJLWTmvKfh3f4Hm8DFHHJXB19hFBQCtJBcFq",
  "key16": "41Z7g1wi1bEMJT5AkG9b4CtAk2w38zVp143tdhhHpaxZd27MjBBoQrYuEudfn3fFKKz5NxsPotwu9AQPcfBa6S1s",
  "key17": "4upD7y5ydMfVp33zBqowAYFrt4wHLVSYNFE7Uqdece9Unpc8yujsuNrqXKcMhXSJDb1MNsV3Tc6DAYUmnNuCoDhG",
  "key18": "5oC6euV6QDVta9QLsQsucbQ8FtNtykC4bVpNsJfiKpgKx4fKch3CZebFS8C7pfZkm98oTcu3KUwe5axdbQ3GHRmp",
  "key19": "4Ey37Xz3uWuMKKnZCGJDWvtVgCLAyqPyob4PEoQK2BXXd6DMYDKZKGfcnRtfq6HVppq783H4ZFmHEaJzVsKF2bCq",
  "key20": "5X36ErXifvt5KPu6Soq8ERV5eMSDpcAyW24MGDS27e2KfSc1scsULNnqgrcv5rYuEHcbu3uPaqFyhp1HwSGb1zLV",
  "key21": "3oMj9hdMkWSvsGt3isB3PAFeD4b7zynWAb3VxE8EVmDvSm2Udhu36E5FKzNrRmBMwRK678NPsq1kpTwSCvVkiQPK",
  "key22": "5b2R7BEJxDQdrx7zDg1C6GXm4kdHeYV4eFSjMaJRFw8SBAE5NhTsp2d4Td9MqTi88GXjuMENmEsZdRegP1qgbjAL",
  "key23": "5DzaTJRaXYZPW38xPn3gMB2Yz4kfm3P97rSkuhFh9UF7qwFGY1GecEg34Y2xNkzGiBXZZPxcs6gVG8DeN9trWGpD",
  "key24": "2taLUKyPjzYUPwEvpYmW3L9kJBNF9NeogZa9JoMy8pxu6VE8MZppymdubwmWew6tCENYgAD7Kg4Y6S7Ucdk8Bcr6",
  "key25": "2traCNtpQLHFRtDWTMXTqLjJtwSe2uy4Fjir5FMeEvnAAp5v5qURcLZ5L2YbPke6q6z6RRqEhQFo8sjBR8b9W1Uh",
  "key26": "28XcoND2xsY6Jr6zPBBgn16ux4U7yJip4oPGhC4pBhu4XbyN5ibdnbJq1FDQ4Q7ra7DTmmUEWQkWfVC3Lwmisfdr",
  "key27": "5dM7GfiGR4td6jBbRs53gbWybFJSod34xdwBP9dT4MfCsJz59adt3wYou6tFwJWdta9iD3mK2FmPrCkLC9oDAtm4",
  "key28": "3s7ANbMH8cpnFSHwpkfqT7Sq3qHHAFtgmtJo9g7oRpwuBrB8djSgmZZNuQDMZPJobP2mnWQUyVwymoxMD2NrZDzt",
  "key29": "3rg5xjDubZiRWtfrRTeRJbQa9NQjVq5kLTwRMoHQpBxGY8RL2ugURLtkjKcSPDjovG43TEc4ahsqKdLa3UK8kmY8",
  "key30": "3U6z5PMB7XcC954u3hCmwftnD1pwpqK4dVPGiP2osch5oREQ2DpNyi66dPbf8vqkFup979t1a1GAyYne6c1r3kUo",
  "key31": "41e7aeUdzFMh5TpdxSZNe9kcUnWMpgJ14QZYimV9s62uk5wizXKFQYQHDfAFXQ8dRXEWzCc5QoiTcKLRgFogij1d",
  "key32": "WGf5ocBitZ6kqSxNgVtUuyLPtH94sy41vJALjNqneUdrwrTekX9WwMXT6bmC7WuKfyQVa4HMLftvxTZY885ixka"
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
