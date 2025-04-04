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
    "3A4KiUBB1C6FnMY16HZRFDaKYNz5zUtxYGmLzAurLSQFbWpDdxKYhRrYQ8Gapzsy1UehSUesdGKryjycrh5gk1rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNYnNKHwiifmMUJJqKk3QpyghcX12u91ZWFykpoWJ4DBHXpzWfvdELQBRFDbcqLhWW6W3wXQBg94pPrH3xDtp2H",
  "key1": "2HWVnnpZsLze8z1tpLpXDRF3hnra8u8zXozGAcGjBzm9ckq5EJ9CAnFBgHatxWoPmTjraiJYRbgd9EwGAgNrR5Lr",
  "key2": "3Z64br9t4vHechu6ZqRaFQ6ZyQkLvwkyU6oeyoYt65debf1Th4i3ZomiHkUBUyzhyMvArFoCKdUMAf2hXfVR2DET",
  "key3": "3W8DTj2u8pVkPgWjw9Vn6oro5znTQ6dvcDDJrpuGpSQpZAR57dyvVVxFfLZ3XoBrmwo5XQpQEYWHDCQqfM5yxwit",
  "key4": "2SHwXwKqxkdPnNnKKMMXRrXmiML5cnsYDPWwPFfzfSAV3jXhJscTW3UTcoFesRzpGZD59sADhxy5f5DhuhreM1gU",
  "key5": "2tf3y3Rb87hS52Z2FBZ3BMqcf6JMp9eRe1AXoJX1mkDtvr2nyJVDcPhHknw9po5JBz7Foc1yoHgZbgwsucEWhXfb",
  "key6": "2jDtmeD9gsgAG2sCXuSvSMM7jfm49RFwLiGGRVdt4b5cupDCPD1HkwaRQsprqPXJ4W7dmzLn5mWEFV6A9gsworZ",
  "key7": "3bZCft6H91FEP6Q5ykzEgCM5W2ea5HpLM9DuUatNv5zv55h6RjYwDnBBmnEHRKjDoCKcGsmuuGHigq98R4Ky6517",
  "key8": "CsSHgLdBLkcrX4GU9kxdjPNvkx6uEx8DBHNZum41y3t2zgeuJXeaHTtEEo9SA6ytEwFRHsSJ7njTccQPEfqqLCA",
  "key9": "3NKHFzFVvmnqjiepz77upnvThJHcwceBCsHFUmUEpJMzcnNo5nta7zm7qbJmUQJL3f23ayQ2dZJqwxJKwJNXmbNz",
  "key10": "2yG3sp47cqgDhAngkyodbmmAom5W2kPa5HccVjUngZFjDWRgzZYwekg9jMvL2Q1kKAZAFGGuDrcagvSFgDJeZjsq",
  "key11": "3DEvQu5xH68AunfSpFP9GF2QbjFs59dAr3jxcxPAaQb8dxFvh8msou3F2hqvpKWronGqqES3bQw7txtqG4TDiAZg",
  "key12": "2C8Dy2FVHc5SbvEjNeR2rBJ72EGfPfvvEX6GkDCWAHUvLVwnNSGJBh9Xh3jMhJDZrk8JQ3ae3uX9cDaKxt8oZbc4",
  "key13": "663V35LFzHz9knVrKtCyfcyPCmEKT6ZZ7cnRJS5uXpLYQpXT4SPkaHMcQUxVmxaywaHLUPaRjL2QyZzpAfcZhgZs",
  "key14": "2YzhBccPBajxAHfa4Mo9wkdbfo9j7zKFx6bu6KRRd6Cp5NMbYQH2ChF2mQHbCrtpJXnvf6Ay4x2VxZQdPnKUAEEW",
  "key15": "ttj74i3fcCTKLYJmaR71bqNcTSCJ7u4c5Po31HTh8KuphzjEaQPWLcMoa72dr9oEaMCW3oNK9zBMND8msfggUCU",
  "key16": "5kBqZx3ietrrhxheYL47ryNH2YbxeNwW1AHKWwV4nccMY8xoouh6pCnHk28cQHkZT2DykWBZddqkq92pJZobRA6c",
  "key17": "4p6nG4FVhTiBZkuE8bEpHviMUbvE7mqeXx8nM7B9bcurTCuwgN5Fgzyz5YxkHDGi5r9jswXw4moFoAfiFc39hGPS",
  "key18": "2kki9JopTtszZxuDJXbegsPF3BfSEQwdEr8Ay5Pz2Vu11b8L7MHjjBDQmWrihUFUjpmDrchLnzVmpcCJN6Y5BTh",
  "key19": "im8Pn7Bf4MBA9GCUF2fYvpBFdy1729kq6CyPGif2neF7mxRSkuFjfXx9BAicWDns8YbsLqDPERhPR8UHtyr4wHE",
  "key20": "65tVJkkArNYYUTuddLTay9vcWj4QdbCLvfH6RvQxe5stUCRVau8hucbsVVTqVDXjcUP1VQ8Qc9DNJREabR1Qb44s",
  "key21": "4D3XDL7MoBP9rV8qEgu84humZA5pj3LQbEgmx7i9XiT1xAaUxZRgBBRLEwupRa6MAEigfuJRSy9Qi8hmwsdyV9cf",
  "key22": "4MToWYV38hAge2p922W4bQF8yh6zu1vtXogXVNupVaSv4rtWk3AU4S8EDNPjFX9oYnXKxvJpkVRKoZSWPER3wCoq",
  "key23": "637GzJVSHpM5TBo3Yj82UGA6rKFhkc4GiTAqoYZwwcbiB6KL8m1AWXjaUMwgxnxcHbDnAwGE4gQ2t8b1bmFWtsED",
  "key24": "34dMF5ugpSe7F1KfkgByXrZJoCJ36StKgrQPi6M7jmRGkbZsaLs2jkCyqVWSzZcrBGzsJY37BDpxAXvz2n11DvZA",
  "key25": "bPWq2iCVHTqRbrmYn3jMuj1FKSQQ55E2gJTfpZCogFhzaQuLULkgmusUxmUJzc4GYfopjQu17eQZqqTgwJidaj5",
  "key26": "eBeiHdCSyZfGdfKkCWJZ78ixkAsWaeiTe46nQiWRY29c2fXALh7NFucBkvFLVrGn84LnKKnwnEba1dXXvGAwrGS",
  "key27": "4He7qQnMfjkmL31JxteDw8qX6UWqBVAVWKE6rTFEfBY9gzN2EBmBsjXYSaDyGYBqmG1PXL4Lvj26aNmz3KdokJoZ",
  "key28": "5JaVjsE1JiK1E6q1S1YQpkdnYWjYntx6MKBM5sPfqi4sjSXk66ezRy22W6JXYSqUNJARzvpWv7hDB4LMyMGeoskZ",
  "key29": "4EJxLNNDGpbpfY1nMSGXAa5bGosyjtYLxYwnTn2Ya5QajQGgrF5khR3ADRxwAjG8f7e2PhU6u8LeoeiyzCBoUCBg",
  "key30": "3PXb9Nog9H2o6bpawHHNBsTxTqsV57m2hHGFoHhKq8H6UsBieEMT6Egw2x1KwV19N1oWTcXLfXzeExER4NqCEoqA",
  "key31": "4vdhbmzHD756X2qq7XKEE8PgddvFtM7aRFeKwF4JA631uxFZky4eBaymYuzJmQxT5UTZFDgDbA49Rr6pFz96xv3d",
  "key32": "59zANFfoEBLPKnWvooCbYWU7u4p2ejG2XyPP45tshJadfehFiH2TQkpHu3HxvMZB4eEL7xGKjEnJvxmvJwALVxA",
  "key33": "5oXLAvBHbpifJRrB8qM1R7rF5mt8ZfvMmpxLWPwzsFb6RxMQD6u4C4d4SNfMv3udT3TKm44ApmU56KUnvoB9fvcj",
  "key34": "64nLTnfnyvXn9t3dRGuaQc1ubJViqMkTK2FtpMmQU1Yjf8xXfweeyYxcWNva8e8CTwSRptmvQSRXiuWAv292ruX8",
  "key35": "Ejnrc98JH719Dwomx95Sq69disD1gAvb7sieyD4BdmV5RqBCpSKR6atNHby435BXgjb1WSmgTyy8TFdTBnyqxoW",
  "key36": "2jpXefSkzzVozt8snW4RjdCQUkiqR2ebyz9h2hcnLkHM7NQDSPhWpeNZ5jkYtt9nMCDiXTJpvvwAAiwZxmJafSU6",
  "key37": "5f57TUSHKqm9MxgVuTsYeabrv7okgiptmrXptHzbXb8DYqq5B4KnjQKAQysn1UdpaXw1N2wdYsahJLvYpHrjnGU4",
  "key38": "4Vzqnyu5KRXCQjoX3BzqA8oUGAcg7HGvxdFFdScRHJjKzQ5iX6JetHPdyKqbMnjL6FRCgtz5gX9sXsiERcUhveKk",
  "key39": "3okTi3Mequ34GPinJgmji8BidkUGtnkAGgENbysoc16mAiKaVxMRLg8o8V3sKWtNqYqj7JKQtd9GwUoa3ZKZW1aN",
  "key40": "3tXnRWWwnRsK7JXuVCAtM8oCA6Si2SuaN6aLDRPEUyEtanqtcCMhuQQcqcdeWBjkqnTRkcdmFwE5oG2GLCQGoCFt",
  "key41": "MBHTYtBPuKZ8yiXtqMrNBYj3tcvnRTN2pkDPq8eYUZgCmUvvLyrgvqvXGhyTeP4ZYB8Yv6E9ZLQkYz6zX4A71wJ",
  "key42": "5Li6SoNTePHdDLi6e46CHtuJ4hXRofj1T3nm7VdarTxVciJgbRQaFocSKKaEuo29n3CBeFbPj7kdXLjz8N26CX2J",
  "key43": "451fzr41psu9vbsGndwugkgBRRbSxDjf2gU4M9fgqxkJtUDfLtojDPPa67PFjm9phaVJHkxM8hJjn1gxkqLDdMxb",
  "key44": "4GgpEsZhzgjDkQsTrVk8VPMmu5wucNY19ownYo6tTi3F71guNhYt6BDMyEVHscvHG3g9N6zcCrM3JQDbcnszgseQ",
  "key45": "XuzJjAtnP8QpFZtLF2PDhUDfCHaqeq9VGhEW1kuvcYfKfWcUvFjfHDNoMYQr78xXNe6EJELMQUwNAei5u8jcsjU",
  "key46": "2h9FbLGoNkbyYQvXBW3MUB3stj5VHA6D33CtTrr6DB9UcnsSN3g4hmnCEU5qvEK9nwbJpf6qcfGytCjqMbUH8hRS"
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
