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
    "ynTxmftTJ8fkcVP3Q1irQJWN5tEx1B59FNkQ7Za4DLz3MA7pwfR1KXtiksiuhL1434PBiPJeknNRoRCmE9WsZxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyVGsMHAb2yp8N6zktLdjaHWUUdG3kHSqW3TN1mVrYBxAu1z4JgNq5udvUvqJYfHrcjwSEzFeBEFFhRWFwgRiB1",
  "key1": "62HWz2V7abSzeKwEtsAHiM8N5Ghgm1DoxhCSQR57Xjye3NPK4ETc45MVtAi6Gxzja4oTEMYcvHzMesezmxnzcbTY",
  "key2": "2mWg3mRJRZvW3UTaAuNjvujREPW94YEaYafLYyCX87dk47BQJEd3iEHMAZLWD2kMxrgig5fEvT7ntcAc9m6cCaNc",
  "key3": "2DQRsGvZUvDoth9N4Sa3fMPMvyMVCqUfc6zRReEcjyBYLErZs8bzepSzu6yQG22ZKPJ8QUuPBMrQfJShLAywQrk9",
  "key4": "52gwCt5V3cgcQWGrTuHpgRE9pL3Zf411ZtGt71MMWR2twZQCWo2ZWQeT5BbyZd5SnBvsU9tC9aEuMEw6qni8GTQN",
  "key5": "VLxhkyEP2P8cYtz4kV2qGoSDWtTZYsY6UGq7nqRLQswWpfNH93XHSLNy1rn3BpFy5gBCvt6z9axJJV4MXuXEJei",
  "key6": "fwmYkzKgFNiG2WSTCVoySc8tmRpsMYq4xviHALUFTsoVdvwbTRGD54KrKXXSCsY9XzBT3WFBCxEuKq9d3j9MzBq",
  "key7": "5F4CoWSKhuzhC8aeW8AHHYcLZ5ncNgBVKBKtctkPUdtJsjtNTN8xh3ZNoBKfJVUmXfUPTPDEjCYoQi7Y5zwkmTov",
  "key8": "4YaR3G68cmpNYwA3px9vyJBasZMCQjb3zqzm6VmkLGVp6Leqa6ouFYmgXixpPEZMWzDNHu2LVVvdDaCqJFNj6xhX",
  "key9": "2VmChqUUNoiEvb6NTfhKra6CsZnkdnvxxddbuyCrfkUkVKm5UtxiNj3FDhoAis3W1XsWTPjWdEKcW4M8mvjkvvTk",
  "key10": "3GxgQc3RQdjHa7VFstHgg7U8qMZYLeDCJoKdYBKujMgzhjRT7FSxM5EwVG6KFPWXNRPP6LQewxh8MaE1Swo8ZUzz",
  "key11": "3JqNZeEedpRi2CAMzNL56DpwPNCUP15q7PQF2K4fqigGbQsS2mWskci2G91a3LnebmpFsiyDgiTPvdrMKG225eQU",
  "key12": "127UUN6SrqucyKY4JpDfxJCBVXMkRorgAeHox4BnMctDoxdmUW34VcYWGBQ5DZm3WRMmzK1eCpnoNMSNKcJYaxVX",
  "key13": "2HBBKjux8UZTtMRDWVy4r4zLPW8mLvW8KeoGMTDyubCVkeKQ4wh9pSP2ny1GrewmstuucD4hcKU8H31gxjPHTSW6",
  "key14": "N1oFNSjR3P5BLb3mojwA49CtHSaCd5nhPAYzw9Brm95JJMTNTE67Vs4SyRgP6Vp7ampdjvkK4QEUzULyDeyfTCe",
  "key15": "4j1gd6VfbseVZzB9VrMGqbPPSsqXojjZA5jshtJLMZQ5q1KnoqLzJJcr5yvFhSvSNRpmZcAghDzqCXfA8q4gLJca",
  "key16": "3g553kjRMvAwExeA1e8hmkX1BgnGMvgDtHsmEYrebJnDnRizKJD6mtfoacBNRx5NanBP3vsGNF742QBWp7kGrVpU",
  "key17": "3EK3L1yvY6CzbjPU9GGjDqb8VmdoitgrD34YdyRj73s4WStrEffaBwEbAEbtybZ71osGnR8jpST4ECteLjHzBoee",
  "key18": "4YVo74mKBT4oiCTV4NCGHNcNsCjvNF9979XVNZCxChpHQfE8dzMMvvXGtRUGBQfwTdifwaXpaubcGWi1VWGoFxfP",
  "key19": "4v8MwQnvZmiuzZV4erXCLN3YLFyaVhJeeGBQzsZnkAHUArEcxph5jMPHnKcidSs8R8y3WWbK1XNoGHQKmEyj7jb3",
  "key20": "4RDGsHNUZAWg6WbXoMZweCwr5f6S2Le25Yu5Uy1LLEgrVJfSNcnTthUeYY9pmSkBnfzVD463f7ri16QDyhDA33KB",
  "key21": "47NizQJZYa7Cmbkh8Kp2yBt3wwfcuqMaEeESpQbKX5jugtXH55hfQjqvZSR2ZrM4DhsV3nhar1Gou37kNiqnkNEZ",
  "key22": "5tn2dEJ74cMNNmnkHq2S1sFUKknHTujj5XDPThtxUeeN3VAWXGASE53iKvCUXvJ6Ngj57YB9eLN92xvahwgPsJ8k",
  "key23": "5wTmWswrccVHh484vm8JSUeSj1bGhThCtU4fkq2nus4C4yL4s5BPiByvKdiGEqcJt4UuoJoYnXA23TpZ8DDfdQ18",
  "key24": "5kK8W9rBi86kWpJRzYbjEtC2XjCaPKyPZN6BNT7mmnt7e3umpKXi4HbX8D87R1QZ382FbaHFaCkQd64Yb1DQxNAQ",
  "key25": "2bZkpHQz3u3ZzJ7MiJL7MRc9cAS5FPfgL1Sr85YbJgC4WUr2oWkukb1RP2iM92M2xeYmhSmFoZvHpJkPp2GaUYXW",
  "key26": "NtDs2rgoJsBaTApZ2tF6bhRkZWxWHRfoiiQcAzBYFfV2DQUCYuz8QJc4KVCDKT35AAmzUDdvptNEg8neMuWixLR"
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
