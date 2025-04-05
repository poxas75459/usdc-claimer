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
    "5qjUbNtm6iGsyTra6F8HmHUf3k4sf5EkUF8FZP1dgvSNu8LBusfNVhZ7wJESaufdKoxsGSSrq7yETnX7yJ9f8osM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MpcuYjqjfK9K3GAQKWz7jd5YRWwCZDBthhUCrLFHrvsP2ZMCSFWR2UYkiUNeeBhpZkqsTzGK1PXxHf9u2i9PB3",
  "key1": "4Sz8jvW7c6dcPRaiQ4vgQ5QW6ohmrdJURxXTn9tKTQaRBYRGpnxfUr6wdrZVuXR49UDZRvCbMRsWQkcaqS4E7kkr",
  "key2": "ycn2aLUtGkfMgBYZPQNCKi5eVt83ciUpKsfUeEg7gDtmSzGhSYuKhd6PnJtjwYK6Z1tasnroTNBhz3Yf8uBT3RW",
  "key3": "LVrck3NfHcniLQnsd8rKJxuMi9oaNdC8pUFrMVX6DuaSLqqneNBhPLfTdwnmutCv1nTN2XpNd6meLKF27tmFxkk",
  "key4": "5VUZg9G4XCvhwgPkMoWTtNxHLYTWZXZ9kF8ovX6V4MGN1wqppFGvDWaVdU3c9v116W8frwpv4Go3c2xxW2FumvFN",
  "key5": "239tqf1fX3jPSzaxGfgb9RHpGAD3od8fxuUU5sfqhsKL3Hm3Sk5XBgGL3Ej9RCQ3KSRTN17rCfRbHEj9qMQDw2Dm",
  "key6": "2MTyVA4VWJVu1THyZxL9GQtJefnbBqVg9hFhyXXqjoH6Lt1pHc1BLCdzBWoZ6VwjqiLqxSJraPtJ7XeuofSntA8Y",
  "key7": "2dn7yC4ZKqaV6prXU68jokbQpdnAski9XZps3PPAJ4aLhhGSgr6fgiJkaAYjvLFB44mpYjbJF2Ydh1n1T8A2vyp9",
  "key8": "3eHpV6ZJFtC3s1DmE6AJ7KwSfzvku5YHVz83YYz4a2akiURH1cfMFQdyzwuTdfXMpovz9Kfkp6yuBD4giGQDAdCv",
  "key9": "3AnuatdMKUj47q1KbcSzgHsgSJftajqyFsuMRMjFe8DDkXFwtevq9vwnChiMbT9xYN2YLX4qz7xim1SWaPhF8U6R",
  "key10": "4HLF7GQVds1GxkhFBmTz92ZbZD5hDJ8hQao6uS8F3u2BaRg3AQLUAshp9im4YAmmqy26zofmKTcXJzbpyZownmLw",
  "key11": "4NxrUqGZ4K8bcwmDqggtVvdD6vsqzQjq43LXXGEk9XPt4ooLRWfU45bkjoi1umAQsuwUbPtHCVp1j81boGCUrnyR",
  "key12": "VPPo9qtNDVZZagAJNPGcPa9riYdN2oNxfHDo7FF6SpnzH5m4DMTFFE37Eg9HSetJjTTN8p9JjK64ZEYnfmajvgr",
  "key13": "5TbvqYyHgpZR54DmGLZfzfE7fjxVV8NZcPuW175LFMXXmXZvb3PYTabSZCjUxBAro5Acf7Dk5K2qsikD4WomfuLa",
  "key14": "5R4aXzscVMGNdeJq1iUR7F4beebE2XbbFTweQ8HDPrSE2D9WXqiCC1PU6EXCjW36QrsLETNH2xeuvT89z8Dj66tJ",
  "key15": "v9hiZE9bvVj4zJd8U3SfF256wSJjKxyq3vj6psABoLo3TLE4gjUNSwarZN6To92CAtNY8MNXG3WJYBDRsPoH4EB",
  "key16": "dxyynWmFAjy2m7oKLHB6PwE4fDRNGZbj7EBbtnC8CzGtpZwHcnNNGS3sss5kg7UbgWFhqEZxHgWAyg9aufe4VFA",
  "key17": "5Hp73Mbc6K6E7ouzauF5pGeGufUnhovjNw8c4nJ5hUwLGcs2k7fEsSWvrRd8g6HGSRwXZnNK2wZELPDGNKD4zaUn",
  "key18": "syPkHknHZYeZMRtVhkECKD7kjYsuJ4MNcqKrMhXmphrcXU56iwnGKenjad28dhrmqnGFaWs6bB4FEKxfirc6cYJ",
  "key19": "5xERpXAqA6tMTxk4G9KREkw9XKxrrntHv7Gx5X4UnhtvEtAA3EL8TPvhMEUWdN9EekTjXK6mJoyE9udj6r3R89sU",
  "key20": "5vmksBKRWd31eUernd7zZNnjDNKrsWgLd73trmzUDXBnmkr7CWtGKLSwGDjWwhzDUXrSzYcehPN5rFNkYCh3k2CU",
  "key21": "29yaaPGvwBc4XkEeC9setD8UdxGL1DNPp5ftwM1WJ43YKquA4xyZ5WXyoJx6iW6jaAsHHB5b5WS4D5AdJcsWJo5u",
  "key22": "xxqNG1fghS1DN4zbuog3HtistwoBKes77DzRvYZwxRVa9A3zuKEhcfF6LprV7YrXErZ6wC7rGWKK7brzM4LuRE5",
  "key23": "2c5J9qate4EYS9a7ZTDjauTjnVodrHsoC12VAmtgt8g8WGbfQwa3oiRcvZufJkMwhGidSnmxbCNzq2LDLC55wRxq",
  "key24": "5Wr88iW8vYp7sW7Xh4rjoo73qssXC9gArAYFeRXRTbbLZUkYfE9PaAUKv3EvEjTgtJVgBn4Q1VJQrDp3Dx6Eoki3"
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
