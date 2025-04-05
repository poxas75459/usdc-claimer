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
    "3xHEMv8L11vHW5MyN4eHxrPb2wn1SQSrZqex5QXfcahtAAkJmvz31zfyGrYNpCeNFSVbg99QW8Xgf7xYY6MmrjSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pv8x5yD4gx9uaNSqXoVSagQDzhevBGGoA8t57pehgZ7eeVMWvWB89DEkcUMqchYYQcipHQ74SPf3LMe4P1CmhA6",
  "key1": "rYsiHgM8mCTfBq2tiBqaibE6cY1Jc3HXP4bY3ZWugsFube3R2dDiMfjJr8Q3neQUvHRpmQPfa12b5WiggXswhqj",
  "key2": "2mHPfzirTS7L2vwJJmt9M24Qfaz7BWGtLW5QFiwnpKpXDvz4zA3W748n93JSe8rNhF63VpWnUrx3ZWLGiSdjXhk8",
  "key3": "3ZYjZC9hJPBNpww1kv6B257sW9G3rfVsU95EML5iE8xY1Q5zakzYckPRZeUnroxZ5RiiDXLSKkN12uovyLQNHit",
  "key4": "3PJY32cFe6TExckgY3pWj5xmAak7cqSNLLsqSTE1pWcaRbb9e4w5DiMWYCvzbWEon6fLottpyRkTXuiPzBMRUUYS",
  "key5": "Dz6a7M43g9LZjAGk9KUGVazw2iPTgvMWeXwFpdswZFvjV6csCxJ6VbFuF7zy9H12VCAKi1Su22LC1ZoyWKXpNi9",
  "key6": "4kjdP8uPJyjbSd9hPCPtqJWRBVcqp2zzQkiiwBcgWphPjZTkWyYcjV3ihBV7vpJeP8WMbZWPPVWjnDDry8wyP584",
  "key7": "4W55GraKHxCcFYEQ8rnVNfAmpamHx8CQEZRaDyAfLYBf5mF8jUkGiJe2gtznmpAjoXXiWZE7ZacHQsnEjv2XMrtu",
  "key8": "4rdWFyQhLBX5DRp1ZKVyTdJ5oPiSYyifqcWTgM3VgQNvJzK1JQoWQXReqqpwUuN46onpctgCZxnNEdGLMk2ucyBy",
  "key9": "5TdhDFwSH2fVeoVDmqieyEx7H7eThfrJpBUkVpjCJEdcZQFD8EYmLGQrBKSdaEPtTsHn7ApkujycxkVdMkGiaRYJ",
  "key10": "33doidyGtN25Trzm3MA8yfj62eZ35EvQHcqRCZrmtpquRnLse1PnC4vKarLyypa474hmVdhWd7CTCrSbXZRCfeAL",
  "key11": "yNEpJukhq5dVBKqxhCN2dAK1KyaoDaHD5w7rm5stVJQXQ1jWrdq5MxKAuZZaHLavv9fFPytY19g76FZn6ThKy6n",
  "key12": "58w584K1MM8ZN6swcYn8pNbfrC266fbZV5JvQrs6as6EAsg67QAD48xCWwyBs5BdP4m7o3EdX1KnujVfSe94vmwK",
  "key13": "bBKjJXbUPkEBLfn9ZWn3hQWxzdfpdT5eSfYx8N7YnbAQYcQE9cD9bm5MagEeH2PfoxFfQZ7KAzarCEnuTq2etm5",
  "key14": "51M8KiqwyR5pZG3jx3FpyjvUHRaPjkarNuorpzk5esn25ScxYDxf6qxxRTCSjHs9czRmz3ugYFxenZEbwtg6eL6Q",
  "key15": "4KTDdK7xowkqNXsSPvac7L2B8UFdoGBfQn7x3hi7NhKLfi5mhWED9uK6tqmEE2TThjJF2Z5dGZeQfFxLyyrtyQqx",
  "key16": "5tGxdxFzQQACZRAYcA89FxJZVnKrgyrmjA7GpDG1Le446j3ggWsUZcF4onHBUC6xG2DQMQ16rLyH42BFfv3SXmVQ",
  "key17": "m18xqpaohVut5LWKAkWyNLEkHjU8ENkvtE34pxoH7bRjBqEXWJ8JoS65LiNnNXj9veBmfniNQy8RnspWtbhu5o8",
  "key18": "4tQLC6G6x5ueRh4ckPVsvDJ3MWMJ7GwYexx2aSpWwDTnjW9i3cdyL9wBASsEHbJ8Tv1VEtD5BtuT4rrnCMKNgzBg",
  "key19": "5vrgdKCCqxJEnTCM1qdxEmKHmKoaMjK7WEvf2aa13vGytnKSfDkHv3reiWaorDBcJqZzEhWBKKLBN6hQHAiaw8Wy",
  "key20": "3ubT3H9LzWSWDo68wD1ZKt4Ncmkh3LCm8jMY8aXwMW4TZhf6Fk5u9RnbSa4NfT4iHgyL7XbSPSsPbnRzrsifaUqs",
  "key21": "26N3cD5eZZdGej6jDD1fLXuWEjx6uZ1Xc52C81pvHfFRPnLRv62Nkngp3Q1TqZ9wiNWmtxLJb8y57snSGP3Nh3cV",
  "key22": "5eFEUatKTsf837tGNydciM84BqcsrHZ3LvpNT1cAFZeHMFWAFZ8Xy7Ba8cDtKT9RzYBtM9DmHcEZ33w5pVmVy5BX",
  "key23": "opasDqvgdTHX7ePuedhp11M5mUHVy1yuJHRPawCkRcmHJxR89pXjtEZfwcpyFiT3FPyn6Do5ybUse8FwgpQuMzT",
  "key24": "3oPsNMr3tdYcM8ce6RGSNXr57fS9KeyUfyZqRjj8fqzME8M7dRwS2KkbJHJZFs2ZXm69bDaQLXegGtUPPKBCNupZ",
  "key25": "4N2oNk91bVqZZtRRtCwVshs4vbJTXEEVPexZ1c6uNVJnyzb4T42zkF3VNN18XoSM6mdED5FUKbafCxMdqyhJPYUP",
  "key26": "pYwaErFcMmcQVHQ37RV8bcwEBnkSQbkzsLVNeiYP1MA61yftWqECWRX8ZiU9hXeqSFMgerL53Z3FhAFJpyzLQAX",
  "key27": "3iHZWL7H4LU9tJGWWFm1e6W44bTvkccMDeBEvjivUS8cGgNNCvMp1o469mnpNwkWt3KbGqi8Dt8Q9bN23hYJ24oT",
  "key28": "4bc3RRSmZoYuWwH1FqpECB5CX2s1Y4UGp6fX8tAon6u5GH7mezTYVZ8pbbjxE8quxL6bHHsQFd49BHUGSexwG7G7",
  "key29": "66J1An8JM6nTQWqkD9WeokL4VZJvrmA3ugop5bpm522AUte83oytSPQrSzQbSn4UaCsvgH77nRoqpDY2SocVxQBH",
  "key30": "3dG7Q3Yk6gpUmxsgdYuB2rxh25R8uFeZaASghhztvw7Eh7yTMJZB1jjujZQuoH3tg3Q4RBUWuhub3LAqKA1iMdZ4"
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
