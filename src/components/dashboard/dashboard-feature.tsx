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
    "4Mi3d1JAPdrrMosBTxSya8SgWzKQ8xBRWsqAbyAsaMWTAdTpZ4Ry5QrnJcMRse4v5t1SxLrzTG7MAE252QmJ3UU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E43NXZRQJwynrtZC5y5P4RmDBLk5GXfFRDCvhDaCjKMsMTP3jgM9ZmxjAHMR4GLc1rSZEyzXQb1fBBFdUxudAr9",
  "key1": "o7qdvGWibKMAXxuSQgLfMLXRSWbgYD3K5pzET4RSB1ESZJFA8CBTGTwtTsvAfQrFo3R55tsNbNi5KknK1FLVm5K",
  "key2": "58NJExkL6AUFCB3D1h3kPb2npUcQFkwz7UvgJg1qX1Mc96DjbZa56QFyD4TAMCDP9LExYeEJLm23TLkcuEzekx3",
  "key3": "5vtDnpL9wEUkWnfySHTtH7wjC99WsaQ53R4BSZzzaTsvgt21qBHvWd5zgdz5XSiS3fiDAQBxdJUiCveXvMw3wf5T",
  "key4": "2EjDb4PJvPecY3jq77A2WgSFaAS5pz3rMVhMd2qCBHm3xCHs3JQPcRRSfF8crqjRhUq7SKaRVMztBJB8iPeZXKjV",
  "key5": "4xbk83qz9XLfUtoMNMHmCA1YcwyVb6wWB3nsgNWBiJ8yT5PB6TmRVb6ZGPxvLKVnFxSh77iMcf4Fp9ZTP7rpDPo8",
  "key6": "3v65a6fjczWtHG2CwQKBrfptDNTnoE1aP6ewmZ9DT9DirSG4hkjNxtfdQbsjpbW1fVQSdca2eThtw9XY3uCq8Npy",
  "key7": "4VcXXAp6sV9vdj52ZpbhPPLVU3FK3u83sD5mBz5wSTNyATe63nxACk5McsB6uXt6LHzf7ktQBGtmZwekTqGpAKaV",
  "key8": "444TT8C5vTaCrwcKmhsKzcZkZwa7bswYAAUBSjFXTX4gkTYMKtEc4zetGeqp8LUC1GwosyDT4PNxGPyohRZdpH2G",
  "key9": "4TkQ6mF7SSCqSceiowtmZ6rhKHhfGYBAPY7zpiEJh2cPE9m6fD3Js3Pje3RdCDGCxwSTVFGPhooMsgHwM98KPk8M",
  "key10": "5b3VX3JMCCshJnP1pt1dsk33z28Za5vAoZr88LG8DzDXAvsuY6pS1yzBnUt9Zwn71jTjaYb27Nmxjci5z27o4yHW",
  "key11": "4CA3HxgXpSucne1NGuLPvmbToMdFGwcPQr2iXCuGDm36gQj77Szqjx69GAXNPppGwZC5cYXeEfKSJgN24yenN2km",
  "key12": "4UHk81ScF7rXBxoSpUtttPM1fgA6KQ62hdVFfk4M4woWopdtawokBJtPUcK5gueY6P4yxTobFtNqCDVsyvuAcnyz",
  "key13": "3RLMsdHRjypUhsPhe8FNqvXcsz5hhBBjCWwDoCixULsvY6ebnFkZQ61i1WCk3wx55nxbpbCdfpyNQfsqFhaKvrz8",
  "key14": "3venAfGQiDxBsTPL1QaJMsgnEdPNNBV2yj4RcThQtk2ssf1LggKHMCJsekYWNQrjNu5tpyeSRzcs6h888x3hreEY",
  "key15": "3yhVmJPMfJhz94FtCfidNp28H1LsMMBBMgVv1ErvY1Fdik3uQVaDkHHuJnZMcRsYZb3AuBwxcRJqGGfE7bRN9bbS",
  "key16": "2Zn9sujVa1xHSvPx3DJgqHhUCQDMJE3Dc1ix57WcmVAv7cqkEncWv1or7Qxedy7kGgd9Ptmmdow6og7L1UoyroHG",
  "key17": "EfCYcyZTL3vj6nKSwvvAncao4TAaNJgHXpetFAQGgCyn1eBXZRkRtEgx9vcphtCgEihX8TnbpJx6UKi5DJsfTQF",
  "key18": "3KjVsE65nVnhnMiokEo7iWatAFW4bjUsRLupPfKCzbB4o8Ekgr5eXKAJGiLAbGthMEd9vYLH8S44cUzYh5TDiHAS",
  "key19": "3S7CjHRnHSx9gnTT99EqWzP67SzjwNd8qDRsTChW7Jc9LCyp5ioCF4d8VWtybrUtr2tbqfoHKQP9bWjevybFeewm",
  "key20": "3bPW3nWrsincFVeBtXhiZBJMqnoMtPww7cxoyhLjc2E9RZKSELJ8Wokwgs8zY5tMhgipRsLzvJRS9QWygZPaCcMQ",
  "key21": "5qYJnbcKpyZtuZwiEisMzoPDUWrWrQgYRg55EKxXrSXasy81ejUL6g332fSRQ4GYXijNk6D1ayazCdgEVv4NWa44",
  "key22": "5kBGS3BhmtV5qycW9jRF5CWXize43g136hNLdobdwmRJyUJeammM1hS4iqCbBvHKZCk1UpaecNEzptyvp4h1dJm5",
  "key23": "4CTzbw2DPVjDsod3pzZENTZspYUuP6XYA5dAjCajJAT151pf4yWJfaFdAPL2gWxfQfT5rT9WRdgdLa81f7DZHRcr",
  "key24": "2nonawjvwEWcEsdERQ1X1wc2ZqV5L4zB6mZYNqazZfmgg3vmdk1VBBKp6GtmZKKxzFVZW3yrtemAUXYZSK9QjM5h",
  "key25": "DzFN1eW6xGdKX5uPiX9iXGZu3AJboMgAVZNt3CqDJN9zd16HMAgJYB55vQtUjdf81YhbaCxLpPr3t4LekyVKhaA",
  "key26": "3UoNzNSk2hEf1hddVMHvwpfeWScDSJENZ85s3yN7ow2FbpXNBbACcBZ9FSoVgq6NrwSchXHDF8Spi8eJyhdDWBm7",
  "key27": "2zwQLs6NLqPgyYAGCmUFZX3ziN5uZe8xv5AYn1zt31ijKQnsoE3cdKc7qVmuH681BreasXWVLC4vkrYHyUtYDdv1",
  "key28": "3fBZQnqRMwzKR7wKhUzSHxBoM35FwdQr7EZUbLbjFj7NRVJiYpEzznCEEjsYYs4rLaDPdebJDqK283Y3XUE7JRnt",
  "key29": "3QJrUFqiJ1v4DyR6yb6yRSbRUgazb41WANmc5Rd4yiRDi3J1TC7AC2k5gvNPvi8syUsF5GopNUBcBLBQSKJoVeEQ",
  "key30": "2hstfyprdauTNfNvZgMEfsyjDrAYzVDyzNNdAu1vWjCagS3VXgS3jSbwnawi1kpQBm3QrStB8JFBG1XjZxxTrGvf",
  "key31": "32TeZdfvqhT2i6aicUcYLSb7caGRRG19CdHbLf85sWhAs5v9HC9MdLRss2cTEnAATQM5rLR8zTvDdMWnoG1m4GKY",
  "key32": "UufU3AkLVuSibw7DGSC4my6drWZGDNj6GyK7wEvRV6tZxrdBUg9AUVwyzaqDvb7wk7dupEasfpGkobaLqoPbVdQ",
  "key33": "SzbXQ7VoULKoTRNRZE9S9AY6XmGMgpz3tmGDWdYudEYGeCJTTnP4StrpKpTDuJ1fZ7eQe3dsUivEX6h4vERryvW",
  "key34": "23FUaLbjvut8BkN3DRVciDw4FdbkGghtkGjDGLmWbZJAGKz7sopmMdU1QeeYqMqMZMFqAwEut793Bb7W8oRjGj3H",
  "key35": "4Gska5SZHDv67xrCRaXmPpbDFjTAFTtQtCJ6HNQoatadjoE8E4nchWB19szoZBdWhaGx6kCXNpM7vKu57kBtCqas",
  "key36": "56tqdK6x8xsu2J3dv8PZAwGQ4ZX3VNdqQ6BCwHUFr79JdEJpomEkJxZeA3JnxfBAnHUqdgYSmQAib514fMyggPBR",
  "key37": "2E1atCHBg2HWtkD4xXNQs4eq8ag5fMVdzv2YTvMhVbuhiYCFyQiETk4uPhAsBhafg49fRpzjK9SUFdQ1cGcdKcCd",
  "key38": "5uL73w5qoTU5FjS4Z8GRWEucp4eDTZykbXFiqoGwhAbcvPRTHPfW7ggoGBoJtHdJ49xzcPEezdAAt2pTZY8N3Po",
  "key39": "4nmrZLm1uJLT5L13tmpEeFd4B6FF45Ecfwav7DMRV78Lv8UQxLsLwpHJA79kMHyj8rVZ5J3ZPohjgVQeL69WEikc",
  "key40": "2UP6MyNndvvEqDRg1k3BwDWbfjJVixAsKxhsL55jrRVPG5eUJCh8Wj2x8xxPwbgUYoXzUTqahxKb2VWXe1LYPVYy",
  "key41": "2DVvokUK9GT8qDeivzTFKZMynvAVCBAPXSHHDd26UuwqtcjmdxbQde1miPfubMpHgs1Fe4NHNAG3fuwoir9bgNEd",
  "key42": "2erZjU3j2PzErZCB2MqxdmcY6XCj6PPY3qFQjYzRrE8vdvHFeMRytHw2cyWu1VWyTgkLZVWPJcJA2EbPDZZbkhEZ",
  "key43": "4LmrgtKd26h7j7pZYY9zwCJ7gunnFD7mZBSsunwx9Dg9UTWzifmLmzJXJzWVwkK6FmMj8VwnixVhzQ8dhTnY57jg",
  "key44": "4jY1A5sJZvWddeVY6D5CHsNdmaYLzY9qZV7w8L4YMBaFgAVFJArc6AUkv3rhyr2pArC9psQGQxFcD1urvUYR7i2g",
  "key45": "7TJdMCNaPyeunRWq1nkPjWPJKPovQsJ17fnZhR1FhPiFb8gZgy1ByhGwhC3N3tiJKmMPGqDaJ8REnVZJEhwFMVx",
  "key46": "4PUw5aeu2gUmmWcYtnUvqYHsBfSx5nxjtExS22rog8syPgSkmTwJLPf7NT9w9gaeq9mkYtmMdem2kkpirxi3Arsz",
  "key47": "bWUStetZc6EGwP4pMSTi73KfcwQ9SH88XVdb3E4vxfQuP67B5ExtSMGhu9Yxv1gmhSvDuBLYjRVbLNTXHgsyZTh",
  "key48": "5FzRcUNkm8wrAympoG6hbE1rt6Eqr9P12c8vSD8P6cmGEZLBZFDh569YYWH6bJqwiUPB2jze6cCRoVpuZkzM5uYZ"
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
