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
    "3K9YGDoLDzdW5BiZBjaCAEmxBmPYatDrR8GhVBfgs2oP4pZUSP86Xpom7DpUgNNibLZYMaBQMB47yeq3YBYfU32x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YohSMUJLX3P8iAxH7YKPZfra4ixFT824ry6CBH3ASbt6RL6KtpAxsycuw2Wap9sismBMdFts1B6MLYV5xDcL8Xw",
  "key1": "5t2yVUBuRa9VvSECMywdo5WzwxLwZfV44CMeFdKDJn4DFzwLtGHZJujMzGWYdqzEYRNwuJPmBeAsJGwqy3oWYS53",
  "key2": "46Q6WuQMdqydm8FMi7DYFyaPnsfeVVk66pqeJdHrqKcsPaaz2ZG9qDmszrgaWpzNCzEXb6Ds7qV6T6TwenGb7aNB",
  "key3": "3nozqwXt3PX7FxhP9XFfiEc2CjhB2TeiqB5N3w2oC3NrCEaUYeeqmW4LaWnxBNfon6VcW2mgn4oEmSVpuM75YLfP",
  "key4": "NPDvAeujhYw6bFySQfUibmK7uNWrmcdgMwqhdyaRQnV7tBgXRc7EDMEAcLvPQatpNaTcSXW4Fx8XVHVrimfHaiH",
  "key5": "3M9p8pHTqgpnKVX8m7msN5kDg7bcb27V2AG65K9YcyYAarihLMTwXoWKCzbQ8ytjK5MU9ksYoLhXp9dWQBJgxkKx",
  "key6": "5xzupr4ianggnCQooPDYZbDz2jqDKXVS3mHwyr3uwjZQaBEvNy3DWFrDsoH9pTMA6KfFc2NuAwmXo6RYpkQr5Bkp",
  "key7": "4p8oBQhzSJdpaZSjk2yNA4E75R3vym16oK3rG9KJbHxa8da7mMSRPZt8xgEtiGJ9JsodBxszwh7m4dNR1dwfvz2u",
  "key8": "5rxp5pLyhpAV1NMdqeBv4CPsXhLibyaErJo37CkmXzvkr2G7rHbnWQRhiNgfqbd3SFi9ydYDgtebcnGR3GYEJkhZ",
  "key9": "3R2XBVt6CeYSA8Mai1qimV2YHtNVT15qXth9HvajQLgTS9vfLNoWZeTqu2Wnd9FzbuKecM6qckdxAaDmuP8vf3vb",
  "key10": "kvtcBkWBeVzWzNtJ6dEoSNUfx7FidfisPHFWNkirvvkLePV6AkNrRmj1M2GN9St17YxC5kSQ5UM9TsWQucJMfCz",
  "key11": "48J5Ka7sQTqeSsaLvVgsdEsya3mbCCkiAW1kqgMdK6HM2Yehpv6GN7njC7Mn6wjV4mT1DP6VsAmLe6U9iC7ZUtWE",
  "key12": "25WNygqkvwTrHKU4sVUm92VKxqRw9AxXsoAGX46J7ga3pnMQdxkUt9cVVstMy3zvpLAqLUyb48aftQPGzzWHcG8o",
  "key13": "4hoZLC2DwEpG4kyPrADjt6qTmYZRmRGrFW4biN7BRiUzhjDQgEzhh5MJ31z69zvRJ7ttocKzhsDihRr6doJQb7yd",
  "key14": "5EQ48DqGwtNJpYx9YeYTov3tnRL7xbXkXq7XiD5tz4hGiYoBWbmqpbZABYLjc56hn5ffh6bs74JFu5WZ6NHo8RVX",
  "key15": "3qZeiQBedM4iUSVfa7Mur3oHETtrM4mmH6avPXELzF1UKk9y9AUV83zc17SuT7cMUekE4D5dgi4oeFZZ3LCaR8pi",
  "key16": "3T891YQ69qo3vupmyAhxHydxfx2yQyD7uQvE6SJdGrbzmsVrk3NuLVS19cZaaGY8aa6rpo61VHLaSuWKcg6F83hc",
  "key17": "4n6RK6ak5FS122mbMmKcAi85e3PSCsW45N2eEWbG78UtVooXrsmp4NEr62ausntiKFM4XMP4NLvTKNh1GBcFsTBx",
  "key18": "2swoHathu9pkiKvwmUFLBzJji9M96fzyN2JASdhifUXiKKpEJ23gYFJB2z2SUAKq5NeSnoHV1qGrwqsXBB2ZkUbJ",
  "key19": "2C9JaGKNrq8pKHNktdq2per4x9RdRyBzYFK3fDq136WX2STbwgstGTbCeSaiBmtjMGLvy2azaHyEu7WX4tWtq2Up",
  "key20": "3cErPiCUoodMboTqjoQYe9nxxvwe59qxDB74MkGFy3ABUdesTXZYrGwxJNKy5HhXkyKYTaBQqi82L8M1PypScjdQ",
  "key21": "65M6T9s4FkvtYqL3A3aLwBvQkUdTShkru9wh8bTQRhUZ6fmKogyUAaBq19ArpqjQbpWztobW9C7JQbuRtHvh3F5L",
  "key22": "5RvUZRYEt7kKTMkxrgfUf5THCdhVWkm3J533CKEqsyMAk4YAGSbzo73gStiiHFN9Ydf6nDXxGPdcNdGXR8uaR672",
  "key23": "4tBbwv741NGvuJhrV7nPf6ruM1sT9SYJAVmXNxFysc9aaduqbg5PZyWZM3o9RedCS8YXypZRuvvXsKwQszxGKyUr",
  "key24": "3u6RyV9etDfSnwb7r9uBrxgB6etTfBtF4LkLV1vurb3ThYAUkpwpbmqzb3EPQkxRfwDs6JM3itz61AFnJpUgHM8V",
  "key25": "2UNWbdupxBbrc6mLzPSEPa8r9cqpiQyhKpa6fKxhu3bxL3UGdw9XrtMtJ5KjogAeTni9DTsaNiiw19yFtmLSsJhz",
  "key26": "43PWvpauKrD5aGJj96nr8qFYyichBhnmffQsRcrCtqtd8mHgbE7ja6oKU6YhPnZfwLQH1Cvirw2S7BNUmwaHupQt",
  "key27": "3kDtXAWYmgAgUmvewxa12ztbMFgGUPk6MU7qzUX3jtShDNeSy9U4Dz32eEQ9vEVB9yvSbQ2KMfdizFtF1C63ygg9",
  "key28": "mX8eGHGe9bXPxg3CFq6SHCMZ29oPX6bR5mGzbn2QpTk1fX85GUdF6L7T3cwBBUpdkMYYVM2xHBtx8vAhQhPYYdd",
  "key29": "KYjD1NBJnU35XTNfYRrqGY66kEmNun4Q91T24HCpnnePwZhHBPJYDRLJwUSRuhcUP9jHPo3yp8rFTz9sYGwf29B",
  "key30": "5rRSEZw29RpVc272Ls9Poq6L315BETWC536R4is2qpae3sx6nzKF82MFNZJJKAYHana5DEtp9aCH862pJmqmXi3o",
  "key31": "4ud1vMf3dE6Su9R31KveJcL6C4MDUC1qNBDtUzxaVEzjpxyoRfDRyFDmTE6RPAkE4yQ7SnvRkzE48q1FGgCANgU7"
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
