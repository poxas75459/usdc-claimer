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
    "BWCtKTriTbiwTLtfRvHkiEAFvBnxq24TN2vTm46zoSN3bMVmefEG16qu66nLBsxSTXXoco9doZ7eQD6hpGkGWbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVSUbDffWd5waDPhWLiHatSPBdYNUzLgdeb5N4XaLdehEsmyQ8o3aFGmu5xJkG5YTi4r17xGn1CJkxMt1WhYw8g",
  "key1": "3u3crWmWKrcfffHDSzKXuixa6NpmMGPNoNeYkhZXgyxQmpMQ8ipYff2tndjbQNCGVJrKQpfPXRci86XQTcLPoq18",
  "key2": "5CFWvdD8yCqE4Nb4cHumVV2SRCxstm8QEQDvq79eM9HmaqPMnHe46WYyDJFvPPyq2ygbGijQXcfLkaNepJnq9MAu",
  "key3": "3vqVkAdk1ftyGLd3y1d3qM1GC43EcHcCHLqpT5WHcBhmmo45AagH5u1Pi7zzNwRoCMZxD6vUgusHTTPS5gq3fgut",
  "key4": "7Do7fQUjiasehQJCqeX6AfvEbbWHmMKxS1BbYghREeT9ovAAkD6B5JkbR1snJAy4529fPmeNEZVgQXeqCrP86bJ",
  "key5": "5Eta6Y3jBi4hdw9b5QChAVdSkhohkCtNP6tqT733rXMwWjHcRNBfoRdFBLNnuhwCysYenkc5UHHiRe2pfwrSj5Nt",
  "key6": "4VUrFJu1Z48WeKbeJ8RRZGnnit8SuVHErB7b5KeSMA1QqnDhcjnZnL5nFb6F1jKnXSFStRbc7sqFLmkvY5EZ9Aov",
  "key7": "3frR1fYLtzCk5tfTdF3pw2aP8chpkqS1G4sesCGa9duAA1Upao25vWaoB9xRJd4YqcsXjVbstm2Nipw8RwiBHJsg",
  "key8": "WmVE7DChFoqnVLNNtzmLXKJXM5ps8mNc3Kq57ChjgkbxHLEeHLouQ1qzmKpbYMVUj91wuTZs2yZb6Z4sPrGgXC3",
  "key9": "4RmbSkhwieQbaRBr21nzuxWSt9ijv9HWdgi6C5PTxu6XFbRG5FKktrN2YeF4yY8JjhB2JdnHeLkqWYiLx2T3kctA",
  "key10": "4YBHipwLUU4DTy1KYj11F2kzQNgBq8YKn15gexUTrTmcnKxgtM1HdHe7ZCJuTweDDHaTix6Suznc8xx6aGw2TH9x",
  "key11": "UYXv6u4VJVor2ubstaSF5Pw5Ejyr65L5UwprZWJYspTrPTJo6vCAGENurCMMqPuVtJkr4F1vrTY3AZduQ1wHnfQ",
  "key12": "3fsJSvE9GAmY5NFrN7fcviRteBZLoeyacuw1EsZMY87tz2guGupWGasFuoMtzzG9sMftXkM4yJ2nFkDPWSAQFwEF",
  "key13": "45fEJxhZg9qnc3XQa7XKdhgaWTVS3PD4sKrg6RDVuXL7cNHym8K3zDmjSoUZtTgECovdTKAR3qnBQVSJEhEVCHDS",
  "key14": "2MzswQKSLEf8aTRMs8KaWzg6cwKh8pPuAq8FP9yQK8hFt6VNpkBfezkkrJy3akk3VobwRPPeowRQdhuzZ4mqp44H",
  "key15": "2JMcrFp1unTV7Q4Ntnu5GGQzGJQDpESn729w7husy3eDLJbtUzRYWy1L4PGPiQwmGNpfARnJFDP82cS8dgTLfZLd",
  "key16": "66vFx3iMNhyQ874f6KjjWA1KnG9apY5TzdsgoDRtvhxGKJ9Ma4GWajj5sFmaUG5WnmGVi2aeSyJmk62uWeKPNr2i",
  "key17": "5xbJUVhKy86uxg9CdWdki3fTG7fN9chUCiHHZZbeVZ581ndjQ9oydKXBPzMfiyd9tSWG2sbp3VQvmacUYA6mj8bg",
  "key18": "4WAN87vLx6JaRxg4MMmLBTW4sGUn6uQM13HeGhVhGWQKvzV4sC4iR3zfwFwj87xqCsKRm2r7rf5VcNczQhsKQJew",
  "key19": "53fHCWgBuAAW3kgMmaDM13Sj6Nrpa5BQ9QGqejfGyxLNNk9y1AEiSZbuGCB8PcA7abxGZbo2ZX1dx7Bf9G2i4Mah",
  "key20": "4DHkJyRLqzu8cPWdRojknDSV3ccBWCijrVKrSJ25amupcHnHii7j25AnjAX1SFyeEWJimLJ3CMH5Zpgfi8ckYgne",
  "key21": "2QGFSEXvmpCb9ae7oj3LioNrGNs2BQsHcnHCvE8fLxonyJYsjjuHD82zhzdyBVrA3JYpY2BKvKRhDVZRYXEd6wTg",
  "key22": "4in7gAvU8VyjRpxJuDFJtREWtnJY38zPrdecBn53o5FbGTztr7m4Q3QJdaJie6zovDkoJAZF9n2tqmEEjzMqoZZA",
  "key23": "P2dL4jEzm4p9q9exwG8PzaigBq1bra9ZczHXscqT5QFuS8Wrwn2bjWVRtStyu8H8bv2k8ZeQFPAjQWrY5u1ogJw",
  "key24": "4HaCHBWyQuVk68Chf9W3Ra6ioosfah6pAAqRUyDs6uUr32CEpRBxVU5PLzLyRWtxtYrY2LfZtZQYnufKEwR3hkMf",
  "key25": "2LPR5DNm6LLcCSBsoDpp3JUqWXXVBNFBy9MNxww74abXYUbCdp42CoCjziBUyZ9DwiwiJNvuN9GJWEj6BehRuop3",
  "key26": "2xmz7QQpCoxrM5k2VEKmkcddnNWQx6RDqeRxuuUrNbXpWEsbP7PsJzMcneUMJUhPgX6rCD3KjPm5aP8j273PgcS3",
  "key27": "rrskZ3G19A5LqySML6n6w5qGgMkypfNpCkmDgQDvB9kL65ZXPRFHG6VfWLb7eKcVXpH6NiRqPfVZrXU8adXr2K9",
  "key28": "2fVYVeh8SKAQhUwvoc1HM7BQR5n9j499TqCFf5G5XonDFowyx8gEqU41wBTZ3T1dUEefK6tBxJEKz44bRsvGptn1"
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
