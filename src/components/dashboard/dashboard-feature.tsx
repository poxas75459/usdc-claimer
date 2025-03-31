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
    "2enSogpZFiBfcaVGQL7ctmJVyW3SWrPsRK4JB4MtQiGWhq4sMkes8LmBao6g2usp6bddo15c3gF4c8TMwo4T6KnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2es6eXGRjCqhCNAiffqtqDYVxVU9BpH5NCex77XKYDYbh6Z6vXwMMD1XurvP24nsVP9Doi8jbshXTBjyyoxzZrV2",
  "key1": "3jdaEpiSGUZZexJuBCsuKvHUzEvrR2eHvHvSUky9Y189KnmCNRBMhdm1CNc3DVXsCTLsJS1jhzibZvyhzMcQqMUr",
  "key2": "4c8Juj1rN3BvoC8RPy65b88vpoLYbztJ1mKxGiWJ7RxLEg5rz2iVCaNcE25LAbm9UDG4KEt7Ck6Kigcj7aee4eTd",
  "key3": "2SfVmgPThkikEH1mS42wXn8F1Lg1nW3CLNKSzjiTD3U8E5HGkTohNaAwc2xVVCMAdtHqhu84RaNtHy1T2ShnnQnv",
  "key4": "2bZKtR4j1EqzcKrxJYRRFZ759HeAJrRPTAtfHppzvWRijT9uTi5cnG7WvM3oz5wjeAVZ1wdvsLC6FA2ujsxH6Zvw",
  "key5": "5AMwT5nkdiA5mSsMZmTS6gQsT9gVDM9hL9ULo3i7shRvoZjD43X5oE9z36jk5S5X9SVDPPofdMsLe41Jo4ekBouS",
  "key6": "5HbfN5MCt2yFBWRhbA2Rv26R5X1QsWWVoFUsJpCfvpxTz6T1NrSaRairRHMJDTAsaGWxX8oQA1rz3cgsAfDqcKvq",
  "key7": "4cMUN4LMckBbYt3g5KpyKWbdk7hHpgdLeFZCjfZZxgpHMnJe4mUxsgUqgRCpB2vRKp9e2GYPgLEqUTxSBztm5MUS",
  "key8": "7M8qkgEQjjSVGzKVVufSQvrgsmzMLiC6i5C3KJSA21EnPHjvHqAGpFK2q2tbPsmtqQJ37RfAhLF2tAJNvhVVRUJ",
  "key9": "5SaAWxWueLjLaDpYvA7ALs82JipNfaA1uZAYvVwdMRqXgFubbozqfR17n4h7fr1QDbvLwcZLe4CjVLMqDFvcfjii",
  "key10": "4fvFPtMsZhwo4tUCfrXHNnV21zzqhWjsqn13AWuPE2m89yPSq68DxR4UFrvQ2kMKS486gmdG3nkNrLVhmbcTABc7",
  "key11": "j2gktyM89cQvjzpBDKDW2PbbJZjzJynVrExfV7UgWg9vf1soS4GM4Dphp6cjAQPUweYnzWaxiN8ZRMA3qNYrWns",
  "key12": "2YZpMoQDdzrnKa2Ez6nk9pTb3nYha9NwuZeJFYxnHBbSLpRct6UxPdiPPJ5fM1qGuDRTetddPZtnQ1G8mLxV9RqP",
  "key13": "3YXUPQFg8iqDjreaxN2Kr6zxe75o1QeNPeh7ndy6mAoKHyrnhSL56h2YbHZBPjbEQM83kv43ewZmWY6nGnwipwGS",
  "key14": "2z8sqSwMZnLkrwX4YPQz3wwTUeNi8JC3DgSipJLuH3ycRLYmDdCDYctzTDy2oMpvHC16eMxKyA7q4qGccv6LARkS",
  "key15": "24PRL3W2hzQSJ2tw3uCBnmbsGudLpiZvp6uTE8ajfmskrEsdsN3yTJ4H6m5Becgr4deA3ujxctpByq3mn4cWcTwW",
  "key16": "3Cv8ckVp7cr1yV7p4y7FCYmRApyVyWfaxxSWwrBoVH73XjbrFJSSMFmA9rZRf7aVCgB7MctHbfpJQmtZhSwjjDyB",
  "key17": "5azkHWAX8YvGxuZuvH3apXfRDs36hS9KFuLvFm8X8tpAksvqjgP65n6EhboT4PcAwVnmqB2Fqm95uHW7bcftKwJv",
  "key18": "2T99bRjkFZBrUzdzX64MFQWKsVcdw3UcHa3xaibGHRqWzRWAAHvQNvu28FyBmVFBXtcqTcoYzVK7Cpyhq6Tbv58d",
  "key19": "3LpcRTV828mgLzLezH9LLVjmVcc677HLQpnx7KG7s2xevXfVELDtZJS8Z7ZRBw7vgFuVxpPxpLAjGAzzYXnuumpJ",
  "key20": "KJW12FAmyXLCq6Lz5QFtE1GrwVsNCgkm6QvZTnCeMF4T9SeUZNbQdGn4YqAgemifRV7vHtR51GL5Nzc6uGCfNjg",
  "key21": "5AwcU8ATwn3rKtZEw6ZT312GJ4KogsUFjhTvdCRC3q1bmozWRkCpQ24axFxUp4qPk3mppL9AAzRS1nEhAXBiU2W4",
  "key22": "2ey8wHQesKzGDq4C11jvvJTt9fNLqmSctugXB59WUhajz92HbfRXojfeuCRfTChD3JxCuoPHFKEBfPB3846Dup4r",
  "key23": "5mac6YyZEfTqv6YEzQtRpCSXGW7p2SivpVxMgTe9Fiy3bmbLsPwZ3hLXLDrYWnJUSdkXGfGwuKPVqv5PvhshH8La",
  "key24": "22rbfShvGifuQBSp5JPCyHKL7NNC3PTSYboS42N5vxSgJYEHqkDRqEkpwczJXV8yNzsaS1L8UArX9hqXYZ3qXUiK",
  "key25": "sHM3UP4esXnGGqqJmvHnwhieY7UjqcDjYxtp4HNLKtY5iXLtHfuM6zJ2Uva31rvMvgE6jSXkJG4GdrdNp9Wx4Ph"
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
