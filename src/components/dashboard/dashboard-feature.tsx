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
    "yycHMoFSjUH8snknyobLuutnJ3Hj5cQyL7Tza3NPdPJzMMZjvznoXR5yV2X47cVKwmuTTyzuiqNvgSTYFEqt4Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kco8D9h4s1ccQJ6zCSY3DYcvWYT5nmmKnxk8ExLC2QN5AAZPb4C2RbDBhYTKEEzMoDgwXmKE7WKCQGmHas6KkcG",
  "key1": "3cyFAG6Yg6GPhzqCrgSn7eBLksFqoFAUtEkcyj3QNiH6arhyt2YmTy7Dt8GbsUD4H3NLfjC4cRDU89LkPsCeWL6c",
  "key2": "4Rv4omnAsScs14Qz7YRrrdDHJ6ffzGRpKWy3Kn8XBXr6tifKB38RoEPFqu9wf6VKSLNEjCVRR1LYXkGBoVmPM2aF",
  "key3": "47obmMGehVgCvoLnES9RN2HWvRTXu7xPgENvizYua84uWpMZcdffducGC5mhDbVcpR1MWyCt5HdQ6mBiM6h9eAx6",
  "key4": "5PPTr5Z91qeALBbfEveYA62fmhJfFouvRGKyYyamJXjkR24qABaJtkv1TbVamKXdLjfpvou3yBPbjT2z6s1DN1ZJ",
  "key5": "3A9GwbTf8jKDQDYNkDQiF2HzAEHRFbitRgG9qAiSTMUbzBA9NWueajCTHbXT3i2jkpDjwUqK82hmDEs39sPSqo6M",
  "key6": "4e4pSQNZFX6w5TvHXyS3eHS8pJwYBhaQYueQ3rYwzx5nnemn25QrBvZEnATyvgfHgj8gUpTct66UjCx6GLioPWBD",
  "key7": "2XMTmWL3rv2yazEccfCtjAzM8e5deVQwBVKFghxNozYUkWz1zqwTswH2xDxxFNJ1tZqeHiAjXH4sVUFhLwE4q52a",
  "key8": "5uaojSdyPnfWbHRiBpJcV8iMWwNgiHr9YUhk8UVXvYgJMQKdRvCvuydbdm6TQk5incAy4kqhFm6tPbkHLakdkuTX",
  "key9": "2NQHaNAyf43Ziq8T6qZ4f8TcrNrqDYVjMx3DCE4nbQMMy4xfRMazvnLctt1wtsTsZQ7bumKHUqKRDD4AY3ruk4tD",
  "key10": "5DGdzauiSKKxC964v3dgg7G6YuoDPtqVoHwZkQp1bqtLVRFijFHSQyf75xCq2chkeKT4Kg1LcXTzHbqjLpY9tvaY",
  "key11": "3cEVotKaaNk9LNSK7FMurUh2gL4q79TBMVaR2YcqSuRNcYr2SEgFz3fBKwCac58MnDJXGd7m3pJKudvvvjoj8RL2",
  "key12": "5qec9ufct9k9p4gR8HudiQQ6wCjVAoPNgoqTLwPDVjikWfrFb6UE2vgq5JYWYwtY4hXSqGNSkrBB56L65maG75CG",
  "key13": "4oNfecJ7R4Q4aJLgXJXE1qSLHgF1uBnhpRzR72UxbGE1rW2beqQYfZ5E9M1Nkjt2suUZs62Unx1AK8b5qiEvTmR8",
  "key14": "5kpz7nDR7FdVCWpZrxvx6C5MztMxx8WvV7WLZ3HGj8kYTXJenEEXESNWwcABTnqkAhXsEAYZh9bLG64fS3qEjzde",
  "key15": "4MdL6DRmdqHtG7C34mi3dq2RDeX2JM1z9Rjm5UQeEEC5qLLYh47jYCwHVcrC24BrwYZeMQ8avLZdu5ZAgqZAQFtg",
  "key16": "5GPpqTY4x5z6DvPkzurVPjPPdUaph3NPKx7woGAnbi8LoV8WMRDcKEKhxFQrX5hGpHU7cYbSz6Y32GjtANCy6ovT",
  "key17": "2Gn3BN7KFUkiVT9hqUEMM2ETa35oVz3Ue2THZQsZ11v6Gb87ARBwMrUSeiSf74CyEGXhgTDfr4hHX9yuYxuq9PBk",
  "key18": "4XH3Qt37UESUgQAcQSvXdMy8vb3QHmWwyjkVxZy8rqbxV1oSu951xTckikQFYVkT3ufFFsfxrmxweKZKoYZVAyBV",
  "key19": "3oAymivxQtq5j3GLM4UpofavDdv2JYg1AqA1FNnVesU6kVW5JitXTQ5y6NCYZ4tyVbsR3ozvnNpmM2NmhX4NduUq",
  "key20": "54DLFHbRUjhyzqC3jw9xzFP8z6EiV1XxnTsF4uWYkCZh1ZcrtFtawiYQcWqUvoBefdnRNpznk4frXbB2vzhfYAX5",
  "key21": "Yc4ERLd7pbA8VFUxc2tEkdgS594iTjLTmHkxSyxCUkb3G17vv4oGE2fas5w86jn6CuBT4WebE4JXRiSTCZLsZXU",
  "key22": "NDp1aM2csNM2MQqtTnvNeAzyVtW3xePpgzFmVp65TEQpqjpuUzFTp7LVDdeRyoByhmCt1miKxfnxxgXZKEDWeC8",
  "key23": "5aKMpQHbJwtKUf5KQ7p29pwd7kSG93JUPUWJd3Ja5ooyNGQgyAN3NPH2CPBLjEBsbX9ZnzPuGidyxCYnUGX8BU9i",
  "key24": "4vZkBWxFDXS2fiW1RREyiP4FBrg7RUj2vxAfPphnJJeVs8683YU4HECHEp9GPhdKrP7Yy3JThQfYfbqvgJXFWWNu",
  "key25": "5YNCsN6TXq19zwqNvTvAkFYYuWzi3T8Wk1AS8L9nH97JhPrk7sx4CHt8kQU2fLBKVF1y22HA27C3JbpUeX1u8Wdz",
  "key26": "64puZ95BcxTFeHo53fc1eAKHb7WwvK4bFSyh18eSx8LZsBPy2p6GtodzL2mXSCMBvGYoR3JgfkbE5PvaA5kKUtuL",
  "key27": "4azAH4kvejctNwFXkqNHqFcTM9SWGsVztivzi8TahFW91TDrsj6y5kVEVEFCVt25bJwp3Xgqx2N6AhgSMzxXw8wW",
  "key28": "2YJ7KSgKWoHhGuXNnzr7rGQUUoCRMZKnEARktjTrKxbKWuCavfNCj3NQRsHGuESsYC9QT48SePGBQDas38fESdcM",
  "key29": "FUCZrtAgA9Sq6pPfzEVh7G2tcAzsSyY8ky1vY1i26DmV6BLXomHiobyhyrgKVgvYCzG3yXCxNz19HPLaHkhvogx",
  "key30": "3ZzNQByBa2UwudpZcYRq222Rsihgtvn9bSj888aDsv2BZutYESDPNfbvaiwGP1H9zkrcv6iDhqJcQTin1EDoakH4",
  "key31": "3auLS5wxEn7SFYmYpspPFqj8G66Qxf4LVSXj8UMXemP5JLweVz1oz4N4DH4omj9DWMdRuPqLwvQxgsprWNG6gChu",
  "key32": "3ysAm78rktyCAgxNPSVmxWMixpHPfcV8zwdRhFR3dRCbp1oK4mxrFsrj5mB8mTCu4rvHvqQukbB3b1BfZrdrV7kj",
  "key33": "2RuY4uvFrcoVHgBE7PQzKS73A4hkzEnMU4sQoGDFmd2PUyfofrdDk2ynpPT9MvECcztZvDJjAN6RMcb2r99gtmv6",
  "key34": "5vFBb8jyxQ2iGiseAAk3v7bANLyf2RghNF2zr5CdaDgX4gBoDJWc5kLVMieNnHGvcUcft7Tj7Dr7zvGzKJCfKJK1",
  "key35": "4t87eiyJEuKz9Njq1Ct5hXrfdWd1b7DcFHqr7vb2YF7c1NPphrh4UBT356LBqNViwCum5VW14QMQ4Vr5JrbnaTMT",
  "key36": "J8guYDgzNFysavmpi3Uxu5KLuNMVoPKAfRsx9zg3YknvQQYFDVfduGPjUveQAX5Y6UYXcsKdgDdqtTQa1ZBnMDN",
  "key37": "5azSv5eyCamk4zLEbdkgFh5BXFdqDcTbocqoixtG2VRfrgT6NKvwjShfFrKAaeZ9XCdCo2bspKeo4e6JQ9823rV6",
  "key38": "5CEVGfzRzqj72VfYRmTswjwNR87kCtet6Uaiyqsaz6sE5xe5UtrinnDCxrLxsytcY293Ws4VKzCGf3qxo9aNLSzo",
  "key39": "22txJEB2RjAm3phdgxLimqgeUiVKhfQFnmkDcR2nWAQ29a7jrfNHQ4tPNLZax54FhtrCcLfN5yuCQAWhQBUxYqZb",
  "key40": "36HdzkBbkaPZY89PTB9Uc9L5jTzRgGapN7v3ptx5p5PWccCcSBQQbdQY67bkjqB7RMtRwrSK65LL92qwnLV44rUn",
  "key41": "4hZD4gfRRjobDajNrc7aCnYFZSdef7Q2RTMtAqJGHEGKRsoi4otLUv3QfNnC6punpvrHLMGmQejbLNRc7Nc6XLSQ",
  "key42": "3GkbJ4TM1NL3jPvMvMi6AUQ2yR3Ggn2xacKPWwHzwPGwWKmbu8YcUYSpmEF4M1FfWkwroqsssQ66Fe6HECwGopwj",
  "key43": "axn7tZS4dh31Hqia4tJ71b82bokGSPWJsLGUYd4hGNJH2aAkYCfyg6eM6V17c3q7AdH2Mx1ZWE2t2UdWuHdv6nP",
  "key44": "3w3T1yaYZHEzbfDUoc5EMz7QXiNxDebPygKQWdiXg5CXhF6DKdNv3zATaCtpNv8HXdvyzT22X87DR19eLSdWjCwc",
  "key45": "3snFwL856x1dkoZmMhY6t9ZuxFsaszLN8JUvSGaedwsEB6gZ4zsW9Zeo46HG4UyWv9YE43CoNiJNNP1CtTeENX27",
  "key46": "5J2t21tzpES1E5kG7RfuxnZG2ATDbnGQJ5hrUKS2hh7cDErcUGhMzKa6eR2eJwWbkPc693t9VAtV3nNRNF9u3Hwz",
  "key47": "hvjJbKkLfabeFszuVTZQT55nNDtfAeXAwPZXkfEgTwwHytfvDrXDMecoAAvWjwdqFg6X6nuYBvGjLWA7PaQyTgC",
  "key48": "57j2K3bMyXVCZxcN6KeRyKCY94X8QZGgRyuQhi3JMrEBNT6Wgx9FHiW3hD4VJpmwbVM9zPmytJVMAQCMVhCz5oc8"
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
