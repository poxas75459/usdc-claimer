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
    "3JbWA757Nm66z57w6MF35YcWKEH5b953S5fGFyZfq9WdKaNQMarXJaHZ7zWJ5cxiEhFZibHwcEcrbPTgGmUigCwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPsZYkHVGJYk8vkvJ4cj49obZ9JUusdTDczzkChxQWLvoN1F4QFeCakFoKPps8w2kBqbsHCYmZvtiXdiuZTBuey",
  "key1": "5uqNUWHD3DB7BT91FEKASMrRJDrAeDM5GLZVyRd9npGa5LmEjkzShAqAyfSiDYBxXUd3uRNzi8aKzyKjjVpPQ22K",
  "key2": "vu5qcNTd4zTQyJHPMkyNniBP3uBj53BrH2QXYaDZyJpXcSBh7JV662PB21bpX7eQs1y98wNCgGdgD1rRvRFa3jW",
  "key3": "4LVQJ7FmWUM9Cpae2q7oZxBUcBf1WRSGhFySRdvs2Ujmbys4HjNcb3o1A6Z2rEUpKb9omZSncNcCyforqabqDgUz",
  "key4": "4TRprEavepquJ4BXLjTNiWr3oocd9JKEbezyeAhEJUpwP2ZfEXHX7DkB1gbn6NU6WYopwnACXTP4G4TcQTN5Nmd1",
  "key5": "RUAKqYMjMj6pSQBqhhCRkQEMyvdDKaYZuoWapXXoPkuSXmVXgurDjqFPVjsd7KtDYiCLBHki9o6whBQSJ4hwHRv",
  "key6": "5FDjA9tug2WGchsi1mB5ChvwVwcqwpxMkbJAfAunFe7KvuvM9gd6NpSqu1YFc66ie7ZbVWvLM8Wtvc1WzE1RAo7g",
  "key7": "NV2ocebE4uM6GwJHaxrJxk94yizX69CJd7sP8iG9iLTDhRHzituDGXd6cwZiAzWX9CVSkpyWn29oGLV6LDHu9iA",
  "key8": "5EZzgZiVt6dnPw7SNQcpVK12SD22rf1hsjCCX31rqUVRZ5kwRn1arHk8cdkpUH8u5L33k6RbRcjUhdGSyy9jy6oW",
  "key9": "e21D3pNxPh275uR98LE7LPfrvGPmoCjSKakJoCMD6XtP3XiN6FUnKLCPsW44txv8FS9MR4V8HdWXLprJC6bJGzZ",
  "key10": "3EgRWuWRJAZDp7e7b3Tb4uXVHWsRmTmr1G5cE4LHjGkRAnNaSKb9wpWP8YHrkEaQAhsTJxKSJ614zkDPKCbKihWT",
  "key11": "4vdx67zVXsRb5r2vJABv1ggsQVCm7fwmkT8TqWv34rpLdfvXWzQwizs92wrvtHXnt17pFq9zwWezD7VLVaMoqhYg",
  "key12": "2DpQaN6eUfPjmD55crz4HQUPoBcvNfsbhXcr8xThcRjDN6fTaqXodbuHPU2ENrMHAfiV9bMwQjfZ1zJgo4WnstFr",
  "key13": "mRaMHcmv6RtZ1bBcKFVhAizEkKQbTn6MwAxsWnjCrzr5bZ8FDhsC9UUeKyCdhhV1GDnK6UmpRgV5VrhsyWPUueC",
  "key14": "2Kj4Y3R9yqFtq5t1mjAdT4CnszFrCFyagY4icJwonCc2m6qvQ1Jkq6QN3sHu6phPAcetYH1E3zJSftYEReRbpBxa",
  "key15": "FmNQbJRCb8x7zh7htwyn1ZwQGxYThecnhHZvTMNRg6XJ8PF8hz2G6iHnjdy2CMyZ7Z7DvEgGN4zGXzEGEGnp1EW",
  "key16": "3hsxe4sEEKRUngk1rTY91w7okVJQUGaWcfi87sQqyhyg8ghmuYPCychLU6sSoLhCEDHXy3iwSKfpR9LnYKDoEyVu",
  "key17": "5uWKSmfR7epYrFrKx8FPVjiS24LeUvtXmbzzpNfxLiia56aJzX6sUJEGWVSE8zypfy7ieEqaaqDuB6CjxgV9mTMG",
  "key18": "vK5PFBb54XRseeFWw9FkWaGWACQyD7p9w2jVmUWoa7qyC7JM7sfHMWXT5f73vfWqGmhU5hYSvZF6kk9LsH5uxDB",
  "key19": "4iWwZgRwq6s1PjfYgiXjf8qrtdq1Tms5n1hDqG11JhwsdsAVguUgzWzyerhCn1Ej6QJcSV2ySocBYTVT7F2Uma5N",
  "key20": "5AquvEseBfoQj1r6j96eApu1zh8FpUDfiNDGGmKV2UyWuXXx9mZ5oKV1EcyNgP42zAy1VwZhGWzLVyFTgnHCySc1",
  "key21": "5yihG7VHqnZew8pCqhZb1ryDy66kKrTVtqV9T96BXrfMapuBwsqJDfn3fezDWGmBJNx3LLY44Ch9UKEXF6XWGQEY",
  "key22": "3FUjiE5rbusLDGGA9JSCBnBRzRaLVQvKvxPYw7drbViNKoS9dSuDrUJJANPWVwfJGrkejD5xRaDeU3pLV4VRQJnJ",
  "key23": "DtYBrBYkuTJVMEfXUV2X7tGuFKaPbJMGCsBneawyg1tP7eCErQ6EUeWopCGg6o29VMb1n5DvDfWJNgjtGLhAiFm",
  "key24": "52i1ZFuVzfuQRWSYnhxoRQSLFwGg3UxUPrQbfPqoze5opsbVcc4RXJ2TAiuSiYEops22nEXNaCPvG4MVfMVmYHHG",
  "key25": "2k5oMcx1CRLu5uUnY2c1iECjToQNM2aL11gyqcDAaTZHiMj1zRvbiuF4nCvELcUPsp1JjoHT7vSRUbB3QWm8kZ61",
  "key26": "5ev9SAbts2GFvaXsdmLp3upc2Dj4vm7QznQPVRY1D1ToDEuruEqvnMyTVn5PLNPvL5Jujh8vH7uSHcyBqoQn2nBP",
  "key27": "5zkRe5im6PvZEDSPV9oVgxyJPtxA9r4KVqH3EwUA6U8XcZSxSKamieowSunDDfcoNbLRzCSBrJ8r1xxdcKxS6ZpN",
  "key28": "2VdHygYL4RV8kuEyMW7sdGsfU8ZEa5pytdBi7LtVvZvPGhgTvCKrZNo28tLCNC7LoXKoZtUjYxgRjBGfNLnHMJ97",
  "key29": "4U4Q1dXg4qMR2tAzy3GQcrtM9XhPoDmwVfwJ5GJvVAJC2jJ24btJL3CZiV42rYoq94avrsLeUeeb9v9a4uHdBZ1t",
  "key30": "2uuBkvp8pF9uiikMavoVbdg7mUxKHwgYYTZA2dvis2jAAjezWUThLDcQJnbRqmuq3ELPPSWczY2BE6GZLGdzaw8g",
  "key31": "3XmbWvAwdTpYpK9W7gBYqbPntQ2MqKYhkN48j1cDFMdRH3vdsvz8ng6S9JMGLUynSnNJVYK7DqtDr9WVxhK3rcSe",
  "key32": "3X14J29AihnK8GtLje4icnGwZ8bGfwPEU4dn5aifmKFonC4oHfWVEhyncqzNAMgi3XUFFsdyySR5Qj3vKTjs6Hve",
  "key33": "pKuFsQSnVbKvDnRUsaE26h6m642rHwdJCEFRu6JvFdb8ufPesznftktVW7zsXnwyDuCJUKeYTQDJNV4vkSzWmTM",
  "key34": "3rysEDXKBtwpfBM1jZRm8AVRL1q8AisNYAiiKHDFa3nQH9P3P34wWaTa5KEUyZxNaddyGgzsX1n5Eq1stTq6zcqY",
  "key35": "4MHvWq5CB8PE3XTbKTjnExHWw8VztbYHY4LnVDs1hs5zJwoLsLsQuKXVGQqNP3WaqAoRjQDPDb3aanjUMGCHFkW8",
  "key36": "5UwhKmdJZJteRL1FmM7Aa5duKW1FLEcNAXEuXNeF5cuf2dbyXzuqjUa83ZZYoax1Lmf86ZwvkgB543F8RiwQDKu4"
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
