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
    "5B8XmSnXFeWcH7r2gmPGYATNL3pBfGMaF9WaPYY3M3HWpXtmoE5EnaWiBnHk6hDAcjoEaDcRHoyDojK46U95EStw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdLTVVCJssV2DJwPxvNwdwyymx7Li6qza4ZzfBp885M391qJ2Fe3coLxKEEVqStYUiYuaHcDSC5tNNJuN1KxciT",
  "key1": "5eQXnxK43G9KakWHpuJjmHgjtpe8p8csPdAqTB3XwP6ERRUZhv31z8WifP9dQtDjzywkDP3QT5rwN6oetqi3pwbM",
  "key2": "51GGPgCarnBRqjgHfATnkFSPKhKte46GgbjeTzFVHT2ovUeNy4P5NB595aHxwGiSdFSy2fj75ZeJsnzgv4HVfei6",
  "key3": "3VmCT6okdHaJUA8oVPC5xSwx2yjYhzqgrTaw9yUkPFWyRjUaG7cKGeCgzBni2Pxzwvre9wNMPiV2ETz9cz4pnYWp",
  "key4": "dDnW4ncN1vpURb85AVf7iN5VwXNKK2ZZ26NXSJ46XeJWz757pLY1rMsEEJn5BEnpu3g2arAKUycxt57Tq5cYAbk",
  "key5": "2rnbwDhkF2jRFYFe6awPA6rQjF5guBWiHTmWru9YvwbLkveoWBfkEWHYtuqgjPeic6CNbC3gXgq5GRpaJftSZubr",
  "key6": "3LUZmXTARvv6eDVAf7zMaioori7NQchqfnrnCEk2s7zKYwr4Bkp21PuTEHqpjycE1gGk2w4xmF5sg7NsAjn8BWXc",
  "key7": "227z2eyDDzf7dXtd8DEQFPaYNmZSXx1qxBcUFKhZ1YtXQZxMqKNnSPYQVL6L2pstJMfRb2jyeoqLWiHEn3mveyK3",
  "key8": "383uS52oxNwZErvmrUMLFrStnqReuSzTWm6L2JdAdCBzEwSVq3Hmm6v7HG9RKzBw96EsTWMTVkEpxtHWLRyrn6uh",
  "key9": "678jCFhYVso32xKDnJtXwx5nNyQTq6192qUs7F8KDhfXKaAu2qZtK14unNvdU8jTLZfVN4Zp7cQg3nyosqQ8tFch",
  "key10": "41y1a4jbcc2U3NqPxNPnPYZuvpJQ3SbF9NfCdgkck1Zf1GDYfsVM5CLYBoYfrn2FeREHaozHnykHjgb5jWufT8Nm",
  "key11": "2MQzrkH7omAPZcZtjU7D6nQ9zKBUhj4KTRW6QxYaqk5BcisuJemjZShgvRRFPYK8WGcNVguMgGvvG4NfUcDEv4fM",
  "key12": "2KgM9aUEFv7rFydauZutNy8rxjD2pMzL6aZyb81jb1HMELLqLQ2FKxzAS6PTDFzbtEhgb1MMEDzc2QtXPzJWdTmB",
  "key13": "2X6QhVJjiw1g6UGoRN8ut2x3SnVUQA2UoEGjr5NFkkBF92hKjifKR2gu9GExj1bAvzWxzkRiPE8DdnnNExfzztcw",
  "key14": "3nSsChDvycXTxRteLsTs7S5xqcWsUbwicQ2evHZjTabbPGjLBu3QHtvzwoF7rnP7vCGvuxk6ZNne8wvMGqvTCGXV",
  "key15": "4m4Gcix6ji5MMg8Z9pGDVPvQAWAwJKWSUeHbETWrHt4ZA7dRs4uXjpTSpZrBQBpG1K92qdXW8pdXibaaMtRLvXD5",
  "key16": "R3Wckw2pGdL8t3unRecBDowAi9xbZLb3n1z41Dzc1zdEfhi7P9m6iCZ7fVVNTrTGh665wqqF6E5Yvtw1XtdEJuj",
  "key17": "5dpmYt4RyE694yvFmunen18vgqJmQcwhT5yBWEkyxUfF6KB6oEgaK2GA1x94XUYPYXYXzL82c2pP1CdUvAKEAy5v",
  "key18": "626ZukLjxkeGcpoMatozyGzq9yJc1WMhbSCL2bkiLt1wRUGrDjPsqdk6hXiMpNP9Njoz411Nmy99mrHB7yw29C4X",
  "key19": "HhrB57mMPnRpbV66rrtordCxdHeEfH9vSF9d8kPYCCR4YU8NPCjnk3wyQi8HoRoRsY7ougyjuPD1687YqH8kyYG",
  "key20": "4Ar5Xt1R2Y18GaS2pPcvD45YZsHhJjKQTX7Tbky4kBwW7BWAZWs2u1DAkkutZ6y59XuSke9jhA5yMRhQz1seitu4",
  "key21": "4a8MRRi3TMgMTtt5YG5164yZemWT66bRRNereXUiPsPJDiE3PrFVHe7x7Z4eJvCG4yFBKPX5w6JsgB1j76KoGVJX",
  "key22": "ATWVSSCtBNaMy7LbSVHCtuFZRgFUjYm5eFdpBiQYJMX9GMtJwMwtv93SMrUYZCre8qsCnEaoW1BpHMR4YDiAvXe",
  "key23": "TczvavuW3fcbGgoFh2GQpnGtzMnSTYKHUWJA9pBh1TF4aLEGoPJjyHkueWSJVbRaPn6grqcvAqZa49BzVKi3L7r",
  "key24": "5ZiVfdbBfCPpGipxuPA9jz3M46PHjuLCxvhP8XRtFe17oLnJxU4YzLHJLFPeZwprRFmwPePmkyNd32oCeFxGHid8",
  "key25": "52Z7tzL6CSbCpcYskVpyAFgvvdUUyiKTxXvqUNeZz3JQD7ZsFSEzUxDapEAHHniudadN4Qi5bVLdpK1i2UYMwhAc",
  "key26": "4oe71v7CoaKPJop2YM85Sy9VNSjm5Znuu7VFqPtArxKefT1htbSgjSWHNyT5rJqujGcz1osKEmb4cjrViHZG437y",
  "key27": "JXxjBisdPKwaCNbmaZs4A3n3pwFJUHNDJwrUh3cxFnNtqYErfg7cV238kVLL9D6BaPQXR1pbBVU43am98bRco2A"
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
