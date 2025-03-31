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
    "LWRee52unCZVHoRjnCHdp3G8xz8v99L66SQ9B38f3my2T79sbv8kVshxeqdTT1qFa6zsWnjDgwFZcfS6ETJmc1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XdjS1AV4JfijsDKiS3stGia55bB4UmBFqUfajkBPGiEKLcrFcxGGmM5nexS65dC4ZZF8cVPwUfLaAiDE3EuEZRq",
  "key1": "4BJTCEc8nHP6AUKCTQaFnDnv6G6daMVx7HagTgjTcbgPeZw1yK1J4pAQHPxcaVhTwBKmUSUp3pY2DruJhZG53RfD",
  "key2": "5WzJKVEdR9Y1eQEKKyXwmaSMkSy3ohAtsaJcYY24mTXHQiud1iv3h924vi1KmrBhMhxctXAULxab59cNARKcPNaV",
  "key3": "45wo1Dk4xmQWJzTBdD31RccDYLurqCvr7ZexLLuzxiXy2VPQYycEXsa2aQWdA9CGbENzaW1qc9NEGQ6WiiL7KjyK",
  "key4": "2nF69eGa22VXdYfHNsqpSxzmd6sZLukADBPLejoAUFkn49zA8uES3hE3C7fRERdyonQrBQq5EJ1gF9yqR8DKT2fn",
  "key5": "564cdbKVxzJoFssRmqPNr3DLjcwkTrJ4xCeD9n1PASN8SCV2p4LA2oBZRDaxHuPf21QSvHvFehFvPHyiRWpfxmrH",
  "key6": "2BcgrUiff4jMy3kZnneRJ5jRAiTgzTAELbujjFbUpcQPLGuX6f6WkAcHJep3HWRvs69iXkffvBTVBsgFw9uXdTjd",
  "key7": "2NeTco2KYNezw5SRUEvXcZGqjrDaG8LcZHdBQZ34oMSLQzcW5G5z73DpVLbs6arLP9BixnKizK9rs5RyZguxMCB9",
  "key8": "45z3tgrePspXhZ7rcZHPPUf3HPCoSWQva4MRJ5QUuW6QtMUdhA98NB7srjauQVuByjFCReUjGgpABATCVSiDMKxD",
  "key9": "5rTeFvwZkGSqCrxHcnMixUzo1KPme6Q7ehzQ9RDYQe1GWKDBFAx6oYKP2Ld9Y6wr7dNZm7fgPSyjrunNFAgTHAYS",
  "key10": "511KRSXS7dbm9RaDbs33aXjYJ86oKgG1ZfRsBy9X1KnqVSof2i6iyRYwTT7yL3ZyZhaJS6bo9hkjtrBWeRSBbTCp",
  "key11": "5Q7Mgfbv7bh4Spa14YqefT4nwGkQYAhxuUNw37XkbGEgxnbPd2LXc3YayKK2XETbuPVcaRjK2dtSJpmGdcmATznZ",
  "key12": "4PryMeUqPQPTTkUNgJiVuoJ7kZ834ZiPwtANNy1hqKnzvxfPfZVz5aDDodaBuadFkdp6Pem2tBRQPTsoTQ6RCq93",
  "key13": "5fPn7z7AZQQTkfBWRVCjEcbXrvffNZK8x7skFW9sqWgDDh3HomCnPLbWVhAKDcMbBTQaf4Pa2icS2NvKBSe8tPNA",
  "key14": "3SuVHxPc1SpN3U8qKCeUXLcjTtGy3FsJk1JBMHuNLYBfAsSqZN8GyG4GadoxkRgu5yYgLX4SzQFng5kkPCUELKLr",
  "key15": "3oj8LuhpxUfRgV6hPKbVTmhb23zv6ydZuw1R5xjhpAzHNHcmTV4SwuCLfome3FZnMpBT8vZHzLiru6SX4pNdTw7r",
  "key16": "4Xcwkc1LEEzjaYqhu8YXUyKVWwRLdLsYyn3LLEMWyRUN4gJQMnA9LpBJMyZRKWoVsjVQQUQgPnx9mP7aPxHaMPC6",
  "key17": "5UnELZSYEey3gBE3wtXSyT7iXDFR31gaqjdtwi8Dc84pWH6yUfkur5PuwpEf4QSgBGB8nTD7MA7L582ikw7U9JFX",
  "key18": "44Q6o1c7qsJCCPiWN7Avq93MLiyTDxk5teQCMM3dGnYbVVy5sjJ8i1NgFnXWTVYUjPmJ3WtoDS3WoWfnYqkCY8LU",
  "key19": "5UKA1bz4jV5rKwcyQ5pEzs95qSCY6djFXmCLTFRxibPusKaZSrcr2nA38FkJ6oxVZTZFShXtt5LwgLK8CZUWfRuV",
  "key20": "23LWWqy3pf5m9KQa5xU9Rz4SRpRTmBywrv3aRZ2zYMeM18PEsWnJgs1B3p3HyPihmSzmgBT1w3J4qnLcMQjnStiA",
  "key21": "3RmNb2k6Hb4tFpLvPhuTMKDd3N8GByny2ZF4f8TkNgMfELfVxM3qVHsurLo4WVRaE2iHnWeK3jFYFGPLX75Jr865",
  "key22": "5FAwAMtx6j4CAoh45WPksmaRVrAwESxZY8nn2B26nAYX8dJfPf8pLBtKRZboE9adNsxAmBXDdwXkQEr31FH5PzV1",
  "key23": "4BJVJ1jbouWRXVPHnvSXj1niwp8KPFuDmy8yiBtRggGo374JRziDoVzFtQYCiqyfEfpj2PqNrWJshdNUZgFZpdAJ",
  "key24": "5m5ZbNdNS3k7Y8vsedU5LzL21DJxewv7XBZ2touaVhhbwjSazUM6BeTBjH21QAVzKTNX1MyDRXFZscba2wSNxjPM",
  "key25": "pmziT3q19zBrAoiF1zooQWzQPH3CRrUp7WtagSZurtJB1cNz5CrZkYBJTBQgKQiS98efvTazthYy8qLjgisJsip",
  "key26": "5agHjP3uRL4TkFdFwk1qS4JN1pb5boSe2DQrASnG5GQCfHhKD71H92ScGiPawqFphre6418X3DYLSgKAPZMAoaoM",
  "key27": "63PkqAk3GPFcLxTo6B9TkYpFvzb3Q2QWywXg1324mc2U7qWhhahX6QfKLtq5Z1YivCVNbDFpbVr6mraUd86VTVaW",
  "key28": "3i9bn3vEFCaCWLBg6Q7L6pE5KzxeVUbafZ7KcbHw5fwcxqdaQmZTxCdWfh1FQMBZPH3dx5cbqMB2xKJUSGYVa2vm",
  "key29": "3RLfgC9HYdhvcQSiBygbW7x8TbuRiXC8JTd7MzBM8UGU4o2pdcJiRztP4PMdHsMCpm2U3krwcyqncyhMRx1J5N3H",
  "key30": "3JtGo62nfrAfgca2XN3ipqdN4pYhu9waNWSadRUN4MAa5U8huc7PV8rrpcEqkVZnq4Q4Hvt1FRHpMXrQyKg5zVNU",
  "key31": "3Joi3anJPxXjXqek69zEUo59so3J3N9HRHZfMWcM1Tryv9SMBWg13tCRqvUK5CRwg7UnDxYRR6rH6fc23AFPxmAK",
  "key32": "2i91mfik6y8BoQ3wx29dxcMvD1NfWzUFcwLXN4TMCWTSCxtYGKmj1F61j3aSRjzjvSQC2TLFQe3KxJ9fi5hCZ87c",
  "key33": "2vBzskFHKYBx8QqhUZVSPGM3yn5uB6wfzox3kwazqm7mWb2twHDqeJGieoE5xKRDav45bRfiqG4CKNZMAF664tUg",
  "key34": "2Qgrq33TYqDaUx7bQ4Vscf63Dqnty4wBscgFatkUQ23tARm3uJGfcRudFkqGr16AdhEj2iCk4tjC3sXxBRizZ2aW",
  "key35": "4RBjJ6LAWmWYcrYvzJGxty8rfjQ3MKBdks1HS3zcSwzt5YvfVzcBdfnexZbUw271hXb6BuFUzBj3ruhctHTUhYJE",
  "key36": "3D736PdRxYeiNcZBsb2GXK5RWdBbbDBWWKDpiTGwVQhkjs45JQPnPd1EPSZicAN6eZ1jpwaQfocyAZnEGu8KAXRT",
  "key37": "56GvwJKTXoWUJvq9BdVhdExmyrbEzPYGjnbfNEkEMQEgrqmX3mwEeyoEA6H5WZsjiENhvzYebRMvY9dhs3AL2qZj"
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
