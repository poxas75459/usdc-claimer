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
    "62Xj8wyk3YbZC7H57STz6KALL6hwx2iU1jJDMTSQMm82guEfBr9sPbtiTwLtn8dXFfiYdggbUQcKWxv8MGF9NSxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1TB5Avw5XZKxtBK1NcR7QPQCrjYGgPKvucb3Kjz7GLS99GappoXteHenALLH3NQpwt6XWdj74TE4Y877HwZdta",
  "key1": "3qy41KbVsiGrmqG4X5GHw8QeJFvBBSAzwoPy74u6N4aU3XNGX4GJ2Pg93tP3zeLP7hNdUmwmLwq8N9CzfBs8cqNb",
  "key2": "3y5LZ9LPE8kM1SPsE8JCtd9LFcatimQuKmTvr2fr14WW2FdSycz6Ro2KhwYktJWHbKD1fxcBhUJzYbaa9YsfRWiE",
  "key3": "4fh6oLuRSuWQHM5wLH1bB5jXErtVGBbXCr5VWDc9JcPjnYPiXqK38iS7Y2LgXxgpvj7BR4i9nDj5mZt1EzSPGCUt",
  "key4": "2R2PPNPEJmAbHFk4iWsW6aR6So3LSnvCAJHqqCVPfw4pvDZjYb8Mw7dFnU5GDkAZMcRxqmNPPcKTj1HbMaTny7UF",
  "key5": "4QEELtZh3mKoAgedo91qc7hyKUVR88QdhKeLmMqtFrKgSeDXLmrzcEGAhYYE9Vmmn5VWNuK6gP2c5jfGqShLgnnE",
  "key6": "5Xzz5XxNWjPk8Ac75t9Ugzg31VHqRSnEYvQqPVV5Vfsf2BGWkQFNu2bvNKpBdKk2E3rEzZpW8Uh4TUERRgf9Mni6",
  "key7": "4C3MePuL6NAQiP1zCVcLr6faMKrnPupazZQPdCFh6i6KiQpKhizgMSw7t81GFEMP7ECXQhs47D2vtrF66TNTNuwv",
  "key8": "wKnVZn7HENUfd8TLH2WKiZqZgqCsqoa3JsbX6B6p9uTFGJfVL8ppSfbNJuCsawtJXK1DPy2iWPJoYLhoPpRNcpa",
  "key9": "4M9V8b4bGLmRJkKquYDmdXWWFN8LsvvXh8zWKaiNTres2vifawZgL6krbbiKgUb2aHKGJFkHMTtVAjyfGLqr8TWi",
  "key10": "4WDsz3gvvVDp2afaR3JNxowFB62oQgknWWXaAVNqmQycXTTwjRRPPxyZzzd8hAQCB7sosU8xCThf1SuEUNmfyB7P",
  "key11": "oiqf9iZcfWWaRqDyYey2kL67uGfsqq5mc9weZyU7KnsiAnB6ZwtsY4a5w4y1DWv6orexkN6pnbm1QfuygXn8GRh",
  "key12": "3DjR6tFhJU9kMgim1gCugcKf86TLFRb63QCpAzntyM6ChEAs1XdfTSy5bytvi4Z3dhrDeDsv1nZVwfmuVh6VzvSq",
  "key13": "2wqhak4jieYCnNaDxxuSwfSoXCqdMa4ZWk45hsegzRPJC9Xq81YXbucpRtbqWRFnxovqAfCagDrshBJkVJRvyxMf",
  "key14": "4fyCkLE7FZ2bRdugPiMxctihEZj3H42edMEE8oiEsfqXYWFh8WiaCAwshAEbsndZePrMi9VTwnZ2ELh6eacHhBWa",
  "key15": "55YPeZFBs4XHWizTb8GppHd1h65sG9YkkmFWaVHJtgWwdcy1smyriQKLmEJS8S5HepCuNFviW7uKBXcwFQUbEPJN",
  "key16": "2KNp5erxUJLrzNnT3pxg7YCEnSKKNdC6wD2fZXbZHWgAEFwtciC2Xj5uzq2rdSg3uniqvmUD3fWsSZRLDj2KkVfm",
  "key17": "3ec2dVCxxi5DWx9cedAkDmuLXGN5RNZE3n1reosNzdxr2eDmDjDv57rWtnrANVRU7S9w5jFh48fEY7vLf1foY4TM",
  "key18": "5cssbkyHVijWTB5aHYagX9qTJbV4GNnmV9ZstJG4L2Fs7rQuDbrtEg7zi6MPU7tLU1QgN47d2xxuWavr3eFpTeE8",
  "key19": "3vtMsyiorqYfjQktwH4pDXWkFrAPBonFDy7ncGWUds4TrTpCLY3oBeSHMvriDEzidGgga4kGMhfNbqLF8uuh7iRm",
  "key20": "5ry6KWg3PgGoCRMxWDC8c56T136JdD8qKcre2EcBN46XgNiKKBk974x3gvuxy5kmebVjnPP3g5vdi7jDcvBiom8B",
  "key21": "FrdxUSdP4oxf59gd53Q7CFnfY8gboEHtwbN7xnHmxoRwhTnzHntnAYZyVvXz17M78DGRVfwwaQJP4yBVFDqxx8m",
  "key22": "3zhqZKWzH6S2zMbBs7sU5h9k6fNQnfyD4Khy4UVZpPwgNA8vKL5DZEhrL7CBuA3V36tdA8JAGDD2gb3TohLnrn9A",
  "key23": "4TBFSBwcRUpPH5Q8L7DZGJeJ2ZGEcU6nrDPG6SMQjtZyZutcSrxHAMAc8Ax4TJAJtGEhGNkVHJwL3JEJEQ7TUxPF",
  "key24": "2suAbZX42o2AJKFnJ4THWVSYjFMq7yUZTZPw1HkPQXQHDRvWae7XaUiQBa6aMMkUu2ftw5erpQh1eKKMZ5XvMLLX",
  "key25": "28s9WCRrvM3PQLy5CPJ7ACvoT6Zu4i2JUmk6qsTVfmSnP4dx257yVKF1JZ5K9p85wwBfkbBNkacZQcUZFyjJZY53",
  "key26": "5jSx754wyBAdjJaQ6734fMMuWphzh8eyQfYMJqiMo2MhHY7a6tDd9RV65ThJ2qMAe2anDCNw5ReRqUvc911FvVFr",
  "key27": "4ZUciQTV79U11mkYD13euVYZMCbARqjZdkiKQuWAMEmv8CvpHgb2eFuqGbHM7AZAHmMgTTCijubxKXyJd7xDUKEc",
  "key28": "56gLksaHP7Y6XoQbjRQ9fFNNFK4cSBjTFfXVCH5MgTXByWfkvmVvJod8BX6RCUBUicGvMjjuUJhj3c2d6hcjXr4P",
  "key29": "2Td7i8rtDnNTcEgVyZoRKTHYx6XZxg2ECMCAZTzVUvrwfKXmb7DNnjgVKUydiewVpboVcWQ9KRjp3E2k3EEHWErs",
  "key30": "3xFSTTmXhj2YNmW672Cb53L3DpEHC8RnurKJCpcbR4jKyKqzZHkTVaiVURY4rQq8L3DFKvcP6DCMZ6cRiePmHp2s"
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
