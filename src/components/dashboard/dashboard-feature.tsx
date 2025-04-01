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
    "4puH8YQLRgRG6yWhoxcmvk7GTa7GyzRbhE8DA4zkdnMNPA18tqqPx4dy5SToR5yEAjzvHjCEMargdRFSeLTt9jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t18GWzkjUk4pdJHB2rwDmAtmZUQ6uvThia9vNKjRYhmvcDbZjKUKXGtNqMeM6JLjpAvt3kZaNaBNTBdLdJ1jkEj",
  "key1": "cm7ZhKGfiKeAkQirADpG1egaDsmboWmReLu4hs31RV5r8ZmQjBMKdMkHrafQnHjQJrJY1RvdS5vfj1VV1KFfviJ",
  "key2": "LsZzViymvtJP2Gu1QjEP7ZNp1ycGdziMd199gL5osN7YgocTwsT11LEMrBmVWkMNU6d4kvj8hsNTVYQN42U688o",
  "key3": "37qBYWmk5WaQqUDcTZsYoFdyP9Ag3X5c4Z8z7FGdMjTLgMpryUrnJD7ntwvfidTRLQPHDNBfcB6gmzz1wYGughEL",
  "key4": "44MrxzGBT6gTfeZw5a6FBQga8MpREqpE68Ss7QerLTbgAqrGaZ6eL5p5js9zQ4U3x5YGYiTu13EWRYZh47a2KtdU",
  "key5": "2MxT7qYEdnbcj7cxPzyFWHJhW3HhfJCCjmFNi8R1caFmaPAJQr9u2UQLp7ZEH8zoTvjunNsn7yktqxHkkPfkS86y",
  "key6": "3nuHRvNhZL7xruVFLkmyUXXWQXe6xnwNzHcbSHDdHj6gdSGWQbD9LExUoLWdxPb6SPDWTmkWPAAEr7j6SFjR4f6S",
  "key7": "9mLeDrB2fEiDpCRZrk9uKWPWMQFU1Z5nttgCbMjyFu4oNvbEApBqEmLiXhcMSfziQQpomRHmdJ5qnyTTaAmjbwM",
  "key8": "53KQXZuNnCC8MfJLGZNkMUvngcaHK96N6R76ZPavSLUHaEfbNNtXhUWy8BwBs3GtiWEscG6qYecY8wefCHL6d2Kz",
  "key9": "3kuRL4No5B6787hrKmPWQNGnKaxJTLaDctujwYMTBb7N1bqHqzU4giGPSvzsJMgv6ZdPWtfsWsw1pH2bHtygB6zj",
  "key10": "4zVp6eZyE8FDkw2jR6e9aZiFmpJp233qpwX8egRpKZPmjX2APug2dPExFmfbYtaoRJ3yYyaCL9mwFnYXVdLjDwBZ",
  "key11": "3tSdXGhm2KaY9cCAjJijYPj8ni9xKVVXMtRAMXDo4zEuD7rLmFsLPGXR2xYSpyePPqNo1uLXu5vJ3mzcq2c27NRE",
  "key12": "5JxszfGbCpxwLwdXnuFMoXeVWxXYwvBLPST1d1cNdcBq3tVkVH8X4onWFUTr1nsbPnRk67ADANTj8wY5ZRj9CctN",
  "key13": "2CcJRGy4thCNo1UW3wtV6AVEGuaMP8dwmUHX5i2JM4dJWMaNCgDGRkkc671fSgcg9t9mUFskXLgAdmAU9WyWEds5",
  "key14": "5AfmixoHrkyLN2oucZPZxzDmRvktPTkf85di5N831WgEDHDo1ZWeexKK5TPuJPVvzd7hQuZNZGWS8oaUNaGuq7pr",
  "key15": "4EnVt97Bmnip5RuHinWXHXFgESDvjNzrS9jJsLi9FV1rTnrXE9dSx8ezDDgLyftceCFcp3Q62PbvsTcXQk9VUMNa",
  "key16": "5d6Yh3C6CHSViF9MRRUKLB1muiSNd5RnN1vcasGvswY6Sj72VA6pqiuYPsBatjENfsgFhynFVt2BVBMFCXNq957n",
  "key17": "4F7nn9WWVjcMyrkDxBrtYbHYacqmCVYttZCZAXd3HQ3FH3GVivPHS4ZcxUQz8fLd9Ep18qNLMGg8bT9Kq4q5dkZp",
  "key18": "32bW6QVr6EirnU1zuvttJF1evcui9gbibpm6wAPFRtXy19Mm1KAWNkKELnmM6o35c1w8DkdqQB23uavTo8bdHPiT",
  "key19": "3tzwN7NdmwJ74w6Ch6qJEGw28TQiXc2wPUoev9aAHyHrujEk2C1rXpEnfKc3Fg7qpkvQc3WetdPGNB4yRczF5xRn",
  "key20": "4LpUpHVUNfC389WtAogpstwqKkchf8BfwbrdV19XHfHs146oBpywcsZudWWWjqcrezZAZ1nLWx2yUTnaYGBXCWNe",
  "key21": "22tvz9WB1FaPLZz7uVKaw5YjvuihqXpd2fHEyjpHf7YRFzLmB8NydcE13Y23nauzcf49MJLpknKqXsJi6M6ejKXU",
  "key22": "27JrZKXYAnvaXLhGFmBKYYBC1ARm8EPPyRnGGLPswumxcvPS5Ait86KCbCR5nZQnAL32LuAWtSMMvS88dPcUcfwx",
  "key23": "pLKsaLMAErgMJvoNhQs9gycZaZff6fjc8nUKAZerobHzuY8GkBZnRxWD5HDsMZ3Woe6jg2z5qFe2F11MaZ9SScw",
  "key24": "5eH1a6XHehFgXJ4SvmVRChVWiBqNW4rbReHqKrgBSWuVcwqnvui55fCxcyihUbYpDWrosxs88JFv4wvc6gojNVab",
  "key25": "337gB5MYxcZHQjXT65VJCJti6A8uiD1bR1ccqTAbqh7vG2bRoFp89H3rFshMzKeHDKx8DK7meuLCCf4DhBXuBXoR",
  "key26": "4yvcnLY1afWjp66KqSaTxDg4AkYBP28EsWv97NVCUwhyQsjRDCa3Fx3MDh9KT3td4JpEgQHGCwx1ocWDBahWXB9i",
  "key27": "4CH2wbLjpDvR3fsJkUN9u4RJQABw3kvTopzFj9Wn7866pUTWeKXGUfJLFkLuzeVypyk43EyaxrwBsYKBQ3jjMJpc",
  "key28": "47h6wudd8wseD3sYpff3bAH5XF2FfhEreJnkp37aWajiYQYHCzhoSTMTbDyLfWjVbHUYXHzzGrdGMWGjiuWUWCvA",
  "key29": "4x4xDLDAcUMGrsQ9WXCiscY1gcxmsx8ZuY2vTLDbK5gUXmmcKSTJMyuET32umzJShXrMU1CNU1uZFfpJ3uympiZL",
  "key30": "64GUVWanAoDa27zgHjQK5rwXexnJTKtwzv6bcHkio8R7EKFKPd8S6BxnmdFuPLpo9uBLVuDvKLrTNUgS7rsKHUDg",
  "key31": "5PSiLQyJLvMue6nhs11cz4mARsFbdAC16NgNeazb8VjghaH1UTt3snjGaRi1HbvvCSRCfysXShUvPqqFKtLbhs3K",
  "key32": "5y6xyfVJiLeeR4oyrsm4mc1v1Z3yqUfVtarvXdyMkUL9GQ3j5r64rvXoNcJEuqggfiQrujrTUm95BesbKqVDYm5d",
  "key33": "66S37LJLf5eabsceUrdwpvTwCBZFAHSjzybz9cLxTmWNKwJTANf9dBzFEQXBT2hjVnFf2zqC2JuR58wp5wfb3xJm",
  "key34": "23wkVSpgthS5p7SjesurR4DVwtF9iUoFej4HhPEJL5cfPefsZdHtSVj69ciPdkMxZ1TnR6UieHHYnYdcv7F19mNr",
  "key35": "3wBm5PPc2WGzBmvM1HKVWBeT6etxai7nte8NAV6ycPZ117YACEyvAG7NjsVnnSryX9cTKj3VbGSdAVwbksobyBbd",
  "key36": "4LG4rZGBMSqAmXVbJhVo1Ms7XRgCLftJkrydp1GydLfvVJ2oFuUjEPfsBGVQp4M8yiCH8FUz7SyVqyEamhF8tw1t",
  "key37": "2VCbHFrik8YadWjodmBUUZ3dDRjg2fsqK91i3qPjxcqa6sjwBqAWt4Y6w1ntzx2L6kBPTu4rHMnnUg7ihu4LhWC2"
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
