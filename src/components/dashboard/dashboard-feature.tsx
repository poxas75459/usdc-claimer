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
    "3rAQozAYFtnDGKyDCZtQGjHUAaMZ2Raor63ByHBXp1fpna4c8FhGJeBkMNMsMHB8abKMMNCosEZe7dLMfa3a7sK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ipjYhRRSY7HKTong7bMWcaQr6EEnas3ysBXvoRkPfTQah1tozAvE2XjuAgNMxYSK3JMGZj2nzxJCxFhnZfxSra",
  "key1": "5D67ciY67bxXziNbQGrQBzrb2rtTDJSDj3yUXyjmVCeKoSWUoqXEb9a4VgNgdkqhhaWjHgbhXussc35oYWCFzNMj",
  "key2": "2gQ7zNjDTAofg1BX79kpZk7TqLi7E4yKU9oCVmLzS6fsNQZeUoy17hCW1qdEzHZwEicdiuxpdhQFLEBV7iMgx6Lx",
  "key3": "4D2qWyf42i4hpBVVRfzPBMw8ewz9EgxJ4pj6vLTZ9yYcsZD6oJ1ghi2G2r2sF1o2tVWVXMtnwFP8aAvLLpsWjcMm",
  "key4": "4KsopkpcScJNkRKgfiT1x1hBWSJcKRqMg71pjE8jcwH6wpsZZfTfXzFDmmAcJXC4irVE19xWjju8aza85FRnn6a1",
  "key5": "3rZRjHkCqnL7Kpow5TZyUNgyW3iuRnpeAN9UciJS4AaD1oErN84gBgX8ZCCWaemFsKWtYu6kvFumv21NcjDUCaeS",
  "key6": "choDoTK8dXvH94wAPDiRucUc4VUVcJGYXtgV4ZGh6RSz1uTpPUdk8qnxbcBptURx7sDtndE1wiZwYYMQBvahgM2",
  "key7": "5oiCuqv1g3AqThYw55M5TVuRRFiBwLzQE5wyrN91zYRYCTZ5rx6thWkrLCd3LyXxfP8xAZ6Xd8FkBZb4BxXL9e6d",
  "key8": "5JzGyhBAae1qdKSPchzwpcNhnuAPgm5R7MGBuWQKjxXguMUcy8qUgRM4tu7jGCXhvoJfwjReQnV3uojwE1J6Av8X",
  "key9": "2czBeGQ5Fa1grJzLd8sqN2gB9Wz5XW9vpU3CiUbP6VJVGHBBXyukepU9cGWsMBPXekPjpeEWLkYqVg7LzK9qVECX",
  "key10": "43F8Mf6ZF45UgWL6ihMvskWsaCr5FqWqe2F2RWe35aDTLWDeuS3JSUxtCKNqLbvQg2XhSKrRLq9gbLoNCLbZj7SM",
  "key11": "5ao24LXbgn3giFe3UK5Qt7utUJbPR9jwyJDEWquDNruBNYHk9rA1sTbPY48UqjKkK6D6YUgXGWk2CXpmFASr8vQq",
  "key12": "5R18Tm2kkrXVvGxJPxhpTHkK3UJPu6S91mj7aBByMP8PeeHG4B3DpFgLnHNFHf7b5F8s8pNbxLQMRYzSzTHBtUYk",
  "key13": "CJA6jmXog6N4SMm4W6v94VRXzXHwynfsY4tLNh5E8g1VSmFEfWgLFtctyf961sz1bd1LWJX4kjGY188EjPdvtyu",
  "key14": "3oM1VeUnVRChhoVNwvf9AkKXWkG8z8jaPyvuEdQo5ZSBXsKwSmh8uqhpRcwmF6JES6mSGToqtqAfTGJeTcYGeWvX",
  "key15": "27ikUN7WaP8VGsUZu3XtPojQKSLR4jfGG2zFHfe7149dMbvnD84KynNzyzwmnTSAHgLYoQ5pCMewhuwcELocSw7e",
  "key16": "5RGEUpJq2SZCsaDLFjB46d4QaCoJKkamCzMJ5BNgJ35k5RLdfvcUi7TuB2pU93XZiYfWFFXHrsNxjkV6mP886HYN",
  "key17": "2eY1ULvvBFBr68nnjm75tLc5qHC2TjdNwawPgag7y83zmTnA9Ez6gmensowvptmDXT1GnDWy2UQupzLRV1zqH5uH",
  "key18": "2apZYC7wKarB1z2ffM1X9pDRYoBJ9pPZBKA1WaqCS7QvwPND6r7WGgi3m32LBH7mgRPsqEMQCJnCqGCUJm6ZNDjG",
  "key19": "5VMNou15sPWRzdxNJ711seDNUDkzh8d5RVcVmev6bdwhvrE1EBGujyzpLHGTVk5djM48wH6GgFoJSctVe1BL14tb",
  "key20": "5a4gA9D351U2c7EQdfHFLnQg1KqoNWqCwqtqRQTZp7J95PKDhX62wfPQmUqBhADC6DYhKgYQp4cKPwVNzpD3Xjek",
  "key21": "3YWhCTbgFkK8k2B6cJVhKEiKTnBcvrjcsoUhHB7ikeqUteCwp3MzxQr2r5b767fUfZgTijs17YoSsVpxGc3ziif2",
  "key22": "42xWQrECb67XCjPqATfvdwQrfFrbxQoCp5EyJ8FnAHWxfmTNrPXahEZ5iD5TnzWM7EZgypfH9KDrZK3fpjfxrqUx",
  "key23": "2Fdap6Fqd8PYEFtw4ivnRFe2zVED22wzpoELGH7jfjD2VmtvqDDjh3yDmZNWcvccTM2s2LQPNRpEWLvHUo6X5sXs",
  "key24": "29Fy1BPTcbb9sVTYd8Y7pZ5zmfvFxjJBgcVJA2MGS9pKbjVt5jTZ1aLLecgrSeQutVfFqemTw6sbMzwyVe86zFgS",
  "key25": "6HzwqUKWCP1GERy9gDgy1pJzzuuTLKSaJP77bTdDhRMAYH86cGRcwk1owuU5nTEtTGE4ucracFomFsj3EMhhyeA",
  "key26": "5HoQuUeaev6sEAjyxseyCeXEYGm7KrhcdhdvSKJrEBbn37QSeYngQmt5gFhXb6J2DDXtZ4idpkEj5vdndpAhmcdj",
  "key27": "4ukLcmE8BjPrjwZTGfbM5ffEwUvAjjRPH9mxA29ujNFwF6Me5Sn1mLEzG6uGUPMH5mEodCpjhkh9bShA5Y9ZzGiY",
  "key28": "3iaVsn6QX9J4on7fiR4WN7hZv2rWc6fQiqTZMEsUXizori3izghpM8oRAvij7UcNpVr56FoFsyHJExRoQrNPx2PT",
  "key29": "4XN2NLNiuQbxW9Ja2cTsSjJH9A9y1n21J9CgZ2A2JpaNnea4gfpD8U5zFA4GEvATzgQ27hvk2Bc5xXALxTKQcHfy",
  "key30": "5ZPthDKYzUmWphi9m5roNWJnYfie1fkQwthG9YqwzHomwPHBqA8qCH7yi9zLehPHbfAm3js9wwoh57moZBAqNWU5",
  "key31": "5x8nuugpUe8o9gxm3F6f75LcSnakx8ikFhe2rbxEEhsrthzDPzRrxj9Hr6Fxqas6rJnRAThYiLvewU3Tss38Ka84",
  "key32": "3kkeXK7c79AipNdsiqmfEQWyYryYZ9MxoJZREGfFvE65PkCKbJPQq37pzxD8MhYpjDDzgm9kkFs82YURkJyG1bNd",
  "key33": "3zQhcbwWLby5sczaXwXZdDnYsMGSVUMghVHRLFQDnS76XC1JF4A5wt4TkTupxZWLiXPZNY3nhcnp1qAFuQ6gT272",
  "key34": "2RtFDFWDFfCzxG5rRCcGWHyj3F1ghjpkrkF3p7PaPBYnVc9nrH9RbMFY9eBhvj9VTFGmQV84LR8RRdoiYknEt7e8",
  "key35": "2PBwx6ompgEmMobTGvxuHCivPR1zAQyLmACQYtuk6DpwAy2a9fpXfLzKaQJuEHBerG9XVBjCbqHswqzT2pbUhsbA",
  "key36": "4HYj1eGPE8vXqweCGEVP6rt4S2Rx6egR91RgV3M4s7rdNVVwq2ddLjFfvUQSNgxVjrJjNg8HuqcfHRbDjAexEUAa",
  "key37": "5ymeWHG4xBHhZqtZXZrvkPND1pzHmR7Z3XRwSt8EPKMwcuBHeARxF5CFYvwTNWNbNgMmN2mC5txs3HncGkfd4jRC",
  "key38": "3nQiZ52PZbc6fDVwve1PXHprwti6ERV4bnDcxKZez7Lz3rSBEgM1cHtspezXWdzxp1zdPQeBUSN2jJyfSif4uMQ4",
  "key39": "5Tn7qF4ff2ym4fy5JojNT5XFnVf5AC9TDUPNzTqcvAZarAAYT4TgzfN1ymRXEjeURfmgMRgDUKkAJwLhUGBe4KKt",
  "key40": "5FM1gtNNVF3zfUbL66RZcaWQtqUp9xKtaNtj1ZehGtQN4DtKcray39Habj9tigw3H71mvD4eZVZSrQjue2e9EDQy",
  "key41": "64iV8kFfNU4q5tBjRELRBWYrZWsijgo8piXJZSKz84TXFdHL1dZAHvdB6c3KAuMAusBoz3qypQGG68b1ZijfMNcN",
  "key42": "XwjbHjfTx28VnGGi2XroHkjqFfhM3mVwkJ3MgeBUXXLRDCpVLmLRaAKvtsBtFzQAbxRyJw5DBC2zk8MUocqKbx8",
  "key43": "2L4XngfudGDxLqLg5bPEHvkQJbq5axyhQ2aDxnZtRdDY3BjmxQxCDMiHu6i4gYrdZnbkAYjp9CdVygK8NwyGb7qt"
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
