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
    "2z5o3wJajB2WWWQC3m64czYMW8aEE8JDhSVVLXJVKUzphDkqNMX7rzwfzehsymm227NWoAGZcP2GTwn9UA7rdW9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t4HYVdJQziKy2d69VTyN5C2wmSregKhQAGAfogDwzsQnz2JaGeaTtEShv7v5cxkzEs75D9qF3GH9cFTjryVBjKn",
  "key1": "3tBhL2eg3Zw9UfM4rbqqa7iGKTspujpSGsyYE254TWL4kRi5udxHYY8yoap5wFwNspMuWpeowi4EhP6mSnEAzFWk",
  "key2": "4syZaikz3PCCncWpF4zPXR12kcGFWNXbn75V3ZRm6iHVD6p8Cs1dJwUfcX4iysFSedWftPmF8GrL2iJXdHTR18Re",
  "key3": "2DBfdZzA5V1dg5YyYGXYR11PngmcBy6mZtPmViHJGa7pxb2AwEhadCFVJdULdqk9eBEJvB4cQvhbdQrkwrkkZhG1",
  "key4": "oyF8B5cXj9jVvW6vBxgStXbDHH8PTb37qZkiZm7DvjHZFzGbLYcSAQbrK3mCYaJTNCvJ1UbjyHwexzHsAYZV4qF",
  "key5": "5443m5crkq1ttU36pnd14BDnmCxFKFmhY8cuS5mmvaQQmRzGtUaKNYQzUtVMNCY7svF2p6wC37zQu5FRwxDNnTqG",
  "key6": "3V4SuoZwqshe4bpjqEgnVPd8SkTK9wte681TfDB8vQeufZJGhmnFptyj2cTVZ9u35DFiJ1gmBJUa71Mu5pDkwHFY",
  "key7": "5DTbqnoYBWwp3nvMuBunvUNca2fv3WZDmruQr2hJfx2dQFsgJL614QgYFvX25D3mmh3X3Vv6DXFUZxWcQ9RJKJk9",
  "key8": "4ghkSDhC2iUUfXzF3LyLr59XRBgkaAdyhhusXPQYKC5zU595wysc35f664vPwPsTsmAZhyVUbeaKiJN3Q3TqNc5p",
  "key9": "2EDAHXhYDjKnAv3zaAS5G2eu3tpSHtHPTT8f4ACaxseQo69WjYjgq3c2eBdJRtpFXgGqrdUuGok2hWURKfWv9vux",
  "key10": "3nCVjS9MvLQQGidEZsW2HU4YiH12aYm5USBuBfGzA569nLW4kGTfoFa33Ukb9DmU6Yr7w6hRTPSWNuCqq86Wdk1w",
  "key11": "21TB5a3qZqUm1km6mvMRausaBvjA6ME9i4HSAux8hQYBvGUnLKVRY8NjNTjgZbdGN5oEz4qCf5mYRLK8iaFo5c7q",
  "key12": "3uFSqirMXKKzXEEL8f62NwgMtHNZF2umGN6XpC6q5Vv6qjAdp2boahsJuRgoQt3UqLRBcuSp4HnBmwqx8q1UbNGH",
  "key13": "ENGHZwMAqfCKswTgqpnyoGTX6WGMQPkeWJ1K1dfLqBP2D8AuwdpfqVMa9dbq5T4cK9maUd7zALFRVHVvBKmwW3R",
  "key14": "9tmWKYo1PPWARQHbMZXq8Fv3eN8Wgxw5dxrXq3Li3D43UtxuQXrFbmewrfs9x1ewncoQ1CvPauqRyZHDSHWvYgg",
  "key15": "YZkWDhfBqjafyD3KHPr4y34agSihwUqAn2akVydqmhYWVnTxyVAoZPJeD4JngxSBds6SgLoEtLC5eBiRARvmaXN",
  "key16": "DTFSHC5VpFbvKHH4oYHvQSAnssgWNJ9i8yxZhhG2D9Q3oae2dAiy6UjQCRxmnZvK9tZvbC7TYszHvAQECRDtAEy",
  "key17": "u75QVs8k6gRdSP86jSH7sFZrpuYixiLWqz8YjyNcdqNWH3WvcXhfR1p92y6pxaMhL3twPzqdEveG6iT1npgium7",
  "key18": "3DbWvNbkNdsSPrn3sSUXiQbN1MKC8hDtZ7QyV9LRHRNf7ua8RZhYQmixxJ2Q3Ga8q2UdLewgWKjL8849tAXsvcVK",
  "key19": "riCC3HHQzwTjFKYAMgxvup2b1bNp3pMhp6xqeN7NkJZu8h1B78Jq48a3Nkg8PHQXsKQmxFovodTaFdFnP4yhkNA",
  "key20": "5sJaDvwuKK8viq4XEWkDxmhYdjYN3m7T8kG7uPSp3NmftdKtN4ZQcwhrQv57v85VnDQ9KnpfAfqonxpoPCfJKbLb",
  "key21": "yoRm6cZGEG7MiNdsdKVN3M7mE9KLvPFu7renREQYTYxCMPD4EYcsk3E9GtGyQDiWHa8kALAGKLj7QHSuc49MQU2",
  "key22": "4sMf8oHNPNxbh5ca43hYViurqP53nK1RrmAWwcLz5reP5omjFhC9ojb5LQekyLh6C9PNSPMkNYTEiXkKSrr3UHz8",
  "key23": "3grRRF7CNSXUCyMzoykeEkm4z6mEdj46GbZQF9ayLAWAQ4JGQgdaDjpRU8KcYHKXTr7frhQPSMBae4wFQoB1zr5E",
  "key24": "3pZe1WcLjBgQ9PUaW5WDMxQkRAxhRrkuyBib4dNaTrnP5SwWP7fN7cEsFEv4jz3Qe2jDfdzStHaQu6hqXUm19Zk5",
  "key25": "5S6zPkgfb9x5BrUTEEP9QWwHzx4g9cWKDP79HpXN2efx7SouC1EvNFUS2EiYet2QMShPbSXMaM41k24yXAndddtu",
  "key26": "KfKQs3zL8EmreuGW7haTv6KiwKbZgJRzYBZSXsHqBcCTatDGQKQTkaDYN4Ypf63ftDpWuEQeSzJJm6RzwhB4oRK",
  "key27": "xxDPYNYTE5SjJXKZneyxWybpWJMNtnitYXm9x6D5ntssjeqEJTATBvo5dU9w9Jk5LKMLFvh999M5RhH2SgcgQbR",
  "key28": "3RK3yfLnnUx4BjwcwweCRQpARKJFveMjt8mz6H3iddMaF9eD9N2T1XexxDWSJn6GN3PnRi4ZGh6VVChfWZ9y2Fzy",
  "key29": "5ZbSzZiidCShfmtLcgMXzo1CGXpCGs1sPDVYkEWm31pBJK3JZeUZpFbxxhe4HzL21S7o2FSLxmLwXUqEgeuQLBz8",
  "key30": "2jhgWB4tEXPYySByRCkPdF9J4YZLQZj4mWzxscoB34UJTwpfXvncR7sZFy3LrLTYPXR3DQCRHDYPbqhp7iycCoMk"
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
