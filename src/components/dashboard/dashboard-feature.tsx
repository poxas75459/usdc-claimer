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
    "s2chLoLabY3vbCswemcvXrL5qfB3Gdc8VxyBePHTfsL1Q8GtvY8Sud7vCHfmaUKQYFhocyHYKWpqpB5dKCEMdfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2fGSG8M9HPCt82j5cX9Eqcbi7kC3xvRPs3B7tkyXLwZEimAKFJP23oBrFqeWXsBDxssNAWs1mHDRqAiYi2Ccrg",
  "key1": "2i1KSCR8yfEtCqY3MTWhRWwYrDwVzuVqD1YpcwWvSKVMjRj5krGWkZs7r6PSWVYVCNh2E9RpD12A31W26VLDzxjf",
  "key2": "2Q3gGuiD1GsfEKvC7i6YbD8djbWYboFgAEA7eTtL4e1BbLBPbzed7sSSR7xgqPNaiMcNS7eKY8CCdzEYQUWciuNv",
  "key3": "yLPdbYd4evqafKrsHvGQ5PJBJ6t3pQhiHJx1UbQepXnaUfAuYJhbZSvcyVjGSpNKkWrug6WTsiccZvzFryxwW7S",
  "key4": "WBKQ7XE5EcFarVhh7VXrLLtQ5DoKPBSYTMcTHNGZbwezyq6WqcjPPV1KMEFEoe6PshrPWKXBBXZTkpLijfCwBT4",
  "key5": "51FfzrEEZ7cTRHCdMDHESqSHJQfsZW1NcUQPbpjQP48xuKxvR6MBEFUjuwaLQw9tPhYCSeNggFKDTxPhggCdY2p2",
  "key6": "2bF42Wb4Rx4XTEBFvX42SHCfvLjySebVqE1r6AWiF7iYsAKwJiTpCGDnMZaH1QYEKs5hcvcYLvBD41sZQS1XpxBL",
  "key7": "4o7k4qBYKB6r5Bfi77mrbQEnnf7Y7QLr88vXgFqZpqWS4LnXu8QEwcv98dhAHPGou58UuKUZ6VP2tYzCHfoLdq8G",
  "key8": "5vzNZ5CB1gCusWXbW3wJS1rXjcHfcn1wJhmLgC35AcNNfqp8d6K57xRiBykcy3eRNAuWPqTpsRyWp2Y9jWMcmR9w",
  "key9": "2RGJvzCNEtE4BX4yTBPWZSTkFGxmC1vuxVE9BgXjYnLkvesTF8zGSofkmhxTv2mA6R6Wj14zHNFCR3PuAcUzcWwk",
  "key10": "45sxxBkKEFty75gsfteQVKApwdmirLAXGkTa9n6263ijwE4heTDxZTxEJTkitgQyKeVYjb8RRLNn6t3GzTi34LM2",
  "key11": "3eMDp5xXr3Z9E7f6HN55JcUZSZyNvA9RRrrGeNBtJfkgo9SB7s3iZc4QsUHL8hFGSvEx1ZFa3jVEcGpt8j7G7Aa",
  "key12": "379uicTuRVKpoW5bwGoiVwMQazFBXNoE3UXHbP6ai4n3ebJ5gKgBXaMkCPsAbu5AQWXa4fjCVZ3cD8VL6EVudNhj",
  "key13": "3wkra8V3UMe2njvEHxuboUV4qXfeTHFE9XT8dgWzj3NALk1BZiM78KvPmXWhrXzYzMyUzSduFsZxAvRDzFCrUGui",
  "key14": "2ikKKiP33wydZ6oCnbdaxps1KrGaDSxmDHPeccFQjByUjK5AtJSM6HfzQZvonPSjqFPJGnJi3vwmPDGZdj38qLH4",
  "key15": "aYhHCin9tYZnxxhSa3WgG7Kc28bQZX3un3SZNYu1VerQHXfxkyKSVS1VHN79kDvnp8ZkafqDMARJAVmeUq6qhqm",
  "key16": "tZCvm8gVANNHW2XzGJh4sDjBnkVT8kA1GUZoh6UEZCHkYrLcrrJufW1sXywVhCMJUbSGwWzXQbEDf4bThVzeD7f",
  "key17": "T7FhkGALNLiaV2jAAth3NbxfDUkNsyoBj4fX3fxoGQYSY2J7gMyqShLpz7aUM4V7dt5PPJHvp48YRUH3UPuNca7",
  "key18": "2kTu7EEhW3SHNsTBCvGp9jmR6VhiSK57feTM4LiWMBzixoBWQbLcJxfgaEHa231SNjbAYGBrRmwaWZwH55T3s3bw",
  "key19": "2vFb6WuRiA9wiKevbwTPwmuwbaTtL72dzT5N83AVUPRCwCu62tGR4NXsVYZmnU9ahQYys9oHL8gCm15CfNebyP1x",
  "key20": "4WidKNynuN8qA4DBCBaDDU8cupVeRQV2ovuNMt8mKtqHxW7FSB4bb83kqb4SCTX9h3G1KKYQBrN93qc6ZZjL9qSh",
  "key21": "5cDRh9adJyaa2SwpftcpJvnTyAq3iKjedSN4fGwQqjWKN925ocNcKsDNQ5MhXDiJoFaXDmAzzgCqWg5uockgz4to",
  "key22": "V3jgXVPaTGqiDEEDxvBuYMckWqLVk1D4VUSXSpoW56NUBSyoTTNshuxxDZEW2vk1aBNyosBAPpEvu6vwTHNxqie",
  "key23": "2WkduEFRKZahTfNXEzTwrFtv7xCGmN1V9aAo71CS8NsUeGZsCGZHyZZG22MVniDQTgSFVMQZoJPThMocSW6an8Y8",
  "key24": "r4vxBeGdPPjtJzvWV6V9GBFewK46QdsMgM8AKLDcAKAnwe17nXB5Y9tTb2nspmhpVR9PjHRPQv425EGh3fmUdZy",
  "key25": "3CRiR9dJRLpKTXShxrdmu2doy3ueVSUFAXC2SV9F4UN482SomSS4dqBrrgUxgW867fgLaygJsd3Zov8nYiEoeyMK",
  "key26": "4xknSWYXkchrGzoA5eTVgAvrQ3G32FrovhKtxqpsZdDSLfAEoBKYqbmJ7w17bEb78UBYodnektnPnk9DUirTGPHo",
  "key27": "61eUmNjMKsq5MFMyA6gjLi8o7YCiQ42aJHRhvX4GgqVaXJXy1weKSm1EG9ohjuhphosmvP9WKgzVM2VLctFkvt9d",
  "key28": "34qQEEe87jjDWFoBVYEdyKt1qqbEDBQPMJdfqVwZBpFDAAGU142hWssyatWPPQCEiSLcGn1ANCxYPDKjxtBzzxP",
  "key29": "4qeWbzpP9gtcHvkSga7wvu4mWPikds6wu8FKSqLxksjHzksEYeNgdHgKk7SNhjYGgB4fzB9VHdSVBesJhgzLdFMA",
  "key30": "4A5DasVzFViFpdQ1KMfvP6Xix2xcH2Ka3CCbUh5AeHMCikkzVYYNas1FYb15fftvpvkwdEtkCnYqHfhcE3v1zWQX",
  "key31": "occFVQ4yFSzsZY6LYR6sbzBnfBcSskkt7wWvhLJG9cNX88UVo1gskg8CW3KbZSFXtQkeEw9BP6fGfSeoF7Q5R5X",
  "key32": "3K8qD2ii2DmUxHjmxfxEPKJU7xMUFvDUgC7qSLRpxDthVdVdiBHkFSba4o24LaigQrsTcNAZfTE4Rsqx8mXyNef8",
  "key33": "27inqQbGKFBeuq1hmabA3xsNiy4D24CYiFP5NVgcQBGpU1hMF1vbuUfPqkhaWUpZYFBCp8axRNHSLNLQwbES5d1u",
  "key34": "34CPiaWW7u17gVYdTP4E5bfgvgSNA4sSdMP5qqBDiPBHy648tDRjXmXa8xn8GvzsPiGr4FFo9rNeE42eD1CP1ivG",
  "key35": "3cf9Y2FKmgaap3XXtspJ5Yf9Drjf9bszaZEn25FV9EFF2Eynzd9dj4zXA9aGX7KdfvvQZJVDEhFTT9mQdQvaaQzs",
  "key36": "3TVRtR8aG8Cx6RELNPb8tArsCoHdAUcavw5sa17MohNHKKtTkayUBAFYivhpxdd7AHkQe5jz8ijFGHLJwx97pkVY",
  "key37": "2U69k1djvxb8Ap3JHkisLGPMcCSE5tnst51TrQRp48tJz8BA9CU5pMuzDpPrXNm8ateRpg1iamLuEAZb4cYaRhau",
  "key38": "4fMbfAadGf7bvuqK7J5AxYGfWApvz2GbrNQkASaLe42b4pWcgJ8Hoj44dbATiSzRwaBAKoCVQHWWcpbpeC57MYig",
  "key39": "2aPhGcr8NLihrbccZdeuhAwoTapuEZqb3m63zrywmc56jHhvmnMHQZd4LrtgPKMVDDHaXaBzcCLXSTw8fDmddaRy",
  "key40": "5Zgoyia3mG7AVa46MT9umwbCv5ch5dgiDbBidiTEFdvy62EnqpQfCsjYAbfuf6dkQUorLjdZr6oEYE9vMGeiAZK6",
  "key41": "61G5qw1Jx44F6VQeLCoc2KyjhyaR8KVoxeTsP9MQP7xgeYK69cn65EtPcWVDoq1Aabscg7tSfdFYaSf3Gfdwpm3A",
  "key42": "2rNeZX6KTxGXVbrTf7Ln4RJXy7T5qRwJkooPRVAtCgCCQDBTpnsFhLhmTWJdU6utBK7RCnhSGdFtA6PYj3MANJGM",
  "key43": "53w9iY6E5s5YUnS5MA19UHFXYGa22pza8PQs7KgKHcD7HysAg9GQLHd8Hsi7ATaAyxQRuJ8iCchbmGaZ3uXsphDU",
  "key44": "41855YzvpDDpdSLUHEfLGMpjmLtjxzTgCtwmUQY7AkNMGNXrRBcccpAjbwWCtGr4nzVji3Qbw7QCp5aLt9ccym41",
  "key45": "42BGDC5sSK14kn7vBZiuqYLUosK9Jj8FBMttcgWDP2RkD3kJfvCX1a4NkrdP151Li6f94QVyHPemLwtpQ5tESWUq",
  "key46": "4z8MEk3suZ2ntraMQDXgXbTTPx4v5JvNkArq142rwMzuLRusAj1b3nHMM8ryyFWKeoAT6LmEmnPTE1qbBn6n78Vv",
  "key47": "5ZUEWCnw8LRJ8iZrSizttmPHrz9qrCTYt5Pt8wbU3hnGJorrodRfypwQMtXjD936c3VxwxURDQwGZid48FK8W5XH",
  "key48": "5oq3bcctFhw71AqZmxrtM5gZNCxg4ULSoHbGeRTdmUqU3QSsEDu6jYL8HLfeQWAMCziQ8nDYbMz4ZtDEiU6EWQE1",
  "key49": "24sijjw7QWrYKUPAazHZ2J3kLdtG34cPn7J8wo4wneLSyMqPzyg3GCqpEVUeHVvRAqjp5UHvGhHgPKe1StQBNcGA"
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
