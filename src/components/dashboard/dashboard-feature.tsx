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
    "2JuLheqTBEwsqBdXVpReq9MQtEsUcUKr5razir46BbjqJNTJGPva5jQXRW9gnv21ygKR7TF3s7uukBAu29PsznPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrUKZyKfdnaayfynjuRntQ2Y7NSKbuABWDYDXfaBgALjphbH4DqfZauJabcUZpVC1e7kAQKdnA9H2PZWdyDgF96",
  "key1": "2AD3TZjUHXvHovkTt8qzGw3hx5Bi7AFzorup6RGosQoxsrypSuxXtr9DxZhBU5oa3YzaaE18759SmK7tp6UQGhrb",
  "key2": "2mP8mG7oSeb2EmTGceybTuVRr4BL8H29d9g69oegttVMd4nyAYgxyXRebjZDrTe45pFnbNkvJef1AMJDNSYK847H",
  "key3": "66Mh4GVn27XgUeCu65QzCtq9y9uBsssPtJWWnEqvbwXMiHF8WrtRLNSBToKeYGvD84YywV1Wbp8uxu7tk5LTCAWQ",
  "key4": "5FdifF3xWNTeVVh1DWF6VHuYJ8tKqbU1WxcECknVbLshbwE9gsi1fm8qEk6N3ZYJjWny4KZurbUrVvJotUZYMMXH",
  "key5": "iwv72hLUYPA5agEKoYxZm4KEKwNeJvEzci8napvaZZZpf7jWsEgMUPmdXkbbVLg1gRsz1Ut5rCo33fxS4Jrjcm1",
  "key6": "3MQMwUyNZQngExWqSwbsg5WpymfEh3hGfTBnz3R2e4GmnyjWRXCiru7AxL3kpnQzji4Faa63Phqw6qSpran8nTQ",
  "key7": "GocEGfL6BVQm3Yv1trmeZQgHwqTHWxQFWvZgHtizAAv8fZ6Tor5K7umwbjPvYaNpYorka2zxvkV3ML24f6MmfNg",
  "key8": "59e2DjeqYJ2BLXQd3YSoykWAwsbV9LDfujWQJ4SugwC8PMbqVvNVCxNrm6yoQ9qyFi9jf3LqJFyrs6PCRCrVdSWZ",
  "key9": "Mk5vEiGASuuQKQpqpEFhyDheD551bPi13vhFwhrq7KGRNmU2UjcaAZMpRPMkCjoMi4pycxjYyePWNuLCRFHFhtk",
  "key10": "4P8SW8mFq7hMdHopN8LumoEf5trjsU5dL76ujNxBShx8cAamehJbExuSsQbzTLM275rZttkMbzWjG3Vw3e6JfWeF",
  "key11": "2FVyzL7V5ZdPigJcQ2ygi9mnu1Z4LE5EL9YuTxjNMFHChxkdhvj2nQJs6HT29oQzn6EFjk7AD2aURFuhEf5iD6Dh",
  "key12": "3gQMfEdvcKcVxyJk4XvGuHq8iM37ijAkrEHYCjTug2vXcHm9ZWM1Xjzs7CPouLUbLRaG3xHP1yJdtyF1QF3uwY4n",
  "key13": "4B2A13CGDsy6oHzU7LmxkAwNY9AcnbWwK29iSmUU6pVUvu8r2UwGpbsw6AoDixEJK68qx8YJAFdn2BWeyZ4KKP1Z",
  "key14": "ryjzEEaGxEBzDo5mcDEK6DBQ7V6DmJxRfM1ZiWmaqkVn4rkSov6r2p7xcqSUdfg8dPNBjUxyedb4sBzk1aUfKqf",
  "key15": "GXKRZjDy6v8LuuMyXT2bFiNUuTSYaNNbEW5bwVi7LvCYXEnNn1F8ff4w61VP6Br9CjQcU4QFXGzEX6nRKNmc8aF",
  "key16": "5U8qdTvEvAdSBWgs3NAtXTFMSEZXW9xkb5abj5PHbaPTsHeA4YkNQiovLKM77DjvA8MR9Bj3aEK3geLxwvg8U47",
  "key17": "1dZJDETMLBLeoeUbNK6M3R9avSz5p227EN3XEnNya9txYRmxAqrJ78q6r8ooCBUh8XnEi5ThfoBYNPQgKSMFdkn",
  "key18": "4gLiLsUJKL6fZ6PdxhDhJyja7LPGz7uPp7PdpHPqquZg6cpWhGQCc6Fh9hadsgU3AwxznatFTSzo1o3xytS9533Y",
  "key19": "4t3XYoy2eYTT5q1fbZ5piUneW2wiLRzpcRbv4TDGvWULuCfxm25hQb99tWBEwwZY7zH6CyTPAJGRRXsWPZLmSQ4m",
  "key20": "43iGBUhvNMNcWVk9kux3hEm4sCk9GSJvVGd8EhWcv6gSgoaiTzjSA8sYDFmmyimKaa26azBbjBuzxPSnQhX5tkx6",
  "key21": "oms8t1Zvpkp3Tsij3RL3fQq6ns9G81j1zr1CH3TWBczv2PbAsZYn5cFo9kqcodoG5cxXWSJNAeksTcuCe9ircsV",
  "key22": "3U1YMHLFTUnqspx2Wf8bS7qe3DJyyGpvQMzunaDpdUjquo65vByVsMNEmo5bJ6nPr3iFkoGiRRBiWNqdHxxfuwUc",
  "key23": "592jg4hbAQSth3AdiwfnT3SfwhnMJWweM8pQQ8sfQwJMn91CD2TDejeAFXZoBHa9PG7t7ZePbSEcwU5wodHbxDYg",
  "key24": "5jDxSLb3VBTUPwcksMD1ik4jeqWkbfN75Nx4txwB78wb1oZdGkuN7Y5LarAiz6UwPrQwxz1uXcVGhAMKoVi88qnD",
  "key25": "4QgH4fDwDCsy1FPzetjZWtuC2kJi7MBhXzeGRXf4Vfn7EhGwoMXiE38QWe37mAVWF5cyd4cGRWtJSK2ZhVVSV7SZ",
  "key26": "2CJTLxmBg8PYu1JYxfQbBoH4wSwMbHeWTFcoyJkPDksHB96Cyz5Kd39YgKA1gCeVieHVNGVZNcDW8AMdMEb9tMpR",
  "key27": "KwTsJhXB84K4eKcpgXe9WWn3kn1kJLTj9cMUP8N9qbvN8oiPA9pVAhV4xmMJLNFwGjfYvF4uTLMiyPjQrfE6f2R",
  "key28": "4Q9nffiHpfroBHgqpGbAHdtUUKzxbe54wxBfFAdWSW5zGsQ1WU1Ja4iabxqPLivTyPZ1obNw2HJb4XwNMCphS1sH",
  "key29": "3SK33tyeWDUJhZ9yBTpxy2udbVwCYKtXVF4KSAwoM1Vdw3E4Tba4SEeUnWyB5M5SWB5qvtkftVtUJxSawwUtbhZC",
  "key30": "2GAak8Do98jHNAfu3jkb4BYVGV7V1ac1pV1PcjVd3eupNcdKet6ppoZM4zYMeysj9VRFP1XMvoBCfyVMSg4ZZHNy",
  "key31": "4SZqZPpNP2UnuUzGi47uHWrWC9rJriqgXfzKEeUpPsK13LwjRxH84UKGyDQLaAQgMFnB7c9greKvx5aZbbwXFRG3",
  "key32": "3115ktyrf2wZjPm7ysiRMVpS6jUpbhMZWaZFb81XU9aFEY5N2dC2j9q1r9siqFskdzDARirnkCkjv9i8ToXcEDz6",
  "key33": "4odAaar7JxUQGE9Ud6Kc4chv77g12JpH3fqdMQnwVwEyvCgNp7ZndAvUw38TMSTA8CUL8Vov6LKx1BytTaw6bpBM",
  "key34": "3V1S7iwfX12Qud9q11yMoY1d56UeEQfPYWgUtJL3LyzsHEMZDkmr3NyB8gMA3i6VQa1ZErTFm2j4VbQiyojFtWKb",
  "key35": "5vMfvq7WFFNySCc742aCodvKizS4D6vUoiUtz819Hozh8MvStmRp7saYMinqidkjZE27oDGcTpw8GeoCqErTtM8w",
  "key36": "4kxZdHqRWte6RkDwD8D5GgLfTnapxCZAyVbpr2ip1BSQftH4zCYmJNCqc4smnhZE8WUS7nbhzQ7aQyH3XosyaJq1",
  "key37": "23CW2mdWEda2xvY66v1qWnnGB919jdV3GfvWrE6jfPk9EeW3D8HsGfwBzkwLeisY4k4fpgbwhGPLqZtXhsms5L2z"
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
