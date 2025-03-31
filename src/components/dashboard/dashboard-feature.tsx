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
    "3G7qUZv2BXz1Pvv7Brt31YNaNzwg7YiJBYR22FBw3LXfgi9Loud8BaobCwgyWqVtCnxixwEHm2MjooFUZxtzWSMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWcLFXqha9JZVvC5RYGJjd9v4qexK5WQqd3jYiddnLhzfeFj7N4ADNxDKsw7KvTZzpxkBYo1QznLqRmAvf8Sx2g",
  "key1": "2N4mjjP6H6uShKdmF3wnbAaScT5trmAq22tcraXbYSzEvQsg3Wzzvyp8QoyRKPK2t8TDr6hYceyUXZSMCVMyczgV",
  "key2": "3EJ5YtNDpKB7cESedurP3s3JXbgSGPxwm6QWFFERWiQfRCQRyGx59cKR3BqYPkT59Mq4cVjcEHoUbSNy1CwsFSMV",
  "key3": "k3TZFTq5WNU3MbeNLiPdcyqGmvnD9wNzCF7Umqu6DbNSsecSudFqFx3X6c8SM54EroN5D2DqCu43NU1Ly362edo",
  "key4": "7hMThD1uSuGvRMfWcktsQ38xzVg8utjHMaU7grvMD3HXykfbkz8DG1VFsYwzNgrTd3oNQrSEkRFfcMWowQGvi6D",
  "key5": "55KAQ1MdeXJY16WUYYeE5qGgcsxumUhUvCZcojSYugqUSb11wi21WLkAScFnRKUqTtDgxhEEqRXxrdeshWJtLEcK",
  "key6": "267GCqBxxqjAfiwNAveN3QRFQa7UMMybRqQH2SBUn1PnUeGr1DmveCu3L8XNZKVd4yyYqKVvD9ahvtQPM2Gkq5w5",
  "key7": "5GoJAsv9oznUgrWdB1SXdBop4Mgk226VvWbSbmehSmNBRjMmnndRqD4XddWpALkqXW3CqMX3nAfmwdqKhZ64WJRW",
  "key8": "3UQ5SYf4HH3C9qeEBEQg6TkBmVfKDF8yjio8kzMPRaNtufdLtYx2vYEJ5a5arVs66HDFGw8Nngej7oKQohV7rGJL",
  "key9": "zS6z4XxjqquhW25HwrUW2QZTwXnVYczbcF796qHvpeXjsojCTpsoY9T4DTMGSuw81Wd8uD8bVHtGaeuic47eBKZ",
  "key10": "49NSsw7AcUTvLy5F9HDJ2qJX2SacUHF8dJrjL3hzsJERzDaF2EJk5ANHegANwvXT1qRu2G577W97CtPx9HLN1YPs",
  "key11": "3jyUaTWtPWD98KJGRvaB7A1ohxnV5jEhuVA9LBHLFL2hTPPb7SmouwKwokwhxHgVjgxiHnMuKqMWCFBeLw9iiXFi",
  "key12": "2dHNDuCTmDn3JUJg477ZmeRquzjSPfUVe5GJxUKAdYscbKHVDa8r4A7JT4qLu78USVCY1QTDiifYZQkB2udxKx98",
  "key13": "VqZ41FVDYmhDaGXZ6qpiQs539fsoYr52gf8SPfyx4xSTWWdge6MphgogSna7zU2j4VNmrFyPRs7nmam3trUs9QC",
  "key14": "2aXG8hTP64PMW6bZqa7KfxNN8hyoa8TENUQCvEtLzCosZNV1yMZCiAu9NRFLwWgDdPiS3MC9QFz8QNBgpRjPxsTb",
  "key15": "4cxX2Am9aFfoV9W147tBemhR8HdM4bRHVzHQpPVoMV2kVSM6u1kQAakvZRA7JDXgqWVBcHkCyaUguZFCGGEu1gxF",
  "key16": "52v4JQYZoiHriktWS7B6vcUAPdjvJzkbZpZGvJJxBmWqYhFJHxE5tCHJdLVaZDrE27PCpNBwzpRiCQYqzvxpgNVW",
  "key17": "d6BRAVMJL36nXMS1gnPvqDjCYHDd7Kpog4M2jKjmMdodUqTfWZ8KbWXpgWfSxcyoHP9tDCicZJWBapoQYSPUo3y",
  "key18": "2xGvNCuxEvTDPmpbd9oNrV1KbnEshqNzBxqkmjHHVAvYLMCSAbL8LPsMLhzNWx5b4MCgvnexnHa559cUouvCiKeF",
  "key19": "CPYEr9NKdMMHrfnu7acb8V4KnnGJdMT5gbNSzJyBCoMACA9WdfL47pGQQxnSWzkUaVpDG7rsnsbXCyM6GRQeidT",
  "key20": "4963ktzueQ5dhxi6Wt5cRXp2tsNnGpftFt9DoFyud7Er3kUY4PrkAnBNfm83DyjiRSjWKsuaR2oyjhJWXi2JqTPG",
  "key21": "5H1VhPHF191uzGySeahB4wGQUebHwb5c34u8jqcbZyc8DaNVTFdWftxoCZnEwd2j2vA4AHiuVaKK4QipigVRpxTf",
  "key22": "3CnsYgVxtM2U9iEg44mBmvFZhhnuz8b5f6sqyZXVcnfg8DznSMkisa9h18ZDTfV5B7WR4cVQwhPtTi5F53ck1kWM",
  "key23": "3UjSMJvTK7TdGREcTS9s88dHrWhMM6YWD1AYN5Q9W36NDTzjCfgsp7Uvj9ZZ9uVdeaLbx9QixfZwswYRcV1TVuXN",
  "key24": "5jb8ygTWuQqUgnC88N2kWyn1qw1WMayE6bMCEMDaCoW8gHpGEE9uNYxLXh5V1i5aefoTmCZThcuq7vaBWs4voVYb",
  "key25": "5fKyjKuT2tteMSC5u9pyGK46JxUgGQxUD53dh57eBs8axet6kdTxQxJVmaS7Fo82sVGDXEct1PoodMNifVE7SVJ4",
  "key26": "4y7ckDrWZbjuNkXWqgV8smmmJjYHnmTG7FvxhGwJcp1m35WNXNhuLFx41P7oZjEfUzi2KU9GSwqNurHbw5xZPzck",
  "key27": "2EQFMGQMKhe5iibhLGfwNngxwA3Y6azqaMmpetmjVpMwP1QrFc8FVGzdcHx5LrsE14WdJAsrgpd7Nq87GVqXnwvb",
  "key28": "3y8w8pMhA6TiKNLf2iBgBNUGQ8o4M3NBsTT7Z3ESaXQ6gcWDW1t3FPiRT7NbtK8KysVmC86pkPW44AyL3Yxq5ojW",
  "key29": "Qcc2hjZsiwp3i3VBVNhzeaxPboqBVDubaSonPaS6CFbQgxorcsjeDY9rdHP6N2YmWTeGg7zGh8qqxjLdxCPsBjm",
  "key30": "2P7X2sHdqAFmqNznatvJTPp31TmQAvpRtoY6r8VMdQdoaFFqmVkNbWuiCJmoV89zgTK5FhUpLAdLJyxk84ahmFz3",
  "key31": "2MkcXMtysy3Sjq4ssRftbMDBqrDM6XFPtMARTESwbK4pjsASfogcwtniAYC1Gv4fkdcYqToCCKhcjD7aL2bb68zx",
  "key32": "3A37xds1pTt5JKmu2MQwW2943WU4db4MDgPKczc6CjUcZUsYSrGrjpShTmBTUmKNfR4f7G45Uz5qadMCeSwrSvNs"
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
