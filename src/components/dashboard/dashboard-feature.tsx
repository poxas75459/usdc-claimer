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
    "5JWsmT4h6ynWzeTiVsgsedV8KUDbMWmUsv6BmcPDhSQVzJp7F8byf3PGTKjAMRSxsz3fx7RmYpakGAFQG1Fzy9c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyh9DYnWFEvmAvu8u3gqTNUvS6vUWyr2LstGop8zLyGBFAt6yQZ96dddpe6oLkdmSaN24JimjQuaG1HUy3u2Jfg",
  "key1": "67KxxA5gMDncaNEE76iPzfnpWz1ujNwDotwowiHYtXRFh4C2RNWybr3tGJKex4JgdA7cYJ9yn7HxpYVE8P44kUhG",
  "key2": "bQp1hRoM9ciJUt2B48Go41LFg9DW47na3uPpQybvieMQdCBuimWjoRwk9J6YXgR9b46D9ypLybNPiVDrDzLs14p",
  "key3": "YA4yZCFpLBYL5faKnL4TVbAcBsZhjPwFoedg7feTk7Ntknai4fmPdJSwiYcrBCJVX57cFVymeYc2wriwai6HN9x",
  "key4": "4jvyBLLu7iZF7zb4RJf9CMAWJRLdHhJAeaezF94J5sVFAn8vo55ipTMiTWAJZNnT5FyNyRVH1ZGq8FjFz5Zjga13",
  "key5": "4D1Xhk9HTrtd28AJJM6ou97SjfbBZ6TZSrCrCjoSagXZUy1awdDYJgpAyQTibZJeHSF9LzLdWfDRMVZRL5n1yunN",
  "key6": "3UP3DMiuAW795jD77GmVmWK2tKF9tji6pcyL2umw8mQQUGwmFCCwGTUkzd748qUe1jf46zhgUmbMWcYBiNUTTKWi",
  "key7": "42UkAZ2xinagSrXNdSVbc4eafgtvDQWHunsnzSvepS8vpNgBL979PqFFe416WHPtoDffWa21EGPCYWVmQvPXqe1M",
  "key8": "4WbEnCeueYtMv4SQQL2ucqgmi9SrkR4Kn8T9a1YY129hU2P7KyxYfncSRQuAv5R7KFQGyvciXVYe71opZ5Bqr5X6",
  "key9": "3z5KDMqN7Z84dJDV16e4B2UDyQ9j2DnMAm4BaUHJjJc7S9RCK3jhgENtQRik7SHdzYfTa8E4nCvshzddMNDrpQmn",
  "key10": "2F2c4xm6v5szcPErke77zcANb9d2dmMBWaTQPXKw6a167ptyoNaWiKTjbLQKRCC4z7BAacYRHUeA7fYyaHLzxFBa",
  "key11": "2wX8dY2fkqsrEVaYY2TjevZUhcnY17msBpUeEp2TJm91gTtfhjiiRdtiWCVrySfJesPVsTb59q2oSfHzdFQb1dy",
  "key12": "3EM4STBWpMEHxXTT1TPMgxgtYXUV4TzCUkbTCxnRSTyGLmJ78wesZiQ9QPLz1u57WhtyNv8teYEYNoEVJKEKNt8G",
  "key13": "aJTmNkbhKgueR5UVUnenRrYFGEZTw1ErVoSNGXwd84qeKJepSHFkpg2QJtrNL47PK1Ehzaq9fbbJHiHqvzoRHpZ",
  "key14": "51afkvwWw1TjaeeWQSCtVD5g6h3HR7UKXatje8vwfS6niwU9GZLerbwqyYdVmcZNqELv1LPzZFqMZKndA1kwhpZB",
  "key15": "4AhWwzHwDdLPwManjMLqFn6264McYvF6pN8NkxQJ8YQHbezuRXga2EgixZNEMDFbFVuqXJcGMwiACNRcueACuvF3",
  "key16": "51BiF3o8tbceJ31yz4rV47qFKBZoC7n3s7UkxSoDLxJSHAU1S4yRnEyRnkz96YrtzGNSWBRv7aQs6hAuZetJDKkm",
  "key17": "NuymkzSD8AvWSj5ePRBtJWF6qFuBJF6q9b9r2goubHJvP1z8q9boAc8sSq23b6YhmBBJJZQx2cCvGAfRfo7oUJR",
  "key18": "1AXhQpuohgDYayvZETDei3nS7pYZ8vnHWZ1FunA5CKCZGp9yFVSxVMccwxKkc9afpwdpBzRV1vtYBxAi814QMku",
  "key19": "657fk6DRxD8QRz19JEDhzQxFVc18Q8PBLKqYrJvSLjgqeSJyZ8a7M1krFaV8g71m4XcqPzoMaQWNgQa4CvQnetUM",
  "key20": "3pJMz759RmywvEDss1WNHZ7NmExkDX2SvfwQHdrrBWNtgBQEy9fUiRu56uSKKbz3jQeY6774QgPn6JaYaeeWGxff",
  "key21": "4Wown9GapcoJhLHDBSeyhptQrUXkivqZjKAdAnmLEse86Qoyx1WhmbtGVifxkMtj28Q8w3P2jfK4aCAYKZEe4Xw4",
  "key22": "2HCuT92DuFm3fAqfe7APzEivyV42WgdyoKe8cEumqsDDPF2EkG8QvnoBkhJWmeGgjW5SvGhoP3biXwKkmwK7otRN",
  "key23": "2UADjaf4rE6CHTQ2ZEgR9AP5wE4cZDtuxhEwTTyRHHX3s2ffiZMMyHVWR4JyiVgX7am8B1MLXdhx8xPDvGyrsjbB",
  "key24": "jTMdjGHjLUuH9VTud3hyezDaZ1NF6uNBN9C6TGzidL326s7iy8sooau4WtbdvHaYZ7nJTFYeqyyy1aDWsobb3Lw",
  "key25": "od8HfC5PFyYvvRZuidsPWKEHBsKCMKR9pAZJ2cmLs818b4u7PGi3Si96NcDMV3rQfEZnQDqSvrbQFBrjNxL5BKc",
  "key26": "4EKcvP3fUHeU2y8zXY8mVZfG1oBq1A8xHt3KQNqEkJwuhz2PZ6zpEDrBsYPjDrB14sJ8AAaeA57ajnFKcJuD7SoK",
  "key27": "5fdDWS6umLRkPgvptfapM5NpJgJ7MVqQFg2ap6mLyN6TXM9bZjizknWaccovUhisDpkmuvWR2yLuiEH72UUa6kXH",
  "key28": "2k8kJmExtdeK5ZMcJyBfgGsnCbzAScTncdfvXzvF69rGV6XaXgRfCxDBWfrH5dgGRwNc713WLEmCCoSu5urwqMy7"
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
