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
    "7ipsAbYTzVv1yg4oN6mHbJ9ypJ38oCToBgs6u6XRUusCwXZvYZx3dtFZqk3EjbzDZr1Z7CKosFjPeZb4kwgYnY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "322Xbt1JvfzgRRwRYNybamw3VyjGgKHKMzMfbFTXxUW1qL3nA6Vm1bpKZYVuUffGaby6gfH8RPiPQ793MmQYXSvb",
  "key1": "3WyBcLNy3dBr3w6UYnoEi5CJoAxuV5cA9Jw5q489BQKJwdC41FmRPs5eSVLGerXWMh1CpBSvuQwZfVp9qXNP4Ryw",
  "key2": "3S5hPtYqSaCkQJ2MaYbvrKA19S6iNDHFiRKJEJsfWZJcBgChVDkgmJBfKU8kVqKGQZBAHL9eDJL395YRgWv8o71d",
  "key3": "2diZ1FBdV923wKbteitdwoRU3kEKcRt1s2w74Cv8VW38L3wuL2beSDdZZf7XftoK9jbt3cZQk2JUyFd4n9wHR9LM",
  "key4": "4rEbx2uPHnKyG2KCq1c6qN8fuZFEfBKdZckUDr1AHpwLc2vNSWoBLvz3VD143hCqU3vbtbLvJXDN2ePHSiyEcrB1",
  "key5": "sU5rBkz3Ht3Syh1YsVQmE6HdYtGzQQtz1AjM6ZLZCVYm4ke7uDUP11zrk1ufKst41cKhWP59KypD3xL5qUqa34d",
  "key6": "2dDkzA1YDBQZyfQ78Y9xXamjwCda5c7w8aNDmf9GvM5Cb3nSLjHt9JqoieSWxzEmBt6zozTHd8j8nuvzHY8wyqUv",
  "key7": "4V3WpctLcdv2rFiqAwVo2A8E52Lae4WvJu3Q6oKhrbwJhfedvPT7qXHwL24G6nUqBRT9ibTMoVJqJQ79dwKYGv8Z",
  "key8": "4D5gSfKfMp7zS9urgaoLjtV4NNWbNzPrppqJwT8pvzhNy9fjzBsCWK5BB9Nbn7dchb4qv1bWhb1xZ9T7Wp9PJxgj",
  "key9": "122dpcdZodB4E21MAQ6kxBHPNz5rRvtB5tsDNrLCEz22cS38RbyUjhPJF7yrP1WTEDgDo5Mw7Son6NBAXK8MTm8U",
  "key10": "47e2tgJubZVU4BXLNs6V52r83ExLqwFNEEjncbrrGeHctsRsGCw5QWgUrxndCoVfjTrJCDSutKcgUFx8fr2PbWWu",
  "key11": "61Ryqc3oLFo1vFWsxjNBgd5gGPE17KFDFbZiUb6iCFQoU6zJiMx1cWPkjzsbYcKbFQwu3dcpRSzp9iz2Ra6e77fe",
  "key12": "LkvSVu7rsCLKUV4bAKJ97i1zNMH9CuLzmhHqePRjVbm1oLyJRhjoXQSY9b4H9D9qA5NfqX1cqgRS5Eh7jCj4d7J",
  "key13": "4zvfZ8LGjv5Dqi2B1f31Jcbjc5gEqoUVgCQWLbmCnhwHUKWtadzAhhBnRda9a81YXY5FLYbBbwUckQaoViemVbQn",
  "key14": "2fWZwd2Ku7vZbQJKWDJXrMoJEbZESg1JhPiud2WdmVxP84nks7oH3xEXPM92skkVKG1uz9Kem3FySqWVfxnouK1z",
  "key15": "2rvQ4KdhkAqXnSjrpDMDKchchg9ybutuMPoAF9TUoGmfeqb388ahnUKLY5GrU8AWF5s2EBSAV68KDWAMAw5RFGG9",
  "key16": "RMiKUdTcZjEa8eUxRMmNGudo9XAzP9pBspfZXHHECuH1FhgCcNEvhY2zZZxRzS1aQyTgdpGUs5g72AC2uAEUjqE",
  "key17": "37kL2vtuhr4BT6bRq1157aEtLEQTefP6uRan7sCZGXf6Xh8xwnEL7N52j4DUYKNaCeStRqWpYQMScsr6hg7Mdz5a",
  "key18": "3g2RyZShiAe8vHo6vL1ZD7QLXqGNSmYMYWJpQfH8bm5HHqZQEZtYSMRQvRkhCkYWwvjgsX1vmVnpPDkx8ZrfNdCZ",
  "key19": "2NtWKc3i4p4rJfYyU2KGXp6qTqgReA24wDtEhMF6bU3fpLRJHY87FHXQCLKwfZ8rokq8teN22n2em8uUTVQNBZW3",
  "key20": "42XsAWpiobSvRLJEEvu35JwJWkX8ngEgDmNYuwrBzNMRYTwUWxmcNGKQc1o5g68XDLC18cUcShKpVn2xh2SyfybC",
  "key21": "4ThczMC9w57u5qJsTzXHdk3om4jrAFBkxr5X2UmCN5B1MyRnfov8Rg7z94zqHgB21W7txt91a7E9cF4vkFevip5M",
  "key22": "2iQfHUEmidzmrY7JPAXxmuJy8qypXDW9dzKj3drX4er9kN86Bi2o6kkkyux85CTXLZM4a8w6ELnzNQpSQBNRvDhW",
  "key23": "5YVmyFXu9vZb84kswt15tf5CaBFhfb22sWa2UTP1iX9U8E4TPm4uG5CdEg8kBQ7BaSJo9RbqAHUnKg9ZStdyzKCV",
  "key24": "2ZZ5xWcA75vGfiTPipu5W5d4EdrMPk6mPMuS4Vzc2agBibUqJVE52hfw1TaqATnY6NJdCcKB6SYvnV6hP34WyA56",
  "key25": "5HnE94kExcKVMi8V3K3UUJivadSCMwx6x93vKWejQsCCr1STqq6xozZHd9m6146H4j59VdH8kSmocynqgeJK2gyD",
  "key26": "29nQsxnGz6hcsNVcKDZsKkezW3yrm1qMzDuhKKhpXYHRzoewtvSLVBAqjZhC21yFSXaGX4o7B43YsTk3GgNodukM",
  "key27": "3pSUGDruGHvSrDwRmRh7Mnces84666AepDJTvGvdahdzLXgRtYsW6SkJYW8143JmcNdMoJtxN2iCnRuCtyGEjp9R",
  "key28": "2T2rkZMATTMvgDrM8rNnV4chbDEWiE5PDhV32hac9THgJ3LJYgpMtgybSA3F5cS6Ekp1tFEs2C6RLHkSgtQW5BVr",
  "key29": "4AK61RHifFLbgk9D4say9x8agterAjnxhnXMz9gFWXrvBq7nhwh98mwFLbZLJc7NeEjnU7NgRbAUFTa8UfjzY22S",
  "key30": "3CgFyXh9zERPFsRm7nnr1T5QNiWyPcpNdcgG61rNDH1gmrvFk5QFktVRUrgag7mYDtE5DsHEQh2J9gzj4N6bWHTM",
  "key31": "2B93Yq3EWv8gKEeqwiB9FkSJfifJ43tjFQHAmskbZ42a3QqEKUckdidWnkgnZF4eGiWvxC6wo8SGgmEkxPV67qF6",
  "key32": "4PTnkQex199F1XW7hdPRnazkXVrbAP8t7QbmHymtFZvqgnHfdkZaHDvP8Np8ZTPX42s3yhiCHxqpC5eJYgRmcWev",
  "key33": "4x4vuXKVfZLmAhrQMZA3bcRVK55Xa2UykzeG3C2nzrJ3GJqq4CJon22dSNx4jc55jqdsm6CawLCPzWc2D914ctqP"
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
