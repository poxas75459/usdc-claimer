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
    "4P44cXt5zvGBgocpmYYB2swZLSNLv2UbDUhaR4N5SWMSYzhxsxnsAGo9qqEgKABc6MqACLzADdYdoDTYnhHmKsop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKzHZRPFCJfrvXF7RpW9H47dtMZpvmuhM8FoN42AdkbjYBvxga4dynYfeDiTU6qANm3i1HF2K2BBgy2ozKQgpW7",
  "key1": "3HxSWWsDqDcp462iRSp7RrBXZufDY8kY3z9DASsN8Xy4opWsi7hhtoWh98icCZxupejbbD56GammMSg1KhzRLzUk",
  "key2": "A2QoGZjeLm2mGzeb8UmrufRLKxL73cy3GreqEFnVVMbRgQHi2ELYSVyYC9TdXzwz5pMPURVL48XRs2f8EQYCBc5",
  "key3": "5i8GYwPLkoapigXgidWZF1Y7vfptWS2WDHs7XJj8jbLuPBZeBNCmgiFcKuLaHMoWadzqPZawmoH4p6pbmxkdvnb5",
  "key4": "5ddKPeh29TSmgyvgf61TZXuJAyBAua1rgJaAJLFnn1afBaV4p2gXLhjokHxXUy8Cbo6QeUB7RiHywpTrfzgWFxBD",
  "key5": "4nMnbTcQoNB5LVNNuPfmbvnC35YmBSeiz5sS26Q3Toe21bJvrLwVZuTq65qvNFYXyrvUcnmND3P5zL5RxojmUPvn",
  "key6": "2QPGh5MaRWbyGafBTYHNinakFbiX51YTaBv9hxXCHSxKwYg1EUYdumsPxRAcitRB5FU7kWWqPHkZBqeBzKNjk9t3",
  "key7": "S2pkdkZgdm5ucBTLKUV4ZpE8G3zJ347BWnAAZkds3U48NjWHb35XAkS59V5Pa6Br7SeyofPwBKoB1s9w62dHTVU",
  "key8": "3iAg9jYV4LCBa3Uud1gc2hXqTtRTzNRAR91N2zxPbnayVgSkyAB5mf3DiBRnPyvJK9uaQ721rj73bZRT3FPK2Ueo",
  "key9": "2CRdUcCuoAQTNHZdetyQxtGaS7pzRRmSNq6HyLZS7F5rB8bf3cEjKrtjce3ACbKnsMLBx9xFbMAHtu6MMCGbgDxQ",
  "key10": "3fLGqdEfpvkgYo7xark42T9QYPvUoBCpEofvUzE1QUJikd31aNNAWSC5QeKWMq6TAXNrUJ6aKpEuh9Td3P8SAp7h",
  "key11": "js2hcGrU7v6ab2h5R9UJAAnWk7KUMM5agm34W2TCmTHczeGaDATRkFamp7doeKs4GsoeQ544M3UPgouhKaRyMaF",
  "key12": "5B19a7KaWgdPYqEpAd7BGEgQZ8SfkAownQQcaKrCNf6XxJb63bZu6i5KTUaPn8uFKkFFNdP2dpFQM9Q4PhDwW3EG",
  "key13": "3TcYC5PFahN8WYwvTwYuZ6ahJyJtsmt53Eg2mPootg1PLfBjYAtQr3zjUjHgNynYWLJN8SJtrx3MbkfbF8vetukb",
  "key14": "5pCqas4waMm2XQdsFM4cY5jDiNHLnae6y7WMD2PhsaeEAVLpXkRcpJ3ogWotyewA7cwpHK2PMR9X8XPZErCa5CiY",
  "key15": "EwEnsKxsb5vrdnn2MqaYLQ2GmyL82yNqLgAWk4UMgatwGz9yfRE6UYwvFFkQZn6ERUeUxkxqgcoushajHM6LZuJ",
  "key16": "6CJ9mt26SevqBCX6szyyD1uXtkkyTh9hNiF8KGKB351T9jvFkW4EqPMVtAfcLHTZ6nFJSNYfiGP2SWHdXWvoYeP",
  "key17": "2m4ZMzcCF78NA6o7p3wavmE6AP13t5fnE7hjvNofPyX1SkESJL2VRPJh6vvdH4dWPoyjQ6jfiAQcNrmuc4nVHquE",
  "key18": "2nQGSumogeHsp8iZoktKZ6GENv9PxS2HPiWMH4tcUjjfrrdKWUcdDrscrneZey2o11fVz7F1HvxSpyr3WuViYh9W",
  "key19": "2mR3guqwRHTeeGu5icPuCncu7iVkzhqU1XEAMDCWBdeVG8FJkPbmnckSA1NeEtPNRNiyofai4X6EqLp2HL5j1wCy",
  "key20": "3to9jfGuRc5fGUfFiU6xqsBFuZJrraiBWrXGdCznf8Cc7iRB8Wdh45wPBUjNUMj1JgsbPFFS8nPp3YxqS3TzirGE",
  "key21": "43yg1aUcDbGpuBhqpM59TnGL2diVmLgxUC48PXci88U6xwW5KTTppH8TPfZcHcSM9eLpvBVAWfrwMwWcG8kEs3xa",
  "key22": "2s1vj3GNw9WdfuSAiFC4NRKN32srhHY8N569Fs9gPzPVZNfMngHmHv8rkNPFoF3e4MAEjf579LtRSs83kfP3yggk",
  "key23": "aBeTBwDncqBnpo1pLazgNJE7EZLu4yhY19Gds9gbBhN5U4jmSbaxRQkWcW8GiXCBLYQbyqwRALxVCktN3tL9wTK",
  "key24": "3tmff6TyxjThRYfsuYxz1FmvRhr1YwswJym9DTzVKf6Z4QryRSCRnnrKZGyDKvfcMu35ikJuD3RASL49XWkwzzcJ",
  "key25": "2CK7MmHsT4Dsr4oc2SagxfcRAkFYUgtGRs8oJtF4e1P9Jqr7iwvRwftyXKKDCWxTmTUr5ErnrDSwiPMcv5ftG426",
  "key26": "4PuWdYJ9e2ezESde5jek5D514CXZraxkQgZoQQRtECttdkVb6ybrDd9CiGrixv1ox3Kq3g4G9DiVBasKBc8muTWX",
  "key27": "3qW2uFciReHjZhHEGyi4KdcqPr3SjRQ5MKVgQ8FZJTsWAKkSBUQ4FKsTNt4VC64uoBGwgAzxFCQrTdsmGPWyfony",
  "key28": "4rzLtdorsL4CyGuPN6DdRPBNAuZ1MJspgQPzqMhXGUwSo8tyc7ohY7rWDDpmBQH6Q8Y8UHnYjJKjEAPTCvEKoKMV",
  "key29": "5Txqz3y6g6umSXJ4Zp5qSwbjEs6ejFmFTM4DUV9nzjgLVPAj2HwpA7WA5Bax338JCDDAryW4spfyCd5ETr6XrN2A",
  "key30": "4uFRCQNbAkW5Budxh4ET1sq1LHBJaCwu8nYgFnZuvfGDSmivrzV168UWTeqgb2VjEGLJ1u2PoSdB3URSD2osM4gm",
  "key31": "YqQ4bFmWBLFseCsXUa9fc1SULjLAAQBVtMspQFwBf6DpuKTMy5FspBj7aWiDAvUJkAX22Gzz8UR59AohVXR51nk",
  "key32": "4sCbbsCDEqYpzZ84HVy4VYhYa84ER73RzyfjuRHsmrHvK9aPngoch9nNXCevPggWrex8Pb3cJfzVsGNyfGXDVtFB",
  "key33": "4t7Mg3wF3XAtxJk3EhibWHTXHmkJwqEL1wF3WkS9TPAQJFqF66BHkGEkGB8jqN778Tbq3xmGroNTEv1q43fM444y",
  "key34": "4DWnzmvKYTgPsgBwkErPHLhom9vQNMiauE275iWsFfXeT8N7WkMqsPN6ZjQ7HnQKMveiUqDXapoyCVXU1NN5F6Yx",
  "key35": "5JUtZoR8Bs5dk1REoJq8HGMZ9v7MErVhYHNhuh4JHpxgr8JAQLWmrYLJMUY1rJ52URsSkZrbyKpXcfW2ySyGx5fP",
  "key36": "5rvZUCeTkBY8jv7F7S8tDo5VGZypn8k8RAaWc1Y5uf9a12bbFZvtbEsb3VP7RFEDMcVEns1ryK29XbNyNJukqGGy",
  "key37": "5kVpQMV3KL8PCsfabveMTHxc8oHuA3Y9ypvsY7Gg63QnwfNLQcVzCMWgEXDWJuL9m2Yn4dBVJ2D9WQ1jEcEGK8GW",
  "key38": "5BUopS8uFXqfbtuvWJSYmiMZeD77QCRw7zmT4UQD4sG61RMuArTjMXdVtxv4Vv5uogM3iwjXSzeAVYgqnWqfUxov",
  "key39": "Xs6xMBHWv3wHv3fDeKa2Eqs4CTWJNurhd5biU1zKNWyuh7wmov5jJveF2bMWzyo7cbVoFKEtoWMNuPGnVWYVER9",
  "key40": "2KZAwgmuwrNSN8jzTZgBZNWBhUEqt4uePhwz1jsp5aGkfTxiyrRozPZBmqfrfQyWB8pg2ra9tH61kgFW4KEBXwKq"
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
