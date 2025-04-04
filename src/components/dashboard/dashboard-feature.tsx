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
    "2sjBNQWNYVJ48qQLr58Et5VsiVB4SPtF5xJQ4WF6J3NctHH8N18duykMkpELceJSveQDELjqFXKKCaWZMCsvzY7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dj3FiH8vT26S9y68cyRkrzdgD9fZMLS9ZhwQQV95MUFZThhQ8hdFqGMvAk12xo3LPhekab8UVzzE9Xe6vmHRqdn",
  "key1": "2g1gGKCqm2NW2LWUi9UDfWwpQWididabVhdiyZCdf4zpECgagZFD8KYEr5sS8VcdNNZspKF4QmqkTqvV8MdvQKnc",
  "key2": "2tEJdnNCchAwCi5zTx4JxuW4Bm8wkunKD6GJHPDdZboKA77ppfuK4oixysZvyQ2SqXu2hisdLfPheBYXp6Kkuo7u",
  "key3": "4Yff4rfrYBNpWnK2SSJSfEG9CDXfztNEcPWUrJ7dyKukTw1v1MnkbZPBCReaPGNNDYwRNCu5cTDr8iZrv8orTqTz",
  "key4": "u4Evi6N89yxnE31PmsTqJXrn5u3xJyorgZYDQR1wWrE9gCsRQWBuiCSEXGMQn9FtUZxsQbRidfgiKVAxfijxmN4",
  "key5": "5w7t5u9xxkJ2fNLwwu51KfpSyRVc2vc54JxsVZyfYyMNEmtrSnSUT3rDsuRZaoWp4sRRaZeMa6Cz5F6Zar2rDfxS",
  "key6": "58FKcWVkHv5JQBoPbcBj8ozhmZ7tevpXEzeU62jurMP1Vs7Lqa7iTFeVtPpN9PzS5EkFfR1PFuxuVtTuQGJMNhtt",
  "key7": "3ucccLxHL6DYFDP2UUpJyhnrgYAXeNaxomTCFic8Xi14Q7bNjHruiHFA5behuY9gc6vKz8JLPrZyak9JcRmcxCPY",
  "key8": "3gDgMWevfsXeoMn5iWmdruXRGUi6BuTXkLYqq4zwVesFwiwEbYes2RrXeGtfzJPzFZ26zwn9JfQK2BR7rYhAJcYV",
  "key9": "4CoqPdeML3dPNuA2Zh5q8BwvpNgjSmufwAG4gsnuAHG8tGmSLsE7nPu2isNfqXEMS8PP57EZkbAkb3FJkSzDDrSr",
  "key10": "65bs5Yt9XJzdFiytVF28gCrbxdcyM8MpPczoT926tqEeFmiQhorgfyN3STPNKLjTJQYuUyeQLjRToPd5vit4qonq",
  "key11": "25RpuVjFCuLRcJ883Mmo9Tz9oJkMczpzhDGS6nAyanfQJwWWpeaxnKKFxcNopbbZsZn9DURa3wB5kiyNc246XMim",
  "key12": "26Cy1JkZQUWwFneY7UArvswppDPS1BktawNzePtA9rDdhLQBfdSHDYs4LXdTzTdUn6Xd2wamEmQLpEcqGztLtrhi",
  "key13": "2CQgxNi1A5JDgfTknAa2PQhzMBktFiWdist7jq2T5xHdYWpfRLESnPJh1mmT6pZDgSbMDQKdcVYbZGMz3RXqRhMw",
  "key14": "2TQX7efwtU99T5CfBNnPcBYBVC3KYwek48ZVxCEhAQimM5cm6StiuLEmBYezDzmoGtrWhUGTr7z2mZ2DM7yShAWK",
  "key15": "JH8wz2kHxJyiiHgoibZVEkuGycufr9svMQKyUBbDd3yAbFE5xMNxPjX1GWWrvNYTJzrKvTZpnEiDwSfhLVJ54ek",
  "key16": "2iGRkVcoeDk7QMmYZjcrJ6YE9gtpGs2UCZ7Tteog9NE8TGDjKVuzjRpRFYwhQY6WzYrY3pZMU7MytWoL1KagsJg1",
  "key17": "5eP8Zj93M7oXmiLJz6phNNERrCuqzr3X4HQpbgse5zSyqpi9yQRcguSEPQNPZmdd5M2PCgvz6AoeSiZM4SPHV5eq",
  "key18": "EGv1JvPDVdq5Jacvy9K73UZGEcHB5pwWCX1yZALgSdVqks94p5Z6hhK7AcvDNrcSbeUWRP3dYmVesbLM3Ccizqy",
  "key19": "5tHxyZtEuwU83VRxtJhbgSTk57F8LwHc94Lg7sK26ELh4jXC1JWfbmMqxb55o4AFypzGbZa2FnsaDGazxFWm4XJ5",
  "key20": "56RKjYhAEFenLiApfi4zu79hPhbyTbzQvyny9b3oYagMQDyTEXy4Q42b56Fi9gf9B4tsUYoAYBrZzkGcEK2KLjaw",
  "key21": "3NVe9Rs8aytaXTzzsa99gcdVe6GWQ2cd1hH7axHXUfGWSp6PKZeiBBzNuBdFV8GUCfHbRt15xQxpe7U62FatE5v9",
  "key22": "2NZXyESBxgZALbHEmyi36Nz5xdAcPWuLzvbo47e5WQbXyWpTgwUPT9QAXC9rhoCyCrrY4jmD9WgrshvEXP7WffZ9",
  "key23": "4UH9uGBdKWQEU5gYPXLyJq6usMJbBQQf38D6kk5KxStuM1oEXreKvjGFSEZLAtUbTtJKX3tkHgeNhAZpzcej26jy",
  "key24": "66Ar6HMapJS2hm7cRMaUhcYXdgcffyVxhrRS42JgSXc93bLGCDLdFeuTbnCJ8XKDGRdfHsnEQp9gW6gkZkCkWfBw",
  "key25": "3mCWShZpH2XwCZ7rqpinsxbvDKfM9FhyifraFyBhb9yxEvLAr6DTJJVuZn7jGXm59nzkdD5ju9yDpG1c63PArFzT",
  "key26": "3edGRABqWUQ5AjnuBzvGmfbTBWaFBP8zq1b1wobULLvSFVuupsHDbBpNCTnxTRdGDpfF1YYCJh3xPrmu2PPGxUKZ",
  "key27": "2Dn4ZAWV9W4oUMCgidi2m3hFSfW1XrYGkzaQQAAoxjkFZuTvoVUbPds2MGfAc84mvTWQF6vXVHwF9EtPaJajzpaT",
  "key28": "1wsHi3UYFdZkieqhw21dGhuQDcRwHXE4mMiERzAFhNcXiWCrXWm4gn3ghDf6yeRWMJTqtJuYRCkuWVGr5vqQxcF",
  "key29": "5U376pstWPSrByyAvVkMdewxmZXLEwJ9VGE2tdtbn6RzoaY9b2g3u1TZHLEdkT4csguhmtG36BN5nVjDh1WzKZQY",
  "key30": "B7Uej1445RiYEEXujTfbj4xndHjXuKvEDMh9yntYpe8DXFUUnVX3iMay4oV3Bjga8TXTP5MdtRJ8Qb8Z34PTwHm",
  "key31": "gWTCSijri5tpG8myfBZ2MQs1SAZBjnGNwD8qZjnbN2TY5r5ChWPtJMRBfQnMgLz8ky4mrNhVhon946fovmihvtX",
  "key32": "2aEN66Hdu1GCDRfEFwjfEZXCppY5JHqRHsWyXaeJRc8KFZ9F58XPfN5wRM4uPqfcg2F8yr5LHqyohVjHnAKhcm2b",
  "key33": "2wKA1tFNHjdQL99UjFktTauP6HVGPjvatGDNzgU6zvCvzwBVgag4ChBCdMLZ6A3jZhxRhD2aEVTFHaBVLVg7TVNs",
  "key34": "5ve85cMXTYRUgdGcqUke4guP444Us9qRNMXpRFJ7CaDFrXnG9tWoJY2GS3HDuUjpuSaTcLz6pkBorJG4zfKLQ8T1"
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
