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
    "4r4o4xfzzTaY2AvKxbVFDcdnxKFScrFZConKv4TtLmMpjEFwA1kbETtqcKCDgaJAhJPPtGw7Tk15Vsk6V3Unbh2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qj1vFBWcK5eaeYcHnhTtQmf8zejERQu1UBKU6PZ32foML29ZMLt8wiPdHegng4JnvcNUDRqt7hbhHEnXtpLELp7",
  "key1": "2zfyAMPk5VZRVL5JuryaSGU2kf7ECVtv3LieJTcxiUNQm2HgwRLhfGsGytvUzr9VyiA2Aohs99vpsQLUHSrvSW72",
  "key2": "3Ky3r7zoA33cmVxdXscPFUCTJJbFfnCetFWd9U1SeMYpijM173cToE64GnXLcBhiaJTZow5y5rbf5cAtzoRNpYZB",
  "key3": "5Ss7p3kQJtciwkEB5hm9pwGmVeGX8XH2iHjQ2oaAZQfGwFtemS5V8rTwkHjytnXg5sZ82Kow6NXT581n9mQjq3bi",
  "key4": "5xNYr8XGMkGds4f9mCcSroHbCwmtC8BaWPFsLYJp8RqH2rYtGcezvxVNeSfJC727t6j3odnT4KHaZRKakoJ6hKKn",
  "key5": "3M8yXmBS3jpJfXMDM4G3domqezEvhw6bduURnQc5SUPcwnH5Mtp9mxDvi1xoCNzJvjeE75MavUdwTUKtKNXQ6oX7",
  "key6": "5oCr7SuTUjyhH49Wj4cU1wuPgFNcSoe8qqfPiHU2yqLAt49JV8YEyHCTwQJTX7FapNS13PkrQ24tK8iRkbuh6SW",
  "key7": "3zahsqFfxoha71cAZYQEkxKEGtaqWdn7gt4ap3RaBdPiQtCRWC5HugfPwNSuy1gBZtis17sDWSELYYoYMGHTukvd",
  "key8": "xAJStxMwb6oSQ2RjsApfJyuQiZxNravQxPKrH7zB1jQFiuGErtpZg1fhGRgsLW9bbAAHZiwsS3mLkBF831xsETt",
  "key9": "5S5Sy2s5b9DrP7hXMEtPiofbxVNtmRRL94MaAghPLdpqxAFDQFJx31hnyYCmnwtv579TnghYCf5BmGrhcsXjL5gZ",
  "key10": "3d69CWZr43d6o383gocPqAmrbk6tUuNC1rFA7QvKvvvLMng2vWHq231Q8bvktMKWPu9N5TQZbiGRUM7NUSsxB2m6",
  "key11": "52z8joo2u2m611YmvbZTsdNgXNPTZn3c9nFRAr7p5n1hPsraS2LXTiMcfEBWnuuguk8GXyE5xHmwDUWyS7eb5yL9",
  "key12": "YSTLkBrciT9EJJ3ruQygAF7VW3XEnRTmmYdzh5YzxFgXddVCyRMsP9WUUbpfmhepGfYD7r43KPMwdibaujz1bdx",
  "key13": "2McAx248K6XMv34tbTuAMVr2ZjpEW9UTYwkyhKqFK2H3kL4dPmcVqYe9JidiaUk1qvgNaXxmS5iuj4QreXc8jjhP",
  "key14": "4tAieXxWjFUmwuQzaxtxFTUAcZnUKwX867h2R3jDtWFRCVk4yiKZUyVjLqSQHM7fjwkxdgTwAeZURaTF3XEQNGpM",
  "key15": "3pUfn4Df6dnF2uiB5fydnmFtSd1ifhBU7bN5qvacYPrLNaRJTGqB3NK5hFGPsT5ZpJRKRonyyuYnZB4mLVK8rmRu",
  "key16": "3yxP5W4XuVFft8D6hpeA5ASao8shq42faDtnyEME6GgTvcQAsxx5eQtvj4fkw3G88V2TWXczZnoUq7pq5NUkLRN3",
  "key17": "47U2PtXJGdiMCbRLB7nb5BCLH6EvjdydefSm56N31FN39uH85ztMtcY2Sa1cVoRSdNLiKS2dGPMefaEA3xFy8wZy",
  "key18": "2HaRrCDfe23A8sF6NxMghJTgHwMpRANVtU4MCnW6HRRLh5aHWuApHZi6GWcPsD7c3zNuSQ94A2X2uBdYeXwWq5WM",
  "key19": "4Zb5vHssJw6bw2E5C1fq2PSXC5mmvr4x9cEJEfLu5prFvg374DQN9mJBGL8CRHqrFBhtmkxG1gjaTrFyUKLELTm9",
  "key20": "5ma72VcSVLwG631G7xqVMyamNDwZTfjK1SWz3emcNeW82jmmWCPAWfNcRGpWNCCvf8jP4LVHx1rcC2WhSwqQSNuV",
  "key21": "5oLULp52Ctqahja93kyy5uSy4LpGHxg7u9KXttM3bkfkvZaqQCWLwpsRFBChVLNhYnDasLrsyafzfEyiYofFMEcy",
  "key22": "42maYwWx6yRd4gwFH4oxADnc6sb612QiwzpQnFY9NxhQmJ6b6cG5imWP7vtzCqkwJAyws9oQnYcyuyrKvqccnXKx",
  "key23": "5rV9PT74pBGEt8qfqRVozSm6za61ja3BzbUubFbbWXm1wCn37F4FcEd3aUmw1JmBTkdKPrsmVxgM7z62pcfpUWww",
  "key24": "wnzka2a9ka73d9cnZ2QnPuim9aB6cKKb2r1FKemcGBtccUFL7GH71ZRkdnJX5hLJjyeYPcMnZkiLp2irGdyrnt6",
  "key25": "4tWQVdxNpAnbdUBHhU1hCcZQYK3gp1fmatZN5uZNFui9MLPWAoTVvaMjTb7caiXsCfXYossxapH966JGzsnX2hps",
  "key26": "qFChcV6bZgjrjjTE2VJBVerJnBLn6n5cvYXmNrhCv6XESv56wN2gA4FB7q7oCPFYsrDdToW59NobCsQZG85q5cL",
  "key27": "MCm6sJrEWYUMEG3krHCeGc4V5P3SYcxxgotPDNbTzENA1gTxrdF7g3YvfFYZoBiad1G8uX3mMzAKkU7HyAC9xQi",
  "key28": "4TT3SfrKXqARJA2YEfC1DJNKmziX5kdHP26yCXp38WyxMYQwoVX7U4fhCSDMn2aNf4H46FoZugDdw8tjrRKUgkuU",
  "key29": "36mfhSFcupbyHudRnAbZBiGEy4LtDQ69ujVkm1pR7W3iWhhMVcJejhZWU3chjiQssfrkdg7LW3zubiRWMUJfC5MB",
  "key30": "23vZiSyeH4YsoT9NUv2aH3kWHdNxSDhDZmJmc8VZjrqqKdhzZRCEGMKC93f63E6gA3i7o7uhCMBrSqjpJe9WbgNZ",
  "key31": "5bxrkPwSmDEG4PRt8X9abRx3QG49puK8xBM8fViftEhEiyozvg1mHsmFi5W9N2AB9Xy4XroXcK41BkEdGsQ4UT8T",
  "key32": "3iJ2NzaywSX3Ax3zSPAWduY25MnHnDLYqvzcySDkfAuBDefc2EaLjUnbMyw7D3H7o593zPE4p4rHFNFGtgsGN9hy",
  "key33": "4MYJyuvtTZQrdkVCfrqaiFK95UJSM9Pe8Fd4MS4xDknedMLv5sCUskjSr4LnRcBu7tfqkDyZbWyZrNjKWkG9Vwjp",
  "key34": "2nEsdFP3e7Kq5zTnneVUB8qosM5XbmBg2N6mc5H4FmaPnrQJNtWRdjEM5jjj8AD2C6yVS6xcK68i9PC7isLQomd3",
  "key35": "4e5nNbxyiYyUnvcDx683J7zzyBNr2anX56QwrDqumzLJkwauYftrVTJeYNSqFGxvuW8tJeZC5qJW4CNDba2mXLaL"
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
