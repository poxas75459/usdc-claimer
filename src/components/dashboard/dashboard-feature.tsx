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
    "51i8oSUZd8sNPttSDbXSxhYpTA86JVCC5oewskVbcV5TUn78KNj4mVyCRmFajKK8Z8e1WZRG5sGY91M6gct9XoXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vm3jYybVybwFysqrSvH1LRx7EpjqxJ58hsNYmVQJ5E7FLXBLtYgFr1CHqSP23j5GVmWaXes4hjkEWsE7k1UEaHF",
  "key1": "3toxupmmi1yo7axsM7caX1t5yDn5arD9VEi75bNaWXAB3nBAJpRwEawu8EQ5ZQiki29KWnxeGvLUrdkRPkX8pLaN",
  "key2": "54s9iwxjb56KzKr8CVkaxo9re1yiEDkGpDZvJEBdX4eRHSQU4QDTthu43aHvcYQzXtdDb6yCiPgYx6NcTwn8q6AJ",
  "key3": "3W858ERvLusP8KrCbxrLceUXQA5SoiZyKcaY1p5GjwyVNKbVfbtmouP9igkFZMfBAjmpGJhXZohE9ZReMHhNHcrR",
  "key4": "4dFNALcnP3TsixJBJBRkJgV9chBqptn8CGv8vYfYgFhQu8i5F9aoRcrsyuVL5TJfjj3o1K89F8i8aHCaqLpMbMNZ",
  "key5": "4F71vAw23TZ3haxq6ZTfaKQ3zh3uT49h8Y5rLjpQ8xvZwEgxtQ7JMS5h8G2S4n2dxD6o5sq66arQD4QN3uWZBhbL",
  "key6": "5YfJWeyGcWzhAxB92GYGCekaHSQV41xAfxUA4EnHE6fJhKGqbvbQGqsjciwkE5bq4Vf5mzXHN3wAvhWqM8DAz1rE",
  "key7": "EXF2h6W8s1aBX13a7yQLgojeWAagMZt1rEdwZ8orHrAwry17wbd32zouKz28i968Gia41SUmA9UxGcHSENBFc6f",
  "key8": "4QEubVE6vzhyBYboAK4bkiTNf7Phv6P9uyua1gUgxwWyED6yhbqNxoGPgACb1oWSf1vPeVRuG61SdaqwGGf2GyCq",
  "key9": "3NFejYxt4MXyKJePLpvmvG6jn22e1Dq6LLpAz8s1ASm1ywJP7rKPMKYmMGXXm1q3kUDAbrtc2i7MhC6N2eZNk5iD",
  "key10": "2EQkgkJcXDxv5VFBcECTmcy5d28QBGz9CcPfThLwvPDU87vtviteKWzHcUqJPnCrbX7dYek3Ar4Ehc83Mt1xD5PV",
  "key11": "4HMfGFFTMrrYozwqG61aBVAx2WKsJz6WcsBgJmYXYFZ88pq5kcgNvFDU23rC7t2PbbycjJKFEeXAtpUR8gNAwASN",
  "key12": "5qDW1pkSHyoY6B7N3Wvvz5LyScg3n3wqjsJyibnHi6Uzs8Sq7fTTRB85rtu6JtkT7XcS9oRWK9sR52y87VCihWHV",
  "key13": "5onJXFDdU1D93TPtSNccPNJVKAVM2vi2UnJJj5g7gz261bQUecozKh8uiGMbLxFndiw4yHdjRdj48d1EiwTcS8o7",
  "key14": "sPRg9JZcnwCM5jFfbLPCQq7YfWvuUEfcN4YwtZur97rEmyXRTFRQs76zZSqTo1VcWSxTMFjz8gge5f325LhLwfR",
  "key15": "3kuPpzxQhxd9V5a1s7uwbV6cwiQoVCwDrsQwVecRT9PBpq29SYgLXAm3ryVDEYGaiTeupauCP1164Z8rqj9npRNi",
  "key16": "5KVCwj2DKunXqWTLeLvp72Z1vv8jE6jMYwWUuk1FNUySS1jFakwcd1Q8DZAciBBvHQzQyq8tXtsMq3ivQsh2JCMp",
  "key17": "3n2foBweqwinrZy8rjyBX96ZwEA9yP5QqMU7Je57VFgYmzRoq2aadmKHELdDrCin26rz6syTYUb17Q7B6Xa1UBiG",
  "key18": "T33SUswPyW3FG7kbjJxHuwibi8UZcDhZV4UTRQijsit4me9s2HN6rpPCpXdtRa8XFw7RmSui3Ph4uTh5hedp6Jm",
  "key19": "4VALGbDpwAC1HRyz7f96HtPv8GV5rPxNzbALEoJzSQeEBpeV2jMA7fEWhWiSabitDEMsXryjp4SiJ76TPZ3H8g7c",
  "key20": "418nLuZH7yUSiLyarwxQbTW4aZ7yrAKHCu2GHsvvKsqPPzFk6A5qe65g9YWxAx3q57EeunubdGEHeSyF7jN789qC",
  "key21": "JsnHfTyV5xsgRqEyHGcaK2Hv3fSTkcdb7maDcGmv53BJctbjSYemDrUnBm2FT48dvEFsxGzAGBt6NSJJGPDmmKr",
  "key22": "45UEH2mdWcjfXVwiPH5LTMW16XM4ZzsKLLgbyNX71S1ZGCqbSJ75cmKxvCC6kai9qXqkCffuFWZnnuzHCv3tRBq1",
  "key23": "4z2dTKmBDqvHxhbmYJx9y8pfyUhoArNLsEr4DBoXmLDHSiuWjpku9xdvMnSfogd3XZVz7XiZvcS9bbYxRRvKs34P",
  "key24": "2yHeusqqZn2ghR4m2YJoMLgqnaYvshxb7PT7jWLbA9MHt8Y2uusmJDJEMAiQjshzgB6Gsc6Uc2TRoXy6seYaK781"
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
