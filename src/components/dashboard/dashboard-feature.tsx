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
    "4pVPsYdujLpUr65WBNujWr93CwtgZrw8ZgeeHqY1rLa7gbHj5h5zjssdRjk7MqTXLr1tZEBU4tTXJfJUDHbN1moC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S21AnrFDk63KZzhEXmUhynrjLCpyABgfds2ApqQeHmiYGatenMozTyRs5cVvuUkwPw2EQDzodWT1n3UQuRzdnJg",
  "key1": "WBRJMpkgdnkmCEpyEuqdhxCSq744E5odZ5rKqPrcH5eiXqhsNeTi2mVVBTza5KWwz7NHC7KQFsE2qxK5nHRMLvk",
  "key2": "4Q1gnHJ4ffSDTDoQynNaANXW4thyRK9z8BuyQaFTbEKTkzwXZHdjpMESMysNKQbNVyhbsrNxEdRuCBU1ZFHrA7pw",
  "key3": "JwKsXvxrUatBXyb2xyRv7KCsiFqB3qCcfvygFzLdwiDHhmbg1LooNspB9kNitvt7skEaXHqS1uJ36QSTKGKsvAw",
  "key4": "4yH7LCTfE7ajxWQTcGTTk1FLmz65wsjtZkVsKpyoWZMrhUBZ78gWyqYjK2EVRYbkq6N6MjToSN8WkDij7bpXHFYo",
  "key5": "5fAqgLw9hvzNSnfZFtGtgQmoCE362ZggzvP43M6ahmEZGq2jk1aApXF6SvRBBbKoebiY1diiRNz2Y6qq2iynCDFj",
  "key6": "5sAMbzqsLh2osEXWqbkfgS34FGRLNxRkSXoescUy7mKYLC1LL7K9uHsACbizm1U9MYKBfJ4voKCszsRDadfPqpKF",
  "key7": "14PMtkh4irUdnG9KZLEfmvJvBanYejwBCZMrhrN9pWxuJUUNczdir4YubCvEu7igVguofZqEmb73ZLqa7DJJQsp",
  "key8": "5735VzR1qARNN6TiUN52ezBXMK3opn5vJFe28TqZcgjbY9bvZcDm3XZefn6D9j6q8KueEgzChsYn5eakFRyGtmDg",
  "key9": "3L7qWx5fV8FnaWQsyygAheRgSbCgVSzRsLNxTSF4qNuPeDaF2cBn4bFb9HTtX9qjpJny3eKpN8HBWxFFGws69Qv",
  "key10": "2e7Wer75Q799Nbhi19BfPSqtqUkD67hekqfTVoZ591idKM35xCFFc1dnFbfoJUcSk23KGmup4nAVwrHrMcQay7qJ",
  "key11": "4SCuaWEMvhPoszZV2UTu1TV2P7zARsGbuGC7exZD4L8bDYVzEGdqZWMuU1swxbRXidZFHKtHwQcgnGnMZwyCLgJb",
  "key12": "65TXccXHC9RKrEi8MsU8eBzonQbf1xvmFUkmuHoQ6PzTVyonB1iGt7PbqZwFZuqsFKkuzPMeF77zwXCkPrPNQorg",
  "key13": "3qcjmT1PCAiS2d2vZNxazXhfqs2KBEKkeK7KUqqbk35tG9QA4z1ZSscUUBo4pyiKsC59aiXarycdAqvTMEeKwdfc",
  "key14": "sAdYyFXSK5ucC7VKBRH4BrBpH5ucBvPhm2GJa9uK4UMPaKuMrsjWjLtS2p5kxeCRRefmn8dgMLfrD7Zy4TsPW6j",
  "key15": "59emVo9jrgKgkbSo9GzKTqPR6SrgYoyWpatHo5cXup53LZYDZnkPrcbYRNfYUeRkMZ1oi3LwJbznhdPhZkHhRuYs",
  "key16": "4TzBoHLon15h5ePy8QEe6H8xvtDi6FceDhCkyhckqMBUyW6UjzBRKR3t81CJUG2KmYYd99JAK6yHQHmpF9hxmwAZ",
  "key17": "31ciCHCdYD2XA6cZEFqN6Pt1miAxAcX85YvH5awT4jSy4PNLdzD2LxDtTWuUkkCSc72yhVYrzPVuBxDr7qAogfjk",
  "key18": "qjAcn2tqkZENDLApkXZ1zha9c5HHUNopX9hkZcAv1Hw9WqGjS1VrregK4CS35nt3Uf3vobSHJezddaFRArUhenG",
  "key19": "314ZtBToRSCoDcgfFtwrBVYdww8QijDhRFxe2M6JGMPnMKdmRNkFNQec7AbLqay7W2CaaYKV76aetyGAn3HS1eY",
  "key20": "5WfN7Zup4rpR92iaJieBguMvSEZPNZhtjYGVTRUb8b1z4YboKYX3SHDagJs2K7MeAkwMtmkRgJbgMCXq6PawyCod",
  "key21": "3Eo5b7rWdKRVmqAqnw3X8q1xfUbmrpdEF8beUnbksFwbzo2GUXaipUdfCpN7ugC4Qj8PGAGfJKKMrH2XBc64avmX",
  "key22": "3hkRGQiL4q8buAefCy6yW6X8A4wPR748t1K1T9ohxCog68U91g4nNNjhs1HX1CjS61hzFujVe1twX71CTwrw9vH8",
  "key23": "2eA54Hwzqnwh92xp5nZZugfuzE7jLrznHAEYKKXapwQKF384yjSGU5swodvc3JTjfRK2QrLv5gBu7Mw2dFymhar7",
  "key24": "8abAqteg2nJ3wjDkD9jPE6371YSVumu68oASXiiZm3bXAaBGkgy5foJY1nwRtqMmLGh9fbBre6LvVc9w3pEcxiU",
  "key25": "2HToZ4HwaYhGxbwhfYx8PRkiTL7c18zvgaBSb7k73VqyvQxZiLCAmrXtpAAEw6XZMbh73KqZCVxke5Z2KdMd5qn3"
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
