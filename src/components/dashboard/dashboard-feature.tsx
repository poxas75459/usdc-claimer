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
    "5yUxcjaCr6PHtfBkP2osXGRSE9ygEgkCv26EJ3JcLpfycpgL1mz9EFoioQU35UkYEzriuni5tUtQyRit8peDwgEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqYbFqqgC6dLBejZkWUjDUss3NKKTnSNaW4cMSkbZPepB9PDc3TyCpe46i5vbZ8P7Rk9FtTfucDFpKWwfnYyNNe",
  "key1": "3YAPF4T7FtZAq28H2ewkKH75BgBcncCVEVgNRJs5851xYUjLQFRtYDz7GAir5wLFkj294X7YA54iRRugqVaiZzZ6",
  "key2": "64WGu4C6s5qBmHtTsyeMdixbveaAEvoM8exMKd8qykXJmYRHW3kpqbmF9f3J9P5JooNWaohyyeYi7mSpNTT7TVc1",
  "key3": "3aZLJytXMYkCmNfwEtADdfKiAQrc5KRWujzcSd2rsifgynMMYUjTYnvgUMxNhJ8dda8ELe2WcQQP6tdqfovRNw6M",
  "key4": "3RSuqyK322tnEes8seEgy3g24nTUpX4RhUQe3uPuseR4KZwWbBoNRtteDZRa9DjwriW1HfFW9gj6mB24T1QLYZYm",
  "key5": "3xcoWgJx98hrP7LcNoxSda6ABZXBn6YnoJN4uAVTPN6aGgStSizvewQPd6X3McFop4XrTD6ei5BbKeVfFci2LcMU",
  "key6": "5QAndo6tXRo4TwzGaTjP9ybeBB9oUWd3bjnp94zSGJc1bhQkgDYmGXb6DLZ2DgR1kvJFMqoSpy7ueCQfhesKvFvR",
  "key7": "2vw7zLrR4X5pmPABXGUBWhMtMrGpNoct9YRN2rJft62TwCkapqV5b4CKk6ehvH64j96BnWeMswaFyZxYTyt93rSG",
  "key8": "chkdVmb4HnohQ6FaxmiWYekY7JNUAQk5dSWAcMB7FRERjZvKn6sb5nYb8zK4R4Hk6gogC1Vmy8vu6JsfruTRePa",
  "key9": "4hbYhpJGVvwnzqFHp6zn4aoYrhQMZWn4HFrYTDXnkJXf9i1G9jYbVEmLZjeDWnnY1of8tcgZCNUDnNYzhSV4kdk8",
  "key10": "4LVETZPxuDiv64qFNqkyRyUoz6t3k4ytMKw5W49q5cfaMf7rn6UUTxktuxwbmsPLakPxYe4DBkjJsrfbydprUQkY",
  "key11": "3HaNghRnyPqiDxxrt6VQbFq3zknYVv6FAWDW93e7scXrs7BXFFrm8gX3qtHDVGXb9Wxw8W4EiWdvm9JYimBnw73j",
  "key12": "2Ym9PS24zs9e4iuBB11rGiDCkgwhp8Fcy5gAni1iB3kaPWgLYBpcaCyumTTuBZ9bE5dDjJNgSD6bYVH7CegUKezd",
  "key13": "3LNiBVuKwR1LWe3XR47XK8HWgAd5q9Knb1MYD112szfFhmmLXxTdAy5fgtxjXfSifrrfcewoUZQqGFEurYoigEbg",
  "key14": "5rzYvXgSFP1nFf8tZC2yvhpsBg5uCXgGtMVpg2UBCpJG28UpLvuSEFZepoPQYuQ8WuYSA4cJnvaTPaTMdqhaa4df",
  "key15": "bYMngZzPdeT6g5jpsrQnNvVL4Fmuj8Lv2ByNU9P32yyQK6GE1D8pqikhZX74oRTVxLJAc3WxeCa248fCReEbAGx",
  "key16": "5rG98b84okgTtAsR8Bf6u4Ts1nhZPuykP5jsWSRPbEm6KPj67p1s4ZAHvmxqHHciSfjaU6mySK3Vb4YcPtjQx3wC",
  "key17": "Z5Wsjz5TdhukNuRDERbWTBGY18pFFtFgEkYKvE9vx5SdygByheJUNT4bdCP6m6uPjpM9t1nM9atUmqfQMr6JTDD",
  "key18": "4TC1irR45tBzRvDDqgdvmTDkV183uJSDRJQ5oTYQREwBVbhciDBxBPVnF7TCQCLmYVEoV3NG6HVBmw1HjEQ1JXUY",
  "key19": "P5V8fEuUWgvLqMNjyFyZsyFYSEVzL2uUEkP7Zj85iKjcGJN1XDfQu72YnVr4p1fcYEtr5t32eHDiXMP4gQNR4cn",
  "key20": "5yCnQSmBnxKoojesbMVeej3uGtjXBN18CoYkpDGhSyAVfCi9yrj5RQcAHV5PmgWjn3tR21YkkyPDk8GrLw6j7ny",
  "key21": "365HFsyTLbXRfuyXZkfCg8ckJC72S1srqAFdZkt9vQoCur7ueL3ZpC1m8MfnaQ3AwFEyvZW3Q4EC91p6ZgZndwsC",
  "key22": "5PsWPCtVh3S5tkCzNEYRUqV5dmHRzgHq1psd9cAhzP24A7dR5LvGB3TGY6Hg8w9GsNNszBBXXVLmWyuvjtUHp3zq",
  "key23": "4zkooJnNnuEpmspzmdt4geSBJCfzKh6XDE22RBa6KksPZaqHE1YvjRvKNEYqVthorUquwNW9LuuEou8WNFgVpXHE",
  "key24": "2c3JaEZXjUCTBy9syt9zzhokNBn9yhsqp3G2uvPE75mYsF2Ma2uJGs3nd34Jcfs3h8k4LnnA6WznfxdZeCYHymh",
  "key25": "4UV5pvZbN9bWqpesSgGLZCdpWSv1fxF3JXDMbeZAfZQztQapKSgPa3N2khRanmeZReas2PhhEzwAvxUCd81BiJJr",
  "key26": "54xDf1wVgVsYz8FzjZspNeP65SxyXrJ2NtT98wU1SDS9QofYfKKWqFhmCFvSyF51bqD45vUw8VeYRwAF27HrENA",
  "key27": "2ozVUpHSwdBhtuts2w9qgfSvPna4yqQCWTTCngUrva1dkTdG8XwNYWmANQQPyH5e319WgGCXdvFR6Q2kqajs8cfG",
  "key28": "36CvsFHz7aTCdQu1yKW8SZS8YC5AoPUU86niECsDs2uVtN19aRSyqRZkySAsEoevrp9tA68ziC4uta4SRM4g66Gh",
  "key29": "2jQgVcWvSUbu5yvpDkZ7JpJgWs5HRaW8rvAPgj3eDHcDZsnSbV1ypFKWWPBDAgJhZbsrbEzueQMNViacjojgMizh",
  "key30": "2BQ9u8Jg5sTWYfoVuXhzqkj9wssEizott4sTvGXgrPVXm8yohEXdmJVS27RTJ7to1PDczZGHKvXRtzqoJxQ5KzcR",
  "key31": "4Beuk6VQN4Q5v4uJzEXJAkDo7iqbLAU6jpdgAXHVUDtjLyBgdU3Nb8bePAHspat4oZmKEPm6EkUgxEYhWKUUqkzh",
  "key32": "2QrtTPPVEZc8oUSwqMB19o7LNXfa7iY8kpCjr71oms4HbA8sEDSdNhVN52osFzNaXghpft1EvPaxhdttG8pzB1G4",
  "key33": "5bTPTpKMEXxN1aNMky4HQerLwTBWuhBCqSZUDFFtvtqT2FC5GNMMg9raJyULfQQ3MHxmbGJeJjWFfNHoA4WguEoZ",
  "key34": "2doYfxrbtndZLUgX7o25iXLqvVwqB5jKrKiWxEpCrWS7X8CY4nAXmmpaVcVtciLX4VhsSZqSK7ZUUHwHQLPrS4Hr",
  "key35": "5JVc6sVKQBw3oepr17rNw2UMXENiJKhHQSPCzGo9CAK6knSir1rJU9oyGj8b7xqW1SZ9cfQrkgj1jFJoTqaX1duo",
  "key36": "3fE7fR1bimkkBG9s6ZdDbMiroVSGXZdHJVorGkRxRMSbda1B6T6VEyrt4SVv5diJLtHom9e9uVumJDXxfQEByDM6",
  "key37": "5dZu4FfNtZAbDU4QzCXGbTTDEn4R3fh1ZhPKuuUfpTbL3BBtLvd3RZJpi8ix1GcU5m4ZAbxDvPrkddbU6FMRHEqV",
  "key38": "YU6gSAc7jDmN7jhGuHKKVupMcsThEBsNVyLb9fWGhpWu36LudEAptMddqfCFvogRfUb1UHB3A3v7ha2W7aJKJWP",
  "key39": "2C7TvDBtBVh7qgHnzqPToReKNGSgXTe8YNjtGv8NSsakDpRkyZZLbp4QTmWdLzQpVYKsHTN9cmQ29ZLiYDhYWLzn",
  "key40": "2WDn6iYdVgJSmGxW2hvraTw1Bmu3G8yWFoQKViqgzfF3HvfnxCio9fBcQLAeqAcnuHCXPFHiEE2D7uXgmst4hSSc",
  "key41": "4Mq7iyJu4xaGjwEYJABqS1MHXa57bo5sieETy7KLmUwjMQtAUEEgUoiTvJXx2o9LeHFRLk89KyhmReNimj9KMEdT",
  "key42": "nPoUkGFoY7yN2SVXEzK7Qf7UG27Q3vifJPq9YiEoUhy1Rsu6fsWSyXN5NG3Epj8Steyk2jitPpw8u77ifjKLZbD",
  "key43": "ibxEo7DfizrxMPpQx1GEdudaZYnNxe3Er9EgBbFFQamKQBc4pfVYWKXBXBUcAYou7e3KzwZMhDANNBqJftderh4",
  "key44": "2shkTk5psbQsV5yr34Ax2pHuC6GWxhb73f4CGnE8P3DVnCo61mgCNFuv5aCBrDvKe2NMvgmNMfZePMmNjqvemmoi",
  "key45": "3dK4wws9gba52xzFyFAJznKr94yF47g6DsXwu5SYgvp6uCJGDNWLqK3JCbbDRVVnhKsJ9B6VxUiXoE2xqNE4Msbm",
  "key46": "5YePXcNm6JH4PTKK3kYGfsiRtV2NpiTb5hbn8UBsMNdggFyhpbmHj7kACVm914MYgBNtJbtsaKYEyCXTgiKRw3m4",
  "key47": "4eF865DCJa166WRBoNnhEJCQtkx5C3TZMkdFUjtmbGjE9sSRT6gKDFfpPgcWks9JgYaByy5i1YkPZbHHmoSAJ27q",
  "key48": "2kwjKGre6VmdDNQgDKmDgfBs1dUk1mykbB1UJi51m1AWgrznxgK54SxmnWaNRedf1Aj8fMre8zWuhMem2PAnUXcc"
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
