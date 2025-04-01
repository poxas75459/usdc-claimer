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
    "2nu55RvhWVoU1aPK2dkuaWSZgyNYCurLBzLoQBLQwEpciGNRxYGHGkneRZRFx4xtHkxt6EvevQi2u5RkxCYMDg1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmNJwK62xfDpmge9EJRtE2qojda4ZNL8aQMJ2o47svWZcF35TWsPoUWY5skNvir4QKppnCG5Z2svSSqwUpGetgc",
  "key1": "2RnjQpkAH1rnSYrPxjtTBukt4cdFmTR2iUBt9xCbWrwqTfSyUDsAgzqrvzwxvZWq3i1vMbFRs5U3nnGRXGvjXz46",
  "key2": "CR85sEkRxFY2sWpMnd9zirexui4A4ZqhzfVBETLZ9rHCWr6zhYoHFc1tQqyNb81JorSZN1CgMks3kkvbprudqkS",
  "key3": "28tbhtTVqhUkT2hyTF6dBpCFXpP71FgGLohctMmZXzATzh2QsyE9cRi8oAbYKpoWMrZyhNhRunEjUbCJHYLDSpPC",
  "key4": "5RKNt9fq1cqbEQ6xDniVXXsYc4SkDdjSNLD55szhjcSoYKyXrJ6WuHK3eP2gAXAJ4jvf8RuzS3gtsbjp7obXTx7c",
  "key5": "uvPTmVufox1QiHFNiZ1pvV8PYsP7xk58AJKMNaS1AoGmXBSuyNCbSaB6NrgM12tKCjXJHEGDnqRskUaugLz9pzc",
  "key6": "4FSWEwjZbdKNdSbac9Bdcc9WFUsMGex7UR2onntmPq84de2rES4obWsYNBvdatTCJvLRMxaXPcJc3kRP486YNJjw",
  "key7": "3sW9w9Lsn39DxjVCPxGsEVjWb9hR4Lff9a2XMcEzKHq2M5uQ9qQ5CSWzmjS3XKATHU6M2sjgte1f2pNh6zJSN1Fh",
  "key8": "gWtEKjSaQK5kEjvaHCyYKXjctNGdKxRTeHY6DgR5xLgpAwvMTxfBZPLR7PCYDg4p7XfGuiK5RACRAWoe8NL969g",
  "key9": "3Zwn88SucWbnzQXrkAD4Z1Q9b9oDMHDqR8HwpYcDXjKrYJJiWRQ6xTPXeqq4mgfRTTMB9BhT9FtJoLwCJbRiTGx3",
  "key10": "4vDvrvSKTANCfFXUvBV1SSEwM8gNHnAWSGPFmfqN5MVU6NxZhFraHtNsUwcDCxnAWtKsnYdhLnt6UzyrCBNcX3pn",
  "key11": "367ZZzQ9CUwrtvgzrTaa9uEQNGt4DB2KngGt25jFBHGe4t69QtzQX2keAU7b4kds5ubMbude4eCQunMcUGS3gvQT",
  "key12": "4CNEvnjPNLhMDvomQNoDjy3N9xjRP7mpqLdNMVtNe4EvVXdVuXiJ83o3sVgjKApWxSkYG1m3FT8ygqsjijicqRrh",
  "key13": "5DFShsBxZPHYApXgmqmkPAHEddJuQZjRZ88AhYsmg6dcqRZGJCSGjv8KbuPK8dVcssXt528DYTjm7XinCY8w4eHa",
  "key14": "2G7iCuUB7bTeaooQtg7dXFWwrtCwssPbsnLcBY5T6wMUqks7evKVJKKXWA5bJ6gUzjwFSe8nTA36pSAZeX7pmXde",
  "key15": "3E2zLxXijFLKAJPdvdxHwRL93nKq1qSCz14uxa9RiGEJH5xm5uH5uiyhAFC6aUZGHbQLxKe8KRufj3KPs6yA32gJ",
  "key16": "4KcHbszi6DEVHXAVPTtoVRtRUpHr6kq1orLEE357aQBMdUyWpx5oKKVbt1JA39daUGZ8TgQWaW5SHrkeVU8F9DcF",
  "key17": "5zLN52CMa3udmBQuUHzZqd9wJD3PwaM1994qVZ4tWJJgL2Ng8DCHWs3eBUDJGc2orYsbMpg7MKqroa4jJhXhoKgG",
  "key18": "2AkcqR9LhT3crJRh1A6FY6yiw6royux7jzH2X5oPV1koa5CNBYa7b3VJ2W3TXDkvALww4fgYzN2zBPFuzxcNFGjf",
  "key19": "edBizgoA7zBqiKTbmAU54Vg5HPE333WxLH1hSBvqwJnzECiBrxV93P1VorH15BMo9XDT7RRHLHxLzu2d1aGwMQq",
  "key20": "2kzutAkbhcUs8Tjzx18jXoHcGDYyUb2xZf6aFJhE5nMNBUYvn849AXybMrBEwMdSXZqo8AnMgFJee8bhCZRAf7mM",
  "key21": "4f8B9pDebzKZrwTAGJa51KUhWkoGhLwAhJ5m8eQ2iV8VuqApRUH3iXAuRUz4YEcYAuMfLbPUXABximx21JrRDnzz",
  "key22": "46fCY1aJ9nW1yVVGkeSbJyQmXkFvDN1cncrwCsjUJJv8Z2bB56vzQzXEBXBVcUw3MB9Uen9Se1G7TjjTxpGD2mV4",
  "key23": "3962Q2ftdJ3HyoYCB2cMnWec9e9dihY8f3VbYtWPzvZ7ZB3ggBtuCcp9EU6TCQ3cFMF6yEyzeBck6Jf2GSsEZ69q",
  "key24": "43oZzhyuVXz7SWruxDQt7CxAfPjeWHmxPx15e582qMyeCdRTFWLbj6NTrdtNShez86zKmcMufhZALrsjB8QfVGsq",
  "key25": "47ouJ25e5sVG6V6kA4zNzNci3K8jb2WVF4fXhMwCwTqZiiKyfS4q1MwjCrqGthhj5E6H3sftC9WbeJ6z3GwTWb61",
  "key26": "238e6kfFNZidQ1kC654kZBAC2qAALWPXbZdJVFyDcthhTj9NRF47TVPKRiqpt87WuQpd4vY2udT2CTFtfE3J7unz",
  "key27": "5bnRBR4qmzRrDQCQLtXoqdwrPaLxSsXogWVZGrJqUNuRCTuQ7unR2VwaBo7MEq1kjLLrLavvoKvNwgQMCo6mRseo",
  "key28": "57yojKr7sCfnkheQ9KrBVnvQzrZVkNahi7koyq6raqVXkxVwZMVzUKRb8aBPFTtSKKcJMDVsksi311EhVPUDAmDP",
  "key29": "2RhAQCgAxbntnL6HBp39yJoQCoT9611VM5CEwQheHhyJyxDKyhtKHjhmPohPTiEwZunwoCZMJktbmgXDo23q44nu",
  "key30": "Hcvzix8kM2cPnR3m7paTQVQG57dnxCeN2X4DNkm2qqfXSrQ4iBz9HXqh6v3QRPCKNNEWqy2ng1u9wN8W7fbr8mv"
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
