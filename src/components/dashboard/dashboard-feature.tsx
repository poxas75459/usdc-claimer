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
    "UZwoVo7TfNgnTsnsmCd3vtXNMVeohbLFPrNYG9Yoiytp5kJj7TrapkfwSrkcnnwSLyVM947BaxnXgwxhoGCStMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSWMqyRyETtgHZZ9RzcLoNVNfXU8wsu2Q9MqEZFsAYJtqrfpoGG9Miwaxti4Jj4v56JxqHRjDPj7KyenNJqsp8b",
  "key1": "2dZDUcMC6dKQ6LmHKwuQPD4AgCvXxpG3B7AkarxHFuFAh1upz5gbHoGzkPt8S3nJAiYyBTryzumoTNVsm3c12Edz",
  "key2": "5RNoh5Nz79VfssWP1dy5gBEUG8k16Km6Gebeh4YZCTthy2wDPsaJ7WLvZfoVz5KYBFqkaCDJwTXmdkJcYDX3LDoS",
  "key3": "4EssvWG5nyGGdcZ9ygGiYPtzMHM4VqA3v61gvrKVk5E5BDtSHiVFWq4pLA9uZVHxpgXXGTTAfaAn2ZukDLsR9sUH",
  "key4": "2g8xw8W36Lz9BsDtu6w5qMCquq4tKKmw286CvVWjK9mL6xwWqpnHPxbu9DfmFbP4Rn4LCCpyse6j8n5MmRjtinAN",
  "key5": "3zBqW1m8LwaUM2ez1vGsWLinFpvt66Bf6js6MueawPUhWBQzWivikx9Z7Hwny1KczAF9r36uR5ckDq9YK8VG3qtB",
  "key6": "SCyF2MCyTrSstb8hktwCSivRJFreu36U5nEL4FsN5Kce5t7tmWdbAqarZtBqKHj7V26RoCYbx8y1AAvmXx89SvR",
  "key7": "34gxuEfbKuyFTC7iYFpnQSDWccSme8oagm7hr74zxLpffmajT2qMDDnUf6S5WgPZwgS37y9SBrLvLuoKtbMEGfdE",
  "key8": "5TXgJ3MyCRqyzbFjtzuTHBMZ6nmuMHFaMs5uRwoTjdiGo9bAukaP3dBpK7F8NrYhF4oDnLJ4sNMG8jjE4Gm3sbg9",
  "key9": "3FGEb7DVMoDhtaVBNdspVK6UCFadgNb9Bapa7XZLBULDPN29oaaWQcdtakni5aHGRKNea2Uzner7r2kuu4FnxTVG",
  "key10": "3BGu7ySZd17MXiURQ1vrfSPtD6K6PTYktacftcf6K4eDmYwV77zzvkvcMS9VDX1Ws3HJ3wVVWvR7Lo5NebZPUZyo",
  "key11": "4RK2rJdRVJJk4E58xHemC7G4wsHcEMcUpCVutXXngtH9vCCwbCYfb1W8hvYPTPSpuXY5aWnnpVrCPtB1atWqJJ8s",
  "key12": "3utGAQVqvyQW7CbH7wDaiUHrZd8JtvqGNAQnfCnEtayVPMEVnq3BhnKaNDhY7DxrQrPKKpoYDAEuQwGLSD4Qpc2L",
  "key13": "L6y4MPk4QNjwcp88Uwx5REDqidUEy2gZker3rs91AzhqKob5GMfd72USzoLYnbnvq9DPyBt3yUbadD2i9yY5NjN",
  "key14": "bqHACTFpPz95T7cSuyHb5iZ9bCzgWuVwydYsADS1j7bntHHFATMhsqQQGHaeeFSzCXmZY1kCBA8nFeFAeLdoc3Z",
  "key15": "GfNPRZus12ZcJxhSAQ3pbeabbyVLVY9VaLHa6G8Qxfd7gE8H8gJTvnrq5yCoz1dKL5VBdGhmrEaizsYEwgoKWqK",
  "key16": "3EFKzfRG9YVT4KDubCHNu5s5jpZqPjbeU1ngAL5DyBK5pd8CvnrJRz333ENGh2r78cAebDGEhvAgd6UxvP1ckdY7",
  "key17": "XnXBCn747QgHcPHf5ZbVebuKBbEjcgN6Yr92MxJzq9gJj6gB9xxuqFgpBTgnLEPzepWNZCWw6kJwiT6JG357Ztp",
  "key18": "5WMDjB8BTr7LkDD3c4qnz3H6GwaHXyJAZQsYAPcTaQfDEoP4YM6SMiCsR1TK24ptqay5p7Jf17bWDJhwG61W7qLT",
  "key19": "cjJtYqFU29gPSWMLzHGnk6Pkk57LXWH9Ve9zRgPhNcRnG1UkSvqALiV4Nzda5JVu6gxHsmratPAM3BYUkD6jJP4",
  "key20": "4iKovvmtAndqpdMe4C9hREE4o9oCKS5SGuHnn6eePjEcMYMdA9Xsisa5qT3DL2pC7gnSFSWcq1yrdT2bChMVnt9K",
  "key21": "5hPpyeGsaBP6KV1wTY7d3oSW9UU3Wg3mNyFE3MMP9eVDYzTVftuv1MUhc64yZDsGvE12TmTPpTwP9DZJrb8S9XuK",
  "key22": "tEQ1qimHGkNFSwLGYnUv71xroN5aSPQKVreMjELRDtVCVTvU6FyqXtH4HUCjVebucoMx6Z3xjGPV3spxZ6sT7Je",
  "key23": "3Ji6en6QehsA8szqjM5MLgQ2jmNLAYkYohNAxd3uQn8QpdknjBzVaHwWeksvnAi1X4LyfMsAqMwXRE6QDArUjbRY",
  "key24": "HzCpNRChZi4CvBGtvV9H7jRaKoEUKB8i7WheHZ5NF8EKxESvDD2FoJRSbhU9D4EZxVDbWBXVtVy28V3GwCuAiVr"
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
