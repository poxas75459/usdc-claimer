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
    "2ivxJu9GW31cnxQKtuM5XcaAnReB3nsxCjaQtnwraL7uKYdY7zyLK3frNomVGKeNnAG66YZ7pjWz7eDSToRmRvQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMtqms2eQtsF93eSZgLENxXXnV6KZkNpUvjus1icBX4L8QTt5JFtTVTbvevJktVQB2SbPG7oPPMxSsGcGpgANVr",
  "key1": "3y2adUT7Jx2BtmDPYJhvA33vi9XFPePaaV2rnfka8qu5ZHYNzRrMGhus2beZgZuvWJgzV7MMFtL9SbD7a53zLuiC",
  "key2": "2K5X8FGwA8d2nCEQVbwoypxXyPTuxET4FKkboVcvFPMvDRFBnjnH9xS1mmdyPG2YbEEfazF5dqjoeLsJbztLYDvP",
  "key3": "5AB9jLdwcPgWtKpbsAyL8VVvo1q11CP2XHWENFGXyow51mNEQd3njqoMTrz9jkvw7sDxhmZB2Pm43azKMFL56NE3",
  "key4": "x8CCMEk6Kb97Avq1xHnsVQoceH1iLQjnP4jYvaq4XHhNcjZSZvcHqLKpFYK2tHSpkVzPtCQzB3iqorBeQ6j8333",
  "key5": "2SAPrswMahjgALurHxPGinVB2JuuMAvZqZEZASJWBG7R6iCQ8s5J2abV7cjQTvvu2oYVEPqJuRuQP6P3i2PPn6ht",
  "key6": "5xMnyjYBM7ofYKfZT2kTLMzn6pqncSuf2z8pWv1Cw6pc2iKD9tPmTpwrNe8NrwpasgHgXhycRuiJggVqiF4spBw7",
  "key7": "3u5DZtXY2ebf2jC4UQDeEwy6HuFXKnvQt3aPqaqrgVZHCsC4QfLAByAMdWzYLTD7nCs2BQHU7PKngirbuZkHak2L",
  "key8": "4KXVfBR6oFikwvcHHodUAzUgukydVk1HzXtTRrTuTZrnHCsCvPrefEvXJy8qzgTTG8dGBS8HaSqcQGFdanU1aG9f",
  "key9": "n1ij8Uf8vBKG1KHabb1rKXU7MNZym6SNbyR6LFyQNwAKdc98wn6J4xsci8NwzNNGDuK2xJ5yUtSoRJMSYR6FFor",
  "key10": "2brPdqBhsopaXHCPBrQmLiF7sWorLjZbG8ggL9oVtR5Rp8P2aGFGYLzkLrJcofjHDxpBhHzjw73tx6jimMg6zcNA",
  "key11": "5DJymFpyRkAj1P2roMKnNnQQsmJ3aSGF6D6t7Jjr5UwRrQjLi9RxkV2VTAnpM21PUJFjctud64528Fq5QRSrt3Md",
  "key12": "4s374r4HTrCuJVGgHvKe3mueKQS35NycVxoQMuGD7NCJbN6RZvvYhNhwzJjoNdjQALxYnANL3WJveFQrv1DapbZa",
  "key13": "unUwBQmzVS9SMrZqyZEsThjHRu7bTiN4APndcuHVmyCtY6aDeNd3dE69wN37gxDc4SkoagPxVFzD4jRbi3HzByR",
  "key14": "3fFUoP2hxmVtFBqpDbaNU9VcHjdSpatd9W6tECc8Tn4Xnx8xdfQmrXBS3N7RujjrLVj7Zb4N4BP9CNzgtHaTkc8E",
  "key15": "2zGMJz4462VgdJEBpAGg3rGzuno6P4BKqTTnnRBrNGBKEqLJ3x1LqJoEv5evVfHD5bBHFHiQg3k1ViGhBm4wQLYS",
  "key16": "4zg7eGNRSjKZdS35etV287nRSPCcyjozTNMfuu94MjNqAG6L2o99mJTLDUfj67mW3patAKtdH8CEekk4LgWp8jDT",
  "key17": "5buy2Xe8Y5ZSQzC3dbaRdDZAw9UweZbvT17EkocKDJiK9UUreMF4kCL83wMyoK7DkVd8yWrZ38PwBzWmPsbuQ5pq",
  "key18": "4Xxe1GLDCg6UV1WBSnEwUY8EDfiqwsq9gBcWucq7N6x3QyZmK3vSpSE6Uo6PGJxj4cMZ4WQ1bt7HY3EtJkR1WuY5",
  "key19": "5TNNorbMMMyg5dHuNB4QJTnz4tSqJeWJgGV8twWcxZY2b2AogyHiv9ucSuqK8imi238B9qS5pki82n5vDCwMASyD",
  "key20": "2SyyQoAvR2F9awyvMoM3nUkJbKzatwVZDhdjdUZTAhpbk9nZ2iyUkj9xfLmmBeZ97AXGk3Ls1CFADQozC2jesyS5",
  "key21": "5gAnHKbHGczUBHn8VWcYcoZeaBpnYtuPzLzhkNxCufijwHnoiQM4t4fKgAf6wnkbW6GbJXRPFDYteTDveLH7f61P",
  "key22": "3wWJJUzQzW2tiq8p6x54mF3r9FnEhGc7iWzb8QwhNAsQfKgU6TJZW1b2XNnSbZnY6VuXr3ZAiJgQ2fXAmGQgm9C8",
  "key23": "5g2ArKYBoBBzHVZkgKTPVmrTU5T5NCswrmVjqCaHKmAcp7Nmju5SZ135CnBUGfRVDBNRzCx4nthMHRrnRE45zP3G",
  "key24": "3TcYURh4tjQZR6VyD9D3VeSLx4ABBnqWuekiMWqFLaw5FA3Tkz4YUgvt9tUPgtVunTp6GoiNdDYzQPMxpfMyzoKH",
  "key25": "43BWTAWLNbfhG7Y3Z1WQE8cPRWFAPCBcdgs5QwfTJTEA2t62MKAMeHFWPgxidJtowzEMgxPQ4CryxbE8fvYTgJ1j",
  "key26": "5DtF5yrJoAo56ubjxAzb78nnVvBQn3P13vhUeyQ3fXCcF8N75rxohKMPhqaNNxLgjA2j7yP2VfhxRmumeuSx1xws",
  "key27": "5KXgRcYZmYJRn2X3KrDPzx7ofXZ1SPjGbdCr3jr1bvHLs18F4TMqLaUpxPh4cwRQtr2eNmhvkaAZQ6CLPRKn8xkv",
  "key28": "5WG9gWTAVrzGUsNDiqcnacjtvyCtbD3XxR3TYQCFHYv1wU2GpedyUqhfXH43Tgy9WbbGAjLH6UPLqbfJGcWofyeS",
  "key29": "2cKjL8ZWtPovixTs5Do6a6JnBPeZrMNU2STqXjTB33iBmwHtci6aHYTk12oyqYnDLJdgTpzcn5tpAG4PxHKkkLDj",
  "key30": "2m1tVLttMGmouBtkZWm9Fr2emtsUwgYCoz61FV28xN7o3CeHaGgK2RHJPFYAvpUAijjTzQR2tFxXTe4dKc7cRqhC",
  "key31": "4BookR4ctRjJ3Ym9V9pCJ2eFR7AvqWYrWKyNgGkqwxzRexWrYt2MxFtd5CNEhpFxjdJYq15mVBGQG12u5rKReBEE",
  "key32": "4v2oHzBFXtkm7VLZDP5em14r97HiTrfnHZQVgLkjqp3Yty1HSvMAV5R9Qog31hJX7J2W5S2W7AGaP32d3D3UxJsF"
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
