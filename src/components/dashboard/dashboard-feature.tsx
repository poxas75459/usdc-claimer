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
    "2Vua5Aq1tnmoqgqhiCtvqspF6V1ogBwngKHpWWpze3jNa3dfi9rkyfTYvqrSSdpXF8PHjyobKNuoEBfGb4MQLk9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shCMctWTJQnM2kBQRbTSJSKTs7Nbhs8SHyRqJvevUhg6Yp5r8qkqLDiG3mjQkA2ypmR9jc9YJiMWTJVd35fqJPc",
  "key1": "4vxJbKpkFAXav2RFu54T7GJhnV8ebWK8k3ywrarrKEBZdQd5s6QwowvvZz6Ungxa3ggwfFwxQrhgCdaiBwJr2fNn",
  "key2": "2ALMH6bAVwQwMYo6iV7Qg3MpiZazr9Gq9J2Z76hgWtwPk1uUzdDPayyJFAdJaSan5S1iP4TpXCSMu8tyo6B7F55w",
  "key3": "4fZNhSRAxMgkhwqp6GToyoKTTxWx8gsXme1H1o2eJpEygYGpean9BEH9Q3gP9q9ZfARprhgdihFpmFtaqrTtJrx5",
  "key4": "43pW7HRKoH9F9hqAGrngGvR4hNboxBeV5ECzu9eQRkRKAMwbfRngZ69kwLMZwTgj3e2ZFPkESXuXSWc9kgQy2XrL",
  "key5": "4dbSex9SZ4K7nCNvvftQuK6t4EVZWPM6bLh6BWGNy5Dvy3jPcZi3RnnTVNKWN6EZCTTc45pqwz2Atsq1sUw1sHgd",
  "key6": "66KqJ57HMLXF7no3Lfs4UmdUxeQqDHhxPRgYGPqUmsxr7mGJqZTi6DA5WYEkU7tipaRjtnb8XJJG6Bf3EFiatTAe",
  "key7": "4EqNjRYRsU5v2oiiq8yBopjc9iWwcUv5J8weDFxmST9wiifbVxE7vhnoEF6ouHGWMnmFAsZwhx7NbAr5QYKqd1NT",
  "key8": "5mB8VcK5bXQGEQ9H3EoCopFtHDNaGqnU82SujS5TwQUE5oWuue4Ea2PPBoSBxGSJBrfdpQHUQCD3g4RMwqjGkbmY",
  "key9": "5PFLU3owyXgAp34DXk1jkZ6dGJQ3oAjo3LyHGRdy389hnimiovhUHbdPbGzDAc6W6KsEF3vYipB7Xb9wUyitPT9r",
  "key10": "3rmUw44VMjg9NrpGbq92KFpZUiyERfvQZSA3XS3toLdxynKG2gxGVduQ41h45NzMkbCAtUZuj7mdi7SRmdpL1QbP",
  "key11": "2WnBh3FQdX1pH1MNpNtibYcqM4Ezxsk7nTtDjuB14Gm4PiCT7xtaz3hKDPic8X5AJbr843SZVQMKTnN2pMVbktsJ",
  "key12": "61ZVDoPM7psMvWj2nyozdh7qZJH5CJ3uDbot7VQuMGepyfUw5fHYir5sZJuvbwMycqasKexQw3DyAoTCQeBGydr2",
  "key13": "4qVxDLD73sCU6aSm76UH157nJbvZgxQBuDJ1FWzzACKcRfi2ox66YPCDsZEyu3vAXGhgss4jS4dHbiGeYo6wVedj",
  "key14": "5Hno5pnuGPv2ocnVK2QVxHssahNH2kC7gRmQ9kvzRs9KeYfGhk3p5h6ZLjGauukkHLk41PvmFFoM7ZzQHxDkvfRc",
  "key15": "5Xg4P598btked8Y8kxgMX9AvFBjrPxfZtb6LvyLL45L4hzN37Xhb61AEjTJ5vAv14jDucNcropgxSoCqcVn6kuPS",
  "key16": "E3RuCU3sR9P6khezDbJmTcc9tZD7Lj7sEXW3TgMHuVMieBgwgoGH1GsjKNJu4tJdYUYJ6cY4kwMxSKSPcgcZp9m",
  "key17": "2hYAAtiqLLuqCLMxhWunRjhYCqB5ydY9HtjZHf2Az5tdoULPJNrTebiWk2sg8UwQ1g5NtpRWRkb27NB5QCD5xNPC",
  "key18": "LxYafYkAHs5MnZrGuDmmk66ZQ12cwHTVYEjk3R7eqoy4HM3V9Q1KPjnufjuwbNiWvqwx5aw7zZFLC7UkKXtva7b",
  "key19": "AvYXDuyB6sZCu48Hj33gB1c8sAqDxbtzG4R3MjBnQ6xosb1oJtZWr8ERTzkBjf4DbDe1ELxNJf2gzMjb6GQFP2x",
  "key20": "5MZwsCb4Kkz7rfbEANS5fWGpPYzA8LTnXqaGCfiXRvwjfhg1owmpqpsVH8hTrweFiHbzFtnfhTWXexe1gqk7eLcM",
  "key21": "2gjQt44UigQFxh1rRJvRxmGFam1uC4pJrPRktHjiUpFxtSkLU22UjbiieKJGi1io7eLmnTVCQSiDXWhdNRLCzmXg",
  "key22": "26YTsdH9umKGG2zqZVGVdEXJHwmrtXzzvcFhuE8Vd5tnKzucZCxNtJUnQXwLFV3PHEaRHJW6y8NS1kNJJpfVETxK",
  "key23": "62RkMMLSwSVDtw6erxtvLkaGMfaWnuCfvMij9qHjJ2Fyap7hHuwrQh3AkuXUp8dLQXgWjDAmQAtvwCuUhWnxgFkU",
  "key24": "5c4TP47ezY3Myrgrx1TQPfj8dUtL2qpBXMLNh98JNAv2j27x6x5g3zdc53ZraF5iRQ9AoL3cFABbceoExBKxtQSW",
  "key25": "ei7mfhu69gzGAjYzzjBovWZYJjPf231k9f7uuZDzoyHbVeyxhRcay4jz8tcku1JP3EyT6RwMVw1b2voMwf2Fnc2",
  "key26": "4h4nTE4H5UKwcH6B16oEhg1d5eq2UimgRPfkNHayTmqQVqwxuejhNp3SwfAxZ9mZ4ivw53oUGUofAUzMEXntaEw8",
  "key27": "5hFkaGyqagh2YW4b6ukTcF5nkMq82NNMghn6RTTQjsBoXtZrH8KcDFtVw7Fjje3s3UDgKfPQXkoKdhgB9KLJYFms",
  "key28": "26xccpLT9Kdj4gRPkquiRhR9FbxTxMuHHuS2wAbDDqPJj5nYJ9QjnwqVZv3XJZ4b5c1AqyZj7m4e8zBxrDgEQnqt",
  "key29": "4rEn55CnecjtDZggDEBQmgmKjxgqcr8mKtMdxzQkKZTJ6nTAD9Z6Roq11U9bSRWeNSyHdiZebxFvtPVrzXRTgWbz",
  "key30": "vXfUD7uyFV3tA54to4brJokbKBTTAceXDtwcgWz7qG14pcATiaxRXNi2FXVnfd4SL4vD31eL213MJDNEX3ruum9"
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
