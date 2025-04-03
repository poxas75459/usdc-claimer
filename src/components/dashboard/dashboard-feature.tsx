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
    "tkaEues2bnYQatnmFS9YEs7ue6FDG9htFn6JK2v8VY4our64H2exonZMLHBZ4AUgLPvCREY4wDziPmGQu1zh4G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37D6oyQ7eh8MoRL8Nz6ffQQ1noEBXvJeyxXZQNZNs7yx118nf1CBHu1RJCFwf2n65wEemDcwH1PCw5rzSGrZUxXR",
  "key1": "246bQFDzij66pWC2rqfz3bHuAVps4jquzZtb5RBvUC7pPjPuCnvoSKVmvz8Xtrt8KK4xQ6bhijXe6xD7b3zSixnW",
  "key2": "2NGWjRTYXvXaPiGsv6NRcg2VU2hx8WTUL8bLy1z2htmJTfdbGj25vsq3kXUizY3FL7nnir13acgeARa9yesd2TRq",
  "key3": "euQLtpSTEVFUWY1JLhBYCeey6HfczPq6XCCPkJdS9qiDkCne2Z2rR8wS9KHCWq8GYyKCjp6KkkBHAxMR7SXoA8F",
  "key4": "b1vgkvSqWdLDdwFL17UWxnytKXT4Uh2cxsVcHKirXuN3xbM2imDoF7taXr2p1w5gnPmkbLLBDAVkvaQwjxkukJG",
  "key5": "5QkzJ2YRRzTnYGkjKxBy2Vmjfay4SJgeSggMGpyqndPh1df2VW7a9L8AAB8jVmpUQVouWTAK3AT2yrDBe43SzadC",
  "key6": "3dGZKKgv9ZJpQzQoZweLhZkk4ecfQBCcLFwtTRfWEYCAF1dShQvHqWqPvVXhfrxzVSBJBUJ7efEyJT7kfvrnFfHM",
  "key7": "ymJn1NjUtonDbqSTgfJFrifcwQsonAdusVQEy3zDB6SUzJXBPsskaVjsWwKdtAkjCdGzTEURwcJZ6c2NRrjND5a",
  "key8": "3ApjFwRXwwrLsVmDLRZjATXRuyj8yUQzQc5SZKGcmPY3vEBRWsQnLk7S2Ue1LVoNhDeX4Wy2bRGCEN7Vpau9zbod",
  "key9": "2s2dkqDUv1iqgKSAnQ3aor94Lx3AzMnctvPERNdUo1SBgyDeX2x22sXMNdwYDoa6ETcr2b67ac8zhbsQbFmiZjyu",
  "key10": "3CuaHZph5og4ymtLPuDDgU21mYbcLbx53J7X7bgzCr8X25cGz7bbwFJzADAbpVPnv5tbmNUUr91Ldnpb4tVxQVbh",
  "key11": "5Cvdp6C58TzwQ6L1NmmcQv6zdduUUBiXidPpsVtzzehn1m7SvduxbFvGJJZNo2DGb8Qj8smDcp2NexVJ8RRhuHfz",
  "key12": "5TPsreJJfHHFUBbnb7Eq3XW8nbzioL5GWWPRaWXYdyjJFmHw9gMf7Dgyp38duVBKffDM32EXqAWznA4fUge5rn4a",
  "key13": "2ncKWH4Wxu6DMZdwKt6WfFuQPLRE3QRREPbKqucwypoGAP61rSPyHDQULGyBkYQo4M8jk3QMuWfsh6EYS8ijfBWx",
  "key14": "2YM13Avmqo4nMNjwfHNte2CzJx17T3Ha9HtSoZH32iEjhRKXBDsBf1UNRx8b1Q72xwpUDobWoXepMS55GQdN8KyK",
  "key15": "2EEk5SpHFn4bxkdRSbdAp5XpjPRcJnwwWx4M2hainNGEf4oPpv53YDnvavHDhNpR8zePNsfKZuaX5Pa9cRXGotjT",
  "key16": "5a7RkREt7VbYWtUWU9qGZ8gzbpkKCXqqMEvvoyzxpPaFwhXrJQMKpZ61USxf8nZM9izKK7UiFHcvVnT6RPpePJtF",
  "key17": "43Mh1ZkHW4by6WA18AadvBAuDm9kukyNZm5iWpBUC7bmh45o5S8xjrGeFYmrQ9G4mB2ftsZuDWfCGguoBiTCBJT9",
  "key18": "4pXJPLn5mEuDo3oAYFFcaxUQN1qFxXBzu9Rf3GAdMFoWoM27wcuAKoNCuXG6GZtmC6SWSWk4QaVgBgwdbNoZoG3T",
  "key19": "4myMzTZi6Xsg3i2pRWPCAEZB1xTbYRiYdc6QBTqXstUzixz7agWNVSC2m3p5YA37Wfg1adBibL2u8gPsSuUnYJFu",
  "key20": "5H2scjUc17FArFUHK6mvBRjn2yk4B6NHHd6U788zV2Ht3wbqJsHpccqRY3Go3pWML8drvmcvq7JNo8fjgcNhfNHz",
  "key21": "39mxJivNDRyUXN5q9SFQMmfq6UWTjyxZgFtSvbKjwGZJcZU9ma67Zc3HbpskNB2MtdcQCZ6bvtT4vhtofGrMnFbd",
  "key22": "4dfxBqjdSQwFqAoaEXNjBKzHnLNtDgwZaiTvcX5mSpWvAAU49VRVJNwjZorwzYmgyQtpfdJY4q37jyfVSs3r8SyF",
  "key23": "5fwE8s5ykBuuWZLK3QTnBxXVr2U4w181pEHvPyEv5H1XejGyQbDmburnBwyVsjFKM8q9aB8PH6tQa3PaRjkJYyVf",
  "key24": "5FXvb39fHuVXujj8Su1uSyNwez2SW6NDVLJoHpg3BqLfAxn5Ktd9L6fgZmPAn1hUwPfW7vPeDvi1GQfFxPFnBE1g",
  "key25": "65Dxq6u21St1sFivcaB6vWN76FNvbEFDLuet9jZAVbGoNrjQznihr6HFsFoCFJ6Jup1naZcz37xSvQHG2Kr8jU72",
  "key26": "AdG15aTVqhdVLr7HVryT2b9iCvrHCNGPirmFw36omYr6wzsToLwsVEQUB15qrAhdRecNF7vj8L3zkQQPL4MRUjH",
  "key27": "4kAFkavUxqbPxsYnGEovWJisKkD9ULLQL5bxXaVDVBT5MijoxwTdSTf3An96xSz9a7C7fmgckMap781XiJFdPbuq",
  "key28": "4nsMMMc3GCSZXsSMxDtoKsJDDiUwZeZ3ZSwy84XmLHTfF4fAskvrZkY7dTDz5tuMBGKHF6VJm8jxSTvWDbW4ocjy"
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
