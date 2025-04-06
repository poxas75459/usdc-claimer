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
    "2X2UwbXLYCpj99F7DpUy4RrrbXc45hbvF4pNTv1cskHmWZVPJT5BCzoTVx8sv73A9yzEcXWTLSwJe9SAgGNzpWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5vmiqoPBW2VfJHXa6XnAw1VRMcqBxbPNdRP9iqGgdgVFUJft7LPUzyY7wmvDp888VAkq8sUzY7RtcLewyuwBpS",
  "key1": "ez4rMBg5d5iWHcbrAa4ivDv9YYGeCrGrVAFxSVE8EiwzKphfBMPBZguvXGDydKvNcKX8kwKyMPk7VExqU1tbfS6",
  "key2": "3HE6A5QvAxWBBAxXamysYfmDXevvHDcV1uRim1SzpxkmcsNEuXhNHpLKDZeX8zZGcFHkDHpapSNCGoZudFQTqS7t",
  "key3": "FM3LejpT9gFWMgP8CN3sJHGW3N8sTZiTBSw7M8gvEZ6A7Mo9Efox1Rug5Fb7sLK1FMnRTomzEMNPEvsd9L4JHvY",
  "key4": "3S5LjkzKqx9qbkTUzbzDmnJMriDbWgnEHMAmtHA13bhuyiBrCtuChkoMgQmdqx1DeS9KZ95vn9YsWkfVPVRT7QZj",
  "key5": "3RksuSu4TY583UxYVjdeKJBgiU1hQudeHBmi5TWWX3ApCrVtyqv6f5hQWZxBpeN8WaoU39VNv2A86AELWacTFrBp",
  "key6": "3o5jUMZ5A9QQcJ5f3k4vMX8SiU7bFZWZcHqou3KwqrmWFT6q6T3XjwYnRf4XbrSqFQTKNDTMdLcezSRbifFCuwys",
  "key7": "63QVbVDUfJHT6SC26VMrDGV52Egnc4q7pRupCWgyaEJMyMc7nMPF7dJdYC1hkguwoug8ge6wXU3rhnWH2SYKmBag",
  "key8": "3b4pSc5dqQqUMJG3UavggkwaykDDNeSwAPxZYF6SmU4XtKBSh9b7qf9Nq18AthVVVsmTmSDTt1d7nSy15ys5M9oC",
  "key9": "3ek2TJMgh8HG2Fk3aXN92LiKz8nWH9nuo7dDxKobqNGNqjRPcZXECrpXXoKRkLZ7fLyrwwcRbAX53KJw4mjKdt1z",
  "key10": "3NdV5uWosYoHUrzHvkjm3vcYmq7jGzGfP6hJ3Cqs73YEuaJcNxQLtgtmMFWDyccdrjSe1Kucbe1NZKd4zwfdQby3",
  "key11": "4HvKnDfXhWUAQaPUfCQonPruse4sfrLRCKvyK88eB37MoriX2Wd1sM8WT4eU5RU6H3iNCbaYjHMFCVmZEccfA1j9",
  "key12": "3UfF23dCLipv9c5S4V1VqmAUjpVvVQaKVQQKPSqyA69mf5RJv7TyRgB5a2eJH25uXfCdcB7DA3ZtuzXmFREuQwQF",
  "key13": "2zNBf8Bs813YiMfhfAArpe5KYj3Pcqqj1wgp628Djm6A9SpbFFw96SksLiPSmqQxDJ3Vp7Eji5XqN7yTXFXihzTe",
  "key14": "3j4caQWjSNRqSVurXpxm81JKfkwsLaJTyD2fq574FHGCzt8hRCeFtyutrKTPXaAxvauDMuPpHJSDgLLohm5Wi5zs",
  "key15": "5BFQPemGT5tq9B7iE8A1Jm9TJemnwXszHvhfZSTsXTVcXcpwmkx1hz9cihbHfzgHAXe9jWkhApd3um2uD48B3Uew",
  "key16": "25JHo7X3ei1BC53d2Gi9iMoDZqDpfXPv92EEE9HeCvRNriVn8pCcJpHCYn3T4uuGNy4Njjw2dwzadBo7ibrkTKZa",
  "key17": "cZU2GPz7S7JXxbTjfQ45MVwVKgtPNQsd3ZMgWDPedVNVphnnNjwvQpSytBHmsijQWqk7oHN2TBTpmobuiVcKxcG",
  "key18": "3QkQ8e4ZD8qxZN4edcRd95f4GURP9P3A4jbvV8YxPUUM8cn7VtD1An5jvLQ9T8dxSBTNVWnfingJmqTji7oZEjpf",
  "key19": "xDmdKPVh243b1uip3jXraEYfPC6a9iTtD2qabqjodmCSWHQ4nqYNahGyrKt6i9AHrLUTRLqTAwHEq3EPB8Xh9A1",
  "key20": "4PLjMscxiQawdw9hygjjFWyx6faBnah6nMyDPcvK8p7PhvWK7CCT4xKmqeaVH4n7dzDTyNG6woATNzo7MKqbbe5H",
  "key21": "5aWwWyCwEwcpPVz4mFr45uUHnvPwqcePcwCtq8we6DjPEeR7J6nSBiZH6QE52m1ppMh158UYA5Gnc3uTgHFH7fLx",
  "key22": "3qkoiSrsR591ri2WJfiaHrb5rbS9uj6qKmJnqx7ArfhD3LPDkA1RUt3Cr4Dn1F3QwSPTRRr8qFSYF3zwF1KMsMfK",
  "key23": "5F8vinJt4umn4U6x4hPyQs5Sh9w6z4njALg8SbMtpv74xzcT5EuFtzEgf8mPWwva3KKidSDX3EfX5mHbBY6M8pFZ",
  "key24": "3wN3mtvQkyQuuAengCkJepmVnJGBpTYKyiobHKSpgN93RHGtHxc8fsGxvSrZyXwSs5rLotLmXGoXUcAdsswKYQN8",
  "key25": "2NC9CnmqU8dMxSXFodopYm7Dm4xPyHnEXCFe4pKK8AfruSvR37zKLBU79FkUKwGEgtEq5yPkxCzL4qRYMSqUBHHo",
  "key26": "WH41JMDTV5uiNZUbKjsaCgJxDQXhWUE7mmkXbWg23MpRh6PwKv8Dwh7GR1kZPhzotuB1xsgMrix6aSqtkeFCxc8",
  "key27": "4FmHZ1c8Htimw3tA2XYvu1F8wqKb3s3MTMV94cVzoHGW7EWpvR8mgw7BV8cPsrpWqD1WELr7cMLNJUicFoNcdDHm",
  "key28": "SK6agDngbRAQBZQcM4vzV7Ue2RAKV8puMfDNBHdgbXTRBrxnyNjEdRC6irnbdD4KpeUn8qmBY26pQbeTKQM479X",
  "key29": "46jG7y7eYj2QnDEb4VtyaFdhFh6HbjnpYX8it9CXouQVp3KstNLi41aq6abqPpepwgntVxiHAJc9Bh3CMq2pHbtd",
  "key30": "2kofqmtg5joFoZngWbGiHgke2J89JV4BHEN8YzXFRZyZcryfBNC8esqgNijLU8yKPSZhJhDdjmzkumzfYSbRPe3v",
  "key31": "487EysnzyEQjMsSpFXpzorH7uwJTN7BGJPME9fA5AoXEuBDoUCr1gwzuCgzEqxVNbos5s35r9A9FuEdS99P2D92U",
  "key32": "4hfSMMPZd3KZJzpfjt1GDmXLWbeXLk6TZ2NKsM94vrxV2Sjuf8ysv2mqVfa5ueXESATtjpkTGH1UXek9wSSFZycm",
  "key33": "2Ha8TqWDWQgTbFCAYA2YQzPw5eXKb69APsXS1DZ1Asa8sgYYepK4DnFb3cQkr3c2rFzWtHL49yPqfyYSSJCdqk7H",
  "key34": "58FQ5berXFFAsynJuL6TehAcnCNjsEQuvsDG9oRx53aSNPcpsyB4FedsA3iiSTJsYDZKgcbLUPrTeA6PZwifiErJ",
  "key35": "4Mxe9GspjoQmuE2Uy6YZAhTsDCSB1Wm3t9VYwSHUuXrzNkPjvR4VUxAKpPpKZJPj8v1qzxzAv2CgqaSHyxfvCnYL",
  "key36": "2fFXAYj4v8jeqJkcBDQzSCb8YsfEuAvXtpG9M9inzK8BWJQ4irxYTJwRkVQo9fvtiYMsVFiTbY98NW8XJaWfsJQG",
  "key37": "4V7fteGVxj7FMgMGGMuMsqZU6uMxgiSPfMUKeQWp8yJgbXf88dMpCqr9pavdzDg1u7qyv48ohS5orBVLZckFRcev",
  "key38": "61JN2B2kif9rfpXAvsSjZb8UuUx9a86DDCWY8gaBgxW6HwBgjy1uLye5ykEdYAq5eaEu61g3ERQJsgbmCW5VCfzX",
  "key39": "41YKpqwSDdKZYKjn7B3x5T8QadZn2w2JDb71Ko77KhL1521dFhgL9TAuHTU9nNXohViQPV6eASes3jQhe5akyRKD",
  "key40": "2DwCj7QJ7Ppox9w4E9VA4TWhfkzB77udnqPTeprcJXeVdVknQ9NTZKonr1jS4ZGHu9d6bJ17VdB4k8H7dJ1SRqLm",
  "key41": "4uUC2naC48KjeErArnb79VK3ZFhZhArm68kSXFXo7dGqprchYUt7YjXy57naSB845XpmxvDUDXqQ1imf3ESY92vs",
  "key42": "26brQHsWjrePDKw4SmiYns6zUX7bfZashzuPvZKWJZ6gxawta6p4kBPqeFKh4m4tTZ8moie2fiKM35vJtZTE6Kgw",
  "key43": "2ApmKDYdpDsYczRUGLED5BxYCZLGmjXJBC5RPBAjxnN8VVK1viUQoTs6FhrhP9gGW1HZDJzbM8g53fyWKz7qHKda",
  "key44": "qQNdDf9fvEzj9DpPfUjpw485BnPfCKqff2DL1bjs6NSEzQDMofqL5vyrtqARNFxfJMAdewMm3ZAsiLPh7qLLF7r"
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
