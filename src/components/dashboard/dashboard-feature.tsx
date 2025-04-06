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
    "36wRMkYQR2UkCKyS1dxcXe8k4n8MBm7V5aChsLaJCBLMtRNie82F3CqqypoLYHuRjRwbXGH3hbFoskBoWwii7Cp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eALn32eJ6okmmj5xVjATU5SDpEBS65Ah9YwixLzkDQMC3RHbWaZNMijKHm7PGRDcU77jepD5GkEJBa9JhHLM3LK",
  "key1": "3XsxYZT63oyrARBEn7td2KVgqVM9SNVLv2wPNQ86v7BBhPQPsbFEFiKaKrSzAoEEAp5YUpdrWoMR7mntZaRVXmiC",
  "key2": "2LZahMypv8tYgbYEC8NLG7rx3Hgz128gtoAbK9Hor4YoguCF54iSAno6FCpBBfh4ziXa2KbukYnCtRNpLeXBLrQV",
  "key3": "4q75c34TgWDs6CYQPCMKqC61CiJBzp2Nnk6E2ZEb7ttLDwrFR539vafLpBWHV6p472Yi5BXxidKj5bwqqCP9RfXV",
  "key4": "59yadhffEiJ4d6UMuRtrCBfVoPMnLJSzs6R5JasayrZTT8DqwMqohoXj8uAXB1TqKWfEuQAgui7aDHCwaZwy4hhc",
  "key5": "3FPiQ8Zw2bRhwnrasAtJr3Q74WKioyojW1ear2iZW1ss5KPSgSs31DpHXDebpz7QSiEvUYmJaB2oPDBbRKoaGjWe",
  "key6": "5vtmTqtvtvXZgpGe9APPXMSeguoYGy8vLQjhTu4w1DYcv4m25oqY7Mfqzz4id7wZNVzA3mQevrc9AwzuxGzoZW2U",
  "key7": "5n4z2tkVeisLdQ5f2YdtWH3zmwKBwT8zP95E6cafBoEr8mbiCFmz13GkokwZFWY6b5BoLB97UZHc8p5YfioEPXqR",
  "key8": "433FHQcnB34CZSaoDeNVsvTRGtswNJihGa5YND8AJkg6LkE9euvS2m1MVkJftkvxHYUri1jtkZaU5PKuwuoHVGQu",
  "key9": "3Ji1mchEyf6e2i9W2K51vNf5P1dWMAJpACrNRSQjnLsKiavGCuansYjMDWxGeZ2KcbNTXDgxXqK666mXK5UCm2kW",
  "key10": "5a32ytY3VJ6C6JjYhLnDEGnihxksHuK5UQZPvSuejuwuc7ZZ2U7epfSc3Y77jZyWdcVkz5Jcq5mMEUQXuq8H97xQ",
  "key11": "2rNeTbQ3ifUgULfrmtCPBcoKotPyYDYBbcSMFCCr4eWkQxyTxa1fsZbdfMMsURioomyp5eDkZkjKAkYX5uTHouGR",
  "key12": "47cYntiyHmDAVXtqevVXGzwZtHWf9JA4PjW73ufUBvajFgeHPg21wpRgMds7qwbRpaZz6YL54V91b8K9geGEZCC1",
  "key13": "3XBBvSVSxx4r9ehGpJJN6mdtMxfr9LXHggLsemxMYiDuuEuib5UiRAdtA6Ncpwyd11k8fiw3KCK5WN9eSTv29HJG",
  "key14": "5bPCx14c54seqc8EKfnFfPwEwq1EkvCrErnaQnrKdePe9pQTPGPSbFm5hS5yf1YuymWV1vYBSKhRRPvk7VNun7Q2",
  "key15": "1RYSRyBKPn4jSaxJMXSH8FePQ47VzpSEmhZwiBAptRQY8xTZXV1nU3ytGms4XuR6fZ6xJ87YSr3Ww9J9dTrARZD",
  "key16": "41Jo2c6PXfF8qiEu5TfvchZ1ajBwd6AmwrQxyrhgH3SFTJvqDugqHvktWCU8Lm2eij9vGGeowBuK6gm2Ubno9Ejr",
  "key17": "23DxvqdgfQfbyS9qiFt37pwmhT7URo8wQMXidAsvGorYuGBJtnZjebXbDcrkHbFg9aQJbiVPCWFSdx1Lw2cFeNze",
  "key18": "4ZrvNDF8Jv98MCd1Fxy5g96q5itKaNjRRyfDQxZSrvmaKbpKzGSPu5tYJo5YEoC72pUkmR4SCQRGpc3KpjqZ6Adr",
  "key19": "5v2ffgtsNN8F5iUWKUmMJU2r9aDPhyEJa4TxKCEtdJcEAs4u82QQ8Xnj2bTej3VYmRGY4a83mu8CdtHBfbLgLpZU",
  "key20": "5JTgNiE2uoAbJTNNiQqeHprtHKrGpxFyzfp72MMbXmSW6c3skroVKtGf4z8svjxww9Qmy1weQ6zVLES2Sk7vapjE",
  "key21": "55BA4dAoB8A8AtcveeMF498ArGsjtohBqjDzi387EjsV18asLcPfYhqLakzRFxNzx2dUYfXsGYWa1UsD1X2eEaRq",
  "key22": "5HqgySbHUroTfEgNU5Ak4vy1jakQ3fB29fESq8mGYJVDUySDDxGVtRmwx48gtUh2YhQqSttzuyuhadU7mPQcgJKJ",
  "key23": "CBMEM5J9HhzyR8RB6CuMuqxjYt8d86juJTFPBCSCH2JY4cxJj7iMuWC7cBmAGtzUtuuzfM7L7g5sbPoAxBNvgAT",
  "key24": "2deaSwSFmTuzfhGoRBfNUGMKRkVmvXZnbkMGuS9S372e8W2yE4RgPGDoA99Pay2DSEbd4iscHQQGu2voSkjkUPNh",
  "key25": "4y7TvHacekHZZimH76oCNKeMEBMNywYocgKYr2MxWJSEfdqk25rvA2cazJbVtT8ciCccjM4UV2gnHd1YsqR3tZqp",
  "key26": "4ZmS2TpDQKh8xTg96d6BWP3Wx8DYD8ZTiKRTm5MxMgEa5TrjakpwHV1hnm5YBY8bWRWAehgoPifimMyFz5ock1TH",
  "key27": "595fWUfs8qrUq4gMCc2gAb6fjZDjDFUecWxWRx6T3qFW5gXwh2nJnmv9UgRRuoRygHVTaj2qgxkXVK8gcYej7QZi",
  "key28": "2y6ZqVPS55v4uzcboqANv48fwzi89nu25xMkRFN8m5ff5UTUP7wAxRjepMw9dX3wwENnA6RRox1eEJSLTGxTp2eA",
  "key29": "3QjvPeXUr977WEaZNb8cweeZALKnQx7XSF5WHWEUDYt965ay4C6oFLGtyasUXEiysXewyVgi6JoHhETVLtmVFNuK",
  "key30": "4dbdnhQiSoXYw2sFb7b875CYVNMsnAj1CmyeC2zwF842uWqyksY5oTjTFbj2Ynmn81QTKuAiwZe9kq9tgw1r156U",
  "key31": "2vjpV74J9RqEnWrDs4qZXnFGVy6fM3gqGMPSJ6GyPMrjX6zSjUcpidArEZinAVzJaoG6nbJtNMCKQGwvWnxQPwrn",
  "key32": "XcW1U2b2teqcLS7uFZ3pzaz3wwcj6XJyJSJ6GFgA6Y4yZ6RHroegXGcH55pqfGK7HtHwg4AperMW6TY98fD89zY",
  "key33": "5X1tbgifkBa8TrqtXp63DGEZd52cBRs4xodnmuQkVrx3YLjeRzmi2JYDjvPHESm9NqZYMT87XiAmqKbJZxJQ5C97",
  "key34": "2Nx5SsquwKqCimg7AV8gsJQSsTtQMftUcTbsmHxLqWC1GEaa4a4f5Pup8LeCBBMgqXABx4FyEq1NJJacRLekFx7H",
  "key35": "2g39Gua3Zq7KKNTenmojkjx2oGANRzfUX5xennhzrVh67BqrTPmpcHw59meuiq8Ex3gL6JS9Pav73qrr4uHuD8zS",
  "key36": "29CMkGkrA1ffQAFpMnkDBE9e3jdWDkCiPzADw7RwKFv93d3HEtNrVFVGZtiVxooRTLTWEstaZkT52sUKPprpGh1X",
  "key37": "4LBg3mf3qM55GZe5KMJA4eL364qSHext3pZMSjhpQDFLmCFkoL9oqNbw9LNHvELpC38FmcTaZF7prbcM5XW3RT38",
  "key38": "5hYiNdCrrDsXbtHKaodZEjgkR2WKC1J8zPEox38yV7HLyR3asUBxqzWP2t33hT5VdWMEgAvLqPceFs4rYoTSHdzT",
  "key39": "51AEwmwQPiLAZPFvbKhJYYzm2TnQ7WSoQp9hmGyqBAfL74kim4DAU3QiHGRgLUA1T9rYZ4jSYFih7X2kgy3Wct8w"
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
