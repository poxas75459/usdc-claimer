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
    "4DZqTGKiEj8sminP9NLRTy6gW6PzRvwxzQGaroDh1Xerx297pcze2U5Q7mJDp1SKxam2Q7rM1dx3jdhnh7ZBeCGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1CEgkkTtmCkXG3tM3pxxKeSsBFd8J7q9hxDjTMjM4o6sqB298YYE9SX19ME135wEoKSqBRqHRohY2YE5X5T7Vm",
  "key1": "4QjtRVFyQunPmHJUb8C96XeUcRRXKaxN7px1tjtYZZUZp8evwEYswLDCRSDjr159bSqNCwBjTXr9oorNGqxaCgJM",
  "key2": "4YEKL3vbF8nCMLwxpeyoR8LNerA8nChoYFAFS5LCzLs9b63KEj1wNswSu1AXsDah4MLeF6hUKJDvFVqyx7F4vArZ",
  "key3": "34BdNrJYyRBofxVu1P1KkdPQSxL8sjy58xiMSmgZ191SJ5CBPPrZTyurgBEkcNtRY73Ty7M364RDgMghBcPC8w1q",
  "key4": "5QrQ8tZDz8NGsQsHWpT5VjNp5FZixshAq5HFmRr6jcc3eD4pDQXUZMErCN3NdgM9c85C13LErJBqZgAHxqfHnP1K",
  "key5": "3g5ZRYBWmiKf1KB9XsDK4jAH34CQwBKc5pGE5sGoNj2BHJemPmbz9ChiWbNp1CRiE8Z8Uf7hm9TKLr3s25Vbpq9w",
  "key6": "5F6fxdfZaFcmHfZQ4rDTeN3D357FLVJ3XpxrTwHy3bkCV6Dd6VDRaMHzGiywbSuecTnhjECuLvrGgrurcyeAW7eW",
  "key7": "2Ucs1Kfq9ELmowTZqnxSV7ipcqC6xzyoYUN9ei1E1vZ9iB82PzWhbrXLa4QoMxvsqawnPGwdywsPKvZjnubMsTPZ",
  "key8": "gLCBMwtVCavBRDDinu9dQ9sX9MhGZLfhJArBF3EQS9fa7sUb39T3maXgybEsC61DgYKRFdmcHCozfJ3sPko46tV",
  "key9": "3yRBJH3Stww8GhgL5NzHhpq5wDrooCsTT1Z7p2ozRY3boPbZckqdzakFQbYSTGG4BkoNUL5bwxvTSuGBhyWhxrLW",
  "key10": "5hPj1ht4v1pN3THBKUt5xdaVm7X1E6Uh3m49FnrzKu6X294hcvJvnSFJJ5D8YoX9LTSjwc4AsGvYfCKymgAuTUVy",
  "key11": "4tmRD5zMEHjHSjx8MEdtDQc4sfH3PAykU19deAtzaCTSLzeTmBDwmYka9Tv1GZ2DXzF9BcLXG572RC8qidXEr6iC",
  "key12": "5mtigXhoFj5hphtj8WCyLdzcABcqNXuKfKRgzTAW5pvtSQLqqQwwLygCF7n8RqkHms4ksXsRJLFSMq9zb7PzP588",
  "key13": "5idPGR4sYoct4jP9bDbFtLckeWy4SsdrYNSFSeLy3bHJ1AwWppV26SNya5ASE9f7A5QNV5E26djgym1yyAfvLT3V",
  "key14": "jNkE27sSZywgYVRrCoPvBHRpA8BE8re4jWSPHGX4emnsUscANxnRjf5sHT69xsQD2BsMSFhF3GwvXs1W62aRCvH",
  "key15": "51GfhtdktpHcgbCJ65hpyhtDzXSzGAd5qsDRFX89Ggvwas6HEBiByBhwexujrhvacobrYfscM6dHbwbJkCFTN5BM",
  "key16": "3jBagKqbc6MjKqK14NNznSPHmjXZJbtPmC3C3kDfYzj1V7avKctHVz1PQ3K3HeKvKohx54gqNp5UKSL4KHiKGnmS",
  "key17": "36vt9bFwJveAwvcxixChcSLPeCpS7N4Ga8nZ1wnbpaLPMnUiYmvAq8V5pgTpKgQccgSQ79B2NvBQw8SPf6XX8Fgu",
  "key18": "4mqemysWKNoWvpo45djJqGXdnXE96NRhKTVVPxjE9UJASdBYTFqgdsPfBwx9DptMw55C62Lmbe4nMTqwdZpSjN8q",
  "key19": "5vjHePmByn99Ydsbj6GYoZjSuiQp3dKK4XaxYyyHMxoyACg37yNeL8wgwuiEPVvRx71cYB38vDroEq5RoFkNLUod",
  "key20": "4ZUaGMsbTQMwDb4Yyh3JSLxXsk8upNHY86ixZ42o4Gx32HCdSaSCAyqRUeEWYFMQkqf6xHi4ABXG2BaW1w29cs5g",
  "key21": "54WaBGNRNsV9zqWw4iMu6wjdnFUdwqDrd2WPV8i5YheodAkPWufPEpexf1hBZtuf3yJKkErSLFQcVdJUA999hde4",
  "key22": "4V7Hnea1efXUS5qsHrUgkbbbmGumeva4SSJNJe8YurYUD6pfNxPBuuh7o1dXpG4JnEXmckQDqsAvfcczfkkfo31S",
  "key23": "ZaFJoKunmJxVKjgZtEWhe3CzHchZZQphTH3wK9D2QFaZoA6Y77vFPyx5NLXYgJ3X8FJLPkVDLWixDDMZ88Pf13V",
  "key24": "5GaBBtTZNnAaLuhGeTS4Bo84UmN2pxuEMEhaJMk9ag3tLWTcaF6tMmLPL6545Cwo6Z3r4Hcy3JWwfAydRftEigfa",
  "key25": "8MrLtkZV2XiKypEyapaLY87Po2YmWGwMnisbkuQuaHmGo6oEfAJKBmKGKDnYzx8mtjgNuaGediJf93H9HBYLV9f",
  "key26": "25asYcXqWPGFLTpNcnc1abgD7LRK4EBAvXBpvc86yRpW9ozxZjhsJ7vDGsaq6APggQ337mry9arE6mQUj5PqaDvn",
  "key27": "2W9cKFs1XVs4QkuLek2ffAL7cU55T7b565akiEHeEP1Guh4i81PzjZuLqz9LhChg3wenE3bLJJ6Ld4kEMEPyDxeq",
  "key28": "3Wu3h118qP9HwX7DAzTKZzEij2YdM4u82vgp9q7EZXyG2GozYBGdF91K2fECxUxFVS1t49BZwUYJzFWZKTDrUQSk",
  "key29": "2NhrrYFZzshWVXuANV1AdESgVPoPeHHTC7HuThBJEVh85mg1uJyv4DrartpTykaXBpQCLM793uSFfr41jeW9gALu",
  "key30": "5wLK6tagYQqkWyvqNHiCH5RwPEePsDiU4nzHwZ2uhnDfLSatgyhEBwxFsggBijbkEUGMeNxqi3Ufptfce7qBVUv5",
  "key31": "65HiMRxRws8uycH84vhvCCc4CtP1mTQNxWzCLuJRTCLCJyUCtUsfiC8vtoDd5kyXDKnCwviHZzJM6RvrSN5WZU9N",
  "key32": "RPTvfTPtFrrYVCWgFFpRs8oaRpKHQ4gkkryH8kjDqngtzrK96t8Q6iR6rMNPfpfScgvfronLt92ET1YrfwPLCGf",
  "key33": "3f3kFsm62AEwLhivoigUgMPcfNeZymyVMix54fM5SJeaAtrQ8GNRusVV9EoMcwVbLt9WQMKp5F36rmBStKT9ZR3i",
  "key34": "x92UXYdnWdd9GVGkxhSPs5VeNF5GsYVgPycDpMN2JH8WFyWAcLXp2Dc8Leak9kaZERTb1bPhXfhD4G5iNgifoQJ",
  "key35": "3kMJBbaFfwFozHFkqorewgWSZ5mEYh5WQWnDvBowBCY3JrURLJAAPoxB5cGpSNNDWpFXejgfTDGAC4evJt7Ge2so",
  "key36": "4dBV5tmGk8rY3qojUj6XKYSj1tiYwCYC2dwtw9eiFfwpwtXcKdBNeiY5DNi1VnruBWwsWPLSnLkn3SYtefxXfGgL",
  "key37": "3jmTyV8Y8izMmK1Bfgocn1hF2VwgVf1RQ2Sz2iKRWP1imMTUCzDKhjuoAe3sbAXFQkwF24mPunJ2SC7uGnA7FmHR",
  "key38": "53m9Y2dE2LrSsvMU1osZzpM8J2RLKgqgVfTZqzeE9k8Kp6B6TEjNcAKjo834srTsKPZJRv7FTBwGtDQPkNFihWZM",
  "key39": "2MESCeyBgLff93zi3JZxLonkAAP5gTuojmZbQjgemuhCiQhtoh1quZmmHzax8cqYUUhKDpuUVjFgPMwpng8Rp3Ca",
  "key40": "5JJXe1sdtarDM99Bw3iAXDaQqRb6P8C3W2ZFXdyhJJJi8ed3gaRWUBAx4FFKcVDPcjHVeiwDq5gzYmbgi2s8J5tc",
  "key41": "2YpormP16XfQKMTY6GLQ4dMbBPo1vasW4ATrgibYXaUNiX38cqfoKMs7MkBz6ULVok3LPVzLVvs7v43AVKo3nvu8",
  "key42": "4bCgkepAr2WdZyJd5HwoWnGGUY2QHssqhaPhDG9DrKgstBbtAnk5T9Yv5hyjHJY9KiF93J78vcidb7cQ8vrggS6M",
  "key43": "3eqAdGnNKwvKcNpUB3pLjZs9yXgysy19rD4NXHGMEnmresevN43shPwXoYZQf5D7Mmn7e1iz5rZaAr4kP6R8ddEU",
  "key44": "3bT1YYZGrziFxEBRMnB93QmEm58CcX5JvS4QDWLGP2T8Tc7YkzpvSfLqDpWd53QtpWbeQUNWNsViTpDg8SLHtvtV",
  "key45": "3JxriUgpgBkCYvGqLVZPzNKpG9iX877yxkK2VVmpf6jhGbKyJoAvQPfGLNx78prUscrpSCzFMxVJohR7gGZzcbat",
  "key46": "22q1H8yfS5LB8R7Ki5943rFF92kcz1YrTFJhAjTiCcaRpY41PTWDPWKE5kAbffR34yfXkxDR89bWnNR4n4crXhye",
  "key47": "3gBHe2oCmm1AWkATxTj17ZvoALGwEWurx7sJRE4FzBm8VM78PTGYkk3jr2MVRpngV19ap2WAxrvxbpYNxiMZiFbW",
  "key48": "4inzVtUZBBHMX1c89dP6VGVzkTnNWENUaT2YC99yedgj7ccBk9e8ySLiaX2rhLonopdJbXdnTrt88VUMRtL5LYvW"
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
