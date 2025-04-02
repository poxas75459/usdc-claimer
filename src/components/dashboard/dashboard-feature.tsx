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
    "dvhr98ubPaqgcgXDf72F6xM34PxDsvk3cpgKtM2pSZW7fUm2kQf91VaEjL4TRAyqpMm8Y2SRM6wp16qyy7MxzsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FjSW3B72jpzUS2BB6NLqrfxFNsNxc2C4tTfcvHjXBsFfYCFNxRskh9yiwmE3jvVkGnHbJREoUFpbKLGu12sezS4",
  "key1": "zyum7Ynf5TazfetWaJQCTFoa43goh1cHFA6HKZKbPFSrRBkmjTRynhzjwe1w7cey99fsy2tdTHowqKhzdvvQF7t",
  "key2": "21vCm9iu4DLRsZYw8XzLE1CVPhxdaZLsH37zCWBemxzoPKy5x6ZAaifyzL6PNin7ddRBBCMQcddkwgmEPLm7zVBS",
  "key3": "2wVQg2AatXDheFYoUP5wsgH69s5HYfRaQgqJ2A12nEzSanKd6tzt3mGZmCL9G7PADeabCjxfxqrRfcqPAbm6v6fG",
  "key4": "57mtchPRS9wvuKww8rqcAQFxUcee6uCUMb71fYyXrNMkHSconPcyFDYehkp9fXHndsQRRd2QzhgdXPx9TAd7YYNp",
  "key5": "4YvdZWQYkfRgFWpPRHjWNQ5nSCTk9Em6ojxqLTqV2fnMz7pJnD2pDmjboMVTvKwpRvaoVgzfyuHDdH3uv9azes5H",
  "key6": "4Hc4g7mx8FDcrrQwfrQSwvbwTjr79UJjVDUjNvk7CwvakgJgXPnSKukqBTNaL8Aqp7tRY1mgkfCNmxju3ni7RQgy",
  "key7": "4cKpQA5iKh34saGDsm6C2jY4Xs1M4FiJaErcCwHUiPL8H3PSVXqpBzRg2DVSD7Hu9tQH3fwPx5Xuk5B1ZtzaaC3Y",
  "key8": "5mCg6aSjpLieRTnQnCbtv3rKjBbEkskBanXjhjrvQf3ixoPpiQe9ybxtxf9AbV1TbzseV9MqvRkiPeGGSML9JazS",
  "key9": "2XWGJZqWqV4qcAhRbY9gxp5EdWGGvaMDdyagyhZFNziYadMWZFC13SxQPLTyCkm5o9LtNM9y3NFMtF4CdZC8Ktze",
  "key10": "5EQnWMcp63NYHBTypEfWrrQUa5E4QidWuKbg5rT8u3k7Kvyc5fhjP5S9c4GUHuJBpaKN3ekG63BbTV1UfvH71qQA",
  "key11": "E725NAHbJYPedxjiYZJY7eAXXYVuLFZyXTN1nexdvYU1dhcDk1d4AQyZKMC7mRP227APwMdaZTKcZpZqrgcCAu6",
  "key12": "2rjYKRXjzWqM7PBZqr3XepS8BJTtesXkSvZRebhAUSuZNCctA6vjPfZAq3NBwLDwGyNCsoB1LZrH75sfVZxThqew",
  "key13": "2U52sTdXJ87jDHkKLyHFC6kYkrzsVVW1nEURPgLEtqooVwjbw4KKv2dMGztNW8orxMuGANnfhF6YHru2JhE2sP4G",
  "key14": "3TXHQ98Ned6hEBma632oviF43kTx7aFdC38YhyJo8H83GxauVme1or4iCwsz1iq3uQehRCzXntq1sVqtmMDw4aRA",
  "key15": "2iciDnGzpG5WcExJiwknoCf3vNwEsPtM7sbEGfzxYZ2QpTtWE5prFvjrcGg2Y5FU314qpycTKXRAUzsbrYmzkoBV",
  "key16": "5xPyZLncvFTNyE9woMEXDEbDSYtCgAyqqA2oSZhkEMnwqCJBnZY6VDrk35EACCpj7PzGQjyBwANpnJdmD7zJiNGW",
  "key17": "4eEn6oBVPRUyKyxxU9SkwmivFp7TKt4JFyL6JFjYTxqPtdbCKae9xLvndmXQ5SgTP6jWuJjpq2vu5f7yVJHiqmoy",
  "key18": "329G5RmDYziUTbRKXjuPhKMksN7dU474XwLmeiuUn2kjGcuzRKUgroHboKH5yRUk8hf15hKYDjp4vpKtMtzo1SwG",
  "key19": "5UhGh9kr9hfcH5jZZNBwxw9T7gpz586SbDrRdvfUDyMEyoyvCUzD8G8FJZSSdwrGHfsXqXU1DUjdipupMnodGqmA",
  "key20": "2EGRDUwmNgSXwWVvk2JZxooQX1WDV2ZWWuRFPcRw5nZD2QX6FRZsBD7weCJ5REMcq8v2bX5hxKGV9pXx7BtQSLr9",
  "key21": "3zT5rk4Yhc4QV8hpwnGS7bz53PCXJSvooYmHA4VeymJBggDi8e656WSedMbFWqL5TP95eD4JSpoCCRK1yGcCN252",
  "key22": "2FWUKRMH47mDRhwDjvdrZ63kd3LukUXf6HtBg7s8LUks4d7u84q6qDjH1gnk6iGbYbMVq3vzxCs4BMvgAZwmMD5L",
  "key23": "4Tc3dsPzJ4kAFo7JZGkpCdjbpQ21S4iazKBeDZY7LMdBsHWBfggf6pfL3TFL97tF3srbPyHuKJdHfEH37qfx1gVg",
  "key24": "cXALaeEUiv9gqVyXHmigrUdusMysSk8RbYJNF5D6kG1MWaUtv5U2AtGS9vB5ezLV4LAPpJCHbyZFKyQaQaNvKPt",
  "key25": "2gYqtC2UKPH2FzH5ugL4jdhwiwGo9odBvE9P33BNCj92w6YbqD8RR5WM9Ksqp43rSaujBJ4bCbgPtADoAir3nZ3J",
  "key26": "TaZBqokB1wWHNWBWqrBN2QbxpNr8Urk84sCvypWB3rzfuRKqDCDfn6Seo5saaGoC1nFEMTSa27BiSUfBERDqtvo",
  "key27": "3yYKYzNNJnxD9t5txwb5yTLfLMGSUin1PHaDjj3qxsmg7Rs2hpUdLzpaek1xFceXGctXv95Y8GFqC7B4GUTWPtdy",
  "key28": "2zeugmj9cLvXNWpJ5f6QYm1X6cTziDbX88zfdSSF43N2BJNcZRfCdxdYttCAJB7iNyLswVZ5evo33cUCDwdQu4im",
  "key29": "4Eg3de9GBtCjJr2FxpucMquGrJw4TcdWXHo6nH92XUkJytNpQEwHMxkftbRyCRR4zaQjdeLJUhc7ZCmihTapiJB3",
  "key30": "8zdwY8d4p34RkRX4Pciz8avxVbUCVGY5kmCH7A34uoE7v29ZmcEmLV5SBi7nwo8v3swuScT7DZCw7vF5TCN71tt",
  "key31": "4qns18TG8MB7Q6mt8KuAQAaun8GXSawpeMUinJQKu28jXTLMZZ3cPhbE8qFMZUMFy1nSpNkSo4KE4tTjvk5joYbX",
  "key32": "4aVYHC4eT9JoEsjDAHzuDEcip1zpyvBXHXGBmwuxo7NEERLJLAv5pp3m9U6xVeYR4zjY4oFmxxHPz2G2BvSADGdr",
  "key33": "SRRtgLNwqwbwqfVfHgFy7dzw6if7nuzgLyBgPfQoyFATNcuhzSt5XZr3nKUaDuQ6h5ggufqmAQKczQwq8SaWv8T",
  "key34": "5EhB6MmWvKXyzNwrNZ9ZDjnwNQ9sFSbbHF9fZPtDj6AbH3CHDSS4sMRGo2dDnXXFPqxsuTia4qmnQwwT2durULkq",
  "key35": "5fZSVQMvxtmiBGNJeQ7Cnq3GqKuNKBHFRt412d3QrVahx742inMwLAjuqE7ZupjfraEGFSMfYezN8e39NEZQ5K4B"
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
