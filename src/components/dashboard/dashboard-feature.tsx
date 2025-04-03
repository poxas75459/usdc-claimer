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
    "2fy54LP4mVDce1DBavZAQ3yVJva3Xv9yScezHHcQXd1J8R3iyP3qKsUNvwMu2AXwypbHxSsdu8R3xnpUgdR7iAui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saNTucEbkRiq9yyFLpULc4DbUYMKg7H1y9vxJK7yiK6bgXoN4YMiz7jaDPy8j94reGcbNdsr2RYhjUvNdc9MSHS",
  "key1": "2yycrH1i7QYw7Np7whznNb8z7uf1NR7Q2LZNRGuhjf6BQ3rz24X6pXbipjJpHh5JApGytVWLt77cUuGKjdX5HUEX",
  "key2": "3caAnUaTzPSQqokRDTjX4vUu8LnfZKi2taSc2qAkc9VWaixfTBsqerEzEoQPErZC7Z943fiUFfsASozpCpByFHEG",
  "key3": "4PivVzyMWXZ7kLNCzdcPQzk94nGKyU76uCnfY3GtNqRQR5cFmjn1tQqzw2yTjqWf6zcJGwm8GUerM923ma6mhSq7",
  "key4": "5bfjYu58WFAvFWgGhzatQ4Yq2ccNaz9g91ChUYLEPz5mmJAhdq3u4FkC3NHb33DsjCus8ELkkm1CMirV26LeKrKM",
  "key5": "Fm1tnkQbmKaWuttXj6uqro9JsKkmaNVVWepEr46evfawW7JNB62UnrrRe3pcCyBuiLPmCuipXcwURCzaURQVuS9",
  "key6": "3rtZkUhLiWKBt2JUrf3iSibkbbtpDRmep4rJF5KawVixsU7oaxoBRqCFEiXutPVeteczGaDjL8GmjxCc6mouKifk",
  "key7": "5E2U2yXpnxurpkZ3BWJ3mNfuiqh5FEZ17hyQRmrmZw749XUJe9bt7DgdfPiqp7jVxYFGnaqeUhvmEPcBH3qZ6U5",
  "key8": "3ZVo3qJxNwYLopQgBMEixBaQtqqnHg4fBYNvB1bZZf3ZL8fEccCpxDqioSyKuAJRkYN1QzNWRGervTA1JJmUQrbg",
  "key9": "5RPapNYmP6ZnB3xsYnpeNKnQgK5wE2JKWjTU4XpwPXySKcAEtW9U65nx2ZbXLbFtc5SuhhhC9dd57YjiRQADYpjw",
  "key10": "4KCXBQBqcJi6oC5eKE9afBTkuXCGvSzxnHThpXiGe1mov57XpV7ooPwg1Y3emkVEupwQDhE1q4dCsSqUdSp1dyZS",
  "key11": "4vxGKdggAmjxTASHn66pYYcyzTg4wVwq7o4vUp6pyBBLHeqhAxMisteNNdDV556GNFaSWro4aH4mnwXrxZmohi93",
  "key12": "3DqXhZdtiWVSkCSJDhF5fkjpJDPTPMzaFaMYWfPFJt6aKwsrGzBzNReaC6fPz2nbC4uQXryaYoGXSFNnUWPJZvGn",
  "key13": "4XZagbmBQfdWu6GmHngzD3QsHxf7JDbvAs1WCCbvNvq4fBWB5cgeD3igYpxcTC4bPy6vhV3EeoKpPPZ1TSYQVh5A",
  "key14": "teFNSFLe1VbSKfzRtf7deNnJNn7ZsiBBtyr7CvoEsqNjkPu9FiCAcLDuw8WdRWrJZhyXFGg3PCspSwDEyN8kxL8",
  "key15": "pm7ZBvU1dRqueEVx7GunesoRRCfqDpUjXtkVm5HN1kuffuLZ64P5S75pL6MJgPyFqTLSuRYsA6Bt5tP2EPHrZRU",
  "key16": "5f6xtw6NqnhR8iW9QkzLa9NGhXVTqXvigdvsHHNKKCyhKa1PomLF5eeZ2y97SwScTDTRvCmZy5pM1AcJpcxR7nVq",
  "key17": "2Vp23WffTyWxCQUgaa3mBddZCx3qYm7MbMydK97dujwmgyRp5kQKURVFaqnL26rgRUJaNHGmV1c9cHxxhhGyrukF",
  "key18": "2sNRxaqdwgEZkeKucJe59QybikYd8m1oPr4FtxET4YmHuYQDrsq4UJu3ojccsxTSfP17YXAeMo8c9hBP5AYN41qP",
  "key19": "LdySsEoGfRBYz7xNCtiiXX8rxd8vfF3tK21NhHokQieAaL9sQ9QiwJF57fxA2E27xVDGYuCZ3yuhKrJUxZJ2fNE",
  "key20": "2Jq2wiEtszUL6Pfg8UXo6nMPT4gaMpjKgawocarMoKRLuxT4hzt4XduUw9esQcuiCtNCN8yB5QewxuyAzkA5gdVT",
  "key21": "2tu7MPcsLJ84KxibpUECnRwKF4R46btES4jstNUkXs21JAiehVShbCTmBAeSvAD9qWkAUg64dingcxA4RQCRF43b",
  "key22": "3b3v2UVM8Y3PXsZ7UogBbqkB9AJhtFYacXFsHtyK9YEweyKoHWNq19W6jXPEhorALM4riztRzKZHcC2bysWpPabc",
  "key23": "29fLqorbmEFdW6bhXpdf5UHoPRJxH5j2LJcdmgUUootYV5ke6sxTLpmpBqkqUWemArYEoA5FV1TjMKPdJ9gx7M2f",
  "key24": "2eTeEYZTdgdV58s9wWnmeuqDgx9h4ojZt5752L7mUWrPF7BnBrepYgc3K66e5kJJDx5WfWH7gKGQR2HwvRFFh3jw",
  "key25": "3ZqaehWn8jAiUhFEcQi4LgLgVdh2RPFa8V677VkgAb3NUiSDregTF6ULpJkqNNf34MrR3RUfYzLWFA3NvBWGUyCB",
  "key26": "5LWEeHzSpfsgdjL5tKkMGsDDcjW7br852pvo8jaEwhW5Z7rviZnThpcg3pTTdzvr8uYtLjABtCDrShZWKQTVbcGK",
  "key27": "5N5hs527QvjejGeEybba5vcDRwKcvWxvMN7pUNkWRgMFWDFgyAKcV6F7vD28Z7c7exYrwHh99XSLPDquAfrcoHLW",
  "key28": "2Q6te9WZgUQi5XurYCoeMA1qBZnUqYvfhgP7nKHxkd9PburT1WLyZeoNXsLD9yVpjTVmEcNh8xXUSpFGnvfrPVXe",
  "key29": "4iyew5u6s3xRrT79gQ1hWrqLXJ3JW9ELRLpNVpk6vrrVnFyb5JLPvvkHqNy2ZEaDUeZdjgcxtGfm5uwJRdyxNqvD",
  "key30": "2oUZYChd5BgbC8uLsKcBe1RpQE3iCHtTrnenTQq5k8VEdCFF3warLnZhwp8dPzR54cK716uyRPhxq1kQx7fQwJ8F",
  "key31": "2GD5efsHzBibr6A3VFA6ECeuGttjhJbUPudVHHSQQUFAdmWSmYL5PxkGN5s1AuQp8zXMR3wnD3HU8Y3hJaGaKaGK"
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
