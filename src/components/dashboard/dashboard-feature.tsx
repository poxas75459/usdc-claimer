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
    "4M7PWEj9GQ1MxzBFAecdGPqayCDnbZruovw9obpRZNdWiSBwGZHhisCAqP93kEsYhHNkUeSdY17jRry1AayvYw4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "351yQ2TK9zsBuSymP1MfcxjB4EXu1JmoZMuUyNUzSz4rFxMbQjLwJ99NFEeXLzUxpmuQn1b7T2sRzngFk6rBi4jr",
  "key1": "4HyGhiJCgffdCpV4oMhfZgR5mJ4KhctjKTKn8WPwbvuaDkgrxRh2SjQXknEUDiMKhPKXGjPvwXR2FnzqNxW2BSn9",
  "key2": "5U3sLpWmsHJPbwqxxGJPiWz9TPr3nMGxxvxHvdAfiw7evJHRzRVFfnsRZP3imuoLpuzrg8toU2U1EmwLVp4XVhVW",
  "key3": "4RHb1eDEpYVrCmg2qQcvBhCZGjFEtcKZDUzxeBumgn9NhVYkkhtgjjbodorUzkUaLrfNSKAzw6sdFN6SK6BKHezz",
  "key4": "3LiwBgZiG9Wy8yaG7LSWLg8UgrRhZp2gfbcpZQQfsjjoEzcmPCKD86jCeNpU3M6PEy85SCSTJDdJCHC6xd7BKi39",
  "key5": "3rrFvaJgMXwRoMLWsXvGqXJ6DkqwdhPCf7Jd6NLaK272EJfM9EbWNJKmyoiceGfFzGBf7poouasKVQMfuc84AJVh",
  "key6": "5y5dvm8MM5hkACK2rAMxBiUic1qy31ozU6w7NRx5gohef9evv42ogSACL9m5R9bodrySRViGiCQZuhYLRin9rcDR",
  "key7": "44wPtkrqd4ZjXYweazL8axxrS34fmARV8wSugeZsPJYoU8carm49CPbhXmswu5URrsNxtnzBGzs1ykxXfZRkpxTb",
  "key8": "sL28HyEewwqZvtonaDAeywksSc8mM3FL9eLUCsRL21J9Q27ZrvmGjR7QHwVjRGagWqU1jGuzr5qSXiAG2WvT6Kz",
  "key9": "4aqHfmm2K4bxwo53XJNz8XWjdYsJWYdiHzdJKHD16ep35uyQXzZmHNgBzLBF5ezJsFo3U6iQYQUHigPJrA4aURFG",
  "key10": "CJyGHQc6hYHiruJ58sXzv5NvPer4yQgL2MJzuxpA9wnCYr6NN2U3Q4Zez4xVQE74SEiQ1roQzSn9TadfKdUFyyL",
  "key11": "4trq62atjg1DN3SRVLYxS7XbzFqZYgdc3ux2tiAHwPvQdNrpXch9Vo28at6z3fBBtRqqqwKBmaNSLQRhfdMMsUHj",
  "key12": "4nHwpdTqyhnx3PAoo533KerWN8ixtWrEwiEc1Z3pFYehmrp1kJCft3bSmbX8dNn2rNY9suCmrGZ2du9N1gYFnbNe",
  "key13": "4YnYYfNQCv3uVor6rRczWeUDCRzoR752WX8KV11FCcG6PYtzJH67gsjD5ECAQTEnoo2eQQs2uYXsGkSQGqLv2K2c",
  "key14": "3M79VzRbyoVEickHCTpTAbZU6gDDNBfxugHDEWBpxDEc944kndKQhyDFHZeM5wjoBAr3DBuqryvKJfqyte7FhrnM",
  "key15": "2st8UjMRVXcSTf9ckrKndsSGrjWLQ962Y9vFoVKKwB1jA6HByKYNL1S1SbosHnduPoiX3EcDzXQCrCcY7p98TPrz",
  "key16": "5d6jrVjp9p4A46VX6fMamYBgtbB9WQLo65Un4byDHg95zC9KfEfDP4DgWmm74RSpzumFj6YsDRPpYFhMLTHZdK1Z",
  "key17": "4FXJpEJ2XeR5dfb92STzA3CxMzCr3BrJrfG19Y67tVzJB4pCBMhWHn1aAkhj8sQJxLYjfzrXS1jx5yTuhbV9j1sx",
  "key18": "4dgHVdptxcCw5Fv9YRFiktmyZYJdvo8PnyUxcAZd63FZ9RtHsX2ZV9EeNguC5zRtb9Mtry9tvKgSftocDZcpGYLf",
  "key19": "4SFr8wQxqvt2zzMTaV31JaC84BTJcsTZn62LFp8uLqTKqJ3mcK18vPfeAXK8jX2oxpmY8jvGc1bqcEyqZq6tUGGW",
  "key20": "5b8PKwrq9ZzpnekxajvDP95BbbxtmS2tx719soSenDgTkRRorWvkfa1AT7bTeZtmb7ZHjGD1kS6PrUgkuv57sYfp",
  "key21": "4qnyBfSaEdMyGKvJKjsZWwyiQJnYH5sPQUYUFUtfEFwdWQaD8keqxg44efdxNLv7FhYLaq2HJDMKKGyGFMx4qeNg",
  "key22": "5ucJHeqiNyLgAqR3AbEhZQfNVvy2JYQzGtoLyUvkChS7ThAFTF2SRZPp1EdR2M5yEm4cXbVzHkndxjfZfVWzzwxn",
  "key23": "43KbKitHa6kQMBPdEHDcCYPXtkVzaYa4LDtqoRBWTFwcAc5dY4tY6TZmddsVHZdjdaghGDHPsFF5wFBB1G4hzsYj",
  "key24": "5EnZ8F9YpxRAoBdPYbxzAfrhSmsdK3CWSiJPR54v5Rs2bsjHAmWp7gPraUA7NTtDmFjhCUQxpJux8LTT7af5vxKQ",
  "key25": "4w8rjkjCQ2nFjjGVa5VaDijQNiTYz7F5fJjtpXrg5MsxYSaPQKMiFtD41ejpiacY1zCEHGJRjz8pQYaAXHYPKRmN",
  "key26": "258EbwtYyPUhPVaEdCZWXZ3iHxdogUZbFtVjQDtnzHNeZzHRKHV5FEYHdFW7dhP86kBXk3qQXLC3w9PdaPrGpSu7",
  "key27": "B4mkqyNbJy8uFLJxekDpXgFNGoKoDgBWxJgP3gL5n7Skqh846yL9MLWVnHfdE886EEsfxNwRAcusj8GbFYAVJWZ",
  "key28": "5pF1T1jyaDuP5yoHSQsnPPgJZW7y2NZAHGjEiEcy18TdGVV8GgB2aQnEeJAjKKjU2TK6E3gzjtzFnToUQcFRJm5b",
  "key29": "41ssGtrVS7wN6MwshaGo4txPWEpc2xPez7eNcJXxYbzZsAxC5sgB8uUErpGMoqmdQWWH7vQWzqZNmtWjJTMn8une",
  "key30": "RJDrxQNDYvFiLVWSvMcD2oCUpcH69neSWNVA8isZfcVtar4UeyfmdpNmt558eS6ZPgbw3ayRab1mqoH4Vn2HqhE",
  "key31": "5LdUJsdws315SxSka8rPGfCM2k5Eux4itchzEEjoiyWTSPGXovyKGivSGDrUpFJZCTP3iRs8LrTMi6RGV5a4413G",
  "key32": "vdSsG8iwsQBTeRhzPGaxBqmaXJQSEnvuDfmX8eQT6cJamiknyibFG6EdtEjdDmbaH8LNhmC2YEPprdQkqsRwrC3",
  "key33": "3Pufs6mQJWMo7Lc1XQqzF4ittFjhefei4DdhvLefhC6RgBAngh9AeFYT6wmMgKJNxWTWuzPj1Yx8CpM7M91vFAUY",
  "key34": "3Lp2fgcgzRzJo2rLhWGeiwdv9W8ULAQqYq2H8RyTA2WEh88b9sPXP11dhRuKDKtNdmicYQdccaHS9Dsk9EsKDcv",
  "key35": "5Lq5QZuBV9PuHFJ5RKrUFeGY2DWz1G2nTZixc5mcRhXoKJB4ZHFzttNesGfqaZ3K5k9RufhzHh7EmBcvdYPPivPw",
  "key36": "4kfHpFQSsaMWJmiXeGym4bmRz2hcBwobXYYmuiLGTUVZspvSqmqyjiL5Yfg6bUAmwtg8GCst2xxyBowGPFV77Tov",
  "key37": "3FokANPqCrk4911aUUG2VTka9LqFrTqoFLb9g85bHHu984W6t6EMYoGPgg1yUseJuWXsDAss8P4mZqRiykgeLa4T",
  "key38": "asiyK5FpeByDeMBQkFjJZasfUfy1ytwJRMdrrwz5Q5di6FjWwM5p3ufSEmG1AE89xm4rUAcw6X1DUohCiEeDw3e",
  "key39": "61hJVQGkB1YUBX83PXm1SonvfVNVFe9wcnyMyNCEPQDWC64sEkx2C6S2vdMEn6XDbam5uyPgwmDxGEnoG92h7LCy",
  "key40": "3q2uCzH31JLSvCRYmoRHBvHPPvjH6VTMCKqL1W5AaAkBdBCeuAcrJGpyhBHeyTmHPUzHc8PyU94AXu9tX8ZDoLof",
  "key41": "2kakyrzeiSrBmAi694y35PG1G8y6dQ45PJHBQtnxzKtcAVo2AfarbfQoM5bkPKd6SY4Gimhc29KbLMZqBWb8Em2P",
  "key42": "4YauHh59ZvRHyizu3BJCV2wwaq1bgoC1hcPYeLNAgaMd1cZSLA4DxjTPrTybVZRn5vzQCXvNJQaS5HDQW7exbC5h",
  "key43": "5P5CSiT6EnCVyMTwBAHj1JD14SmZCh6recNcE28WBUajGTkRSSGtXuV9QDHGWoxsPo37FSCjrAemVW3vHSpiGSne"
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
