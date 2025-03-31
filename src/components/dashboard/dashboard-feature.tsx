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
    "5BU2bwG5X9bp1TDW7H9b5aSryvLcWuna7eLHYbTcpU4BtpGDc2ZcFEmfMoAS2w67WYwxHywBM1qknCcDSazCZkRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyuDH5RT8R8FarPXxrgN2RwHycrC5Titv5nKLZDpcczyWLVvSfwwGRKB4qwuNbt7qkuKhev2CRhnwyyxQMS4qHU",
  "key1": "ur3Juy5RNxGf1quL8T43weeF6e6yhn4GMgpdXyKx7zPbwv3W2UjqiKRTve8fjTwEueX7G12MrqvznYwRvq47mu9",
  "key2": "2uP1qroK1rQSXqazBSvpkVudw9GGsmPnXiwae2pyw1bwB51o4uVDgatXJ1FQFFGrcUdEWRtff91hfNe8wTEUGHSa",
  "key3": "NKSUScQhTtiEKxH6zDm8KQJGH1KWiqApX4DnAs58SCtZS7SvvaH87CB6xcwMThVfKPky1CyWj31XRWsvUP5yXbL",
  "key4": "4AMQgxxyDNeWFnLokvCKNVTv8wcGaaCHTVZ8Bw4G6BzZg9rkN9nXrMhDAYr6wbmkfYX1bARzMLWhNNmj7Tpen4a7",
  "key5": "34FHXFS2pZqLDUrR2VsXtpjAVy1FPvS7W9JBtJyRF6Hf7poweuRmXeYX5aANJEBjPgbiHQkcmsDCzwN4fe5myucU",
  "key6": "5fgWtgq8xnNaboKpxpUmSa5vrms2CWtbKmAuYThqzxjShvy6mxWNf12T911csYEAPGbuZQt6p9iPEkCPAx15Vgj8",
  "key7": "476cy463XcFRuZeh5Dj7zVUJtkWnRqQ4XQZWVTkqAjWe9Jc5NbpYFFPLmYCAZVUxHy88YmAkLchZ925cuJW4UChm",
  "key8": "4474igaApLd8aCVtZ4E9uUYn8fKcuA1RWZFfSqyrjcuuvqpwYeGaY5h6uYSmVBVuxLPi9L4HHwtSV5gXMCBfHkG9",
  "key9": "3iDe8Hsseje42syXgNF8wgmev1CvuhaemMuyUvCQ8HixVY67D1qCVSa9haGfVwFYM6PpsQMcNQCc3Q7UJc65D8eY",
  "key10": "4hN8ad7zTQWUvsyZ74HNFCaF8x91Mae65C2ghhUDmuXcRfMNy8Y7GUSX1gXWSTwAjYzLYzcMb8V6dQHb65fz7pKp",
  "key11": "2En9zPsvft38JAhV85BvpNJA47AuH7ZRg2UA4295yf6ZBkuRqitVDkPcdX2QFKScphtTbBwXAMUFbwBRwGwcq6Sh",
  "key12": "4FatcsH4HVUi77dVsC8CcsQomGoDe8bHSjAvuvL4UAbSRPKi9MGN6jbWR1RaMqTYTFpQF5TVWyhNi9cr6qUbukDe",
  "key13": "2RciyD88R1ikeEcqBXgEUmvQgvmgLs7JqGxxYXY3RSgWdVtgLAJp5Gi5Crb1wo53nmm6WWBGZBUawTkwg8eELoQ6",
  "key14": "3RjFKe7JRsQs1GnFTRcWeWscHCT6GmgHBXiN2z1tFoZDwLJdULTEEr4qX8o7hpTJRiQN3rgkD4YaRsHDDp77r214",
  "key15": "3L9tm32waUZFqBZSGpCoNJbPvQJHaNoNmhKfm35G5jf1DkJbX9fdPh7XT6z77kkPtjPY5RgoHc4TGiwnLV9Ymst8",
  "key16": "5ejUgAEnxXLnSqejEdhb1pBcXTGXPYsZojn2cTi4CVKutbTu1QT9p1jsUkRvaHWvRGjuPN7ibwRNM7AD27HdQrFe",
  "key17": "kngpZCHppbXWbHzKR4wTfnYuwKBJudagvzE4FARscKsJ1VSLNYoW7GobcUxU3iJBATetKpzPh26wYWzfswxbNx2",
  "key18": "5fbs6B1hMuzQRjKc7ZUFq4ZhPfWsQsveGQtAG4Mz7GAynM29qw3y9DpE1izB1W1pcR3LQ6qyF9DKDWYZjYoZRuQ7",
  "key19": "36LZHpwJcHYsZRPYy2417VtAyKsmbXAxVYaQ8ykb5mYPDjGMPd9u8SWin6bKfDv5Lt6qTD3RKZAmW6oEvFZ3VyD8",
  "key20": "5bK1mTTwAD5VW3k9RUyVtnW6w7vuo4fmHtaKe2aLdo68vUBgpSeZRPzdzD3Z9ZwGas8DiMtXZ7WRNgs1h4ACTqFq",
  "key21": "4iinyknB71DA2NUxGfAVq7Kdi2ZNNEpbJXSXYAArxVHWT8shzxGw8WhuLX3fz2jCGyjQYGJqq7vi2juBgBEeYzX5",
  "key22": "3wSZ8jAhGK43od8wSnWwWtfvyhE39TqoMRheTuHD94ipDwXZLgfpPDNc1Mzo7kcbB8JP9JGcPHphnnnxyUG3JD57",
  "key23": "34tbfpK9PQnZbwS2uBoTBoh3RxF2MUQvfWnznWVW8TPFgvpKoEua4G8g47pZM4s62ivWhaN5pVTsbUUgqvWVV3X6",
  "key24": "2KiUAWjhTjcCjevWDZD6MhzpdNDqLvNDNnTfUT7WTDYL2fniUbU2tRGHQivSnqJUL5Amjh3myXC3kQKrQB4fmpoS",
  "key25": "5jT3ZxHnjQxhYdiVuy5p3nLHd85DXVQK1x6kFtVEZXT4YfgvEySvTqu5svpMQNnJ7XHgcbuEihiyVrfazw251ZS4"
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
