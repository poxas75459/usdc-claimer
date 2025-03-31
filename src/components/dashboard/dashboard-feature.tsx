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
    "36sHXa16UTgSp3ccxS4DVV6WwDKYUTcoc5HYdm25QekMwxpDTaq3Xoy43QZvcHnUnHX59rHR1JTJeTqBdpoCmK3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4jsJnSL4vGAuo17g9KRyEFhkPh7bdwAQ8jtvaxnyHQfxKPuhTcYByKPJEjqdQ4bUzR9Jb6XLpsAQEjZqcWtPeW",
  "key1": "2wMTNCJTnXh7WWkgW4AkSCsWCrQSaGMtJAqkKKoQkqmACuNXTnFPHjMQj5ZduoruwG1VjFkpB7cYQwqnqxCvzzwj",
  "key2": "3uQGeueCLEDMDQLN8X6KrMz4SBx2GGUwWqohugyfPsZQryT1WDtPBP93tfm7v25A2P9w9DWhhGEBqVeUM37R7jo7",
  "key3": "3ceTYeXWJ4s6cLmfTRztuSja9bAXeytJfFCyeR5ssCiNNRGEgPz4LBm696Nm1s3h8kbDnCy47GpiAWNN3YUTV82P",
  "key4": "V4kz6fE7Jr8xgFMs5Hmn98zaryBkafBreCXbF556nTjCVUtonkTS4gMc2me5DdR33Px34uD36VwDjZ2DntXcEi6",
  "key5": "5PNYw1yuKNbgRKWHCU2uD15hVW52uHNh5bmofwyW96aU1h7u4tqSgZ4nxNX7Nd6W8vK69WLPZjrpwGH12YUW2F8Q",
  "key6": "56jScZJn1vEEqDTbHyZ1Vky57VauLvsQRuMZwtfexZ7NKvf2KZjNfsAXmLjtGVP8616CbtvDWEqS5aE2yBXhVt2o",
  "key7": "2ntyffAPJUghdkHwmAYUBSCGsUkC9MFKgZcduEMdA28QXYZCfVTXQRj7gLYfUhNdfngc4ZMsX9mWEThU9SshYVyV",
  "key8": "2TRXm8icvmix9JEsQThaHyZ2CzQgyqRdcZngDnxunH9wLUBdZXt5buGtLRLcX3wFan5jcx5LUaNeBVBfBro9gkQt",
  "key9": "1PQy2Whcm9ZJLYScpiujJoi4sEgm3XVyRJtESW1RzjAM13u9QbS25HQUHkNFVc7XYCGqTGFMxFGi8mbmMaBBsA",
  "key10": "4Hvv3zriksgDNPTNVk1f2KsmHbxDUpGqpSpnU5hTbDnEWxd2knEbJjkQxXZtrGaA6AB8qUukU5UeGRFcYRygDJVU",
  "key11": "2P6XHwjVrTpH8PdGMLeGLaxLyEnAWu8FvYPDqWCiCB4dJ56e6cP3WpTha4BDvGghnUcFi5JkVPajs4xMQyvXwuPf",
  "key12": "4DYrymhRyaiqT9zVNQzJ8VhMTEMG7t6iuV6L1Qk3dnThTEmgmpjAXYFMjUHNiMC5UgjHuXotqwYiDoa1CB4r4quQ",
  "key13": "2sY2wh4E2k3DK6SqvxiT2osaHDnfDQVr9nYbaRaQ9NW2u8rCmH6q6L7TCTNdLBLDi73eP18sJdwUt9sP8cUJhxNQ",
  "key14": "5AarGEPoLwmgvmCm1tcSLdFh4Qb5un71eERwPT2CWgLxSQH13KuVVNBx3qRKT27jZu1aVWQ6jmUCaHnLjg1ttGWV",
  "key15": "3VAE8kEZK1QJKYX8WSHgkrQA8Xfj4aq8R3q5gVM2FiS8Ux1zLd4BPTcBBUc6y3mhmg7Yp9mkd9vBUAT8eGDVDgV9",
  "key16": "AAjNhasri3JHQ2mw8btHmsx2FmNdTLqm8EBanHtniWWw1a3hpZwrGTHtuN4MRSCHHVtRhgEEzcGa1JeeFG3ci8k",
  "key17": "5U8TWzTzZD13dCmiEXKFdQEMAQpbDgmZ7jUvEErfGP5hfVX6SwRWy36CNap5Z2uEur83yYZm8my6Kh6xKm4DjBDP",
  "key18": "47pjfCLZ9zChFJg5oJARmLKRjwBjMzgBY5brCS1sByRwa4bQJCKKRYdmWnVhKsVFdJBK3anK58EWJUmZNAnv4A6K",
  "key19": "4mZ5h4AV5tfUniozXKx7jE8vcL7sVfL2vDvKhCUDDj1X5bhzEHtuRkc8p4QvvyNpVKKbRLz6GUVtt7RrBjbxKPSA",
  "key20": "5yCdRnPjL3zgZ9PK85Cz2GtUZUo8xnywTZayt1EPnGtkvDVAxr2HhoJy1FBfDHNZWFLKynhFTZgtsbTuWpgPppXn",
  "key21": "4TGXZMfMUQasEfv1k6Du2EWdTRJJg86e89fghn7SY99zzUwbPz5GVHgaNfkiEPnCxoCBohHNorFbHcKeaXsNfP4m",
  "key22": "2ybfwowpbRZhDmMAN2yzuZXsvdGgk4tN2kbKDAcgqdiqKDjLRS7LsDvMEPSYSu9Ne2p4SLcSHP8Rb3RfS7hM4usx",
  "key23": "WQ4KcocjvUeB4qQX27c1hXoqn77gsycfUk2LAdoNUfnqYAWBMA9c2Ky1pu4vXcjsJW6mU2C2xMPDEc1FvxZDYDa",
  "key24": "4XsFPZaoJm9cneyi92eogk2N38jNDnaBwM1ijxHeUNmnweUbck5gxhdqt1XGphjsyVJkTYwRg3EomyngpgTxsn3P",
  "key25": "5z4GXJpDGaAJpa3XmTWX5aw5zJDm1gFUyw3PjnLnnQyrc2NpfRtSPcqyZvM65phyVkorUHQJKPsTswsngHG5vaB6",
  "key26": "3vhct8XrdWWhYrHxabaRtmMNPCeok34fmg2szz6WqsA58hNiLf9CsduuNcHw3H5U5oCCwEfr3UjfD9VzzgiQWBAw",
  "key27": "2xQLcR2ncYk8WPRTEYwadw3WtFMkkzhyRzRRH7D3u3rPqB4UrqwkADsDAzhfSzceMf2FxUhbTjPY2kBwGEvVmXDu",
  "key28": "4h6Z6ioR2AJiC4ueWtTH2PKWx1ztNKQo8sgt8z7FvngLGKw9PfWHawgJ9gXPgZWtQ1tVAdXDHz2CJwWaW7xE5iXq"
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
