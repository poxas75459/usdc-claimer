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
    "r5i8Ljh5qgQPKQkHqFzSmPaG8C1sPPVe7poBSw9Fyy8v37qCnn6KL7DSaEkkZSLt7ZTwrr8hyRc2kzPDYtR5y1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gx5qUp6kiVWsVgkFrvXMKBhsrwj8GbY9rMwfGZR2MeSL6DhRjRDHWu2RNcXFdZhoXHgub6hjHzn9ZEgH4Pgt1Ed",
  "key1": "brt77JsfjdP56p2DhQnb5SjpHCaA9QyAMesLkXQ8L3K2WX6cQKhywWjPg4mW2oneEjAcY8ETtpdZQaTrwA9XW3H",
  "key2": "2dbTSApemDs6J27ww9bupDCBtQsDJ5f2zvFWjmhy4oHf6nJMJXGJyJsYBAeGqgkZ2uDh2xQocMQJU7N6mA5cetsV",
  "key3": "3XKGaMg6tU5qnZML27bHAVpYccVnSSE8J7xGuiZf6MX3jDJCFGEiYroSpUu7dbGJcWdQFdADwEktuCnkwLYpeuAa",
  "key4": "44CB55QiNHQrnqzqPKvoRtircwG9aYrfb2UmcqpCuB3k6L3cfQ6YxoZZUyGGtEJfEoSu6ZjtDsjCK9FRJ5qgcnkK",
  "key5": "KRKfQGM9bvxnknHFNLL96vmKBAMMKbnVgiZbc9UzrqBUYAjnqVyQxAcnJhn39AcSTeNEYB8RhLrRpRj2hyzNGYp",
  "key6": "3HhakAXWyEKP3cgBbLJYCvn52YCPcewzsUEVfTff8JKEFPrgsMQ2JmVyMAxaaoR25hqCjYdgRhk9s1HN9bfrgsX8",
  "key7": "4D3eNPkvzuABEG73xoeYaX5QF7doHxZQyQL7Ds6dUm9cJFJpsEtTtdtSSkKrDeS9Wpvejhrrb81FtDgxAcmGMnhX",
  "key8": "4BCx96sZk2sYHSJQcQPoRxfPFpmCvf3DN8CED2sUP2eZMkZJcNamQTGiVs2qY1dYSeQYcZMM4DHvBeEBYzck6dFw",
  "key9": "354szPpCLpzFJGnxGGerUzvmmLsobqTXEMsK9ymn6ziLuHCFj651Lcf9MBcbZ2o9ArPfjmYRY7feQ3FzHhvCuKGH",
  "key10": "2AANFqF95HMtGWGLBvz8aSzCrA5aEFMWKkkhhjYZLCf76AYwEx1Bgjpg1xvrwb8gQ8hugYm8nQiFYcPjsc2io78p",
  "key11": "4aLjboCaKRC9FvaB2fTdBShbW8PphoKfwwcnuy6E6sQt6AY5dWvtM47aDp5yAhXE6W8Ckq1yMdC4kunaptKraSyG",
  "key12": "65dk2wdFmH3JmRpRxR5bgFfHWoGSJhkrNRW77LrHuheHkv9npHEoUXQnV3sYF2ea3UpvwxesFoMoxp3Zw3Ncv3eQ",
  "key13": "3K743gs1AgXatP7m8p1cnpHNRJDGFJXcGB8dbdXfUqAzu3nTDLGwYMLtovQUQK2tcyvnMCagMhWrrBFYbwHuMRrC",
  "key14": "2gNY5LsbbZDrPmVXY7dqLis3c8FXPkr1375TegqEaF4ZBiGhmBMLVH1vmg3ZG3Guzop1xxyZP5o4DJxSDG3tsvru",
  "key15": "67W2epLhjUbZt1V3B4JLnz4q8JpcNZYixfsnvcgJNyzvo2rAs2Shxg9FoirtPQ7SJ7JFpL5GhnMB6So7yo8QYGih",
  "key16": "3ANrpfv18Z4QH1LPWCr1LiqdwdFBT5dkEE73LQyQr8w5t3tZuRCrGvKwDSyYDeEiE3bE3JYUuaUT6aU2aWQLc5nE",
  "key17": "ruAvvjMJqyca3RAL3vqeakhUBkKLV8sbnSfktNiS3CHTGJbo9yAkPiBUNopJibhAhm2htfpKXDx9VEt7VVcDJbZ",
  "key18": "5U7GLf9fjEXpokBqzNhyUcaBwnamN825UMwzsihELTQ7va6YQRs2vf3kZcFybsjXVawWPuyYRzqtqvSdTza4Pcny",
  "key19": "dtJhGczocWhW5SKkqpFMGZ6RapKszHBaFMnNKCmt499giniqhBCGWnPRhLyrNFjNwTgatEpSfxbLBMqcu5nmYBF",
  "key20": "34H8S3e2UD2fF1D15HrLVEJi1NcffaZnaj6fdnbh4qXVnWDgLdmp5A953tYbtGNnJ6HiFv3aXFDtiAhZf7WZa1cY",
  "key21": "3LDfXPueL2m3fQD11HS6Yt32BhKrwmUw1jHLvgabisrNuu1hbnbwmk4NtEan42jDZG9bLDzhzz4F3AqYWqWWksua",
  "key22": "43UeLqYP57mRHBupdxX5X3CEVmoca8VCLfby6fXuLKxRdgQdcaczL4QWNow4iyxiLLrJWzmGh6qawjXTRV1RtSqa",
  "key23": "5rQPin3gB4o9XWYtMhbQ7CRBcH6KD3JuwUTCarJArBEhdtQV87ctYxHSHSdWTZsAnXd1WeMqWbegYtNgvmVB5vWk",
  "key24": "2h9dPnKufdTeD7PKKHkUQcMXkx7XkgsBqQVVHu55nTYQBb4Mo3xvcpFDxMiJeYKeBx8B3byFp2cPqQ8tY7NaG5aA",
  "key25": "65iQZwb5qr3LBM2nwx7MPPdvDEAiMrJqrV9gtjRqLrU9kDXkRKtGDxHr4SzF3V5qfkuiLZSK7Ms4fdwJNS8H5618",
  "key26": "3TDG6x1X1q7Hkr3yNiQsKQabTz3HwHfKVnJQjvUBGbkdr666NEv5Do4Cr3Qwd3QbpjgYdtVzAX1Y6sguqmLPEaw7",
  "key27": "5ZnjUtxKpLhg5dsLV5rPN6eDascjdAwzrM5KaRWukWo2taAUAKotwdt99BkypobwY1JkjzdPgyukA4nByFhSq3rE",
  "key28": "cF1AcrVpGfCS16egDzMo7fmw6qRVdgobHXrjAJnFRjzjgBME7kJTN1mshaSMsvSMVco8eBbqTZeMWicvM7NoCan",
  "key29": "JDgAtmpmuv9o5e9Gv4PNLZy7CzNsjMX3G9d1PurHSZgPjdV6fHa8jCMbgBzAztHRNkRx1D8WSTXGc4wJGE9XXTx",
  "key30": "4E2mn8P3ZhaAEhgos6fbZErZRVfoSKnPrav8MeKPjfBqv62g5PWb2nQ6ZVgK1MEZVWUf3c7zaEagUDaHJ4c48yST",
  "key31": "45DtcymvTyYXmug7DDgXdQqZDH54vRccW5cjp8ot4WdoQzfwQ2RRJFdspdKi9ScYV3AiLuo3fw7rNqKGXEEJxZc4"
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
