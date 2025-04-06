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
    "X92NYyHWWRsaYN5u4MSUbFBnLMhoVkDxZMThsoeok6mg4mnmp4MpuRrBuDVwP59JUtpeZ9ceZsnYHtyfFsv4gnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VypVgWs7UsjuyyEeByvYhcooHTfotXNKH28oonekobaJfLwJeNYmMxLyiGd8Rx1eeZDRmyhvjr94nh8gHSUVuAe",
  "key1": "VXB2LiuJL1vJ7GYJ7ZkrmY11cgTDv6Xy8aFaGS68zvdUqU5yydqFTFZ8d1UyspicV6Hq2SgcXsdfS5rsQK2Avhm",
  "key2": "3MJPPs4FbSBc84A5jvei9ak1CFSohhzpt89nA2zmGuPaSZdsevT6Ua8JBnyFfhojkVaE7NeRnSoHfPdygyBhBJrR",
  "key3": "64U8ToA6mgLprrfg7NMnB32zpmnXLGvhBZzMUuuKiNozUkxV9jZjPWYEB5eRgyX1LghmGjGHHXCpce4tQssdiRnW",
  "key4": "4D2W6vkq8xv6MUmdMo3oXMGtGaugPKHLqkCGgwPXu6p8DkommeSAwwah25W46VbJVr9Tv2rXxXh9ZfZuwVsfeduH",
  "key5": "ZJxbhmLfUBeYTDuEN5KS4rzMiDLxoL1mdqqBD6ZiWSk7uH7Ps8vqkrXDTCnwCqwUwHoA91LoZxFyxVbCcXKrHmK",
  "key6": "CpZZ1ZtgVpimFbzKatGxxJCZUNaRVTpp8KArJEvS9MF44usyv43Pq3feYGK1mU447gXZAkQcr3iSW1vXT4WuW5H",
  "key7": "oWmwYNp6GsfwRndUC5ZrU43WEeBBhDsLoBD8xDDYm26oXU9iXxSjVmaemKCejkTYi8Lr6TuGjmngFDobcZnw46F",
  "key8": "435t2PTUQVfzZMedXPY2X3paPnAwk4G8nM4p7JA16M1j4ToqX9WSrM8ETubZp6vQkMigBqkFHCYS4tHqe23fRj2j",
  "key9": "341aQZy85imYTnXzGSKQtJLS1fw2kgVBxdTKrQnnRS4h8HuAiz18yqx9gCdnrDH9NF2WsbGWpUVbjEiHVGgxVKJ9",
  "key10": "iAofvxgt4LUYMmvpkoKQKMpY6p6dZT9Gc9JUmCXB3uapuoWFfPEJBy83r99VzrPXWC8RfX3j3YV1B19QAoK37zP",
  "key11": "24H33C7AJJ6c8ky9J4rsgbRV1Qa4atpu6LUtyNaMAZv5yQZFBHWXisASKyJGtnJTiHct244YHCHpVpvTJAy1EDDY",
  "key12": "5ZyDUPVvTA5hFcnp5QfrcruSp2HbKa1WWkmze9Mmxcb5FQse3yB6PpY1Di7eVaBTxSWjy1zgVx5wZyjb3SK6ppcS",
  "key13": "4HSQwxbMjhgydTLm7Zu6W5fP8syuDfC5TiiVt8KdG2ufXZQ7nq8undjHiQZL3mqkFNfpozi84ELYud1xeeS7wJyw",
  "key14": "2FMgv5Qgp5nnUAhLSasHNejPFt6Uud9vKEijf7v2vmLgDTn7Ny1cTJFg2AhhjzjjiVS21LUfaMMPFX4YNSn1Mkyk",
  "key15": "xA5txK72S9LrRw2xkVom35eNVD26fzTLRCNEbjbNAVgc3xrzzd9hwgU7R3N54QiXdGufg5Sm5YLKUdQfo4LVEf9",
  "key16": "4tKH43oS5EDKC9RKaYpK5Ypm6VhjSDXvtDtUbgWVF3eu66hCvtX4zUYKVb1m9foZ9PxDNk988rpqdwnUgH63gktN",
  "key17": "64jFZDd8t8B8tNK1CX99NzoqU3bUzfn6R325Uj7xXrQSpyntse2rx1mKGPo8AjR3j4fZoxhdbkiPfj9ZhMEFvaAK",
  "key18": "4WH4sk6FAuXDoBEPEfQerPH9Ga42LavHssWMSYpRgUPvv7W657R85YRTx5XR7yy7uyCzMPhvQmfKAB5vxtQ2Sqsc",
  "key19": "3xHTB6QD7E6q3h3TbVykeE4QPuLR1dfMxxDFM8SBnuypovs9vc2aErNnWjwcHKuBryysF7nasRb9AnPhdgZCLnT6",
  "key20": "58aARhtPLLqMJWGaPAFfo5GPpvCPA64hvD5nwDcL3MpSX4u2tr3WGt8mMAkynaDx6Fz5LSR79ZciEowYfQVkCfap",
  "key21": "5TE5TDUiCX3iQHzD8XwmLJMcgw2KtnoZz5SkwgHp9XTidwwxni2EDbNiymVvPeSNtLc6qmFbFtKSo7LojdQcaDcA",
  "key22": "7XAf4xh4NGynQnaKnwbL8kS2pDQHfbg31uUTHwYpHdDtg6NVDf6uCdDw4VtqobF3W4UwoVEqjZfuVPLTMWmiDY8",
  "key23": "3yanGQCb5z8RmCgL8KqpRpft653EBCJ8f9gPLobo18xQBxZhaFJpj11Xeezt7HGbStevVyYB1bPq2nsmbUfcQJSD",
  "key24": "2DegoiDj4TDTAGm6QrhbzfSX1ty56C3qgMyHTE7h7qY2w1Vrv6GTdk3yzqkwzDgprvGdAEap5t9m6LFZHYHwPWm9",
  "key25": "tjo3Pr41RkBnYvg1h43Jp9GMecSz7iqRgycET3Hfjbd4RJBWETL5hrcMLRxUp4uSCAqG8KLHBMwdfT4r7gTbozv",
  "key26": "4pdotuDQnFEdRJKziW12nZPJHAtpjeaa95TLYc1ZSAjWHmjz1P7yjespf5tynT1gReswWFhFmpHddpWqHDRqy7xi",
  "key27": "3cFov48fKQRKMkmnUaaQZhDM36QvDgRwjK2zCYGQMfda6Bc7c8PGgASCQG2YZnh3NkW9C32zjTtw1AZsvFmfJtXF",
  "key28": "2Mgt95cnHXXNGWjzWSAtRCNP4ZPno2WeXmaKkNdAJQjCUrgm9mtXAuA9VkctTfasXumMvwCwZPVq8R6PDPxVuLhY",
  "key29": "2YiHK1ALZJp9g1q3vACfPmbZCZpDnUBSJ4SWuUiersuKkX7TDpCLUV3Sm9LMoUbXM3KWUR5xFNj1ZgaVUtCBYo7z",
  "key30": "37hdYKoedY6kpiD7jHkFGgkgZFoSHbB4NzGJmGXLEfhHGkxeUdz3MVuJtFr9VyqeHt9ae5KD2f96mGjfi6XKGw3N",
  "key31": "46NAzmZHTdHBEdVhooyN7Fco5XhJhrLo8Hkk9vA2kgZqq9trQPyjN7Wf4tuqQ2zj8JkGdorsX5fTjdDJM2HyoERD",
  "key32": "66nGSJNCa8d4nNSgjBuUW4mh1cRjenBHuaDcAxMnQ5yR66aGdxMMQUshzwBFuQhSoUPobKKvSajX836rkhX6qsfA",
  "key33": "2KPD4ks8ny7GFqoZGCceXfEhqcYMWT7ufvpJvEyxq21KPfqZk3vQpD7Xf2HpGZLrN7LUr9NeJuhKT2opwTeEBhYt",
  "key34": "2qY2UsdP5jaM7fvqxVT8Lvk8hLdJ3FrdopyaikM7JnPk3W6MyXi3XqbtZ61mnPZ1vanBnvAjEyYzDdRVwSo4pkPm",
  "key35": "DofQeb2xVdxPcsJJz6huvv2cFiqDHKyVZpuAjQgACAK2gQKQjNVXCAfAL6x3TPTaJMfgYvE75mYwYzqqsBSRRxT",
  "key36": "58jp9aURh4cavZi76TDst3VguFcA96Wjy5PA4UXhdo3zkpZkQxuotjz4k3J9vAfVZoVkQ6aX1QLNDgYQnFH9Aeoh",
  "key37": "58Q7mLK6nYTugBPcPsD9Ae8PpKP4xFkC93pj8bmgxV4CtEFDHdXip7tLCptAinq4e5wBgPfq5iR2jWdphUaf9xUK",
  "key38": "3e7Mv661TZru6Fbf5TRPZbA591f2AL8YZAZaoaMZB835L3BvB5wCi2BtjHioUxHo3VBqpFjS1XBSraZVmStPpPFX",
  "key39": "5dwkF86jigCpRU4FiGSJxaAtkVHxditCMgXtcesjCEEgdS7xQ3vnvcJcEUgnTgdYJaMjhzANckFMHEdSQbpjpoxg",
  "key40": "5cGhKE58tvH5zmBTveccaekC4i31nt1RUQCnMJcqa9PujDkhab25qCxCXcu9KBqWwVg7y95QwJvjd98sRMLQWAf1",
  "key41": "McEAgzMKmXAuJ1kNjprhV3G3j79e1Fi4XEuemRTm6eXzMR7bCeEAN1qqYqgXhxe9ptumiaEtRKBsTZbzuZdNF2i",
  "key42": "5uNjgXBZAAc2XLQNkYQK2Q7YSM4wtaR1u6DA8NJApECWxwiccVk65nsdFYsGvpnVA15yAUyU8gnw3avWpya2XZSp",
  "key43": "4eRuL3cxANMNuYeviCDX3mPPncCYnhK1nWbcHwrhQtQabX7Ud39JJFU5EsFzN8MyzfzSBkrwGv7GLkUByzU5NuCr",
  "key44": "4S4a3HxV9rLkGiubpmeandYFXJziy4BXBAWZdgAUTysUqiQVkyT9RmjU5PHZgR8j5fhu5rMKiJQoRqV7seMy14ii"
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
