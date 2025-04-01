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
    "6jqaV95vKnJvjcfyJzXLcM965mWS1MikG5za2DxJgiuQNrh39KptzEnyRuPJQcSRpdNu9NLeVjXvatfodk5yyk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3jV93udJ59CVEtAoykFLMsCeBgcd9jy3Yq8GkjqMp3eZGub6LM4N2rdVvmXbxXrbDQtrWHAHJn28wR3qX23gYv",
  "key1": "34bGNkXyvGg6JiHcNGm1rpt9ReajAYB7vwR1fB3ApX5DHm1tSYS2BBqtvmzKg44kyV43aemZt6JKpjA19Lcex2wK",
  "key2": "KiwUTiWHmzDZjseJ5WE3BjAZPGPi4xDubAWVFASsFTqBJnyEdDQ6KLB3TTXMpTm1kyugLqdnbbyiaDiL9B7nZV1",
  "key3": "5Wgfn5orBaWn2gK2Q1fQVtGTcwDGngyTPsK5ZGdePTSwWCh2GuAq4NHwwn3kui2DdG9gFJv4pAeuSBTLHnbGeGbV",
  "key4": "2KzxvSy5NMQW1bYM6NUcZoJKcNSY4yNuTAazm9dVvV8fBvvTmc1m8R28CeD4VSB3FjRUWkqoV7hwvHX4sPXKrZW8",
  "key5": "2yvTXhdT5sZK2cRn4tKohmjwzPKXCFMrAL1WUYxo1qmGeWvWySMRrzXskobf6uSm53wEswuQGzY7Ew8r5vVjixh2",
  "key6": "ecaSFnYMvKmUDgRc34ZABbLFofLtaFtLA3BqF3qZPk8Lv41AKPzKa5QKV6h76oTd636H3942YxiZFNWJwjQPvEC",
  "key7": "2WQ3kAk59cR4wyiHxwbaZBzNERoEC7dxZtxXs5GZ7e5yipqFaLcNPLtvQFWb8ep3z8SEkYD9KKcobTzzvrATJtHA",
  "key8": "4uCWbKWuSPhXSYFR7fhcPpYNaK65uzyFwdcwkB13RxDL6SB1EQX49NjFeYizKStXvi2HnmiAGxf7PEiLZ3giPJXV",
  "key9": "mNuL9U1iecrYLd9PYxhBFXhmBDr9FkfM48yRgmcSJLqu7ARtSgxXSrdS1buwnsgDpxiXPzmR5DBrW6XV7pXK5Ht",
  "key10": "4wUiGjtSGtVKkKUm95QRxARgNHZkcb7qPtDpVjSj5kiJPJY9HCikuLWhD9mopiQSrMF5RC333dqbxUjB6oUSZeDG",
  "key11": "3bL3cAzifHGE6uVSF8VnbxXjiuh6gVZygx4QvMM56YezcmaSKRMi5LmLuk73d3xewRAu2sZLVPxmYTSg762ZT42Z",
  "key12": "2qM1tDqMwZcxFPxqoW2bEojKz59e3vkrZrgt728AYDiacP41ZnLGbUY9LwQch3i3dvJrsVKSPwbZVzGQNnqxap9t",
  "key13": "2BtKZB2JcoiW7WJjBoYxSG2qzv6NXRD2K9sknXB6NHkfu89x7dKE41DW2JwkVhwF8DXCRLUUdngdgDtw8CWLhtty",
  "key14": "2TDxNLx65cEcKhPhDQ8ptgoUANggRg2FddAouXaWGB1PH3XTomsXXFi5jyCxi58EJAd2NHbqQ8qZkKD3CSaKnxJ8",
  "key15": "45VeyqsDTiN19abZ3Vs4HDNxARaKjmBwD3uyK33r5m13bErtuApCaQuSWcvyzRVDgRoKvhLYgS7jHiEH9zeFztSp",
  "key16": "2VQ8nq3c2pQVCsMe3Ht2RL1hgMi3ZjUk35BG2UEUPNfWdBEoCyTRw6PjbHRXbZ8Ca7xVDAgMTCf7BgMTpBrSf9WG",
  "key17": "5RnXScY9znE5DZfG8AdQ9nYamg22cUpVdKhC2f5Ui9GPcZaECWcTvQZFcJxagTK4W2ejm1PJEWdTrnGVYzvgsxoH",
  "key18": "2wnVqYV6t4ZNfg6tYXn9YQngrM4thpkbJJFc8zibBvT6PKQkCBPwxVvd3Fh57JVfnBU3WMFFgHm3ukwWbwciBG89",
  "key19": "53rW5gkCaLsD7uBodopnDM5QVVRS7Li3JEivHwznfgfbhGDkdDbnxRK5JdVKsoSXUbzvdbso7vLZY3gTkPUv3Wq2",
  "key20": "34Xj5rK9AiLxPWfBUXpXBy3GnfH4NaBdz47SaiPCUqm8AFRSKsH2iN8c8MageXJZxS44zrJCMdEnppQMzPu1DS8Q",
  "key21": "2qZNMQhUrpyzeFmiB6arGfmsJ4r9rDVfD7X7msMQjfuuTRwb1Da1qq78VV3RhtWULSbgA76TieNXef29z3SsDFqS",
  "key22": "3sbeA14HBwZ3LP9x9cqGBEEc2wcXx9cuvX3gaCVZPY5pdukVNRMcCVUKCgxvTfrHawgDLQqd12NNnVP1pYuznPqL",
  "key23": "4EyW9FjUr2EkdHQa2To8aYzXDGx1W1YJJrAkAjWq1cptVs3N7C4st6YRQ28NQMopKWCYioRk2NMLcihbMar9C4Ef",
  "key24": "5uZxUoFqLpAs4SLEFSaT4eQ5dsAA1ChAH5S7Y6TPFpTtq46KcdzgQ25yHBVQmALinmNJYE4wKy8LSAcWJKQWZbAQ",
  "key25": "3NrH2pTmPW718ApvCz7tUdv1PnY2FX4JLxyUWYkxiU65MVeWkBPXD7c4fuucEvKWNZGfhxqHemGscNVqagYgb1EU",
  "key26": "5DLny3nS3HJuerQu4SpDEgzVmLem3vSxogvLAkjkkLRmYograadfKpc6njwADWqdog26cMMEALH1YcCgrAKca1Rq",
  "key27": "UGwETAgA5AFjpZqH2hxsV2Zvwker6SF8FbkaZDMSRyFHDrXUj4XVWSeB26N2gUzhUQuaQSEQEWkB8HcFXptoXnL",
  "key28": "5qrrcBdgQ5rSNfjioPpari3pWueCbkNye3eLSjN6SJiZfc9SNo64NNYoRBKMCaZQc76Sunh3jZbnDxVUt45GhrkJ",
  "key29": "4PGkjMf9qFNM3JMFfogywCMuBzEPJZUQzNEZoCUDWHsFEXbkDnMnzftN2GyQhj7E2v8b1JKBanbfFMgedrisyqtz",
  "key30": "2CjdgVJbsjpPA6YJACUehD9KwQdeQBbC943PCgK46h7ZQCYWCGmx9GEftTVu6Pn2WsjwPnHkbTL3UxKkP3CekAjX"
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
