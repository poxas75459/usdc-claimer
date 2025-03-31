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
    "2HgngSbQjsXSNcawzPiXUqWGDsQCcyWGJbXN7ufGePt8mmcMGiATFSSg8EFe6iDyJAC6GPKCb2vhn7cZnBCd6mgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHBdnok5EQDdQaBmeGwqZaMW6b6D8hKhtbyMojocs255fbLasDEPzmW8n8zUuuSKaW5SZMmEPdwba8Pf9yDuxBx",
  "key1": "2caEfvYeUah3Q2WroevScX4uBa3G6rSSdpd1EvnWpN3AM3c4bBwf16kq1BCNaKUq7R95FFmSpC8G5nP2aUJNQB8m",
  "key2": "5cgvgRPk3bffFm5SgReNHa3qfWFaNG81VyzQFLq8qVAYg5jNrCgxdumHmovmqrJVHye8A4TQX2ptDg4dfR1hxvVv",
  "key3": "2VsH3Tu4SzwD9KYuHcpeX41PFT667TqneSvM86BW24QLFT7DSVubvTc2Ew2ghEEZj2MKEtdxqBdEJqVS1DvAsVCt",
  "key4": "2NffgUamUMCPPUD1Z7S1FUF99N25tLPREcEMHkCTL93Tq6AqpSjNuxq1aX4Wdw6QscKuBFBgwEFxdcmw7FC9HQwo",
  "key5": "2dnxKsTBjKeJ5P1QxAiX1hnR9JYwbaJFjHWP78LBc4jq13gAKoykdDArxY1qC6ajJLyuTfiKoc8Eszy5wtpHLm9K",
  "key6": "5NixtD95k3mYVbc4zs98xuoGRRxGf27ReqxKqpZi5Rzv1hR4EwF3BjHJ37Y1LeRkC7s4mSA7j85vczbL6pG6cQh3",
  "key7": "39modXG3gzVNtxp6QDZYqQTpmjJetgvRKiA1ev9SoYssQapAtrYb8mjVwGaBF9HCwFUejEHLCkGAujZMay9pDXP",
  "key8": "25sXkmNBAyVcAAD4FP9Wirj8oniJbRgcnXp8kAnNt97tDM4taFP4D67PyxU1f46yiA2q7tRa2k7Rn5sVra6JMEuC",
  "key9": "5rDKpnpFFhrVvf2CRGLYck7evG1CJJqn3jNi9LYk7LyNcCFC7BvNoHtz5bqTpGfzZ4JdzfKd9dUwuarNLdkNW5AA",
  "key10": "23KfguVgLQUzwKuciSXc11HuMiGbsY828LdxGztcBwVKhXfFiknx6YRkb8sYGfLz6SaR19LmRvFRtXyF5c4zZVtF",
  "key11": "7gwfBDHzrmSMRQfW6BWLpATHPuqpF2D5eJfxQSmqL2SqH5RHF5VsQ7ZEvfU4oipfaZr2WcjKqAbtULD1Pz9ucd4",
  "key12": "nQfz3EMQqWfCGLNw3yXyr9nmoXaGaur6krHGb8FrbuTjr5EcrsxyT65tpH4T3fYMv1TwJoKmWTbavGGHt7fa4VS",
  "key13": "2QrAgqUTxcTdFG4aHQSMdj7L1xPPMamcuBmfsKAsTdK9CbxBSVRtRwSfHCPKaNeFZhSReRcdPtT1LfWZmaXqY6Ba",
  "key14": "2q1v3VsX7fPQFaPq7Z2zo4NqCdVSkKzishztbFtbAgUzYZ3CAvSCJLEN8oa3EPvjpySmtoWMPF8uNVE9FFPpNHkp",
  "key15": "2EopeEfi3P6aJtVHbpMLZxZJd1snYKYQLKprEmcDzsBtA1jP2TPSQtv2BLadyXEJgcQiaoGdFwtYSCjUc6W4yjHJ",
  "key16": "628ZeLDGy1M2WH3PnQ7dMgZe24E23eoG7vwD6Wt6BeGurpAuAiMQduBwLL5PakE424kX47mouEUsFZwZ9mfDitiq",
  "key17": "4E8tdbb55zdu6xQ1d1NjViSBDrUcamcepeBHsM5sthdnNkRTFkX7iFf3RUpUDHbE78Ss9czR6eYWF6VGZYFG2Ate",
  "key18": "5TRKwpKdtGQHYcjVCpw1PVenRRzCgQTzD3WueCJNiRdfSLMxKT8a9eCq7yHrpkoY37rq3dCypnqogW5bCakKpjQX",
  "key19": "3W6xppmc6551M2UtaBiBeXN1BsmcqS7eTBQysHBtXSu2p6K3kM2bEtjeWeFygGf1CbMogmrpwxWiTbiFPbD8mkJo",
  "key20": "5r2MZRbjQ47QtwMM6zwzuXZZAAWyPLi4DRaaJwcME9L5owpMU733VCvztUu9ZGqcNEvkTu6aAS9GCtHunQxYQrVR",
  "key21": "4kiGhGcWQVaydpPKuqhTBhU7C4hFUmG85NVjSJ6F58p93FzTQBGrUKaEwsKWb6WjYLoCaVAf6dVcXx8mzrC1gT5r",
  "key22": "5zjQESMVdpkaB8FKteX6evPjYvScitZtzkSRd7fL7pXq1FM6Lk8TJkP9B3UZhn5fdboZUNoAAe2jtLzStmVGEnxf",
  "key23": "cNc7ENC2M4wWtiJXSgAGKBF5ApoYC5wNBCnDvedHYvyKgixP6pABRzcQRQDKi1xJrCSnLSMFCYr74SfUt7k1hyF",
  "key24": "4poNoNdcQhVT1v4GJSavN4ShS4sAAkyZDhNMwsuJ4945MsMA9trZK1bLuBZgCAUa8QbAvquaZXru53odqhReZdZc",
  "key25": "37wJ5n457aobDtZoYr41nBUFYGmACVw2QSBmfmvbprx4789kSdunXJhr3WASUW61xKHP2cXFa5MjN4YMxPeopsq4",
  "key26": "GD6NvwJXVozsG3feP8DjtpSv4rRRc37iFLAVVRuigrdKwEZsRoCNa2cNsv5T6TnVxwMSDfp1MCLpVEYMZqsz66H",
  "key27": "36uWSECihPmSDYFaNmogeb9jCfhNxXkAUWxcnRu61vwLBAKCBLGqAv81JpBcEVzYeXWJtmQjUEzXoh5TDHKQqp85",
  "key28": "2HkrGk9DJ7ohPe4uPhZ2PzX3iGzHtpLwqYDStbcntm7vQWwb6h3jg8wRdgHTbGopGihsRJscEuvm7o5C1KUC82ft",
  "key29": "4kfma6D9URY5aYcjJDmHoHErCiGJLZ6jyxLyvJiZCGMP3o6VzaGnhc4BfEDdRmLa1whEqHzr5XECBH69S6FoZpaB",
  "key30": "3M95Rcfqpm5Lcj2Uxwd4xCBQ5FCPQ28AEUBCusS8eYbhBgq7gwgVCogCjFkf2CnPTyJ5EgULuK4XMLEK27GnKgLn",
  "key31": "oNqdpMSWj2WrPBDSnED3t42pZ4foPnEjs5d5Jkg1stPyxWbhYp6eTxnutjaENd8ePYwXWhcHK33vj3415SUrx5D",
  "key32": "2VSFnFnDQCoDTkujU8Y2mYEwC1X6U2xD2DKXFyyYijudUnNMZaD8o39iZt4ZxJaAHEjkBhqfLfhvaV5GKjcFo5M7",
  "key33": "37yedZmsSN6hrPQLdm194swi4oVA5mKzq5DjoMyBN7VNZxVsEsWSvuAMJrnU8Kb7eRzwWp8g3aaEa9RDvHG7eyDL",
  "key34": "4hMXdcvQif2T3Q2T23DC6RCVsrZyyxzV26yZTrABhmFweLi3L3ey5uEHyUbjYLsxFJddTVrRc3ZqRFFLii5VPoL4",
  "key35": "4kc8JeQ8z1TKK6ARRtD4CpW5WmKg35apUihjfVyA7VgCLcySxBsBUAhuEmhvMxwvU59MwfPyWwWmgjtqCUNQnCXy",
  "key36": "3m8ggms24nzixYn68fw5dvroftWNsVzCBVMrbEZhUqu39J7vBNp6n7gVMrdcAXRq2Q4uczmLaf11d2HYAo6khz4s",
  "key37": "4rVVwgxLseA9oG3TqBTqKg6DTaNfZAddjuZBD48pxkE9eSFwHnu3Qr2K5GPqMXFHdoCfYeEiKJqU8F9F9y7xEo9A",
  "key38": "5n9LcaNKLnrdF43LFSZpBeYhFPykYrJ4eAtKmyxmRNbqSsjw75vvvR7f9YodMNom8ucp9msx9cDSQx12B9qA28Gy",
  "key39": "5VQvokE2gKJBgRhpywnyaayfRYRvnyvF8kEnU3rX7Y3Ea1bFLXJmoYaB5PagrG7Ez6g5F8jqaN7ZhEqJASU1WiQ9",
  "key40": "5yjJFDFcEp5xJHZXEw1o9sPczQG1pN6vpcG5DpneD2wBX5YsRunFesNQYJDM2jvz9Qx2rCBeVNeJ61hMLX5jNv1J",
  "key41": "3aBGPZ1qadMWuP14TgBPSfqCKaweUWoocZvJ1h1uq6LwxJGf2Wv1CE7i9BvYC6p9KSPgsSNiGSr1tPzYga7F6wUX",
  "key42": "oD8ETabKYop5Xvsy9D49Cd4jSWgCQPkR3SLgNfJxuwugJ9qVnaqVsStAKg69SX7oCV9dFaQdRyZynbiXLpSTrzD",
  "key43": "5kDA1MCpLeV23214MjKfJygSR85kfpjdaYVjXb6jccPef22qff7uxTGsXBQD13SXXKLpuLo5SqMLiHpEkj5LnHtd",
  "key44": "59JUKwVSMftzihUeU1Wonx6QgV3ZzyrhxqMtdUfHHddKaDDszL7ZkX4KkCGfC3YLGmLd2Vk4ju4bSBRUUDj15FjY",
  "key45": "5p5vB8E2JV9wxf3o8zgGEzVT5YF2cVMBYpjy9VGGcgNryePcrgs5usFQapAkFixcZ7VWAWKtzNq366ePHEaP9mxA",
  "key46": "Qu9MCgXKzN6xq4BymSrB23xRy7u6jXkiSNpZUCPd3v4HUAXJUkWDia5r8wiHyP3LzF98koESCCzeJnYZYhDHGaF",
  "key47": "4aa3hiAYsyNV6cXbHQ527SBqiotEwd7FNz1PDBgvoNzD5ZkzdyLgSCcd2QjTJ5SNRvyNMGiqsC5r8qj2WzeJZ165",
  "key48": "4dhgcXpBrjotdiVpfnaBx5ujYb7BnTFbjjH67WWVH1K1PsYtPWfFq2C5B2HyhgfdkvLovtr3Nxs8ZCbj7J5oPjqb",
  "key49": "4R3bd8RLDF6gBEe58qpknHY8F4TZsjMSZKBpJYKGxVWh4FvSoyFQEg9MpqdWh2eV2zfFdBCw7q222nrXqfy11jpQ"
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
