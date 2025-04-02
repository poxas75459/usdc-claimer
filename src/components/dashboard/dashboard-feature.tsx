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
    "2bSYV16V1ZNXnQGTDr1c6eA7d42zsRAPCH2HjtxrQc1kUcJLQ3KCgbnmNnm7GD6Anb4bDnZSPL1gjFMKzKCVtHfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xzsa8YiTf1YbYFgvwuyfe4r7MLtz4np3GAriCzK7Dyc97RTSbTFtuEvscHsEKZ9SS98Y3Mfk7rjQYTjDEqKApWz",
  "key1": "3z5uQqKf9W9iyqyPzepckjwbiwap1aaVKunaN2mhQCcyWJMVwScjaAydr6tY4fx1KcFcF1J9aUcY43Apok96WcQa",
  "key2": "4HJDPbdqFCeetrTbcdo9EqcrvavrfWsssQuByvbgKfwHJYoEfmj13EmyzN3pJQtEChmHCazxkAp833NFof3ZGi3K",
  "key3": "2CQhxWpNDw4AmSW7xvEu7yho8JpKQn3tvjUxdAQ9ohArYYcHhyi6mmk7cKUEKMwJctdPfBWLgGbQyQcqrwG1DuuE",
  "key4": "5jGqsD3Joa2zn8v4xxiaPxjsudBygUcHZFUQf15jxzKUVKMxYgru9SsiREbLgRDswd1rfS9xJv2LN4EjvxCYHw7u",
  "key5": "3x6xXf5TxLJFDHV2F3TeiNu1frXWp2QXpMrTZQvjrKEZF1s4yyR6vDuBszUjYPABeevEjtZkNJGML5GXNFQFQixR",
  "key6": "5iNbaBiuiBQ6M4DnfLLhBViU2zjchNHWe3wi3ihrG5kr8CtQFefM1Ms56gct1a6wVGdhea6P79CcaN5yAEQDWZmJ",
  "key7": "36MN1gGho1zS8X87u2w5dWTnSWxy5gZsg99XoiGcZSWC15ZHH1sQFmdioNXW7LfSWcSfrDvqNKpYAAiaJSiH1TR3",
  "key8": "5dNmBzXA66ZzNVDhhjyGqLCRZVu2TJuakfDNcGixSZugZrnUi6SdwaiCRa5NGsYyodo4DGmw3mP7327wU21doDt1",
  "key9": "4eTjer1n7Z6VMu9geX6eKngTVgPjgSAnhEcyoC2KbpKuaDh77Zc2ux8UMAXZbug9CsuneJNsueJfc3BTGVwHKDa7",
  "key10": "5Y9DQfjGCTMZro45ADkDmtrz6qzQYS9DcEXFacw4qFgtK2b2SJcrzw9SYwDDu2pmqC3H3Ta4JD9qAs1gkpRT2nNw",
  "key11": "2dwRTYEnETfDXmbem9Zku3UXDF5eoCKPTrZZmHMkrr3P9e1ExhN5CktUDvM9gDaxDHPuFAJtnREz4xKUFZrynAP9",
  "key12": "61jYADtbpc3o1SBuCbN3k66A7Lth47hFwzvojxsni7KjCs4yFK4KKLtjpktGH3c71k3c5vkkywN1x31Rdqu1jUyb",
  "key13": "3RzWT8ziwGL4i4Y7HmPciVQxqv3ctb1Hn6JeLNVfWM97sCi5efNwoUfvgFGk4AzFeDkjJHuJbLUBwETvLZq4vNZF",
  "key14": "2J1YQCA6AJFqQVMrgAZ9zAvmz7tFghWJdUaoCLJryLBEbTcweoFwdsXWQtu8nwY8gi41d1up6CU7ZtFPURecvATU",
  "key15": "AWDW5UKJUBXU4DbR9dXJtPGqNHE3V3EYZGHsEEVDPbdDHNMge6AKoXeLv1mXTnJByt4L45cznL4CkmQcoAzxh6p",
  "key16": "514sJsHXqm6Ygi4LxP86CCJnpkgfs8AdbQxyyAWu8qVCq9QeRfdhj8EsVXeT25Am1ULx2WWuLaAd2Rz4iZRfPw3i",
  "key17": "2zU96LM67f7vpkGdNDY29sdjPBSD4oB7L2RPn7mxHBTMbabnVuwtk6iCgyFbtCfw1ZCsHiA1Tt1PAeRmhKtkAGaf",
  "key18": "3Y8ra87cL76enpu3YmvtMbvp33DFiPcDmy5kLfPCM6m2RAWjquAu7nyf5QVzFGkf626ATv8inswwPN2oFKCxMgAh",
  "key19": "4XCeYT3Uztt6YC3uzDUrDDd5CYNX9veFqWZM2LyBYxJMptEdSnSyCz6hbyhRnqtgrYJNouRVNJ1cxhaBVBwf2SEg",
  "key20": "28iTZUPZYxV1xFrLe3Au8MGh1TjVLmBn5hNQauW7yZkK1c18QcmaPs5AZQYSe4Ww4d3tJcSk3UKFxQqie38H1Xab",
  "key21": "25B4FsfHZhEvpqJS7abSUBseUakCeGH2YKpBHZinVzbFBdHWvpgPh8VKukNM72THY7Zk9bvoZ7ZXRYE2esU69c8T",
  "key22": "42Syq9cyiwBZ2WbLWdqp2EuPYSs8HTTFgNTwn8Q4v2hpBLkoctjo52hRuantr1rGVKCNzCahWMU9xRi5dTomNu8m",
  "key23": "3HWDqmP9ymoCft2oV5LDJvaezBEVYVgXc4Y61PAVPzUUeF4NZnJUfSrnmjJSsWuCERCYoXnbLfkoE2NWY7qDGucC",
  "key24": "3GuZ5j3JbjhMQCuxnWiuV585kPV77CS9S5RkGqpCaR4d7GEB1CZ7QZ9wu6yDpZZPaPeLPqdjSnLKFUoJE8C5bAkT",
  "key25": "3nYcfBtvhfWqbdkakvxG4d7sQVSUCwrLEUfdETmioMMiE8CJhwThoQxkDL4335ZcYgsyLi5CKyfUXH9f3jASgHmg",
  "key26": "67YQrwwcNjkCv1rCiuCGrfyGdySrK4Px7EnWmSSA1DxuzkF9rSNQs9e1EXwUBnDiH9QTLGSwdd8GCWgzsZEXeMas",
  "key27": "4owL6grce3gZMyCf3nBq8ewGVm4Ldr3nB9NEnaDDwQ957hf3MGEgXASEbj8dU6s7K3T3jVhgpAqUfK3qjsDSDP48",
  "key28": "3gD8B3HM32guyYhi3CW4PeVtGL9eRFpDDBiJ869PCy3zEgQYZfiTNUiVNModL2sGuUHSJUaXoetqXrwQwptzHSUD",
  "key29": "5RbESrJAe2rxF6YbgWt1MCKBjz9K2tsExiRnSmKVH39cMwANyoRQMBwbKRKP4s7dDbcuypHwvWdAWXP3y5rqFqc7",
  "key30": "3gPyJ9aFi5NHPraUDbxDSLe1kxkKGr6ZJJLUVEcZxHBTSjq2qeVv11vYtPWMAwuuoHCrWMY6uybZBmQmKV166iN6",
  "key31": "4xyHW99xEFkwnHpUJkC5N3XuLLR4JXKt9EMbC1CY3orTwVmZVvQwxWo6DrsNDdNFfnQPfV3h8aaNsH1oJfWNHhtp",
  "key32": "2oWKgdBkZys59pY3cwQTh9piCepxUcnH6AqMRCh1BYFN7jmaAYGYWBDGjmhQTwLyhhHHS9wxy4BrU4aGgg53PEEr",
  "key33": "2p6JXM7UiQ2u7PvpcccEWJEQu6kUSQ78qjozwdV6iJ7fJMWS7RVJJioKAPNrqxQHgdFxT3fMb2hRtYN6dUEQPsHH",
  "key34": "27CRojf43DpAko7vBPDQhc6hzszDfDTVZtpz1y8v8RvwcgKJVJkHGY4saebPnvacxHHAK7cPLKcFDvVbxsAv1Qzw",
  "key35": "55hUCeDeJXTA7pqbu5K3ewwYpmYJCf9gzjeYQCkYjTwpcBzetDcAgZgF7AoYUzMAiFkDiru4sPxrjyKa8riKa8PZ"
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
