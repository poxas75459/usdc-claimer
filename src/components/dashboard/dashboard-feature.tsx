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
    "3KvZGmYnQAWQLuyGLUBWAcSJeeEntvt3MiVxss48oo4zBnpUEq6K4Y66mKdY4PeSbc5Jq7DHyS7AFqvJPnBEKPFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNZ6AZKTBGpK91rQmsfeybCxn2hdrHWuKQmD5w3sAdGNMnQdWZnaD2jRGrxZheruGuJoGt53P3XzkugUkDT2trd",
  "key1": "BgFEsZH76Xd1SUcY3gJetUobbV1TGAg8HvNrt6KjYdBMob8rpntuUMP7ZgDKyPdALphto6bCLeBpTRuJkcm9ZCy",
  "key2": "4LvpWwEB6wVwWLdgvNG8zH6VKRTjBnMyH2auTT1ZBwduJpyUgNuSrYV6bp4quCVnyH4j2Ag4f8rmrgBRz715xW16",
  "key3": "3kvS7jbBB3QpjTh3Mq7W1DSXXX8zrJTtiQ39TdzyagMcAFB3WK7JCgRvc72fbwjqrC5NRQKLPK1839YVYw6wt9ZJ",
  "key4": "4w2LWTaGnmm9CyYA37uH34P6Mt24DnjU3wb8o5oR7rp8oqsy4ACUefhqLVKk9BRsU5M996X8zsn2QgmYtZTbx55U",
  "key5": "4D22PSffJ4jB4ScvsYuKywjADro2P45q24ivwjuabw6YuZDr768mfM8pyRcbur1wsL4PyqoqUDQRzWq7gdAtz7Rz",
  "key6": "2bMzh7Zm6dNyBKHAhw3WVUFSVr7K297zXtaiWxfUcWRSrCz6B9ZoWUpeCeEr8yfYtq3HqfkykqKnepu7Ha9VESQE",
  "key7": "516W4c5PQKzf3ZXAXkodXCebVK5ykxGqLyDaikXQFFxkrcjjwu3H7iF81P9MmHdSG7xChvpe7yR37J6y89NXHb1s",
  "key8": "44B5Dt33SDjFq6ifBrZwkpsgh7u9DhVuJhW8dkaDmEtqq7mgwbjwndRkdVazzjwXoZo2dZoGdxNBRC9L1hMAF8pu",
  "key9": "3GcVYjbMcaMDKYwnSkNxJgpRBNtbjGhER8QBEhD9PwAVXrLrdRSYvbYuHnEonamZLDZakZCnhphNeeGmrXurNwfM",
  "key10": "4CGQrSWgRux7oxm8knBHaCYeZ7fta5Xwh8Qs7NtGvkhKHLnT9GhNK3aFdc43foBG4Z4hMmaWyufEPQTxT1B71sFb",
  "key11": "5yvmknx2VCnzpkMCZM635ef7QV9r57Y1FLkgic4xv4SJCCiKwQDWuXRjdhRz2rP1daWk73vycywqhttZPcQzuDpK",
  "key12": "3BvsBtxN4vkfjUeuVEz6P7HdKbfHGiosi85JYpfwHZ7B3JtL4jykt2T935yNWuUjDgAcbXybeAtXV9qnAgC8Rony",
  "key13": "3r5fEsSS7wWiBRopF4iWYmYorVBi9fGQB9zRvYMYkpBftdCWDJgfSm7RJsTK8dqitLyQtb9Lbzi4cYhkn2RmhNFQ",
  "key14": "5Ay1g5smru15kXmuWSVNMDD7kY5q5ok27yZnYJ7W92v4vrFy7PBYjN7FsHpSYZb1wm4K21YVTMQudHFRX3LJ6c3Z",
  "key15": "2Ydhmimapu7LwcG5PrQobDMRLYgdResLkQ5xXRcpaJwrQTtMNVUsDXVr9FbUM6XmSgJa7fSMfWxTKfnUaH8LcP1N",
  "key16": "4MYnXNRAVK3G91MDPsJbeQejpwfamNmMuxNw1dstf9YMwV1zZx2N7EQ7PzFvCDjcH5FR81vcKtRcykwchYMB3hKB",
  "key17": "EWCueEFtgTKpxBGVLvp5szQUbwo4Phcas6E5nN6jZiTdjVyEFHMnGFDaV2kuDEZTnmvyzzZodCsP4iJSZRCvs9F",
  "key18": "39BvpRVvHWFRVMqmXaxqCGpTsHHYT1m81QY1zZBWC6ALXghYLFTHvQdYWPfzA3uBvGgJMcETuGbxe2zaopQec5D8",
  "key19": "nwyKp3T5YJM6qJRwfFYNnB17gZCFvigaQwWyzcxnyckNbPLEuUyGS4d1CELoYUtkViyWiRCUgAg2inXdqcUtnyx",
  "key20": "UPSvrLtvBZ6bAJBPrSGjuG1fLofznFxBYGJJcHbTKST3SZAu7yu9wydKB7KXYvQMzJ2ehbPVj4v87kbWbC8Hjpz",
  "key21": "5k5unAN3W17KbE3sPZVsGAY1h6f6DpT8vw2GztVRAXQ5DaDie1oymcAPHEPBpAiUvv5BJchM7YPmSVctxMxkwzt2",
  "key22": "4dN9hDcocYNFNoEBNYF2eNzTZBH516NHHkp2jYPBvQ7D42DEdtTry1oewYrWMrcNrZ49moxuieP9QULfMgnfF2bK",
  "key23": "2mXqXVKfydfWXKVX8Bc9d5TuPtGu9Xbai12LQ2vfKVQVz5zQCQeYNwxeUz6LfStdwLFfAg7ohr475NhZWdZfn72b",
  "key24": "3mQXP3jvoNb6wHFbBCjTEVxYEHv6Xdpfzcy1tpcfYEVbetRwxX215nFHDcUewEX7dZ84R2MqGRZVPYDvuzHckf7g",
  "key25": "46HAQeHrQduxggWxUoyjHCPCQEpChU5ad3Fkr6p7Xx535V8VRBbw7Rs5LtVN6cqSL2NTJqDswffs4TxiGKtRhohW",
  "key26": "5c9BxnR879hE1rqF7ertcKCn96hDq2K77sQZfD6iGkkz5vDGUWNz3rMVzAk1qcTUqtxLt3zqPa2uzEbWh1Qarbtn",
  "key27": "3dzmaswu9UTs5Cj3zAFzQzf5nWLqWM9myby8SEg9QfwnLfDnyvJ1odVcSFvBTLH9egZrjwjwS71RP8bFc3uP5vn1",
  "key28": "4n14yvnDMt2qRpDzkNTNUsGDbLqfGe14AC9eJNWdd9BMyerDu2LxwWnXyY5tFUxNopAgFbXYkgCTf1bkGM68xJvM",
  "key29": "2YnukFyCqFL8wjUnVYEjJhzLMMtqtahpZdUrfAPt2yYFZcmSGxPWQ2EwDYTUvxKswMQTJ5289vd1mwQPLz4JtQcD",
  "key30": "44fKYUg3Zv5TXK9i6Y6mz5YJiBaM5PPoAqPkrSU6LC5FH8VNvQusJoV2e63nQbtxwfphyAiRgEj2M2rGUjcfwvRp",
  "key31": "2ALrsCwPTctCB1R5ETMN6rXAudaMNmXSQWarayvW8gJHKQEADud2rQADYgdadJiPZ5CULzLM4AMSifobX537R9ud",
  "key32": "22iFUuWGbKMDaqTwzSe95EGgFD4G9TsywSYhrqoUVAUvUyNjeCywmoMcrta9F5Td7yq2tnthY1vL2BgoazKagMXX",
  "key33": "63TYjLLcWuYUzAuGyWqMt2Avqzd5xf2M4WLGaBKsNSNUi3pUyVRkN43Mpo4LYmjbaovB1UA4jG3gqgK7HADEGFfR",
  "key34": "2vF8598swNhhnj6eQae21MJgZWrgA91Z2BxcZyUouVpzn3B9cune9VzoNpswEKWRxUQ3iRSLWp8Xr52XfJhz9UTn"
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
