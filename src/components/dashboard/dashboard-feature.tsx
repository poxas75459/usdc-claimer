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
    "2cjNYh1jKtpBLvG1fQzz6rzohSbudTnWydEXMap5eLTdzrXnb31TUv4uH2exGnmFBmYgHKtsadxxXkpsu2L3zUJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FJDhKNRBpDbnpTNk6CnE6zxZ9UffXrursVUq5Vqe14eV4u5mLo83kBMCHXjfKcA4HzHXyQAF92f1VoGtrAZboC",
  "key1": "5ZMUF1Yjf94hBXAXSQnycmxB2gYS7CGxM2GdS5AhJgUCSwopG48oL4bh3s4zp19z96zefhV6f9Z62pdWecLsixNm",
  "key2": "65pz4Xsjm9wKADGWYF99YYAJYizYC92GyyT9ufGZXoHqRhmaURPqhYV1wsYDdEAPEAVR1dt6B685z8V9MvAmjXkK",
  "key3": "2VLFHcyKQn2chq3VFdy162UXuRSzznmoN2Gq8RNQZNAxDAYZhbwcFfaVULXhYFH6Tgkxa9HvGV7bY2xRrpW5HLT3",
  "key4": "2wEYMVEKYgj52mqUGb2pCY3yCxFJFQ5wrmpoSVbr1Uu4UPHUtuS6bGarsTPEZwtMHkJri8Jbc4JTYNaBZ26bpuyJ",
  "key5": "4csLyV3mvE6wQEvWQm1wmTHBQrcTGc3b1FCaZwwtQCd1KNoLndckW1eGPR7kdmBZE7TPxUfxXSM9jYvrFRyUqAoa",
  "key6": "54M2xPdTXBVwekLgW61jLWdYY7rKB594VMFVWSpQucRhWRSbf7oLwEZsLiS1DkDdrJxSQZrbo5EPwZfjh2oc94j9",
  "key7": "5EwsziqExM64V4vkMPg25HoCtK8AJQqJhdcSphFJWMBSddJE4GbgLTfeEC3uUCMKvvMcDjLjoKmnbSbL5GrhXH7s",
  "key8": "sivJiohBcQHdsnE6ps4Lj8kXmjTYY6rzwkvRMi6twKtm8P9HrdxPAcksvD35MxqvqiobJrcyL4U1FBpYaxvJFYx",
  "key9": "ekLi8eQW2AcbFDwgHvAX2tP9ViedKV6Dp7jnkG85EjjHJvLFPzdhGTQX9jAjiFM4vAkF5tW8KTmBnVQV4USSpJx",
  "key10": "24kfEYYiBvrKmKZNfmiZm1ULBWv9Gyca9cgFVpw7k9euKABmHu7rXYhtAxnfHSCPyZGknyskzw1nozY3igYPJN8F",
  "key11": "2ux8JDVZcDdPvkctNeqNQZYpXTUbPAJpFtxtW2JFcyzec3Nv5RL7MNpX6zZyEC3trdwzjqdWxw4CHdEfTssj5BWW",
  "key12": "5GY5YVow3VLcNf9kNownhWxweJYXp4X8Vz9ag4GsTJqTTEb3zFoCk1sjnqUZqMZBft19s2XJg7NDh4ReesLydvTJ",
  "key13": "3U8LNQigEYw1BdeJAXYipudxWzVp76ySRSepeEDGRnw2tXE9hgqqhgGxXjzowhpeKrysEYfDhR4JsiipfwV6QSbr",
  "key14": "3MhApn9cy3zdmgwhABbrGRFAMZv2nZ4kWURoVdDhq4bVKWAJGV6FhMPPcVP2jYzrsc2fi2DDxYatHTJZkiKrBDp8",
  "key15": "2qaH6T3YwxfZA7Cb5eV72Szj2sEvZ431cRPVtMXDs1tjwn6nqWEsT5F3TrJ9kFHNEb328mVossPt6ZoLGbGoyuME",
  "key16": "22iUy4bwGkfW3YG1Ki2GHMGU1ytMFbgVU1UTASvCZFW8ddagU4jxfUphrMAERu8hJMdDTXHnb9TUxmPNuV7oN7BX",
  "key17": "2HeMVCyMiEu14cFwCHbmE7Y2g2uj5deKgubndVgsxRtYErMdPeb22CjFeaVNfjCjvfRpYKV6s5ufwrjBdQGc2Nms",
  "key18": "ivSpzxpVoQEUk3tykTNEbPWxFCYoCoGYCHrbKuvafFeqaWYuUtUMawE7YnU6pV5MjCJMQQLJBfWTyu8FHsT1WSh",
  "key19": "3ztmzdQhryCA8tSVNhiJC3i6FamUuZhTvMA55cNRW5m7JEC6Vu2haTzvThNtXbSEoDZ3n9VktNGcqdzztiipWTea",
  "key20": "38oUqGPmvUrSwxgGSqcKyxwJQ2WNskaENbbjmKpTSi1kueqNDWwWGdQaQLS65y8kkrn9FhxrB2TZojkkR2b4WaMU",
  "key21": "xtT95CdUzqdfj3yH8twcG6CmQGGS9Mnexrq54cfQDVmChASQioXnfB9d59g1ErY7LA9bYpp9DMDLiBScjN2dx8c",
  "key22": "2brUuegsWHT8g8DWDrxGJNJduy5FpjWjqxyuz1XhntmeTMibnvhYu5TmBeUqsTMbrgP41WntHHR66Chp4LnAkUJe",
  "key23": "3ntGxVuNDy95ZYk6tdeswZaAVrraxKb798Xpw2sP3nb17fHECv5EbHrbqybGzNw9j4YnxfMzVCNgyBn9TnfFymRo",
  "key24": "3o8VUNUYTFEKyrCTRrGvequxV4Y73LpQEPmqk81prLCNTLLYAtxTTLayjHeYp3mVwmSUsS68oYH7qrXRcr5cbTHy",
  "key25": "53ivHazKYgYt1898Yc2ypgUDdY7M1Nei8BueUJ8FHPhrkmQQ9YndTWp5qcXGiRTvgUcqVLKM4aJ3AC7PBD3RWpcA",
  "key26": "37PAqqJEXFmLr4x8B71B3s3NCJUKKXeJkEGfhft7oMB8FhsiBkK6NfUGJEW95ASERMAuo9N45N1L2NoAcohJ7mAZ",
  "key27": "bpmx9Krq6tUKih6EYNPGpwQcs151GARCaEF7pUGQ5gxEZyuSNgjHsuAtiRuthuso17pr8wY8WLiK2tUZ5qkvPZq",
  "key28": "5imqzpwBeDmiT3U9xna9Q1rxZ8Y44hoKat6bSmiiRgujXNLisw4BJ2sTUQDKqZG3bc27a7gHoLN8YuQHfJtKHPTr",
  "key29": "3SE3bYA49Tx66G3fqrjFaRj1fn4URLWbSqTj5ZGAZ6oaf3NXxiNutTKYVGzGXH74i1k1CsB1v5QMTFi7KNUPBnYQ",
  "key30": "LRa3n1Ki5vhPG46xG4HUVzdcdkQ1RiJGGcsfdQrZz83oxy4FAXPhLT2TVNxRFNX5HRswD6RrpSkTsYSEaL5TPXd",
  "key31": "iUiQvoyrPBbbH538Mz4xojDYWHvkPqkKJJZurY54dAbDVvV3Vd4QY2VJYyiGPGTM9zb25NCuEz23SuQbtFzVGzf",
  "key32": "5MYoK3QRGyGLqcgd5dtH2e5DSrjzGeCKbpXydZZ4m7dD9sgP2d5pRhcZ1Gzy56GVZVrFQWGnTU4AUFMecbHtrdDi",
  "key33": "5MJytxnkPgeYUK4s1dV8yWjaBwijFmvVDd6pXKqLyX4F8aB1Mx8CBmhg9jV96FhBdxYdNxKgUA1W345PKf9FVnHT",
  "key34": "4ho7Rjh13oWffaQSncR6odD1KnZtkzbakJTfUm6rAgkZCniCr446Thhv5tnfxNPa1jdpFTjrSpQKKbRJW9LbL1f6",
  "key35": "2aJmWut2seNUihFmzQJGyM1tsN4xZuHMu3rnizaFXMP1b1akASqsRX2RdCKAjsDzHc95T5cZdRSihGNPK28a1CpA",
  "key36": "38zzdmGyHkiK3869SSQXUrSAv1pZM3FVyriJyypHBC8x26f86zujqN9vW8QgYr5x5jssfVnqpYFR4QRYm72eungf",
  "key37": "4o2LwQ58Fnop64UBw6Bi6PabFmyKeTg5wdmSrBNML9Aimj46pTy3cKoWhbnUW3Bi1g1FwzrS7fa5Lssuf2UGUi8M",
  "key38": "3LwGZa6FGJjDnebzZPmB5fEXzUtGT4FSpyvBHcKJAzxLkQkg3bQZkQHPFiAd64QCawJ38WjWstDPDrosmQhWtq6G",
  "key39": "4ynMymxypHwceyPjGaW1gP2AbDpdx2PXMBu4xd5RfjvzUTpCK6PLFUyJFnAouuriH4HCrXM8ECJGfSiryfQbfDWF"
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
