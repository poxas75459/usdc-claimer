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
    "3hzWcThsayk23JdqnFdT1BU2ubidXjgoV7stRKwSZixVqGC5KqQWeCtcuimd9UU8A23Xtt9X5Nndbq2RSuFYvc4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tVwjdZbjHPGdEKy2K66mGX6XZJRhSa29dnv4sCFYjukx5B8FF4bKeg6SmECW5jRBDz8bGe1BMwXEBXr5ZmCHFz",
  "key1": "2Tp1tHCfmjtj9MoPiZczRk3KxdxZWrimBcwE8aqC1VWGbQQJQbssjWdfy5V3jEPcu3w8cbz9DAMAMxeyNfhpAsA3",
  "key2": "3knanMzPa7KyLoXG4xb3orRJRmnDjFR8QjUBtB1DCVwfbH6LtJyq1oRHVky28CMqJ58PJZ8JzqG656jec26J7ikK",
  "key3": "2W2fTTNeyBYN53kbbBi4RE8x4iQsocbgvNdipebPG3PYbRrjHrw5x1t4nyBGKgkBDr8qSkbLgHWgqwzhTeYRKx9L",
  "key4": "4Axp9UYTm3d2z9q1E6dNDESYNcqduLjsyCVKbXhsDY14mSU8RbUbKGUJhRZtzsBpSCzQqwssC8jdKUJZYGsmxefL",
  "key5": "5z8KR5ehHvwFRGeTdr4jhbj4hW18fKzmx4ZRWM71jVEdwYXXZ6Rffutt21PXKiDa8Xsqbqsggt17NZxYdvH9L5Wr",
  "key6": "4CkmnD3whxNERaBTroPQg6DwEAhgNpYUE8n96rCECbN9mqahMMCv5VDYPtXwW3XscPukL956A6tzeS3wPmbSUnhE",
  "key7": "pndcdQCD5NzKcDewdWGkWhPqcvCk3tsPXm9Mwe8rWJauEhhrCo12hqZUSrLm1YNho6KA7aVaqq1y5ss5oyvinZL",
  "key8": "3Jqyg72HRkBYaLrbrxo4Fs7XVySva3o2Jvt7JtsT8HKGssATofJc38RSyFPYnouvaBWptuVXbxxyRtHDtiEHSwPr",
  "key9": "8LiZKUQSUdAaiSSrnZSngYodfwWX7ugo39h7PwgxzPPudk5RRjehkh6hbckAFddo8zBFowZzHbTcn7QmcnK1ote",
  "key10": "5qb6yR1Jp8U92vRSqs6Mnz6M5BgWErVgNcydFdf3X6RKsEsboRpgHfSKtzuPTAtpoMAX6e7Qb5NURfD7rSrqSW7n",
  "key11": "M8dcohRUUFd3prLgdVCxiZcHhHq2qqCz9f3fZ4KvJ16RkptY3xvSu9ho68pfNCFCu61ohW4vY3ykGSpauaujiLp",
  "key12": "5cGen5ykWDicAk7mDH9QP9mriWWfGgSDkjkjaC3vfzyMXyBKyT2N3Hd6ErZyWi1Vjp3YiTYKE2dqRjqqShJgZg1Z",
  "key13": "4pXm4ndfvNrutxXXv5oHc8sSAA1dcqoDYiWepu912HJvNYLz7AL2idcu73e2hpHyQ48Xvag3AeNuj61fgZjRVAWX",
  "key14": "58K4Z1483YVmAxxQyKS559U7Xpg7L7Hf4TRvZ9pdA8evcwH1RmGBD6VEH1ppLT1k5tbTpeJj4Uqofasb3J6zkvQU",
  "key15": "47KVWidzMKqoV3Zfm1As6fEUHty3yN9FcTcQritNZ4tp4F1NoVow9ccgcfzaVfhTA8KQcutQAeqJ9B5W7zzvCEDL",
  "key16": "4jh3WY9FDkjvD3CQc1vMtjG1kCVhd4CJpfVvSwzdfiQox8KrRHFLHTapvjcMqsWcwTxLKNzKw9mTLcHoG9XpoS9x",
  "key17": "76TJThnwMetEh2yyv3ucWZQcDH5jMg1qkjti4Tx5MF2hvCryB1BWhwo96ALFBb8mNPaKGnRfcyBX1ZsSwKz9okm",
  "key18": "3SXSPATvdM9cxNbAgPfwYwWWwR1na8sUuxmqQnQroYm4muvoh9YMsdtmCSTjPb8qM8dfPUbGrCZwusLahjpjCEHz",
  "key19": "43XQtQxAxaNNfEmEZVpfXj26eZEBs8PcU4v61wVuYVfsVrnx3KrCiTYD7oVi15ce4CDWrdb1BhqZXnBMpXETW8RG",
  "key20": "5Svvi2jigf54Wg26UQ3acrGgXgKhTnDSyLBMjjpfRtnsxBV1mHwQmL2mqb8GstzTztuy56C5LDLYpEg9VSJDeA6V",
  "key21": "4BjkMkTH8N2ixbMJZHM9DZfEkFkkBgW1HqmmwMZD5nsvzD5WVXSASa53SKhQQX6eAYybbNrMVNaC5v7NfbBCRBRW",
  "key22": "5NsHMfreyzmpoWv8MyJRPZsaZjaArR2dDjaHj8PzwYtWTBsNnNNj4R2GJE6sRmmSY3d6n7mMSzT7szmdd9jTivHv",
  "key23": "56jeyMFwWxcRTk7HVp4VZ28qgdn7z9rn4uHTxL7Pa9am15oxkfJCQEXnQZnDsLTk8sg83fhN6C9vhzrwpPjzcn23",
  "key24": "4PJMdge98n6ZvVfaxtG4EVXvEqk1xFaU93cojskuBYxNozErycv5XZCznnzioNgoUUfafGu7yecPi5b7US8EF7cQ",
  "key25": "5omhHeNefydsKqnMB7bsykcBhjiggWEA6hZp4nvDqPmd6N5RGt7MkPTTREcQ6ptegFPjCNcp2o2scrMxQZAoSkS",
  "key26": "3ZTD4p1cYvH8d7D69mZ53vsens7ubBg4iPF1x4szk9QTDKT1MS8dFgGthRgFaVFQzHgUtDDfcBMNtevbnZteLCci",
  "key27": "219sL2SKAQH5dnthRyCj31sd5z4f1EMszPkH5YyRzMK6W3J584WXdKAH4Pj4qu9ebQXVmCHxtM7QZhC39rUAZhcK",
  "key28": "66o3ZeYZEy2fG6McDWrnSuBQLv3RF9hfg3XgBfbYMoUGVTZpmrwSbhHBZ1QF4G2eNLhc5jm7ZfMCsp5rdEEZPqbH",
  "key29": "4FwWh1jSnQx8Hze5c1TD5cZE7EKyfe6J2RX89iWyQyELGiCkcb57JEqqYYAESyLkn2KoRsb8UnU8jYsBTquu4k7z",
  "key30": "3JyDszTDhhHvoWF4fmtVSYV3ubdP7jmrer3uuREZ6Zi2VpivpkeqenGJXacubhTG2gCQeZdARz4Y77YorK6yHNzv",
  "key31": "J6Jg1GBbshAMz8GLaw5987bPwcRNAqgQX23ELkuYmo1DHBpNLe3ZUJ36RdyRQAHHrrUTdTb3nsWyomgVgGyh4j6",
  "key32": "rbk5kT6BZjsrwvWFUY6eGSCxi5Mh7ht9JmTc5LCCrQmb8cHhfWD6MT16QHbXN566vpDb5GniLs8HarFtMpFHbR6",
  "key33": "HgxSkQpbeMn8pKu18Rmc3DPLBwtDEw3gn9kNkW1ZwBdwju9LNARkiC7a4qgYdCPp2TJedhFWD4RgLn89HefHu98",
  "key34": "nmasGzFfAvrmhbFcrgoyrSmMeTWcMnt8BJvXN5JVVrW4fzkypfEu5SP6XMyTARW26eDaLkv8DqSpGD9WYvVukik",
  "key35": "2pw6uwtnU2wMqMN9aDG4L9VL6w3qfv3Q2DTRdA3AoprRazGeP2Wj2uVE3EruEV3smxK7i6wnw5FHhvYnK4aVHwcv",
  "key36": "4xyURs7kFtMe9yK3KDFLk89mjchtvW1HHyUDPqRBGjgUKq5BeJ1doYmDUxxmA5pH1dDmMegnc9TsrfK7EPJE33ub",
  "key37": "3gggVYdzwjRx6XvV8viY2U3W5NZKipjzf8DgwcxF447SighxBxr3ctXNAYZL33sKaYiuW3qNDjkxEYiyvxPpFytE",
  "key38": "27eCupXYEbkR11cridRotkfUaH3V53mh9u5KwEnua9BBDPptDpe9NEFd6sFbjcPTAfRPoTNVZfEAhvbcjMiFgQ6n",
  "key39": "kVpHGCLjMc1Jr9Ecxqhs88e1DBGjPaUhD1SWHt5zhfsA7kWwoKoPHoYoG2yxFhjdu4dxBpCYGzRsiRNAbpJqZnD",
  "key40": "5B2r8SzyPj6BVSJn46CsfiN2UPbP81eEgmZZGUexTxrtUZaTeH9TTNe2FcTZCDPHQZGReWt3mSQE2W4cdxaDTfBz",
  "key41": "354JHeFYNVGyMGX7dMtgKc7ube9NfpqeodXZyeBW5B5YcS8AaDLMSQWcxGxTjYFgWbyqEPATDQ4TVB9W9wFVyVP6",
  "key42": "2Z2vwqZJaUEm28nn129EhaXKa8p8jexEE2iPEidqABNQsZQNnbUHm6qwPDjQehsujaYEA7Z8DuGL9Uu1dNru9Na3"
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
