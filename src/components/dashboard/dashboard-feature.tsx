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
    "251ggExqXv8XqtEJqX7NibuWJFcqzp9svBEsKtmCDoLyKSi7fvqc7AbmmhzBLnoCToFnFgLNo6LY1AUfGd1LRuET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLdJ7TBz8HXDja5LeXjkWyRAuqgByX2KiGeXrqtopeGdHRM6YJjAY67dFkLPa7XswToc8R9pAyAwYcurVokD3tr",
  "key1": "5kD8R7f129aRpCx7YB9jGhQcvQ9pPMmmre4wLKvYktoyRU7eMockTU33ZXA5KFqfYCFkAPtPacAXBx2AwM5VeXK4",
  "key2": "2gHydttYFQByE22Nz34SZn5CQC2qrXNbYnYK9uBmGj84Jx2Xih7J9WoZp967HgGYJjnV4CKSp6QwQoAENUe7edr",
  "key3": "9ApkFBd4pA7HYJCWE9Vn3o85NqCLQaDrrgWZBKFyYGExUtjXBTM1WcawEQwb5hkmgvatBofmKtEtJ4oQyGGyWpr",
  "key4": "2iTW9BNgBJC32Hgyqzc7MUoNti6Sj4KXfY8jnznYHSPz8bqEdADaLjYJsuGaVFG8QUCCBnvdpgCvYJZunmhc2ufv",
  "key5": "67TM1f1FHthRCibPNuD21wobkQmMeEhDvvDACwBrUcDKLchh3ViS68pYjwY38WFFp7pKrV7kErmVrCcMd4Z96Hwo",
  "key6": "52AfFurNMbvjgsSMPVxB7kstoc87U1TuAxb1cUx4iVp7eVwxaRQEr13DDShAHPu8f76nQ8VDt5vYqmYukd9Uvqh8",
  "key7": "67Hx7ZMWEqGu7WgKhNhSyiKFEDj8mVfciVH4tSw5kfYJHY9e4456BzVRCFJTp1KooVL35CfHE4HaAvgjMg4DpXqA",
  "key8": "B93sS7yj2amFfMxWC8zRkq7Kd7QvB7v72RQWTa5bWqCb8MzqyNF4bWA8bmNGyWir7K8eSg4PRJLvnn3hMzgLGvX",
  "key9": "3v8LRFxsRVcjqQfPw9bkzUVjtwwhr1KKmAQjPvWqTRJVjZsApP9d3VQ8SWGEqQLkdV85kSE3775ZsgReeKEccZst",
  "key10": "3bLzHiV5b9erFD2qMQSX2ofDhUkeYhj3d2aMSrZ4etynkW5JwDkKWnvppLFXTjDLcQ8NikzJcpeP21bMt1eoedgW",
  "key11": "4R3GD8HKZ4ta5LDp5HR7zs2zGquNS6FNQTAfPXoLaMhmmTbiMPcpWqCWYUXWjDqCo22NNaft19UaiqMwX2XHuZoF",
  "key12": "64aY9D3KBa3UqqSuCUgdSamqB77iFV83ngAqavjPtqpzKpoYWk1JBSq2z5KmyDA1P58Vsc41YfDNx7jsMDWQHdkL",
  "key13": "4rTqFmDicXB2SgFQHJ9BPHU4sSg2koMm8ERzs3sURTCQhnBT8uq2oRTrdmMTXMZGpfYHv1eiqJNrR3kRpbCkTg9t",
  "key14": "21FjfJ2u8Z77zeJXp26CP4aCAQ5FC3X6BvNTyKmHMo43VP2dCX1ZVQNWBFAPkifCZ5GY7gyA5a47r95KChxhntrC",
  "key15": "4jS7YNeX3BFjsZcQmEzUqXCfTK1gVxy5c3gHQeJJXgd2AkfcqLaTin16262YsrDhWBDuCE4kNuk7kjVU1ar6zHhy",
  "key16": "J1xKvef9JUpAtcw14vwUPtyZsE1jha8V46VLfcSaG7qiW3tsrTqNtA88s9BuZTSTKSrr5B3ETGV4EvAJymoEiEQ",
  "key17": "5AbxS1s2rMMhqBSZCpANEFGaXgvbjv1oAe7b9unfHrgr1dTMYeWWnqzWfN1rmrUb6r2nGy1n1kqcJA5xgPF6fDeR",
  "key18": "3GeXGqTvL3xdAdUAZdXw5bzGDend2tkj8RN16hbz3jqAiiCZuVZMXDW4BUQFRqNAhRjAFqUd3EuP6MhaXYN9CJ1T",
  "key19": "2Lk7QHyqqG17nofnvwaBCxEce6ANpsC7ZybULtfPaweyPxg3aT1QGyvEnyKUrK7tbw4ATYFQx4KTbcRk5iSW751G",
  "key20": "2tBa21x6wfLvCb5Jj9CmxXNkosQ5KF3tceQtaSawgRaHm5DmZt1soGd5xrayh7LyYDzUcFcAbXduHDMGSpRoUm7n",
  "key21": "2CN28t28mywFLLsRuoa4bEvxMpRy3YwTkYcjvrwbMqVHfiJ6eyD6fzGqEvqHugsuXUk23qCD5oGvvkoHjDchAQqM",
  "key22": "3NttqfrKSZ7iee4ZkdYydrTHtqgrhiQkHtLkw4Ajw8mCBLG64N8WN55ipSVq4V9zRvd9QEuDDWzrUXnwfgC3qkB4",
  "key23": "GUbTSbPMdWV6mtupAcB7PgcfJj9xBn73amJuXhUe3NreUj67NP6u5eh4YbKhnfwg9N9jYCbxQ9fNfJ8rDa3D9xF",
  "key24": "629eReKgLzQaFxRh2LMPjTb9xMznc9Nwq3X2Qda8xsbr38VbTDXoGm3NoDhB4wB3sSCaGp1Rv6vCEgcArPBLTLug",
  "key25": "whzQwTkyGMc3cyB4G5FvKatEHwVcnhJX31Nom8djzFiUMLnqfFBQvuqsc9vXnyJNV6MFbrvknxBdHXouM4AZr38",
  "key26": "2WHDZ6ERBJ5tXo5YPraFNzco7p4VMbXeQ7mggE1goStTHmDohtKeRiS1cbv3ZT1xpZfBDHvGyAdLZaCiFobaKJcT",
  "key27": "5KtYHA43vwc5pvZUTc196SWwrYY32yw52PGRLCdn3Pex5Y1iezFwhn4i6ctxDxoK4aLGC4yUorC4yVUDy7bto2ox",
  "key28": "sfPn6eS6zzpoHrUPaFsR8QFw8oCXSc4qVmHAaJv6gVGQjVSc6NgNt75cg6Cr8aM3m8TjfnAqVRt1nAi2xiyiD5b",
  "key29": "5hqvDTpHKPEoQ9qrCuzWwGwyA4HeuFryFGvDBRG9TC8RxbPWVBqoLiXNgMe2N41nHuHJi5p1RvJrSfg5U1Yn6Wxc",
  "key30": "4LdyvLxFp4t54B8MdjcpoEMc3rKPhqkwrd947XaHsVDbvyGvbDpHnikwaXGpUU6Tmf8Hu9wwCPyBtHoSS7S1oR4n",
  "key31": "4ixu1NGr9q3yjs8tFCZqVTFetiY7K61Fmqq23MWVqqcAPMptxJeJ7a7Kz5HraWustWsRmPqe5veHfjw625x5nY1q",
  "key32": "2BCC1XN9pbRiMJPg7xSjoPiBoZLMgSjF9ZeS6eMmfu6WsoQfjBXMzRCMwUgXLpZNsrQuNGgW7E2jG3m75Cu4bFG6",
  "key33": "5ncktDFM13XDuQyyMiUGNcNR97B8usazUiT2o3wQw6JipYo1gwgSXJQSez7ArV8CqvHbBJet7f43PBTDQ9HoPgM9",
  "key34": "QfXCKunnYHKgaqDbMEHBBLo8PSgeRafXDb7fVRFpwagsjHqPj5ZVa6D9UavE6X7HskujyZCmoP25JNHDP97kx7P",
  "key35": "5LGQzUJqtDZhhjRCBJe69R99sRgirbdzRnQPr2SZqHKwkKJKNdBwtgDXB189aSXn3hCcXvLKRvjqkgoCbpd1tXHe",
  "key36": "2RrBLr2sPSj3E5TVxojXPPnXcah7ZpQEsbp6YkCGT6toM3GLgXUFdPFDDAwPMdf9ShmAhYuKS6YFDUCfFHy2S4JD",
  "key37": "3B5HraM8t9zTsXWup3YEbUXURGHUTrbJeCoRw1CyBxnsU7yvE4RCHmyneHNqkoWLCBNaMFBBdxJxN9d4xpHxCnBN",
  "key38": "3dGp1kU2n1ZsACBAZZQr4wMieBXXWXHxUKz6Z2yiVkijxeotXLGczhcuqSs5AYWmeupvx9C9BodV7cRTt55QwxCi",
  "key39": "5EoTDyC4yjyadpmCdzMMX5G2Wi1AP1m4r9nNDCSpARCWmvUfMk7CeE9wKABw2CjHCS98Njsk7kWL4m2M5XJtesh2",
  "key40": "5X1cuNa1EbZe91xVpTGiqtayj5BFX3G1bkKk1csGCGStBAKNJTatA8XVkhWzhaZQhBvdV6vzotD5UFiat2bqn38Y"
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
