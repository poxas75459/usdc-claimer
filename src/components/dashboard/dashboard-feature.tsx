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
    "5T9QUK57hdBe9K8apAbPZ23QSq4jHvsgbkMNoiN5u57nJufsabypVwMAwHZ5FTzWAJocp3oaU85wWudxLuvbVb4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTAgp9M7kNC3k2AEiSJvp8Fe8VxGkmkbjHFcSwPyemFemojHHhx3w2bFc1rZzCoKKbu3GpXJLTAyXdEUND1aFKE",
  "key1": "rnW1utnc7K8JFrqAnbGu8Zup8SEX39gM4y1KUVkm7YqbZ8tRW6YxGFChVURkVNhgVGxeokQUDVGgEHi7LoMWTaj",
  "key2": "5usAhDYrY7kNi8m2kq7eLJ7vzNKxoMmqQ2HJg76azEBsXU9csxMgktVYyS2mJeJqHg8cB2YZYV3yta83z4SWHEat",
  "key3": "4Cmu5bsmSRVjmB228sHCG68qtrCTpR32BGBJ19TghzcrqA9di4hzcJYXGvcpYsB65p4QZtsRs7i3WXKE6AJyAV3k",
  "key4": "zrTL3D3wTCrYnfo3Nhes5Xqb9UbUL55cLC3ELEjUd6GsLmU3qAdjabMVyZ763juZJrtUSf7YocCzAp11WkfmSLC",
  "key5": "55q4MrDQ7jER2Po65GivQmHuhtG9FnDhJtSHEwSnnJ73YuW9XpPLe5xRCtQpzxQ5NXGBWk7pVQbB7N6cDv9HkkZW",
  "key6": "5mjDPRAwWPqteVHHczUUvtyrCn6bzYnP5YDAwd3JgenUxaYKKAzqsjta1iZoBVTNyRYSc7RmrqdBDPsEfPGy5zQk",
  "key7": "3V8w4jfmTKYyZitb9VotNHRRmQQckBatRVmHmSdELobZeQgyvbor5nhRLr5r84grUfX2G3aK6qPXLAiv94J89Twy",
  "key8": "4HzZJcuF94Wyk3NQsgQ8wzhAWbeJWJ6MFrQu2qeaRGSox7XKTzzqvSSE6hrPKXpqCFtCrFaAbuMDFujUuzd18uf8",
  "key9": "nmhXL8PFZjvfGPJd85jQgqd7dmZGWfmQFqdNCsE7pp2zfg6DmZKQJw3gS5bSQujXpjD4wAosBZpcYjTSiFQh2iT",
  "key10": "4xCS14NxdNwqiCL8P7AjNHo23us1cbTnzPS7UAK16mBcebCD5Mkf6qD5pbn6rW8kq8zmLmdmtiw9zXdJd84EH99o",
  "key11": "3C6XWJx2yEqtt77AqgD4jyPm2BHEHTRd6xXa5p6BZScuL4t8bwyar2sNQUtZdTSPFfTWS5xLDyH32SVyJGojQkLV",
  "key12": "5CUUt3EEzyGrTmZyvP66HPVvFv25eiS7XiveTDuuSwzqSqtmBvvkWa34o1WfxBNM1V4mqgnn21ugM4gdQqDqdQQD",
  "key13": "5gDRFP7hYYjNmcKVhBC4EXXEsr5a9CuxqEkj8kFpy2L3NNFF5aUWL4zEW9V736A5kXjQj1BJy5xratbu1LHWiXrY",
  "key14": "35MXeshziUKRg2MDjP8i1f7Z21jViPst7ikcfQdyEUZuDzcoSYjXxvzBH1wPxZxSuY5mWWj3MLXPoBP9ik5ST9vW",
  "key15": "iHnFoEPgvSCCAtK2LFcpcY3CaRq21rt2adFyGfvMbvixQQCgUnRRTjMrFdpiuPuGpjKucMhQVp9Qjm7DEoBhidB",
  "key16": "3BagYVTLR1nVJH5Ybz4vhrjTvYqi8yg4ZiG5eawdFsfRMjCbxSnob9SLtf64yFFopeydfhguKAEVA8izy4cb9o9C",
  "key17": "3AwNE7mLYjvi3RaCyYL62Vb92u7Tq9uLirxTAK3iHDT6cwPmZ7V1QVFwWPMv7RGH9XFyXnhy8CuHvUnkFx2pcDMZ",
  "key18": "4fM7mt9qeFKDeg5vfGJQiS4xzujjYkEmMfE2dM3tAAjd3xuVKxmeQDLaRBndemoCx1UV4vuYEMYx5bXthVvi1Cr",
  "key19": "3JFEpKcJfLm4nzsEKLaBj3B4qacYYUk3e6QAuEMcUg3DfyQaBrxgeA5o4NSDdjXs9Kf29spbExhwsRp49Z8Xa8dy",
  "key20": "3a4BqjMGaNohgizmTDxEnvNqm3JX1QByvfgPWumPYNiG4MM6LVNC7YM5LUCSXFVuTtoWcot5pa2wqZsFFHLZsdUY",
  "key21": "5i614nvoTkU9JpbDg58VKkbD7aKrDb9L4UjTdpkd8HvrisNW5qpF1K4PQgYb7TVUXJPgzHZrmfUkBrv15qp8K9gP",
  "key22": "63JLPBRjuV51vgYsKy5AVQHo5XpBf1YnkZJM1fQoShdqVknFDAGSAiWUK46pBZRjo2aPpkMEXEcLNqEYseHtzP8X",
  "key23": "4xpmDGSHGXjZfHkNjrvZoN4B4JFp5CGV5ePSmZ9zeDBhjQR2WbthzG4Aq5T7167p1cM4miXazq3DQ4GYUR2S9YFh",
  "key24": "5UJQbe9gu3BGCXaWf8Q2gan8iWd6G18iKy7kyLoXgsKSrudRALmDX35E62fYC6du4Gaz5GfmeGjowETivqvAwVM5"
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
