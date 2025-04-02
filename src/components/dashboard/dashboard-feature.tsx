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
    "5AYhsS4BEizEsBswtPswBv6GGoUrSEa2FeMwq7uBQxbLdAm9G27oPQbBShqvw9iDoYErcaVQi5WqgNCyuumD8oCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbVGLEJvJw3Jw9RRCQubzzXqXtHHbPBjTtmoZDwLwaUDDzVpKeoybrp4gvsxnEAaNBbnSJYsnieumfYqjso5tja",
  "key1": "4vkuWLz1PrshjkrLTsso9tpU5wmMd98TtpymmSqFa9brUYEunj5uSbr61Qq8kAc8MBTrEWTC2tSMsFZBrhSGrosU",
  "key2": "5vHVLKtGvufPBoDWT3kgMgZFaeUNGFPFRHFAgDkEJkbZ9Vx3tCz3UZdEU4CTKrg8mWoUzasvzvrk3mf5kJMuVetA",
  "key3": "3Um5KKPsgP5e133o1wa7KvbX112nb3YUsL9cTny2dMFejh5b1ujXhqgX66o9KvTVu7K9n5pah3fAebtyqL1paN65",
  "key4": "28izqQvB2oVBkKWo1ARXWK3VP6iNMis5jxgsxt8EDH1ULpHxgFXBD3zridqF86PNtGRz43F8vaUyCz8hvH7mQaKe",
  "key5": "2QkQ5GvbK4LzByshYb2PCASfjK43wcme8546FDppjQ3Zjo6cGzqWcHA1QSWAKrMsm52YYPLhMnNCpv5jbqE9QvHp",
  "key6": "4MGXnG99jEgxRKMpRXq4Tx5SmFAGmspvBynsnRhCwKgYcBLsVubo2MGD6WqBwS3W6hN2WbkPsV1hREJ2fsQbCwEx",
  "key7": "zQXwUvZzLUHjzct2XHsPEHEe7Xf6mST9UV3WuCTLonqmBJxkhtCeydqsvAucTRQJcp6U4ssa4nRsmrn218z61e3",
  "key8": "4ofYLdqYmuJYZ7xwpa93pjnQ4zCdw1796caEhABzGXpGxefa1inip9LSqT1u69b9v8bWDUpiTrCX483cHSCzTLej",
  "key9": "HGQZCiXurSPNjhtMwpvESyjcDSPdyRkEgpD9aLwQVGaoks2QW3Vip79LesCSEG7hMk2HrkR1vGNGL5vTx3aAkEt",
  "key10": "5nY94uSqipCwRp15KdKRAoCkfn4RvLHKA6QEPKxBV1xyREYNYYph7sFXQXtLpzRZ5uKGbfbjoZHaVDHfaMXhUtAZ",
  "key11": "chXSdyrvip9dLqMDVZVNo5rKoLrc4CjNgpWSZXcsVFY3y2B4XgsDtsGH6PxCZcrKrLAdZYJ1LGV7a26gVzQZrNN",
  "key12": "32sqkvXTT3fK11kzpenTi98mm1RV64hgMRfYin215FPgz8VMfjimqvHFDtiVrVyXUekHyNYuJfaFbfo9bZ45Zw65",
  "key13": "4opJ2qCA54Qipe8jqXyA1YgwfebXcYtgNcqsqRcyt361KMNfZ11kUFECzRoshYKkKySgbUqs6RGsqM9mCzXnYpJj",
  "key14": "67YkSdXHJWyoexmKA7vSNhXTcpUBsn6WeufNRP3HiUU4ZiVWdXy8AEXXTdXzWDyCKekBVzCDExfawfFoet4DjFXJ",
  "key15": "3xUQakTsT6M3sCtPxHJDV2ZVvrcXxYrZSmRw6BuwK2N3eG9uxG1AtQsV8pAwiG3fU5tjZjpmW5jJM35fRs9X9JMr",
  "key16": "272TafV4gu6GwZcnMiw6hEi3B51EBRfUwRxiDUPqPsvvDyFrQSYBQDVrEu4NkKDfiZYr6mxNdETH2i8N9vHXJD4s",
  "key17": "66r6mwX5NJwRnXf1dgAe6xNFF2GPi1g5kFbS6HDML7999CPQEYGaYZJDaozMsGQEqKLTEJh3eCGEESRzd8p4cAjt",
  "key18": "24nqfvkJRs5rxff1SK9FnegLZzbTitByHm6rh2ajLrF27nKxVXP5QnANamQg8gCNR9UHuwFgBKBne5dKGGrJpP2V",
  "key19": "62t2wCaXz2ezxFp9M9k62cPoVD1s2oPJxrpfp4U7xceVCtVJMeo9fXqehE28iXpEFGvdErGAonV1bBuwue1na6UR",
  "key20": "3u1u7qWoumx6uMZbZW6KzZkHoJENn67DbyBAUzjaT8A8doUj5unUVFxNZyHeRFLzH8vyFHYvjZuftUJEesDBWmyA",
  "key21": "51zX3yBifsWeNjtSNpYfDdkojxGfhKGc1ZhvVMpBCELcL4CzPpcuXtCQ1BLXLPZ7maCpGFiZnJ2GcKymgmN5EKPB",
  "key22": "SHACUF7KBohp1Cc27EEQac7zzfksh78uPDTFiiXXS45umSQyh3WxtYKtDTErjgu9KqD1uNxC4cr7jmYLizCCyXL",
  "key23": "3E1n5MAWoqJiVraLWnDjYtiCoWkh9fHFnaUpUAzr6bJsMYHq8UsYfmpBV31u7E2qCbuCvgXW3JWJCv4Cot7DxfFA",
  "key24": "4ve1Je9HBi2T2h1MeRNuLodEXtwe7pWwisPz39yS4euokVk9zNF1Gu22m663pUEh9uci8YuPEVTWGUQtGeSenrgd",
  "key25": "5jjCjvo58QzoQGk3AGwLcamcsjYnvBjLMpXpGhG2i1zTffR3Y1SFD5G64aN4hq2VDToD6e2jdtv6ypiSLMtRFvpM",
  "key26": "7w7csecW7cXjVDzHG2Lq92sr3q4u9HViud1AFAxJpFHQckAzC9LUaTpVXDvRhzpUoB4kipJtdbZZ8tgCFY54q7n",
  "key27": "5ktZLo62etT1tbmqFvBzW6FmyjSTwAjy78kGeqUCiTQXd2NNWZMAHyMCZWKphf9BqMT7dWyKMWW7bGoEm85HX235",
  "key28": "E42MTrHuFmrgXExQjTEwpbMGT7dYG2KmVxASv98dDvVgQdSTKnPHKUfYMGX7g1byVcYNoH2xLbrhV8c9SzqYLcd",
  "key29": "4ziEzXj9nird7r4gtH7VApzD1ZCehi5gXq2rxakrUDBvQucm4bEEHEbytv724UAYK48dPUJ5QunjyHVpPhoAvhKx",
  "key30": "59Z1vPnq5tLSfuZnLmiRqYEC7pUa78y3NrXZV57WQi2BMXzvaniJvrDc4zvtHU1mt6PWR1vY9Je2j6rcHSe1HV9f",
  "key31": "3EiXF4jKNon9MMTSJ8wH9mMrNWU78nNnDiTnkQ5AD2tkQaH4hBPEWFeJJKA7UuLQjQbRxLktsc4DSqcyNxYiWtp8",
  "key32": "3doQ2HiboEJBcfe5fgQvjXZxknwCib3CccYVMRdTAAneKBJgy9CfvLz73dZxNALRLKkZQD8m5znHhaNqkLQFoenz",
  "key33": "5DQs9AawS6MVvuypvEYVkAoj5QfFPnp5roGwJ8RRhvquk7Fsv1yrbz3a7Xcn6wBZ6pbVo1Zic7T9vyhqdiQcsB9Q",
  "key34": "MY8ko5edtpruvNZjn7FUMXuQzkNHGugTvdJaCasPeKSEzz9URbpNXVH9L52kGgqtAPVaBUytroPX7i37sMa7ATu",
  "key35": "mK2HKXYeapC4VbUP2YLYDEJq5Jxm9ZZ5eemXFcZw4NPCkEqyC9ABwhrc9Y24FUFTZcA16bobhxWFxadqZoPR4mD",
  "key36": "4BgQpaKVy8C3Vhou2voGity3FEDrNmMt7RR3bXkURERD4CxjzSREXKCJ4mKMyqKR4PxfouqwX2Nm1rhJr389i6oT",
  "key37": "2YQxz6MmAv93BT59uXr3DquRNxEYKV83DV4qFMRLitpcRdzxiDYmbBXsE6ftihfbMR5BYwvCiWzGahDvTXSw39t4",
  "key38": "4ez63ybYVCm2KiUcQsrmB6RVZT7zRCKwByrKQLJ3W9diECaLXZXTh4tgjwSfi9VxHBgzyEgJMaEYYCz14Gr1zUyd",
  "key39": "3JWejzsuh3sLJvDAJddYNRP3Cy6KaFjUTz2Rh52VvWsCxXwhDJ1j6ma6MLRGXdsr8j2JbCi2CxLKpJ9kE8eXEfsm",
  "key40": "5aJtMiB7La69zXzGcD6nbd1NKUbHzFpW73npe5oX7PNiSNyNXUxCuEhxiyyTpKXBubX9hkmf1ffK1SWCB2etda2A",
  "key41": "3dv7V7mev5M87qUjFpPXFXM3MBTJLV1CTBYrcfaAUK91mEbjyWBN7XW1o8KzibmgWiG31XiDkjBLgNsyHacE6DSx",
  "key42": "56BkxPzU6z6CeMzHLd6pfoqZp9F4Ewj5UqwingCWdU2inKttjLuxE1XtjJSsNHPf75k1hTj4KMRpVxRyoS7abP5f",
  "key43": "532CfHW6dHLL1PFRD7BgDMi85kuMkJJ8L9jaAsTBwrmZF6PMSxBmGEmpTjKYY9YHvaghUYEFf2GYULXJnQmSnGcF",
  "key44": "2caoawueEoxzt46tSrUuwB9dQHpQXJFBuew7Ru3GE9sdvXmjHvd2EwnUxQSoEWZzqF5TCyWYivrFobmoGKCMfwip",
  "key45": "4JLSjhje4HkKygAKNyDq95psbATpUapyYrxtRt9SFXkfknem1u9tKXxpSBF5MVCoktZDey64XTWki7KHmuGEBLNM",
  "key46": "3Eg1775XMTNGay6HqBsrSVht4ZcSHiCg2Vu6PBgAG4KEkirydvwzoPeVb9QMcaQfNht8BVbcpHTrLXEC8kNZ2KWC",
  "key47": "5ceXArDG8rSJTvN4D45rgoDnHc1grLW91PbCAX3ixp6Td7tpQykYe4WaP1CCStNYb1Y6Q7hmFSenSVKay5VaAg71",
  "key48": "CcN1eoPNhjyJSfnhmiKzXWM7fLBhTW6zKtNThE3Ai3PgKxtkKjmqBKF7SW7swycfhZmHHCdsMe8cFggZHSxf7CS",
  "key49": "5CHoyma2pmRFPWGe9RkT5JhnEi48eMkLdxaqaZodM6WQEB6FkQVwZUnf1yMJb5EsE2PR22XPDviptgjewys1iBvV"
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
