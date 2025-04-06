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
    "51joXjjpWU4px7pHnBsSq9VxmwBUqYis9TBrUTYwoPyiXKFNEbnRr519NStBFSQpjUvJ7EQBmtT1ARGcP66bktza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjSKiQPwEyNxL8fcpUDrJnG34bhyFtVferWKscV47726mLZ2fTLcXmUuqjnYW7CeqcTvDEDcEQqCrYBg9J8s5mK",
  "key1": "5zKCbQnurkummEDSRx7FgmjEKCLWcgur8uzhP7mD9vhHVDRSi77gno3KRfMQVi2B9rmhG8ojiwPC3NDZty5ieBfm",
  "key2": "5N3YPFwtkTXouj3LrADTc7bxdEjPVt5fDgKvWAgiKjUyi2vA44Uz8QjA1VEALAbTzUJ1tQ5V2zQhW1GUUiENsjXH",
  "key3": "jihxDqSPwQSAxzQYY4fRW5nXDATXfgU5QfTrAWss8SDcmUfDLsYnTBFxAS8yyxSg9YBgze5hNV9qXCEFaPWMmda",
  "key4": "4gHcPa93rBQDWcMQATNPgqwVVHMN5dpuEP9Qtyq895Beft4gNAYpvjnMP9KWDW9SXoEqzYVfaBQJzfPW9kHw6dZy",
  "key5": "mEyz5E4nM7ysD9nk2aKKRCz9uYR8tvbWFmbfUD5rMC9gThBnAv5qtS889iNC2jYthukA4GhewJpX6HNfGLeSxGv",
  "key6": "3w94cYwxiVTKGnrJKp5rsT6njGEF3GuZeQC7ZJMHZ3twFjMjZ6TJCVG6ddTy217SHcWzPGRBMpznb1jnrDrXXLsr",
  "key7": "5HkRefsv87J7rM2uEtCi4MdGARXQFjKKjijDpdpRiRzEgFJz1bBUko6gvzyoY7855D9uCXScGVCm1PYWR4MDJ4g9",
  "key8": "5qByE4WwvtNX1pJmjJfb87obFMKvenvGtCcdBcveUTmxVHYe6hhMvW9EfUpWT8b1h65Uu5mQCqudc4c8GW97YwYY",
  "key9": "3rmymy4DGo89GS19TuBKVeMWtNmKh7bqcGx5gLNq69eFGcE9KqF4qUFUTF1j2qMQJvXKXaSYRfFtaZWE6eNs93NN",
  "key10": "2Gm9zFrPjXszdKvCsP1Cz7AmdiBiCsGaDuWv3yeKwqVcr1JhMvf1VKrFy6XNnGXFss8o8R1yVLAyHoJirGD5vdij",
  "key11": "2aJowCxLmZNJMY7NFrLg9GJZtAkxw8WXEyB2hUVUKEbSLxcyG5HDL5WuRL2KGGe648KRpasFdicDmRjjnLMr3H4K",
  "key12": "4J7iB8cBpmEzC5qbixDr5EEs9PaKCSFbMUDbTfoq8EeoAbg7nGZxkzJhU5Rk9rdAYrgxPbWc6RYu5YSNfkKcf5tr",
  "key13": "2wZiHoZZQayYNbgRBetiAk4d4MJLMujquo1aProvMkTxC8cyCv742A7KBKtkkc8xLWUS1ig44dLnCvHsc6XrxVCw",
  "key14": "2C5CSbddYpmk8EE8piadbz8cFa8i55DWeWHM1z4TgXqKd9KcHd4QNxsCE2Tsb1LyKoximb2bLuddBD39d2zpZTC6",
  "key15": "5ZyGZ7qGDM6xdsZx6NCuNgELarDMxZxXCvCdAgAcYTp9mA6kbCrsFRX3v5NAarNS1d2m4PJXdAmxBRj8RVKP3jFE",
  "key16": "qeGwtFqxqFfUxRhpoUibbk37gDyHe9rMDUbLcWzzDJ7sMZZZT4iESzEJtq8mmGXdsJKUCL8Wv8NoJy2sEabyLUn",
  "key17": "2ZK1h58n7PWkSdFr2nDBRuN8nj7Yqf3GrbycDxBJEwQmuAbZwPRynzjn25P4vKDp4h3qqdiJqu2utxDXpKt8DC4k",
  "key18": "E3711w1VHimXTEupMTrLP1MKFudawxyTY9WmxERqSerBrE3xQNY6bQ7CPBtuUCpLsCruEuKitPYHaYSzgFLqrAt",
  "key19": "2QY1hXjUTFYvb8nEP7ZJuH5xn7c5y4eXPbKd3sqLjFvFSkHhN76K81RpfnFkmXK91h2tMk1tBK7D8PcqghT7i34p",
  "key20": "5FaUaRzQZtN5eZw5Ao8r3Vk9wxZpjh6YNVPeVnZUk4gQStgCTaqzVppPhEfueN8jKU4rvuHYCZavGYq6PDH5t74m",
  "key21": "5LoAknkU6ntRUqLW9TgxEfqe2BZSQAWK9bQ2DoNsFWcXKDTZRngY3AKtQ5rDiGpF2N5pRLSVsgo2a9vWRyjraCAF",
  "key22": "4b2SuTD9iHsvuHowoZN6tshg1zQHKmwKhpC7XJoPdsxDwdwu6XUie2HhZAvHzPN142n4aLZ9pBs6W1LaB3cytv8U",
  "key23": "57Jn7V8FffUfzQemE6zXe3YST8P4LisCbHmT2Hza2MYYDDGgpDjfxUQYC7dAT4m9btr64HwtDfMdMHXXsY598CFi",
  "key24": "3rqBSGdQov9yaHpmo2BH79hTAB9zhAHNJDQGwqxFjMRkzPdwzb6cMsiUs2dhot92JsfwDEwZQzi1wnc3XM4EZQK7",
  "key25": "2Ye38tnWk6SGFCMKtzezrbvN4SJGhgDiKHWJeGD5CxBZGTq4LgaDc5fqLSdMDRxPtWPSfdUcBpLy7rSL7ykwaPC2",
  "key26": "4bpviCZYSr8h2fnceK6M3EyiKbnZJAeHj4L7kC4sYSaCKL8DxrJVG1HkyVqEpiM3qyudj4ESZdRBDMnYekaybRyD",
  "key27": "HFFGcLiKoFvyUbcsAFr2tDhV3NYE7odVXXiDFRKERhQv3EPZLvu81CTnmu8BFCKoUdvAgEnprRErCEehTNsi2dt",
  "key28": "2EGN4v8fnYXyUQX3PGKy4uADVbVR92uAucTvSr37owZELVKJEtE3GrsVAqpikbUi8BgP8UydqTgcxi2rNE7eSGMP",
  "key29": "4vXDz6X6ZYwa6iC2iRsRdZVsuQhFiybBs8ir59DaEadnfrhY8C1EXaqYFPjnRfZ5PxGpmJv212ukGFz9zgseYhKr",
  "key30": "4despQyp4JiYqReZ5n7xRKsUhz97FtNPrHq3qVgd5ByHPC1kTzYdkDLWcgkfUBYdJ1Wssae4jgRH6bYiusxVs6fJ"
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
