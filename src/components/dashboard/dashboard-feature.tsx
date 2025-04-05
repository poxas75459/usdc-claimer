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
    "4v3ZHVRsakBgoQn5WdA2VT7fftpioD3ud7deCw35mtipPDMt6XH2TK4hs4vYFMUW1PjA3SFkVQvSGgL5detWSb39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGWaXi6ZU92Ut9oBTzaszrFpFRhqdWT2nnRbcyq33c52Hda9ccbsGq6niQTZKNmsGFzq1UDTbfMMWp7KfbPoQBc",
  "key1": "STSrTGzC2qdZLGkZQwNkzKKhCpnkYCpdA8Sbj3dyjbvz3XfDY3M6kGiFj8ey1qRp5qk1pza48qX9M52KkiDqK24",
  "key2": "4xpAWUeLB8nn6vWGWnoBVhnshBeYkEn7G43jLeyTMWa8GEJQCKh7oWvT7JP9YCc1yc8yRDFs5F8pa9AjPWa4sE1K",
  "key3": "2JKQnJNTav6ZcLDq76A881pR9SAzwqMdzf5k7G5a6ttL6D76hBsZDxE2FCrGn9UPkFJy6LALfsZ3vfibFjRGGJxU",
  "key4": "4kmX7prxxQuDndThAW8QQCg6Jk8SsMaj4HjJMhapJF3WvbDu8UcPaNSKMbmEiF58tvuNAEqXaMs9fQyfw4r67CYB",
  "key5": "5xzjmJqRwmkjEAWwnDxm1GDGamR4VYfGsdGhayVTqyvqukBHng3SQaQomhSfzvJ5YyED3BVyFFN9wARwPeYpdpnB",
  "key6": "54BGAdtNtt9CFSESVpe1qmjyt4iQ6F9oyPUPFSET8rjsaT7FiaqXKHos5MFxbWJuRykwWsSN2yzAcgeMqPGK6Wnk",
  "key7": "VKJ6w1iGTV9xnMJu6FzTbUi19SgLJd3RsmybQ3LnGZ5HdVZXv4kK11jycLmUgjtKBTkWeQxoaxShaAbkhGjzwJt",
  "key8": "44g3KRrWa93gSqUhJQkbGDmJahvCxUwHSZEPpiGcSv3myVMoyZiAieAR9Fatz3dT2GS4jFuQnNZKkFAEjgxHMw9Z",
  "key9": "27kDpJnm7Tf288Gwm1x2ot1Lf9wNLjtXYZKELit78sg1r7kiHVXZg8sRNSvePDDSkSJ8HNdkLeBvR99d9uuQ1bGn",
  "key10": "2aPtne7ms7NowmyQ4AzRrquLorLwT39njypPfdfxPVcKGMSMU3WMeJ9utcb8BEaGP85QcvQX1sYaB9toWJEuqJ4a",
  "key11": "3NmY3utE5h7AJfu62tvp14J8y1Dyd4LKZvajY9H9TJibjNbpRV5fkbXifZEt9Ywp1PuDXaqCUn4AFj4gM91npMbw",
  "key12": "EZkAU8ZuyxrPBZRzkhJU3iamjr662EdDWZERFpnDmTQV8QeQNavE776i6En6spUHNfRRbY8zUzCQffxuGDB6yFB",
  "key13": "3pCEYjT5pAMD3AfVUK25XLBHZveAmFDUpswTxn4PmJQVcFeAU8CMMd3cjhEGHNMaeoWt5co1oaHrbVFv7wUfrCjb",
  "key14": "527LMtGzfsiBmxJ4pJLPt5RVSjCdQkMXKQcXAwY9iPfy9SDCLZsU6Ui5Vqdm2e5MwzRe7iYEVsj1SBfpVqjfbuZa",
  "key15": "4NnRHjA6XcZu2pvwJQsAfuLsBpMJGTwtX7PoqZmucdnxh24C4P3Tn4XTuaf6bYXqsQEy8HbZLwpDyzThjtK3uWoE",
  "key16": "5LwLGNC73DYAQDDVD3mmDUNehB4dkiVEETX6C2FDxoyPqunsazNshpDrjfKaaGPpV98STbCNe7CYp6b6gJ5thHv2",
  "key17": "2o39UjfTiUCoMjCUFBPhXco7WwrS3PkK9cHABZZibZ19RkdBXt24t8VyBid29xnGj5ixrQRMUdEUfze1DBoU9HSz",
  "key18": "n5hnEZbYADRBe3pmmAXUKUaMnQs8tLEfbdepm5aUMAB5t6QXGtXTnZmtbsHDQvKc7bWrr4tRywUSxp7ap3fYX7A",
  "key19": "3c1EcbTBvY18CdVBekQ38C9WgA7AtEt1x1EUQSrBWNAZ167XNuG8n639P2dpe3yDhkRg6k6nHAKqsaR8Af3N72nD",
  "key20": "5DDsuqGL2w8FrYfjAYxi4NvQfqYVQydfx36Tg695VDioiXNVSXDy2uh9bEgHe8y424K8homGmsfvUYxvqTzZCyyh",
  "key21": "3FsQMX5YASZvfheS2PxaP8nHqu5wqvXgnSPGJDW4VRntpY9Nh2cbk9yPuKtEf7gNiwcz76NyHgLd87Gz5WyJL8bx",
  "key22": "iP3mDhadGqHusVNSdJ7Pqsc9RU6Qmk4YtbDfXxrP1qvGtbTSYp72DhqFuivXFLmBeqUfLtgjckAHEX7fFp8aoSd",
  "key23": "TZiR8PrYtQPqKAZDQN21FJsTqQ4VfSBgCLEiWJS6dPJC6UB8RjNgJqfGPUiYef3m4VAACQdKqLY9T2evNJpW5Ax",
  "key24": "67nr8914HA2nogf8eRuKJdy37wJd6hETQWZEKxkQ5X2T8isXXYqbEKhFG54ikzUV9jfFtD2Bwq1Gzfcu7df1X6Aj",
  "key25": "2Z5DFTJPZA5e2W5Qks5c1kgiWzizqFHoUsHkb2KNeENDi7hgq5we55u8oZRZxLw5meaCSyVCFdAJayRrfTgheURL",
  "key26": "5A7emWBJAGRYpTTFpohLpL6vxDEsXTsr1ZSJ3oyd31sPK5KHHJGMuaMEsyNnsDHpCZ4AqdM2eJb3xFzSPadUTtPx",
  "key27": "5bxyXroovL5s4eRJkoi7VuYCckir8jMisifsJuNVwaf7i8HT1MnMr7UGb2C9UMc4YFFi562C8p7qiuSE1yoEtE7f",
  "key28": "up9eTmjb6d5QKcamCR8gwGXoznhyhGJDjgpxhDUCP2iCrvZ3oAHNDCS4EKcdmMZujypWJgcCmguzrhHc3NZmAME",
  "key29": "4ENoQpbnZPooMomEY4fWhgwHdahWZzD2cPDe3LW7FMDD7RZsXQy6YsxVXQhtG4zktBkiBZNq7MQSsuP3HZh1hCCe",
  "key30": "4fdpdRqBMxegoTw5H6VRESnHVTWWJAXVffxPcxiFwiRnhk96tELosvHW7R1cZ6mWurr5LjsJr31VduhKPY8NY9Ae",
  "key31": "4bBRsp5ptht5wz1rhnoh4VzW9a7Evv1rbJ4iRzFhUAT9y6Gs6RqLFhRgQeLVpd8D3VnHZvh7fineetwnzk3hHa2z",
  "key32": "42gUHejk4GMSkHUkh4UMoeHvt4YRJk8v9yTcAQqfCF9hTCQrtG5QYDhHo8q1sMbtJKLmEEwHojbyngdLqvb5JySr",
  "key33": "3WXHhB3kAETftDpm9iAKCjLHfwZytqHSN7nXzniP7N9QkkqAWraMYZtLj6YcyVVxWkrRW1Jmu4gDrAk3tEDo85E",
  "key34": "3wYN5Udp3ZwhknFhftV2PGAS132nCjYDAwekFVVzjo9f1tf1EnBskaUwKXSdVS5aPx7ncV4f1gBfCZ5bmhQxDHuw",
  "key35": "47SSA5j9TUoTd8VF7rFQJuDLTfpzBdDgcPwFXFm7odZjjZKa752v42FLc9fGpGaqHALdtS3eWAKzaJTXVq8bFthT",
  "key36": "3eRq71fYUKwytTZPJjsmAqD3UjvKMaTLBKUkXEJnYePcFNKEReQ41WAVMVP7iAwDwDRpoJUhUDthc2es7gHbonUf",
  "key37": "3WcU5AZHHntDfR5nwRKiPNfkeM3Ym2M9DT1jsxumfcMuDprrFwrwQnB6BUq84kMgLUXFFzJzqDdmA3Be2wnkmgqF",
  "key38": "59Qt9tz6kBj3GfAHu1DgV5tz1kturTaMcZb6BofHymU8K6wsKk1B9kEPytGjZec1oSjKiq2E4gTekmzrhyGdMnf",
  "key39": "3kkKSuQkUeCbgS2yZyJKbYqQzMaKz5v1e1BBYFFyiYx31nRmMM49HhryMrYN79Qhjv4f8M48PM7AC9tZnWM6BPLD",
  "key40": "5CXvpEf84vsrC3c6qcEE1m2zLdXMhCCi1wu6o8ZkdjM2LQfznYD3B5nw72QjUYSC6JEbzjz3s1q9tz1w1zjunXNQ",
  "key41": "u9AaEHXTxgoahXGY74soAsvyfYd9VFge28CzqyMavStjWbL3vd4ovMM6FJFBiCXQh3PxrE4nDXpEubSzwWQuGzg"
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
