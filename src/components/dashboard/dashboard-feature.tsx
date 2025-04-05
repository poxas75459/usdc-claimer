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
    "3ujYY3ymtfH2ReBiiZi5WBdgQizqhrTA9Rpx1gk7wGfiyth1aLbRsKMGssLFdzSCQEnvYFgz8jZKEmqPdJjoXYFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTw6Wv4SWxT3J8DEuGhUX7EDr7HGNdGagpcHwV8HbMpmcVY8jRuUiFiTXcHuNxhgFAf8ZsUsui5M4hNJW3pS8Zx",
  "key1": "7yFkVYV4VnspsV6z8bZREXR1zEkxJsqQXqs2n4VB4rn2t5rPf31qX16XQxJNg8rswMbAVYVCuBcjhtk5QoiZymT",
  "key2": "5Hft6b97hr31qUcgdG3wnohQW8fAuEs3VE9F7cgbUmp3o9cJtBbH3jacAduaoscfXSQMeEuxS3gYzKgTbpaJYK7B",
  "key3": "43hu1RfgVYnRqKRsyoN81TYga1UbHRNPBB9CT5X3BbrAUWuJxfJxLpCcGHBJXD23nzNQkc5T3gT8BuuuhpcpYxaM",
  "key4": "5k2P33aCbVydSTTi7XF8ho718CBc4HiwXKMSXroEhNQC4FXn5VhGtX3DY9cxk9GvZWgGRE8E3ujfzwg1n2X21eeX",
  "key5": "4HKfx2kn5ARrEd5iVYFjFgbsrLue1yc1ioAHL5aLVGfCbNzpo65W2FDJm7Ehw3MyCLfm4MYMMFnfjfMnBtsNvnkb",
  "key6": "452cd4dX4CcjU1LHKxcg6Rs1Mi8GZGkUYnndi57s9V5GuFtEpDEaiCVpaKWtdN9bhHhNNSBqTUp6ZzKnsPgbGJem",
  "key7": "4RYJ9nWZiD7XeKTPgUHMPBifgekJnQrH1Ldv9e3sK8asSboCwz6A1FkEAgj2pX38SpX1ssYU6A4KpjEoisAJvpdG",
  "key8": "3C7U2afwZpVLZu6WfBtejKzMDsJGbiDyZMUskorgujnkYK1AQYYwJsZh3Z3fAZnNUGmQDw5vhVBPMXMGaKmEmKC5",
  "key9": "2fk63JupMMx6JD1A9rLCdtqBaGxkVmmWDdbpHXVpGWGBonEkVi5fvgHraiZi7NxYMsBnoaeSSDWf5saN1jZxUaoC",
  "key10": "44PjTwhvDrK69nWbEwFsN1GxTn2ijEA9cJJ3QtdU5rGfRghmUfR6WTCR31FiUFmk57XBshBq722MSK3qTWY7exLt",
  "key11": "ACuEYFPV2Cyciv4tQB1YRHxeG6F8htx7EvwmUXLSS9UVtyMQe55MwZor5YAgdm8699kCWhkhW7HCjKeizayqkDo",
  "key12": "5SP5swzrxhLeypBxzeK6WmTUZL4r3TzwbEdfmFwXLR9w78bWKht2F6YsvcKvQWznrtcS7iMowbK642AChENa3UEc",
  "key13": "RJWfRB5dRaPdjWGhiwep6KYqpitPtLo3rpigLXTxFTyqT2vdSMiiDFmKDHv2uoKLHSrrS6qcHmbDecK2iLutcBu",
  "key14": "3d9BrNuGhVUZcRZ6s9M98sYSR9HV3KUJDR9DJX32etW3wKPveBTcE8G5WGbxsQS9BKqZ5b5GyJhQetjexw7fJviP",
  "key15": "5tGHd4JpuMWZCcMyUAbnprMivBxtUpxzLFjyVoq9zKeEfkjUvQpQyK15vhaMUaYjJ4wgn2Whu3atahT3yfAbq8qx",
  "key16": "Nkds5Q75cFWMpZtFDJZjFyGjzz2XgpXSNDooahMor5i511ZeFai5W4MxY5SE7QzmTTQQzoF3eo79cFirwZ56VUm",
  "key17": "3piqkLmFHYXzQ3aLYsq8Hy4M7V5feMvxvetK9V6VtnT1EY9iNBrpaWuBqGm3XmP1jQBwD2iPNV6pFT2PbaDPD4si",
  "key18": "4i1LU1M9g5nTnMyokbSMqpKZKnagZF1Mqwmp5cLiDgVM98FNi9aum76nFuPi75gotEhgM87iMeEt5mfcVu3FUD5Q",
  "key19": "4tmNkU2a2kjV9WUbNZQ9sn6gxUozrpANsRPV3ZXJoz1HwjwDzzDtQj9AXm1n9n3wuVJX84k97hB725Kj156BHUUt",
  "key20": "58o2i4QLGZ7ixRkvYf5TtBYs9mDD1WwEHUx6yBMDVnX48mvbT2Eg6XCCfYJpvJbugtkwZdpyQtcZUzKRJyk31BkT",
  "key21": "5f6dgrkPeDiQa82zp32rJPAqWtA7H5tE9QUewQgjyMKwAgAA8PJi47S1xSQaEFLctDoN5gWXKBah4EM5CCWBmP5s",
  "key22": "RZ13B7VQMKBfbTFAwmjD1NU1YzLo6d94pa5ca8cBb6mCo3HssYR7smozChaZzcCDYXHAhA2HvCgf1VET5pammmw",
  "key23": "4ARCHUbX8XpHQyBvFzk8NvbWe1dVnJR1nG93jzJoE8F9tFPgYqgVQKTaWKXZC3jPTN1KcrSrmdQa73h2gEQFGn7P",
  "key24": "3dU8D1qeP59XKBr8ya739HoFQVD6duYTJscY7cnpCtcBDXWM6JstZobsroWuZWXveZwxFhyDwVN8HmFGY5ZQ3j3e",
  "key25": "3Ej4KpYHHMUKHm1gV9Y81VrX1DnH13sycSMqkmeQ3BWsP5bENSREWKPYGVGAV4SEWDABQNDM2cjkESSQFTUcaxdK",
  "key26": "418q9CJFCeiSV5j6PtrKU4TA25WbpWJFrZEfb45Vz8aZu1uv6TPrwPzyzfLTVuX63vhSvfit7m1UySwyBDX5E8Dp",
  "key27": "gHekU8yAjLybkPb1DjcYpjgXGdvhHfwi2XWZpU29xNt7knfoPMTfepFpEVfH9bBQ2EEkknwTTagYfRL9euLo9hJ",
  "key28": "4KWGxhwFDwn9GkmoMHAkZteZpNTjK9ZK5uDKnKvqjZpPZBxtnRBxM4AZqETSXVEL9A6LTSjqctxwgbW4jg9ZgSm5",
  "key29": "3EbSMzzEps74LQvtwTQYTMt3UZ8K7cM2yAM1xbJiLM8HYVwLrfHdchG2xNvLrqAtTetgahtgfio64kcZFn7wcBai",
  "key30": "3rruwRgB3fEV3sGfZcGV7z4MwbcrgCy2m12tiHjueGp5cGEtJkf7nSzegR7S1ykmdnY5v8hnycRCoL95kLV1739E",
  "key31": "2YMPd1L2zBErAdoFQitrvBRfjBnWXBjauCGtqcnJsXDwzkXUVCJqRy8rpPrSqHYznQkArqEMZUWbkArqEHoNnSPs"
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
