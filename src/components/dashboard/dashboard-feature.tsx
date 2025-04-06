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
    "4ToSdde3KUTEZo1Kuw2oC2Z6zkp8SrvKNjaGasGkbDgSpE8srqoNRDBySZApfkFGkTG33SdeqofTSrD9eFHM4Qou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fH9sBkYXBvipEcczuCFXM6Z1Cv6KeZbHvxwHcWYJStywhAZQn8tUL9mnnSY1hwu1SMMTDVR7vA15NpmrrXjxnVA",
  "key1": "3aRPxQBagwPDrKKETCN4tovNnPsgJ3kAD8SJLmV4rQoMv7DLcs5vfUFmoEBVSgSxZpzBNjbZ65oYi7fHGEBmE2gF",
  "key2": "4MoMFhEmUasM3jkB3BV4EYF7hqDFMhXyxGjchf5Kn6cFa8nmEpKFAhWqW7tdW8dFSMCCMUNzZC9mNAb49xruYEWA",
  "key3": "3fb8FkGXaMyGbsW7NY5FRmdkztRUfPRocVvdD95uoNNSipNwW31h9deAv66X6pdMTi4ideZ9TpGD7j23kJwFFLp4",
  "key4": "63hVMHdZ1cpF2mpvN5DR7qHWh24UAV4fQ1SCzYGhRThZaX8wRWy8cqiK56hYuQsoTeRyxvH9i5RcjQ3kMLCZxt3e",
  "key5": "37W3GSYRGYDx4ymmbgfaokYQfF2YmCpv1ncXuwRrmWabr2WTzoMDg6UKx29tPNXboee7tEpMqwszRYbVBSB4n84p",
  "key6": "3NjoZfgXhcQ9Bypruy5UDFzgg6XuS4aDLbdgqX7fatu8uWcCLVjZtUjHNqadkm7uCAUfsw6zGetAk8PeEEgcbAFW",
  "key7": "3MC3sB15mFZrhxAmA5axu2Sxs2Pq8JJSEKMFANCQQ3ZyVh9SwL5wLvtUbGGGaQgWMjvk5XU4T5hwUL4wL2GcJx7P",
  "key8": "4pCyKvmENakvhnqi5na9zoYZvvh24zXmnZHzvFKFQ4NrTrvpWzMSaXbCLe44kXJyTANQpdgQr4coGngP814utjtE",
  "key9": "4x5fZt7AX2FnfcfSk56KP7LnwGEezo53A6t7abiYiUa3JXVEjieBjMmPi4QV7mvKri2mLf6enAN5ej935DoKUaRW",
  "key10": "Ts45ifeLPBwG8eaHCgnzW6RiAtHG7PqUFSFtRSkk8th7hXpRXmD3kxtySK3sZFfMipmGLpRvfz2nhU2nwUH7foj",
  "key11": "5NnchHBdgGwtvG3oaPnPVbpKw8AZmqytaXDjPJGJZoD5r2EaxacuJG1QUB92wi8xzA3dQm9QrqfoGZJs6psmvHUm",
  "key12": "4ZiXJXA6DebnBGUud7uu7VDWtbVEJJ2ZMF3k4WHN3Vb6sXnLcPQeDfNp99JqdFNAZ74dcA9LkiUAAJ1wbSaZSyDY",
  "key13": "3DEWk27fZJGXy8JyQv399ZF3VYpfehYQXh5KRjiM1Ac1gJo1ztJXJus81tSH14GaJBn18rueSKFpnwQjQCJgB9H5",
  "key14": "4UikYdJqETASut4i9uSNqgykWJgHVGpuD5fPK1PeqZ2SiN3UGGciWo8TBwjUYgbcNyodkmtSpybRP3fJxWWXjfpd",
  "key15": "s5utWhmg9PuAu4CKh11wTqMtbSuMHgKmEVzmFvZWwf2qDmeyeMJ2JTWPyrg6G19hTtzrYN7ynUPQEgFBdbr4iWS",
  "key16": "9hAnh33VXkWJWEjwbwqfYKwkdQgUEmoKbVThDz9Ao3d6B5BEwAhPBzU3zodjMdUypGVvqADUbRxo9TQo7hsDGYV",
  "key17": "5Spmoqs1bGEaG7m7b67xFmY6pz7VgWQtNnE7imgFz5qhLqkzSsSGbURTkQ97knYUR3YAcgNYhKJEfGgtuQxUtAEx",
  "key18": "x3UHrCeLegYejFxZBzAZtP15MrGFqD6YgJ1wxtTet25xFeSpjUPJMU57jEaaL7vVqquQD3Zm6pW2tJWDv4j5YNA",
  "key19": "3X2W1v2DxThQK7gAdb8pHc7P4NHNvAaCbWcXZTMBVCcwL5fc172y71AzoJWEM41vW95PhJHCbCgiSzCNjQGSS2Z1",
  "key20": "3cmmxLx9cw3gzURCvnw1hEndrojJxzXuCtByoAEm4FKAG9MA66B9hvLAda1VTqDcDzSkcbhm6BaTJJwp5NQSKwA6",
  "key21": "C1zM4HDx97vNzjRJVRHwGDBoq6dprQGq59UDZmtVN6QoeJMCNqqB5s45mCZqfWiU9zDvxfBrTnQHFQQrUpnwGAb",
  "key22": "57NYnxbZhJtt8p6DNyMLZJ3DNwrVjZMUVgX86dHca87Uisk71geqds7ptJjEWkfYWQCta9qbEjKjxhVms2Wcwp81",
  "key23": "KL8EkBkwby22325aRUWXZgnxsDJ9soamnnL7neP7US8vumxgeJN9dBM18YuMeviUtKx6iF45sp2b1YjE52KSonS",
  "key24": "58DrXB8jtaQNf6hDp5ZPfoHbrSMYuvFgh67VV2q81UxQ37Wvpt4jKT4VsGimonW1chH68zgKH3ZvHTwLZgfafLUS",
  "key25": "5dMS7qDbFrz2Buv1dqfr4ZwNHaujgVawSTXRAMbVogtUBT2dnnKTfxHcDU626ySQ6zRpNiXGjZpGZ9HjycDyYKev",
  "key26": "2BFUUaxjyT85jbPN15mggENVq1qNjX3JKAahP4oBn3fsoncMySL6HWsNguofWTH5ARQMP7eUUD4aRmh3WmDkU5SG",
  "key27": "3pPScztXM43hnCQBEwCTwwWzSecTdy2J6pugmfrqS7U16nXzC6wTEEdUzh2t78M2K6ak9yVokvmuBwFJGKyrvq1n",
  "key28": "4MMQCxbcZ8MPZMd8JYYw6Q1PrhY8Zbesd9kNys82JH88oPwJ86zPwBHyAHd3JARBqz7akqh2D8qUq7nPkXpjvGMf",
  "key29": "3SomoTtYUKiZxyN3Tq6ZsZewKkj56LVrqKdABDjyRtRQJtARmL2BXFz8zmocKRBPjpa8DE5dM6MavK7QBVP68epu",
  "key30": "5VusZcKd7XY8fTa7cs4jqUJGtDwzHtXL69gjvCnkcfzj6mCDgNFCF6kgqUzVp4BdbNAcUb57MWSy6iFoBHZwFXNV",
  "key31": "45HWXWrpXDJ1ZQFdfraVTMZN1VPDvD52hbeRqfuEX9sCTyWG2Qnzdx3wXpCy4RzqTnh4bTQEEZCHitJ5gEcGmaHS",
  "key32": "5zi1nxfxEqXQQ1B2t19eRCSSTbddSrmvqBvrKCAKuLt8RD9K65TfFjatrKQFkGQScvznH9SLyHTgknwP3sueWpKt",
  "key33": "42v2uigmqjG7iUZtG61NptFhnVFsEdcPcUzZ2KT9K2AD3gC15TUDaVsjne9qiJU1tKzuRUkFQqu6CTHCrURVtvFj",
  "key34": "CT8xem1nEwYxKrxsbL4yQYHimkvBxeNJMWXw6bjA5oTp1sTydLpuG2drfMuJWEKu1R9Mjtu93Ry1YxjDgksB3v1",
  "key35": "5m9VAUnytWCQrPRBL5hdFf8ngXiXBiu1SgLUxH57V1oejjoGjKYQ4Ah4ZDAB6XuuWvLtREW5H6gNmbJnVbwCeSyQ",
  "key36": "2fpU6TrAsiAYn12ajRGfmdoTXVwJ7pYBMYZvV2KbNZ9XK1J3qN3TqowDjJ3ZoSdg3RvHRdXVZZeZ7axLaD3dbU9q",
  "key37": "3pydtkjCvp8G8kSxicUEhA4SkHkS8Ks9Wwo3akgtg6wrDDKsFZsJAWQZBLQthfRjVanEiNMwBFc21HPx1nNnQ83m",
  "key38": "XQWFtzzsx6a2tsjQ4QEdXZ2a1Mze1PPNpABFcSxjCcTNkz1Tcq7gbD3LbSF2xNbpvjSsT1eYuAKNi7TssTmQfrV",
  "key39": "54aSN5ZZf4fipiUfAte7aCeNRfMhn5t9QfAMpLPK5m67bYnnjKkhPEvreWaRpdSAKVboCVELAVeUHef1PGSCETyC",
  "key40": "5Ax8mHvWpNceBSxGBpiA2q3tUyPtDpuqidq3ovAK5usLAuVXakn8emAyR6dTbWEoxqz788musZf9LZ5SAgeu4eJ",
  "key41": "5q6vM7Dbnbt4Fvt1y7MpNkVgUYaB78PnxfbF5J7tDYD4iqe7KWKLDghCWFhAjKoLj4d9gwZ8UNUFZDtMpwFwfkEU",
  "key42": "225YwbJg9y3jqRoz1UzLe1gntGCLG64qHXGj8JuKU8ETwaL6z4Py7hcv3AjRPdk725hqH7RPEX6aAjxXVT8Ck2XJ",
  "key43": "3hWn45xUMSYFRnxRKgTRGnoz71m1ZHf5Q3Qgqr18PnfqsE2Bi9bemdGPqiQAv4aT8v6rvHymaH4niF3XasoNYkQH",
  "key44": "gNnNpJWBiaRFJqdK6RdBKqXghZchnCQiQYPm2m5SXUQcjCcj3wWMFXiwxj6zr1irZUQsJc8sM1snReUnES8tous"
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
