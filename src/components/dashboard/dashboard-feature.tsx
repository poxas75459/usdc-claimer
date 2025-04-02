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
    "45gky7CF6k2rS9nseteyv3wvGbbjhcTdMJhGsnBP476zvAmbXmnLCULNqt8k86JkmK2MNvNKZ9rZdm9L3urVrSrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ni8oASfzuqbGxrtwE4f9Vd1iS9RAkk8HhqXHuxjspqrXrbtkKJhCdMAc7NwnH4xrNj8U5giD4mxi4yJtTynYEkk",
  "key1": "46MvDWbjysy1JscDzz3E1c7fswh48yESSoJwikU7bNJ1SQ2HbzVYZ1kAYKNYQmgfYgtDdf15G9SLUnFaVd9UoqoT",
  "key2": "5e5Y9kXrGi15Y36MpQncnSWcwwWq17dVA3ANSyFAv894U1y2m6Jye4BhK3n6YvKUJg16JNo7LUnVJaUtp8qnhkoV",
  "key3": "53kjK7MxTAdPLnD8RjDsMzh9Y9s1XgbMESHErbbPfNRPYgNoF1TDd5MDEvnZWYCzWT7mo2SdWAo92b1wX5KWKWdD",
  "key4": "2TVvajhDXpTft8bmnVwM59yZDNFDmZuvFqqYjqz2igJsPqXkaxkf7get9eMgHoMzqGWz5wzWnTKrtQrDwhyEdjVs",
  "key5": "41eFHPVoGF9eoXN4ujggePfpp4Z3di9DteZsuvULUu3ZiJXfJUjEA8CX6KW4tzjMwNrzFhPAPDfLR48BEsC7tiGs",
  "key6": "2mL6MXa6JFn2RKsqqwuZqvpnbPEFKVii3W3XRBjzL99dhU6QbP5Zj3ffp75JuTaR1AguzFurJqAkRq6kJodPgm5K",
  "key7": "46v3XsiXeuAVUgSY4ELGY9FuWKYH1eepGDpzZ5WfXogHJDJerWgFgbVLVM7J8DfWQCzHvXdfryUSJs1wFdTQ9ndK",
  "key8": "4RRSsTB9GS62eKCo7TAvvAs6nKNUBubZyCksnGof9q9sGckfftaTM3yfR8KRU7PLt6K84HHpCmyN2UDHbFZnNuFo",
  "key9": "51mNaTZuLMaS8uydCitUnnNNmKBEZegmZGveQkpLKN4CYFjbKJR83J2nhnMBztDLwAVBCgMd4pBSgoFf1sdGbr5e",
  "key10": "5PgjpXtiajWQY8iGm72t6izkkksEdSeR5aGoQtnMYwrnFJpWgt2PFqXamF9r46qLXnBfKTbWF4tNazViCrjdQ6sb",
  "key11": "HSDX9Zs7roYu4fLRcfdkHYpeoRmhaaiyEzzPkRqEu1MPVu3EDS21Myn2ihai73ocip7UE8cBZsJzPjhBTxxBkxf",
  "key12": "4cfUZKxf4f77oktqSM6pHob5UMGW186oV3RRXzmuX7rYztt2pZ4vRb9YZ72xh5zXisZmMYRqDU4RvXoZYzKRQf23",
  "key13": "2F24GGAuCn7hRMxQGymtcjwMqxP5RRcnXJicr5nDwPeJGH31ExFYFgSc4dKCsW2dVdopUVNV1uopd9zhYSw4Vxk4",
  "key14": "5DbAyT8nUoU16mAFbWewfEzbrij5yuQicbSwxgWoTqk3qqnsksjnd4XYQuPxeb1gezZsTzzd3hQwgczHzjgVrBMB",
  "key15": "21MEZPinVutyqE1N5wxGTwpmJu25biK444YeiFHea3LS59sHQz1CYcUBEh4mpQjBw8Y4gXswUxvn7NMHJEVuefhh",
  "key16": "3ezwjBo8riZVorByPULoYzkTuZS5PScM9ZMmbjJgGCJGtWh7jS9BngMKbfauFYUkAXYPJVg6SYmXKAEkYUChpqMS",
  "key17": "5NxFFKkk3XQ1Rs7K3kXWE67JhpYusgU8dJp9X2G45DMxs8jFm4eDAm2zVwS5qSpf79PFuf6nunbo1TTLqZf8fvpj",
  "key18": "49GjstbfayzHDVJVPBjNncLTnqYtdoLyvpZDfqk1q8tUKLKokrMSu9VWb3pxvJnYMhLPwoAfiTZxqpsyReY8XpqE",
  "key19": "xeyrBHKBGBn5fEL3i7YSdE3zoMCL8k2DacWQNuwwNXNZeb1zyb9p3a762seMtozb8Ht5zuQpgGb9ZqcuwFVweBU",
  "key20": "4C4QhbhNPXiXKJ8C5hweLDrGtjtA4taJtY8py9tDztrVFz9e7viZLeB6oPCGqo4fsanGEiVy9MDSiDQpDWNueM3S",
  "key21": "5JmzMXeAeWtgB7YSzqXg8oubM1KfRMVckzFAmwgAPUuxWx3dbDcujRsWwEKSs8Zja1YhGrRsgdygSAbkgNEgFBr4",
  "key22": "4Qxvt22GRYmBMJKvjRvxXBswB7HSAcTMhY7dDnU5xp4N3y4nvrNHdPxLAV4jBi4gSB2hSYxft1EBJcUUA34uFn5U",
  "key23": "4Yp2yMF334QiqbMQu98Bues33nAfwFko8Sdk3b8YhbriiMkM8jbWq7zMD13TjDjEbAnBrtuMbap9ezu3YFFWBAEK",
  "key24": "4MWjLoWRCHSYuWw5RZHWp2KjfSZF6m2tLE6NHFmujpQEqM868SHj6YviqAkjtXTkgW2p5MMrL4HKunTcyyAcaW1k",
  "key25": "38ozmVj5vQP9S3HZsSn6CmRfopE2Ku8JUkYm4GFy3DCGMGNCuYpbupWsEBYMi1Lr9ion7JoFD4Ny26rNJB1ypW2s",
  "key26": "46DQ5ZsePsWQojxArXh7gsPLeGr7aPHjjUQBKGVWV8oqkk87u9XV3vczbEeJk5c2FBEpED2nEeS4wNXm6mch3ZK8",
  "key27": "2gtktnDn5QnyqZvmg2WDqQUZuSiHnvmjp1vQaP5LVCGozVMzwozDUBUPhsYwy42yq2tBfNnC1NTGHPRjFeUbc7X3",
  "key28": "apRV8jzsYghucTiZfCGanWSFTwqhtehrAuwNwyfTGmtiHwzgqhZW9hMHzhibcpqNYF8iMyWPvXrxt5AQvKxutUA",
  "key29": "5aygK5TUWMyj9VBYuriozon8P1kbMfVNsLPJ9MM68zcqecoxeFJzbRnw6ybRmMf6DY1Aid9QpsKq4UeHD3vmqopF",
  "key30": "4VDJdUMtvzdzq3NDQnF6QDpLZFMHdyVQh83P41cSZD57CN6S2bM5qVmWfQYqeJBKLTqTukUSR3kw2PaEAUzWxpCf",
  "key31": "4ZbNmxRw1rbeiHbtS4m1AxPENynuz3G6ztQScPDc8X5YvJeVgGUYjsRD9guMc5AfbGjhB4HScxag67rZ9h89HPA3",
  "key32": "2HHw9rGh3ZBfnko6jGiyiAVfunELyH1YLCLoiXcPKzfaRAsq5bGF7XnA2WF2GJ1vjFQPUusojEDmVZ96kTKvyzRw",
  "key33": "3WM4xxSq9bp3wre3JkXnjaPZDpa8H7jKSdjXxY4ZgmSZGwzjZJG1P7aVvqWjQkM4Anetesc1svsA1KiSKjRe4ERM",
  "key34": "3MxCjEr51okeiS2A9LX7yktZcqqtefjL9UEcy1mhuysVsN4CjVPgf3smbBpFz7E6FhnehZy4Rsnbdn9TKBSESXH8",
  "key35": "q9BnFwUH5kF5S8otEsyEHVoZN8tTZGdF6dyUZxKkujgeJ1eC1aGypc4LwW6RnCqXJ9NgYaT16VAbLGkHxhBZfnQ",
  "key36": "5Dbw6nJymtA3qK1Sd7BG94BqPW4WkPz6yTZFFZT98fy8iU84LddBj6v1uB7qk47ENusChH3pEfyzPwn893W1uiTv",
  "key37": "2SZZy61ZjapN8LyGbpU44FrfrqvTz5GyZtnBRwZhR9KL7TYDbCN1ASgUfYcGgNacwh2ohRwk5NEtU8NhZ7g557Re",
  "key38": "ZF4BZpZ8MKzAeangeZSJwQsPaXhGatFcPKrPZocjSus6dv71nUnR7QHtwLwvQFm5pSCAZaqAj88WgFp5hJpvRjj",
  "key39": "66cPw2WygA3Sb7JUUBgSNMow8akwddvRTHupi6J9zVxJDcTM4n2wnw2285PZAQRJkfo1jna5TcgZpc59XSiMN513",
  "key40": "61XDVP54bjQXsxi4bgYzp9snY8sbujqbGgqZDGyBHhc5981TEu7qkTMWXJBDLh2LNxjktNKmmjo8wUUGu1oUXKjX",
  "key41": "5ys4Q4mEwzQpLmh37YhBNo6WovpG8BC9NRdbiGYHeMK4kTBGJNrPs6kfXG85nFn8J1AQULx5j6TQ49PruhqyvoRL",
  "key42": "2QcGindEjUXqutXtoKyWFere6GYz9giTaSF88hGJYGj3mX3Uxa32Usq89rf8RKSaNN9Aa1gmNsx5J99JtCJWXDxP",
  "key43": "5Dc1o3bYmqS47WfZd2wX7P6r9xtghga5hQ2sAr4BLdze69MAfEE3TwWcHakzJT1pnYPt7CHMbK2asGrEWyZTusU5",
  "key44": "sR3ydquhqw34cfQKVvZHFNMtrkewbaWRp8r6nXt6vGKvLgYkcyE62ZfWuVrCe2FR2c8dTNXW4K7YcHZuNoya9yr",
  "key45": "5bfkqjkuVizTkgZx4fZQSB21e7T3gWw4qnZTiSfFP3scjr9TLPhNjcHTfwhhK72DawDwbEE6fBZF2uL6iTudNa8a",
  "key46": "5WhoVe6LEYatCeFHEx1Rd7NSM538PE6Uwfzyzthusm5tEeQ2fndXWaGDFhd6cEZp3wLnBcHAaVYpA9FfndP4NsoB"
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
