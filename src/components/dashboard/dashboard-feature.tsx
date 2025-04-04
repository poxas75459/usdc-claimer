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
    "2awLJvKSwnXUkvDSb64GAFxLQdnsnPoyfKckguy3rs79BoZcdgmebQhE9RqA52YuFpdGYHQbVPrdMA7oNo6dreAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMwAQ1ZnMov7WxACqQf1xzehEQZxLXi3bqZYTPdy8jHapS5b8kKL79qdR84y2uPFdUMPVJCU9HRowyTcaYZJ1vZ",
  "key1": "3Ftkj7sDi9GCWHB1myvMfomh58NnFwSbPqnCHCLSfrZ88k2jbanx86bQwVv2zmepyX48ALEdu2PDtvNSvpWC2ec",
  "key2": "2oTrirJTdCAMkDGWZhAc5cwaUUyZTdDyfin7RHxLGbRN7x2FYcu8he1oPX3SD2e7T4nhaZ2JqwRqRWBhpz8mAYDv",
  "key3": "2bi9CMHF5q4NG8ebjmH8oKjntr2gWAzsjhPERc9yxDdipJTdXtv2YahpCfP2or3j6RjEvp1GLxPbYrgrcqNPefwr",
  "key4": "2nifaUq2Hz3wV6ymWLdqV8tqWv7txsvzHxkFTCzsKpMCC8Pqn57khy1VYJqyu85BMRURhEzTodKkUo3HCdFMJcr4",
  "key5": "5An1Zqu59r7gJ8jLsHHPfjCxs5TBJ2e8HK3Dpevkhir6qZTeX73YTQLouZaiqR2quWC5sTSqrHusnRLXXhAwjzSc",
  "key6": "HGGsjkp7REwa6EjYcuQyb51erN5PQRTNyLaMGDz4HUbw9wkPQ9VSs6hZ45rDLvQTXt3SqrMfrgfQoveoa28yjQW",
  "key7": "3dSUxbeMUtQmW6Vn74bfmbfExteNisoPbAuwYam5PRXByRdT9XN6a5xzTwPnG4B9NWJ7hCSr8sFrV7mafdFivHxV",
  "key8": "2woR5vnXrCyuS9FE8zUypw51Y2EMmGhRxCsVXYQ69o5z4yzAZRLHJbttTcYHNP1eN94UGdatuyAjgWWsLSudEPTQ",
  "key9": "5no2hFkgycXJXcxBTkeum9AnrgfTe36QCBL1BMJakhAhfnraRCqefeqciGE5PSQWxHZ18ALPiGp1Jn3ZgkGNXC6v",
  "key10": "5JTU6rH9FK9wbjncCtUxn4cfXaKqaSDqa857296Uiyd4xjHW3upMXv7ux8wBQG298G9wYMSAXY5ZTJz1DX5XPqgP",
  "key11": "mj8RoRJDTEYay5nxie1gXRDoBEMVXUJfPgooHHZaoPVf1mpS5RaDYe2ZJap7of13SQ8bfBFL325kZ4n9R5YsFiY",
  "key12": "3dRN2CnimBnzQeYAprnAEMcrYK8voUDSCoMgyGX3G4Kt9kvPCXGGbVr3qkmLjU8qsYaDG3m2SSMvbVpuDjWZoi5",
  "key13": "5YKqiARXjDg8Cdr1cBkLD89aymfB75KgniLqXiJ7FjvKawnKWudLtBoL99UNg6GgKnpxWELDaSKpDoYu9n1SETrk",
  "key14": "4Wgn8ANypnSn11LUiTy3HQjyRUu3LWpVDxYpxdbpdayeH8szsxp5epUcArPLQnikuMEQvMjtAiqAjdq1WPJAyShR",
  "key15": "q2rtxPV41pt5wpiLjqoF2SqHV2NdMQAuGVDibHAZ9Gzw1qkVoeUEYtv5andCZH4VDCfe8uQPvsC2LTvRbExVcHe",
  "key16": "4KLCShpS4yqTWS3gyj48qZaC53C3AU9BRfFe1yQ9gsXUbttvtFiMNCqxCFKN58Si1Dgt1TwSfHZinEf9riNMULbd",
  "key17": "2b9TrWjULomR1VLpPHFwcRukaEoHZQRyfkZWPNDSW7KLgGvQFSzHJUausJajdx4aKrf2e1u54fqvCFH9gME83ZyF",
  "key18": "y2kzAFnMKn6nJLQAjJkAy3pVUways6cvPfc2MGFxxp7x2EWnGHueHnnrBBBGUwmqHiCEESugAx4wnLGARAwEEjL",
  "key19": "2YXY5MLXsmvpNNbtSSjEjEZdE1XSMavzVkSgZEBXqREGeGg47SAzvQYojuTyD4qC7qbWBZVamov5wKkXHFYNTLmQ",
  "key20": "4Agm2ow2d4Thr6i2C48wpsJpTxnjVruWRX3jsnDh8AunqzXrVuJgHnxYq16W43pMrxkUXyhd8oKuxcBz1YpfAkJZ",
  "key21": "3HBn1JSpgjAZygeTCSLpgi1cE2b2LSf36bYmPESRNRXovyPcdnjmrnDrGBCiGU9CwYKdUqNL4S6TpGnqhYcwWZ8x",
  "key22": "5PkRAdGAL3af6vNWgqqiDo2q9CxZPretEJmiNcz6PP28vprec47mNZhLt3GsQGPx78LE382hXxX1rg9pRcRi4Ji9",
  "key23": "34WXiXh5eoZFMaoR4UgMTFVkab5m3c15yYdYi6duGMZ3E4TCaTVcYN2nN6Qvq5uE7VtNrxeUeC996VSDrUzXmxUw",
  "key24": "37HMAPh2YmAVnFz9XgQwwaj6ep2TNeLZZnGFBVCBfrUXJvM9uvfhZf19oQBmkvvBWsZcah3Gh24xXFS868N9Fzrq",
  "key25": "G7r1EBuJW7sraG2i9yiUCNDSYsY6TEVSywoRyehRKrrSuBWBrNvZtgiv1fZubjBvtneEdv17R64FjiXVTy1We7o",
  "key26": "4QHFGZGX3tB6HErVMJ6qfvjzFxwkyvXVxb93vu9rx4SG6pLmSyQKkxawkjhhsNP8dKRh3dYN5U4NL6uPvpzvJtYi",
  "key27": "3iznLSktNcHBt8hFGsmTrvhM4eZPPZriqZqH9feYsquLxQJTsgJKuTnP1kPiNhAz2vz3oCHmF9LMZXgW2yUusemi",
  "key28": "VQbUHb2F1z1878UHSAbq7TSbWgPH8mYXGRiz5kN6k5crXhozABZ9iuRzNejtmjkHvACXDqvKjhmUWRtqdFYjiEv"
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
