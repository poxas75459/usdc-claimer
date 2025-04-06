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
    "5RK49vLvoZxXsPHTMkFEJ5eh41As8PKWNKrZwUnW9FKheJtng5kAiAUVXAU8gV1qVX5xte623D4oB4ft3jEPzqRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VmFR2DXLyjUYMYY1GKzYYBBdKGEiQt9MdBN4xGy9QKVDGi4BwXAs2gZpWGgv5v5u6quxn7eH4Fn4zRtQtzZXGGc",
  "key1": "46qH8CuJMwpz6Ka4i9xaHtPcKqcidR59ibGfZNwZUKMpY3knY9M9UmGRKpGBq3GeYzcjzW1vtxpZ1G6Er7LZ4ZDX",
  "key2": "4n4qjF11xqzQNGKX6w2gP7XK3bDFa7jgCRdbYned97y3bAYG2kXznx6WMvPNUZmzGxLz8ZK1JRPMwQ2MAncuHKue",
  "key3": "33XsqujNf48KybHgwwRrP3vTPS33WWuUFKxRxi2oP5r58QQmi3Zfw2YfwB9CxNJ4VYZPf7Ud4PyXvNyf9y3snp7r",
  "key4": "3a8CJqd5uDpQWQG9iF4TUGfjofoYS6zjM5XSUe2DFUNkZfyfBhxJD1VYMkiKW4UKUKHyLDFhmTUNWyj8SHmkgUwN",
  "key5": "4VJYJ45iYaS8ksdqHUEyEUFPeeXsAJRRu9hLP6W2nDDKxWf5KazUGTwNjZJLz8xtxy4Zhr4EYPya8b9pjVxvSMvT",
  "key6": "4ZbjhQeFBGDHBzrqqyU33u7fvPd6NKYsMN4zaRJvDNgACfLjVrmv4UsfsE3PDrbhsVh5b9E9gcbcNtkyMBrAHSyU",
  "key7": "D1VuthU8FxHWFCwWzFjKBBzuzx5CDqMhvTzn5hrZjUMkSF1fLAqJPm9aeJC37A1MMtMrni8NxK2RK65xe4bzUQW",
  "key8": "5BV338k4tye1jA1UtzkUbQt3ZDJuV1Ax1V2vukrY4uSPWJgqTR3x9dSbKERbg7YUiLoaUtyEYGVawpFqHUkj3G4Y",
  "key9": "3NA3NERWuhtwcU26ExxFDS4NuTwcoHR7CvKsASjyXpHLwy9U4uAtTYzA31vvTxibVvs3aGHQA48P8DpJgzkabFtH",
  "key10": "3i2Lmz75mgp2rvNm2qEejHokZaNX3CbVXydDLk6o6K24SEGS6bTsDv9xWbmVcFpQwFJ6MTgA4h3NZQ8RPneh1Emz",
  "key11": "4Q1JbwFHcHLoeJbuLnQfd9frbBoqoKELZSSPMUzZLQ4MJPSn23FjkgoKxg88AvBghpp58JGVkYBHnwJ36v4u2RxQ",
  "key12": "5QcD865o7fnHFjP6hs5FSKQrfzMbs7RDjgYhwkhtZZdXebdWbXqtDD7TMjqwz4rGbpvHYoxqYbAwsBCk7JZk8fZi",
  "key13": "oPBKz6AHTAEkTVLeEwVkjy6K4aVDq5ophpHJrTrCzxMob55Y3gta6VTZTP8AUZLrDJvdUQcrZRtKinRFxcZ7cZM",
  "key14": "5Xgy9ZWLprPwCxZkhEFxtfKSjpQygRMAEqyqu82pun72NUbUkKc6SVafMDcXG52A2kUvKQ8xxmb2fKvZGESXvdcB",
  "key15": "2Qcs4fM4RPUuqiiFoyEUWW5zygRwLYzNEjUz3xekzyjV3GUxMSqnFDrTRX4j3ff34ZhoK8PmP1bckweQVXPZkrij",
  "key16": "5mB7CrGAwRvoxTxh4PwaqG6pWdcoWmiJXr3aT9sok5rdC557onJGF59vNsmYGe2QL3JJTNbAwR3ktutBEzmx1LGS",
  "key17": "5QwvbfraZr95LGSkzV6Gn98DZKScCqziyE5Uks4c3zF2C9h4oBk2eRSjScAgPXXYvH3fgKAu6zFPjxdTmo7rRqjE",
  "key18": "372h7qjWXkJCG5JyvwbuRMxrZLrHhziH4j2P9BgKJsjmbG4KFRppRdoj5pFsLoXbGTjssRZCXnwAKf7oVh2Cq5jN",
  "key19": "4aSiFXdE7Bypw5YNXqFTqyUMFuSBn3bQFrYHR5mKybArFPRn5gB3dcwUh19Z9x7TLnE69r5u5QGroJSRCC2TT9wJ",
  "key20": "3o49QEZfhZ7kBAgw9F4PkNymesitWtoynRwzRAPgU5MiysSSXeQPr3iZMBEdHXa9MMmFueWSzhY7EC267U1UNjep",
  "key21": "56vdachkWo3qdDaXaNsotQ5RRXT9jNAbsjwMoTR9uFmFLm6zpHtKT3Lf8suv7PUnH9FKWzRqDdt5tnhDDWZL77hm",
  "key22": "pL8Vn9ttsq9dUxmgXMPpT6YvjcG3er9WxqVPdUZybzJjTjXr8rihtGcGNnFms2FBSWWzasvpVhr4tDJnt5N5Yd3",
  "key23": "27Eiyz6EaVmLUxXccsg8esadwixeSvLk2kK7AfLKjrxCNKfQ55FABrV3J93ZaEUbVc9VgE9r8jLA1juj746P4PGs",
  "key24": "2Si45c3QyASST25dMKJtaVs71hGZoyJjkimC5fz9fgVXiDFkLxJTttqpvpQ3Kwt57WcKHqW38KRKbfgmzNshyuuP",
  "key25": "2c7QS7EDKDbPUwcyQ6MkMqSuCa49tt64eomU2TZSvHrUuvpVptfKWEukHVwFmdw96XD5oN5HuFAcrGJTyCg2Bxno",
  "key26": "3rTt7puMrhprigYzaDWYXDfMhV14SC5b2ZYXQoLa6NzBc2y2NNKCvE42FwZQZ9Ub61xaYosVPC3qcye5RQU2a26p",
  "key27": "5BzAHZG12nhpFPAvdRQS9CBCgzTAVs5s5b9udvMfCVLJC3UPdpu9VhXcmFrmw1UGPNbiZ1SvhX2ToqfJLDwAUZjW",
  "key28": "4ePhCeGXcgMaVfhZTBGVELcTZcfa2Dg6Adb7ekp9pycV4YzYddhuaxhzvzTK1BsaUnG6aQBKZtUJUQeA8hkakZ8L",
  "key29": "3Sxse2WijmELK5EV5v2pGE5BQ84XSiAVrTbFtvsJxmToVUCUuxvKFvMndVSxKSVo6ypYtAdsSoeLCQpcz8F7sqzs",
  "key30": "5pckC6vp6ckTyLuyASfafCg8TotYtjSjpXtZaA2b9qgToazPLNg9UNt2mrzNAtRJqNuqFwWgPmGVFLZRYGfpK7BB",
  "key31": "4UinjzBo7ynLdTJVDHzdk8CRRVycr5nVi6ibqaRkcNLrnzywMWTvWtD7g8kmup6e3FVEdvLQKyNtYfDYUW3o7sdt"
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
