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
    "45tLJNYSQMgM8nV5A6B8R6eReViSzAk3mCVJ2r7JuqezAMCQkywMNEoNDUESy85EmAdggoARd7YN1BuKr6Chiso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JANDkDG6mP1BETWzsrsWtNtsPwybJjTzt9MPNe5oEg8hUJ8Lgr1eEhfMkjPDgpEaiJjrLG5jRWZP7kfpNKkcNVc",
  "key1": "54QrYGv4NZd68Qw8YNi3xrwykR29dugtxfhzhjffPephp2tgxbAWZ7J84UrEZih7ML5V4RUR5xchCa4SuuiBChsC",
  "key2": "5UvHD6Y4EoNGNutA1EGwPb5FVJQR87xABqk9uM833nVomypz3FaV8B8JDHNLJM1RuM7rxHshfa1YjV1j6XDg3FEo",
  "key3": "rFr5SEno6d4gnLLMf64Hh3mRsAydsqwawWNQT7BzMkKZgvKQYJMUyW6nzDcjABAqLjqP8dc57wE46qcMFFnLFZQ",
  "key4": "5ahAkyHXtbqYSfFthMwFYoSycTSWMhsnR3moiDd8JbYaLZMjyeosaycYxEkHHXjPkvjpq9FWK86ggF2tsiqTjadY",
  "key5": "2WitMeNNMrP89drYYr6tCVL1VMopWeUNeaYM7eypVQYaX4F8nGQHPGikgAznW7YpB8sKbTSewVREaCWY5UHTF6Kk",
  "key6": "5CUksaA2TZk56kVc3eWSyFQNovJ7ndNc9FPHPeGMwvXo6yeT9JbMeqtDX2LWzwZPbGKWjBJixHB3XFTgyckTAdRF",
  "key7": "5NRNuwD81cnysxLyba3MLMiFEWqBHxEzNV7hNjrVJeEY9JSGdTCHWg4V7ztyiNWUDN3xrJTkJRbxEkUk7yVB9PAC",
  "key8": "3WjvHekwJWWnKoDALgorGfHesbzVsJUKhGSvGL22dCXawBt1P6mwtzrhcKzsHpGGFgnAfkWh1x6wdUGemTEt4fLM",
  "key9": "5c4hhS2JthSpoyX6N9rgnH3uGK6DbxGgp5T65aqGykszYuRLeiaFPw68PG39skSG3MaeEK527w2ENy4GYuzQP9p4",
  "key10": "3q2ev8PEEXVyFYGCWEFtbKm9GXsrkwgcVBgGAS7ibxfr1bs7PAHWa852mJVfBJ7375EY1ZJEWxa6AJN2P99oipe3",
  "key11": "2qB42mixp96JYXXUEHgD6hxUHsHo5xju3rMMASazdf7iQ36gp3JQxkpb7SjscCpS43yBYDoEkaR7n6tDcQsdFfRg",
  "key12": "4kB2Dcu1z3ttdb42vWeEzApwXGpiEkZgb8uh7ho285NA8rcotGCTahMXVcVBaSPpyUFakMBt6JQSSw1zNPJNciyF",
  "key13": "2YKR5BQkuSZdXc99zT3qfG27a1QPdaEtMSy4n3WEDNGnxrCWTjiu2SaWAfXgftdGS1zVFC7p7atfdLWH26BYKhRz",
  "key14": "3VtyAGtRzCsUwTz8f7uxjiAkg4a6i5W2gcqoVqLH9MTTMKS5ZzDT3Ub2wXTy3UrLDmDbo1ZbgsekPCTw1YeP48eC",
  "key15": "nTgT9Y7vDV2MKngvWFG8KtGBPP7FPfAgvdBoHyxmgykQ8MLSzUzEbAUoC8Eh8GjJxQgbEV1kqsn9m1Fa78rsznj",
  "key16": "JT6zXaKo8j7YSMMzUoMdiGeNm8mQW6Z9UKZsdu2CMpnJCjcuwqqEyaqP26cFPR3x6zJzJEcHnHB6mKgDNKBJYrg",
  "key17": "4Tse2MSvHQuwrqhbb6jwsqffGmaDRJJPiz6UTa3cnYaHMzkacvkSBGPFzay9WTH56JiNHaHCxPpsn7fkvdA76JVf",
  "key18": "xmYpUA5M3xNxrKd4MJuSsjq1MT8AhPCbJ8Vzj9m1WAi2SyJKxZCRzAjpTcwSHT58NwCSVvi168kitgML5Abw13Q",
  "key19": "3wbnWkHEe4ZFKcajzSn9RLcGoPwRBeu1HCs4orP7GbqCALrnCFUMWxoHfUBs7LZwgkdmpoCZmd9XtpzZXQP3Gkzr",
  "key20": "5tZAVWWPnenL6AE8WL6uftFAJMu6VhXyHDsX4waejjJhJJXQGHVMwftgma81GN76czzNUqzwpekatAoT3EFnzs1Q",
  "key21": "GGE1UvmEXLk7Jv3s79ThEcgM631RMjRs8DEYvRqP1WKSa1bnbhTm99qmfWZkBYgEMkaoujw3WtzHxZzTSTFzBQk",
  "key22": "2vYQ742keUGQnjq871erGGKxW67AwRgnZY4zethX7vUgG8jx4ZZbCZfWY3ReNe6wAFntMzQuvdbXoNmJ6MRXDnQh",
  "key23": "2TMzWm5xgTxaGbEW8otZKCLzkM1PR5wAyonwJxngfC9tRqp6VjCS1uPsVFUQeKD2wTFftkcWAP5cBhao3sznRQ2u",
  "key24": "3PmWhK8AhNCssjbDwXLGMa9WqDzLGHyCoDX2tSRbgkT1Ga9YjAktxgQvQfzsQULrnzxCjzrQF1AUHRVnPVdSG9bf",
  "key25": "4uWXeH71vct9DWazGvgfrmhram4hSvq2P54MhRp6ywSE7soKmKTp1NuV3CyYb3nraM6wkwEffd37aESMJ4z6S9xE",
  "key26": "5mweiLMtHLfSxemo2bhXPHxrSLURazoBBMdATnLrYCMkPu8hNpe5Z1zShWAfvCgarbrMyhFjAmLKZnaZ8kCnx685",
  "key27": "5nFYVM1UcgSSatn7N16PJMgvXa4orVjNEE4AXNBCjNZF3d9nuDkERxw2crVv5hfcPVnfvBbaQjhMWSG3CWzDzcPF",
  "key28": "3v6m7DeWNQWV8oJzd3vPXj6ZTKidn1jupTQa13ZqQpur1NuAt2ZsvjY9xAjFfzf8G1JyT2Hk5vCVdNh5K1JQMXmU",
  "key29": "4Jpq3yc1NpaX3SN8fJ18YDg4Lq7WfA5zDRSTqgTdCLnYEGvDxgfk7YhrHn3z5BK8i4KsmQ8hg4vx3fey9DBr4nwk",
  "key30": "5r1g2E5EuCNAsobJhQsDpcZvBywRbYq7mQsc6GceBLGa8BkLypqW1zYdchpkRAEjied71k6ueN63q1WtLCNiDEG9",
  "key31": "2iDnZ6je6KDqJTQ9VL82uXbqGAU9f1STtpJ9HujCiZigPCKeQqD9q4E1kgTpiaFYMq2JCLq6ncgDeYBrD5QWK2RY",
  "key32": "pipS8bzVrUDUdGjSEXVEzswnT5eroJDESyzFSLbBZGSSV28rvryJq4chPmpMZ9qwdbnqjUABsy5rWc8fWGD5yWc",
  "key33": "3Wb6xDCqYB6uHYXxKPpx9N6Cg4t472rp7iPG5YjMAUcNQjAVqHqjyZw6DwCSSqX1WKac9cmFEy3Gyos8t4Hwp1Ur",
  "key34": "4ad1Bhb5wxeTW4D3o89mBqasyZAC82Azmba9dRuMYi7XhLKkbmMagbUsfHkUaAdfioDheKAFg1mV3ymTKhaRHSPt"
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
