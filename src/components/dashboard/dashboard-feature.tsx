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
    "331RHV1gYVnuA3weJztAzmEQgFqjfoVV4Bh3RtjEmoEXshpZHpuTWrrUVo3EMU6yYuKZhM7dSMLcZVw68z2ky6PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQ5tc7eRd9fmhcdtYEGSN4sANn76JeGyvQUad9ZZojJkeH9BQwo5N77bSsuTXhDQc654gjqQc9froUCKGSE1bL9",
  "key1": "j6DTFqTCz4xUPeCzS2HdzNX5WKQJekHhvHsXVjtK37GG2roj36ALKz7jN9VRbAg6keEHpBfpiPZ8h57joTPsUKp",
  "key2": "27Ei2ngYBgeH74mCSaKpJmfCKnhCCHwa3e8xCm5BtsXJ3je4YUdzhqj1xn1rAWwywCSgLNpCHFjsKTGHf2rPkd9d",
  "key3": "5TnBBvoSHTxv27GTbtXSyLEFmRbTBothWACurKqEx3saqzFBKvWcSY9JbtPoqz3Kauq5FShMi9uWsAdfTZzAunFo",
  "key4": "3HJtCHaxQJ1AzuJbTANT2Hq2sGqMPqzKNgDg6eR7EHtH3spXTkiGLrumGwLEns7K7HtQbewiJYWhVzq8xvnDyS3D",
  "key5": "AEeQRYf8y4Jd94ibHLE233ggTGNkuWzbiLvXovywjDSzCTZEFccuWnMtzf7kdgBZTVjQddG7HBC82Uy13WCTkUy",
  "key6": "3HwKqNCtZNYvDhzMSLxuS74GrEkGHLMuzxizKHEUZwdwedSNB5PVF1p5ShCT5JLvDb4YXLzieTsem1PQSDdU2CdR",
  "key7": "3xFSuEcj3ufPE7gSbLZRkwGkebPmSRV45apWnhhvzB9FPXQfkrKWYVEPXbogpkGGuwd4rbmYYGypadwZ1eRwgvd9",
  "key8": "CTqt8bDB5tkJfnjJp32Sb14jQ24RNnHLV5qbQ5HbZJ3bA5KeGRDM1SLntfdq9GYSnuHZbrfMsoXzWFsa13xSdXB",
  "key9": "mbahfn6PJHXZVMK7sjVCwNE932SJCSiJeMU8wvPJJYVrW5tMcQEHqfjRunLrWag3bXkZiEt3otCyUzm24XCAftN",
  "key10": "6stUXsbUXj8axvgoTiDFtVN84RcKeHksA99rr58t5aRw66fvCYXjXWkrxfYs3i4e4fRkhNTkoEVRfKK4m3eCqBY",
  "key11": "6372Z1ifU2kxtiJZdtxEacB8TeprNrSEv9pqUyTosofryz5zcwuMxTAm71tqnZ6YQKy9e3tFtagjjdvak1wxUeFH",
  "key12": "5BuSPPxazxauG7pwVKuwZFZsR9wvguqSn7JyM1sDFSNuWukJ4H9i1QAWS2Vxda9fxT7i8pnoZqm4KBQYUUXi4h2z",
  "key13": "2LivEcc7At71VT9Yzt3hKwZdCyqbi8u2FVFWtk3TP46uNbJQqNaaySFCLhcEu1gdooNtaFdjqjpWBYDsy6NchSDn",
  "key14": "mC1TTzPFf8RoZbqVD4hUYigKae8TYciKZiiAAEVtBtP2X3iQ8y1EhXYs9eiVNuq7Sr1zLXtPjdhqvG7ZciceakU",
  "key15": "NUAu2R18PtFbi8PKcYk31ii7tDBA94qcJsaGAEqPkYu2f8Re2YdZCDvAoBU4racLVFEBpMyvfoPqPcWX8MXtuiY",
  "key16": "5RzPptM6cyKcsfN3M1Dqdwr7E7gCjiemwgnakvLGUqqDQtQ3YjHMZFvm1YZoQYgmpfpw7S9asLMd26VreoZAveHR",
  "key17": "5pavUHMVfP29LtmBZNmqLE4MYxtKEL84KNwy5ityNDCF8ifsPyUsZ825zerSDoQ58HctRjaUB2r8j5bQGVDHivqr",
  "key18": "2nXn2ka3jEoEvnUK7uPeroeVjmMD3edCBiHpb8bVeoDSkbqi6YBJ4c1g1p1TVsNu4chUjoke4iurvpULe17VA4sH",
  "key19": "4pTWm155VTyBRuZZ7UuJyAcF72yvV87kNA9m5T8Mm7pyqi6vocndzVLHJiw1QF7FEQSEVSrn3cy8Epd6F897d6eL",
  "key20": "53FvJhagvh5sU8DTDU5vk2TUQcajXAAbnZWdCciJ7oWekiS2eHtYBh5oCHowjanUn1JPqKd5MDLKduzrkGs5AYKs",
  "key21": "64S1uadajtmKY2zPfjrq1VpAD3WLesmETdNTgZvyBqmLkHz5ujiK5dB44oUaFPF4dbuR34g5euqFausKfu8hk9VP",
  "key22": "3PHc1smJQnNGhChnkjL7H2DR9vV2q8jtVTgo9Lg3qgBCDp16pDdupFqYsfMYwrLAgwRHFPsofahzVFm1conCEK6q",
  "key23": "67UjexLorvfQs9WJfiQT7sK3dZoVtnDFZnQEphEFqX8V3nMnZh8Bc2Nkr7jjfDXKY9oFcipRQ3ps8J1sYGfDLdxg",
  "key24": "4eyaimtQddk2zvYqwWjmHHX6mbFgZRFrucxB5gJJptGE8hSQLW1DACoqKNx2aHNgLWjDJQt6UJviBP35DYTvw1N5",
  "key25": "3xzn68HFRLmYfnzVtEKEcFRbPPnPuQbPR4vq1qMhWRadHXJXf2Sp3TPicpcMc81jcSccwr6xS57TrrcCDcwGJfRc",
  "key26": "4hLT9Gq6dydsWr57rkxpwKkTfMPchmd74Aqgn4znavQf9DLXZVR8MdPTidYrEaEXvQ34dUm1QQdXGqrbkRqxXz4N",
  "key27": "qAuye7pvXdyW5xsDMCdFX24fzThdG2TgAatqGDmUfvx1UXgGTnQUR6dEzdTp1kwjMVv1yzKhPbK2V8VsEHPseJF",
  "key28": "2GTuc6tqaUTbA2b3XZ1KbtrCtNxraSnTsh9SGtTyRoZ6CUWxum41hBgaSVUewk8tiEUmhvaqTjMQvahSgD4FWaCn",
  "key29": "2R1qeZ5GSj8fXkLcsQLojnhQVD1yfkyvx2qprgyw2Xx6viUyo1CLDqT7tiPtCjEaU7RzHgRsJj4wYnLVZhMm3CFk",
  "key30": "3URsbQXUxoFRzfyiqkVT8hC1X7LjuJjy9JXygDqMzEmGbuEe4fL7bFLdKYfwonue8KoKWE8ni4GJgH4sVkjF95cW",
  "key31": "55BFPEYdaSFM8THHz7ftJWj5TsEhWbeKmKVqUKsQxSkrHAXQsYGrzaFveof2M3Qw82u2czp9Lmu6tcXgSr2MHpAL",
  "key32": "5a5zwjfcxQSufaaNhWkEe5PAwufzF663zUpZtHQii6HGvvkozZTRLHhSwbKj8nENXcXpLMvoWhLjbMNFdfyaER8x",
  "key33": "6211RgHobe1b3MfRUiqjVfGAHmKSejzArvhZCB41hQtussTSe3ECYtSU2neHMS4kyc1tsNpy66U4q4bk3puYzvhY",
  "key34": "2fXF5u4pyqfQMmdAeB8EPTosDw47C4jeKmVeAqzqkXbki3VcJBsS5sSRMX7x7Z9DHA32B18fUmK7ECGWkExT2wAD",
  "key35": "4W3CGerZ9inhcVWTuBooCwXFRi9LTqzh2nP966Q5E54YajZnSZCxY1rV245TsZqRVSw5Qv9LRHh2yMwwQZh33YM9",
  "key36": "5HH42VTiJ72en7tyzF2AKxLNcR9Di4Foc6fRLz3sPwzAS7i431BdsdF8edawqmBRkEdZYa8Xsfu8hAQnMuxdpGpw"
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
