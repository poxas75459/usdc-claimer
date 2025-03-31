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
    "3DeAd64qPT7BwtqNuAaMY5N1AvyJYRoD2D73U9kMhb3bbc9RbeHr6GxpWzeSg4Bsj5BVDDu3SsKmFDym8pr2SUHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51utgiAjNoL3BfbJzexCgZwbK8feLc9wkgzv4urjg4bTgPZhEFncsrxYe42hvkGeoChTegxbjX7PQ5UwcFJ5GbK8",
  "key1": "5iBoNBLsJDo8yWYVBrFreQ6bnSghG4P5dkE53Nm6i7jgMW9DNXRs1gMufL5pnttWcGY4ezMPQTFYnUnbPj7fA68E",
  "key2": "4LXk6mvjVqbptxHRs1r5s8AVqDqasstpGryL3fnFiRwjvt3EGNhNKijAJw7nuhD1o8QBasTrWytpZ6zCjURHL22B",
  "key3": "4f4qLtyRpQsRznzu9rYfB14uYRvZE2RkmvDjtx5k6qsc2udbzxgLuXDmMB43YFwxyAdDweYKUiT5nmvoGbTgbawZ",
  "key4": "5P3smCMDXbN7gpynSiC2A2jRwppWT9Dik4PABTugVqYsG2xkuJU7oDKHkdXWqxBwoSKZfGRoWAMDowz3wxyKkVMu",
  "key5": "25Loq8n1Qx6XLXYfbsE2oJfKZQXsiSrw2ary7w2cJx31EMrj1q3aEG5Krg1prYpCVfbnx3hBvbDJ3HaqmNfXQe7x",
  "key6": "2rrJVwtMAoP6HgaQeoU3sHj3sN2mCRTLoM4iPLuPUL9mADhqgvRcG5jg8EBXbuGL25xQhmW9LGR7TWrQXBFZi6N1",
  "key7": "5qxq4ZWAY5CsXBPxd4Uc8zeqm3RmYJ2T9HdKwUHTPWvFTe3u4DMPTkzRetnnKTfqkqWwfaYCAtsoEHeTJt9qunCr",
  "key8": "2mfSFHnKZ341bPfYJpoLHJpGigJLzUDX3sv1DfJgmy9C51prjhchDTSvpFKyJmpKmMdkiWRgpCbfZjy74YQYAvhe",
  "key9": "2sv8FpMsYXbw6hXntsZeXX61Xf7hzPttn2Dzjc9iYMPZH3Kxx5ejx1pTGMSEBT2MfVGdTUHEEPL5PrxuQVzbxn3b",
  "key10": "5URXyENHUwE585owLb7Uazcuk2Vsr1NKV7kXEzx9kxTeAW84ov5cZRu1LugyjGdQHAqxaXtNAy9zWf2piTkAyT99",
  "key11": "5FGmMhq2FGDD8kigNCc1DJ56L3kbi2BfFwS662ArwfYHqw5RDbrb7o77Cx6CuEeqhrsJn5eirzhxUk36D1qVAtNn",
  "key12": "3DHEZiGrFMvS9c8tQzHYLqQAMRDtp3ngBxzc4a49ARhadF9YHLdvEsiv7zLLqRkBpuB8rRQEskFB3LZcqEqZU7i7",
  "key13": "5pd1PukRBy8zH3ABoGW9Q9Yc2iEgFwbmV694WsAeeLgtn8GbgRZScrgV3NedjZwQfjpJbawDTssFkvY6h8sKmZ7k",
  "key14": "4Vp8m4DYWYWm1EFEr1pgqQVN1cGwh8maQstzzpXPuVP88cH1WEchWRRhiZtTiMCSJHYiiXqfCoGZ5vt8gd1XMdog",
  "key15": "21vKoJGjhYqjdbH5r4d9tLRJhZkPkjzLSqpzhKSEDBAJiY7XmkpNnWAVkSmxdo6uRYfw9Cw9BbWxwW73FUL3V9Lj",
  "key16": "4UTsasK626RKqrpkPL3ZNKJjdZxj4cJV8GqykZXD3jrTVoDYfagFWNMcSCHYwY7YBgJS4JVWn7cKQ8pBLCpKJkm1",
  "key17": "2LtZ7pKxJsDQ1SuABFhGS4oiXcuacP5UVadqGvkVEk18FFeAEZPiurry6dKhnwJpp8PHteM2rTw2rmN2Eanrq2ho",
  "key18": "5nkJMnn7u5iQZRQCHWQkhWxskoVwW7AUzdd1GXuGpJ2o9KfD7jcv6XZHA4TEoPN9Xzc42ds7YsWHjEZjfAmdpyMa",
  "key19": "2rMJdmsA5NkHvoKaKjbcq6vgqBF8qt9bSHm4c69MiCzBJQGhbCLGvCfihhMYBGLMbKaeeTmBfUJcaE7GrSn9t1qW",
  "key20": "Tn5YK2fSm8qtPkwiTrNmrsFh7GeJfM9K8t8y7FtFdk4faQ6SNkMGJvNPSm5R3aq7LNmhQzRDjuFy41aTF9HCBTK",
  "key21": "4ynVzfujRSbpFgCgfCowM5tRMagGAUFbF1uzisMNkbFyM4ESp1Xsy6tqVa6drc9cGDU4avYHA5xxRGWfJacJUt3k",
  "key22": "2L7XjqX5Bcx17tuuzaFMSz9Lzmme3ESoLeFMNLGuSmXiSNCRtWaHKqqdzsNjf82UnBF28LZwfTkvWPSGk5p6Yw5J",
  "key23": "3r2kc3ywR8BjS4BnLALCF2QmyGXCv221fm1CAmnAg29eVWCMDb5VDoF2VE3JAcXFv8DFTL1iqTnmbyCeA8HVh8R8",
  "key24": "2iibHz8DT8cPCa3khpTfdD7j78agBWoo5G1cTShKHZj1teFZpiuhYM2vZUo4uF3A7DK9mSeowS4PHFJoa4G5mxVF",
  "key25": "4sXu1i5UsM8RnaHtxf7V1rWPSDR3GqAtQUafzj7AEmoeau22JyWtuNAsf9KoxUwM23yQvw3oNaUczff1QtgGe2Ti",
  "key26": "21Bmpm4cckqpJsxrJQxSJrkUguDwna32nGirc1BG4o1MW3MJ6wsF5kn6euPTFG3xbW275kULutoe77KBithptnNQ"
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
