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
    "2RbbrgyHU6XHz5qHeGbJakPSeP4DEoi4Hvd3ZzLoiHS3tLitX2H4nbmugCTyn3VsWVkkxHmHgDwiRhDS4rF8czxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egjb51LeRsKBkTTfTEncuX1TqEoqmX3ELD4SCZXjjHfZQXx7yP2wLqBMzpYwL6dKK9CDDN2iqdWY2xC1aWGjCrP",
  "key1": "4rsXCy9CWShRyHC513x4XqdeF3HRi7jfkTARWMUpEMiYNzgKNp6S5zQbtwui8gLTYsUr7EmBFWhfXfMxdgLJr9Dw",
  "key2": "335xwLTG873mhtkBm2Qai45bVbgZDgr9XYDMzpv9kzS1WhRd5UZ587nMvxku9iLSWJAhqWHHE36xwH8EGhxaght2",
  "key3": "3ymYPnSr6pojaH3PM7cSC9mFN6ahkuCKbnDqHbjP2ZeTCzoZ9osAAMBz4MMAUpFQD9AMsJ1iHgqf6tTf3xJ4Zuwk",
  "key4": "3rNjSdy1jo6o5aPutyoQah5wuKBaZSomRXW49T1NxFcnQBrxX2z3nN5nchXZ25miMppFE8dRKZcwM9WRtrqohLMF",
  "key5": "4CvJZbuwiMW3UuHfKzAko6Y3kXsy5yga5sdqXxFdTeb8WMs3j5uovo8pFwyjujDGU5Lz8exRkCHFgcTtKTpY9F9H",
  "key6": "2kD9FTP8fAdUtBJWmkDxApc3eK3ZjGeVe6FLW3s9jDRMFdAUHvLaAT8ZHFSDq7TtHQkewazy8xzzfy2pgkryabX1",
  "key7": "4Wcr8bks9BMk1GRCiogDSidwShwgD7uBAEK6doQU58SpLCasUL7QF1poGo8LqVhAnZRMfEANdw5t6fFDnxAVyVyi",
  "key8": "3KB3XRGZyPfahgf1dtdLkcGWc811K8QBJyepcXb3hfSYpRBAM6mu6JLqvxkPTZuo67bc1ao9ri3c7141qVwhzgbn",
  "key9": "4UrrcLDBtXApPa4rABwoaWPjW4zDvMjnNvPQ68os1gi4BFTZP9imdT8roUtjwGVkFkW5RdAMoosoXkrCpfUBJV16",
  "key10": "EuDnnf8CNARkhrxV68pvVYLuwWdyikJ5BpKgsRwkkFFYKj6hLqeCmjj5hZDmeABccpy8JWe6ACeqaKmQfKTLXM6",
  "key11": "3CJGQX9rTPna6Wtaw7AFWdAvLxtgQWzasWnmhTYmmqDt3JUgRJXvXpJmkKy3dmnjbh5LGPAvXfFtBK5rWXPud4sD",
  "key12": "5RedMLVqRLK1fQ8weMwd6PQamXUCbdvJRMRoZvK5iy8CqvJsssia3HRNdNfn3ajew2BY4ivcnpWQytyWwdmoy6GH",
  "key13": "5s7XBi6FknGmkRnLDT1ru9g7eHapUwvU6h9aE51qLAena6poA215fTC57P686Su7UMuJnyzAdoGABi2yfr7ewFQg",
  "key14": "2gAQhHKCp5aYFf1o3cr2VDPYHpWCWYCCm5G1qdo9P8iAo2RFi7ZzNeyjtq9PMZXEfZqJUoFdBJsbRfSKG62VtBt",
  "key15": "iyQUNakBoLPhBhcswYf3bp3RFHa5LA6oCWA6mapFuMCenEym1FnfbzJbiKyck9R2jKLtFvjhUiRyCKtovJqqMQe",
  "key16": "5ax5BbrNjyFFZq88N4bbo133ZhPcZU4SxKAA9MB94EvJ8VmKjSPr7j8VewaSPaNUk4P2Nj3xosCP1ipkAqKc9LAL",
  "key17": "habt3wCupaFHBDQhCr1SJ3CgbbbWnAEQamkw5MWJ5kYsrnA3MvEPQTePrPq8D4peBXK1KsVDsbcF5unaDoTaZc7",
  "key18": "4MAKqEDgqLbCynnZ2DpZ2gCkFEf1s1ZfEbRFUnicJNoHG6SoJuq5kAXsxyrxM6TGY6iDpoLASA1UC9QNyGK92J7n",
  "key19": "5SZuGgjcNMfXi6hHBc2YjapudkdMR89QDYa37LMJRfPc4mWTZiCBujzNEuLwKnveDyVGK7dQiyS7JaMdzxPut332",
  "key20": "3Jp1Vtyupdzk7FeBhk8hfrS6XqJtXeTaeYkw98QJAsguxDrnf14JdEGoadkvzaj4dfU9wMPjoxYFAv4BruLdtCuB",
  "key21": "T1f5WQ6htoCFzjZv7eP6523R3RvxZXNjmJCWdoE4om157i1SbSSCbFzxBsaoC29gPU7uKs9No1y9rE7VQ3LoQhC",
  "key22": "5soVpmaTEKHgFQJJEdMTW4kTJZ1T6H4x5icDERPvHwFNCr5pbUQyn9fiLF4jfnyLtzu1TAZZKZb2UqBgiaJX9hmh",
  "key23": "25UpgBPL3MLryoy25gHKFeCEXbeABLXhfyDG7Lx972FFnd46SmWwqZ2xdmfbMThjYojCNZofjsWjT2Ee594kWrk9",
  "key24": "648duuZkG3qmbJNxox5eU95mHkpedzp6AByJT3XoiMtS9XUYRFoM7C8sBezCjpsYunXzgt15uKUb6LBTbGBf7XkE",
  "key25": "4NRjRmWwsdVC23cBu3mg9REvTj6DucSUNNnAecbUwkD869YYzKntTsFA2pPRgXXYog4234dCNcnS4m2fpEzcKobs",
  "key26": "65yhkTQxY3eHEb82XRVJV1GvCKynC7zutUpgCLoxTk4wChnhxGn4kqqmayeC5PSADcsLH5VkueFe8A5zCeuVEk1R",
  "key27": "3JvbVbmPQxmkjEXjjdqbe3WYCaBtea6P5PMZBMPciHsfMUQs5oV6jmfut3dCkFvZd1TLae9WNPgTbyMyZME8xJ6o",
  "key28": "wsQ3a65WKkfBUiYVJQyumHc8cedpmzePMJvfn25zApPsn8bueUQizTog7TyN1DQCvA8qiKFoqJxY69UamVaYgvc",
  "key29": "4ZnNgyybbF4Lp5SBApDLLv5tTwyLBVnVuUANUhpNHe6z9s3RTYbFggZEn8btPxfVJqWk6Qv6MSQ7Cu43bnBEhQcv",
  "key30": "3en6LV1UuQs4ANFRUNCtAkhdnZZfwHnPjKgA1prDafiTCAHp3weXrbeN39SjvYaPwmoeCq6FRqnuWtduzQ4Dv4y1",
  "key31": "3tH5PavA8weFK6KGiHooMDJV8x35rxL6DfVF7Wph968buweEUkXuMd9qjVATW33QvBfW8oWqqo8eQq4DUdryoWyB",
  "key32": "5sz8WqdDr71UnhiGKKqpMgoZ1HkBq3ikZGwSjVnbJWa3JB57AiqhGrzm1wKGBRQwogt8vNfP89X4Wnt5fYNG9idV"
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
