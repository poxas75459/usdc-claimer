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
    "26eRt9LMNEtye7BJzWAhoLRqQZzJ6zUX3G8xTQQZTVUcZS5EAJsfDZphw1HSw3hHGJ8kADdr7ZR4wj4smgSKPhnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZZuQitpbesFLmujJ7fepP2ntAKXGKtzQ75fy58WyukCifEntwuvFg5CaCKehhBEwEp4oxuxHRtXeacWHYGe2ZE",
  "key1": "5aBBKSuVEN4nUSmfoexG25VM1zkRvz69j5VdkohhsL6SdtB4U6BvdErCsnvGb4AyvLgN3R463TjtPt7MKRMHz8uB",
  "key2": "gMYhABpnoK7XPTzSEWDbCGBxs9NLoVbU5tvbtEU7ySCQ4rzQqaKf7nUNTHyMyCZvRstqca7AAPdEBbvznXfpLX3",
  "key3": "4Rudtq2wGD1ZWMUhAEVCY3kxad1W87KLkXjn9viQuFQmtGf3P1wuhZckhwbm1JQiQN4m4iXgxwDCuTUTm6rj8Zfk",
  "key4": "4LA1YinvcHEoWgaqzkgyHtDtubi2sHwuJNKfEe6f8v6nCnKA1xHA18wgF3v3gnWzayUP38Xx4KozsBdxMtjAdSsN",
  "key5": "4uSukAetjksxqxichzviz8hgBSMh5bekv24B1jV5DBX8erRYiCjsjGwzaQKNWVEY5DESkfLWswzpgABeLpgQ6ZGt",
  "key6": "nf3MwJwjFQoPkE1sCXQ6ZFtFX9Ckd5TUv656sWFuQjRaVDkGuSRcCy3htar376VVRq6xXiHBkWtujtk4U9tZ8tf",
  "key7": "38UMyEd6v8sejkVhe7AwfiVKpe9Yjab9DnH7fvFkm8DoN61WhFi9WFZuHc1gRqvHDKmNXwYjM9NV7Vu89iSAAbHu",
  "key8": "2Lco7t8t3hj3hXajgLz7vrWcPTM18UpHCoC2Mh7uA6VtNPtDWNA96UVa5XAHvLgy7TdLia5Akno8zboVV3g6g4Tw",
  "key9": "4BX4FNDHpTqLDEESmHXy82U2oB5fZpxt5hnBrMTX3TeF699ZFwbiNrZ21CEmFEVmVQ4BuUizZi3Z8Svy8rnYPVGC",
  "key10": "2UdEkNpVs3e9h4d5JrTY9s3Dx8PEmGiR2bZ8xiuY2uutgKFRSwQuvFXwrVZsZ4vzyaBYTanyHYHWz3BYtTyaZKwX",
  "key11": "3rqKstr2wwRCuT7VnNnkyNpCUhSowMr9XxQjqxGjXpbtEeCGmkPK6oQg9VZEpWGhrqLEckiEi4Dccqbd9CFhbKKS",
  "key12": "BzpNhV1DCtYDvehFm6pv9cPFGbN3FMXF2ivvqj4KsNViWHQncGkvcFmykdffiCVMwMoBPn6obWxekZxj7Ufv6ue",
  "key13": "5ZTCPEC9QdAFAePhqwsSMSrmhXhknd4Rya2ove2EtJ1UDFpHEDG6QErjcTSWwPrSZVuXCkYYa2shD2i6KvAoAMQ3",
  "key14": "5LNqYkmzX6z1sKiLJLZ1qefZ1hJipEQxpM73XvptgNobUkfez6igEZnXfooQvZ3DuP7iqkkUjvFaADTu3y1KMmyu",
  "key15": "26LqzWkYpFsASPBs5M1NppcY6g7WwDtFfJXEqCRuwteAz3ozBTzXyu9Z3RLuusdfBSA9tqHgLMWjBfFp9uhnqj5g",
  "key16": "2Kf2js5wP6vTobZUpi3cq1AzXTbnLSufK22ttosa7FKguWS6sF43Bsa2QCwoshQvmgF2DUv74EKhW8Y3JsvFEdMM",
  "key17": "5Z8m8QtQdqLFBWHqEit3PgMZnHEWVGuzF3HDaE1pnCGPFdgvpa8i1n5hA5W3B9TPfCdojx3nJ6kqh4DgBzF635t6",
  "key18": "39VTtMv4gardbmvTZ23yDjUwyVo3mYGnfcSA5AVNG2CVrQAEMwafhS3QK7vnY4dCZCZgHXJH4HUvxjDxLoUjy63u",
  "key19": "3xYR7gMgRVeUU5Xfot9Kjnbj4QD7wrXiTU5GYVUSMDjQVHPoacmm3QFoVNonaMtHtBKHNyHfjS5jt7DWKvEYsCqA",
  "key20": "2TCZ9auN5Gz34FJzw4wpKHUVDKtr3SPVNyX57xJk7kYmVLCneTLzpgiPvgC8mmxhYzmqh7FVzHeoGG7pXAcyVgdv",
  "key21": "38Hu7PwuDwtrLoxxHHhteu4Q2QifGsJS6GSM3mf7PbesBsuRY8ECfmSV4iZMX9ofys3rYjQ7fFTJ3CPGsF2LdUSz",
  "key22": "3QeXB7SURKEFEzb7NF37giwhpm2UFNbDZs9Btevi34GirYVpAWHsg8zGBfmdCEUpAXrRAZJnerJMULevpbWhcw6F",
  "key23": "bd9n5RjfUEBv3WSgEv9faz3bTUj8Ty9WrSCmnvapKQaibKN45MJwppzsEH8kL8bEtqLEgKZnmsQcizBRmyFnaMs",
  "key24": "2VkU6dFigoSZgcZaYfGPRQsNHtMgf2Uy7bxkQipkRcJLRAdhm8yte4ctHydsj5U7Ef5kwp7NHAj1a8XXhKHCwkHt",
  "key25": "4vdyWSjgbKD96QypqaYyophHJk9z6kRT5x8W8SyUyJZFDmNQMek9uPrtqXksH8YvnBsmfKRcDioYpcFaP74gpiBw",
  "key26": "2sws6T3szwW3z4Uopd3q5hJvRLDU7E1v9KMkxaGGnXHmTT6zYK8RHZeir2SwRC2WFLmNLTGk98uZ8Lfa3ExZ7qzq",
  "key27": "4BKLDdw4fdaXR6W72RotRZGVmYtmxg9tHejaeBhLd6wQEqn3AdCUhhbH86yiaR2k4UjDMJUXiGK9jPekGrXxSKK3",
  "key28": "2nSb6jZUZme5CjWVxRGCuXA593qntMnypXinXeG29EofyQvhPEi9zvfsjqdNkYhAhLJyzBwZgCDJ37X5HnZ7oWKi",
  "key29": "653cUTpaw7TPsxJC8SMDqF1z9x9B2fGmJCMcd5LLPRtfBacgQ2aJ6zP5hi5MEV5UqbzeCSKw3svf2KHmXmcWTweY",
  "key30": "52kfcPyvqLi5wouk9pQnsC1wJjJRC767DB1zUUfCRWoFaukajL1Xj71TU46vvFcDDzq8pXeCR7Y5j5cWPKjS1LuB",
  "key31": "52pxJmWhV3F192DmZXhyE3ePsyR4beUM7jHMp4QGRumxCBW7gNrkCQY5PdYGwuTwjuLU7qpExekAMtYqKQxJcwKj",
  "key32": "4PqZRbrgS2ub9nTtTZ4grcix86ixZayKjKUfUqWUo7fiqX53PzX8nWdM8wwGCZyH2dB7oYh1G1FdSark7HyUtMe9",
  "key33": "3Ykx9G3toPgv8joT4YM4jevPJs4ky1ThhS5UgrE6XGbXJ9oQAVBx1iwmxKJDBjNJYHTTjzmTBp4ZeqPDYUWgnTiG",
  "key34": "2xPgqHpyGNzy14ABuCh9TGNyTjmYKTGmXQSqSj2keXAQ1RzWFpRWvDJjdf12noE2oKq3m36nLtfAJyjEsqxKYvC5",
  "key35": "3FiGdfgvGoKm2W8aDm8kDZ5FodZWaGdMGd8N85f7o4XCTiQeZhUBsXjAzKGhRYMY9TjoMNm2XfHfyqPY6hTeB5uz",
  "key36": "3VivjjFCXNBwQiojT4BQGvwQR599zbfWmPdyzzPPHUEd9DDZqBpMm4QWZRiJHfWpNMHwExStQrMEFUBhKyxwBVmf",
  "key37": "3STtTqookEqTzdq5Yegd91qu4ZoRUMzL3n6wFid1RMW7Qd5y1sTUzwBWKgSSwibhLqtyb1cdAvTQRoCivNCEnc83",
  "key38": "3HXfgwTrUbWtameua4iNzeZaKeTb8KWvVdohhgNQXfYh6crt1s2XEFJsxqZjWH7in1zSoPgGVGcrTrCmeLWVvcXa",
  "key39": "4ShPNUhssJVrcxyP1HkFhKA6PqtR8M7TUDSRbtodyG1o4Xg8bAqcz5v4ifVpaVeQNPRxPfT6AcmwLqEnopEHDaVh",
  "key40": "2GmTGEHHZGuczMsBFAQdVnEQNv1LVB2vz1AVU33xpomuu691nGvoCd8b2bfyGCv32coKXW1CzFeXuNYZ9SXnuqj4",
  "key41": "45E5xH9gLu9D3bAyfrJ8ZucZi6ktX54vidwvV3wgCoTaf4S3n7kWQ1MpotCDSp1Lior9MQQ2DhXJE8JRXvqXKo4D",
  "key42": "3THXUNHWSyR7YWFLt35KHwZDkFyFEr6TgbUavsYRA5Kx7zZBbHih8JBfZvQc8KdtuG8tco9ad3e8qsENxQUdZL2k",
  "key43": "67b59xHvBymvSKkJ35Wbbfis7rWAiVyUr2yH92qKgEnH79whXwsKKVFij6MsFZ296cYZDpxWPiqJbEdRgm1XRDfJ",
  "key44": "3Kmgz5hVJFzTj9QgwPLTVHmBMnYHJLqxT4zSD1Bucmu1wniQnUgX5Wfitdz5ksMoYKBZAGJUjxY4o89uZHyoJK6G",
  "key45": "516FFNoLNiFcQLvL5CHd4JjeR7vhfcRgSXSTVizHTRuKenFkYfZTp4HPBmP2S63H98QLT2352rWjypKxaa9QVZ5W",
  "key46": "3uvKz5EqLsJ8iDTYRPVVKoGogBwYHBK5GRfHhBe1CStNjKiMRo6M919iLyo24BQoxJ3WwdLmSkeg8BAdZ8mxDPAc",
  "key47": "49Yiw8XYN3G9ZjpcjKZCzQus6cu9THV3iL1n3Z9q8oJTFi35CLfDPTqGLdaKActPnDkmyKgjzh61bG1EBbbp3VhB",
  "key48": "5iPsW7u5U3Q8cQnuVgsVhgBTtwrwgxBCzkydRDNYytEAkdrq53B3MXNggoxx2KZjaLqHU4ZHoh6JrjFfBEUXvjst"
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
