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
    "2HQm2rtntZFSgY5d3TwA59oM94DXDobjjRj9W9G97PsYuk8RuKoUJH5wuxsnEd1TPk75voHoyTfrrrXAjqZVC7Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M9J1iypzW4EmGj9JstCi3BzAVVxLXsHTZWbJCmV1CxcdtM3TnP12sTM1jBkCWTKa6CPjGmaQU4SZ2AjymxJZxs5",
  "key1": "3YVC3KxW4ZH1EHY8s2SP4YwqrDzSx2JvNdsp9VhWoY81q763V6SBe5kWSbn3bE464c7HrjdEmttGUED8fY57DPYz",
  "key2": "Gpn6R6QBDz7ETbeGpLLuKBtfKgk5efvM57EkwVN5okiD39183pijFBQSfTR8HkrCzJgq2y3q6WuJu6EbvpSBy5x",
  "key3": "5Ag62oBSf53quYgVE9x59AZrCQNDxY9zFUEz3DmpYdCtXmaY5twWFpzS1yjNAx1SMUczpncEnJCA19fkV7Hj4f9K",
  "key4": "21Gv2rp2zKZhT8Y6Vu4WdbVCQWrYRxDzBX9BWLGauRguSfweAH83BLjrLenAimPbzQeY8YGgxMBtmTBjnZvbyEMX",
  "key5": "575razRV9gWL2M8P4v9Us6geYJgat9imWuwHaEhAe4PuUaPqHdUHQoiM6jViq6oXycnFzJYDmWvW4bRUjgUS72io",
  "key6": "3HRQsmcpmudEf87fENLjMQuBtUEWb5myj7YcLhbcwQBePf5AxronKBfT4mEi6Ut24zZWoFBjhwJFR4MyHaigsQo9",
  "key7": "3NKYvZgoyauWp6uhT7aX7dCXYB4tY1nC3e5mJHFM7SwxZsbGUCScEnxMozu8PZSMvLEw2ouy32r1R1UYnimJVWXv",
  "key8": "3jHKm9EzdEGfFTsoyYgHqLZobBSC79dJt2DdJjB2oX4yT6SC5BG8spFyjo1dvfWRnwvJ53itWVowyUuX4bGehSky",
  "key9": "42nQ2fUdkKKaEiz9L6ovF8c5vpkcrYLSbcgZafwp7ysPXDhQcMrs3m2nrtHCZ2u8mCWvZEjk1mqiaJze8oz1Gd3e",
  "key10": "5kLcihSd3GcAh4pEdrKfUHHzfRayjF3wdGv89AG1EUR3697Z8Qfkm2gGwtrZSUcag9eaNoX5hMj89Zor2QcG1CwU",
  "key11": "653av4rCVC2KZdjZrjM9Fi3ZGzRKofUAuvm84A5YaaN2iExsTmVbYsPcom6geAu1tG9nBtmsXW9r1z9TpBnMs8Lu",
  "key12": "5ibVahvKq8Uzv2JMQsLXp6HcXeUSU5GiGhQR7iJPVjNtvTGGZGrM4zDKjzqoTkHmN3E2XkwwEPPa5nuFUxKse3nB",
  "key13": "5zcW8SVeiwCUmK4LW7VK4aEjfe8kUf63HbMDDTJdHyqVMh927E4AV6vqQQRYMKW77atHsfGuJ2CgvprkwTYFNA75",
  "key14": "2THegvZJMeqVxUBNJpwSca214yobohUb3E4CePFaWhsFmkWYniJ7uwAZ9x87QpxEhGpDDy4XqcRyiCdLEpL6zsr5",
  "key15": "CvtYNZfRXPS5gQkHfmD3kADBqtQ1qW2rzeDToirTC5DYQ1S1Wh9LJ67y6S2LVwD2KfZuaTe8GF6X3JodSJJ1nC4",
  "key16": "RDKDfMBM3ADQfgDHuYQnpQ3g5N527Dfwwngu3QWUFhzPJ6rWPy8h9EWKWDpjCJh8WXRxg5ifu76sQ16F2xFCksi",
  "key17": "2oQMh4cQS65yLViihBnNYCyZ4FJDpxorV1K78B2e3yinQSaU2yRZ9tXct3rC2tPJLn1vi47QmpdazjzcEMpCmMkD",
  "key18": "3ZW5A5buhT5Ne7qtA7pwAbagHURq2NUXWftcGWWtcdHihyi6WpDTuwtjnb9j7vBWs41JgCRpFFpCD3rnbPCNCmcU",
  "key19": "78pExqcAZJv93Tm5BFETWrDpNUyPsRhK7o3cFGMzSgqvcXNcJsyaUsiLRuj1ZdtjwqVsiNz43Z9J7my6QBFS3d5",
  "key20": "3vMQPcA9gqmYGTyF5KLxh9GdmUr5PMChKRMk8LowQrXgST2KJbDJj54n9ePoWyAcz5QD8TkZobAdKBqimMzXcYsf",
  "key21": "3hDrJAda5wkxZAfmufHMxtguwkgycP6CeoQ3oFP6ztsp4n6AW3c7pV16hLwzk1d6D4XzyBvxxd2B7Mmy4MCag77Q",
  "key22": "jWan4FXmvHKXDtKVbnQsSVfbuoqJFHpshxZdqmk9rNzbxMeFvdPdZ66Ja2Er8XLdjkYCatMSHrfAJeQV1MGLqbg",
  "key23": "2neHUqyXtbgUwS35QxpBnK3DxSq3aieJQfMTns4TVixKLVCD6CpX24KG2sfWT4KR9kk8Y8J3z2RwaCkei7CgzdwY",
  "key24": "4nVVwmRjwnwoDdwyfPhf64iDfG29iRa9Rwyrr3pgm6zhEutbfSyGo21guGYnQDNfdbuXKsDcMyJ9m4knj5BXo9Ny",
  "key25": "5cp4MrryT5ZWaaGZ4HPwyKPbD3qh2o5Sn8YfXGdGHNfUpXdRZjMjnfW7YigLwVYURWma3bdUqMytM8mHKGW3xdVV",
  "key26": "bZQvmkQouNXPNuVfTii4PTDAatqZ4eEmhX2krHkPTM6hCvPfS5c4bC38Hogq71PZFt95L4BFekKFrbupJ3oFQ1B",
  "key27": "3tKt9dC3ZE2B9dQAv9gDuREZMc9hiQYExDD7nHqnpEguhphRcBq1bue4LPaAV9uBeWQBTnwXrAm4qP9yEQ1EW3Di",
  "key28": "cBXzwYccfDGbAySoqwcg3pwe333BpjyTBkqBs12EjiWDYQgaJsisvNZcmC2AbwYFaGH93sUiLxGWjse56M3iaAf",
  "key29": "jVB4nB7kdLYLrUuSUMTpDqfGba1cosFLPodRSGGc6GLVNrF6j77W17J9AmdtgTxeRQLF4STAsXDrWv5WuGKdjxv",
  "key30": "2GxzU6fH9EvuJYXnCCZWpzygJnPver37xfBjMqxThu1FRRfFiaDZiqw1GNSg1NcJ9hbCnU2hvhcX1fE5aT8v7NuN",
  "key31": "zGJSX7JDRAb4dkAN88QeMxTXLSfh2hhD286JNnZ6wUo3ZfQLTBAkJsa2FqxRom39wshvkcprvQEh1oE5hRuAXz7",
  "key32": "3mMnoabxfTTZ6g2cE1A3jm2UFemJo7eddNLHi65gygqowXNtSNhDajahbRsdSHc22NkSLnwpsJweteyqU2QyFjVa",
  "key33": "5Z2TcVYnkehQhe42ZTop9TwLNJmYCTnz4xxg5DtiMdMsJtcwypbHuS2KF7cjhrwCd4BAUyyzj9PbWgZbebD9kipp",
  "key34": "5BBUxYhtD2W5FreGgctjhnb5gR6P1q4PG3LQBSjd2TZbX5foTC2tvuBLpRCMKvLNurkw7kv9nUyHtwVjvXUSxYYL",
  "key35": "4NycmKSa6uzJiz6nuVF5U3sLdRK4SYd5GJ2xMsXnrJNEmaHJZdTyCBRnGLaSf7ryRxsjFPpkpLUq5zUUJGve3jAY",
  "key36": "33S8xX8bfKEVHqk3yQsWX3ftgTkjg7gJU1SHHs8Vz5NwCkf1Vji8rLNwnb8A5sdYioT891M8h11ipP2KuAMAV7bY",
  "key37": "CbRxhTfZjvyn9W9KPQhkDq9FiXddoSWH8q1ft6GT7nM5S9HS6aB3Z4kP8tUMaQ8Gjpq8ExxK7vHY6AEQSfx4hBT",
  "key38": "32s73mSFrTc71rfquW4FGFwktZFkHgrMjnq2hYh1W5avFK9vbhD8FUHYKVTsDvcfUjqVYDT1ihFCMxDPfvop6ivV",
  "key39": "2XvRiBowdmwavxYHrXo2DwEmKcwPPEvEEPtt5qZXpBxhWkCwD4KsNVNZ5NttBykqk6h8veXYh2BN7DBLZv1RHj4Y",
  "key40": "2TiWjdca7yN1eRoi7rDyVpMcmRnW8m1ueEZFhtzTFSrzSvxrMvCVoXokuRoZ89X2kvwAuYZLeUqxmhkwYMwexpqJ",
  "key41": "4vjDoFtvRQ37MwCP8rPdT9qyzHunsb7EbZQ1RvMtsV47e2rk2iGEwjLiLkMrfvR2BerhRmikXB5pM4xRnu2FWMm7",
  "key42": "2YSYXvyKuqsydsWgpj9HYpnKbEQKTMbvCnmG1Xjogz7vCrfBMKVrNg4VBCnz5TtSGDew6oHh1j13LiqqHdfmVLbA",
  "key43": "2eeRTuWHpcZjwuPgq7eEXBrsCAXK7pk22K7pzHUpofFZ2e6BCrhkXHmA5x3mg27CwW3C7awX4A7qjY2N9iKAeX3E",
  "key44": "57joWSkSM7BbMo4ydoWKCyrL17Ddrbgy7JcWjRoRpY6nap5cUEATRRNfda2H9uHoz1ARxA7xMMMinVc932qtC3G7",
  "key45": "3swCQG6A9E1R1Y9ugZM6ahud7fd6NVVZXK9t266TdYUB6tyJdPeDcRbwoKUZ3qMZ9AYvcfpteTWJsD6bGtNCCvQ1",
  "key46": "E9cxWE4QmPYuKqqL1k9B1GmQahZQJThfMrJ9LGh929aNRPtNBYmGmHFonaQzPeCA1Bt5iqFJWdYQpvsuPdNYmEq",
  "key47": "4uFMX9juDgKPgUwnHPUywDhkHw2aQFe4WcSHeNToxPVn7ttpP2hxc5UbDoZqqGBWi3CZpe9DP8ycLBAwEJR2vMn8",
  "key48": "2z5xd6JJUmfDZ8psQ6qxDPTBAB6eu3fDgt4g8qQCPxH8X3iLsp84HtLRjF4LS5R8Unif58VqqUcNjqSZc1rhy28g"
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
