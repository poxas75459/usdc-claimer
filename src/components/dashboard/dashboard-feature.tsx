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
    "4LQZpKnggrcPpay5tVpAqGpZjMtwzGvDLriU3SN6Femof8QNXUfXJXDyvWwADjcXyu1DBvzkufdnJUPkbujWZ1ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3GYG4KHQd7bLmWx4c4Stwi1eZ7jUYo2AnLrprpDD7TETQHBvkJNrBAN7xPhmTZdDcrgAUe6oREth8aSP3rUeHn",
  "key1": "3shZSCLtZbEp9u4kvh9jfEoZZ88v2cANx4YBxMB3e6TzPQxBHs4W4xWHaKFLkk3DLwmo81B2ibtwB9rwxMjn7SYe",
  "key2": "4WUZAh1chV1oYRji8ehGFM3ZbgNayCGG6b6hxny5wyAWtLGrpj1Laj12yy7A6za1e9WZtuKLbLb9r9s16fPoDqo7",
  "key3": "47HHiTMSs94gjonNnuBGj25usAsjr9rTuAftxzXJgvMDnfcLThsAJVKxH3ijeop8pxtitVRnUfEBU8Rdf249eBB4",
  "key4": "5oScRv2xgvymGbcpUnRgYW3wycfid1U1JH2YPjDTvPumaAW4jREuBmiCbhSSkK4NGFLfbgtefUt7w6HhPmSXzMms",
  "key5": "4werEmTCjH3zJ6dg4Y48kjXNTyyQbTmwfueL3qyYdRcySdExkXJ16zG13sEM2neiKCbKy7JetY45j9Yz2zsUTiM2",
  "key6": "LMocmt8b3MRqsMLBo4sVTKr5PQvF3xxisKLEuZdWA2fQ2deSd2juaew8WvwyfxE11ZffmgxmuSQ6U6MNFJjUqyJ",
  "key7": "4CGGiweQbCBq6g2TzpF2evuGFK624rkXLFA6U9ehy3Tt9WSP6PeGtanUJSKA7EAttTKYfmVjQe6M21WWNiiWVD2r",
  "key8": "TjkP8DpH8A8LsHmcnx9omLEmoTZ3GLF9jzvUNZ79VuNxerRp81f3GhHbVujjkccGeEjpFjFRap7HBYMyakcXNd9",
  "key9": "49vFSuE4Gw2yF2YfhvhfA6KLZxuUz2nWBo68fysJuow4NavDU7DRi7qwcmfqrNRm9z4hCto3pC7UTjhvHcCqSJuU",
  "key10": "28xTPJntrLDejdicK3Xu6Sj6cNDquN98VzJW69AeE1sNTsAgbj6cNXfURP62QUfurPWiKFAVg9Fvrdeyv9YtwH48",
  "key11": "3PwUyr9z6eGSQw1ccFKbY63jpm6WfxYRfnh1JNRCxt5k2NDPQ6seYbccaKvePmfT7J5Ts7ZMwcC2b8k7Tc4wftic",
  "key12": "3rWSKFodbQAXn5R9vk7URNiW4Cykhebiq4SySvchJqZrhsqyobYjmuzjUWDBExGT8xaEVqUFJ6QCRsSZzPqWPMFU",
  "key13": "25ZGdQ5H3STb6aLaaAVF22JpCjZ5n98BqFRgZmnnmqfGMmTQxGRxdCtd39qBf2K1Ff9QKuGzMxhJ9GN7VofSJUhq",
  "key14": "5osYkZbBF2y92hXEM1Sdgs1T2ryfWRrJD5ZTiiwRJmQafquLaD21cEEK5ZCu4tinGiWmi92Zcj2t6j1tj8Fh594V",
  "key15": "XEu6NCatTV1RNvyX7dpL1z9bRKJQffR8a6nng1bs5iYTrYQkm2gGdVmuD6TFsJrHwAsd8a9x6YNLA8TsUuPyqAK",
  "key16": "5JZgy7HgrRrE8myEHuV7oegkfcKk6yLSEAmosYCG2TrkrUPK8aH4HVjBgrx3jPsWrUWrkFHj9RY8HJohBNWnH2DQ",
  "key17": "47HgMP7dkdeiYpsLiTNs9nKXMPyYEDStLeEJ4MiM5dS2EQAez9pPeriWQZoPFwpaT6mrPhqqzozn3zkYGsTN7hQJ",
  "key18": "34vYuUZGznzeYwJuFFfdaKwrFxByk586PzsWrVU38hPhDZetrTYBbVJnRrNong9DoWG4QHbz9PJt5wE9YadkLX9T",
  "key19": "3XyQcG6D2dEhiuZmpsRekc8SLW7Di6VxdyKwVuMK3ixMvz45oo5qRSjMa2Gu55eQwkRusbBUndHn1ZnSgtqHPrdW",
  "key20": "4JpNW8VDcQAkQ1AXcxFmsFwmp747VG4p8i34TLMvcy1zXXmRTNyXHEo6mZ1URoy7yzf6bhUwThctTgk12MfsMNLd",
  "key21": "56JCngXfUqYZWC88NJmHCsPd5yMgLMW11p7LWarpDD2HhdrKkAK2v8A4aZVDPzJbLb5tDnYYqDyjezeUJHe4B76p",
  "key22": "qrnDcDsTCtmsEPP1BSVN8UYWmb7ghtiam24N2xu9rCE2ZocCGjwETCTeE8AEY8GGCGmvP8wtpTU6KZQFZFrBbGB",
  "key23": "5kJB12Ak4mwFGKDHnVUACFs6KvdSae8E6QupMDCRDMZd1XNXeq48nJqGvfW3wkfLzaqEHYiGpU9Acj3b3AXfLbgC",
  "key24": "5XsBpHMGKLjYvgCZViXGibREDDZkKneKYZy2jjMho8HmvaskWyh7GpRjofz4ocbpDp5ABEfymokst2SHhhWG1f1s",
  "key25": "3SpCnzPfRGqR8wis2kjDh3aXs4ZGLRAjUevQwuzSUFZmPKvpYkQ1fduE8k3JdbggvKrPABWDF8HeWdMhn4s9io5a"
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
