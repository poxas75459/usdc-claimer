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
    "3UNxfbZuYGdttx6R6daGdvFMny4pjTUGys8m3ap7qUBNdCXvxTg4de3W9P474hinSy8K1vEGX5ZbhiVJih38rRSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anEP1ETFCkYLSCfwyXwjdLjsSt7j2PjqDsy7nNkW1PmZZsd5pVmxQVA3krxdv8jf96465Fbwx6Wpntxv9TyCc8j",
  "key1": "vhXNNJLrbsfLLME3ZvhGYnRrPHKVPDXK8NjfYP3y7uQ5eCwQmY82pPJnrGPxzVywsGcLoo7ooJofGkJ3K46hQE6",
  "key2": "3VvPXoB1tK6EJiNZKGmZexwcrZJ9uhRM1PdVGQU94v9eCxUhtueUzziuLe5N9tQNBbiobptUC1y82q5pNoiu4wEG",
  "key3": "3yDTQCV1vb1ks1gEP5h1T7nLsqAma1gVPWB8q9MsgyCoc7xhEyyVnBHcuZ8vR5aMpKC73uFYEPYKmnJAVaGe6aqS",
  "key4": "5bakvaLzDzyyDdNsCDoX6xCXDF6qnDSPdJUZygDrmJ2vjPF9H6UhQB2189CRcynX5VBroDpPK7FtMP34QgiHgMH2",
  "key5": "5U5wBHhv6RpAuL6H4X2uXY212QJKqXn4upPATWXWaBweRFGGcUF5mh3iwxt3ApkrLjv92GR88X9TH91YLSEe83ce",
  "key6": "28rMro238Yhovyt5BtK5qajh5oV2svPRqQXgUnZqmetXAmuuCSWSfcQ7LLPUVa4qGuStZfocED8aXFa9SKSRv8fC",
  "key7": "5LLWnZEDu1vbczsoS5X5c7JCnAYAPiTgpEUESZBUoJ9996Su6xAMcn36d8q5EbLDCvcHbXUHgchy1MtBLGKDu2Yp",
  "key8": "5yVzcw2fhC1xavAVppZzyPgzr2YhNyXcJ2afDqBUZFPMywwB9CSvbbhj2FxS31qTPx2ckPUGYavey3cLktAiag3C",
  "key9": "2MbkupoWDt9FPkCbZK5ohRABsZPfqZokoD9eDhrwYHsaKFkPnAQoUhL537xFHo8ogwghzdTTArQ6uGYVGdPKCDF6",
  "key10": "2exDr2jnm4k18FNAqDaKT4HpwhdQRoEi15wMEJi3vicdFHmufMbpgTzujCDQaPKjhL1D7KiRach7jHKtB8Jbaxqq",
  "key11": "28HUPmvRXpGwQkKzqiEDqQiwdf5cb13FRRGL3cML3TBTnpt4rncAoWqpjS9cJ24nAmSAyNaoguCDCTdFNB2c2kgS",
  "key12": "3wpCUqkrFUtbtUryDa9RTYMzVJyhen3FTKjjeSRakemU1ZTeTB71smoX2f4vwxf9Ki53dp324iV6coChAX6MbrUz",
  "key13": "F5ByEnwmFtyguwhUXdGX4QheLdchm62XJsnp7XuNKeSbPKg1FwRbmyQhLE3Zbz1ajSMH39nPuLWGFSK5meGAtC1",
  "key14": "2TnCKPndTz9y8TZEdhK4TBNw523zLSXVwf8QFymYcezRWNxHGcEEapiaPcDfWcGPzM6cMtgxD152NKAqr8CSa4b7",
  "key15": "29fpAC4TLXQxkNNR6jmmZLYDsihNT9KZo8zr9ed7a8qVuwkyqwZaFf3bEtE9Yt9DPTz8Hqu6rUfQzB1uWrF6gPRV",
  "key16": "5vyoCKroaQgHFjABrqZMaC3VTkycn6LgPMeCUzH8vvghSu2iuiTMubY9dJURvPdfHt6b3pZPpBbqWQq5qADL1dYp",
  "key17": "3Q6qwfrPu4NTLHgztCVRx21NhGnrsz93RmXGT9WwwcftFw7snubaGFd4mNmTYkB4ho6sJuA82v5wYo1K8HXyJqiF",
  "key18": "2qPDRPyuiYdBVosBdzLifurK4PUgHprnpuELPhxbofLxtvFhLPC8d66CsqmPMWaHaPogyEYSkBqujfotwNeCB3VA",
  "key19": "5GYJR7nEmN38zGh1onqwaVQnXeaMy1URfMmpuiCmvwsPctCsgi9NyTjcjf5VG2qw9AovLXg3Ag5CCsS5bRXE7BNM",
  "key20": "bBzXRDZzkBVQsowEaHDxcinX7TBrLmNm1cUigtJup8f8qkaLuXwmpSXEhMwHTRpoWee7RH5hk3sUc1WgU7YXb4R",
  "key21": "3M8kKCYbqasFvTpN1nfotWKCeFc2UwnzgNVPZRZCLEfVHHMRb224eL6UwMTUgEjicATG5H2ezKxPD6nTK8nc2xRs",
  "key22": "4L8KN3xmLEn1yz4acuuBGzF6jgnVt6GmAor4zm914C5oK62qAgLXCYXrfS81vu1k3iYmCidzhMnasGQRzgRqUtwJ",
  "key23": "4aEmP55NueYu4MP4pFFvPXvrbR6RDH3gnN7f5riuoNUo8S6ASp1L28VeHou5R3hJdtYhTaDxVFddWSrVPdqCvwMq",
  "key24": "5wdNur81gMUj3Fhy1JRP4aR3sAhgJekG6rKDmR28BshKMTyyKSXF1RucUH4PLyUbE4gGvDs6ubPb4Jy9kuBYRCCe",
  "key25": "5sRHHbAUYXhdFzJwjnvvyH4pVPEfo2msFKgJZNbRe245Y3FHZwbSZjyFSpBvKoS2c3si8uonUnEpcyY8kbadgQVh",
  "key26": "482aWGFMsrFy9xyqn8h6SEtMjEjM5P1ATW2z9vuMJaMnYpy4bsGzN6b5CjHKgSsmQ66sd8mhiYodVhyi8GE2b1qf",
  "key27": "41UQMSsxe2SDLYoXzgGBdxJ9dyyBck4BCwsZuRo4tSD2E9KQ2ttU6hKwGakQFXH9y6z5WGo9QDzQ55tF4cyjABsx",
  "key28": "2LMUskuzRHerzCvg4LrAtWv62xm26V9qcZJRJvtitjo6g6XFVKexmQYFST6zP6PwJNRSvunNBmc2zuzgJu5SMgfc",
  "key29": "488by59uKeH6VDzhyTfg9PLHpgxBajW8sQfn2oJQed1cd57Gh7WFP5yQfcZcw8GtiBrBckjkdHLnTURpvQaGjJYu",
  "key30": "4T2V4qFbY4DXqtsZhkLiv8mgL2MyTojpMpydszP1whWsLuiTToj8mbYgEPhm3ia75w6XrjAuru4UFUdDVadVyhKv",
  "key31": "iJSBdQphcdFdhgKnwdbwMPgDfSMMcpgVr6PddiqQ5XxrEuNT2LNW9nhd8QqWZpgrKvYJGFJ1DW3sWpjv44M9sSb",
  "key32": "3fUNHUSFdkQLyb5wbgxCKFqbgDbgbUEb18puCwbnZz6ajSffDqoxd9FbYyra6H18sy7aLvsLpbTFUzuCQoK8iHyj",
  "key33": "362bXoUatEtgDeaYr8ou2UHrAsRW19P6Qaw3utQCez4ogAtS4hK9rZx61HVmGM8mrGAuHtZokDVz2gvyGAdXyFsG",
  "key34": "5uu5NJDtvdY1Mbr3jatCYxAZLVCQzj2UaYhtfpjbrC4PTesrn89i3DSPmWaTw1BiKoZabp2jdypCGVCMAXpquQLB",
  "key35": "4CL64ukiKkXBVo9Bk4DKM8bxTZA7yebL5NV4sbqyDeMG7T1e4u2ciBKYF112LDvN2oKXw1kvv3ErVrYQb2mvqu8B",
  "key36": "nbe99C4cZr5HGY6jDn7j9nchWtHqm6GecHqSLF8RHLjpcNAUaSSqBQG72yttz2QRMF1gkn9wnATPiE873h9KMdr",
  "key37": "3HxGZABZJz6Rdt2bXjB1xGbLVV8ZNoSwA5z7uRcqoUaZmttnnjXZgHFNtwss5gJweM1LgEFTHmYKwcAKwi8QjbGh",
  "key38": "2HvR97CSDYubquuwzNGSWaUTm1cFrCG1R9w8P6xLJoLp67878EkQrshoXajPGgJWEGp41LCDvBQEbM1jXyXk6E2Q",
  "key39": "gG9CaKCmKdsNBW6TMNcdpxkgwtsDF97uhkrGxQ7wSoSYizxCnPH5d2GngKCgDtZ6DYFbUDGpzju4dLHTQfFiju5",
  "key40": "62SuigNNFTC9vPmnCmpgkiq3wb2G1CCK47cgS9qqaig4tD3qZ5g5MD8DoPZndmwRCmwPyfKdDnLb1XPQi1HCrqcR",
  "key41": "35i7WJgqzJhxr2SMLPs3ySSSJfiyj3vRJ9zR3ZC7JTss8KP3VRXTbWfZWZPggr4FGcuk7HpMuyqUjarxybJoEr2Q",
  "key42": "m9LkbmsaQRr1FeL8YtzRMhi6NkE3JHmCKTu5j2peXbpUUnMMTejcTcZzvrPeCMctwbt7HiaQBvfaHHJjr6YTzMc",
  "key43": "46dTePqFEnNX1RTv64L1SbWEBH4QnaLC7Y8wdBNjjbyftyNLMWVRXeFtyyEY6yMcTCixrENVxoaec9iMfVsK1ovA",
  "key44": "2K9eugB6XMaW1Wh2Tc1xGh5JVvzwBq3Abxv2PJejSrKPz1PkmqYfqRnTh5xoHrBiaBaJUm35mN1ythy3zVEEDpAv"
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
