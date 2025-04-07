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
    "5TbwetRFkv69ckQMy47Ujxc4gi8tYohpCwH59MmL6xKwYwwM88ZxjA8PyEBTbyu9XcS1zPgRT25J1FQZ2b5v2DCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmEwxjP9QN7P6c7f1CFuboK9vwa78xgVFYmsiA9uQJsnhcw4uvkPqQm3iCeDbkHjbrTpqSBU7gnEfefFAdPQ4oF",
  "key1": "3rNAwNZjZWfyZ9diUvPb3jbbSoQuHLRGCyUkthbt9uoxEBAFBYq5tbAzvYgQXkx74LGU3c6djybqngwRZ6wPRA2",
  "key2": "fm9tqC7RQRgrJfjiJQ4fQobjGTojMnbSQB5p3f7Xj1UETAtKDXmymNnymLqApgYsiiqmn51J91uE28r1DDszPjv",
  "key3": "61MqdmpZTrUjjwHi7KFYinoq6QwipAaFKM8xmfhxHeu95zCfngD5aPMnn8CygXD5niGkRaiLhptuvnud1tS6wFy5",
  "key4": "3fRXeNXTB88P2mr3DE3GHsuKf2hXuABSsZDTTFSPuVVZsffkqQAqKKvwVK15YyD4QnxrdGG1c8EtDgEGDA3e5Mxz",
  "key5": "36ya1Kwdvh37GiMEFTCuVKP58PahhDMNGjonzTmkQoL2bxwNCru9Udi6UbkVR2GYBSDjEmWfVrGXTUrEcNNNU4RS",
  "key6": "4crLtpBzKzcn5QW72QQS3cxn4x8CxRWanQPMQTMLdQrsEdGsY49mRbtUPgX97LXE9vgvZSYccDQP7GPijR6pRhka",
  "key7": "2LhdV9TzD1sZ2rJcKKVWieVJmFcwwjGYErFTbxb9V2aSsVbN76gCMP5Qb3oQgcADwXxsgdkctDTs8FxcGRyJmntf",
  "key8": "3Bjnj5qG6qSFo5LqRsd6RMcsWEGHdrzpnzT3eBysPUXgYf6UaSmxa9tYho9wBhjZZnBgAUXyDzKnYRznMuiWyTv4",
  "key9": "3YquDboo7yrqjMsd8V2FGpCa3oXNfRiPxPTnTiQT81yLXQt2i9giQRhBG8rGHTQNVi9Cp2meMdhHsiFP26KgHvX8",
  "key10": "4PNxpGL8wsjiULMFBBc2hBs9KUnrCniWedkJiDFgv5MSTz5aDE32PzcLZUkDbjTA6ng8q52jcgZPZgMRG4dL7TBj",
  "key11": "N9cLLcaeD4UfTfUPAvdg474TL3hVBtrtPyUzJ3NjAvvbhVgSPYHreQ9cC8Z49NEJsaL5aE5HzaCxCf5SzXft7d4",
  "key12": "jEBDN4asmqSJAuDgkuXv6fumuqac4oTBJasS1tUgzA32m7mHFTe26wBNoqSU21pTrWxLRMfe2ixBGYM54ErkquM",
  "key13": "4K19vTWVWXvNYdTa23eTb6tVgqtbknmTh14p8DwrYHr1w1vBfhi7b9g1yfbH9QxqnsMxMw5fvUTsFyJSk5vRKFEM",
  "key14": "53XsXvEdCfNoN2hnd4ETfyecRNWw6szUtdiaejP4McsJJRdKAezkFotpD5MfTWCQFg3GyLi7LF8UuQ8gAfgVj1Mf",
  "key15": "5wnmRCWvNqS7KVyMjMpTQYoVaFZwWtgoavHRUiMZRh6e3mBKqYpP7HoXsVZ3to6uWTcdC7HCpJDwkyiEbMAnt21F",
  "key16": "2WPEahbAfNLjH5RHVNMQSX7LKiJP6uZAccZi4LsBtXhkVT3m5nEm5tmZaYmx158JV3EmDTv2By3mdXQw3renra5o",
  "key17": "5sRbW56G22feeePNbvJcSN7b5JVA1ohozddMjHeFrv2J6cSVa4ZJ7wuhbvXtRzxkgxKBgLHjYAe2dz79V1q6xtf2",
  "key18": "3JJjWYmayUeUtbtRgLqXfcbpBJ7VAg1Bze3Fg2Hzdq7KuN266xQFJhSWQJ5CJFFpqtHMxJxaTqHTWFvwZoqZByoH",
  "key19": "4XnNAQzei3y1Da3UV333JteWBWjZ2vyBHYUptX33aMsXiMKDCn1Eobg53VRiR6i6UFjSwCv12N189DEvZtrYTjVt",
  "key20": "2BJ1vAcNFyQT5EMQ8uRSFG4VRWjaGG7MnCw4V3LAThbsPQPMffVi22TzpDQnAqjJ1f9NtCmQSN9ptpnaGq7vcLZN",
  "key21": "31xEpK55ocLDjwrBQxCxZvqgyX2e33VS7dqt2zYTKUf33xw9xic5mgqiJGtwjEyuKUinfsaYkZf4nu9wThAMGotC",
  "key22": "5t1xrT1G6hwQupCisqc4xFzCUqnpNg97oKywZbXG7CSQjKcJMSVyLEyxR7uazSjyyqScG7pvUUKVvpuJZ7hS7CJZ",
  "key23": "4xVRrntHME3sVaqzXjSEKXq81hUx5Zpzq8gYS5xVAYA6p38HDAUtQrReazaf7KVPCV84qz6NmCVFqyuYCtMWe6BN",
  "key24": "4LUdaQWaLbVA3mk7Uzqob4XkCdi6qqx4UGrb6joTQwp2B4B1GgQe47sx8P6PXmq2ehuhX7Bz3aFLuFsEhThc99F9",
  "key25": "4xLo6frDWzGGXumuAQ1x2N2KTHXV35nMjBb2AjRRkGEoqiypSGTg4DgUMM3pAcEG1VF65RCALiLrewSTRoLD1rux",
  "key26": "4g8e9jt5u5tviP7LrxZMZz9CHVb99AKgZEnQhS47yvTmGAQyRFPifDj8eromJKfPqTwBSR8uZcbtWvRpb8XYWK6y",
  "key27": "3CXPJUdNjxrdLoQYeBEPBhDJSKGRXgj8G6Cx3TnnhGHkeEAHE8kzcNr56EufZaDwfRj95zgHK3zGYnv8Lw2o813H",
  "key28": "3YoMc1hMcZmYNXQ2feRQRtiekgUu4PpkdupkBWoFrfJPpX2DQZzEtGwfEBAdJhySW1XoV9sBmVxUEXm81SjKj6kg",
  "key29": "276LYmQk1jA3URo69uzsQmjVHi7cgdJMGL28XYFrUR5KzF4TpaLKz6UsQqeBDrRMh3KxwUnyfaDaq9FNPGY63f4T",
  "key30": "5z83UMmkYBCTxYd8D9HZFZWzSZwSnzxY4oCzNREPoQyFhT5jjSeX4gwzXF52WpUkekZRcEVm9SJHxeMx9aCBPZnH",
  "key31": "4f2FWJ7kUYGTyUDLCGtfiQ95bkj9ofYonqnq9vj7nCtqACF8ERG2cB1TBYSLovdDXcb1389JhCf4A6v28ueiPHcK",
  "key32": "2YnQLoYreiYC3sBaCazfr5hskZa9VHWS9WUwVG8B3uGPUZ4ZRa9Yd9pdCX1U7RJ3Pn9j5DuHpFeeDQPSMUdnG9Um",
  "key33": "2u2ejNBWeadtkLxzJCXTD6MYneNNLpfidFrzEqXuaTVHYoV9LWHEDKiXVk4TcvwhNFM9t6Hgufg2PFsobzUrqwfi",
  "key34": "2rzXha1HzN5SWsviTL9kH4jQp3CNMXt97Uo6Xq6oS4PPT4rbYBLt8YvMujxvsr89T14mtwVS4M5HLVJoaVScqCcR",
  "key35": "5XbEBsPFUqS88eKxYHussGP8QTsjiG4HZD5NsV8xLpnbD4hgqizhsXorZM3HgsYEtGvRsSwBAdkuXQQX6ND3GDgm",
  "key36": "5zkJYmRPmodkJbo8FXzMriFDyvp5KFmssyKfPrV5Ld7mErSacyxNkHUf3U9vtzD49FEtmyyF6SwK2k4rVbArvr2c",
  "key37": "5A62K2NP2q3j7KzbhkpArVAyyRagXY76NVQM8JRmtc6yRZjGm7x5kpsNdQumevC2hgBfJCKgim3Kf54Luw8SZcp3",
  "key38": "5ygguY3s6ykNqZdXh3cvKEYpuFajJ39wfM3YHuD3zpKwR5CiBe6mN1PQuerkuwzZsymwUhf5qhUkNa18jGGps5As"
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
