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
    "5PzvrRxbYU7q7W2hAfBaSQj6uLf6KDWXAZHPAxQFBRdtPTK45VvNRCoqfKnYKsnmaaRKv8QUdSR3LMCbAF4c5KwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rm8pNVbpGZgj1XBhZzPKJ27kt49R9A8Qi6XvzNZH6p9bkrmh9qz1LwAXUKEJwuC59u7iS9S4QjxbPbK69zBYsCJ",
  "key1": "R5f3M2HihdSp56ESikkfCvfHe4FRPFxoTyLYeRwRpPDRKKTAPmw4CZmbJNJZt7mMK4omp7vQmJ793B3NZQ6H8dB",
  "key2": "1vs2WfwXhkbQyfqcdij15foFW1cMBcoBFULQcEFpnykSVkWsoqWENJzsVEiEqzxvM4h9aEckhznyNTC9KjrzWic",
  "key3": "99LGBgBvxEMVLGmfwuAeAEpHahThDq2Xiabf1LjqxiH5hEjbLyD6speEkvjCkc78x638fRnez8xAR9BsbihrhgK",
  "key4": "2Xd6kTPi9FJMsWyyehgPuZfuqzxRzXjGg8JaGgtLrxYYJhKWgQigCGFCYfgYwvxwDvxf6wSSEJLNZVN3DtZdkhAV",
  "key5": "3GxGbr5Qr746AP7gHs7X41TZnWCXL8RZRQ7h5ppjgSQTnXsXeY3nbksU85qAFZ4Ds5NCBkoFCsbJsYjyS7zPU1fi",
  "key6": "72huFofLJYP7NbrmR6JMmzh3gU1tTJsmYMb3ngmLvhGy5JGBKu84RdwuXrZE7uCjM5bUR9XUu5hu2ob2UxFBxGt",
  "key7": "DLzb8oqWKBK2mzvCCcSggqgoPrATNVTNU8H5sjopy96f85o7scPQtBqfwzcN4N35CoVgnydB464r1hZL24ayjb3",
  "key8": "5zhA6uFbdcfA7MLCxtnCgqgjkaDvzqRTb64kxbbhcTEa5RxW49ceE9ujafoVhNR9QWATKkvHYxtUw4ABCsnjAKaj",
  "key9": "hU69kXsnYFWfgiabK8teYpzQwP8M7zZDMRTCMckiixEisJ1esJQuqZTgDJuiB6j41AuDFxaBX5btiyYbpSHttar",
  "key10": "4m6k2aM8jzQZcfMCfWMWQCZxR9yMufLnzrs2qUAVKYkX7e8HuyNUdnbBtz4FRxww5N1pJRjcbkd9xrZ5v9s7mYoD",
  "key11": "22jmvKgoTQ6P9ZV96F3bwQt483rNve5XyqDe5aAJbhg25va1B8fgJLC7FFzxyBo65X3d29xruDjAcvgmdK2wUmBW",
  "key12": "2JdC1kKXoS1tAcjmkqDh3izgHhsTqa4rkrkpGX1D1kDNuGpeYvP56ZN5dMqax1SaYf9PRNTdzogQN1pkVmL2sEzv",
  "key13": "3DBVTcvH5WM5ri3N6GQt6LgdQ69zVXg63FTaG4y2JV76Bu6N6nNQCTkg1YgmEo6ZHFMWPAM9UgGJQUM2xXGza4E3",
  "key14": "4LpnoPngMcEesyBSd23VbAWs3BkriEGGFy1bERVvcqyHVnpz5TnRevA4fYCJ8cDsrRArGWsk3L8uk1hxMEfXMcCE",
  "key15": "5byyB5iKFBzAzuVsgDn2gHtA2WdtJd3GmAexASePd5Vcw7BMJWthmqYKzwVL7NVC4pTZJTrfcNzPcqrBt4UedrZ2",
  "key16": "3FV7YU8KDkXAiRFmdszXLpd8CPBK8Wc99GsYVurrgqwmTWCeUp14SFUYAu9RcTMCzbM3bMShMhq9zRUW74XmZV4S",
  "key17": "2URi5bZyEKAGSo5ALaiUBUq8dQyUaPch2wHdtqgJQoLbLmCd84UcYemC8rBeFejMvEZhSZMVv24uqjTMRumrRYFW",
  "key18": "4mWxF3Aak9cBJyvifGtDMd4PmqAv2LRZviK3USYdbLJb6UasKVxjdBKvEtSZXxkhhMBSDjzYtCJcsAEnJWoD9Ryz",
  "key19": "2JoJzXmFU4mqmUxiqRcUsDUeaHpRPqs3RhNdcpgoeegdFohWx6mYFcnG1fqBRYtoQ9hWmjLNbn3gczk2GxEaE2Yh",
  "key20": "4WB7xAxdoBk3rGkynFHiWAMv31LjDFxy3ujfiN6hxvasoG6Fetir7QADVM64ytQTN7LPWVG9cHT45mTrkHWe6yAL",
  "key21": "McTo4wSNovBjpZMDY29CdGGRxrATvqdbhLAnJwiBQfqbuaRxagZGPzV48ry9YovuKetnxVQjwPnWrpGf6ZzduLb",
  "key22": "3qS6EfFCbdHPfmGoCAPb5oi9ed2xB7duRZ9xaW6xCozRRUsdKvfFHMKKrqhLSroTpBTWVXPYBeLzGAQHFigCeFLc",
  "key23": "5NwJi4btEoYfEn8KvNAYQdMW2RsdoJBbJpsoyumDBoKdYd5siswYbcDaCgAn7CDeDzAtHCWjqbku1MebrnQSGPbz",
  "key24": "3KcmHPvRRQTdBFFni25jT92aLWL8HmNZ2286fC5iq7y6VDDQNjoKzAuzdg85XoEvuxiHL5hsyKkf5AnWmZGG6axb",
  "key25": "411LaHmyouxy5ZyFpGStYwjPygrby6FPcRTRKHBFVsviBNoD7dvjcHdyS8XqNb7eBdjbjbKgjmV1YqQBVihwnAnx",
  "key26": "35TwYQsv3J6rjtJ4gmyJrT1zAZG8YSFPKftdAZkC7yw993ERQSfyiFU6aQZNYVuhVGsQKYQsUrBfJpUzKwTzWif1",
  "key27": "1Z3Z2siLuhJZiSJssifes2FJB2T8k9wND1kU5Feqz3NKXWeMCpZDUscKFWHTT9GezAi4N4ZMqa8B3M5vN4kdY2C"
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
