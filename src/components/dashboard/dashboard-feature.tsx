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
    "2XP3eHB1ygPk2rn6cHzyYvJDU7KpiKgCLZzWHMo9goTyD8EGFXBVVxmPqgt3sF4qdGW9sb5cfQZ5A98k1VnNb2sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JzAQnBNFyTdFYBMnYo9q6YaetpQCiVyMfKUFV3YtV71J28zUVuwh5UnA7hqZmLWT4Enkj9PYZPwQAyuQ53g73YN",
  "key1": "5UNaFYmYdhe8D1pR6oA3sQVsjHiC93mTMqiPKk96unCmVKkKL1dM9nsdXS1a217zNS9UP7MTsTAaPAT9BhFLeSZu",
  "key2": "27z3PoWKEGWauYEGBLm147fSqHFoqAGU9onXPBdvTJa4dD2rfvhca4Qsc2DyKimVQriRyL6zc9WZNRUhWzNDB6Ac",
  "key3": "24BymHTjYANMuMa6vcvbH6W2wyWSzfnNPFZTrt8TQtGBv3QzFd3YFwruqiXHTTTqu4yNk68zZLiMogyeK3V28y8D",
  "key4": "55RokbyBdUCxV8WY7CdtXJ4UEWrDGchEKxEkXF1CVpGPfeeko8sS7uWFQiW9Sa3R6NopeJeQcwot2FUhbm38ScxM",
  "key5": "62dbJGbBdG3hAjrh6EteNvqhGPGVuAbjSJ3E8YtfoQaov1aXs8trUKYWiPe5ZwPUcpQxF6WPupMyrKscHLm8HHJH",
  "key6": "4E8nk8VX8gEDuTFn8oYqScmop1nqjYjcFY6P3hGLzTuQCZKKRpkPuodK1z9WnnqzPZc1XxUXLsnsdvcFyZfFLjUu",
  "key7": "2mBSmEApxmnEJXE7mV3Nzhfs54QDXuxy2SSaUcoy1NhQ8e5W4dM6DmUU7oapBDPa1Fgt96YoNML7BE2uRamWAktN",
  "key8": "2jGCxPjYnLb7ARg4CjGRmh4F1zgNo4w9i6UBn2RF9h3B2xryy1nu85DvYt5Uyy2fQn1i5QctMkKmVXzLqAyL1h8F",
  "key9": "J4gNUxyjUkok9u2RjWsNgHrVLGo1HiXkmZdZvZshsUDBKFf8nr1pQdEwCx8PoeqWdzKMh5Xdukzdturjpi7FgFv",
  "key10": "21M4PZgpEsXqxHoXPqfg5MXrZ98MZS6jkBqbrN6N1iYuEH2TREQMCnKXo1bKE2a1TupW1ECwFeV6eae7v6vGHC1k",
  "key11": "2dpBbYYoGUHC9aw6nZvm9iMwyHxeNC6Yr67gc7fX6kFCT4WQGeJ8Cii7DnQPJ8kwsTKrR7aqZpoF1YTQYDBZiKMn",
  "key12": "4HaZ8pGr454pNg9rdd9M4LDZVEF9AChgHrobBdG1i5PrcGiRWnvsBcvja5Z4s7nwTubGPcCpaCC5pNpzuRYmn3GW",
  "key13": "4crqjfvrVnxYYgfQp3beZAW9f3b6hm6DZrereetaBLZpCVJyMRRikTyZZ7KcpsF88bJVDg9h3PuUX8zM9zCL546u",
  "key14": "on2XiGnrjbgiig2c7NYbrgGN1rNMfDiiQWpGCZ9jRmDjfYvcPMRmbstoiJ2Dh9hMWHtUN3fsQiAiNPqyiwJ6g1m",
  "key15": "4Rn1MjW8JxM8GmmgqMh4KrxmcXQnpuUTp1fyieEhfnKSirTg3F5hBvnL7XiFP6Ykxy2BVbV7uiiDSMve45rs6ymA",
  "key16": "7SQRQ5cPjHSXurzTexZDsj6qjqewm55uZNhqfaHkEM2VcQdP78VjzcoXCrpitM4eX2GcN83WXxiTTGH2mqmfP7W",
  "key17": "51KzGXd2UQ35JqWhnHFUh9CChjyuqEmE5H4bDPB4vPehM6H76FSw7XSS5P5FFAZuWYs194FVpoFXh46tZoPJBmEF",
  "key18": "TciNEdpfpcv3Y4mtX89ZgzfKrJKtkm8fBnGjBPDsgjUBzMaH83KAtZKD2HrwFgHwTHA2L6cD1TzWjQXh2Kdc1Zs",
  "key19": "3pZi6LEDzuiBxT5XdyaRVBDXHN7ixTQeEQCkThE8xnxEHTvWL9wfAFgogAFtGDnQbB4DVfLGfZTkS8yps8MXSNVn",
  "key20": "3B2YhVWeXU5VAFojQhieEgnqKGNBmZHLLKaduquEbTsotS3YqzHtxSkuyvmTcPfG44kst5pfFFky3XPLh7NhHa4g",
  "key21": "2q6wBW6DQf2XzE9RGVAtpsJPvFErBX5qEn4xB8NuUiDPmiTLifDjbEHidiT1SZANyr35oj1VGw2DjBKtYJNckjqw",
  "key22": "UhAgDgQ8MBLVfGSq3JYrNLtzorNPNK5vrUqqanTTArnAnfcbRdqVbzUSHi9t4M7TPe97aD6hy8zCzz3xh5MXEPM",
  "key23": "4iLkfQWQkFue3P8fvMSUwfcyChQ6vjr8qY1qXapAzfvLDv2HvbxH2SoiWvK5FBs8dbeXLjyJo9xYd5SsSF6oF3b2",
  "key24": "3zouakddS4n5X8SLBuETxsrNnBedJXCvfReA5T5DHTJjtSbfuceTgxkz13ukV15mvgLkggUcxzzoLDtHT3BpdaYi",
  "key25": "SU8LGhV6AUCt83F7DXhwiYGwWe6z4T7Ruq4eX6VtFPi1aBbBAgVKyqpj5XaNkRDz6L1k9pXsf1BEn4a3PfRv1o8",
  "key26": "24rm5RhTuXHv3CsYKycHu8Q8sVepSjDn56ZXZbHTRZiqvLuKGeTg51juY53MNK1iDdVS9WzLGApF9btPVJGhKwQh",
  "key27": "5LSkU6bA1EwEtPT3Ah4sftf88XS6HcX3PFwwTrPEyNAHFyAhiEyu1AyQ17njmZfpoLyGT1XadpY18aAKYUh9V7kH",
  "key28": "ud8hsFZCXq1EYyjujPnwmQbpD6stxF8xLjNjGnfVk9tj4cvs1MUNqfZg9xbBPdnimhSfiD3g7mfCFJZFbBTJDc8",
  "key29": "4R5WobppDhcnF3jHUwReUxBwgZpnNPs3ZAnd2VyzM1mce2mmY6cN6tf9s82nbgxF8jVp1ancwGdzRJcHqwasTTgk",
  "key30": "4CrwM87Lip3MHcSfP21HRdE6jgZpWzSDh63yxhtBvk7RURQcB5r4wEa9qm7Zs2manBwqS6Zwm2MocaSdPrva2gRu",
  "key31": "8DfrzJ9V1R3DvQqau1VdTNdRdbJ9wC9vsepKtr1wBoXJcvqE2QW1ecLAbZ8DbeyMs8Kwsz8T5TLnK1MMWmbxHFq",
  "key32": "4sdaxusZ81re76Dh9kAhXHsYoTyX4WemeKTwKB9YkccaSXvZbpRaDFFKm4q1hCiwSYs6u2BifQcmJNmnkjrjWvDn",
  "key33": "5BwuKHC7g7qHCafpX39vk2tmdHyUfWRCP1EKYasyunRsY21zJfpz61JjzuVnHGmw1fCt3fEqhyMHQqzmVr6hLURu",
  "key34": "2Z5QPMfavfzFceA6jUKpVDsGqJE89jAgNyQWxw5QbN9CrbqwzZm5S4GTsQikKf6iTCmqYMtqyGAajeKFUCtUvEa3",
  "key35": "4iPEM75hYy8BDuYqhgKt7XGeDsXEAmkYpjApbsE9EwAcQKh1CbsfnWZPqM1Kh3TLfA1rcUjY2bz9wRkFbReQhiig",
  "key36": "452UGi8GU3C5B33AWStUqW5M8FVoxQm8VFTjAnM9MQLkAE9RdpJCrhjoufZecVwMKcGxtJp41isW2kGqTQWg3Kw3",
  "key37": "5uQk3TziTVDvjVeeTEZQ5A1g6vtBeMHeAU4cELraMZqHTh5XoSWVeTrLsUoPoj1LXJS4f6c5vTgLhZ98TbKdEscr",
  "key38": "3ffz3ZpcpkCd1dd7Mz6yY99gCbnymCPosBJCCuxA4zsQymYF1GUhzDH8qUqb5fQzwpVfWt4dfU9bZqmbwqPBXabC",
  "key39": "2eLDZXm6ZCuUSdrkWdW8VrNePBeYLgrFXdJHfhuQHM5PEXSdNDW1zJa4iMJZevZWv1CmZGZHKmXdeE9yKeoAq3K7",
  "key40": "3GESmAqKekM16Sv4sKC4jFVh4bAtW9CBrtKRzf5SV95rFyad1ohijv83msVC8ooVUty1k3x4Hf4xGhDyg7AfQ8qz",
  "key41": "3BBrZRo9D73e1fc3ZnEVhrcVfNFBEtbN2JjSrsyJDuYVUHWCibcFp43yjKXZ1Tg96b1EGhn95ozVZNBL6impVyXM",
  "key42": "4SezTHYSCrk4z95UZBN4C3VDNdfpN78uq9HaZhSoBGGU7hj8atH4C4czAhQa2heeuqSUw9XxjoRdhDztaU7qMhcu",
  "key43": "hXLaeSAZtafm2NB5hiH5kM2yjhp4Dkx8mAABuyqvTgP52jUSYj8woCNNE2Nn73xwTnbmGcWjPnVctXe9R5yfX5q",
  "key44": "2RWrphudNSPpUhsanwxsjKCTCQXjiiJ2T67AmwE9fcCysD9CsAhrV6zz8G382Yj6iigSZgjMoF9RsbF8rxRXkfcJ",
  "key45": "5X6kEzZupHVdwaTo2dUxzT8UZ8Rtg8CEMQcgT2kitzk4V73u64awe26bpXfeXd9dPCz2DB6AzFpKpEe3tBHy8LHJ",
  "key46": "5MEmfWqBr23KXUdMKLLMo1Cd2Eiw5ZATe2A62mRLkfw6kZPQ2LPW1LAjXVweDugMrRnvzQXYaNYYiWc3XP5Go558"
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
