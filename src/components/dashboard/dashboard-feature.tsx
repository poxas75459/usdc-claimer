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
    "2HVaiBQa3hABPHyXVfz87jCGtZE9xKD5W2QHv4i1twTwSbnnDt8rj8NZbaU5H4LtD4DGhjjSWu9DMS3KZ5GAmCRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cF4iqcZWyKpzDWCQ8eiswe9nq9BgK2sfj2VD6S4RWRtrNuuCdEWRHBVbm2nsQiCNsSW4nuepi1VqKe2CV7AY1cY",
  "key1": "2gcT4iYibALSx6XKcMdgjz4X6HU4RY3KqpeaXX8Msi7uRzijZMNB2SdQEXdNkFGswzoy8XqNu6zAFuUj3F1WFXRm",
  "key2": "4oMjtYs18isTMbhMSm5ynpbe8e1SL611NrN8szWSagip4nKqyn7oJthGuDPtSrEdjiTkQqMSkRVKZLLR3SMg1UT7",
  "key3": "4ywDnkv5ecs7QZJ3H657Z5sYdJocF8ew79fMjPnVdsB5nzMb3hXQdJtn3Wa4RM6PkCnvqjZQhhMUgFrkDx78t62H",
  "key4": "5geeCefbiBtfGDEYN2bh2ZhiAWbqfz3aQcs9B5AyKqMwWoqp44bKkeBuugi3NRmf2iygAEzqpHxNk5R3cisrJ6c1",
  "key5": "32h1sZ8PxhfmAautbqu667WoP1aPZ3PuhtJddKi52vczvpEWPPvypgm33d5HmicRhR5nmZoQVN3PXpKMxqR2yNeP",
  "key6": "4ZFSJfYTMQdhiFSXdfZ1xCAVRWFWe1BMzW7yzE3xdWwmTDzVakjKYoHskFVtg3GNdEnPnU4EXQ8KNsfAsnDrTNFK",
  "key7": "2oNyzBnpxNTRGdsvf6GHhYo8MwZNtNitByytizhQBN8xYwHvW2QvGfNc4ZMWfJfJrGdFM8wabQ6B6c6jqVRQ4JEo",
  "key8": "3voNDaGtGPG4UzGoJ8U42MSUCRu9HyqFnvNsuiitN1e2pqw3vsY51cLKtunpFWQbwVJms1i9msxanqKizyMy1WFz",
  "key9": "4PoEY6qZfbr31Pe552oZV7o61naDexX7mf1LA96jp6ppomsc37b5G8Qbx3eMQw4DSmUiMuxh2uayWdU3LhSmyu1v",
  "key10": "SEsVfKC4P4Xj713MqU5oicWkoRFVesjGtwmk2yzXZyp9ZbFHCanA5p7GAQMCArppMTFWM3Fos78G9qeeurvP6AF",
  "key11": "4pBeY4jbZD97d5N9EZEH7c7tzhrLoUwejAaEgi7NU7ZDwAuQM18Le3eadZcHmTHvBY1VBgaT61KkKRe3Qhtn1Aua",
  "key12": "4VzJHtYC5s9JqXfAzo1DtA2LC6Mm5xo1duc9Gcar582T3ufdLU85F8bQJew3FfSRGinb4yiBRR5YbJyoamYvHeMr",
  "key13": "5atD2bhDYw5hqmu6qVPNSZAoYuY4sf77ENpbHwh6XtJj3mnzVxkwpeRx12A9XLn662BJRewUqQ3oo9SkHX2PkEKY",
  "key14": "4TrahfdhfudDEWHY4hmrBBGBuaRNjcaHxMNxSrt8ukxMHuKAy1T7F1NwPoN7Q8U3gBCtZWxrU5dYmvXjLVRvwMns",
  "key15": "4JTBmgJpyqwdd1ULjfFBu7Yi8VvHov3d2VfDKphzHm9usQGc7CrzTNEMMBcxBfjHpTT8tvH6GaFeSQyejCvxZtUe",
  "key16": "2JPQKdprxLFi8iTF6jPr9ws1vdqBVxT6ByrkK9tC5v3d1AqKMeC24wUKfc2Sz2qai3k1ze9zJovKFayGEa4apwmo",
  "key17": "3mQg82zUpSNcjx12YR9PQazJXtgyR6adXbfyxUNA6Vrrxo8t37ZxwvATuDTBpucpLfA2vgyvxFMbiQ7PLytoRed3",
  "key18": "RLERwr3VtRYgS4obVHbu7uxcyyRiDA1RWTqc1sEjGugRwH2kMp98KdS9x7eHXcN9yHrMM8UPvrtKWi9CWA1W8zV",
  "key19": "vPLKt8EVdexqPGJgjeZa4o6cb7FAyvhGQGvs2mu3kXMC5rBhwqtrpGjaQu2AhzJbpR9DKEZ1YEn5mTks14BHVxP",
  "key20": "5xC5R7PVXkPQK34SrHPds7qnSCrMR9Jn5X5HEr7AhTBKcQKFYgjYer7vsayYyxGqAgwUah6thWRFxEqLMgRcYbRd",
  "key21": "k1qJoBgNGX2vtEdcDWqpB3LpfmTjV5dRcFQbuTUwBXagAybTnnCymaEPtAoXUwe1enJicQmRYoAyzU6HGih6C7U",
  "key22": "2yL1XoNP71bkccMkj7P6nhpdQxVM2x8Cq9pzz6Xd9p3kEydHJJQdKyEeKbGFXhcmcu9zdWvy3n4GibuVPEVNbPaQ",
  "key23": "2YBWTv1AqXj8QyVXzTGeW1Pvoofis33jpWyJmoToCyYexa3Gv9zwjx5EHCkEU2B3oCezXD4B7ve9nFgAvMmMVX3K",
  "key24": "FB4v9mbXHRryvs7mwmibJfpn9W9mfcajv5EMtsaeStEfB6tXRTC8QtaP4GSc4C6DM5mD1fNFj5CQXeAaoGwyRBm",
  "key25": "4K7AiC9ixVRDhGE3rf5UUYmoZLCUJGsqHWxBeFT9a8ibXZopzZzoqsXkmptjHYZwqwQ3VDKEBmG7h9qfW8Z5fQnx",
  "key26": "2GK1jWEVDtDE3JcTvmijY7pR6ZktP3r3mFhG69gmfpGvHwQxNkaeyZF9JYQqsCJP2NwqGADr5ZwFSkKYzcdBAt9n",
  "key27": "QqKc7RTLSwEaCJhiwJnMVnvfMoRWraiVYj7kpH5fx3YTbVASCUHdYuf4Fj98qGsB7Tpsq7c2J5Bo1F5PfmpaHap",
  "key28": "2k1ZP3T5z3M3NvKYPCW8VSHvRz2qxKuiK8eZAmfEqGMiNb1ab4pJtJaTScBxG87L6hBwiarw7BaJNkUB9YKYAivK",
  "key29": "3fRkD2fkpYo5sg6oWodMpZfg9v5SkmXVDLkXFCurTBQbnFdQzw6oKyDdBwxNZHcupby45pRcGnC3JGXPPnoXcwZW",
  "key30": "4o4tnoEM9pjmvVn1bVuqgPJKiMfkrihaPtL9BFngJC4uRzxkdnvP4XyWRwUzyTcZbH8G29hqi7LvRhjpeyvh7AD1",
  "key31": "384iVX2PhfjvQKFWJGcdyi73hkgJs533A7iJR9pAfat8TzyJEwJczNqQ6vQXzUthTUodBwpUBURx5x2yvpRauRe8",
  "key32": "4ZMfCMhWuYLidLXGAyEvuh3nRLyV7xVAKDDzadEZ86EtKoJQej7tzwqc88BDtCLca4JSSWFqSsuNCkFdZF4tzQNf",
  "key33": "63uAjhSKg6dWWBW7fHp3Jahc9d8gjc4J5UrzkxFxFXtxmFnRbp4kgQHtAh1PfNRTweC6fMck11Bc2GVnXxzwkz11",
  "key34": "3N8LVw6H8JGBMMG4VyYUC6fkYKDN3eu9LYnXeYugX8h8Af1VLXqQto9jjpsQC24EN9uagAmbdnRz9KvndWvLZMVg",
  "key35": "4ss96uC8F78FC4XPg7eALJ3BDaSB9CtNYB4dN7WMGkP79PgsnY99B8NNnoJPfBGnsFEYFQkP8JVYT9JvcLYqJ6bq",
  "key36": "2aT78w1eJVyEjk1faETSdNJKPDfKecdn7m8YS89cFisYvCSHybYEwGYJCfGhiPQmQdCFYJojs5HG8U4ya8qeinAY",
  "key37": "2t8durNCExf2prLvNGwZZBRfLixp8dciV1BSyDMniCxfr1hb8TkqXSzZVvzjnvQmyfGNAy2ttgYvecPbDu8BTHHp",
  "key38": "43H57jXNFJRPPqNryrJwquEgQvuNkiX3La1oTi5HRMXTqDGVM3K826Fma1S3zZ4cpZHAB6MnuenAJkkhabJRdiYH",
  "key39": "4AFceP1BLQZ5sY5uoUMx1g6mBwqLaWR3gfScVRNBk42gL185mK4GAvDh3TffJ5SrhAm3bTSyMAAdCHSDXkpmNnbf"
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
