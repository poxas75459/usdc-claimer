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
    "3GftngsS38RN8gTEXAYxWWpb4AR4eS1VMbrkDfHM73MzFQ4AwvPP7FmffJZTRHJFYDgKaVB3n5QCtzqzLbLe5eRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrcLpW9uqSwQJBoiA2LQ6Fh5X7w74x8KVZNuRpK4nF5ACiivhQMsTA2t5safefCEq6d3zZhppDTRU3MqupctL4u",
  "key1": "3EnZwT4RhvoBAzYPdbV3XgbNeazunrLdXBZz3upnq5TbCdoAbom4SGS6YtF6pQWVQD2Gi4a89Gp85eA23ZxZLqji",
  "key2": "Mj9Fjs4Dm9B1xnEGsLG7ef3Tcep61dpY6fS9mbA5y4Wn7ZfxCjKvFGkrvA1U37m5BbkFAzAys3CRxBqQGA8LjUi",
  "key3": "5V6x8o5EwiuQRebRJHoZkEkC54qXKM45fPGAo65ZiwFJHZaAf9FzCqdFDyw6PJGKfAkdA3GLeD8FwYw6DgbSmA1X",
  "key4": "6Dt15hUdRsNm9FG63pe2EfGEzecUzCDYqLP3L1g5vkR7vP2rwf5ypLJpMh5biWR9XihYjCjZ6StSay7LN6Wnfw1",
  "key5": "2wauBMrAXCpZfwp4D8WdGkSNtAfuo1f15CDJymaEh8NnZGg3WACKZBEFLhHk1DoSPse64vrYsawDNDgdjZyNxHDn",
  "key6": "5NYjHNXL4AELAW7Q5pBrGGSvSrgpthmaHDt8JPnpX1oQzS1zzkzyvr58ZAbqn7UwDT1rR4UyyKrSRYkLRy8FuY5a",
  "key7": "DVUkMcGahyTBDBuXjvieN6pujGu6JSXggFvj88XQGieTkjB5cprk8px2LxuEvffdxGvMG3oGNwhUigZD5ug49ND",
  "key8": "42sy9yAvshg3QcWREHBDhaMjSPaJ2gv8N88aXifiszi91HSKv9jpPttChMPHWyTpZVRKFD7Eag9Z6KGBunXt2gir",
  "key9": "4nC8akHSWwwsKbT3dB4zYHo5eYTY4bRnunMM8VGDQtfzpHTiPmeFA84EM9shXt9o7AzcJckydRAwRq8vrxk41Xx7",
  "key10": "5yyUR5oJpuRcYkbNQN3LX6hxWchnNkCJXL1UgcaJzYKqWnbW5xiyuLFx81c2SDp4yQfP1j45hrwACg769JAtfLpP",
  "key11": "2nipSXQmMkoKTyyf4wpmQUxEJxeNxkVEWDVvdJPXPF1WR6c4VxL1hFRLufVByWJgKi9wBiXRRHYRYRsCFPnfqxsf",
  "key12": "5ipQbcjoiuyysxmzkE6XjnSiJ1oTL2iNXJxNrrAzAuY6TqWyj5grkBnxRrwcGbozqcSoUpDeauy7uqHdqiajggtR",
  "key13": "3urgFHkA6FX25SAPXyK186n94E3WhwNs7kkngXiVrVXmAzYDsy3fhwZodTtB38DS2jcDSgGaVfwxP1Re9sG6MbUF",
  "key14": "2xRp5ZEVSuE872UNij85ysJ8F97meyLcEY5EWVTjS2Td5WVBjH5tRLQXx9v83SERAZdS5ZKLNC7uQLVrpxb1pxDd",
  "key15": "JBHJfunRCmR3cipkNqERTCzQdCeKtLwU7WtVp2BaXoMbfZUqyrTyWZFF3i9f5LKm76UG4GfaKw1mBirCMEgtsdv",
  "key16": "5z42Rh3fnT993HrB8nvMZJnWK8wDsKcaSnaddbySZMSmmAmSBvWyTZZ9LfA8zScW4VNhf4yD253HERznGHER5iuC",
  "key17": "2XcmM4RBdPpwHjaGbo8erA6amq54FggV771Nk46mqKrsgJM2SYuSjgiTumSfziL8RdG8DMbaRQp6ZhFXM3DWAEKw",
  "key18": "j9RNHhx5k4Gc98QhBtTKLFdTNcCCHugX3Wi9zfFwmXXnURhCWmn5G8dds9Jz1FRUjWNwT58dP14E9dhrrvoK6wp",
  "key19": "3ps8o26rRK9KjtntTaKxPG95kxbazPSg258EhRoaxUGo1mybsMDJCG8K5r6X4PHgobKaR1BQ9eNPRqUnXKzzkRL5",
  "key20": "2qN1BABgVituiyFJUHoWwqiSQHU5QcEahhVaoV8nBTdNrYLyqfCt7RY1PK6yUgGKXiQBUh3axbiHZYUNpspGy3v",
  "key21": "3iP744BCr1sbBZ5QFta5LRPGHCSfBiHi1X39fJiAu1HGs4BL7kYUjLZqy3SCaV3c7ShZnesiWashCCzDVHgVYZbi",
  "key22": "33L75HxbjBEQbZLi8Kvu1hD3CY2vvxmCQdPu63nmAK42vjeHsFviS7F2Nxu7MwGeeQaxQFsiKJjYQgW3EE7DoMYC",
  "key23": "3JuALN5yiB6r17oKk9H3uPmXSjMv8YDUcsfHvL7Mqyud6ZC9PDLwR8TMnksPyrxprRfZupxJL6nfQeZBh19fuHFA",
  "key24": "2jBhGNsakqYgub1TUnG9bqVNWxjiYaWNg4ygRSnnGZDgWMKzkmD35kfx3hcV9FhcBFvfnQqC6KYJn1CuGe7L8q2S",
  "key25": "HnLTHLMgy2Ljp4u9vk9rLsg9gLgMBsHyVg6jvnAFgHwTM1ay4pYB4wh3wgZP2zcpX9UuRX3zK3CH8diqtWyXdLn",
  "key26": "3iT6VgtbdirsE53G5k5skbwTTrzSa8wZxPSbjhy1KYC1SHC3U8rCYPqaZ9RT6gRBs1NxCKGtsy4M69W41MDrwrEe",
  "key27": "3qTMwG8tkZ8yBh33KJSPwv9njT86CFQLRUJdeWxb53amoa9PMneXW9XqAi5aECSdw76F8hHAZtfNxHPjU1sz5LMv",
  "key28": "3T6hV8SNqqwKRS2kDBQUqMPXtVhWvTfSL2Vo7oyt8kg7uBiAHSAsNm1RsEiAXXfyv4DKDSK42DZQtUdwCp22xiwB",
  "key29": "5w4cwGiGeHjAGqYiid7pdipFLEXtkW1doCfmAHaJ6JWZYfk4uejX8VRrVEpLxbrLDW1bpppfeKfRWQF8HsU2zdGs",
  "key30": "36vrXxxDwW6EGYopWd4VKhX2G8chKyYTiQR8GBcupYmY5KKa2tEBWLsZ6pJH7a1jtuRAxShYqpGcifYVVk8NavAd",
  "key31": "3993mZK6zwUY68A3NWFvoVqwSdqnjwbhGBs3H8eL2akzpW9phhZgA5EhTfwj6nZsTomkGwi5JzpdNWnkGd2R8ww2",
  "key32": "4Ham9M8mJh8xGrkf8dnT5CQwMnv8o1Mf6uRUHbBsKrCVu8HMfkRsTkAiYx8pamevHS4xfa99QiagsQ1nGEBdBqyQ",
  "key33": "5tLvMarrDxZ4W7WAtZXwmpdV7cc4jsvyiZvTd1JXY8UA3DzibRt7McPQprWjagziNisHvjbmQ8DfZbGFFfVgDsae",
  "key34": "3RTzyCC6F9NezsSyu8VPKZ6GdoRTvnW4S2zw3225bcjhZBaNaTPqdrchPZvUUrb2euWq1XkTYm39WbqCaHmQVuK7",
  "key35": "bYpBWTthoHJucPNyJRT5dmFas1UJvpX4yMaSuhvK8RwbMxicdUiUVrY4F8tvLJMZ3AJyKrBbribGTWDgx8KQ129",
  "key36": "4ERosiePVUB8DjP8dHb7vgG3nW7c8Ng8gD4CmCsWXorbrHJxbE9dNYD7XU1wJq3Tn4gjzovEnsXSkPrErq3nFbq1",
  "key37": "5NVdn9QBqiriMrYJEMKF9PkqwnS13TMqe3cU4SK7Aexjjirq8L84wbFzcvA2WL3Hj2ctKYH6zxfBSuVyxMFmFxJh",
  "key38": "3qBnKUdmiXF3KKM6do7RC96xGTjeLKV6mRksJer85qFuyeeAkq6r2KSds3ZmuLaUGkNfGhfe89ue7W3VCrNpHJNW",
  "key39": "6Tr6ZVBX27aq8vu1i81MCXAemVu2JNMtMoJUqnF7dRmYB1AyFZdT4dSK8JTWCuwzkqKg8QC6y5KiQNn1tkp35mh",
  "key40": "2hpTaMrFvLDtAF7AB5wSqnQUkhCbKT4sv9VH7nu8ix1w8b2Dm4PjJufenDR5qApDr5Vtwh7gd7RRTRauJs5N36bD"
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
