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
    "5Dgo4rsYwp9CBzw5oeuihJyyh33dVqqBej9w8qpK3Vmn7hY2RZVXgeTLyieyoDudFr72ou1qA4X7Bgt8pW4mJMqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJwYVSfLMsbNenG9APVfbN9y1wNEmoZQcNDJ6uhP1z1zSHmayeuc3VyGGW8ffF75U9yXZeS9cxqZ4ZnJGGghqWP",
  "key1": "3LeXpBRrdqmebxdbhpLhsidsenUsbggkmZ4wj1gmZ67c3Cyd4zBmkJUoq5DUN63NZbBAgiLXq86GSkL7XLxEwnX8",
  "key2": "5G3KQ6WBQ1FdsXEtefHfbf3MPuMUXXpYqx346aVfGnVcWNmuczdb3DkFcF8BfSg51vQ6dWEm1wVw8nxtykJtSyYC",
  "key3": "4ZSBs13WiMMDiNNCH3WfrZfw4qQCtRGbLocm6DyDokkNbqsWdyNDcVxeSDBVJYNEW1uWKH3J2KXX6gKw4rZaFiLj",
  "key4": "2BEkkADtkNPcyrpuS9fbN6nQLNHnvbgNM9TCxoLcQZcPpiCfL6hi4hDRN5n889krtb55u2yrHgurJC7GGpSEvHB6",
  "key5": "2REdLtPLzLsBDJheibbRVtYBzUQg14CehGZVJcfBR6V6uypeKEwshpQiw3q8dK3JjSRJHFg3HSGYdnmqiCGuJnQ4",
  "key6": "496d2o3tP2WFBVEvaojtTw67eT5nXbY2C9vnhmhrwpHU36gSHZMXXAR6xG1xTkqtPBjMp7XKGBKbaYvsPJm39Yfn",
  "key7": "2ooQHmxfJoeTesBG1g7uy7RzV1hYSaSp2YEBF17NrNp2HT3CwCyV2XkkDdUpLtfRByYgZw9hjr1KugbzED474a3f",
  "key8": "29AF88wRetuL5sFV4Uhj8Tu5AVjSGQGYweKuhFFSyCexLvLj2AYUHSzEVgDHCQzFMaJdCUuimxKEDsH7wh3PN5mG",
  "key9": "SZmzuSnCgzothNoUAZNWQuFBnJfCsYs6DTx2iVbhVdygs5Dgd7krtfpwQbv9az9tNuDacJfsFxXUURLLs2ZK5VA",
  "key10": "1MvWu9Cj55ryhPBFL5WLy9yc2sUNkJf4eKSq1qvSbeL61FLHEjnreinVihBUntsGbTR3Evg6ScTBSCsvQC7r53H",
  "key11": "448NSmJ1VVqdjT1pVCHLzfYAS7HM9DZAhntnL8Z3mayUW7QJK4pmtbe5aiMUHhELmoR4nAEWtVyWPqpMBM4Hmp9u",
  "key12": "5qYR9rLM9s7MFUFBwS2ddbti48qQtQVrup1prT6HiRPaw6krEk7Tgte28UPpdRcmytwk2C2rahHbExqFK32h4FtH",
  "key13": "3ASFkytKdoEcqjn8VUTfFCkf7pRjHN21dPfYc5obmLfc9oTET3rU7pJ64ESQ91PRdyG8HuTzHG22nyK37EcRnDxy",
  "key14": "3YNGTgEqjE6JvwU3YtdMyRRxPBMc3q6597iVZYMSjNvhC8kVhj5xcwJJ69UnJFhFFRXuUKBmsN3vHVrUZUbefaGc",
  "key15": "WnVmiQFCzKRViyWe8AiL5iJe5pqGVeEhCPJ15tbkJU2CdyyM1DYqqeiqysBKryNjGnLCYFYnEESsH3Duyx48LCd",
  "key16": "4pXR8jV1pMUo7GGoyDD2acyLuNo9EKLfSziZ1rVhV5Zov5drnNQwdwMPPsL528Ux7oyxxFYAVz4ntdvhuZfeyY2o",
  "key17": "2wQK6gDJPGrCobDbQRNVafBkWraW1XMoSqVcZSNH2MSeGP6x2upJCx54dRv2WJ5axqHubcqmQ5HzGuGEnFwYU2sk",
  "key18": "pVsVTDL6Jkvr1pHe9LUCzYVx9LRgfw8Ri63PtTttzvfL59xMLCcRk36Z6oAGzXyc3MapkXkpKQz9Tc83xfUKzGk",
  "key19": "HhzGbTHhGBvQ24QsgtU2kEKK3Wuen1cWcXhzsxuzgZZXkekmRwLZNS5JaWSfhxoM7Lfhy5AQhyuM33Fho2Rxnn5",
  "key20": "2NqCa4eYessntkURkuTaYYza32W4ToY7xYQTtFNJNfgdmsd4Bd8gEk6RgdJVDLAx8uTRNeEeyVcGdrtPP5SquBvm",
  "key21": "49N1L1614oQFSQJ1ZjPwXvHgTxkRDMf8sVVLZoWStMqirYCJEVSaq6VYTb3cCeFWMCWXo4eefeZTzgRNnHN35BMu",
  "key22": "3uKkbV2DCPZCnkqdSt27eeLSK8nqnmnq5cuZz9Cgvd8zcb5q9e8UVndABrA4u1CmF1rAzznMHZyjtGP4vV964LsF",
  "key23": "5NVQRXb7gVUXbvqzsm9L3P494pei45mhKq7q5NUE7rbfapivvhPugnS4FtfTLNAKMPsGgDmzyqoXhFexX3AYxTzJ",
  "key24": "61F16sMEVnytguixcSmTQBDjSg1prfqTUsTwcpbcsBof4YEbA5pt9u5tjLkmsrUW1FnfMEu84n5AXQ8s545WPe7p",
  "key25": "4dDQTmeaw2F1gLowCSZLNixMEW7cZTbvv39tfJWYZAWr9xk5obZLd9b1UPYgBogbQg7YoqTz3ydg5126vJvJPhBi",
  "key26": "4d5r7ZJFMxp4r7P7AZSSYKJ2JNExjtCJ86xMYh4mY6RbJp1MdDuHv12c2u9dpmGHsChPiT4DrAgp5wzTh3oQf4Jh",
  "key27": "3E51DBT754daD1vfVtnkz8n2byrnpePFMmUHY5Rtm9pzxpq5aTjj5fJJVuWdfh2nQmj2TTWqYmWaVpA8MD7CkMGM",
  "key28": "4khMJb5tfCoBgo5oLFRuUibH34toW2MFsCR8UdKQDeDbK3vGe91VvvotJ6Yrw5ixj7Cou2oxASzwJo7kVWHCrnj9",
  "key29": "3ZE31fdiGaE5jm4aMUhgUmjo8iNXmXERgPvCH8ZHUZLcTgqMRBAAJjZF5MkgqoSSoLLRYbBLdwEnRgAeuXanQzwR",
  "key30": "2HPk7kT7rhM3nrigXhNZpgZ1TX7RAaydseQpXDsty6Zq8Rv7i63WyrratKnCakNpA2vLq5u2EmJ9gdDJu9Vh35r9"
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
