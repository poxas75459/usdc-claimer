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
    "5CyX8okfqkiMzfMpXUAHipuXbP1WGhBJvf6dv5q3LaLXG8Etahn48QLKwzarUvJTZkBz9k7xYW1cEK792vqjrHYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bB4kzDpggihYKjW99hotyURp5MvPqWMJ8wgFNPVAyLC8z3BW7ukzp4zyKfwUqEU7WM5gM3mjj62bARXeKGLi5Ms",
  "key1": "3xTjDMT5Mfajcid3tJYJo1MTmPo2i3V5ihGR69ebJxo7CYLHw984cKkGXZXH9jvxGqLQcL7uESyRDsrj3rPGJfmH",
  "key2": "482mVid8yXYo676gwNRbkcEjaBXYPAzyWMabrR6ud9Jrd3RJB2BcabuxhaFnYLXkcF6e2Lro3PF1FJ6oPxGb5sGx",
  "key3": "3ojR84X3XfwrUSCkwjKGPHkBE91TeJrDNu1CfY6Frd4rctjXqrQRWgf57LAF9Hu8RYjRjjTvpfX6ndyMJm2gQHcj",
  "key4": "32y2jJQV3x8T6zh1peYfHrZRNzyq8khWL2HWttmbfDcJEfPkYP6xWbwrqX5mxzhCieA2uSSzkmmTYWkMfVo1UpvS",
  "key5": "2ejyYDgZnj9Ej4TKsTZkTY76w8gS5KfjWz9omoq2G24azLQKRreWo3UcwS3MXDajakkM5bRpVysbepHiKwtbLoWa",
  "key6": "3o6fmchDVV88Md3diTjNbRytjGSkE2y8nw7g91VVFbT5QdQQPNLVoAq3gqGyt6HsSw61EyCF8sYCkhiZJNZdFcY4",
  "key7": "2bainowRzAKn73nkuZwruPs2bZUwbVQP8XsPX8XSPv1vXz8ZRE7syALh8V6M4pFhEVCr1rP6UN9oqKq39osCViZ7",
  "key8": "4PJ5smndkhTh454o2VNLG4eMycmn8agRacQYUEEfnUVrEvLVRsu6AyV49jDNptfiwrxS1dBr6VVpdGMYfHmHyucQ",
  "key9": "4kvyC82vG7tGLPwXVN5fok7y78fFv76RBiVg7UUjBuAbyUHRnKN7q45ZW5jjZXTqmC6HnEiPXa4mLi72DRt9H1PQ",
  "key10": "5gwE1ijSZonrJVmDsX8DBeqqU3LkAbuhHWN1Q9wr2SrdtzBKEDdTGC4WBkadA3LUjHquemkSKQrRNSurKPB4a4YR",
  "key11": "4gLXgryCXmTRNMu6BPHGJHBUhMPPWXcHE456a2vo7VKTa3gDSCa28nCERZhYWrxvGfhjqvNQf5YJK3Uo2AETCg1r",
  "key12": "zm5xjF1JPZDQvEG5GtepLdCFmeHa7DshFZDk8BJzg5GjA4rrK5R7SRDtmfWo4oZoSQoqT7n4LyM9x2wFPAAcsCB",
  "key13": "SsXd173xyay9nteWpubom6yCQ3RDx9mxbJufRbwvPwUofcbDwEAt6g2nZyxdTHx7C49Nn5JNcNjoBEg7snuzek7",
  "key14": "2A5UKwKxy92MF6YxGtbiqzQeT4LrBspvwximmvJpfTrK3e6MS9n5yf6UYbk1kUnMYJ9tgsxmXEbc9cHtsa89eKr6",
  "key15": "4BE43Vf6gFkbrgJh3N7ssC6UD7NAvUriai63XnikWwMpGkk7er4yDrBts4uuJJ1zxn3LkHY3iut1bWmknqFT5MZL",
  "key16": "2MsjtTVtnKi4WZCTqMj3DDy3cFyWpkyudXoe5hdzRcpmdczU6AxGGPwnzJPV1U5yoUHp8V2zFYACH4WtWzLFAdhC",
  "key17": "44XhWx5ZjKe6tLonGTx4CjhRXoAvuscjA35Br9FZ1im27PzBtB2RvjkpoV5xb2wofGxDmqG9s59j85BL9KLzQnmT",
  "key18": "2uXsQ7jZwfVcM1da8uuMNAQ88zHtpw6KQ22VzRGuypMQwuzEHPR3quMXobDKqhXQfv8aGPd7Hyf3syaTc7CuXcS4",
  "key19": "3V4C73umBTpXV663hnXbe9ZrxpBnCRpdRo8dVnMLdsFAoqHvmC5bqoxQyJj6Gjr3XHuWcPCqByvHfz5vERzmBgvH",
  "key20": "2M7dM4Ydxw4Lq4qTDWv7XkjoezKRqZnZxBYqCb7hZCSFGmZG1rRSpUzFFmBKQq6YZ9M89fWEjC7BPcjFEX3WDpbF",
  "key21": "5BTyRo8TYa8UofprnCPWjmmz2a9uVw7pyPzxwFDSuhVfs4prodqcXqjACVEDX3K4d3xUTDjFGv6FaPJ2CrixqxCP",
  "key22": "5Ao6PcT4c8JGTUzPFa5qRhE6hcAp6R22mwYofFfDT3cE3FGfUV4jdmnBrFZGSB2VakxB9KGeQx8v7kXVcessXL8C",
  "key23": "41QN2NX87NifP6ahHQ5hcF1XzV4TRiWMDUL41GpnGtSvFpx7dx5p4TbqstV5ApMFmWNnSshgUtmNLNtAfxnEpKJc",
  "key24": "R8vz1fpXhd71cS5DgRbH1tJ9ENMVULzmBHwNMFzwz5xoWpgKvDZpLibvWUy8susc2dPmBqW2f9mxqv7T5SEoiUn",
  "key25": "eis1eqUMSViHrcDJVQMpxQwLWdVuzanx4feC2QCFk9bx1McDvaLcGd9Ly3eJLqFN1rMjXsw33HEe1RGBh3139sM"
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
