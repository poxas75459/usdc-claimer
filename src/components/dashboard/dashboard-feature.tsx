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
    "3ihRCEqhDiqMbL1qo4HfkrQx476Cnoi5hP2xR1y117ZPZjBMK2pDxyratSWubMkGPZ6kDhWA71YRc1jyX6fZr5T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cJBXLWPdPLAXxMwhMvP15mDjdG74k9tuMYz77N7tHPCzAPSD4bkFPbLJzsuKuEvhrTy87crG1ZSbM6hRxGaa7c",
  "key1": "2jmjCaMuHhcAMVRrfirhTmPBdruR7ddk7EPWTtjDetNt1TrK7KaJJL3HMfnQWBU1USJMcgRycJwi8pbG3eidmetN",
  "key2": "5Jr55aZM1YHEcBrryYFF25nA9sue4Y955C2rEdY77FewftFvQRw92rcXiophbEQ4EZNhBEAn5hbyJ9Jxdak6YZrC",
  "key3": "3H1jRJAHdHEf1kB2vZxEDYdzANA25nCnVKCiBWbkQQx7vEkYjN1PNbFBUjXHD8Ryq8BDfvxQXTu22NzccsTYnPYr",
  "key4": "5JB3hRDzBvjSwx51jYXd67ohJpK48Nx45o3ovj7TuD8T85HD3Su3jhtSnuZ8sgWdUK24o788W6TZ8QDeni76immE",
  "key5": "5CnfEKyeyFeEvkCdX93WZL6aggGbabkeGd8fRhv1dZ1mL5yiB5iFqyaQB5g2umv2QvGSA5G4ni5W3bworGdY7DTK",
  "key6": "4PNAG5kRZdrLtmXuK3SFZkzwfkFQYwVJoZ8DbvAEtt2j3f2WqnseoMPoFHC8Jhde3rFWhxHT1XDk9MRes9qeN1Qi",
  "key7": "5qXz3soKDd7Q4cJNEcjXPKX7x1wcGQEtKx1UCnnygim7T2MpSUHAhaxw8vmNfh1j7sDshUGU2hiynAqTPAbLdQzN",
  "key8": "3UPDgedZqTpvGhEDMQi1vgBVu2sXEmbMF5oFQ7m5fFifC1Qot61qBtNqXjDEbDS6kHUkpPD6vfLNqJaVHRmgcxS",
  "key9": "63A9LsPVau9JXAUqdcMmsx2ccGxG8gNtCLH5V6TPgiCFAC9WFzGVE9ZLfcpptEUS1J3pitE2gry6m3DaztTHGQ5n",
  "key10": "2BJReAQbo9S3v3Pz2ZUEmB8hVRf32CdmbtAHLoJ3SKT39vj8QTzy11pobvG6ff8AtoqGrjxabUxvPvrpsXU3sdXB",
  "key11": "2W8FxgQat4opwzwPabKUWwhhx2cy2EBEvGFZfUXvscGhCrkNifFxSBGRHujAQPk2ZAhcojfCve1p7rMUNcZAL6nX",
  "key12": "59uHBAqWABpwWtcsgPJ2Y3AEZj6J779EFzE3G1k9UHcMncNEdNj7USiZ9Rwt1qyPBixcHLn4EcLAU1iF85Lycfft",
  "key13": "5NHoRQMzv8gzNsZVS8WnxsrtsV2Wq3NvYhG9SgpyjZkyrjBFoT17tgAzLYhk7DKLTjK4sP1toueWXNscgPBPa1DY",
  "key14": "2yhMvEeztKzZVDPUPFPHURHybnuKeBw4Cmo7ecghauLKe3XdjsK73Ly5y9Bk1K542T12xFM3gaTCKDdv4Ah3K75H",
  "key15": "Cc9JuE66PLgRXbRKrKCetBusdDz7YRzcQ6PByWgDT66KV9VkPSeWgh52wK7pWuf7sjHREq7kMoyYPGoVshXJrnL",
  "key16": "N3g98npDXr8bsSY68h9EsXcdxtWJVY44FWfisvtx7ox4G4TpCi3AmKr9uBZJUuh6RyQTdN8nbezfAw97hED4R3c",
  "key17": "25Pk8mkPTVNZxu9XgwLMDgnJJWsCMCYt8eLgFBwZrsjNpQy5pX7hCpMrkbHoHfz9wgopkxxDjEG2LuDUstfWZJxo",
  "key18": "47otcXmA337j2j3Bffav37ufX3MNE1YDT7PCWNoZpf7AwiwnKq8dXC3SRxaVCdZFL57KXL3kvYCH7bNZ9prQrsej",
  "key19": "2BPUrzHzvi2onznpwpSEYLm4N3FJgpFMcebZKKgdAmeZKhEikpGtbWbHF7frUAUQEmfDKwioQWjF6nNnC59WGeSd",
  "key20": "NnUgg953eMstjzas3LzRAXuWq6MRMppxHM5uCS44uFatSbbe9ngSKXCGENdkUH5hMJSgQc96CNr7xT6Vg7sR63g",
  "key21": "5dYPJ46dn12Nwo6ttMS1HFyNZTzxQib3MLjW4M2qfqSMD5XGZbcCEdhAM7YmzKHbJquhQTiGBwJAXY9RwiY9rWBz",
  "key22": "5EgZHX5eRxSPnivcv1Jn6TPHUEyvE571W9fhnqTr65JKgkyP9BwqBF4FgtPD1uh6B1trT6PudkmcphFpf1mWPdoE",
  "key23": "38gMFdtLJJ5vqTbJhwn9dVoqRmeYKwzipYiC3Fm8Shy6AuBvJ4pVchYB1TQHB7px1jTc59AqxxxDGXKuKKs8tHgu",
  "key24": "33G2k9LsTDdWfF2z5MksWoqxq5wGsWqJV7ijkhF8kfsep3tGomLsdkrGRsLgs7k3HEcLM2JrZ3he9crK3kjC7wgs",
  "key25": "4sLfs8cxvJjuv6Ny2pPJGP7zMjd12wrG1fT5baqwLNns33SzxZYPnzFhD1gF9mR1CvUwu9ygvBNP4EkM64sei1TD",
  "key26": "4YG7KqUoUCLjAUqcG26SLEi46Ue5jBW6fYg5ttXpB6djhEpUDgEAeKgKqUvppCzRJg8hG74UvCPkEBUD6K3EdV1M",
  "key27": "52PVFw9owozcQ38sUyvVUsBos6Hve9u9ZZQwxaDsbeAecRhPyDNJvJQFQJQN8NAnGZ73SyFsXyzaGUoHf7w6Yzi5",
  "key28": "2xKibj2y84V8T4CQyRy1YT6vuoJhoJVCBmkYsCNNTguuLaSWC22FzvdFJ51qVfLnahYgUN17GRdv7JrBSzsHb7qK",
  "key29": "8cVVQ6vvXM4Dqt7EqCQb4F59YHno9hBETQkYstq3zUegCw9uxEsQpeNmUNfcbFFe7sgx8fYQe1dao287gJmSNEm",
  "key30": "uidmwzChjKgGNnWRgmfoigEtuhVmyQSa2gxY6sR5R9qsoUdpMAN43zHFCiefs6Wu4gSDfain6Hee2mY8aHXPJ1Q",
  "key31": "4MMCk22vS6f3pRbuxihCz8qcozadqgV9XZExB4BkGcHb5G5BN6L8vWcSDW1Et8UZLubPVbZw83cYoD7kKFSZToQd",
  "key32": "332WXjs9vwKgRPWPGU82vCYT9HHpbwsv5xTb9yv3FQ4PfUUd6djfEKGFwXQeu4RoTN5SoAx5EZUDq3DSvNXUsKFJ",
  "key33": "61i6P9LAKgByW5MWviFr1MuQs1Bp4JyM9KyTdD5JdQYYL2dJxJuvzoZWeKpc7X4fKbnDU8QCHDWujSkWJgBwnGeA",
  "key34": "3kPj9jtReZTvMLkhgqUv1vdTCiNiGFbEqSjXnCmHj6ABSdRJNuCSoK7c9anSqjqnnbW4b93uYTtXfe8QLFbiMZ9g",
  "key35": "3xKB4WZK8Wbv9jVhSk1wTKwGNFUcaQ75tynHqBLpuiRQw4buCvSDAtuA3qqxUDWY6YwqyG9L8VLbHfi9LjzYtyFJ"
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
