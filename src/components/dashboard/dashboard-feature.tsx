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
    "4winQc3SgemCRwFytzrYnojM5TRjYGPLBBH7GB5h67ZRXTJa97ERhYvFmN7rxaJxGRMabu4KP3KFEWUSUnjdfNr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jm9XiXbaT9KhtptXFQNLjhJs8xbXmrKMHdYA2YCutmi5wiLBWZV1WfhotsV8if9pfierw7kUbn7ZzoTU6Ec5oBw",
  "key1": "4RufAMK3GnEqddLFRPmwMo16V3pZobHKUKMxEvhNeNuudqMv7Cz273gU5LUh2TKmgu6Jva7xfAK4pp6mggykQq8s",
  "key2": "2Xs6oiVkhjD2GVVezGwT7joGZUXrs2eTjZQLSCd9NkKWLmD9bAozcHLHtL6suBKnYNe9ySCHaHvuR8H86LziUQJr",
  "key3": "7ds2QU7Upqa3jZCHADD9Pcibnc6UsqHqYZdtA7ZHgPjTq9yyFzUyCAqmKTHm3CvQwic9gRAS6eLBNDg8xdp4HVC",
  "key4": "2MUhUZweQ2JdDEeHe3u5yPqA2Tak5yPVgDpX4G4pmPzR4JV2VDfk3XFbN6k2tzqebKTtQYgnp7WSQ9JmuJrxJaVs",
  "key5": "23VaAWu2C3jdAGUN3STRGQB84ncJnf3iFJLXG2ykULfiAeqqRQX2JmtrCqX594LESM5kyTFCphHWESSuKwdae6H2",
  "key6": "5EsWjLTuXdzXkfRXWSZRtpriBWpZFwV2wPF4WGPkA7KfFQR8MArfJfc3KLBn2R54UKfWLwsN9UPi9oTgrQc3oq3H",
  "key7": "2vExNkdieuksafrhJaep9uLxkQeHHCECxmSGqUCe2VfQRsxKXG5ABaPrvHG22WJqrs1tuWkEioBorgqTVUfmZXp5",
  "key8": "2f6nyEJ47Rbdk3ER19Q6LZ6t2AwMuVT3hnPSAyWqzGPGtik9DHfEhPARPiyYefepaYB6osB2Wcw52hLCyedQxhS8",
  "key9": "44KvqGG8WYsYXXuck56f3fP8GEj8ta3PQWMDGbzz4UYpArspjoeSMTHgLQcrFPDQ1x8iGXiwvpEZEmXrt7za4TwR",
  "key10": "5reZu1k22ZpskNZAVULvNdVPcMjfyzRRDFpmtZjV1UYMj48yuaPepityFahUrvdJ6TX64YTWRVy9dyJ736QwpV4P",
  "key11": "21AcFxHfx265wAA1oeaiEwKCu8KamTyKnRTEDnHpT8sQWMGJso65BLK8QB16QXwXDJhDnbx2Gsxv1JumjLA43vVF",
  "key12": "3T861yq5TPio522vsouRv8SytE194oBmWgY61opWCtA8XKkBTsBeXXudX1RPTcErMiakY8DjG94nnLx1xdLvpgHa",
  "key13": "2LSoMsvYGjsDtkZ2AtyrQNJfK8ivQ4fDot7YMpvNYegUekCjsKDvnvLThyPp2MNS7fAXy9L3mSWix2Wj1aS29vUt",
  "key14": "54MLaXUyC61fhXub4JPWSfxC9ZLv65yWcbJZVYTxwQJXv4xN8rVBFJX9ibyaPHLCWASPBToebfCNywhrcAVNzAdh",
  "key15": "4dZ9qSsYAn1c6zdrSNhZFC9hsY99F6MecPEkJnFyJHg4NMBCS8igTW4wZji7tR1yTXw7K9quSbMG8gYbdVbUvuZ5",
  "key16": "5kVGKXCBZdKXxYDKRB79GEmxRCVXDMvDJimf8bFWV7zYcxHawaNVNpkxGLtGAz28a7kKcnYFVwGvdBHZX98sV7Yg",
  "key17": "6mS9DLhydgGgQg9DfVzbTGLkeymvsaGwnUyULctoA5ZynUiQgh3CMu4aDQh1ACsQTZrw1uasxBBx6VYcBA8MsEe",
  "key18": "aXwQrdB2xHQVJ3F4JfCrXRyrukoUWvCut2qqY1RwJcLxfNd3jx5NY45W7qmbhPJ3LCXycPQZXpAVL6A5vFyMyPt",
  "key19": "3is5xXAJ3GK2vKLAqMqRRRpbf5s4jhe7xBn2nDoXYXk2KVgPoFJBfgFjtXTCyvNpEj3cDDpy7HmuxPKYknm4Z9Ap",
  "key20": "5i9hd93CqDZ84yP1dFNPaNWuCV2QtNguAc7B1kGjkWYVKiXWcEHTQfG62z4DHhSJLqMkebPTTrqpNNzx3EjG2TGC",
  "key21": "395TuwD7zzg2N14r9kLT5DbBraAbCrnN7GMszQp3qzmg8oXsyCCT3T3s29Y5FZL5shjqEUG216FaQS7ui588ydT8",
  "key22": "5GLaV8Q7YzpWmcNNmiBFgNswAkQMKh4VdNr6UHaPcVnKnCScsx75EKhcCcMZmXyi2pkyJGDVUFPd8V8vKpDeXUKp",
  "key23": "XwRvR1k6b3GGh28U29ajvzXZiw43Pa9Q73g9MzP6SFEWaBPJB6f6gLf8qgkPZW8nXN4YhCEHY7YjqYCN2ooiyqr",
  "key24": "LbDDWpR3Y9mqwwN3BZTdMrGogBo5VNC6PBpYwBkPFUiPvaYAbppiHH7DW66GpkuP5QMwuxZN4KXRW5tds8WZv1o",
  "key25": "5dZjVqHtUvJHoZhq7TVvfFNFtj8cc7YmVzaipyXJ3ptmVciWTDSSv3Wc984t5E1Zh3UiemFUX534v53vbpzpnu89",
  "key26": "5vqgYX3GoL3dRi5xBPa3fdirXEtBv7sNRqB8wvvKqtbpLn7Z8JbjF4PVVppeCDxig1QnoVc7AN9eg7RocmZ7YBDH",
  "key27": "3E1Roxcidnh1fxHgPhdsbKoKjv3P1fioiJK3hi9MzzkPn9Mzpn4PFGRk3osbfWnY8KqCW7peNDFYYxVP2h2J15er",
  "key28": "2zUCmLYaF4WoNnGGyzQ1RVWNUz992Fv6kYoAnvmn2mmnDcAvWiK7uAxCR8kMZK4NDx7caVTK7bKNuReUcDcivmXz",
  "key29": "QUGE39RCxnMBbhYxgJCuXobfKDiQ6U3pLgBuYwce7CsTAKuN2GnKWfDHnDbj63rZLG8fnvfyC1Zfbvqqky9WfrU",
  "key30": "yR9UxUCSGUKqydL6Eb2rbJcoK2ujd44dQSd5ioWSTC7sN2Q2ydXuiT3gFkomYMQ2PZv8xbXF9ZHTdEsGpCoukFr",
  "key31": "21LHnQ3eu7zu4enQ6nPuQ4FbAV7oYczJKsSaKJrMQo2G7zZm7ZCJZTibJRCa1s31fd9u6vknWVFXS5dLdDTMqDyc",
  "key32": "4qTRspuEXggMipWmiAuDDY8aB5SiTUo153s5CJsn35CoDhnJUKNKdVsx9pYWFvivdEQMiWRDYWm8VjkeuX67jhdj",
  "key33": "5harxbv67eks5y3stumtiZHnWdHJCUnV56e578m3ovQmtCMNmMPXqb6jo8tapw5NVnpR7M2czmGkBtAWTcfrtQTs",
  "key34": "zWmGsFiSiQq2NN3UkpVrKDfvVv9JiqFyKZnCB1AuZJdGNTd1FtawpyvNqRC1dg4569aLt1rU2RmhSmBSXCQp6di",
  "key35": "5Ur7LV8vCxS6pSq5K8Zj5diB8LzkmCHVnNcR4Vbxr8Jw3f18BupevikDF61Wu8UWpw54E9sot1o3JZz6bZTZnwCJ",
  "key36": "5YQdgnRkMVJtobfe11Z3rD34VVRHkWSqiQjGyfCTUtmQzrY3p3PTxu6YU7u3xud6HN342MSCHZxZTiWRuxd8Wt2r",
  "key37": "MYCExbnYttPHwDY9aEqezAZGBYpKSdhUdGsmKMz7kmd3kGbFHCzi5umLJMvnsPUjL7VfyxK9SmzUjnEGMPAbsbg",
  "key38": "4imRWv7r4UsjCM9KLuRNjkUFUH4Xu58tiYih3UQPW8khjuBzeEebbW2wsP312cSAXvS2rxGQWgxDiQzsAy4fTThE",
  "key39": "53U1E1UbUa7PtCnbocnoHKA5WJXkQBKjaT2NvJZNRwzPQVS6pAD7XoEbaHaHoY3VUQnmZFHpxRyqeuezyLharaLG",
  "key40": "cNcDNgZtUNKPMKymWgPjDrk8a8nYd5Q9zAtumSwWJwhqwcpt7g2emd4ucuE4w69LXi9Pd3SMaLax8uBaVfxRuE9",
  "key41": "5RwHyf7rFHx5BgCCjDbDVe8FE5MFzq3KgXJGNoqxQ5d4qbhUE1gv6Di9mUJiKC7hsrK43xZn9928axVKSUyyAq2p",
  "key42": "2BPG7rX6YKVATSJWTWjGsY1EVsgpX6LSH3A3KTaMsXU7fCHFPGqfJZi8mLhB62yNCCGA9L8DgfsZfh3YmFEwKwDo",
  "key43": "2Gbo315UEWr9c4gMibFrwjqSgXof1k1EymEnEQukP8eZgMpi9jQENuHPNcBXR2E9HqXs9v1JFWweW7iuwUxJBWkR",
  "key44": "JVLFD6mKejbMdNZ8CVnjkYTsVQQdDaVs7DZ3WbpNxmBDe9gxoYSVrUMqywU12qz4CQFoANgF16XQJjh2HmPdb8g",
  "key45": "n3tPrMxGGK7RE5w45scGdCJfVLUarbFVKF1poKPdGr1pXe5FHUH5dq2nQ2bbjGFFtzGkLVjwWvzTFYgHM3t99bx",
  "key46": "cdFtSH2PDinpNv6Q4jyU35sTLXWenEvRRSEnA14RkDLAFAAwNokh9agje4NwHwNdcuKm9DUkdesvwaprTuDmQFx",
  "key47": "4jMPyHSydJkJMqzVvLm1hBa3TZHHfVAhA3YaM5M62veKZF9Mp1SCgFJGGu2VeKz8d4YTjP3XbmCbykQwGdxUTyDV",
  "key48": "5MXiHC1PzEL2XMpiMfL69k2eFt145bSpsuvC7aVkgFgCarANJ1oQQqyUfC1ubWfoseGYaasd6rrkwxV8DVGn2tRf",
  "key49": "5C4YS4AdPH6LhuSmw5fkesnGL332JEDcZaxqPd4ZgZ2g5U5nSTyktiki6oQzcJ1DxAEYD5Fg1fNAqSXCWiC5TmcY"
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
