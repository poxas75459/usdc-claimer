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
    "QbmgnmGZFztK5NsqxnyQRTGHcTgKBvA63anU4WwR5vUN63BkmkmKa9N7uPwBYiyAiP9n2ZC7oWpLiy6H2o15ReZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEtqkWFg5E9ApX1FGA1iW3gMedZGBAUAU6ePVfCygr1gMRum9pMraxqEjpKVbhdicybegopquoJqw9bhPrf9SPa",
  "key1": "4KhoDyFpB21sTJcCYEzYCmz5oMiB1hrPv2XTRsum9fKmV44WXbTBwnhzjPSXPcMi5aE6iuGjkKCDZQ4NnesTA71Z",
  "key2": "3iBtwWqApHs5PdQMo7wooKRLxzYshTz2MzHzJmR6UGLxzDXtMivdApqebvyk3jwu6tYx6GKn1aXN5fZoq9wZfaXf",
  "key3": "3Rd4YhZfAz5FAG3PTDsWQgrcjFgM3BJjm4CbG3UrLhXXznpQv3kWMzVmAX5DahadP3wtGGVNbmkyLgaNZfGdkg3i",
  "key4": "3kJo2UsLizS4B4meVGBS36FWkyzmj32BZ1LWikH8c1X4mhRwaTscdYbhru34LtG6khFYVSYJdj7AevNRns2ZYLwX",
  "key5": "KffwJcGF2p3gvQYH3he1hnHHg4vsdF1iRDKdMGqFL1j8JDCLgLKJxyhX7x7QaqsG9RSb3XH6M5y9BNGHYYn8BxR",
  "key6": "5kde2HQzv2qRKs1DX4yKiSzddHi7vinjGmnP61FUvoKmsujBPKH4ARDbACJ172PRria5aq6xRYWzWgpP2xyKZL2K",
  "key7": "3Sq4XJM2EA8kxGLNiZikpp8X1jPFPSe7tzJoaYMGedo84trM8EJ3aPjMw8XoaB2yEj3tUNUrPprH4PHPmW9WQGRT",
  "key8": "4tNrTptCENWVQUJ2jyD8e5rsf6FkP1FoisTFS15GK115Nc6rarSPQtJbjfSMC1cFZtQxjxqEfaXsh9mo5f1aNkS4",
  "key9": "3v8nKg1pviYQo2k3H85xmipyRQ6PpkyD6aXxFzhA2SsEva5fXU2DNVVqW7gZurY3CS2kpZqJtUDGc8Y7ogxpBeWa",
  "key10": "JBNBaEQpK9c1Vz87BJ8Y5osE7ZZ2BXCwDt8hf5HQgEA3KaRk8DyzLMjwAcfZ3HE7B4dk5tFgibbdQ1AmgcHSZFK",
  "key11": "2LVdYLRWN6t1ABPbisVMBwG7GDpHQ5w1fcDx2YjpRdTsn5xCo4Zn9Vo4V7iCmVL5yabZ45nEnXFhjvw9omAKAX7W",
  "key12": "3zgT5sGy5UeZTBEkSmke3W1ekr1iTueNSWspBYzpVunsHv5gLPCc44J3ctbVEGxPh2wrQyjU5vhW1n3GeA8tW1uD",
  "key13": "oYMxjU5CXDPhCACVyqdhsu5zeEuExVRMCt1D9co7qDUXEtMU5hfpnsRWkL9UycDhnskCXoh7vPv5Kddd5CKQDGv",
  "key14": "45Wo8zsfpfEg9bimEK3UnrRcMrSXvvo4VvDJWsJwLbJrstFc4fxVx1tGVS4xcb3ZmYKq1wrzLQ3pocJNcFvVfLBc",
  "key15": "4npD9r3WDGfiXVjai8tBcHKnqf8KFwHTsm9mgoTFZ6EaHTEd1WX5VkAkS5JSuVEedi67dAvPrgVNyQL1cCHfrVDm",
  "key16": "2hXYJHck27cs8fAz2CwQC7eHB3Ffj8CuPkiZ9UpdCnRdw5arjiLfXezrzMan77jtKkmKhR37288sGnLE4oojkmQ4",
  "key17": "21z99B8BRHGeUBX5P87jR1Rq6psrWpNsp2RbnWwJA7BqUugmJMGtfe6f2wSV8E5t9sVaTnTbYSPwrZtvkUHZTJAF",
  "key18": "5tuwnBnuUK8WY5d1LNehJR3ZcT3bnH4cTExrcwqFEGu5Efi5uCQAuDDbJ7yas7wGMkH71DfSVYpeTrD9CADgW4Zv",
  "key19": "4shbuCaSnvpTRssmuYzfcLhmhXtuxSgiWaVMD8wqxmULTViL9oZEysDf62RsyUwpbq14pW8Tr7bxq3jBhRPdtPJz",
  "key20": "2gfcXqXHngv9pME8FSDpTKSt7iph6r9d3Apq8eBhS22Dn44VE9h5ZFm8FhqkR67gXofpSGn6xFX8gPAuoTu1TXKL",
  "key21": "jidKnAUfev2YqoEkb9RFvWfKwbmo5MDXhBZcT2eLnjfS5wueWGZKg9s7zNgyWUcfQzfKgifzcqUPhUmJ6e5GwaY",
  "key22": "3y3GYdGZuxoFAWxANNk9UPfL9mN3LFsecJ84xBAbSoGGz62Y82mJzGBgKqdWyLXVW7fUVNF8eSvbe2iKurdqh1v",
  "key23": "5DVi1PQQ42hmXa7LijHsLBk6DvMTY83hyReSapKPkD8QXELuxEbEbmDTcRnyF9wZpMP2wVSFcxVw9k4g3tMFKhi6",
  "key24": "XMTxas8H6kKVqEDUnEzisb4yjsirq4zrbAV86qXbHpU72yyvQM9wg87cxhonpHrGd7d2dX1EQTzrfiS7AijQENL",
  "key25": "g1ZVBaytFauYuuGKyEpjzzUHpevrZxtakiGXnvtjJmg1mHasHMC1nLD1D821QwEcpSfWP5R3ohsUKps3j9qergh",
  "key26": "3TPXts2pFQYzQSe42qKvwhK41nZrCtzhsCW1aBwmEU4p4krthiKVuYCb9bywWx4jFDxb8emZU8Vs47fFw9553DnM",
  "key27": "2YHUgMdmiuUZuWtx8EA1njZPyXHT71MjKemz8288kdiMPa5WsuPEjyNHVtwteezJagoVBVPTSvBcX649KxAdW9zi",
  "key28": "3s3ELoC5dTVKBQAYDwYopegpzv2GLXMEPM2RowaASbjRw9DeBfXf6XtsXCBPhQ5t4QbhtZTimJa6ayeZhCGzCRVJ",
  "key29": "2DxXSkCGE3BQjwqgDLqr7faNGChbr2Zz8sWg5AUakzbRB3AQ3EdC3TSWm5r4ydkjn4UQUDR5tszLKvafpiWGkxWA"
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
