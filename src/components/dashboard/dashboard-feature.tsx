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
    "jrLAJ6KvEzWtoqWCDHQzK5LMEvKpA5jVJsQGPBDPMk9rQ9NquQXGJa8JkK5R6n6gm5A2hTZ57rgy4Lf9Wi5B3sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2peeS6jPm6wzpyLWHdEw4zYdsxptpTESzNdEbQ4sUNqT1zM2YqbxAJSkSLiQCrNm7hkwP9kPeqbhAPB3Qj22sokL",
  "key1": "4aAtCkzTJ5u2xhdzK28jXquVbA1Eg28PvAFDBsumb2ZCh1kVub35Ua4h614Sy2P13Z6f3P1cRVcCEggtZJogtrYg",
  "key2": "FjrwvU5waCZgW2Z8v68xDLJMocRvehzbznFuCTMbDDx5pki2aRYVxAxAZMeS31xugMD5ypqgHqehJPU1PagZifC",
  "key3": "37xXzM9vy9iS2zxG4gzvUS2pt6zCirYKs5m2VgCwEPMRz2eqvf4q1QS9wgLfDBruAiZa7pQHrrtAAypFPHsvg8Z1",
  "key4": "2wRpLxJBGKE9f3ZoRPZTx3bZHA3JMyH7mibj7DNs2dm47GEDHmMXvyi8TPZXcASftmuhmeGFcrRYCoBpVrv1ReUU",
  "key5": "3ueMiM3H2z9DVJFV5tGG88XGjDUDwgdDb2fE2Lr1TPMXhaQB8Dq7GZrZGHYWKYKyEZN4KbHViNmaohHcA3x2YPUu",
  "key6": "brGJFo7beWvdKp7KxMcX75oQti1KAfNyB9aaAgu3KPXJyJRPf9KmKtSCKyYNtm15YkbtTrHt6fEt1uMFwn5Pzh8",
  "key7": "26RPzCW1zaPoCqfziZsf7QfCeqVgGaQN7gvfcMeWvLN7zisiiG2fBBB7yYZ7BdMkbVsgr3SYZEi3ZSAHyR4PrPPt",
  "key8": "5KAj8ytuVbZp8qbvnKF73TpyVAxcF7m3MYFLZa32Hg1DYr3oNPzxXTGnuQ8KmAqzNXv6xWXUb2MBKNKz75uW59sb",
  "key9": "4ADxCFfiL8pD7mhnGUn3eCcLqvt27t6bbY6dvH8SgWEx2fEWS7VDUBnCe8Vi4hDKJTwf4aAaPyLRdNd9rtZb6LC7",
  "key10": "49x7ACC7LMYF6Jqb2dVCBoPUdW8HXz3E3bk3hMpFPGDoXjiCnFHsx9e16WE8VKaDCYqe3PAWoDMpso9Tvdx5nUmF",
  "key11": "3pjcojxeBW7G55HxJA4i38KE6Fz5uZMzj6krhbHdybRrjSMqtn1i3pBLhjALCF23dX6yKPvvTbxQ1e9az8PNVP3u",
  "key12": "5KfimLhtjVir3oYniTYP5oM9aMnVk1WYas2sBQPUKPB6CKPSdyZwyNy9LeT29kCsU63fStZs3Qvi9Bm1iyBUaFxw",
  "key13": "e2xGiyu4XXaD66ejgv9tM3mFxm5PYq5evDUTE6dsYUpNWfK1MpT9Xe17hkGNPS6mPDU3aaZtYW4YUe6bPoTLP4o",
  "key14": "4au3r2UnrXNXP77f5mDsn13k8n8s73StZphDxKVZfXZrdRuRGHpDZDaPBcrT5RQNZsz1W9bsXow6foMBvvGu52Ej",
  "key15": "4RH6JsuxmZKwgVi1rZpZYPgDyi21itxAyjhmK7Pw6KNwJbyngCqfXF7Fk3mM9rkBGzgJsu1NFjoQ1t1ywKqTMSFX",
  "key16": "2u5mdoHbnrPn3rHPg46eDuV8sBrcb8tMKw16by2vubD9Weu9dLfCK8haWEbQzhUeVTBrsfK1gaQ11pPUuJXU6xrc",
  "key17": "Q2dP9fBaVZpAGEDXSCzbbpUG7iMXoHgd3UdEqshtkBsFhZJJ8vnqRPbarUtQes2uYbyRuP5LaFQpH2eMmBZdPTE",
  "key18": "3dXfZBBTGdPVcAVSnEi4ZvJrXnxYWTaT83M6K3LzJnoiRs6WZRzZeerAMcpchVJAxeF4h2FQV2NrWFtiJZmpdRBH",
  "key19": "4g5za17hTofVwbupXRHxSPMF4Lwroo7xYAuN9EYWeM5az9X3e2c3kbuBFpZavxC2oAU9itc3yPLfWCLdCbDA9G2r",
  "key20": "4qETt9pXSUUq5RGVDLrU3LVVQGVEsZUgkinYJUbwc4H6Kd3PA19yPaRzF9GQvqF2pYykWaxbucjzCVJAafXmhmif",
  "key21": "2CtHMNHU2or2AtiRhQYkwjca44jN2KpPraVwFZ6KYxf3tGHmNN6g39UZhaHrRmAXPNQ3u4Quwq7djMcqaau4RCFL",
  "key22": "5WunM6rfD3Xn7rxprtVmUutgADHha5GaZHuCc9ZwDEZra5eHBbojSNvpYcpthXhRkkdrcY86Wq4jjgzhh6TXJRR7",
  "key23": "4UAiqJYdPeRr3RRNnZgLKFgRtVfPMLY7LBYPcYpZA5Ykpo72cqrzE6qUjAGXjV4QPz2V47DATpErgDw8mNkGgjEP",
  "key24": "5AbmHMNzGPDaELgaBkiJQnKbWLMbjrqcyNxaq2KiKP9dLLpHvF6a7DytpCjQA6KQb9n6G2XL3S4bovRJgpLHF4Q5",
  "key25": "2NBvjGK4AiUJ5Q1WggWPh9Za2goERvJ3MgmbFPFhmTbRsfBrC1762k6yVEgWGZJq2i9f28E93LMaVVm1HSNZMg6i",
  "key26": "xiSd1TbLWskji1uz2Vd8ktKTMp3Bm9kcGBk5znAfozRWBcg1PbH7pKcTxmCJrdX7npAvv58svnfpyYTsZmQArtJ",
  "key27": "34pzRh3hEgQezZVSDu6MTEuUNHDRqpsasfhggFnmPhZBiPAV7bgBxyRDsLwQjPmRnM5dFtYbZCWM7a2fsiNCQsWJ",
  "key28": "5wUax6MSzuKYZXCFHEoF7VoEQkv2vhZc2TBr6y7cwRNrV8NfoKjUJnSLKvNpc2JnpZyqdBfaa2CBWgTHLVLZHz2N",
  "key29": "xAUtAPyT43eebGyqr8C4oes1YsMiNK4RA1SeFTpYcVoAdvDWifuNhQDpJKgnqWkvkTLC4Wqtd2W5arPJYN9ejx5",
  "key30": "5RBhuvBFGYipVqkBNewtFh7xPUeF5fN9MxSdw5Yobw9ujcHriDC4icrbJUyszUSoQuCm1v3hTsQoXvbPx2sBJsmx",
  "key31": "33h1Ag41a4ZNgLaHBRxZmaDowcDk6Z7XMVxrtKLosyTsWGvhchttWEMrJm8PcrsVtYNsmfLtWavQ3MjtWVV886Qu",
  "key32": "3ef1L29SPXkFfAhYHYRYuEEaygmXyj3WKa3sDQb8VCFURyqX4EMXd5W2MxAQg5Q6kyj1WXTo6Gr13aj7C5m9ebcc",
  "key33": "5qS8cm8oonELLK62c9mpAEKMxmbpT8LNKMpwke6tJyzNTUFcE6ofcYgSwdhJA4neNVcbURkyDEUchUybgD8qFUMU",
  "key34": "3CVEWgEsTPEDTie4jGEEDRPiiwwndTL5ABQ4FQs6iD9rviK4uhjTaVBn4u9AEBv6sPU8K8WoA6ppbGAyWN1dCAAN",
  "key35": "4t7eDHe6fbY2Ng5BPd4mssqtaHydW5uDLgDNLSTev2zu8NpWNkn7A9LpF1DrSGFsYKGs6M5FDUcz2BhmPLtmLGZx",
  "key36": "4E3y5D7X663nuVVpPZZX46xa9QuxzxrrQCyiGWMaxdozJSGLdKQrhp1wxBi52W8zGojzPsYL7UGZ1TGByDkNJMND",
  "key37": "iZGebpNfh2UPMS9Q7LPAEmgFcKz79jQxgX8yeBB4USqh4SKtEkKQpCm9uFCbRrdyiJfM6j9yXXBiFzmYTXRXaD7",
  "key38": "5TkqGsTSh3VNdZdN7ZDFpVsAddTdYRq9ZQ29C9JSSyspPPET9JLkcRwwvdQCLiJ4fZsn9RRh8q79UvUiqHDfYFdo",
  "key39": "2ezfxQAp9Afy4wTqShevR4bgfQWBNHkg5xmev7Zpvuj3r6xYXbgw1K6i3p2Kjb5FSBNZCDmYB5ZK3c6ngUUjGVVW",
  "key40": "p354j94xtion2PDq2Hhn2xfwsCSPWquUajbiA6tiJ4K83vwbJMTYMDSgsjF5XJB9x1FSnLd7CTqSRHJn6s7oLkD",
  "key41": "5LdHQVEHZjx5NiBTqJsJoGhqhh3gxxnbUWrBoFvxDWuwCa6ZVaRBGiYoBaSNTF1GeQPy4atefjJwYWDGYAqJJ4Xf",
  "key42": "2WL1XYG69yHc6LnDJc74rfbT4WAvkL6bde1ZrDz6cFtb8iYLod61StQBGUs5szH3WmKDGUxdikAxNzHLw4Yf4zq2",
  "key43": "664futahHsB4HaQ9bovurEc31gNbnnR69393G77HcZPxSZpuC2n2bhFoGQaZbxki3BvsakppyCVtNmYq5myaNcFc",
  "key44": "5JTKix4igs5zUS6kwKqgFoMBExJNpwzSQsnMMqZvj2CedPRx2Xtn3YA5r49odd1nGX6sjHTuzNQZhCDve8fLDvLb",
  "key45": "4QHCgV2GkuPxXUnT3rmDeaFCtvsMhJCBXhUEsg5Xcq8Yu85XZbBSVcRiaKb8Y4sFkb94TM3H8fxGSxXhf5uY3C8q",
  "key46": "4wdvd4qqT81bi9xCA55htcFjNzZw7JAdfaoT6TjkHLbBDPRz6mHTiffw8PVFUQHfBEQQ15FuZiZYTyYbWWbFmJDo",
  "key47": "3mGscG2c1kWNeFxwXrGH4ztSnH1jbiVgaxjFh5WLBj8xWnejddEkmqw9843f77UAaEYGXDfZnuRiFFNuhop6EZE5",
  "key48": "4W8xzMsLdHzPR2ncUDtMzPrFFT2C8CkgsqTckAp7Jk9sYHUSUJSSDU1knUHsjHqJ6Lgf5zXD3RzH6u5XKRYa9jJh",
  "key49": "57XsfTNqv8atj15qiCh8impJjcSjWYPy4hd3RyPneFYGWt1Y2wdSTnZfouZNPijsYHU3tDswCviMj9CQym7hLh66"
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
