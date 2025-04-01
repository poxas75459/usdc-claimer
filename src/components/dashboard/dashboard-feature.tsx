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
    "3yE7caU6ZsDKH7nZV97N7crPefQvXR5Bpiw3hDbow9G5rFWzLXpN45xnm1FjDz9ydL4JSJ8PrjmnABMtP9mw2DG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDTra2i4oMvdRrxix3qd5rer8rSq6uTrvbR9ELfWHCud3tQ7TCTStx9SVy7tVc4PozR5kMtQL2CbN73nMm1JcQ",
  "key1": "5w3mJh2grSwD2GWFTpDZ37ECzNHatwCTEo32MSMRoJjc6udrRueNu6jjAxXZ5EpiKV6beiZWe1nfzunTDScn3Mzk",
  "key2": "5o8hFBDep8U5wJZKk9Fa2oo5pU585MeTcCJjHcMgawUW4Lv4ReZea9t5Kbam9KbkjtuqWg7n4zsA2iP3A3jvgghe",
  "key3": "48axzsetkQRU2Gw5NAnnCUQQYkCveUwkVd2RhS8UyeKXkPfUbpuv3kmYHVozkuuk1hWj7XH9weUkZTtTr8brtxKC",
  "key4": "3ond9bwJV4AM4WkKSJbiu51eghVVXZ66pbBS4hPmpKPiq9ZL8TSoYQNcj2MdR6uiM4sDSr8D3zcB23xcu4akESgd",
  "key5": "2Dg8PZ7LG2Qy3nPSpfnZNHbesPb26h36fXMPWcWST1t7EVgvpkeuEgj93oDjM5cXH7ohzwvgm53MrDrS9G3M6A5M",
  "key6": "bNAz9UWw4WJ5YAQMKXH9CMWrqUnjNYdm3cx2YjwhDTLo8FVd1JCLKyZgGnNEPbn225wpmrMUYcCqxNbg4kWSe8w",
  "key7": "52tDuKYV7S6GbUoTD4WUiG1WM1QBR6SV24bZys2srm3Nco8wQEthQjnpcmx1b5zE3uWUxAfkfUQxSvpN4EG9U1NM",
  "key8": "5hsfarZmaG5MFYZiJntWM28fLvp9PDk4J8tYCvm5mhwxusLB61TPx3EJK9aURYcYJpsNGFebWE8tYESWceNTGH2h",
  "key9": "3DWg6ounFEkvfHUgmZJGQrvbTScBFSQeULrDhuLXonVGCz3KomJd5bVGbp62nFus6bh96X1wg9PyXJcg7wrPPHmt",
  "key10": "kvGk4QvLzwSLP9VrqZsF3BFWKmRTHHb2oM4uvyLhiwP4kW527GbkjUSqmkfw7EfZ72RSRkGHRJ8MXY5yjjmHbMj",
  "key11": "32hxF5DkwXs2cgEBs6RyCXb9je7y8wGSRwHBHEgG7PwarjZe5HDjsYrMpN62YVEA72W4Rr9oYyYK4vWDKcBK1s8t",
  "key12": "4E3tVToLQmCzrRXU9sH75Sh692HP3WNR7xkFtmaAvJzAegP4kBWUUP1YBffDNVsk6s6SJuvsef2LQ7AdrXVYvs2",
  "key13": "327Lqj3ZxjV7uLMXxnx3m4ZJsBCGKmX8LPWX8FTYts8LuZyEc7tiGDaKJYQhpypJ3fJ3FWnjtFjgdHVsoLKcQnAg",
  "key14": "2Bf3s4DQ575kbUV5ZmYDjoZHGmRFiwf3NsoLNuKGwEyugT7TjmWB5hQsjyBy8QxjaC1dqYxzeQpEi8cCVDKMFgy7",
  "key15": "4D6LxDEv6tMyKdaskQ1U3inADLsAuUzCLFpGw2pg9LdvpE2R7AMCxmUFbsd9qmfCiMkyAx9k1idRCPBoqdmY3dNZ",
  "key16": "2g6YejtZ46WdkpDxtJ9k52ioq8uaw6WVqpmDSDjA73qAQLwQCykZkGcP5TfgnAjFY4WknRfGpP5JzjQm3g2UERhu",
  "key17": "3NkyM1a9PEbMur2DynD6mQBHR4b3MUgPFFjk4unSwEF64QdTfcoRCVnWLRGDRUuyp8iZmUuLGAAGsttYAWgoekPp",
  "key18": "4BeVaTcbD9PwQqhfV67tm6GXz3n2u7odfFNWeQCgyF5NR8izyY3i3ctiotLZLxATAEznkLdqWPetP1az1WC1vmoP",
  "key19": "2h762iNo7g3KGoTEyoPasYBNQcgFaU78N8Fs5TNE8mT3wDfHki7nSVy8dYVbdNDzHf9xdqQhNcDUSbNdd4GNBuQX",
  "key20": "3z5PWXbDjfzAe7zhZbtSbHwDCBPoeJkfmK9todapKBP7u4fpFMMfLubrzXWui5d1GwfhaLdaNefHZRhHggtdXj8i",
  "key21": "5xvW6xayduJpGSnKDJj7SgQNwJikZRb3SWEgSL3tKhARee2CudUKvDj2KGEwHBNbsnGtDN7hwTv5g3YdVfYHJSS1",
  "key22": "UphxJyHX2U4W8NxDRfvKniJ2xw6cmVfcg734kJZvmhKrE9hqZrYXVieRM23D2tvEEWeYUaWtFjLa8VYkkK95XBo",
  "key23": "psJ1hLBJyzEaYhz4vF8MuwEYRiW4X8QoG7eWDqGSkQVmytdNjBQeHB39nn5JcH4aUGi2CmGQLEiLp3AZ2mhZprK",
  "key24": "3oqrnDMgiLt3XwxQwvXuN9hK31VGhaSQ4BWn7vM5GotZbpqDHogziuc3KhzyjwXWVCzMdqa6gFboKWM5uQn1Z5mC",
  "key25": "28SF5mC3tew2aADFzgmQnWFnx3FmTyycep2oZDUgLV19dSgwPtQrnTDLLqH9rxGE5CuErph9PkGyXugFXYf5Xmqv",
  "key26": "Pc7kBemx7XtJ8ougQnUckLWDxA8VKgDgMEMq4XXYnYofN5AKrN3oU3ViCgpRq2JFnbcyPYeQ8JNy9Dv47cj8PMv",
  "key27": "62GEoXRZPCfbrpe9ogpocskiCZu8JuNhxQ3cTsx4iyo1mH5dg3CxX9FqaT6Qe8peEry7bFsvH1FJrwt7QFgHsxZP",
  "key28": "4FZoTd8xTc7yu56CR8KD3Ytz3y8W68dJxMRLxiRR3sWRMbJus6GRtNALUkZCn4YYpUG3G2Xp8nteqUs7wb8YTiyC",
  "key29": "3tJmAP6D3tCF1pa1P62oLCnqF1UDy93QJKEXyGzjUCv2LpnEG1FeUeERfRpaCwDYesNHL1uaHWhUyT2DVPZAp1Xx",
  "key30": "xXX8X1micNwRPT7wayiUEVsKK6SXbdaMsv7zEMhwNzi6ipGLghyRv9Ab5KhoUARvvHNF6k27gywi4JCVpExaYir",
  "key31": "4nXBnXU9rqxApwpsBWgyGNA6ATuGdsSekAzVRJwhzMWp7FCJMoEbt8CDmAxSFu4Ptu9T6M9fgizjcC6uU73yNKXx",
  "key32": "2UR7wGe1Behv3KjFTdYSfsGXdAEy3jPXEvL6MjKa6TSPFMU2D8h8qvr6Md6vwhvupU21EPkDCWAE5AfMNHUs1E5N",
  "key33": "4jZu9gURYhiezQbJxMsyotujHgm55DfZ29iDVJmYrti1dGjyAmKPJxbugAzHudh4257XisrRiQvESCvhT7gFABvz",
  "key34": "3NTELt7v3SfUadEdD4vsCX9q3Bgrvgy5JM5Pw2KLkBvPJwcXhEnZwVN1eF4qHLYMcTF2meu53fPx4MYooonf5VXi",
  "key35": "4HJseCw9aot7ZuKKxtsBoohbjb9bUuNTt1FdSNLyFX7ZGnpuVTqAmuLo384RZEvLGKxKxE3kXMUQAQf94sJZjcJa",
  "key36": "4EScig65UJySFTwu9bKSFWdXBPG7DiN139Q5CMo6iVeJJtcgVvH5vLu52JR3zGVqtA4ztC8unhLaMKZyRp7qYzkz",
  "key37": "3FSYPNY8PCQmwVwHUNV35FNgTcX5htkSp6HL1q8i4K85dZg1UuAB889JpsAoD8tUdQR2npvxkdqF7NSoNTJVgh1t",
  "key38": "4wGxrAzSJuoGPjiemmdqSNkPrJ2qGoRe2tTkLYmfJagn3XJqaSTFdaqBLYdhJAn9rFeFVHZhmCJtDgFUA5Pj3RKW",
  "key39": "4v5qTq5XRbF4ayFwXx463hyZsxk97bJts8uvEWgUSE1mxaTdyjKh32eNMn2TVbpT9sG43Qiow5b8gu5t8AcS9uyS",
  "key40": "eUpN2YPAqD1Z1XJMmGQUkL3gRDbTR2swN1joydjgo5HwxhdoQsDW5i2JtJKRKAx7DMLSToDi5Q5U7wqJhzMBYiv",
  "key41": "n2XDZj1h4CCRy6pnAgtFZtcpFhRYi1vLAhvA8yNSdJjrvRUdJvTmtFTHzWgJDKWA4Q4Kcpjaxv8mq2HVYKAVUpM"
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
