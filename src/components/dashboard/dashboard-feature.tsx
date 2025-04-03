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
    "5GGYHRsdnRHHt1aEFGzhiBAwdFJAWrXiS83BsH35TeRutGu8Ni13C64XxFjhrRKBS2Gm1neTYwb3thXbnQZvwNn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuC7i9otFd4D93ApWfJwko57ci1RLFMsw6FK2S1fU9FubSm4DxiQJXesEHoXjTk5UTAAQyvFRenvTNyvFKjosFV",
  "key1": "2wvtQnBmzPHNxuqXMzvHQL7FrNLETEtTHuQoryehT5ZRM5Shkjr5uRZQYbUza6T7xPwJsy14VVXPCf6J2aJwJTTF",
  "key2": "38CTgk6SEPuQq8Xn4hTCQcwJErbnnUBb1mta3sLtviv9P7vXUhHTDk12AmEPArvrAGP94DHXNKbqVTmiw1PNJmd9",
  "key3": "5k6hokY27bDeJJPbWmL6TBW8c6d6QD2TEWGJLqzm5z3zHp5h1BqyTS1vqK8NLdH4DmpveND1TC6GRQz2Zw8cehwu",
  "key4": "4y4ehB6NzDb3dcWqAMpRUeBW6vL7igpNrVEXNEZqB3PhrB7fCDzhzRcdhQf9EfuvYiniJH2jfUDw6A4KudPxYS4D",
  "key5": "5zfjoScss8XJ4mFMPyeoGpt9Vke1SrShF3xC7Ai5kByKrbHZrrXqohKYR9yTgf2qSf9EM8uLf8aikDWr3uRHMSPJ",
  "key6": "5irhBZHxKuyyogCVVBRjXWtdAjEN713f8VWUHd4MUQWGdADn6JoY8nQxT94hzuF1F7wPxipZRxR5jCF9n2y9NxSX",
  "key7": "4n31LH5rLNpGzrsDG7wWXQoRo95vm781TTvKL2aKLQbbaoVAhTQg8HnNKEqXdQ3xGgsCrL96e4SUkksKerZnwZvx",
  "key8": "5PZ2zgtjJwsboKr2YcrD2vz2DgDaYjZsVMkj1XrLD5M2JYpdbS1SH7P9HjAayrD6jsWxripgysAZwiaQ5aPg7pHq",
  "key9": "ELrVYCWoLW4XoUinTf5AywjA516DjvngSTnCr7VSGkPtukYX48bW728pFFHTT7YnuqyCoCgfX8q24iXBVB1PHtA",
  "key10": "5AcHTLuvGwKbZMQ26DjfeaohNJ12ooXwCxooGbVKvvDtAQ7TRhmgSqYFM1KVKWTtsxsPeWCnRRY4WGvHaE8f6k7a",
  "key11": "4NQ3NtgDdanAVspeq6hAkRhjhy44qP6TPVsDsGwF99DpYPYrRnKqhU1yKt9PWoBvBmsesAYQ1rEEnqZdQJKz4gQ3",
  "key12": "Vswf1RUtScvAN4jnTnXceyMrdmgDHR6hDg7vLjzv1diAyppL8XuT8wkghqBGTPLx5oEYVP2QqRQxYUA4Ld8pAgg",
  "key13": "2ZGp4TYrGYLoH4389BYGQGsXq3Qy3MCyndJFzNc84cF9j7ZDMEe34pSw7iuprRkQw7RMQ7jTtTVGgB5vcMzJ7QS5",
  "key14": "2t6drnofoEDkxwM6sVsEBXGAWSTDbuekfS6FJP8QQxTe8siMVg6C8ruvG7tHCNFTwj5TgxVXVPU8FVvoKXoCQpWr",
  "key15": "3e4i7vJdjkqg1Zs9bX4Be7LLWXLgHcvuPo5NZSfbSpaUVq9ztcerDWSRTfEUfU7ZxUR2czZFsGwoQmM7Y2mjj8Ee",
  "key16": "4vg9TwTBH19Hj6sPFwL37uRAiBauVvpYyoHjFbJDZNMq4ZgRtzdvJVhmjif9L4x3HbmKuetdkZyxMq8hNg1Nnqos",
  "key17": "2HzFoDqte8uuhDNnz7B4XcJanx6KQoYn8Ec7SipHr9189LdBsQJwfc8QAzVUvX7VTBV3fiyeyYe2HH1YVmCDePTv",
  "key18": "5V2DjtYA4BRQ1Ku9CrbjRJnyz5vekCrYoUBAGw7VwCjXfdWpYwuTJ7A9YDSWN8TU4s3stEWWAQVSZB7rQVdtFNfx",
  "key19": "48CejiuNbsZuFbKbdWfQsfaYEcq26DEPQsinqjSeXjN33x7Q41fFUatRbgRFaWv5p3SrBaTaokiyJ4MGtMjEQirR",
  "key20": "2E1AYvj9HimRmBa4Tmxu3cZJuAXXTDTN9BzjELPWoqYmEHaeWfVhq6Bq3dejuMKStgAVJ8U1ADgAHre7atcjaSCo",
  "key21": "5qUYAFugB6SwU5makqN7u49pwPmwesQyW8jJDV2vmq9ADWtUiwToE2rxZWnqNhu7gSKNeEKfUmhFcSfeMJ5d7bSf",
  "key22": "xuTtNadyro4QiTGnwijNvUJpq6mEvMav2ULK8pRj4QWespB1Gwe8uRCArAdZ6YtStfQA9tgnpsfs1jEH4SnSqBi",
  "key23": "5gjA7S4tSYpuahKq11rULXeP2YzeDnSW2tLsu4JunNKsB2QjdHk7Cr2AbGdAzYgaQRqNnb5dcjNkhKatda6yGnHH",
  "key24": "3nk74V6NHQzghqGT9n6NgnJNgPEafFKvdjNwaZNg32na3cBc3tnpRbPfMYyj8i9zFVqrPDkmX3JAmNKEh4R49KVq",
  "key25": "4mjThF1tkSd6ZmmBA1aA8u3HPvuaY9X1PG1pWsJqHufZiWH8NfN7sexS9iC1pAES1grsBfhsEFDN83H2yTrtHZWL",
  "key26": "KJx7H5JP4XC24BMcmY9WqeugugKYPj764EBiPnhr9yZ6gyksH3mZkqREb1N3DV4PtneerDy9tNV2jVprWigAdi2",
  "key27": "v3rCaRHEJNCLrchQNv7PVtQCyTh6CUPxbdxJ4FsNLBZpyXkra5Jtojuf9axD8J6BB9oxaXQkDZh57NjuTHEcc6V",
  "key28": "4hchDmVhJ2pAZR2npRwR6sihVCXrdaauM5dxXJqy3yJfAMiiYj9hj1n9bo9UUB7vJi9ovfVsDnp8rva5sTZLTMuR",
  "key29": "2a6GrrHNZNdw6ZdHhUfjAePVHcNN3oUSVdxWw2V3tS6XchA7NgDBLUESCsKiJTZsaJjMC54H5BbmSFBeVH2XfyYa",
  "key30": "4Mc6sT457hPiMaPZVj9VhhpKRg3BmgDKXyhnbfsS397CEx2ZApHaBBn9wQtXR8PjzkSaeZ6CVzjLo1KyDKZZiE4n",
  "key31": "q1HSPaoKbXYf1RtrqXQgZd2kvJoEd5au3fczkSr1oPj5jd69EX3q9op9deTWCum4V769ZskEDCZtBWZjTNxXmgj",
  "key32": "4QuBmAgBzcLQjANZisLKSZjTSz9sigKbp1KJ6Mpw6HkSvDGmPCQHUuS7ZQb5hhLLGYzEnovLdtpN7kBs9fbMvsnn",
  "key33": "26jrovyTrF1vyiXWENpQSxDYBqz1Fnawvp5iFMKr2BDgkrYgbWzJFa8jxf6ajXAeMh8ikexfCR8CAezxWJr7vKLa",
  "key34": "3pFE6VxhNekfFhHdCyewscyE4LnhQbRLBuRAcRsUMxAskofKMYzP8hKHzok6bds6FubvmYRN6f6E5gEVK2VC9uiq",
  "key35": "2Zijz776db5ZPstDS81McQn8nr5HgRvBdzU2uCcDPDzWeTK7L95QXyqoAgZx18uJQ61u9RJtebwxFXDgsEMYLaRy",
  "key36": "65V6ZoCsDZ7WqShmNpYTTwQaVfP1qAHVQogxMaS6Ux9i9cZTkU7v5dQd8JVeMkctLq5Swdd6By39RkWcKZqkVhRV",
  "key37": "5pEGgC8aRqCZJZTaV2bmA4By5AqMLVHLL5DYTbS9opnW5nkVkCtLPf9SPRjeKDGKGZLNrPfDrAdvRxQswgBjVBQ2",
  "key38": "4VdN9Hj75E4qCkkE75bco9TBip3yvdAJVqPBXvdRvGEScqytocjfmvhRPE11qWbBH8tzWKKeN4pqAiBvgNEDxrCP",
  "key39": "3qYYRUAf86iqd6VCALTevpcNjQWo71ZemUha5U4gSXnQnKY8ce2Xa6azreGQkHLKMGJrocb1mnyB3Xf4ouo1Qwei",
  "key40": "37z2j7jM9FKS3jnxzu6wvVGVB76SgoCNtdmJYzvvPS9UKGtuS7aackEokPVh28GFGrRCVXb3U7fzCJE5jr2pHrxu",
  "key41": "61TdM7ju25wEEecfse5NtDTCzWZZP9EMFuj1F2QsrL5mVfZ1o5Tz72aJF4Z2VMBUUoLcaDuc3uQmr3Sb2gGYgSxL",
  "key42": "3MYehRyuNxQN7o9dmSv27DDoDLwdBWLDBMwviYFfep64rhPpGRir66RsVG2tUBW8sxoBbYLEsquRrWT8idopZxcM",
  "key43": "PyznTsaLGtuzY6VP4ue2vqmQndDze3ZdEaovoxBYshNz2Z655ceF31Gg8uoek9sbyfxp6mEsxftqSPacMgNhuY5",
  "key44": "2H26PikNhJy7ok4bWXsKYJMV4zqjzkmXaAsbHbt5jaFdoKuYWhr5PD2csCjE8wGxWbumEgy16E9kU3dwfExFJPyU",
  "key45": "Jsa6yDVfG4u48t8WVfKbT6uNkvh13zsLFTQE4TK9Kj2RLkovrQvfsBd6HXtgVMxMgyfXdBNAgB8DTJPxAK6Jp54"
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
