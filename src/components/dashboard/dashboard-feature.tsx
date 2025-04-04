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
    "rGRJXobpGj5a6Yyd4m253BXV5igJStPb17VhoMQgWqpFhCV1prsTarQ8noEBUTJRrhv4kgHbUu5UsvRSDi4qy4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7ZrNhfmryDp7idaDMooAu7FBr2AJ5Eyib8NCeagfqbLGJBb4B5pM8iZqaZjKtKeUFBFX6UZKK6GoyFBArBmveE",
  "key1": "4ifMBvZ4TaDejJk48uvQFdqXHDL73BaXYMtsddNKtH94WXnycFHdAhcNTCBiXskVZsK9MG8DtFnSbXQaZ3TNQr5x",
  "key2": "41Fh5NhXGztW3dUoVeQjnKS33CkFTaKGtJk522Am8apdTsCR41XPq5S2KxmEGQdMhg2fpVWGFaAj73z7hjPjnHeR",
  "key3": "R5js2jqazQdv5wJRZbJ7cr4pCYyumt7qY8DcL3MikYedC2QJdNbDU3biVuk4MEnwnQJGNjxkE5PKgtR8e7fGi8F",
  "key4": "62UJo1MKvqVu8Thgqt2NxwekLk3hNBmzhC91UManeaYudPu4qDjVLsNZjnv2shESvE6gxvXqG62M1JkrGYszJ3Lt",
  "key5": "4AHWKGLcN4q9LVccnY2wnBfNj8wUEX3Y8qiZ8LNH4XCn4KCc94wuHCwCB4W472eFUJ3YzdFWPBPR5rdhUuEZkEuB",
  "key6": "2ARakRvGUBH81qSmXq83NLcDeT5Nh8W4pEMQMWigxeA8aLhpaSkpWR7BZDSEReLtmeBEUHbDrBS8nN9WEG2wQynF",
  "key7": "2jmNrsEctAbzX8cNiFG9dqADudYAHm4DhsEkfXh5QaWuSBXY57GXyMobSGK4bEiTf7uDavPjrdK2AnPXU4VdvCcU",
  "key8": "3xPFcMEaUwuseTZvf9aAA8GKSoPCkhnb455HEkAvW1DxvviYUmbSFTJ2yzcPaybkNgBR295TKaET4Dx1YPJ3YFKb",
  "key9": "2fEB4ZweV24WXYj6Wnca6j9gwVGzrxcCkviKD8JZBCPCy34aex9Znkk48WAj97frtCGjYiCAc9wkgUVDh95n137f",
  "key10": "5e74NCnoxbB5iS7ALVcA9BPFojX6ew8s4UmfuUBMyxvGW7QLQcPiEh6sVBh5q3jEG9J5dxWUoQ3mJZf9dx1aFG9Z",
  "key11": "2AR9NBDsQHaL1fXGBPMXhFxBTr4MAyGKu2cktur16XHLGq7Qy8bgrLqucHGvc73XHYuN7zkCDAxUXXtduCTXf8CB",
  "key12": "5cx3wR1U2Ruh2BhsBB8WQocqSzqqpTT1tmzmsgu9qW1SbfZcMBhPrebNxmhnnvaaUaTHopNXtgRggBz4h9Vvc5Hh",
  "key13": "4NWEAJsXrVXU1FKkzMswKAF77TKWV2k1PMDrdWxoPGuQv66weziQc7fbJc9K8SLLuqQ13jyZWiNVe9gtcHjZ6VHi",
  "key14": "XF8RS8D4gjrJ2sZPUephWS9Yd6vfxLJq4vNAJTDHq6nxMkKSjcJoASixLRYe2KXE6cCuiy1ce5vS5U2ryUuMP1F",
  "key15": "2n7QjgCCCYpBTyaXqfJhTg7bedBPtr9BQRhMjT6MfGrX3H3kK5V5qtFmPdueZ26ANDdkyaptWetDRUbMnxpzG1Gq",
  "key16": "5AB3kWu1vBmLiMM71J8rz8TXu6PR7uo5ygSkCUdxgbtnab8A8QiozYZAikRwb74fHNC8VYPNaMNNK4zZyDWwHsna",
  "key17": "34TyYmRSMRsuXFFuqRWGvSvRdxBRapHTZtCTWdL9oeEuGhCnYHqoXjxYcjcBMiwHZePkWdev4o1p2U5eQk1fxgzc",
  "key18": "5K5k19JYNq8ijx7MCaaUDKCP4wJxUCD8rz1DmXsZphTsy2To2VQzy71jyPb85TS1H4HZ7GZtz3xTNUATUZmqH6N2",
  "key19": "3DYZQALMCtWMDotVA5gZDx1by8F3rdwMBVScUFoHqC5xYfN1MiqcEMohqpiiwGXxANyVH4zoixQR3Kz3Zwf2dqEF",
  "key20": "3kGxTYULa4ZEJYGDPpUC4XBuufuGnaPrTGN5GtUyzYrmuG1QkkA5yWZRiikohcmKuecLfCnfZVNFuYtJjZv6zEft",
  "key21": "2ZcfHUqCefG6szsKvXfDRX55jk3joYTq7UYsvLqZPsKLcgoEFBnwrc3yC8XyTpCEprFRyVzCjp4skZ2atZuptQMa",
  "key22": "3Cq6QknkjFc68iSnVskcjnhfSuX5umAs68EWJWbR5Uq3JgFnWNQM5K2RkZVHA2B9zCBTZuoc9dNVFhRftLkZSCCG",
  "key23": "3yruPGhAXWVfhcqpfxGhEfio7sK9uqCtL8NxYa9vewneNQcGHyEVENkULn3arG69U8HCvqqFjKAqHejDXQuUu1ku",
  "key24": "gWzzrudXTzeMZU54JWe9p13vLX9F8fH7bwjpAh5gv2a4fBSoW5cSpp5rya5mEs4b6UpvqeaJgS9ayAShirF328y",
  "key25": "2XZhRJBuKp2669YufV154CghdGHqGJX5pVdq3j1FQg8SdVwQNLsEYT18AMAeifN2HpT8WipC5kdZPCoj8c1tnHAr",
  "key26": "2UiDJbhorRJKEiiuTCZnBREosf9HvSF7TnmhFu5dih71tUzVZQfY1vYwX5MvZaA7iG8ET1quZk6EqSnhiSkNapgG",
  "key27": "Tuk2bPuEkPXWfVRQeCZYDoAGeBxBhrZLtuHQM4n5dnHc9GxEBj2tuF21W2AJc2UZWV2bm5zeFYLjdHraPh8A1Ss",
  "key28": "29gK5nZGosSpKooEVKurB1KcfJwy3Ci2UJg8axm2rezatukV8kf7GUkx4apyGjJ32Ds3PL9RHbHsE36xhMf5GUoY",
  "key29": "3NPHR6YVM4dGceB44J2eQSQiULbS8U5hwBQQ325ZcsMYrd8CxLdh315ar21y3inV24uSLCjpXPHkBH8mtL1LdQnB",
  "key30": "45tTdSW73ZW4JpBgWxUnZDmRukPtKvv1QMhTjRgerUQm4oRnyjp6GEaAa1MzVn66ZvtYEDgcyQ7r1MwvVFqvPHNK",
  "key31": "5VufqTUqT2qRAtfSRTjotppbZAgCZifaVbjT1y6dbrVgT6PyBLMwwfRRDCX4RZSgoKTsSbPKu8m9d3gP9VDSwH3v",
  "key32": "22nvvjoRSu2ssrEV25JwT1EMsLhH5XwmXEYu61VFpfN5cYyi1V9kTdiwxf4XsE1VH2DyuLRbFGaWXMCV2gzvFUjh",
  "key33": "4Lg9ApsgPZ2HZcZZK1uMUTPex75T2wRXZa8CYbo5EBfasqEj27Rotx8g6Usbwc61iJNLhSMy8t1vdV5kxiDEoi94",
  "key34": "3pTsKqiuHwBcRZJQrKLBHH3zmHuizdbB7ALjpyTZ6v1bhKvykXeseBkP4XdDNRZhQA6x3bRSTXBgrvj3cDZGJVP3",
  "key35": "27kjyWqq4M2LEi7inUtzaaymbF5SC7UtgQUKTm5ZW1McspPF1ZczGokRm4zXj6SchVEdXW7Z9LaoF665tovp5ZMZ",
  "key36": "4C6pZDXndb45AfLog1bU3uG1CcRyZsToRjwNFmCQSkQrwz6aTx5zrXZWjyJm3S54qJwsAQKWyUFaofP9S4Gode8z",
  "key37": "ktW9dhZs8EUwyzbfW76D51nEFeAXk89TQ94tZpv8iaE81L4Nc5UcQqV4eNEeTprb5AwejFs4VcRcR4mPaaXp2k2",
  "key38": "3uigXF1ta7zrkNWVsuZSBdsjqBCpcoEsB6hBPSXJJucA2HBDsu9KPjXJNGD5Yc44KQNDzb8uGTYTtvLMN5yZAcHR",
  "key39": "5JgEjZvFx2iJK75XZKkj7MmXayHj6TD3ocNECCSapdcEd5xtzLZr11wbEyBbgZ287hCDCAc1vLaKiVBhrsSMVh6N"
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
