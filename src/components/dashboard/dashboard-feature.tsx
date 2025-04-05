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
    "28FYHQpqk97korjnPD3Gzb1TVczmBuSRMXjuVNz71FYewJUdef4HroZJuLHQ8KTc3TG9DP8LFQR93JMWQHVMBZBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUJTRBibgiFCcqRoPQUxFLqZdhcJcYJseZ6MxhTUgbsvAV7MWs4Er5siAakU7ehQse86axisaSdBiBsAgYzxz6G",
  "key1": "3EK4oZtiRVRmYQNJJNMcdwMvXFarGiXmJbhkSJDeNQx4shv9SQih1jtY1Khx3ymRs5fnDnq7ZENsUxxE5ZeFjWDH",
  "key2": "2JM1Z6a5JoFzgegT58yeXcu6deKfSmh4Fh6YBH1t4F39vhuWQrHHpURiPcp3vZbRntWCUuBkGhZLzbCYq7fexm8o",
  "key3": "4rso13Q7ntYeJBnXdwhtE72CVm4TK4mwoM69MP1ShHG87eTbxYeH2SdWSeCN5Z68RERt18YrxQxCC5qF2z5n6T6Z",
  "key4": "ntwNYP29nPDwAqFPiqaizwEJ78ZJKEBimbMGUf7JeuHqhXWjAx9647X4wZcNnStaF8FidTPwg6smBeg5MZwbWbM",
  "key5": "5EW7Dh9nFj4yZCoUYyeKv5mXntRBpck2N4bLvbZz6VN4AqntHm1uXkavzCzK8jPYtQfccGgSk4rgP6EFt6Ahgogn",
  "key6": "2ULBYXo6JXPFKGRqiMkjgrFZYiPeTCjt4b5HZNTLgmqEUgMuCULDGJSoHHHxYLWK75McZhutKZ32GbusBhTy1zco",
  "key7": "3VouBAa5MuqPLH9s29UWwHfEofv7MyFSt6NLchJ9fEWr3uYUPzY2PzJQt7bQcRp7XdWFM7ViBXDgTKySaYffCfZr",
  "key8": "5bYexNYKmtHtqukeMri84FBVWNjFUHDGusRYDjU9SfJx8tXPCxLK8HFyHHSJrFHp3LQBFPuGwf4CQ3K1kyh7e5ea",
  "key9": "3qmGgoEjUqwc473hXFSw1zth5GTvYJuS6VVia33jur6anUyhkJJeo9de8DTF8FMxEpmShNv9FdfLFpq18rEjFDhu",
  "key10": "2RWSd7SC5xEjWAi2NmLcefSrsGWFckNV6xHFjnSngCwNNJyDd2mYvbFXgGdHVxYHKt5WJdNhmD49Anckg92wLJ7J",
  "key11": "JopW7xuFaWByjHF9oqNFtp4HKv5G68MvQJAAU7gx4rxWoVJJHMgzJxniouiCCMEw1ne1ZHVoM22DDguQY7RoQfe",
  "key12": "KsJiUSBKpEfw9VsrCGV5AN11ubTfZgDFmGRXYymJFcRQqjmqJZuKZHPUmqS3fomDunDRqNUVYVq8jbF3MhXPCDV",
  "key13": "3Y1oBDF6ZG29NVg8PXusm5emBMwmAyvnbJFCMh1bxycKq2F2qtpErriKZy2FCGct9sJgTXyPDGKo73GM5eu9KYJj",
  "key14": "44krB42wh636JszCEoj5pV3824GMt9yXZpx3w71w23kSMAx5XTQsYazyWa6NJGZGkegWeh84LVYD2iwSYcVhpsVV",
  "key15": "fv64qGopLkesVpU3gUvysr2yjgW8sPyVbb44BcRPokKQpHzG3aa4FPAPdBrRnFkyCW4h8ThBGtiZSCqwKumU4Ko",
  "key16": "3792SrQimRHL1otUNKuDyaYy5yAdLsZZdU1HFyKwesMZb294GBKramzPiMPH8QMUDKN4DtSSDQ19G3ajgd6QXtHb",
  "key17": "3eYva5v8T8c5RMy18Kv2Hb1ukMyKWatrJvmSAohhQ5RjV3s9aiEDntKRTXbDmSDAvrjWb6n4urbZGEFd1NFhKRq7",
  "key18": "s6VLcvwTQZGLpSYhthrqCqqT5dNtyjMRPPa7HpgZuFYe7KUVJ6HRT7H5Ufmf6jDdXKVx9XBF8Qw5baLmc7cxGAL",
  "key19": "4nav4aoyUqZL9eq8q5xLGaUfDdPDgYk9vF5DoWgrqa7Hpbm6qU9viadC5ZsaJ6zAYdm2Y4biL28YF6diJMcteKsn",
  "key20": "4nVpfYx5oEm7xEJfA6afx3bsWCYNmxP3C5kNUjnr2rEY9H3TxfrwqxsrA5nsvDp8D8wsWNbkpqc1Lsw7rRxZfAXc",
  "key21": "EuGdNnoCzWmj2xWpwDwUq6fxdRMR3GPXox3w3dBnvmcddNAqHEtXPKE4PH3zVjGWumer1LBrgjD1pjn53kFDpSB",
  "key22": "V1WcLDWtq9V8z2hvD45V6UwnofnWYoF3Dwi2iczZXvuKrU8xhKE8t2CbLrvL3JgR2AKji1TosLnwq59tSJ4QwVV",
  "key23": "5ocEB1GBjMNAyfZoEXcTXrcgfJG3RgdUDFaCovEUmzVT2ZyQB6nTrR8B4NpwE4XYbQPEuvbcjEYGzt9fRYVUJeLN",
  "key24": "3vhzGDpiC8RauerPR4emdRKnsbMkWmmJg7TaM9me426kqqhEjqgNGcrrTzCrRNb4jbrHWCAftQZbbnTpaCbbheuk",
  "key25": "37yM5RQcU3RMT9JAQW7DbiJty6FwiXxbJsQszghXhGcpSURREGDfHk8CaAgtd7aYnmPBhMDgX6Ye1UCTebHRczaw",
  "key26": "57xLxc4JjVA21yizX8CKhUWhbfXpAFYP7GSSJ57TVjMsVrXDahfmYc3FujRBu8RTxPFERqNNjRj67dLA5kk1sy3N",
  "key27": "4SURkVRUHGvmMHnCCiqDu5KLu8RzM2LNh8jHjNYKqHRNAkL3L8RwsP2zTN2vgvfzGK8AD8t3n28Z7m9gQGAUZmGd",
  "key28": "4jr6U7XVpkBLUdQdUW25P24t3xjQkWR3HKnY8obEdKEv8ox63kmTsTVWcTwSbZd7TXhZyYKTxoxW3NNMLiHpymgk"
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
