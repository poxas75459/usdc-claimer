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
    "4SCstZUhEJzGScnMBrYuubDTevFF28wdhCzwpu4F3ffdyfWPCW3N2BUJv4PjfYXdt3uHPbKA1hSHFLaN1Qo958Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoeRjUhDwqBCanK9reUYLd5qBCbuPtK8Z8RTgq7LoxyQJJLvPWgkxxn24RmoYKdy6wBEknvGXEZB1K39wE5qWv3",
  "key1": "62cTnow3fMxuUmizeQdwGYkymsDcKrBknUQmZd6cFqSjvfsXu3eF21gD3dQCdbDLDzVAaMaQyS8mH7J9xyYxaX5p",
  "key2": "4DdQPRcdiUGVX69EWKGLAyBZdbYhtPUCaza1qBuyujwcR8q7aCXRZFQ79TcNWtVzUBbxC519g8utdph6E6mXnP3R",
  "key3": "4aAKrsfwG13aJSDQbqnPTeBLQVqozvcZcADWLtH5KVcZYF6CY1wJSKuzozdb3qeNFZVE6d8RNE2Awjnh3kUD5fWn",
  "key4": "61bTN3vTQmUR9CVnowyU7RbK8DnvsuF9aK3jwuGkyMW4DAmeb2DAe1RfyT1r8EiaPwpYvm3PgeirELwAhH1hRW5P",
  "key5": "3yyCm8V7mBgspTPQcmPsdwPY2k2rREdr3fXh8poWwawxJvLsAT8YqZjqmKnQh3NugLJrocavjd7Mwi4fvUSHs1Dt",
  "key6": "66PFAKEcK5ZxJ1tFcK295SHu1ZWGMmkqLo5fSAtiP1cQUcfaHzZoAvzmfGFN1qbAAifortvNTXkmga9MsiaUbfTV",
  "key7": "377XEAdkBvS61RgofHZFWrAc7Hj1gywwDbQSZQqfUd3CHAHrAZ3inomTHTQU82x3ufcdTxYpwJJzEv5magtnuPrd",
  "key8": "3fv9K7XgR2PGgdn6Am3Mr62YsBQdtkS2B9awP9j18FXMeDUNZqEmkYtjg5xeq9cLNtCUpGytoSwwWhJrLquzMYw1",
  "key9": "56rDe4f4UWYQbUyyL1bUMDpTfktGff5xZi5JVcrvX3yTPYoZqsdFyQZywRfrnAxT6YP5F3K8op45YTZagpNEkUw5",
  "key10": "w6cVpJZDrnd7LS3qCZzudkfLi4rw2oS2aFjvhHdHYWXxLmRLRBQB9g3PGksLZSaJAkDxxKPMPMatp8jrbwDZMcd",
  "key11": "4BMon3M5rHQRZLcBe6GCMDfpcJKRDGGAeouuAZtyuURQ2VKXft8QJMUiF6TqL29hiZTyySxWxTQnDyvBN2mmtETh",
  "key12": "4oeFNXKxezEQ53zFHKkekT5DMPjjPjGDUpwn1Eizx7XHrVf7HPpSJ8kzodjeBHpzUzyJKof1oJr7EmfbPnheXRmZ",
  "key13": "2Jz9rZWkF3PygcFBS23BS3XMSiPhDeWASnTpwFKr98MPeQHpCdpUBYjVGGTXyPHZg4asTo4cB7qwnjPxqAxS7rAX",
  "key14": "SUr528rfcr3bEYCetgWiAjQaZeYMDjKyfPqnw2NUaDLpFDbwySqRFUnKQ6ZwH637gguPSQnqJFPnfvPcTuYsU91",
  "key15": "2y7AYzbW7zxnM3se2DxBaV1S9UWhttLWFELnMymkhBxtWuSKcJJMMMeeNtaU7vKcvPSZp1mMaUuecS84uw6QjF8C",
  "key16": "3pPRa7SqSLdkUfDyQa1f5nAARQbHRwMZyvtrcwdmYXtUdLKZJtLmq9oxqPxFP3heUmf5S92JvLpchzGyN4gCMVZu",
  "key17": "5YLKUMBR1kgTA5RoEA1bgPTMPFJL7ZWCBQEEt745Vb2LES5JgHAnLfvH6C2x6FAdMC11bRYifgFyhafKMTNhv5k4",
  "key18": "3DZ1mQioWs9KYwqtKqzYCerR8JhJb7bGAw8YYNmM77t6xPZQgr8L1HVWKw7BYUgHxeEBj6n5euT28ZKShpVfoK6U",
  "key19": "5RV9W6TvEAKS83NUmYSqgz2T4DgDgVude3Cf323D5k2ERiZ1jpcma7mUFH7Rzoe74MEMNDNykTSv1CwK4UqisdMC",
  "key20": "3QQJNK6WNq73bkweNXH2Y4LPT6wpqimc9QXZ5UMBuG7WJDcmWhapwwCXUsDfdxQsqhNXXV4jekpLaJn1bEfXsGQ9",
  "key21": "5umuHLQSifomiRXCK8n1Kv38SBQrvsN31oCFSoEgfCrmhrCgZm2mLJJhBsJZ2MdGSBKSEWyzvrH6G3LHEECsVnDd",
  "key22": "4ecfqYnampxmrKa9EXrza7DVzJGy8K4XBsZBSCpepg3dfUDUzsUhWPdpP87T18mj9CnVfUsUFaaWjpj2F6iGnFHn",
  "key23": "Lf4FaqnRi8aGajpn4vtdmuzPgXCDk8fE1V4H1mivYdWhtoWtAZHEQfMuAe9euu75hkWSMzx3NGXoy8o631pHg78",
  "key24": "5Z4ev43YH9bG2xZRbs4VbwtymFXXdmwncjVLdWS5k39hiyVdq5vCYQrZP7xe3DvtvWiqZfd2FSegmhEkpxA3WtmT",
  "key25": "5igDZLQ4HSk2XzwTWyb38PCzX2VxRVz59xnygchDYRRvhb2oj5cgSf5braX7JJ9qjyQ8csGqWGcHGCc1Skbkb9BT",
  "key26": "2w4sp9iAudVFpcYJiyM34Soc46ypZu6c6Zxd2DuDamo6Z4X4Fy96Kqpw1DkJt6JWj7mdeDLXuqe4QFgHx3dYosoH",
  "key27": "3BAJYyJgZWW7ymqLq2mEsF9DCGaEQdGXQzpS7STYoDfxJukNo2zXRCxvsWXJjbRatKDGjSrzUKftM32D3wy7fjmy",
  "key28": "58zJhj3BNGcMAyaL3U3RZK5BWz3u6pni1NArMSy9CvFw4ueoxqiaJ1YkT1Tm3nqvLB36743z9dCe2RVTLJtmxVWb",
  "key29": "ZorBoxk9mfKBbri7MeS49opJ1SPkTc3jPhvYkjA6fCQ85BHHD6v9xmpt9sscuHZFsxdkoBtptGtAQQMpi92pnRF",
  "key30": "D1B8yzRn8BqePcam7djgh6TPox3sYkzsE3oTeUMd9XFhT9ZuBskQewXAffEqW4u8i48Nr7VvNjGc7EoAVj9qXUV",
  "key31": "2mC8intuYpPh6q6s92PmTU5GLusZvUfKPUGdAh2J4QgTT8XgteNnaUxAooHWbpUvWcbfqQViR3NymJ9pU6amZyae"
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
