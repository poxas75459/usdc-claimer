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
    "2FZqjSgUBRVoBFixDThJU4dLTfm4nPo1YkrhF5QL7cX3SKM2FNf1bRfRbqcrQdJxD2bpGhNXFLZqBYmwmtZAmbCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yThSNyhEZ6xggZk6eqzGCLP1hGkK1May4QB1W4vch2b7kXQZDS1ow91wWpVDy3NfHXXLLnWkAn7zQhxt8cUekiC",
  "key1": "4sFWGinKDMqroYjTfcDaE3N4eTEmUR4TN9Zd3oBmqxUcVUGCJ8HoyBwDvookQhKCcJ8ahFJ5ETnkEChmPw52k24T",
  "key2": "5FPpEVAu12HA9uZFGVCBT9ktZw5k33DpG6W5tnnxv1QVAZEUhn5nmBKeYnQ2mvybspcYrCugjWLZfJqxYBJbnfLg",
  "key3": "4VES6WN5PY9UYGasUC1FGdXbUbQEax3vhJGoGXkq13vJ75x59G75zpMsm45NvRLk7g6nh3VzsTBAhZBAFtpw4xYo",
  "key4": "3qAzVKbsuZX3yuPfmJhrB4Jd2XZQ18w18fHzsQ8ZkVNaj9A1JsnUHk732bs6xTTxrsGCGzWjLpvLPmvsbsozW4yy",
  "key5": "4ptztVQpfie5g7wAg9yqKw1wqw5i5w1pMTwrSBjwMcqjmn8zpofb2uSaLWvDdd7FRkrae4ThyPSG3aThuLm6jzLQ",
  "key6": "4Sa8UvSDM37iDWkomqspGZqS8sKcKHwS2s8rsv5iBm1okYU3Rj6YZ9MR9GeXGtBfkaukWXRXPJF29jtg6piCBkkT",
  "key7": "2xSK6WmMZgQ2vzsGRH1Npfy1mwpii5uoBx7vqPnW3HH4PNjiGZGvCfHtDEAbTy4bLhrtjDdPPRPL3DuCW1fT8kC3",
  "key8": "38xVZ2hUevEFD3CHdjWNcataWonQVHo5NDCMxHzmVTpBTzJLoz77cQnGTPUiMCKBfB6eSvBuXwZGy39x9jUVGjin",
  "key9": "5ofKvpmpi5fhNJQbKs11pHz93Pbz6dSPhLc5tpfuqGENEkRfygrAAborbWTjyUaFJSo3LxFxdA8uFe78qkJghYVK",
  "key10": "4nuBDpUYSSR6vWgfZmaMG3yGvi6oLkV4rkhn42DTEbZ122zLmJq5GqQhPfdxW3F1xK7LuBeUUt9knySXhn9y8vCi",
  "key11": "4QvhetmTxq2n3nPy2vbF2CzJuxydwrcT78iQ5HBC37CWu3wCqbSdQeKWarkq4k4cCEJQawFtcL12CyGtYncQeHqr",
  "key12": "8E63Xn7HyX84N7NMknUTeuLXB39eLbqRbPJVEyiqrhdCYVNkDCbw32KDCY86zqBXTYMtPd1ojZ84a8oGhDaRMZf",
  "key13": "2MXpy6tDe9jtpCvxYQL8mDpVpudaVUgNdgAFSnUrexKPnmkNncTVjacCcKo8Nfi3jEehXp9tjsNgRgrcviG6hgn2",
  "key14": "2fGu8gFn61yGy4HhqNK8ethgyzrHbA9swfqT9tVxFqh5VKdAgrcQmH5PzPLKN1A4kF9KnGCgQnQJGSvyUpuQCcu9",
  "key15": "3PMySPZqRv8svorvp4JWebGwFd4zcbRW9otRy7iZ9Pk83kTkWhoYAfQicweq4KdehkVLru4v942s3u9D5adS3TmL",
  "key16": "2Q3XKQPpSyF1iUETrYKWLfFBqrG4AKMYX3QwxToJ6DzCtpsE8jXNuywnpC1ipMYir9HwsXPu9STxJi3Bwm8cBY2c",
  "key17": "2Qpb8mbJrEuKsXWDy54n6dvSP5f3MQ1bRQd38oVHF9KWSVH8rU2ETmXLbfiZa8ai2Fs6z2dtQJ4pCL8wMuC7wz5W",
  "key18": "5eH7kymHMLYrcns4ReEj2BXewaybZt3Z7WvvboU98Q2hq84nhyNpboB2QPR3xRjSSc8zgH9TbcuraK5siLi5Gneo",
  "key19": "5a2dH2MDrxnbSViqiWowcFF6CWxpU1myKdXRV6CMZHKi8qnn3Tsna4QiKqj5Z4s5dFb3J3HdPik3Q4xHSmCxLs8a",
  "key20": "5qVbw3TUL4nEYVmJzrCEknWuzvS6fhzxH2EK4EsBd9rxfYyESRChgpjqFNX5iefUXZKiqD2Hft2LACVXLQCB3EUd",
  "key21": "3oxWpEq9S5996zDn8qUAm5XcrA4YU35heso8uPsD6kHig3z5RC9q4DQhVGmbJQHFc5DCikCiX2CF7ZAvYqZNW89F",
  "key22": "ESmiamDxudfJerbbUJt6yrThhjXwdutH5eS11bevHYu86dSuttJmB9cT1S3SQXS6tR1xEYSZJsG2aY3s4FG53oR",
  "key23": "4TR4zonDbNidQ4p7QWpfgnNAVvx789HrHyEfFvS5hzxrhS9M95aXyMm6J6AKYPno7vSkR6gxJkkPj59SvcVrtcRW",
  "key24": "38xS5CzRzo37Q1fvahawFchoWvCA3QHiymax7YazFtQszEHPWVzoPoafy4hDPWN5DEm7rtFxsJPiKPVLNgPLNpgX"
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
