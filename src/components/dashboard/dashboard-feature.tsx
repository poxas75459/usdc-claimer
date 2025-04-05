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
    "3dCLnddmQEECsh5Nuv4YGxNq68erEaR67rVoFDasBPVkc26zEejzC2QX6Ar5VbFDJu3tWpq8TT4XBuyQnwTiU8so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h7Y3DrTbEuAX6kA4Uogb8sAFrdjonENDj4PaFGhg31HCmihiAe7gn7dXBu87LyyAvdpaZRUvXQoPTPi4F7bLpPd",
  "key1": "5AiTm9nbdyAemUdVnpVA8jHsiS5x2WnFpXtXb8g75oU3B1LJZxQndfMcaA242nED43zfGXXLmpa4GNkLLYFjrZh1",
  "key2": "2dVD8KaiBgsmUP7BU4haf3gbNMp95Yom9z8TYqBeA26TuEN3WFLgjNmCLQ1GQZqsPWfrTDzw8oG6vRznc4Uk93m2",
  "key3": "8tyHpvEqh1xC73hnJvXSZ6smzqX44o5mAAeE71d5upynPBkEde7zM4a3u7j9ZdccSQF6Rj27ihx14GKKwVTH1d9",
  "key4": "U1ZrW7wnNZPdJjELPyAtjaj87qeojc28DrdP42qjqxWjJ4ByWCeSL7UjTgYS6om6UX4ihdFk6JtqZDW2DFzQe7b",
  "key5": "5CbUUW2wfgdrCWTiX9zNoefrsLA6ai12C3TasJfj3jh71TxnjRLDDQEjf8bdwEfj2X6r6pLV2BsGdtrHADJvtHu3",
  "key6": "4UPiyxQJ7uTpu5N7ixb1rJJyLjWwZ6q1GKytwkDgDCxXirFXEpiQscwAR1GEbxWRzBwsrJPti6r3RDM7a3YYa8a",
  "key7": "RFVNWdtUKEMR95gCKJb66VK9Qr5hPYXJ7VLLwwNXefqxzymLAfAiAtS5wwyvkay4HXjLjoXroADe5Zdv3Nu8Dyq",
  "key8": "3ZaYpGmsDLmnExJUpp8CQdTit2cMbaGpCYNGpUQ6sdVjDDDmkH8uxFcrhx2nVo5usEiGcNXsEi5F96oMFcskKuJ7",
  "key9": "3rDQrNHCUrMXiJ3HMwY677S5wnxwuAZFnnF31X88nz1x91wXgBLvYYc4WDkaBNtbkbDQHhXZTwq4DpeNGneVsq9Q",
  "key10": "25dYkt1gVbaB2yXJyeoPCMxe4MNzF8Q84RxX9bU6au1czd6f4uaQqNX3oubXrsPTf9Us4pnVgJkZZ9jP87nvNn3J",
  "key11": "2gBkpveL8uphxerLGBtsKHoMEiNqhNomk36n6cMFtWAXUYiyWaLrQCS4t13716UzYTNL7gxEbrS9VtE1o2Cm26sN",
  "key12": "5i35ioytF9q8hC9e8H5wAhTJqcd7CRd7r7TLaKjBmqtGi2MyHz4Hr398YHa2niwuu5iPqPDMGaAUzbZdrtgghM3G",
  "key13": "2N7FUF522Mm6Uogdy9EpAPYXcR55t7EU95VmPcGDJ62TqPZNxFRwh7mJheR5q9BNctV6wqnBRwf7JCHYkTedsudQ",
  "key14": "5fmRNKwhsoa3NAUHroXkb52EaWJL4HFgF8ttZRFtpzUZCt1dBhhQoQwExddNWxqUGoNBdDKWjuYFUyMM6Z8RmdSU",
  "key15": "4QLd7J4zGxmQ6RwcBxGLCXMix61xFvc6k9peCtG36ZDfKhTfRjWqFpAXeWexyMTUMRCRRoqMwjerwh4dFo29LFNA",
  "key16": "5pXYnrxcWmJjoaVxSc7jYKd2YjqvRSBbvV4HTgMDcApBSTLcsDTxsj5Hu2VJn3ZBPi33Ky4s1Dk7Di4i7qtdAk4b",
  "key17": "xfserVhXhC8NeuMzJhWiwb5xXoFu6yeq2LGtrC9QQoQLyb1jTMmCg4r89QQh7mFD1L4y2d7VebWDtuLT4meTqSx",
  "key18": "5vxTL5iutR92S1fQT5QH64DXvTbGkM8qKSU8z1vnmEozLH97fvCrgfwTzTd1CSHSNkeUoRDcn9ef6Q7YSEGjXbTW",
  "key19": "5Q7QbSf3rLiKyzeP4qFPZABuvSBXa2EigtXzjRxbM4G2UdJtTMyXRVZic3pCkupnXWBDZoN28bPRYAxpzxpWpnCd",
  "key20": "4BiQJnZyC1PmzCMcHhSCsnW1NsRkFwZSBf2WTkcU6YWWKdQ7jbP5zKzJYQszfFutWMNReKzgJ8ku16wkFoHBZUav",
  "key21": "2Z9EwptEwEw1YgT1bGAaNy1Psgs4SGGE6oEerBMoPfFQu3nxZrAD2TGZ9DDKRkmPyxjUnbPBMx4uVeK6KVGejpPt",
  "key22": "4Gixnmr5JbDqyEgXRNBYSbxgrMGRAkMBuZCa3LY84PrtfnJiKyDYrmVjgWUEANCNe25JBuetbEYZKKWtgFvDDCh1",
  "key23": "23MgbFyBDJHbwkMEwcM54Z113dTZimbzNMXXChpvTvLacTXNUJTm6xXfzs4R6P6kgRhBqyNyoH3bsLXPno3xQHFA",
  "key24": "4jGa6kK2HjpBwod5kCQFDBswiKnn9oa1p4cx4xq7kpsR49UZV78cJZUHvzPM5XAcBMfBnFRfyuZxhVDv2yp5BBMV",
  "key25": "zxWDHdRJSMkTswrU1gTnYpLx9LD1nkQ7ofZLfgaTXKyavNFyW74CSWJ6SZUVxUJEHAhgVk7FdJGU8PmTEMMCTag"
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
