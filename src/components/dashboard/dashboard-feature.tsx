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
    "4nZ7imEyK4eXgtXVEvwzJQXDfUpsXxdmJ5sB2ajQEBJK2zZHhoc1i7CcwCjggH7VruFJbqL7fSJ8c7dDYzaAfHrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZV69BYNumaAF3U77ufDSMi7T8wGzBRhX23uXMK8x598UpyB2yVQNZ3YP4gcwsrYdbzpRx4UHbumMxdqZ9gtAU5",
  "key1": "2jGZNmG1T5ibmGrSwLgRkh8nAZnAvWiBMu4BvcUayXV3TfB1NxEciPUJts3FvwTWtJzULWF38HQsWpqJ6tUYegSe",
  "key2": "23hfeEmJR3MfDESYdY8JhkuL7TYpnogdcpx33HHzoTv93qDbwhn3yYLrBmjLQUp7jGGFW4xJ4wdtvYm8cpzwwt2Z",
  "key3": "67DGtX6T46a3F9iLfTPt1Wvc7agY368oMRQXXJ674oHhc5iaNegFQ8meumWmSAaTFWCmPLNB2GrCo6hYDQYFwngj",
  "key4": "2V3h1wVuaxMdk236pRVNHg2fJVrgptDGNMZEipLd1WG8hf1UrA8DaPB1r1Sp2K3m2m5oUbcms4yX4ESKADXnNbtR",
  "key5": "3fbWjd3AhyJQ2CELDfRuvjzJRPb2XspuSkpGKL5xWXZ73z19BH45PA6zipfbHP8urG1Z6QTPW4JdF333TFvw1zaB",
  "key6": "24gsWLT5z4mcBX5tDD6UoTrc1STwwB1dhQ1Koiv4EGmxqwuE5k6jnymvm7htvtGDzeuMmQufQ5C4xhNTwHyyPG1q",
  "key7": "RaikkvQwk9p9QYpjew6bDxJ8krQ5nd3P5mis7vf4e9XgE91jzeSZvg2dWHUb5MkKweNbK6CQYGEKmWrttBCYtCn",
  "key8": "3CganpM5YhNWCCW3YMqp1WKt7L2xaMdM3CBaC11bi7GvmFF8JmKxoQeSMgTJoL7uQJGsy8vCN7BZnhgq8tBX4zPY",
  "key9": "3RFLS9H2WEYL9C3EiUoH2bx22fQn1Fn4gfGGb3hN6G5AWR7xtn7HTj9jtdpHFU4Rqc7da5njdk6CFFdomh1yM81D",
  "key10": "3eGMbsGZPYUytHNFrJgsZ2D3QcmCbgPuEaaRDa1ZmxY2Xt5vdLgwfcvq2iPbtRbRmGu8WayBEiWXcEZDfYFCx22W",
  "key11": "NsWJiBSNrbgtbu1sG6y3yPMmsPnpsM4UDT67rqdEob8GYCzcyLjBQpcfwYryjfscbhssERSJCTSRpMCzJ7LQjwQ",
  "key12": "5pwPdBvbgYctEZLBVBcXbxKutQqRoBYCJoto2GNek3E6Lh7sJTipXBTX9FDCYe6wArQvbAuv9QikGUL5jkNtQC4G",
  "key13": "3gFGV1aGcNV8L5RjsLL9DtR4n1D18c6cYSnK8eKBCem7xTrVHpsBMxNN91Mg5fWyPtcynyxXGXzQmkWetAhHUFvi",
  "key14": "2y8jQxbHNqXifdnr5dvEhnLRyMTJ7PDxm2kZTVXgRZ4T7UmV16s5WrGtYx5ZMDgAVhszk3JLkxf8cqg4ZPZENnco",
  "key15": "43DMQPTWDpNBADXM2fiWM3AjPJwNianJEaUxRkHdrBeAch8ap3X5SZH8eQEzrmSEvX4u5edz8PBvm9WoFsJdJ3iM",
  "key16": "5NoEewcr4uwwCp4qAYjs9Fh1GhRmvBi4VkNbA72VhwxLhwvpNTbggUoWwaB9GRd1YmDRqB53r3ZyYaATxQxMM8rj",
  "key17": "5ZPYPecnapmxCYRXV6N7u7X4x17wRbmP4Gk3xYH82pPaq5FVQFbFmNti6Kk6KbXJ7tsGucFCc7byFujF9U8QEAzv",
  "key18": "qTbSWvfvd6HkZD9siQZv4uf1NgYXr4LVtdyEK2UxoaneXDKTxXXcfQsoGaDjVu4otMwN69dozPSd1yNpaQpknuw",
  "key19": "5Le41pNDq3UJpvbZXRejRxJSVr5syRH3qLhao1DjMYtQ6kXLNiRpVq5sgNLwFaD9cAyiALL1pJhL2WaciDwS37zZ",
  "key20": "2cAWp5zu9R7mGhyY6rBzBkLYM2eKoUoEZ8qfCX37ZMJFBr6oDYrpHc7A8CMwCoa5AX4cT2T6RgBgStrRYgzv14V7",
  "key21": "23rCqT5atKX85Hcj7PQ7rVkaKrLb98mtBrYwyuAxUtzyVh6oAr26mjoKCzLVr7ztKxZ32GotahmBtjoGjB9J7RKr",
  "key22": "5w2fWN2Jr5vZgq39j8ZNvTJf7wYTm5L1WVqfaRngnzUhjFoahDpzPHAPhaNjrsP5LxaxeGWMF4ADiLRpHN9no5Vd",
  "key23": "2aXTUUwhBPegTo6JjcZsR5AT8sVMrn499QpfyVUz7YsSK97qBv4R3LkSwmGYrc1Hon7cYmQWDedtMHBU94QLm2tz",
  "key24": "3BQNvSzBx5GjzyfCozrsdmVKZreDi3vML4J8BXrsagq2g1qLbUHqbXCWsnJ1ZKYU38f1T32tWwNd87hNc6rWu1fs",
  "key25": "3UzmEM26BrzwDZazhFGhkdtbDHuDabCiDHpPPSmFSqCarSRvceACFWCfgCN5KHR29e3VoD8K63T7kAxifKd15HbL",
  "key26": "4TrdiyTe9qSaJ7pRNGpYHqnB9mjnmbbbpu4FN7ToWqk8wwrczeSVDC8RKRgt8vtDNZqvv5jvLqhHGeGPrMGVzgqX",
  "key27": "37ojaBvZ8VMx8yphCUyFCEHbyYQ7UYLxGeyD9XNNmH7JVSoLLsRuUqvY2FbTXsojJGSpyimP62i3qLHLvF2JyGVe",
  "key28": "2tTWMxNvDCELUhsgTydU1q99QQgut2qSh636z3ixHWNgKyTXGJKj5cQKUkwbeYbNouYvuvCMgaRV1tRip7ieM1N",
  "key29": "65tPJ4yXen63GJvDrEozLZYUL7zsEkKAgU3TbyLxXH64c3tD6TJdiFvJpUyFSb59iW4cYF4WFdsBuV8SvjGVpoeU",
  "key30": "3wLhypxhhynfGXCiH6BM8WtzEnNxxEm8i6rKTFjAUqbwpWJAPzdFzdX3neM9F9SJ9GZqYjc4mZPWHHsGcR9nm6Ye",
  "key31": "2hSFbtbzcM8wx2gy8Ln9ce7UWBukFbE5BSGzfEWX2HzbLZsZN9W6i35F6GPhCTKwWeomesaY5aNtKYcax7ZWwX5C",
  "key32": "4tsf7MKj68gZQ7YZJpnfTuN6oFa4JMmM65EVvDDuMX7CEYh4rPdBvCaFLPywde7b8YF64w22Kk6oohqV3hiaLFem",
  "key33": "2JtyPD5Du7pjahH2bMGbycmiQ5qHY8U5pVhBaoSfCDKRGcFo7k2xpD1JbZPdF9KRtowqBsYD62xcBeFZCcq5DHuN",
  "key34": "2PBkFZxBWoH7DWehuqSgWo6F2L1JLt9qzZzoZKvoGkBBnAhmeJFQwkEgpRRVwNunPP6s1N71qssJKEgWQAp4k9M1",
  "key35": "6YArjTVinixgRYunsPK44xoxny4AcjzfG8RFnGkpB1Dzzip6mqYa2eq8vUMf5bBCDNyUDgjDkwjEgixW4mzFkxm",
  "key36": "Ggh9ejL335dU1m14ndvXupjAGobH6VN3zUopUtEMRn1kVTKyHcV1Q6L89BR5bVzecZHa4NRKpZVE4JNp8HanAms"
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
