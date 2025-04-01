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
    "2j6wf6Rba9shsdxv4T2XbCF1FM6xUkf3Atygpp8UuTT2PjTVCUVs8ewdzUZwnuKGRURRacTd6tv6KWBMf77VNcjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZSWs1iv3XtbGmqchDsjiCBabzvziRsgHTg7riDah3EbCskT56cXCBbfbe3yPumTYE3ByS6b9NUnZkoeG78cFL8",
  "key1": "2pLg2msgZjqxrzsaNeEf2tXhZrvg65tpbEZm92vaPJMArcRRnLwKxUudkCeNcgHibWwoo5GSQPPaeovnmVa8XL28",
  "key2": "24RpoCkGYDAsWQ36ASPNvEtGJDooV2aQdp6fjD5u1J6bopBJkKdiTARmMxESRhGdKkHb13FjnWeMhWaAQEtAJwQE",
  "key3": "4ass5PRxTf5ys16HbH5hBn5UusEHZf9TesuqkTwYVKQFUePS2nkgVQSvHFUVHGtK46th2cotLN4twi1jcMjAfAzP",
  "key4": "4EeqdbT4zHKv8xRUpQPKcwfN4Ujtw5jTaNoDTzPBgEDA1fHUrjdAzs2wPxnff6ewjnftEKpRjUwJLedgsQWYuzw5",
  "key5": "2aByrUJw5CqJHJJmC3AayXjSRqZt3EWNobeY5X3nzHq2QGTdNZXuvGGGFXTqhWxay9vMaUJ2RknCM5a9EFh8Yu7m",
  "key6": "29KtAXMmKXfrMYo67tThi5trCt3zB73tV1KSdB3xsYPfCgCeeLmSJifLDNUNE4XRxoZK9KaSnk9AWaPku9gWAqUj",
  "key7": "r1Gpa9vwjjXrpvrvsFa4hCFFNQpd7QZUaYaFQYoKkuBQGwBnMS6rYFuPfNAyaQbfX4BnJcjKzfWPzq1gTNTrLeR",
  "key8": "5EiYGvFo41VBaBoCH9KxC1jQo2CkT9LF16Z2Y7tft1SveYb9zgNkiFBAfY1oULVdh77SJWYJqmgjwDQKXnvGEXPx",
  "key9": "2wLxCxt3Sgi3J1hmMDPFXXgzcV6hLr2Ms3N4GS3SFibiCN6Kpj3FmrVKBtY6MKQfu2m3xAqc7LfJ33FAH1KvP9st",
  "key10": "StUd2fS8hKsocKtXZsGBQPc28koi2UrQDvVxhoUPwfS6MXVWJg3e2k1C5hYxznogFLRTphMcEbQqF9zq4hPViDk",
  "key11": "wjFgvY1ZNFRPsfiMgQ5D98kaxHdg4ik4wnDLcKxpwv3XhoPYBunyFt5XggAn9uTjkfidtbfdrG2CT3YQGLEgaC6",
  "key12": "5GYFQwUypw4keFWWSq8i56oAGKK3YpSUDebLKwc5it5adaFvn4EuKrpVWcpdrHS73GxEidiY5BwfkdoaQ2gqtmLT",
  "key13": "5wvDz6ZkewCr7hsrzm6vi8NnE48wPPu2t4rhJSAFcvTPDGo97X2KjoTwSFk6X3zYhktRcJszZmp6nkGWUf17sehT",
  "key14": "5A8fFce5WWxwz5nAPuZTwAQpCPjG6uLgTzrWUYQVUFWkVcmaNEU8y3EGKkY23ssPhjfJYKT4zCmh86UU57xcwFDo",
  "key15": "3MgpYwciCxYKcw6GbrVXfhe4JhMZBhrDouXvnPPoWMXQ2SPftpcQqVnHFmkx1VZ5LqeG3kfVDhfpX6BiRE64o21A",
  "key16": "5Uosni2EPhHzuqpJ7VqT3CKdxfML5DnCZrpjZnvNnCuZuEWX3Cxne2j1DeKwcpSPhNggeoupUcc4ZVf5VAmcWXkF",
  "key17": "5eM8Wj532A3XkVs2CEhuMvCLWBdKRqQ6yft3dhKy5sughRjZzph96kHNdAeCVquLfBFze9ek2qPVhkcgpQDCDCxP",
  "key18": "4vdZ4hQmpdTW3WSzKikkPZCRU57XaUMVsZ5gK8TCwHrW9HMdYpt4wQRXxrNVwRZSeD98Ft5snc457R5nXQJLDHqK",
  "key19": "3dVVx58ubcDXAhk9xeV8XGhHEcp8bXdCNyKwrXBNbFiY5NQ4p7WrYyEojb2CYTLi1i7PMMtumMByAFGspfrjc4u8",
  "key20": "3ftfBRyL3VN7cNgiUtF1D4mYC1avpBDKRmpYouR9upEREZ963D5hNVG593p265MQuTdrhGFc6GbWFiuFhZLg5Z7t",
  "key21": "51h1udhaqWWvjBjkhc7jWR3AzXjegCUYifMpEAaMSQqiUyByeoU8npYPGRKqS7CCQ9piCd2quwbY44RKZTBb9dtJ",
  "key22": "2y7PL6AF8Hdsnk5EhwRV6RaJrDXVgHrjmMBKorhr9McSBaae5NduFYig7BJykKHLkVZeTf97j9FDFwLZ715vJqUS",
  "key23": "hbHSZSafsMquCtm1gMpWT2fK4hJMau5vGGhjvFn7NVbUvhFLoo3b2TjYvhbFpGDBmjn7VaAQ93v99NWs9cHYv88",
  "key24": "YQEPXfuY3mtbYY5SP6DBC5jf8s1zLBrFYg4PdE2NxyDkhSMayEoehHzZpp1Qu4d9KXRzCF7JpUeRiVjkcAoDTRf",
  "key25": "39qRbrK2J9ecNEoDbY9z4JBGGfsVEpXHkZA1pYrS9N22W4y3GsseJfSbC97mU9ULwTJnZqBWQ1517LcmqsJCaojT",
  "key26": "4CwvgGFgfpKz8LVeeVNsVZtE3FxP2aFSbv1VzD1rbHViDq2WJNEnePS8WxZvnxNdQFp3srdk7tErr9YZjSEBXqeq",
  "key27": "2dL6GJ5MhAidsxYLkpVyTjfLDbUHTrtdyoFzt6ir6MXoE3UHTtAwaqbjXGFJdYeXwNLcjCR2yFFaQm5RmY6cZfwm",
  "key28": "3J6ohQw5WzEst3fdbQmyntiWmf7Lmb8tDjuCzNFn3Ftcrnpm6ugqD43ZvJBMjeXTvGa9NnfJJWysoJSjVvMow2Cq"
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
