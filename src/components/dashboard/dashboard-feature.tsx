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
    "2EWdevpREGriPNvJTbie2pUxNwDfNLK2ZWfoopVA15Hwi76CE6fv5yURYSjUGBRbevwQAW2v2EHEZxMQ44xAPzRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTSUGagvaU7PsVuNCLtqA825SgZFVfmFjVga9FNiUfs4fNGFYetPiiujmPYvfhPqnSqtYMwMzT5fzXsQJLLFPex",
  "key1": "4BJepTWTLHeMh1BtaNwyqVLfkwdnHCeH7ULhBpBTNnmt9iVTw95DExB8uTXPWcfdqPApoLG8dMqWf5uuZfjP7R1Q",
  "key2": "5ciZxrCcSpXo4LfZ761RL2JMC5Q3TZEe34vmnk5QSEoyp8VrTpSVmwYToHxgtMRnYsUQNyP2CZy2KxryRfGhmc6a",
  "key3": "2JHkchhLkbau9PkM46j8BDPBohzyms3qdYyzvLC5g4qzD5givLHQSn8vmLBAr2zSPgQ688MCD614Ex9Ag6eyrSCo",
  "key4": "5FXLB49qi2eFz5w1MiA3hgJ1fNRap4WNLMJXXKDuXjxWQ7i3psbid4ryqz89BiaqHEuAd3TTfHt2HKiL2GtQTUFS",
  "key5": "46a2mEnM1w3SCYjBBbH8LvXj2Aqs48MxhxdeeyTGKRaNoEbf8xC4KaVqNM5mxEGiH2NFjpADcT2D7fQ6rfQP14MX",
  "key6": "5XnhaVGFMCLJ788QpnJbZzimSbjDcGnM6w9YU3QaRxn5vu9paypsaZJjT9BqvmPkJ5SLfMDZF8NDjUnwjPJjiZkW",
  "key7": "CYiUXBkxa1vYrvX1mDARYWxVnEE8XLcdPyxuiLscRuQxEeBkHKCWc4icWQTavrw1NCDuZE9vV3owgYbz4VCqjbu",
  "key8": "2GxAXR7hhu1NHxkD9Znm25SwaKXUkQ4eFmReffzfPsEXY56NFgZV3BRgTpm9fsAdoQdLP3sQM8Y54LHfRE9NTqHM",
  "key9": "2qJhwuAcDLy7Pt8NNmwbyRSfFwQy3TrJbbqtYeffTMNvgwZBL9Z79Xw79xTuR1WjRoY9ur8xcDBpu1YWzJX5JHZF",
  "key10": "4NdiUdHbwHmT7JiNQsSYTictcSu9QNthS5r5UvGvb6LLVmMWz9MkoQdP1FuDTrfLFxfzPR9Qfvc6YVRC1F2WtVg5",
  "key11": "Hp12gDWyAZU4MvoHg73hdqpxybriztXnZtoDsJJhmhkh6RKoP2Wkhq67vJMaRYB25qN94WGDqPFzxvFsm3aMLNf",
  "key12": "vPUxALeUFVxf4DRjF6bYhFvZFjKTrzMeVTsJ1ALpvEBgQqXqEuq2KAVaX9XnjjfBCuG1K4YDdR7ZxEypNz9erdS",
  "key13": "gsShoihudXzjzn5hMR7CXad5CqRCgPtaH5vrwiBZbQ6BuSzBFzaeeQcB1zoLgkgokutHfBi9E39JuU4TntmgKgB",
  "key14": "5LYyfbc5CLCpm5iN8XW9sVSkYBA1kzK9E7EGk9JGHcB3nHBkKTLwevJdeH4z4VWLtij2FZktXK82xDwqe8goHHq8",
  "key15": "4S4erhPLK9UqMPVgszQFLTBamnbyPvzJYAUWKpBdRbJRTMXocEUzPuUG9SuCnn1RVkXGCpMB375frQz5AAcNwNYB",
  "key16": "W9bDJKoi3ooj6EXprbBiTarSXgVwtrPcQsjC2H2efzJmoyox7EvLcqutKqBPSd78t2mQA9chKaediukCqdxEkE9",
  "key17": "2NWcPWDSG7TpqCYMBN84audbxGAzKnZZMNDKD215VVVWFsjvzsa6L5tn3jvvb6UcbPVsLj6DeWPMszGfrSK56rJL",
  "key18": "3J5bt2cUB6MtuUQG3xmCwg9SRBmV62PE7ckrw1bxwkZpvUGXcfxzYA623eRDyof78s1SubsmRSWuoHseBLUZGmDZ",
  "key19": "38TRJSQiUkm8JSqB9uAJ5w6Bs4kJWpCGa5giF342gQFYbb9kugssmEpMbgYv2GLkhczTdo2fck1LsCgREzSMsMGr",
  "key20": "51KvVHQoFA4ZEP5t2CuQ1KnQzX6xuiXADeXcNU1CLiAPrhNZu7mEisXgp3tse3DEANDBmzNgQMmPnSjpuMgxDrUi",
  "key21": "gPkSLm6phTrzD9F5AhRB3RRqfcVpWGFJqRjuMfmUWHReZHvjWKUerzGJ2t6tykuUFX9QNsQCWmDixrBNeJ6X4yB",
  "key22": "53jjCwX9ZQMBkciuwP5ayHPxxNbFnbYhyZhfEANNYPS5bEoY2gV1PfKYe2MR2n66yaUzX5bpRcR9fGGiHtqDiQv9",
  "key23": "5T6r9mLDrQDWK3YN9B4AJLpgHGvhSEzAdK7aZsPFr876W51jC5mNpstgmZ9ZPm1AwTFNdkuw7G6WhPFpQqVuzaxf",
  "key24": "5BarYfd1P5kdwGTgj2E31es6ejurpwYq5xsrhgEHrmPs7mRYmn4TWj4rwRa6jNj7yrLCtj26Ws5MKZ5Rhmq23NB8",
  "key25": "2SMFevzwNEXxh8MDUmZomvSw33ZG9QLh3kQdGf74Hb7X5aAiS9YP6Dtbz8zr7t5WZU7iBmGDmprSvVELv2p4AoEB",
  "key26": "5hPBrmtqCHn8y9SUSdvCxdgTcwtCEmNddpdnRvs1QHyHRdyhxw51A2pHLFcquS2wZ7cvi5vQBcprB8yfAWVmH8FQ",
  "key27": "49fgw1bAyrrgD6XMTCkfT6ZCu175TFZuidAbegcTQRLf6MhSHMKwwwjSNbxCmrZ5tdMvS9uGvfBdK7kwMMojHw9U"
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
