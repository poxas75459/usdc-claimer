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
    "4tap8T9mVAvsZzasbgsPHSzkDDF21eyZCAZvohHNoGCqVkawrffpoE2tLZN3q257g5bPz98bfBaDNpfu5zaktshU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZHLgHSzy9JpLeG2Em4KHUmo296bg7iMGhz2GQjrsk5nu8nizTS8KoSdRQqhT3ruuzhfvZY1W9CNQ9ErRm5BcEy",
  "key1": "3YGU3aqHWnTNfjrQxytq6Yxjx5iMQaKFL3YrqFkixoumPT3iERN7BSNsj2raHNemFdP4i4SBZDSz6JgskZovoeFz",
  "key2": "5qykf8CpSFN4U8yHZKLE2tatiJWtfnK3TPmZqZTHjqLBhGjj1L7KJCDubhPXaoQwpumEESXVxGhXGHdoiXF42An4",
  "key3": "2JMXfxxkP3fMN3622H4LgrDxHLt9yGwz6Tnd4QGAhYXiyxsyYfbD8xDvAKNsfV99J4P9LMBg2sTB7BuZzeUsWEw3",
  "key4": "5to6eiEnM2dbYNFRVBcQyUmKQ4mxp9WKjm6t2ubXVYSH1jjPP8SDGGdDqPmbP9bgn4hqRQvk61JDV1DS72M7iCfU",
  "key5": "2un5b48idLfqAUzuYLwgXwG8YiB8e8GMFwqnrVfp8iRWNMdBeCnyj1wEFzJcZ7x51ypTPgaPKoaHpCjMLQW1HEpQ",
  "key6": "3gLwKbVRuLspjJGqciwWoPTtGe5J3A83dyAwCWe1MCjdftmwBiZSRVswnM7aXVYrbdAKojrbyVMX2k4YGH95SQJV",
  "key7": "MNH6CA95DpU46ZFU4H3fvHEu35NRAsUfx8i3K9xcFiAbHKZoDa47AYnyccf215tknZ9SCif5k64ARvcjRp3KsZW",
  "key8": "L48iY44HiYZdiCtUMmrP9XidKByC9MYSGA92yVaoAbZiKuBFJduhSQZQU2GvHMVW8xXsRp23xpAGkhypEau8wbu",
  "key9": "42xfMA1SqfQdNtCE83ar8XsiGfUpyZe3oEmvNpMLwhFsoAGP6VTQGyY9kctMvcbtnYzWbVw9s32NH481hbmzpz5d",
  "key10": "qVqCodr5ucfqiXJtBfBbzwZb7pv2vuXf8SkELWmwnHfUDMppxTHJndarV2DMj9iSFhg93jP8KgM6nKXmuqHCKWJ",
  "key11": "4SHshmWtKViXjDgqytiNsn1rJjcRVA2BGdjxEmCkaFMfXjxppDr2REA67wdzmvG44yzZQY1cKoRyCQaqjKwwKtEz",
  "key12": "2DH9tje1V9U4jR3UmnrcvNb6w7gTpRq5qyVi7KKZVuZHzEmBuuCjr9My8sE1zboVXS8FeJSaMWp5RbH6KsdEDmZe",
  "key13": "cXyHuetCcUC2NcGrXUGuG4seKaP8EYRfScjv6RrPc3FKCyggprxtEpx9deyDftABhzug7R1p86saFZim35JFGdA",
  "key14": "4N2K7gJm4ccizBNwiHfYe2pNnmpM3knTKn62nMGMwCJZ9zQUj9HqXkzFcCBq6BL8mzuqZYpkGzuo2p8fXeidv5kr",
  "key15": "2oghba72esX6WQNPTZUpuFf9bjhi67KiW6pCZBXpr3ccYvKqsu8cjTbcthfkUaB8KpvHWf7SmaicsvS1fDmo5WUE",
  "key16": "5BPTXP6P7qxLYQioUX9LqWZ8zAFZZzQNUqKf1MYEWaAXDzeCnzcCkL1PHcQoGhh9YxpaR4k8a5XCSB1mEQPSdfNd",
  "key17": "3DGDm7QkaeZZbhSEgNZhZ8G9hytWtwmv7dCUKtgszZ4xFH94qoEX2wPRSTD3MqhW3GKAYBsHUyKBPtdYcECuhBsp",
  "key18": "4Mm1hF2i48VcTz5Gm9J2w93roNk7b1wX9VQC3TgXe8JTqC2bL6KbLJ82jQdetyzCqYP8BzMitLF1WH4raSTpFXnV",
  "key19": "T99hDebKJRb6kne4FGEACNxgpCax6EHA7yx8LVC9Cg7hEJtCkFaRmqDKSZitG6EQuMRnE9DeuK2vwGgAhkrHx7E",
  "key20": "R2FoKAecZdTeQ5BseuqTLedDUh9aUCKuMPUYkcLFFpJB5VXM3j4fgZKpmB1AzG9SUmb9W4u29b59AWM5F4k4usN",
  "key21": "3tfCMJB8F2bVSg46xzGexhKbUS45TGjDtX8fNDakS8Bfn1sBCZ3TPYkixfTUj7J7B8aZ5vHiN6uE3DkSDjw6EauN",
  "key22": "f1y8i29nicrAsweqXNbuQUH848ieL1T7t5wRtzVq9UmFDE3wJsH3oEWiZwws3rG8tb9nucidijEXZq9xWaPCVwj",
  "key23": "yvSKmWHEVZoQ5T6ixDvgmfyWnEBYtVgq452km3C2WA3MD7BV2Wr4onrypYyATxe94ksa4gSspPYMJYG35jfwm5s",
  "key24": "3EtZKGm4ric7gZCkUMSrdc5DBJCqDvMMkBaXek5TfmZiqsNQcMDTPyfuorTpDWHQJojMCgiXNrPyEBP9yVM3tq3T",
  "key25": "5LgpzHNpuJXDbwvtkzu9fyhbHh229k24YbBzTd5jZEqBMiHVzoJgZe3vVHTRkfDEpKY8yZjYUct8aMT6kEdFKeuU",
  "key26": "5hTGMsGJUCfZ67To17SMkRkvPB8xkm6yM19KpLd9HnLx95WixaQDhJMn4oEKzSNo7cRT3cgVomi1arG9SdxsYzye",
  "key27": "2Z9w533FivDYnoQKxAUnx4D3FauAcv7LT87jhy3jMuG9YxNqq2SrEus7muqfUY7wN5KmaQHe3DHYJqsGB6DDvTmX",
  "key28": "5WQXgsyWFxZfqyF68AsT9xGjDt6dZ878awA6v5tbmSZPkQojxDsQ6yFVpzq4fJQecVXhkW5Ybq28ewpKZwbaWU8F",
  "key29": "2hUX2gHKNqaR2DeNfkMxgb7GyrN2B7VpM22xzzoQvgJdSKuDXRpZ1EDGc1FdxpMMjuJzTQHAicC4nP8GKAx8RN5f",
  "key30": "yrm7Kp96iBzTAUdyq2rS1AMPkx58bnkZiKMeHTC1GQ7yzLynX2J2GRZT17jHEtmvBHHMZduSkBHof9qpJrzihqG",
  "key31": "63mWhED6RbiigsuA9Mp9i8G5xnjRYnZjC71SC68GX3pYYZVRpi5UfC3ZhQNpn8KWtqSkg3PD3dwj5ycVfxFgpu7R",
  "key32": "3C2Z9aouAG8tKt29mc3GqJ6ZUkTAzxrJ26AGQHPRmQdjLXfZ78QfkHoUXZ6czKQx4ZYZuy4MsfCRQHY8eA7ggMXv",
  "key33": "2MdLQRQ6yorE5RuDYifD951vQsRBcarKtf5LfNqLg3Kpv3RvEfnWeMe63PHSB6CrbWdsMSpzNP7JFzkA4nyPLFwh",
  "key34": "2E7u4kJmvT5LSvoGsARWXPBUQL2x6efnGLSmkg9xnrutmHWkXDcSKZvvAN3k1s4Hh6yyEn1GVX7THpULnbYR1ZSa",
  "key35": "3EbZP27xDA73te82J2JdjRDA8geLW7NzGstVrC8mPFJS9zS4Bvync5A31YvWF91xWWFCZEXHJqvjHNXEnqYPYXQt",
  "key36": "5zpjQcFAXPWZT6gNFMeMnh5Gec573Z6xVYegq9LQEMXejPJe4FWseSmWVsuGmmnEbcjZDqwQwuVCc2B45znkHKf2",
  "key37": "42erhNudp6DnZ1qMJuqfzZRAVcfhM4YgWZiUgX6fw9KomV4RPqkqooz15PrKi5W4xsDe2s8NGo6xif2iqFpQww5Q",
  "key38": "2942R1oA3hNwGY56vKTt4eewkJudf5FCFWBSCHXaKHdnYUj5xRhweqtX7JtE7qMHNa1AnKucMTbreGkZY5cCoZ8j",
  "key39": "4apisGd2irGAmcRERD4LeUo55juFpUkzddRRcLW9b5s91dn85Zk1EERRYX9SmLy4c22nsXU35AvH6kUaYS2nemkK",
  "key40": "Qi8xF4E2Pn7FqKNXeJtrz4CvK1RBK2oSLBsnLgs24yF4X7vNuJiyMB9jwYhmmZssqMMFJYrMkcHRzbeuszvqYhq",
  "key41": "4R3P7uA2J67TYEw3Bq9Mcta9hbesHkuPSa2jCshKoSSqrzDxswtJ31mopwCXS1DJXcM5d9HYr9WXEUbXP5UUj1YZ",
  "key42": "1tYFJWYfd1cZnGDbEB5dM3iWUZU9XSh1aTDWTb3b8r5seMu3jQpuPTgnHwTT7qqYQo7zTaL1onoGjTkeXoqZ7MZ",
  "key43": "5J48jbuvUfJPjii6kMk1c5yvHFW1P3EDZxKBCP8Z7js6TMrEH7QAAbsLbkhcfJw3wKRr6AXeHtfu36jGPEx5QnUJ",
  "key44": "57bJXrH3RCEmRUkk2PEYqZD6jLi1htJ67woggn2u1mPUvZTTUMxeWo8NQgQXzzD6YRiJjwG4oZKCSYwrwW658Sd3",
  "key45": "4mNDrnj5Jdme6HtH6oFwUkLPzZS6JzL7TM7Kce7Pva2mmwaCqRMbFpiXGwv7DGzbAfft3y5BERLos6uTBhpKgUVc",
  "key46": "2R1ZeeAc66nSAWAwqvSNxaC6WDrVgbjb69vzmPQ8sFRRziwphp7cHbt7pbjxoBo4BjjKLbTnC2dyixS3TZSd2QVu",
  "key47": "2kB7FxjjZsx9KV1KjmZzNGQveKGUwVmj3greqLQk5jEX4dDytuPuucKZ3TwzNoDcPWfkb1K9XwT4MDpjM6XcAsBS",
  "key48": "2h3LUx8XhqPXLMKjhWdiktovUqMLT6j6GS99axe9DnEafDHd4fwCzcwfucVK7PQWoqdDRz5JgxwpX3EVKr5kMEnj"
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
