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
    "3TaXDrDj8diPNTSeT1riNrDwg5eJ3xF4BxkAjZNkDFqLB8Ux1aMjzvJCdLYMzLvaYBFyUN4XiMpXk4wUVGvM9uf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVbcQYkHNrfQXoNcPv6pdSCuQU3nnUc1hmWMpUC2g45HZ7s15cyktVwUCWoTYQrR2LgGjy4E9oVfZWhU9AxGm1V",
  "key1": "2uKVAt1h55yE2gbJK8iraKG8mPDvzyFf2dW3yUwMNz8FxnicJEM7hcD6iymwAFLrFTzgwb58xR1dKSDwcSrZTWCy",
  "key2": "LgYTntTtyE2T5DewH8faFhTEYaHnUehXwHhbtv8tjEeiiAEeHrdtTizJGyf2xgGFPJ5MTwFMKTNZ5Bd4DCL1a1D",
  "key3": "4mo3pm6MGdJTBHfWv6tWB8egKssTvzQNPcczsJ8jnxB17M8xUnUyxM48UV8NHkuQ8paTcc87cgd1R4kgr3rrPjgr",
  "key4": "4qt1BSDp7uAQKeDBDiBYBhBR9bfFXUhG9rVvqp2SpFyuQd3PXovtBVRpbyTBf5udqKFPWtBz9VKMKJMSxRp13VR3",
  "key5": "4CE8WsbHsrhEMRPQFmhan4MtsmpsbMLgiTAtZTZdmoMFXthUSAnLVMTJsHzVLfXSrJpYhDNTD3Am1Bi6pcrNZsRc",
  "key6": "2vdvg5eZgyXUM8hhYSGkrrbzda6kvBNCpqKkoCzrCGjR1sbzKCcP3C3Ztv6FrJtXE3a8knFj9gqLANMpyUyoDcGh",
  "key7": "2noTS9Mydm6NZbgCX9BrPJEvxctKrcZb6RiyXKYsA4Qk5obAnugz51diYE9oizA46fP9MsLdGhxfYLJpUvaCUBci",
  "key8": "4WpPLjndb18owm42kqNwVceVfb2hQDHzVUvF7298NVzZnzPxcYkPdxg4b1U19VH4u82LE37inpE9L5rG9s7hDn9Z",
  "key9": "3KDdNVmtyJXifFqCYwFbkqDiRRePmVdjBab3xjeCQiYhdXY327CaQZ4t5SXWy7YWspfCg8fwr4ZFhNZbzFZEqAKQ",
  "key10": "QUbaMKigkLXeKQcaivkhA9e4po5QTzcjkjwsV1jG9hi7eyY5JP2bGeQzeAdip3BrpZgjmZh7CJwANVA5o6toxMc",
  "key11": "XBZu5iPsh1zPQsgqbgLuRXPL4bUL6gB8cEu5RBtWDU9pT6UBr5AN8nvtaKgdGKbWvLbf3NtP6EGvNRepx44xk9P",
  "key12": "5WGoiS1rU5EkUEJWoVU6HTfuRQykLmg6sYjUKhPzD8xGTtg91RjbSAYTbbn8AKuJKNsTRLwX7fCFH9r1wDM9r8je",
  "key13": "5RaR7EWVuR5LcsEqBHwLg4fqQk3mtUPRFeaMFzkQJ9CrY7Ly4mGXx9rcrrmZFfMb4xcN14mKZGgHaDWBNEghnDqm",
  "key14": "2iaC61vuCHiazcbsGWC7T1VrwfZvmSSmnqZaT4Cxnq7V3GRPoHCpSdT7YzevNJhsxUd2MhrTZWVbMRtRduxU8y8P",
  "key15": "YmPfKg6fj3YQUQJxF6Rv9r9HqAHeBhhK39ZwZiJbjUPJZGDUPuY4245Ke6ma2Zo5KHLg9YGPudr9NtBE48RVW2R",
  "key16": "46c87RuWZTukfXrJs86Xxy6gNkU78FFvZwUV1wVcXJq3b7p8ASMdu31B43aZELThXKAV1BxZPJgeopve14uTxB2p",
  "key17": "5BGnPLYUFCypyLNo3BFFmYe6Xe9KFBMr1YxUMPEf7e8E1eHxtqVGPNPwdQvvbXrNtkgqPhDvTRTzp1rgjphYEcwd",
  "key18": "DufSujwA9RQEqTNvdAykkf3FeuQ3rARtpb7dNuE1MmvZJDsQoXE8WwqH93b64KMHKgyoJTExJvP14pFujeCrA4j",
  "key19": "3Za2jErBiz4m9nqKA7Dv52rEzVqnVWFdCLmd4bYTv6pEnwcQnreXxy3PBWKJ299cmxDdSwpw5RGM5FZ3812XSvzt",
  "key20": "4h8tcpNjdknmzpQNjcbaTXAN8YSUHQaCKbxZNvU1nSigLxFYTepmG5iZS3PoRTd2KRLFsQLhoKTi2Dvc3gpUomdz",
  "key21": "4rM3icUqd9weqkMa9Wy2s6MHu2dpowa9FYcZfbX2xnHQjJbDoNPRC1e6mBLhPDZFVkypNw5irKqBiJuMdn6A6wQ1",
  "key22": "5avFmcJcypF1bMxRHMEnMdFZWmSC3rqe3MUyETngUXaqytknigJPDgbjfuhhQWBatqMNGpzSi6d5Su8mFuhEJbrL",
  "key23": "8z3wcubo7EYjNBoTZcqG1jPuDUSkXMNBMEjjuHotjvdJxrpLWsyh6FotUW6bR1wn95dB3VTH1dNvi8RxiXDzbCq",
  "key24": "XcFbYadh4SdW4CzjSNiP2ocyFSu3SpKUfzk4UTswfUQ3rcQhFXyAcB5gVsgpzuZj7xgRYMAJBHBEJPr45tknoxY",
  "key25": "3tgdVAPrWm5Dj8cr54nuZhdb4gmNnK4nTqq1NJXVq5z4LgUJuj8H6pc2Dg3sT11FFWYEx3AGQ2UVRAvSWfN6z8ac",
  "key26": "27GXQXh1czXybmjQAA3tSqaNP9ViwFsikntcduKzrswAfqGQ4ouCHm9SrWpT5dGzYpaKEdgCeiQzLZ4UK3n7Y1yP",
  "key27": "28Dwua7o7p8crFJq5uosJpqowXeanHUEF5pNhKUM1eS6hmzYnLUCm126o9zKmSHBm7hpW4bKf7QhtzNqgKxuw3Cq"
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
