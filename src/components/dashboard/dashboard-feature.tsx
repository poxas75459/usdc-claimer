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
    "3zZhQjK7TT5u5SYm2d4PaE4cXKEFR96897WruPAjY5sZRnZUVXDH2dmNmjy3UyzndYCCrhsGv2NJfvhDXGHQz6T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pY8ftpUt61SDSbeXvPjDTdUfXqXqYhDEcNBAZJQNaaS6NS3hDvfKd3urqUXNykUYjMiVwGii9T2bNouCBfTxcb6",
  "key1": "3GFVc3kwEdLZywYq5qFnpRZqebnmJF4wWoDesGryxpDJ9zSvCBUxBj4db43UyhwHLdysLG2b4k2X2tMC5wBcYVns",
  "key2": "65SobpFwmttqLqr7dyXhEmAspnNS2fWBophKogMTwztquR4s9AABVoG4iGsQEoNttyxdr3mzLyuNSQf4zXD1ixz4",
  "key3": "5SCSeNiu8Nf8Qf3sEzqUG9QkzjeQxk7J9wvLEiy5FYGFu8iuRSxJCvi11gUtbQD5RhYTw9GcSbXmktRSyzpnWjHd",
  "key4": "5VLKutGY2ffi97qCYBgUedCc16MkRKYYQQWjNd5FL4JursXUSX9yPG2CAWP6c9YoJ9SXbP63NfYzWW5qznk41fEe",
  "key5": "onsd5tcmqWgfEnkyT7daLbFz65wjnx4DrTHv7o5QaaGf6iaR1Ay32U5w8HkGd1Qj1QgMhT9yHxiSnMa5WbyrokE",
  "key6": "5jxAn8ZoD7WBCDMfq4FimTVaTBib3DJdaukyN2NbvZFdaEScNgk3YJM3UH9KF2WCu2bEZ3J3Jsm7ELtrfRJcp67G",
  "key7": "2RZDUmJAzqPB9iKNEyckeUg3xmB1sVD8xsCNZ1gQVycaZTwKVDqTyHUyHNMZog12g4ATyN4jJE6uYwX197NVEUPt",
  "key8": "5zQnL5xsDNQFb5dKJpJhNUP1zLhaKUTsHhPTZFk9FPE33SGhmKSDV1xo33GNYn1FSKSWaMC5pnFK2nsB3PYXe2s4",
  "key9": "2ojNfWH35rSeXbAVcbwfxg9PbBUSWPEneZM5WtF5dv3aMn5tjdny4wCoxF29ytepWdNSfwvEYTeJgaLCrzcngiyw",
  "key10": "3m6ShrrvyXDgLbuNjVgPzqwqWMtBW94HkMEPzZAnPa7VBxwh5Wv6jhm9chgbiKdBd8hgYWvxJ8zVdEsUmiH3P9Fu",
  "key11": "2nZax4BjkRm9hCQeoa9gotvmPiB4ckWp4XPKtrmx6VzdLBpzFzCKiHNcyD94QcUNNtmRdCAckUHwHsojZdgqdVtT",
  "key12": "5qFmvThTMvENZemyAX47o6MsUE8FSkqdDMXWwdcfaL7roYH2Un3XB1jorFhtHxSTkibPaoc36Ho2Rg43HQ6U8fwU",
  "key13": "43oj1udYt2GchZ8X3134Cqsc2eGzCghPJLyaSAUTXa66kViUvD9waXaUo7T56aCqvg12zwALRTRQbTDCeZghYCNR",
  "key14": "2mHQb598tHiyyEiJpubkLqha75NBG1fkyKS6mUjHwGnbXzzveYZnYtQy86gMmuPZS24NEqDqAocRvfrnwo166ZWU",
  "key15": "3sH1rVCzn6z4AYAp3JH41VcLBG1jRJDXQ6CBSy32Sk4vKiJJRPpTDz99CDmG5MfPVdPBdGWEajdFirCCQmuKV6Be",
  "key16": "5MdMg2Bxzh3veaqfRkwG3i4PMFHHokxwWU2bLzetYdnN7KV9DD1cWWp1LPzkFYyUYnwF327UB83FKSAAXms2K1D5",
  "key17": "5BXb5MoE8azs7DHk82RvuKHbr3Hiq9jrTAEbcata9A22Z7WM3DZHXuVRKpHVHXzW7jbZWq4h9LPvTnQ9mhZyyRS2",
  "key18": "2W9o1FSjk8XzTbu7xm3zFjw7VDp5abmPFPE2wK5GZb7K8sSki2Lgj3HVLAgUnRvonTSGG3E4gJnLWNC4azM9EumS",
  "key19": "7PFrnJ6tL7AvE991YL4o3A9EB22xm7T2YTT9p78bLx8kpxbRasm1bxDK5zWePpEQXTQaPDDjjSHDCgPFTvMAfLa",
  "key20": "2bUA8hKt83dRM7UJnvFcwPzzK47ixJmq2VR52r4ZKGuJkYkw8Vk1oYgZ6qh3jqfaNhVXk9TX7PR8uraYDyM6Y5gz",
  "key21": "2jHQSvPEUYJhMS9vzxZV6KffTGUaW3pbQnHwfLU1eUoStRBi3r9pkNrEdAzxJ7HbXEAdaNdfv9xgwMSZGVdwHdZz",
  "key22": "2h4MAUf4erRW11pRu6cpCLaLPPL752ein3sjZa9Xxv9gDP5B8atvLXHuohDHs6QWLkSuifSfbxmphA5V8ExUhPf3",
  "key23": "2VnP8itriJAhBHmt4UYWfKag2TxAwddsSieXxFTVWF2nHS3AbudTB46ewnzaLckSEN4DkpjEmgosV35QMxaUxwuQ",
  "key24": "6GTnoumqkkQxK7ykChuRuQrmaPsuKpyhXRLvEkFAgB5Rskp7XHjEtKHQbELzcrHEbVN6bz6ymNRjDGpcUnyySCQ",
  "key25": "kfQ7uT3VGsYmkex94VDfp5VUbdSTFjuHEwea3NSdkRDuwj8L2NTL1mcD3kbNtUJwxQHvkGxXSvyM7kBRmQ74U7P",
  "key26": "5NGc7yk4o37yGpUqxXE1rAr2vpstUAnbUYKXnS62pBh1WnptFCjxNT6oK9dxP1MifrTEGVz4Xyb4VLcGf8tHoEgU",
  "key27": "GdkNubLeRZ33LPvoridDjfnCHeWJ6KmwNnygP3fG4E4UX8U5ZAEGDNW4hNexTKN4tuFkozVxDKuqEdgyGcsELNj",
  "key28": "2uaDARQMMXWbxva1Q2WA3VLFjsZg6DkRsCM34jRZg2ZVkjSNmboWmaWv7GrG4SLDWT6aqHvZvQjWFMSo9wmWqRjc",
  "key29": "4TeH2M8sGedMFNw5ATzvk3umat6rF8x7dUqLfiGEfaBARJVaALJzWoCvGQH4uMcmEvUmLJBRNNaDapTfadynY29N",
  "key30": "3eM17wYEBdAwGqrWcMEA7PgUv7hc65bB6vXqwVG5rBHbeYuWvKfonxAYqcX5NpzvPktMzHGmx4gMNx8A3hbEfBwn",
  "key31": "5Y5t1C9v5yvCkyxwXnvueWVazHaZJXHALWZv7UB6ovpYNSbztKgfZsDKB5JDCd1agqZBYoTqsj6Dg8MuJbbNSSRN",
  "key32": "YP7g2sSW9EHC31VnhhDDorsPYRJRrJfMrURyy41rFQtAebc2fF6hVAGAKoQEx8ZSLGZtq9qjezPKboDMs7TGGNt",
  "key33": "4dWRiGJv8Y4Y6VHwfZaKv7uy8F7JCSXtuGtyqcVYnc9GbmfsezzkegTn7cVozF3dLm4NoeM22qULiDeWmqGHmJfT",
  "key34": "4tFiZJpmcgBfZe4LLF9rL7AFhELFsSWpeZoAW3J9HmH8Jrg5HHAJjbtepUdgHC2Zg52LEiQy9cn5YMbPj8xDWGKr",
  "key35": "4RiMNSna3eKiWpjFjqw5fknkMWTwLTXBDQipx88YhsoLtWM3P5LTzNAFNymuCxtzgE6rdon38rQYkcFmYqX4g73Y",
  "key36": "rv2tzNfBoNGJ3RKWEnifW683A5nVcdyQ61Heu2Rz5KuPKEheQrgJcVMpjKT8jWY8BmUSWchLRuFY9injbyk1gtz",
  "key37": "3MY5SAoCXhrKtkhbJnhJfqzLNm87zGFC9mwWa8RTGczFvLqcejnUwJeMKTEpvdL7x1UdP7TcBbrZeRwhZemWhhTq"
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
