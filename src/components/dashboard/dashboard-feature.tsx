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
    "2NLBLpXJZjNMEgzB5GyGQJPYKYiu8UiEC36SwSdHWfnVK6b5sVx2PopkjtfAZrmNHrtkSq8i6jxrE3TiSe7BWq4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFJcWPmdhyNPXka4bp1sdFWHUQDKAY2tdyubnUg1bsk1FZtJ87r2UmW6GNAz843cdPN4D5sUrkkRVpm1rkSVih5",
  "key1": "2TTUJeJ9n1Cyhch4w62tM5ApxynJxWwqgxNhcJushEUvP2BPXEHpJvgoPauzeCcynMAWYbU85WJuLXiDoe5Nu5HF",
  "key2": "3N1Nxg68TMkdXTt3F9cgQuF7uAPSyvnoVeQkrxbBk9tDTMmeP6T9khVQHk9o6iPTtph7RJEnw31J13vtgTn7o2Cy",
  "key3": "3DAK2Qz4qtAbd36mkZkEhNrbfaivVK16VNwD5K4DJ6kteo4pDguDsD1b7z2CYLrPFhWJSe4ZSrtHT2n5GzCapa9z",
  "key4": "3ozADZVbzSUA5Z5MKRMBcx2PxALK1mdiJMQe59eLb196wDesSR9TKYzFBBhPq8A7BNgjx9nXRyYQW9YDG7Pd5RVV",
  "key5": "TmgsWvaqoz5CApoULAsraZDo5wchvxRwYafReeEtJ3zd7SqraAFV2ckwB3huZw5Mjdig5y66kH3YNrR567GktJU",
  "key6": "5f5XRTe7vxhKXDqU9MX6E3ZzeBf3YHT3ZsowBUVGc7Jq8et4h64p7drGjPMhZhW6gCAwDG2pp4h6Xt9qTZ2SuLbK",
  "key7": "2epuaKCtAy1hbtSZtEmmW8XJxbBox2QbvjZewT7scjVJEUdqeCwWEYZdQCcoLmQ4x4gzR7zY5zFB8fEdUytC1MCr",
  "key8": "4iqSewUvM9WFVckC96uLFQ5hp1QcJWLfCTamHpGoUrHqyZZnqBAB8JPjdKVzPRWwMA6BaqyDPMghufpm7hkReLi6",
  "key9": "2Q3F2TY5qkbHJfU5Ga6UzMenzZpjZopKPRejUMFCUcvFw6vH37DYopCNBTafaoYqfzKMP43hA83wEdNsBCP91PaN",
  "key10": "41vSHnKSinY5cnQoeYBQyBZBxsXj3RFmn5v9GMUdgCQd7SPaHbwJmyQE5ymsLitgkCE3zR3pbcsYPb75e7uGXCmE",
  "key11": "2QFHB4oGpagFNRDzdCpGWrwa7qdKyXezPFbkSP8C7Vn3Cbr4myRvktFmKHkLULX9b6zL7KN3d9GDqt9RS9rdRiH3",
  "key12": "4rUUuBnvW5D4fGDnByMUs9jUK47PVtVZZV2kBqfGfoNAe6VQRBSxCwfP44xELowZZcXkCacpo7qcW3Jt2bhQmEZ9",
  "key13": "5xFQzm534EUBsro34qxjrnxfdtysQVHFDumyzb8BN17A4ZgkLKL3qZuYaGsHWtN8Jdiwwwyekinias1vQZanqk1V",
  "key14": "55qRH4hsjsgqDzpx1yCE6vJtPuSsywnEEEjbdosZABm53cNJefcU5jtef5A2UqPDxvTMAx81YNAeCywoWci5bKhW",
  "key15": "3JpGLqQqQ4D4xNwzFp7u2w7VsBynFToUx16yMVYp52Di58R5NvPFMvz9gaL1vm6NZ9oUth9YAfjjUYVtk97yuZSr",
  "key16": "4FdsJ4SHAhbVd5iT8iEBfNt3UgAYqGVKUgVHaukpQM98stBQVjndvXtTzYwCMvWGhNAu1AU893EfGQ1QbdHmMPKt",
  "key17": "4a8HmP7Hy54woK7EAB74mngPkR47uUfg7rHXRQnW3h45xAUVABAxYaz1cxcTFwQJKqwEdzQ6ztUfqX8PyqMzB8Pf",
  "key18": "3yrFaikB7q1FZbu94FhJ27TjmkDooypz1kpg4fcBwV6wk4keA3wANNLqvxfvPdDBZ8gYQ72dEXvXkGLnDM3SxUTU",
  "key19": "Jgq18VcoXUWpoZWRwLYg8Txg8RStR1FshHok7qgnZcBBgSmPYsMCqyV2bS2W6og5LpE4sdBB9QzFZWLDoyqMtHw",
  "key20": "LGA4cAWc2KX8ZCHQh5Wtbz8Fu1t8FT75StkZuk6kjBj9bBh26m5EvmaYRnXQ6azPdRHG5CdUxjRdP63T1f3gWvk",
  "key21": "4PtX3e8ApoBRVvgYwiXhAonW26GSatjufKoxvWQ4puAobjbVS34LQKubAYp4b363JA3VvkYKGYEYprR7GT45UuMg",
  "key22": "5uEE8Fkbhs72GRXo33Qn9NVFEUeg1LAZoBZX8RbgePYgg1geCb7BUeXaerecf8JYfx2pnqUexgR8ZzPBPXaTYxVn",
  "key23": "5sFuMb9w1DjqkEyAZJFUQwcVSwrd3JfFy9TSSLKGtYbTyaEo7Z4BnZXTLswZC4kZwBYjpfhExrLGBkakh93XSQWy",
  "key24": "2mEbrspbwiQyVye6LqzyW36efV8psThPMJ1ZwuittGev5CZvvWNnYmgkcgtu63a4sY2UkGD7y5DkK19AAmK42xEX",
  "key25": "2JZGP8tLf5iJZMKYdBBg3tv1M2ww3NXY5fJ552mnux97yPiRpXBgAzj5yRGbySgFFGkwUjfZdw5Zyijmgx4YNAeX",
  "key26": "5XJjGqwrAhoeHS8FyPx9gzJ49HP2MbUkTYoEwWfQnyULgXXCW9Xo8deZ7oHFuRuhpy3fiTcFgBBtSPhTgh58dRrU",
  "key27": "5geVKkziXuJwKzZxRCyGntHm4FDYDwjK6zGUUBfb2E5wrLvekLoQDezgWhvPDYXHHLb9VbH4C2xbjHcyRQMDLV8Y",
  "key28": "4vYsD5zg7mUEzjC4LpmXddGazEUk54N5VFKC2j1cBBcXD3YX7ZEgxb1svoqWvDyG4JtkoSQoSgzRjj8DUzubDfaf"
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
