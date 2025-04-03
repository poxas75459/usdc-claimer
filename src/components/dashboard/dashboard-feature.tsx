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
    "4QHUYeJtnko1M8LZVMHxEjfsdBLcgepGpQU3VeHQxyUh8XLqnxKmfYvUPHs1VU67PKHoLnawYB8jEcvMameGGvcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhAgUvHPvhcy9HpFATGyW5sDT1na2Q8E1toxsFd9DUPqGT9QTXUo1VUm1NA8soDWefLXpz7asw4FcSDUysZbJzx",
  "key1": "4eom2b4AbvRcZ5e5VoUNop6C7jsFEwLVbt1kgp3d2s3ndxQbaE7zNq8WYo6roB4wR2oZNTJR8QxWhQ4zaBcSCASA",
  "key2": "37z5PC2WiViNrnWWK61rvwNnTfZcnSbc7MxRB9UC1G4Xh7F5H92iUKxt5MJFAjBTM8nhCgyTuYKgRnKk4D51Rcqy",
  "key3": "tQSXQM13wdQfQw59KDdfZ5Li6bJaJ8fkaWEXVKBKTkGUYiGr1jwFPAigBKDHrEsJfwJ6m98YVbXdGPEwdjTYtFb",
  "key4": "3a43kTPVAzsUehJSj6ivDWCeNhUQgjPeJ5vAF8uHdBAg66ncQRr2uLxWYCyge4bsaWsnsZnxdBBKhCgFu2mgLJXp",
  "key5": "53Jn9iVgcJYMFGJdH1c2jBSmpFuN4pj4j5iPhW6aSb5A44MXDeqsNb8CLGADhjzyZ3FnHJiPbf42EcFPcLEyZtXL",
  "key6": "38Bh1cF7tLR4jekxEhDgmziBgmhwfFxpFUwWLG8AUmfTr6dQcggkB1NatoCv1zJx7HpKmxg83TU2sAGH9eJc6Ub7",
  "key7": "3wmujEhssT6sRj6tAAcJErbYmh6FuXWu5Rt6qWqiPLpmcRmUUUcetR3mqc2EvFNsxPnEiZsmUZ4CBAEQtmiRzXQW",
  "key8": "3WQCw1NVdGVv5dYqVanNUr7XKmmWyGQEx1bEpCbN1wh6R7dikntabzNpRimB2ZDtzbpYiG6X2DcLTTBn9HP14qr5",
  "key9": "22P1qU1L5TKxgb3ciAJUh5AUrBe2GPMFjaHaUUF1enZ7Vk2UGKvmWbQs9PKpPThB1L88wCL13Qkors3M6ps6T8eV",
  "key10": "3MD9epddNBebbHNvUxfHKbZ7hXj4Q6TJm7T9X1gLBCEt7euqyDHjdX3T3FC5wMXn7oUBC366zYQPMxUDaXPnuYho",
  "key11": "5xD6xxUTLot2dHRhpo7ttxw1NSUWx6M2dAZqHesdV67NWz4pzCzXokZutjjs7mbHSgwhFjuEPGQax2pqC7AQuZb",
  "key12": "4NE7b5MDxhn6tSZe6PtDTgbA1SyUchGCm2PGwYCAbiMmbx6YNCvbBTypNyuWoxDJqJB6FCZMPR4PcNSJeXXfh7h6",
  "key13": "5qbQhgzYLo4Scb1p8vJA6DAaPJ2F2Dh8VphpW1KnVi7QGY1xa3He1QUYMewLHrJLPPNk2rrCnaigXThVBeNjG2x3",
  "key14": "3DxJtFzviB54KTpbk9qJ724Y7UYH5Q1VBSn91Vt1pp6x1zj2ePrVhrAEvLRvUH4KJ69KA5PRdoFv8tbTjrVyfAP3",
  "key15": "3UHsPocVujmuaaywocWJEL65FNSgnAvc4Fzt29cLpwAR19uuKnm9mijRYMnwxsA6p2JXsVWPbCijyT3Pd1dLxupS",
  "key16": "3d32RCoAAUJGMPY389HZ6Me4gumPNCPGRq3KgTDadUPEeYJchNcnGoRmzkyGJrECqYzhJ8v1CshUt3nLS9gCSCe1",
  "key17": "4yp2SW3QRbDzT11hz9oc6Wgw69d76i8fNygwdgTuuca9SbR6s9564LKvfkismuaKmPz5WmpQs16fTEtrofr6PaNW",
  "key18": "ohaqyuzjc8z5t2QVreVZBUQXyH2xvEBspNasEQ5barnsTzxSrKE6abu7BSAPKkkbJfaRUZfLGdo2XMNvGd55L1p",
  "key19": "5DGbfETukg4cFwhTepqxXAYJN8LCddC2mgTyX1Rs9Lpag5mXo9uBPWBdFqnqFFSopedEQmd3Re1ciRHfUoYffDzU",
  "key20": "5J7dbcoJ31gvWiqYq6mJrk7ZMVRjBaAwSofpsaJqcxajLYFwwsoh4tiaWvVGQ4Vsx8KbR7nSoGAXyAuFWPdidHt9",
  "key21": "2fPoD3NJQbWveF4HxUM8mtx9PLUQuqmobMUoWpCctxPUpeL3EzZXmBvVMfw89UuVgzAskYnw7Q8vFCxjpWHCLGs4",
  "key22": "5qh2ofAdCw2DLCGugcpviaVZN1rqJ5Rpx3NfHnddpk68vXpWUpvTvf3Nsyo11Kzaaco65yjWJvjnNnCXfXcbbRm6",
  "key23": "3hK5yLJ7YuafpMjaUxD4PCLdwvaLTAjnNPNkuGL5kvMTL1HTz9UqciKQLM1ufmpkUKcxaqsm3GAYN7sSY54QbP2g",
  "key24": "4vdsVJTBUZkZYt8awz6JnRXtk28RSFgoyVUR9udxAUBig6pCp9bheZEbjyTwcmohx7Bg7ZBNHePvkB4od3tR9wDa",
  "key25": "4yKjZe4jtgqRAH6BmKUT1dswW6D6ac7Fh7ooz1AnMX5iCjhYpG5X86EbdDUEQDfcXp7xfHFTDn41iGKxzboe5az6",
  "key26": "5yLBienMSnisDNk5ZBshf1t32mi781bGsLQK3SCDCVGAd4ZxgZXaFfo6eijpLoSrbpkekKG7LT3YswKH1vrM67S1",
  "key27": "DFQPdNAB6JL7iVwV5NGToffifVhoizoQVY2sfTudajq1W6B6MH5JguKzz8Mcfcjy2kLGrVYkH9iewHUYNARRwTn"
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
