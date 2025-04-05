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
    "3DfQPanqsn1jiog7CM8Zx6gkimKN5vMAdPATwGQBLv8rM4GXCfKS4c5tiHhwoEx9XKPjPe3YGgf3hEw9VYgQ8bK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmFwbJyJS1ZPh5NvBfZvajVBVAkYNa2L55rmVzLpRtWLxnf4SPCb68ZuEgnXdaNudVwEfhhFftV7ELNCGLdXuYS",
  "key1": "5rnAaSaZ3DwJDXnB1r72BnFBNqDNmyprhXYMLCEsPso12pzazcXpw79DmuJSf5UxoVrRrjoHK8tFRG8XNweMmLyg",
  "key2": "MdhnX6rASJtf5HeZ3FYiEuto3muPTadGvdwtR992phgaw4vw1rZLcq7CdZKaT7kiRwGTZp2Q4hphdEkDsBoopYR",
  "key3": "3twjebSpYQGCc5bNDCUKNGMRFMTEyn3n4HrFWuXF6wwuRQvw11NynPv27n9NBy4HqxacGDEMFt9shkWYAb7wiKLf",
  "key4": "2gycB4wZq5ETRqZPD86pbH1fUFLKXYfYsZTWveZiap2Ps4Ft8HPLcNSPVbj3fFFiU4jJduziPVTVxgDDhFYNczsG",
  "key5": "2fpBFbQhbYvW3cEbbAtnyCLYspP5VqmY63qYhKpGADGSm5fwqA3xak7WSvv9RWMJSaSYVVCabL3tMCL2KKMpLQ5L",
  "key6": "2TGB7My8ptBLSSVTNfhjJCE6JkjVGfgmwKmuCqAq6NJgiNBKYwyJ5mc9MiJdW3Ta8RLzNXZ3GBspMZsaF4ZehRNh",
  "key7": "Ur5EEfikdN4N65UkSxmFQVxN4zyg9mhfBBLceFmeVSBaPnWGGvumcsi1buVxPQ8L3THo8uspeB2XR6hxZEoLME3",
  "key8": "3zaUUXETE3iTYZAv7AniByGs4LWvhaXyknS29FipUxzPzHodeCbH5fv9nMpQgv4BawTZvq4UfCnkA96dsspqjpvM",
  "key9": "2QbU2CuMUtBA9icnwsQJPaP64ZYGVZ4jg9syqYDc35YwQHtoNbWSNFdEPL1ewb5hmdiFpstoVE9xkdKeXGLhYQ6c",
  "key10": "3D7AqufdmWqokjac6TwAXqLPrJsKgqVKo6r2oJAJpvswe8SFuU8D7PusPMWc4rsGuDQBnAcuGFzDJJYv3YsE6A98",
  "key11": "eqmfiPp7oDTFaz7aWNcWXp9UUsTSq6mRv8Tk8Bzb9DvHPApQWPJ9v2VSmvf3dd71cU5fddN9qLPpiMaUyVRjehK",
  "key12": "CN5jMBzjMwo5bf2EuuStrjjb6NbGEBQCUajjHUa62nNQWkRF5XxCdNZ8PGj4o2r6k5gUs47PsKQxkg2bwWxf1b9",
  "key13": "4zRe4kYheoQqnaGGyNgTK5c3b8A2nYNTr66J3x2f6hQLiBtqCXJZYJPEaKmgLLaxxsFbbKUpksfdTEiJApvFoLKR",
  "key14": "3GqWxYA6XFN5NnRgHX54NXbUccfDCY3QZKAY6NsPzDSjHPDHcGLzp8UiBm8hxiEzbFZHiMhicPvXTapX6B1cVtYf",
  "key15": "vbkAGymzPQZuUGqhCwmJgWWqtqApeEd2pvuXuAXC559JnWji6tXdHJ41756o2zjqoNx2f7qoFbsy2Rf5xaSdyWa",
  "key16": "24SMwPQeGuF4o2cUx6aHwHDWnycX5bpHTbKg24Tb2eDWdTdcJzvZBLeBEAEtygUWWnwbKQXmcgW2gfejMENWSSTf",
  "key17": "4Qgr89w79BJX2Jz76hToFwAZBZtFrfcS7hZy2kfgSeBKmdm2Y7QM7LJXpoxZxPfQ4RVypoD2yaBqvwmeXyo1dRMS",
  "key18": "2vs5vWppZgvmrUHsoTgFqah1HQb2MNZNhaPykzahqYkCcu28tJWTA2Sg6EntTfzfycmLhauexzunq3XMwW2ArxHd",
  "key19": "23C8hHPw8DUHbsoFAVHv7rnEosCha3CaspvZT91RcHws6Yp6EAtDURuEhtLSeAEohWhkE3FtWFhFe6bDtF7NRfw9",
  "key20": "4nfhz5xfaWszWSNFy1eL26pRYZwge5pS54GyKkkxTHR8k6a1AYfvhmSkUR9TfHemr96Uug8v8wP8pYpzS5MitNrF",
  "key21": "2MnozonhGbjsmYXrsM7prujWqu1q5UsX2fCLitb4uQyBBh947RRbjuArKQ1EbihbJ4GZysK83R9qWSXWXtNHw2e6",
  "key22": "53Dws1a3CbQVEkXv3mVrVqUsRRprSzkDW98Ww1nVHadFzUmgDfVDMXupc6SJkATy1ZCWY5cznxPx9a5J16MLCdf1",
  "key23": "BzcBUFh8j9HRT48DWTv9ADs1bhWLj1zRztweH14rAQBrE6BU4AAriydFedtJakJZo8jbvBsXbG4v8Vn4H4g5sV9",
  "key24": "2wRbDhH9tV3ChWu7GvZcpGPJehDYhzDUnDQH34QYDyAsSaZaEGb9Wz6JPtgSusCwgMsfvb2GNEKtu1hgXYm9KdYj",
  "key25": "28N5aAKaYXzuTNTtG51JaKMcBbZKQePogvfji9G5Kjb79K9GLJS1rjVDraZbmkCPMPZMDjrJwDxrYU5vuiGTFJq3",
  "key26": "t2czvwiAS9G9uhZ5hjbRExTGP4AcymjUV5KA86Y2n7badBXQU84Y879wVdBi6umRjmu1TKmnui9TiPoyP1JWhxi",
  "key27": "5VoHyFg55nRSqB2X47KQYKyB7szhC39o3V2AUxXxaSDHuQAqXWfY3DeTF7rbKg336Ye8t264JMxNLGjCkmKXirCM",
  "key28": "3y9sWuKBFyejUdpUqv3xFSdhxXmZpfch1FP2LRmPRUXSQeMCpNykdL4TuPUMMJJVuNGt2p29xYhZXtN4dVwVeJ3s",
  "key29": "57rDt9fvf8G4B6Zku88qbK821aiKzJPY2adhBFEmhetGS7NW9KSSSsVAfVe8bmpTMioiFsLhLsdmWTJZM1oh69A4",
  "key30": "4hHxZLCQ9wqR9tFTCMie8GmHD29M4vhMNWw3LtioPehY17xDCDr9zufLpaYyggfYQ22sm6t57eB2gtRSTWgwnzCB",
  "key31": "5Jq32nioVkUF6yBpzzn9y4gPFuij4bAnux89VySgxvCpm1Baop4XopzVuimsc9wXdDBafSFNMSePue3A56dumnZp"
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
