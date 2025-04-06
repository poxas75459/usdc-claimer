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
    "2HDL9GRWtHT34XZmVWwdFbcYTLK7VPL7CLZQgFC27b8pG2N1ZEZRvuGB5QP96WWMuTLjmMh61uStwyX84H482LtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkU5iopqXvPvtYLPacaYiaY9bpnkJXU4Lp6xQ4xD7vjeNPSYbiU8EFZawuW9VC2QX86WVweWvGdzkiu7uBxqeuK",
  "key1": "3ufUoJ3i2ibF8Df1R4s9dNo9rDpHFdJtQH5YRZiS5eKwHqCreDhdUwktcmiCnAMzBUutevwy5imacZX6qfswcsHj",
  "key2": "26H82vBVKU9NSKV9nzzZy3b2hpfwdkHDYBV3Mft384gA9LaUyzYhuHjaDzecRFJ8ZyyYM2rH7VVLxAWtVaHMrm3n",
  "key3": "4UTyDE6JpYipYf5M6XjKcSUnPPXepb38bUuME6QaCDUd7h35655ajJZoejCD3yxA3qxzwN6LA3xfSYf58nKsnRPP",
  "key4": "5EwZFkAyFMSKRuro4JV5X3oBba5uXKNFmeZNehJGof8EqTb5rKX2hGJ4osVHzX7AdfFR2ULNbbNzzhsjRpRU6KGb",
  "key5": "3L4bxHmdpv5WvX1tGgFW25jfJbUrb6hKYGvEbaHgqyq79BHQdQFSvw6z7LVkJJwuQnxWZ4CHqsmLVfqjoZ2hcbkB",
  "key6": "PwQGcefEc9tz3zNns1dhrcaGrGT4Z2k7ABoUCuhNLRUBtnfqxMJTgKQoybAsDFGwEqPPPtt4hDAR94u6m2edrTh",
  "key7": "Y62KgZHWevRxRMa6KnWQfQG7f69PaDnsc4iK1PG1Yf7sB5cHz8NUBwPnHLbxETSPNq5tUbeZ6V7bBhJpnhvKvC3",
  "key8": "UaSQMfZf7oHo2ovhYCi2iKxHizau4o9diGHGvdDsoDcsDQFWzxKNv4wD6utG1nL8pthLPgrrKU4C9Q7rmFEZP96",
  "key9": "5K6AULqEHiN4PsFGPnTMpeQU8iWon5oKDq1PEniT4tRe5jbhiFZZxtNohHKkok3avooSA2ovwinmwNHQDZbkc3d8",
  "key10": "3G2b4xpLgB7nsnaeGcpmXDhQpCrbvwG72Y1iNscr5N3jZmsoRvhdMsAJyQ8TdVQvdHcPmSiHAcFHiZsjoGZsNEav",
  "key11": "5uvMni214htZvjzAHA6n87BF6T4pWYGY4i83QE5qEYA5qjU1eYCv6vLDBQn5d5SaxCERk9HcAZ9XDcxHFWfWmZDt",
  "key12": "n1RFea9zMAdZgwfhmz3ovsSrWXBKnyENyKd4ztX1Nm8tCS3fbL8QPYmGrwRqjE5eFDcHpus5Zasp2CMj9KtA791",
  "key13": "4sZqxCYv55BE39RPWjvhAHYhsNLdiQbjyqkuA6c5fVHxLUWQPErAsmGQqc47atWckwqFCiDAcwgdPTUmd63stneL",
  "key14": "3pGQT7p8n3i6a4kCfUt6W8ZivXPuFqGccJKPqsvYRS7ZKR5pCu81GQbX993NqLvGetkwCRdr83bgE1V2ccomq3xR",
  "key15": "4Xjd4Ugui8QvQStSCw3VB7frNLJ3gXMQF2VSpeDrxvXR5X66Uz6c8i1RXJ78Vs8RAtj8Wh284S66xx7zTrrNXKFe",
  "key16": "QG62U6zTYBr5AyHa4pCRSgTj3sp9jXsA4e7bTjhBwsKPu8CoDsUbhT7VN8m7g2dGLefjuaw7xpDY7ZuTsYnBUw2",
  "key17": "r1qwNa4Uvt5WRGp9KK1MwTYrrWbqsYKKwmdEggAqJCqPPam6dDx6GecU8hFKzqm6mVVP32G79rFaGGDuCgx2623",
  "key18": "8rUCPKhW7PXCpdzx7vDd7u88ejmqWjnAyrnhs8mqWjJHnqSQK5AdQwrfW4MBbdkefQiNGvGrGzmE52vGCZCN6Rc",
  "key19": "3gFh1xt1o87P2AL5SdnJMJLpdVK5iSsSD2P1UuP8QUP1Az4dRRmp5jXys1mzCkTR1cWgYMSrxagVMHh1H6xzueBA",
  "key20": "5Ar65PcwcgnkC2EKVBy2CRvKktJohLczbpBfJjkYvVe6Lff3xwu26yfEJS2JWaqU81SVSA1SzjTmtCpwXj46De3m",
  "key21": "5CUb6fN6TPbU55H1YZ1c3QHhcpAhdXEDfgNF6e7wdsLVhsT6b6pvUJmoAW4VHk7AQYqtMzG2B24xeMqnh1mShQ6D",
  "key22": "3AxaCuJU5aB9XXA6xoVz1n7Xf6RBHcyp9pzAmiZhBmGaWef7JZWa2FWuSBEPYEgFVkv5Yq55gWsHr93v7kSP7zf7",
  "key23": "2uxkJEbXGccaFYxXbaEcvb1U4FcsRu4UsmhpgX7kF3Sjmdt4crZwKpo8RuRijqMXcyciq3XYx7E45H2ha9irnRdt",
  "key24": "3giJ4rRmmjckEHLoAgFp1ThxKBPwvb5LLY8huTR26mL1jTp6sxD8QufmnXHi7TvaMLcbB6QRFSK1ZwaiUY3eBNGL",
  "key25": "32NusyDrqPNsHDjSJatq94LP97KKqEzQBHw1MBjjAyUv9v3ZTK71r3SgH6CkVuR1iAhAQoqpkThWjSuFoiiUWhAs",
  "key26": "Wfvtb3c6M2S7zNzbJkUWxuKwwHXWgsFzinUYJ8UQcd7fMLDvoW3ud4PScd2uWNWTVdGyEB3X5oSYfiNki1Svm9w",
  "key27": "39p7EgcYFsb6J5VgkA7sAbYX5vNMZuPkx9DwMjPK2T8SfVUqqiFh4NbCeDSNhHoTyLpdVcUwnxPEs2Kbq15NJpeZ"
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
