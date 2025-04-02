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
    "2adPvsXaZzsJvDQyppeGfASNzhjZTU8e4WRehnWT9hsvq4xhH4b491Z5vpoVj1jV2jRFwPnGcQnoifxRaXxVz9Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyVVQGPqR94d2y3WeXkGazCiCYHYVF2iGUJbVj7UyG2AxW37e4JfUAuGYLBg2DisWgHA66UBLCRAw7zhN27WddZ",
  "key1": "3zpBcqkBQebPqCrgJwSEiJABBjrs1PTodY8utALMkHhRqS6wjLzBgoFvU4G14PAEVHh8fQfKEJh45M9cvqavwGNE",
  "key2": "4etEM5Vh6t2AYZHSK8N2PvDQXSuFSm4DLzfhS87RERJaeeL4za2X7W98j4YcEhHBMRPt68FkwBpaaqDJYtucdV4t",
  "key3": "5zWw7a4nXV47Vb99dmifkpfLMLgaDPAzkNXduTJVkmfY7HSufQkTZpWWPPGnKy9LbNz51tswa5T3HPr8bE6ebH9b",
  "key4": "426A7KJoCkqiMGU1hFEujkw4gjE7Cdf2E5Sf97yCaEozyVVPtjMYxwLeTZsz5dVRExpMG7g87LykB7zKE5dTEA5y",
  "key5": "2v5zGvvdzcoWbYwfBWSHHzkdgdF71EjPMabYu1ZT1mYLwh6GfWu3AE3Gs6sp48BioRW9tG8hWZizpoGHktXAqg9i",
  "key6": "21AanM27Eq9CJm72hDJJ4yrCWUmH7DxASRFSjv5DYLHBrBqHKSzV5P7Y6AvP1koLjJBDJ77kGGHgA4b65vMKVfcv",
  "key7": "5veYo6Rd19L8eWdwgTokm6eh639fk31tErTq1G5wmG6e4ftXa1vh6AjjFoNEC9ppMDWAKL3sWA4pRXZpCNnA1F4X",
  "key8": "tT11oWP5hWjqjLDUCfHd6agRDQV18kM87BBScgH5urpoi4Xig8wuAS2thXxL8tTVu1gUj7PSGuj582BJpnKiXdy",
  "key9": "4w2HjGekxixz7svD6wffXoBW5UBprwH9Hd7HEmsC6xNTnHdRSXSmLELCH7rJjuAsjowWc8gZFcL81bxTa5H8UDsw",
  "key10": "4rsHBmpw9RMgHBgv8MxSiGRgF8YPpV8XKXCZbQPZk5yZG9zXLxfQQKCRhf2Rx9vUjp78U5q5QGL5iUGJKptMhUe1",
  "key11": "5utUf28fnF3QrkHqkSebPDDfteHgjVew8HzjDvSPHfT7gs3LfeCrxhQnhr3VAZD5rN6ygKwyY5UBEp6hVj2VXDyk",
  "key12": "2fracNLg5RbtzqPKmF6qxBXGVbZx8DVTRBZv27sxhFdnvdGj4AsiCbysXWKDEToqZZv3jWsBKcxf2KeqUxS5B3F4",
  "key13": "4hXVE2RdXVrH5zVZovkH5aSPTbgd2RCobSnCp7PcKXb7B9sDPKWBxqrCHoPGJcad2xH8fRoRD6C6M5PjsbYDF9KG",
  "key14": "4HrLu16U7Q6qjiy9DUkCGYhnWArBZb99Bh3PBPqr86Jz35L3wLdbAjtr5LBMw7wFTkj7xyj1ic9TgRVTNzafcmmr",
  "key15": "4EQunx1UnGtKeMZpb3zUNDyNj3eevnHuU8ewFNpKcoDbBiRBdRNuEp6VJbLb2MkHGqb6kds9YgH4fFTbHuyReUGk",
  "key16": "3NFf5CLqqmUQkQgBAVgEWDgPtYY9ix1J4VXqWXxr72vJFWZHLxbYibp7R11gkPFTebsgrFVJ9s3mYiY8Ux8bjUTN",
  "key17": "3zJ4xRqZB8hEs6CdHfVUgsduiN4VfBrg1gEYoWN4BhYDZgbvWuqKgEigo2hDTsb93rpDBGKTWsVZoYJRhZgiRM5H",
  "key18": "41qY78AcG1dh6S6NSnHZa5sGzTYaJAVbz3CjvyCMp6h29ea6yGGQgZK1NnnfsCj9AXj8okw2JeRcD4gayH22fXQu",
  "key19": "3xc2KANB6CyPvQTq6WRwpYxRVQeUHCHg7FFhhAb4FyhMTajbDDgkUGK2N6ie1B6RLcBGEH4du8o6S2oRXRiRSRZ8",
  "key20": "4iML9Nm8UcVNFSPpUZ2u6zQ4yTVMPAX2PdkMiwRPDoX7b5EVk3EnakDGWysbj7RFKscQJ1eQ5hq29VwtSCrZGDhM",
  "key21": "cXC88ZfEY9kjQ5RRRYbVPF3mQeQZPmsFUFknky6ZChvY1ZAPi4bNUK4yis9Vt6e5KELuxZGhHC72K9ww1pt1Lwg",
  "key22": "2cMcHKkwAouVnvVQ2WbfTsexk8r6XhNvs3StK7hgVJWNmZrWX5K1kq9vPQA7hkSWJYkkmbzgiGvYKKijer7xGoTE",
  "key23": "87zzNJ3g4mmucapMJiYiqn16vWQcAdi18wuEDJJV5QtMrVq9bMGrvQJ65GH8xKym2isrQ7fFLTyYvmGPGKyGQKB",
  "key24": "VAxcAmmsLYMCzWTP94ZNgTxJsJsjp5WafEdrwjcEVnHfzAHeeGEY7PiGXFLsrJAseZfcE3qP8iauhVyTFc8PP4x",
  "key25": "2JvY3SfTyYsbXDuugrBAHCcKkRxHvp21uDnM37qGdoSAqJPri75uPM9EDtbrK9fyiqmLRkzbG7Lq2R3qaJ1soQPA",
  "key26": "5vfbkhiDrrKanV571K5HEUFa3h12AmivdcPG5fZW4Ra7pQR4YdntV4RKQ3DpB5PV1qfHxgnZr3Rh8CoaXdnvMgrw",
  "key27": "3SJvShcGVKQmQtaJCkgaN9hsXeKcyqEXXvQnEfQ7BA96UZScSUyGsCVCTAGyrr8KMEXRuataFst52fVGFLNNBK5a",
  "key28": "4nQBSvKQqQrguEcg3oA8uVEq9Dd1jrJABLvJKpndUbXsYerjpoN9MDmxdhgdQq9eU1Vt2RW5AgnrEtMNymWNJAkY",
  "key29": "3Yjvoeuw2WbDAdTefC2zS8gWSkj4TWXMFjPYbR3Dq5WmxNbHTM9MD2SRtuF5KhQ72BAwYDd4J77hF7LvdFBhv93N",
  "key30": "4bqhdD3BigjYjYnBS6DUuqcwwCjDcFRYHbrc9CnAnSCFvgoy4dgPHfrKm68u6kEGgfQwg4f3mGbHj3AqBn9u7YF9"
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
