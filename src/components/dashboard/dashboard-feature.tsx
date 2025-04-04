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
    "33Z3s4x5fB6EuocmzQFnLynmZWvMuWksu9JpyQqXPKGrU6bxMDiurEZHi4h6zGZpigCeyKzCdMCoJiGnLS3FwGWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KR5VXh16vqReW8hgLdnkWe8WBswBWSLzmEgePMs9atYgh1yqzTzZ6K3g3BagTMBctK6GNu5vtGGNaYt2MaWxKAA",
  "key1": "5wki86HF7mjAE8PFuVuVDMP3Vs1oevuSRozpuUHtX8iXDuLrkwEW2LjgRCT7uCNsridaLyBn4mJdkrcPtctfayrH",
  "key2": "9xybsBDbZnt9AGXqe93L3oUt6mbVijMzQQMddU6FHAgyo2Eho9WCP6dY8xgmMJUa2UcbndZekyn34fmoMLyDWnU",
  "key3": "3c2vGDDTHjveso1g6xLP6D4fioVh4L6TLvV4bwichh6HKaWF5HZSHa18NFaHZyt9oW39g4v2zxnFdexzGMDAcbUG",
  "key4": "5bVSrdKtLUGsPJqYoSqbCeNbYpCWEifwhm5PiJQbTs5ogo1dBbjQUGQpG92H9AKQjomvWC9SCGYcjBz5cHwRD5K4",
  "key5": "5QexNnd2LwmuL8ESuKWhRsHfPujbfhLTRQaA264uQzTFsfMaYhTL2ZBDMnD9mzgKGjVayujgQMqZmRU65EXpQito",
  "key6": "4P83s1997i26Yoe1PupwYYMvDowyH2MRDexwgdMgHTf2RdQ87YJB5bzkKtMLjaktjQ7K73QcqVPKP8uMXiTdHtk",
  "key7": "4gjTTaNzj3X9jK3YheMTwvk9nac6mXPAsS5mapVx5A2ZeKK57CHa9YZwFk1LiH9538xwJoTpxEVrzhjZkiDqVhXn",
  "key8": "4cRbkkerj6fPHo6yZ7kjZmTbGchnq29u1LjKDrJmpQyzUeB3ADDxuSqAvjg3ZU9AJfU3ZtHHSH6J23moF2j96h8d",
  "key9": "Vjj9gxKhF8m8DcaFedv8FQnWCrhrDaXnj36rdodqFftvNmLuYcJ289ABXWe33YwUbjAfhbJM7neY2yKXQj8qpN7",
  "key10": "5nsiFbMWpG3iKGemqoswoh7ftpPZ4Ud6Y9ydQwzrBc6Eg3K1Ecg6h2fs7fdzcvviskRccsRqXaFz4TQZQRLdxhv7",
  "key11": "4ES7ayH3jm8KLH5fXcpsP6Gk8U9puYbWVMYJHSXBTHNBj2rCaUBVZTncCLE8GjNyGdErxW7WUxqZkbGgYPWvNwwn",
  "key12": "3KupbBgrH4d3P2PFMVeZUatL1GWCaoEGNzZpZyGY5nK37LPsupWBb2psoyGfQ21SiJwGBq7qG91vKcMs95zJorqP",
  "key13": "2JUAURwRN3UkvKiXH8hxCkGi7VA2cNaUJwfRHBTZKKdvd9EfbDapABKdVfvftPAN6WmKyrWs4qkHAtB6i5VRR61Z",
  "key14": "4Jbt6sCVCUi4aQpJnt2QrGnfe1NgLeYJkbwFY92698RY7yYvaCgGfV3zBFrGGLMirAr7Vhu43SxHX4TNBDCQQvmB",
  "key15": "4ddmWGkWeCtu1TNAc4EoD6F8FXTsFbUvKEtSs6SARC1zcyLs6JdPRYPmwZQfri8JvCSWecsSmWGcqBm5vGFrmJpN",
  "key16": "uW1KQmz6N4TRLERQm3r6nWCZWc5Am2dcJde13fFDCXuM9mbv89zggurSnK3ZRrtwGh15XpxY4jnZkM6oDe2aabL",
  "key17": "3UU8PHdsbAd5EW1FBm6QpNUcTasiGmiguc5Hz8Jy5zhQxVwfRcoaF1fuSdCvxyFW46khRJGw6aPvtsa2JcCThzVL",
  "key18": "JGdSsjcuvDs74Zk8SQF8dudVnef7YFfzrWNfCynv1srAnTe25N44XQgbuHq7Y4bmy3n8N6gj6SxAiMA2VKvPcf1",
  "key19": "53naBJVCHmVgH89ojtM7KNzhA39ZoCU2ZJHUCb5g4qZ1FD4PSBq612RmHxfkLjqk1TJA6SJP4cBCm3RVRb9Zpf4Y",
  "key20": "3wR7RmvdGwmTeDPgeDXinSZx7yrJkgzcPwyNSW7SJgv8AWfVK7X98cq1mz3WA9K9SQzp55NNRS4qLxJz3Usd69jy",
  "key21": "DD1onTKn3p8dqzWW9Wq5kMDF5DMqSeY9WKXZTwezS85eD1SnRnWYdrBJXZnDjvzL7hmJQdAqYiSQJ2mrzgntBgU",
  "key22": "gD91ZcVFbHu2EXw9Em4giuoqvd5FMUZcsJqBvURGsSvkE8C6Lsj5QzrcfLoo9PfgMkvX5nSXmMDLwozS6D6p5iu",
  "key23": "4AK7trFnPoDFviYugrVNYXcHE9dpKG2X9RyVsDMWnKUgnwUBMYop6Z4YabDkrKTgUkZFsPKofcR7imHZ4tGYKYi9",
  "key24": "Fx6wUHpQRTokixqQrEXQ1HvrCm9Ek2wCtZoTY4vENPUTP4GHPfx9B4vRijVVz6wWyPScM8cpGbmCbccgN2AVy2e",
  "key25": "3hDVBCUB29qRuhSs9FVoNsfaqVwzEYYNycRQ8S1CuTWVcKz62Hc2h6PTjNzjm5kQRkRPjeGgdEAvnjcBKQUt2HYn",
  "key26": "BcTRFg9SGrrd8bsquNQUVLgfdHmvwZvM2T5oesmro2RxXGmdLQkyApgkcmijdv5VRHTxTDyzRwvyh28KGBkg4oS",
  "key27": "2Y3gMym2iywRnQkrcpKzsPBTZvxtVFqSLjv5BRGPKLRsHeBW6hjyWp3pVPXyZKa2ZShXLqhQpVGqdCf4kjVGyVRP",
  "key28": "4EfdB4M5ZjYaJGxBJcxJ4ByXaimRQR6mHk8adeSS1QpEkYXrp7kMixzgLghmByCMmNC75RVf3toh2nPdiaCXt2KP",
  "key29": "5AuP5b1Sbp1yL1moJoRRM45Cx1ToKN1JwT2ZDz8zzdKMmjdsQSZVWBdWw2GY3txj9ueF82Dtkweoj3rBftjFhNJG",
  "key30": "cgV8RkPJFuZaNiJDZXD39RB5ooFWUzR5Td8rydhvBik6piT4XSfBGKjFTHsZj4ZY3v8VvFxw16tfRVsMACzoL3Q",
  "key31": "tPZ1vNFWbNLbp1J4jHXAfqm3QPWesZBdyPKsFS89eWFTEDbkGzM2asSBDRJJjLUArFz1vDhuTPXcFX5UQT7mhna",
  "key32": "5YFxkBT5kSzj3swYy7t7HQTqGPA8pPB848Au1oVMmA9FDih6VQKHuJJXWNKJLyjeYLNPymEt5RRu85zC3LdY4AsR",
  "key33": "5E35nMkLZ9Lh9rTzLBzbM4PfLawTLAz7doJnrvJPoxvC75EYLwexwCaJS93E9WqJiJcN5ehGHAdWSJzth2nBNsYg",
  "key34": "4bgQRwaUL8iASqnrQTYTE9gzEeAgB9KbzDM14D5kT1jpqDXFohavC9DNz3eMTgHf6DcUYSk8zRHEkJWRsdJTLgmW",
  "key35": "591zBwmMC9btmWcLZ7VrDAHjdmvo5eqh1yGF57CyAR3wweGJUmtLYBj3FkLCHuhnhckEWF8sgnQB8QcMdrQw3hsa",
  "key36": "2TmUduBfTVngrL8w5HDoEGS2WX9cri7e1RDgzk9kgkP3Akq4a5EjQKw5zkuiGzko9vic8xJXGUnanrfKAK6K4iHN",
  "key37": "5N6XrjfhUz3tCxQKKXiUmd4HRW8QeDt5XS8FUUFDYkdsQDpgxFYwZTJDYyhxb2uK98QmLA9HmGRgz432wmxaFDuc",
  "key38": "4SS7qjtWbziYmJdYcNo5maq1nrS8JTB3iW8DPAEGygKD6jSDX3PRYg2CPzHgCjXQN6va4q2DEsoDMdf73si5nds4"
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
