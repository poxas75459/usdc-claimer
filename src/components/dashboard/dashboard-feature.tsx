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
    "5jdoCFBc1fEikZxPUNRR4Xjq6DAj73Wi8j49nsTAiQe8MJPNskerGdQjSCwVZiJssppV9jLcakcvLn6smjeHtABT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAmz5thFfEsfJNazbWcGYD25aJV5dZAkhsnXJGBYy15JBHG1Jao8J5qDxK1piiSjPv8xQBuDZMkXVcJdx91aVfv",
  "key1": "2jqkNj8DFkkqqt4vP4zcSPGhGyeTJoqKbdssweXcWir9b8u7DL5gpzBE8khtgX5Ev59pta1yDyZv8fUncZ76tmTP",
  "key2": "KYPkdScWRNeyKog4vubSWyLiQyDjDd9ChBkrcH3JjXbmCqdyXNJM36Y4LpoPkS7gfi9cnZqr8S5NvMuQYBFSzKJ",
  "key3": "2hTffxe4FqPbkmfNCdXhW5xokCFi1Bq7De4XQ2jwnoj1LJFHadpxMEJihCLwZ5Lh5ZQNK9aJg11Cb3KT1ctyF91G",
  "key4": "mZXaB9FSMA3fgFoa9CwmWWWwu6g3TbDf2gXk6smVB83MxCFZYywnfx5rwfG4eGR3sZx5YUQUV6yt3GPmN3voTJL",
  "key5": "4spYXbrVWVPJbXuTjmaNfmBjaPXJgnDFBrju7PbVJ6cBK2m2WKQT13pYtnbCz8ZEGXk6R9gSxuuwS9QM2CTXfaUA",
  "key6": "3vLgo2XUBc1tUmL468PjGM4aUJ9Ld781hmMczs3JC9omE2nwDwKfsgqben1kPyL5ESFY7spsH96Fzbj4tXTqsWkS",
  "key7": "4m2ivE6ee1K4PwP66orhTc87JZr4iW8XK8jiyWdsGgXmR9gS6PrPYMU8V9CsPcUqHQUD7QvWZ8t6RWGKBehRYh5S",
  "key8": "4A7xCA2gqEgusAFCPZ5d1by1toZ8ab9XWqekH9FDbMBDTDm7Z1M8hDd2HPBpP2sy66hCFHch6yk9GVhCuvfTqdyU",
  "key9": "25fn5HAnnW4ztJN256C5pvatZBxbpsRfhnND9VYv89Y8kburBWixaQspTghyhYQckxfMdJcUnBFPY5Lp7NzDTak7",
  "key10": "5Aq4aVSoWpNP66u5VedCWXXe5d5U98h2vhZhcTTjaPJJSqfu1Ns5oXcntopjSUEdLS5hP8b8jet9SZsaoG8LVLcf",
  "key11": "5k2nryg8Ba71v13kVfUhEU9whNEJrmFwW8masxqfmqvJPg6Pgy4zUsLu1BC2wwLy9xYLEaZmFSJeKpHnyknFAxnn",
  "key12": "5WjNCEE5R2ffPXmMixbVi4R2n3zP3NHkwGSoXp6zmGQEiPy1k3TXpXR63DwB7P4YZfTDDyGqxEgPMAzWfYypKnUt",
  "key13": "3aiNbk7hhLFZA8LWrsY4UDqwppGJRNo6x8yqtiUjgnkAe9Q1Q6EkvAp1hWxz9UZPsGXP7jjkmyuHoJwbveQZmQow",
  "key14": "3MYCR8fhBGGShqxBUhio1U2vyCTjJ21gNGSiZVQVqB8fEWszUfErx7SVcVGF7gZDLqAmFJbvCq7kjx1Xa8F6s56R",
  "key15": "5oebwxqAU1Ky8X4GCDkdycMAb7Rb5t1fnmurEBCXGDa28sMLtL1YfmJGUyCrU8PYoPfnoUbXFAb4jCQuoH3EnuWE",
  "key16": "2cCyKRVTWgFGWfikM3hhvPa9yZWqjaZ4hmwus2Cccx5XJvarxRKZvJ33WbBoa7gZkQEF9scdvyEhMWgJWCofoJ7n",
  "key17": "5Qm68xnxXcpaiDKdVJkWjG2waDbJ8vk7pTH45jrhsB51KXNSeGapiLTpLgZmtz177xzMQKimrZ5hE6osSqJ3N3qZ",
  "key18": "14o73QLMbsc6fvchWEraFT82QHq2SvhLfKzDsKXcXErhG2m3ZUHpSHdR2MH53koLMjHUAGQQgS6FGAVRrrtQzxD",
  "key19": "5p7CvwKfLKajS7KtiHSWQVAHWvCpMKa5pirNWkJxhSpWtadf9H3iuRSft9gQZhZPJzJxffPGzGQ9yeNRvKaHWosb",
  "key20": "2xCAzoApWcjNMQKu8jeQLtbFNcHvtYinbxNd9Tpd9C4zYmADgu389reQtnPx1fmcz1PVxbjB9fcgQ6T9P8RyXyAV",
  "key21": "4eNQcK4HFRGLWJGZ84mK3gQtN7Ke82vn9u6J2bTREP9FYaFNhJt1B2CuKJwkxVSvzr2rCWi66XwggkKt8nUzfjKi",
  "key22": "5cBKbTmtQBqqYtSHknxWySdTJTLTbX36iTqkEvrcbbmvADAYVKeoFWXSkqbsFnmd4mGSRQFN6LWrbg4yywwB6Tav",
  "key23": "3xdxQCzFegoeAt6ur7t8QfmqqGM38NbByWbvsHjbeXCwgzJbEjQr9AYrxVNMzByCKwSdUpUeCeMEVXu5tunKAzxA",
  "key24": "5wnQCbboURhXpNNbkF5mwjXb1RMGoPFT4Rkn9JBBDPWwRCXofJDMbJ3L7GXEdMKsPrxZ1Z8DinDZf98EivXjVS6L",
  "key25": "5A1EidXgoRoepMzhYJ5Hsggj4jEe73Cm7ZxtUoojuV2RFAFeToyqMrJaWMuQEc4kqii22xg1ok5yuLhvAc8C2mKj",
  "key26": "4tJA7jKTmHfP3RnwexnoKcb6s4ceaKPahQwfcumgRrWQnLXsFonZ4X2wCNSGKXAcGSYPYHR8eVomhRtgP3WbLYcD"
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
