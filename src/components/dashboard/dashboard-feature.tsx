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
    "xkgRfM4Lfai3gM3PidJaBFW75ZERyv14bJHckNkcnMuYtbzH3edUUL8MxcSDw3Ehk3nmRagu4cRav7RL2wQUL4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GP8LDRc6gTCSH9pfBquQez3mPFhZqMZ1X2rtMSdtAPfvx2PBe5VEVQLXkSdHgMjRRurfALT8M8iDm2edDUoMGAQ",
  "key1": "48sdjYHfDQszHrMfNhrHf7vwZ9NP5z7phQXDurLuj4JKoZrkAnwYtDf4FoR7znmVe9cci9wo4zLiz8hGLLXsnVmY",
  "key2": "56UDpr6LyQMjJFT5wzDSThb4CGYLskYHU2EPTJ272M8zvexCKhzCXcxg68qd1iC6skFYr8efLgrmdPuCoo1NCQVU",
  "key3": "HsCmzs1SVQCDDrGWxkGGgWa5KmEy7SbGGXRw7Kqw6zxSY15FtkamDqnxFjSP5ezZPYgU3wSdpGNrABiYRdtiqq2",
  "key4": "2yrSNk9phXaSYUXk1bgXNpdPpNXotTAPyLPNS4g3g9erkzE1LH17eaEwJHqSw1aXg9rDMstSnzNUdZJJkEy7gH8",
  "key5": "xiFAxL3xFqhjGssDH7h8Esp2CVQEEBL3vXQBrsqhvM3iJrnVXscSLYTLVUaZUALbi7gqfGkDProVZ9hVpeJHZnA",
  "key6": "4YuM8TS7xUkKQgXeSQjx63rdNBpz3vDpXQiVDkYy8SceJm3QAhECLD7J31Md7Su8dBsiWTw2ruH9g9anKVAH7y7h",
  "key7": "iJdTUoPvH7xG6ZL5GxrvXrn4bt3euCqNom5eDVHT3msG6MAYdN97fZH1ZoWrydD7VvRcCbgyp6cRC486xN4rAdF",
  "key8": "222EcvGkurbCKR6rX3X9rgL1EwurxUxQgYxrnZ9TauhFbiENRH9X8SryJLNMNSWJzMEqosftRixtk77uexZ3Krbx",
  "key9": "Siz3w5xFpNEtLKnN6wzGdeSafCxACpomtmjWJr1PSmsxHeT3CX6D6ANeKgY9angvcxkP2s7ZYreSRLdGhdq8Yad",
  "key10": "2PvVPhf5bWxdQzBfULLW23dzAcJ4MdVNMSaqtdLygtTHz7wtPeX1M9tUMj9UYWaZ6EqUgcxuDYorrsSjW3nLXWXt",
  "key11": "3LRxASkeZxY1aJguvVkbrUdQC7DwzKM191WEBrwj3BxV8qKpdKM16AkVPy2ymUkEj88DuxxRDrNKvqNjsnZpF4sH",
  "key12": "41w25kH1CsXVHTA5fpEwWGyLgLPJoiZvnW8VSpb8pvph6oAvTbjhAuZp1bZKfmkVJQEMEzJFRUmJFdjwySb1VgU4",
  "key13": "2Jw1xNRCeJ2yaJT6b37tRe5LQhz7GpazbnSZaFv5DRFb3v1hXCztFT7B5Z7rL5qfwb11VX5HVXNUPF22hLUkxU23",
  "key14": "5pLGLjNUfTPZMFkdc4xVgHRuwmf9ge3rdiaLPXXvXAgGUt2PrM3x6dH5Pgsj7TCQFPhRvu781SLC54hjj5G9PS6c",
  "key15": "gtKcVgDVXYoWZBwLLakhhA6jGFEXoScuvL2GgT5FxVkeY3mkdF12RobMDFxkjA1k5Lte7Fbb6d8XhWUoN9EmDRN",
  "key16": "5cyC6GNh8ZFk4eb4fVd569JAqjmtMqSV9AcsRGysJvm7YqxzRMmL4oH8jyCo2XZuuiokhzvT5QniQQCrFkhLxScA",
  "key17": "2F2REjBxNFggGUvTJMBzuR2Akbz6DHggx1orpVYc1ZBTFFFmJWoeNMcYvrUQmXCURXvWS5T7QEofjgMbPKqFpw8x",
  "key18": "2wmGzHoQSxTABUwSSF1uchB1x2qcfpLQMkgRXAG4EM134KQbT8s5krAAMRPsF5eFc7edddeC35pK5Dfo5tfSoQSk",
  "key19": "4yVCDQWVCYMUPQVoTLByNSHEXpPgHvV4HJfPpGh1SQbJPiBbzYeeKDRrdCn4p3NiXgG669xHM1C3CWa3FVHnT2VW",
  "key20": "4jyCG6sstZcx1LWbyKziKZtxxg6Jjzc6PzFuXUKDRD3smhbKprhARDvfwZXWfKgr9Fg9KrGDRmNfZVTHT2hDavhf",
  "key21": "4y9oU5RzaNWCh3aXxm7TW2Dx4jBprqLSDCH6htLXBo4oY7jBuUqeVG4y9R6xV3acWCK3WmCRSbPgTT8wYqb75oFn",
  "key22": "5qGUxpeN2zpvK4LcCgzm8EUpEJYegFmyx3Eh3nHTw6nTGR4PtKFEUAXn6omsranJKe5nmF7eQTchz6Xde92rC6bs",
  "key23": "5R9fYCtJTndGNKZeMkkXCQaEXQq2uZyjeatSibd1SFP99Tfz9o1rNEtEVNfogyN4Jp5re6kabEVPZVWiY7SUeVMV",
  "key24": "45jKL3jotx9Cei2vZh84NKbbm4L1Eej7bpkjEV9P95bQPRhm1pSjVecbwq7teBWXTAWRRCMqQYuE7fFq5FiCh7ZM",
  "key25": "5Msm4VRswpCz5tmzmEtKE6jwGuhWigtyoVPqqL47gAGqkfSnSniZbVsVVFWAMMNm4LgXua7TVN8RekiAE6n9zLV3",
  "key26": "4S8JJhZK9nVVDcvakGP4ets1WHGBHNPDgiAD7pnaq79b2YXdXjTzskQFChv4J7eMS1Dsx7QQPwit4ruPzZgkWxvE",
  "key27": "eg4B3i5f7sMjBmdJGeH1GYW5Quc6yUEZocoxmFSTt6LmdSkkqMEXAr2ZQqDBzu2gmcyfmBogbwNWteisXZ1brpd",
  "key28": "4LZo6HP7ZxJWLMT6f4zkUEQC3Dnv8FEr3MWL2VFo1Xwqkp5XgJjHHxM2jkixAXir9GTGW61ndd5dEqq21o3DHPjY",
  "key29": "22N3hWHaoDaFgg2vbqtoFPytqW5DGKsEwrVkiqJpGAGCnPnodggqbpbMRfjJjZZ7QzvJrwYYHEPY65CTMvKDoGSZ"
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
