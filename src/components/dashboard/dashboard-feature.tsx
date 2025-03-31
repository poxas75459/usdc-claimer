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
    "3J7LdBiAvLtxQmfUC5c92G2zmeUTZ68fhHasxHUepyb86j8aUXohD6qnUVjHgngcK8ksDccsiydt7YJ5dU8uWynH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tt7qei2FMQW3CDNijM9JGb19PkNtMd3A4An24XdioSs5QbBnwxxN9SGGHkHSiWU4vKX3RLVirbbFB66oSP5tZx4",
  "key1": "9NjU3j9wAkXqjLJctVGRaxr9gmHkkKx1FCnp6NSn5T2qqn2V5NuNYPdrdHUvBk7ku9xofAhn79fMop3ARp72PBY",
  "key2": "3orx4Zg8ZkVufHs7eWMCiZsuX2BhuY1i13Hca8gKJG4YfvUN84wTtmfhyZfYA93U1BxorF927cnL5H55hrpe8z5F",
  "key3": "3bZeyqxo8jZGQsyuspTyAuTrHwNMTuJEUPEtGFMvAxgJA3FtHHycPutibSrMboaAbGio6Aey6tRLtNmCEpRVfCqA",
  "key4": "2LSYXPtXSBjdzEB5Nzqo5PggciXyjF8CUhjMWN4XAx1MYUxUAJJpzyNdciBHHwVyw7RwkjcomsGQNrTQkcxATfkw",
  "key5": "4fbQXtjmcrumbebwAQYmHykuodchDH1PL5Z4zw3Edx2CPGvWu9vaGERd8kNinxfyJjS2NjdvhU4rq9oRJzLph1k",
  "key6": "3oHizsX8WetBwrVum3yCRAWwHHWP9ky4e5X4RExwLv9SCmoMcR28eyy5VLCdcJ5JBLRY8rHZ5RoatSBW4zKrCKck",
  "key7": "5io9dtqSLvBonoza93mqGcD4tYqWHGtZBTep5h3sd1bX6RxydAc5iFkEF8YLQb4eLXjBZDuptiDuTyXMrfPvGAMz",
  "key8": "DnwimzcCHimvdCdMp4w4mpQJtZ6CRiCzbUJzAPzprpUTrokRCqhxsUA9jZ5k8cnaFypRaworFUeWhj8hf1exR6b",
  "key9": "4rw8Rm1MuDv7szaEHYdxM5PbmdpBhhobPSkohuXcAX7GhZabfRDcN6MexbnjQkUtiZChAdY7Zz4enAADXQEeCD8x",
  "key10": "5rNv6XZKHmrVLMcN6Lnnrq9Li7SCTfj2RTKsNmb8YQj5CMyysinzPitam2kV9xMptNDFEegjkF1LrjHbX5RQCXKh",
  "key11": "2ipfZovfnLrFkrWtWLLNinW6ri7VaVPbwaw6YtbEJou5xRmsFGKVh2MCZ4EjCTMhqSQHWneYoWtFHJk5KoRZbHvP",
  "key12": "3DtPTxR1mpEBXQY5rktpQSS86DVFXgekFcv5fKdQjsQb2Vne9SfDLZcZD7eP2Cfe5Kzspz3a3gr4n9Tp7YXaGAdm",
  "key13": "4oKGMt9Wq3jaBbFxt919c1o4ByeTnFxog6htdnBWWnHeG1cEjd2NSzwh64ioDwqq1DoEahtDi3J5bZCLFVu2GuDr",
  "key14": "4sNTQ267rtsC3pmCb6gnDnTzyvGB3EqJSfkE5scrkVuTzppZz8f531nAVcJmmbJwWF6ydZEkXS7VE1sHLujmpYWd",
  "key15": "4iPzuNfWmR97gVEmwS3jfeiJXPbWuu9cVXecV1ANq3SWUndtfxacKmZe4ijo5HeQQBa1zyekWctbKQfLk9vJWtjS",
  "key16": "5msuwvSixH5v5SgKePanTkuw6p83XUdu2J6PdVJ2HeQxsNEifW5Zrrm2zYTe5fwm7JX5ZDyXnY1dNDKJKFPe8xdU",
  "key17": "ygqmE9p8x5sUE4aT8fwTzU1PsLFQpdRWyCKRxkTDzZVXPx17NW8FNf8vda1Nb48mMM2rncRdoSPEmEX9r5JT9pq",
  "key18": "2rQV78KhuyH2i5ftjJ39jbNKUDbiFNtU1oEKCwCCwupgeFCEz5v1iiNxWXU2LMU2LSdZ9Mx39WTciHKfPGBQZqkT",
  "key19": "58sVPKmVj965tmxSMPZocBiCzUB6jPRnn3su4GQi5rjVEUJC3QgBmxRq1K4cYEuVU9CTk26Wv1SnQZxWmPB4obG8",
  "key20": "3zMFeZxSzEA9Q6GhzHGruntVeGz2JbYXe8hpyHspjipvTnTRvS9saKiTWR3voe1xiqdmd23Rxj1P9MNbEfweNpfe",
  "key21": "2GjkXumQU4FmC5BkappDg7TqdumuCdyQmRkFxsCeT1fyrTRwR1ZR4Sfp8qWDCyjSvT1jLAJ7jjucYo4PhUKEDbJG",
  "key22": "2RcPymvoon5HQ4x6WMVhsoUg5JQH6v4pjfxkhLVZMk429Q4Dnm5cczWATqzCQzHcHSmeJwH6XRwdrFCyVT57MbyS",
  "key23": "5TRWzFSA5mVsWW9y59Euyd5utTohdW3pcuDvNv2CraFgvH9M2PaKRvGxCKHkunCuykMa4ffuMfB5KVgKEKE9UrVD",
  "key24": "2RRnXSDNk84CCYxvSqgGyzhtpUK29uvftGsDUPaDTf8qG1kLeqFCb81G9orBXJZE6YYYZtfzMx8i7zNJoB6EmwHz"
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
