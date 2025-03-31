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
    "3tkAhhYv9VVcG8vFK35opc8HvaTTZDEzjiLbNyqyeo28W8BxDLYJk31wkh9Yv49Y3e59rkxVbuRgqJjBC32eeVmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428KKtANqzAxDiiz9tatRb4RcaUGcxrGWbKAcBVWv6fGeybv85J3mGKk1zCDsBTCKV5TDZBJUrFH5TNQ2UMDZ2Bf",
  "key1": "2q9XrUGonxkJV9vPv2wE3xDfVjrGxoRESjByji9QT3BtTnGqR316Ug7dWwGikzLeGyFq2FDeKtZwVTXmWTz83kBj",
  "key2": "5GprSb41V34LqJ9zVCZi2zztHn41u2THtU4EmFniPQMUfnSMLifmjTzXfLH59d5Uujz25bJtsa7emtgxxKmocniE",
  "key3": "Am5Jf4o8squJ5BPHk9mubzUBPgTNgJaBK4cBA5Z9PVo6S5u2dyXLx9ZvQrCpFquKB2kgz73DyF9cu3pd4LfLEK5",
  "key4": "2d8TzNFXk9EEX6i7TUsb6grfos4hkhRa9Rj1FGwq2JjCim5LgANjRFvD2j45NAtpcRmsmZR3efGM73U4rmHcUrBR",
  "key5": "4vZRGa5F5SmXZuv9i2oYnLgjkrHDDBd4yNHTgEGC2KxGNMtKayHTqEkSrwmJSBewchmdDkiHNB7wXnLk653vDANE",
  "key6": "5eSnduy87PvuwbZyxCKcBUhzRbijvGXM1MpYefpSvw1EaVFGjPHeUjtvhpvQopFLr3VHU6suY9pm3SoizBJWV5iL",
  "key7": "i49qUGGNNsngSjWm2x4AJP8DpBcd5hKjrxKXmbgwAzTSX8H3j3tqtBaJgwbqs6ZaCM5wCTnrG97iwjYRfZApZ35",
  "key8": "5Lt7QNgDXzgi8NEofxSPk2KaVsc2QYKCJ47e7boeqtnCUHnuZDo2qdPuwGpH6FzLxryaLK4J1HBib95dgWJbxr7C",
  "key9": "2dqyAmR9N4Ddmz2X6t82HQ5FohBNP9DZPKfzYnwBiGtxocyiUmEFDZWeortur8tEAQCEJXCa8YSHuyWspePPgH5L",
  "key10": "3hn21z577Q4yXqi1KCuKwdRXMwACXJE4SVxnBtQKQaCv659TFuF7MKgbC7AqiBPwigZ2pgThLChiPQAaBGPQFRoA",
  "key11": "PdfDEo7Qb4hWNUS1xuj4WXMixW8SCzHErGYWWbn8DmaHFC92cEz7sEJdeeYJNsU2PHz3n1Vd1bzuHnPTpfC2p4D",
  "key12": "3vuV9zL9vCow2xHmqJj9MVq5unDfWaom5UYbbHXzFNyz6GkGsGvr7NYSarkRXGm2PSqr2qaAyi4vSUqrJuG7Jfh2",
  "key13": "5dXRzqaN3raKpmwSJsGZhEjgKPjy3RzBDbZBZKxPK8TxWoF92TaojjXdFBwHDUtyn2yaacgaSwYuGvu2PC81R4Jq",
  "key14": "35D24XrYuzrDDjZkNDG576cQgb7F6VRmFsbAS5iCkaa77vCQu2nJrfLy7VWdxYEoU1JY55mSekvaiVyFrx1g5v24",
  "key15": "5YRc2ZYogcB9pcpgMwcnC9CwTAV4p8xdoxFc8GZgZH89XGzRBQRFxAKV7eL6zNCEBBUdo5wps2RhaJyBFkAcK3gB",
  "key16": "46Vf7RJcFu15RYDdXu2wYaBe81GtVraC3JdL7TzGiemGmgbhNECmrykpjiuxFmZukcw2FTJsx7PGbRxVCTupKBBY",
  "key17": "3841428WMD3mzsR1oqf98bNG8kZ6YDVBsaTL7uyoj52dYxUtABxniBrKXc7MiFxkJvVjtAWT29wPALgoi9Ywghye",
  "key18": "3Fqxu9oLwC9bJCvGu4kVJ7nQ1qXP6Q32cva8FpjLt9to96FcCPm36Sh7KB4CYXwGxu4G2x1y8MSiFuk9MKLsF34c",
  "key19": "4VTgGXU3biPneb2qrXR7ySBtgmqd5E3cwv6CHy8vFiK4V1XEXy9kP5wqfitJrhPsPzwDRQcWcMAGv6E362Lt2mmX",
  "key20": "3qJA6RdG5BQGhsK4oyFYN2EuDRDx8CbpqHEnAzsHMxojVSmDeZZCV9Q2RDM4DAzUfgnSNKBYtnk1sfepaMK9f5fd",
  "key21": "4HjajACgUf5ekqPD3ePwW2ZquzCdV5tgnsXkdFXtRgMXakX9jsNspMjQbcXkmrZGR6ftVFczibJ7H93ivitCLYB8",
  "key22": "4EsecsmyuxbWHBRCbUHT22gjoeCrtcZCSuBdVhXjaLSfeeHBuC6nHYwd71dkJQXnJuhkfmnyEpFhj2K82MtWubsz",
  "key23": "cRfDRxE33vjRLpxH5Hnd7LijVZ7eoz2PJeh4oLPePp4vktyc5qyLa3ZYqb54rFdqt9xQePDEMPvBbu2ciMNyUi4",
  "key24": "2kgCxeiJnLPu1RTfkd5swJRR7t4gwMQUgrSPuNsdWZwQYdTPTJTVFQA7f2BCSRuq32TTVHGu2RZu4V9eoLpu1nkB",
  "key25": "4kNCaiw38QodtKDHZhTd1sV2eMDTF1ikejMiww4s23rn2wJSZp8gTSFzWbuowRv5VGebRnYxkySqfomhgGSAtmZB",
  "key26": "5bga1XZb5NehzAorvoVPbjovxuF95iaoXEhaFBuDnB3aGLsTPw6NheD7f6rF9kBju9Pr9tN6baTdRxNrVVeWm37r",
  "key27": "4UHuvi7CLW9bjMyZmBFezcUN7yQ48iqXmXAmae7bvJ4yLGKktqY1ihV5A2B9FVyMCSkD67Wm8EkhBxZPyHJrgiMn",
  "key28": "3zni683uxsi4T6wpL1h3zjrPnQR7G7r59TtDofWJgQrQojr9uqNBnb4Uipjw4oi1jpEfH6fi5WLTitmk16WXwdCw",
  "key29": "4Wx6ZcZjgdC7pDCA7gptHZgj1h7aYcJdzzZj5PGoxgXhtpKcPpqCs8GPUUWhQapyTYhDGCJXHRoUJ4mi7utdanPW",
  "key30": "2QbmwqMc8MuQmFhtTpXUettpoqiu6ZBxo3EjYAZdcs6wFeuQUUP3uubvsYFAMx2qZDqcmbEjycHiN6AsfhHSprkU",
  "key31": "4ssBdD7PiSrJ9wqQV3Q29vSTFKTMd5mBG9beXQq1bWbBZm7wQCh4dBJCFYyNB2ceCqsEeKsXnYnmJVjftuMvt8BP",
  "key32": "5fmgFh4hg3e2hGW2wkmroTfUk8hr6TwFVXw7YVBvLD8dJjfXafTrbAbNwtXUm3QYLuLXjnQp4LLcVQikamEqQ8nG",
  "key33": "56yH9MuRpySV8m9TJ7EvxiFbsYJsyoN5yh6UEjAZ8e1xoXds5u4xJkRcWxr3gG7WwLQexAzyu3Htt1WThRxw89DE",
  "key34": "5bHaZBerfz6kFB6kNEi8Q95WEbCocDsoGQznPuBDSGac4rjSQ8f4idiXEjm1NpU4GJPgb6cpKUGWKfgDPw9JEkbG",
  "key35": "66d86bk3mBXghRheUtELqQ87N6peRytWGUFi85RN6pei2PtXnuZ2dEivAShxtLLEK78cd1RzRLRRPbgVydLS5MWP"
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
