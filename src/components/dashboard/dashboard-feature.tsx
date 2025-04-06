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
    "4h4SB6xaDbFAGBPzh7Pn9ejCuWmtvs2QrETvzHov5RP98X1pBWHzTPpPYzChH4wxy9bpAJGbduKVQwV1draBoMTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHd4Jn75dxoUvY1NLoMn1uFaYvZTzERmcZT95jUPMdAWGRKiN4hLCcwJ2tiRCPe3GVdZtRsBT7VTmzNtdGbaiVV",
  "key1": "4LdCXbeydLhTvQSitDgVcx3aGnVppqEVhbpuHfeaandoHUmBGjK3MaD46qpo4WaJxWSRGWo4T94wbQGUWcSPVUte",
  "key2": "3z8VXUyTWoro97waDYCRDgxXhpQfPdhLBsDe4Gi7DjCKSD6CZewDnCfw5LWAULPooQPZkSmvCojxnji53WsEbe6z",
  "key3": "4q4PnEKCabDkfUdLC2fmB81SLCc7cx2d6MR9GQrvBNL5sVGBAj3ioFQBC94zMSbLsRUkUeeBvVwCMLxxeUX1h6d",
  "key4": "CjsQmdPzPFLBKbChf4GGo4Q8o16Yee4rVVpEQftJxoYaFxyVCVz2uTsCrKX4jhL1qZ8jnNkhUEGgdVt3j1ZyVCY",
  "key5": "57yH3435PFw5A6WtVsDNkQwTQEmvV8YcBnf7rkL4rb1wQxPWPkwJKpKWXBtUMUBUgUkirjptTkcCEt2QrPtWQWRX",
  "key6": "4AXCaxQXaHarVnnfEQPENpHYGU1Gtj8L5X1L6aaa8fXyAiYFAvTZEezNNfs88aw6VWbZ7JcxHuCDjHiQZxqcurWa",
  "key7": "5kR44wUhM6dybFktf1cyjwq9hcYPAmeFrkfYidJp49PLzn37ijCPqp752rc7SSUbHQ7hSsAP2Qk2Xoei8C2j9wXU",
  "key8": "36x7tUyh6YnNV3Q5HCbLZosRYHu9zxvNbmwZSC8Nadi5CTVnufb3oLMxvE1uw8xUPjYpopFKeX2WVQ34psZqgx3K",
  "key9": "64ZWEsUrfELrM5XGcyfuhSWyJU9WoaSbq15ZtcQW3LySxHqBBUiQd7MFhfnH7qkADh9mjD6CxpsWGQJicwDd7eva",
  "key10": "475m4yTpwRyrtugEjuVPDSAMjr7nsq6xVak2iANHCQ6pcv375k7z3GWUV2CjRcGZnnDE12rA35pYjBHRY138s4uC",
  "key11": "4S83R2GfD85E8MMSjKidZXUZwDnS8RQSVRitWrXGY8jqyPe77kULWBeXuJpigJ38MU1EsuUAchjmUbz9VvwmZYT7",
  "key12": "65Qb33KJzYLvDWKDw4Gq3pL9hpJYLosyH433ssip283MFgm85yMwW3XvukzaEE423LntTwHFiqGH6owqGkQHp9WL",
  "key13": "2qEnN77FvWnzPLXFirk9KFjcLGvd535dGoXKwKxQWZmD5uvw2aagrhBg5pr9ZwcZk2uunCmvU94SKCu4rSZcqwBZ",
  "key14": "abNY9keBUMosUWeHaNCBft1jpv2nyQJyuSPiHN2RXLiWHbfHJKFXiDsHoUA6ue1LF1KzUT3fYoJ1wBo5zFHdvA3",
  "key15": "2pCvTX5c4x5qt1rwXjE7LNE5wQ452SWYhKLvN6RBbTMz7Soy1pVBRCdQPUU9GXzvko8HFd7i6SAZyEpKHVTWinM",
  "key16": "5K5ecD7qoAo81LM9bZV7vAiyxtaYBWz2doEiLYCkGFUnFkZrFkKjdM6oJk7jEqX7tUoHeZrrjqKRS2JJCV9MacHG",
  "key17": "27nL6VHZ2D8uUm9bKNpKJSy2SKGS6Ae5qjy1jhmWbyoY4qRTqkKzSggu1AmU7QFd47iWL6wNJMC2E2BFVm1ZYDqe",
  "key18": "2HC688N5pToLV1jeRhcRNhVE8he64bme5CB8cjUL7C3hgtwwmxaX8qA9m8pTtrVMV88SDt2oH6E3QFs5VEYWpAtX",
  "key19": "d4oiwdLZ7B9b4aJa6uqZLVR1zusX5WypzqFqGAvChgJhtRXBobhxZUrxc4ucykCxzughqzZvhrsy7j3AtmPxJ6h",
  "key20": "3XdCP6TDzGqoiSz4c4B3icKfHMvWQ4WVswhdXXujU2stkirn3s3rEmFGqiBVq41DLAph2MXobrHvtbH3Tm4cRvtg",
  "key21": "5dVp6XGCMbZDRuUKSUscgDv7pXPNyN4uTvkHkeBtf8bUaTBiRNdGv5F8HNJGmw7hgBXeZCgxz97zQA1H9X4nTc5k",
  "key22": "4tv2Hg2xKZyXo4uPPakDnuZrhqxaqov1x8N8HAFycGUr1tDmM3qm8FThoBB4aVEpYx2ht815b58VtkRk2XAbXZ9J",
  "key23": "21HknydZSY9YEbYjfjDJZK9wLyxkYcX5ZpzV9FT3JxGMiKaCDKy1woqXYuzi8Pfr9qYj33BphPtsXZC5w45CMbWx",
  "key24": "3pskkEa1VwZW8QFzEiiiCkQipuiNUGJvmAExUw6S6FU3BdjYTY5Ya42ra26Y2dyFkEmhaz4oWr97kLBHGs7HRFsT"
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
