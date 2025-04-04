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
    "3LJVNJ7WRddn6bvfNHUdYNUWDoS9sdcbW3iw6EW299qUj8r9HXkujFwK9jeHyRuai7S8YuYEHVGoysryTkCJxVkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFi8pDoTpxGqAAGWkMCGaj6NZfHzh5WyhEUesAKsPvysvryrS9nU316VaceT2UPz5mTG7AQzehAUp5Bnbv1opJ4",
  "key1": "44RdxDygKg5vwXeQkBmruqTL9e9r3duiSD9NDddXXcmRcMuBKFhsJinW2uCRronMybpLV3EqzkZYK3i9cLeemsXu",
  "key2": "3p2Qyi9zbD2Et6u6FRWdtYSA2DrSwcA5ztppPV8ocHJCsfonpXRBa8uuU4m1Kw2jsobhvz1AjTqU9EsprTKtJAdf",
  "key3": "2W3c58iECv5VtuMMzF1okyLwKtWSFqkQm6k7XitTCV9B3EMyPzMQLevEKQAhUN7PPkNPB9Uj8vtVSVRUKyWLNcUX",
  "key4": "2kCtEG8LKwQYBNUrVe9mjnidHkH6rjcW3jRNUZgJoFE6z1HG8cMrsxh6krzntiazogjbZgpv7JWk6ecXaZEoK2BN",
  "key5": "4xZ9mE4hMLoA1tp7iHawTmtFHhRXEGUEcwrFQp3bqo1JA5oZ2k7rE26yRLm6UCN4vcHpT5Ui2rBEoh7BiXdPv8TD",
  "key6": "2udT46HRSV9hKbeEuLu4QEpK2GBYY5Fy8XDUhpLNoLe9dx6YeorcPuxybumDFiEpR49CQbofK3UGas4LshtK1JK4",
  "key7": "24crvpiJ8zd5qKgzMHibcegeDpxi6ouYT9YH5mtPnMt4xTXU2fdxAH6cyXcEBikN9wPYrHf2YfQ7ii6knf6xf3p9",
  "key8": "5LDZFtm9KZ59NqpTGbyCRpSFYDZwJd2hf8xkptGT7K2UwoqHrQmk3cbFq1yXdUcgTBRmgvHqbU3vU6wAEw2mtZyd",
  "key9": "44kBptWbhUPkh5MP5uNvCpRFHSsPCM2rPUyww1VT1Q4g1sX788DpVuwCW9KzakjCmoEcoGaaEbZdAD5Juo8v8Nj6",
  "key10": "57ZJyt48W5hqtq1fuz9Xp5utoRVBT5kT6FKSqqPVw3C8zfnJVUgigXxUfCNhFFERKwkp7k5R5JFzeZK9M8SEHKQb",
  "key11": "4onrJAYQKqHCUiPCzP3W7SVw6dZYHNYr6Q1NqyNeGUMaumJWfXVqowTxPqbFTeEHfGroyjRaztdmtnTTnGjNSSrj",
  "key12": "3JwwaGWaK6qMWF62YtaWKQxLXRW5JvZVwSjEpw5exfgEA2XiwexfLUCqVA3xt9CLYVb7CviNbGZbxrFcKDrao5qU",
  "key13": "281KvYewDNTt498PyApmxTMztpd1vvVBamsZEcR4qyfKS8LShm8VEgihRswmU8JaVMskor68SVo5wTSHKyJ5vd5Z",
  "key14": "5gyEmCS9PY98qBjuXVvkaPSxuzvxkFomycj4tVqRzF8L9wRbFWgqJc2jZxFdNkfkKyWnbcJRMYckdjtfyEq6wGbR",
  "key15": "63rWWg48rMimedGtHaWLkge7Ep1erporMdAi74zkk1fUHkH1JVAUo9ESQUyaqTRPX4JA6zTALt5cL9eKnWjpJ77n",
  "key16": "5oB5NmgWKyWc9jQp3PiPgQjiMzY12xGdgPf8gJEsCVDXTgGJkZFvH6KEEbXrCTh9GTgS5qYBDPGmcooQLTR14GXY",
  "key17": "39bHCj7jHExjFyvgqRFhJesB2jU57AQq1weoVWYDAuGXArtvWQLyaEEXeBDyvALJAhSC4eLsQz93wLxFwJbuX17T",
  "key18": "4UeYHhbRPsfpV6b9iUoLCThMPSuWDfRhPksXkiHws3ekrgpkqEXGD3DZFhRB1UDU3ygZ4HAAcTWM3q5kkRjmf3fe",
  "key19": "5ok4CVhQxguU2ZPg3TmR83ERdUZd2RCjbTSkY5ML39uQwrA6SowaWy28R2mdbWUhwQ2TfiSMCMHg2QoV95SfJSy2",
  "key20": "fai4PFzFmTnZAn2Q8TrjQjjQUc3ZFpz1nmyxcY9rwgJ6duM2uesfM4PqYZD68Qbtn6pqCtbt3iXJzuLZuRZdnK4",
  "key21": "4Gg3mwsz1H5AumJBwmWJJxbBSxTKX7hzDtJtPTbC4fWDBTZaV8SK7cwJHBa3i1rRVDXvXZ9gEr3MjFnP87NW2MNQ",
  "key22": "4ypkhMfjF1cLpqopegPtdiKYcKXaSbYYRfGMbFZykARrEWmTuSeymZhYkncaZ2xX9gsC2bg6M8pp5VpKhtb1HQr7",
  "key23": "3LbgFQzVjFzfo6eExxeXRK2XhhXWPapXEw9NXmEKcv9cLiWuREs1b9RDxz1bxQ7mKGrtkaUirHcFdXbpggN1gMRi",
  "key24": "4wMyWdJ8g1ugunFmCMiZp1dfwbeYJMUrgc26yTwx335fhaKVwC2G2Ge7NPAFfKZWsKPaRWbZTa6JvpS1VDricBhS",
  "key25": "45Lse2nyZ8iC4xbmgs5rDuEkC4j4mgSWCibQU4YyNP9b9or1bSKLZ84BGTHw8r3L1E3AqWS6NsL3HCZKrBmMgGxM",
  "key26": "5vSqwWv3E33Xy8bwNVDEoT1YRW2XUfHn2sLK8MC1JWutv24n8y6pc36oQxFMhbYSp3egPZe47hBdJBTm3BFarTZS",
  "key27": "5U8rBaeAD1h5DsgjzdXP4sXcSzqDUgNA7uoNSoy7kMbzTZwSDNgxR7Rpo8N44LbQvBadti7ZExFT6BQJUPj4u8rP"
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
