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
    "5a3WzNPH3vPehxytcfxB2M1Xfu9iSwhoPdrsgxLjHouXcHhyfMRBtxHSWykg5zGXEUWDyZnPt95MSgQtHJD48EdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGipLNpDWa7u5BwGJ4HWXFSjgzTGG3eSBneDmxC716MnsVi9zRvoqHFyCx9AQo8pmmLS8LsKDC7nBrGBRYfNR9T",
  "key1": "3AdzGDLppiRmfuQznWFdbed68VpBDrPbcjh8r3gbRpyrMQL4BuHKrcWabxGqrPAmaXy6TeneKUWX3b5YwwTJ1Yj7",
  "key2": "5GaAKHhJLN4jyd5f46iJis4dp8o1X64W5EFc146Km2zhASsqwyUnShwT7ZnqhQSBWuC779Ps8HgLoS6XvYqTCp6f",
  "key3": "4LZTPty9CVGXJzhgQfGEkTGG3HrS1iVvrbzCS48skJLrCJ6LKHUBRpjvsK2NfgBXPMDiwpsVvCRpFeiz5FBZN7Eb",
  "key4": "5nkBZC2LDbAXT3fGDwhyGUVJCk1PJJw1Wi4fXHAynPa4NwugTTLpNAqaBQaTdR4x2V7jGexDdvfFmxnyYfXMokzq",
  "key5": "2MQPaPuWYfzivdLNFq6BoRNPHfEwr3qRAhnQ8jSEjmkLE9DHiPHpCANSRGtJdXfJm9AbMmMt5xvMkTzDQmn344Bu",
  "key6": "7A65uubttuaFT6PBUrgpVY7w8C3LVQ4i8eQKJFogZrxb5X1rn3WFzWt29PnM5WJXKpVKdrcDs3dfg1DDQLQscG2",
  "key7": "4Yag6HM2rvFn5epme3zrWTtPc7iWuUvE3bsDRShnjrujUjfbxuJFWCu2TUVzUhFfobEHJeZrwWW7Vv9WXbc3DdGC",
  "key8": "3AkbpR3NF4SV5NCxwX4yDH7AiYbv7SMUBM6Uga7wCJfdXAws2QDvuedsSZdf1x8VPrtQpRXFC8bfHXx6eJgRdD4W",
  "key9": "22RavJyKMXpnYyztzeYM6KkaKvvb3mxevs1zb9aEL8NHGAzVrPMWEMUR5qmP3HJNsYk5Rvrujovy1XECLbW65ddz",
  "key10": "3tRUTbLVhvKzWPWPN2TJMMSudPJwUSHx43xUSnNH5fLGLM95hFPDmASA4HcGsQDT2AzavwgEP2po7LBoya2WCPVM",
  "key11": "62DryWRzM5bhB8yAGvm2ecwGmvEh6o6PycAkkvvwuHAk2qvZ1tK4SQCGwoe4SqrGDcFy8MGJczEsU4gDwkR4vQNi",
  "key12": "2oQouq8JePBgd95hDs2ex3R3dbjWx9HKZQuHQu3ZGJqazwY8P1MEiu7sMEiZCvxmm92b79kKyFqfVUMBckBZysd8",
  "key13": "5xFicsS7kH9s3uzVx56avHTjmQMa3mZf6f56oRPNyypq5tbjWBUE55XFYS4XgKzooWm5Xa8mst38aqvBVycoXw9N",
  "key14": "4TXe4nggU1pDvuUZNqTBC5uyULERvhoiuTLzE5m8RJ83z9vr9nuuQSENDoD71eaEmcRPoZXeYZbrRdY6S1ntmDYQ",
  "key15": "5UjAaQ6kdKzyaogXwYkP6csLiHafxDNDCGTSeFiGq28bWHtRxEQaUA1pDY47XnPkQQ2XMDqRdZSwfRPejV1PyfoW",
  "key16": "4pANh2dHyrjBnAzLkg4KcLXBmpcQtb4wwRgMb58v6gXssbpjmQkdrKW4qHSHjfviFUMiQrSPUxujadB3uVFhkELz",
  "key17": "2jAzF6TRwo73sm5uXfJo1JkfeBBmBCJBh4ywfPs6KSRWbxvkMcGV2Q3KkivX4Wg2EaMNwGLoqTBGG2KKqA8SYSVg",
  "key18": "2eqMYE6vy7pkmJgP9n2eWsFHDNa6HWMY2p2JDjGn4oXb2BJwyDdw4PojfDqrZSvTALPEDjf8Qq98v7jwq2qMqew",
  "key19": "5Ya2dmgcrJ6fwinF6xBBGbYcTWJZq1hpySWWLoQtfCJmUd4mUqQVk7pzXcJzDyn9zRaYAjhuY5NAkUig7xqPCBqL",
  "key20": "5nEhX9zVHiaSZMLPabTw5uPpVRD8pkZLBnEBs8xupksNcQmvR9hUnSYvbQU1aPHtuddX4e8zDmULrhFUkKag3QCV",
  "key21": "nV21DYMwhKBSxJ4fuNYGzVH6swm8cVSbjy4UDWZ2D48Uin64dQohqUSSB8R5HXMHxq8VR3ffE9BsWH77dbvERvx",
  "key22": "4tc6wmKCVvU8eo5zBmohETreGj1SqvLSNA6UAnoMrjZRrLpFCbGfmowU1e1n8LmTq2AxNJQpD7FuK3xdhc2Kvewb",
  "key23": "5omCPTULFi8rz8zxePJJMsh7378cyHRNYxLCk5fBxsbJMcrjQn2BCaznix6uPp9kXpNHkej6DxUzGSs3phtGz7ru",
  "key24": "4TCUhuvErkGf1Ka16BNzmGoBQuvkW5NNjWD6toNeh47zgjU2kyGToKJx9SYQtWmnczVmzy1CSNQnoqCCLVTZ6mXL",
  "key25": "We244TNprgZi4qoVQ6SekJcBuK2p1hMa6SE5BxD8AGkAQ2rQKuXRM84DxCB7d2a8dtWw2NqpfQgXw3qDDE54yJ8",
  "key26": "31T4ckVxvQXJ8Zop2ti2pBUKPrcEbBPao9VoyVnzmBEnfWdGHUfL7bP5fyMp7UmTqqjanBmux6rsZpFqhZytP2xJ",
  "key27": "DiX8LGrMmSPpr4BPE8QZi8tG9GML4Jc5WGTaQLxcLHFt7mynYAeaC2bHxbLqA3F9zrRnjNaU733AAResKWLwh6Y",
  "key28": "MwgibhnQNeMWHgEkxkgUCT9ZdCwCpNMBaANvGSaqBzs3yXDzptatZJkRcHNez5QYo4ZtbXEk5EovmFuvEcYQ2sX",
  "key29": "3fXyAPyWPjSDg12nQxsH25bZHxPHNiziZvMryQ1HFXYP4paxwJv2PCUUFv7WPn8LpzQs8D81FL3EBHTGNsrkSnkA",
  "key30": "5CBo3HG5LJuzRA4ysBXGJxaMwRmLjwStHvvciAErVSpTuBYrxDESvAWgg65rQqBPgpNLveZHRZnG8657VFtLmEjN",
  "key31": "4ee4LSjUqaeADecco8PWP93myMc7kg1DrkknZ3haTTnZ92WL5ZGQtSNwwr8rVFcvLuR1M8pbgazQE46oa8W77z2u",
  "key32": "51AD1wNLhZG6dD3QffDUBnyeDnvitmSdXjB6z42fDxkJMeXGeKWWjcDQVnyTgJZQZM5dtFL58zu4SjSxJc1NHwbG",
  "key33": "2APRD5mQrPVP8sbLGXirfUNp9cLDkppa85Pxev1ZDeHnUCkRcbvMk7vVL2Fb9BMEqm2Zt5AhESnKqd74yGtY8Wh4",
  "key34": "4H4ZNhqsrWoLcgbP8GECEQrPKAnQ6u7Z2SmXvRWrYCusd1DXeUaSnbg6wL63r7p1pk9eDwMWnZiEziUZS6FBZG8C",
  "key35": "eRhk6yWomjxSYBccG636Yg23hrkNeqSNmPyRs1bkQ8SMjH9rnqAhvyT6s3XPMzJc8X2zSj1cmg5pApK7j3rRwjC",
  "key36": "4s1gB79rup3yC3cHifccVigz7ckxscyqcubnLZPwKTx8ooLNd2DoR7uc58ugd85TvxJvza8JUA6UovxFwgDMF3Po",
  "key37": "5d5JweCDH2ym6LweukPCAd9m1KjpeAUKbMFKktDN7YboYeBQZsLKsGEi55dd8sWUPGTxsKfWrPaJuWB5PJaGWD6y",
  "key38": "1PQWiCQiWPWj8S1QMn6qDWycDFhcp9G4AxQurqKBwNXPhxRUZYMQmsC3VnBuX1poXYVwvbUzBS2Vt8bvvNaijda",
  "key39": "5dMPQptsi1SSSVJaakUueDXJUyYT8r4fDqpSthZwfwfD9iZ9Br8vBDfuVvqimSmFsqgkFUU18YvBCZ7hBz2wZXzn",
  "key40": "2F2HiuhAfaqDvWDzo4q7iqTgry6seWBmBQqaQfC78pnw1hM1YixNkUwtQUTGz9ojUTVGABNJE9PEB81X7Jc1ha64",
  "key41": "4HmAzTHQZbL5EZmczNt7f2f7YuqLe8CUJmTAWocE3a2Rvr3KBqKU8EWXE1GAQ11F599si2X9NzTPNqhQpam3SS3f",
  "key42": "mrCH1Pd9LttEHizDw3LfSK2zeFMgadxhKxr1Ctd42fLoSWX4eoZ2DrvgGDn5XoPHCC2PWFXngQhCpWkbAzZ51ry",
  "key43": "5UMTHzcaZfyP9BQM5NCBEtikzSFpWk1Twyambs15mTN1yjbexTkVb5sMgsDMiKsALDA5YKwZ4UP3Y1xWGeDp8rhn",
  "key44": "3jb7yim2y6mTZvox61mgV1sWP9KgkZiqxXWLu3duzdCC8tFHHarsrmE2rzPyc9XSXcV5LkiWbhQAJWYBqeBG9AX1",
  "key45": "3NhCjsdUQ3xshGDSRoxJwWadrgaRmzbPe9qXNyBLmhc3wajcDHV7iu7uAdw9yi2CwJdi44gJ9zP12Qjg4gnTRXuG",
  "key46": "5gcRTxCMnZJoEXgt59WuJsVxn463xmvsczJibj13SEDFBxvxPtsFRpx8KGhzuUTGTMFaSs2fpf6ZPdEZNSVZTBfg"
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
