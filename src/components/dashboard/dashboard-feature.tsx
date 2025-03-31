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
    "4PJPr1mYnCuDfD9Rd5uYHrsaHVmTnnyP8bN8NAT6BmKRvfFvzzu6Z5X33Q1MYeTLPUgNe3aQQNzqhdZrJpc6aV9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrKHgUrsHCmd8WrhtBNw3CXNTdS7LiRY9es1THXUQop8SjGQXKQFG6rJp54c8V65fvrqmraEgLp8HVUBkBjraZs",
  "key1": "hh1zK37FNRbaHRFdrZECAxswxBsLiNRkR6d6frc8BPLbchwKsA9vQznETNYkJ7qzf6D3HrV8Bqx5qKBMxHfACS3",
  "key2": "2HS8w3irzR3PVHhe4wSKCmqf3rV2WDbjzEUVeFSW5rKRa1nsgR1gdVkfWMf2jC4DM1wY6Vk1ifxFjcjtVr1HT6mV",
  "key3": "2YKjtLyMQrS4SEL3eCZmErt4EiEYkt3MXcqrjV4cLrupTHRkNC7odF3Evs3moR49qg8z37NHtPPFfYba1fJ7ozNc",
  "key4": "2SCRzcJrjxpMHUJxpc4n6nZ22BExKEKFASCn6dSA1zg5ajG1g91w3VxuhaFACnUbtds5qjwQqXfpEZox4mbsvF5V",
  "key5": "2ZvhsUsqGifynkRJdZwbzVuixbC65Xk55VK3k9FjFQd9m4qPoG5U7f3WQRQ2ppc8rhwhvCucMDKoxGmvzrojYfJp",
  "key6": "2dch4G641mDNWuEjRoWNPZug2HkNRF31Yqo3EBJMM3rD2LtzXdqBpzFNHGFucgeYLjo1uyuUSSC4Tnn2k53gNSEc",
  "key7": "4yU2ToVJ42Vx4hme6P7bhZpVV4VnbrGt8FWBqeBaMqbPDZbCYeopmozxg3NkodbffkqbCr9ME9gYm3bUm9ronrdi",
  "key8": "64RfaiiWv5YZGJHpejKj2h4RDtZLkKxYQzkfoZqCZZjUbuHb81HctfryPmVGrZjJ2yNMthu5y8qERxyjxzAQaxMW",
  "key9": "2zPmF5gpYMmAtZ4vQ85cA8eViGRn47umKwVD85jxt1vSmhr4fcgu6VXak3jeWAz3D4vgZehFD3MtfY6iqYieM8eD",
  "key10": "tbmDkN11PgUinPdvNVfNPBWub9WVH3yF3CacAebBn8EHQpKBmHRJAhTamc9Bc5wsJ8vyHZbDeCSLSXiWzUurHoB",
  "key11": "3b7fmqcdpD8QDxuuyDHPPJ9vVTEtwcsRq5YtEYP6AZwMWrYYqx8LQkeSK5eQGyaBTGL4YYupHqRTQbLNpTSj4Dt8",
  "key12": "5B2nr58SzqCud618ygRhMLAvcU24tAHD8m46qS1pVeUj7op4EqWxwWPdEcJV8hSQvdGV1VsU68kkcBwQCUVpYuMK",
  "key13": "4mmy3kkWeboGXecwWzTHMPLde8gw21dWMswg15EbF9qtnH6WpzCo5VeU7ZMNsJyd9v8xcWs7eyT8KUvHG64oRnP2",
  "key14": "24VuqqHK8rTzitM7jxC4kPg7LrKC4f82y7PWiGzKJB5uDoazPTWddW7L3NdkmJaDsLUxhyuiYQtMVrVAwwRBxSTN",
  "key15": "4NVppeRManBfEndtbhL3QZEFY1zFsiZ4RTwYuvbAw5xGSAAT8jGKv84MeD8ZDXkjZ1stxgrDXfTSSakgKZdhSp76",
  "key16": "ExW4f1MU4QQbWjWEMMPicbeuqPSReuk8f3PpcCzdCJ4h6dgJLMeJr4qSyGZJL3knBSeks24qGVcEFvF4fsBfDcG",
  "key17": "4QrtLXNXoh6j3kuxbG1nsoFQcJurVM17KwbpWWcz9YPA4PM38AroFAok6PQJg3VCUyDmRtHSqetLBjpGwDWMnoBP",
  "key18": "4PG8JBpsrd1HSQP1W5B1sGpYZhvAAxaSVuFgLwcTBSCdLYFjmxVcP8NxiFod2xa4ZgLEvh1oUxx5Lznx7zVEEYnT",
  "key19": "4PCqSpjCoBtHKdXZdS4fLxDXxWj4LZ7fq3hJk1PA4DVcao7VwtXepULfw7yVEgYhJHUyeTW5tBEt9zUtcAEBrxcz",
  "key20": "5kCD1qmJ5fq1vd7KHuadZefUM5Z4g5qBqH8xgJNc2TDwDcxrD23RV2jfh7cffVyXjc38UHsCDEgv2ZcWd3rWFUB8",
  "key21": "Xh6QNz2UBUqWsCYrAVx9gDNLbJaGRDUbJQvCGXwnTjpDcH1CfhgUkBAw9yuArWgwmBuXBvED1EsX2p3W5GX6gbX",
  "key22": "54s1UyjRA4xLnEbf7XqhmAsCBz4KwZwEZyXfuko6UXVEGGXNfYotLr6Rt4fL62DdgsjcY4supEXZX7PwCxEhGDHU",
  "key23": "T1gGejqjQT9Wu7cG12SsP4nFDyDYDVNkuhgZ8AF2Tbg2EnE2Qzyrt1e5adkevkHV3DyWRd1hsHDpvej8ogEWuGF",
  "key24": "2dehiPMTzh5cVQPDTzRnptuvnqkYPkjmPEmN9vEjVzXh8SASjkuMU9BfKpQW6gkNCimXGDwLRm47dHb8ti7pLL5o",
  "key25": "LorNJwkoFr8gm6rJaSxiBmk3eG45mccwXrZ1fG3WnmLQsZdxgzAyJpxJyUWer33AFocJQirSSjCTt2C8UMjSi7i",
  "key26": "2pJK18z8yQXwpcKZXb6L8q9RVgudSpsn6doQvmLfnyiYbe5aiXZFbTZv5CadDkaksgiuh1iF73Us3ZEdKT8Ur1c",
  "key27": "yLv6z8QmLjSpzuD4PtdRk1YMh3RxNFxwuojaGJLhmydWZzKKpzMD63BnHTJY4kiKFFPn1sb7FwtZQXX3zK3sGgR",
  "key28": "5ZXWz2PaCFrHYf4q438U4AxnVSsVK1T4A8Lpwb5To4PHkM2v2FwwQxVCLcmNxxFxZHDmVxKu7epDxvAp6GS6GXeD",
  "key29": "oarcJyN8ZG7JLE9QEt6TtWJRFGLFBmEWaEcV2apKUef2nMVUWSRbgsFeVmxUjcBoY9Ktpvj7YsJfsAg77jsvXod",
  "key30": "4d9jyTMTXw9uVn6gz8JvP7rcoXb3eeZDmttBe3fPBy1SU9T75oMVyndsZJFkJgTF6HPR6CPkW6VtXxRbZxJf2sK9",
  "key31": "3agX8zCa8nsZ2ct8UtvtJHrX4dz15HGy66AJYYiv543CzoN42LKe4enCDpbxomb9aRhs1VEB9WdhW7jbe44a8UtK",
  "key32": "3dc8ZKwSzGke3U23A4VKtxbJH9Rmnj23Q8ayoGyJoVbhSSGftLGrRNftNA1RuhAYdbdpCpwZ5AN2b5g2RVx2CHGP",
  "key33": "3E7KrXCGy9JReG5cR9VYp9hfQb6RXFtZd58G5aSne8FybCacshqY6SEUD1PfZsH629wJHGSAnywuzXuntKvBvo3e",
  "key34": "4q8EVNSuoxfCmiyfA9M12S5Eip4y42GLKt1PEWVZS153sUUMo19Y165KVftY2rZGQn1otrewmajVeyrf23XXSxsB",
  "key35": "3ycGrQXh5F4DYsjLwbz9XcZGBYe9235nzdta8KP5A9iJ6mtdLvqftpwfhNhqnuyNnTLW8nnoEEyn8ibQVmXtfjEr",
  "key36": "2huZvoTD82tjhUiqdKp9A4ppNLB742pXy3uEdo2NmctVoeeMQdZjfBwdU6zqtzyunVD42ftvBvBt2gfB8YFWFg5B",
  "key37": "4CwCvm2ChQPxK1ikgcgH4AEsx1oLjnvwKxVLjVpaZaqtMubnVed4ZZG9R33Mbv4gaYvbjFNq1HH9iUwcafU6FaGU"
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
