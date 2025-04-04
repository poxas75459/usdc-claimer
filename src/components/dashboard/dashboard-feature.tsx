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
    "iJ9PoC1EeCWLARkR7mXzXse36vTmkhbCccW6iqa9uf1ZRi96Vhk275A9PemzmBSxu51gRQBpC2at8EW4GzpBHnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idQJpeemLqi8eWsAsX7KVfVVt1tmFMqywBfMeiNU49NZ75NmzPcsCVybATY5RMFrYU3dBDVAXEtuFyiTDU2FLhb",
  "key1": "2aSLVwDCiKpiWSgH13yiCiShWF6j8P7hhkNXLC7oQn5f8Ydcr6kLmqwmnGxabuxdoAK6dLdtKLWjWgHMLcg9QPDE",
  "key2": "42nh6q3NFbCUGX3V4jYcgo5nFjySpnVJ8Bg1iDo4rpT1bTSDqwSrGRM52Pz4De5fJuyZUdp5Ltn3gw66W3n3tgY9",
  "key3": "3QhCAgvpN22gfxz2HTE6TYytrDwFo5DeJcLnwoJnVST8DFoYrbkg1JTzYR8WXb188PnPGkEnsjfXv49sAumdEuDZ",
  "key4": "4jh8qzn6MfpHGFf6HSjzYaD5vdgVSTRkYjfjQgNV9GbZXBrZBEXmP3LmRgg7hCH7kEtRbenkfqUqj1qJUUCeBWoe",
  "key5": "2QHfr9ZcvDRACKYW8hmHFjtrV15X9wS4y4UGE885wvZzdqPM9YCy5SwGMucNgbmTrxADjAytswi3EEPpxzffzb4k",
  "key6": "4nQYAXaHH55ESjjbgmu4PYAmKPJh13EgJCTgXePz7AMZ3gYw7piMRWsNvLubDf9eVWzn6AUQBBvKC6QbEukfoi7y",
  "key7": "4J9ubMrPhDpmLpEXpzyCZyiQVQcfVqxBLyepERQjyE2nEodUbd75nd5smREqbhzfqaVykQZBhVV2KYz17X18Bt5c",
  "key8": "3Uk9BUaya6mtoQaXXdmu5gbqG6va8c6gERbALjCBvZ3KotXchxJvrGbYJkem56u9rGA2kKNQAohML39AiG311yf1",
  "key9": "WcydXZwZjsvtwWHYmBNjHKCCCHBHazvdvCXiaB9gydTR1hva1N4rny68cchLPSyVZtyxgLsRKfgnhH7piFdoYDd",
  "key10": "48xWNjoXsbzzqyWjybHiJAUbVfwB3JHStDPRV98PbhJ2x9BaPj5ewRY2ArAGxfti5yrM8crkYw3T3Lqc1EkZV4uX",
  "key11": "5BejBfYF71w8udLDSVmu9K8VQSiwuw2qB5wp4wPNMCdKPyeTfvYeydvYqMQLouiLSfgUvzYX6rAa999kJZmX6svz",
  "key12": "2HLHk6ragiy3gNmxogoq97SA6FRSZ7jptTEZARQZYfspTJnes19NicdQqncZNykR8P54GCcS5kPKsnZPUYLh6UmJ",
  "key13": "d2WWudN8icqpHdcjtm2q3rPDZoGVeCvHkgbtr1PXr1BhFyUQ6rxWgs1nZQDfBuEMUnTQ6baYAT899UEVeeCnHyo",
  "key14": "46a1xEP9hjmKcuqQ74GJoSB6rcTBAUcQ6egnB171EFmbnb52QqKrFra75gk3KZetuB1j6WWS4x3VEb6tehxbffbB",
  "key15": "3a5wggtwHDAqEVhdnSe4NFerN8zdYXVV699Wh9LDRiFKgRGAZWrvK5HURD1MQaTJ3Z8C8yZmMJ46mvCKCXc2kjuP",
  "key16": "2swZh2oJvvsoeBuTqMfVYB411Efe98rY4TMChEzhc7e61M9CBg7LBXbjEN1ZjbMRhReCEXfjvEBbjFyJbL15vsbw",
  "key17": "2xQtFjWXH3RcMW3QoUCm5PVgk8auscrRZ3zhypQGKsdPRxSvxNXcz6NHut251VBQZXvuayBS5UwiJYnkUy5EpTZw",
  "key18": "2hE334bt6vsjaiMDN3z2JGRtjunpEP8mz9YhunbigLyht1cRTnyjTgyKXdqMRrXGS3Y6PiktEkkoGTGVGAKfWmAs",
  "key19": "3CJVJsofoQ7frsjxvEJtMs8G3gVi4QDeUZm2CubS8JL7oB6etkgQKfDbXDCm64e2eUb4CBvQgDtzMaZ16v4zh9tv",
  "key20": "5Txpb1trw7WFqQjxVkLGRGZfA4sMRwBuV293o9CiQxx5AGNPXdP47oFs2juvqcZLrLWnTBoFLTFyEPmoisfNRrr7",
  "key21": "5kErYrNZvXci2E8qvQGf4Nj6Eodo7bMA6hAtXupT9WzUjejvgzaM1Hq4xktAx9cmHYACK2ahZjcoKXJVFrFftELk",
  "key22": "5HeCuVtccRdB6MHH2eoXRmJP3jj9d4aAftpHmD2nVAm3dAHntPeMGun4Z4269aJJTD3SydZTPzhms8MMQ4RUPCcV",
  "key23": "yLHzvcpdZFoaYPLNGxZMb2d9SidNSEfBQ3atGQBt7SY4yVtrwuVv5XcHW2MTZinEmAuP4H2NJi2Nse913Xya7Tp",
  "key24": "2UV3TpdNByYj2rBqBydSR9bZXqfMMyhVgQqqudG21gJ3K4b1z85vSXkk72X9gnkuuR89igEjyGvEDURPprtycC1M"
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
