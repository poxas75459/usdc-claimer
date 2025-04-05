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
    "5e8ZDEP3ZmbxDh3QeqnF18xweRJcYVRWpZ9c797bJjKyjpqeZVfXX3HrnYk8nsnfZuDHMEx5SfRDQ9F4RiP8UfJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZurPSZx29wFtukEUiKESB2fCRnQzBZinSUD2UaLKk5vo93D7KoSDSDvvTiHv4J16tCJD7QiaepaHX1XJqU5kpko",
  "key1": "5AemEpztsYkq5sJ2yx5eKBQkiSM4y2V8NetEsSwKzubnZtrqoLn9q7dz2X3ngN7uMFKzNEgCLHwzUJWy6tTBYPXT",
  "key2": "5wcxHNwMomZsuymkVPxPC6iWj8JFN1oYdNzV5LBsaBQe9vMmxMeHWkzcuGuo3pF6SLTxWaQNVtUNCSkkV4SWeuiS",
  "key3": "2FQVdPyCL8jz6vwdCR9qSuFBnFaiDsQuabMpgnReGDtRpBinZhCLFz2AEjfK2BkWXHMZGkRcZfJCujPgLsnfUhGq",
  "key4": "4G1akHKEucAAuexwE8cbuHUKCFp39LuLwd3CzfF2ZzBRMsN7pRQwNZSpB4bRCmm5FCouXQyCGAQdksf9DXRqmRPP",
  "key5": "3aPgEuRYcNHGTrZRpKHTCSTBzvPiQBZh4qpKiDRbCqsAfFSp3cmH56J1bKSujugNtXBSGsRBhHjhML8Pa7EL1yWD",
  "key6": "4gsVCbJg6dhCYFo2YFvhmMo2pUeBdX3Gr8xhukpoLuuefSWxCVj5cMNC2ZPaLx52zpVqS88d24oEubFx2CQ6RDFv",
  "key7": "bhEjSw7g6q26XjHQgxB6aWtyrs7jL1irLYHAX6qitmnT6mBF3HS5EMgD7vH2VAPJyUpaaKw2GNLnGz45LSQshhX",
  "key8": "3nDgvWEeoDVg3mwc2am5MeHZWrB3mPUbaAxtgJu3ALMPo8zLHVU11A7ipcPEFUJ8W3qqCsEbyEvZqV77HFmZ2Erh",
  "key9": "aAphZ3Co1oY7f6ynhraDqgGzahiLEN3aHjTJWZhe4dAuo2RUH1cqDcCvcEPfumHfe29uC2S8ytaotQbFaVZ1UMM",
  "key10": "4gKnP3hgWk3gNdAUubSBE8EG31Yi1Rb96o9KFv1jdo8K9nSsuP9U1FgpQAzyNt9754xResnRATRXiXt8S7XWsULC",
  "key11": "481HHXCiUfJJPA7xF5XMuHCQVEjVioxNL9h7Hq6M111heunnEUqSapZFpoyJNoLGVkhmDTNP8CrM3eptUexehwjM",
  "key12": "4fGBTxGA1GYrGZwpJcG4zmzJ5iRL5qf7yu8azXHstepRRXTtgEqqWcqbZg4ycpSSRzz2cHycov11dexdX3gnSQwR",
  "key13": "52gnhM98HbpYCL3ffbdeMeT8AJdnjJ35ddvPazNqiCjTFf66Bi4cQguBgNhMEK3Dz8qXdpoNwAxm4yAHacPkRvDp",
  "key14": "5upTXueFBZJvhWv7N4r3jAKEAQNMP8RKEwt8CUraTk7Z6Cvwods5ugh96c67tgCCVyAARoFqq5oTi52uEUQWqnxQ",
  "key15": "NmQuRJ7kJXyRLydenAsLmmRVre4u2J7KHVHUCjJe98YLxyHrERz11GjLPF9kcvKpcbX3qmcxSswQCQFhy7wVTTg",
  "key16": "2haqVgALm8Zx84fVTq9VgAiNux3VttYDjtd3HVdpeLxWFZfhwifdsRrRJB9T6oh8bQop9RUyRpZhic4zTSDKBnvn",
  "key17": "5T9k9Fzaja9a4KmxnCbdTLLozNGexqVcChipDrSWFectt4gAboufYsWUmEAAdCoyG3snrFjSvnPQQYikSMS6RNEJ",
  "key18": "48DTzopUxSJ8f5RyaJpprfRCaTUGpMvCURpKDJFcHQXfW7dVr2HijNMBuf77ZTjZ4KMtmBKWCoJGoLFx5ZsuNp44",
  "key19": "21oR5xSS94HuSsetc7hovkhS2tjJ2CcxMfAYiTDyuCiUXhJBtrFPh49U6BwMN8BVDFUMsDrTrJ8p3kVhFARSKGaQ",
  "key20": "5CYKPVbpbXkVEZaii92uB4GhsWm8nqCnSaNyoiwWQoCTBGTZjvdCMSRnSxaAW9HgsRvSTf6AvkwrYsfzrhTbQLrP",
  "key21": "51a3D7LS115KhbUi26ZtErz7Q7FDiBUVNJe9trfB3n6z4brjL6nhzSTUj8hEvgkMBGx2Guz1ffcvpuJeAfy9jsup",
  "key22": "26i7qHyM1pHMB9i58tb4YYC5bYvrScvPoDmc54TdXYEYigmafmAnNjjnmw5GeSjJ7D7eQSyna9Y2S1D5Zob3uZ3K",
  "key23": "XbQYSGSv1xKGPQRtK6wN2jYBHYdHb65naxe8253MS2yWJntJ2fwAn6V3sa2v1FeuGbAMc8TdA75gf1QfFpPyZo5",
  "key24": "gxGoLsbBJet62YeN17CMUfnjVd9xWhfaPMXcxJ4wVJAzfc7cFJspgwqVg5i8kLjjBbFDYBxe8LMjWrrehhB9fKB",
  "key25": "3cNMBQB9Tvw6mQvWe6xU4v5gGjF84g4mHBAEK5B6U3syi553jo1NcXTgGoALAq4MLqAJWJW3kJUuqo1CpGNCBN43",
  "key26": "2ugNMLvteFEcZghw2s8NUb9MQ9niGe1ZhuCQ66UC64aVMrZy6fMs2GwPPVrE8KvvLou2rjGUoXyMbtuyDZny3XDB",
  "key27": "4hYq35J3U4ggEdTvnwgWQ5zUJzyciquvjug5ANf6UAWmJimNa57gGraxsjJphBQCVy59Rjjv4ptiCSCMAtt8NVnH",
  "key28": "3sxChinFUpakqR3GqrNbUzWhUy2YstByAcyFboBXdFFM9RwdzecMDo9QakYnvK7gggWJLfHudmaSV9DrSrso7xSH",
  "key29": "2gg5PYPgmVJ3iyhrDfn81SRZEF5SifuovnRsbetngSwk5Vyoignv2gbUpAGshQG9pSsskfe5oL252AUX4fX5zPC9",
  "key30": "58iaj7KT9FpQ7Ue7jzUVPkmpUqBGkmaCWjR41NULBoGAv2zrxeLro9SopNhFv6PMGEeUU5fL9Y7EPLDVt3rAtqQS",
  "key31": "4Kt3Z34f9Cdowp241k7QLT1hZmfVure1n1pq1nrpmxLvgspXcLVoFkmDofEEdMtMK1Wf5zeRK2gqcBr8BaT35wY8",
  "key32": "23DmgJGmEiEWHq2vMDFM1PpAwCZuK6GpaLvRCQNZDemNSj13k4tB4YNA3sBkhRjcsbhk7d4EPtwGFTko4XbirfuW",
  "key33": "4ptR4M5XpESb6iM57B8qzeDSV94oEf2B39QBks1bCwbsbNLFCn9DYQvjp3wEBYs9bVzhn6KvYMuwV8wVzGFFq7U1",
  "key34": "4p1j4REnP9SCbZVaHCiy6M8rGbrqtcSbPDj256GAF2hGozvMmSse1zy97GZSeJsT5MfgYLBjr6v9km4ShZpdvqTg",
  "key35": "2SnbjcYMoE8BPs9NmCB7aXJpnuP48oKRmJrnu6QWrqUKp7aWzYEhkvNjLBh7h5rgTAGrB3dB11GixgzfqdF4uodS",
  "key36": "5mBZP2Ztm32qVDHe51oq1My9CSEoWjVujvJvr4DsG2tzbXudTMTpjnFaMzNSun9hk83Us2NMyR6bij5dkdrxJXWS"
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
