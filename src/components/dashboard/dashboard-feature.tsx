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
    "4NSL6gAkmJoub2Mb26VRSToFJd8qVa5us9Z5PntfRdXUJupbQv6FyDvCka88tfcZ5UMutJngmGCUMNiiFaNEGZLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDDSg1c1zG56zRSFMtK573gQodupoqtMfFruevZcXgy1Udg4SGJXiHnKJ2sdu8KcaKeUkAskwWfrofkph2wwKNx",
  "key1": "2QPFWvmRTHi6EpNXsdNX6S5uLaVGpdpjpNh1FS2V5WwHuovHboKdTJ13XEn4fctpayLxYVQM8UyzPsQNazrWQfsT",
  "key2": "3CJDdHzAHjzUfv5ozLjsgMLbUu3MKtV4PDqMPrGKoTVPwraDqAPbnGfYs2hpSEaJYfdp6Z5eF615am1qoWLx7e6o",
  "key3": "57MKHfiJPdmMM2xqd6uwSTwScQPjzHuFUCuCNf1bJaGyzMpErjifwasfvkopyL8MnBqe8h9KugidTdAhfCMUiGj5",
  "key4": "56gJ2ieMFUm9VzK7AqvgRwD6ayrAnq6mXRxXfEyKfRP3YB9sjHd1BHZx8A74rJkhGkn3WkGFUwcuN19Df36rddiu",
  "key5": "49ScC77nXW3p8qp8gBCR2GBrPWo5kETpxHbfE5zd1nazzqqcehosEjyAEZT23rq5zScsxWmSsqn9HDvwzvio8owu",
  "key6": "2eWLfxLiFjaeAKNv1sysvswvfYxSUAneQkxmGasAvKkMKhD2PP6TUfKzDKiLNMiEg4pjHsHBWv7s4aXVXjjebujQ",
  "key7": "tuhwVz1PQX7nFCSUF3Gk1gf5TQZ6fqieoSqHCCG9wuTbVxVCtoZb1QoW56SJiwJtK96YWsy8Jy3MNx37MDnP7pn",
  "key8": "2CzQqv74X8aigZgYVJhtH6Hg3x9frdXmkiKT3iGRyDssThPb8cStxBRRfNUE1g2nqYWbKiPTngEtHTS5YkKKSZZW",
  "key9": "3TAGZitwjjME3oVLa6AUJZsbSaCAkz6VjfRfUHk9dQjpmhbh9Am4cJsd7WbNjHAxZ87dqqi28kCSG7a9Pm1tmQUp",
  "key10": "36fwpSxfxp5me74mzP477QSqgW943avUbwrSYuiUoY2PNfQNWBhDvotLTf4d63f5tesYLkDTupV1uvMkSu9cYNav",
  "key11": "4pretH1feBJq4ViHrAEvkvEryT3hL4Y8hnXxTWyXwxrWW5D2rDEoFb726GaWKRLNqGnH6LQwg2BX8rXWhWLtNPe5",
  "key12": "67XEf85nqHuv4aTGRXriqmNN6kKEZauJAxToacG2Rw6iygnJmbBDQAy9NFkbF8DP2QJt5qGWNH25gjnNtsdr2Nds",
  "key13": "pukmw6bLVKDkpxr3Dx5uFTugXsJg6jjLpXi6SjWjPmXCpz3HByA6juENB2tKdGqeFFzrnJpWPiCJtxDu34eiV4S",
  "key14": "3B6QBnP7EHpH8fdWPUecTgZATLuX6zbGLh7xrvCrtC6PjvPXeyf7W5xtJwm72oGVhq3W86PcMHiXvwenn6ffbN9x",
  "key15": "4i8vTSQ8PRmwifqRbbA249kPaLWdd9JdCeY1pZmqp9fq6V18DBehQe3QRrit73JqExhmAjyRp7aS2kE7q1pTWKYn",
  "key16": "3hedAgdgiw99np8UWeEpBLE8NEwN3pGh8dxrxMoMTTivV8nrpSdcV5TcE7xhqrZziByLWikV9maRMNv5crAyJNPy",
  "key17": "5MbX5P9iV9bJCC11hVQfueR2jmUDJMChJvi3GtGs2pZDXgVTx8CQUFrM3br2ZA1SB5d9N1LTREACxK8dVhMjmSwi",
  "key18": "4GW6DvyhCeTyxKPxXZitNbFo89i37HWDmbGTpRfHM5NBAdhbHZQMWMHxSETgsbKF9Lvpx3Pjcj5TXh1BRH2NokNY",
  "key19": "2LyecwQvPFg8PAPbN6XLzLk5Vd5vffpLAvDAXnKjbA64u1RqYhd8WGjB18fpCFvMhWrZyYAhyUDFoxLX6bjKoS1c",
  "key20": "3rXw9GnSWZ7p7Ve9qj4n2dwDY1rRdFnghFKfNXQiRz9NirjmpjnXdxbQTvD5aeFqgwgocYNAVUd2wHtRUSFL42Rc",
  "key21": "2JaEmrNwRt99zBrDMSJ82CQ7DWCzynPXCjXNWyJBzd7KJW4ogdDs5fLWqheCHgYBCVJbUKk3hKE15zdY6nvr2Nn3",
  "key22": "4BRrTGP6nqbX34F6Whstke319po7mWjjnJ28egomqXuGdZ5LVagh9SrMK7NrHJVhot9mWm3c9JbuoGwyAQvTjZ3d",
  "key23": "2qyDTVwBJrajbW5Edq1n9zDMsCNeuBvVwCpVK85D1GwmMep86WVHnxrSQVuXMb1PxNqZjLqLaBSWcSUsj81RTYxz",
  "key24": "dcpeLNrcsM8f8C6vkRnudiz82JRKVenBAF4CKD6dUqtcWTMzRMkswxR8dbcTSvqugrsejBPxq57h5QM1V2VfFmf",
  "key25": "4YwDJUk2wVdMZkyFHW3nX6bLVgkXYRgegUyYxZwDKxw8SJPMrkT86jQKJBue38Y1Q4T6sudFJggMesfQW5uYx1wa",
  "key26": "2gwswS3T4cyGm2oyt3ejoHtiGdhG8JSKQKbriYjrCx8FCZBqQQ4oBSMtq9zb66iphjgsEii6iE91oLmaLioeFU7v",
  "key27": "2Wyc6E88JNhv93vFvZBZKDsrUqwwx5KCUStEgioZYWovdg3RXbu3PPLoFi1UihhuaJJH7pc8HKL17ToVXK3MhZQf",
  "key28": "4okpn9TQaX65XYg6xLfcm2LREVNUMF957YquvrzuhdJhHbhadGGRVebriYoFG47coNow6FNTM9AuGiu38JWL6ccC",
  "key29": "1VVHPq9quTGonGbwzpFupGhcWahcRnP7rdg9UzLsntpNzhtcg8XTRdTPNuQXeJX61gtasPGTYrTHHuw8iaT6wLb",
  "key30": "3khKJxbtduY2oELum8x1FCc8Z82cLsCTDUSa1XS5YBR2jFaaHw1yUZuwkgzBFgiExfzKeubG2YVtdyjdeohf7ChF",
  "key31": "2c2RBPnCzPidyNotZJMfEgdemxDZqYVumLUJMYrhfHaVsKsrUjoiGfVtcSAQcqerkbV4nHYxpk9fqhRSAfBkJvW3",
  "key32": "5tjE6gNhxBeoKyiksgr9JuPEiNSoFKSc6RVNnZnd6ymVdu5gFpQvbx1MX6S9WijLYC6tm8YW4jQVQ5fJDJaDo7EF",
  "key33": "48iHF39nmchsEiPoAb6TccZkGTE9gRX26ZyBqfks7fsUug7nGHmXEhkcxnqZAAfxpebUjJcTLwinT3Tj2mGtDyPu",
  "key34": "eGwa5YkgieZsaFCHucMqoF6AcSrzNmHK5xTjimwoVxzC7uorxjwWZfn5kxV9nL2pdSDrNDMj8gyVPpvEXtsRtdX",
  "key35": "Ep3L7tGVAxFW8W4pUX6NWPCsBp4rWQkeosNcCskSeVvWQ3wQGBhXkvdzsYjJNQWaDTev8jjtZakutQhQZn3QUjp",
  "key36": "25eKY3qukVkPS16APBBZXkLLGVUc3Dga1WfvXFHVGQQ4Wnvm9UPZcttZricPagmiTDzQEPpad2DrgTpX6tgXVBTG",
  "key37": "59g4ktP3kTnCSR8wXAteFNz8z3TQJjo7prxoUuooosvyAuLEuW7WX3TMB9YTPp2DKFAF9wV5k4At29fcpYuqt5zw",
  "key38": "2srTV4jGKkBjo962eo3987J3ZzSa31xiHX1GvujpdLZoGWGVXjTD21ZyhrBt12gsQ14rqaZjKaJQZmKrteF2qQwf",
  "key39": "2VeHzEgHCbohN6xd1USiefemuBaNzxeZVUEHTyEDvhP7fQtzP2rrdPu86xTRsic7urQmYNRdupKtcLBUM52B5u1g",
  "key40": "5bLY1KZkLAUjfq6HLniMyaipF62dqaWPFifrWZLRjDFhzxtm4RR2CtjMj4VsveXGMsVzdry7N5BvhQqs9uajQngn",
  "key41": "E68kf3jpNY6FBUD5sLGat9Vh4oNYQqExKgdcqW2CKdc3NEL9mZRNBoc1z7A5TxVWPT9wXPo8F4XwkdSDVmJzmBn",
  "key42": "TurkdpD9Z6cueqeLvU7QLqj4Mb1SsmWqHAJQbtWf73PFNMF5VLKs7853zVVCXX1Q5U5eyvdugu1YsXBji1gfyCr",
  "key43": "3VvE9J9wSxsraHyNJ68kuvMspg3FHziX3B63QePZExqGHNNSPhhJgNCFyviyL9Dtq9wsZj2MkTHbJxTmqgAS5FJw",
  "key44": "3J3M8BtW3fXoZ9pN8BLUgr1XNDtqzhhYWWSHszQV1PKxJ7Swnw5hGppCtb6xhabLqd8RxafbLW3cvw4bd4z2CNJK",
  "key45": "mTzekeDKPbACsJzLdW78ybfQ1oK4JxZW9h6Rr5XLM7KKhVpqc79cJcTdqinsLopju6KnqKtECv3X9aXoSsRmeoh"
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
