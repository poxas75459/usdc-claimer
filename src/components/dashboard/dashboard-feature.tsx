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
    "5Wom5DSaXVpCunYQrQzfD6KNUZT54x5ki6YJqvNQ3XgcEhjNQchqs6fbW5e6nL8iKRHQcQqmnNCsU59S7GNwdig1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPLXYSHJoxiKHquCQr73YLmcmerqdm28CuyLPjDZjfBEMysTSyVY8wGwQV4S8rnXCzfBUo118jz2fko5RKj4MJp",
  "key1": "5sqgJ8VSRWS6HnzEtRvBou7pG3Bw5zL62xoY17yLYYDCsMx1KjgopUzyZBghHwcy9pQHJgKeyGe39hB3b7srASC3",
  "key2": "2y2YcYWUyLdw5tEoZYywEtmBrNybx2qMKh7c1ozrYQCgqip2ydDqpixQakbM4WtqQL8mCq3qc7KEnm7PWmquwcxJ",
  "key3": "3oMDY6obnUF2Pmb7dwzgSUwfXdH63qz5s8xAKp93WyHPpNFG3fa75S44EvkWd5rQZVn5t5mAZzKEYtZ6Dy7DZGSe",
  "key4": "2TV7LSc3Y63L8nnye2JdjmNuRghzZTLY67qEBWTnMbLhgkbnpqPdp1vSZKfwD6VZCT7H14BnxWUdstqy1ytVNDu5",
  "key5": "ZsjpGZovCr74C5b71pNvHVtBQtkgDDZ2t5aLMgvUaksaAKMWmRnAfLNse6xrNPBDoegNcP582yXK1uMatMrjPFt",
  "key6": "2j7soWAsEN59AWbTRxAemgKFjZYevCSyaJisGHi3rUtiKtuGtRg2teCjRDkQN4v1tcjmK23xGY6CJbkeKcg8T8Sg",
  "key7": "dSDaSuqn5ZMDteeyMNCQcASMjfBDgArztZmriJw5Ggov8a4jBqgPzZtsNPhH2FB7JvipGWzJvr2kPbPa9sudQhC",
  "key8": "DZPoTuV351X2jytU2HZRvvJbSs6K2fX5muN9GmvZT9MHz5NKyuEMgXs1cgs5QdUa6WocQjCdtacxvx5imAyujQa",
  "key9": "5j4qgpAihsEjbCnDfEvGwMEhd5P9ikwkamhbbXPnxuYoCfTnQrjTRsGFasVk8SnSxTreypXWtUDk5tco1R6Higb6",
  "key10": "37XWcyx3ChFNp87itthD6iRsHXMVvCxcGhBExci44bud7bo4uQ6SRzDPNLrE8qKJbSgL56foGz4bBBzpmC84w1ps",
  "key11": "2dAeS4PcJKxCufn6ZqrLKCBVdJ9SSnwhN7rXNVPgpWdCs5TH1J3Njh2h1ACybgx4t7MjZEYxz7kTnNnKhhSYsep8",
  "key12": "5ai4bCq4W6MfH4ioJMPgL15wHkjrQH8MMVKALZWLQKuctgJDEofVqULjNg5UBXLfWfbTi1HBt6LJWikW4M895PnL",
  "key13": "2xt3UxkfsJiXuxW8gytp9jAQERK5GyanTKT25LSi6YeedziCGUxXMyQvc2Qjsgj4ttPLT472wtHnrmhAtgkj3NYS",
  "key14": "2teQkNRjng8ULpaj1s9s2CzUtqDiAUjo2gcXRabfoWndmZ8k2k7oRqG6N4zsBYXKJZDMxq4h3n4BuejFqJy7EwwS",
  "key15": "4558rqKc9AJdNvR1EFqS4BPLN34no6pUc6qcBh8BBPugv7dRyNqqBM7PvZdiXFyqdMf4HfKAs2kLHwjXKVwNB15m",
  "key16": "5zokYUe7U4pY61jXxDh9QaFiJLq2NJ9QnxoJFLhbvMWkSXbd6BNHpmuPpodWPD7BdDsSVgC2crHzgcUUfrbZhwJy",
  "key17": "3zG2nyDqqyvfnnmA7eFBkRc7XqyzPBNHwbRGURuBMwwrr4AKicVWqBovSDeujgr4VKmdorHaVVBW6mWwkF6wvwQv",
  "key18": "5EuLUdme6yTqfUTCAS6CY2BtiPfy1Zixe7UX6rdhHjFSkkD2DKbZctZDSJE71bfN1nydMstc75r4bemS5zfqFdAF",
  "key19": "2nnyWBbyuMYdRyXwgTZvpsDmCZoQpCKBCnFLbVYH9HkRgk4m6KjTsqkaZbwBMkM17ZtU25RwFnRThnH3ds8ZLAbC",
  "key20": "4xMrBpaHgC5r4XD1tAEHPrFvcYr7inW76h1X4XummCMukeaYAsLAdQ94hBeb2cMGZAGtQE6Gu3EJbKYFcv9dTrdb",
  "key21": "5DCLnZKEa9WhFq2VYM6LbMGoudzHM5p2a4WZ1Cg7KNEQPmA2YbEymYhtRZyXJYATPJVH6hHUeVuRPujT9YuDSmeF",
  "key22": "3r6eP9VtqzT1Fjvu4EXXUtnuAQcLXnnSJfGZ8CKM8PqAADp2u1AKN13w7KpcckXvuWf9fyqmXkjGV9zFT5yu9oQe",
  "key23": "2XtJJjnYDF3TGSbXgsUYEFQwwKRnE36XATPG1TW5ubkVYQVihtq1kLMr8wxC2oYDoX8iMMGRprZw9BjC7cey81R6",
  "key24": "22sNjUDuWqBhMpxiWWpqFT24nvNsr7gCnA5nmxZtH7QLWvnzrtzTv7MyjLdz7yLyEwoPjzPKU4NuaHSdBorr8Ahw",
  "key25": "28T7AtTAfRaEE7Kt7ggZA2EMFDh4tsiPysNKnTkRzbxpkCmQbwVy2BavG1p7pciz9CTLFAjDBSQiVkqH55rR6Ka8",
  "key26": "2DW6XWNnULBBXvSpQeMGYtx4y1uBMVDUvHy91MefwU35KKnhzNCCEghxvdinubqJMvuVQvPwskQwPrdoZwam1goL",
  "key27": "4ayLHx72gJMFXcwq7vPApMq8LdoR5mmQJvUX2Txk3cWfZbrxR7wo3N8h1S3oh9v4oac9YAbLpiX8vKBv8JsKc6FV",
  "key28": "4Y5qG9eSuhLLjKncCP52bjvJaKxYzxJrMt7jX3qFUWttTVCT49f6VAfYx7Zf8YhmPEvVAvLYNSnPYfwLH1BVmu1V",
  "key29": "2r7c17Xh9vaZ7cvMSemrazynCaAxL33sACsnjUC2tuqJpM7m7zRVRnJKkybGeLtZ5T8sMgMydBSHz1PNon7iwPFu",
  "key30": "oX99wuY68vbw5pDHGEaEAv3bCuqSfy6psXZZMAQJjNNaWrm9wbDrcXEoY6NPhoVVHJLdkRxGrFG2nneMqzrx5VA",
  "key31": "3gDDqvLt3usakNSbhq8nir2WUVhUBxyDgg79iQrzEfSM8MRZjt8UuoJq4yZEDW73fWS6nQMzA13op5wWTA2FCprM",
  "key32": "4mA7BxTwVrHEqqKFUb4nYDeCXntFwsfnaKYvogfVvvx8jxQ83X4fXkhgMRH5kTDwHDChtu7PNqALuvrmoSuJ8v3",
  "key33": "3QA3QGgdLGLJpjE5o9A5vgNBskEPC2AsLxspcakXg9ccp6dLM4UhHpy17ns6xBWAvxr9DS9Sb9dsZJ4kpWX1TxEZ"
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
