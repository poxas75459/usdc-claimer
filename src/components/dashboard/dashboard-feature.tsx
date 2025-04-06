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
    "YUgvCoxDHVNkiG2FWwtHNaUVuxLx5ykHzfTEG8oP7jG5Yzt2gLDLjMfNCgsBtw7Mx19AgXhL82reBx5MFdbywkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29r6eyjW7DcF8bAdmwp9ZgkRHnSkLZra26c57CHiacHB8NjgAtPLJ1ctqppgBQPvuCeGsyPzoQUKh8gCEvdBjWBj",
  "key1": "3Lx2ZPsF3gASUZR1b5SuBhvjsKGQyYaNBRjbVTTxVZQns4xgS7xSyYWM7pJfgi937jiEMxkSX37c247Qj8WutLG1",
  "key2": "32VMQmr9UGX66m4T2KrTEu4evJ7dC5pmJBsPUJSWaS8XNnY131KmXLjmwAnMKiy69xmK8qWhH6Zix9vWo2e1aYxX",
  "key3": "3MPnqvHWc9snd9aXB1rFSrTACt8JP5NEAkJrS3bj26UizqxPn5mwNsNUAiiBd5xNkSHfZAs3JGrvXetyuozeLgCv",
  "key4": "4pGdg1nondbt9AkEjV7ieJF5JsRVo2ETPDtcVKyEMc5rbM8JbfEaycN6qosCPb5NyA5cqFcuMdxdTrgRgWyv4isp",
  "key5": "3ShgYSLmpHwyP1garmzB6pcYeBaMdPBPmuBgXy7zK6hQ9Hoty4fs4r7fMh7sye7fEm9NsQLSq8FULNxxZr5WYmtL",
  "key6": "5dvbzhTAwaFBFtSmnKXq3evu4EwRyabXk7wjhGzY8RzLTwLov6jEDqCHwhEon14UZ5QTtPSHoZJiN5nPQyH5MpoW",
  "key7": "5U1fzytxwfNkyj2Wu38j6JVqCb33Pkj3iHB9y328pET6UQTjgMbbT7kT2vN7SGUezZUGRUmos8CyVJoZufhveGVs",
  "key8": "4PDsLBaNBKM5hr68kKqUvQeWChyD6xg4Y3hDpcMjXBDGnMzoLBwrbY3MHUom7osLjzbE2kVTcgBA72H619RKsN35",
  "key9": "4iUTHkXkYHVNALYCJ9Shheon1hb1Q4yzG6XbH2HambgHUvNP9YkPw8PTs3KKghCxaFDHf5mWbPoGrRzWVH9eyGwy",
  "key10": "45SWNrpq2619tFa9c9WS32N3d67bDBsk8jRwzfzzDjuUQq8mmeiPutU2RFvCbd8osJLqLpyXz2K5d2UVVJuUNZdk",
  "key11": "5Q6cLK3NP1cBvKGwbKsNtnQXe8fAi655E2w7X7rghsCppXDs4b4HqPcRZooV96BuN836oZrzfxig7rEAKSGSpMbU",
  "key12": "2t8UKPoMhYQkfLZgXqDACVqXtrg1nUR7xAkPqeWjpEe1kjLZWYKS2GkonY5XGwjipmyLJPrMf5dCs8XcBK2r35MR",
  "key13": "5Kozn3Dw8Tt6CkSSVy1icRccEA1FQubqT7izsx9NrNNixBeUfPR772Dum6W9Pfs2DTCn6qdJWeLTXgVrqD63fbt3",
  "key14": "4M4C7oZSXV5fNMqQvPXyKx4S89ou8y4FsrYinx8pHnrT7F9AbJ8pNq49C2hcQ5aiV4w9kKd1r8ZCwVH5patVt6FP",
  "key15": "2dEdLQggvwRp7jbfKqVmLmGbyezsCbDwcCUmn1rbufqRUNchjPpJdYvRiPsmekBA8rQNvPhW9WxJQGLBWSuz57Y5",
  "key16": "r6LMDUG2H8Z9PQcJpVmSwrkfhTQjUDVPkwzuEsQgwyBKsdmAz3ybVKfQwtUty7RUyD1JxWTBwcgQLp3tAoxp6K8",
  "key17": "64uaXQidNJiXNvYaojkapJV4fpn5WFFmok42ypsf88mBFPrLq3McMhLozjjFvPYDsjxfo93EqaKaqbY9ZGKcopQL",
  "key18": "2Zc8rXPQuLc63FxUsGGRvrQzNx5Zdu6meniZEimH5n4Exebi5NFwErSAVLcbnJNPK3wKnCuRW9iHHqotck6RRWMR",
  "key19": "4QtQ549aFhqWaNbqrDBYSKaA4QrmFPv1KjCXpup4mk1eUFosJgyC9EAtTynBSxvDjjSghd4SFZvbwDSUBofPhn8t",
  "key20": "3734BGCvL66sQ7S4HoHFALMjsrKNFdSz5HxBNqrcTpj2Jmaet7fe69d99jkZwqcbT841L9nYMVuig8edtuEmurQp",
  "key21": "SmUTauh4H2J1cGCbr4dvFtAEJiQpsHCKDfBepvbMvRyZgJX7SyMrVEVNCAsAALDtahchHL7Kz96xN3UGRQbsYv9",
  "key22": "uvJFhnM7xcXumR1fqpwUYpgTPtmS1QMkWG4GMhbiPdPc6o6cAq2tw4fxfRVoVykCwg8zVNnR7P9qnUkvm1hRCYF",
  "key23": "o2ibvTSVzBHBTdHMDKcG41fFdBPxQEQG11vNBZhvuEsmTRZSw5PwTeWsTA7UTQ3pt8zAB5UZKRCugYZhvxCCVvC",
  "key24": "2GXjkLiVRFTQFLziMGYXyqgL7djh69s6fjtdufjpmsYCXsr94teQ4bFSrcwL1RLgkctkH49JF45YyM5YJBSQmSu3",
  "key25": "64omFQyWQZorokJSEGs1McKQ3yeMmprSUfXBc57WHN4eWKeYvKWWhhd8PifkzxwPhN3qPFhiDqVJuUuqfJemjpja",
  "key26": "5YxCtMYXFog9tRMtWdbYbV2V5b9VgC2xCCb9ViUWjMXL5uN54ZpUCmf83ngUKE8dnFTDfNS9X6whWtJLqXqZzUvR",
  "key27": "3Lui1GCxZ7KBUmNcQ6cMycw4Ku1XQXo9KkigBbeAn6oczADzQPkbxnmFFCHWyqesNsRufWLZdM7Mmv98VqvEb67Y",
  "key28": "5uoP3UAuzfqZuNLS7XGzoz1RKjjS87CwvmC4nDDUzwkRhV5p1CF1xCZZB3adu1rCLdYCnkADnjAXbaeozHcdMq35",
  "key29": "47S7rB1WMpqRsPhNTLPG26ihYkQPxXuCLk1VRFfHbHZ7HV1ngeScE6F3KoeSgY1eYgUzgvsAcHu9sPfxDAVnwHUE",
  "key30": "2sPcys2XvsUyKzbYHrmAPeokiBy543VuQZCAh2L3K9sEXkXsgw5X7JfgQdWRZA8C4Sgys2VUYGy2WzgHg4kzwZo5"
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
