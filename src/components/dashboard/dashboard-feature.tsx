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
    "dxyUUciJqapXjbovE31Br3J2RTTSFi8rkv4v92rUszwb6TC2aYPJ6ZZTj5Nks2WKNmH1ai3YcPghYdE6NUNZ1mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6CnTQhcQxJXkHipijCgFgm2tPeZ1ozrpe3GeLha9iD4uJTD71z7mcscHGwsaubzZZTZH2guCxCPfzMkxEXQZLq",
  "key1": "2j13mWBG8acwZdCRNhca6g8Es7AHJoSBoSLpKPCd1bmnSYTAnzNQTpDcofEtW1n8sDitUWu6EqrjVZyAGMqHzhQR",
  "key2": "29vCGSshFCfKwqycebDJjbtVK57Hzbq5wQuzYJRxnVSiZMqe57DSVPvLseHPZTdYDTUVpnCoBTXQwxyv7FgvaDPB",
  "key3": "2smMSMAYs96qegvmVxEC2ZzqERshC9cZc8eQm2hDZaQ3cRsZuhsywL1kXw7fToJjVtekp2bP4uYiNsgmwZ488HAk",
  "key4": "33wpiRzBvAWDCCK3HCZkGwjdpKKpWTFiig8YobsWLW9F4CcSMU8B3D5NgQhVkzaYoY4Jzmt9rsz6x73vRqm2EB9P",
  "key5": "kLKEGg1CPkV2L14uRG3GVbK4xAfr8eGQp7YoDdh2G98yv9w6eobZbWNfdDoZ8K8uL4WPnfc79FBDxSTg8maUvTb",
  "key6": "4oQ78ENssPsycaW7zna1Hu2ZeFfpcsu94PfzA837AjcuBdKrWoLuNjUMtUqx9TAm1rypda6wx7wtCS27Tn65LYQN",
  "key7": "3U6PRbbgvoVbzTjCsGjtJ3Eoe8wFpgM1kUZJEcyUgSnErYaMJkTjcPbB8aiTChTGrh1DgB5bkxYTKAiTLZ38c2NL",
  "key8": "4dSEmaXFyBPLMZuUxgWsYAZUyuDRfGtkSFVChLhcfETonUvpiRrVeiKJX4WWAr9XsVnxCjpGw5HhMDEjqpadxnvq",
  "key9": "5Q8orGLmeQE8Z6nEkBsMX5eQjosTZupsG9cHX1xVQW6xG74GcaqQb3nNeaokWxVt21PZ8SQusRea7Ug44dZCqapc",
  "key10": "33s4vYu1HqP6aoSkF1gWbaqyv8WTx1Z5HLWWr9EcBYWJfE3bG3a1qRQJXFjg4UV9rhaccZSt879McqfmhBS6Lhpb",
  "key11": "5U2im3cknVda4qH5nmYBj3sciRzLzMVqNkQUGtEE5nMfksqZixEfBDse6a4fgB518iP7KAomV11fmYH5jGBZCUKm",
  "key12": "45SY9q68otuAEJEP2xPrPmKZQRw1MuBgZLRdAWgYBSBwgd3KHXYXvsxjMYifLXNrHeqncpmDBRroV1YghqyWDtuC",
  "key13": "5GH1J8iBjWYwrgJxAKySgEoQkgRRP8yaTnExYYzopukopRSAwo1nxdMKMvgUWyDZMynmTeGXdjBxQHHGJKtneDUE",
  "key14": "2atKR1Dkwy9XtbjGrj517DhckFbTnkv4EnVTQHaueMoym8diDKT4cHczJ4Pe5bWhYGdFEuRxPPS2g8K82MPHxeSe",
  "key15": "4Sux7xbrVCXszMRuK3Pwf5vffbxnxPfEw47kWQEXRVftRuWdfTMvbq2M4mwQkoY75FvD4juFKNcEf53czpoXyAzk",
  "key16": "UNJJXaADur7dpJqTWJoN3BZ9iG3RFWK29rPtpHppQ3ubyMJpDctPqqw4ExfT92X4Za5PGtjHMe68XoUGuhyoY9w",
  "key17": "2zvP5ZMYZmXzQ2p8PNLr7tJjLMTBp7wfVZ8xSgvenPNpqxVN19KG5G2TMzq7F12XtK5LcSHQab1UYTiCHUNEWVBG",
  "key18": "m9cgLqR9yQ3kmbtHYJbHJijJ6kyn6ybL9ZDFaYXXbRca5NTwnodTPdWsmmYEEbrX6dJbmNV5W2kL8e7YPWJM6mk",
  "key19": "5XLDpEjkRCx6MGXqxrV7GuF7Z6EDdU1NXiVu9rCme89TNzVwbEqUPYNw1K24kF5XYGyFYs4NabmgPVRgsLQegmN",
  "key20": "3iegW4Htrz88GzSjGSGVNx7mohqRy5cRYjHW6RF5zHjowmdyMbHF4fneAHKbpjG5B9EYrf1C6a3Gzcu3rRw97P4r",
  "key21": "2wcnoVrXBU8WVQnEeJKAEnZfBWhbi2fX7CkZqyeSZ1wNbfvN1bmCRbQf79uCwmzitqynwsrZqwuJ3pto9Bp2HzX2",
  "key22": "vhiHBBtA51BsaayNWukogoXuZJXEVatbLE2N3LR8xqGzkubjzEF31DLUKN8CbjiXdxQDzy8C9iHU46RfJJC9bEJ",
  "key23": "2WYTBLg9arC7PbodJP8Wa3t1JcobvkjUCmL6kuvKNpGDxFVrF2fWpevBigZgJBx7Wrbyfpdqcsx2ygE7KDCq4KS7",
  "key24": "59obhRt1bgFVVLgDtSAAHJ97YdXN8ZxTDtD5TrS58sNdC1WXhsBuMRwyPyafWzjqGMQekBwwiqk4HcpUeTwbYtC",
  "key25": "UeWCJ2YmZg1nEdMnsk7SUisyZZqvTXpM1VyCuDfJ9Fb8kBVQ9TuK9GEugH5CmBVeFVoFWHo8DLfg6CWoNjnsh3a",
  "key26": "35wa3oRiFKbNy8aLBCAmYtxz8ccKv24wkZwtp1MKDySac5wa8aLVAMa9NndBSDqDHcgtFnSGm1PdFeh6oT7ibdbx",
  "key27": "2DFusCaWNMRDqwRAv9SGHpFJDA39wCb9S9VbHK8guY4z7KSncse3ZLBSmufGKKc97iTB8GKy2g2C46VjC78VyPs6",
  "key28": "5ArmhrPhwPeSa7sZvkmgCUGVwT6E2ZNdMgfRHnnB6et4FuKE8Lq7Xm7tYCw3WxtVKf6mnhuGTNZo3jzvNwupAcwA",
  "key29": "62wMqU2hX7dQDstZvbDs1SzJkukZhMpTLoHxsqyFuwLBPvf5p3iNgpt4LPfepLPe41WDGb39BCJXGAvjZGLVan1C"
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
