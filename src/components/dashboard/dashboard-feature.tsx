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
    "26yipaTcM6iY75kUdoRUvExW5Lk3Dv6ewnu2sAduRHQigiVwNFr4ZR9BgiM9JQqnCJJFj3iWHM1TrmmrqshRMdJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYr7kKAcqXm76nVVj83BBNXmJ8i9gncEwjEy7PyJWLCWnhW55k9jdkPnYhTJskZFnCt5VgxZhoEhUPnFvFdr9FX",
  "key1": "3EKtBUXCHXN4SvqXx2VcBJGqPLJphkbinfqCvRJS5YU3bxbpLmK6nzWmSLCvj7jViPYatL7fX18fuJnC5w4YcFi3",
  "key2": "5tDFEEw8NHEUTEw5k5jh85iz6miBVKomkEtfJKZVEDzdL7CS4PTBni2JaLMwypik5nvAkKasSP38uNWRuKc5U9Cj",
  "key3": "5N5fft3yc2giYotWCkX3Fd79FXhNL5LjHTQiaYeoeSGW2bsg1aZUbDmnSScP8XnFzcEMHvv2vPx57vkmtvrEtis8",
  "key4": "2tHmwcX69MDgTYdXzd6MKMiZXQ5FdKe2QvZsaCh8Ye28KXuAnYeijJZHnmkK7tjMCz5EiKR8FPcEngbaoSLNiFu6",
  "key5": "4EQVMfyV9CKTZ8hwaPBtEXWLAWLsFTbmL2wFjA6eGXTf5qMURggwtRuuZbtxjWahcvw9C5UULp6xkkjDVKXFZKwx",
  "key6": "2n2vE9XohQAZMjJ8ZQoYA7eAuKm8k1SJoTXL1bWxSjRoX1S8Ci8fz9DritrqkQ8YJ7f2Mv5RTNSooD5cd42R9JW",
  "key7": "a15n8HBVKynszzyZ4dinv3bKhFEkf9P8qkxY4ZtugTZYGxady2pFvFZzws2WnbAii199jTXg89dqxq9M12otCtM",
  "key8": "3k8JXxTAgF2AJ5anYgeHhVd5CcyCZY4WADn8MmvMYGPUxytwWysNHk7xz87TWBMYHu6bnRbzJ9AuqqGwRMxj6V6S",
  "key9": "4WuXxFuGHFXovfL5gb8AR8VryQtTUKVJe5tiQ51cLvPdAERD6kweQueCC6A6hJH7AenCtBorP1kT7kjWXFj3JmF3",
  "key10": "3BYLV8NgQcbZho2Rs8QoaC71jFGXXBWQufRBLEVE5TTvHiBJVoW1Vv3S8Pyvu6BMzqzucR7y32MeYscThCfthFc4",
  "key11": "2jxn7RiFgFkqtc6krUkJELvSNrbTXPCRiGGFhVCAzz141znz3abjiGss6yjc2U28r2PgG7DG3FxQTSQQNmst2aqX",
  "key12": "4i6SJg37iHo1sa3bBTpc3DeB4mwBrn3MF199iYWTXkDGqnJkvwJ5XcDty8jwHzUAjtZAQfkecWZm9222J6bE5XRM",
  "key13": "58pXefDg5yYDk4uprAUmDjL5FYtsM5MTU7iUujCXLEDaBmnds8arCQjcxky9E7WixzipEXPqiNfJ3hB25VMMn3eG",
  "key14": "3yVZoCbZsS1MStKHUGYvFxFKbAqAyijAzQzW8VU4AnfVxmo1HWQZkWxnwLzfyNEKzthVnHptFqySBkRjHtCtR2jE",
  "key15": "3E6FGfdoFw3zU2WD5k5VerWuLrw56ZrJVzH5ejWPChEf8pwsPy4j2JuQzaiWjGTjSka68WzywC8idiDiPMwjYfbj",
  "key16": "2oXrdEZHC44MkwQX7VfkjJyfsT1br5qHe6HyUVHtFCbVZHizQFAxC3VTHrcv3TftzbQZdJey9PWzpn6wxazfMJe1",
  "key17": "5kSQ4GZmSbG3rk8zyFHvhuLDA9bmj15YX1g5epP4kjrVdNwpwpsCvTx1G7QThQXENQXrdQAHkYFyAjTW59Xdb9aP",
  "key18": "3VM1dXnCdNFEBzTJ13mrd12cmtCqQm9xq7mwxjhAde6Kmq84v2CrzUyckewM7SoftCyszkmW5AGUxzJ77QrUo7zG",
  "key19": "2Mimy4178Jz5HzP62nSTiN6XoaUSJB1h8ERvLYXjSCqkoujJXENrF6VhKj6ZmwewtcgZTWTzvqhQ97TJUK9Ekyzq",
  "key20": "39sCYekmWpfX3QvnaCpCk8rXQDcyouT3tEarEDx5bnmvtKEBSGrk9EXPgS7U9SPpcyjqvwxttTSVLTNLLmy7Ymw9",
  "key21": "3qqTFYGu3VAqJhMTLDwdYytLYGQMcvs5qA3PeL68CcPwyDviJAR37VM3nHzutV8q45vUjnDaEpkfUKESqtBEkLWT",
  "key22": "5thyzB34psqDyF195kGsZLPDw6i9WWHRSQWC2JXceJvmAnZY26EqWWW9daUMfqJw12YvNJNWSa4zw4bmg2zxh187",
  "key23": "5GUGaPXhGs7axayQsn5bG5jxo8Xo8ps1d7HEPMi5Z3V9b7vr8TGAZzeQCMtLeJLWtUsZMFU7Q5EqXBW2x6v7KKdr",
  "key24": "2bCVZgSQUBLRdvbRRSo9FhMU9oQvzZih3poH3M7rzYnmW39NQr8MZziC9YDwq8pSBioivNsNWpDCfN7y6X8pXPc5",
  "key25": "221yXRh1Cs15JMHLKnsHrFbWR7Vs1ddFHMwHLWsF1F84yeJfYGL1xHUovC3QPuhc7GoTUaZDFEnfBFXyGk2kfw9M",
  "key26": "4Ysz1RgiEkotS3Fna2UzjWco9iCkVBFZ1nECKFo4qbYY3ZBMKxBmLgJTYPPqo5TY5E3Cf4x461pec9fSp4yKX6ao",
  "key27": "SdJdqiA8Huw43KPJwDafKd42Q4J28APnmvqwQ13bmw9m2VHxLPa1vC1R1JDtSR8QaAVeFpYQpXsgpXQHrrUqvmJ",
  "key28": "5AWnTsNKVgx6CS6SPoZSdamuKwUkd9xyvqU6KY7xeYsiM3AMQufsrVDfxRdRgJQd9L2LT9kzKw9ekGVZX6GJpn4v"
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
