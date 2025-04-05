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
    "3itR9rEcCgtU4qKLiBUsHfi8REc44smsZkpJXY7seYP66KfVWcxFhJ983PPMwcSHuRSrCdGFDMaMLycapoizZagT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V8ggSDuRMmAhxHcbmrou8k2zKyDu8KP9VEKwEd9cYyMwEpkFJNZW2A9ix7ZrSGj56W5V8zHspUejb1B9FRHPxVC",
  "key1": "3eTmCMU2ASJGRGFwmrYATKRu58t9b7bqgeTXs9EDdCdTYyqKMwkXKARGjV9GTbAAwXwwDtce6bGiBruLcYEs7Lyw",
  "key2": "J1wwSho7wqveqtZpWJvtJ3KqVMDfUAKX9hYiQit2xsZvQiALggQSNDL2dXo3ype8XvyrN5JvjQoc4AU4SPmoWgZ",
  "key3": "2dxoza2uc1DVSKVKg6ZJLK1rHh1kpgonAvG4Ew8WUpCUTcazmkkQA9yMjDpVr2YTsSaPsWDKUFF23qgC93cbeuGA",
  "key4": "3M3apqz1rUidnNLBc7mnKAMGgghUXzN9gmTVxo3r9iw65iuB3kbYryNfTtaxf8msiuktcR8BDNsrh7remj6h4DGr",
  "key5": "ei6eNYsdqbgBVYsUVvuNJS3a1e891VriqxPQdUCegYfoAU9WDhwT6eW2WdkCginZfykXJcXobjAZdmFfaUNapB9",
  "key6": "DWqKXvH8324DFab4rrKxN3EnLDCHUUuTWHCeFRPQYYkUgHGYLtmKwS4KiKpVkQKZ2kTS8QadUJhnGfWNET7qFdj",
  "key7": "3kw3rHAJcsTQRBep91efw6i7e4k9iFcHcmqCX2dhb8wcGfYaeqyokTMUqewBbkKY7C5moUzCogc4kQG18RQmFZSf",
  "key8": "25ryigV9EHsSCJLwFLoGfwT48bCUQ9DeGo5xz9S99Z7JFGqdGQ7PrPdYrewqxRTDa4dEUnws3akUU4YGrBUfm1AR",
  "key9": "vrPBvHjxk1dpEf2RNrnY8gHG4GfR4M6pzgisWUX5RCJHT9ugGSjP2nsCgk1ntM8ruMP2T5B6XFPkFVAwwJyRShC",
  "key10": "VKduc7Gysdz7tZgb5exVnYgxCQCQQ69EL28ctNyrRSqUfbu4frAXGLvC5teZmSx8wGuHPen4tt4grWgEoz7Dqos",
  "key11": "5vC5cgEvAdVorTfkCXUZ1mFxYFVMy5CjEesFDtP2JVwhTCrweFCNapZRN5YYZLi52YHHodrz23zk1PeqtdMnsUbf",
  "key12": "3GosNi3PAWmCMfAbfE4L9DsdgzpbFWTLD1f9DtyVrnBekhi4m6RKLCsnCj9mbn8NKhz1KnA7xNGHwoBR8LtwLTGn",
  "key13": "rAgbbAfAXYXtAhDLW14A4BLYSiW5Rz8o7J9eVTByZynhTyVb45PihEr3SX8tPG9NnncxmacWzAneppAehpScHxE",
  "key14": "4GfL9iaEqSGtFQsrTAojgj8h4RrWWqSDvU3iFSeoL9W8EV8qC2GHJKzhiLxa4Wgye2zjQJbZshZE4RrMFBZYGDst",
  "key15": "3mvqzQKWvJRbSGQoL6xSQ4t9svuAgxXw5ow9nT6qEQqWqJHHmD7FpArwcmzh7uEenxbCCy23qq3ocoEGeJdnYZV3",
  "key16": "332YnGqHWUy9aTMb2RqxD4nVNMN27dzFFyeHmZmoX9NJxu5ZWyiBmKietZzWgq8vdB44EC5HTsGZ6KNzLBmrvBXf",
  "key17": "4TMpMAjrJgyi2tTtEox4WTutT6tzxPVjfLWCubw7wtfuV45Us4jgf4k7WkoYp6XsfhCvGDRntM8ZNUf7Xrhtpr8g",
  "key18": "Dyo9LJNibbU8LScjCap7ZvvcH1m1t5mHE6Nu6eP8UobcYHp9LsRKY7GFDwxpC5mWWfDJh8bisPJUEZWFgA5yxjr",
  "key19": "5PFAFKYQM343CqMX22oMqaCwomifa7gcskZJtXhjFeHPL7iinL7uwJiSzJfBMPsJnKnP3JYZPZFXFLir7UcHToPJ",
  "key20": "BcbzBCfbSAzTZCJqH14QXbTpxDL3Nwmk8iZ8UfcdBwHhFoshGmhoxjnYhRLr2JhrTur3gjfaGr568dfsoUkxWYV",
  "key21": "2pxFTE2i3ex6jSqHiJRvQbPX8xVWRqZTLnH1MdBUCRQUsaobc3MXWt9y4Bre1i9qKFbTgG1xFtBuk6x7jYdQqYEf",
  "key22": "26eyRfBxRQAnSfUcc8R8AKFMusM7YnMtxruptMLA5PUTEFnbaRtNmSnwYPymCWDFExw9ua55BHka8SLwQ1r3txuY",
  "key23": "p19wg9L2PSj3fvLaTXUiJ78km5MBdAgyFH7NqtJZVj45w85AXa8UJQcr1HxE3eKsNsLbGeCNbUtMYtSmNXgH6jk",
  "key24": "5HmQQrsskBMY9RLHmmyXZL2QZGeT95xFnaZaeun8YzEPrjQezAjrF1PDvwEuxZDteRkAee5vZHGf55m18ago2hqK",
  "key25": "4CTchjfA6KNBycgVtkKYP1DtCtZQKv5DdmwxasMVF98oB7pCU6LU4Bzo9CRcfmKfYpPr1T4d2d7nom3SyAW6Vb8C",
  "key26": "5BD21ntjhYnfWcLZ8dSchCWCKMedaTQxtACPoArUj9c3mWuLULCrFEZ3s9X5mAtJ71s2ANQJWLv8KhB2voBH9qHM",
  "key27": "sisMDRT3CwuojKGPcQ8ETFnHGKG9BVVr1dhnJ98DMKdu8Hf4rng2ppUbi67MGu7kLAABWntwBsihTi6Fga6s6SL",
  "key28": "4MFtV9xAjDG4wFg8KkggUTSB2sPR3gWnjcbuDom65HajqxhJfYfagiJ85aAe6W4qQ8ZLks2zexEjX6f6upi5hB3Q",
  "key29": "5BYFkvFNmvCKGXYSJSfe2tvZLFc9PQGXQhTUETVbWMpnaLUjaJd5ZayCUGWBaKXanrQ55mLBZVvrmQMgMa3LhrRT",
  "key30": "5rgwjEUBtX7iffVt1VajJgMrcqoVxkqVLo3RNBLnvtbnRFzyAqC2tELUDVt8GRDwpbYAhr945eSPRHE2VhNVDqPV",
  "key31": "4q7d1rRqGVLvQeAsL6zAz97oKKkgL2fYrS8rX9Dgx4kXVqMvVT13BDQUqBhEU49eohE58gKZcQJyX4kv4Gza6ZrJ",
  "key32": "3Nu8Mie7M6dExUmsstvLPC9zq7UkNvgCYhZ5Y81WcRY4r1zGD65FaF2jEW3gwTDfPVwXJbcTrtpzvSQSXwdrqWdd",
  "key33": "38Tys4DfpugEnZdJunMUD6JxoaYdZXBoNaf4KdEuYTa4SiK4UpyEDLBw6HHq3kBHcy3LuYFJTaia3mf7ayyfwBJH",
  "key34": "45dJoRNUZn6RAFAH4uQDgzHwd5KWtAL8aAWSxQmWkRhxHN18THqcfcPdRDa1SNSYrKjGJmTY72nYtWKR15Tnj5Kt",
  "key35": "2q6V58Rk6NxdV8PG2558s39h1mSjfrKHPyUXrtWvE4nMutsJUXcgg2x7cQW14vJf2KPEP6pvRYbMQzeRovJuzpxU"
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
