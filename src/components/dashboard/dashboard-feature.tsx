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
    "44ar3ZogvWWy6nXkr1xL9tYHFkBdj6DxbGazUdAw7FGZQBe7b1Yz76CNrCxjjHauuht7j3m79fzdKZAwvxZpwvj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G6rta4YzJ9SiZwibp87gyyFMLdWsUy3HFqiDRcrVA39kAzP8eBwzFqEcGSBDvTJS4qeuy276KXkVe6cKLueDR8n",
  "key1": "28igwQd5zEXapMFKSrrh1XnarFrpMbQvebL8zxN855ozJzZNvwvmz7MPL7Ndx2fDEM8RxUtmVwG3oMSQYFuNajqK",
  "key2": "3yKftGqZXn9b6PEbxMucUCs2SvkTVkfJ35ig6kjjbPCx3YfJN3xphNsV3G2MHZZnmRVuKtEiF6gr9kheNnFeihaq",
  "key3": "64ifhEuMBi3qsWAgaR8AoReo6187gCS2rhzrAFLHWCtoTp2PTWKZinc74aY531rxJnj9QJZmxS68skqr3Byjydxn",
  "key4": "3jEbCqSAu6NW3YEJsvJQEorsqtwq8oiMhcmAJxD5LPB7fX5AvK9qsR1UmSas1z9Esu89KYjMpxVT3JSEccYEtg8r",
  "key5": "5RXbp81vYT9V9MDQYMZQzV8rSYHL6xj8TbJ4MsWru5LEv1cKSfWE5MQncRMfFLrMyeQ5TM6aLH4fPdhETW7wcbJj",
  "key6": "4PwfFNWiA66nwY2yD7B38agkV1gULF2DgjzsfAibUkNov4Yo9WwMxkUuf78hzTsq28HeNyEhsYXTdVrKnUJm4aWC",
  "key7": "4xFZjkuBV85WwpWtRYb5UqNujtse7bMmnriTMMqRLY2BWE6ZMBbW3UQBctwMNiciKXfDbnsbVSyMoRjQuucpRZzy",
  "key8": "D3CsEniGgntEHod1E8Lod56rNtp397N8e19YL2cDivWXgwZoeZPwvH2wyfaGc3DZLLNdAg8a3oP8994zTLBdK18",
  "key9": "5WdgJz2r19395GuCN7ZcHPYWMGBa48YegKenDHJ81azdk9E64D4cUy1ZUqSp2Y3FwEg24RhV2fUUVA4MnNRKShij",
  "key10": "NFnP6doUPDLV6uZ9bRFEXt7KhtHNoSKgjhT6hczDSfgJW1pxmVRB1nd1kft3vaietVwK5ksa3CEToTuhqbmxa5x",
  "key11": "2werGyGQoJeeNXgvXaJXHmhFQkoovjeWnqnSJegXaHo2zf4R7NeSyCFeT1JhbxwFEY1UT9jSewoZPAgsGDHYWqSJ",
  "key12": "4dz9kKbqoqSYTMmUZH4W7WSee64Wnq6qiHmqrso1XiAy45qUv5MzzXnhfz6f6nV2f4jzxz9d4ZUY2Ud8BoeX59zB",
  "key13": "EBvsdPujKJr4N9BjzEzSNzJTkWQhwGPUFQ3APym5gXJhitbbRuNaQWiLYzHv2DFawjETqonq4SLj3CdSrhuLeXn",
  "key14": "4T96H6ASeTjeeU7kBwUVJXr8JNf1ekpezufV7FHkwVmi6MhWMuY7dLxVhovvPcsEiRd6dpT1YsmvmdzMwGZ2Aajg",
  "key15": "2SrTb2WL3T6qbk6eEg8kw3MgydX48Y2ZcXhCqT5cqbD6MkWn6TqkahWoFpMaJvxkrXnkfWgCfLhctYuxNj38b9Ko",
  "key16": "5QayV4MApfyBy8w4JuKweA1NTThqZjqEtoLp7SFMNN8mjfmE5bT6snjcXE8USe1a5HkTvoz5ToPC8sEQXUgWFpZo",
  "key17": "4vgPszaHd7QhkHz5kvpBwtyuUQdkZmAHTpJAwQj2MsX4wxZipLh3UkVNwB1iTCiR7sEuupyTyeyZi9NjZjhsoYru",
  "key18": "v3p29L8sFr5HkVNHAT3jvRAkxnBRNndaLfhKJtQtUgDVgjy5cLV2pjZRjLDHerQZAKpacV1YaxVkC9BBfehrC5o",
  "key19": "38JJ48Ur3idSRWou1KAkE1AKSzhfYfTXxvMz7XXuHqLU8EezeruDLUvHaNfi9aEVGuGcFr8PDnxLMFtqDWVoCnZ8",
  "key20": "51GshJyCeKR4rFcRTcBDKCmKDpUqssAY5MKySEgNLE87i2v9y38W6qyd1jo7wGdEZYPrxL1gR9SavBZRVknpbxzQ",
  "key21": "2P43NhXz8zfeyAecASa619aoWeXp7XCYn7LrHBiMYjcwKqGBVzT9rVsc1Aytr1BydhQpZdMcRGXHD1Pu83Zh9oRq",
  "key22": "19KGAyPuKqT3HijRjCZ15ynxWTFsysSNdSgHiKKgGh38PtFi2QUgaTWmsjzZeSd4TkQNJHJx7qHDhp8ptWknjaN",
  "key23": "4gi6Gsg6UMVUZMiaSNMud5eZbXwr42e5HsrwZzA8vVvV1y7CQr9w8FvhvH4b4EKYr3QGQvLQiGjA5m7NKt6EfNxr",
  "key24": "vC98nBwxhmGEeMf7mgrhbrQR3BUSNRfjbZpRsKgo3xStZrA4uVBK1NscMtjF2y7cGvydYh4kCudoQjUq8KfBMeq",
  "key25": "6idQKbGz5T8tALRx5YYmwCoDyYFx9whgkMYhVK9dnYtexF82tNP9FjMbjrpZLMJqCodARQvRfrME5NSUPUkPxBh",
  "key26": "3JtTfF7cTqJhyATvcK8bUi4woZr5dvYevYifHRAhF5bLyYZArXbiQsnHFMNUGZbhXFswuKN5txVLjTi3CrTiHeqg",
  "key27": "3BfocHmt8SbiRSM3oqFUzZEUhNbtVcpiijyPoBLLoYuJKXgrspdrcYWZv4xKLDMU3jXXB2aj45kPj5p9m7zi2HEM",
  "key28": "4wrtjEWo342eA3VYrQ8mbMA4KKxy5QwYJYSGo2W9REGF9TGEMVeisqKsGHFQXxssoD6MpciQAJT8NdxT5RxKCZDj",
  "key29": "XuPrnLt2yFPgo6WFUYvbw7A2a7F7yFqRSJigoZnTdiK2Mh8wnhJPpQDNWVHfzuTssxFZzV4eCsrzQJbyVPNuzCa",
  "key30": "4wSi5tnw3UjE1owMD4VKdwXP7Vy1vQZUnf6gsWcuMcVyF1w9KgxxrpAcPT3maWE981jAno4f3FmjKJvJ1ttUggsy",
  "key31": "3Dfg88ympChBgd2FxcvFsDjvMfRufohAevAmZPoVBBJVcyD1kQGt4EtSA8pdRstoc44VXr9mR88rgVitfukRHARj",
  "key32": "gh36YYrs89aS2vSDWwu6strgMv1FpHk5aujua8Ri8zBTCTvH56Dw4wCKtzCNBfE7Xpgwxc5dHnKy3XZ1bzLfpzr",
  "key33": "4AxYkSYs3xbnfGEsoUbKTDyyFDoQVGGrW2xXz2FK6Ed2wB1fcSyPxk2M51Dz5CKyKqwtKE3oPiUrnzN8tgJAoaYq",
  "key34": "2pjh71VQVagf2trSWUSzsFTEszQDSGe9daG5WCxepZyutbEBRR3EHGeuXF4Cv6pGtw93Kgg5bBWF51QssYSrz8RW",
  "key35": "3kaiyYgGKbanjaPJ7SfBKnatmJDQUmFQWEVhUP6XzNRk2fXBpMsFDDopPij1vCTyoeS5zowGnZYyv5hfjquAbNhF",
  "key36": "ykSzrt1ezySuuHajA1UC5z5132PvXB8wHb3ZQw2GNBVgEgh2jpMvEjVnwZTxxuUDLvZaKCxftj7X1uXwpqXT5h6",
  "key37": "2g8nzYmZWpWTqYmPEhQNNbSKJjY3AVdoMBgxEbBVhdzSJ9Znzc3ub9XFMoqeKDZ8F1NDixGZHgrso1snsbQN6BXo",
  "key38": "64ua97fT8VA2XPYND8vqjfhzC3ZFW6oG822KvLZpiPhPvhY36PZNSfQkBjxnRHDZxjcwXvY1dELqbysysi9mAZNz",
  "key39": "43sfuzRZqJ6EBHCPohMVSKnPFeD8TSvo63bu5ELXE6avYzWzwAuEj31g3GUBYc7Kvs4yQvMnG4SCTLTgqohHDgs9",
  "key40": "3afJTZtBmp2JRrtJ928dKVxDjN9tZVDPnyL3E8ZhVzrvkFLv9ACwbiruTTtTW9mPxTN18SRv2r8BCcaK476ZG5Q8"
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
