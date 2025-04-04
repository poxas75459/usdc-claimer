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
    "4NSFf9zMpbERmgjk1UgSaN93Gj3ZRutw65sHxbuJujJF3rvm6osd3TYpjfaXA5MY6PZicaF5hkrFqaaUaA25jK2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWraJpopF8qfTjWxUxzpBLqMZSLj8nh4htkcTKRL8FtbuDo3mhhpP3bNiHBMn3pogj7CF14RjD3wJHnTd4EVSFf",
  "key1": "32eWLWhtyRjUgwa8AypKxz5sGnmJnfdp8WwXs3YRYa9PFue5RaY6nT9oawmeNoUpYbPcTZJkF6dPa9N55D6hWrjj",
  "key2": "5epccEL2Jg6ojygimT58bf9DQt7Pxaw9v6cuGe1xWogLZrQERpkHptZGZQdYwoNnTHxRvf5ZbDLTKjxCbNzJxMHz",
  "key3": "5YFEr9h5cTe6KHDW1CquYumDrbKVxAXd9CZVbVaooLTddkpVQaW8ypwvcxtuc1w9893RQ3HfxfMbWQFvKgqxKNZr",
  "key4": "4hAykpGmUzix4xnAc5fHvZmYNLxTk3Bc4xxDQSq2LA4sNDCTYftnLhb3ZETqwLNwM8EHs1VQ4YPCxd9fdKmJCVwP",
  "key5": "3VnZAHKDxqoAuek53rTv1Dw2sxPhxSm4FEGiuGVdpvZsuoAbwXHubyYqCiXKgm5gJKgHvXL3pXbEXpTeQD7EFBX3",
  "key6": "2UEmSNKdqbwg9TLTTa856LyJaR9NWPmcavgHD3wymU1hkhwoXfZL2pRe4Ut9bzJPH9sunxzTdLsZ26nNAMBR5EBi",
  "key7": "2qsbNBs6XhAe7ZypPs4kXWK6vC3kMBgpNoB3kRrbcH1wLoGonEGTrKzebfg1TYrWrRYTnJQijsgeZqg8oQg5YGf",
  "key8": "62ENMFzKEC9zHBDeksCV95wMze7zGiQXVUzS5wJcULUQGcRpYvgijKp4M5vBttBSm5FGQtcWrLLzqs7tpUpTi8hp",
  "key9": "5uqPpZ2o3ELyaiiscp938GVz75EUWhFzf5V3goDPkWdeDdBwS5x5cdcpx5mF8bHgqsz4BoV7KWhoVddKwsUvfCWA",
  "key10": "5gieetFaBiYkxgvWREnBbTY8CqM77eg758XoGLWoFRxn1McW2QQcREYL8kU6nVg557LhnVqcAmPu1cSiaVyJ7rFi",
  "key11": "4rJJuaFDL9CaPKuk8mQWnYSbKnDuFrY5PLgGWo9YDH4RGUhJwd5YHSvJSWu9UJUTErkU9mCX49Qem1gW3xwVWSKt",
  "key12": "7dBV7P6A1hRzhktQPvRmQVATvmdr71SknyFvjeM7XfnBoMFX9t8TZcAgnyV79wyZmKGaSN92L7HJF46jszTBiRp",
  "key13": "47SRRZ9tgwEY1h7SVYGZBuJWu5EnVa8CbHF4LGMU3GEGLk14L9yZYFTRNjjCqe1EXabwuPx4BxVVrmiFQzefc4Jv",
  "key14": "2WGC4evgfXEjHfTadhbWXqe5ocYrzuMvm8n9PhKpUiYaMnEjDJa53FR6i9yiSwioe5HrbJCotRSGYzidV3MM6Lib",
  "key15": "5Q9QZJDijyQ778tiBsPVjZKA1C6x47e6X7AKsyjks7gyTVG6MgiaMa1HRSWRg1HTWqxtETAgvFEuSNE9EppN7tfZ",
  "key16": "27yqRig2ydbxADWw43KbvETfWTqMJURaHuP8KXcfmTEMmw9Jrm24PRHQAYQg6y9KqCsiUzdNvuY5BftbGJnsushQ",
  "key17": "2B45Z2vQtxVLjdMJk5Aod7XanSL6nz36pXDRQsgUYmEApdDBdoixdafVe8jjQGAsP3rHjuxXjLz6YhcRNyw97nMB",
  "key18": "3C5tuhx7GEVgNDvyT9pyw6HV4BonkP8hyHMDvwkYErBarDhqrg1D1bgmudCRTDmbZR1MuZjaVZhwQ3Rwssp3io8z",
  "key19": "2Kir8n3Q4vWR67kcdcUBzCMKECh1UkrDHB3qidTsfz71kKYLYVmh9peznnKqPo4KhVTbvy7VxTCJwakCRyc5HDK1",
  "key20": "5BidfB9XcTHvv2VT2m741Xh2PMtXqAdF8sFtYmeS1L2VXYHgWd3vRmRusCETKJEmMS8dkQ9qEsttnuWjhvsx4QvG",
  "key21": "32oAVzvJRXjErnrdD7c4acCo2RRNAmCjDXJj994TgzS1drtxVFwiEiS7K6e1tnz32YURSCcqhMauD6oPiTSfCouM",
  "key22": "G7SkeHpqymErEYe1MwghxmBPHvyiW2umd3SR7wMrdQNicvm4eZZeHVTQNC1vfvUHBJipzL7V4jBuvBHivVppgfJ",
  "key23": "52hmA2rqgUb8vnJ83MnR53pMS1nceK4JeSpwJd6kmuZnPP4Bv6KaupdmLheoCd3XoT6pH5XsxJwzh3fc33LGxMPi",
  "key24": "vk8EeqAq6q8FqUCzcbRUVHek2cBKAf6h35csDc2azkquksyxzpfAVxU8RKiJBCvG2thcmY5ccSdxkQUFp9pE7SL",
  "key25": "3uwmet5ikFHv6Zhpie8biFPsjbwhVSXVRJMH4YPmbvHx3B7U7r9yEmj7hikcJS5yEbu8aw7UcmSshf8SAx8N4PiF",
  "key26": "45CmvvFM6jybYQy9svY4pssnbEdDuUnjyb7RfawbuJKn82WJMioqjZnFmfNG6BTmJuTBZBqLuTafkDXt2nasH3aP",
  "key27": "mZNkQCfF2XQT3ojpkX3U9ZzBV3XyzbdsbMRbJJFuL1iMvpKy5CVbTKZdVhxBznoyfJQT8EYp6Q1WSH93G58xj6i",
  "key28": "pktsAGULqS9o89vrtGfgi7M3NgCujJ7KqJ3V6VRdEj1EmCtQDNkvJ7cMGmSRKJLPL6tAM468VVTWRqHBo1BqDDN",
  "key29": "5oe5jH2bbCPcSeL7JspN1VjejsthcXG1v3ow1ZxMVLrMzgphgjNJG9TSyUg4edqzEogj1xFTJ4nLXuEssVUozhp9",
  "key30": "9HVM3DWLkyQqWZ3boBoCFxQuebvno6MVxunNu2dPiXEnKYsSirVc2iWUULZqXrsrq2mTYXmJkJVbhnVMA8X4Rk8",
  "key31": "mW4s3h6xWt2aTBvsSTf9618qFMsffsg6nELSxSoebB8fZJ74439Ahp53AdjwnwFG4oU9GsDVxaeaaLb6sDWgVKV",
  "key32": "2CXc71q4y3LrGMQsCDVuHbxRBdNeN8BP2tNGBF6zzyQb6sZiHfZLH2Uo2MefjfHLgJV3CngTapzyj6MXbXMw99RS",
  "key33": "5F46zTrB3JXBRv1zxCzMDzRT4jrCAffacACJPQMQPSmDcLBwQ6VbajVXhSTVqvz1YjYnd7HexvcBvBkVfx1sCfUz",
  "key34": "2QZh71txsMUxPamHyskzvZwBMYdvgxJn4Zihku6qfUk1sUqqFDUu9UWksxXVfgjPoeLiXw7gXdFDiWXcQ1Mg5bfk",
  "key35": "5t3vCe3NQYDkPXM6Zbrd2PajoXyt678Bsv9iLMZTanwvKDTEHqMdpUx9U2P7D4TiFf7thmor4Kure5rtnktE9J6m",
  "key36": "3gzTjpFDYVQSPCUTMPzgCMgghVRAPxJwk4uTrdM6c3Eu4KVw2LQ4kiLRo4kwFj2Ff8r7omcr8EZfUTHrXcN7gkVA",
  "key37": "59PnVD72n3vo4FZ4c7bMWZo84zBJayiXgyHpNDJvGJLUECXNHBqxSwzktky6yUcA6YD1fb3Dm8eTzyDyEwDSAo1j",
  "key38": "2oEQppMDy7F6XuvT4cQjNsoJsfSLm174nNvACMXTVVYZ2J8v5UWDhPgPp8CkGSmsfiNhhuFSnPze1wLJqSE3BqcH",
  "key39": "524cBRk1D5w6AWAyB7MT2XiUbiCcNj7ctA9rsi34WCTkVWechaQ3GnJjAjDN1PuRpxy7Ygc2HFJ8udokRdPTVZPM",
  "key40": "4fCsPPpFZHHESMNijoD1kZfz7uJ5iDYzHuU1JaV4D7ejfvKCeqABeDudv4zAbk7k8BgN4nJrbZiHffavDKzAihRN",
  "key41": "3Zmukv4sQ3DGJgHkSw7mKAvpy1uzZQzgPA1tUq3dYmV7yyjuk2XsPeTvD9eLuWrKap7stBrQxk7ctZ8TSFu76kUq"
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
