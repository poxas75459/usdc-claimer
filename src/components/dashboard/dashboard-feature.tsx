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
    "2XEvbVvPhMLSA97JdAXF8peZZ15bd6vGN36pjQVcZvzmoBhwKAZwqeHDvhqHwSsXpkXRwvSTzuEyhWgjEm8iK8fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBFYJe6brS63d1iiJJNKH9F6C8E72BDKEcHyh6QZqS5YVgymxkxWjppaFMmsicsAsNDJ1ffDBXKZtYr7uCBxnt9",
  "key1": "3MUjFEAhpFvz2cySdsg92mTEei2BLxGnaic7hBEqWCn2mAthdwAxeTSFUKwXMMW7Fu1gPsUFSB394ZePX81G47QF",
  "key2": "5BoU9Y4y4kkLwbcqhbZxzhhDtS7epy8pLQtYyJq7ajooMXryN3XKcKrrQ9D3ukk8Coy5tPBWWsPZ3jMDo63kdVmc",
  "key3": "2VgsKDrpR1dq9iMfxt3jGKTvXt5GKsCAZDXTBbPQQkyr1W5MwGs4dzC4Htanu4VVHvR6Qtj4QACa33C5eqSBG4a8",
  "key4": "2iyKQgtfZqmiJdZ3HreU7LwLPmywMvnnHZ8XhVP1xYYE3inBtBu7UtnCzdTc7AQnw5t4UZLFi5A8Rw5U8zZsC59A",
  "key5": "TFJyvUBjU9EodsJYde28s89meYWhy2zYhnAEmSZUKrrVMiYYtAZUUHLz23fDCxci5x6cPCggUmSt7XhCBpXsL95",
  "key6": "2WXB5vcWcgd7pWa8YEib7JuZ1jS2pjYR35ddpCG87EFoD47YVL3ZtZeNmcyS67Cpr5jU7pi6hjHSdJxSRfpKzmBL",
  "key7": "u47v5apX9BWRwHSxaiNSa58RqoNrgmQ3jMVMJLw25RuKRa331vEUJWhCnPq9ACkHsNXftgQNPouLPzt7D2yUBQ9",
  "key8": "YrnguTigZRZQqzQRLkkkHGSrGr1VK4FZm6aaqpqffYoWFRTWk3ReEZRGMigrMfZPRakEj4Ym9XhfDm2EiK9qxKL",
  "key9": "3SKGHA3syJ2LTpCfZnBr1jjwogLMBWghzeDSeVMVmDrkHBKE1ELfp6H879AzrtEutYWeyKbPkF6GwEx5Dzjw5H6o",
  "key10": "37m12oQCzzP6DC6y4qZddkV5jGfEyYwi6gfJwfKu8Fcgc7AZK9jQPoMEXZ5E2k1Fi2G7Du77pZxCYxBmbGpfpwtm",
  "key11": "3fuQfh6zUKzi2hY4bQnaBoMz6CXbTvu5FL3x5W6JyxkmDogfQGiZqXfPCvy7N1pWn3rZfYtDBABQePLW8ayUcYmV",
  "key12": "2ViBjB34VcgN9fv84eX5C19Wur9c1XC3FUjjv4rPcPPSv2ws7gBnmDFvKLHtJW9eiHke3ZZc4qwNLJk8exRZeWyL",
  "key13": "649EbcQQJ3D54bV1WC3srYenh54hThmaQptgfxCh1xS6W652Tuo1pqpcShsNWc28EA6VkcHCtuoqsazoFq15nvsq",
  "key14": "L34BGUEPzTFdbp93nXMjZqTHATTn4fCs4TsPyK42LTmptouaVUvBPgGmoRGwRh15dy9sDCGtDSMnYNaStvdNCdN",
  "key15": "3pCKuWr1tLLZVX89iaN7xqh79sA6Kr4X46G3kczJHqL1jEjnNeFZVwut3NiUq2qDonX3VAcGnKBEqbLz2Dpo2PJi",
  "key16": "2Brr6zHsY671kJqCNy4efoPwyNrhgFU3s2dK4pv2zJUxfm6mJVabwwN5r5Kq8PZFVwnY8arM6g2eZpNdoqoeSc9e",
  "key17": "5zDDPyUQYFBuHJkSbzwbVQTirWUzfExiUJPz9xjqnJCHEB8UhZVL2EPU4qK4ovcupq4jTTCH9rT8G27DWVYVAjmq",
  "key18": "2hUaMkmHth7MBnmZGPiWPhRQB61Zh4t1kTRjTiCkyNUgdEgYX9H35HM8DhjUSUVrBsSf6naVNfeEHtmYMy4FwGgK",
  "key19": "55JRjRvk1UTf7iVZgzcTqLkXivqndNwiL3kMX9W31LugqWF1sNf1AWShgcboTcwCktPVNCGvNPhVzVwWDbHxkGQs",
  "key20": "2DhhR3Ei1VL9hpDi2nMzsq6E4wwLWc9xqUrnfLboLCMysbpKFNUMrTHWBWHA16SQgR5fJg5B972F4bK9fsYK6n9Z",
  "key21": "5u67Ycni6oivPYgg9SyiWNoQdLHSm7HNkzskv7CzLb7ufhxjeakEJLzFpKsUt6ZBNQ4nubXknUUQbmfxRQJixose",
  "key22": "2YaEvufwReg2hghbjm6emuPiGhFZ8oDjfTazwDFc6CZQHcich1dPaVS1rUdBjzV2snZS9nJhdkUC5S5gLWHCZmCW",
  "key23": "3W6F9kCrsNnrmu36smA22a8nt86MQKrX3P7TL2aynbTTK3JLyTGkob2RLuSsWRcUKocViFPK4U4nFNGtVxMNbM4n",
  "key24": "29gGrNq4K8SAWv2g61p3v9atqZbzNyNwgM3vNVnU95DWwxv43cNwj1WS8m9foBATxqSEhz9J3k6jUx7m6xhJC5nf",
  "key25": "3vgRDRnycZXimTe8eJxD1qGXCRSSLPkcYzPuBENYdD48R2mcDyfPcUwVAr2Djrv7YpLrpg8bL52as9Zmagwa13H",
  "key26": "5ypPS8kYFuHUe63Dbu8N4ZX3Y43xovKLqDz8fWgohBjwHLVsekydqoM3ci4D3dv61GAypDWRUxtuV2Nv8jK14LgE",
  "key27": "2i3AUi7zmduxCcd5by1XpTCPTju1TnVWuYo8v6EqB5J1f4Se6t9uJeGTr1CUBUuFejDbemWcuGT4MVxePjtfwtYL",
  "key28": "49J1guKNDJJmMBVHpdGaNXixrRRUw2NZQLL9Y4ZChptM6LgvrpQ4ZabfSBjFztzn63MRLr4ejjc466SwWKfYXKK1",
  "key29": "2AkUMMKEyZSAiiXdhEwXLBzZyC2bZwiRXo2p7EuiVfAtUJCZ23uEASZUgwt1GChDrTg6bcaXduvSoNYYDETGafTr",
  "key30": "4t4r32uKRUH5YxokfJFGikYMTDorVBvt9YCFPagvyNECFuC4jWLq5RFQXKRdtRnFhGAg6jNEBSsVQe2Nd7MehktN",
  "key31": "9gbDU4SWRED3nLPx2fcVnRpJEnPEGWqdCZTjT32zeZsmKVGpbzb1kTuQPiE4P6swVHxmSeXwaZ6djuCKBkfsT39",
  "key32": "4W9yKdmqpZ8KCJguz94yBLCEvGizKcEcEYQKcyuRZkYuo91d92P7aLnswvUGa5666X1B238t4jz5hmo76AFRkADM",
  "key33": "4nxotnoKsKHJkaDPCumRCdD1xBphDa5WBFoTQ6hMmuu2C3WXhWkfDgMDiKYRcUk4M9yaLhwbMyeXDCPkSxsxFQqu",
  "key34": "3vbFf5AoBXyNHck9ZA6VcLy17JBKFz9WDrw8UN3qbTXWwaPbm1s2K8qpCrbFA9N86Xa61KZfCKuL7xq9pSmGT6HC",
  "key35": "2q6nc3kXcGpLz4cp3BaQddbTbrWHieJeyLMZAdSMkjmzVk6YViAEer5godR2RRGNVZ2VwyuSQWxpNzN1KSBR5WZp",
  "key36": "5FoiceZ8dj3uE4vRPyvUR93U9s5yy22VbLyB32W5UjQbki83TfAkrHfu17aQ8s2HN8wATEFiegh8Ko9iqWHmLH3S",
  "key37": "5CtmQVTN3ar46dB9yQLTUsBNkURC7UTqfwF9FUgJNBXifqApNejzWS4M7KCZ3aHfd8Ao9oYBUQr788AwPe3s5iSx",
  "key38": "45EwnEGzooiBq5TyS3N3taS2r8vp8T3zzHDkAFgU3oCdXcY7xQF5b46kywhAQbpQfasHnS8DeF2fZMvW8bnLwop7"
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
