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
    "51o83TUes7wWuNjdKgj3udyX1fx86FkNH9sX9TnjtUGB9i3rPmJVtMfqnzm8g4NdLuCkYxiQ2LBhTsUuW1HhuvJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrVQQYcbTJioLkZXxUYafdVhkr6eKDcNWrTSHzLCGiY5iVksM122f8QZA2foycHwfJzc1FX33rRnZKYVxjdYSPt",
  "key1": "2yNzJFfz3N53tR7m8tCabaMHNK8KK16GZNmUZV4dHLS5BiC45xRbeAZeGBKe6wQWQMeRy7xPzJJNvkeSsKJ3rpXM",
  "key2": "uVtsiTzLXQaKVjvVgXVZXBg7Pcpft9WdcBoYYmXXQd4RZ6v9sVmuwRCHgWziHBXWsV7eETFPTHnDoHmSoH7imnY",
  "key3": "4rhgDYi1NLTCmJ4Pnse2TV1JmjfrEjRqqJn7VG9Ypdx8LtmsnhULFAUvSsfxT3BLs3bMq7DQiDnQMGouT1D4JuZr",
  "key4": "2dpghsDdG77AmfbocrF7GDEu3ENSDASuboS6fWKm89Z4ogUVkb8azAfWJA29cqLfdi3vPZ9XQifL8jRnq4CG3fr5",
  "key5": "cYCmnvVbYtT5icNXt22LN1qEf5UKCJz6wDragQGLAi22L9vxD4MgwrhC6ybkFJBV2M6FFNbrgpWvzcJFGPNgA4C",
  "key6": "2LjrK1UgczKMXD9ohxKWTNUvtUHCPuK9LZ2YiUeCC2nJNcRkved5nKmykmec6p3W8GKMaKU8FvGmPWdAXkdfKyUF",
  "key7": "5Zt1W4PLydY5gAW7rqpRTWB1L7WxPjiLh2tkHLnqt9rHPcUR3KzzMr53oN9nesygbTaVBoWzVxGZWPSLN3UpHrCH",
  "key8": "tYWKqgLDayKZmpSbrFRPMXe6T16cQcyT8fS21rJT6ZammViZdQZLTfzz6fvUL9nKSyEYa3jbMArKKe5K26zftbf",
  "key9": "2ShyXc1EpgHHVmS9rbgFom4UWUftGUi2CnSgxHdVNw2c5T6yjD7vARXGgtRPrQQVDhGV7g9W9Ma4zmFznqSomaaE",
  "key10": "4ChVp2yie1TKB3Tr7o7kgv4ChhXE8ZbAYjq75GxyEaPJMBrpEZi3GLZQHwbwgNPwTTakdRW2iL1wKDkoA5M3nRAq",
  "key11": "3Sx57h5FeM27YGtxBX1Px9mw1dzdFwY7Q1c6Z1csmMcXdRkhnnGnrG6i9kupKCtyjy44KfQLTqmHayWDV6QpMc24",
  "key12": "C19mtVHbN7Yc7hz9HAmvhBn8jm1wckksKo8kyViQDYn58jsWuXN3fsgLgLfFMppRzL1fgp7vzGryNfq6NATD6qu",
  "key13": "61bdYTCEyLdaBVomXSEhPWRLAz5QLJyMtzNez4bBaQfUn8X6DaYLAYUHzavPx44a54kL9ef69rZHeDCg37wheV8L",
  "key14": "3jPBaHDrfmrJasSqGo8B3fBFNXt7iu8gUDLnvRqVxDa2VBYpvyuYP3TqpJguTn6AkzfbDHLZKqm4nwKrLEAG9xjf",
  "key15": "4maKbsXmMhp3B2eq9C4VXECU3SDoG31SB3ujemjrYj4QQdNJ2u8UVw8h7F6FToNAMC32TaGops3RrjoseDYis8bV",
  "key16": "5gwV6XJfFCb3kHv4G6UQkhzsZUfCyyMDVdfrrGZrGsk9d2gPYbdAfczoZ3N7f253WeGnW8kUnGiPjBmTCyjNZhnp",
  "key17": "26MrpkDphPgsoR8UfuQAdTX85MxGXd94o1vF9K65RYsJdrsasYAcJWzLEfphfzwSRFQ23tBcA2NyR9hXbByvTPn1",
  "key18": "4J13AA3F9g4tKkF7QBtYAYfiR78FbwSQHzsCju3EvXthr5EKqcidiSjz2x47uP84RH8DwK1DhFWwT3zX89UABGSH",
  "key19": "3NU5JKkQPShWJBxN4BUBMhZ2FjAAUkexr8NE7o6w1dFxU6EdXRXE6pzbt7oH1y57kUc8us5DidaSPC82JVQE4Jt1",
  "key20": "PDSYMyRiwaduLb6vfXFivFwCJLcBqNvkY4N6MMzreYxZ25HJcz5sHLRPbeLE9HdCaXTqPfwKfNnoK4Vk3GS1ggn",
  "key21": "3YcZ717AQNJYESDpP8kszzRt5K2ar3tjS8iVLopWg7cxT2P4GCV5HrJvqNy1xUh83tkpgUufj3YupQxdvR1ZrdMa",
  "key22": "pQz81vYDQKn9GPjx1iZD16pSTRnvacU7SRHdTpDHL4ga3ti3XGYoYXTX8rYum3zWBpKq98zMkAePgP9M4SZa4wb",
  "key23": "7s4dw5GZ7HKA1kyjwCK2K6adW7nwobQLksKxpv9PqK3Vxrtg1i7NPYaNf4EPi62ssScZJRq89kRTPGd6bb6tkfk",
  "key24": "WHeUrUxo5FNiYLBmXb2e32hDGUgXrTQ8KMNEzKqTrpVkvRg4kMuEaWjuM97YTdjW4JfXueQ9t961WqSiURhZTmP",
  "key25": "om7FA5sZzx54YTsBX4NEaXxxpe6bBaiQx5iEuYfqMEUfBjYdnGF8ZptfTj1mkTBHsY35qUPpiMtanNQVvkDYC9Y",
  "key26": "5DscNoQVidDQ5kCrti8iz1kH2L2kce5kJ2jG5eR6rYzPujnLBGK4wjt1Mx1DrP4PXZaRSNfvRoUNeRDhzQxQaK6S",
  "key27": "2sqapVM7bUKaHNNuSc2drosr2JRNwezoih1iQRiY4d7GwoE2S2Aph3dDxZWkHYG1AfcW446uJWy6s3aPCF6Wz4HK",
  "key28": "2y7RW2dXAjZfATx14SrF98q3zz2d64ccV7PUBDtB9KAyd2FFtv8gN7LDTddaeB3XpqGLBzdJB8WxZmTFpEBDxcWM",
  "key29": "d3nzdKyJgj2tDYi3iAWML8mMguxMxLM1TUhrXMA1d6BJCFqJRrYz7z3JgahRBD2JQpySZH8S8ZwpQARCoJw5tVh",
  "key30": "5ZdyffVv1T9TLPECeHjz7A9XXr6YJGo1TqrT1H5rjfJ9uHx9t4aBbeovATmYhQvhLDgLNrB8mN6LYFVywhmFSP4p",
  "key31": "4H8cCq8cW3BTtsaCVNByR8fNcVmqtnJNBKBUGT6r6Y66FxFCBpYFnmQbjzpbJ9F3Ksd6yeY5ZSMJp2AQZ7hYy2Lf",
  "key32": "593VS4gHVg4rtSiTSUe6LwMEJi9PYhMe1TBw3TcMdKLsnTuS9PGx5zKZaGbggzg53fds7vJLwahntUg7zyxJ5rHu",
  "key33": "4EmPfpg2YuH5wHmcFPXvTW3gWPnwTsXe5EDN8ZhyvpLExFJqLtRvE13uUp4nHz6u79Nu66BWK15yzqChnvo6cEa9",
  "key34": "2mt6bKFJcjRVWkssiZPScJj6JWnbAKL6jnKbNFkJMmnL7vg9n8mytXGV43LgduzTvDCHxFxxBb4SRug6SwDjzDie",
  "key35": "3ABTUeVEovFpK2KkSbGLjLxjD8kbtvF61tdV7e14QFhqH7TSGtj7P4a9Cx1e8W5Kawc8ArpBLqjAtFmDeoNR34Ec",
  "key36": "5dULLJY1HSgyV6YS6SHgewzDgPBT7JcuKgH7z31BFQe8ozdf3uKEsisWZb8Yhp8QwJj2Xf6hHZVa9ygu3w2DApig",
  "key37": "bjrjJigxWxf2Nc1vXgbMwNsUg3pMoKDSWnvTwy2zNtys8JyWJhUkKoFgoWfVhkuxnpAy9yX2JB93kwvAG5quv2k",
  "key38": "2bu69uTkhZgCQwbDLabQhaZVoTXZG96rkZ4B2fYmAWsMSUwmbm5tVvmMVFdXP9wRy1N57KhuuZCswYiDVR2Kd2T1",
  "key39": "2eWMa91QGxQD8YAcz4XGUSJuPgVvWxbruaYxRsV5JnSgivGz5xsVSzvWupNcS8bFXz6YEGCTu573p7UKt38LjCFw",
  "key40": "5S2m394EZNwpMxR5TqbFrfGZz4EzcTz7yCmBqCVXYBnY7txYJjBjbz7XjWS2GzUJAH51bZC78xrkoC4dBosmdzTC",
  "key41": "SiPDzomFmw4VRk7uE4VkHiDFwhf5zQa1TYw4cb8aNShLEFvhgc9shBWnW8xGCzSMyGuBGsvFDqRDtteUChJYWZm"
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
