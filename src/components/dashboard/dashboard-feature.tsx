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
    "2F7WRXTuVWKbQgsJdV9uB7Z4yP9BBQZg5qZPy6y2tgnGg5uMTZ3FF25B6wwuucHpxPSpZc9dCqQUeJqMzZ5bkDf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXG81j8MKyZ9pL4MVen3fVZbsvvQZWmntK6S5zCkbbSCCBF9C9oscYTHREswGbKSapjUa7W1UZw5LyVhf5kXRpf",
  "key1": "42Q8uYoFnYkaHiPRRikHG2WCceFwVXiGa8SiyCQZnnCCyC9rNmFUmi7Zn7BoTT6gWM7jgvkHvL9rWRNHkYnuZmQj",
  "key2": "2QzgVQba5PmmCrLe7jH3eW7WH7BpGugvaTg88Zcvfmgvzwcv4FqVprUrGJ1SKYFWuM3cpoUTF6oQC67vQKmvpK9V",
  "key3": "5wJgqQJbpoSNA7xqSerfJqVs6KLRP3JjqzpUF32UmhCjoSz9X5dLs38KMvV31vDHfkUUEopJkFfjPqiYjMK3YraE",
  "key4": "47m1vGeTvaejur48nUbR2M6tEpthNsAWBEjFwpBodX8bWj32v55K7RFSW9mtg3bkv3wasv1fdfAYtbZRsCoSaL6h",
  "key5": "3SuecJ7bU5Sh15SUra4banQ56vJMyKH4frwR9ToxPz5MBKmUoV8vnogW7NHuRNHi8MNHNbNkxAvELiFaLU3ZfHkb",
  "key6": "2bNGvs1fdae7mnNXisA2HW1yhJyRZE3HWYQB7s56989TXuYB7CxKXA5oBxGx5aMJxA5a85GDFSbkbsLv2y1aCtFY",
  "key7": "V9UDrDYSEdLEXpoVkr2E161HsQzzF4X5CwHy7aZYav9HsH14c2yDDWtTyeLkkMWCP1FyBzmjsQZJpQBJoEpNDjw",
  "key8": "3ahXSkGBZ6nFDUvBEVVmdaUT2sR1uZnVGyVYvm1Kcy37ZDfuAFNAyvJUwTYqRbU2eHDpf8MNStJjSm8ZX1BdMp7A",
  "key9": "35AQ3p61pCJ1Y5KPQuyrJPKcYD1umpSefToWkpLmFrEnALx9HAvvczxe5E7E6tizPy3sqvG4n9DgdiBEV6pJ34s9",
  "key10": "3VgtRWXvjYWCPWdQYZGTJ8SVr9G5v8s2acPBmWDx1gof1TEynmx8LqnosHVcBZWjqYurDH9E2uZwoQ7D6bWZMoF8",
  "key11": "3y5vkeXQk6QxyhhtrwtVXdnYBRqp4UeJ3xzaiSzvJm1wwB47VXuTEJB4rTLZ2UrhToncPJBLMqVM6nFXTXnFKoP4",
  "key12": "2wzoRvwd3sKRL2Kb3JQeqBzFKJU9eJSKzXXKs6soYTYZYQKea3XuuKPVv3VAnxK8hQx25KEegqE5P11mCoNTbRNU",
  "key13": "5k4KmC6K5ZAYrobyGSNQrfAjYqvZnQcEDzVLGFHMM4zdr5jddnD8FiaptYAVxSXyi3gL7QcxyvEDHsLoFNs7uGik",
  "key14": "5zSXxYjMsfkjWCLMCzqxMhBHDUPB3EkfMqwfXLKuAL8Dm3WWGEYXt5nQVN2swgX8DcpJsEfhZZEKNLjDNyP3nRMH",
  "key15": "5ZUnKgc4UH9u18wCw8EhG2NwadkoRf5M5KH2eeUkk2ZQJJWGXsB3KqrYoyBbEYWhL39fq7v26wm4yeHWzaEWPvHC",
  "key16": "5ig9Sr5HLU41rwzdKYzCQkzag6VHmptsD9oifUUSgNvyEA4rNcXBUDW4KwveHfPiVx9GtAzeNWYp5wH1yWR3SoHA",
  "key17": "2GGvqycX4VnGAfLyXXjp1ZFkUjrSqSY7YcEkfr4ZnmpbVgEYpEWTWqSQgXJWpuRjkYyAxrQ9wu6feqaYfgc8xgoa",
  "key18": "2mAiHoBWYjXr96S93NDQbKn7ex8y2kyBEuBN97kpR6Ph8ZLpJGSsCJVyg6wr8J8H9i5b8waCMjuCUDpreCGUDAQ2",
  "key19": "45qKKr6nrYRbdsD3t2oHPzXF9DS86ipt6eGEBLpX6M4MwTEfjBSZSbyQWF3jJXMpRPhoWcbq7w5sjRwSN5mvEq7G",
  "key20": "3itkzHPLWuh8UPQKraDAPC1YFeqbzmZ2ejPWWg8tupx18tjpCmorK22DFCMBfEuqVdAp8RyWWnn1kaEbxxjxcjBC",
  "key21": "4ieCSFEKhXH8kDuE2CVYYF2Q7ok283YxXajbvdv4CKkXyK7WxQWSFMzXL4GSpQxWLi47FvekwngyfkRNQLBcDnNf",
  "key22": "593YynvcmmbVg2rKAZxYLDPPccP822taFqtAX4tDKX2iBCTXPi6hnABS3NpVqcofRRHnnSM4g366SVFKXfANRzbf",
  "key23": "2ifUGBfSaA3UPQYKFNnWfUv25QcDbmH9J4RbA6pdTzyQEAvY3a8jAG8m9zb7asnk4fu4WE2utec3tvY996MMn9DX",
  "key24": "r4h3F7XRPeoW61MRa93MSzLyPEtoPyDhCPqsdMZ1HcrNRhzbsp9CzvLABwXerYN5agR7YQxyWzPX3FthpB3PdUN",
  "key25": "4ESgshKp24fGfU8iixCaXyoBsw3vgmyv2e1UKzuRSpMsfemZj4GwskkpsYjEg2v3xXNDrZ6wQGJmR1SwWYXUBByQ",
  "key26": "4i1vyaW25EWnFhpMhTNg4igvF7zqmTcGWVpxe1nwzX2gjnRy57K4PmaZQW6PWqswuxmfXedy5wfApK9JQVziJwtJ",
  "key27": "4sdAE18jyJn7trRCpcmfefStvhjuG9rq6zLeHwtw5pdDefYdvSQvE4DCftctrSGXkUe3N7jZVF2C4Avs6k8yqLWd",
  "key28": "4CDhMNhyP2UCPtAPR9hPEKdxFsyEZg1vYFZwbiGfynz626qA3U4MLbpCgDGAjHvZEEg4vKeRPxLpHx916wykUwib",
  "key29": "3UNdiHSyE2HaqLbCwM8drk3NBYyDjSpC2VTha1QRRgpuYsqeZmSE2nsfFkE9kXBJY4r7tqhUN6PT3uiQm2wzPN3q",
  "key30": "65mwni39Fj7UeD5NT2qs1RoFSxHeep4wGWs3ZfGpWtwfhJxVkFqDuCiQnDWpe7XFE5jyjS21VAVLCqQ2haFJ386F",
  "key31": "481nekj1EXSSx7mKvME5xyqfsoTnb4BBPeDRS6P5McimuYDiDBrLRuH4U6sducBT4LCfhuoKtXxhLDYbbcCJ9ZBA",
  "key32": "3VV19bPbaJ2Z2uWs8UyhgwScZdp9kjGuxzSpRPqjmEehBChxEsbFsJcxRzredeMxQMh6FgcNPD5DLXeLRHwJqnUd",
  "key33": "2HEKNnkerwAbX4RXdWsu9ssyrLU3J5mLxZSbcY6XAA2wYuWwpuXejuKHUUsMWjbKgf4p97qPFEQngb9nzLrBnRfB"
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
