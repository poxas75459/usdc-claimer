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
    "4pTksh1J7ye6oXsxPsrHhqbp4Sf9ik9SA3Lrkc9sqLZEdd4qJajT4G29qbnJQmrFMaEWyq1MRb9yUrC9Vo7y79bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDRf7jyw1FcN6Y3FeWnvjH9rvJGwW1rcw9bDSLHR8UNH83W7uwdxZBdvKmYoqk98k54afMzX4DWFYbbQkVJ6y4u",
  "key1": "4UFjzU1gGrDnagfuaby7L3nEoucjqubpzbaQxnyCfGnroRvrGDxUYmAhMKodLtaBFjHMmzNb31PEMT4JfwdeycZw",
  "key2": "43peTvEHN6fbuLVHD4t5qRv8zSw4N4GFYSPyo5BfteZXtja7yvVooHrxGwi1ciW1zffcfKpJNY1iNeMGHcYtco2d",
  "key3": "3ukjMkEm89CyaxXagMabVuCDordWu7euvj2zqRo78wUdWehZeWX9X2wntmV9Sf3AomEgoAhmohQidCMKceonJdh4",
  "key4": "5gQ8DyqnS6KZHetKUGPbVoXEWNiv4cbGS4ZmQZpffNq8E4kik2Te3nBN6mc5mYrHQgSCFqtLWigmPJ7cFSJzMjY1",
  "key5": "hFJd4iG6FuiStgwqV1MzeYH48Pu2y87q7nvEtugf6yKT9XS4cixmGmCHWD55jVNxSdUMSN6jpadSD4xEzJJqLMZ",
  "key6": "3KCg8ThvqWZGj9cWzyd4nuXwvpDodJtUXZvN7Dc3F9R12jXuryEgtmoVmjwjg41omCwroTWpQVCgmb89mMMCecQ9",
  "key7": "U5xCcyxNFNeZG4XMWewWkLZHVCr6GxxF2XvvywFWVUsUAZfEn9zCyovRF2dgZ5mUEEK3a6MGSRrTngctW1exXws",
  "key8": "FdZCzMSNwoijGdzdjftTcVzHmeqHuxpZedaYE3q5U3JihxfcTSATUQznjQzKUZEfdRhV9wbgv1ADZvvpxboZQ6C",
  "key9": "2M3syaxTH8F5eRPDAF6K97GVsRv3DaCVCJNskvofc6aS1PoUSnHgbS5GV1AsVUSZ4eDDvRWXob3QoH9NCFH3Q9gq",
  "key10": "5BComFYknksp8fXR4c5MYzrX4Pct7VEcdfNtD9i2Y3Z67SjoX6G8iwKAb34pK15WZtj5rCzoSELCvrwMMaF2myRe",
  "key11": "xkDQBLWdUSuixSrU3HYbxWGoPT4tuSRiGQKXUKmRyZ6A2YnJmMbQiYrcBSnkqJG2pJ4EPapkeXU8ZQe8MRkqpZW",
  "key12": "3UMmYYF5kTsXGrvPzEM4trj2i95thEZckxuBZEXvNwWzZBGtYYsy2BjXstZ4LnKk13fuwaeSv4AvB6U8C8xQ2wfC",
  "key13": "3yBj4HkJPVt5mV5uHnJzwm5CxGLDBMsVsnHiTNFMddZnyNHeNk6rCWcHrpggVTDDTkTcBWVXFC1YhmWgivAYDnsu",
  "key14": "2nUNYUqi6kugX2pesYGyi9Fy6mrGJD2rDecVyzn8u66oRW4vx3rXg3iuDBw6Z2b3zDWhLyLokXuh6othA6AnCzL2",
  "key15": "5VcgyW6KdE3niXkpjfjqJScrgSwehHVsEzTyfrAL81gxsp67uR6tx2JeKtRuvmkR8mLoiNjaTjfnpkqrp1yKuXcU",
  "key16": "4c6GS7umbpQtxFuc4VBMfuZ6x47jsFgMi37J2s7ax6ovB8i9eLaKPFpispFRbWspVG7G9DZ7C3Nr3ZiGrYwvTD5u",
  "key17": "44ZPzf5B5BvF7fcuZ1CAS7ABCiDHgaad8G9dS3juGZTbtXKy4E6MufPeLQcQX1eQestD3mAFgPQpJcU8rGpCCgj2",
  "key18": "2GEA16ZVrLkkN3S6wPJ3Yq4r418CGoM7KWCpem5UvAFfxFVamEbMSVB6yBnbhSGDbDeE2VnsdhQinCtEZbBMmgKY",
  "key19": "4JmkNgRBQc84A734L5Gx6nUqixCPH56hs3uxBc9bhwt5NC6MkteRRaGu3ARf2wuWSkoMgW3DHHk5Gk11STE6WSTA",
  "key20": "3KstCbRRiMfi7zGoiViSx2pVxnUJh2JrEkGRetf2xMrjXHQ276xJPsXEAyWiNGHzirhS2d5TtaowKLZHk8LCnzgL",
  "key21": "dSRfgEBazvX8YUvfJYcJZFugSnpTkap1jvjb8qsAeaCmh9m7p1pGQFgc4JkoiCgxLx9sG7ZoDswcgaYA7cQcoL1",
  "key22": "3DpJAybTu3KtY5uJNDcA2UDDyPf7GhuSshcKBue5hWmnjp8C2o4ArJE4moxfNEmtiCqKakFLxCFbrgyHLyZkyENs",
  "key23": "uXpDyQ6sGtxYaWmeAv4rkTdntGpACi5ScdAA9suDiy1cXmE28aRZuDehNaRQqy4ZhY2b3ULJgtbfpnDaRHdGaQ3",
  "key24": "4NabJCREdpqza7cyKuvGGivi4WUnKf8YmqgiSCLMP94Qtja7rmuoMxmaqSsqPpaYToqkwF9K3qEMipB6xmVSwaon",
  "key25": "EUdtxGHfntT4LUsRmD5qvWGWuvqwYdk3wsMGFcAQ5ktTPgtGTsqXxsuUfP6DMNWkKM4jso6kZCaDgmUTff6NKRK",
  "key26": "32bGmgsnn6YWPc5QNwHrdPCghnHoxhnvmihLxmfHPtTgc5d7PMF1BzFRgCGsbhziecjqam1MCRo2dKWdw95vFeKE"
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
