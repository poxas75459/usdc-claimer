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
    "2AFeKBgo8YexRYHSfaccYJdrbFPK9tpYyR59hVvNony1tAMWWaMZG5iMFAtuPrWdPxYP4Zuu2FifTrSoditJjxZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5ydzXisTrSH5SrkJ9AjcgUXcSL46LKi2FsF1EkRnFDoxYaYBZFVEcGpLuBYjR56qeap3c9KAGo7oMU3UJENvVB",
  "key1": "3CmPewkAQnGXf2fBX4NyF9bPC6iQ7SC8kSJEzRLbQ9cdz82aGaUMe3wDYHtpevPaPoyqdZmKHpd2JPRpagjSjzj3",
  "key2": "3kjk25E2RToRT7xhS42rYPshBr63XQ5AJFrpyx4vf8VBhdnwfwrc2sPrnGJ8TL63t2oARu9ur4UMWiE4VpbCk2uj",
  "key3": "5tqf92MMyxcXzrbff2MSVJauPQXAiofD6KKKEJDQ1UvVkh6LFLQgSZoChfzytWCC9RWWsXf2vyHywogXmdv7D43N",
  "key4": "4YNSFnrKZKvxwERiPsNEq9oXXDK1JL3iV3YjGqr8GXEsBXwdDvubyByYSUgyBPesH7r1QDUbgbYgwQA6yNdsbgNr",
  "key5": "ANbmMv2JR8mNHKKPAn7xA6JM9JyHksJJAyVzNzQDDvvxzzfv25e1dUDzGKJc66iQoAwggxZScK2Bpes8SaeVSL6",
  "key6": "5LiQmsEEDaSCqKhNEfb58BXD21nWyAQq5FvntVg5zekWyWFU1iFpcqaizQ8A8ik1wnqZDUqg5oRR56229193pSnL",
  "key7": "3Q5A4v12wV1qBLfXZEMBUhteVHaz7h3BtXvXBbPw39weXxxE36q18kphqLG2AebLxrvpn79EvmfDqgSxFrosfWsL",
  "key8": "2FkMndQDbr7nDKRXsmbU2hS6kdZCn1fyCrHSJqszrRBbiMoF2iT7J8UvpouWn47yPDkURj9m6yABSFcvooj34uD1",
  "key9": "3FfPdUspt7WhSPwadH5UvcKcCkr4i5UeZrmej8qj9GUUWEMymDH7gLxuZwrT8CnwnchuKiafPrGrEwYeTfYpzpYy",
  "key10": "2YDt9JL8NG4nqnmbAyWAxo2fojB8bLT2UFnAWVDdYX6pPNKzACTc1RU78FB2AgamDjj5rMfs88Y6Mkfg6e9uiins",
  "key11": "4HrKQrR4cXJ3b4uoUi1KEAZ8VTTrYv1bpKKsWJwbdgaunLYQN8D5K9kwQigfze5qPTcbf4eViVHPYkcyAAznVFw9",
  "key12": "4NgEBxhgAxYZj5XGCCY4tk8PKKt7XjsdV7ZVcqq1WgZRb46zRMHkNmhgspGCVJCj2FwjCegt6sEuLxqSCsz4ndjc",
  "key13": "3HGPBCBo4AfjCkyQFb94ZgxhtUcHth2EkPrP71p1T3ZTJ6N5MUqNaCLNgmPXvJoiBn5kHKKNdVeK5xGAwVgHK8FB",
  "key14": "3urmV3DpA5gVAdeiFUQkxtChTxqaMdeXoQ827awQBMoj9WpAPvxHgMR3Tx5r6jy7YWM9panqvq2QMBKmEa1Uz17M",
  "key15": "2AQt7QWczN6fnc2x9r3jUnxYCRHQM4qEm95gHWZhXXH6XbY3nFKvoewgXnehdhA3YEhnmk2M9zARJBmB4cXxsWsd",
  "key16": "kYAbdcionjbhBZUrV8bsBuCdFexVakFNNvh4SMmMR3ykcMjHc24mVqozxpdU9L6XknNB6om56zCmgw9KeZQmjY1",
  "key17": "5f1ak8Pdgpk2gMxrYEPr5NqtnuuuL4hrvBnTqg2rW4mim9tBUvR346e2VQmWzztpvUTMp15a65vCAsZJT8smYyUK",
  "key18": "2oF4ukCJRBUETnra56m1y1dUm3wBdGGAi65iE1SxPktxdGry5UuGyLccfv38D9KLJZcFUNTzLaiw6mseVuimbi4d",
  "key19": "3pTZV3A5RMWbftEYSTncSDxG8mvqycozNraMKo6b6xzo391BBhevuAakVm47KzbNDYF2UHWekYkeT78xZybA6wLS",
  "key20": "LVdYanZ829Zs5gsodMrsFfb4ztnWdnAMGut7ayJQF6pjwppPzoQUdWBYX8AT17LmSqPHmnqVNhWi6c3HD2k7j5W",
  "key21": "4orvCAZsjy7e5kTt52XLXHmMcXgTeiR2mR6hDvFWezJetjnMQv6ZHGTbnTfvHkm1bCNprcuj6nQSQp4kRCiriaMR",
  "key22": "3S6cihnJBjxyJ61P5uqDEsXfjWxtyyEdsS18sZwau357HzLkXueBF3SbJwNFBBhmCUrXdGik1xcDTqFJ3J7xXR5G",
  "key23": "5TseDUrSZKhMgcnGKeU6RXnmzhwQ7CSvX8kxjScjSUeFMQEGy1qFxqVjiG7nwRg3ZPAvVdhM9PJ5ZHPtgLbEjSt7",
  "key24": "4PvQkyuwZoJ49rs25PxBeNYCKpDDGyixgvQgYANvyzkAT7jwxW7f6TFcB3kAnmsCArUwPgiSfRTeFWGigLSKEuuJ",
  "key25": "235vA6EhBUn5YnF968ik3cV8dgqBwjt7XiYmPkCuXVhPhvautqew6v145iV32bGkP472tWwUrkpJEKXrQp9FHgTu",
  "key26": "3WhBdJXAL2xfUNC2xWnemJHBBBRq9c9YstS3YWQoDbVpFU4LxeDTH9p3jhRP6XU8DDt6rVv2tHSEG8G8wiqVtFFb",
  "key27": "2DhQCfkjG7VwdqWk8rx7HhBXsWX5cRTMVqvKiLzrksS5pE4T2ouJUntFSA9Y8kKCezaUgwzF4MG4jTLAnN2Fd3vi",
  "key28": "mRYyepqMqupS7onu54qHDidHU7jkrtJ1kECBTu8EUn1yPd68vWbWAghMh1PNcRV3xPEdTp53wJEB3y3ztsqAAc5",
  "key29": "XdAF7Ehw7hL4Nk6KJTXdFvrsrhrt8J1YZyGw1hXBmpnptHv53QLAaXgH1BpCYh7gVWTUhhaZvjf6uBUveotgm7b",
  "key30": "5QLpRwshS16jkBv77XHLjGsVgRi44d6pSKucdnsxkbn7AdXJAbEu6J7xhFB32XLvK77QRQ1KEbJCAxEjm8CjPu6h",
  "key31": "3rFfoQY3Z9YibtE8YenmxkedhQcBDuYav8jMQcK7Hr8hVPhWyrHxvGK8Wd2hHD8cf5fYusQEYvhGdbiJEp15Tk3S",
  "key32": "2CtjqMKeCHxqtpTBAQztuZFcmfAS2Tqc7yxSZbdciJzjSDdy61UAqu9dYWPw1xBjkmx8VNgsnJjXpMa465Pvne9M",
  "key33": "49FeoaamJjVFghuo1bueEftUr3Ax1YdpQv5bZPxFzQUmDWpUbF3kazDgxULvRyNmk7baTMiU4RFYToeLZNfPELrS",
  "key34": "5JLT6gpYz5DXmwAfoYjkM5Q3x2iZTKs2MvtYToMk7Cs2zm742iSu5ai35gFizkuQdQiEQfrmoGML3g9b4gveFK9j",
  "key35": "5LYWZCjRjDbYr214a7e7FzL3AAUQtgakmT6RzAqpSpHGmhVa4swBtX8DWhTrpNfVqnCGBbAQny8Q12mfZ1ZqyV69",
  "key36": "5UefepN7oUcpqLASyMsEKpZ73UKY25NhFNUHhoDycAipE7Lj2mGCcyF3iFQ66FuM5UXMh5wjyW7oQgBK4qiWtD8u",
  "key37": "2V14u4yWzoftJDaHkQ9Qvb2yfHca5eGHkJi4ZRYDfky4eEGgmcxYcWuAX6P9bc8MD41FvCZrH6eww8CBjknWBj5f",
  "key38": "5J5Zn4bK3qvxHw542V6crhYfNCvQf9qTnCpa8D452gxsYPnwuuhvF7q5a3DUTDwfdZtFhBjKbTaNvNkm81SQGb9p",
  "key39": "qs7nb29QT11MWuMvUbhGZUgtDUgMEuEERi62TBjPnU78YhaTPCmjC6DjapfagdAuCCC7333csTLCqpHxRSJSSei",
  "key40": "2vUy85Ra2MG8AjbnGkS9E1JMab67T9jAXpAUFvrzrHv3bZhT1sjU58j5GW9SB535bA1aQSdGuwamKR1cWqSMbsSv",
  "key41": "3YswoSKjqGLAfiELYEuHsk3d2Hx1ftm6cpd95hXcpv2NNi9iE86gnH1me4Gowp95EFdfDFTPUK6YmcknFdEj1WTC",
  "key42": "5zF2xxPwMg2cxQbTkN8Hw5j127EF9LeWyrVKG5oXajkMsBMUMNpA4a8ESnQzdTfSrviL72LroQGAwswW1WK3YEq8",
  "key43": "3RLT3fa4vdFLjANZQ87ZG7TyELjyMi4w5PYu6kmVf77He92jAzAb8DVwz6a1yS5kMpkAwAGkhUCfzvdp1Yk96Df9",
  "key44": "2J77RX6QDFWbLu2e9dDWu7a7P2i3XVdYVfWWKprwsLm6mcCjTHXmN61SpYAAqHhNjjofFCXYr7TG9ADJGoQaSB9D",
  "key45": "2HZwxZzJEgHHJfnfKN423JBVQNfShupqskpQ25ABqztYjsidPy7j53z92SFhYsPbnhMke4iGiRgSgDkQAw7oqEfo",
  "key46": "RfMhEhhsRqouwuBRQAPAgSuaJpk1tm9xFmXFBDswNsLPYyy82FmPQhMzWXuTLfFmNAbHHAPG2kKWtXJ3RufcWTt",
  "key47": "4YKAzXTTp95awKDjpfiv5hS5TxXT8jP8kWrWMpWRUtxyHm4oEed43qz6WmFPGmyS99ucL328iXN336PojvzQ464G",
  "key48": "64s4Qd4AwZYkj8xZDTKwjpB1R3pw1DgdUptgXSJh4Af9t1goFQeWJMiEUPnw435HdFa8CUkn772usKoUuzpx979M"
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
