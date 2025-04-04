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
    "22qZekBqxRFEaTNQPL3q8XrRDThcrPAYn8DVgiPzgrUR9GYK9qEYCY8m45XL2VPtxSpVPjQ6hKTjYaTQpMMMoqY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473gszfk6yNj8h8V5tYmBMbCRkKMRT76Zo2ABCBqJ1rBHx4k34AZKFCkAAz78x6ShTUcUErLawMxkNmMu9JbMz5N",
  "key1": "4Rn2e6StHnApaKrnArPSZHoeN3X1xUpDeCHoftdVWgwjpxb6NizdvuqL6PjJAh5q3fyvf2RPHwkWigP4MGZJtj3Y",
  "key2": "8nMpYRksWsSvbQC88N7bjqvfXmfsSnzXS6ES3nppF7e1cWVXfQJHpXFAn5N6dxxCXch4jtChsJpDrpod2ic6jJJ",
  "key3": "5cbEo61TUwuL8RNYzDcxArZHYMHY4SvC78dqMeN7MkExyLLmjfaCLLVdUpNWR7B4TMkYXdwHNv5BmghXsM1BuLPe",
  "key4": "3XQhDBNawZUAVprBfe71ynWxApxFW6eHxqBWdqeSt9qkj58nk161H5HRpghm1CYWdRD8LamcXKxSWAhiHZiwWQk3",
  "key5": "2LZeFcuK1Y6xGyaXQ6frsefvQxNBDdZrTS9AULbhWmCt5VTMwKco7oc41aSyXXraA1yniJb7hGqpjrfTY8xHrgQU",
  "key6": "5zt6GFvoKz3268KXYkTHdLpGbUUQb7EFwnjePFn7Tqp4TchtDxYdg9ZLVe38PqdPgzkWSt3ekwdYadc4bjN4r83g",
  "key7": "2naxBvQq73XYxW7UVxS1mmrqXz66XehM8Qha1RVkXMJuJghbdMe9qhE2tZG9HzDExPpB1WauDigddDQwPFSBWsJN",
  "key8": "2Jtemjwub26Du5YMAfMbbtshYLM6HnwYfmCLr75zLnHjgyzJAAWkBMuhCPpHW4dK6F7MooGNR2p8NHvupQrtEczy",
  "key9": "cCHFiHgFVuC3hk7UH6L61gg4F553fDFUz4uYhQxVSahPxRCCJz3KeoaAM8X2oFDTNqMsydG17VvecLP1JDVSueW",
  "key10": "5hGDbfLQdEL1ZUREsGjMgwkpdqbzmQKGY9BMunkLDSUvxLRwXEvxJ4ZR7gzcErR19QXS1u1XVJcQqQDT7ws3mKFn",
  "key11": "NjRiCLozDZRaH6jSg8n2wATrzAs4b1kfp1YiLPGgybAeWUvvZr4Wxc3AEzEL4Ud6SCPSQPCva1j12qsBhuih1dg",
  "key12": "617xDqRA6c11hnFFCbE1VZnK3B3oxXPnbpWcYRyRxfeUQ7PsU6yECYgArGVqs4ZnLTCCiByxhEZRWiSKsNWAeJ32",
  "key13": "52V9TZChjqx57AB1R1M15Tn87BqimEDQo81c1TNjP417SeH6QQYDKkCDk5CxcdeTfJJMo7YxofUhWWSEovayfVr9",
  "key14": "44y7vK2rfJYgs6KJ7CCibM5yRP8DXz2DYS8xeZTw5sQkJc3RBS5yM9BTirAp1qPLUk8te7JabuCaB6KtBEdyTP9p",
  "key15": "z9topeUD3t7HfMF7Cp9kEBMsQgdzwFkAY8pzbdmAkBawF2yYpVXpA1LttDjFiNJZ6CconFFfEjQdEGyJgK8q7En",
  "key16": "4Fnnjo38fmMhJxUKTzBj8CkzAr2qAnphkusUkZnVH8qsxMnqCz7MxCSUgZYwFArcKpMyuB2tYpjotWrhTsbCT6Ax",
  "key17": "3RsfaX5poXvMLtdyPpfU1xYqZoCPMAD3AeJDASnX5J65KKYoLw5i2Sv8mW2RDHtaa2dxnCvrBeYgieWt2gtodYWp",
  "key18": "2zfDMweQvcPkcTbUtJNd67JYikvBN8CK2BEwPZU4cYr9MtxLetSUXK9NJiqKvWTP4DCBBP3aPXxPnyPyq3HFhpyz",
  "key19": "51yQXHjDZfRMhypriME2XNS4rtGZ4gmZU9paBGMGWCqAvaA4K9QvytfTs4PGg4WNGHTjQawW8nVks5hMqcxCGu4S",
  "key20": "5KKwjk1douVtnTbzpBsnNxQW9Kt6uTn3wmPKc1oyPVPvKFWEMs6aSDfxMoLi5tvejorqrbGstN9DLa3nGSUnEkc2",
  "key21": "4w3NphKrmPyLYKnNKLVP4CT6ggiBfrcQ9ytETQn3v35XKd2nQwCDnu4MNQpv2fNVTvAzeVkQUkfMAE1HqZAHwCWb",
  "key22": "3eEMaUmYo4YkUpx3zfK8J6U7GWfUHVWrr8ZhwRXz15LU4QwvnrLzNjsmv3sFLf6q3yQotX1KM4pEtqcNvUmaQyw7",
  "key23": "3M5ui5tNGKQAkdR4o7hVxEVwYjryiYPzpZ7gHmZDQ7WfyQVtC3Wi5ugcPb5o3JP3LGtnvJn8Lo31a74Dr1yTgNAy",
  "key24": "2ZJmnTzZkQzPULctEDQ6GUDAnoY5p9pztGXbYJVK4P5389hsorKRLWtpuKZTs4a4Ymik4gvsyA83RZHquaP6oWXc",
  "key25": "49AHNsB8ftxrqs8wV7tgWpzxcFjAcrj8Yk3fsoUJSSHbtWFhfZ5W6UZBe9RLmYvaWnUwzssPQBngLqgeUCRGn6bZ",
  "key26": "5zAipzoDHB92sy9gLY5BFszYo16EUkCfvNv6Xk5NwRB2xNTPpTMjEKMpvDobZkKLD6ccVfJq6RqdT3Jj7SpCeUMR",
  "key27": "3abjebMGfofn6ft8ZKcZepqJHgUkeX2X1YK9pX4m9DehaehMxcKNqKUq4dXq1VsQmhxsevgebMbzz6ktH6ctEKHU",
  "key28": "4ivbH36uiHYckcYHocrz2qfWyDjmfxfZgTX9CEBrLhbGfqcwE7gDZcLF26buL9dP7t4SXBsZAt2PNRZUVnutxVfd",
  "key29": "4uJQxbBdLinRMY7z51FHDbCg54oVnMHJ2z6Gqe4wsYBmEqx8zBa9q5ngr2BbZxJw3swfShGcCAtfyCfwFezwQqdL",
  "key30": "5SoF41xuY32m6aFNbBTjN2hWWRTR4KKxUGfreoSFxqPtHf1it5gvr42hy7c6kH7A4rP56mDHdtiD6ULmqn7KGnH2",
  "key31": "2xfHxWAdHvFWZ81dcCucR8v3QrLwJSnFTnwGbXn2svDDuBAgWgh4TWPtwRgnzPSHBBaETmpNYF2GFvoJHHrnZ3bB",
  "key32": "5VYvZ3LTTVFjEVVYepTkGqweumbXMF4o1DA8fM16kxue9f9YA2Bgn6LVNY4FVeyr7UtS8tUm6SMEyr3mgWUiQxWA",
  "key33": "2Cwr42xCGhB9TjvhwAPfNZw9yQNpTR4Z1AcQzn6LoUAGqyfWRQxxDcqzU6v5DphQVtRF5urGDADaB9NgZWxBkWnA",
  "key34": "3PjD984RspDjyhEdq9yg5pxraTagRWFwumj9VUZ1Pq33msMdd8EtWDK4N6qz5yLEW1HSd3FbumpNVNExE2taKJij",
  "key35": "5FZbiSp4H2eRDFprLxPiRYixoz7Gy9BzRUMHDQRCPsNdnzpM7zgyBrCrAWJzR8ih1pEZu1PLrVrwpwwuMR7b38LQ",
  "key36": "2d7JXAoBkR99FqMbJSLpiXfvvDSH9GApxnB4P6yaj7EwJ71RKZae8vqkSv5YgVkoSL31KQ3uqrWxi8ptTZS53C7T",
  "key37": "5XMjuSHiw3DKDuMrdhJUGfKocve8WaDStDuQpEbdBd44KFsQx6egZW3wQemkZmcBZgG5e2MbjSRwKqbWTSgLStQS",
  "key38": "cZvUV1AVTnm8pHwVvKVgCjwDuH4WLmViPTYQJJDRMhchSGjXFaeN4ShppcUW6XfyLxtrvgn2tvKtQ3zp3tQpJ2g",
  "key39": "2zs87AeQbqBsCuzmSAtKv9Q5EWc32CLEzAVa686bDvRWUv83GQNpQHAZYgFa77QYtvN2CqtHehYc8MmodS9PPHRJ",
  "key40": "8XS92vtQG58jfuM8on75Zyv5SSaxBHNrvRwRo9jxc5tu5HMgyDwWEih1dVVAZyzbkQFAYTphZ95MzcseUcc2Ef9",
  "key41": "3cy19Fe6PB8FV35er8NDRz3rd7F256jxvMiukey7LwUzHsnzJxgHEPjyV6rVvRRDRFzrVvMjVvBah8TXY54DNwv9",
  "key42": "3FCHgqUr2mkqxskPrpJjYyo9BenttaTKG3LKJGiFsSNGJLVwoepbVEhh5U4XXUSRU3rBtaqTsoas5wN4ieyZzxov",
  "key43": "33Yt2ZtNVZ9RcVHQAewBLt9JzT1KcbAaTcCZ59nQDpBe5dg13ju2v7UGu5LA26xJjjdJRppyvM4mFrgnUJxh5pmY"
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
