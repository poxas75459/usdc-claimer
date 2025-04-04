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
    "5NwDonvxeJAosCtRrgW8QexAi5TnGvBkCef9J12BYmKn3uNbRchgmA3tC8SxcNURE1LpKqUqwPumDBCP9bz7ZsSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4ENph3uGYCS5MKbFSbhVU3FBgUgADdP7WJVcCZ8FdFiN5mxUAmgx2nj7HkMBiMWb8CpzLrP7qTKCMDzxkT9UEj",
  "key1": "k7PX3RLv2DfKfnFyUpLMyiWhNtQsaP4A7XCmHF7XEtfuJtpFVqmz6VrPpgcsfVeNTV2WtSMeo1E4n5cSRibMYkx",
  "key2": "5t2x1XdL5FdAsT6LKQYGvXKr6FEV9sN92dZeRRpewWLHXNRPDecdpyfu46jHXyhTTsnzyazq75C7qR8bSYF4XV2B",
  "key3": "3tKbfVzq45iwwvsEYBPx9vTeoUAzA3ZkF7WtPfGK9FurtLjrcDrxZjMf3QWjQVDT5vYoEmi7kVu9KKCcCM312DUW",
  "key4": "2BmsAeDx7n6EgRMY8cLzJheQYj3msRF6o5BnmHZW5Zgrho96tmpYktnkLfk7oKJenZrJFy28pXaiz4SEpKVu4Voq",
  "key5": "4Y2DUZBWmTC81nCFUsqwV5PoVwfDNWBERakxt2wJkNap7FGnSNba1qikq4HnRN1vHZ3Yjf6fV1JohowCnziDyqBA",
  "key6": "NRFJDZxfqFmUwazupaES3QjnReDP4ExPkq3hStAyVKHJmHbdFRMDeFsSos6sfn4cuCgMnAeV7A4UroNoA6MdGma",
  "key7": "2snP5sezJts4jDkXuYSQQdhroz5womuJJveLj4Mb1BYawqAQdesYGojFc1ceWcaEnCxy12yUx4LKRcpMACnH1X3E",
  "key8": "64Qej5LB4jB5KHEHTiFoDphBh5x7hy45xrzeacE3v24yrkoKvvXxDyAdpRZNwc16FJqmDqDaaf6oobCihvXQ2Tnq",
  "key9": "Wu3MHYKRggQFRQJVfPkwM31RVyHTamMmfELXui1ecAkLszwa78ozdA1Mk12aeZXXrVdZ51KwvEkwYxqZiBSs9zR",
  "key10": "27TKZgv8vQQ4LG9EFhd1MqZb2m2bAXXU6YGFEDhDSrLY1t79hU7CEJWR6Phz891Mu5V6MMHVfqi6qMQJEkteBDxX",
  "key11": "5iCuMEXKKcahbMXfhMa3no8ppdoFu89FXJ4sw1TBCfksV7S3HQbWRiHCLV1Xi122nzWdB8aMxVTQwFzdAqYmtLYh",
  "key12": "2a12p9rqTq5qCWqTDKsucFzNbvTJg4SAx8pBRVHBEoYQQMgHdXHTZ5STwtQqHpA1hqHSFvoWM4EwzVZDX66S8FVM",
  "key13": "3gp8oHptzMkfLwoZNCYKU3sSnUqawhHd47PhGgzvrxQD9yjQPpGNg9tkSSEbttmTNvEb6pJNaRuHxiShpgjNDfdz",
  "key14": "qXCmj9e27UEvjwPXdfJGE7SqZRgq3xpxdAvQNnLv5DsmjhhsdVNgRav8zHWZt65Xsyt2yH5FbhCopFi26yhcCut",
  "key15": "47pYrduS4Q8MDtS7ZeUaiuAwe8AYQ9mR7bZ1hMmvh7Uj2f5t6tWBCu7FWWaS6pE6CjvodMxbjEAT9qShGqMhxn8W",
  "key16": "4S4Zhb26jRZtPtr9rAQsHZoiL7jNRa5pqrqD89YYKiQ9ZLfhDbSXTwnz1busDqKYNn5ququfwHXfJziA44jrKxCp",
  "key17": "3FgVqHTRZ64DrxHug6v5jovg7BL9y7ZjoFMPyfBYamCDaw6ik93K4q2Y6mN3c9ckeRQZPKjM9e3nVPtQq2NScvwV",
  "key18": "3myNL8uQvvZUqLaD779vZcZ5RpioXfGfXvqEZmfodhLMAjRDUCk2HaGmUpnkaLYLt7dDNxGgYCBjzztwhdP5M6dT",
  "key19": "4WurwdTT6mG5dxQ6JfsxWmanZUSiqBdExPPu7asveLVyhSErVBfC4WoJdUCVuRg1eYETf9WBPoMW4fv9xNhe7bhn",
  "key20": "gTsfTJZ91QQLyd2ULVUEcf39NXz8LyXhQaAgBMQmhF5XZeVbhwhBMNxuPKz4ndEsP6DWasK5XXBvjAVUwXxzJyW",
  "key21": "3ereaSZz3C3xtKug8RQCYtnrTQ1LijqSJi9uxLB5HKKZuyK17kbwpQW2REYsX2aCHaJbb8QArrJaJWqc5uFn6JKg",
  "key22": "zR5HSSQ9h3vdXuVHmjUEcjumyk1HVWEvyJfq6AucATMTKHdHABKdSbbhWXtU6mE22bD47fTdzMZTHgXfrvMiJrd",
  "key23": "2cgPhiXCkzt47rj6haH4yDXEkuUuXWzah4Qe9X3suWRMxe9TYSmdE5MeF1kyKxTZnFTk5iSUDMk6DUm3c2dn4Muc",
  "key24": "QhAM81reS5vCMcdhJZQPCcGRssAs1QTSkHLu13GPj2puD1MMeYVu7kEJvNmMqK8rQVxcezXwwtuzN5UnTpKyXEi",
  "key25": "3Wk36LtCWixQzkh5EXowhV1MmnBzAX42UjMAD6FS1hpKqQUpnTFTJXws5cRtZunWE25bf3VstXdy6xQbgptW3FDi",
  "key26": "jGvcedgFMdG2Ncfinm98jkg4CMHDmYYZSrEZ4D1NUb7aXFKoSJSjexcbtLViYqDcccyKDeYvhXgVQw9gwAiWMLw",
  "key27": "5ce46AxLm8R6mPRzn6z2NYX8yiAZ11ZgUF3fB8MP2SVDiTicMSfkzZZSZsdbmG7EoLaZXjxLZxBtCSWPo4T8uban",
  "key28": "3go5rPKsY163LjeT7kqBnEFKZQpmQ39d1hjCXmVmKXngz5wFCAjrBGpxQS5aLjGYZBovaFWjFXUN9spqEk64fogV",
  "key29": "5yUiSAzCkThPqCnPvHMurjUdCp3kFrnu3hwVyvGdhNP1onUGbfANfZcuQKFQo1hXFZ9wu4jSt8RknYWs1kqyKYQj",
  "key30": "5jbgTzuo5VTVREaWzinszVNevcNMomdyaNFq85MwboiYxgVWyCDoRPnuCfzZDagbmxh274WpQhbACZM6oRAcyvqX"
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
