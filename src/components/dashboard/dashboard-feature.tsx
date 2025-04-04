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
    "4ya14ho5JFgtxA34rm8kfLAb2ifkHpieXzdKHW1PGs8FCVAvKRk3KnH9kiY5zANVkTyKBLRrdXv86gYp4USkspZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGJQWStZmMQLXMVqRjjkzNLDRaSsHZeRFADPDocCBSzMkxC84PhaPTeh878MKhKgdRqT29w2vdrLqf95cyUTPxt",
  "key1": "2BYWV96t1DhaAJjZtw6b1o1U28EPy9BDVVBQLwqziPe9ZkStgg5HKGk7G51zjHZWnXJEhRdKFpHPwT46jBS661SQ",
  "key2": "4pDsUTd6rQNjGmQvo8bsVvXdGUXh9j2vg2TGkGi5oWiWywkLPxSK6TS9nCueUjgJTKeKmeLo8WDtbD9ftNFJnYLR",
  "key3": "3yAvUAnk1DWbTbf39RDdxcUhQjcph1bDb2xsX23QJodtRH8KnXcDBfTPiXmuWzj5LfemM996GrVvzUzoyaifenQw",
  "key4": "3rHo9MKfAxWTsaFMihS6RUvB9Hb6upjz8xjSzBY12wUBUoy41EzJ8uwjveVP1rzHu5oiUw8t3Bp8xFjqryK2wCGJ",
  "key5": "2uTK28oVmdXGP2Y2VYkJvVC85i6242akwpH1xiCZXw3wi5M1yjPXhvCKY8ycFrGv5yPjTpJa1Yw1wVApbXteEBoG",
  "key6": "64aCWUNs4v2f2VfoBoL8FRcuHs4WpUvz7Sq7o49o2DEyZEnDzN9yPXWXFEkkMSdmRFvR5KEHbn9F1RkD9AzkNi2B",
  "key7": "2ZELd5XsujdGBinBtV6dG47BPaHDGdE4tPbmHM8s2ya5Lc72BfkNeUA1CbaKkMNTKvthb2SadXFwHmP5zuK3GAXa",
  "key8": "2M1RadBoj81Fmtqbo9VmhYx3xJEczAaT4X6k1xja48wE4XtkQEuczUycunSBeM4DB6Q649wc5WBNsYgaKWH747rt",
  "key9": "5hbCEmqum63DZXDcxAJW48DH5FmNKmdi4WnPwZPm2i4DeoecZDYohZywcx1vyViL97zW7QoXzaVRsMoMHBB6B1LP",
  "key10": "5p18vKR3Rh1vCRBLXBNQ8P9FsMykScXKU1dH8JEwmrAwu7CmaVBA133qQouY3jj7tk6VyY1vwa3g8Gkz2Sj3JNb",
  "key11": "ynovwVJ4LQCuWsdmknXtpYQmuEcnxk8xGwsfDSyErMsBYnegRSr2uQnXLq8URd4pNLCGirrKXnigNUAGCkfgqgr",
  "key12": "HVv9hmYDz26D8BXFkLTXFR16o3y1mVPXfZYnnVmAw2hvMN1hqBFHHwrd4oQnAAjZEumT6jF6ejmkAX93NcRgryv",
  "key13": "3UamnKD7dbZQExD3KMoAi3EVdifgYdVfRkyEW7fw3G2q1pW1CF4uFjL7kNYjvjC2M3yQqAF9gf7GKZDZubK8LASY",
  "key14": "5CG7rbcjJ83GqoLiDDsfNRCiknvHnyEQSon4ZpcdZoFqjqJ5d1BF5AGxAGu2o8TY1GVjriGYvhch8XEg4Fq7UMUk",
  "key15": "vJEeDTLyVZkWo4CTJduM9AfRJrU2mR4KoeXQs7n3KHbqYKBKqPEm8CyCkyHFmqyxUKb38dGpz8eUZCmSqwyq1XK",
  "key16": "45Y2s6SK2aV5ESpviLkLjLhnqTCx95YYMjqZvzoCbY6jgiLEVLDzCeqcBGrSr2uzyzzUoWtTYA4LjfhLbSRMFhUo",
  "key17": "zy3P6n61KP8WGb4DWsHhjLYmUdm2ik4iiWsb8SENqd7rxaGPMqQWBc5TfMyqLyK1W5oZQn7mGCiAUzzewHbQ5q4",
  "key18": "4jZgcZMSqsm3uZm6hzcs2T9VchvtyJ7obaek4uaTvQMzwRXbSQ8RykSVaZYix6cxsPAKJgz1by2jLAmFN4n4wQkn",
  "key19": "ayRdX9K56QpkmtUTZpDCfDsBBn8F9ePDEzx8xsDhQ8SY2PB2tw9k1ofLuQmP5o5ntRNcn6HFuaAB9LrwCWoNofg",
  "key20": "5jVM4XvVVNbQcz7gJLVv1M5X1jkaKu22L6ngacTuKKZaqfkfgjL6uW2mhdkCKeX7sTKuTMLtipsdTtBJDiaRMea8",
  "key21": "3kCrF8a8eDCYdjvZ9EE6HSyafrQF4ZaG6FDh2sCgfGHK3oEsRxTxajsqhQ836sLfghAVGc6xiCx4exeugGy4W2DF",
  "key22": "26m7mXXuuQyjQJ1qoHayHrUSAHX3XMrFtChWiXfGaJ3VfeEdHw4XvW5MQbavsTb4bqiAdzLFkV3LC4fMCvZtgs3e",
  "key23": "4ihS9zTmqvELLQJUq5cjGT43yBi6Te1nx7Yq1JjHQxTrnpiuUVa7DiKHe5PAkofQjVwVdg5EspTzDjNgFYXRAbh7",
  "key24": "2cNM7N62E3wEXaLDFYnLWJFHsC14fzxVKbF5AoVVPE7yUAiq7TLqQ6avA1uNEK4VzpC7h84UizKVPm4ydnoKJvd8",
  "key25": "c7ERjcBfXn4ztsZNEmXY3hY3LV1gVtsmbAz9vt9xVeVsc92jCnVQDqHrX9QNHShpj3YmiqYDFT88VvJG84WXunC",
  "key26": "5D9269G7DYdR4xY7Xyr4jCTpo2eeLkmo8sHwYkLs7TSui1ESVzmRmywGdaaGUSFpX2CdUt8xC8rretzsqj1YBdss",
  "key27": "62HJoHgRkKqsHCqBvH19q3bxfbv1ZNM5B2ueihajMRV7s3M5LQwPxPGExWvL2PYvbh84Liz7cPZcxWCSzQK7JXkj",
  "key28": "54CHJqUMb9TqWHptihcCTFJw7b6QxAv7EZNTnQzTyt3GpNa6pQKkeq32BoScGNRxiTZz4j16tB88smF3Aj6oktBH",
  "key29": "34bBuuCwKnXw1HhbMqHPEuSTeDneZ8qnEQC346imbjF46pTEMqHfySF1cmNZ32XtTp5qhmCmwE3rtXqsgtGJcEv2",
  "key30": "2mBtj9tAcB3WzZTtMHHd94jtckkzta69VnAL86mEjN3GXZrgJsp8RkUkEFV94x2HBmEgtHDXXKyTa2o7qd7vg2DS",
  "key31": "4Qqfu4Y8jbwsiphTFvZZeL6ZK4KUSeZVNG3U4RzqUp1WH1UnrUGweH9bUfuYQ9BQvMYFCdopaz6ioDJJgK1hKgRJ",
  "key32": "4AkJ3FNVTBFog15my1cZ3z6sgkUPrUa1q3ByctszqbBcQjbB57j3Jdp5Z9vWhj8VGCspcAzah3Yqqi1DUaTHWca",
  "key33": "4sUr9LEdABS7c4kVzfQbqEyupCuaL2upWWtm8wGQ6ZGfVU3pLttsXj8i9EsRZU8NzJvWY8SuF9Kz5R6Lkj34eaM4",
  "key34": "5Wphr3x7AbHZ1HH6bQFyVNwN8LANPGy4sGLzKpCzCYRfnV3VUkqPWcb78yiMvNemyRrDTjqtnoACCmkkzSsHjaJ8",
  "key35": "PhcYYHcSLcVwjf2WXcar6PU5r93VrbEwfMCuMhWfPg87Me9zjQttE2bDHXna6kUDSjoKQjh3Z6KiAA4nN9EKJe9",
  "key36": "2gfRw1TgBBXttRRvxb74neVYVKpx9it9xiHcBNbTXYnMBebCYKs3das97MxCggvkqtGEv84gJ3PjcukSPne9py9g",
  "key37": "3LCNNTNwtEWjGVbMv4otvajkJcLZqm3c9LJRaYksU9ZF6Vj8ZmzRftQVcmPFHqhwRXbbrDm2X7nVjJvFNKLsunvq",
  "key38": "3SBWizoAjrtERnVw1jibTaHPnHdCqxAgiLxbHiXBHwqFN8SsvtS96kFyuXV6jm617TGnGiMokup9SnddzDJCw3VY",
  "key39": "36PL1FjURPFJLen7URnGWgUeMyH2GeUXURGWJxq7EMgZwQwog1KLqhTCicvY6oUncjwSqXwGVYWasTA9X3gJDA3j",
  "key40": "2wWwik1LopUnYkHvJsPbzKGhMEnwNQvqSMFrW4VdidCzDENAGMHBiDPmmmLa4HPWTrv7x2xd77hSFGEB3E6mhWKN"
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
