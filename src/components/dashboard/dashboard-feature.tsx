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
    "5sYuYw9MoyCLSzbfbsKw8Y5UE3VrLMSDRCoNjzy6XWKzgmC7PpNb5V8ee5vmFsx8xRuf8ahhpVjKQYmNS9wJx5zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAprsUpf2KR22H1yyy6AXHqbRGTstac6JVpQZoUdhEYN3dXPQN6Y4NouBeywo9ZajXN96ct2zdDFBkUZZRcHHbk",
  "key1": "5mV4gGbgD5sNzAatyAdmXHoobLfU2c4BUp7B6P8QYZG6MC54qL3n5VVgJQE2Dghk7xUXRT29t5JwkAoic8hz2DxL",
  "key2": "3BXCwxQjBruwmvy3rgD2evTKv5yWmygG1qMV8j3cJan5cEYUixJodXHHMSPQw5Q2QCA1471Wk2mZ9SaTE4EAJxU9",
  "key3": "5aWWf74rq223zs4dBAWrxf2VaeKnGNyM2bcDdX3JUayWUef6oKNDcUzLhKZ5QUTDsdnS1PbfTgvqC24zS2mmLbUE",
  "key4": "8D8oUWd4E8gH6GNcNhn8E1SgneWU518GpLZ7S5hU5oEaSgKWjJmgYUZfxE3XobyRWpYzQhcCvQSiBB7U8uD4QvE",
  "key5": "2hGi8jRadYE8Z6Gk74zcZt1t5cdMnH368BP95pGrDn4ifHDMESis6kosnTrhNsVxYphqjNYN3DAWs23nEKRamWRr",
  "key6": "5EgycLNAT7AR9ztzCgCsPw2PffignuzBaoJma4gjsSXWhRpoZv8jBETCBZ9dmNERPuXjWEihX9E8zCfSZXDGhHV5",
  "key7": "2eRhnUgrYQ6UsShn1MvvPu11deVf3HEh5KxPyFh9Kx87xfMAFvQfcDeAMbVHsdN1SJt2XsjcT6iK4SNcWZY4qDkX",
  "key8": "2twS4ZLyHdF4f8wmMnUg9QTKisJ8eBLesb9QfhiEhZJFkoMCa8wACFB1KfBo8unQi3xA4c1CGDcZtoFG8b9FU4z3",
  "key9": "gnh7eSK3YbHY7s62jhHRmhox63JArkHm114XudhWbeALe15peAyyuWf53nfQ3ct6ZMeQt6cXhT2tTGEqDXukiVs",
  "key10": "63wkXAR5XUotHy3QVZuuz7d6DpC8TgSohCBTEpySgJJm7ERHS3DDcikdbWtvGMixL6whJjSn2m9HJWbyczyHLS32",
  "key11": "5oiNN3fd8UHjzAvbL5VWEMyzmjTYZavjSEpTgDz5c6cbRGrM6bXRv95L3Tq3ZDdcMG3oFGYrndSfYcyoAKwycWLK",
  "key12": "ibaYKFcBL7sdmTVDRpDuafh7fYyUNthq5wtx1uzAnFCKm976DvG4FLFSZiXdsqHfVkq6rAgKn8e34oFw5C8X3Cw",
  "key13": "T4aGCJ3E2qEGTGES6XZDDY2EvDtairt2wgSxECG9dHGwdayBdNEBZnsBhVCxTGmqttHnx6xxaXtzLBpXiUFP41b",
  "key14": "4oHtsdhUCTJn5gG2cQTbfyzahZ7J3zfpcDLAgHHv2kkMJcUV5sShPuato7HCTQthyzL1pbp3UeGiRXVovqEZJScC",
  "key15": "49FefB4nBR99neWxPTrF97PaAMJgc2WigHCByx7noQsdgTfWrVD8wfaTnk2VSd66ZA6NgVDpLfrnsezoKe6jV84a",
  "key16": "65DqBnK6wk6YFscL2CTPws4r3VhXfJ96XiABPJmJtR27Kj6XDpN9ia5jU72SLiFNjHrpBPdS8kuxe52Qwf9BtjPu",
  "key17": "5tcJihZ2gqd6hUxvdkQgXQqoQVNhh2WiGeH6r5EPhmjmtgHtCPacH33QK7SQNKgc5XZbjD8CzDFejkcoksAd8apg",
  "key18": "4rZkPX6PjRE9UhXUyNicrUSqBdDAHGba784bM2z3S3wTGMVndqE69CCxfxpU2qyzrHUiaTiE3EUPmKwhSgn1EcWf",
  "key19": "YYbYF7pnvWeXufYEY9rSU65Pzgp3zaKUb8d2wW4TXM8zkNKao9fVcGa5VB39KeXs9mt6uGsAyWYKUwS6igJiue8",
  "key20": "5jDSwrmS58TmnSEbuhqcsesgfQbnrq8747Hjye1xPGyj5xKJ5UJxzTCR5krfhK64gnEsAjuN2UvZDE3nVp1iEFqj",
  "key21": "57Js3dpH2h74jw5pw4kPpan4CnjpNdqQ2BNnp6Q565yA3nJwXAsU6CuUwDB9uUyt1vd831DCRRP9LHDbBW4ux5uB",
  "key22": "Cc4APs4fr97derNNptcsmQvfCuvF1PKfH3aEkWqk38qKa4DGtUdxvpSXzjjGkszP5LoyvV3Dqpm47tJJGY7yvcW",
  "key23": "4JobuaVHCEs7y9qUQquq89G8EFg6dFqKKPEzG4U7CxKNkfVkTSD2q9bE8BzSt5Lcbe7VQy71zsA3Ri9nFqmTDCfA",
  "key24": "3KyG8QQ1aVHo7SAgRj5jaRY5zjPrknYDFV3swUZKFk2AiVRVvBT7aFRPDzXPLuTHFggB3pT9GStmvLf7gm6LAfK3",
  "key25": "2UpULLWHcJENgGuw91CTcrJGU6gpMURhqhGx3499r44Apx2xX7GCyLYEG5Jjk23UgiAvUHdnHboxpsojPfJfExFe",
  "key26": "5MkRLz36UdFUMWnYpYqvVcqXhAu9LVe9mURQtsVK1xNwoF4Zp67AivMcoCpPnUBKwqeYQUpgN6cLKCyJUo5haCtb",
  "key27": "3AGuCkHfjP57EY3yetjjpri4AibygyRVbpvEBvUeKjL6P17NRWf78Yw99arXnySy6GjWNAN7X5YQDPuE7RqoY2Uh",
  "key28": "5uBBzjdXAyhtU8KTGGvZvA6Z2KoBLAR1vJFtAZnnBcmcBX54UxzNaPK4q5T8KsZ3rzjeQp8uXiMuYjh3JHeVPgXX",
  "key29": "AiEjpJSqnfbnY36wLvGYqz9bBA2LC4r4XP5cwHtx3QusceDZjEwyWuBcfwWzuuqsXbuXW1KsdzLuHVgBdXN3uHh"
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
