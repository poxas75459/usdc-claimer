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
    "5s4oYMbh9cNTKcrETpfzPPqARLFx4kRC17nNp1sJV6L1tkgapbHWAXGHLLiDu1ydgANuheXA9b9zbe8e4ec77onD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5Ev3Di6iqcDDcvm9aJca11i6hTa4LYyXpmt4RuANgaVvHfvok38RVjbwqsQZzATdWR7nryZPPHgSQGFuKZvuwh",
  "key1": "3kGKKqtYCAadRBcr5ndn5pUH2jQgFvpxJHwRwEjF9iPDTUHnWLupJFeV7aZvukSPiwtzs5qrcnWe84s4DKdrt3Y9",
  "key2": "32VWq6tZVjfirezxBQQ6Vc52CnU6uyM73GEtYzFPK1H9FhwgfgJt82nQLAdNPRuMHQe4LbrTruvQBUYvrSfjmAtW",
  "key3": "3eKzGs2dKHdxdbHtuxMHB1oQLc1KjzoEv51TDYhTYN32XsKxQWzwPvgeE2vGRbruSm6M2S9AGe7pLwP5nHerErtx",
  "key4": "3AYwBVxvWNWdgJWyteZXAJ7EQWr5Uf58MPzfuKSaj1oRzYtPeSpMBSof2qKh1y2Ez4n3TeDnq4fUKjGMFubDpF1",
  "key5": "4cGvDk5SWVXszKH5BZYgzDsLtgRQRQeHAW1wdvgiTzEkJsKJJE7ET9PKJJLDGgig8a8FHJeQcJqQFcdxMjNqsbDk",
  "key6": "48sCjCA9Ac7GAdg355EvAGk3qGuHRTgMM7pYbb3P11LCvhpNmsoLN4Nf2zg4jgPEdKRJT6yFHajTDLELpkdz79rA",
  "key7": "iwYBaTEXEwDeSHuovAybJRB7oyWtaYGCHQAKyTV2b2TgtVZwDjB5b55PTZGVhipYWbpmBz7C2Zk1iLWHFduwNQX",
  "key8": "2RhY1mbFxwFthGZ9PEDKgMh6C5dcQe3utQD5ic4tckYygVJPmc6qgPVKS1my79aGDuw2NmgQwnZBsypZ9vYyt6cD",
  "key9": "41Utn9Uic7dSSR3havxSKpJk73sGrc1sUgjaAu7Ww4qikLoDQFDBRXDZ23LaXtRRzvdx5EqQknxRehkqMkGbih3J",
  "key10": "5U8Gp2waxLaj9uVfcvWtmRLMacbsTSGUDirU3VhUc3mGcGPPs8TvhvMXrzzZKFG5rJ4qbua12G8Jc47NrRBdJGDo",
  "key11": "X256TnhcvHhbTPnBJLVS5cx4ipGMhevVG7UuUpgrxF1riPxPSYeDkvm7WRhPCYr1UhQwxBYPSZo6mvH3TvuMEK2",
  "key12": "2w3paAhRfptfBLitvdje7dgPinYZ1QSb93Kn1fYLoQ4vSy1nY2sfvz34t2ZuAq9AEoRctYFn3ESgfcSXy757UBbL",
  "key13": "3Tg8oRe7MrQgLKeH8FcrxARiThtWQZJzoPZSNCB3UsMXsAP4hFvJbN1H79GNBtBnM5BQUFrbhvAne1hqJjJC5coj",
  "key14": "39555J7HtTEGuvntkyzKJHZiwRbR7r9hwpbBwv3HYyBnK3UsUU3YJwAhiMzzRyedzQjSS9GvyYF7R7UPYpe3EJuz",
  "key15": "2LSpYBLLVygu8h9Z5zQST7vkVNLMBqA1JxsmEjeXmg6eMemHU5DLR1xboMmYckvYfHV17u1VsSgptiU4yBGjc9M9",
  "key16": "3MeCQqjufanePjN8N8QQabu7byTp6GkUbGdftTMSzz4eZxfM14chUqZRz1jiXQzMjSEQu833B1Tx3ExvucY89PrQ",
  "key17": "4XHa2qP79e96aWGQmdR9RMCHrQ3qMViSKLNyVrYAo3xuRts5e4yoDsA31NcGsWFNqmCFmqmKYmdUkcXyFWwX4tdu",
  "key18": "2JB4nwzsQowVLQHp3Nj8ZmwTFhfhDfMr7bkqzJbA2XKHBSb538SkLhmKRbNpwV1MDDuzEFepX9R8G1zCRWNiiVx3",
  "key19": "2r3kZH6X6Ar5oVU35TGCMih6sxPvhb3AS7AKcQay5nF6LCxq8xL54Nfr6Vftu9FaKFRo1fjDzdCVH71jWQXzdUPx",
  "key20": "2h7Uqg99uBRMUWVyRYYpSzNxCTAdUpdTSsm7qidQweMAANfxc3osK611ff9W9hHbirmsiXRJEfjhbSGpbN8jwp24",
  "key21": "2zWfzM4JTTRHJb4ZgvDcJUcSiB7FjVkN4Lksb9g8c5LZnLx9cD3T7GazFuNo2635g8uZw2vLMEXz6mswh8XjWKCQ",
  "key22": "2CuefLxPRmHkfoYGdMZJiu4NZCy9952k8U7T6h3t22xqoSEvoCAC6Zr2zJ7GG2kzEWb2SvHgMzUS7aL6oYjBdkud",
  "key23": "4S92nZWipPUnUrt5UDKAmNFQX5s3D5H3ixzKbF6mcLNB8dpHcDYWDmsXCuaxgUjKznzVZzgJvnHDL99fvX7V3KLQ",
  "key24": "4saxP7aRpqMH6YGN8dXa5mkgJgJ74pdENmvqoFPURbvR8LjEzvVo6raDceKTrBgjos9kSXSru2sM8zGMtoxMeDLg",
  "key25": "62Czz3hTRvPqC3EsHqyxytujabYighQz1fKhEmUgfmzxc57a7TAtKoMTbnYDCKriB1cGGuFcmWa41GiXJdzBkzu7",
  "key26": "2s6HQhPNVhPZ9xrWb7ABcwv7AwTdhTVbGaRkAjRKX77RkBL6t6BkaaSrc8sPmah1LzDL2tB848ydapwghdTmfaKp",
  "key27": "4tW1jpcHMKJFQpXGT2HDfp9GPstuAGqXampVBE2iFdwyGxrehix74xofNnZjAWBErpmng4Wq4pui2rRcJf1tDAcr",
  "key28": "4xJ1wSNnUS6RMQadNn8yCHqAv1DpHUYkiZJpSQid2fbcxzyz7m39HRnULYE9RpAvj18rgGXzW3A3dT82ia9CuugT",
  "key29": "5fShupBARoZH6k2GHTSbNVWopuUsy5Zmk3n9PibJ7rRTjEs8BRUfPZnzPZ8ZeAQGhBAL4VvvmLpye9c2ZRcmKxnF",
  "key30": "jvR7d5ToKYKscoYf1zfn2MyYGNnfuaSEMkWkpgS9SbtVMcrbv4rqZida7Qx2YCnoB2AzfGTDx349gtbVuuuGzxf",
  "key31": "tBkrAvLNsGhqro8iw4fu9ha4FBfUM738mUVR4WWLXtLb6bYrojtwKVBAbk6YT9VnLTQ6yDFxKNkvRiZA3ShnSzR",
  "key32": "TfZHF5xvmeuaP3vHLhLnpFjfk12CerPUx85N35Npk7LmNrz1PYQd3g5nHXVAYug8iDFhpVixtFtnS4FTNwrZdY6",
  "key33": "2oxrABCvPKgfMCufLNxvfgCGuiYwb78Gy8F3cFguowyzEFfrikEGBeGyCnmtkLkGXKy5gBWjDadwb8FhCY5YN5gu",
  "key34": "2s8Q2yUqNhfnPQNXpmYdGG9Y6vREQKJt8pTuUg2cb4x8JS4yNy3QnZdjFD2awBvHYBJtXdtrQBkdxevFeWF8UwhH",
  "key35": "3B3KPewAzdjZh6okXh22MPMzQkVTki9XPohZL8ZJGqG2cykhbgo15aBV4q9aoxFUv9qHUKydhhaKiYVNqm5WfHR3",
  "key36": "5KtQs9do6jnGedTHmZ3EWAYcwgDAiSkzEBPJfRzW39JXAABHCywSANudZTttDSjUhSKPy2eDN4ctrCB6zJNbiaTw"
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
