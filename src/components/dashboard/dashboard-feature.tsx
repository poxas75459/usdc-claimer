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
    "tDwkyGbqxZcf6YyGKnr6ohw2DJVT1QyDjfqW3C9Wi4Fyjm3S64dq17yA5YFdvaZSB4wBX2DrMF7XD5tkgHptLjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eREpxryn9wHyHqBZDxWZ2SaEBfv1qPnEfegWPu8mt4qavxpRgsDZKwAv53XTYsRzUni2WWe4ieLCbKq2Q8s2mhZ",
  "key1": "3LJXarQnijjRCBijxz1pugYTeP32KFuqtbJdy2KA71X9yqjEpgSTnioT5bE3NTR8w4ATNcCez5Az49ssrRjP8oEa",
  "key2": "uvm1w5kktyMAHLDG5PfUCRik3onV4cCxsuADJBasvT3kTB4eco4UX5y6Akr54HHUctgiHY782QAUkbsu3dY3uCH",
  "key3": "3nYBKuXjqHdX3gFHS9BEGKjnVgLM8D2DzuFAXG2qcsbr2aVafrexFzFKXgxrPXyhamas9oMjNZEFmvNmAGL9mcgE",
  "key4": "2PkpAPkv3h7Pc96gHJj5T4F5upKYPJFbzQavwkCTJ1sNtshz5WHunAN6Ws13Zt16oaGCsFFjr5gKgSUPJb3u1dXA",
  "key5": "5wcmjQA6ruaNtiSrfrdWQhkQHsJjdfjs4V9nrcZHmWMCA8fQb2kXM5HHAUbsh6q9HgZY5phRq6RUPcjDKHQHr62A",
  "key6": "2BLs5E5PFscqcNEG3idXMubf6dAkYGFroTcVWQycFmZnpUc5wn57nsEPmuSPNhNAoTAfDVy1JS8WgxQ3rfZYNbF3",
  "key7": "4HbjNgNyWQWa22m3CCmp3xxbygWjqVAJNWfVKmXiKUSENvyt7Mb4rdH5Hpiyq4QRjAEwSdK5LEyXEErWaGPiG4YN",
  "key8": "sDGMT8VbJaWeNzEak5pKL86o13JJoJMcRfj5VR59yoqmSgewzcckQjEYd32E3M6fVtsmfUtfnqo2vk1QmGhe4YA",
  "key9": "5YxbnXxFEiRijiv2T4TNspueJUJ58YRj3NycnU8SusAbJpbPVri9J3WGVYiZbnVD7kz9Fmb75ZxCxtj9jhbxehQj",
  "key10": "5vqxVkA6KNe47sFikiC57rBcZS7omDunt32xkAQ3iNcEZQ9h6VrYvC3SRSSWqPvunaHaeSkUmdvShkX1ojnBDfzu",
  "key11": "5aaE3PgngjMHeSoWbxkS6QGTQ5EG4pyk1CKwETWVGZjfCMiM2mzbmQPRxwYKepE6bGJN4xNwNVUFj8Vr2LLcJRGP",
  "key12": "3YG3uRLPK9ZXMwSF9GiNPhcG4ye28Mrpo3RqkNU5yxCvaEkMfcXdGHBcgrTGm3BXRTbtS4fqheaQcwRmQF8DDPG9",
  "key13": "5sedCd7M4r92k92j4e4YxxuXKvfWRo4Vmo7k2Wroiqhw2PheUmisN6hHM7miAtw6Jd25hssf9vz9d8zq8JYuMGVg",
  "key14": "5tJ3RwKtxjaUFVpbgvHocr1X7L6s3j1NJQBkn3prfikyidhXU4FRSpv3W7r3aKVi8MoYzfgnxzTiep2VCHEiPYNi",
  "key15": "4P1p1JoQGjz9xpQAmLhn8yzvHzsGKWebpPzRKfQFZ5dQf9AQNaB1gehdKhbnxtCdfHKwX59fmVpgVeNZ49nhEiTH",
  "key16": "5mbkDD9ugTYzCRALb2r2X5N2TitAQijTnzy5HqU1enUfZHtp3YFracodztxE2epFf5Ltj9JuGRfgMfrVftrqXgbY",
  "key17": "3nMmPcy1CtiHEx3WXGZd15jMTa31SRC7SQCVyksVaLPSNKmv5zGjUA19jQazogqQb7CjEtDmMRUZjZfx7YxZptd6",
  "key18": "4gjYKRHckxFuACXfwdn9CRxYK3KyWHzimChmGMRxTuveTg7X8194Zqh4SinLsmpFV2P1bKx9JrD9jUyZ2V8nXkXP",
  "key19": "2yB7T6R9x6DiYS3vY9KAmTLjh3iExxxEQkSTaNnysNgJWNdbowvUzukw9NFVEArz6TAJdMuJJrrMqwBc2YXH5BiJ",
  "key20": "2oUo5jEEM3H62CgMeiPvP8cohbovFj79ZTDQQT1h1QvAJa97VuKdfvEDTVJaiyq3sQwe2SUqknbeiXNGLYYxfinY",
  "key21": "2uHRzdxhyp4p6gLwPJq1pK5xHbmJWV7t2weBEEnnADvm8VSMxVXMU2YypnEvxi4zxEz4kmidk3yXrigHY5Yz9XVL",
  "key22": "3ZeTiGp1kzTg4YNiiqypr5Uiutyeg1AGCwYWN7NQZsXGfmwuKch9KZ4d1DbCfqu2RzsCgNbCU94ydUYZrgRucgpA",
  "key23": "5wcbXKKKnZaiSEw2GDpKNX9jFSLFrXuJo97Zkgn4oDvMgjAv4mm2q8MhPN2YJ2RGzFTcR2Z85wtKF3XFSFjtdWT5",
  "key24": "5xLNCW4MnMtfj6ayKPAmgdosVaJKux3KdGByubFcvq2F53moAXLgDhJcCQTHFAwyXqEMWVnuzCXSeGd8Di4LXhRo",
  "key25": "dQ829yqW9MFr9MEg53gdgcSsR5xdmEvAAtgGtMcYvLQojyMJ6y2FBxmDvS6udj6dhFq11byurWFkST9Byo9MumE",
  "key26": "4WHTaBsN4WXV9beHykC3i2uvTaHnspjhHgANN6ofUqegdZLGwdqQbXeQfwvBqUti1pVMPJDT7V6ufS2oeB2hT3yZ",
  "key27": "311rRVePyb2Qbk3XNEZpy1SK1Xbw2zZkEZM3bDA5ErpkiYP4DQ4xuhDgRJPcbqUE1KL4WMPj8CmTfjQJ9H6S9oZ6",
  "key28": "2WHkThGfRv6sHdvsjfV2Q9tipu1M9e5d25Euaf7eDwh4kQFnX3axCccSQJ6F2FibngjTxuHTNpaNyYs5bXQzT8cD",
  "key29": "4adH5btdYmBPNYd5CUrba52ao9QLoYMm1Ns6NdSjHQAkfQFCMKsdcSTX5iYtFJ2PQszBvo3hVpS18HfFCM6G2hc1",
  "key30": "3ksrSLQRRusjhtSJ4tWRzeUNe1V5P1h595LuGBTpSwQRZwa5yhvQSNEN5R5NNi6BBBMsojqFaiArM29Vjzsz1bZ"
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
