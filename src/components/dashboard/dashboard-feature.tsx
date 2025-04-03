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
    "2XrXJ9akHrKcgraSW6ntESG8Rr6NbX3asEbW5uBpQTKr7GP61n2aHtpixeHNxy4WwKwZ6jCoMGgh6VAVPHr6JNPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeVQcdNkC3dU2iDWbdEAxuGWhR8vCF8W5bHKtA7hc2orrfb9J71t7o9LxvcPagcFMoXqnCK1VmMVmENhYLiebbD",
  "key1": "4H7CZgqFCuSdC6tzYanB3YNEWPDhp3AdtjQEkApUBGvafp3yTqFruXPLyrMzirS6fwLQhXsSEAiEMckFgYS26Sey",
  "key2": "252diP6XkYAuWwQiWgDVkbt18QPcPvmzSep7w3rW7j6M9wiqXZRzoVaFrnGFD89ounh11RwaiDG2RkzNnnRxQG3v",
  "key3": "4u1x3yHCL8zGhBeZhQykmpXxRd7wkfmN3Mk7sVLdDgk7DgjEV57CxfEJrZmaUavmxpCeF689QBBpsaDR3mxehF4u",
  "key4": "VTujKmVt3uDK2gzCwvNeJKi2e26ayBpvpGZEdUVyUcg2tP5isPHhR5qbTJXhWxzt9TY9Uf74eMuvET9Bud1oZTp",
  "key5": "wU4iTXLigkviiKWCvSWK7mbVg28a4fZ7ZgNBQsBkXoFjJUZYWrFLU5Q996BZ1f186WD1kWpK48SbSmjYGwFsatW",
  "key6": "3NtUyXxRUbj1z45A8ipaqp3T5N5KayiTwQXuDKv2JQigUafqK9DzGGnjYKNxR4KZjfjBwSrfv1TkHZEcq4vhmxhx",
  "key7": "4MgFDb1VqyKZ7H5qJnMv4oQcwPsPXziBn2gN4aEUBUNvZN8ndsXR6fmWtM8R1GTdbFdxAcc9KErZRdDHMmCeUtXs",
  "key8": "3DKLsZL8BxwCBwrokjHLHzUH7mpqeaNmefyayv6JKYkcTxKZBnr4pntPRb6UKQP1zSrHbjbntufhz19ysjXuhjSh",
  "key9": "2rr4uwDHv46cE7NBqQ8cPJjvoTLZSjeUfNDzHsGGatbGSgfeRyriQV4j7k18GmpaekKJXcWmTAszyX8AvVGm5wp6",
  "key10": "3nXZSSqyd4fGiEbQBZg6ou8ZPJC9uqDWNSPXHtbMAZ6XAoRDDe35sn4YU3N9u8dPbEWYkFKcR4ZtwaG1L61D3kWu",
  "key11": "4YFxnHHbLKe4HAEXqhfFoUGcEmx6orxcGwM1TCf4tcm5Hgr8RcH14qqN64EENAf5kcrQy6tQ4caBZzXianAVYuiD",
  "key12": "4bgYpQSxStRYNZfBCZavrhZ6NMSprTCaAeyTu1GgZRnkPLrkC29Qfhmpam2iohoB3ccPAGZCgvW2iJk2Y5HL5Ks",
  "key13": "4UkZ1K3ZQm1BPE5F7k4coXDiiUbiF8hrqvGM6M7zSLWCcBhY8q67DdKUaANVjWq8CeF2sz6zeLjZsdQq76yLNwey",
  "key14": "3Ug7MQCyC3arCkF58DPN8wPatg7nvQrqzz7o2RZfkiMz251PzfDA5Gikb6vhZUh6SzYj5uUY3BYXyRihgpZYgLAX",
  "key15": "294eEVEvBMuTjvZqtypKjhxJNypg8Xh3PZmEGmacNkPhVhD65ATnZSVzbVXhHijFyQRNMhQcf6bkwNjHgH1gmNXh",
  "key16": "5grUNYL19apBKg9GP6PJscBzCPuSW9g93PZ6nT8L2cmabdgJGaJnPZxQCuPmZLS98os7bQaDCX3NuMsNqGdsJFpZ",
  "key17": "63MSF8BoWEqKTTwN7Ugou15xtkvUD4pHgLxNf8i1Afwu2y2FzKtavzDsfWkkSc1dXMmPDP2jEAVgkMdgZ2rx3HFt",
  "key18": "52fGpzkHFJytCtCMVgGjdDtf1TQeKVTzd8nmC65i3f5C2Cn5EiDhgDn4sBBVMPk9LP5nEUTvi1xxNZ4abqYpJEa1",
  "key19": "7xxHo8WHfzPnm3TwBein6hqZxAjD4jV6YaePCzTf9unVAzMpVgmCVppUTxns1yK6uVSi4BZ5QJCUwLSVPAQMYAA",
  "key20": "3NdTMdErYXv5qjN3jcjeEGat5jEF1P3L99ppHAhAfwLraTmygKH3e29sNyDJrZgLGtgG3QnK9zp2P4fWmUqvd5gU",
  "key21": "2psSMvpcC2RGzHAwN1maZgReKo8kd5rVMq7RGaXST8BbCy3jjVk9rd33pT1L2fyejdd3aHcHPmtrjygec78LDPv7",
  "key22": "3w9k2bXBQBnjJuzA6mMPU2hMAddsfE76cxd1na2XhhWfLY4Kw4vpW8esWF3wzMMZ1jxU9o9ZXG8hPrUfWWf8WLr8",
  "key23": "2iXda8147JEftjqDM4PTPiBh2FwPjRiBZ8MmdJP2GswnT47nQDdKbMGRwkmXF6vFtAFniutLsxxtja95L2MfpCd3",
  "key24": "45WMX5WTddB6AKCb7CT6HGziNkGApnS9Q2w5fPBXtaR63PRY5rSCm8JGJ6KcVSwQjJgYBiEwMtXEr2F6bUZwj9kK"
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
