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
    "4ViaYKL5vyMWxqqfSWjJyCAA57yaXo8f8WfaJF8hQFxAiHxakeph3SgZ4ddwXHYWStkYUTkVZXBDCVfdWHfbYpJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7Tbu4N7RgcZDHA4WbEXTsdgvxhRoi3WL1uTTyzUobcVpwtJhNVeNXSTQ3oY8gxX9mdohDiY24W9DL7J9WAQr9k",
  "key1": "2Fc23vhKDFq9MaNuH9FLzsDBT859TpKua811si2ScKdymohrQtvfmZ3G5wGqkxhGbknz9orXj3gFJReactTYBoeC",
  "key2": "2TTFGRbt5ZdFhNTXJEMuLMZB2Zkmd5k8agtvFafauD1qZ5UYKXZVeiygzLc8nZV8xuvPbLnHTV87cherHe9LLqLY",
  "key3": "2diTGHu1yqeBBDzGxH8GfCFiLqGeCPqDsgp4PWZ7L8N45j6eutNzohoj99qz6nNW9kXE4b9qLiHkbupCYpgAvjnh",
  "key4": "3SgpiZEKvV9JndwGg1Mba4DiDF9FRZ8cTbZ2ojqfnJJXbejpA5jEZ3Lq8LKeWfWQKGWj5gfx6Dvswcf6gtgyQNLQ",
  "key5": "53aw11zRVNFtkCZ8SumPr2mh3KT6vPHUb4GENMVDUCu2zc5ZMm2SG1nKn2AhWJJXd4vmujK6ZqvhexaFUoLCNU9r",
  "key6": "cHi5MESWpf8qpCNhKvk9E5un2vy1rLf2bNbddDLz8h329U4hRpj9cEVH7CQEdvr3fGc3AFXgkfXJagScZKoGohP",
  "key7": "3hfuKFBdJgrDCReenUStdzGh1fnw6zzwHr3H357eZk619WvRs56oWtvxw9m2xh81ry1a75zsZQHmjzuGzamRrc8C",
  "key8": "GgyoSnJ13ZqD6Cka7aE25Za4bE8c8gaktNXR81bnSCfkJGgsYdxMv8BzTqLRGbf4a2Ya2T6Smbkm4gpmK3dDBwu",
  "key9": "439SiLHuXRy887aLzyjUCVExPKuaiEEFYDL5D5pccMqm6KigQtVK8UmR4MmQ4m9zFfPuvbG4b3jJkwNEjLes5bzf",
  "key10": "dx4e9BSGowkNnBfFg1nm8sPiCuoh7VoqnKwgLy8N8hy5WYrdxefgagKpWyNKiLWawqmRewwy3vZSNvBBC7gzf1t",
  "key11": "4gH7A9qgiYyuD3y6WZtZmndyhJ4aD74DJue8PdLZ4Jin15LNf9zAijyYYGXT9ktK1qcn1D1hdG6s4pdR2ASjLNuq",
  "key12": "3k4HyhF5ESvyhDe888B2krnh6nJU9QbzjFbHAoWdgbY5KUcmwKGQRQMHG5MHGMGQ32xfT6osgMNd2oTgEH8qHDCm",
  "key13": "4ySZAyXhk2ry6HpnZcj8KBNLpftDhGnjSaetpKQohPvC6DWW2uQtWb6F8F4Y2nwJ9CFHxVeH29QYP96biXqWtSfM",
  "key14": "4aTNiH5MMS2XWDkhweiU8xSgmgtYhqE5GYy36TbsKdATsFfKNaVmEdq2cohhyb4EWK3oewVJfz3yJxkuvKFyskjV",
  "key15": "4fLyTd7b93s4qgVEf9uH63av6xLUqFbv6Fuu6UG1vgaoGW2j6XSpV63EZZiZRrEnqPHApkApmK4o7A3HhznGVfSx",
  "key16": "3EVCxaiz72JSZzVzZq4KY6hEEjVdgD6k4GwKb2tiPv76ee9c5vGex7zGP9YeT3J4yyfc5vFffg4jbiGbtXZkZwtU",
  "key17": "5geg76fuCxB9iMTAArawn7rX3vSY6RpAJyiYquD1F8bGfSVZGVtsnRJsUj8fzGMwPyK7eFuqe3y6V4Z2Q21WSujY",
  "key18": "4PjBsCKXiFgXAQwqMZrtSgxKN69a2NFRDaAkbyfY2opS5zAC2qsjLN7HTmUVAVyViVJ8f12Qjf3LZEDf4Yk2eKUq",
  "key19": "2LYoi8ePgfxvsUSK4sPdhkeTEDAZqaBMqX8jCibSYb7ardpER5iRXBPsCtRTPGhTfCLbdRpBAvtjosAiLLGP1Lbg",
  "key20": "5ptPZu66JhC1VNP2XcNiQtNr34dTxoFWuTjPzAZSVVhZNCc6Ay2doEcT7xuMp3343D9X2kMq7KnNaQR6JGYR7hcz",
  "key21": "5CvHxKFddPQhRS8p67hVyx6uV6afax32QH6H13DuLnLj8CtYCzByrf3bZX7razzG8b5yepjSbQ9aoZmaLbWLKL4B",
  "key22": "2vWkUFFYuNhNFKUupqAFb9Fsf6xUSDTmbJabQLUDMWrPjvQrDgcSjM661MR2VAwwSmjrcTHSDcHhPRAzNhkNQiJh",
  "key23": "65qosX851CYJvV5bGr7k1hCKeo2Jgct9kY6nMDRV8Ex4CfXLWQyiRzXk4Viq1aY39t2NtHUt91vqy13wfdzrPC3U",
  "key24": "21QWaeysCPYoGxmbPn4HQMrohKyKoRaGhz4HQPo4TaQyb7cBDQFKWhXznYv9V9ccvQAcQvjwS2XQANZzLHyT4cLo",
  "key25": "btskGepjpvFSZk6fCNnkrJZaUoygzib9XrBGyem6Y7oPmXMYoNUDDQHxf5CKBWjpXafSCxBzc4fkJo7hdgBmtgP",
  "key26": "5UDKZBfiXK2puB4CwZjs1wgT1Pb1UTFY9mFxSZzztaG5r9Bf7PdHNjndsuCy137XjUsoSuMt2YaxRZgm7ZF8CCFn",
  "key27": "ozoKgLXwUdKkop7YXo3fHL5NcXMwitGUYwXBefeaeKG2d8vkccteYB49UoFW2zYG6oHhpQFApb6Pkxf74zW3RLs",
  "key28": "vGQ24zyGeaXP8DTzWHTccoBcx35p4GiL4SrRQ7xHwkAQgJqGVMLz2e2XvFxw8mmreJ5eRD2iSDPrgkngqAuuG7q",
  "key29": "38TTGCku6a6mLL6di6c4W4XLZemxL3yfsreDeTJ4NLQrcAmHcVkVouuv6emWEgb7eQCmFqJVs3iLXsz6uaCb4hoG",
  "key30": "xNKmE2tr3wuULBhcPs45EeNnueJWNTmS8SvrSaH5SkRjXMLnTpYdRA9VAKTAAm9MDoHZYboZC54sdBngym7AJsG",
  "key31": "reM3SkV6M7Fa5K23CQB2NHmMkiEKuFEpydU1xAmuwuSaBxBGaxEtYaASccxfJ2c3iGHnp9PKEsBVZhubx68oe7P",
  "key32": "r38fHyRVn34wbYhR2nLeox3yg4sC5tKpnGHPPaWMv7rxU4tRdjcDvuUQWTpm5JN1YwjXWJ7QWBpUxC4aQG1GTHn",
  "key33": "3uD6f8k4PYe8AUbctLBZzxGQ7jS3EVPJ542AVkpgh4tieRULfmqfSUpEJP4BQvNkAe85rZyNpooUZ135pTKnwmvi",
  "key34": "4ZuYkt4RPhihMEA25rcAt8omxX2YKR3Y9eUX6pPNpr423JHVFc8fToqzPDaJuUtVgKj2SJDWPvMVJXS2EfpZPx3M",
  "key35": "jFEoXube83YTQhH81zgJbixwTK5Csv9GUm6a7sQifnsRJ8KCWkwFfYxT46FRE1znHv9MFeg6v2M3rcSHoJN8T1i"
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
