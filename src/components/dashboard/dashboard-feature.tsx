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
    "8q4KPytXuCQKrBxhntiKB6LgChq157bWS2Lhjjagth9LYKiTT3QY1ykg1ZqnKc8DXiyZ9mZncbaSDbdtA8VhH9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSKmWNCqoJs9foVHaL33xtoBKmmU2T6xxKNBFwUEKZ4dBudqK8CrKq59YY9iEm9H7qX2fNvcmBchzTh59zcZG3K",
  "key1": "4m4L3sbikWbRp2AAzBo8hhDo8MERLa5T3KPnn7QftF8tSG4J8DcVnkifu4HiWwAFyxc4BPxHt3LWxgkKihFn78J9",
  "key2": "49fbmxF1ED4JcvssYZzz548DgKQ84VFuKNd4DpqChnb1mTQmQzNyYTLZsfRPXhSbkihcAPbag3efTZaQYJDUUrj6",
  "key3": "3Xhi5qrnmzH6zhpdShfSTshSX7UXgPwWrjd56k9LuA2KGmhvvjWy4zXPZNDXneNdcKA6i3mH8zEeDfZ8jqrA9yBS",
  "key4": "4nyUir63TXSpCJa7rjGr9nCEQKczRPc39KyHXvTX4QZRJU1MTTLWqmymRhBVEcHxtM75iECwouABkZVJNrSv1sLR",
  "key5": "3FW8NR4ZNjRADhS1JnR7CRUdE9C8PbP9chSSSXXSe5erKjSyPtpwkVfBzkSBhaZHpXXmiFgEft3DVEygLwo2x7km",
  "key6": "n6eTnM3XNtrAZSedGtEpATmfh5nbEMcrf5cRt37fyyP7KvPnhVtsenhkjPkQzXkHVZpTPvtDT4jma4E8419QUzz",
  "key7": "2u1LfVVFMnHF4EM3HuKbnTttpnh4d9N7SLt5DVDYiwsDxpzSzdkKLcf163ZTabFFqrZEAuPUB5NCh3oPXDfS15HZ",
  "key8": "2heH2CvNuUmfnBjW8svSJwiAG83LQr7knRh5wDgWAtUKnB8W6bba2zkPajxPcVGrbnj3Tch7RSamXUxXcf12fgtF",
  "key9": "26yJgZDr6snQyxurRcWdZAx3aAaviYevQJ5TYEiLujP1EuwXFrt9LK2ZGkMmxcNtZgAAGHBqYnm85x7MAQRYVQ25",
  "key10": "49Qq1v33J7kcH8Rhjb2aWKont8GH9vJy1izXh6x36e3JamdiKmjN88i1BwHGLJVa4Eb61rMwcnSe2bxztd8QYnit",
  "key11": "2GABb7CBofdXZvmVmTrLzAzGEKgNoR1HYogZYFsJjFCHcnVu1qVo47aicDB67S7fMzNBMZYwPxSwWTAVJJShyZ7N",
  "key12": "2sjAzdnsCvvFPoXZZ5t2f7b7FCgBv5A75RvbEqt32MovuaF26DtNjADkVsi4JWcTRrZKw2exNjrDorBV8g6eV1vk",
  "key13": "dmwrpYNAnt1dUgLJDMQ2NNigkNxFbnXqhbp5aYHkiv5cY9SMVtCzPAubM4TNrmssmFjmb2XvVpSqWt3Gxk46K1t",
  "key14": "2jxGmgNSw4LXgjw8SbCXugux4WAib1GrnyXkRekPnntjq7Q1R7QePF87YgeP4yxThtb2WR6H8ttS8nrdzRVsWWUd",
  "key15": "4D6yWtbMeVURHMBKuoHyMAYBBJQLZCPGYQNjt8s6pT5TUGCKXRSJ6b8bhuPaBetyCrAumy1CxLdWWG34Hz5q8E8r",
  "key16": "5qYaVJcURkkDyJdAQ9yP9sC2vHVjFnj5ppL6UqWFe9GGNoPJqPKvsDzHrKtqvvwcpZFhJz32qF8ZvW98N3UouZqS",
  "key17": "wJCxKdpjYwEs32F1jysRng2Vr17B27nWy1LG4bTgBHV7yLszeiqAe2HmYgVmzE4KhgGwtSSK2o32uFAksMfkpAq",
  "key18": "2Zm6xv7ubiRaF29FWeeArEE8vXBypgRocTUo1XAkbLzXidJNvLC4Tk1RMbJdgE75udXtBC1zCohRJr4uv8fRpU7a",
  "key19": "3A4kkao2j5db1g6wJHvdm1fh1f6WKhdRMjqJfSgbba5gvnv4Q2LqjKftTMJgnzKTZ62n2gzpJbi6eZhLRajuH7yh",
  "key20": "2dqxGVBsyewVCjPCDYeZ2e9Y1Kv36FE1fNdDqfvH92hDahrknYMu32X9RdpQTm12BrmVLB4rYgghAfdwb6jf9uNj",
  "key21": "23FSoLg3meRYDSbeuhuBJ3YnkvV9tMxuu18cwkm2yyQPp6svsfhfsKLbvGraNAho5SfS3B9iKA7txueHt125S7Xb",
  "key22": "dEv6Jm1q8W81TztTivwcCJhdZYeUMapXrB1TShtGaJhYtuJ9NFFz14z2eF5usZTkukb3QofUzpscTkJdjE2KMW8",
  "key23": "2VCjAuq5UZnqFRBs7GBhhugk8xpJQghhUs6MF1FMKXB7B7mRHdnyEynmeUKAfQUVvLka1uKrSEwCe9DoabA89hDZ",
  "key24": "3gLRh5Zw5bx7ALbTrNw63PrBJ3JncrUZwpzFspSa3nRhVA1cs1CH6RheSA1mqBP7EA9a4MyTGxneZThDkvRpQwy",
  "key25": "5WAxcWXPgQatZvBXRGqpFv3GXgWWPFZsEFuVJYC3w85dWXWdJ6LyURDLEWk3Bb53eNVeM42jVWgB7Uakvhg8Cck8",
  "key26": "5H4VWwRu3FJmmEjxQwpGWSaheNUK3o2vQz58HTPic84VdG3fZWWC5uHYfJFCXrNxUVbaGbRd6w679NXLknr4WztB",
  "key27": "R75YDfSz1ahJTJhAfBB7NHDzszXpoW7PYKqcPehwUBJboFGfC6L7VZtJMX7FsLYvs7PBLSSDvBu9FNu5U2aHZ4x",
  "key28": "4wqU6m8nko7mr4auYYGmxKdVzyLuzLA2WBiCsGrP4zM8hmoqVCNejNi3me3kHABGBTbyLML8KzSVkXKN4VLTXDYk",
  "key29": "3gpgRqJs5cddphMM8nWporrR8WXKWUMxBe4V1YHgryQ1Bcv831MbfcyqhVexdNNntrR8D6sCZLjyffBLsaXhvPdT",
  "key30": "4aXiQ1T4mTNrjnK5mfDaeZoEwXoSA6mbbWvqYwhDkgZpVQeuP46eDgR6crUoRUUC2YHWi48pbWJhZmDqxKgr2tEU",
  "key31": "83A4rSpFGSjbvpRm3xhyyoW94dfzzicdktD6VsYWocyT8pFBpuyGC598Zi4YVUvpBUjbSk95CCN9JpLBdv7kTvv",
  "key32": "2qJLRKKhT2w2onwpQBtw72UHj1zhtDmo68D4QwFWbxHJXosRcZkDJaUnoToU8xqnSMfba9vYEg24YM8fuf7AayG3",
  "key33": "2x2BgsRH5Grsz6Ca2y5ebD8yox4euBxmU9Wy6YvKmHRtV7X7dyh1tyfzfqMv34GtGb9qsj9rs8CArRNKXyhLycQ8",
  "key34": "2NSBWZWqk7w9h3TzpvKfNJS69uYVqCjEeav3vexUosB7rTrAruAMgjVczK6iXAkuTiAK2fQmZCeBg14Kq6RLCpuK"
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
