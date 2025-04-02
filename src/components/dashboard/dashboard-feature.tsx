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
    "m2cuXRWT1iJogcZdepGCD7vM6zdJS38hHhawn2xZT6yR8BfjnFAbPQ7zgdc326oVegL5r8ws4N1Ze8EYigLQpkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XdC39eRDFTWebNnMCoUEoFNq1pA818vaJvL9Bo6NqA1oQuAsSKYg4Uoosoejq6fX5w5Sjt5Ky3HiKahBxz7vGop",
  "key1": "4TkNB37c1pDa8E9croPBGtVJQV3uYQGBhawnKFtpzXHCbmZdTTn365YqxhXPyCvkXmtxicr6qZQwYs8w76eQ9vei",
  "key2": "3prpRFocygMZFfxzEqaV15xEGU2RfvDYZhvdRLDU89iAap87rVgfVc3Gbi7bMCFFbKAWafFoWuZ43kbVqaRfQCUF",
  "key3": "3TvW2cYhDKbVPDMFELxbiiBGwECWAvM84df5iqPmQCQy4B8hstRnPj6Lncpk3PFm97SCdGipUeTxLk7erTVCrTRu",
  "key4": "3vhzPWqFv8T5wjpcAtawPsQaBbYQRANDRkrKND1MKsvPK4eBw5y91xGGCk4mFY7krZ9mRtzichwq6yegrDewngz",
  "key5": "2BcedbSRj7DbHDrZAqHhypVd4qwU2QBRhLfSohLgCGzCaw5qskziUhVQ9DN37DojFfPMiG3nhiuEVmxyXiNaFeTq",
  "key6": "4fRFue4ooCw27RkXqnCDz5h62gaJiAbXa5qQoB5gnP7sfVMsY7XwVfKhEUVnSwpZwM8b51NcKcVr4CmA5zpZh9qm",
  "key7": "267RbRb7NCrKYBBz663Tcs1Y714m6GvHgtsHXJEAKkmhmRriPa6tw5Ko2Zuo5xz3E2wuX5zK6SmRNkejRH1121RG",
  "key8": "3tv4mZm1AsAZ5FDKv5Yc6LtAgJuDKYbBXqFuezgNrwSWZvvbBVVYtZHakhjyxGm9A27UD8rH4GBAUdABqJsq7z1H",
  "key9": "3EqXKL3FPt5M775SaipzasByhZ9yNc4PYEqG7BTuu4YQFopyFP7eAGXw4mhDnUmk8NVRGarHYuf8w6tfg5qsWW6a",
  "key10": "4ESxavRBk59uJjzTU8ZajyNTT13nNnDaMRQSWgqY2u6qo5P9qkCpktz5KzDNYcdeScpnSXfbbJWGCE1hHxURJs2x",
  "key11": "hnEZX64EdZpLU11dDe38GJGuq4bhhxdrYUG26sCMM2RV1Pb6cYGHJ2kqQn1pDTGHG3p83dNePyWANHrqT32KZ7L",
  "key12": "2NEqwu9CuSwyojL6AqmQu7sFPkCG5i4iYQkMRzbuVwMBb5RLKNrF6QSCaG5axFc6fpGv9ycheFfcdHDM25GDrkYF",
  "key13": "4ZEJMTXdJ1WKetq7Z59owjCSNhTCZjvp7ktGq8kvDn3r4ZxkmXfkinDKxd2osRzUNYDS5it6mNCgzLjhqtUVgMcZ",
  "key14": "261W98jTTgomfqkDg9JGi2nH1rte11hLNig12cfJJA2ou2zvFoe6Tb7ykAqBXv7U2VznwRprdM8iDg5zXDGGakqS",
  "key15": "2TzTeK3YGdKTSkg7LnVR19ePzgx3sWZ9xeJiraDUrpN9P1xAgcSqk5dyErW9RkYJ6UX1VvZaxj36LALavbZJk5Hv",
  "key16": "4nmVCye3HLMT6bstxBidRJB4qgVy4ZBvVSkZU1NimgsC1Nz7GJ2Cs8PQxr7eAf9rxwa76g6BpCgK2Tsm43rPek4F",
  "key17": "2Z8kotTaHajSpVBk4jW6PiiuG52TB93UieQK1BDGFG7bHJTqfSVjff5rbKe5tbYNkSgaQEcdkwKmeB8jmoNkGBEi",
  "key18": "21j9eXmj5AYTAZM59NyEf4YVpLCChh7rzrbw8XtryzM22sKMndkjVGTveDbCUZVKMAkgbnXiD4JuizpGGz3EFkaa",
  "key19": "2aYntV912r7HzKTp4CKk3oR6f4J3ogp2MrBdMXCvMwKAATU2y8fwcoPPZBVTZhAYPNnpYHMLCSZR5nsN5peVgJj5",
  "key20": "5Cx9RD6BcDawAwuA8dWLgb1JSee7bokvsYRCx6Q8b6vNTgRZPH55aUCYUeX4r8pb8sRFiXD5BTAGmCeucr71C63M",
  "key21": "3TtMnVGX95VHhQNsapw2TkAEoU6zRgN8PgnJm8vrR1bn3R5bXAcsYvPQzCY6tptTspAPywhszbkZXisZ6N98vSdW",
  "key22": "3kqkwtGFrbpmKx6FYjV4M3sYymRdyD31vsbSYfam5fJ5CsqSsgex68U7ekR1G2gFy42YM9xh55oNwmnkx7NFXAbR",
  "key23": "EycXCx2wPXEmuupytFsQdvz3xVD2b1yKxTZ1vKRwMwxgGz5u8iu5zyJbHpQ7PVdPoKC8zF8B5MdAzv8WYZE55Y6",
  "key24": "55DpGcZD5nc37ArSMby9pRb6anxUKyUEQjYSa7DFnFas7T33NfrT2kZ9ATN3Jd9TaZ4PnkziRDN1eLqkhpBuyCGK",
  "key25": "5cnd81d5pGnpzcZf5uhfXVGuVad7jLBv3HpodQ8bLbzLGRs6LdyLLdJywuHXEqHL35j6biNstXNn7kqnFpFAtMk9",
  "key26": "iKCySGvwQoSA8jhuaQ9yFmadBV8DJK8qiGkukz9SgDxPGS7qBPG7F6XW8m16dbwemS2uLcVEs4JbD3FTHEkucUc",
  "key27": "4mpqzViz6k9LoXJVhQ57mEHhYRrgEZb5gHynZWNytzi7CRgtTpBM91cesfWUTF2S5RtgvBDaU3jzfsUAfGry2d8S",
  "key28": "mBqXaP6Un3XCz9GLimuP8a9yAe4vDBK3K95JBCwY4QDyXvXKWigtJt24QhsGo4QTgDJ6KtsgNc2mBsZDH9TWz7z",
  "key29": "56Dvp7pu5pV6Bje34XU86wUGzD56jus6a7d6ET4VGh68RXi2W2K4evg742xpDA81gQDGnpCzHMQWCGeCSmt193CE",
  "key30": "2HHQGz9FkyXe11DvZfbdZDj8Y39xsjAqWCqL2iZoNgmyVNHrbjyJsJDw2BHHcWeg7k1u4dmEahuZW99zK4wjeMwk",
  "key31": "78YvRQPucczz13AsftSrnnyAAF3f1BT1hrKeFx3f1oFEDxNpzaw9goyPiQPsaSFLWvyFmrvD6VDzJ5NQpLijC9L",
  "key32": "66o2VtZWpPbY7NmCLjvWKKBahY9fTMLw6hNXLTCwPuMJS5AaLLLJWmSsAYcFbzxNf5JvD52JKv7A1mrUZavfTGPY",
  "key33": "1zAVk5vjYW9cBq3TZhoZ1KXUB4kPmvBG6dWWzGRi2iHrMZuHfksC6adUSd6ctvpuha2af2oMCy5xa7YvwsuKwcW",
  "key34": "53tKhPgokr7NghwVKHDRF7QBubNj3HmZnWDCq8rdqGrqKMTkcDDn4UCG5uKNdAYLqW3K5v4YJQSp9PM8bAPhMJYV",
  "key35": "5WDTpb8GC1Yjy2B5PQg66RvMX1cLFcJQoUyXKtBzsgjJnePhA6BoXfh5QvxaxK4BHwPEAhsetA4BWWVTPLH1ad9B",
  "key36": "4DxRjqAzEbUPNm5vRUCobcYghUpqCWSddv7qDsAgMvX2Pr8r7ThAFT4ZbZvief7hCGKR6Qeo3WHnGTpLn1dSW7mB",
  "key37": "2EZXFeNZJs31NX4KSosidH2K4kJ763mMsXDqYy365Kdq5rSZYz8EuRc2hZuXeGPmid2f5Aqb3b9xmBzr4PnYKf7S",
  "key38": "RchDrnSuc7HJuhhz6Ft1JtBNY5W31NHG2W8dDMumsYFzWWX4bC9YJeyXJesniyQkwFW9WYm2YBZr5f657kyies4",
  "key39": "5RZNPMkk7Bg5Q7Ld7NqVtcwjk5t8KdAwoUcZRL3iFG2nopieegBNKJevfd9PgdxsQxfCAVFnbAKn3ycbfj2QNPdi",
  "key40": "2wWZUiJ2ujA67KFpGTuANv8n5yikt94xKGLxrWXR2oywjJmExccAwHFvfsJdqBsJi4SRkj2Wrrmhkx4bVVDMqNx9",
  "key41": "1id6LkuNHmcbyMpVYkiGG4qEvsBSvMzznc9E5ru5jKUfwq9HfE94Q3fv9t1BUtxmjkJrY2MX4FPx8qoPvZ8KW4q",
  "key42": "4hM3g3Jkia2qsoAhtaHUPKLvb5yfFygU9Ax66vgTAjUEBT8rRogBtM6XPLF4dWmkcEmekgFNRNmXRhsPaJLcxGAo",
  "key43": "3vmmr7dod4d1aZ7ZHEJeSsSBeRAb7AiCTQrJyKRsjuFKqVxgjXKowQMYzpGYr6YbsRHjYryn4SE3887fDMqZBTy5",
  "key44": "3vyr81uRGTLHXLUdR83pvWJq7DtRpcp6mQHCScxejxhUWC4PFP712JprXsQA9VPQpqmgGbzv57xGdD1VKrioZ1AQ",
  "key45": "5NvaPeV7xMfsZRymxagkHNj4yLqhGYPiZKw963Zk1Zhewsw2izxnWMaChgVHFk7d3NmQd3ckmVsnjuBf2jzQsiJ4",
  "key46": "R9P3AuxvpGm7S3QmLRtBBnstYQRSzgw4j1hvZBUNTtWZpgCVpFfeTtfqCqKTyiTyetLUTsouTodbKkbreSsVWkt",
  "key47": "3s1E613DdhQzWK1GZMUGRCbQZiYoh7VQJj37N7DCKrdgvUyZ8mCKogiJjhjBffFFjiM9gSv3FWcBKn2cvWWDjfiD"
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
