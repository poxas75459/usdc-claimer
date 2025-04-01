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
    "5t4LEEovQ5a1xDi6Ex713ezHYuaTbWNrWr5X4L6syZJWjSQYBvyJ5YCs5kfMxrDySgChCmtX92ZuQh1s1te6KxL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAYSvJMWPXenRg6UwpFGpgfKZ3xM4FMo4Nv89Cnnhb4CGyif7L7sjavNbtNimQBBBBYz7sDeS6USfCahvWn9bck",
  "key1": "3MsXrpHJH1pwYrM8YFp6uRcReGJ9exsyN9HuA7Hvcg162BgovWV83gguB88eBsySrsM4ukYiLNX787htyYXBLAQT",
  "key2": "5QNnVDoRHeQZ7JzBsroJ9GDRom7DkVNXu4gF7gaRj8HWRBwyapXjNwQJdsq53LCKJsbB68WYiCekQmfK9oJergWG",
  "key3": "DtXCbPyg4W7ujH2y4TfcpUe4gnDivVDR2To2NSMFp2HoPgj1HpyxXoNy8fgE2jfkMFeA4ptvGMSyKNLZiCap3vJ",
  "key4": "5WbMqZAFfEqKCCca12L47E3VEWrVszMatr9AMWpmiNybmAvvQCLLS1Bi8R2iPYH2pXS2hqCp3bvmjbrDTZNNuwDW",
  "key5": "5GirAtu1oGyWRuSb1MAT7xXqzyHsWsvXN6WdL6934up7qZiJceR3NE5LTgexetoPGw74QmStQUKHFH7e7UV84GvJ",
  "key6": "WwqM7GtrdEV31ETAcWpHd2orbsNj46o92befHWwA9fvqB2YCVDUzhpyo3GdGK8rw2VRiWoLHrswc1Ym7MEgJqaJ",
  "key7": "5GbBUk3UQdzQUQNSR1q1n5ZktKhtaya1FT9U7Cxh3GkeFxVrC3xptpdGqi6yW5B4angcArBDZKM7Hp51XH7WfvRu",
  "key8": "627Le6Ti3eUZfWZUAcZrq8DjKsPqcyj3YAV8MQjEpjL7KKA1eJQfymdFEE374kfoGAk34HApMpHJMjHMMnUrpxC1",
  "key9": "2ddFysPHV6MXYUSGhbgvHmwuQ4Uq6NASoQNPLEFsUiN8dmoFPigRWRFpyAdPA1UvLCBsEuPqCyUKsVx6Y2MD1dhC",
  "key10": "4WfS2f74ptkB9B6ue3m5EAY8zSr2BnGPu63DpAVUrM4Q2E8Qui3JbC62ucKts1H2HiQwdz7hKJqobfirRn3G3WqM",
  "key11": "3DbV5gupuyVyzRmyQBJf1C6afw6E5ypEQ5iR7BgxVg3cRBp49LTP9fT6xPe7MKoWg2qBbrfQdxiHW1wLRqABP9Un",
  "key12": "4hSJpeVz8uNjWqvBvgjUNC5CYPZmJxsTBp9tobj9Q97UadmixBJusvAVNgEakc6Xi1hMdQ9hgcnQqUZiza2JXBrX",
  "key13": "4GzgczB3q9BW29wpUT8DxQXVUQDAfnRSPpmVKrcG6cVcngeqKiRmAU6jbrrWNu6kP7JgbYSTro3NHZczaNAbGjqY",
  "key14": "4RdNuZXfqM7DXw4mNgoYrCDJRTrdz9WTQCvxXjaRCAhjKbKC6ybax6AfsgrGckwy28Rmzo7ezY49xhwRS8kdPWn1",
  "key15": "3eJWRmjV6sFVPeae4yhqxggAosJ6hcnYiAPSddkZSDpGyqfvXqahNrK2KdHH1xmSahL8533h8C6DyAyvkHzpudim",
  "key16": "2HkhY4MJEZSGVdFPRQR4zQwoReTEZ3TujaHiUntyqgpLBJAJk4ByiJJxpzxuLgi4NPDw7rSEwHMAxffNjhN2C96K",
  "key17": "3shDsqGnq4WeLdLoS69doXKDefzowNTkv2TAmx7aWrjAtKtv4EjekL8KMdSzHeBro44PpZRFCYggJ78pDnMZ2yJe",
  "key18": "5DoipxW8G6XXX7ap8F2r7RKUp5xi8LG67MoALTftCoYpKCnfAKm9AtvA3URmEGpaXPshC4P24AkJhpPbvh7EFkwn",
  "key19": "5Qnwwh54JCFz8irMqSjEs2kriSxLZfwbK2v7VikTNw3vf5VzZJQQqdYhkwX9y2igYsSZgwZLn1q7RJuw4cv4V3sa",
  "key20": "4q7ADYL3HuwfZnL4x7X7ExQiLHAwiSdQLsmRtU5Liv44F2R9BdjVHfGD1FHc8wMe9qeb29LJ1cTQS38DYvosoChV",
  "key21": "4rUsJFNuyrqcnDZaRctSHhdZ6CXKKPbZYGUf2mnGZwuf9tVJJACPAhanfrQ39M8SwXXfPaLziW9NTW4EtWuRqCBL",
  "key22": "2Fss4JwdXroMQsVuLRGnEFpQib2ggZD4nCdX2jqhrW7DQUhqtPkxAvHf413zyx5byKYk13uAQ6ydCndxNQS8h1DG",
  "key23": "2iFm9ZRNMKvANp7KxhT31U1e2hpBEMH8yQbafuWzwNeLHgTnPt7wRXmoSoBaTjTsALDGx1V4SrkQZtB5c6AiUkWP",
  "key24": "2jLXJeY8Chkdk3uztEPRxoamp42r8r3qtSbW5EeELNsXwSZ2BVfVFQGeTJijQ6Y9GKuKVhBakKN8NyvhK4XBJDk5",
  "key25": "2dJbQGgXpiBFTZMWUw5YsqJvLvGRSN8TGawLFh3P4FfvMDvMfK5W889G121U19h6CCMFa57Hvpmkt7t2wayvaHr3",
  "key26": "4h1a4MBzYbVfQ1SLud44nNCu8k3JKM2Baj6tni3ggK6cUC8JCj1iszbwiqJgDMNAoK4y68zLg3oVMezU6LqoZGuh"
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
