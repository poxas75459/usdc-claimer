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
    "2YJzBjfWYSc7se9hmj4iQZBt9VEST4cwHTh4NfGoQbGCgJ8HurfVBAwuJTJ64LsCR4mLGuSdcExoN5oXsAabQHZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EQjxPGUCV7irRjF94oe8xCUmnU79x8xRs3jsazUuVaiGRPumZyVe9pybW9AyU5P2Fk8vKK9ieJSpPvfszKZf2B",
  "key1": "3t1tE5VLwNmmC5B1nc7Q1L2ohCc9zGyHvuNbzKvh71zGCiM2cxjRTETt71LqkyHP8AKETVbFDfSXnsMQtgNyUFMe",
  "key2": "3BftJq6WoiKsbNUdcadvCgGE4QcXL6nH5UiGJuekA72fera38whi3gMxZsAn6dLN2GphtetCCsgvqpZuebGcDFnn",
  "key3": "3qnzzF3BPNmSPPNPKtxhV3HmfqsJ3hh6z1tANputax94wqvrRy81mtCzFf3ATr2YWKfttSvkmtkxdzzigy51mKzk",
  "key4": "63vfTYTC1mUzuMak8DFDWBxPphV3oo1vYzcuYgzXJGHEzMY6KuwfJSjZCstAVVRpuEsKUb65i5Qu2wNhM9UHSPzz",
  "key5": "gic2jfph7k56dAgnJj7nAGb6weaKsqySBCQMrRo6883aVGASdRZpxoPqfa6iNcKdvVeVMps2Zxvx8Z7NDXAkw2g",
  "key6": "4YxqhMvz2nn5iVkfWPxBjiLVquRFNr8FqnvEpMfDzVKwNuGz5ThJccpdHyHHSggjNjJy4MaCKRR81HS6M7N7zbwX",
  "key7": "EYWPuhZ7CxRzbc8ts7kdDy89jev2AuHEAcxtinLtXrNxvQ1e4gsLfHD4KERe1EmEc2kcGiq7B1CExavFMtYChnB",
  "key8": "5hhktZ4QKT76hiSXGoy2PRCKWdBJTF6YUv2jxXtuBtKK7GiduFnKC1uELQnZ752R4aK1iUzvFmi25nuH2GeG691z",
  "key9": "4FP6Jbb7QgHcEBS3QApAx6YDXrHtddxUHCMkPMevVtFh98wARLHtGqdNNaKdTdBHvMmNCJJ41d65PCrhkwTmfJwj",
  "key10": "4HTAkiNWPZuVUFsUVihjraocVFfbTSp8AabzstKB4sbAveUgL58dsaWtzkv25WGj8nVKBG66kN1fpQKPVgmF2LCv",
  "key11": "66ykzALpmxSxMibMiTEkJM3j83X2SeDHgii1EWYCisFPXTqwULg3KkUtQBjem1oF2dy6Bp3bNs8EmwFBEd2fa7qw",
  "key12": "21XtSExie9WgFkYRyyyLfSosZBjz7hoMPbYzTpF5TvhG16YKTjXSmp9tiFRy6jSwMBfXJ6CjoKjTZuPdk56oX4hQ",
  "key13": "3tBMp9k8CsV7cBGtoQn2yGHoCM1gPsUJBmDrYpY5QMseBJ2zrCQqLTvdKkNkwt32HN4maBAjyXCC4VA4k7M71jwi",
  "key14": "45CgXYjrNz9pSLRNQShrLEwWjCSinojnzdCLYoZwBTUTxkS7xxnY7ozbwQkv9pEdBPXBdW8dQNp3tioz4fUbiaRZ",
  "key15": "4HQuXB96DsmeH9x2TVJvXzashNDRbQMhqCwES916kcyKwXiCaboseBu6JS9t4TscwscBmsyNo9a8tQqAbzfNBcbg",
  "key16": "2hxtwCUVqTBJq9UY6EqMz1eVisPBX9yPAVdNPhx1E9RXQgrMGLipnVF4dpAYzUCTnKY5BtgqP4SU8JnUpnFh3vCX",
  "key17": "5hRg213RRfzYtcJMRrfbEo2jVrSVA3mS66C9C3vnztuH28EBtGZ1P7esVeJoQ494emPGdixvmn43xUQtGJhv6Xpk",
  "key18": "4Gx2WrGLP8u5L7SAtrrqkPvnaQDhzF3Tq7WzEJJBHbz6hZYW3pk9xCMtJgJMF4Zzg39kqDmnrA9kYRDGKX4QzftK",
  "key19": "2bC5eTFqpwGiyjibHAfbBWugRa8w7upezLqEpMHZNxyACoWzfHEHL98gGdXK8iyx9jB3o8fvpPZGDCgRFpgt75eK",
  "key20": "61p6dTYsZHZwMT61u5g7TTXfpbJGKMgTXJefeNR9UeX8dzpuVg4UNx9WRkJkDZMyu8LtrEjhxt1ABbNWGXKFRuJD",
  "key21": "5pNS3eeGMciVQSGRPzT5WSuHNoTZrCq5BpuvBbQe12gHp9g4H3NSwfdwEvab1WQgWFuWquFgDS9svp9EDuC5bN4b",
  "key22": "4ZHppErCVEJZUhQmqsF7sC3F63cpf3CmwkKqLzEyv1rjBqcXX4e1KHpv6iBvjePfUTCEsTn6zNnGp3oaRfBsJBEx",
  "key23": "592M9r82Hy2vDcxdfuV5dGwdYqVqvjKqXWsMQvVFP36kHbwAnjeJEa4XpU5V9eVgyDWxWnEwpdSu8BXRV4d9XiGu",
  "key24": "5w2hEPw1Fv7xqzpQtxNNmfRz3HFHmgfq3QDDDPxeKKSkEUZcSYAT5Txf7HU5hHHqFANF1TbVFUTnp9YPZMEPmKdL",
  "key25": "4B8YbGeqKHaLamaV9CBy9BfxoHJbXbwar8x7zf7TTGZUpSLq2wUPfi92JPQXsYmpTT2qJECzYq7MpXaZ3ZRB94sP",
  "key26": "3wrW3iCUkw6tpHWMTmwk5uS9sTYhpAtM9fiiGV5ttN6ReuLNBA3ts76vNLs8GX2kt7z66yudHjgkFTqC47ysP11S",
  "key27": "4t6WumytfvH17EMRcdHNvpbsCCzjnVcFQnuvFJcPBWSAEgtC4nvj5GS6vFLbv4vpSXcj4MRgMPZUnNsKnJw7x7gF",
  "key28": "3pRLfq3nDfun6VspBSU9F5jWFPdH1MQDWHipJneSUoAKqRSchofzpUpZhHV12BMDkus7LRr5ic4wfxxqApf5RV3Y",
  "key29": "63qec6gdhcgWD5rqRPbzgyA9sSuR6gE5fEgamaisKHdRhPx93jjGuZBHUBDoTcdcWHWkh4kdakExx8CKh8fzRL1x",
  "key30": "5oF2Jrr5JH6vNtvaUavLic8AouXvsLqV8maVdiuBmQLJC9YHpGXVeZLEEnDRVbK85RvhSUGq9ncup6WHUTd6kbDV",
  "key31": "Cguc79Td4YsjvD3f1Kty22cbGwJPv6BFVkUY9LoKuMe8zwCQvTAuHBQxd6sk1MQTSKWNob3c8dTbuvitCdNpqeY",
  "key32": "5UmXc6JA4HufFYbFwbeHbQd7S3mLAhwdZitQaXPvTNtrvFUG8qF9JuxUJ3XRJkcBsGiiKugFVK1ac8XwyrDYqVC6",
  "key33": "3K36edtdxim9kgr9f4vR1SmyYZBRYxeg5Y2czRV3735YP1gJ4zzH6v925KXxV1HGiCne24XQcjSgaia5HetCT3pX",
  "key34": "2fmdBaXH3QTKWuMs4NfB7tkf8KzCtHoz2kuBvoYdqFsDRNSdWgJo41nNAkgdJMFbpF8gaFnBtvNvcQibJxmd3CcN",
  "key35": "5E1dgAVzMj4da4vrna6K4E2NVcCTPbcArZMcwUKs1LsFdqC2JneVgdYgLQqA2bV8jtYQLdrMhBYPkg2wJ9YikydZ",
  "key36": "4dPmpR28m5SJhtSFiaugeQQS8GrGX6EPQptzgGqsdsRLfVMyrcyuE7dYCZYVwVJTbLiDsfVuZDxSdNVy1RCxM3WM",
  "key37": "3MYN1xaZtqbxM8e56BjUMoRJRe2M83yDdmwkL96s6s6HkYxicb1i94oKBEcswkSwJVsAWX1i8McUFWk5TgHGra94",
  "key38": "5Bc3bJ5XPiRbrzvcbYrRcbe8oCLcSrRb2NmegMekTwg1JAivBXTHyQ87pinGV9tAcfgjzTQoaWLLQq6eym2BBXYm",
  "key39": "4ma55nAkZphdcLXJAJHzmN2uHDEBF6NKnjqcGW7oT9dTrQQPVj8jPJfwBgEjMDy9U1AyqPFTTK4HqdN6FHD2gfkY",
  "key40": "5SkGor2wZBKrFMMSPbAKhvs8zvNf628ydp3WxP5zS9iPN6KA9TSBw6Vrt4Bfn2CthtQ8h57d1JS6sRsSshWfck36",
  "key41": "4qBvKCtUyee87BaXL5BjXQRrwd6DAhMjnSo5yf55yVohcNsdiV3cx6ztbd2PAHJXVyWYt7KWwQ7sqxSGfETRjkQo",
  "key42": "2UBfe9zh2gGmBmGhvVhfbEzorYKFshSkcDUYYrTmZYSgiQtfSkHM7RoveKpzwjE6dusVFKJ1n7MMGAHxLDBphVoK",
  "key43": "5W2ktzp4vZM822EeU78XvA8kaaSNkWdfWQyuMaGjKv6ZUDeSg7DUU1Hf6uh7fCqRXQKGVHBpLQHhenqM27cEvbC9",
  "key44": "4FEtvNaxwDgacF45datwyjVVLRRpf73EwzaSGXnoXu5Wzh1LP2zDZ63aNkSCQ5tkDxTAXCNnBZGF5Fvzp8C4Vdw4",
  "key45": "4qLGpUs4vNGyNmx6Zqs9p5BNga5vuLk3ynpZdfsG7B5yuD4ktFwVKe7s8RihLHw3sH12ncRUPvrTfDJ4M1azdaju",
  "key46": "64VkENPuPP4SpkuYT2D71oKrSBor162egX5HqiXaht5rrZpERC4me1jkvpB2qsnJmeiKeckoD49ykNng3E4iw2Ty",
  "key47": "5HfG9w1aTKpjsu4Ct1yYZm3QbqTomMyZeTRpYxUKTq7uWmRyo8MAWxMF67ZmmYBdagyVF19mB7PCKzk2SDXEQEXi",
  "key48": "tGEaoK3nzmfTDZZRzqgFubbtxHZTWQEiD8krBjaRjdfEjCV4TkSPGy8wE1uugjEP3qAaDbRxf9GWshYnGcAUKFQ",
  "key49": "2Gh35wwwmVK5k9W3Bq3PqMT4JJjassxcYX9riYhFQ8NBLf58modQJbhJG2CZWW7mttVszXKzkSi4TCJzX5bEA2HV"
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
