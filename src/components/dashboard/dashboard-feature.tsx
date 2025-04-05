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
    "M1McvP6RE8zrt9vQYF3H8W7zx2dKRAVEjeM9CdoU9Xa4MHVKhAViXBUsuQkkcqxi1kXhXfQrb6k4akq2wYaxkE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SryzLqz6Sn4hA2WeRcL3Nyz9v46zCBMa3n7FB3zvqLcABia4NcV9KsJwCYHpdEaMxd2JZwnGsurNgJmhcx3GRyG",
  "key1": "4Q9BxnkXJiUkyFCmFqCmZEfqUqzYTFTq37SLBPA7h7vFxiyJfzX1S3KaGR2Z1rRBAda5iGizFDZUitZ6sRmusg6f",
  "key2": "C3G77o5GwsqV9N2tYCGPDkVf5pp5UHDD29BtZnmfr4ZJSTeTNcNMx9h8fEe7yustNQ4Nu1Uj2jRsxCbxoFcXgyN",
  "key3": "5MiRsVVa1TXJfSzy2pynAUw8mJ7yPD5DzdbKneLRR65WmQJuaKGSEdHQUX3rg3hRxDxMuymFWqUU6Bq1Vd3HWay2",
  "key4": "83XcpCuvcnaJeAyPA1Ec9HexpjLDK46ExChzPj4NmhnFJgRGBGUccQmzB3SunyP6dxP8AGexzHeCLvqRgwATS6p",
  "key5": "qjbVQ87ghjccPJRyejXPcS5XZ6qxEafmRDqAfRSrsokSW1dHsmYiiA3mzpLLS579Cinqx4y2hmfpy7E2ZZ1nrRr",
  "key6": "4v2grWRckKoFUz6iQg8M8NQ17zrtdoxzUBB62oV8JxRi5MUPH33R7qDunPxiTnpbUoohVL1Misg1Chws49ivx2gp",
  "key7": "2oqV5tZ4x3wkRGzFyh8k3YngcXWK1dNCsxDjjzB9JzHJKpoehygPcKPiwNwzZvYdqo6dejVikJezP1f65R52Dksd",
  "key8": "uYuBAu2Pwn8hAKQCKpGaEGWuMH9uF1ekio3P1oY3e1aWj7deqUobCqs6FwApJWRh9K4xb1qyeChRBcQUrT2AXVe",
  "key9": "4U3uAexfTsigX2XzJ8uYTzKLzNnvNCSS47E9XBSGK5mqihWTxZWqzRRneTsbvRgeDbUeXD1wRsxhQVLkeZUeXYmA",
  "key10": "36gUTnGaahkfWrbxUXfgDdd8wkLtSJrkdBy55R4R9YKSFbVuYo3KNg45baBq2ZCS7mtshHCJjvBGgCkAfrHz3Na4",
  "key11": "5zaZPar7QMPeDzWMZzWtd9f8xxPBVBrzvUJH9iPMqDa2HDTnL1k1ELGzGzCfUSsfegjfsT7HKuvz3xMxeMjxQJ9o",
  "key12": "3f4LK4EasD9F6BjY7JwQBXNvJ8ALqkbiY4rsiszMmz7okX1ELiJr3Rjr8AGyZgTNEjufBpR2BT6jxtQR4qx4oGSS",
  "key13": "NeYULJDDWkZcREVwqTDPwEdUiZKmqcokds1ToX5gdawKWjzK4jpiyjWRFEWJJPz8C36r6gw7NdfE23XHsuPWAJ7",
  "key14": "4FbZXdRwvR7YVxxGw6QwiE8JLEKxnCE3aupFni8NL5MWWQD2PYMX4H6QS8SeV2otFfDaz2AjkCW9nDpn6m3ChXMe",
  "key15": "5aPNqXtHEVKXbnw4ijzZNzh6RuPcFBsspykPRBt2UNVRwCA6cghiXo7pfKwEqDpuwsfYdB135LLFB51bBzdeHm6B",
  "key16": "5rCJ4VFNoPx6FGQabqNzi5K2NippemCcwgja1J7i8xgRFKaM7LyL6iMMV1YnMe6D4Gc7Letg2rWZDhb3piErNavh",
  "key17": "2ngijeomtydD7qjHNSENPwyPZPd9JHvUSoas1ScJcCJ5JAYmXY3H8jAZazAFfSVJBfnqtnoZ4JzdZ1qLWC9Ksrv6",
  "key18": "3TUy4HBkQJGRw6daKM9H1ZdEzJg7D7hS4QqtjZECbiksGDWw3V2TJdwsveMM8Euq65ECsrj95KiA4DgEW9C49DM6",
  "key19": "RW1pfS8bkZfnyQrQh25BegZLKczPjXEWLbDQA3kJNXJ7nUcnNmSH4kJvsCS2z3EGbzbzkNXYsYMfxUU6Qr8VMS1",
  "key20": "2rBu1ju5juaDcegxFpf9d5TLbU2isqW9EpDCd2TZQqjwhi9SGQRg3hx3zovsqEP37ckHUJsHvLpj2x1Tq5xDmFeW",
  "key21": "3bLtvD3oj3MbauL7nMstVmvnqu9RCpDJ9h2qjqgSFy4vQZKBdFJxPT27yRZpgRYQMMtEF6U4epvynVCVcGgSCGSv",
  "key22": "4fj7QYbXgYAM3RSbi3ShJQyovc8ooCznSHTRWQVeCpbyVrdX7RCiuygLVAaJ9Z2PcF8ef3Ws9aKtfEMqVzmAxVrH",
  "key23": "3MM9HevxCaadShVSriA61ryykD6u2cfeDZdQhq5HoNfcbofPgmJvvViYzfQVN8MofT78o1W3LUzBnf7N1PKKvpAa",
  "key24": "5MoMBQrwFAHCiLCnHkxzjVCaY4ESh6Zx4DhhrB9iaPDenep5L1nkV9BbRheSkS4jvM3tcqE883doB7Jh6PDHYm4G",
  "key25": "XKa5ZQkHVwKJa6AWxc9M4KsswTjNuEPcw24E1BzLpcodRvaA3JaYRyZKbLEm2vD7Rfkxp6XnrqYsrFtVhZKWBMU",
  "key26": "2Z8pKie3FA1kS1jMLcNgASw4N7zs5T7PZhvfZTXf93uLzE6nYBe7tvdjr8gRLna4ee2noVZD6VJM7G4hWzwKybHa",
  "key27": "2d66m7SHBa8hCFRLsN94QnhM7xf83tTUt2N61MyckNGgCSiWh1dn2Jef5H8S2PeEZMA6PfrCX3JBXrkuHRrSUZ9u",
  "key28": "3nCf4dt26n7YaR7jZRLzbXLtpA2tV2sAekhrF64HmtxhuWTpa9B7v3cmEwWuc9LahchkficDGYwhopPv5N1zAWXY",
  "key29": "5UZwgUaaJriTWRQzezf5YmqAuR5VexSgPtrupYMYma7AdfAsmjs2REWRCi1UxHfjujQSNxJnBZgtYqrNtHTWhDgt",
  "key30": "3eZgauuSmkkKah2XaGTrqxPSgqUvXcSkf7Lb9jkgaqxMgXCLL6oLsXYzdJefXGz8apJDYM9YtrXpV8c39XMVZ52g"
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
