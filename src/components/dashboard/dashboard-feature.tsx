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
    "4o3NQycSaR3cS3B2Hi2s22ifB7KSErZrtag1kf4mKaheydi56bxrvqBTVykrmaQmrfw5w5bVBmax7SRUF8LgBRDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wny6QU4PexHkbVHTMaCta2X9PrnDsnKJiSrFRcATS7rNr1taeoioMSyapQZoe1vjjKe1jd9tnTHs4AXBzShtFTf",
  "key1": "2XJBdqbfWRb1c13T2WsP75GrDVCAwqiKkX2nmiki1SzY65qSasrDJc61FBoTReDqZTtLhcgq1FeyEredmajx68zB",
  "key2": "647er9saie5eF9Te9igUCTvb9Vfo1zYU5bVfp9LQaWpPYc68Bs4rq1Cq5PyVdMax3cCJeXdB5dbxMHEr6J4vxmQK",
  "key3": "oAQj2s3H6P8Eww6EN5496JDdi1k1ts8RafugMkda4HyAStfcPucr3aPK98rcnh65DDtRyX1KoCyHbUubUidUnyC",
  "key4": "56hJtbGybuNa9DH2vLSRsds5pTGp6zQfThGmejqQv9VGE2mFwPaaN7o9AE56AUQSvGcpgRw67tTju6BZ1YvDX45N",
  "key5": "Y9mDpBgvDyGbmyJ2hgKzDXLkFnCJFsfuvC7r9wwkUvHp6cJCgAdf7qRX4ky4XLSZteWwuKupS1LSgeWHjhuriL9",
  "key6": "3GLmKMRhFqx1qdtgHUkdRWyEnjh6Gsz8sdEmAoVZBrJ1toXLxFbUm79NgH12eMzaNDQZcPVJqEc53rPbfc7TFMGu",
  "key7": "7DBWDGkNZpzQNSmjWagktvBqhD4BxjGGjrDGwweU1AZf1VoMUe8YVB84Hg8y2FnGsp3WKpyRM7YcTkv9pPgCwus",
  "key8": "4HN3QUrjpQ9ieBuKWLZTDuzMjxQxFJRNXNVaMyvMc6g7nzrXtfKX87zYE1YMDhd2CbyGeqeSZ4RCQba6DVHhMmhB",
  "key9": "5pR6XgHY2B3qH5947WksR5Fqzg77SivE1U9iDbs5t9fL9oYRoYr5EcPif78aQF9e1ur2AVVRan9z23wrkAdgFWiQ",
  "key10": "VrA8ZWXNr2yrW9AAXuSRjyvruekpTSA6hCCtSi9dobG9R7w2jBwbNFV5ncpwK2A9KyxU9Wz437L2HfDqZp2AVJ1",
  "key11": "2fXXAvVkiWLx5eajTszdEP2yLnwkmTswfLv4r9P3C9qbcqtoUcwik8RyRx57FKHY7rnqLKf4yoWPxSAfdmZvBvpK",
  "key12": "4hscCkpLwB1gX4n7nrV74QsLAB5zKTvEfPydyTLX6X5P9Czi5rk8dNBGEUnkKhci29WXcL6JCxa1Fps8W2CZxe8L",
  "key13": "3VHYmcKQgex1JZtE5GcPDTWjJWTqFFGgVzM1S6QEo1JLbVrv7jx7UZjGRzxBjmHSVP998kAWuKGWr2wJg1W5a7ej",
  "key14": "4vC2FDhfaXHPiUPVyZjzhdkRidkPAyt9AMH7NZxeWWkG7ydJsD72DGV8LLG3FFdoskVpBTSzLyMu2cyZeMHdEZ9m",
  "key15": "3tRSmD3ePsbegg1tZrxjABDKzdET7Y844YQ5oTb3uFTBX2neynwHAPixFmva53M3bcBzVEgjvDgr8Lu3zHapCMFL",
  "key16": "24FsqvxVCFu55qiKH8Vr7srtP3PPChPaMRrV6RxMC8oKkqbPYYupAdY2wkxLzXqkNP13JZa3WYwurCpiMg2pvMNq",
  "key17": "mstjtFEKYbUNjyew6YWcndVjk24DvkTVx91vW7CBXtvEBizW449eRL2wfppkSqXo1dfyGsW6WGjnBHq2uTeuDCH",
  "key18": "3opvJvhAL7FqqAdGuYVqr3xJ1kFDsfffvr6Hd8ck99a5vNZ7GB43NVVEL3p6G6cw9W6Pkig6hJWnWt7QWSxSkPzW",
  "key19": "26A9pgGk6YkanwesT9pfbQHaKWaUM1QWX8j4FpTPidcHS87cijN5V5WobF8HQEPZtTm5P86JAswKsvcMeBsMVwCH",
  "key20": "5VBNixEa2wBREHHgkifYdWBEfhct8ymfNzggg3qGNrAXXqFPQWyVH2GBLWo1YRXNcsECoT5DfnBhvmrdVXmEg3bv",
  "key21": "3j1uzJHcQ9tt9APFa46YUZgEfxmpQ7BGv1iqRSdiXK3EfEFBttGeUHsq9nK85CmzEEB2LhbJ73JaGxFUvZYdASx1",
  "key22": "VXuVAnZyLMufLRfUnLHBhgyYzaYL2xECcVcUFmbypPXhr1HYj9E23iNzLebGP6Y7ckGQkZNsBUi7wvEfnGwV5xQ",
  "key23": "3V5pac4ZVJ4m2VWGfBZRhE1yeSnBcbF1zjfC5LR6wAxzQbAEmQPkfjbFxkXnxj9xnTHeSsSvjpT6XGxf4UAqME9g",
  "key24": "4tnZKNfsE3FSqmhof5ieRK5ugrZzxgr7QoDxsgsRMzbrqFi7gCDFwmcT4GAMrvuCkpkUTaDo9ipPU9uoByV5ufCv",
  "key25": "2sVeQpWNny2Yt987JwSUvFckaHX25ruYamuYfieS8huGgwAy1V82n6xt9Lv3AJw231ikBLRbnMt69o7jTBey6m4V",
  "key26": "5crrQntZbya2qvuvSuMYyP5oW85fYzPbCnYBi3UCkaynAotfYHGxKcgUXWQYqeSpUSTZYkFofb8EBHjLUrMK6MdG",
  "key27": "542SUoXqxLmnRxpszqXEJ6CXWLV2tgc65sWjmSHpKoW7fFwu74vzTAFYkYCtwAPD7WeAowc3YsJamKwtk1JU3Zve",
  "key28": "26aNWqnTg3BDSydsVtxEF7NiJ5WuqL3H35Ej4jCynCya8EbeBckiLbZtuFn8ppLm6JEScvPcqdeZGeWvkmcY7KmP"
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
