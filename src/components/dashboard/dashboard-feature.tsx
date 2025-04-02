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
    "AQeX5UBytiWhxCQu5ps9FqfKWiuDkwshN5w9sKEM5et47TwzFGCmpTWNzoWNH5o42gqTtp5JwCkJ8T9WwsjV5hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQ4mNmsaSPYDPqoc3ru1KF8JdVfqZVzCXcduFMgp4K2Xwc3fYu85QYZQaSYmxRNdvadHpnyTuw4znUhR5V27Jua",
  "key1": "5d2xrL28jo9zzGM38d2TAxcdcMKXs4zCachU3dhUGywZJaCKFRWqRpbt4hSBPf93H51Xx2sTEXfN6Qo96YL22nUr",
  "key2": "Vkb5Vk8qgAym9D4mSnEjvmz9bmv5aQbzr1jiRCWHy4bp2PS6QDc48dhiWuQHwcHPPfHdZ9D28hG81QYSEMFDKid",
  "key3": "3wnF2sqCdMNNoSah54zHYWtc6WGMguodtwWEP624wZMQpMbRTtzKFSkkuviq5Tba5uJviMwG8cmgJu4ze9eMzkQd",
  "key4": "VoKjrXe54utphFPwSr5PcD6Z4DE6dMp7qeQ5zbhbPMhjCD7t6Qyq2uBUvzVDTwwuXuJn5MgCuzUXbKcYCx5uVD1",
  "key5": "Dy1Y1ky9PkNr8zChMbguJHESX6vA1vszgKPWZPjT3rVFGpFLdTtKZEqi33eCufMPwg6zNYp88FzBnVR5Dh5iRmS",
  "key6": "21kvYqVSnUYK9j63PUfnVvBpWUdxCEzSyXciWkNqHPTM7BMYcJY97XjtP9nSGVj9Cf9oL4A49KvHgGboNXjCa7Ug",
  "key7": "44WzZX8wYD9NXra7d4CrbuF7TVqMGzso6dXyjvgSdxTKPU7sd8TBbsDbzLFS8uMGCazj4cfCTN6VUJmEEmGocJoN",
  "key8": "5NjqgPcvB18TstKE1YNFnvKFEQGKitm81E2WxNeacPjFx6WX3ehRUpnU2QG9dY4KyXUwCpe9kXPf4uB8J8bqMsZi",
  "key9": "3SLkBL1186qYEjKHixWGLJvuQ8assYeCBJMYUjr1MAtxXfhmHco3p3JjUZGAfxwgkJ5ThapQeVSpVzDrVc531Mvv",
  "key10": "5mfb9gWbXdm9oR6zHvsmjWfqeLr7ewLDHfqbQen8E4Kc7BuGFTzzg1PAEkzXWiR7dWdjtYGFu1e8c5FXZWc8QfMY",
  "key11": "2Z5wqZw9xLYGknbrjCcoJuhuHt5EnJZ4zgp4RHgAi2feqXjecZtVkYqevk3Kc1YbCUMXfThqTgNym8E1X6sEmDv4",
  "key12": "65mihNfbSvjP18AG7WxcEKjfT3UfFrVdyLu9TY4Xbk7q5kRVYnMDbnwnCi2Dd2NkTFyceWixmjAhNGDVfPGeoyZr",
  "key13": "3narRM8cW9VSNcGa71csAkPRMm5JUAHkdaUSCgiQ5RqPet4YoUkEetJUbX7ixAZcc7cxGQdoife1EtUW4XZ1CKho",
  "key14": "5hgN7opU4kuPwrE33rynBWihAMBLpuaP15V339rL6izYhbYGBJewEB8ZsqWXr6MBL6YP25eXjBNzBiTLcHRgKKCd",
  "key15": "4vYHwnRcN75ZxL8nmpoEvvs4D7Fj8ioCPhch1ffUAjuX1GGEsLUhFRbmFdMcJC7MXHxJax8AX4zjyMkZ13tmHnWF",
  "key16": "4BaeHnHCg31eqG7nH3CKorzpCS8EV3HhEAf4kTVpum5eg3TDL38WWErce9Y4JMmHwawGQLnLXbyn5BshZQJ2Du4q",
  "key17": "e8T4haKGgTJHhYc91aVbReGQbL2WACg6wpKB5ex921jhKCHgyNV2NcgPEHZNJSjT3BVR3s5oj7T7RvGpMuMrGAV",
  "key18": "4qh4J2Bx2mqCcsSzdd1ZbpHePCnooG879XPEiZKtrrfZGn5oyv6aLr1PxqYZwtKcRfCPaFysyt5rn1SvMsJ732v2",
  "key19": "2gvE3ZiDFqW8m8PDUMA678VAQA2tFyTdX8JcStCLQCVqasufoahbUdmQw5tudNn4kNH8gQWA9HNKn2oX2XeCMCqG",
  "key20": "1aHNBFSuZem6SV7SERL9DqkHYk3ccFXKDaroNx3rWsDho24LRRq3PJLQpjzhKxruo6VnLYs5nM3rn7QzSDrfTLh",
  "key21": "4deMirfe8Yw6s1EVfHbuR4HXEz1yZpdmfcdZXrJHq9ipGtoup1jNWC6A4t9TgkbpWEyReLtCSSZx2S2aSCvVbcf1",
  "key22": "55jm3ZHxDdHeWuprmc2RRxuyuvtfr2JysTHvoRHygB7HQ1YtSjHcqk1edVgKTwe4iHshwrNbwGLAoCNCUaQPXjXr",
  "key23": "CLpRxZzoznuXPocww8RRdNjNjH6NwMjmuMfpuAeQh8SuWtTUaJdDSoX6ychTgZX2CqGVxZEBpKMoh9EQUPdhcU9",
  "key24": "2ij4y9s4zW7Cu6w54YLPinoepcfCNFoSgLZiBmxF8FoaB2w5P2PJauufxBRtvYSZfLCfuzcZKvXqcTs2Qq5myM3H",
  "key25": "5sGoLY7oubvNYiQx1yPNT1G9piRSqsNKSWMmj4NvcVSzgQYXSisUuqnoNR1YfaYW8BrB4jKTsXenhDtdA3CvYvPd",
  "key26": "2NhAHSeejNrV7QkjHtAVbVFJbuMAjqYLsYfYX9WsUnLQUiYC3qGUycrY2bifUbbz9rnk5BLi58HMzTEirgsP6E9u",
  "key27": "2SCGvnHW7goMEutfXvTPcAMXeYrexwxwpicoMnFJs1DdGEMthRWjSuMd3UR9en2PmUkz3Ph2dXihV5g5AgQ8M2xW",
  "key28": "4YaTYa6o5tppyitaULyqxdM7NEJGCuANLcbBdDfDU7pw8MTn7NxcH4rY3c3FmHnukJGnZjJb477yjEysY3zP3qi2",
  "key29": "3udnYCorWsH9DvTeC6NbHo3fWjteBzixG5evQpXiSjuXNjKz7ny9PfzDfBpniEiPKoewzCnH9Lu96TnBjf8otWgy",
  "key30": "2WSSPvdpcL8tLvVzqtaxUuiPAYUBVBFD75eCVViQzFuRSKMPpurQnTzQR7Uo6QXiT99sejeAPHyqXUdia6T4R4gr",
  "key31": "2iJRrG9oKN72C8qCkuJ1Pixb1njYSYU4gEngNs9Lv2dk8zuSwpxnvHbdUbpSLVNtoMT8Bkb1TMvaCpa3AwjsBCAG",
  "key32": "535CGcALzsaQwYxKC8xinrnaTAp6X9KNTBifU3btNcyDjKhzp2h4zinnVjaD3ug8v6SUnJFvLMEhKyNAvWRyyZdT",
  "key33": "2NheQ2jmp8NwGdnapL5ySWQCriWTfaB2KaMtHiPi8Q3e1sVRJctMhXVUU5GTnajhSCYNczyBuqY6U8z6QyUtgLsB",
  "key34": "4vdaR6jmb5Sy9oB5hmTufABDDmcdP6AD8CJV61ib2W6QxFnVwxgKkh7fLBsZi7nJiLa3ReXLPNMF5udEsrWghDSs",
  "key35": "zWQrGLyf9pPQXJQjDcjnp3KTkUx9BLAEgCsysUXLf9Hv1CsRjzQ3R7q2g9XD4i7SD84mixGnAG6GBqK6ag4Uqu6",
  "key36": "43UmoH9EasxPmqhonzu3h1BNR9DmeUr5xhv79DoGEnF7ftth7PvdQnKUri3Mj4RiLu6pgNyCrHnQ5gnskWAaZ4iL",
  "key37": "2C6ajbpvy9FrKVHxaZTsKEeVdnRxCS4QWZScjzKMYtheXLG1HRxfrZuN8WchDDYztR84zuF9fD2E57N2tYtfSsAp",
  "key38": "2964bBDXbB4xiqsHSN69m7S97SYsfxQ9Gx7YBahkBvvygyFf47qWNVkmxSzTM4FByQ6zf3mX5Mk2ibouF4EKkbU9",
  "key39": "5nJSoMSZzNeTBsNPD3gssQYSE7Nr3NKFiTHczW1aaWVtMEoBTQ2cCidkPpQPYks1Ykz7dbE851mhy4VeoQfP9ZZt",
  "key40": "joCD1UyBxqu5xw7UVMzstFZiah17CTB6td4UjJTBrV9Rv6nXX2xrrkjMr1bDFu3MWe7oLXWifBHMW9DBaQBJKH2",
  "key41": "4UqWsGyGaK7Nrwbtdm8zWYKKf6m6Zhhhcyhz1cC7RTKogv7RBmEsvqZwpa5eQd1nPvAcfgKrf1UgCCVSkvUdkehy",
  "key42": "2UhFSG7iH2pd9KyHNdnFC4yhGdxmjDGszxF7BR6ohuNK4tnYQ521JfwEtL8prDe5x37V2DygQv4y5HhGW9dpmnuL",
  "key43": "23dSZ3wyQR7hiGkjAAoGVyF3Q3GSR8JrP4pSN6Jz6fmAWcjwMAEgr95nQpnF6e5pNfPfW7cAsfqbdPBT4sYLApb9",
  "key44": "4aihcbWPW4jPjArsKJj2t6TfczKGMZk7TkvYFfV6BrqL6ZdiNCVnuHiZWJRoRrJqPquNSE1iCrcEG65z77vEFz3U",
  "key45": "2a6WDUjxdrMBs8odvHcrKUzfJTVQP6mk9x6djRZFHffYNye9ePWYeqSckAv9kmQAvGuob3s4xowdAEwUzNXYZie8",
  "key46": "qMSVGL1D1fxyQE43o9vq2awNucZeMoHJGCmUrcNBgJAx8HLEW6FcJmG6uxqcxDzDMUDPRsKHy5opRrBP6cooeEd"
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
