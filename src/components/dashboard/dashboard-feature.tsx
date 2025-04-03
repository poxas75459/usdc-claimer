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
    "4AhPELV4Jq6df5j6xwwLWBoBb1UBqPa1D4v3tD2ChX4Y7t5yjjMCmvXFQMXtHMt2eBUjuchQdG5buf8C5BUXHgfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yP568UC1PdkRECXLeUNo29fWo6BY1f2TKEaS1tXWFfoJPUEH4FF1dEoV8CdQdAswQkbx5SHhym7pQnewZXpiWvH",
  "key1": "5Ssy3FGJ6gD4eC9UgTeNayfD8gyCHocyoy8K9V3JaYu96oyMqRu5ganX2SqehjWb4xskdayhoqSqMKQwHkVToheb",
  "key2": "3QZFqZrg9jsDhE8K3Fc7chxWsKp7hfKqiTjHQKwTaRbiNy77BaSJQ4dyiiwbmPCSan86wxWNqQ3ZsnsroRSD7jn",
  "key3": "3svZvjVjhMUDJr7EdF2RN8z6nbvsmuzVmwjkz6GBpVYEhfGUCPDnqtsdVAo2XV3NAam6n32xUNara1op4X7EbDCZ",
  "key4": "f3xWH2QzpKaPMhg1XEvLqTP17TwEU7BbVVZsGRzZWJCaZ2PE7ZSSBAVuwosMSAsU3cnCmExYtrEH7K9gL62CPQn",
  "key5": "wRLnQPcK8XDVvWCFuxbx59FRnBusFEhzxuu52inZoW9ZX2MB7xo2mhcqMumrQCgKzymjkaztbm26i3RgwMyq9qe",
  "key6": "2FVU28Rax7pN54NfsU5EQGaEbmRby5JJn464U38YK7Y5pckRPt69VC4KEHG8pavYqYfx7feHQGA9V9tCz4XRsiJN",
  "key7": "kAjTcorwAeiPDLz1ByWjSUisL6vgdi5UtdpJ5WnPJuFg6k4usPYSywa9iNuB49JDH6HWhCJvBpTJThNyFq831dr",
  "key8": "yRS52RjrEiLX3zxbA5iR8ipjhKiPwtG5foycbcJLY1Yexi5MXU7rJAZUtTjbccpcfNjPr8HMjkTQppkohkjvUKk",
  "key9": "3QXPnRU9DfgYxZswmv9ugMmnWh7BgjQ4wmjqiqFsq2s1xbv1EvyRy7rSYmWnM5VWANo98AuRk84o9gg79sWra9JZ",
  "key10": "2sWsxYbi2Vc1wCmTJyzQnQeLvprUpNPJT5Ar13etTdNaaeFaKXjYjK5kLHfNs3XxXENX9zkd4gKvyrppWn1ieyWw",
  "key11": "zwQLQfbQg825N9QhA8cekgQS5q51RNRydtMrnQERjmuuSywzNFXKMHTFWLAXbQG5zwYFr9Mr1YdktGzkm7j4rRd",
  "key12": "5eNkBYYXH6nJrPVYHqgaSJjErrjxd86pKpJjLypAtCiszyrTo56D4Kqvmz6HC5Vo9YSya4BEcaNjQ85GQ6YQPqDX",
  "key13": "2arL9xnV9stHGVvEysiXVVD6RVaUmH2NDuskf4hHGuwFUPzsU8Et6ANa2nH2ZJ1RD3V2s7nmjFLGsACzaK1XddEc",
  "key14": "2JNLm3jWvid3iFWHr51sif3iSZ5nqyAmRL4yT9WghEuxGuaABJbQSgJRn7SFE1kgqAQoeefrun6EVbK5yYcnLHm8",
  "key15": "3vMj2JaW9ukFfTEigRx53TSGSEJhhiQ5xpfxGEqJPa4Kz7TcAe7pX4Xb1ZcqVCmtesQqfkGpkpkKs8bSWcoVrhyV",
  "key16": "VC5mstbdpDJjtB9AS85V1F4YDePs88XhT1RnSzbf5Lt9Mcb8nhXPSsWGktuRve7pvxbXs2PKppEjRv3cNZ3ZT1n",
  "key17": "4wJXtByv3PqKvRksCX3yprgDTcc2gcmLiW4tpcvKMHqQ9pPZ9ptgVED2ApiqtJ9eaLmgqtXzWn4rwNUfJqKS4qLm",
  "key18": "3QwyC4io7wi1y6VMbHHZRhCkmDXy8EqVHf59ZMuMrAPPaK9TR9b5DyyFyF57E1bgRoKkeXfccnRhmENgJYiM3AtG",
  "key19": "3iwmNNuMoWtRrCSsa7QaadqK8vFeiF2j5QqQE5MvTmkwzCZmK3MHhAoexuVQ6f4AbtLbCTMduw1cTyymduKuhHQW",
  "key20": "2wxC3LdwSr9dvynbgfdTZ4TpyiAepamCUm7LGGorGyRfFTGHu8EetY7VJotGVLPKCbpwjj3G7kQvpGUrvTr6wxdT",
  "key21": "3BBHgK8HexZQKE1yiHQmPwVKQ7aJUTey93yK4xj45H29Bv5tTg7XsCCixTgX9PnfzmxAD8dE5e5AUQxqL56zA5GD",
  "key22": "4ycFLT6R2XG9Eg7xB6PuZfsBcqdTqA15Fg6LrTdcbuPDgWRMznduP8fuW3L8RFfaHeuAJVPcnPdHCWDheWr6ZCf8",
  "key23": "4gMXL7xgENGbb9pbDvA9oLrCifyuaMU8SaFB4jcdDCV6nhESdMYAUNyGbKGov1NxWzvbcr32zN1c2AybtmkQ8zqH",
  "key24": "4vK3CZwszo9cYxd4DvthKZ8iHzxjewsVE6X8P7g6fbUFgoGVkzRa5F6JmqiBDXcgb8BzL8AR27Ko83btMfrbdNbq",
  "key25": "3Qtb2LixyqvngKmZyX7abmLg53wq2E5gp4NAs9hJpLHJ3CbMxyjq86suFYieCckjWcZrnm87QSmbovrFq9GC1Pr4",
  "key26": "2MpybALfcCCRx2QZVqDGEBFbXc646wvCLBrouQ8ZhPNg2kJUev1meK4jMcTzNegG79mGL2vUSqXKcan4aAkfL451",
  "key27": "5VPjxo39N5CUrzgjJxWGYjo45LteuhQ9U2PHVhX5wB7X87UqMoVzpyKxyg4AZ16gNdkqEHbSU3wWgBKXbBPPLQtp",
  "key28": "5xBTb1g1mZiki88zw1TcCdeGXKAm3ATwDwY5jp9nvkayhvL9pZXisggtR2EbZzWWMuSqC96E7hxxVwZf7fsQSBG2",
  "key29": "3hYNRsQAQcsSWShLwc4XGio5dajuueF6KHDVRjeuGtv1iQkAL4zMZL53Xn2vmHv1Svsd7CxW2BcSJdZVUhHFrpGs",
  "key30": "4HU76b7EKTksMoogCP7SxW8Du4PpxZRRpFmMMSMFkBA5eBqqwsPUTtPhBkVFZUeGSHbV5XfXtAQJedaJKvu4KHM8",
  "key31": "5uzXhpAeXdDqJ4zFMcGB3P9H8KRGT1VqJtUf4Gd9zGMmxmuTDFsNaNSHWcMiPQWW8zD5PodK9nDyZ5pKV8cCrb3y",
  "key32": "5C3psyge3HEE7yX5hxuFRwsWqV47t95EkRaEnH3ubtsTSCJNB2jJzdbJGJLNppV4d987viAdffF1DMQw5vKLYgJF",
  "key33": "62thPAPiRQGT6X8JoBkdMEgtKwtJjBcUss9ZqDdafdwfGqLCp7kwpdpuWVTPCyRuJ5ucxYHFvhA4FvwC4M7vdR6X",
  "key34": "3sLpVJSjyfzHKL8v1tDDFk7XgnLLPj3JrGaXNiJABkWP5mb65sTxfXoY4RsYtPRDu4NTBLVS6cUZAuv6AW7GqBoT",
  "key35": "RYdC7f7t9PaVennFGvkmLZtt7WS4jMk4HR2QMH21PZ9t6rSymzcz9V5pFypfpySh2MiSBQjYpeihmfNFxruD1xF",
  "key36": "5JrJGsvZRTcj4pnfracoCAiry3wRVxHJTuSiHLe56ani7Xcu3T2X7bzFLp6wEcLfvoRzg43LQhwYRJ51RbszDcLF",
  "key37": "2bK1P11vh2CpjbAzkVKNTkSuu35mRuE73mdQ8c7mRkABLNjG2Z2yEuzRnDWKA86Hhs8mZ6yW7VNFyN1iSRQNzhpT",
  "key38": "8gzb1ZMfBfvNxiSsnF4wC9mnsqmr1f3Mjto5FfDJ6RRxv6BSV1Px37JK44Qr27mKu8yzyFnTW8ZxMFKUKQ3SioX",
  "key39": "2nfdANrS6fwUgnq97jBBRsH3DPoCuccqooDC1Z8xpaEWrSdApTmGV8is6nu4Za4FaphsDMMb6o1kKLtrtTH2m1DD",
  "key40": "5QsZc65gJA42cJEKgmFkxCbDC2RztK5gDVMwd8sVv3wd5sYnqWgnHqFQqqSgDGTqbG8CSN87ymwtWpsZzs4A2bdc",
  "key41": "4uGbAyA7AuuTx6u1qiTBGhMpqsJXNh7tWm47YLYGntJSJ2Uvu7jcwcawMGPWSFU8qCdcSAphWmdfAJFwVGDJCEfR",
  "key42": "2YRdLWVA5HiUfGTCHCQypgTTFSSoMU4yTCHmSRJUL6E7KEq8CTKRbCJ4S6d9T9gnmqSnzvjMg1qr5XDVnnK6mZzx",
  "key43": "24JU3auXgCU3AozmaNrnnfHfxNJWZUac2Rv7e2idMYDsskmkQQaUZvGUZZfFkwkSz78c8qx7REmBWnc2BKzu69eY"
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
