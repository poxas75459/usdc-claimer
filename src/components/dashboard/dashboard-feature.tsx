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
    "354Ybp8eLrV7usSuzTZaU89vioArNTsMUi9qgzpXX1sC8gQ5jrD6UhbrEzgbEJsMpBVTMt8CH6MU2dhxZGg5nKDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425iXPCQizpZG9riJJKW4cNf1o5B3uwHidyTGza9voX5sy78DKvGnZXg8ZfikzP2Prp6r4GYPTAQkse1Fv3yTgnA",
  "key1": "5WHBt8YaA78iPFf66KUKtxMhDt2kgNWhtmWdrYEAt7dHrr5X1YmMxcNfBYg6JZCkd4vp3L29vjXNSEqeuxn8uXQR",
  "key2": "2bAFesAe1scxxME2QuXfUhDEeq86nDaEgRPvBp8krx126vvT26T9LNbNJqdHJ9XsCsuFygjPj4TtPoKzFig6UVPB",
  "key3": "2q5NqYzagxWtWzXEbNXHxUqaYSXadzqLaYa6ZT8DptUBdXs7AoKdpTx2YQjZL3fdN54KiM16pJ2Z19nB9NUG7dxs",
  "key4": "3cwWPpY7TSGem9mPexinFsgHEK2iLRJzRnFzsjYTPJJHxDdfBjExPS3aXjMTZdHnBYkhTkn6kaPS7V31qV2z3C5m",
  "key5": "5mR1NjhtyGy8EZx9o4tzTvPfLdhRsuWSgtHcvKZ5ZqjAkrZzfQaLCdqYTqD7Eg8ihamJ7UvvZ3pUSMYYnM5jnGQu",
  "key6": "3d5ExPfQEz7oDFHTY6U1YgemfRtDkDwruS5Zyx5wnwYqZ5kspWF33A75JRW9MUSCMQHouVFpUe4nUUsPFFrCuXsm",
  "key7": "3DVFKsFfm6u4eg8YgcDkwstsHxHrc9hkTErdzG8YniaqgA9Ehd4uiqdsreff9QLiwKeQUvYTpxFUhNgSvgLKBCwP",
  "key8": "3XogLNApRKbKgaeoK2ToNbLrhi3d6PQJgdUKN58fsot6Y1PwRznMp14aARRu7oztnQSsQaSLC4VewamUEDfgyiPA",
  "key9": "XXvXQgFfL6Y63opuo8UvNVbCrDTiBvJBAqtA26nmq3FzdvqUKmZ2qaFrrpSynDj8fvd96ZX85nZTq9UZ6VBJeQd",
  "key10": "3ks9Kt6Ld4QHwTUBLWaVUReeNiSsyd5j9fo74JLonqaU2HHeKeS4wVQfZ1fNMv5CVpHndVYXzpXJz4k52Tu1xZyi",
  "key11": "33MZ7Ycqaiix4WfurirXDiCR4QRmda13VRpFq5KiMWzFF7FEqKGsw1MSdNtjWJ7HT2HLGZ4UpTLYgWnHHCD4qFJx",
  "key12": "2WXrwyF7SEybpNBt76sL6F6CdFQE1SYkqXtVKCKiL467QK85uhx892hSjRodFiboESago1y1EKaP9CsctMkAbKSX",
  "key13": "3QTU93jUjQDt6kwvwki2JtquZMJAvGm6aHG7PpwLXQbpDx9JmPPcVsUSYsr1QKSUcGfpyPDfTgSyoi8JaDHa8d65",
  "key14": "Vi79FeWrNkWHoojbVrhRdRDp1JSqBxR5Eisne3BHTDCxdjXNQmujvUWPJQhPe3ERLhNcjWH26TbFBc7A3LM7qaZ",
  "key15": "3B3hGyXQ6EyM24AtFZrgwcfxogxKixbP19vgMoBkWtF7FjkKQVNNtmFhoicNHtBUNHbCi5vftoYz5kp9ccUA5VXE",
  "key16": "4xcbkA6uyB3Y7uSfrZdaqVZYziUFsqXKfSQPLBdJbFeCxe2RQhZt4Hs7RnNye49nRRogKwKgjLnJaXNnFBBKAtEz",
  "key17": "32WJsdWBo3LM5D83mSbB2rUKHJt6rDfvR2PeveHvkDTBYDj2KwdM9NEheQDSrtqWdKvbPayt9NecTPmuo3XZ2yEq",
  "key18": "54xJySg4FuKdrPU6BxWrrhQ4jV33vibQVAx3gPkFrqbwCRJyBMFL11rsN7Qrq6PVeQKFEkF3KEdbjGimscyBuyxr",
  "key19": "4RpjQaVxfmXCfctPJpD4GCdLnvkKgDctonVVkQJ1Qojtf6GdurCjSSjMWTGzCLyJrs9p2ghDS4urxHfa5s5BWugt",
  "key20": "5C2sDS8prNMtkYYM8xgTbidn58umYFnD41cHo12zPp1Q2FUxQ7kxcoEPw1jS2HTL2369CKV7LsbRDCo9Gks8CQiE",
  "key21": "56HVonmREYymwff9eyJLWMp5QEP4ghy4moQSqXr8hJQ5VLweusw7bmEfdWhrS29XxSXasZSbzSe8YVSS1Ks6Lg23",
  "key22": "2oPYtwzXnh1J1Vnh2g8JFUD75evxPxJXDLrcUjARtDyzFtUQrjhyVGat6eGGq4jEUNgiC5vL9aFQ9zvTV7P5vwEk",
  "key23": "5xtLJmjN1LDTZUrwTgko4tNKS4KBwoF9jAX9aAZrdRaBNYZiBSYct8sVprruHCXXswkeGQunWxbtpmp2n3tgj9Wq",
  "key24": "2yfNty6UhGxxXetAao1frx74iusw3Yg68ezquqPDg6x9gPUgq8zQNxCr4ApSyZwyKpy7v9EBiW8KTVXNUCTnJD2",
  "key25": "5MxDnUEWedQRPTEf1qSyk4mqUDUFNQUhRBYEAeb12hUzUdjh7hUkgu49EeFSCGqxMSjP5omPBD9rjTpSWxJmrxhW",
  "key26": "4Pz22RA2MCjBbvkPa1FAzwdSVB2YjDEvCZZn116NCHiQaxVs1cNmPM5G2s9sJnpdRyvf8jcSFX117B2E5pgdyEGy",
  "key27": "4Apdgx7hHPH6sLyjKaMNHyRqqL6bYFsve61VzNncDxWwXzDBYiRN6r9A9jeTkRR8t6L6HKB316XD3YoEHSecBnE4",
  "key28": "UT42P4ugdiKKemrDkn7DwPVh417bbyL8Wi5asdwb9HZF9BzcTE58M6xDf3Fc9feYB7z4wFBSpS3MatUqcC7FN1C",
  "key29": "CVq3PFngEmmHPSF5wLkFMRVmXWA12jaskzsAhsYPzyLecJut9WRz1zGRCu5zUDPq5tPmB3Jzegw2BuJLzqUy5Pm",
  "key30": "bLumtQ3bC8ZtGSjiueX6Hos2y5L4EivkKYBtEe29ugFZhe6ATssS5gfmyAN3s1E1qkkspz8NEEkPDscKLXGcTtn",
  "key31": "Z2JLze4hi5jVjTQvsiDmoLhkFMKZjV6pqkuXdAyN4aa5QdExDhF1ZAvz5bJMjXvcLZv6cab8eQt5ubNkGugkcSM",
  "key32": "2k1GUJSE82Rgkuz392A9u8po1tFANmp1SzQF3M2u22Kc4ahz5HgHZWutv53Ph3UBSzuFKfM2qq286xdRCbNatDwp",
  "key33": "3r1aHsMsDBKw95q5e6iak6YHyZ7sfoXCe1qETkhcZFJQ7KVVr8NrzP5MXeodbsct3J5tH1tR3puYtH2BsxrkaUN7",
  "key34": "5axb6JdpK3Ntge9KJzT728GT1we1AZkkQjRd9Ns8g9nEy52VY64cm5wWx2StK9bLDqUaZNtQgSWCPTP2EX6B3ApY",
  "key35": "4i6qYkiBUPhQ1BsZErU6pfVZvYpyANSX9XZVdGei9cSs4rNC5i9kwDEWn9R3bv9JW9fVmFQcfKkwjQpCoMmnJQxD",
  "key36": "5Vr8Kc3friQVzV7qTFFvYH4YtqKGyfgMHQUrGGTe8rskNx3iX7JpKYc7pkqB9Lau92Jzwa2HaZzaprWjWzQUQnq2",
  "key37": "NRXSFFEQ73xYigeyEcBXEhFLDaqWtSRAzeh6vbm9nFwAb6NLDJxq5sd3pDjYAabkRAJRaM7iYh5ftjhqLVqeaW1",
  "key38": "4GBBAkddD7ijHjDBoWSGQpP6nUN58n5WdnLBquwGF146gmQQUfEQP62EACGMhFCdZvwahjpJ4Epe3eywwsyQFUpK",
  "key39": "43HhDzccnyWHqS7uhurSW8FYizkTicdBbsuPeuw3Dqyv8bFCTAA6vxCdiZcDpRsySw3g5GeFDokV6LH2fgLQx6Nd",
  "key40": "uRTvzCAYvEfLsSoZHcHPjr536t73xszibtowYQrs1bk1PKbNFUVcuWcRFuaQWHSZRUkYCnQBuuctXd3mCGZhaxm",
  "key41": "2y3wDdecEJneR5CbU48Cmp7BRXTadpvKW6BXg6LMLuuhgURd6W3S5YWj7T9JRyqcHi49YD5QcTQ5vMZ2VTrhNvHf",
  "key42": "3Lj2LS2yrdsv8879jw7YJV2gWe9eooZMnDVCVBYxL5jjNwC8Mwqg3LQ1tx844oHC6yyjifi9EtHoenBHT62jMDJb",
  "key43": "RuuugKhwcP7AQFh2WVCdtJVsN2wn85PDd8K23TDPCE1SjHYRvuTHSLw46pTP3GWCxNdej21mQWUrxTXKAhAeqV4",
  "key44": "5BacQH9UDRnNRo6s9q9mGVqykFkgSUSpLRB6MX8hQmCVjqHwx9L2WH5fmpN5YBwnKkDyhxf4LKHttHBYYvbAzUG3",
  "key45": "2FrYvn4EBnFXsLtZsEYGFvT6ndZZbRHyB66TSgfB6Tgj2AtxGHpsPPLVy4pZ7k2kZ9t4bP2WJH5iPCD7aACscRwg"
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
