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
    "4WoksNr98ZwvccZE7nVZtkev3qC5UXsRNEBSwxm4DfJES9GLvnPGsEAZmWSqDhTKhod5P3zxU3g3QziAoNuvWuyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wG62SG4RnUYybB4f2hzLgxBV7EQ4ku113mJUbQ5zqCRDXYoESJShj8jBYhPbmDoxoABff5RWNZNeBBQPj6wpMe",
  "key1": "3W2rku3aTg65gLtJk8LAQcLqLHPqrP1s4to7BEeGT7vDRwq6mGnHpMAfPUokKWvkrQ1v7MoR1LfWsT5rucicetB6",
  "key2": "4p6XDrL959gMsMQEzZU82Fwad396wz5JZbebmuw97Higoy6H8AVnur1rhDK7K54GZnXe878LA7JsCGA6GugD17gR",
  "key3": "5i6wUUmAPo7WKy1qvnRiqaaob9dccGB5woRh2JSkPoii5B4dhGHPdhN6uW4ExXkhcqFe65Cr4Jed1FLncGTGkL7m",
  "key4": "3SLsk4Q9vjZBXYp6pHW5VmuQT15TihD2riU2jkZAG4C3SioctBc8FBizCRZCaz1wFDxugD6zbtbVJmrEaj6oYHuG",
  "key5": "3UbmQcBJtosRcqA6Yr5WsEMmBoK7Vn2MH2Kk9Q9XbEY22JhohzQW4jfeYi7HajmQBSQY3BechLE6VWmtNkGSx1RR",
  "key6": "3DKmfCoutXwWNrCgNQn9bvNmf85zysHAR3Cxi8wZRyNi2RXr9ymhrxh1qSYqvQkKyNTLAWoo9z7vWmRGxsxm2LPJ",
  "key7": "4D2AfRXe7GgEb4oYcGv9A2ZM4xBnw1W2ArqUuSMXR2jx7BtGbNvjJP8K4vEQaHgxrBvkzYjrnDh1yKuhEDyPMn1Q",
  "key8": "4jsCL75gayP75ndXPy7HLVnhPrPJrLGHwc7zVz3yr6Z9ciXfUuphDmn6h7zzpd4qzSJ9y4YEhb6yQ1nGSnN92bUF",
  "key9": "4NCcutF4SVyy4qTSoU7aWEhSJeMh49DJbDXgVLpkgqSv463fi8V5pspuG9Q7AVdumyXsQk2fAZ6SAPDZgfrQ7b6W",
  "key10": "638QME3w5xacALVHsoqZmUucg4PBVsYXNHbUP1X2s6i49rGQw2i5mXU98u8v1Wj5XxrSLz2YSQShnN6xPRGYCsC9",
  "key11": "3vmnWHwMyuisczLphjZQGgkzVMFnHJicFhvKFAWfPf926Z1Fr9PNR93roQsqJzh2ULFDUEogRbiyfqd4j7krZKz7",
  "key12": "hSUwmUCm1Swdi5PZ87JrXMLBZX8pAMfytwHb3thgvEaXiWv2yYfp8AJ1jB6k24jNHcBXFdcCu2TfUar4cezfNRh",
  "key13": "4tijb8CfrjyZJjEaf1nXKZRyYMZ7rWqySeahwPSKVtsyVuP7pKFqFB27wpDVwxJtHKmcfdb9pqA9xmPJkddxqjCR",
  "key14": "5cRhnnzKPL3KSzyWmH9LDJqYwmvi4Scg22467U4mVzGTkfyQv6XS82irE2ad68D6vV8Xxk74YXYHopPFBrL8Qmkt",
  "key15": "3xfaUMSjv8Xkt5ywCgeTJMG2x2C3GAstnwfuQwsbJyMCEZtkNWoQrAiJdrn25Kd9GyhFzSmhLxmdvQx6V1N4yp6P",
  "key16": "2XMXWL4NRJiZ8VjFmKA18RLUVMi1GEX89Lr8rX6vRjnQxJxP4vpYDZ9XdP5NzAdrox5TZpgotsDv8DVyrmt414Vy",
  "key17": "MfLLg2R33fLeurwM9Qwm3WpBBgRYyojHW7SSpFecGF5i24r9h5zP5UEJ6XnZupMFyQXX3KRb6HUHoHzYQV4etV1",
  "key18": "bLbs3CyU9G8bnBzPiQ31KYB3nT2QcTh9SyfPLLckXznNRTejAfTRnJxoMiZBzHotveV7G6oogSBo2EWNgctX2rg",
  "key19": "3GHSaXJwpgpB4dPVgr9Pe6fqaj5orrc8rwc2ZMhu9bTXNQstQ8RcPYmMQ471h9seJxuGv6kdwgqZNCAZ8LEagV3F",
  "key20": "4UqjZYR4YoXzWgjfMW3LJVEWjcX4wD1QnHAVGTPr8QrAmHnDj2VZRbpyeazYVg2ceNYAEy7oosbb5a63BE6yTL5h",
  "key21": "481TuhjawyYVYkoxDZ4DNGxG3CtDjLf9YntkxznQXLMmZCXjQKkZ7pZ4ve8igfPpyMx3d3QZ2xgTU1kiWiut3Cc6",
  "key22": "2xDnKPaVFXoUxdPsSdceqV69UouboXVcsT2tBLoiNpus5vmGA17o1vhvQDPJzewfccheg4nFBnJ3Ssy24in3w43Z",
  "key23": "5to1TU5DSJx8bPFzaL2segQq37zoqBRvd3FQSSBRtyrP6ooaZMN2x8ux8bfe5XCY53x7A88D6j9rujviU4BdfnUE",
  "key24": "G9bPrnwaJxQnw9g6qQMpDjxzgFQSr3pBC1zLyqLAxdNBVk5uuf77a27pDFxkqSLZhe4txyjB8FXst7asAk7kw34",
  "key25": "FmmLBFP8HaVSTfvio9Bd7nZbx1NnZbz7VS3qae9zcDKruDYueWQQJybX2n6dEHfP7FeeuhbpKWUc2VXveSM2uSn",
  "key26": "2S4S6H96wXqpbyhxcr43k4VWv8h1F8M6viwu94VBMD6JYDsqXdLNCetHk84iBmBEtStYhT5u2fk2Awqeq2MVkGNX",
  "key27": "41xE8xVWq59Wm111Xnhiwa2S4khP3phgmfejvVLzGwBKSQguiu23de5mxx99UApGxKkjPYpRVWhq35Qrpq8Q7VSw",
  "key28": "3pzcSNLpbAeXVGTwYiUhEBLKfNTVhKLcfw3KNvexepZNDQtmzEbvjt7ajo4zms4UnSZuQwzM4jvRhmDoubTpxT5g",
  "key29": "5kCLSRYHHvnoR36Fxqkwk3fszfHyBGk62ZTNMQAF8QL4cLrTCDvCUDi9wJmpjWvHzeGSbBbmmACckhAxoxzkvAxH",
  "key30": "56di42VWUqyyocDn81YAKimAw5pDNE2gddCdHxMp15Febc4JTFFsXinz3xTFpZYN8LsfhgHdwKWUNXsUezG5PkkZ"
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
