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
    "5g7AN6wGYdJFSnGv62N6zy2KWHr5fBM7cRTsD8y5ZSeksGxw3gajmZaYANFEKtCnJyWywXgreWQQZoX4DxHJFubJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3WdmHAETvV4uqhSxUyo1jpcwzy7ZofhfLnJyrxLkLUvSzzaQYauw9cJxZvcjvkWc1RbaXT7d9hp9CMhKW71vkQ",
  "key1": "2mkojfB6rxUHkWZPyb73yKTfXLaZnG4bNn3d6odH6v1C5H2odER4wcRBawHhUYXiMFU8LBtz3wfZQJC4ihV1ASPH",
  "key2": "8AkjmeQdC7nwAVoppmeSsfRyAzF5ZYabrMQqYbCQV9WQF2SLWcBstbXJB7QAmnVLXifwtQ9ZCZ7is5FYWYuFNv7",
  "key3": "22wTuhxNba7DpUGFxSyS4bKJ96ahvyo8zxHDe6VsjQrpwRabX7LuQA3AagghUnqPyyaiYx78N5rxwVNW3XGHw49x",
  "key4": "4P4Ktqry3GEbFFMyxAmGYAxJV2ka1o72keXeYyVn4BPP56UKQbA6CyXVDCP6p3XfoQYc7CCM4eSNgt7U3K6zTdoM",
  "key5": "66M9V3DqXJuUU8A7w4aoR3WtqpjzEK95sMKeUjWCWTj4qohKJu6wRhUyVLnqYVPNYavcwBhLQCdcsrV9PDk2Ax4s",
  "key6": "5hx7GDsUAorbjDpmZ2BEYGqW97RLg3Ks5zA7UdP5KVXuXK88Sp73fCTCAWPgSu2ssVm5Nf7fV3K5W7Je3uxb3p1k",
  "key7": "3aqcUCvU2rDh6L1dUcCoMjAcUZkZ7ttDtqCgi981xW4nB4KuBGNjso6PaWafNXiJ5sFmq4uBFumoGPAcPKWpYmfo",
  "key8": "5hpy678Uqv9J5pZwRpEhwT2UwA6JdwZMscQBmXk526E7VUcBesvzQWwXdpoGN4656D9MzrJqLvFWMD49maiiqRwn",
  "key9": "4aRHPh7v4QeqeCjMQPtwEF6L3JSBgER1NzD8DiJMxyLCepJ4UzEQaQErLf9czcPvv2b62MhejVAEkminZ1oFEGAJ",
  "key10": "o1kZb1AFarzC2gWWTia1aFuxnKyXQaQxFjtRMWdomEM3nrBC3RbDCnEdunfSqDKJjtXrKynCaCLdfFSXFGKBqgZ",
  "key11": "4ksDNzQyLtpmffNfhxT6eis2dWFCbwxzWtPki1ePbESKpcgWvzgYpRnXBphUJqQE9h5725gKkyxUsWXYU8QDYB19",
  "key12": "4kiAgz4qvwLCH3L7vkeQK4qgAVj9Z8cLVvATbbPZg3Pxg1qFzhmjMBb2j6g8A5WuLumjk3N1niq49ZfiD1f8itGv",
  "key13": "2Cm3U1MYkJChHWUwL3kA4NsdPKFsmrSuZFfSPrcp5vhKkAzerKJpJAwNwqwzWhhSjMSLapgkc8SkdRJbEN5MrhLH",
  "key14": "2Sv98enLjjA3abMmGtWs32D9FvZH7ubeWPBm2CMWTsmfVzh9twZC7kjQ5w1FEshRBCAApTSfFfYunVPm8GszKkFQ",
  "key15": "tdNbz3eJBSdfZCMTHkHZ2xAusbjPKsVkwpnDCEe611sdgPogJzhrv33JKRtLLbdJjqNYMrECN17JLjgoe1AD6cN",
  "key16": "3tWTBBVMyPhJSAmbPK367JVj82poGcEso1x7XjqkCS93gsbwXsfZJPWQyLBzdzNG1gjJmsHKWjAp3a4hcR85mjWu",
  "key17": "4WjTxRAgh21aaJUfdD1VPY1Y5i4KNbhTLPbk8BStmnjrodfwMNodC6shrmPqkBQ31ud1D1SZdwGM6dBYt8HER5Xw",
  "key18": "58EZ3ubj9r2L7zSD5RTpWfGUYb47q1TCZKTezLzKH4c9kMq9XkcfAduYCx52ANkKgNcqejeCMLyBUzJXL3mpZjMJ",
  "key19": "2LUsy5zjAA7GbwhKrcDxBgBoiRgqE4ohjgqooZbJkR34sXKt8bWoiagQR164nyijg9LuH3M8s39zKfYNMjwWHoYT",
  "key20": "39S8UcKMhp7Ypcdsvb3G6cv9ntpNAyiGJ6vXKtY3kcZGExLmLUCZze6nN5ixFfD9iiytcDk3CCzeMFHbi22AUVZj",
  "key21": "2a4ZSfYshkTXf9ZMNp1ydnDBbqmQAmBw2Gw8WWVBRiGxE7vDQsrxNgLMJhLuw8ZmyoHYEorG2MthqmtZiaQwyF8e",
  "key22": "2bqaUPgwg25xbwj3ukyZsVtZVQp4DTiBsZPNJWw6KD648mZv2ihLfej9fU6CG17t5KVyBh2ctMAenhLi5xvnQyiY",
  "key23": "3QZkRmUo5qfRLNheCcFhNgkR3BjsXu4MEnLZUpybdQwmY1VKyhMPZpixwNVCjGbRvjD3JKaxnxoAfbeUG8iMJdjq",
  "key24": "4qXHehaCzZoeLJu6XLh2QEndJrnGvADkkHsYnSNNRrhJLNL6mhQuWfGqmcPKAosQuJm82Ae1M9AjDhpeNV4EV4po"
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
