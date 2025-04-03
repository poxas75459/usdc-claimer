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
    "3kvWpfo6N3baUkW1iYRrtc7NH54msK6XiZmky4eWdJz9sF9TomsdMBWUR39MsKG3sTouTxfN2evhRNVvcUoHYeYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7u792a8FJwd5ihvPjd4Lh4i9SkpfJJZJcdhVRFQkPZtf3mzyq9L6YfZRRkYuLi8zqh6otPHkFk5Hj4VqAjDxYZ",
  "key1": "LxnbfjyYgNcXuRP6a2uD2acWo5D6v6Z9pUfMY9Jg7UHXADspAVnNaUpgkKbE8EnhCr2RJPNFZ4FMTcx1jvtBxpB",
  "key2": "npFPVDaLApsmE1e6ZAA9do8bbUBSRCBwUpoic5pqfn9TiYcQd99BJDUCK63943DABpCqCc4cVMVCmF9ezqna1uv",
  "key3": "37btQnC3Ntjhs1SNT9SeFP6kd2iQjfqRNTy4CS62LoXRR9nEFqMVPQgGQWqGZ1TCPmBcnVPCvg7i9Y63Z1NVyNw8",
  "key4": "4ja5aa2B4HXmu7sk8AaRxK3HCmSohY37zMoRXZHozGxvxxzyGsGsMPFemSvSv6qNaNS5AnTE8hwJTLfmt4HFNZSV",
  "key5": "2MRrrmqhmskV15M6KeyLp9MdwUeEQ9Gg8THQqm8Zfbnknp382689DS6VdvVBfUzkD2MU8SsthWCqnm3Ce1FSH1uX",
  "key6": "2dcVGeKRo3RG1ax3J1nwLnB7JHP5ZkawLX6NYUV8HmYn42R2BwhYVQvngev47p9KeVy7aYDZcm55NJVGbj5RCbZA",
  "key7": "527jhwYH76Z5VcTohGiXfr8yeiKjJMvGcdk8tdSk78TUAB9q32nUaTUaL7hnvEjk37aECSoFQAhbiQwxmDVmpk3E",
  "key8": "5UFtAy4jtC2cpQhQrsr1e5WZAmgjJjCsDgJQKUn4kmkkFFzRMhXTf2RXCsDqwzzjaMEJgL8DGQc5NnuS5ve8eDq5",
  "key9": "5n5RuNVRLxnHFwjNH2LeY3xsHcY7S724JAhCZrJcHT5nv2ws3A153mA7VUk6Ufq5bVLK7Pk5GRMeN118CNcqgMbP",
  "key10": "5AuaZbiy4twB4HJYZYvEhZDNtmiveyryZivR7UCpr184JJTC9LqXNH51PGjNUtfkagoHCEV9fgXxfk9j7nbu3BMX",
  "key11": "5oHGgStrniDXtGeUXZCnCY8ZPXoynstiJouSV8B3Lj8JSE1QP65CXGqi26NRmDCjf6d8zhGPFc96FDteet4RY9Re",
  "key12": "4QiN253btTwVCkKzAiBvnnoVQrJtomjQNm4iv7DZeX4KYWcTHDHpg1BM3Py4wLje3Z9ErLCErkzMvFmaFAnn5pGW",
  "key13": "2y915HkSVBLRgYxmBr7PdoTZp4bVuG3QZMfB67Aq2qeqdDjhz9gVxUEYugyQLZoUkWR3oqb3DKC5qfrqwkRfaUpm",
  "key14": "LTyFugv7rNAxb9bY1rQS3FdXbkxhwXpgEsuNwGiWMfPEeszubnmUMJwUx6SLhwLDqm7gC8QrLc7P7QVZdrVXKXv",
  "key15": "5rpqWdetwVyeCu7EfG726v2ZKVvF2Zc9toGdyj5tyzRakXFz8EqHqAfi2uCKkzuJtGK6SnzigtFjsrqhJd6oRwmV",
  "key16": "FwyuMrSDicwgJygx8NE6yvBtNh636xYyKu7SSp8Ds3kGc2XYWrFZEUpqaF9EXoYC5AE2i6FAQgn9rnTU4Lohd7X",
  "key17": "5JeWoDs7G29FAdWN6TMo1w4eDc4oP6iZqnjbCb8idfNTsFhnYc587QNWupstPgcUatpvMvBaCQU4Z8Ta4Lgpdwpo",
  "key18": "4NQUGh4A7NADfCRLrQfSgp6w8xA8pq7oEtY67FXMZrRf5WcE2NEXKBJZ4rWzSUHF5RdMSEs87kqMCNfyDuhqizLA",
  "key19": "5QxuutydQ9AmEhnHhTeeZQDnqDuULCvmbUGmPNdLWb2NuYexQ27Ckhxv6UyFgXZAyzXxCaGR21SWdsjryt2nnkKe",
  "key20": "4dAxswEcC9W2V5D9yRvUKxgXxUK9hbNpbxAb5SfLdtTD74kmqJaAdVyK2Tx3hrj2R11M8fhBj8owvn7sJNKQ177Y",
  "key21": "pmEjFHfLf5AibJcYxPSwrpPDu4prtyFdenZM3tPsBqtWnvyLrgDVnJFDcB5zRqVVe85yGLEyCJ2ABCwUBvhjHyv",
  "key22": "5Rw1nME8xXWpRVAk2JcpufZXcmNKyBt9K5YRzeL9KHJQvqwxPWjtBqvBCzX3pn7GuwZryyx3jdCe3inCo7664Moe",
  "key23": "cY3rvkqA9UV5keiKLqfiRY7fnFJkzH2fub5ZafPxyMNEBkpU1zr6inqQT8Cww88ga5rmtX6J9hX1VDnLSf7FDyH",
  "key24": "3BBAUQHFhpXaLfMcnm3jaFngL7WPPzDRjwCGPLog4REmKmEiHg7EH29qdBCFjuMnpsNoCCZcp1iQp2DVyj3pDjT9",
  "key25": "5dewz7T93tKxbtMsiWxSqr3ywfngrnmerspVEVuYBpetHWpXWrX8256fKagjtXEHqpzDqDXdaNonxwZAjLndK2pX",
  "key26": "44BAMDSEL2mFvSAhGGpatyiqTCfYrXo8mwTTw2z2iFQThUpJqToRvATgGyMu2LkQXPXMtkfyk88Ra6FQmqiawBnx",
  "key27": "5qrhSacCk5V696sf7mttVq4EFs3meeBinvbmui6V9cBbbFjuQTroVi4aUCiJDEsDfyUXcEkbieTMnFinHrwEKdWq",
  "key28": "5w3fE6MEo6UXc9TQJixnR656WzS6fmkmLvExvSdgEBziHJjvyARLpP1i1upceRKL9CrZ4cjYsmLyBx9faDDPhoRB",
  "key29": "4Njn6pxz2gpPpbsrPsuDzPVTBCQyZjeTQiJrbNHiqD5ndHa3WmeadjNEwKSRGa4LUiV8vnGhTJcv6XnFjaPXSg7r",
  "key30": "4Ei1HUsNainkC1wP2Aczmb4d2crub5a8vviKtjkpTRBmRRGxQgqt5pZ5nEbA4xY3sbEbr27cvimZWUeHSoXE8ew7",
  "key31": "3WQPSe2agyNqvNd41iLayrTyeRcHPgnCWwh2aSbZzDFwoKk6o3i57fiTy4whV376aFoatXrBWzciWMuZDfoyeExy",
  "key32": "P54FKZ2ToQD8qNqfhbn5EbbvTRDTdxqMB8FHUaZJroagzyGibfVfXskttWZoNJPaabxmDXFmiPSeZHzM9LAWpG4",
  "key33": "4F6zH1KGrAmrrDmKNydBtLWGm4o8k1Dt2Yf3mLGw4PqMvSA7UZM1DJANm4Q7eo3f6BHrHtBhqPjxNxkT2yjvjLMS",
  "key34": "3fjkpxyyuK1izju78FKiaXQoB1aSv6xthmbfBA5Hh3rKjK6LM4Jk6jdCWR4Pg8aovbWbRCo8haBpdWPZ6kqnZrw9",
  "key35": "3Km3Tyjv7psrmAkEW2CeuUakod9FuaSFhdFRR3r7wbpre3gGsWJ7TnPw7MGvj272YdjfefZaMWTaaChpkXijNBeA",
  "key36": "c5xTMXaEmA36pyR5YrAr9nE17RqU7ZStBtDnXs9DdimGT8mvsjqHnXt5y2UZvt5ybJShHWQwhEgYFryiXrZC5FF",
  "key37": "D7hSZoAVg5BafARnDgr8jWjH1otDQfMvA9QqcAdiiMh3ifPfynn71RMtQLf9TcK7muasEBVss5dkP9oEnFu5Fsd",
  "key38": "d9XVc6kmM3kKkRWq4fvN1MaYyWHRL3bdRhcy6NXMk7zYtmKgk5ed1NaNiLf2wneMRatVrGA5UPs3tfBGM2pQii3",
  "key39": "4euQykm2XS2r9xh17RqKR5CaGYo8i8cQHMszL9YutUXTNSpHmoZPnLiAtd7xSDkc5vVKYV6JWt8YM871JU8mPYXA",
  "key40": "3LwWxjzhNBEmMEZoA5uGpVeg7JS3gBkE7n2ttdW9qSWVyHpyqNSj5TRNmYY9Tnz9oADbzz8FYADaP8ZBT32rN5Yr",
  "key41": "4STEXDUvVr1Eb4hzSvnabBLaNWbjrRf99uHbCUE8Euz5ne23AfeUsWDwhXrWuKvVQbbHY4wjqUhyD544yqkuj3jz",
  "key42": "r3zykTCoViQSMx9MQVVattRG64hNex1449rebg9GG5hA1J74eJcXVYYKo9DAak8bqhycy7UK2guoqfmcJtHpBhX"
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
