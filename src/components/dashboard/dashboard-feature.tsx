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
    "4Efv8Gb51Tddgn2LM2ZX8hmhwzsRpni5QbMuyGAtdF25nCSqryWkiZvDxNCSy2Mw5JUrNSnFi7Qn6aycWp11r9E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StJHDEkrWyFjNE61WV6KidQuzX43qB3AGpW6GuCSSdqcLN4cU3oSufPxEoWETc5P4eUTdSiXFNSW4xu41jAATvS",
  "key1": "3ThspjjKhCB1mDcGvuLXMvhDx21sok7isF5VoDVWtrqUhPZbAB3XdebNfqNUPHN1UqWBnXL7G9W6MQdzru6yKVDh",
  "key2": "4H2LJfzjqFZmuNtsUxHWDtWVfNUbNUgEDSLfWpfev7yXoUJ2y9vJvsdsHnQJgLtaDKeNf47MiW8b7BYEVhw8ZHGv",
  "key3": "U8iwu4evscwQDbX7YcHdAzTASJBKeZyCdF3jdVynwNunEkqiBEEVdouWhm9M4vHB2PQNC8FkjdbnyhzQW24aiSb",
  "key4": "2yPJMAycDXhCCV4Up5MmSi7e3u3hWhzf86c43QuuCqBxdBR62Kar1F4HsTNho618xxP3P5xM7EwQkEjasi2whUJ2",
  "key5": "57bAfC6hgd7SfgcNeHKqACWZK2yppjKtt2HKBnzsj64WH9yKBA5GFfEF7jm7XnGYx5ND4N8sHWQtBTrVq3Y3xJQw",
  "key6": "5JZXnqzBFDzfXJc4sH3gDYxm3F1uMm1z2UvvPTSZmeAMJtCYWokGVruhggdPyB61vgkmk5PDoHLZXiVTWqYyumQ5",
  "key7": "53v1yaYyEM2ELHstm2CwvRMtBiZAiMpLEf6dfYAv522gDuYL7yDBkza1zSWHYHwXS3NAUZ8gHSNtKtMxMXJYfNbD",
  "key8": "2b5W9eCWD7USFTYkJnHto5JsQFExPaDfwxCAuGzLHtdRofKRpbnaCqq2bmU5ZJjkL9Q4AukndfwgbpJJbgbe4RDu",
  "key9": "3kUWipbngfkUrTFA1C5QSQNeFvhBvhSTgVGEmEQA4J61GLsTgM3hxBSVdDFffiG6bq4Mmv4qkqdPRWXbdfgqaFvo",
  "key10": "4XZmaW52LsRjupDMv12RqQJmJjNiVFzzsgz8L4Y3EsRqFKxLzBrUMJ3o1NerEncJdZFpBtv32vyvpcMAwFcy5zoo",
  "key11": "8cK9zwY248gNf7Yf5Wi19BvWSKkpwWSyDnqxab2o4F3ndXXtW5nzbzKXAgYGURDbxVMNxxWhMj91J3Au2EJfBj9",
  "key12": "3y61a3G1gTp7tsLXHAiutqt9CTqfPrKyMY3LMzszB9wG4jmJ2pGQt2G6YyE5AeLv3PNeCabQnHKUUjEtWxgJxXFr",
  "key13": "5XCLip8iQ9bFUEr7N1B9YCpU7EhijoXgqTzJk3yNiHtQKCZ76tQrkaEMrR3XVb92qcEKkGuHF5NRJByYLVHf22BB",
  "key14": "XXbFvc6j82sDYxq6owwFLv7suooMciHHtrv9gEEJc6P8wE1BYzzcnTvLvuT8RoeyVCSxz4pCAQYKhJx5e3VRJsC",
  "key15": "5xyrjc5LLUMMQpdAQRRwgqTQd9YMpA65Lnd3ASoLx7KYWf8CmYiAJ55ZWphW9wueGUco8bt5iSSMfGMUSiQJJq4w",
  "key16": "5jmSrUMnUw1PZ3rvxSLJtb6GmUocR2YvrrSTReBQXwBaZY87hbDqD6Jyvuvij5SVNR6nDgXZLfmuw16cn4pdbnRy",
  "key17": "3audNR5wvDnG1GDrbBHgQVrRSwezg7XN1QkuvYS72fULhEhs6nEY7uA6mC5sqYbD5UJwVcSVz5LiY789pEng43kP",
  "key18": "3iRvp7GR4e3b76VYb7EYMDYp9aAGcoS8iWV7NWCwVnzHtF8dUHgT4tohu8XpSmT78Y4A47UABUViTtzyx1Ed9sFb",
  "key19": "2XKcs3Yc5YjSFkzcrNZjfCaCDNDbkWzmfsZAQWx32EGMLnawsA1zoy2g2iRHGUeajk19ZNcCDtggCkQajuodfKro",
  "key20": "2TZiiujRao7f4ggU7Rb6n71skzRdzpY77v4GgiDwM5x9iW1xSGxvQ54G2RYZf3zDC9eHAaW9YKy9LwAb8F5Buwu8",
  "key21": "3DJudgrTWsdY37i2gPjgCc4A9dDdJNmot743D8mJUFtPpfnhJydcM5bXVrCkJR9piWDicVXc3nVyREsCNVaXp7Ax",
  "key22": "65LFjL3vpzsosegCiNDnd6rmT8xk7XFi2VKXBrHnsxxQEmLiddQGYbffUdvJ37948YqkznSTmQn3iEkAVF3BUtou",
  "key23": "5U8LPE8Tt5cAxCYK1TzLBj7eY81dtqPKUCQiPRp9cnzmh4h5wA8dEfhu3FTZkaymuMyV8GcbBxpmnqVCKfXgsphb",
  "key24": "4du9ZxrwURdCqpcMTWq8NQiuXTeqLpBzMvEBeT58EKtTZAoWZnRy83Lyq6u8XsVHFpGZK8uCJnhD5AJZpWVKEMEb",
  "key25": "4iiN24PwtnrKR2pNgo6BVPsevHkLaBoj5eHay2dv6gFFppUfEdZR61B7rjBrjWZDbi87h7Db17PMnH57KD9u2mtc",
  "key26": "cVTyfJEmtvBtrCKzw8XpcnxGioUy9adBy7fUNwBWzDUNxdnY5ateyTaSS4i7y4USaHWfEe4mtuJTaXXZxTSHu7U",
  "key27": "2Zg4kDbrscGXKWjQiKkMGJ7Krg8VshW3veLPzW5e7SirrQayk62mx2SCg8KEZrmrXHQ2HzVdTB7oM6DW9nsbGB14",
  "key28": "csMREAH1MsZ3DaY4xCkyxqQYLK7mbLarNSguKawUmKpvPEtoxdHFaFgDWUctqgHyrmdA87jeKgWGUfGbk9ZvV3T",
  "key29": "4nsDcXbULL3gEZju8rHGLcSsrW49UrNCppajrh58GMDDY7TFRmrytBcWbndgd8cz9Gehr8hYFFRGCSmDd9aprPtH",
  "key30": "49syAtz7uXMRH1phAUuCMDVA1USwj9fUg2gui5tXLtX9wHFQBD7BtebYwnnnXQB9r1ZDFAhbhBHgf92DriTQg7X5",
  "key31": "4GXEeE8jeA8P85nDkGTNE9LG6zVoqRrbgTT6B7imiq44KrM7UQVjpURM7PHS6QC6BM9G25STwDrPV5M3D4Kk8sMj",
  "key32": "3UyRzYZwgVcnrRfcG8nSBocdLcNoYkzurcjmmsb68kc5mvUfodxYymB7BKvEZd4Wkho9kgDy74XJHXyuUpqTSoQV",
  "key33": "2Ct99cFiJhmN3yN3ytKGHsdpXzejXeuAPwSYnhaHq9u1w1LDMYPRQHVCzwuetUf8DmRXDUibx7cYd7LqigSceqp4",
  "key34": "o2FYJzbbR3zRCwG3VSWUBVR8uR1xBFbc3XQyhh6zUkP6U585Bf5EXt3qf6RjuZrnBxmxMGxbTPsNrfEtS1HBVb1",
  "key35": "CMzn4rRzWTu4zKr2h4HVyN6NygrBjLvDK9Gn8LZaFJiE3paP1qhn7MbrYSxGJiot63GqU7okbAUG8gY9y3rHdjn",
  "key36": "3MiW6ENaHP6VPbF2HQPUu7m1KQVGmejnddPZmYKVRHMNiMkNRoeCt5Qw2os4XKTy82AsdXupDxRrbCgGY8GoRTQ4",
  "key37": "3EZ6nQBsx47Aw9vrgTpGVkVuoyGFK1gYEGr1EqeJq3k1ycQgL4Utxze3MKCQfD6vmxNsXHovoWHvgX1zQURd5gw3",
  "key38": "QbX2z2uVdxnhTPyW8vZDpFBP2PW7wUezuYsk3wjtCFdq8VYcedu8rzZ5eU2KjMfMm4hrFR52dcNFVrFqA2WL8jV",
  "key39": "2FqjeBsnUCyX5Xs4ywUxYRoC9g2SpkztVvXuCrJhqBDiZMLR7VVUgJr15qS4GjeT3W87zohF25m8PuGTVaEuR92o",
  "key40": "5KNhbwRcQwKh3wWz6Zh3ZQEiXTkD4Sz81ARZg2fgTbEHGnYQsg7zJPPGrPogBioRZind8xMRZpSzNTtzxCHW5GZL",
  "key41": "22x9xPSytYoWfVvt9TSdbf5afWXM7EUVgLhkittK68fqA5ZDXQwqMdHhEcYdDfRwGSkrrfLtfWE3pHT2PGofYkQy",
  "key42": "CLt5uoMxnSFaQcrVFRhB4MEUsgspT9kc7j9Gp89KNpZtQ5cadk4TiKhegSBfwRTk7EJLTeermZ8tq3ywDeCZtsg"
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
