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
    "oaxCNXdJmeQtggRwCtRyX2GF2UqsVzT7spU3rcN7kwkE3eJKLovgZ7j3RXzyvfSGEaZ4vzLNqZjreMDJ7iuwJao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cV1pKSV7D5DcdVNPmYST32i9JhCSRh5iSpANCsbPzza9PmtVeMrnhkyyAo6HCSJPB1kZf1tzUKn2gfyPYv5QF7Y",
  "key1": "3jn33P24CXb5SN3QZbZh7GBjxoLX7J5k3rhKkF531wbAzi4QajocTM4bjHjofyVXckJTxBsLN8zj2eXzu2Ju7GiN",
  "key2": "2seU8zpLMxZ7oJd5ZekurQBcZVD9DpmCLKe82TTGKC9UWCZ52w21k9f48cVsVuYSjEg9YyFw7nLmEWxCMcmHKVqF",
  "key3": "61k88oiR5kVcuQK8CWwCDPCVGXHfSwjUSnEYux5Y23J6iBqATKz1QLfyNLZ8zSUpi5rCzAawiunFShMQ8CwxS1uA",
  "key4": "3jDRBpBFSxmX1bdaMn7LN1wNDkT7AdTDnr9Zp8iXUH7u9FijuceeY8JM99FH69hUR7zXcWNfi2GPckL4TvX3LPxm",
  "key5": "SDXtbXQNCczFdncxtKVroTQFhtGehDK74bS9HtgbsWiwJrAbEqEyESgUQXpiii3qvwCXvfo4EPEj5BgiTLq7puY",
  "key6": "53x4j2UQapKqcMnuBNcWbvSZx85aVLUMNKyRXRHXGKExw27C7Y2mUtQqWfBVQTDxcNmiCR4ztJdSBoMt11qte9om",
  "key7": "2KWGR9ojFxwvWDk5mgruqHA4gGDzEYiYehy4HtWGG1jdvtW4kwDXvdCqzoxbzi1KKhPNuc8LFA4WPBgrnaww3cJG",
  "key8": "3nAE9xMqM1P3uHx1zymE8HanaUZPRvzEVAGQD34scbngyXWFNacUy8daJXv1f5bUdiNiguadhAFHTLie7F9KmSd8",
  "key9": "64fvTdKmxGMURigBXgVcycUcGWq8NQkxZk4DtrhNG8o9BCBfTC3ha31coHzBYm2WBzkiQDettBkiUb2KkTKJKSDn",
  "key10": "2CKr47T5M8YYdKQvDqfqvykrsai8Eo12kzhoBwpNsWHtQHQaRJK6QbhsnCnLg36s9kHimyM9VVJhAat2cc8QYN9R",
  "key11": "2kS87LTQRCE6GKp36f7HKoJ2ye4W2HukFptPbAWv3QAjwrNmZpvj8GYgfCV9u41ZtBBgfFVnkwzqB3kHJahVB25n",
  "key12": "28xSoZ3PeAb9NYsnpFCFwNAZWz8U3XWPDA4FgAK91C8WTS1sM58NxTPq8tJ523oX1b7Mcjh3t2aEu15Q49hCvp7Y",
  "key13": "YStb8yMSjdHMNn7oeH5yAgpkjyyXonDXp5A7fN5JBoXB92vY6gNpB1oLp9vmSWCHhAQdsh4SgBXMBcyMzcPe8D2",
  "key14": "5M8ihu6ctNsirtctNceXGcXVzKJ4feEH4VnP5m8eB7WTznrmzDuuH9yeJMnS6gwTXhVwdqv9xPZfj8r5t1L58vAx",
  "key15": "4ErpsNQwKu3oD89mLvaiczNTf18hgsDWzPSoGkGQSaVKj8Zko7fbEXbooY99K1NoKGdvYJWNwp5qdBVfVVR53gcz",
  "key16": "4TEtPDXXovJvB73G6z7ts1TW3pnSJhKqmwXVTkJXMYqpi4jjWp7F3yaM4Rs9qDByDe4yKmizWjs6WiJ4N43rdK2p",
  "key17": "ty9Rw6Ar4kUR9e4eS8R8P59MqCiFmPDJfpJB9txtpsNTXeB9DQdMW3SKsDxF3ND24uXQRcmVdjUgyiB8EfJonJx",
  "key18": "4QBgWTJL6CLJz6GSrJsivtscXNxmK5tB69fCcJdQNAxPExsEctdE1pz1FmK6e2PkghoMp8noaCky2KtJiEP96Scm",
  "key19": "4Aoc3NvnbJ18SjRL13dvs46ir5tTef6WtL12W55NEgqndzSrQeGVCXgiiZRCuhZusD1VfwQtmvPBavE61UsaqtsF",
  "key20": "2wWp9DA7gVf26mJAGXyUdqUBQV23aLEZPjTiPbNWn5P2jrFdSATZu5TDKXANsvXfrKZW1SFNQFNsKjLTryvAsXzK",
  "key21": "27Ke84MQGTWM3pZddC42KH69qTbbD6i7KTBHRVZwbYyYBzdGTYJ9C3q4JsKwfNtHYdFYZoMrDBBVXGQ18zY3ZuUK",
  "key22": "4dmeJhWNENSbNX8cABHHyHS6eY3pYMLRawDLhGMs5vbR1vE6Gfw2GpZkYg8h6XBQKVgJ5MKUDBpApH1VEZWkAcXz",
  "key23": "4f7eZ57sD5MMaFPvKdgBJLVWYaS71f76TkXuNEUCjQDyZkb1aQKeFZLyh5nc7wgQUUt3hk7hv4VkX6c3h7ALch54",
  "key24": "464v8uAG3FfJr4wckm96afrMtCNbK33mUujhhwXaJhRLgW2fKRiBsWtTVPZ9x1eFUyQuzepSzUMzzEPnZGo6VAhH",
  "key25": "4Y1oopoFR8wZ5iGhQp51QUbSdFUhGEbC6SDGJoYyWYNuhYdGPcvTCWzCi9yw7ge6n2CGJUUHVybNkUv77Y5oJ6iz",
  "key26": "5GXSTHZ2DQYQfNoMCSrPKrNoBfytD9vf2LQ8PXEfk3691CZL9pAAY41np4sXd6vk1B3qLHkbnkDKPVzqH3k7NPKa",
  "key27": "2yDxFx2cutVNreLGSjJw7wHTvd3d4mW6CCDWLu7DcbsDiSajwi75Aa1wd1M2z6SGJ6Uoi7agjpPfQUzRNHwngsPi",
  "key28": "45HAgMqiS6aqNdZVVmCVHbgTVskJtJGaB8JU5o4j3MXx1aMmadteNqABJucCxmYZSxfXD8v2YPC9z7oq4tayNAUb",
  "key29": "33QLkNvHLkDYiD6Upyxa3y14fSyBvMyHKBKm3XbcSisX8Wek68dmLAStcTwJszTbss5kS4qb8LpvLqZtwXUzgFRX",
  "key30": "27gAfc5Lk87ceRczqdFKpkgmSPvSqhUDaeYzZ2MefjYRk9ssfwoLow8YfkwCR6Cy2fXi8Lc4rhrFEPZPpHLj8oPL",
  "key31": "3xKkneNZDzh8npQ7yMQ5r4vathnVBSryhZVbLSbxai4nC54y6QsohhzMYMsrDxbTgcd5mUFPCbGVwYEg4NBpDpiK",
  "key32": "38WJLmkg9SKN5Bok5mUDgpcfRDMnRRNSfdokykaW7FW3zXPXoQL5rGLRX412Psb4bgYva5ukbDJm7EaU7y9XoXdv",
  "key33": "5dVQiZSS55CmH3dCmfmiSNiQVLpJauqEyciRTwT67j7YmdX2HpoRfjeQMAaacSns1ufZoHZ8wBycwNsvuBG5nUph",
  "key34": "5ac4vgAVviYnbz5o1VGA97oGGCGAjQz8vYupRt3vKF4YQkk1Qo9UqCmctEgqTz5sx1ResEVhNJ1hvZiqfhce3vM5",
  "key35": "4LKU6JuVFUd3tCAGiCFW6in2gVru7mf3o97U3UsvFP6rZ8Vpsyh6CVGWXYnRZnPGjaaSB9a1nedogxxK2aP3apjv",
  "key36": "3bpq3JJr17fRKudoGskP5dYdAeFU2G91ep6E8zJHKtmKPMG67hpAq2rRuFse5vKsX4jn8FuxW3kTLagZWVpfhsy4",
  "key37": "56sXRT5fzchjnPncm2kryvsWdci9vSMLbNBC8h3YbPQvUVhHBQBKQ3rhkH3hNe4cBCq5iMZQk4ZEpY6VyKbzHWa2",
  "key38": "3A7wQN97EZ2sRE7rx4qMisaPaRE4vY1GCg36gHc1rtJQP65Qezky6ai7pChb8Vygd48DFv9NLU7qCsKWTw7u7GHB",
  "key39": "p8EkvbEGUiUScqPeoD51KBcBptPmSLTBD1B6i8YFRw8bhBVeUPpTZJxYcytAEXsjsYYsng6CJ9gKsYXQ7MYeusQ",
  "key40": "Ug8VDpp8bZJpn8PMgQrarhHErA45Qe2ZG4nfMGALn53kgiqyhWCiQsxCEnZxYAbyYGuZsSEJGq7uB5CckSGwyrt",
  "key41": "3JYjMtdfoonRJBjGmVWiqm7KYF6vSSHR9HGD4t8Pr2j7sbr2HcGtX6YHBucSKm7ACR6GaQWmoG813Fut9skjHTz5",
  "key42": "26rAtwHeTB7cMkGzkCeT9rXVTe3t6WwZm33eRaeJG8egpEqJ4p3eyAL41tET2EMvVQzor5Lr8zJtpHpaczUj39SV"
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
