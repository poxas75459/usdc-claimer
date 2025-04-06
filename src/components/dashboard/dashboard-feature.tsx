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
    "ny7PiWzjfSZjZyYadqDqtb2rntvjs1awA9Amsc1HYxHhrFBsYhqVpQ6szmMGj36tzx7fFUxws19xGCESDLUgGWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SV5v75fBb8HccpJg6HExAsQyoRmBEXUiVmpHsNUvQyy7AL3HTBx2LxV9LiMnGjrVgFsvPFwys38v2JJDfSmpZde",
  "key1": "4KtgJNch9H6WLCftL2YYYdWM9gp9aayyJXhZuWiRhVGY8N9HH5eVgY3wv3fKG84SUwhsE1Y4hDXJU1G91T5gHiW2",
  "key2": "3MhEU6vqHSnu7symnprG635qp7NhjjJVUcdtKHARi7UyJ2xGzicXpCM5eL8UYKpoaSbGskKikLXrorirgmNHDa6M",
  "key3": "J74udwx6KEYraCKkdoZmPixQh2e57LBy6RfPA4YXU6aBv2cUMwahb28dQ7CNxmyEoBrQZ5QvJVEQJJHf1MHAaLn",
  "key4": "2J5x9XekmNg7VHkkV83mPp9xxQCWpyGAza9h5tK6pXifFtvwuoKjCzqjLCKNwxh266GnCA2XyBHDG9qQqDBRTxqm",
  "key5": "3cYJN68AHxUgN71Gg6hhpA9z1dyUR375sjD84X3WHJtuVtEBNX1A5Yb6M9GziJXmtAGSnojjzdbsWJjzzkDJTGnS",
  "key6": "CCUxbBLY2jwzxb6hFZAg6gpseaMRz8qoFG9M5mKU5ZgDzQSvU9tGLd9P21VaXKjBcnpCuRyWb6AMYEeX6owLSVi",
  "key7": "2gqgoiXAzWdYqC42D5s32ZreMf1bBviUcyunmexT5hdAXnmSm3LeYdj5MdSdNqpnAwDNtDNtcwUyuZRoRuEBuN47",
  "key8": "2c3PUebDYuxRCV1ofopHYr1Wkw9Zh7gsoZL7YBXSdvaUZKiDBQkMmPcNnLSxnQUFUdc2ZLi5jnQH18hyYXJEYrT",
  "key9": "4YvQtRxb6zJPELknutosanyoYob1gCKmsEQDuDRC7vFsXSeByag5wxPw1J2gEqQMxswC2CN1U57sCD4mCJxk9iv4",
  "key10": "4Kg2FxXgYjmLnhaGJgrs6ycQ2HPZRoezYUcsM6h84gbY1w6XYEEn46P2w4LC8ihyyfbLX4ZRvynZy5TKBZT1Diee",
  "key11": "3UJykpVgiZ9jEH3MipkHnPFWrHGbn4UXY1jwcVyNYUFE2okZTwtEHoEVn9M6qzDNifrPGgftGv2CVuHS7sSr9Ss1",
  "key12": "4EJs4wCvq2yxZKpbchE6ntLiJZ1rkECi7GE7aGjWcEAkryE5zTKeXPNPjAgbGPSLpZh4LBtRc1FwyLx9bsPWBmPJ",
  "key13": "3Go16ru9mFTPTScbQGLLueR6Ba8tTSbG7GJSqLNRfo1vbdFQUBkoUQhN8tdJL3Fzq8UrxVWJsSjnqqUngPRppzwi",
  "key14": "tNka9bd6Veiy5d7mHT7ydiZCd9iTFmuGVXqeZutihV9bkmUpP8bHHfhFAJJ5peuTpCSq8fTnDdXyHfAF4JcTESV",
  "key15": "55UVUeF3vRq63tiCJwZHackRvdHqEufzNki5YxMsqc1q3RUTxniMWxCMbMcvjJM77VpMcvbJumUQYEmS1bSgNTNR",
  "key16": "4dMnrb34xDAHrwxki4LWPBF9bz5EUtevybSn4Mp84RwyTpyGET7WnyQEHWxhwftE9ZtenmMbSGqBiRVpCfjWdKd5",
  "key17": "5x73JrvcVsigBen21yDwkSc6QDYZYd3kVADzJebAuH5WHskF3zsnwmmYdk2eCSyWzF9NzuqRELBaRqigzdqvrZXr",
  "key18": "653YZEYXGhAznBoHrByvnuQUjG7tVMzxwqhzzQVLpFYouCzecpsztE89KRurGwU35yR2LqZtreJTLFKpYTiXxQ2Q",
  "key19": "4ZkoWQ1uUCYG6iw4NhagDJkDL1voFr6twHMkRRcfXcBXqYr2sxgjAWqdBF9N24SmUoXSn6tgyRZcnouhMFLRLnyH",
  "key20": "4aL6rTTA8geZ8yC6pqwTjLwHEGb8MroNzT5uzXGdQiV4zpwKDeVEiAidtimj4UKpokuAPgLXWVVAAY1FvyVtS5xR",
  "key21": "KTaFF18BCRYiTMPVi8VvUYzpyFpU9q4xk3BySFxpJGHihbvjtDYfNwkKZfsatc7LR8iz1JT1JQiYrNFRtvfLsR7",
  "key22": "3BtP2oqx1kVExshs1PEZNvbn5LFwD2j8ETHkzxGtuK3j1Wf8FVhjkcTQSysQpaxs2qvDyW4fFTViGqUR5doUB9L3",
  "key23": "2M8utAYCxJWS8D429YpkAywACkNZVMVj7YRqFChQseyHht1D9o5SeUkf9j4WABxd5Lv6j7FSwkWZW3ZuG64Dh9HR",
  "key24": "4e3fyoHJ7wUoiKBPv9rZvh3noFQt747MPD1Gfw9DZZu3jQa85fDjUHNM77vFSBVwzjSLNdSt7tTzuWd7SJRVuK9q"
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
