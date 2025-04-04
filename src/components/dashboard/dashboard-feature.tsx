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
    "5Y5Zp6Fe4wf7a9XbEfEdfDppizZw4VNNn7L2N9SncWKov6VhttVkuXvRezP5YEQPnjmrh97AtNtKefqEGtBjbjq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7KuhstYHsVcH1p6d32qef6SJGUroST3wSa4riV6LoxtfztFnNPurgsS4AC772rBG4FHHtee21QSMjJpKH3vxMt",
  "key1": "3BrHy7pRKD3iJZQyYpVaPMfniuY9YVgjPAeVHvowBpuJ2X1tdZVw756svyQrEoMVi7776uWvpckik6ou7d9M4LkK",
  "key2": "5SQaf2wNyx6UMqDnDZC8ZzTR383YgUoc1onXCSkBRxSjEFVeeJKHPQArGjZ3eJGeho1SSFdS9hd1dpkF48tmES4a",
  "key3": "3VDCbC9sWtWTRi3qHnPWYTTu7hYZc6QPHqAykALg7dfifuSc1xLVUcMT2L12dWPPt32T3CMSuiAwHXdoT3nb9YAa",
  "key4": "wXtHMPkN18akqHRn35fsvEVQzejiLMw4eRU55fhiQ5kb6F2FqGmHW3twpwgU6aaz72Aj8mPQm1hxnckxb4E8cDK",
  "key5": "226Kzwgu27Gun7TAweNFg1YvsfCRysNdmBi7Fu9T6fEv7NEsCDQVCD9isLvz8zrtaWfE1dSETA3dagdUX8d1zE3F",
  "key6": "34Ghj3RzwtU1xwDXfx3vcB7gwAsmT6JhQZ5StgiqFKefyGiRP9nvVaSp8NoJadTHWGfGLfvqovCk3ysY3eFgK6w7",
  "key7": "4BTHaotys6KjMUyY5vyXHqRUzvcUzS5G5dkk2Gt1GHUiyCj2gY9PP16x5fhDWLA83ojoEoB3NHcxdRvEeGasqCXh",
  "key8": "2ZngQabExRzjgBoetUkiU1vnabFYE5vaFnwsv7TrguM5X2QMxnMHHnWiusSUNRpLK7wi7itmKqyp2xHcCoDziJir",
  "key9": "86xznqNaVLZbhQLNKgnc4BtpXkRLWYDVBqiaSuw9RjxaftMmZyXA1F7sXX9RA2UpkuuMDFbkQCvZvX7kBbwjoUt",
  "key10": "58doz4QBXXbbe756mwf3T9fp4F4N25wHEjRPtN9SPkwmpDERfHnpYvUeFcPDyZhr4pWcj1s8CqnTdnANmgyEyiNR",
  "key11": "4GTZzNCaxednxGRqhF5xoQ7uJdsU5P4WSLWphSfJzw2pR8578hhzKkTEUkW1t6TwrrqSQtVL7v4vjfdR3a3askj5",
  "key12": "4zQ8rzFWZDdppUsoQpyRKjDZ4YMn8y1tbdUV5Whqb1pruVsVVFDMUyqpxFwXjqwDTW3eDaPxDn57XXezAudn2ujK",
  "key13": "38Zkg7Y2v1GyTFXR8oJoV9xtKEE8Wz74gNVgyaQLAWWbc5tYp8CdQeai2rsYRPiA88niiUBJGR5efd4cAUVPWZfb",
  "key14": "55YEvAyhc3AKsa6UiCEjCPL6D3TgjXW4sHsRyuVfVo2jnMKjCWEjpkbgTMBLQ1uQTKJ2sbry4PUh9r783LKBrzkE",
  "key15": "4xpLaKkprhAahVpdADfcStqRxXH58XFtAiMNMoibyC2PvvfTjGnXog7gifvq7gqXtqMSJyFjCVDMdzTudWgdDVuo",
  "key16": "3JPe5tznk298QjjgQaKG733vGscEgkenSnT2XhuYDiNXiPoF7xMYzPGUyWdDogr2yM4wQDoKtAs17i9AY2h7HKM8",
  "key17": "27vJwpMde6R9j9NdmJJMPrC5NZaz4UANr9KQQf8YvBZ7G9AiRKzAgBo2yWaS3zCVRnXgMpLsHTCxYYMy7j1ep5WP",
  "key18": "XzFNFguZ3zw1eJYLsxRvSeGQJ1yfae162aQZKXRktWEYETZ6apBgYZvbPMYG5Q9QggXu5yomVAw4VuAw47qp1t5",
  "key19": "3ShWo4qoSZiDMswPGk6FBHwC5iqgpXJkza3utXXpCMPVXm1E8nsTs6hn2JKtp3LwmYxDt1aazds3VtWiW6kSeh16",
  "key20": "2bxfEuzWufoHVrh6ccT1g5ZphLXBrs7NmCzbzxM7kcctVpG2S19DvmxYNPZEuTe7v71Yk4ZHc8MUq6vigPjHWqjP",
  "key21": "5uTMegusz78p3A2VynLPwrx3T7WqR99ctTbHYGvLniW867HYvbQDSoUNgVFise2fXa5H3zBm6CqU6uaTGYnZmxJs",
  "key22": "3FHTXAvqhvVujgui9FDG3kHNgztxnXVziVMGrUrkgc85vzKYTskGkrykeNbkQPWnyGHa3w8D3D5Q9BxAZasFUqgy",
  "key23": "3cWLCUjh3TJncELoPDeBkdkVBj1RQ5QsUgoZ9ebAoQzsEqWL23RivZAT6WkRCo13Jzttf7bTk82SVeE41wfRrEhX",
  "key24": "4nB21yEKyiUe7m33Qw2r3fZbemU8M3od9kf5ZiEH4Q9ySR8BZhew4ivh5mv67zridX4pKMTsBYBbiFf4rNcYE38N",
  "key25": "2kN6eXghZ27gU2PbGonBLLHiADYxjvrHriXQqu2FVRzEKaJnHuFNBnBerScppvE5ZKMPFiD1wb3gyc24MV42rhvS",
  "key26": "2B6BNm7Kq55TLTXzkht3j3KtPr2JgXD8b8c6BurWk2K879vxQqPcNvvcXUzFjjnYgp5uJ9X2uuvk5p6DRVPwaAS4",
  "key27": "46ZvvdVJ88a67ZpaK1vQdnTcMgaTpdcu1UYe3kh56yeREAJrsnYYYCuu4QiqN7C2gux9wi535XxMn6W1vfujmr2F",
  "key28": "5gTh3yoiLgNeHwAfWsaU7kTBX9a9s4gn4q4LCu8JZyKsNAUfawKBwuwrf1Qb8MfqR9srkfjuqqhy4jVBhM4fiZWm",
  "key29": "3J6hdzSYBnCJ9R6YWtN1og7vqmb6ctxe2NUr9KoDWhnLWFHqXr8NeAX7dMsbNqKVKZbCCD3Hukb8BDuFcm8dPYh3"
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
