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
    "5VFNWUk9YNhzYM4vo7DsG1iyp4UQqULuY5iPytwZgMpBoTKfHceo6jzBGTZfhA5PyJe1BgD1zVhZuWSf32X8VMv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghXLxgj3VkJNM9VcFHzWHCrXGP9keU5RpzFz9kfYcKwtYJpHShtNS9KbyoC7CQYLaYtDv7deoNvCSVCvMtHnEaB",
  "key1": "3SGsAihCAxvHXRpTJmKBJVEn8NFZ8Md2yEQwh4iFKv8bLbLkRNz6dLskRAyXdSoDoi5FVL3mZ6Xw82KxYigUpp7e",
  "key2": "3VjDakUSP5eTFhxaGEyCGZYzvFfkJHobhgC7E9LtiZjf7kxzfuhtF41idfv2WiR28tjCZARUhVyXmy2jsRH9C89J",
  "key3": "2vZdbxCVjvQ1vbM9iJnjdsyRvUFJscbR7uzr1vBaVP4hyh3MGWwD9aG4NcB1mpNGPcdYNMCaYdvmEXpByZApJkr",
  "key4": "2AHLWAqPDnsCWmZzVefU9CfyWGwkv9Wma3WphnjzUQyDx5JuZn6z15JbwknCFTwXrFmhCkF7JhXSevpsZzq9sbwH",
  "key5": "3bd7C4ewXZE6BckFsAjEd7z6zdkiNVEkrt27kEJ4rXnbHB4hdivUGuY1bU1pQea6eABJAXNaj3nJQ8qQrAmYjCTf",
  "key6": "2tBAdNX2BQSxvYQ7i39vMGvnKuNiLCGb6Pmpsy2T5ydPQVshM23LU9M47se6iQ1gFrbCSCxFCKSiw5xcapaNcnUd",
  "key7": "Wugtb92wLmpux6peGfvmvXC1c2HFfvimEHQW47dt8wTb4M3Xbmq6dFufiMqATjtxAZTtgkMUeXH6GF1QkKhHzEy",
  "key8": "3yFLPgjpZhV24wfHNBSFSXskxH2YhdYEf7f3cguhBqeojdoj7RunnhFb3wUCxtrc6nXPr8kjQtjQ65fg1uAne4PU",
  "key9": "5DkiPZ7oN4acnf9nnerdWyRd5ekkmy8keJSiyJzgZrScofK8E1eis9TYFKe84UAqgxCY7ucNmxES9rDER5NRRnCf",
  "key10": "4cT3qpBPRJUhh22t76fXm48Kft8xi5SQdg35HDmVy39NT7PkCGz6gAbwqGEGTGG2LpmzqjMo7k9PasHxLwGDwVqX",
  "key11": "36V8iyV6oEDJ1oeDRzmYjbkjiUM6okVccB42ZqnmsmYSzrE6vCzEFrVcsiQDZBcA7dqatb6Az9pJmTgbE5UQ9GDR",
  "key12": "qG1oWqhFLiLbJfuQbt7SWyTzLtwCtaRJdVTonPcrLaGv4Rp1ttheojBE4wtKfP566NP2Bja28a1ifRcpNojdytb",
  "key13": "3qZ3jLcBQcnJCv1t6GD3P4V2AaHGXhchmJWTPgXL2tPvnWAqprUez8aqGbydeEjXoqH58uZNRxnNQWJJVSh8qDdN",
  "key14": "3kdwgvn2nS45XQ4j5WJ2UZNktvfB1m2a63PDd7r4CXmzyCmwdsePVPZ1HFJgWC8D4jeimbmJHMRLWk7jvsn6dq2t",
  "key15": "3bzprLHzu21anAQA8tzuwPUb6KxwLCyXoFp65HGwgT25dpHf9MX51v1CqgJcRbMmoQ3T3FX6g7fEGhv89gDpE9KA",
  "key16": "kDRiXgj8SjHwpN9LhhoL81ieYabgsDWjZA5Ff6evyFdHYG5AKuUgeWUTagaD7CGfsqCc3fjDFsFt9XcYW3cAL1V",
  "key17": "4zy3netRfDTY8cyQQd78ytGjP8cybSvkKtnNjPV4Z5u2iTgFU8K4VT6d7vkxpBWoJBucLMjFZ7oXGA3KFgowsLb9",
  "key18": "4GKcNztvdgyNTUbP21J92RN7H7gFc8FQ8R7EeG8c231TAh6w5W32MuND18p2Kz7F2cXd2gcLrwe1upymRGqyyyQW",
  "key19": "gXasUoYXkizoU4Ueiwni5iiuWzxtTkFM27ptpRkJx7tv8Srgpgm8DV8MpVrWiJBQi6sh4bymsqE83WvEg74Hk3n",
  "key20": "3By7zMaRp8yTLjqLHvJ8bTesrWjCTx4M2yjTPkGyBne4nkkgz5Lvceh8EF75E2UjxugeC2okexFh8L6GNAB8BDTm",
  "key21": "35dCsbn9Jxst6c7PnwVKbnWPhXxBxDrrqNuGrGpSwTobmUa6ub4FfMVVnetB8S7Mpkzy2eGjXjJxjVqBkdTpMfxJ",
  "key22": "cAZVuFcddvuCLPjHL92eyb6E5Vjw4SoES4643bu2EPUXJmbttXmRD25dzRTHzqtbbrgE3j9aQDUwFDfYofCYBMV",
  "key23": "4KorX85y2tXY5DNvG9KMexaGaRbhYKMX5uCcvPjtDCsCXq2c8AXaU2hVnNMg7cnyP1zVTPadkz7pqRNshafN65ab",
  "key24": "2NThrE5XowWyLgXLNypjNSDWbEjcnobuk4sHomf4knRNJZi1Pdub1tiMWgoHZHYyugQeNpfNRKStaRqNmKCXr3cs",
  "key25": "38vAWFisJ242cDdHcE7yQgjfDLyhwUZssdHwqMFRnPdY2T73GD9kei3PAx1D4QAaFPYBWB5D4iTTKboJnsH8sZam",
  "key26": "TURJJJFKTp9Uecbj8hPC62HUi3jPcAbQdtVjcUMiuXUzVZx8XdasYWjerRTarFk3fgQhVQWfQ4uUhbxGwVwNFx9",
  "key27": "54zSQPue8JSmbWGkBQ29jjQSjhW32M2Xstnae5vBLsa4ZxAxrQQAjoJqmxvQkgHL6GZpnD87BnMHaQuWyQsZtmtg",
  "key28": "5ewmdE4p17L7izeyKCjzELxtJvSJVF5ivaMj3W3G9qJHUERPD29cNZG6X4qe4D2AGjfpbZfCYLJwifLc5jmCgPbk",
  "key29": "s9nJ9qeDv21E8juAbPcKdLRdRRjt3ASnSonPEPwnPSJqfzh2B2wMAk4kdSxMz8EcP6EabaVUdJpdwLBGtM5EuxL",
  "key30": "44goDvkdWyLJgCdQBMCzq1hhXZKrKm3xPANeagLrRukh8thcUxf3zqHsHY8Ldd4XoAogrCqoUrzfnhgjGa336GkW",
  "key31": "4RbwFuPakJPRpY3de2HGQj3NE8jNXuLaxx2ko4Bcu3BZFmfMg5ZDTtsgPLsoB5vUTN9rkWoRxbuNecmnQntnDzu4",
  "key32": "CiSDFgZxubv3fKCQSNt4N6USjmggtynDtMNkSHvk5iwKzWJGbu6pAN1HuDWVJFWstg3CWcSpRXWXmYQnC2URJFA",
  "key33": "MppSAmRZwiXDqoi2BYc8gJ4pjJhLyJ5KV4kYe3WPAFKSVyLvhkapn317NZzioYxKrraQZfhzNSxoh92CX5AibbS",
  "key34": "63rSuMAryPHUsPABjd6u13KdNQPW1WzQJNgkPyxNbxe8WVzqbzuyQBMJPRd7r3tzfV1vwV1eNreSFPJkspoRVnDk",
  "key35": "5C1fdMervXoHLZy7WPbBLebhJsPdp7UnfwCPcNom9dMQMxcpFVM9hBLBZXkjoMLgsopjUxkBrbUoj6zbD6NQRCDv",
  "key36": "5jeUXMkLqfQ3J2KPs3pZmnCJeFMTAAwGsZQGmJ37Gypuct6AQ6YP34aRsqfPKW4ZdtaU6NoyAQaRvHdtTrHH3A6z",
  "key37": "2nRgoKAZucZDLKmc2arxeHAjvz2RVa8CZMFMDMo6z8sUn13ma7GRkQMP3HEZLxqc8pn3fsXcMdC14VTHewnJ4BWE",
  "key38": "hcG7JeJ3x6p9ExEJBFnHE6ziQHXBFpEjzVAjoEJ65VhDYDVjAucU5FonScHtrt7MqkZvTR8mZwg34TZYcaNqRch",
  "key39": "hoZveYDdukzB1UrMsEk9gBiAJaKzxwzAMnFz3RpVE5x1dGN1zjKzDEFonNSXq2NNJPZBYZQ8R9gjizFEy4uLWEa",
  "key40": "4bSYAgXyX7ZXGsYdKaEWuYvscrwU2jHMVNjfvo27khJoSA2s1yiX83wFtnswUmqQVaBinqh3wmkN8mq97okss6eZ",
  "key41": "oLBEDdpEMTBXqRWL8XtiT2vAL5wYMwhcgqD8KxWcYLcMPC3Pmixtss4CvGgsnFVzQFKd7WTffRvfiVoCADYcXDJ",
  "key42": "SYRwo5tZrVLgT2bpKWPKn7nLU5y9US1Xh3HmL7DYoWig1Kx6cAuVL1pthUqVZm98LJDewu6VUhmTqdRaLPPraR2",
  "key43": "5SA7Y276GKtHHTwn2i7Frik855GaXc5Jh6ZzqbBbr4Y62svQ1PLtqA1kdGxbtJoB8poPf3rCfCEVRbVGrXqUSVS4",
  "key44": "23k1FZxiPaN8gqeWyPa3vQFAoRhBgiStCeiTDWLWFnLuX5aMh7Zsv1Fq1f1vx9EHKhRL2xxqeBYoZuK7JsTtEwbK",
  "key45": "2sbKUwvkCP9QH4apzVcVhnYZarovhVi4ZBsJCAmNKKtBZKyXKHi9doF9NTizYeZTsocwrVkRHdDZoaKArCntuXXa",
  "key46": "37YU92Nuf7N8bP1dr1wQftH3rPZA63kq5hPLTaPUHurTGwQAw6tJerbF13PgVHcvQyT7fe8qadxCQwsDGKYCqymY"
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
