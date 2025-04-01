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
    "4zLYUTPFudkfyiUpoEzLK2rkGsWSmFoxdtJiYzG8DqdPbFv9E5HaDto7wDskexkGm3c22wmjZdTGXcWvsHRWrMLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LoQB1vo5HQpVMrU55DYzKphyvE6QWNgthShPKJNUEjF6Xw7YMBg89eTySAx1bigSdXkBy3JWenumVdYU4RHaWWX",
  "key1": "64BQVTDcFLr5JXZqb8gZDDksC5f9BjkeFDHtM4jW8k85vXsZ2kGB3tAtGD8MYTqJkvNpvSr7MdPqY2Fy5RF6paWj",
  "key2": "54f99N3KtW27eN3oHBXs33oANsCZcguxMDACKy7Br2o1nNVh426JDA5vFTdgEv9XtSoiKQEJpvLduJVSWPJhbZf6",
  "key3": "62d7F4cHgagWnoPDZNZA69HYFKLebJ6o8VJSiwGA6UCHGqafJqN7YSLVv3HrtawhBRfKeMQK261WidKTdFjRGFuo",
  "key4": "2XLUK3uJbikgasovmNHPsoUVfbp9iDQVzp9MGXkZwM8x9ZYTxadUFLqERVmjyEPgCMJZzyqwbKHdUHoHx8YDxd6x",
  "key5": "5MZDf2JS5jFnwGz8m1cvmZWyoUcXZbRU6se2sUYVzTnhnk4Y1ufGhUAu3RU86etctQUCAkP4ExDbq4Fj65d8VhTu",
  "key6": "4wLqeHUGGdXddqc4ggRv524D9xjbv6cQZ1TGQZCetyLGoJkZYE4adkHcNKEw23WsaxkDtAFdqR8CVSyaPHHenMw9",
  "key7": "3x5rodbNJJZyZj9zNaQf9TXo9gp3T7eGE3d6YzTeRNbxCGooe4qhPa5ciiQkmFpF97nngdULvGbzjseYfWoCsu3b",
  "key8": "3UaxFin7bdjRKvSCEakHhSjnFRgut8gSKeNEMTsZsuEJdztTsDUGnMET38cXCkfevu738BorkzGsyQw8W5cxDta6",
  "key9": "2qVVCj91CtzUnoD5pTKSQjeM7tqoXXKX5gUSdt8Qtuu1Jv28Mw7J7QJFLKwAr8DMwyY8xDBzRTfD2XHurpCGucLF",
  "key10": "25AHhh5C3n7Qjct7RcfJnYNS1raQrdEN2GfkhbgGksTDW75S2eaURvGnRfiEmcsfXPB8AYowZvq6uFhGNq78zg44",
  "key11": "4cA6EArXvLor5og9rEN48LpsomRDCACnjwgfofMwPc3BqjDZMrs5QPTo3cHthpAs5ZnaojVSDNnVw7AbgVW5uahU",
  "key12": "5ixcT5G6tw78EfDvkQsL9DAKWoHJCofBbVYfWv82PpQvESdqqY9cGM8UbqXbd3sE3kSs16FgXnoB4koBZVjtrp3U",
  "key13": "dBnMGcTQsRKLmN6ewZAPGKwFcLxMrpkAV55aFUH69utcuKs4hrAZUorDaGBjfKXZcN3dx8afPJCdcyqHu2BPvLR",
  "key14": "3xtq3L77usRrUMCxgKcpaDU1ufjZsSaVCSYJkUGkJpvSt3vQxCQmBdxg1xXnfQSqEiLuG3e2yYYEnkhUcEHp7hkj",
  "key15": "2HBJxt8wLogjSbSop9YWL8MbAQzWoQaLwtdHK4yTfjDZttgWRqBz2jNt6sNt5BKF4dDnYALHki9hUjRMHDfpyQnn",
  "key16": "4CyusqEmDTdnjtkR9JDwBL7Bj5yZf54v5oTs1Bum4j39ytaZPpnvWfFA9AjtTXRWc1Wauawa14AecBHpV6ZnpjgN",
  "key17": "5BC2mhBy8WZNMbXGeem71mP6QMSHFFkhwTF8k1Bm1XN3uZWQFAjvyirbMEmFj63Hujs8AYkiQpBaEhsfzY9G1fp1",
  "key18": "5CxF7aSAL1KyVK2e8zNeMntJHHwRtB4oS3Wz8wF3WNqiMSBW3jEKV84Bc7yVYwqzyvrRt4Jyrf7eMib7TGSdPZNG",
  "key19": "24JtvUMy3JQ9LhqeTyaHvRRaehFx3U2FRpu4h1b4g2TA6dLHt8vneAUBG7UtyGkvDP2o2i1WF9Cv6hLpcyX3FJeb",
  "key20": "2WXnkvfNcxYmn63TywXAYxBQLQpqQDqH8i5yZnEM27JaBHfnbQsdwch6KgDA2gnAhSq85yQXb5ffsnk4Kfh8mKVN",
  "key21": "2dgvN1Psmz5Nj1u3mPYE8Zc6LvvH8S3iSFjnicVJPZexBeakjVQT9aWJyrnKv9MUqLptP5oqpZ32nKSPmiP3Xynb",
  "key22": "26W2ZAGRMHuBVGtC2FektNBuLp8PrU9djY2ZKThTdY56CH261UHXRQfppSBxMYbCnm5PDHCDiE1GhJ9hQgq2iXnh",
  "key23": "3CrCKyhEbCLvg5D1tWucS8VoNu9JrtKveAKDedZB4yXij7vFhpZiuncCUq75jSLtTTNE3BsnbJsfNxUL3FfxTb9Z",
  "key24": "3w9Hds4A2E2q75KNrpCQMRd6L8N7vi5SssXDqA9PyDYNxTjDF8CmFEmD6CQgPXhd3fG976yuaiMucCakudg8A7kS",
  "key25": "5kGs9fccCsymt5ga7Ew4b3YHk9wSTHaUrk1SYNPZtD5zHGrNxQmdWfzCWn5boUwJqyhg9vw5uH1SteMAYXnJCEz4",
  "key26": "5SRcoymGLNs49nYdvMa6rPdkYanNwFhh4a1q7p4JVdMRHwx4fdcRT1QHQByv7cJcEDPGqKFVbxZGxhksvbUpgVqX",
  "key27": "5rGqT8uBnWtwBmNmZyBL8XJ14x8A8rHegehxzGCbC7WWfcfaf3scoCJfvBa5f3qATWwpQctUGKxwuLLFTeCvTLAo",
  "key28": "jUsArbALgZbtgxvuuXc6XBgDxMDJWuR2VBcyDrn38UgrCZfvYg1tj3sTPsAs4aWSgjCahvD7HKC2NeEotYvDXea",
  "key29": "3EXTUMjYE8cWfRG8LvLbZBx1C5WcNS1WUhrMJE3moQxL7GRADs98FZ8rPiGtWTS4qbhky5xfRsAoMyfmg5RQPkE2",
  "key30": "zj2uCKKt4zvNR3QURDewHXqaYAA58DiWRA9zBKvRG8QM2Zujhrzgb6121cB7MaCwaaGsytHdCFrEt7H5tvshy6v",
  "key31": "3vMv4QueAJ1oJCWaqLiQN8cvP4P14MBtY8U73qMDmZs7Bjxxh872tn7NydrwDV1sdH1UA7BKpcs5nyFwVJUpBNZf",
  "key32": "2jvxC2S8tgU7ouFgXpe68WprhoqT4kvinXWDQsaM3fdxGD7KSq4dhtiqjHvp6oJcfi9FDD7TVEmFoDTcehxQXcP1",
  "key33": "5z3FRyvTa7X68ycmLXALFVMWyC3dNfnaQdSkxpKMBt6vYYvxu8bb2iEHdRPeYhpBJ9JLtDU3qnpHFTMfD4UyHCVy",
  "key34": "4bWG46thehMBSRYubjdSrmrKEYaEhGxkef3hofbWGkHf2pTmV4wAx2AGHEgw4ATZhAgS4QXzHEFaYrtTwNQ16P28"
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
