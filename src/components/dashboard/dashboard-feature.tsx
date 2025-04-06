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
    "5raXtc7YL1DSVVsZYae5AvxrhLQTGeRWLVETZFvsTSudEPcYe7o6UjhKqckVBESW2AuN4uEQddNierc9kJoX7zmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUDX57nw4TadGQNBZb8WSictnHrJZp9sGhZaviKPTim71D5kTmTaxDe59GDkmHBN1LMYNrzrqa2Hy1DKNnqoYhG",
  "key1": "sz6qqRZ9SgkBmmUBvASEyShQ5FMnH8pNCxK5yvvT1Q4geJj2QYu1cKdykyiVqFs6z6qn3KNqXvaJNf5qnwhkYtU",
  "key2": "XQ67mJwbGqvSnYWcxkjUutXJU5DmR1HAt5kuc1yKPjKmGFM1Ykk8BrVEp8SviZnUMp3Y2uCXAYxSmJmyCXg9AZs",
  "key3": "3K71YGWQVbbvo3XTNNJ8Gygm9roWk6Vog9KVMfnUbJrXTbtSWEBMw3FbFKKExKxyAAkJJwPJrBqbp31QcQKNZhC",
  "key4": "3GG8EYHqH5pN8sJ3qZbw5WyFeSqWk6xyEWGeZWBqYgKNkAh1Fn3SDTCMRvFrC6DMDb7VMTbghgPhcYQd5qSBi1hN",
  "key5": "2bxzLLSNycsd4ukMtuASPGYiRNeDbcVeTpLXeNd21vPknD8NwPp7RqVyAgwsUjSTGbxe2JvCxGNGZGpdBVqTqBNr",
  "key6": "4UDErZZ8GvAoJ2qVnPeNm78QRPEGKyVVqE7BFokuB6AetaSFogXQ4h54AHEyLHcHi7NWdMGtXgzSeADSovoTVS4Y",
  "key7": "47jCZyU6Urp5iMcotgnDt8scxsNz9Egm5rBcvW26WQptYGdZRCt27RHqtYJyt6mmQTq91GEkkLcPky3LyMf3sf5M",
  "key8": "48CkoRc5iQiR3chzQwbgy2t1WLLzLqKJFmTibsEmiEH2Ahs9cDMA1tJxCiMuTekwNDnTQtEU1TZKxnvdAvUiDKks",
  "key9": "2pRKA7hNiTekPst26P1XijVTn6cgGaw3hLqxrZSswP4HvdQ6i1NJAbVnvJWsPRyy8f4FJghnwdsM2JRYiiCV3PVY",
  "key10": "3Twjg4KWojbqS25SC6KZUCJLT3DbsvNoDCEF35BoYkSqjmCy1xR3zpec7Wwry2xE3soL2QALpjjKHU6gJ9isZr2D",
  "key11": "3pFhMso5dwNPA8VJ2v6mWwyc4cmqsTsxi44LQAT3GSvNTozPotHsPkR24J4EHHZ2dK6QD2YGcmBbAEeoaC9PKX1m",
  "key12": "2tk7ZuB1r5ncPkHCzkAjTqHWNU7ujDZ4ptoN5hKjCUhEScGr3hTeRz9miBQJZ6spcMRrFsx2u2SS2pgb8xUBimt5",
  "key13": "5wkvi1g4WsR7bw8Ltja934PH8nvUt4w9gPrbjPkyTktRVqBuXNsz1TDdnsEtcfSpnuCWDM6dy5Sa6GdHhNw6QF1c",
  "key14": "Jk7zcFvACYZXJ1fABbtt4nkWkJSKtA3Y4JkhLvFiP2tcoe4kEUTNa9wz76ZR3eb98XWbqWL1DNnMt6TpGYV3aS2",
  "key15": "KsiSXufutbiDmnRbdnKSsMafG5D5GPE6xqMDozBYyzM3KEs1Ajr1WBUWdaYamy2vKFFsaRtWkhQQ3GAF3oF1vtT",
  "key16": "64ersEpr5g85G66myrzGke4GnHVpUk6phN4c5ZWtnc8aFdciYtH8vFmsC2StCtzV5sz5uBMVYfrRx2vtCtfdeRsf",
  "key17": "5X4ax4AtqPR3zJWBC3ZQ7xsGMqBjqCkuYe3GmF5et4r9kdAvVuRYQgMHRMexpKzEkeozyrNmH2y3VAE7ueaf6Ajs",
  "key18": "8jhsu61o2m6SxPwnMKzAGHxjqsaXa8Np9vTRvebkvi4DFKo5CjvTBENjUzU2xzHn22ojZA9AAvhoAHybiXdEUFh",
  "key19": "c5jLeKo6CoUcHUjU1heUL4XMgrUbpgsL7nCimgdn1Rybt21SAxFZSoZvLNtLXk113XnKAPezGhwoipditPdLcMV",
  "key20": "44UJLkF1HXLbRubxMM1tbZEKYZnRTjj6KghtyaaToLNJvpZoEd6ZxqdHfGosJJA7AjSpHbwphpcBdjmFMS6mkmXe",
  "key21": "2QLZSLSWTydGdUpGZBYb4aSMUfd2wg4FGqrjGrQm1WkkwUN3n7tnEtixAmqn4V2wrGoZ3MMUedMXgLRJuJfApQvv",
  "key22": "byV5XBtpsk5ocA62d3UVnnjMxXnbBgU5S4uxMcabZARzkcpjP1wpqfqVYTVnBYXHYFq4wWRcoUarqcDG6K52eji",
  "key23": "31KxC8vgyqhnHFfq2fjreb1Bu31Rdmmz9mGdMBRHgwSgr5M5pzLF3XU3wcMBGNxNdA7VeMxvTgnSbJtyJ9ANyBED",
  "key24": "4qxjUtEgaMTSH3kqB5QMQjLZNeMzf6QNRFTcPu6aMKgmNtEGvwFWGfkQPfjUs19kNTYgtqMS97aESSj52bqt9kTy",
  "key25": "49LTdkSxQsrgBvEwT7G9ei8n6Lw6zVjPKmh6X4GGmdmZn9g2Dw7VuDN2UA1RkNTn43cPsmTa41ZpThDpUFq6Eiop",
  "key26": "5PwKm933VDgfyHhpsk2rFbhPAxQ2T86RonxobfuCnnzgjZBsXqt6rBUHj9cBbXN2ULitjUkdeSeUeE7PMauuDeJp",
  "key27": "2cpYxESVifeTutToVWJqDtBgmwfHTiAGhq5VKc5Y5ERskMYnJpXS8RQbVwxEC6sn7HLx6YqRd2kadJcJ6oQLMz9R",
  "key28": "2v4imYkDbmY8e21kjJCMnCPo4rRyKRaWYP2y3sKn1tckdnSkkmYT8zFuRxb6eDeHw59j6aQVZDiFQbjDbM28vxeF",
  "key29": "3JjQGcu8rvxJ64RkHF6NYVsbmm7miuQZRy5gXLJLnc2pawCoMncMhMvzvvNN2BiurdcVjZmqAswXZUipSVL9Mfa3",
  "key30": "3Q3rMAQuxSD7DZpXEic1cm5uJKSNi56uN6KR1xpDYpmaUDUWNi2cAdyr2Bjk6iGyht5dkd5D6MWm1Dq7YzEw3zir",
  "key31": "4HK8W8dW2AaoSAfPwSH6iER2i5fybhVz7rQKyjuZg1fq6hWCSqBj8CjPxdAd6yBwsA84bdvgyPDa5f1sotCj4dpM",
  "key32": "4DfcGpsF7EbFYCTFTDqWQ5AkLFhhCXTCqXKkj3gDQPf2as4Mh9cVQGqoi1bZsH3gKToSPkeDTuF3J2P3NDZxnQWj",
  "key33": "v1ezmXoue5pQSZXB4NvNKaxNRdmkXnDRSZy6X85rybQQ2TUuQ6RAYHToHesoBBeWZRyWr74bK9m8k82eFLu4jDg",
  "key34": "XxJpHZeAZfjmobbKGThKqnSdvFFiqFedut7KVkz9aWQRY1goRUF4CbYHfSqoPLoCetiwqgVvR3KC3kBbtBcMTAf",
  "key35": "2UcTo5j5SQG5tKg3z1JmF5KX4jDS6kxDYtBPQXSb9zwQ31MpJ4T9Q2eZzBQbbMNehxrajZ9vKXDikTurJ7wuceH4",
  "key36": "34fXfCqYviCGmcmRaLCVNFsV3yhzodTKySNokcV1RmPG7ed5goxgfJcVv7kgWABTeq4zzx5cCQwbFD4hLrxnS53s",
  "key37": "5HoDfpXGkksncLY6UwzH42YqdndrZmpwzDHZg8vPCcLde7h85iqnBWWAWP75QuiUprAtxqhsa5bKH791beGtWkyk",
  "key38": "zT778JphSAnRgFchpD6TE2u7VrHsoumo5JdD4CE49WB2ithUbYmJbsHW5fSfwqrhtcc9G1FKBiwhHGEsp1k75LS",
  "key39": "1QChQy8D6ZC79xE4gu87swnzErxwWVRcM5T8P1TM34YJHXmZnxPtLyJWC1M2LL9tgcbcN93pnFEypGnr4P6Cw8k",
  "key40": "5DXm4tgZY8af64bg6sXjZq6UXyBEjBxaG9FMXz8FCNLnJbczdgBeWjHNbXPbSmkqCyxfRY6C7fDyMzQdyM8YFteR",
  "key41": "oKrkdqwcxDi5umTqUuaUTLhMRyMAuK2gGmQ8mZNcNJ67aiyNG8PtA1KGNooAGxAAY14HVMJiSeZgGFmRy2S5mPr",
  "key42": "26Di98TfLjkseAv1fxjofHntJr6x6fcxUh2LoQUwCGnQiGpgMvCKvUenAo95UY264Rj1ZPxkHdsHCTQDXRTtF6sE",
  "key43": "5Qcbuf52AfPvXjPmy7MT5pBF975MvgLQVCWg6xJq1PuKBdMXxGCsV6uQfqEucqGN8962nPVVyeWeKEDLqEtzPgSR",
  "key44": "2PHJT16YjUg3uqRCGbNYTKeaeDAFj6T2sj79fzyTc9PqEfF2dxREyv3YwbJtXL94hgBQ4DGKdp53DjMSxVSbWsuE",
  "key45": "5x46CHJCP6sdqW9o6t4MtC8y8ahDDNb49FG9Xf6SEkUixTtJCxHN1XQCb8pmXypF4YQraXPMthN6fr1kyXoWA3vV",
  "key46": "4MRAxVhNMLJgdtcFkZLRRsvMyyxG6TZ3SVukMLNu6MD6SAZviRisz7wzev6tsahKxGUe1K1fRYZPABUcU2V5BBLX",
  "key47": "4gtLoxfvdgpjGSiPYKUUZvjUFh36nMQQzE1wKQTWdE8z3SKZqDMij7tDvKGnorEBDgCjPTbyTBLfDq15tfhsyzpK",
  "key48": "da2a1rxZefSbL92PsYnqkgDEPukMZNPURSGAqvxiH9MLSRhP8pz8ZHgJJK3Dd7XPoZk9zzE4AamT2HDWVh13BWA",
  "key49": "53sDPW7FZc2PbaTmeV6oUAVUL5YdMEjFkAGsmqT7kpGziMBEw1PRxogg7zchaLRAxPmuDoD8qDFMbMm1shsicWdt"
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
