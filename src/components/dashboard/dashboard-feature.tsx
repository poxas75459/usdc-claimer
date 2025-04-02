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
    "f6AiXBoB9ZHWfuUZcne29Y8YtbiUzx7JraPQy7vkwYsikEdwq7dPjy69GKm3TAEcNNR29nwF8fnoVb2TfWxUwZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHdyRdpGjWTzxxEYTy5S4B6RqosQcrReVRJAk8jcZvmL4X4C7PqqjNtJY4uQCwpRT3PpdzxJ3H9Q3HHrvswwHuL",
  "key1": "3k4BffyTzEFoLAhEyv5eT82LAfA9GxPKZMU4kjqKjss399us2tE8vgYrVLJMMuuQTWBvSRHkfRSjtF6PotTxVCrA",
  "key2": "3gsbNCAkVpGvsxrVTeMTGJmQTEUquM7Ww2kteZSXhn5r2Kn55cKB4V3aENYBbqZ7wCBrm7NN2CKxUxGs6HfDXmXn",
  "key3": "5YkgH84GoYNSVtDGQNhReqMpTp41SnnLHxH3EkfTHfp9uxFRhKCDQz9bbxT5YspbThuhhJw5k3pvx2FcC9c1n4ny",
  "key4": "4VKxVDB1Ve2jfSQSJqSfsWW4rVpF8XKMrwNKAVj4soaqbyt6qdxq7NpPMbgKDhsXmR8ogsVrGt4JZGVdh4Lh5iSp",
  "key5": "GwGybmvtx8axZ8bowCUSxgyxiVWNPuooJQAhLUqX3fxcrUGNXRBmdJEVrPS5bF9kfk24rf4jqEy75nRoy1bXJot",
  "key6": "3D8aoua5n2kQj9JFM2mdAm3ZbfW1BdUuYYmv1qrYZVAZZMrwkeBcyW8VyaPLxwQQef15qxB79714SnwLB8mnBQ8p",
  "key7": "5yZUuGzByKHbodGmBesoVqHvFZ7aNcJAqdU7LkASsrJkvCvCVW2g8A81VArF7nnAbypFg5LYgD6n6USYqU6PjAJ9",
  "key8": "4FLcRUzSXkn9LHjGT5X1fbg1gCB8PBvjEVAwfsdrA13JpKdiivL53SXHVSXDJaM5qs8uifMwfzS3ApcCpMVL7Q7r",
  "key9": "2pm7nVeK4KeRUSpcw2aK85MipG53CtvfowpY3KbCUT5iep6gATGHqt9UKHmAPA9h1C7WkBh1F32MHDc2x9iyqb5W",
  "key10": "3aseHApJK4wgpvM3Ya6HVQec5iPNstrAjsxGqTMvwPM5Wm7i8SGwYrLgM1Yru6LsToXfXcLBn6jL1L9fBzRc5shW",
  "key11": "ZXnW2dAuAiciTPbgsYetLXdxNBL7Xd457eeUX86uLiYd8PrAYXMHeTxLMmww5wYif4iTSei1aE7YZFi7vc1YdAT",
  "key12": "3b8Hs8XoJvpYF91DfUVe8Uco89kMtTboTzaobLVR7mxk9UsWCfRQ26UHgCGCkAi11zbkhDDPwT4eKUKeAL18m5ia",
  "key13": "vkPLWSJWBNXfUyi2EhFh6CxXkmmgcYUK9VFmvW86ik5TAuY3Pr8PEbZtmHMBYwFRGrvGuZz4CJ8MpYFeVEwB1Nx",
  "key14": "3cZ6Jbcf9uXSP3Spg6jLDTDFkkEAx2bVeic5YwhFn3rqRQCdFcgyYNAskijQe1eQsxKqAH4awUyA3iPEGgmADZbc",
  "key15": "5a8Y6TgbASpsUDgaG9evcfSBzvaQFmY9LwwMVPXzyMfYLwQGfWJNbMd5NQEGhkgEBnGtu2ftNLTm7HT7CVfp6mmi",
  "key16": "3nte4aokDW3UVcThF76qqaR6JLNWvcpaPjzdYBVwRKsLtNeXHiTkybtcKyGU18wzWrRkDaoMTeiRMbsCJrPCoMwc",
  "key17": "3xCk9BQU8kzMR75bw2J3hCziA499ym6FqFNm2t34pLx1GCuYmaJPP147jBxqGKEkjpUreUGKnkuHfwSsAyh6ymjo",
  "key18": "3TMPuQDeej1bv3fgVg161LeeCHDPSQA757WS6GmiPgnPRS5toY1K4puRQVbYRXDvTJEbyDYSxxDivhaZwhnL5NVi",
  "key19": "2hYF9usX6jDYhh2m9hHmrB4jy4cwVgcxD2uZhDqsDsnUasRHAsBLQ7Q5AVCS9wRh2t6xSSfLEn5oPixZz5ApegD7",
  "key20": "2NAJocnZQQfUt445rZzaso87UWuUn6cxc33YgjuvSLWptg2NuPnAAh6SfuyRJJVXDJqmAcAN5J9NXiXXoqQEcP18",
  "key21": "oC9qv9RBF1HTb6bixvuHy4emEGU4a1czG6mwyJgEZwGcvo4mSb6ue8Md6z12HprQ3sTRALMj5YY78afBGHBGGnS",
  "key22": "2Vrk8uK39bCLmnvEScGWgPRosy32Ef3jFTmtNpSJ3xcr1bpzXRrG4Eh9xtur1WLZnzBfcEMsan7c876gWWBCp3o3",
  "key23": "2NJ66wGqigrmPYMJmg9z3jzDds8E4h48e7vuK8hDNy6EyWh2xz8tV4U3Bq2uhoFwXUp2jdhpjAn3QQFFDtfkHWXf",
  "key24": "4HHSNQx4xMWhB5u2zC8xCysHphWkXVCytpdHYJ2iVUv2KTdXgfUEso7rKiBMWZs6Q5r2ZPykGfxXg2Nrz7MhZBcr",
  "key25": "2VgXvspacwyPcyP2pdWQVTqUW3qpEKfQohNHph9TpnVz2F3H5DtagCUajcGgF2UGm3hiamqPmWM4zyvqaGAYi158",
  "key26": "3UTHu9nuo6J3QfpNW8bDD9ERTTpEde8vdfog31FPt2oiyrMeVz9EDDavq5qot4vpM97r3b1SVjgwgcY9AWG8v9Ep",
  "key27": "59fAwJPPGEBd9JJ9HBneFQHrdYQSefk9SYaggu62rB1hq59p5iuBWN79vJJKdrj8F8wxDEFDX3iZ64QF7Q2nWGoa"
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
