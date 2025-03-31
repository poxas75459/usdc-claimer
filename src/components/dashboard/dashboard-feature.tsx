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
    "28hRjF1CviYdzC9aFuiv1Q9Ff7V3BPcQR5EdnzbUxHHr6V11ofiiRHqHtJUncMy5MTarx8ErTKaYFGqwEbZwFE8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnL8JHfiBbtm8NCU7pc7rsds5JHSxo62wkGvAgHPContGxyD3cnoNaGTEyLprBXfR6K536sEQBDHum6AL5kmQt3",
  "key1": "3MY2vT1mxkwPotpJXEznYjt54NX5gU1bTSMFRtXE56dhsHWCtf5bQLmj3wQV5Krayamvun6ESBxTE3zGRjG9sn8A",
  "key2": "2ugyGKdHQUkWRo2cLKr41267Tf7kPyqyF3stu2zTsQTincCEiLmxzXNfMExpiMin8dcV9HfZw9APUrpYzN9G15Yc",
  "key3": "66PeUipaCGeSizK11Xaj8mgq4gn1p3wigCrVbJJqJ8ULpJBLmkDDS2YxajXPsYZCUEQFA7mjjKNEpiUb2Ym1e15i",
  "key4": "55pzNBQMRbTraVCbLLMqQAXDF1qWofh5FJ81WwMCKLTZCpubn2ZPgr1WJRNZVmFQwT2px6JocSeTM3GKkWbeFmyg",
  "key5": "2DWLxGh786RqgbHH2bwBLx5D2uECeh1QFq3V8vbPSy9MEuSbaXMb69eSbVmsc6HB1qCEgC1jabp7dCBaq3wm11wr",
  "key6": "5q2FTHrM5hokUWfueFdXeWC2QogcfqxWUm7e7b7Kwsj52BNnkaosacnFjSenpp97A6dyY4UkvdfPMkCW6QbAFzFB",
  "key7": "35PqUKsLcd8nKwWMhfUeUZoYhu6WwBiUmWbMK3Kfeae8GmqEZs2btgYeSZpAA1VyA9mKhrUGqNBi9aogv4uc7g1D",
  "key8": "3x3CdmN9GfodihXg4kXdej31XHC8Ag2oz6vRr28KGzzBAb4zwoKxHbkFJzTpcHvnaSKtEUbaY2H7XRvSGctkGxHw",
  "key9": "4TPHi57mRHY295QKcqQTsEFraVv3mvCFwik4ttNtCNaPg8tBwxnXTGhyyzskkqWt9eiYeW6AESGt7uzq892WR4Q9",
  "key10": "2kLiAfQYR4cx4jLXe1UG9cZD62BhFUYzyBw7JNCQp1wZfCeJnPrK5i7jU1ssfQXEhdgeDfifN5sPbhFcVjemDca3",
  "key11": "JSWagv7GcqRv5D5jpD81CQ7uz8CVghpRPn8nRDNWvZQx19CXmoZEAtyQFKfVbjc96yNeevfQBh9AmHJfAuFMm8y",
  "key12": "4CaughFuSn1HR1DqGwVBpNk82d4ZpKmPHNupZBuZUnBvhWQUDxM54nnAz3UnG8QL7V2P1bBREoNPoEzLUhpRj7no",
  "key13": "5bZJoYQkKEN4djvvYoSpyQ1ZNvHci127KSboS6ZhvsRa64zQePc2Pk91PjE1JqLQgSHz1GDqs19GtsMsQkrKA7Cd",
  "key14": "3K42TgC1LVrDVGG1px8XQA78neBDSWwy74uprnaQ2fDkGGvoVWKJ1TiCfzcCEJ92eRUfGkfNj4CXkdrFUt7WozJ4",
  "key15": "344xadKvNoH5dXvrZ7L6153GJn3X5mMGugtxDonfBdMvrUQZwskRtX3s8g2McRGTJgXZNPhVvyaogJqqdBCdvXvY",
  "key16": "vbVg2H9gAMJTNC7vWHwY1N1zwhJnWHASfUUwucLNd7omszN5EpewyXkrVs9Re56DxBsuy2CS7qrB9dpcmbPVuCZ",
  "key17": "2KLMBGwYGXnriGo4YXstbxJrZNRK1po2RD9LccaMsuMRbfVYaYvnVPYhrVz59rCgMLG1ZLusf3cNLX26e29jb3W9",
  "key18": "5UndH7sZV3CxnPyQeB18w2Kf4Cf8NTVLvXoaPMpSpKPdbsJAGPYvjcEet12HGzSaNUDguEJjpHguJSYP5DZWTyU5",
  "key19": "3YJk1AXD34Ac2Vw89uphPYbXW7gadVHUv4oMsCKkSFpB3JnucYYFvbSa8Pr5ik1YGsZF6otE4F4XotPFNqSmfsyZ",
  "key20": "abHEU3x7v5gSzCzJtxdmQcqHCTmi1bP8Y4tCHcCRcZ5r3bbzApRRaoFS5npkECHLkovsUjkQfme43og3ybA6sog",
  "key21": "2a5CgbExzNwW8qyymkTX6Txq4sag1F86YvWYYxo3tjhXGHJA12XjgtuyGWxj4QRyiMbwYYiwYN3uy2NKuWA1FmSZ",
  "key22": "5es9tLt8ai5Ph2nMGmR466S2B1vpp6NwcuvFgEJpDBq9A4Ur1HoGiaggZ8sVLow4zvzTwdXMC7Wp2hNsTVTCtaqR",
  "key23": "5aUghjbrMc5b4f4u9737wtbNUwL1zno4WABUSD7MAqrAu1xdzXDAzmz6o4111dLUUhdGqs8GjpR39UnqJXb8grqf",
  "key24": "252SKVNxKcV5aUdJEtCwppDVJYZbKNuVvFeDYur27ZGvdi5k75umQBF7TXnYroDgyWuepc3CjWgZ45FKCzE14fNF",
  "key25": "2vf3bTY1vrAThqX8GZ1mVKrSVxSz6T8Djd1vwZM8bb1AYLn3cGhUgZB6pjcyg3HxURanyEMdQVGU59MoiFCUoBf2",
  "key26": "nHEXCxMn3oxaDP5N7JPszccBPKfpc2kLqpqyDkrJvBdTE5chP9PJW5E4axMSsw7YePrUwHTRMgbfDT6UQgawXoo",
  "key27": "3s5ucDVF1sboDp61Hrurie8SJrQ1rxFaz5jAjHnMrDZUjKK9MTsHW57vGuYC4du17WC9kLT2HxfqjgRf1jVAfBPK",
  "key28": "68k9vK5CtMURvUACZdSSVvKisXmLeiYD9PUS6aF1CgRsp186jPX55G8x8xbpSkuewn8n2G6EHmX9SZgNuPdCi2W",
  "key29": "29HmWVaPGi7iDgjjrBswDZhEMM79sP5xV7dGKsbYcb8H4ZrU7tKpavURSTQNFjsrnn9fKxhFZgxJxSUJtuR5GuVH",
  "key30": "iqLLgsC1ZVSgppJbpYmfF7pULdcSDpUfxJzqLLNLsVetqdvXVmMXNdZ6Aa6yXw2PtH3cYZvybNF7sp5K68o3Gct",
  "key31": "5nAxSuuLffjwWjZbVkFdWHAksyGqdeVj9Pidxyb5ywtDdF8WoL9xSLWgABMudjLjEFzUU47g5Jhtz19XKDR4NXpz",
  "key32": "59Ztu5jWZpjJHNAGTwbW9KzwPWKWxu4y9vNJk6RvdZ5UW9CepRwq5sZt8XLTV59NduHkBe79U3UydmqtKyd95xC4",
  "key33": "3Js5bLPWKwh2sDhZUyYMuyaLmSF1rGzVzSEw4q8zkPXzYWTuyuRShJaqh82pMDQgTqn4jNd3wrmumd9dYugXFgdc",
  "key34": "5N24ajwGgwJ6QiXmUt9ykQJQB12WYRccLi4RTvtfTcpVPp8Cycb2M4n82Z6wewLX8LUfi48ETyswYw2oty5drzVo",
  "key35": "2dSBLAoemGzdYegrhRcDv5VCkyb2Vy8zjqRyomQSmLhbUrmkBN1zt3Vpsy8kgnxSQgxz5KabUMTdgs2RWAbLXGrf",
  "key36": "4TfCtVayR6ZFFTzFPZTybcLaq1n3w3Ts7BERTH9xMQZAocLdF1jQkvqM2duzrK1RRhN3JVz7f658nFXfqwDqQ2SR",
  "key37": "5bvYhGY5gyQLtCLcymk1aoUGjQ449ZaunxHAxUi4tvTbZ6xDVsQbRRNDJkUuWhETVYJvZ6WsoXvLwhzt8fFPd6Bp",
  "key38": "5LAzHofHCgew67jjgajTqdQLv29w7bbu9i4mmEzQXfzvSjaLUnZ1njaUPz8dUQsT9Jti8WUYjxT4uzDqkMVWM4aC",
  "key39": "4JzwQo7qFC3P8GjcaiF14fGu1oN1FVe5f943Qb3dZtaks2KtCVM5HAVVrBteR9waafUe46JkMqptUX1LhnXCgZPH",
  "key40": "gvCQdQh98XJEgdVHVUCWyHhqS3QPc9hW2FFpAg8W8gwtqRt9XUBJ3K4iLQ8GziPrJo9o9ff9gDk9nDTkgEbWbuX",
  "key41": "2i3p44aWavy9GJ7pJUQX68M3TV1fnLFEz8SLDRXiHXFxzTskDkXjcUMwjU3pB2qu5B4mEzA7zaEDm16aD73Qgw1Z",
  "key42": "49JowcNLtdJCydhrrp6YdZT4fQEzFRGXb6rUbJSo5U3z94y7Ds2Z5HTZG4WBtfpJfjNAzDLAPvu4B89u4tDMpu81"
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
