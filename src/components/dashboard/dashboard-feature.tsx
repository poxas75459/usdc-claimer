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
    "2d4MYnN7b95Pc8tqhmfBX42omqS7gUQe7JbCWdmvXdy2RhbAKsQGNez7sFXfL2WWHV8nExDfBWTGjCH3o1BLMHZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32veDYtHi1sGGbXGt7bC5FUssS6HDvy96yLa7BdXR2MKqFJGka3uJTzajGkgqbUi9MgeqqL4QBenYZ83rFAtB2c1",
  "key1": "35c8DFMR7Kv1pa4JQGaENmMZjXws3vZqkLdumjseYFxcyXPzLR37QEYjQ9CvBfLRWYqKUFxe7S8yFw3Ec6BkYuQR",
  "key2": "5rh8Wtojpvbaz54mBijJF1V6tRh3PEW9mQt8LpwhpYmo7BDDYuP7vo1uaaYaVjPcXJjBGocEAsLPc4ox8m8qajnf",
  "key3": "3xWEN5VkBVVJycmt5hiTGYxHPAL1QfZjBxUspfJ3XKxAjjC142wBQnhEvNwEqPaZQvLpNMygDeHkU5ajH9GYzxZi",
  "key4": "4529tyDHhUcY8j4wkS6eZ6TJ8CWRMXAFLTpusw3mw2sTftNwfcHcR6kdtXiwdHJfCbi3xN2juFiNAMxYvJ59NYnm",
  "key5": "4QY2zePY4efearTjbSVibc2SXG61vwsbNZYxuN7x9RmNSvqGEFsQRexpEmFfLpnBiRP2yMZRYsgHsE5XL2YeX9Bn",
  "key6": "2bxjwonWgzdbTZGdw5X5cCqHVAK9vtiviX9GgXnAQNeGtYnS71rcFVWdKus1iYdyAm58fLdRMSTPPSfdsKjGn25Q",
  "key7": "4u9kHGZHNP4zmtKnkPR8tsjeBNrh1QHUVtPqJVvgYG4g38JGMtKoCLH4dtBWNYEWbmbV56NB4Y8LbxWZ4yefETRQ",
  "key8": "4oWaTzE361QDSVsSrxnEohXhxBGV9htQSKUpVV44u5BL5wrfBQw9G9sqdt82FmUCadPPAotweeTA76294RhAjTBC",
  "key9": "2453HjZZzCJUZGg9ETxxz6PQs8Zuv1cKHkxit5TSYymPphsN5ZgjSetzVaGLprdFygTPNtckLqnHTjSMvHKVhpR9",
  "key10": "2bzAcaqdgEvSXNmD79ETxUa8V3PYthSZ5Zb7eXLQh1d4u7kXrAg2ZJ6eHfu3MEaMwb7VAbcJUXb29uZv7zBFBzXL",
  "key11": "4ZThWxmw1tfBCcubWyh5bXEvU9988SaZG3qhpjnTS17nLgGivyMuUACwR1fQY9hyBx9mGMkrfaXdoRp2coJa2Ma",
  "key12": "3rzRzyB9ge5D2FoAwmnESzyqVvx9CYL72bzTv9PU6yrEfJVFkBZgrvyFjN8LyVfdFtURspGjT8iUBLF18jBtWSZd",
  "key13": "3KuC4Cbh7ATGZqhiNSMi4JWZZHrGW9mctQYLPhs59xD3Qazie2MuUv8AsY7wRbkXgk9dC3stqpJbBeczqjZDErzc",
  "key14": "35BbxMbuRUZK6NCQnpis6nh65TvCcFqZDQt5QYnPkDAvE5MRqg1NnpjdH7vFGSqgMUS2wnqR8MN8ZqNtXaP52tqR",
  "key15": "3dfVPB8gRYNb88bDbjTorF4YEwJmnhMLLeoVyYpu2H7YMqHxgvXrdtvknN6qehESxp6M8mTiXhpY2PgNuRtqSZEV",
  "key16": "2ZHc75rfKJYsAPwM9qVQ2rdqWC2SUGNvEftvhE3GCbgP3EhEJ9u9LufCp5Em5dLe5aPKpqdDTKgcqRhLrVEBFAm",
  "key17": "2mq86yB2r9sQTNbqAFtoK5ugHFzkE2z65xmt25TqqMdWrhjnR5i1gCU3uRenNmtaba7sagELcHgKkHhouHhDdXa4",
  "key18": "2w1FQfyE1xSPYzSoeDofQ2yKMtiw3MCmNmEY9qojHSgbtSjzwWVRA7AVvBEAULB3qUijXa53XnvC2dAh5gdb9Eky",
  "key19": "37Xqp4qa4xnQZZtPh9bukxEJhjJ36tPGYTRLTXNzrxwWypiP5hRnMYZjRWxoqvBj4hVjCvD3SrSahngBv1Kee5Nq",
  "key20": "43ALFuBCTp9eiK5wMuuXbab9L8ifXmLLPftEYUNofuDJh5dqCy4RUwjneRhoCvxMuvQwfmVjj2x5qrZdrjYm1ZT2",
  "key21": "2mnC9rnZkUnF5BCHsHb2wvnbEF7LZ4oMSkPkMoqPjBVmthh1eKFKtUJAPAxGtzji3z7gTxFqbXs4qqaQaHLvgfJ2",
  "key22": "2PdksYrR1N7AuVqsNjyi4kNA2qFLdFMXSvKQ5MKP58ZW7zJNDxRquViUkpbqRd3qvxjNejtWnyXXgeQiLPJX9q7o",
  "key23": "4o89a9b6kV2QXqKsXgoZoy9MySn4EVc4rLBmuVngq1W9fTULMm7k8h7KHgMGVJTohh25jm3bUx3SYyGZ7n4XUAdy",
  "key24": "3oxdemLY8cdYG26hYr2Xerodd8oLwi1W3EfLJwHJVmuqVZFTDtd9evpg4Uhar6qEo9tm5Tcx7zZhpGXGpD9JdBqP",
  "key25": "JdXYvBaL2SFTYU5tQRnYbHWPf8jomzsq7mrWj5KK1uhGSGBM6Z1hA9hxsKziC5H6Xdaj4aNp3613YH5gFTEURma",
  "key26": "5nLgQDWJJRw9dagRtVGMXtPakUyRdtEuY1GQ51KYo3HbHJT3GCDH4T5KWZaBj9ef8Ac3Jm28BRizPfwqynE1z1vY",
  "key27": "hFTsRxEQRsnnHYpAcqdcHtS39FugyssxHGdtJXbv8pJgCypPgE3b9KB4t2Md8dzwjgrxEg2TFZG1m8p5CA5pWYU",
  "key28": "2jRhgKwQhh5rs9AK5uRS2YcTGxz4KKh6LuvLtKPrzFNAeEBTsqbWrtGiPHFoAVGZGbhkAyWdS5aNKjJJSjxbSSqg",
  "key29": "53w8uTGC37ckZ1BbBYUqN6Fb8Xmg8fwB39UVE6CPvXieFqbaAUmLFkyBivyvxt2C8iuCiBCwKt87H4U92N7HAG7G",
  "key30": "53VDPZ7KKeeZCZgUsYNvsdMaf4BCs5MKV1F2PyymZ6v7c9LjnnskrR8imScv9a3iVPctrzKJsrg3DJppNhtuXwmy",
  "key31": "4uWmRdSDzQwacG7NFTC8SJySZxcRe8BAeCNso8HSR8Ps2azhZ9icEQGAYJyHnnTqTbGANZnu2mkjYqmnkTpDv7th",
  "key32": "5ZFR2MN3tJsDtRKApMB3EDXgqWQWdneienAdCTdQeFnc5ucpVGGuo1hwJJ4zhUWfe9R4tP2y3tEziRQUXQ3iJ84u"
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
