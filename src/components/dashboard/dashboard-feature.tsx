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
    "2nPbwJvfy2qrzVwj6Xaw4ukDi9j1gCSoceL6WMnAp877jt3mM7jZMGcSVbyVYRJctSdKXARLs58HhimSYBU4p9hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQVZLzJNX37WeVAUv5zSjhagWWcwrSc1RENdLPme7NxdRYUC9YUSkxn5jxwyYajU6bytXMZBas67UkE5xPP7VhM",
  "key1": "vFCjP2QLvk3Mhi2io1h1uC3uEyjq2KorfcM9azuuK9k4PCfJmbva2eNKsCEGcUW9VzS1hH7imQxj8NSXzPaJ8b4",
  "key2": "26GmxuAUgE9ea7fCTxiaa38sXhjLUF14BFGo8e1zSadbfp4nkvvAJRpJAYzyTqnqje3XcVoUZ3NBuBeNwW3bh1nZ",
  "key3": "4cJ2PizADfUoSJswAK1sWtEULY6p6r6oy2L66JRuNVALvunkPYgmUUWHAbQArWCD6uBQnjQAgGBvsADoHpjNFZ7i",
  "key4": "2Vz1u78CRJdbB5Db7wRtDCbAMyFJydATBWHnVynq1vDfTnZagCqwdUFJ4GgGytwsRzcFJzcRvsMyNj7ZnQhc1nzJ",
  "key5": "4k4p5ie5wwmyTmUTzij6KwCLiez8S6dsjYjKuLWj7U4ngBv9BBZgzMUnisp1uibp3v3kyaK3L2WKXPwzkpo4MCrs",
  "key6": "55WwoVaERhbQWWfiviLDnFy9p1kfwuxtGYr8tkSJpDK4eTr3q8pNLuntEnym3C882AxbrKQytGzStDZ71rS3RGHc",
  "key7": "3XLHmc7isgDN4Tyu7DYifHzUErkFpVLviFZcJejTDnGP2GroT9dZCsiQQg2eChiLsJiVLwXa9W8TZaSnntXf2DCp",
  "key8": "b1TmMUx3P5SP6QYVb87sMCFXCLVcEw1KhTkNez9MndBL1KedN8qWQiRDCUdpCmhCpvgH2rsgX5s2hWhZFTRte8s",
  "key9": "4GqoJcnXhCoL5YbKnbyVMSHSQKLCHSywf9dgzfVv9mK3fJymNdnJjodxiSfobLVnpe4ymZqRreF18hUVVkXRHU2C",
  "key10": "2ukPrq23kXLo53fbwCKCSJPvsodnnof1WLpyRYUxbLh16g9wTqkHdkGNVezv1fgfDR95a75Q5n7Qj3DYLRRmngpm",
  "key11": "4eQFZHc9wJfuGphMwMWgfLFjUXccqXwvuBid7aLLfVo8GXP5DZ5TM7TZi3nSZFTh1JEMzatoWwfTSFh4uYnB47cG",
  "key12": "5JqfW4sArzrjFrPqpynbJD8gjyb86EvvEUsa8c8Syx8r2pRrygmPxZ9DskWPcxkWqH3kwLihy9joXxTcUXF7TKYe",
  "key13": "VmQYCXgzXz4Xxuf1xARNDFqUr939mxrYjghedNYVFR6AYQd6MsGAY49sVrRwQSwkfoBteatzQZG6z7cggfxV4bA",
  "key14": "62ei8brmi7QWsi36LzwbtPLbeNs6sXSctuPWtNeRqheTX5gvJSozfBE7Q7z1D4CwdJ5gZ5PAYKVG4vgbWsNWRVYm",
  "key15": "2SgEFcXkQGSxr5v9QinsHTUwbufGPh9esznS53gNe8yi6rRB26t8e7NpVwNLRV5jEU66qt6hcgWWWHj4GziqJZ4Y",
  "key16": "5zCeUw16hAxkQswiHeBxGFbS9ngSEqdyMQoNdmwBP35biTDos4kJNfWPbyiMtyT8sq7jggCkM9AQSBHfm1jKyQwA",
  "key17": "5e4jiAQYQz9iXFPbVHaEKAEanFeWwewhdAcBX4FFeVrmcLyJhtZ2tcjxwCWm3e7JNgAXgMgx9pdU1oyW9vzv34HR",
  "key18": "4V2RovY3DvKZyFhEcfoeSrBRmcbD74sruNVtdUTfYFj6nCbkEJoBabD7ihdcbBLXXdAC71fVV9NRYCnYpSSRkj4E",
  "key19": "5w1yEJNyukJDGK4ZDoYBr6Zj21StaYpJcEMBvs8HNn7XLQr9t4VZHeAPMGbXhDRrVxtjhse5xQdCstPrK4CNPN8z",
  "key20": "4KLGv9cGog6BBDP43hMMSywp6r5xkfyMNDbxZhuejTctBkT9HH3Kcy2RXeboHBEjr1RfrNwz66fbU3wNLoJFddWv",
  "key21": "3peAT1nXeLz2vxM5eVZTLRH11vSuxcyKrp8JRh2rafS649P4RWQz4g4aY6ua661uHFhFkF7ZBHfLDFBtg79Vs1WE",
  "key22": "53WJMBu7CTqcEyngrY79qiUGiA5u3NAJvGFrmjicjJb67nYYHkeLrc3JWyk8Fc3Cep69zggopTUmbeEdnqNaLnqg",
  "key23": "4FM5bRpsrdkgYGFnPbad3NKtZS3NsAkhjK6tZF3V8KZqr73QUfeP3Z2E8TZ49RDsJuWJPoys7QQ4zyF9spcv9iUE",
  "key24": "4x9CX348hhQdVThidTZKTDuKNZeZyw3ewzpdMtGjgFscbuVLcFuPLr7HdRMCUuGPj7MiZtpieBpU9aiGgt8dZg3o",
  "key25": "efqAdNYz4khnNUHWK8Sv9JVkEWXNLuZ2W4iMGLtc4TKEsNoB74ZM3M8p25qUQMTcn9wSzSisRioSdXQDtMaCec8",
  "key26": "3vP4ZRmAbtKRHMpBYLit4p9o5o3YJD53Wz7UpWKjSs8JeUwu1JV17hRoDQ5qNBe7yZWvwBhLaeYL4L1HyC9edUqq",
  "key27": "jxTM3XhKV2Su4vJs4xLK5wtLqAVCE3EyTndPSXYQxSxF4QFG3S1e5KEotZWBRdmKnT8DSaroHULgCvzMnAVn4mC",
  "key28": "37zZjHvEubeqrzQPzVficQ3Mpu12FwGHBWxDg7C9Lg6ex71twLgTJ6ovytvaebieofKMuxG6CYecG85ggMQnqE7w",
  "key29": "4Qu5s8RuEKFSxXDiMNUGR6ERKXj4KA16NzjjXrqX9EkkcieiVNG9c6ZyEyRF6xNnANiFjcV6C94kN9b69Vzy8o5H",
  "key30": "2s3QwrqpiL6WZdZoEgxhcNiBo6GyDsT8aVqd2hU7rEqHSCEWDQnZnCi5DFu2bUrtzF9ZMwoe1CiJkjFgnEKXNv6P",
  "key31": "527g2nNYvVjASmsdqLAmtWzMDLBTKN42Cz95kro3zt9mUW5BvrQZTck3eLdNiwu4ATYJEzHVWvxDMAJ356jXe9PS",
  "key32": "3ZtnT8H1Dq84EZwmhG1DYc3FNP6BnVxfiQYcs9Ev6paokTsgzyoXQPK9NBqqY7nGB8pdDNeDzw7kgeAgDqt9KbQS",
  "key33": "4dk4PHkmg76uwnLkQ7Rohx3M9D6QVMp3DR8W6VLY1rySzX7boeutRwEDsWPC5rTszL46PDAQjK5k6dRnJSgp9H1P",
  "key34": "2pmHQ6s8U2gnds4gm1gRgLqG4sjAyUERmhxEvTnB99t9YJM8r13yjFQqdrPRxcdqwJFbyrepDgHgZbQSfvs92K4u",
  "key35": "36uGi49Ld8tGHy2aijjt8NtXDpYied6eMotQvmLpnVpB7TLhqrQFsqgsU6UGrt3HGTL6muQ1AsL6skdFG45Eaoov",
  "key36": "5AsQJr4owoEkpK9BULz7Y4QFGUz3Xy3nZqq5Ewo9B3CEXPDT4BzDqv5A4RTShGJcRYbncvXZyomCUaHZDqB6bhsx",
  "key37": "5QcQPDm9hSR3Dz97BpimpW7AMjreUsWmCHMFKHSFoBwxACvimRXe7qyn6PudYN3AzuTjfiRhNT4wP69oNXn4DvCv",
  "key38": "2hkLhrgox6dgWsHno6e4r79CfduTwDZax6HtAmoASRYrEFZaPxdiZuHSvDTMasKdgJ5dDypfeCitE3Bgpj5K4yKW",
  "key39": "uGAita4ZXhtiRNSvC8Yzz8g6KyiXjwYbFZdYmaqbikSfCopUKWrcS9PDLPzSPz4ACWkBr5cLqxXuqiSpk7RfphX",
  "key40": "5AoN941e1vsLVw8S8Xge56yXTCWTenzPEbAnxSzRkb7BhTpcXDQW5WpWuthqd6uAZj4JdqfjXcA19jyFTErPbGUf",
  "key41": "iStdKabB3VfPWcedDunsB8T9SLdexzAiReM2vDvZP1nz9vnrFpGRVCrE1Q4i2Sf6uddPmDyWHqii7juqocc1x1S",
  "key42": "357MuybMZDmugc2na9aYzeMLmV3aTzsBrHQuwmWPy4jGhM9aJ5ha8TVgcbgoRQQSmfJ9AwAb3agK67V89LrsneNY",
  "key43": "RKTLm5t9B5p42bmG1rjR2eee1PnXaB5pLouiWgnB2CPtgJb55KWUkCtk3x9wyL4uoNmwCZHtsHstarUkpAVPkVB",
  "key44": "3CRNoEh532jspqdoRV8Ey9Yv2PovAPUikS7ZWNqBVYUiQbH9qtfQdiEGHSMzJpYAnnFMCWQ2D7yWjPxYYtCo1QZU"
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
