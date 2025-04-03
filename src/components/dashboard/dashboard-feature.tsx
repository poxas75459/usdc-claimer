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
    "4atqUStMZKEZm23XtSijKJDqYU7US9xpp6B97JeSQuULLD9tC1LSCBPxb614zMW6XQ9acCUNtJfvaoMjLPmcRcuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kuyLf57z6TLqcMastAt66JowRFELPbfBjtJVPv7JADsNBJPgC3crjA25jsrrBi2L7Jpe6QaHdF6cpSGq9itcefp",
  "key1": "2k2GdBeaKy1FLD2uCe9BzkjiAEcSC4Q1GQknpBSD8CwTPsw1kLnuE79NNGchvQWsqXZNvqkoD7WBa7dYZv1zDAEg",
  "key2": "2zJmGGU7QHfuzwWE3mUB16xcKVewngfyFWYRRtUwC1v8S2xizvESJuZNjSaq445MChzrdjdf4KsKiiWS943shyHk",
  "key3": "45EyCoaz4qSY1nKEoorbAu92hxMRLgvXXmsYGgKAui4pjghs8NfCA4gVDL57oAEBFre1Z2fja8raqVL2rxTWuTtS",
  "key4": "2G4ED4Ph31RWQzDVAFL1D4Gzok2qGAkzcKamJPoTQnVr12xUbnipFgaBkfgRLixtzbZ8NKK3kvX8LhNwhseM6S7o",
  "key5": "5cczfw38XipfnFo5xqCQUN2AfXJoWDrDMgskAgnK9rTKXyDkxas1UaWhXEjX2tknYtddS5Ue4AYozRe3QKuu7hLp",
  "key6": "4pmzdsgdNRmsLzidwJ7Cngw24JQYU8cQ8QEEUukXZ6jWbFbbeAXYSPJSDqCLKFfkbetzLPShuRT3DACD5c5gfgR8",
  "key7": "49DeGJuunVz8zZZAu5JJXEsM1BkaE2uArUG9cKDjHSRjzAUFBQpBaDbTwEWR8aDfFB3dPyoWMmKoMX3VTDjzQz2P",
  "key8": "27aMHKaGAUsXDaUiutJK9MVyy9w4tksSizEjb3bRCyNrEWMySWW2cTB23BpEr93iHh8GNzhyRnccGWFo9Ex8NuCH",
  "key9": "4Hvs1hDDj5B7cc52RVj6ZSr7a7seYGa6C1Brknu4kacSKpSofmVq4Bf9r5wvJ64abfUjFQXHhMaksQxSpUzShgBD",
  "key10": "63VFpPUFMrfzKZVdqL6ftcgiA78RJjanHSfbiB9NB9GD1MapxPH54K7M1JocBQbpBwXk6AKj1jbModfxUTn1qHDm",
  "key11": "3cY5eJcSSpWcxXxQuZMBr6hLLcG51BPtmMhEWFbAycVqfh2NUUqvG15mfmW7StpjNvMHrJeJLfbYe2gZ2rzb656Y",
  "key12": "27zeAnoFyybTNbkkuSsutNuJ27WHk3vvxzsuMTHZsbj6SjXG3jzw8noDuZoZBFeAjUs196ncrkJ7aoekT2dE2dzM",
  "key13": "4SMU81wcTR3M6Pc9HWNfsPsW91HYHkJvs5womkVkCCgS6cNH95M8rUBiKvWB7BRfNn5HYiAJJ8gsVbK1h2jdonJB",
  "key14": "MM8nm9RxoaAW5a1K7cx9bxwrPgSNfAdSpXgjd6itcxDR4vxarjgkL4o2fE7Bqkcmd7yYomC11iXEDSeAWy4VnWs",
  "key15": "4m4cYemoYGhuYfWeyvZHB3daeJPEikCvRHnNhQiy491tBewWTBRknp3PWj1jwYs2eXJiaB5zZANBXVWyfrVxj4mc",
  "key16": "2jmJHcoEbT75imbKsjEPUEDFATPwwAcw8YiKqY8KmudThyB5s5dUeoKQi3v6ETCwem2jKccjKoKNDqbhFb5fwZoM",
  "key17": "3Tz1D1KjvJto9Q4pGfmLp1goHTYHXUQJBAmmcpgg9jQhmZJdga3GyV6eceeJ11V1uwgxPC6gjTu7C6Zcx6TXXG3e",
  "key18": "5WtfQmLzPqtFr3phWrvKnC9baSTnWU4s2bVSHWv4z3MgqiAw3Py5sdqUr79n13yGNskdCvLhAjbbmX4SmaNVepr2",
  "key19": "3sDBdNmvmecrR3reo7NbhPN2gjbDX7uJrZMuLtqEmqUmJMoVzmD4DBFD9y7dsnrhFbsVCT9ZnyRYANkWvrkt7rNT",
  "key20": "3ctA6Xx5MUq5ygJWjLunkBZFXdNymMsa8UkcZUZaijB6UGd3k9sfdxFWC3N7RyALvd24gJ4ohrYtQ3ERtH3HdcYx",
  "key21": "2ZCJPtuqGj38YRKaads1YN4pXCE5gcb435w1aK7cq1xzTd7HqpqxP7mMwVtPz2C4uoicZryPPAX1PY4BsAvVvLBW",
  "key22": "2S58UQ67rGRRc9T2tY8tfxp99Dsy6SepR3BxDB3dNBzQXr8h6JhAjoe8XjSwaEWpve6zdWfiyAGDHhsamW4FQ1md",
  "key23": "3RJaT1t6Krmve4ZuKbCPs9pMa5n3eSgxVjLBMJanFpVFFEx4jGaQbgAvCHtMWHPcmaEiuBJyYX478zpg83qPttxK",
  "key24": "3kLg2ni8cmu9oZpgivRFUCzTJxtjTGMayXQkQqyfeuoGGKwDqBPATjWVX2RXNaWTMCxANVMCnDQEoVestoVEohFp"
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
