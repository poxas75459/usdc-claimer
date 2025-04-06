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
    "4nJV9WABNhFchqgVdWu7JFFGpZW5jLL1nLJfN5j3hgtvWSVfD3uK76JFHb1TGp2ccXFRfFSTXyEuUysjD2EbkcdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8D2L93hS35A7x5Nh3GJF6uoKrrjB32xezXiMEys6Pic18dC8hut2BpXhn7uv1xc674mW8BGX4jEut9Abs9ath5",
  "key1": "3fwMhumfoBA9m4do7Zvp5io9BsZ2NGRK8VwCvVSGouqrijY1La8UX2qPdaQznnCGTPXgxnBHq5ERKXjNgkZPwoSg",
  "key2": "vXFtCctRzb2oNToS2LuJGBLHNAxmUXS75BMMXHgz2H3QpAnR2J16npAXJjcbQEmWgxjrYfno3CKFL3sc87KHvQ9",
  "key3": "pEQMykEmbeTbepccAUf9TJRvrMh2GqTHG23AbhBHrcyaJmxV9YueH3fq7Hqbovx6RLusVMTr8ns7UvLpXvCnttC",
  "key4": "qaWfWQdmbnLoXvrXfjBxHHAZiGTsXQie2skNA5yVa62QxBuf8AzPGf3uyrBX8RA5RAiMFKUrdFkQivNPJxozxmg",
  "key5": "BKixpDP7uMm5jofKUWtaKE7JAVV93L4HNG5y9cRmjYzx1L1qrGWDWLQ8sLpXxFBDBuTPG1MpvJfeU1wtj9uPqzy",
  "key6": "4Fsmvv8KyTy49Mj8uAwcyK2DhoRc1TXJbaJ5vbE7yMJg3sD5gjKf1ogVDZa6AJpBg3mNJtYoKPaZgY41Z6awkYJL",
  "key7": "5Xm48W26XEBVuaojefRiJpmoCU421eN1T9MpVtU7qvG5WWir49G1irBEo34c1pZXcUL5LyAW7ZonfKnmh7sLT3sX",
  "key8": "4yDk5gbJDUGKBddHUp1xXbFMMqvwduotdJyrkbJXJWDuJvSQpwuBryxypqRwbQ7F6jPTHumFiiyWJJfGSRSeMNdS",
  "key9": "3pyftYVz94e8hwzisituZQUgDVzDKXKmm2bUPgAfLFKFbcnLw5uT67EEufSQGzhsMmPAjZ2Ww1Swnc3Fcqs2Wd65",
  "key10": "2Tt2i5NRxDHGtSedF59tVAohFNcoS3R7r8fyYZqkY6gFUHkNvGYAnHUdz6YukyUNHgqXGNnJg8vbHyhxQUMXK1Zs",
  "key11": "4YLTZzgZvdTC44QKDUxGXYU6RhRfBx6XF8jToZw5NYeSFpZyixeEs6iNVyuZjfhF9BJ228gLVfFVyryoNdojQqeq",
  "key12": "4Z7BaQomAyosGqUWqJZCpECx6BMh4QRXATVScoUkYxC6jyET4i83UbHRzuEPJP6L5bNivyi4YapmYvhtJj2pTXwE",
  "key13": "CQSVf24jB6RE9RcgzD3LD2W49ckuZE5QfT7kW36RVCMgXS9jzzc9pG3Ex8mAoaDMbxrYWR8arRDZRKZfwRaeVwT",
  "key14": "4K5a3QeKPDKWgN9DgebvpwzRswhd6WxZh2nQU54erpYjYbFsk8QbwTb6hxcHbYxrBxUpMxEgfUbVBFErtLjA5GbD",
  "key15": "54hEtfzhKuvKJuZLfsaoUJdmzSRMxJbww9QZqT8nohpMRCeVzQSNpXsQVqzUL3hg7P3NgLzqtZcvvtL12MjSut5Y",
  "key16": "3dJx3U5mJdc9ZzGnWaBgeBDf2RuzHQnPdSdGpj5YpkYsECUQwDuj5JoxrcfENYuQg9sXhLAQTLEvUqJMAetpax6n",
  "key17": "5kSFrJuN3kaTwt7C1D9zArCzeo42W2MSMCtqyKzGVLtj1sZguMBBGuFqgerswiVUfURHpytpzXQN6u1KyDRhP5pc",
  "key18": "2BUv1oM32Tr56FeTEGrH1Abk44obHB6b7GyPa1GmAR2Pb9EZJzeSfUexCvXnfut6xTLnrfnbguGMFdmTtV2UEiua",
  "key19": "5br1LrqmouC3wPng9gw2ALbb3J3VfnMPuyJRLPu2aSVtCSuYRniVjBtrBHQRQZ4h55oXwL4c278tGUmxT3BQnV5s",
  "key20": "4roH4Fb7vSSM7FJENayFApabFBPHMPfPYSStwJMLJmQwZNNfVXcSLJaTymoQUuduDQkGeKrZcG4WueSTfj9fY2Ad",
  "key21": "AwcarLKMMV9W4SjD9Cr5GCQUeFBXjzFAsBPy8Z1JYZrH6CHa7YkTeRv87x234coL334rVUA3psbnpExSs8cXhtC",
  "key22": "2ofYtEbvn1UNz1P5FrfaFT7LjRs2z5mwzH6d1RJ8sEsZUSJrP3aNLsS3tk153tuLY1mqSBdLG56GioWyqjm4q3hr",
  "key23": "55aWrg3eoio69YdDDMr82vQeGxCHDpWpKcoEG7ZXrELfSyPQUqYZa8z5f768HxY4Uc8fvtVgcaaTxQvQt4fEVjzs",
  "key24": "4JLgQ3SyF7vgTb9vS1Htku9ATgSjZ2J1Qn7S1nxGHAi9YxUyF1L4kqtYDK3QBp1RV7qnczNT33UT8SPkQaS6YPEo",
  "key25": "59DhBd4tqDTEspb1Ybbqz8DeSuehYc982tQgQWziMsAmFVszmCktzzB4Mnh15ocaQBFSJyyF82qkXM1HXapFo6ZG",
  "key26": "3ozNNbhKTUF35Fpo1ReiPVP8uBwPcSsWPbdeWquvmxDuunUPHtMuXJMTNCZW7cHEKq1quKeTfcV4bvue9EoDyyx1",
  "key27": "ATJHV24szdAisihccpa6spF9KMbST4KXUCLvUYv42t9kXTRqUR2VM52ecT8EuoGRScxm6FKN9w2ySCb1Cxnxecf",
  "key28": "26SYWczgkwLX8Mjr8jurZjKtJn1mUbabaRPNtGonbmqnrZSr4ZAuk9HmfZXeRHjTZDCguFfjj65rnuWsGyb38LUH",
  "key29": "3yTrme3ydqtKxjdfNNQvezhUNsRAEVQpqiUfVjjrGuDcuACerQs4Mt5JDyqtk33xQZFia49BUZYxQvBKjb9u8adf",
  "key30": "3zV7sZuvCucrGu54mN6AUCW8LFnFyzFdRMwM21jmXgoZRtScnuRvZsHw7FPfoqDJgxasfYhhoYKVsywPUfSkxtC3",
  "key31": "4ALjvpeQGgFxATQm7h7DugoQGF46m2wB3728ZiKdqQRtfVm3DKY33yCCEzRrgxkVpsDLajV8VyE6Rk7p2V74s43n",
  "key32": "2v94j26AtELiEz5jXFB94KQdCQUB1PQsF1oZmLN11yRnHWv91wdikRpjrpXWDrLZCbenmEVQhNK3LK2kRMr3yaj5",
  "key33": "meDRfM1FWo4sSatCnYfYrAd9R6yEx8GdrHiTZku6MxkKfdX2Lj9KJ9PQSteKro8Y41QrZaeRr9beB7WB7TZ52UK",
  "key34": "AQwMzKv2PbHZmGVoikZcJvFjbybV3nwN1RrEwsRXcMAFupTHFBUgM2qY3a1tVehW6HVhBadk7btQQiptHeQskGq",
  "key35": "anfBScLZB8YxtVdR9FjHM5LuQsDWLanv8E7eJTrzuXFadLPjpmNVmmonzGJSVF7nByJtHyHhXz5H4AMLJXgrFkA",
  "key36": "4MNjFifATamXGheCg5zY3UJy14D7SyuPfvb6NfKVDmmmRD1Nntjb96WwJZGaoNz1QtfSLx1dfBtYCZhjD6Pihw7L",
  "key37": "3MdSewhZRpa6URmwC7bjMWRJ7hwXPkQ6ywZkKAbbtnFrbqee4omqBBbVufzp2ZpzNuAGxGY2Qr5SShj6rBXrgvBB",
  "key38": "4vA9VVWAoJ1gpVjgSf9pi5csYpWA2QAWmqJuASbxdj7AAic4Hma7qYPhdpYgbdeMRFGujp2NumH4LHuiQWyWgG9s",
  "key39": "43wPG2d6efYgYndKD8uenhKDCJ5aNogfB3CtqxqUCW8gq9kmpnrLeV9iThS2JnQ6jHN72JwVcaA1cV3ZejFAkL7H",
  "key40": "3mo1Pn9n8uVVk9rDf27Z7phX1KN5naWmnevGRnVm6gEy3B898UjU9ZeQmm8YHq6sBGaHFBXWXRkbz9BsbSXeRvVx"
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
