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
    "2NfeWBFzTWJpePbzWgjc4EH45BizByTPQ2wAva1mQTHSmm2nDXSoe1UCgsDHxuMCaSFzByJq6fZXMC1RH6xoVsZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66gdBgxhFWdhrXFLCe8qZDaFQD76otPV6DYRLmhH8E7Akm5AYZVRrvaqeGAmcqThRxZ3aH7XQRWgwySrYnARUvUb",
  "key1": "3uARYF1PsKgYqimykiXuwWweFQVojAq1o62uX1Ce5vvycDQQqQX7NQ5T9kbNgygN9r1w1hHW7K3GXVMWHfwjAhWc",
  "key2": "Byv97PideMrbSq3QSKhFkYRtojczjS6qdyUoyqSnHmodjeJdh1phzFx1CF68ifxbtEuQEzypVqu6SnVJsfJBdLB",
  "key3": "42D1Ld8vULeZ6U6jwM8J3fLciXfqUXC9BpSSL8fRvbczkkQ718TNoF3j2cYhNikVRQ1nooTgmLf5DgAnufNzysY3",
  "key4": "GZgnyddU8JjBy17DExAPjALwwoq8aivoHejdrX1m2GyWn9MXL3dNqqgwJej5Vwx15MrgDF26RjRKoKPCLU5e7HB",
  "key5": "mqcTPwmnqz9yehLfP3TqLMgK4hx4enqyWnS1dRRoWNhSXnXoLNajXDYxxLPmSyCmcUsHaDPnqAch9n4TJ8yqL7S",
  "key6": "nyXw9BxCzJv9hxXxfaDZxDdhgJA2PH45e9BvbLmieHP8MBdfSzZd5g2igKkiXFr75U6dbcRvgZ6HZWqY56ZvRb2",
  "key7": "2D61kDREkbHFXahmqqi7N5NCrvdc42DP4DH7gMuuTHvVdhow4byMsg3oUdGdup7QJRB6p1ayjGG3EwSGqhXL8xPK",
  "key8": "4YxdkXCQGF9F3BuKhcqdmHzTPJCHDmW99ioeyaJxqRJL3Dud4HDq2Shdxn5nB4GPtMyk4Y1DbPNDPEp3cvZ3dPgr",
  "key9": "4HZdm8eaVBabxnkrvLLsqWecJvmkpLbz3B11LBnHi1yEYPHChyyTVHcveKWXSzDpJzzdqxNzMq1ukh8CVbTXr8rb",
  "key10": "3RV7vDxP97DdcYsnLwd1QWEo8cXpSeaCDkVSjhU1wvdnvmRxGMRFT4BQkt65oGFpXtwR554F8bsATyvRL4LmRtcm",
  "key11": "4Ue9DdwL54t66hnjgUTR2EAMQnXycVUEH3FUkEA3UjPvinP7pE5mHTMBDNJRkNTWce3eopF3rPNRLkzXfUxVWS7v",
  "key12": "4sjse5JQY6V6VoC9PHDFN8S2c2ACjubFCaFE86MxSntiBjFvz5vf5UM3HLU8FTcrx5G6nR6ERb48mjdxyr8p2fvT",
  "key13": "43ovVPYGvvs3kuonxmSFg128VZGUVgGqh3JzTMfzx1o1g6arjCobCGf65KfwEKJbfQTHAvfLVKT1V5WgoZP41qG2",
  "key14": "5hRkw4FrLBdm8K4nBMwHRa4Bo6xWVrYc2FR71HmgKiVAtodxuJqguaurokKMEayfMQuYcqfSG4mTkRxwF9HrfVFq",
  "key15": "2hEMj4jeqZAQgW81Z86tvYw2bisQWLrZJMugb4y6XZbNsEKDpeeNH4FprPyan3D98QT3seW72uCZi7mud5fhnPJg",
  "key16": "454B16rP29XsQqDoxWwjZApkQ5zK192oL9KttN6PBzzShy9eUGfCoUY4zQuim31BN4pCcCf4gs8fP5VT6zfmatoZ",
  "key17": "4wfUgeusfREctPoujGGdXPetX5XpBVfoLwx5zb6G33CuSK47iPXJtTXAVAmTdQvY2M2LaacxwUGrLWfT81qx7qjK",
  "key18": "25t8KWr8BBXdLDQ5BeFZmSzTDxoUxvgznT8N2dCMURMWVTphu33BUERQu2ixmsh7AkBXL8MtruHJwEumJhpc6zTv",
  "key19": "3wnZojToLVMBN3C1Z9BTHj348CtopgcvEVLLE27gsmRCaCNF7jBza8nDb3Ft4GW3x1gKjYSZCyq4dt84QAH34JWv",
  "key20": "E7pd4wYFmpu1uoBDhqGCByfD3EEZHdKS3Hh3pusyBCmrRZEWFAfeFQSQynk6B6XaGdDbCeFk3og9n1Fd7tUuLEz",
  "key21": "3YYyoLZUhz84DG72iUej2T4X4dvGRaFgLuw5dq3U3sWiJQYkA8XfaQjV67Xbh5FjzwUUp1WHVa2UW1M2HMWXKvp8",
  "key22": "5Mojet19Px28P1bNNvV7NfatvzgRRt754iuQCTYeaXb57CywT1kmUkHx9MqkvoFXsQUya9tyM1VUKtReZuQj2rC9",
  "key23": "3irD5NiKf5jkcA28qGWC6oCePn3P1StVTkkBipAuQeymw9sPnCas2Ff4HQhoS9zSUG2FmPz6TzZKYssvAV2V8EkE",
  "key24": "5SVAXdJVmnz9fjKQo9GRP4y3347jyVn8m2FUpD6q6YPmzvfhX5hfkfdAXWyDKe4ZLvcE69SjMrkdqGh2EeEhr1D",
  "key25": "4pD4aWSDLjtu9dnGr4aFHmGFfw4Mbd59fUCvQTJX6rc378883kV5VAD2VCig3V4M2nr6cWEmo5quNV3K49rMeqbt"
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
