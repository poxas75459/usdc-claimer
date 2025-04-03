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
    "2AeJ9FvocSdiGSAXhM9PtoBQk4GW3zvvHmuKJJ4rJGScrNPo6SoZ8vHcxB3KQCR8pgP4AZNux8X8V8hHETsjK5BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7tvSD56ioPVbDPxRrfpwRE6LACNdd1PjA9LwVcLnExvDyxCdZeHhVJrhRWQSrjKZSgMgBzJCcSBMjGYxUgrMdo",
  "key1": "4XaJKPnna49HYHkdnfXVJfTDCC3WR1nCbzTC38wcKmXDoRAHbwH8UjHVwLJgsktPfmM2UzD85AGEJhbaUSBdmRRA",
  "key2": "4x7qM3ePQju7qiPVvWQKTNybEctZC9VnAwdEhPRreufDXqGvpg9hDhqYXhhv54cDVyqbERxNkYapFbXHZW5vyEfU",
  "key3": "5QkkFj5bhUENtcXyAJGjDMdF9oDfeY886Qd4mp1sdSUzXc3BYfoKHgmwZc4wNuvowdWtac3KgFTHEAwZoxkWX9hY",
  "key4": "5CrJWY4S2CpvbjiAhe5KkmsgvXXiJ5fqC4FKrz2ErQKPhGLLcqWzy5f5x7EUUxphypzGSkhadHdSkseDc13q65Sf",
  "key5": "5591frDrxtPn3VxnBk8MDTDAduRLrQjQp4a5N19zhEHxxGVu1tvShodoi71BeJSp56KQJFPUQCXxp8Vq5DQVWfUw",
  "key6": "65Sxt7yY4geKUc5LvTrxXx3RQmMKKCey2K37znbWUG1U3hhaHmViN7nkqP9vXN7Zi2Nrb45nMf86yXNAFqvH7Vib",
  "key7": "4WvFoBGMpNYmyqMnWEKbNyBC8A4uE3k4GfGYC941zxPhFDCiFgxLpkrYxNTwNbPqMPzwmZNpPbrTeaXFdQKX8HNE",
  "key8": "64UXLm1XexiukT2L2MScm2r5Yshuh5hSW8QN49brdRtxk2JGxnvyEfwZfDJQSzzFiNfSVPtBS7QPpA6xq2kmQkaR",
  "key9": "3VMjN5Cu8cmdsGvt9cU3VDtGHze5LxH5gUrUMthiJyXdC7ZevRHHTqb7pv9gUsGbqRCDQtPxgssch6MNF32wHj1U",
  "key10": "5GyUwVTsWNCvDgYzShsggZJ8dhFtnUrwxAD8roUgsXjAspoQKtBkYCjTe1BsMDG5Xd2jm5KMcj71GMC1FDYPnY7k",
  "key11": "2RVYjrQ2gGtaSiapRg5wcRXuDFY9Jx3Vmj1ucr7SPJq2npLFUfpnqHQ121XUcNdAveeXJjBNmmEnQtyDXGAkxeu4",
  "key12": "2g7jqHUkuPBN4LKXysZj5NHbvdusJ4jE84W6qExKhKoTprj1XUim6Yii7RYewMtTPSReyJEEN46U3CgQK2kW3eVU",
  "key13": "4zPC3q3tuWeFYFzyGjf3br3xXqfgjQ3VnbZjCbQr7RCtZ2rASQSWW1qUBBYNybLY3ZEjhmBSuQe8cFMnKuRQRU3g",
  "key14": "5Fwp56KBdFvGPXxwJ6ovsTSLs9nGvKSEVzpWSgthhifMCwZTrnJxKfw6KzNg2i9HWQpi8iEbGPti6hwALqgaEdjC",
  "key15": "Uq8ejUDdJ9QvfqzdfqeNrma9UHak9LCXWPJDpj3LNmrxKUhqafGDNB1ojrb4sZwsfa9SPuU41P7CuLm5DwTfSiH",
  "key16": "2Np95F19vKMjahHxCxNjnmoyCcH96sxE3c7SCzqAHhbpaK1L4XyCW6Z9Yorv9MgDnWbX74vTXDh7D239NZbz5nmy",
  "key17": "4Hey6a16AuHgp1cnunou4HyqxHwUBm5tPkGr7aEewY3R2T11ePRuwK34JGh1Hfs9qMTjjqyqJVnVTAERNpKP4kLu",
  "key18": "67PS2DHjdVzdnb9nmrsir9EroW3wLVS2NzRx5YSz5sjXg23DF1K8HUyWo4pqfuqiVdgutzXU8MCa8GcJ8qtKdwsG",
  "key19": "5gtj7JtbCKKXpEaDyrdC4Q32ky4GGjUY88yFkkpMDq62YHHrtD2A2cAXZwVAhyvy5D1pm4bGvkXesmkZCN1tbmqQ",
  "key20": "3DBbuCgEdyGqSRBaFphMXbo5McXRYyinCEnJpW6dYL9JdVLA1qx7HHHNDvxkin3Zvk56WHweT8icnibhBeeVTbyT",
  "key21": "23QL7HhTZ6kx2R3G2tWoE3CQSo45HCTYS5KNGnwg1rQcHWT9nVPjUiTwagoxa8NKFHJgjd36rYvAYrGQJfdkRGbo",
  "key22": "oKHFseMTh87qdfKkjLCp6BKgUsTjmHY3ScuYqxpXFPchekwbPWy4ZDeYjfA3GeEi5xitbxBkSmrGJU6Ryfh6vQu",
  "key23": "287ixDxGgnBhP6Trs8PFemVegi4GZp3RxVTXf7CtxU5eN4A9MYZiiMwhww7rU7U95KDmD4seRwHuGe2EAjmueLmc",
  "key24": "3WH95DHeRXRTx5Pg5BwpF9zcBnG79iuhbbMkF9uWQpZEzvMrJQFyp7S6BpdcCctwAmkiyhBtvJ9EsKCvqpcyNEcc",
  "key25": "2ourbypmiScjhmMrHqraW5f1i1pmGFuFJJVZrfpbyyDYW9y3qrUYRyuGzxA7SehDn7KTcpQ6ymYAqRPKFcGkWc95",
  "key26": "537Ci5r5epyie2xV4oDuSh43mV3TXG6VeACqTbxrLGE9DLLopusCfs31fvyvwvAdE3tm7xdpxcLXb9mEL3MTeYWH",
  "key27": "5SJMENuc4rvPcHiS2aQNRRDegZ5xiWmgtjNKR4hiqHyNPSFLJLS2cNLNJmsnKDy8p912krDSNfKTSQUvdXFtCneU",
  "key28": "J8L93fuGgcCinNFbNF2dwsUV4djhA1uUTnqwbc8Huw43rUVHXBxiKbicyEtMXbXLtHEkwghSfd1HRJMBhnVRnQR",
  "key29": "4UYvKyLRuiHq5PimRJqSZRsyQCbDFmerY7hStdgMuuLcyYwZVThivyQAzBAhLAAsnnHUDkw1B6mWbsyZfqW1mpYc",
  "key30": "os5VExLjbwggnoePnrgYfopn1Qbh1286i5vEUYv1UvarnvyPpommxspVQGwiYMtPvA4LbjD2F9zmhiCJffXE1hi",
  "key31": "2fB86usf8cdZkdTP4t5QPHjmHvVZzh3RpFo8R9bjDnYUFCrKfQXtyqgn3HinbN2VtFSYrgLp9H8YHcDye3fowSb6",
  "key32": "JDLHJxBzCxQ38DVitLWu7WvUvnEBPdoPDBGJpDBjdGxATgkFpsqVt9Enu8cnvDSkpf5M4dQsFhMBMpja5qqomPR",
  "key33": "5xpLNNSfgHZLpb4xvz5AWTKiKe7LSecra89NEwtiBspvrC3mY13CqMRq85PZdoWDtm1mBpm2WoW7bXtk5WCQPkH1",
  "key34": "29KRdC1ctiPyznsjojLxzA9PbahVmFsU3PJG8EhxktyPXAbaZwf2ZBgXwz1anZ1rQp5pgmhS3o3Qhb7j2kHdmiVu",
  "key35": "3Mc8APX9Zf6gL3P9z8Xj3xTvsKCYCn1Vqk29dpPTxyh4agdBFhMwC5ozgT8XhBBbAvsFw3Dyirr9oUyujGpE5CMD",
  "key36": "6JM7g3UnhcuPccsXh5z85AUeNrG4aLm4vkm6GFDMqaH3xZtpntmqnz1ecxVpTFGCyhpRzDveZZW3x8kqN1iu6mU",
  "key37": "2Lqj2PDomgV5Aet9a2wWdk7GrvK7YardHFZMBSt3dmVoNJhVTdJiSm2n9unm6cgpDK3cbdMPaTv4b6WzvopAekDh",
  "key38": "3HaSxLEApbjNjACqzJQpu7FUG8vTmdQzdDzJpQPAS3Qw7ED3Bpz3wYjbJwuwwB2HQh9szb8r8Fu29CTDbBsDQ7Xo",
  "key39": "54f969LmsWakqed5iRdpZpYgxLgF4Nw9LfBZNzgPsFuztq329Dw5uDeuK6Pdu22JrkxAuCZLMSVSqFHM5tQWzNKQ",
  "key40": "49nuMSeDz9EKAsu8nYoofcyoNHLhMGDHvcAb393V2oYYmWBzZMdEvhHfNcC867gzaQocPkMKf3SCtvCFJfMaoptp",
  "key41": "2eAKpNYhy3naRoqwW7Yq2AYQmr1Fx3J9tjARXruMLs18tEozrTA976GRg4BPmgeNnxf7RDNETNTArk7mHEjyRQh2",
  "key42": "3h1LHG73J44nAZNhCB46q9LEFkdWMmu4kFG9pTsfbfSGPfECfcHWkVqS1r2cMZrza8CewnpXWGERuRMSdk5yYJLo",
  "key43": "44GdsCqis6s45sgKkPsB8TQKDYxThv4AwDJcw7M2uykFrScyaJKwXPTjqj2WvB67H2xJJMCXorrR9s3PyNc1CgGy",
  "key44": "5xLsTVdtcCRdQQBTMbdyXD9o8gx7MkB6fHWku9HaYeSvrpDiu5TyzYiUCDcDmcTNTpGkgCpq99vkh55tgXCRytCv"
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
