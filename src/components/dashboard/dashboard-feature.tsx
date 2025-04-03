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
    "5HzkQCgpom33eCXMRwrnGKRMUcAgAvzC8wzq6X7YULzA4NA687WU5GkH3RE3EQEFXS2XwBfm5hewk9Vz8qMZJsk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFVroC37ad4vVNf7z7yoM4jZQvhrRj6vCJsQGVqvUZ7vV6TZnUua4m3xwBkx23JFPyqgrHjQtjQVSJNZ4txTkQ6",
  "key1": "2TPtgadNjHMDPRY68pKdP1GFWnYgoSASRUfcLVKGJupN2PNGxwK9oy72DZ5H3dFy7VkHzN8WwgU7abfKedFFtxUu",
  "key2": "3c1otUmHFYjQHkL4vR8XH3ZC9nH7VNLqWRpEoLAbsMsKM44DUN9rKb3w72fgVoFcnCEiuPPsRBPAfUV6ZUkbudAS",
  "key3": "4tvWHewfQoLKoQjA7xzJm9mvwTkUibwsiJoKStw3EQLZsnZGJGuuGUhY4uqxqnfZG7dx2uFUknjcXBMGbkHLHm4",
  "key4": "58YGDPhd5Sm9pDFaWQo7GYvNH2HWeK4Bor4TB83RnnKNme3XNvS7VPGdVeVe8ndZADcSgZY9x4dHC2EiUZzTBFWE",
  "key5": "3A8EgaNXsJg5K9QJyaTrc7PFFU2P8NPTvDp6aradM8reRwotprFW5YT1P8skGoFxPhReucRW7g7xsvu7kWWUNZFe",
  "key6": "3itJSkkvHFZKPGY6sEQJ1wfnq5DfkUzrctuNz8VfTWtGYMDWSmdpwMiCTPMajba9uho5hoyBYABBtBj459NuDWEt",
  "key7": "4KisZbTNfyG5sgwDU1DAsh7bD2PjUZrjYqUyT9grd1MZpooRT32qJgtePRXabZ7h1rZPeDh8FF2R82DQTLWDo3q8",
  "key8": "3hxEwysXFiB1xEZ9vWHd6fvJxNALk5ePpkzm7z8CJK3F7a1sVz8Ld26XV42gfMVuoJVDyonjNmouwtLMDfoUS4qk",
  "key9": "qbZ631CJuYHAKcbx5jWyopRhYEAHpoxyHzwmsjM9dkESRSqRChN4ncRyPSSwM2zNa5gEqfKRnsTrrjxu9TaGUYD",
  "key10": "2nYXRFiQZfY49FUy7mX7tFZysu1Mevoiznw3wya7gHdZXbYrpHHMmqfhcch2u8EffZ7CDXzFpchGdkp25W3Wnk2g",
  "key11": "4gi4b51DcpLVUKK3Bm1PkCoTHKxyHrq9yvQYqHNFL7TjL9c3iY9wDhVdyB9f7cWZ6UvAx2QHBAz4gaXwZ6UnmDq4",
  "key12": "69L2rCJFmdGN3akNMepXVHSM9kdxeiGUVXbUR3PLn3wEzhX15WWRXRyHDBL2MV44o6KRRC2KqAMgC9oasbashqm",
  "key13": "g9JPqaDox5yK8YusfKu97mPg2QVrEyBxmgD46jwh9DediZWCTUvn3ZEqXgZUSnDLj6GtWjbLGrQHy3yPBTgQnMM",
  "key14": "3vydBwkyRJc2c9wp7FAEbGmMu6mDhuMpG3YBWPGor6VkhLxEc8dLuQw1NRtLcSa1UogxdqDxFA99wXs6muXcg6MU",
  "key15": "2RkwbtmX7TqEFB5v54AhPaYs3BSVYAtKVQPDq1oAK4dsS1ZKMn3xN1pToWeC3MWWKxULTpCJeECgZxTPCkwBM5qn",
  "key16": "2Gtft8HZuK7GcG9hhfdPsVtepJsgWK2AgPH6JUhABT1MxHwJLo99Fnu8tFWRABsYCgW9iZ6ASjo9RR5Q4pTgTHQo",
  "key17": "DgrDz3NAkKX4eypkJqEhqXPMq5EqzazgNuatgEg2sPo1E8z974W7WyE9P43nxQAB3TQyLjB9Gj8rDDE7NZ9WQyH",
  "key18": "3oAMc7fHyC72JmP2s2iR1TqXPuykuBi3wjWpsLaRu4V9DY5DcehU46uVVPceLjgUrCRZMDFWy6bdvfvF5xuXTn3A",
  "key19": "2R6214r5zNxDBySw7aBCH3crfh4HpxTUVw2npUzGAD4ern2MS3jzZU9UVtQhSHjunb8WWc4Y44dgatTcZMYFjDYX",
  "key20": "ZZKZY2Qi9c2fscXGDyVhWKdduJQ8F7L2nUQaP9JbygkiNZLkvCzRtZozP523XeC5hsHRTgWdm2qzcq6DxfPS5Ak",
  "key21": "WbJVicMFH2sLCdDdCDmGADoVWMi61if2AqzYuHsUJL8je2DoEq48AVGm21PdzHtRyieLTaehhxA7pBMyKuxk5rm",
  "key22": "3SuczqeSrrmFA5pKEjhcV723aRsTMmuFPg1WuDTQ3U6QqtWxvrTPYq1wTgd8issBFA2ti5dqm2YtvyDvaPDGNwLi",
  "key23": "3CGyKLZ7UHhvZZ7nXqwYGcngiJdtA2jnRTMmu8Px4K4ZEfHqLferbcScFc8aRN7vC1vH1oPbebvQuu6ZgmmmKF4m",
  "key24": "5To4qxSWqsV4phc5gnaz39Pa8RoRB9W5pf95SD4DC2WRVBBag4zk6YTo59qabKUkDMfRBwkZeoorzuH6hDZocrrt"
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
