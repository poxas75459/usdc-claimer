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
    "3FTsoJ8q5ouJqXJwZzG7n3NaXywozNVyQ5SHex8rr5qe4H92ei7gv79GA6QiAMbsiE9bv4wT9JhjgT7k9MoULi8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdTrswV6ZqGo38PFRCNfuheMWvxJF1Af2r25C4quMiGGdmdnH1EUTv9MPL1Yzj18m2HzhD3MNfSduFErmY77GgC",
  "key1": "39KSRfq5onrBKrtbzyL6zJ9pwqoZbPuzLa5PCEqYJiFg4L7X3yobnk5rVpjR9anxsM6XLKHKEBDAACLPkMoLbX88",
  "key2": "5VrkDjSRw7zGfqVXJ3jvWr8WR58P5bAWfL3qLbHcb8GcWKPGKuiL9oqRsVpYRbKGJNYAvtvGRCafqxRwGiu4SKsA",
  "key3": "3C6N2wwZYfknphxZsP5TB7vikkGhz4vNc9zfBDbp24doi6GjudSoESoP7KJwWpAx8g2o8ntWsuqyYnXxvMsRnXdP",
  "key4": "4uSsv1iuZTuGcCt2RArn85uQ8FQ7tECdEngtFqqBEJP2WnJqWcc39Q499kmW3JpV9jw9owZmf87WkZXZcm4BR5rA",
  "key5": "PtUf6E6sVQ24CjsVqmXyUFLjYtLivtkypj3G7whvGy3n58HxUHscdUWuQMBgrwqYe4utW31uZrii3swdG2mccwL",
  "key6": "54iePT67kfVHjpsTxZrcZ4DCyhQDwJ6Bhiev3hsvFvXMVcbTRv8YYAas4Lfoe8uwrQhqFATGTFsM4FXPJVwpHJHN",
  "key7": "2jMrHgwuEq7S3AQzXQtz6wLRyV4bT1JKC2ZUB9pnGFEQc9Pdrr4AezXeHiDVmQYNoNiWR93yYe1ZYCrc5nTdWmak",
  "key8": "38bk51nc38CaYPZS8LCgc7est5nDKL9BtSMgpXHsyGE9ZCLARCGEccFbJCJ4qZM5BDByHXs7Y9NirPqTtppUmkcL",
  "key9": "jG1XPmjuvayGYTFWbgHwZ5L2g1hvduAbhs7wUbXPGv1w65ynMdyj9jxyscyxZATpUjtvt1GG27mkLgcZ4SySZ4t",
  "key10": "58verdoEALgwu3RKbq4nbznf6JzcCiA34L5HDt2A3A7PQ8Enhs7BtdLRPhV4Y4fA9Ers1M2SXbkckJs3WBVKt8kY",
  "key11": "3KcSAgobWXrCQAMhy8fRo7uQh7cbtRNQxvp5DxbDEqzbvW9d4XZMsVNKbXkXrUjHtNTDe5VGFHvoKLqwiABamtTf",
  "key12": "5ykdjZxEksDtJXdh1jpCcVMk4rZjujkYHqMrVhisDUhWFzfgND43RQjCV8QLsNViZdCyeF1iHtCP9raJ9bqsQDtf",
  "key13": "53CF8NHhFamX6yrXVHvC6unboQUGoBjPakcnEMVPQu5vLCsw2YnaJgjaeNZUj53YGYB12ekVjWeHuhJeJi3fxXsq",
  "key14": "4tPgR8HZBt6L4fizQMZVXdjPriyFrZAztfoRoZwbJwKFG4wXbXNiP3w1xST7LEWh2mdb3iwFYEU7dLftVppz5aGp",
  "key15": "3YBeCiCRMgkzPHw4dTBjLizi15Pm7JivzCpmJ3Rtkrf2iNrDExtXqLASaB31XjPFtSvSpw1x4CGoSBtY3o8b4hUf",
  "key16": "3jyTkinPDkmcZHxj7CzS9rmbSNHXhmidQScc2dpbB1ZfAz8CNnmSEs8A8nsgKM1Y8oYahiNQr8WtSqsEq5oM6vc4",
  "key17": "2XmZE2PrYMLdh9ejw8hx3tX98sF3dbWXjs4gic4ZF5H2iujBNdL8wpEfKuwXL8gEmcRWNKMnQZu1Sj79XWbp47eF",
  "key18": "hBExGZ2f1AhmC9KzPgvU69FZK4fgV5J52Hv8KaZW8wQDeDYZy28oUDVQr77YAPsESnn3CcfMnea6NuN6VXCwKTG",
  "key19": "2iNb6QpUwACxdyjyZzYJNeWR6HPtLheEVho88bxQfYN5A661KKfeAJuneGzwkAELA3cLPFzSPmXnUhTtoXhz6MJx",
  "key20": "fSN1Dv361moCtDjZkizkJZxfPKdtq5RjMug8P3NUbBpcUC3v6i5soRXLuFCHMq9Mh3bDCVHmf6rTRrZVgvVh9Yg",
  "key21": "2eaa5yQDELAgbE7qkJ8HwR5MkY9KeARTgXridUFBJFZVbeJVCquZEPEETkdNPwRRDKXgNVFTt46bUKWQDAhuQtZL",
  "key22": "4YvqyzbqbYUZ5pEqTgAkSNEpvbzfxziQoUmC1mw5yAZ71wvusCtbrw2pTLZQzkJyxdXThGGKfS1gKh1RoYxKyj5X",
  "key23": "4Ved2Ldd1kmi4mVQeKLmxbX78jMosYERtsm6bXno4eAM3JXnDhrJfPYfHNGUxZwdHMb4RpgkvFuRuzwvCjwi2NHC",
  "key24": "2g5bBFxRT7xUG79x3JiSBcnMpmHFQ1DTu3pfigkMqmVSHAoHjaAACzMNuPivTZK3vHh23Wi6szcp9k2CwQnhygDg",
  "key25": "5on8drwuaxgKkpbv7ypLT3JxE4NfLzr4mKcmgM7RKFNfLE8dRftoP4JP7czar2WDPgih8mYLejGroZi162MduQN1",
  "key26": "2H85bNX2qRUUPwL34vbzRBzosaAcJzrwtDw1XtNuo1usJ1E6PQbtfmoRP6E3HWNimdPR4RMa5qR5KpvnYzkB7uAg",
  "key27": "LuQy2MwBygGyWa13riw3vhSxgd3V2iAJmdv7Zb348r12yBJp5riWMPgXPH2hCf1KJUzhg6GiFdKYmTjkqodSzgu",
  "key28": "5scsuGUmGbD21S8z6s49gQ9CQKKWjggZuAbV9NHVDwy3P18v7Jk9uZKew6sVVkqLqvmTxQ8ZAVV5RM1nPhGH8GEK",
  "key29": "2VtaNH4tFCmtknPonSc6Zb8nT4vh1j2cNPhPpupsiZChhisYBcEQmwQgnd6Xa3NGCyRJdqxRW9RUM7MUefr1Qjyf",
  "key30": "2zVu8hSHBsAWTx9EM4d5D13Q4S4jdG2UBtWjMQLtjH9HFrVRvqo7NBxbbsc5sRWzHpZeojTDNq2ML1qaUc5aos9C",
  "key31": "3sAPkzswPTTfAukDhRzjLGn1JXj6dSrn9WYW9srEZGWg3eDocB9fVqGaMcEBK7dUq2QhJAZHnwvWdcXHJzx7SxJ"
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
