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
    "2NFuo1CmMcijfA4HBSVoHbW8VGT7s7bBs53D4iGHYs4hwitM7wX2H3dzWSto8TjVcmhus4EiY5jgPdEgYJp15St7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653rAYsuC7a16bV2U7sT4U9CPny6uAysFHiLodjspGZ6JcgoPUfb3ZbTCquqX7ns1BAgcJsrwkSM7bMqimFJG3K7",
  "key1": "5Uvz52LKUN2hBXez2KY1hnCWrsNCt5nBE57FnfQBHMhjmb89StHdfjLBvBaxkaDf1aujJH5VDE5wJxn3FznPtepv",
  "key2": "jPooCcGYNq3LquUWawwwjoWoccrmKgsSJ9amvKfDdbn4pZrzBb51b4Fbzz3knVC1jevHjHaVEFCd1HpdfBnTAHz",
  "key3": "3ay8yczPUdUCywhTagvufPW9NGmJccnzzmVZbART76ZMbV14tAiTChY7rgcPAZmwgEXBAkdSjpQsgniCnBsTgaYn",
  "key4": "2mUNStwtYV15PVs4FaDrJnf1vg89CkuHfz6fUwBDgtdpSkJkNxs6WFGhBdWV6gX5H8uSVpjUSuLJXodnuABb4t3H",
  "key5": "4MqKcvYXF7Rpv7jnjW1HxqLmfdavdnX8anxwneNvtboT3vgTkTzcVFPjsjQ1foFg1FXN6pdY1VPZVhm6YMrbCfBU",
  "key6": "5ouw9RA88pCcm1FDhPe8gMQLZgMitJXGoFWGWBc6vQU5g7M5JEtQRm2Aq4zuxasoLh1pdmuKTEtm2pL6KnbcNJ9v",
  "key7": "4wy4zb5xjh49taEbVsuNWeLr97cYSdzzs6NBwANUk9jX8f1WVAJHnJ3nT7THGVkrYxfNqx9iFi1w1uJr9eZxSjHL",
  "key8": "4Vs4pDBK7Z6bGYuks48yR6dHTktgzfDwJoh8vLBa2ZjAWfzczGeb89Su6cV8zxWZGzHeX4D29cbjjZSSApxj8hKG",
  "key9": "3XVCQggpTCRGamEuYPVuQ2kSHDx7p4F4imhb17WVEq2UzoeUoF9qvjzxgFnvHi8XFw5Wngyf15w3Zc9RgyrBquTG",
  "key10": "vek9fdsyMPTwYhH9TMXWBCXJP5ibT4Aj59XGJZ7D3GdGxrmeFbe5razhFDDqLLC1x5Da3Kou32QZG4sbLyzBT4C",
  "key11": "5kkc7CxyWGN9qBMWzjtoFfURfKbrkmXPzjs14ep4XMbNNZiV4jp7VgiSSjvKiVRbqFn2ikEUBnnjaWoumL7jo61P",
  "key12": "3PSwrp6aTnXhMgnnjLAwcu7GE5mpS8BsBu6w7ZfQCz5L7J7kqCjdwoRKSjgRgtrsGEqpUQzNfpPSqb4Z3ptSPoiZ",
  "key13": "4MQZCSmb1iUrwX6KFm4CHD3xKEgsqgcnaePh3WdVDgu6pH2ABJidhPMcyFmPDmECdkdwGSBj8eQBbkJBCabGczf",
  "key14": "4W4yDnypCyfDo8wKXQisfEuziYYbq9yXEagVzJQqftntPqTAQz11WmhMc2RYyMqLpLYGkH3dArAi2DHvJrvNtCg5",
  "key15": "3qBDqchgABXrpbBTAte7L728PycZGbHfNum6aY5KBpaijtaER3AVKwZNihkiYGQxXeWXj5szbHu9ugi7CcJP6agi",
  "key16": "uAbbPScMKR3yEAMz152JLd7Tdc2z3ZNLBXt2NJ4so3LAhHKBHvAyux787pB8gqfTBpB1RuPaXB787eVQWuzw3uZ",
  "key17": "63Rs8AN3gh7uTX5sZGDp8hxWQomPGk7GwtaAQ9xaLdAyEit79rzimJkTWwFuqTTbtpQGYMCMHKbLRB523ZguwwfP",
  "key18": "65TteDVzZo1KotG8HZnGic7rDMFKPHjT9wZkT3Q3qbVdW3W5orYR2d1PUaer5pFNERkhj9fMHUSmz6dYKhW5yizc",
  "key19": "4HzC36WW3isLszawFpvwVEZAREdhZ1HvxQPFULsr5k5PX6XHvNfL9axQ8Nbt8zJN8uyAp8v7jytqvEe23VHQasuK",
  "key20": "BHq9muMgPJLqKcgg1YRfYnqTHgoB9o7u4SF8G8V4y62ezA87FD5eU8b9UWfuWLKFrNuv3YeYp52wfh97yy3dsab",
  "key21": "2LrJnS3ZsUVpi4c1QEX8VdD5FyGt4M4xNVDV28jyZE5uZpLNhcDWCwmHr3c6AEcArQkyZHCYdPoScioxCUdfgdyy",
  "key22": "5uAonwEtioJ1jupZVUfXmh4EXuZHEXW3vTAyJFhJC3Q14RCYCorfBNEdPzAjiJhLVit8XbRZMBiak18E7ooMnfvv",
  "key23": "4Q6P11jkZ9pWrMJv88ZYAL4uc7pq3VFRu5HsrWmNmGaWv8kgBgLKp9uZLvxQCwc5WahavLSfBRDZiakGyrXNtE3q",
  "key24": "5u9NSeopFrw3WKx2mKxFdLRd2kQTHjDqByGBYvH16aGcAkgTusLkGEtPFnx6fNsUaPqGD3M8kGx7zEW13F3yTgDK",
  "key25": "3gWFdBmpDoz3FNuhZyxBi3aox1NtD8eZCnzakcnpDLsGCv12hiXt9XCc4Au45QckXuuywYQ6egEx9UFTsvFB6SpT",
  "key26": "55u9Mf6JDSuPeYfQFfySeHSZkfJez1FijZvK6HGPYuSdj8NW6q9DLd7gpNLu8zhmTsbe47i1mhxRMeCHcXik2Fzf",
  "key27": "tEfgiQ1Yagq972D4fsC19eG4paUAWnXuKdLKhCZTDZ8krV5HeTAiVQjPmAdY3GUf8nXVkQ1meXWjpiioL8zF781"
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
