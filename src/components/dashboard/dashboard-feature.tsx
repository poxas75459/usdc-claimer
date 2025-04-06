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
    "5U78TicrVikSYtcnuijcpyXaMfq7miwkTetrZiAz9i398AtWKi5xJ7gCs9UvsPGJGXvEFRg6RfaCo6ihsXr9eGrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4CUPiWFkjUiMkTNJeCXVv1aYRHXfLMihzCfMJxokiXdi1zwqudrjLaNTb7swuiDvvQ7x5kLgu39GE6Qho1ZTaW",
  "key1": "5iGmNnZ7NASyZKTgwyfhgjgktaFC35CviU5QS5r4wmuBmFwDq7juTCiAswPH5nYQi8xMarqgHYFA9EQdFtAF8GoZ",
  "key2": "KX9mTrcrGwPxZJ1baVJybYErobVVW2dds92JHH5wvgeGegqYTaMtZF4ax2T5vSsPMXVgboX3G6qoXUU49Kx6cGy",
  "key3": "5C3kJa96Sje2pgS517r5t3VKiSHQiBJSa3jXBSqwm1qQWaEMHCBqbisSdAJnYhrYMmK4HS5R23xDAhPduhF3KDUC",
  "key4": "4Du6vkGU7NPLtNWbt2tQq9beXfEKWURV9a8imsnT9PRdrdpayHgE2mqP2EyuRRmRk4tmbEfRDucRMZqb1WRA6eVn",
  "key5": "3X6XKJK7P2bkdcwkwZwWsF68ntf2CShJXejJdJoXoXnpQtz33bep7oPqakprLhEF4hGtJ1HruvnGXpPy3KmUSLgz",
  "key6": "46YWuijfGU1fYCQkXRPkmecpbsbUGuFytKSK42ma65hMbyQ3vqrAoJDxWDvBTw2zqg4KNbH9umLCzjrSkpdnq7vP",
  "key7": "3tmPCpMetYPtFBegaaLXzqRWKkJkrJLpGY4VXfKnU7ZQ3zfuugPrgF2sZMuUpU2NHSXR1B7LyL5Js1KbE1xkC4Qo",
  "key8": "2pmnYZsNaCR5Hx5ZnQMmuvJNdp3ieAjUPi2jKAULHyUdiUQUWxX1gV4UGqkyp7TSFNi4NKfwTAWpfNPaNcH5C51Z",
  "key9": "5bubEfJ3ftJNSThxpHhNcPoSiETYHZice9AYr71vhQqELfgczCZyndneEgGw9AL4rwJbCy5m8JuP6zJWR4KxNtNT",
  "key10": "uLD6BJyge51vYFe3SErJBnbBfGvRHfKUrVDDGB1UmwPduGg6N4eVDB4XhugwnfSToiiLSpMJsWtxjqmyU3fmMQE",
  "key11": "4s7Y4LpXZeP7KxHCi1qqbBQbHStkbMaRoksSmebJs3TiHojnTZsZ4QHZr6mHaHpWs3zKfpka5FiDXffWpTzLMJVR",
  "key12": "35z5iQD47cXJxZyNWvUZzWarcTpNydcNLaKVLVk7yGCpBimXS91zss1XmZnBA1rK8ZpMkGhz9WcXdJhtFat7oUT2",
  "key13": "4EccHJPNLEdef2aV1PtS1fe8c9KSzqubBxpqr1wL7oGuhHoEwCPrbMGW5N1W4MHichhrTYQMQvsRR1qMg5xDLtf6",
  "key14": "2StUniqEf8fLmibca5L7NXRoKBs18cgmMqnURjQksVwYitRXRkLduuXfuVub9dzfFUa3NbSZEqDFnzHLue8Msd5C",
  "key15": "65j6oKr9PC9xaPmJhSSAnTi8BppKUDPqsjA4axMHCeUeF1fVEcTGXDBnV944GSeppcHqSawYuBJ8hqJtdFdgtn1w",
  "key16": "5r3DP1sYKmAEj3rqEP55cqMk2JtdjTBvsLcwigXUfUVsoLrrWCLFaiurRbGXNwnpLSAJEVsRj7CVqwuiEEonM4YS",
  "key17": "4himzyyNKvHcND4UD4CfRTmAugzoAUzZYDSx8Q91RLmjq8rkLz9MmFJdLut6faUPfVv8PABBXr4pdN2Pwd4QM9gZ",
  "key18": "4xaTzyrj1LxM8FYxmWyvdY2MsmB2ZySVnQRCoioTqSzxzP3vYAdVqpoGEU1Vpdm77wNmwZdYC15hKZTnFhYXKwa8",
  "key19": "3Zzhao5GXR83NYaMf46uvsi6ANtzuX6aAfTTvHUcxbag27w6hN54NzdF4huMZRGCzX1gsywajPuAosjbBQtsAFgd",
  "key20": "4VXCTEh1PJsphJ6Tn5ntTkS76XVHu5nM8PyYdkiH5mEh46FhyjXX43N8UdPro92rrTeLRJr6az3wCeJrFnfysqq7",
  "key21": "3CcBwppzt9R8UwppkBwhiGcuTWMehWGEohcpyPZ37mJ57vNamU2BUbizXgHqbBKX4vQVPfVG9aEZVNQVsd28YwzF",
  "key22": "66V4dU92tuUGGxDCCp4ZH1yNYwB72K8YpurZXmJgVrzk8qWQBgxYrM9bL4yLRFuWPPU7VByP6ABu57WAPEwGv3MN",
  "key23": "2Si2TkoUB52mCCFJoPN1gyqFqtCSeLYpejRXwWm5hE8y9VeiHhxeo3zSKGY4u39MkPjjDfL5ChqQ17kABj4Ucyxt",
  "key24": "Jcebq7GgPkVkZEnK3AA47sHPHW1QSHQRWc7pPSc1g4jc7yHMjAP9Xw7vC1uPnhk6riLP3C5rWa144r32jh12UDk",
  "key25": "4fBFxipQd6nDmH36SqjjHA43XfV4rUAvPUfci1j19ovXHzqHN4ArTqhFNyiBYCG8wswoGS18h4rVJnK8gL8YnHBT",
  "key26": "5EGRX59n9vfencGx8cAZ11AGhrEbWjmSDMX9d5PosjMQx6LjwgAQKHhLBoeyJaJSvW2w19pf37DMyStyFPowUqkS"
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
