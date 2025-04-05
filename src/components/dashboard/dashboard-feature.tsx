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
    "3Pkg6TB1RDLTtE7Jkbn5ZsAvSBt5Dhm8q7rNvv7zR7hWhz2T7jTcezCMbc8TP3dZvsZR58K4drBbHRQuXryec9JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYEmLg53qQGTJFLSoJgmLnFfRkEvmYomwzD74vLwJ7tDgidNV2kS6aUBHV522doTzGHYU2UFAuywwzzrwmz2zZP",
  "key1": "2CVruYHvv9SxwKf3WSiYUHNKbepoKLSGRaX3t1HXffyVPkRmmkJvFaYG5swt3qGfvL5B3bv1wH6MkQD2VUjYVwtE",
  "key2": "2pohFxWfSSWYsN7aLyrm4AJ4fQNnKmDkFya316UNfhfqK2CP9AQYFPFCGW2zW1AoYURYAwnEJvZXB8nvbWq9sWKX",
  "key3": "4usj6KoyQhxD2ecy6eB9MLT6x7xjnnMfkqBTkEzXLRbwV5nCvC1DcZGYGhYMddBq14Fhk6kAJEdWZkfHeYG9crBM",
  "key4": "27wfzBGkWHUJRGyGWsa486f5C4aodaLKLSUtSemQJrz35ujST5k3BUFpLZnrEWwbAqfWNJUK14cVkL7Mu7HGsC8R",
  "key5": "5PhY4EEJcTRa6DMda6gkzv8jQUE6ptZ7kvyhCSUk7U8LmjYEPMqurjpEjreVGcRax4EDKgBSQkYzWrFZzY2RL2oC",
  "key6": "4pCbtEP1Q1tae1UjXYvjr6KYo7YkmkSqzpExhA1jgFNmasmMevGyoyhsDZPq6Ygn3k52LtWwNVidab4ZpKXwdfSS",
  "key7": "2Xih6STwai5zUUgqMQ7cWMvSNP85t8jthtpoJvfNih2tFReebeEZ9G6iVkpo6mpfVUWirtLNugBMkFf3GqFtM4Tt",
  "key8": "SZzEoN9vAg2fS1AdwNAj8pW9vyTVyxySdHv2q2VD2ihHGxfw5vnWYYqJW4vcEArajKo7sXMnRCEr7ffCF6t9vpS",
  "key9": "4oN4Da3cqdz6gcoZBpaXRdrds7u53Lod9PQJnYJ7iUC5GFBWap3BvvXLGJq1JCEJvuoUYPykc8skxQ4H2PafZwa8",
  "key10": "fd2G2jH6q8DWFgQdjyJm3RCjbabcVrpLmHPLQ599X9R1i254F8b4ByzdpJNexzEX1aYjjJ1uvXjJv7aA5Yd1XGx",
  "key11": "4spEDpCcC3pd7WZu9SGQEfeeengqaTSacJ9bG3H11ydvwYT7u6bNTKimovuQUaKYCYCFSheKyeK9PWNRvvm3A8zi",
  "key12": "4qqTfkDKWKL3rcLWAkBXXM2UQ5dFPmrxwFW2JX5AM5aA7jTBBxFCoxKPDeekTrBD7z7e2yPCQqLURWeRQESf2RDr",
  "key13": "2mAb37wwMWNxzmb6cgj7gGHpB28gh23fXQ6rSUXXaqNWXbcFkZuzgBDUgK9h6hzBVBVY33N1jJsqMm7jPK2dESuu",
  "key14": "4GtJswJKuAzN6Q7iXpBJ8DawvT6zZAbdjrksUXQ66NEqgcLVo62oYGumKGtphzdEDtjxX3EFbgdXfmrjjwKB3U5R",
  "key15": "5qhVwrZWqRXLnpBnyMAWsT3Z2sJp3beNVW3T4a48NxHbSJ7uWPXTXrcF8fCMpUFSp8SkVxbeqKGCcLcidyJTXa1k",
  "key16": "64ChzdgjBB7MPr47onzkVQzPHdRVuaYqZHkmX84kecJQTdKaHQoAbTsKqvY94wPG7i4JzRdAvdkzSCQupnPEQm2h",
  "key17": "i6Ghg8FpZM8A2N7mF7nXjib7QcZGKCCGEfGxmLm432sAVoovvakKP26Gh4ieTkXGqoUr6JP3AdHQ6XL6QGa1wS7",
  "key18": "5Hh4ajLvuwKN3zgHvAK6C9cHFwx7vwTLfzCfjK5vbew9h7MRw3bzhs2maDZ7Hkf8G7s1qVjg3oiB7r31bgHnLP7J",
  "key19": "4GysAsavCHS3FrAReeQitQumHfR554csrS1w4C38AreifxSFXfWmuR9Nkon96PRqhKQPAtiRPgTcMvDeFB1cwpYa",
  "key20": "4rvpd9YFsVtxtd2KjTnGLXVQQgTB6YSgebxFg4hywqWbiQcE9CqZGEYBZ5oViBB6jW56LDXNjQw3FWHgPsbSi89M",
  "key21": "5HiGeS6rQcRfvm82Rh1TeRQR7h4M8yshRoJFwX5kfsvBDKD7g1AS3TYW8UtAZAFt1DYgkqUJ3bM7Foi2cmQ6FkG2",
  "key22": "2CoaoswDtSmB1y168fqMYzDK5MDwfsWNDCNVt5QLPR553TVkkbLnFN1jKeq8JvWTdHYRtMZvfiCGfS9pQ9dighXb",
  "key23": "41KWMrrcJ4cGSN3pdmo6YZBU1xPGm1Pp642wpdWcm3RSXwvNniBSsEwPQteW6hdykH4tsUk6sW6StQnKXcXxztiQ",
  "key24": "5rUQ9FirLCofKtpSoVmkWXwGmM2dVK1G3c2JBN4QnvDR1DXzY7RYCgRKWdNpLj6kuYPdsFgCgAz3uj96VxUXjpSp",
  "key25": "4xu9f85rU19obtLLrdY1ZbYGNbyFnfouAmWACXP7L9qLvBDxVTnDcMdExvBtvnBPSqqihydASHRqXoLQkL4fqaJm",
  "key26": "5NDr6PVdAHmjE6gx1Se9BZ5hfY7UYCKEyYYnYG5eZs3QcPMnhJ2uvxTdEqFaQuiTAPXCG5Q6XdJLh7heW5rnjeAD",
  "key27": "ejppMm9kSY4q2G8EpKoqZaKgPjjGqZUL7NVCtZ1aCXmSuXKyudqXyMVLB9fkpzb6sGmzNQhMArYqdeQtUegHQCW",
  "key28": "32iihQQmYfWV2JXfZjrfHuN2711QDWCGSdCeKMTRD5pfFygMxxZaVWr8t89C6spdWRDQ62bT2FrbG9CwQ6LkPtCF",
  "key29": "5STGaSSH4hWEYci5ijRdV1KKa65XH6ji6SRw5oF5YMuUT8m5UNWohRhMthBV79zDnUeB7n7brjKYs1viho6uiVV1",
  "key30": "65hxn3ce9YTtwiPNd1pGi9sxhkmAbwbsHhupMAN7CeQToVjB7AT3mzygJWAkvgyBZntEYyqF1jXjAXvzhXByA6L3"
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
