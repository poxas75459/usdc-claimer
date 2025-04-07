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
    "28z7ppP4mzd7WCrM1kZC9jDAjM42D54SALSkDBkrTi5MNKLf4zJgb4M59w4ZaJmgRk98cHSoYyLL2QUTaz3ZTQPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pE3VCy2EkF11KShiryAQFeWexKqwdaT7Fsn79ehkRtExbWD8qkkBtc1RCrxQJvpuEixnKYYuDF6To4K8H4yhVzy",
  "key1": "256qn7HfmJx7TsnLbTBE5HpDRvphcMS8mhj5gT3Muk8rdZWEKmJ8EoGgkDWesiVvnBBM2e9jR4S1w7QGPHiL1CxV",
  "key2": "2SzrfYWAx7nmR7qb7uMJWfRuSx8eCvPau2xhavE5XtXaWMmyTyd3hnND6Dte9u8PuM6g8T52WCoZjbA4YQJCEvwJ",
  "key3": "5TnAMMGzurUDTNsNPMjkWoa64so7UDEqQXDQk7wJK5U9pDKeGV3gacySphXm5L5BqPik8WnLoJtxmjLhhKBeN9Hz",
  "key4": "29qcf7yA6mSy9W7wUkKoAEeehBDkfNHWkEwzP1dAfCezYuTX1PRQ56keTZ8kj2eCwnsAycb4Teax6xLk7ddfcWC7",
  "key5": "4wXF7nwbZ4fEb1pBH35FNczZ6amnCECaTsVaNUzoPTgDFQ7KfrsZFBNq7tYGe2EEPUckSsNZCuWv6zUCnzVyzA2y",
  "key6": "3sCnRjDUaQTTSNQzBNphpAdqushZq9z8LAareij1PtUvi1TfTBbybyTci54VifZqWxCnbWGQDj19soKSNLhKxYau",
  "key7": "35pVYuegtfH1z33qjxbRnvj8voQeiKwkEvXt7xkjmrzv3S9aFEMBrTFcrrK6WcTxUABJzLEEESvm6j4iZhsWNYzm",
  "key8": "31c9xwFNAyoKvBiouFmNW5BdJJg6ExMBy5Z2cNMpgFJA2K9Vb7URHejDrLsSJiRHKvtWFxwGvSna5CFRYVfzwQhv",
  "key9": "2FjRKo8tRh4rw86sJ6CiMD5FDQPnn4dbRumMKCgMYYACAJyR4ZZLgqY5cutTDe9FhJyhYGsCBgex5CEboDN2B2to",
  "key10": "MvdrWRY8b6uJfLSJ1MYhnAtbLmQYKpa3H694xzh1MH1tFSjHEr4FwRYQDmkkc4CdNhX3rinoWuwBazGmsm93jZt",
  "key11": "57XdbQfCkBMco4zByB5sLjAWpBzVGLACKhLoLRgFZwjXY14xhoZVL1sHeYTBy8tHoS1L2Z4DoDzpyvDHE5gP9Kjx",
  "key12": "3vj1VcqqKXLZmtkZEG9hu9CnxyNXmB9cgJCzQungqeasbEJu3Ph9zAr88w7aki8vpZdJP62AJxSjh6SXf4qFKH1E",
  "key13": "Jvcxi81mHMQHfMyLkFVEjFnvRLsv1SjTPknVbYWWMjAWkBjdJuMAcntsLHKxagvMhabTuri6F3LGM1RXRiugg9r",
  "key14": "t9UoZfasknsj3S8PMHPgcFCYp99cme439dngm2ruh2DBbv7CN37JvaeJF5FansbQqHaaQ1hMCgKEDRg13dLwTwx",
  "key15": "4crKvfFS8EBwaHT6cPL97H9GJvTvEfBhVj4nGdd2Rt3BTu8YnR3KsjmbVpvPmMZg8dEiYniTDakyFdKQ3JcmU3Bj",
  "key16": "4xDzF1ye99VTAAcLC6oZmRiWddXFycxmpFr14nQiWUag4zk3njpiP8oSQ1NTSWgGt8jgMAHsoxWgZBCsJq57N4rB",
  "key17": "3WWdMfXLaKxzjVmHeZNXNmLEZoYaxM5jDeTVNPfA4M3P3gmvD8N2WvePDE5NeDgPfqPo1K5CaoU8oKwHJGQCf4iW",
  "key18": "HV1f9PjmejxzZVyC44k3iVpNVkY4yMQbPegqiwARWKig8bMWzkaHGSfVyn1rX2B7TUDAeAFFg9UoYCvP9emvUjU",
  "key19": "cMKewT8EZrsjaw9qc1gxXd9NECWWnH9td8bLCQBXjwDz1vwD7thEYzhiYffRoV969XeeprPCb4oVgsWosUTnyE9",
  "key20": "2Xs77rBngnckB1gVPgrnRuAw849heQSoQbsxNSk2o52ZqahjYpX6M88UTU2zmR3gY2QNmKvyGXUUcFQuzL3hR57G",
  "key21": "4fA9JvuswgZGjyMrwqXz8jVp1jmiEHqS5WjSEHrrJA9XgLUcMuAqCd118SyAdWPrNxdwAjnsSQZkBQvisRjpNKnX",
  "key22": "2KKgxFcp8TLkjQrnRVhEzBxqzAt7vRQE1mJjpzu5pkMMPVFnYZmeVK2yxbKquRbUK55UzfpK4xKVwjr9UNHow8hA",
  "key23": "2zXtgCf7mbqwcercdTdiFdCk4FemWrDqZpZUDzqGJxvAVxCsKBSjp1AAmP9xvqsrqb45TYUhtnPNiistKF29DuMr",
  "key24": "287M8LMMg4mR3avq2JeQmrR5ajEuSvrEsknupHbWZasLsXJk1EXVyDqzWhWf3CRnwSKYm6iwdPyoap44tyX72wFs"
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
