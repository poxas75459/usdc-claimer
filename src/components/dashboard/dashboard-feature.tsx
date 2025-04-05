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
    "5M1dhjtQLPkuzLhBpyyDgNgZKtgRqgW1cnFmz39VAvZQAjLA36N8TbThKKpAYa1jwdMMSjRDTFMqnaoBBL2yZbd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dg1XZvyM75X8DisYrDtbMw2iPDmS5aHFDFhTZ4TErCdgDcgeaGZXDmDhtdkknSPHnFqbJBxs5PXx488dHGh54z",
  "key1": "55XDDtp9vJmzes7wnr1VGRuQZSiUNWwsErKGnzPSeDJyEkQZp64K7M79dN6mpNX2RCo6APLSLYc34KL5JPGmiEdS",
  "key2": "51NrmTGnUWpurpS1KnFVUDw6nsq6JPf13k87LZjvY62dLFobS9KXXK2fJYRcWgms6o9rMC57oPRULfkE2mTrRUNV",
  "key3": "vTf4oJubdy72PfHet1xHv7pZyNih7jSFaygJFwWRUqoXDNpE66oMrhTJeA7cCVEfuRYZYDJxhmN2uo7aHQvLiEm",
  "key4": "3HJAj6c5xYVjFVynh9bDmHHFihY8Yh8r4YKciBfph2263xpTCb4t3o3beNH3BwXNQuToec8N3vjz8tW6uTXqZ2xh",
  "key5": "36kKo4d2QV9TWfyDZ2iVVUF2oUBSJenxMGi9ArY8fudd3Pawy1FHHjanb5RAQccjqS3t3KCypgtMkZFRJK1Uthut",
  "key6": "MabMXEj3jgkoBZVcoT9tE8s6jMGBvtBBWrxfr6yF4nDQbF6VCm42WSkKGcoaWukhy8hwwaky95PGqVGNVrbsoxV",
  "key7": "2Ab3AN7ds6iJPf8rmzRPTPGFAWGUgtcR1azuFU1dwpgqpjnNPGRP5LC8qr8VtjeaQRkgTF4aa5kr2oWD6ZzuNmyp",
  "key8": "36UNLDfEeGLWHRj97C44bc3TGDP46MmUWzYR12gnnVhsor1o3p1f6qr2QbC6XYKWgQh7qRXpR1WK93mWx2NBo9Ng",
  "key9": "2bUnNRYCAgb8BHRHXV8QPAPhriisKVVWneg1KNEryLDzeAEcpiAqpvQZKjydzYGFHoSFAuycJwCXDqCfUQdXBQDk",
  "key10": "fqRdJQunTgNgitcGHKCpJtDvT51j98mXpmkJwsARqsbEYRwW7AiPpKQEF5phXcshBAk5Dc1oUda3QJkzGW5KYqW",
  "key11": "kBRgmJXbuHW7JViMaifmMfYmjAJafWa6bjcRyVPVpXLtxNVesYjGg68NFi72xXz4SeecbJZ4ckvcca8cgxXN4de",
  "key12": "5GLKA64HBeNDzbkNGsNUwgTH8fk2jSWw6R1XKwY7CygWiV6knYbWX3sVm1MygwQYN7LKEjqVgetDQvXK9Ej4B75n",
  "key13": "5H7CoFr2Mq4aB1EKwBUbbjeXHZZyH6gkjvxm8vB9wFU8iCxvByoLVq4vayPiCzJS1b1DJ5rYUHyi7EK1kvVGYJAs",
  "key14": "2zEo44wT9n7uogkCNz8vMh9NFNQi77e88LPAyCj82Za3GozRyqUXPmMdAD4yXiKPZDnFZmosFTVNDu3SSSgNey49",
  "key15": "2tgccrGaa1VuGxfyRw8tNkdLS9p3ZDEMDQHDCZJQ4D6GiyWQ9HbPJE3WckJg5Z2CtSmHmtUxoURURQHJ3cLDpjCi",
  "key16": "31EmKVG2EgtCCcLJDQ1A4iLQAYK6pfXDQPeSzTZxpJSyonb9VQg9CAbGun7hi81V3nbTZBWqLXFuewMmzcMogLbt",
  "key17": "3x1parvEEL7H1oaPxfiic5wmmZdGjrhsAKPdqRZRKRuz6LqdmEmbpLHA9oD7oPJ689FSpQZW3YuXWrLM2mCfsQkf",
  "key18": "4GR2jPrAUmruMvAppA6Vsrd5ft5wyaRkVaBCQokQ9jQTopwjMaYSKPAgMiKfcVFpDordfw4fdktTBkN9yWVqBQ2M",
  "key19": "4a3df86G749PweE2SUrzD6z7eKUCbHLHXg4b9w3jcFFKVR6vTBrzQoqHr7hC1WjghXuQ6brBZzTnqX7bMngiA66L",
  "key20": "26k1q91MYG8QB4XKuAUHYnySeEbrzYvmz5vSKYBpYV5PYvRM2xZEry8n8n2g5aKtpH5E81qQyN9smezuYVUz4HBj",
  "key21": "4GEPLgmuDG6d6jfMWnF2BF5MXr4t6FszePUajdYXXDyQT3UCqKTXY1uLQJ5HVZEHLzt6f2ABDPApfp5p1BebTvwb",
  "key22": "4RDzxpzZTf2VdNZJ18tLtPbPhsHEccpmCt85oSSFCX9ifJ9A9uk4mkF2rrorjb6qTUCqrbx91FAdoqAtgs3eikwR",
  "key23": "wrvNUqUuUrzaQc8nUXefpHfGgb8nuG5L6vtJ4NeScZBWmb84rJYvgWMzKXuujUFxA6a9gUVKZQZ4G73Lf6TP4zs",
  "key24": "3Pkm6R8EzJsh3kQcJsbjy1JuwLKGnREmMwtoQfVdH4GKeWKcKwmugzE1Hb2X28pk8FapKq5kkcna3SUhSi2xi9xf",
  "key25": "31h49CJ4yvSUYYsC85DsjLTEYRYJMLofHPps3g9YpdU7SVDLCsNmaR7PahTnDdx6itjPt1MfKYy31fePJ9sqUSDK",
  "key26": "5XQLvuYBGWsSBeSWziYbXb15E9sDVy7WshmZLppvzi1GSQSdfpw5j7LEkkfTKKXAsLN85Taoze4NRihHVAocCR5J",
  "key27": "HkmUDNqSMvFV3MR5VKnDfpWZteR3QQBc1n4RPm7NXXCRZC5pkhVGvygfXfFto4VSTp9kZqMR4DXngRogay4pzHB",
  "key28": "4S3tdKFmFLzbK1DAMZGszCAwzBCpE89wjXKQF9sCNUFaaRNmaSqCHqWzchhauxQDSzRz4rHxYP7pTZPyCyk8A2Ls",
  "key29": "3SFsAwfK272p3WDtwGJger4Xg9FNWb6CHnT56fDk7cjY9myMxYY5SsB6cEQ1yNbWzPGM5eiCvduBCUD21d9ZtDvk",
  "key30": "8ZVdfy2XQJnWj5ZEHcyRHLbDA6Yf55fxZbAEHqt1fhjwY9EQN2HCwJQzQB8susnWwBNpnYDbYhpmcuFB7orAdaH",
  "key31": "5EB9qn7cyq9w3fmmmwAy7bWRsWo9HdUzuZGWJHe5qsndc5ycBPjLofS3tpZgEmhgV6yUwGDbDMmpKRtEZWq5gM5F",
  "key32": "64681cMW8vXXuXfRnMGKhw6YVxMfzyKxghnDdGhYkwPpedHFjNsgFQVr4p716EhKyMjXoWR4XEmBgBiaeyDfyGJ1",
  "key33": "2TjAtKpkD6mni2Qy8qLpTzko1GfN4TtkEjdCLw2XQS2P2Uoit6Cwz9ng3u48LPHqZjofh12VMf1MHd5mQ4adP2C",
  "key34": "3ed3AgAaPQawyjg9ktZSSeTQWDRV4DoQCRbiuMA5izk9P4XnidA38TqQCY41tY6V1uMJjKvTyfQWUcidJ5uhcb45",
  "key35": "Pnk9Qij2LV2efJd3k2atBkDeQ3qrEUwCN2r1tdQaaYayRXTbRXDsuTdNjzGq6vRfQhjtjRHqwtZqZPQWkcJSDoV",
  "key36": "3Dv98L1vnTrD9f7Har4aB6sCKGkAirYni5srxtiK8XVfCh3MDQvFb9UFm1k1tdJi7nEbd2Ptp9KgPi4JnsMJs8Qe",
  "key37": "3mWoFtEqPab6dCZNQJXYY84CxCSQ42XDFPQoqRvdhE3BavVam3yBy9RXbfC52hNvYgx5zE8tZJHpECDpsTnSg2Yh",
  "key38": "5MrhqzdXAtS3aKZSTKTafYgd6GTquGsKi1PXDLRk3Aj22WU72v36wQPtUDqF3wYpRaqAmJiccjbv8iQ4k2MckvxE",
  "key39": "hsPvrhr3JgvJ5qBzv49gMtfsjZxz1HQEzocT5HU1tkcZtzxShiibJ6xQSfnEby64j2uFdW3bZVvJp9EVD4wd1ar"
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
