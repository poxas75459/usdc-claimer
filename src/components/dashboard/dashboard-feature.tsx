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
    "3gHRJqcGh8rjEyz526RV4KyWxB6vcxghXwUe8xX9QfMzXGHdBb7hgHBMDxcCtN6yoRPK279n3f4Ny3nAdrKdip1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQ9HvJtSneh1cPDiTwtrUche4C8pXAR3XESLVJ4tWYeUFD1BiQdkGyvyiXXgXX4aVbrRXDira9jBqcbbEajCRQA",
  "key1": "66aXvG7U1dBBdn5cnU4pWyr27UvgmumQtAUaWsqyaQ5EZbrmuyxmBxXHirfadq84voZjB6pVAb5TpGhoYNJAs9Rt",
  "key2": "ZpCSKSzj2iGbZ65kRN3apQ25ux1bd7gYDH2hL13V7t4WX4QRxTdtLT5KdRLCQQ4HyF69zaDoRLS4WctCMRQghW5",
  "key3": "4nWvm8wySM6nEE9A5NHqkFE5szJeqhTPS8Dmn2MZFp8BYRqT6RJ1US8z5bN2qtYzB2Y1ubHPm2oQFssyHCZQdMxh",
  "key4": "3HocnHazVR2Tc2Wwhzhe6MmEg5gwy14k389U9GvsxUT87Hiai5RHhamqDqEjtPZsGwS7rNU873Gfv5vidA9g9pAw",
  "key5": "5BBprtDCZoKhJtSrEJ9bZqqVmKJFjzHto3RdJ9XMtZgUdVLNNDZ71fPT2aFojEqXYH17SwRvfJTBbf5HSK31Cb51",
  "key6": "5DboDvYc9ytCZzu5X3B1J8u5rDLXiSEoaZycu9ALGpna7udiHRhUzhCSLMoHeA16fYbpEscrRTkoo62ReZKh4Jp2",
  "key7": "4RZTNoYqfheuAwQXYswf2QKobq3RYJNQ7sFQwJUFBP9iFqTnvm3b8WSzMaEnQ8cPWzYFBxgSk9ukEnb3v3Lr1cbW",
  "key8": "4UecpQ9yLoi4MRkn9iczds2JME1FQuQz2ZbytGuAyXeR4yN4t1ZUZPy4ps5ZEJGhNNtKyej3jqWtNcpWgcLxqta4",
  "key9": "uLtzj9ECFfcyErEyWqteSewTYY8VFjkR1rcjKw99QHQ8rKEJwk4kPuRSn3FyKFgxNbfVmFUQYDx3r31drxNumzj",
  "key10": "5ozFSPpNgtHyTPzJJRrGWxQzCdQabAACM2oxMeXSJnZKZastn3LCSgSrBZ9ifK5mWzHzPuei6cbvzviKbrDmGDTU",
  "key11": "ihEMZmMVCiotkRWUAtWmBogsUAPQR8xCGP7kgCDEuqyLjwqvJEDTJhEKxfsFSZ4ymoDraMdxWbyUsbdvktjGwNZ",
  "key12": "nDEzvS6P9e9E2PxhJKfNwrEB3UjfDgFBzpBaN9r69ChmD25MS7LSYe7nevGqc7aZPSmFg9hfBZSYJUVSbyk8TR1",
  "key13": "4yB9tgjVBT9fj2yZ7dMDaMsnPZ5rgzfU5oqnN9NG6QBW2VpteX8eEr5RpJ8dBUeucTacgctRp32WypJYq6B3v2Ge",
  "key14": "3RHTEx5f5zyroGKuvpd2w53xLXYaHJNJuaNkZBpH32ZLFD2vjSspizbDE46R9wU3BLDtNX9jR3Ep47TpzTd42bqg",
  "key15": "4X8GrCLtsNacA43tDRpYv4Bzcy4VpNyMZG6XnHYPW2co79BqacuAYYhUN1QHgQdQoFYhNBkjoNZsNye6ak29jhQM",
  "key16": "4ZAewA1PbbNKn7Civ7ufnvxbiUC5p1fK1uoNP7SufV8mZe38X9kPpbZzNt6GrduVouANnMaVUFMTo58zEyDUE5Fs",
  "key17": "5SgmEekZRLNyMHbTcfY2Zpos8CRed3EKGJ3SBF3RxeXT17rBXgR3aFA5vW6fsrUEJeSYoTn9Af6pXh3n9JZ4CWC",
  "key18": "4HPYHgjG1wpDnNpw87vbhfNhDQS5LhEwBE3pBewu2fJK5XqhrjzpbYimiF1W6VKkTizrQB8J6xYWy6acGjxgDvz9",
  "key19": "5tcXFnfXSHw2X63rARwdagz4agRopebUaL8mXR9DASoiZfCHDmYpppbAWnfSwAhWnUzjmudBwkQFhRH2ogGRAA3V",
  "key20": "2LJLU7uzPjeFLz8qMhto7TeU4yoMa1Mot8yvQDoSbtEfEQiw71BMDxmZeD3CzVGQBZA74oE42rDHLYwNsQY9dqGM",
  "key21": "1UwcXdxENcWjGyxGqSLyyUBKQrfFYjgg4MhUqmjUd8EyV1iJUxU3QvyYmFpvQt5nAcW4QDTdSkxTz8kDj8n2KGz",
  "key22": "3vGVSXNEV1oYN6vckVLw6tKiHSoMJC5rJvatn9SP8Jf5Bge2LZBoNTFAXAWGdyyJhBeqRkCjkH1zjzy2DpYhf9sR",
  "key23": "2kH7oJGWgsivQtHH68go147uLpATZmjw6GXh46LYX62uPn3zJsDCF98R7hnwsxiX6JACZ35TfXt8NiGjnTyiQgyF",
  "key24": "5dhSTsfonXiDev7Z7qzavvtbGBFyRqjC84y5frQQt1diUDBve3pnauDXG5wtPXdvua8dfKndA35buYfQwUdnjVtX",
  "key25": "3YMxm4mXfr9spaN3K1PkYEkUmto3Mt4iCAmdjbrKtbR1Hmjs8nXrdeADV1Ssx8XwCJ2c3ECR3Q1AFU1fNCgFtBsy",
  "key26": "2sQmYcc3ak4VS9zPU1HzvTrKPKB8ANHoufCorSmatttwBVWoyv5FTKfW66LafLB7fDFah3Gy7d28JEgiyhzsJ8qm",
  "key27": "4emCMkKPgXZX9gagAw72LN3bWiY4MjWmpKBXNNMuTSu1kxNLt1HCBTT7pJmpS2bPzsdLYzQvLXh2S9sSo323wb1V",
  "key28": "3CEncpNCCQF31WowNXkENHMbmTVwabESLGVqyfDziQ5YCkG5tKY1XuYL54QFo1eTM9R7nU2yvkriQ8N17j3eP9Za",
  "key29": "5i3FntWtxRbAgmsC9xGiTWTQ9jQZwP2ouJhXqDi3XzLUj4PvQbzTQEpjZyktE7mbKXbXyAFzbjKnhBp6Aq4LmP3V"
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
