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
    "5aSBYin3svQdo8yLqiWNRCk4EtL5N3d9QvU1daVXMvtgPexdrA9CZM73ZmdwWWAj9CqC2HMA2ddbUiZRMHM1BeTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AAqAqgRnq3t3Na2E9YEnLbqtaEUQRmvsFkdK4AsAN7j74bmWNRQxE9E1f8YNNvGdYtiHz8aVPXqQvhesefFtVQP",
  "key1": "4ryGsySWypCDWFFHbp61nPRngpjZ2TprhG14ZrZDPBZnnSQ819khGdSY8re956K5gFMUNBVmNQ3kreS7HE7utXBd",
  "key2": "3zGKHEMviZpewihZn2JhPkTFtrvZNyYY8yFnfoiMHtDSt9UmzzhprFk1iNQE1gY77Ni42nR9U2UJhhQDZ6yaZNWC",
  "key3": "5JdAr1vkLeKzfxfMTgqzvteWTANQiRXXbRZxbYFJLQj8LvWytr3ccdFToX8RqMzJmRyM3bBGmp5ZzE1TXtLEHSBt",
  "key4": "3XHEDDGFrwp11Q4KYo67hZFK7PGsgdpZQscMwZQsoyjLQ6RFA5jQZ6aJgXYmqgF5cMg6Me3FGKcXC9qii26yKush",
  "key5": "4Q4qzr52WAXV7U2yRoVk27ju8VXTzzE65FtpNKivAfLLMvydHggD7tfNqWWhX7WEdJ1pxTLamRnqD2kEXeUMjPFd",
  "key6": "u3YFLRiTo2WhPQbxC3rQqQE8yTt9a5mhES1ftJgd22bpGMomJcUwDSuAojGWJPvWq14qjeim1WWTr2EAbLi3ouu",
  "key7": "8ehnzq7zcJ8i148wqdY9W4cfPJTYgqwmFawtaXcScoCV4tugnLceLjGu2d83HRdoGPLGWsebhQzFQ7XCT7QrSBK",
  "key8": "5CgaS3UJEko4bKGV2breHAMSssccXqFi1icEM1Y1mGRt1oiAY3YiToJse79VBT8ss3AXKnP14KkmXF9HwQXMXdgy",
  "key9": "ZydVWuZqhWJWyGxi13hgzh2yJ874Tgv1zKnmmBLK9deRrcVnsSiUzFGcVYDq5r8N3FRaDKU7rw5j2Zt2ZXTgWi1",
  "key10": "3WpgJ8Q4yAFdRHS4vonjKob5JNfNwY9bZ8fpECi231F5uKUfMPXXoohstRmYWYtCFgCNgQGGiHGseTDgCP77b4uh",
  "key11": "2CzQY7TJmckjstBaPLcrFqzKqt4Lta5X38ssMnj9idASba7Mm6uaMbGGyormMpB64Lqppxp5nFvPrt6eM1niCNGv",
  "key12": "3nCqobrkexc27wHzdncMUZ5VfYxivYHshaERovZm2ghST5PCGnFVZzJNk7rQq7cUPwQ5L7VSRccf74ooUcY8vkXc",
  "key13": "24ExN3YZtWtvDtgXMfq5rfCAxzLz8SPuFWBqAHmUhMHkJUjKD9STTWuuH9BqPwYba5eiV8FXxHDBqGfCe9z2uWd9",
  "key14": "XscAszvGctXtMjke4oCpUs4xSVEc3cwKn4mM6NY6MQW3zv4kFmmi1fhoVSenXbNpWF8FsFUGsJBuBNZSgUq6t7N",
  "key15": "4XVBcmWs6JCdbQtzSfmAQtW2ZvxUHTS3zn7ookn4DnXLmBARBCETSTn8ToNpfZsyPNcfLviv8tpmAJJJAmetHfpi",
  "key16": "2kCHJ8ra6fno7SB2dwka4DuLyHMC5vwFubeZahiv6mQkLYEUHc9d1xpBBNp6nDVqK9qwSZibf1a1d7BPnQABAa5w",
  "key17": "3KQ1WciZoLVitqLcWL1WoL64gips2dhqV9diWtqnhZh37nBqrSp4oE5bNwEj6m45Fhzg91YMCdA1584isyD6VTCL",
  "key18": "769sQDqKqgnAs3B7fCmvJdRzQqvrFFT7YGwwvC4kmJw9yhtZ25fuNqVqTnCPErwkFQhU6oYEv1qybGUcUUCKus5",
  "key19": "38kq2GJMce355hwVrnwqB6WQc5fk9B4Vt2kvjamgH8JZrU1Apx6pMi678xpVMwNPmNcaodspCoGMfw8JcwPHdojn",
  "key20": "b4mPk1FNy8UmxEsh5gjzviTrJyoXc6VNDugZnPxEqKdNHiLa4V6Az8Q8j3m7NSrz12cjSaMSPDnUSpGL9VJ5tcz",
  "key21": "4S5R734HJ7D7EVX557wSJC1A9P8sjWJkAkaqS4x2HNjwHgGp4x9KtH5Ny3GmN9u3si8uxWxNNdQxbMcBQ4xsmMSz",
  "key22": "5LGo2yUVk4rrRVumbJvSRMP1BpTi2UrpdPc9hEoSrHXvLwnjZE8JY87DWFAqicj65CKoguUo1sBntYR8PjdXNtEW",
  "key23": "4kiKokP1kmkbivgbMzTSmvrbnqeupJ8V9nUJovo2fxJejGNyJPRQ5yRfxVscYjcArSZ3Y5dXcBzvN7NCV4FM1SAN",
  "key24": "3pxteSptpJt5qqVnkNT6YdfqLN3oZB234HZAGnCzE35ARGnqcPjNiuj8cNu9UVsE1KnfCbFQ3eMZwKT6XMHeiWZA",
  "key25": "5FuyyWs3fCLJZP8ijn3bGS8abe74BfzWio27EVLBtpUUwvtejmuUzCb7ywXy8u2rSfKq96RfuKvdTtSfwA6VXwY3"
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
