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
    "5RDJRxTuTo9xKj48jXdT8btJx19V7Gb61rp1rmDUTsFPiYGmmGt6DWQPdpJYAvnBxeEu7xm2MV7K2UAp1WVZyg2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUyTyzMhDcEpCVhSD2EVoGAHeSfVmWhKvM8WERXPW6W3trjHCiZrzvyatqLCLS8EgVBtq7HZ2xXvbUnJLSnf9FX",
  "key1": "3S8pYt5pv6Aqc2wNTBrYbhscL3qxu6WhZD3ANEcsbqyiXtRv6sQLqKXmxhh1TxqVDYJ6TeNMMmSDhKxk2ZwRnvpU",
  "key2": "WvaM3GqApJnPoTeCVLQx5jhjyD8gjajTDvG9ATkZg7u3NkUUpCBJ9sacRvGzw1wpAJGe1VBmH1fQTj5QQyAaBP6",
  "key3": "2gAwyLGqd9iQNrhg7UXQoDCfL3mNEkQEBvEtUWvBvHGNFkAFSZ9pPuPb6UfM3bbojD2YbPP2VNiNYduha5ja85ZP",
  "key4": "5ednMSbd2jDNasdg82BXJThUAaC61GGzvVD5zciSGbi4t2WuENVMmyb6rwW7HLYZEhLRMe9sBtSxQQBHBj682esn",
  "key5": "pazauswh111L2hSQePusipH85KzpG4TDJjdiaenpf3G4Q35UF5XpMv6nDLsSzZ2PUPpAjvakmrzyXVq6gy2QRpt",
  "key6": "UXWxoaMVzLiRjopm679yG2LahYj1pQ2ASDAfxRFqjo2nra9u88hffGqvBLsfphW9v2aBAtaxQ9GrSPyL2UZut6R",
  "key7": "3m7sazRRkF7ViL1aLmK8y8nUwHund1MButoUcYZKMdyjUUYf3FZnVjKyjKJ23kchwjyjiVcsi4BAvNzg9DPSmpyb",
  "key8": "BDbYNikMX8rMiMG2UbvV1cPnFuRw4h16n4BpBkNEnLsxXt4WroKMqWgKuj3nCSvwNYeRue7RGDaL2X37zAjQ1H2",
  "key9": "2aRtcXjAG18onaKxsuHnfJacJVAHukhaNMAaeyu9fySiUAbPjSGE1dXdZ6xCeem8crUQ2t6dDcdLcrpDo6Nf5kTU",
  "key10": "YFuq8EJCbLiajNJaKETPzgGy2vi9cKiUbAsU9BHNss5pw4TxoFYsL5LjMWUuX6zbAYEbcW7dTeKaYZ4QvFBLcv6",
  "key11": "64jdpEKeAuV9coNqYWKzDqtGpXe18Gk7FhgwJsgZBxgQ8aRHwuT4nieH29eQz3Xd6NE5vVvjtt4LrnU1ndNCnBms",
  "key12": "5GzHsa1x2UKwE7MQnw2KKsnRU5S9RPUaWyoMMQtsKK9wFRTGTZ56EhooGtex9HrVBNN91xjhTat2AAtzXiLVAxXC",
  "key13": "2XUKaAp5b62TMboBqeb6x5hR2VE5dc8hgVr41uyNsQafdfahjQyrmFVQ3NFkykhGNRQ7nPev7V4W5ykLLQ6T4Fce",
  "key14": "2UKcNMtYztrgwGbhKyVJceWX7NjCQjdJGJxeLVGuo1QghUsfsHjwneGikC7gnkJurjhPESrjb23y6NM5cLyGLyhj",
  "key15": "3q67CkD59XkVeZcbt5ENJ8pDNCGbHifzaH9miS2hUbr6HRgsFqSPG4DPm1qFXAiyWgwHaUUyEoTyRv5ovzmusyts",
  "key16": "2yKPU71LeLrVsLfa5u62HSEBcazUnmqZvEmRg9d2E1ribnA6UPhCdvn3ZCYe8tvPoQMcPUWY2qo6cRJYwdkVwRjK",
  "key17": "24uWjCbCVwTBxYwNnsn3Fi7UM4QuBtKSwzVu8qBXfkzpzJWjCFxjXtE85iFmDShanFiVcQsH6w3dVrTA6AuEXBUy",
  "key18": "TGMCLjm5VUBDncjsffXysDgfe5E3aPNWu2U7GTtr27sFCvomGwUSFqjXgPEk2L8mWvDaFGbo3Epm8DeqEQdtQ4d",
  "key19": "2iS5KD78c2oCYs1ikR1uDyfZJXn4ibThgS8dpBcNkeDNrnP4q7FsttqFtgrg3jB8JXhFddUY1oqU6ny1xUH2aNdN",
  "key20": "65ebFv12dDPNdoTgsBKHPjss7VpG8Mgt5nJSLEUb5SbC2h4J2CHVrmHE8pet8q5riXDK9Db6jPiEurS3w77Jf3wu",
  "key21": "3imfgojWw42TPFcWBQSAQYS5RTUva85pFEDoPj7RVzQPMRq4pjFpp7Mrtp6GmwVNnS7r12Zo4sbSF2PbD6DXQEM5",
  "key22": "3U4RGKfLmMXaqEA84MMoJ2JpLJBjtxzezMmYcRBSE1sH4xWCQ21uXCEeFcL4ns11skfKrxoVPyEkVevPxGBmhzED",
  "key23": "2ehPdAwcSYSrK1joTpeWXVV4pzXKYrTd9Krynsg2moJcGKqQF5wq85mxvcH9BLTrLzqSgupH1SADEzhCAmrUV9mA",
  "key24": "67Wkrp5RppRr3V8Rz91q4PddhFnZhatd8b4e522vBhYQGgLy79DbcdA8NnKvzyoPrNCQ9nxkLNTethSLKKya6aRn",
  "key25": "2NW2UTjtJWSe9Tku5iK7cTvfH84pcRbxfoXnX3q7MuyiZsPsC25VKTbW4VA8bEkWNQ95kBi4KjodVCdvBc2mGu18",
  "key26": "WYQsp66oxoMfApyX98PwhpJdkFJn84wpGGenMsRF7UDym5hmuDNGbsAkVdBSEiWWZBweeqjEE4gQAWjgcPxaABb",
  "key27": "5sVVTiTeheTGvn1eemPCqBFgYfXgATDLFw9RbDZfJRMDWFGMLxdpaC4MeAQeXRDfCGUrWiZZUD4haupVzkBPHtvt",
  "key28": "pPhmtBgwuHN581aXBcwCLYdjj4xmZFEZhLM69DiyvcZ6mLBmQRtJokiBG58b1B73E8Gmxga45EaAmm4o98vRv7t",
  "key29": "FbKbx1K596vRa6FqU1XYHLV7fmNiVpFmJBvp2kwN8z56srqqD8cGnCzHdKPYXtzbGFdapKxg4Aj2dc3vnpvH259",
  "key30": "535DdnJ4EjozwNyDQPt5gS6GCH64JrUiA9MJUkU1u7onA6HVBtZZyZmQMHrqy4ovwvadd4iT24Z51nNKo53x83jg"
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
