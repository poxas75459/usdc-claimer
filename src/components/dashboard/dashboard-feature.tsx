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
    "3x5KxyaWrUDKpFKXHfYRj7ejjHHkmKAmLXyALD42Byyg75LNUT7R7z22qHfEhwNFnPZx4WvJHBaUHXnwQtggsMT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acFcytJWkJ4DaGp2MRf9uVTanTvDa8pis9YVTCV1rBvqShimF6Qndjkt31qrV66CxUQhWXJrFxmDei2W1597Nzj",
  "key1": "tZ2yD1pv3nsPJr2MhNLSVDHky8Y16hAUeMKZZho2TwphkNaDp1e7rCxK1wx6uFHyfPNJL5JGDdQ9nqbWSGy5xmf",
  "key2": "2nYUppHDDnj3rUJFGy1waqDFthBTgSnyX5BYXL22QJCvJbRQn2bJxoeJtg2DNyGzdeh1h1DbKN3RTaorssrrzCtt",
  "key3": "qY4RteRSChcwbPkJmY6iUouAapLR5SPdrpA6swGXhGvsLGHDMZrE9ZFFvRryR5UU7HXSuFuYPcuvBFfhsaPf9E4",
  "key4": "DfJfsHbc5dqBQLcAz5VJpjEC5df5yf9iuSt1RzhDnazjNCsrDyYinetci88phqki3EdEZymXtPxzwSSw48ftE7A",
  "key5": "u8GZhxX8VuCsLAhhovTJhvEzW1WehRvgcLdtw1ZjAUc4aZZNy8SiR8Ba8WXYWdQqby84yvdV1F85uMq5XfxF675",
  "key6": "2WGJgw41Cgx6xNFfP6HddatLTM4rR3DSsRvmwHoVjQLH7Ny3LwL4HqQRL9j67W5tAk8hN93NZhCRNtaA2p3WKv2r",
  "key7": "25CcuT4cmGxnHrz6Az4fHWxiuviNDk49R1db2bpzg3PSPYhNXcynNWdauQb5ZPL9dea4wbPUkgPWof1KmzoUAauu",
  "key8": "57GeuHT6doeo4Dmui5zJd1x2VvsxFHnJhYHwf6ZXTcyS3RnDUjdEVBzeLH48sETexUFPBgu1Si2dG34f6xpGmcr4",
  "key9": "5oGUuk88pRvEP17gjcqa4MYR8gT9yMqZwsagJ8LppjHkHEvv1JuuxrLEPdSdSmdmsbRQp1xEPNS5xfcMgPauc5EB",
  "key10": "2sWVXR81d2AjAMjQCUJqGVQBYTgDDjHwbJJoWtziJhkia7jfiru1zo2T8W1YQraSDTLcpz8cK1ph2cAL18tbPnan",
  "key11": "5SfJJkXJnW6u8BQ4udcfVFnYsdcSxNSce4qAnSrzfdTUAHmjtPejXSVC3e7rNqLGhtPEB7AzBKHR2nFvHHUpxjKo",
  "key12": "35zLC1Ke1XU5emhcjSnk15exWiZYVWH9m9ZoA4fxPFdNyLmEVUA1ihBbNEZr4zvjTSeAWPLpN77jeJKKSbp13GjT",
  "key13": "58KEWvg32DFrkdmMGjLvyBJVxDJ3XTCypcoRKoDdFxrRg2FDi4bo2D3YvJD7NYRUGz8s22G8YgABdi6XGEBLC5J8",
  "key14": "2pNesHmMV8jFxc9U2KMDa1scSsfJ4ZUYzGvKbEdVVqsBo11RS86GDpoaeRqbhp37jkX8JUNW8DC7rTuQzPh3tQDj",
  "key15": "53siz16xSxtRvMhMR8SeUTbqFjXFq16aX1p5toH7Y9YLmKvBc4gKzKsSg2LS2Ny1yjinMWNPVAjjA2G1x65Kahkk",
  "key16": "Pw7q5DEaQacgQ9Mviv35RXeKhqWz6nGfD2C3u1yWdMwvcsxfZinfe6TdBXTHehopY7jK1Wnqkz3hCBtzW6vKBHW",
  "key17": "4F2KZ7VRvQoKmsDD5rbXgfP4Tyh1nje4ZXRfqaWkK7z4ahXXDr9kw8a89sVhRSwLyd4oRHHdkxREinAfb1zRGAE5",
  "key18": "PS4xo65Nj6rEFimVAuFFDyLjJ1oh115BoF3EXHLLms1VVyKJ2S1zFbrU8CWPYaAKzv6pGSM7GYgzTSp3jPox9N6",
  "key19": "4GyM2n7C8NUHvehwr1Koe25uiqcEB2DoN26dgXFRPxcxG6Pf3m5PSooFPAih9acj1ooXzj2SfQA6xER48sjzvGeL",
  "key20": "QLeEMJ3z1ZFu2rTqp56YAwr6z4EAb1BVpm8vK2vbotvMkuoidKKvi9VM9KA9A2AoX5fzYxr4p393VDfmtwXV26V",
  "key21": "2kYtygXobj5YStQ1375x5Fi5nm7rQcN7jbV1rJUpagpJQ12YWmgUBjqVCwKdNMRZQpGXyTsQCPZxCjQHgRHLMjYw",
  "key22": "3SJRUt1Z9sjUqqmtjq985dRPHDwZ574jLeBuQKCLSWEHigcvbs913BwFZANhHPMpzvrsH1CMd5zVrhSRsMHwiKex",
  "key23": "4WqHFxq6Ms639E5BhCzXbGFFJyW2FJBSRMtnmi4dXiuy27Xz6m8PgX2M2613oV7KrdRnma6bsb3HnTMGbzgBg6k7",
  "key24": "4BLyWxEDGNF3YKBYZwdoJofeRN4x3cKYw78Ua3YanqPbjoM4Advnp77B28pYyPUy5yuqStUpeePHooDqkxp57wAP",
  "key25": "5j4fD9NZqefZrtLnfqFY9dk9upZfnnzCb9gNTCowKcotEMeuLpm1aDqoww5CdCyigVASy6zswbw97hY4tYGDZn18",
  "key26": "WhcUevpE5tggSTvj43fcT8qhpSKQLo8C9hVniVXKwi8vvGqXAXeDAK7bwkuvc8hhKHrE1TW4asxDpbqog5nxJ2k",
  "key27": "44csdTw1cfk5HS7Yfz7eGaFQ4h3YLtufvWSRr57tYzwwTsz51iAs17bwePeMNujtRFhwkrVi1GiPBaMk1wSe1u3h",
  "key28": "2qUJQSYnYqtCUKFVD6hQFixMirBhbSaAgwFSs5ruRWN9Pt2XByQDhAURTo48cBP4SvEn43ZMRHWND6yN95nY6rwj",
  "key29": "3k9QTvbTQaAEMLh4t6bipu8Dabp8RXfwH8ZrhcsNEKeAU7ekxfPyR9Fxye51qEFvYyFcQ7e9vAUqD91LStshZWZz",
  "key30": "5fLxwizXFaQFJ5vKuyn6yjrQGeqeMXwX2NfzhXTsvjZrwdjBWGSMmzGZwdSULPvHbatYhD31YsFbtyywfomjknB8",
  "key31": "5CxPLC1ptqhTaJxJs9ddDPaudiDkmiBUHrN1CqNdrnsiLC5M8mxMNLbYhKDZeZp3EMA8e5NQSAJPt7VddFzBfMHc",
  "key32": "48C9Dka4H3khDyFwuSMfTLJBooNek8BNC4i2fdA2StX9YGrd3L8Medrnir1rdEf5ytwY2Woo36am9aMgkALRUyWb",
  "key33": "WRVNuRLLwyfUDsgUQCq1ZRvz3q8P5dnCUkPLAEW4ioyr1agR4fgxvMsPX3BbrxrgwEJtV1VvMYnT9zU911u57WY",
  "key34": "4yaUNv5W1gSwqeuq2nCrwGHxyZFQRwaoRDpX2iRk7dTMii5x7tm42rZzkGX18by6B8sYVoNCPJJvv4zsgo85sEbR",
  "key35": "3LcKFPpxZwmi2NrcoE6bd9pDPfuRSVV8J8VpENZEVe5WLtaMmjQ2J4uD8KrRhj7GD1QCF8aoQDHdUJWX1KSk6GZe",
  "key36": "23kGnCXsni6cCTDjcQHccNUUdv6qHhQ5SZC4MVfW9QkiA3MoRpZoF3ZawMryZJaUiBDUGYHVq1h5joy9g7tw76Di"
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
