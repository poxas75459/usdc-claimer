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
    "3mUvf68No5ymZweFTQHYZiWHvrQnEnNktdj4orzNgpe9A9bpUnnbFEfsJhG61BCzuoi77gPneVWyavkCrv4dSHSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jo8yTwwNWQzr7Yoj2r2FCN8X5D13pcQ5Xf5W6Y4y62KWjpwVyBpPemoHt167zox2aYbYHdddWHK7FDA8cmeDtKd",
  "key1": "4cjt3e1jtT2qgBEFjHsdNhfYQs9sPaxX2Z39RxdboPGnfLxmZAFQzWDdFWpdtgK7zZ7nnR4BYVraPeNzzJooQh8p",
  "key2": "3FymDRgDbDdLaVSm2AkJdSyuVSQomNEDR8NthbhtKrgREzyBrNg1BjFpbpWztzjraKYxUmNCU2SyytRFdqgAbSz9",
  "key3": "4d7xvFsDPp5ayHLRm5JbfKdJk4A2jmakTtJ8rzoNo3iQZfeJxnZktHKUkZonx5AkUWzfn7d7XCnQfxUnJs3HGiEX",
  "key4": "e4gXU1J32Cp5YsLUsWKCGRduPKjjHnhvHicSgNaz8whV144kdF3ZQbY94sBEUELTD86wMFot9xTactaBNBN9Wqc",
  "key5": "59Qnpc4QqQ4dFkA1gZapE43Eg12GzQHjFWLub2N7ZVoWGpS7z88yCjR5HJ88srAf9rtZcyLRrt5c8dKwW9KhV4d9",
  "key6": "KCxadY9AymWDT4Z6ciQhsi9GifFq2X8VYTzugvS9ZBzdqf2K6VP8B54Zca8aVQCktQAwoXpAmN17vDhmrdwqvSg",
  "key7": "F3hpqD7zZu5oZEuLab2DycRofWSMjuzoxu9hcRhc4pGArKxDkMxqsBukDnffNajHuBEstFWoT7Z9Pj7z6wrvgeT",
  "key8": "2pPtUSNrpHUfxKSgNhHQvWU8qAuZaxhrwmJwKP4wHYN4HYncDq9V4RbrkgjEEYSxKZ4fP4Fn5SGKC3wwpn9D6AZa",
  "key9": "2vpJGog1qarwvXwq2bY3FYSY6NHkLJDA5T8Z2VWsfhWFBUSXFcKZ4qxLQ81dRrZe3hnVjtwiQoB4FmCA966oLqJj",
  "key10": "2ABig9vH8BuGohPVo6GLsz1Gu8egEmyShqMsLys2nxe7h5MovkzJqEA9Q8uuFQgrpyzVSLsHP7fm4eTjs5kXvPBU",
  "key11": "j7hKruoKQCRvFjSc7bjnBCvFYyvbpGsnYdCn3JP73upRKZDBzzMY4W7MVfoPJtGx4R1vLWhnj8xMYXed4uvztPj",
  "key12": "4NAguzGRNmzmFRTAwX1NNoXa2TpzNuienfS7ZPJdRBW4TzEHb29WraEEyhHxeNFPweTVLhkBd4jnNqtEQTTz5kj2",
  "key13": "56ofMvGdqe9n8GinUipcz6NJfvcDGoKzpQ5RcWKTte2ir3sH3yjYa25PJUM6JYd3LZUFPn54mgJ4MBLfmdTJLsxE",
  "key14": "kiaxyjD5S95eYa4ApoBXZ56XZUvovNb1JHHnod83T53CEtEsYhMMyWzJsX9TK8993v2RAruG8JJkmFFokazPybF",
  "key15": "3mWHoK7rK1p4Qd7GhVmnphVL5CN8F8niCVDjghBjHE6EpFn5kQnn4Qwhn3YeSc85tvRFpyWHHT5Z6LPf5RftsQ9M",
  "key16": "3DR6SFVcFAqtSJ1wi47qMGV9zZnWWZpjQ8qwdanNvosgF85eGdy6P1hpkZZukwZZ5fBDs49vEWfsjoFuvHmb4nRc",
  "key17": "5XaUMMMJrgKjFR3yVMMGciMaEmDWBLmVVYKbSmWmyuxD2JykbNTbPAdxDMbzvCtVoug9UfmM5SZEJuCPTNaLxfRi",
  "key18": "56yqngaQpXnuWzP6w3y7VEM5PB3f4YXAgpM65Z3RNBfNr3NjwyvCeYPRgZ2rok6o4R3oVybidZayk2GtZPgiQd3s",
  "key19": "4dpWhgSEYHYY5rgiPbgeUbi6CGF8PTPLw2gVXT8FuztX3hnM7KL2TxG2pxPyt66bemasowAqwG9bH8UxQsF8FU5D",
  "key20": "3iFJ58FwkyQkhW38NQSgDWsqyuoLBmu2uCWmt4k7wTpS71SSQ9SWWHhMh1Jx28hE4WA9Ct3Cee2iHEeGvuWXUTms",
  "key21": "4G8Brxt8AjgT2xHr2gtLKJLxPChAzuvc8WJbjs9SHM3ZFDHesQceq6aCRZxT8wjM1SCZS53mAJk8WPvcgyadXHau",
  "key22": "4xwDezLzV13CMq9YBcEZWFp1AGTjYDK3EZxZ7aMT9pgGrjdvDq7ikLtw7iGzjG4S3ohQ54jM44gnH9TATiH1oZZL",
  "key23": "5r9yr3f8aK3uRHDbAoWnHPMkzALLQ8y8mXLYU3abfLkS7dEh8agGVsa2yrEdui2MbUzLkQ3E4MuAvWfAtj1n4dXi",
  "key24": "d8VQZU7toyX84jmzyicWYj4ioAKviFdoAFGF4cDpbuh8nygh1ASYtdBr4gEvmfKEPjQAZWJrQPLaUvwndRYSunj",
  "key25": "3t7h2Ddm3hfvbLEHhsys8mqYjEcGFpRqMDi6Bok6d6qjrD6aoYpxnu3KmtFUy3KdnXgwWGA3z7mrKtqpXbAPykC6",
  "key26": "4PhYzsMRtr5eJJZgaC3VXwShHbPvbzf4vrTphD1AtwBseWnLFpM7b4aEJ5681few2SF3UELBHWhrvZr6RfR45dHY",
  "key27": "Mqk75bAAT6pkFHAbcv7PJMP2W4yF9RkYuRvzwju6JnQPxbPRKpMGauNJUHRWAbLJjQ6uTCYpqWDNArSrjbBG3GT",
  "key28": "5pwK71t2ZhqhvLiJMn7BRU5Y3jqLGcuwZEBAefHte8P6E9rTUKUgrPBbXR8yecXVu7e3egWRDnzwWt883JmLDZqu",
  "key29": "3eqpT1FMZsGaYvcE7YikcuG9qiHZt4xuwDxTXrkH2sRgESjpoBGYBxjbYSPf5H4bjRJAo7B5ZMmhogxPySCCeKDY",
  "key30": "3Ua3iQ5F4xYR6cPhgh9e2DbqmzY5HdhVu8D5gkQ3YMcRFpQvAdNxoYeT7BgWYCPEYzfPtBDwPHGeXdsstP1tpdqe",
  "key31": "5LjSDtKJ8Cqzqr54XTH7WK5iYRbny8SZg5ALt4M2ws9S8NJYyNs79zffMtzGYGyPJYPfUhiHbrqthDZM7NyGVfmM",
  "key32": "dSn6jsYu9HELN1XrrzZPmpsWzpray9ozUwUtFQ3PNTPXjMCJic6HuFyCqmUzY1KXXKx8Mx3e2AoZRWk2qM7cKpc",
  "key33": "224srimx4Ry8SU3yForAXtUzsPv55Zyvzj6pciKJs6heCekV6kZ2pmPV6irsVR17cpUpjUBzJLMxpwREfxtHV6GP",
  "key34": "UprJ3M2KKzbLFrmnyx4tkbeRCBfkPNPZvTaBhqAxcpKtaTedyw2HUuQzxXzd13CcUHHgXh1ke81bU6QEGmSAhRG",
  "key35": "5Ybx1nB7LRgcQRNeECFnwb89uHjCP92ybbE2ibAh4e7uwxm7wNGhmpavapRzSasY6egBAqonpMF7twykEyTQYvog",
  "key36": "4GLd5xxSyU6bUuZqLenuqQw6jE5cqLHbqyTMbh5wfre7rZAjbsCX55DARLx26wvjYnb399FBiVi5WuVSrkaD9YaD",
  "key37": "gAFHAj5WUZBYYiMBErWHuCSERUH9dR9jJBHtcCu18DpVk5qJZaUdtjJoP36nVzJo2b1xxaeqN8BQCbtkHNRNAm9",
  "key38": "4Y2hRLJhhYDTtcVSQdDQxPR51RFYqiR2WAAcS6sTXawdd9cfn5DVHRbMiGx73csm4t8wqxTbDyFH9op7wH6x889f",
  "key39": "Fx6yTjKjiri6KfQmFnLKfj6dkc9wc3kTGz2HGBVhWfh8DGcDM9XuESzRMVvZQ6NuP6qq92AZgiQZZbaKEMcLLUq",
  "key40": "3EhJYLGvT9s6utoBJpbiNyorCbsnJ3GDCLJTJCxJoc2thJrTbjqfZiqG1rCSJD7HXgt13CofKgLyNUUbWzDdWstC",
  "key41": "2hUMDMKjZ5V1NzqVqArCTe2gNHdu8N7P98XrC8tWE31EJGmseC2GvSQLfFtia87gLSUAXAEdguh4ost8pDcAggkQ"
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
