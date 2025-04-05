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
    "5tvKZ1Kg771aMVLKce4CNE5AbrxLaJqRNjcs6AkTbrV3AyN3YpAgCsZ5W6FQxnGreFFhPTtq2Ngy4ootdta5TwpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nL7FnfXgiMdyHcMu6gsPHZp9GzeswfJdorxWgBqZMayCyKMdBgZCB8HPSTSCPoCXz31E9xdVgy1wDNHd9zskkcm",
  "key1": "3CRoMPPKkK3j2xCTM5fvs4SpYPUPUX9EZshCe24QiMkkfcxzsSCZwJLfH7GawbZt8GZRtfPHapoFaL2vZ5beWKvQ",
  "key2": "4Huv4mh9HK5yRNZPS1G9YaLoFwPf6GaoQA12BZvWL9YxJptW98FXfssW83ZKUCdwmFarTTE9Mr8GkTMTrtkJC6xa",
  "key3": "3mhegW1UrjuMm4SigPTdk3BnEvY1oSfrdpoazCc9hUR55UEnRGdbN5nVpfQ3tVsKJJ9GDfQsW9Lrur4ZKirFWN6C",
  "key4": "5mdBgD52DeeXEPaGCZPkLmZgKyxLMGTjHWtDRSraGY9CXLFmZxUXKzm6uZggHKEXNrHFfZJoYvBjKbM4EGt18JRV",
  "key5": "4JoGVd1GC7SKeQNhfxCKqY5g5QaRJHWfAeC9vFgyoVScqmFbga543pqphmBnTZrpWb1o1C3TnV6ELPgUN2gvbvpE",
  "key6": "Z4nrqtb3hhcZ7hs5eMxkAAMajevP2s5WGbEj8CTzQKiuCeiLKYbwT9ttFerTfpxwsangaAXM4EYCbatLwgzdhVL",
  "key7": "4uZf7Kij6RR9VeNFCM3qMpK6cNMSmZELM7XaDoeMwvkg2Re5cmHtpHWdoqQM75UYxxXfKSJW9jY3TyfddYHKvGq2",
  "key8": "5Jd8qFccaE1E943EXrtFzSsqkTvTGPxNYt6Yx7Zyg9FbvZbym9g6mMqk8eL27wHCLBDkmjE9Qk85ThXsrd5QbpBb",
  "key9": "3q5PVgdCNn2L3bsWiaHtPCywBaxXo8NCXpyfLkSR8ZX79ZHMkXkjMoYy3qwCLT9eAx8ttnfNT5aMhDkMi8g5fYif",
  "key10": "XePC1EiXfTQWtWCTQDux9Sx9kmG8KxNcU5c9bWuthaBspnFFmZB15H2ujph1rphvJzAvcLepocUmTCexRRKkSzX",
  "key11": "3jGpN5wp5xRmt2xyrCHF3v7VmmspgVNBVci8AxXaGwVddRUNBEptxKv2fovzUGfht42tehB4KE5YTG1NmTQ3qeTi",
  "key12": "xX7ra2u2abSejP8uSuS5eptcuu793SdT8FFsqQMSgykEzCQgYAMWtPRUs3t4qPyjPwp8nfZgSgGYYNgRREfRTJG",
  "key13": "5Eq7myujM4aEhzQbraGiUznUJmCykdvWYHsR1Cpy1DRWMQ4fnf5ihpX8CQwho6DopNUJn5nf8jBai3CL6xGUNYv",
  "key14": "23hvjLFkXVg8MmogrAgVWY1NQrvmWU6Qdbs6EKpesihR3fbE7VKxHdvEkmNKMnMaDgHbUmSuJVxwiZAxX4QvuXMU",
  "key15": "4nsL6HoG4fR7D2FGmmsL8MVpCTHK5Qkdmn1rMXZ2wRqVSM66KLkng8JiFavm4MqCSUPbaVwiMmiG11GCTN9u2puV",
  "key16": "5gLz8g5iffg1BgkthRyzr5USMt7vEqCWV4soqGtEQtay2wJRGnmzDrezTY49oWPNSrbeUP4im8qYqAATKJht63cV",
  "key17": "67WbyBq6AiywBpZP3FLBmjQzf97w9si5bbBq3rciqHsVdDURETMSSce6wKybx3HFEyaSUADxnCPNQQFqjB668v4q",
  "key18": "2v5c5BxER7s5bjfy9U4Qyuv7f8SCpXQ7BuXjV3jYGoAWYbCm4Pxt2RyEiSFSxcGWoVVUZLmi2RLQHWEVmsa8DxJR",
  "key19": "3HqGpiU7GrD2qsFMmmVDT3x72aLEddBZtPC4fsa3ELkyJeiDCxL4iPe7mxLRXEpX3W6FrtPUx4k9WLs6hmLN4gdM",
  "key20": "5PCGBohVFKHrNnkrhagstq64eDvXbfJ1QRVbw4vgE6LNv3SbS3TfL8zEjkGX4mAVQWzrqoevxFzGAVorWjSFCF5n",
  "key21": "3X2QzZsDBy3bRG3ZWqPDPHGNhMfncfohgZNwAYMfakGSY9vfR4RpWKQPuiMLPeTPNNkRHJfVxX2f97psxkVD4sMT",
  "key22": "5R5Wdxfd4oz6MZGnqFmY4PB5EaKpy2kGnRK8CNLJxMyN3ZYAkZ95eS2dt9FyLqwFua823Q5ib8wftbn4Eod59yAk",
  "key23": "67DrLqagSrmbwazCX3gwo9HLcQru7CAVXZH8LwzXm5MJZLmgguFWXxRtTAWFEEzS9V1sjbr4vVCf97r15v7XBjPE",
  "key24": "66Y12fg6Fzrib6iE6smMWwMcQFoNsKLJGAnjzJHehYpeVbMsn9BdpW7GEbeHMMaWcBtNamNzRnkkMy9Jya817AMf",
  "key25": "5RkWjz2s5QKGeCtGokVLxjD2jT7uHs6pQTHKXLWQMBb2ksS1m55DLmdYuXxrr4qSaojGh9zPptdfZiZwVCZuL1H2",
  "key26": "CuU9L94PyCwX6EtLGzaFbxPJdBgjWekGvqdQEVPGJazF2Hc7RRaKGJshTaVVaE4go5GSGRvGnH1MKLsgd9gr1Kt",
  "key27": "5CZFswcLzucj42UQAHYsfRSXFW3TP1rwyLYEPqPdkxgW7UtMp5ryeanLGxb2ws6yQhTdt1uLfbMn1Ve2HUVWbJEt",
  "key28": "35SX959dRpvafPkCYXJDGv37GFjg9wA88Z4bfXzihEKqgJnnzXMU8mkr46QmGWLbNWtfrQ7pMwjmLqTq5kZuHTu6",
  "key29": "3nixB5DU4vsuWsiLiyjbsuruF4zo6jUqBCATrBJeGPyAvD1jx3UEhSz31X97RtiANkZhosGTiP4VPgqU1Q4yokFY",
  "key30": "wcDaGVSZF5GvrfSNoUMh6Sj2ygYwArABSd5F2s7YfPCvUGRcLNPWVwBvST5u42efGuNFKr2o4Fih2vg44pQnoTe",
  "key31": "5ox9H6ddDK3xKA6PUacnYdDPTf1e9JpZXFtcbmHoHT4CTEHRntLeVQ3GX6n8LE2hB9D2sVKHniJm4y3ZwGsUdTJr",
  "key32": "4nJdYgXVufYmuq3tDgdTxTmakMVAmM1dY5yk7GcEyjHf3kpQLYdkmaCyL9ek1Gh9W66k4AnR9fwmqPQkMEbJzDpt",
  "key33": "5n6URSceCcDHLgSwfefKyJQHJFST2GwY1Y1dB28Acjk7tPnqS64Na74fDGzptvZoz28rTBPvLrt7obMAdC4Tr4Lp",
  "key34": "5bdnFqx9vR4GbKQnpBnMXbQSFHnjqPQMbvu4Q4xDAfkfnUKfBasVS5PWD61ENXC2wqJy8QZE4caVUxDxSShZ7jg8",
  "key35": "4fp3NXpGTE772VxYicNnM4FowVUHiSSRAu4RPVd8wkuUoBjwYQSoZyNqkvKoNaaG3Hi7SUmGoyWYH1nbpwbNCuXA",
  "key36": "4NZEgsH2qoy7nmqex6wEV5dwz9VZHNTJ1jNi78i3yc8pWR7WxiCfE5fsyvzqtfxpubykhbk4nxX6yAPofoRKGXav"
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
