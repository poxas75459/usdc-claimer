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
    "49oj9weBEyoQKkgmmCXZJzD2WYyPbZgRHeQJgNMdcPzrVmfiCPknHyzYL2riPeMkVnrLzuYDK63CntQKGWvBysWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYoiVL2pGcQDGj28UpRHZFTgCwoge1BTkHoN3aNi5ppEfPntKQvVrLM5PURH4vaGYs9HpGeM79zQujixqcPQKcd",
  "key1": "2sFSsLpc2TRpKR869kHESUsP3pDm1PuVf7YcBgDfAeCurgVyrPtss9UkGMB3cmyeri5bLv8ARJkNrRKPa6BoHvsP",
  "key2": "PSWefS4XEh8oovMpyWug4w76D4bM4ULZzag886uQT6195qXXBNe4ygai4Ns7c6R45gWxeBMLQyzWmjRNfzisXnq",
  "key3": "4rGLtghAjBrbp1NHd2GPB8pGkobkiC6pYiEGn3JudkKxYtFVDXtwdecXEYEuvthjYobVaaBLaA41pRwnjkHndxQD",
  "key4": "nr4ik6FuH9Cd8MJkJJgyc9zhNLJHLKvC4zpKigEncQVHjdmK1h6p61EyJPVsZCUL2H5F2T5PTHFdGHDgrBsiqFC",
  "key5": "4ZrhgCVe7rCZ2ezk8n1ctXkPULvL2GAErzdLkG75CuXKY4NdRhMeus15WnsGJUWefe9S9fe1HhWTb7KYDaKwc7ix",
  "key6": "TRsDrKRnVWSZ3zrwR9fEodVxpQ37g2u5U2gLt7J7JEsZP66o4pgkLxzfLutWhwfi45Bkxe8u5xfvF65B8Ydbse2",
  "key7": "2AbE5rcZ1x5Sig2cvtkPR85XURUZwT5HM2AJPjEqoEQaQqQStp52D73aKpjcjEJZyLUoFiDg3nhapaqZUr8bE338",
  "key8": "bHwi8HAowCvruijHh7nCgbodybi1FThFBpcTXMCPrjM5Ug1jrRXWoHKTF47dewPc3WUc5VuCJnnf4gNyWknr4KU",
  "key9": "3cQQydipyDnu9AD1knFvAht9gNRCUru2h9TLzPrsRHKTVPnHX4NsJm1V6h8Vzs2fkQ3wbMuFf3DiVuptE7aAhYDE",
  "key10": "3FPURZNxaDS9vhQwuwiAGo5KCDGXH6aNNMG7gSRPdm5CqUYbnNNjvkxPpso2tpbTvZirU3pPUHj8KGUtLKLJv4ia",
  "key11": "5tDgyjdfPWrTVCiT4VocvPrdAcchsP9Wk8cobpxaTU5U9eY1m9MT46jtfjo6PQHHht2HpvFAGGj9srGxKCAWk1NP",
  "key12": "3f9ob3yvT8YX8DtjTaGDnGJY5i7Wz5ciFS3MgpAcdKDhzTAYJMmFfcrf2dvMcLa3bdmFA8pzznGr9dsu9hKQGKnd",
  "key13": "3Z8bfUCrMWE83VB3sJwKaeRywdpM726Uwky5ZS2B4LApvDbkXqacZ1x4eAV9d4kCjQPtnQ5PeQKQWaF3Dz6k8TyV",
  "key14": "62oebg3fpy3JxXJRqZhcPEECxGf2GodvetKLUWRpXKyrgeUquGszbdk2Tx8Y3ATAdQfUiJC9XhJAB2ESNfaZwn2d",
  "key15": "367hrQ34nWvSoLZKUqx2A6u2CW1aUdei1ikDpfviC8uWSgPwzjutLGBaCQBuMXwt9a1yvcvqSggQLpsTazyk81UW",
  "key16": "5fpZwB6CpsMU43AKtEy6p6NuDUeik5y2GseKnxvjjFJB4z3M3AZVrpEhrm3UMKNVdE9gFDB72eca7XrUoQpzs3Dj",
  "key17": "2WxgC2GomFcxcBENg5LVH5gmT8jUE4nzYQjKSoZaNNXyeHqepyJo1bX7orQ7Wk7WnujsebKYhgmbbWswHgywaEb1",
  "key18": "43XFvm2nnyePTsUc3rvazif1UE7HDFEsuqNU77v42ifv5u9xfV1exD6UVDoPLQRakyjkUcxbdMC3Rr93Nd3vrdHQ",
  "key19": "3m3akUgPSJ91HSMYRDQqrigH13gU2U32YNgZopyzYWE4wRcG92qtkRmNZDqENbM49jMRcrRmF6TRvqwoXgogrftu",
  "key20": "5MTyJKjyAX39bsVnPu1kCzHTUdMWTXBJUfkmHPziQrP7umHP5JK7PqHpXr67WGwG8xjf36W4rSvfZpmhBwn6Ji4X",
  "key21": "3M5QPEXqNEQoTzaeSLCGrGEjw45EnftsbB3jfcJhk3Sou6aLaiL1XE51WkJ8HuH4bE7wBWdMzGDTc6LXpkcnUHoR",
  "key22": "2tC6EzrUJKWBzWSs7R9YQDFRTHMqnr9zg9CRGLqLdim8dyCd8u6hZ4aRerwFeSiRjBYBCgEd9DdBDXwm5ffcqCaC",
  "key23": "275XdiJTAcywsiNt4MrHDdxqRgvLDyJs9VeUQKgWjte3mD7b7FqvxM1E9gtDs7CAejPSiuXuaVXfoi92GeuaQGUS",
  "key24": "3Xb7HmhX2mFq4x4P2129Jh5TnraWNNrvqXELvLh4498FBb1wk7xRP3sN2qJbmupxLvLX56TZwNjmsACGUnbAaaRp",
  "key25": "2Sc3qp86qsVBwBDY3TQF6AeHZdqtzBC3JTdeeXF3mojjusfAptH5DYx5DTheNZ8cbrXvuUQDYxmX7XKBAaxZZcgL",
  "key26": "HkqH6syWumqEZzc1zyF8C943NjLutBPgBn7NBw3zH3kYQXkPgXLQoU4jBt4s65RwRcogwghYRHpoz6NxRNvTHvE",
  "key27": "5vh9YDdPoJ2FgJKdYVuoAsG6DHTnXBDULD7HwUoKGGB3KnqvoLpDoCfqRbkJbqWvVgs7jQFAWVuHRyFpmBLzPSDM"
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
