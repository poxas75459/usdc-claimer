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
    "2A7C9w12jYz2SdcS7er6Q5qivwLPEtTePxKf158JAmKb7MtZxZuHHiUqpqySgAD3VbsKYbCa46nQzuaiQg6qJPES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36x1XhfMqj5ncgtjLGYKge96cui75M7yQXwy5oxQRNbX7gH1Cy5Y7pxoEcJ27g35xAbSM94Z2BrpzndrLpiWwDPK",
  "key1": "9W4U2brcmEZ3QAFENgtreQxL7BKVsPyaaUDdoEZ3dwJPD6t2Jfp7h9PkimuhbhLzfrHuu561By5hRvqTE2tk79t",
  "key2": "4TRmgTW44YQM71aCyfjJrWD8hbL4ZeF3iw3xZd6adTQkXXvaqiA7KJq41j1cmfSPzbK5rzpULZo6UTBGtFdTacj4",
  "key3": "5N24rGLjsXex4sNr17s4wFgUhKD9Q6iG7JTJ3E7sbvEUQpVi5hJHbyQ8DENE3uFoTK6LmzC9aznYnv5BySwYQVs9",
  "key4": "s8bxgpELemjmGsmxyW9eEe4mGo3Wnp3QnE6h9Jtpab79UNz1BgxjgYremiFQZEg5VeudAp9JT6wacWSYdGcAJFV",
  "key5": "Ls848rZbgMppnfm9bjzntd3mxUp4Yy37zSzih5KqN3vtxewsHqEtcHRUuSFP9q6gi6vjivhrmpWtnkQF8cYxuhU",
  "key6": "TsPb5vvReg29SvUd1gZwo3vcbRda4X1yJdboMjuHPTyTdMpGQSLr6PfysbEEzLreJbpycuNS5QoDt4auDCM7Zyu",
  "key7": "USzpXn1TZxABgScz3XAzUC7hhwpBWYU8RxPn8E9wXzm1Zg6SEfregnxkzsZ6gJpXjuD9sAtDx14eM8BArv67LNV",
  "key8": "coeM4UAQXnsZNHc62vjirfguPy7CXbVxtNBJK2A4bQg3SpEdKE23UbVoUXhbmpvLWi34seFExuNG7gpxSotfLhX",
  "key9": "223tmMtPgp6bHCxmW9f3dsfW2rrvVG14vTt59E4MahfEuHJLi5XuUQ29aguoB5hLcZubrSXpgx6VHuqAqvpD9eBs",
  "key10": "5MJPcbXJwE1zNNZoeFQ31V8TawVNb9Yz8tRCLZUo18HV3e6aCvX8u1xzv3sasyPgzpRPK6UQZhf2osAsSoSqaxvK",
  "key11": "5adCJ5VqRCQFM4WuoYMtSALe6FruXdrNNKSr5DsUE5L2cHDCnT7MrbicYJxUzv6dS7kjp4UBaXTbEK4aT4KuDu3N",
  "key12": "2DBth9YvxNiwAmYJAnSVz5sBjw3D37LPmrNBZHdtsBw2vX6xYbYntKYzogV8STk9EJNUCkQHPfVs8aHVCsVcGTVV",
  "key13": "nZwQHdVC6e1igVaCvoVvH61TfVEsgqqoth697omTGREAjrJpX3pcnsk7CwaVqdGkbrGFnZNHofq9CiwNciLx292",
  "key14": "3JBiQKjHQ7uDP9yJJfqsV1h71rP8sE5TfD9th2azktmQbjsBX5gpqd2uRgH3y8YPsNyq2sPicQiQ8uZe1iMu8V82",
  "key15": "ATNioMzqMP16PcRq1mGuFKBRKAMbnb7BE1c6Liu275G4YjepUZ6c1JZwxDYfq3DJS2kwKQSfDmESi3VsdBSdnog",
  "key16": "UgBj2i1XofRjfHmdcHQFhp6yrYvcrZAPyzFhcEpBh9pgFZiRxRx5GcHBkqPmYzsaRBFMq5U6yEvMtGZvsTR7bi7",
  "key17": "2bBdyMoZjSXGU195mhT2srcZzKGsaMXGfbuwRiW2L6ZW6vxoeaAhMwXDGJb8Abh5nDVapWLym2fx3hFcuNyXnyta",
  "key18": "2wFWKZ9zYyS2Lra7BbPQ6QHwEXpXax1Lr2MxQ3sGufwEFzLHyKEBXKecv5xQ4Y1XyRNybnMXB8Swuv4xJPT75sjg",
  "key19": "4bQKxspbFEZsbwfMafVehHovtEbqJzjwGjbzxVuuiU3zyv3nRMi3ykHNZ2TMpT3nbscYqxd1LxAFxYiuajWf3Sr",
  "key20": "3FnCPL33peYoxjTWG1JZWRoQnV8EzDWytQKtCP7GnvMzopLHEbhKYWf7u8bV2axpzwY1FuKr1H3wMzL3XrAwAazb",
  "key21": "2H5iZ16pcqdqzpHDusbGBFT7mrE65eAFRdMuVYvrSyzxMXGEaspK9hojh27zdYGU2Qv55ogMLofPvh4xX76CNhuy",
  "key22": "315Ci4vc63bF2irygKx5Js32FzKfoHRdzyEMmkR4YpD1KoKq4FBGDQYBr3YoehNTudWvUxDVmLVZbWrnRSRzppXm",
  "key23": "2gbo91zWPXRG9dNZMEu928MSyaabDt3Gr4hg86LFi4X7PtpndAZ7HCrephWfmVXLgFVeDGK8Q5iuBEe18z4HLysK",
  "key24": "3v2FDHZvUruzaoirywE3e41XW7MTu32RYUpn5EyGondJFQWh2uvUGdp61wyTdFn6oPunZLbkVJyNTEyrhxkGdsCm",
  "key25": "3dypobdrDew65mympTQQ4dAotZhDGzp9Y5NyHMSTRkLT8RSaKhn5Q2GXzrAftjnASqLhMyaEqPLXMHRKSzQ7TsHm",
  "key26": "5npFZmh1eRygpYQCL4F4DiuA5Pp6tRQnvKDUXJ9LPav3xPeYps3ZxfSxzSku8tjpoFbzjWHkndZazFvWuR3B5KP",
  "key27": "21FndAxXbKWU2hFqrVaRewNhByJ1da11tYqQV3EC2YYNwEhAGG4PmGsVEYhMF1aQ8GSvtyAMCvRTL7DYXY1B3pGV",
  "key28": "26Z5yTv7yDvn6vM25fEfyMcS1CdCLfjvn4WX4xBt1CNizrMARuGGhiiGnP5UAcD192dmz4ReKhySWnwWwqjhyEFt",
  "key29": "35Tbj1SCHeqVdzh6WdnBCATwLiLwyHKaMBARKHMfwo97mC7LksQAEb5ZrH5hpm8tcwYmuQvLzYPhscn3bBbcnNNC",
  "key30": "4EaaZANxSN6tYohaANgkmNQ7FcJKTnvnqcdfR8MTBydSZsRoo1rytPPWzqck3WhyiftRHM6hd2gBvGHwKHgFaDUu"
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
