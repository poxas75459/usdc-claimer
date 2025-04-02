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
    "41981TGMC4JPrtv3Gne6hyyQVpaJhsf3PtZA3sbRYhxzJq87SWWpSTXhNk1BfiVvx5AXKghuQBzXR2cwj6VG6eAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eh6JmAjtnrfpfuaSimMCgNkK5eii4XFSpTr5w3i4CBdukgRgdzczL3ndXVMkPsUxMFn4kfTi5jn8nZ4JSyD3v3m",
  "key1": "5BPkodgGpyDZNbcH37vgVDRBxemUCjhU8r2zy6NvQ5XaE9gamfTVJsRY9MogVXRVdKhTgDUTsSeYQX2N8YzarDVq",
  "key2": "5CCqiz2sJodJHF7g3FEPx78pBfpn9m5jnPDMvWpR2HxcL9G69ubQv9itaPmmC7HkFKF6mQfp7q3TaUDafczHB6Gc",
  "key3": "2Md8Y2xbrGLwvmZWqgHhoKqskHSSwmGt1tzP8XT28m1zu2pkkQWU9V3AJiy6fLMWZMjVDEEBXHtNPAksPaAz2Ezc",
  "key4": "4ZRKNp8EdakczQRJ36dbDXHhNcRiVErSuvgsAPnzc4nB7WywJoL5EPXwprH37FHk3CvEbFPDoyQQyrX5UgKwf2yY",
  "key5": "5yb582hbHjfDQeVu8o6xymCVtfBEGuvhBswVLq7HRdWCHJuCh71S7ixrAf4pcCc1aWtoN6aQJFe9GMyp425ho2Mv",
  "key6": "mRBvMFriiMNaxvFNTYwVGxYji596pRiRMFH9iHwRBM8ztd2EYFoLgdvQVPG66QcqKEsGoPjXdoXPNpWgjnQbpfV",
  "key7": "2p4HngmFiuqriEkAC5sSkDEE7KUUPLpFMYm2DhVZysfjrGzSPeQSqgaupamdzniKz8Tb2XKxGSECYT72gknJkPsa",
  "key8": "tdEd28fxeszcadmJkyv9ikxKCnjhUQ2YPdVuyVde8QujuzeZJKUF7wby7GGEts2dM8Fpd9jdMhNV1b1cXy3DgJ1",
  "key9": "4hJA1M1LSLxyDTDQ76475nWcztV2SP8mMUhHfKfKMZvtBXrvA3NmUWJLvKnc4B7hDPgZc1LbB4KftJyqyLbR14bG",
  "key10": "c4pteaLfZ35oHen4gmSp2NdEM6Ygu63iDHL3hNarKqf9ECdyXAgWAfVGYxracCf9W3kpYhdmE6FSg9JSDabqZnT",
  "key11": "5Bgd1Ai2zjJcnFxsVaozQ72iN4qFK4EycqAdoRPAhudRnLdGKMg28sphkA9NFUL7tJVufxiVZbfcJbguqaWK8Zus",
  "key12": "2qnTzFAcawMB2fq3JNoA5DkSY9ijwrPDkjUotmHAyKAjhWCPjVsGEM2u2F3RMrBYSApAwBvzyYJJWpgSvEb5qZ5h",
  "key13": "5hnRrFVD7EwgLB9ZHwTsKKd3rp26uZ22ZoEwPaChoqroZyo3L5Y3NLkdEC4SHwS7t8sAHzLzQF5qHUDE59iEcDeA",
  "key14": "4occsZS5xtnRnSWSu675uFein5ihLUSiCijFVLHfiaUmNsh67Jy79UMS2Z8aJLmHQmgBEeQPHVvMApFJuitii2dr",
  "key15": "4ZLoRu2aiBF4JoXLYnCmC1DgEsrBDRrxN8F454o3EQavp89jxMbz3SSM2ubegTHPkqJctdinYE4khiB1gu4Keyzn",
  "key16": "5PWdd7nHBKRMXHLsqeNf7PWX87skJTpiGBwkbcnqWFdtnhmpAEAcS9QebHYV4G561oe6ytVNDUNUySaAYetXBYSx",
  "key17": "4QnirL5FrRLrJexvn6iu3fwC18MPp7K3vSnLh6MsSrXPHRRTd8gSVTwvU3scMGR8YBYCTVzExwAYUS41eDX1JZaQ",
  "key18": "27G1FChXVsvZCmxTJ42KQRDdWgYJ9zKrCr687NSpbfrC9HAhGtgFnjSki7vxpGmPLSBeWtHtbA3LAmyRvYTP8QzY",
  "key19": "4qShP6bjZQbVvYM9mnpfuUw7xo7jDg1Qx4o5MAsCs2tNn2Doep15J3AvwZPbJqQktuVCfS1roAg9FRfqs8sPHhKq",
  "key20": "3eLbmbiHysJwLZnHCoD9Kk67kZ4iBe6dHjehyWHx83wdpXbmo2JeRZwZLK7F2sFkpRxNBeZPB4FQ9wnL1yNjP56P",
  "key21": "2bHUZv2K5ds3FZ2SPtgNh1VUz3wa8oMweEKvskDFByShaZoPzmCaEYgRpsDh3SApwjcJ2df7HVUjSqq69rsYhm9X",
  "key22": "5voooaFm37bUTtm4aMYkubseKQ3TFAKcedsrBm6NNJqwQrzR8oqeiC4PAPY2oAPGw5E6TcYSJFm7qmtgSjuwrJf",
  "key23": "61Q1TyufeLzuJez5ubwLSepWc4eFNNRrF33E2F4EF1gNhKj3xV1ryP9w6tTXau9ogCj6XygYzkQPHjJd6xUx7fAR",
  "key24": "2wbBSesGS9r3NLsUHpsre6C2tKZU3jqZf2VPYfffYjwLUXUo65EvKW8pDj892LmPaRdwU9UkZvUCs1tnPmztQixB",
  "key25": "4WLFsg9ZisdTXWyqP7Y8uDr8GwiVYnBxar7mButWDThXXi4vwEMHRyf31fXpxt6ShXLVzc8626BaeREX1ueQWNE6",
  "key26": "4tDepoxyd7sHVtL3zLbaLLWGEpMSa7YxxWooauWJZ9s1sCr2vn7gDdFtgpFRoghpRsz8V61h8TkqLqqj416gCagX",
  "key27": "2G7CVu4Vj79jhpn48TCUNAUzc2weNpGac6n3CgDrDxoDZTYuWFu9c4FYfd3npcjaDDfYsDiDxaqSX73FzAmFBhbj",
  "key28": "4MbVEJhk8XEif9uoNs6govjwFazaUxFLWz9DK2LFpyQ21Q19iyk9fBkvDpCrHooQWAggZd34yg5pTZ5FeHv94dg",
  "key29": "5xFhmiuqAUEHgoaT5xE4rBk9nmKKGrMgEta34AYSiRvgjg4mBReq5QGJCErnomuk1SqpxjACZYLm4f3VpTks3Qqu",
  "key30": "5ppvYjZvn2FriHTTJcx46ZwErH2o3vyXbU1sswXBUvUhiTBUJLqMgqAdPfj1xoSzvC3xgHytX3zn9qRAqZeVYf2U",
  "key31": "63AqfCPJxYHb2Sa1ercPqBHLJqkXnVE76X9XxnDqJWrtXSik3KzjLJmVRmb1wFqkXAYsYSvLRDns4xP6mvW1Ecyc",
  "key32": "kigFSv1KDrHeXxabdbFMZ9i3YM484Eo4YH7kaT6Uw1F4asjpVEatxumSLY3hS6dyGVkjbTi2TtDmPJkfayDskzb",
  "key33": "2XgVnA2P2MqdpwKTDXiJFwSxQHCG4J2jeTXqkRcqjhB4Hg5s3uphVBbMdzxHWGA44Zzyxo5D5VVPi9QpiXxqDuMS",
  "key34": "4UXo65s5btGWarozhu1EooHJaME7S52iGKYCX4r6ghfHqmBVRPTQYWSR2BKTUXHwKJ1wFq4JnaSEpT2iXz7w9c62",
  "key35": "3mU7BzqXw3JqY6kQnVBmTjmuuxvEKYJYi7C9LWAMxcwVf1Cg8guq7Ksj2m9kGJz7cyLBdkecxEu7ro35KVytDy9L",
  "key36": "39FsRqXrZd2fSyR2jJyFBc3j21vBdjSwNaMaZ7ktGpR6Uxny7Nqx84qiGoT6nUCpQnD9xVJUaXDQ2g96vgHXe8hG",
  "key37": "2aSHChZk1ojj5rMxD5BHnPA7diSDf8F6VMnTwYDoqWKLSmMdczGdBh35ywntf8qQhYEjGdhvvHFzo89YVCbPa8sC",
  "key38": "2vkxLgCMXMWy4pabpM8vM6kpuQnMPrEptt1RFRZ2NfjptL85CL13iv39LedQGKFN9XAEzPhkRHkhYGXviJvU2hXg",
  "key39": "63dAc5qwBdM7zEWH3SJHshBqqscSKXSqWhJvNuDCMSDvhYU9NeCzKbeaJN9jagmur1ZRrxzAzYVwbJsMWarknGBm",
  "key40": "2niLZ7mYgGsGnGgr1MAsKms1Z9WHAQPW1ji6oWsHikqQB1aKgMx4QtVh83LQJEqdAHuUhzsxShuRcXMcFx31VGZn",
  "key41": "1J1nRtmpsfpeDhQ8ncDV6WHEV41kWNYRYR1hJUubia6P4HCXLYXkvRxL9wvqXrar3ns5n8qhVuQWbbTYhaRsZXo",
  "key42": "5gY3ZMguKRoccGbnUKsoVEbPsmNFqDzTZn42i2Ftj63re8hsy9NaeNW2N1FZM3LG1wbo9DpwZwoXWpC3FfqCwy8e",
  "key43": "62kqBtgEt2LTWvLQQMkUyGsjg6ZPWpwjceQv1aeakF8pNYo5sXAvS2L1oBnnSfdyKGDD2ucK4tmhptzRXQnJGAV9",
  "key44": "2koVYYFvcAMxr6Cy4Ls3qh4osnxPLCi1uaguVAoqEccYp2L7hYDkqEvdDt5SVk88Mkdco3nSDPDiLYp5WVwgGmVY",
  "key45": "3hJEfuHMV2AxKu9zHgwZ7pPU2Nk4i82WbrQ5H7z7XcjQah2xP1z1FnAaz8wjJd1ijysnhZEh3h2ai3fMRBWCTztA",
  "key46": "4qgEHseyrYEE7BscFdkJioRsLAs1QFJ6toapj7wUsHJLXxRUT2618KdrNqKWT93fox41JaE33J9PyCdEMmCXRSBg",
  "key47": "2hPuqCGiurfafc8PRoEJkPNeSaE7o79HvurYSqrdRUaxHm3QqYPRuNvjJm9YjF38nsjhV5axvv32KADRjPdRS8xh"
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
