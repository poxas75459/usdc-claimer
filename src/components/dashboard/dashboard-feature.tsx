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
    "3YUEh3EdS2AydGKpM95q8L74Gq8GHZmsMTZKdWyGJ5i3qd6K74XmBwmUx29LKZuSWMki7xWGnZ7hWzrvy4VGwFNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mj3rXd9uG9gCB8C5zbRqSVXLJAZ1p28PFFN86Z4K4aWbM4apn9vfDN8d79CnpAsbHNdiaJqXAAmwLhtRU3JENFm",
  "key1": "4r9w5m7DgkyNMJHH2QSbdESLss29ZvU44sknDvNWsWstt7SNXWVjN1hunqaKHWJtcYiWRT8EG6AXCqnRhdSDvinZ",
  "key2": "5DC2tHi4XNtL535VwMarZ4asTZjC8nvQaqxf5abjdTStNnzoqXgQhjepBVWiiDNXMT9QpzATHtuzThjWnvUyuJyv",
  "key3": "4AFyuHXUxSRCCdiA14GGFvR8MhrszKpPu8nnkPtPQJ4NWVR611jD6TmXhEzZVb4KLHAH3dW12maYzoxzRSUfwo8V",
  "key4": "3iaNXD9mLYC1vfZ1nTg3wM39K5qzJucJ7m92NkyWT4PQRnArXAoWmWZ7wizpn8XX2Fo6k7yRoJPpJDNEVXifRfoF",
  "key5": "2NvJNJcnb5rndtiPYcB5sKSnKzr3mxUiKrhMmsZYFoyhZizUmaMGAenRdP1KRwe93Yd3cHNcDe1R5xb7qsHm1f5N",
  "key6": "5djXnpedUQUT4fQTkG3meiQaxu4qihkoL78nHw6cRHss4UTeGbJ8mCEYRqr5dBPmXYSurZzWLHSkX5RyHDKwazPj",
  "key7": "3ba9sG8b5D2yWD4WrPmKB4Y1YNngq1TvwWjf8bZf4MEuG6uxcJ5UwwqyicztBL2Zn5Qhqyw6CZjTgBzVup7GP7aW",
  "key8": "5z9FuiA5Jj8PnkKHEyEbHHc3pWXA94Y2Xs8aMKhNs4sJ3oQs3GwozAygUaVnvhtwoAXdFz9daJB2mRWBDztJsfga",
  "key9": "4Gzg6PhMFXuQUNq5yFEq6ED4UVMiY2532xmHaxu6JKjZPTF3VFzkkZU6F7oDXCQET8zPqX36Datkfjn4uhLbfBoP",
  "key10": "3k3BiWxouiV24bnY4chw9wiEpUomBzNhDSWZoDXwXNBRC6JPy4hy8FUBVHKjHV6Mz1Ro7aErgFSxawFYvLts2yT",
  "key11": "5YpAhXsSsH3cbKQt7CM2rXccSqvjZnE5kb1cwQ9n3Hfh9ohZD2JWrA2pGBFL92S12QgVnnzN9zqzcdqDB1qnPLa7",
  "key12": "wbUg9kjYY2jDWUeMmSGnuEWUgAxkFaDmkJJAaDNi6sowcDEhW8YjSDQjCyqSnc6tLYeWnuM1p96wiB4FSCNX26r",
  "key13": "1QKXKiLQFTySXqZjs2yBukB1eDowH5gATxV5gUCuh3tnrzvqcXtXiiANHDsyGS1fveytJajazKncKfVB6HiLef2",
  "key14": "2UQytBALYktiqigdbom3BoAbx4e3zBqjT7Wf5du5FRXqvW34tf1XSfyqQ51bp2LLFCtCPmyLaU3nhE9vRP3DVcnu",
  "key15": "2ti382fvEf6RevkynhLHso2qAeHpShoQedvzhnpbmQToP5WFfwce78CLqchSQHm28agSHkgRMnJEsNaJDtV8TBFZ",
  "key16": "4b1PKMbAVyX7xoHW3oo7m9qnpcmcWiPoXaH6SBAr9hqmZZKpqW96a783pCyoxiERHhoHUqGGRSdK4kMCb4dnoWYQ",
  "key17": "66GdCaiaG1R4NDLYH9Dm7FAiERT7bZtfS5UM2BKmUzvWiSxJ48ap5wr88eU35c9NCVNz4xug2gnsikTwJUk7j2fs",
  "key18": "2ULCGD4FZ7KLnNznzYPipicHaaGn4emKDVzKMDqkbfSYnVVqfSXp8HWtwummcs9A9gxtmJnG3WNEBjaiZNTDWH2B",
  "key19": "53Qn5qYj8ESqXRJgfpMYiBKuBY6gdrRxZekYPFf3989UT3nrWSA79Cvf3voyhQhDtiPMZMSegEjMzMoMfDyZghJz",
  "key20": "2XX9DPyeWELnAYEiZLaTDEoA4MdyYSRn1ggkEXk2FiCcAWTdhWtJ2drKVmZcno2Bh8gW6WTaqayWxZoNjpkVq6ai",
  "key21": "5J8JpeqwGno8ykefGZ6LPCcYoSQStcZdJ32yoSpgAp2Thc3H5wZ98VittfCuYfqK2Ppe1vu2pHDdudLDYM3WiQbd",
  "key22": "3T9py4gTFoK1S8MXJwsdxXMqowcen3uqoWDHpYfd6EquXvZUpqVTNkLw9BjtCrh9wTi8a6qag7Up84YwyP5TV6MV",
  "key23": "4kBxD6XYSjwrj4jZFfEuFxpY1uzKJQ9aed5EqaSvQFAjmfREyLU4miPT4qEXVfVRQt86hjhY5pj7SdVntWfxNSJr",
  "key24": "2Uo9oUHtnELg56ag3VnZks3WrhtknmsAdqzBitJkgAayguPKRBpg24TeYdzsf5Zd86DcY5V5PSPSBqfm4QjdrWdf",
  "key25": "64e3rSbjzdy1tq3xgexpgvTkN5ztDCPfs2fW33aoV6XJ2o6n6xowTADzy8j9rBAabkGoDw5oSLVDaZYVRFQxjnij",
  "key26": "66FQJSbc18cVF5nGwYcqYFBuUu6H2it4QKJvBaPVvw5qcSiiLE1dureLf6JiGmN6A8V1ZsPZQizcrKc4sxvFoV4R",
  "key27": "5yTT6umLx2ukT1iWnbdAQLXb6PzQMvDz49YK42mR61fCCobcH6eK9ig1QLfzkc1eLAfHacuPNapDn6BWiBQhkzwH",
  "key28": "4WBgrvE9k85E6NdjHFt6p5HboxBTQkMpQAT3eAQRxKh1fNPWuxGY9pFhaDwaD8c2XDVxKzU1SnfnxvpgnZCpXtDF",
  "key29": "3XdbwEP9GY1zQZvt9LQoGYyFeK3yfjmA9HzQVnzDyF4FKgRDgwUYmqHwzDksA63d3yNbBC5zwdznib1AR1T1WQFG",
  "key30": "2u9EtagXiJ3eZynaHZbxtdsKyu3q6MbGas3gerPAa9CBdBs7WuTx6i6KkPa9HPcRbUGgfudfu8uV32gzsPegREW4",
  "key31": "62F13h6xhmqRRVWEV96qK59ayphqW2reXJ4zADs2skBfDRMZHb2jWdDJZFwkrDLbu6hSSgen5NLckbif2zN5yuQp",
  "key32": "3HQRTwGFJSmuKtc2zmADvyKijYZcreS4HrYgQRusAGmwqz9Xbi6B3YA3iBBdp4QL16ArPWps6cDe6swmx7Vd1Wf6",
  "key33": "5BvASGx5eTS1uhQsBJUwfQe8UWgDhyiyVXV4gV1jiD5MFj9um8dscvu743upheKJtrH2JeX6vNHK9ujjcjubc9qV",
  "key34": "4vap2YuMby79ezxA1BS1AexTpfnovUSTJPvSmwTYnHrYNWFoPEUeb7MMBYbesTCxvoc6vNy1JVqDcocM1x8f1Uq4",
  "key35": "2e2oTHdYSDUPEfGEzhgZtZYZeZ7BYuHRnu4DE2JXiiJKxfGx8cawuWia5TChMExrAbyMjPYAaKAzctbrFAhf71a2",
  "key36": "52Q975dQPYnFJbMgQ3btQPu3ZHcYssiaVLFU1H9kcb9cLXX1JuhhVmEvGV5VM6p9kCiJcWy8gfhVK5jRga6r4Mr",
  "key37": "69V6iihc1VKHjCBcsUxnKh18ygvtVAHP3JGy3hjk4peU64J5rkRGmePHzJqQdH9f5UDPMhzaP9bJYLEa9EKWpu3",
  "key38": "5WuUQQ8b4mALEsRzm21Z5ExNUHPueYQSrFgM8HjivUYyik9KXTk2zwHPUWeW6j2LVPHP32yi5zcUpZBDExf1No4M"
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
