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
    "RetetjZnsg3PZgAuZg8mVyGzFm2uYKwWtS4Mm72EZYFSR8hF7PewuzH18wX2yWkJDdWH9vxREuJRcmnRV21QZXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ue1TnYmpYytcZWUVJcnac7S8WCdjSBbaeKd2Mqc8axQTxfGUa4yu6WWFeEFSy4cjxdRJsBsDdbmgjD5CBaZiuHV",
  "key1": "3GiYJEhKS35ZtJaPSBaU8MuDCosTAEFFgjJ47XQDyhddy77KFWgLVVsHz7LtwVYL6psB4xtN2XxERCvSmQE48ccg",
  "key2": "5UHYXoCkyKYDxJJsKceQwQGhxBXMdMdyhBXr6pb7H1UidmTypSweL3wwghKcKwCC6j9dKYdNdfG9Niq4k3EP6kzD",
  "key3": "5mcPDFA4vJhKUQo3smo4jKMhd1Uggnhg6af8EZhrXvAE7MQQiUhBNEEZWtuVarnpAcgT1nfh2WS1Wz39PqZvkuTY",
  "key4": "4ULuKvPpgU4WiEyJYAHWt3oDenA7dkMSPYvHjwMaxbNPTQDaQ881WdyHZz2doc7LdKNoRGbKmP5VG2XKdUHVeAzK",
  "key5": "5xZZ35P5P9v9dKpHC9yxKJX1AeKfbwXg7HFDZpeN8vNWwa4ZtnnNPp1Y5V1SZhCoZhj9nPWiUCqbdyyEpNcmxBj",
  "key6": "5JjGjqBPPbHsXS9s9SbS8oyiRQcJ92iZ2g9ZnjmioQLwHKwYffgE1xyfx9NWnkuePBjBvguX28hfnVv23xff4LSp",
  "key7": "5grQMeV64gprnemihdveaSb8U7LcV8zvXEYAVaX9qcP4hQDdvWEGbk1fW2LWRCo3FEC3sfJPPmnJ62fHX3APZ218",
  "key8": "2TDZnHE2gfWDxY1LSEP6nRLv6Uxj7p7GwoqzeFG84LGULTQmBTyJEg6dVM2GNBy2GNx8TSES67wyGLW6h4N1Bi4a",
  "key9": "2Qqypg55xzo66CNWJbVA7c5zoa3UBtnQmHpTstcnBd85tRfWGiXTZGb2uKvsRMAdNFYUkVu3BFvSCnmmib2zD2v5",
  "key10": "62B6Ng7wFdKVFRHHoNERLroYDXXRQHTH74yCeiJ2xvUmvNgyDhH9APHuRk2rKWy2H7vEQdwvPdEqP4ecWdX73aZW",
  "key11": "2qEy61ZCy1iKU41PeZEtXgv17cN3f5Fg4gVbE9oBw8QS6hN8SH989WzgLgmHwfFSjexCrcJN3pEcHiHHxvbiyeaV",
  "key12": "5ZAdmrfJNX1wjLNGN5Ct4My4U654VQCcLV1REKW55jez4cbWfbR6va567sFjAieUEryuo4FaLMSJou2sdvqyevhf",
  "key13": "4HvayHoqAdgwYhNPn2W4H1aP1mCqFou1QxwT9vbatR4vuhBSwpuQf1oezzqTdPXrAnvJkJzJzQSnQsXN6vuAzmvt",
  "key14": "23fjA7wwhrR2HgVR7HKWKcKJXBqdUPmDwwkGC84ajVxjcCuTwY19o74YJVDVTwqNDkGERZshVZyvyMGdTjPegdtY",
  "key15": "3To2D256LC5dwqPSqzWLmv2Vm8p3REdJTBzFcDCKZhXaZGQe7wp8Fq2d42wct2HgVMULGnLha9XKSY5wddUoAhn3",
  "key16": "be14U1Kmw7vm2qEXPYobK4jXjSzLCB7JrrrkrV5A9nhFM5PQcpp7jQoMrLAsuHcYfoYumkTHGL83vjGwv1py4TB",
  "key17": "46ECAvCs4j5dTVyn2P7md4BygbQZSWtxmh2GVYU2PvuFnxohA6ea8Ha8SJZTMapH9iKweYsKynCnLaMMGK47VsKw",
  "key18": "4XQg8r6BF362NSrPTR1SHncCGRAVpEzgH9EKBcQFBfxt8iLW16ZBDZvq8buPnTqDXDQmdmDauEuxrXxSfVtwFUud",
  "key19": "dBpBVDS6gotN4uor4G8C34i9n98vUTswVdv2SSPhCW1Wxtvdic9uhSs7HB3VF6rQixRRc3a1p2ibrd1LuXCLvai",
  "key20": "5WQsirh5fC3GCZVm3ZCYvBCik8gfLo37HCexuNSHBqYsthNaoFwnX8iHNQkwVDfgLpSUsfEvGhSZFotysvSuV7tH",
  "key21": "2zK76hKPenrk6n3b4WBZqFfjTpy4QSk8Rx1TgR83YWR3Se7FaDPb7R5SRPkXrvF4TDi4TVWnHUL1PyPsJZtCCgM8",
  "key22": "4S6WNnu1pvW2Wyp9Lrew1Pg4xypZoZbZf5tpRAmxxVpJk7Ls3AePdDURtjw5PnpS55qZZ2aWDEUXbWupwZBP948X",
  "key23": "34gV2onZU5pN9XAMQywEg7m1WHV1iGKT9aiVsu9yCtMTGyDuzXF3TPhGgu2WWQDYqN2KRvHoCZ4QvCdDveGsEdSA",
  "key24": "3WwLqHUsdLSfCGVHD5UD31yoi4zuFUfgUG13XA5Lt5kxeD8mDAq3vAW4XrCaVtYDJGipm3zcVZYmnTcweieWJkmb",
  "key25": "3XWzTSzB8Ja2K8VDxbnaibDjKH3rn168hsccfSpJhkUANbjfCHx4yCzCQPevTBpAvCaV1TmyTZm7TU7LCLMRtgBn",
  "key26": "5F9ZkY3H25RAYqpTWSsNDQMKLF9WjGLZaKMxSLF7tudQ2rAZVY4ae2sP1a8gU21Qp8NxJe9n6peE6oWAfXmDYWh1",
  "key27": "3xcgzpkMFCw7xUWguHeKPFxohM6cpxWBkFSojpNJksS5D87TapfdTpd9pa65JzeZTqKvucdvAAASYM4e2okeYeus",
  "key28": "67EDLdKJvFNGxm7bhgqKV4BYnMNMqW3Vk7zz7Pw1bD5QvzfSKREy34mtLa2R6RSwyv1pVJTZt43RiXMM1it3Nunj",
  "key29": "5cKbk9UmEUBgkhE29Dw6CcTMTifAcBKEq3N1nGw8rjAUugyxqJ3nbXjYodk23esogBgVY4XAjBVGikWDzPHeogN1",
  "key30": "4Y8f8FhffVdq26uEW2TjdAb1ZRfBQV5sdmA7hJUwVGSDiy1ZAfPrYy7Zid25q1bFpxFhgCDU19Y2ELakiAuFYzAq",
  "key31": "41Dikya1J7EJ6JYEwMGAa7KPjHessPbGPXQyLDQvkr1BTmsDw5T8BMNZc5i9DyitkAnefTJZqUvQCqyF5EoUEYLC",
  "key32": "8oSfsAQHZL29meu5twUGLNGTTG1YNJrKDofZhKkeR3yWcQxwKij4KcqSr9xHdvijUZAMfWN7xfsmP7bSH9Dcwcq",
  "key33": "BXnHfHjdsBZvfY7zNavYcS7fp6oE3Xj2f69Epqwf7gSgW3wDWzNCpqfcqiinzDN8kjBFj2roRhEy6Y7VBAo32YJ",
  "key34": "2TUTtaedHaWXMbYYVJGAtnCU141fkMM3h9yH7CHKbkkh8yBjfkBcwXszFoR6f7i8RaoYXP7azRZRi2Gm26BaZc2v",
  "key35": "5X5TqgxmD5GG7G45vfzMB6WsyM4zjqDqPrkn4ysCrZAXzSCU29pfcbSCj1CctUnPW7mkc2JDNrv9d7oiaLnGL3w2",
  "key36": "53sKD4CB8iUL9v32w3DymBdZt7Mi9G8hq6yH7ZFo1wp3vGXa1y5NpBANTgAXYG1jhdQrEWQXy1TxeggXh7kDKT7G",
  "key37": "67nrNx9rTqPMTVMTBCjQXADqxBRXWH9y52SkRwcnyDyuYM7hj5wHU94YhyV31Q2srycuY5Qe3RQZ13ojffoYpQ8s",
  "key38": "3BNqM9ub9GdhD6Vv11FxwRnTqFzqTwKBJj8FxNbK57iBEcJ38Aht7of428iEjQ7ktJ28xa9WFXJ5Kxey3d7jLcs5",
  "key39": "ZyhPVgYgZ7fJdmVQK6YuBPX3yHoVA4ibtf4956dVNNwQiL5HZrpMLCA2PbWiKYYNXPRsfNYpN5psiAkNZUMGQpp",
  "key40": "5Sz8aGfgGTrLnTcFSjVUZMek99m1swL1f5tSnRpRntntNPX2c5m9zkF7jRuLp4isVx6pSCxyBsPii6BSKDVdNjFD",
  "key41": "kQJVZs1eDeS9mKxcY5a4itRCPuaYhC3BiY37YRYVEkj1rTpwYCZH8gpHDVJg6H61ZW8cCm2i6sumpLkJqbVUp2X",
  "key42": "KJaxyXTnPhrtpb3CMwFcibueBQvHybz8H8VSX8BgEmtfr9RFfwbm7DG7y2aGDwN9ch6VK5xmpkcfcZX8TFD59p9",
  "key43": "3uFNzcj7ujddBHcDFZcZcziJ9H1AZMt37QoZNENgMdKnMJ7oD9fTb2ekw1RcFNVHnjcGnFt6UkyKqNPHXULrFsNb",
  "key44": "85dNfqKDncCzZVLXbBrTUsKt845vrTfmHFXtSBnkU4Vr98qFsLrYDJ2PuAk12wx2zvkPBRA4Mpz5m2smocpSocK",
  "key45": "4DBesRbKegJs63hz12FzVWWJKKAY1ekzDJ8n9LPoynfmGEUnTuXHszGjXgD48dPtJ3HG8gKoWpDfrmP2wiA56nEz"
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
