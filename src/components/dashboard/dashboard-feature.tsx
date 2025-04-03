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
    "5oqBFLAedTKb7uXyiNGUF723DU7Tb4QJrJi3CZ5uaDSmQtu8g4MvxSGgYhFBRiS9oNNmF1JkAJQKRniE8jKmdRJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcrDFwzAfzyhcP9ABep9oCUi9o7LsjxdByKaD6iLgRKzUUBPWL7xHpbuwo4vqokvEsdarba3aSNuLKy9FQUvbsE",
  "key1": "4wvvnfio4B5k2CsmbyPy8gyGMHiAfQS7xXbBceBYjCQhD63zc1H5FH6cdZG5Wd4hnempvUwwoCea4G6tw5TDKpnb",
  "key2": "2MizLJz1e3y1TtYmPkPo8GHpREpxfgDGbNa6AnYpNvqqPu71Sn6dEpcj71UMLNXDaaEby3MAxdm8dLFzdygPmwWR",
  "key3": "Hw9mq7mAbALH2tZnPpYEM11v4oVAfQiD4ptu9gkfowSBg9ErS8VWHAz1Utw6aPmbM2SpuVKfCgJkoLN5rKgQcXY",
  "key4": "4sf5pVXR1UY6jvGRWNVkSxKDfGWkrJUoHNTcQ35ectn84kSNQHp9zB2gxgweLuaQfKfbvBw5rppPojX5TXVzVw2B",
  "key5": "3wMo2xYuTfCQLTwKpRxVDT6tjyyyjdycbLj7uMxn7xuWehrByH14CXTzByiaszfe6aopRGN5bS3NB6zJapGeiGHN",
  "key6": "2H5QJngCNVtztJEuk8sLbTFKvfmMB1Ytk8tojz4A2k6MSAQSL7GJjidbkmY6PxeoudnwJ5eophbvihb38EA1J3QQ",
  "key7": "24bUR6PhNVdx3vF4mEhrsdzkt2mrFtRgS5kLAUuhUoqFE1kzP8dSNyK3v4uDSh3wZbBGbcpQNTNFKkDLZBpRDHnd",
  "key8": "4fE64gXpuNe2JgDMahGH92niJ9gomRYP1oHoqJ2AsD24FoxD3ecRySB1jirXnE4kmJGdvjhUpyG33RkZJd5Z7RKL",
  "key9": "56TnCYqdB2Sg7ZLwAzDQz3K7rDPezes1EyHD3sZ6DwjtxJi6rq8jwAN2u6Vp7FNq2iP7U3dPLtRg4Bd2U7Vxt4Yo",
  "key10": "SqVLa6Bwc16GLJ6TL1toLo2QeQyPFgRHBCt5xeaW5KvZae1ZqLjqgV5BSEF1dMWzSsb8dkSLNK8NxweHXG9vTa2",
  "key11": "5PZjxudUYpN5Tu8zXg7ajKxdaYwaVnFxSJx9neCMMVeXbXTc7c6tfYVj2uVqD9QjHiWjG7sW9pXeCEvrj71sD439",
  "key12": "64T66xriYV2ffTq8Y65EjVA7SEVidGFZBSjpPCAPY57mjsWREQzRSzF7f2EkskczSGC5zYKr1pomas3hLNiL624j",
  "key13": "49BgYNRzWNRhQ1HVcz8m9EBtyAKPwVPYS7zmnb4PLFyGiFW3AXRtZZ2piDjsGGtif8aZDvsyWvqFgGmHhwhFP6xA",
  "key14": "XutHocK86ktvGbZ298eaH9PSgwAmcxe5fSaaALcRqzDT8ZEAxPRfeYb5w9eMCKxkvK5KzMBx1EYVcDupDJbz3cL",
  "key15": "7gmsg1CM5AjK4Rd4NY2b6viiWR7v5nRsky1YfvHap3tABvZ6wtnMu1mA6XMefU25rxBgYk8865UQK9rB1gbLkFU",
  "key16": "36uGN625zY5ZmVFcWRYjKcim6CUeLKd2p5oDbQhVmnwqT8BSZkWBShQixPQi3V69fVQ9E8MbWWHwBfXV6kMBMgzm",
  "key17": "57GAsJ1LBiadq83D8ktMHDqoFnxHrtqoqMQZYB7REUGeVHb7UwW9FTjSsBcZZgrvj4TraPiSeZ7mj6rLaa1FQZYD",
  "key18": "1dKo88PxTtCdTALGBLR6SRpcruQSfDcu93mCf2q1dMAbZbEXTuUcFttJk8m8kB5pmGhWFkVzHGEyZ9WCM4KfKP4",
  "key19": "3YXHNDRBZ5RbdzUn71nSjZVbvqxx774DC8KZeiw9kcQXUY1EBh4s9bWmMJegxyZS5sbCAYWvweEUu7qrg51YsgrR",
  "key20": "59QDnXDT8SZKzszB3AtkFmRApTiBr7kRFN4qMmB42Ma4VhsMyG1BWVZppFNeb2CdPU1CS1GkLz6izbukrzQKUFS2",
  "key21": "38Gaf9EwCvKKg1G4XCorq1emwpcdv2uHaueRXTdC33tvd3PuaP3om7rs7W7XFoz9UAc2cDkkNkFaoJefj5MtjiqK",
  "key22": "2P5rq97Va5QV6vG39j8DcBpeawayobEg6yEAxKotuH6QyxepCNegRDxovbPco911MRYzSNrjMuVEvNNvCUvHQW7f",
  "key23": "4GRSPYn1C3N1Q1UYKFbzLmrrrGVRQ2QQqon94LTXpVxbK9wCQG3HG8SPJKat2PvLgWknMEFRgz947kYD2NdvfZCm",
  "key24": "2NQwS9pw2evaK6YUobFrhdnNm667E24edhvHnyVwEv2swti6ohT3bmkWzt4YGeF9r5QqMXGoWLmaYedGnM1dHXfq",
  "key25": "2WtfGtEafyrQDu8SBvHBWcJJL8qzeRs9EfFhqxEGKnmyPDzEWmtG92qppWtfVMdqfL1giaYa2CyuLY4c3RZCGzrz",
  "key26": "3RwARUuEB6qHkH56C5gChMekEWbUt8eP4h6nBGxyBqTGvwFumbaNArW7u7bBac2GzL5W58MV4LBBcVdcbZEQDTP2"
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
