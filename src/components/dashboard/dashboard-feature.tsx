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
    "2XohAotjFU9jUfqM2EMRpZ2LJYJfGGybmvHe61Roisnt27Q2eKUk5hr7FAFCwy21pE3FXBSeiwMaZdqEEAteUHGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DJawUtyt1QSvWQ3XycN3NbUYkAFpY1S3wzvDEFkYyXEekXUhQfpQJeKppJXBeqyH7CmstNsrYZ4mMqMPoAjQ8Z",
  "key1": "4YF3WWaumjxRvwAYCLzietwxzWqrwoK3Pjjw1KWwDyvZcnTT6eqGFPCKSZnt4Szc2vMd1gAPLHvEb1kKtEJZ3noE",
  "key2": "5cnAKBLUWMFRLmcF9T2bw1XchvFXbecJ3iesc7ja2psJr9RiBuzjXf1wFTUahZ7jEWkoHAdZCywLvAB6STAfUVM2",
  "key3": "5fjZpM6kweFAPfxLaJhfsQM4WY1YWLcxpjZ2Feh2AvAkWYTVqrvknPFmK7sZvhQd9332yCSKUicHBS2uF3gsNv1F",
  "key4": "29HMKshbT5NXM9Jyhqfd7WS336bwkKr94LQB1H9vkjtdoFg3BgSMapzxZc1BAddsM9fqQRyHEzRWPywbV7QLxzdw",
  "key5": "5qqD8zS56RaSAngiVEwTTjdzmS3Kzed49NSR84uyCmHVEWJk5gjRMiZETj9xMYipd61c81VjFpLxUFzfC8rxyrho",
  "key6": "vfBXVVSfy6WiupEjVYTXBcHi42gRk62rm98mEPCPbwWQYq15jCiEpM6AZbW1xsniw18csmT9AELFNx3mUWBKcQw",
  "key7": "18AzFe4wGbbtKeSsSBKq9NjqgfaP4KPeu8new69TGP3Rk2SfX5fEAeiDe8VmbQ3NtvA3vcc8Y2mCTcTCuz7ApgP",
  "key8": "4x1otMX7ksv59xzoSPegkZdjqLA6XXYGtHh655eHHtD8AQ9q8KvMBhSpV33szw9134kGgbeiHCqZvbRaYudG7RxC",
  "key9": "42FTXQ1SVMEPmPxCvHxz2384dQTVXtYUihrJCRTBsjMDYxvEGs8eMP7kinRAERpcWebDH9FWcEUB12NgaTT7cPjR",
  "key10": "5UdgxZ7q89xPceUVGY1WsqmfSXpBJsiW9vNYQodGYV3pYLeCHiLuJxrvLHipdTXWg8txFNsFmKzH7k3UkxZAMCg2",
  "key11": "ENYCLMrTF6xfjyaQ8EsgdANNnhEvAbUEBj7TmKu97dpGXGSkTnmMo5wRUcUgjt7VYDkcWAKCzfrfDv579pjyuf6",
  "key12": "2tFeic1HbecdN1hLK3Rp218bwpf8hi19oLyCKucdb6KA78x4QmAjwP4oZVR2Y9bvLnq3Ng6sFNihB3RuNbHCdSbz",
  "key13": "ccpk2wnmPFVmcXknBNPq9zbMGr1jemeD3B2gwtNDmzhFiToKbvfz8g6D6y8vKXjb5btaFSigbSt1ztuBSN1sKVQ",
  "key14": "3bZk51DMapNRiYvFr9DityHyWqoWTj65DmbPEzzAsDhLTVq5YmonQV4uSwCjE5AWLvwd9Xx1uguoLFjED1x8xnD6",
  "key15": "21qiXRbuj5TaNrD8vzUbYwkyWhuCwcRx5JBZrjTQTNCHriQ1iENGVmnyZvUDCP7J4U2QVDKUAVNrhFRfzbRdGhvE",
  "key16": "5cG5P38vo8i1YZovJfnNfgXES8X3DQTQ1UBS7dCQ6WpSD7T6NLwLA3Sok49XC4VSmpNS4oiLaGLxKhNNs1HNwcq9",
  "key17": "27t9NWwpgdp1bArwcLELboTGew7LjsXnPFhyJw5Ra4ASwhQQKVcB7ffZL9RarKAj7bjefRWR3z5JE5i5a4i3YiXD",
  "key18": "3abSynwQGVkTEPyAv2jmtQUCvKpe9q1PKg24wq8XMQ1j28y4WD6TZVXm8yLodZsjwzgDX3ULakZzpi4PxYEfSLH1",
  "key19": "2WAgfwWXgiHZVi4Sdx5A4A1S3q7fxfLouHc2kHo75eb9DkPCh7iRJAKYAcPF1Gf2KosgbXhzD6q6wEzbBar84BnE",
  "key20": "wJhcGHmHexkoenS1s7nhbPraa5KLYWcZLccXPXjYcJX98XuBNg2TfGHwMMy87RMzqmcn68ryeqZSGmpDrUw7NZC",
  "key21": "DaxwwdmxQwzdhacuhs8M7GoRxQ5UmzGAX7G7AgVveojMueCRYfBmGzPtp6ghmUDXQFiiZq1AmQczzvW9L1TYUHg",
  "key22": "fMZkZevJwXwD4JSaYFenk35U6KXijWcQoBgkpBqenWtGhjmPadmgKnAmabvFZBJniHpJCCDKzFCj6fVmahHyubu",
  "key23": "2rRtVuQ4LGiSKKC4toPSjV8NGEJQHUPEzGn7RaEmHtgABznBrzSisvEkiXygkjVggPi1XRAqBmH1GnK6UJZFRSMJ",
  "key24": "4ATpwDfMaGTGtxf12fkC2vJUQDfZ24EtEo4bJv2gQwTdhKCm2FFeio85UkhM3Jnw2mJUBSS7x1HDAPt6Lbd6C9z",
  "key25": "cw6QZvp26yseJcaaEZM2hsSewC7GhDVAv8t5gtRP33qWAbC7QjmLywx4EtGjwsAwje6rffmEnUAuqeqZRjELeea",
  "key26": "39zpwwa74cJ6tKi8x7foi8tBRqdnG9wbvmm45uBUE1PgpoB2KdSUx85vNdnLHVxHNyGFzS8oAANhQUUPhADhNYHB",
  "key27": "2sHUP8fqee9fv5XmGSgrUrHGvShTUry6v7yXj9PkRDEnS63YWWLLpp6ne53WV7wtRp59Co19uaXo6K4w1C3UdZH",
  "key28": "4kkdGhF5pJXRKEHYgFzawVtp2iyyZGp2raWqEe9CaHfqNXKKKfN46vg6689oR3TzzWzNzzgrHPboXCCWqYyU1Ee1",
  "key29": "5gkFoBPYK5TGAbH261XiKQ29qxhLnwstd7HSfyafuRZrUC48PCqP5c3pckPkWePjMdkbQTVSi5US2vCFHipiHb8B",
  "key30": "4yadosuiXeauyF9ormYvJoWjYihE8aponRuaWd7pphusvfBBGBE5D3b4Pnnk5wMs9rEkZjDYASsQYmBs54FEupkk",
  "key31": "3xq6WfGmBEAsyPYuJBFuN6ea8g9JrHqmijviDbZNLVXxzR6gaZd4ss9zTbrr7npJQrZcziUUwdZkFKxjJ2rVaJng",
  "key32": "3YxpduLkvF9bcvem46vhkkPrbJ1958A1pbw3sn9q1ubUixKFGCnCZcFULubxoWBPFrBSMB1AcryXzyF8ZH3kQB9e",
  "key33": "2AMggpSTAJYMkyyXAyfpCBZTxhK2F5vCjRbpENyZPL7yimLTYDNKsUbFxg1ui1bkh91JFv1y4h2LemLwyu1kWi4H",
  "key34": "3yeBsTgTNLye2pmLHquEST4itoyk7LGVuxre6WfkmAQ3FxCbSUgFxHhB3v18fo9oEENZwRMBKvtA7qP2weVzg6WT",
  "key35": "5P7R2Z3gER3FJUg6XZLfA3to9a6kW1S62KcwJE2H5xD7XFgmQvTcebWwWXMcaG1gBdsdMBvsnAerJBThcwVy2mNR",
  "key36": "5CmngaAdA5m58A3ge1ohv7Hj2GNCTkdtZGWmZHpttHm5pSi7x7aYdd6bKk5NZmfEqHCuFjSiFGi5W12njnGYnk26",
  "key37": "3HoQD1uLop3aZykRc8xdMzgrZdfp9ohAz3YcNnARmsE2Mw4Sy9ZzepczaqTkLzNAm4JRcPHq8BG3CQbCyevgE7Pv",
  "key38": "6wDo9nFnfn8L1JiGAd7u1SedgtgqCoG1CzCAwcPvTTzWTHJJPzXR8GtsEGSQWTifT1Dn4yieijCtehTQe5uoE1y"
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
