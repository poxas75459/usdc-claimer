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
    "51fw7tCDD7RY25AMDbR7FSAogEwJdJ5pH4kitVny6BxtLRwpJJ7faYKERz8FcTxxd4TTT3kkpqA8yD11cSSvRTXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NY9UfcEgCsQTs1j9uGwBJT8QnBjC8mxCENsH1qENjdYu3o8vQQqisZRWSs1Mprq4xdpUH7WkXa24MCCcPQRUn24",
  "key1": "3YnqddahTdHwWKYmeH13e74dRiVJT8iKhLpdkyZ9swCrbaeMFsEg8Fm3QEH6JiTAQJSTvuwh29fdntxdmCSSY4cG",
  "key2": "3rRpMBWHM28S5qj8MLfJF7SieQxCWj8jGVvaxiosHh4XM1kG1Y9NPd65mxvtCNXi5sFkaz1T2g2BS1b4hLVFqqAA",
  "key3": "5YbLzxjAc6Pm8TbWcN7wdwsUfJXfdmqutp3pTbduDPcEBP6XdLTMJq57iTBvZ96y2c4jw5Xzh6SSQzihAaedYUE5",
  "key4": "5SsNYNAQVCmaA744PpBwsQLoayNyJ6EAF4B5ag9iuBeE6Drf8Tj1zHgHdAKbuqNYaw6C6BiWCRnjsxrbm3FLp9Mq",
  "key5": "3h7Y5Mrheqxmaoi39p873Vt8b4J4uQ8BPxQAryGiLxNs5zDWtJfivqrNKA6Aj9KsKwJxvUE5tjauTNxp6B2nRZ8e",
  "key6": "YPRA5ufYDWdJdUKVNGuytj6KNQA5ddk8VMhxvvKQNh9ZYkZxYuGYMysD8otXtFQ9AdanwHyMwJH9mgYMGpUmfzm",
  "key7": "43P3c2N3pWfjCu3E8jph25MkQiP3ph8SDebFUPCxdYeaxQKoLX22PCncBEMXeDKNigvyEnHhE1Fn6GtnnnFdBM4z",
  "key8": "3gGqat1qSmHiqmaZPdbmCrWahd1XdFeNfmsRJ9BC5tasp4bBZa7CVq8keMKLMjjBqJGGrmUrgAdQzFMzLhNT69y4",
  "key9": "vBjcdhwkSybxGZs2rjQiKSG4dpK3GSyRFNXniYvhYhBVn6k2R4zixzDz2jvaYuAsA2vxUf1ma3LKcA3PrweSZt6",
  "key10": "3FocT1tTwigZMuyvd9yragTJU3zj23zx7Cx76H73REVuaeNUtq9Urb3TMceyKWjeieKfSdYdppKKByigAQjUL1M1",
  "key11": "4i3jkFd5XMXJL9p1G8zhEB8UnukEWAg9mgiK7SaUSNDFD31A7BJNjkKjWCLVS56keXZvFsDV1TunddhbcuT6FkSP",
  "key12": "58SjdyuV4MQCDxhM4qfoDfemZu1V6c3KpCxLeLe6uHECy3UuAEBvkXFUa5hHbnu1yUyUpMJiizPvfMGbL72HfhaN",
  "key13": "5MpABhDPGh3aRhBvhnTGeuEQfJDTY7kJb1f38Dn7TfHcsppJMTMqUkMGWstWrDV4wYjGj92Q4n6w7C3FNajByEqr",
  "key14": "3tcz47Dz7oWtbHwZGkM5yXEgW7NcgaDX3imLN45sFLoxjWbrRPYacFjLzpZeizL9MX7Y4XmH5tFCgGpuWtfqKVru",
  "key15": "3TaRcf67qe8Gd3DfwEr84DXZNQpgi1aQF8p2MdtCvcBW5dwppe8FRsLiG5CJXhC8e9sVDmpevYYvXGGkYP4mLfnL",
  "key16": "333Ca6XAir4twhFv2yFLNqYGNPQz3L5xQt87bh6SNHxyfaXtpLxD4HkjhccQJE6xafnUqwwcnWw8vEP56tRTfXt4",
  "key17": "4VxZ68yjtoXeXKCahmVD6VM6ZJ8s9b8MR3qUF2YxUfDrVzegu7Y2fEzz62WK7WZQ2gJwyVya3mm2Ys4qsxCoWfEk",
  "key18": "3rixvLcGSAd2mmvFKWDtVzaL1VLrLNCdwGXdLYEW3v2P2DnBJKwvwLu8udFQRcXgiC1SrermndhXWs6PGekhVnsN",
  "key19": "nKHadMMUPgfMRNyiGprtYY71SCj7AGpRQ5VDeCBzi1edpXvFQrbt4Grfw9XmQnGrzciXRkiADxEkCWSVUXJzp2V",
  "key20": "2G9nim7gqLGmYuwyhjLrXkGosdiSEWoZAgwDaEtpZiigEde93SSH7pexCU4z9nzNjTBMHYpuPH2PRK8yUHpEfz3m",
  "key21": "5VygwboehAht9u4rP1z3SULc8tJ34ruymSu77LnbL7vHLQYtb4v678c4uNh1JGQwGgFPnui8ZZe6rDKnGCTEqm83",
  "key22": "4mGir2cUsrgp9zxiZvgNU2DiXSshBWevsBGLWn7d95DLc3prPaHGJpnPiSQnaNaE5SZqsM4m8Cvon1djGaNK7YXs",
  "key23": "4rBUB2w6gqMVA9eZeskEou93YcCdHKWFSvWVQEYSrdBJsJEDwaT536rs8fB7511ggfpoDDmDNbjoPuJdfkzdzqUd",
  "key24": "36wZz3iDfHjp1zHgRCphCQD5G3kpVyPKjLkpGtgSCisnBmhSZVvBqHpiVhzx1CzwetyaPnzVS7Q56rW8V68pMuo5",
  "key25": "w8M2SvyacNCenBAVhtK79KeatoCDitMwn6MWSkvbq7icyACordzMXGofNTKhVLbVdjhLcjSGqGmtkobE9ccPuiY",
  "key26": "5gTJGtDf7SU7b9KUML9nVs62xvcM56BZUptNDRCfGWC6xxRfysw2GPRZxvYUg3uUZEaNLgvYq2smkKower72cBv7"
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
