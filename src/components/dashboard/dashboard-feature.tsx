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
    "3nm5NRak9YBSTc3oAR5Ar1FgNjSRVWq1b5otQM6CQQqpdKdAj3Dg7ArCsKWkgMsUmoniapqkQ3EaHPCb4QKZj8VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbgTtS4TNVngMvvFRegCDuPdr18FqPULkQSQQy9RkYf31N1Kz7TFVrpTdWquy4u7xk82w18J6XMgJdPh1PpN5ns",
  "key1": "4XrXhfuHvSAY3JpYUuQtVoSDJnERenHrRvzTsZVm6zfUc2FrwTtFedJ6aSu5P54H7Tx1z9BWgt4RuJLrSd2s5pFH",
  "key2": "5qGLCy2h5UVghe2f19W3hgiQcNahnY7kfDhtfQv4pU9L6JKhbFrb2meGNAtUkS3tAtEnSgYv14uEBTBhodN8nTRX",
  "key3": "9axo8zC6VLYRHgs2JbCBRSrhZYCrbNDDCoGNzzid9SWEUnnaq7cbiPLoePkznTGBUMRRXnBsZzLWSErdWcmLjh4",
  "key4": "3Ts6kZ1whQ94YFBmmsx5sadPXZMsqaK5qKPHSJC9NNxCwkCUKdM6DTuG6uYwaCPDzL324rjwksY69WjguL66uH4k",
  "key5": "5CzSbXadszMszcK34bLMu3JQb8onjpt7zLnED5DKqHbg4irLFKxwavucHYjBfS5VAjCVJ3CKeTQyY2KuWZuKXAma",
  "key6": "2bL4aBb26wdqLog3JKJX7hmaA4rgEYRDx1WDxq4Af9M4DSS1vSa2CmK33BwHpsCopeecLUu5W9fYq7EZxV3CTynN",
  "key7": "uLBuiJYF3xVv6Ew3xXijEbp2ka2sXUAyh7MtLtcGyhkU12eYAMyvAbRGiuF3A7uJYH5Mz9E69MvgKx7szLQGa7F",
  "key8": "5xCR5Txc4CvEUf2TSfFrpgbwEUS6PAvzZiJNbnoUJGBFi4wNjK2fa6hj2MoM3vpqUqCJmn3Zavbn5PQXrtQws5ih",
  "key9": "51TtL2tfVyn4G9cZLscjarB5qSeNAFjMNNiJYvZsvzEASbRfTkW8S1HYf6mqRkU5qQJQEdXx7hexD5xuVGLmz6sx",
  "key10": "3JuYBtcWrDrFd6TC24he7ehjbKVWZh7kybi8dtADxXtxkAdqXGu6zQ2HdJLatNAixxPTMNhBjj92TggjCFPaDeRo",
  "key11": "4ZYLBnvj5LEqe1Tcm3E53h2KdUiHzBoZZzJ8BYuN63xFw63LPTbrCXQyiGBE9CBHqKAwju9vTvT7g6UKrCF8PTh2",
  "key12": "2CNeUU7eh5xxAj1k33NhJNFF7bf5oe1eJJupc5LWHhXYhLBW4nRQuasXGHcN5DDrGUzRkUCMafd1DWg7jByGnh2K",
  "key13": "582VJCkzEvY59Er7DWpbemPq8U2ygtX8wRBpi1TLjjiWC8kGqRNTwW9K8sVNBp9PSnEpLpCEBujn77HTqpwW6G1S",
  "key14": "32ziD2pYVtDBtP89FSUy9hsPJpz4j8jvQ9Pqzqu42mx6PoaTSVnqAkR285BhRSoTSRMHa3MCdtmRzX6Df6M7zLaM",
  "key15": "4aTYn5PvgMVssdYfgkJpjAnwfz2X8Suag55wVctcwyrLXTQr8dQQ93ujnAsQCfQmnChrsMnGT2EAx1uhZokjFQJh",
  "key16": "62Y3zj1MTPXaZfw5MoWoezwD33pHCnz2ChUULo2Aice8HMLS9UUxcEEFjqhCfnRhJmtyk5TcE1ERgyY3VAno5y78",
  "key17": "4UrgteNc7BVkrsr72XULZzaUa9hEb5a5x4tnzF2qc5y1wVV6QkoU1cLP7MWhCJAzZXmLJ1tSv3wKk2yA3rdES1JQ",
  "key18": "5BNS43eatwKEUH7ZEn5vvP1W1wyrXLsRQqjW3uuJFJ6TmHAUJYJiByoiBYd83aVNd5R7H5Zr36cDSAuSJC9WBZsd",
  "key19": "5rkPFdqRVdeXLErLH8N1nd9QxZ3k9oSDzE4mLQXVWyDxmsSPeegVhdGqkphczRg5wDnFZnHkMn5ouCqPsE63X6f2",
  "key20": "35XNo4cF1eqz9ieHDoKphFAUovf2gT28gyE2xsqtAqG6VSh3htsjsrNcornkueZhccCWrNjBNJ45E4qsb9NNhPQV",
  "key21": "39NVoJLf18EqMKzgtNbDLtRjHG5TTNtbgoki8FzPEX8kXYs1LwfQtiwgfcT94mvSB8YevVx8tRhYbr75PNDuCMcy",
  "key22": "32cmL8bHt7YwkGqaB8251u92oQyvBbGxpwNjDacmPhC34dYKRrHVWEZzLfjSnEapWhNcTERnRKMqqmArd3rGLuni",
  "key23": "482FHWRaMtgLayz1GakgF2yi62oBrFqpdKELu8D56ezq64zudmS1tcuY9syXzbspTrEk2hxqgQ6mxH5pUS3Nt8oh",
  "key24": "64TNcTVgTvWPS1QHgH1J8yz4agZcjwmNMUKwWznScqBL6PeuBRc5Z4dmRjYvX3xH6wvG3YKhXy2VKWcFswdftGer",
  "key25": "2F8kk2waaBRhi7EpVwwfxyuve65swoq2TscLNiemG9xWqBN3B1CzU3j3LH7YPEJeqZ8TEGMYvVrW6pUJSpYMsC8b",
  "key26": "3w7SH9e46SmGBBmFJQnENisNBR5JWHuD4NPkp4UNSMuicoqo1Z337rFqZRcDW3yu1cdTyd4nCheqw5YCX6yk481e",
  "key27": "Sf58HDkY5Ee3mwqyXD5WY5bAV3pseniHj5Mxi5dCuLTyWGYoG4pfduwJNDFG6GE1eY2GsdmshZcz7VrdzbqyuZi",
  "key28": "2pk7gGHzT6zz6jC5zJym2cSjFFz4ByKo5HgvgVkmpJntvJnyASxf6eFWwKBQrsEYRjn6YuH4Bw5MWN8ay6U3u6Ke",
  "key29": "5FNrgpiJZjLMUCWNpzEgLYgSUJ71oe5tfHCYnFcHH5vDRtV1MMRWEhFfNnCPZAXTmSzKQ72DqdnFmjXeqCNjTfRA",
  "key30": "2wyPcKJt5u161Syt8uHK8Rj6UKtTLN21FqeuS1TBHkBFcxdmo9rR9jw5f7NzMEwasHxGqSemJqiMtjXMW2vy1EHd",
  "key31": "4n6L2WYXVvD4trSUPMyhwxC9nRy1XybPUy9NdyezDbVdKJNRHTEJxRrY67BGzbK8i3XGPBzCfny71vBmCHfoMCg3",
  "key32": "3RSi1GwvP85gvtrAFBUrnnekMJE2SsTAzf691UB8c6Q2NsEgmurCfUWWSCGCmDJT5tpePEtZVverA5udrUeZyNKS",
  "key33": "4nb4STpXTYrsfQ2ZxBYhpYiARFCdFQAA4WMuCX6P3BMFpDtX6WLwAaimZzJtJJzErHQjAE67VRQHzTYzYYWZg6XH",
  "key34": "5fuU1Jg5jhoB8TLZcPK3BJGqKcPehnqfMDHBiuD2X7EzypBiiiDz2Bdq8ksoKXH7W1zif2NwRyYHgEMkrYSXN4AJ",
  "key35": "XT9QLUEAV8YUnoEAYhcpoJS3a6Bri98P8jo5XgUSF9sSotP1LFWZDtFp8BHdnq93mxDAfe7YrWU8iSJ395gHiHM",
  "key36": "2z5aFdeLLCBzNTqhfRYGGjpApxTcTqwdLPm2XBHKo273pQcLbTMcFNj9nQxu1PSPtvJ7sarBiCxwTj63NFwrNYzC",
  "key37": "5MmxSU99Eu4TUNt3tdcAJRbCYWywQkPe5iuWoGMqrMS2RMaP3MNR1fdr4atc8FBzeUxhPpQjHe1tavrfA84DiYmJ",
  "key38": "4Z29CegXWBhF7wgKLw4VAjyqqEc6BS8EcY3UJakgPVMq1cxkYwz35Tyn53tDvEn1XQ6eECtNWWP9agwdb4qwDYeF",
  "key39": "3byA4mHuShhCgbXPXAZrkyzrcEahB1f8NHr1VogSCCsmTL8Gq9qHXP4dNXr6nXx2C5cXv4cfe8bNDxU2kN5oY1L4"
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
