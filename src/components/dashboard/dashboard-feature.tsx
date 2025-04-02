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
    "5R8RuYnYUUY5xSkwJxxJhevZvjRS3K9aknSBAiSZWV3CLj7KvgB471mfm8HkPcwh9HzfwH2H8SFhf9vcL1yv38Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zq7qKzhkmPyAAu7xRvEJLxSYD39GAcuDc5nfypKxThALvKvpGbdm42LuPbhaMacBTgP5vsngTYWcEwEweWSwnu8",
  "key1": "4qZNPRqVyTdyD94tDxHr1ruUEz23fgsn3qgKCjYTLcZ2poYok9GwmAG6VJguCwZPbqRf2keciv2M8s8DprPybtwo",
  "key2": "5H5W7fkcbMi8yU15WsBsVmQ6QKz951MMdLFwSq4RsKWa2wnCzTgDyT4ThWyTmXfpZUfcxRWaAuQqW64ZrjoJPs2B",
  "key3": "5kzk9Xkg9LawXUKCuwMSM2bTTi1xsRav3nkQaRQbmwPru6nETyAqtiBSqgnWpJA7YULpFB9uPdV8HyCtM9Z4qtU9",
  "key4": "MaXn5y3kZYiwEpPK6mHjqQDaiwXUvhr3q1Xqdx1DZAwNG3mS2vpcqGG5ifFS6ep8MZ1RKbkgRUWgQZBWFadYGd9",
  "key5": "41ZoQMhgQ5YVkBAd4H9KRWL4dyBNgLBTG5r9YX7TkCNDmhKh56TDZ7iFNsP2MJnTXU1BBE8KEGfcLPe5iRRVtMop",
  "key6": "phgN2PxbjeWYT575qrXcttvRHjbtLuk2MJ6cc37kAmjv179RT3AnCotVCeV2QdAYWtb3GuZZpj5sYgybpZpVznh",
  "key7": "jME28AKhgTbGHvMPm4zPAEMJbtuwSX68n5bq4KwjTKExzqmkWxea56Wstf8epwDrSjAtzSdMhwaoJcqzs9wMwhA",
  "key8": "5SmDW22yYpwsJcqmJQfWPBeoHFSF7SGcBV1pCB5DUzam288sDM7BkVfDZWKi9t572iRMHCHFRDqMcbR6rgwe6DM4",
  "key9": "3Qo7W7FjNAsLqsE4ppaS41GUSnX2ToZuPCmtRw7ViDtoH2dY2Vx2U2MSBdF7Bj76yE28jiPnqdVjNv22zWRgMPyf",
  "key10": "gpd2u5B7Kv3KLxoLPayygZLXBuKgXdgybNVEk3L1rubFqPMDULwxZKv3yqrqhQhakYcrV8QQM7P5uPHHnUGvHr6",
  "key11": "3TF5bnYTnwbpHK1Mau49CH7QLK81LQbPLJikSuaEn31KrmEwRFS3uD4Hq25MWPsAj86qvSyV2FENuhPh2Z91KjQ5",
  "key12": "5Npf4ofsLcvNxoQK2niVrdnpbJ8rzNZghG3mu2UbCeUS6igF6DKL9gjTVeJThWYSQogAi2XtVhvg7uMB3oNuFUiw",
  "key13": "5Tp7qZtvBgTE8Uz4gGdsfWRb2xqoNNz683msrZaYihZbBUQwc7AZStgbTS3eXt4wzo94hszLiHCMLmWytcdGLkZt",
  "key14": "2ZZHu8g1LPYe3F7RF3uymmaJd3GTLkU6Nq7jacJe9Uppzo8dhzgArckmqubCKXeRD6L7jHomgSkFzM24fsr157Ma",
  "key15": "4SKmRY6AF7B5MpLWpYiQJ92pNe92gz7w6BWWpvHJKa3YPmMEoFxhJKphhs2VUUz9FFghUx3JFBVk4AVwxwjqbgfU",
  "key16": "3oYfYcWnD9Ne7393xQtvU6oQhLug6MKLC3okoEgmAPB8MexMTgS7T3pwAovRwagJPnXnCNSbEnNpgdnFR8EA5VaZ",
  "key17": "beSUAQYW39vzX6fubc56e7AX5JzwiR9orPCNbHXnN21upYAfCWTvXoEdMLa33y4kaLg76BXjorHgxF7EPML9JQP",
  "key18": "2Ab7vLR4S8cR2Hy9dimfNPfmrUWtjkAuhmgfgCuzpYJavxuwk1G8MvVT4PGU6Zb3JqguBK7X43qB51Hj4DeiYkYU",
  "key19": "ozhE8UAKAFKcjtcHStauhnFPs7QHFoJi6fFqcMBrD9Y4nJxcmH5UTQpsfnXvF7ALAQwCQ77QksyuRptjNwE8XHK",
  "key20": "4XLk5u1NpkWqS4aiQnCmYZefnqFMtcC1KMuFev317S4VbHKSzim2x7KPKFKYtEuLo4YUfsu8a9xt547Xv6SNjUML",
  "key21": "2PkawjNgRC7DjgUWkRKKCPqadBHAgdXdEAipsNSZELo5Q2js1XVHZe1eQWg2gP2trapSbMKF7u6Npbzuj2ditumX",
  "key22": "2KxsZCSTR5H9YfgJs1PYZqRfH6UbomXXDB938PdLPTbekQA6L35fJGQxRt6vVY3KwtX28BmNL2UKb7kGLMi7soa2",
  "key23": "3aPfC1dZ3HTeX4BugPQAF7CTHzRZK2wDQNJeZ9WTeW4E32zuapsSmGr7fF8jac9Ja7rDYAhnWTUvB9kJ3FMUPnzy",
  "key24": "31NF3E65b3kor5WAUFnV2DUQLj4ihK4QscHzSnGLoNnfS66YfxvSWCv1AB7JsKSf2542YmsdXjpg85dHZDEPts6t",
  "key25": "3R8pUDemc5khnaky2SwQ1mWmTuFU9Mi8RKymirW5Wz32tHsaPMtxnXRQ4Ui3Ge1qUWVZhCJugQys8NGSbw6aXKvD",
  "key26": "2GtNmqTee3ANKSwwVWuqXEq49JRKSRDmtRNDRpav6sAFvUbQDbrgrL2QcxLXe1hyysCPEkVDbup6kVGFsewnwmqJ",
  "key27": "YXnVzwxQ6RagX93kHvnTw1em3nwK5Vu5B8SUrMi5RfB9wi1Rd32jM9N16VbqFQg7RLaaDyg5JmTFLfu8siXzY6a",
  "key28": "2s3UXQKhr5Gmef31mtNEN5ndUK9k9hKN9g6ziKLKM4EZwykcoYUnT8Af6bTXZuTKwGjg8cBuuf43jKeRiVcTwFwt",
  "key29": "5jVBekoGU8ZdaPUnDbrG7ok3zHf2M8BCfwogAaoQB3haSM6ZBN2uyZztYRJh6LtPRFD98oyNxEuzBCRPzi2vH3Ec",
  "key30": "KR5cZnWCoXQPLcJbaE4EjMoVcrLjeTspMYnf3twfaxX7Q9utWF6RpZQne4iUqtwmfdYxfoQeKVxvbDGdancJFB2",
  "key31": "2YQAgE8G1BcKwDuZGXUoWToPBJcWu6hKvAsdyywURbVPCn4ejb9esirQvqiXdMhqd9uNkdZERSVAyJR7wKv4KcMa",
  "key32": "a3JPYE5oNmq7yMcQtgKrDx7YNdQCGTzos3NqZZeHnspFMVae273KmzTokEfAHhtdU9di9ytx1ksHp2L8nbHryNk",
  "key33": "3B1oxbSEHg3WkYejgsCmxSirkSAwTzu35jtPyfLeFMyvz3dXFBt4EEfZ8ADbvgNi4cBuEaUn6dV493DCvKgA5vcV",
  "key34": "4Mke7W4nH7dTsFzxiVVkepH7oEK4hiX5a4hTQVmvMzARukx7ePTVno55nuPziS9Xn9RSEZ4tuzjyWbVE23DBaqgC",
  "key35": "6ZxML6Epd5wop2mja9ghaR7J61z4pgTTYMHZ87mxMsrYzTn2me979FdvgzVqRpqeniGmvhdKgewEkTeEkDFhphM",
  "key36": "2Pvfa1ZNQWsgZDJm2jaG3n5DnbPsxFebaxqb7FoX3mUs3S5gm2eh5uoHP6WeT3qGzyy7bsPhBCeCNKmmKo13Ers7",
  "key37": "2tUhfjBhfxkvCgozPHXJa8F5TqSDQmv5x5evGWYVYrbgeaYTA7TM2VomtdjHoePX7qbt29LuqP4dxtJU4PfTeRGN",
  "key38": "28LQDGnf8b8V6PxKTfspgDYqnksJFfqCC4gkVh1bmhgsyph3LtunwUGaUUSTaxwswzipwiuVtQ9aHv6cwKS88PKW",
  "key39": "2ogaefMzkbyCT4ftfiwBCR8gBHvsk91nN6h8rr8HLSWJB8jno3PFeqEVft2JeNqSiXHW7ZDSwxs12vcHvvmUvzuH",
  "key40": "61cgkukg1uL5hNjN73WkhY8YznXEZPvqq4Cx4bKaZKXCsR23GMfJMDEHtTig9D97WPLwHuFjQ3e515sSAuS1NvEw"
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
