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
    "5wiq4k1gp58tPc26MZao18qEGVqSCJGnLEbNHuPCZeJwVJqbr8DtEyc1BjUpupadUrePjPbRpUHDAiAau3oq7NyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWusp6oLK5wYnJ9n6yMeFyzFcK4d9vqokA9BhbxQipfEGRoeKtkQmJMjrD8fPDJmbYW4mGNDk9yivysiJAg4yfB",
  "key1": "2xsE4SQrfkX7sitvEvNjXSyvmdASqNFG354fNbJdc3rjvjqWwBy2LYFXxUSGxKsnWyAzq57UHWjN2X6nYPp5FACS",
  "key2": "25eNBZfETbXFDrPKEGKzq8CZGNuPWkCXDecHCnjYzrJQhBF5MyRkc2wQfCPpcMfgBA3qPeCRRFfSmtFZNEpndz79",
  "key3": "5tgLQgyypC13deQWTKh5emuts6hYj4XrbGQmcjNNghSqKnatt3LUHwzz1jLSwTeTstjcrjUtnw2z4xCt9h8kKe6M",
  "key4": "34bo9zq5WFNr5GZbudWuWErxHWCPSXHqn951SS5YERLNHroZyATNbVFTZwbPn1dDxCG7WPNzu5zZh8db85rh5r3z",
  "key5": "5mvx9k6m5ZJE21ahFB23UYKVvqJqnGVXrn6hxXWLu6dXafT5JPAUYgB3w9JsVXYEFGxZBYPtqMLofgG4eVTueRMh",
  "key6": "4EtS8XTcER7hxAZMtbwWX5JcEqkB5ZL4XSdy2qPBw8GnLQ8M5zK3boyEFt9ErBaogN3AZDTHmqBSsCa6HkFtqZyM",
  "key7": "4UQommLmTsQVKhxUfD9Bvfoq3vENXzzkoQaU1uNVVrzwYYLy5fuA4ejymaDSrAgbNY2TmirnLw1TbMajpnxRJzxZ",
  "key8": "5E21NAQuZ5J4qi7mHJgxnufQmxauD4Wm6Lu18iPbE2Mcve569tvQPxkbWzTKNs3mDffSp2GnATdgM15ayP7MudaL",
  "key9": "mtso4TcvrSaew4j5KVLB8hqeyXAuFeCzGefVs5DB8XDFiTCTCvZzbz3mu4MBxZ5CHsqAcZ9bh3ZfepUwNzQvzFP",
  "key10": "9hNFFX9x6VJnw5quXWdSzEKzq7fGifM4WGkAcLWjuxqPNK4Sbhbt9mW2xSr5B337YPsbHRKnowrKtjcsRsU5xiw",
  "key11": "2Ddn7WR3FJuNzeSiPNZGm6VwHomKwjjv35N9cgLF4N6MoaipwV6JSEZ9B9j18y35YGvSQY4Dq4wnTvS1oAuR6HHQ",
  "key12": "5oS2FWTPfti2kSwBs8pwzz7LJxaiCjxb4UpyuAvpo2Kdz7fYU4V7ZY9hSsHgwwQeY5ogMy7DW7znPLrntBHKE1Tf",
  "key13": "26KY2guh36i5aYXixVkfUzsMKqiqitBMSGVqvQEn3wwGkR15qKguFAWzb4VAUZwKgvd2hVHTd5QCz157aFzAV9Gz",
  "key14": "55NdEKtWYDejJMmDYDxkePfrg2aHn4z3YHmSn7vXAwMbUvqM5hN6Lao26q4HD5RMVJeL2xb1DqpDLydNTUZhpPY",
  "key15": "4tpRgyFyGrFoVA8UaZm9tGn7qCJbhneaoeet8gHEnxZD7AaZKsbgrn6oz2DQJW14WUCqRZPPfHM53UkbbewLLNHg",
  "key16": "vzWZ37KsoZWYeyhL435S8GSGFVuXESnEJGubzyHvyX9MiewSr3YMZkWb2DFwiZRfLK4ejH5cvNuScm8w1yuVhMD",
  "key17": "cSnPVVxohNT1hnyYhDpXizg9bAM3zWp4Q7e9nCas6L3GGW7uXcCYzFLu1v1aj8iBfsTbJSB9dAXBiVJaaQ6h8Gx",
  "key18": "5xWjcS6wqmNL7TonWqpoe2Xa5DtWKSofFN7fsktpa2v8CvDxrRpPqdYXdq2zKtCYMxUrEYVMvx3HkHRCje3P97q5",
  "key19": "2WWRa7wXrXyJvEWdDTrAMv76viya5oDEDxZZiyNTLQusfLBJbKK6RUzLmpMTPe5ZcLbKoFkNiFRiU5eRX7SVeMHR",
  "key20": "3N5JHZG6DEjfNraXPb4zQM6EQFFipJRezvt79qhbTD5rTZ3HxHBs2DkcneFdkYW4n7seeVhtqgduvUfzNwsqysuR",
  "key21": "4fgn2rsPWFAhPMiZFkr1y5CfNAs8Dbt9Ghj7Q4xV6UafqnDD2XhsJXyXGAMBuytrEJcX7M75oNxEgcZMJmYu1wL1",
  "key22": "2RGKSf3YPtCivhYZrpAYzZGKEX6K771QLNkzCV3QBK3Jh2K35fWPPRpUEwx4dNVwB4k6X9PB3soXDb8HyJmzePTw",
  "key23": "3J2z2PR5M1czgKCtzbuaddnpdoR6wgPKYyBPnNrXGZydFe2Z8mnj3ZPsaA9bHJzSTmdWDChiSG47u4gWi4wGYri7",
  "key24": "5ntsq827FCXPnfNUa2kxVBZwuVkgporrT626VMTeY8vWsK52Ug8N22rNryKS4CJWW7vhQhomViaf8oXZe4H3Mtmj",
  "key25": "2nsgJQ4nUnjXR5ftzsJzVP1obSCACaEVmn6xFjxDm6qdmpprwq8kjguDB4spjADcBzbQ1FFkZjUD6aeh2UvbVVgy",
  "key26": "2B5BmejRbJvdYX3biwVBH1jizh6PCqEYLwo6cwfy3PG26uPhQGJSn2HtMxVsPTwv58ds3c1LNKKkhGB91ezT4PAX",
  "key27": "5s9Z4s9e5XZJ6REZnSF174LQ1ZuqDKcyvfA4PugMimnGkChZoFekWArZKiTSua53f17BRajbh4W6ikSLT8roQbcD",
  "key28": "2smnNX6Ztog3BkjkKsAkkKnpte4WjH8qcJJcCo9k3mPzAqpvAQ8uN74kAngjqp7DZ8ir1GE2eh1JUzCgk3pXTFg4",
  "key29": "3CnYUpXbLXgdLMY8KQu8nb4YKXi7ix4TWtyhXGnQv3GbpWMGoziTtb21gfPxt9aqHiETUckuhibGywSJnKujRJYx",
  "key30": "xhAS2YV25JMDdY3W1hxFDTbmwgQ5dJMc2wASS6set8vYraEM6vJkuRXAUZ3Wa5CB2GcqxHATz2FMdA9bnzUVzhZ",
  "key31": "49VnSFzq7V5qgk91CSfsuK8Ph1t2tSGDpUHqcKV8EfKRZWnUuF6Jyf8PSv2gfxYeSPnb7ygSGjdVhhMHxLHfUEEF",
  "key32": "4493zP4XeepYTXo2Q25is2YFsGmiUYhNw9ArsLUFnE6JqtDSoqrocY5ekthstYCrwxUvN7LcdmhxWetsMCJmzFpF",
  "key33": "XS3wCiMBGS2TRHcqsNeBiVxm6x5QVHxNVZnJGZ7nB5YJ91hoiCSr2YqSqt9wYhderZTwEMuX9Uji1FCXhVGarAF"
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
