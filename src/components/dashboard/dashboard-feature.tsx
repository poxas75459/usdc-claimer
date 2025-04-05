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
    "2EV5Bc18en1kCQejzQUcXEobrS2yj8YQhe9FnLMGYryQowWK7CyoanRauoF2poSLNkoJ6wnnq7JA5UmpNu6Wf73y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K6YEQocdMt4CfmEGew4PMP3V3hu879WdV3kyiPZQyfv8LhPMX538v3Ki3JXNVqgLXrALFbryRxj3oHqQwHUX6j9",
  "key1": "4keHKWdEs2FnjLP44E7sV4kJ8JbV52yxBgVYLkxR7fWU9v3nit57xSdjrTyDxLfDWRP2DTwMkohhmPWM7vyhFjfb",
  "key2": "Bfb4xGQtXbaSK3whiTqCmYVU4ev1fyDFWvvUP8ima273uGSLLLDFN5HK8Jeetavmsg74iQF9ZvJ9X3bMTP4sr1H",
  "key3": "2L4yxJtjHhGbrCawPhx46qASD97CNkThRVbeM4MamPDKY792d9bLKDYYHb6iJekQzhL815Zn1C8iaFGetW8crkbQ",
  "key4": "48y8TsLn5GnR5T7AGNLPfUSxThe4bgMBRAcpHzsBSJZJ2MgPjL8gQoNXtNX75eyFxJCLUieTFRtRVJjWqKF4xLZj",
  "key5": "B5naWxRPcgfskRLhrR93N1aZXokGQosPLQpJDQPcMew6mLKtLPQxz66ZyenXZpftLk194VYycAqvLQumuSdvrDv",
  "key6": "M8ShAG4wenMmrdpjgFjpEoPFHX9F9i7gfewy38TdXEzWaRdEYFgbe7UJ313WEgsCxtLV21LR9e3v9kJ49En7DQw",
  "key7": "uyrySC6vcD8XVzbU2S6qXKZXV1mCcnHwy8twqCRWf9tvGvSQNqckwjk65QhM2i9UHsGmkRwofTrDYDKFDwCDtic",
  "key8": "2MuKTEafJNA6kpiPiq49GBmbZPqnc8bANUXayouRHRdKW6sB5Ej12YUdhopSuzPw7HRL9ufgSJQ1TXbU6AE2Wh9P",
  "key9": "4bQFqEh7Ukyc3tJaj6Abq6adt9QBgteMx4szh9NoN94CKGN2AmRPoVq55BqiiQKoeU8q5AqAyQF8WDB6nTz7H9yw",
  "key10": "2aZm44igFWAScLBo2k742oEqZVFryWP5WbpVYNEo8XqDGsdkKKGwyfL7WD7xbsqUrJcnRKVokXBSregTjyLMDVVk",
  "key11": "5FQSJLJzKCuv6sDm5c7oZQJeyGbuUoQC6f1R9AEKhRYzy1VDJUumYuKYCphbG8DeFgeqAehhj1kzioGRScGYPVba",
  "key12": "5aMCR2A61XWDqThVP9jrBUhjQNAXgGo47M27VxByMAJGFFhpXyWK4eZSMtTkbBEFhYbMh9AymeUyivjTwfUHvNCm",
  "key13": "64DqemNdLnnC1UQJthk1Pe6wZMBGFoqgpLcQBZhGTqQjHQdw8sqmfaoKHDAX7vDASFL2sJCKfkjUcDSY9b5aApp5",
  "key14": "3GNqzLPt3mJjETiDQUwQRrMZU6zpzMgxcT9V8kV8wgC2q81xQY9eEWScy3b9N3uXH81SJ4P9sQKHDtuYDHkkUmtv",
  "key15": "3HkwBRGiLTweoTwbnksxtP8hrPRvYSobof7HuBR5adxzqVWniHKjPEG8sNRdLhwmEJXeuuNbkHbFZayNeadyFYs",
  "key16": "2p56Lxfi33tUYrLuvYEfjmkyig2vvewQtX9ikA3gKcarjw8YJQxWC956ub6WYv4AHVoixT68f2VydkgSaXDEbjcb",
  "key17": "4NfAXHMQmjHkCznydzkp2mpEPdzpk3rpkZWdTDPrDX4PdAY84YJ5TAQiiNVgGBfg2ACiPwCGEDeuuZRonEUs9kTL",
  "key18": "4PDbFuRRk1cwbMeSihWj4YHSyg5LihbMPjTAj11Uy2XQKQ2w2eKkVA21bapPZQbK5JZa6hAjPZDSuLeeuk9WQ6Da",
  "key19": "CwPJi8TwqA8JKSnmT9p2JtDm1xgo5R3ZSGV2ViPCmUoHwMpmJtRiWuK8i1SCmeZ5Ms6Jv1hyUFqmz53P7a6fGEZ",
  "key20": "5tbAnEwfdcn7BWNXFQ9vKB8xGkSsu66119o7ifUXz3YVE4Qv1nJUjpCXmqnYumiYHGdoTJZTX5UXk562SUL4jWP3",
  "key21": "48K5i3yY7hwerTJWMQezuG4UybpbKwzkmRkXHpkgTBTMPAuXND933LQPc6fyng7ieiUpgZWT9WQAkjz2EnB5yqPK",
  "key22": "4uCkemt6ysbKHjuFaFDeWMRawhrXZP4RDHVF3UEiLnNd4pB4rgPFzcGuNNNsSoUycUKJsWPQhGk7moNibwMB1Jao",
  "key23": "4JsTL7PepsWR2HVrM2A2Q7zzPq7683FhbFGyzfsr3eqybZHpQE53c9W9sxc2SLHhN1Lh61FCcQCvhCu28v7mGz7w",
  "key24": "saTqbDpU7e6qAkBJd1zFQ5RsruvvjLW6kEMsqTRR6jKHVJjJ5knzmiWcJydojh94Ui3emM8ht4PLgsiLtwUiwLQ",
  "key25": "rYLqEhx5vWVMd1gNBqkQUWJtuYVwSKucuAeEFtqdVedAaQK5Urt1f6EEzKoUiYDY9YMYVmoX6mgbQYFVNmYKvH6",
  "key26": "3dN5gQvbqTuv844M5n1HeqMtjntABAXqTGd1xtRvv8SwMBqgdAyd4oqkJvSpQqX4rfYXXmvfseFGw17nng1egU29",
  "key27": "4SiyPfMwRjrruNQ13jaA2HiTT9qk6DEsS378azFNxCz4TQkP16PPFzfbQHHqpk2jDLN5SaZzpkCZvsU5CgbxxmbC",
  "key28": "2Uy8qr1dJxG3p4fLh7LFNo6PfGwuK11XTBRvPXFgZhVmd8PxHD1f5LjtKxj8wy4fKj5Cec7DZ8Ki6aXEDe3xNG4H",
  "key29": "2d3GA4eXGgxxdy7mUtS7x3KovAFgC66cStUW39rTsPtCrjLYXUD8vxrpFdpTGGY6Vgqo75nRrMWVgs9YJ3NMrzWm",
  "key30": "4thyoAxz78jUzzgzZk7X8qSkE9seMnmhCi2a2tuNo5VcPmpfmmapAu8fEaUHNiwK4n4mSXVaQtL6YVxfSvMgVPhs",
  "key31": "38yrDWVXBFMuArXbbRNva1wZwdeyfEpGANAdFCjVDkx8zWNaewWeGBDeqDXhfpbbo5uGndXXDPzaXW6xcjf2ZW49",
  "key32": "2MdWixsqxXa1HsTzT6h3xLapmTQqexnaFDDA8kH7gMQj1vwNSBPoyWvMFifoaQZaudcgum2ty553rDXP5epNronW"
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
