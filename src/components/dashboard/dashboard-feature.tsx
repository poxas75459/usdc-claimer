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
    "5QiqirSCS8G7X2tq6PVvbqayoM768ac9gwfdC9V3Trb8Rm1ErWdbJjkaeq9m2LCNvexsmzrxKVMQtXF3b2t2mxFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgxFy7qmkujXZ8QqCcoF54JQcQrmRLQZwGB3KHJ8cShGPUEaA7X74PVup5sVHcp4CpYhnk4rWjWaLMHTqKyYoD3",
  "key1": "4u4dvBmMps8KfqrpwGebGFfGuagojRP4qmgoLXT6faCnKqwXQqVBMTv4tL4GKirwAqVuqUZQmkhEirV8kcjPE6G5",
  "key2": "3vSYy6hVpSCc2eAW4ynjUgdJ9Y4EkcnLh6Ycv4j1vmNFSrsCGdcceHP24hyNRkAiNZ4d4TFzcweEZYVEkVUJuLX",
  "key3": "4odXxrGbVkEa7NxejEX47fZLyAYvqsQ3Koc6uEqiGbifkfR4LXuumrFTi9HuwSwDnAN7DjdyZePddtQqMPD4Exbz",
  "key4": "325E7H98k8GB5CUbykP5G6VJM2BcQCUw9aMsL9qHAKpnCbHEkFSfPA62EsFN4hPEAQLQsWmJzixAGYLcTJ2neGNT",
  "key5": "4oRoe9BqEvtDD5wknat8r2xW8BJenuW5KuzX62dkC25TzZFKzuEJKrV38T1NHKv11pRataPbVtq5PZ46XVFP1qi2",
  "key6": "3VCNy8vURVndExPRzucxgWMMZZm2ZAFL9WFPoLDNrcEV6mWxyiQdLaaCvYAf4qf1qkyLuUquCj716ydCFiN6mDaV",
  "key7": "PEUHGaYTaXrT4j1ztVKd5oYgHDciByScVGXze1Gk42BXLWye5HnW6XW2rEwKyTXssqixyQru7eu9daPH2tQKYC5",
  "key8": "5DXHqd68SqXJEiAKWWfFwRNCHBwHMMBUCWD9Z8pLSdwsAmcdTeanfUNMWd7vGzKsRYTCuRk7GUs2TknTEZ4DegpX",
  "key9": "vMNw2t3mkuAksMAX5HxSpNVLitbfMM7i5FKtTkRj9hpPcwj6veE3GEhDhJkXTTJw48M3x57eBoVpAPNMqtG2oK6",
  "key10": "43vYcNqEFkr4GA6KNorp5tSb9yafZnGeTDC8uZyp55tTcdhP7eanMwjoNRcfu3tBbCjvxs4wgFfx6Nn8waYZ3ge5",
  "key11": "Y2G7Jacv21o7pUceLZbk2hyubHQNZBtGimY5inzvHsvTSNrQ2yH4kFpTkNnp9VS5igwtSH4sjMwGzS8sXnH7kgY",
  "key12": "bKmfxm44cpZhLP3FUCqrhNkr6tzD6gBaBWkF3R7XXRtGyUV2qaoMh7qiaJikP43VJorQ8cFqQRcLAEWAETf7Whb",
  "key13": "43dJNqAGJHxPiPjeKg4fDTHH2AhccpoXvWDtvbJp53g63iiGUCYPB4kuRvDjPkcebtrqJKoq6fpfC1z5oMQEVX5p",
  "key14": "5ib1YSYnVHpAjEpr3bfRSsBCmGY4fFbyTwpxcs1rC5VPMmm23J83XEKNiDk75oECFdA7ZMS38g2JYDKX1RQYLN5s",
  "key15": "3GvE7wRZ2FjsEWDmMz9oedyqtK9qszgo1gcWuWC2yD59zSbVGDk2dnewN9YtTDHjGH6HMq5VHALYVLXq8BE7wEZ2",
  "key16": "4YyrSr2sqmpkgwzRaogeL5AUgEqr9AssYwQRDarFKdfveFKjye69WhU9H4NjHQGQwd8bvb7kXk9sLvHMA2tT9Zse",
  "key17": "iVKbsitNeuMU5VqnkNKcreZvM6JGJLphCoiVMi1z9F8eFfWkfvYZN59h2o84rWYkPXJW8KAZjXgVVavBrz67Tqz",
  "key18": "528Rtyhx2VnBCEwcS9yDd1oABPkiwGfHMJgXLcVmVe6vMsptEN4rBZLBnQ41z2cbwoXRXgx5PvkgHUqsLfJByqJN",
  "key19": "2Nbw6rvv1w2Ms6AzjohCa27t5yqa1ypVLPhibb3bNQiVk4LoC4VT3S4qseyoiwEw1VBQWjW4N7qu92zZURtjkAtJ",
  "key20": "2QyDtsHwtAwsKxzGXLXcpzfsPrgKjBEAoq6dqjgCybyGoS7R24U8S9jvCH1CJdEnspWkLP74sJBhdn28RWsq4g2d",
  "key21": "5eHDpEwKhcaDWR4AE2p5m1wmhJBWhdyMewtMwZNDKUNLBCrXAx68b4CWS74hkK8fkRVjR8G6PJdNZYwWgqvxcvfj",
  "key22": "2fZgPVrU1JruKXXvXdQm4fHMXiK5GG1ouhBMPpxTX1owRda8gXzAVcpU5zDQJoLU4DszUu96HjbA2WhzNU5kWYpK",
  "key23": "2bKysQhz5Wd5HydoDn7Co3FhT4k8m52udFB313oxuhZMQGf4oBhLkKiLY9VEVHiQfHSbQcQpmKNjJapGesDJHkQk",
  "key24": "56i22xkF3uMoejpNuCY5eqzVRVErTKeDhd6LNFEBd5X39idNtZQyY3eZZWEJ36qmFxvZbhvmu6ebX4dcJNSLaFUD",
  "key25": "2cfskDeJ1cVMC3tcJtAKNv3Be7g4ZuqdaxajXuVakwAQ2knEukQQbkTLLYFD5HtWsHZTmpsgSPRVR4X1L55W7uWw"
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
