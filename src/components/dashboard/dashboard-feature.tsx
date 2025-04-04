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
    "ZncdfYQzb9bqQqYQ5TdU71kzZ1RDEo9pswyYt6YcqgxZJ8YZDa8Jr362WWP6yvRTBGbYamy9qph84kFGg8sP7sS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zv1fbQewmSeJiZyHCp1XkCdRt3vBLK2JGkpTbDfVJHaQfq4o9Ai5yWi1nyi9dAHDFFUGrZS6pN64SWPHCGX6Vk3",
  "key1": "49nYdDNU2FN3NVEnywwCzDryKusvqdyqEWXXB2ZfBDq4y4sXXD9YwEMyX6A2bKCXn8pEdAm9pqwQPsxBwqL8AZqT",
  "key2": "2cFmUT6dRKvXppHa19Zt7RBr9aXk8eAnpVDy8JhZzmsxpB2cE5929P8K2sr5eNaTP8PNCv9ocmgbjqht2PLRWoCM",
  "key3": "2xQbo2J3Lr6urNJQF2bSvMyiL9HKJzAHumTwnj7m6SThqdJyWr8kHofkVFM5Xn2cP3ThRCf8UX9jCjp2RSYYo9pw",
  "key4": "2gpb21bQS7NW61J6nmNAzHikBJ9bKK526VFx7hnPNLRzbAxNALaWfLPKKiuYNj35cB1T5bbkZGcpSHVdC1sWj6aF",
  "key5": "55qHQ99LG8FaKnMmu7VRUK3PLpEWd5yr6JWnoEa9PqaxuQvLT9KXJSY5Lms6N4rX4S1LPnAfk6eruxYHWfJpFwLT",
  "key6": "3RLWjmfunk2moRybnR5YAUeTBQtADBNERnpCiJ2PPa11XttmU17vhaFYiYU2n8bLkULJEeVAySPe9vwF9yuckUpk",
  "key7": "5dSz8PXgArhHVpRuqhiE7imvvkrrUrg2oV6WQfJ6YqsN2xrq6xoLAXL4qVZVnNq2MrzdXBWP5zB81SAjNgDP1hQW",
  "key8": "5x7h9wgHzsJfGLdVcq3rAoEUzaBjc3TfUYAR6zjayreYtvJp12R3gw4Uazqa9tr5CPmHDmjeY4bVrKWhiN7NFnSg",
  "key9": "4mKzuUUZ69ssnBYcXtf8S1zFJvaAU6Jju1eHmTFqsy6S2Y8Ew1GpHiucvzJyeCY6T89UtXstdrGV9E6XaV9FE1fR",
  "key10": "2BxYXVY2LVqXQU5fGsdXeZiJ95PnSP2FCpU5aG3R2UgFHA5pMsxpqwS48oCaw41pbN6TjKckjTRH3SXtaWHqwHUT",
  "key11": "4w2FmnHQpkB7W83q6mSRWPevYfkg3oenLcgAC6bsZRKyrCPehbe4rHyQDF39iUCH7ojyQTrDDogevrfNC3LuuV71",
  "key12": "2BMoNeVQPjBFeHfBfTnWNz7rbFSi4QmTojRuvhFbUJkQDRo98Grsg9T5as9X5PBdH6rcK44PkWPvKzARymTjjD4K",
  "key13": "4Ze4Ydrr4gJLKtQgUrrQ4wAKMgUo3tpxR7m3HrUZnY416RznLVnEhdxLrpTheWo6bV9wjvw9Tfuc8ySF9G2BY98R",
  "key14": "2xk19DzyMZi4iGhN1D7FNqSdkJLDHfrj22uazyJ9gUdfJA49SvEGZevt3G7pBHzuzrPRPPuiZBSQfNVESiA5oTMA",
  "key15": "62ZAPnZtYs7dUFqL1kjdZ9mFQgr2mv6fJYT7oMrPH5DYBpdoD7eHrq4EdrR9QLgdB5dCBDunzYEmDSm9DN3yJEkt",
  "key16": "3uTF3J9SNNuD8XwxKZq8TyvusKy9NbnsxF2hAqnE5DWHuzMkP6yiqhxBfegieefULpaEwCVb6prMEp2svuHnei61",
  "key17": "3DjpiGkuRyojr4ocYuD2sV3stG28zhTATHDXf1cpf99RM38Dm1WH5hHxwRCNnb4V6CYzqG93BrWPZ5WaqpJURu1x",
  "key18": "X42rD65kJB7kC9SwoAkaZMCTJCzV6mZ98aPZiXm5M4Ex3yGrAx8F4fg8v8X61y93dB3Nt7DjM7gm2TarkdrF1bX",
  "key19": "2p8EL8rSCsYZGeAG3i91V5bPof4A21Nv1LBfdhfMCjFK1YX3AfLeLhnoM3kZ4UqAtEXkZK3w3T6HmtSKVrEZ9di3",
  "key20": "64wm9FmmvcX8nAPcp47UeL6LqwRuVopxe8qFGBAVPUumY4TZBDRnf2XrVGRtaT3qJdonj9wEgd5t5DH4dhg3baJB",
  "key21": "5KeqJeZ44FMgWdaKuPPKBFrS1av6QstNyenbRw5JYs1V9XjrmyDMfcx7ttmPwD9a2rA4BpGR6aU16MT8daCWZ4pg",
  "key22": "5vAKPrZZHpxH5rw8zUTwp6a6fb9csWcSLc9d3buZcXV46BkY8LmntkHDFv1GzVNHxoWFpSy96WtPTRd6BQn3muqp",
  "key23": "55cjYEHmpEcTRMZcBWZCUKFw4B2KfypY3jgu79i6LRWuCz42AFKfnNCbnLMv1WAupYeJzbQWQUs4ZjeMjadiCdCe",
  "key24": "3PpfCDPZhDagvihQJW9whw4EbEj8dR8meWAjJG2XCbdxcUXqFuJc7SnAz4ZQ2cUk2AyWXhac4r8K5xCuVTNSgJES",
  "key25": "41bR9TyLpKgn3ZdmiGw3FosE3k8a1hk7K1cg78nN5pJP9BvWzAf6niEniFk7MGBP7C9YAB6UYvafw11kvQZAFUw",
  "key26": "5RE3UJXixQccKQNZAJmcUg1xe2gJ7rrSyaTi2pun9UK2idTacBQtn4xGiD3zxeCh9qq9wUJzZ8gfSrtvyoiuUjpE",
  "key27": "3XsPmD9sDit8p7mrDAd2JNQSxdvX61no4kfTxQcANwAS3BAZY4PkZUY4bUPcc22W2ozo97CtvBHRDdeVdqPJCwaR",
  "key28": "2sXRH6rq3JbWLE72tFYwrEpPQxBuJ3q2PJYKjtYcqWNsKTuR8UfQdQ54CB92Hvjmb1DSgFePw37EbStKMgXwWbZF",
  "key29": "5zZrykyXrqVj9Kc1DgnYbDsKH1P1WzJtmNPXdutjwagr26ASqu7GLAbxPFQaKaoC4L2X1FyTYu5ZHSBFbWJfCGU5",
  "key30": "5DroCizmvH2JeQ5QtWyq3AnX9AAez78iAJJsBj5NbGUT5W1vEWWF7aykwMXueEmSTgubS2ENdf9R3nTS6bQtizAA",
  "key31": "5eS4PoGXGWbJGDs3nJjafkm8cyooZJhxt7cNEwk7kpNp7UZwkC4QTYCmuVffXpvxbaYsaS3XH6yBM4Nv3ia9rZgb",
  "key32": "2BACWhTKbkcqjA8KYCMx9vgGJpnB8j68ke2NXmHMJiLvXSe6Fs7ycQUKgyUn7EenAo1YLBcUndQGfxpHnYA1nyJn",
  "key33": "59NFdYc4kvNekNoms2JoxEKhKyQCSGqRp7b82BKiYmNf8zhEy6NPQ6e1R3VkG4n42cL2jc2qMnCycdBa9Zwdd2Nf",
  "key34": "46UsXb4c8qTySwhkW7wPcNC2iXV5TZmKJHFp77yQiqcfq5eGDdYkMASgsBCENY7LkjK98MPx75WN5dexffw8GqJd",
  "key35": "3kHcoR9JyFhYXMZRKWDG4RKFQLDjorCT6MHn4AauBm8WdLwqmQWU8XBw8P9k8vza2hvWpocjiRPqNJJVVXaCfn13",
  "key36": "64s7FgnLhiSneRoTP9JX9E8RKwxEftqRNLHvrKSwPrcH1AbsYSuETEcxzmEhgD3G19vKe5gYyauN1Ln52LmRCryr",
  "key37": "4HuTf9SNKDUkNAV43j4c1CPWUFDw7b34pjYgiTxCrBv3g7bm7ezNrhQUJvJkpjqhqcE28TFASCw7kEt3LcpMRSQr",
  "key38": "22EJVBFsgoMxQUNFmG8qyJdZm7pJtiuDnT8J3RcKWAjZ5YHj3uqGvaBQQbXuVfzSJR7uNUwydPD7ompMRSYx7jHN",
  "key39": "3tf9MBfvtbgtNpX3DyRjhkSeMD9U7LNXshsiYiFSHAoxEHK5mGcq7MkjWiT5VVkNDZeFbPAbwsSdTnEEGuqBXRRr",
  "key40": "3ZWDbMQ6BpX45K97uUouEnHJgsHnrQHVaerYrir5BsQVmPVcCYxRwpwSR5oFEpTHcwJXxXdYnwk9WGu63aTFcbXw",
  "key41": "3jT3u8e1upe41Fc5mjzXvuSJZXPQoGsBvJJxT7DmrA1S2zSyCXxK1pGc61S2eQunrwJEETkjwo2tbKJ2yHMRVDj7",
  "key42": "37Zur9Mwtsu9Sgp4TtGp4HmuHn7B268QXUdYgy7zS3ttvxukFQja3opKkCrJdB8gorWcyZDLSyqFQpnHhaYUCDGj",
  "key43": "5StHxjGxkMuUHroCr3gVzyPCEW4YGuEx2NjgJpyzJwCatzAPQCtvs3geXoSEGd9DrxqXonE3tNpkV9rfoqHumEQ2",
  "key44": "3dRssS54NFoSztnczg7iGpJFihmraqa9wQx88ceu5ndQYV1gjFxjb94uDnKjHFErxnvNRBP2Ys8MhjEpHQAwWfFU",
  "key45": "5Z6GgozfmoVQqtrsRRhFmyUeJWLotcQc94ys8f8ALXps8kUnYo8y7U6wzuLcAGcqgPXv8ep1t6dCMULupbXft47W",
  "key46": "27jVZVZ9gau1aeNZgw4gLPrK2iYgmyzSs3W2q5EYGu7CqERKYmdokpzQDyrYdqNjEs8j3vy8Y9zPHzAF1AR45bn9",
  "key47": "4AK1j9Gezt862ggEA86PMowa14YLN6sxwEbsXhUXMSZyyHfBZj7oDaShj5rjAiNxX1TwwWVXC2Rqk4xW184zJqwK",
  "key48": "4YxECxGyDHmTVawcPoVnqFqMCvhJhFkpraVxSguut7DMLXojPkfA9rnN8PGfgK6t8gMimDCAut7CqgsABFKZYD8M"
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
