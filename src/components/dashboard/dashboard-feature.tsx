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
    "649HTuohvWUY2itEcSDmESa3aghnZ8YC5G5rVbcmEeBxoDZLXuXJEPt88BvzypfXnTDpWuduHMs76sZVWi2XPFy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyGeWK9UaFSWKehkFDgvkvPsTPQNMWJx42MQa5FmmDjdtXk4r2x6YVVMfrAvJKFvMKb9ysxuUwdx1SVGjzxbtbn",
  "key1": "YFvwDhDVWc8ZZJU15aQSGLZaScx9m5F8tja2fdufpGUwJeTBwZ1SEExHikHvkCmcJDUyPUk1KQtxh3g8Npyn4y4",
  "key2": "4C3TghEqEd2mBHgp13SNmaED2iewzH8ezmr44EUHdmV3PJyBbLFimsW1z6guc8cnjzcK4sEt8Ty8KuAvgev8t7tw",
  "key3": "LRLdfkbUsziwk2HcgGvRpyd9jAERWvNT99jJEyR2rJXycTF5dDkpdCXA4hedgtZVWfXvKfQMZ1BcihTJezLqtdf",
  "key4": "52YWDqeUviNE4rJs4QqMJsxyzrHovMhDdTiYyzSBmsGsrBFEBSuKHeHVKSFUuhcmJDbieNJVJtVVitruzDMR53DS",
  "key5": "4x9EgCfb2P9cHTH1yerqHRYWoCFTuaQQX6VeZjZkk4gmuaURx792U9VB9DDsa91iDvT7K63X4gES2aVY5iLZ9bSM",
  "key6": "49XYG3MpuNLyLCpuQ3Z1fSf3GBDKwrtZNAw7MuxZ6PP8wXQWqjc7obLjPxpmFEqSirUK6BLTJr1wjFYPcSHpvA9K",
  "key7": "3ycF9qgsC7fo2G3gpKKqoLXZ7QHWUfNH4qDxnbWvB2PZwno3y8Y8EzPMEynKy3CvpnhW7uiDstRVsDiMRkrWTwpQ",
  "key8": "5LnwXjQVWBtv1pkphxrfyUGYaJLcurWqT1saNQBZ1v7qNYXR3d8SJHNAgPbdcyTah3PUPY1M2mCenoDZW62E5ZQJ",
  "key9": "2fvcXQXpGb55Ty7vujrou4LXa5Xu2yePtzAyPhE7Pakq2ghurtTjgE2r9qUm4ExUipgXxeuUdzXYYDnUqSTdYRcq",
  "key10": "5whU1EKP3uC4TzmgrnejHwLR4JdzEUqxGB4cdKLTev8iLXhKoFVerT1VTuqgAYfrqBBViiQuXuWTHbxTXCmCAm5m",
  "key11": "4SimkJBRfwGYzLfD4f76ou4enuurqUbMszUggwqJGDX1JWFU7Rkp3RZyqFWoSwfd3JBoHWsPwtAZVQoNzNb5dQLd",
  "key12": "63qJxAFMHcwudxsrQ7XkW55EDio4SsqXrBPamM9iT9YfFgheKikvU9GcKV3ppUEX5XsRDULEFRzxWJ2rA6qLvUqE",
  "key13": "2JBp1yPi4mQ2dZGV9nzEFgRaCB3y2usM3HodsLTJRbZPUoEWp1bbJpS3yzjvgaBQiByBgFH9PbZxL3vuPBWcXV49",
  "key14": "JH6MCxMCMP5eFroEHoWbDNRSnWEaih6d53jdYNLt9LapSqCZm7SvEbXDoKidvRcQd6F3r7srht2BJG3sYbkSiAd",
  "key15": "Z3KLAerQw2SRD1anH1H3Qx4yrm7ztJhG3LMQGghQKU7wPmNBTGs5npySzBgtQqHtnL9K553t9QjtgV4DxnemZ9L",
  "key16": "3ZBS6JqJkyjDjudqZBz2Uu2FVnbq99Y3mJVSwuQKzstb4tmJfVJCA9vmQgYXWpJb4okFmdxvFgBwUcqTL9SdNyUA",
  "key17": "586mbg99TtCXxr2CGCcW6WGzgubfUuog4MiEmVMcQhnW5zo6SyR3SogqC18mn54Cf2YU7v5AA4N5mE4g8QXLTyP2",
  "key18": "5TePepL72khmHNMZdYKYTgTpMhgGYCY72u3TcSHjAVkm55BhRxCKVy3JQuT8FV9ztkA5m3rhwhaviQWG5uVmip2u",
  "key19": "2NRZDWraaVM2MTa1pCrmnJyn1iv6FgPC3tasDKLdkJySPy4FqBNfY7D2RHhBrQgcSz46y8uJCh9DDT7XD2h6P6PC",
  "key20": "2wWGMEj6ubAca6weoTyUkNmdcjkkTBRmMp2bfAbjXEsNzkiC4T8FcKXXjhbn61gxLAEbRCH5FMo2trJrBMi4EFop",
  "key21": "5aiRE1p9twGJPsro8QXJe7uBsMRFU9N58DoNWuAGbvuD8ST4VP68Xj2mBNHmob8qQ7PLRC4QnVhQpo7cAohWiSLP",
  "key22": "4WfQZb5Ze465zVaYmhwmjHHsBndobpecnWeqikAo9vZS7otkS7y5pb6Na1P7HYDt7qzuYDXxYGjrhQahg13fPkbL",
  "key23": "26GA5f2QeGtb8jkevMpHnPk2WUMvJo9cpRnmkD9ERJtfyKBtMMTfXk48LFq7f5WKmtFASUE2JgtmFDX2oz2ga9rK",
  "key24": "Ckkj4fX9uH9HaJCMSWqfgoqnbkFcc2ZSiReZswSduZrDyP4ydmcD3yr6R47epPe2jX4u2Rh6NeA3PUwnxnje8gr",
  "key25": "4g1oMN9nFGNzmgwTyqQBHwVEjH2zM5gKJfa5kMsuYdrxNxnH1mFCA6fMQgTM4LgJoR55nwgaNWcVwXbfAYXPSwbE",
  "key26": "sr5QNePUrZTRvYFhuZym2eEdKqa5v9QMNoKVT4KxYryskALzCtUEfSnc27kQDF3QwA169ferNjumGL7zKp7JPwP",
  "key27": "5KN4w3SEzLvu5vnffGuzW5mkgWCuVnxVvKjzpx6sqE8MYrUSkWXsBYvk4KPtHnNUMsqcVuTtfKmwSRZkW6RGhHgK",
  "key28": "61mV4C1AAntiaPNccXCW4S6GKstaT2M4HWzR2jDmmJKXHnhQztmSmP57hmbBnfXmjXYgUbT94suLvbwYsqVLXxNB",
  "key29": "3LAfCy7fKcaaNht3tdZjPYttbRzWaMzPg6EJvwHxtUpcoTGbaUJBDzaJRrJUYRhchf4ci76JNhZEkGUcm71eZMgc",
  "key30": "SEDv8aym8SxLT83G4oqmsmgPeyHP3wBY7WwPh8k4h8NQBjDD3SamJqrZbMbFGvrcn7iT5ShZCcCc74i3QUF2L9B",
  "key31": "5sK2DfFmyV3MWNJtXwxVctUuBVQUahjTb9zVNkD4prg3uqGcTGF4Wwmfb7uHEMpJiyWpHADxYGKQveP91u8HeiJm",
  "key32": "52sMMTmJgYaCNoncGn8cyDD6rCrAS57a47rQo7sXEisJXzi2xhchthPKZ34bsKGVL3RY2VUMkSZRWAmbadLofKFk",
  "key33": "4RZG4Ym36UMPCArYzY7WRy4ZACtiF3tpU6MTbxaxGauPiv9P1i4t4h7bvHJ7uBxTqrd4rAcA9ru1xAYEc9GRtGxh",
  "key34": "5XYWHRU8ah736GEbeP1rwuYCpgGwbLagyU1gZ2EUTEiw5yjXfCCiGzYwowY7gHnMWYgK8XJaf2oJJJ9ixm1eakQ4",
  "key35": "ETSku3dj9gWuf6dH2gi4cx3QQx9myUFonPixLUsbSHuo17d4BsiGchJDwBt7vUgx7i9CLXDUqecWT9TbamiYAf7",
  "key36": "2H5E8sDYpc7kHM8nLtF26J51PypP6HjmYMnN84XQGfbZWssftjPY1DZtB49PLH7EBMz64PrwnuCXR39W55Myf6hf",
  "key37": "5S5gVFxWGbJ4HpX4Qo7xbMNkoutTjXSAMTeXhzmJDzKSPEYJyFpmsH4qRRR8eAVaaQTC764vvArppyZS2tVU9EUd",
  "key38": "2izsCr5w6bhoTVsxCyHKnhmyj5jn1Fnbu43rKPGuYRuj3xhFMBRFYVLeG5Kg9UKb1F2hTfkUBmahKiLwkwLPAtMZ"
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
