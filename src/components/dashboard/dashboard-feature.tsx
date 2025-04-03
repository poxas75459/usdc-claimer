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
    "gdXWb19wrcfoyrtvsTRYzDhcZRG8Ys29HZbZvabpVtYzY5Ug1J1y4qEpthtpEnczNn5EUKTV7xAYqr8bVXJA6QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26PEMmvV1D3QbzdiEpxq6wN9WJiSnD1gvWbCEiTHTwfYF6dvdxmZ34YrvjjGgopiejvqymkv8n4PReGmvotnLFp5",
  "key1": "4rmPbkvhboBPZtLnShe5sKhdWqTcJYbVsuEzicc2CNAgYpnyZVHbDjaTLCMhPt8BwXitJEWxPoTM7SNkZwj2e8Bo",
  "key2": "rxzy71WwxmKuVGYzGHrYri3nKjRUngx8bq8ctgrhUdctxhPVntbDzEUJ8681rAg2BZ4ahwC1nXZcQsVWv7rmU67",
  "key3": "4NAZe7dDxgfjDVSeBTmZ1pV4kbjdXGGKfZPsX8igEJontbBGCEh2NYFsKJoq68rVHVzmkS8HgGkCZEztBofh5RCW",
  "key4": "3dTmWxtKKGTnggmhrqNb1qPHQFj1opKnN9LPqCRPkQvNZLjqdf9WcuanA4Lp6aVK2eZXofHE1peaHuYpbzgmvPbd",
  "key5": "66BcjQNaR1L5SvNEE8W8xU9EAfzfi4F7KbvxaPtGnXQ86nFvJJmFCFGQk9QuWKvYXnLuKrBmCJhz35BhGZZoWXQt",
  "key6": "63bXvPspmP8pdpBu7je4XNAE6WPJFdbksCSRw3HSbsnjaMofBKT7qy1VNZbTnxbtFJJoA5XdbTr5da2n1CG6ZeNY",
  "key7": "4vStKEu1WeAb4bUF8MoYgbDyr8zaoVZnNEZ5EpGyTS1dp7pqvVmugirxusUHAEM72ZDbRuXZQSzFrGge6uicrGbt",
  "key8": "3A41aRG8TdaJNRGA5Q6KJsEQiAxDE6hv6wLJZkArUejTQgCbPyYFnoB6CGmAeSXWYjqWs1HiLTyrZzApckbn1MFZ",
  "key9": "5mt3uwo5x1dMf5DM9Sx2CRtVRvX5j3x9qrihhFdfijH7XgTTEMkyJnXRJy12DPwGUUyVJJKmRhF3zY2uqiWs4gS6",
  "key10": "3Y979PoLc9v9jtSk491WGFSdqJvkGARUdjohhyrkwMmFsDzbtJsssNBYrYcBCcTF9hwxoB34KxUtxqwiBbYLtGLA",
  "key11": "3cGwUtwEa3JryFKR4ax746kjzqqDBPM1eqKWG6R9p8gHcZj6pkHWnd8FtCpDGyrauXtHD5DVE3WuQ3qhMDsKjsAA",
  "key12": "64f4KJkNNDe52cF8XuwiJEjmisGmyeH2waLmXetMc6hZuVTFDyRUu2KqzKZPhAH5HmvhhtFsfEqF86ZsdseMFjKj",
  "key13": "5A6RbV9eRzWRwNPMvHBBnWiYPwvFvoVjhvsC5Vy5NDfeWpLmMtKpHq2Am2U8ZDz1W2SJEZapBY7ykmJKubsMUXDr",
  "key14": "29dRkZ3UV8EmDPcWAkJRp5FtE5n8Tn2HndgV43yJrjk3qcmoRFFgKkDAZmFeJuU25JWAKK3UYjVdhZ9iYHN22yQa",
  "key15": "3d2CAut4yVK3R1xc6vGWoXVNSSsofTBRBzRZksXZJ2bfNwLPzXgCeFpTT5TYJXRCGmyGi2abVu2FnDZDKtwCfxeu",
  "key16": "DyDaNWnupdCQMY1LK1jyps9ZNmsXtn2arEYPkDyLXCh4unxyvDbzV16kXVX9VVD6hpJpSB8CJ9PQfpVY9PHxfBx",
  "key17": "2yhB4Q27GZtfbbmf3yNKxXYnVFbvYtm5GuLncSJPCqYjWpgo7cke7qoTDx2rbZEs5nLXD8nvC7LP3VXyA7xXoyhS",
  "key18": "5F1QqUH9dCu8Nn7fJqYKiPkexn2vGjXfpbhPD6yqe6p27AMw51kXtEu68XBgfrKYBYFsUJP1SzFqKj6usaKPQBji",
  "key19": "3yABWyT9sucjxKC3rRViVMozSAYaBvta2SmXZrfzsqUX7Y4a6MQjMaqLvnNsRNhZQG2QjF7Fbb3y1bFPWVqtxdb1",
  "key20": "RB7Uwjf1SiXjCbXPvgr9tiGSoKZdnRRvjxG4KfB6795BL7SfSnPZm9cXqLLHAYkFC16qf8N7nzj4kpxZFg3Jify",
  "key21": "3LLkMz9eNEpTchrL1Af57NwSu9jrsJcuhCGJHoRZTd7oWjd3m6x25xLSdbDxRYqVrcampyZZwrVihAhLt3WwaD9P",
  "key22": "5VMmkQqr74o4fmk3txHwiUFbke8RWD8UVo3W7WhAZwNmxJudyL17Zox7H41fzw1BNFJPcDUXEHwsyvPUxZwS1YCL",
  "key23": "423q81CAiiHZ8tQz4vY4WfxBguYz5svyuf7pk5smXdZ5rvn3vZav7ABJmGyUXrARd6DW54SNpvxg742o11JpzUbX",
  "key24": "2jQKffKKn9W4Qi4beL4bAzu4HnLSbHjDMcisdPCUuD8tMQ3vGk8u71QvJz5KUs4FDZDdM6b1rHg4sXkiTDKsGV2M",
  "key25": "3YPXFF1QWJQNASyW7SdB5bTHvCvHpCF3bcXNNJKHbhcqmLzq3HcAnHUfMfQYXwdaPeDXE8oLipRst6YZ3jCBYExY",
  "key26": "5YdPmYPJ6AytnoXNzKZ4c1juaC4fDFEobZ79XJTjTF7ypZGFKgys1Fa3XRqaspwg3mFb6LrbGJkqJDm3fFHsRxt8",
  "key27": "5dPEHDsEwpr2rzXRKDKprRDHZ2UXJL3vL28ARbyzbqxwVAQPacawT8NTUbVBYAaswPPioShZibJaDeqCDqivbXLb",
  "key28": "4Uma7pQxjesHwLddzs6mANizWvyoYLk4u3h8WZpfrokeUnuQBMKtACX7AKJSx7PPjdzaGcQKPYHru4VNxgRiSQKZ",
  "key29": "4cqR7gUzTsVzzsmoXYan6wzujRDvfTgRsx9Vxifaza4J12sF7Py1FvpoPwsurofatazAFgYooC3GdnFTWsvYrr2d",
  "key30": "298REQyq522wbYX9nBQqtT1wkV6g7DFLo4To7SQTVGX4wD5RLBt845PE9JXT8EWGXfxJTfbQZuXPYKDynJXFhEUE",
  "key31": "kuRVMEYx6Rp3xzwZa7wdL6vFaMJEoeHX2q46833J1JJvVP7bo2sYEKeweN2VufBSWsTpYfLZc4xny6cTqixF3Qu",
  "key32": "2A2VzFZe2dVkhxXoCpodQ257JerAQR9QUn591pcvZz4fy2W5zbabHVxJ9TPvFYmCoGHFXT58zGYuSoukKUV4FDBP",
  "key33": "3mYMot1jGEQhthvVk5QAnWpJrt9AABBxoXKbACCTirj7Nz6DChJifG3mYdYQRVKcEZ1m2AqhwznU2Y9vfRfMB5at",
  "key34": "3wsjHLXQDdqX59YACZb6XvsFnYG6PPwi2WcxRostA5ZNwfBrZTwhzp11GktRCwcAQtQQuPzsM65LmpPi3QWdzYtZ",
  "key35": "W3XEwuzehEyLFCNfmboSQVaM7xWLY6yjfL4cN8Vej8YPdeC3dawdFQkFg3AtxVUKGEnCtSFknp1TrT7ZrbS29yF",
  "key36": "2FnSgSqN6WgA5ihEJ45K2GZNDKW141ZMunHS4aFctsugRrfrdD6uJm5HSHNAPvS7QrmPNGHusJAjnGgoEPiGfc9Y",
  "key37": "3q5u5JQT5SbHu8E5mrMXr2HWGy5YsferEN8UCbYjKo6SNc5yaVRejUme1jZAjWC7BV7yUb351oSywQuigywMXkMh",
  "key38": "3n7tQYUs7PtkbMGQceRarFb5AAtnSnkBkdtzLf8F3r1vWJWK61wMLgkrQc5B9BMY3gze4vV8Yjh5auySQeACfEbB",
  "key39": "4Xypts8ihdLXuYkTaxyriwyv7tUGCs3CkehCgGZGg5myT5zLy54qcAaeoB9vLHJcQEMVs33FYJzAoVVNQcvRi3Ja",
  "key40": "4ohNLMQX8CskMtxQ7cGZdDjdDbZHzDWki3VWmzia4bL1VrrahgXsyBJ8tWzJtG3AKpPkvihrnwiR4jfMJCoMtHcx",
  "key41": "Lsy8Xa7ThmLtsVuPQk4ACwyGKe61hrqM9GLyZ7GLPcGo2dfTY6D4Evzkb8RYTrigBqFQx4N9gBHz1TJVdcaqzjn",
  "key42": "5ZG2GsyzDdoydkuEZi1kdgver4b5sXheqEhDGUfm7hteEETopoAhg5qX1uKVxnhcBowFAbNn76hviphgHHmGnp2a",
  "key43": "5RB2doWU5kXfDUdDKkcGpNySRG4pHofckGpjzZEbpUBv3jyU858q96whyarBsC45evQAJC4UPn4k4XSkwbkgbS2H"
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
