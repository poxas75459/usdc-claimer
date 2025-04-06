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
    "2eDqAR5gtmk1CQsQ566eU6PG7956nw89uYtoEjYsqfZ6pM1dZPDiJ1oWVYG9zjnqGMziA6EqHvVgyEseSmXYgu6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4QRYBdYFBmboufWEZy5Aw9aBPqECpCRWgJTXkFGtwpbeYUVct5towgiAqUEm3QS1nPxKgfTvLGVa5W4Dueujqs",
  "key1": "3CXTFJPDtJ851PbjhmNvnrE1ysnpx2YmX4EALBkBWk2Wncdv61SGcBL7RTh6vmdNvVmgyoTKYnF5wTR4oWv5zM6C",
  "key2": "MMq5uZPPqYjtqjSngz14xBKPtFu4pqCgAC9RbLVR6daFWWNUPRxqDMT46tR3JYFWkYVwMsro5eJRJ9EsjGofQYa",
  "key3": "5nVCh27KJWhfr47pwaaUPYMWa8nJaAWQkkv5B9chKDqN2Ttpn2iYHcPGM3JrdtSZZicYGx62btkHPrMNoqjtW63u",
  "key4": "2nkGzQ2P1KScTtGc1G2bMABmKb3QEmDbh7NFGFHn5U68j2CgnbziStRaK6SDhyCuWqmNCx5Wb9Zy6txnKY51sEZP",
  "key5": "4XXVwL6JJeoWqgXKWDd9RkWYkuzbDfDRpMfXDHUJCPif6LqVPaxGRUuEUmVDfMb9d2YMTAAw43syJXoU8LgHN9yv",
  "key6": "3vg8u16sbyrBamaJwdrkiyRNNPsY8Czd87GYpP3jFXzhX64deqoYuVxkeLp6X7F7qukWeJPFgV8xjnGbD6hsVVCZ",
  "key7": "65J4qY8CDewGhoHfgopd1zBjmGVwDxGMqJVAyuihVzNPGKVTVDSemxoATL8Nr2wBX9M2qYqGFQb1Y7kBdPNjdPPP",
  "key8": "5aRZ764EB86wN53GC9eTeJR8Bdb1FLuT8PUEFBReukdhCZUY6oEAfCgxf7ZagFV88UcfyTFrHgpvT5j8KGeBYzCC",
  "key9": "4tTqQMULVJQ1JkVE7q5hzNWK57w4b88cotDHwe61xdKXtD7iFkmGxCSKuQMnr9gfD6QSYe6KRiDhLKcRFSaedwWu",
  "key10": "2CLdCHbe4GbKiqiYPgou8ndFKZF38Xpk3S4b7S1aDRJY1qmsXNarBAMSCXDzyrP3Ym95xNAPCYVuRFRMtkN9vCZr",
  "key11": "44YzQoPfQBV9Nv2bJXHoq5cNVH78SzagG5EDK4aT6pEA7c7pKjML8PzMUdxq3wDQJAHyn9vGrhBy9Ps9gUiN2EKp",
  "key12": "47bTjSxxxeG4DrgTmTKMgfMXvrUirtG8jG6bXnzRZtqi52qRgdSrfREfJBvYvf3513cx3M4fQmn1K1ymLqBw5q2G",
  "key13": "4Eq3V5YYReVDpChTKCSQf6EQyvrSqmgbVNDo9ci6WWLQGm7pH34he7sf99wBattJnCbWF4eZvLe8SnXrPN6AYVqN",
  "key14": "3kP66Sx96XYnTaqFjgNQuEma2Ct3HLWcmbkxXCvX5Ah43QLKDoSXrresKdJ8fJe3AGPBNT1dPFpxr3mAGfp5MmDn",
  "key15": "3KYh9FzWxM2HPu1zh1jZceACTxagtJu6bn4wXjTyeFBYRNU69Mv5sxcDCf9j55d5DJyU7izwB3CADcwsVhqRLgbY",
  "key16": "9ycZBvrbL4yjJeVr7fhBTJ15UjtWCXRwX3PuMuSAycyRjQgvrb5HrmaLco1D5VK6GoUz2tU8K5r3FU5NJYyU78v",
  "key17": "61QRY7m32ryaFMa3KRse5xGFQTB5aG2ij2PRb18JyMpRqNUTicxexHBsNHSXUTBiefmxHHCi7zAssLnynNUcRtka",
  "key18": "4ncPEWy9b9ttSN6dHB1fvWW4Fh3bcWfKXmuKNRv9s1ewFRR1fbZbyW24ex2yU9r5FWEsnGwN1A9FtXAEtXMZiy88",
  "key19": "4UNgp9wAZmanpD19wRtY1iGvaTVSFemxX59G8A4LYUaXnB2bxBybFdXo6UCavUeb2EQWgYL2Z7jiGAtP6BwfTrh9",
  "key20": "WvBJyDFb8sqBihh9darXeQVg9HpZUAfZwy1MsEkkiTjBq8Cg8BetmrDSqPtLqB2tQMHYk5QehXM2dW2QNGuNTV9",
  "key21": "5PmwA2Y75QfxTcbAyEMMvM19uj9V6vqvVmd6QmQWQZG5hASR5bMeyQadHNddZ3hJ24vF4EmgkUKW8F7LySZhNgHi",
  "key22": "4UEWs2z9fBArW18iKZRGzvq1kRQiP51ACNBZ2qn724n4esQvM1Np6cCbJhaAGsHkprcsw33UoYir8oG6ZUUPGMMA",
  "key23": "4kzyYHr4f144vPHVhygQqGQ25AvZgPAWmJXjckQQFfqDMPzoFJ4EaXjzYALDwUCTpD1G1CJUdVdX9epENqSnC8kM",
  "key24": "3KW6t5DqB9tDLN6eBn3ARAU3qSyxQvy9iop1x22x6k3YZ3UjjD9C9mqYdifek7ivdrR5kQ6ci9WTyMkn6ZFNw6nG",
  "key25": "5DLyB7ys5w9GTJGKWLLwDKejBG8Ff4JcA3QvsPuz9CuVezJvvX1K4PyZ63qdhdsTmSuVQ9iDywmZrM5AYbxhVtMm",
  "key26": "4gFCFPLuJbMExtHhmb8tQi8KikRtSNDB4rcwAqtnPskGcNYvCgx3ghpSAqehgvsauW5uyoXwsuKNL82dw7K2nTh2",
  "key27": "26oRUodFeRydbW9wgUr7qvrQM3EbGNLfJkc945S8qyEWbvGFPBjWmrq6xRgHBEEzttQsv5ME9Y3uNzEtUNw8uEUk",
  "key28": "KTD1Q5MJXkqeYNHcqRNYCGayHreRVA4ztQS6fbptRSkryRtPYTR4Hcu5maJuZdtG62aBfEUGfpXULDr4jj2KX5i",
  "key29": "5thU4khox8DCDrPm5YvE3fLWnZLjFjmwEYjAWZsfBht6zBPQVbLqoik5DJMqSdegaLWadAgtz6i3LuQKpTv9ttRm",
  "key30": "2i3vSeS24YpSjxfAd8es2zcBvyfKRJcvBfiM8h527pqt6oetJsXYAtPawnwnfezbe6kuNWSxQKfuKboFtKXvgz3T",
  "key31": "4EDeKYTxALGvRhGszL1nTkcmdnPnqVRuC3wSqHinxGBTorNofrAoDD99UktPmHFP6UaTkJQbQ3a3YF6a1SWK7KbH",
  "key32": "5rYSTENgZiUmGh6pxYncVBF3PhTrtaw28JxqiYSJe4kLhadPhmmc9YsqQ6ekdNKNf1rWijZBAz4kmTcCht728sLS"
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
