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
    "2Ed28symnGBizRjPFhyzBremCGteadiC1B9KWvH3aFGEx6u7er4UUn8M4ccHKLrPoBbgcL9aFycqsJLWhSeB2oWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNFjpLbdo4ox126B4ukEY1EVCjZhDJFiGViFrFrrKY7FCxdeDPS5KuXQiuiRKNhr8rHfZaPcRTT5Xin1Zw6cmX3",
  "key1": "2DBTw8snemrKHDW81gz2jmPt4FBGqB25VY8HLiJsiv5xF9JYKxpENJi2bdLrTccJBM25eMf6H6JYcvSgKf5196oU",
  "key2": "3jbXjWtCaMUpbTFxKcuk6J5Dkb26UbLyifgbhXEgQHyATg9xUpz6udzoV8KtdSRqSUHsWC84M7r5uTGA3LXBqwhk",
  "key3": "4JL3qCx6sAr9d2tXWVZRMLJs1Wwzr5Ywk4KGC7cU6t8srextR9f1UWjrF9NdCTraV1A46avs4gwaDiRsR6Rsud31",
  "key4": "4HQAonmQvXXNZY6H4oHWqqW4J39mKaPxyphpb4pEArEB7JsDgSUrZ85V6hZUTKguNRhpUBuZktBXmi5BGzovJKU",
  "key5": "2RH4ZefUpaCUQiLuzk3hNookn3yPif9seQyPvBvnUDdkVWLVhxsq2G23aSLwqwJS3Lsos5kUhRft6S8dxScUU1CG",
  "key6": "44KH4skb2WiA3pZeLYkxyieYekYXHUUCQ9oqNodxM4zUYAyp6upzEbSpz4rdwENQmjsGPNgF2qb4ce2DZr6wGXSm",
  "key7": "32tV6wToHK23JfPXFm5NxSZYShyVyhg8qAuHxRhub5MnFTrQN8THvxZxLM6My8ziHpnjB8EZoai17eV8CrjvtGgX",
  "key8": "LoDQEDqhDJ2nNgsTHsueqd8BZZ8wF6rK7C2KdJLts5tr6DAGs5B2PGNPZJ5nrnBiAiDPp9TEyYT73hE4rV75wTS",
  "key9": "MeaEqowvi7shkd3WBVJ8ZMkvZhr7yL9q9LGSo4gLuxvmrZzh2DQk7jJKcA1X3MezRMSoHpEG5vLMB3ouFbLooat",
  "key10": "2ujyyuzZmpLq9tFdm8Y1jE4szT9NF5ByFq1DAoJCMrvSpjxgBFJ9zu4bDDe7J6zc7LFLYoPYPdPUekQfCRM2ij3o",
  "key11": "3WM2ucf5zdxayX99xc9M1oj6RtN8tMZuhWmqfDgSckMBBhFyHrrQ6LUtEqG7oAorE5xzeeQA5ysccwQV299oiuU2",
  "key12": "65yYuWPGQt9A4ynDSRpkkKWpLaGpdPEQwmM4cHenz6d2Xq5phXk6q3ed8py9JZaNSNDykWctjnnfjQHBP7daWWTN",
  "key13": "GUQkpaE1qCspKFvmGruW28fPDCefm3XhSM9EXgnQPQdWXTYQXxhhzZ6XDi3aGP2mTJv5G5iMzDJZeKe2mYPMi6L",
  "key14": "2jzYASusqBHAab88fLjZzGmZcJKVL6vBBFph9zRYdLBbmov6RLCCBxRVYmGjthNQxhQcwZSAjBMDNBVTPghHYNha",
  "key15": "5bN8RajUG94zV5ph6gWWzBGwRBeofBD6npf3LBE8diUMbqEKfGCubTPHLgevxRU5ApQQMo1ANw6nWpRzsoV6HvFU",
  "key16": "4CTeaCnfiDxaiUe54t1iFeEtM7kN1QjiJjC6Sedezm8rD2ik87S7GoJTKB1JPdgUSTdMPMU5THhNHdswFjwAj8kj",
  "key17": "2pGSkqPNV5z2oLzLdhUJM9gTjK5x5Q9ZVLoqY9FbsrpdJTJZgKfmWQKJ3W7JGLGHrcFkdhJ9JHQVw2Z9sU9FHv7q",
  "key18": "5LtPkCVk58EAgiKKtLXzRcqDxZ2eeCZP9B7jVkro7WZFxVSq3S9SXBt9NA1kSTdePxBC4m5A9nigj9Uaaa6JEAmQ",
  "key19": "5YC4uBRJkyTUMSg8xNycbTMNgYUzu2bRagpdhhpAkap6gZUykzhxyaeqBWa7QnF1weNqC1Cd8ZCyVtbhvH34LdTT",
  "key20": "4FA9j1H6gRy27TQk2tgFgeHw1yZn8vRUquCycnAENdQdQPvTKmn1hNSJH7TZc6esWzhakS2Am1jDj5BSx3XMgmR2",
  "key21": "2yfupqpPonj6FRbBegsTY6Wqn9aWsDCV7aaXE644gn73aHvfaQytj6VFfnvDiDojmyTZeWXkHX6HQoYNyo2Jr2y",
  "key22": "5oyZHYpymMUAutrRd2K3khVH6tuj3hWGbWn3uHkxxxLPczg8rJ9rexi9SbN2ZWezsoooc8aFcC9cAAAcWupMAw4r",
  "key23": "vDHdw2N7m7EPQurd4utKEBCzdGovxuUuMEyjQDuJ5CSkT5vQ68KmB3JAyc5fm7uCFuAAXbY9YVXuX9WweQH8YBF",
  "key24": "yQopnrwTbEcyqvGSpZDJ591eQ8Q2SgPKRnwF842Qfs8fTre7KLnaMf8wFL3F9E8opWZu9U2TxSV5k5QmfYN6yQN",
  "key25": "5KDcusDwbEGWqP7wDk3upduZchKqtikKoC7YMGTka3VJFnfMmhrnfyJ4FEUoBzPcn78DYMUDGJ4ZGwNGXj7PKd58",
  "key26": "58ru4aPRpcSSwuxg3bbASpYgPXTM3iQR7iKk7Q97SL9YLGEknk4TAzH6jocrT5QxGb7C6Kb25FzzhJtSjN3A6Qyd",
  "key27": "4nXzTRYUHcgvWRZ2ALyKqHAEvvj4Rtv6vWh7PPPDmSsKhNNno7z1hH9EovzdFGrZ6BKaaoaM1FUAbWszZds1MuyD",
  "key28": "5DSnoj14KjVFnqQauT6d222TdqSzPn7Sfu9EdGy2yo8eL94Qvsx8FeYo3zGfKzBqYEshASfsUfAsMMeU4iASo3Ss",
  "key29": "5cACt4dh4wWrP7BurKkVDhBoQ5spzZw5n68DPke1ZkwtK5pHc12Szw6ZEWAtYEkvUxANj8MudfLfoSSuWnnETnT6",
  "key30": "usNV62tsoLrJTG3K1Kejm1gPhRtZgYCTPhK81Xnmzw42hirxGxZmsKuZfCy3if5GGjoHnjLH8DVz6uE5SrvwUMD",
  "key31": "2YENMTts9WyKGYxweGWNvnyjgKuQYiL4hKQ9A1D42hm4sBGmGf1UW87i2VejkHwgoJUkLidUoa6Y8m7mvy9FU8Dc",
  "key32": "5ehjn1QUyLgg32AQmCLAQoXw7wcwh1yxAVKcZWGKYWf6j7gLmHdmi8JR49zouCYJkZxrvNmxCV7B7pSkmoQzsTPu",
  "key33": "2EjymmcbR7ZjBfME4b8tRC3dpnA6icyHpGg3kmqyPHJh4Qw8arhk8DHGW3LLR9Pjpr4NXZzFGEirrFiQHquseQ3o",
  "key34": "mEqXQkZ8jaV2JF25k2rMBBpyGM8ipam891uTKStP1c9tURvXnoFE1ueRKu6zHq84YX1vgGMtK9QawCg83hZ3Nx1",
  "key35": "2jv4Q8bYPSrSMMJD1zBTDmp2eH1pVh4xrw4PkTwmuQA4A1qv6RhcSd2F5RdA1PLJ6Y5FYMZ6kwZBQADoToJQqHzk",
  "key36": "4UktU9frwjYM9Ep932js86ZckmdaHF3btppfVjMT6Hr6AXSGXtuNkxbx1LwXYzkLWZic13d2XXh3H6G575Gggx9r",
  "key37": "2rwVkGniNtwMq3n1pFMp9hkFwnzCvV2ymWhVB9msmERvirzNt96RjEuvrjoWeWzbYYnYqqgzP4An5vYaoPx4AhKm",
  "key38": "5eG5P4D2kdvhWoz2xfNTBu9DwtpxzM2zNdDKu7HgWyZeKEMLvnuoTtKSoHiqXwBQdddZguaTnGRVU2BjTaeRLzF4",
  "key39": "4Ckc1C7PP33prVA1WL2GxLsqcsAWVBZou6v1vWUuWqhYnaikkKGtz7U4vxucbZdZzVAc3g36JcJ9SCYnzNgDXukF",
  "key40": "5yMmQARRB5UqgFyMZ6tm6oiiQRsY3oyRSPKQ4QF7GWbiTu1RGXpURgRGwko7ydhmQpkM5GkAu8Jp9unq7A2NRzw5",
  "key41": "2osrqJiGLWHysVXZbikW3DVF6oby6Doxz7Beu9wGqbsCGUAY9vD7sKaG1tg7SQGu5nQuRps2WzPk1pHGj3SPPTNK",
  "key42": "4jyZZhYpxACZ7DSKkEFn44iH9A7GYMpoa7JJf9bi7suw53xYAGQLX7iwxhQHTX4WXEkgvg6kwWpFLKFr65ewk9ku",
  "key43": "3nQYfUc21MriN7WpnJAG1F3EMY8C1KQs9zxQ8RTdbNMeouPgfSG8guKPAMdXMa3TbTza3CUFhKVn92KQ4jAWNS6P",
  "key44": "5HHdyhF4StN6BRB6Dt6nGvyxxezVaQqcA4yTDHEdNbnfeSCnEkc3xdQKqZ8ipVipEMtK5YzX3NRAL1pb5Z3Xhtki",
  "key45": "2sJk1XiRSHJGx9UPvy8cBE49hhi9HvdVS65C7vucLGpYuKQS2No978EYWanXoxp7BW2EyLvMMRmJkhLVN8qcpLXk",
  "key46": "jzQ21sRgoPZVZwuZS3ze4UexZcA89ykpDLia6gVWHPwTdUpegJaNu7wusfKkdKhH1Pa6G1eoHtbyh243iCgbnUQ",
  "key47": "5ztyMnyj7zh29jB5wfzRYRGbC7saXNqg9qrAx8euAgin8tRyfTsozZtMSAQhFYE97ML8YAojUcDY5RKtkjvn91uT",
  "key48": "2UtGNYd4zpHnvXhjmVcYs3rqYkJG1RWSbuyRKVBdmBWLF9DbuE6Lb94NZZViqsTkAtVUjj5ZHMWxVA4913d14ysH"
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
