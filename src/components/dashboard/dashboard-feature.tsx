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
    "5cxHvF1WarAboq5L8cfati7QxFDaSVqbyVv2bLYQVTc9AhnvXGgHvAbSeRN9CSYsHMcQHLkvZ5gCpTb5LtU6SUtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sEAQ1gDknMUjivre8AmmCUKpx15dNg7XazdgT89pTUPcWcycobQnT4wHDJZV3wMZt8T41bCrU65koixpM4eKiXJ",
  "key1": "3j89Mst4sdFVyCt3gdiCQPLLHcPZ8yRGo5bEKWnf8CYfKM4NPLvdCmnP5tjc4NcidJta4J9H9CFdZNp58NumUZ8J",
  "key2": "5VFmTv7idA2ys6UqfvPoZRGxcNUJrpowY78nmeDMCB2VrKwFUyrZG9pZu7sbYeXJ4rUW8h7JmohFf1THU3w2jsfX",
  "key3": "3tsu4YiGv6DVxuLkoFdnXpKUh5vFMxX3oR8RP2QKhnWWBceLNDQMcaG5G4MFsH9yvekptPFJihd2MmXHuAySvDCk",
  "key4": "65RjdacHXjwMeL6Hzv8voYRfPGendyqcSs4VgKttRjh4UHSKSTY6eaMgAqBpK8Ryy9cQa3BadYcdsCsNLDExWaaU",
  "key5": "3M164pfKmNqnzCqZVudMG6UYCJCwPK5A1cch5WqgRca95ft5AnJz9ujzbwDvrTPPqW9jG9ooBc7XA4ZqLyssM4dm",
  "key6": "2ehwrdaqfDFf7zVSzhdUMGn3KpmMywdiLLcXveuhyYa6wQd3JWgmtngbLXk7MS27cwHyH3T9HhBHEWXCJqioNmf",
  "key7": "4TWnCzr1aFCntnTQApsTbMsu9pqfiqSCgHnwR1N2iEM2abjFdBmjxDzdWFhrbUEwj1RaPaAphLdyfTUUYMgaESWg",
  "key8": "34x8MJMDnXda1d6weAtjfQTff2gh4vo4jpETMSuUoeAKHMbRDs7WPdUP9sLg4C52o5yc2aG4XZG6VFC4SH9XuWUo",
  "key9": "29RDz2hopcR6r9vbxZ7cfUyBhPKjAwhibbS2msxbbfqo4T61eAFrCwAKBas9MRQXbDeWzxxV6wdJN9gcNudzzXtw",
  "key10": "5A5SqPKS4BhacNShiB2d5iNWREBGqAfoQeSon1Pf161ftVvyy66fVAXTfCSGVQPJDV2hGR53yjNxc5bbJ7bcRFR2",
  "key11": "2n7SPj9ikfoAyHsB4x5Bo6rfEmsPoBUH22Xh8jvQyQvZf1mickLPUJKzWEeUduX3Xb4QaMDeA2Twue6VALfrBdSb",
  "key12": "47tPbpf2odiLwfg5scqYMJGYLzz9RWHhDNwre3j5ur5q4ZZHdiXYHYxqg9m6yA8eeqHZpQBSeHXwknzLE9XpywTh",
  "key13": "3HvxLfV1fsau4ReQo3uNU7ktPkjSbfU5QNiSo54faY3qvPBny1Qj243L81LRdisWU1Lxrka2GP73eXrm3WGd4PK2",
  "key14": "niHyMc59nJuHt4eMZokz9H2PYZ2dVKyK3hNwMBSfqppv8eEBpP9As77VoEYAsE59jDqvaivmtrZX8TeqWyrew82",
  "key15": "35fiup8jrDBgWXTSZb9N2xnVc1BuhDbkQsnh8KgoGDtS1ye3te3Aom5bNF8EmtFHPgZefJoaimLDC6mhim2nZHwB",
  "key16": "2jB7ZubzEMtdUbMPkMN8mcjNNeiN976SSzuodm8oYtahobh1KetKeNXmSTK5aEPuEwt7wmcf9VKcfRfCwLgygUvW",
  "key17": "5E64mxVaS8mT7PjymQNAcyitLjQ8Tb9i4XqMaH4T5nnck7n7tC1bVXKNezZkV8b2aQGbDswdMy5ERsR2ZXVxsMJH",
  "key18": "zsrB4EkkoFyDjMxvgduk7kbkCGogXV9egBmNB8p3EiZ3byxPCyTofK32XNDAYuUW7n9nHefnRfCy5eXN59m81p3",
  "key19": "3eiYtsSMu7qdU7SxDHKYz8w43XJTsB9zB5oGVjYAzAo6TSZJw5GuEsK9e1JRiaz6pwthbt6ojwf2TeMsAffQLxtM",
  "key20": "R6e8k3fRGFwn2J6NheFe8tjQhiVmhNiJ6sfLW4YnpNaRRhqYWUiMLuU53s9RdQ9YwJbLWeYRZhLrMo5HstknZ2a",
  "key21": "3Rjy11Jpb84rANqsJn6htLwYFvW75HAVNRxE82xqhBN4fNNYNXBcZT5hexU8YchLoKqubdRTBxjWADfuimK97QZV",
  "key22": "4Lc9aN4TtfeAoAFS2neXtyLBErSoC85d7xtNxzdmsEUrjf9wKMBAUiW37AnWZePujdRvs9YJ3SvvG3imd9h8rVwL",
  "key23": "7AwTiP7yaFdjyis5ZBYsHtvgP6wZv4TiWDRufpCUVskCxyvGHyS1mQkwxXPxDG5WYDeiQSxXfcmzwcAwX9qc6S9",
  "key24": "48h21Scg71MkWWyk6RUAMi3hXSywJdLnd2pJVUaVtSGkdxDR7uq8izsB6SSiZtDxJrr5tsSc6BFvrdZwjEhYmPXn",
  "key25": "RXmLq1GECAo56CKWCDRKQYHciw5ZThhnkDTkfGtcFKDiMhAsADfGoJibT4r9vkbmynJvYUMnbXsAnMTBXZsAazA",
  "key26": "vh232TxUVsEhsCxaFWH6ctxNAJKFMJ7z9o7EvG88wDs6RLhf8MQukA7EChScoTXqHcqbVjUtzL7h6sLd53pDXxW",
  "key27": "5bG4W88EWnaHcuaMrnGwkomdHN2jEzRzC332CPSdKAFvuAR8ummMsddVSEFVUQMFxV48REJk955hzSFq1zfHQWJL",
  "key28": "HDTcuzCgkJPB6ag791JMrtju4PLngeQ8xREqo8pEzQv9GFFxQXYWWBuzocf5KaE2YcgvZ19WsAL5MQpoVmf4xst",
  "key29": "6RPxhfSSPBybVrPdbj1zciimEGBgWFRSaH4x1vb5XLpVjzKjearihN2nwMiXY8n9mM5JoynSFLjWQh8B96VC1WL",
  "key30": "2VimsSAnkwau7wgkR91S4jhZkriUQE7Gm9XRT9HYc2PeXrkCWQFSSVc6oishNSMBHqTBj2uzUdHEhwk9qt6uBcYm",
  "key31": "4EJUy7yhsyzGif9N6gGGspA8N1SQMDdBZnjJ4YWvDKRRbh567wXUk4hf9bv4nbHEeJfKvxLj8W8iJ6vfcuLhJLL1",
  "key32": "4kXaSPJxhQFMN2C5Pnu6gCSGuEUhrcCFZ354rpDLshcuXKghNLzeGsSWsanCabobJMbA2uwttYcs8T2ZADGJH5TA",
  "key33": "2Q3L3NC5aEkbTPHbEEtjpVU3z5ZfXxN6KWc1GcYuyVTB4oAKVfbMF6DLqKpugjfiPUStvp3UrR3DEsSCfptZmLex",
  "key34": "5DmE3UrgebvByLUmeJQy8MRf1XCqTmmVRjFqAdQJFt4mR4QNzG2mrHBmBmsfvtoMX8sbaG7VRwQYnwmXs6XzWWZ8",
  "key35": "2ZpTS9KFcbNikkQiojhEyMSpn6q9DX7ifpiikfHHgEDnAuy1vwyd2UUYEBHfEj5p4w72ZMVeTNq9QDj8WcaeYMmW",
  "key36": "5HDXxBtoNSTw2tAFiYMZPmmNVg7wpBCyfKGA8Ggf1qDkur6W2rfU1cvXE46FKR3rmJnq1Ey6ZWX9uk1LV2stQwAa",
  "key37": "2cFwKoXkeWidx9NtJZgZ2KwSxNQ33q8FfXLn3XKm1V51AoCEpH8iaVGWC4EmZVzfmUNtUBENpzDjSNaLVF3jc3zL",
  "key38": "5iAfuSXszoG3NB56qFNzdLrEgzzdYtkaMYNpKPnSXAF673Ku5gboxNcZMZGdMVDDUDLZXRuJnU3nE21ZQ6cW6dN",
  "key39": "4VUy7TQbo77DWaN84GQoB22M1uv7jVFwcga6uu9ZwB2Q9KCZJ8C79VJm6DTaq4Vji4cPx5t3wRZwYfgLDj1aVJaN",
  "key40": "52QwVkdLd3ZsNWWbEKzhmaA4TMU4cghqAyqddsz4SG3HbmNMnnkQDRCuVfnCF1xX6qbNcGMLkNUr1cNDpUSPcUVr",
  "key41": "2Ujy37tLrVcyyEmamHg1XMgJtzfXW9C9EVCouU5ahXPshR78vAAM4LWTVTKeQfeNXd54eKrpEL3EfxgRvx4RiLFu",
  "key42": "4xzbHK1fjj4nWMBW7Un2WS3faqfzyxdQ6Acm8zMGh3mGw7kyV6bKh3QVoGAXwdjJwiQXrdkCYcJnCC1R2rEMrqkW",
  "key43": "2RJXCSk9m1Ejj3LHeEAA62awSL9UXERL5tKUa5haFY2sepaNLG2o3PvP9Kwdx2zTjFsLFLGRKhWCUGWhGqwiajMN",
  "key44": "39aJWdqHki76xTQdQNnKgowUJpPwWwM2zDJ1jMieryQe76sTdrN2dJ8rPE1RUbnY9w71qBaKgkFpejKhq4isADMD",
  "key45": "8EosUvJJSrFJtqcZ7H5xBZgKUJGXpnMDCMvfq58Dc7Q3Ro32cipt3rdKz5XpGbQqMr8WRvU2ATzNqp8Jb329BNB",
  "key46": "4HjAsirSogUbxu56qz4y1uGCHEbwnHV4gs5djkm6CGDjAhV3yYp7fBSKNUQNx2Tdrd6SzCWY1NqKLkNwGxv78CAc",
  "key47": "4xG9hpKn39cnRnFQk7h1hRsKKNEESuuHwJFkF9f1T6YSB2v8Ku3gERRnMHp2ynMC1UAhzZf3UYRFrAp6S8m6pi1w"
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
