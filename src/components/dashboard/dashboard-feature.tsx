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
    "43UyP87RE14595g3rChQbjFuj5P9HqC5JnrT8hqz19Up85mDH6aGbMKr7pPQho1yibs59zDh1zjYcCGiVxGuAX3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5WkkZRCYFQAk6sePbZyzV3BBrcQq25j3NF4dK63LzNDrDaEa5DhGxdxN9pf38jRfbqrBgMLC8zvTpvjqQRqXdr",
  "key1": "2cDywEr98otqM5KVYWuPakGGgXVrHQigbkFYgMP7PEC4fhufSmkTebQNWDtHd4DaAEKt3xGZbMWnk2hGNvYvm7rf",
  "key2": "4UsUPBZqnommfhoqS2LwWm7pJHQfjRFN4NTSJdiHV935rgcncdScT2s2YC63yTFmeGoVXsdjskW5MSVtmFCyBqVT",
  "key3": "2YuFoayJkij2XYMkUxifHDWyVMSz7GvNFwgSMNesksdGkZJxmTZUimrsKPBXvUCGaedq7EbvskZmwQWBJHwbZew8",
  "key4": "jQM7LSb69BQPUchxEbXBna6WidyNMcfMn1SP6FzkeEA2ekAY7JYUMw3TDMa4nfE9yNs2R3Yk5tbc2hhESSdRjMG",
  "key5": "JfThNBrBnv43nC6KrvLUuMYBtNcvMgV88A5wQ44qxyhb9SriMjpH2nWe7H6eLf2WmJtMyi7sqcAFuUapvEvUTZ2",
  "key6": "5UnS4HeMtgFDKmgpt4aM7RKEGC64cX1EpL1dzMCHotXkF9z8bVtaT4T7k6HZ5ihFo9m65kP9fUKSVRKQNQojpCdM",
  "key7": "3acr3omvKhWndhTKwh4sVB5jGKgVn6Wf7rSSi8tKEj5F3vdnwthdG56UJZLyG67W3zzVVgiWd2sn5BYEFM5HXfLy",
  "key8": "63ELXdAU72Mjq6P8sfjVSNfYMok2WuZzn8jDB1fnw8KoGhjAgYnKW7gAbiWc7WhftEGXpR6qG6CBcgoFgKAWyjf4",
  "key9": "3PHmndifo7c39kJKCWHswHJj9mwQg3qjYE7J5cYiwH9Qb23M72grirK3PZk1d8QZAveBHU7pp5VzrZJcg1uEasGZ",
  "key10": "3ut9ozSLcXJ6cmLdt89EcB6QhCCUuRfs4nedzDeYigaVBSzL8bFB3AADSnpzRi4fN2eRqYgaExrcLwUH19huSnXU",
  "key11": "5qLtxW7AeYJv5sVTb4W3y8zGDfwuxKFprjx8LxJEm5NFDibDRYFtiaoUL3x6wGtEq459a9cR35xAKDki6iBFQpA",
  "key12": "5Wsrpdv72Ng96L6q5Tcsxb1zGoaBmEbTSLgBktbFSSbSFyGegGEt52UBEyeLwNXKAfZe7hpCoUN9oBuL1kTwrpLj",
  "key13": "zBKiNhU9BMAaumNugx73uU8zBCkjx84WFk5Ebgx2kQAKwZyuQ7Jbyv3Ptzk9T4CvYvAkF8LoqapjDYMnbfnBJTF",
  "key14": "2VNo94tFJz7VXMfMXoSLTn5BCtdSyLoKhNdLDW8fkwroLWYJ5sU6zdRcEpFbpPDiEPiagKASSELUKtvtyfPtTaAd",
  "key15": "4Ji6hNVC1Byku5aJzgiJZnHA89HLi6cvDzKXB5tNE5SDqRuHRmDbwH7v9K8oGT17DCJC6iwnav9uMsYGA2MH25dJ",
  "key16": "22WF4si2uHXkZev1Y9EXx1mJLhwwqskWxKF9vxwKstc7SwBGACVvXWXsX2qTh5X22M8MaD52N45sqEifYVDeV5G9",
  "key17": "5fyfPDDMW14WVLraQqY2X7vSUJVD38d1iw6M3FTa4qfdF7P4UsZCVHSpqVC2ffDJfxfob47Z168d41H1fra1Pt59",
  "key18": "tjSuWyJQ43ktouoB7wHuzsDQKvKDmPEJtGaY2huw9EsxzbeinVdR8AZveFytkfzZErfHt9qqzyBUdA8JUyN2rFv",
  "key19": "619X2zPF4P71VHCBd1rFfQyWMc1LKTR3eRUG8XwcFjZQEZBYANMDPFCsK6Gh3Wx5sk9Tj7AmwyycrWXi9J6GhrSX",
  "key20": "4tPYNCRj1dkuHJ6WB8NVv8Xn9Z2WtnrNXQbRHrMpaQKNgcEv1PQRqLEY2goEiqPN3qgiHdGpuCHXX2SU5EcHefjf",
  "key21": "2RLbRZGjfZTejUQ2jrAGpbgtARKmVsJEv1kWeUuFeF78XDfHgYgELCWJhn1smocRCYijdz5L4ppBP1K5HLQ2BRX2",
  "key22": "5LV9Ke94nu9d38NsLNxZuZaJThVpvtLrzzVtE8yAXvPbzM8kx9vS35MYim3YuF6KPMWss93RnsdDCWS8fBAZo6hN",
  "key23": "qJMsVu5MX4hso7Awd5insewnpW8BXCe5wnTpnF2BPJDSg6BrJfcYAs8k6T2qs4c1v2kZAuFLo3ZRButTqnzXYya",
  "key24": "3eLr4rcAFikQ288oBZa9YqxeyW3MobdfAeaYh411yFmK7VsesJwggCc44fHjrg7ywwHc6G84QuT4D5YsYSf3SVaT",
  "key25": "rsrLG4rFqpPMGhHBnWTocRVHmtugrdqR1RyC5zKPCjvyuNndNPfXnzinPZujNuirnEbp1V8cs9ivgW9NNf6bW3s",
  "key26": "2RU9on5Aj4zoJEMsCLr4RfLVone6Bz9iiNaE9hqYAEfzQJT31akoTnjwU2BYXfKoRYSs76bipdFNU8ocZ3WThb2u",
  "key27": "5vSKJrnfNKhHXbm9eoCpAv4p1p121h7iZXN2uVSRa8stTeHtya917jxoc7L8wQqxpmV4gWwc4X3kGBNYmNZx3Qs",
  "key28": "48QmZddqCJxYaHkBKni8uFn1A2w29X2zftrGTAvnoZVa3MVthf4pAQsFduQE9n1ok8JE4NT5UgtXtLKvvhRbTixE",
  "key29": "TgYNcfrxDWhQ2tzW8WsNFqxEu3UyhsaNKVbz8qpwpvRyeMh7QARpMyJariepnJkL2x4QUkPm1pqifL5c6FEsZ1g",
  "key30": "4eG9XTLcXAoN18o2udyiFa7Ub9zk5qn3LbfXkSjdLjJZUZhYG5gLceuKxCQgDrpaTqbuCbPQaUZrC1o7wHGQyQ4q",
  "key31": "5MEx2FXc884nwYPsaQQWEvmb7j5V6w5EMiSQoayhKZgALaAAcXRLH8gUqpnXtfVLeDNN1nZfM4JFASs6kYc32Lz1",
  "key32": "3prbJkKoGksPAQLxB69Wi2YJxJrffGJ93t1KSCMigq7aiAEME9WbyofW5dnBnhDacTKwKYSnkfkouKNpqZGwNNEA",
  "key33": "5t3SR13qQHvBHazwRcGvEoY6GSPcCt3dJKqAByfqZ9nyWrqGr4qonGRwpHt5Qcx1GzRYH4UMsWC9YjjgeBwauHff",
  "key34": "FucNxS6ibktYRLrbgR2oK9gRSVfB4zxCqdjGtzdnjhPbTavSEHcd7Q1cZSSux51fzUqacM5oYUZWehtDebhjX9K",
  "key35": "4QKNBAoqSEjCsRDWfmcTix1ryS8dw5ACTLdpBFhQAkQJDoxCUKeHiJegya6LYBCUMe2d6B1Eq7i5sMxthS8eDTGe",
  "key36": "2kf1R1daMbLHz6E77QaZ8sU5mgghwTvbm53x3vBXGQKPeWbMaVKSdpuZV2cMVSxx7XUQMB29pX5tBLCEeBhgGg9w",
  "key37": "5YGw9qfZUrEc8wcGqaWE1mp43N5mqRTGvSbntGUFN4yuR21LD6uJJHrCCTuEM93Reqvm3YxZYbiBMEEBesTaXFxc",
  "key38": "4GGexPExnHJwZ7u7CEUpfdBt3Z4UNs2zLCq1BReyfXLdqR4bLZc1fj2EdJiJLm26x3gMTX8EmTQ2bvU9x7pi8zib",
  "key39": "2G1eaRVevbXPCVorxjZYKk9LBGYjuZBEjdQHdoTsy7aydwTAx3K9NKtM2RD4S156PUwVa2VvcKUatEpSp9SHoNBx",
  "key40": "2PaHBjqXmKMWaRBqtn1kpDu8F4CR89PY5espdfsjYmsA7xGsGdhFQyw1igPrz8PkMKd2udhKKx1AZVbARZt2DLpC",
  "key41": "33qE2zpnNNwSXC9cdsGHRDgDgXgtcFtUd1PBvWghfiKQCe5Jab7bQZTYaUWPV2ZNf3kq2Xdz86dMEgXA6PXU5FaB",
  "key42": "3o9KFeFRNYFHNW3K5cu4r4RNi2qKkpVfPgBi5d53NoWeF1s1jkQRE8QyPxY4eMRep7582F8h21zksSKN7vKdmP4E",
  "key43": "jcGskfvfLxfVpcMVHhiK4Kfh6yzghHS4M2WgQppgx1xPBy7grdF3kYGmdP7iFCZuUy51mGBWaTE9ZDE3WePmiQH",
  "key44": "3xCpYJFQPEvW8QHRZnWenQzXudtApktbzxD24hvtQQChqn79q34JKvfpKVjDdvZ3XjraLEMdj96WxzA4gS3QAN8P",
  "key45": "3v3sDkvceCyfBLoV6RPcJv5ty95kBYcPiGFTiQkpWofJe7gWXLfrXSLw2uwCjk8kQfXPQLPdY2b6vzNqJcdZanzp"
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
