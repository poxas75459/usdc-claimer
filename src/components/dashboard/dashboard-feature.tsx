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
    "412hjzuTWmWusEmAFQ8RtDCUM2SCY41WpsncEA2sr4sbHhJimEbTmgUc6o8LwYYvHgJdJKa6fWLxZ36ozBHcCjXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnGFa8KcFmRrYnunMbrAmCbV8R295Gac2t1SLW5ZJE4TWFDiSTUPZG6rwGtdND24NMiuaRVnB9c6d6U2HfbTtGv",
  "key1": "P262JcHy8UJVMJLsoarGisFFR5Fdafthusz6EdNoCiGuxmKf4ZyTMNhD7rYxMi3PAhXyHqWGF7eJDGWCt1TCBBP",
  "key2": "33Ly2V1moPp2nbgv4GQ2pzjW1GnSqqb7Wjk1tu9JCGHSQD9bUW3LBrijU1q1dkaq2yCTxmcaV2PYUapXtNqA4tBK",
  "key3": "3Ny2XcuDEPrGkGZYYUBmZc1cuzpoygvZLPyY54cj7qtAoM8Kfas8V5MM8u8a71tcsjA2j9VpKrbBXTb96mmCA8dQ",
  "key4": "5pKxPYzH556YoxruTGwAsXjjFbBmg9u1Xfafdac6AsC5kn2p28h763FVsfQPvaUcbFtJmuSjCmJwgRihFecmXMLJ",
  "key5": "2FgVjL9Lf6m38ERbwGYrweMyMnnyMGQZFFr1q7vu2Cmqkp6XRZJL3dm67VVw2uv3iWTtaNM4b85CQaNGXVNdUiFZ",
  "key6": "2WfRDmm7piEbBeXV5zrfWxZZqw4c1UjZGW5go2p6x5EzkPAFBj68TNovA2dUwFe57CoEmVgtW2T3hWAgZERLexEg",
  "key7": "38373mZEXKoMu8Wk9QA2FrdnfmdW1sNwUrZtd1RXvytcUTXhBCD9JvnmZELKa4cTr54c3ucKXEwzHQnq3FKCBBMz",
  "key8": "qEsfA8TRpbQWvB3akfNbJtaoKg38seWTfT1RL3rfgQD1EAB5RHBRbwZYxTNS2W2Q2MQVy972A5RPAycVfXLQdn2",
  "key9": "46uMZ2zBXmY7Fn6Ttkd4oRZQYLBLwGcY4rgjw6d5kJ2rCHZudaP6x6msuKpTSZmgkGtcZP7SLU5RWhZyMkFU9Lns",
  "key10": "2uT8CgotSAr5AHbuaKNd1txQ2jUE5u7Fnwf3g6iRhtmkTNAUHyLAGpj8CTaeSN67fdAUH9j9niXSDcdMoDBXLAMg",
  "key11": "3gJpfcV7JN3rYVt8oaNnaBqbvgf6nQB883fSWPuCFHUuFaU1DKMGYvqgE6fy3bLMF6edkSghA7Va4aVAFkMyKwn6",
  "key12": "4TNhVWy5UHrVfNF7bwFRmdUyhpsVeVVpQjUaqVuRMvPTFD3D62okyQWkZ2BLj5qbdYtzL2wfMbHavxE31gwon1Zr",
  "key13": "2HiJzH37pFQje4Mc5r52YUHtqLDrMci28BZ1v5jRNAptMWm4qA6LeyCbC5sgCVWmGMviJL1B4DKgs7STVkLjFCxS",
  "key14": "W25aDmeWDuCwJEwnskeySjM9tvBAzVc4VxffELHobRnu513qJyU7LcUqgJXuML1JnxD3NDtnyaeWWaAmYbL7nCo",
  "key15": "47zb56ARhBpVsDzLhK34UzVVEsuQ5s3VqFWDDiEtUxiarLdJEu5EAhUMUjaczRZdxqSmRwCgpmAh32kKXqsUQHfN",
  "key16": "3TvPoNfpB5LET9fozQV4wMHkmAFes9m7VafT8HjFbqHQDCVZohBnCEUnjnq8PWhFceYB61RNLvkAwyfd2tEBy9V",
  "key17": "64tLXNicBHZqi8YXw86RUzVhkPq5LhodZoquXoctqprrJoCeAC5EfKDCKBoFY9aT2EHg9yMuW4K2rVQCzorJQync",
  "key18": "4fTw3fDk3FuLtmj2po7s9rF4ziv6BUib8TJ1U5Nz8wiDT2MAMrJR92Jt75X5Rf1XczBvUHF7gvcNguiFrWFcP8ZS",
  "key19": "5vFHFwdBJZD3aCPfKKcSGkojLb98WYjJ7jpdD9KTVEhmwewAtWJMjoLoxFyvXic2WRCXM4kQwr6D8g8oWSo4dRfA",
  "key20": "2wpi5YnxdSrWjGc5PDse1U6Su3Q4B9UMQJDi4LhuKaX4GHHotDjhfaAbLF2c2xWUGiMuVFcX7PomUuNRd3qpyqG6",
  "key21": "5SWNNoT2bqgAndke1V8mRdgVXNWLyzEP5XCmd5g2UYs8PGfb6yx7Fy8UD96gYNvMtkWJK61GYd6t84v76nECSngz",
  "key22": "3CEcVXwUgQFHrRy6oC8vZ1KPHNxmWGYixktHQdTDxRqpxJNgUbCTqSZtzxgEbPBz3QtYTxtu2sQ1FdQUJgYARb7N",
  "key23": "3WNL3QkjK3aFzHTuPz3dy5iigXmRGn3wq1byqd42KoRbsWjhLa3eapKorEP84GvCathQb8wHP92Zys5sKV9J3z8X",
  "key24": "5T4oFLni35SnsKJy6DXJ5TkR7Fo3xQvJWKVhyhKHfAQyb3kSkMhEZRzzyc1mfzWEEtCiyhiDc8irdMaqCKBQcd2m",
  "key25": "5kgokcSPdTaA1SaAgoSF27vHNeZYJvzSDBh98ucLPvLZmHjRGQ7bEQcLAN8sDkHAtsFsVzo4Xsvvd8r3UykLcjDU"
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
