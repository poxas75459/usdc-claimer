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
    "35959AFNaMJGPsWKJeBJjG86aVA37QFrYF46bVN1dC8TP9L5SkBTGFzKqpktJZ2E5MZ4vnSVpPJbbfpfwo2EyoNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkZcS53ZrGLG6oMZB4rrdK1QaQ9MQNK9wAdD4rtvA9qhUHrcDZJHrrLKqkfjsX2MzPohaeHnG7RbHFowmKuvKex",
  "key1": "tnR5ASHEpFbTZYuRSUJffy1R1xBsTzuu6bRaHpsg3BiSoMRU4nAMcxkWZw6LnWYEC74eBCuk4kQ4XWMXjjQ1tHE",
  "key2": "4t1yAb9qAtaBYsEsNr11NaCjegEVmGPv1ZbwL4T6YjBuDUcWE7gSVoJVE3LrVQRRoYAC1VQtXS1WaAQqgq1FzzYA",
  "key3": "4UX6KARAkA3yS159QiBXX6UGovabnfAW3HbykH7JPkGSweJk4wzeR9S7xuUSCkokq89VUuo2A7bP6vYphCBzCQji",
  "key4": "Qs9qrRvTTf8XmwkkZqEWzdBvNFTJvXMgdRqAsDL21fDTM3aP8CNdLmVfuc6Z57pjFioDp9Wyn86yYfkM1HrN9QE",
  "key5": "3EYZvc1Xt8k4Vk25Nrj61pJrUcj9oYQkQC8KZSh4trNstU6p9FjGZtTrrrbsfQU21T8MZGNF8SeHy6JGa6czdvLk",
  "key6": "5GhtU76kn1PLVDcK3zk9gus44aRR23bKZLGv3v1qt4VaooCzdAgW6e6LvdxEjbVvuzTExfJ8DbLX94YhMzNWARfb",
  "key7": "5zUmp2uQbH7GqZewgFJiJ7FQkT8KXH2HkR4GfVPumakZhT92bxzd95vSfNhQLUqLXiJsFWoMTZ3vcRdkfBz1u4n7",
  "key8": "3WuLpaj7QQJLLsvn6i2Xw5CSZcN7aARGTryV6APgi1CqPCS4qUWhQatxPNXdi8TWZob4JqV48qx3mo4SQRFE65Rs",
  "key9": "TN6cQW8WFEkQh9ULrwLu3huU2pZt3rEms2aaczMrJXw5cth6iPPka2xNFihrNwAkpgMP2ghcZFmBkVMvBGXxKnw",
  "key10": "9fa9G4dEyijiDVibJ6cjfDChp4Hh2kd7GzZQCtcwaNqoTLHgSjqMMPQznid7nYCS1waBNMyDFoFfMDa9mBN9NUb",
  "key11": "2kRDmyaqggpUQToVtiV15NHcVEsincEgCH6yA4ru5hLHcAY8cNZNDAVaRMJpeTcyqTUTdtE9jwCA49vZ12SZsQsx",
  "key12": "za93m6A96SSw9XuiiZvVrNX2kx4jwp1YXiSTyLBVnbvVeBvGbppSjQbghrRB958x555ciaxLJzL6Qb1n6ZTeie5",
  "key13": "5eeswHiHf7uQSVtZri2cpRbhFM81jK9tUCfeqncg9xfBV3oWbP9KyDmR4e8rBB38KYNgToseLBFEMuq4dhWGUEzK",
  "key14": "2jocAhKyJ2VHPoD2b1ZV4dgcVkKqpGWG98DN66oTyKygvLxW2T2gB6dXs6ofobbyEx8JWffxUNMGPATjri73Gx9a",
  "key15": "3DSKyySZ9HQgGFrrHhPwpvCwuoGf7yRyq4zHgDopPogZw1pbH8FVxMsztYzJcDxVt92dYKigTJyE3UpwvQBEFuGx",
  "key16": "3chRCa2duqsb6zncbj1a7epxQYSoBjKmeDmZ5yV4YWaB82UbZUFNzx7Bx8PVoaMaoeRVm6PjJmHd98DyN5FNuZWj",
  "key17": "2N5ytndJuchd8FzXznxxtYkTd65Gu8MsLrvuAmEdZASWsnQqNqSHtcv2x1HCKatE9HnM4Ca3kw8hmvTFBEbFHdDg",
  "key18": "24pZFZwG5CKRtsUuK5F9Gz9oKxE8cBhmgPzWsGfbVvfM5GaAHsaE9cyRNkQ9kVvxD6BchbwdQdJ6HnAEMpSSWZ5s",
  "key19": "3pBqrJ9Ther15Xw8mHaFwMXzSoa5zRwNLjYYmBE5VJqiH8yhFqJjHVck6Rg3DUn2yCsmCFSkTrpaM2cU7jBKBndJ",
  "key20": "2aXw1FZJBM4t4pyXvv7YqNN1mHkoVsdPKWfEC84g4DVTnEjWnEyVfpGf2zgmC6c194ZcKzThqCqtnqsY7ZfiHj5T",
  "key21": "5NjShbHdTe8osSH6HFFcTBYEN2MaxbyeSaTkMnsXyNUykLzUfaMP4r4bJ78ybV2nXLrbenhBnhenrf1qpqnKP1bs",
  "key22": "g4LYKPJRumLo3dL9xZKsQ3PgQNicLG7xWKssmmKKUo3zYX98JtXgSzdG28MPjrkXGFgDW87m8pwtVcFVvoGVCQz",
  "key23": "hw5wXUtV17fUzxibApEArmtUQUpxfnWP1gKVENdTfdvKjyxfv29UkMJwCn5VB6a956dNa7YeatdgsRe48yS3fWv",
  "key24": "dSGf8iQAoFWVgkpgikx35aGs4rdam3T6CZsrvCPsXU9fWs8PLGPkimBkkAQMd7rcBFEGfu7QDczBasYQaKSkztF",
  "key25": "3MZ8v7WK9j4Yw7od83yuSzqJGTSNYmGtDf6NcQsBFH37CYCZb9igyfJHFW9w5RUNDCdsvdgj2mzgrforkvpM6Xpp",
  "key26": "AbyYwAmTdftRdKrwgGH4ZRAdgZkEQrurm5i6tpV9ohjgFkC3LhUWUopAhfdZL8jz5oK4EZnfbiYdYt2TqYPVS5o",
  "key27": "5nrMMJZVorNHKmYFEuumK7fGt9AZBYzEVSBWuHFmUSmfBdeGQXAysyN2LXXe3C5RMvpf6RashcduaC7b8vsVezFJ",
  "key28": "4Xh86ymJt1QuoKdFccY65nPfgpa7VAzfJhLpRy7dGcAGrxBD6NWzxxb1dvGoN1CEC7G1xJ8bAv5bzdnD46cqfZgo",
  "key29": "qrfVpf9RkfnVbjh6zQP1QjVMbGU8cM1smkVPC9eYrAkJuyhKocjzgyEWMyNvviiSWHvHbLmdym8hPSwhEVrbt9R",
  "key30": "4aAbSw3tftSodzJCra5vun4LqguhVF8XeKmUkXocYGAgQYKu6Jr57yVsbUTgp5YSZ13n7zaun7NMMgatuEiNnxEr",
  "key31": "2LEJM9coo9uecVKLL7MypHjZ1awdxsRjsdeyu5CE1hhGWfHpEFQBrhVEmNyeMK1Am7Zfc5yVDfZzzsr7xWKNCYE1",
  "key32": "3uTrEPmvugWqGPrxzny4bqgJwZ5NNSwUhJcP8zmSTWgHGd5xLoR68QMkFVNJJyVeeqSCarzyV5BNP4XKAwQidc6E",
  "key33": "2it5vStPrsQBtTeK19BmUHZbpFA3aQ3PXhXy6vJ46NSq4XAGha2Kq4d5SW4jxBEYv6L5f28xYQWA41ppEs2QEuth",
  "key34": "3zjYjjf82Ue6pbr8iQA8AvmLgjfh2wLd8MpdwB1LwpUjoX4XNo12JuwyxdWNP9SfdXxAbqCXw2WSpvHGqWzhkDoH",
  "key35": "3T8Vm3yvc2fjqjCtMF8g3SyPXyN1TptwNrvrxxZv8EDZ5Km4dVkSLJ6YiE9HbSBNbQEMsiXiM7JpcPgxLHcBsRz5",
  "key36": "4pL4cDSeHU6wgS8pD8Kjrd9NoiMgQMRZUwVrTquGAHNTiJZ9jQUZENesbh2TXFgBB4Vw4KTawqrQnRQmv7RdxGHR",
  "key37": "5pqyfWLTvBWCR5A1ZkkbU4A9fhkMCHUuVpgZmwJvNKMUzykghEZjVXuQPRQqAhJebUPv9AjWubirCu5FBETeFEbG",
  "key38": "5cyKqzVcXmxy4KLKGMNhFxzNUrGSEsC1PgEzFuzNh1RCHCDdcstjEAQLVJNBZR8dPXBicQH9ZZMTYuxG7CeHoU1z",
  "key39": "5Eca6EcvLu6eDnNAC2XmZrzyzi5ing4TtHrRsZ5DwsRH5oGerL8JgTQDW7zNfVeww5qPjy9afCBnERamnNLLv8cs",
  "key40": "427nuvhHg7EfjPxPSE3nU9XEDtUyY5q7amQv9FFdp7f6K1h59VGTUnKDNCvwmrhvFNae4c2WyghwNY7p5HvezNBq"
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
