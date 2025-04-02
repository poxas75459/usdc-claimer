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
    "BxqzXTBCKdDkE9FAdzMcdhCUoF5b7oUZVBxVoePhRvEy4zTiJ76seJcr2pz1xirBv2V6QHrQPDj4fPRSS1ruZGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZBQPy2GvQ91kzihT2WXrknNu1n6U5PoG7PFvkpd1bDKHauvMWG3UkqphEbhe6FpnxRUiKUWuHzP8sRJa6hFdRv",
  "key1": "52Fw8N5VTF3x33c5XmiLwsrRziyyHTMVjMWzSzCBjMX8LQwRKAUuxfNa2AAszNgMk5BL4K9e4hS1qEvbiZcwM1PD",
  "key2": "5hoG2oanXUNF9HMSCcFef1rAfkSD37Nh5XJ4aGWsuRHm7UEDb3dwhxLrFFoUxGdGXGymttCJ21h3B9FjLmSsBHb7",
  "key3": "36ouFPs6W6SGcAD3LrEH5fvV4YitqFc34fX5bBFBhzVWMmLbTr1iKGgvb6tJZNahNdmDaRuAw6D2WNSUYSFiaDw",
  "key4": "4mBsr6rE12nRjQBGAGphuZBroZo8jmXShsoUAW4iiwvKjcxp9ep5VwYPjFMWCF7CxE2MpWXACk1o8DthMazZAvsJ",
  "key5": "3Wz9Kso74pmqUH1znz2iTu4NgJJLg4ou1DkU7eyFymLHSXy3yGVMsVYtB7NoPUXMtYXUEAmSACx4izWCwi2Q4yBG",
  "key6": "2K3jLHSy4EuxchxHuGJuczExX6VtduL15fFftt8xgYCpWb3pvGNZacR7BjQJi6b3kmhh5H722QG6YQhHrai4onWf",
  "key7": "3GWFwDSeajjdZTmTundSDd4S9VfV38enGBraB6iM1G5jToMvK9MD6evTxgty51RPBmJbNUPFquRcQKTnKUBuXVHy",
  "key8": "4B9nZyy6wgyMTys8gYbrjswYYLidcX51k3s8eKgZj3hkqWuWv1AoPTRArXCnkpSWbrrvir9ysXvGN3cchrNjPygD",
  "key9": "afS2KwumMbtm7avzAaan12UFZkUBFp3tM6VSGeqwRqMxnh444D3SkutDMgZyYuje7D8Ris5SDXe4oLJFnyBb2vh",
  "key10": "4NwiYT9j4vNVMC93f3xjCgEXaGaBBfShSqsHnAeUWnbDnxGSkfSYMzPurKiGux6fQNSdGk8c5fbuTETycnN4qet1",
  "key11": "xPF2CmapSNztppFQeqEJWXZjoDvD5xcDcTKgbHBtq64bRD2bBJX63FZkEDCMczcFFbiiABuipmh2PswWAmKiysG",
  "key12": "5DDQqQY3y4BNMqmR1VQKCGztYS7qHAXnZL3dB1kkrWYiu3sRjh2DenerR8jXhNkWVvpmVuhnbGJFoSvVDNa4MFCD",
  "key13": "4i8Cqh9zo58iKhFRwxKgJCx5ZN4D5iMKMJKM7onQ165PU6Mr1aMAJ3gRjCBDAxPsxptegb5NZDZiLTRfy6jsjxwa",
  "key14": "5L872pQBr7WQtNR42LayUSr63TjetmSyBfQKESiQDVwFJTWvvkBhVqpteDpaSXYzZbFpHXkV5Jw2ZwUZ7FFC8k7f",
  "key15": "CzBSKQyarqMA6Z1RbAv8chxafi7UcKRiqjeZjjRsVvW98N8Sjx7caHZT1ST2SkvtFaZYiiu7ueHsWWWY8qMP2BD",
  "key16": "e6kgynAD11Lihbb9ueY82jJ4fs9tkeeJ1uftFRAwE9Tyyg7m6mibYyDYWT4BivrJ6ZpmqFFbHBEpTCkZs5DAoM3",
  "key17": "4ph28vXXmBKoZWpJ5zyfSu9vpF2L1k7VYBazrNCfUhb2uR45naTyqWC9pJTF2catAHPbZcGyiTjK8AC64F4k6BR3",
  "key18": "3XfAzHo3hCoStXGq6TqdFTgfM7hkg3QwkBw24LBwCyebarkrUe9hN3iDSHga8FmDWw7RZifseHKbuDRDnMyx3xzC",
  "key19": "3S9JYj5oo5mAYiBsAwJofaLQRRmn5QtQeta7yRTT1175KJwQheSCucuq5KVnB4gWdg2J9tqdC2Cz6mpNXAH45yXu",
  "key20": "343UQUa4f1kYz74hrAWnGVTxUyYSkUdjkvzzs9FtAVDAxkJyLTnL5JZrhNMxFYSUKd7jfqdpTCv2PUNdtsSH2YEa",
  "key21": "2BrEAMdae1SoNDfLMk5BsMMEbQTid1oKREDV1d5p4bP8Yz27L1Zr6eKaxPXG32eL2g5P7edmC83cs8breWyxQrwb",
  "key22": "4136eVSqNGaLgaZMoGU1LJr8mX6cnBoCVbYKqphoRrK7ps1bf5DdjZQNNuR6oCjcYEFgA3RHwqbjLdifKwZYUvRB",
  "key23": "39n2YM7ZjLassnNoqc8eErnqTETzJPU7e7DB9USYY47CD66aguUvGLDSbJJZUCEU4yXphL6JZYTFauLg5LbZfm8d",
  "key24": "YsCF7pVyA8wKYLVMD5qdkdatZSxwxoQANvKKofLJmxGCCHKiTFNWwd7W8bMgZpE9sqxM45ZvkhWdaRoCUNMRUTj",
  "key25": "5aaMCxsknbnvwxhhUmTxQ2VSx2Z3z2b6qhsifqa7nWi2Q9urGmorp2mZzY4axLR5EymbjKKXcBdC24KqgqomZQrt",
  "key26": "24XiAfhvLWdWQisKhbma22joWNfJ7UYdKBsv5GcKRrsuCxDScgoFp5HtZ8GqJ3VgdzCWvmaW43uv8TZsLdmnZM6W",
  "key27": "2C9xQokCa6a8m9yssSxXBF9CvzJ6KWyW5WZB67xzrFdR5iXJmTTp5jK1BEKDyYZt6zXVXSUgKtm3ry9dZXSiceHz",
  "key28": "51XVyWk9T4PLCj9ksMTqhqVfNCwuGWqVHxRf7ToNZabbn8avVA4GcyazHuVn3md2gqGPcLyWGjiXVsx6WtC2ifL1",
  "key29": "YLQFcLfFNN2Cu9V5gaDSAih5vekqAfQi1NKuNUP49cbeCuVKMQVqU8pUFQNVDS9r2qHmV3TWoeADSjWupz3EQef",
  "key30": "4eGmapYSvYx4Sz2n2z8zwqpFU4ZG23W4Ek9hA8eNuqRuBX8vbsszPD4WxgSNuNupuEVTHrWDDm6JayZRsuptg5x4",
  "key31": "3pZL4ZsfpmeJPsNjmpjzHx5t64y8uDjjgJ5KKLGSrpaAJKrVPP7vsbWEQz1f1HTD9h8erKXFioDvXgVSZWn21bv3",
  "key32": "2ygUuHzsToPCR17pe3KSrA8zoHy5cqXDbrdYfRP9CGEmtTxyReXjgSTUtqedoLGt2TNRibsirsAmgjGvuH5snvcE",
  "key33": "4nRun5YXrMbvtRcaFXaHVyQ6jqUuspuBvm5azzQTWbsaxtTWN31Mnnoj9GokE6CeJ6L2FJQgeRwdP9oKM7bKVTak"
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
