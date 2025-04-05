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
    "2Z9dHUPQH3DK7rATmjfNktTgnN7TUeX7PWttUwUPbGz6jkhi45JuUJLejXMn2498UQUt3NyH11A8gUaffNT95AAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzTTSMFCDSv5iQXKg8DRG2GXdTCxDrvJbvccTKjp9Xb93vLBcdpYP3caFoAtciuazGswetXanj1Qt5uH1RdRbc",
  "key1": "4kwtgvmYjRYnex7itrNTkMpkUN2MHz2rztQt9N4WeJboZk4EqhKBiBs58xnSr3MpafqrKDDP1yx6TYH6oTFSAMrN",
  "key2": "326WnzTCrpyFZepdJ38P4mBQGoxYyCUCRAnBbiNKDMMJnQn98sdu54Edgr4H5C3utzSFNhNm9D7AsMRgTsf2sLU7",
  "key3": "4tidVEyLZFGo6qoNCnAqJfU6XLvxzurCgDLotrh8QL1RzeV4Zhjpcny7KZrXuwKbqyDDTkoYHhcGBQzZVyv3r78M",
  "key4": "5eniZEdyJzCugE2rcM7TcG7C33H4D7ngYjk7y7HRDbmTZH6ZmkBG5T5iAvahR4f5bSNvHVDBTQP5tYiYLtkDwr8B",
  "key5": "5FNsHYo5mWUeteSuM6R27WPKNpY6swLpqNkgWkUZg2ByvNNgBasF1Y2emCuzumsCGzJURnc2nGbm5SMGkUxTdzFY",
  "key6": "22tA5yH182qZjYb1aadKWsUSuRNvcLFfCXmEsNSChWuxUYmasTN3bGZdcxRusVDXw3JbuqL2Thj6irFSyfa9yA7M",
  "key7": "trHfCpkmsvoA5f3wVSmevzT47qH6K6uJdRW1n6tUapCc6V9BVs6epiq146H2DF1rYk1jDWttTkEMfVY1MoQ2yQ1",
  "key8": "LjzBVyejoxBD85iXykHTCdyLT46UBpBnaXBsqDLzTa32WJ6z4Aronex7CUzX3Zg9HhPxW4QmYneYodgnUZr33Rb",
  "key9": "3brL4cCb8wMhh1GDaba8EuanDoR7j2VXYqjag9eKH2rrz7tsEta8ghJ42FYqcjxRzKHrgeCHihzV3UDeBQZQddq7",
  "key10": "5Nj6T2QaHrEmcrPiwPKcxUd4T3amE4mavKu6BMda92Uq4vyZUg57BXpqcjVR2YE8JQhciL1CBdFjErqZ17nBkTyw",
  "key11": "39gzai64n7icjw4RZufQuxMCr8mYVjy6gcVhPM1aBx2a2LcTMFS3crNXkXjHUzSgZX1NjgPxEHZ6Uy3jPimtrkFL",
  "key12": "nAQ9bt5bwUbaG41kt3v75FrupVeP9nEuzGsfvwNeV9QDSrBf1PP3vKrF3G1jU5iGFGCC91jiMe26C6JEZ12ZK8c",
  "key13": "Cu3MY52m6CAsrCmDL8JeDjjbc6pohC6LTe3iYWk2tvKUX9yCM1tvF3gqpV6u6erhgoNmTMac61ShsffPdRyVVx1",
  "key14": "oHQ8BTNsRyL1MJYLqmHEW3fiu1zJHhrrpNj92pGrAPBvovsyd8Wn1UJagXUNqVtrPjxs2Hxx55LF77oD2gNzafb",
  "key15": "4bJ1CiBiVdicf4nGAUWjqbXncQ4XSypGXCVZptiFQx5eiV5GCKwUivaRuEm2tjB24bLc7gyx4JKoAMMCCjGbYC4K",
  "key16": "n3Se1bqJFiZE5s3ztfiR4Ect717ZKoZvoYtDSGX6Zy2a9Pgp8J2efVMKsqv9Em6Vgfy6FtTnkSvfUcLJxVvS5Tq",
  "key17": "34uJd9Jy4irp962WC34hxiJvKKxQEJ9t26ucgdFrcefhb7NSAHvkeF1sXjNmNPAEduwketNd14hm2PmmDEEupDQ4",
  "key18": "2DFhF49VxJRaijZyT6rfrr8xgGdN8EZbv9yHf1Ua663BLMa9VeHPtce5gkgHCqA4NTkzfttPvph6jUvXZxR92SsZ",
  "key19": "2Fur9wZeB4fiemP5eFLRhDfDLVN13MEg2M49mZa8x1kryx9cVLDWMGAuW4LbhEgN473mxZsvhh2KjPHofJg9JkkB",
  "key20": "5sJgLTo8WF4rjfEmF3AmEnoE5Q53qm9E18rVXAeEy7Aeq8Ln3viVLYjnCYhgpdC369F2nxdXMMwBgWNYYcVVDS8g",
  "key21": "iQEEbzB8or8D2SPNptYvDQkiNzpqf5ZEzse7x9X1k5WSx9NjyVcfsxj5xUjKeKYTcWgY7CiFCxz7CqZ5Ywj7DLL",
  "key22": "5FL9vbzm4vzhHfcTUCSpfe8i1SpvvyfU9FhpZbqx75Ed3ZfTFDDMMx8rPDxEcgLcSkoEYLcYw6G2d7DCnJRwHKbc",
  "key23": "2KCUkedBY1xHmtyKXmMDqDD1kcjMCrEmoArbsSv1VYLQRoFrgNCUygf3K5YofdMPwzsfRtzjQAdPp8umpoTTiCYD",
  "key24": "4FuficsVqMwd3LDrDVACbYewBLb2u3tjoVuBksqVkKhysmWZbwh8wrwDwuo9ECuf1KzTVWtUpZmyoXEeoNKaBwXT",
  "key25": "3d4PTu7FtCCLQLUsHXvjazwpYyKqQfaMWjfHYbzoPoHv1uJL8TC56Zt7qNCXQeXT3pxnyzxrTBSxH9TjdaDq3N6Q",
  "key26": "3Be2UyEZC1FBDirsGD2ecS8a9yco49MgcFAuGuCQty5uTgeqLj8aTbnV2cjEEms8Lhokdc8WrCfxNHKiU8qNDU3S",
  "key27": "3uHtHnRdc8STH6mWhphMEyn7KFegRV8GnpS8VXZunsu7dM5dHcipnmvcKyUNWc7kRAUQCr9SiXpnApJQvj6fBkX9",
  "key28": "26GKGdWpq9qQnkmLUpjahQJqN4yLb9m3dK62JHLVMVUPTRW8wNAfCHanbrSQrUBmgUTWSzyP8wHLjAWfomRRABRc",
  "key29": "4hKpxT6znX4Gu8qBrhMXAfocBPeenHVXoMqiHzbpZ3gacERPM4oka64DmhQDos5rDF47ZJkFWHvCHh1BWh74WUWW",
  "key30": "4zsmf4vbipFSFxq97tdYb72vWcc6MVkKMWiHoXWxiapUJPv4HdQRGmgCUMsbLQD5Q12Qm1ZQpfUj2wGU1aka8BMh",
  "key31": "3EkLvERbU92hiofKUPqvMXXb94T9yko1vu1By8vqtBaoZzcuzGg2Kbx2wBPFzgpoWxAgLVcQgA2wPmJ2ui6WtJZd",
  "key32": "4ekGFd5Ax3PuEWSkqYSC6A78kv7gL4gZPwHjxibhCvWoJ1cjaQQkody6hnoAFMp53uNTfU78WkhoCxJQoV47UMXr",
  "key33": "3rj5aQQDAaYg2ox75UvAfQDm1w2TtHk93Zh723T8TkYrLvt8SKPBiXiAWHFTQDFGVs2evTVb1RoBp5p7Gz4bF4vp",
  "key34": "387xxMip54jX2vTv2g5YG5hVoD8hYDQASXtiCuFEAMsB5pC7CxDeypbZ9pyha333pqhh91bM7E2wt46FQjbmoX6Q",
  "key35": "59wYYxpMcGVy8sAnXamNyuD12ynHweV7EXerFgZqXbPMbyNButT9dCVBE7h5f98p9UYnhfzuEdXedrJcVKhpBNvw",
  "key36": "3URDxs4PguKpMtm8e6peQ3hmGtUDz9e6KqPxEZhK4EMxQNiMwVncrzMsXRBou2o5dPh6KujekTBHsBeGrgPZYXGF",
  "key37": "53w3P5WYXvQqmZaRM8pBmJ75gd2qTGCyiVgRumzvuHi2c1XWZiepdnheWsLmUUbjXjiJZ8DLwRvzcJtFAT4ygfdm",
  "key38": "22gLvLBpF1mB9Y52PwUdofuaBPuHVCBpFwVJ2zmtePCbpCnasCG2qRtf8SFpaR9Hn9zmFvhxT6ZoWQGNKH9yaD7o"
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
