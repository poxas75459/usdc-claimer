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
    "5sBMLBc7fQanJqN6LZ78xXpUWWPwr9vUAF7imN7T4zWcNMQeqtcMqk2LuXeX1uMLywb1RFP4nNFCaEGuzXiUJnPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pJHCvNz6fHAoFio2YmJTRit6TCrF4NtuBd9iXfamQrznkuwF6CXauiJRGCsrDUAQx4wfD1yBLV5J4ZyqeYZUb4",
  "key1": "qYn4Wn8ux2SKoV9aCVUcEzKd77YAX56A9E65oskBJPJfsoD5dRrJpGyWqa31iq1TkSfwYMeBc2RXuPnihH95FGR",
  "key2": "64oNxkQDWqQa84owXYPEkYX7YshgiR9ZJnchchrM3MQAnZLeZma5QVvEDQXsiWDC8s42gEssioxCeEBEc4NxNdwB",
  "key3": "5ukThGhipoSWmvj3PjAzFPGM8scL2UPibUHHi9S9zs4uwmcU2SXaUyz33nrbKG1LbYBrHRpMFBsKjyVtcTjGriex",
  "key4": "3dbkNMNE7EbggSpCLPjzS4VXqzrKaNcwXN1X1aQAWhbuVsC9ABXuSTGpf5eZsrAAJ6N3GLNbMPhLKNe8CZdnPC82",
  "key5": "22186KhdJNBZR7h7dMxVQ7cxb77oMyY7kr5HgQgSe9u9k7siz4bTbDwqRMugJHXHVnfZneHSHvDrMonR2j11WMwu",
  "key6": "3Wxqs57M8WjyeVJrzbdVtqeXSU5gP9A8hUjnQdvZ4bmrLFvjVMEXYRxV2PjNcroFGa3gJ2NyS5qERbseFfBunEJA",
  "key7": "Ap3iPnSZQLNv7Ch9cKM1bdEHyFBGa5r8XZro3BnuAzddKU7mtCAJviJJnHGzWosgjDFjJvytm1XJYBMiLWNdXFJ",
  "key8": "4m4zVih2rFxH2jadybJybFPgH1YyMn5ew2PBuSGZ5Vds7fYjuZAWEhuxt54x7gHjQgPbu23NonPQYztUVrTkM6j5",
  "key9": "2V1PZ3JWQGLD8DywuSmvU4jnjuBWDqNeid6ohTRBgJUxMEMJbN53E7EHpD8keK7GVycQANSwULYFFS8aMCjZFvX6",
  "key10": "3Gn9R8jAVis7HTZFGGvj6ME62gvrP7cWgn6vMdQmXNgLFiE2p6n28tZd6nZcTRqXosvts3Nju2XGtYt4jZJv4SbP",
  "key11": "2LYogvyVt8uQ8fohuxptXW8DAhaZuwxosiy4rG21SbdkkEQVucyhgBhR1f4dRw4MNaiubWBVPyifWUp51KfcTyPe",
  "key12": "79HUmxhUzAr3E1PSSHGcjtPdgFF59kUysGf7egPJxrt933wsARKoqtCKLG2668Lb5fQLGw1v8Sq2fDpQrX89Deg",
  "key13": "4mMPwZf5bcHo39BATFit89U99GeGMxCmBwCZBvfN8TYcf5h363bJdLDfRJpeFmHjycaeJkgMdEQu3Ux7GmKK54cD",
  "key14": "5FXQv1abX47C4cPd9SnEu5vzoH63T7knZ7Ev12Q3hmUKhD6Q6yz3q76QncAiWA5hwYfdoCYtQfCxEzqKP5bZ8yhs",
  "key15": "2gYhEDBybUW62ayP9VgcCXH5bzei3Btd92T8Y61RqsEziWUeGTQQ3cX4WDYxPcyvLNKYnGfqUX1s13LmRkC97eDh",
  "key16": "2t9BPUebeTqLeNYgu1A3aKLo3Ga83ZHJUj7oYFZAQbto9ZkgkttWxcLrZhqZtSP8VRdBT51jq6Cbqfnkys3k3QyR",
  "key17": "2ACzLBw1APbMYxaL6qyHXseq4dxxB9qS3M6dfuNPUokvoKmndVG35w4e8K1ecNyVXKYuCWX3nc3GEgasHFvNHzuA",
  "key18": "fbD6z7twihw2p1iq3VAexkh3CxXiPBJToMvoh76SWTJiR6kjow7bFV7RPmA7UDvojGARJvyGR6g1iz6YDS5dp9i",
  "key19": "uMdBgZ55ATR8THVrb2MUMwL7iDVFzko4h1nUnh8JZUpJ1Bb4gJMj38uqLYYiWxducnYUxwaGa6zxRFARQpAGzv1",
  "key20": "3UutffZhbmRd73LpAE9gCLQ7zKR4RcRehCY6TvwquD9PzVudBCd9Sv2E8iGiJXLj8yugQiZdTDBGxyg4eW4sXeig",
  "key21": "29JrmbcZ3Ae3MjgZFTgGKbBsTdvke1uxMXKHw1NJsbvYxHztXAseWjPmRaoBdEMa7JciaxuLz3N4EM6fNLdQAoXR",
  "key22": "48Dsbb66n9xsBczjgPYTKamqaDLwNWNaTGEqNDUvViHtUh4FALaUoh5VfbgjXRPBiWyYWofVmVKUvSEYCzq7KENq",
  "key23": "3kVQZ8yLSQwiQWkbyxtNh57pt1QQoMaXGdU48sv7xccTpuYbeGWwtoAHsHWk68qH7fPTQuZZfmeMZB8mWTXxiRbE",
  "key24": "28eWs3KNAh2wYL8KuxeKH8ojbypKhtiHKhD37SBkDrDhsogkRyLPQ1VeSUtdbjGkDeodHZawwoNjMcWXiAbKqdxh",
  "key25": "2uULLq6CdxzFvo75ULSVTcVoKHG7Sxci1dRYa7STcwLRyJJksR6C9dgzRnWVRJkSC2PsUJQM75FMYHLobaCwEwVN",
  "key26": "3bRRTnBxby7bJqGKmhfpxULBwxiPD53kKPrroYsUBJJGRSp8FYSo2iuRnPsNKeXen6UEMzKyobg5b8uX7YJ3dTk6",
  "key27": "rMRS8yz3bVZq46vp1YjMg9oh6VQPBrp4v2nSdz7MdPduEu8ANkmid69RQJa8Jpm887VVugmmH27Cgyxbtuxq3tm"
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
