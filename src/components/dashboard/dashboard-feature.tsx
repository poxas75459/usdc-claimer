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
    "8jzdoHb4ZFdChncKkaRiupmez588v8dE7sqcaEk54BWMu13UnTfYFEAxcs88Y4jFLizBPukJoXJMJe9mx3j85RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxfdim4aRzfovz6ae7r3xJ5FbXrmWN91uKgSvzc3aKNEBBiW6dRSadV2cpbjYDSPUBGmn9KYtcN6259HiZVhitm",
  "key1": "5BXvN5e7LejqDBye2i2u8fgA1NKMjv79bvamcUWBdxmFqetXmyjdMrmKKZkYBXbyHzaeGxF6BpbwPBmf7JBYpnTv",
  "key2": "43JAaTSV2Y94y7Vc755FDufFGoe1HFx2b7pbv7qNwE7bReGpi4GB7wG4Z9k8zuG3xgoFbZKu5kUMmi641NDxPu5V",
  "key3": "3dkbDJRFdK9xK8fSZwst4dvfUiTMvSBWsMUcAkqJVSpwJWAGt5rM7JUTNTYuvaDDLgmptCZQUUnF9Tod9peaBdv9",
  "key4": "3sEVRbFAwXrXa4i5qsXf6aErXbGyKP5rfRU2dDCEtCZa87VNaKtU4LE42W1Kx1ei7atABW1We3u7xpLnr42YknPV",
  "key5": "3opphRsPGVibxC2gdDQZvnYpihcAyN8CqE1gAkFAnrFbESGvMaox7T5xPBCXp2sHFB2292wWwwbmR89jgc5NYcU",
  "key6": "4hPLXbBXGFQZ8YDigjjYnBNVsHygLGf6469ohMq7r4Mb9GJ6jg9Mn9sGjhfY3HZGWsAsxq3gMaRg7PRtZGDpsswb",
  "key7": "VpSPk3e8kSXF1A24ykmC65hwugHHpAx91YkgvbrVYfeZc3mZM3PUsqb7S9VirSVpyforp2uaZ3LyJAHpqZX6K5P",
  "key8": "66tSWENNbdNM9EUZwdiH3Ex3zZTjj7PY78vc2Jv5nbd6cuQYeNis5f59b9E8iHPC75FjshLPaR8gDWyjgQVQgkJD",
  "key9": "2nPQT4mJtoqkD2TJ1zrPjs9BxTwKNE76rrzDniHwV81qVY7fSQu559ccg4BtqzK2jEM51LAsuLfZGhH7aoju3yeo",
  "key10": "3xFDk9UD3j1i7G8qtgaFzKFWMES3ydWLXMohsC1U3T3qET2GYsYWo8LQWeFx5DysqwaVjERN5aeXuVFi3ah6MA4L",
  "key11": "4oG3JzTU5NoyM3ss7XNP1GMdihq8fdGAqgpx6XxTUNEaPqSUgzfWPArxYtZWLdEPvZdh3CBoDB552uwHK3w5g2U4",
  "key12": "2kxANCKoLW18mwbYBoq4ovYfepjMWVjWMLcAA9KX3656xXLPi3pZ2Cxszsx9qgzQCr1PQ3bndnrhBYT3wxybhYzt",
  "key13": "5VGJf6nHfhaSkZE2w9CumoZFBLEhzw1FCJdUMgMoZLwQo24JsETgRCpJR38r7BkxHCrmDnCQfaY6TAq3KkLMUb2S",
  "key14": "eRiHREYPqtHL2h17uiz667beTffqFv5paiR2v7rWbQBFNhk3aPpNUeUaceNVNpbuY11dWPn569LJbjXRsMEVVvn",
  "key15": "2NkEEtaaLaXQZj5w2LJj8u365nmuu9gvQY59pzQVEkx22FF2yGjqoYa4wSXTj7CBmLLfBxg7GjYaURBLhw6oaDy",
  "key16": "2wfA4hEoJvQ76LnWBZyNwoWc7fhiMXb1XrFZSBKWqigk8r9491Rk7CHxcG4ivWqzXN7BxwJfm2LT6XZ8F89PYAqU",
  "key17": "47Q9oN511LjDMJrArr6xMUigxe9bXQTkdn3x7eUF2YMDuUgoguLJHU6tLHT651RCEabTrQpg4J35DKcVE5YZ7Hon",
  "key18": "2LF5Fsf9AcEnreaXKuEDerCHQWSyPNWHXfY2RNxBpNGsMEBy7456qgHogzDsQ57cbRM1DLoWqostB4zQSrC7D8bB",
  "key19": "483QLrjVBpTAKBd1sWVzfJrayj8cCVwiRbF2bBkLsyeN8svAS97SLDoAyKYJnPqR6ivTu9RjtigSnm8GBtEeotqp",
  "key20": "BrJx61KUX6s6orSd6AgcHzAaSadTDbK7oNjygC9Giw5ZhthDSpx1F7DJK1xB1pCYYLRr6BSmwkfpCQ2TCmBhdGA",
  "key21": "3K99K5LmShA5L15xpVj7pHddTdcHLU43pFXZu3BjEhscnzjiJTTs59SED28xBUAJn369ncCuQxi4JCB5j4DfC1R6",
  "key22": "4Ye2NTdB2nesV4WAFSzuCFheYyjZpbMJHEaMFu442ZnMosimvDherhSn8odhVhaa8TvgtGi2Kq5AdUXoUkeLkXoZ",
  "key23": "3QFsAThYbGWmrr4UVHxRUuntiLoX5aPYw5B3shxUAD7SR49VLb6MZEUXSwa58KvVYx96osTkNodHP4og3mMZMTJH",
  "key24": "42uCYLDTbWSm8L74nsXDteqEwr9V2tYwobKyAmwS6HohhuyQF9rob5R7WdtdaqSHAnitUB7QsMBKpqF4fUPgs9ga",
  "key25": "53tjg8rWgeXuVJteLQ5Cir8VXrPwkh4o2EsbykLAKcc48pAZ56zac3P52fjjeAqu9N2hbn5XND2SBnhDfupBbtKm",
  "key26": "qMBV2U1xG2ygr95zKX1mMKHN7VL9vHVSiYzWE5u126gWTSs1d771ds7PAAfpBcMAP6LevhgZK21JP6xzmy824Wr",
  "key27": "fGPpcFF5cswie6g7FdWb7av2gaR3NJUEJ5u8HJ8Bhczfjfqc6g5inhUwidtB3PMLw5KVnpr2Ru4Cj5TwqzZs7ie",
  "key28": "bF36EGgXFAK51JeyiQcuuhySyDyfFCoNpwiKp7RKz1J3eEa51oWCb6hhhQEmXQFJ1rGcuWBahzZrnkuas2eCGAf",
  "key29": "25pWQCJbttuuz4LqBp8RB9C67bggvV8J1HpfzXwtRsAmfzmNVa69oxpqHCQcioCvM1JRKweRJdFytXnTv1VdXafR",
  "key30": "3gAMruzR3DgSyCftXWutoF1eE3usMyjbZhUprqnxyEEp1r7fryXHDx8WRpVoUszTafD9EeYCbn9wMoXqRbeJ92f3",
  "key31": "3agTWdAQJvn1rBQPSqb9paVn4BnT7xvmYH3E8dLXoR9bA76p8JzBZy4A3V9MsTVUSxmDSg1WQk14SkihCBP224nU",
  "key32": "5DeEVFQHX8qvSahxK8TFGGDpNTU5LSJgidAXvkEu4HDTRHstV9VoEuKQTTouhr6tSPL4HMjQvLh76zJUFwepFtw5",
  "key33": "4BGakeQYgxB22vrAnfSX1FUW4h16jNtgW1XiLt1w6ezkAHoY441tTxonpbixiavWsWbSuyQwm2c3TNkXtwXfFGCk",
  "key34": "5137SVbVd81WxUp5y6P3anqWNWnFzS7pBBTgYvpxu9WbGM1hqsAMi8t5wmbzVk3bcuTQyjQj68iB4wzCCypDHhqq",
  "key35": "45K5JNCYWzFh7T4N9usacEDUhnnXxQD3qxGV11J2zDgu6mykqYMt7UjdV6ZziNPpYAyFQaCeNW9GU2wcJqenfsd3",
  "key36": "f3kdXVUqQxr2AfYqRXhWCrH1kqBN2j4Avoy2unJ6diuxWrpTe2wfaGJQaYSGunmQsfs7gLa7rf1jYtRyb2qZzRH",
  "key37": "3iinKeUzDSPASqM4JeRByYCLSc6nbtAR9Pxs2bGhxAiH77vMPQ4UgEqwsCU479CqANUSEFhFuxq5iQvYGJBRPZix",
  "key38": "RHxo7tRpZfpTJvUafSNvzYYNeiGA6aKjmFqw2a579FxUweymd5cmSkLo1qrsdRr91R7W9zSxBLPia7hvtBNw6Qk",
  "key39": "5EPYU2d6rpoETgQFBuofvsdgPLsgUKxE23ADW1PpWRj5fx7ad6TecjXhJwLjwmpxVJqAKhbm1osezTrbCcv28sAZ",
  "key40": "3zLDXQFx2doAzkK2K9uoKLNAQMx6Q3wLoSz5DMSu7sgyQ6WrECnbZXNSbk1eUm9fAaRM5o5ivo7pFUBmrXUwmKTz",
  "key41": "8cXZzivjD5riPjz8VdS5BdUvXBtDtsg7ZqfWXw4hmjbYfGYeq36chd3CjXrgMVyYDxgSRBxVJn59wDVtLD1AgG7",
  "key42": "3iB1PMYJhSv9u74pTn4mhCB9bNEMAvx1LUJszjRjZMdFPKYm3Geh7EVUSX6g7EgwTbFVQj553pZ5NHVPVUmXor2J",
  "key43": "4bJRWZgdUJp5iAmCPFzjxABcdEfoyfKACd1fCzdyxo6xmEkiBTvW4N5yv76y1jT4BVDcckerGY5WP9XARk7CcrJc"
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
