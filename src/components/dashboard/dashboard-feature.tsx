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
    "QZmrYc7fcCoYmmshU6oMhcEdRYFzmRYyfqVuVfkZf2y3a2YePGRoiUJCUTTdQpCLPF9PmA4DToDZZxhPfymmCQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwwZSj9XZgi3k1djpLi2EJRoXZ8MjL4cmXoXofc8NarzA7X31TUHUTuke5dyenY9wDge865rhnhS6bYY1NzvnAL",
  "key1": "3boHMEZgoXi8ZurvcH267Xivu2GTkYJnEZL2UX3CaBR7ck2iaHcA4pynrtehAs66mScoCQVucaiZwifMmjZcZgx2",
  "key2": "4ftQTNFSGKR3DZCN8EpmsnbZ6NpdxZXvmixjN2tZo2M82VmkNEtUpG3ozBXqAnn9oAMRWXQ7Z937HDL4JTVo32zX",
  "key3": "oGVtt1qHpQnTShgAdAthFo85y6ih7KJWbcnwxwsW14arpzg5sDGSmcPBofo6dxps1WwKjCAhx2inCcFjvEYDhzn",
  "key4": "5kGSdKwCpwb16F1MVPWxFQ83snGh3yAghyQZnt8u7fYj4AyKQCTw19VUfGxCYx5f2NaxLs9e4riWpeJXKKaWLf2c",
  "key5": "4SnoTYBHrehhaHUUMXV1LeLX4a1K75Byox8VoqU1z27aqVqGMPMTMny5v5rX9R7qexPhrQJEAxK9tY7acQwZ8oQM",
  "key6": "5y3idbAnsG9Uh6GGdKA1U31uEAjtQH1AvqQzm7To4UafN9uP8bU9knEoNje8xayc1y8EyQYSQ11BqukLZ5GQxGxm",
  "key7": "5HLWWR7TBG3HQXBFZiM8a8mpdZodarNUtZ4Za85mrH6Zt1bDUSeoXoFCxzsgd4SfbpUZUYenkmvfCEiCNpPn4ZpV",
  "key8": "5EG28cWZBLUEVc58FtaxL4aijDa2nECUyTshMeJZRGs5YG8AkWkQJhTdBrwe9UyfepBzDxbP3tKwhXHStUFoeZYG",
  "key9": "5AL9RW9xEaBAacjzFKZA7GghWfeU88KwDCBM3iorD6h2gPK6D4JnU6chBQU8dFTZNeHBMzHo37hZ7JXJXEExuijG",
  "key10": "X3cKc9QD4MT7KMahmCfbwhBuMHihRGSEYLuu11NaxJ5HcUfyDhBGHNfpFhw4LLDEpL7H7zvXShkLzELcSS6zd7H",
  "key11": "2VdgrhkpKiJYXhWhyW29HHEfYXRTfXuu2ARNj7pRhSsALEjXZoy4Uuh8gYgdu821GMUYZyRkTKEyTNL8HqA79CH8",
  "key12": "5GWbGfhMmcMaWSvs5N97MWQj3VfZQDCMNHa1HyGUTdNogmjiwCjXcwT1SGnkGTH5bAJSNckYPdNEC3fEd47sa5ow",
  "key13": "3miz5JDKitutvnMm5wax9srEQgC3oUEvJcD7zTkiqzmKMLCJSZdQxrB4o8oMfSAct4apuZYAKUVewa75nYNsWpPr",
  "key14": "21wvF3NfJ5d1GajJ5WeyvZqNcTekLrmFXQ531hhE5Y6E9P1r9kSMcZw8LnYvu3VQR1Sub4EFrRHumaY2VsJx8FNz",
  "key15": "zv9wkgi7RGVFDz7EsUwbsPNBSBaQ4XjndXx6L27QLf8ayEmSrncGfJK4AKP382zVsJQV9f7rd3iWUDZNkRuq4RL",
  "key16": "zzyK3cKnZouSjPVaMEUZMDYdCX5qnDcF9e8KkkpojdjLdLnhn9s6PbetDbPk8G3cPb3c3uVR1ZTuihv6RvVcsaR",
  "key17": "4FEL8qKqUQgtLjPZfbNHqmN4uJHNNErnmS2Kq7s5iCkvZSc2mQSzZYTeZCXsbefYTc3YfyDfgcBqbT2pWQNTNAKv",
  "key18": "2aKMX2NnKMu4sxD5useoidsqYnBFz5zmXvYnyVSQxMM6v6xF7UfptPZAnscgACVwQDynuoqHUFbVgPsmxU2eSMtF",
  "key19": "653RNJQ9g3bSW4XiTpFmdvAM5KWLktwumrV1VspB8opmomg3Rjuw2cNCBzofJHDwtvsCw37ujknfbHgC4FFx5Vxj",
  "key20": "545WojzQju2UBBuFzVeSiJWGsebRvvjp38LD4aBPB64mAcwFAhhxbNm8gutU6f9SCpGDAn7fxQrKFzbErrgxPtb7",
  "key21": "5WhFc2A1sTAKiAGbXseMpbxhSgU5Lg7vqnq9j2Lnrb8CMHRKvaGqVu27UHEDcsBtLnirWTrr4cij6uJyACS5qidV",
  "key22": "5nE3RFt4ZZMDegcUzM4GXpi41XWQtLAwsPgJ3c6TsvzTwNqTpcJdpi61U1TnHwYCArRmVbBhko7e9ppBFkZxRNYZ",
  "key23": "3j35M4bL9Ds94fydkUdMM78bBaHtXr4vdyqNr92m85rDuHGzt9zzjGr5CLTzgic6qkThoatxt5J2f4bz4C5Z39oh",
  "key24": "2Q7tbwttQa4w2mLMoaKXr2WDScxfy2JUs6oBjjjRkygNDDbw4Bn7dNepjpLbqhspSTQ3Kdj3yJRs5BHbJS5zfyeA",
  "key25": "2bPYzSsDGhuvQPtMxmSR5hQHviwjvaqaQ4bL2er4QAqb4YyNQ8GVnGA2YopXwjD2a9mNp3rMeZ9SzFAVfWTSuFdS",
  "key26": "5F2JcsLKCqDX2TCPHuCWmXzEtRWduM5M7De3S1M5wEtcBz3yuP4RzwPup7yGM2gc2kk5snLjphyTt9X7s34pYFZz",
  "key27": "S8LXfDF6ThsRn61ricENhPvvB3Ns22vehPgtSUQZfL7qxpcucwbCSLRLQCzy18ia9hxkPNAuAJjE1uTajB3ng7V",
  "key28": "4z4ANwSXMJ6VsLar135FbA2yuUsoEWWWecJNVKKSXSiV8hzzf4DbccZGCwVzdGsKRQKtWZB9DHRKSqVtkSVbzCcG",
  "key29": "4TpX1VNbEfi9zJCtzNcfqKY4dejKje31Q2i6NaT3wh3mmXYPhoDM3CqLAxRBhDE2G4XHPkJ3sxXmJ4jHEwuMC7t2",
  "key30": "3x8jxb3PNESXSsD33HJRCXQnMc6RZXqtGfNM1x1JWY6xyYwu7TaDPUWGTvqT7QxAbwGKA5f9AEvX6ojFKfzawdP1",
  "key31": "3hAnS5Jxs3jkURvEBabAvmfpfHCBSpZ2GbsJznwM93WabhN1c8M8L1nyQq4jLGUDdPePKYWDzSjRPdnXcd8KT3Dt",
  "key32": "4XFSRWKV8Qwa9WbFJfzBLkcGxDHRsqznUoUqBwXvZYagSAMgmbK6X5RTPohPMed8n94iogKrVE5j6JGW9mdjnGEJ",
  "key33": "5CRKJSKvLwAJsub43p72UVZARRAdHBH61YkwtuBsQkyJEUmgSJqfQvbxrYxonnzTWk7QY3BjXKssR7v5vRBop35g",
  "key34": "PXmjVyKrMo3q4yUimYDc1pHr4ES9f4RkyBD2sxUtfC8pAGvGAaYeUJFzkBNyrbDtawNYMxY7EmYZtxJPahqhFh7",
  "key35": "2E9QYgKcPVBJwEMTiKFaQGoxubf6nULcbT9KXceFc7XGQJZXpnysPtxG6Wap99L3mtTxz5TKJxSGMp4xChX6punR"
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
