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
    "3AKh1oeqGkaMupafUCWqjVs12gLEYJPFA2a6qinFXABeensRwCMjUpULSM46CtTiHFneXs5hRmrGki2h1EdWwnP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LXKRLtSuQNiYQkAj4UVxDU1oM2rA8p325L99yNZUKj9hsS8v8mbtrS99hJtQrdT6nWqcfwXdtfTLezrKPnrMSp",
  "key1": "z6sQM26HiHibWoSkm6xxNqZzpEZkXPeQZaYRyKkbgsEiV44bBKvpxaozNfgBK9SaRSsarDLpnS78Xb5FqFN31Mw",
  "key2": "3A7BBx54HtYbqWFdNSSSeZCk5PbUoy5zqq2hMV7JXhkeLrngqg9KNcW7wyD9MzqfTCQee9eLNZYMRZJuK9A5WbLZ",
  "key3": "5h1aNkGo3yoXX7R52a6Xh4hCR2S3sXQbC7TPEoyR2GfNtAVG6zHTJGc6WggjTV6YRKCAboWRKJGUAERPMEvZQR3q",
  "key4": "5iHAo1BkTKUQ1D38tWvJ3ATD4p4hm37who1t9oK92gcaD6Uy13puJfPWKtqS72TsGGSEiQYfqWcfGAch9J6rURH2",
  "key5": "3odWdzFiewCVCEaGCbTPBmbuKrcQM3qAyzzs1qHtPrvzoFSnUtnFN1sKteEdGQm2e3rpRhKhzC77zU4P8qUyZxer",
  "key6": "3gyWUnz2J4YCLFdByotmjNwuQkihMYwFtFxhnoXtR2Cj6itoivBustGqdwndgitvufJMoC5CeCLrTSnCBBZnRaAA",
  "key7": "4Hi2Dud5HHY2CtW5gPsUFi8km4Pc8tHxNLyPW8e7sJm3zetcKA1M6PFTsF64NrMt4ajWLLY4HyMEMtLBKuSiAtsD",
  "key8": "671rVqBW5u4hx1SxswfBqZRCFmmYQgVSgKSXQAgxFX669hWdxccb1uQrQLKLtbTCDq84gaFt99SP5W9WGpzxZwbm",
  "key9": "3tnHEgqcg9McXbCnevMmtMQCtx6isNBJeGFfBjmjPfzyHNmnRBWqvnrjXLJVo1ziNxtaJ9R75Gn4uS7eA6jci5BT",
  "key10": "3JY3fer7QayTnfihB67X8tDLAP2j54ZBHn62QssJSGgcvMTPh2xQ55tj38ATjzuU381bHJzg2wwHc18VvAs1MAsL",
  "key11": "3yuCkRP5NMcsWkB4yE7VtLwV4SZdgtwTc1srM5YbeqUkWtNnyXdSeau4nfKEuhc37cps8SUvwi3VW4fEHmC39DPS",
  "key12": "4XRPmKXaD6dsfJiqHi43sGSEZmEcZe2s8eUKyrviWRNSZMYvSoveZjyWFYf4emerDSbBWKWVezBSn1MXN66dNQRG",
  "key13": "vcQh1iLWLhBgn9Yn3NkFcHncC9vJaRVJz6GrX1meFfeaqLJz4tx4KEXH1VnCEocENTFn9V4WHKtPuv5E2koWQ6z",
  "key14": "S2EKzKAUTgXPpvoh6kcDsPcui1fgK6tUYvz3EwdfnKoG28FZovLBBv59Agmw8Y2nGUhZi7jq351g9EjL1v3GWcA",
  "key15": "4Gpg143z6Pv2mPhxrd3t4Yqmj2WPvB2XX9grHtKF27tbBFT9bDMhkMfrd9DhYRgNNVAmdJRyvtatSGdg3eLiqMFT",
  "key16": "2bxG1FiDZ1Kq4igQSWscRVBtTnNxrExnC1tyiMsWCcaZcCRbxW3Lrenyy3LMSp5rrKo8GeFBmabasV5newvwhf5Z",
  "key17": "2oC4zEXTsBXRrnEdXVhAx9dqP5eE8N4WPN4BBDUXNaHG6jt1C6YFBwVEyYLaq7QqAGA3mpmnu1GMJNy8f2bV1V8S",
  "key18": "414R2FHDyazNBF8ty8vBwMcgnADjJWcw6jZVDi6xcG9irhGav2JTCeHej6NNAeEMbQWYpJ1fYpwiPjK3vFJqaSJ6",
  "key19": "5y2AneqA43FJhBwBQ39gy86injBaxtqfDdUPaJS1XfhxeobZBhKK2C41jcxU6kNUBfjjJvK4G9REzKay5wHGKMVD",
  "key20": "43XW27Xm24yVDVVaHhF4DqcVxGJK2rVPRvKXvD7jg9gdxmANLhokgfMwEfdyYEzKHVNBFznbVYk1ENT8i4ozvKd",
  "key21": "2RKJFKE6b9WCFEP3EURT43Yv2HFZCVJkY69p1iwZG8k8Q21HbWPgH4NbyWVuZcJjCwzhrbx7zDWQMpi3r9QwLYv8",
  "key22": "5mT4oGv2TjUD94i1a3m9qfuurUHWkeViics4YFGEiuJKM1RZSe8qKACcpxM3mdNNf4ak7BeSXaT49s8XmPTCENW2",
  "key23": "5TXgiXWDRt11ArVYF71jqNJWqtg9bhpRPrnYA7DcU5GyQNdgeV5ETpMgmkT8GEPYKC7UPYvEiCvixNHie26V3Svg",
  "key24": "oLkemUKFvF6qjrSNqfkfkda8dRYnZYs8RYvyK1HDdw4Y9yTrQc1zYbHhLwwxGxAhZaZHadLpu9MTUuTpJZnJroS",
  "key25": "2Vyzcizj3U32pwUjETTbCrLkmRH8JsZ1CcKZAzbqZiM58zoKWqithYvnkGGvXKT1Max4Dn7s5NDvWjPsmB692aej",
  "key26": "3DmQAp5wKSvZxMAEPrRgH3GcFM4RGUWMK8ym8uwGu5eMyJ4eaPyjBfiLjstn4yAxaxsHBTFo8cM6saAzkZs5c71y",
  "key27": "3pvY94gEZ9AR1bGKbX6bWvjVrrN3SjNUbX1bw9ZwWR3qMUYfvabrsxoSZLz7oXs9nBDaRSffg3PbyDEQAnYT2rDv",
  "key28": "5ykz8abqAvvz85j54DvuDbyakvbbRZouKSdEB1N8WCy66ByQhTTRsfgbAg6dCqpAp52SfPU4WQJ3QMta2J4HbmJL",
  "key29": "351mpGHvQQJEFYnnWKAr8x4Z4hMrwa4D3KypmRD4uYEmx18xcdduvwCdT8Qy56P8fJ94q1Pj44hoeDjPfrX7yoJJ",
  "key30": "3nAH5sqJ45w21n8w9t2u5j6GbLY9bepRvhjRPzd5bKZrRrbJWf9MpJRKjH5YcxDb1sStkWszLHDxYRpAFrrfjm8a",
  "key31": "2N4Vb7Sg6iZZjLShrW1GFuHQenYyL9RFmLVmbeKUcvZbwEtW98z4Wjh7KpXr8EHtYDqoB432CWDH5CPn82W7km3Y",
  "key32": "4vTEyMmkMx26SumWjKz8gVWYBHDRiFb8idKL2P15MbTPKjqSJ2kMSUThvsyRuXmoZF3nSkb3c4wV7F5evhfvgM5d",
  "key33": "zDFzp2MuB7xPjyzevr2okbaC6648KkEL2UoRX2Qh8BmUHwmD7js9aej3HYmqUerpfmNtjcTFU94yHsYao2wRg2Y",
  "key34": "4WsmGNe3iGYcVpaGfBRpwXvfygeGFajwaHqUifF37vUGZi4wFPBFhgT5mxs3PSKGYAjERpv8uZgvjeq73bnLfGET",
  "key35": "8YSkn62bqmdh4KLTRfwRBUKxzDGrcA642ufMjnYMU4MFxy3hR9AqBWL17h3K7Y5vtfjbsiNK7gxMMAwSM3NafSG",
  "key36": "3ofPybN4P3CvFWxLeuay9a8SGS5JCinb3suqed1YYA31rH3o9rDmerkjDY6ZALqbcz4KZ1a5cXEJ1Mudr1kTKSRj",
  "key37": "2ZUahS1puJrEEwymBRePEn8mYBMJCY25QnSDsNiMdhksEz2jjJTyWj3mFdUx6WSGuGK13yWciE6xNTxCKkeRBZLX",
  "key38": "uno81NvoUNWFWsa9wiu6gUGhzxF2goGHXM5sKyqVmuvBNthstrfVkfYmiA44P9hxhHGpJKM5TpS625ehbAHh7dB",
  "key39": "5azYYegJ5byJFHgUFL3XCuTbXGJTiqp13aWMyXZrAeXotoQH9nPCsQFyjfP4cnvJt6zRdSvRK98B2daEJpcjJ1r5",
  "key40": "4AhF56UfCfKC1N5rSGmakfx9Pn94n2tRQQyCtbNYo7CQVKATtdnTouPMBA5CCwMDRpMhdxGbuojECPA2n4NWHpDj"
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
