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
    "jbtPCeUPAb3Lky5324WiP3ZRnPSmPv8LptgNGjKqXXNLj3dJzKcrrKTY7XHVvcnVXeVQogjeC8KW6XSBoBdYjDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iFurfWUgySTEy7qsvdM4cHobbjiM3rH43nzSGEuvMKMzJPwXPmgyHfKoe5iqxuiS3qt9QvxVa3sfi4X7Q8zCUWb",
  "key1": "4rfaHw51Fzr7eQ4oQ4RvYZ59ndH2th6SDQheyb2hgat7JCazP9wdJkPEaMMcCATGhtFr5NJQQtGtt2fFcAft8KeA",
  "key2": "5ftLKNuBCFZbP5zoN3WQnBdiGfS57UEc275N8eh69WbfUqAv9iiR543qAZvVSF5iqNNQk88xqz9QSQ75nUmy9tGJ",
  "key3": "362qpk4v3tZXaMoEehw4nrLmRnwkZmfTXpnXxGmgvCSSKbfMmQ2xeAWJrtqdm93bSrnNvRPtsJdvtFeE2hkACDv",
  "key4": "4Swt59y4FjsXcS5D32xV7JEgo2wRtt7JinT2uN15ANMqYi9UjHsj2DUUyqX9J98aUqudB34LNksuaqiuPAHuJNiy",
  "key5": "2mEm1Z6qQU6AwZyvzjBuUL89VDpyLTjrydKZdnBRjXzm6nJY276ytGUktC5cXLKyUc8R6zLypuc83jKQXfwJeXc1",
  "key6": "uSkhZfxAVGJnFDnaoyfiDU4baLAYGoEseTQJGeJSL7i7daN71KCPro4QfiKApAgtoN5LjYpmCXHqgcBvkQBdHNQ",
  "key7": "2UeKY93PMpmjMR8p89FHEUbqx1VMHD1BXL1RJqwZZLpPMRfeVVrotPc3K4SMF2WxLrHJ9iqJgYiUnkVSZmnPJxpN",
  "key8": "23LzdT9L8jnXa5nLBx9VXmLPGA6UH57fdiqKfa7QwHyRd9DXa7BAyudtLGPaLJi8cFq3FFb2PAzGGnwS4hkdJrtH",
  "key9": "43S1V6KNHm3h4tPqDSd64oNdiGatKiC6vHH6gzGjVPjxWgYvrSCobc7z8rA8NiJdeqjWLnLmdPuABS6KhubSdy9R",
  "key10": "2Bvnn4MVfEB3egx1L6cEmprXFhhG2Bvhj8uqhYr4J6w8TnovjQTHRQDLsoC9JSfmQmVSmCS4NN8EbUxkWvw982Uz",
  "key11": "37g5YNhfoks9uoSUUdr9ywap4bVrJ7EGhUF64r8A5fqWMRthoFQSKg5iMinuGkYyqVaJD5FV1TdNfKw2dVsKttgJ",
  "key12": "4s6kY43Y8T8uvKhjwPw346m7dWunkZqZ3FvErbgTwRFhdWyVuPNiXejPdKo3ZZmxzym6aRancKAeZpa7mvZRKs76",
  "key13": "49ctdQ2dFZWhntCrDjxMiLu7VNxmtBLwsYPiNZECHNZ3peTRcBzen6E3usxZEKAkWsTLuiN25z8SgzzmZP8XnqZz",
  "key14": "5MBQqM2vZxLRjkxhKPGwqj5GRRNXHWKoPBfGhYSWbmMCkohX9xuNQi9oCKpL7oEeoctsEVQRt5cSmiJBUP83eEXx",
  "key15": "4NucNrq37H3VQWD9APGJYL8Yg9b8FKDAtChpBVRXhLWdoF8DRkSPsQU7ZLh1W43f3QxqdnrHPPqZwHvK21gDLGpQ",
  "key16": "2XQMWzjZ3di5zhqvDFEREK3Bqp3kYwz9twX84X5cwBHQHgXjSR5tiLJ6BkbyxEBnjjvzZy2cVPhAxoCBJQRpb2xw",
  "key17": "29oGMUzjvxm5CqmxPz3uHsPDAHaDWq7V9THRUejhS8h56d1fvnDsdioqjbK8khAmXAYDn4ha5R5akNsb9empyv8j",
  "key18": "2APcXWeNeHPsEhLJ8o94G8geQ1KtMkGdYbT6MaonKgUa66qUEF3wW1hTTx17cFBvRxMQrx7vzXBaxQLq6BYHXSQ6",
  "key19": "2NWj7Z2Ha1HzRaKDrnDEceRdG58pQk1uEzfYdfhUvrkCyfFS5BGe51BEM46Y4rtJsRa71EPaHLngZ2FWYg34A9cN",
  "key20": "59foYcmcRLeVMF3hHJKQKYsUVKhAWeyPKWfCmKYGqMeHk7WjmTiWU44nraGjAqMVod4znyqH6sBDwxYY42eBDU9x",
  "key21": "5YpRXVGAGNdDoWaCJNRQcmGvwPtZEZQ8zsLqujMhxQs5DCxy6jCCTK8kyAXBKVqqNSBUT6ywm7wcQLmn8j6N6wWu",
  "key22": "2rtLqLSo1gjGbqvubKusZmyUnobQpXPr9eZtXtDE6DZyC9CEJ1gNbLjoZfepQZKNBHr7kokyvtkSUpHjCBDjxB1s",
  "key23": "j57DdJUyzptgtVPpKUvKbGDPGNiaG5XzBS9hT7NTkWggu65xeVKsZKFNQbtWxRNcq2vCCsagA8xsHtFP9gYomQF",
  "key24": "4ksN95C2RRU3nZRjmeefutKLcBDCkmcpLifJF13inh8JuuYNcVxyFkDk2VxKPsF4yNE856bMFEzzfqumm9UQCxCq",
  "key25": "56zCfwX9NEZffN2JNafEwrZBmEgn7oWBbE7ebh2uCXyaRwkPj1UavB3pK6pJvTyKxxJVrBwJnMxssNMYnHKsetk",
  "key26": "StqgHEqXBM1A8Cf2k9LB92pwcCu2bdDHSFK4FuxiYbM3uYLP2LPTTXAnyFTLtJ3DWyNSAf9ntrZzZ68cS3TqnDG",
  "key27": "5S9gDZNFsg7WKj6v48P5JXXpoWiHEL6PgascHf8CWxBogn4mGgvYrTAWhCrtGjjnRh9ufnBJYhZLgXMnQpk9xan2",
  "key28": "5XRmQJiMwzjipNEaaSToiUyiPuT5drURNE2YehsHQpwf8bhMYmPutmShr2kKFvGb5DhTwA7Vx7QXvb7hSHswASUK",
  "key29": "CwknHv5V2aJ2DeCuQqFTnmVLmF5qr8AbbtnUuKA8fiBRTbjwhXvZwYbWmFgANPEr978ZFdvJCkrhoetEWYNtoyb",
  "key30": "5EAN82EgQ2vjp6RZiEbE4Xm91vVDGYLtGerH7oNsfvBTGbtTm6Js8Vw3PwiB1zmacvRc68nkDvj5cgHBc4Kz773h",
  "key31": "3yLFL26Q5hjkvytNQReGdSpW24FbAALH9w51TXkWJZP24Ch6E3TS35cDBxMk6AWroaqdF7syRBwsZTjCqsfjQhsR",
  "key32": "12ADbqzNhXfUcCYsBVVAoEiiZsoALQKEwY6RuwmryQST572tjEYazqyAqkqYCE9H5nJBhBCV8MCaViJMQbLzqVLJ",
  "key33": "5dybozEXTrnMnQM7mtTNJnUrRZBzSvVibiAV6gPt5dZx2mTwKPD2Jnoq8wCzXKsFoZprw5W9LNPQRVatGzMeea6S",
  "key34": "347Ak1T5SyCyF3UuS9NkhrW9tqToGF8DjNQVYkYcFc4pfmfcbkDvDaLGpNSx2yuBj17rSLmbJExFVjhfH5qfbzMt",
  "key35": "2gY9AgQnA85ZF4qCQ4wtwVaeQhbCFRWyNyYgQm2ujSGgGdepzsPAvQAorvPpVGLDGKkV8NETsmwGvGnFXtG2uQof",
  "key36": "3BN3zhhtx8dhk13gPT77bW1qhCrwdURPdJNtc7sez7unvYyGzTSULgwXmqoCr1aHzdjf5eDYzGf3SUobiDbrMUgK"
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
