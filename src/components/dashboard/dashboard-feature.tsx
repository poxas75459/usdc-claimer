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
    "4LEZj5ug9jnUonKp38crvTDadRTTrCrJuC9i9fsJALmVZy2em8w63RaA3Y4PWg5Vdiogu2iBycM4J8KJ5TASXM86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLcAkt5JBncHemCJTZzU5L4tYZRdYZR5i4bTQxevUTqkqPUF9MSHEFDi5QgZjLKQXSzedNvH4NfqXjPFYbpbQ9X",
  "key1": "4yfL5Zj378B9pny4ukUeSjfxh4oiMwb6gpVtpyjr76wZs7K9LPybdhjZULhopArYUpZGRvAMBuAxB6Gndg8BBHa7",
  "key2": "4t8KiaeMj5FeCQojGiND4UDTfMJu2M71zJEUdEEkqurvo9sStfWT1Ao7yQaC4oV34DABjp7fQpsSsKUHCnCtHNuj",
  "key3": "VUeBnDNPWtvXXqaf9sWPGTfPWtTo9FDrW2RrtpSR5hjV6fm4hhWUdHxTffBNhibBjpHu8GVJVTw6h2KUK32NsPG",
  "key4": "DeQ7o4nuEou3RcYKWRZR2rHFDe9PX7tBMUWsQ8cidixpkWip4kbG5XgrEbpu7boiy8CG7WtyzeQcVb6NzsQmXWd",
  "key5": "eGrWEkcRVet6ZjvbufYHFBp3hhpfwZ1jXTv59DNHouTNpe1iBmyAFgS7FSUKkM9i5xheoz79UWnFNXB9fYMVv85",
  "key6": "3PoybpUzgH4WZKfZ2VafpSRRvSwjsvrf3tzJi9AEM6fbd2GziF6KvTdEVz1oiBXjEQdgpDR3McCD42xHtGaR1EHR",
  "key7": "4x3V3DvQ466PkaFKsNHH3rEGj5L4Tzhkn9FnKrAjVYkheWJEvMv1aGWbnH6CqmyFPShff6NqjtaGeXWps8952RtC",
  "key8": "4yH9DoQmYPGVMDHYsbtBKq321JekgDvoFCudB8UCQXpLGtXBEUjopdVsz1aq23ePqJH8Q6GwZgxbSnXFMnW1WZWX",
  "key9": "4aPrW9QFhXVLWcSXZ5nLB8wwYQhNMdyfSgozzuBtDB6RinJt93H5hMZjG1eGnUUNfxAZmd3RBYVwFgNMKLKE3Eq3",
  "key10": "4D7GMK12GvxtzMM3cxkzzU8a6LgeTZWUFZ3uxq3kHXbqqPBTWx2BmtxFqPYCtDRkfH7GCQPZdk5HS8qrUAb47yR7",
  "key11": "574WbhxXD9YwyRYqiNz1RLLGyNGjXLxARWA3Xu2dCjg1JMZEU693EXkY6TfFcgak8ALwe28NMtj5s9sosoBuzeU8",
  "key12": "KZ4vj31LMpewwpN5zmW7yw6PzTEqvHcVx8fxnqhLDkcXGFuP6BVtbPDtKeFiwDLR8YmW1RAoLxXq1C7U4XaNbcY",
  "key13": "QQ86V5i1FMUpmwu6FSMocYZo7J8naqVUBdFo42QyXJPwvZQXGhUAYFGgqqoDbU764je7e24m5yfFkVzVTdg1nRi",
  "key14": "2yVhaBvVVCWoxKKWozrYuNH8M1ckDz7ZxbngH46ZRjmLnWRErJhczaA5XpNeSDfgGVDd5o6HWaEsdwDvFCdvnWYC",
  "key15": "37m5QA9Z1PVmcQsxKcbsdzufC369Sk3TFeW8Y2kEfuc8VGwREUE6hEgBXWRURMa4i8EsZsXqN8aWnzqVqdBSP2J9",
  "key16": "rzh8JMmHcbKNxFf5YEoMz7HFaztBNfARo2xYuipXJf1EXEMWCUmXGJiuMBanoahHuDHduxNqNmMgx1vwnEcFLgh",
  "key17": "2KBXGb5EFbTcX1AsMU9xUSmGDPzfxUpuVwLmUuu59Sd9x5Mz57iaV9tKX1FseWvfQf5mq2yKkpHyb42Zmb83ydr7",
  "key18": "57YWoUevUa6hGy7dc8vUzdGtz93zdt7VnABHQTivNxSPFhJM626ChdLsHLUeiwbNeTrTD54CshNnPvwMPhCa1TUB",
  "key19": "59x8trGXo7FnPfB1tWk5UW9JkgGatL636a9shp6r4bHqeXZxLJLFi5cxMZRmPDdtvzExYmBz9o8L3F3BiK65Ld6d",
  "key20": "nB87iptvnNp1fZRNVfyUmBbBwaUqQcrayusW48TfiPb5ghH5VFZPa4yVHR2mws9fiPSiJhsv7GGznFCSmRaTzt6",
  "key21": "3WshxHjwWoZCDDXQPhurDvnnRgeifbRtCPAHa7uq6XStBCZuKGoC1CmGELzuvPVjwmNVExWFLkYU3udNJawmfYAR",
  "key22": "4FMLXmoPLEjmCWBm1DP2fCpkio6jgW2j1NEH2iszUqXxxW8G9oc79P8cuipuW17yFK6pbGEPqxjsVzNT5qJLH7Nn",
  "key23": "4Uyvkmc3VHEVBWykjkHeaWLu8g6fDJpmfnLFN3biShf1r3xYvbKmpvbCUBFbVLR1Jex6oXZGfqwWvXzVVwbzTvf1",
  "key24": "47KbWqcaRojyoNgiPLKQ5eLBR7waxGN71JdwW4GAL9k5S44kgtRaamv1PxesNHrn8PLb8ff8d1bWNEXvDtnfCvA8",
  "key25": "2r21Zgavkgf2ezz9N7xtccSTTvtdFu5LtK1HSe41MniBib3Kc23AgmPPK4GVCx4vndhQQieRx7SUfdw2Uv6Dugcc",
  "key26": "4fgYjN7tJZ3CBXzeAmugDAhfnwDdrcyeXXaKwxCxmoaeePdjo2T4CbWK9qU8oFb26AvjxFcgvupRb7NjSMd7Hhjw",
  "key27": "34UQUY3ZiLgdonRTkPzrZ3q5uFmwL9YaH9psv9gF2PZP6ZjP4uX38Kv4z5gZbjGwRtVb1pk2wuitnUUB1cvwSzoz",
  "key28": "5UXYRR78zEswFjSM9sUhzg9JzEybgNHeCcTeZEevCKKtjSjMvdthJe2We6tPJf9n1M2kr1yboeSggJVqWGaGsKoA",
  "key29": "3pd6J1MwndpH4RbCYMcnYiNL55Q6jqx4VWRo2GXhFcAJCXcd4kPjBAiZypksAx3wCmccU492HPALueMMTJC7eoNR",
  "key30": "xmgXsv2fFN4LtFSQaW22F9PZdUt6TSWwzv8tQzUYgWpc9g91ZG7KUCpJix84huyqWa21H3H84t8vMdC4maRdkW1",
  "key31": "3hD95h1KJzALxyo5eeFVXd6u63vTEC41J4PBbZvKwk31R9W3r1wYse6Cop6Vddzr3vbYPR2p7ezcgP7ybS5Qd1vp",
  "key32": "4QdicKfvidr6aA18e1D3v1vZc24Sa8An5hyRXqRPWKMCR9TczkZfAR6ghcm26ZV75s2K39rpW5j9Qh3Jvog7nMdX",
  "key33": "2FRdKYrL3PkFxUEXPXeW7VMWguzyJ3Swi1Dcaw5sqHttKwsMeKzRHSV27PrPPbz29XoFuE5MkyNGJz83KNzWaGHu",
  "key34": "3kSd3EP7MnyaQmFvgtP4cwZgrmLY1QwgUjbxSH9fh2GRqsjFsRbRsQacnij6Mxz9htW4aKhj7yKPxtBRYmj5pmyQ",
  "key35": "AoWNg145U5MHm7RkyyXmPFNguB1DH2ndXYofuA3W9HFDKxfEgrpR7yNvBnuGndBPSUTGLmW8UBzb6THVNrMf3be",
  "key36": "3zs4rreEi75YyB3HkgCe6zLYNj9JzFByhb4YtJdHgkaaLpyAwZf5pia3NQpdV1EcLFjaD8w1YdFp5Kvi4KpjTAg9"
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
