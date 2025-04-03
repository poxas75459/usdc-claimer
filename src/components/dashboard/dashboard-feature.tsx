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
    "5he2gMJh2yHh9hAPU9GzkDyLLvbsmXYE35atzpeMNHufWhbDRGD2DXBQj6MXvV48GPUZYRaqR4p6cuThZT3E27BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36j7DZU56YQWGEieahFpFkDF4aBhaxP7EZnDUBT8SxD4gLbjgB2Dy15WM2xhgfMfuCwkxaCeW236Y13nbtkUjRwE",
  "key1": "4m1HLYYc3Aako6rSYtk9UJ55ytugXVUjo8y8A2Em7DknQJGG52SWJasrM9eoy7rukdTxg24Vfpy2nUGKvHbxFbLh",
  "key2": "XWMW4mZjFLbDYKZt53cL9u2z9uLxSXaay9VXjppWwMwkE1R8j79PJ1N2dhtqB5CSgMcx1skH6mkvZSZ6t8EeNxp",
  "key3": "21BcrNGUDwp9UgR5EVj4FTA951tBtDivwq4CRDdYU9btShyuLhYUQq7bBEoc7JKUngSb21M47Xt9HCyGTyU5rLsw",
  "key4": "4KdkhVnmRfFSVxJkFAR1rACgQb3YdCEMFawDZNvZoMseubTSTCCDwnNT3rikJgArVK8UQXtrkSVdrraX21SXKddA",
  "key5": "4kakviLHtCXcQoEQCB335Ex3FwWNAZR9K8dkTeSmBRGmHQkdEHipZVRu9zzpjYfz4abjpGjcnMEXCbXHj1fWSUAw",
  "key6": "4owpLuQW3whA7bMkh4ZwxAfiWtR8gFjMfTXusZtY4y1im1mnJXHLDW6eB2h91QJyGFnmFpmbuFMzARq1iBV7v9Fs",
  "key7": "NoRh1bjpvxTeuPiuoRq8YrQryoFBGk2sK4Kz38q2So5Xv2brK4qcESxfe3JKqjaS8w4Y9MBur9uEiMEoakFCfMP",
  "key8": "4HtqApmBbncB5H2VnUH9QXDHW6ZhMKuaSQinTcyqE4LpLos3s4KnBS41xb2jhajx6q8iynqpVQHepxqUSsxTzmKu",
  "key9": "5PFeFjNZvgSN4ProVGpTH1QQieWqURP1Gr7FmYUhoHe9DyPn3PndVXc8yBzVdpQc6wVBXBK4rGhMdV4mPoD1oHA",
  "key10": "3GTntzHeExnJDYEwVuomrmFLxFT84qzti2J86A2TtnF9oXsJNUaQZ6LdWDHBjpnDrf9SGrYh49iGLZg8LR54VnjE",
  "key11": "4eqjY1pzUCGx87XNGQUvedqxs73NjkjTPG94bn4Eaj5Qg6dqhgqULjXokQicdXd4LdMfStiLaWH1YfgzWz1qFi3t",
  "key12": "5r6FXnDmdZyASmytWQZdRc2WWiHLN6CrmSDXfoETVChG12rb1FCrhbUJr8pztDmME5VznV4PyuwMnMDNYnjLPQvV",
  "key13": "3apBYfsb5v9TuP4ke8xi9sdG8HixdCeifAZsGp2QQLsYCo4zJpHuC11pLDh53jtz9cjUpFF1GrxiVymcsW3m9oMr",
  "key14": "4hnDGhzrx5WjAyxvwtMfkSgJ1UrhfHR95Qc36x8fVsMmFWRtTiMXchoek5BuL2nss8oyY3jEQzxyK2akK4KQwazV",
  "key15": "4bma5pFfnhyUbHggmu95JuEeknQwjQa3tCJ68sSVY323CbvN4xxCHFKwc9fBTyMWQHqhBmAWNcHSHVJAxxSeKMjP",
  "key16": "4fhP6MoAGkB2fmmWVhDdJCMGFMwvnYXVPCcRwq4qb6ou6NkGNSBFk4x812BJnnav25PeRWAeWUHmamkoofFPDm3d",
  "key17": "39jyX8zNn7wqMwtGHxfGwProHUHweRYSvqUJgo9fcQgyVxRfqaD74hH8th9c6wZX2wUS64fMKCgfTDXLXXJJymkn",
  "key18": "3SKbeazsaWjhYgnvnLumGqamRpeS8hd7HrbDjTYF2BE1r4zU6HJnozPAkB1vV6YGECr1pyiNXrBEf9Ysoe9YzF9L",
  "key19": "2gWbAKyAMPU43sU5ST7RktDLMU2Q3STkAdtRLmsAbZkqKNAhqycs9S2BWqqsTX8B9DSbbksiFXacxZC7oj7dmnvc",
  "key20": "2WNNqkvdtuKfrDPfG9vGArv6Me6wrwmALTDTaCxLUqT2KVxfY7eTuSrwbYAU2fxJRvohUa4c2EhJ7suGEQgXFE3",
  "key21": "8uJJfLSnKKivnYKFUJH8jvfqdbxVNYe91DtKw3mAWvP7NC8TtmaZ9b6hF14RKXFQu8gmHrMPn7UiDUZnXuPKpfo",
  "key22": "5qNBUr3w5LEuLw9da8JDRqnsvHM8H3TZWEPdnoF7PnZ4ERzZu8FcvwFBHYLHFPCzukxVsA4dtD628WzxfSi5uZSJ",
  "key23": "58CXhyRZHSLXapw73GktTCSNyCpUDJspvZLseFFqeCf5mymNyci1rGRsqaQKJMUZtUzFMG9CG1wdhzTVZiKeFUJg",
  "key24": "5g5JsyRcRTfM2QcJksAmq85kTBeLmGprRj45JYa5sp4jfK3JDcC8nkfA4J3QRjxT147K323h56nK7NzkLEz4F8A3",
  "key25": "3x4JA3gdQCXAn31ny1RpKqAE4BRC8U28M9zVPL6zKLwck1hLkANYgsTxj3XxMyUHBfrYF15fZqpfPgnEzfGytt1t",
  "key26": "4USk6gL9HyPGBATBUmamqLhA9YU6Kzr6hQkPmYbpDrBJLUQQPrk3omWYWo2W57jWWRgmG9Mn8Q3wGQXVUwKPmnmn",
  "key27": "5biTfUNHpYXjpZzYmHFjoh3UDKm6HVhwrfCJvpmmRwiEUcQXGsnLujizoxBsEUWfUKx3RWFugq8bJXahghqpFQ6f",
  "key28": "5UaGgkMU5jCWuaJrk4ohAAqDFcJ1qqAJTfFK651eGg4CXE5L7SC1qnWZ4cYTmLPcggKEX3teykEETmdRWkpEdsC4",
  "key29": "5Vnb7oBJ3Qfh35znUmsgoSBw1vLgDaiEEZ9m65hSDBB99d1fXyJDaMw9Kfi85pWfhnnt5xCdQGKsSmh5QVMRbgt6",
  "key30": "3sZ2csGGsJorVVnzoetCFJhNB8DdmwFDTa2LBiavqSaMqCVn9fAmDgpHJ6AA7Wtyuaf1ycnukUwz4EzwDgM8WEwz",
  "key31": "r9FNQc4gV3usnsTeeqkGfxFUZGpkLP67Cg6pHiHW9ZN8qEyZC9SsUjA59MhrfVoSp2EqZ4p7xPnnh3NFVJGY8PD",
  "key32": "5vL2GaawHKYB3kEWcjyC8kx4T3zG1QBBy7QP2GA5TXchHDYGEEtwMt6VaSFAyxjRNFAPK9qCyhphNKyzHFYhjeFr",
  "key33": "4WLAUPHBkq78Msw6dgtWW3miJKF4oKAyCv2tfSRV99rWHYB3oqPKq8dBotn31eDwGQhUoTHsYpTBGttNGVFHfo3c",
  "key34": "UAyf81XynrfBe3KuvkdVWB1GMLuJqbSgNB5XQ64nUMdK4aXny2aYBsvFUu8zcQQ9dG1xyuCzUArxZxWJjcgGhiC",
  "key35": "4NEdE8AqgSWWjqjgU3c2jHEyj7Wa29ZjypUtrTBJFzc6gqqVgbbSnqZj82CYNQyTXFRuQte2HTqHAg3B4VwwyFEE",
  "key36": "ftv9qJ1M3ajVWSazLoEu1MMcC32dbbh2ADZ51PdZrGBYs85JCNiNHQnSxrqBqoGEn414iiXsZMeku2ESncGzWFU",
  "key37": "2aqyhyhSUjA1Hw6ze7VMSebGtQRG9eGontFEJFi4Z5NF9Djxc9w3CwdkPwhsUvPJ7jdYgFBqxqhbFFaJdMTJFHek",
  "key38": "LpMUcM1JhfN1oaTBg5y5ynyDPX9sxvUDcEscngRxgi57PBXmtB1joUB7iBk9YmV6C3seugnT6hNU896SggBHDaL",
  "key39": "4SfNWvhdJ2VmeygKcaaZv4Lx7BXdsYb1DjYHot9RmvEQHx9cYNa5PVWrGucWcr39vAKE85PqLA1muJUxwQ8werTw",
  "key40": "2PgtvPgKPNYRTXPwuQimVWxhSJV8Saq89eGJ1MNnrNbuVgq8DqB5Sv7ZZcPBgU67K4HAZT1VFA4srxfw11pPJVsX",
  "key41": "5r2f4edXhytVJXWTSkr2aQ5qfefWpkgUfS5WFnTKGAW7j89xrrexRb1bBzFjM4Uk8LzxpV1gmwxgTqPcN1E3fSgU",
  "key42": "64bJaREKbrdirxTP54j83zj2md6k9sFeBiqvBS1MTyWfYPUgWF25VTF6U3CR2By3asfWq6qR9wSwGz8A34wiUF2i",
  "key43": "2ZubEfLHvCz7g4Ka7CmFfPxjP8BsBV1kWnQ7hkwhtinbTkGjqV1Bb4BHcP62eWPuy7tqdmDAmZnR5d2ruEHLSp2n"
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
