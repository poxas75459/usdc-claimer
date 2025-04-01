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
    "3NjjSc9rfLJsg6e3Pke6QRvMWkLokg5UpyPM4dxPj9MR5C5rJz5QADJMcFdKo4EKdQNY7PSN2UPbK5emWJWe9EKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRSA6MmCs5ajTSpNcpFZWZhZ6nrbad6AadLTe4QmRAVMXyg5dpd73V28GiVwAWvREDMmmKiM7JBoiN9WcnsDf3n",
  "key1": "3SZ21KH8MLZMib2ELKB2Dr5hQWMv12RFtvTVzcYWk4vFwPK5SxyryXS8aVBU1RUre39P4xfqkbpWpUQt1HL34aUr",
  "key2": "2GBAGqVkrmdXnbWX49tYGFeEahKvbrpDoyLQwkYbkZiuBL2RoP3zfsGm86AvKS9DDnV613GzFXj1gVVM4XwVkcMo",
  "key3": "4oEhhM7aAhYPAHPcwgoheUC3onM2vp9q5pB2GUYqdkEQ1v9E7QzxXU4NaCb77qX6QCj7qnQeYpvwqGgkbMCLoK6z",
  "key4": "5N4vDwMtjp8m7nkT58maH7xQ2u4e59fVBQY5KV6hxaoWK2MfdkyyG44vxCv5qaKRiK2aNfNiX9befZkFUUNtGppu",
  "key5": "YyzZ8GWSy5QHHWPHZzrWAdFFeUS9QYPWv13kWU3bdi82koKLrMfgCZra5jNznep8q94RWr7Mp4TVfQ9SRvZEgST",
  "key6": "D7pJhAStj13WcErqSMGrZ7THD1qiiqTMjGN5o4t1YSjRAeJnjHKcRfLnArjiykG11BKVK3GNMK2SP46VaR8yFnj",
  "key7": "pVAYBv7AANUp5PDEZTWJTjtR3d5y7uzo4y7VbTb1EwvYEJYLRk9d9qQv5sBcvepKzdT1zxYkupcdUHMm4TPvW1V",
  "key8": "iH4VKJ3dAdnxU4SkjghUB86owJGwAajrRHFAPSyTYsK1AjjSXWw4HSPfXw9zNDSn5s1csSJhDh6RAxno58EGwyi",
  "key9": "5jDmNLqtuZyC5iAix1u53CiaokcjzS4GC4Pam49xKY7msMXxAvtK5VaKpB3dHdpno371kJmmFHqXMgDKFzMGAXug",
  "key10": "62mbpzGGZPD9HabKckLWqPxKXChmhGLTYbsA7RMpXECL7gqyCgNfJJHsCqG2uwZP8tbjS8othz6JSNhtzaXfswKQ",
  "key11": "2yXugSfcxcE1GgWns5dbygwVpogvWAz4V5hWGvNsyEERzPkV4ZfVyB7BEZXpPXX2xQtqsVXeitW4omUvjBxLMDMu",
  "key12": "EfMwSSTddDsyttNz3HQp6tqKb1TJ1mr7Cz8CrwBMQrghte17Ujm6LE1sati2sQn9RPmG8p8PBoNSjT4d5ciGqvH",
  "key13": "2gKnxjmbhPJBnB7uaUDKEVGUD1X4NQApLpkbi22oS5V29ZJhsU1JWVEmJQ86gUuodP5ejfwEmnnn6FiZpboPQ7D3",
  "key14": "5pMQW5kkRg79MKYnwu1Q4HFizyuwYTuygWNnkWrqnVXgbVAgzFYpS7SeZgTmmSRZ861B7PDE5RkpnpUFPMfVRaR1",
  "key15": "5e4B2rzoQegM9SSmctvW64sVzjmnnkGCVS8hmfJruiqofDdG4GTLQ1xU3beA3VoWWMVypVVsZr2rhrowjSf1WvyE",
  "key16": "FuTD1ggyYcatZPrvbL3bnDV7hpB9uUoXsaQ53jp8zrS3Wire9rWGPiBWsbR813AEKjgkN3kn1Nbq4Cv2xoxiE6W",
  "key17": "2npqjgJ7V2frtJV3Mh5j8GYe6TyoRwDH9EyqWy9QsesGYFEFiffxn4Tj7GtuCs1he5E66PQLbjsSAD2VC7NmpRNs",
  "key18": "2drjtz5MgTauqgFTG1M7yTVdEyQE36oK2NnE2J1CS24AbXjetGZAA5SBHn5T5KR6ptDMhZYs7SXhHGAwefzDn4Uw",
  "key19": "3cXNZyLUAXnam67i3KjJ5rkWgB3YYaRHAoBr44gr5TkgHTYsRG4JY8njyyByFTFY8paRp5FYUVZ2MZEBjyfu6i48",
  "key20": "67fyB8kgoeizPYVRyj9JJ5QRfPYMp6is7CKUqkuRgHQJkJ6M8w5783pCMXvuva64fP5UyTRF27Fn89vLwC4nwV4R",
  "key21": "GASRYRqfoNPM8RZcd9q9faN5vFC68hphGvK97Y7rngifyXVKyAtjiKP1xMA4wondLNwXRWMT6usFNLNVo9VgLkC",
  "key22": "2tMgMFMeRocLQunYajEh7TSqk2Z6exNzax8QworC7wukh8FDg7UV7ywFqzWwsevGwtHFqZBGe9XEFynPi9iV3a8Z",
  "key23": "58W8Ea1MpWvpaNewzRTiCRrY8uXGGYNAduTp3g1b5L8U6jtLDorcjbWL5MKvHPkFQpQPdvTxogNhdg6rZEmwmyFr",
  "key24": "5mdFxX3FGJajUQCmACyTY2MHZ3QxnDxpkaV7BrroHbkE5tAfyJGwSbEkauW88cBbPUxcePX96wRkpZwNYYgNdgke",
  "key25": "7vnh9rHy6jiQuUoWmwesxaZirxEvZoargNjbpvWQXqmKuuqVq2d4NYHUCPQugkkcZBvD9xHGLDxRUQnKpM62zJf",
  "key26": "5V9pWRk2uQBFuhDMyHfjWYKSsPzC48mW7zzbTcF6hwjuos8SMYtQpgbqV3c76ECv3GeSb3aWaZf7THnMueP1a51j",
  "key27": "4uA9XgKHiqJKRDGPtbTBRrmcoLkjzBEroa5hXV4eYHLE7nDSaGC4onKmmPjvoVzJqH7KbV8fbYx74zyoU7UTfR8N",
  "key28": "5PVMmspDtybzawTuk94Q7BNc2nUULF6Z6zBjSF7AuVQUh9sCgaUScCjvx6F54eTEPstQgGtRbCwEAoRUfR9EL4vW",
  "key29": "5sxaTFVZAs88fxuQdBRcWK7WtescMHvwgma6EWDgzdDnsKk7qQ44Qhccfvva4D4Wn5EEvgKhhR64pzTasT4rQVFe",
  "key30": "4eFYSBVN8kuPcbx8RCnxeRodPNSJSXbrNGdqFKpHMPpkqrMYgTM2c3pdETxRhH9LkuJxzRjRjWZ374iiDrt4v47J",
  "key31": "5T7QTEvmnaKKTGccZuEBPk3JwENtVW8FZbeUrbcQkZwydkcaSRHDRUKad3DGVMWRGCWStHoB2XRM7ybfL3EaqvLR",
  "key32": "K2RrJY98SWJYxs2hGgLpWeJVCsE5z5rkPPzCFkhbSwbrfoVKSukgisBvHZ6Kj1DHb9MZqSecKfgH2N7EGVLtU5L",
  "key33": "44a6WFgtA5ym19zTqQjCGprBGWcKm2bSoU6ZKvdbMZWzmNzfFB3RFanNmSGhmdvssfiCQXuvHqXcG34RGCybEDSR",
  "key34": "3Dp5MUc5HYAL88rEyMurYUeqTYgH8twJ4A59BMv1AmvFCZtmRWtSMbdcwB5NL453zPZwPk9qE1tcmFwA7v6F9oA5",
  "key35": "CVgZywSFgVJF7zRh7FEEQnoss9F7R2tMrM7rHncjautLbWEHRXtyfV6oPSd9XnQoXqHMGucZnN69WbGysoDAd5G",
  "key36": "NwbNyM7mVsUoZfq9WAGHnUd2jc1aS9XyQ49HwnH4R2zfUiVXSeEEmjZAhzrs7JYFdN4MpksNm8pJxwUfBYWKzQ1",
  "key37": "4MMtiWZkAGtVVbg93JRwJQz2uejzYGREHM9Rg1R5MdARMyEA5x8qEhBeGomUZ7UaGwuRHqGizmEEDX3Ldz8ohnt2",
  "key38": "432N8zLYgpRkAgb3fXaDoAVSt1HoXGfnrc775FuKdW4nMKvBnxtdzmpsnkd7JJ8JgrwwH64bQVJ2mCGuh11a9oUD",
  "key39": "JGVCscnKDfMGW3HX2BvJDBtZ246wBd7cRZUG7Pb8nYGRNHqTapJah5VAAwxeNcLjyaMxijVCgSaZ92Dsj7dWBkn",
  "key40": "5pkwQ4ehSpsY8VRuz67oaR6UPSbCZhKYygJc1pVMz4Awjs8UvA1d7w264yVSattxqpwPaWACXcQxbFPqWeQwW9SA",
  "key41": "5AkVhccUrB4TPdMuQtp5Gv35UwbBR3q8CmXgE3CLsHLirqTWSHyFTRjLbK3YWLbmcUj1vq18hxkRRS49oSaj2Sz8",
  "key42": "3HzZDaZEG2GY5y5kN96QWojJiisFwLodxUdf4WcEy4fstyWMV2YpvrikoFSTAje6bQJvBp5zALNanBQoYgxtKNSd",
  "key43": "5FAaqKHns5fqUDAKpUwX2nC9TgtyYZGqzusPGYdyGEYRyEqv9Dy5UaCdYbd4iqts2LZLreZC8cwXPvoBNN1Q7ofP",
  "key44": "43haJ8fR1coyjvG5aDnfZv1kivwc3RSwnBPFWrTVLjTKSHyJKdbzLQSFAnawgUo2KmwDd6VKJHnB5WkSNY74wjgE"
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
