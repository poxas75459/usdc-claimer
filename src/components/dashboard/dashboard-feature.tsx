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
    "8d1a3jyMdQ1kCq35Wu4HnsEhSCCAQQjwhYp8Db7N9KUkC1Hvgf8VCk4C6mhXh2aKFKE8X6QSwe44Dp4x1caKw87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22inZMHkj3feS6eikC577WwJvu631PCwQCzuZBGYHQqqn1A4jNd81Nhr5e53X1nW9VQUGCLX4gsAArV7EJUcNeFB",
  "key1": "3QAPxHoDDL4iCUikUxerDk21zVW3Lpu4tKC7hKt5jRgtCBtjyKFp89hmKZMhNWxyHGmaUTKX53AhCMF4BTbjVtaW",
  "key2": "4ehyn6yLxH8rYsaVvwp1eHigRRykxZMezxv1nvuTTVjSEQ1vmB8Eyf2itmx4enQSH3LwNARRtAvkqpNebBGpCAou",
  "key3": "4r9iB4TuA4LwkaDCcEaEjcPtiyMUR8y6BULLXoHhkfi8B5fkyw91YgkGkbyuc7KYXBkJsFzMddNYAVyYZFbfcSmY",
  "key4": "2mXGJ9W6iwYM3CZHUGa5fhArBV7uJRmZFGtbQg98xwQhivJacJxWcFvEoTBN7sS7m4FifJ5Z5ri9i14gCr65dsXN",
  "key5": "2FyrBTjKiMrQDtbRxPKptqXXsVZkFMEbb48HSkXxszuXScrK2psKh2gVEgriPd1AD5ZLPAgJe5G2wSQo4jjNSCC5",
  "key6": "5yMoNNHu8uoudXiMhVsWJGk7WLyzLgQrYAdexrS3D4FAbBygPk7QZG9mGCmQ7VHsrCmfuW7qc4dXEwWENEegK2dw",
  "key7": "5WJoD5Yhy2s8bK1rztQk3WbrABpUXZGjzWvHyz12P287T1GY2w1SF3YeCRDmynvyDRPWdYGdub5qiR2NdcQbsDRf",
  "key8": "2YFEDd2DByioyr77YU7cBHaxnUKFA7vsH64osP7eQqg4NJF49ni9ktNfGa3JvAo32MesveBNFG65PSrqX1KNWQbe",
  "key9": "23cFxYdphbqAdkTghhPj2G1KnZG5DAWj5hDRcJduNY3bC7peNb44exHw9xWUr1YKa2YArPruGG3X3gS1qtoGKxjt",
  "key10": "4bQemWihghZXdJrMgrQLecxd9pWViikarKKkuhvikJSAbcZ445Pmb39yTb8ZunCJ8YACMJknCR78vG5t3ypsvQ8k",
  "key11": "41YJDxRHW8ePKRNrbYpmWNmZjeSqMRVuto4NpNiDt8mBovU3TQWX9zKUcRgEFDtMP9vaFcchCuTGMehM1H3j7nur",
  "key12": "4uxFEztczQFkboG7FTfm37y7hdRaj2Zvw7rWGenEz55mU8fetxhhi46L7m8ziY6PsWYgF8cuj8koySpTr3XjpB9L",
  "key13": "CjkXxAWbAopw3kNkJXHhg2SdWApWcujDAKonbnQ3sJMbzrEfpNP4znyEybthaiLME3QZrBb4svGR1dLLpjHWQJG",
  "key14": "5ghteMUipZQRiUM539ystMvxpzAfRJCLHv9oN2DPBUHRawRnuqU4CzjHZhWU4Rycm4HJEoBa7Py6Y1oZobxLG4e6",
  "key15": "5UHQmWY3CTYCHtizCyppjs5dLtBGVYusjedN4pBRemnKVLut4UhyNXHqrynqjqYnQUc2VSmY182sn5RpKAjFrSDd",
  "key16": "25pH8anojFW1GyzqZ5xnUXpCsUcd7QLvCZfLf58WAMajbeYmzmEwCnfBd5wGHiZCXVkMqTpUuXZYPpyxhSMfhw1j",
  "key17": "44tx7Y1QFqufSFDnajL8GrbtTj5BWbf82j2MuhCferWVgXJ9UbKMafbDNQwzXVkNX6yVbcfKGQWFJqNibpgyAKQy",
  "key18": "3FbrxLAVmeVXrWVuuYxNodnsrk4fmL5DKzi6bJULBAhicXjN6YbN16ZXFvFQEhDkA1u1p2LdNYdnNmCJxgCjABvh",
  "key19": "4JWTDgHznTP52351bAcMKaRH8eFHv7LQrq5JbTbZP9a5e4GoQbzWZMdsRBuKuSeHJ6guFRuszUmiGt8mcQxJAWNc",
  "key20": "3UYfGp6wSckU2DDFTv2MRhoNcF2g9s3TkNF95B9XkyBeeqviuNaT35epxkVxcbiNUgtL9A3tMxHdmoiRB5T6ikEY",
  "key21": "3fHDo5mPDWdjguYkePXLtyYyUK1UPu1GEj4UdHwDUXp5U1GD8me8pcfcUUMsXt8pUA6bjEq61ZRkcyk1mWNb5bz6",
  "key22": "4dotpK7iEVo4ts5uVZiGexhFq45MspAL86o75rQ4RV656vVvUGG67F9WfmvaA5nnPhHV7uaj5rwypR88fP7qaG9Y",
  "key23": "ZPQ334svPh2SUSx671wKJwWz5SFgdkwzP48Arj4Xoozo5J7fy5MFcpFhm3APW1xJfGwJdbW2WVX8dX6Sqgo7Sge",
  "key24": "2BzuBHWc4XaNZVaTDXEJf5w7Nber4UscjHNqPo98g9NA1YnmcSMksvBjfzt8DYQwNM3jCCgLuJaQSQKfdQ8AZ2vz",
  "key25": "haHn1SekXqtUjCQdwEPwLrX5JH1qvV2iFvTvU7HMgVeEQC25whjd8iPAS1Uo5rhJjGk2DttdQYpy7Pm1DVSVtDg",
  "key26": "4VmFnNFzjF23eAwxXysnxFbUeBC8XEY5cRSXMA9RU45n2J9X8gCCQDhrzYnq2v4FjiTJukkncNDHVdE44CtvSKoM",
  "key27": "3HCb4ufp8zpwVDpmy2UxAERAghQadKibG7toys5u44HHH3Jx464gs1QaFXSSZc8mTw9GpyAV8w8jbH4MH8h9dRSx",
  "key28": "67kHZ94QkHhZCce9FS5yaVcwkXEApuxkeJR3TuktBdF9ov75eVaryjD7GyzwFhgHKDrCkmvxMCVmN1Am5ZJhN6qh",
  "key29": "3QQJQuJDCiKq6z4rm8Xv4nACoGaQJP1fucSD84a17xdszYT3GDbZ8yHZ5BVSpAWZPjFHmNvtc7GfV9Bf3VEQcQNz",
  "key30": "3hVZxKHvsDmN3GGhMjgvqSEPozepF53bRQBTfHPyADRAskfmG6Yk3BRkhSkjZKQJxXNANLk4HbD8zZw4ycSsx252",
  "key31": "4QSXEsaahxDNc56erzXmJEmnMNEdq8pXwDvyyK4fWQuZAQxFAcLjoFE64zVJGW2MV83YAN2VfUb9hY7ySaPbwVHq",
  "key32": "5BtKtkHNkmph5awMTbQ8VK4gy9SVFwsR5V52t1AE1rmSqPTw8jHMV4E1zst294CpnsNZz5vh6Hkit1U7Mjwm2WKw",
  "key33": "4wPzRXsJ8hBPkWgiqchtUpURpZJXuFKB7gArrKMuZa2NSsqtKmUACZYXxCux6EkFGkUDfAR95DEkzyHHH5H68Kpw",
  "key34": "fARB1RVwt64RmEvYQvqqr8WjJF192eoifgDBXkDVVkbH9Rmug2kmVXbPyp4bFAW41tyTQKmpBMCLboDTXskrdRf",
  "key35": "RJSiG2FyDoz28GjGjcLYab1ZEsbWHC4fFV3SkWtMXKbbXFChZEU8DnyLShWD1yMUpNM1A7idzFw4oetSmDVhhSK",
  "key36": "4pbFjmkpUW7XnBCur1sEeZy9Txn838EovLVAj6eL5KGP5bXy28TAyXgzj8Bgi8QGdB9CgB6wnQz6dtkXWdbHf9s5",
  "key37": "55DvrGBRLEGPV5J3tfX4sBCmB7ys7UT2gyNRNPsWqt3Z8Lj2uinm6sxh8j6jSjcXV1wqXjVZfE6M92R9eoM5iChD",
  "key38": "4QKqVSSnFvX3qWGTFEoGM2XhuT9tWFfi6unXxP6uUucrwp6RHjKjqSG3pgCkBPpMV6oHTG2qzQXdhkdxb1bvcJDd",
  "key39": "53hyrLN43u3XaBJPY1VNQJVLJAw3YiXCyse1ZE7AdPMqcRJPSu8h67zuMkLrUuC55LQQghDVZwZU8xEP61WthXKb",
  "key40": "tPppvSch3KeAXWTAvJHrrcwyWa5ZrNgjsrYwJVycnGue8pgG4npc3s2JtA8BuTXkJQwFwW9mEmQqFFB4wEEVy1Z",
  "key41": "1ycNyC1MeU1Hi3mYvhtD27kFSm87caR7PVUjsSMpLP8bXN4uL4ymNJJumFBy3D6d66vfGJcdsodSzYNHqbF5XMZ",
  "key42": "4e1ETEuzwmJZWVnDjwviCjKMyHJ7MSV1wSPeLqTujZPPik4GGeSQWPU8L4qxQTpqb9Pm3iTwmKSW1bdZRDYrqDS8",
  "key43": "3NYBvoXP9pu3F8G3AEF5KMwB9SEtswjDWKq5nyKTMhAwv2Ksz5ehMq7cgH5GKGguMqrqyK4rBvPDoiuMXfJWjU9N",
  "key44": "gXmfH93efpwTgP6vJ7mo5rYwSRyWyf9D8YjruwHdjJXXzHK3Wqi9mPGzwVQCzmBpKrEhnBsBsHYRtMtnfqrfPGa",
  "key45": "2kt19hvrnrduA4Tptz7ws2hfbjyLVjydaTMdp6pJzWrZTfgS4Uxrd3v7geCvzLBN8rw3zbtY4yNi5UVrzR3JuTfs"
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
