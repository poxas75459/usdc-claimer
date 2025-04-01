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
    "4LAW4ztrQb9DmdsMHKxEJnN2doRVBEYXHAvR8upVb9AxB9rBpARiLf8FxZzPmq7v195qN2mRkxVLGoGRzBhJGaDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRbpjMNvXk8Z4XEmAUwKxWfd3ghcQ1cmq7DdXYGpFPWdyHMVws6CrLHjHU7K4JEgcZVejRe3pRgFQKNLjMRPGFn",
  "key1": "4BNSf1fD55oqaMqeU4txC4pYYWgWhMcxhasXN3JTVfHtczWTaVDt48HjqRhDX5JYtoxY7dVuQUrjgKtGYQ4A7Bpt",
  "key2": "3BR3MdQ3SsW1Wv5kos462afGhAQ2aaL64En53qZrtbA5w9rJZe4MckHExrDPD6CeKFmEY78cfqhPpDgSrp8HNBxS",
  "key3": "3MdQRDRZHpqgYjAor7CRpLXAXixuAyLMTHUewuRnwEAeQ26qWff7rZDvUngSBWXsDR9UExBPJVmJrG8pQypMv8Vb",
  "key4": "2AwuBy4MxFiUeyg1wNg458iMS1eQkhBZXKtunJgj9id5cZsbGB4p679En5XiD9cuyxdjTRASg3MJBbMK91ytLaGJ",
  "key5": "BXsNgnx4jasYBhdoCFBtW2cEZVyL7ndhR4RJduwB7NH8F1wSFesjBrqbxpmSLHazuTaQxhuF3jCubWrMp7vpX3Q",
  "key6": "2B3BUkzGsKYRBSWM1CxY9nWmVFV7rDLhAPEAeEBZfy9R6A9JmnaYT9RyEhcX2hpZ4zAdzj8cPRD4GEKutY8X7Lt5",
  "key7": "5w3BuejL81pn18MDo1RrvphQ8h8L8VJRUzeG1fPHQMjBjvZVqKoNvqmKFuLThMuyHbwxied5qASCengZdH1nk37n",
  "key8": "Ctx2HvPfYkd9oajgWXDovTPXbTfnKBTDqQfn9QPid9LwXDvHfmPAoYwkufH5Ni1VxWr2hXp9QsscJ1qRv1XR89h",
  "key9": "4Uiz72WXnKbkiVj7RpYKMvttncAwH1yU3LsYxN11Zw8hhXn6otQ8s6qSWmuGLxTeGSD23bxy13AzZzybpaJP3PQR",
  "key10": "23BkgVPkJgsiddR965dMNLB28SAnnXKVeS1PfMJmGt9NY481c8DortokQg8yjSxZe8YfJJ7AumtpJHfYaFPZkumF",
  "key11": "4aKDek6jR5a7cGRdzf1smJCStk22m1mmd6CEh6iP1xNBKyMo1yUxde3xz3YmsWzkvvKxn5FVaua9LDzhSbThXUK7",
  "key12": "8MyKamFreYNrtgkQBXBPymhr1ojkUQcMshG2bxTgwx3wKYqTS5BSUKYpcFf56U5zbEYpR8hc6BQuuSbaNSbHALS",
  "key13": "mQ3jCuLhS6v2chFSsY1xnZb9R4NdKCC8F3RiCDX2oaKBDFN8nNvReaQkw55fCTLcot5n2HFBZcdXV58Wy3xcQSo",
  "key14": "57R22ZBBSXs8GicajvEVKF2xKdTA7y9HBRAb3XU59dRcgzxkRtLweyEFoSrkyWitbD23d1UtpToiFqrwqDjTZsLe",
  "key15": "59sjMpNRLDc7pHm7mLycRr2U4WpzYz4YtcX1xEtyinoUw2Y73ivRSPrQ1hEaJ3UptaGvSZ7D5HquJPj6TcnURFqF",
  "key16": "2LjBoYntXDWVpcxDEpHFmyiHF472xhNWdiCVw4PXftHsAprhCknBM8mNFq35ZGXEdviDFZUbdw2DxfcZU8GNf7HW",
  "key17": "4zFVHUPgnEehE3J7kJKdcS1SZhLh8BE3CnuBAE4QbxjbuV8cXCDWfPgH3u4q12kVYPKoKKXzkGJYSYkYvLtDxKi",
  "key18": "5ybP1SGR2YNagZdUumAXsGUMjqji3rgjCGW8YAaTnf2ptPk7KPoBWKji67ETUHZv6rvMyiYkVcGAUeZRv9TmjqCc",
  "key19": "3ztjAPQqjHehc4ZR2KdVthDcsoLMvrCmRVoAyKB3Q7Kb3hBkJ1okYJoGykWSEGUQ3b7NBPeQwacVJ8i1wURHSFzM",
  "key20": "5tM2yJSkwwxnp5kVCc4mqf6WeoQAgyr4P2b7gFdq2weeUfiLcsxE3b8zkjaRKaYz8ThkgbQVK7LefK4efwCuja8i",
  "key21": "381STg7fUjCnZ6LQ2GwEtP59QuSDUK8NQXqrEsjo9kQm5hyDvSQjHjqWRskfMhd9pWZPZW4XYQkH4PXwkZkA47tj",
  "key22": "3nntoBVy5RVgrYhUj5Eg6GHM4ccnk4Cg6S1R3asqnpYirUbx92XC4AFxwzDjfZwAyybmDN4CKdymsLcbrb1EhJSZ",
  "key23": "22Kfq9j13fLQ79QWzo2H3JE9DJmnDzHoYeB1XGJnKpmstJyLYnaA15DbH76sUCLUgpiHzEovqtMtPcNMXxbrbm6P",
  "key24": "2z2y1TsJXVosTSC4PJbRveCK3a7f1jJ9ytFt5Vv89EG9JMLEr6TnHCuhhgoHBJa5AcgYpJaKZf6SpqwNX84qzLfR",
  "key25": "3EucA8xCxJeoJjc5a8vArb5i68goikHUF5Ro81nKqBvJ2JXJAv4cA9QtaMhWZzgn2MaN4pTTeCsPExKhcUsQB6ej",
  "key26": "3Yxh6YBWczbdzun245x4WfN2YJhyHuqkC2kN6pSw8zJKbwx23giBtmonpSWocn9sZPeYN1owpJm9uHYZEuEzvpXP",
  "key27": "45opJgYMnTAoLfgtBZHcPrXxWw6kqCkQ1Anubg8WeqbiWpVzsuw1N5WKtb55Y55v9oy1fCK1qpk9egPQzUPsGxet"
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
