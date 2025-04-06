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
    "5K9eF83nYrseS8D3yDdYaWVtHa9SxYkqBY9gRgr6fLr7xL2KcDD6peMPeviVVuVaiYkQUoXxKSEWtPpBwPcyMkoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279WosHyBUsLLBY126LndFvATvk1xmR5k5MDUfRsrqkmHaoCXF7CFVZ7mX9tyVQvMZBZm3hpEJqxsGqCuwsb5zdF",
  "key1": "62g74ABNZw8RKz1AYF7mLucLzuYUgQNPhCZPeCL7dSG2C4RsBGX1VevU6ea6kDjm9RNfDvYNN7jsktq16avvWrtC",
  "key2": "z9pZ9aNHjabcGi4Zt6vdSNKqMyxeCMyf7gb4BkHNnC9qPjB85QUXhqoXbENNYSGjoqeGUzmzw5ZGzsvdgEaESWV",
  "key3": "3CmvhBxnX42ZsFM5Fhb5qhZ8R5PYDFKbP3zeoLhxoGP3mue7aXLCzenWje9HdjSSGLomZCyf2cbeLEtjstccVExu",
  "key4": "5PoeowRTNtyYiCAeA5Vkz7kE2UJBBF8GY1ttHQc435v11TQhUQ9FBGM9fbbZkPW7imtyU4LoEzDuMi8dmJFXVvgi",
  "key5": "3aj2SZuD1i8hSPpSxypUaijdtGcJYubWS7nsFRJ7pktebviWsVQPrTSdbkUPKBSyrP3oz7J1P75nsRqT6sVJJPUm",
  "key6": "5FxCsuyqGUxe8TRCr1kBdQ36ZFAPpPSDnwPMCqMt1HR7eTNwRF6Fvpt5AnXPCDaHbFAGR13SYhDqxWt83AyMTJmG",
  "key7": "2Z1FnzTnci7c4Bm6o9F3CiRDwVyH85YHcNi9Z7G9BdKccA2FE6M3keLWtj5dcXvhyo3iuAmdiia71eZSfpSgxbeL",
  "key8": "2LdLztV6adsnvQFVodNmX5fiFcHUACxNZSiK3K57Peq6EnS36Zr4oDtUeWzCwvmbJeSrCVxXKMY2FSxB8y68h9Ls",
  "key9": "CZorEufvr9LCh1Hy2K2YtENQpno7JY1Mv3GYssAJBSfPTAeaP2FVEy3RLoKcM4xzHZR2BK2DBj39xpgMGUegg1A",
  "key10": "4Y9RzUbkud4rPJ8MnLLXJ9veopKvSjDMCrn2DNV1HDqY2iVRvRM3mZ8woRM4DnU7BoYbWkBXsasxCBYHcFiEUBcD",
  "key11": "4Q4iQCK9mA1E46XGp9k3v7xbv7abxb4NSf4ttSnhzzmTYJE59dBuDHjJWDWytNGdJfMP1CrpyjDbwWQL8mT9Zymy",
  "key12": "3gJGteN2VuVcSZkmfVHMF7u2kqn3MEV2MGNv9VJPYQmFCsa5ZF8BCgKib7SpbtQYFyz1kXxNR6GQ9FsKd8VFq1gD",
  "key13": "2KDG5chZBSHt3AcgNbQSRopEZicRBfqePvbBUJtMKnA2xfYuwrq4CWtiNz9YuY2EmrycVZeMRdtMUs2v1C4HLZab",
  "key14": "3bxSxrZkSExn6pcaSFsJkYk8dZyRogZASU86pP7rjMPfDh2r14N59swHKb6xWHvyB82KuCXscgNCqwRBL6JrDHL3",
  "key15": "67SEXNqUdbDrU6yipqhKinLzSBjoZvzDiZYYBymkPg9RaxNdBthBL9W9puUvF6NQbim2joxwieiVimugHX3pqN4s",
  "key16": "2dbHVH1juJfb1PgrbrNphwuWQjSs3MAECB6uScrAxJJ6xJyXeRYys2oVkPP86tY7ocTU79Tg736Vh5XP6LPCXipr",
  "key17": "5ESxkv5KeYb3E2hwU3xxSAyyTjLQ8tAMtYseqNhVtwMP6mDBBvjFgHa5NCFSJmiYejyrpybZbdkDGeEh99sHtQgF",
  "key18": "4bEVhpaUYm8vALMXcT3qdS5eXYNJ4inrYk4Lb6N7Fv2Nj6rzpo17nWxy1wa57oPqTqhNTAdbz9XeKhPaoqt2akNa",
  "key19": "3ip69VvDZJacC8FBaEehaLPSrVZArdUQNtBMfAZVnQhyQrwxokpBNM5kbBEb2SMptbd3qhkvnipPJ2YhSYTfPMYn",
  "key20": "2ZwJFZ9TCVDdeo4UKCtAe8t6BqWcbWRRkV6ZmhP3Cwva7HeqwtNxE5TJQUZkhimPiA9oRvyyhyKR6hyEgCDhuMj",
  "key21": "4FgFGkEkYPQBYakvmfN8hrJJ6kHnE3CatxzcE8SQzxQTers6FnGZYZyLARgLLidrJc1jQKHetSasZwd4uyY3DyTW",
  "key22": "3CSEyKQs7Pf4g7CgTN5DpwHTAURTYCbNtLKUCc1t6yv5XitjGYkCGWwJdqGRBn9KpCPkfMbQkzMQWF238Ba7uV4o",
  "key23": "3GUG1QqukRAoArnVVvTVigqk3sdNhkNhEpyTsKPdiZnKWck7yHmTPkTEmTZ26kAFQTp9gVaSYExm4Wk7BWWw8FC9",
  "key24": "43VpgDmi39CJ5Xpys5W72tCYFH8ULrUWSu9T9iiHrWxLK71ufbu1UVpduSbt452RRM7sdAqrkPSUNy5XzeoTYh8G",
  "key25": "KdhvE8zqQroZ4nYd55SJhtauRULzfWkCDSeyjdPMRxgd8QSJ7Z3uJqBFx5Qgm8KoBSSE3juLF2ZULM6duXpoQfg",
  "key26": "4ew8w5EJbSxvzi5UKPPXRvtr9erQ9h4JKkXgP1EHxXH6VYB4A9QF2XaoHABWRLqPQDtezHEtjxXL1cNUEFC69Aa5",
  "key27": "s7qEDdwdo2wuvJL7PaG4sd3sr1cnZGX9L6KdG8fZYCZ2HkWHGNCRjt9M625DcbBzWZQXDGV5rKdc2dN1dJZBc4C",
  "key28": "PJFVNLnkE85LE5Gpb7mr3ioAvpCAcL6oEzPuaqicWKCEC8EFSLXu7wRxPMFKzVt9RC8ywaENjruRXqLBdvtcW7d",
  "key29": "63AAsNYBYpBnb6YknsuTDEaef4eP2cZqCcmqj8cootCFJ7gAR1QQMMy5RJ7nenmZAmKNz3B83FjsEHMxPQR5yDDi",
  "key30": "3Uu5FnqPemvQTKEBW667RwsVCwsABVLKwxktqvpXyU8R3yPiA5U6zcxF65XU93CqTgmMPfd4QRyrFY5daGKX6fg",
  "key31": "5k5NfhCEgjS7jVKkTLGH95tEwmacT3sbaCy3aAkDXXYHufEq4qWvF2uHde7fwwSFz2mpay4dHLReTyc9Pz2byf2f",
  "key32": "4pUCx4FCWgPskQ2mbRJ7YD7UJedAmSVKZXLf2BrVFGchoogEwzvybf7d4HpRcUwtdJDkcQChf3TUbtbSxBtJbQyS",
  "key33": "5EEDxEWJqa7juDHkKcTXme1mkiJtKo33DwpKtwLvS6vrLjdyfye9KJ7QoEWogPHZz8fzSUmWBToWWN9D3z4W54V6",
  "key34": "54LND2DStxQfotPD1oFMcSDbAhGW6phgrhFF5AbxReKwKJ1KMTDdsMh7bTxEN5TUTta39AF71ET7k2Ni4DGMNY3n"
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
