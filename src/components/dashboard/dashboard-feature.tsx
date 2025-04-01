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
    "HPHoxSZ7JwdMSap5BawpVeuH7dzY7yFBYGY7eG6kqnLt6qedoMfKPyTYH8ox4fB4qSTaipCuKQAVKinteNBZZid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUyNwz7Uc5NMdxT6UrYMj7z1h6eYhb1L4j9BZuzkDMGs1UtXm6jA52rVoW4DQ1SWnZEyf3wHbBnQpsVrtgD59wr",
  "key1": "39mYA66VMLWzCrgY6KRg3G4psd8UMZ1EjJSx8311JbbHcMqQMnCYgr9SKLN1jZSKq3zoPEp8vXHKecrbnpYg7Bhj",
  "key2": "3MenJeVHcVaY8mryCKw2tZ4g1KdN8EBDAXefXmY53xsQgospJb23xCQLeySErPwq6EfYtCrvm5fwyiEcMekugEdg",
  "key3": "483LBtaau3kPwYfBrSvyjpAhmFJS9AvANPa6xJV2xkvKGc1yJCPPvi2EcJTPhgRjeq7FB6R83KxjHkWNS2YnTUnV",
  "key4": "5uYAPx4YQvT3aa92PJYJd9qRq2jfdKzo9XM1zqv5HsDAfbUuqZnRRoTyHzkcHEfVD4WALo7vNDDYFThjLQ7DofDa",
  "key5": "42zQrMF4T1vHRU3KHkPv8owmgbzYYn1PiHrwW6H3ciu6GgKKySdcNWT2krxhwx22zJfkUqLfqUoZh2jHNbGwPseM",
  "key6": "jhDgfjUnGuRLzUmSiEwXVayeExea8rHByXGSKZd2PE68GW94eFQ4pJ4iuinZdAHYtqAdzXiMGeJnUCNwbYamsVJ",
  "key7": "4g9XP8Ywvp5uypYVfWgM8VxV9QTqkSjpdhPrXrc9sh3d6eKELNcfTVFExViQGd1rqDUN29xVYgVuQgtosvqe7ytY",
  "key8": "3csdkWHFZuWzZp9dQQqzUPrRzKsVCSeDNXGXa5h6wBHGkz3ZZ2x7QwqTJjmNfAdApLFYMoKL5hezPkhUtFD7Nr8c",
  "key9": "5cnjXUgnqp3g3RvxqqPAGX4qc8v6Xj2mGM8qLwS5zfRgVJ8Fs5GJgtNkGYjTGiJwg2wdXUByvbisekW1V4gHgJWE",
  "key10": "2dfeh9SnfsZQGrXdn5HdmvfDdpbkZ4zbKYtZTCnzPDBBF8tVgh1D6sEyesncDnXNiTz9wPuVydrxiqAk649LAfvc",
  "key11": "4jeqDeAvjeyHqWzQmaXLqkvdi4Qt8X1ttajzpJKvw95YDhS1Cm7fEcUwEciHdJd5Yc6RYnqyZvGcdgi7H2wVbZw4",
  "key12": "4dkdxj3wQkiAmeGSKR4m7yRsqjVmts2Dcwb5HbMyYqqKqtQ2o9NGgjwAxgFkeazqjTmXewhPwZLMSetSMq5AkXhs",
  "key13": "2jPv7v63VCu7ETC39ideFSsEvsUUjyHZHtJfro79yyZ2Kaq4x2kY3vYHPsv89oDvrveKdE928j2ShNzmj8WtvPgx",
  "key14": "65X8iZ5cPWqAPQMDHU8XxcJSjL34BNvELi3z5WSmf1gJVzzWgMBrYL9UDfsSuPmx7575w2rsvesynivsRLDC7JFF",
  "key15": "58W4uWpT7WqqemdXBGDT9fTqR214m8dhkTkvwHCUzw2SyBHNzs3MQV17C65JFBs4gqJ2MGxHxXDw5sKTAKKsvVP3",
  "key16": "3wziU8FaZuXNhEtzABvwKPpdMAy3QiM1WSAndrK1S3HWMnnFd8PhsbptShTpprnZ4ZkbzqE2YEJpRjsReTATprDz",
  "key17": "36r3Z53NCF8AmaGcUas5UGxRG5haKQ9x1PjGfX7qeLehnDMhxQAQv1vCcBAQzuUXZwkHvKjWZu3q1vkmZ7gkZYwr",
  "key18": "4DHU1bFZQre5WZHbV5KvQgjbwUCmqTgNwUpamXeD2bMbc2LE4UfirELxa8vApzPHX6QnjzSMPGw5rdMcNZUCamrC",
  "key19": "4NBPQYRJAZGUnfskCAd6tz9FKQLaYxUN8Tad7zngjEzKANSgNimdyWn3CeneKfA6ZUi6dcmJZ9qKMADgdkKpHCsb",
  "key20": "2RY6ovyie3BKULuzjZh4Rnr26XNurjYnoypPrqC3riMQ6ZxaTvDod9pE4e9Q4KWZytJdC4nUmsBJ6F9iNPRgTbhw",
  "key21": "3MfSS7RuBwvrb84x2HEPpcZ84qAz2AxSy2425269zNNCPkut6iyytBUMe5NcgQnVTR9zbVyZ4mxAzzjTCxbTaNjc",
  "key22": "2g9SqeMS3b2qMfcjuwoRQGsdmFi7fhUphyUX54VENNufUQK7ojxYjTinYFLpGjTxEeAbnKJYLucfYKfwF2HvrkdT",
  "key23": "3ZebS4wQDZnuxnFBXRGsPMPzThLdBvj3FT6vib4GDxaWW4ZqXcBN8rTrz1Cijiyvko2wqpJVLHXUpdLFSaRXnpsN",
  "key24": "2HMCQ6Uxim8dPxzb96sfrWWq2XitusHMcyMSTDpHmXXLDajgErZ2Ma48yYFjNZ72PH4cwrxP7TkYTVbcNR9hdo98",
  "key25": "447XzuoZqLkrQhUrZCddED1239nDVXPhoWFq4Mf1VxNiUBcwfZma1pPMPs6JnQdeKhpfBRhMjerhm9rFLGpmry2m",
  "key26": "2CXmwcXrgFvnXTgXvd9cHmfSGEvD4cswN4VcG2hzeiRSAKg8SKegqseUudRZoCkPhpN7k3cTqE31ek59mR9D7NCh",
  "key27": "vpZEno8ue2hsMZZtDjpE1ZrytLSNmQdrMQhpmVbj2DEf43NT75Gxh9uRFTnTqPSYGMk8u8Y4TY1ttuUHtdayZUJ",
  "key28": "4mGWiXArPq1V834iwfBUEU5HZPEyfkiiPAz2kBaSH717gxPivrp3EMRuEutAaQJxBA9epxF4TRsFdXcee18D8AWo",
  "key29": "3Aqn5VRFkgxCzBX1VSvsVXizwFYw5aqQE7J3gXPvrzv9k1j1mU8LqmDnz3JEebrrfVZz4CpSzDFh6vZxgKP3SDf5",
  "key30": "3URmUDc495ieXXugJQBwKS4RLZNVUNQNLmWNK5AYJUM56yDugHBSW14FtvDuqVY7nvMQRnGJAihW2nb5U9ae5QCo",
  "key31": "26dYfLNwUA1R7pN9LXfrRgBE6aLargSBxM5cWq4HCakJSMgjcr1ppMpfPSdnf9hiUGQmitLuzYYNeMGKRGUdjx4J",
  "key32": "3reUqAid197GE1u782BjErDAzCk3sbczZ4XY85NZrS2PeSAPYwiRHFW4Ay8zRoXvokQxaXYqLEy7vWJojxaYQcQq",
  "key33": "4H2W4MYJBPJfmBRzSQRiBAX8F7ECpYC5HKS87AzZ7HLBr5ia93kunJBxDDyqSWiHLCeDyk95XQKA6uqdFo3WKGag",
  "key34": "67H24qMUR4aNbqw6qd89PuqbH9a9J5N8NWSFPYYGn5x4VywzJ8xMU6vh1YbB3Ggb9XWNtWe4wj3FEtoRrsSVxF3z",
  "key35": "2Q3m1oSxqAP2ZjDK53zUH4uX7qAbRpqQ9peUG2mZUKRYiL5nR2RNXodteg9T3H5uGULu5C1PdU6qvYNK3SSe7kSf",
  "key36": "3wLySd5qY3rdb2DcMd6maDPYY1qTCNqPMuYCv4c5fyJLG2j2nPS8eao5bDgUoxy8LkVWn6BMmRbS52dL5aXLHxAC",
  "key37": "5bRJeuZrUgzHzNVZemRqZdyWPQCcYmKoMAqbcEaVTWm25xJ8eamNRLkLKuGBrUjh9PP26USKfABwp1W9RGUhcG22",
  "key38": "5smdHbLWHmi75Ev7Sy87zpV3TeCsYPHurWs7Q7GvQcU5j8wYYeKsHECwxVHy8XkE84QF18Du4QtaqsLkLRzHopMD"
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
