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
    "JxPpweQYGcSHu1c2j2Sj3eQL4VfYSRz5FxUDStsmdcNS3UDFH3ucmwNgAkWupWqPL1NH26zWoQ8BgtA2q3MgFx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtgTJGY7QWrxErBjbvptXkUeD4srbxy5x9ktxwA5XAyjMVCnyS4DbzT6vC5HXt5ZePxDJYe8RuLbresjPQoCuCy",
  "key1": "2maSfRaRHaA573vR1cgPGBG49ztGqsGZRUSnkmDeNgmCd2KXG1Jj7h671HGMZm57hWU9yUDvLhKqzYDRZ8RvYcuV",
  "key2": "3hu9F1TTVcQFe3dZ78ZTWcmvX7NNTTgCtv1BdxAEs6kM6CXrGm8ZCnPHHNFAhtZZLzFC9DECWjhcbwWTkSLLcfsw",
  "key3": "3bxyULbAmpTb8Yc3Zsz3NBejYn65kad4TsDWaSEZpEmzsrpCVAevZ1kVNJgJB4Uoz7KtHXc94MYFgZVYHgGsaoKd",
  "key4": "44eNHgaZbx3iG23xixqTAX5wYiwzwWXfsSL43RM4T9qsEp26vdHCJoKHGMkeCfcDVYb3m5cGYu2UhGeEYf76ugxR",
  "key5": "4RvdWGt2aqVBS2yG13nSoRa9KAgvxQTGuPC2Efm7iC2KDJBteDeKej4fzYHXgVSyneKdewpjWzsFQY3UcxFg3KMb",
  "key6": "DifWmr1xUFMG2hZEcqsxqY9qyJngouPhyNyRRPr4UStnoarjjLDxyhvtgf17YCP55wdLDNXgDdycqvbzvQozZcJ",
  "key7": "ECyDHi4fYm8edr5zzST2N7eBZ9hRi6idKcfdgPFBxoUg5jbUKsdd3ecnW4ofsLRNMqrEVEBt8yDuXRJtbo26k1Y",
  "key8": "5qzf6CpMMD1TvBkgyBqBujWJHw9DLNjyydEQCp3fKWM9NkgNWKHfeA2Vz3X45xtTM4C4LtaN8CY6wdz1vAie5RK2",
  "key9": "3ju8EmGP1dt7AUBbpAsJjdFDVyU2qsvx1mFky2CrYhvhwwceMFaMym7YdapZjuWdKc8xMLKfkMPfKgMXqzwA5BcQ",
  "key10": "Vp5maV7HaERucNmGhe5yZZZLc28oj16tuXJGcHYPERnYXMoJn5jWM1QVH27oTUnPeLDkC9q1h2n9F5cLT618boK",
  "key11": "4b5t2kyjxQFSNUBgiLC4UQxtJ45HisgGZbQN6KPJifYxstpEhPomm2RvQ9cJ9ivUW75Yek3xaU6doN9jH4MhhwBP",
  "key12": "3tX6Fj4NrX4vK9vERk5aftHc6UZTZRyFzbkW9cUyVmg5kMPS4EVxh81UAq1wNSC7r4emXL1gPAzMtuUiet6gwaJ3",
  "key13": "4tkNmqFdYqdCDCXY8D7PAb5NpHZaXytgLP7f6ye8bRkTtnNVeYjYjuGCJ5uPftFzreZNMQrFPGBxRhnmHmJFa6gD",
  "key14": "636D6ZfPwMc92XKQaoRVZiZUtAH1ojVSVn41c3fR1Xj7GYmvGtd5FfzZjXXwrSkgcB2oPfj1UMw5tFnsQ9uRDPC5",
  "key15": "3yUupZZim72fLsJYxJXJs4gqdJvFVrM1ZGp7U5SJTjXKAuVS1FyL6ULNyhFcYGHFwY8VD3xULnmEgYxHM6DC6Uee",
  "key16": "3rBUYsRn5BkWudptqMiEuPTofmhPhMgEQ1ww589p66ujP9Cx8rhfcDVbiHyJtgi5Xv9u87eGGXqrySv7WBKmfoe",
  "key17": "3biDmCurxJq1aWRKvZ8F2fSQ8gpFqHr4SKUe34kKNPyQqBhJ5AP8cVj2vm277UDrB4ck3vYmm11zVsBeKQNhoLyT",
  "key18": "4PB9Jne23v13mZ7TVtSevarg3zyQ9uK7Ctk6CpEmokXKuFrRwLAYh9QDBjF29pMay6RRRsb8YL4N7BtSjRe81TYe",
  "key19": "Lq41wq1j5CE48XCudqfZSojQ3HGvCJxFWkWVno69fLX6ECSECaAv796mafovqfC63cJTNA6Z13Akr8iqLkDFQYP",
  "key20": "44bLHG5Xmzvj1s7QD6YtL7ujuKxdRquRD3ALLk6NhA5Y5CQwPZ8NGCFWS8hMC9ZrbndnhVHSXcrNEdoa3xd2mehG",
  "key21": "5fo7ybJiAUNTSuXZgWurCGRnnRUdtcnjSqyGGRCSBQrPSikyUDBAJnHb6QYdQuStrWUHs7pMdMBjPU8xRWKVcMr6",
  "key22": "5heg57gdaNToLpTAfGyqrYqVEb8MiMFp6SZv4rmYUWftWALL4eLy2jT6ttiUy5ejqioPc8VTgvTs117sYqhtucH1",
  "key23": "2Yp5j9ZD2i5iLoBG8ZGMWVKHQdJQFTeevZCivwVzUVW2cxaggi57AU71UXHYU43H5fV7bPoTZRd7cc9UceLesuUk",
  "key24": "34eJopi2E7Y5ebUbhWJUtXWR68SnmwMHoY7DH8PXuDU6ALnQ7Q1GVUFbkq4x6x2QqRFxDBMaQyrqsBcXnCmvqYSR",
  "key25": "wWAMskLnBc9dXqoyRhEzMye2YfffzTRhNBTaX3v6ArKSCPhNnzTqQyzrjR9u8nT5LdrAZMQJRJfHjYWZFwNWMyJ",
  "key26": "2RjSWUCd6tZ8UkGDwoWeaU4srSfRDLjsGJ159CbG8zFAh1mKvHfV17p6g2ZDkmuPcPKBUkZNLd2SjdthPC5P73pp",
  "key27": "4Aay9isyNh7q58YgzwQUnBBVCRL97fNaosFDVsCGNRUCMf93FNZKyMyaQp3WBxjkepr4rezea5F3WDX9iYkiiEVM",
  "key28": "AStPxpstLyYJVpptsms3y9L3HpotHZnvnYafcKNwcfzfkDvojjZpEnuEK9Ctg4iSKNhN44adFUAXcdeVrdR3uQE",
  "key29": "RsQREu9tW7xGAjiGobB1XTJGgd84aUkED5ZFUBmERQKqkNCcjNGCGgGZVtCo37Yh6gCH9GTCDpAeeu9GuZnzeNp",
  "key30": "2pxx949CJWVcK2uQ47g66wq1SGFNceyh52tefwHrLCCF5Cpqr77KYyYV7EPHqzzfPm2Fb6MN3kMKkidVWZKXm65p",
  "key31": "2tEHCQtLYu4cctdsbz6KVWnewYvqCkujVJ2UZVwwC6cNeeLwjEFguz1nQ3cDqvLrWfoT55at98TVP7LrFusgwBgU",
  "key32": "21uXc2o9Msjx4YhRSvwEGxtKN2DmiTS2N7xp3YSzihv5oFokWJCbsaRdJUNAbbSF4NpYH7Lo7dXu8gJ1rpf4oQep",
  "key33": "3t74iBUKY5DKNETFA4iKBrGVdENM5JBC36k2e48M4PLSBWfhdrjVadqA9zvGRu4crR9KEiZ1f3T5Ld3kiLgXrezF",
  "key34": "3JZkmAwPGh8dFmnp1dVoUgRVTSVcZaEjdheNT15cCtG3zPiA7pxK9LFSwZzjsVg3znZcgS8YV5SpjjF5RzSYzmf4",
  "key35": "5PvZZFTYwmJ6tAGpUDTPqTeJqTphuY3w4RA7UcaYSAmWyXX3EZFspqt3aokoq4KnJg5WB5L27kZbYF4XofyXMx9Q",
  "key36": "3PLNUw8cSsJSgoMPDsrwJ9mg8psvZMHxZpqMsXkB8jUq2qjXDPcXvwE8Ahc6418kiu8koZ8ybBAhry2pTZTjCQG6",
  "key37": "35bYQANqhyLHzzFkFJNdZ6QKH5oFyVVmca1UqjhZJB1LM4CBnUwBX4KAwb4N9ffKNTzNYwUnM9Vs9JkyUHMiqwti",
  "key38": "4o3YoiitBgY2gUyzvrgn58vfiu4EuxFAXyyF98r9aZKJKfvDVya9sq6AMM99Ti2jryXeqsDMdDfcVV1oEbC2XJ6P",
  "key39": "uEJoJ1NrdhDwtKiLvhgBoruXdx5Rzz5snNcAigsYWjWnaDGpkBog8cUDN7CfazvZk5zZKYgfhkQjK69cccfCTdF",
  "key40": "2Pw8hMVqEXbCvQA15V8XY2BW82xbA7anNZBEme5s6dK664ZgPofNKdVdPuq8jxbFzae9Z2T7ZuF8nZWTtpkDuKnt",
  "key41": "5nggYdJ11iHJ5DtRrsUzPPrUNi9wLdc51syx6pJU6j835WA5vU97XwhYB88GBCEGc3UsWCDZjmERmmYcvS22Qgne",
  "key42": "3SZ9EuuN8ExqsbRB5oH9Hr5qoJpxPuruJ3yTQLz3WqwbmPLaazC9yEeTe2rDAHT3JbQ68gkCBQru9nYHvPB49VdM",
  "key43": "5hBSSChVAZTTiC6cr5hV8LiiLRTAwF8cTMiFCDeAwU455UrFNPjMh6YPogveBJuSNuH2CKJzht7YRvFM4SjzwyUR",
  "key44": "3Qbph9W9tEdZyqirmMGt355z8QGREJDgeFg1Bcd6k33Yqxh8LN8LUL2HvDfx9WsjwQoCxJ6JTCVUe7VKw6EpWRfd",
  "key45": "59ckGtZ1mMyQeJFc9biHwXvE5pC4TjtqVDkwHa37KKKrDd5mmd4Gik5XsZpGYXzfNyX8QiFAa7xmdp6mmxoksuTX"
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
