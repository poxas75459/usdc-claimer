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
    "2pp3ydCeVWB9sN1vSFsxr6DtzX2y2J3qiQGRYHJFqHQi9JPGupEMW1W1ADWVSinZ6fDNBKMp863pHJC7U8Miw6AN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mu7mwa6KUDpFLmq7CMdrqftYfRSoeRPhA1T1Yn6KtWw57uLmT2wEboYxkdZfroY4dcheuMkjYQZEWGPyW9K3s3x",
  "key1": "2wLK9PW8wsGouW4PZ3eLrLWtN5VjRH2hTtzhFqQfAxaasCpg3U7MeUDAQ5tNtCcfi28nYY3X1Q3T1Fx7CMC3B5Lx",
  "key2": "4kDZaEVPpGchF5d6GRpcjjtA2fvLPcXRtywvAARGw3EjJJtuKUryqRe5SMGgmrrKm29JQg5eZQ2kByzpeoQXWAJt",
  "key3": "37v6Xnjc1khTKt3SMG7aKTmAS8dQDUMr43H7o2FsPqHEdACMMxNWHC6KTDqpQwwukBU7MLtcScikGznB9YQ9ne6j",
  "key4": "5fTMurjf3eJRvy4Gk6VDwTSrhQHXmT1TppGmr72qiP2MwCt869hWTQEzwQ9ywcTm9C1UtcQ5Q7qQRTktxT5PmoiK",
  "key5": "4n9sJFBnFvgv6w4TTMpKCgWAzY6dVXn1fHvjMfAbeQN18kzD1c5TSKtpvkxiRHCbiCvkKtW3L2f389Q1hzGrAUvF",
  "key6": "347KRFcJTPc3eQXQFJpbDQbDcVvQ6uP8n9s1V5L1tonP3yF5pmcD8A8u4xtpcrMc93Gm8QUpKrEjAkbtnMyWWdKL",
  "key7": "2b7Y14n6u3qThnxCLc5AiKEgpw1XH4D4jMM1gQZSjF4KSiLoSfgsoCPUaf3XYrezf2wyg6u8xfKQQvMCjTtiAsTG",
  "key8": "5DkiqPdpNy4utzxEsr6WfVoWDXT6tUhJ4xHh2D1ie7Ys2Ep41VjQytDALBuf5PtybQNBjXjAkzBSZ51RrDvMuBxc",
  "key9": "3zhtahYgTEqWxQPktFKAS63nR4Rc8BHfZuxvc2DqKFaAYkG4pTULAR9kuJXdiFmRmFT3bduXjnDEjDg4z9EAdcUb",
  "key10": "28PDPstG9G8uCZm4WAZsu58Xao1tgXHtgsDV7g9atLGwNcWk93a9wqwdRwwzoSfqrgdBhkrXB17KRuoNiL4ttT8b",
  "key11": "59wTNGiFpaz59rbCPVVZzsyVEeWKCFryTMQpiPm2BXxfMWDP17yCvVuAKsB795gf1NwhXkRYWGGrBQ3P4kmTwXrN",
  "key12": "4ftiJ716as5s8GTjFFfEz3hMVZnjhxdkBtiewEGcFoiJs8ZcBqK62CBNnZFVLitnzbncb3R8fCHRhm5ZDzg1DaVT",
  "key13": "3pYWE2CtPicxi7We9fdGE4w3uJ5QWaUfTkc9J3nk6o2ebYvwCNpc8tLhP899GBznd4odVcaXw8C215bRKkg2uzou",
  "key14": "2hV4kUNEYXsP8YnNoaeHgqc2oDJ8WTeVmVMWHWQ5SiG7ubHQUWEjXHwTSqFYQ4BKvBJeC9SkqgDhwWcnx8LAMsRv",
  "key15": "3PjX2h8RKoJW6sjr7VkTRFxwxAsjCfiCUH19LMnDjdXJ6pGjpp4rYJ9H3BseXaM29aTyxfYLiFsHK8kKbJswVthj",
  "key16": "3tgwYypCYYUkFCgM43Cqc99oXqxyxZHKVkD3FNgDATHs7GNqmYdBUmzZKpsdTsx1PEX3V2yJWsiEkQtUWfv3t1jP",
  "key17": "74JyedR5mJichYiZKhZRH7DnQPr87iqQ645aPSbFkATjbfhb3gmoxEkKHC7TVafZAdXxYiAY2Xps82xLtDjy2sq",
  "key18": "2MsQf76T5fsVZcPDVmPQSaCvGsCzGkpZaeHRsUqy7VdeEQt4mqdf4QZVD4NuquJhcmKsgmrNJhxGw2RzcghV4UHn",
  "key19": "44oZ47TxALTKhwwckcEWmjqF3kVJUypLQwXGGLNJVkCVqCunGc8YMBUF1FAHwwCtCCDmzL38YR1YEUp9wdtadehp",
  "key20": "52HBKEcXcWGEmemvAKjYEzkPPXezHfpQynoz5WLnS5xajbbcmhknPjDjN2dy1gJG64fwQ4gqH5oAF2GsfLaf3p6b",
  "key21": "8pcDmxEWJUdWxSLSmiBLkLEFrUonPfAUoKVx9dJEEzAsVoafxk2gUjNfQvWda8RQEw8zMJaZYTYRUQ5M8sPJw8o",
  "key22": "4xWkB9p62yP1BZRmGJ1GgVD9cJGE6Lpi7pbqeFTYgCD2jrro31HGKyT8QGXzeeg3t8cjvkrpJMr5i79SEd7dCCkt",
  "key23": "3JhmczR5YLCzf1qxaHfT4USzzLBrfCJ6Yk5ux4bHe8QqBPZy8c66UGJBCGtKRXLnmT2XKtcARJ8gwjMGEux8eJit",
  "key24": "2rjiPgLD1cUoVt4efAHUcopE3ndUevhCt61EgVFhU2r1A1L1QdSEqUPK3nmmQqQ96vRCMCwcNFq51vFknYnTTTT5",
  "key25": "dnGWbLX7zpUBrXb2PyMHw5xkMKrFqXmKBgFN4mMPmyUNhKhdic7iAhFXYGhGwedk8zzZqK8pc17bcJcwbGQokg7",
  "key26": "5weZMagdGyzYentxs627qj9m2U1yUjwWJu25XxvpqZUS8ief9tRtEuhCerqXvXCr9C4MbGNwP4bxNwcMnMxiZSL5",
  "key27": "2qbNuRe6SvW1FofyyTGFVWQJah71qMrpJ6vie78KkvtjR9Xr6MVsH8NGeokeisD7MXLidxb8fPdMoaWGv5sU2gmT",
  "key28": "53YLFm2B9Yi3fteSzQY2Zm6vkH6NQsCkztnbWPUzVJbTXY3YNoyhTpCrYB35vuZFnUpmZGe1WGDFNBrcyVnCyjef",
  "key29": "27mLqq4VnPtRBDFsaVsr9z7TSeCQnmTjaeBp8gsB6SVUTritPGTLB63rRUFKXP6CMi1c3BwkQgRi8h4xryVGsosG",
  "key30": "3ZVCHHf7gd2xm3cUHfyEdV2Qc29FeSQAjfmd4PVXfrZcKyQzBeNuvJfNDxyyesKj4cC3gvqpqDTWeCZFXR9xtaqq",
  "key31": "574AnaFJy7tWjy2dV7XhQJ9nB9NV77KVoAJ8i5n3bkaLnHmsdFqbC5GEaJys5hVcZUvkCkVbQ1P5MH53JZaC5WyM",
  "key32": "Tx3dP5ZqG2bp37ug7p4UTH5K1Q3NSvKTxYUjJE2xuXvaUmypnZdBWsUTnnU2Zfjum4HL9g7UnggXe1UzU16XVsi",
  "key33": "3EKJBn939s8bYSmssU73NEY1RGHymMagbCyChZPyM7xn4hPTTWpWLL1y1VJXdzWmuX1jHzvaQLo6dD2mpyfTGvm3",
  "key34": "cuRu6fdbo3S1MLsvV3UwmXnANR3UeqRjSdWCRX7A6eYjtugScPmxHBFKNRVzc61AsALEfTq69t7GQDfDzvYfzhw",
  "key35": "5LV6xhZ3KJvt6Kf9WokhiEiXsrfANCYH17JbDcVhfYnGk245YYnyJuo73cQtdbnaVfq4ugmZDzWrr5gTBgazWfZo",
  "key36": "3LeQ1UKKMfhdvZ9cJD2dockevkdDFUWToi6reYLjCJr1e6hbsTh9zoosu2mDtrj51M2FmCrFMR7wU1UGq5UTfCiP",
  "key37": "56H4Qfs9BWdziHMX3g6qdxuCkJHkw5LYJx8jeR6Umr3Qh3mtEv7c3sh1cLRPcYi49iCjT55XJGGW8EhdPQtpJ1wn",
  "key38": "4tqg4er4ko8eAkCunRf3FzsMqzQ8t1NJTkr1Vikbk4VyHrLAWANEeURMFw1nV55nMsc63iPmHZU7AZ6ci6xVhSEo",
  "key39": "62fyjFPyGKPmFJWfoFHHcciq79tXTJD64vxEbCL8gp6VakmgvqxXa2nVhes2A6ydwp1Cn9gbqYiWfRVfrbgFtPL",
  "key40": "45Nnzxi8zpaM4wo43fbNPymaZqWf6u9v3z4qinGrQNsnA9WEkqEoG9gg65ruoih5ZVCzJVbeMQpDxpJc7LX6QYy6",
  "key41": "2FVx8VrDMfQeJtEKSmmC5nyFp9KyhMufzTiwCycHHuiqdPoeCxeKPc4k9i1cFdxvnGNkC3iVXbt27g7NVbhfaQTS",
  "key42": "2mqaodVGzCTcZGNP2UsvednZd2Ys677dVsUkuCLfLeAt8wmhLGRpZh6k2oDTMrAJrRHmvRvNz3eymudL3BTznKfu",
  "key43": "2Bm4T6XJdTMr5r6Ly24DP9mzTRET2C55ktvmfSBEFDk8unKMEEUy3upPdM8n1hnUGzvv27JoC3p48VtmzudtPXhF",
  "key44": "4oPxFjQLUYwjjZnALL6fmu2nQNWoEF1Pc15z5v6X1TTXM1Tiy672MgQJ8E84h51P6UwaWR8HALHRZDzgVTSrHhC3",
  "key45": "3N9NqV5MGMD6dGyEQGnv3vnGyfcvnkNhT1isM9jsJgATGpyDy4jsPjPsLZfzSbf8hJAs8Z9FmkC4LNMwV2fwy2dQ",
  "key46": "TnVJVrjEnPrSKf9mSUiAcwp9tuapAVtnmScLetpgt9YwzALDCSvFRUpyKd1MdGtBqNBpdsNai9s2Nz8s8GqKhks",
  "key47": "vDTtsakmDearAeKJQzozGRxNNEitBZsroAMrv3etL39i8ks735vw9N6tewDP4SzfNsNntQBMzAPTnkXqDKpYgU7"
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
