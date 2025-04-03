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
    "41VwYASyZcNDrFu2WHxfiHJEwLbkJNbnSqsY9sBUCvS98TACXWcSeh7eHrgv1y2kRE9zfh3GmzcxukCJwAnswKZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmKeB9qqRaTK9mJ6Gtnk59xXM7wzu1qhVjaQcZ94truGfVijXUa6HULFzeHWyupRjRSYMKpa4UmsNjrA4LH2MDG",
  "key1": "48SGssa7GkcdwFouNXkh3UvZcHmtNczz1y1fCvwASHiKWicms4SH1i3Dgq1vSsF9ETQJAUM9ZfzyCjNWPTmeMx8o",
  "key2": "4XxJxYt2TCtdFLSuuf9jSUEzeb221mDBg7eP5Y2mtLTd2aJxUxbMrQai2YxkiMGC3SgMs1HzGrf2YHmowfb6a2Sk",
  "key3": "5aXaNEpBwmpKL5EPq3H8mAergz7b7aQtotvGtEZLEouxCfmbq7wYmkwNeMqGULnygVBzwLMeSrbv8cNZ6EEV79UF",
  "key4": "2H4fsvKyakqY82kSU51ihazXFVMvtBz3CyseAN6uvW8c3KiA4BkgWkQGF3LMEdPPwToArmfruwaRvDm7ewzsz6qM",
  "key5": "2spbuAxveqr9oUKmv6FhQ8SXWKezQ1F3TvCx3ZjCH7N79sniNVZosMwgxwpQ8yVmp9EYA56TFYhgE5Rk2rRaw4rM",
  "key6": "5P5xXwVtVtT4oPccDQX82WRdCW6GQKaxoDKMk5irZ7P4pm5XfnQm1KF8mpjs86GzXdi4dsfVT85vKz3zZEMkkZhV",
  "key7": "3xhVnGa6sNX34G2sG4NqGNKRxPWdA4EvQm9zcF35QzrYd6pLdKjPPnf9YAZpcFSDs3qqS3oAEuBcgcZtr2APK5mJ",
  "key8": "34UZFE24FFxrpWVFLq3wyBK1GUWnP9fUoPfFQQGvpr9jKY14PHJpjmgxMwNPrwvQQtCmB3LY5X3h4Pr2FD6gaQNk",
  "key9": "3hQux1Qw9wxJQHwtwrn15epxctzZ6nSuDJDwfe2PvTPjFhCGSsLUaGP7uLgHz3a3AoEMREqb9aMKEmjirbsP6zXh",
  "key10": "36TnBFobcsmWhv5iYXsU3j6VnrGTmBKtFn4vJGpWn1xccn4JR6wpSAnsizYFLYNVbuCvXg5iWx6M8vJWZQvbaC2m",
  "key11": "5RdkCKyvYGdTLQqZn7U5ts73WAzKhGKjFKGbpRzXvCPTWxD4hbsvXiGAbVjV458ePiyrNdX9xEaGWL4qszvtyLJW",
  "key12": "4WEhiAtXf7t2BNyxGKS272HSis65quhfyNTxaWyFWBDkbDhzabkDYGUn7CbeJXKVW4WszUVmQgG88ePPYjJwWsyc",
  "key13": "56uHfcErhNL6jQ6PpJHZDsp44XZNJmPKzWSvKMQXktSWGFtpbiRXrChrGnWiGtFzB8YoERhnTbiBfUBJodVVUjD5",
  "key14": "2k7H9M9duRmpUH8EcUG6iEkuMqiaBGdw7i3qz3EvX25e445JQzgyP8MjND8UtUtWEux9okbKERSat3ua3bdPAWeu",
  "key15": "3ePrz9YDbLgUGxMXh4MVoNExZXAhtMS2dRyEXB1aJHpVLtnBWe5r7frWUAzHuHDAczt3HxQM7eDhrfGkFS8byGqa",
  "key16": "61W3aj4MwaE9aQJWvuGTZfXqBdDS7yHfTK7oYcWLd53GCJXF3qwFKhbaTQLWtDetGuYdPVQyLE58FZ7QWSWYwFr6",
  "key17": "5dnGeXo4vHQT5ytrBAHHH1XmJzKiGLPGRB8KCBQX1qafSzcmwJWNA4DVv9TyJahcD2LuitTTmsTUMRHMz5GTzzFG",
  "key18": "31MBVY2pci8fkpqrxEBgoPxxefmgnudkrz5rHXf3rMjhEiXqqyJ47ypBd79fRUxJ25Lz4UbmMBnv96hEWg6KQTh9",
  "key19": "4DoKZqhKcWC8tYcaE3Y66hPLCq16BJepJQuqks79PqCvFR6VfWU8w7EACyp22PVRQvB867aEnJwp3DS3n6ZLSpdM",
  "key20": "33ug44aofQ8gLJ5S5kD6DH4koshhPE7M1F5GjXkmrvCeUuu6BiVopSt69pnsqFqdYWXuBTD4AExz8SntnNGppJMY",
  "key21": "UedkpVMUgrSGdw29gb17u5cWCF1RnNc7PWdtB9BRd4fQyMSPSzqUmLjvLDJDpqq1X5dLr375x3wo2VSVqXMFNPx",
  "key22": "VwCwEzcYtCQ24pats6HDQZhsrrQUWuE9vEKbb99mGkUDr9iFkWG4N9bDuhvdCGxpb4K9PDewnufwHE3fE15rRRo",
  "key23": "5yxE2mpLcg9zBjnP2avWSMtWaagcL8PJh5rK7jtadWvMXocrXYNPNQkUwm4XugkMXNMw48qCnP5dr5CuctuVwmqv",
  "key24": "3BFnbAmuzyWzB79Jwvq29qaYDgE2TYUSN4QcegJxHhePAvWrHjmcJLLdKaBeRP5M7suNW6FrUjvjQr1oRCPMTEUw",
  "key25": "mmtQZyau8dECxZAyo6abw65cvykGLaH391EbRcfS8x9xG77DFUBSxS3UP6EaaThsqY5J5dB38WGkjZM4cVHvCkQ",
  "key26": "iJnYq5s7U1yveQGuNDhU5JuZNU9mS1bv4nQ2ZU4Hbu5mU2RktsYRXZsAavxVqz4Tpue9j7efB4kKro4AowKfTUq",
  "key27": "3TvwrvomDQwYthWWbSFhWT4JhRoELhLRgiPFJriGbyDaAjmhz5dhMTFGYue9GCr2sMUvFkcA9FebgSLDjxUWvPcX",
  "key28": "3Bqs1RBYTidU7kvkGdUjbc1GV4oPgVf3xkwGneSfwF2qcMggG7Tn1ihwmTDVczRfLcRPaz4HNQQ7GimmhNF2BMki",
  "key29": "62fCG57QPorr9EutK2Zd2V5ym9XwyyH2kyBTZXTxzSqRgS8NyxcVMuPrmEMUBajJZS9cGB8Dcy3hi15xtMCRyMRi",
  "key30": "53uXqpehyoUePdY4QkVv4CGk2MuKwz29ji34GMB7EQryWa8mxbtjvnWCyGnkoGgV18mwMkv4GbHYgqqYg8DNXBAa",
  "key31": "3g1JwmEG5d531aHPm3XqwQY2WxnxrmFVCwePybg2HLDsj4MaHupy52UgYw5y469FoWRcEUAJX1tJGHq7VssaqnbA",
  "key32": "3ohQqZTx5Tw5EEbcGcjhsEyyGGyMrozk16EhEJ1bMMNN1VKsaA2bMxL2CUGCp5iffxN6t12ThaTD9LHYU62q8Epb",
  "key33": "5dBSx11MzKVRxbFSFEE94heRTn6RJuQakWFiqVpFdUXirSzMRxEf1bBcTRbNEJSWXhK8degrNvioAMWdM7fvmPQE",
  "key34": "4PLnHTaVQaRhZ9c8UeqfgXDCALKMo9MzNEZ1isjyAe8E66bzgrUtfBMK2ANdHeZpLqQkidVRMRY8jEts7q244wEU",
  "key35": "2DpzD5eNjQ8aE4FcTfcbkjK5QbstNSbwakgzrex3kEPRfbAtv8aMyNiJcHg8mfWptitDJz5uB98G19kx19NDUANG",
  "key36": "5uBcmkyVETVVL3BaPKLpBeWFZm5qRD52j4EcYVTniYeADVWGWYjK9dinEXdYWjiKzMGWjmNLahtip15VoGq35dy7",
  "key37": "59mqNLMnNBwZMR2aUEen5iUS6P9LfpGT6DBnBq5qr5pkm4FCaqmmwNb6uFd2rzR7mwpPqYcqVNkcUrhj7cCMra5B",
  "key38": "2YQtW6H3rQnccVPipZ6RZyK4mhE3SzpvpP3CiYeNmSg57ZRWSmhWNSu6eUZWT4gLr1oLU8ZqGzCgD1xnn8LbhiNM",
  "key39": "4mCFPbRpCZU471Sz1eTrKb2yQuP7g95tTjKQ1Zn94k5E13QEDAwmwUrpnifAd223QMUVMA3XreyS2AdzqhJ1vDgQ"
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
