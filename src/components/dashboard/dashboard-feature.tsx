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
    "2LqXRVBH2HbFnnBAbxMpdhqccEhyACCAuDZ77R4aNCVEp3JqQWTqkMV8hsQXfGtU9fSKHaWS9qszKnv3ZqodT3F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21v9hd5qkPNvRbCaX6vK47yWpsMyYtZLLuUZdhkVr3kMxAs9D7bDcXayuwX4dFrGJkn9pZQM3e93zV5M6ypg5QCc",
  "key1": "Tq6bDcFwK6q22NYxQHvjih1U1reDcHQdemA2mxY9v5CwiS5cigegwpKkd5GgP2emgoSDVgQX49XXyi8U7NJ5fbc",
  "key2": "3ZQSCGoDLeM6JFKFWg585jwjpX2mXvBrDYYbMkgLUQ5LSwVncT5sZz4NtRith24XRE4Do9faKut98LD8YsM7gMMW",
  "key3": "3bio6VXGu42FHxx2xvR1jNkK4nHivHsiV794mZeM85g2Lrc2q44wCKA51T6YeyMPCdCAoRc7KjLHZcqp5Lt6iGJG",
  "key4": "roR1qd2Tbxu5q1whJxDnN17kCCff1MGKmvmHcot2CvzXGNKXotD9rQW6Pn4CyQCF43J4NkZre3R24EENKbN7Rnr",
  "key5": "3fyvsWMwGUTyfcqECwbf4CULj18XmKr3X3Ma5mvXP43XQpVt8i2m2pASgq5rVuwB5SWAD3rmRtGRBY4uLyc9e77d",
  "key6": "44gBXuDdCuFhse8w9KmzMNbNjEsrXdNQ45ZWJNv3MAHbV15TcWWykDDFPWMm7WsjkRLMqsvyRgeRUfkYStUVmM1q",
  "key7": "41GXguQbon74LZvZszYRThbH3EzArn9RxdfMSpP4a8FaGtnuziMCYPahZSyfhAWHA1F2E6zYeWuqXtEH3xYjuo1g",
  "key8": "5kHyVEYCbbtt6WbrMRNdxXSSt8kNvfcetV6Z6hdTye8yFVHVwmxMRhsBjn3dyQDYAvvSCTSHSahoKCYwA36sJgSw",
  "key9": "5iGT6mVEBVzTdXoCF6L28CFcSUiHXSofmDL26rN6VFBiavC1cGYKXaqcNwvKeH1sZmLsJXsvsWXqcjXpWT4CK5oF",
  "key10": "2BZeNYqcu2f4KBMTG1fFaj4wTJCJe3xoDUeDkSyNFsWKpuDmSwYqeq8oggwN6eLV98hWqs3vdi8SdYqYB5kNSbYT",
  "key11": "3K7NzYGzBNRLimPmqqc63Y9mJV5JaRPYDsLLXcf3CtLdYgx5u96zYz791Kfna2J1qMzDhpRFtVVXKksWdZw9E53L",
  "key12": "67DiMRZNAbK7ELHSWNgouPQxEA6ef5YNZiDoCA9acJ3bPYAD7GygYv3cavF4kCtHiDkQSB6fkouqix6LCp8fkoj1",
  "key13": "ms8xozf3W1MyJ3NAcDHgFH8pHUFnHtSwhqeKBHkjSqYX6xcFGkHJPy9x8ZKZEJxPZnVCsuiZQd6Xqi52c5RYK4x",
  "key14": "3bkQYfJNyCRwx61aWobqVMgDvBTi9URY2WDg1DaNdBfgpbZXAoCX2fLkNExc4Ex3zj8ogH3nFtAbJzQWDwVu5PW2",
  "key15": "5qTuEc8K2bje36iQfuJFeQUrdafxHtdbzQj6gJeSoedDQbbqUbmkmBGJiH57QbFk3W1uhvpDpA1oA2wRWtaSaNkH",
  "key16": "3DDJXCj3uK3m8gGzxcCwttc1qHQ83mNQeAKPLWBKncRGxGPuoYsjjGNpn4EvRGPdCDsWS4SJYjKnwopfh1YDmvmB",
  "key17": "5mDNuz57YdCk85EpTfuYTTpL95SMcgg33pM2LpWjgDdsFsSBCqVaUEyWmBLs4qUopR5crm2qS75haczn6VesKxKS",
  "key18": "3dqtwhNHj5VaysWG2UKgcTDg3fCDAsKjvorwSWSMJHizsLQ9SaBtM2RK6s89nKKrtVpyaFctq3QvxKSDhDMDKY1E",
  "key19": "5shSohcnccY7Zp1vYR8xpA71UJx8g9QnZH3enPGqd267QJ5dTqTyzWRkcio5Gs2icoJaQWMghoZ3axm7E4CeVak4",
  "key20": "6y4JiAVYbzTU7AJzPnPHdUDgPQErp5fGcwWi1vt5R7dwbW9oig4eRw5MipvXi9Yz2cZdtPbydcvmwVrb4vHGUPq",
  "key21": "4C9VGZdXX2gfhBaFsqF7H78BqabQLbyfN5eWYKHvKdcvPqJiqF2a66wPodmiiYfj8vZ8JAarBsNT93895FxWNtrS",
  "key22": "bhR8tFdddTeCrHoFQQFHxvSEMacA4fCSsP4wFznavSjNeAFiu7SAUxNZAFXFAzL7zkzrjk42UHiNUUM68LR8EiA",
  "key23": "5mqBQfQ78xD92Mfc1fhAK2xoWpSdmqgT5tinXQMnfX5CMV8tptBt8PPdLREE7Ckzt2jnhq8oWT2i8jzWsVLE82yU",
  "key24": "5V6SLQv95y1e2j9ook7zicorFVYJimvwuExgoBonPw1WQKCwgVgFiN7b9arx9gLErEscQXsb6cdUR8GbzbxtxVY3",
  "key25": "2JHCtAHfggSrCaRqwcSeQKM8KvQd96GLgdpw1xRAJQ6ZDw3Wfi1ziyFhsHpZ6qZ7rpgFtKziAHVh6PvovqUdVd9Z",
  "key26": "3TUTjbbZhmrunhsMyN8VRqejuTMEo1Q2oTaHQiPw3KAL6hZkMpVTWmUYTpD4D6yLhSv9a17FTW6ghuNSyd5UevKx",
  "key27": "kwJRJAxDApD7qbgvyFYqqueiwZTxntfP4ezNMSLXFHbkAwdESfZcmApCZqTUhCmYJFonbTqAZXL4chhNrb3JTTe",
  "key28": "pxcTG9EwLacV4FeeVc36wkzfaAyRDzq92vba7puz2fkk5o5qt7Z8ZFGvQXA3bAahvAzmrDAH7HncEtZCtMSmQq1",
  "key29": "3NX4YxwgoJfUy5r9D1rTeXA6TK1nF6yQX2Vo1VXcPvpYLebxJnEu8M8zJcE3sCJJpXy38gx3Cab3bztfZhBLbkFz",
  "key30": "3ex7FzKekz71tCPNQ7g6WXi9bHkvbgyZ3WdWJgLbgeVivTQhHHAHZ9ZjdWMVbpoVi6rgWUCa2AZjF43zGGyJizo8",
  "key31": "2ExeBzav8VzYcFcfzLwmeyWvKbUUYucDWnbTBfJQNMrw7wFL6jqjdKr7Ne7rfwN23an52aDaJwF5cc3tTkBs31ih",
  "key32": "9oeMQbCGKqtepPiDhr9PEfCVwK9b3drXNBiidXbWtfxXMh3bHMHpQS4GXbcU3jMFmX8ojzUwjwodWHZPpWGoqWX",
  "key33": "4k5Xu5LhzgFZu2hqrfgyQBrrCQ5vsc6TPizw2Sc2isgtzQKDigAmX1vTgTtRDSnWYVaShMpqPmYhwcV7iiPBTHWi"
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
