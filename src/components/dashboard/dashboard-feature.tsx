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
    "3Cj35g2ogyCRumyAKAbn5AqiYGVuZ7NntaQJMtgiT3eskiibPSjsWJN3m2cUV3dNWtooG23SHUrcFN8K7BKzR2pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLY5oqTqWqqPEizJv7RnV7VDWN9jabhZBCEzspVpr1psN5zpC3GaSpdnVcwsgVN1okQVPeNXEaV4tuA4GKi1dmk",
  "key1": "3ic1k2P49fBTPSaid49gdamtSrf22AaGPAA2B76SrjvnmY58RDPP5iM2Qo36p24rXRfigVRs6TzzL75DSyDKEcyY",
  "key2": "4QLCytTpq9DmKZTXUgz4FUTusj4y71ifUi6dVC3hx9Nk9ptB3HJybS9mwRgfX4BUYoJvydsHipFsNknPtmY97DkZ",
  "key3": "519zK1LxC6HBebpuSpKeMwnCVuWeBFpfKTcS4DRigxhJJB53RQYdsA6CrsNY4spingMQg7AQZJiMkjudJLxuGGQL",
  "key4": "byXHVSzLK7FTL1NdP1M9ff6B8Wyss96UTkTtruVL5q5yuZt2D8kGfv5DB6wSajJBY6DZ3uocQPWnhK8q6kDTZ6t",
  "key5": "5ibGbS1nQvrepB5B9TGG1YZ8fxgoBXfNnrrCXsbxg6BwQfAoWHUjDcDHhMWkJEXgkiJgJ2FgqaWJAeqbWndzbFW1",
  "key6": "28RqViZbUENJ5ffVaC2T1GiyaWHrfLZ8qGVia2qq9MdKvNLrDrQ2RUSVgfZLT2H8VbJhoFqq3gvgkQc9XncoYA1M",
  "key7": "51UhvhP5K9R62yBCkWRf2ZPHFELMFM4iLPGKZykLcQDRT9CFyr7ghqrZYVSpbHJuueFkBTYkt1FEzr3m28wa9SU",
  "key8": "65DeMh26jh5aejmUtvC86PSZUyGQ2Px6AqrZ6omZWms8wjQzURXpNFRjpd33MSNWQXGnMoGPHrgYk95FLMPYhfFN",
  "key9": "3yv5vQ7anbKZt4qzM2c1mPkSQvNGoyRkGk4ccjKkSJjf6sG4Eny8zBsb195DSsAKFjePLX4xkYfsVvcHLst2gVZ",
  "key10": "5RnhMPypju88rPgifoKc8Ld31ZLc6pNkjVZNqotyekMUHcopku5FGnAa7PE5idsQGqHbx8SA3zFp393NHqRcjs14",
  "key11": "25zC6se129cR4Wxif7PkUaU7pprU4LksRVcydi8zBX4QwmoTN55hQgpSUduhENkZNkdBPdkujCrYmZ2q6zbNPKjh",
  "key12": "4mgyZ2d49HHNwo2gub3MiwXR8YbnXsrZqRzsvu8qrsJ4YKGC7uc8xDVZdYcJu6BPDaxw6DdAqqPxQ18MwBqZtdjS",
  "key13": "cbc9yzEExTtA834Fvjg6zo8yDmbAMGBuaQDmXhY6Ue5VHrEdnPdoRwD2y7yeZaATCqjWz3HxFcQny5kVxhy8i2Y",
  "key14": "4GGR51VsMJV3r2sM7qya7zEk1PuYfCjYPiWeTJyBT7ad2DGN23sMmf2GMemmhzT9BiRDc1Wd4y9rH3L8HYne28Yc",
  "key15": "zFc51RUzosUmaZdPwpmLZW7hSo9VYaTFwMJEm4ToQSgAWKsxNWGedH3apY9Kh5J8B4W3x19y7b4DWAe2xGWYp3j",
  "key16": "5t7akb4CWrmUryzkXQu1K5KcrZrxfi5krPUK8iwo4XTswvyRLiAZMavV5eVnRiEbJswPP6T6eeSxQ8mM6NGc8jG",
  "key17": "4e8qcu9ScAaXXibBh4L4ms65NQfAHyRPJWEGai3Lm1dXRHM8TZSgW5nwUwjB8ydJQjztSY8FFPYV3g1uN3zX9FD8",
  "key18": "3VwRfBSZP8twouqQUudeVjHGny86fvJFc6zEpYdVjdLU6SAmcCN7ch6foHWFcb9Fprb2YdoSkukCFkpWrRDkKqqW",
  "key19": "3fseCzyAJL5e5f3JTRV9an1SJeBeh97dnTxHRjcpE3wwaQxK37DaHu3ZrSQcwTpoFAcsJPFDx8Qzi64hgSeyvhR7",
  "key20": "4UbrUteierS81A3vjnCdobJx4zQEAuT5W8U6QpZ286Q2gNveXHa7uVcxLperjqjJokDHp4fV5X7mdNqBEmBCCVsi",
  "key21": "2ujhbLNRcvdymd4HCzvnCCgzZhuodAkTrfcUeUZphxFLVtYcnKe6q5eJqo3nuEmoTedeGEpqBkLwMz9JGE6hfeZx",
  "key22": "3jDC52yJiUDDidDTyfHePtvJH3ZyXzBGdowY8nJae9FDjRUQQVsobR6r9Vhr6s4JYFUq47dvF8WUABat2HWEB2Vk",
  "key23": "4Eah3Ei9H59puWrcfeQommDBZfFdCADmQej98YmJcC5nEvoZxxne9bZL2qSidEEB5nnX8tafz4vzQUJTWrCRQmXK",
  "key24": "2gUyK5ACbs9kcMUE7eiQfB6rE7nFBkw2QTJe7Lx35nM4yNWG6kmHBE3H7NmjggJqMUW3Z8PLLxCUesjJMFfvQnZD",
  "key25": "vnzW4cbdmoYtN5YpNJNSDiiX3mP3ssitFX2rngVCZJCS9dY4EcPmknBEBRdTXBU287rB6RvGgKrSPj5GxviGxy4",
  "key26": "2j35uLn4khmwzbi6E2tgwLr872fRQC3qLkkmEGhhp2zMZLi5yf1WB5gCk7fVgeuRe7jVADXsAhCE9u8SjkxQcnJt",
  "key27": "5AkBe4jAJBE8M5Tz5AVeUSXi4cdQ8U4oK35cSRwQZRvFxexi78jDGCsnsXCBnWZDh2PkFA6EWwTchgheSVqAdACK",
  "key28": "5TSQH9ZH9jNd7GkQhGTBozhaCUfGBgueFPYGkb2MruGWrGEDiv6iYq7HcxVkC7veB9QoNEuDq5XcY1q3iuTrmtJV"
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
