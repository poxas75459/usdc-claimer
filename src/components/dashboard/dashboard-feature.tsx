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
    "4R4LBTFDq5A9jUzf9qXpbcrqsPDKPy6bifEEZ1hN9cL3x5mEHMWKuVsWMeTs8VSMwjwS6VkfGHz6GNVLpSY6tkgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1rjyrRFddh7iNRip1uHHayLxHiaT4QQ15t3Zmsyesu28f3SZd5KLMdw8uEEhMVBsVq7czhXik4JZPjPpEwNTdR",
  "key1": "iWhec8vyyCtocj6riESKCBAx31qfWx9xr3EosqtLKB9eejgbdg7jhWhNgUpjtDCcYBFCFM9DjCZ2drgBsJvGKc9",
  "key2": "56MR6iuGEDoR2HNqCZLWZkdnoxB7fA2367yqmaPwQuHj2xyYgfhHrKT1aFgjqgZ7tdbaP54QRe28dEiyr6FD2MdX",
  "key3": "2mnDfGopRzCnWsEuNcDEkLCC3GJtkjnoJ8j1fDqzUUbETQmt8Re9aqJFxDYLeVPPk8v7n1bT88GgfwFdugc35Lxf",
  "key4": "2x2JK29ypq3SRyAVJb9bhLidiqocnrR3ZC8ydfu3XwgwdDWJdnNLfXng477s3uHCaJ7NVTN9NGZaxmPumUP85t1v",
  "key5": "Xrdq9GrvRvfbq7F9bUuujphdyN32YvD1CEBL4r5VL4371exTVDpDzRChgAzXJfkCAEHdvMCuoAJ7vkdAnDBPm49",
  "key6": "4yen4UXDrAYQRTs2t6zGCHFguyvTcHrka4mDNWo6QZ1wmdLPjnBwCKxpQWuektKvdbjemUDJRYRmPxbo3zdjFyn4",
  "key7": "2NyzsfqiZ7aMhJH3BpzmW7EqVcHCD2dcCw1YjNtzxsKgKTQrezUJb2K3pPyFAp682RvCjAviTBrfTAMUbJ6bvbjg",
  "key8": "rMKbCJoBitJ2rg1RkCgiDuzbHBnKkU21cbmMSJm5jy2P4ApoUqZsMSKbBpZqY68Z7TLEoiusw9xNSXRBrEbmkPi",
  "key9": "Q5fcYgM2VDz57wuSZ5D3rtnyyCVPXX4yWq3cmmjA1YCrSHvMD1fDnbYesp5wjcXM28fcfTyQVadiXhUTtVk4ejM",
  "key10": "5VfyPChxXwyp3EzC4DejJtj1deJYtLDkBLus5EgGHVRtun5u8ewoT7yFPtgBrK3jaroBCcWuLMut3yn2iJTrEabh",
  "key11": "4VByQyMJvkxA7zHBoTvhJXn6gZd5Q7uKfqHsa8Ks3KyjwrfaDPsjU18JraQgsC9kjgp6aQQHkMgeYhJyZSRn1oBA",
  "key12": "5VoGyqdeuAWikpZDyPGfQw1mxeNGiMzVDPN6bJ3JKVVDGczYR5mJXS5rMNGkErRCfhCFJrgwwXtCiZFZv3yuFxfh",
  "key13": "56maLzYap2fcV9oZqCbGbpdQjv9E6Z4YybmuAVXVyGizX5pMGUmeSam6YbvmAVi4gpKV37FWHfg5z2LuW3qRjiUE",
  "key14": "4co6Tb19sX9RquzPPxq9AhCdxgoUuRRcn7sWEjffFHbgMW9Gp8upB4vu1SUYdEohxtLtDjcvhvr4W7MNjGbX8R15",
  "key15": "28y1aZ3W8Bc5xhAmHdWD5UMjTEC6gZGLMNHABdEM7NbbrkwQh49FHAMMpNeJjVWh8dwbFNELeTvy7RAS2epvGhxu",
  "key16": "3Lx1ytotagphs6ftHroDfEszkWcNFjrqzstLy8L84XEjSxfYMcaAQfdM6SLKUzyvnrPKAfA65YXtYqhab3axfWhP",
  "key17": "F9KwnPbhGsqMhj3CNA54uvr4BxQecyaAKBBMgHo6Ey25U6ZVMUp3p5ykpguSXF4ZJFAnDKuaPnzRS3KtgpwTo37",
  "key18": "3Rbg3eEU6Kn6F7Sxtn9Uys6e2ZspqRRsNKrqh1r7vFxASGzbnmtbXETNydntHa8h6rXsgBDPQmrxKcziDdTVvTrm",
  "key19": "3Btoc7DJ4tZyXAp89k2abL3X7eeJJiAxZFSgFUds1CPgXCydFGxdK4AF6nZ2vVomyTFYZyEo1xH66L7GWmpySsGY",
  "key20": "4DaxFrWXs32xvofmBG71KezQns1iQ9awV8DBPcM8mUKcH8VwjDamEt2dYTwQoaNVuP4tGxJ8PVeaot8etjMyuGmW",
  "key21": "X8NmHzcQ3JRu8KHWKEo3pHcAkUw7ykUDETEjzhmouJG9auM4zjDwxVLichdV3ycpbb2bknkJvrA2bYtvsq19DGZ",
  "key22": "5oE56RyTHQKiZNGgWwrRxiWynVRZKtZVpe8u9StN4WKHYDURhEYKWtsuAndJRtaRooe7puLuNaLhdUbojYuLuuuq",
  "key23": "5oFN8vUW7SvdN4Cv1WRZgRazE52emrTfosfRCYhRNV4UAvG1gmstn1BbYNEseBe6BfRCH8Xrzijk8tj2t58aNMXY",
  "key24": "3H93TNBDgUZydUhS8RUXpujGjFgs7TM7Gesz9NQ2ucd7JuqYLsQ7AFsRjBmdkArcqZ133o2tTExkSQpKa22aYXnB",
  "key25": "1FTDeTC9UbearTTtL4z2mANoceUyVKxUtzXjQG8WkgvABZL6SuJQmb1oKS1CkquDzYdG6umyJvH8wWH4XesWcwt",
  "key26": "3iBkjPtbzN9awqQdebHfGYdN8m1SDE2WTVFm56Lq5YV3RjtR8mJhRtZiU3ko1fnzy9vdJBQZ2SeuDHy7b7WYFHZ1",
  "key27": "6L8zgBjPLU7oyUxjq3sA6otafRRtARXHuN1B9KXypyBTzFKu7XXTJLGrJerxD26ffLpHJ37gzqYa15tJ8iacfRW",
  "key28": "2y9tKmUVo4rWiH8FVYe634sgPTZsXtUYXV5UGGs22fXPz2b8noM4dfU2bcKedLZgow7wxmPtxvrc1hQcXHXgvrPN",
  "key29": "BBuWtQLmtvB2n8HP9mmGMbmX8DQayWF5GZ1ZGP7J9F2KYtcMwiQLofrCjZkXCd9mrT5pxwiyiCn9fxoj7hYHy7f",
  "key30": "4HFyT61necmAD3MfcsqPgRixViAfuW99ZtC65wgG7VWtzvuxnxeXBFt6b2aarDa1YAKAuxPKLLzVpQBYiAV4joKG",
  "key31": "4cMV197K4ZEMoweFNZuvgp5vqpSuTXSyydcSDHaqc6vgwsFcrzjadC1JPP49emL6A6ASTE7TqchSmR14Wsam5aTq",
  "key32": "3WbtJPbWvEZJ87kBJkk3nWUx8FokD5HsqfeSjYmj7aYT2YVGN6urJEKRvFZU4FYdyFQ8o7jt6qDPjDXKKxCGhgBb",
  "key33": "4SCoUZ4FokoGF6c3boP5k26jmZGwuh6AR7MayyVe1xew3FGuEZLfcLJCrx4BviqVJ2XWcL3JFRPhLstKjfiPMm5D",
  "key34": "4TXUD2w4MSQ4fCMzXT1wurgsXUjL9v6XxtH8WWJ5CifLagzntBNyCoKrkHwkMtZ4vB2tSv9x6pzUJaAiDaPtkEmK",
  "key35": "2FSLSCR8w5ii7jNouZcYsnfneYtFNwS8brYATTTL462WomBhBa1foL54zhsgDkYf8fJLfcEEpnxxGfx7Lw6LY4Cg",
  "key36": "2VhpLiDMbVbgSYJF7aFbDhpZ3FqUHptDVpY36p4r6WViVewppFNGzDihfnqkaLuzsRb2uiditu791wr9jmHZAvzs"
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
