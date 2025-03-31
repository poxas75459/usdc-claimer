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
    "gfmj42hV7dFmeQNaZiFFe6Ni7mFdsbBchnKgAdt2U5sq7fgvTGQ1J6inEqPWcvuQsxtrh9y65AfbFwKEGksBXio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bc4w2TRPXzcVDbJ2kw6YaJLZec4VfXXdYMJ9sQ3JEJC9jDZSunMQ5wUQDw6JveLaL5mbbVTaxdjm2o6oeb2xRJm",
  "key1": "5howAB6D7gs7YZPhfvbDzMqDrfQrNCqgemBuSdRKodthXTAk8MdSmi49GdXHAjqZgWQsVFScegDKawm6AA1FyVA8",
  "key2": "umswBBxU3VLFc9EMsf84NXa8U81189ZdA2vFaQLmB5MyT8x8CiqoawtN4YTHkvcH22WHQMDBJAQasxkjWLVEutk",
  "key3": "5ec7pNuE9DzV3GGnRkVUS4iH9a5HDzNJWeDL7ihGPSBYim7FYQ1T7vHFVW2GKE5cXhUVxW5YcaVnLQPsusTJgYPu",
  "key4": "43C5xRxPWQn7Bu8raYvPcofpR1uTBCPaegR9Jxd9yCjJGd1hcTCTV9PsuhKj5s2TKFap4Hzw4xVkL5trD6unWdB1",
  "key5": "3ii5n531mvB7dL8rhW95gJxKzb8ZEp3nnkY3zXDqUGKSGeo4QWaNb2uyvzx4hCHDjkwiqLwLbe6uif4bBQsxcN7x",
  "key6": "tZQScsf5ResAGVqDDhTiNMp6fe8dZy6wPbW1UNekaAQdXSZJ15PcAyG5nhAG2Go6AuHHkho4sWnAwDsYruaZ7Nm",
  "key7": "5a5ht99T5CUYS6YxmJ7ioEzhDuXkfBRGkKE14MvH3N4xJSyoQTiBvRBGSKdxshNa9Gs68otFKGBmZhf4tCdSUHBC",
  "key8": "4yD4NL9MHQpzcAvRhESVUNowtUCoudFFXvV1QcwRu1bgBEJQhvvjPURPsDG4TGTWA69Ftqv2BS8rYLnDXSsiB2qt",
  "key9": "31afdfbeFhWSCRsHxDUfnJuohnkrMBxkN5BGWNp1STFjNAJVbLiFg8PbedzCjgVvv6md1aRoLKCbMYspTJ76WfZj",
  "key10": "2XLtf9Aj1wt9r4WZFKXKwqLwtw3cEvLMMG6c8D1PLMMZjpCskCai3AterAE8PEbYd1AQvUVpoLwGCs8mJFYCqtVS",
  "key11": "3ddjPPawRhaaqcGAcDdqLhUxno5yVnGKqEoW9iZcbZJ9RPBW4iMo15XrmpE5q6Rd8e7AtaDFMN3F3KhjsgjTq5je",
  "key12": "dFyWdYU7ssb7Q616zScoGSfqFEf1xDwQWdwS48tb71Cop5NdXAahGxMKnPnyJY35QJnZWxvmjptSWE4Tetdd5Mj",
  "key13": "4yT8ycrNXXpbYwGBEm4WP88nx7Ze6FwiphEoAWa3EeZUaQD3JBoyMETKNqfeZXdFRDeZYrnZEbKrRuEfdKqjgHYQ",
  "key14": "65wbaFsyetUnGyEWC8YwEe7KvqEXcxxjxPjYfcjzGChxBfhnyEEKPyx6FCu8VzaW8Jua9Vf4nxyjeg22TGbJrTH3",
  "key15": "5q6V3S4BjDvkTGwybKE6zhBXub5qwi5mJzZXfuSark7GFtt128BdcDpQsKYVgABhrrThYZT757hVZ63cc7uGcn4i",
  "key16": "bgLUX46TY29ctVQsrWhdZ7Eku4437FLAXMC8oZ6PDUcz5aGrU1dCu8Tpcd94J6SS7nwKfXzsigScY4kiuQyLSPF",
  "key17": "4NMdWwQRJKiyLDYPpPTunDFfofNhst95TFBNQNhXzgChiJK99vbETnDBsbaL19NE3FTGCm9BUyCPVkB5FQSuQmWd",
  "key18": "5gDcAtEBBizHBWaAxUuq7MP2yDcVmjyBJHqz6RvjNHx9V2VdkgVySPpMQQNGew1xcX1ADA6rnYKNGLNwiXGWSPzh",
  "key19": "3DSVupQ6oAWMw4jvuCHGKnu8nKTmDygWS9n3XmETtC6sHCFoUMT9jCy1TgNBa8KvNNu8jRUyFG8wXraUA2Cx9c2q",
  "key20": "hwXDJRFXBkj6mNpejQC3VGGXwcpPpMZ1rm4PKwCWSTixWHkT9qx5aVzV8ZD2aDgrfZQ3SZYgqoXHqaZ2yGTaa9H",
  "key21": "ryXmeD4bDxwc7cdVcDeZ1bBGSYJtntxYBn1T6vWzvRS8VD7eP3aRcXZEieabFCn6Xyw79zyKug1BndtQwAHC98X",
  "key22": "3sZwLkUL3VhGJRDxex3aaBDvFeKPLXLraJ4dtRdKHu97L2mG6jjeh3dA9PD9aXFDtGN7thHrcsV6dmXbXj96tVPq",
  "key23": "TzG8vhPuuZiRaSPXmZo5uTzJ73fgQU8a57R7fxMstXHXihKQT2pjkYiwa8rTs98zCJLqNTJ3mddftPUkUZD4nYd",
  "key24": "3tnnbrG6dCUJ6L7TBqp7NHbjbG4p8LMHgWwacCSwHjhdmkweNp8RaePMNcqnNHrcqi8bdE4onpMGDESvTMqxFdn4",
  "key25": "J9MKBNdwa1gSUHM4G85ZjUb1BjiCHf2nFu5Hq9ES9j9QDqmPYL3Fer1Wwp5fw1RDD8vLBwNdmWTE8rE4DKY1cgq"
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
