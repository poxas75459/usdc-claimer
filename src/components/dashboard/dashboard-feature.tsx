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
    "5U2abcAATd1yZb25vQjrQ44CCUdrRbK85Eh4ZKNE95m9aygM4w1UY95JNQooS5rT76fbhGhRrX48zP3pK6QSWDkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JtTZWjxSPiDGzvgnGEGzXhyFGrTL41i1pbZVXu4S8VhY1G2pZrpMYqMEpzNscUKYG3UpW8hR3mtt9Am5CqP7ytZ",
  "key1": "Q8XT12uXWAuSQdhc7vtDQSGH11bSYpTACEKdQJoEeznb2vEajGPiYCXFUT5rA9Jqc66WDRFubE3SpmMmWXYpBUR",
  "key2": "5GqjrGtmxtXdqACVLkfyACJ3GvSgHPUQk7WNNgJAhkRXALn9hMPpm5GphxfoEARfaBA8RdAeT62954Gk7mQ1SZYU",
  "key3": "dQp6CyZYHpS4BXfJvX3avmYT9e9Fohh3uN7Y9WsPQrapAsJrkcs9QT39niqkW8qqgrpjGYbzq6TPbFQo5cfnxf4",
  "key4": "5FnYvc9oJwWx52yGZiib7uwBgBPTqhVUU29oTkCS972ufymWAsb2usAksk2WsSKHeK2weRmQ4g48S1ZrZ6BSjpNY",
  "key5": "2qwSHz8L4D16CrFzovbwTTSntBJvuoG2g2K8XCrW592UHZBEpJAHEpuokXzaZ4bx1g5w3Bj8f9BFsDpRre3YS3M",
  "key6": "2PVBE6eruioHKJtQR4GN49jWAV57gcri2zjcpQY8wQT87Y8sHUc9KKbXRGQgr4cLHjvzT4h21Eh4KFWcZrDjwUBi",
  "key7": "51Pcn7euFVoX5FniR62zZzEY19Y8g5WwYuqf9GjAu73bPo4ygPparhgnUjnzXSM7uZ7YooYHWSSNVsAp5B3YdpGC",
  "key8": "4zwd55hvsP9fMyzR9VZYHnftW39MZLw71E489E5FbaY1vWoYTpQhiwVa9NV57BnPeWqtqY7Qw4u3J81yWm7wauX",
  "key9": "251naA5BsotQtBiJ3TUVH85poWsJejrMMq6pvv8N75QCq9PZtxX1LaJc4jHWk7keMPGSUS4rGuVzQx8114s17yjM",
  "key10": "2aDysVmsEv4oKrJFg3LZyWmD6eAMEwqcqcjNiCE4gHZfNMAa7TaTrJYCp2vmhv41MCKSwvvy8bWQtFsor18uXEnX",
  "key11": "3hzcSUbvUPqttzFXoWAzrXyMYHqYZaowXGCQtq2T1ZfR6X6YRpwzLKZ26ugBvE4kju1ApvNSEUjaiwrFUJ1kRUJg",
  "key12": "4RGJ8SxPLs8XN3QqUokG3TJu9CWvt9P6QRfSfgBAiPXXhztBgBArXGFr8FGJZc5szUd1GibL4vt37u8XDEJ21j1X",
  "key13": "2QAxYiADgKuwGTkfL73R7BRJKNwRTov4QXPUyFE4qz24cmZZie9JBPft5RFRUTUZnPr7VLhseW3m1WaYrcSYyLuz",
  "key14": "2WjFTJkXGoWL4P87C46JUUyzoCuaSMh3zyBs94hLr7HxjNems7XMXdhu6TP8bUr1wY17aj59n8sGvKwqyd52XaJw",
  "key15": "3H41YMkdj4LxvbZNgewkKyqbEtKAYtrQHvVAHqKaFKkqohL7D4AD14mTJM5CqUpMERiniM5RYkj6bMUDgHQDfTg",
  "key16": "5QGx3aWNLcmyi3bZJywDWsge7XcZY1aPKcKdA9iK8P6fw5hZp7VExHtHgy5doeNLMVo4QBTm3mwVW7mK7igG3n3x",
  "key17": "5wfFifhd7LB7uncikepWbfGA5bxVsYF1jTWWuHjmuTj8DNBSK4Cawq7HxA5KjpDqTYTqZd71jL7QaWEGciw6uwJY",
  "key18": "5atUcHhsyzxEfoFKqXdbj4XugE3V3jGRrKJifLfAyh8kv3RnhPw8VmMuziz4jXCQEyrEZ588ejcYoRJ1bT7pK1Sb",
  "key19": "5FvjhsAAZ1qTfZU1Kv86zPArmVSqwtp5mCaTxXAptvGLALNjPsQCxnYrD2fndEjDctXRR7X7ZkPENDpEMkXDiHxP",
  "key20": "2DHjuVxjkp3gvC6MU9h1XG9LtKAjQ5thphUdnd1UZUsyzF333jDxBDHAuCGNLGw6dUSzHSTUuam1w3nN8BHEB3rG",
  "key21": "65oFNUhTQ7CGrvULP9YZX6PXfKfa9TKiv3ZFkwyAMmzHiYogLt65chn8Uh9wjkAQShpAELu4jFL7aqzogoR8viRh",
  "key22": "5J3Fy1R447iAX7Zg4cAKM66kRpYo4axhK8UdjUi4s44YifyzxhPzRB4VZwinFuAPV13JJXZe1YXXuZPQamcDThgo",
  "key23": "5w1ktnXLu3hKdHDHsZDsknvyCgACbwgH5J2ZMrULoRtVrot4Pcy14x9KzowJCWL9TR7JZJJVo3cUEmG64sp44zdD",
  "key24": "2QHrJqxjmzLHXGCpQvk3NE2nzPaVFpNWxsP6n4PLaTBzLU7d6aRvbcbjD2ExXf9AdLCujnYnGpZ1PWk9GGP4mrN",
  "key25": "51XQK6nKoX4XpACbXnuFLXRsYV6DpPMdL85QAv3khVXkJvqcwc9waThjw9wXDB3UEf4A2fhtwhLFf5Dx5pNwWZU3",
  "key26": "9tnp55vbrLrTdXe7mnBX8hCasCiNgFDGPFPpKGJv2fNVCgefCE8nbsqWJprJ3C8Y8iQzbjMMtC55XRHBQ1z4KAB",
  "key27": "3GFNaQ8Di1EdsNDyncuhYad6x9Jd7aDBbn9G4brrAcVsFFNG1KN4x9fgQaNLLKzH1jX3mdTo2uPWTb4fPwGWnWby",
  "key28": "4K2gBEAPeJR3gJrFoP4iWZYeAXYQvzLMYmQiYh6RGNiAB4hExXUg2ChmWHiSJkUPJirZhtGP3DuHYauXkzSiiYWN",
  "key29": "2XLXvvnmTsS8NpSKAwYQ9WXuiz6JFEhxZbSLiTog1BkCo1a6pXFdmJKYpaJFJSuxmCq9JShKfNX89qhz6EUGp19W",
  "key30": "5SVTT1rnDbVXhcHkGbnEU3wFynq9WxpFvC5xHYKAaTRYdMbseNiutyJtyy3M7SWyuxGbJjc1U3gk9EXMQPaDSLQs",
  "key31": "iKsS4ohnAFbRnVmxkEKCTvAUfbXv9b14u2uXCm9cm9bkem21vnFtoVsjvMk8PEAqDMb2fLAJZWNc29bcduCjcyA",
  "key32": "66wri3VmrUBdPTU2JwjC9o2icbGQpeRP8r1Fmhb3x4BiV5sVGNZUCEmKrmumDK5xgPDPQEXM9tHVkCPYnr7ddk3v",
  "key33": "4yra8BaZ94mZy35ZF6aKCSma8UfYN98owEhqMk5ewdBWc9Rn7ykPWz1vocU423DvD4Fs9tcLShqwZjnV4CxvKgb3",
  "key34": "2MmfXonQJcoLAsxjCBocCkZQizew69aaT1T63J5r9VhZQBwQYi5PsU59GF2LHkk93GL3rJ9HjzdDvG1n2r3a3NRK",
  "key35": "UiR5cHdbUveq4hBRkNykXjqJNqdC96G8XejTGKyGuGGHSPQUkeLtrSPCk3kV2CoiXjmHCoBjm9hcfr3Jenh2ZSJ",
  "key36": "3uJ4dTAgjHDgdQxXeqgr1hx5ri6bCYaM2TJQ8PnM2fKCerdyKpiBMvGfq8V7DGMYVMw73bpUZK4d7Xfsuerib2qD",
  "key37": "4wUQvvKJg2scwRkh9jP92YnMueMciY5N7prREXjoKwD6omgDyAvS5fGENXAmn7LMWLTKjHCZ2fARBkNY8CF9Xphr",
  "key38": "5aGvfAyYPTj8rjkaEvN4b1UfQKE4tkwUs9eAecxTUxLbBjGyJYgARRfuWjnXvHmwGfonwz5h2mjgmoPArXNBxZvE",
  "key39": "2eXC3zYZSsCXVPh4ePQiAYEuihqHa6Nup4gtzKBXjWx4AfEgFDpNV9T9K4YYhUawRxr1XKrzPBqNMx28Dq5Tg1Q3",
  "key40": "EqWD2qmPybCgBUF86R9RHdf8EDK2UKjcrJipfyeNXgZ2ZhKFn1tqKNu4mDFWYVCzJQgzmxj1WUHgrhCXhvNhRD3"
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
