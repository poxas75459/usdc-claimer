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
    "q9CAnU5W2h3ERnLeZVaJDmutC1vUJ4kU1gEEDhS92DFPPofRzys8yTaa6jBrKqdHAbRkE5MQuUPxu9TdTKtk251"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58aRfneb3Wzioo4W1KtYtfBMacFv63U71XB1ePPmwR1oCPeF7DkfDmJbaPw3szbpfzavXWKzTwEChajszH53FmpW",
  "key1": "4p23SZtY7wixoGHHPpjcSsS5sYGieeWAnykJcsLqb9m6jthkTLF8QYjxeCpxHYvrug29PQgGqrWqwLfZnkEiDoZg",
  "key2": "2BktC7MhAEK94GunkTs1qbp3sWSaKNbfxBbog8JxpsUJkXgarH7yyvGRSLRWoonwo9pzELRDCdC8xLcgTFVVsWgU",
  "key3": "QhLVvvjpYeMjQ371S3dMfPwH9ZgoEJuX3mcDKMepZtTYMECsh1YorBvLYKuTvoq2uskuxz3NMCDMyRGU6NK1bab",
  "key4": "2AfeHpYmyNRCwc36Rne9F2q77ZGcpBPxBngZN6jTMPt3dVGpzC5DWA7NDDk5sJbxEvXsLFRSyJ61PSgzDADjDhWc",
  "key5": "2GPsqU1ShD4gmFMHu2Lef2DWPsfm3EcMTUAZZpwxUQbz9hnibUjffCbAj4CVvHVVdH39jLK3eP3KhstQo4u5px6a",
  "key6": "5H71ypm2WV226omJzE3eeAz7oCt7sXSgxDTivWztTfAtGpuWqKZpN815AYeVGLwTvCurQhLyBj4FHGdwAoE59pRN",
  "key7": "8paXtfz1cZ9EYKx36asutDcU8ZSBTScMGD7GPx4pP4CUK9GLuBLFpyyV8Ys6d3AP3v41zURsh6u9pVgUSqhiB39",
  "key8": "39qHZxBbdvKHWzznfNFRT5y5nRdcn8BXmUoNSsfDeyTXjBruP1WzriTGArqsHQ6QSiDjeZwbQ8rXfjYZaPY9vEVR",
  "key9": "61R5VhdDm9rH5TTZS8ePxtos3oNJQU9gPbCV8HicJHP6Y1EwBQVh7EwmdWNHKh6h9XK4PX9gzeDhF7bikmDN6gNF",
  "key10": "2GfWSz6d77cBAXPwx5bRqwkKE4ANp1Fp8RW2DVPWZcgBkjof9SNHsN8inwtfS6qfVqWTbEVfvMN3aZbWPvRsqibN",
  "key11": "2afHCx3uQnqbgkxgz7BhWw5xY97kzDjHaa2d6ViKkmvSYhio21GVr5JYYtE5scc8ociSRQoHADdacYn9c1C7dTuV",
  "key12": "4aErYrApo77RdfHJi9gBiwBa9rAoDnETRS56fm9owPwc6a8YaD1hPxYFbK6Y5Tj57ewZhj2MqzKuxMg17cUdoo9U",
  "key13": "32LuJRwLTaXYrJ8zLg7Aa2K5ajroWXRRpExRE8tMn1Sv9ben6NqVVFkz1oJ85CXyA3oLsm9YWq8sA7yQZQRvTCw9",
  "key14": "4KyF3AVbvXRHJSokBUWMe44Zm5a1scwJd4kZuarbCSk2LpHbqnjPQXsNy2ZKAnqGPemzuQimLCqeRa1w5HPq62ne",
  "key15": "4vaKafHw54Ja4seucYp5Z7PfrxHFcFx119QCmZhkLVnt5z8TnT4zNhEzsgi3tKsjTuN1FV3JyQJGTrUa9h1a8PQs",
  "key16": "MwEeFw1BCjiZjWgTrS4oFiACwRrmLh4gy5JAKQh97hdvLXqGeeZQymEA4RhZMJJQY7dLkESZLz64CPFCkEgic7s",
  "key17": "46h6fEvBYbJSgcARUjnbppLxUcin17JDya4aWPrKKWWcT5vZ9gYgCheDhR9R424F9um81CUBR8Q3ejVgu1MpGrLH",
  "key18": "5aQ3tAa7eCgSdquJrTKfEmvdfhkEH97QpaMEy1XedGNKBchAgE2ufhe7fAs3jSsqx2FV9gU4ee6AJgaS5Umb61Ef",
  "key19": "2QUiVav15sphVzrgnbdRycsbhiqqkx2rkD8n2WCnjyFoFRw2cU75jjakth2Xf3uRx5Lc9rCgVnJYsZrpmNtWJtZx",
  "key20": "5UHrjvFskzXD4HWvSR7dzaBYBUi5riUDZLMocE8z9iuKqxC3VtVribhsMe7ZiixFUZjWtBxriEKMF7V8qy79mFMf",
  "key21": "3apC2TsfcL53D6Sz8QiShLJnEHirNGX2qGizNVEMvjKH4KcKfqwyhC3Y25PLSN8pJMKVSaVv3ykgKVXzmfiA2nMt",
  "key22": "4MgF6EYDgRT6o5fLnZ9ehm22gGh3E1Dpvpq8QQCYLgaGgUBKnZXgMMfKhpNx2A9ajpNeeWpEnToCZgVaUNMU66v",
  "key23": "3LPnmJ27WALwvafF5hkw8ZTQZhMnjP9cEAyn9n52fahmvhEMwhbXwG4utgimm3tdhg2CTv7mq2KwKSxXv3gZzxSQ",
  "key24": "4hqTEeCpuriVHvkHWqFPUsTEV1gZLn3aj1BcQCmmgJhYuixMhkob8MtWFHRAr7fT7PbFsGGvqBehb4axHwyo2cqi",
  "key25": "53DQ1E1ATTJ1fh7jjLnzvbYXoihq9xng1bKjLLT2pcbELPsEktqFH8rG6GEKuw1nzEipCcQr1yXm9CbA6bEiTWFd",
  "key26": "4nzYjFmB78yw5E1mD5QQn6GyN116gCa85zyQ8ZSkkS1TeTyFdfUksJyoow92hBcpdVApuJk3uoNYdGtvxGfmuovx"
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
