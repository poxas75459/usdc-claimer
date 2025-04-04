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
    "3AbTZnZmPDUuK8qgkFLThBK3tn2XB5h6auDBmXCk71uhMg9DNRah18rU4bjyGapo2xu1dnx7hapXB9hHuoVpmwmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2FYqQVtycb9dHiDiJDfNkx7wv2pLpm6ukYp1hVhyjEB8kmCRV17vd18Vvce8QSSefLhGEpfSLyzwEg7CAawjvt",
  "key1": "2pG2MwK1VeSc4ce2x8GBNa6T6pbfTy9jtG1znjpjzh2gHr1bvbNGodhhXFwZ45cMyQAHCLvdboiCYsEZbB8igPfB",
  "key2": "2ywNswPQJ2xx8UZeZusu4ZPr6LewEhPrHAmekZ5TVV9haGBT9oZ4yjLkhtNpt8kJkGLXtypYEFHLR1JYxpeCHzre",
  "key3": "4Bjd3c2yvWvhqRLabZnacSa7HGnYGLi31Yk7gMruGmZw9xSDQcmCKxbEffBFtHnqEvCrWhPJeNQzBGYJqP7k1pVC",
  "key4": "3g1CRBwnirwn1DuLxRgG5MYYeZMza6oPpUT5RZy9U4RAjVX6CVDb2s89AVnxmor72b7TT46VeytB5myQkFeVNQ3X",
  "key5": "7XjL3q1o8GkXob5iQRyc2T8gunqVD3y6GZH5B26XzmndaFnQ1V6wkd1iS8TxYGhyJLS9yhG3AaiqcPSoSLcfdaJ",
  "key6": "2MezHkvWU4jojzw3pAqppt2zgpppChLLhzQzZvy92xRYBApyWnzm4x2RMPrUbE2R8niDmrH8Rckayh7a5xM9ASU5",
  "key7": "5w4d45F9N4yjf3c2ynQgfT2hPPVifeAWeQnvfb4gT8D6dgg97QkYE8fjudgCKfizvV85vM6sikhfEraPUqNUr4XX",
  "key8": "4Kv4fPadsu1CME4qrgHueUV9LY9GQmQqo77zpdpv6dJT4nMXPBtYNRFz3PwNVoBC1o5E8gQddDB9gvfcnTJ1Hpfs",
  "key9": "2ubEUHeyMCrNudY6qVJxtvBJvDU1ghab7rPDzwdvyPnpiEoNsDNXWGyF5UabS1w7S7Q8NTtRQB3ge34qfeoC3APE",
  "key10": "3Lyf8KoRYFjgZMH4p8jYCKTFEQ7kUcAmsN1pgpk6Q4VhM2ud51hMsfEH6267oKPfM7sbQdFyuYndXHfTxerCcsu4",
  "key11": "5gc6vDMNu2gn2grFP8z3CABiVpWE8ne6P96M38stPtLGN8kaBxS9qH8iL2gQab5S2JqxmG2Ffe4c19vVMWTEQSna",
  "key12": "5aAwfjcaQMaxsRvqFu7r596weX6ZtqJPLX2Zj4xnP85wwmvhVc1kVcLbD3CfNoohBT827M9TCKLVUSVybqQYMg4u",
  "key13": "4ZNUY5SwdBtfc9uifZn865CdGitX2kKCc4pDfn4HQeFqNzSmmJJqYGwG4tsgdPQTmzg4SUEtnJFb7E5E7tsQ2xEB",
  "key14": "2KxU6c6ZsyLFSPPsHJZNUJNp7fpLJXpJk6hBbNYHbVkZih3ujXqmEK74eL5Gwdo8eE9SjtiG6f7hdVUKPpP2tUhX",
  "key15": "5Tqho6uwgSRJL2f5pJ3xS7eedUnaM3UypFD3zKVYFnQizn9x4mjs7qk8Tc4Zd3WiPzVKT4bRwvgJ75ybq64SMvEJ",
  "key16": "4RdzPnP4GLzwNBw36oFgmfPv5tYU3GXRcxsRKi2qSYLqQY5B3Z27HLzCBNpDPNdTSgdkneBy6BXtEp7cbKk5gDHX",
  "key17": "5TtH7SgK8NmnfgEujvvjzviF3uR8ePiNLeyBMN7zxaQWSKttM6r6kSAh9mmubSY9MyYugrgDSo5RjjJLFBPuCUau",
  "key18": "7bpJN7XV6j35vXV3zWr1kC6NVEqYWsVpHVri9pFAo3gUJTytqYAvvu3dGXP4dAD4YXxqNTiZRpBN4HoxwUHDAS8",
  "key19": "2gMM2TfEiRkyuQ4Wy1qJswEdr9PSqYdNEN1XHTFhJKg7ewfCo2nS4q542GsverNCPtUjmiVtJwwtXjKQCdGKoRDG",
  "key20": "3xEDsgpBJGqRMRSEfCLd4f1Vz9sKryG3MEduUQRfNSAWttob5VmWAqxrWLWa7h56JtVm5vWQpd6U9eXb4nBCqH5b",
  "key21": "5YJt2cUToee7zBpP8DoHNNqEpWXgSWFEebGCvsrpKVyCT4TNebsF4EFDvviT2ksVB9bAScTAi7juR2xsyofqkyno",
  "key22": "2e8h6sRGDr36nm7HEknwyxgjk5KY5nyh5HH3zV7bF9Vyjuutdy4r5AXzr6n5spYAaRKeA97jYireGHbjJ1S9hSWn",
  "key23": "4EgUMwjRkJ1ED1KUKLnthoGkuqNC4o8rkugvWmyrvr68LfhNGqYkUzPCHn1X7RU4ZNavi6kfdSvqQsykGTf8zRiu",
  "key24": "4m7x4eBHveG7ywkVRNf32N9z6f7re4A8CCkLs9WMCfHPpf2ZGTwLaJNoGtTTLqDYdaC7RfzBGjYiZ4Us8K7ezWXn",
  "key25": "35VzCkNvZTTjy2GwDCZseZoghxwVkNosZrdaw6vFgUACwBuhX6dpaEmnCHDib1cLqVmqjeJzf3x5NKpAA1TeD56b",
  "key26": "2XxLC2n2PtcYpg4TviBvbp2XDVXuytEXVeoaUqKz6Lq6zPYXSARtLDB7d6eHifNLpV4ugR8hUwSLk1Wj9VmPgDtT",
  "key27": "FKGjvHFotr8sP1ESA98S8dhcKweSnBHjfvmsFtpWheuJxQdVqXxU6m7HBZtz9kyGffF74nbMMCTvgBnXcHqccp2",
  "key28": "2ogRZH3YGuv2Bw3yUbukxTSRjDprEAdAvpDEqp8gCRGoWHLpbMPXVj4L1KoWd4ewuCf6PpBoZb9RoFPP6iiY37Nc",
  "key29": "2E4xeX8EaBeREZyTmfvLcamucjpivSUMcUtR6dNM5xssymsM7HNKtsqSMbmm5aPazjqKocYRVAbMmQ1PXk6d5i9c",
  "key30": "3hYC8en8wQseTh8pxeNjLoLiPSeAqhEa2us7dAfr3xLQTsWcqtR8PD1d4fvYU7nqazCwRp1TWeyfyixVNjaq6NKK",
  "key31": "4jvPSfeEJphLXMw1FpYaBNEHf1Zpwuph5ZqiL5MwmmvzzpkFUrFmKQ8ynxKbJG8gEcsqXhD3RRJKEkycoagatruk",
  "key32": "5J1bJcgmCCjxX6gzgt65MKBqAbeWLQ4Lcp1bzKr2BeC2ZFVSEbLTxXqznoABdjVMDtYFV6tjzDz69bRzLipMjEHC",
  "key33": "3kA9314sseGiC1jX1aD73WryBV6BBx59AGY12Fngric4yiQZ5EbmrssEBJGqmhUzKfNPntPEaxj6nkGca6jU5D3k",
  "key34": "6596VbFoTASDACNf1VMvFasrDQ5RZNdTTRYxtE9QeE2kvYgrWz4sC9qfoJkBex1WtV9dgRtPWwZHFKErixCPZtbq",
  "key35": "2PrBfdS5Cr3wMcuGqH1Wq9RZjjiBLtZ75u1NEexEZ14A6GTqZxPMn8NmADq4hVSUkPhZx1A8V22wC7MD6eKGQsSG",
  "key36": "kD2HUa121hLnu2waxmEmdFawfP2GWyfgTcy1U76qasC3W7BSmKw1nruJAsiN3xM3rHJDUtpWQinJGwJiJdS9EXF",
  "key37": "3zzWpCwTsWP5wTmC9aD894Qv2UPa3ccSdGK9j7LpYot3EGCvCwoPeUjytcmmXmWYEWALS65jK651DREfaVuKWSg4",
  "key38": "4QMNxyC2QmRpZK9C2W3e2a1spaMRsTziL1uzxn5UhuR3wmQSraCATozk5SzoJvNpRsXUDYQivt6QFA9Aak4B4jh3"
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
