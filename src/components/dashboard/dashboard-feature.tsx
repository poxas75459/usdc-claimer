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
    "4Pe23UtVLqsdVGS4Xwp1YkT8UfuJVMjESN3YaXJBWWTBhoT5LBPcQgBYJEFzFqNp9EBaQrRkg5JJBrQi1nsoj78w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GLi6GEdF3LEhVzcyDjTRNm5ijrnENqGJnhSkgGySEdLa3ZyFvsnNBgnJeWE28k7VeFNSuwkYXgNjEwaEXWHUt4",
  "key1": "3KxA25izTWCmxCcXBQzpdbS44RUf7vGurRbZD9MkGAcLQquEaFE6eqRAMjvDHUkXq8Wgow48fs3WnaqoHu91ranz",
  "key2": "55phLFVYpYiwVscjYB3SiGMjN6A59R77Nt9yG3HpMZnb7BYJYUkcqLreMtBdmnn2YN5iKEXkqQ5ADfqdo5B7JCFa",
  "key3": "2isGD3kzLFJqHWSKciLFegAwXh1XBfco6hc7V4qy7ZDTJ1nT5Bez6RtTt7kD2XBbmadQ7CienKgNaXQFB2TfXDzi",
  "key4": "yDxUpaEpyVJCoLVPB18BvfLC7MeUvRcWh8fbJPsn78DsEuSQE2zUf2Jjnvz3dwKgsprbzL6q7pY5z21RQNDjezD",
  "key5": "2ZULpNz1Tak3ZiBdc9SnfFhfiYEAKLZkJK8jAP5oGCxn51Yig8pH51qqbYW1rAxtiQqdT3HXMWbNhAhirT6PaMiL",
  "key6": "3RhfLMpCZ96ZL87NEGXj7BFcYc9QCshFp1snG3ibnHKSniyPmxtCijufsmrvxaDYCFSgAZKEV1jJxEegJBHewvQV",
  "key7": "TQ5QW4qNaCQ2LGffgSqAMaBkQSdM9QyDsot1cyaoy5KufhVBZPNNzSCN83dK1XPGqPTWH3tDgtbT3UfP7ZVwcau",
  "key8": "65m1gJHsTkVc5oAPRkGK72SsnPu4QLDD8o8UeCzFAnpTuWWEskpv3pU26odo3cdP2Gmv3rwu9yRNX1n3Wam1sDG1",
  "key9": "2RfvwH6KMgLyyNNg9fiXuwtMDrxv7Yc2VgpWkQnJq9E3KSAkZR8fNekAEVVQ5qmFYz7EX2eQnhykzPSJ7BHu3RTy",
  "key10": "2evqdyhKdqfTuxJZGQicF7eeExUDZT7viHRQyauJveGKEhx7a7qX8dwv8BJCUY6g5aswqZYuZPTiScyf92bcKwxV",
  "key11": "QjoEPokyRE69NAGb7E8R3wttZbx5bQtSnWg8wVatTcA7YFWT1BqP5JzSNuyMUFiKh8wCS1opFoq2JVWBTSDnNHR",
  "key12": "3Az7Ft2SpvydwZ7TtFncSwnevVpyNcxYSmxTmjxEU8zCtt4dcLwSws2TNWcw1XHd36Mt45bqzMtuHWix77H2N5WY",
  "key13": "5VaFj3RaM1CjEDd9PLn3tT55ryHWGFGftEQKqJr6QVSmrwUU9hZ88U5YwB7ECAzFhoLoFH9dQqTpKN3f2mjPY5zc",
  "key14": "4LfTcDzMFevojWeWi8kLe4ZEwSAoKEbiys9qzfWMwWZmdcV2aEaBqDqMSybTjzWMeXHnaFyUivHFnbF35PGWkyJa",
  "key15": "2VT2LoAFfLJnquDEebHHm84VVMCtMiehhvS9WLtVQmrYb5KpW9c2nDNYDuJr2GvXNpxZiYdAB8ZDCf9yk6eCGJQ2",
  "key16": "2ppwfiEeH5QkvBLiPQRvLxv4ocMQsrh9cihCVAotFH8yBKxReGJ3K2S4SYZ5tuf8oxucbKTQLd4xHhq4JcytahEz",
  "key17": "5itQrBzEsVgUp9kHmEy8U2WLpBimyNMevPknMZyAX9WPsitp6QF5qrLFgtd5qSvsHQiHSY1JJ7AoGPrghcMjF4dD",
  "key18": "3JBUSL4xG9kRLKw2rLJmopupxfPFZQ1HBUNas2Csuu6LrMF5ixJdrgE9xXDQXNz4rWu33aZSWAV4MuoU5TMZCnno",
  "key19": "3RCZudUqnro6EGzeT98wggqtB5vqMh7PaF4a7GSMMYfYLCMKANWDQ4pwU19mMjygtaD1qjut3FJqH1tDaPS45fgy",
  "key20": "4LokkJfC53pfDxsVPSDhrgyKzEKavMxHfVq9yjaAiLsAhQuxqg6WBiNQaH5HAjtgjBWQBmR2SGxbLVPw8XsNuBsh",
  "key21": "5EhVLCyDquZzhiVVHYKiBawQoNwetfkdojCuyiW5pzdYu98itWrVdzTkDmudconnVckQJwrz1UpU7QEGM1CvTHL4",
  "key22": "4LkKE3QTotYwDHKZwVMqExUDpFgw4PWwNmEc7fCpbhTjjpUKjzdgSsU1dSdGjNUpSsaHa5CLbi37fGSvQVgTXmc5",
  "key23": "2hN2ZfmgUhjCmzmc2yGiSyikBXmoAf1mqzcQpYT29PrXzwJ9dsbieDKNDz2gqg6MJEmiRXsFGeENbAWp2MkGffGq",
  "key24": "L5v3kdhZLS7LB4prVgjvCs2xMjoLrREtNr3CT8EMgCx5bM8ofzHFSNYvL5LvmatAS25aaZGxKnx9qM1vfcS7GCW",
  "key25": "48aCKLq8GcnaWDDmecbrxZxyK8pbYgrNRmiqfSm5kEUZxetwEh7qmpyduviJt3U93acFaFEc4xU5vTPttY9zNUHr",
  "key26": "3U6etcLBX1JMoWV4ahV9QCm13s3EGZu1ZezNvjARkHY61wcPpC37cb7L8Hp3wgo4zDnKZcmDC4eFvB35pGe2Tn6r",
  "key27": "2BJxSgAHKoTdgAvHW4ZUk8PfNXwtyQ3yj78uR9GMggrFYd9kcfyWmi4yNFVi6nec8sXAhebSit2qHbBxwRCmPbwt",
  "key28": "JXUCi2s1A1pYCi9sqoVpiQvfcHjz8N47H7ma5yyCLVFT6MDGGYKxEXGy3JqibKpKkS8xNASodNbvzXg8sX41t9B",
  "key29": "4zPu6EUwr3q946DJZP8eGxuVSdW4voS1MsaqPdNjghKsHyJL1Dd2cKj6pBKowsqyGZwNofY4ufSMFWUq9V2Lsor6"
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
