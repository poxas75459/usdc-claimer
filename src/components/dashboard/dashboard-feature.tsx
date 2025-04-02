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
    "YKUi9hVVLxS31C5mnMvuNqiwsFcnsVBSkUKF8qvstJGfExxoXXtGgE7AhTNaomob96jNSGbEE3s3fHhQjMngTii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcAjAiiJddxvd3Qdd9t5hA81DGeUmHBzNqgoECYJUYFscFb96NGWi4GLXy88SWgNFXCHrQbFR7ohLadXw1EpGiu",
  "key1": "4Lwe1QjEfW3qohhyn27etyWan7iJs8XYB6HHG23yzMQ7zSR5Bf4vN118Mn6kNxFXVXXvH2rGmRbFBCnYRY6V6A3p",
  "key2": "5TJ6BqLNwWGwaPpDRimvsDS3A8UqvSc5NbJTZyiv6tREfQaA1g6Uy4h6J2ASREWQraKm3PdioHTrUrjwbvw9jG26",
  "key3": "5AgANnLLAoUHtvdU6xzFNvaavLqee7vCtSzM4BbZvbtYru9AEpDip1pCQnYp3zNXxD2gNSdQ4AaeA71N7PiiWQjQ",
  "key4": "4nM1xAngUWgdJxbAQuV9c3QxowLY7xdY67rWyhgH1zCe4EgYqGePjUJjkyg1juGzBUg552MKHCgrydvV2fPsygZ5",
  "key5": "2DBqDs562g7cU6bFzBR4futG6sW1ixiTGZbfMGsSfoLUqVVi4GSngwFju5PSBwzJmUg3jPrUAqxuR3SrukxhTCE5",
  "key6": "394bCFvu2B7pCkp94EJqgFjbHYULugSCZu8T2ESgKGKwa26pNYYvs9mMtxoRnpnCMX3kGqk4vTPfA5tJ3QDECEKA",
  "key7": "3rirWGdgwPhfjcx9JapFyjG4QcX8JVLUtTV3f57o9quegHcfVWv21Ly6xASjdcUA7T2sfd9Fe38X8VpB3NnrBeQ5",
  "key8": "4YabgEmj4gb7dtELTHwLB28dLfvnMpQn4qdvKrWuRWrfFp83RL51DB8vsboA8oZKpfv2LjkRNVRpTJH2rAoAiXG8",
  "key9": "TMt94167sZdQ3eZGNCo7n81xdVV8mfKUrFhoTTpHo9e1QxdsnfzmSqF8zw5sKaGmEL4mL4AaHKhaujZu7MYcZjs",
  "key10": "5aJ73QKhZXsjwRFt2mK1qeZjHqNatSn8MCM6HvV6AjZKYbZ7Qv1gsJsaAqFgLUjAKAsWRFdR3iLwaVoJ8VBBHsQ2",
  "key11": "5Uygso3zDhNUvcfkHe2bEiFc9NRzeHzdtK7mb6kVDxJ4xMVQgBgmtiEq2TB1TKofRH8TeZreBAKN6VuQXMkejNc1",
  "key12": "2VNkwf82rmTvHMbEM6VsU7AF5SKwtSgLxhSb16oQqeT475ruQQ3eBUrJQZQcWXZiVx86FpgpmhiECUXsyqMy61YB",
  "key13": "667ncQvpSTKoU3hY4787FZyUBfHDzb89Y1QuACw2Vse5Lsnj7mukczDkiga6iW5fkF4xHRDya6DzJwrZJoCuwKT5",
  "key14": "2mwATesroK7zVu3HpuvC9NsH7YrPUoHA3aVYLCU8JJQ943QY5Je8TE2gkLgyyNmA1ooHF79rtEcmjHV5xyEWL8GB",
  "key15": "4naAFR257hp9e6DGfgUPtEDd1FwnA3cFgYVrWDeokRXJ8HpKwgMdXR3GRECUk5exdwDLZ3kEsznQL7ytK24ao2mL",
  "key16": "53CFCUuhc7krUEF5sCowuRVN69RW5ciwaw2qktcXqvyHp46iqx2cZ47TcUCuWsU54J2JXNg3nf1gLHgz8pMpNtak",
  "key17": "cN9nUxSpLYrM7mLSUYTb2ypsq6vVVgipcyEEPpwV68qyuZQ51HepHXSWVPZKPaTnMXCFSWwiye2HG1gK93PacEU",
  "key18": "2CKimjtkeqCbsm5xufcYVuYAUStbdvckNMyTQaspo6EfxMbQYerTsv7hviEYwMEYUpPqkj89WGHrysMwj2Z8ZFJk",
  "key19": "3xJvgfrbSDd6mUSz2D7fKLFJ3FiUpTERyz8NaibpYtVQfVKsAyA7HFmj6T7Ppy2nEjRuNS6UevNSf5GFNj5magnT",
  "key20": "3zmSa7EomC3MEyaMhaAWJg3ukiP9inqYu95QuvUXFjtx57dxhFqTtB7vtjKRzcyibMs5qpjRzN1SUaxm9bJMKanY",
  "key21": "4onUMbRkxXUHStcz3GyXpkYwPBjZhD8EpuneoFrqH3iJtWcRzNrE58c9sG7kzZkU88bNWyEpRra2sjjvnHGACdDZ",
  "key22": "3n8ZfBQ73vM6UGsgoHRYVvuvrEWaTPc4NYPNKR43ioXYnp1GGT6ymsdaf9KvgoJDfAddPBqLCeya9WSGbWrhpWRo",
  "key23": "SPMrxn7AAbDD3bVzxZkxrs8sTzjQ478F8x7htgN66jtSrm8BNziA7Un3jAAFoQABBb64qpKZz7eyPoi3TtrDLLf",
  "key24": "zEPEDLvogjMpcDrSCPYHCgY53FHty6Y5vE24nMKnU8HwEo2gAgXbPfDGsWseQFyPgF3nuQsw4heWgsR45zUDwFW",
  "key25": "4rkTQNGyBBsY1YqQuU76qkvk3nei1dQYJVxwYZV8mwXqMqtmrETdbi7M5hEpjKbV3So2qP4s2cUBoiMsy6kM1sej",
  "key26": "5M9zJr1wfjWeBfzTm3hK5QxagvMWN3kkKHicWyJoaDYJGxFTq5W4jvrS3euXhG6xB5hzhTUrfa2vCTFzq3bcC2a5",
  "key27": "3NLMSQsBngDSbb1Q9bcoZRQw5fWXPYtH1c9xAyApLCY9RUm3nFPwSqgoAYr2PdRP9Tr31NVixU7iZTkqN8Jna2nG",
  "key28": "23eR1TLXLQ1EyC5NdMtdpu5pGftzWFKnuNsxeGCVUkm9b6MhqMHXx4XSQ54UrueUmPg69DzMWoQJenfWqthcGZan",
  "key29": "dA3DE1FLn2yJCiYrTExW9bSg5gwGr1XoAyDU8RkUQ4mm4PTAgZ69qp8weMPZWJLa8y8xzWxP2mZFv5rHKXDdS7J",
  "key30": "3PymxLTyw3z7dvpMdjChZH9dqds9N4xYdvgokP4XFeBiTNUmC6h8TQcwzpjqwCeQkpKFxbYF2dMDbpEVidXK1N9h",
  "key31": "86K7wtftG2QMkQQAi1cvgshoq6X7nVdbGQ7jRjS7CqCijZJJRQy3ebBQG7ygiVHv6JoMmMfnCX2fFFpWcsnYJJA",
  "key32": "536mGPkftFG55PxQgHAiunXjnvFu9L9WamfMvCum7yXrbdPgsi8yq4YfxEiBnUZ5wpcCQs7c5G9QvFS9jc6Cmyq3",
  "key33": "5qnX5SVyQj7s6Xo11b3AYhJognjhHqkf1Ng5mfQVkncoU8QEYDSa5xPBSXtDrrBgdqihqWx6drQpiA17B8dM3DKV",
  "key34": "5t4bUpGtJBqPXRa2gSSPq7yoqz6Du3RtpEBGimWG6GkHm2z8AoGQDREdQgK13YSLyfBX2q1MvoBTQi278xf4SwGR",
  "key35": "49wmtXZEZzoGdGYENy7f9ud6oFRt8q1Jhu6haBpHkbY5iRt1gmaAj6PS6ov8eAiMgmszv63nKCXZduGHFdAi1eaq",
  "key36": "36wgqx5vJiwRkRUJgc7Ahw8xUqj47pFiJvFcRQcQZjTJ1ik7JCruF2EqJh6V27D2jMHZfHVSCGxPZbm8uwzqCNJG",
  "key37": "5h2qNB6rvF54HsWyHnyp7tNDtwezPyM4wMQtgA1ngXMB48AbRPpCw7LQzponzXuLDZxysFeu1sjAifMgiKUVhxH9",
  "key38": "31wBNMDuNBNM2u65EeKLJdLoGGwCNgnie4HLm4W22J9mz9wxs4yrgrKTdgQSxMruSjxQRcG2VLPWX8UtddEWSGxe",
  "key39": "fwJUQBkuReeoYoox2k1AdSCV2pU1mBAKZd3G9AS5muQeAwYNoWDykQEGfiqEtELFodHJvsEkNYp1LBy3Dj2ek1y"
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
