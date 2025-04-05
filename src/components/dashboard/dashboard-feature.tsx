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
    "5CH57ktiuPyJ5zNtfLsHtNoxezFWSsoYsbjkuWL4qy48faoXL5ozb5HXNN4mHfxHg543JmxR7qUKDPBHW76qU7uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dpvfq1dszMcYpZmEtzD9Npff5Zy5Gq5m2E65zikuC7HVD8dnRGt8s8vnU8WS2hFL3XCtbcz2gS9K4VBobrinss5",
  "key1": "3TD4D6UDJDB1WzwXNMGiMtvUpy8FoSXCeVGT74HMrxcJUkHErErG1S6y3vjAnsETcDSzjayFCKpTXkfGb3Xy5ZFg",
  "key2": "3NYG24jaaZj5LZkp6pa4QragCZFeHFdJSb9i7HZDk9zzXtJR3zae4zuuyXAhF92MdhyvkSJncy97Yi5ezjD4LLvD",
  "key3": "5ieaEBmunSppyfET8eSZvp6sSZY6QxkdWP4Gvu1pqh5jMkRo5DQXkBQcoLuACaTK19gEvhxd4UFSdaYyht86W388",
  "key4": "5zq9nFHE2nZYDwosjNriABZ1S4P1DWgNiWuio6Av1KaDU3j3SAb9dpEfEbPWhYqk6CLPGZPfEbTHhEttnH76njVi",
  "key5": "2LzPzw7kfTj7X7PZVnFc79qYWra8Nbp5ZU8ypwJK8sFPGS3XW9CvRJg684ynBxZyjzPqjmNd1PtyL42KFJnHPF6M",
  "key6": "3KPsa56yYjPgiygVdhNKiUKJDTDmKZq7E2x1HPmJJ5agEQdumZVfJymYHdTMgxcz9KK3EEug4Vb8inBGypN5BHT9",
  "key7": "35VFY7dgvbD3fuo7anzmy38eqYngn93XTe9VgqPkQ73ecB8NzDunZ6JqwDxwN6FCxXoUNV4G7E3d2qwuG4pCV3w9",
  "key8": "4ESTAdugdRRBwuXxDJivYWzbLJanNDmiJXzbQKAF4YvRyQ1Na1Ar6epJYWYcouQ1j3pLqo7NQwsS3iwGaV6jjVaT",
  "key9": "UFs1jBQAenwKUTBFAFWnEAEtpdaM3LV7Djenvz75EpEdQoRM3nmqQ85EQvkE9cUCBLCwsfsEJBpFbG8UJvYjxMR",
  "key10": "4MmbqN4QV8mcSVs1MuPfptkdQkYny4KVPjy8wfQr7NL7Myh138cPDeiA1k8SzerE4BekBVfRnjpKUEkW1vQLvAXo",
  "key11": "24sBwqCMTBxUYvU67r6ivWMdA3GqZHj4qf2AM1YrgqPAUNP8EWrtJpUKimG7dF43P74x6cx9T6owbx31Ze7fX1sh",
  "key12": "iWFPx8SsVMQrZDS1UGMoEnwvTGGWcQP5oJ1sV3RBCSVdiuALcjL37aKuHqhLFUXEYqTVXwbSNMgiFMd5hMztCUW",
  "key13": "5nJmsyVNMRizUfzQTzWT1QQ99ALXCirF44BU9ZM1CHxBuuHShFmGzMBsjCcos4QEe36KRSn1MhWcSJM4BZs3HQs8",
  "key14": "39PobF1awGMUAUbRYpzLGF1EJQxaNLN2MJJ3gmH7qmMan712PVKvGadSxTdS5DngYLNBCMfc1Usk54Qt35xksvt4",
  "key15": "5eb6Bg1Rf6ZjZhbMrYZ1EeD7zuFW51TdLRshKwALj4Z2wmvULj79jqU6t7HzJXiREbNpAkrxdgJi1p15poWvTQ68",
  "key16": "j47rY4qqmManzQZWQWaqf9Sz6CS9MkqeQjXEWqKMMV55xvmPtnMEadpszPpA3KUPZzaLxNKFPT7DeweTeSXGGHR",
  "key17": "3txcbzc9yv18kas5Vf6hJJXxcx9JRrUc4Yfp7as9GhSd1ZhjeZm2qYJMQ4pHLtX5D4vqonct1gCoZGXqVRu3NnAr",
  "key18": "5piG6uJBmuLMuQAUoGFL9TTTk2c59KvLpn6MeLndjp4tB7uPMnVUjY5qzEHoXHRHJzaqkTNj4G2whCQC2tY5GhP8",
  "key19": "xzdzxaf7uCLFF6v7AEaYjhjzkfyyfCY7fZn3i73WgFzqC2JhK4NAR3qtpAKz22CHMWSAQ6yffMBBJKyhyg8E2LB",
  "key20": "2trhXEJrYiXXMKoKEkN9yZzrFV5mWK6bedKe95yY5TSYLXgtMAi1hoi4RMqS8eX7YuaGgctHDsJW9WQaie7R1JP3",
  "key21": "2fxMXpFAzinpPfVcmPA1ibNnE9QmN72RG6jc9DiHJanXmNet7D6ZFKiHbZzHXrVuNPsVJkcHTD4rtsS62WQ9fMGr",
  "key22": "2wdbreCHqju5rpyeKwvkNUqniSCBcRFoMNBkZZqyYtm8LtiFHkCmTaoUvyrfEvFunDtrJBW97AXMMMpYojfpnewJ",
  "key23": "44VLojoZ81oaEQ4PzWh8KGiCHQVDZaNGzipa8mm9wN3CJmsZoLnzbEwb96HUnghEyhayPNdAiF7FKaYB5aHQiiyF",
  "key24": "5nEsZXDM6WgkihZR4ui1HmshMxmFLAQVJRNXLjFLDcGs76uFF5q1YnF2JqDvTTPWiDkFb8sr65B2XNwv2x3AHJEu",
  "key25": "XUzTf1DSwPwXSE7KN933PkLYhRmhGmKxyr2uU2aLJ2WTiK4CSTU7u4McrbdtuQrjBZkXnZUCXRKPBE7PcBPkRwb",
  "key26": "2gjzhdqcwRm1HT2nypyFJtYP7pnTcHyps95cdP9TzJiZPAxzawETbxLX9CDX7xB9p6B9L8CFNJQskEQ2vT8ttWBu",
  "key27": "4NihCZ9myiPCtBUKckMTKqHgesrM2RowHpBsvk5YyZLgCynaNcEpuXJY8KEaWiX3m1LWWUyyUibcAHQ9PrTFH6hq",
  "key28": "3TyWfAybaDz1hUrWb9JCR9pwhbtyMMqsbchqpEs2NAJMFS79v5XrQdFPZAyX2Mpezsum8DXPrGNE3m44uXzQWWuF",
  "key29": "5mkMhk2gBYyVzumzUKiBWLWmZ6sywwTU2UUvhg5i4vzaYecSPQPCaGWws1in9JT3MSFWLoUuSDwTwPJdsYtH1P5j",
  "key30": "2umsX6jvhyUKDtoebzPP8MrFz8U4KRrqs7TotDTScK89to7J5dvoTMUoonsZxJjAMmF1T4J9KEspXP7z4ZGwi2Mh",
  "key31": "5qDCGmjAq3DcMJu3pcwnWJFLr9WNkii7et6Cfenn7QksAFkwz3mRDBj4fAELVRZexA7MSPMR8z2poyZfRStNjR6k",
  "key32": "5xLfXhoCgqCNcAmdapSNDeYxeVYzzT2SkcTLR8GnpGPg5dPSAK518HkxuxhDRib3q1k6a3QarRqRKD9QJZNvHyjM",
  "key33": "568fwoyQ27JtYCE3XvC4rdwQ7J8qNe6moiWS9tErFk1QKdtEwZwTF17if97ZvE35tQG42BxxQBAuCx2jaxACAKr7",
  "key34": "2Q2LEdcNQ8vJqe22tAnjDGD34n1XPhYs1z1qPtb5XR6kv4TfJvFBAyednxLFMdQ1aJCtcYN8yVRgTfiz1bYgagmh",
  "key35": "db2PR7R4bKJrbVL24tzFEjaYdS9cvFoXMGCRigbY8VmYD7Nob6yqJBGAChhHkJVQpxHU9LAWhX5ZhDvgPCbxe4P",
  "key36": "5f5iHcCVW1d7dSdgLYYup8EKDT7N2w8dzFwPJDwBSugi3jqU7YbZ16C3RVZMGPorA1GspSRk6Frs6Mfxsh5khXnG",
  "key37": "43kPzWg34Hk3Su2Af9vZ9S41PCf9qKDvQ1xLn9eDTr24LHgTr8niJfse8bDyXs7XGpsA5ANTyb9kGEybWKBvxPxi",
  "key38": "4hZjm34fuUzQSvhzJrmoKcBmiQ9vv8FuRpNj8pEcQg6fpP5LxWMDnf3rJAtj7fRfra6n19NhM8Fmc1oUtKPPBqvw",
  "key39": "5XNmYLTyfsKCvpAi36sgY5HGrMiTssbiX35Q8ZnHEQffkZ7bSnryJsCeR5bX5C2QyuAhFSX2RLKSrFkgqiSDaVnA",
  "key40": "3NRSeTZwCJBVxQ53uigaSVyPohqCYTZULgVc17ebjAsupDM8sxh9FTwX4TtQJXfR8bYPEjw6rCanV1jDiFu1JLTX"
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
