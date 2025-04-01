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
    "54pLdvCuqS9GspseduBztM2Rg36EXoyqvFmfVVo41MTrMhxpCCA7gQGNw8nXWkWNtJphTwv81yTM6Ykrn6gj5Xm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zezZTRS8K6Q95DNWjaFVD3jfDVzmFjugCMArbzzY73gWE3cMoj1758cJTbEm8B6zvTNFBTjeQhcRsCx9XeC8K7q",
  "key1": "3WeefV756z4VUXeJ48nD2teSRX3hy37GFH7XqsLJiUec8ToR9cTQU9HZ9gtG7sKZp1xfw1rCy8AfVs8ZTrd5nFda",
  "key2": "5FGvQDd3MGgspqTrJ5gtGYBDrG5VxwdNEwSUG59BvoJE3sczjzCnUXVUNy3uvRiUFM6UfDbx5Q7jiFMY6BmJidQF",
  "key3": "3vaiV59Ra3yzRVKEXJ7o71u1C41LSrsVjzqosSoBHMD4bFdZim5bAhUZG9qAZzqgQdVCb9C9uQ8vYYDbTxZD73ro",
  "key4": "5n3hChbHAwdBekEQtu5ENyRPGiZcF92GqjonDQ5kPSZXbke2KkidMu4575x7z1nz2CDJuCmCsfsRz35uyi4U6qjy",
  "key5": "4WnN6MsFtjAayWXqdpqhaczzfjZoH56UhW5gCtnorLhLXtJjXwKcwGvc92TPvahga1giJ8RRN7YmorKm4ujMKmwK",
  "key6": "sHZE6D5nEzJgmpZTXXSjKN1gnQULfZH6wJ3vEj51HLRkNha8LztQ9bCoVUrozye1pfhJHaSM4wQpZ64vCmu7hQk",
  "key7": "4eRK11SsSVej13TGo6Q9QxY9WW6qxsEh7P94KA276BKqjXJ1FTxDdMsN9UnoxNPpvUDHnm5xAVDAMRs2CYYqvzUj",
  "key8": "2xtovwV5up2xG76M1FHdwQGeufyQA828LrvNciMHgzN46rHbPPQrDnGcLAxcZyZGNjtQDEfGhsiUhWQkHXQCTLbY",
  "key9": "5wAeFguUKuxnBMoA94L7KLCcesG4kid5iTmnTKoCHPsYSgmQ2H6HEy7nDrMyh4ZGwisVpJaAjgh6vCwqyEo35pac",
  "key10": "2crbNGTJuRkn6dkSPR4djaVT8MaahKAEXPR66jggUajR6XMsqCAGGsEHBRYWbNhgDhavmSapjRimg27VH5z6ZJ96",
  "key11": "2CaTP5cW5PhbEYLX8mp15SAwbntUdkMexJUhyDV7Y9Kjkvj7wC6jyLEsKjzrTzDe92KqnZEH6is8FBkhZsp1arZ5",
  "key12": "3ux6sVGsgjvFK2ndKFC7iYmg2mtfaQ1v2TCysqgXWsUjeCxVqCbzh2g7yyQWWSNe24QAjnMtzGyLsmfmSLvtBEz6",
  "key13": "4XFmTcAZzDrCPEGnNYFYqyfhvmqYvMD9EGRDiEmf251QQqhwFrvqo7s3ic45Kyfs1LNsbS9e3cGqXDUo9vjtJZJn",
  "key14": "4KwDxiGGy172UsRw3MK7aFrE5w2xpS4LexE4QBbHL3FxRvQELois4Tjucb5BhsoEgSD1g1Mb2oicKNdakCoWWuQ7",
  "key15": "4wCGUaWVYTQMD4pcca4vRc53MHB4Z8UrEJGoi9GzQayTZjK3ARnTogvQtjMPR4sD5rPy55gpffJVt8Dvd7qqvC4F",
  "key16": "BvM1peL7sv9NfQK4aJczeqci5c22HTyGXUsmZnByeVUERqemXPANH84SZ6nLaYU9YHygfQUxkRTc6LPLEGZorwf",
  "key17": "hL2122aD9N2tU9hTjnKSFzztakodk6F9NX9eBroDWtH3rZLhhJrFPbiYwKVvqrwKiaMEg1xnTZgy3JzEVeSFNtQ",
  "key18": "5pFaY1GPgDZ7ydszWdg9FuFqv8qaJaCXpEA8PmKQDP6CuGTwU5xKNBcELuGhZABqYgqK1AE2Thm5hufDQPYFSBKf",
  "key19": "4SqSqF2jjLAjfUnob8D8Ai2aZYMK8ztuR4SCaKcrSpCqqTTxkT5BYBbAqC7ipTn9RUaZFd36Avweksm2VmhqHTcF",
  "key20": "26VgSZ9kxHkfPcwPxAYmVrfojqAv5UgeBWbPZLmKxpber5Zjcd5pBynybBKve3bU3g3qBgbxGaCK5df6HNeT1ttu",
  "key21": "4K1DVTS67P54UYcNRByypBW7jUkPLepzfcFYUxX5uayK4icWwsefGJv4wJvTwB6VgTTsArHTR2Vx9bAv2wEmXXFz",
  "key22": "41NBp1GTgAEEyYwdjmCHJZ6ubJtsDiRR82cWXB4xJu6QZ4WqHKJpwZPR3eemZGsEG8CjJx9hdrw4vyF4WtbGepWo",
  "key23": "4y2xhkk1ztuRTXPrwQEwrBZ25wpWQN4onqxPFrRMkWYHXndhtSxSgxF7GqycB6VayHh6kG6wwhfR1f79VA5147fK",
  "key24": "43TjWsScLzRjJCuu9JNwc1s2kHUDQf97Tn3hjQHaSsmm8FATFqkh2q3GbyTjaNG2oT6JiDq8m7fj7ztSMsKHzFJ8",
  "key25": "ARrNgUCw1cEm2bgUHjGXRtANeTFcRoTwgamfjdneXxyCQCVVZ6yJkTZx32sqsvErpkiUfBSPdkniVnQCxPzdcuX",
  "key26": "Q5Y5jpv6hQcky79xuFkfhv6GRjMNcLYvAN63PYsiVjXFA8U945Hu2vARe96ddMjqzdxXEQh9PPKaBJP86BUgRig",
  "key27": "3gRdvBih5hXn4psyE7PEJwTGYZtPkusg4zfaiZYoehRVc13D4L3rrPJj6g1bFLeAH51dyz62cfr4Pg2HCw8qXagG",
  "key28": "Fc5iMZfnxe98FqjLZFV5GdqXzPjXQXydUvEthBgChMSCCdZHwKpx27oGoDjzUezKCsN1fYvrMPKBmhiYjYYRFnr",
  "key29": "QcfP72zq4jzzRoUHmUDiySep8Pb5a5tsyXhnYtBz7Tw7ADQomPv9JXwaCgNtk5CQK36AdyYWMifA7D3yZSPyB4C",
  "key30": "zL8kX6ao1pauoMDx4VDvcokzK9dA7ZpRgvraZ5M5b738aXZiBodqpLCvBaJcQSzemK5zkbhmUDEs9nWpG35pQcv",
  "key31": "3kPHssPWvTdn2mBhhyZVaXr3x9EGYBpe3cABTeMJeqwWANnDLYHAZ6zSMxuXCTxinyppd4EwYPmSJJk8ePhkEYAp",
  "key32": "66eoRn3pCiukAzWRtUENtqWH61iiE478SggqoK7Hf16cE9XTpNjNRJQ4PfNMe1QHiEf96kDeQYtxNbgCqbzrkw8k"
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
