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
    "4XdC634W4TDPAQhL3254jcyY7homKRgzuBFAucsCSKomJKUFq4qL9dfJ7cH4hAzLERNXN1AeVP2usmwuycdkSUwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXdSMQRaeuYb4hEhjg955ZKe4hGVVrmyy5ED6PRVrk5J7F64uhH9KY7M8u6bjdeUzupPWACyiVwMngYjVMJBWQo",
  "key1": "4NfJur4QjNF974BxRbhcXmPZNTibbKDe519iJk4neMt5U7hQxAy6VAWDWrMUYaCFDzBrQPE1xAuf3JT9FeVVZWwD",
  "key2": "2wuZgBiK3egfNUDuLuZvJJjchNcinLBywgNmi1F1hVZfENNMeBZT9hAWZsastNp2pScDwynRBAwh5p8WNiqfAT5g",
  "key3": "63d4LzNEZi8Av56NX9yFRBjbLz3R4gBRzs5AGmhtewkhuQKPkS5f4RySoHtuDzzkddsf55V5HJ4GUCocQVU6nTr4",
  "key4": "2zEcVV55ByQkKVX1pUEcZiXV6cDanTiTUPvG5jmuSRuy3bZMK3HLyiggWfw8ywoUUXnhdrKiNzq1jTHRP9M3kxNi",
  "key5": "2f3YWqLixwmHpN1aWDWDp8Qbra1GUzKiELZuLu4aqjeRinvTFYuyyFjvN56SnzMArtcgRrtenV6ugKLpVmM4QUvi",
  "key6": "2NLucpvjUbfswkq6ESQMAgQ5KT4JXaXHBPHarQ7R7D9PxJsUrmMJaNnX2bz3MA8guAKM7wv6ZB4daFdvyAEU6o9Y",
  "key7": "3AyrD9Sg3jakziaWB9GDtdRCSREGgAmuXADR1QKKfveyAV42qQ4QuYz6v4eMLqxNcVn7LWVyYWDoMeL99gRMfmqp",
  "key8": "2FuQ6udWKhfyWxXD19NuTeohMMcZGPnUuEfBQMnJgEQozLxhziJt6pKD1iZLbM7ic46MDf3s43rAqiZmWk5fNq3s",
  "key9": "6UpvUtSDGiwEugh4ue45Ebtwz5mkX7Ks6qiTdE3KS1g8UJ2JH7M5vcBhM65V9JVGioLNaNFKYQ8ycpu6u6xQiEs",
  "key10": "5vDpr7XPbrpa9fyV72TKHt8AbBkNvgVmuiwmipfC843oGRdqX6SzvyYAaqrwkSP9J8P17T3PcziYzryyT1GCo4wJ",
  "key11": "625xo9eCNrqt7vzrM1KJhGai1X49pnvAsDjoMeTumaozoQj7hBZC19ZQzsefFpYzmNypgpWeHXreUhMTum2G6hTD",
  "key12": "4PxhwUuHYbuPgRELjXEBaT5HcFTCHpMu5jUpjuDthJJbMtQDUSyjrDYx2DaDXgDj8fhqfissD5ng54uLHyjeCCpg",
  "key13": "2kJHZHhYhLTruhyoaeh3SfViKmV11xjK3sJWKVF2836TQKDBcVBXpENZTqAS1APi5NRB3ji1dpfWrkhfDN2CsdX5",
  "key14": "ayFxQ6DBSBiu9oTpWf9At6WG4ACReVTzLXz2UPGoWBvVtqT9eiL64xUEHjQLLmfxR8N4qdaNoRfNouvzkkwP6AD",
  "key15": "3Xy1nmJ7t3Pfmg2nbP3bqd17u1R7J5WE5vBbM1CGFxD9PBKRsFgjN4qPKoUshWTfsr57jQrK5UZUmmdR7Sa2wKGg",
  "key16": "4jp15nyoDtgBCzmqbQ3exLPKzD2Zzu2Qs7sZg8ymMi7GwCM3HLTJ6impsSTSB5biB9xnVXJGTcwfLUc4k5ysJWBX",
  "key17": "2kskh3wayPmDSf5VkEV4mbpwpdtnzYTZYjscYpXuvidpCPVc1eF4AkZJ2r2yyP8fRKnjSgEKbD7hwwbyYDGztzGw",
  "key18": "2Z5bwAiqBt7vGKXMsHm8bJWhgwc8NWJwGr35rUUPoWg41abCHo1eQgsnJUzE1HZSCuuEcYagkbX5s5NMWyKyoVES",
  "key19": "mZTJtmzwYD66AbwPibwYo1ve5NhyGK1KPivZo8vEM8u11y6a2DnnF1qL54nUaw85XVc3zBoXKFp5iY4qmXWdipB",
  "key20": "4VBMMh57RSv775WXzgF4jVBq1JKrhaUhiZ9mLr3fVVW8FpMQLCDyDfkJ9HxyWHzdjbSxwk3Q8Uu6dTiiu6HUAmJx",
  "key21": "3m6c8kVNEvpvN3eEEQ36mB4rzP7qknkswEeFkLeohbiERiPQbo9bzPZFsRo8UsY27PdDruficQQMZiNWCkA8vae",
  "key22": "4dQWutRT3PJ43VVXKerZLqwuTZxWHhLYE97gvyDD1iDRJt8XQMy5pnyPhrcFHHPNdpgcGJfyuSs2kEm1bRGhBKYC",
  "key23": "62tL6tkS3UcB4TRmGT8gGi3V8BUoRrRQy5zaht7DV1qispwWJfz45FNU2PnMhEoRcqQjsQJJQmVKHqZY2jTHMt8f",
  "key24": "ygywMK2Tp42Q6gw8DiMBGQe2ds4gjt8ErkU5tkXAbi1tDVqbphkCdxaLCdycF81qKf6AvVU3cHEtvimaepurFu8",
  "key25": "22z3Bzrx4hfd9L4crr724h94Pd6mgm2mUXCjsgDd8NGe3srTQqAjPbt6JXjmkQTvW2bwfZuA3eppJCgiQFQjFqqU",
  "key26": "2HvHQ3jmyscJc31nCkQf7LqLyqFvUektLhRG7AZBb859p7dBmH2rYPBzMUa4Ng68SYRSc8zUxYw4QKJaPnpfY24V",
  "key27": "T2txNEy9SxawgxJa7gfAPVYUaLH7AJZTzFBx1rLQcsctJb1ZdjWVZiTRSUYbjYHR1F6WEnKvc5LaJe3SVKfswwC",
  "key28": "3bm4RrEgk9ieobn8qVPoRXqRorpfuVuniuWum4LXNEZLFzMQEiVx3q2Z9mGwnFbrtuZwyuRyUQSwvsLUvHQ1ZXmQ",
  "key29": "5nqjfQokV3SSgyaLCuYZJApQMrYkYcroP6mkjDAAfsSmWsQL4BvFuCbmw8UgzUEQiHj2Mgnk8dcf4BjMNv89zmGY",
  "key30": "5ebN3DG1pVzVwMTXjdod3JEfFbXZobps1D1pJr8kpEYALK6u3i9Dx9oUu6Mu89yoMqHM3TWBdaBzDQpE9pAkDgHH",
  "key31": "5brNuKJZom9UFoHELNe7WgTg1TPwM9CrYkUtdfrX7aGhozvJ4YeUDMLEY8dupgrLPX9423cRp4zsdKenJy2EmG39",
  "key32": "44YmCPBJ9MVdKDy94LJewiLRwKdrxNQbuRTTDh7LAdognfVChEwFTk3eomcGPxYELYbPBoV4VvyKviiaAR7kmLXW",
  "key33": "3aeX61XNvDwjnnpshLdFQnogsYNBcbvfjPyfCuNaBSMmZuhCKui6ZwhoUThyyTB8KfHsWBveE6DsZumSQim7giLU",
  "key34": "2gnQTgPPdg1X53xSzkEX6cjriFkqBRnj8jZCSfs14XZQ3Y25aUNfJwuemg1u73tF1kmfiVKxEnPoo5yZ1mmKYRKZ",
  "key35": "3aU3NRskvW1pYvGuSQ2s5b5C6juWCcVz5SwLkScxKH5jyXNYtjKA2iab1USRheZiD9oA5SDcqACUAg6ZCQW9Nx2W",
  "key36": "5qdqxrXJRL58rjNSD6cd3YGqt9AYx2HPXinaUND5n584G4dp5qBm8GTFsYVnw63x7ysKL4H2H66HsNMyba57dfho"
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
