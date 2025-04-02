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
    "2T5UPGAohtgm9KD8CwM3XTXcZTrN1ccjKk1fGuBDAjRNWhJJryLkgzvRibuTbDdye2xiLKQiapgtErTUGT6gN1bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F127WWoGw9xbCHrmtPhbXuWABvcNXNETwPGKb4qiNWyqPyHsZzYYPD1gLZgm3tjoJ2J4JBVdBdV81DDocKusWW6",
  "key1": "5SvcW4SBnqWqjGLaDV4g5dButCzV7WFemApaC31j6SkF4tV2XJ6ADW59RVmbi9bXd574gSvtw1YT5fU3bwTaw3jb",
  "key2": "jGN74vr8izBikkgaxwabV34551DFY84T8QaMki982Yh46ZWSxJNwdtjU1pwvNreMjyg2pcVHnPdBp5E42dbPhF2",
  "key3": "5p6XWTsmkxgUHKWgExvQLgXhhNda4sB6E4QPdGord3y9DXKyCq1MuTu1gxaX48wK2CHGhiDCuGPmkhYwtdbVWgbZ",
  "key4": "34n8bcZfw8NQBAuqr1mFhHiNUzVE8vk9hrDFANkKAnmLjHiGrA5KDJPFgcj2uNaiwNZ7HQm1bgoBqjZHrnCScHpt",
  "key5": "g4Fds76wd7izTCzm196zduw1wgVtzWk7KJbbkXc4WKwd6BpGWuDKXsYtj84EfmusadVjr3PTVJi9n8SS3wHgpDX",
  "key6": "6W6VbLXJ2XWEUmzJ6sSBUqtn1P7Gn9spuH1s8cHzUb26AjjdyGyv1eaxaBZHNb7hWshGNANceHKELjoFCepWEyC",
  "key7": "3dLi515tszTEskhUURnUw2y1mQzXFHAKnHaERGHow47dUvA7Rk4N7N6DJwF35ykWA8xkQ8AZKZCWsUGFAzyTZSV7",
  "key8": "4XQA14bxQ5Df6uo5FU4PWzjTs79L73UsCGxCPan9zz8VnPUfLcbtJbopon5Cr1Ng8LVpVNLPMX6j4CJeDPLknKTY",
  "key9": "3y8ByHVeq32PwmUo4wJT6hbhwm8DnAchqgKkQbVGEmnJkq4hMfgzN8qDvsMvk7qYtmQbK5Tm2W3LhAcA8viK1ZUY",
  "key10": "GAvLyW9XUMZGT1PpDi1GiGgR8mEidoX4yRkRanDotEiJddmxPnSSdFwRHgK73sfvR1CA2UBMQJcWh18bsHUU328",
  "key11": "2TMQiMFMYGyNxuut7bsarN3mSBTfZz8fpaWfhXgk1bPwEPWXjQmavMC8QFVJWVq6k3rELK5YZCnhUFn4n1GBEu4s",
  "key12": "2STrCSHcT8GpPfgwJhC3cY1x7nzaTGQYoiFKTARQB9wYtActfDHnvkK8TwtEbMrKzNV2AmF6Grd5vjFHgo5DmRqX",
  "key13": "5BYX6GjSPLqHunxjyt5pCMkbTrT2eFj8uvysSMAn4CXhAYytgtPhxuDu1qgLeRyfpnX7KBPZhWrCdezdKx8mVwZx",
  "key14": "rwLA3eYfsxQQg65ofBByNzLH1qFYSdd4uUsBXqpCU9bNf4uDGaa16GTVh3UVBJ25XSGZ1BmHN6XWHdVrU5UTb4u",
  "key15": "4XQ9X8jBavjGMgMawP8Eog5dcHMBpqXRrNu8jmDn4QwsDBXZGgUPtqAsrZKaVmsMBL2NKH9maqj1g9VVphuTNu4C",
  "key16": "3SgB4DSNKq4DKNEC5dP3RFkB1MLBBpaHoDKJBKfB5Gecpi33TDcVWZvXVXn6JxnNaZ1y4QybkUyzx3ehefzi1gTe",
  "key17": "VFcoa84MZqRniW6uDxkP9Qu1xDfkUhgMecoaeR5XpmcbkCE8qgeqBerNw3z6MVfx2P3gyjn9o5zByqapR5m7bf1",
  "key18": "BCug1GBaCiSYVFhwz4wXiW9mhF2qaYnhWgZ6JLjqS8Aop9tcsioysMbYRVKrk1XRrL8qKqCEnPZnJCFqJshX98H",
  "key19": "4jefSArsLHktzvtwp1EvhDmEvAhwqmi3paxZhL9T98hWqNHsiPEb3zTSSSMFrNgrJkZ3a2BjqHRDitUi3y7wRa34",
  "key20": "5oTbb7oknz853qURu7fDSTP1xrSKQxx17PAE4giUA83DudeMd5Ew5nUoyrRg97SeCEezT8ZNwDVk4AmNLznmm3LQ",
  "key21": "2ghtQeYzBYG8EmugfjcBEtgxUD94Wa1H6LtRdoxfPu7Cm4nrDq4ysUBKUUtpf6p6VNNk2ho8UuQbuNNAPJ2TNQMi",
  "key22": "5FQintZoX3kgLHiLB75CFEXFDBt3BSq2FrnXV1huMWyduZBfBziuvsZ8AQ7c6pxX4qUmxCSo7iG1SwDHTDrqf8Hj",
  "key23": "2oz9hSag6vPn5g9kyHf4njtq7Z49JG75N43HhwSA4gNMg2LVdTpWR8iTaVRDo267BBGP8LaJn5RraFEBSExPjGqw",
  "key24": "5hCnFuaciSryhp5Sj8jqxRYXdMWfPCFF3UBYDqRhCMU3bT55aBgB1q3Ews9upD7FouPjRxLm7WithZn2zoj6t2uK",
  "key25": "6KVnQHJRJXryVowkJSPYJgcyQyK4sQMuuXrXXG6n1dhuN5udsZgvb1zgrufqM7tXD4onhSxsx3MWP5bexc2V6aS",
  "key26": "5DYG7GchYTzxK6NEjntdy3xim4qnn9WpKB1jX4bu79cddDsRD2ikZrRqK8Wcc4XnEn5kXpFwUtbpNHWaBhJ94Bap",
  "key27": "4rDogq37a4teFnFWfps5SF4ob7VkS2VA8bmdYbGpwenGinCCdxPi99mgC6pDx9meRaMZN5oJGRsbeqryW9m9Coig",
  "key28": "5PrUScz5dSSvmZhtAWpLkVrKSx4yFBWqM4phgQ9ZahFGKmtxqGAWi4uqAL6kJ9KAeW67Ngryk62s9WZBk6e9dqAb",
  "key29": "5vKkWa94XaGWSqpjHG5s4tZFWvPZT7vKJaCHBctMKVKRiBxQzd6xigvnQ5ZwtAn2X365cXnWkMcGFjujEVB4KmxZ"
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
