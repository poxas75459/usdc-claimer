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
    "2EbUaHNLEBJwEhteJH89KjaKPSgpfXxv4GjnKpxArMqLCyzHnZY79b2LnnNaQJuK7w3PNJVTwpsSy6TawAefnDoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNKt73H2659CtQZoiAMbbV1D8stBGHG59DPs8UNe2sHQYERnNdzsgueTCjmAnadLpRRtK2E12fBMejNP4E2ZckB",
  "key1": "za7C8TLF1FzeQFyQWtceotjL5CyjJWzFXZ9bdXPW48WanWGNZJdB87yJc8vioEKmcffmK69iPkqrdF2DVhGPJvb",
  "key2": "3f3EQ1iqzfZqhoredPRU9EU3qUyHfYyzsisBqVUdcd2sYTDJBmVYcdnemyqTWNA1wchbcLLf6hVMzj46GbZRnWkf",
  "key3": "28jmJBdfz5RFKXjq1vx5P4BkwXaFC6csh86NnqHHoqononroBbffdCr2wAWHyYd1AnBwkvYK7Y5ScZcWrmFeM8Xe",
  "key4": "4oDUH9yPk3jRx4sYbDnHHsP93Gf9VGpXeVrbCpUnd3aSS4Cii4TynTtE4rNdmBECnaz1DmPc9xqaKyuRDv65Fu93",
  "key5": "3hAUiwTQBo8iqjhUfK3uq2BrDSKEGVwy1JvakSUvq7LUNjT5Hjrmy2vZ9Bh432jNjD1577q34jvPjneSwuCrset6",
  "key6": "4HdQfwzNV2f2jJoqe8VLp4U8RPRjMqmZXzsumKKMbEdW2diDR7ajuT3v2wUV4KhisBCDHLTDvkxJGQAsER4tvVUn",
  "key7": "2GGw3RNptzysSRHiHTmQpCS6KsyX5aCCDyFMD9Winx3zXJMxLP123XhgY281JXaKjA7e17uB5fNiwvghaJV1UBZX",
  "key8": "zLoPF9b2UCsXoNEXXkQrD85J4aExvQau5bSintAqGjJe8qdo3H65Ra1pa6axXJ4BE1jvJnatpfmJG133QsSaRZy",
  "key9": "QEDgjW5HNWJFW8RCtLQtWUrzBsjtUzJ9vVWUmjWGmyDzxH7doJYzRGupmZwBkoFRt4h664vWYk46rfG4KTq19Fe",
  "key10": "4qqtMkwLuPUtDBX6Szuuvpo1wB24QK5VHpWQjaPPNNUH5hNBqGccrm77GbYD1ae7uGnPndTpm8DZLwtiaXiWNZzU",
  "key11": "2GqhFUt5Ryi2oeYKWeJEmq4PESoqvNQCefrSE3ZDWgzhuBaHLQ8UC44iGqZsWVgEYiVJYDqwBooW7mcik2fNCBok",
  "key12": "2XG9Pcq7UQecniFr4S4QofCL4WP8ufR9Xane3MZAbAyEkkwAorF3hNfS8MsxhAyageYWdKBJnCZAJ6iK8EADW4dx",
  "key13": "pFcqsavULxhMNiEp8qGGh2FuoY8TAHEQp35eiG8ddvWaTXvdKBtqcwMaFd4cQXyXzozXWXoSU9W1r1NaA6N1Er3",
  "key14": "4AYYD9jvPi1yD3NLJpaT5eMEBUJF2BSJsfNTmqwtGkm64Y1jXXCtczHxiTJhEFrTtnbZn5wu7SmV37qxE5KGBy6",
  "key15": "2mzzicpxNRYv8y8KeLWC67GCaGKAQgAL6Mr6HeawKY38ETwYvNnYhvBz8iXHC8W4EwqmWU1hYgDYJ7YUjU51BLVg",
  "key16": "3H59ayrgPVQNg1XhJkJRgnUG759v8vQbJDUAbd67gFK7hys2Mm6sfWtqSL5gVjnGhfH7cxQfAwwUL5pUZxK95RiP",
  "key17": "6521Ycgkhn7NyqHEk8CXzhsJ5niVrM1V5gF3k6XLfWbq1MeqpC6U2yEwnebFuiFkZT2ddvUbB3CXesk6Db9gksNm",
  "key18": "3rTZiXbjxaw3dBCquLMpfgqXUMGHnqvpPvvTL6MQTCRgwFnd6mxstf3ekpUS6bfJQKoUAmfr5gVCkA6SPKVLv9pN",
  "key19": "66Lt2FwUUp9gSdGo2dWFvJZ3BA8dftiLsNaNfcYsH5cfhiBg4b575kVm8cW8cajn9h2TzNrN6N28kNTXtjjaHnP5",
  "key20": "4bX4fwtEfdkUNvfSsbwGW8CEJ17tNRprrQV1QVGLxEsVWZYTRamWcpvRiwFMgumxZcfXbhUPS4DqAXFLSY9SYquC",
  "key21": "2tngSjvTQWSVpjE3xfk9BV16sqBAavLz7SD3SCMwjUn6Z11QxNk8uK5KuaS3rKNcVCvqGYmJj76VDnWYWjyAicpx",
  "key22": "29ezAvf6DSsGtrGNHpJnuqnKWLbxSHJx1kM7HtTiVJR92F43hhoZ81acqz2GVwwFvFDGumGzs4FSrKHjBXdy1LWL",
  "key23": "32KHYaHBgjzqpk1zUR9C94Qnvk2hxEKnHVvLvSKt39918397yVK6a69q7XquqLhDLgxKWA3ZVYNH5ZMbwBoRNHYm",
  "key24": "3w8K5grRQicMXkuKDty8yWEdgGLy7szLm8SpDjd6ALZrcPpiATZKDyRCVRTPKxTdWNmZwNYpe1zqCREHUnooayp8",
  "key25": "51PeSY7DdHn1c1HrQsKRRwUrfEZrAU9Vy9q2SkZh82MjmgXpSuni4t8HUnq95iX5ZubVb7oD7GmBYWMFbft1AHXu",
  "key26": "4b3qEBYweiYBRHW3jmvj5t4cNJNjv72LSRkesA3ojiSyn8zSqWPYaw4aGaU15ZbmnNAXPDAarEBpf4ZmucPm5YLv",
  "key27": "2EqW8PivVaxvdFhpr5ysa61nuhQRdSyXpbSk2KLACWSUmz3LgNUPMGKpoHPFPh21oYPJ9twsnHAi9FFBZFDnpuWk",
  "key28": "5xuFwxg6ZC9cwGCZC42pozrJzDKu9KNDMEiZuq5Wj8hxX5hvYpCgkgCavWKuK4XUoZHX2Bgtnb58xsLm32y5dVU3",
  "key29": "urXr98wsxo6TnjohcM28cDZabt5eNHxfzXguEifoSQdfmjE9Ngg3nmdg6ueUWiSiT7gLs3af5D7TMNmyWBuZTuf",
  "key30": "jxNH6rd8TaTfhR4sEUzx2mEJW396X1HzzAyV1gTNLC9J9B1UY2yGmNkGUyUU3oHXmSb9dqadAvrfFLmthmDYS6R"
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
