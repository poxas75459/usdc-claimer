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
    "2apifLNYf4ZxPSdpSeMeuzGDQLoMpZERtpGurNfduDy4H2sHykzAeYXxfMyAWA74A59XvFAQHkjEXFeocgsDWQBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S689hw3t4eKorcJtc9tNSdemXqjBnrd44Xo5PBmyKoj8pWqQSefrjC46LF3nNadUUEgiktXZodWPPmPRCsCzyxW",
  "key1": "pnhpAMxdBePJxuaPQrBpkkjUpFzZaYbmxjbUD9MyAjsqRd3bSi4KDWLMkzR5pLYvXVDovGR67wayHAfFZKhrADp",
  "key2": "YuLD87cnjEjuGTD2pa46aDRt3RrCmwncUEBFh6q3SWzWnG2TbtkZJ3ipqNfVwcckpY8PuBHc9XEkatwfhisxp9b",
  "key3": "8Qxy19uLo1tJBJncFvhNMtJ38yqxzPH6kWp75S7dXwzzZYttyoNnfFc9MxQmo5Mn484738YyBgATwLkkMQBDMud",
  "key4": "5EMwuipYaVLZG97rTrASZbDLad9nVkqzQZ2CuMgYTA1vDP5rfnpXv3XpTjPXLc4PvqxKL9ViwPeNXNYwCRPFDpkx",
  "key5": "4fp2t2whAvCufRzkze6Pv1vgoYPwtuGxwqq7g7GGeR5iruiXyjZNupZ93XuAuhp6GeagxEiQo56JvjkrT9GA8XQ3",
  "key6": "59pS1Ns7DVtg1xoAyPTAFaqgeQKUUJEag6GuBSMZd5SudfpEjyYZM7VJZ18s8xVEvQvqqZGsZgnbq6dJqfEynduJ",
  "key7": "3j3S2vp5SHkiHKyQKnNm1AWYttESA1mE22beaEmHZuBn9boFHBxk7CKo9om27t5F5mvEJHdeLXR86AeM95tsKVWR",
  "key8": "5mNaqYmsKNpk8pnZMWQPCscKn24K8osv5P7Kvdy5qqgdgvgt6mMWn1Gj4Sk2zx1YCWy6Ajkd2MpxtmYtCGynkaVZ",
  "key9": "Ta8FPHngSWJiRYawat4TrzWEtPZtQgBoKp2ybyyZVpQwAzH6o8cMKYimLo8mVeefYyu3x6A2CUkqAKawzkHamNU",
  "key10": "ki7C9xoT3QKYRA53cGzciarUq3vA1XWXmGryWBMKW5w5aTMJ9uek4qPvQgCRn8Xxeu5WSjHgSsnJTEguocqC7Uv",
  "key11": "4P9AQ4xujQBwr3x7JNmxG7Lqr4oNQZfzLmG5hnoXZPKmywStZXFTbtQPY6bbDZYCfzqmSTdVnTTDnjZfxqbTzP9K",
  "key12": "261ofFMt14JAQ5uHR65o91MaxgVURmMwGaYaYCiCqG2mdqd7RE1ZnzHF2TzqiZwyWmFY9ps4TitrgNxH6DHS5Ey4",
  "key13": "65iHDkr82hutq3JFLPz7MF6SkFvXNRhbpDen8H3cJSCXfiBDBqTRDyquaHeyqa73KoksL4zmbohEUrf7R8NsDZ2x",
  "key14": "3Rib5EdCLqnTMudQyYwtNGQjTYyB3EteL1nRmF6vFKj5p3SaaDertSzJgD9SQNaPkuPzRdoAkHFjuxePnRJJadww",
  "key15": "3ST33m2uM7cvLs6EUgRiLW1oiQ8YHTgLaAV2hLNyPhehqTeBSHa9CMRkZRQdAr5eg4ZKbVD74wCg3131EXH4SanS",
  "key16": "3CgzhivcuUBArbDiQdfQ5coxgFevmsUef8Mp1royYeV3RrTFu86FA2MGX5WgcHgefLhm4pYaXLw4Rv58Qwmu5WCg",
  "key17": "5cpmgUwgJyViPQDHuPJYUFzfM5AYt2VDBFWgaRarhwWQwjqPUxnv6pqWEjCS3dzEksQDiWUcNmg4gJadkZQgS57e",
  "key18": "4ADpDd7TegNgdzbEexZetrqpaDQWwkT7BraekwySxNHoDpM2VxfLS7WPmtqjj7EwFcJxHPtkXRNQGmpBxeya8gvv",
  "key19": "34ABGsfhj2nvZuXNcohaB6UYzD4dc2uSTVQbGX24q3QGx3czb4fMXp1EWBvXFjqZSwn7q4xBrZMXVTKSCNMBTeMC",
  "key20": "4mMXab47RYr9XsRPyTT8h8bvUhL5z3d5CTVvR3ezSCuwRiCeLa6ibx6dxYb9EckYd4T1bNGDYZgjdG1b7Sk9ZsZz",
  "key21": "3Gx8cRLK1Hq1JSrMcTXbWBPbwF3yKWCCnEvz4NQFvj68dhX44mUX1YC2u1YGFKemZXS8C4nYcsnrdBvgYomJK6RT",
  "key22": "3tGCG7EWJEzGb4dXwJNhENfXLaeW1DL78tUZoxkwYUQvjEFFvtnQZfQx6wTi7uoyuQkgSboiL7pLogM4D37kHaPP",
  "key23": "21tLVcHL8r1MKVqLheNxpEXWb8kPHA5yL64qnEoB4edWmVavMErTcBqis2jwmJqfUeQTMmZV4DzLjaSc2G6Qb4SZ",
  "key24": "2HTeAezGhg9SAeiCiohqAmBToKEo1pFxkK5pgpEoMf5Jo6iRR7yAY5xu8jgZ9QUpawuDrT7BKiryLCFGeVwNTPNX",
  "key25": "31TUbLE9PxnHnYxtZuwV8ngKfXEjjZPdFiw6oz2c1bQM5YAR3dZXx4pVrAyA8TyT9tBgbAuT272UkGc5bHBDQnMh",
  "key26": "64DsyYQWjpKjHTBoPapCvpapszfmqZxRxA7pQfUAcLWLig9uE5vbeJjf3WPk3M8JeYKzkz7wq6NjBVMM37phVYLp",
  "key27": "5eYcLG6emEwmRtmQ8qV1euSFetrAdutQRRztkDZQUcseponQLh3ANFSNh8cyf1jRqzQAxzGYwnFthSQ6MmAn6DNa",
  "key28": "578XitKZJM7rFYcntZjRAWPKZSSgiwhd9UA7v7qsjTtJtQbxTo9bNjgUnJMSacTC9D3uWrPZ9XkbF1U2Z1k99SV3",
  "key29": "2w8SaydqngKdiM6MttGmTkRQXgPFA5ZDuNbMEt3yWgDqMLZ8EHzhfUfvPmX8PDW2fNaZGQLkKoMyaTePs5snjAY3",
  "key30": "hajikfeLTkHiqrD43baeepTSvhLeq4zvgBVcLyEQY3cyk7ofdRaTQeENYKKK6XqML4BvtzMQe1hJvFxahsrS6sT",
  "key31": "22tVq2xSQTo25HR7K4m1dosiLmy1J5DE1m3QJXudwp36wRXG4uDEzzJbzDgFX7oqSCtFPx6Sa2pKxK5Qa9gXxE86",
  "key32": "54e2L35s9v6bpaCdmHFZ1ePHnLMp1Rof3kiwDmC8c5FssYmNa6EcffUDEryo32zSonZ8VA5EQpyU2pEGzR6DVt3o",
  "key33": "3EVsRNy3RS71tm7P9BcCpZtWDWPN4BHjLr9F12L8rnHiw3GiYguCdvhRxf1CLK1UY7ReAhYhWB93hWBnr7uqYRm8"
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
