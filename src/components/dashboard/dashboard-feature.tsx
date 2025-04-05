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
    "2cbgW7qGs7SMr6myTiRm8PoUELdsjcCL3PDxuWfyExheoWiVbGdhUeYjojR6599wvdtSTsEwohA8EBoCxxaftEHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ram9ubRPSMsqnLBzKrn4go5YJSNHtwsRmkGf36DqMSDLtsh3wHD59eB2xUcyenF6mG8KzYsqM5b82jvHNzQWwbw",
  "key1": "48WYsCoaJwVbVW61FxqDNmWNrGWb8HiT9JiR79g7T7LxY9iE8DnkSZmv3Dp2biEae8DwKriWkS9xedsFn7AMoMuz",
  "key2": "3p6nAYvEdr2SSgprnoq51gyB8iEpnTyn4EA4jxQpR7VrncSvHazhXHTf9UMb5HLHYkbdhmmDotmFLfk9DXxwHo5v",
  "key3": "4DKYBian2fwon2VMLtchwZXspuV5JE9w1iHF7ZAmQFGtRehxS9YPbx4kcok8q3ffnevJF7nz8riNmg67x9MYe3Cy",
  "key4": "28sn1MUkNYMXE51MkERf8MsWMxeJ8n2XiAqPa7XRkovvW3QMjkcesida7bjdBpWPMTLY2RE7sujCQrQWgQi9CKeg",
  "key5": "Es48CZE2a85FNR9as8RgpX2SgUuvwqi5cuzC93XpetrVwaaYGzNEvsAVHbWsg8AhLP1nY4fZXGSDboNLUkYp9s8",
  "key6": "5dsfHD7tz7zSeSCQh3MYc5xQaoSxeDuuccCQNNWvB5aFgGqdAaRJaaMiGHLxktV29azqt7Uw3Gg7ESvGBKhPLwvm",
  "key7": "27asQgt3iKnPPZL7jD2b24axRyv9d6rb64acdrqCByJFWruqhhWs51oxz7qd4TRbRjvYNeq1sCLjnZujfW4SBXBh",
  "key8": "5w44jCkkcuCy7RjvW42WVwg9ygLY2toGtLu5t2dgoLULSn7oHgoYhQarP6vGfJCtEQzLccySpqi7DoCMZv88kHGe",
  "key9": "5BdKyasdz1bNhVDXXb1JsFHTtavwVJgb2JEP8LZNWVMw3qBDUscgQ9u45NEM9HVfPQ5UMBv2w8vVk8vt7kaNEGNq",
  "key10": "3xbcH2j5vknAC2EmKN485Gt1JAuJPVFHBSNDvFEWsQCVQCFfZWV4eCnx2h1xR8QciJjj9fPUcjGQbAoV6pXeb5WH",
  "key11": "5VqfzTr1crwh3BBXM5mAPrL7LAYuAyoiZbb7KdYPECsijEMJRsr8rxyLD2SeLXoGdkbS7saectJq8M3S7yEaea1R",
  "key12": "22b8PBbrHp299a6UQg9JnzBwX5xqmdw6YjeRkwmN2jozsVVByiSsP9CvWfFc9hHhmY8dXuEkeAW1aRS8NB3LFVa4",
  "key13": "Hxe9e3XcSMek15jrRPiyhKZ9NTDCAmvA6udre8MXdJTRGgAxhHzJhQtvwuzU3bBcN9itAzCBvtpT1v5FaPkPtqc",
  "key14": "4HbgiVtV9fiuuopbBfqFmTzz1D5NUtj28ng9dhvhxtFzcUNbVy5wywWAutQ4S77mq9PFoREAQihiFjqbsPQJCyxj",
  "key15": "4MvCaYA4tcjsNZrtTUUXLzh1LPyvStBR9C1BQpjYJx9kD9FTRrCdC7fRxAhUkY6M7fMaK2knRkr4UgtBdGS3RPhW",
  "key16": "GjVuPfpq8Tu82GCoG1CsSDXBTwSpQuj2LuUtumdumoDsCJPrpyCKt4oXw3wfa6RJ79HuichHDyBiA88efTG5ziQ",
  "key17": "4EuPK7zY8C2m6qCzunZYmL7soK4zH6vi8QHM4qYKwkVLd4yYn6BVJ1RXhMhotTvenh8FFme86QZoDfzv3XRaUAjs",
  "key18": "5MpFPUAo7KoFsRUe2Xoe3wdBmnam4uqxDT7K5mt1Vb1A5z4fH2XuAnYkUh4V4BA9ECrAMxwNJnztnoQC45QSBPQ8",
  "key19": "48YxHkjQKJHex1FzKJJPZMSwk1mC1kLdGa8fLC9WtJ7JBHPoVQPo4xopErG3sVuMNUP4EArVpq4ukR4d67kRFAxB",
  "key20": "4MQ4h6focLpt5zm3qhbTgFK9ShCWchdZfFpxDNq8EzGw9tJ8tQjrpCJhKqjx4EyaizUrNUD88tVumERKZnMQeivt",
  "key21": "38F2b9NxxWKYCiCkkz7efhGCMm9ysewR2nkrXRbm8zfSd4QKwZqEThKdeZWaYcbEpjqPbQZJg6zBpp1HwTw5gbhp",
  "key22": "3BsX5WranMsC9S2PAGsfiCn39ULWUa2wxoi7PgMDoisQ22wogeR4yqvy4Xjj73a3n2H2K2XUuxcBF6VzGduEgs4j",
  "key23": "55kfSdAcGFyM63ps7hrzANw4ifK4vyMY4MQh98QHrA1JW8XuSdTJXXBrvmKK63RofMXXSBCe8hdsiBJyJ98BRxnx",
  "key24": "5JNrkPerNyEnXbNBePqczWiHpkQMJ6nXRZiYu38mCckURCroNK688kFmF6ExMgLicKrgURcETSxxU59dNGWP6WXB",
  "key25": "fgQw2YEVAtuADNtPkkEb8hRbxKNndRg8fAkD8R9XSmPjfjGhMJNbBGs6cNjmPDoCWS68g1XpkcSYVqVKJAGphSi",
  "key26": "5Efyj1KCphtjybNL6d2aYzrvDNUvzno8D91UxPyuuBmAQ5f4k5XhszvaRX9AkDNMQXiyixh8wPnuXzYKiDWBMJHm",
  "key27": "5FfxdzobP38DDpHeup5SYP76NsGpZiATfG8FswyzUWLX1r9g3QEuFeJ6S3aycLH36HyJsvx1ymKf36oc4PqUuYwi",
  "key28": "5aaGeUJhrkZYPYrV8bRUTdJ2hGtA1FYCGX3ukMs4UM3CYysWWBDjwTtqdciTyy8Y7j6dJQoX5bXGUT3FoxtZVB24",
  "key29": "WHvyWsda1YjyzdQqWMUZ4xFoKzEzdLLvjtaVZw5GXGGLeZN9DH4S5cRLhPYABeTTv1cpieZDip2juVUt1nx4UBK",
  "key30": "3HeiDmPHDD18HkwUVeCkNE4e5WbhnWySZXp7QUig3SEJV3iCZ9jVXCSuTgvEE2yKW9KUc54Va5nfkZuGDqpyj3Jq",
  "key31": "f6ku7ABcRzEtsjG2GVEbjxLDeuGtFiYUBAmKKyjU6zBVHCxUSjqdWu31k83qFPhaYNQf5nfKuttW9VE45j1YPck",
  "key32": "3J5FSntuwEMqPGBHvT9FhotH4aQrnb8TdL4QqNYEbcmL83WDKQ5vsQcKfKp8pCCjaXu7gQhjkURxYTxQB2MfjPxL",
  "key33": "N2nRQvuauBdAsVzqgWpLvxAWjHaGUgxmSEtkrj4JGermbXcR7kPENRgMf76i6kkaRCbMjMKhanwqr7N3ayZP1M2",
  "key34": "4KscN8Buy8jiu2yFQLExJWRPMUm6GtTzJ72wMQMZqysQPjhrx7y8QYstAdHCjhz2FEQzP7yDykTVEKceA2LtVUFF",
  "key35": "48zFNwd61KQGdgAz45km24BLBWVt3g7JHtRtH3GEpXTymySpjhVbrq4rpowhdakSXozPX1hDfc1oustgUQfJW7UQ",
  "key36": "2j3TNGYXpq2xSDvUGZPr8TWKbDfj5b3exiFRnmwXmAvZ62UTPs82xYE5iEWCESDfh7CKYoe4h6A3B7pqCnKuH1XV",
  "key37": "5Xn7vpdk7Ch464PmVKybCuxeS9T4EHSdN9A7tGZpB89eXXdDD1hbKKcEL45ZdTF6nH2o6pUbXR7x8UYu6exUn4Dx",
  "key38": "4Bvtf41A1Aw8oB9n6caKCuXPLYCZDvwByV4vDWwRvvTeRgppuWhAAZAjnPbUtG5LGWASjK2w7FtLvxafqaMgaS6",
  "key39": "tAhyA8pJjfeZUoK9srDPAgXJ3GsBMTEh4poXFkE7hXhD2igKTtHedodJDa2gLdefgRnw6kLozQfxu6V98Nov1gV",
  "key40": "CnHgu9xrv9CUHvoZQ5pYg47gi9ALYDXm3vcViS7x9ANsd26iAKd1uQDXnRvCb7HBDBfUyptB4wnL5cQQzKwQMcm",
  "key41": "29aWsqusBYGmFqkskbWSNe8zK7WpB9HwmmpfuK7xdzJAd7ej7ksuSKnoMC3WigNM4Au6VPHYx92sPDMdT9N3tr6v",
  "key42": "JGazJSqGMoWuufHMpPiRG2saJiuLzoxScE1kTVtQcX8WXVHq9uYbFxftHc5DfG19hZS9kzwRo7udu1niiinjAAc",
  "key43": "2e9z5vXerjSFpS8E63PgJceJi79ziJyaKkWqTgmcJzwhHS9PPwCYCevwXyUV5fhC8njwU7SgokB8UdHCobPjT2ci",
  "key44": "5KzSp8BA6AguxjcPXpAHRkc2DnoB2KJogmnbVKv4wbBUE5mAH4xBLW9hRL926Eow531QTayo5QEZ5VRyiWTAgBui"
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
