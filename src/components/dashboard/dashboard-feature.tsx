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
    "3Pky5t1dr4X2ocxeVEVtG5rRH4dtJo2izDMXwY4fRdGn9GZhMSkBz9KPXuegDVFmPLXBRJMCDXbTh5Aqv8DUUAj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCZjg1dzEaTaNuVfBjNWeFt1piBo7fBsW6EuZaFaVdSc4mdgtSi18D1Eo8MFUV2Y6fNetBDGnUfzqMi9Bjv4h4P",
  "key1": "3SZUkSS3RUpMND4nWBJe2LfhzyuTmMKPyqrxse8cUDbJSHWEGFMUhat6zoPbPjfbGmb9rcdi2ZmBMRaLbLntg8A2",
  "key2": "5E7Sds7Xhs6AHH1VZNSwW4b8PhJ2kvfe99RhdVNRwTnhYTabGku897vAQ3agABk9z77SbNCeoEnMCDMKWYpuvC6s",
  "key3": "22hP4w8AibdxYvkTmQieFPoprRUgycfFCkpsY1uhZQhLf4YF8q8pYZyTQeTkMipQfMvXTd6rqKGyVJLt7cmBiH5N",
  "key4": "3ETbXUzwvFTgWDqvoX2vaxYJXNRYvjtZC777eELN7ARJeS5B6HyUzdA8y4Nr86HWzHZpiqukXCphJe42Bm8B1ht7",
  "key5": "4zUBFGfvPVEQYLh81LRCFqvxH6wBx85sAsRjA4hqn8jZznAdNxuD7G6bDvejCEQhGT8Rp5r18LeTNJHVTupHmNFG",
  "key6": "2TFzJsxbJK7GmqUm5X5Ls65Q6HgE6RGryiTbBvhkwfqvHgoaanPtQtDwEiHyxSya77PVsqd6t7iWqXp8Hnieqkkn",
  "key7": "4tT54V7awxTdiY4SmRvdkFvVRHahEZZXAC9qQVzE9fEV1vetBVb6gy172ZzT2D28SjMbJE27WpFS9LBsKdq2uYw8",
  "key8": "TyUAcMopUsZuy5gTB9ZSvYCzjyoDakAmoUgGCSWRQZFV2tyDHnfCDtP7R6ijCQWk7hU398oKiVFoH2ZW81wgCGD",
  "key9": "YuYDXdRaSpyXGHGso6gGxTkRfsZX7ysqCSSTSUUpDU7nWEZrkvLUvWzfAif3rcrCLzdC9C7fSJY4vP1hbKuony7",
  "key10": "V61UrzwoB8226aZjyVV7udpougr2E3ppG1JiXbxLZgH3QhbyNkDCBE4vVi8apNQDX93jyLCVx4D6PRhLQm9gW1v",
  "key11": "kGmh3biSrrw3PReV4c2ywx78T26PdWnAzERurrpA18MeDmvjjiC9KP8ZUt4aHFs5PJaZQcekLNed3FP3QmCqHKv",
  "key12": "26Jnoee8qQoiPmzh4rAqiQVnV8n56WVUyFbfEVj2uMAff9MRbiy42uyeMybNwWWmHL2ybUXBhFn2t1R9kMGbJqCP",
  "key13": "4U3YSx7662HwQb44hj3QXsjVP2KNX7tTz2tQws7bzAzfhLNzemA2PmUz3P8PtEF3ZPytsSipvJ3ndhuN3LJYSANh",
  "key14": "3vDZyJWma8N8RrcSzmSVVi2wkyG5n7cWykVMB4UdyZ6RcRBPDT59U1o3iLkePUe9UKFPWXWSJh7DbXoUm383nidp",
  "key15": "rA1zfxqpDmwJtaRkmkMreYMmNiTsMotPB1ocUZJPtUBBxft7BmLbtwxHbh9heS1Wskoccz5RD4wb5mjeWhBFP7C",
  "key16": "Co1bWNHWP5XU99qgkNG781x7v2g6jxAk2Wh2YDnVJS3pEN8i8TS33Kp5qN6iTnS58EbtL4BnMYa7WCUZJans84p",
  "key17": "4iSe4wgRSoZYTyF775QmPyj3eBej2hfttHfsC4yX3croiAjBaL2YxchdFBShzkjXhJuhrF4m3EmBiHFApgjT3DWf",
  "key18": "2yVnjcNL1At2S5fsdAtear9HiYtMt1kNcbBCnJd2KJ4cXi3xh2v7Q3rpg58M1DZxPqmSgZvQmtVYXVHHXyEkr72Q",
  "key19": "2m8vQJgPvgW1qUheUhEgSpEU96U2Uz9ysPds9Wvhi6CmDydeA7UWm8wxDmJ7pZuQqNtqhuLV9nrvRLekUGNMAcaF",
  "key20": "2REjQ5yLWVKKajzFYJ3DbVJigWK4dtPqpo5DWzLn3aKgxjqco1F2u1bff2n747edLaGWk3fCwyX8xdHuYr9CwYo2",
  "key21": "4VrsEgYsiGzyq9BpUPrR9pYzGzKuva9h6WKDQR84tEkAiJWQPyPPtgHcQZwHYtQhPhR75JRnFcuk1oiHFUa6NVNF",
  "key22": "YGVKYt9MRdn875bBAQNwkRSzbT7MXusUGuetfssbbaWJqtc33tn4dqWGoUGGwKdEKTmp9gC9DZ5JEQ4t3whBdM3",
  "key23": "58UgE5gPW9QdeTywUNRM5shCX8Xg2Wy3iUDj6ZYVWm11EdF4zihxuQXboRBerVYZcuNQ66mw1y1b3y4mc2uMKSys",
  "key24": "DRHrs3u2qgNWraCDQYXd4J961NPk44jBF1wEo2bMDMRaov6djt4u8W1vEEH7z2rMWiiung9qjKEvteNygeR1ydm",
  "key25": "3JE8Ppd3gHvxChkAkH8E712dHP8Y3psnxdrYsmwi2Ug8Ro23EUDyLGTQewjj7RWHDPVzh1huuCAF9w3xBL1bp43C",
  "key26": "5s3Xj6sgsLVcWr9c9BzCWX1NYWYNxebm2XZoS3yJbY3uoRG5ZqRBPrTx3iofYMT6UYrCgsB5XncETzYyAo9oi2kT",
  "key27": "rW6RNqV4kS1zQaxziMWwnSGQus2UL8fC5SnrsAsLrXT66SBnUHMeLeNK4zXHUqvtg2Tbg2vnhTQ9BMUEQCuKjHS",
  "key28": "3CX6fePhw8SQ9CHkiZmfRLwMz7BPbZePxSqEZDBLuckEcapDtD6SSWiswqot3ZjB1wWxC8qRyQ7J6qdp1WXKJPiE",
  "key29": "5X87mZecHfxtaeGeCRsMN44Yp1b49VpDyrBFoJPDAMhTLdUjxUCv3RNmzffX5YP7dJo5rJZJ6XZTia2H4WHMx7Fa",
  "key30": "4pB1knqK8d7LF6CAttwk6t8kbWo2K9D7y9ZKZ6eWcrTXMqin2mC95nmXV2u38qnFCAYx6a5nCZQicAkgJEZUDuv8",
  "key31": "4nNJ5WFBsAEmaRQukoHj26TYRrKf8ZY1G8C58MdKof9qQtPHZVvRCzxNaLvpPi5Wh1hRMFtPfAsZtX2SHDCzLrrU",
  "key32": "66ozGiKqYfTsvHTC5nK2MxfYBwHq6C3biTHYEVYqsze8EduaA873ih4Hr4osjZ1Jm5VL1him55NYUotwBXfAx2DY",
  "key33": "EDEph8LSWP4CsGTzcBuw2i5NfqwKiCHvSdPuqjBSDnDesk8XZFSKcRXDL3qZu2ni9zdWtGgrxPW5usqdqFuXtS7",
  "key34": "Mj4JVbrVSNbzbSogEAn2nwfgsmuNaPZ7sW7KH6Taz4hqoKusYz3CxVfQPJXprP7ZWW1yowghc3xoNpC8EkpVqSq",
  "key35": "3m4ThjkHtNESe93crVrkJHARtHKgPaSKAs7PCTVozc8spVuYjQ1G45tjDrm5Yoc2ZGxSb3pBszm33h5dZ7nvC51B",
  "key36": "5oU6KJn59FjfRwg3ZsxbBgmoq3j1au2ASLH1rHiyuXWXfoT4yLgWnXb9UgALg3FBoJ36qAN9RWht8pma82bGE5DY",
  "key37": "4jQg1SJ8n6jZEmYHRx4N4ZBJjpPTvpHghwX4MBy1YnGYq5aYcBb56d4DFiE1wZngZvqQt47mJg7pPgaVH9d6oxTt",
  "key38": "5B2yWvuGjcGoh133rhP6zw8z9NE6e1atfvrW2qkFaxMDPTSFiNnYMNtpH8yLKhBqGVXetkfPqUdGH5VXpZukcKj3",
  "key39": "29b8zdMm7kGovdMyEzBkKTB2yUkqLzS4g1MQfeSpJUKT7Z2mSRRzzUb9JrFihuLEZ9kTZvKfmy5PfpD3ajV9gTgE",
  "key40": "3RyosYgijAHGBkQ9xCeg6A1odjydziK3dNoLxFuDKpZqE5AFph7x4x7Qz24Pvt9oKujKMEoeyGiYsEeDjgYvTLBq",
  "key41": "42tuwSZDWBmM2jWcVc7utMRwQpiqKyxLBvrrDhcyZZMPhTA2phkXWinWBBLcdykT1FfPQvZHC2cEn2RRazsqEeJg",
  "key42": "3GCAKgHKztH6k159hcYeZoQNtqpWaT9yinVd8E5UiozvKFzpcLhzKRxamUvXPuir6M7L2YXYF852QKvVaFd2LrME",
  "key43": "4sbPHubbeqHEdXmQEFoByS9QK8xhQrnmWAHr9S5YqNAWYKboDUAPs8g332UEFFHmo2Nmc3bEVSifHr9TqreWFSkT",
  "key44": "Ja68aPCx43B7AxizTxqg2gV5sZvYUm8EbdmdmGEMzFFwohgLkGRmrhyK6SCGfS7apkngGd733JPER8weYERWkAa",
  "key45": "gSZyE1HFWT2Pb3CEbQq48LornZ5qzZa7phXNZLfPf21CxiMiUps62jffKqJd1fYFMDauHuD6sDsLNZa2uKsdCZC",
  "key46": "4yjfEWR7sHnsmG6TuvySRcPExLDFmKzSxccdhtPSBABNscZxosq4Dm8EDmm5a3WvZFMYGxYE2P1T8Y9wsqNfk8EV",
  "key47": "3V7ikzSxpt4LHURs7F2P4BzLP79c6HMLH6BxtGAD9SP3pe4xKnmPUqPZ9aKqhbeRh5BhWm8AN4CiK3r1Lnpy9YEb",
  "key48": "34cG5hd6NgUbUiyM2cZNSios1f3mmHssNZk3FqN56bg5eWD67umBMB22hgjYrFAjabyGcQfWyKRRNNLdAdGMQiKR"
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
