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
    "2GiWVcP1Ujd7zWnfbGJQqUDhWwWC5xGVLim7KP6NuuWdNH5PL6CXeZ7ZfxxqhQZcteEYzkfPtEspdY1Sb2f1U2E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THkP5GNQ3Tvd4jzeZgAR4EBG8pSDvVXPU8hWgbdE4R7dt6bmRZyWbhiAsHbTJebb6dPcv2wPZcvEsDixpAwkSRQ",
  "key1": "2q7P5qVQUKeu2eFZ1gd4QgLmNS8D61XqNLZN65PbTYQJSdXiad1iWcHYwYhR5D7xwTPpLTyeQQ4bxVq5kBugbuhR",
  "key2": "2uJLTkPvV9VnMDzKd3PCiByESAdt3t56uJwXXVcHxbG4kefYBk8XcYJtEfVrCxmeFafbJzYEEU9DPvubPe8E9v59",
  "key3": "3CX4R45jdozgSnViamusgRXVPqyATFNqGR63GGtoiLbhM7cFP69ckZk524R3E7D4kLg7CB9CPAp8mzwxP6PfsDVb",
  "key4": "4PEC8gthQpZ6vvJdAdTsSn9pZiULEWnCqERgCv2bYgtQDiTqTC8PCkdTJSpGEMAymHD3tAHbRJDaKG3mhramjPMK",
  "key5": "5TGypHg4LgBkz3h251XVGaCLsVdPAgaAyR4qcvyjpicsYH2MU36YnXomvZtf4UPD2ifm1atnk8Utifah2F8fdvVG",
  "key6": "5sVqAh2cL6WKnjfHRpUJBZ5FL8j9dPDHNS48sGgvaDNBm1diVAGs22ajZT5o4SC2jzBpihtQvzpBp477E8hLwnzL",
  "key7": "jyBHCkqSoNBkhdCbNnqn9WteUSAEJ6AifLNP3Lsn3N8tH3EW1RqoSRoooyxygGtJ2TcMRg8yiG3cNzB9CcLPR3t",
  "key8": "3qkHr2sRMD9aSWm6c7hBx6JXjbLicakCZ5j7Fe6hFDVNUU7Snod9kikp5b9mmMce1GmHjuytz9Y3hA8egst3hEkn",
  "key9": "5WjaUCehfcsVhWdh5KE4yLzv8tA5TVeMPyfcvXV4Tug6AkwRWQvE1ni3c4TPCXs3Ha2BPWDWjUCQF4rZ9vNBnrjS",
  "key10": "5HrthKBLvP2HNVC3vM8qs3gcL6CkNMvzmy4kxCn8aCNLo6t7C8kAGixDrjtWmPQnNCjVjiE2RNLKYvesHdie9kaf",
  "key11": "yTkwaxWN3mXjrsopcnoEsETUkfL5RRY4g3PbMmUD18s1XakkQTmkHRTVjrTratVLyfMWbwvsHHWkVencEkeu6NR",
  "key12": "WRnwNApxHZCGzCQ7eBDAJxJa1ozqC1cutWLbrqWSUmJKYaVXVc8eJ5f1A1jroHhwdA92whH3EAqjDz3UBfmX38S",
  "key13": "4f5S7nDmypNVFB82a11qukxC55JrLJCJy3VD2DicNbMGXH4aXKHio8Qwopjaa2ewutyVfiSrs7GdSvt6a22J2mYm",
  "key14": "4aGGosyicC4jpV5DtXWEHmnEesdRcbtQBbFvnqqivGhJBZeEcRNs4aekdGwmNrPahfuV9cB74hWFKidwk1AzgeQs",
  "key15": "49LqARJChDqoC69suZtY7AqhLBT7CqgQrD6dkr5kuZXXcdMaB7ubqmy4ftk93mX1zsJArjuPAwcs5tPoxtPpHHnx",
  "key16": "5p3s3fCT2GRNMpSvoyYxg2b4cv2LVXVRgfuHUDb7Ek3kqRe2UZfse5FE67TnpThuomPx6NNRL82kVRgCcZYwmx7H",
  "key17": "RJQ9hQaV2HB47NrieEAjVruCNejVXMARXSFH6BqdxhgUULbNKJvCyFjpLNeG8UgngmEYLuggGhjxSte2AmJQBUR",
  "key18": "5gmS6S66ny7o9MVR5EXA9TXkfHzdsn3FXBLmSWt1M5pW7iWZfi3Qtv69ZiNTXewf6wijPThU6gGm6qsKrP319EsW",
  "key19": "5bLTgmFen7ffkFFQ9zgm69SkYrnMPudqKRRa2FzARR9UfN2Ci6ocsX2qv337uuPyjk91SsTLYVHPvEupayXwdUos",
  "key20": "QqbowVibTGWyLepvH9EqWFhgv4mmThH9SQAMdWnwwm1fA4QismqQo3xgshP8AFgcuy48aPj63kAeGoHok5CdqDv",
  "key21": "7nC6qLiUgNGnhXs6B1m4wWJPbK2baSMZGjATZx379zR9e5KBCKCpfnj56LD93fdsah2BCdsacFT9U3ckWW1uUMo",
  "key22": "63tgea9rqs87KFwego7q7azcSAWZzkJCk4v95KvnpKKxnw7xfk5hr6sFBCNpjE5fnk4QXsWujHzwUqcQudBw3212",
  "key23": "4wCXae23RKNskyehyW21iR2i1toXv2NfQF7nf9BPiy9USN9qkJPTAXC6CNH1oz8pmuWjePyqZTvd1KaqtWrg5ZZM",
  "key24": "3dsakxM82WB8YbQyQ9KnKzf94VKykn6PTsZku5CeiJMtMmyx3wHVntFvYfRTdG7LoqwANeBXzdSFJMbMPrkZ9anD",
  "key25": "zkR5KwPuqypXZurwVbga52XErdeg1cwRPGqCsE8giVYT5bdwQJyrPKWbLjmuYJLUsLToeX5xkwvwUifJG2sH2s1",
  "key26": "5x1QiAsL8qvPfKym6ibQtHuEk4HYZf39CGrWAnTreDgz9zfiarwWYzTwWYVZ6n9KMrCrCRMnNn2gbG6eNZfdMzXB",
  "key27": "3TbsLcf7j5eeyuT2mtMctPmUYopUifyr2gicUQ7fPEvsxYQ6tW3omwLCcLYfM3LH9UqfKPLQSr5ZjqNAY75UmJPQ",
  "key28": "5Zu4A9Xmb2ND1r5Y4BZyxSbQ8p8cgWPejKhRwQXwsfeQzGhC97oiuptr72ZCP3P6CToWSqnMxptzVUx7eqS8U5SU"
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
