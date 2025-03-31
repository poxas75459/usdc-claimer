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
    "2VMtyRCMQX8i6xNw8pUumEuQaz6YAjLDcraj3WjebpbpUGM41pj4o6AtVYraUHnmyFVGRERdCAF4EbRHMZFrt3Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdFeu2k5rwGjKsiUXfrDbwPak3Gycy6L3iWGVLPEK7k3s2evUMHX2VBMpn8vBcsgFvwDwp4WTxA8PQtv465LmPZ",
  "key1": "29hmk43NmwdE1fLeDvn5UJUBfKWTqbeVeojYyve9CEKcBeHnSo1mcpFuAW5zevy2znUgoRjcY6r6rxPEXDvg6G62",
  "key2": "33tHVB78B2h7CTYA5FdvmZDPQAbqEpfhKQyVxbXy31XzTXRcSYsVwiabAa8ge8gV86gvSW9ic8qPyccBz3wGzs3f",
  "key3": "5nM7RvNZfSsjhsA8VE8GQc7qcBjCY6DQgqE2UK5YBCfaxMKrimFrweYD1CqDQxxghQwtEN8ZubcpUJhiWkqfQFqM",
  "key4": "ZEKZ5oFRYqp17TBAdmMuLmzRRAevooveCyWx9GMEuZv84pBrfsfc6fDvae38qpVp75q4fd9NRwZ6C1yx378U6Gx",
  "key5": "8o6RjodtuK8fEznXRkbMeoZt3U7X9jpKuuABGi1v6Evrpyf8Quv7NhLkrc1WnT7CwoWPTpkkUPLTgNcHfACD4Ty",
  "key6": "3cCKzeHkAPd9H8uYXnk8dhAEyqmJtJtenU2QPi9yqKEERh9jr3UC771nS1NmEVKyC6KmcwpeAd4hNWxc99CYTkyk",
  "key7": "5QgSu9P73YPWNkPwuXpgqr9tUxPN6JFufFARk7eZnaKLCQ7di59E4HkQhWwXTBg9gZMDA1eFk454pZSxvz6JyE4v",
  "key8": "4ynMAq6RuCFYaFNbnJksfunPNf1jcxdGqYxLqChnNbbrcbzRKBrZGVX373Um7noEPkLA1G4PYQcaZcPG6gHTJ2yW",
  "key9": "26hEGihTKDNoZfCaabDUibHaWEjY1eNeKAtWR8d86FYGFxJu44UoyRPn2c72uZiGcRL5bo5eFQiPjQmkD8JER62Z",
  "key10": "4baxiMKxtxA2Au9AtPruvQ8Z7FbwfSMcs1z5nJJcppYMi5xmDvHdwRXHE39UJ9wNLnLeMFKrQL2CVKAhcTCZH2qa",
  "key11": "4q4oh9Nd2xQJbSKshJpJn3R17xrvKBjuDyx17ij6BUpTsMxBaBMoXKziYDtojj5eLJFS7ttRWu3vvnpjp2STjK3c",
  "key12": "5xmaHKQtbJm2BgjrSCD37ArR5vTsDeQQgXCSjwi2Mp66sh9rAww4w7vfpwGx2eSbcswQ43mTR9LQD39kriJ5ykMd",
  "key13": "2JvCgzX7Ys7pTQs2ACBEGQfJP5fMoiVpc5ZmbX98zDj9LUi4263vuWLZzp18PrPx6cF7oavieF1KuEmiXLHfPNZx",
  "key14": "siKtQ9KHgZnQmXTSc6eEXytjRTKeGWrQXpN9bo9Gwxgm1ydw3FhCVom622PvQUYV3T4Zh7aUCCXmYd2WUcU4DFa",
  "key15": "28ktfQKNQkVWusDeuTjYwFVUZZ8TsV1mmouZbEZ2jurBiZbqwZdt6EXEAYumAuPGyj9Gwf6iQLzyiEV6Xe6k1QQj",
  "key16": "2eLmoz2npa4AyyX7PK7tNjFQqqEsyA6oa2tqgZKVUCbSgQ3dbsTiCA2zN525uNHs5SUEthHRCCuPWDHxh2nx15Gj",
  "key17": "3TCpWu4S8JAvDJnfhRZ5M96DyEYGm5Vq9Gu3gMt8F7KjJjLSRsM11qk2ompFD1eUMKvvVVnb7p4b9Rq25A1MF4hP",
  "key18": "4b4vvsF8mF1L2MqtGjeswoTowaDDFYsMz39h5LBoa58WgkkvwFb22VbasZFzbgZEwCDcP8zdUgj5WFGjo3rVdki9",
  "key19": "rFYjKCzediuDaZrxnPYrPvRNXzeZwnwhUEy6iDsKgXu4kS61rWbjYtAUzD5aQF4KJZHTZxDJPntwpCGrSpDW5bE",
  "key20": "4PTdcD4Hm2zNYeYS1ke8skme73YH8NABFVFHyhmeJbci8Puc5z5hw9143omETga3ZsVJKnv1NgF4wqj5Fhw9AS3",
  "key21": "3uSEusSpXGUjEuceMKitTZuaVdQcdPwoJHpancuP5fiEsFtkz1dB93VntZ1SPmcsudc47x6NB54MXSDTxFBuL4Tn",
  "key22": "Z73iBR2j37dZNJcSAt8SpSSk2buajuMg9qCYptZa2G6hGRgCuMBmi23VmDuPtbzRgxyJ8fgx9Qb6ENB4CoqxA8M",
  "key23": "3qAxkU7YoPgLBnzKoj3Nj45DMstaPJzqDTQqfsQjkFP1p8kkYe7Sik5qnVTeXPvgg3JiezP54QxDT5rTakbCgmZu",
  "key24": "4PnzbzyYqoKqwHhCt771gte3SDjVrPYCHkycXAfZX95ba6RR4x9WiohoRDYQxHjyet4sDoR1E3afcUq5TzWSoxqE",
  "key25": "5VXS5DoZXbnmbh4Fu5xAWeUNARSDKafqg8FXJXh3uuWKnYdpyHnXzHpY7nNYrTmFAteWtaQZt26Kk5P8bt4QzSiW",
  "key26": "2PYL7RRM3U2h1j24ECE8V9ZjYmrN5hMtsg3D4NUWRC1jHDYmFrDRbQJDgmBWtN7z7SY2Nb93DSKHbs5wJr6EZykB",
  "key27": "3667ET81yvou2CfTD9KzeNqnRxQ6Lr5rGDiBacivdCqC3cXeGHbsRoqLpEVXnLNF4qhbYp8dGKH2J6F8yuQE9LsL",
  "key28": "jAj6b77yUiCW1EVLtPGeiumyTjKCsEyhVX5MA3qxrL4J5U5jrcm25NhjWXEfKUcRz3cMYBUcTLKYphRBXnLjsTZ",
  "key29": "fiCW7gLNomKZPrDTB7VmGodsAWmzcq6V3MRdhpjxTknpt2dkAiWHM1VqL7T4wCuomT5vrEmx7iEoKoo3RTUVeUg",
  "key30": "1t5AxHy3z6CnKRXR2gkbj2VQ574k8AGzC6jCBdio5FjUx64xspG1qn8joGCVMfyNyY57SJDx4dHnJAVhkD6Khqr",
  "key31": "3HZSE5Co8yUz2cVm9pJobjYZMGqn1mHjbqmN6uS4gbeS6ptCKFLdjEzhccx22p26Y5DqA5JiETqRRV7FeZL82Vkn",
  "key32": "twjgut7wZftdbyUYd78Av9e2icL7ok3h8TYjYm1Ftua3nERcmSppFmR6FS8ikeTF8gVzgNLNUSFNX7HEbYfRneU",
  "key33": "5tkws4jWvi3BEku1X5J8eoDzBPUMfcsxzgMe223r5cFoBrMF3JjsFvtLXfXbN47WweEsWuH9h88BZ2XCfQXNpFvs",
  "key34": "3KUNUJ8HtFUVv4h3SZy7zgBDrHyqLMec42NQKkZuuGWzkHgmBfks4VYBS8papw654eQwQCbJ4TuzZGKRjniEGN2Q",
  "key35": "3cvwbhJdQ7HYpwqwQmnZjpqfVAhZUC3TuwFSr8Z7m8n26xvbrPkkZX1iesBs1mdbyDjTBvqpYjvFgQP4qBconE9G",
  "key36": "32svPCmrrcU9DfWwQvD1hqEeXCcNfpjjmDZRhpGJELrRABix4LJ4cmgPMm2CNwm8kppCwRwWTbKeYnwQDi99ZtTC",
  "key37": "ZBG6jQEPVENk8wB8KexG3Ya62jDHE1i2SqKkvt7Ta2Ugt4qbFuB6dSMuX2SQvVQeg5sH6sbbghQTbfYAYXNYeM3",
  "key38": "5aqdUi6wx2fa9PgS9nW9tWvJhhSecLKREdUyaDQtonbLkHYZDvajZDzF2wQdz6Muw4uuqdGHn6QnfPcHvesWPYaL"
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
