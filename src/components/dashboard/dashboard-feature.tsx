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
    "2Qh8yKDveS2mpsJ55XkP3R8hjPZaox8RWpkUgcrGtbJau4Cdm1RL7pSYY2aD3WPeUV4DmNgJq1QNmDgBwEkX981f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R9sosQVwMazFXUKUUeSYdHKmjsmeknJ2iZfBkS3QHCFNt5h6ELXLhi4e8UvDthV1fHtxGDzTgkbypJJCj1UFxSA",
  "key1": "2kzo7jdMVJGKeFn1gQoZuQzGRXvCMxhWUpBHrU4CgF7hs4YgES7wxg5zb3rcmGG73y9fZ33Zc6z7YUKNtuqgFxcm",
  "key2": "5APmue7BizdrSCH4dARogjAA2sRZnoDWRkienyTj7q7u19hESG8yC7Ftp2viKhjygraPxMULgVfFydikh5HMWgFC",
  "key3": "58ioC7op7Fu9F1y3Sjw3u7FaNFeT1snzgJRiZHTWAQE3ajWEaju97JNtuZpqTzme1jcum7LeE5ywQdEesdbCsBfY",
  "key4": "3QCuTfhGJ8nd9dPppcEHNVd1kj1Ei5LBAb7MB9JQchh1iJHwDPxjokkSHdQsJGif82kCdAA6obpBDTc514EdDnyC",
  "key5": "4jBaxkrxk3ztRU46xK9bDdV5owQvAGDLZBCkQU8HE6VoJoc9sgzNjnv9x8SSTujTRGJzmWghHiPkLu4SBbEf795V",
  "key6": "HcPC486MCpvN3i77Pmdcj2y51ajrRQrZY67iCGZM5xMt61sLGEwchfoyTPqgat7zGJLGKV14xtWUo6m9JLLuZ3Y",
  "key7": "3ueZ8asn18eoE3STo5cSpDgtqb38aebgV52icGeS3bDnbZehC3GtBE9T2WBb8muJghoNmiu6kaS4EYyC4nbLeGT8",
  "key8": "398iZZB2D2v4LeP7hwmfJ6f2petvChME86bdEgjm46NeXmXZz8nJ7dFzzccVcFAZ2pWrs7mdmfbVCYj95WmahhAR",
  "key9": "2SA2LJAnvkKMxv7BAgHhLoibWzyJTqNA89pTmdoBPqg6ggEz8dnbLsZgjBcbDwZvt9YqEmT92MeSJ4QoiUqKrUSD",
  "key10": "24UQUF2q1nXMVHDjzNZBfzGbRWx4dSXVTYjEVa8C7amGBvRwxy24j4iKAVsqSeQvmRfNbF7VEyQaRS95qeLgtxGq",
  "key11": "3sbq42i4LfgrxqMccttag8sGqqBPxRgKMDAiUqgDTj4xsVEnBQnNeVr2XAexumzhXoiFexNdaQxHeatMBaRrAb9J",
  "key12": "3cHnByFJsPUrhsbi2n8xFjUiozCFCrUZk9AKf59gWndT6RWXF2Fngb4ekaAYcVst3forX5tt7okiFFTKk4HnYrcz",
  "key13": "5cS5thVzVosbsfrxDW9tdU3gYirArTDLrwUZvAa8z8Y8gQ7LZhPvK3v471RmXPgmzwLP8pBx31rkjJuLchCNiteV",
  "key14": "5ZQTXBXKecBQukkc7cZNDnfLPyUkKwVyEohQPdtajDvQ6DrsnkRnAH8urHjCqyPySDZajX6n7NK2YW7nozgFUZ6e",
  "key15": "2pEaMW1Lm3SH5creT8dghqCgrgwgKjvfX3QeRq4gfyE1pZwMFm5MdeKrkHFmwAkzAmTujnBJwkAu66UvxGUCMEhv",
  "key16": "3v4KA5gEvB8KnPUDdpNEgFYR7bXy3LmKw6uCDqAeHmAhKSP2YCphuHqtoU3b3PdHpD8ymyfyMEi1pnRYdpcd2oNK",
  "key17": "5cYdhFGEnepFzUfYvNhfMURVh26KyewEZEG8bsS6LoxPBN6KvW38kWVkX5wKpSBLq91xdWfQYre6Yg1Nct2ZibBY",
  "key18": "5UMUpmLfJiDrEUw4sX36R762KtkqQiftv6ris162pSRVxTBzJ3TRgprkbfRoEvu8v6xzNJP4gBEH69CFuFLki82e",
  "key19": "2qCHss3ck1Jg8qKbbn5d4KFm9DNWRjvbShgQUK6FhFFCw6WL8XRZB6sxromEgpGzH6A4RgaEzsQNc2MynwrWu2ZF",
  "key20": "BdbeBq7a7F5Whir721iFKK7eZuaRGM3vGGjE5kDMV1HXQUmu6rfnhGZhRvPcTskRb53vpqdxBaTVsnpLBPjgAxW",
  "key21": "qAMB4LYNQekDKUV3Eukef1GyJ4m4KYZbpGyjKev2GwaYGRbwzmtxzwtVGMnCJ4EivpgvVFgwxNiejMTwDcQgfCs",
  "key22": "5w6sLSq1GjZ8KvctBWGBqf6GhJjVCNbH2VtpZH3zANuKHNWVLvHuNNJ2TFaHXVqV4WX5ETNvVYR4Jp3PgVEbxhh8",
  "key23": "5v7otw4UDJvtvLspxNzhTdzoLNcp9ZLCpKzZsoKnqtLqXA9wftdxD97fRAxQcCgs6vtNqiBnHYsjMze6LQFUcs7R",
  "key24": "PWKVoLcG2YFcoLCMQwEiw1R3BZrm7TZMs3KPRmUnXhtrXFfidjKMLfvi3QmdW9hy2mR7Z9xb9b4SXXeSFKm52HG",
  "key25": "3CigKaHQyeDRMe7o5hCSPednjtp64PuoGb7T6zp57gWMaSt8Yot19REnfLJC9VocrhUtHJFCY2gb2gFjSeC28aLs",
  "key26": "4eaZ5pGcgCGbnxd8gXDRsgLyVkWDSR2FejZvF2qeMPBirDLcvNVXSjywDn7varoPN1sgxdBheohGGMLiqiWDRqea",
  "key27": "4xZPHBT2xtpvGbRqStHyT32QGpNVDcNoqZmPeTqWQ5DtcWjPmrnjv8VkjBPVziRL6nwEiXQMFft4uNZB6Hs8Lv1M",
  "key28": "46gyfHtHQYUCNmR9DApy2ruuEAiazWSeyE9Bawwh7Havtivti7R7NBucFFhdN1Npg7vZpWAM4HYUxUA6PA7vMzZY",
  "key29": "4C4JzBYhmqHgu4m4PAJR2r66pgq3gFuLNr2okngjosEtbr6cFEkF3H9bchaBnaq3xfNSUAcEYLWiYtahPtp5S1oF",
  "key30": "4rsh4fxgvSJxxijrZTTbkh6V7bWbrqPqCHjMpQ7Nov8UY3CDszrox1S7ShXP3xBSPBDSFAe1aDuRfxyMGB7eVzPq",
  "key31": "54xtppoY8CRach1t5qircoTD92oyQv9eifMgtqQNzuCFquzxyPWRx2buUsmFunXa8ZXkcxwxgjURCMjFHTrnQDux",
  "key32": "5T126SBqhbLvndGcnMVMuhobetqPiv1YG6vwbiZrtnRGB7BSnxACnGhu9YbpB8Fu3nxWAigpaTA9MYHjjDknWoWw",
  "key33": "35i4noQ7gmWJYp1xs9DHSncDU8sus7fwEgNr6UonZxQ5oXWSMCnPt7qvgKHFKo1wgSKLufd6akhZxnNHeKpeFMzb",
  "key34": "2EvxKhFuGfaKCqo558W1gSdhET359gMEmPXiNc31qnFvkYqi9eLXbvHprSSG4g41T13nxYmjnpmtS2sWCF4sPXHf",
  "key35": "5srkHmByH1rXtcGkYfW2oLUoSuvWbFWziM2EkxCxAh2xuMVyNjppR8bE9HVGjGeATtvngQS7zPFJaauMF7FycuVA",
  "key36": "57A6PGFofNscBghwrDt2v9Zp24B4nj9FGHwf88LjEaACbmdnrsyUS75h8SKtFnuCvnEWyttu6TU7g97Dbw1tCeaf",
  "key37": "3VoUmbPjB2vpn4six4yGFvhXkYVF8LKhEFYdZtg93xEXF8DbYbebh8TTmQuMn69b6hzRK7eswNfbNqBBSBzUuiW3",
  "key38": "44nk3CKbZG8JJC1QYbvePJ1suivevTCmdwHSphjWqNWCNShGn59yNw5ppbcdzawF8egH9VRmRibw7jpjyMDhM3iR",
  "key39": "277BhACT9mZwKKexDNYBq5Y8nBypzaahdiK2dnMn5D8H3zY151T9yPECne39DBS9FXA2bURA6c5RCen7TmG994dB",
  "key40": "4Vjvzxv26D4SfyXdt3JDhQZ5SwRLykq8WosiL8XAtoLbFGW9Sq1SxCxwYwwBNenmT7sA7T5JsghSsw6eGpD65au5",
  "key41": "3oYBzZJjMPYQMDw8QzKPiAch5AwgiVJNgSsCMM78sQtPPTR6ayMHUCYGJvPLXuMtKJTatUpSBq82SuFUbJTXmg4x",
  "key42": "4bxuMhcsu34e9thDSFZ1wsb9fFwYWqm2Uu2kDjUNbG8az94iAG1XMojgftFoBsNGNjrEroB2FgQU9K64wC5F32KK",
  "key43": "5fpTRcBiEFPauLhEA5C7EitKJ1PmrWCtyZ3TSCjR4PFsUXJuzZmZQQQVhXfvshi8R3gZtFGneMHJX6br51hJw91M",
  "key44": "3fVuNzgr9dq5PRk6b1tDfRDEEnqhW5dxHzTGxSDsdJwZShjgttuBX1fHorERjiaqP1QZ83DQfK3tr9wzCKw2W34m",
  "key45": "291kXxUEMRM2ACd9gcodsbHHF76wGWBdcDE2kCPuyNNbRnarXbo2AsHC8nYdTLm2c3MmvRxtEJYiGP7L2j9YVvf4",
  "key46": "4M3eoYPkg1tpEcmvarKAhvRKnyPDW9Xq5xfZuLY7vGE1sE4Z6MrF1c1hgeiGWXQ8vQoWb5exGEym3Zizq56ZbkuR",
  "key47": "ARMJ9JnGfwJwhLi78XrxajqwgewrSjrFSUzekwp5pzxHbWHHCyaRmR3RWeQ97LC6Urjiixy4oNNwikEyFRDgJor"
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
