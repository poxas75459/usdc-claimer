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
    "qCfvjrrZTxAU4Jfk9jT9XNXwNFuVqjsEK6NwsgHNYtDZeK7Fw8YA7QJZRribdy3cbUG9tBzqYm3V3gVrN1XyEMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2DuyXHdKPm7ARNNt3sdNqBPRYpKY8NQF6Zmhcauf89EhH5WyxAerzE2v6B8BUvTtrTPQEK2Vwv9jyP7WZnr5yB",
  "key1": "4Pss1GmWmiFAkExiPmL3ktHuTYxqjtBEDn3ZsNces1YuHiuLzbCNsz3Re9AQuuaBULZoXfMFN4QoUcXfHYUY6Xr9",
  "key2": "2o4Uk4xQnriPTirodHFob9PMztA5Px5cr7xq3FjhsXMtvXtzeWy2S79KY4LEYexCeLmNj782EFb84scu3wtenbPU",
  "key3": "3YWrWXMjKnK8SFLthY38nJyLsg6dN7WwMLeqz5sBuRcJKS7DtWVMCdbipymDAKSCc86RNczKUtbM8fKNVaoivcj",
  "key4": "4ChWbCPDXSDqZucQWVLxCXV7usuBQ7JaWJ9ChZbCPZwLNDakuKNZkrp3Sv2p8dx6YPnEyefBHi2uDRgBePcn2dyU",
  "key5": "4CR7TrTwQy3mju1EnDVjDDdDsdVb5VnoJBu67mtPRKup3UZJT5juikLJH6UrF2szW4i9hHNs46UDs5u3qvDcY3uB",
  "key6": "mRGLdfamB2SgvebgMkneHB6q9P5HuHHUX68YGXepJrq2QDDQBSH2rJsgjS1Z3LFdsLh5qD5b3H1rgo88UiFuTwJ",
  "key7": "4djQNtFBLDgetn42pBjjhLPCo97Qj2rSKB7gpKaX2m5wLpaY9A8EFaUFw8c8ZeCDD4im42XFmKHy2quM4a7aqgdG",
  "key8": "3vTiNqBqYjBfxTPZtzz4F1WAKtfwSyrXJCMerqbXbr7d48U9T27vPVwdFTDVbrLH2WfjmmW6aBPWFggLyYqYFyfM",
  "key9": "4ybJnTBY5F7sdGKVh3n8nkCSBrbCWPTUrsHoqEkJy66tN8Q4vp13Xzgt9KyPAGPeGrg7PHaaoLfFUQCbDsnPyPat",
  "key10": "2JiNF2HXzCqML2C9ipUMBSBLcLKCD3MdNxWHyrfse77bu1KQRZucQT6y7vNPfNoVXtRQCp5raPbhxFPhMwLsapWo",
  "key11": "4hJ4CgU6wA6ZPng8EGvsMvhodhVdPyzioV8rDbdRQCzfBEoGWpTQLV34NbEicHbBAsJZYoMspn3nVobayeFmPwbh",
  "key12": "3rW6VfRWwVPhqjbtXLW3hMubhFg9EB9iCdhQCgTTnNWQXTf3K3Y7iJ22FgkYtRcNvSt5Tf5D6EQ1TJCvLDhuDNpR",
  "key13": "3SSEaMZhK7HRZN5kNkfE4GNFsbtdiJ9RVVwcsvrqZgFE7evqxcqrFJQpG4Wzycs9fniPbYagVwLYbj1pGsgcp8NY",
  "key14": "2kJty9Cxz83M38DSLrsdGiTkmPuxGiRUiSJ7cX1yk1CgNRp4dAb9sUYWhRW64vCSrxfWEobkzA7FVrgLtAUg3sGB",
  "key15": "Ti54aNX9uDjcJXvhR8kEVKLBTw7KtT2NjABaVfeXFphKmRgrXCXMpB5rcFZb61SHDaLnKPxEPCijofSjan38hEr",
  "key16": "4F7FYRm6xD878tBp1k5FKz6e46tHDyHpptGgsxQLFHZB8yEXefyMY9bd2kYAmv2yXciyxPZLJvqtHfEhufugv8mn",
  "key17": "2wGdY355VzVSW2ACUWPcKUcKuqRX65HkdJ461ycAnydPcxmsEZDVyQME6AAcz914cUbChuSxcgLhUE9G8XB1r1tm",
  "key18": "32bDAhqSr6SirT7SC6m3KZrmEZHq9A274jQiAFfmtHtFLv6oh6aEFdCq2t8rutH892X5LwBkzcy1NPisUa1642H4",
  "key19": "5BAyGfPrgAJFyzf79XP8q9huz9KLvUwYgLs4je6QuhLxpzXaSqGoNy3SizBBxyCyux6Rw2ztSvj81B3EQUEE5SZT",
  "key20": "ELDpzbZebkbNx1V3hd5yWL1ZyEA7M3q9v3ruPChYe5UvL1tJZQUMnByCZVkdSJz8dukMfz4TtL3xT4L3pjTvmUk",
  "key21": "5vks6rpaeNeYUnX2LkU8Wj1iBVJQgFoZJmSnF7JtbnBVYH8nPyyrx7dDGLo2HNy7b8KsoeTHJ9ApeBL4FMGttGeR",
  "key22": "3o2u32KhsydeXoPsXp8P1S52r9QULWm4LezsdD8qfAEmV3XyFFjVN2UvSFdHiFu3WGXPURHemAEKAmNgXSZwgjnR",
  "key23": "61kmbcju3Ygi679Rh2pcGStBv3qNU8TnnYQ3dnHWS4qm8oPeNPhxZryHf5kYZN8zu9spnYwz62gKqMBhez45xANB",
  "key24": "4isPoRjrUvecCpKs4pxwP6ukUFjFATEWe9RVnoKFyBzLegA6WwLfZ52G9eJtL7dEukNnJcb27qhdWHviVqRzbF3h",
  "key25": "5WhsMZPqVzAZ7fnMKtC1g8AvBYsLHe5Mf92ugxbtkhXJy7hFZ9KJcUavoKHWfmU8gsRJSMNbcgk9XGtnKUFh91T8",
  "key26": "5GrnJFHFGDZETDpwcY6yJ5xuBsgfnPR6LiX6hz3CKZzWiRwSfFctusmmSvzjVkCU1TyZm3sCQRa7YVPfbUjpZfmd",
  "key27": "5f12robB7kzFTQiBWmVFHbw39mZwiW6GjbLF6VLVNmdpCgKJPiBASbMfGvb36hFQMb6kSyRh9X8CgNiKe52HCcWm",
  "key28": "5WW2bdVdnnafvFDcqj7LaQ7tS19TF8hgVyfDCUKnNQnJth1fBhMPZAZLRz19qw1EE8dQ9aaMaQvmdx4MRR1yijG7",
  "key29": "4TKMHhEyLvWGUyE5RTMxoTFPg4w1biUh7fouzt4LubMnjLBSQMd5xMP3kcCoN34mwYcV8P6cU1GceWS8ozYQg8oq",
  "key30": "5vBgrH6jqmSf3CU2797Rdwwzcwkn44c8gipfdJ9QEPaHJosTJNVo2Uqj8EbkXCLbYke5bYkP8txJEWecmgQGHBiV",
  "key31": "45TfYsXJeXsfj4YFg9mksrk4tLgZY6bbYqBFcK94tQ17mffZ6TGiBvcBhfTAfxaq6rXLWVv1xTaks6Cr1LciQThN",
  "key32": "3z4dhdKfU6ncXh6raeJx9GV49NpA7Gk66p7bEo7cedpTbowGcFYZTijRQ7RbqVAwLXsG3aRUQaagapcw8rDdJZkL",
  "key33": "44ufuk9e7qvuQRT1QSuxoojATrM3W4FAZpcBpvAuh8suLCeCF4CZ95qg9YAGjR49xYvFZrqaA6uGaimeJ6rJXbny",
  "key34": "5rrQB4cuvE5pWtvjFKrtA4cQF3TUpRmwdcDpFyTFBcNsGEpo56Drvc1eWvG6ahWkN8qSLUojaVhPHq4EVWGpJ2RZ",
  "key35": "3JTDdNapjp7Bggkc5NQUFsyKvewaV2MxjVv252WWXEc64gjjJx9xnt1ayFKrZBTX8hVDBstkSckM4yZB3BjAvR3w",
  "key36": "3b3thfUanqGbXdT1mnN5vCcPN9dBYE4youoHg6uVHaCW7hJusoyyLxKa4s5ydi9pyU5Z3La7jc5xQ47ksocnsbwm",
  "key37": "4tWNCHVGRoZ6JXNP3kRjPG4HtVrn4JhczLTjkHaw5WWJrrXgCUES8SBpdDhc76YGkzZ9jJyRbKHBXHg7zqjGJpzX",
  "key38": "34H3d8x7CFidzXZJZL6eDx1SK8b9bUfaPa7fmX1TBxAypNYEYSyxykVjMm6VZJaz7qmvDKrVkSNqbRsFeW7K23qG",
  "key39": "4AgT5smHJYuugWCrUHE79Xf18Dd2LfZc9dhBSEw3cmQQ93VnUQdYcaHMEySNiABgcyRAuomKXnwPDbVXMPg5bycs",
  "key40": "4Sdj94qrtoZSHypBTgZDVZ1tGp8SFvLP2MtXkbquaBXJYFiRFMAqnD6Z4y9ioJfSAi4VG7YusB1DwuapPkKKps4Y",
  "key41": "2zuVzvDTAJrnbzpc42U6cgXriSXeQqiPCsqZ5SkMQ2wjD5rzqSAVmfUcZsAVBDkJdnq8YEkbRSKoPFfoC66TF5SA",
  "key42": "5SvAWtd4fha8P3He5j5FnX9n2xmJS9mqk9sd1sB6rF8HVGWq3uJTnSwAxNzY1hQBhVpA6nRRTrBkcFyKJ5PEf1CP"
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
