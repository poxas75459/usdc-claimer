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
    "3N3UsVMPykEQkdQcoADRNuNfjjpEFWwPZYvqoYCiPnzA577sKV8Y7dXdYq3okqFPFm8Rq9RQHUMxXLLubwvupj6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wwc8ucJbyqpRdKoQHxCskKE6eta1oz2oDixJfiu8bDZxyxSyCn5QcxyYwSTtoAGQSctQmNdf6Rn6mPFNj25WKLb",
  "key1": "48cBem5FwxELdtbuhmwxAxWCAYbnNNYLP3Rse79YyNCkAFk6Pjsf2Sggo61yi6AmMcyb8uJopEM7Scch7gzb8mYk",
  "key2": "3Cx7a54BeH8ZL28oev2yebHuAHeKrvLwKXJPQTPvetsqT1hDTA6WNFNNGnWTDKAyyj2umPF2TfcDNmdfLvRQLFuX",
  "key3": "62CSCMeBKdSDHuN2Y8qTNyJyz9717rphBowYwCuXLkUYvKY9gpyTxkFedMZ8Vmbg5WqT1JAP46XMDEA6xnUuWzzt",
  "key4": "3i7q52ATpQVyR2Pp9kXQC6drxzddcmWZE8FXBxg3Y4XzLGYdGcnjN4nyWHQmmn5NqB64o2mcALShJnJdHJbowKsY",
  "key5": "PvPqzjE2HdQnRTx9up8iQ4k3C9YZmSoTXXWCnsR5DkCrTAXrqUQkhGxGKYbuvptX5SMUtCe5iP3crt3qZqatRRg",
  "key6": "4mkPj1zaJ3fvAuXkgqrAh3SrsWMU8v2gPNbLWybNuGxuQLbfJX1fEg22vh1WFQ3HxE9Wo1FGE5tjJhcxXuJ2eqy7",
  "key7": "3aNYYKB4xm2Af4gkTCoEmAP3mDVELNpkuZfpw3bniMTE5NCoWFkFxYPabPCng7eFrUcbPaXe99NMFbHKGVqw9KYH",
  "key8": "sKvTovoZkPmhHbVaVBqMxXTf92tScFdiJwzn15ducC7BwyHwGyR2f7KgniRs9KqyQiEEWwQy5iv7mkpzM2VkwfF",
  "key9": "3py8ASGDUaJ65FVZmUWwmXXjawb2RYchgv8ViLMm6GK9osidtrrS9hQAdXcikVhRB5Qrtc6nHQGyKoHDZrbi3B8y",
  "key10": "CPcGRcGbBDtTF65BFuRw7z2h5LuA1JVt678HcvPZTxbHdub6F37mJFPUf1oh8orPUceMRT9GapE8b9cLut8UeGF",
  "key11": "LwkgbA2QFHC7iExCESmEKQotghdBrLBPF1zQyizetFkC5f1c8FeBxsMcQm8BKkbNSNZkxKCQAKAbEYztoSt4Zqn",
  "key12": "58XVs2c4Fn2nTJ2Dmx9LJGgQQgjkM1YFGQqERDFVz1dT54vZFExdkRDqZ7gXp6q8h1r1RHtEEGFHiKWXehQxLBi5",
  "key13": "65ZJkeaeREyjoab7C8kpfkgSamV1BSvAgYBRTdGbPBWESETxxZ9LzrRQSdmxqMQojGYRiTnXwqv34rniuWY5exQn",
  "key14": "4cQK41gTUe1cArHgQ36kjT5NJVPN4xg23SYem76FexbX8Kfq3RP1PNBqtWmrLqBJjqqHyJUigWcRVuRVFLf6vsRi",
  "key15": "64rJ2FifoWmU4jcWK3KKQJiuBzP7XDwBw3j7LFvTMuMHBNprcsj1rzxG8jTeAu1iieoos2D2QZky5eLK1fpPKA7R",
  "key16": "4Yk8QcUzD9YMrxDv2Cc76D85cdrKoeegbjMsvx8FFsAhCTXZtXfdpjj88EHa8UzgES3Bqn4WytQijXJ5c7bQXM7Z",
  "key17": "51mBJULzFzH42EZVrL6895kW94jNLruU2N8U7JDLv2fCAcdZjMxemaefu1Axqf7Zs1JwhSpKR11zxNHJHi6fuBmx",
  "key18": "2M5HLH28K8ENwZhaeQifzLNUyEGNXF2wQux1B7wFzZ7vKsqojaBLzRFLgcXnfE5fzU5rBzqVWL3sF76ifUTFxxVe",
  "key19": "4EWJWkjNSfWMp8rjhnowDGxzz9kG366xPArnfv5LJfVRjs14WbEBxnh5F3wa14CB7YUG6ayLVKivYfVgfx5YwbYH",
  "key20": "2ChKmi7QLaiVWj68WsNZhPugi58aRGk1cj6h2HnWMUMWKXywXfwS1Rv7Q7wdMFCLuHiihetMLEmkkXea3P1GbUfq",
  "key21": "37LcGYJPUKtgWCXWAdPPSopfyP7fC5HbLgYHQLPfBtwkoiEjMUJ3t9cZ5K8oKBxE9BgiYNbq57kcz1ew1fBZsFHP",
  "key22": "3SmdzKgrqgNz2RBK6EXgPufTRFBMFx4BUoHHzdEjUs22tHkit3DsgCXD7BzEkBJeCd13NrW1r6cPJWed9dcjoRB6",
  "key23": "5LLwCRxKYrn1C3anyJ1eEx9VRnRSJWcogBX2SXT4WgpkEjv979f35rwJo72R6nnomQEK7bvwLMefse6nd5csTajf",
  "key24": "3VEXPMA9Lkn9tfvyc8Kmcg1gWpDPhpqoS66Qay2mimR4xhSVR8krJfooR2iTWmauyonrZoBMzrZJvapWpjaQPAL7",
  "key25": "4CVUuv6aWd2rNWoA6vQMF4Zh5Q5FhogBo5U4tQPWMHencrbbomBETh4752ST2Cq719ve58exdrGH617ySjqCREDG",
  "key26": "TXWLyPBCKk6EoqcidTAFneRYAKFRTB7jBNcemZ2aAZ3eAPDHQkctvsSm123U4ZcqqSZyYpSDW1WVwJ8FwcGXzAZ",
  "key27": "4sbcJZQkSXzrYcbdYSncp3FUZ5QSAkzw5HwBzyj1jz2Y8LipU2EcQZkAoVSsSGM5mKhihvMgrd6bzygn8u37uzHR",
  "key28": "4kYUSCogWLuhbNYaL56Zdg6K7CLRaNzymgtHci7tC2tbM7VJt4jxwLMbkV9ps71jkzixKc8tyMESBNXxbVoHTa1R",
  "key29": "2AgH39mmaUmfQML7vfahdzKUT3iGLYa9qUHws6ugDNgrQfeMoX3WJNw1EusfhtyodxruC3okQ8ZrsJCCu1yBc5ec",
  "key30": "bpvmQGJE476ZFKiyVV4Dcbtb1wVS79JuhiRxa7vAXSfKx4rYLSFPLpujMCATsphaV8c4tQasjQmsrF1xt7tHTv3",
  "key31": "5LL4gaL4CPYcsY6pdSucgjqSQLeYSr5iQeqzAwqn5i4W3cYrPwiF3iFkQvo6KRwaVBxVfjNtoe4wpmLjTQmhtpgc",
  "key32": "WMFu2ZahPshkT4sbpJgPqKL7ysPC9bGuDFimLupfutt2JwemCTNvGbYe9PQCpYdz3uZxY9GeHopbU7FJqY9pdwV",
  "key33": "2PKXTW4nGdjhdErXMSwxY8iDAYCeqWA8NdpqzESHgGRurkPsQwfxfj3DbN4n8kReFLxiFubX7NeDDz2c5yMr7yaE",
  "key34": "MbEhUc8rp3VUZmWX3o1jSvfcARCgpcD87z2umjYp2uAUjee56QRbiD9CQ8BFLCJcX8KgNruPjCoydheaxPw6r9M",
  "key35": "5XQwggLYQTJ4EPH9RX1PKiTYyYCiVffsg9juYXmyznV8YS4UVZLcdGtHwBbaRraMH6ZxN8QsyD1fUQNLCTfX53aw",
  "key36": "5EBCvLS2XLTWnDxkzo8RZjkc7DTiJLWJ2hNTVtVAQ9qxDdrHEF5Yuo54i12veNzSUbaTt7t7S489w3Z445atGNKj",
  "key37": "Zvj3M71JJTHTdEJ1Fxz8S9KgySZnNarMXVsodJEF2pNrBn4PV7Jqvi7kFP364uVUcqzUQ4WbspUC5TeakaeKWYT",
  "key38": "3DEC9hfoM5dA4ZT5FbN9dnBL3QyP5t7pdenkXAZv5YAJvFzkyCmeki64twtajXjUmJcqaJhXxKctdQSbDPV8eprB",
  "key39": "3kgq4sJqtL37Z9oJ6mt5bGwqrcRA5upwCL22hAxKpNmgTHzHkGauYrSXppuUktd9h54wGqqsqCYGQmdhMWTfYxgS",
  "key40": "4yhKU7JqDkgsmfxonXeCbaC9sECEW3oBXR7y23K6gt9TBADHvs9JdUp5wUQEWPeao1DynF3yshzXGFDE1Xy64RDb",
  "key41": "5KKotWEN412oybofKDNmHXCn8CW3FNjPPLg2jWjk4BGqtn7KMW69WSDCqnx9Psp5iH39t2mSX7B8sDJyWLL6jK2V",
  "key42": "5ZJf7PWkBRWBNYnrC6v5icG17VEvaYDakFke1xQYVQLMHPkBNfGfoMFtLutJSGpn2dyzFQC7QruQU7b1eZr6RAxM",
  "key43": "4prcUCB6Eyn7VFJ4SMBik5krqx5TtvgTTARcLMQdAnAzB4M7q3XMvS5dop4pLmYRKEJXWX3U7arKpzeYaHxZ4gyS"
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
