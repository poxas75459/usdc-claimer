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
    "4K7KUzWnBLTrF282dGeTf9K4quYmqThqBvsMEaWGyd9WGHe3WpWn5NMWxXD2BXuvyiPyNWJ1CbCvFxk1cGVGb2YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XWKYaQDorbb11CjSEB6WHmTQKrprLk6j73JnS1u7FW5BRuFYrubdtJwX2fgUGnpmboKKgrByAu2aGP6mbmKqZN",
  "key1": "5CuLmSZ6aqz5yyijoVbqGFDCfCLmUVqX5JNtSznmXtAEoEpYMsLt1cKbVdgc5TWGAG9RytMAgzCjimijNn4vHTQq",
  "key2": "4V58EaBdeKgDKWa5m3Qtq5vTSrJxm6Kgfn5MNkgKYNazaqcVwCbB4ohZX8LA4xGnMtbBoyS137xKLQ2XQsZYk8Me",
  "key3": "5U2eKqBzSGP81txmzE3nW9ATYBs3tA9HDv3sG2mPMZ4pTdhc2Ao7RyEdGnMDeizakaQBymnEKbNdkAF4DNSA5Fja",
  "key4": "3B6JUp5eZPB4R4DZtHz7naWXSB4V2JawjGYt4bmHpeCCVKAitZuinZG4rJgUcgAnJSpaacNUKKToUh4vcrvGZpPE",
  "key5": "3RtAS3RiKX1YsF3kAvrmX87EmckcZoyU3m8tmvnwwrohCe9VirfV7T1jKa7Zpe1dK4svz6yi126x7zB44YkKd4vs",
  "key6": "4kU89AoHJtWY5vvjmdUU5pph1muVBdrTUCD5LPF1qNRWskyhPVLQ1rhDgvZAo8HxpCnfgkaSVgWarY1KMY5x1PpJ",
  "key7": "3zpH7UX8hRbW3n7geb9tUThhMgqUbR27xU314U8YvHZRrRuopGfmyEa3qDNZu1jk6pubZPNhMjHYz93REusH25p3",
  "key8": "35RgmcBrmNaxs5CNPqdQyggTBk48z7CEytxziSBkpXQQkupmUHqhjYSdRJPPEAEwjYUqRhMCGB6NATDRJFeQ47d8",
  "key9": "3vJkcc56voW1QoLchibgEZ2hc7R3fwFBB6rM3p2ne8W9YU1jakM2NWwHiwyn98XNdtXrpEjhDpZWaSffvJgGHhK4",
  "key10": "3t5WqJc5cTvQDk8FEbZr1GLtSDeQTE8xTWuqMxyBAuhK1bLSVTT4UkZL9CppuxD9AWs364CZ37zaJgHCdczAz3Cy",
  "key11": "5jeQGLy8E13pAeVubjXXXNU26GqysSxvgWgdUfpN2TTke7BVoUkHdMAKYXqxJtsbhuzTXrbqEnfj2L2M8WCLcesU",
  "key12": "4DoxGCmwud9mwdkKQym9yXSG6Z7eizBjCWS8Mqt1CKBF62yTRywMLYBnU1zT66S348hL7tULJJAfrgDsHXXEBWBf",
  "key13": "4eBx54xTDdXyfG7HVLx7HcjcoTnTtHEWTwFWnHnWf6hfokeKkBgYi6EpuaP4ReE3D8DyHF35ZJ23LzQAJVaiSbmg",
  "key14": "4eKgqYdcfSMZyLpHBEwCjSz1dZ5UaTjZPTx1nD95cdtDjyeMDoavijxunyLZhAmGLeyqtMWJmZSbdYv5Do3hq9mm",
  "key15": "4BL4dfPT29NwjXfncaqxFqUPZvMyWtUAJJaRSFuqRD3FLDmYQ47awkNrJrCV3A43zYQ11ijpQXg8FsDcp6AzHxX6",
  "key16": "387RLbJYBQmbc8gB1aGhMYVPtzF7dKnLssnabEdXGJuRYLfiDxuVQGPxFKgmKrJ4yKJYpvEa4NLtmoLkx1gssbBJ",
  "key17": "5Dtxq67BrNEyziermbjheZZxBD5Cx4pW4aKm47gGqS5uvCpKmYEotqHS7Z1eExUqjHYx8x4MpUdBv4JrutWpfyDU",
  "key18": "34zjAQgRMmKk9WtHLv1R6AjZLBwyProTCy7G244Do6Cv4GY3u1bFV5eoe4g9dVXRDTfRUCzmfbL9YLFP7iARzXaE",
  "key19": "5jyHf7LjdZ9hFT4DMb8ZjxKwUVPHt842cbsn98QAfFH5fvaUzhdFcstMzckx7ng1P31Bxpcrz4gwRvyFVXeGE3WT",
  "key20": "BF37QCRTdGYyVKKX9r6rmuZCnPSc95wC2m1Sbqbe2C7KbDxkbTrNgcosUvxjcmMyBNBLopNzYKv6Q5UqY4tRcpC",
  "key21": "3d5PXDTsNrV7iSkVcR678u6dNWqoKi3LoCXnQtX2UU3uMptN1wQrQpMhPkp6woCCdBxMMfRJojw5uRxi2zjoqXGZ",
  "key22": "5K6to8xR7ewA6DbHnnmKcqbCVDvgPBXMkidGjwHoTtM1WYSPmS2KV4HfFu7UFS968cGmGhjkmbJfMLzu9CKUmsfx",
  "key23": "5jWTovsaYuGWz4q1yFJGEGZ4hr7DAFo95orTnebAqS5HDBtR3AHxCGQijQbTVzmAq8gDB1fkdmNciQ7vGJrKRVWh",
  "key24": "5fV32BzkJFcBXJaG9mwWoyQikH2KY6bzj5L31CepQXmr4XRGQbcoYQP52YfvbUppTMA65Bo1dNkmdUQjhE6uFsPp",
  "key25": "3oqa3wU2RAuVdES71XGvXioq3wRAWa36jK8YWdAsrwE2ZX3PXNA43FFoywJBdJwhFRrwz5FMi6turDXU6gU7KMGS",
  "key26": "awvMwy58eDWGi9E4hB349ZdJdbhftk5GR87EjBR3xxJLGd4asEGiNF3TLeW1uVzJ5bSFfJxPdRk8tjubP4828rM",
  "key27": "2S6yUJrwtYrV48w842QcGGDw4esRPQSYQNwkkEwtNh986jbYaK8gEU93KT2LVK3djexqmz1stXFVEA8E3ALdhjD5",
  "key28": "5wuogH2fgSz5euaLr1KsVLPRGaYz7TEVt7CYnCA7j9qWBv4toK4dfcHanyAmaLmfqSWyyZ2KoenFZ6PAXa6KoMsk",
  "key29": "5RpqzEs45LFxs8c7GJAvVGkf8QwPz4TX3st5UYFhgZxpkcqiP4gevzvkxx2X4M5DhwSwKLuyn1SQE4upVyY1chcZ",
  "key30": "3J6hgGaM2car8ZQuPoq4tYkwUJuY7YiUKTF1LxY8Jycm3PxGDbwBxtLYKr2c7Q4ANrgt5AWepjSGztK81hibMxaY",
  "key31": "3JK8ELp5jNUjyy54QYbHog4BGWMiVUPeqQcKFbjY2UPtAu1RJrRZztNPxUyc5Ad8Wto7sGLPHVvfC5rYw3wi5sVr",
  "key32": "2uW7ZUr7YCt5Uz4v6BdLtF9UMU79Vpf3mSyanv6VJKmepadipG1MxUYrUnowQEWCrDUFDWH4PpfqWcdEzfgEqnCL",
  "key33": "33HKVDCJXraVRY29a2EfG3Xv2SMMXCVPL9RHPceezsEUFESdt2K7nVtLFcZAQmp6zPWyBrdTVWwCMFxfCqapmX2W",
  "key34": "5xXkwgQSU4YTdKiC78mC7zKSCX99wqDoiDN4d3L618Gm8gbdvMQ9sogD8YH1ZMmLLyCaS59Xg8t7cJM7n6CqDrC7",
  "key35": "33FeMkZjAn5Ecn1Y5Jn7d3LR5eQMWQwhf5mnFwNWrTPQx9JNC92f7LBJeDwwaCKrvGW2zHXCLbLAtt9Wz7w9wAww",
  "key36": "27y9WZy5AMQqsnqMBcNmcno8d46oJ8QzfgCkoDw3gMv9L5PjKR8uXZ8mEzvxJCz2fr6gaSbD4aKof17mQDrQHJUm",
  "key37": "4VZjudogbQTg8nbRU7v38eP35Lfzdpmqr6Cqka6Y8QLAaSjmdFDp2Nfn8kcXbxSa182636SY2grVH4N3XoytKS4n",
  "key38": "3kz8xX2L1FJzq9Lhy85RQx6UQxy4u2YFfBK4gtkPiQ66mcEthLYBWYfMMV83anLdD9TJ2FEwBDGthGRS4u2wZX9d",
  "key39": "3HR4ZuhABsVHiwPhfSZBtCDCAW2npJQDjVXoNq7zSYa9SVXirTL6PUqGdEQLZjFqX4MMrghjk16Ayj2QQTCQgu88",
  "key40": "3VXKGpJm1iiKNGwHPKZYNfcaUkUo6irX5VvqtQPRkTxM6Cwm9XHFMSiiYpHEaS3VonwCuxXfLmYHcZzMcJGJ4c8F",
  "key41": "3NuQuntQKPvKLchFprd8WygKSsvxsbToYuaApad12Hnspj72SDKtfjAwz5y9xcpq612RNGQGW8B6Xcq4kq9XCxn",
  "key42": "3gpUDppkgcTFhAKZ3ph1N3KF2fYGuMtCPMUH9Hr73CWDWTMJr9P11thokxY561eYYr2ZxgBZUqqJEqzjTKSUSkdm",
  "key43": "5ioyLB3iMq1dTYCv7NXySZgB9QDABYc4WQiTsy99T3xmdoXydW6tUjyLwM64n6WsFVmihLqqg13RPPsV4TvpmXGH",
  "key44": "3udjouiHVSutiqfs4ZHToxUjYzWgX3CjPPr1qa5HA9MqX3NhZXAWcz8zZCuQdkXP672vG8Sj3EKB12bxSiMcM258",
  "key45": "2JnijLhBR5piXtxbrRbdspdDus2VqgkW7oHa1C7KFJZVrhEbKdp4KeP1oacXmTMEsMBrbbgjrBFYvN9sYjcjDg4j"
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
