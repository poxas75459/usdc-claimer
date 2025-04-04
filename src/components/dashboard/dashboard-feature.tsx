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
    "rdJELLN8jDmtwF1QntQ7xiAmEyEGNe1oTMFKtzQdC2z7yn8ddkoiJpSPGCUugtffE1uzZLTkRcaeWzT6j2kGJvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeqiXbTYjAajiHhhJmqQrUutWQdtHqjNE7RdRDehHmQBZEuFSkgXQ4mrfYYS9GMMmXASrv33joEThUkTMC8fhBS",
  "key1": "3cowet4VgsQRRycM3Hi3TxCGGd4hJBHDdXowqoaEd73hbFLLTc8XUbxybaB4UwcimqfsNm4FCD2sftBTu6WUS12w",
  "key2": "2tXnpkVyxuKjAEsBUvoRwZCEhWwQrysjEVzZRW5BuQQgT2HicsYT6EMDNePRHTXqxGJFWbJBmL5jHJRQb5a3RYxf",
  "key3": "4RfoSt797gGceVd6tkBJQqaxecX76WBGkbsbJpCdWpVb97TDm75uovWXbr6AmPm616MYmGLxbetR9nXCbtZWGBtV",
  "key4": "4N6PXgny5FuAnGo2hT7dabsf5FShPv3RB7YPJTdmL5y6yuwAyq7bxQsEyrFUxHoGLMBhjwknvpmWwhoVLXSLWRPa",
  "key5": "31NHGABFJTwc3omA5jMkyindLD9VqN1TH6d8NQJpd119rW6DGG5BaVencc65EP824Vt2mZ8fgGActsyZx8GTH9mc",
  "key6": "2miy5VbsCQtPw544iUN8KDpvEmrvTRH6PnYyYoK4qB2pWD77VrUwqmWiD9kqipee5bDVhwkiJTsUEpKnLX1aRrWe",
  "key7": "tzk82gRraiRTYeErodXFdpKPfcXPRemPoQPrcbAwE4zU7Pafwc6uNNM3Dy2CrLaY3heRDu3ahCb3s3wjHRJDxhm",
  "key8": "58sahLCPPXi6nvCoBwCfBRQWJAPT4QfS62mr8RGn4n2jQ46xVUomXToS2QLAfgBczhuLdKmboc3e7KvqAosBaK2q",
  "key9": "67oG76viFF5RtrJQbD3EQwCdT9x2tcnQJsXFgsrH7fjpy4k3hTqBimamvjcubS1uFtPuhWcvwxEuYaYiVsoN7QZu",
  "key10": "2H4EjfxMagWGeqig1ka4CS8H6VEirGRiTC7N3Ws3NhLfEAtWR8KvGBVXi4vraGJRiUKVdv82RiofwvPpwLV3CaoH",
  "key11": "4b7cXrytV3H7V5HtumrPnuvdwNeGeMDUSsDu1Jy7BpA1j6eMEhqmfj37vUwhGGLY92QL4g2b7zqLnFZrB1Yyt6fW",
  "key12": "4n7L2jdr3tZZze4cT9AzVHrHWLB2TCM4P8f9rTAxrhcnWmqaN2q4TfCuVe5NZSJN2SJv15Yj6HfEAghejbYos9Gn",
  "key13": "32SnZPK8YLJ4VvsUCAt2LdmiwiQFC6cpAEqmUwA2Y4wvzaCCK7XM89AaCa4ZEP8ufy8Bd3ReYmHY3fAWAkHjn6Zo",
  "key14": "GdojbdyMAVj3Xwa2RPDVi7o1o2wphkkLzduYUDZxmDkdzGSsvtdVCJpH6btz6JYJ9zMpdAsV8B4kWonvvMJc6DE",
  "key15": "28BZmXtTHvNU4mtCDNZxPju18WcPhWSnGr9WHdZ1ZUyw31rC781mNa52sf5qtjwLa88bKGFMeREEsRPWcM431iCh",
  "key16": "4PKM3GYH2qZmVouFXhGHcsivNbVBqFGxweSfhkATaj6xuSqTsJLWmw5ZE8X9ZtLyxRMspGTUEwHsojG1pviKLFDt",
  "key17": "5VGXT5C7LhLnEvNbBTmTeoh4UNu9LyKJHHesi9ac5PrKWfM75VXj2fCZNJrME5ZKwKcdRiC5BgKQoJEY9ftDrsEs",
  "key18": "2giLcyNYGPBDmofZFBvTuUJ5zv8LfutaGE41XpH8JqXn6joDp5QRFuKRQoKp3CSFf49r9RLgv7EYy3ttqzMBuWJM",
  "key19": "2Mxip72myJumSR5gU94j5Qg4qQ3AJ6GXNSpHsHRDFpARHKyFExen1AvTVS2YfUos49AKqkJCR5hhsAgMD5GwrmiZ",
  "key20": "2XTLgN7zXuV7XitL8qiKTrRMz2ZTWcsMUpU4D8eH4C8eRuNurWD3wX1MThfTCt4SuT31CdxU5en4dEcbM1amjaXA",
  "key21": "4YRvCUnja5S7pKbGj9C6GXJHThbXDid7Y5bBb6JMDnGRPTWyHJf5Tfh5ACo2MEYtA8q1NGUcaoSD2vhCAv11Pqio",
  "key22": "4iC8FqMCoM5Y9vey65NQDDVZimq2WmG2swhAHUYvtpxzpyggbf86wucd75tGL2zfwPRLbUUAoEns7zcC2GV45B6K",
  "key23": "5GbEWEaj2SyA1TZLTTWYy3x6eR1JJkNwEKkRdxLgDZcZSYGKxwK6zSkhrZ7KF1TBkCsKngA6LyV1tKMwL46AjcR6",
  "key24": "3zwJWPGywiMzfxRv3Jupnqcz4vURaS7r8tjVukgfWP9gYEFAFWYVJxX58facfqdNqCZUdYCkqWTirt64UZoZPp8p",
  "key25": "2meZZLgvEkhNSYmbUGvuXoemCMwXe54w2zEeXE4SkUubK3wAKau2KQZyvJai9ox3RZ4Ty8TmrQk2AJ3HPd6p5voD",
  "key26": "3FHJTmZckGcH55SZP8Sfi2ZTCneycYPQVqxss59x4sBixAbRe4kKEyFbRQXtKZr7zvr7FbHqUJUERoDnWcpKieG5",
  "key27": "doug1APJLcSx8cF1Hux1KA9vHi62vjfi255AhhQM3bGfFeoFh8VVkjaf1M6hnxyt7cUPMcBxM8ZRbGYi4H7vYY7",
  "key28": "3sawDZZoB6HWqvR91iZKeRVSPfPTej4AEsH3twH8E7aZ1GFPUThWgXHF8MzXDrhNu3jggG1U8yfJUHyBhk9ADXyL",
  "key29": "27yc4ibcjbypQC7gfV4oJ3cPm7riykT4YsjL9DgyJ9wZzMDQ7zu3p21Fwuuwzjrgq6LJieUqCbeBS7cvbJJB8WVr",
  "key30": "2YN8KGsusGJD34CUxDwxQgorqnDVkrgFKTzyKvnXWbPJSHzsJLsPSfFu1gSehgxRxkiadKEorVoCbwmx42D9mVwM",
  "key31": "4VvHpHGSZiVQsLFAcKBAh9R6hnPBq3SARYPru1VUvnkWbtaJUN9sQpTCiDjYaKYCHJ6rEkkACiraVsBBK2hNB8qe",
  "key32": "4Ysd44XJPRUpDVw6BgdqTWpoCrZFSRTW2ofxVFq2BfPsHPN7YYVLxoWnnxasxPZwWDFkQhA263wuCmFqFCb92EEB",
  "key33": "21FbAFD1xq25q76TrNLnJ4cuqWPSt3MHu3qNufVDkVRSrndZ5UASt1GJHbuFxiGNvMR4HXNDr37qA8zREUadfUqh",
  "key34": "8vSqrr63K9qFwhZsQvuNN6fJUdRUztQ9iWqqqLrY2wN83sAJM88V7PeBPjpgkxh7S7Ur6JzHUWcEQacn4Vt9jFg",
  "key35": "2E8yWkYYh5QiiB9JhbcuG4u1MGkfUXuQnZQSDrWBhJBottBGaLVxtrDNCjM4mVHE3jmzCvwVbcQwS83N5LGF4Qe4",
  "key36": "LeaM3qxudrxmampDjnSckbC2GpaXPFUP7haZWA9UQz5x2bRgbTvyaJYgsuz7FQiCh1pdqjxtqwmiGx7FWNPGKXP"
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
