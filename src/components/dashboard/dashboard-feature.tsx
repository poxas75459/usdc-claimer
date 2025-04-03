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
    "362HPZAVuxwZFgTX5Lk1ftnqKLGPAPNfZY9jwQiYV2kaVKChXz8Pty3kn1oa5Esck4r6xTsVxLj5szrM12YbmawQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1tkCfK9AmvM1PNp6xb3fjAT6iZpZ8myApENhSeCMA5gJt5mDy3kFubC9WY3cs8xtQdwVsAJdGRQsbZRwP8yHSu",
  "key1": "o8faD9KirExkQWxkYpaFVMzFrPnFMeZV92F6BYJmewLHV1nrvaTJHMozeVkTVBYBkNdjkPobjeJJWm8CayHW4f3",
  "key2": "3fp94S3ebuESEzREYLYWdt6yMas8CJbfRXj52Go57nqg8zmtz3kFZsMCJj8WdnpEvhuYnCXJqbzaxLbe3vSKE1Ms",
  "key3": "2J1PK9djrNJ2YbB6Efr7rAUHbxTY6JqNUr6K1ZKAAvC6NWN8wT2pwhf3HLTcn8phdAFwVnUTNmtBDLaAdZdnZPJW",
  "key4": "N2yZuLWNDgkAwuCXdWBCNTMruNs1gjAtn4a5jeYjf3GnB5Goq4Xo6iaXrY5S3ncK8YFYua2AdwQkg9DygbU3z4W",
  "key5": "2SGxK2GzeoRHThuxy1N7e6azHTVgxGMG2cwKvW2W1utW2sjVQZzXrCSFBptb4k88LHDHfjUbmq3TPQ1Uc1R1etkE",
  "key6": "3i3TzMjAur3SPxVia95xRnW5V18qgpnzfY1bGBmYb3UXrSAK1NFdMiKQtfewB9HGjG1izJLt71giKu8sjU24Qsht",
  "key7": "5mTx8hnwawxu3kSiBCSjqKDV44uhVjVpYKtMmz3Sh3SfHPwhYzvf731pCtSQKxcM28qkhxnZafh2umYLUrY2JgcJ",
  "key8": "3Uc9SHaktSs2kB9WeGkXpx2EzkXPyMfdv16kPNs6BhEX3ZQ31a3gzheJCqr1B9igxftmDXK6DccWUtYte7F7bGim",
  "key9": "4oyvnh2fqVvunsbEhDLVMp9sqmzihTVvtLqYJMe8C5rbLPJ7Fy3zM8MjZEfeFp5WhivuYuWDCrzXnSfEn3iok3k9",
  "key10": "54G2VDL29a3RQNnpQwfwWQ2eJRQUMKExb199mFmzeDarWgeEQbnYzFD2igGjBcGAspkbaGXAK4D9K5crBHF9jV8Y",
  "key11": "2PxTqLiCoWkeSAtHSWbnFpynxTnhvWGH9kzWB7c6szYRWsTDPvgPii8kpM2UA7VmnEd1CA59GCi5wuaiPKKsDbFi",
  "key12": "2JmP6fDMJEU8okXWCX9j3mQfLADMaPbj3HBp6EkwLT1vP7YVnLiG8A678kUy9SDFhKgJdK6GDa2epZnZrCT7Y67S",
  "key13": "3HEFCs9wEw8nNFENPJEtZxyTzf8iwxuhhNamqTSKNA184vQUgMzRKU7J8GyCGciizGy66YNDE5QLthJgu28wua9c",
  "key14": "2nhmxhn7tFR8xAqE7itKNm2e61RkMPCE5JY6fMnnXzTiosPWpD5LhvbbPWdNKoGB9jkVUj69a7BMptqoinBu7V7Y",
  "key15": "fUD324g32F5KDRd1FioqPQq9DKDCCNwzoJoNGZ87FYY1DvBv1cz6CVqH45qdTnM1LfpYdzMnEPRFMuP8gvhjuyy",
  "key16": "4keQQ7Ww6mLPKeB4KRLZGwkqPHN5tipQ2cnAh8zNtHZC27tiyFHRfSkgPwyptKjgnWmrwd2CLjxNtNtoqonHMNRB",
  "key17": "4PJNthtVYukMDcmBksjkVyB8FkkaCXF914mYmziYesKvUQr3sAZeydkjdzq4VyqgpPgxMPpJ4xDMXgAfH2qRMNNA",
  "key18": "2LkJHnQm9EY7nVUAVEdGjaHFCsafZV91ng6c4e7oRxGRTLjtQwbb9CGTLfG2ENSQkKhauxRSsbMdcnNQfFsqdAw5",
  "key19": "4G854bNFZU1g7PQk5jEYj1nsKCgkDWCZmWLvumbbBru4KrRr7YWWAWqkqN4NM93v8BW8Kemvs636j7xXxnUdWNLs",
  "key20": "USSzi5Ao2u9x2HXvAfBQxbZ647k9fXJEH1Qy2uirTbHnhEGH38But5yY9Dbp53iPYTcSZYRdUU5estu1idbhwiH",
  "key21": "4UNuhTuYFmJxPNXPkSbz5DjVeuqZHznHPYSDDgX7HbQtjMwAGWwuo9bA5HXyE7vGUGeZgDQMhSc5QPtt9wNeeTud",
  "key22": "5sLZu2jghwdA9kWy8HLrRb3cbwEG1V2kBFphh9kNt5RUbFYt1GZsjgWk8rZiKseWGCVLqk5CFL3VQHkqKVseEfJo",
  "key23": "MvEyYiYU9EkCFdiZCwxWsxRTXnoSWeGFEjXkcF8BmzSAVMZFCvwQVbQ3sN3t3NHAioJ33XWRvVnpExmfL8N3LLP",
  "key24": "5D2AmF9Gi66bJLbEJ6bRSbjXSaq3wkL9DJUafJ7ayqGHfKdHTWbcwpGBm14CgvXuuTqhBn5o9zSreDfXEo7iZXCA",
  "key25": "4Ejk4BLhzVuGGMk3eZVVNdkwicFiCgCftiqPy7qWC1oNc37QcFN41i3i6tWGUFceyMS2cMLYQHQpJG9tWHWQrZJj",
  "key26": "5Rcenhztc8tMkv8kHdeQsxjPY67gbHSSbmoc26dFVGL11PwAhcfUTcE3potfv7jmqGfWJSjMebps66emkavtVJmJ",
  "key27": "3n57RVRGCtvvCGUv1baCxSSdu3sZyXk1uJgTRi9Tqh1WgpeEpXbo7cz5KmHA9AJN1KiZi1K94E6PEb9pH1PWNdvQ",
  "key28": "zzfpY2nDPQewqMVUdrtJTGqq53AatvrPmTU28FoBrHhCE9GmrDr4LGb5uAo252UdH45ruHiJjFzjxVLcaN6SgTW"
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
