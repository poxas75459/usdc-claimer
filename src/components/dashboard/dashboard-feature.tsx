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
    "5mMAYhTuttiMVPUMMRgpbGgHQczQQ1vfBABHBddvga3V9a6jPKrNcZ4gLnrm9JxptEt23ykH543YGkWCkafagz7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WGKzARbeMH9RpwdqNn5XMk9dbaiJwSfLaKourM3sF2VaowY6xhXWkweXnDETUQzYfB5FWkvkDjH2iuRuozPTqj",
  "key1": "4WN5Mocd2M2Z6mjJFnmCZv3H3f5GeZVSs5MeK4K7n3ddtdRVzwsYVnVREMRVWmRvZH785SrQBcN6JGWKWzUaAiVA",
  "key2": "5zhNyDnLv1AdZWW6tPUJNV18pShxsyMEB4NUBY4koYEn8P7U3gnwqGK3qq26Vnpz1ik3yEuZ2dTFFcjoGs9PH74C",
  "key3": "4xPNKntw5qM1SkKw1zY1gMDtubjHkMqiKNVPLKYBMn298VKWxQETWg9hBV2r8YszNx61QKtw6Ts6XNJakYgY2uhe",
  "key4": "5boiFQ4wgcrwrvTexmmDArA1QZQmmheV7dCHjAhwziw4g4raRnprydiZJ3mAc8YvUWbDCMXRfAL9f3hQ6zLKJWqP",
  "key5": "dTKVMv5fD94yeiNaXrEZAfXsobARbC5DUtpAsHE2KXM7e3yxsR3f1Jnvc5KDmzkzhDxL4jjfH3vQzX2S5erZQUo",
  "key6": "TeUnqjAuz3CmyFHWPoFji8kFBirHL3GjzvakSkxaJjg63Ze7kdwzrwdAjDWkK8tZ6Djx7KRxaCpot79NvrSUicU",
  "key7": "FbyagYG4kJg7y9jtGqhwpdnGV6P4MAh9btQ3UhZBERy5eQ3dsyKinbecX76jihgJCsppQ3Zqy6Mmt7Qs7VPxZGE",
  "key8": "4RjuFkMRPak7H1YQNq55EzhkfBoBFFY3J2Kz4hBYR3FETCyuLZ7kGmZq17Y9MSyNq9NWzWPAjNi4evfqBRHJteVa",
  "key9": "5rCdT9CMSGCVXkspPyU21CzpWncitC2bG97iab31KudxjKs1bo73LB6gQPJQRx9FrZe5GRprzMWENHeaY75iKibi",
  "key10": "2wHgnUKSQGZLe1ctsvXFR97QogWRLcmU3211f3CY8CmsXgKoJw9rPSF2xkiyeZW9Gb7W5Dx5qGNVvAkpz1Y7p7xg",
  "key11": "641G1BM7uGTRufaFjQ9cwCXbpNTygoj19hxjAnASqVRLX88srZdXiLakmUw7po6PqrFtU7uvtndddxN5pfqyVg2T",
  "key12": "4deABJfZ4WNR6MsDZ8asKrNSNiL3sn3e42rE73jRjMReePoCfLXzS1b9DUrVWEHrgY5jZQg3kA2WgQY8FKczjJj5",
  "key13": "2i2A2z4u61KrS7zR9C9K4qWfyXUjcQ6M4jwtg2aVHcPTcm2nCr9yESb7WuDm9ryr4oJ4K2qmNJsRQPqz4G9e68MK",
  "key14": "5hNBBohRmuGKgcXHWHaQxFp2pTnZyBHHTs5Nywqr18nszUAcH4kji7XMtchWfkZbYnzMgHkQ9HBudpUKvKbjnzcZ",
  "key15": "2b7rrMS1TdtZ1gqudi2HMJudhS4q3vNeDCDXxEbQ22mLRWWEYtK8dH8EPGVhGftyGtycKkXKjG2W166LA2wNa1Gy",
  "key16": "4rPBBg9gmpQRRMDuaEzabKUQ8zQUxCbraRB8RYwqwuda4nFJgVKwj1w1w7dpVgv1c3kFQV5wx9Zj49gfjgQGqPTq",
  "key17": "3GQA9XRBSNbTjKTQGja7AxBkwMLU2Xvp5hk6CGbu4EAMvHWSxQEfZsQ3fRtUZh7CrJedaSFHhSnWgvpHTVVxMzjg",
  "key18": "4yxHVNaH8W66KBXWmc8BUJZUdjxKSuAect8vuMqsSszMMiACcqmdkUKd2gDPeJPaYsyb5u84Nxq62Zv11fKXXzDQ",
  "key19": "2R1PmNfFKMSna7kp6YjsY4PAJdGUNPMcK26asNhfw6rT8FaNop3iJGdyLF4eRqThQD8b6teq2iNmVT7HpTF8z3jw",
  "key20": "AAepz1a3EibRijvvAkQ4YEjzVvyQ8NpAkaAHsSwMTdbDSDaRi197ZKFmaabETaVHSuqVwxk6e8sUKzYzRUnFHx6",
  "key21": "5DHMdDmjigwQ6zbyCBZF7L7psZ4NvHA8XN7rJyUWnSbFwqmFAiegtoK393zm7Pj5dXvsdinb138dgnxyMU7avnFU",
  "key22": "4fdmEdD3joKT3yXr9DiZcknh3UDFtLsd21No3yQUWYFzyqP1iswvGiPYX37WDuhixU9zsYS43L6qssG3UEUKsJan",
  "key23": "4hPvR5Px83qu6JPyyQ9EeoJ1Cpeha8vqzsgM6jjDbTp9FimhDH7VKtmuav7zeg4SaGKAx8CWVL3MPQtRz9aVkUa3",
  "key24": "2cSktmSMKnZsdT2gs1zQDCoRoCc64KwxkoYFoopfFi4z4QrGPavk16AekMv7buocTYF8C4sid2svgUcqjYBC8JaL",
  "key25": "qmZQqajMn2G8F5Dy6RixP8pdDsgR27mTYuaB8u7Qu15xybeehFitLwbzm3iM24XGFXrNptUboRYy9XiyAnUNxHr",
  "key26": "jxYN3CNmMrExLD68csYtsKwBhi9oewjv2NMgJEeLL6ErhV9sYGjKHasu6VL67vJBwfx4ToTcyFCiqDqiMd5G76Z",
  "key27": "4djMioCBjxpUKdJYan5Bah2PA1QNHrsdzcZdXuR1rCf9mnpoBQSdK3qQj2gs9dToXmGve4CtkcY36eAnsU1Xzbgw",
  "key28": "3UrhE3h9GiZZ9oZs2NM7VuW3rWN2WbJbANxfRL7GMt3k54rG3tg7ZbVBV3Gv1JAWjeX1SAxj6UKxEh3oHwagjB6j",
  "key29": "45dXodeUYckJfv9kFmGWsB4pzCY9jC2pcULLdkgZuec1EVLCsVJ3T1iLDQi7uMx6V3M4i7TQdkc1E2ap1Pgxw1os",
  "key30": "5sZXGH5a1oR7poTcL3VybKk2PQDbMAaiLpjqNQYRFYwQptGeMCem8xdDqPzbjU7REivMXJLFFUjnrt4CNV3mWVQU",
  "key31": "4E9t4wsknui1xbHNHRxQRgRD5PBCTXL5o88R377rfZ6z9gudYwbDe8sZVGqpkxvGfZL4jYiRpnp9n4JGMVCaZxnV",
  "key32": "NGEUxvobQDMKwHmPNNxv3uFjF39hTT1eDpuaLc8VcGT4n8WXvHkQ7nrm1MCRScUebrBqchTTD8r23noMwSjYDGV",
  "key33": "2FGhp8AFXYEvfF7QjmcvceZCxnHtR5ofproBGaJQCPR644BNqM1pLaVb6TusX5NYnjc6cLpshQXwiaj5N2uxJDzd",
  "key34": "3PdGwf4fsNiyGBrazPKLweQAKzYh6vLKm5HbL9zRik1NTqsQhFbSDWmooaZajShWb1GVJGTNqHkbf7QjTiovT7ro",
  "key35": "63Rakpd9fgnNFswyaF7hYKiUv4pf5EskcrPy7rH1XUY7vXeavBq32j2f4qZrMVMfDcw4BSFcGSYNqw689wZa6g2U",
  "key36": "g4fiy57YdW3d5QuU8rfk7HroaZxXc4XeQDxp2ShbBsAdHAk1byfYpbSdKBcNvmd7U1HjotZ8Yj1Rr6Snj3v6UkX",
  "key37": "4uUQ8oGjWYDJ9gXScDQDknATTpLhSTvKifD1EsCvywyr3Zh341mHKBC8ooGRWUi9bkGi6uEHHMHDoF3PSVF8Drx2",
  "key38": "1dbw2yf5YSbNtLExdKdJ3ANNbDTiGJZszznptUFf4mffCJvEBEQzrpKrdykZGikhM4ciPBaon3Rs3HenFRFHthi",
  "key39": "4GLp9EPLuUcx7h2UEMsAtE6j7Y9i9rV9fErrHbQYHitoWSfqKwGQXEVCQyKh3RA7HXY6qba7tTGnxo4RHCJj1cBG",
  "key40": "5iqApPmkxPfG4jEod652goECknweT7x75puuYMmNGznwf6hwTycqa7ASnakC4CW8Jkrnc6DzrXtBt6PkB85mBc9M",
  "key41": "JxttxJ5Xm3p3tkMFbX6FBaYeVa8TmJAyGRg4yi6yCkU4NEGZ6RctkAcTvkFQh2jAvR5LwqYAmAmNLaHxXyPAJi1",
  "key42": "2yhCV6FntAmM6TNdsn1nTrzwguWM2U7AmV5eywsuVCQ1NRQJFvameirfVbVfU4jvrc2sxExTA2YUaay8JfbWfvXH",
  "key43": "4zFDoNqwYYQACSUupLGG5v36PANrhdpYyNSoCzDPsoAboMrKUo4vhEu8b1QbQERaWkWLi4tYhPtsrwCb9NyDX19W"
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
