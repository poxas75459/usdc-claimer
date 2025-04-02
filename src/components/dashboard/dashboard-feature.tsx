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
    "fDQJguznvwh3Qcg2r95TXEN9wVGi56beMLPAXRpir3wguTf1c2XTgBVr8t2S66QXbd9DzidSmyw6CKmv4kDKece"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3givZ9UC1K6rLGMv3oCZrqf6EWpbMcokGdsB7riL1iz3sGvgRsHkBGXdm8KvHsTDvC7Myhfu1hskv73FEMJ66RZh",
  "key1": "3PY6K6XPYKaBLjKnXBqhhMvkgPCCBvDNaYm9eMeBcY1vp6Y6DuborQTyrG6WgiS6Nh2XsaGgraFUfbe8Xx8KXVGN",
  "key2": "2oorGeMJ7ArdRZnVqGJxaWSNeNgPXaci1FNZ3HbPj1SsJdU9HZuew8txgL1i4gYijkRQPcwYUPa1XgeFrT9Rrf7B",
  "key3": "2DbJjHx8H95wpm5Depg2g5U9pBTBzsMJpxiL8UsSSLCEnHKCoEw3pUXBvBjxGJ21Z9WPYNUbXc46eNfB94ARmUQ5",
  "key4": "5iDgJ91dLBA83V4esSG3wc6kg7218NYvy2rPAJcQpfjyWPQqZZk78LVSUThzUpumwsV7EbbRYB7RFeWzxKAuQE8s",
  "key5": "2wLbbaCVYwJHJ8otLQJXsidA1WpjRz1Sa8aaK2Q7rGdAsUAEbS53F95fDz5a7Vch4teeyUcf823quXFX5AXxaEh9",
  "key6": "qftfqDHjJm1ZskCEGHBZnu7vtYua5yVUgWe3CgLGe31Gy9oT8iHEunTkEBiWWVVTV77dsf75pMN74sXzPxMh7Fo",
  "key7": "55vaso2gFMKSnMU73aByQ4hnj6KZnDNYfTimuQPJSUywUPZUep4thUa9GgeinrAU21WRmn6Lq9JH11niByZ7esHh",
  "key8": "GwKZ73TFAeM6WGGbbMd1vTayFZmFMpoXnNKoyH7s7LfpPjUCwf9JDkDP4DaYARz2qasfjeSZVUk7dBS1FhwCGnu",
  "key9": "66RCSCnToX8xQgSqxNZRHJCNyF6C1eFnv1rd2cV3Xp2kAayF4UeEyyta9ToJuiTixF3yRPEd83dKPCGNm9XxA92N",
  "key10": "3VPqh239nmBJzz4yiA6iinfyorha9jXes6c9hHgyiBqjEYKhKc16WiQ5u5VnuUzFHivUtvQnp7iPNR8ZknYktEiT",
  "key11": "DBGigvXxPswePTHwnXTNCmEyyrA9BK5YSrPVWMEqfT1RLWPGQz1MarxKQJwQfGT3SoUYvnWdcuqw5uvxDxm6Sz6",
  "key12": "5ZTkfk8idwkNKyZTYC3zMmFJ8GgNS2xRQE9CmvmBLw4HzaS1vak62ahUSKxbY5dsV7gv5aprPBkxxyVP6FsLi3zo",
  "key13": "zNC57zUrCwXUuoH8j4L1E8D6L9PN5PmDFqf9Top7jai6UYMUN3QnGKcJdQPgKfhUxCdEUPLr7mbyper9oTopqfy",
  "key14": "2iFUWJ5BzSJrozKWBDNuahGp49QrkncM7huN13TnrcPxH8QpH7Lvurh5bPoWH8QEDhdzWjdoSFDLkoy18AqcxYkH",
  "key15": "3CmytyRHd4w12swS3ctKtY3xmjMtPA9cKGwgdjfYyyC5nvxqxJJ5EN4KGmmLfQWT9Yj8vCTi6tXNfzoS4Qmttr6Y",
  "key16": "2grNw4cKRGf9KbuPjdnsqVaBnYXFkhBFhZ6Sqokwund7xaK428VvCtYrBwhcEvh7kqDHu1ZSNeX3Kz2jsXF2WM2",
  "key17": "5GF4G5VgC3r6gMdmxJofocFoBYandzv1KyG8WhpmJxMPBfVDhwrJ5nT5aXGSFywmyPCdw61bPJW4rytoJ7ZcjoGM",
  "key18": "V2iHyCKt8ymUYgYKcTVYbxR5s1msshQmiZGaiHrtgtUUrEsAqdoEHWzha68Roa9aL4hWXCaAsfLEjLyDY6uMouo",
  "key19": "4gPB3x8vziVTqr8pJQNCxShKNkSSqFA8XYBAM2b9fth4fesTed5Hr8F4xWEFqorGGY4UxSDAtrwGf7gUR3jw6hm9",
  "key20": "45SaRfnJo26UaDHkEchDDkFqjER1qFngSzLjf9Jh4x2f4h3HNDzQyFzjZ5RcoayZjHsqJ1rNDGFvYNjAEenQkpaZ",
  "key21": "TKMBUdmKv6y1y4bMg4VHWPaVf6YHoZUQhdzqRmSrAjF8akMy3goyR8hpcrju1qhr2KTQESXFocAXSiwxkv7k2MM",
  "key22": "3sxgLSwYht9yU4PVD5if9M7UPW3yd7Zhw4tGKu4zEArach3KrkwXmfY5FQtPWGjjRP1Jbd23tEyhRBjhv8uJAd43",
  "key23": "3ngLBhSvX1FBh7wng1QxaX5S8gKLj47NwEjuYbN5ANEVGdsLroNUduBaWVWYfM97QharFvfoegwqFPDbh2NVTd4d",
  "key24": "4qFnUJwLa6xesboNPkQiWP9r4YG4hqbeSnxVB4CjcvvRPJYu5Eos7ihtEAu3KAAbsoMgcBDZoo3HGxm6FiUBtk7b",
  "key25": "4CpjaKjhquU1ePxw1NcV3HmZv1MviM6db7Bg5uhCW5xgJMkzqvBjUQjx5gYtVMT5uU2uc2UapwXrwiLy3CMdw3C7",
  "key26": "4aTgvd11MeagRgod9xjwdLXtKBaVG96pAva4bVga8D1FCzuJPNrgBtQ534HmjqZbsA31WvQJJJMCrSB5q7AUrzsc",
  "key27": "341EN87RFPcN1UMHpxqohvdvcKXfeMhsjQoM3q4RGoQK18iGciT9pNqCCfus1dqVP7QkMa6V4DE2m5SYjzubeaJK",
  "key28": "4MLcp19rNjz4UTRXz3yiweDb8p5SZby2BBepmv7Di88oHEQ2bQBoc5UVmJ8f9Sbthji4FAavpt1utmWphVj5gkVu",
  "key29": "yZVsocdc6S3unAcShA8FMrrSg9rcVY4kikERCcBvthMSjfJNmp31YzpiGt4YpEBT9i6Gc1meLbYiWd2o6qruD67",
  "key30": "57ygq99nWTup22mYFUjwz2t6FnwoCp8KedsX68k12cpmjc56YoB4CCKMWRcjNVkTy1W3h78A7jZBDb8cpyk5LPuL",
  "key31": "3u2HJxkiRrKUXT2V5Xrn1fiX8jMnZ3FZnn5gJvmwdgxgwG4LdhJ6KxVFPn6bKVg3kAyqfqsTxyHzqAga2erpMMtA",
  "key32": "fgkPoCGbDkHN4tWpMhAmf11vgLF9Jjqb966XavzWPFJ1Hj5CjYuA1dc4CuqvrthdMAjk6JCi8BYQMNDpwJqMvSu"
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
