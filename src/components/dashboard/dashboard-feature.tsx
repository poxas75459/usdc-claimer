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
    "5MAqKPATdmSu7C3P3doiirMpytuTZUsYQiZiqJH9ABDQHvxmmoaFBGgsPLTDtFiexXH2Bsevqd7C88mqypsxvUXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sX2SbfLjHXFeHYx9rWnnH4Q2Qe9ehgF6Wbo9bdVHpdXsPP6EfULdMtXA6uTUWtt9ry36EsiwdEn1yLWEC79gKfe",
  "key1": "3Y39BNCAQjwQxZN8tCjqnyyrxQSi6FnrLghYkbWUF9jfFmRVtYxbYxQmqtztng4r48Fe9xa8DM8DR5anQaE9Kitj",
  "key2": "4ti8WGGiQX5dR4MvqKtTbgQt8FMcS3RSiN4QRvaeotNABRGBsxVb9v8TMpqTvCcov3B6kJ7hzFNynNPxrRAh8ESE",
  "key3": "3w5VUxxWWSwtKDUbQ82VKAKrZDyZjn15sAbpTu4DCvjLHfgju7od5sKLzVHFj3LWMoHo1HBoEF9GsAg5z4iurbJx",
  "key4": "2uRCRX6Faxqj2zToh7ayd1wP5zpddhq5Ryt4KjudDzzcYGe6wDnffjuMwtnaJ4XSpKqaEbFXaDZDbVim4PcdhiLG",
  "key5": "3yLwr2by4jk2vPoWAjubdhu77MteSwRro6Dfrf8GJNHH5bGD2Xym6cp5Gfdo1Mmb8mbRkQeSXqk9t2Rds7Bj9z81",
  "key6": "2VE7WQYp6N45JBhYkXCgd2jK8RqcuQRrQFzw7QXEFDcx3dQkDeZeiowNJXT9BAdDNuLdMjbr1DgzLQd85Lrd3EKS",
  "key7": "4PiAqNPfdDzZ5SxQHZXu3v7xoRuhiR9QMW3j1izDGToAF9RUnvdvkSdzKjruq6Pt2x7QVTUMHCVSybrnM5n66r2J",
  "key8": "4QyDba5sAJVQwAPmxaD6KuXrT1bCgDufeho58LsjQx3HVwKPkPXwVGmesEQdPg379gVVSH8HPufwcbA6EAS9KSCc",
  "key9": "2wYQKiYb1vL1mViryue2B4r6Kwx8LFZy4kY2m61qvJrKKfumkEzae47jmnsxjDMgk4EkkX21Laxo2uFabFb5Ay5s",
  "key10": "HSiokAqLfwd9WpszzKztSh4CTdgVC7jkASM3JGw1LcdZe4g8FNAFyMhirLAwgDC59Xkhw5oiT5MiyVPjyrHPT61",
  "key11": "3dtPrEq7Ay8S6qoUZBaC7BkywLrJWEKKPrsHpjip1Cn569vsXYJaFaboPBsyLhNtBfbhAakoxSuzgTpyXX3u353R",
  "key12": "3y2sr2VHpZR7nEcPUs1qQokMPutLSnQDsagpGTtER4yL7GNqtwcQsPynWRKjBWydvpxoCg4AHRLcV9CoLZhbAuWd",
  "key13": "5DBZRJyi27s1Y5GV55AYFwrLdhKofonbKwAZrBPSAiheMrJP9DvCPy86uKQMxnTbMPFGxD1Wna1nWMy8uKgX2eeP",
  "key14": "3iKmbhicrq1DmaW5wG4Qzy3J2jNwjUXB95jAeqqH2jysvGixUTMRGjsugMhcf8995LmKCXrpAEqDzdvQL4V1y62x",
  "key15": "3DFBVGY81ubPXzNWegfMSrVwtwiwVGbLc2yh9U5XQ7yUjNJHjMn9kyV7XeYqu8TWtLyN1MEyVBGoUs9E7CmZGPZC",
  "key16": "4X3TjjWMndLtBEGENN7Ac8PrkVwYX6so6EoLmibry7MyyXtdjdDb9MpiCotdL53ak9Xwx4uvLWGf6ybNt2YyaNu5",
  "key17": "5XVq4LSo8DRoUFimivSdXicTZqaLu26DrCnaUwzUoCy63tkZ63nr8cD1SHvVoadN679JE2CyTiXAaFdn5Zj8HeRN",
  "key18": "5kFebWAkanbkLC1MGu3GgYRU4FdQQbqutcGbBvL4dKU4maymHNhJxtRod9LwPXG9DSe8xCAHC7EkVwqqL7LfnkSU",
  "key19": "4SdQeTMRLRPMK494KyrEBC9kpHqNyYZF2cdwDHw6NFJJHfCsFfX1AvtnZxQk137g5ZYZELxScBg53AAW3nCRLzrj",
  "key20": "HF6Px5phkoHKRtDY49QpDEx6dJvkxDrF45BbW5zzHWHPYnBRNLhVdTLDnWJMSrmwFcvCwt7XtiYovVMR6GrB5Vh",
  "key21": "4aGsEjS6JebM4MH9JPvTV12mzgC94rCatc2RNm1zS8Ly8FjJpyKdy52FUSXJJV5Ww78zdEcW2Gei31HCvbt1Dk8b",
  "key22": "wQcG6z98CZEDWbRLYEFmNP1ungox2SsYV2kn6m1aFuHDZbBpaJXCtSqmy1SaDDZAzNcULeTryRsUjsMbUvbZsde",
  "key23": "1gycM1sHoLsmgeb61MdJHgSm23N5oxsvfF9epQx46NgusuL6bbWB9WKgMWWzp9KutwyxWy9fh4c57HKFoy2gMdc",
  "key24": "33AUMKmZCcDq6jbq99bwVYegUQp5Cf9G2eZT5qopWP4UqU8NeTAVBeCUfwMhhHCTyMxYh6oKTMhm763gua4u61oa",
  "key25": "3j2rKT4wo8JQo4X1nSBbmg9JRuEnSJbSgYTsN1tgJ68xbuMSj2MUsqvcLf1BFP83jovg1NcUdiQz4CEcSufebiai",
  "key26": "21unUp9ewE1xuBbaExeNwt2jEgw2QypqWpa97fUGmsiTUmpzqLur2dpAVjUfpBwMHpJbYeeDrn8BuZzJFLMykGPS",
  "key27": "2GP7KnnHrAQqcVHy3Qvb2ZM6NLJYv6d2pQaKhdPAznRpSTJ4ZpEBoBjzWmx8rZQYoGabAQezfdkRdjxmzK8xHWdB",
  "key28": "2cWU2NVzicb9hhcRYoxBry6dkSHURWqZDEHbpSDQ1cEz9wEfuZZY6Fg1o3m1m9RFDRAHFxXv6vYAyqLvGS6th3ZE",
  "key29": "2TQkBp2oRLScHcfZjfqgEFVgkBf1h4tLmoFsSdjveeLtryH9SEjUJZpcb4WoC7rKrxCHpjuEUhJZqfoRimptbzhe",
  "key30": "3V5QAqvGibXgeoNcx6PEF4k1MUCARUtd8d7pHuywfbRcanuvjiaUZUnyKpnFtktF4YxAAFK6p6ka578cLYk5Yo3s",
  "key31": "3Q2uX4sxi5256bxqCCG7GvNmp6cD7HhB9gBkkgd15uL9PVrqwibE5gxKtRXa4iVELKQVWAKueAxNhi31NHgmtv1k",
  "key32": "67RRLqo692MgUuPhreS5tUkDTyN6Tbwfgv4nbn5Sk9knDuZgsHsyoh2N3vZhBvYyNZai5jAfVcFmueVXQb4z3a8J",
  "key33": "gJ3vjX8bDC4HqYmGtA9Y8AyD9oW8rgopdG82qWVFincKdXUfeMbehbjvXMe9KsT9ReCVzJukLXoSMwSxea8JWD1",
  "key34": "TiArVA3zsrXK3brtN9mwDKG9MANRzDZzPjV3Xwtub6F7MXvnMixDzwK5UamnMhrLdRUJSmjHB6RUy4ErXEuYbWv",
  "key35": "sPh6LPp2bobWBTpeWC4jETpLvskRVQCAfNwGU96NUUyDMQR6VB5Ww6vBaDRfUeWTWcJz55soBpZzbxCCMUxshaA",
  "key36": "4yVFNKpEskaVnydJWjKsxcrJ9EZvcm9MKhwBsgt67HeYQZckJaeo6QnXCJQYCRMHd6uF9vukhDjTjQn5mRXvER1q",
  "key37": "4RBRgzQ6dYy1fUoEbegGPHtxkmjXrx32ZQ8ajAG8hjvB71dz1c7BQV7gWuTiiLDg2RStifzFAeFc2UN9DW4f9sRD",
  "key38": "44cBoLP4uuRSs89KZrdkDCXSjUXa8fd3qe3WHjnyzuzWgjuGgHSihVfrg8xHP7Cn3nET3cXYhT7Yzxq2w5S4YoxR",
  "key39": "42BoDvs55LGvt3neY2Dg9xiopTTUgKpPvSMXXE1kJ6Prst8RXA5nzecS6JnEtdbXPt5uB9edchEgnvVDHpv9qw6M",
  "key40": "sXZkvFBShBUe73BL8ou31eD9KtFvNcjHvH9Xsanvne6ZCSnq9HKoymHw5RwGWfCWxvnnibpS8Wk33p86DZfby62",
  "key41": "5RVzfsvKGrj8LZ9TDumGqfQTYi7ZS5ctKvAucVSgFq7eSsMnBD7MrsYsKXkG1t9dpTJynjerTDPw2fXQKGcuvmap",
  "key42": "2DiJinD4utKkNSkQ1kqCBvS1j6bhum6YHMpxsF8fHHGMJ7qVW3adJw98ZZHSVq88BH5YZnLBR63qpC2JRtCD1kAY"
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
