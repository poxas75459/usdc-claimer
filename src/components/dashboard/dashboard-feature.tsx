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
    "5AYKyXm5cfFGvC6sPUY3Y7mm2Zqwqa15Xqef34t2k2q49UA5yxPVodL6UBGxdxusoekMMrsqm7B4ffEEJyu4dCz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDKDA9gcn7CGj5NGNead8Gdshafo7VnEwcYmfT2z5gVJjAmKUcRnmKrJ4eQjUAsAdLo3Yiyxbmjuj15SDF22Zxz",
  "key1": "5MrD4sHrB2aKU32ih7XNkszQDPNTCpTfU6Sd9Mqux2RWuH7b6HQTHdFM9SkT538CWQTpHRUUJbn98j4Vo7BVmeR2",
  "key2": "ojMq7jxi8uPp5wiLi8YBMwgi36yt4BsELJBfE98QBAA5xNTgH2oChrwdDGsimab1znrwm29XEGmSUxTYcYmS5wV",
  "key3": "VStFYZNdfCmbitogftRKDYn4iGA6Lt2Qakh4R84GRvXjM7rB9W5PPZhYjxYczDH7WgDKaz39tPLmQvsm8XcMRtz",
  "key4": "6YS83Mq1j1Zm5pdPHnyVbuNMTXDCLR5C4Va9KVfx4gMZNivCn7FcMhznTWXwnA6bnxMUsuAuk3R8PqQQMwRKwRi",
  "key5": "2edXF4f5WxdaBKVF9QUbfApbgyrBirwkAtqnuE3ZXiTd2jq8tEqJhnqZeUwLKUTY8NPdiYAhSeKCXVccNzakk3RJ",
  "key6": "4oQy6yQwRXx7o8xKACLY93C18eguKi95F9KV41Kj9K9N4hh3smCTi4oVcUnrrYtA2EK6g7ULRgCNgRUrx7awVadm",
  "key7": "3JW81UGFLwAJma9hurgbWefPr3FEm8xhDZbFJC54KoYd7ZDdj24hGCVG84W4cCngwMFnMguUBGCSbJTTyAe5aPvk",
  "key8": "ps8tdEspZeeYAhm5T4T7HXrVoAvMb3X7YmpkQhzTeszUxWJRh1KjEMKhpGBTEWfwzuU53Aqr6KXLcwgWTJRKkPY",
  "key9": "34gnBwQuGfB5hJJ6QBQLcUofPtgHjwDms9wLx9xyczgbxykqFiNuGe1Qxo6fEksFFhVEw3crUUFPZN9XBC5c49Gq",
  "key10": "aMAhpPrdxT5p5rVMAyuNMWQ5g5JbTKCksWYsYaoP3PfqvzoT1vpLMHiegsbZWo4tK2oWwPY2ZLfGibuz1VV2PWu",
  "key11": "3CHq2xGomQ23ViRc4Am2oVf9WuVt8rDbv7e8vpszfc6HKyVyxekQtC89D9nEwu5Yf6aU5gCsL8U6yPbESyphyCtQ",
  "key12": "5PoUkHq3rQa6fECfsv3yn4vLArjnUYWbjS43NVSUu7a6N12JGjoQ4LP4k3nnXBEMvufSAfWcgcEWtr62wiLgeKoE",
  "key13": "3GcnthaGGPtfTS6wdPrPJzLfXfn1CznJ7yh5CzhbFU4eFuPJR4ynj9SxBwVU2AUjW8KXfyigsZAnVA2dNpLcuxgZ",
  "key14": "2wVqBzU8gqNAW2yU5d2G67h4KJB1X9i6MxRdLAsCzkW2wnb2VS79ZnaYWubFWKAhz89xyMf7Tznkg9YSnAjkPzAg",
  "key15": "2QU5syZjS6gVvGmexemprFrY2K3ywU3KeixfQcqVwDQdpVT6FL6zwJWfQhML6f1jp3E36sojf1tQPH2HvMRb7tde",
  "key16": "yMRN9Try8gJT71BhnAM8iYUypTEuu1wLwaC6CmwJhxCbgMft6QnfzcbmBfXGaKQf5PnCVH5Ae5NtLJZXwfuM7iU",
  "key17": "47YWT7A1keatTUZDprh5BfsB9Q65XQv542U16nwYTU2jmGkLqG4nxLDg5A7ER55txqydTrizzbxvvkWumGxbyhzT",
  "key18": "yBdkQTB4NTN8JcQEHgtMsNUQJCM9zxeuvonAZ5AgwvfmQzmZtgpBNzQXxmuayrC9Q4HWqd7zfpLSq6tYqNgzaHP",
  "key19": "3i5LvackxGiKgcgpXVFg2vvszSPogw9PxtB9EebffCfsH69dFcnK6pTQAGHsK1a2Y9bMsQnSMeNkoJscfAbHz5zJ",
  "key20": "5DNsJcHbwLXPj9K3ERhXLuUCGJHCaYv59jXYWBGWsC6JT4LPLSTVJmqRJL4S2YUNGYLWy42TojMQDmdkVJBi3PmX",
  "key21": "igoNjY7q19FjEujctt6FuvL9LGQkYFGtTcqtHA4vo4BHXWFu2CGzcZhUxEPBZKYC9o3woDfAjuBELPb4dQi4cTw",
  "key22": "2rRsH9wnmWgfcG5FqsiB9iEbqby8s3vQvR95JzbLw3oTb6NddeCXjiHg1TsLtNE7oQr8H4y5G6bqBggPDsTMtZUK",
  "key23": "4MBkV4HHYMwxUScJtqiFhFfEXnnsJu2B6Lvtnbg65XuieiGt6vVm6DgJcGaMtyPMEiBdpUEDUA6yFnfZQxUYGYfD",
  "key24": "3X1RzKWnZSPUVPJrZV61uG4auqF9UqBzSdo2iF69beMoVwUfzcooSEx5TwCxdDm8whHyZjMPFGe7FjSA1KbFnznB",
  "key25": "4kz4d4Tbb866oNpT7SJw91ePcCpUgTQ1ts2PgdcyznwYk8CSEUspdax8qZxVpbHR3pYvRjRTFknHFNRWmDbn3qzB",
  "key26": "3e3Eo2ZZP6bYJmCkdUoLxALjaX6xnD7TpXmqRxKdXrFNexuHgC3tLzzEVaWAkJHc5TALUFnW66q3sdaZaQPKcZfa",
  "key27": "4DC4qGSFiKJ1WtZmk1x1obZpNCwM5Q2tN2cTUuiMSBSf4y576B3YWA6Z8vsGuQQsGhgqfMfhTzk5ntp7uJ4fe9nE",
  "key28": "63Vu3CXPMHUKHeFdGc2wk2EWvt8vJZGk5iRXW8JW15WGkTWEWJCz2Xx3ht4rMqdvLSoTz1gpa2pqYGePZ1HMqGPo",
  "key29": "3ixLmbjLEY4m9vyKG4RaNz8ZTs8GweipnPovT37jnb5KQTmvyxYCjDKua7RpPKUzq9gswAFEc4ctLGbEatQEtgJe",
  "key30": "yzvh5exrnkt213eYTp6AEZtBaQX6ntjMd8QTQ2MEmHh7oJhnCfp2wCE117E6fVMtwfoX62zExG7LmE87Xs5tUsr",
  "key31": "3NjUxDBETEakhXhM8t16SJ39CnXeSccfUJZEpnuo3XVuYeUHWc4wy34sd7KhKjmRrsPvacdfbzn6umW2CSr7JmCm",
  "key32": "2ow62NmbWNbsseGZrFdZc7qigbuLzCAWHJbniRSt3qvtcAmac1EreiyUuqytAF7JbFUbiPVGxFjxbJQcVLD2rcmX",
  "key33": "4j1Y6t8QxyPtd1tx7K4FYgUjfobFXCRHEoWoiLBvmgkeTfKe5fPqzGyzX4qCZ4HSpLTVemSPYKczp5JkoigBHUsp",
  "key34": "2QrM2vZwqpxQMxzSojPvwesHTn9w1iJCMh9ssvGZjpo2Qzt8BCLhhVKkobVhBVPPvAXEwKxE7WGp6EAWJYYhUNhz",
  "key35": "5jzv1NPkff4PTYfTnscbKDi58if4i65uNmMU6F6W9nKcY4knGuxW6oGkj7SRHA2dyW3D6HaA16iB97VzVdqexB2V",
  "key36": "3K5ogZoJSMbqiDqDHpDZ6ENXsmkivUnuwXZVNckDNGr373XzhMbXvbB5MYhaiZP3RgddZrsFgDT8yTjfRXePAK5W",
  "key37": "43K4ZyfHJXXkAvGApSfi5VR2tS1tgF3Jirr8qi81TsWLP1ZFB59sYnYCLf1gx62STyddjaqJqApssJsD2sXXFPAy"
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
