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
    "5LwKnLG7pDWiQTaR4xk8E4MpnBneMnNPR6Dcw1ihRwBnu8A7Sw2tgY7YMvmPYy49qsLaiVMY2YsFuuxmGBEciu5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WfvNuaXtX7nECbdk8fX1mbtPLzGQbVyZzRPXxXrFbrAiGkPJx2PJSBdA9f2XEqoCF9dxFpjXouxcZs1pSuqYbq",
  "key1": "4egVadjpSDHG4DLfoQYK11AUzBk6Tw1hzBLfjzkmiFUmKPuJZLbALZqxzXBMErTjxP8GspGy1VjrdgtDuWL7bXus",
  "key2": "4oMHhoVuPeWQPPn8T7Yk8cm13yAxcCXEqdFYhYAUHHEyLp5jqLAcJvp65sDcQVHZe6vGXjRFEZUT4ongGYyhyagX",
  "key3": "3LDiqeS8Q4UN7KZgfkvvZnjEmDqdxgQKmvkEErfS37x38hYXZmLVZhJVqi491DX3R4fDDNxUqSrqJsUsSSYabzTa",
  "key4": "256i4NDzR6wWVe4NhtjRPi8wCSToFLTtGKFzLoQHNfr2ctKE4XC6uGzCc3phZfpUZ4o6n8zxAujYcfumZNc4WgPV",
  "key5": "2jxPVC42cHYzFTaTfBguW7fBMBLYf2jdyEBuArewjTZYcFarnyw62FuzQ41L8xuzDNnxPhocNiSghzhnRtVcdNJG",
  "key6": "41T8CEp9LJxeHbTkpBGDo6H8hywPLg8dq7ovmJ8fveM6qgxBLUjFCEvmzdEFAic7x7Yof6iwExyEFf1SYm947oCu",
  "key7": "5sCorQPcegeSoNNgDG3iokqAUsFkBLU5F1F8gYTvHWGiXQk3hd3AxmCbvQxR8ApyZXNWuBXVMpdkk8V9XWeDoEnA",
  "key8": "2oQ7xppq5wEd6cnio5QQYiJGDqh9q3hG4pbpg8KKEat4jR8XjWdG9yWhnAqiKgNPeSkgDWygJgodFphooQYv39ZU",
  "key9": "3vw3tfDNiz3KbNcHx7iLqQzVgw53jk8xrxgNkzkhGMndeo9zpaFHx2jF3SAWwwcrxVeYGzb72L2Rzq7V73Hu2F6",
  "key10": "hZ5aiw6i9wZzAzTbmBzkrtcnE3TFC9fPawfpnJ5nFc33LSvCLCH8ghasBo1M66nNCU3p9kR1Yf4DhqJ5xwwTPEP",
  "key11": "HWjcAHiKedMUosT3XP4C3dok5ejyp9PkL4Zbi4brmRTtKhZRsvW5eetebxQ7Djf2JaC7FjNG8RaxrVtjqErnHFK",
  "key12": "j3PC1qqARtm3brTsUkukM9hyzJvRaYeJFt4aJ9zCLSQwSqKAo9VE1VGHVoBRwZEf6MZ5p23ZrGtB8fGxgJzKEig",
  "key13": "3meq7UT7TPEqBLZq2JSKfgJ4PLRGZiKy15GkMX7i34wJoWa7AFsvD95ipWVjAsnd85Dw6n11XDUqusJJVyQjfKFN",
  "key14": "2TQYdesNC2xorBn8VEqGre4wpk87ewZGxdUeD7VYJc9AaCSRrwMPgrz8RSdM7QYHUandKSqoFtAcEjpkzXisxyk4",
  "key15": "4YtEdLp4AW4HA9E7VcV2Qsk9n8YhwaAJnruWRKQXLAqwYa7ooiHsYYKfojpdTG95E6ZQPL9PqLX7WWjRk4vhxVMq",
  "key16": "4Top3jgn1AqNLM7Ms7exqLaRDKreKPxbpMpBzUU2BU6rmZACGR8au7w3kE3qA64eF7prqdFbTSorbVy99SLADtfU",
  "key17": "65qqX6mhRhjuoEHohHrqDNFkLdSAWYkKZY9yFx8sWvX7CQYWhhh2Se9eL3n1GfXBzEWB6BRTsenqt9cvLtqEDsAK",
  "key18": "4V4YQumz6yCmwd6nYf6WY5pSGoGu756JnQAnbUt754NCicZb8vYTVqUKK6NuU6NwtqG2LWqGnNnUWhyygpAzrPj2",
  "key19": "5xymyGXfYP4uY1qGahWVHXPN7ajVeeRB7jGQyaMoQ4Dca6QXahwNSCQoVmfqo5vfgh1V7aBDju7ghYGdLZVs33ut",
  "key20": "5V3VJPdjzaCNqjUBqHk8bxk914gJ9sTjqR9tFgsgTkPaQzGT8puyLs599SmjjrDFGvCppD8QVxcTEb33mBx1ezZE",
  "key21": "2SYSVQFRttXv4JfzwVZaLSZmVKwUmfLVc8oi2p6577d4vcKrN7Q9DHxLFttioM9qWtfqV9BY9nJfgeH2X6xAZ9E2",
  "key22": "2pe6ygKiBTNB5JrVPdMeUyPQUfJRK1RfG185mhp1fmjyXvFMHzimMwWatLM4gddezPbtBwJ4H8aumZTaSy2edHbH",
  "key23": "37vBqBDAB3NsKhBSRKemsmjWhqnFqi8WYnRLz1EtJUwpCJPCdaMLXgwujuyxFcWwjZLYyit91jbwPXju4YwreDRx",
  "key24": "5WjFqdbY5YCJWcgxjDWa2rKTf1JzNnQ3xbtkm3Ss7jVy1zrZcTZddgt7W4z7Ey1WiyYa7Sxnp7o3qgY4y6PoUWLD",
  "key25": "5W4VsWYK9g9yyBkWFwL9Dj4ci9JCX9gwL2RyLTadiFkkJPA4o9juwfsT3jqCGGbGcyC5c1qCHenJCFV9ZWNQBfWG",
  "key26": "5AUdQZtoZvgQPmtA87iUrt1UMhUVfYHVVpCJcKRSVS9SruLWeRcohH67fmsWCZw22jSH4m1tpDHmfx5ZSkMR3vcL",
  "key27": "oqY7cXMCj9VQbxquXhCmjaGDFK1AK96tz5bgynYbv32MDSmS8jpewjEGFMn2HKMiMtF79t8UffWtR1eh5wmwDmp",
  "key28": "3egSYFDNnJH8DrzCT1duQR1QWs5wvnnCZePVfJcvYZeE6EKsrFwKWr6H2gZzpCJLWKZjaS6ZoA93NkDDb7B7ZsBq"
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
