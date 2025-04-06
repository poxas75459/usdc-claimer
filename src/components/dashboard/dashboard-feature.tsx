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
    "5fXY7iH1JYFPxAQ1CFRGBkCJu1fV3h2B6xKEf7k6tckUJFhvxdT7onwvAUZvBKpru7TAQTirntZZutThC5DWzLAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6MCQLyQamaoHiiK8CqQCrxF7ZPQd3vsBSCWhkqYq6cVLz9U6583bC1WJdQP3q1AJuGwktt3hDNEPb1fUUcyL9v",
  "key1": "3fmmudTTqJTqsF9J7MJVnMmo7E3WAHDWiK3GKTt4r8LJCR2GAgwGWbZxspAr1v71fGSfaQ4FFMhWP7GrynKe9iLi",
  "key2": "uxy3YpgXbm47uEdd7MQE129JGnNJTBZVR9JYnajc3ze9Q37SAuCoHWw9RQVzpg6xbaVPyEKiRawcLhwCZ3AqJWA",
  "key3": "4e6vYLbjYdFhyjJvkAQLsNj1L8vHJ39yCW6A8cR4Pq4c5G9ZHXm1oLYpSDSUxvKU8bvfAKiDZjCw5okpf5NvCHZq",
  "key4": "5Bs4gFTkdksqpDSJnurmYet48xSUEFacZ8whywiq2CtZ21PbpzY7xjZaQgk7SujQttYXMKsSFVZTfAY6gRdAmDRc",
  "key5": "2FxxZZN4KAGDX21QHMzWv5X9QQ6vDsULc1ULYsGv6sUvwBVWqoVs4CrAkHXTbC9NFrs3V857zZyXPLCQQaU2hrxv",
  "key6": "55ez3nE3nDDDYM2doysAqZNHMvubTZGcmPfjZtaVmGrkCxFddBJqdSwY81Y4r4EZyDfnC63BWAq8hCSbXcGYzrJU",
  "key7": "2PTDWKYC4pA764XKaXVfs8WxB4MWxFjkLg6dL2mg8TXpW64T8Hx3UYAj3u9YqapWfuADBqQiWCYc9QKoHP97QvNq",
  "key8": "5rRQLGadspYgitVsZ1r39ekmTMmbVeZr5asGa9LNRJRZeWRp6sdTW2Q8ihcrdnYVBwJEz6eXeguMWDcpZP6TMzcV",
  "key9": "2wwdWgdXmDtCVNvKummKNuKZ7erZJup8nFdRhuamMmyfGyp1Zo7hUPPjxk2snk42NbmP1SigeeM9ViuaMhxRPyqE",
  "key10": "QHxaFazKD4SbzjNthSgysbn5AduAyMxPqVZ6dCuM18377ypWEyjMUVp1qV668KxjUphTxF4kNUXMcP8hEvX14KS",
  "key11": "2pS7qzcRxzijE1XkVF1PnDsXi37c77TqhJSFRLKNQxAD9mtuqzMsAfBFWH5omnHuVpaz9CxyuZzThWsHzonp6CU3",
  "key12": "41ePKkprrwTBggq3qEtKrcKAQMqxpdpMKdvK1pEtyisH5bffD67rTaES8zSChNnH6PXZCA5EEgyczbRgMd33P2JP",
  "key13": "3afnbQXmtWZpTbPgaZtRWJbtWStJjfPwj6wazokcSbQ2Z1VwWvRjXUJx5srWtt2j6h2LP24y85sCDZ992UhLonwH",
  "key14": "4jgt44Cr3NB2JzvHtUUKb6qWVSVAn719ptJvpEMEzshW3rGJ9YZAL7FhC7iTznnFkZZwpVTsSW4oqX9XRjXMHnbA",
  "key15": "3zpmdq8Ue8RZ6aWwPJYcB5jA9dMcGk2zTX1YRgNPThKWHAvw1JoD8C9K5c619bvkgoXDqro7tCpdw3Dhyu4mJX63",
  "key16": "4CQfXxD2via9cng8KpqS6bMiZuPPpWfPcaAHd9j3VT1kBSnei1PkYhejEWkKFKxNq4oyPpLAHzegfeJdyEWC1QVE",
  "key17": "2GSsgZHWBugk2wWrftXNKxJTrHpjBgRKHhFoVBi7GTc7APSuBjW5fQVB4V6U9yGDFR6rJwSGJdjRsSvaDEFpLwFY",
  "key18": "3jtyjUvi7rtiKo12ZsDvy6gDadoMX6J8iSZGkHPeqS7jX6KBA4Haeit8LtyBwNU2hNibbazsupdKpPMHNWVENPqy",
  "key19": "2Xp9C4veGArLSrESxqVgf1E8BoRpFGMNzZTZ55BFutRDe6JcuRnhrB9RX4MxkkPQwEQxrLLQeuxHsDSe3PvByDXA",
  "key20": "hEdwa6bg2rqN8XrPWFFwbxr8qQ5T1HrXYpVZuMGkVX64VXUqEnevnmLQ76SrRq4nSLdDH4vMt3oVzEvqkE73wWk",
  "key21": "4fBKt4ZN54vNTgkubbaE67S9TGEiUcSfebmm2YqBo9Ayz24Jp5KzhUUEF83ihxQ4miXN6U43RXZB76wthZDxPzzf",
  "key22": "67qRAeNZDxBdguKLq2yUo7cG8Nfs89bjkaNHtVrx6w7tUDWGf3MPU2k9Cm4DpPzF1gnnZbdZiBX3uCrR2L2mWeaL",
  "key23": "569UxUFbRxnEK7FthYtqBvgGmto8aGyrnBDhiNfhvzSKpW2UVnA5yfkujwfbqzPEU9zmwMgRnipKW3vjxau8oZPx",
  "key24": "5zh8fKX6Yz6QkpXhqnEBZqYE9FfdfrRgSXNzWFizpycs94jeAPs88GMj3HNKDdf9JTBxXxKBCPwPMhuLWTQ7mDEq"
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
