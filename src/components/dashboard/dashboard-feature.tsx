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
    "3FYCVkL9m2atT4zJzHbCU18jqZmFUuXGi9JYqijcaNg1sWiZejjrPPTKSviZwW1ydGLvCmxksLbXuS2BrAaAHyad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QD6tGMcAwGp8qjMv35GL37ehhLaNpNUEGLTV5duL6UcWVVrSLkz6TfGKN41N583huEtfDquDXm5nZEWkNz7zhTX",
  "key1": "4WpFyQpkWtFgioGGYn8sYjZG9qYiQuSUPzj7RzF7s8k9LD4T4v8myX676exbbvftAYdecusFGaSxchD8JDeHJt2d",
  "key2": "3mSThqVJsjQ14nHPU4RtCELA4rk3ZtFXc8FbzBbVibeARQVJUMMDUfScUkTqmukdZGxMCrM9kps5y6v2fTaRnc7n",
  "key3": "4zDV59BmB4goJGmDo2rNPZNYuFXMxFA7WhdrFK45YUU4FagpsMQz8X6Np5rEPLkuPYGdmYFkt4GaonkbBLqarvTq",
  "key4": "5wcBH1pYNznahTpiBpqjzPTsHj5by1e52e7ycyFQVDrmpHbsWQaybDWpG7TtQ8QVmaPe77dw1ga83twASs6nKTu6",
  "key5": "47jWjtASwCdPirqnfQWh12sz7MSJh6gtfeooFJhgpjpvckxRMnBNYXGdoWgy3TKjBSfb8x7RHevHMt9ir25GsWDv",
  "key6": "5xX2mt1LvxXPNbpa2nqo46eghVVxg89F2Um3LbDRf5yCremn4HsMxFWBfzs3wEgJgT3oZN1WY1ef74o1beD2dTZu",
  "key7": "NYNEkXYz6veKv6e9M5DgGnGRbLoSBshmhwmWqsdTM5mHQJk1koicDcPibwrtGTNU1MRvQyYNot5VB7JFALTByPp",
  "key8": "8aDNDorbGKM1uSu8MDhM6D6MVfBekcgpZGz6jS9gmGF8AtGRweysSRvGM9gxRM4zqQbvh7YtQp838NYC9j51EhR",
  "key9": "4J6zS1S5ibiZGppMCWbpV9ta2ZVTxdzvCQwaoUg4HnDozVXe73t3e3mXpJUAH3kNPGs3BkBht6cjSgSjHeNA3vUL",
  "key10": "28Di1FsnaccQGavnSUnX6cS2MLAVNNDvXBBWdna5Hd5uYpxW9ghh6NcMXoZiGpxSj8M9FWEc9koK2TDcZXYbLtLu",
  "key11": "5CGiJ5D9XfPLRCNEG8i81u58GsDGFReQmEmvQwBazooJXBVMBs6GPzLoLE6djdamvDKuKTj458UQFVppBAKTt7yk",
  "key12": "64ihLdBQkDAubE67NvsaXhcod6KiRDT67FxAxzNmFsynBwyjqtMQxNRxVacFELGkZFiVnXuX7jcHgKKxwn1UJ8cR",
  "key13": "5zJJdzCpuyeis8XTMutHe6UjMb4B5SC1HxUkj4XYKyvjeVjufThbwkB13TsjpBh43vq1A81C6iUR9Hqa2cmYf2s5",
  "key14": "4gRTMq6zhXTeHj6j7qPHxk2r5iEgU6PoyMSTqCKVWmHJPoVMtDnCn3MEnFa79KpT4HQswArMVvvvuJTFaBQ4tMnU",
  "key15": "3A2vMYUr8QH9UX792Fg1Y3eHg2vcsqxkoUft7ki3H5PTy1sZmL5wCnjXSFLRypmPXLCwa2WzkMV6ExtMQDsKZH4p",
  "key16": "5BzkvCFxxjzbDQf5kZohP3uGYTjnPy3s5PuwBbKpNzJNuYYqZJT3fBpaUFybz3oPyihUaUA4zLGe2o1TdF8zzqzW",
  "key17": "2GeAKPoYRhe2Yx6Bfuc885Xck6ct9xNXg87w2BC4myDtCKh57C35UWfWwSiwMs5JDwnxT7juAiidA7tmSFnEbNbf",
  "key18": "3M3goA1esKAjJWdUn87di1V7cB1sYxWH39waebZyB2SW33Dg3X4uump1nM7aNZB9i2wVFPar9QHCJSSMoSq9BZ14",
  "key19": "2LU1EmaU3HCrzJ5c3YQ9udKmjsm1PFQq8LCFyszCKc8zJXeXWFYVCgRPMMcGjP9DUQELxEFx7XnFTzwnUwyzBTV3",
  "key20": "3jJcUVS2WUUTLymT3pze3x5V92xFKkUjydZsxF1fkNZidR3E9KyUmbNXdsCWtw4YfiW5rthArBXxdpu6jYn2z19C",
  "key21": "2Gn2cMUVVRaGU9soKyyKyszpd8i3nTZRLbinp1UG2QAvRgKiaXBavYk6HereJTStCQTiR9YN2eC9STAetzLVgN9y",
  "key22": "3568PgQpwLpkhxQg8ohy4YTWHQkK371Yd4fm7SSA34QmVLjWfDf1w5sk6vK6FutksP6hbu2mQbvstgqapkwD6Z3u",
  "key23": "2hfhywxuDwAL4BvDV2fDEJDWgaQVx7UARt1Q7q7h5jzY6V2n6PVWn4EcQC6xe4fvcxGm3CxGYsLJU7yNNo52wqp4",
  "key24": "5sXdUe79WTct5446HVx8knH9ML9hi6sg3Qpm2rGTnaHuFSpNWLJeB6J5a4f29Zzms8Mps8LxMUyvQvocV3jKKvzt",
  "key25": "4tNBeysqQamqrscJfY1xkCZ796m1qz1mNHaHFDi5B12uo7hGPJErEwvPLq1hRDKQeA1LNuA9pkW3uKA7ohH62TkU",
  "key26": "eAa95bp5a5aG1HNnU9nDNgriCJAki7oqyV7p3mHXdcFo1YAiekkPbZTCxcDByjsgGnpcGdVypeTk7mZW2D6mBWN",
  "key27": "3wzS8H7YmQE9NdqqVYsnqZcQiFF4JKF5bC1kujEyfNnVRgGzdGJ8NGyKigVPwp5iySwkMYgwfwystyGiJtgzZsZh"
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
