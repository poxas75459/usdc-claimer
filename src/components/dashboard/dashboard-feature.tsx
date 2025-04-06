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
    "DULNA7aFJS4ByX1q8NeFvhASkJVxyo23jgMhD7WuijGFbYoV77ShP24MZz38L1E4GEjNPoiEsKM2dbAQucB9oHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmgu6tcUMmb4jQoUQnapbGPZTh1waxGWvovSsivA1txkpdnKNLAUuEA8iySwPCwm5gDvQGU3hvNvr9ixNMyiUSd",
  "key1": "oLyUsXDSGUCkJzLtAmV3UJvCKzDdbrysa7QwxfbPZn4K843vkdzuQkbhR7W9RuwtzPSK753DbVSpnC5Eo5ciERq",
  "key2": "633UeUbiK1o5t6dJv9NDmXo7hK6XHNRHwHyQCyKaUDKGA5mGLXedYeKTu9NuyuyW1pZND2thKzsfqza5k7SVdBKC",
  "key3": "4kT1oMk2TZqLCiXihw9josbCVLnmM1MEZnDBLevUyZBDW6utLjB9bL8BEPkwTkk347GKGtmyQKMXyGnVHkj7K8WV",
  "key4": "5uSMKScaB5USJVrUn8YbSp8CK3LWvykjW2GiivuQwRbYBEuZwZsgfrTdtAfMqnVjtU8jcxpgibikpTxw2VkF6dbq",
  "key5": "3hn4nugRqqAf4wp8kFCs71mz2J5YZ4CuVod9gBb7DgP6FYuc6C7WoAxWEMwdJD9eZEn8KcoUe1Aw4fRa7bqz8C1v",
  "key6": "49PNmhVrkrpo7WJ6799txUZusxPe7Mx8hwf74hq8s74UTBWuRjoaVqy4siGrLWkEgYCmdX4zwtG9aavG6MgxEKPt",
  "key7": "3eW6VkDZNAoMi4Lu7zZQ2GdnDCmrAi5t68cVRfqX1n4CfjP3fkwVy4AcKE9zM7JoRV5kkVQzBjPyPAcK6bD6j9Qp",
  "key8": "uMa1M1MjudskvZXrWEtpaCsYWy3oPTZDw4XzJ7DdNwBMMMfYAUfj5sR3PEjFKe1YdVbGVcVQwTWZohFE1tQucVG",
  "key9": "2hCtYUGaeRJ7PJ2pvnRkAVU9LtbTbPeJHosYLXvW7iYdW9zCrZkrCcM9s3Bz9dhuajAcZ8YyTyrp76iNZuE4wFJz",
  "key10": "1EysHRp6HGmRgf7xSkwWXDGvCjFwqqqXvZZhnRnLvjWX3uoZuuUbswwZCqdZPWHdVz2ZeZ2SGVgk5K6JFxBx3AT",
  "key11": "3j9E2qk4uGEDLTdmZ7akX9P8DMPAVoAxmnq84xEbf7ZQ9a8fvAZLVEn1PTM5VPPx7oYdtVTZD1hUChsbEmZXLkfk",
  "key12": "nqvdGJp6GbqFntCmeSR1yo41hMd3V7XUTX6p76zmXGM1FoMvCFWVjxPXVJ6SQgzrZhqk7bERqTBXtq4g96KyTmL",
  "key13": "2fatBVk3tNmjnzEK8pE9mfKq8s9Bnh3kLE9y96uZn3pwJvwTX2pNBh2woTxjoE5zuogcbMx9iWzvKPTqg33T1Vym",
  "key14": "5NvMVBXyWHkVxANa22phk9V5vB4BuFESg6JYacc1UyKf6diAsmynMvJ4qSPR4yPmHc1y8pkf5izxjVjnXez1ZrzW",
  "key15": "2BFtZRD3o48PfEVE93TRoh8R9wdrUuLWE5wjRTZ27kGX5RHdjsBUzTE8qXfQiZYkdrqBDXy1LVM1NLiic1ZatCWX",
  "key16": "2h3kjSrYfUzWd1dkvw7Epza3k9WCvFkcDpTjAhhNY62hsUicEK2BFjC1ZKCppzmgmFg4LTFcGMqBdNekfkef4BFX",
  "key17": "5K9ANnzJhBYsFtkzErxYVGu7mP7sPayJd3cHJ5V5MeAS95BncAsZ9HtCaNHEDrhCtRmhHedFsPMT2pSpHSc2R73Q",
  "key18": "4UAyDvW3vpCndBBdaF1V319uMGvcXviKpqN6o4p4xufC8MNVcGkQqrSbds6y4GcsvZhwH9HhCT4zjAKkuSCZC5kG",
  "key19": "M5vhnM9wpMBW1re6kKxpWsdws6UU82n4MzVo1NFsj1QuyvQNwV5c1YsvhJwPFBYcmsijGvJTENLSBnUBpbwK9WF",
  "key20": "3kgjP9iYHQq9At3JKUTGRvWa6EPjcf7rKyoDTACNsNs3d5YJ7EB8MHNFoexQgiHETDZgkzWph5VxPFGzaKvc5FUN",
  "key21": "8KNqytUWvQZnSs4o4D35KQCmR9sdvRjq2kx7GCbiihr5WZ1cYib9PyThDyqS9TytKx3HpepVc4zUeP35wgqYJMs",
  "key22": "41wTXjzPWncGurs41s3v2CCMLn5Ug8DW63q42JikdMa3CB2LZmVPQDX4NuTXv8A6RsWgRLyBJxR3kptKYv5ycnZ3",
  "key23": "5zphwrztXzRfBp3TQXxyasGqHYz1gfrqyzp9pJC5qVNFZZsvKKCL7TuBqhiTCRHZ7cQRR2k4xF9t9hy8QMGmWkjh",
  "key24": "5vqa3tkevFAE4BtS28ae285NqavF4QKmWFWZPQ4bS7HQLhE2H9v3qbocADF2sQU3wow4uhSXhstAnQfUNSRqhQcM",
  "key25": "4FK2UmFVCzAdQyaLu7cUoxqLFzrMz2HWb11RDVgxCMJncKirvXTzp34ZkBHyxGVYTStmfWJXZYnKwyUdqJ7Lkh26",
  "key26": "k8DnbSHqguwzdnyxiJnKXvXvxp16JG1nf6enZUz3KiXQEnQwpoeL8TE9hBTZkiuvSm1sZ1UaXvL6Sd6g8EzJvF5",
  "key27": "SZaRML3HPJuzWsY9XJjkjB2JbSHN4d66Ezp4V6ykPPNJTSo9GFhng31yqPSnqenPFdJtYsrsjhR2N49crM75Yoe",
  "key28": "2R6FEDMH44wjqEyGzgPkHqveHv91w7u2PhagrtuSSnYkcFvWuoqh1ZP2JhhMsHyFK97GXtcDibsFkieFpf7qMRrZ",
  "key29": "3f7sMPAfjvxhMS5HRAqL4TiUwqq6EkWJaq4MzweGZJq86ZmXjbkZcKLZmxyPQSNJ3PmU5bpPVjZ6VmCXXr1PkfJc",
  "key30": "4PvgrgqXPf1WbJmyLHxLvoAGzYXXDL7TfMbbjPkmBt88GY6QM8etMZzMxbv1R1qKuuvGgaoKH4QBodcgNRj2PqJq"
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
