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
    "4zyiEEsPrSGsKP9ytHWUpFqBSTVfMqdvRu5bNhjFbn7LsY9ksCgxZW1a6VwWfxaiRQCwVBhQAa8MXVVFL4UaGV6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S55bMoXvX1ayXjfAP4L5fyguyv8btMMdK87rxzvBHqr2b6db7yYtP1vXaUriRq7PSXoXiL4xeKTikn4RMd8Fmpr",
  "key1": "3s8tWpyz1yvoPaLwLF6CmUTYt9rcya5iUc7huFpVSnFi8yA8BsskYWqWoKu8sJdoCsq8KJzDM7SwQUL3v2Xb1mb8",
  "key2": "3kkPDxqemUXVrGasbD3sKbVqQYgg2kwhthzguMokuR8MXNhoB6eiwmhghzCVDnX1AnbuJAJmZPcVokkzeae4AdRe",
  "key3": "5E87SL8VRCJATW9eAD7m5fofAdCeykGyMezSfcVuVnxqGCHzTk48SQ5YdJdCsAbE5SbaMvaPsa3EWmtmJaaYgLbA",
  "key4": "5UWhJ2Qu8NHnT4BjFAS8nt2YRYeCBfWBTVCNDN7dErdsuZHR6b7VybhPKQCaCN86wwGcNrBjqMP4qLS54WSRJiRR",
  "key5": "59PuXAupKMzBdz2CvTxP4zpCx38ypLaBFNjxxo3LbDyS9ByeTHTzcfJ5qwH6nqYYXj1hQcVxwvSArFJnfLvjoAYx",
  "key6": "218on544CiZsrZKyJU4da7kjL8kPzXVWmfahw3fUtDcXXFtaZ6m34v5kaoGC8cEwzkXj3gbPeJn556mS4ddc7T5T",
  "key7": "3dWrtxuZZe6Mjyvmo76CkTFkgcwsubK48cTF8G7ujh6XRoxyfWHTJH6nBp9GTSLa3mwNQwbrVpXCYgBGGxmvTNtr",
  "key8": "55gMhn1pr33BsXoA7rnXknprCcuCysP4HPuwGmsM8Jk9f8pHP3er1N82DuBuDYtFcJ9QgbKehxzURUJn3J7uXGc6",
  "key9": "47ScrY3EfV7D4tkB8jug7QQxAUxnegA2x2moa2qd61BxZyT6MDYwUUnPkXKTcgUeCsi2ErVoNhhcByabEVGN8Mx9",
  "key10": "5Fpc2fyGryyjrSrgNsEitULjn6uUqMarnQr1AN1UkncK6r6iBiFDH34v8tfKT1ArqbNwx6kfxtHrDZZWPRq7gymi",
  "key11": "5i9d4eb5uJgVoSsbJ1jBrsQDXNggV5biQcrK11uVNcCdZhdmy3wScVkxuoQSFffpsnkc9QwmcimgsUkrXPmxnMoV",
  "key12": "676tgiPffWiWwR8omuWg8C466FCEQSuGSVrmp1T71kGwCcBtPbpcgUNiNqbq3k4KwKXxKeKJjBN3GLJy5Xg7LWBg",
  "key13": "2WpnjvDWqqADSnrvJpALj3myB54CUm8B1iPtq3rDEzrvRu9W59xk1E6NuVsTxTyA3tpn5jqRbJPeYNtEUfojTcvM",
  "key14": "21jwrcsTUbzQ5JCvRXTsqG8EBb2H2TjA8nZhAr5dePixqLDFTjf1ezmN36wT3rbajJw6oL8EsZKXYxcY1xE21HrD",
  "key15": "2EyAqLsJBZ5oew5eF9V7EAHrCPn7DQSuh2mVBjXyRr8eddPA8bFYk7JDP5eMUQgcg8dSvJSCvhZHqzpPvXzHnk9",
  "key16": "2XNx478wbNve4bcHqnkg8pyG7bDDCiLLoro5RJTfnEyLRAAtCudAP5oHVcLdEyuN9Ri4dVJ8qX2E79nTvPkXgsQN",
  "key17": "4bGLNcuPyfTkbN53YzahZhJK2Crr4KsBuLjpoALFBCrcdVt9Ug1gHxMAHDF31ifxNCYCovzEKPR8w1ptfrfpzaUK",
  "key18": "2RhzMRdYBEy5jtb3fRPWSsGcsdzUX6cdrGZPgo1kXcbUEuecSDuhbjdPopXoHc8UTF6QyFq9JiBnW5aYUjo73zaS",
  "key19": "3iL4DSYRyczZMhBAPonHvgyBLWsh4EqT9yoWuRg13RQs6BYzqAZmvVtbFaS4QUScdpAFvSX4HBF3RG1fmqxeS5Vg",
  "key20": "4wDEJcmyHWieKPF5Nq2S4o98ndRviPsCBUhEmhJcZQs2YxDV9pG5zyADDFC4NQLQEXRXmxoTYh8HxyV3mV2oHZ2M",
  "key21": "32VKvnKcGqGt1xmmFp9J2LuZXgkCJaMj8bQMkqrXr1Z93t9ePQ6iJchYNcV3hADkCcTXcZdotK2iSmuS1xcpVyBB",
  "key22": "4PNcUCGqYYMrLCQ4sRz1WQeRVNRnGTGZX6oSz5KFuQGeX7D4tQmLihZ67SnorS9oH3Gv5bi6AqrmePLZWuhcVk4R",
  "key23": "au8FvAkp4JSiF9qwkToMYxTt8fknPsvHTczeBVxxNJ8MHEqaWX32rfWVxh3Npzz4Td6nfavuAQCmmGXxVWAjycb",
  "key24": "Az12yZUdRvMmMMcN9WNBmP6ygZHiSkbYvrM6mdc4kFov7f6tgAFErk5Pi3AgJum63QzWxdTztEDsUGYj6UtPXUo",
  "key25": "3fTUxDnvKRjvDh2qKhg64eQBLjFW2pzx2u4V5KRtJR3rDTGFQS5mmbx7Dgmp3Yzu5Mn7E3PL8Du5PMdiR2wFyZFY",
  "key26": "5BHwCk5eDi3SAfDtduScv62GyciWCu5m9TrryXm2d9ypVTiHeApZRHsLsVLWsVJzqYj58iDvtMFebbTw8WuCDGpG",
  "key27": "3coRmjn3TXrKkFgSXCR9tdLjRYMNuSCXinKHbwRwq5TUYVVgqM6cVrgXfsZfwfXs4LVsbJCRo6My2yKnLamPhiga",
  "key28": "56VngFphdoBVB6LAe99FEEisXscgJR5a7aY6knTFtPH1asxh3JUnCydvMx7SxXe8qe21oKSPryT225Lg7cYScR1w",
  "key29": "4zXn1gzTA2xNJtpEV5hY6CbLrPjLJanLjqdzK9iPvodANq8qQjQwpNXq9fZPC9oyJPJhhVsWabCjBXu51Mg6ZnjL",
  "key30": "65vP9ypxspEd6bpjJtziNkPdJ5JCFiprRw6TYiBzJx2U7tkfFxo187xcv4GkPo7kDuLPK7qpYysmBP2n5nBMKLtm",
  "key31": "3hze531U64P39asXK5kN8g8F7JfzZtNcoqg6Eer2gnxuzGh1uoCV3Qi9ajUpMQHtyH6qY2hoGu8p1JQkZ9mN8A2X",
  "key32": "4iNadydphdE6p4m4Mhc7vab6q3zgDifUkjQiZDPSPX6rB47HE49suZNk7U67yqHnVpVuLPRrw6VHtBdiwbQp23ge",
  "key33": "3nj7jSmqGA8d6ubV9o9BzG83oHgU3MKYXVkvnHvgtRQ8cvCCh94crJsNcuxcYNeuymQfoxh9vY5WweHNaTAkmnsc",
  "key34": "5C4VxioxtfwhCm53nUghovHb4y9j1euo6khbiUfRouok6R6oPKtsczvG7UrsTLe5hs5hAqH3ce3wjDPQvVFrxzkH",
  "key35": "3WBLPKzzgmvPF7AXdu5CD3aggHN1hEMtWQhv4Rxj39a1vTUwXTctNYHcdcuzyJgqvuYgQGKaX8vCLiC7XQ18BV5Y",
  "key36": "6M6TFRACz5JBK579bVw6Ay7mzRKsZjidJzrGqXTvziK67br5GNdnmJJetDBFbjA3Nr55946B4SzRn2Pa2FeEjWQ",
  "key37": "5xV1xRHSuFdSoxc9tipPbuLh9Cisa77FCT436vUNwCy4jRJ87y7gScTXBkviW3DDVnuzjCpdrsV4RmWC1SHQ9B67",
  "key38": "4ct6yB1PHjzrSiQpoJjSEHwzHddfBAykU3Ly2WjBYuZg7bwH63rb5p8ynzKwwyFhhvx98qTazpQ9qqiB2TEPXhmr",
  "key39": "2bvkvGYGSS5z1nfuy7n1559J1JKfa5hYUB7vPKt4Y28qGV4SbM7qLG1Vuh4prVgK83Ac9UPq5RSTqGHzYCrd8NXD",
  "key40": "3w1h5GbYQXejkByxwgkWFUfQoZ78DHe8dn7M6kBtV9bgFCKQBrveQkFaz5vmR8qLonncmTvHWnZMLQw4aeqnCUbp",
  "key41": "26tyiBiYAwYrLMrTvBf7qsyHPMpw9BJkmBUeefFPWEegVCSEfMxUjycYDSCt9H5Wyx9tYNXDbq4syYiPwTdaws1R"
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
