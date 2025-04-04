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
    "2b9AFbGQsNyXofeQwibGYHFfg1CM5hnZNNB6SX5rZvfFohpoLFEqSdh3Cs2MP2w5qWerjFtDs3GVWo5UTTeYLzPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdr72iVeqyunznCaNAx5r8qyyq8nyFVro9ntiPjXwyDa7ogrLgYoduAkghYuVARHECPA5z2bfY3qUjiCwUoDjuA",
  "key1": "365dvXUAyBoDL6sadDyWbPZh1qiw3GwKdhaJwbGGAtjSZcpHKitWpPPV92zU3JArr8364u6i8vvmK5G8JifVbjbR",
  "key2": "RVcDhrGghS1Uq54j1cpsz4BnmrkUgy1XfbVxDbihVJfhvbptLEBXtDYJBTVYWmf7YHaCDCdcXTQMLT3FCbkU6AM",
  "key3": "JYb2wGVQQSfiuGzXvMRgxR5W27Mju5CnNaqfs91MCYrbnHxgkzSg3nDoa6LTCMJL3AtePCP4ueCbPdnMWXAhuze",
  "key4": "4FB6MorLhEkRkaxCdjDsp8RgLJvUAS7yYcsdTP2qU16LXgiN9Gd2LX9MU1ptbzEZxXgVKwWyD3ALCx47v5i6s7ST",
  "key5": "BDt4ZHb3P3AdwoNxrvJsAWQa5ojAHtpJz6VLWKktd84qm7GLGiY5CHZQ2UGNX9app7YqyoZj62qY2fJdC5sF1SY",
  "key6": "SushZUdH8DQuvjDL5Ro1QiRSKvhV3NQypiSp7d3UudXp1KuMDjx7w7HE3AQHcjeDFJBQjf1XoLhtMwHCAAugnBG",
  "key7": "Cf9jJG6MHwMpb66n2fvHL8NSjGW6Gkk2vzh6EFKDj9EERAYe6ECqKsgw4Y4w53cjbAmm94FTX1ZfLxdqxfEWfVV",
  "key8": "5CsLAYzeEyQ1McyAMmsAhh6fSqqFEGg3z6Q8oLVPgLuoQxTjMjcPbyupV5Cyz9o2wFLxyRtGVmcNwbqvefTgUZYP",
  "key9": "62TTyci1irqBRgtAhe6dHdNAwpZgeqxvSL1CHkUTrPB2git4f9N9Wf1AZNFFSw4edkCvyYxeh4aHoK7xJ9bSShLh",
  "key10": "39dhzQ4TfaxyKNkqtPnXQZ9Vn6EV6PDijU9ndowKNhU8DouTwWSoaupdrBQ6gTtS4xyuTzn6edeG74ksGDjWwYS6",
  "key11": "5acWCrK7kavbMo51kFfHYSGz7guLssivSSkCVe8wMsdL46cUQgARx7izG9efZTVfnP1JtYcGEKHDHXi9qnvJd5ZN",
  "key12": "6537TbssUyhZRmEqFyVSeC9UZuh2GAgvBJTMvYeV9d4TiVPSoHbrGSrQH3WzKzDihbci8MgNq2Jg2k1n9dmEq7CA",
  "key13": "4QnvPKymLXPEoL2Gexj1XecLjeNYttw7W9qxktGQz12TNBD9nUKkVuJEUJqUR5Vx1h7Vckcy9anqJa1Au7qxTCzZ",
  "key14": "5iK4pue6pEaN2vh6yN38157KPLo5BVnXr73EceeXJyMEpHnawFms8cgGrpvJGEEPaBmUziFDBrgfatRK1kRT3q45",
  "key15": "5B6y3EPZH1a7a7CmZAntZUPStgCBdWUptH3ABEwedEJWzLpcU5adWwXgVB34ctY87hAR33cbpEja2qEuBmQ4kiVS",
  "key16": "2szp7jBX4yninn3Dcryh6eUCDEECeTGAVmhFJDQ8fLj8KsQRhtHhMcw4ZJbc7M3Hs5zSy8RjypM3s4mZARFayWSB",
  "key17": "2Nr53B76z8J52b3wxZPLPT3dninNAtQ9xz9qiQVmFZiuEgTXadCgVkviYWw412ZQEJjmE7tUntJAx2zBVcFVGgtk",
  "key18": "PAFEqV5vq2iVJuQXTKHRpNoVyGRxWHoLyfTRYaVa3Uvmr4HeeLWsf1BG9bziyW5SMKHbsdz6RQUPvN3f4gL9tnu",
  "key19": "61Yp97PWWNAXbmymP9fB6YE5XEqB65JNZAR83h1EP2QQDMy1yQjje1eBVdHcv3gMpanpkrfMr3gYjLT1nF5g7dcX",
  "key20": "cCuVvss3bHAA4Dhf87A5bjtmPtrkRoMvJ5aEbpuC5UK4DguHZfGU3rFqgqV4MZsJtB1nzG4gfpwgS5v9FHpoNf3",
  "key21": "2u4AsiB8D3sJqnyLrgyUqr9q4To8DwHjR9po4Je6VPUTfEwTU1d5L4on8Qr3EEKMZrr9GncKzZE3hATCFaUd2St5",
  "key22": "54VCueGpMV5mkZEQEJmWkSd6rvpho2d9v2VF3vFAAEqxB7uWNmCtzegwTVCM6iSxnwpM1HHCmcnsQ4yyPFC7ivUQ",
  "key23": "3wXUmqUMp8BekKgysSU9rjUzituEAxT1Jx2ZoZ1Qe5W8PWswtxw6X4GXvAVf9q2TeVDFFy5Pww3kJkhkAVRvU5LU",
  "key24": "4LeY3C2rwwDr38tHyMenQgGwqUEp5UrqTv1LuufTMpQHW8y85p9ZVeJabE66QCnKQXAiaV9aNE14vh8eDuQwwkSJ",
  "key25": "3VRYiBjif1MpPRCAK7MC44eNiArrGsqJYi8iP1cp1oDTXeqS2VPjU7xQs1vAZ8GSWTkbkjfdwxW3uw9kQm7xTRBZ",
  "key26": "2dycHnTqZD6TuTLLRzb5nAbVt1vesQUVmwV5DLgsWybKNwviSVESuPT4X6PvZsUA42n46uqqzAShc8yE3EidnMcv",
  "key27": "36rKHt8pVY1hfEyrctYtzF3EQcuM1o5SH37pGFWBzboZYEZ8BhHiwdUBDw42axsjdffDPXN9Z8XAFR7q274g5Gev",
  "key28": "291FUv3XGDm5zdfq5xSPsaUE5KpTQZ3njPWLsnfhHNUm3FTJ1TrnEe4FuaB7nXRWmvnZMc3M57t7UpK34kaYfGSM",
  "key29": "2TyPKFyj5yBAaxTyA6uoKViWFZ3cp7ZvXH7rExq61bHDGrxz528LvcVvz7xwJtSezuSeNVCwWSq8URVoKU6GttGn",
  "key30": "5Wp9e5LbTadi8E7ShzChKZaYyojQAJUqbHVJeAcWML65CmLUG1smxTagG6zPspTaJqvB7akZYn87PM42b3JaWto3",
  "key31": "4dUscbhuGmuH83TtVQ17EmVBgMTEAUkHvEZACqAu4N4bFZ1wK3Biif41UJ93gq89qQnP8tWtryCARV3YTZLj16SN",
  "key32": "5xVcUisC9rX7EeDrH2QnUxuLAR9Zxn2REfVoecc5Zq8jprazBLdpXWAFAEWqQSe2rppPoFpmW5c3gdowaTTZiD1n",
  "key33": "4Rhz8nMN46FTGkFJXXpe9ycyfmCK39cGERbrCSmYaLoiyMuYyRZt2yxdqjQYPT72VQuN9kP1MAYW6p26gGhvSdZi",
  "key34": "4YdWf2TcW5KmgPj4qvRQTcppTLwWZSaCbnjq2ypU1K2coSwKfpbL6rqLjw8eC6ncFVfxzXD4dptVNVdM651D1rrL",
  "key35": "5XXaBaoebuV6nden2XgNbeZNcqGdZGHyNaWYcrUZ8kF4ghJQ2r8hp7ore819kKSYYLwk3o6rmWTiT7BxCwZgxTxb",
  "key36": "u3f5oBF3Lui5aqKLdcy5fabRGokJJPdh2fBQpZoknmzZcKbtD5aQqiznz1Va8z7PtRnQouyA54s928wSHQnEkuL",
  "key37": "2Jfx1quGwggDbWupM65Q4c9geNnDX7Vz7c46bveyR5gK25MNb1bk6if2jYmv36HAA5xo1CG8HHo3fF9B8piTry7g",
  "key38": "5qofHExV2t1CKUe6M2PjGGHbGQw6JUJkWVXoMALXyZLrjZifnrb11AjE6Cw3S4S4smzkaPXRGi7yQpRGyoyW6pgi",
  "key39": "25rhHw3Se6fXejANsp3VssCi2BwFzZnYNKY1YijapwcwZkEvgFWzT4pxfV6tWr7TyFcbBqhAqgnxVxk9eZWgUQeS",
  "key40": "3DwjuTKEbrJdSvjd89dpCyLiaT3JcfVALYD8GLSzvWmGZADdj6ZNzZaq3eyLyzLVVtwNaJM4Y3poVeXtbRbF3Fbo",
  "key41": "5QgiE3vcTSJ7H8WZF2nJDsiuVDWGFt3zFMhZd2eQj7x5jUgpriWebsdEboWGkc97iHsn22x2kCbaQfsXxCbkYEty",
  "key42": "BgDxBrUhr5rpx2CjGiGcViKtKcyvS4VtjF7YsVMTKExBmZC8LQcvA4FPHxXSDfVJSNNcxEAAoBPWtaJXtz9jMJC",
  "key43": "2ZuV6sBdqHrmJr7YHuYAvf6N5v3cA6tEB6Rw2rfKiLcQpwi32vFzs6F4sE7ru8sFneYbSNSgSchAFpdkoEB5ZuSM",
  "key44": "55nMqEHb2fkURWeC3FziBW3MvsPnWqryPAUXRDbx6BiXNxiG1mJVFzNyMAF18XLefLWYSNwBNxR9mrrEz2d4s2KP",
  "key45": "2D31mCqmgJ99H1EBXY77GhY69RbCBv4L2k63n1cowKGyL6j99k3FXUpVPNEWiN7eYxrhvLvaKUkP4VBdUDeR9Xf7",
  "key46": "4D31r3XQmb9z3Y1HcbvJWNTjj9HVVH29BmonzhDAWYvJ9278Dqzbw3BYwvrLDavSKcY9w6cKnBwDfeAAtgcbwXjC"
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
