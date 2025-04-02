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
    "3QjerA2g1SbDyxK6ksviMLuWGMctsLQP1M5YBaJWywHuwUx2C2RDwraJ7qmUL1P8kNUvt5TQEpKokeYdRwfo1TeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLHvTEao9299Bnhw3KpiuGfHGP8T9kcyo1AibL1fCmaQTvV7FR6LPpas2tTiuvrMiePja1LzTEYWqZJQLWQrxir",
  "key1": "5AdJeT9CXSbdai6HTPTTJGqanC7pq4mszyYPFhLisdvzoBkE4cQPRmdaK48yngxZ2AvWGDmawVJiHbAvZf2RMeiv",
  "key2": "4C38V8JEiWN2tb1jKPis3iD67hbD7BMipz2qe8W3ekVJC5Ex5bxMwbzG2NicMwn8bfsnFu71wSfeTH3HfATA7C2N",
  "key3": "36SZePW8N53b52T6HmS94ed7io4dCWokrA1vjVHQovjLaQNoUGEXgVpGZAw3VrwZhFg73vs6KW9Eb5dgE3fwfs7t",
  "key4": "3484gwopMX448g6P1mr6Kq45iV8uRpsuQktjMtt9maVscmXCuxyZ8YRjZwVHrgU1uHFhhLfYAiug7kWE2hXuV6Li",
  "key5": "49NBka9wG1Je3vSKqPhT6TzSzPaVmxYz37jke7zHuo8Bc9LnkKwSXEP2LjqXYdDJbBGMefKbksFp2GyHhckTpjKq",
  "key6": "3b3cMW8neYJ7BEDGPmi5mBSkjjKXg5aU4ESGkoT2UzDdssUksF321hauNpyBzqDASHKSCQS44VZa97LRrL1Gwf5G",
  "key7": "4wGvd57stk2ZPwdXUrmbFR5q28ohBGMrqDzV53cBbEHVtycWKd13HmhXuvtXVfC9CS9ci7zvkomP8oRMkKZBuwwE",
  "key8": "2xWEuZZez5Q9CnVHGHdHau5WBT7VyoxUfxwEYP8XFsRs3QSX2WxEYak8PJb5nZVJpuQZMhWmsf2Sx39kFjv1fD6t",
  "key9": "2nbBJZR9hddCLKqLvsZeYuvY2ygtHg5sVVtKQHy9UKZqc4ZZgkwaVMPfqtiKPJLnq5mE6jQBChmANBwSjmB8fKtw",
  "key10": "4q5J21TpHj5X1Gismzxd5DifHKeeF3zg5uGQjLgHwouHi9Pkfrsk3iwGU9DDyb8xz78U5QDVqoo8P3j69EmjAZsZ",
  "key11": "y8izG1kjXPSH6ckCTHaKsg1TJsqXR2kk6CeLYaDD6Q7mmSbGdnqs75MmzRXr5XAaJAjFSDtodM2fg6YpFGUWhi7",
  "key12": "3zQjv2xCSbr2jXYV9o5Wg6sNLKe77kwUdRmZKG67C1DzQWsX27y6T4r37Gs7Ag2GUZ3gd9B7rTQ4SjHU7yKJTBYt",
  "key13": "3fW86f5XoGNFaRU2U87QSfCX8U4BuWtKNHdDXBoWLrFKdGB6BuznH1ZhbsQcAeWUVFWowKM4fCs8XyZcv2qpQCm7",
  "key14": "3qvDrKhbvKbBY2Zq69RJQDjzYZTweVHL8obRo9d6rRqt9obZnjTdrrze89L6H7gLcULGruqc75DdxkNfkb3ZLHfP",
  "key15": "4BRG6Nsh8JNSQ1oexPxBhAGkFVEQBgvUpx2peLCqNGvdiCiwJ33FViEYNeiHqMcf8rxNQ2YbFsD7wT5BESryEfrB",
  "key16": "4seiG2KZ6oDQnCCzijoEY1xzcuSELEcFsKQ4gfFGBPHQ7zzi5F3ZrAVt9XgxerdMonzoU96VVzXPAPwMWZcptAB6",
  "key17": "36AJsF5aZvYLSueRJbvoF7g9jsECv1m1By8169LxcxEmyf5bXWiasZgP4iNj61JR41j3SxMp1mHe5vzEPkum3vaz",
  "key18": "SQvvoJnBCctSJBJvYaEcETJGPh94Qeu74CQ3skCNS7g5RYVQ78EcY5Uv8L7n9geN2XuWYRvdMmRAmDtBBu2sasK",
  "key19": "3GqpTzvf1C3J3wmSYR3RKQaiFso2SFVzV9Bhpe3UXux8R6PmqayofVDeUdK8mYVqh3DBisQwCxcAayNBdqmEi3HA",
  "key20": "2iUgVKqfzQMJhC7niZxdyxQv7esrZ3x67sHnDDaFNFsifXGYgggabfYawwv4Qcb9wnoeyTvqJ21wPjEhioRLN1zY",
  "key21": "5PzJgQB8k1anYfAVmLubeDnX7FnEPGCzHARQA7oK4k46g5QY82oBbxnRUWUZ7xTix4aRfovxBCdXMWnGMST4Fo9k",
  "key22": "zDEsFPrYArYHZbTgjvqnGfR9SRiDPfRuv8CBVgwG3iqTvv59uPqJyauaAD79xJMApHFT84vfkapvVkcU9xPHcMm",
  "key23": "HW2646kNQqoVwzynvfTzvBLC8ru6FcVvyhNrpeWjxELyNQfMwpm3R8jB9tVDYZQv4PbyopC9DQj3iSTSTHd7icH",
  "key24": "48w63DMVmVXkqdkxywANPLVoRoGxBSEw1xQ6Bc3MVTFMDBW2V5gGfXGW5yaetRMYQ1sYzUPGvj6qdRLFLiPGtExb"
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
