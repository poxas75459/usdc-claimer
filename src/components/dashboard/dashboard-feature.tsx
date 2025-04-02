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
    "2ywdhDTRwUob7xvjXVjKC1jHFEerkKRpR3pMoKPRP72in293Ko2wgVjyFN4gTdjUjW4ikMKroWawZezucTw8xZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYCUA25kc5L5tDiQwPxvrwvjkEB6Dop93UCdbERXFikxrzYiquUYuo6Lqw9D5R9BteFPJAnEUU4xXQ531bFHM81",
  "key1": "5o9UxfSAjWgSvktuw5H6VAV8BkDoWpGencVDjMYHi4EETPyqSdgLTxwwRGhsrvSeWNXcCtjKXdQ3Ro6dMQ59KiL3",
  "key2": "5mFQGG78E2gGie3HuguEtfKoouzBUufQBMwkAXV3d8RfxaAksR7p1mgYJS6jsmmtQBPR6As7pH2rkMqquosnc2hC",
  "key3": "5Mr3ey9aiUpQX6CQq9vrK9U9CPgEjp8x1dzdvi7ixJpWQV7kcWBT8SdgKUMpi7omLEbZaW5M3B6jp2vNFpoEXw8g",
  "key4": "4otLhuDAL5YJptzJtDoFseXJdnRWmbMmfHf2hhpTBB2qJn5HhN14SajokZbju5TRF48hZr8bd2aNu6Lurt936vfS",
  "key5": "65PWvLik6MemLCgHPTTd2heFZbHJJ8NjRkFQ5cQX1UNkW4epuGxv5psspmZNHmyuKBYwaYCU9euTGXDiUW7MwMTe",
  "key6": "2vD19tWHFQLN7bf4HcVvKiL1n6hysrsRnXXTod2kqyTqiQMF7LYQE8yYZ9t9SxgpgSH3usgGrJPTzntJED3A8nrW",
  "key7": "3uPb6goBiLp9mUSXYYX35QdjydDb5d5GcnA4EKuR7kaNwhiVQL46NkkJxGnrp2k7yWcacHaqt4Lpd5HVBf9Cngvp",
  "key8": "4HyrJA22VyQhLZGcwjGdKzG81dXLNUAs9Ztd4EN7tTaCyXdiuH1L8EiipDhPzAQAcPJYVuxFkyoCf5DXHz3C5VgC",
  "key9": "3p19B6ZiwDRfEYc1MvYR92xj4MrMQjFzQs2NTfBKFmw4T7syFWKQ4zWKEijUyD8g37zUUTfLvsRkkvyiGmdNwAoV",
  "key10": "ZvF2Jerd5nYRSHj9Tmbw6TrMDQt5hhoQbTpBUUxU3oWtwiZCdntpjeja8JPR7WZVTp5fKkqRyohSr6T2cEJvg1e",
  "key11": "r5WqJnB9BR9M9r2CZPCj17uvsqUJxh86kqnhyMR9EYRnzVqE7cmpzm37qYTCdc4ctrzetshVeiS5uUPxW2oRYMd",
  "key12": "2mY8mqPNiyNS9HgBZYVvaDinyrdRYQ52h9M8S8efY8HyT4SASDGkiDhN4PXTDeh7uvjyPY2Y2JNSdTpiZEmcRe7d",
  "key13": "27xyD81MGGCsEZh2ejepdapEpTy2vcEDYxSw9xrmAzwqZkULBUm7UYNbZbE3yx6kR7t7ebN3fi38iYKGUnwQCpVo",
  "key14": "3URZorfkczoPrUCYnyiEK8vdNQyrrFCvAimykUFMnvPKpVi2y3cJmPTJSnCLn6sSCNW7m4PyD3sEN2ok5gCivt4U",
  "key15": "2tXmkrwY9wsqj2xBGdUrX15tHZJkntK3Rsak222XFE9pQWAtkVmwb6rTrxmzpy5aHyqvmS7qGdk2JxzQHdewo3qq",
  "key16": "57dYFvsAb6wrfriA3snu72Ew1ymdt89muz8pLfxPPybi41jhft4seE7javh6vQywTALycD4cQixBEwWbrf4dexTw",
  "key17": "2B8ybVucti1UW2w1w7uY4HTaqQ7kMLnXMFL7YD6ifcSFo76aQpgR8pWGXGgB673e5J8eCUZYcCWB2KgQmD83cjTA",
  "key18": "3izFMbXVd9mzcHQMewM7LnKo3PJYQSAHv8eu4UpQqFrd4LN1BT1VGEMvcu6J6pnPLcYRMGKfRSsVxiNTCFR7TiNv",
  "key19": "63dyhbDEY4BSrNVD2eG4QCuqMRyoMUbhG4vKDhg6RbhE8AcpMFdRLkQ1KM4J8hKonnBZZkAs5RBgGTo1EKBQYdaK",
  "key20": "TMFPyizHk5K4MeZiAHaX9sCDxCGoQXoEonkSnSZoDiPxXbZ7q4ai47aRGutLujS2JNtzmG7xPgpDNVx635QEZPD",
  "key21": "2wbaimbF8mb6AE4KhoEA7nw2s4tqDHfbvz3dahGezSkKvAwxGLqEjmp91Fvqk5Gka6J5iu4zJEhjUfMmAAqdWq4L",
  "key22": "2dAYFCc18A7wSwBcnzo7E8ogNCScowsLu4jRgATCseGxihsDVkKiSGebPTwuZ8r7QU2RLJSFtWD6H2nj1iFMWRsL",
  "key23": "4p7vdqdchQhAm4swb1XsynTP3vUN15b1fSwD9yNeWNt8WAuSbYicnL4Y5vN8WPPVfU3z3W7UdKa5mVAF7pjg9Ypx",
  "key24": "47tN78tB9BhkSTHTfd87wZLoGgb6mFwvNA4SVFtwkjBMERKJWrQa7DWx9Seks6h13xdLJwiTFgBC7X1TVAAxMwJg",
  "key25": "2MCBMai9YMpHZBWxC8rBDiA7r4axsTjmDzu8uyGoH6CPGWpVZr2WU3GafXhFxB2kcW1ejPwbxjP1yQPkij7NsKEw",
  "key26": "37jFmyqczRRUgs2cPqV1W7uwXPuqGqDT6ErosT3aX9btWQebg7moZBkHr7hxYpF2u8XbGdFxSzCokCWpqv8DxCAC",
  "key27": "5qZYq2ywpo13vAaVQhPu4yK1tZgeHjw3oWd3Aajqd3PSFD9ZJT8HN25V2k6nxviSTbTCfKE7nXGVJcF8gHNi3CmU",
  "key28": "3NpuRmZxidMXgcFf6ks9YGfdpYA9QyKnTFadiw7ka7W3Ki2BQVe3ydiQEUnrLBG2uYn56fWSNxGcmuMJDo7Vf6UA",
  "key29": "7kxSXAXaS755MUrvsVR2V1xRUNoexk7RG8ZNgLA2pAnJUB57MCtCPW79vAiFWSUqyEVdTxSnHJ4nz9XSWywFGzB",
  "key30": "612KWBrHmjEYYRiPDntH3z1JjZ5THy4PFpPZVHxWJxXZdY1MWT4X4Htc4LvQ1aytqNjLGAdjNBu1AToeWtE76CN6",
  "key31": "xdT3f6BFw5Sr6D7gqjwgKzhvLwGsPZjRpfsAjWsYiQps1dwxWqPqyTDhwF3nA6dLs7PkquRj2TUEtsSgKVxFbYQ",
  "key32": "3DrMw1SAUpgYksxiMwDp3ioZ5LmFHkdna1yyor2bq4fYRJ83uwk2NUHDAxZyDDtaMEZVrGg6cyDEnH6pFKgUYm4g",
  "key33": "2ZcsMiutcQwTMooDXPg1PJ7RUjpGz8qmT8DtywGujXdFwY6V88T2YmZAFXh6DpwZthJA7fHg2n2RZbd2pPHfqo41",
  "key34": "2hFbXQG1LNFTWqaRmTN2LGLh7jWtDLaUHFhwAhXmRFqZ695SVahQk5dvqVG2BTDccKUYqiipJQe3F2xLzTAUa22j",
  "key35": "4nvXh2pqWJrXU5Ypd3dmoLskapjCG7Bjhs7KVs4GDExzW9yuQZiBge5vN6VMPLumfRugq2LsFFU2hkJwKdQmVRVQ",
  "key36": "4fd7wSQp81D1VizugPUxGvogc6yqCgRUn81ww6Bm8jjQndyFeMTsqqbokaXuHTEuQQB7aDd2FMXaXcJyUBQ6ArL4",
  "key37": "49dXu1mQ2K9iDQhz7MQEkBWj4LcGjhPhQr8C3u1wm1MJYYbfDxbwRtYDNsgoQMRY49dc1YSQcP4P9m96yVS9GgD7",
  "key38": "354CbTNEqaMRoxZuSiMEZNPgCUsCPTFmAPDW4xFoLV5E54NoNzsQo17gZqF6HrA9MYzpo196zeHQKijyMRpZkcJ9",
  "key39": "atSm2aoTpJwXgj9K67GrLaLoYSguCHAJTHUNaAEqqHu94aSdLdB1EWpZf45eKqwrLiasVXJzdFjjwfBKZsmksYw",
  "key40": "32bRLhiNqnSGQKNnQuSm1vE62yZcNzstB9CCjLbsBS7SAB2E8aWkm9dw5derru9abHzWoQY64RQcprvyXzf2ARdY"
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
