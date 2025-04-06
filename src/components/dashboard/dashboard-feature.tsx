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
    "4qGC4ndvBQpoqqTDQiennk5xcLTgLzBPgJBH2cHQ4eBP7JW42VeDKASZp6opKykXg8hQHbaAnCuJ2mPYKRaa8rYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDpK9eYEzorzKUphTTGnoaTb8HvbwnMBV62RfPK4Z1BkZ57fsVRf8fPHFkBkLwdJWVwfcbfAHkjhiwfJm7bbSWy",
  "key1": "2qa8w9g1fmsPa1is89p36haXiSCLTeNiB9vsutRL6DhZQv6RXQFGVL3EqGmfGtxmjAwe3P8k5MHvcQkfiXU9z14M",
  "key2": "3SDqPVyDDtUZZiaSATvzrN7XDqWqGmBWNoU1XqkUFT3hwCXJc15mqdsGGPfpc6uEdk9CXWasLeBFm4A5vMiPk2py",
  "key3": "quzoXMeHKzzcmRrYz3CJj2bah9y9MFgEzJoh2DorbUGHuXTE4R9eR5Fpgrdgo2vUXXMxxAKy53P4KRCsoNnxiCX",
  "key4": "3UKDa6vpKbxPihNXFfssj5U8iij5k8VAu8xTFRjiDDrgdre5T97FGGAsCNEBgFrsDs3aqczVyfsRp8Usf65qpS2k",
  "key5": "2dkBQw4KeQofKaCiidp1YFAsrkN7Y5GVohScSVX5ydKoBRLvZEzeuM24WzrEs8CgXqgzJvSDJGFbBzkHiZraKFzm",
  "key6": "5RE2reqqhXG1u3RR1webJcCsNKwZ4zBBmKzopudysTFjz4dKDg23daKE1QpJXmwruNohk5mA9EP3YgTJEdrnCnXi",
  "key7": "4mc7nRJSDSZs2dRtzUQb2kaU5Q6jTW4Fobx4EaZ5ApH8u78gr236jhfxP16EftFgrpdM5ynRxUckNnAccPyQV6uD",
  "key8": "5ycbtUEQMpKbUWVa6uYFe8e2vszdHiehcPEX2uc1i8gtcwXStvAdG1PpAcT4KX6Mse9aJuztrXc68q8codJRTyew",
  "key9": "WPmM9MyDUaUUr6tu7hTErKmDZchPukLMaf3e5QPduG3xsWFEuc8KFcZ5HaiCJcTmjQTTmikM2AN4fQJu7kX9er7",
  "key10": "2gYaxSFa62PG2qrPdb5c3b4owpgpAr1T3By5VgP4CFRM9kKmdHCTH8Amg8QKLtkeRS4P59tmTG9TDyKKKDYF8C5j",
  "key11": "5ASZuPPGM7SSg6dS2V8nd9tBA5UtG9yjrgbifm7k87uomt8EgqiPdVNiAZ3wqhDZ7HZ2d1x5L31VSn79c71sxegg",
  "key12": "4yXGQV2HKq6JavfE85KUC1ME9caP9PY3viQ8QycRrmfP5CPNXb3hYEEeoPxJTJYa5831aCTJoJvykGKn6fsZtUPH",
  "key13": "5Y3ipdvMHQVChqoDvvL418AcFGkHc8Uy9cyXJZnviFzMi4h5BbQFqRkdinuF2S4mx79TsPMcQLWAYXpTrCbwgNUn",
  "key14": "2Ar6SWAFQxaVrVazmiiDgL1UrTivaZBx5gwp9Era5XQpCkTTjKsnMB3Ghc7VM6SwJfKfTyCiuvh1CySGN3neLxQ7",
  "key15": "3HCoxw82mwvJAmc77nAbDHMYVow7Rq1vs4X5ftLLSpxEiL8m7FxXySHxq66S7WvT6t6KvTKD927nYzSeYrLarVUG",
  "key16": "3cE96BoreeGsfSLQrWAvqkuXWfT4PRkJHL7chh4H9b3XmPM2cAZN1vv8sQEVMvkojaEKCU1zyKZajv81AdZY17EK",
  "key17": "QNFZVuyqZzpK7kzeLYXFGWMracRQ5F7P8MvhTA8WrDK15nXUoGoJHtLeFRLoBKacdWpYDxS5EWJVzF1FMoNbnsT",
  "key18": "5M7jRTAbcuBN5GtLtnu5f4DqdaP6E4yJHyEcdC8MUke3J8NQvLmi1QcnHbLXwqypwmTCoTDgtNaXeDeFuA7RyvXw",
  "key19": "2aHVXRexgxX3P56ueVxwwtAHaVyKhjCb1uJhBz2QGMnCPWmJtspQcrjdu34iN7sgwrVg97pBKz7mVywwo8oqjzaY",
  "key20": "VASdatRPh5JAasSx5gJ1Mk8ALdjhGt6kzfgDwmmX5vY1NSi9vdQZRvMAy93tourfgcX3p96MRWkDYBENfboLk5P",
  "key21": "5o7VcY6G3KwNiu9adpEgz1SbcCWGGJdnoimdcnXLStdg1gGbxczFTaJkMpoo6XPrHm2MKFbaUrrqeuMwuifPscQ7",
  "key22": "3sSWepQd3cVWnfTnkDvBmJDJs4E2VgXbkCNSTmem8xAk9Y19HZg8bAnojbsEBrGJguXmJ39u447z3XZBwF8gxZzS",
  "key23": "2SyELLqchCiqcDmNGEXhaA3i9mBEjE6Q1BBAcsCY8gWsLryhg347x4VL84YR1Sf47A5r7daXDYa29PD5mESrcQY6",
  "key24": "661yaWxbyz7GyvLZDb3BKT4nct7s4heZJnzvdo27wBujs4iiFP6E2UwH6v9ujKrvDkehgivkDPhetwg2gGEm9jR6",
  "key25": "55oN9Kp2pZJnPDwAdrAnHFghbFnEPbpmeDUL9FYfxyQR98Vx6oA4Y3CdrE57bXp8QBnqmMhbuJFQKpJaGHHLXAV",
  "key26": "4X1foBYbXkedmct69UR3adNQ2di4AkG8h6j5xXnXkH5MvR24jQPq4Bi7kFLfLHgKr7StowyfAcuF27oqVMRwYzVM",
  "key27": "WDZZQtjYRBB4yfPnkq9vvWBoECE6ZGpU8pQsNkE4E23ydQw1RdHjmMpNyNM8oPGWRDud4HRpPfYzNuP7FwZDriX",
  "key28": "3ndJ7oEPjUppLHGnJr6H2USKe6xBTCdVpnVqDxFo4XqmA1odqdsruSG4Y3McJKzcSvuBba5b5qwcPGh1Zz3cS1Hm"
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
