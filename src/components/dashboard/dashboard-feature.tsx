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
    "dsoDuPaakDZYTHoFaY4mGiFdvFBGv5finSASamyMUxTxQA4JWS2WqgMYcWKHxCJgexRdXaBrFEcUntWMw1aS99U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fH2qK8Du7aqpF1bAXpo9BghGZFaBiKpbYuEkjoFd97eFvy9hGripCumktUNFYbjkR8cL5KE7KXedcYuBESL1p63",
  "key1": "5MSvaX4Mm9PS4KCXj7qwiVbXFa9ioKQr6co7ko33WHBnvTV1kWqixfD4h4BhsDxMoerzw4vJ6eh4sxMbCS8cWT1C",
  "key2": "5smS6g9bm5srPrzqBbpGKPL8LEUQw7CqNZAHqsumtkEE6zmSof1nRNsVfzgM35EXZCBk8eyAYxViEm4Eo7rj4Rdz",
  "key3": "2h74DCkAdNPqXXs6yXrJR1pftd6LAV7yBT7ghn7dqoZ8XM93cG6ES9L4TPwkXbaF1di1vjqBfDws5XfKnDHbhFnA",
  "key4": "32qkdkvLMxDedSULKTkPwce7HFrXLksgaCksWYL6iZ3XAQ5c8PnWoE4RZ55MnazARrcyv16FqLQhD5QwpjESpqnG",
  "key5": "74VwEYwEkCzngFi5xJenWgBc4f1zPcqL4zqXn1ak34jqoYeWLRegLoVi4GxbB88M6ZWcmGVpqfqAgmpsPX8XwaC",
  "key6": "NR29VWqu8gsK4HrgQf21rYnupHknAJjVimiLyUF6BY93DkE9HUmEYXq96EhhPNVyM9CLS3GQMJ3WwN3s9FbDpae",
  "key7": "QNdsb7LvuQnagMRWFemoZQpBQVTCnVmu5k6UXxC8ygbFYSiGmFThpuusJWE1JfyAhHuXwiX8Vj3CFgNL45waLQS",
  "key8": "3Du4GMHxJt121TYBJtgu2nKa9i2eA3yrHnrt1cZbCbHmjHomuubcgtqeqA15L65UTVzYKZdpuPun3wkTscC7s7jm",
  "key9": "4rrr2LHvPTj4fq38dDXKt2fjyV23PDctzUZSUqWPXxLFBFUSAVEDix25D7XAr7cdTT33HswtTQchr9niQ2ziYkkF",
  "key10": "1PouXKhQL17y1ehmU5LSXGVcSfVX3Tgyzv1dhJUgB7icUdG1r82ivSUu3se6SVvHFngozDXjkfoUaKS2iwZvM4m",
  "key11": "5SGWpDxGT6JnS2esyxw7UBjjdYimqecB5V4aEFiTMnTTdLB24k11oLyRBa2WE2u9wwzJHA91RLC8zyAbeTUFBuJL",
  "key12": "Vfer2N5Nm9WQqSMBAbvasrRkai2kP41CA2rm8i76timJDfrJtsSskkG252izoZ8qodFiu63WyJwXjfCwbLP7RYG",
  "key13": "5H69T8nyNyGWvDDawnFu7whkchC1EUJ9h84eqA5ueBsRiJ5AXxL5xjas6u6Heny1KhmJwEW8waB4eTmvHsAuj3NG",
  "key14": "HCKoQQvUrPAr5degRZEahHPSj81r5XdXKdra4tMydLpUoKEaMhKszgG2cwmawBuu4VK5Wf2kbLi2JjhjFEdigtQ",
  "key15": "5E6ymf8a1fwMHBVnAiN9d5QTgqf5eEQXrqFsBkKJbiHYDBsHYHTu3AYVuxqw9H2eSrzyHf9JdGbisxLtkQUgxVUp",
  "key16": "2aCSbj9zKpaZiR31WqVhrZ77gkNG9nWc4XYS5Qy9XAuFRWD92CgmxKLYFzdvSERfj1fvYB5VmYwoJugLF8Xoty64",
  "key17": "56wmPh5t2wKZzYhS5vc2YBvZRuz6zy6gTS6Wpk9dMaf3kQ7Xyw9qwMa9Vp14ktCaTrttYSWCMdwHuLuSHBHG31nK",
  "key18": "3gPhi9hJu4CxY3c2Bx92VzKMj8nba5drK4bPcMA4teKSYoHpJxTaQfnfbZe8t2uAfksHrpYAsT289YPaXRy29W52",
  "key19": "2XJvzhLRoiYYVx9vNzZiKnrdqC3YWcDCPmpUg8tMFC3UjcpHGjVmzXxDqii2w71Mxa4zMEWCq1vEowdA3UQvN5Th",
  "key20": "5mEeHi1HetsAqo9UxiSixjxKd7tdJT8gQhhHeBrG3apaTxgud37B5sC2GE2sck8jo5rFSqyyCKuTTuh4MuBmrucC",
  "key21": "4mPymQjYxLwVgDBSG9DwzREKHmcP5GgD54kXiKpiHPEaxdzip5o3XnnEvhEJbyCHuPzShP6Vq8pRy2yvzEDi5BNn",
  "key22": "653EUTiRusSFrz9dS1RRd64bvwGGJYYHMbRHNsowQejoRvwZotvsdjNJRzyfonw6aRXamCLNd8Ca2vJovdhbNAod",
  "key23": "5Yuey76LBgkKhUZJAnK6XT2askbUJVBvgDSUxzEud3fUVNwMNX4F2dJeUfnjTsiPpY2kgnYMd83zx1tmcWxF8THL",
  "key24": "2FQ23YMh65A4Pd3BYVJAWr7u8p1fzEsWabiDfLHJVB9DE5DjEC7Fn1xPAS7wmnVjBVEwM8Kmzg55mSHTiWxAGvHb",
  "key25": "47cV9XKgPwAVi7PEHnzPzQydNkCQ7zpCR1xEaAmG2UWYTqHJ54QkpVjcrwVGde6xT4Y5VzA6PCXUbBq2QSTuVLZA",
  "key26": "3CxjMSZsEssynwcGK7KZcr8mL2dEzBq4bCj5CSAHyNSxVCwpzgEhxiUCNdmaMAUm8qEqwMyX4wwNz4y6mURwcqA",
  "key27": "2JLjoW8sYoXYSa1zjTqNyut7iHhDJvHtgyFYp5PjwEXQWEtt973AgXpEBwKyKXtt6o6qtny57q8BNuxebXPYdi7n",
  "key28": "5JuYkoDbMV168hAQr28dSQxKYpUU2RSjzUzNBodxUE9zuTkrT47CXTdbQfVEXKTiMwgNyZ69Nuu3oszgLT3Ci9B3"
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
