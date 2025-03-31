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
    "3sed3BZeQRoYsaMFPEVVe6SUXj5PZ7HWJ3SDw3NcdStesN567CFJXRbNbjpyyS1Z5uhWen6nud2c1bnRNcFbZHnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oudCciZEY8kXzJ3MSDYZfCZ6ZrL5cTrEFqdJi7rRLz8dEk9MAK2dg6sqXWPrMQ4XumxAbE2bEJEcYLha4fZCoQB",
  "key1": "5o3hZ9SVUmhm4R2USZDd54wycYqgrDQfLBcmFaHzyJ7CEh54K2FvJbTQWg1DdEfQopb7tUkfVwh5n3snnmcfePBv",
  "key2": "2G1GMC8w5BC8nQEUMkh8mYBmejACLZUo2QH7L8g6BJNU3f7aHFrTdkffqTyfKphGekp5yUrVGWBBmGhov2xmkEGq",
  "key3": "Fyz77EegByumQa5i9wAB69tUiUeQ8B8pWHTbLxxP338S5B6MYHKGsKUDpUc68LeEmdLmwpghponomtQsFi4hM5G",
  "key4": "24hz99erihaD1Kt37L2b655rqb142J1bKF7kuKLSadRWk7vNSnfZnY7U6RXZCRiYqD6vnNhiR7Kc4p7iKGUVs3FB",
  "key5": "saB5UjcQM27wp3XBBQqvwQAXKjN3q5HqGfxyQmfvxfyykdpkEpCN1mpWe7irEfj2pDJyAxAmHsuWGMfYBnhY375",
  "key6": "56uN4nAoH7WNeXzHxi1niqUAhN2YZYzofQ8U5fax5HLqUNEZ2PqXNJuK7qSDwsmwwDdoRXStb6N3hqKCPjxod8E",
  "key7": "2RPyUX2S6t5odZ8311QXgD8z96WdRg4UVP4sFJuaYGuqKBAobXu1rXjze2XpjzMgBQU77tZfqBiWiESoFUHDCCxU",
  "key8": "3FNBaYw1gye7S8sZGRXWpxAC9kdoPumTrYFS1e7dXU2i92gehUBXmNiD7hRjNbtqcKnBASv3wjNeZcDE6JkW6b7",
  "key9": "47ezVZD1kcTPAp9NtDQ5XrQJ5iCqhbvY1phRrfKNTq8PJk8b2Zr6mUKJGFVfsYWrxNbAXVXTwTPucNiTsviGFGoY",
  "key10": "21E3r97TiX3CanuvKEsp1VcxjmaK2tSVa5NffhnA4uxSECh1uLXx2qR5XW3Z33LKmzKQu8e8AwCbzEPsjETJQ296",
  "key11": "5uDpX24qQBJEWLr7hVjQr1Bd98qBpYBtgT23duqEuCj412FKbfGU5gxBTUyv1Gvkp2HgjnC9fj1upZbPenxJsqsF",
  "key12": "4efuuykFdKVpa8iY3Zfz6KKeqK2EHnJv9f3Hb9y7nqGqmH2fKmmbGSBD2j6Jqh67SwpxTzsjKqP3dpxQHLwqYJpN",
  "key13": "3Pwg69LSDzF2Kh4oHU34FTcwnudCN5boSnj92K74xRPbEuy4UudkHY2a7kfurhZh5FkdsqnAAAeaM3gmnFxFoLXN",
  "key14": "5zNZgihuUkZUDqw5CbnT6ZCKLaVANhU7Cuv8Cbzyr9uuNkFVCRp9vcCrfKYTxYDWCiFsNeNYWXJiooooakaV5Pky",
  "key15": "3GHzkTdnTDc35QVW2Ja58unYs6cbnXz5aQYD7pSZ9couHKfPwS884RqJWfVRKBY6pHiwuKa6As17ktvSyYPNW9pa",
  "key16": "5bn3xmrXU4WHLaDGnKuqQ36sap8ZAqGsxuqjT4LQfBbNi6eWboLj3HSqWW9xQ1hQxBkNaa98vKZ2E9m1CkeuUcvN",
  "key17": "2g51JLWUDvm1QPLJDkV8vq2xiqVq3sJDGR8QxXqJuYUQnbLS9bNujJBs89bGt9i1p9zfcEun3WTqJxTNG9dBcntr",
  "key18": "36acbEq52USU5sLJ7fuFaiTzmYrLFNqcXLzGP22uTaZh2NebNarg9fz29nGVu2eNPGmHt6jRLZinXJe3RKrLMSxd",
  "key19": "2NwPsDTFL9S1dfDLQB3o1rJKgAFrJ2Qe3Vo5xDvVMnC23PEU9sNmapqcGSCqxbJk88gCm9mrvS69PQabLbjxuW3B",
  "key20": "5EoDS9MF4QquMBPjRZ8DC1ur22dmYk5veXxRhefbs61BARUWJVdYHpAmaSbtcbXoJ88S9VhKVrT6EzEZ226wVzBq",
  "key21": "5qyB5Enn4PuUHgwWoZWaKL7MhHkG3KkCfWF8k3abtJKah6LdaJa2GsGBjDFc26jxxuAd1uVxrWZmF5kkLkSqB81X",
  "key22": "4uJ11cHFRG6Sd2Kc1htU3sA7hbdfnxrMcPcHHPdePgzjp9ZqXV74EYPtjdwppdck16PEzHw1HaNDwQDkqjRVBxXv",
  "key23": "57uv7w7reDx9PtS8DEsAwCm5nJsykP8Fq5i8FfHGYv2mX6aHzDExsbWLoCMzYF1sp3ndq1WBVaac6XJj8zcvwJxz",
  "key24": "2wxSqvt7r7kBPnHL8Vyb4KxYi1FYUeCS141SmgJ14MCDYz1xHvgmVM4iVJkFCXU3jRSMtQPPdiACYVxbiYX71g4K",
  "key25": "3TppMYMN8WGNCUszEs6mofLpjPREhb1b9dt7vre6gh8J1TqpmyggvvBnJePRzmibeVxWxJYLPyg4UZ1Ne8qqSmJU",
  "key26": "ArhLiTJfsoMSyqdSAeEcCaRcHbLVzjnvcZtU5ozQ7rv8jyEVatRyxuppRQiSS49Z9ybhFxax7W7xoWDCbJm2nRq",
  "key27": "3dnEyVzvBBWryBtMniz6SJotPNccCuaa7FSrsNXYyFZtoi9uaMh8LHfCucBjYjL1kXnZM8RH3W3aGjeLivkSoYCW",
  "key28": "5b86hts1ALBn2qVkJHTwLttYaZwcQpFTpzG4tHRNH26RttRvKvJBthD44MTRiAnv4Aukf9smw1JTBpnoL83TQyM9"
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
