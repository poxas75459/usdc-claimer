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
    "4o5d2yU7h1b6vavDwKHcyEKHjhu26XzS9QGWNbZDmTp3UUgQyPFqn1r5BRFu3KQJrXp2PYMy8KZYhq7Gzk6MXTCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GXRxRBrCsyXC9emzRmQSgBK9E6VXf7daJDmeLMornYh2Kt8DYJGZ6xSJ8FdTJBSBqBVfL57boL5CsSon91hM3b",
  "key1": "4cFT1xHNhFgBPgDarxQ15FZzU3yJXSsYTjftPFE7GBD2XFxnFD9VSGKKsy24eWjhTK7yBjTZAUkMPq9sMJqrm1zJ",
  "key2": "2xoxNfwBM8Avq6CjeUm6NfmZgVSUbk6RZpU4upT2fyWBoeP2dkgZW6xa6XBUtzzhnmPC58izupTiAyt58H9XayB2",
  "key3": "29R9DRWXQ4WxkujzAVbnFv6C42RHEtEgG9cPvuQ7BUjbF8RLTAQvzGMhXdAH7zurqdiD3Z3qx17gteEGZ7NxN6Bo",
  "key4": "4jK3LvFBLW3LSneXM3MkmXRDXvSKGnDoyZa9Kh3H9rGvQ3XUQFA99Ck5CePL9rc7htA5KtUqYpS2NsyoT45Lg53m",
  "key5": "124q5PzDvJ23bTCBTBmy7iGNKrEoYE3hY5dzsxWibn6BJfDDrPJLSkv6Gozk2D4STvSNwKjNjQut3ezd97it8vqS",
  "key6": "5siCzCLAprVmb8mpNZR9uL8yMesSDg4qZVxvrSjQuJC6T4KVhwZy54yyKqvVTKucSekkMunBtf7dVYq6C7R1RHnV",
  "key7": "5iCeYLSnPxcy8qxFxC6f6wbJ7K9HkeKPgCG5h3XCYMg8ZX2BvX6C51d6yqaeKCVVsd2sKH4wqsWCHTWP2m5tVxks",
  "key8": "26ydG8V8Q6KDF8CFSFmScH4VrnKuvs8WY5DvTAyZ4dgkLhq5Gr44ahrqiWuAhU8iLiwPw8zFwuSZE64TWoNSmLas",
  "key9": "fvbkSWSuC8bMFaDLZq6WPhnuwSPdybhVYgnGaGS2Qj37LEXoajF5njTPGMKyFib6Vo3i9w4xPHPiNtWTaE4q1N8",
  "key10": "4t8D49KxAbbdKThedGTmRxL4edP7nf3D3QP1v741HqNAxn1EY5yNoUp9A897SgPhUZAJA9JusE9V9n1yvkMghDLZ",
  "key11": "59ybscd8KK6PwogSz2CU6SqQN447snaC9GU5had4aE1zXNircGVyySf8j6zVNKpjTXb8rvss9oMnUCP7MhH1jsJt",
  "key12": "3A61i77JuLwT9UrytEeSyBxgbaa9KbxEQvncToA4XXqf5eLzNsjhiGtPFeLeiiv1uyAX53xJwGMGn3eGDjngTWeb",
  "key13": "4kpLmHBuSW3HbkbDCBzc9dAqXMoRFqNXqF9jqHLQSJxkctqnNPA56511GbCAj1onhjMVeDoaZoxLKRtjZvyCpp69",
  "key14": "VJo62ujBsnvFhQtRPKy2je6zRjzQ8my2EaALKQCZ1SYdnm7Mn6kkGQfF3CPBeccUQhPgZFxWi2f1sUeSmvrHA8n",
  "key15": "5ioJyzvWnWi6UpcSpFHX1ooyuytuTRdBQC3nyMUZCodsGuXHkJfuYuTCF12sR63ezN4b2nFzBE4kHQxHKFQ3BWjG",
  "key16": "5KtZDufRaXt8znXqzAeFdqgy23KMw8jm49cSsE6NNU9dS7FY9HYHiBmWe486vCkLPA36EaVHovoWjLfr5aZZtqWf",
  "key17": "4cyHRK7wZQ1jt2pAwVpDvnFDqofBu1vN8egR3jb1Z39RdQxogvFoxE1EoXJ2uxZXUWdgLYuWg2op191CjYDXJmdE",
  "key18": "VUAFTubCm9TXQQ8EbLcQkCd5dSPKHPseEXweCv9s8cojso8AZnsDbNVhUUiCVCSy3U3cP3LLiADyb8JcF7gzemE",
  "key19": "3BF1KA2XtjM1YkBcjpey1AGLAtgQo1uLBVs8r93nYax2XmmVhai8E7S12qq9bz1inWPpBbHu4inG3KgkkZQgbBoC",
  "key20": "2gphwKqzPsEXwACJmE6p7MWJR1pii7GumchX63kzoUSSV6MxAHzth32w3cprQkscXH7Vf4AkFiJPDMJfsxmh9GJj",
  "key21": "4AoNFbV8CF7gdZU3XhMsMVDVjNiEXjwLC5ca5cwXAz33XkDhCp5hW6Mvhnt6AKAvdVwBFGPa6QAnPK2EeyaY9h2y",
  "key22": "5fCWHRooKfok9KjFvAxvwfLAa4EV5xxMKpujap4pTvo8C5zf2xdBRTxHzAbPq3r8MzGHz61Qb9XimCpkEW4Yc4Ro",
  "key23": "4Sji7t6z4XHTvkoH75xP43t4taVu7upDn4iNMD9SnAA1J6bPNsPdMMb6vgze5SUyipLUGHRubGzMgQpyUNJ8E3d9",
  "key24": "3XCPSGrfzNXp8s5X73vvhXTLZNUYie1HuapYmYimvQfj2mfCrYrSkHAundReJXrHcJzGZ7atXPMuvVGCuZSGy3XH",
  "key25": "4nPDXpCGGP4CkkpwxkgEhv2Nqnw7phRmFKEbFv4761htTfZnoo7FtVqqM7hJjrmpSXDxfxQaJN2vXEiaudEykrGL",
  "key26": "5GgGYy8ENerxefP5EP4cd5kMmfJwmQ957G7NsNMPZEC16i65qBGHFwJUhdDfqRDTadKKDgC7umfUoyccNrVX5yQy",
  "key27": "3118tGNjk67WxpiNzMoUahyLNnS3oyhzmgRHyN79Xcv4d2Xg6RmPAgeNkZxuH4ioAf3DxAXHdeBZmaBhZKwxqb1g"
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
