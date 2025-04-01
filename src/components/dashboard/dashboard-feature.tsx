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
    "p5iVHFVGWRnh7h4XLy6eAGrbwmEnaWAmBjooHAPznX1FRmKcU3TkHgypfpepdw3wjwkCE9p4meyDjeCg7g4AfBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqBSLEXT8qaVR5byttKSir4qRjonQmbDAk8JNZBzZNbzgrgMiHVHqpNEU79bh7k4aREHmAD93k9FKyxyrXCPBqw",
  "key1": "2LrqmSjoAtfDuAFRmJqx9LA8RXLeZujXW9NADbScY9sQbyycV3DgsnMF6shvf9kw5TTJKWbpP4tg3DJ5nic3z4E5",
  "key2": "5k7wERDmBiQXrjVQpLR2V9JYrAUoCSozBWei93ZEqgirX7nygnZjB4yVgZZg5SvuzdnbTc97qh6ao9A9SHLCPk48",
  "key3": "5ThNUkXLkeSBJrpFR5qJo84i8pMJFdcPWwYcpo79Muxxe96smBxDYZXkBi4dQ7qfQFCDzjWX8j64rCtsu4QcaU6J",
  "key4": "xmvmKknetG5EdcyWkCAPiJu2FERSeGyu9UVwDJq7D85w3z82dTCzbYpfZMXfbnYph9gXJroUKFrmSJFoQKA7BEk",
  "key5": "4bGKtL7amsK6PAytcGiX2xfPMiZuFn41u6v9b5c4UjANWpGAbNUBKBg5AuL3iry3AoP1EZ3HsqE7853LJxM8YZnz",
  "key6": "4532iVQeVxZyezSgSXiUVZrD1heJnaM2hhWSzB3fT5fpAPKvGf93xK5NEKZMjJwChdFej1PdVvFZz71qJrw1GTrX",
  "key7": "4ZWAW1pFAatQhEzTuVFppUWJXfeYFK9Aqw9RsU8EkhvH3mgqBqwpZM1LmizpcwRCSfizz6qQL83bQm5tdv4UKKNq",
  "key8": "4iRD7v2TDJJfKAbggmZ9BrvY2iT2UqcanSzajA8mhdAQP92EJEShcuMVdwjbMuRB1svTLsUM2YbKgSkFfE4otwDe",
  "key9": "4QJn1NVQJw6qKAm9Drv4EuXq8czkDjLev2pDTsiPSDpe5z7rrVCg7jQYZgTcFq6ts7sH7X3mfw3PCuRyA7F1xdS5",
  "key10": "2FCEVa5MR6gvfFUY6fu526mmwoeGSZ3MEkUADRmBpBckZXiA78pHz6tcqE7G44F6APQvxnmTcfevstx6RtS5pAXH",
  "key11": "5SEVVWEcHsBrMD6wcN3hU7Ka4i4j6EX2qNK2QrB5kHn5hgWVsgUx7PyFRutHiQG9Vk6UB8zBLLR2Kd1J5vUGnDyY",
  "key12": "kPLnRQCh8g1mUNWyYMeYVAMPS6RTybqy2fa6u1YeYqxh2uhE9ZJJiWJgs7KvMEDZUTuVHbCXQvFX5EvEeGmAYwY",
  "key13": "3sDc5ffxeDMiGV4ALhUVkVk1bh6oSchF8HW51XTdU6NruUqDX34PmwT1EnqDFpBE3oC4ArLKynQbFWPRZTdpZrXV",
  "key14": "uPfSQE1pTPLJ6HqLqkiZ5k7DQMa6JLR7iDtGqUDMau9SgXwZ7H7kVng324KohdoXXpo1UtNSqj98ayeV4XhFYMG",
  "key15": "4mQxbpRFJWXY3dQK9RPyAQV57YFTE5JYgqgAdm5bdUBuPu8wzewy74GnR5zk9hXjrRsxmkPmPQdaw5DE2rMeygyv",
  "key16": "22ytzcP3scGkKytRH3S7aDzgeSVAycPSJowaYdDEMGYGMUC6FygHKHMXs6cd6fcQhc572nTzeB2MSqsdFA49kEHH",
  "key17": "f7JSHyWnbPPeMbGehgZismTLuCkYZgLTAVQWHR3ZvzXVCszynwAEQ88Z6N4Ytt4P3Hs886LoCkHSWfiNK6fMx6o",
  "key18": "Di3DPP1FvfZfHtsL9fpELBrNzsTSbJ8vr4Fds3QSTt7JtCFSmvLJA6DhFx2YidrsCN2cTvSNpFJoNw1BwfKttTc",
  "key19": "ayFgNrx2wvp7LS7NZd8rN7sXAwvSfJ47fWPwG1cBepvLRPxBn9rRHthbYjrhAFSDCamxVYwc9g7LFv6pAbbcn3F",
  "key20": "4UjD6Fqh5jEF33fT8QvgKGEjPTCV3EoKZPbjTMM6wnQ89KHGzRs12xsETLiGErUjqPA1oW9yPkPperEkubvHYtEd",
  "key21": "2w3hc6992YCarjstTnmn6EBX6MZ9KsaXNWtQ4UQUv9zqqMgfZZUsroFRjnowST1oTBwCjBhuazqhQq1MKJ7xoPU9",
  "key22": "4Lb66sGzfFqCAHJoikRWFkE3epgoW1hMzwDsreYMP8HSgaiXN3ZME4FfsuhNsjQ26BndkgYhLsCYcJmED158GJNa",
  "key23": "29B14g3qBN9iKJ5XCY8ZfxXSJANkwzTRBAVME7Ex9BbPFL6cKZ9HP5GpwaDm93DR8qPNStyMTMrmTUXdr8bAJtmF",
  "key24": "2pcv1cTnkP4kP2Nc8YVWTh2gVkTd9ZEeqyrfWk44MkvywRYxhDzxzPewEnY7YbBH5LvymooaRS4iUa2TAfX98zAm",
  "key25": "3cYoEEB8xy5h8zcwq8vZ9FR1kqegtfw5NR7s2kdaVq9X2FFQ29Gyts9xT3T9VBwXK28znQVCcSa3ym5kGDyBrmj8",
  "key26": "3K15FvYvjKDYHUwao2Xw3iAD9skzsDrwULQhDxssRJmgRQTUDFPKquhTSL5Qgros1XBTPU5DohfsEujNJgtECnMt",
  "key27": "5NoLzsP1YBwT6KD2vdJ9ZAZ8fjtU2QeSr9J5tgRQmqaRuN5R3sL8J1NvPS6X2SXV3GTKkD6cqHYYCis8TtcsNeDe",
  "key28": "6bTZgD1o7n9EMfNZGCqqDFqhU3XFrMU8aQZR1cVBcnURD6mHwGPvLLkyQKdeBxVG7zUQ8hBTYDLZdbyANsGvH2G",
  "key29": "2uVcssHdhVpo8iqeq5ck5YYHMUwppNzECQsptg5FrjBsQq4Lu93jtgvC4pMbZUvPWUiibLj7wXriRPWxBPAZ3cCH",
  "key30": "3cUDCvwEf47aWNL7nrTr7g3ahXutEu2azoSvdAiCexgjCHjPrifioUqxmy6fY2EH7ppUpWtNUCiozCYsD2MD9w3w",
  "key31": "5mnV89u9bimLw6gnxzqihebMwJpBadZDpA2WQS5Vy1VM3bbWEezcwWeQJyABZCdLxx8ZdGu2mKRwQZ7RW9y7dA4v",
  "key32": "4Mp1RZsrnWuwrWp2Ae6bA8QCWX35kA1P1kFLwgnufbQrYnAbophhbfGqjdZpDd3PMRbaMF9UAszMgjBtAr6U1eUb",
  "key33": "4mPNjHemum1tAdmHu4JQWmsZdY9sJvJD6B6QQomz6UBUEHseh7FWwi1h1oGozQUocPLkdzUfUWUmKchMCoKpi4jy",
  "key34": "5ZsnnBqXj5GoS9ygQrsZLLZZXQ3NvxynoyF93FfZPqPPcZcWbSxztvmgHtJSMA4KXTtS1FD59PwckpZHGWYTeu6J",
  "key35": "4RHjawbK6qAZqNqsfdJR9oHmCEfkycXZxR8KdtQ8gYWEMKA4XHf9gZEiPyv4xRXPawaFdii84ymKAzegW3f2Lw82",
  "key36": "EUoKevP5csxCqy6Z7jWjhVpQE6xLyfMFdEgdJiGXVSBLF8Vd6uoPi8G1ztsGvm874AnykVa2724z5SCx7FRVCUx",
  "key37": "G8bjwCk1kd3MKbUCLgh6NzFmjQqsPG4AF5UVyAsFsYo72EVKSYhjPYgLmhuJqr1LP6LPeKu6bfSn6FtyErYxt1J",
  "key38": "5K9dagbpzC5XPbCCwm3516E1FKQs9bWL6yVyaiBaV4kXSxGmJPcZBVidN3agwJ8Lqj9UBi9fmgXb4zq3ecvPxvXp",
  "key39": "46DxTnZ5kZjez3TD2D2DnoeL2963mhozoY635VR9iKA9UCR1maWDz27VFMeJyBNvo6QLB9eqGqXSWikfVKHTfFdK",
  "key40": "4n9kXvDm5Hvt39jsMDv4aG28BPd5YERcY2yL9si4eFpMeYjEkz4RWRo3M7uAt7nj9z3353fRR7DQoLRtGjH7ao8s",
  "key41": "KHuQNtmnN1hNG4KtZhzF2DPX5Mra7gd6gDwKuUT2i5GjejG2nAN5qa3FZChuM8dgHCnAjex6SjUoqyZuYFNUPQy",
  "key42": "2UD3ciatKbRmTGC89jXUZX673SW91UgJNva37aQFfDJuE5Jd1fSBpFuKZmdWxK7pwB4uykvkmVmF3az8a8Yn2PCK",
  "key43": "3WC1TSQiWyyzqZjjYLAFZeeDmZ9gMNhiHGSifUsa7Cn6RoPzQPcARuMxFgNcsWNoPPrrJqPdL7X8KZ1JuiSC8k7s",
  "key44": "5tvnoBv2amgCuRvBVRzaRiKmLUJs2vRMzeLMwRQmxB86MRPJPqGhAfha4uArisjAHC9rDDbMQyEViTQdEHBWhFJA",
  "key45": "4LTPMJWxoSyRjqGSfhuXGMnLu79EFp2Z2qVoRCFkPM4xVzz8FNH9yTc2MV5rYZxp4F6mzrKngVuKbq4pNrS3fB8N",
  "key46": "5k9Dhzc9jinoHD9fqEmaRg4V2nn6FoKdWrcZZCfgbKx67dLiwKFmJwya7YdYpJbMhf8HzuBXqR8aea1RSRo1QSmB",
  "key47": "fpxCG5vzY8xC7xsQbnHUEAxzyJewFcDz5kQRn8Gpuh9nQADfT3poJeyfGQg7rA8KwuL4hSHvQu9kyQhM9TUvUVV"
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
