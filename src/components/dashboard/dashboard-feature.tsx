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
    "47ht7Sd9DW32cnqZnsY8KPUj6KpTYAVF9vXBURa3woKWad6kATRhg77o742FMYpG78qfDj66oqk1Y5eSFBhjMqjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yo3WRSF7zQ7BMBzwZAqw1LUxSP2J8j6DS7ekQDVJmqmjD2KWs2CZtw35ag2FeJCdW1jTqgdyaGK2P2QT4mtfCg7",
  "key1": "2veDYFhchg96NSuvUxoeVtpJg7raEbKMYPGaWRd2pNtEczPB9Nvto7vkDY5VrVy6Kvo3zEj56YWMQnwZGGJty88F",
  "key2": "5QteJqmCQCF35gDkrr97NnTy3H3SM7j3aT9ctrwtW8JMVaT7ULoxcKRUXXAbKb8SMBhZunm7ah5c38sWtb5ZZAne",
  "key3": "54DLXtYrFmoBbiuczcDM4KU3SdD68XVUWc8Vopyc7SVR6xGR4WV3uU3jfZ8cN1Xjd33i8E5oVqNiHzfBibvK73aT",
  "key4": "3tfU1bnXUaj6kTCMLQ5zKLxsXcTenYbwHyZHzHWivZdfG4VzUKnBYppXZQJw2SfSJTbWPwgXHwMq6uTXKjhKefw6",
  "key5": "5RYubK5pF9iKpHFfoWeVYuvFCHBx6XJKCFZrLPtdhjjUgHxMV6Ym4YFEJMFhomgAxpgrG2wte1et8RaYyAXFL6AN",
  "key6": "3Kz1ZQ5mjM9STHqo1KmJQoXadQ4QSpmxnzBHon7zbkpooPZqzWGnnQMaoM9118TEzyuQAt2WFijfNXnL42v3Uiit",
  "key7": "2RPv1bjhmqj7bcqKnqGJdArY3RWpSLwgHNWmVMyaUifMS3UoMsTaWrBGwD7pcU2KxVCcThap9teW7SREdFSVNZB4",
  "key8": "4mUX4SygBujxregbNcr4vUVrPVxkrMhbPNFUrfV3CZ5fFgyC7sFy5KRdz6bX7C4U3UEiv5jHD5kW9t4cKLNh8ttK",
  "key9": "24HsV5ervQB3rxUdbV2k9suodMrvEWHBSBfq8yQ7psQdSrzbyavJ6PSQDHHgxXQccinL7AMC9iU6f4K8Qygqxakq",
  "key10": "5Vod3xGMYZ8arfrmCMt7HZj5WbhrEmzR1jR1CikkyrVPHSbWXQ6CZwvQeFG9XHtpuwWE1eYwWhrJfW4nDcmNMrpn",
  "key11": "42oC1RYctd2TtQEPrqGousAustH8stkmL6MH9UE28fNjB6TjRRt7cTNia9DchnQzH22MBU9Lb9KRGfbSX62ToFzW",
  "key12": "5FEhhu3QSg9Bzi1QpDSy7Uzn43pnuNq5xXzNfqPxMqLCJPFNNgB2woJ95GUDJax53HfTDrJFKRUGBMB8gHp1tC3f",
  "key13": "4mGLSuW7fkAdg6k3EtH8WDrWzFCvJnHDnhZWHWog9pH3NhC2NskRmDCZNcKhzc99FEDcew5tuxbvdUxkm2eqJx5X",
  "key14": "Tu9TYCPs88XmTnm1Se1i9pPVdcCMRiMPSbTqigjmt9Mycw5yiFZmXrUBjC1GKQK7Uv1n1YjtQ4SM3au9j3r3MvC",
  "key15": "2kMfaCAPkK3hJqRm7F9Cqrp5SS8D5L9YuekmUaeXB2qDJZicFvBypbUGUTJGrVZqrsNGaLmtZxgxPPbnWHhNZAvs",
  "key16": "5yusXgBnuy7wV9HcsKDjwZ1KZMicTQ9pVKCDhxsvYuPsa9eipxhU5AyuFct2EYD8mWewzqFkjg85aHeb6bfDnk3F",
  "key17": "2MxCGSWhc6XzM5Mv5XBZYVwtLZPEgaDRyEwFLQEhiziHUzbhjhEL5grKnwsXU9xgur2Mg8HPAx1HtG67YysiSQQA",
  "key18": "3je5ZFvbpBu4DPipEM5dNt8iX2ARbo9LkMu4EpiedfzrzwQxGkAh1XvXG37GxrvB4R8EMujT7zpJ1DuNtNWwboWu",
  "key19": "5DnWmFR2UoSM7mGYJ4ZSmDYkP1SHFKQZgm89jF64cbKKx9DwZUSVT23HNWDcushmWKUgz9hmGT8PLYHeAWhojtXQ",
  "key20": "2WvYFegyTNQ4fox8L5MYkWTaA5ivCB6sj7CqBn2rWcGub8qvBM6MFH4wM6KTgDVbkzNVDsUq8KZ7aCj5oG2hBNts",
  "key21": "3UCSzAXfarjBjHmDEucVfdPQdRL4UXQS8APTFjobCpLjNtrptJqh1r6YKqsQJY5QVuTgp2VzizAHFDp4zQFEwKgA",
  "key22": "tJXzqnPh4a1ix3feXQN8R8fWAkZES11S483qcfQHG92LzJ5SfnCGTuAFKXWizVa3JQaRj59a3dyrWSUWdVTWCEe",
  "key23": "4igmpuVts3b6m6rUTGUhEKQY9W3opjJ8F3jbbZiZsJGFi1QxjDsHGs1yCLnxALQ9tZBFjUzMBsuBXZNthAGbFWH6",
  "key24": "3MAqXkCFmVLKhh9n3Z4HyrHEZgdTkiE36rbdwvwWhby1uizyNz5VLjYPRFb8P729uRMrFmbtHsRpHTUhFBTbC8QG",
  "key25": "4KSon7nbvsKcdGZX1ABoupBHHCRyJJg8tdUYKvTFQWSbJSeD6rsK2n5ve7b2z3L45VEXmva1wqc3wsMViRw4Nxpm",
  "key26": "2SGFKnSbePRFqFtXPNRNNbpqHTLeKP5HYDVgDH5NmfvsHNLpXiCz8i6rPcXDDnKB3JKB4YB5b7rx5ndnDVLt6Tt6",
  "key27": "2JbtbZzEAPJs9zgEY4FhVAwfKwk9Krmx9CV8F3B8pvpZgssQCtBZ7ArGjKVV5eDoZYQmcB3ya5uYQGNG4wBfPv3U",
  "key28": "4jEh276PqmA9thW4zARRfZNyYDTmbCWRoiksc9LBhwqPbkNGemP13vDL3Jv6WcrBzPWcTJsDymJApSzU1vPGSnvm",
  "key29": "4DLFeiHWhmxz2kUhyaFbz4HFC9Ldw7nHaVWUBRqTWjrcE1snzi7HBmwg1zvYD2UgPd5MSdmjybKwxscoS8mtxMVK",
  "key30": "2ZzXizMA5gmUJP2oBcq9LxyadUoYhywksDyLRX4myjWeeJ1jpoCiWkD6E1LuiK4ZQwrZPKtq6vACJsuVzjE2pr5q",
  "key31": "drY3L4P1fKBEnkUbmovVy9hzawmDmRXaptxBjhgA4himXaGv3GR2qAs769fE1XQFNAf41uDuQ3hrFp5wTj9XqQ9",
  "key32": "3Q2ND1uzA7T8hQSZqtVokvq1Sxmc3SMUKCTW9NdFnZ92rdafSdozUzJ7m3jUM8xiXgejW2SsbrCQTTEifTqfSU5U"
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
