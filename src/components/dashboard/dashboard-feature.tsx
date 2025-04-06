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
    "2AJmdoHKf3rPjpBeabeqqWCnhJuuomxCdzVW31tQcoQVGiuyJGL94ZCmtbiLfLoh5i2Q9SBax9mRwfBWS15PcGd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pr9w6xfSrxd9oZ7qyKetoRzYE2M85BTPrrJU81cZoGp8NYWsyzcSuurx5MTEfGTyw2DnvYFGX5ia4Ddhn41G2ox",
  "key1": "3gmGD6fZU3UGVw9ofXn5XBtYm7q4CpzZpANvGp21GQEGcGwdP38i8e1PXTsUf3WpBGcrTu9qyn6Bq7jS5qb6cbsB",
  "key2": "5VbDKbZTuhkdrpvGgFp6c7ymKA3c5J2kfoy3yzupRahSc5t8KRAZw7XdaPpVmj2EM89KdiegCgQd6MTBAn5VE37M",
  "key3": "3k5Bd9M84Kh2bAVmrjHSLqBAxqsmAgLm8Hrb94K6qF5MkkGQF99xfh4kzLvdYhsN4RBT7VYbqjb49ZHgCfYg94wy",
  "key4": "XMC74Rudh41zFjsrmMeFhz7nDfM1JJMUjBfu4hrnyqGKRAp8aeTq4J5VYnPixfmuHsCxF8wgaABxxXUBCPXdn8N",
  "key5": "5Kd8QiZGrTgjU4JHELaopxb7Bt8PCRPLx9Cmu9PuNe5f3d3jE6BW3cukWPDk8PoVWPzV1jhBW82pqsLghYmcgdVf",
  "key6": "3Pd2caFipkTxZdh9fTTJB1CrBFxCUGT76Q6WJjWEVCtvWVWaTjb6ESaPa1abikbrjBsdjbZru9FPNDhzByxjvZ7N",
  "key7": "uWUx3Lj3MmR8Bs9aAKovamdjEDYntxmv9ekTBJtQwhouLdq9y5jvcK81aCaJNVsmizqpkbcKUy2MQnDhAWgtkkQ",
  "key8": "RyjLiWfJ2qZNsCz63J5h7ySxnf6vq37ZpS1tB5tSXh1dqj3BpX1Fv5vFk191pbzicrvcW6GzbghAAn9wnuABcb2",
  "key9": "3w61gYU4mrFKFESHNhczTxkst8ThjzCuwjUAdEvkRs7uqE7Pxu2F1vyXzfmPG9C4kjRi786RnS66BBv9CX9ofBtM",
  "key10": "2FMEfawoUJYYsu6hTgE8ypdWoUdFyvjoaUwrBmhqdYBMXsqJmhEbbxiEmg1gsFk9C75cq6TXcip8oTHJ5jz6NmPV",
  "key11": "32kDZYcHajyi6uGYnhVb7atd9TBeb984TjWj9F4rurpdLduTs7cFLAuSRYBHZb3DMbkjx2TefLC92oaRtqrKK3Bs",
  "key12": "56AsMbEukW1NR5KUnYkphepjziJR2usj7iuDAKGLhNvqVGV4XYbhJtmH1QMJXZ2i2ctHXBhm6M4c29K9mMvKpqU4",
  "key13": "4RgVUqbzgMChKsdrXt7BKbZX4V5TiYQ6hSx9woFVhYkfY5HxmqKYwsHrkiwZWVNePMcHDVCnaTrrkc6mni4q9AmF",
  "key14": "DRzWch9sk6rvgBmgmZcssuj8xrXX8MXBqv9AqQRUxRxLRtKasiYNCcL83q4EuuefpJwBqS8JDbfmqrwfcgvAuUQ",
  "key15": "5apeepxTJSj8UetX6JuV9cPQSJJFWrbadwpdRPEQnjPaPf8gtUJpzZezJg2bpg4m7RHzzcPcRKiuppnD6caHgbTv",
  "key16": "5yj15wbFUQixYZNSL1DoqjV4mnuKYQTjKEDg4wZWjDTo7rZsir3cab7HkUtg3YM7M1uuL5B4Epz6uHwEn4dE5Gk",
  "key17": "5NFxUWYutyre8rz1DJR4y4DaWaiy6tTSspxDo3XB7oVvk94kYgTtuJikn4zb9mcVPHfXhNpVuWRWETY43yq69ZEK",
  "key18": "3VW39tL2HHCaZT13WjwXfh7pjfhraqEkMR1gaDvDwUSRhbZvF1YsMD1sx65nmyv37PX3pSxtmrkA8aJPmfsSCj2b",
  "key19": "HUSgCZWGnJa4beKT7wu9ixwBpFmuuP866khUDfb7UywgJFF8D5ejY12ABFXst3y4VWqd7MmGbFUgfQehaZ5q8Nj",
  "key20": "3dxo12HtkSqY2wkvnAKDER3B5w4c1AmUXP9gH9J5Y7cSPHbj46ruubN615idgAT8jHcM3FAUHZw6EhZ55WHEbZeV",
  "key21": "3YdD48fQp5GeWygtm2bdE24BqarnwwcvrbwUfxMBryj9JDPmYSZiH6wUr4D6aXmiGATLRBWFKGib124p1VW5qJe7",
  "key22": "3DvCa88NHjRUvDo6ZeY9ghjUrsZK7tABRKqVc2aHTviPdgwTeZbPTgpJSUvy1YK6HfFYysPfVSeYvJyjXZZPzh4Z",
  "key23": "4JYGhgqjobXkew9vFoiPgG7rV9H5icPspg1cGx5Jie3wEpB1K9WRyj6DEAQdoRuHbFF9cgj2KfgTec81XSGkwLPD",
  "key24": "3FDDBSmyoCCRjcsTxuxBhtYpBtWKxpuYxqRwwB9k1Qu3idGcQBMQjgksRu7nNnvRtAKbjm7BA9rTMxBp7LSN3bZ1",
  "key25": "2ajCoAhwrADbwtY1f8BmmydXCeLgtqPy1kHcW2o6GcyP6ARtqWBeUL7UN4EFKai344rSmptWtZ6eNu8fcudkN4YH",
  "key26": "2626QHuER1iY7fgruwmMyrLAsxGMUYYzBm5Ze4x27dz2xLpKoFfAWArTxLR15oXGSXmDPtVtZGHPDgZiLzv6q4rb"
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
