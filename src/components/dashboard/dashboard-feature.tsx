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
    "SYnLBeAVJTssUb6iAKbRLYUWrDf3VovKp2aBUDe5VA4cPrcM5Q5kNwnKUAnXqrHmNtbnqavvW7iTmBdLrUCexxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Syh2jX8M9gB1M2DxTwijoN6X6Dod1eLF3wTSkJmVz7FDNzY7rBodXr1fYFo6n9uWhmBxRAeZLncQNMcgewED7qR",
  "key1": "2CZu65BMQbYyccp7QthadqHGmpYED75i5aw5BVd9cRFuNDdijGs3TFYNxwXNcDEsKZwdZPfGFgdvVLDXTeSwopTb",
  "key2": "5HcxWCgSEBZ5nyfXjPxjGV8oKznn2cnm4EvbPKBWJ3RLKA9NH62Vce2TsmwG5KNvnemhbXr72e6mS4ddjDTCdFJn",
  "key3": "5kHzu46CzyfpVmeR3A1URbUU268gnLQGsHRRKfbNn29ZmxVvk1bgm4oC5UjaaMGmFzGnFJGqjruqenxpu1986b5w",
  "key4": "5BRcvijixBiqX7azTK543VbSMqVPG4yAbgf5ViTdSGQdH6uL6Rw8ZGAxQSZvtNKXioVo5K29SZ7oMv9RPXWg3ozv",
  "key5": "4ijP1UZj3MBvXcTNhuvFj1qWH94uzmcTXKzcQpFsH3zG4ec4yNCeaw6zdxz1q5PJej9iQhj1bw8YagPzf8oYZeqJ",
  "key6": "2pu1qLC7BYLV29CjR5pbUdZ1WMpPi44FxMf6fq4uosi6DiJf1NxPUJi4GWDG8FEwTx1F4m9ZfPsZLhXfP3jfRXHi",
  "key7": "5Y7oaJeJF26Aa53iqVcT7CHnGFz24afXPKJYdo32AZE3nSTAtPs7MnDSAckrSGiZZZUqNRnWMN3sadmpmr4RZrJT",
  "key8": "2nmJqgvNNzPEgzrmrDPEQhTdxFUyv387XGU5uSvRR3xWTTr4iXTvnuNRsUZSQNPYy78eSBxqhCZMHNFd1Knekjzk",
  "key9": "49FLrgPZaUa1RW65mnpC6LcLT6r2vUR4xm6F5ExeKyMWSZvJYS3A3MSDXQ3v2ZJaewfwhnr4zsex3YDqcAyShR69",
  "key10": "4z6BjGFm3TxcCNCsdrZgzepkfHer7njE4WuAQfoNUZEiwNWrW3ChkzQDPainjbR6KyhMVWU6E3hBCU9Ub8TUB6PN",
  "key11": "48F4wpwwDoGfGtUnecxGXTrmNMxXdU3TpugY4e1v2fbREcnGiP9tmSdESLq7EVWnTviumqmxYKwt3DGy8d51zxqX",
  "key12": "4gUFyAYbgNypnaBuquASfmcQTJPvVokoGAEGpHYFjut14K8y5LAHFYonooh6bD6mKt92S5LfY3tKz4atTqn8NKcS",
  "key13": "pi3EcY4vxEzYVTVLehcjaw4gQAjK2zeJMcfjaZ6EdxDg8vVhYvUsEgnRrQdtzzz845NGjfKPiFnaK2gBoasjLmC",
  "key14": "3EkieByyr11iAFLoAfrCxU3eqTqa5LTvEgGPybhmKhgVe6jnAWU46Lc1QF7YNDn1NBpAcQbxGDn5RZXvWrCTKwfd",
  "key15": "4rNFa4iVs6Yf6siMCuZCBqmkzxtJXQrXxbUUJ2s96S8rwi6Lt7XWkGtpW64Byzng8otoBs5BuwK4M5UTR1eTDYT9",
  "key16": "62h2HKoqYm2EWG6ifxU8WSDfTUyGraoFr2oA2rqJprjwgKKjuPwco8xBdhEh7hDXNaFAw7APo6edryE2nRkXi26D",
  "key17": "42MX4KMowD8gSgFPhruhYbJPY5qZk2Ha1tVFCJ3LAQx6MHjLhE5SEMSB1CJNXNFGyQXqmvcojbLxBcL1vmL2xAva",
  "key18": "TxrrHWS4y8Nkgd9hBUURhDx27LPShytPY9P1jGPoNBP2rJNiLPSW8vgSGhyDDfui6WvvMedj9D5456oipoVLc6k",
  "key19": "UrbbnsJYGomQdZZF46UVBcXYptvVZQh9HrVJEusiKYpbCo61PmJNGg8x7FBBE5vawZz7djrnbjusLU895XV6U1j",
  "key20": "3sCuUHwSmw6iqCsKQE8uC5aoGKMXdtVz1vZ3mqJGSdLyRxAEbNSZnLoy6GtRLFhR1VuKAwHYvne1pAz6u7X49spR",
  "key21": "HF2adeRQJRVRJt7aS195kd7vixjS2Ytr87xoZqWHJCsyJABFqycqHJXPB1Fd1DNXupTeCjDmGMKDJmNyNhiJQZb",
  "key22": "2vmaq4V9PGJ3GgigbNMzYETvhknzxzMoLT2jaK1UQf8qpkdgBR4uDdgWiBVVCzcd2KhHyG7wDeukc5Gu4JUsBW6x",
  "key23": "62SyNZJCD6pfSn8mWaGQSBNg9Gq5QRcXag5BuVe9p3Vd6TmiPNzG4TWcwhgAVKu7LUSCCnqrsqXmue7dZvB7nTph",
  "key24": "3WGYzP378iuU4vLYp29Z6TuFBfJ3eCwepRDPzuSrMr5dozo9a14cNyk4yj38fehQrqwEnaiDSEvdRBUKfZCWYseE",
  "key25": "58pWM2N3VVKXw3S4hDjjiKRWQgMX49TE2Yv88zdjD4NMJaH6QfDHU4YNQog3ke5CZSiH4S1i3nf5dzmHvd7vBXTE",
  "key26": "5uY4cncjLXuf3GUDgeuYQ4Ze4wtJkGi14iyeU171zbaKYsUY6BGyQ5vdtdLEqQPot66NZkgTMqmXkDrg3qzpxo9E",
  "key27": "3b9BxRVECk2zfcTyjLWffmxAfDc4d5H9oYwQnusJU9GbtiJnQUvXQB8cogXjwVsBAs2Ch3rjPFqf6419hMvkMVc3",
  "key28": "23uWeLoqkpQGjpVB2zFdH55kVYzWtP1ryCDy4xroZX71k3BKuE3sPxFgbGySqLz9DMapVeLRUvXtqGWyGtQGAN21",
  "key29": "3K9RguQgq2PTJtece9Jp1BhAAZfHeYdTYALKMTVhwHzmWeGKc6nrpfWwhFnokYLYDi7zfm3DYjoc8EVDS3JDKpSZ",
  "key30": "2Z2uFKycGdgwRtv8NBUjq9azmmwbPRiFTuzfUut74iDm1T2vF7zxe5pQavP6s6iTqYvZFwcG6ZkTE6jgUD8nbHCv",
  "key31": "xBVERTJyxGh7aa5FhyXzicLdNQHYEgGQcMCGBpYdoFKXJoQPsQmLL4AtPEP8Q9CPZhXJGADvxutn2nx4XrMg6E5",
  "key32": "44XrZGa6Gz6KBkbwftwHvLP18Xi2UYnHAKw4g5ysHL2pyctdLKnCBbQyWU1Ler92jV4xUGRyqryoeNPMeh9Nf5Hm",
  "key33": "5yCjpUqwUHMYMfzq7VpMWmzxy6wb5oddtcc5AQLuNkNXhTCBqYqktCkcFsfGsKCYd6EfZGTRffRq2nvqTYf6uQTz",
  "key34": "4C8QepifgThrFrter51bXGR6Zis2ASE7RMtztUHZFnAM7knutwUx6oA24jmHnmBe54Gi7GghoddeWap2kqAoAdXK",
  "key35": "3fVcUkkDQ5TDFHJTy6m8FEM3ZCUwwZ95kJmJ65kKSaQB3H7G5XFjAmDWEJJqkj7Tgoi3WQxzSG4XtwhZjtL2Y61o",
  "key36": "5daYqUJuMvYT2SuKci6wcFMvJncwc3nZ1UKNLh9vGDcpsWuoySDvk2UErwSGjWNhyinECHVAXcmXFZ5BKnVJZZ3r",
  "key37": "vovASA3a8VjvaRg36adwb9z5tnUat1gcYNF1nzZwCs9pbUS7bp5noWL7ioger69QCc2dLTL3HwgcKrDnUw3Pyo5",
  "key38": "67XHDmATng1rQA5QgbDPRiYYqAcvwN742FFaBcqxKA8QqzHroZ3zmYJL7f4npjASjPmS2YFvSXKccscgRbKDw5MV",
  "key39": "5SdjbiWFzCHAaP5ib19AhQ7QSeS4tjU9HzifAMciCdKQ1eg3ka4prJFyNFWtLgZKPbWLPT8nZpmJReQx5WVq2K9w",
  "key40": "3CFtGSnxc8rxXe3TutNBRcJhyRRmWmkdq1PQTSbNAiemWYMyvmkfUo9tU3ZTtE5PBmzucYm8ACoDf9LTZxWAqp8w",
  "key41": "4UrDG8v274ArPSJXXgLqgPAV4GkvsK2biPC6Nsp5rnhasVhvryJXBSM2KFh17VNfN5Yqx9YDLdKPKABjUCKuWcq7",
  "key42": "5tuGGJckb9rUUm4oF2o8M9mRFzefGtoepPKYm2CTSHw8R7ZUMuwrRmn8YJt4nWeJ3mFMWzYVK7usduVWxLDruxSX",
  "key43": "5nZbJbnNSjHXXyUKscuaxNGxgS1nruqcc8uooMuxhBNupVVEshp96maXNBS4ge1CzeWH4j92UZmFUWYpJb3Q5iFY",
  "key44": "4KfYdeLFjYX1Afn3xVr9tPJ9GDXn6dfo3KdsotVpNyNEddwvJ8oJy4Avn1Wr99mkrJSntz6erHumUL1gRTkNasK3",
  "key45": "54tBoXKhYd4NyGvtgMHFxW3LhJ2BXQ3WBwfGj9pMdBXAFxRvFSH8vvqVA36iudoiXrzvjv7uxV9coYrjNbHgoKod",
  "key46": "3zcvnwBp36upZVbfbbmsKYSSArhzgGmTqM7d26m8VokjN8RfyfeF9qiq61jgAKZjU5gsowaR7xB5WbpTzVJy5SDc"
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
