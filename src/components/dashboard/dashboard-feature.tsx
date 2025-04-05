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
    "3B9XjbZiTmRt3ibT4qzeFAuMpDHMZJK3DXQ7GGFTnEBeSwYHb8TxHWNRggRSNM7zikAbxdXVYoWMwd9L7wmUoKwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYkqFtCyA7Dwj8xndMLgnJqwgfyxmjMNZuUwfUPV1KnvVvVzbDNjbse3mLrNMmfUeVxZfBA85S1E5xmquoZRF7M",
  "key1": "w8VhY8hd3qgMGSuzFwZHBv27xnEoHPpCWNZB8XHUr1h1LzkGDRoUsLiLX3zMS76RKA8HvX3WnNCoo79HM9NPK5j",
  "key2": "5mVL4qaWA6ALjQs2ZnJ62ZcFbDy7D2XgFuiHWp4TRUdn14PB7MxmD7f3FPnFMeYSPDRr4J73RxqmWEhd6JMSRBW1",
  "key3": "397jCcec7K39YXR6afTUAn2g6buefV3NpQFtQZTMoz89cn7T8qKDjMEGtFA77YgXNDwjuodFp9z6e3FToMCeWy26",
  "key4": "51LAiv32Wx8R87bVpHks9LuBf186ckfKuEUhGi1fNRfK85hDyNpmDVezWLMRmJU4nk5KGiJxAyb8F9EbSUbkjsEZ",
  "key5": "21TtKnqMGxQwmf7k3UoCTUy9JxdcqynQGqxDk5iPDCzwny3xVj5GRnHNt7m3yPkaPYq4mNyeMy2bRbY7P4e2tR9f",
  "key6": "CrGupuCZ9Mjb8b97yA7kfeYje2FybSYdw1veoRwuRUgxCggWUwa9CjAWcmDyihSPrz5twCYuZPXbCZm6YsT38RC",
  "key7": "4rJ1igYe9umcHALpntZNW1YDVkJj6C7fXQ6q8enuHoXi8UpPsg2pg2KtrrK7v71ZQiqyY46oF5hXKJ8uZMpqcvfk",
  "key8": "Y4k6X9sY7zXq5i6sbjXuvjtjYhuz3KGd8c3C8zR55rbyXjRoiGeL4ATQKuN4Gbq2H2ghqgNuyaU1uBKdFsfpDU3",
  "key9": "rx11VfjF4zsYseM4N8f1tvVmPs25Q34PvuGBQwYV3Pd9baTEJeW7Dqp27Xs2z7mcpkR1ua6wNp4TqYkRxZb5zMy",
  "key10": "AhUrJP2Tcvohivzg2Gxn9iBMr8D8ZaZ2ZGcaaYzEzgd5HCpPMRSkDigSaz19DqC3Rj1i7DrBoHvTsZaztAVgu1r",
  "key11": "53MdmRVceBTcdjLbqdZgkr3k71jV2NTBnGfiYyVTNejGpJRG3XoZVfG4MkJp2PHg8fxsBhsVRus8LLP2HNxa7Paa",
  "key12": "9tEm9Y1zKttJYnkXwwj8eGieSJBBLQmBYsacyukqVtJM9ruwrcB4ocaP2Y5twFFKG8cPi4QPc4A1UmSQYfLvQHX",
  "key13": "3xNeAnbeeBTxs6VbNncNsyQd8VJ27HQWYuqTZMrHdKr5WvS1Li1PfCfrVwm4syheYCz7NqEmp8AJHeBpMNH3oJyY",
  "key14": "HSdgRkpgxfMh9CiYYntTpb1jAsA7Fknc1qE7p9SYHH6WtHbnJj5T8ghTyNN2oiKVGbWUCMMp6LJ5hjiYiquAv6X",
  "key15": "gNs1rqoKSBTVJ19syUVtqwnaWn4ekQ7YMsMaxhXiM5uWENr9GVX143abf9jEcfG6miXewKfU1pjgR64NYpWfHWL",
  "key16": "5EvmAe9Mq9Qzd3qBMrHpeGCuB12D6Ap9Rt7CUgKUfwELTLe9uhston2EgrSk2whXS7KkG5tXKQM1D5pB7yH9SU96",
  "key17": "2QASzoGYwu4DMCMkSosuGZhB3b7e6Ki4KWxTeyG94WLyfdpmLu2wta2kPte6FWDxzLS1EoAgT2kJJ5jRHUiAykXT",
  "key18": "5VPrwCfebmYMK2aJwKTDTq3VXXzBBNF4Ucep3GTSWG3HYiMnkavAvYDyoT5FL7iy1hBY5owb4SXa5SjUwEPXmV2m",
  "key19": "5Y1DfjDmiFAywPtpmaNtDhVCbV3ZuxNj1ktiqay9HrERUc6HYfUYVMyNLhcGWPByRS5Q3jaBQ3FLPUxAgByqNjbA",
  "key20": "QFxDsus7Tq2P2xbo3isq2DPM1GG7vCQUfpyaFfoqCxw3squ7vnT4PaKhhX8AtNegXBgN8VcHZ6u7dVUgQFhH3DD",
  "key21": "2XDJrWhXWx1LjJnQegBnkLdJCZor9eT3y9X7BxHwmTqqfr567sJ6hVGGRE3g8vVusjWM5hJV5p8E2zXivzCJexrw",
  "key22": "3Y9ceLvgXdwgzSByZNxM5gYDJKxVrk6ALfR4VkahjMS6RNKSVrQuqxn7PRRJKHQpffGMkNtrbzFcfNevPC9oL5Ww",
  "key23": "2PkggzjJVaXioMAxESY3Ggx7DkXyVSUuKHSyXQyMepVRcMQW5hg1JdTjtR1VXe5YVJUFfH6t7T2xnoK6qeq81DTs",
  "key24": "xZkQo2WPBK7S5Sbv8MM5DpDmdZqNp9WimXLaNBJQT8fi6Yma9K9pKfC4DMm9iUJtkusGT2c5TdCWDFoTB59AS9Y",
  "key25": "prH1uN1Nt9ea6WSVcYdHyufWV5onPnmnxqNiwRMjFoFTSP9h6rvHSNfcJYcPschWRpgXGcvKhZegxHe8Y73iKyK",
  "key26": "3Xuq94L1kysRRNyqziVxCBZetTw6GUiN8J9vYJyohy682nqVMCUUGiX8j62zt3t4zVnMqXhqKVehoNynRbn4yD7p",
  "key27": "38geXyjzmx5zrF9mfjqtrHa1JFKAeh8tdiywq6gqSAVgzh5xHN5CDgqC5v55p1gvyFR6Jkr5mmiU6EkWmwfsX14E",
  "key28": "4piawFGrJWuVPco6zPdMY18PUGMXbk8zdLMsWBBDwATEM3wu17PRhyqVmQYco1xAMdBS4D7egs5zfigTNapvJ2K8",
  "key29": "3pnXKh3P9pU6uZtSrHN9Dr3kb9kXyM9CbjNEdKqmjBWmSxWuzkNJ7MHXJYvzgH95KVDq9E3PpZeeeQWNvQeU2CcP",
  "key30": "2A1DbDZkSV7moKQyQqDMjKou65CRE1C5N2zkh2f2yoiHpH8qMURT7kobktRhvrNhV3N3k4S7s7dHm9mRPVefvHUL",
  "key31": "2ZHPpHC1ACCiUKpHg8uHC9jHovcbwPzWAHm7YXSmuXmgVPmA3M5PRdm4ToPGqYDPd1KSbg77UGDeCeeSAkHQt4ic",
  "key32": "NE77iHh31CYv5jKRrxgasDPrRHjrUrBJWWq35pzdcfgQhUPD95LvoUbJc2x9nhcDmkqoFBsvWroV2gyGpPYRNEZ",
  "key33": "5ZKQhQN9VqkCvTkWDpgcdodhxrtJwcEccBzS6aiqJwSQB3PCQQjBVi8Y2MkLhWCboBzGBfEs5713MAbne2441usg",
  "key34": "4DSqXJsXn3mt57s69WDt5yzXJBhfiwA66LHJgmmDprW9LWpBNA76uj5NLeDUV7ey1uNQrSVExWaawrixc19S9mbF",
  "key35": "48WThCrZtoDgMVHDZC91uHFvpZuW9sLgSC1wRWUFijeCBToCCZQ4bbNeSC32oReZMRu55jrnoKQ4tYXZjS1cn63A",
  "key36": "28hwnZgnT9KYTSxQUvQdaptcn2CzmUnadbdbMpyzhCdkAuDWpLzB72uPiXjH9GGBLSv9HpCCJ3i5eXkFYr9Yar6J",
  "key37": "4vyTYSiiLr17tpKxEA1ijmHA4QPCJkbGC7VortwoNWSxNUHLJRBzjr5gWE9JYa1GTGQQLtLjimz1veKrdiSqwunx",
  "key38": "3GpqCC8bnsXQKjDFZeK1xiowGQ4xM8ruHxDh9LNHEoJ8Me3zqKnSvBeJEcJx8TxQoM4Cf18hwzNh73txb8dh77se",
  "key39": "36j9x157Vr4MmQCLJyUPYbjwvyj8tjdscgAbws9X8YfncGEXdVrPgc5jH41GTKuodBoZvrB9FDuNkmB4xivqiQ1A",
  "key40": "iik8CT65mp2SHGxnswVPixTcF82DfVvjZ3wyNNQp5Z5LvWwj5bFP9mEhid6CYQUAPzkRyGRbB64AXyEU1UY5h3m",
  "key41": "2JLeHo1xJMwDQgq3H1pJhN941TSDPQEFMECkGqyPiDa4zJWSn3kz1TTvJprVvfUvqh8gdxYhx14HctwJJcazTgHs",
  "key42": "q99xpwQnwijPYCfTxJJ36rMtFFsHc41XapxcmnT6Aub6gBUmh4PjCipPNbcKNT2ju3xtm8tYVd2vQTaQAX4K8AU",
  "key43": "4VbnVxp88s6nDN5vTUCyRxBXVmiEij2b2hwLneCDwj36WgYBULoxiGSNhnJYgW8VNPHtysaY6krymMt12yuBmx6S",
  "key44": "4GBkWDo4BTdnzizWnRhrkEXPPDFcTsQ4eaxWzHkVWAU2XJ3w9zH51x6VFZkK5BNgbuecAj9LWE5fXaGHevFJkUY5",
  "key45": "4bQyMiYTUQBn9FZ2phjmTe23gtxDseNcQcyeRM5xyVLRyiVZ5YG6kLnFiWkpvJqdH2Uj3T34as89mhhz1iQkD6QM",
  "key46": "1a3n14ZJTJ2bFyFcoiyWQw8s6XLyLyfpKeWNdZHm39zi9trRJUM4Eka74r26oZfd9ryyCTtirWDZGzr3nEdUpk4",
  "key47": "4thjFR7udXRhK89z6WwVpuUZMM9YdyCsFL3sfvLS3mv1iM4f2UP6muUYYb27iu8Jrv9dJ99WRqoXznj6wuz4eMzs"
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
