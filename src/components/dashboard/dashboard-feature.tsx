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
    "jxxvM1CPT1dPR5NehCs3GPs1nTT9UGqJ8xxW7EtBn3La1WNVJ1Vs9Man4cwaV3Kd3fh69fw1L57UgVLCTBWxCtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53e9Ff5KS9o1uRSciwsCJtC9Um7fwPKz93MBEtfiKs6Bonuzx3xmuu1fK4ypLm8Y2LePveKQ3ccY7ZWZrSYbgWGg",
  "key1": "3cqxN6HAGiZN1otdueg3xWkA6Vd9FrHNt4CXsaV7SrgLoUsqHurbGP2XnNiiymBD95EYZ3tWm7KXgeKSxAuhT72i",
  "key2": "5yKRzLYk2NoTgEtT1dHsFs1sKyPjFT21oM9fWxXR2XtTmoa1SLeAS7PW1Rwqaxf9xibs6PsvTZBkV3hm7d2qtr1Q",
  "key3": "3MGNfkMBe1ei7NASM8ksMpRvatYeJxoV4sP2HcbqiPzf69pHB4kn8bnPj3vZN1VgTWA9Yt9Dr6zwzkBveGA9xb9w",
  "key4": "651okG3e4B7MCarZQc23W4Cv4bMZuMc4LJQH36VNJgJYCEtHUMjraMRtocMt7E8yY3GxkY1eRGb5gEQcA5EsBLiC",
  "key5": "4vzbEzd8M4xHaKUrDdVKJr7bV9Rzszo8XKYfQAk7ojec9ZbmxF5B7CUv5Swckg5mWFBULedeoA7qeAVprTcmxG2u",
  "key6": "4EA1zHtqGLWyyBY7nLSModDoVjZLUttTdyh4sdPFkXW5oaSjvs4NnmDr5pcHe6rccYrJgQk6xsW1wyBih4RE4pgd",
  "key7": "5sn1uevQhqUtwTXFi6bGuFevFMxjtKS2XAo1EQmskZcP1WfPz2J6vTQxZvvaAqo6R1N71ewwyPTJQcQ8xaHWgD5w",
  "key8": "4EoGpv5i65eo3FZ9obZq8jhaXKsBv7pFQuXSuj1PibmyYE3hQm5aVi4ExuBenGaAaTGH2b4Kt7FuW66tw1XK3tjj",
  "key9": "icMCG8v3GX5pMARvg5tayQgriHuneUFNANrkwrc4yDhwWjX2i4YxvjwxAakcApG4pv2YqVFx5ArsPwrmjhjRWkR",
  "key10": "FS2GDMJLWJicAtJp59iX7qi6j4CRtLCRExvTZmycW8wQPko2aKcb6mRz5vbiQdQ6bkdkRizo8P14MVZkAeHjhVx",
  "key11": "3aroAwNmxnDw6LS8tm6yaMFMa9ymawoeF7LcMYi1osbP9goRHiqj42RCrSyFZkUEbJ2rW3wX4VakpkE2W24xe5hf",
  "key12": "5EVkUSAiaLnx3BAdteBtxe8a12B1NuoL4QkLKn2XLjQe5DTDhpzkUNVu774WUTHAQU5v8AfkqjDSMXCZ3ibBHMC6",
  "key13": "2U4PH5aVHwNEtTkRmV1LPCNqkAkmZMxQeR82hMUKjwZ6TTSYFDxegxvdM4s4hugPYbGNhRydJJTSTwc5UxVfAWeD",
  "key14": "5mveLhWWYtSqWpyQoc8SQKRqWwFjWYYdU4wzVfhYyAzqM8Zz17AzBLNJXgGZVfVFBykYVzYkk1TaximaE141akoT",
  "key15": "4QnhWdEjfx1EoKvD7W1X5GoihPp6XS2US2CXEow2AbReb8TAAiNs7hwXVYnaZ7xNqECE32qpRQxKwqgwxEGaCcZV",
  "key16": "3F3dRTX2nzFeE8CnjdsBuNxGuEP9yUTpa8Fay7Ku548LVzH3u8tiAmodV7skcLrvudWsfKQnmAXDgybYQx8kvC6U",
  "key17": "5RrpBjyunb5Fod9en4ibyhRYUQDEXqJEKaC6CAapRC4QkQzRMTWFqjjMX3RJjf4VdevHCWsLGZD4UpDwHyzqd7mz",
  "key18": "5H5boDZQB94WMKAHJm7ejfQRy8FpbByMPhqQ7abo9m1eWXFSNs7uTHjEMNuJB7yBFFdBdAfCRNHQi1iv7KxzPVyt",
  "key19": "53H3wArXBVkiwZ1XQ5eDGpck3HbmtNMqeMzDozDqsKfqbxcA55md9WdB5NcvNYjGCPZ6ipYA9oWocBprAhBXo8c2",
  "key20": "2w7fk37n4TuzSbT525AoVmfVtmWcAoYx7iSVXKpKUqEqBFnSAyniRxXNsgnPAw6PaBTa4Z69ztrvdBg91V6Mm2ds",
  "key21": "5E4ivWXcKyDWhVak42K25GNnU22yRprn4oYmKPN5qzRz1g27JS87vB3VwcLfkzSurcrMjcZj88WdfgaJQAJdPdjK",
  "key22": "GZ1pEePFM5H92C9o2do7HbzTKVbXvRf5poSnJM1PTnCndnKYQMFBgf9CbcbSkAMKFWpy42YMwdFh3fQY5wLemns",
  "key23": "3ZSGB7TAsq43Q7KaCUekgAHPtGeoSuubM46fqxT746467q6T6Wo6YFs4DkTAZsGcWHY4DqgKLA6ALhKKk7Z6uLSH",
  "key24": "3LXBvz59BbjFE9M6zNtJqeVwEEKyjrJXU7vUQNj1XZDTiRzorSChSQpsRp3bPbpuXPRQa2Bx5VbXP3wgzmhBYTFc",
  "key25": "8pLmg4ysT53ZNZMUe9kwFrW7ggpEACZPWB8sLMKqLjF7brAjxEWNC7QkWA6G5rU7tSXTk9J5gVZhpJRQcpKjra8",
  "key26": "2kWdx4WwcyetDQhHwbmZnRByLML26CZgSusembSowDzoUuTwhG37HXp6hwMvj1n4458a1UNRRHEeGirkBzwaBnzJ",
  "key27": "4CCMtDDmhdS4evUTjh5VxwuAKkj3Nrsg6H8edyr2r5gHCuZWwa5crTTprBbk2u8DBYJut1HTdB4TzmxL1JizR1jp"
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
