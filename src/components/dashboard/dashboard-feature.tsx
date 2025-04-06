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
    "5V21GQwRwhATNRmAxfuPmJWx4ShB7dgiB3pAcfzUmu2hLnpav133TSpAa1ecMqkJo9gkbxQGXs5GGcSCoXjEqUz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdaSCYdjZoVuD1t1zha9EmickuJojJtds2GXCBiAnMMHL3GNiVzfJpfoxpPJ3bnJtdNUzSPt6o9ErL3vzE3Mukr",
  "key1": "3oDt1mUL7Bhz5jQetimAqBZjpNr12jiX5AHriZouVGNAddRWLVWmyeQtDV2GJ65b23RaTzJijsR1AstZxTx1DKjq",
  "key2": "2vdkAnek2GgoQbT58fiLx8G7yQpvUMnyLyPQteHJXWX8MF8SU3dqsBGegFuvQhGDFg98Gv6PndtMTfxDCUBUPMhX",
  "key3": "4HLghkgTiRR3M73Dcz485hKbDpsVv8rNSNWenCRBf3JjB4taqZzGzdt7XCR6UwHgyHscjiDqGD3EpYNMEGsE2N4F",
  "key4": "4rDVbbJ3LuzEbz6ie6dvoML7nqbS1EpYmzpyfat12STFAHeHZKMAvrEb8H3EoEqKH8uDjQzz2Myfnbo3bxCcr4QJ",
  "key5": "4qd3umFBJ8ucNy5KhSxfXdbYMMWhicAQuD7RNZpc1BXy9k7xzvDuVqtNYuoyswtx75N5ZvCqd9DiRyRDCYY5NUHP",
  "key6": "2s2XRVMpvAVfTYyruq1sbwSZGqtzUEfJoMFVVfdy9aspUUukmAXJZLBQny2Z5zhHc5GUDGMP5DKtJdStDCETnN2M",
  "key7": "3pcArhePFbr6XhoD87L4GYzrdPhqgeJL2dEPqccqLmUFLEwGn5TyQ157CLE87P7vnDCPk97pJtUwDw2t7XRyKdPX",
  "key8": "554PksCsWsiiZ9gYfnRq9KNDLz1mVgBhRTR8ELdiuYZHrxNqQ835sUvNyAdTL7JRdvHGFRY6BNY5PgF8NMNgDdDQ",
  "key9": "3KAzowbTgwsQZyFonhXnzcqW8RvxjvcH8uVkVBhw7X6WpbBxZszbVbqkH148HygcqmTpXePx4ysnf9frYk5d5Fwy",
  "key10": "4P5ziQ24DDEGrPawt3XzdrzZQGGH8etZqrPDDL7kZpiAx8EbUsYCPNHrdDNkXpCV6JfuVB4W4QbG1JbwPMJwCY4r",
  "key11": "5nbUsPHH6Xrn5dSMtzERfxiXPRaHkYcPw9wJQMGwSC1mM5crWEjoR4hXgugmgf3RxGbTUHr225Fgj6ns1vqs6wud",
  "key12": "pnbVP6WsUU16rdRcDCdNHXhAdBuWAe6kPs1mjrtyBstKVkpev4Ar8e3wmYmv4z2XLwpjYGtiHY6BGS1KPhVMoym",
  "key13": "3ZtYayxKQwTmrEVduM9QXKJXuegQ2h67d26TBh3NQy8TayX8qcuNYYH5UY8Z8MTN42S7ymZY6VWr1CTH6yEwRaAV",
  "key14": "uW4EF4fJiuGTVzh61N7nEEuoAYq9rEtUT1KtthQxKpEfSBo1hnwTWnTK8KUPyKNhmyRKHnZzYZ86KfxFi38fGLS",
  "key15": "5B4NJNMEaKGauc2pQ6MG7DytEpQJEcSrjs3FtB2L73QaEmkAQCP5YrJrZNYJCKK4xeZjw2rveQUgd5FkKzt7TE8C",
  "key16": "4Hkuuyr9K1kBcWa1CJfbghPSW5pc3nRZAsubQpq2H6nzVcqpr4Cy7Ceb4j3UJzVEHExDrUuuv68CnLyjQn1Byks8",
  "key17": "5wrcfJ2uQ6YL85ZxaackXjiTLRJ4Cp7Fu2L5KEuCuzfFhoPCLyZL4WBULTp3Ngqn12hkpcprZEFtoU84n2Zgdxqy",
  "key18": "5sEWrVGsEPcBt1XENHJr1PXnCADSVP1auiVtv2EWwdp7KxGpDrqmcqhME6j3s7dyPfJKpnYhCbV2vS2DiDZgqAAV",
  "key19": "njK8E9YmXzAbJfv2tRxvNHfzKX427ooAZdeArbYSfp9HcppADQkp8KXNiVFy66a9zNvgaiRTNpT3LMBR3JNkPUR",
  "key20": "FZN6cnLvpxs65AwnXT3pCd1d3q7FDRNEU92WzSouVhV1c4vEoVe9RSoC568GVR4KetGEu3zPBPVdcK99uoYuEnR",
  "key21": "4XDNNDqAtCQLTwTSTKyFq9GDgfH4AAeaU26zEjSqP6nuogmo5RSF5nsPGHV9H19x2ACvNgSu74EVormtnvXcC6xA",
  "key22": "5WcJdrd5bJQiwhAomWk1d2VoE2U4xnjkNDWsUkhFi6DPv5AEBcdJPjpiCPxWVrgjds1k6k5fCNEE2nKXktKFCgQ6",
  "key23": "UY2CaykvezvhJvcw9xAru84Qj6QHp3CwEyYm4b1odpoS8Avnqw6KEMG2rDcDBw8MDotVvuCspQAh39xgnxiEFpe",
  "key24": "CYjmpxTPFxHGFDUmc3xABa3iRk6GLH5AKV1BFzXyzE7Tzb213LWSeVF1NMP8NEzjNNyR5YT9zjDsdnDGKwX8cr9",
  "key25": "2CAXTNF8GR7V2hBvw4uUxqb1gXBnW1ztZ1F8wg4pf9dj6PfESy7a2S3LvvF2inGCgStwdUo4LdWRoynpJ4xFiBpd",
  "key26": "5zMonLEZty6yFfVbWJsVunbkYXUz34i4Tzdz1SRX1A6gXLRFyRHLB65QFTUxifN7a2G9survodS58zXFdo7CPG5",
  "key27": "2Z4Zt9dutEpWnxZoikAQDVN99p6Pzt4QfJCRSSsPxmaq21iFV7GgyKCJysCwKy9FZtz3r2C4F4mEY3GidKcTveLj",
  "key28": "5SUMPEPzW1baRTwRM2yC3pRhfEC78bjrUSo8Q1upHg7pT8vntHb2pW2T3npmCueYEUxsFvjiraGwQpd9Ps4jAQVZ",
  "key29": "3gcG7hSQBPYwtf7389Bawv1xyaBReEMRSmhue5e8LrswHFmBRXspY71mGhLwsYhLdFMuNjwp8AateodmuFXPqVE9",
  "key30": "3sBGkdkGWfownMeCBuNTDL57U7gRPaGAL249TfTA91jzvmoKm2ksLkckkAqsfdaXNrtpqRnZHNMyAMP3RRYjoWvH",
  "key31": "5tWosRv9BCGLDsXnB5A26A1CsbXrECN7L3c9wszDT4jyqs4Kj69t1QYGsZHndMWw5pwUN7b26NeAHBvnckKiBYNh",
  "key32": "24oQhx6MhGgWZ2CtkxcucFHTizRRCm53EvkBiSXp6bh2N65AEhHonVwwQrrciztMmCVH1fGkxLcfzqmVcz7eT6az",
  "key33": "2QfprWxS1BLKi4T3ArQCJ2SRdmkrpEMyvXjaY8mygCsTcEhcy8EM3wqJrtGtMN5mYwGUHBJSQM8tPP3hY1KQR9BU",
  "key34": "7eKwMqP7aN2728QLb41vA91CmBS2sbAvi2cxyS9sodqPvzFDCnRTQYoDniHsQxPqrKuqcstw87XfRB6WxJUgXFd",
  "key35": "5gYdkdBPTPpGMB9R4aeyZobiwbx7PvLZqF4X7jwLgnjCs5xx5vnSUZ1XHMV6QJdWwMPJcssenKDYTpT2ZxumJFcs",
  "key36": "5rTNzCZQg9HBS8hu3r8jKUkVbKoyMCQf9UpcaetjMBvTEnyYCDUr7S3y4yFhe4X5ZKhoVNxcAZXRLNjgSofJaNGn",
  "key37": "4KjfVMF6niQ68Xbw4DBKszuoWebD3FqSMiJSQcEAga9e99g1m9zox4jnrVLHyFn8VzJbKqwjaSDKvAZJrTWobnBj"
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
