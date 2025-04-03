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
    "sfurzngdTSY42YVg1XvYDRXU4tgZ7KZxsiDXxPMSpct6xH4FohR4JJvoZN6w8WXV3xyAK15PR2qffZsJ9t9euhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWEipJAj4gDAJSE8pKqCpCX3jBxsKS6585eHZdV8UpmP1q1aqEMnPbL6VhGtktiv4McPDnsdqNdAsb8MMvfRwEa",
  "key1": "3AWmM9Dz5QgN9JUVWHveuXt2XaKDk1U67JC92Ebo3ydGSuWiAyt78XoYbi4Sk61WM2SKv9qut1ncghwTuSusFhZx",
  "key2": "rbfah7Q7fEznBqGthZDyh1Yj5RxVVmV7ZnWVM3EYUQ4CMqSmxiwwwLmNLtYA3Wgxs7UUYZSTFy7tFyrUnYQan3T",
  "key3": "59ErGP3LD2UHxjVhLAaXc8YrWqdtHrtRrHSKKbxjddrQPjSd1Ux3NDKcxC7NWsc1h3F4okmQTBu3ZxsewNiUpNoe",
  "key4": "zjiwCMXngdQ7Vhb8ShYRsJsh6WiTMfQ3MgG5N5ByH6mC9xmjY7xnj2RgNw7PumgVkbEp3qD17Y3iH6XejtVF21g",
  "key5": "5WvxtddgfUynmj5DryP4tNri5xgtVqjc57ZQFJKgMBgYJG8nyQKYwJujbELg9MM2omgyqYfXhBnSPWFB5ksvEGif",
  "key6": "xx31mGTnufe1UereT7fCYpvQRVdjApR8dmmVZoorG1GL4bVQFhsJoQKbdHUvzqwgsixBzPsfiTX3NaZgpt4Qh1b",
  "key7": "5PdJkKve9kqn5pXRWzXM1nEGmno9MmEDrysYvKCbz4mwBqjasqi5nzgDeWscHpGiuzNhmdBtjNTXpSY3RAKAV5KD",
  "key8": "5xH5cAmazK3DhxA9VP3yi6q7Sv9vWVNd5t9mSRJwzZ44tAxXjSuGF378iwYpfAAwKk3d5kQF64JAHyJdBm1nciee",
  "key9": "5SyzXFongFf7AwoWfVmt2n2sEzT5yKEBNCudVHuNfhcKFApTuk6cL8k25jYaiG4zbuSC8xMqd4QvtansfdSwGzX5",
  "key10": "2wz6P3YqkhQNKJphPfZ2oNKJiHEVAi9zTtozhLXoERs6GKwXPDSD51QC4NHBqYXLpQJn5gDtwRhNCMG7Am8Eh39t",
  "key11": "5ufV13EWWZArfGaszxbJLfHBXCcUTda4tx5FTGZptcJTKNPpDv9o5fYqJn1vfv3R4C9aZh1aMUtzAU6EzW96cMzG",
  "key12": "3isjrX9LdB7wjyycLiq6AHv1w2a4QnAbquW11vrTEjsJz7woWcVzf1Z4U3yGZVUC3rNpr9zRpdYGXLTGngdueTYy",
  "key13": "5cdDjFLg6ygT8fx4B4ZEYAXrHwXafUSfcuQGwmZPivvETRrbL1Tp22KRDKxSp2wYgtywxwSGrNz8yHSc5LWmKDjc",
  "key14": "2wYkG5qEhhTuVqDrWBbhbrrdmBMSugiE5V4FJYaZqmiDqGu3b19MxgfrUnNLUBoFS4oydNVyWB23WRveQCgFkPFc",
  "key15": "2QG54zFAfPWWnRnwt2Ae9xQNuPseG48TPzSDciAiGHzDwPVXwQDi481kkP6xxxfuHgQfDXD5rrqJTLNM7xrgkFaW",
  "key16": "5NAwBxd4zfkFHiVzv14ekHqXEdhQkyWoppsXunKhht3V1nPzm6Jg5LP2HsVn314Xo5xUyh2u3jfRG28nh5ZnT8R4",
  "key17": "4Dios74cyXUYA1nAq7csTPvBD41i8XJGReGS83Sw5Gjaz9pdAqKbFiPPSmpfaGpDnppX99Cgq9xKX2Vb94ShGNpF",
  "key18": "599CwDBuf8GAxtf5kaWABDHPWF14fC963KhrYsY53q8HrYAwwGVwaqBeg3sniaXuETVjWHw1NamB3RALJUcsHsia",
  "key19": "kw2z9MRh3ihpaQmPFaGtohXoHRUrFL1D9MeDXaTrMr6jfU8wFmDymgGjSpu21kSWjci2SqByJUMsei1LnT9AsVx",
  "key20": "2m4KyJ9ZPt9hS9kyjKm53PE1PyvQPMh44nBGkEngDuLmMxWbaa8KEVj6qYdNZ8D78tmnpCYj6ZvTn7r6jZyoizrf",
  "key21": "33p2uZLKAtLMqMix1h72SVkE4PdQi7GuCptKvstpnNo9tVD998DVjJDc6M7TnsNJQusaCQ2ePamj8BYsBTEWAqv9",
  "key22": "5vJ2WAFh9GZJDP1tyJBkuR6FShC8fyrfLTkpqVZMkABgkbuPnSRauv8a9kb1qhmigEzFvPWSJnPwqxDc38d2sz9H",
  "key23": "5YwFChZL4yvn5bDXt7sz8LRh3tLtxYL6A1hgLxmWiC5xGa9MQ4F8p5P9BuQCoyHMUy8FNN1EaYPQCFN4Mfo9tZST",
  "key24": "5SRGLXUbKNDoN25Pp2saiqiv6AG9kAEFWSnehf7QVyWuFsJQxXWaH4Qwww3zV62ozjDZ1J9ZHtJqYd2cZtRdLpbP",
  "key25": "3Px5yanGTorZ172NbgFyzyW3FUw6miXUvQEjyDFMdfxQ9EvQoMqFBrxyZ3Yf1YRwpJi1DAzZuyWcYcojGZzvBbhu",
  "key26": "4SCGzPVUg5Lr9m9RZf3NdfXvhf2Dn9nYr8s9GmWV3QAyG5FUb63WBCzZxqpSTqmBk4924ynXg8Yh38D2iiNG2Cqe",
  "key27": "3NNDXbBAj36hjJmzXB1LuS9bnfMPWrBCdSe79cekmaiANcuKL8ih1QXm5UBt2bn6MYaY4C63zHyHjvNdiKGPmxvh",
  "key28": "5ZxKVvP8Bf9fyh3s45c9VGYevPShWys7WLibNeV96YnHbb4jg4jjWUTuu8wyFWrePPR5Wh14jUe9hyUEix4S9ybm",
  "key29": "Czq4aKpQkbGvvPiKz6P6HAEuidMQQ1MpMm9Xx72M1tdbTDBDTRmtV2LjQiB49ZaZhJyiJTQutAZXPrVpJFxPujT",
  "key30": "3Vd8NrSyyBu15f6rivdpBpu8q3TB3kdjgHEEoDqbbLt9ikoi4EFntWUDuCNa9wSvz1T9M3YyLSAmdHy6kWuZtWez",
  "key31": "3773vdAexJQWG8VkZVgg8PCuQEcSr6bUPdzLoiVER8FDHwGeETCcZ7mtVMgBAXQZKCkPbKKh9qUYEqcYXAZ4Czmk",
  "key32": "8GZrkY8LEdpZQovUefMCTKXMMBoCSb4WfWp6R68ThAA3jj4XgauvBE8kkG66pLcEbEXEZ39sa9AADkwEQ5T1ejD",
  "key33": "35JefeXvBzg8tRZ82Szt35RT8nsSz33RYS7j6ESAf9jyXG7n66jrwFpGUucfZ52q7y6KF1vQyP6YAqtjxPq8eTtE",
  "key34": "2MsLfSgcVu5rybWNon8XJs6k9HxNFYKM5TstY1yPiDANMBtBXjQHquBH3h9UQi6EbsdPVMAeaqfGgHMswjddrqVW",
  "key35": "3urC5EpH2pgxqTQQ5GhTNCmAoH5RoKo63sc9ZHddW67hU6XSmEMH1eoCaZJrFeKzBTpiHvrSZEEofCj1qY3xVZkV",
  "key36": "4YoB5HWqhFssqzXDe54X4kX6cE23uwNLjh7VSqGZMJti4UUWgCFKPc9YGT7BLFZUh547RLTKiNmfJvnTVb5D7TJ7",
  "key37": "5B4wPUrz4SSnjhSLKbQ23onoTt1Eash2gnivpiL7274AdeTKBkDK6owi7DVKHzAQ3Ao2KizxFtPSU5LU97HTVmiJ",
  "key38": "53JXLZuytXVKaaQKza8PyALqwcmzvi1cWmBnBvrWxeUajgxRvqwBSJyqiQscFG77YLKTVDBoUEgfybwEAiVGdr2M",
  "key39": "5uGMYV27pq8pHYJWR37C3pmLr2gpZviKJkCNZXuNmokwm27cmvmtrziQxmqyZSmZj889nTqYCZvtFj92RpdAv5uG",
  "key40": "3MVbuXudoztHYTacCqSAvd9Uc7tjdUX4jwdDBySndb5Gh2iMQyrW68Xx3mFr1m2wwsUxAsyRewWb8BkT7GaypFuP",
  "key41": "5tzdHUk88PzYtsKwheCJgQr3iyTp6PzwfwppD6m25SNPNvG3x8YUAjbMaToXzAy8XRX3Up8YLwEvLp7LArX9WLb9"
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
