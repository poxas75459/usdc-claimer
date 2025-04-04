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
    "5c2ttBhPgcc4nQhBGBizaTHDsiPWmS6jyKYQCC6i1fZMt4ttF6jSqhs5ConCgXZ9pFbg1fGQWJ9Jo7eZRFPHCY1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twWEoP58wgn6w2YXVNedutDqV8sGT41Pj1PAYhd1JaFYfTLNyyBGZjuqp3u6rWz6wr5K8eTNuVJYL4wn2ZRxmJt",
  "key1": "5prmLget2hKwVBCWrdxjz9w3v5YBAyTraBtWbBKbnwy253ysqKVCawgFTYHS8j4PezSXNqxsdPSJhD8ZHnr8NE35",
  "key2": "CSbNg76d34Fvg1FbQCq5WGzmSFpoo9kecsdD7WcqvzdgJZVFjLXz9AnCdqBq5Bcee8BQmZZjuSjaewoNmn2Kstd",
  "key3": "YWkN2Dh8nAQawGa3EQXCvL1SbL4HHprfSQGfcwDxmKeNH9NzZ9sLjaT6Y9Hs5YLJLw8J6kzejase8wiTgnejYup",
  "key4": "22wRAG6Lxwfst4GV616tcecYTePpqqHXuJAHKZzqzR1q88kjDxTdjnsobkrswwQXKhHEBRFTmrmApM8FXUceCb6M",
  "key5": "4bY6EKq2W2prKS2adJogcqr8vHKBXo9u3ZfkSZ9ynpTzpjpnSYpKJ1LYpUHmSYBiG8Tb8e5bVhe9b7T9fGHWoePb",
  "key6": "4kTKXLYCrWEnD2ZuJAN4GM288ynMjKNRsF8QAouH1H3gpxmUg3mkAUe9YwTTGnxXxstGEfcV5CJHKn2aeKcECkje",
  "key7": "2DJ9NV93MdvHiUNBBh4Rsgve2aZTtMWNpq4zZCekxdswYbhuN4nCwtGjVL3A5rUFqNfEMCz78jt3WdxHBmP5jjpc",
  "key8": "4TXVsQBHqiB4RyKAy6JzYtYVfXWQ88gNH2fw6sBscjmZsfEa3a53nAtY2SUiCDMfghaf3K3V8RJMu4ABY7sta9cf",
  "key9": "TuFvzvncuo9FYMoR8L3iAgSDZGuAPjCtEoaQrRxJmwZcAucwCrEFpL1asrEcdhLpKkWbnR7zCCbmNqVHLDvv1uY",
  "key10": "4w6LcoYjYDKM8QxrapcZuHsGd1xbb7AerCkoCovLkg4miht59DXNCLH9wGb3qvWi8TLVMUb9Vxot1Sci6rdHMJJa",
  "key11": "2qeZ2vwdNLdbDZ7QvQ7P9YZ69jUH8CcfWHXJ2YPr2Mm5zqSm7KYa6UJJE9mKn4c2NJoKb9fHcvzgHGR1nU7pTbQJ",
  "key12": "nhvMYL21x5iixmXUApa432QwvAN71WwYWCfRzpkF3zoghfkk4kjqQfWbWZcsD7wAsbcQsD7zsxgq29vhAkyrkDF",
  "key13": "4AJ5KBzX9TzCkxxaxCxYXrS3DwKCdzjZri2nW1GJk3V5U7BuQnEpANVgYuNytPJu3s1ABbtPR7PV9Wita7eoYLa7",
  "key14": "2AmpzDUNDPCWLoDs7nv6w1kXWB8B57LPC3QtBsH37QuBJtPBCnKBi3eR49fHj1oRQFrYN5ncRWZCHayESdwT2h6e",
  "key15": "22VukDrWtbRPjFSZz38zcZCKxFVdpjFCs3vvBXGEV6DWtqrDSU6bHypLgKa3P9ruQufwKjbmuysHYuRnvC4ZaPeq",
  "key16": "5twvc23LWHYMmcsnmWUJKFG7JWpAnT3TBY8934jLFacymp6Sz79h159cCYdhnKs2Eu4FHDJ3BUGei6FmtFZ2BaVN",
  "key17": "2N5cwgc61re7eHnaVZsEEwNkLDzDY8X4WRUJCTsMqxT9sC2ZiqvQdbUw6Z4uVVtziZgSWAYmtzbU2xAr2Pf7yrWo",
  "key18": "2P8LLs15oWJhbYJQocNStXZQquYoTAsyEQZZSzpGwGk7WLh89RS8CF2AHv3rNcEqPpaL4HWK3pwURttqnf5JZoYA",
  "key19": "4s7dBR3d6b4MwdPZ1bE9RUJ1fZGhr9gR41tZHt27PNbEu16z9tzxJjUntWoF2ujBNoS21PDXymRu2wdNQwP7hqNS",
  "key20": "3cjm2J38RR9C3xq85m8CUrw4G1CQQFE3CXesGHJxEEeDj8io4m6acJgZsxcitqgKq6eoiY2a9Tt8g3tSgTAUhxBA",
  "key21": "2KEvFq3bvZ5MsgAdtiyq2YvDRFr35x7xLT6qnyTfkvYahjtqpkmJmYQZU3rwDp74UD9RQhcLYjpAsxXJqBkmHoiB",
  "key22": "2xpnCxXWDXayAqhs82DVSzWiTnkAXpgZekwMwNZbTrZ5mDcvyKNvpMXYKPGybfB74eSLD2j9Qmd5nsXwpdfkAEPB",
  "key23": "3cn42g32BUnGbSRR4drmcpuQ4ub9q8Zt2czC7CU4jXjVipS9c2JgHKosCwNfdvYVkwDPtYR4NamCAJwwoXCFwgxV",
  "key24": "4KSpmtNJzUs1ECrMNYEAmxzhh81sXHwXELjkmxiQ7yr4iDD75FN4v8aVHCuGUgVAM5L9T6wCMUR2nrx7JqFPcvD2",
  "key25": "2asBPZGTtdP7RsZWgp6QmNb2aCU4c3HiwHivqUCf4QF48iMEKpXrdRMAN6dg6SXosqPAqs6aGwK8fS2SniQ5fNs6",
  "key26": "RoDAWKXveaXXoLG1L7jpHoGWH1PHKeAJyPddAgNbJGtEWhWtuKHQTVFtQ5vxU1yKVQTYnqc81pMFimgFcA5aidR",
  "key27": "3TdMhDeZS1c8qeaKtP6BE68dwP1Fh6EuoTNzoq4NVRUNPqQKjNSPvZnRUP4Apv9hegmyHZEPoJWVia1VsnhB7vya",
  "key28": "4AE144vyqnyh1cgb8wKrxZk1nf1FJKAcu2x58GEMf8UTpMiBz4PQUwAXzjxjZgrnUa3NnNkX9hCqKvW2mGrq2MqN",
  "key29": "4nEvipZXtdSZEDrwxCcBrdFptgfCAuJrb2Yv1YrWfnEn1Wq24SNX7TKBuaBQVBiQa3wyd5nTtmSTsEtnsqzAuAvh",
  "key30": "46GrywnMj3kYA8cBhdbcJFScvWDpYe1vzvcLLfAaBgLptu8J7CPpNbQm8Q9fmWyxfPux122ZVHoGrSS6Uba2xHUT",
  "key31": "3W1jU3HAn1S6wSU4JHS9T6bYw7gcx4ib64Gz3CHwNTB9V7HrUw1UxbS1eJ82vLYGFA1p56tLNiVxiejvoRBTgngW",
  "key32": "2dEcGUXQMraTT864MRffc21UYjNvjUZGU1ke65CyCHiccwVoi5tkxBDh1268votNipsD8bQjjMSHqjAMbxuLnS1M",
  "key33": "5KE9jKhBDJjzbijMqVghyNe3TFZ4UoqUCgAuzwfzy2VcZaDcb8aBX7KJcS4s4Qy2L8b5PPRW8YNNkKMs98jQgfpJ",
  "key34": "5q4cmsBgFB4MxjXxUvmdnMxQgB5iAqqRwGBhrSH6p5F839nv45cqPXHSoohCiF5TQekjPTGL5R1MpS6yKkhA9U3V",
  "key35": "Ro68fhxo8kFJZVXk4vpYEpNZN4TF24wby1y95RhHNfbkGJjJZ9R8Ah7L1tTPnSNt1AMmjmbsogxbX3w5QDXx8vX",
  "key36": "4dQHr1tDBDxkyrg9U7wJTKVWNUFEYbdAuz2kBoJvd9Lv9KtQoAk2ZyAFcWoMbXEy6MWSti63CVrKrXNiSuF1ewdg",
  "key37": "4qBkR4soQKc23ShGCriyua4qMWq7JGhrusNmcZbCi6k2LPhCoRNz1iMueKaLENRvvTUrxF7F6gqg5JAZ4LkXZHex",
  "key38": "2gvKuuorZwVrvZz4QXeNfLzybpP2RVUvvGfYXJUkSVrP4Z21nwcLQP9z4gxV4umT7UZSbDyZLRJa4DQiVHvLDUCm",
  "key39": "3mVRP8tRxsaV82jArq4mEnDHmZjJqSasAGXe4VW4HvQgvV8tdzbq9ww9CQr1Z34UAP43wRGo2zL27SBa2gCJZN6J",
  "key40": "TLxceWW4X5RtFpzk937ssCUmmPBMFSXpCkEuFGF6m4c3wWNKqRxtkJxF8v6TL9H1XFmRsK92LYMm3pm97wrRP4m",
  "key41": "4hpAC76xV74o7bEL2eh9Fp26KyMGRwxxxJH2PrhSmAUxkvm5AV5USYuXo3x7QgRHADhwin5PhYkTfAjthPvAm1L5",
  "key42": "YHbJAUhpdJgx2puE7M2aPmFaATQCNcjQD4PaR9Leousocmp5JESoZZ8sJYDaoJKNZSSy5vLSFJ1duLXRTCPPCAN",
  "key43": "3CW16c7PmQX9CSKrVU7RKnZEwt9q9u6V1h9WGrKV4NugtPdfMyYmmcRBVXZPQX8LXMNrcptJdstqrWGZrzfB2BCD",
  "key44": "4WJ4Shahn5L3KTyw6Ry1YFvqj5wnFWkMaQUxhNFaAVGY9xgxfEfyfFh2Qr8wXxhk9HbUrH1i3ZtRiP8Nr3Q7VNwJ",
  "key45": "CmqVC3K3PHnp2DqomzxEk1fkU8BCWWuYtA7zxDQ9nnKij6q2TKD4t63tLtKqMyK5S7mtL7gSgzaPzXLGLLDa9Gm",
  "key46": "3w7ccBxWjyBy1xL1kAhc3J2nJSLPrk4YqPCvKkV914LHNdKwYdwwY257ioQkaHEwLCGCZ1Bu4vMyCdJKpE4KE3AH",
  "key47": "5rv6tbm3m34UhsENSctvZyRLLQm8REGGjTqpMXt3uNEjQm7xUuz8A8zHGCat8poM3oqReJKPtTgRr64jgDKbSe8J"
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
