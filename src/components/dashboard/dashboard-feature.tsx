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
    "62oazJYr1epnfjkyPXF8CQiYazYrwdiGXiwQrMwV2PCz1L1amEjvVfHWdszCPasqsQ5poxwPo7smTyF8CT6w5XQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEuDoJevosV5hyhoUj6662thvA4QFNY9xqC1ifeTA1Ci3bntdjCC22qFXMCf6hpejss2pRF7JdF7NmfusdYyPz8",
  "key1": "38FjSwR4v7PQfM8jVWH4GKjbdeS4o3u2VuMxh4rAfz1LHvEacBXLRAtSfFupMjqFD7V2GBWRUroTwhSUYYi7Vow1",
  "key2": "5SF5aiuojT2AqJ6AbYNg8Rn1fgXZQQKG7EuhrnL3PwcKuiyLf9WbVWS2QLtuR4XZ7qVVCcmWn8cDrwZC4d15KEk5",
  "key3": "429SgBN9WDx6PXiJEVGRt89Cp45yHk1q1E2RBLGGEeEQUqnCWMj3dFc6rnzBoWegumKJoRp2anh3JTqFr7Yw5YrN",
  "key4": "5mEHJfjB468wzG2FMWGZnNUeAoUksiBVy98Q6NdkV4pk8qp8J9JRwTWoiMDdWoWMTpgDHJvdfGWH8mAMSk4WpTs",
  "key5": "4RUFbCo9udoYMbu6gz6gF7EJJ8CjiAExaTsZbJqAdAsKd39LLMkdCH4ncnSKadiDkf6EGcakeqe92QfPnebpmE7u",
  "key6": "4mQfaiarDCMNiqEceGPCDsNhbPLBvi4TggYZtRGHfJwqkpD2MGuKCThsq2mL3FMuVAFe5o33bo39JxRwGremF86o",
  "key7": "5Wma4JQJ9nXPbkAkP8ryU1t1gxrnHp8CMbxw3Lx2orzY8By3Xe8hUef694e1ETkcbn1ov7mCySPfyUE7XkkgVxnZ",
  "key8": "1ZWmpXruRcFcM2EgFp3MBh3ZT66YxxTojzu4HMsVKcTnKzpp9FuH2vJybKpWKdGq3NjSqEpmh4TcLK28PCmbErx",
  "key9": "5pnqdi9z9bMp8fftk7vassThg1fy9ttKE5CdDxHRicpJSmrjEhhEXV61JvEcjxHesxoVkyHvtJ7ZmYX2Yvz6jMBS",
  "key10": "5iRh8gyzFvQvz55n34Hi1udBX6sKxywMoVCCXN8SiWc1jCxCZMBbBfahxCtZQkSejHBrrY3xo4dwBd9xFiw6vDVW",
  "key11": "5SBXc5jon2bu2NNW96hsLrBszpHScqYkfAzs1VssSF6rHMTDqucV8SCfcRdrQETtVGHXAjyqMoj69NXhxGL1Ni7n",
  "key12": "3KGrQpJmMMuvary9Y9HCm63ahovuveJsw5MyyYUXtX7xbt99ip2bzsmWfUb5EeDqoqeKPFFmCYZs2XaN7K4zeLS",
  "key13": "2Ji4ek5J34z8AinWtkQkWj6WTiEiyqVstqBXTzCfptjtFQMcEh4nkXXK3d95BtJCmKGqhpgf5MhCyUChgDF3bAPF",
  "key14": "4wuU7SuaTqvhp8vopZNTYnuckvMqqdTLmzZ1JR5dnAe2jzuvRbzvEwwjoAt2sxFcxDPbXZK8618Eoi8dr6DyKf4a",
  "key15": "5mQm9u7WSzV1DmyR9otryvmc49RVjxDM4tW7f9PZ24ESbNrKZVE4vDR57ULiYzLAco7rAPp1yyDHwd7qjBba2YEL",
  "key16": "5Wikvj9ikRVE7Y6CLL1kWEDre7UFMUdNhZUu8ZuaruPuHYSkLf5FnasVWmHDuab228zvE5j9Cx3pn2jCEmFyLFb1",
  "key17": "3j36kbhZaAQmokzZHcMXbmy9BKeKstrojwrMzYzqUGxKA4UinFUkwnnL6CeqWm4bCcZvGbNyjHDFU9q7KtaN6jGi",
  "key18": "2WkC6gcHiwRX3B6KAiahH75ZKPtEMrUgt4xWFTnNnKEySH5Fu4zSfT7vjpbPiPXg3yPnoKrtHXHMQxSnKsR24X6N",
  "key19": "36ZwDTY47szPPgRH7NrkxcoiFnzGCr78pj25CDFh6qMnpxKbTZyixczmhjHTvG96EiZoihyKwWETEJ61uCzMkf4p",
  "key20": "3eeM8pnc3EvR1dArHyRKeh7iyu2NH6tBDQMG5J8f9eyiqTeY5znUmqZZZb7AAjy8Gt1AHBjhhjehrUuGTTquwCtq",
  "key21": "2R6LKv7L5Z9SqZCQnh5kLaYvfVWvqbHTK3xj9eXWpD22CoumaB8nqJdXDPe31MRh31LerTHrExUu12T53DMHeCkk",
  "key22": "1Nc34bpaJ9NAPkoatFu2HVUEYdpvqWBs1Cdxxetp8vNqWkCnV4hx91fNWkxvg217WYPEWGzitQFvRZJ4JXhZVMz",
  "key23": "62boiS59wqMWpPvd4qSJtPFmYCCyHLMB6rXkPUHDqQJXpmJ9dHK92hUvN2XBWYps8aEkctnX7LK6uBZuzBdmt2kW",
  "key24": "2VmDeMoEEx3cyAd6gNANQoJJVTMcaBcQ8oPcfuQyE6TTsAdnvDDYtMrDvaJUV7D93LiDGhnwGZZT4dX47uks139J",
  "key25": "5XZe9axLiBu6P8Fu28yPHHUraZspm3NBXF1b2ye23cUsHMM4HSycQeDzwUJEUFvARGZ4w92YhPoZMvrRFogJYxR7",
  "key26": "5WdTa4FELCsYce4dj53JTnHeDSZGQtF1P1K3dvAaWDnUiT3rR3p6hR8f6qsjTNuaQWQg34zJFJYRRGqaUz74Nrmj",
  "key27": "zPtcjAA446iw8EmTx4XzpvPobwUUPCn7pU6qHGQsy9wR65X1qjK1eq6hisnEBvRSEShPeifhvkHHF2a6pgki4Du",
  "key28": "3CiX5RtV3oDAjzXq5RQNJtuJioMDSqtvGby1xbt5b9iAzKQMEQKDPbdecKA1nj12rbaDaMmrrCrAPXBXNqN1v6gi",
  "key29": "2Ru3mGwKbd5XqMSnhdiNCqvpsRQqNC9MuEk4oqbzXjMvKxxGmZuNXV4ew6w4bugNiG9NSCnQ1UozwoXnCihk8wRU",
  "key30": "5GLZsUvhqfAWf42R4voKG1N4HMEp4EjY9KtjvGJHFjfvBWxdkxBKrrcPKJRKpBavWwPDd2mtVW52d3w2uptmuNKS",
  "key31": "5ugwuBQs6uCiD1RXW8yJDkA2htq3uaXfeLmjwBvjgyR42JKN7T7bbK2zAtC9oLAKkLsbkCHEqeWsZgiTHCpRw7Js",
  "key32": "xfWwWJaoXrhJYcLTFgn9apqX7P6JVUDH9kXaXTfJUcrwk48G12jXXSNdsDn6cEKaWAc3AH41Utjf1Lz2EzncWvV",
  "key33": "9u7tzNZqB1QfH4HoJxXqwuNK64CHWfMJEWGcov9mjQxAhbqvjXHMwfZSXcZMF7MpxM9bQxyFtdbcpSCbnxATmYT",
  "key34": "3p3ZXHjrGckxnGQ83R9oKTDouTZmuPNjuVzDY3qXqATytAfowGKSfw5YS311NqktNHu3TNwUFR4ewGPXgUov19cC",
  "key35": "2yMPx9Z8G6RsqEM122MTWasEFw7P5eR1Lcgukf8oujwNdJCQ1ENHjyMTvE2bEstxbDTuvgxUeTTHwg5aFpjLuywp",
  "key36": "4iTTSCdX4f3wk3RVE91tc1w9q1FSsFzUNgE9ZruKHfBbkK7theffp75UGPmQp8Lm3w1tB6ZdnfEgJtMjUF52Enyz",
  "key37": "2mZABd3vYEwGbeyhPEiaJ64QZ7nzS5frbZawxJvNGZAtuks2czUyKA5N7VSVuXByxWEHHtjNUovaD8p9F2oTERit",
  "key38": "5MqpNyHbwTGmiMrenAJ61bVo8eXHDyruuvTtgF3Q5Sj3PzSjCsF1F375yifEXfcq6WUWW334LhohGnmu5UMJFC5h",
  "key39": "JG4m7VQjDNgmNDj1mG4RrHiVvGxfhEoMweTqwhUPxUs1bhpezdxLy7N2mCNtRPNUQCgMYf84av4htshFgL2GnGY",
  "key40": "3bcs17RT2GxNQMaVyQkRCtw2g8KshMyzU4MhGcV2BYRnTgo5RMYPE5XaigPD4u5khuvVYcRSA6tdYUDXvG4drcjy",
  "key41": "2ueagBbQMynAF2cLfsfCmHZ2h1JTxCmCCQXdNnuYwaA9VU12oBqdHa87jLmhwQCXUgdtjhs953sAjtpVTzciTNxK",
  "key42": "4ujpzbwPT93fZ2X15r9CLCiBCBEDndLKH6CPPrRnC5HxmiPGm2mcoR2Ht1ajJLXsCvNYc2H3dfEfd6BbLCRdL6FL",
  "key43": "3inAkb4wRqKGLMYXFqVBLB3T8oQ6jZ4USHZBDSzrPeNopKLPBuWmMRRNx7uSAaW99YS5JFxo94uge46mqL3UNRtt",
  "key44": "4qnC6THFVsW2qm7CYajWkqNYaWjoEqGcGw6JUSSTNL2ehULrtvJhBv5ZrJVDAtdnKqnZy8ScgojP4GfeFmNmN4oK",
  "key45": "v9Usc3Eb8B2BgDy8QAr7C4R23AgMWv5shHrteqJnyodhbjM5N7oN54xWqgi53CLo2unnsSfMEN8vYPbMaGkKSWL",
  "key46": "4tLSwip1pwx9ywe9Sd7Hv3iRZERVYWMHrFVYKQAmx7TqpYT48k2VXUgga2WqDXhLjp6UbxVuwettS2ygUWw222UX"
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
