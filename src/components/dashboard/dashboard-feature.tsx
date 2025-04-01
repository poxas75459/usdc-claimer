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
    "4SDX9XCeRggrjcANHwf7V3KhVv6juhRkPkSAxTF2UitdKxHDunM2dDRabok7aKVGeVNy5VhjF1ABgxGv5J5MP7m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LS1bUSvJqDCNBVK3cGvMBhX6kAB5RAYCephoL8F9B3Tzr7Be88CcFtpDBTdktAiG96XvycM43k52EXLqwnUTGAr",
  "key1": "5FVcvoNB5GcoGKQ33nAtV1U7oiAq1MUfsyr7pPBN3UNtZ596B4LCFXtkRS4qk41RS6qxYVKrRvqweDWsNQ9tWQZN",
  "key2": "KwaMJci3N861ihCJj3XetiD4qV58R15EEvZpPsVmMwwyPwmpknxkth3oGhNTghtXA87YpNYA71AsDVLaLTNSbyc",
  "key3": "5sF3EEPByko11nfBSGUB3u5dQFqw5QosaMgDCTxtQS8es5nGkt1zj15VdHCL2Ag3PnfFeT5XD7iFkWmYigFxpFtF",
  "key4": "568bf5ToVL77wuQ6GpGETFQkJaZ8FLCs89bmdnyGWEupZLXzd4DvYRV1HF8Q8tWG1BjyxgGwJ2JtLNF1q9qmL5f4",
  "key5": "1KbfLx8Hgy8qceknyDcVZxtQ2qA4VJz7dA4UEZdWM8iZL94swBDqabx8EjmsCtbASmDU74kc6KiRMEJxxsmqeUm",
  "key6": "2p6fNvDRzEiJiXGPe6smn2EiCddECWSsy9evBHvN1f8MFRw1vJjt67W8KVv1En4n6CKNovNNg933kCxT6xh1gSqD",
  "key7": "3w5oArjcH34LsLAVss39ex1uEEqLSbMXrHnAq6MXY33pZnJTqXt1nCWrcEuabxdtRv2Pn8jTpZoHoyCnrUN73hRW",
  "key8": "QkniSRxsxZeLJ6EsFuqNLg258WfXQkTrYZgcf71KDatQ46mPWUDguekzGHeh84vhwogV9eELWyQaqV3Pz1w2sgT",
  "key9": "VniHTtXpkatsJPb8wwu2CWxZrgNnBcXssPD7woP3SNgGdUg5w9vZToqMkoZb7vgBFwTedhm9bo21x9JMjfxkwqw",
  "key10": "513FE2b5DFpdjEFsrvqzPqaetLeWV73QTZ5aYytVQDHeLSzbcPNvmFQYQcZ5G4cqasyYu9YU1Cs8VdFzsz5y1uSH",
  "key11": "4H3xw76zPkMC2YubGsPpCTu6ggzv2LeEtapeQ7yzxgBayRWFJ9hneXRNuC5A1YvAwYgyyH98cN6Mf5VcZFQ2Zva1",
  "key12": "3X38XkFgQWvFaZpDB6mkQrwX3xHyKGjwDJxXXcA6yAFnoiVmG2fvhvG3tKYvUkUA5eg5ZF6ncoyuEttgedHRkY3i",
  "key13": "4XpjUZeJxSTqsJDSQ1LWCsvfAMDfWkpkfdKPSkQd9aosW44TBbx6MjkY3Mv8BVP8hSFeityxGWWh49546NaZqgbu",
  "key14": "2W6DRM5VxxGeXGTMLhiat14jbGpigZKiqd2uJ8bjvykxqMiasLVbyp2LxNi1s4Vbw9jchfhd1W3Q3AjN5hXThGFQ",
  "key15": "59fcrym9QJbzCKj8pZpB7MoAn1RsY5K8hMvaeSZLwnUSiFRdUtdFyymk17BTNieBMYhRygVhZQSKXCkSVbXkSFAA",
  "key16": "3Z3YJrHxQfnYzL1NATcCQRpEMpADeh7pABokHpoEkNpXpPLvcj2rKXNjAo79jguReBn3tdocUpNzYvyJ71MvkkYS",
  "key17": "bneFULCSkVtc1giJSWkst3rpZMEyXZxBPRFmZbKbNdE7x8ALBhkewfZcYTRTj9AwBWd17SZSvHzPZX14BporWp1",
  "key18": "3S6FdDTasgDSpsAKYW7mNiQtLoGe1LDzoKD56LcWmSTMjqWZxhhAEmytAeRz2bZzg61A2ocCXdbtw3nZrYDDHHxG",
  "key19": "2nupkUmVoRXu5h9YNGbiKxLcXKBewx2twAH99x1s79rfNxzUr3wy6GKKuZnKbMhLjdG9B4N9QZte1ndM65cpjto8",
  "key20": "2dY8Xdk38xXWGniVqiDQJcgu9CTs1qWchdpz1kggxkBjcRQHtyMoD7vH4u3Lop97SMPkdLVo94dKg5uH84edwssM",
  "key21": "3RySwekuEc7xzDwEjBe11rWy2gB1AVTR2N5MvTwcTmmuU5Utx1WeuKHawB7NtiDB6GXc1segQZuJhPNe8hSTSoCM",
  "key22": "4W6LL2ZutYcsCKn9uBeCVLCTm4xoZ2ewMdxcR8Jwv1yD3tPyahE9gAxBP1RcHpq727PeNuprF6S4bz23uXPWASvp",
  "key23": "5M68mXENy45LSFXFkZdNcXNJfQizihkMzJYKnNriPRQTuQBXSWFkH5g9tA8Sw5nPJRg4zWxRg2NGJL4VocbQWW4m",
  "key24": "4aGtDx5rCzG546mYY4DKpaFSDmopb8wMAxizvsUtSZEqjoQEDVWM8sDhEhUbTkmRfbxck8SF6PwZLbVc6dNsLVMu",
  "key25": "4RnXm82kzFqa1eqsqgnAgfVjarrh6mF3LtFaknrypNQ8eiBs99JJEVjW7UfoYoU8thEVSBMQECns7QnXM6jo45Fo",
  "key26": "4JbRiuZ8L35wBHMEZjDoTCkdMRHgt5SDe13pzxXe1STBvERaieWyh9x9ASYd7roZhwtL5fcY6LWKi3vxybkLbkzA",
  "key27": "5jme6ZCf9ozsEbCo2HNJ3CP5UHtDAQHU4murd1NdKtcY5L8k9Rm4eZ4HmVE8mECSaakQfeDsBayWU8mBFY62ytWy",
  "key28": "3P3beWP7HT8fYjhQTZzJqZx3LFroHY7rN5yU1BefRYdxpAZ3msxF3M9Dbv6eEUYkxe1Jf4oxGrSDqMPJk9Y8p97X",
  "key29": "5GCAGiWmbCWmziMvKwS7tXauDAe51wjpXPE6ufrAgxwZyKRU8ARAzNon5SqqTydXzPRM7YKhiQbc2Y3XCuCbL479",
  "key30": "2sZqf691GnSWPTEipRB9NC6iScNVRhLdfCBrAXLg4Ty6MQ1d1Fz9DfidrwZKMFfLd8zG14jqsS8pLWE5SosrPZhy",
  "key31": "RFVbYZM8xGdfcsyMygUjomS8BkVGAsMExwMu1jqA3EveFsbZkbyRj5RsgpYGHxPajDenfdLRNWvPjEnBdj9JH2B",
  "key32": "5sj2XhZK36qa7fHpW8SoAQFFtnFEUDUwFLEomLGPeMh4fTYyM1NWHworsCpThUH5akr2EekajXtFuFjHL5cyC2ph",
  "key33": "mMgXvoX1UUHQQVNrpwcZx3ues2DjywJAkhDxTcPBU6NZ9AeSYXyst8QKHbuXeUvsCpLA7Gwcna5N22EV7xX9Pw6",
  "key34": "3GQSjJbFnhyfw2Eab1BMqiEsfJViTqi9nTczXx7WFDmr63rCvqa4mpUEH84sB1aXYvuWuixfgJ7X6HvgEwvKne2G",
  "key35": "4GPVAvNAWrp11vLtUMhbkBKkKLtBr31zMMmJqEHcBmwVzRXowxWF4wpzyTXWVaVxaPZ71zAkMJ2VPSNNYx1Y5LTz",
  "key36": "AKxkM8S9MQmRBTu9LpqxQY6x3nWyUfsWJRxT7VfHUwf546jKYZG5JiafY88qDtY2YWYGMw1vimuzaqF8gLiaTXE",
  "key37": "5bFj43gSwdCKLiLMMVqpwMaF9wPtRnhaAEYUbmE7eS5brRC6Ayj3L66FAGrTF5PoK2tA7phuq2DaTeHJBS4NTafa"
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
