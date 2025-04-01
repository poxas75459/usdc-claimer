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
    "2eNvJvgfQW5bTqzBKFw5c9nHi8v2K5x4nd3qwaGjxggVkiwxjv2TxeYYAhdHmcapEd7xDLJDU8pgrreU6gEy1mHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vN9oKDeKXzvGFyfDPtC3kUWE2iEZ99FZEPoxaNthsCV6HsHjCmCdRJA9stP2LPmPbyqKnv1LavQCBV49zJ34Dt7",
  "key1": "41JgSTS87Dsg6Tg3D6y5KojpdYgbEATd2AcsCk8Su6S3wLDCKmxi624AiNjB8cseqwEgQqWxHmUSog49qo11mkrp",
  "key2": "5QvM29ZJ6B3rRgGvDcSeBH9D5iKf4zfbZeu1tvJdxYKc4X49wMLVfcSS8uDscz7SqzeKnqyTYkFY8Yi32f5R683J",
  "key3": "3qV8qSWF1dVpjT2atzZb9D5ZYKStKdGnseLU7H4FmYRr3WvvREjhw8x48rxzmHVBRfgrhym5WdaQeFJS237NEoi5",
  "key4": "2c6DWnS4vybXjVdAU96ZrsDxENNekVabnYAXkA553yKdV4phfH9XW28ycyu8hFzdYs82u4ruR9zQ9cs6HatR2ia4",
  "key5": "38WYz3Q952hwvV8MaErdUbkqrj33z5MCdgt61u1WFTMPvwY5tUoQKkpNNgCbq9po572iMW9z2NWGptAztFgZka6z",
  "key6": "Ma65ZCtJh3hxcaU1dmN1AmRBBoT1Z6WKqAxXgNig69mvcNw9Fw4akbShYZtHu9KHmn6aZxToeu4oqLWxTL6xBVM",
  "key7": "7VKa7ZNd6R7mExmnE4RcWZjxod3CPrhjAeA8mK2cJdBCsvyby8VaNCnHws3fT3ScZVkp31J6FCjCSgco4ZJfs7s",
  "key8": "4MBs3wdkVACSRdzgqAaS6xXrjVCayvKPXZPA2LuY8LpfQRsNY11zJZD2p9YBkVT1iDt7zftarU8YAnxmyKiWsJem",
  "key9": "3yJdUSstfWBeFuumye46SQunovFpV5zjepgzGXDwPTVJVfV1wjZuEx3ijUAVDHKYiywt5cGhKZFfTSjRyTu54Vue",
  "key10": "4hU69vy6qiBnwjhx1BWFyrvXAnmBhLkaq16nCvwkxtrQfhqzAJQ5DShq7MGWdN2QXEBH1zFaaLqNumJ1Dv3FybbA",
  "key11": "5hH6eS5pjmyuebRGifFQhuTU6jMarVVr27KMXApKdaCRzVhBHV5UKxLi8jDNV7pC7FMUTbNmEPyZCUYX145v3GYb",
  "key12": "VVTpHJvndjFkczDwVkv8YbiWEc87qZhg1C76wJy5RTkSW4XeNdhZi2XJZCJSjPwUckWA8uDVYUmX7mETZGoFMwN",
  "key13": "27XQagpcRQPc6AW5YAU7wgSBhxQnDTpZzzp5ExFK4Yww42wcmZXi8Prie8s9uTDqVjxyk1GbksrQWBDHXAdNp6Z8",
  "key14": "2TgS1NCCaMwp1dtgVzc1vLc8Uz1vZuwbvvTjvWrXcFERHB5uweRg8xDTxiMNfwdGLYDkaKJhLxD2ncMs2rkV4adD",
  "key15": "5dDhPzuzxbV2Xu5g4DuRHmeoSzBGSv6EEQSomfdtMVBF8tKvrgTLiuhmenuprQFp8zmiLXijKe9zeEwxBBC6rzXn",
  "key16": "5sw3gRLjWco82t7sAptV7XCyg8Rt4GGTdNwAJzsdibAQa3ZkbxBLbmw7FfZrMKK2QcECLt8nJiPuUZk6f9XwDk7r",
  "key17": "4qLfbidqVcQ7jnB9imcfVKsQpXAaMwgdBcbLHCXaBF6kKGadMjahoYFu3g4SudkBEKLwH1HqusL2KMgEi3uWXBNn",
  "key18": "4CVAmgmRzWRP3abpNxg2R2WpfM1Wjsj8z1Gwp3Q8M6JdfJjV94YimsBGN6qR3eeGs5RAUdd3U8yqaFoijdyjv2Rt",
  "key19": "3GpVSdPS5yPFzgyMti8qFuu3ygp5obJxcn4Sybxgs7HriEzNhn877dNwDiGBPhRmgteajdeKK2MCkBZZzBjBZM3X",
  "key20": "5kMKcQV8i9Ge1uRBrfJcJoZXsFLQo2EJuXzFnFEgzcnxqsPq6mAJqDeewnHQMfaCUMjJTyson146vCLYdsmdEbVX",
  "key21": "5Uff4uuKbHQavUpLmSGVhdCsQB6G7sgKEU1w9NoHyC4eeL2rxFuUtJkP3HEGe2gSPH56q96Qo8Bt2WQmf74ijLEC",
  "key22": "5CsGeb58N8kzFpPEKnZFT8Cfa74dARmJ2jkodErr8zV6KiKwrEnXnW9qQFyZqgPuJoDQc7vFFrcs4YkLYJBiWCnU",
  "key23": "2nfrvEDnBD5opqWu7KtqwrJYhr9kajbT413DFPv8deKBZLsC9CqFzmsLoiYUusFVBCk7EvipSooHEjoeW9PPb55e",
  "key24": "65Ef22z3UyQvcm1vfX3DR8EiHGNgFgXwKsye3i29yx3mRoFev7n3rb7dv2xyj5DzCU5CHecmZgewGgkGsFjD4hoJ",
  "key25": "mJ3BR3cQEN73KT6tk78czH3TDDTD585qVAemBxJCa3LcRqg9FCYpogsUsSeKAtWpqgBzVnmLdzNHpojKUVUageK",
  "key26": "5mxeXJtvP4Xt83ie2aVK8rz2KUzvuEVhFTZLjMdVWkG4BVfTHLaoyZKw13z8tZ5yxUHBhhAwi1kShuQ7fkFgit1B",
  "key27": "58TaYKmtt737TBmMBna6qj6L9kAkvx1k1Mn5e4QDu9s1V8dsT9pGNMaNBLPBekqf1iNu8efLPAHyJ3Rtm53z3R6x",
  "key28": "4Ea1kfak1LfKpdLDBj9WTP6KrTiRDEXvoVo4vWwkgut1LCWvyjpLpKXJBC57mzbGDkJT5XxprPNHAj9G7k66rMTm",
  "key29": "daaq6hrUTm5HqVXeXXutDLhiF8s9jn7rEBjyxcaMnDkqmGLZUivgGqWk1yBEzAJimRwaqCj1SWkLHKy8hCp37k1",
  "key30": "4cX7xRU6MNtVLvuoZdKdsHKwvaR1LdCg6vKfQTr43bM9oUQBxNUdYRB7wmLbJPWu99GtqHTBrQuTSM3DsSPupXrq",
  "key31": "drmHtbuYez71W1dCqfnvtogW6d2V24Um4kRCCZ9tqp6bAyViMyknCsfDJpgpNoCmjPm98ppH7WjbT3nsfa5PRiw",
  "key32": "3ksVEFnbQdXGFKJmMbX8uChigd1mxAdBXgFXoVSWw9JyTjhb3xRatg7Ao4pdKY94Jvtn3GNqWGrNpVHzVS4xKkaB",
  "key33": "4pm1QqEM6Hsrq1tGpXksKeV7GCSzSWFwmyPqhEhW9ajVuNiinmktqDhspQXQesaZAxPFMSyGrssuTmTzr3q6tari",
  "key34": "3f9YQM96GW5uTKSC61tdXnfivJSTXesz56f1okCMc33r2e91RftYp92fNvtVQJEmxph9zWuuUuj25JtMFTjp43kj",
  "key35": "5LAsx9A3PGHMqFPuVLFFqZ9ebjcVTAGkPZicHxESm3DgxGjFRApZ4LTxiwSVKZUoR9NMinzVhwYCRf98EjUjfoRi",
  "key36": "Ga95jW9PjUV6nBVof1HcgAKbQDUaUjgjHbiUThatnhtdCyjh4q61JRoLDzTfSBS8wvJxt3CY8Wostxw6VgfaQUa",
  "key37": "4ATttfGxCBG6GVkEgrnahH1xANNTehPxfxziaibWes45bCW3k2Lcr4DjFfmaT9G3VGQ3pP4zvpiRCE6k4rWCEzy6",
  "key38": "2ffj6hPL1quXVmB9NYemcR6uWdBZYchqkurvoTibjjfLszP4WcT4zvYPoMPWm1assX2E1Hn514qsb7JYB9zXdjr8",
  "key39": "4BZEAXdsLeQbe5pNFS1mgp4iGZc3MceKj62ykBGNPUYtJm8LKV2yL95dRB8zHcYcWKyVAZiRkNF8jqRyMbpws4tR",
  "key40": "3p9UDMGjxh7e6fsbgkkFjXytDrWaMMwVrmByn9DCdeXYMwRQKxhCgHxStTnVB1UVGMaueTBfQ3DPqmmSDNJqCgEV",
  "key41": "3NK7bpR6u2MGvaNbpNUXLDTCZcXDfpNgjmoSJg3sf7nP74DfeAAorvDYzBvFdGhxVZhodeMH4XcAA1jqS1Nm1sVt",
  "key42": "5Q4eAB52xMd3g5oGUfkQysFFinUv2U1u34Fdb75kGwS994AhVss3JxAHp5xkGgdTxzftFGLji8Yja41kCzk7Mxus",
  "key43": "3vAJ3KsagPVRVwVBTCYoxzuZ5nyQgpw1KQ3sSjoHPpGzqmvSxsRiiguQHb3YjfhCv1nDYhNBdg1oVXLLBat9wVfD",
  "key44": "4nXvSbnGR7BwMNjfzJy4wbSJ3Mz5wW2io8aZWpYL4pXT9CscGcWhrZQ9VEWKNNruWdxYcvAZyTC2PvGBqt99v3M4",
  "key45": "1Rein5ekV5JNAoQwu9UUyfXG8CFBhv5fFb9ZCrM7k1BEHRH69fKc7rTX338JzA2dkLBBtcwx1mhaxn54VMRwqYu",
  "key46": "5PgUiupw3FqtKqWjLf8ZJgWSkEsUZfKonrXd6pPWHpBBQLonEXCJ5bKkrvF6UAYDiZTHymP9mZM5MsnN7R6WwdvC",
  "key47": "54BiqnjsXyEHrtZeFjwoa1vzBknLmhqBgj8Xe7uA4TiFEgMjQmcMCdGr5ufrgUphpWtncroNLJcXfuePjWACcMCj",
  "key48": "3QDvEhPe7Rm2B1MqsJSmKbbi8PLv2fbenAWDJ2Aw9S6n7E3aqjxpyXMH5CF1aTBZD6VeHjqFN8S8v1c5M8SEn1nc",
  "key49": "KqNrx2jR3ij9HLuUmBsYqoze3DsQFJXagKfWfpDAqvQuBDthihn6rGCMLXXNy6qPH64ptphtF6cMy78LHP3yZBE"
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
