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
    "5UL3ErdBNKfTGFo1NGxf1JSGtGCaohfbYXnbTsSFXxKCDTp7vG78djnxhabS5inLzwwMNHXkdPH1JMEn4aFfbv32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAcxabw6fFybDwhGuUtjctTbskbeVRUPAGX9kFjeYyjM86GC6gFiSHr4k4Wu6g2w2P2uen2XVThYaiwhWMDFcTa",
  "key1": "hSZtZzDNbzfXDNjykAPcpCLqmop9dt2Kuah69zprjk9sFHaJoVCAf95mpU943SrTjhZdCtYTxLSeWe9a6HSRZnp",
  "key2": "4ZHJuYa6Tx2yeMhuKNhvjhcsdJv1XSLUu3uvecfmYvmXsvjZkNjESeAhrgYUa7PCDwfLRi2qzAK2kZpYsW985VDU",
  "key3": "379nPLmrWDTt44WAVRtamUiEYYvZdVQiUfwF4zmwo2PDofafyUsjbLXjqQxCL9mEm53zmCrkpeGHdiimRgDUq8H8",
  "key4": "5kTSjnPeRVWya6hKPLudc2xoDPRzYi4pit4mCJpU1aSP5uku9pnuzG3CV9AmmUDCSeWtvhUoeYgap2ZDGo9LKmUn",
  "key5": "4CH9JEaBtrKDQp69pW7dWJrcH6Z6E9WEZ56tXujvGAm8B765dtWt7JnHiDu7pzggpxf6fd9WpFPkx4Be4RBvQX2U",
  "key6": "4UHpHxar1efWxMT1XgHbyoebQV5VXTQrchLykzMnE3tA6v5JzvfNhY7pEeAAmJpBhuWKvHsFvtHMAjknKnzp6dms",
  "key7": "2i7B7MigAt4B4tMoSk6mHxK8BpMLPGTjMWcWdJGvmCHXh9PDffbKwhdSfC2KhLb6FdwfSnQnfAUL8eXmEMxWJHFt",
  "key8": "mQfo1iqXSHWz7XTBg84c34ur4V4DToKxHEvr9i6KD72wV1Qj3APX5sYauiuvcUSyYnumUFp9kG4TSxhyx4dDNMK",
  "key9": "EuipDXo4f6htNHCqCgtYsJVLNhLfBr8JpWrsQRqhFM4yrzDUDRUsa4c1t398mNpyjvbAFngDRk43fQLgnxteJTL",
  "key10": "33spC5pW18K7fYYxkJ3WfSxxchRjMkogSS9dxFjvHUSDfkKb7yvPF51hWCisqhAXRp9RQPoSwq4EmRFv4rkHoDL6",
  "key11": "4aXeCeM7ZBCcZvZUTVn8x7Fkzn5cMpcvsK4WJW8yb1v39H1emYGVedPCKmpJwRYVENH1pRj9Nmx2TydaQStLtsmt",
  "key12": "5nDrh4Ev88kktRfjcdJvcRePnEKujegDs6jrbmkJFpyWkkmwgnMQ8vo6h9uKRYg7d5KeEFwALX8YUKm7Jx11CzVS",
  "key13": "5hKRZaH29DpYseLKidL6DpMvQHApahqF32S5gkDrL1uWqPf1JPysyGxu3azDKtWswNj5hDoZvX3ApRZiV3Up9hj4",
  "key14": "4mHMcNDrQa1Z6TsHmTGgwjhXvzEKBK75bwQSwmMjz3nzW9J2W2ZVV4ysZ7xcRoGa8VNyfJQ2bsueXFFWiAkcmJwL",
  "key15": "JwE35ftS2WGihfbvcMcbvq7sPaLiCUhpLXdZuEtAq6hgL57TSW7JeU9ZYm4bcYCQN1SVx9hmFVUvfVmrgcKSEhN",
  "key16": "2jdH1F1gxtu4PUyxaSTHnLSu1XEFgh1oqR7LWr2PTFMEmJywkEHgB1xNZQ5CLM5yLxhrcDvZxjzyJsAiQrMnMKNX",
  "key17": "2vzKGJPp7UmpjpZ8PRb3hB4tS8nv4hQhs3NSqYHDVMHeKZWnf1DLRo4qYfFiEBrr2sbp82US2MnW2zCai6UV8Vrp",
  "key18": "gdYiNJyeJ2DjcTtWGQ6x711iXytsBGZnC7cQa3FPfPUDY8AycNDLiqGYwojHF3gusZSmAkF25Z5iD8GCaZx1eEn",
  "key19": "2absTxAAmLY8uE5ms4Tz4ahSTKx4yVgp57sJxKt13PnWjZGCypyUS5hvoHQFofoSz99ccaHSjCtu1UbAt1zhV7td",
  "key20": "XmfhSTpe2qinuP4mf9QAEebC1METke1jtKiGihDS51jzgMLtn3AwTmoqEaRSn9THsogPWEN1ajuy8bbXsLbJZyx",
  "key21": "4iCVuvynZQVzCk9mh3UZyRtMbFe1GM9GNzpj4kNho2P5J97LENK4cvQvVRSRAA1LaboicAyt7U3gGn43BnzNrGEF",
  "key22": "2W5LVUbywUyZyHEvYRjjLrSR5AckVZTq9vHAfxs6M9jakZ3FAyAojz9RafoqM7yTG3ximFFwuqiNYKYhf1dLHPiJ",
  "key23": "21vWKvxV7dSVwN3fxzV3sdyyU7SH8E6oLHMJMy4BX1oHRuAVLJChgobmJuigLr4i3LLhREZ638UnRm4qwApjGaQv",
  "key24": "4r5BrhaND5DvtHdkL9Z4sj7Yeuyy4q46QBgFJfvbdELGfgbTJvgJibbySqCv64D5C7vtKFjUZj8d8mYbfe7NJ9rX",
  "key25": "5TfjgZyAEsC4KcczppEFmyU5dDQNMKkSMSQD1n1HFQELUqMb2LzQB8WqQTQV7uif8Ap5qfzdpnz9LeSvxc8fsi2b",
  "key26": "3UmURuAjDZoZimosmmY4f8eEgoFoj4zbgXMjKwHk95S6YCvhVocxnd3Nrb7MVpnU9nUiHHLbAJACjw4fETM1xjFi",
  "key27": "4rvQab4Totmw5MeoVB8mkAJnz4FzyvuWqY6TpY3brQKHq3HCdu99NxAsXwSDZbcCq7ehLNzkzV7Gq9zcAscgA1JE",
  "key28": "3uSWg29pMQrEfLifjC9weSPLkBT5xMTZXPqxbm4XMG4ZRWBNkr135TRLqBcpxiehMzQYYaR2xKT9wfv2xCorusJh",
  "key29": "2xbWcsudbCLxuGYKoi37oUTLuKo1s8YRHciwR5DJmjzNy8RRh8xAiYK2j6cXmmcRAW2hcp1cVaG1EyaZibvFYHCL",
  "key30": "5z2Xptv55Sssj1MS3ckAoEN62krYk9zbcGNpcp61X8H9e1yMt7ZVBe4KoKgcu7FTaTe1kLEPCKC6qJZVUusESoqu",
  "key31": "5hDh23WtbxGVB56gJfvTZjKuP3TocjXWWWgVb1gqepx4Wh6oA9K9gbzj8cNKrhEuk3BJE4GpGjYhhc9xc3LJkpQZ",
  "key32": "2GjJq6RXN8SiPVKEX7R9dHdEWV4ZasbjgRe6nshUemDkenpapB64VDTvPgBihBpWqfVd3wdiWWGfcvmZX8k19Ywt"
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
