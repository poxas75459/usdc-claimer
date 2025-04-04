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
    "5Kok5eS1o3V7tkxrruT4PxMmPGf81YYRfS3vNSxGghjffLPf8MED9o3Wc7HuNhgi7b9esHPotM63krQXHUnkJBUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yWFep7uJq6LJV73B28fDe7siwfNyhRWKmNrWqHfH7u1ibdsxSbZMbV35Lzca5dFWEpDHifeeMGYAbk8uLTmCfF",
  "key1": "3yz8eTASq4nG8pAVx6uHMgJHiVWjsTThUf8pf8t4qB38tKFEg5mXgu6ivVUghmMhxRPZM5Mu38BF5jwo5r3j3iu",
  "key2": "auXUwkkFuhjz9bEKD81CWbAx7ft1AmLA53R2Lf8MfoBCvPW5YWpcBLKSgHQnfFur7uyZr3oxaFgeo77aggaZw96",
  "key3": "3aVadQSHtcX5dUopNDqSoP5VZ5rUUiN9zHMy4y2Vhwx4o87NPbCWeu3mvKhy1sCPAt8xqQuoi6GPERRoVC4f8GrV",
  "key4": "2M4xU2hwQobKXeGYexAahBCFSAETDWxh6c9sH1AWR6zneTnQWecehwQtTkVeYzP2nmxhrf6bz7g39XeupJaxWqNM",
  "key5": "4X6NUnKjgbUeVUfQtMvd85jacUp7DY12Hg8CCMZ8kGjZuytiXLkPuEMAXRACdjrk7LzHFjdJVHgQmrRp4wwwfj8m",
  "key6": "3ULDHkSkUoQAk4JH64hn8Z2YehaaujdABcRQAbCzCvnUxavQuL3rqf11j7cSJF9Ha1ybFLy21gKA8iRgMPCQJdD1",
  "key7": "2uJdjRkp5DZiUt8A15PpEB4PGqgscbXZzs6PMyUUj6TErqVdFjmtor88jxJGjVyKBxDCqcZYkCwEtCpYLdRxzHdZ",
  "key8": "2ZE4cQLYmEReouk5mF2J1Y2FXgouVSGgC21pBN85zow5jqPoknBwFKBhDiecREd14a7qteFTGz7J857Jut7oy2o",
  "key9": "4bsE3DNdZw3fPprKKoxSNjUfcWEAYYjgKmVjiEwRHmvZ7pmNfAqrSWcLdtQ5aeED1okMPAyEWRnXENYSKM6nPQaE",
  "key10": "5X7BRQFdiE3oWNfGGakVj6Py9nKqiP8f3Dzct27J42ZPtH3oKwmaEy8B9X6R1Za1b5Ep7BmXztsmejhbnaDYPeN6",
  "key11": "3SEFKbNnV2i6WgKfzXJXK6Uz2aonr2amCSoATmcBLdc5w5rfjNree1fgGGxNY6Kemo7FTgmFHQJX8q6mdG2QtFJi",
  "key12": "3uNDs676kAqqANYdbscHreLL6DeLL8qoRmSi2UHqC76EZ3TAjJgXYZp8ZKH7UAq9Lrwo1zGm5zpD4YLTn1hujcsi",
  "key13": "4z6J7LcEJCMfQZNeaoqAKJ22U6anVbA6xaSj1SacH4LzZpUogwbzPFYzx6KZsXCAyq3c2Ty7LuxowzkHmyC5Avxa",
  "key14": "2Ry1SK7SmKbR217xLdMT1yGeFPBUqmGN7EZ5AJC2ePo32ftFK9UMgP48sQ76Eydqs6AFU5cENAwQ6BCaUZo5cz9D",
  "key15": "i3AZSyMFH8zo6MhSZooc1t2CHjNNnmeNtQ4gh4UEHqD5AF3x8rXAzLbspiVMnYz735ovTfLB62Sg1Qz4zRY5E5S",
  "key16": "2pXKTC6zbdMnAV7uie3joLUbAkfDy6qveAp8XbLFFaq813wTdsZu9KMmWWdRmutCzGKT3vsHQDnkiVek3pr59T39",
  "key17": "3iRNfvvpaazFPccEJ3yx8aUCMs35ryU1J9gUYZimeci4K4wgeHCjc3KKBVqmUiNcfKG3hB1tKT5nsGDzFhCaegbS",
  "key18": "5KtK1a4EzWw9P8jKsNoLgRXpvzz8ur8f2rcCiedHLvLEwfBnDrhfK2mB78Qeazxk5q6wiWTzu2Ft6zEdhpLibjod",
  "key19": "5Sj5A5vpu9VFmooGJwPKNLLHuuFVMDaoz6SZsi4HheW7JhMgo4FPDtGkXzMQeCEYvaeYEgTxDwus1H79UCrH5z3z",
  "key20": "XXLtDefQHTD2NFARzjfhGCx4LFG2SEjvCmWghzSZw3y1z6CV2y12MLRTDW9Z2y2134yMmAbw5GJmVMusXSfVJ7D",
  "key21": "4m5C8boVxEAVNdxEjL6zXF1vHEFv4WcemiTHoFUJB8E48CMabWYwbXvGaMit888pM2hJ7Qg8eNxX8Sm58zdAKSaU",
  "key22": "3MQswFsQXnHoEYCiNMnsg6e5YMWkwgPE4RzNSqXqc8xzrSawnwbybauL2BcLFkufcDPoH22vdRYL1bvn4FP8rVTD",
  "key23": "4oBHZyC2NsVq3fSnBecGNMkbiPP2dKrmuBHJPxXEyF2R8C66G9dtua9AH1dXsRiwGZgzBpjYFwxNUchodkrpxamW",
  "key24": "54zo5uo4Ayas2Cw9zL2cmc7gGfK4Rs5dmdcUym8cZHjoa8nxK1bM4RGJKiVzPtjrP9vjthZam6DBCxmXXSNswJGV"
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
