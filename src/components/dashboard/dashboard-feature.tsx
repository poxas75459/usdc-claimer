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
    "5Dj32ywPV1spc9s6fYM2Eu2XphZqiJmfze5AcQ5ZJpDFpzuDKeFjF6BKci7MYMSdCsmBZaxqcT2NwXq6M558RcdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTpBXNS7QaGLksthcq1QHT5UW25wJeP1KoZKeQ29W8f6B28sLvhBq3HF68paPdSfgQxVBvBp8qKBuQveZttxaVw",
  "key1": "4axnCZsfisTzruRCFPgpMaqcLP29NMrt5wAD2Z6cSZkSJYAkR5BywgRApHQa5jrCBefcX1NMysRAMYGTauGcJ5eM",
  "key2": "1o1mHSrAijTWaiu3mZsg8tYHjbdHyWAaz5dbWSHW7QPi6PKFnPuhiGutgnvgaqADHtvUcB1n6BCKwNS1BuvA62x",
  "key3": "8ia9YHAEgASa2upWchMU8uX26DDb8wRV46gxbi1nduR2P653K9Li7EFD3QHGPXseeyEUxQTdZrCx5iECJRtNsaA",
  "key4": "ngsUVUEE97boow6EL5NwBULzFfZNWx3chUMivbrNugVKT4FKkRspjo581xiSPKkij4Adb7x1C1GAiu9PBjKGuBn",
  "key5": "39sJQg8sgSmfKKZ9cK41CSyFqdR6smKhiF8ayYa7NWYq5SUwMgi5wGvoFnTnZL3xZBVmGjGZJpbgbPnjvwypmGKd",
  "key6": "1vvZS1sJx4WpfjtQBfwN4eaubShUfmQfBJGYiYQZcnC4TMzkj1NHaRG8TiiC8frrW5ZbrySHBr7ie2KY1o6b2ot",
  "key7": "3YQpFeZoMgacPUcoMhfDXWc27QDEtWHpGjmLh3pcxeSH1YfRkMjZSfng5qXLFwRxXeeTs2Y1gP9Y4dieLWHyGhhE",
  "key8": "WzgEc7e9zaKimh9xtfz1pXZCsS14amu6U5qSpgD5tjXuPTayHjzf4shD9w4bfdTxRodu8jxg5kCS7EA7iTSdtzq",
  "key9": "2H6EXwQnqLmQtjWJbnxUUZUyF5joVmfWGDmtDmRGbRDGgokjibP9mKoJw3U3GdNm1hYfxXcGKdZZoCTbtCkix93w",
  "key10": "4cnj7kBhtdMdKbAz6gNNpCWv9GhN9KQ34duQeZN82QCHnMt2xkvSYe9aR1H8zTY89KbFmnAxnqBTuX1BuKZJFsqx",
  "key11": "3opka5cQSLa5PULdMnQwLb4t6P76cdV3ea713wnXgJwBEjBkvBWBUDLLXh6UAeAev3D9HYdBfnUorzJNrvhFWV4n",
  "key12": "3e3Lhb1dWjnhqz3u12oBUoo9nWN9hH4U3r454zVJn1UCeS4366MSxTA22fuPmKaEH9nkZwai6frKJ7tPJoFUeB48",
  "key13": "4975wTeFxhv5fmuR4MWX7Gcj6KK58NwJd2yaxo2drRKaEyVQbKqaRPZPAo4BtnFXiezkX9Ljs4uigRXWBqdxgtNV",
  "key14": "3yeZUrg8D3WrfmL81Egnu2XSm9DfGKR5y3RUjBx4aik54hwcVkqQDnhgjpcKUc32FcPNrCns1eHddjHeJVJ38aTe",
  "key15": "Le1bNdgFbHbusircLEauywfHTExzDGqtdkRGUjQnCvx7ux2Lxq9oPAkiS9cGpFkfctSTkamYvNcbcSTCm95JDJN",
  "key16": "He8skSnUxYdSJ7NTyYxc65X3ev5NUGtDE8KEySNi3eDzXukmbEVKFA737iCMSdLPCgAhCkTZDp37EdjDyvKt4vC",
  "key17": "36R4MSVtq5chqTrwvteyvctH1KuqPmvTcs9HxB6WqjBWqf88sRY4gUUiLPNU3NRXjMZE4WQPAqFSezn4ez9N1KH",
  "key18": "g7uTCMNs8EvoTegojFqBh9GTi4ExUwAuwfiJJQi6EsGjX8UvDR73Lq8nKzt7Ht4opha3EXxqk2cijhmMpzEprMB",
  "key19": "5b9VtBKS5DaPERyKuWQYTq2Ye3VFxpAm8AgPDmYmQ1ZvgePXySsBFWyZbitkg4SkutUb7VMs366XXq2gomKj8CKe",
  "key20": "3M69JmgMv6UyqUmz1htTvKXTERETfz9LTPvKqSUKhBCAJcbJSQ9kB1oZ3sWyj45DxoB2o44m3H4yH4548UziVTMt",
  "key21": "2Yk6TMqkyNCzmRHkBknoaVERRcuRnnZwFsQQxV6CYA3NKP6BvKQPYZJDY8HZUSXJ9vutmuyE89UVbA5xtrX5w9GS",
  "key22": "3FDbnVisqdwqmBjKTUKprXkitSsxReHRAKyGHwrXj9uFMtWPmoGFu1PWTWBgwKeUhppQyw36zrv8xLutn7dbRYPR",
  "key23": "2GLjc8ac1r1PDwFU5iE4KVMU9AgtxqcXzBzBU3AGDs2WmtgtU5NsjT4KDPyKW9Mykkut5dAWJJH7mqvbAAzBEdZz",
  "key24": "4FoS1UAHrzkYywUv2PGE5GvPHYv8JV2maasY7obSsgwrRQm9qLZwF2FYHY2XqhfQNHBrgmWFvAH8vhDnby2c7XAU"
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
