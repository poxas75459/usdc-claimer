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
    "5a7mAKMnWmZrQTLbnpmjYA1oagoE7MP7VecTcw13xHNJxYUiLeQqZ8swZohJ7ddDBD6DYntp2Wyw6AhDdZxfTjJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybPvZm4eBfsgnYpsUj11eBNSDYdnz9TsmyUy4T3CNfq3LJAF1uLtoHdDFFFb15aGS3Z88GzH5MVSxKDb4AfuUJK",
  "key1": "2gw2jQUyfYFHNUQy8Pdbrt3XPGEH4k5U14JpfbfFvRmeeaPwGtmX1jtEYknmh35AoCn4ETGNoZ11rCV1Hzy1aoD2",
  "key2": "3GFGmgTdhGh3JPvHn34MonN2iquFwERnujH6yDd3WiY7RcxxHGy5gdqkVcScoEdRYnU78WBRgHwEsp6NCBpx8fRb",
  "key3": "2krERyZSG2tNKBdkA6JkkTmFEY9QdJhwZW8NBd82mH7bHRUeQ1c3bJYE2ifx3V3qPCDipJBj9uESpaZ9NPJQtkKC",
  "key4": "5GzYxUKREn39D53MKiCnDTPQyPNx4Sjo5sS5Mp5kCUeVJt6LVwMmNjYBAxuE28xmbmn5ajVyASp6fHjwZkxvJPYW",
  "key5": "2Amuz59EsdhK8xdigh9NcVzc3EYwYnyAmTRJkGreNjkJAmect2swN2zot2nSGeZLxG8TLZMiKH5k3thnq8ibDTGA",
  "key6": "utHyQHwHNhSXKLysYpRxDZu2EHYm2QUw2YnWuiEzhE8sRhabGH9H3xq417uVJFfrHGf3w5gBdTEkBkeinGg29SD",
  "key7": "2j1DNrazwPRECpBvrK9AC69Wsb11BvVXUHD1aNRqcFi6T315zGpubp6wScDWMMBPjqUAYjXiyWd9Mg9ijkq6ZiQi",
  "key8": "3h2xNyudtDgKsykp2tSQFwxFYy8G376o6FPXCnyqtHrHYqy272rLovJyDRXSMsrphSxNBxwQejLwjF3KPnweRbuQ",
  "key9": "aYLmSE6UMz4iMg7ECDowSsXeCGRtBYmYSBBaf3EYvrvyFfwFANmDgg3M3utLghMqfwwrLW9neHcXadie31RfawH",
  "key10": "2YgeRYfCMeLGCLkKsg7EbKeaXhnjD9ihDEZ943gC63PGdPrvNLShydtgh9rJFssJiUgdPLsPud2LfphumCjiJxTo",
  "key11": "jPYDK6MfScsVjbQxCxfwZCdCnSbZNiaPaVFM2FSAmv1XMGiEmgBC4GmgaAkf38tE1nc4EQbsYY4XAX3BZL3ES2p",
  "key12": "2rk3peibSqjugFpvZREPq17wfBwSLN9b2kEsWxqV7nb46cU8aec9zPmcxRFQDogh3GdN5AaAgc7ygbZ2SgK4CYXu",
  "key13": "4Ccg1EakzBtyEXdZTyysMbcwdCrjViE29bD4zbS97eTHp1nZvYdxunKFVD6AE2xGpr2hvva1g8YQQDZVV2FUwNP2",
  "key14": "435NVGKsdvShWgSL7cmktNacJCKZeS7CFnzkcA8pPYi1iMoJpP4rCLdgVnnc8mmnF3jU9VKjxYv3rT4yXB4EVvrE",
  "key15": "3RTZPm2dFgUuEMfzRmLFcqSESwRp4PukgmE9bgKFkybWLDWwfVNwnLt3uQdYxh8uRJikiCz3GqyiRb97RKRdxRRM",
  "key16": "3RyZW9FdPKVqzMLrebDANmXfmxCC7igTcV8kXmi7PKbf4z3geGWnsYEMxomoVqPYfM4tmSovtQGAmewY3mCXGQXQ",
  "key17": "5S3re3vUMpJZYMmZdeYv8ctuGXiw6Rpb3jkfHfKvZdVmHUFvvjaQPZsoK7dhfB2apy5SHh3AhtGB7jHDwiq3F1d3",
  "key18": "5ED6U5PJDmWymoqNHWVmqRokX9dVHvVXmNDoV28pEsSHABeyxWtZg1kq3CXFpJ5Q5VpXitFzaJzD9DHEfwyFS1sJ",
  "key19": "ZzqXj31RAs3pcQXXTBRDQqVPtFDM3HZcmCPhTo7gGEHpC6fDcyHcBmmhLpJaLEGLppu7HmUZjCZxidZjk4huyYP",
  "key20": "4pePeAHRr5f79grRopd8rZr1zizaudsvL1jN5DwyXn6PZsjh7b13kMSQ1MnvWNtGNyrjYEisWZPtsixPGFKeCmQE",
  "key21": "4UUWgj7Ak6ekAfLRgJqvVC6m7L9UAkaZnKWADRARqEPDCQoLELmsEBJyFaT7dRxUxCQM7G3RV9e2Kg5avVPSysKi",
  "key22": "67eDnPWUMGjBUfkf4QKspjKoWuo6tyhQcTya8s7NocqNxDeLwogwn2cHVsvczLjEkDsYz5FkMg6EBknPDtui24Ep",
  "key23": "wF9Wi34JB24H9zCQvEjqrzHGHvHDJcZ8gRrXrfjCubo99BxkCmY14MxbwXPyDQxCSQYjVy9YrdpFFBePK6t4o6Z",
  "key24": "3qF5NVry6CHChKQXmyR81sRpaC9LSv5EzNVSFi3UGYbJHR9GaD25RepYNtiCrf8EQpxWcSbuK42r9CpHZkax1grz",
  "key25": "5JU9F7PZ85d66KBuvKYREZ5KXtv3PjSEKcnxmArF3isj1UBf1q4GACmnP4fTnLAQsQCq8UjbRhofGhZqnyZ9Q7ex",
  "key26": "5VcdvqQwXiK6WA6BYFD999ZXrsjTwdZVSH6hX44qeqcpK1MHg1La7X2EAyj2Nrp63QJVft9LLyr68NVhVU1bUNoC",
  "key27": "5nKmDo5vGgCA7Rk9C77uRAYrJnFhRRycYD3tWJhJ8dWPpSMebuk8jpghbSfqtWZ9EtajETUhRQ3uQ8f76GWRAfMd",
  "key28": "2QPqqq2MzUvuyc7BYkCSFE5DVJ6bntgeaQUsQBtBooH2ay2pTWARXSpvjosnEamYuRvs8KfkrLoPDsWE5j3HWyAi",
  "key29": "BjQEA4oaDAqjAi8mVj7qwYu5tppoAgjWjgjGC2mBiL1qUyi5wYsGk8SejAfGaW1skZBhFDBJcEiFZZwTgg9nK6q",
  "key30": "3dYv3TLU3JAGnzYBuN6YCom93BUo58po1mrRUg937YKPxy7MjXesU6TDMFTkfGCkuu37rbRE6ejoboEzXKxrgqZ5",
  "key31": "2GbLFEspJrKJPacV4B1yKAYTLewNMJuGw5c8GTjMJH8iS1aPgt1AzEsdAZ72Eyj6wBRvXBUntLcBKesnd7wjNBwp",
  "key32": "3vRUEZDxYuvyRLPfgCe9FTns21nLszN86gzfWJmX3avArL5h8QTZqEsUPuAsT4go4A2UfuDT5ytzVkQFZmtkY2MG",
  "key33": "38xz4YBSErLPeL1jDxbsbgXuLt6MoVC6VKwdWosxUw1LmiMdL4s6RAQCJS3ZuCo4qVtZSTmi3EST1xUii3Qmk999",
  "key34": "44GBteBQMVxz6W5FarnsNPNqSeRJV8Lc8JBqXNsNM1FdmAHfuAXNq2LBf7G3M1vEcxqQwYkAK6aj2tBji4CVE3kj",
  "key35": "5qYwYsxyMXUuRVa4XfNYsNJBABSgz5wvMYNxn67HNFSLua1EmTRY2YVZB6AjzfnYRteWFnwBoLPX4YgEZXjS7ww",
  "key36": "4VipKwFtHiGhkE4i1ycTaGX1HJBMRCtRfjiPpboAinQ1rzPGBXVbTrq1SUqCjVbJP8aebCAmTbUBZ9kvk6Gvfc8a",
  "key37": "3PEvFtqoZgdnAtiuVKBA1rrgBedVk16jfTUNL68ATy3PMskFVatvvLgRTWVQsDimErhhfvfbrAhLRiKx7ukSvzVK",
  "key38": "R3i5UdBsxrj53AY5UFG3x7mQwumQ8MZ6aLVTYyCVVpVSBLUPwMHVBKVKJFq2sCpxQWL3HH91itjPgyRWX9QP4GG",
  "key39": "83yBEGgxPVjxe1Z8GXrmLBZjx7sPxfLjHx1LgqayTc4ZgTwRB9vbz7FyC4vwEjUJJiLNGx3w4jKKiVs3WY958HK",
  "key40": "2wLfbGMrYCBfMmVjiccsSLbsKWrQ9pxCewCwpgvRJQ3qFL4XhxixhWw212Jkz6uAETL86Qjub8u8ssoVJqAEP5Nc",
  "key41": "2QjJAa6MkNjn6hFAaB5YW8tZwvVnFpr7URFAxrNsMr5SHgF1kfsfbiDcw9mK4Z5WVgfRoEGxdRq25Kq4avX73HLX",
  "key42": "64CecLnvAzVebpBE7NQkJ2aKE74E6pTMXVvLM1fBR46pM5VU5r4ZpvMH6LZMjpN1vpamUubYChYXvGrJAU1rNczQ",
  "key43": "2VXvqXmxEYUCe9FuPpmXraTbwVmApuj9ShZEnxWjy1kJ1zYFDuLGfu44kx2m1tEd8pp4hTPVuYVZ8YCWSTCMP7NZ",
  "key44": "33hkvdTRyRzuDFSQ5Lm6RjCYJsXJ8uLS2bvbVMJ96RY4rsqH6daq1MbCUpJRw66UsHVXdBC1ARxCYx35dY4gC6LW",
  "key45": "5FrsP6yM8n9oWkKHWX7CrSuzjJ91F2gGQc5rWRg95EeTSRSirCwtGxPXRWw2Lk215SC2i27wQMnXKzJLqJZWozB8",
  "key46": "4yEM6K87yySTjZfEkKLynyYNCbAEi9MwinTXvEAYVC1fy2BkbS4kQM29drNcM7A9d8pzywNK7Fci8pdgNwSkFDMZ"
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
