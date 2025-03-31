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
    "RzV6vGEHe9gssxUDsZtkG82aCTeRueaUPj4o94QxMQX6Ud4ECzBVb4wEWLsHi1oUWzQ2zHRdff9rtaNWCzVcEGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63u51C7bT9acne2Wehq8MNQkGS5RGLQPpfcjYa48WAyYJiYmQ5SBEWPBsJN4J1p4HcGgoSpdoDxqU6i4hM9pE15H",
  "key1": "5rrqrR7BVHGJR83oAzMP7FEeThhQAMsrjSiarrwYBEcs2jzgWJouRqkxa1yxJw9ZvdUdTH5qr1MG3oRhG9Z5Wq9y",
  "key2": "3hCBawb9NRoQmoqg2U3bzSR7oy3iSH2wPV5MPRUV1hycfEwtc8ChZV1v92nPsgqFAYDC9swXVXteGH3qbxWEKXAN",
  "key3": "5ridFeY4aSr9Vpj9noMhCAPSv1v32EMUPBdc41u8S1UtaeRAMUQ6S1aabYTb8KwXhT73QRBCXBQACsX1VnhZXD85",
  "key4": "46rU9HG4YyRe7WjST2aYnPUuvfLEwuh5BWCK8pBMZ2U28K2mFNdjtRJe4Aohpwab52JdvMhAp7ULBg3xfaeXvgYi",
  "key5": "5Tei9vWtnsKmP7VGnRENm4mXdT8NA7ySoFhCpGvXjAq3xm2t5rRriUQbpQiGYV56REP9nBLLKrrPjPJgAat7vkA5",
  "key6": "2KzHnRUieZGL4eaxszPyHSb7WK63LybHrshT1nKkptqvdV1gczXg4VyG2rLx1euNBbx2FwakgdWk84pdTSLygv8a",
  "key7": "4WFZwuu7oT5oCZ6ym91LVZvND35t62SYZB28xirFGngZxZLsnkirW5M7sivAj1RzxaUkrSJaRaMEehGpY3W3nqyE",
  "key8": "2quDUXEaW7RG3KftFPvNb7FZWBYUXFmkTwhTiLnfnZmWMu2JZbp1rxPXc8oKM2YRSgjCCxb4stMntFdp81KT8uPw",
  "key9": "5N3fWbffg9DuGznghMVVqPenX5DBAJ1BYmufMtN2UbQA5sXfRNKezzngn3hXxtBYAxPWbB26Tv7Kt2X7R1wEZVj7",
  "key10": "3HzMyRubeBnMyRWLyRPDgbFnPY9UgqVexLA5UA8oxKy1qGv3PpzGa317dRXFqNWaPJ459KYG8vUuNRdS64uRGhiS",
  "key11": "52KciYMCHiC9eggJrBnQYmTFBx795aENEUzvhcvvsofyM9oGv3Vn9d3v2fKZmiRLySvse4mknvQRUrVLM3Y1wVM3",
  "key12": "5CLMUv1kkwTXjMV7oXoGrQYXv36edZC5hA6FTAr3WDTQd7ibLFajuwtvN6ffSbfDyHqLSvSkN8UGVX9VNvKTp9CR",
  "key13": "2Py8QzmohebWHFPBAgupjFLb4Luj7ZeSLHcPZqGrZscoFk9NC1dBJZJySdd1TmxiVwweqXXnbanGbev7NyVgGmVy",
  "key14": "5A2kv55g2ca6bare358aQSbU1UcFMW9gRsugLoCCHBjQbFS6VjhvLo3oq25EwGze4nzDtiFyRwfYSs1XMz7GkEZj",
  "key15": "7XbCoyDjH4GfjWGtSvg4BkjV32JZ6sye9x3yVN3BNKHVGJyTwDZTfgzjVfiQps12VM52cCPCzcTsGUBoLT2bjQK",
  "key16": "5T2jF5Xw6oZKMt7nHKo7qnuoDUbEkGcJeoeWggsD6nxnanzEgJ1i9KkA8zqHxF6jdqZBBzdjKZsKXdDrVotyYkpU",
  "key17": "3NQAxTfS7Jw7kUMF8yc53M4ce86koxbbAoAKT4GQZgB3H7d5VDKLTGJm7JJg6K33DUY5hR4NXQY4DZfeoJUmyQnm",
  "key18": "5iars6jSoctywaKS2wPdWoJtMydc7ArcUXSb22NyA1NMFEMvErjNVzoHKavPFudgBDHny8dtNvRNpyeqAamH7Bu4",
  "key19": "443nWMCsrHSUxmEXEeVXq4XivrDFXZr88XzQ9FPEmvJUNqSUMpBrXKPackJvx3quDxdNKoStQhSxz75sKRBZoFTw",
  "key20": "5ZUHYH5WthXCeNcXBDS1yVe3jHsaf7T7HuxNPB4PmkQERbVeWkebnJj6KtBvzuZ1trJsLLa9JV3RFgbhMiH8sqqH",
  "key21": "4i1QgQzin5T9wk6bn5P1tpuo7HkeVxKejh4ZzuvL41SWTuNWafBu4afboWkNyaSsRukxA9EvwmxHxSywcUwTffNT",
  "key22": "3aG3pufNchbYpUFAi2CmekjNLQPERCSb2QLnmJH3G8vxuqEUoBiwk6nQrfFbqdSWq4qjbgunqp68az5BEvtzeokG",
  "key23": "2tmGT4HXyu8ZMeCjArnrdCmMRqLgZpEj5d3mrzAyYaXpehduk3RsuBWMFUhyVK6dvHstbhtTANy82FqPtkp79ysj",
  "key24": "s5QxhuEgnxBCJM45iAMsBRtqNDD3qcoCNkxdqYtS7g5nERuwPaXkTbHWV7S2EhYjxRBN1CvzXempYtp1QVteXaQ",
  "key25": "21QfsNtrENQao3mzEABcyUsikoXiMuFtjxVJyWKcUnL7KjvT7ay2p4pQmJM598xdK3jNtHTTGuSbz4FBayyHUkzU",
  "key26": "5MsoyGZAaKoTT7TKLGDKJbLiHHXX8xeoEQUWCWupSvghYUkGskvVhmCXvUUQSasVNU39rwmC1AfiZybXPrMhPH4R",
  "key27": "5faiammmEFuYN8d3FKsgbARQ1u3kGNjZKe4WQx76vYrf2HhTjRMKV8tzfcC1fEMBju54i2bcaTYdoXdcTdbAz7Mn",
  "key28": "2c8gVrwhmmwKG7SneWpnqKCmFfJeTTkp1UTot4g4hJsS5u2JhBAjygvRuHjCGTQyiYN5Zo1jAYkT9itXKkm29cBk",
  "key29": "5Pf2fzpvoz77ntUSHLc8d1K854ntMVWtsKGfq79dY3vFJBnFWu91WULa66b3Wu7DfwGqKZ8Y3Ux5TSNTs8hGzPN1",
  "key30": "4CQrm12kykZixw1R9QbQGgLhBQWud9dDDmLt4r4rnH9GBRZJfZKXatNjnHcTDQaNr72NbSUxr6MeQzfJMawQzPg5",
  "key31": "2HwrVfnhb5ftRkSqcfr7p1NCZjqTmx9ZGU6zLB2own9GavBTb9hov3dBBS68rNQjTkDg2Rjq3yAxhHMHcNvtgKqW",
  "key32": "4i92xz1nLHQCVFnVAyyb1C1QfDp9DXhU54LqX2Pr3sBxCTUvDhMQxFYQdxn35EY9W2N6L35qPE6XhYY1VsZkYeEu",
  "key33": "4FYXiJrjX4SFfWdnujcZCRHMjuqZWBrgWAtZTHKBvWiuzE1XYufTE62V2HGs2UojUd8SbfHocZrDBGmEpiEyXV57",
  "key34": "3KtDp3ZUAFtbfMgt1cXuD3VAU3Tk2n4Kd2SPPnKSo2fpjTLXFngtTBdTZTG9PtFHJGNsGrb5o3FQ4rY5Gy5FuvCT",
  "key35": "xByoEnJMkazGAeNAS2rB7KS1XqRRS5yqvPPQczKa7aKLuyT4nYYwnwuwF6wkRNPK8XB2XzfXs6z9APHVDJL36JK",
  "key36": "3ARMhPWzw6gsxQeFdeGmnmT615YaaZ6Dfz13oXKJW9V4kD9JFayN9cQvj551j3yTyYYeDqZFMCJ3nP8o95L9z6kE",
  "key37": "2tUXCezXZ6X4xQSxRSJMbuy769oCASZ2ma9q4vgxQAKqsoN2LosyEH3zNpj29pGCBPBQy8eJmwKsH6HycftCmgXW",
  "key38": "3L1rpzQKxavBNuGVXyaXk3QViCmV9ezVKBuZNb33QPt219BWtWMrSo2N4SoqTswfiA88DwUp1GRCE4gK7CRRCWoi",
  "key39": "Etu2qoDSN15Paj1X4eAGo3r6m5ZnNkCBzikbJT1WS1iPUFsFUxhA9k6zoJ9wxMNpJXqRpnsyHs7vANRULGKzCSb",
  "key40": "3EpG85E7rYiGHU1x2936eaWUaCnhRihzJLFXQK8TwB5bMwwBb9pNmuSjZ52v9BpnygnpdUSp1f7LPamNVFAGC7yr",
  "key41": "2aXp1ohSthNsoY9sJDqDk39bgboZ2xfMuRTySNqHWfJKji6zgYTKUKzZjGBwY4ZCr6AaTsG4T5hfKdTQPowSYQfu",
  "key42": "EDQCSks6TK8hxJX4GAXQVGPTAhES8MFrsfUhLHycWPY8TMjxwDwcrCvZxHZ3nxZBnyjQDSTJ2CSKLXWLmkpNt57",
  "key43": "55CKrCoweWa5tiDkTpwdLurfjqy5YFeqNA4hphuaBUugtZF35mLmvv9iJDuwX98DQnu4UGb52SmgUw3SQ1cRVb2k",
  "key44": "48V3TXGHvZnVLP9a4YAbkbjKrr4GzGHd7Zmb4q7Pqm25h7WihQaQXW7eJdYCXGKWHZywyMhmn9o3FgLnfqWbmU3n",
  "key45": "5oJsvvGoonCXcVEz5hgqBcju7EThVkhakrQN25f3yHowaCQS4JEGkwXUxYmN8Q27ZAhFRY36BkFhdfPPEeEHXHBa",
  "key46": "4SmvPnBQPc2RD3kPvBGDhRXgPEdGBKwg9Zpb5dgTbxgn8aJL1eo4QCm6ySm1X5FCs6ugckWDYKAb4XACav7wwX59",
  "key47": "5j8QVqi59fXvs1vr9wyjNUwdETRgLVX7S73pjggF4Na5k7jpB4tLP7oCiWY6dx1h74BZJHHN8jyS8Fs2bmsV47af"
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
