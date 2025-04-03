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
    "3XnfF2dWswP7BZzJ21Bpr9pxmX83pi9wnwnQ8cvL9v7uhEyek2nKEMnaBSYftcaeME4uUEGxjYhR1ZfYDtWNVRfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRH1KAG3EaAi3e5T59VNMkJg5dSQLCoTUVRi7AAWXUuNST7gGpJpZxBfa4VNq2YKkMw9Uk8v24vkD3TVe1RzFWh",
  "key1": "5yghcq6Vqz7dSbUtbfEbeAT7vy1sNuyaE8zwuVxMeiJZ2PGPTijETQRep54YL1CZrcAWBF6y6ZnFgKG7f5tcEsHx",
  "key2": "LLQhgL4jBtLUUqGQsmrtiNGsFdqvBSwGaRXfCChnsya5uV6TLjCKTKgjjxcV5sVK87xSp5ZNVyaSJNkmzQfLw4n",
  "key3": "4CH5Qne8DU71N8Fz5JJRakLx5CDZX1aNoH9zZMxCPctPUjSnNFfrTiojpawb4igSMgjn3KZwaLxhDK28oxjzurgw",
  "key4": "PTngMpVksGcGwLGdUD2VH8suFvpKL7P3u5FiXi9qCQwpL28eCW12vEetWP5vmhKvyrZMobswJ2dr5Dx8tSgymiQ",
  "key5": "2GQqVYFcJS21SqEPNAFwsFnc61bdNrbyFHm1MCyjcMN8kiWUqFNFkV5JP3ZirDoA8ipwYnm4euWimMmjuYiWcRxB",
  "key6": "4vAEuB3MDK2SkL5YzkZp7UKuUc3CwbKkrvHve9cRpSuLfT16qJS4fCZnuddRfgyjtbCnJMNxkPMG2KvGuE9F9pD8",
  "key7": "4cWt4hawDxfhmA4xSNitrTGAoNpPRh5op9rcNt3SkTPRsDEpo5g7sByhuHQEuF7g5i1DPvGVDqd2Ffpp3tUpJZRp",
  "key8": "54i2QR7sL5VcdhLeF8oaSQRqwfrYpByKCPaxprQR4AiqAgz1xeTjhaAAXbfFZrWPwHsiyR9AJiVnr2oGDJusKyMw",
  "key9": "vKmqVkbAipCkYRKiMxEsdLdAWEXuGsbMxK4CRiLMY1xmJ2MLi8BWnRaFJZPv5wmxpyHnb4ggAavMKG7GXZ4xm9c",
  "key10": "5YKHM9eeXvqcD1meHmgqMq4aKvFTAKQZArGodGZLkrNubeb9PEkS9J1sBXvZfcYtLX5KGro9Fy6TCJBgQjeSZNNg",
  "key11": "29r1d41JpPsswtWoQatsX6cr4NvfkuqQZaVX9cn4x1nhn3DCg8JLuNHShNz5rSN346mP7K3qW9aEgJnydzH8FgHe",
  "key12": "4QCB5voBMbqDrb4MzLPVqfDttfexDXkFJGutrAqo7mBUhvS5qLeCkYgA5mznJbJDW5GTxsmHUCaBxLyoERRh19N1",
  "key13": "mAxc9dnwF1fuVfSfDH8bpxtWrCF82DG2s274yXBjDuixZDmiYo5xVzikgV8QABeE1tsdDpb5nh9cqiJ3PSZ1fUV",
  "key14": "5tBNEzUsMx7hysb72QR93L9AGA44JhmYd4v4MxTD5B4nDAqYNav7PUaKQ4mghse8xdqvuogzBxdfuhJk713vz8VC",
  "key15": "3PUWHRDV9pAiybYQ6tVeXio1pSscHCXNZzbWrpsFMxDXgeNdqhnD7KCtwUiJ3AqJuctVzjxm7JkGJHyoFgzzu1v8",
  "key16": "4dVdjppLFLqqtJ9ixnrwmqHcGLQ7eVA1KwKfvjFPY39uhzSsFuTjmsHeveBGaDVsjPTgPp2FYGmK3oPty4yS2EzT",
  "key17": "2d3H4yv7Uyee4gzPomPa4eoWLzy1RnJHsjGusQNzYtn7rsAEQQj6LyvH5gMboBzcVaMSWtVt8Z9ebz5ddo7hGe4V",
  "key18": "49F2CAEZN3KJFJ6LAazMrP1RxajnTDMSjwktSRFoK2LwMrBtE8SYqnJWdEPJHe6Ln5M2iv4M9v6wWJkLXJ5BjmZn",
  "key19": "2yrav4nvFtrjbSMpZFz17Ep4eNRwmUnMpn6YWHuChcrPGePfrJSzc8VDLD2YLMMz8CGwGnvko2cRTP4mx7N1uUmY",
  "key20": "2xbW4kTvxq3CLwkUJjQb75MNQ5u3ry9TcCFgQGUA29Bf9Le9EoZ8wQoT4L87jcEuP1vVD8gKEoiMmZiGeR61tfkQ",
  "key21": "5oDVYtwuSuCTWooPEm3Z8BtRvTr8AdMrcigtpytJoVVPT6VUXVwH58jJeGXULEBLj85HaTV97FdMpVKu239Yg6SN",
  "key22": "671k2fys1waHqMMw9wn2Bxdy5BeSPdnv7hQeAwi5LykqNqxpFYcrFX6Bdgcbp6zqBw4NXEk5f7KHRuRBwuSwBr9T",
  "key23": "5eJUdU47G669DGYHzbjMJPeDExJH6Psu88rQZw2eCH2BrEUzUvoUdiC56yDottRmtdRQyCW238S3vp3xM4rvvqyD",
  "key24": "4wTxbMBsGU4X3HFWaUF3GuxSBkRyhTSKegCTyD6zrVyG1KscsL9vEicQXauAPNkMn9b8KhXb4UM1Y6fa3p3XaLSQ",
  "key25": "2V9iZpnLLj6LE63mJ1Ua2wiLc2RNA9wSeiLJGU2gyHTpLbdMXdoTpUZUBiRU9KY3coj9cazNFnt29H7MpsGyoTi8",
  "key26": "5HKjipm24t6w326JhU8uio8DaBJKtnY7skAGYRND3hy9NKhZTyq3WojK4WeQwtZ2Kp5LR8U1ZWJEMmkrjFdNHjD2",
  "key27": "3aTXhhJyyNRX1baepNiw2dfF3UhvyCrkhirK9wEpGVLbMBtuvQiYAPEkBpJYA73TifvjrZaK1uj8uN9GdHmTQtx9"
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
