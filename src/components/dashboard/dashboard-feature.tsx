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
    "54xpffeLbm4N44X2SjHRQwLds1xy5EBJ2Koz7cYrAVmaLxd6fwykL7rf7XR2xLKXireWBNrDoPkSCQnz4Dcq4ksu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61irW4vLYrV7ZjzKGYzf2xoRTwUPcm9aBXU4aZCKG9CRFqiTpKUuK2sUdYdMuMP8WQY8GnpF7fgYZDFbAkGJCXEQ",
  "key1": "52WdvHFVLNU9BzF7xYmm6tzCGn9FBwvXBN9gvcBUzZcqUcyhKJ6xFNgUZ7nTpvueBFj2bnkzu4iJbF8wk2daxguQ",
  "key2": "2J2hVHf3VqjAy3YkX5tTxyuU3B76soUSSgaPTEDXuP7ePKAZ8N17bDGnPWdhezquJkFpzJb73EsUpRuuoYC1M6CW",
  "key3": "2rdSb4dsVhmG8yCvmgnZSmjyFj76n2r36AqzQyM3kZTAnE7HVKg5bHstd5cShzmX2hFvU9XTW9YMzHfY14H2uwLm",
  "key4": "3GMbfiJb24sKatxKwh41BuPxTVNv645S3xcEfTMEACs1bAr51s7fZuDo3CeZ6Vv2GBAuNCACBzWHGNM3S7w1kfb9",
  "key5": "5Q11AvUEc8wW763EeUkfQ26JxNG3h8Qw1xCrV9QnRNcwnfgBjc3aXVwENMLieYRvGxqwjKk6RaXY2LT1ubRX2JuJ",
  "key6": "4D6E8UwdHT2AoWW1u7muBbPKXEZqPKkvHdKCSmfnp3BCVPD3bQ5tKFTvYxjtcpfuUJuHAmuMwNLwuyUX7aVHz4Ch",
  "key7": "2z756ygJ3GqyCSomCAFNoFzhcCobeEAYn9aRZMPWFobxEQYMfTmXbZqyByGPP6URQ1EFiax9wAVoeEykwrRXTXyy",
  "key8": "74BV8xFEzp3F2756LEcJQcbKUCnq93qLsh6MMQjkAbwnpQWBpqFcw9F6dUL1oYkaMydneYevKY8jGXakRfK2SqD",
  "key9": "4m9fJeYGg56EdPq6L7ffrcS1trQZ6Pazxy7EFtV3bVHkQWS2T8Ve47KDmycBeneEn6BFNntrc9RGUBkQKpwHxuqa",
  "key10": "4EPftf5V9XxLknbPsfHPfzf46SgAqTskWdYqTcYWtkCxEcsrvGRuBPEJ5cWFYiV9Yr6r8n2wpUqYGsptpeYZjiPz",
  "key11": "4vCNdxygV2MkpLsLifm5x2HvSusKB3g1jq484RJSjMQ9z6QDPkW7jsV3FtKphzzJiz5n8VbtxYbKttafduKUmJss",
  "key12": "33CnqMHpWv8Hai2Eq76KDYceGRa5qGf1r5mPPA7v6L15yfjzJjLtEQrJAJfzJ7AvYqYCySjbFsffdWUDZSFvSt4N",
  "key13": "QSj1hapsu7kpLfT6FwhYzn4xDHfzywM4cAzraAK4GwTmjhPAqKGa38rp1asDKpBJH3gYUJMFWbVFja136raYj2h",
  "key14": "Ep4SGLn1YF66DxbtSsA6VbCYkgzfX1z1emj7iUJwBUiKR7Me77iKTKrqEfoGCepRDNJiC5cVT3ZxbeVdGdSkaVG",
  "key15": "634WBwMoEtEM98cf6P74ozwh3ibeJMXx7nRNmX9Stk6tGDJLcn4ik32cmmDK3jkWgfcaAaJurXnTbpfdteiqDs8S",
  "key16": "25R17GUu2hq9NvQ6Y8mK2EzWnraUT92b74FB7ueR1a4kuXqiv1oKrmtRDKQ1zBrhnjsk39ydPZpfTJnWuko4KWgP",
  "key17": "29msU3dAdd3RCVGTRDxAoMr1QAZCNfdEBeCkyocEfHCL7Pv1MweuqBcgddNBdWfqWU4BKJqByKK8CKWQWbMAhSCz",
  "key18": "57gfB3UWLNrLUmY9aw5q2jhUTDxT6BqbnBoGV6iHHSUh3or84F9Agjok1NeNh5u7UCGbjDuqp77CvGMFgr1c8q4C",
  "key19": "3bB35ckNvFzwE2oJCB5VEeSwmZgqkRtHsjVM41eWt4vyt9fjmBC5m9Rhdq4F9NuYbJLBk9wjgoq9Qupg8xHsNyAe",
  "key20": "3as6FSE6w996FtJXKgkHezabwM34eyJrFWFEZhWxF9DKsWrsQNS4SojSPWzmui7244AWrmUoPHdRdhSsKwdygNXu",
  "key21": "5GyXkZjvHXCxdvHV6ixG1PgVapSze54t5iuLshtVEXNp9Bs54f9tFm55Va1yVJuGwHctPfqR5tvpw6b4eFkzyc77",
  "key22": "2AMms5ykY2hpJNmtudaUtSRDu7xdKvpUUymEVfAB9pP4NWHTGWBWkNGTDj5N2z44gaNk1cwvchLQBToJgNsAwa6F",
  "key23": "4as4QLQjdedG28ey4yMC3ZsWaoZfN3ct1pGXGtSA9Vcw3NKRwwqutY7468dSr6BDdTYh5C7G2z6XJF4t5ekqiQ4e",
  "key24": "5HKsdxUu15htfhVEXf1o9baP4ekY5G1eiEjBYnwTb4uLUXtff5FMAxjGaDoVSeBkPit1XaxjbJB1mj8mUANhQzHS",
  "key25": "5tyNc22kHGqBpbs7AbBiXNzKqJ6LJcC1PCbbSHoBpSsGsvb2YZEhrW6hjVtEqGXxQ5ksdoCgnqBopTFGXWSrAREd",
  "key26": "2gtEu5bkbD3fbVszM7jTieMzwUkagbbonwY7qBMVj8QPTxVDZegoea9BZxoGVHvuzztiexpNMXuq8YhyMpzynrbF",
  "key27": "3R1bzSX1MtUCjcHm7psMDETtmEoy4Sm6hV2gsjGEPaSU6VkjJo2hTMQgjFETTTVEzoe7Au6az4WedDMUUpgpMrxq",
  "key28": "2WvS2doPm78uKwE6EAcKCrbDSUgahZ5nNbcEtUYsiwitAzkBNeBo4qJiypxSzozqqSie1oX57aspJ1ZKQe7MFvzj",
  "key29": "4vt9r27J2hPFBNf4Fk9dZmNKG7u3cT5Wa73yjnvg3A76nk6exR6oWT2M6k7T2LvA3jLuhQy1runzQPGQHUAzqZAJ",
  "key30": "4SPPpfbjCAq5vgugubi3bUNQxmaom9SVnVY6S2iZFCHsBLn9mgUoHFGsKJP5xjAxbRMZ8EnbykDs833S5zjp4jGb",
  "key31": "5vNc4QWu8WMuYThkDevDG5n4ybbE8Wz1fsxAN1KT795eLG1Lc6LgB6sHfuoMU79AUpiKs6A8NDiuvdpP2jS2mJDn",
  "key32": "5VYvxdY4r1X6yRkFuFaUoc34ucYushgKZtTTtETv1jwga9fRbWdha2vDjHgCad7UD4s9GN6n95gRaiYNbdhvm2sB",
  "key33": "2Tw3M8uu8bE47oUPTMJKbiztfoacuggwZ7UuNMEQEMfg22rBAqJtqTo4APsgTbqBL4HFUJytkQ56cZWaz5h3LhkP",
  "key34": "2CGuN4WCjuF9ufRXXx5oSjbj8racsFT7hhoV5bBzWhVmiASKbdwoBBgGHwqVdAe2j66Qpj1ixYjYi7AK7ydGY17r",
  "key35": "65Cpdo1ytrWUA8xZ57v8iWqLpvPZy22fmdJ7nbLgGTDqHpj25uVv3FLQuRu9cGvV4teCJ3Ke8edMqrCXVqJ89Nw7",
  "key36": "3CCk8PD3SjH8A7hKRBhtkGZbPp1cZyBex3YDZXN5HcRoNvQ3wZe4t3iGxvpK5gQ9RFUifWTVsgY9CpJZGvD7rpHJ",
  "key37": "2i5Ea3sSC3Rh55bnqGZMsA4TdJu1qeXqb3VgZPHK7geknQhdstpEzqhYLLScWVT62JpofGLfH5YBDWuYzjQvU3Qz",
  "key38": "2DFQbZWgAUXh7Gp9mu5DbqQoDh9eNNBfEj2ezHKaCZm6bdfcmXBmANyctj9N1x5L9S3NfQUusrg9fRF8JmSDExtW",
  "key39": "3sHPZZm4f71kw6D5tnNdqM1KbaAeb1z8oZsurB5edbSJZxFk9FdekuzP77JGR2JQXzkXPPbAGEMVffDPcxRwtNXX",
  "key40": "5UY8yAkZFu5b9ateVwCJncuhi7DmKiF52VYADEAarEBfhhFyeQnSP8sFvSy56yxndiPrFdKnUHchUeDgk7pEQ5jU",
  "key41": "UvUP4zLTb9K2hDs9sWMdbQ1jfVCZRaTkYKD4xGdh5RLF7rSLvBoX23sg2gtfoeAPpobN8HjtZrd7ogMc55wv6vc",
  "key42": "5g8yeNKmEoEHGaF9SZvbhYVJ4MQLSj5MwqoNH8ZKue44d5HqNUWb7wqPSULc9nkarvokLNXcbwojdetNbfRH3a3U",
  "key43": "3rNJHDkKRVoLWBYF1zMU7Ej4W6vf35u411jBAAC87dMgKJk8JShCDR95JKXPYhR9AhimAX8K3e8GxgLYgT1HWa2u",
  "key44": "5HYpuUhyXP3S8Ri79U2bFhJBwU8xPA5KD1sr2Fna9hkwXyx82bZ4yBgYie2rmeZK3PKnTB8URnvpdiJeB3ZNn9Jr",
  "key45": "8xx37FYaF5ZexdMC9aJVhotguukdqoLMk2bPS5jW4EHeJ33sKFTJVrPaLTcLz183X8JPLyojt2QwFDnxVoFGXXd",
  "key46": "5U9Vc2ueUKkLHNj5136mLGpgV4AXbSVVyjLLmeANZbFfXCb3W6KJhLTzdEE4yJdvREBzvB7j2UZBustzhGKDUrHh",
  "key47": "488kN9Fyjv384QiJz6tJAaM3knZkAMz4fYnriZa8cF6ntLwwYWokzLzk8KXcHVZbEeBts9ssWFPrDYtAmQ9RmCkX"
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
