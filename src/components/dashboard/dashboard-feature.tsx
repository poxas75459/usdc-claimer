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
    "5GPjqufQMd7x9onDvksMAyS2aJJoDsewGMtCRFgenHGrXC9QZoZCTCqvbJhG2XJ4Ty7xQ2AHgryfEg2qi3et1mTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4ewZ1L6rPRbzeqJTH4cJz9z8rwBdiYn4XNFnuST2Z5MzSYWTRaxhGcij2G1puDznEhpiunST8eF8VH5wJ6goL",
  "key1": "4kRdNR5sXYLxET9StXcaMhc79f7QE9iAyWNbzFqeTxHUJxdaonUhPh19tVVQvLU6Kfc2phcPzUTQVndFJrety8mj",
  "key2": "MEnb6VcMZpBbDjj3AvMrYb2CBv773TtBjvy9vCPpxCJUuqP2fhmRxx4btFmv3YFWuDUf8WzD7r5hGDG2KeDd9Z7",
  "key3": "5MgJyPTx8giAynkPcWwTbPCU2S9LkdrfyVixfpQ7KVvRuiSq84d5P4uPUrYa8WSuVW1WabNJNqvqYi6s2mPCHeKJ",
  "key4": "2WmMimFxUG8RRwPa8jVmLgHqTu4K8g6DhQmABggUYqZg6m7vedZAdqq9urLXtfw5EdydA6ZWupEidz3gbATMaMKX",
  "key5": "2NhyQGP1F5upZs5LCUT7W1c25DFzaQVYckM3r7kGcqW5Q5vWmekHS7DeUyE1m6qkwVsL2iDTe4eGKPo1pEWF6jDP",
  "key6": "2A8J7G78wapyU5XbRHGA56tJ2dd7gqjkfgnHr359GTNHsDG26e5qsh5ukXDQyLGnFJxjggVVfRmCp1X77iPcsmUx",
  "key7": "3QW8QH4YDjnDaNB6xT5zGxerYLgc9YpbXhTzj7moMWt53PxctznRXc6NfmuD1WY9oGTjUHwfTxRKuLXPB2cZai6X",
  "key8": "4eMrbpN2ZjZBf7M7E9bBH4tjdKQjnyecYYqLTwd6tKaK8iRYStmrCREi4bTmmwqsAUyAKVDayJ1BGrgnTPnBEque",
  "key9": "2xNgFaLs53cgitHDiowfq75c4qwcm3VJpGNKXHyBFTiuP5yUGaiQDaaKfvTQDMeLk2XEifgFvZ9YrPLVUW3E46ce",
  "key10": "2vqE4mZHMP2vZFTzXKfjFMocMxnXMMTq8FLXfVB4egGvPjzBzHuRVguEad7gSEM1jnGzYMoa64aHrXwWbpA9uRsC",
  "key11": "PkvEDzJQSNoroFvo9Q65SQqfb4KqsRyChwMvRT8n4k64KCLRxGuopgAezqF8E9HrdCQa8zJ5AFFoL2dnHV2guCv",
  "key12": "4Hq67dxSQpy6RPskyp5o9HwK219G24oRvEJgjrmL6751o7WdyMR7FcmaBnwciqx9acxcKAPzbcGB36p8k4Pq8Gok",
  "key13": "4oy451E2wmo2JNbGxpikXX1Cn3NoxezzvxFpvgxLWWjoR64r9gconqQmVxzCkaq9J5K3QRz3q6fSW3nw1qVeYZbu",
  "key14": "3ettrfCZuwAxSiC6s1jWhWsMQC3iQ6aSfYM7iv8XKgSZXc1fphLFsxaBMM4Tco3JEK3N1gva6E2bHVJrU2KF6Ffs",
  "key15": "2qxrk8n2tKCwMoJX2YS7BqB7jbm6QKQL7JbaLk4MEYBeEu6nRjrn1R9t5zk5EipVZCa5PJf62NGEjhpou5a7zVKn",
  "key16": "RAoc5ppfSeWanpuEKU6JLvyxX1pv3oD5zyvT5TUQHBtECbycziZkL4YAEAasxAjjpPxRdtnwLPpVgMx8cdi2j8H",
  "key17": "646uS4iDfoefGq5jiKTkjtXm8PgEjnCDAd5CCBXUGJkn64arAbjcSUdu6u1oHwDcFL4vrCXXSLvNRva9ReSaT1yG",
  "key18": "4P8mAPiUqU6AtSQodtfL9B9kPKyv465Fwmnzc5StDiDt4RpY6SrdtJAjkTtAt6xPzF4KFPu6PsTLQCpxpbfJZ2cf",
  "key19": "2pWkNNWCyHzdL8psbdjcnfjwDSqSAwMfNf6AWidfNkpsarCyQWY75UyApKwyLTdrFbgSpqj8DYgDxYveQLqn5QMV",
  "key20": "5G1RHZvhtW2Cbpmh4ipELbvBuk26t7DXi2tQSqRF73PFfZWHcGhWyyS9iVVL6jzoJKWyYq75to2Wo9B49gzTKpLe",
  "key21": "38c6sb9R9NV3psbnCc9qoQB59SCy1kNvEqMWTMhNQugzgJT8WUqPgSck3CwUSaiFjmiAZi2DoGdjjYmKGD44y4C9",
  "key22": "5mg76afeVKGVDZEW5WPMif5vrDg8piewg9isUxfMAdTaX4BeGFtoEJHvz7QGHVrKxJsU7cFwqd2smRgjGFgdHJh4",
  "key23": "2918RWB5vWnTou4p6x7i4yRixUkVFTTWB2vmiCsBGnJBponnWyWyAuZgmNZJfYAZN53ohbXtiAe3v7nhT1CA2vP6",
  "key24": "31Ce1ZwXQ5LP2697dnGJGGcohKuvr5dzca4C38mvXY9U96z4m4fxNJVWiwxHTSBSeSmvYzJebBjUPjkeyCQ1bpHy",
  "key25": "LyYgTJs7Y48cKsanWvJESFLxmpSLTEcZYoVrxajMYDN9Vvbdmqb887qYyzNjaHXVXDxt7Pg4LX4xuPy4NKGKGkt",
  "key26": "5Wp9whptfc9aMNiebbGcD3qV6zjnbqMzN8xoQZVK8K8aUfdyu6eZUosSnXpMXbjgh9BghQQ4YkQevw4p8CzR7ajN",
  "key27": "PqR36pNxy7fEqjc4ZNHhbdAefYu7U7ZUJYHMyxayAcadsw4u9ekPz6yNyjzvmmNd5L99PXcnsHV3KJeeAVo45oJ",
  "key28": "4uJxXXEJCcGiVv8wWKkcDr7giqUg57jP6ubHGwNjfnVb5MW2fmoJP5jFMHU1v1QBPJSAs9q65DrTq82cw8kyoSza",
  "key29": "sSmzgcEqcFoX2Cipeb1fv3DxVEgZtUA8gGCBf5kAAqfCX2x7o4BuTmzezFrGPKE92SAakJrBwvvf8hK9KgccHLn",
  "key30": "fy1Tp18arkgYgSDFeYTLEx85vtADiL8yMyLYnkv21nLzkMYebiYDfdD4RaAkRspKFZumY3oSxttbYnHQztuucfQ",
  "key31": "325uLTryEUpWKTskTvfwfPgZn5reyVXksyr7cpqCxLmohEDXxRDGsDHT9bcfDoC9XzEQLBLPavgb4enrayfstrR6",
  "key32": "4qCKbDd1MLdUdFscG7HKALRizBrKAqfEBajGoMoXvr7yHDktX5FZXVwMCrauxQN2t3rmJ9grx4QxoNTYitgAQ3uL",
  "key33": "5fGTn6hWuTcfC8ehZiyT2nua23j6zsvCpDYoGu5Ct9sjFFXguPy45mK4Zs6eSk8cZAtRJ56rg6LXXAqgxTGUHVUf",
  "key34": "2mLNG2yb1m73MvWfbbiDGYCDdQJq3AavgY9Ce7aXZgUUbBf91rxWqx6BJt52CGQtC65gMoNi13GtC89VmACNv84W",
  "key35": "6Le3G1aZ6s6d5WuHDQcEgs5LyRnPc8V9cC6tLQMK4sbRZnNz3T2PU8oGGDmd3uP1hCd6LFa82acBc6yZERZ7YMf",
  "key36": "4DUnT4sjMh8GBuqDS9V2PhQxHuRPUAtFR3hziRyXLKmNAbY6bGQek8xZxHZoAxU7LdWrhV5tsdv4vqTb33xZzx9L",
  "key37": "4Pzmh3JxFCN98zsYyaW5m1MwCHqwrHn4EgR88ktP5a1hbf4hof6Gfof8SGtymW3ydBVGJkdjL49DgMoJHXTRF4Tw",
  "key38": "2tLAAVKiaPKyRtuD1vxPK7ApWh1xfwjSaSvHjMUE7oAtTJVCyf7wuyLuVPJqTJWUpGuDENGGK8By26cgcg8MKJc3",
  "key39": "5uATkQ7viqbKPrvh11NNP5odx9XUd7iH4VYhDbcGXn5y2yk2HJkVxb8AJ6NgQwssKe7b2mzW7ci5DJKLdFiTzWJn",
  "key40": "4sgtdpdcDXff6vfGeS1xqjmZ5VPELcsUjKgtrw5Tttx5diz1EsQmqf37BdQqofcC66hUouC7HUkWPDQB84dt4E5D",
  "key41": "4phqx9SN4hcpz3toKx3SuM6phin5nMJXAvTDqqM88YY1qZborsLwNu7QUpHf8Bu4HoooM8K5v2MF3mCkBEA4Qaqw",
  "key42": "4P4at1DLbPBcoQQX8nUgkkRLtYEoKcyi5Y9zgccemGDMpaPHre8XTTnL5yuvTHZQKg5wFmcdH9ydjwmKhfxzmdow",
  "key43": "ebx8Z8gZSiVicExgLecnLcbSEc7KV2fAeqRYHKiTJipQrhfrpDPsL3EVcQuUDn2gCjRRapppwSumSnfbCSmjunc",
  "key44": "4kEn4DEEUw9w8zK7G2oKM3ghufsBMhRk3aVoBEijBudJsyAxXWKjzUrBcVEnvGbrWsL5yAub6KL26UYbqBjcNrxU",
  "key45": "3aax3bx32Uyw84jFvmnw1hspWS1utSkn1h5Hq8LdLDDoEfjpyyESLtnfcwimqTeogWZy4PYRSFFaWWLvWX3MBwtn",
  "key46": "417gt8gyuCgoT5483jY6oPMabhJrtS3qTMJ7vMQh1Z6L2FNRg7sLTfCumv4KZh5rmkinBfZpMV5s8GEsAkRNVFAY",
  "key47": "3TLa2xD6gtXWeXj643KtM4p86mUSPi6rpzUnYUBfsM5R3NusXNG8FSotSeqvwJd6kyNy7gZzyCzdbeaiHe27DrSn",
  "key48": "3ujsmEGVyYAok91J6qK9QHSv4feu9sLAvdC6UfXQiBXkEe9o1VxMGeHMeARvJ7GXLZarTdWFU1rrYQC3v9aM7tUn"
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
