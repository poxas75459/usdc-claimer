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
    "2eJTqeJXajvnDWTGq8LREubZcyvPggV24ygSQvAPz9mHf943vHenBS5r4XFCvDbQBf5f4aBEWJ8JfqeXJNK5RxMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T93RLdPAyuwQrcxS7omhSP63aYxnh2rmouy3eNLqUbzzp14skScmj65yotr1fqNST4rVwP129oNfbjBAJnECeva",
  "key1": "5UJjVmRj8gJ3YkDSvPiittffNhw8chrb1G6m4qAND3ZLjeSLuL44DqAYwFVshekeysYMF5VKdppy7Q9E7xE6LKpj",
  "key2": "2tetVP37zeHY1EX7jtm9q2SGvJdXby3dwg8agyyv7cjPy1YJz8Vv4wqxm6ZwpQJkpiFFFfTzLs8ay16wNgn3eUGi",
  "key3": "4u21MXc8Xp1evoN4NYsxbqcGLBhSMTMGzPNsUjPcGQSmaQkKseWEPp8s5cgdvDWg2icyR4pnQFHGeExMRP71J1D8",
  "key4": "vEGkaYJoWUekuGnsAQew3VN3dLHx73eHcwg2HFFUJDsu9LVLxmctSJE2ubUBcmCfPp9FvSDpJ4EeVNyhaDy9psT",
  "key5": "aes5NGigVYRcWK11RX9Gs511Qed5Q48dQKT28LoxadtPri9xKPJ9iTAJL7BG7wVQJBoqQ5BdSEQatnS3ip1Nfyx",
  "key6": "WwsuPM1VzUZmdWHYsZzHLcwhaoWNXxjs6GjnczmbwpZ2HPKbTKMd2Rij9SNEAHSTgJQzrybyRVJmd2YXrDR2MvH",
  "key7": "kvTitQfJrEBZFL4LN6PWPfyMATEtPVNqZqM1VzJVuioXcJvrA9gQT7oGh6uZKM5GScJD5nP519mZaAqHHBxx6af",
  "key8": "5M2NBqdp61CiTZbRM6KYmdam9MrFeVXs3PeS919EjJa8mXp2doSC1YjFMwRUXoSDpjr3VjivfqfomWU3zSmsXqpP",
  "key9": "32g1Pad6AHzQWVHjwpSp7V1Zt3sHyr11i5RX1FbZXGGjsdkTjnR9u9Su1R8B7x3avziRMQn2wURgikKdS7GvnbPW",
  "key10": "2AkXAc33RFZBBq3UegQdZGbT2Qs4jJktG4kVdWnEer1u1foHnHhTif7HpvvUYyg3utEHzsuHCp8N8FviycE2eFgQ",
  "key11": "5rcV8krh8v9AcCGCJ1LTZhZFC6CZnvScVn3anHaNz6kNUHsdyyDg3Bf7SXRvCSCWxtvtrRKGVxKWp3aGEcEFV8fx",
  "key12": "5ZgihWjn9KHTHAJxDRt9gmGK98kbAh7X2xiX1RswXXnDcbTUQtDjLagzxuin7eSypy7xjW5wxLPSzNyUws8cMAm7",
  "key13": "kgy2dqZxbkXB33N5UEX2vjgGuQ35gHkrUbN4mMYA1otHR3DWdS4AkuL3ZXvzzJ4YeD9fhLBTABW8jTr7tcpu2Ci",
  "key14": "AgxPFb3tV8FPfzQx7JK4SGBmHwuNJjG6scVrxjgmDp8DKoGi7TqknrpPWjaP4FRTuoVpaG3BXriqxVzMZdG9qG6",
  "key15": "4CJudBXXMG6jWCMyLXnKXhxefNXBoDkhVsTT94Q1zU142Z4xuzYJAEULeYzbTeznNnJKPDrGx1actH23Y8cucSP",
  "key16": "5wVkWzNEdc86ZKbv4RGe7XshNVmvrHXVAH2BoUPkgeWVDvzchGoHmJr5a1AqScYDD8qYeMy3Eb4Yr7waB2xznxyy",
  "key17": "T6aXECNYeN5onVQNyb7kH8Rx6nVz5c82UYp6155mG7fCfSEfytLVUa6qDRN7XHnnR7XNReHvB5mRjuQEQ7NsjS9",
  "key18": "CBsXcChudsNaQjwgJ9Yy7wGAtti4YVYjpqeJ3zi1BqTVF7tHRAdUtkfg9M6cg9wDLev8EkuryhYQzsZM81bjSzC",
  "key19": "q7E4oXA1RcEhrvnxurxJN53CBjvwMULSphLeksufdjNFe2jsg1FnGGnWdNmGmB5u6iGVuAoM9Rxyw7EFTRsuPUC",
  "key20": "27sFWqNDuX5CcUF8YYYorpLRhy2F5qcJkQi1mRZ5RgDH6U6KkR1donwXQ2E8BbL1NvgPRyjbHXJ3WHS3kxXpVMzW",
  "key21": "PSeBD32KMdDpDmGaaBZRvHfqKSnGxLtxExBuEMViaAWAfhXayCCW6LMH52v7FJMThngHCM41iPp2987H6axgfNR",
  "key22": "5KCWpoeNpRNWxQjjBMddrLYxqb1KHdJ8dJYpNWsUSsJLWmUq6QywhgJehowsso4LndMkzCSEhHg2uDSL29pzXK7M",
  "key23": "5rtfjMjVmybgWQ8qvaZTB7aQ4ZtEGaMER4LwkVUEjQ6QXEuDkLXaWhSiEHiLk4ChbCna4gGQh3t6p93viNqJMKud",
  "key24": "9HzTtmCcQtcb8zXRMRKFKVTGUhsc2Rhryt85a4YgEKsq3nGfDMC7qFBqU8Z8tH8XeprA8UgzZhtjdX9oLj5VexZ",
  "key25": "2XUHaZpmgv7tTeKHd6AExK5QPVmb2hBRtzxigyCnC3oDQiwzWjyxDJbcM8fJHttrAorHbUEGE85zVJ8vtcYPwmnq",
  "key26": "3vWBRWc32XHo1LcpWFTDShKjF3UwEszpbwzkPYJha4UA73sVWwj22cApoJGCr5bDoqTzHN9KLekkLGR3di7VBmrB",
  "key27": "4P1TEUC4DfBG38xk3L3Ku2Tf6rV4MCEne7MEsNT1pK2wLRPrYxsY72iSbR3GhCpcYWGfoWY6ZcdnBpbAj5W68aWk",
  "key28": "38vQdHbnq7Zo1EwfNguiJPbjZVHj8tBu53NkTP4wHe8Sw6XFB4yCnLh9hk4Y4wTxDsRRiNKxFUca1LPGrBqyHFA2",
  "key29": "VVcoyEJ2yTAyFTtog5P6GYuKwz2iTsCY9hdnqMBi3D5kkMmD2TxcrZr5XgWxsZQm4iC1rk77P1C6G6pVDHitUbw",
  "key30": "5X831Le1FBzv9BpkyLAf48M3L72RkuebyvAhCbiSEULMRuLchr9LpQywpZSHk2imfoK1ay5k4XJGtaE3r5LSxz7x",
  "key31": "4HDhEyYAUj6Z5mfpC1wPvzpTj5mauFH2qwiBzd5eP5jv2gymEcnpvJ22PkWcamnfthBe9YphPtPfjKULty5Xv1pP",
  "key32": "2KkSdEVm5sTJpiRCSAUF9N4MiEFsqx99ZKAnaBEwxjnZCCDpXySegYiR7HQtdkWG6R7SEmDkRUwinYQwe1LvCU4G",
  "key33": "3EjS7yTsjF26HwRBVPugdv4wtNVp1RP88KyyFWJb9zMUjtw9BCA53S3QcVXsU6gmSYG7b9UUpVJsMAAZc4zCML1b",
  "key34": "2gne1n9cigg2XDoHFtJ9Dfebdf2yFmUhLtCr3ivn2XTmbrHGFUwU1n3SRLDN86YREGpdvbvCQgHQBFikEMEZ6hgu"
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
