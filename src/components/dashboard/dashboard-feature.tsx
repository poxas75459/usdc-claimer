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
    "2fg3JWvJR8oTbqoJo5TiEAxegB4hAChiBPk5W2YXWmE8xZC53c1CBM4aRVcMst5giUmsfAGoQhaeoEkkw3uHqgUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39EPejhqvQDKh7yLRtMzEPKb3JeZY4XtpwuoRfapsAC3DKX9j81iCSspsMoSnuxAiM7yfqn8nt3UoJhVUgASZbuL",
  "key1": "TQpdzv67MQJTyKmS7VcuT4TgNAm7R7AfPSNyYGSLcspNBJDJYebMj6rpvoDF6d31pHuBZPtD9GUvhNfoJFRgprp",
  "key2": "xCUiu4FPnpqqoZzEDpECgKn33MAcT6wHFtjtFQdbmxdSVZdTmFDAzyuownbEUeRJrGjBCm8KgB9xpXmEj9qaJG1",
  "key3": "37jGEWtvnuKNq36jCnfzKTNvhGJmdocNudKmt1CaAYKbH8zjLTfzVnt4nvixQeSWHqhTnpygzjj6fWNJeQdu1ger",
  "key4": "rD7r6xATZH4edBHZ5CvgmLJhTui1Qn15FbmXHLa3UwiLmihq6JUkrv81EWHn3N8NfPgdPLawwwgsQT5GKemJGsP",
  "key5": "5KZhvGDKD5nH3eyavmAyL5VGtGMZLB8MBKz3hshyqba8hdFWx9axxTUN7z2Fx1ywCVMxtC7t5vkKWiPcPVzr48PK",
  "key6": "4JusEPmzxBQ3tEKkEBPqPY9WSN5wJYxhGYqYHyC7ubnvsU3eZKCgXC9ZmPZjBD4CHUixRmpz33Zxs7HuJLFiQ8ed",
  "key7": "3NUmLLtyqkHm236X8cRu3WVmPpU7fUteFKbcstykJyAyZa17a83kecuvp2jaHMZDZyE7Fdbi7bsy2WzFgy3eLKNU",
  "key8": "62zVi1awyzXP8xb19iJ5pCVYvtJ7aLZCNxUK3nXwtcLEnW5LqjXh43hWmMnjXMnqyi7tccRdw3GkN3uPUx8y3aB1",
  "key9": "3w8M3JPbnJAXudq2c3Nn2CmUPxqVWMaaiss2oemRnSwnHzK3XbnELmr3gK7vPEXokep6DXNPwhmnLxyYtJzPW49H",
  "key10": "cmC2p9RtvR189sWWaiTqhxDS5JJATZCJ2ekoYdcc8LxV2REee1HyPqisndAnFT53QaGyZ4mfFdzNKrEP9qc9e2f",
  "key11": "5n5kMkwfDREAhD94sWMGjsTLtEeFaAzSCpTJ5QNuSCtYnJRTAWwu5jybPPRRbz3VzcvuawNy5jeHPG3jf6xRSibU",
  "key12": "4ojSDCFyku293Cc2KpiRE9F83jSQ119QMaHziTRkTJpcBSgkZ34WYC1Nymim2TknJvdMYSTVoitRah4JCeYQoSeW",
  "key13": "3wJpwmTYUEGpSYxJEafxuuinGvqLbBDoUV5By8QbNwaMDYXBHTeRK2F8dmU4mfwZzgUMsch4WEGL9a75Sq9HKSHn",
  "key14": "5RDi2R8ybbBCgf6QqTejqKBF5c2C7Xyp6Nub8QLFnwXjPTd2B6JKdpftnvtGib5dVSSTUThZvNVBtGhfLK4Pa6Gz",
  "key15": "5B7Bp4kuwfGxAPHsignLChM3nS2Mb7pfMP8pFEC9gRDSTCyTFR2XvGNtHnWh8pmMK7pBKRoGjiAYnwocLZ1fKoVk",
  "key16": "3A2AoQQ1rwb99AGqK6YRojmoAK9Bjhgkkf8n4GaxqTTF3HevgCNSNKyvJ9DdNnjx59WiHqnxBdiwpVe5bUbw1KFp",
  "key17": "5vYgW5yaboPyuLVi4psVdAP3CDdR432th2LkDvbXNomF673sdDExwdCGhPYRQRAeSjNoELdeN7aHpEJGEXjtz4vp",
  "key18": "4uGezceAhWw9iXmTxGwdoLcRH45Bi399FED7VktfAtJkbGzrW4r3oGp9BioL4xB6vtut7A96WdpzsKqcSzoQQoWv",
  "key19": "2TSd9FaUDKkEcYfW373oU8288uDxS14RhiXfiEJzYAUg8BHrgSR1BYmNG6zQPs5GT2bBDfmX2Vb9mowUDj227x7S",
  "key20": "NQCJk8w7FUDr3McAzGvtV9YsbFvDsKUqr4i5y5gkWwnaMQWz9oLzUXjK2VbcQX6849kLdixfEa3abhst1AVwd8R",
  "key21": "3BtCY9pkaPQoCEuf9o3xgPNbtrna5XWUB7cRhc9STJGN4teM6aZJCTeuBAAjow8yGAauwvoLL8qxEJXTW6FQcRUF",
  "key22": "3uzB5TPGbCH84mG47Cw6EY441Z3WSTGxKvFRHLMBzZxraRUxBwEmzubAhFiqxgpWsELtaCmK7hqDshbSYrZkmEgP",
  "key23": "5inM5NpL3oe68pcWBBDL7tJviwMqQtybptvkTSY8qPvYsK4ZPZFKoTmySrDqYC3x8n17UhmDnxregNQE7msrMECR",
  "key24": "5FAKnmbKYe8e2BwQCfhKX6bTujvPEPPQ1sYHpRrpS9bg2pwwKL3NGZyrnUdxDu6dRsnmByKoX7z5JNWbLg4Lht2S",
  "key25": "61c5oGrLXbqbu7DZVdKtgSmMcjRqLUf2B3taWTqvBdr4MKbQtGS42mYdTUniZg3WUX31ocGYia4XiAKTh6dtnhkW",
  "key26": "23ptT2dXxV2iStcoCpfz6ik8ziDwVSqNakwktUMBx89KugKAqdNhb1cGDuQtJmoMWRurz8FhFEPMiAZnyfHmQHy1",
  "key27": "2gJJWa6atGtj7q7TfJGTEqnDu6NoDrHBYDPwURV8Ju8i41txW1JtXaj2XmdsCtLNjJM4k5idjWUSGfFSsSRnL5wm",
  "key28": "2J23fmbCCv6AJyfziaatuyjPTcatsQXj2TZokZAggNyVAPgPbzGmmeqE15yHC1kPDdY7zwsvFrh4VrTqMmmdwMuF",
  "key29": "s7ZT7KgiWHJjG2tAurme4ZTWkoqoHeLBU8DshLc6K3NDvJAnBMbGmxPv2iUqLZVFL8Rym5uGwHLFga3tgKyjh7u",
  "key30": "3fqKHWhfLRqh9fNDTJ8snPVt4j6MDCU2W9fCifZueCojWxoy4dNaGzF29qKY5MvJuNuMHq6FJ9bx98T8V423oBdE",
  "key31": "5zS6nVRDUaShqnYJrMDjYRtd4LwbqY224KrkbyWoj6jvTsrHo82beswgUWmFSE7SjNiVjQ6NboyjfFqLhehq6Dou",
  "key32": "5fBLwhrNDrk78J27ipKbAs9S6W5BFgcg36szduS9dWoycqqh7V1wiGvNhZ57M1gRCMctLF9CBoKMvYp4t9JsYviv",
  "key33": "4NeXp1azLhBzTxTiQUeCWAoHiGUMECCwrTcZjjXGVfyiRDxWFS1WfhHBGcYsED8CW9Fr6bxSgMVUcz27eeZbPLZR",
  "key34": "2z9PT3skF3braF9g5AKnbA1wPrNeYMmYX69tkcSte9J7QeZpJQHKgTNRcQwx3mtS6sHgAKTN9YN3ouTf961mrKBJ",
  "key35": "5hUyEAyQ6yXtbrnK6K51u6HmMUdiZRJQ66zZWdunttLpHEtWeTpAt3cXb6ymfpF1KPR4ggZmyNwYkcGNRf7ViYjp"
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
