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
    "3udSXuZGpJfANxzc57Z1LBTYy5WnPP7V7Uduzd9Ah2ud6quJkfa1yNgSuLJTKBs2yPyKRRMpoxBYmpP48Vr4qxp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wr3PfUNdFR2etmq9RuaT2a4bBWRvAxbYj8X6697pooFcLbLbvtxF5ab5SyKipMSF7GPc1NSck9DFY1LLotVchDp",
  "key1": "hY2CPBFQG8EP8VKhNbrc5npzrMQ439ZnEtPyCZeLTtP1xEbvMatmRpZF5bJVrz5dkf5mXRxFYQTNzCpGwxx3Fr4",
  "key2": "3HCu8JzLWHJ3cr6QrqKsBABc7kVs5GvkvwTpwo2K1yX6YCaMSaxjdp26NvcnqGnwJbZs2DVaNXXsnmJFG6auULxr",
  "key3": "roYBDQWhZEYwfm85y1tNS82npMHmJrLwnXEmYQPfuRHkTnrYhHTDzvi4jD2ihXY3pXda3JrNw5e5n4jTyAJAf9H",
  "key4": "4VxJCcc22H3UBMHRmhPQNUfz4Y3je38A7R9jW5KJqY83JmZKUxqLiu5BjPZY27JpwRkJrW5iWCmDA7AT931hBqHB",
  "key5": "63U7MRm9doPiGAcUijX8i47C2gm9sEbrKXpbXSC8ZMhbfXTxiyHvgr1SbBhwKDGWdKfrYMFhQ6227hiWSgPHYK64",
  "key6": "4mL9QZR9h7i5cijKigC7Zh8WQDV7n7QBZt1gA78w86eJmsuHupMoaB735eEqB2fRT2ob2AvLEJKK1b2yEzH9hujU",
  "key7": "5c2as7ssALatGv9DkTobMoKz77GyhUBvFujpoUm3X2dRMAeQ61paBbfbQovPHAiKGPaN2Hpxa2ozxVQnRcLLv439",
  "key8": "4CJjMY5oqPBJMbbaLCSi4vCyucLU2mC7bkV4ByuKzSsh64km6kBxGwrjxLZTJpYuey18o6TVSRs8kBL8Qztae6kX",
  "key9": "2wMso4MzWdcNxqaFSAakkVu6RFFCtytVuzt3EymMNBnVR3jfv7Ft6piEqpGXXiuUuxD366qymS9vQQqRSMumoYQV",
  "key10": "5vpWQVnYAE3PeBxe6pP9nEK3PK4dLUe5q9mQvS7z24Yxk8bU9JDnND3aaGFoX4ZbthEWYDUEXyCWeteF5TDBnjfj",
  "key11": "5sLRqjbmJxL8TY373rua7nUxkf3BoANCS5YcgJud1oGjpRRLjm2V6UmDNXPf6dL6rc1f1Zu8kCVYXqWV8AxoEuUi",
  "key12": "33P2byL4SmL4hsNKa7CQ3Q8pMKcUnzVHRh7hPn9b6qNnTvn54nVDLbzEkva1GV5rr5rDggLUH78nYscSLPvoBz3Z",
  "key13": "5zvN3w9CHvZNbJSUby7VJ8nrumhZtMkm21YCqV23zE1jSKbmhTU9iKxydD7RgwfvGsPyWKtVXgtbz4SESejFxh2K",
  "key14": "3Lutzu8QBEvsjuUB7x6wnwMGwkoZHVPU1Pp6PmRJE1ug5R6R2ZXrx6jgroPYjMtPRfZ78fxA8SRD4dLPPbReqcyV",
  "key15": "4WYpPDTpKR4ToTgFzVWuT7XiiDxyGC8VWib9kjS5oHRLHVxRP6nuBGGWthdvaRVLKCT9jxQTTyHFvfVoAramJkT4",
  "key16": "4AdpkAhNQ9pha4q5uxno7bhSQTjAUeCpknmR7C9PLdJmL35hf8G2Eg77K9nMqQ73ibX3cqNsB8pRaM8ufQPP5DYr",
  "key17": "3pd3dBddUk7a6Ez3z1jdk16eQQ7vCLeyN2aeoQ8LkSK7jMTrQxHeovMujPjPDCwZ7tyA89CrgnoVBoyx3fCf5MTc",
  "key18": "4Vfpx2NQeaKGCZTdVfQWSLtxgYsKczCCMwUpuSxeXnkpsK2qHKqsWZFgaDoHoWtKcrfMG5479G9dEztijEyZt7NM",
  "key19": "BZBvMruMCtEvBVQ2pk5vXuXWYTTUvpdSaeuQT1FHPYQnj3uhMkuyMPM1VbuqFiSZvJtYaycdQA7Aq7PH9aku7Hb",
  "key20": "4ZkXgVfCygGLUiu37W6sXEUHed7bD3SswSTVARrRQRwrp477SU2ahdvNim27FNdjq1ys4MUqhhTxZeAYdBV153cH",
  "key21": "4sJivJoRaqKpTP4No7YQ3k4ycZUf63rMkeiE7xtNG9PuToBJrKJR9WiHuRtrPMZygXe4MthHMjLXNiNrptNNXfJD",
  "key22": "3AJwnAqaiZf27TvGEw6spQiyUGJJi5Pr2rzm53atkFSu9yJpf6JrFU2kBb62LAo6PJfxM8jZsSLhK1qH32CLCn4D",
  "key23": "fi61v8W8LCbjkQVkfddj91VBcHZoxwr6RcAGTzJgyNedBj4QHATAFR6JpbDUrmUGcAKHBP4Hm9uxcJVsSHoS8S5",
  "key24": "2dKLUtLWwaJu5G5Lok5uvjkGRbjwyfxj84PLozgarQSTsLePjinCZHSQy3U9pagfh3B3PGuVTRZRkbaG98FyJhdr",
  "key25": "5iWBb8jKDMKeBN2UBCvGFNkWUD2Y7vB5PNpkH8n21LToi2bNsoWh9e593CttZiKyoVnGrQEQcq9zgfKWbp6VctTM",
  "key26": "qCD9snyHeUvh2rtYMHh1XScEEan9T4FgyF7pA5rrsYiHAjQUFJCQwk11G184VfXfU2VjyazN5rRU55ZqEr44XZd",
  "key27": "3EW8bGooCVtdTb9b1udSqTLRTi3awabXrkYi8To8wqWCyuspXPcamotrZi5mGserUymZNWx9EHfSWsjVkTTNyChA"
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
