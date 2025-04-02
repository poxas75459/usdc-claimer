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
    "3YvhXNtAcAQvYVkNNfwgY5qN9aZ4PVHCT4m9Hk7kVVyTRLiM8hZs7Dc7iqj8ckYD6trPx1s5sYsWTJjah3RnMCtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmsbsBRTCw6BsQn2undU6c9hRo6ZPkcisQkmxcNgMuwW7sJ3RhdWSAMadXnvPrZQ3vSwhqrCgAFYyrQdQimEy8X",
  "key1": "4EVEXbFgXa5FZmbN6MP3WBcnjAqgcnrUNbkzKGrXwAQ1zcWqMXaLVxaxwknQUaQVag6fTth133sicdkiarmiiT2d",
  "key2": "3RvFPdp31y6JyYFNJhSAa5BjQcuY634LzKvVAh5oA8wjxa8EYkWFDbfqpGiwy31GEQrufwGgDmMswY3mMgavP7EH",
  "key3": "5EaUyBBLyrN7KDH7DT4JWZjLaega9igtGnPfLWyhxUHsHtVq7vXjEHWg1kDeno9bVGJ9KMZBdEUJcxbj3oBSsvBU",
  "key4": "uRYKX1nooRHDNYdGw4WJZr3jLzpfpkJ46tecKPRYUE272TuLQWUhPV73W33EBxjiCqoW8pY5ysR6wvrDSdyUbra",
  "key5": "53Jyxvb2KC1qg8Hrx3nG6x8WRCVVKG6Bf3DQfZkJZ4Ty2U8ZQfrVviebe1Bc97XAov7LzaZ4t24UC1bTTjjBn1Uy",
  "key6": "4JR8Djjxi8PykCVUXAxrcp4qEgktaZxF7BUX6iAFeY4vWLBwDJF4JWuosvmfvuS3DKKxsXm1eeqCF9Mw6Ju2qyz6",
  "key7": "FpEePKbX2ypphFQ7QaTotgEqW1VboDMgBEsJGqnMcd8dhWUoFePpQyVUQwVqPznNQBgHWsS2kDfTatmfhJSCVR4",
  "key8": "2WansGSPma8pU1YUxuUZjWRTiPxbYUwA3pdHhPV6jcD6msZjXGRZzwzEsFBNgF38rdmtbyFdoUYQUNeqsVT3Se51",
  "key9": "sJmWCV6g1NwwixAWodPSsRFBULFLAyzq4RpShPu3ArRw7YihzJKEtdLaWbK7KNgDYkYTEvxj1G2s6LxWqAbK59q",
  "key10": "KBvEgJtQzU74m1ZDGu2LVHg87EkuiWuTuDqm8WxeRRtdiah6Z7JQrr8e4cSxrS5Tu72tcU9hjpHVwyER2Q3iyNE",
  "key11": "3E55bgaPxDXUFWgLjtGQPn9FX78NtBkXTiEtVfL44gWJZy9zJWAfy7ASfK6VMuJCWC63rhH6spSKjYCM6p9X3u3E",
  "key12": "2L58j95jrmE9ypyFihdmvBXMB3WcBfG1G8TUfLy2kGLnYg2UYdiw5RsyrmHEgX19Bkk69SJqCBEzeEBUbGEFzx7u",
  "key13": "5pWuEkn6ANcmCq3QjfrdbpobXqtco4Sihr5PME8hqNv4hTNY4EfrjT4UeRmboYHRWZsLJdTmVQJZ6p6p33jZCEqc",
  "key14": "5kCE5GEhbdm81JW71WgCp1Lwq7pfMGxDDFDBgesTbcd1Qy28no5wsL2GHpEuN42oEP6iHWCkMousdUbVuAruHAY2",
  "key15": "4kF2SDnPC5MwKvWbhxa21zshehoCCkxxPbmdPFrNs5AoT4nV4VsFXhGQbRGXYusanpbRg7PC4afTkEkxij4ZSoM",
  "key16": "3EYsfA4KPgqUrdi9biJAiQSVgFxZwMrVXivYaFJL6co73EnhcRaNEdzLgtM6MrRu9Xz5ZJ9yX8z1AMAzXQZhosHm",
  "key17": "5Nd6jh5DZo6qHTdUZwGfNTrSXAQ2CLzTSZ9wokz9BE8KMvj3KwkyRE5a18mGHX4HaCV5kMmf4Rrr85zHUXcYhScH",
  "key18": "2uidwRsrKhJPgSEEUYd5Gk3qqAK1qiuQKaWWeUkcB5De2CTmpYKeiSS6EceuH1bB3HajTbqdRGoqpye8T7H1nPT5",
  "key19": "4Uxu7HrVLuxLgijHNEfBBk2AyD2rJLTw1M1MT8CvQbimdWYsxNMdhMypGhRNrVdnoDfDAtzphdTso4VHSfjgEyBE",
  "key20": "2LkozMHjmrmcHv79kF1JoN7tUb2taMKiD6LN3VL6oUSjbFnkStrxmAcPABHDCTfirm3qc9brf4ZsLn3Fx41rsuXX",
  "key21": "3hpuZUwWWcWzm82KtGVEjrJPDsDtSGvRGKmJZZbdTYGPhyxHSJFZnhcczEyXzVHoGtyHfaMk9CNgj43EzvUboDxd",
  "key22": "2vTJozsEuG6mxVZsKRBdqsoQCNsfHzFG7JGiHafUtxucvJ8eBtJJ9DGWuGctzBJ7Y4Wg1PMcj4XzxQy39Do4Dti",
  "key23": "44hQwmA4yhNf8GmMTKJSiT7NhxRJzddFubdbzk8qSiFDKcvz3ouLXJLoedfsTmj8VTHLyqoEYChNbFDXCdD2nan",
  "key24": "4R9DEBaqrFXrVzRgSB82YfR6v1dH2RBXXfj7Fo3HxPg3G5UnCxaq3JcuwXQwk3T984REuxp8RxsiLVKoK6B8gqjW",
  "key25": "46fpwmWktAKsJTNu3iShjebYdEgiZFxRb5wqnYZzHoV6v47nkACYeecXYwxc9odxEYfuRMUtnKPCQdmmEDnx6nVX",
  "key26": "2hLM4EDffszrCYVKgphmAfHYEhD54cWrYb3gJULr9P8MgKBunnNbxRJSvnwgbooT8pDLDG96pdKrr4ToHJPj5SN1",
  "key27": "5RW87e93qH7AF8oXtWJe3zdoK43ymhVyXPdi4Rmrt5dDJWm5YwRX8ZqEGeXhVv6sCZEGrZ8LiEtzkGAQkp1hHm22",
  "key28": "3sfcDsUHZpnHVBMkVMsQEq6ERhmcgfUSG2bRayidLCq5aa6DvHwg4Q8ABnoPAddvVP9uTi9zykffrgBsRAYdT7fx",
  "key29": "TEeuGoWtwcJAyEQR59gXppw2dBeXuR19pP9hoLakGDtsFPewXcMUu3TzdpPW2KBEdr7PTaM4fkTPCZwqkMHcCLT",
  "key30": "3CxUAhjEYZ5wvidgPHy4AYRk8E1o6f1NSdkwqaG7GfqbnGvsJD884eQ5NM4fPEiXpKR892ZCvCNkABWyLcCvaoea",
  "key31": "yv2FhfSdHnM35V3CuMc2d9g387iL4is64nPGYu5Tm3KB6Dcx3S2RMQdxCCjv2Z4N6Zs2DpHrXjuNVNTMcMmAA1v",
  "key32": "GyuQD3Z29EQ2yaWkqwYCQCRFnkCWxrGvDr2c4VKgiNEumDufH38EZaQ6bc9mKFFRNE5tqNANnLEnkWRwWQGuR9Z",
  "key33": "n1R4gREDDqH2vxWYjDWP8vNktY7kTRW7aKXh5JXbM9XpN14E7b4c2Uo9bjpsCX9WzNX1yPwERizqst1ied7fimE",
  "key34": "36sCEq8UHRtsA6abWavEgekaCfPxHJ5EXvGffTaMKjhpe3jXyr48zeY79aV74rBoCstk5hJMYEUgFCT4pmUL34fN",
  "key35": "2XaMDUiJnMFdYUVq1SdqzqAWRNgGdxiS2DGJrJHdhNC6LF8hvpJzE3iUZZ1a7DjDuoqUExFCvSYBVfeUhmKJi1vm"
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
