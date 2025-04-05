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
    "5JwYjTyHzmJQLQLs4toCjegJv47hmE79wCv1BaqFvuAyRvJkfsfGk23Y15Z1Jn7KnBhpxHMDjNUS4Dc2oKGQdnVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mRoo1xs2abuVyBPGPQcGy8SFejaS5AuFMPEE5QSeU5UhP3NKS4uUDWoY7zFsH9V3S34r4crRgoSHnECBBRgBUk6",
  "key1": "ftxLuGahSt6sd9x4ubaTeFygDQPfjUp3ijC2Evx8oLLmhx13Dfr7eicDRViBUXPT16MM5qztSgKotCNZLbUgK6P",
  "key2": "5UjQAvsFyYviAiWo76jcEiFdQQZm5PuzJFUYFkr9kC7AEJsMweqsc4HmY3MaRgFQpcv96xi1bzkxj4RFzNc6JeaR",
  "key3": "bEEWRKTRzMSRjfwE9nU3sRjcQHPPVqd5crmYGASWQtCvNT79AssXxPvKdmHFdh9YRAtoUBnEoH7XjvSZwWzFB8j",
  "key4": "3EikapcKFmsmovpt67B3cnGUCai8efBLTrgEHPLF3VqEjeWum5fiWmZEHaahnd7RoypPdw5q7XNqHwACct52AStC",
  "key5": "2LGWnsnB6fvrvptEUQ3wMvadTdMPPvt3pu3pKTbuJQH6LKeBampbj7HGRtYkFGCVYRS5ZUZK9yPZobitS6SWQjnZ",
  "key6": "4gc9PdgH4cpsWXKivHGrDJ1jDHUFKDPoxw5Y3oyMNEDdt8fb4aVAYz7amXTRjvPJcXHS35ZQy52HJkQpoyPDoUn6",
  "key7": "3eFzMtbAdg6XqCTeNCRGwZfQA2XCUtTachHc6oHEEgcn4jK2P1YkGj3V7DNBde3JVtRA6pdwzjaZEpvNQ9BmFaqZ",
  "key8": "5ZvroDRCEDSoowayvxHRFQ3bJhMQ2YD3UV4dFfVs3HyrQXREoWZtBHfAkbLMrtaseRk571zAUUCH2Z5VGJL35tQT",
  "key9": "29X9toa57EPgdtckGy5Y3k71roQ8tQ4tA1RqWAFscDXFeD5rrS1y1EuEvDio9aDFHjCn1BmNEQmeJVZ4NRFpYYBN",
  "key10": "xirpxCifzrZ1kV1iAyvtBRdY4YiTkM3PibZHvQNagtzYwX4qbD6Fo65X5jReTYmEQaWHZX23TQij6HBAN8YfSBG",
  "key11": "2jkSK4vZSiziF6c87XJe6KCTb1CHfePXHXtjQYpkSS54J4o8rQ9Ro6WWzCshyDSYySZ2UR9FnvPi5GDf5Nfb6bHu",
  "key12": "4TZ3T6Dtg5u4rupLZbgFR4Eusg9UPjSwDFvQdrUjF6psohaYJkkYys6U43aLRjssHrSQ1cMcafJKBq48Frifqn5t",
  "key13": "2VRk3Rn1jmqHLEgG6FrWDMeKihTAnbHX8Xmv57W69jHvb5YpRzD1TRyNcixgTRdTt7XCaz3RDo6C4uLZuyHCArnZ",
  "key14": "2D8GZ6KPQ63mtHwfkiNuZkTKMhiiR2P96BgJDLvb9bm7SRuHP64jHio8qFsagiAghvyVvDMYFJimziFqPcCxbNdN",
  "key15": "4WqKzgqGm27vSwPUVd3nYpNUJrBdrwkXMZfBQhc5yDyXpkNeS7vtM5KZxZmjnLn5jzMcriTRdNvwZWpGcXEMhBVT",
  "key16": "4pvFdnebRfD4jB6p6bgg9LPnriSaS8JXJ8t3i6hoYLJN2qKfnpQWHTEbbyuVVR8PB5AFN9gBBtJfdqFcALnHtyFr",
  "key17": "5YQBLiYaN4YqkPfwiBnrZeu84jewfK4z3eGGCRQD2aByPTJ4jK3ywD3muKpqJtHnSsHsRAvfcm5Q4sms5Mc69wKh",
  "key18": "44ApVeF8YYgc7wWi9bQgbbtnRXJckCJqoMXTCdfud8mnU3evBst1bp4juJKeXGCXPBrBXy2LENmos24KaugHbCtS",
  "key19": "gmmVWbLxtHEP3N4ZwUNrQEYoxHbmpb5PovVAuFuyPpE2htHoyuVsQdWRWQpFSXXj8azTCX2nnnGFuoLP7hCyrvS",
  "key20": "5NDCtU9KsfJVUUkQ6viVYBbZ2hPAVXV1sJBDaKFmvAhcjpukNSpW2WqxiAyCdZaex2dvLXB3rQaDKWkQxtRLDmFL",
  "key21": "4ijvLerKzNBggiPaRYZR8Hntkai8zqnoLXQWSAbk7kyQUgEAVtHmem6z4TWJiBjjVfaqdcjT8GS5ay4Nn5WZmA4t",
  "key22": "Zof6aHE2vAFQmnpgMy4g43Hh9mSPNRVJ8oN46f9UJYRU75yM16yk5i2Gfc2S6234TypDkkCQJizp1jwKFceKP3d",
  "key23": "2tSkrdkajBgvVZPP5crHYfwZoy78hYiJcK3Va85ddyfPeogNRk2Ev83cafeGWR93v4wqkbN1PtPDb9pz6RFM4fVf",
  "key24": "3DXovfCNLidYEvfSyWq2ZTiztzwXouDwNF8eVeAiFvcDHmNDkvHvh8yq37w5Diik326pReW9AowBFUwFEb3McX78",
  "key25": "4TBwjZbtybdj8G1kY1YwXNt8WrCyd3WSS4k1eo29uM5oXg26Fxmnqf9C8hRMNUD9EM3rMEFfk24c6PpYiqRb1Mgt",
  "key26": "4SmqWbBGz5zRxrRgg9N67wPCp3XxbHNhjVetE4rXKFznQz6bupp7PXPdB4CnUvcSwc7x9Bf1z4abDJz38UnJqPEL",
  "key27": "4hmVknEqQYFauD3qQLYJ7NX7t8BDucA9GZ4QjiRAtbUxHz2vmvMKqMC5fNBqNAB2mKEtKaqe1QDo8z7JcaMNatXr",
  "key28": "5LMaD39TRg2p1z8RcAj2EFF1ojKhyJCoth3kHiYJp62yBMHtALW5aX7VQHwtwVw8bBwscSCtYsjZWzMtQ5bytf67",
  "key29": "5Ry8m6qHbdNwqmkFhb4sFT77AjbYNTdvqjLdTZJn4vFsJZUePTqRfVF8mfBJm7ihVt3X5WQGCAyyXpG93XXjYbao"
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
