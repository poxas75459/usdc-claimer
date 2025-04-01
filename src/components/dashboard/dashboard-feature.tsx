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
    "3JC1QkS6i2EaatCzf8GNMciTLCoDdwqNcecDX24aC8Fn5Y9wEtgHs8kHP1PzrqxivRiEKXHr29uu3wpLrWNJeusC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWcsbFHfg1u8JtxCEkccjoT1donfqUnPw3bBunEzHcvmAyqHf3byHpPUxjofRRPQjQv3yeqhVdqBYa6zown8416",
  "key1": "QXszNqJNrH9nGJtZ8kFha6QnPVPNd8TCA6M8agtLdBRtqaAVFjvBNGMKiLCfCgzRXHqrCSxeodh6B35eYfTvoHB",
  "key2": "2spamvDEtiZT191NexB3Vehikt26uBepjgjjsP7agoVYJUGUYo1KQDUWvjmXzgvL6fGDNBgFJkuxqf6PxkUzVw7D",
  "key3": "QFQr8QB8aCsc9QcxwkKmeGWYi8wnGR1dnGufFZnSpaCVkrKEjHShetdztrY72oKW1zvtkbhfjhpuHUyE7NXshpG",
  "key4": "3C1w8Asbo2mjngXvbkqTFrTbRNu3YkTEKC5Akv5aszpa3xMWmTje9w5TyVJz3n859F9Dpk2osVr7MnffHx8HZ5mf",
  "key5": "mDfyPW569dPruLwitguszYSqiLhbC9ssCz3rbHB9eEBTujfGPJjdctFnLsPWWcGUgegNZoi8af6ZYXzuhykgJjL",
  "key6": "32HmVP3qCwAXpxVneP4d1hbRNeHA9s253QJYYaL2G7zX5JcdFezzTUuuE262CZvrS6vVsSufgFxywJyrFjzvjd8u",
  "key7": "2dg13NSJPcBFaKs3HaFQ2VLT9QMdkVVHWarZVdy1jSxDDWae7pUW1MBpZnjcZ5Mw4E8YBCdhnWRpTThysc2Kvuut",
  "key8": "4xeE6L5ZeRdvmUEeoUGvArRQ5mqp444Xn1prJdpXRDbc2RPFeCmphHPQ1utergMBUXN5VVA4PgwNpN5TED2JYHGE",
  "key9": "4vkH4DXjT1jVA6P3XqbVduiafvPTyCEstXXaeEH1Za15Bz1YUmob6tx4ET88frdSmKdMnKCQ3v5Q3AeN5QzQHxSE",
  "key10": "3VEn7CNZcjxsYizdDTc3xiqTK1NawZYhs3F1BajyQk8sir1GQ727XhRc1YDCsHx3ENGVgEPYNFFU2zzVFcgC4fz1",
  "key11": "5djWZxif63vK2YeKrwLHyFv6CPkkbntjVHoKL9SoWgpjoPqPqTpM2wGJYdGKmcZx22oLiL8gznUnRP8pnPNhheHf",
  "key12": "4Qwqzb38VeHS8Ubvpz2zrQ5wT37NRDwk5zHXmsMih2PzqGTYJpHGmHcSbVFzsQs1svkpd7dqNpYPpowi5WgdGYpq",
  "key13": "vYjSA7YbuMZcFuuxk4UsvP1Akeknr4B1FwVHtDxjEwZvuj62h8A3o42ZwfFZRkq2CHp2xB17EFwdYMMx42N73Th",
  "key14": "5TSpBCgZMyFrBSgkhKLvcG4X1Sw8GcFHWUNEeKNR7fiTwLCTSv7YizKMxwZQ2d9PqcniDhsQzh8qpdHpHFfpFcEU",
  "key15": "2hiVp6UvxiHqfproQ9qMywFVVbWiqJiuw2oXDDMwvhb7wR4fsKux9CHBnq4FWg7CYQ9fkquTQ8GPQ4KdAjDhhnxh",
  "key16": "rZ7HJNeJs7nwXA59VukC98LdmvETV6dPqRt63CLEyJJwvxPw4LNsSReehPbYx4LbMgur29jA1G1Hf6zfEfCToLK",
  "key17": "3wjReXCTQLb9ohXGzYwFjYnoW74AZi8hVeuMSy54B8DPgouWY9d3Zf9TEyHqupa9z5W1nC2qfeHi3RRg1y6zkiRi",
  "key18": "2A2tyJt5fj1SETMR5ZauyHipt5EVNHqXMSopaNCVx4muGZ97FdhiB4SrXT49ESfwzkuUybrYTGRNebwaGGjK1eaA",
  "key19": "2VEKjva54Luam3dbNPtainBP4VXwzZwXMddMMXGACMKZj5buQkREFvBH9kAiLqtV6QrYeXfXtzhUkuGDAKaC5Dw6",
  "key20": "4WrmejTHiuQtSxMMnuKpQFQZFWKRXqQUTTUwu89vqiP3thkEK1ju4nA2g68tdPfg7GTvFxnH6axE5WQcuP4kVKGz",
  "key21": "iiHqLEWLdvD6DhnHEwZZdnkaByVibAiN9cqaP9VAKNCh94e2baWDYLVvQdiFAsWT9Z8NkJgQZWHrQdwEqUoJsvX",
  "key22": "21RyxjthZPGoHdiX8hqaoeFza3TBwyQoo47984ngaHdt8SnyQ2bcVBjgDWdQHXfHs7zToR5yjJys1jGkAwGDEa6L",
  "key23": "4Eaoo3Prmb8XrLHfFKrdsAw5seTV1suKDd537gMD7t2hJNWVX9Zqi8VRq1CXnCiYXgFm4bth1HfMsDQfn9Z4PP5S",
  "key24": "2XtV3u9UmLizM2SNNjRoC5yTaLmbpEzPc2vM4s5kHGedqQBFoq38hhRHgDorJre3Mm4Un8FTeBLkr2ZeDm1J6sGq",
  "key25": "4a31sEWt4KxxH6bnoSwWbkbXpuc9dMtELvJ2MwPUSKtDxq5fELPUcwpc77mEC4zrtSjKV4w7mNJBKbngACx3XymG",
  "key26": "JpNgFrshhoAdYAPDKMQUCqL6sD15ExgyycWux5JU5uuib858XYmuBqgZTmRwgsJDhpk35STyYh61rkBKAsyunrn",
  "key27": "4pgqLsQUevUgoMK11wPsJebecdNuCKQYdSNFDxqH3FeSvLufTe47h2aS2nXUpNPKsYmVLdKUWK3R18gd4qxkJavW",
  "key28": "5Sje4Y5kuhvnjsgyRtdrRLS3sgxa3pwZorAoBVuZhs9NDUvxXCQumW6vS2HwoP8CBZexJMkMfKVgCN1nbsQ56vkz",
  "key29": "2NbkKVah6f12keFCpXx3D9HxS1JX1xQLdXYKzM1oYvqzn9mp4NVsCAgeMSY69v3UM56uZZWz2RW19TAeqmr9uTa3",
  "key30": "ru7XYxQSypACjmQ5ccPXfDweTEy2Kobh67jgMFt65VTz1Fs5uT8a2or6bHnCfZ5KYAq81ENA13NqYPK2j46X9CA",
  "key31": "c8ot38Pe1GejwJAeeHqAXNzvYCedKLNA3prhcYpVMNVToGcbUn3VoFEq8Zzcu1s4znStWjTYQE5doPgdU5dgU1S",
  "key32": "4ENLVzdvgWw3zmf51nZA3RaExAhu4vw8gj3v3D6XVunUwmHF9uRgcESQ8Z3HW4Z8HTpC3hrnqBG5wpBDktb9G33e"
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
