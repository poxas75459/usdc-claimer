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
    "3r5oetyCtccKhCS3AW4BiFFoW2vfEc8GgexufNqLkBVBX4vksBgiD3FiEKmwSLdopmKyrVQqZgwivyTwpmBbWqXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3YCwrQCwMmiarprhsuB7FiYAhQ1Au6WxsE2LvsuT9UCBnScc5dcRMNc2kZXpewTRGfcLiXJtLoLdrNLBacvJ6F",
  "key1": "5zd1pDgXTydsqMaNNPRLmv9urzDNTZbohBeKzqBxvDBYo3y5hx41s8Y7ZVp9avGg5jnQ2MYEcRKtZieHmxobDhg4",
  "key2": "4dNMogkeKW6KrnjVN61Xem8puGQj1bxTtF7FmcQi77eKMU7ZMqQZK5i7W2CHaV2QKKuG7ZkmHwfW3DpBs6sBVip1",
  "key3": "34cKyYnZUDM4W3vp9vcxfeZ5bTXHq7Gpfjx6dH3XZTZEaowexVsqomRC1TTQNsQqDht2992ZE5smG8EVdoWnQ162",
  "key4": "2TGHtoasBT322HUqxoiksCcEWAkUKJDJyhjTHmW11gFoBUqtwacyBhn3nyQVyQ1RVjqspQ1LJKhX78J7XKz4m7Zc",
  "key5": "4xNdPQt5LHZQTXKvV5gs1CE9Xwmvgag9FHLwwoW4AJfKn3cMtV7cSByjjEANChXb4hbZXz4aU7mB2r5z7h6cFwqq",
  "key6": "4jz575GsVxueK3eDuQVjHByY3XFsNLe813jTyb6fR4EBcMvSgs9LQ6CJRGEGExG8m2MvQg41WMGdj3FxqU6if7UD",
  "key7": "3zHfwWtBL64YrKUTWRbpF4axE7xHyB9dCZPe3M576SvgmTpPMdkfZZzvRh9gW43sQ9aVDrR1eZGjxSJyihv7ZaHQ",
  "key8": "5HJfroiDvomUJDTNymZiNpPvvnSQpgrRn2GeVS1WnipoufbSacXrXkadbMeRhN9pbe4dc1ZEnmJEak9kjkfm49BQ",
  "key9": "3rxV2zXFuvQUQTkircduPyCcRowVq46YEgAmUmSRbVLgpp9Y1ZhgUZ34jkvqGZmQZaYRRQQJ8iwjU7J7Zx576GEL",
  "key10": "3kDJCKWu6zoG8uNqvd3ys42CDRAVtQGV3V47L7JLg3UaxZ8n25ofV52Bzu7CzHiA9CV94PzTFW8zALWBdnpmCJqr",
  "key11": "41hvhRyXMU2cgoTHSLiGEQkpSumDMeprLjNURRiPykmfsKL8XPQ3dTqj4R9edoh1L3Quyo9fZQ6CbVC4C746GXWr",
  "key12": "5QcXoSgVdRRwzpKcfxPAMm6ik9k4n9ekRsFyRwq5a3Mbm67VXqBsCTeoiU6sb7ygeXNDBzQjpfsMtgSzhgFKe38t",
  "key13": "3bHRMcNyBSkvgMETdyNXoD9AfSWHWd9Gyoq6FSmVss5VJYkgQQzkPERfDyujt8vB3F4L69xhmtQRV5H4RSQmvVkW",
  "key14": "64LadiRX8LjdefTSGMwJEoCBsG7hwJRXAXEZ7TwLvr9BGY4swZZKiU1Q4nt66PFHqLYNjVvWsMBkBwDLmnsdzi4G",
  "key15": "3Ue9ojSnibnkksswdTrqom22cttRT8mVXtmAgaURF2gDqTjhX8mYqYCJVLBbma6FPjKWFfniFLgFLbk7PEaDV8MS",
  "key16": "2JJQ8635ZHEEeuGhyGcmBvAqGF4bV8LyGHQ13jMSNUqjjyAw82abQG3tHcfntiLDuyFT7ZyMehmLy1awPHrYxuJU",
  "key17": "4ayDxyr8qzXJDVXbDSKJTfSo5SP5Qxm4Ct1xBHzUP4TwxPPw6mTtGVa67B1dKM6ud54Kt5BMkSSq97akSWygJzL1",
  "key18": "2PTuQSPi5Sf4MZFH1s5M9fdc25LMgFW4jVNCQ4htjdFfTY3VX4eNjEgLcEAX463Nnjf2boMCQQGbBRXNiG3KzBV2",
  "key19": "3GbwfvcUGjaRyfd9aJQ5wvD2jymzkgaeXPuK6PbD7dSs8UfPzu6w1ZMGhwnqpyN99SFXYRC2SHYQAC6AhGAq7JKQ",
  "key20": "5o39d616tTyASqehaYegU8e9uR1yJJK8NHteQMmD4VFmJPZfSR3ht4K6TSqxdgXvUSdcDgvVc5dB1p9HuotMdtCH",
  "key21": "ZTWK3MkMniaEQ9taiPgkRnBYVC8ZV1ahNoYDUEV5xLNiSuest4whdj3bAgEHU6Nh9c6DEfQWe3QXDDsaVvqxfZk",
  "key22": "3Yft2N6dvpgPeQ8p5Tva6nRbbMD87znX9HAQowrwV8bFrwq4atJMVZEFLNBsYTT2Qo3o2FCaV3BacxMWxAy814Aa",
  "key23": "2DyDjHACQ84NsftK4ua44bK5UcgxL64r2ptEn2SCgjBwAVtidxDBZHHNpkwvyN2d2eJy4fQKQPjaxtYsdXmRTb6X",
  "key24": "2AV8odT9PhqhCoopSFrKhrtWPBi8NiuvAoGrRmMVZoXNSmFjLjgXzgGYVt3hxt2L3cycDJmTroTru9bFGLoPPUKf",
  "key25": "fAD8rNqJr6Xt3W6uMtx624Jjw9WabuhjyUvrNvceGkbXRi5YrYPU29fMxTDQfButpCQzyLUsM7mFdNdHtWPmq6E",
  "key26": "L2EWhyqudcFb7n6ZGmEJ2mnnj3ZEQ4RjoALwQMymNnYxqhopRFSpndX4k74QL3MeX5dqbqxHv5tH4yMkrbWCkXR",
  "key27": "2Jkd55udf3Tej79cWDprWqqZdkCi2UN1F6nnEYWoMNwE2goQ2JcqbpDG7bECYJxQ7bFb3dCBtjQo5ZbX25hieprd",
  "key28": "3M7GikyzuadYTLtWZKWdvDv1uLPLpvvLPNdR7TEFfuxz3TkzbUgXzFJRwGoVDeZYqvyer1VMH1jF8T5EsS9huUnZ"
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
