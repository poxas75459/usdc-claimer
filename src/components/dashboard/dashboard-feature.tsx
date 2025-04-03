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
    "3yhtb7AugCDFiPE27D27CmgH2v8hQPDG8P6hecFUVXSsmgSabXoPH2VBgqHwREBc6rxG6FbhwEb9whiDMhVX3Tk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39aNotTqHDTq8pEz7kfijJB3yAYDudvaXikivkEYQUheBKPL2TtJ8w75xgjug9zGAFFGxFTNBC6e3ATKdCo7dyFY",
  "key1": "3NK7YrFK1rvHH78xkXPh8t8Zq9q3vDgabQ4xxKCZJ7Jmwy9mHoX4fhJ311AimdQWjiPViPW17oayEFpSa2mE8s1P",
  "key2": "61Ca3yxaBaQKCcrL8mwHNJtHC11yKyjXvetnVDXzS3Y6UWafwKrY37XvqFDjiCVcE8rktc8qtuAQN782TCEPPU9e",
  "key3": "4Vi3Nmj217hrT2MyzA77kFVeTYb13JDrWD1ARyCzwZzzEo69YwNDEABst93PJM64vhVqzkWsZ5F17JdcUrwUDJG",
  "key4": "4HescTRiGRm2wex5qeQYwLVTgU1oLXRWNUTGx5b1pxX6sDrtG17jZH98LB4e21QVfhg95XhDD4wKXCgjKsotEVNn",
  "key5": "3acaSoGdwMeraTMkpyAXEyuKinFBBR9irXHjUF3ukysQ97Wf3ALhmG76xFttG9iq8mgWR1hSqL348M38hBFVuMsG",
  "key6": "4pxezC9bCBdPRWf7WAMGiAH14EK22PLDowrvWwWYWVFKTQudYbp7aHRpJrNKwS1y3NtGWW569VuiryAWrGhNJT2r",
  "key7": "2UEp5HzMrfdP1h481Q7cBZu5J4jTzQgVrhp1SrtJoNXtRQWPk7LU691zpQq3KdjqVu87yXMvdMPSfnf4c6ua4Xif",
  "key8": "56bpSVykd3A9rPAUtsXxiJdZc953tJsBEFBXu2n9AyBLy5CCPRFLNU1pN3ngnfiewCXSQtSqCpn1PmPPFCycu7MD",
  "key9": "2aLEhnbmbEB1yZhhg7UY246PMhHFTZPRbMuqXgvJ54kKjQURgdPDytpscJRUWKQiMw5xtbi4uq2d3GjEmAHAEaDx",
  "key10": "2Bp2xWCnzqJhVFt11gbuZJHEgCWmM2aRUfHXXYYZfABsBsiiVvLifiBaCNXDywKTDbtxfEizcbwcRvJF5NosYVYP",
  "key11": "4FnNVi6Wnbc5t2vAdazWAnXj8rWdqTbHZX34zs1NLDmTpx8rHpKyAqZVHeeGsHh3z4uxkBWYvPhrPuUZ8kc1ZTqt",
  "key12": "38U7D1Er6SiKmGHHHonn8ib7Y7v7WurpRvnGV2zU49nrossPGGUZXxNJP74RcusKXMRM2wyPQcEk54G4oEbWNyBo",
  "key13": "4nMcaMUj2ZFd7nY96D4Debdp7yM4L7So29cqLhmU638NYAC6fmQWhrHecpwR6R5eNFkpwn9sVaAzmoEH3DmC3LWt",
  "key14": "3LMH68UhW1tEHk3opxKQqpM48GL5Wv2eLP3BGXFe8UQt2nE8mYHZvFHemi1Z1ktNSGJfagQxf8tiR7np7r9Dzw59",
  "key15": "3H1Gou64jLsJiA3iGUDTUtoRurNwhGK5ctoDpm33XxLyJZuBcRvmzohttst1asVcXUFnhRzTBEz5JVBgeKuSvbzw",
  "key16": "55hUQjXLFo2Gy63MymtvkCjG7tjkkqhWaV9u82nrkJZVmfotDQHwkia21uT9UZE6c1Z3UR9CBcJvZL8QoppRkWXq",
  "key17": "5TRa5RawH6adV6LnX78D64uV7WJo8cGyCJcm7WnUJUuXrPjWC6F12G4xohyd7nYccSrosQwgwJbZR76zzzwqhwbX",
  "key18": "4R32peYRc7FjNbs14pCNtU1PVUVSqLe4q6bYhfH3Kthb8wMZ7dAbhk1XS8iGoKCc97wJUuW1pPjSodaEV1QPwsXB",
  "key19": "HU3Wto3MXB4nrZjA6rxBo8QuVHowSYkPZ9PngDneGTRzN97tvd65H1VzCfGL4ggeuJqFd7J1h4R7fWxsm4w7mng",
  "key20": "5XTYa4s9KJ25puCArtVLJWg1jm1p5ebLRMZyNPMxCLd7sfmDpNfBHWVbtpGEtG1p4WXbf4L3U1sE7N3dzz3aRes4",
  "key21": "21tiSrM1XtNLfvfiGcs3t1HbNb729PLJ7da58Hb3GqsZTa8tnD8ogfXpqGbDvpmsptHafsgpLKBVu2dTc7VerCXf",
  "key22": "3Ez1CDbagpipHJtoLaGZB1ZusWSCMRJocKesnq5U7XWZsZGbkNSvqUvogvR4gDaSoRbnQ844BycDBfoCSGNYWgst",
  "key23": "3rDqVboqwWEaV7Nfgdu1MpfV5CDjMzdG7UvkcexpgyRM3a7Udy53FrzXPCATHCRcSVrsa2DSTBttWUKKUvd3qLYn",
  "key24": "21uWRuvFz9qMKXMsPZ3WxTfH44PSqQM9ysM3Gyp91DuBtAGDDStNnCVb5gCUcKhEydbD9wvc6RaHZjufYYsgNkfE",
  "key25": "3ebc8BnNxLvVieba65FTkHij4saaVtzMAjuBJXs1T9urkqmN52bozC8EB3EUJachH5ZoXWWuFPdLdrGcvSjjWvN7",
  "key26": "u3EVeGXcevmjcgJLLxRgwvKQgoqPdCJ8FQbM5kLX3hQNAv7VqemmHygXM9oyuWQjxu6nfxxC7VV6xWy2SAyQxPi",
  "key27": "5J5E51PZPrFrp9sHDcNXvh465M6Z715dDZaWxG1CAZ9xSCgydr8HDsEZstDqLJZ4w3XHfvsrerkHtRRhYoddyzyx",
  "key28": "2Xex5EL7UHkfDcTvFoDitXW2XJByypceJPAMHqZ8bPay3dwaPnK8y8upwDtTVPbN7ZQ3hrX7hw4FWdtuVqJjfpJD",
  "key29": "33enZLwWaLQ5Vp7ZwYkkwFBVZfSoESo7fec9SSGFYCZrwMQouJLbxBdTjnsoL2auTxTSeixKevgYFhetxVnDgxPi",
  "key30": "9C4CYszP7GKBNB54LZed5Xn4Fon83PN5DEPvJPZUW2HQ7PkQnTUWNZZkWudnbwbnDM8JDsTBz1o1jNwJsxoX8jM",
  "key31": "2CJqKjUrhNPJyGFdWdWshfKNBHVF3AHrHAGScQmvhFQuwsULtBMMx4y5v97HZCYJgafmbUj14rCaQk8j9e6JAsnA",
  "key32": "63BVAuk5fiD6BPyh76Jtu82CNi8HrYLaZKVzWHWhSCEQtfAtLGFnkHHj6UrQB52p2h3eCf9KjWus66N3bpXcC6Gf",
  "key33": "4cypsHWwRpYysM3PryFpSfKSaKHa7KxfrA2TVBiZbqTSmfbA78fYMpyeW2j7ifkWDLcsrM5niZLNzDswZjogYLcx",
  "key34": "2UCLJjZhLUJJyqZcyXse3W28XQDyA4UQbhjpqTK67tg73ouymW9SczKG1Vr6WBt1gERo62JG4X1PbXFTZw6pqa4x",
  "key35": "3cGeFE4nKsokhuawtvTa3dwg8kwEtVDyXEgqrw2UF2nUFNWDV77fyqCVrknWDuSNucom95o65V3uXYKmVyWZwx8p",
  "key36": "4Y7fjdtj2cQiA5UXGUCupGq75LiqXURYbFzvNAiq5JgHveTPcQA54bAocratgfVxnZ6PrjboqoXnKyPLNBCwwD5t",
  "key37": "31faWotWi4BoZjeUnoxEYRnqJodWXr7gkM6xLi5pCAoW5PWjzS3fwfcaTL1YbnMXtZ71RsNsqaugDGrB9QMst2AV",
  "key38": "5BX8McEZtawZhdRU99taCTGptGTdL73ymkvsGR3f3LwLjBPUxj2L2zHPM4gB8DebAWdu6TPi8y17jLoyFzF26tqd",
  "key39": "T4co4nhfLRqUGGzZvwWFDfEZdVhUaCM8sU4b73cEw9UdkhRg78qevW19m4FRssWEefUvVYeJwg542sxRQJZdLbz",
  "key40": "5wMeKzEep1PvRpJy19Mg2V4oP1U1Wx7vmm76vMui79wNo954dAqQpiX1NGwoAftx6oNcJ2pbo4HSPJCRsNXGNtFy"
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
