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
    "4gMyvMA443AnwfiAyNFJAQvTABHZE75R3pCLkMDPJTkfDPopJwJw7yNm6MCPxrgea5fXTjHtZNMmBS6JsUbRCH9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgZQk6QREeKjW1Etg7xNF6PFaKzBiZQdM6XJ5udDWbyYoA9tVXgB68FxFCRwNTRUTM7tSv939SZNYQQHQRnhH12",
  "key1": "3sUzu7wJWLGbmN2cJqr1xykAXUH57aDAnQxYzMdCEpHkWi9KN2zJb23wZGdbQRCjTx2ZnYmH1ZLZMdkgP6aW9yWn",
  "key2": "ojqYLV35RuBpNKEbX921MMzH7fjKXiVanzWGmx8aegEG4o9zFYxqgEG3BnQbMyJzrTYZf7ddq1jHVvk2LADGVYV",
  "key3": "5qfTjyxXD1Ec3qYvCUbGJeVD4HVfbZB1uzNWzHjK5ptkACChSEsKkK2xXCwpQsecrPT4XPVThCgQDKMvT9bpiuvS",
  "key4": "7Q9VVE76LhxbddvKGgCumJVYty194YaTDhuusWWX4a3Drhx1E958mCm9vGvHiTcaUYZTxRpmVQfc5biJKPZVYjX",
  "key5": "3xbVyuCiAV8o9xEm7MxCWMXPtbGotcvBrVkHAfnmwGvDBuQf4wcy4sJFVUSEqEe9mMdPfE7qkL56WPnHj6qf6G12",
  "key6": "59FqJ19bewp3d51J9EfXWaU2hCs9HeGikFwxL37z1FNoZsA2RQKErcxVTctqd24yLeMUVrcAiA2aoraYyPwYMgia",
  "key7": "3da6Y6ho8LXhMNDSBJaXSEt8DUJkw1ZW9FZB8eD3SuWR8JmRGiupU8rS23Pd1t7F53aQ43vRef5AS9i6H5CMJGAg",
  "key8": "gmWBBZQynfsjJzZC1mbV4AwCfvHLB3QHfp92jpw2UWv52x8TmzGGadVhsJsmnm577ST3hvcvCak22oeGooT23qY",
  "key9": "5yDL4SDraKRfFLjtXjgVnrTgjCtMZdN6xySMDFErXAGNX1ytcfYBj1mKiRb6jXutyopE1RHZ9b4wJgCpjRzMy1nS",
  "key10": "3DCh3jJdGDnSx1wZEPZ4eZ6FWcBAcHfNSdmCQcVQpYWqnkjoXvgYc4pTY9PAkahURxfpaBBGu3u7WNxaWhSk2bgH",
  "key11": "5Cm2ZdC3meiri257vw4dWJbohjSTg4vzonTHWH2WV9oqKHzaMJGi1WjHMDXPrQ3iDE4LU5KbqrBXqYutV569nUV5",
  "key12": "3PJ9MvLz1GqA1FpCjPxaZNx87N2oC1gZYQKxRGii2c1Zu65qzAqguFQYzahjfQdKtrwJQftCaMJEbbGbM1Y6baNj",
  "key13": "4UrbAMw24hBUF4iavowzvidk715scdQc146c7XmSt1nVmvEaotHVuQYWNx5tvcFyZf8muBTx1wNmFPzSnx8mC217",
  "key14": "3fv7UmUYKjnRfvmds5ELn6Hh6x1QEpmzDXNS8rbe8kWfQqhGWmjHiJ9U7We5FLLjzucdjMW45L4hskwR1p5ebtLf",
  "key15": "4rJWMJtreh99qH5mcArgrrvjL69o9fgHp4PfrSgmUHSbzfcnPtTnFBNAFAbjJasyqSoSzmsCihAqPSt6ZMAm53UD",
  "key16": "F7N3fiZLvcoStAzn6VQGWXXV3x9Z5sjnuzKyTokMx3LEvjVHrF5uAqVVjPvYekYQyx6sY2H27iigVvdCjHm1uxp",
  "key17": "4p9z9uQkLDYyZ3eA4gTekUZ6JqzFM522FPeCWSZtXJgG3W5nW7n1f8SbUUrpwXwzaaqF6CpnsFu7sTtumpX2L1s7",
  "key18": "4ANeXJjmBTCYK8iLL9r3fPpejxQAKnE9oJooAFg8q76Kqg8bZZ16CMCtmqvzaxrurXczd1RZzL31fwFfRwbKfafC",
  "key19": "2CmJwtLiruswjBtCvevbo1dWLc4jFDXFhofbaT3PZEsdRnuDVMcse3B49Z5BReHRPjLEF2mE9MWxrJzbqwYCCPZg",
  "key20": "4zHpJzvY2eMhc21GmYT4L8QtogoQZjMnykfgFyTqbr75KePttzvZwvSf8E9sWu6W3YK2Wed776gP1rkdmyDB7LxN",
  "key21": "4kBdLnhQsH4NvTvUxDdYpzCR1BGV7SSCAL4HG96LoXBaGF4tRHH7sat9FXeD2Qp7QCjGVZzssHLXpgh7ivZKX5Z5",
  "key22": "3gLgx4C6Sz912VErqEctNYfJAZbEB3E7i3efrDpy5XHJDGsGEZH2fh8vhDszFZHDB77UAVKBAN5oHU399qfZP9rL",
  "key23": "2BF2tviyn2Gt9ZaNb2vss9pa3z64BC8k6QgoAVHwohvBxE7WspoBYbHHeVVsmFavWcfwc6sdE7RXF3nqpizQaQYD",
  "key24": "5tCtW92kmQR7Y78sv2sb6K6xsNjpmWTtsNZ6K1xKQW1Y9xoeB7SXUpBgxnMpMGm2fu8siCyWu4x2eDNbGNeyT8dh",
  "key25": "61GpGXgmW5WRKFBTako9Wtqkfay9WXKBLMe4QDGRBs3P8QfG6GbVQSGDiJL79ChUWvVcratR2gLg5ceewVHnRC2f",
  "key26": "5sEcF7cgMTk79q6vhzmZUmwXqjWze5kyu58J598UEJVotvYP3xJDNh1KBQFinhnq7gtffZju7h7XDDLAxfcxUGj4",
  "key27": "3dfPLVQNyPKfGhCJC4zmTBw4qr1GDgN6cntyEdYdxCE1hhBM5qqjpHeEFZNkPhvMSA1jokfnG3jyGzipMzFGxrPo",
  "key28": "3eFCuPpXR9JShWYHkQR9fyrUxbwBETBtD3wQ2Nwps9jghMQYCt7ASbnmKkpLozviXmFzBdKFkG1MqNqpJQmPovMa",
  "key29": "ELVWMFQqaJrvUpPdA3qhsTRhMt3TjCNNuvqN2QUezg9KafEKM4Weyx5Mb4mf3ECow9gYUP7dn8jwerVFUUUkigK",
  "key30": "3DtvP64hKYKzN2QJbVnAJJiZcbz5qzxkSn1TE7QZW348fBr9kJY7u4VZ23TCzCD4GyMqSeoBi2z6vqffEv5RmYd3"
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
