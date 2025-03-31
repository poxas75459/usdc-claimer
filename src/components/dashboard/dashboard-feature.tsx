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
    "2cEjCpVxysD2S6RUZhnoCtyeb9e5H84gLRwwwi97osG5KNtpwS6K19nfWvN14hAAWHcHs5XndhgSDqbdP2mt2fj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gKZWFfo8HkTfszwPjcva1TKeCd8Dnb5TPCH7trG1qFa9SaU56NRrWYYQBNU2XJEHoWfnQHDnv7k3TSqvhCA2eG",
  "key1": "31ZXwVrowzuqjLTQtJhheEbaV5fFxfSpFQo3a47YdETa4qbvzkHeJwaFbFQQMMw8epHqfgrxGxbkMyqT787aiAi7",
  "key2": "XBhuA9B5gr2t3XxogywciMRSzCtWJHwBdzcaz6rXQEpN2z5Gr7yzfU9eHwEcjyQDJv42HMmnEmifkRxiEcYwCyX",
  "key3": "5s4zz1C4Z4q4HR2sxu3YWKDXaGCVqxbxEW27JSm4CRPRBUTT18y886bvP7Wv2w1tPb9YKBEZquk8uLeHPnZq76uP",
  "key4": "2oU5uzYZ9P28bBVokMYELaoNhFh3H83Jdan3Sh6WmR6bt4vXwodk2iEJwkDbvSQe8QbukKgajZHFZCbDpsUL3Fff",
  "key5": "65GhXnV8j66enoiqH2tJ82CLYtN3N6TtdA8BcpKqfcKcjAXwDkw7aan6pbxnGr9V1ri1qmfHDAmZUTdjRwNuj3aE",
  "key6": "67DkT7vewVVpmYHtURRPZZ2ojFCh9s24JUaURxrmYCZnp2x9xEr59xsnM13ngzA7vGRrpj86SxKAbK4mQeUPKBiZ",
  "key7": "2tsYTzZf1kyxcB17SVMxd8NfvqAjD6JG2MXtWGRtkRYo8vkTPzKRoEgi6KwpYFvssPK7zeXmX2xpfxVnAuUnxo3K",
  "key8": "2wJwKkpb2fWqedfMbnwEgGuiJEQVvDdBb47kqS3iDp9QeZh58pyaTsXJ84kFMwdPibPWhRoiF2rNjknaMYnFoVvt",
  "key9": "4DgZuTv9xUZy5qqiLTtcUCByymGUYVoczqDRkAaMdjjVEEKwixQ5AL2MqLx4krDQQLezzQWdUbWEvVpmmQkiSGM",
  "key10": "4YYyaGH45fgHA91VEgGRT9Pk3D5xeXREtZc8uhyLs6wtAMyqa99FpPW1SXT8Ndi4fZn3HpkNf7CwFEQ5NDUwPkqR",
  "key11": "2pF1jaJTLkXCwT253Hn6pBXAKDhSPDDcXwNFeuZsWwVmuWW2zb9R6M6qsTZALPiojrhQWgAuTcAJ5YqhwNJHsvei",
  "key12": "5KmCwC62vwkmkXwrtvszL5CzDsdyjCGfpi6t3VuEJpurnEZb3Fyoih6eoC3SRGnE7A2siK4b19jeH6KC3LWQ5c1h",
  "key13": "37hFfeFKW4B1qKfa6wowKRQD2xPaLFvKatbzCSe6Bust4JpVj8t5FcVQDx62LQey5mo8XrQxjSjDyKRBiguh4BFB",
  "key14": "2CcjEYa2mb9Tmh1kN1pXwPNaq8Gypshgn3aYBuV1xj1VZRPK1JJCiuhPCJaSgLtyjxhPHhadGLGg2bc4qkpvTv6E",
  "key15": "3neLnsnWiuqRsMg72ZcDTirH7fBFoXVFq5T2EuV4B6xqhNu68112QFkKKG8hTX4d5X9SbY4Fd8UpvRmbZHGGmhfh",
  "key16": "uzCef3KUgmLnDBWP2APrCgyqf6Vv6rXU3xDw2Xok7WHQdQNuy9U5kTwZedSaN9NodsX2wfTVGL7XTBWtuPv35Pq",
  "key17": "h2KYXFYjtPdk7ZN1JoKynW6JvvAL6vnbw66j4dF7paxbmgC8dCFFtWqcq5EesvjhwojbfuRbHhBaTEnR4Pbq9MT",
  "key18": "QFj85UsMjDGWfY2mNaAY8GgymFTzV95rtjkHsY57PoKotQYPSaqb3JSUSWfG9na3G7x2hotvCkA2GkXSnWfScpb",
  "key19": "2Zu9Qok1gBd77yTVJgEjgNcvRauqkD5YcjoRir8DYm3gbEkcpzkrKk5aqEfkrqa8ByASrHcaZjosPww5bC5ovgVP",
  "key20": "4XRrPBGEzmsXE4bmPoBkWsCsvcdX17CTmqeZ1GjhJMdknz59BQ4LjrGoRce66LDvYAeymQHh9VbZREfqMGGD7BDg",
  "key21": "5iT2oUMh329cLsfUmwiSX8LEMbNygyLQL1eihmZY7cQjA3T2jJenQRbHFBvwrtmu64eFpg7JwzDXRTjS5CNVBLRZ",
  "key22": "4RtcxksmbTveGGacSkfusvAgNXYS4X4qH7VERKNWyV9ZuYKdTYwSoSnuWsejTSLc4W8gjRoaNNjGvrRQNC49vgHY",
  "key23": "3DjEVwLATBB6ZDQBXWboMFByC2n4YFCmmMCbf36T46YNNQRWTeL4pp1zqSBZdSPocTcRomQjaniEmdBF7D7t35XJ",
  "key24": "3rqZBz1P3mUggpRgQShM7kv5C5RuvTp1FVMXCuccHfCKUDXzzh1rpLCH17vkyc9HLciGy2tjYeogd3ESWbXFkKhg",
  "key25": "3Ld3ug2xUxfbKe3iS9xYUvMBdfnTviyK2UnjXsFjW6ZSVXZ1SuHRK7y4iZQEcb2fQFrMszGVmZzCjsE1GyKqTUHL",
  "key26": "3Zv3dzYYRoArVTF5rxmDvqQ1SgJseDB1ZPYq6SiaYa5f8o9gFmCSjmfYzbBCj7qqTnu9BSGaxQnK85XDwrPVLTEB",
  "key27": "mzmWNpnHXKSbmHjXi9FjjHjwfZGEmMhgg1ww81D3Ma1jiXkKZAh4xG9H8qbTGbo1NxUnG8VqkJ56T46JU6ensWc",
  "key28": "5aApB3SCcPvdfThREfnxezTt296NUgukfZDYJFZPWrVBHyZyKydSKRw7Ng9f6N7ghtitv7y6vu5cabnLzKcNThMa",
  "key29": "4rQUBm5cwee2wu7Exr5QrhHVupV44R3MHKyhpaenG9MAWGpzKn37mKf9YuKT7QbkmWj8mGgQckoLCZX65nTazU14",
  "key30": "3yihTAmaG8278fdkZE3vRCUTA7iDordFGKL8tG3Ctfv5Z9fqJiwU364ciavX8rWekDiLDyndt8uvBmiZSUXwCiTe",
  "key31": "3Jm57UzGeEiUs6BzLGMzEGAQYFeNUfLCWHhY6xFM2gQDXTspQZbR4h9gZ3sM5Lscietsts1vSpnKB3En8ACgniZh",
  "key32": "VixipbizNPKdKMU7XHmpkyVEG7Kh7FSN8DLT3rTMnHYzk6ERokBggeCMkQ3sC368mpbzKNiA2rQDXCXKJyLDSHb",
  "key33": "2RWQv4pKW31To1NjSLeDeS2n6HvxiKCsDrxHNYG2iUesqNFC9TSzsbpgdue5xeeca83yZ9QZTHMSPDNipNQjSSCk",
  "key34": "3UahE7dxVqUzgjmj7GgzGEKSD46mCGLx4zZ3b9dt6qpypwxFqed65LpY6sbUbMrQMxbT4L52hse44xjnZsMXvT2Q"
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
