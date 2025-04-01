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
    "2nk2GBhXY8veKWtYa5fw24tK3EhJHwfeQ6V2MayL1gK2BMSxBbvXx9nobLnJr89zNSBS3iZ8pWYvcFemUVThwDcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYVLTCt3UvLpYUXQdQgVHNbuhCBn2G5NSQH3V1puq1WyBnRddq1hJ7zfn1LrpkxPNPanc6AQCES99J1xdPZix7k",
  "key1": "4ZzM6e2dgZUbup6aveRVxFc2e2qvziXRXfz2P2h9JGgHLhsaKgWawAhHuoGauWRYGzEbrHf1gFFLYg5V49eQM3xE",
  "key2": "2AxXruTyVopZgEeMUincBWstETqV6adbNZ1qY1rdzsG15vMgnrbHbryFYm2SdnpDL5aHqATfrmjr9XgtF33Eggdp",
  "key3": "4N7Vhfvm7kJ6FqKGGnEZzzBgqE9pHMomkmcTnMTDJcxuf25HZtv1MMA7QdqD3GJSxwSemVacvBUy4U7QMadk8ZRJ",
  "key4": "49NML68gKYG8pCPQvof49QzHnizcvWKPdS6XMazcWBqhqZc6iifeCaNJcrxaHxWCKo2xCV5Dmg6jqCf7oLxMAjYD",
  "key5": "54WDPZBUYe8wHt9aif7MUwyC6ttYU2TUyGeNfkfT6EWdD9GbqbDkQz9BBMNcZTEUCTvKCTsjxKDbnoHoX2Xwd5SF",
  "key6": "49EeUocnkvJpkUjBu6U9bjhMkwMSx5GAfkFiXqTauaJRDdGgNgPiPwXCcmFcB61qgHVNEpEdsfQVpp8qqqCDtkyf",
  "key7": "5hJPGA8m93roEARxaKFyAba9JeRVRaHCsqwSWJ8N2H656x9LGrcNZtqGKbPcJQckoSueZYoqsca4grPsMT57kqWK",
  "key8": "52MQSJXU6iF4VLeBQFLVUi4MdiX7gnRyCEru3sb35iAo88jBUrZNCBemrWkFpB3Hp52F2HJLGqXzQPX3xykNPAZ7",
  "key9": "3cgNtzicsSoBYw47WeD46c9USaCdLfAv8Vzoct4vjDBMAb1MhUEwTKBET3kkVz6AAvrAwX2Nsd9E9j7tPwmbXecp",
  "key10": "sVTL6BAvj5jJAZk5kFCphxFQ7spcNgF9gDDebVFjMjeVkw9hpZPyANtZAe2wZPXcddNZN4xXEbEwcQmPWGj4FRq",
  "key11": "3t38bHDwRSQXpHvDiJ9KGYycXX7v9ExLvMQ1EUpYw4Pz9LHa9DwLpZG18Um9hJu3m3MzXHt3ic3hstWKyMzM63bM",
  "key12": "348jGWmD9M37nqgNBPfryVUQnmByBCPg8VqvJwFqqJfWoSnpd2HfDviKppQVGT5iqNG5sZn6uQ2qgpsLtpiUJAa2",
  "key13": "5yKZJLH1KKpDXFRq1kmULdrfudyaDSxTBhV45AsA9nc4cWnCpNPuGRK78c47h8XbW9o4KFtX6XfGzHdhw17WEFWS",
  "key14": "4xDL6tLsbmZjCURoG25WHeRrT5DX3p2vBfRbFSuTMSGcBJZBrxuwUXTyfSakWy4SD8FnL9NbXhefmJNEGsFPRnav",
  "key15": "3HGc3kTAbBC1gd3aEXpsPhAjTCkMf4r4nC5UxdZDY9mPMfi6EaNkYpY5RRGiMid5s5si4G7cYqNMMcJ3kynoARs",
  "key16": "4yk3oSyixT9ccU9t7ZNWPVEM9wdg28L1eFAb71iptbPKMP6SjZT387y3g96ta3eGvNspc6y6Fxp8Stty2yuNuGpf",
  "key17": "41ZVLjR1p4Si2yHhEYJokYwo1W59YCahD18GavgBMqGV8FHqEVaArVXdRvG4cxqqSSWZuJQ8F7AujBPC3VpM4fpz",
  "key18": "5u5Qn3ECRzn5k4DqazxwbTgyMb1J2KngnezxJXRdqxLqFFYtcPKGesnnALChYS6ccwqj3Zx33zbs14whGQgjvMR7",
  "key19": "3oeZuHb1jFWV6rtGHjifBdX3PV945XD33BWaiBTeuwuYvrwznAFrBa31bp4AFSKoGt4mFZczwuwnvB9yKUX3ccx5",
  "key20": "3TYeRFFFL8ErMgV6pFRJrKFJBpBpFo28DLp96QLAK1PmEdau7ioG4oAFbpBZjtVu8qgzHmJUq3U7F1eDJbEkCQFB",
  "key21": "RtTX4RjGRRuXX67XpBt6CkHdts5CRr3VB5pBY7C9rMvnaFEwTQZjNGNLiNsTJvUDgmXdd1d4cS5kgBmfGdG45ta",
  "key22": "3bwq12zqtoT6VTnrjheSFiDAvaw2ofxeeN1eR1Z14DbouUszR8CxpuQukmDWVETB7ANzNkZWD6AmEr7SBrzvgPv7",
  "key23": "5P84eXeuPai5ENfUn8eKqqrjGT7Mps7uw5bKkjXuh59BFwtpYX8qKPSVVyWHGQDSTNXD7VmkNge615YsWQtgEhEY",
  "key24": "3EBgKWDNmCTY6gvmz2zt6qsrYWvripskTemRCNwL9sjTMx3ME4pmBjNvbSkEuJmPDCsyDpb2LGonWjDn8dMo9Ztr",
  "key25": "3vTVK2oNTGjUtGKb2zWFk3urLHQgpJn5JZcqeQ5sPNvDZUGSQA9ycTA7CZgZnBciWmqCFq27jCJ2MqZ4PGkjNxbS",
  "key26": "xXgHHzWA8f91FHdc6i56mjCECoDZoiYXvzaBWqVPZDahacRXg51AFe2GvpTFM7KUxcrwpoXBQJKur4vtq7xacbA",
  "key27": "5qLDQsxP1B1um3ULNpStmhmKLEFqyaUXkWmKck2kBhiiuj7Lrd9D29zHhiP3gZPtTH48h1hpidJu8xhLXLPGDZg5",
  "key28": "5rQ2rDvFxTnZwPjEYhzoNY98YD5W9AsJreMYvkuww4S4iG3dMabDW9aDS9R7Q8iCNQTAaMF8teZGTsdfFFi1AJaz",
  "key29": "3FnAsvd6Z862ST7sntDZk7T7bTSD1cU45LGLL1kpF397WsjhRwYZ87f1ZAcni1yGW2Z7hH1enW2wPjPAZpXGHL8V",
  "key30": "37DZbVsjzNyc7tbybzEgtqcoQpYfLfde3ZQ1ZjcqiJ2JB4jzRYyagYvgBc4efx7to2NX2vjoZ6VKSQ4Zg9E3mqu2",
  "key31": "4ZFqanpfjwiebGbrB4Z2NPxGA9hj31h4FtggpNxLMW3hSjhFMp7xwgskfabnPRQEPDHTwFRjF8KPv4h5CrnPqLhv",
  "key32": "2fm5jkx9PnSmdo7h83Fa8enrAHdTwAz5gcM9LXJSridt9quG3NTstB6pABf49EUVgWaw5Wyb1947v1JEi8NkmXMA",
  "key33": "2ZCHU9msSz3LMiWduAgAUevKs3ccMniTnEPfCJHcqPQws2fQQQeQViX2r8u54i7amfVB7hjXaLUA3GxEs6fWEU97",
  "key34": "5WxZcLrpJLNyvJeirco16E51Y7nHtwcdMeSHBk5ptt4eCBxcwTawn1QJvw1sAQC3y83K8GEM7ndZWftVFzQLb2Wt",
  "key35": "EfGUvfdM6rs8mfyEjjSecQGgNjfzo4RuojhVa2fb9Kik5mhXqTxXFh8p2jD6CCbHZ7H5fkrV3Hkom3SaQqAGSDh",
  "key36": "2qogoyBMzeHL3Z4RmEoPVJwYbJMg6sgQg2cL3XHPAdBSUMvci1AvuW2RWzBRyWETxsKXgahBYKW2bw9xdPtSbFZT",
  "key37": "EyJDTxMJ2kV3UTrDp5Un4heMB7m3pMk9HFDeLGvURCEaJ7YsEYuxzyAuqiMUuQn7hiMpAQwYb36LTaZM1vwu5EY",
  "key38": "2VL7KRg6RbifpS9C8wQtwwpFc9biEzDWGpqwmcENrEv82B21LWXkEQnstusTZr8TXqViH9E47vhtYe7DWzXEhfmL",
  "key39": "54QxVqonDhnYe96G66iMdGDUQjFiYGgtAF5N34rkLpCxSg5yKdhCPDJpkbEeJzRrwhfYTTVBzM1zfkKRPsCFkx5o",
  "key40": "5ZYsKgtGGXQKmP31Akre9br6yosv7Ry6rPY1GDeLDFesX6Z9wk1J3ehdopqpP8RmDg1xwysKjjd1xzatwHcWucDS",
  "key41": "2u7VfM9GG2uR9ErbeqKNM4UM1wpqCqpKHWHKnH4Wxc78QiMK5nrUTLb3ybZFZeRKyNU5ANM7re3H7Uj3YGjzSaco",
  "key42": "2JpcYXHEKZdNECvWRCUFYoz1VUSCkwoySacvyjYavdfR7fcV3xL69mpd1a6XzpMjfaus4HnV5KKwp8XWrchtSUuv"
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
