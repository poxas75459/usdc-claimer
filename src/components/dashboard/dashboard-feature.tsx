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
    "44gQupGszJUFH9nvfDeFYZmuAHCGnuajCjXsCc8DaydVeSqsNc5FcPbfD6pT9kFhXC9CXtBgWUoWn22QnAnsEBd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmPhNxHy3xqesUyGfG7WR4s4iwyrMPRxS2u9oJSfRvHNYP3PZGBchNHUPryjEAwZ1akd6asAidUeiYaNw1xxYMk",
  "key1": "5LeZkrJmrt8Lz6UkgK3GsUd5vBqDM5GAjUugtQXHSyoDr7wNDLiAGu9iAhqSNgU2gcQPWKtrUcRStDk57mRNPKsb",
  "key2": "2SkPhH2D8yGxJyYxMQvd9m3GzQAEV7oqyDBLD5QVSC9YEPYrNGYHd7gwfrUf5NUxrVGEQaguhrhaUL2PwskVyURU",
  "key3": "5zYQACHRz7MhTEmdUPA8msXxVaJdzobHtd2pvjo788RBFMfGDQQUaeGL3d3H2qxL2eKWigJ8PrBJu9QwcVtr8efk",
  "key4": "2aB9ipnUeUhsQJBa6mCzPRQ7AGmE21Ckh3ktypD3cbRUq5LSUD9o8N9rKySUCa7SMtLd1y7Qin9N5KZPn2tQLmoY",
  "key5": "3nDa6NXsyTFHjhH7ek3QWvWHNRHsDazYzAWo8Ki5NCY9MLaEg7JBj5nGQcWjJP7XX15kdsPrFJSHnfWSdDrdvcUp",
  "key6": "5byri2ot6YtPPDNTN1qG721SSDjtCysUgmmjNQcv6r81riW43bkaG6aYegft6KAbEkGAm1DRDXQU4zT8s11oEfby",
  "key7": "2PitqWVkEgEGMVtU236MCv7D35X1fBs3dA7H1uvjSdQYLhyDjwz31pKHm8jvehyaiNfuJYrAcvWVJjmCB7MYJJu8",
  "key8": "3WYv8VcS4jHVQYuhBnCYs2zZiqxLNcP7M6C9FJUi1nmmrBbbURqQUC6Qey2KqcDLKzoresi1ZSjAhQ1jcKrGFuh8",
  "key9": "4xTkb3Wa4kMHc4zJKuvufNL3dL3rssrh5zCFgcKvSyWjuU2sFwbdgLPG6z6MXnV2GLyasM1GYGCKhsJXsceT3RMC",
  "key10": "SVRk3aoSc6Kg7YH8YG6kyKrG1BpJoJgdg5L3qq8qCYTrxXsjgPCBVbKWQ9unG8g1GnKWdQeGyB21BCzMprGC6U8",
  "key11": "3xwF2Fg6z7ZQLC8BJHNTha3S93t5hguKr18u2aFxLfw1ZesD97twtL6uYxuAshVR6UVArnKTKEmHFY5uMponQo81",
  "key12": "4m9AnPW2qv8rwYz1pSv163rE7d9iRiRxYUsQpA1P2yFjyqKe1XCYHLES1kzhQK3zvdjtcHK24yjZVpEStYvzHkkP",
  "key13": "2EtYMKFnzvPavqdensEjSzQnVu8UnUEQnWuHLmaeuq3hrjY2DLUcGmBv5WeZnCEnziA75V5agK9CzEWxxni9w5ft",
  "key14": "3bnkvrNtgU4zAxdBoSGacC16gMU63bGyTXEL8gTkbEiEUqRiT2sCKVe9kNXz5BpmWx49dYhguSVRXVqcwQwkdXHU",
  "key15": "3JvngxF25BLKT7CNgTYwfjK7DE8dUm9F1q8ZHNtf6hKW88PqwKT3yaEJr5PYewPVV1Mv9F2LS14CxvTxpZReDxGx",
  "key16": "5Ts7Kn63KTb3H2ScMJSP6KxDRuSZBCVnMhHPBbEmgJ3RNaBrZurnmeNSjPk7n4zPLYGnog2MhvQGycXjFFgqJ3Da",
  "key17": "55Csy6PRF6CEbEcWRR9qnjtxyeT1gRQVv7WjxRdCjpTJ4Xx1qUwg4d2n1YDuAr1wCt8HdDtFRPTN4EFnDcDBReoC",
  "key18": "26dH9BpAALvW8yrmjqMN2JTMJ5fyE2XeZmPvRMypmMnQi3oCHZSjj1yi2AUFTBiDex9jwCN4kGMCGYPsQbDeWFpv",
  "key19": "3hdozRsX53BnK4mkJtfVLCZhAECrEQ2yjpJ3gDs3FGCU7GFxw4jg7sEzfHs8vCvyVjVMDhsjc6UjW94jRoSNr4Yw",
  "key20": "3nb6c5NTpJxwCkvXpUSrjWwpaKd4HT98iaYGFHeGsgbRokWVYAPWPheNJfyJQyDRymwJg81oAzeCAAWV4ZfVAEwc",
  "key21": "WPuxoN1Tp81jcw2rLLvHU9UvXe3KfPGs3vgSUpBdCmxWJp79KENVq6g7gt81YwAtjjtqCwtosXswyT34hodj2pc",
  "key22": "BBJgdjz5Fa4Mx3uwJpTHPj2PLnqCZA6YCVZimDzY63KCt2J7m6j4Vo1Pf8EvsuL8rt83YSkUXmJvsdi8TCEB5uZ",
  "key23": "5m3VAfeLZxABKs8txpH5fin4cwGy95wWcdfM65FvfJ7PcLEzsvLJeouVsKXsrZgrwJKosMXcjHG3DkbjLtf8A59d",
  "key24": "59N1MtVA9SY29CCQHVdeW61bPMYf6CrY3R21WD5VKgspQGoCTXTDpQQkWkHgejDDsRHXDoTtNxrjxV4x48rED7oU",
  "key25": "5NkxgMVrHxZQphPhCLrXU8NE6oef7Xsy5NbfQNRCDkhTvaMZp5uVjuvmQB27eB25hqNAcF526UYzXET5yPBtptEw",
  "key26": "8QhsCCzPik76aAwfmYzytD2LQTEZKZC7Dp1mLim8aJn69KnL8Rg2mG7cMDXMzMZHqNft5Ttg4UXH8HwwSr64BXD",
  "key27": "BygFnnjQGg7SvQLmfbTiAEafHw2dpYvhQeFc6Y3B7mVJT27capBg4zDfZx2Pe3KT4iaB9R8imDHPLmgYZ73bYyA",
  "key28": "2vUo2xtPecQSFdgFEiypzgmtTm8zGwsrp2oxt7gZ6yBQYVYTm2HVBgN6XhbvcrUQzF5pHaJ1pP12YnQHqFD3rda1",
  "key29": "3uFeRKxG9b329ea3CkqCkjd9iWEfL2NcLa6jdiFopyiHVcDSz8bC8GVRoUNd4XbyPsQw4yjZ1upfyVh86G6te2fc",
  "key30": "66DT9G3S3c7QudEBPmaGt9pZmeZGB3vhV1JCZyA9GizfEvTvoJ8hvJvcteqGE9X4uyKcjS2VtFX5FTwp3MXvHMTC",
  "key31": "4zxGtPjX9sr6q1Rb8Fe6TAwLGtmzk9wg7DSNjcLeuGmS3j6TthKLGDD5Tb5EKTQceQccJcnJZ2VdiEgcqt1vUHFK",
  "key32": "HrpaV1vWqCdU9sXZBChfVpbAFifPPmwApA9UUF6HAx8NFe1E9a51627z7JYAEKz97hu7bKNNeGC7iLNqZ2X1jjA",
  "key33": "4hUbPQe9PfgxuwaoWKJsTbaAfpWMReipuFgsECDwDf441xiMtBCzKyE2QpbUZUqp16AKdpZGvH6UytZuN3HPT6K8",
  "key34": "47NwHG6oDVFq7BgLdUTmFfMPAJz6eopaCmfbwGHdYCzF5uqAVyoyY6tngdvBV4vxjze7SRjT4wngBbuV1JQXQu5i",
  "key35": "3jQZWF4UUfsKJD1G8WJiHmBsem72vNwJ6PuYSbJcYzBtkTVPQS2ZGEmmh7ojFJbdNmbgHbrJNCtP3LMAcFT8vj7J",
  "key36": "5aoVa4NX8Qc4P5FCxMw1fV9LEpwuA69jtwJE6WgdvuJTRbMgceFGEZCeZHCeQkrWNL32aFaECnHtSBaZxD4R5yCR",
  "key37": "CQrnmvJkpcWQQUbCPCk37TyBjYLFej62KaN1rED3nuSYYGVHD5JrGionACU2WY74Q5RDBs8pUKmzSmkjkhteAH6"
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
