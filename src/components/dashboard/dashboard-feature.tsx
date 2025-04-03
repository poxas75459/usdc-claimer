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
    "5BpfXcE48Qkjd2GfU7cuiC56qRjYaGhN79wARAr9dE7YrR2zfnmPCB2bhBtVNLWwSAEZAEzt1N7yRuGorst8SPYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8YBAJxRjALZ6dAUdSafQmE9E8p4MbQC2HNpoYjys9AzhXRU4dNEsDPxxzDXLaQCKRGxzdPRH53FzHkozkpDu9p",
  "key1": "m1W3yYkrsoQcNZ8PjjyMvd5Z5ay8mDuKUGc8zfbDeL1ckKR3CkYHKVJhtADKM7yjjdyj9H2wVNwP3EkWZX9ox73",
  "key2": "4viBBZ3dbYASABZXqMGF15rjH6HPhWV8PRpow1WXRy1gsr8jhpo3cu1mVpkHMPsgtxRADAsLZMCep7S6YNhMNAfw",
  "key3": "4rvnzntQoRSdKkzvn6ZpXbSRNPMVeyUFdTPJiLJk58RvNsGs8a6MVuxr8UUZzbFkmBBNWjGShKeYEhm3ddzEGJ8k",
  "key4": "5FqkWjVNtgN3ZLUmqkWqHgccQ6JtojsAEKqhBENajzqWaZSfqYy6f6tRSQjfgZtANkX3GTYidm9XsN5i59Qvms4c",
  "key5": "5NUL7PiH1KaqQLe9yHt5VAmihptWEdkFghiVBGfYZ4W7KJqcd2rSKQSbRirquAtPMYLD4GHyTRchH4V8ou6jnZeN",
  "key6": "5LBZS7cYHKQsNf7bH7DrXgyByowRB9MbdxXssXEi81GG9ZmpZDSTS6f93jy7PjQrc1oTwa1apByLXDvWdtdzNuEB",
  "key7": "3bYYu65pNrohdUn3zdmqFWRG9xW7RZ8fwzNnwka4Gr2p12jaHSzNyxUmyJ5M9vYJKFurRD7eDCJEofLSESJjsmas",
  "key8": "xHhk6KpD6P4LLajHmFj2m3Afwg1Bid8EBvHLeqc2hdu3mKqrQjFXyV5PSKKo7rDSwVQ27rwhYPQSTwK1hcmA25m",
  "key9": "3e83cgiQR5GcLvE6qciKpm5GUZiUQrpDgL7vGgVJnDkWDZHKTseydPj3s97dghaR2ktqH5CCgSBaTjeAPqTeuRsk",
  "key10": "2VqHsYjL4Ha52xa5YPUsMWAeXZ45iLgLEuNFP6mUNVD1CU3F23GLNVfkQ5tEDghMECheKcJq5jPCEKhaqwWbbAWw",
  "key11": "49jLSXNEQNRn2KoYuwF37hq3f5mMMST9E6VpayY7oShYKdFagT98QTMvBYwnqZG64oVbfp184X3irWhxMoHSEoYL",
  "key12": "2upG13mLKNykB7dtjWRLg6TxJEaaC26dz6Kpek2Ey4tWciA7hGuJFc7fJQUrPsBzY6ieAJxBgZ8qzXWcjo7cvEg5",
  "key13": "3uuuBBJ7cVExYygZvp9ckRFcPRsTZN5q6n9yA4KUsSbx1abUN16vj7e2qF4eBbJUnoW5LyuU6o2PjkdQN5QDUNR9",
  "key14": "3ha2Fw6VR3biuSoasE71F3AtGE2AAyGGp6q6SUDBDkgqYcnUo6KBNEvMkzBrHo3SGhXA2RgbgiDD4k9BgnG6q73R",
  "key15": "3fAZqSrGgvSis46YZ6H6JdHCuvsetN15W5aUwbmCYWjCH7rhxneRwCcvNuKuEdGUPqsqwvramxEFF5n1xhRkj6nB",
  "key16": "4URHB6BTBqaguTyirbqEAJwehkNrc9TBLRb7xRCGZ6w4JYVFKrZrMwi3Lr2GjtxuiARRDzgtRcmqKcqTWU3ENwpB",
  "key17": "DzRq1jKM4sq7apukFjDVCgApStyzv1Htn2Q1YPLEr6tTzNnVYdVoGX7TBXBdnnsF5shnDB57LWHwFfxX7Ryagqx",
  "key18": "5MgStzyoLBLaeCC5LbHGspc73rWGw2FJUSE8kpJYYGAJ5JzPAQvryerwdTtCQqLiUCHotrTb2RHMem7ob3QKGzTU",
  "key19": "KgWLb8fwKMM9yVSKcCmAMStVpiGZmkQMcVAgo9irmJ89oLUKpmsvZvWBv1FaNWNF8D6Rfk9kGn21pWUNZ9Q2Biq",
  "key20": "4zv2DQtKfmtwtRygrsNdcLL4fM8RBsFFghv3GiJG8RixGxM5kNyVMa3MMWvDq44TfMdvKxLqEk8jfPPntNNUjog3",
  "key21": "4FXW78NXntZGgh7bKVqdfBjsXNHYdW1FRHfAGMDDKDrkhxZuQJzK1pzXAWBtQExvNfQNVLb8SqGd4VuYEhEb8PTb",
  "key22": "2mawW2aBdj1rmx566CB9UdXaZ1CMSuYGwgjcrrQDu8gSwksGUDPk6CJpdKFKzFvt7eEXu2UGP1Wd6GQEBy53PtmT",
  "key23": "ZDrjXu5Q5nzbi7p69tNpNtVf6Xa9bqtVygobj3cASue9ze3sFr6aVtEWrgxfGkYmzwrbon59ccRiZu7uWM7JdkL",
  "key24": "Z9xN2v1g9ddEaqUufhGCe2e1CDoV9ZPHLrEbR6XjCRqjBZ4npVQKXS5AzxWr1y7HZJRWLyVVC4qot2QnSXmcYkk",
  "key25": "3aA8BtqNiqaFCrSfEpgj4cWgdtApQskaMSVw7cxWQjMq2TvFWvcGZFb2JK9mX5XkeRM1x2AUPkMZjimpWwG7d4GM",
  "key26": "24qPzgTQ2izBCXbWGUjes9atQRTKEfxX5eg15DbNhMzeEm4q1ZAF5XQY35ALuAt1YzU9i7T3rxEXLsKzTZYS5DhX",
  "key27": "5B3sPW4MnFZRWmCyLG439zsFJUU1bQJxqXKn12aoKqnbZ7y2v1vzCtm9Jogx6U2bEPqze64CfUrSUdaotkyWG4TQ",
  "key28": "5PqwzWiqs4fxp38hSvX76sXPcewNsvFtKe4p8YsQjiXuf4ApEAwuM13WpdjqkqqvP5rBSaXhMsWHpiP6MQkArzNS",
  "key29": "3pY4j3dJ9dtNN3cAFLMSMBu9huHFeXutRtDS4sk5gasNEDgyUD8NdmrTix1jhdbMKxVcX9kMkCwdqBnQMCmz7WG9",
  "key30": "2D3Q1fvT9otLMfi3XUh1DguyNCecvrrRbauB2uzkWdfAkxPuuNcEfp5pJefy68iPgjo5juphgP9fbgA1jQ38KuDn",
  "key31": "5RGU8mzfoEbmjDYShR2rZFJ7biiTv92L7Mv37TfrSNbgGHng2DhBQEP44dHEMLXiVKPHuwuPEFFQ6Lb8d1M1iRfH",
  "key32": "b7h8JvP6eWh6UqrARkA5xm3ePk1oukbURCcJeQuRtokGrYRLKHe3mR1QvdDYQyQpFCgCmJuBq9X7qYQxen2M1mJ",
  "key33": "4qcSXw2iwEh3YzfQrvijkHAeA658iZ9k2FFQDTce7HdTuamQux658fxut5CwHf4eboheRdz96EsgUkwnjLsBDKE6",
  "key34": "2yuNpyEQcFpSdcjRtsL1NEEGWysRYeaHauuub1zWSZDEKdKHLr1W7qWQC3Ajrrbqp7GcxRhuu8bTKoBGY3eTyM29",
  "key35": "5bXw2QUpdg4WxXfHpACDPrK1ZRL3hjCjLQtkZ7GXjTyapQxWKzvELM9doMX4tQs8rnzMvWH3Y4kYdTZuue8hqUgF",
  "key36": "BVcYDRgFTF8BzfW9PRXU87WQBZEUQmXX22HeUgypxC6zc1DtrHUJRh7Bry3ocDj8K1Bzr3oyvwkiuz9VCSKHpRf"
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
