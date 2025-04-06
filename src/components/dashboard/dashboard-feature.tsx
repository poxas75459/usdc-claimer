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
    "5A8disPZxD69MtvExeU7UYAfYhTZSRWbkazisuMTHgB8gAwiSjXnqJt5Mwz2iLe5yzcuokxqJ4CFVNFAcS28DrUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEiSdWCCBYSnVMxN6XJJszTkFnKBBYcn16tzbhRGDReAVsrSqf7gVxL7QMcwNJfMpdB2u42on1i7uaux1nmJkZW",
  "key1": "4DLiWmGrfsUz3N5SWqkBjpwmaRStAUnaNHDC96DEZ2kEQRUWiLeJvyFM2vqA3hkjcB2UW89Xj134nKGhnkwc9tgq",
  "key2": "3vbu4SEF5oUadu1px5tVuwtiqTGcjTMdiZD9mhzdFZAXyYcYSkz5TaE547HnyWeGWbdESxUqChbexdBuP7pagQj5",
  "key3": "35HX5SJgsdFAjZTPVAEtPhQu5RWuVGCSyxiZPFALUVM5tXj6iWt9GNBH8L84pZqPkZEXh6XtJDFRnhmff9eoi2MK",
  "key4": "28wcHLBNXd22DLtDDjTFzsjE6TfuTTBdzkDhHWCiGu3q43GfSXGqZWEv9sfLZf9Qb4WtgipC8mgByVYtCyDhNmRe",
  "key5": "5A6TkVMDJ2jQgBtadfkJRJ6JZw9JnCE25xyJUmpL5izd1fMtuotsKDJ9mGLCez2aSR6UzunK7XNMy8CidJBLYDDe",
  "key6": "3fJjoxXTE2JxTakD1DCqQua1H4QaFg1YVJTKaB6P8UTTbSoiZccRgcyMvC35c81b2zHYYWS3EfYJgZ7XiudwkHxM",
  "key7": "5dP7KbdrrctCUuBLwLtdXUsqegG4tfw91uVzrBGGPNHa881ypk68Lv8YwKkmjgV5F5msEiqTWXQsCCqwdSfBCPTy",
  "key8": "4P6rC7dGW8DK6ZNMsVMBMFggCh2TwMBRzpMcANTCcfwckqWe7ThCBgew2SeQ9fkjbr8ZFrM8fmb7L9qi761pfUtp",
  "key9": "3ABf36YN7j8MEzUTjp5DNLcg99Rdbincp3pvrk1ukF1vQduKXTbr2gML8XeTqD6KsAE7eGasauz6m1b96S6gBwT5",
  "key10": "2XmYk68GTDRRMXksSv9LhRGvxBVHXdyppLU3oKxcxaM86fTg8DRhsotZs8uaU1FHeyHkEAuY2fGhKGDbALBDqQZV",
  "key11": "cULq6v5nhtMCzpURWYfcym7Kqnb8Qfv1zKKgdux6AJwymS2tFswmDAPrXQKMGLzq4BEZHTWBKEAWeWhTpYRNELC",
  "key12": "2c6tYs1gSCTbXYnW88AWE3NhgPwDXBXTMoFJPEQb8zdSx6x7P1WLNaY8XrZkA3nM7WvSH7aeBy8kVTHPdpjhR1BQ",
  "key13": "39qd6hmnUWz8YN8hxjKhwf6Gg1VNpdBraPyvacz3DxtzZZTJoMMTDxQuHbvHcecath282ex7uVZ9gTmErRAkQiev",
  "key14": "5dp6z8Xh5PscyjvVdbEqHdRdW59G47TmKMwpeVT4HYuEmap3CY2BsJaom3zEaeimPFpgWjkGL6vyBRUxzpbka7Ma",
  "key15": "3ivEhR7JnrJVd4A5ZZ7i8VQt43dYK6BysKAKt92ezrmSYpmMrsToQmV2gEtLd9DB7fnE8xqzi8WMyMd5QbkC842k",
  "key16": "bFH3RnRNnGYgqTXPAZCX9xsU4q6NAzzP8KHZvvGCem8uGcD6Yu7EweQY3jAWh3VzMhird567ScR75w8MkY476Cz",
  "key17": "2AvuHx2YRXudAPG6t2YvRN5hpPPxnwTR8mQHJKQKtaW2ViUXGjwToircdCc8zcKuFsabTLYDmJdb4p6rzgGtDqgb",
  "key18": "41Z4wUf7hmxuGsNkYqrDz45726GKvJaFHXYqRi2f1LCh236FGUAebR1RnWoKxHWD3hvmNtpstUBNVY7ygqFoLGGC",
  "key19": "JCYWf4BxHzHEgJNCzzSNRTi8BRuXMFteuypdN4LqEZ5Ezp1gapvepVAHYqxZzN6tcU9Wcv8cy9WQQoKcTRmhfkQ",
  "key20": "3VAQoBmvXmPRMzSTQFqQvAWjKHKuLbXxizkum8ENaDS25eGRTWxuEviP5jKfRPRgeS2zzUDwF5fFxvdLRoeE5pMU",
  "key21": "5LN6GCydB1EcM94mcVkMxz997sFEKmTbTBimS9HiXuggsKMX7qEb76he5t24CjqDZHHHUviCHdj8jBSdXjKa8Tec",
  "key22": "28NauSoPwqwZ1PuXi2pHVcdTkKEcdDHsFVLAo7st4ZhUxXZwrAMcZeRaCkVACJfvKz6fo5vPa3kK7T1tE2yBZkPs",
  "key23": "EhsKFCtzzQ2kPbmjbEXmyHpkeXyjTfNwR34vmLnYF9THUygFeTKZtRj9usmAekkxvP1rJaaXPJPzpKPPmWZb6pB",
  "key24": "332Nv25b5EGDxZPghjNHmJymLX4p4ZDHRbDTxHgRG1KdGZkBk7uSbCVgKfNxbGDtQWp1FKQ4AiGpJmqpkvNeKUeG",
  "key25": "2yixjiVc6ERm3xYL3i46Bm9wtGfwFKK9YGJTysbVwTXn6JwUL1JuwWKUpZon7HG26MhW1o9pkoYh9rdEwrZjZsdn",
  "key26": "5AnyKm8iwmfC7ntB8F3uxzC3jbLRmGAXecn6iCUQRC3oPBYnyNjMwDLWsvYbtjMxHxxafTeziA7D6Sp5khiDjqNz",
  "key27": "49GP3uCnVUEa4RvoCECaGZPf2q88vjKdnWUaMKruguCjUL2dGHY92FdsndLa1YMtjmHuiuf3W9GbnH8rRB6oyYLd",
  "key28": "4a9ispcpM7r4o91PiYnZpmDDeRHAnjMAnf9BKnh1tRZjKLHGLfHUqHxTCQaLtHBc9CYhcCMmc8EZTXB5BZEh7ppN",
  "key29": "5LGkiZbzsDY3doaji2GKntiPFBSajM32PeRaxFG1ZF4kyyHHzjeoJrwQ1GwnExVPt4QCSBE8u8Tfrxp9D4fbMfKt",
  "key30": "W8WX5ER5LedZYpqydaDwBVy5NobnofsVzP5SnDxnvvvqtom6opJWbaayfKUHraDYek3qrpDhR9C4h6nYPSumEeu",
  "key31": "2swGiWazH8h1H7xmXdisNKD36dFG73dmPkABTU3LmtpAVu5nht7j5Xe7vedAsXGTt6a85cjvAnS9rtRaAssD3opa",
  "key32": "5dY2gJyfR84wrGRgy5JyPehq9ntjh7ZTeT838wp3HmbhgKfaC5sFaApjLvxULcHDgzUyPUFKkXtP9PREfas34N1g",
  "key33": "rPJBc2e94EaR9xr5yxEZZX2SXdzdXdviSVaG2GXhG56Rp21EzhQxaspeN4AkfL1v9iTzjd81kwegismzXWm4qgP",
  "key34": "3dmatVkxE4LuyyL64W9LuJ8K41gRkNa4vovNtxLvPZ268q6DsFZaujTCxaKBxZKAQMAGqcCkApXFsT26SFj8Yqtv",
  "key35": "5rkkLCJAntrFWRd6RMFCsinjAawsrK7K9F51dnzikhnYMswE6UiZrJQhWRdUgdXC6vqsqPMyZ2VhXcpBBGmgzwUU",
  "key36": "5MaxanqJh8XDYJoRmCUdfQh1s2qXDU25NkgfmjPWx5o4sHMYR1FY7a2Rcbqobjq38svxJ1XrXki7zswSxMmNSkk3",
  "key37": "5QQbtJegc56FihvrNfkrDPSQWk4Nh9XLxfgGc4ufS42hoAWxeVkaXMCiNPKWHKjB4RYLPioB9KZyvEZq3tEkuRRg",
  "key38": "3WcLDwCuryEyGeht9B3HeJ84SQf5WJSaHAstvcxDxe2fJLj7GuGArJDiutrptLnU9r9Mde5HQ3Bc3Q1A2XwqoefR",
  "key39": "hejVU5jyQBxdYCahPZ4U9rvYakWfyKcQvLkunBe66u2R9cND6uci7tfNe8jt7DcbnVwDUUa4Dze4cXNCaHZzFuc",
  "key40": "3pJxj54qYNU2RimjURTmQE4RP9PVX38v5P2o2EgKHaGJSYqiix5Fu2aq93L47eMHe5pqh2rzZHcwaDHpEvbYxN51"
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
