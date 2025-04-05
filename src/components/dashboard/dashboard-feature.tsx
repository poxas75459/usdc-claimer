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
    "5eVQkv51pLU2T7FKQgTRn7hbbyADYVb3okLVTL3EhaEMcVfjmXMkbAjg6SUNFxKLMZSCjDNvemYSzG72FqT6i6ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZ7oJxNRi9HwAQXVC9CFnYm6L6XWGKFDUJPh6BPoD1fx1c499KPdVrcy2m9hDDL2QsFtzSC75sZRgPPvvYiCFMD",
  "key1": "2yV9SuFezzbo4eQ7kckvRwSHskRRRJWTdtWaCzDPNS9EkyBUcXgmAuJTree7TcKyCS8EK5129xrkKG1P8eeSc7Rt",
  "key2": "3yefXbdcYwyKBRsnUYQ1B4i8uULychoetQj2g9tBWAhZQ3LjrZxUQv6DiGrnRHg97kwXFnxwoyEZwDXWENn3vLxf",
  "key3": "2rVkzKPGztjUcRh2BkDzw2fhGib6MmRvPGyVsnhBPQeABfBxosWn2aXiJu1qm92u6DkcqXn7EvsxtdiQ33fXPtPB",
  "key4": "5DMei2fiaMPTSaaT9J7sf84ajbcLrZKH9duN766mZpx7BhrTvfvwV3XNXnUggcuSYT7KJVKc5W4nNjgjBg6UG9jm",
  "key5": "5jQtrujXRJi2i5UEkxggwKwtfECwDuqGBq7UFuDCk7VKvkCnooH5zVr89mjhboXLxrB49kHwN94MmyfkPrQ2uFPQ",
  "key6": "4v3F2F6NTXrWwychTEGLrzsqhtgycniRX2yjtGR1iHPPBM2a5LhCpd4CPK2g37QzoEyHs6xkKNRZ9AWCyz5s6VqM",
  "key7": "5wqsvGh4DwgEXLvc6v2PpFsHbsQVcTi2iWP4f6zAHZLp5CmUeE66Tu2esaRXsympYuTzA4P7tu1dzpKnabzLDbWh",
  "key8": "4PGwMAV2ywuSi7bvuAdvyidYZoSWRUyJkzRteSUzaPBdJS9CevbHRehBVnPUa8J747ZpVQ6YVZpqPNjqYaVmebh7",
  "key9": "ZT6VTLi2EhyfJN3FmHd1V4ULYD8bgESaQs131bF2Mz8KyskoDL6m9eUp6s4m9PNeH8C8goEP7C1612X98oxt7Mq",
  "key10": "5Bbw4AwUWCECp613bwCnNaJiRy1hEKHXFi5bLPGG1MJNU5DKY4xRiNYWJmQ8bcXWy6XiR1ZtoyBxBiA377fkaoGK",
  "key11": "5iZKXCU5ZHur9b6TQLxF3CoSPDVW21b1fw8jpQTUQjzSsYjuPXoB18uV49xpmP4tKA7z9TAvLr8XTgwqhkMJ6hbP",
  "key12": "3sNeGfzepCPA3t82cnqdpSncoRLW8TgdBGwhZFnPwd6mBAV1Jb7j3tRrvHYQ4y41SDuFJKy2b7GLVJwdqnzZVnhE",
  "key13": "63uNVcj9z5eqVHtz3QbbyHuA8w1f6jLvaX4aoqPpG6hrYdb8mabbv1VWsHK2BqvtViz47AiTKa3RHFTcq56DdEst",
  "key14": "583VEYJbBmqCZ4Mx1deUaoeFcW7H1iCEpcJKRZiRJqFs1F4A3Rax4DFNpdSzQBub1J6RVaEJGRUnbARmx5vJpAXh",
  "key15": "3cC4SrAuCmbQdYocQ3Bp7yhcjL7TWouXikeAqyn2v6iRMdNWCQKnnSVhQp1kY77TY4FdRdjQwqikQRjGHkv89Cbe",
  "key16": "3vVjDUN9MAQgGggiS8WJ9L5KhqCq92iKYFwSqWBajhgAZrVhT5nBcT1n43AGLof5UiYePBKH5rnL8wUsW4A6mtqj",
  "key17": "3BMcUwhYcLzUzGCwRMgHHgto8Co3r1Su4bgzozFfEtAjvbkJP9YBro9ecCsYsoAF9oin7wJ7UCr8bR2jhDbBvv1e",
  "key18": "W7ttzmdYTM1ber1mzoevfRirNUxabcJq69G8sngWbm5QH676sV2qKHcrJaxuLXqHUKT4bCu56kwGAffQRMdN175",
  "key19": "3kCc45vdLLkxrz6ajHsEeWbSvGJWy5UwgNFqbJpXuyvxPvFpNPeKXv8948zAtkE4T8ayVCmCVhhpdjAuSQfoFBUK",
  "key20": "4qLMAkK6vuFzKiojsyju5jpGu89qN1WTZJWMcifTy9tUEqmCApriv74Q4eeZTvXgyBo82NpEqfuQ223hv5buKnBP",
  "key21": "36QSDVhGxQMaZhsHY9TpgNrJi5XD8cfzVHALuvNDWLtfXUimXiW618d6zF9z3tFBnZsoy37aYS2tLcqd6tBYBVQh",
  "key22": "2hkRZBPSgSiv4KovpyupjdM2qhwgZofezSZGs1aC1hKjCNqzqPBed4hVXpXUdNfMqQrsoucUFy3JWu7HAVVupW9B",
  "key23": "1LqePphHKDVYrfxbibBjqh7hn1tPtdbiHWMB9ycy6cayUQw7vLUJyYn53pZk5KZteth9hBPChPXrtxjxiZgo8vC",
  "key24": "2RqiYbcpXJBdBBN2RisUukzMqfKqsDhe5osomv7w5ee4FbT2jFN5Xntjk5G9ogi5sorfztQ1BNrhc7rXWULcL2hR",
  "key25": "6dud2Q15Mfzo8vYzy6cHF4dUADNw5PMT3RebBSDMpSFSL5x88TA39E6fNNaAh5qL8F7y8CtYFYTBAQ6DEjUp3gp",
  "key26": "yChQVUpxRXDqZXFB1YAgDSm2LzjKb2esKQvJ2bresJVAGqic7W9MxTrsheagnwMRqCqh4dG39fxcEEoRX5cFkAA",
  "key27": "2U7hBGJgyM1BhPndLXM3M5q3TqDY45qjFJZKJmzNhdfzVM8YiWcuWEzzbx7FRb7jCo3XL4QdEKCJQCegtcqo8B6o",
  "key28": "5METNXqWxDQM46V8ftWALTXHtM2iQoWHxZwLDQxtKZSh5ADYkKJLRcna1RJ77cXPkaZCKVHzodpEGndVoi1sfrmC",
  "key29": "47aH71rKgnDacojg3DD5ECazSCpddZXoGSdDZp5RpxvwrQMYTVRrkMHSmNfWibWftyebrDLTqHru7fzpHELFqzZ4",
  "key30": "4u8njQPBgHKCwNu747vyb4mAyZFfrtUZzEbecfMBXscmeL5q4JGRVg3zU5AjigzN4jPCkiLFASbJ5Ec7NqM5hrdf",
  "key31": "57T5Y6rHhUSzCo8CAxAWRmWDS6zrt7FE9kHgR49j2tfQHYRcx4yfx6fLJDc6nwUzpxsjHNiPbiiQqLaUfBJhdAVN",
  "key32": "2gzVRpQvPi2VhJnjRJQH4Lneomb6cnhp5ehNh4mKxGD8whSx9iWzwLU5Ny4YvrvZ78uxYSJnBvPNSGvtp7vbA6KN",
  "key33": "4S9z1LTNUmuEGFXvKXKTASYURQdMGCExERYbeumVaCM6xJXb64tncvQWHs1o4C4tQyvguYbyzgFjwZsGSirnsMJ2"
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
