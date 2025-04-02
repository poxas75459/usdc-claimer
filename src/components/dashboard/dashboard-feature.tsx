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
    "4MZmXdiQU173DRTTpXbjucmS8DUosrXdwsWZx4GPYooRx9VGBKc14HNMSjhJcuc7f7Hay8AkhSZnF31U8VcgncNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmSbDrwGWZXyryW4942mBSnPvgr5c3Y4Dep9mFGwjCgGi6UBRBBgM8rc3gs6mxt7Jm1f9513izPszg84MyeyF6q",
  "key1": "2bX9JaJub59dJwTFK64oDcMwEuXsLy3mafR7YzbeSi6KY4bUmsxUU2wGQUS76bDQSxBihsNHYi6ct412UT4iu3AS",
  "key2": "3UmXnxKuFjhzgLZp54dQtnnDT42GVehuLmk4tTUUBMeaLvVw9wVwKhoGuZaq3tKYcXLsE5gYfTALaotE1rpW4JLU",
  "key3": "66SBzfSG22DfUQCbbQhZWipXsUbKahgsjfVdtwCgMgcYngHHGjWfkxNq86g7vdNK6Zo2yw7LwjcL3vRnFo68PbPj",
  "key4": "63MpUE9aJGe8BKFFcAby9Exvf464BFc6b89Z8My2nim8ocT9ovfEt67DKiLYmeHCuKdU9MVoy4WdR1z6VnKKXbvw",
  "key5": "4HHgSeZamh5Rs4msVSVKncmGDZZ4GjXVMLxemQ2di7e58FotYj26fgVgkoYui3LueKwtr9WvW1gLba3oZ5FMFhAZ",
  "key6": "53rgZNwgmvhpWCRJduZKTiMwLMgKRzeDnjwdGpWH862AyYwuVYUah3qV7MUCWvHgDkduaUTHm8U1AbKGsCHsP9fg",
  "key7": "3CY1XgpZKm8HiSVZANkB9VCdbo6CAAWFGCG7yL4bSZN21NrN9DyK9JqemcRDsFGNPEfeiMGd9KxBPbR8rQzPYArM",
  "key8": "2TRBHDXyn4mttbiSQ6rg7iizEr8cxfuSbhfB1SWeHQTRinBsVfxmaaDRPek3bGaCg8JMAZGVBiNygTwT6ieFyizr",
  "key9": "4DYXiuQruapCDPh8zB6wPgRBbJtDDVmc16h2sqnBkSKCUc993Wigwbpf3RHJ9rqfUZN4bo3KyGqGXYJHz9Rz9K62",
  "key10": "3Z3xehcWy4ojufu6zqABJMvqHZB3M2fLArwvub7qTCmWPpDFfVznMt6Hwd3VD2LLFCS4rT2MEatjEx3FFN5Ffpgr",
  "key11": "39RVJB5aQECkRNzm334hcP7A3xGNzsFFfPRD4WHc56VJwfMKNK8CNa1ceFDDyfYmPDa1o8wwUv1nVR4CbiKpsywy",
  "key12": "2c5P7rLUtuBCZLHazwhfgvHEKVQdcGpwRGXqe858bHBqfm6uXnm4ug6XhqZdtvV1wmggVpmvWaTJTm4y8YvAjvRC",
  "key13": "4UWC6vLA3smGLfiJKS6c4EADNr3nMWwJBFCKZQY24xTcjYuBg5SxFf3NZnja2MLGsYnBDj8qhmENkR1HCYSkibHY",
  "key14": "4F4xBzLJTJV2fxqXy1TJRUcAAHrnsDE32NPgcVmEwrHDqbV8oFV3YbaSo9rJNQcZAt39Zc6FGeFU7pTLPgiuRT4d",
  "key15": "d4XeMgAhWvewcg3vLg4U6vcvYjrcGFY1ZbuKh7BG6dBBUSHfmiDwph3fBYFZaUxKSiWEMZ47BnezHJXCjg1gVx3",
  "key16": "3uPPjNqod8CyiF23Z6aEdBMeLvshKuhKvYxGVTFWFmtj3PwP7GPrLcbUE2rp7pJf2YrqRSvTA6b7orXWo6eabK32",
  "key17": "4yKh31PBF1RqKhB1ACEUx5Fdd4rgTShZmSFSifWX8SmfG96Uvhab2yJhazUwwMc2i5ywhrp3quoHnFDX2AZWaYNd",
  "key18": "3wciDQzUg1KWm7dbk1H1wnGnMDFibHfiT9c2zs6vP62r7fEt3JC4J489BdJgrGTsBZdbwAMZVMmMQEgNE6FVZ1jP",
  "key19": "4oEWN6Abnj4dGzkqHViq8PviV1o39KT3oNDWwP5eEam6f6sz1DtrD49Ua1bDjUcZQ1hyQ9owWQshe4W6t4DDD2Cy",
  "key20": "5vxoa9q9hb8f4oZW5CW7sLdYLupea9ZEXyD6a8Df6SNtCncWbQDy7xEr61aU2QV339bjwxLauHCHFfEYXVWQmuYe",
  "key21": "2q279P3ZJy6xWt3DuNkGMtXTT9pzFAAMDLEgadQKaVnbkfT1tGYc32spS2vueXDWGYXzA85doFHcvGgsLeBh9ivD",
  "key22": "3WR6qgBThiBRvCCZkx1mVRHj8dQjVbJ7zXJWf4dz5MHRvL8SeSMQTf1nDpVzWjCCzDaftZNYYhtxNRLcHh7oM6e5",
  "key23": "2qqESJtFcNEbrsvnmytXqP4nYgEw6nrgrGRGnWZeVpsSRSmJ8KGK7hC6C7wsjmvxKvoG5iNhHtoRpGAPbeZSwhFK",
  "key24": "43KF25yV6iweNSiycP2a5okNUs7s4EVbNBwMwGjd4mCESyRoF7HnMJr6BBXNsbAKBs3NR27A75M3K6Hzq1pHJHKw",
  "key25": "31fvNycS7vPKhyNRYFyWbXeAAsmfwHgL2osjW6onNvqTYqJoSZcwLjT4rfUgFyUevabM86Xxy3nFBqHXTWSYcxuK",
  "key26": "2CUpVfQXXFTy3F51pzXpAN8Y5XnSZqjPg97pp8ezxMgZJfmHn5JE4BZMa61xt8tQpkvU25FDbWYoqNcEV8Y8CjWL",
  "key27": "4ocunXPP4bMkMP7d87Httgax6QUccNFu1JUzScXnQT59DUEx2dE5Th3Bh81uPz3cHmo7VssEHQ4X6mJ9KyCT1hz5",
  "key28": "3jHtKtk9TMBxirVHQFapP44EhGAysT8KJpJVR9EZu5P9yQhvsMTPYFcqd7sHh8jBygcdz7FSw18aZtW1FtfHZbPK"
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
