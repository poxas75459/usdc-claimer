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
    "5xqXHJhMd1do1tfjNqfYkK1BQ4PRHnYHH8zXwGca5k3xPta5i5r5VQdrhHjycMVHNTKeEQmzGjYdxUu79mSUXFxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251QMLJMJnS3LhfW87S1SEcDXNNLRoXZcAt8GxAopVX5pC1VKe3J8YLk4TQ2BFwarWKTZJ51Z9fvBbsgPVD7uSCN",
  "key1": "43SWySVbXKyLrYUgQf1wpRF8hdMye44qKjPmb67iqHo4VJaVf7TKePHUkriiP4uS56QbgtD3BQLr4UXqCrsMayBQ",
  "key2": "4iYY8MT2MBfjfn4F8urBjWskz3tyoFFwaAn5ZZPoZCLr2zXV325rXxZHrHcp8wPt3TbtDm6N4h9dEZQe7kMkR2FG",
  "key3": "vBDaBD3WmMtF5vcxVkN9EQ8Wa6fb8Y11vFvmpMAA6bPD2k8ctaqtQuCwsW87PVnYRBnibgb4mKdNLLzsoEpuA8i",
  "key4": "kZgoK7DoYcnUJ4e5p2pxYiWe48XT2VNjtFjzZHv5JiHFHBmcZpD7VFm8eCQeHKGpNXABgTHsaq3rrdjut4gjMD4",
  "key5": "5BpgGcTQBbz88iCmsV5g8hwb2XB5Fw75x2KM2vojkQL7jr2Q19s28XUbyckfsqfDwwCzG1cQEcXypqjSRXpeCfJ9",
  "key6": "QYj8jobAY3qAYeU5UjYjBwmFDX8BGjYpc4XoXHhcQXJnAP9tjtpdBoN8j4ELDUt4TfK8nBrDeNXnMMviodunqtC",
  "key7": "5Dnm6hw7bcZipT33vQCfiVSFDq8zXmy8DL8xvjvcUhUvoDavH9FxPq43sUkGoNSjMAtVzuxrcbxY1TNQk1hQm7B",
  "key8": "5Cqg8QgghbNTJaAUGgPeRJ4eiDRnqGeuGMCa7nxtdXd1QimxUz7SMASquWEVyv8a42SBLrTLHNheHqQ2RZTn8TBm",
  "key9": "2hUwTJfV2sihCNMBQS4pjivxc2FD43k4CgFMd7CuEfZHji6LzrzBVEh5cpoB6xzDaWmjvFrn4XA5bpUgZoUBQGo9",
  "key10": "uk8uLrTW498Qy7aSgx2yMg2Wei3rafvBrMjTXNzQHeKs2Zh87qCns8BJK6UKUUG34Sz9DQDVanQNcxtoWsAJG7w",
  "key11": "2iNac9RR9nLz9gwXuBvNigXJK9VQ59KqP9Fw67qSAyfA6LcaK1uPCvY3m2BxTVzWzinGES7MRoJLZo6RzfLvqY9d",
  "key12": "4Y9dw4S1DroU2zWZcmd473g5ZaLxSgURe792ADopR2rAnQgxsZYBjcgtM8hwBVm9Q3vHPSqFuFVBtCsYZePxegBq",
  "key13": "5aYEEG8Wfe6PoxZMHTJyoonctb3synzAxqJtBo7vHytAnX7tsWBowM7QVpxQmWAHDq9e6qfPx2mkpTkkdkDRsYiU",
  "key14": "53ykSPQDwUPdXySiUoN1iwwsVp5dJbbX6pWYhfgnEvsWe3kwPg3MWbKWxuGda4R9iRCf3fCPw1LbNyHGwJ4xVc2V",
  "key15": "2cBRTQUPe6XCqaRKZgGLLiGH9kcBdPHnT8rwXti3obmU7MeYMyHrQTBfr3axSma5gCuuHUtTzgnRqTirZ1biiy6B",
  "key16": "5DZ91L8Foi3vLn3PTmwLkEvxNYkgUdGSUor633gKq6VYu7xERJ6v1WtwPp1yhs4umGmMfKHXmQCT9xqMgX39wuTe",
  "key17": "5FizMK9qeXps7MFbGrR77Qcqa2Ld2Q75SftmA4PbLp6dwMBbek8hDv4unNYd9XueFYwWQuSDanR3zjSqe125n8wR",
  "key18": "5jC7VsapoJtZbQ4xHJpz5W7JofqQKGJk1dbHga6R1QJJaT3JZMS1j5aCqgW2qNNwgs1TmFjjm1vARqgweGKPJaZS",
  "key19": "5WSZf9yk3cT59o9N3LnAtL9rU5FdJbMbjEFHWQTz6nXjdKFN4z6XLEMGLDSxrp2CJHNcSopLSBnx3J2k6izsozM6",
  "key20": "3DFVFvr6WH9VxaB8R78kZvBy3iM5G7wcUd8KrsQL7CPjXhj4pBwGkmt47P76RQcsAW96e7p4L73SgGkXytCbmXZM",
  "key21": "dhv4KEUYtU6d5HB37iUSeyMg7K8HKF6ZxNM4da6ipXyji9L4RqMP7jcQ3k9ryiJZy86VeK3GNEQhF2mZaEFhT9L",
  "key22": "64GWXBp9AA9tYLPgxNfy6g6W2L52GyVDoBMCsKvK7usHYqRb1UitX8i3NenvuNVShMCton8K44tCuat9kfxCTMM2",
  "key23": "4Y9rZEpT9iVXatGYF4MLMLoKFNfA3rKhQvZAzMkky63s1ABP3w5DVdH5Z1DW52yKgJxk6B5AqRuzB6kNonF7Kvef",
  "key24": "uuLvokGgAH33Etm72dENTZCbSefzv9EJSF4F265Nyg6eqLYUhEPRqVHtzXp1e6LU2xbHQAf4SeYTxaXAhc55ghc",
  "key25": "gaTJMDWKKnovq2RKYwJjapwEwWLoZtoGbDw1D5T3j1djonYbgHUeiQRT6BTDfHCukcMWFsjvRNVk7gcQzSuZzPs",
  "key26": "5WfpvDHdkhq5PPGBYQ1TEgEB4NXj6PTfPiUK7xjxrz18Cp6fvMPwEKFsBEcHUs2YXSWE8xBQETkQjzZuAZAbB9Lp",
  "key27": "3TDHQL641PFQkKyoMG9AWcyeUa3sZBLCmYBbCA9xf7hzkVRUbY8zqVVRhTgNEh8bAXTdr6zx1mKd1VsTF45uFo8i",
  "key28": "4X9gFzxZeVP9qkeoa5rKNJoX8n6HWXSZJkaW3nDg9YD3euuLy8WPAy7x21g9PqkUmJFmmg3c8fq12pChUbZdDruK",
  "key29": "4UBx8uwzStezU9k4dpaztmMzBHnDq5zwjiRY3yHAJDTXw1gVJcpH2PDYZCv6TBW7LbeotbrXp2W9tSuxdEMdxTLE",
  "key30": "Bq6tWwt8VURpn5BnvAMxke8DeMFgD4MVdoT4Cxj2d8m71Qu9H6QYTs4JJmUQkq9yw9C1ZWr4QVHbraxrFTvL4MX",
  "key31": "2mnQReZMrkxbsoyJVt7FLDAZn5MHK1gzTQvCTJXUWQajhD2dwj5dpuhLCaSW1buGLAfU2apqTeEbvrTHsWDvHhYS",
  "key32": "5WLMEFzEBZ6xsPV455oTaBGbo139AoX49vpgCkqKjDsmqShTmCJWKBHuw9rD5chA6Mewe6LfuRxDZPCweNMnMqW2",
  "key33": "5UZY6FWH6YciMwLJQNyzbrfot7SCyzNj86EmhqeLXMiJHTwgCqghtyq75gVvnAfAEQCuAxteXAocqeDqKRosbuSo"
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
