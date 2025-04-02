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
    "66WwK79MiCY8ZMMVLgifhzH7Qu8pErChRcnYPUU8nwnety1qbUQKAKJ46S2WMFd1Sc2369KwNyZoast6aZnqtXQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiSFKSnuSENXDRE1vsXHrRrT2oCEqfd2EBfpSkEdfHMsn7BGcweX6re58T3kYQZNB8kJPhhecEVURx1ZfQHgcnc",
  "key1": "5NRhnf5trFXXn33TxGsDkGvBc7TkTYbn7KV61mp2f28f9GZWGrrVGFcynuaw3JDWGv7awC2gjRbbqvScNibrQ5Ms",
  "key2": "4CkWNXhMozF4ktxa8wVWp8fNs4rnN7Ri5Az1P2yuFxyohEaVRPJKLi2nCm3kPQf714LT5CEKrm8cjUE15h1XAQui",
  "key3": "k2iiNZregEnMfJDXZcMY5PjxQG4oE5VqyUzbFLZT12HtenU8zTrbwQErDycD61zZuaRYPBALPmYpJNyYAceWVbC",
  "key4": "4oPYZksHKD18sbsxqBy3rqgGaHD89JQqWRgScL11ziD4gL4sxzJpLPFYGG5AM779dKcks83CWHK17jJQ7utBLNin",
  "key5": "4GJZ7i7NBa33a4P7cnUoW6GkhspNomAspJ7HJY7KLXxxg5VPCFNpnZ1fE3C5LWrMouTgMhXv3zn61YD14YqcjqCq",
  "key6": "5qr75s8A7TBJ4CKLiC9Zw8y8NtGsm2Qjb5EZvWCt39wQzAi3Uegwek94oMdWmiVe23CuCtDPCqryaGKs8HArCs7m",
  "key7": "2N71N7S6qRDEQnZJm5RwB3Tt5iELRCtkEcR4DKTKuXwLbBMWNmHtP9uE63f1bXv5k8JzJDspmK5J8XisC8ACgYBv",
  "key8": "3x1JzUjF4uVczxezXcWFy9UV8fg4cSEatCTEqmBjCrPBcdgLU1bPwHCSttmqKDr4G4GEKLkVwmhfgG5gsbFy9STj",
  "key9": "5UgXvtMkFjrWFzeMWeE9uvLFTGiEA5CAopg5FAiXX4GU75h191zX972WCAgkpgi8X8pmirPqDv3UmhwddwMcUDtf",
  "key10": "5FPXSa5bT4wL1yQca7MbXoy54RbW7qM1W3w2wEowGBvTjkeyVwuejG6m2D8rcHowsrBjzCRzVMBpapcWhfdrtWNi",
  "key11": "2Nf3Y8u1EJh1NJen1447U2HQKhP1wuxdnPddLVFx7PPuiNkTxpoz1AHEcgdGdAKpsJhqS6owWcCxYK2H4CXYbqt1",
  "key12": "2GVpGFMxH4DMurHp6BwXhSHcZ8PuMin6QM3fivF8N9wxcRJJMSdkWFsKWfTv2PZajMZubjP6bHr4GHNnMHdPDJsK",
  "key13": "9RMPhgzMgqHS5eRZ6zhiqeQMqWF5GiZ5wLkhwzL9hC3nrjeAnTXtp7rjAGniCyjjoEuX3iT2VBa24wiR7XZGfbs",
  "key14": "owsBiDPt6YdPEA5L4dR7UJQ8LcEbYQzYdnnBxVgsMYjTPDxsmcAbS7ihQ6Zoh2wAJu6bMtT9Yj6zR4XJ9VN4bWz",
  "key15": "5P8eyBKj5dtAbEGxtCu9PPhXMXwCbdrXrGEwWyY2wa7Jo1xhqmSpWh7VXLgxKKLem4kh7r5n42URNE7QnkRBbeKg",
  "key16": "3pnNw9CtMDMHLX8MuB8vCG65mB2VZaKzdBy4dHjjdBsf35tjg1m1cLBrRMRRFdPoNUwPzwcHX7kht3DHdjYnzotw",
  "key17": "3U4hQZGa9EVeV3nd8pAaFnpYwuZ8TwNKSXLpyKZhX1iZEkKiy2LsjRWUhr5zLbVnSWWTuMjrFrS1SWYroyrEVQTi",
  "key18": "QPqY5ZGrGGv9ena9x4b9diDZ9hznRiubAHEd3UAvarKjYmj7EEZoDQA1hnGm4vYY6Z33pttnj5qGHEH3njvC7Rn",
  "key19": "5BAdfBMNuWsVkH2uTELAW9SFheKNuDvSFJRKXxrY9r3eQPqR9fHAe8uXsPVAnPfMiGvpt4vrK88ciPCWG6WciJDT",
  "key20": "2tmwMW3pEEhpUiSvAWhzBJPkjfcMgmg3iRmtcyujSKZb9A9Usb1C5xKJj16dno7zDKyZNf1zxTwib3CwxnzfeFMP",
  "key21": "4cw8ES5bK2nDuuxTRL2dXbXpuwRiP8C9MHZVmuWa38KS7anegsv8Bx2mtrtn8AbR4t11CvgDba29NZrh3C6PvB3A",
  "key22": "49UbZHcBFLniowdwbheZvZ6LsnhAoLPRbmNWX2rbuFXSPvXjjHgTHs9YmB76mCk5a2WxWqsno39z6b3HWNW6Fi5h",
  "key23": "4Uoa9KCKprXZcDskY4Cxt5rZLMJu3kpshEyE2k4TxCMoG4mjK6ikdzQGETbWdpdWsqW517XoMfk4d3REVeL79hgv",
  "key24": "4pbik1sCcwBJSZgJGW2VAru6WXn6Mk1cuh9TV6o8nBUKU3JVWpS9C31Cmjyk6tNKNaEJ7coFFbf8bZubxdcKPntu",
  "key25": "3hqYQzhAuU6uViRFWzDardjMtDHD3iW9tFgYNkGnMbbuMQPas4P9HYPF7furxsBFG4AYkWCxidzQD3x8UvurAL5g",
  "key26": "9rDaF5Ji1QCeYSnv1R5sUQvc1jWsjM1VjHv9jaeMT85wbGmcRtiDRrP4kMjoY9yVsvVm19SdzQQ2jcbYZrQMxbh",
  "key27": "3Gv5WMGQv6czsaRTzZSqQzAxW8CzCcmqUKZw9wEMZGbNynkskHzptVm2h4mECGpBcwShqJCQJtvG77wjSbM9nxdq",
  "key28": "2sXB9fXPEw4pKZfQQvwmcmWWD82Mff8BGPs87MKJskLsHZvsfG1NdA7EnwetF5UcYTHDGfdj372F4LZqT7GiSoQM",
  "key29": "25BMDBXk6Dho39CEsTY3wyufBmUSUZU3QUvAkTY6RK9v1KCcWJZVoWHEViykK7yqAN8XbXhYSMxUCvMrwRLJdJzK",
  "key30": "5hCfzMPDtL8SHTF2cYAyp31FwRMFETbbHqTAfuD5rxAjWYdJGKSPx3Xoa4mKsMa7eEgsmz4eW4VCkT7FiDTqA2vx",
  "key31": "2rLYb6JU2TJ88AQNc4KpbKy4TUx3edkSmphe4HEd924rHu1qisJhDciNKkRaTsFzGENeHQqSCCdAKx5heSUKmszE",
  "key32": "1jqx7eFbLphfNzRS6Djsbw2foWSQR3Z1QaSaYFMshGLsP4qhKzozdYJYoFAKqTEfRawgVHPkiGjFbCKVHSh6Aum",
  "key33": "3uQpq9hzsfpAfUaXSfo9TGvvLQBi8PcBMMJZtHSSN52CNLic81ooKHGqjBwD3ndR4fdxLmBmCezRRWC1VH7TnhfB"
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
