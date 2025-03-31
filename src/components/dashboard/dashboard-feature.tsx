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
    "2xjZ5kPD8LyS8ftZSo52qyrZMBHbJ2pTUp9VqRATKxGsR2btp5shRNDFaaeFHt2P1pJbj2BTvE32xYRh9KDYyXd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58GQiVuupcvSJRUTvNu7DnmA8xCvPfaQmFByHTFSuwBGTqNmpsL1fcmk36Xk978LpwKFSfG1zt7Wf9PRNMttN6iM",
  "key1": "2acZYZGCdmeUGDgxwXzK9udojwTFCmnER3Cf7sAWFnJU4x7dWS8i8Fz6yEERnLaNTa7KxQLE2n1TVQad9HYdUvBL",
  "key2": "2ck69GtRhamZbB6LYzv5uhD6zeTGdX8Lm7UhEjxk3HYR6utNYRVpkBd1ypnx546LkWeHCaTr63CUAxm9bVeMYLRV",
  "key3": "LDvFZLVEGzv9Qx3Y5Z55fnApReLGp7mpwLKZoqdFiTTXFDk22rYojyN7deYxKp7vDuMyKKxzxDwef22iCaLbRRJ",
  "key4": "5qeCWviX8sfsuxywoxUERTVp8yXVjErAnnH41HAMfRwxeuvoWfLBE1sA1NfCWatSEqFAp1YWTPhAAEfjZRncp2Mw",
  "key5": "4YtRSMrs98p3YHqvbPsRxFJ2SCRb1wFPWgWck8ChAiWDEiWcPWRVsDsyoCM1zVAQ4bxDg1ar3ZNTpf8GuRLhr3cN",
  "key6": "fRoSKPiEJg1E4GfuyhdrzsvihifkCF7HigECJdYzNyCHpJtQRnowHytZF4ocCWeTQvRnKooBbJQsDHq7tF3mc2X",
  "key7": "5sTd2NygJP9a2YQL6iyD96ZZcDm565waFPRpfZRtHo42zV9pjQG2LcEFzRWKAS3eMRtv57MMTSjCVZyrjHno3x5D",
  "key8": "3xEMpLXafkwnpYyFDsBp6bhpa7gzckoQFpdn5F1b5FhjE5upGgiSvsVutoQWtnbKa47NcEWsSJ3oh8gtPugCFdF9",
  "key9": "24TfuCnA5AN3RnWUfoGqB22VdXiRfm4GTwWZJFsoTrT4cccmbAeUN9E9pak69PbWthQo768F9hiTX6MdjCeRVxEc",
  "key10": "4ojKVr8YrK9nbMfSzdYaqMrePM9qFckhwUYsNYG54inYUVJWC1fjXXxAoGT91gjjeEbFjB6CVPBuUfbuwrcXovZf",
  "key11": "4v7RgqqUFyAPkvfPBhirxf3DSJrufa2aRAqrbgSvq8u1gQneSz1BQKzguwhrWFNtPUaYG6tSfcyc2uY15z36RirM",
  "key12": "qKoU4Ua5xxBVYRJcdEbEESyrjjxXNZhXrmouxifkFKj4jvrw9MnY6gp7HGPdqGX3StazcQiBUsSNtxzGyqfyK2x",
  "key13": "5BiRuoSAHf2FTR8tsqrANoa8Jp6jBSX5jhz5oGiQrj38za2iWXEfdTZPsBZxUPsybXM3Lu6ZRvw3cJwUhzRCpR4P",
  "key14": "1BpFrDfP2yGjuKjdBQntwWk9vTpWqC7Hv2y6QJQPp1Lff4mBh1mXJUD5nA6yTwxdha9QBNtHtMpf7A4VZZyuE6y",
  "key15": "4h8Qzxt9FagcBmdeAUvZPaVbjUjgfk933MwNSgVgXXyzZRRcN9vuhcx3VLx2nxrdeWbqSgCst2gjg5E3aiphP244",
  "key16": "5tBQMCFsz5KiRMpMJJdf2ZQjx3jVvPS4GYwcBAviDKyjGgPwBWY6fwJ8TbACZ1JDANVkFroiR4qS1QY3GNH3FXEf",
  "key17": "62gAr9rcvDqCgYXgGRBA3vaSnUdiW5mbmc75zpqgCdoJTXicpurSJaHWeVxMeP3dyL27S4eE4CjWRXjzZw5uHn12",
  "key18": "pmz98czBU4vbnpewx9X2UaCNfZS2DaXfo35X1XEEZrGm5NVzeqseqGCfV5SmEoXXu8LugACCamse9wB4kqjDL5M",
  "key19": "E4bsNYwYj8GViHSCaKEs1RucbJkgpeHEm2rDAsr6ZGi6ghSyuCJoZTBt2QBC3Ui1RaLS3Nmuiv3ya89oSXi1Ee3",
  "key20": "3dDJfp8BY9PmVzuuKAUXVLUQX58EfzeoAzpiHWL4ddJ1JmxBzB3VLQtXH78uNZdRwMy8JbVhWSMUtaYaLibrDZZp",
  "key21": "2o4asybZoCUNSBaPgjf87NJGw1pq1CNELj3WkhGEfb55oSPsoPAmRsJQvGGP5NgNZjEWhdeKGkG9Zo9mixJsXzWB",
  "key22": "5vppRciakdMdxM9pqMDLLVMCURZnWdc3Hdm2Mbou63k2GPEC9q9PwPe8Ey4dyFW9HzMx1wCXT4xT7VRXyErTXaF8",
  "key23": "5tfmopt9qZnGEeLRNE3amyega7ZZmzrY2jXVhw8Y8REtbLtKBJWGbcBKe9vyWfZsgTUUMZZktq4BeXzjZzbEBvKU",
  "key24": "j78pFBLU6QoY8R6iSVaYHczFfT14XEbCvBYoMm4p7ruED9rv1TC6Yo39aFbVz26XFQds4VN8vdeG35JWd9v3x4a",
  "key25": "2iuji36vXP1qh6HPAD4y8pVnTYpiQjQRHsnTLsPSquJbecnYnWVtus1yBj33PAsfXZVtzFKmadSxfk4fSsq1LcH3",
  "key26": "4EMndMRH1bgZjvPWnHM2oxK3hfmyjiNzmDWgg5xepjPMsq8YLpimHNVR8nLeP428jExbMeDgVhDE1NRRTUd4Dyhx",
  "key27": "98NZfNUqU5uH41kjTMoqM1tVbsj6DnUjxax4eodWmBj98iTzWCD9nvrjrCvzgdhVmxnQP3cX94wJ2Sgsjwh5d18",
  "key28": "2Y1fsHkCM5umPnzrH147xgMyPuxF8P1P9VeHNH8yPYhjbxY9hjsvp5m24dRhxjaP14Yqd4A61npnnZ9Sq3dZ1PBC"
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
