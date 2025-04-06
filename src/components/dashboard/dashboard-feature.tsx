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
    "5uTDsv41hRHFWnQrGT4QdSN7D2GnwxyWcoeQhm81qu3EzknG1QUyKeHTVFtLtXpfeY6JNhnrP6XfnZmUCLRr1DFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPyFSA9obMcbgsrJncYhyvuYBZK3LMYLs92c7z361kvPcz7w31C2qiTzwrRcunmLwefxMLpQ8KPJzF2uNj7WA91",
  "key1": "54apJuhkJNjrHF382UAWYZKtKEftVugjweNSowxdrDXkWqqNm7Vyu6A1Vn2F4SeyFLpXEmB2A6CFifwP2SDLjq9S",
  "key2": "TBo1c89UCmqmZqxeJL1QtUX4B2Z5AJiypHdutvRPtgRq6eeUxuxqHhKMVTjJGwMBQKEnz8hNYNq6SRoPnNDaEqj",
  "key3": "2i8yFTAaW2Wi8bcxgk1vM1YXMBTMfiUsw5NnWLhr826mgapM7fsTTNVEhev5Nn9HXTDwU8vcjstFUxBvwciAyhCc",
  "key4": "6391BUvaJxotPQP3okCNDJmijGCX3Ryo51tZV7Pfj7HeHS4Xq88VkkRZooLm6JPGJHXLisMbxdLf6yNddoMfiL6J",
  "key5": "2NB8dDcXF4yvnmQUghFaWJKdeL77XmGaMYey5KtwoY4cT3V1spVzjqySk3WSe5pD7viz1HZSC8GLGGwNDaMoUsXP",
  "key6": "4NMELwUXGcPLr846ojXjjRvjNaxhMEmHbJ1a3dfAsYMbABv8Sb5NyDBhyLyQLXYZE2T2gFYyrvU7yKT5rLSu8jT6",
  "key7": "35D21yej3XDZGvyY7bPnCaH7eeuiVKGLyzVWhefdScKy89r56H5fQt3jznhqCtXmoLncNgGu1ZEKiYQXHUNNVQQB",
  "key8": "5GghhVjMyeFzCqdXiBkGuXyN61kzthUzwwrBCpQUjQ1iHWFBvZMnMfcefuoimBvGthzmfwDUkLBYrFLTKJctvcaD",
  "key9": "3CgJibEb1Mdno7zdMhSCZTRpXtH7HAaaXCL3iXcPweZUsyvfdqBEA26vcq2cgCFzv9HpKad8ZR2R3F4V35VyPWV7",
  "key10": "3kkFaThgpFwLnai727M3TfwXmev5jNxpwN6c7yFHZ2JMDCFRnfKN8RmpqKgy1cLh7FNKJap6Mj6SadBw5AqVTGeE",
  "key11": "28yP2ia2TQkygv4XLKxGCSu5dJshUzCkNYTwcnK2Y4FtmeN5DFp1dbRrPp8MkvVRySebC7hfqG7yWVtHAJynQNTa",
  "key12": "FTC7DJtNuri6ZeEbuQ4Zn4fUYfELWq3gmynuphU8zvXpSgpVdbmGe46gVpcYvk1hZzvS12MSoQq5bUwb3AQPf8a",
  "key13": "2xmjRhFc1PkpjkK6zFUvp1UVzxKfX6yccJDjkbzovrbgC12H5xcuYRdjrJkn9eg2o4eYPYmDBFrr4pRGYxwUqPkH",
  "key14": "4PcK2E1qSNiwiTJmGeBjzxy2keTezTjtSSXmQA2XwqjCgi7ZnYuJTVivH2eoNz7jG4SeuUPqeUvd3jYEXo5LWig6",
  "key15": "5w43kG2dRGFxZPbY9eQRPg6aZ1m2LcmxcMZMFutqdi8y6c7N1G2U4qFPogUitYsHkDiVqAVpkEBJ8aodGN3LQLiX",
  "key16": "4EBoufGtzXoVFYhZKPZS4CuyeSn88iMUqMkEGXPkJmMcbwqKLpVLbE3fsquKeYLuaXp6VqsE8KGgXjGtp5E5XZGg",
  "key17": "5Ea2g6DzTc5qy7xcRMQ8fE6XSRzgiJYxg39QTNJkjV4QBgn5uNiko4ba7XTsiW3DqBo6eurmemzQMVs84Npw537N",
  "key18": "4RWmL7U7YfPR532VsFn9yKtDwg7KJquYhpbdV3m12J9ZkR8EdqDbhBaPtmteWipHnHMNkwezc5pTQ4zArKpHWuYZ",
  "key19": "4B1AJD2tE6jvpt8qqceJPZccXYYtVXwQx97RcuXRU2xik4TdkvxhETB5w7Mk4LxrP2ziBeCwfsYoXRD6t9g7NHPi",
  "key20": "pwGkt5mdMFthxTs7DmZ1ym6FoUjJXpF8Z387as8eRwhHE1oEFCXA5Xa9gfQXUGTJ4Z1S36A9rDkcmehohMDnVVm",
  "key21": "m5eFmGfTmRs3FTYmmdDJmzCwwCKCgjYv1era7gUPmtu9afQkfNxXeBEVDWb2mVw5iFrpbsGJxYyXS4WkCzpmeBY",
  "key22": "2X2NEUF8fXVxt8hDQg6mzYi1UGgwBSrFyQjBntro75NyRKfT6v2RJRkogMhRdrM8DNPe7dmexMV6DZtt4j2JDwKk",
  "key23": "2UZzfZqMYtDJLHByu1HWaEUEJpUFEhJrzja1QbbfsvXiy7rAtP7xnwHRfPMUGLdYM64E6bEzj4Gq5fC85VrVSLd6",
  "key24": "rYUDXLk3S88zRLcYWdTRdFbQNyCtw1Chcuds55SNavmms1sibeUbXqisgNXTS1dcWFWUdeCBp5YnVLkvSQ431D1",
  "key25": "J3sXoPviXRk4NmvGiVCC5NcjAFkoF8j1dRLLk7PZfdK3PjgiAHSnoZmPwJacavrmWwb2KwtKHoGSwAQAcZLuTLB"
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
