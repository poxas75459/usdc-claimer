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
    "5gwktZT3wi8yxKim4ZZLXdEJQVVvEDaG7Jf4CzgUj4w8cWuDL3AF6KZVz3QBdFGxehbUSFbfYPHCqZegN89yXnFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeUaBXci13SZS2YugjuBrDrEZXkNYwvMMQTtRCsnLnvSaeLDUfQ76Y9cH3drniemNP2erj92VBAUCsMNgd8fCw9",
  "key1": "4opPET3TdwWh4GbbyJzjuq3wVi5nKLwjWFcsugByj7x9dw7u3ZqpRERozMzDQ5sBwoJ5TN1HKSDEhFjoNR8scp7E",
  "key2": "5VubJ5wY5YZxEUYH9citjTFcYvsozS8ycxkx8QPtzqHqN8YfY2RdDmZNV4QDkFNXBKL54eRWGoUxtfSXzVc42QiY",
  "key3": "43L1FrfFG6s869kurtWamBGKqv1R2Ycaprmen8vH74AykAMbSfo7LtRQsYGHbZu5Ei7vA6UhWpaTSjTxHkCnjtCu",
  "key4": "5yEQooCh18cDGA7EGgzRB1Q5eSzW5n46juYQ1sEwDTyhLZAm799L8vT7Uj8omoWkzsgiUBw2jo1DLNxPrJq3tWzi",
  "key5": "2nRCLfiFee3ytQ3sL12hrPKtVXddYn76aLQAG77cJV2Gqz2e3LhvQ3E2KrvzitvJAUnGxkKxhzt2cYj2kR4a1212",
  "key6": "5bcYznvExv6TTrPiEmCXcxrDsoG2CfX1sNZKy2KjW6NzKRPNDtbrbzeoEh3ycDaVbPbZyCYoAM6n2qLcnGwvLMWo",
  "key7": "4Yus9ngs7iUqtRr1aBkMpmwJx5bQGpxqELjCmY8im1EafMLugnLW9jRRM91EoXQ5Miuv6DWepoCYqZPkHbQewS2X",
  "key8": "2dTZzoLXgMUm9g3qaPcUjbryEDwDX66mREjQb1jtuGmQ7VA2ftRYFZgj6ECL5hbxDA4XpusVZD2BmF4WV2LU9qU5",
  "key9": "2LySWKsAPewRJmWWhMir27u7Vu1TnovD79TokN4ezjbdEsLVxBQYu5wXfZTVMb45Y1rpFm15vgVQ5ztkmgoas55m",
  "key10": "sbMx7QTzpHN7Q7CdW7iCJWv1ZAZatxcT6eGhXarnLmWq2TKe8RSZPJen4MBawd8wTtgiFwSVrUUDNJ7323DMPBd",
  "key11": "5GFQ5oSKUp9S1ko7LrRs8PUpttSx9Q5Z2tV5UkYiAcQk7gjXJ3K1dEALkHsCyEQ6r12kVLfBTJrsBianDRFCpHuJ",
  "key12": "31wapasqVZsCDEg7Q9oe9dNxAG2tuinhudF1aVw6pHHKD1u8KuWx7AWBTCFswLvvrNtFjx1t3VfVD5k1SF1dbHgn",
  "key13": "4tP1R2TMqWjUMccRqV1MD9DbcDrvU1c1coE5FeqPhr5zJ56ArsVXwZDcWwVUZZoNLZFs5BjQ4fict4dVJAH2hT5G",
  "key14": "3mbfAwiom6Yi7x2MhvswbWPTvFciDmipFP7JeCtgeBoGuDgTtpzZNWkykCcDqsMg6NwLEY4bK9VDCuuZBAPEvj5h",
  "key15": "4nCT5SGoSVqYy6ZgGZaZX45xUXFDqY3o4WVmit1B9UeUZDPuC1r27PJDhhn2Z4aTxKwwjqDPhhAqDG43Pv7mRUka",
  "key16": "393TDJGHjGwUcim3YiRu8cdBKniKzZdGPny6d9o6YPTNxNkiuHor8LAm2b17qd7m2sz5E8jEfBAe5wXSWoKPUn6e",
  "key17": "4cpXQXGWPKpXhtzo7DpRgM5ySAcJVLQmGTeAajic3g6odPYg8CzTAXt6hwqkyA87EqQpx9sCJbiY9yxUBNkaCVuz",
  "key18": "4d5QgAw2KptuVyL8ApWv5qYsfP291u6rDwsgzXZXxtr4yUP58wNJovFNynwi881MyTow4mzPR6rzXPJP95x6QQiF",
  "key19": "gFMMLxdVsXyptgV1GxeXTBFacMuRZUFK1iJvaMHr7JxZo5Lxo8b7UgJLNFPrLKkNPBH3uiyK6HqSr4uvmV5kTor",
  "key20": "juMqrNkUFjK8WRrLGHnEVscmvHYquvJVBjJ9iyfrDy7m5wHz5E5UV97WhaYjJvCPZsNKFUPWhUCyHmQ7rPmCLXv",
  "key21": "mxWqHTQXR2iczMCqTRNLsoAy45QC8zUCRJRuJtVQgqWqUXgzy916quMTzDxPoh6PSEXv7rg7FC7qzkQ54iC3yrg",
  "key22": "2ULNh7nszhvCds19YNrNifEXEZDMP5VsHi3YuYQXbqx6myje1utubg1QCAvanNMSs6tHnJC2cYnvXgBhyaXFtZFo",
  "key23": "iucvApP4qFNLb7kJ42zzJJY5PVhPFMWXN1KbeY22nsaGLf1HUWKow3cT72nmV5UBVHNLU3X1RGr8EFDWrMh7uQJ",
  "key24": "5gcN7zULT2jbxoxRFZXfLKu8aRvbWfPRnXuQtHDPC3HEazGi7rwzjJWkRnTun34wHRt7uYMHcje4PcdNLgqNovXT",
  "key25": "66AfFvBXXFXZoKRnNQLRptU5zyWLjmziMAXgBzTQ2sRv5tZwC8Ayiran53WfdSYfyiJx9XXWFZiPjoiRsKfsxvGj",
  "key26": "5CSYCuD3eZ1CTfntD7zvjtTxQkpncAsp3JBarCTgYCfp3Wq9v2NnBUvUSGUpxP6Yj9tqJxcfuu6PdNZxv6yUy2dg",
  "key27": "21PmV9p8XoZxdCR6B2zGNUREXQQ82BCDMAEbJYHAxPPLD9LnXP5gtKT1pY5wZfJYTERidMdEpAvVQxNebJw9LQyd",
  "key28": "ucQhP4qFqjXanak8hhLrLrVPA6rwiC7WhkYbLDQLpb8Nd5eN1SkxHxLNDA7XpWFWX517BDSMj3TNutJfV1xJ7LS",
  "key29": "52iog39AwphM9AoSuVvmm96JzLMtYB7dYPHoi272dJQYtfp5WAHQhR5pMXwQ8VgbFZKDf9EU1TmyUFgPMe5LX2nV",
  "key30": "2BcV6CXG4P6aH5dSxM3SyX5M9F88Vh8PDzaw55EeK3Laht7ZG92RiYcrziSmD8cGzB9JbKptFJeihfmFnJ9xqfC9",
  "key31": "5JUVSCRC4okHqDBi5n5WUHLPpSkntiPHHMjSMWkodAZFQu2CbYGPHMKdd1ckfVMwtcwvrbajGQoHoESijfL8SNHL",
  "key32": "2ewzYi9vYvyJ8fgiYcAx8o4LfGEoYrEZZWw2KRp2wdBtfBJC2Xvc8jp7YxkCc4ZjU6oAiTcxZrUJAaKcHMtKNYrH",
  "key33": "3WZkmQFAcieaPAaTuy1PgSz53NwHkfkPSzgPM8yZPm2X7vZqPi8Y3zhhrP6AyPEP1wBxiCVRsEbEf6qqHRoaSK7Y",
  "key34": "5hVBpX51YxJgpqYpAbpNLyA9qXyKexMbGEy1hBPmMubNRGGoCxiM5wJMay6dg6VtS3C6qMKA8KQQByvEReQn7pWs",
  "key35": "4NdUFAdJfU2PbZd8N4j11irFPLRArsBZF56WWSAhmZZX9Pu6jbr2pJF41ehPFHHXaNRTQdNcB6vZ5pRWSjohjZxs",
  "key36": "5483tyLAzu9GWDKZSSb386nTZfxmRgxykmcjFfR4Je5AmKpUcEXeiW72259MBdyfF9cy77Ybo4NMHsajKRNhTBvV",
  "key37": "5Jthm7wksLLWYn8m272wXAnx7E7PTTMciEXZ1Y9GRKbVtTs42hHnF5XLc8bc6yzuUtQj1ycAUJqWmbDV29WSGjNS",
  "key38": "46FBy93fEVn3GcfkW7TDsz7xuNnKqShkyqz9tVZWKZytjSgkcZTaW92C4uUHqr9Q51RUFmkgwRkKT3hAg5R3d7RB",
  "key39": "3Qaw5P76EFbk6fbf3pzBSoc4TRpPyYxz9MLqRnWtsQCSNnSfK5sr9qLMQeXWgRvMo1B4zUTS3cvhmprAvSkXmP5v",
  "key40": "42NbMQDeWcKs8T21aMmYiiBG5y9zsQKbHQsQLjNwAo3ATt5k8dP6TTTUMhgoLfjxxfLKLFac8xQ2QbNCn3No5M3A",
  "key41": "3EEJkTwA9FYFMgDwA8SXznY1Kz8di591QcYiznaAaKvnN3gBxVUYU5jMeFxSYrgWD4tnqNtsYEceRN9QBeKrkzXk",
  "key42": "w2kUTMx2LRQDGNkoC8ehF4YJ5KZ5oJUf5iGRhxjNzSXgXcNP1c4MSF4EykeWYwSFFZrbCujKzur2J2tkvzCjMXx",
  "key43": "5WuJ7DX3kQSNDTv2p3qwXrHkGEwNvz2p98s9ZXNhyLZKjT33YfvUUSjNQprzuhrRr1MF8CeXdaeBRLvabQPivvRB",
  "key44": "55oNUy6RUBrwwoGVWSZEkcSut2by4V4HmCgJNNoGDB4csfc6tbAzPEoyV16C2HgzjHMdBSUwFEGsPD3tsY1dABUC",
  "key45": "2SxJmR6FFRuC4kiuRxsHU4NKhbcduANb8FH9Nt9gchnPkMg2pv4J9VUY2oVKNoRRTKbxK5Hb27NYDMBQubkNZ7PM",
  "key46": "2aJgSrrp5LEYZZXB4kBkjFaLXsopQDifSa5QSUwPzpwuo6C7uGeuCEXRHnvqyBqxZ6GS5mMVEnrg24shGxss4Tq6",
  "key47": "4B5gf8v5zhiqgC6qG3CV5pxWrm7hXesTkd91VVJRWTpfzSR7LpydLsohtW9ijsX86JWRZzwSykSGQ9HEyduKJ1m3",
  "key48": "2JA8ugYUXK99u7GkG2nUgHzb6VpmeZNFZwmMJRJdwgjnF53yMoMnBMknsg25hEmyfSaD3Mi5WdnTfzJ6BpG2fzLX"
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
