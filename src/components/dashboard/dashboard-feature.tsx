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
    "5BfGpZ9tsdHMjgMEXsALgEeVqQUDqXYsPAnnHgBPbUjosB5a91Mf4wbKX6dzYL9kEjJVsyTVMt3m9WzwzpijM691"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DkD3YVmxQgKwEQF3jhxZJVkjmeUgYehVKZUJsLnLCYD2VpykMfjUTCBqW3VUp4nNKtfqTdxkC7BsYDWEjvDtdqt",
  "key1": "2vosZwo1GyJEBizh3qS2gfmBSGyGMLeUzWB9ZK35igfaXQt6QHTQSxtFbhN9S8gdSdD6tPuQ8vn8iA9VrS7A8dnX",
  "key2": "5wfCR47SgwdSyLFSBsNFqfNejWis1t2YQDcQ7GR2v2vGvJYSu2Z6XANtVvtGJvsj7NoBeZcixc5B9pswqXjegq6J",
  "key3": "3XNuZmwMxYLQTsmeHRyobT3Z5T9aGdzkcqVE76J6Kqs3ibwvd8kgrfkfZ86fSLvHepMVbXSSEQ7MQDxjML7BLwgP",
  "key4": "3UbiZx7pvjMGwUEoBTTyy4XbBVKgpj4zsrFtSMktYgP9RSuZoL2cFZRYEFr4KhSEji1WGbBZAT4jsiMEMsUq5591",
  "key5": "CiDPqqDMEZkNGvQqNonfsY9xpf8tkYMtQebiNEmUK53n1HFanBQEX2AcmEazgESj9P4MzuMATGXrQtaQkn7Q6KV",
  "key6": "Xmhc9fWx2YbxFWBGMQqZZ5dUHsZkMbW9EgsZTeaDTvXrkZQdKdHuN4LDv9NWoncrSqJNzUc5M2KuboYoEaNYBxr",
  "key7": "3ngPwkukRmuv25hunpMuwcFkPd3u2dgQ9DSoEScRLvZesDBBaxVQ6kZL8ym497wWmSwavntmeRfmjXhYwNWLzMGk",
  "key8": "3wYfnnJVootnxjsUQnyLBrmGycWS8u42ewfc9deyNR4CKyFMVV7tUxRhoAQkLqdgKL4QjDzp9dMnS2qnHQLybTPn",
  "key9": "3QeJDtn3RgQXKxAUGpabE9ARBKt2wTophA9AE1mTXm2j2YPJmq2jJiZ8Fp2gA6r44tunGFZ2pTmwDhtrZNgHU2kg",
  "key10": "5VUVyyCr33mdLtDEaDeDD2hzEkNtRurg6yXD61zVLieUT7t9S8wmMMW9judfRLypcAz85E5oG1y3VooxZfYqcJv2",
  "key11": "5nNxG6LaQtZic9jBDtAgTYGUqjXA9SRcoiqea7iL4NT34XFqYTSqYMFAj6ZWpEKrgRf7YXxrx5NDsPEErRjZQMyz",
  "key12": "2yJqDp9T1jBk42gwqvgj62SwygwrNWbuqryvRiTo7oYqFGbYZLSdC2u3SCdUoVckvRuBJaUJPcHp7hTdFCh9RmCS",
  "key13": "3oyn9uH7SELtcPYd8r8pZZtPF5kbJ3femTcfhcwCJqa5bT1abFWrrafTLe4D2SzkcJrkfTb58LpiraHYNvG3T89v",
  "key14": "46HZGtB4DG4BLvwCComtVTJSGHikecZDMYchqkxFjr9Yo8MzToMQha7Md3LWLE9gcQBsmQkLxo6eNtqFvfjcwFYJ",
  "key15": "5rf1uDXqKootQgFDQXEYVyarYAHZ9gNFdxoGBUxiEYJhRuXdDH5XSiokZxV8HSnB8YiQJxZ6WH9qy1SqNgT6EQuX",
  "key16": "2PXXckcHqbRwtYo5UETaa5e7MW5MFhvE8z71HzrPX74MVRg6ADjuuuCdbazxM58eXFWiTVnHpNWoq7KpqJF6uDRF",
  "key17": "5A3U2RsqNWPq8WeXMne2oWAomvkmJER3knp3WbJiKJRh7GkntqSVLKT7nuQVCnCodSSRQzErAEMa2WYniKjeoy3g",
  "key18": "27KzzAjYrjJPsxnpW5j21Jat4hUKzBtQimKAcwEeThho2Cjq1QdhRq3njb2jd97YoBrC6bhq8M471vcNSsYTDeaP",
  "key19": "zNc9ToUdHfYBKJHNPeZRfzX8cckh6ML26Ymziw9ssPykBcUTPtPXz6o5bVU4JZwvd5DHnARE7tPZ5mqDXXn65HF",
  "key20": "3dhDyhGDjFd3knf2QtzBK2onH6cvnsb8trtQq3yQPQbViT4pMahwPgLq69EC4fTx9XwPsh9JD1kd1mMi92yyzj5w",
  "key21": "3tS5Vt9hdpCipTub9fRCMY66v5zdbGXs8TiNg5mbntS1sTXQqVUojdynpA7byebw1xgSLvjHTzNe8VEnmm5bcTuF",
  "key22": "3vhszEPKpgCu8TPBzjAYeHLtYXqsrz5QWPbxGw4dWYE21SZ6hwa1TmK4ZJoFzz795Q1GQTebkiLDSHXLe3sRrk8",
  "key23": "4SeQUiB6GfAhvgiWfSsgRsMSbh3vTFFULg6k8A384JwQCeq8iLVvBewjKERE7G73KsJr7dBT6Jeshojy8gfZiQcB",
  "key24": "47gbhiAsmPRpMgGASxDS9ahEAVqHntaqaieqig7qjs38A4n1f4CCzZjDH6zmmoBb1jegbHhy4HeU5gK5GoRKELWd",
  "key25": "3ivT39BgrNVNEASEagKaPqKRCKutZmGdsRP5h7tiNMqX1KnT9MNZSk69Y32jv78ShgXZKRYMpyZpRpbPShHgNreg",
  "key26": "59djycrQxYdUHj8gTmT1rXmvtwg8LJB8txM56AD4qty2wprPKhehHEhmbKHtcHYUFw8ku4Xfp2vLiGcQSLp3YGu",
  "key27": "iaJqXJ1adHuzvKsc1PNB3RvdCSi1mUiGH17NgDAstA1BC2ZEazDcV7PSbiKc1b9cepRzaAA8PbNqCwwvakdPjiE",
  "key28": "5JtwJEVLvyDPzNWAEtv2aDAN87MwoPZfsbMEtNDrX7a9h7PfJc43fTVswzq4N8pNJUpsDg4eBTRATanQBKXATHK9",
  "key29": "57QFLRQZvkLBu8UeavdgaWrjGXHJqet7jfEwX9EnKPF2XRufG58rGDnTCWFfj4AiwSdpduZFBvqhnDqopTRkSrcM",
  "key30": "3UUJvE2TpZwfS23UtzhkZUboHQSMX4b8Jxeh4Uyf7Rbd7dD1MWtP2LPCCCvx36uKCrq1FzNB89R95R8B6MMrAoMX",
  "key31": "DtgSXWmCx6xCqWehjSWvb4MzBEYh3SHL16qYT8zg1tpjAvkY7pTDQ6umSk5omgzhJq4kFyqsw5A2VHKMVM6Tb2H",
  "key32": "58HPT8dCFG1GVExHCwZaCgAyzQ5GfV3MzdoUg4zezcjH3Npi6BqGkF9TFMJFoj775YH4L3NNdCgYXJ193JAYLgY1",
  "key33": "4vLxVanChYPEus7Jh2RGJJtagVbLyfrT1zXzF2NmEWoBrAjc9NJmwaGTiC6skpp7ixbcFu4X6Dy9hxDsL66zTjDt",
  "key34": "3CD1Z2qTm31Dh2mPgWRmMWvmys9UpFgbZB8sRcJQvZfMru2pdFcTzKmxsqCis2cJG7T2E8EHMyBTmkZ3DVLSvBkS",
  "key35": "3DTH6vSe4cWPAYj3iNujHmYCEhYDHKnb82N95YzsQafE48cuUNToYgZHVRHjeza4mz7ro3msS96VFFbeZJjUPvj8",
  "key36": "67UFB9uHnwnxZXe96JH6gjtA2NZCg3JhJjwbut3udcvVZNrp3wN3PBtqpsWWvBwUNL7dTUDk2JURsr4CmnJJzc33",
  "key37": "3LysacGXvzqkTF45qMnwLZJtmugmJkLiqhVmfWPAsj1AJWzvfQgU6skz1kjY4eatCnuv81RZW9eyvuPYZu4JzVEX",
  "key38": "294aMifwxQGK7mzTqSZsqZR3iDtpXuEaZNuEVRX7brmZ7MhbuWqT5wMn4DNLoVYtrU7jtquLWpXdmSpPjKbfbAsM",
  "key39": "3CrUh3CYL8UfKX65ox6VeB4yXJF6XSmN4T9onKu8ve2znMBTR1e9nSSx3nP9cDKNcksP8a9Ma75FNKTDtFnv2qrn",
  "key40": "LjgiDuMtshrkQWSbnNb2sc1RMBbeFE9eL18H6iPkTbWcXYQbUPs46xLuLSgrBij7Jzfis7pYBS5RtcQoGDnTf9L",
  "key41": "WPdDCLAkZ7TCH4fB5GqMMg1SCew3EEvU71RUYeFDfLPAU9VhV4phyYk5ea8zQv9ijZG9LGuynM61dQxH8yWqciA",
  "key42": "4dVYjyrWrnXeSoWnnqSjD9yjtVAX9RPsJDw38uGqVwz2SigqakoFpgqj7NGcXpkj3eCjAkRP9VSa9PHXdfijZVu6",
  "key43": "4eced5wYyh64fPjozXD6ETURES8zXEouMzQeENnuHuxZowMXwArtnMtN3UooKXU5NX8hHwYLNzv7rt7fHdMcLMZw"
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
