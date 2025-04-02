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
    "4SNnk7LdUavyTna71t9ciU8MMVNFjcHjXgE1bDtvBmRi1qHKskPancRPDuPffCeReWTC3NSvFMFiiJTeFaPvJuYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DjtotpZMK1B6jwGj5jH3DMuReAgHpyDsZCpULWhA1aLYnw6iekKtxHDwPMatB4zfCBociRKbKnJfh6AFfAouPZE",
  "key1": "3hqy6LZtvWKWT5NRsDhkmGdxtvmRoXA73btMfLjLr2nxwj73YhqTpY4aBCwwWvcwYyf3Ckxe8XtrAZrSGXGE2K7q",
  "key2": "3TqXVcMmGYfcVdQ4QuqCiCFm9KQGugVMX46uVNwuMwRYh5meoPL14zYZaDznW3xXNVAbUAW1QJZ91vaTAQqrNPvE",
  "key3": "4CQHMKpufnPtgpvRc7TwGF2h7sMe4u2DjvZL1EXpRu6gpSTL6Dqu7DWG21BeZYpQj34u1YwzxMYCx7D7wxLkoWJm",
  "key4": "5mAmHWivXGQLa3WoAUVrcj9RB16mwATpQUkMCTi9aPYxAhZgZuUi9C1udeYkp6isucBpZBHeFEz6VcgR4zLJXAys",
  "key5": "39B9tERvY4wthtcBg9eny9G4RNMTZZ1x9UjXy77gj1aLJnnirzhFRf7kcSWuLjsQMauph3ByegDs3rkJWsNrhS6v",
  "key6": "Q3YtWEzbdD8VkHiPJqg2b2vStaD687r2sj771xiwRU2EVm8tuv7EW9rAiHipFeXth6aP3jRExxEMK8k3hPNpg3w",
  "key7": "3hsoiXtYucZ5HTKuaUCQizupYmNuBpvdYzMRAizp9rnFd4Rux2bTGm5Az3tVaf3AJaMLZNXrhagtKabpKCTsrYqv",
  "key8": "5NCBy6cAWUYtvNHqTBkHvKWwercQipzvXidMvE5ufCLYpjFynuPMzMexxSysdcEP5tNVHF5BGi15swb9mtUiEkRP",
  "key9": "2a3DMyPvDkS7vxA291yKwibEgp6FTvENEqiBxUe4H42crbFhahhZFr5Ny1Z2cqbMmkb8J1zqdjsdRM1kN4aKtAAU",
  "key10": "4rSSfBBnicjKwndGz1BXnwgtsUw4V6EyHFFrQToEeJhMCXKuzH7xn3Rhp2z1H9zj4PQo2gGoSx8wsnKje7wY6uaQ",
  "key11": "6196RJNNYTLy2RfYFeEiu6pGxYn1XfrAvNa8S2pNXZf4cnRQm6BSpNPUMXtzstkY2Uq8jxrWGRQDvhYeC9Ex6p2C",
  "key12": "2Hic5jKLpaCAnxpgf29Qa61wwPeJKorQyPg4F6LGunDncCCYaqrXx4CnVEqJzQJd55KFjdKCh9WjpM1XHhtZKFMn",
  "key13": "ANEXyDTVh936Vdv9tbcyF1H1dXEzToHNjCY8hC17D3ZYUYcmtF7k83ZBDBsgtgHRvLXeLCaC6duAm9z3DVDvQmX",
  "key14": "3V53ZjvCkjhvb6yyXkvRhcLd6FjfkvLLH5Yg8HaQsJnCb8mnofX5FVmdh2CVrU4sDR3zKsgj7cDkZNZrWhcicx8h",
  "key15": "47ToD1KHa5dp9xQ4gBtgFWAmTAXxQPfbdK3aqcM6oYvGDX4XksYdbQSWQ5p8oTYLzGhHE8uLFxTzRdFrgPKHwefp",
  "key16": "5dvWuUDFqT97rwBVsymYwjmFE2yfye835mkrYGTSCfnn8mcLHWQ3DM36QkjR14jjS5S3kY5HBAUcp8TqbkRXnxoW",
  "key17": "2jME3GPHotx1kfEtTdXwWXv5Yu7oPqY7huv3ob8wP3rE5xGGW9d1SzeT4VxdE9h1Z7FhjQyh4P3Ucb35ARWyRDDi",
  "key18": "4GrbzWF6N8uwv3cdy64ze1GghPsGWpkEJkJMkCmueCgHSq2L9CXGH69mgR2ovZFBmU7rv91e8mPccKegiZptKYV1",
  "key19": "57FGksnF1VLmFxwSuuWfLwDjGjS3PbKo7iUjybWHK6G1EDTrFnbAKGSbTXUfLgftry4PGqsGt1s1w6iPtnQLdscM",
  "key20": "2SXWpiCmwmQGr2kVvrvi3jTdCm5yBiKFyxCvyZkm5u5kGEToE3BTSUGHdU5Ggu9eUw9H9ax4JaD7B2FUWGTZNp1G",
  "key21": "2juMM5mkoknPJw9K7rr4g4g21nBywKHn36P9dSshcHv4JmQhtMqQf8NKU3EDakPBTR316Mg8a1BiziLvK5JrSUFi",
  "key22": "3ZWWRTQP1TVPcb31SiL4uCqggc383kUGmNTFdjsatmHgKpn86zMM3DAWcCpxjXujEH2g8oJ5RNFKfc8VLaXtQ5yG",
  "key23": "3XxwYiMmKuT49oorrjQr5nb5FhSEo4vRfi3AnaNxYxuuM5Fnquk5oCfDrZxaXq4EFdmu8N37n51RXNWujdK9rCWx",
  "key24": "4LBeyMkGGytk9pbXX2jrJptjQ3utAxRGJgDh5JZidzMppabZJYz8MexYfsqYLbmm53v8j6YicRWpT8eqq1ML8iVd",
  "key25": "2NBHX5JntjCiWwTwvevhbM6rc9Z26Bw4XcnGZfFcEWUt5UpDBn2YxRxYwWNn3kcPaEorKcdQJRrRQ9sQzTRkMRfY"
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
