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
    "uepqJd5NGyXvAPJr47UrszrKBy3HRyRgR7zU1P9eQDt992kYYUfGCAro4qwD52r9pEi9EMLGwC82GMyiqccwzLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuyqtaF3Y361rQvEMpZGimVFEqywXbZBoP2iWmdkZKHmvALHg9VK3HT3ALDRBKV8B6mb5cpWCH3Tp9NuRadWPMq",
  "key1": "3GEMmN7H8PHXD24WDJPgk9HbgoQ1cGvZqoLu3H8sxDLMRgAFEbUnfnr94ujbxwbqG9eGuuFnEqWGZB7oN66PVnv9",
  "key2": "29VKrxcFq1nJS1zaEWQSTGhUx364KazQpLDjagDBf5p7Vruoc5Ma9rQwF36wT5e4zvXTL7KnMTK9XCJWMgyHT211",
  "key3": "63BhcavLwdxsc4Rr2oReNBvsd6R9Qo5pjQ2ndapEMa47zmY1na6TpXzmtiEESZVfUkki21UXjffNmNABjycsE131",
  "key4": "3Re29ERMJn5hdztNHfu9QkHpLwA2tRVRtXKP88odULUyLG9k2pEY29hR34CAGZTxFMGqcgFkGbqfWCCxaAU9osEb",
  "key5": "5M8gB3HhjsbAfwXVXcfgeX8dP8eMeM5yZEZk9txHvm7DSQd8yiwHrYaCgT6Ec7NJG66x6EjB3o7VaT3mt5ww2ctC",
  "key6": "4uhcUwq4heQKZv1FgiKWxugjqsDXQQXDkHZpXHJST3eo1K6MBtJffGRGgmMJqpJqqht6idV7Jx3NKAHXFpfx6CJb",
  "key7": "qyqHp8P4cwrVFY5x4BRwRpsbXzzHFjMRqLankRow7uciRSm5MWfW3XbbWU9zn1rq3neZab9AXDdAC86rFkSgsTp",
  "key8": "4iuzgkQuyT9dWFbGUrCZuqbnJbtBu9XFkXCBQacE4yQCoZLZPSYDSbpr6ZfoZCkA5DrnWukpcpTdBVwTL3AURwWz",
  "key9": "3QRviMZj81rRMwkUhZ64ggQehQ2PKUd5ZFhzfM6pZzHd5q16eZzJTswfakoJZYdNp9WLEK6pxYrysm6Uk2kAKga",
  "key10": "55udQwegaLj3CZHCmwMAoqstYUKa3SeWyZuJSt4VcuSzRR6NvnywMCzDFWKeCotN3ABSmvQpH5C41ukFsc8AKucH",
  "key11": "4XiEC56szNZE5La59DRLrGRyJenFscjXSB5UFWpzvhWBaG5cV7fDvkR64wbifxPKfRx5xM7iCSJWgFZYX9T1hjq5",
  "key12": "2qrRrZZfG6Edy1GDvvxtx44S4s2E9sw3Lt35eteBLPYpZ3TXkhvSE5RjJP9TvF2nrih7kdmp6xZhqTrz49f6WUnw",
  "key13": "5NKLxhWYnV7H48MUXjfEt4pNr8yy5wXzijiP76wuYpcZyehkw5cXhaev2U4oC3WNXR1AYAQz61SzdZ4GNtgnT1KF",
  "key14": "5MnBSo92DdvQJ7cqA15HFm9LTT6bhd39PERbRvjHGEHHfxScFiGBPbRqEu3fBVkx5z9ye2mtGrr8QMyt12N2EtC5",
  "key15": "53cAyNG48QspPbT1Jkev4dzJFWtbRVAJ7hFkpgASFujmHX2JskGF37LRV8CE8hkMSpkHtQkQuRFPY2jHDrGGnUda",
  "key16": "2NfqED1yvNVnBo5gSah9nrYCxYAqZbQL1F2q7D1zsAYF9KQk3a9xhWdfG4QiqesPhC7dgEiZL8yNMgVpkJu1zrsm",
  "key17": "2sqqW1XvWTKxBrwfeKyRx45XnEcW9u3MUUh3DBCLu3WmCyLfCyiNvSNRWD5AcKdH6LSijoP5DBv4tMe6XxXUr7tW",
  "key18": "4LfrbABizLupEVnyndPogmPyxBG7P7Kd92dictb55sqQmg9sfZCAtEgb8BqPzVtskxyaBVVKR5NP8Re79kb2dNYv",
  "key19": "2MYHCgZaNGG74DWpZ4mVSLoPMBMR41hQvjhV76qPdFYQXnEa1aBHSY2AUtjKmddxRZP9oZBZKSqsytD33Q3EhkTd",
  "key20": "5kKRKYUxJpxwHPEj1oJF2FREeQVf3YUTAstJf2bvGzTCGVgjbaRsRtmCGKknfhG7a7TJFwTXd5Dnhyysjfi1XyC4",
  "key21": "oFq6EE6zHj3v2NExWfs2h8k2uTkA5XAJ6airTpQo4bfHERMTZDV3CsCSVjxAwDy9ByU7bv3mnTPFAzR5iS54j96",
  "key22": "C7q3M5HYJY9xqa2JJyR5q7GexPUywPbiynp1rquisPM8D1hKjSGrNr3P7xPfysoaSD5cY1Y3gndjnRYTzCPiueh",
  "key23": "3ZvegDQBvM9v3ovsRL1vKv9mXzKVnvK4p6QnDUJF5fD7GJUM7eNiTmi5m4dsJp4sDKvkSDTfD9A4YVDYySP6MvkK",
  "key24": "9Kt9VkyahyZAumt9oCQdYqJXx6yHrDtaCadjL7V7a7fGYW12tdcZrx88pdMJh3wzEDsoLJ2jZYSXCU4xuxhzTL5",
  "key25": "Jx9YAuCa3qn3rNGg23TbbBvTi2hnHhyX1ysxiauRJ3t8Q6Tv9ZzM3qhLz6kgdpcNUdxcwynQbtEaSgocPn4e6jQ",
  "key26": "TwAAGexCBeaVPegsE3Tw6GV41GfQDPdJUGaAHjQ5g1JGguSn5RomuYKKtxe3Y1EoVTJAMTB6qnvjhqnesUi1iqe",
  "key27": "3N9aY5Q3LF3uN8BVQMDUSbzT9sDWRwPm9T1u8qrRap8Wde7i4hqCeDiWGjw4k82EtpxT9B4kVgsvaVVHb5m1mH5u",
  "key28": "3rY1yuNJZgs92orbrktrNRsxcnRrzSFEbqVBAAaL2ETsdekd83ENKExGLPsqJdgJDraSUt7TdFhiC1vCuYdcQRwW",
  "key29": "3VKHTwQqNaErTbhSTRKJwknA4TMxktsH8BrHaTHfQQ5x8JyWHg1a3rxksakEKGZ6Hesgttu5ejw9kLCX5pGUzcKZ",
  "key30": "3jjiXUK8BWqi4GvKTcf1ws2h1f66tzgjwYniPVpFCb26wUKKTzrhVjmNNA73e4hTQZdqvsU2YRehUHmeME5QhmpP",
  "key31": "2vhvqhFFK7od7UjUZCcWGGXRszhtEjVkvXtjWW9GEQDFX2Nq5s2mkgdGZKzGJPvMMzxtnkz9RKDeuVRHAZwZfv7h",
  "key32": "YfECY1sZUZJqcTtUhkAbefzGJfa5yGwA9Cosi1c4JpUoYbEFyz5Ar11GDUYe3NcD3NkzoT8robKVrjxmvJPT9Qf",
  "key33": "5DKwAqHz9zLizcgBzLkqinwHZKiCkYY4XyoWworH9y4qZcaFwPzyVLrXTaqacXx7y1XLSLfRFf356mxHq9sJyy2A",
  "key34": "2gnJrszdeZ1Hezd6Vz4PbGbqooaLUTN37FTG8XW3C6mHvVYrk323WFsyC2yCq7yycEQY9GnZhMV9VWhtsy3dYVYs",
  "key35": "5YJHwfSLnAvngN2aUiX9cC2sQLceUQDk8EUDksZKEhiPb8npYWsENH4B6HASo2AGxPWD8qFjyoCc87LmbeDbHxQX",
  "key36": "3mKvNAQQnWEM7KZFj54JATDeA5hdUKNpq2tkWWTB1Qx9ygvpR27EjKXKoLmfiLGNWDMsCJzDoWHjr6PrFZVPzgqt",
  "key37": "3oL3dhsAoUnM23w6gRDbE7fgSqvPAgEpCfG53C4KvnBfFWmA3UY22Wyej6VY3NLsZLbVBM7D3hxVCHAc2Hhev4zv",
  "key38": "3BrVrCTynQKwvTjL2JbjkZVv7bUEYr5aM489JeMLy5dn1x8cH9LrXiZReZ9vaSJbx7RJX7TSidqm6Z8EvznRg6u",
  "key39": "2uvfLRZ3P7PCFTVFkY26sKRRHJoMjdocwyfJowFvBq9ZjaokiEEybnC5YpF8U9cF5mx7gEfPKm6RuLhFRqo9cPUs",
  "key40": "4deJeXcPgcizdYCPDNN8pY6La72idqHsfRjHYg9dV9tuALYcxprD8LGyajjtFdwEdeStG8Q4kBJjPRWznH6TQfWZ"
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
