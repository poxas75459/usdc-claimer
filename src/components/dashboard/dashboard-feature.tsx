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
    "4kopdSbrfQsCdHaRFEi7Z3Y5eLmpKZWBxEWDL6PzCMoz2bhPbNqgeEDhnheNpSDqpF2d53XeheNuSmDo79QzHdtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heAu468R41opF3fsDwbm7ZKkYdU3taLXsaixgzvE2tLtrR8aQucxMMHfMDGqkdV2UMRUgKJ98hQWtErCZobcooA",
  "key1": "2CcwKzcfyCcvvESDxD4QMrherLBeEpR1PryjbYvBfF3zvVT7FrhHfFmEJY3SudnQbSU3q6esB5mVBztVnzr3m2sY",
  "key2": "4EqukxmsYgjgxbTd8KVkXrF4Ru36iKnCiCUVLn4ZSeDzPgD4wiX8sfaiUS6yt46rR1RQ6frVKeUzx2ywc9bddqNg",
  "key3": "3tZXUVk4eJ2YEMkvs8nx6htSFSgVKMfBKpUDj2nzssuoyHnFJzvj3Wcuk75M2ZS6kx5xnjWSxuSAd3UoR4NgpUWW",
  "key4": "5L6AC2VjPbQiZfrvc2YoYUJTwBD2wAVLn2NDuy4nckEEJnQtPV17383JUSyKpv3cA8ruqNsRcYQ2CuWnLnstzrNy",
  "key5": "3exGkid7kSS3mo5BHCarnC6hFCoFPyp8KJ4zsT4pgGK9E1APE5tW6bBos2E56C6p1eLWqZANae1HF8FnHgcXTpHN",
  "key6": "5CVaSGfYfFpxUfRRKNKZMqi1KB9jW8PHaCcNzRbgLZEtQc9udSo8qXE5SpDBQSvhVHju4tjehqEeTMauvkALqdb7",
  "key7": "5NzPfKveqGsJVAVXRqVN7x4CW7vuReVQnFUGGrTjt5Wqf54ERFEnnC9PtdeAs3ZQB4QjEfXWBKTdJKNfJkkGKSdX",
  "key8": "2b9eZDanEmV57DXcxj5EtFBAVPQmh2z5KUzrbD5ESA3SfsQbtQe3iCdnz7tWFKTtnfZ9LNb4qgxoniUGoeFcGzpn",
  "key9": "4zqes9D7f92wbNgcd2LZfjWPjR5Hag89Cx8ksCbSdXuQwMBJkPPgxjXpK6pAbaqfKbbxwRbr2mKwyR93F2iVRxUL",
  "key10": "2DVgJDvTh5hLXMJvQ41AE8BTp8RaJymtc3NiaVmXwQ6R5BZRZfqTgsWCnnPDyqqyKfRduiGJTVwsQL3G48ag7xnQ",
  "key11": "4taPYbEMUh9pLXpqwHMuG9hDS8ghMZBcLFbwgHiKgV815ATVAwU6Gtnh7NACTcSdWVRAa4PgKv5uLgkUuu5XbEgN",
  "key12": "4pJ4Wr2hJXk7BVLxk9YGrXZXxsmvoxThS7d5SLWtHaPg1YG3SSrBs71VhtdQNVFnE9rbnSJDarxtCiteiWKmL1CL",
  "key13": "3XR29tUKzSU6Rc8QcgDctbhWMcmEfpqxqBGJe4md4YtpQykxg5XkJ9R95r2s9NYzqwwf3HRM65uoNhUsPMtEGmUZ",
  "key14": "3ohYPhkCwHvgFdqg1FWa6KSy5RUGfdkzgjLG15ihx3VHirzK5iCQ1uECVVSEY2MpzKDBopRmzZS389HwjfrZ6qxD",
  "key15": "55kowSKWQq6WhV2nxBvc7jQ4xpsiiBgwjzJ4rhG9UcgehWv6c3P85Mo27fJGX7odBJ4bSJULEC8vU6ygnLEUksjE",
  "key16": "2KQgkVjP7He1uGaqNvCQZw51JtVUsmYKVgE7V1QHebUpUDTw2a3Rjxv1o8ghQDKcSJL1ggcqfUcQCMNxKKLGQSkW",
  "key17": "35iKciMm6sAopDMLbz49rSy11sZJhKg7NcdfLuM2dN1ezZYSibWCLKYXmuMV6G2SJbfBAft4wMkqA3HJEx946hf3",
  "key18": "4rrktByF4E6Uy8fRDYEhncKG4D6CMvUuYxrjG2wL5wNnUobtzWj3hS2soEzGY73Lop9QrmRAA7H82UySAnb9dSsG",
  "key19": "59b2i4NT28hzEQXgFyvUhH8iUPQFq1AFLQmFdasMhkosmU2teftjHw4e2X3xHBAVcHDgs3MpbhgyYWNe1ksbjL43",
  "key20": "52SCUq6SSbNpWEhfJqyi41jBRHB2caEWzJB1KMW3RCqXbXRHFW53oFCQt39KD6SCFwyTk1jR3Qpw69c88ynVMSAq",
  "key21": "3WJCxHKUeTbh6wTaBEUAbHujwXVJNjuLQ58wL8V95KhA8RoCFe4WBsYttzfNGJQCTRz6YKp4Kkba5VzNJHo5H4gn",
  "key22": "4rtA9PKWeHr5N4Eo9WfUcGHcGTH3rABT6sd8L6VwATdDccRidcTRJ4Pf1JHxGFZjbWTg79upS2hgMk911uUs1S59",
  "key23": "5nbLi3uH9KGDZYhzQoo7NQbrXaDuQAWktZGNMkdd3sonn14dvXXxEAZBn1hYNxUNymkZ4fWuV4cKHoz5tiXnsap",
  "key24": "45DyBC2PzFQKJCn1Z3wFVRXT3Kha35of6crGbN12QnFuouBbREW2gru2cFNh9fqhyfVr5hB3JqUQzmKPBvAnUbDz",
  "key25": "2SMk4w9MjZq5ya7J5u7A9cGL12dcvmvxiRzQm5jUzNV4NEP8AnFYTDtRKoamg68iVwSQ2Tkj34fbjKTDYmZWvZB6",
  "key26": "46jQ3zJ3uJRPBR2oCCsiPmevvKCVaq3unGqrcDXY45DqFic29FRoXYNxJs4JCBn2ppVQi6yyiouF6scd4UN6rfkz",
  "key27": "5ZBV46rYvGNVYqw5h9WSAJij24GBXLEhDY85Ni8FKckRDcd8n114mVLPJ9MgComJRowHrCcLVseG9gzqo76wARSE",
  "key28": "5HWvTCfPu4mKYYjR9QDow9jm3tbD2zYhR1X685B4ZazG2RXqHTkJB4WBpnJ4oW2FB9fevd7rCyQqHFfmCqdZRnCL",
  "key29": "5igf1vUZrqvDjHTrEp43eJRDxNEFmVStXxsEcU9aiW2YrmSXPEoWUKu7zKr5kz9QKhRgYUUScj72p5KKrgyPzmbQ"
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
