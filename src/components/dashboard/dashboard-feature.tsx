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
    "3LxjY2ZMAf6afdNTCLZFtwCS6bYqVrJjz6ArZmoxsCj7ku8PwVEA7XzHGVYXqymadtixK6DThAB54BD3JmN4zjyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23MFFpDKgz9cqS2mi9m9g99dgcCHaGQbqpTgJbdXJpeY5vDriVHeBTae166dfLT1KuJviFTKUg9uS2RP7KiuoqDU",
  "key1": "3sSKmf3q49hxPcEdkQeFiuPVBSv7XBJFXiADLXLoRY2746XUovhGUnkcdZmF1xRpaRq8gLCgRcRj2tzvej9f3R62",
  "key2": "4XbKNhxeDCnBPx7xcUUV5jCUf2tti3tCQEY3jw4WNri5jiZVfbw2sEnYpQVHGyk7MrWFLXMfrAJFWgZhuXKp6f2o",
  "key3": "HARjcHWVGepERnmhFo4cU3fhBWAZsREgeFMYdrtqHdUnJp4YicY8Cam87xuagYmsDJt5DCxfqBt54mkZGDRPhvJ",
  "key4": "2DbBTMcjSLJM7MGKybQFMeUW6GXdXCw4jhMh1bW6vb6SCiixFuH1MFEW8XaGx7e8QvUJsSQepv3eRuwQNB8Pj1wU",
  "key5": "5yKdkRa61FkaUrnGcK6V8TBrJ59kb9FbokiS8z2MQuP3qF86EZL6q1GgeAZjpsD2SkZdB9S999hV2xuevgW1EF1Z",
  "key6": "3t6TJRD7zdgRmDRjuFV5oT6KWqG1cqBoojfjRqfDpNSwZ6dxpNMg4wZjwJEMH1iJLXwpkQaG2wKLNv4cXWa9xD76",
  "key7": "3adyfRT4wqYSvypXKbGcbhHbgJLDsDTiE65auNLnb3Lv89VYn84jyCiQy2s7mXJrrGfYiXEjBTPxPjBCSVdgiinL",
  "key8": "4fdzcVMwktmhuoWm9jp4pgZvnCJ3x3piy21gHdGJCrcaXmQ7TpQWLWpDiGUSuXJ9ACGtYcck6vabYTDXZ7385WS3",
  "key9": "MWjzU6ZgVGh9qq7SoC7wUWXvgNNDBHPuJrsJefcLmbCC9TMvrzWr5Vq9dhcuMWf3daTcYNTud3qmJ5NXhabLntd",
  "key10": "28cjmRdnjkQQANxYVTxiC86F1aNhAddpVUqkkH1vwoCJqkx1J9N93qdqMQff2VDHbkKMdSXbHmt95qHg3KnoACS8",
  "key11": "2P39tgW2aiqzojqsrJY8rFQD2z2bQFoJUtq3rS97sd21ya44zzb4N9wvcvmspGbPizf2EhEMJ8cZAfUJMptcvGJo",
  "key12": "4WyD9PLpiyUaPykJGuJTGYDBvfkHMDNQ3i7Bu67zmuKnfvqhqse6rRGdkDU4sH1hieTbVLsC4EjLe7ivieqyN3mb",
  "key13": "395deGb5ZhFNSgMigDZiaD5gT8Zp5MF5E1wMwYjPxwZ43BK1BZA1kdK9LFqtUacZqvUYTnEnz3VLs8mQW1BTQWdc",
  "key14": "436cRoJkK2AbZiKkitnn14WPto8Ga8rhhgayhA6saBJdKqA3t3LFx9XpkCvao8jPfp37ZetXBgKTuMdJx9SXLg75",
  "key15": "2yMreage62rjLoNi78fXaWE39JQgQKUHsmHhJrKqxVjN65fmTvgHXoP9YJPU9Erxy67cF3CM1UhofWUJD46ug51t",
  "key16": "M7tFwuBn21Gukc7kkYxRLzonLp152wcTeF7cMNYtxejJQARZXBfcmzcS9QuzTCi1AeyTiLhrNcPmKRk3LrS6fGh",
  "key17": "PyL52LebYUBuyCnu36qEjupMY9ZPdeZuCKA9PVukoMofyopJRVNYWYfbwDmD9huDq2E8v3YkfqoAeuEi5gzDdgu",
  "key18": "59AQ2QTRTgyUknN3TU9oNU28RPCxMw277n8zEdA9Ji6K1cSSFDMxVTNcsWY7LBD7ftHcpajDRohtq6CZMDNH5A9W",
  "key19": "4HXZTNakBFCBShJxwkKu3ayDiC2JomfeAv1FYLdCkDoB3WtTiaMeLB2VG5kuDwWZCMKMJ6LBf2PPtD4c1crKb2Fk",
  "key20": "65xGjxEF2EoeqpEuNZyrNRe1CmrYfuvzJ4cuZmZ9Ys4c8uHBRkE7oVyrhifwypqqxjYLCMfCFWGNh7esAhpxYsdH",
  "key21": "FhsP2ic2KNBvHy8wmoXG5gbrAYuhbEoSCh64ca9qmVzoTyUKavMDDApZjLJPMZk7dRqQD2GFdbgTvipU81xLMBC",
  "key22": "2BofG5Ct8LWP9FWhgX6nQwFzQvvqkHHph7Dfu8iguWhgfsVgUibUmLYKMpNCxbrst2Gk9EJNjAgMA4J613gbnVY5",
  "key23": "42R97is84UMT4pwkJkLjqbgLyQzcf5BSJ5EjfMfA8c9FNWqxsBHSbksq833xiJXzt7xroxqYfcNm2xuXf55wCi89",
  "key24": "5teNZfU5AXJhpJHipS2CJLyb5QfTAhSRhKkayNPGXs5TPQKGgv7RS12wb1xTxkbFZ5MM7X1jP9ZREQrC8AX3w17T"
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
