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
    "3VxMtB482ZkHRKH3QZA2tXnYw19AjUuGhLZyC4yjti4yk9wiWzRcmW4Lgj22scDM2m8W9Fr4d2JP5VJ8Ew6vuKVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HAfPYymmxecDuSBfiedmkYTwUSbz8uGiPJn9ivTULmeZBz9uutmcuyT5J8SsGj1ovYPUo2heuSChs7udjYiEXo",
  "key1": "5qmtK4LSPvBG6kDF4YBmFVX7rgQP7yU2ktpmQQ44yj2YkYfgrPRD3iyY4M3CcrGeyxbcYVx3TNkzRUQxbJkW6P2o",
  "key2": "5NpNhyS5ARH86F5p33T7E49Ft8wLh3tyVTL1am8LcUMtNhiLmsn5q6G3gZHqYpgy7Z8MN5tMCr9hNMuj9GW39nH9",
  "key3": "3wrPn4AY5aXZDS9WdZJ3boRky2x2YuBsMtQozmUVXSxURuV1pSW28QunjMdS9TH1kn76MtoMjsLinWzN4MP65Ukk",
  "key4": "4bFuyi86ew68i12tXZa1UuZGyKDSgN7Tu8sXUyrLiWo6fjJTHeY4rqPPSAwTRASE2dSqHgoFbTZaPBADTtdXrLX7",
  "key5": "3m9q75teBW83GWmbhW2QLjZzX2G8DxH6hzJv2T529izkdZHuKfXZ1K8SEoFo4FguRjZ2PUwdAiPYxzTmzvqF2WSK",
  "key6": "1MoNMPaow9xgoR7jGr5UWPfudjKDTigfTzcKtd3x6jphxzv483jYVxW3qxC7DM76o5CwA5B18QMzfDrhUTTyQPv",
  "key7": "3gSkyDfk2xTsgqF6sui6NKQd1JxJoBaVagKjVqWRboWib2jjKfQdHxWxkAprqJgfujhWJ94GLf8b3XB5xX2DnjfX",
  "key8": "4o1QgSUNHdWp7vGKr8RPZGPzr54Zddw5fytuQfxQwpEwnijc9iUNS1k89Se5Yu1U9me7pGysrLAsyWYPEs1vfQEZ",
  "key9": "4xpZ64hcVk5hhchaEoJoyRr8t89je3tBf3SK69pv3RS1RbHQukoed5JHgqH1PvXyFxsj6DcQUQw3VFrzJnmaDqAz",
  "key10": "Qge5seGVpmuDAbDkE63bCRr6QpCM9fLm4VuwY5urpg1ddAzw1SV4wWZD3RQTyRwbDHkQuj1xeby7LqPTJrL3wYg",
  "key11": "66fgoH9HCnGhzfy35QRADWHVvSfLSPSB2N4K88cHm61C9TGSmkgwdD69N5Kk3J31rvY8m9s6TBNAhTDC24utmY5B",
  "key12": "qkiUJZfTH7SV8e2mRNnStMT9VwnCmXakgpYWw7XyegJE1Nq5mFKsr3Zvq9qjx4t6eZA6k85DmCxmmpfsR68AhmH",
  "key13": "2GyaBFF48smd4jXBRgpXzAgB3RBU1UfvQaXoC2shbF2FHB5FqH3wF8xLKj9d3s1xCZHa44rof4QUz5a2pNon2g5Q",
  "key14": "64u9jaJwweBicn8fCnVAwQmrSSrTBgBs5rgy49P3p2rj1XxXqzVFBawATfwbQGpawtqUqKGKVPSHYJgE3ZWLQUjc",
  "key15": "5AdipMgRQXKwMQytQxFZCzZ2BbZfGPbiCgy1NLmSTriD7LAeCvmp9sZ6jCLxtyjy7scKJxDkqEjuizVp3EmbAf5e",
  "key16": "6uzSmcZcmojVN4WAEdmjK6DE6LXbQhY6fpjcJpy2QUrNPAeJxA5UdNzvGwSRK5JR4zJ3rrwjFv1DVwayRxc3w6e",
  "key17": "48f6RZjkQTV7fEg3U38crcv7kNjSFvjDgHQ8JDGSAzeFfxU6TL1ZanYUmMe97Dzs8iTXeBe2xTxsx3eHMHbFtRuu",
  "key18": "5MeAgbsuhvKc4DwSHK2nkqqxoKA2nHGMgyApsaLUUZM3QW8aY7nTmwtnqBqvivQ18Jc3gwk87TfDAD2VxHV2cfc3",
  "key19": "4uTV6eFXc2wMHKonKNi3fyB8s1nua9Yhu7csATFkd2h14hR4GwHBGdNdF5i6HNo69cGuUiisLrztVTxmHMQn4xQs",
  "key20": "3FGYf5XbuYu5WvkoVerPSRTvGZ9XdDUJAix5UmiMHKtkG721cehqJu5K9o2A19fZAn9pSFcxtnjBbAJMKT5bdntk",
  "key21": "2iSVk7EPUTgV4dptNnquRmvMtKjK9G1rjPJd4mhYA3jeKNLQeRMb2gc2GXX7Xtr95CJW4JxNinbwcs1LwKHePNQ6",
  "key22": "gXXHcB1nFNP8HqhSANg2uFwUtpoDyCADZTMEicUBM1ioHtSzmaGgVssEgiHSHMa2FW96V6hGVKZ8F93jiXeXpft",
  "key23": "4ZWhF39qniswJfGiowu1UyyYgjeFMuo1xkitS1uoF2ii8w9NqK3uCUDJzsAtK3gY9i5wqtegJZgbB61vLBRoz35K",
  "key24": "e22HFf27qZk4KpK3UoA9b1GfZiKeYvZt85QpZ5SVhNxq6Qh6GWLwT5UGcPwg28Ki9rDx6dLuwR6r6MF3M5HLQ2H"
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
