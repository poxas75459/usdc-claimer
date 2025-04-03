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
    "3oeakmp2jHRFiUuZqAngfA3t7C6xdAM8Jkk1vNHgH6FB8utimT8cr4J3oSh1LHLajytZHa7faQMCcQop4busD1B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAFbnZW7YhBHcNRwje7t9D27fwPnFw7FcLuB6X84dBuuetJ811cfRwdmAtQ1zyo6wxcZ5cSt1FfmNdJ7uT73CpG",
  "key1": "412332eQEbMzXJqia3jAmDnB4YEx61qe8j9woxNZvbjVaBhAbeZ76u8pFDVX2Xr1CgwCsy83xrkHjQu5M63R4jTn",
  "key2": "2bXtxmoK5qpenx7vwPUVZ4MZ5S87LMkVxtuMtw2kKxAvE9h64V7BVgTdRR9AXWQmvuudPfTjY5YK7xjaTzSccaU9",
  "key3": "3bKdkYKpRPj4iharzMWmBCc6QXJmi5aQH6YdXwMMHB5GeimkDbVb5ZZhbswmvbzUA8pYBUCiMLSYdoJGCAQbcRvU",
  "key4": "3WBEytPReW49dffjg9cfLPS2rKdDE2uhr4Lapmj3NXf3BRgMXj3EfhegptuMCVM9A5gBu8o7zWNuSoguKsAVTnXT",
  "key5": "td5PWqWQ9UFKeqqE2ChqkAyo5zGWr8yJqaLhwMSzutr97KKSxvFCJQQe5JYmKSs2Aqfeo4C9NCFUgCDXTk4jZT3",
  "key6": "5imYhGbne8Pm59NGo9UjCE8E4Q3FPDhnTtjroWAfKqkMUaVxW5HjfJyJp31wo9rpyuiNxH8QG31s32oByVK2mUXa",
  "key7": "5u7AqPAh5ni1pD6AThngVpeRNuhRSVGY1eUGDFk7bS9MNo9DXHfhMwJUNoTe7x1neDuJ7a7cWVGqUrvfwTcZaFuC",
  "key8": "3UkLE8oB98C6AUTWZp4GtsqKGD5rk9xL4rRaigdverx2BLMFCdbxjGuQCfuB5XyDGSYJLwV4NdbZoy7PXxvq5fZa",
  "key9": "qvNRVBxp5dK5zQmJ4imHKQs1fHqz5rtXyBqZZTbgyXoJgEgG2mgrK4BTpzo1LVfkktWmBUtfLJc81ZyqcQW3HUx",
  "key10": "2nCKdoCFY8QyAXowxeZMd2ya4PuW8gLmBeuhNHiW6kUm4D2CNcm2s4FkqaNotuh6GcQ8NKxBBvmgABunxWnus3tU",
  "key11": "5DSVeHVucrZsFHUYub1pDk1V8JbceQW5nppSMbv5DuLrMKd6seLekrabSNjWaZQAp2K8fy5Pfs4Jb4T2h1uWRySo",
  "key12": "6BirJLfziGN54nvrDunWXT3GFibuHxTny3qT7Apc66RnG2F4tQmxQH62PrNVjFXqNLuWCVN9QHEZVh8UNuvF8Si",
  "key13": "5VKfVRGtszMo6sv4AJyiaesHbPAbGesBH7LLjUFuu1nPe3twjTvktcwJj2AdXgTBF3YKpfzdzKWTY15ArvdttrBG",
  "key14": "3JvWQWGEWum9hQDLszDwYeYtVAbKd8hmmgyN1eArUuaNqeDJMF3UPxc6KTPhPBeVkWdm2LRQvUnaxTDU4Z673u7Z",
  "key15": "28vnhN7ZbyZVMGeXjtZKKt629TAgfnivd5P43G4xmzceEspA44CQL4VfuP77qL4UghCJYVxyUgrDKFTsfYmDDwCn",
  "key16": "5svb43i2oteZyknnTrsWhr8jMEmAbVgyYgF3mRY7qTwqa3wmYjL5TTbokreG7ty8qBo5fRMf4hhjJgMNz5YMp8U8",
  "key17": "X7HcyFm6EhDrbU3goDYEDVGD7H6xhEyydeqmL4QAEE9mYDfgiSgSf7yH3zq8tbZ1hTPtnWvsRvQuE8WVK4jKzKk",
  "key18": "3zF587iEUuuLNyAzfLQWHEVygKc2tWV3vfWEedaCDtVALLdAZ2DMXfRT7TwF1nrfUEn5gjAKdfa8A3e7bGM3X54F",
  "key19": "3QpNTaFR4KPmMTq7hFxdgcr2j9bLGhZrTUCb3WWdovnBCrcY9h8sqLGcnQviQPeDc8MbK18ZaToxEfVPDutYzC6P",
  "key20": "42tapEzFfd8pE1U8JVUVgznTsccLjfK5tqexyXy4G59hpZsLNzVaTYFTxjnsSPMA4ed1shhA4sntTvLaXQ5CyZ29",
  "key21": "53JfjuywNUdVesEiZG111e779Zcf36Kq894pmuTBguKDNpza5imm3QCAe1VWGtvGio2aug4j5v1qgb7g2UgQFh3U",
  "key22": "4oaQfWGdQy4nqK2dYHJ6nU5QhsH8VARDFLVjqRr61FbRD8b54bNKxroHpduBC7bVeZi7eaStfQVB2R4RPmvqubQP",
  "key23": "5Jj2BrrvUjomg8JspX1LW66YEiqyKdn47rzT2MQtNR511YaF5LWF4XM8pFvCX2Z6Ant3LxUVqodXBW3r4CAKYoR",
  "key24": "3SiHcvwgG7C6enW6mdbUZ1Zf2X6YwRZv1H2L393XABQ2fYe9cZP4cV2rQW9PEJxnyyeH6aoyCyCMcHMnnZpPA1KZ",
  "key25": "41xxfdw3Q18GRHTs6qWRQTnZdfcVnduBSENxCbEWKQZqBtFJt9VnMJSUYkAYEByCgcfuTNbyknFYh6Hngnwq9zyz",
  "key26": "3mYiUw1gDcKbnvfuc7zgVzgg8beJJtAaXPijxtgbhWGtm2HYHDhfQNxxqrsCS3kgDno3pqBdLwPYJ6ospYLhYou3",
  "key27": "66uLKDcmZVtje6hBVsgzQNQqwzwPhAot3NNr7HjEtbbpkCbwj3bp4AeswyxQVtCr55D1owm5GVDSrnqzNrFKeKVp",
  "key28": "3GoSXAGDFaD8qGXPYnySy5FMmyjWKe8xSnwJbzo1tRCj2N6sFsnyKcMcDaVcee8gtkQ7LiniGCN6CXscWJ4odAmx",
  "key29": "49N4sQV82yMSA3sg8W2saxwkBZceD8iWkTjezsyFffQY2Fxi2VHMU1Y3p3sXagdybERbTsWnjT4bvETNarjZDC5o",
  "key30": "2v1157AYt3yfYdSxZ5cFyEPpRJ1thTCE8wMA3PLLxQ631ieabtRospMvnfyffMpgXbxdSAJnMzb4CwC7RRn3v39v",
  "key31": "4YyRcmmNYizpTGsXAuYYfFDxqRHtU9Q5NbxfWYG9ymxx1CwxRfREZQnoGuBKCUdjkZT5gbbUKW2ZnS48sLR5MtNn",
  "key32": "5ovq3Vq7kWqgFJ119ZUXXRsRc89LZKxume159n1y8pWPo1riz6sJgFUECQHNACS3gtrqXpG4HBbLZrovUhy9HCHL",
  "key33": "4gg3XA3XA9Eczf4tu5eEqsBVESiTT7zsyUXpFAwKxGk7XWQMRBTPjY4hM4orbS12VcAkS29Ht2ZnuFqFQDL5XUcR",
  "key34": "2k6y46CNBroA5J7GoMEQ5ibCKBqUao9rwKUaNxY8QGJ7D9eQLadPWhc8K4EyvuK83RjDAS2sT2fTpQNkVvcSK3JC",
  "key35": "3qBWcJzr9JgPVbTczywDk1njQL6hSGudKQM4WgVhVtmbwFXHoAbLkEYkepyurQsUmsGyEj2JzxJLQorLyJmnGByf",
  "key36": "5PhYYsR5xKGtshNLavRTHETmHVBCQJwLGF9Wnzn7ejLt4sVXBK2i1jDJLNAg89EckdkjHQ3fuoSK9kaFNJ2hDcW8",
  "key37": "5JMRZAcr5qSwkxCChsf3u7Qd2kjrTjUrMjc2tjFpYRJFdaPUHoAq532cEH9cpJfdZ2PVLnoJ2gULsMVX9bQGTSWK"
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
