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
    "5EFrEJAxisCBCRzAiB8VUgyeq7y5uBMmRxUCitQrSatH1BahBh8sycFfGyerTwa5jJRj9HUPxt5cE3dqFuCEdzut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCNYyT9784bL3BTSJZkEgxtfZG9uKLKfxRCFVjxp4XTpvwuabiZAXTtDYtYedXw45PgA4HbQ1Y8mprTsbpZzmer",
  "key1": "3CWsEiPFtLMJy83TLFuzxgShURkSUR3ZY9rMziqaYPjeq7dk49HTC7eKu9omEU4AwUKVYkKZJA1NHJ15SLL8C24M",
  "key2": "3Ch9v5Xhq4TaCZTFT1eytUH6QRhgz2vDh53pciZe5ua6pZ7ifGYYggHLLtxUCbWykyXD11MjGdD3TkG9Cin2mAXB",
  "key3": "66fHnHqMDnYYHFNDfh3ybEnGvBNVmQuzcYHNR6iRL4ZLGUzMeMiWpP6z4NGTLHtRmLYBBAASziiqZ2nngZ8h4i2x",
  "key4": "5dLKtTSmTGi6XJYymUEi6KDurVEXFtvrUhXXnhEFkA8F3dg7mtR4j1D7VCzzncmwpMpef3MwVEeZ73dWtRY2Z8L1",
  "key5": "3pxYQtSjczFoCJtVKkZm1aAgT245twReZRqXb8wSt6edtjEgFLaudW9N4JuEuwvEpcCtgmPjKzTErXzw4MbdrokZ",
  "key6": "5UXfcUuwiwjSaG5E7F8RdG7wCwqjiSgdbQWJrd1Gm3xcYaCZJrXgp91TEnaaD9BYrC5qR6Ki8zh4WvpsT4X2qYX3",
  "key7": "5E7nwih3q1spirLSiwPLe8RTED9etW8gVf783En59NQK7fc5RchfJUFxu6RsTZUeVkuncP9VkPjB4Yi9tYRuSTM4",
  "key8": "3fVHkQ5qphtvHCrwmCeYQK52iNx3Pw3BhXquoDkFmLChdEVEobtnasZZAJd7yWukjem1SPnSqNoNrfRUyRUyFDNM",
  "key9": "3HDZaviENNpPXkiiwyyQgpWGRKMBk5qCLRpqXDhH7oNebdBfjuX6RtH2mjF9GLZ5tPURQrJn8xFHnCdDpQpp1wmu",
  "key10": "5dTQLEsUGfN2dwd2rgR2pCRXoAM6KAvaPrpsU5AuiVfKYVDvpcD8hUox1nbrESkuW8D5TMH3i38Jn6NknS1zDdoC",
  "key11": "2FvvLLxNPYTXGaqY16qAjY7eFmwyakhJPBMrEDQKMbsCswKtRy5st13qDYCC5egicLBuNdsX7ppTzcPdGKeAn42b",
  "key12": "3drQ5WuS18Ni7U4N5Eg61db55skCRs5rbm2ip62CqYpGayKokGMunRhNaFeixURckbrENHdubdJdD1CVCXHZJcUe",
  "key13": "4miTA55coqi3yEf2UKCmShFyFFSvQcyuD5zSCHXfUcwoDJJfm27WgoQAH8ZKZwt5Vze7vgsLNmpCHNwKR4kMYE1Y",
  "key14": "fxFBbjJSzP7tqdPC9rhib3urDb8ZsbE3WUgkbWvknYYd8f3uoNzi6YwLQHXTiCYPBqpxthittmisTGvmpK8CDk8",
  "key15": "2KrEfo58aJCq4Q79V1daYFjzwpGPLwSKbvjyvAYeN3L6r9Hnuz1ZQYjLW5PDRuELwSTatLoRLRYV4weMQVZCu8BK",
  "key16": "5ixxgzXAZLMecSXnGDYZJzWQw8o9q9Nx7Vek1kJoYde3EFr1iqdxUPoAWUC93HaEMAiTFZ8MqUqCK2mYsfPB9Wpr",
  "key17": "28nntToveVfCAicdSB5D8J9KAwLEX5pq5XJ3mfxP8DWhRwswJndRCX1DHVyn9dgds46RqbSAsJukHEhwQJnGdouC",
  "key18": "yww69NQrLJsBMuC1rS6JpcTkeQosfvsGBf667PSXmsYxXHE4WkSaPDzngHcB3VpRjHtZEirnwKF2shemp5mfZjd",
  "key19": "23fRnnUymbGPHeqCMU1sJSdt9LCRihGKDoSgbBp8Mm8qFNNzmzPZxLwnyoRWj2CFCRpkVJWNT4Z9aHfUsZzx2G3i",
  "key20": "5hAGbAcaaimoeDbvaP2ZJAxneVYj3dMZ1CYBaavMN1NoU76t1dSG4yjvEJBMqWnEsX6PFkpEx1SRGD7oKaz331q9",
  "key21": "keycDLa7yug5yeieeh8AJAGLJ2zP6Eoz6Aw4WDS993J23TLd7jRXoeSxT4Ug17PyZLbA32piiYrxbaNuXd6QaL3",
  "key22": "fmdA4zoVvnuF9HtYVJWj3jT9XBoKZqpmWcxS5GHDPyNUMvaJmsHZjbGwgYW4fvkBe5PvyGEQEyHKtZsTkjRW4Mj",
  "key23": "3hBkUFoFfevqTUP7sUB9HtTDnyepsy6oGuaMMVFYiTS9tHxfcTKZ3prPZ7FK9YWUtyDNieZiSKJpLNnYT3exUvBH",
  "key24": "5MD5DPfjJexdM1gnStjhtEmD8JFAQ1Q5j8gVaeegvMQviadhvx1SC33suBruv1BbaWMHWvok1TS2Y2ZVA3sXTwQT",
  "key25": "3f2cfKc91VsCLycRg4xazViC5c5LkupqiPSnS2q7ZtNTRihFTfLfxmaSvTV55hf5si4sYrH3UhAUghixoDPdbKLP"
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
