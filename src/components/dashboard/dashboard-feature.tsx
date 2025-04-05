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
    "5RQw177r4rWWS5gbDF46ckVBeo5hrURaBjLDKWGFKWXvybFmsmzAKjXnqHt6T8WuT6aqRyQY37gubHsepXEcd326"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AucZe5exBA6phDh1ZqYSmpMXFgCf8M1NGG8gSrmAzKR9pvHKKFWCNezZWAqPxtg6n8hanefwEn6eXmKXuLA2BQH",
  "key1": "UUWmvEwvc3yVW5yocS8AeCSw3inuQSWBVD78YedRJeTS5waueKrYqb1ag3YuGDuf85g5LJJHwdBWAhqpEweJhsR",
  "key2": "G6rBsogwhDM6uzEne3nuGGdTsvQ6Y5PgKg6cxwCDiXgwrjSSyvzzpj9UNAKsrYLVxmGhL3QhFu68dfbgyjv7xm5",
  "key3": "qwW1oRzwJLWad3nEQmRTBwfEzt37FgeoZj2wWtr3FweR5f1iobAXVCfesApYgiYUKFT1f2Qfhiw6TvXYAqAz84j",
  "key4": "5BqbyqrHwPcfvbFHCiELSnaivsCsNNqG1jRoQmP9hjUbUeHDQyEucFJfnZtwvrvEqwd6nyzYCnUqMeNpBcQa6FYw",
  "key5": "4LfEMbtwEL9BizMB3m8QuJozBLjaoyyxGLbEERDHvqn6frVyZR8M8NdVauwTpM4k85mDrZzxj7Fd2Rof5YLs7LS3",
  "key6": "5GsdJqdt8TPTuBHJ9LmPMS8qKCnkMxU6FnGjVkwTiQx6RiKmAPro9wFYFFkCSzfEcCXZGPZdHVFGbF1DB5wApdkb",
  "key7": "J1psK4cfNC4LXhH3DMY1Tx6tsbjWif1JhwZgtPTSFBMRvpdeFdPTQByY8ZUqt866k7bcib3Wihe2Yb59ZTMqhHr",
  "key8": "4nGGubu2JY5p92qtQz839MGWcwxmYcEpyMtVGpU6fDEihpzzPruStYCUTaPHbKfmXBN4gX26m2mbFKPj4Jgs8hj4",
  "key9": "5hjRreA6iVyjndCiruDotHwZ6MGpd1DAtWQ4JRCiqSic6kMj12y9FzzG49HewnBxHUJkjdX9qYFY7osmgDgkdkWE",
  "key10": "3TmRWa87BoFxVojND7F456Nd4wGAcGVHmbsUFqo31mBPxJ6byvJ9cC3vycszEZFfmq5iqXNK9E9yVcBwfS4GBd1N",
  "key11": "4wQk9TkcPqp42jbxtMLTBu129TThh5c1jWDepVxmZpvnuEmt6bX8ENBvQ6p7nZmyNnMH2uPCHK7r5LD27wioF6zQ",
  "key12": "v2FDmz4WBXxW1KFkTkb3eQWDXrN6orPqiBsWqjE7HmieS3QmYb32nVncGoMdJ32DSFm6piZGxZmugPhS6kjBdAZ",
  "key13": "4Wm6XG5xX1u1ZPBugkLTXsUMD1TEaaCBnYrfPfFYakNsNDZPuvC4Ch2DyMgKLrDhcX7nV5p1VC1NtgUZZVv3W1ZK",
  "key14": "4Nr6CfDLZW2QfDx9bz41ZNzsfyGiLGcMpntxhn6gtcnf2a1k2kD3cXDzhxLFFJNsBriStDR4JPXmBmyid25AUbbs",
  "key15": "3eHyUxR6BqjVGuNLv8EZBPYUF3fmKXU25xYaaJmgBBRNFaRqgTMepa7UqE4AtAmPaHDUDEUkUmwvwRQEQ3BMxZHb",
  "key16": "5KHAbhkja6DYHFsqeCyEcsjLjNaKpCYJrNV4DPj71x1h6iikbU4qmyJutvJ8TYhxAUrhGaXhaSCbqvFzQSXY8GAB",
  "key17": "4cy1YC6sRE7n9msJdYYkiU25LTghgzHFg1jPPUYzDYhhkvMCZNLPwYgzydqDyWgJgakSyxR9HCnv3aGJ377oM9Fm",
  "key18": "4GpW5jtToRhLwJ8THGx2i4jamRNCMYrFgdpry824CYxr9bKSG8zZTuqr6BmP7qYz5zk5do1V3FB3Wfs8sXHNXHHu",
  "key19": "5Jjy96sxPWtkuKuQnD64uBJP76bv2K1SrDBRMh1HvvrqTQFe72k6UrqMKVcS9gcMKTMBHRPmiXWFdGEYSqg65rX5",
  "key20": "mb73ibuExhgi3mWqEznVhdsqxbNDXmoHekUMVvktLpyKdkBAAxg8zpU4SQ1JtGKiNFW4EAEhv2XfjHDrqr5cG6v",
  "key21": "dPr8VSgtPCa7HNQvexFE8SB4AFpPHBhtvvrXSoGBHfSQcJUiXHpJ2CkpDLBQXiLPsDAt4jVhe8sv2cNnAj4m4SX",
  "key22": "kMw3kD8Ex6HdrYxrefaVtWxN4e466ALwQoQkhRUafttXvDXVLMxHmemMwsbo65AQztqRQcHMyhXTjZgKAEg7LaK",
  "key23": "41JPSA84GMfH4iRRMbV37ArJJxUsnCbchHfa8fvCxfqY96t7azjyeB2A3pJb8QcuB2U8Mya5NGd9Y7YFCkBpLxiM",
  "key24": "4NPGeFHmZskiV2FCP6h6WBGFgAntQVWfjyGvGrKWycLcwN2argRkSfQqjevBh1F7QHQhgjfqHHFmBouaXq2XPFz4",
  "key25": "d9eeNPfXLeXKgxN9SgbE6qni9vPPBmYxv3gPR6VAaBAZP6bKvQA8mPi7A3VTNhj4ZGvqmnHTdGuWSnLPzP55z2M",
  "key26": "3qXn3ZwMg6XA8VEwbpHFWR2SBxJAenCTpUG3XoAQRjHrdJr3baS7kyZmUsM3m9jEJWQmKhWHvnJc7paeG5siqXTn",
  "key27": "395FVePhLWkhaCFd9tPhaSL4VaBwbcWC3D7kwSBG3uEPupDE8sottUn61TcQfaX13UJjGrDq4pTQuE4sCWjcX65P",
  "key28": "4cVApcshsSLivuGEZ9WnLTVeuhZfv9VvH69BKTCaEByMhefGWYt2tZTsM88kdAgWwLhPm3baACXiw3XiPCFtMxGJ",
  "key29": "5AERqJf4nCLeKYbZHJG3hZ1C6aGa52ZvKPq9MVAN2V6F7gwDrxwqFEFKdK9cZ4cboc42dDxSHnoHMYHTvZyY4MYK"
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
