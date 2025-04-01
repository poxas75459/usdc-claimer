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
    "9nYoDMvSRAQXfn8qxKSFpaPq7HfT8PtL7ceKLba27S89dXcUpujCJ5JpLawEXVBKEgtys8tPcmvVo4QUJiQUWkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PRcLQxXfesdQ9JfdmiAKuowo1y6y6Qjn1TUJk9K3nkFWDdPfFBt3hrp8vZ6gaRvoRdxZYxPK8Kq7K5ZcKQwz51j",
  "key1": "2UKqLUPXXM4mSvBtxUvyh9fJx1DhpDTAUYEPUhhD2bjTGNJnd3LSJBhuGVabkYHQ3sx9Kf4GZx1vAUjwfRS1Myya",
  "key2": "WDuAxiau7iioQFafYrLpSLBtF3ay1nsW5EY34FppoUDTvfBA2omBbBsNj2QqYjawSY8xg1M2RWgvRUdG6EyGs1q",
  "key3": "64pABWGgVBgj3hUxA29fx16ipENP4YVjK76DcJz9usxLSWg7vwKR12wC7P66vx1bFPg2C27EKyBQjdWXfs6fPRZa",
  "key4": "5WCVZQJFqrXowsXnaEHwRjLJyeAmJcsfcQFAq2tVFVJ6o2oeLMVap1dWJA9TjKpiNDZhnFLYqHHjazpHKMCJ8CRp",
  "key5": "4B8LvdLXumD8fjK3LW3JWLRRvyXp4Ev1LiXbs4vaH5bBu9pmRwCqymQj6gYH1jtbXLkLDtVhQ5DVFNi9ywvW4B5P",
  "key6": "EZuYh3vsaSY7nZiaEhXBoD8vf7q45S9GKJsuaSbfUPKtDg7eG32qJa5ofoe2SmtqqXeV6LpYwdLr6b5brRgNpwz",
  "key7": "3AatDk9Tr86vT4EdB2xLsWSi3rVqh321dppEdeiWMzz39gcCZpsRMGqdXN2HzknTx1LqhQ94PRG3y9mGJKTtXhbL",
  "key8": "45NQmYwHJ6QSG624E8CfisGcY5TusLU3oDkedQBmVQk6vetT9ZDwdBV2UsJTjvGJjkNW88djyowaC7HEsRqQbxcH",
  "key9": "78ngXRapQuioqsYVHfKTRsruNyuigpHgkjJiunYzCgygfPqGx2HsSxHgy5TVvK5fmjqgAxrtSU4sGsiNvuZuZ3J",
  "key10": "e1CMEQSsuGpKbYc5mTFGbpyu3HhuiVAaaCc6g5nxpTG2E1tSzwxQCD6dsE9ditijbsAbmA4MqwcWtmKzAmLyebS",
  "key11": "Hwj8Sw1KytsaT7mSBJ3QDJEdSRFoqrruzFdmTx7sHX7C6RnbmpGf3jwp5V6ofwVWdhSUtbqgA3r9CSMLLWvK1Ji",
  "key12": "3LDoBC5xYLsntyxK1QqatSiDNhrGYCdXC3ynnsDZ827PefeM7MVrCY7J4o6wt3Nzq7PCxfpWKvvB1iMNJ1otYoFv",
  "key13": "67B5DKUC5adhqULYyqDemXgXfgAUr17i6iisZ19RuUbzrtjPkjQfTet4kCkDc9qXFT2xV1SMXgsS6W877Sefta3X",
  "key14": "5s7Y3Bt5M2kFQPjv2i2MbpTWQ7j8uMFTwNgpFxDtnJcWSS1V114hqZ7HRQqm8yLwVre4H3YofZLeaqv8QCr4JV1Z",
  "key15": "4DvNTMsnndosFDCkmFeW1rPMvL1tZRj5B1UCeeheDT8ceHZHFmJ3H6d823MouwmqxhaQMNYyGN5wSTUHbxDaBh6r",
  "key16": "2TttCCM8gHTNZn9Gmkh7TvfnT2Xd7gFtgVqsYLj5UY2gxAkUTbQBzT6HviSCNr8ghYfTxVwL6C3QPpH3N6jmgCgq",
  "key17": "2DL9VF8ht6cFyF6zMT4gfbcGSDMF9ejh2KGmgHka8YyACHZinxnfyWvjctXbe9TXPoMJRtk6vAscoBXqAJX98mNr",
  "key18": "3Zef1xM6DQD38D7EULWV9kRY11jgwNoP3Bq8d2EbdnaCE4Xufp6S95HWXxnT8a69nhuRNNbnDb94YjPgLvicVQjJ",
  "key19": "2dGixE867kcDSwpBajufRTKzcJrmPdBVXYktMDDSnph3VMk5mv7ws1mEb3TRNbb2kbnceMgwR8NL2gBVzsf2C8c7",
  "key20": "2jny1wjCF2szzvq437yDgydRatFr9ijcVsZzG5qvZfEHk5htwZJcgScPemkEfGGpwPA9UhDub5uyxuQbfMdnGTB6",
  "key21": "27RmENugdpAukzAzG8votvrU8qac6XcLEXMvcaat2W22UB7THswzfB8mtZ9ty1wmAjXtLdZVfS9n2mfzunNKUjAv",
  "key22": "21r4gDLPPozNo4w6w1CAXJLRtBMtfLbJvqrfTP8sdA3aBP7R8LWLLMxJwa1PuDcGT1vMPL6fcP5guhhHgTgDzDbw",
  "key23": "hkKDLf4hBvtXgb3gFK65m3kugmJ4eyvEm5EVmwehDBdTcrTxaeNKtz6nEwYP6ssDi471vLZtnc646ZAV4mxZipq",
  "key24": "VFDrbqNqLAjcAULRN1S4XU3STb7SqRzGom7MxhXnYfSJvNdSsPi51peDKKsbFbWyUL3YpScqBNHaU34dcBwaEdk",
  "key25": "2JEiyyNNtJ7uVuSFM9sKt8iuAPvENhHKabfcA3PUJysq8C5LiRiHXms2PZh6rcNXLJTxPoB9VwxLExLVPFCJ9k9a",
  "key26": "4bwSHk4UT6JC9gL9NsKh9uW5cS7Ab6DWF9uMs2XbKLqbJupqwF2Y6xt7bL6NJkjNyJDVWSZ6mCmYt2UWaqA2iuC6",
  "key27": "2QqF9qtgdLypGXG98GbzCq7Ng6tWvwbyxmaB7jLX7Uem6EHNCdk86S4UDxG7wJgNxz5zGwtKzj7fCejQZZw6ko9a",
  "key28": "2Uof5bqJLjDkhjLnsbLDRspD1dF6z6tnujcWrbqDnGwQEBiG2Ja8ZKyJw69QAutnhAD1DHaQeuLuMCkgkgCFJX3r",
  "key29": "2UvGsteawSJk32ZgDYpTpvX6CwQbMk2NyFynCwDJ7945cpjbkNZ3brkWajp495VggD8dw45u1NkF5P9LKYxps3Pm",
  "key30": "5UVXN3jPUTiqUs5ndRv7cBCWKMxb32EwUx9onAfNCHQAHQPRcV7iwgcWa1ZQM3kLTJjvbZ83vCvZ4P8v5uUsrnpb",
  "key31": "39SKiJTFFoJ2hevAWo8LoXaFk6ES2ogsYbuHwHagDWgQ2fyGBLHaucJrtb5yGQg2DfaPxezahwmkckYbrKJa3dpB",
  "key32": "3bCVWsXcvQdRBqibJyEeTm28j2epKWZScf9BSiM1cxVMFbHB5ZnU2JeHxZqPjTjLfEDEkhdHRtQdAumANAyEBNs3",
  "key33": "wEWBEwUu4yMbtNU1pjKSjmjsqRZyYSCi6odjBDSrNpAV9eaxMxu3TWZrfKeTeDnV2LzWzqSToNPdeMqEa9w3gjE"
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
