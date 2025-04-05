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
    "3yGCdLxmHCmmGksqUFDaW8ZQWAeMiyKZPkyje3tKjHv6Wu3b4RCcF82Lb5URThtsdRCpMs5yhFbiiZBHcgcRNgTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhuAzrSCg9jqExd2t19DVFHL3Nm1eUmmiNTvGDPEpczjwfBZQ3TSrdBSrM2htHQYYfEf6dffYGyGe3KLdvvdz3t",
  "key1": "3tcBkMqctFcxL6sbKfHut4RwpqogoG1aHcQJA74pEg9oYryA4gESBn3Q2vvmcWA4eeAvMD9mo1HV2CzURJgUozt5",
  "key2": "gyowswQkHQTxRJx8A74ELoqkA4TGjPDgSjgrk27sbDAQDAJWrC9HJQVwusYPS3CDMJcy3R9xbhpnCijYAa5Uwbm",
  "key3": "3kXJwt5wnH3fR8okcu2Aw1ZbmK8bd8H7CUcHgQ2g6JnP2a5HHhsb2oQCEAiaXApDmzEKCLv7W1PwjtJ3Pg7duTsg",
  "key4": "8qcHAhRubT8QsyXJLYXxnHrB5DnWfPvpY7yM38WVvf2BdGTWLMqYr6mvpKgY8Coyz6QkKLDK53C27x7RK5HZNrJ",
  "key5": "45Ghtn1AjRkUXthoWbGN3imacx2cati6N8sRCHs6fbCu2kwg7t2aPRhNML3S6FwyCDGqHRgSDvsvMhUnuuFZ9QFZ",
  "key6": "4MQbEKsdRx8hfPy7jkVRiek9GFt4781CCzZiUj2x2YoBpmwvhgtSKEv24JmwBr44uYEzERLhknR8ht2a33C2W8rq",
  "key7": "4ja1kM6Uotjghbh2QE72cXYuaAEEvULccAU6sUktaGZQ74GABWxpCTsQbaFM51KWSymdLNsAVcp9mSf33MA9UwdL",
  "key8": "2McQVAffC7M2RKT6Vu5WPXxxHy73YigQpVqywe3xpKCERbUHvx4Xztc7LEjJwDRbfRRPqDkyAHNqyrEGAoe7XUwA",
  "key9": "bcRMAGG25HQnmbVjirf2E8FtqTxTrXAHCoSecD1TjeePy8gsLHoaKjdmNAB3mHxKzfpFaHBhCb4PinTD9nBqJj9",
  "key10": "4N789CQxqLMAFEokHLCLDTxWEJhqxbpuoPwcK1PbmjMcHn4NQiR2ojTZzM7kVjvNVyH4f9ATtHA2Mg1X8dHHThpA",
  "key11": "45cAYwkXVJrVdX54SKSCDd4FrjxNiEt6BHaLdNFkNi916fEftMMT2Ao5WrcfEtwV4zuosTeRXfyfFLw2HE8Ld935",
  "key12": "2dWKjnjQrLNki7Qu28MVfm4D2J5rvj1pVFZt2Gd1vsJfbzfvmHBpd5iCZJHcxA6fJdVFp5Jw6DGzcM7s7DeoTEcF",
  "key13": "57M4SNLAd1DXkK8PW4mcaswWXtmu19ianeNfmT6eADzyYPCH9PJUmFJPbJv89Q6d7uuxSjoyz1hJfiFbSRYQ4e17",
  "key14": "2Z3Nu6qn7kBqpEs7NHsaBjP9VbznSPThWD8zcf6dN92ntFwjgk5KUyMq7GGeYuJMd2yMnkaTFtFrgfyxmo5mjxYv",
  "key15": "CD2JWNSrEw1ivcA5uDJs72bqgBNF3bW8BrtQcCdEdYUfovfC5p67hBwAXCdRpUjdCccnCk6oV66W2GLfSfckYTV",
  "key16": "4CzMvWLnoDTSAb3GMd4UyNzCaFsmAxDPnbqBJ1vqpLndkGNLQSMqbYKDHTuhYHFob9yga1rTS528ZP6RKFVG4DTp",
  "key17": "3jK9Ysvuy2PycypAmyhY9xFMcgXw1hXjopy2BUrQs3pCYdcicJLUN4MmjP6VRnao1ZpCqdXmg1uYtPhXdA2GbFWw",
  "key18": "4rTGCJNQvHnyDXdNf4PqiDnszaNmroKyym4QA6NTvogMWzUnJQWQmKwKoLUrAojEuGQhWbHT9j3Ah32ftz1NbCt3",
  "key19": "3JuiLx5xemcJW2sxbNMBz6fP5vNUu1mDxfkZo4KrVcR6ghsBjMPNYSetMwt3313wG1pV17iZY1azpmrUsVGmCovR",
  "key20": "2q4yL3DovpFw11bsJvq43eRpXV9PKqfT1a4aj7TpfVSSC9NB6u5awCecvzEgkxdodUQWHM1hGUC8oGU9GRbU6kFi",
  "key21": "5Ma2fFcNzpe79LYj6WUk1CP5hTb3eqQFePvxMsc56CdS3n5W8wNRFqKmnniPTm9CsNUuo4qHszsojUfZRJhJFndY",
  "key22": "p5DeZYSEaoGMUBPq5Y5zipgM4MhRMTkJLYVvXioEiFbAqLoTEsLKWhhXK5TbsfqDj4cxRFzLWrSPyfzijjVoc1a",
  "key23": "4JLY3oQQPfCskgkoxme4YVLPbt1dLhyPY1Dn6hqqfjmKACdnXcMMRZ2i5eAfeXtd1UqBYdPsXsaK6Fzo1XznGj9t",
  "key24": "4ekk4c67jUyATvM3izrtjvUfQdShFTBxUPmYyKfuBk9cHSFmm4P2WrYA4ogd5Tv18G23VqMqfZadgntiwWUb2zQm",
  "key25": "42GgQBirFMW1uRHMxVkorRZUBoYamFpb3tvRo49QQmi9g2ohLwwL83Gngg4Hp48wb1mboM6F8Z81e8f8ddtQnSZF",
  "key26": "3jiHPHpZv2e9Jvupw6M4WKivxxigvWfySQtQ3YHkMNXaBDVSuX9sGbdoJVVnefmn3rKroRwK6aW7AYJbn4cbrWfp",
  "key27": "2T4K8g7tKmNQvLi6opHYmgXFXn8M2ex2MHKfkoMDpwk6LDbVS1kuoAHw7p2P5HpLbDUtFHqG8XKpbKruEu5VZd8K",
  "key28": "4RnjPBsZV6ejQzv5xWfqQbX45db3BQ1q5MVZPGgKDWJ4ncZQpDZE5yG6GcRCw2NXYx3HcxQWAX3CfDpEJqx4TTc",
  "key29": "5HKMVpoS7wvBjot8yhVwwwJXqCamCz92KiNo6CeqJBfCLWkHycLmkqhtiZGP3c5Y4FL2EjKkbEKZcrRT82CYGcEn",
  "key30": "5GfmuuTuPqgpD6NdscLGMjqw9YgE6tzLDTHdeEe7HEWs3eWTpY76vDaqYp7kZxmHc1n4aGLTtBj3M4nxGeULKFN5",
  "key31": "SDPpm2GM4LYErMWwx31AXCu4LL5FDQkZok1aGBxPkoJn8EVKT3TQaup38DgxdYvnMXLq1CYwge3tSgGURSFKH7e",
  "key32": "5iEuu4D1C1oGsZxYrFiRzj3U1fxdsLc3iXWYYXFnYVw4NJknjazSGBVj56PNmR9uycNuHeSrd6W4CHwMjLiCCJXX",
  "key33": "4Ucfb8a62waEHwX2p9ePBoAt8ju1Eh2htPAmvBybJc5GMs3WzafutMJYL3DRqx3cpyjGt4jjA1yqt3A43HEp6ES9",
  "key34": "5LBZqsreddS1J7TdKXRYPMwcdBRJ2xttuSEazDMTG9Q8yRmnjR5gi4wb3nX2EemZkM1gHU5Ebn18uAChWTDM6ovw"
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
