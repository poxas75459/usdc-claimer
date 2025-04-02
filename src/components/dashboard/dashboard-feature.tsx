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
    "2MyUn52UE3CCEs4FJGq2bxpdNqb2E9kLsuhSbjcJwx6gtSL3wayuWj5fa2pnM7a3H2NbYTASzuWWNLJNkodwdWNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLWYxjpqfv4rVarwNAZrzTwJt45awqGwZW9rKkSCahCt7xFxxihtWHAm4cEnnHzPZCeSueL1wjtskU681JTMJdf",
  "key1": "2JjgaV32JjyVz7nKH5xyHRLnL5xy5Ph6PRSgThBMdzFaWdEkXgg4ZYQvnLH3211JBonq99LfWaZKbY5df2diPzc3",
  "key2": "gsyS84NmbXSuDAL4muL4Qm5gEww7Qc3vUzkRGXRef4bRcH5cPZVy1mSNfoxLQateKgUGVnnMZ9rw5VWEYCeWnbu",
  "key3": "LpEV88kYPGaEMaMpzV7bCrutFCGCKKpCuZkEDaHcWCATY6hMGfViHnUirLsNwaf3dY8XdvnsnfisDbZJ7hE76Fa",
  "key4": "Lb6nHK1R4ZmuvgDy8ziBhwUqhGTovPfVdLhxjWnrRqQvZB9u6bqWP4tAgehxrxwQJE29ZumxVsVobdwkyC9ETPS",
  "key5": "2GiiyUYheitU6EmfGVovoyEwLym7n8rQX2U6uTpnH3vzzQktKcQTJbt2e3pMnZyZ74Hg6iW2w1PNci1Bgbgag73G",
  "key6": "eG4XkHpCcW1tRizr5kw7v7NX3PAmdrnUeyGXrj25zS1g3YGkFWTMDp8NLBYKMFnXixycc3sSnRyq136KDvHjiLm",
  "key7": "5ykrHpiRt8cBkdyqG1R95q4ou164seuaSAWuYvd8hqpDDYc9zppkBgyoRngdHCZk3bsdsaJU8nhqePw6wQSf5Lhi",
  "key8": "5QFsHRznECXpKv22pMcxtcK2WH4AFoi4N5fLP5ADpnUMKzrusSjgjAbbpfR2H9SkW3nkcNjrng5gXyXThJkMihdf",
  "key9": "5G7AvsdBM7vkd8HHkx55pUR4V13ppMRd8pdv1XBVDXXYoTLGVLNsb5hP7oYKQVGF2x81twKXDq8QgS6qf3a1ceNs",
  "key10": "4X4tr9Bv2RK1TheXE5NbJ4eVFmJJA4CGsV8k3ZwHtkCKu3LTWPxLAh7sfk1625reEUvLXeQaA1WmHULNoiXWYeq8",
  "key11": "2vEw1TEkfenLXi3CozmK9Rw2R7F3ThrKDEbyUfVU3ZPMF4NN5WCCdevvic4nncYfw4yWhK1uKuwfW4iBfF7FrYaA",
  "key12": "buwWm7sjLQVdPMdzT2GiZEZ3J4goFh9RMp8aWJPU2ko5Ch8FA23tL7LLUuah5kdShn4SUZWF4iHmp2LWBchWfVu",
  "key13": "65BJcmrwCLNMs8SDo4RRxeW6gCsnqrHUQHuiSkhnHz9BhtJTn7FBkMEzyHbitTtVDbSj8LoDTs7ue9qw6y1RA11w",
  "key14": "4yW3F9UQnJNBn6xmaGGq686VComfzQkXhe7A2miLpptmaV2SmhU5NmXXXfNWyrwCLQmtaPr3iVRDRWVk8a8WhxHZ",
  "key15": "3bnNivAMEHZmS1dZjv5R6DsbBHtBYhdiwdtu5B129NixZNfCHZMaSJ15Te4SayPtgRAoc2HPhyorPQN2bxfoVxaB",
  "key16": "2QhrWVznnUSMeANGFqLXbZ9gswRdxaoZSjksERdN6p49jRwq2zSRjyJgf181UAXUaKrCP9bpTnP6ZosWS3M7JQoA",
  "key17": "BErhZbbJbPqSs8QWxQ3CngkSkLBSsucQeikcboTLnxXjwBbNT7SnUJ91Z94SSJcrezTb7vFc6LvyxKRfE4XGPWJ",
  "key18": "4PUiSr2yzpM1tb1j59iMSdCe4Mjmx4SGoyLdWAbbLfruKyGSHi7LSRTC5Ph1GwaQNMPYakQp25evat6paQUWjmpL",
  "key19": "2kCw2yykiRtypNTq6LC4RGfAmD1pQtuPWWwPXQWMp1J68WDtbEYDe4EN9NDhndJL4RuuxxsRAjynEd4D2CRJSmZV",
  "key20": "35uBkZGYhuiYFvgoMqNfRPvpFVdA158gLatMqrNDwWo9F81dgQp1wY4rgrzYxQPHQiCqodG95J65tqkJLkCSRgjf",
  "key21": "2Cqq2dMA3eEKR7mbopnEDMwwRNmv4w9ToKC9Js1BtKxLXZZq7wn68iuASMb2QpzhnMSsEyWj7Jceq9WKdsVpG3i3",
  "key22": "2RNNPxTJnjMU2RmNius131V2dRpYHhVTahJRareDi1TbqkTJWPm9N8AkwohvNDgExCQTxWTeATvsT1jQkKaoYvLY",
  "key23": "2u4JCFoPjzBsW4NNwwgGYNBvwzG7QqcB1bENckLBFZCy8yHdnMXCnaK2UCpA3DNh9fybZ9jURtN1w3ZMu8mRDzJD",
  "key24": "26JTWDpFSCEacub29dRkk92t5Et7zYiZkPC6wkca9iv23EuedLUWpctBkCfFcWBZ1JDU5G9qzENyzSRMVg8i4DjT",
  "key25": "33Zd5e6BW8jmAvVqiVHB4kgchL6p1LKD7vA27RLssxpCyf5dFPBBM2f1qgJpPRYgYYkbevaMcvFPAAS88LMaQDTL"
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
