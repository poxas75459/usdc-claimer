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
    "KwXp6yBhi6vhm5ZHDHvn4MysWNpqsbNGwPPbmdm9wfLKrMkCCs8rVDgyc8j38FvongSbz2dtCbsM3MygnvhWUaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VZw1sgvBDz741Ts9Ppi1MnDcVUewbKVYzgP2gYHg5RdhUdQWAMBU58H9u2TpdECjdCBN5t2SZadxoESc3D1zFM",
  "key1": "5Cct4vcVSLunPdVytrDttPPyqcdbeBSHKXTEnTi8Z2dY9JHCeSUJmyDAwXN3SNCeE5Qc7HjeHAtBSdgKu9u16459",
  "key2": "Yz5Gn7PGPWnPcz7AkYfPHz57zBtHEoExEJVYh2X8fLeDFkcHwXh8FaDhnniZGhABfAgEvitjtXo6GTkfThXu6R3",
  "key3": "6DM4Lw9hAMLSuxwoFqPz5Y4vJjxg988aU5AzDoATGv4cpgUy72TS4cDtmRxDVpLFxzCRYAh32YKT5bihD7wLQqN",
  "key4": "2yF2QHZ5GLkcBwJXpaZhRW6YGbdM9cqvrZUTkv6BQ7Pb2TjWzm5JhKPiynSVo1fnbY4ezYS54X1CJLZbUJbT3Qf",
  "key5": "3zX1h5YCBzeMREDf9Kv4KqVBiisopWdu2kte2FDYHVZucC2dgtwAGiMvRQygMRGAJvjAkB3dNFVY8GakNRVwmxcL",
  "key6": "3rty3hLNr6UtZD4dPKRwLVStbxawhrBJi6ZUPYtx4urxoRHBD5z6y7ouaJfyzHrkj3uLXQxPK1kj8r8HjrXwFsBz",
  "key7": "4FnsJ8fexBqFnTa5bCo5YfDZAswX8zojFjcLPmvK1s42h9Ki7Fm4eUNuKPMz3KLqMmsq8ezZpQchJz8kbhS5gRR3",
  "key8": "5hpDGg7E683TMQmDFeGsTXeQGV93xw3H7jCPtzNrtEKfVYFsWMs2qD9qCFmNpVBU2dqRCCqhbFJWNFZy5KnDRzDC",
  "key9": "4vWc6oNDgAZPjR1Am1U2X8h9147n2xUH1oTnyNzkW232BeQFNjXap8zbkpFeM1AHBaM2drzgJ4pamckxWfBiB5nP",
  "key10": "5LCyahNWAPzdoRjZhBTZpa6dTPAdgZvefB5YmdgwGxDTaA2v1f3BT92m14qN5RQ9T9xRMSoPwZS5S83sdAeLuUcS",
  "key11": "Y8HnWSuWNnwhMb3DvAzC2oxULxV2gYzCZB9n2UD3piDK92bmUyZj8vCzaMLKVTTnpg3KFbsXe2m6NRDAQqziKwe",
  "key12": "65GEL7jMzE29nTmkVWjPYgBwmE8WH1tXSfg9rADuN6TR6YJpiaRAyLgzYky8LGGZWUBmY5Xzhe3cojfkmjFcDihT",
  "key13": "5QgoCiKiTyo8PGikRZtXib2wfbg8KwzQ3vzv9ecA3d1ERE4enaZyuM8GbvdjmwJWPXfatu6bpoPABcGUWWJfKjJt",
  "key14": "5GHDrJtP1aDGBgsAzWg4r8LL14X6rwufhunUmwqvUggGtsWprGxJ8SizxSYcy3HAtBWiXxexipDkC1dd6ty8cEMa",
  "key15": "4GrM4pZpLkQZLHh6PNVF23GhzjcrcjTTNNR43pWmac4CmG9UX317p1koYbP5pcqPvmt8WwGceQkY8Sp5KZMBZEq6",
  "key16": "nXDRbRBud5NpdVHyXXysArUeCcvv8dFRjMUa78qLp8n1gFQUbBeKLJmJsm9NTpQoBQ1ePkkHadj2VaspzP4VdCf",
  "key17": "5XM7TYwk9BAsjtq1D7Kp6UNuzGvbYxx5dM6yQSAqspu2od2gMSWfRdkfe1FGJtPvwCE4gPUNpqLNwKUx6y6gaYLb",
  "key18": "4a2DftSBYe5tA47JCx9URgpyHTR9MLymFc2HnatRBNZG1DMdWUVX8gibZVA6XFMVRQtWW2ws6be4VCwib7cfmR5v",
  "key19": "vt6GtnTVmgWEyWMJ8rAYK6gtxWdH1PjfSWLS6mBKyjRAicnodNBWexjc4RkwpSfuuSBbZuBeU4GMHBmj9mrZ2RF",
  "key20": "4Ls8gnjnZKc6sAKNksUsxifNAjyZF815PhjHrxXuvDmmeVEncKGyHnHTvWYMBWhjcsXcb8Pu3tQoamGWkBymQbg",
  "key21": "3Xgsc1U6irgMuY6dz8PuVbKXCnwMo9pZM6YKE6SqSm2fSp426FUVCqjEJrXJSjKkaXww1A4AZdJRGHVPUtyt2UTS",
  "key22": "4UJ8oxpw67TMbHVLYTNAzvo5KkyvJcpmtK51tbf1VVVE5u1i1AUC7b62qcpqb7ntu7ECQmW2Bw8SMDtzkGBnQTNg",
  "key23": "5Pe1Cpsk3Eeos3XTxF1RehmPJG4w2Qu4vJ38zojCuz9ShUPh6svXuj5EtQDrEeGMH3Po9hfHB8pJoqGazTQPkR7Y",
  "key24": "fjDcqNstXRaHmcSE3x81xtGuGMoQDYMhG5jkxMKiJDioTzWHx1kfXxuz9225jijP54aTUgBwzkD9Bmjbz4mWsqb",
  "key25": "3iRPw7vXHeLbgFznQSDi4PrJ5QBxS7igQ8UHhQHMxkbaN4SvBrajGorsk2FCh7GTU49YU1Dj77kaML5WZweR3cMP"
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
