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
    "KrfnhGyqBTGqBSWU5FTvFBc1SYLe3SUwSYHQ8fVM3PpYrsSoAdExxy3YqpgQTS6cpUa7HwXStmFzEkvNJFiF3gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5qJoaXchWXSUoFWPfBzC1V4ChmqWH2D9dde425gaMd3E6bqDsiuxgiErMBjmn38Ztm2aVCk5W2MXfQghU8RETB",
  "key1": "5e7gz7HBchyPttupZ6Nx21yx3FMPSUMRbgWZrP5RA8Eg3rMmUt6M73p9n7KzazrqE3pDwvMxhTb47dBjcySCorCs",
  "key2": "58JZ5D9utTx3Evb2vEdDGa4zM9ZyBUHFLaCFiYijz2ZRtzfDgcACY2j5cFgRn4gAXz5hdJDe3sEFuzfArqGTovYU",
  "key3": "4tuT3bxJz7nhTvw6kLDxGiqT3p2ST2eMPqGL2mjeHsx39Vj7eDWGTBsJrPBxkTusjc3EGVrovFvZMKJsxNqyxPDS",
  "key4": "5924ARhrMd3dNiVFwLjFERZte3XvKMoASAWrAwwfvHjiesp2B7YtFRCq6GcaeESWvyXB5nb7oifePCU5V4R15GDr",
  "key5": "8uksebTVNfKeA3DBQZkNSz88EKnUaSaFFncgwHjdcdMMbY3Tf5yHEXDoX6Rp73jLsvJ3wZquSHPDAa6ZEpcxcK7",
  "key6": "55f21Tcr9ioxkHivN2SM4PVoeZYvQkNHkLWXSfp4qiNq4M16znwQ5fzGHpy8Qtcmy6kjP2gsUVBqJpiu3uFfagsK",
  "key7": "4v9AHVbXFApCGApwoVJUhxzyH1kx9YwKTvR3BJbMArjJqZnSGD7Sz96ckvo5ccYznfD6FpidB57UmrzLb2FMrYby",
  "key8": "N8MUnqDqgrhDbMU3QWZxd7aR2YuCATJuyf21Wotn4rDbMpojzPfW1vW2rPrRE7i42sEbSPckQJps8PbYUD63bMP",
  "key9": "5GVwBoNHi1ZXP2idJ3aEcDvLMAYVp5BmGByQ1GhbtY1fesxc4jqAb9e4CkRye7WJLQCtV5fgRyddtNHioZBfGHPk",
  "key10": "4JVid6uXXf8iRDGpV62ujHXk9jkRuX3cNXTTnQmJZTYaxApEm3pWPtM8Eo7rEBcvycVxHcaE1pGSBJk1EExYkk7D",
  "key11": "4ArcpvEnCPx2dPvyc6bXv6S1ARrGEfN8DLofypEmbKTmFzQHH7ft4r3jQPzJkAuf5YHpauz66LnKHxQzF9fw7pav",
  "key12": "4ZPzrK1mrCEuiihbyifnksTY3aSrt1z3gRaacU1JYCymktzyrSNnev4CePCTgpd6TQqJJckJ93zRN2wmsDRaU3hH",
  "key13": "4ENcxNRvUmfgMfVzRxyxa3Yku8MCnwZ8otDmU4xm4N2qJRigmEWiSiBun6GqJCENn6CsnGeNL4urD6SaFoVGtJAB",
  "key14": "2vfKTkoTy4T4faxupVZQCfHjQ3FVP5WCtGyNii7aaTxduNRUKsSj27KrxtmTB3qdm4biDUyniUAvg4NvW9UH3qa6",
  "key15": "btvKrMn5R4sLiw3ppw91wg6VxxusACxvR9dfJmSx7v75hrUWx8dg1vntBjDXrWAmTTMzKi3gaZtwCvbakoCiWkB",
  "key16": "2mynU1us7cXPiHNw3KH7wn64zrQhR6p2M8gNdoEZZgLnLBYJFc7dCKMD5sFjhTtbNa6ZAcht6KHGDDKv8JpCw9Jt",
  "key17": "3MRpZQfrZNYG6XJawMBoWtdpq1u5fA2srrgYeRpSxMpzFb6UX7aXtaJDpbYkc5zhHeo4QLKqde43skVwaE91wBmC",
  "key18": "5eqsszgfcZpX5Bux4pAqzzvYA1LexgwCk1ANPYk63DBmA6VUSWkewT2szyNy8TP9PRjFQH174gHcF6DVV1uEQnTf",
  "key19": "3KL2fKevhivie5QontKprCpuLDociXa7BtwMqR4jDqdrm2BD2GLE6YdU73gMDfEnb2r3Koxn6CxpQxudjYEM4tva",
  "key20": "2V7BjmhBW1s6Zeg7ipysgKbkL7J96ayJjHJUUshuSAhKKxUyjcjWvGfKiwqdyZLWqrDW72ypfTAz3UMXEDXehTgE",
  "key21": "4gPhzt8tJq3g3tU6qQkCXnw8GY46yWR9f9Dm3m1Yv4GmjBvG9SibnnpEQXP9GvkzDyBxtNiQuNMGmA1imWooTUqm",
  "key22": "48rP1M1TfzceFZCbAT6BvPt2urVBV9KSfGZDeGpRm8KWRKKb5mqx6sYGtYjcJ2oWE88zZpSSP93WewCRydj99urm",
  "key23": "3yoY6DGt7nJeuuwbEonHhrLrTQNR3LQjMPh3BeVH8JdERdH7v3XR22z4uh5FZ8KhC2SeCWzhCpav148pZJkGdN9v",
  "key24": "DyuzaqfEeL2KkHubjdSPrbBCsZc5zX1j551wEi7voeT5LdjzGTbsHdyd9A2dTSiU3YJvRU8K1933La5t36LCZ9E",
  "key25": "5Dj9znYmojmoC8H7qMkn4YJC5EPXbc8neMXq5RjGVaUx4hg3Fo59NRZh2Td1bNBqCLxYW1PYFQ1yz7hVxmbESVzF",
  "key26": "Jm7Ak3rGTrAYz8Her91RfDNaMKASCEyRmMyoBoycwvpFhVLnTVqtFTTfqxwypRC2TwmJX6FnhwNNL5uS2FT5PRQ",
  "key27": "5TTLVZ3w8Yy6ee7zkQLaXQWRx5Pdpk8cpNWQDygQjdujN9XVSdCRNPgsTdPkLcp2Lphhgq4CTRNCXwx7VpKRfPsL",
  "key28": "42CNSuku7HQ2rGvGPcdkmFUJ7gzQmF5MrBk8u3caLS9ajh996wc9SYbQu6e8Lf8W5SakK6ntjrNaHbaUSus6Wb6r",
  "key29": "dWbu3KT3Rw8NaHVupQnE6iNCkePeiooZGT3v8eGmTb7ArtxrhSAPo69bia4jFr56XnAw935sunMVXyc8HQ4Fguv",
  "key30": "61aaLJeMaJbyir2YxgMbknBGjMwFX6iBTNd7DgTdCYKqy3TvxTviVTezTmoFhW4w6tWT7bX3d9amXm7kpvK6wHpx",
  "key31": "5LAGTqPoe4iMA41PsrDJhrvBbC4UuNff6sn1y9thZdqHfFEJQySH8eoUbYC7xvpsrTCaamNWZMveqv3KQV2KzgB7",
  "key32": "2LxufsEut3eRnFFL3XBV8N5X3hY4FbeoyHP6i3XsCCfvbEf9EjGm5js1z3X2d8aCH66oXZMpB7sfTfJxVVKvk43E",
  "key33": "4MYDs5waWqPdPiXRwhkboc74yx65pFU3C9JozSjn1S78XzbKUs7Ed5u8frKkCiYvuyqE8pUvmsQ2bvehZRZZTR2z",
  "key34": "24EfRU5eDEx4JZDYH27Vu73vczG1BMKX15Gaw2YGqPv8b7E4rbRLcFjiShmEZzXJxKsoirbZCpUGAooPuxUZC7LW",
  "key35": "66Eqw2XLB3R6Ht4GVfFDJqrt8ozBuVkoveyncxQjYBXYJ4XXGJREKXjtZx5vawgEC5RDDmEjz6ruUfYQ6hmEpRAr",
  "key36": "128hGf9ymg2PxwTDEbcSAdtCbdNFcB43ZaYJR19n1ShVRVVrYH4Mjz3zJ6pe5rfV4WXu2XmFNczSRA5utsLjcg59",
  "key37": "2QouC7sCxi6vJJ2T8qduBEUYKsu57JSoZTAFMH7wrU4YLb26mrbSijXoycotRcREqTjrLm7hhPZ3cNQumkq8dkVM",
  "key38": "3ftyYftXkQN9cr6rbeTCn2hybfzA3qM9c2YzQtKawtpFiMPcVxcZq7ZCg5cGUsZqcsWaphdrkPtQ1sYmHEUPNtYu",
  "key39": "4GGcTsQY6bbqdfRmezsAZUhUyThFkq65QMmRAiHp3yYSs6JiEuqr1CcEHxp6BJH2dCddSqy78ox5v8eFKq2JUFav",
  "key40": "35drdm1M9hDTUWZknNnT5mG5GHEjQ8EdT3vMsd8wZDu7KYn5J8yH975nLyfMzE9bdEC1keXxgoUrY4woyZhN5UMY",
  "key41": "5GC8tt9Z5PRWtQWGnUoaurpMd2iGfSbSBiucZyyQebCset3sut6sNcDQ2BwbXD85EEjPaijRKiejYosgCsdMiGpG",
  "key42": "5kan8PzzCvRQTckpB6pz1VGMnjrboTaYnDWfPaEaSQF9vjmGdJ1nmDwxsGuZ52obCWVF3s2zTVurEy22uKkj74US",
  "key43": "35Z7u5hwq6N5asd9ZqZFNCe3FBCUfZGpbewwjf7ZTjjA9nXQYfaaCnTsvZwaKmtsPbrohrMwbgkjkK4Gxdwe2pBV",
  "key44": "2qKDeZSx8GimTTsSdE4z7z1Fc4RkwCm1fAuZn7jYebmbnURwnfR6vve4CfhjQoJnL7zU2maXv34sagiHdnCfANkP",
  "key45": "2AEFgpBapU8636bB9dC1LU1LihDHRrG6s6kkR3PhXZAoPFKrCH13MHdtaLGyZY2pJ69h7r6GGN4gr7hbXneRcxPM",
  "key46": "36NipN4QU3kQ9Liq3N7JaXw5VRiTfQPG6Vr8XQ3fLLMaanUknbtEfQjUfrpPMyvnVrUyedMJKCWr9pMnmxdbxCfW",
  "key47": "5v481Np7QwMgHu6BJvrf4dU5n6FNWxuBHn3gFPoC8nXfiNNesTe7KGUfaGZMQJ7RSbbLKKcp93HojCfybtZsuDuk",
  "key48": "2G31TTBnK8LBaq2rrnSkwij7JxYMvdF2X4TN45ANdyWZoFZdEzmVJ6VZ1sHQsC7pWSbS6NcEEAh6E8dJ173pHv9b"
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
