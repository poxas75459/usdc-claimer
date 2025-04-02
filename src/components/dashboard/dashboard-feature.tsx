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
    "B4BqWjg8JfMk1x6MizS7AWqBZbxcNUbwt1do44bv7qcWVYYGdtt3NFHJxQonnEX2oLJHuTKhJdAmXTQG8dYa4EP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yc6igkLTgAx74s6rtSpSnwm5Wp8u4GNbNNZk6phjubRifJdRkiZW1DBYs58LvMHQ8VP2QU1vmUSjQh8LpiC6WkC",
  "key1": "2yQ7WTQ9KgfNUgMB2vfDAPkJd6e8arAPSUWsNPi1bdvrJNnetBu78En54mp1iwgh8CTTvXwYNyBN5oYXJxmHXewU",
  "key2": "2NQR6Th71wUEYmxbS8ZpL4q3z6M7p9rQmm14hWamtiat6yhej6sfUZdA5zKV1pV86UVQqSaB2bjhh94QUT3Ecu6B",
  "key3": "2jdFUJsKRJfsQ4k1gFW9nyq7pXZTo8zsPR3JfN7qkysxfa1zVUKTMBE9cT3zqpM8b3feXh8csTqyCFbwwbmY1LjK",
  "key4": "3opzBehQaiCcyVdAejE1wKgQqFaeqMmqWjTe9Y7Ln2aWk1vZdi883nNR8Q2YXF6DuxkPigLqgBWm3fUxBKQZvvvp",
  "key5": "3Mf55NfoTS39tV4eu11PEDtMYLKTUb5aMqJAk6wgBsDHignmgr1p5gnJ2nbZkHgGicShdF6E9xdKdavyhJAfGu2P",
  "key6": "25aFFShSwY6Bef796F4AVS4JSvn6P6KmdPvA5ijDUzcrt9WCDE5YBhvqCLU58pMx4DNr9pZS6rAVZTdwqdF8Qz1C",
  "key7": "3Mq6mA2JiAm8mKiJd6jnH8CnAuDxizAYJwHDSZyt2v3Cuxu6GX8k7X4mX9whk8zKxWjoMG21HKMaX4gMM8khbXDn",
  "key8": "3WfCNFjMBuUGtE1TmsnTWTvTQdQL78e5EWhCvXNvxQcDBJuhHobXXh4s2JRKsgWVDu2gmTckfBaFCneCu9HbrKK1",
  "key9": "24QPSzhSxnyJspm6NLnUX4Hy9x6kLS7SWvqox9qptqLcdZPqSeMaoh5qsnQLSrwXCYjTKFyvQQ2nsYSL9JfL5n3D",
  "key10": "3tvYwnRYQHAAFj5mtaNB8ouCmS9tbxbsFBJBTK7jD6QM82rJcDcqyTz9D2YmoD4zLPcNxWwpTY21f4JNEdkJg9om",
  "key11": "8czExPhr9LZZsVtRyNBJ3XUXCMshgtgXJVuWAo81uxNsbpawiGpK1bQVnzaeS3KfYr4v1Lh2fouAvzTpbX8k8Lt",
  "key12": "3s8frZUpPePZxYdvf6uMVHFSdRM7MsNMJPSNLtLJD9A9Roxzs9kk1Ld6xRPCMjKfMy6y4DioczvwcmpnRMfhR7JS",
  "key13": "2p4ruDWjLBchj4gEc6m4UVazHcCsxTERT1S3fcAHde3XXgWfp6aK5Gcps2fUxUU93i8wryuVjQJuoUDwpE8Emsyb",
  "key14": "464kc1iuMb3cYnuBSLxUN3cdx3ZDP8aV14PGmE9mnbd9DmUZ8ZaquHLN1J4tmziSmja3jEZRZmUxJBtzsfPZgnhv",
  "key15": "3mnUjzkisdsU4kD7b7qPQKFDcZrFjYw5nQxW3Aevh9GvxYBCNyydcD9crTU4pWEmYy8zpAbycVoaciYSvjpAdM8L",
  "key16": "3XuvXaw3SZavtX6YfvPcrv91aHEXP682VXv2ozs9xcxnekUMfduJNNg8ETBZMhacrUjUmwNtearAP4RqJARyx4hd",
  "key17": "46BqvBJL9KFPvpoytNpmNrpMAcck7KAkA2C4Lz6tt9d8FijwquVw91ChPLC8zZxPKFPZwsrXRBUSG98HGr8Qy6m4",
  "key18": "53HAVXbCy1jFDeqz5xwb2dzjoMBfTnZJ7hGt6i8p5CND89N2GhJARWfygD25JeDqwXnKzEZsn5GxZtMoQEs8tFe9",
  "key19": "5e1UuteFq5sYWQrt27A6Db9FD4ttStWAZoHS5RcS4qruzWF3qbiLLLX4HiSrRUnCoWxCUhFrVKDjn8mTi3tfFZbh",
  "key20": "29cqYJXjrCo7gsczoFn75RqGu1cFnd8wxqdACrTC9FZwEXD6ECCCwX3bqasf4Cunnky8gdPANiReLsQoK8gpdJ3a",
  "key21": "5ab9Ep1g1JjBYuFqti8RSLEL6fk7nNKmCemAnMArZ7gQ9qQfGeWjU5woooYp634C5wupSqX5LSK58nzjveHWyfTQ",
  "key22": "2S9dVyPTvDAUkGhKEvzeTtHDaCnQQxCnBUUP1J43bQ4Z1ofLZXNEMSDtbat5E2xaMWzKVDKgJduK1MsojXFbpzCV",
  "key23": "5GMZrdB5mBYiFthsNVxmPYmzeWiCsQ9g2sSUHn1hR2AmUX3R7JqRp8wC8nRz5yAffQ4JDqRk6ReNx27Z5uSy69kV",
  "key24": "Gg1LS4VVjM2Me5VLUyPhYhM5gj6QhQL5CXuXVCe7VhxpMHwE9VXDuwYHFJJ4NUE3y71HwF9ENpm98shVAQHubeu",
  "key25": "611mfhE2tmGMWbXMJJwHwJRJQ9VpFeDbvQSeeaxafDTiftZRmXycjfDiJzWHiuQwkHDaeN4W1RbKheYkypWuVMSK",
  "key26": "4JgmD2eT9AQpuXZuanwhyNmKjqcQTjbJRv1QUPnTV3QBg4FgeEFJSFaEvbxD8rvHs6vy9FGteZ1Uecd9Lmry5crm",
  "key27": "3APpreoyzmxSGAzsdaZij1Lt78ndYACUZ7mAoqwmFwojSLZZSuZfFNwsRkhNTURpuY3snmYZHJzLyBWX1wCxpJfF",
  "key28": "5yjQHMf2DD8nKVWuPiJNcATapoud8kRqBr32xuwNtu8mbYC9jp1e4jj7AUk3hqU3dLBnBS4d97VnDhfgzbB4EKbJ",
  "key29": "2YVKg1YFiF52EpKPmSkLPMQnopM36WdRfm4AP9e4QdwmUvFdrENuJ571cKUGp9ZcxBeNNBYAkuSpsLLGW3JEcSaw",
  "key30": "3ZXUUgvonxAkuGGH9NKsQLksTfhAesstpEMPeCaFjqDSwBteoNyeSoad1SYSRLVDgLJaWF7ymHApohSDcoquHngF",
  "key31": "3aYfEDyKhtMWbGMUwBWggXZYMBzdC7FaWm9E2pxm4jSUZtzRtEva47JDBNdUezRohJUoPENDUXV8kDDGFPtbvfHE",
  "key32": "63vZrU2FmMrB6TZ9v27qa6RuGTY8g3dsCgkn5MEn6fQv91dGnH4HzY7dd8BiWFPkLPT1Gjk6KDv4xkTsS41tA869"
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
