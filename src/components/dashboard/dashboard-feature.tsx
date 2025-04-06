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
    "2gQDvb1Lf6wEGCko3zwL6dCNvqsxgHeCof53LqpUTpe2ffvKjm6kWmvxXa6pGVUX9n4n9mDPPRQgfGoDefoKeeFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCjbcgw3ApAyJShvDkddcn2ftdy9MtRH4TkGdGCfmawUEm2vAoBiauScdTRYYzXhRpXtnKsUpJkZPpsji44yr1u",
  "key1": "4Me4JaGcCqo75bzPAA6V9rAoDVZrHwSJWaStqXMFV7kjmBvEbRkyRPhjkNW2SZe63WNvzSUnwetbfP489QCZggdm",
  "key2": "5ZXgHQBERAF6CKfdomve4cRD4xxFdr3pEArVDimeKa9G383a7RDZNjQmXWuKHYWNGPJtGzWKc646NwfiMdRarG5Q",
  "key3": "3WKNNkyV5V72P8jeHhmEqMfSk7Z9QFzvbSN4Mvpm4ZzXwPhWfHSmr6bepdEpqYYZQpHM8t1ZyrLvJ2uNh5tRRtfu",
  "key4": "2UbxqRJxvwur2GPPRF5GNbSL2yiyMSkeppRW8FuCzZyVN8x5tiY6yu4hyaRUzAkZwWdvsbgKjrvzqMRqqXjjygKp",
  "key5": "3mKrzLzL8oJ5EY48MWkiQ95F37pTZw3ATLuXq2KUDydF5263QwVjjeJLxn6NSKXuScSocWEeoZPRbbLoWoRtMGWc",
  "key6": "59JpxeeH6b32sX5QYVf48Fp8zTEvrgtYzpCTqnozFwML75WbQP6cP9MbcguxvtA2mv2ncQ2E43FboUd5hYJwH4Uo",
  "key7": "3HpoDywgCBaUE6ByT21Uz5DXdZLqEvkv1pRmgxRR2Vm8MJ2Ti2uRo4dr5SGrNd4dpUoPpov2Tpeb5VD7HGt1KVpw",
  "key8": "2yXNoyfzZV5mB6ojfuj5yenCTdRvyMVe6Jc7bLJG4nku1dyYz3dUF73XtReeF16Uuogwe1cq46i2ogFZrkXbtzaH",
  "key9": "5AkW5fGbgtVWreB7xdDVVJ7wsoSpzuhvWp1umaB6kCd5nDKFs1QquaEzXfbYTSJWihLZHYgHg6o2rGEQJm8pFC7M",
  "key10": "2Z4ARkDDTW9ynzXnyst4MgjyRCktv5ZsLmoEenJf657vwXQXMcEHRc2Lsf6yU1bLuVf98ccMkfArnQiQ6Dq8P3su",
  "key11": "2xKrCMzm9rXMZnCDUPDQBRUVuc2BUJR5ruMXxVWhy8m1vo8iAPeHswx5TXh5UWguaJ4oMSj8ZPNDSktgAjKzjoEn",
  "key12": "DWsCvsufeehKsBkgDtL5aMbpGR5oNoVWLDtJxMtfRyj747qcwadtP9eXGPEQWhUmNs9uehEj7NuLaeW7NfjBsKk",
  "key13": "5uUGZQEHdfs23ZD891VLYHCz9q4coujjRuHtijgJrJZML7241CrmHDcMkiHStAH3bWX3LjzpprvLq8k8D1H7RTrs",
  "key14": "58PGA8vnx5d6FeMX1FxG9wCjemeexgssxuPs5DteX63MUR3ttt93GNSffNVPTtUMyLwW1PAw2Mshyr6EkymQaY3n",
  "key15": "Kwe1K5devCZB4WadmhbZvUUYTS4j2mAvQna7aPfXCY1xYg73VxR1vrNanq8bxUHK8pMJzwwcRfdRcheQEt6yqc6",
  "key16": "472TTrmNzdgZ6A6DqAWN2ySqyozwQRvf5HHPgy6q1vN9PKfg4vtoUp2UTGYnhR6aSEzcxvCc3vTgjdmNQboxu1US",
  "key17": "2jsJ9fJ3hC949ARuoqiGf9oPL6aUHPYyrkvzYPtf3ZvxqtWKYbHtfG4MKPF5Y73q15dFPXC9H9x1Y3wzHKDBuZ8b",
  "key18": "2pVk4LMuwScYKkoHkXtUbaStkuZY4QPhqZHf2ZQx76z3hkYMA2piaekEwYWH3ASMVYXANbv58ModynGcyiBRzZfp",
  "key19": "6FRiQereNeWej1jLpvqTDTcLMnjo3XxPjTXP3khdXEh9yPqsre6YHpmuKBMnhZXu2s8fxGHdkHZDt6q1435E8WN",
  "key20": "4ijjzNmXGD9nyu4XsHrpE3TtTRkRwkM1VYff2ysUjYaibRKXBsuV1iVf3VK7HvbjB4cXfeVVsGYZzjsghXj6o3aF",
  "key21": "4b18T9joXLZKL1kMTLCHUv2DaeivGByDqcupPtQcAwtfVeyETLtmfPVy4yMxvHmXVsHJYYCrDajBgwCAHHa6rTeo",
  "key22": "4ge18wmiNaJw5i8hgZFaKrwfGET7eBGXs4Ad156ujR6QCXsjjdcp5qpMpiKHEaW65KhLPPFZ9RkpjwRZ1sdUtYvC",
  "key23": "B6Dfv3ihRnaE8zbxW6gUZMZkKFaNp1W87UAFsAC9kfRT7SNN52juzDeBQz6U5hVAuETAJ8c9B9vdYzZBDTYhgDb",
  "key24": "BsTCE873CVChvAki1NK36tnvCuYEgv88DEVoJnvrFD2t6jHzqSHQqwxWaSMBZHZpwdQumqXKLMvqzEC4ucVw38f",
  "key25": "2ia4oiGjtwGxF82jrAGnvEpXfYwASe55x6dnUehL9VJC1gJo8wGzfQrqMwagmy3amttzcCRFGAYXzPUwNqiPU84x",
  "key26": "71tEsLxaAKDJwqHk2eewzdDw8dmShVqrXDdEXarg6eYgVxk3xGAaBK66h3SZjmXcZ7a5JXJxYDKmW53SGD8fKvd",
  "key27": "31sr3tB2HCLSiUoYnvw3D9DYHdLxi8rKjbZ49vFLz11MW1dX8QF1rjLbKMBpxRprhr91CTrpLkh7AkLqqcckRGt4",
  "key28": "3k45Qxd6Fu6uiD9vyGzArRyheES62AYxfd3Vy5UsuVNNtaahAm9b5JbFzannmvR4GZRssEUL47Pg7JtFby7Mh3PY",
  "key29": "JRTXgz7h598hobTizb45b9Ms4Lu6mShS8teAANpzdXfZojmPeSLXZ3F3FXCToBVePvEFMxaxgkTLo1gbnEp9y3P",
  "key30": "3w2N7zbh3A9EvNp5PbKaNPTGZhdwiteU12WMFh6pyb8bTurTpwKSeQEDogKNRjQb7L8WAcGAYiciEwvd38RgStxa",
  "key31": "qNbcV4H2TXfXrv5NdHfbJ5GqfwHkcqYrtKZMbiMAJPVPxiB3oY7UpYX3ZNqvRi7KhqRm22SNxoBi9jvPUyuffUP",
  "key32": "3JpD46bZ66NSdDuPxQtdMyBrcYm9B3RWL8GxkwgGgSfkVQpKu5ZpuBhfvAaCX6KUFRxUSuUdcp9ANJsDKRgbzPNi",
  "key33": "3YZ73asykwg4FgSeGATwFnn5aZpCC3FWFouKRtyCRZua2ew7deSK8tMiuPoLQravthAZ8djvCLKSM7uMuQM2BcY9",
  "key34": "byRnCxGdmdVwqLxvTp85W3BMCd7BdsmgtzmxRHGP5FmRgyDLSqmGAMaArzETpTRoReY7mmQJSU9N6JJzvum8yxL",
  "key35": "5K81UTHQeYHgzBmn5PHS1r7kXrPHHH2Vtb25As7i4TwniaNNwrWzNgK75DGj7g5XuF3YX9cGBTqTmZxe3MWocc2s",
  "key36": "XS6sheaPDBNVcUYKT1Pqqnoie1yEMVLpewyoNt1WjCjBr43pzhe7j76xr8twQAc8iDqTa7XNXDmCMZARzhuJtop",
  "key37": "3NnHpXjkiuaKTD8su6mxpHsMRLSQKzr98j8fc6i2c6v9NvHnyen7MXsw19B1Xi7SNJDFuzSRoSKyE4sW3oLdhTkr",
  "key38": "4gdEBDPxU3mTadTwrgzkCzU36zKp4rsw3RVZXmc36GTDSWhoedKJXsEZ3qLTB1uFXo4skaWcbzFsH3h87kdioNZr",
  "key39": "3Z3rB8mfsNAfibFiwY1YAuK4Z596wEcMjR3qtKBGZQBVinRtzYjFa3EdBNgi4wQGDVDQGPDek5e2fh27RbL32diK",
  "key40": "5E9SvPpKbakrdmRQNsMHzEkxfMwuw7445F9PZ238pn92f6YVJrcz2tEP4XQLsmyyht5VMHMajWvaGhcRuNyJSnpK",
  "key41": "2dVm7rjycvkYVFDRNaEiHvgjs3MXsQjCRpRwbHphptGimPq2KXHooesbSU4XPpweQYdm52Xr8aBbKfHyzwpiCee3",
  "key42": "3K2MHC3ABUnKxjAYZD1HFjckVXAtKh6nw5UjDR91o29iXDzdPeLxMVWWTvVbK7ta8n1Lm4oHgGZjaiC9ChDL5X2v",
  "key43": "3CxXZeL6miFpmKnsX5vAkoaQRSwsP78YnfGbFUtaT7rWvgkaMx21TCLhf8um8hoBtDcyoLEubtoCdLV3JYjGy7a9"
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
