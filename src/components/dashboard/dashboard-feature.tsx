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
    "53naPtKZpsWS1V1eeU9biYXTVRAuz4s9ezdi2ngjVW4YZYZtDa3GmLef7JRANN5cM8obEmnt9BnuPBJm94ukEL4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZkDEEe7wRiKeJdxmLLyWd5bLeGd2ad7Njuchvvm3ZyW31SafhFnnNabhrttJUHMFf5dVKty3mMxf41JuhwQ3mY",
  "key1": "2wAmNXmFPULRto8dj8xb9vZHzHq5nfdsjfW273cuizPxAWnkNmMsoUEnahsrhnGdLgFmFyEd13YkVftYFoRrFkcP",
  "key2": "4SNMbxgSirKqj2gaP4vqBtBehZoXA5QqGJFwjJNqwKZUy5WoRvYAFftT88VjEqLDSVqBKuPHDbmaz1E7kphLkcUP",
  "key3": "3swSPBZP3LTN7HbmKVT2SW4SYwEpbzowaNmSVvwhtmPcx85WqArcTMdYq3C8fZad2timyqAE5ytMn4bcQ2bBuMrT",
  "key4": "3oqzigUejZPsT9Hy6hVkvrcA8Fh2Qdh3zjEWhGvZ4sJhWXJy2KxtGVaR1Ki59LiCAzVCai7n9WU8i1CzsVARto7Y",
  "key5": "5VQLZav3synGyLgMpU7Y2oBHr99hQp3jgbQGDxJCdwpcHZBbv4A37s8zmC4g7Ed6gX1epphUQoMFZy2fkJB8EZVy",
  "key6": "2S45qpeRvWzNgKL9no8FPQgoHeXgN1VJcU3toGoBCLAmYUwfLYj2arbd2DUqrdXD6xfvzNDgbrpejsoEVDvBLSzh",
  "key7": "2ircmuMZEuC482WyPxG3BmdvB5Q79mXuJ7dFdKUxmHoorXEJ5P7vAbm96ByyPA7uLVGKPecA5eKmRuThrNW3QpJE",
  "key8": "3vSjfztanZCzvzMjc4BW3mdYzTNUxqdivyifRd7QPWbHbVZKpRxkKyBwen9c8k6weqcZ9qqxHm8Ez3F7eaV2VajF",
  "key9": "3u7deeKcvEwA5Nf6a9nUWT1kzH11h9gjNyAGgE9BQ8Wt7Q7ecE3RSSR5FZQF6U71Dc3GJJA5bpEzmrxi8Grt6Hq1",
  "key10": "9BBXMdMB149dn5jgQpvwDCpkJQBU1MHYdorH5GDZCVsRKnYVaBFR157y9HWiBXFSbua2C6jL1nPr53tzFqtpR5z",
  "key11": "2pSujfRXJMqsKtYSjbrsGmrp1xc1G44niWJbXoyunWVPWkj4wEb2bhi56qkHPPF1WhTyYzApg1XjCKknKELgb24H",
  "key12": "4gyAptoLPyvpjCGSehxxvDoHUy1tuN1Pom5qbsfZRMZpB6avKidn67TUGtFSx5myiQuWDfgsU6tgWr5gYbJT8uK1",
  "key13": "5oooTZa7kc6iZSp6TuGg4kCQ69jL3Ec7qstXGZE3i7uBtfZfchSgGZ42B3aFqWfZ9KTK7tpDteHPkknKb56ZtzwY",
  "key14": "2gS7a8Wn1YPKp5mgJaqHqpFoEHAAfScK5b4vjDyWFDKQMMdq9w5jGxnsmGMpuiKpzuSK23jmDGX4E7UcvikkpJkb",
  "key15": "Ca1qUxUkHVmwxHMsrnBnAG3kdcjVtFxfF2ZiZXPqhK4ZmAZ5tNpqTnGxuifDRUPcQYjU7UrpphytdSA6v1nKpgN",
  "key16": "nU3Ldp72LiZCDMw1gdRuGQWXfzmbHoxzWj366w1iDNp4fyFFidsxucVq6LYoxA6nK8krrp9nKVeA3zfXn8TNkvH",
  "key17": "4WKionz1aLC4iC99LRDtGfbK6CehHjcBNgGgE4x6TZvR3WStUzXuVnnnWnBW2VbPXHX7DndwrZgsHqqfmijnyqvy",
  "key18": "3KQQfAVBzBPZTdpz92KUAUtygcoSb8vwqK8aXDvTioQiHeS9sN6FU7anuZY9ehJTUWGmHauMX7QhQHEsW8y7Yy3C",
  "key19": "i41ZBYjW96DpZKLfjzahgaWoHfcjJGanf9yUKyNZR6rHy5DbRV4H7a5jewkfg6XeoeXvTE5gcTZEGQL8akcqnb9",
  "key20": "3Kkr7CAhB5FSTNRj3fGHAHSv9W9fkeSz3WTu4E59mwi5BDcXxN9N8S1HxPB5yzuTEZxPwJo4PkjtuQYVcQRQ1qpo",
  "key21": "4Amekevke1CNWcUaN2iL1S5qoDP3QrPW8ndXJ2RiDi3UjNCreD38awTS9NtfuzMWp8hXbrbroJPtNYHMvx6i6du7",
  "key22": "28xNhw7T3A19ZY1jjcXHkq731AzxnhNco5qheibL3c7wGMHd9zYcHubMEQW3UTHVpRaBqqDpmMHZHFLyWiYwo5rn",
  "key23": "Smm3LEoKUj1jwvm63ixrzmNxxbv2JTr8ANw3uqo7NXXe3og9FSkMgNDmwuuPitxTqyfaJfQ75x8QsSDzZUrCZRT",
  "key24": "4uDLf3W9Srmx2Vte69WtL5mv9DYTXQYuANo3KbQSQgRzsVCS33WnW9isDUbxugoH26MyBbJ6Q4dTs9cHUzEqk8zc",
  "key25": "5oE3SXQkdJHhkWQxnf8nVvz3zkwZ2qSgLKHgU8tVoyzCcxJMHy8ZJYYpzuW4BUX4YQwetG3bKz5XtDrtTRuzjpYK",
  "key26": "352NkLphDrKMVgvNZrYHgCpGUxQFoffyzWeL6PJvCt37vi9YiN9fAQon85diiVwy23gPAnrkxKXjwxPqoN8RYCfZ"
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
