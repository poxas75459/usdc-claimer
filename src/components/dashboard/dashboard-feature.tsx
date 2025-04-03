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
    "2ZzG2cfJ3gH9fN7AaTzi4Kg2sdUHNi6draoU1FqFqrhuTCytARDC8op8RTQtNr9i2q72fK4utw5r3AmC4NACpXcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f56cbR6sfLjN5YEV9qbBthPoiEabWecmpe4ycvcnCZRKvTBZgBdyh593Tacf2jsSSyfd8JxjAQZyseaDTuU5shf",
  "key1": "2xvLP3RSvf7FFhUeZEvwKmwD2LkS2wqEYXvgKqqb4oSBAu83frMP1Gxqdn3axfkEAgXLWmLGLJTeVoYCAQLfxZgu",
  "key2": "3fS7Ncq4S7cPBu5wPHc8KfyyNcCRjvZ9J8ZkzmvNiAWBVRvQmnXNdqZVYt69v578o3Qvj9kxVfaARVYn5gAvym8g",
  "key3": "5ebCkFKgzn5Ze9F4ia535Rea2NX4Rskwqx13qapkWDW7FmmREptiWfCoshbbHPaeRAxoDm73eFUsAY54VQB6NzHY",
  "key4": "2BeNDtFLQynNWr9qre8V1bCevYe4pChnTyT4c4NM3XJFEVBEo2hstZVAKS9EWVfTvroyB7V6CoSHJJ1ucGe1ur9F",
  "key5": "2ebbaVnFGvNzbtwnZ252o4WnKzbe81pZa1896AAkP9WqFqz7S9Lq8xYTo2kebYn9U6iGrqVBtRUcb1xDHtQe1TuR",
  "key6": "Lj5UVSGJBuEycD9MmvY3fE9GrecURsWJpvY4vL42jFKHBnCBcz7acVra7YdmvEV36ixEr5VDUdeqiuNV2u2M4KC",
  "key7": "2WGAqCWToeEieqSqytck2uzCnFq9cku3rLvWMGFcaUr3JcDunbpiyjyq8Tqwh4ox7msEiMtyej7zCD2e2ZGuRqVa",
  "key8": "2BqT2THhL5MdZ4DEspRVkPbbKMYHzZQfU8Cwppfys2SiGSB79DnheDzNFVBYFJ4gSHbrf4ajCKjnDWT3HNowqVnk",
  "key9": "2j5ay19JpqMtCx2T1rrAGzD8hYbWwR35oPyn4wx2zsDtECV96hfa2q26AVb9TwDoV8Q7Vgp3EhT8npTP4H5Atxu8",
  "key10": "2q7uDf31SBoNVUHf88b6X3XqPtotsomEd1V3HodEcAQ5QdY6auy68SBHG3pweBSfzWL9LJAYphwosunHVruGVEvC",
  "key11": "3eFTSrgoaQMXKZWx8ivswv9a5G4CLJrSpZJdXALYGEe6DjtZD2gFXcCqbLhBmir6XbZ1W83S7QjjUreH4M1Rm5nk",
  "key12": "2u3S5LSriX852RFQwagy8akTi4pWn86aDo8RnP8o5SapJPuwphJYk7knXNuPEyQZ2TJK82KYvKa3qvoeDXAfDdh8",
  "key13": "5vgTYUyLzQFZH9LjywJQbPiMTftjv4NCW2mKDbT3tpT5WBbFjmJY9xgmKwG6PN1RtNivgQ45u7t1VqbwKf9TtKCt",
  "key14": "62MpitPibCWg5gt75ZjJLjXJuQNSFgvHSajGXStGS6yv6LHMBxoUs6XLcwtDDaAQ7zmQvMcmeUNtSKQoEG7iwGFd",
  "key15": "3ReNqyD2dr3ZasF6G2AZmnRCaUEbbnWaNbWxxKBR5TZ93QEgcLqa9EA7PZYp1ihgC7cU4yvX1x1EZ5iw5eGYE347",
  "key16": "4wdchmMNZNeq4ob3GVbRKfQkYKVokwg7scxSQDAnf6aAwNxoeg8FjXZSGgmAUHGVMDMGfkSVEvDLzqAT1TPDM2JD",
  "key17": "4GEigUShpZf8tSJXEFQp2k2E4zz6BTAxPz8VrLHxG7tJUG156ygUcnz6EhawKDMqpmsZyxVyLhPJ6CZJgFv1q2Xu",
  "key18": "4bG4S9Q3GS2MEe1yHZKxNwJej7S8DmNcZPLtcEkeA834reiKvHQXwXdqwqH2NYQ1kowBQHCRwj4uiUw8ttd9P98W",
  "key19": "5PbriVLtqBpRATLyFBtd773iyUG9Eikb3mMtXScdrYLfoo74gLKzikhPE7oPQYjkFpJBThEdZdtd9aoJD8to4vfz",
  "key20": "48isAvNZMfzrF8ZYN6UGrWB7obLAdJKQ34VoZ1AWURAjH4JgSUKDZx7W5pnArLRjNZUYduhc4HKzuqtNFbv7oEr4",
  "key21": "4p6Zm4NTptqKwrzeD2Ajki3BFrzL4CrNTpP9mNURTDPcPtHeLVXKfiuUZUEjMwDDrgSA6njUoG7HNomZsPZCkLHW",
  "key22": "bLnHWdrazH3vM7nA4uogHxD3jaRLgKs71MbLdA564VRuXBpdoCwcY8ckdTy8GF8abvnBHCtvPvFUFiqAg6ASxXr",
  "key23": "hLyKKMLJkaPDkgyCoP3ngDya4D5ZVd9Yg1DWwkk5mxEtVAsqMwFbJpi9ktYtxfNTx3wvhEcobvynKzFcVqw6wWN",
  "key24": "QAnXpLgRtErPU92NXXXfjkGrWaphJz89G1vVko3SaXjn6pjDpeAL5jZUzM2CzN5aiFuuincdhSFufrayrAgEBcX",
  "key25": "5Uh9ozysfaEXnq1YnFfHYsrg3M9GVuAJSVVnXgnEZ7Vavj1yqPKCAfBXsTzPVihhQz5H56o5WkdQbdtYyEhgxzdM",
  "key26": "21dkEb94sTtBpHyYfyyve3kNwVtchqxm2NEsucmYy4HrJ7qFxX3s5BDBj41XfrcVJJL2sSsnyYcgQVNFyzGKwtHP",
  "key27": "4JzAAGSBQu5n1DbaL3TGKmhRE7RZqXhHEyG7sBArHccK7HK5TNrFPiWkgRopRdn8WgEpeyiFW1fdemAwRiCEpEUu",
  "key28": "44qyQYGh9WtVPk9jdS15VNwYKH3GFVNweGaLWNNDNj67MZM2CsW9n2oSQuvxfMxk2bHyfa15QzhQZAxdMhavnqiS",
  "key29": "qjYTzJLwQKzNbG8KQqWmsgjy3Y5DxDFaZvV2NTR1wji8PxjbyYE136ivvARd1oFgkxziJUypy2Nhci49Zqt5GWF",
  "key30": "X6X49neXk1knVdQjBoQ9zfeW5hiaQkzU6vcCdswy4x6AHVzTiYAWGxUXp2T9gxiw25vAgcRV5DJywnNWkvLAdkw",
  "key31": "5jxQnCtEEhibjcbog84uumGFfXDZvy7NH4qiBPcGDiVqg58QZLKZFRJMUxQDN2hcvg7vN7LgQqZnjyqfByCsow7z",
  "key32": "5QPDvd9NLPNUuoZqv14AgcREz3k2xzTCAnfAT99wU9Ym14ijofcZfY9eSUCnTyvx4iVfkHu9FW5pp3uPAesKXwVh",
  "key33": "4zbjGdq49Dq94Lr2cviYKDvC2sTn7etBLHZZ2Yw5jAQsrvZrHd7gkb5AVaRu1MYYXxbi7i4WYJ8RAhx1AZRZKP81",
  "key34": "5uG67Z745YTocRZQE9Rkad24AoCsvYwWLnNUb1GigdUTjFF5oG1Caqme6eL6x23FdcGFf8cngDaTpt7GhgWdgM4G",
  "key35": "34RpEGuBbsyrXhu6qYK6gwNTCiJiL5kcrJSmFScq6zdzRi9m2JVBaJfuUZwMVJ6S8XA1SRm5tFvbsjX4coV6FmT3",
  "key36": "2mCJfwt7sXZP77Fw8esjg71iG1JtzLoGTurnn3hY4nuExeaVzDKxtCBvcH55TKxhsx9VXNZf2PqfLQWsZzSZcjUx",
  "key37": "3CFhEF3ShvFHAn7ZKZbzAUj9wbJNm9jEQMNTakxTANAeX3ua5QR2qobQK9GtNdoSbVhaM1hkFB143p4a2kuxkZc3",
  "key38": "4ANoB19ygDpJE49RUfgRTtMXtwARZfkJnLCLgUrQdZVgtRTJhjYMTvW3T4VjuMD559eSf4LvXU5ryxHAucCZJy5a",
  "key39": "4iWLzmaV31HaKXvaYssBw4F37LouYK8bxR425g98FtQ4WPVEs5i2MTtqh7F1WHR8VMbdzSZm83VmZaktFvKKGChm",
  "key40": "3nampjnC6SkYMaTT2xMf3gQ7Cg1br1LqKovkycUNPcT6sVgwMFgQvmofSScJ3yNhjhx6UPxULUcZV1K8tD4D1RAT",
  "key41": "2MoL9Jb7T5hJikNTvhh9oPyTytwyzyd4GNDx4m86USDZ9QktBgmtqEW95UxhQgNxv4TCUTHg9UTJYg7UxC39NaZc",
  "key42": "dYFERz59uWgF4pM2hwt6jBekbdMNEHWrmBr5qQHXoJvHBZHpDyCJPYNAknVas7dummnnXFrqq7DyqfQTRjAxT7Q",
  "key43": "5t5d8c881W7PQipB6ck7kUZimBDByCQSBZzdtwriU38vDGsMepRnpTfUaRAKp6PXjZif4zqtKnXheCMXVwwNLLXB",
  "key44": "5Z4gXurGezNbAPxBcJE31zej8r2JpukfzjXDceRsKEFeSDhQbx9Qjcf7GzL6DgPLPfJiG2TPadaSBxyWfqnoH3cc"
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
