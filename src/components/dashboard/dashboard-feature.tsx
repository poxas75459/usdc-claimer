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
    "5ADPL9xMTYg2CnNRxesYgyKnKsKeLZFnxTWfjzyVZz9HafhKf8YChYJAfYNxmSDMDdDy2KPzGdZs8VAgWyi469Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBXbY5ktyG6MN41jgE6gdS8YbtYe18WCjnwbx7PQucjXyEFkwXn7cFT4YWVJQaYmcqgWL2dQFuzjQ8aNWuNMZz",
  "key1": "3qLXkQNtvDUxAEAxvbqbhKYcCbhMU7ov7LiNG4ySeDigQPrsN9pycuFfL2UfGWJxtbLwhwKvBLU6Zy8RLbNDRgR5",
  "key2": "4imCvs1VsRrbsaBevekuDSYnwaFKByuozMWfHtFtgAbnqtQwpMeZjd1VbXPzYERx8pbJjREDiKcRRqYAARN2rxsG",
  "key3": "5HSGnq54quG3cdqspgZo33Gw1bboXQDRYzxpMcyrbyf4rUFXvkhonMhz3xKRiVMp1yv7yvXaukz6TKgaktrEK4rA",
  "key4": "4DUxetGpidZHisdzkLMZVw3cVq1BNfKMnVCyDgYxFFqL21LuWgNdBsyMjEdKtG83Az21uyGSM1PpDuxs9un2KnMd",
  "key5": "3FN9YLYLZYsCJ2SfoEw3qhmfFVPe6UxA67JjF1wUUf9VXbbYH9WEBJqGKCXB66US1kAMNcD7GJrzPQpcu8PBj48T",
  "key6": "35x6HMPYr9rZZ4EwkEQcvkbk5wjQ6ekSDXebADsZYN5Y4STjTAqMfMgE6oAP5o44CYxwakrbcRdV93TigSfyyLVL",
  "key7": "5GLYM8YFJfaLT5Gsu8mFp9ut8FXCQrQ5UrKgLj5YzDHV3iHpHgPgsnLUCusS2JJ1ukchwcy2fpNxxtWxMSG3HZrn",
  "key8": "4FTo22yUSXHmQdezd7qsEzCWtbBD5kX1xwhqnSTk5af9f1jb1i65kqcZSenn56tvUr6sgE4WUjQRk2aibw1mD3fY",
  "key9": "vsZCNH5JsUf2V8ZgrBA3mdUhQHaUXgZQm3u1ndfYZR6CQk6TizYxcvpGKE8UzVhbSD7TPdpGKtMuDVyfMEx3AHR",
  "key10": "2uszRomRDcAKBP41YbKSfW7TSKecp9ZV1rRQaMLgeNDjTXHSVky6VQ89j9y2jztJKAyVNAXF8eHA2dmn8SNBuvmr",
  "key11": "2T8KtdTVR48WWLqPy8znxxLRctHdXBa4fykuVgrCz8RefdasCmhTPQcKQ7gkXrR2dN4BYB2AWiVuGA6JaBfYsVBb",
  "key12": "rVsD6sppEinLHLbkeAr2y1LKqzhfqS7vky7Y98iRWfkrkNrktP3ktfjcVGu79GUrb2tuKnBWH7BbwUPbZjm87kf",
  "key13": "4cthSQYAwJQ4T7tUHBn82RaRG6CgZq8wBVMLbKoDv8JMTNRDLdHA848BqDSK4pNY8ggpfu1bFLgKkiEnT7RCwZ1M",
  "key14": "3Ryus9K9KUB6jRMENjQohPA2rEPBoC39FZu7d2i6Sipu9CfhFSYcUUWezbBDuTtTDejbYcwYPh8zqZRPi1yuiR1J",
  "key15": "zrShg9QWnWACtezRSBfjULkhR5hwb6FsQ43dXeojzWU6H6DXUWxknUjhTaydj5E2CCFYKw8eGnHLFNaR6tixjyW",
  "key16": "371CsDGHyHrGy5c89hZ2QmUc8k4yzxQpPhuKWtTtUVLQcCN3Pe12kJTfNg5yZYXHdbLEXQFXSxb2mG9c9BoUyqYs",
  "key17": "wEXSRYmAh4y9jxEPbjq2CS2iw3cVEEvp7oNei6jmECiPU8eKiC6r4EDx4TBvpTC45yjDQrdTKqsyDFptPJcJjfm",
  "key18": "3HoLmG3h9Tj4duE7Crp1sU5iqzkF3A82aGF4iUs9rjua7pg4bG7vpZ7djtVQYJYG4G3WGeAQ5wJ32dQyvwS64dy3",
  "key19": "4FA6FgtYvvf99Z8um11UZjjBtPEiaTreDy2LZUxmAcasM2WbHnCzBnmLkd5kRvE9HojFkJFoD7N4id2ZrRVzsuPu",
  "key20": "3UdexhQFmhmUZXTvyFgDmX5CTnRrP7bJCLvNpPH5jFbQPJTYwHJPrjsQ9n1eAg63c9w3pjmTERhKjmSGk3FQWMyU",
  "key21": "5yreSVZX5tbbPQJpcKXgDLRkP8VpqEvGPsdw9wQ6zBg13pkrswckvXEEgHz7EeYRaTEc95S5vRyMz11paDfiyyqq",
  "key22": "Ekv2u58Af7Qoz3Do55jd9VVrWt9xwkDkiGeSoF3sXz58nf5EwSf6UgFtoPTNYMZf1eo3roCLuHzs29JZDvGGe1e",
  "key23": "38SzGRKS3thjHp3Uxdw8ijxdmbMZkKRJWXq7drKeRT2jxkHbrL1m7zyqGSUaRCuqNrwKtwRrfZUeVNeock3Vx2Dk",
  "key24": "5pDXcNxfccD32nsPg7K88BD6YJ9Jq8nRxvRUryBk8U6Sx3TrxVw5GtdXNXPioceP9eaqnLn3FLpC8MCdT69XPUFx",
  "key25": "2LEsa1CRnTDQmxoN1HoCmvjtra7M3ZXryBVtApdMiey1RQJZZSuZLXZ1TwpmcRbaPFcobeNh49NvLBg4JxD8EfBc",
  "key26": "4sgpE5jirHvHMmRLNu9CyJ81BJAJ1udLA4FcPBYVjJpbJkbxGYb9y15LwuXW44MufrZ4X7HbPJzv5vWXMJXWPyGH",
  "key27": "YDcXf1bHMTjvX8pEE4HxqLij1fHAyPAKXCFjcD8VDEvFYKgNHszZT3AjM2NQLye1JFMvHPyeMVwHdKRExyd6a5g",
  "key28": "4uK7GDkpGpoh4NmXdYfibttZRNMKW8kAEHYuTHz1eySXZ1PJdPiAuMRtreiGAfP44H8MeRhUBMgg9fR5CTbNpbEq",
  "key29": "4ehhGKg5areLGDqaUqLWmN1F5MonXQ2ESYinHS1cp1L9okZZAqd9dcRqLxjXtNCRvgbFwDUHAbMHhg3dpcxh5pDp",
  "key30": "XTMDXXUGjrjxyjWtxcdetu9UeT1STZkmXXWjRdpvdTjuFK2DtMX2CdopiYcNtnAR6xU3TzeK8XZDT3JG2sbbHi5",
  "key31": "F6MadZRakF8ZBKkqKqPTgtpk6xYGGjtrRcMsGahipzTpj1RT7rdgZ7jRrvHk7fEcC9A5zqh2CPL4xCdb28r1qzj",
  "key32": "5Z1vnecjeGrA9ZhHAfef99dj7CTmjPdBXygey61AKKCX15WdaJrjNFGNKByGZCbf5J3uCLF4bzfB2djZFkWDZRxD"
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
