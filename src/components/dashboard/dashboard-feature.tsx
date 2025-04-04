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
    "5L4rkEFWPLP5mDELomuR2uLpSGKjckPhNz1tLpRpLMTkwDFEFQJm3bKvf5xwjTCVM5whvXyxmARkGyCXjtLgQBQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wd5WJKtgihevMj4CAot2cRiknpwZBoduTRBCfwdbHNssZ9Aju9GaLhH5x2K4RYKzPp1SMBdvmXjdTr5rRsvWXVv",
  "key1": "2sdCZYBZCem6gA2S3u6wQGPJUsAbhTCSpkibmGMWQLjNpGHwGnVSwsXvyxEXDE3F8M74qFyzA3U3pww9A41EHraP",
  "key2": "2wchW54QD9jMJReH24Nqu1F98wNBbHuuAfQj2SpFpNmqSnUKkH76jiSDPjkmcF8E4mFoh4NdbiBk1hD3Wi4grXM",
  "key3": "2gkWSvMDG5F5wPvYBzmTrNBUx4K4HqxjEvvqTp27MAiNMiVQ3tk9hWXe7zJXkNnXkznuHPJCQYa2XFxeNVoXrKKb",
  "key4": "5LyWGVs3mUBmiaXrnFAjUEucixo4RodvhtiMNSosFx7RdEoY1d9z5U7MAheyW9oryQF6aaybDG8zsDVJyzdbGqv9",
  "key5": "4R6BmsXjm6akJEA4jLXHr6bQGKTtu1R9Qj954JfeCHFMpdY3BSMcSvttDk4Qaj6MyQUwvZXviBoLZXBP3i6wr8ps",
  "key6": "4QJwN3tksKhz7VyYrx7cSSxc6DX21XMGxwWrVygAtNCXbtR8QCKifR87hSAgwkrGB2eYr2sdAUoyCLo6SZsFrDRf",
  "key7": "5y3qjV8vdiDUmGTfAwWdkHDMgk9gRoY196bzNuLSFdD8iizxkF1fCqJGBaMU89jTWAEx11dvex8xxdmbjB4kbRF5",
  "key8": "3maQgT2UNHmUG8m6R7CbAEfjdaKYKgk6yBkthe2xHWTcfqTsW2MaVbJCjqdcgztEPJPG5QSZ8wkq9rby7kbis6a",
  "key9": "44XAhTKErLahDFFGavcQoDbnYNa4GmrBSYw9aFpxRudqbeymza9xchnseHMEUnjGtiAhuTnwdLDZsj3ZkpnoSerU",
  "key10": "3uEKdUANxPgExB99jR5X6Ka654vr3uXuac7XcjWKda5RuF4TaGfvh3drBVnWkARahNfs6aG3PsRHfEopyBzoBfuQ",
  "key11": "4euPrjtBdraBMYftvmBCNTeN4zeoihWR8K28khMXQYEbmfFEXzL4kNxQdmC6rynaFXbawRXcX5y3Mgn39PH8b5M6",
  "key12": "35n1oSsfCDKFc81B4xuL4YUAFCjgnFF9TGt7Sw2en7h5AcUTJHxV3WbVwNMcThRX1PGTDWEd4vZvHNG8KjmCGMiP",
  "key13": "tGmoaXZn2YGhN4wyBnRA7ahqde654obAz5TN4HUyWTbWPdUVdhgVV7ZdofseGEdkawTv2o8xtnSRt2pLq1pePxY",
  "key14": "27n8XHhqfexBAECUqszSHrVC4PcLbrCoPZ3UDGs7Az5prNsrTxPxToAv8f7mjy1kPMoBD4X8xc5WHGPCJDVEC2A1",
  "key15": "551tmj4jC7GfmjPYrxg2Sf8TpkxzygRnwKhaeF95jC9zHJzQ2uYKB8EjTaw73FTt59vawxyD2WawG1sRJZVxqbfw",
  "key16": "3CkdbmcVXTVouBE7yMworqvwRKMvK5cRsnEm43y6Kb26JJwREJ6RUVu9eiNhQ4FHzLre1PXYP4wQwYcmWbzWHcA4",
  "key17": "4Rz2WYna68rZQXXNv6MAQ9nh4PPNG3AGQbJqhR2EiAhPZkLfeJhpc1TEvgmb3cG1fTZ8coCNDtWPtWBVCofAj1Xe",
  "key18": "4HXauvZsToCBG3m23SZU3Zv9aHUejUkknA1P1cQzCsr3CKcL6aeBwGa2VtGkfi7vAjRo5mS8cCMGV2V6apWmjnK8",
  "key19": "3im492fKGgQT65fH6AsM9MgvyifUtite8zGxAeaQuuVCuH7CCv5tFUyJGvVqvnhsdx1qxJp1s1z8614Zr3aEExBb",
  "key20": "eVn7MEjLB3kw662idGLLDcNCa4PXXm9V93hYmTd9og5wynSqXPMtQ8Doz7E3YHNJCukixDozaHVbdKwWcZZ3Fqb",
  "key21": "39nKjpk3FrDwoLnksEkhrsAq77tuQ8WU4r1TbucS2p6qENoQsBvvvyhvkVDjhCA6Aaa9SrZj98SRisNm9xBAggfY",
  "key22": "36bvn8kjEqd3PLkjWwUJe2GNAJcCNfPmkXSSKMrDr8wTc9HuHcE6YwFcNo85wizvwCao9qnWzcf6jCsEJtb4T3VB",
  "key23": "5gbzdtDG8ZiYxH2Yfxr9PDs9DPJ7Yeoc7AouVhXLz8CDeBsJM3WT1fLmAQe9q3XDnGJPTsBetYdAhx8FVmxaZTKs",
  "key24": "2pCWducH4PsnwKubRNA2NszMiL9cCEkY3zoW5o5eV6V3zxWd8u1C9pTt3hBJo5wBTP3z7SRo9zjPEfv9Dqrck3cd",
  "key25": "58oQKwMdmBHajrRQWCfVSSMiSogqc7fxj1fGTDCQvEouZBX1RBgdhxtjrZaV627NEuFJjuHxSn6voHS5kKSNXvdY",
  "key26": "5itHq4cTuRz64o1aK4LHv78T1MNvwiPxZUrHkPSRdPwHZDpb9EyFfPStk1zAUeZd3nC1yPWddeteYAhue2Ed8344",
  "key27": "rwo7k7p3XbMWAxXi49pLMR4sNQ2ifRKc1cj686snBDHCx7Y8bbCNAMkNYp51U9QE8yeVxLnpFGMdPgUfMPyCtxd",
  "key28": "3WgUCe6AAmnuAoLe3VTzbR748uUxcALeL2gX9zS22XEiM7sFVSUAJ2Gn49gTfVvNPEvSB8bbza7Tet1LTRD51qsV",
  "key29": "UhYhWwDepkTecy4Rt5bmTMjDYHVwLQCt654X4qcWv3S69FRoz7Aeb3jCzPt1RivH6PxmUA5PADYCcip8virKBN1",
  "key30": "ea4bXVa9hcuUDcFvdf7abYb8c35ryJfhyuwgTt2VMaDyEaMxw1DQVMrAugGHwSGLragV6ndoQQUy1Rh4fs4yxgo",
  "key31": "YcWBnaYg9cdevTsLD8NTiUkzLFcbw82SazQz1gWUBLRFxUUiVmtMa9SUDfQjQC5zdLiussfUqq3gYSjS8uHZuJB",
  "key32": "487eBuJF7UH9VkceF8R4F1zhwAdzoCKhULK1aphbzDNbktUKCMyG2GjPmTB1zuw9cJXCr429VTynk6qhwmwKFN3k",
  "key33": "2Q2Uk2PQTVzeyfi13ic3UfUEYZvCnMYBLnFV3dmiM6NpsLXPG2EbuaFvXcEz7eJkeovGcEf3QmG9fajPnHW4JQ5A"
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
