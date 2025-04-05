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
    "2hYmbaMUTXaTftf1KoUNCKCkhLdhY1iAcALevwmAfm8zdSDknKEY7hw6tNjwEXgZu3yCgDWnhmA7mq1vawGex2Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjc43HrZutRREhohfNmPiiH8ozNHL5oNAMz8DZcCmrpCXw9DH3prLeLWrxLcuxP3nuT2B8QbnGyQXd8BBAYvLv",
  "key1": "ruDXdH3i5d8v3p8Pv3yTnLzXXYzZfkKJNg1rr22VMTsooGR5nEZzd6xSxu5GjsRGH49f9Zz7Y7adbyv3ynC3RxX",
  "key2": "vzu1mPyHo3uvDMG9vbCsKEwUEJuHtK5b6hwEkWfzZQYtqGhVqcpCWy9nZLBZEA4BM96wvZzVh7onMShszvedkbx",
  "key3": "dKk3X6YnW5tGeewab5Ge4hTCAEQ1rvheJJx5i5JCSeFejFPJZJECsG8qwXshtzaQYTMDTgFmR1NgEHC8xuFGUJB",
  "key4": "3xzMGct1gj1jJ2eXv4bB6GLLu1JgcvzLDuTiPQPvFk8fNHDsA5rrseG95GXYmhR9G5iMNpqq4LcPCdVNSQSURSwE",
  "key5": "5RaA34zqzAgPGBS8qQn9dV7R1kojMoN62H6Wq9ex25Rp4YL5zWz3x9tf2gn2AtYntS9PBwohGWFw1wZDLvzkn5zL",
  "key6": "24nTaBXTprmR2jpHhKJyDdxpVMTbEjYDnhgbsxrvQgWaArmdzBXvm69onB8vduUABoMN8kwrv5MQmwiHK5MD6Sk7",
  "key7": "5ufggiSedLthU4Jd65PbA92KiwyjVvQHyepHHD2ncwWR5Z5pqSQCdbd6Wpft9SpgohptqXHzVNAczyNQEVqMzzZ5",
  "key8": "5dLiZb7oSF9CUpJFeAj2EZCoGAX9QeHPVggYBbBgy8k2dMtYB1tnfp3X8y87ybjhCgWQC6VKFeHcN3mCmKj5LxMe",
  "key9": "4NCe8X5YLQ1zMZoWaQGHhrBLsnVzWULw5ucnRRonTurDasNabhrGc6KHyZp3fXeTwXqDzSYXFY9aEZprbQfYUMvS",
  "key10": "21qg89u2Da7biYP6wM2JQKNhFMz9SbEZ6851nSEBpAWY7FFcbiaeLWjCNpZFunfhkm7GCroKvnyxN2QQrp5Bjyk7",
  "key11": "2rhDASzq65oRVyysdMVhfnDuarYZMDtMw7rLZjv3g7AtdeUGCrqLqyo547AbcRdJddphKGBaR1Mb1jB6hi6x1Af3",
  "key12": "23g8Nbfjk1gX23Hc361SZn1ZKWJTKA8vgtSqorZjp5k1SHj3U1nkdmtY6PaCQmEfcSToTydG58c5f8FAgsB7yvBE",
  "key13": "3Q22daPsXrror31YNyYtbYRxQCQUgVnvZydaP5RruraUsQfMLZ2Gahnkn91z8VQgpvZFAPWpFThRUPZyqsLQBEEb",
  "key14": "DjTLs9ce6z7M4LqZuXz52TxwunLWzoMSNEhDMwuECqACz9uhmSbRvBE4iBsDUS1VLbTFdx4bD6zwqWRvWe8uGEo",
  "key15": "34HuwFMDnoRS2ZaQAtuq4UP9ZfkjLv3Rs6deZVeDBGd9F1BXJnh4CV9ZmbDKPEN5BJpgXTPNqYX1v2xM1KVHeP5Q",
  "key16": "2sR92VcP93ccp1cZLxjzSmXNUBnVVooSy23RdSRwsEsy2ryGAdnuyuZqHUBvn7WEi61qTEqQpSJNm9WyhVVvyZPW",
  "key17": "2FLfvkPQqz2iwCW8rSi5upgx9Fi7STarHV2a6uBftQkip3uaj82u2fWD6N5LSK66gsxMStZCePGRahoQ8MbYAfPq",
  "key18": "2rKUbz2ewPhnW9LouUspxvJ6AH3gscoaXP45y1ZmguZM5uTvYoswbsPbZgXJKj46dUcybSXrKeHoqCcPLpQXi98L",
  "key19": "8KC3nScFw2K7XWiG6ZBXjvSg89GhmtPLjU27FmEfCPWqY1Qec26prq8H9Myz87D3gLuorAsb7ZzHuvz7b5CMYGx",
  "key20": "uvyJdxyb99i7C8Ji9tvgNPTNvAhkqDpi3G7Lqy99a613CqkZ8XLaXEFdgzS1qqfqgoAkw7giZPjWBfnjUQfyxYK",
  "key21": "5U8DUSfQ5ic8P9HK56QQwxBokVKMBzhXnvPuT8W73aGk1CSk5rpycQr2ZK9Ci5ntwRbaD8pPcu7FJY9sDk1EqzEb",
  "key22": "4B3dBNHt6wpmzNGz9KLwVqkyt3ZKfLn8y1H2fwSAfYdzQ4uZs1xbTzgXM6MHSADcf2skQUSY6PmqzDCknKnZaA9V",
  "key23": "2YuJ2e7dBvvcPNMyxFYFCih6eR4p71vBsJGzctV7UNt9jHb83f9qnFMWVhRXF9R2zuw8RXPzi93V4JWBo6b7L3p6",
  "key24": "5UZ3WPtozCQi6AaVYJmANCLJWoBZvKtRJRBr73RHpcpCr5XAr83gXoq266eh8Mm9dSnJtpVgz1atXJtF2SMY2vGu",
  "key25": "3uy7esmr3qG1JeYjKw4esLrwzS5F9U5NHv7w2qh7AyNVfbgCtY8i5u3pZXCwAZsAYPWSnXpRgnKfXUq2Gi4Tpc8",
  "key26": "4msosysNVQTY6vMdRsGcLzhYaqSpNRKEovrG4S8sTrsPdFkNUHWXotSiPB6Sq1oTHQeL5zGtgqbSteJr7pXZbeFK",
  "key27": "21b1GYfD5p6YZtrgNzbdYUTqQA1gqYrpaTFw383VayKH3Uwr7kpujpM3riWZ8iWt4PCGJ21C54dTSbKLF9bYM2bm",
  "key28": "49W2c5z2UUdbRu2nHmBjxKiNgGnsqZnH9pgJxmW27xgq5qNH5EkDtdHPirb18XF3rFLopFzeeivTTDXdWiojh1sh",
  "key29": "shLjzScGMf3psMh83SrEFZtU4fYRMsSyX6Fa93zi6va555USyMM9Do9oKsXLc1aQBdUf1SBNAChwcLNh5Nh5hMs",
  "key30": "35RiH8i98j6vGnugpajjUNhXPsf7sp4J5Qqyirc1roX1MKV3utLeM6HxkkDvYYceM4WGEdqjeqi7sGZYUvrsJ9MB",
  "key31": "2hvsNnNEmUxiU8MV1acPrkDwEg3VzBEuucMa7jWVkDnNWxGfw7uXKhUYE299XrLhmrEgAUnhXHQjLiEiwXKRTeDF",
  "key32": "NgkqerC2inc2NGgfE5VobtiuVarH1nzn1NaWjgmWGsoLoz5NXgaEqFH82nvEdYWnwLW4VhTGD2ba4sf7agABaZW",
  "key33": "2JcGehM9wsELHkcKLRDXu9RZNifXEMYNqeWGK1b394GzoBHDgwHdGmnRmSA4E1PYdAJChG8eiHNcssXhbURRqqa7",
  "key34": "592Ab78ywfWvSEnrF4CAavKH9sXaU79eVHkUas8dkxMtybdWZjmycAfjD9V35HFGVQyQrd92VpAXrJ6pYAMJVwEH"
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
