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
    "4ER6JBAhuLv5mx7UuLhhfrQdqr8DxWxKtPdNwZwMjwrLa3jvNfyXt4S2QzXnvLVH3BUS1douvrL7c4dasUfHgh1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57bN1yXYq68Us5sEmWFjo8X4Q5HwEr9wPL174EuwxhWd9dDGHAHdVsgBqD3h2bS5snq6fTw1QRKGPnrHeMZkUZip",
  "key1": "5fXXKVmXzmF2A7HBweHS437MTM453oo1sGzVvDGtwdQwV5VcHUNRGwLEgPfSc7fUgEZEeYH2fY9s1H4rb8TWtnF8",
  "key2": "5Wu5ZLtsJFiGXh28MFUB2LcV7ECPGo3tFKC9o6VZ2kn9es8UvHBZ2XTyCwo67kSmwkxxu6FLQuC37AB98Hdo7yHW",
  "key3": "3TvSUivunfamYL93yXRQfWv72ziT3w4jZxGneE8siZfsNRvSGySB73EKchY9p7Bqxqz3BRVFVBH4Zn3GQuJNDNYA",
  "key4": "2n7w3aW9SHR8TTg9o56mkNFYqqKLSAexNtajn8W41QkqkMgmMHfCtgGEzoTwTiMhbxxaQiDdBtB4s7yn4PcpwZ7Y",
  "key5": "41WDfrmHJCSkkjkrQpEPmSapjpZmPrPG9YgtWJ3pSnQ351su9X5RxNWpudDWCrh9VEts6tNXNuBTnHSJZruNtaRk",
  "key6": "4vJ1Kj7N4cqpdccdFoaj4tSXPLAzZbMSyur8wu336DYAWHWb4CD6AT2SFNbtR21id6Gu2WNP9y1ELDEcCTviYooL",
  "key7": "49iwjiBTckQbphAWDDyFpo1yrmXfqZAvmkn2B1afeA9bffWfw9xBYaGLmzfYsNPFc762bqQZPprBCShznFtNAJYL",
  "key8": "48EaiLA6cTn21qjgieY5DKLBCfafvoyytj8ZrxMX8DGm2LoAAjrLXuDvBzKsRjQqnYSHqAJ1SQXoUFuwwfjuzD5M",
  "key9": "2b7sgzdsU2Aw2ttk93ohQiMytBCpvmqDJHYxCDtB9rM1QWVAZscXYbB8K7A78846S4Fwf4Hn8B62GbMBs1sry4bt",
  "key10": "51EzUk9gp4CPdWRUuttiAqi8uta4aoKDQxbLP9oMNtmCQQfyn8sJXwtXgdPD6Ccq5VHvcqEqZxxyADmkuAnyA6W3",
  "key11": "5T4qpXrv1GP46yTsT819Nd2xPrQPRxKDNViNGt2PCEc98EmxNnjjgcDGUukejr9c1bLjN85yxb17GyAdEikbJEpN",
  "key12": "3LXpu8tziKh72bZCXtzYfxVcTPYrTovE3iaps4cJLPcL9ZR2nwMJVgxT5TEDDKtwjBK9UKvMp1Jd45WCr27irKDN",
  "key13": "4hoycb2bgRBY5LqW9qdGCG4hFooRQh1jP4mcjWMaRTtKsDFZK439P3og8Ehd45dwPfPjEda5Q4UMQm5KP7SQsoCm",
  "key14": "39bFRGDm8iGLrDN53LsTjm1RNEG16a9LXqkmrrMpubwmwk4dSqYNzuu8hLCy18Qo8FvEy8G7FjrXqWQJFaHbJW6V",
  "key15": "4m34hwjeShmcr8ATiQwxg5yT459thVTxpRuraLXjTpUfNuqXJPh254arLXm9iS5nShUREqsYm2UuEStbupD6rVek",
  "key16": "zf74WwLR4jEDfGjGgSWB1kQ4EpQP1YtqBNs22ymuphcR1AYXHYkAfz1mDKx9L8LrCyuUj9oihHrdvns71VA8ZiJ",
  "key17": "3UQZe9AQrD79pyXzwX4bWw9ASrnyZoRfnwcQgVQFttKgUjv3ZuwvY98B1euqTZTLGv2iJ3W2tJTJ6hRTuSTp3gvr",
  "key18": "53hWrZWLTNTawSHXQ5WJhSszFw3MmthWihDh3HWmzuaeQZhUxf2xjU1woMH5aHEkGXgwLcd3LfHNguBZTbfxCPXP",
  "key19": "5XFutXCZMKeNUntkthCHWuQcHj3tZdmKKZ4HEcaLZXuPh37S5fF8wGRzqP7chnph2nHowJdAV81fLEqH1WTNYgj9",
  "key20": "2ArDU8WQw6yWXPj28xNnQ435VNVCN6K4LGvQLi475DURraT1Mjui2xeruxBEdpiTbZE5RZconST2K7Yo3jQ7J7Mp",
  "key21": "3FskvzUN5e5zouVXN3VzCUPDY4wT34w46FKh4WzT9CfdQbcL26hG3ML8doMRwoJkqj9QXvE9YWUBLvd97rQvUJRs",
  "key22": "53F91QGxBQt6YvSQKasi6iKBe3t4wcLgdADUB65q4QihMnPUBEJezXc2PmH7LHEwUgdSMREmzAVqgRVUbsMkh7Rg",
  "key23": "5Zybs1531TKTcgRZPK9FsnofLx2W99e1H1vRoyg4bJN5TQXd7dgrC84tfkLdnBErfZheCywWSTwS9pGN2JAYZGyi",
  "key24": "2eGD4gdU5kFzuFLxDSNmVcS295ZuxpPz7TXMJ4mW7fuMCXMm1raQUmbs9f4ntTV1kivp7spqpop3NoNxDahbjcjW",
  "key25": "2e1yJRinDMmgHyaTnb1ZhG43CYGyeTxE5FUmdh3g3WczxKF8hu6gnj2NbvkZjbcYCz6brZAb7JFjM9BtEakmd3AD",
  "key26": "vmGXzmXTDaD6YkoUK7mgLApTeuLvQ11Y5tG38pwHxGiMvhKHGV7Z8c3UeVUXytqSQ21KvEDTWdC35yBstv8Kktr",
  "key27": "HF2zwQEYxrpzCm4ncZR3JrS6UA44QwkUNJsACfrRogimnzfe3nAMCgKPAPiGGLafz15Bx2QDWsa48jgbsuDgQwk",
  "key28": "618oAXb2R3rpFDvQ1QhMbFdGrmebLMVuuX1EHSk4mnRmnXuGFFAa4JkbX4uZ5mwnzgbYc2eML5KU9dA9D7zvEK75",
  "key29": "LuFhosob5qiirykcdGkGfxEoTwM9U1hLB2Sz3eCVimqDyQd5CcFxDFe5CBq6B7bDbZyiQF4QSVkZAmAmhYQ7URf",
  "key30": "5vfNyAFPpCwREjhSmuEFNWJPHhPN2V3gwG3XPBjpFutXmHVc4JtAL7cDCj2D4k8JeR9qVuMcxEyfxNXatGrG5HJ7",
  "key31": "2m6EzddRYbC39guLEuHABP7zwunCbBbX3wBckSJZhCYuNd5K8rrBPERB7zCrcHMbCiXEicUhE9gwdDoGRmcZESkj"
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
