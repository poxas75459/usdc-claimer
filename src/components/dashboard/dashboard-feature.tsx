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
    "5rKJgaS6Av57Y1siGm4uSS2KF3eDHoLwMUaX3EM1j2ThArVMy5WEbQbe92TUdmhbiuz7i14oBJw63dL3xPV5DCcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pT3Y4XLCuqThqKHrYxn38X8pPHYtMzuijWRcNWjMzAshiWoMn4pKbCFu9sfas9i8fqS3THAdPWBZ863vYKWf618",
  "key1": "5UpYrGJfHNXVuwGBjrqH1dC3LCbg2XN3kV4ssHFTJcG7qgspv7YEeUiCGQVWKPPtfs8k8rCa8ym8EJxEQNauh76V",
  "key2": "8GDHJqhH6jDJuuPwarNaD4ugkAVBiSEAPwn8sgSQFKqdeQfi7FPyMgx2rP5mSiFAC7owj5FMyvswgCZh4X1e1e3",
  "key3": "5WpBUkJwRRcvw3Vxx5TjLTN8XftHveSMv9M1q52FQSWCwUhoTY59pjqTmRN6kZArrSWdreojMcmGjvPvLjTaoxYJ",
  "key4": "4WzxWMasUSU3i8JYQ7pCn3sNcBHMzuxPnwtjyYsVnqniazvWZ6q9tW39BzZJmsUyEP3X8BVMggmbzM6LVTZKMJew",
  "key5": "59YmXUvj5VDQRDYUrYqsNjUJvPfMdyuGXjSsLP6CMZpmmkLaWDm8U8r31vJUeYJBV4XUyTQMUu7PhdRvFvQBdhkq",
  "key6": "5RJJYsn11NCDN9jS3FQsrvB9f1q1kbRn3gLSvf6aULPFxUuwe2pmaAE1wY9EQhDpyrAnqVFAU3hNhSGviaVeN3Zt",
  "key7": "8FE7FQupcgGa8BwtFikotKgV4cXJaVjsCAN9oHvRiB3tia7gUK9fTT81q6B7e4FAuZukrhDvCCHiokiQkeqo2Hd",
  "key8": "LYmsRim9QRBRtdM2CNsrxe3JzfDoopFTm7MCcB9uDm5iBudANXjAxBgfxSK2BRz2H3qZTMSK7N8QNSe1Z2x5fuf",
  "key9": "3828SLmgMcaohy86pjVBpd2JWxVUQD3ZEmMGpQTAy2wjSKnhVTcusGsaom2RWikQnfWm4EpCzQX2tHPPaL952r5Y",
  "key10": "2jdVdwBQGmTuJe6tLyhHXLEG1DaerPjVTWmHQoCLWHe3feePCWPXi3AZC4d9cxexoW95vtV5QQ6nhiUv8jembmVN",
  "key11": "7yBDLo4jgHa98xgKQJhqbtPRYhsokHZaePTow8PnfH8yedrgrbGreNqKZ9ao9iYUNestbE9a6mD7ZfKF5yT7kjG",
  "key12": "3VKKLi3Po84jN4AAqNFnjxrBqFpoGu7EeTnArrN76Q4krj7CF7aqwVKYz2kgoLdNNyHLuVgd8jHBNag5vR53A9t4",
  "key13": "2Hwo3cNZFZS9nxyNZJbUYds6SRJKVT4XzSAjxbNvRdt66gEULHA3myaqwNNujhXDfV5qqT7cS1CHPVG2Ut3CZeDr",
  "key14": "2FNRQPtSpfhWeo3xWQnc7L5cc5H2Di5fKb7ZKdkCtw5k9upcjbWuxGphGWctf5xm87M7gpVfqTbKq4P5KpxWyZg1",
  "key15": "2XD8RVvoqzdJ8C6wv6tzXhFjY5i3VtbW9hYvehKWsw9owmDjhhMbVFDfEY86d1i5t6CzuFA9aNporT16dxCRQfse",
  "key16": "EmNoiqsDWzziX17ywJCiRjzjN9SuxcrUGLb9QYEGBThDUTY9DBuWia5yUrdRBaiKTkZZ4iJXp7Q3vZvJizsHiv5",
  "key17": "4KLaTppFAiD9nZfLXgna2TQpn3oMZe2RprAuXeH3MWfcuBSZNfPfBmJCGqo3oWXdqjUeZ9zzRxZgfLofWofJiWKP",
  "key18": "286rzewA3k6J3Aaj8LgbxbT5H28ZweWUFG3A4n3x6Gr986qomCGbFKHaaFbyMLMZ76aLFZ9bzx1S8799oWmtLBye",
  "key19": "5hQo1mqTR5UCjcLzXi32Dnf1hktMJeR1N6C8SkkgugSjwWD8GsKcUdrQnYJGazWD5uXouKBCWLF6DXq6Wbz9MqJf",
  "key20": "3jPXbSuXTHRjhTDsvkq9PLiEwes6yRPehMUvx8ThopumJyjnrQAuboDLFWf7DcbYbquSYQwW57PzwcCrmQ7htUqc",
  "key21": "5eoSUvzrYbLfx2pPK1do9ADJV1uFWPstNCAaHHTUSoivD4QqmNAZiSgWSYufux6D7zj133SVWyouL6stKxL98vvF",
  "key22": "4VgkQwrrS7HNHEuR8sTRrRmR1ZKfPY1WhvPLRuwD1fMS2Mfs7VE51GtwUxXH87PdfPL8CB16jQ2AgCRP7J5ibXVj",
  "key23": "2rUYFJXqX6DaeDEHpZ1PDxbGQHLr5PkWGjngdtb9277YH77raTtwCVwNME9XheEAF5Kw6uutCkLdZ8FgQAEP8p6M",
  "key24": "3ttxjVeVN451Yq5iEuGbENaZuXLxBUrLbzhK5BV4ufQUnKepwRp4m71ZHXC5xvXymfJtyY6XcH2ijwvAzc9J7o8n",
  "key25": "E7gYp1ySmxZDs8rvbxdUJaRZxsU4iDQtfmTBSbUgG4xMpDU2xp1S8YBZtviwzfTcjfyhB1G8AoTdXkdZytrTYAp",
  "key26": "2MhA4QhVZiMQhzfG1t7KLbTVKmXK3uLofsprZnNNZiDFq7DAg4BYeo2VQG597i21DFzFzyRv1iq2c5Se99nWKP23",
  "key27": "Phs9jW2K8xHYXevQK4B8P3cyvajXCjDHLgBF7sqZgCWkCNZaW7z3MadE3Ari9QAdY8j539ewgQbzgVWNkDJUzjU",
  "key28": "2Xn8tRNt8fNZfUKA8pVTfAidAUfbhtL2x5svN8zU5hUbbeU5rKqAoXRiDj8VTLDNkZ9r4XNkJYTdsfZnQ2K2o975",
  "key29": "5dkg9QfW5MJnYVXa1WFLfQEwZon8tQr7QdiJB2iWDnkrfzsB7BJZ7iLYTfMgUzhU3xrpYd8kZUPF7Dkpuy9oHddu",
  "key30": "3ghko6kCeYGSXmnRZCWraTivLHPzfohznnPWXsNaiG5UQrNmLvLQGZ9dHr4neBjqd8mrinGKfEZtjYz1HC2Wsgio",
  "key31": "476cDDtjYhuUmanryhiVqCuExh5VjwdUg1vUGg17qVwTMWRTSFo4Nr327jCdVKWSKtPGxBK4nuEFYqYE6K4hPGWP",
  "key32": "2jCSxpSNBRNcrTMoxP1R8572F25dL4jafxYu5XdcM5Tj19n2GZsSfESTfv5XDKCDRkQwheHptJMkGXegStaP4hav",
  "key33": "4V7JwH6whLcLQ7Ao4DUzUw2bxB9UuuV5XH87uMMUE9S5B6DZRpe93Mh5uijYxKvu3CXgzfwSLP4Hhc3NGvpRgxRC",
  "key34": "4ew9ZpLP8DuxYhP4C9Bd5MQUR35BDxkJkEuZHfyV9wu9b2SgE1hscCqSYNnpzpCQunwxZAGM6HhA9kSBCtxqBhqq"
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
