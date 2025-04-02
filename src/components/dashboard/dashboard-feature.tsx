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
    "4uHsUSd6whdkkaeRW6f3DqtRkoSyxeYDa7roXg6KaRvphejrGE3x5z9GaEMSfXH89J3LCVbq64qoq3up2Ps3XBm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iPNCA9X6kfdvsfq3E7pAz9WuBbL6uXNkmP8YqU9EsiVq7GH24bCMVm31Ph4b3x5ZweLbRP1WzF85XHbExNJE2S",
  "key1": "5PaXoU1vkhg72Uv4GMr7RSkwikEvNVvnjXXogDXSzcj8q1PPBXdd3SZrxHffkEtif7MJbEypSrZWsLKjCkfTshjK",
  "key2": "4toYgUDJ5DMo58iReT1pYrniSuuE4oJGrwfL34xQmTHr8aqXJ6qHSkzHnpFpkXWQ8wpFwcZxrqioHCFQVS9TN17s",
  "key3": "2BGu8N2N1DpBDSYMob6sCvgq2NX4kcDWQ4Xhen1VbmfEQ3gDs6QfBYq1ospDgXGGLTNCSCaA6NBx9gvdXTvg7R5k",
  "key4": "eNQfNdDsLwBZLg3XXBSmHUBijgR2dVwAoH97ke6VrnLqbnb76KvbBW63HsbxD1mEHNQxX4zHNs6q6zK1zQiM1Pt",
  "key5": "pKzTSyG4d19qXrusiT6SBXHU7mG67JCz7Qes2m81VHysGj7axU4q4HfFwQwRECAvJtfK9uEDj9n8b8v9hc3gQTE",
  "key6": "5fpz9VqwiqJjSTiDmFEww8mFVztJgrar2grF4t6KFBGtwJsjGLgdsmGxkafFhfejp5Bo2j1gruVYVeVPYbP3DphN",
  "key7": "4xFdMLvxvfBuhsNvyaP3e9qbpkP1FcJS4UCdeGjXeGG2vWckZWbKESrHdTfWYq63JZfrsJGCFjLYic4rDcTiieMd",
  "key8": "VwxTLzraUrgVagaMhV6F1p6sWcqmZ5i39EVRKX4fNEKpomctmXBrijPLpgCW5dvJznFX7L4DsJVPiVDHhaxeHgx",
  "key9": "54cgUtWD4599KaUwhXhiPUwupTx4N8VcHVtZwqUFvRJBcJJocsouQDF3L1nw6SXCZUSz8QDF5eV1ftBGNQ6NJMyT",
  "key10": "4Beq4RneFFbGJGck9b4cdBo68oxJyad3vFjMkZdpdb7VT3QpRgmQB9GbPt8rafdroKjzi1nxH17aSQ2Pkim3xeDZ",
  "key11": "4K2jLmFaXwEn3Rf4NJ1WLZbmVnX9MQJLetdrg4iDcpigzB3392Wz8dBT41HLarsrf7JenpLVBDuhvgy7APhvm6Lp",
  "key12": "4ARMYTaGneiDyfk2vzTQMk9Detk1TrFK7LERTg1ptW9JLrYKFRZrh8YsuFGhoezZkjdfRHFXf6yzBVjRVDzSVc3X",
  "key13": "9EUqvHVvybkSpqK5MrDsP4YUhvnoxErYodfrchFxmt3w39p892MYXwxetBc9EY4qbrJWV6QhdUrftJtq6D9FfyS",
  "key14": "2qqmQCgZsFME6TY8K32JJbH2W9UDENniCnx3L9er3pMoPuEi8APLgNHrsbHaHZLfA9sUkzoF4MjADKewgkfLXZRW",
  "key15": "nRNuLR72KVBB2TXPa6NbP3ZBDcNzcDe4qZXU4Z2MM96YRmL9f4armAfJ6tNQpqYATKF2AnZetzhtWy3eaT8wCSv",
  "key16": "3b8aT4gDbP4nSQ1LpcTadPQeUBgfseoq3Vk8MBQkcJaTuo6H3SKsW8gYPpGTgfru5CFShoNAbmsMVjX7XZ1CUGXJ",
  "key17": "5Mq1d2phhfxQK6CnXe9HZqgUpPR7M8WstUfmLpjtKx2aSqEWSy6aD8Kap8oKgBh3vtpjAjfkJCFKRBdVLxvqCzib",
  "key18": "5UJ2jCZmMnzJGCyhSN6NVXK3ptX9cM16rbK3LgHDWS3v3GdJ4FLcWW6VgT5TtrgTQcbrm6q8dBRNnTaJh3iGVe6i",
  "key19": "ZJ9fKv8pjsLPcPBe4XpFH3yhFJM7wbgdJXrqJ7Ndu2UubpKukUmaorfuET2Uk6VphQV9vEf9CPT52dn8dXaoE3t",
  "key20": "5Z8w8HaVepFGRCJZXZL8j4UwsoVGywRF4iKM4YNNdHnGjVzpg3Eg8vMw6ycCXtgVhpt6posWwwaw2NEwtXoPMrFa",
  "key21": "2SNGj41388FiABQ8UdELuxLCgjdg2Y9aJY2yLFaZRFK3uYF7KUmR9EhhR21GdenZV3qGKNTnQyoSXwTGpxkbbTME",
  "key22": "3jpTqWD3BkLewJXtiQrr3ZcF9jtsYRB4pzaeApn2wyZKQYKzTg9picdnKe54zPjPzeRZRGEUqHNrf824FTGZZLf8",
  "key23": "agujUk9hD1Fkm38t7MNRfoaGTnN2FaVUQ5ghP6FtwPUrMkHh7hQvwt49mUxCXwcfFxfT97ELZAahf5s3rMcnvHA",
  "key24": "5vU38FtE4cbG8Pk7GLDuJpHzdoitiNRnFHryKruwWiRma7KuYVZdsbSpq431EZpcAGhrxUxY7inGdDyUfvieTKfv",
  "key25": "2La4uNZRrT8575W2hqcHnbNtRNqDYBH2YXffxYQik4v2tutsukVkSD4sBm3pzEvrv7sNAwbdGN6a31ARWhEJzaMX",
  "key26": "4U2DPMfG3s1v5KvPWUnnqRTstEPnviy5x9vfBwMtEdZWBqfH4MWFmiWffcQcwrh68TaDUHiUNoR3sRcE3vHuvud",
  "key27": "3eA7H4J9A92pSBicfUejbh2zq8KeGM8Egv1CkBn8nzUPw538s5zRLuRzxoUtXRRbuH7UiTFSTSuZ94m9CbC8xExJ",
  "key28": "5qqA7Gkdef7FYnFvzL5oYsywt2Zt71b66w24TWpZ5LKYxCMYZgxEViwjDs94Mv3EHoDw2ijxcMg891Yig4JV8XWT",
  "key29": "3iQunG5dQCcB7QKhvJ64cXEi3hLG3vur2V9Awz9zS2sk8qiWZfQZwF3pCGCmJ9wrskneNSWAWUexUAJLEsGNvcHF",
  "key30": "4w1mMi22giRmPeVS5RrxyuF9sgwpQi1NbrEHNTvgijanKzPMta62pAiNXYRBZxUMBToPixnkbXTmysa7htvkELyS",
  "key31": "5tgiF9pCYf47X7ere8yTeKZJEoTTs1sWnVzUmYdEgjnnJuwRKUh972HNZvLzgQZMAwVCKC4SfAvcJVc8MWXw7exr",
  "key32": "39PPRJWCW5XkJsJSnr55x9HehKHGVRctxnkuZaaxbEsNhrRhUFUBZwwWesUbgaUSLvsoatkNXDy2a4uGnnYWQQRk",
  "key33": "2biy2PLdRsG4zDZzenmW8vdeoVKRd5YVBvuTewnB2URLbUYggfmQ3T55WtukJrBuY1iY6tYPWC7AzScUXmmLcTne",
  "key34": "5CTnNcmdvgjRWzWJVDSxpagfzonv1tGAQfc1gh7xB4VdXsYhPDt635hPTid9cEYGWpQQDsc2GjQXdFS945QzHbHw",
  "key35": "4e58ZQ5sAK9jLE5exrVx9uJuCYuE2MYGMK85fYqgXFT6qF8rHakZ3pf9VETM2bUpYke527EsMH5yov9MsAdYg3pj",
  "key36": "2Kyce7eQUG79pBGrNLqYfWreuCqsPU4sRKymh9wuaKNEK4HPH6yUWVSsJbMi9AKNMB4UNeai9HnfxxgF6r1ZHn7E",
  "key37": "ktMLepMk6MNXwLmFr1H1qpkVjrEQZvwWVxhKcJv9V9YkRVQmLmGve7mRGGEujaUBmfypi7YhX42x3PphwyWVqKc",
  "key38": "3jVMWhrwSWYBis68nQuv5kCqJNEe2rGKEQri6fxRGmxL9igCHMmssw3bdWmphgFxSbZjkWAY455CaVDCHz2PBQjv",
  "key39": "4EfG4rJRjMcxp9JQPb6EiygeXwVkudjiSKDR91yAKLqv6NgMJis9UGwS9TmF4LpjBQv82gQKWZR8Lr7Xk8W8MDSC",
  "key40": "kzmfiY4inQX9SHao1vyCrju3wF9bYXijtYk1dVykUcjnNy4qmc9DQipFsA94t8vnskXxdUpsmBq5RaffF1wb8Mf",
  "key41": "cmNdsNWfrar4dQKLS7xXUjNNgmvz8u3zuDLKXdVpASyxnmbnKrVUZDeN7uvb3zbNE67YhDQ3qqANNjUdeEHhYvN"
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
