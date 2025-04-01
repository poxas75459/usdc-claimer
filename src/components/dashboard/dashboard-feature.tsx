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
    "46kHjMF262dmrrp2hJWM2brkGhffW6MYYtkv4KpADVrZbgSsTXceBDw5bWTSTnrGEJPrkwfFSePgMSRXPmpxHxkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbXuHrB4s4u8ewDD3QizV7UjVXNCLo9T2Wa6cgnFrfzQdbTz5sfBVXJhfgCMbEsh2FrtsYrEpUdHCMyzZknBCtU",
  "key1": "25EGJq6vBAK3LgFPGYFuYDGogPQydASuGdR5qb1n1BPZQVzuxJAGuBZCLS2t4AWKu2j5HKgHkFWTYpJuQtmUt7RP",
  "key2": "DE4F2TweZUgqA6GtP1GogHjbhJievynR5WY1Adud57sSiPhHM6AaxmfTwtP2AkShCn4LfYtv91sHvEaXJhWnSrE",
  "key3": "5wettckt3ciQh5SVebHU4U8CxPWvJtfcAEqjXZcVubUyXvHqV6zaQFo5G4RqkxqcH6pHfvgsy79WTWK1BrQi7i93",
  "key4": "3xrwUHiWoXhyvrzWdkNXFSC9iXPt3Lr4LRYj2YPMowMvBGy2fUmNHhfsQQkRAGt2Y1wHV35cfKScknvzQLkd1zC8",
  "key5": "5DFKdDBTWzU2GhNRfV7sxFABNb24AL5VJxdurNJjzdCqoWRoo5WxFhZVcyhwUVtE8VuZUqtr7WXLhkzRonDJTnbX",
  "key6": "4BaMEX1SirfMoYabV9nUR8fp1PnmiVrSpj11P7MdAUGa1NTYNYizRcURXfREMcCRjHavE9d3ET2hqFzwexBfGQ8K",
  "key7": "4UHubWEa9Ji5XwAQ2TkvRMmB2zLzJZwjLhySbLQ1bMr3pQ16kg5Reof9GCiywrXyVgwXQLHfPbR6uQdAtNESSCop",
  "key8": "3uF81vHVvgc2xhqFq6bFZ6CM2jwTNfqNUyNMC2NSQvMiUTP9jWUN9CjHo7two8HNzy9eBmXdh5GRX7WqByFfVePQ",
  "key9": "Wd74rbLPoT3x7tAdVXP5vb39bQiMYmovxpcv6twcQso2o7GkV8f56oCie3sS58HV5tQAvkubd4ZJ7dH7WR3Spcj",
  "key10": "263j7JqKqKBbspFg7yrWK74oidP2BkxEfDLu3on85iXfKiyvmQee7urNVNReWC2q2y51NKN16CxnnToZ9PXAt2kv",
  "key11": "4dJS2tuZR2LEgXtUGEg5k4xh1iAawAND2mhbe28UeZEfzAwZ4YkMDwruTbcAaYHQm1U7N7LgYLxNcdDxyCEDu3EF",
  "key12": "4jv4qvaEwXZVkPDxcSJ4CTSHYCCi2MdqWdd57D4vyPQetKxgP6Ug827DdaY4AXFFbkZuzFQz6y4rJ1v8cJDLgvPA",
  "key13": "53iCVuGp3HjKB3v8ySpCEF6H8E9cG1o4UVVuAreBkvV7gV6VEMYTAWQjqcTrJF4NEiC9brovHfF3kqtrkVUonpVt",
  "key14": "4Wj676D7DPJbfTzGr5W7K1eAH631A5wdcFg9zfat5JtFxbKZyBUvUDUrZaAunVhQH2pNpGkbxEVc6hNBiVCB7JE7",
  "key15": "mBqhoiJREizqRMzMzk7d1zwymLT7ieSvozVfXKzMDeaTaNjLFEaemtLcucaZs8WHKZ6pg29DAAQMqwUJTR9TrJk",
  "key16": "3yuTJGVaF62j2NaJmxebS2RCExDPezYi83ZLBPurtJH3jdvanEQJaYCsybVDrLY7K8AkLXasPfkHmCtRWbR7dx4f",
  "key17": "2hUA2V1NCHwsihjQFYPrfC1Fn5rbH89byeTUb9YGaTXC7rqShWD7tTQPbB55xBtKrkoyvchUMxxJ9sjqfR34XQty",
  "key18": "5LxGYcJVZkmso9SMEi4vrMdMFwPMADn8L4hjFExAYpu8g7cJP7zLG33YDrZHDJfC7Gzx3hJGZKobEG2tXk38jr3R",
  "key19": "2S9pEKfCxUEu3bjTjWJN2ZXnpFTZsnh2F8Y2jWtmmzvVbKnPmostFaaYdGHkMvLVozhAH1Q2HGWcHr5NnSMyXUK",
  "key20": "5Hx8NLTGZnAuuYH6yTt2k8aKZVtNXUdwRD3vKWNgYPhtCqkqW2tAtShj1hAvvHRpY9uw6q8PuZdPiYB3PS3Em7tK",
  "key21": "5kLKVbXSxEXC7Z8nBWVocJ9dKdsUceVQfiyfqinqk7kyun1zPQccWHfM88cdiyt5KXM2277DK8fqL564RmxpwEQu",
  "key22": "2wzBhB5y1S8L6MtZXtnTaEzFNkBqS6TCdLnV5MA4YvUwYsKtALrF4XG8uP3ZaSp9PWof1nBdZHb74A4EXdPwmM3j",
  "key23": "5mzHeaitziG3SQkgCvuYn5xdV7t6wWobPvTk8Vvndz2VyJ2CkzivJ8GmDt6iLbzppDonV5fiDC37E8weUrtJR4ry",
  "key24": "PmgLLTxiTrm6Eemh4dH2okxg8Fx9hMbAC2FUxfEQt6aG3BvWVcHUMCPFDpHTpj3SHgJUGZPGZDrRQZSxHtohB7d",
  "key25": "2TDMj3ktz2CXJVN7QH1mWD4LznbVZx8PcYAbqcZ65AJw3KibtWdEZPnzN4fZq5LLy9ww3EA5mCu13SJX7DabJy8E",
  "key26": "XhZG6wuofy9vh24BrohZkZhXu9SfHrnEoeKEHtyuCN6JZBsk76o1q8pLG8T96eo1MyQPN1Wcd6QTGR4wPybwBm4",
  "key27": "3fEonnvwfCDBuFCPhsDJQs4qw7F2Bcm8hWGLJxtUZFF3AT2V4GVnaDpcdThyfhJZ3LKa8yeyGJrGgFiC3gcf4FvK",
  "key28": "4wP8WmMP1FWyGrjxhy9erLkYTY7JBcqymnjYmtwoGq9u4QvHod7rmE7xVaBnmh3SPYQcXiqmtgSeqWvqEHggw1ZD",
  "key29": "3zhvnuGfTJoYqvzatY8ynjnCkSEVJRevgdutrQzuzrQ7bWHpKGUUaDkBguH8HFbUTDVicA8Yq8q1k9rLHnWzt6E5"
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
