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
    "4ZMEkVNoguCYVL8C2EmcJAhypcyXFPDZT52Xc9Sa5zRfhMe2Ci5dEuySRCfTaSZ6cSUddq7e6qH47yJkiqDfPT5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKtRyrDbg2X2SexeSgXEQ3T6hsgW8kGn6pnwBi6qC6ne1dg17QoMFGPVL25RUs9c6JkPVvTbY4tFMUoCSzj6TmF",
  "key1": "sg2ZhsfxDqoWc8xe63AJM2qBKQJhwchxskm79GCFKLLthV4WKdhqew87RWejPv74K2YfV9C3txMyL5kyd3qJGaG",
  "key2": "aVNxFxRn9U5q32ybC3DoBWqvCx8R4ysvzm95iv12mXezmsALnv8n4ZWVQiEQUmVSXCKpDVYREoEyb2YksXi15vD",
  "key3": "2YfP9MuPwJumyTLKYpHbR2yoKzoooJnGFGdb43ymaThMSgoNiNeY6AdpyAEWx13kXgrLR2vTwvvxSCkXdSfzcvq3",
  "key4": "2jqTgyrpcebCiu6otDRHvHtDrHqmGigNBiHb6PRCmNoqektMX8ts9UhFGMHZQTsxyPcNrdLygJMTWnzadoYFA1HP",
  "key5": "353Pg7c5cMC8vZ4z9nrUGR83n1PHRnXNaxEFAS1BA7rX8VQ76h2RSSC7dyKQrJxDKkbRwPnm2BN52L4GVu8Aw6jr",
  "key6": "5nMs3UgbYZA2FyzEkorrmHCWKEWir2cvijXuBuAWpT5deHRdmw6BUYgV5mqfC3HJb2u9DpvY7MJjxE6MnhuwZyX4",
  "key7": "2HDzH66mKDHkg97QVdupLPBJoB2dw4cvXmXxXRjXo5qP9nGw5poDrq35qSm8tXsDotvSZJfq2Hwh2UjpyBuRybRF",
  "key8": "26i2W1xSdzzHa6ajPwsPARUCSQBnwUpv5aCLuMJVSFZSNPbEhN3F3MFdNbb5vsYCqwuGyFhV4xTEAnQGnrcy3BKt",
  "key9": "3porgxf29DzY2TAbKP2HsK4njqENW6dFMTWK4rwpzoboovwGsC1Lj3LgqXXghnHeNvH1F1bwqCpDx4bnNPEb3Kre",
  "key10": "5Q5WXSkcM1VjZYpedkd2VYAX2wVNqqDooYSYWxXxt1oEFvbvqxNyhSEH4z698QqZ7qWkJMpRmaVCsxv343AzWFR1",
  "key11": "21n58eDCbfkxBhqMnwX45STDerT6FzhAcgHjqsSuoz7stZBpfq6SV6CD3rx3N1EPmsDN19Zx9BNBZHGZ87wgo1wP",
  "key12": "65Mr5Bze2PvAPGwxttw8ubuz9fUQzA6btnP5ri5k17caUAVPy8vVJoR8t3Yv1gS3vToZjysQ2WQQkMXb8BeicNd4",
  "key13": "2uiR4XCLpBP2tztFRTPVeFxcFZvWJgN2LXR5dhGqKSRsemPsnQ5S6Qg1o56vEBXNCYmShL3qns4LcvC79HJXdh9d",
  "key14": "47rM8zDfW6vN5BfbKcXFhsEJ8YridxotPjt2aK5qA9bnVvMPqK9MNjuBF52QKz5MWrCgFCc5xxUt9Pd6ZamVLMgg",
  "key15": "4btbfXBhFJpnxsJrr4ZC8dWNXECSCHMtGXsWUbrPr7wP34vmXfYgQHk7Hwv3jVKJ94uxizRyA54n5ZtDDMpyWBW6",
  "key16": "3PE5cfFAqzR6Cz8JbVcHrXYCm85tDpxCMJw6LSiTosEzB7CvFetgqrFfdShSMuJQ7wftTzY6SgEfch5XLgBqPRWB",
  "key17": "3qsXziHruRe8RJzzjzYiy5wYNrnsQicTEPXzbMfGxPXDQ92P5QWtsLyk4JVZ3WPS2qPsphiFf5RymuTh9psMFm7B",
  "key18": "5bYyaveUu4LEan6rtixyNC8AxBJhrKxNmcbCNCwa4Sj6KdB9hb4t1vfJ6GxexzM9m3y8VyQ3awNvKSdKuDdKusnr",
  "key19": "3CEvvpRtFLLUoeRH41mcL8KUgHZSwSYCDNDAVeL7gLYo3Uj5LR9DbumdFv7y78DGQRiSBaUorkbo9xfbukXQrvAX",
  "key20": "ab4XnPWuuNf1e1eDns6oQhhiXKXUk3m1YN9gQGitGDCDykTsbsb2EYRQydyB58AfNr7EmLVdYxpJCvQeDg2RGxp",
  "key21": "5J2Y638E1djRFzeqjUm9LX3FomrqjkPHAh8xTfLcXCDJmP6sDMJr5ZymdXViAUHMkTRZNsNmwR7ppKnEdKwMnXpa",
  "key22": "443ZvVrA83uKmUJBN9DdvE8WxKoqsgCFrn2ULdAE3VL81f7P9Fm1Xv5yuinvhioscy93UPqA7UxD2urmpPEUZuyf",
  "key23": "2ciBQaCmQy9di97sdGfmrEnSMVfn1btwMxaE3tmzLCkowoJrDeZmwReUD52SWMnF1CydARrYjx8vagKxdWm4FH2w",
  "key24": "3YtaFQT2X3xg4U4nTb4esjdgFBjDaMmEdakyULBFBxNxmpuZZRY1haNPm66b9CCF49uAUHv4corQ5CYntERmpBAu",
  "key25": "3FF22rLquXy5LLvELer5pBMHpAkf18JYqbZSJAJ6n4fzhA9vrDsvdEuK8fHEU6ZMpFFniDATmqkvXzqiDiDsdZqz",
  "key26": "58q3ML3RhqTW3x3THPUJ1fuEvkdRJSQbxut8ww5QbtjMoxz3urraSirCg7sLzioKG4S3Tx2xngJYKoQnAYr6EgFR",
  "key27": "2UtSauyVC2sqsWJFACvqhs4mkXDAvFW3kgdmy4BDXbZPyZphZ8L76maHafKJpXoUYkGKboNeW5NFyK1PBorTrwG3",
  "key28": "268TXZD6nC1fYBWvkkJJcgw91jBuH4xkTPMsmRcUEc97gkLjF8tE27atR4gLcmaACwHepaVb8bM1FU35PJLidrB2",
  "key29": "3nfkz9ZV3p8XWVjH479kqyeub1B9dLVsPvuN3ukHifz2RTr7BnVgqu4mPR5wQJEUBSdXQN4BxBLKAs2CR26TN8Vh",
  "key30": "3vv3xWY6jRvRsjrduwwMG93FHqiZCW6sMbsJYgyPt9LC4KqYWtJnqb45aC3rubiyWk5quMnCPQhfnYtLGUDdi867",
  "key31": "3qr9uCM89Bqu9CjPdFnPbSPzk1tYn3quzZL3SaPLkP3gLsmayX8RBe2Ax9i3HHa6YgL5jMmrW1t1C6RMPdCNZvty"
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
