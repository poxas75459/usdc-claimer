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
    "62mLfxGHvkMxkrPT76iynjdBTxSUJcRoyNVjgFvMVHss6gC8Y633PDkH6Uvd59y7UtqbXXmRCWXoqLydG1w5qmPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khRJPPWLqr4Cwngx44EqxRSeatLbsuRJTZchytoTjhAvj6ESYfqJTnNXHVTbjdN4MZuAAXFJrM9sKYRMgjyeMSu",
  "key1": "4Q5T5avZLEboPSWog8LZSd9KhXMtZEkp95xojxBhE2VMS3ptGXC3N72cUrAG9MBnQGRLe2jUsHhMsrDhM5kUWvAf",
  "key2": "qeS2hkfLhaFTjyUktntNX2k738NqSyhPTskHGC1aday5Dtpgpu4gyK3Fe48VcpusuAqogCAVvxjAtFUELqVoANL",
  "key3": "4oU8U2eoZP8Fv46ndChgCJkCJTQAoy8hZZXXUqmseUaQpFVoEjcixQb4krRbdAeUi6XEGs1t5N3jxKscC2So6AW1",
  "key4": "4daRZAMfRVdfrHQw9rRFKyHPBCiSLJTPUhuqhtAmpynAaKUZaSMzApxVortE4yNuetgjFdR3HNbkpoythPV4vkLz",
  "key5": "5sTnzEtoRZNtWkLCn5W64M2sxaQdtCsBh6zigEqRYocWGwSFgisfGtRwApzd5UL3zCsrSoSDBckTC46yuV51VChw",
  "key6": "4Czna3HrYkY1mqdrcrdQZbyZDrCvPtYSj5pMirWaKdQmed9cBSgDZXK4pfDTUaXMYpvKDkwgUzJeBcdKYfxhR5P9",
  "key7": "4f7NyhsJKngu5mMWWQvfKcptsxdo8d971SFmDAvoh9H4KwyzfaFv3foXze23jhCPRYTMQ2LSASK3xrUfMoouc9Mf",
  "key8": "3s2pmnynrXjtd7pRGNRYkaKtsRhGV7sH295JJhV6CqiFEpWPzeBivNi9vG7gSeBQCEdmzZQjVPB9MWEkLzdMAaTX",
  "key9": "2bJY6k4CvvQjXoz1SzbSPTUQSi8CtNZSie8kbjUHRF2LyuxuhrrmzGAuPeV8KfqLLsuFKbDvBn5xZTbYi8rJAWrM",
  "key10": "3ZaXtZT6yMR7X9GP7cZLvMV4Xwuzh8zbVLXFmTUaFLaghQdELTYkgFmDwheSXYSnr87UL2DdcUHR8em5itmQKyK9",
  "key11": "QRg4ZUkE4XVYy9fMX8Y7Q2QYfD4VTZk8dwubFyw7ZAz71m1fiRnkqYjY7GCLnA4zDaXdUBYEdYR5SsJzN63hqAy",
  "key12": "tSZJ16wUkD8brgLdvxxWtcqH4up4gHS1XK2phuyjtfx2isCDFD6UNzFK28LzksAxicjs5EDxtLCLmxqTeA1ES56",
  "key13": "46TwXt1czVNbczQjTTERVowP4ewvyycgGqt3FidyktzxBr4WB2RqCgfkvQ5hwyuvPWn8jmTpccJrGYt2fJqV7cHa",
  "key14": "3cqGczeQQ8nHdFFo6vrPzLvgrfZ3S2ymFJhetRqETQpMeLzv8t4kgYHv7vn8K1qshq38dHyHthNegX1BUbmbi8eS",
  "key15": "2sa3EJUAHkrA2LXgPJhjjfudpNQSZo2jBPFtFRPKqVtMPYQdcynDTGvKMXcK4G5DuWDx5Ej1BnWR8zmBuS93aYLe",
  "key16": "2BPTDfufsZwny4BKvFncEjJsdecPrNYwvaVHY2HQjFiivPB33h983wCyZjrC32Goy86Cj3JaKrhBuT1TNNvJ9ddo",
  "key17": "3WwF9T35F1doRhZkCn2Cypi7fHFS7PS6DbAbAAfjd71aovGSAWxgEhe3R51Tcuk8m6hXRMnGwiFe8mt7KtGPvCQn",
  "key18": "3WbegSLth9TMj39KQHbrhZrV3dudWU4pSdfUVsvEhfMVb9xoKs2rrxRrQh5ScR2pjYTcChSXM3D6REC9iDbKiG2Y",
  "key19": "2wH8Fwd39dRrsvd1uSjMvBTZ8ktHHyUju2cabzQVvoCZDSUxwqSsfMVP8KwzQEqsyuKCFf4qbXbKVsUmkHmf3yRc",
  "key20": "2QtjGz8AHtqANirKNNbMR3qs59WMv97TUW78ex1JVSJwM1D6DS2ojcm17yhoqdP2YoM6BhLCcwNEEcsBuK5WQz5t",
  "key21": "59Qj6NSG33A8ZEzh7RtaYp7gtqZ6CdyP8D5eLEHUgVpugp7SQnLN5YatLJG43jnnvY7FjbFj2NVuLp2d5NHFHHRf",
  "key22": "5BBTndTePVM5mCQFvLGcnCRax6A1VRBMYtJ7HyVaqwS9EPg2KevmrYQLNqh6NRwXRmgoWVoUUTSwvmy7JcL5vMDM",
  "key23": "5vXUjEu6uvR7NpicsJzFTbiPMupVxf8W4bdEr6GuG6CKzubtm6i81Hi53xvXvKZRcaPn3bgt4Ao1WT3SBM5XaRAz",
  "key24": "tgtNaomPqBNdeWX1hPtHGgEKSXHo3SMRfnsfz8P8BXE1aEdMfLBvVQEtcZeE1o9HmuGHC1ryjSpw8s4kvJFcUvr",
  "key25": "2wGU26eV2EukN5XcpBN92ByXEQSE5HGJFe5VoaQx1azFQw8Wc9JkkgdKLPNUUGidAqNFdDWvNuf1HfRUwCTCZRSe",
  "key26": "ANzoRuaH6ZfRzqovgxJijq2ckNsZsXGkozg3hyVuQanqQxqKVf2FJk4FDRWmPccu3Jsu92R6UTocERLpVVgpMmQ",
  "key27": "eoWzdzYpLv4c3Qdi37zVBaPy23yEwqNw2KuRM9MQXk9JUatuWguxV6RBee3pTj88DUrbNCziVg7wJ3Y9pHxgxyr",
  "key28": "3ZQqPkhf5fYjX39UrrYv74hsRuVHL4nkfaN2aK1XkuzEVT6xS6AuA9zpZZ4tzHqkzgKD7hxsZsUvPcEFNTpiYSct",
  "key29": "oX77h9YsQCk7p1QqaWy3hocCoKPkQYB8aicNgaxoxfSuxdKPuFRKb8pgiyyA8hcaYNE8UY3anGXqg7dMu9mXhB1",
  "key30": "VMQyjoNd6AiH9eMbpkfS11yGRC6KPxL8ewXo5zGcTT4gYZuCyLKqcQy9D7yfz96RaCJ1rEu9NNBSft9ExBkJ8uE",
  "key31": "2MMLDhgcz81XZF6xbXMxAozBraiCPPaVRyeM7vDt179RibrXho2PomZPo4tfm7bTyTQKK5zWooqrbvY1BAwN5HAe",
  "key32": "EGCatgHn1gtDbGJVsdwGXFU7fT8rNtBb14x8vcjaKwo9f58dQceTkyiUQJNfYEDWqYLkAhaeQcxQ7tQDbmNZnnU",
  "key33": "323KcqAmpr5fakLS9DPfzNhtNrmek17Z19ztkE7KuhyUXufUyB1S5my7TsPALCfZreE4jDvnVKiHENc3RRcqyB9W",
  "key34": "4BwnQai924PwahAHJvzkto8uCTmtiPxhYoovH4SnxMm3QyTstyH4ZapM8oEyjjEnAAw554v1YLtjzaJ775caU1Bf",
  "key35": "3aiKgPc9B1DEPnAnEZu4ZVE7SGEPgXbqkJECQXsb1NBNxXPknyzs5eLia9uDs9wk9zDeuGrQEnbJyNk83e6Y6SWr",
  "key36": "4YkZUWBKeoxh8eDZo1V6w68PY2PvpZHqft6MtyFFdEnvrRqFKzfeDiQHbibMTXGpR8Cww4GVupDWN51AWAaUccbX",
  "key37": "pHPNqRs89e7sK4QncSGDkq2rkPxktP2Sj3u9an6A4oHVYx4SsBLRhCfxE1YykrtcXZjhW9Nh3adS7QsoBR64QZq",
  "key38": "2qnNvxdXTVJeXAhF54opvx8qpH7kMCei5yRHqw6eYpwhMEmRc4azEbSgtQXH9BzaBPZceBRdSQBgpkCYGEHrFdjq",
  "key39": "37vo3JRkzk9V55c2XQy5kt5QCxt2aaYPynTSVMNy7mxzgck6nXYhM34XSGqwErxe82x2d8a1nCYUs565RzrCTqo6",
  "key40": "3QCu6WT2UfUYnXi21my5A4VSFXTnqHfqGbTFyZbRUTjRFnS53bchpuBKfBkAfjq6B6ESUSiYDXUiYwRjhKv29mgQ",
  "key41": "NH8GrtJdAoBfieJZmCwU5uVH8jw5TszBvVEPyWteB5Kx3e3kpaUzr1gGbn5y8bnR83C5TcXtjbG1ozfKXNcz6Vi",
  "key42": "2u1eNCTu15UtR2unXyBEzkrBd6EKhaGHFqfkAFSU6E1xtWMLLqXnuTV223fXGHiczhyfLS6u5mXJFu1yszp8RcJf",
  "key43": "2bpdBZY7sMF7fggjHtvjTwGHTg9HVzA1SFxDnN7E3Q79UYsRGGuJRhmYbp368fXh6DDzX2AyLj7yseTHL2q6Vytd",
  "key44": "4BXwNosHkGyBXF36Qq9a8EfwQGKcyNWoLuu1Q7dU41G4t4UxcBM9pTeqRptTPvBsdnyXHTaSxQQt2jmDPzWs6yXs",
  "key45": "DxyjnXGx3MWWPTQ3YqLfr5fPG5oUAkAqEnzq5F2gwGwmjCNpm6Z4kUYWC7oL335X7qGDWgE8o1tauBiELckWS3v",
  "key46": "5qpVDpurtz5BEsEHKPbZr2os5GVqEcs9FTn4znQYaz3JnECeQccebwbCBhxyWmdxY5Fu7vXSM3d5z5ZJbV17oJg4",
  "key47": "3bGyjkFDWgJFFp6vnPQ4qXvPJd8P3dfoqh9D4mn4B9oDpdy9bMDKA3A2nfwwLncYhSupt3DoyAFCP71JM77qVruY",
  "key48": "55vPMQEziFzCEKk4EiQ8mMdXiDYstMcU9bCj2Q82VSD5ZErS5P8V63nMhgo4JJLdiT9EdtT5pdUMmb8yNbgRa6C7",
  "key49": "2ufy6fVx9eFzzAWveeKUaFN3dS6ajELrPk5Fpv4F33h5N5reMLR8QLJWuUgdihudXmJm9PFus8abjduwT9PqP96C"
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
