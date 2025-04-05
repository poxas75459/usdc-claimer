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
    "2rCCKYYK9KYzhaE3ZR4MkXLaDLWJicz19WWJcMMnBwQy4SKcVCqHrhTScGvyeiMaS1XmPdKQN1kLQf9kvDUHVBbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ay66vNARcVAgDchxAxyERrLbn2rzGU5nNEya3ZB2wS5qyTQZu1QeZTexB9pFkPiUnU6FjD7ZPcnMw1Vfk4JCAT",
  "key1": "2fBT7xJEvxPTow6URXtDWHLCnsE86UJx6xTuYCN2LBLu2AFrd342XW2xsPpKzeefoLAtCGFFYLuVsvLMd5iq5NKC",
  "key2": "67PQLtUTxSBxd2RkQv3UCU1jBkdFhjKpJxAXUhPw1XS4qxjVEfY6hsKH9FHFb75Wj9JeVXjoQJ9rFrnBNodRfRtY",
  "key3": "5px956gqc6kjehLacig23jdaNqhRhXKpdLiMtWPEoWg6tALre4d3rfNC7Ur1mgsLJH3WQgKSUso6d7EBH8f7S52g",
  "key4": "4fLWYP5cVubgyqaytaKk5b8jHWa5MpTwPJZoVcZ7NtuEZMCfK8i6TSUDZwPtehQfZFAoP2dSWMsQJhFHGoi36AW4",
  "key5": "2ro2G671AWLKkEJRFQeRK6Jq9bos6LcYUBhgjeHBUJ9qXJmzc4DCX6AQsMcka14c73NQKiQC4j1iQHjVwFStG5bd",
  "key6": "4pEBbGGWYDP64KDZ1QY8EhnorMAVe1Q7hKHEVny3Srsye5rAQ6ZV8dwf8vN2JGPgnwsif2tJV56peL5KAQB7FGye",
  "key7": "3jeMaseXSr3GavW24n7kYCLwY7EYRoUQ7t5eDsMDrr3kGbB5WawqeR5MfmuRatxygGZSQwpa9QCreJVs9w9GPg3E",
  "key8": "Quv4MPh3SvS8EtnVtkBqw6wW3GqggPwBs4cFBoL5pxKytHPwTEnfYiUgfZoAi6tbvpet5QLvBrdvptxbHw3DkNr",
  "key9": "33425rZdj3Z4rpmhcH7CcNYp9gB8EQiNNRmC2g66Pfu5Xsu3Kp6qEqoBSQr1BmvJEYzbMt8opHF161JhgK6N34VC",
  "key10": "bM5qu5CuuProTQzxoJ4m7RSopqKtwa4CtMWvHMjvuJByphbNrnwZduqNSPNjZ54hgvg1ZUYDU8pc6u6PqxH8S7B",
  "key11": "2ACKt3EePEfAm2ZDhngb1oEVG3u5sgQmSdswwZwpwTeVDwfbrsAY9jgpDuNKyWTSFJZPFGfd1N2DejsqvJtJBRxF",
  "key12": "59PicLCwfA7nZXQtUEZVod41WNr3w6VEygFFvzoUvJ9BeLfibjXnN9DsoweGfhXfmovmeYNCowmUenuB39nqgC4n",
  "key13": "3L3W4DpLs84ZnBSWxDHy1uvdo4r7iE7NEoxUQFyRAfycGJWZ7oU8AJu2HJf1TFwry9c4ru96bmzWQJEYDHk274o6",
  "key14": "Zk2pYpNFLbEv9w5uMHyuKCk8npUrQB2NtRxsGprc34Kpd3G51PC5TomkAcmc1ne2fFHffPWYzS7aWTBSyRARrEU",
  "key15": "5pNzE1N4aTJdSpH8bHsuXjNvcen4Gbiym6F3GgqeMPkR8Z7EpDHbb8vKLvmMTz9UqfYsR6S5CLPmUuxK9XvYNrd5",
  "key16": "3DTr7V5qd1pf2SityC2EzFMDRS5P1oZmZd5UrzV9zv5KisrtxvmdKz6wtvg55zYWXyRSSsYCGxRKi8eJzyjnA4Sv",
  "key17": "3aSYdMxqujjuWyB9rncXeKviG61uN2Y5phJBQfskVvCZhVxcGnWDYgWvG8c987wqCr3TSUpTYvCFFm1N4rQQ7q94",
  "key18": "55a1Rb4CoS32HrPJRqscgq7RYaGo857zZSoQfjxdzGv7XQiz7yfe5a81hx4541VFfK2LjeCGVYh18whwG7y1QoQR",
  "key19": "E5pWu4mjHxgpHs7pDkwdeLWHe9LyBQSsfuTXYwF2upJhnhuanWUY6Jj1qeQpVi1pUydbhnvzVmZGZ8jfi91SLob",
  "key20": "2ty388aCiTfmF6f46jr2ipo4HnMizuRyDrFxKGjTv9gzKnHsn36PdC9TNxoyzwy3i8JkWkfTiNUUpZ5uc31jTYUV",
  "key21": "3kpU6nRNdWtUnC1Uqim2mCz6NcMN52fEd81Ku6z8WhbQCGnVngj7JHVB4FjXTRFEqcY2jN458ddogZ4LMsnq8ypP",
  "key22": "5p6rkQ1a5oxXRHX1DPY3Y4vqvo9kNTRbNcE9LaaiNa9wAg94JSde3w5LE7Ck4KJcCgj8kUz9vsTCwbvyMVFkXDpL",
  "key23": "5X84RV56RC4uUxrfKT6S5h1KdfijGbkR8U4k56wtiapZAJA2mD9udZke9PjpaBngCUKpuYJqN6dGmZJViB6fFvQa",
  "key24": "3HXatAbpgoMCWgi8XAS26auxEHfK3VFYpLvCZg3Ez1aaSFhoAuFXR1vAM2SYmyF4pcCy5KA2f6JEWWv6Qs1GGCy8"
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
