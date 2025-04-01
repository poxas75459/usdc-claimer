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
    "2hN3Px3CEdDkYvhYidsDm2AVLNtGyVAY3wL82Ac2aUBXdcMGmsAiVWCN2sYBS4oGjTqzMkNDyvpH6Af5EGNCftP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psThG72NVE9freCh8p2TPc4mkYFaeY2qza579EUVFiGrYkqeZopryyymGHMQB2FJe3X8pZRLjp6HiJzZ2hFv3Dx",
  "key1": "qdTUE8kACYjvQjFXaxw8Eppo9Xu5Tyc53CHxbrRgCDrNJ5QGYDLQdwNU8NhbDUDJLmruV6SX3gfv8kg22L9dgFK",
  "key2": "jsY6nCm7gv1UEDMuPU7v2TnEjNwGpvVCwVubeMDQeTMayqaPvbPZkkyxcrfhXnwFaz9mzjyntUJ8GVwSqoJ8uvh",
  "key3": "4GuMTcQpmoc2gp9jd9nsnrxFidqGwmJ5hscqZ9n5ZoGcsoYta8dHZ7yrv7KWucEMd4KgLMqDkEDLTUCXVBsxJmQL",
  "key4": "4NfgwnVBdBWjkPFr84j4R9Wqv8hhzNrxYLJXn5FeJorFfh6gDprkJSjaJTMTfxi2yq99WrEkEn5kBvc4jModXjBn",
  "key5": "3GQCbnHyCRGHmYmyArsHW8QJMLFvtmSrxgvi3J7e1TBrnGXHNprsKwwMg2dijqiDsmxzMR67CYLSwfS4CMrPKzrN",
  "key6": "5Zr1BRUHbdy2LVP9vHWsf5PTj2FbTE9YGBj1GSisKVL6ykLFrpD7DXTb4WfCm7ua8QydPLVf8EwHnvxFgt6UTL9Q",
  "key7": "3arTP2LX5gfrW4Jxp3wzo58RTjCd4oZE1xivTXQZozd84pHYC4oy9BnDtuSSjQWpKtEuUZfyXHfp7RWctC6SHsqG",
  "key8": "4HVoyM31YBQhSLjxeYxY9gEDo45DVLithnWn4kiNLebx3L6UdrwtGVVroEaoFPN4NPdq3xM6QFStfpuyGnGjDvsU",
  "key9": "4gGc6YqLqunZ8JoUb7PKiFvSVZ2ihbo5gLUeodMEierS9USEHPgguGfp2M8cWtFN4yiYvRvABZk96gFKwB7eZ48d",
  "key10": "47FUWpU8uUDXuEhhCmLaq9wqot3u4JasNi4LzzqcNx4AiTobH2ts9BiquvreAzV3GXinLSJ7GDkHjjM8bk3jpdJL",
  "key11": "67QGXjvYJdk6keTce95Y2yxcu5wR6fnTJQFwP1Xmq4WnXE9WyP3GL7iL1BiuQLz35WXiWdyCMgTN9qFiWwWyYQUt",
  "key12": "8xipbNXeSZJTRjFFiijGXYTTetpjrgkCmsEF38amcjyWkQtyZUSZW5jF3FDBooRLK3DjEdCLRb1sCQBZFHeQXBg",
  "key13": "7enqEP1EEPJSREHd1jYYJeUoWucJdDkc9r12CAAr92uWpkx2zghFV3whFm26WFoyKN8dGsKWS7Nmk3Vv6W8ruDL",
  "key14": "5mFmN1SryZbeFUhBdvytRbJXiBfFVKZsRwmaVpU8ZaHpDWq7wVsWHocqKmeM6WardwbfSt7Q7MpkW6fq48joTZUC",
  "key15": "jdEQ3bB1LrxYxdc4EEazHTBR8KDPwEzgqigGBJ91C3UbLNnX97FreNR2H8Yah8m3Uq75tw299E9avaA7YqcR2ys",
  "key16": "5Z6mHBMypKURVfr2XAcZbnvmXy1xPqfymmAZi5v956z5UWKaY6oH36Z3KDsanFserbkcAo1K6tVDZEjSZnNaj5tt",
  "key17": "5xmi6hvrxKqRMYzTuKjYmmRwXMgrGpFL9G8SSX5JsW4FCihPVRLTBpwYSccTitW1ryENZNBMYffGSLmJpSJzWFAk",
  "key18": "2mZJxsP3XJqGuLBxve2CZQVowNazpXuTPmVJ2gTKWzCDyC4jEAXL96WhmasAwBtoVEt49FyJ6FjPY56tpnGcSMCj",
  "key19": "w3gyEtEfkQivzXvhrhgdU4siExLgzDW7fnb2ieWvQHFJutfC1PvDXFZHPCHnsPZTmWnEq54zVpx61HAj5noGa3s",
  "key20": "5JJnWGbudYyhhAQwvNHohubabuetwfWwhVTYzqGJTAQaHmzNXwR1SvuJrHDYp6YrMh5X2BNXypGKSvbq2deS9pa2",
  "key21": "5d7JCbooB2GWhDWbb75j5kctgny6XLx668YjofjJeJXWQw2Xy6Mh4MpUbm7oe2gWAA3nUJDZyZQ2BgC5Z4h3Rofz",
  "key22": "cNmSbUWXTVAayAguJH8XdPuF2C6GCE74NhyCp17zisAJ3B1p93cxh17JXAzDfQsBW86Rau2JLPFA6dkkxkZRiHp",
  "key23": "5QVLA7c8xtLsRkqz92uqPt3EZKD1kmFwDcwC2HyE9gtkejGppGFEGeKsogUEr2SSg8pVzdVarTn3q5cvQ4Zuryn",
  "key24": "61HwNr4sNAJjFNCM8b2YM5vjT3HzovjEiTcbo9aG1PSc7LtpxcYwGxQBFtURmKdh7yqP85hnXhJUSLJWP5YPJ5SU",
  "key25": "2qJqnVJ4LY3hsN6WEgg9KiKurggcVcMQoaSY5TNWBH7ETRyS7xHnJvhDmmNUZmqrNTZAgc4nuwSojL4hne5TkDi2",
  "key26": "2DFEpZq3rB79TEZfwcFb3SQi6mzv7WZDSTzyp3UpBJuGvdTZBDg7Y1tG8eDQ1aUVxvxDayA8pyomeUCeb2mjWG2U",
  "key27": "4Q8RyXPWF4HVMHve3oBfZzXMY8ZaecYAH6ThnEXmrWfLBjZYXjgmiTkyP8ztzKCaRsqtyE1ZCSHZoSHkZon5R2JB"
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
