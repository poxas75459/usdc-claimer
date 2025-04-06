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
    "5hAXK22mg5tvfYPdpM7L2974kNGf313pKDTAM8udiUYDGsMGaSMCbtGveN7VCBBRX9njwiKM5qspG95D2yH17SCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8KwdAoLpyPVsgGQWx5FjVDRKAivwmpjj6EXsHuGxoU8LxkFofCK2sA2pL8iuvMSKfsLqUYaPmH8wPG4EWAsJe1",
  "key1": "4zNRDZ4kqQpD3F95MeAHp9qPKcnE9rBEEixBRpJKEkaZvAmpzAZq2FaBp9uja9iLxik4vyepvf7rBLPGd3uETCnj",
  "key2": "58JD2BWNYGv3wEvho81bWS1M4P6RZeXfHiNoB5BRdk31HHZCdN2PPX4wkknJzY1z77LxYX5pVk23LoqNqYbw65yy",
  "key3": "2WD9k2cdaR5Sy9BERn61w7CR8i1b35eYdpMsCRHsopLPBugNgDRM2VEzrPLxsBHceQy7XX77f84YZqPfq7Qzjywc",
  "key4": "4un4sGM6zyu7aFePwg6tXA3ViqrV6LyUVco3xdkCM52LLBXDhU5c7XeH9Fb75krNeHAGcGYBMsSjaWByRL63scPP",
  "key5": "CN1QGD8kt7LR34nUARzdYzRgmgrT1Xqy389WovcUTRu6Ga7Ra2KPShC5nTjSFo2KgaDDSzdd6nCb341iuJXrHBw",
  "key6": "5q3cHgP4Nyg1M7MCJyS5JWN3LS75R5zBZ4sezmBQMoiAM4hqSvCPUc6K5baWEAzWXnu99A2wfhFFtGtJCUJocj4b",
  "key7": "2EKZaufe1FHeTZtErLWbEMMw5SmjRE5tJNFhLNxPmYJiUFMCcpScg8bqBVmcBFP8s131eGo6Etac2QKx1nx4yrPy",
  "key8": "46r9719ExN9XfaMCXr4bVBG6xdjjGkfSkDVL6ywuh8nen5dR5cTYfwhJmsfvzYp1iNmdu3Z7hLfLdi45HpGKgVXT",
  "key9": "3upsE36nhHHgNB1P2ckmS6AP28PM5R6gzAiSvMYk118uPn2GKGSaXeegeN6yKHQtNtUuX8FK962hgJmkSopBsSCB",
  "key10": "3cfZ6DMApZN8KmnTgQoMoeyVvhyUX8gaNJ1X2wroWQXqiBicGwaks3tnrd2AAxqvWsudhgvLUwr4KVXzWw3M2Jyy",
  "key11": "3jMw8cxT3CaeNDVTvUaQY2LpxacJjj1WfAgvb8k1T59P5DuVggoATyRRvYYkfrLurWuQc5YuEGchjD7CqRMnez4",
  "key12": "4h2VjF9UkQ8geVaqp94hfpQMqNVG7EXfyV6MgGpMnA4bJeygv1PB85guWTWS9AJi9srybYoE8faMb5Xd36xqHaWN",
  "key13": "4o3hwU17FAcZcMGzs2o6y8AUWyReE2JrQCAde8UxxQbfSG4cHv4eMrXc8PcJaXKMNmZeFnHonMpT1t3kJe53hefp",
  "key14": "5jUGw4vCaCZfmVZ3tfq79o5WZ3dNF3T5dBUGVH3cAaFGEy5dnLVuMkwH3EcHwUfo3PfQU6TYdsGZTQgEMRpb1BQP",
  "key15": "4VCkMyadDs8otCMwqEAYNb1XJ3BnUTAsfivKJJAiJf9bfdUARXbxjPsB8Kbf67gVqWmuvFQPqhQ5Eccrpbm8YX3F",
  "key16": "5QKyTvjXkifVYnb5EfwEjpJ8Mm3xKVChau1pFrgkR7TV7aQm2u4gE4U4bs29GcAMnEXWVCPoW1wA4osz4AEoufei",
  "key17": "3qt4BYb7MsyCd1pbQWyWrM5hmdbyX2qfv3htQgocKm16b8pj6QFsL2r5uDqFKgFubMfjba7aTVZK434bQstTwwUa",
  "key18": "4e9qTWAS7r2q9ezMYx9tpzYY9K8vQww49YzQJEMECbAFEZZw8qbfH1WE7oBse3auvvHhFszTViSwnBFYxMauw6pD",
  "key19": "2PK1NYJXe71auTo26MGe4LKWZuf6B696bWg1JCEBH3JTneEqQ2xRvzfZdYBxhUnF3HfsHqu9FFNgu9s83C17BgN4",
  "key20": "26owkhvuuQfshmjwoem1ojAii5AUgSw15NUjmt8gbi75bUurTVn1WVpnyA3vn8Tjz7y84UTxQ59WXSzv2rR7uYGz",
  "key21": "Zt6ALDK5hNdj8SbBcwFp7h6rjknKTMQsJuEHeysCXKWahbmJXRwGsB5KbA1eKDB5UhnhrfdgxeXRoBe6886rPss",
  "key22": "4Jf8CkQvVfgjNSZ7BSsqRPMqsnWSyEvcqpyginceUPvqM99qhLaBfpVuDg8uZcKmdCmoiiJLGbHWj6sSiRZue644",
  "key23": "LR37JfMNibUA5LavsikHQQek2Yh9eMwysqcEGSThAcv5dx6zFvhUFqqkBCbC8qU5bmS5zdr8C885dpc4rJNW9LE",
  "key24": "3BmDidvkz3yKTQ6RNdqbznkqtQhLjZvG2fphJHjNDmW32LG7o8Ai1iVP8VXMnPCPGKrP8URYK2orhMFMcLRrTG9J",
  "key25": "4AKRAngaWZLJCx3sSXN6uFzZnuJ6BSTSMSqnhiGK3kr88pYJqfXqeCqdDNGdCUk1VTZbHgKdYzQKTSktP6dAKoNb",
  "key26": "5GSeMmanhkXprzLBt59kHEhnT9Az4SCH5ybvNWYDdAsWbtwUo7f72xHaYvMQwUkdWk8xSjLgC6StBgJFhTRCkwkq",
  "key27": "5HeVSzr6BAJa2EuVQUxoW3CxyUwK3ZAnzCF5w4H51YncvaB5dGYoEkFJiyV6zpuXpkcq3THz15mUxv1kVd7Z84ip",
  "key28": "3VcQTZg5Ha6ERbppySF4UEtozWx9GzXMBLZZxyqWHiELhGBMstwedrD69B5v1cjjpjfD2BfBH56rqiFckGwCN7zp"
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
