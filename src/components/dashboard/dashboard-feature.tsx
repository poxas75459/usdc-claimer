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
    "QQ2CzMFCvJ86AQWM8hC8tUyxDoyPaCnSecimU1fBuqSr5FfwKCAcjRjBfXZJJ2d2VG8chC3zGmw1P9yh3i1YEaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNjR1o6eEr9bWTGv2KEeeZVJnAMoTMxPK4z4hWnPBFTKSkM2yCF2huME3Kx2tMHTZrSZfc4NbnDqRXXwzCogm6T",
  "key1": "QnCSWCiuZkEJLt7HEYdksUkHaJJ4dej7UQUdnSRPGSZ3kq49qFzs6Mh7AjTsxRCJGYZ9YazKoR5Gty7nVEpPHtk",
  "key2": "2md4nRoPmU3rP1sc1znuGCzTK1aF6db911vyghELNgrQpRggy9eLfXZR4kx9Uc2ryhT5RBaBDqMXhk7kkp9vfKkC",
  "key3": "67g5pivatzvoM6Fn873zTdksXkiH1BXFTZoL9zeT4sbky9JSTtfr64E8j61EaDFWedoNVXPWC2poLqMG3hTNDfPo",
  "key4": "3zEunx9TBeuoVS7QmX9a1nF4fHN3qyRHif5wcJNufNrxRWGdzoSmaLHRQHqSFTBS5jUqk3JLTnojq1bK61ZwrgQG",
  "key5": "Puw5epw9fMUWZoehih22R6qL2vBKH8rSbyE6jgwN8HyJxKrwgL9xytZLLcgg1N5Z79TUTU5XreJhacT1d2aQ4BS",
  "key6": "4Er1N5fi817Pvyoh5DD3HcPMraEd8xfJkrkHsj6oQeJeUtypYmro53jZM6vdzP2jssKdADzoju2SrvZoNic1JUXN",
  "key7": "44cgKxXBMrgikZTC9XKtgdwRVJKcg39awEyP3CsWaoNwUdSC5RKiysMEVyjzEb17M9UAKDo1eQBDyRPhM7bLRV5D",
  "key8": "54iiDB1xMjNRhmhzR39afJkmVuHHDoocU6MDBxDHi1sHYC6eFySoppbd5g1Eqqh1XAsarDR6JWbptAmMkXFu31we",
  "key9": "q9w8eTf7VysPTVtBX4oTU2jpQi4btVQGMbUg4HSysJnjAuUYD7H6WQrrHDQ9BinUJo1HPPnsRc7iuEsEVJfxrjn",
  "key10": "5oVoj87vKW1cAM81yhfDyAFYxsSf8K1mda7Y7j5wAwc5hADzMVeb9GYRU1se36K53UzdjVGaq3fNQaBCLp9FBjYL",
  "key11": "4zj49PeAd47wfwjqkPGCz2oNyE1MYw9ytANsCUJANgzrZgFk4pRSv8qi5PfTujF1qwJRcTouneGYuJKXZJ9Ls4Tg",
  "key12": "2Sn1rzSLimpbfFANjBpPDAiNTHYqRH5Yy7bJTvmuyz5Ud69fiy2er5dPvJ8PaQV6JyPJbXxfeJez2d8mKSAoWu4q",
  "key13": "3dEuNwL4re6ejCMQ9uKwrmJcYNVUu6UV1LPBJw8yPjEK4e6qG5SELTZVgEzAn3AP51msePewRsaf5i7QM6dWrkNV",
  "key14": "2TuGCddf4omGMj8Qtp4YRvE5JeZQgZq1rREFBcZ8iLXejRZ4yTLXev7n6AoL8geLyfziUxooi2cuQYgmugpP2HYN",
  "key15": "5FaEyRpk6LkfuhaUpi62cMVkoCk3yVixvUcAwy5xpyDHZmDpQio3PedE5awgb8RFmKGsZDhdKKHBJ3jz7fjP4bZv",
  "key16": "3bKVimUFvinLAsvD1pcBX4sP6CrUmaM94jBfSU6B9LhBYE2CL7fcPgZiCxw1rR3mA42673t974jThXRqhkCMJrqx",
  "key17": "4KB8yvTkr4AGkx1R9vFWi3dzKvHN3LXChyi4PC6QxJP7dRc9APydnos3K5xa3npueak1AzzJZsiY6wtQ78uufJ5m",
  "key18": "3ZpFsdCxEFZyLmhcPcEdsQGbHiSj9t5j3B4o8zD4afPVjMnqeJWfLCWhxx9rqVAgai1md2JXiXVdGZLF2mcCg3HJ",
  "key19": "4xoyRF91dWQZAjwb2iveY9AaLAyKotSk523Z9RoQ7j4XFvvevJMw7syLgAuNZkfgu66q6myo38K9FJgpjDKMarAm",
  "key20": "5mF4pC9nUN3XRxda5gV3FBhsfPbPsi8PTPRsbm2N6JDZnSB1eBaxu8gsPxfJtkoyuYKBwHdXLGXQ3MpWPQcjHsq1",
  "key21": "5fU9HvWBCY8jfVJcsJhGUJCdVhF7UTtd8Fj1E5vfNXQjBhqWGhBze48rYnx87mrLip2sDbGWJsUEEModp1uRcb1C",
  "key22": "3A9N6Fo1xGGJxDeBBV8M3Y1VgorSHrxU3uHCWtrv5LipYfJEN8EgMgZ6wJRHz6hMgebqM3BpPt18NQV8VMH2xTzv",
  "key23": "oN4VniFHt4i7JmbrEzD99hcXvPZRwrhwUckkqzKcjnS3xhFbvCwFmArSGV8a8n2NTrLnKMumiCpvpwBVfaYFc9d",
  "key24": "3TFSx61wFV3UaqyXRZsNhUpDYKHzqkKAAEfm3hecdbprHzWwkQDY8Hm4hPvMdW7X8kfzncmQzBtgay3vBCq6FwJv",
  "key25": "3sHUt3pWjvvveRxPaAR3ERKdru22h3FqhqZLgXrGAVS5FxymqFdCze23NMeiPvh2HekzX61WfpVZpHyte6gTAa1e",
  "key26": "2DKEWcVz57JNZ4rczR9buqjkUp6B8qV9Q4yD2srXipPxmWaVPjQ63oVgTgCXCDm8WjppY44FzKqYDufeK2NesTec",
  "key27": "wQY4iAB8T5xfjUZbttiJWZpcrLShQzjEuY54FuvNpQkz5WTABqfGxMX6wMYhstiFk86nEED5J39tJ1A2yQuGBKD",
  "key28": "679HrBQhEQPeMCwKtPXZnX8d5v9ZLZuH3Uii13ogDCySPtuA7sNRK2kPL6yHF8bxq1irSmGtxis4vfrGjCuoy16v",
  "key29": "3C7eCNvJoUX9od448X2wTJoNRZCZ927C5evntJ2anGbDnGd3mszMMaGjjZ2hq2CsLQB6GqmGZWrVgu8dY3jNpcUA",
  "key30": "5xddKD24DxtdweutfrCFegha5vXnVauWDHJHhXBDmPMZQZxhnrnXeNTRtSAQSoVd2gHL7bZYwZiWwDhHKV2NptKj",
  "key31": "39zYj6LeeyHSU3HoFJLAY4XzYqwSd5QLRmecuUXuhPDAVU5VwUd4zbHANTnYMQdVvJQHufVTrZYpQ4dVgexp2BxG",
  "key32": "2JaDQ6UffbsuRev4sjbAXqi68RiGz6MEe3EEnr6Hw1XoHgT7VMXcvVzynpaMbvpZ1DUXQ1ZRbcsuneAkRwnnZP9M",
  "key33": "35KE4QHdcx2e64hRyuH39b6WNSyJzKGns9DUpTMH6dMq6LmSnkRidnAtLNBW6KEM7BGuzhSEypHNhbutH482WmfN",
  "key34": "YtBSqCMmuxgzpFTuBh3T3Ump7GECcAkAQPgGDt43q88S6QxxA71gFYgfz8Vp5TLtPupLWTF8LyAhrL6vZ2tAeZP",
  "key35": "2psPfwGRPesQCk4rkPBEp2vFnWHqcHK473TtjE8Bq7HgMC6HMM5Bvi2uQgJyt9LbwFYWoX1B7F1CSxKPqeheLkJs",
  "key36": "4hkNBnLz5uLjckYiykkW94wQQQfcpbzVMuVoxV8rk9wcscgMYy57GZnrfPaVgHm1BReuxwr9Exwb8eMU8MKpGogk",
  "key37": "66F9cDVnQHV4opvSKv3hauZtYSivXvp4YBnJxosV7e2Fktxe4DATGr1HrsNfj8tsJacqthkTtLBBpq5ZMdySUEPy",
  "key38": "4Mqt2R8uF9A9LGXGR9RaPcZ7LFQQGXHu7iv5j94FYNjCKwvmWWTNVYEzbMhT9JQ1oKiZVXEXGXMePPYxGN46P7mb",
  "key39": "62yoEAhRmBSkqBDzxgVg1aeUt8HZ8X6NrnAERcPE7oLmqXQkCkYVHekqqWfKLaNM6eFSXJtL5KBwATcV4gqZPQvz",
  "key40": "3BtEitggfWpLVXCXnxzpgnNsM15YiFyEQye5oGPRVWmqqNbQC16QEgpzkRVP9Z3DAhCzRRZymquY7YcXTHbEjQfS",
  "key41": "614MB7eqgGi256Pu4VrEB4BVqeVK3iLpbRd98fPq8QTgxjSiaLUoHw17wXXXZapFkynhSGeGGsRJ7METJio7AfUE",
  "key42": "5ZZS9pkKpL7BuJrA3pEzGz5uE1xYr3UCMBVS86DPPmdvzfLQUXBWU2QzgxPEgTYi3RXHvBhtrTeQqN4V1MEjYRCE",
  "key43": "3cqTUibR2nzKuCQQkjLz64kDY2yHCWZzTsKV4vDFToYycqjQbzzJp5NQ2Jj6SZ9P4FxQTdNduGtgkqLytSdTGQer",
  "key44": "3VMZzosfuJiu6n9rWL61QFAPzuhvSuXs6cg9wbot9bTYfAwnQXAqNwpppqQjPdqcEEFGgBtKDogBBGDXJ9Y52XYo",
  "key45": "3U718FdWqhGHXJagtJ4Vtj8wD8YimGrHfbDEAXUbVaQScWvyr84vMgvT1R2rgwgn2sMmunhfLW3vbMoEgnQCuVss"
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
