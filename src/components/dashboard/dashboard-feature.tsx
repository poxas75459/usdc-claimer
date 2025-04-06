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
    "2FuDkW6goeDSEGNFWC2X8KXETeiuKFEGN4iEQjCySYDN2ge1uEX1Lfw4FyayY3goxZRakACGDoonz6Ziwhkg9j8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHsykUKXdKCtVNf6NHYFqAadpk23rv6fNkzSpa8EJmNjiDmGDgpnJYaF6JX2SEc4pkK3mskxrh62sAuMLHVLfsC",
  "key1": "f51PJHCr1LM8KGRcYCmkFci3R1ijWKVZpVjZfVg9SaGmWHGZnrPoLAm8EuMKezN6c4mZGjYawPGfLUSYm9QfA5S",
  "key2": "2ErRSnbAW2xEznBFhKjrmQHjPNKUN9ZFLBs19Lnw7uWGHRDjDp3vZFjuazdoJwBbF5aLcZowNjaocZBDjQGuJbg9",
  "key3": "2RW1WxuaMtnye82hwj5qhQhPRXZrRrux1QevXfPvNZm7PdQA5ptDrFDWANzx6kX7HdJ8qt1qZN2SBQbXoZphVKm2",
  "key4": "3FJbX4Fm3NQC1T8hipCnCN8NkrcEhw2qDcqZXzmKiYGPJmTyotfYTr3TQDuAoG59xMTR3hNcDcx3unSxCNGPsVC3",
  "key5": "3vMdcwY1ZpTpX8xuERPZNUwJQe6mnUYg1sVc8uz5jsKcXnpvuG8NJfydzigmVkWPhNtSryEk3JmkA9VQZRcNTwob",
  "key6": "5jUJL5VaV2GingauqAqThRHervhkrFoC1vsCPJwsajRUz2wJgPxVgqwSuxyDTxAsRrJnedSUYUHyZoi4fa5XCtLq",
  "key7": "52ZVS2QP9mCyuD36Z28JxBsMKRThYnfGcnfXujjdRaYekqpPZw1WScesybrGtFYsih8EVsvLPqrgGtFuyY2QeqRF",
  "key8": "5VR4RLA9PXX64fhcxRMWFpbCrjmHVnW6urHh17AgpkLeihe2aVtAuZUffefsU5obc3Rcn9XmfQ98exkkoJX55SBU",
  "key9": "PyfYS7jpeheuKsFGpiptUUkEYmeThgY78pi4Cg2dhh9k5Wk9gkugaAEG12ufBNTViVSM7dseymb21nRucZBd44e",
  "key10": "HLUniSs8pDs3KQE8zVnFASUxf3jy9Kb9LiWAq6YcMRJ2KsuksYvEMokEYiv5Gjuq46nsnwjx81Gq6J4eXEzL1JJ",
  "key11": "5PjnrgJWx4bMtk7imkubuz9tphGyv7jCbqyaioKadutMwBhDAzN3pdwavfNm7VmmZJo3DhtpTQARc6TzdPUkBGzv",
  "key12": "64fqCrxJ4hY3PEnYDRRDYfXqHjgooT76wZLMmzdwhXFHe1amdgCbnbi4QWPVWHBpdcfmxSJ2w7G7oVJLxLha5nnP",
  "key13": "32TWYvJ6jV9GQLn3LFMB6SUw58eT18hKLkctPxq2whX3aDbNtVQUsBBndobhVqqWF9cJDPG8pNFyWhsjz6C8dVo9",
  "key14": "4xQ5DowUc3G8HGgmyvjqdTuUgTgqNK7fuZPsomfmUqszuQnPidVHEB8cm7N3WAKwGdMpKMNJ897MpHh19wnbzzd4",
  "key15": "ekq9G3Gs6BA46KMjKwuWMGonHA9SfmHomGzne6LkbNE1ytJwJBmcE3J56X5PXWLk41FKZtWr3mSiYJdCh4QKGWF",
  "key16": "4BvUPNu4pJvSDmgPAhq1EzaRA8zrKzccArq2YT54w1RPAEK42EjaUuMug7sLpLznvMDTyLa8mwKVctJfmLb2ZoVe",
  "key17": "2tjwCm8LSXiXK6pYs1WBs4SD6Cr4RJLN1mrgFA5BG7Ra2LcGSZdCoitRCxTTpNp1Z3Vce16AqjWhrgbg8PsxvjRs",
  "key18": "2upvPiabRaxjjD56vam2u7Ah5aQXE5K2fkSgHETBUN1i1xFJE4btsAbRx8bm79ubKbH58HgzcqitNLXWVzRjnapQ",
  "key19": "5fJhe8FWZ6MUaCpX1oBMAs4JnY8b63GGjnuX3wjSQwbFBBpm9TXZwL2sR9raKqda9dga7FfpLWsir2MV96NQLsm3",
  "key20": "3Ud84tQQCAEnRLErDLrCtAQAKnu1JFsrV9PHWPAd6PUuS9zKi7EF4ogL7x4iqLgw7YhyK8picyzVqxkhawavTURB",
  "key21": "2jJp9sZhxWH2CJmhGQv1zAifhawqBb7wE9uhY3XefWBsNSgazKSXdLtqSRZxktyQNSCDxmkR8BaT6koDsJURfeG",
  "key22": "7o7hw3U8oxumVYeB4Xh5xE1Bkntyr371cWQ2rKgWFzd8FFC5j61tq7cXZnqhas4YTen13WPzpgWMxD5CwY3Q2q4",
  "key23": "2TJaXSewD35aWhoV8Pap5stGCcjuR7kcyQmAJ6A2YLt8YjNtd4DT4t8SFbyyZz2kJk8kfnefofBB5VZ6bvDxQ9BS",
  "key24": "3aBGec89kJwutFJ4A6ifQtKqmCc6gYevL37Wa1bSXk4MSk3LuCp5gVteTSZJdADu1tu2g9bwLSuo3wWvDdQ6JZ6G",
  "key25": "ZVkcDc57gTaosZGQferQCxRWe4UM3oyyGnKSK1TYdMohcq6TVoxBxWXXXr7KNp9WJXNANq5SXfj4hN9WqA296fv",
  "key26": "5EsZAViFqxj9jAFQ2GKfMTkTXrNJRkUgbsFaReopnJWXCLqAnoucAMMLzWk1y4uChSiic87k9EotcHyhnAbirepP",
  "key27": "2f5R5ZiAQWQ5MD5dmVu4R7tBXKpMsSdGFLftceBFs9JPDjb5RH8WwUMB3UuUJXSjU5B17XzZTdwPBHTtp9Ug8mfq",
  "key28": "5csNga56DaUmghbpnZkWrMqQ8nG99Q5ryn2DJmRkbrVgmgEhTXbmfBfyrtBhpKe5WMZtByhoutn1XMZMqGtvTSph",
  "key29": "3RAsaYE2nBPbzqPq7c8RxpWFXPqdjjjb5iNiyXFAeygHtB1wsjPb23x1XLjtXC3kia9KNeqNEFCif8EPYrXUfUR4",
  "key30": "55FLmDFzfnseWQ8GqzsVMAUGF8C1adRMHmwCmteKnQ7Nk8UzWAaoKgMH1N6G6yRWRfWFbZb9nCvencWJLG4tWWvn",
  "key31": "WzpU8GsoQKXX14XEt2dfNeo5EPgqVbkrnz7BFCzHJDATQV8xsud6tEGPYjpXRDcPNFUfhCcv3PypGqtyL9Urgza",
  "key32": "RYcoZuRQeJ8QpmxmGGCDYcMGoDo8abdcmocqrVRqv5iGhBgfHLncK4JeTb9C1BTrFjLdQZLYGSXi8G5wfxk7BLQ",
  "key33": "4BjRN37m3gm7i8syfhdPfLPrEDN7f4TxbqWZD4fsY3eZPWLNkzjAfzmMQ3CXdCgy8aHdbr2H4bLhsve41rfFb6AW",
  "key34": "2ZpVuKRrphaSnrcuc1hs6pt5tzbRMdfuXyHyZixbCM7MV8FhrsA4nH7LKzGhy657zizjkw6g9RwQnMW5Jjw6Gsb1",
  "key35": "7HgtoM5gN86rUSkyXVQ5uJSvzd1LhEzHyjSNnCyxuqm782Pavr2ysDodzHUXkoLbR2R3ny7drdBNHNYTAvhBwQP",
  "key36": "4j6Evb312vGoH5gsuMg19wXrbEUL9SXV7ugE6AXoVmma3qhQzDAJHBE4eQTiNuxEodpXbi1yZmpfyqHgpekHpBgT",
  "key37": "5FUoJ4XKuQwyZyoR3CcfTxFL5SmUuBqYFZ3QTMLTokAfAZJQpWkp4PrpMtzj6qZuShhinVKXQj6gkGMS2NxkWNz5",
  "key38": "5sAeYpBoPdRrAiyBkMskxWcbKPjAAvwYe3CuTxmVcKhPLabUfgpHZHoyJeGHLBs63dv8HH3HKctdVw6osESkoscx",
  "key39": "3ba9CcR6MgVJZ3NHkWTaso5ATcry7SYp1uMuus2p9bkEdywebGCv8djapSftMTPp2Lz3QPfYbdwE89KqqHuVxgCn"
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
