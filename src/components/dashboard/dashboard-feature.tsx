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
    "3ivNCnKfbip8YEp9RsDaaTzgN91ERwBZ6jeC23fJfTPvEvR4xUnSykAz2XjKHyCFJN6NUyEdEw5oupq2Gon4j4xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ofahW24kySnE4fS8cX4ti4uegR7diB4q1ovSxdD6bMa97tAY8eja1LT5zcdjiSxe2d4p74PzQHXrA5kw51F2NBz",
  "key1": "4F5AAtrfwh74XhNbyQeBjQSGmjoiwQmPRkgSDF2usjW5H7R2CWYPYsZPpocNtBgH9MT6AQBX1GEuY3RPr4vZGzrN",
  "key2": "FrjzJgacK4r88J8wqdSgDxmSCNTau3XAuFHeEwGpB8Pb8M4oaaRvnL6LRUrZoodkzenTcPc8M6gRRuvYioLVSdM",
  "key3": "62BTaQ84ircf64KqoWwJFggUvSJ3wwvm4aWWNBkHoUXwHbbqGMX8HMdrovXPzvkpQG6QU9WFZJ9wBSLQ8yzoDaoz",
  "key4": "J6ExD8JBQKfZsLiAaxRpJkbTRUUuXJ57fYFC2mbu8iXoakJSip78exWhhzSF7mEW4F8hJA7BNZb9iAygpsbCg5E",
  "key5": "8iLHjy31ryLcmThMZY1EevmBpNH4X8guYPyc4znVBhXrLdGjEDGu6jcvQEZdodASUWT55QkvCYfDtxHB7JPv3EQ",
  "key6": "25Xp5opJHveQDtGbCNv5fnMfGgN6PMBd9sDAzniDEFZe4oKUCDHJU3JGGuFHhGsgV7wTe1a2mprPytiKNn5FHMmd",
  "key7": "3c7w4eYcwfQHJJL1gFpzdAsYs7RN5H1yj5JbbYE3nYi8xJ2VzLXRMXmnv5Rv7bgxWshbQzNQoECpwcbBnmeqS4ua",
  "key8": "2LqH7S4MsuC4GEriScUnmUMuh91UbmzrEQ2wm6uYmuVgBZoYxBMFKrEG97ZALhSgwhE1N8CTDpXUCZ62TrBxtNhK",
  "key9": "41WQGwW23uhsq4Dnahfhf7nLBRhCg5huQZAQ7aMUkiMUfsyG6sTQxw2LZrGDRW5PWtD2xB44ZcjmJFFGXXEzrE4L",
  "key10": "RRbLxh6doTAVpGujqgKqZWfvPVDUSQNjtFDva9sNx11bcYGVa5Dew5mdp1cWGVsf5PqWmjU9GPMXVPJd1V4kjjt",
  "key11": "493p2SyutHnnWEH5M5dwmt3N7vRknartxh2CUFe2UTTAEF2kh2xX6MVbPWy5EuAgBuTuXwJiCJjUvUre1g86NmDn",
  "key12": "4sgXp9VtgzxP93vHkkeC2cCWoiRFvz36SA8P8ofqdkTEgaw2eX1mXRteBQEM9Md6zS5nqJddgnQigVfC6o4iqnbc",
  "key13": "uneDh1ZPpdeMj4tLnghgUXdTScWrB7dKhjwTuWopNNs7G41aMdpfNPKFq6NJYnF9uZkLxwoASo6j5hTha9yVBdL",
  "key14": "63YpXAN6a4aR9duycNFoG22FrEgpZBjVbPEVRkXJjG2wHiVxq8Bkwk6xkACFnz4aokBqiy26UEx7iXLSKahNmExP",
  "key15": "4d8LEcArrSt5cJbdfoKvYnYN2WcVKUsiHGh4Ct8pdTtwgUAZibth1MfaYPMVso8G5QXK3HULsMvvyTrTDVQVKHH7",
  "key16": "46mYSgjm7mNMPLho8Am818vvqbp4sbRjtqWePqNbGfDJmVr6vZzqokX8M1HCwfxoxt3dm4v9wyfEdpvZ6rXGFpwb",
  "key17": "2kWoF87MswyKyQMVJKhvno7dCVb9HE6PTSRhqgrNDXzkZ9jXXLq67ndqXeUr7CHqyZYjDPuiRBDRRD27HNXpmP25",
  "key18": "fhse5ZjVxVV3ugxHF18ba86mr7Dho4SjyrRWdNrPeYTiniRfWLwwujobLoSdF2UkXEzwwE2tWLDqWsmtAmS7QTZ",
  "key19": "5cKwwFAdEmAWySbj7M9vtV6kdBzFrJVotosSDhJ1LRm6umrQTVvJFDAbGNTR6UoSNxgxrsAdRPHsRWcL9jE5ZUi6",
  "key20": "3V8zfuAbPxmqugmv63tLeJSfa3sFQUMwtLJuxqbxzYZH8RX9k7DyeakUPQPKRGWj3LEK8sHoDXJrTsoPboPFNY4J",
  "key21": "4WwDTTUvJN9kSgUbyrJzW5eGLmLGoVpRR2AsyvWHUHHWkpDt7H6FSVrWseh7WnAS7cE9Cp6WdmwKtzYgaVEdKC7p",
  "key22": "2zRVGmbXwCUSR39urj6saDmHsXYvv14Z656aZ1iusP8qyGPtk1UuvUi9eRvMr5xP8QVQbtREwTasyf7TzuBGUE3w",
  "key23": "V2L6zJ5jSQfXqpgwMQjYmUyDuHLsRuKbExhtyWzsUGg413Qr6m7iReQQ5jWLs9p9iPBbfXPyyv6UPSZxdRBjGsN",
  "key24": "5fZsNG8gQAaCQnWP7eRUDDZT1jZZ7BnW8XVFRSdndmrMHtRD3fYVbkynyboj6Eaq3nMzmGmW2UKKbyihXQfzRBZb",
  "key25": "3ZbYKNphTkfdcs9ivT6bESNGyeTr17KkhrCmFErL16ueWWknSVgahiLkHsT2Pzpiot6gyvW6daGo8yaRWHbZsj55"
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
