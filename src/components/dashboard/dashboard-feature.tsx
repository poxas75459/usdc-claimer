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
    "5L4VY8mbZCF5jL2XEaVmgeqqqXcVfd25HNaSR7ta3N7Pdx2yeRrqDUVYjcrxqxz3W8aw2ppbPyZks8Dq8FQU6e8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uAzuUKe4dLcXjmpv8pTocxymhzTbnVg9icCE1X7wXvzMwfHrkrZs69HAA6xdDmZNXU3qMvd33KJsokKiGGEhJV5",
  "key1": "524FZbNJaUrCKTgSMsxV2GDvjZ2r2kBXPcGRiFSDktS285v3GLJP9G6ZawdNWvFCb1cNZ33KKr7CwaKG6DgQaQZ8",
  "key2": "2MoDVhL4XddGTMdDxajQAYwQmbkKADvtyc9fH9akLF6z1d3GymgmiDHxFqN7X3EpQjNWfY19RAYqLgAS9cCtrRfA",
  "key3": "Am3X6MCbufNZUogRQxXL3rCEx1jKTSYXr2o3eDex9vUfb85sbZi46qMrKBsnHV5BCneC92KfY78YPdcgV623vFm",
  "key4": "jqBJNaf4557qtnmEQCQAQUe9smWv28BkHoty6mqeofHtCp6BvayZdihRHGXktoUjGJN9rq9JcmtDHg47NKjyquX",
  "key5": "3sRALvwLBvGfDqL2mWMJameEvdYYnwAN3zX6jQ1Rh8Npu8vsw92CSeqEAJrZUR3jxZRtjozrCcdXai1ymh5pkpNC",
  "key6": "2PYBZw6tqqdtQqjmiBKBSnAzuNiKkoXsLFGZPtveBiZbmq4h737PLqh5QtSUqsryfv5csnRAYevENbmipErp6adM",
  "key7": "5WMBix4BURodgmqqrtvbzZA9Kut2N7XWxEP3ybiXcB1VMfsYqr3BsSDQakPnR6gejKjbArSUVkKJHfuVf7LzLagu",
  "key8": "2icJRJJVGB6Rmfgoa7tUjXTV3fxvi3BRDmwZEsojbpB2vmaSmcJx7wBy6GV6uyA1HRRGKhAcdSHhdNKLNhARGsG8",
  "key9": "47ayjQTr8N3umh3mPiBYWDPQmvXraYHnbHMHZ6EMnJTRAxRwbBpP8UQzXdGPT6WPgj3UXqouFrSJA2N21w21P2ss",
  "key10": "2QK2unrBfjrErLmdv29YbyyEEjHHt49NhUD288DzHjr8BVTMWN6r6ru9jgJozfHDfLiMvB5oDC64E9hWHZf4iZT5",
  "key11": "62wV9N7K6WAe1AC5cNS5bVEJuwtNBsbvCY9Q3cDTdABn2NQ1Uv1XRcUUqExNNBUTvdygXnpfsevPnrK6fQuTU9RG",
  "key12": "2aaobAXPA9Bn446p4ugrs9Cjc4YDPw1JJJgS1kcue8cUjCtyeKoS4BVHEC5V6DwzCb8cfVWKycEzPXVme3ZqrcbQ",
  "key13": "4cMf9UZUVpBCMURYuYr1nUx8urFtkEFCXJjz5RyEweHM4ui1pRYx6Qhnn5dHLvdSqNFfKQ7UXwDNWHB7mqJ2mJxJ",
  "key14": "5m6WRJkb2GRXUu8pyLAafwKovm1c327Pyc9cdQczBHWbdhNej9SyqKAJaLELnTA55fowXq3wouWx9xWLtWaHxWyy",
  "key15": "3tFxkkmobAkpKGAq5ff5ZCgS5G2sqBcHNhbUGRUm52PvHziHVK6YUjxwssQRHParreiZCWNMm2JL5rAEm6bMmkfj",
  "key16": "5zDJjB76KgCkyr8WGEtyb8suTLA2na5EDjwkBmq732gyZga3sxunKggC1uLHfzBwZ9uyNmKVgeirHcDRidUjTLi1",
  "key17": "5oFoEGDruEsWPTvNEr52mXgFViAXShLriLc8ZiAXuGVcbhtoZgy6tvuPF916g2zBhmTzBeJLbtDLqtYNnhNDS77o",
  "key18": "61wfroq6HNQpv3qtm81Ar59ndyEZznWzN9TKxXnSbUbVnRxvsVU3SxRV6b7MoUvUVJ2mJ4oA7MaWzm1MdUT3Cb4U",
  "key19": "4L99K6rxNJFdKnqES315ukeWVRuxSu9ErUUhrw5Vhsw86bbudf57FsjMZjPhHGyT6zTcQyKhjzym513nmiePqqTX",
  "key20": "33ucr75g8kBdj6NUYwsWaUA48gEoT5QND2LG8Z6KiEzFhnUC22pAatSFohykYvDtSHzHEYpivAD1Ca2QYB23cvtf",
  "key21": "5FSqmhbWgeTSEEhvrtoWgMF7MZkZjztSafW4fBAPRf2xeyJaKBTzyRunpe4oksLDi3V8EZRHpmXTnQtkncN2USaF",
  "key22": "3PoikxSPu9YhzSGjrJHiq7P3jhXFvMdF6FQE88Kx7QWR8L278AcwZr1t2PMuFcjsBdHxLJbUMPzHETnGQnMjwwR1",
  "key23": "BdNP3EuRhq54kfiNW92Z7uGGSa4MNKRWLSF45NekC9NfGdPWdx8AKKXrGMxsZHkUJ7JvWj2yMVpXzuaspANdEY5",
  "key24": "578Pyo2UaYwauhB2tsHNii2ce3c2mSeNznFf76Rox1di27Wo38QuEpRaG9Km2tVthMUoaSDGHfLEXjweEMRPXQdV",
  "key25": "P6fomTro4svAEebQqEkEUenpz8mfGWmNSrRVvBL8rzgc3mCpJALVt1wpn5HE8t9d73Jj9r7QMgRWzNNnWCaVEtV",
  "key26": "RewTTy1LwBptNQTaDYwFRjdDN7bwQEFmG3yguEr1v3pPxs8A5CzqfNPZVR7sMBcZEShWymTe8AqxNM1CZ23K4jm",
  "key27": "4rEXgpgbdYM5QADGkx9UVG5DH53BZpPEvyAF95qQ8X4JDUmh6K9iB3mrcgqMjDHpH1bQ1m4egRU9Cu6Kkf5jJbjU",
  "key28": "5P8Qkws8Zz8eH3cpTU39RymkidMMeCyFcrKHUNpKD8CwcXFUeeM4trKSsG1BQvNeGdDDc8Y44P9tVsArnbk2yqsE",
  "key29": "J9N8FQq1hm8CMKxAnLWjdG66zV3jocEL3hSLZNBofFehKuSwa1njUa8s92Y1jzsCJigtjQW17TYRpbaYBWqzFFG",
  "key30": "2Vx5kxXKYP2ytSFF1JtAcTgwQmTJEmw2JJVfu1MQaoWAxceRwyxXHHSYX4wiNvUc3GBjFUnP7ivNFVvfcxHMP3yh",
  "key31": "319gGKhnw32omVbLTvFBVraaBuRTP9FuggH7EBsuXtjkhU5VAxrDddPxCBPfR3Zeuyq1a3yddBFkUxuXTBbaLj5T",
  "key32": "4gnpGtZ5psBRbSKmdeojHgdBrc6AGpMkHFMz9yNxwzAcfcqA4WtrriLiDQw1QAprqz5A4cQYp29p4DjHWtd2bR8S",
  "key33": "3rWv1iY6sFGhZrmhy3ecJMcVwvqRE9sMiW4qWkVewy9jKzZGd8ph4wVC1PinPeRHpaSSrkMppMf85dSeiJ6PL2s8",
  "key34": "4h4rWEFfV3JnovNFywGQUDgVwZRCYr85mYhDK2tVX6TUEZkDVJwThsGBn8k3TGWE3Nq87TNme6YTXPYwtJgiUrdA",
  "key35": "2RJauyHeyP34E2AYZRCU9NKtmDi9ZhMTMYtz98Ra3a73tUm5sJpEjCAFhx4yLcdSS8dcyZ2vDyLpwUnM3ZthWsdE",
  "key36": "3J5AeRGVGn2EgSavJ7udeGy2N1DDTu3XMXZcVioNx2knHDc1Ssd7KU9RetLCmxoBDEKQgf3XGEYjYE9joRWCLYSe",
  "key37": "5bKpt4PLcVs2a5Msm5pvHo8qzcdueweFqUaKYxw1UUboJbusxibsEdDtt45wWLn7t9FPzTDEDwUmVg3KK64QDa61",
  "key38": "5uBDRrXzatGMhrkzTax2Agkz3mRL534AtstH74AUpDQvJBy5EZqS5G6DmtGknLWYkgs9QNf5zSkWB6cjYCfZZkVu",
  "key39": "5berSyA7j7wgiR2LQ3JRBkNL3ca7hnemsqZ5VM7G4ix845qTiSUSVGoTPfhotpMb9r5LkHgVJXfbtxB8Ngrf9jTU",
  "key40": "8JkCqHprAPNdMFm7xBXUUqgmER8DhaduzupG5KLsTgTBQysevu5VQRpmsVS987rr4pqCwPZkPSJNDkAUaj8My87",
  "key41": "3REcYpUX2HVTfHDkunVEXkeVy1eM9Bwu7jGUZ2u4EhyZsRuHV9nEzXgLiRaUH9bf5VxQTdXiiV17ytaJCBWr2Kku",
  "key42": "3vevb2MQUVcKyXmE6cfyv2x5wbHQ6y4kPZtmMAtHXM1U9BtM1VzjkBY46aMtJxbDfgdn1sM9S43TWVuRiQp8uHUt",
  "key43": "2G8AGUKD7R7zzkR6DZ4pHrRgN4S2gJ2Gi98iTf9zMSvnsqUZv656VEos6pKMNv6sqUP3eLrdsJDCR8ioYzCJayCo",
  "key44": "4ocTwP8FvQCmvGuSk1U1iJLjMfvHmrPzTTsKD5ozjox1K44TjsQHnqVeFLNJgRXui3jctZhBeGQW2gdiLcwDBcwD"
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
