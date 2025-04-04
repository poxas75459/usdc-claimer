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
    "31kTxSMTJHyiSueXXj4z4rD8mAV5BVAE34zYfq6aapnfMVbpQEAEp88So2E7xrAFgCdSAUSC8dsoQxP6fVahtDpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPpsBz29pZ5HntPJHih1AQsR7etkc4grPMumXtkFiXkbhCoVi2jGen8Kmn4wY5LXwJhoDmE7y8PhNtMjybCcRvm",
  "key1": "5K4wGGi3Kh72axyXin6g47va7z6LBYiBki9UBbNW9kSx2zavv5dEmZTFv6fts9MpbqSnS2v8qbvB6U6vn2g3kyRs",
  "key2": "4QRMmcj2aYjoCPmyYWRxf3FHkctWiMqx4uHAJPHw6wPSvbBn1YzPxtujff7xZP8K8V2rKpgUkx5CGMsf83fLukTy",
  "key3": "4DbzyQBmikeA9k9S1sWgskhirJxmVUmj9NtjqRqNv7VPaiRn7SGrhNWLG4NEkniNAF7hMVdxDepRzePbN5CDugqv",
  "key4": "2rZUvPokTSUB5StKjJ96LQWuGwo6kLvDexGLpHmGhSCnLAVaH13uEEfNjJT74bwZsVsLhmhDUS7R6MdF28WJ7zV9",
  "key5": "2bwCjmWcExxQnWkq1S1LNfPxfkMJBWGnT69X7WL8kkEYptuCPxNBZYGCg73EZLoRUKV65XAdixChWND46jid7QMs",
  "key6": "35bt5ixvNHr56daRQNJ45yyEwCVktoszZasgDbbaJkZA8Unh2NgVcW1czKzTgEP93XAdTbmmdNeiEzzV1o9GTTrM",
  "key7": "4aUU3Zd6DDPFTqEwQ6kui1ZtscGbZEX2iwh1v4i1ydH4usCAzztLMeH1WgNEDEJTWCFBjVsz2FYqxRdDPrvGLYzP",
  "key8": "4CYvkktzHMDfcnFrj5ntC3oyzS2HBE6s9qAAi9rkE1eco1tWKrFf7xpjm7F14HFWPNUvS5DUpEeyD41pR7MYUxJV",
  "key9": "29hcv3qxPLRE87hYq7Wpe6f9VHA4vadS8AXcwPGy7PfmL8z4X1ssQdboD6B7iS2JgMxLFHQ71Z9UiSkKb6ry9Wj6",
  "key10": "2jLHH24e3kETi6BwgGUgpyxVRXrfmijan7xbPtVkbTCezMtHEpG9Rfz2pvP25yyie89tXeDX7Fmhe8cYsQ3YhENw",
  "key11": "3uBVhPC966NYHST4cDBmk4TYYV3ahMkaVM4u8kdsMxvjCAogr1v6Mo8HRrWM9h7gWaWS8JhDmH44kDRBEyUshhER",
  "key12": "5QkmkUzb2PaeuNAjpRfKcmqhzMnnGnYptuskFS5ty7zTM4mdwEh77QGScVJFoaL4gaZTxoiGmBeRmPZ8p9quFNgk",
  "key13": "GDTKzsnbwK6b8Tsd9jrXncDWjUNBZok13Hyp8pX6oKkFeZq8fGHU5gJeFF3yZdusXFYAgMENuEhcRJxJg3aLkc5",
  "key14": "5UQQogY5HQR5PoYxgrUhEhFshhXbrGCNhRXJnRENdTVgB7hsVBooDhQFeD2HttFqFsnXsVsaa9G9ohULYwnW7ex4",
  "key15": "2c2cmhfDgCTzjDukWpi9kZS6jEPYnMnMmTgepxsHw2EeisWyZpGz4D1sBTWrE5aci91i6jZiu9rRKAkQDfXPqWWW",
  "key16": "5y5TShv5JrpAmr494YHPmk5Ct2P9P148hz22yBqBCPDdrSLAeL2sXYWfeT7MtobHzN3eMvjdnxy58U77WM5Lp5PK",
  "key17": "22qqaxFqkKQK6zYTfwci4B35XQ9nsA2vJWfPTGSSRZozDurdhYfN9pzhKcJ8XrQec4YvurZgdGa8QUipngQWM7Vc",
  "key18": "3dEPY45kB5qePbqxXuBwkyEExvrb3U87sdwwXZfkaRYNRhrA1FytamGjpeEdrHxCkGqG4s7fKyYqgdzGDSEpVV7F",
  "key19": "V47Ue9P1Hvc9yD61aY1Zn3H5Vt94RHYpjxDzRfup6M5XUBkuo53PXnyH8XaZKx1ydFeHRkkGoApTj6JrxHK9V6s",
  "key20": "3JyHZCwNb1Xce26uXHq3dubPegTaMSZrQi9kXkKAZBeZhyinjvxS1fz7QFVZcbWmGMD2CHVnwQWWwoHMNniWebrK",
  "key21": "43xgYomzSM3x8aU3jRuJZnDC28FCwzowwoPeqZghJ61N8NZFntpHuhr6TyP7s4CxHH9iMLd6xxMR5N6NWnrNMXqc",
  "key22": "4AdJr3mjSXq7xPadPEobSVQtes8iw5LWHAY1RHEcTh17AcAotuUX1tfMaEF5GpEALvDBqNB8bfWWbck89rLFacKY",
  "key23": "3Vo1r14HMtahaeHPNGWhijoHWDuLDCRmqQQwAY957kfRxy17LU6jjegqBPKnwrgcmZosut1zEqSRVnWC7McEiyEs",
  "key24": "5jFKYZ8M8VL6VjaCRxVG5v9DZr8KtniaRfBi3Df2bHDQeUHbqhBocBTc4ZUNDwAyChWRexXwzSM5ejoPK5dXx77E",
  "key25": "35MyFoKWxt2nzimc9MceBhHLLDaddp5WemxejH5onxGYLECaP95d6tVX9Rr7JtDAPFqdt85ktqMrgRCTjeGhnbbD",
  "key26": "FecaEakpUxrEWeqi7pCbFcLi82tNvPxYawaJP56xRU25fK4DQJxCW4Z646X9UVyce3xghArgGbkuRFSVssv3T4q",
  "key27": "5LDWuVQT3mkwLeGCLhQZ7FHQ8AJJe8VxrvmCWgdyftMz8bn1fT43F2sQ8nihRoNR6Sx98RfNdPhBzfF9PEFZ7yB8",
  "key28": "2TGVK54Chtp4Yyyc1NJh51AT86SXgnbBtnmVhd9fZAAEJEiv7pNoCFCeXzYsX5KhB4kvHrmfFdWuPQSKKAsbfDjE",
  "key29": "Qou7BTdNY7yGrkjGSqX3GFWRfYq9sxjU1MrwQj2xtwZ4XhQ9VGjK3fZXFDBYbkWgacoy9XpeHVg5CaNkCA2zfm5",
  "key30": "41MhLFzPN2KCouMhNLzSG4yTHDe9iQYCrLMETVmgCtisjHxcHH4M8tV4wqzUww24gXpnkFXLwhgwSTRekTxv3nfJ",
  "key31": "5FPUzhqAuiVzfB369GLBDdMMZro8XTBfus6fJvav93h1XkLfSQJKRBqu9zAmmVqa5dJV34B6fnNC93FZcYBkPhKf",
  "key32": "5M48gNXDdtnomX846fspybfCKJX5A87LrPnVYLQb488yzvnYv989vWkWtFGaxqfq9Cretr8ugvo7fQkUnN6QDpxx",
  "key33": "r3MJtTuFctRxz8dWVD9pup7nzSSS8eYQ5wQNRZjNyTsz4PfvgE3rtw1kQ6yVfHdKDzfyEybAwp1kLRoBxAnUek3",
  "key34": "63P9GjKJMEbTukUpoms1rCTiYruNn7aH5kUCidib8LXEE9PJbN4sfBy3qmxatF2eESkfd6HuwRtnPDntWfFtytLK",
  "key35": "2Q9BFwSAgdpdg1SPCN3f2SGKAKEcNQtEnjAbhzSkbmApNVa86mZncpRMBrjf9r8kFztJrpMi8zyrx2JjGRzb7rJx",
  "key36": "31fkKQnrVNcoj6xA4X4ACQkEKfUu2QDYmbxdCYTA8RoNRrK9MqhddBP2aG5ydnn8XxqpxKZwCwSu3HUPgsXZ6dNK",
  "key37": "47EGnVfTTxUdAiFzqenZvFiGJYxwqs9tr3Zkn6EXd9pgRaP1DEHeebNHVvKyWiQtderki1ikGeA37m7Dou5ujh68",
  "key38": "2Vp2MJAihzaWsYgZwaocDd5pMTk1uA5CPBXto4EkRp3BF18CyqcVKmnqTu8QWUQwENVoR8kQZYcRGpGmCcQbSiuA",
  "key39": "2Nc7VmXv7xKUsy2aoJM4YF89ieEi32NWiB7KikAxMMEBJuZjqj8VD7VorqG2ZDmn7NdPKavcV42xoZ8rVXwyEooU",
  "key40": "3bt2atgBPvxkmdf1VfiYF5jYyqFEUZjcwh1FM6xw8icfWkMem8Mi5w33b4VZmiruGyG9t5vVq3dmFF6fSWDYUMEn",
  "key41": "5ioAapewcfyjLXQtMUqZ4xruQ5rDNg8CkKgkazKXczWSbZ8KdXmyGnz6P9Q1ydjTRu3n3x7G5tF8TfuybwJ248X9",
  "key42": "3MxZjBhHkG8ANaQQEku2NUqCoDLi5FRx8YfU88meknzedn1h6N4EXHMU7NTT8v13JkxbtC8uhByJULFMYMtkGUvv",
  "key43": "2UwzcUwaQq36kVMnx2bZBErURrK2LdTgiKgZZwzALcrfxykBAYQgXqsBXVgywQsK68286zcdkWYCqxMKLnvT9uBK",
  "key44": "2pNqGkG4qDb2XA1aGKKR8ZfBuekmf6R38AAyAqW4CG3NXekaBfNLEqieEQmuw55MV3PG4GQqJmVmDtrWAjDUAzbY",
  "key45": "5n5iKCyPDL59CYvL5oHQicpAMssxoqPyMUUC3yij1j5RFXW14uUGXzpgvcT7d6HL6ocygndfvpc9rmJzMeRRsySA",
  "key46": "4D4AM1TK2weqopvjZmqTKEhVLxxiRVnxYs8PnABSnsd1c8ieKDHePqUWJZKGbgCNpnJbJ7Q7rWw8CaHtiEeQYXC8"
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
