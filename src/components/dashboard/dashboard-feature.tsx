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
    "521HG1BsiQSUXUy66frvLRpveAAPSU1sZPvMTCntZyYud1xdLtLGH7tSXXf3noiFz62hWDgQouHgP9VFCpXdLz1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVCRoK3g6SV8N8zHiiCMMSgLXMujfoydbU7EK9CnYwhE2umrtLNq9X5wqx35sr8MzorZeDxYUBUiMGgbzHDjZix",
  "key1": "4LxBK4FydhdSeaP9wyyMdaniP7xfTLJ6QCXQefRbxrw4vfbsWmCM3yqsjoPBNqWZHDe4PiccSc1KR3E1Jpy3uwKU",
  "key2": "4b4YrBQTgkK93bmC47KeyA4iWyB4EPxjHm8gfgR2eFoZubcCqN8CTofAMH4KrFFynM8xKdCv4EvAspFvpsVQo3MM",
  "key3": "3XovyTziCDefhbdEmVQJvf9S8CWbGNfJ4qtt84AoL94B69L1Jnnxq4ReVKjoH2vqnAyjNx8XWppZnscqhCNa1nxq",
  "key4": "sj46ZA7C19KQkx9jgCi57V39km64RbsBrSRnjJ43EDpTb7unYn9VZeDpCuPBpf2pT9vbcywDf4RShh3aBch2N5Q",
  "key5": "39WfonDG1tdL1RsfMKibFgjoEtPEMFBoeGqmPbqrQX9e3tPoHot4PwKZSC5Lwod1Dtjzog3wehVNL3EVE1QHVae3",
  "key6": "55SipCV255T8rNQCQxRFNrfYf6YrMB5kWhG9owNazTzxyBDiMPsdhsCABJQPgzhrrgJUAms8X9AFgAoHcFR4dJb8",
  "key7": "4r2HekqH7PqLU5yDtK6URzxfEztJFap9jh4FdZhi2M9ZhrwKXxTrQgYDvuBAPDp8d4wH3Vk3jsPopTfZwFkQA9Qf",
  "key8": "5YjpRCRwV8EFnmrxoW9VYuJzaEdTXiYNUYLkqohVsVLUn4pvCW9ne94mucWMNdTDtsG4CgWfAh4kMSu2ktr3y2uF",
  "key9": "2vPfzbN6sDo29B45pCTRQu55MfGshPPLwkUkVFAHSFxxciwH4NRQmWA3YXohx8jn4qbHS1pUtvcpQKBhGAwyHHZU",
  "key10": "5gsnwo5VC7eEfGAUDWYGwzZALPuDeVPcBHPFWCojQx11EoRXTvNUTpLKtpExi6Wgy3peQheJx97htzk1o5J3nkxR",
  "key11": "4HvaWb22MBiZxceTGDNNTiAY6M6sYs7ughABvD3hxuPQ5zcSJt7HLFzt1ULNwAAzTY9zP4pMXLWF9DhtbMMidzX8",
  "key12": "vVdZbWLCByZ8bQx7bGGexBXUHCDR9yzpnfQen9oVzYXQWZ2oHRWddC8KVJMaPtXxFY1Rzk72HFqkDHmyoDBqrEV",
  "key13": "5Lkw3XfHGtsFZdVQQ71PzHFecEozF5S97eaaxVshhvezXNRosCFDSMAvXdZzEL72H5Q1rcQtwqo7uYcGCgJNeiZt",
  "key14": "tGvobxYQY5QkW4Nt1H6bos3QQAgWvwF6rX6TuzR9FmxvZ81bG1XdtBD3pdch9SuaQraE6kotZFF7W9M1yEkUP73",
  "key15": "23XyHbtNovzbrSzkVibDkwZCo7Ma9BYduN9inGzruKVEVoMhcHi8WME9iofP3ZHdbA4WDpKq2GH98YDBcKNPFvxw",
  "key16": "2KnghdTHYW12WzxczeBMQgDqCcw9rZ4EKoht25TeqGBx5LXYKC5f8jbcfaKKQ2jUZQWtSZdu7zbUTgPgT8miWupG",
  "key17": "3cAUMMXKrbc34VqVWUV723V2pk2yFTDZEzsXpQKfVyFeWbTyMyfxuuxs8m3qHq2zkPnq52MAAT3TBvvAEt5iKuAy",
  "key18": "2NqLUru4aLFWg43JfJkf3ViKcH7hhvi9L3F1eDctRfNa5E4THKNfu6NRJZW7AipjTkLA4D7jVnzuWYX76orBXpLD",
  "key19": "3qSYRQm7Mja65DJtzA1QPsGmX1zL59Gp7zAzeMp6fXnQLh5JRMNrSDV5UvA8kc2WvhxBVt5QLgUzs612SuPpGJPm",
  "key20": "4BJA9cmrPVS9hgxn4PW5Gn1QUkedt9y2mkiqqNncvFsDwLAzo2JtuHCLF8c9ofi35hSuq84gpBmv6rVbFyF2m61z",
  "key21": "3JGgdYF3Ji7jxVLi8eiZ8VMnNFzeGkJaMRmo9A4RyeuzzruLhRVTV1KqJgSS9tk9idxtLVnbnWNaZikWQoMPDZ2B",
  "key22": "5p2enbr2QeJs57DNq3aXvvcMwU3gTg6sFCJmN2uJZkwhhkHyErTUALPMWijxHc4VqDzFRPrWnnqQYbdTbnHzogYv",
  "key23": "3WnE1QNqwyHHXEjDMD17yTfeshTv1N6r4w1YAQ9XBgt4s9tj4ge8N6CeWvujMPBErjagb4Tnp7bNJCqHtc55yQUA",
  "key24": "gaKKnqjsXFJHkNZAw7UNg4gPLSM6Ftq5rJsx1iuvWXHTWnpHUvNNu51qw4TU53LJ8nrnN5jMs8B3wzoJCMzzB8v",
  "key25": "ikzLfb2A5uWCbTQCNubb6vLdQeUsqn3pHjquyA38GdqHsK4h4qKcN71HTSvPKZ1CoFbJhKSAM5mU9HEKfR7mqLD",
  "key26": "2Zom4AthsvpNupTM8uB4N79FGpknzPh9bnytJakh35nfN4DhyPD45A5gdyhbXo5GYNhQkyNKaVjDxsw9Yp4YJRhj",
  "key27": "26gamXHsiRLtwdT5et7UGbbDpmS7xDnk6i4zjA1Po8zxSM9cp1idiAxnamofwgcqmj2tXfNQcS94L51kJesdKAwL",
  "key28": "61KJyKcRxkZ8o6UcGHUWcji2DP9tNfvNEBaVfdqQCKjTstR5cb1vs5kUZubhRs7PJmme7x277SHHL1SvUVsa5G9T",
  "key29": "Ek7dU6WLcHM855bCg46fLMxEaeRqfq2vjFBPsYU11YUn1Qoeqr3tZfbsCdUeTbcG7vtT8PD9jdRPWEWGAxci6p1",
  "key30": "4Y8BALsFT1T1pxGaWn3FyhkHGr5v3YF8ERvqFcvHUyQiwehWg1VkKrGroYD2ucaVa6TXr2dJBzVTyn1HkZTQCTcu",
  "key31": "5Ffy3TA8L5ryiZhKSwYew9w3nZxmhyCJDBwbGsJYBmStpkgzCB9JDXeaJrvrpYL8pFeTq7ZGLqyufTrRndTsUd2k",
  "key32": "2UiVn682k6pmUJMhYtN1Y6ntpYmoNzUDs9RkozmcXKXLboHJmnLmkzWbbHgbHNH3DDqmKzcy882jNN2W3WGzirfM",
  "key33": "3pss1U8Z93EUdwhfZBZ5CQJazBSrpQEbdgZhMEYYSv5jmReeegF944b7Nn1TzmTUnkn74Fre9ocCMfe2WWqhd5up",
  "key34": "2SCFSBedGMzrcrjV3B9KeHMQQUsLYmcmYuDf8Wii13VDCH9191KtVQdfa3zFnGwQspHXcL6Yj941RsaaRoGygtPo",
  "key35": "5SJEvvZzrAVxSdLBRizqrCsTSzqitJoXynuytoVD6YpwVUevwZKfF4LuWJz64AUGkQZVWi2rnvy1sJ6Eh1YaXkQf",
  "key36": "3Fa3X5gpxqgmbJkPtHmsrxjE65J2u3z1VCdTHis1T5siFeYRyiY4hHiBZxxxjMVZuyf6tnR3qegpCgvtCG4PGjAV"
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
