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
    "3EzAXB5ABtDuWeKu9kYqYeV7apSowumgzh4jhWEpaYRtfVJG1ajWLQyr2XSrTaWBhuiurdAykkqfmBP9MRyaRd69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsowXd11qextR62iEmBDooqvpaE6LTjq3JjVx3i5JRDkvdoZABMpvttUS8HqjiD6DgKnHwSXPG7rxouLMxQLK4v",
  "key1": "4S58xvikkjfwuAHTtabQuP59icBGEAzwoodnKjPoPs6uahW3qjhS2CED4VrQSF94BgDREDvpK1YqbDUt2UJLStQ2",
  "key2": "jidWAxoZVDJKdWwkzo96rtGmydyoLvs1ZkN7Q5XQj2Qpr7ekMbxF14FD4NZrbEMJpEUj7vdYze4wsG9ws1QtwwC",
  "key3": "pUnnra1zGRM4ThwQiY3fgHXkyGPVTH7ZHZgNU5rur7MTGeF8ToE3CBTf7JNxRAwMFgykKyWXA6Nakd7ZageZife",
  "key4": "3ySM9oHhWicVincLAwJEWqrh7Q17eZLSRDiWKN9xgRdsX6dKbw3qa4tg7EBS7UWue3v1BHnA8jJJgg2V22vvoJM2",
  "key5": "1KzLSCmVDXkpHL3FMm5Y5WW2UCeFQbNmaPSTdcAkY2mShRRwfnmpgAyWSygJo5Nng4ExDPtF5y64zYEsnPM4MBf",
  "key6": "MZYHp6vqdanTrKGXhJ5gpiNRw8JAAq41n1gfxRdTfKgqJ71eGYxJWFxJ7Mj3gnRJn2i2z4zdnhwmhTWqgZ9fTpq",
  "key7": "qavWhp57Y5ffMXwGzfMJvKPaEkncUXsDmtyHzkpZhfvVCzhhEHxYiabeLboWFWdM1NhnBBMNJ6h8rYzCZDcci2L",
  "key8": "65JAcdR3YtA9XR3Ttu4tn5ffvrtNNDLuJ74QaEWN5PPCS6otk3tnbWKGw4i6YiBkh9rqPTr3tLgGcsXP8y6o7Fz7",
  "key9": "3Ydi8aCWjwUSLbakKDVGjigZkfyHp66PZ9NfVogt5BNmB5MbcrpJBYFQXz56EshECBSw7ghmGWthwjPcQnPVzw2z",
  "key10": "26DRKDqp7xHiaZCgRyQdQ2EEcjsy5iBF48ZBXSr7CwKipFkj39bi1Si7hfYK8b8WPJUTPZToJtUzw8hKf9hKyn5W",
  "key11": "3aq7phdLRfVqvXogtBKNH4rpJPuVjg7ThyQ3ZwM1zPPTCznifCJU5KLYxGQuuPoyn2JvgjNMq6gqerP5fChEZVse",
  "key12": "3Lcw92VY77YXWdx1ghiMcUx9FVnh7JnrTAHV5FTvu3z6rodidahM6aF3d9wxXMbHfzZQmvbxBrvvmm98WChqNPLR",
  "key13": "2M8CiBms6eHt1LzRvsbWiwnWrGjAJPtNifxt7TSdUbbFdvRVojYpbfZCoCTwmWywqpWYQcKA41WsgNfhvYATHcpr",
  "key14": "6p1Y2KZLLPxqSnnouSEC2sTVdoGEZFbY85WjXMaDdF3cEm6rFdVu4oJLRATs5d2zDy3A2jVsEnvhvC4f1BmpM9z",
  "key15": "eELE29MjGqoniqg8FBkiz3jz4oC8BsjssCLks4BCkHvhYabfY1FFKignUQmmR1pCB7GmxwuCMFRZKpkY8f21ZVN",
  "key16": "arfKrszzCCQi13nX1BB67RLqNXPXoh9hDa49MGtCKKghyyRrsxCiKve1WySwUogGaCC42DEB8973Fvee2M5HXTW",
  "key17": "2atLnLvLjZHUxE3ahHo4EVo5g51E3zYqEYpHpdgAQQzSJnspCGb7jqqhVJRx9rMDgTheiFdaSd14XSbwuNdfohGc",
  "key18": "4CJMVGHwRBUwPJZwruPL5H1tCBRdVSjSSvkFoKm8C9vinmAFu3P5NqnDV2zyYGJjwFXhfXcy25rvNACdtZ8zAFUn",
  "key19": "iEsVsAnpaa9wguziGAy3WLs629rYDKcponj5WPtsbQ8eecW5s3QFaa3QrmGdoasnicvMXvkCoNifG2DpWcqNaTj",
  "key20": "5bvquoUva1DaLarkwXMcz18iPzwfhCTUWSgm8QgKcd4xp1vTR9z7rYjPZqJ5wZxDoPJGvTwtfpHEkiBFUynzHipL",
  "key21": "3re7HmMXPvR1d9t3zZk3yaD6WksicEEmtVfnkopZpegQtL11grnrp79sAc2q3mzQdgZG1awnjNXHd9ipaY98TscL",
  "key22": "26G59zDvJDUityriQsceybLCfLRf1HQmqRX5CogZ4423f5NiCT2qAe4JHNn1s1bnZeqXZn2ZRwFuiW9y8MUFN4Km",
  "key23": "2Ny2YHxWSgdT53zaz1d3sFxDUECbyJRzqDGsx7avqB887D4p28xUW8PgQmVwbiPpdv8vH1YorsBXz9nDd5c1cio8",
  "key24": "wMdKjVW2pCPLGjydcP6KJqKQksNVDAJY7C7TJwpV1zetWTrKsTqnXzsvj2tobGdHe5uSqka8Bv5ACZ4Cn1bdiZt",
  "key25": "4UQnvKEh4y5BBz1Tp7tv1wWbjJBC8j1wPMSqkBcgAyr1DLRfNUxBs2JRczzea6E6H2RjkUeGTN2MbP6gFVs7uCqg",
  "key26": "5iUxZxBbHi5qQk98RkKnfBGbLgTjWtdvJHaJJrrwJ3MEUdDC662DtoiGpArq6h2XcZnhm4PsEYnnMVrBpVoUJ9Ds",
  "key27": "rQuN2YeWyB7gA8Xp8pNM3rDfp7pSKzDYShtyXFcWdnzifENFb3x9L2tTD3KVKJvt5VWmuHiB1Uz4gXdQAt2EyH4",
  "key28": "2uceZ5P2oZfmU4XoFN1LLMR4BK4BTKcmMXRRmTXA8Efqjvi92T5fcpSHSRT9Bp5V31R4nXpNV5SwQjmgAfdMWvA4",
  "key29": "5o6Sg2Fj9rpJJzZjr6XNqG4Jkjqbnd2ohQpNUurcR9JWmFiHyokzuKUJZ7gb9coTkD7MXSCfbBaXzyixaCfNNzJ",
  "key30": "2AhU6dCpZ2q6enRXu7tkhFWGhsMzWPFN29M5DLGiNJmoXAbmvQ2NhJND4Rpmc7BuRbfWbGo7exaKprjeXcwvagLT",
  "key31": "2iGdVE5a7B5XD13VJhBW6ZZ8QH51ihif7YX1rtK5NwEhRFS1zomVAegq14QDgECXo6feKDXpHMii1kKdWjHDadMe",
  "key32": "Wcz8AT5eG3t2UVcgW26pqATAXPJPM8J9V2Y4f1utA47fw2J7CgzYFnQZk1zfjT4W6g6sJ18cpQN8MnNy1tcKPUE",
  "key33": "3JK6kBTBxtuxioBbw3GNGmkijH7GNBrChMSaTFTLQD4kxPMFyuj9yv2355BHP8XS7Cd6jGCrknA9gMa5fqyNJajR",
  "key34": "5ZcRSFsS7Gf2pwKGsxWfR7iGuvJXpws7pjAzzGiLv4eVYB2bACeQKnQKhTXH5qPt6Mi455UKSDndzqruHDbj9vrK",
  "key35": "4VnFxvJ28Kjptph2k71QWwQq3agnQzBa4tPdDf5c6XAncsQQKpSwQDNoLdAqiTNmcx9mHqhk2M7cgZDFZL1jzDpU",
  "key36": "4p5ctekp2cRtD5TrqpTBrB7nyrzfjf3C7FGggEkLTMV6GHpLvSofC5jmnABPsiCEo74Hrck5XSJnzaaQTAFX2846",
  "key37": "hsQvKkLgCvxwN3T6wCUQTLi96Lo5mCaSkuc9F4ZaU4syoQaZoSpTUanArQnD3hkpFghfHNoFJQ9pUTq6Z21Mm1D",
  "key38": "2b1p3VhQTFvDbEWQkeJbPvyd7wx2SNxYP6mz6wnKnuKmGqJZ8rDWykDHnpypKRbtfQxceMwqpyGJEiRccoJwWpDE",
  "key39": "59KXwKgQQFV6a121EJao29Sr8h1PPz8Lz3tyzQz5D8YxMKDDsWZA4vvadbVvyKPEzLXRGzzi8sWgwKKjCq9XKWXA",
  "key40": "CdkHBs6TzkZLfxC7fpVP2FjTRrLFxm21JsEw6nMrUW2G487AEtQXg4d1UDtibBUyaBbFWcPqW4dsdtwBx92FaZD",
  "key41": "2U82PzyHHndPSk61Wn4nciLJyDpn6SVxFtMSfh5ADR72AunkKJLXn5YnEuCvtDM1G2bcqt7VurovKgPhH8KznSWR",
  "key42": "2QfJWqC8bcz9wfHjNhqd2yXjBaMfH2uWwq8BU68vucZmGPKkL78uFshTsehRJrufahBmJFjFUuzERon9t6HNDb6A",
  "key43": "32pPg3bTJvDppiRUVAHtk7fabz6MFp2Wfu2TAYq7dn5jZTBGQhgyN7T7KYqSGL8bi4ptceXgnQ5zbKmDDoyxXd5u",
  "key44": "7wRRHX4zz3FEc9ZA7mvUdNgi4ttYEcdH2oETFQjM2fC8XtXtEECVBtyMz7LEbNCkr1oQ2csbGGTCCQpP2Bh8yw8",
  "key45": "2j86VycoeHe272FTNMPcbSyyBHJEsGRYAVnEU938NK1QJq8gJGFYzx2ZSTpnAKKm7adCT3NQXfGbesGtcUsgPR9v",
  "key46": "2WUnT7VKbDPrYeFCQPbTxZRVThoJVMVcJCJMGMswGU4khUp7aexe2PSEg3Da2YKyqkbqzSmWDNegEV6X5tLhuRd5",
  "key47": "3dMMEScgc1uTksm6PRJ9b8AZ95PzXraebUtBDDJWLf6cCTqywTNNLzn6FxKGXFEX9QPevawc1VVbNei1QFRWu2Gs",
  "key48": "52WwmuAy7YCqiZGHYyQoYsJELKtxM1xNj38QxpPHt3t5ZhEyyUUVw2knHksfrAoUrAKHBivP1kBGFD4XJRf8f19Z"
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
