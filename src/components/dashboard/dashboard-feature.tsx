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
    "4hFGYEKXpAzqBZ9pzx5vpvYDcquXWbvpUMjWdwfzejmtMaBv9yr2T1DgW8zYSEwsD4RgaUREqyS1dmdSKA64yKn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWFRm6SRNyxtGFWFLnNaFxq5EEgJ9BhR5gpeRACCT33EE8FrKsRBvYZh9tufiJHACgr2NzfYNjrJF3prWjRmWof",
  "key1": "3ddP4J2LvfbVtNA9Sw6WNC47rWwBYRBgAtHZCtdPcXRDa3UL5N2mBtCexd1at75178EaMpq24pADxG3LZuWmnYVp",
  "key2": "29UsJatLGoPHe87ELpFChDdEiehb4zW16VtQvhQvT51pzMbwuCW5nDywViwduREPYWoGdbt4eSWqV6TMRNJwLVh8",
  "key3": "U1N2761rz3pyPTR7GSyD2oZUE2z2EWLtvKCWFgBsUuAXNwNBxFiE1awm6mqZVwb7SckZQqbx5oEprRAxvDRu2Wa",
  "key4": "5RNDQymi8PWLydLx5afa1jCNJ32HphTw8hhBSsjAdDpar9AAGyEDnH9yB2Y8wvQRkKNcMfmGaYJNETnvQ5HYZC2Z",
  "key5": "33AtJHX4SGZyzjGqfXoBJgukdpLRsijokTz5xHGHKcWuTwEq9xzsd3dZ3MtwVbDPekZz3KfHRnxRg9eaExMmia49",
  "key6": "31oGb1zLySrgeKLTifTAqTxNZtTJ42muRiBqu7ptA3eRoin8uv7pR2kFfxmnWUKGmDwmoZJ8amJBVGUekdNTfDMB",
  "key7": "5hk8X1wzWgfusBaV4JtA9o86K4LsfuAhPk3Ebhmo5g74VALjhtU2gPXKamEzdx5RetAEfCpWQh6sKX1biWWLzYPh",
  "key8": "Fyy2S8pnE8KiWZMeBGgs5WMgS965mNWFFESjkkP9cdccjVFhLZCTBBg4yPEXj2LpZrwQ57ZKxxLYHJzzCgyvPAn",
  "key9": "5FMeiGQkRzVp9y8qSvw5ELc1jbEuDzuR4PM18wELf47uy98CX9St74mXpBdaWaTJ7RACBNW7wDmbgQm4RfipkYdf",
  "key10": "3B6ER9y4xghf1atnjfamh696FP9X16VY2zMUSrGJ3kTRBQ7k7fPNhSkmBw7aYqZykZznEkEQyq6ro6cE83Qc4KqC",
  "key11": "4cESH8kwaak6ZMWhfbAjwSCn51fX8EQUMrZe6KXFfEUvUbM4N6pHvYEoErCLmCBrJhqS2yDWZ2nSXVRLp2jG2yEW",
  "key12": "4YJ5uHmFqHxTYhWXwMUmLvvDYtyYpZoaWVzHJLPVSHfaFSu9exJF5Ds8CFeMKbuWXwGAGcnHs6VZeHz2nUNQHXCF",
  "key13": "2XpCfqK4194F8rqSajXRUrTKeSKi8Nnd7piy5bEcZjfBGXL6rBbTKBMMDEoTWxyunvHomvqDw1Bs7jBJ45DZ1LEf",
  "key14": "R2w331oYHFzJJqEUXqMBPhYhocCNtzLi5wzet831bxxDTN1dLxtq8NMZ9toHRiE22AckxBCwE59s3KY5zwUv1oK",
  "key15": "4J8XnCPFWHa9Z9Pa557zjKKMXvBEYbULo8UNBFWtqoH6U1pdKCsUwodj2X7CmfWSRhDUWKvvk2oNe2SPUaaZUawr",
  "key16": "2H9AQnKqCjeGf2NJPbQf8bd84nFFBzvQG3XUwDxfrYHa4QrVT7d4DmpLuwf4toN2icMYamX7iR1Hqg1V5m8WDiz5",
  "key17": "32DG6ja9sGdkK2oHWdz7MQ9FsA684gVcgATrmmESvHb8SZ5hYcgnpWK5HLRUprG9EdhgxecqURKA93LctEEgBw9b",
  "key18": "5vMULosfgeuaG7FgMXXhXJKEjFdM6AXPfUXvbznC7YiLHnWW29dfWqm7GLVKAWLpZCDjn4R38ACrtBX4HWjw4bAA",
  "key19": "3FH8bVVzvsPHnC5s8bcC1Rji8goxJrFfWtDhhaLfjjrpSphaf57UY2WHvRhieUmFMHjUiLz54QHiah4bK63Naw25",
  "key20": "2mcVs8GSJte6kxLwNJXeKWeMtnwxrue5WreT5Mvw5oLyEECHgwJKN8T2DqaX3LaYk1QNR53gHtAEqfa7Cp1hkd3H",
  "key21": "wZ65f3TQeWV3a9EMv6jJYyu1JW73vXDWQWG81N4FiBUpwyvPxgfgFJZJtjonjaSozhmQvHU1Ca218wXoFcGgMJA",
  "key22": "4zzqEPxVixtMhVDzqB5r6s9p2XLxHiWyMrWvR7GFJAfhTs6v4tHmpT6LWAFzbzimjYZVTjLiTgfJktZAV6uxE2Nm",
  "key23": "2nStuAnEwoUUqaRE6RHdnPcUns5NgYRaN64QNQj4s3tM9peTCDRjTWgqrqWft63cRfbWTdxPrbDFfUkam95txbwH",
  "key24": "bBXhx9CwpgRhiHcsWhkjpE9DvNovFaV4K63Fgrwwswvf5CU3SC1EWywQi4C9sBAvpYSePeddCaLB6bGx8m3bsXZ",
  "key25": "5qnEYnt3ogUqbJBfQFNf8B6QWpCh1fJC4VGg4vPzLY8XLM7hTZm1cn9KcwkPX99c54LX3zn6wcG82GyFP6CqBHcF",
  "key26": "2WTDumNsmNLwjeFnLwaXYzXEFC4o3out5FJsj3rJFU156GUMhn17DB1PpjpERTPyJQLXHUs8f5J8qjpJ99xNEuHa",
  "key27": "xCsrM8cxBVGRkAAwton4v2VjxHcNePempGurcpUBY3cpWKYEg7rytfKgDn7TxYJbwoPJ1LHhBMyyAyz9NBf2oPV",
  "key28": "2B2281ZUuELgdDLYAy3DGZJSYAqamoZGtkzPB4rwNP1PiMiATd6C7UpJqz1EN2K47MvHrmQAYwyS2mv9ufMmjSTf",
  "key29": "yksL2sXDGtgHgK91pEhqeRqt14kKg3HA3xFf8ZJ9mX1r1t9q9eBCBS5E9TqHGphGMUp79EvEgEsVp881jqmjuF7",
  "key30": "2zaiMLD4rYdHfV9DhtiUqfw2MPh9moruM1ZnikKCqvfe5SPEMonCB18DTffyQNYeKkAKJJeXEpFTTVj1bYqH9Syr",
  "key31": "2egQriera7CWcNVpFiEiyvCfqTLzRNLzRvpvqxzLD3PDXwqe8CAtLjZ3enREF7CeVERaKPwXrdyYFMA8EQWTGfjz",
  "key32": "4fpfts1Qn8FmCKUQuSnZNmq964waoNxmSt7myJC3zYHFMuxWxbvgMzQQTwnWry3bdLJ4YKQM71VNK8SssjW8PFgA",
  "key33": "5GPofpGxzNLFnUiAUzPz1ZeP2bz4B7RBTmqzoC4XgBn3ViDoR3JMsZjrt1NaMa54B2L5aCMWbR259Gzc1QpXV8CB",
  "key34": "Nuxx2517U5htW2hvfA71wWEAjQj1ZqBF3ppQmjZA7MbkCm1yWhbbEAjxe4Vs6ppF5Z2yhX52rmKLdniUKrEeqRR",
  "key35": "2fpRGY8fQRRHVtrHGARZzCrwULK35RM6eh6nLonZ8x9pLV78fMHCv7cvmhd8RV7dx3eNaaFSFqVYy1XkhFpqVfr8",
  "key36": "55RtaRetFGTdvDdv6qxtE7eDV72DR1KdSuPcxWR6KgetdtfzR6cFwN29cyWDvzqZ7gBHrghJjrvjwS7roN1AViBV",
  "key37": "5gSGCJq7vqX91Fxg4TZrL8Zp3i5mBm2FEwLSo6pjowYbzSoMd9oPH9jFc6gvRQLjYktBdXgDSuhEoNLM8aZkAQAd",
  "key38": "5RnTjPbcXQ7hgGPTB7sUGHktYfjyRvz6ugsoNHbt14Q7GL2rzQe5mZnyQTiJXoU8FJCx9SP7G39zjwTGV4eDoX4c"
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
