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
    "3jukAjgw7ZgQmKchJwCaVjrYv33in1oXoAbjuFZ3wHUNvfNkMqFK9aTUNpAh3KcZrZvinN1Tg7Vgng1aYVdKVLhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAuas2bqK2GmnoLj7HJbo1he8W8mDXRpLvaBpYw8TNuaCCk7xfL7mLZHhuiGV69uvmcFqFdpWRUbSAyNzdvGiWx",
  "key1": "4e6yVmqGYjVqan4PCfJcFJJbatp9qcuykND7dREmKX4MiTwLaP4kuMiL1gPfbFLd3Ubwqdh5D4UuYbsToAr1VKQe",
  "key2": "2XXhgGspe8HxFMdZ7hLPAxCkV44DDg7WvPCba3JeydigCDGYi6fUzSBsvxxtRFbn5qoEdF6bbR8MqzEume3enYda",
  "key3": "1BKxhpgwSiqfZmTtbTvv7mbRsTejXgXMRaUp5FvFpPCU2sj94qFDwzy9WNjy9DKYYVhdsbzUtz7C1hMnVTtYkt3",
  "key4": "4eTWYEfpBDUZjSmVkfPvBtXTWztdfrXnrygQ5m5H5RBGiEcLv7uWfBQbqz4hgCpR5TbzmPWejnjjf8KAgwym2Lfo",
  "key5": "2a561Yw8Bau1bur2mUgCQoiHbA24htx9Dy4Cbeq54JF45WtLx1sYmuQSmVNLMLdtuWh1TV1e86NZLhuMtJCpB3kj",
  "key6": "PKgqM3edK3QMjmLV734X3GhrsXNNusi8GoUC8tDhFWCPt8xZeBDvm8vJ5JTMWg6NsoQSiDXocf4pK9KcunNWVGe",
  "key7": "rnUd8L39EaNSSPMf6YT6aDtgusfLp9UPMp6kR7pPMPFJ4WrneBmEDTV52ZfHmSWgoZE8UF6v6xnmc3ReJv4eBbW",
  "key8": "5MGFfiUF3C4WbsSdhYHNk2dij4Kn1SydvNKrcMXyEL58UyjwzbiSLLXrDFTAAhy6j5x1pr2BpyH5aobqW9JR4EFk",
  "key9": "35CnxQ3DmPu8thUm8U1F6qfd1k9A6fc6HCt5okxZA16rZyeLZa8h1nwuMSL5NA3S772njKGg9ByMMaHjpFcWCM6i",
  "key10": "47CqPfDLPx5vx9Upn2SYrCyMukkBCd6exbG41ayivyNMpiE6HRz2f2ozZWru88cGW376e2hExUEpK6FKui8GCZtd",
  "key11": "5RgefuFLy3F48jn9rPcXgWBFVR8WxhcjN8HxUcoy3pi6qWWKenZJoRUjfoP68umP3XRF2CFuSZKY3SJiWC3npRJ3",
  "key12": "4jJbPsmzQiKRanrtiscPQgZLsqVR4u3X5KsMeQTBScg5rzh9YB8gx9XhQKStLn3AyUojcJre4oRw1bUvsCAGrKBt",
  "key13": "62CByjCcGn1trm2UzUGPhkhFLgSWxJcjiaNYzyBXgE5uT6FodW421Xm9cU4Az4zQ5mgZyDeVXqHvSb5KQhUN6MK8",
  "key14": "4d3a5PoZWgdbLi7iWU8S8Pf41DgBmPfcq9LQxKGyqz37uepHXP9wu57CXZ7qkcveCrH8RqobLAnGRUSveowxTzqp",
  "key15": "3t8qS4VFk4btwkCq2nx4ftgPtsZYhYAepJn78YBXynxdiCSz9BVUrrj9HtmFMFy2jxHpmKNdZp1shigqHjh9Ezym",
  "key16": "4Eio9G9wtjkVeo88kxUYDpFw4o8hKWnzjFi2zWuqSJdW4q3Adardh9jLMXQ4V2tp7FB37Zeee8mCzjjpmZfmW8sx",
  "key17": "HdhSPT6mFChcCCvdhysUoa3qqrwtibp97RPoustrgYjg9tADvC3toue1uj7yveHZTYzQNB6KpYwxQJjA55iufrf",
  "key18": "JWTVaaYpGKtYSSbXJWaSPdxiNnx4uVQhNnjzfTZniVjrx3hnjJWh7hrkion1xtUxSAm88nKEqysRS3Pq26KHZFj",
  "key19": "4skd5HnbjkFwWuN4tYrT9DDcX3y3eRigC1X8RnD94JosTjfcNJY7DQYSHH8t1fuC62y9rSTScasa5Vm4NPGB6psH",
  "key20": "2jAF8KJWVY2y7Nh7UFixW2ePNR3NyTGs2mW7WNicYBEDjHY9miWgvHb2CunVZkymDAmDe5Hvg5abASk6BtFyWTeB",
  "key21": "5rjH1yj6RTy32N3b25BbHW6tsJGYW9JKTw41gPQYCyU7jyPrikktyK5RKpeqC6gcJBP8vSjT1pMcMc4eBJKzjHpQ",
  "key22": "LjQrqfEnhv3sqewkc7e4x4eGFdnpGXz69ePzSbiZnTfK7sVKHSqhC3kBJgHMpUVaBbijfxepppsQMbkMyDu5BhS",
  "key23": "XyMeqLudeZ4vcKM6rbi2HWVofkqnfeNPB7HhGPMSDTtevUaBXNZMfrAEjNTNn6GUWWuz7nvQq9GQty172qSpcB5",
  "key24": "3bToJBJVvddPEkSKh4zfXKh2uJAVpHR4aGpiskyvzWG9HCaVcBG2CKQsN6Ybj1qsHp3ZRWtrb5rthDzFRvgYLo9V"
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
