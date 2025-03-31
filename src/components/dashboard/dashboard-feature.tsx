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
    "2iw6s44uJxtUA6rzrcqrQ5HbUGsmTciSUJ2VuSizJbvZax6SNLVi8ySabXBV7iChP1NrucShJYQyanbvyz37vuG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPPrXduFhMxkQeenQwkDnYpM7CyRv9D4PYPSVKDRi1yhFmv7mm1kjLppn8FNUrvdRDkzKbUBoBCGse8yMQvva5f",
  "key1": "4qEhnMEA71N27WhQHjyCKoRadeypB35WDC7iBEoN7Urxhq85NPAaViG3dW31arhxr6FhLUpyNivgZqXppiLHj3xg",
  "key2": "33TWywPUuNAwUcXfKSBhbBZnWqHnBWBToUt6ZnvJtEcW2z12o7FvEULg7PswNSp8csfqcs8f5JeRVoCoUa4pvir2",
  "key3": "2J22kVyxLy2KtQ3kUfdJWHMchUPa13bDH1Zyr5nh5YuWvmQQLK5wEJEKGHHhKo4ZqkUzDV6ZbkNpRXeGnRotgwsc",
  "key4": "2gpijgCexmbYKhfifiXb1o5bfj92S5GCKXgXdZH6Xve9wrUgFeXp498Xr48UG8yrnAjdX4DKtRJYKAJmJ6V6CJ4W",
  "key5": "pn9G6W7WUYQuPopf7tyZdncMpXzwfNWE8voQQU2Bh1pXxCadPndwgfWJuCfBjf6L1nPsAMV4vCcqjTG929Cj2t2",
  "key6": "5wdvfEPSj6MT1Z5kQM7SWPvn8ePSDAEo2fbnuDL1WURmwTbPh2mHkHjWXwHGjHM7EDRbJGjABMesAhtigP6xwfvH",
  "key7": "5R41pdCoA2MWy1bv9PExwAv1CikjwWMed2PZmkboQuFRbboenpX33dSrMpVhxjAB3Jii2Df7BZv6YDMjgBQvo6wA",
  "key8": "5uZnE9Wer8Q3hrVFYGNXVDVw9ucfjMfXjeEiLVCg4rWKsLtL6Bvc2kJcMWnpfRnsTTWJpwTxbofWvANSrMYVwg2t",
  "key9": "3Cv5yb38VkeVyWeSGvp9iZyEwSQw9jn2AdjhLHbLRY5SLADcNRzqvGj2uPvJHj78YK8cyadFZHV6NFNWf1CG3zsH",
  "key10": "3JsMWVdMEoj8PdsqFj5fSQVJi3KYtja2CjuGd2T5oZjqepn7eKjArettn1xeEo3L1L26X39zDYJRCAqwbrSAuS1i",
  "key11": "YKNMktDRTZF1qXoXfjT8PkcNa5YJL5wTpTCqLG85MUcEqsGynja6fYPLEPCf7jQP45H8WomBK4ECup2moJfHrzz",
  "key12": "5rugWE1uFB8KfES4egq4hFgDWoSRhvXiD18qyVXU484XiaLez9Y3eHesPHR4vWTBpTnssY3TEdJAWMdC7gv3nRp",
  "key13": "28yc3RUAgjBTzEnT7UD35YcgAcangrULkPvYcjV9uK2DBhVHNm8SKnhZLF6o8eAzqVjhjSb6Yej6tTBYQkPr3Yk6",
  "key14": "2kNhV7cVCjGz7C6MdtjRkGhpE6QgMtyAjhDgFyHKfrFVmmMLNnK5bDX5Yd4P4LmoJ7GYXhc6QSjrxzvJS6Mu1AQq",
  "key15": "5Z45Bf4FJ1nYUrDEhwibzdtMrFunZdyr2bPP2nHpbY5Kff6c9pqSXLY8bfmseTv8YgTdhY8D4HDsVtpryhs1Xkj4",
  "key16": "4qBFbb1jUkwhxvfovhqL28VNw8SandabLvhVQM6iyip6MGCqu6tMrxrfpyeZJ6bknT3xkDBs9jN7xZjfQ148rJAZ",
  "key17": "4Nic6AWb1mQjjHP6WM9WpfV8haCZZ27F2tiX9LVuQgDWGiYgevEzq6Z2Qff7JfheNHgtEWCmz8wzouyMheXkfwHq",
  "key18": "sk9AdSZxS1fGQuk4bGmgfrvcHuCWnouqUvUrvUy6e3PwDUCk8jWrWDcyyRVuud5QeKfsbnMHznRLNahyyjtcYJh",
  "key19": "psbB6iCpGhnGJZPjEQZdFkqEHKBmYKCFZGSTETQWPEuc1pVmFNkCyvqA9A3h2vqXfJ1zNMGPaP95FpiGKnvynPv",
  "key20": "5NFPsnwG7gjcfZTjkfLKzhdqwhevUHNaX6LS7mGJzxRKWgTH7TNnW3dS12kZ3v3koyV7JtCLjCqhD8pU9SZbZihV",
  "key21": "M6H4HrzVzXqZJbmS9P4WSPDc8Lpv1RpMRtb2DwEHfLbU9iU7ybXCotVxWcEHPQ3NgZ4KjrHhPbWs5FRri2725gq",
  "key22": "45heFs3Q78zucej4Poakada3dSdzgq7WHWL5Xiji5uhxwCioyKRus9cULijhZnX37Nxu2kPqcmBPukbXP9zgRYAb",
  "key23": "nqFiAGPZfF2Rjtu6EseKGoH4pqA1XZsrgvDSPCatWxhyCPDJbP3qqDuHhZ6LRCfZjK3QgSbzZgj9scqixmPWKj2",
  "key24": "aj5nPTA5NGQMN5R2jwyi9qAB5kz6ZmzoDd72dREqCxWgAVP8pcPJjAbUt52VZCUwMckNBXFTbmC1dmpxDjZKVA6",
  "key25": "ZoVa9wCrQzmM3Nh56pg7rJqEELUzvT5fCb93aypr8tnyRFYxp2XJrxWCeEuogbCdd7TA5Rio3gvF5JxiosQT6et",
  "key26": "3C3ZS72vie4kT51NDFZDnBNKfBAsgcVSvhLV1vuJHX78yokMXeQguThwPsGsxAoSV9fpwF53Jt5zUikK9GkKtTHX",
  "key27": "5jKDbbpJRheJndkrrZ2w53KDjrvK8Rd1Spiz7eZfPXFp5UJphH4F4a1tiNjm8bbZpNdNFwbp6cCQUjW7rpbJZhWA",
  "key28": "5BMyC3wWiBtf93dzzX8fc8w4WzrYk7X1GtP1ChH158ciNdxXhsXFTMo3f6nw7BNwpRWNpu4fD3AU6QVxh98Ns5d7",
  "key29": "2aKPwTU3NPZJh6x7zcRP6jkMWoka55Y3ZRU3MRz3QXaXd4kNQbm7RTsi2nPr8ehWfdmWnzbWEkziDPFEJYkqGMrQ",
  "key30": "569G1EUKywMG6C5mTcKN42ztDAQjV5cMjz2dPRaqUrRt4YXzNDwJcr8xTDwNhg9dHD25aV1uPkFw4ZzxVANtNbnz",
  "key31": "3QYPVjuVsNp9Tan9fjUJiRAxQCGWCnBFgJnmHYdNrzqkmqjvwcSWmcaQxn7YLms1JAt9MxrE2PmK1nHigkbVr3Zk",
  "key32": "2MrDh9WeF2rJsxC2jfPzQTSmhoHvhQWrA4hC2hZrByePsQ2Sq9uLRVjD6GJm35RgAkXrATc5CeXQbkNQ3u9wdPRW"
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
