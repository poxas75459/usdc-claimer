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
    "B6xQGssvBJXFb77ghV1zZ3Revps12QTdFD425Us243B9YAe4KAeZr5gARAqqEpq9xQonBpvoUC2wfZeqDE8scss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNb3P7upAWSfepBL4yhSfhbugjaYHUF5qsDXr9wZUMsaWcUC5DRQ5Sx8yYo2yBq6nrhxw7Eucx5qQLi5MzXFAMi",
  "key1": "4V4y8xymyrUihRz9f4coqDQhfjWj8nrehazyXK2CDw3G1qNQZk7ZdBjQJJzpfuRoHSx2v19hrFa1QkH7swd2NQi8",
  "key2": "5V8tZu7jMnRJeigAdEjnTDSEcJfPcemwENqC5SDkTd2hXWVzrjSTR4otpr26N3SipeTxB39X14tQ1XbMb65v3KCV",
  "key3": "4Wmq2Uv58XELXaDSNzEPsKUQoy2KdUCVT2HNZ1pTX9fRtisekjn5UwUJfjYeU6vfydj122zSEgHEXvha2fhCEZNj",
  "key4": "5YLto62FfcbnsU9EoZcCW6tCpmfzjqsCBskoQL4pZBTL5h396sQdTGb5X41L6sSeDaMr95AosVZ7uHqCZTDx6dEt",
  "key5": "bpvswduuxQu85gssB2sn4MtnH6GnGrmuW6fAK1MrpDszmnvRf7itZp5Zz1GUMw7FzRDTofPGuhEvppEtNeJ9GcG",
  "key6": "55aWFzTdxAr5kbXn9iCJhPZnGyNLdBVLUAfrUPMEj55YkpecN1tWNjPyjHQKVNMPgGXn7spdN5TNFUpCfvwab9eE",
  "key7": "295BMqmtA37Qm212FhbWGpci3NE13SabwD6Y4YGW1a5cU4HUNNkikVd6ppiF1p7J1cdznp8WR8xkBChBX2Uba3G6",
  "key8": "8eFTC1j6xU5VA7xw4wyYmqrKLn82WPZq3dx2XwfoJK86e1AvQzw9N8gQVpvx7nETsM8z7VqVTB8wnNyuUWidQ6i",
  "key9": "4jznEExU38BspRZX9zBpoPct46vCYi41B16tFc6pyj3x8Bv4XsHtmGQSrGLFaam3LhAvGnzn68epoPsVmJUWCDVE",
  "key10": "35QMpTfypRMiLTcgYPuwGxn1gGNdMNbAaaBU5GsnJdUCq3J4cFQ4rC1vKwoV79UHupGhCNAeBqKVkGVbuZrdkdAA",
  "key11": "5fTPo361ohLXvsVNrFfwzk9RG6v7LCSYntZEiC5Ad4NPSPmiN2BP59T9MmCdz1iXsXTWv4Mw8BapK48p2GCi1RSP",
  "key12": "dLWT1BCve3Hg8a2x7uP8vnMM8eGmcvd3LcoPidB2RdVezJiprasbNVuP2e1DiQQa6iuqa3oNdDEiLrGoPCbaqdJ",
  "key13": "1aVyGq5fj1tnza4Ets9RLQiivCukvtTdkPnLy7PyUtH1FpyEk62FHjp8j5Vagnsn2dz9PmmDrm3PyPZ1cbF7nRP",
  "key14": "4c2GGwBRQLhUSwRT4jt4eXg3SqYUGQvXHv1XRoPXQ1Q32V8s3BAosMHY2NyZ6vZ9BzpHvUCK6FqUG6orkMcMz7Jz",
  "key15": "2ciPcNYwBAAtY2RnJhWXY5kqzKdZWD7RErK7c6VatajBFQtKRPZknvu3a3dP5av6545gabftn4aTGwSRZFGiAEBb",
  "key16": "49HxA3GXHzJwQ69EWHAo26Y9BNDNGjPMN6agZ8JFxPuZP1uVSBBMqrZy2spfYQm7Z8NNXpufF3VLJryQzqtDN21Q",
  "key17": "43WGvnfgWHoNE5p2RYvBBuh4KzZEEBELqzdCuKq9KnbSqVJsuGrJHNTL3Rt9utHX7m6YHnCHFNFaFp4jnjF8RwRq",
  "key18": "2kNtLSWnjFAir5SYf9di6m4EXMxMEWSFpq7tg5doHt7Jcbzysrs46N2YeWmyKthnq5AfhMTYY5NwkbXDSuZETEwY",
  "key19": "24961RfyDSHoAvHETNX9wqojNqZtQRJZWnAzY5ztNZKzHDAhZCvQHjnFjvS78mRBJEZGSL5hzZdGQnhg8j7pzLsc",
  "key20": "5tZ1R3rBEqgWXrVhBLmvSNSdFmNW9xfkvVrfsKHQNxsWKiDAoPCoSiQCLi9i32c5PV9yFEq92G2bxvEccT59M2nC",
  "key21": "3BZ3RhGzeCV6YxiCEA2z7sJPqjVdisDzeLivSkaVhE3W4XBj5HVnzACN75B8c3HirgQuFtqS73LyYNJhd8fxYVdg",
  "key22": "2JtTfYWQtyaTRRH8PB176F3b5iMVKfxu2758B9T8m1R4bgVQtidQMkmH1YiS8jbvfxi8X9Dt59ZM4j9tmr41A8Qn",
  "key23": "4zTXTtv3d9MjA7gcTdCjN9e3rrQQfKRQ3MpU8burCPJ2DQ2XeXrArys9Jo2nvPFj9zJVECD4QhFLbuHpTuhyxUP9",
  "key24": "2tiBKrs5XAGFKCx5skHs4jktvixsWyjyxSD3mNj9VHscMwfJSFzApYZjbhLCmqA653b3uPBQXfbAjKDL8FJ7gQTj",
  "key25": "5vQiYj6yaaxHL8nywidcym6veVoMyrFMijRN8SnhSjj429ARvEBVUwxt1HLFuQjpKrgb6Ht9Sd5ZE7pwVfYG3HEW",
  "key26": "hn8ywjogMrB8Vwce5ZkJof52amG5x6LNfMNZb5XzymKE8rEXuPXDyQWqR5b7PbPwbCbZeRrn5HBaTpN9GNWRhJW",
  "key27": "4nX2dz4bgTK7XVqYjp8oiBvgxBbYC6mTBvWj3sF5brUq2gBcT3AJG9K1rXJLRJMRVXosQnuBo9dUPfmehM6dPfvX",
  "key28": "5PFEr83p13p9vcW4MY2pCWzFnm9ccuUnuzdQhskJJefUs4TeqRaiGeQr5R6GfiXXAwUhm4c7TihrGhzUQYNmSV7H",
  "key29": "29ynZoX5mJLtV8oHuukP64drYSKQ8LBNdjpyWeD1QzjHWQjhaiATbduuXK8ZYcHeqvTxLqDsUp7XkvcchEvp44CK",
  "key30": "2SHipAK3Yt2PqS7ywn1EmhchmPTFnVYbrsTTFeTboT2fhCMyCDBXEzUx43mnq91ZDYfkrBK1tnA64w9uuJDdwuvk",
  "key31": "33FVx2BiMekqqBV1NvKpmMNNWyT1NwHSjATgJM4Yg8XrCobwKr3y8VcqYgFYqZ9DCDjUoTF9yGjBz9ahWJZzgkpY",
  "key32": "56TD31uf4uC7rpDSddVLmSgyYEXsyArpVSStLBSTa6maxbsQv31xhbY4ji9TRUzhHSb5VCkQSxA7MqsQgnLHx9J5",
  "key33": "5QenRhnucnhMTp3uv88PD2Npte7EPp3U7ueUwbN9BxHMeKtGQ2LBdNxmjx1sE9o9RyAGZS29uuQTW9d1Ju1MDSuT",
  "key34": "wSsgZSZRsgT2XUZvwoVGzbVCZ7CFrkS3CWQzjKWF3QV9L9FQ9iZUfXsYUugEH7csGj7b1wT7ZqAyBWjLEicPACR",
  "key35": "5rqvLwragF55gVGDdtDeDqJyMofctqW5TKwu1iyDavFnpKvwvWtp75easJSNLP9gDzWt8M1jxWs8fFgFV4XB1fDq",
  "key36": "4xUQvTxbkKsAf645CJuXjkNDxcW31tZT5cUzGANen3aBPwwosZds2spauu85Mi3aF2eBnYKCYhAenoEZ5bS5edQ8",
  "key37": "2KDmTMUn3RXE7ZHfP9zCPWfPXrqZK4AsLS1HgwjqNdjvdM4j6xvENY9WYMEPewiGn3pDKebtDMxTwyZNXRJv9DMW",
  "key38": "31HHxRWkN11wqRYoQBQhPHUbqthrMKe8atuFNsAsc6EztmrkYmG628B9VjWvEeJCbnSXpsPxcRYUQ8h8UGhHAd72",
  "key39": "3PuSTB2K3RcyaChmUDugJgSGuyVqXf9jrFxm8CGsNVbJxJDsgbNkYPpwekyNB2YovYZCgWWDrwqVkY9Zp5sEjYSp",
  "key40": "4HGukR3jBVwzY3yc52uLBmvvDPD3VAbzoRZ48ZyEiXk1pjmVSeUo8535ofBpRj3Pdg7vbPb9A8KGrDJxPjuaC5p5",
  "key41": "4VWAHNGVAABejUA43izNiB1nqtxasLZAzwUwj2xrgSWtGMfix2UtZ1DAgwuabY7CyUqYiUkFjjbSCpfHpMmwLZzV",
  "key42": "2YFVLLNRzkHwgz1rTUjeVX1MuDSQDBe3QuL6ADcbZtrJq6M2zKzCxKoy1ttmUw3E5HMdGs54imbiRPMJe7gjK6hS"
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
