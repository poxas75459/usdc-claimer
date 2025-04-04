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
    "5bZoHKD5zebt8ioC8hrJHRJuW7RPPbyWNPPANv7x1vvVMK4bgonRW5Vov7BTGd9yG2mmjRMBN8h72tkujbUg3WZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635kEh1M5VtuxhYby9w8Roq6ftpU2DvpBCaFD7L4w4bghFrL4qYV1Xivb7U5CDvxCAUsTSTVJDca8fQ4fEt7b3Vu",
  "key1": "5D7kk4yYBUV4GqE2SrKXVPvQhz8DQa2Fp3sjo3d89GFVp1tH7WWL44WEaGABbDrDppFS9iHZaAkV2dG7dhWue5rp",
  "key2": "3t71aMXmYHrBktP4BCuUSSEYGBcFSvqeyKNKV6b3Lp6c4Fqzfw7ZTpbHb9syK2mBD4SDzf7Qh1zerFTNCWCnS7Xb",
  "key3": "w5ia4TPeDs8hovobVnGfYka2WCWSCnMhkqgRtmipMzHnoQ2hpBtzGxtJjbNZJJZqtj2rkF66pMeyb8AfBxnVeD1",
  "key4": "1DqAi9nnMgqRu1nq3r13zNwnrnknzkdQMKfd7kxyYQoqmGPUGzxxvcQ2XVrXinLxrD6zg6DiqedGmLfty9Z5TDz",
  "key5": "2oATDUy77BKfWff3iypjQxeDLWHkiFF4UmXxNgRetEyRVkRkj4aBjeLwbWDGbB9GA4dGw9WN5c1SgCH8jqhkLh6K",
  "key6": "2yJLT631DV1UTpyuFHZSWLGeuf2nAjnG7gKjy57wwK61WAFqvbPeutw5k4rDFZ3wg5oLRBABwoNv1Re2nXMS27qk",
  "key7": "4y1WbayfpVKawioq4ehtt2qsyNYuFAHgnnVqJPMvemWtQqyNzb27LrZ9LUmoWQRbjUGeSZZV4aJAwNUsx5jw7MWN",
  "key8": "4Dr8gmNe25d85LAPvvgyrrvSQjnWS2X7R1zgpah1pkzQGzVR53Qc9sdUs5zyU9XMLXbn5q5gtARJx5ZPzN4Pi94o",
  "key9": "2M7hdZK4vYmufTSSAza45d2zhV1EGVZL6pezj1ipP1gpRgKuMM2hM3BPUdshNGTUNmbCNWbwrMr6fJaVdGprvz9N",
  "key10": "3g8ciHZs3yWxYgXEgJobggeNX6QLk7ah5v3g9adRDs5Lznr2GamdZ2exP6Jyb3hugB9a6wHDWrHi4WTs3t97eTBG",
  "key11": "5gcM2V7pk7o41xiKhnBc2wfZfwwpJQ38uftMiYJCsK3v114jCyYqAunnpbVttmeee1AKMwDTm4D6pnTmXHhNfD2i",
  "key12": "5Gs42A3zLiQLEiG5yrYscGQaq1ib9HsRZe2hLjcEQKWTq7KkSVwgAy5ZbRLXuDY2NQ9S6Tck4yi6XT2M9omW3NbW",
  "key13": "39nQ5DAM67dfNsGwYyLCB28iJRexB9nhXnR1NfaDXuSE6qFTv5H7PcgfpfZJkANFmmsJ3TdzhYQJ2ZYksLoBauvf",
  "key14": "3RHutHUsdhv5msTUQifpXM1mqkiVgQqTfjNbGr6GpCcL8i8F5PByX93AypF9Jo4qkGxNBLgwNhAjNevjM1KCCL9J",
  "key15": "4Bp4wKLALgbUuBHHzTkcnbW497YSR91zbkyTMu3gPb9BUjU2ZCFKghGzwLM2o3VHj1romS8YtjNkGAKZXEEuPZuS",
  "key16": "cmgE9DGxBJXeqBVdfM1YVSe3gRBYY58HuP6oMddpfUek62hwBz129akHiMZxCDDLiHPiwhBEUSxsp4hYLPoSFdE",
  "key17": "8hBhbiYcxWK5TRWvJPz8bTh4icoi9i2f4dRnhSxqsiSfzA8fepszHqnULMKYPZh4UfAumcWhnCkKQUnjdjdnVUd",
  "key18": "2y9UWPanJ1nfCtv9Qa1D5o7nVKp3CdiZnFULbMima73hso2WV6JSnnK4VAqzoAL9ZSMgzNeNzc2NaMsa7JL6nRcs",
  "key19": "672wkuGivo7y9Ax8wBU2wrA8UGoZbSNtzrxy9FBpjXmq1FybjteVZfuGeN39XBsMzDHkP4CeqjaVH4vSthjvY8fz",
  "key20": "3eAyRf6NZyoo47T6BVX4yYRaGA5oTfv2pYiS7UZKqACrBwmmgupnxFqq1ZiAcWsP7ABtFqoyAKdBER2p78jAaJJG",
  "key21": "5HDeoxtz7kiDGjtAS9etTzrhHQcPw7quXBqFrFdYM8dukKKa263cw5rUvMGpUdLxnqHmst9Z9WWZzL9Su6WUu4eq",
  "key22": "5p5GFEL8N2Jn8TWExEmgFidgEruDybcbgcFyyeKVRycH5DW2WneWfASV7n93KgVbHVqiFKUwd8g4adfFcZTfBmXZ",
  "key23": "25rrajCg1zA2az79Agmbi5zEmDMgPtkQHFNQeTiCwKCC2bzyVT7snpGeYYECbHVbTf8L9jTXHTdfe5gkW4KeD2HW",
  "key24": "3c2ZrpXhuaUb8ayE1WmUGWoefVkJRDQvrgpGfo81fDeLst6uCqaoNASPHeMoGUcnc5RHRz6rkAsrbZRutgc1x4nN",
  "key25": "2HTT48cUBwcAGmPrmsbGq5tFgNNJW6XwzXkte7j6sGptgpT7Mafj1X3PAo4uwsC7HwxLu8ixGA9WcxXoxw8CFbp7"
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
