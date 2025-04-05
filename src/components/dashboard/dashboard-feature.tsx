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
    "5zUbcVKnJaa8MuyQuUM9E2rrQY1N7Zz8ZCWusY8YhqZZBmU3bf8izUsa18rxRwT47J6us3H6X3aEwjY4fXT5JjB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQZ84GWjkzyWWFieV3Tm7Fbz35qpUVVRrvtVhZtCjHaC4F6pEkm7GjoV7oKKogYZiMmKe9PGSGCDNwDBir1vTLL",
  "key1": "2NCnNepEX5JKQFz718FfSGUmAHFS4mQ9VksWmvWPre2FKJyuiqte2eKyeJwTtYPinM9C4M75rNcJRcK9KCGxygd6",
  "key2": "5wKEuv94p838TQrbmrBjutanugU8p6hUZ9KVtCTj9S3HeqYAWx1QHg59Uka6fFg9LJJRRGR7A5g4raymWW87BRSj",
  "key3": "4chqdjVLXJPKKjEJvBWKWXcYHcQ7XySepSeN6vwAaZTQi4agamJ1fXiBNCDMd14TLKBfCmoDV3VfcphU96CFnUef",
  "key4": "249e8S9aS87ge8wdSyY7v4PzF5eaa4ioAFuwauwGsc1gQjXyf3iLPVgGQDdVs8PpviaErzP1crQjNyiSQJKs7Amc",
  "key5": "5q1LZK6znK2W6dmeqU2v7ebZjizxvXG6Eykz6pbhbns2F4D39eLDWkVhRXY5qnBt19u8hK2rwrpjbVYKpHvQjsoy",
  "key6": "3GK2X7qYo13qVmkf7SaXWiLeZVMXeafVfg2KfiHe5cZSdaaKgKpo9FkfDmiTDdSgeo8XEAek8WsBeVcKRrN44pcE",
  "key7": "2foshFt2Xd8xt5emkNR7JkBXMFucJi5eZQKYkpWeW273mpqQ5zEoJ6UUtEvADFvK537VV1vgYCrDJFTZQqXERX2k",
  "key8": "5RbYsGCfCwTheAvZ6KDP63XqrTXcsD4Sv79JWgyBEmYajxuryuBmkXg6JuErmNe6UAf63PmgsW99CZZGVoiX5teJ",
  "key9": "5W6AqqaGiUi44p7qDv2rvUoar2TQ14xtDztt3kR1aU3dpQRnowaZEFD8jD7tkD3PBP1gyr2B3Mq4GtnvGioiM8BZ",
  "key10": "2Ma3BRDfY9AMcGRkszZKjeXPrKfRR92ee5cWy1w4ChUjwTqgixcurFVu5jcEswsXwhGqEGR2ZdsGNeHcVigR6yvY",
  "key11": "2cZFuydxVLYH7mLQSoNLSRtfJsHm6ZPZwH9gS4ZJCQDdVsC5EPt4Bfc5VEqed3nBGaUBXpd8gj13BfHunohm7WkN",
  "key12": "poSMa54FEkekwrJGc34YDR8yBkhNMFRQG1TdRSm1V7DZ4bt4b7u8CU5LQhdNMXk96sKpnSBxoFJ6PwCQwi8VDXB",
  "key13": "2WJchNrz95qHqxBmB8EgWdFdTHSgqjCzJhyMNQPdd3Y5kfbG9tUjxfW7wE8EnmVcV8Peb7Def8LauG43avTRnWQC",
  "key14": "2A5LrTAsv5fqo4Z431hKqwB5sH5VUWMYfD6n7JzKUQye4Pj4LKdo7QynntFMQdof1dpq97nhs9JCWR2CxarJSH3u",
  "key15": "5MxSUwSYwM2agAmXfhPgKwrMQDDFMdpm5DtGeL8tUFnWvjC9waXbe7r3QDeCzFLJ2nH4YgQEm4m7xRkSDjEGwSwn",
  "key16": "2mX5aVvNr9ACYM4qH3aFfSvZzTwY1Y8Hk7ToK7P4C4wsfKQQ4pcjsu3gNgiy2zqBhC27rGuvAwJ4p8VZELKMripU",
  "key17": "4bhgWGuF7QNVnnk9k5QCHZPeaxraRhtzwJPAPciPHowNS6ifzrbGRRUKvhPoe4hcH6RXqAFNWt5yQDj9sFCNHgCb",
  "key18": "3bqoZcUUpFnv7SavGjhht9pk5Ruhq9mBtvCwDorL9iBZnpUgsY9tbdF8AJusHznFUeF1tnLdbuABop5hfCzere9a",
  "key19": "66mq9jERMtrSoebRy2mHLTDKNUd7NSP9K4qp4xEKYbvprA7UwN5nugVBjXmQKbHnnn15VnAHdm8WYcttQuoo1KWq",
  "key20": "338wcYM799rdeobx6g8tCfLhj6x2GzC61vaRJmTHG7JBVoj7rdT2T2U2qVBJgGCbYWzJ6HiY8SQuKh9tVwtGkkH5",
  "key21": "5sNz1k3AYPCeomzc9F35C8ozAt2hDVsgzPseKnPzvtcJBc6SEcjmFNEZuFZH5E8YRHE8AJhq48PtAscMykApSNCS",
  "key22": "5BFHyRqZBcPyHmegssJhET7NkueW3qX5qd7ycRU3iZTpyAwPCEEAJPe1cLp3mMnwXZ6f9iQJf5gRjyNWXd86iuzb",
  "key23": "5epPim8yUcfovEAoUNG8hgV79Kbr3SsomcYuAcSid9YN33NZRkoPvfEnoSB6wZheFP3X9LTfn3VerWiVSdL9znwr",
  "key24": "5qSYfb9apG52H28WVU7YMxi8mKWHuA1mSn7Pk31ipRgkqfF6SevuECYJy6AfB3raPLtdD4JRKRQEDQCKpfRVxzMt",
  "key25": "f9ZArFUyKwh6EMdKDvd93KRWirhbpecxHYef3NfX9NnNQ6sbGEiMMq1Zc2CVzPmJxGMhArijZshkDPJDgAVXHgh",
  "key26": "2FshmXYQmwH6upDbNdjfWVcGmSnqWfbZhWFWR425mxbPAiH3xZcTwHpHd4jxRqB3V9c9ifn9Tu8EXGmvBiCez7mB",
  "key27": "3k9SPUTHpVwETCLs3fANBe3Bm2DyZLiVKmGy7kWbfqKvjen7mBmb2GhqN3fVLPCGTJKjDsF8kHRECEVQK8WJysFR"
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
