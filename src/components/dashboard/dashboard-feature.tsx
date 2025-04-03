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
    "3KaRxRMrFZf9pnpnnTn1MYECGxdp6mSHioMTS1VqXyswpmKodC2FUYNQi3WgF57n9aXDnYzv781RDVQvQ5JePdqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8j5YHMwRtVpZLivzzi6Vj686HnyM7uSpTneqUh3DgVs92BHnBbmRSTB5XjNq38siSkvQ78XpAPmjPsojYPR3GY",
  "key1": "4YY4G7TDCwbxZ6MrR6R6CoY1qyG1GjSnd7PYHaaAfcsTHZMU769yhodE9P5cdUUeAFGBVf6E7xCq8HqEeiGxUc9Q",
  "key2": "3uQ8c5GtwWSoPcagkM7nZNkWFzqiRkiMLUUUVrhBB5RtUNy63bkYMyaPcHiC9MhYE2fEPSGAtuAqxaM239zZ72gT",
  "key3": "2sRMGzcLNFTkrNKRpCoTbqWMFAZKWQDnnh7jpNbD5448HAcKBNbEt3NLFYu3A5kRVEn4Z2iz8fVU9uqoWdzGQhns",
  "key4": "vX4LUgDz1kdq7JZcMQob69oEcxB4yZnawKBjeiXgHpzezhhWW3E14v4sFRKpc3FtzQTgtwR4D5kZRw8SMWBvhtM",
  "key5": "3hCj33nbaacw9eBJ35DKAyiiReMW9cYWUK3bf3xpGVY1RWt5iXwMBoD82gzxDR1Y7Sb3RqTcv8qVGunq4ozsnigT",
  "key6": "2DBWC6bnPnZXRZhdCBnP1frPC8Qqe8MM2z7jgV1NJdZiTEfr5E8F7Tcgr1o9rpKVCTricqRt1RpVQb9NvZTpHqUQ",
  "key7": "51gZpoDgT7CY9FJxAUgnPhUStvFJzohDcT7o5y6b47rE5CGArBBFhrg3uQDBzucSA1P8JiCsWYBCGTJHwWv8M2nW",
  "key8": "57zhXEeECocn5JsbdqnmWqSQn4eB1L9x2F3pgkwiQrKZTAvbuqox68LJ2uz5BFqjKAKZdAeufAheGu1kfxs7VToA",
  "key9": "64NygzUQUK3hMbvyRMR5Z6ASAEJ7PTGquM1aWz1wddxt2arMzYtoCR4n1ELBarJRQcaU2aLpSCvyCtrZbNiUiBCu",
  "key10": "52GjZ1pDWZmTwVx9vMvkfT1gJBFMpsRNtY54UJGnGVRRtvNj1JTX1ZGZzC8YxbiSHZtnUL8crwXQe56XpNS6bEa8",
  "key11": "rUHmU7xEM7LeH2AXSzmH8e2KdsLgv6CtB8js3guiZnDATkiRRj4hTHCcim4m8nNmYA94G7DoawXcLG4u9PxayGN",
  "key12": "2RxFtHnkMYFxjdnzSR5BWyX3EUeodL4TK4yUjK14PBoL5bcxCKiaiM6z9eMR6qzf9voKJwauon8EufytFiTk6zCR",
  "key13": "2DyrsQnhydnkhSVAhsDh63axYMSVhSXdJE8JT5JWxXyeWFMyVjLzZwdBLsWQUEwmFYPNgZNRpoxD8b2qv2gpwPu5",
  "key14": "5djbpchmJ3X91JKZdZYA49Fy4JAQDd3X1iAHZxV24tkfDPhFo4fSWN3S1LBahbfKPrcDHoLcmQJ7o42cf9WKpKS6",
  "key15": "4G8jRz3nvFRQ5G3UddvrqxbNDbPvUgixMHEq7SQCGiweBDWnfFUUKZFbjvsevjRRcZr8Q5X4EmNcJaz1PpMuaaQJ",
  "key16": "4JGbi1bStRuXAkN9ekhjbv97zteUwzXUd4R5UWrs17atjPaXNo6xvrAyXdNcuKLB8GWxRFYKzui1H6iRHUmbCGw6",
  "key17": "2G67xhtTsxrnEsWktJzvGo4wxzLGRjBzYK9d11idSmwHZ8iWsigNgsE7E5d5Mf7gQu7ZmfwDkdEsembK7QpXruM7",
  "key18": "24Z1B4euTJsTsKV5ddyaMzfNcg8hwoBvyr3juBwGm4sqq6cFoEpSxAwU5UQLA5w1y1KfTMskoMGUz4Wsmq2mG3T6",
  "key19": "4pBZuWxzXJouEKJmFgymjhhRwFzZnGbLJMhvxfZeGYJzxet8Rkd4dU1W2kwf9NM7XbahYcPVite3DJKQ4emjW7J2",
  "key20": "JDhxiqstU3SAenZqe9F4sNkjtvPEgVxcbMgwUCrQak31Uj6QjDPtZewAgyuDM624WQq3sPJdBeeYxADSXBe9EWG",
  "key21": "2T79LbRBJ1AQtHpazJiXjTQsGauzyATbg4KCwg4UfFzUM4yvQoTZpyyMewbjB85796tcDRycmzGUP9o2MnwPRFU6",
  "key22": "6LrrY2v4yh91BiqpaeFGYbRK4FUcuYoCSZ5foxztKCcCFKwrSAxgK1214gMSStyu9pb1umPJp6ozfUY48YL6pPD",
  "key23": "585gW3pG3sVVJmRiY6pyQcfJm3XBt3Sy9GqZpTa7JFaLjyByEGr4CcFjojhJQMaEs4xaJYKfDqrGYdiQrQ4YseAU",
  "key24": "2mHQ2vyVSTX6uvx5KM5FUkvAYUFYzRHnKfPYhibGFTFgqL4gYZXHBGvihLe7UABBUeMf7dc8CAZLNGQBk3qAp6Q1",
  "key25": "3USpWUks7586KDnsXKP9cHCzycKci7TtxnZkLnrbsQV7dqVL276Vt5oV2NmYDZzBQRFoYHTRBY8MQE8REHNPwMLD",
  "key26": "3bZHt7eNuhPGJNuieb7a1ZF6d6Wg7kMmW6VpFrpMG5kszV2VCAk1jrkBujkxzHofVv7fBpJCfB4YoTunpzDgw6YV",
  "key27": "2VN1JvF6FVKCzXdP57Qu9cbfqDbbfogKL9giCZHUfK5f7dwaS7BXd3sJQGRzaUgGSDYA1mTnfNkCsc1G8r4K9V8L",
  "key28": "2gq6FNxEWLc2MPZrrrvJRhF3Q34kmyP3TdqzaxsKF8ZhGbi4VEGSnAHtxz9yW3yB6A7TWyHSWuDsjRS6wrzhZrz1",
  "key29": "2V1D2BiN9rAURvE8BYhHJc9j38m6sagqKTK3x5XUBPjYD6SqZjHz4FC3NbjSqN3TSbrsQGVdQz5Gd3Lc9eEZiexT",
  "key30": "3kW3nTm7bTdpgCPbUeC9un8r3P6dEbhjxDrTcfdwLo8AVJUPuwhHLFD18X1Ch2U2ub49MJPf4KhnSPK4ua9kVqRC",
  "key31": "3ZiqHU33TDhfwz5uTe2PXuiVU4sSPjtjuegYbkFJ5cGp1eb8joCMj4wh1PTBzmrxHobF6RpFiT3EE2ohNCnRUZn3",
  "key32": "2phTKUfomMM4cuxLCgnKxMjSsGAkbx26PFjstemqyAnLAw6kADABjuSdV2E6cZBrQZddawstTKzjHMXnR77TP81q",
  "key33": "5daogp92AcBW5nGqmY6Lnw4fzrGW6mVwea8EFkiG7Ex2Ff2KZvXdJ32Ky25n1sgSu1KQDiVo5Tmk1Qj8PvKnjhsU",
  "key34": "3JojDBrEnWqoeyFuVYUDDtTyE6EK5akHPkiz6WngJrLRBu9x9Z7U9qWJh4yR2yk9FXjfHW6gTd2zJ9oSSNtKFjUj",
  "key35": "3MwAtoa44qmXigFwTqVt9JTf7NboxSVEcC17KvBcDCaETZ3JtNWnoCRrJXviN9LsSW4U1uC3Rp6y6zkU3jVMUCcg",
  "key36": "3irLQTwY5TRYaoJ4nMpvyr3ZZvepg3Sh7wuZKk3tuQUHZ7dnoWzAm2ozgfrC7AbmfoRqhRRg3WDNGcjNLo4e9dBQ",
  "key37": "2ZAVgG2KdnFfTW6aYhv4WCV4sdZJJy7juH1Jjj1y1Jtva3bp1VykQ8fB9khXaDkXJh8on6ZkaQDKuhqDes6sAnbs",
  "key38": "LZnjy4TPomne9pW9EbZytrgkQw8eB6yR24Ssh5Vgf8EBmzUc7R2JPyNjuw5zn6yECjtVMgresaQ1VA3UUeLLMs8",
  "key39": "2nDG8gWF3AQJviuKBcevQKSvXPHuPKXKngDJKPiWbKmLVPUfNygNkyZsPDE6hefb1RPgR42nk5AW7qBLzASSjY77"
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
