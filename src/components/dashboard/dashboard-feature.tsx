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
    "5FBmvVQtK4yARZzN29kFdh99tckr3ZXd3fi8D35pJusVNXi8D89CfqYDZPSSPrEVRzwLKYS9azhLFonEMNHEvKoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFPdxdBAs4dsYmyEGjLr3wRtvwki5GvwpY16QjWGzbyBmFnWmdDo2WpwQp92ZQXQVBc6pexJTFMUgQWLZcwzzVL",
  "key1": "5WDFjqfjEcSNdzuSvP3smxd9AM1ykFBgJpth6SMHf1UQZMLU4mSPkqUN98mByRmsub9pS29Ciy54tZA3ZAhDpUbZ",
  "key2": "2WvF5f2FdJL7ZBmKQAhHnN2FkGKXVxxb38D6YobkTqnoDrmCiGbY1Gawghgy9zLkPGGAZtxxFvu2rhg3wxXwb8wz",
  "key3": "26smUDR28VhHgYBezAXFA5grL7uaHciAJnehmbvf2ZaH3usFtLoVZ6qNCvWFeu7AjsWSwMCBTM1c4MEX6dGQnUHT",
  "key4": "24hdfrvo7T1NWgihmHBAFWjiF8USesqGK41FBS8ADYGSmPEgnZt7TnQRGP9qnYyRYJQwWAMVt2WVK2yDo59rh44g",
  "key5": "44juGiCxtQhKgPVepcZgbYGRN4WdwWMnCdyvUhPDZ5vXD6xqPNYxMaL4UfGiLmJet6nZqbBThusYWmYvVdrnUoUq",
  "key6": "3UpU9a3YcESC1veVYwVjd9QoAZGfTaoTBHPXAL8NNnAroRz8hwm2CfwNTSfXZMuRRmZYjHszDhU9u5Q8TtzNq1MV",
  "key7": "HtNWiQvfDkbi2S6em4Wktn4Nf71bu6YEpNspTkYg7ei7d8nEVmgHvnDcVpfmJcusFsfCNDNanN1gnraR3SpwgEC",
  "key8": "4VCW2MSVsXdtzQJneJSigS4V4BuJuhSRjkFsnVwkBaqkreXoPGKZRNNLMYAwBpzp8XTsj47tMRSUtb9hEW7cQ7br",
  "key9": "35MiSCCW99Dw68HPghDoFPKo4iXG1mAuUY49315y7DtyhdAaMc4ivf29zPp4vWAhvkLCkenJomeKkpLupfwpPMtV",
  "key10": "5xcLyz5Pux4NjbYa1HTrWRXWNvSy6ff1iHuMcTmfggmzp86b9VsnGUkzH5RPz1kAGzxquHQpkC8s9V5SDxScJ8bX",
  "key11": "2wu6xThgyz4nrpCGWR5hEQN2AhFY51zXC6F2cp56cCMVvxehziuHwRSi2sSq2BYjoAakJrpwuDhccL9rZVbveAcE",
  "key12": "42mgsMHYVoUimkS4m3EhsFMu3goFFnWauNnDN6GNcFppqAM8UveaarC5mhzSAmnVpBm4pqj8nzwgsV33eBGfQSZN",
  "key13": "4tL3FaRLmLF5DgyuvvN1D4qsHTwgjhaHB8DniMpqrzNH7jTZJx4PwYrADFCz72a5jbFoLhz1ip3Wo3dgQ9T91eBZ",
  "key14": "3bDxK8K9NYFW7CDs5ywUxY9S5bszc4CqeqWZCr9mERdUT1f51oE3AymyRHKLcHu8he8XQUi9GvNWqszGTQFtoDFe",
  "key15": "ZWt3SuCP8VLpawgUcX7qWo1q9cE9CMWpNAoUcGLXmgXoKWRESwp41fUQDBbF6538VQ15qgnAdfRDmJMAfqhTP5s",
  "key16": "ynpq65PcnZse4c2xnMHRkonKt4VudRG2wL82f76zi3xhVBL1TJ9KPq6MY8xvjxcLPrwAo7JdcSuNS2nBVpGtMsy",
  "key17": "6uyA2UhhvoWRr4Nd6BNEBvTWfTaiEkgynzjFx5zn3eFMNxspwP7G4sgtMPPLpeUzwgvpoQj8kixt9Ke1G8dCgvW",
  "key18": "2RbSmpb7PEpNUuZRhNWSek3yaSWvJw1zTSYXSZCCBw8WUmMnvfKsxSRYyCbgzF66kCp8VppQ7W4rMK9WknS8qWs5",
  "key19": "5C1ot2gxciFdbNEJqXKXSpNrsK5GCDR2VcS9TitiD2Y7pnXhryeLyCsCBEyvfNtGVaK2H3VBysedTwtxovfn5nNA",
  "key20": "jvkGP2w3Tu4sKJZwdUcCMETAuV6FYx9AxpR5kCUwnTcQxXxnVPn3rdWr2Ywi2r9fGxQH94GPJZcsUaFPrugufhd",
  "key21": "2JGKzCP6GWXbAMZ8JLf96q2cGmoGNiN7RN6BMXHXWKr5UyPjwbsC8xEZxdaVcVQ6cY84nyk2Tt133QaicyHKQAYk",
  "key22": "2NXzRw2GxtuN7mqga2QnJsvigpa2Hw4vJTBz7AmuBgKX79qdayQp9uVVb1tCqBsd8TzcAsf6UXJugaFs8EWUUfnA",
  "key23": "5135wsBrf8uD8ou1TYJFURBp2z1QWqofAB181hFkWPsSc5vt3rs646kwH6rY19d1AKrkLqT6htFvykinsUNEf1To",
  "key24": "5MLQJNDutdbY9WvRtBECTSBorodHNgD6VnS8fbmz5mWSu2hvjdfpqQq2bEDwGUtnViNVYzCikh3EhjTY2BPMugXX",
  "key25": "5evrVksss48Yprot7z45bg39sWgKi9vzwdN6fUUzcKLeJtQ4cR8gWLdCuC9sG6Vi3LTczGytseJ2gFSnv8Pbkm7c",
  "key26": "5GmJuGff7dsm9gp9HsEoFs1rvskFbzvHWtqMYVg6njpk642nKvWvJhUsVpEgPkYz68HaxbuHoG9cBX3yBLBvsXe2",
  "key27": "3SojEXetSjf7xRvtRGhQKBMmUkpKuxCHtwkyr7T3ay7gUcEr6mEi1L6bNa9NANVujnGmnkNc3EPYn674hsz5Xmmi",
  "key28": "5hLhSK1vPVWHBME9HGo3Hj6gWNFqfrQqWjtnD4eLKjr3u9YCGAXCsJWSi72KhWwCFUwyLVphdEZk1hxuhJs6quHL",
  "key29": "3LzTzKpaLYqV7jQbFWefxXwizyKEnD81wxbnU3nweogBEcdQdkohMf6J6v2Def2zFsDWKD1QyRwbv5t41zdH7qaW",
  "key30": "57uq5FyeN8fjNZP8XxFtyXUzmhiU2xi7skfMf8cEkfuxtNG5PkRA7KmMF2jo9hrosHkmKXDS5cY71cXfB13b4nqY",
  "key31": "5o82VERKkRua4evskE3vm3hcq9trXrKMDSjVPczm5qPfr4zmT8mMMCnWYG87Mzikgv3ESgbaHrwmeGfNk5f2tA6W",
  "key32": "5ed247my1tmr68N7gNcoHdKntnLrFDmtd6mBKwKCVgPKZmpkMRFWibqJm8y12xk2z4UbV51hy4cbCeTvmSm7dmZc",
  "key33": "57CVTuawn1mm11SqgWeWZ1Kw2e7MLVSfHyb2YmZ8ArnSn4hh8iWWiHYi1doXdqFW17Xd6Aay8HCW2QMAVx1AB9RM",
  "key34": "2b9pXjskEkn7NcxwVHAwkPNnhmibe2HsDUvDT63xLQTFkZoun3tTCqBcw6CypfoxfobYefaescUxtHhEdTEoWwKc",
  "key35": "5QJSNc3D47cpwrkM8ZtM6Hy98ZYpBKJhenNHkiPa1WScqNb5R1XCoke3TmtN13DNM8iZWt5uDA2PJLDBqv8jTRHd",
  "key36": "riUEFEQgT6U92TwE3vgMGdRMMTR7VZKdVQkkj5TDSnnvxv6GACSrJAaKbinUNTH4tmK8f6JYV31BDnibjJdWeDx",
  "key37": "3EXnMQZ4P5CJcFLWzR2nGcJi6aKmvDLVUdEDHWHpGp1X9P99wz8g7C5PxfidFCExzDCDepxa9UGD1t8vFYSgXJKF",
  "key38": "ATygtvM74KpHLq51FJMCupsYaeYzvFPmu3isvR4DP5iTxX299GnzA1XUym62BCUaqASojBt6t4STLC9H2PFeUtL",
  "key39": "2qayhyUAqKjuuCKREbGY2vJNLohmqPDHbsLa3caiSMQXNZgzWp24tFwYX5gef92ABGUf4KwBvqtT3LNA3z4QQdTV",
  "key40": "3t81i1DXJzpSkUBweFzNNXChaQ25Dr8XJg6SsQPbysub5B3YEoZ5Jj93zYvZ7b1c7KVcM7MminDQiGRdcxTZ6YUJ",
  "key41": "4YpjcKZqemcG2LYc5odG5KYBheSVHg1R2HUo5wvZEN5a6mhhMDXZcJJyY6KiVNHpvEEivkCmUpSRuC9w4XAgYyrg",
  "key42": "3NSok7wnBvZx4DGtabkDJjpJsrwgZWY7vVfV4PVucMZcdxzz48DjZp9J363tghqDwzzWRTkSfhbz8K8zjW5W1N6"
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
