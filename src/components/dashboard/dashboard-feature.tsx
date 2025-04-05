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
    "3i1m1B4fn4SjhQ7PUdhJM6vDu8XBxR8aMa5NwmJzircTdDmtE1qE9EjkyRobANWPvShTvcW29srU8tbRvZVcz8xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2V4vx4DiBxNbhHy9qVRjoKt7CFUvFgFJpbz7dd37uL48dVTSqMULXtwKZKgujQoYNgwpcS4bcCnftUUaKBfbyL",
  "key1": "RaqGS9CChVozGmtyfZ9pa7LcuPiVMYEUkCTw6oC2etARGZ9RAdgVEMzY9VUwsUJJrr7Eh7Tvv2XxKNm1PmzX3w1",
  "key2": "3ykNfNjkLjpi5TbH3u7MqCF2aeE2SeimN5hX3nWoF8Jrd6ETjSLpBBAmKaCC9RT9AMm5eqrkr2aLwwYcU6EfCiBM",
  "key3": "5SkuEpGFqZ6SDYxm1FenR3puKofPZXYzYcHY4E2SvLxFui2S1N2NSYPbRsS6kqgMU7mxyP2Tvp62JVPqQwqcTyKP",
  "key4": "4HY5nQ8eLhGZVbwYKpDAk2rsEdNNLktmTF3LX55zmrE9D58gMQMaYwLWLxCay6KfmCrppvUFNdyj16GQTGNEFnfH",
  "key5": "2NYZ2wHYu9ssZuZSySGbJquUGbcQ5ECShMY5GYDfgwx4sA6toXFzybCG3ckrTovcVYVz5qWnoSc2FXwzVhRfRxcT",
  "key6": "4Nf6pJCAjXCgc5HRWeCiYhdNLvGMK14pr1UbAoMeEfDWrwxWGc5b4azkKgD2SkAsvsGsNMcUWyPfa6L6rgEohHsT",
  "key7": "3s8hT2ifyuUQRU49XWrrPTPDHDAHnqdSNqhSYcCb53VSWG5nRR9KXRk4iLSsAaz5ZLQuHxVjviz8zgSw6bwNN5Eq",
  "key8": "2Y3wQdUko2mbpVkK26Ni4AY6TjqmoURaiPwS3Ynnfv9ss18A5QACcSdewa9QTe4NLQpMszYSwLYDHp8RHed4iY7n",
  "key9": "4atEVfwRmvTttBUqeE3i3NN8h8tkxcB7RKaLBAmXnTJDXWkPH5LaE58SpvvBuXi8crhhFohy2JDWRTgVRtYbwWL9",
  "key10": "47Q2ropma8uAHU2QamyYpse8DTaVESVSuZCN6KmjjuhztwVTduTJsvDZphZAF1g1E5grZpEsSJoXQQay8ZREejjG",
  "key11": "4PcofB8FWgufRAyscvmpq1RSsQDEYSeQG7MgBsrWuuqNPy6wj4cV5C2SfzDweb28Br3jUgiapR6oZYrsr5kwzncc",
  "key12": "5SxmmszqATLba1Dmt1sN4gUPykYpxEKBMtuwZ8dpvbkLxSdF4kwZsZHHH4FcnKrty6zWuFoHAUcUkeAe1cbQwWn2",
  "key13": "2kHndkV369rMh6tTxggTACnqHSioE5fepYthZjGhG7KoQNfjLuesQ6bCDeSWhYwzDA2GSrQqRsNkcA2YAXZvKwso",
  "key14": "3Ke884NnLNUxTkm79VVAahqjYaTWVq7BHhhGTGzqHGCqJhvQXZMexyrY3vCCEHhvNhBJ6cdya6Nc8Ld6cP3emd3s",
  "key15": "63ZmdrSG9aW5W9aS33BJFDNcu4JRU8EQL2WRBNtTzCv6fk5k5ARoBURrszNLUhNXWfXhAdeFAXbMdNsmuApfWiGM",
  "key16": "3UKtTFwPaz5WGbJXrpbmTaWdBddqL3C31rqpfygD5HzM6warkmH1UGPfmr9RfdaEJuWhdgythXSQdjUhkSXDrvWc",
  "key17": "22dbNJ54paScaqC6fGBbKvN1ZcPZTriHK9WCuM8GWq2HSVbThqqqC9DdM9cQiTSAmh6VW8jdCVbbJJsdyurJkLw5",
  "key18": "2X3VM7NbnQecawgcPLv95h2B2BMPYNR6kdXBx4Qd7gRPBSKKqcJp4i9XKLTqCJJEkejk2kZPYCq9gRy2T1utzkXs",
  "key19": "YWp1agiZu4GkungptJj1PWJak6728AVUVtGmsgV6cUJUyNnMZCvvHytECGBVm3tCCg3qvowZqJkKKvHToyCJuMG",
  "key20": "2MGQDUieR9S7FRSAaYXNq3U8KxthSmK63LuDg2yqmVGP37Wbb7PYEi8SLUnFdrKNQL5nDgP2TqoE3vzJLqABzXBN",
  "key21": "4kCLrydHvJsHSFfCRW7SZvFbwhXTaHrn5cAcbBzKcphwLekfHxwRUHF3ou8QeS2U6AmL5oZhsDV2QR7529DZkDbV",
  "key22": "4xP48En4NEEvwTAzbxYeXdP4RoA7Sz4tCqcYMAFgNfYfYCamxDV252xZs9ZYuSWFWHDaMiyvR7h2UhgiVUfHMZqM",
  "key23": "3a5P3RB9aQYUtWPtS5H8xXXCwrTn3aLNZ3XoJNsXQdHBbdE5HHhDyd8ambfecsq2X89vhKimpm1iqXLao4gktkbm",
  "key24": "2B4Jn8SqgiF8eQay6YrL1dP6NFL2JsS2s3uSNuNJXZfD7F3p62AENWkvyT4qAfHnvuQoMQU6oXtU65EodPWLKZ4A",
  "key25": "3gFxkPVdsx6todS2b3dsUzLkmXiwBTFkS7BuddNE5uiPMJcde9N9bxzwkBsqM8VXVAAotfC4mjzroGYmw3MTvTUh",
  "key26": "PFWHmyLU5xCYSTgrq7mMDR7x8CgPrsrm2JZVQohXCHUmV1haxKeFxC8PHwfRuuY9N8XUVVE7hTtx5o7hLdA16FY",
  "key27": "3gJidexBJ7MXRdWtTfFjKEFfodRDkRZXpzmGZsZf6tTZ7wKHBDZPCB6CWNvuisH249iA9tYmRFf8KJJ2munMM6r4",
  "key28": "3Nmvq2cGnBC8NZ31LsoE7nMooXayxtE9NC8hUPNBR2bxFe1YTqs277AApSuSRQS1kNQg2sWVderDLLfAL5LuDsN3",
  "key29": "2DyoutvovGtVBmu13AmPx5k7q6fZ4tJzQxj6K97XZnVHwh8bAKdNRjfx5Urn1hKYdAs2ABXDZL6xQJYvZHqMSCBh",
  "key30": "4zDMWtSZ4DAQrw4SRKsDiKsrxcwd9iYKCUDrvXQY9aXo3dL9uegrotjKWtSybQSzECVNNhjk272GPQPsUW6oKQY8",
  "key31": "44m35YLJx5aJjSsqQJomyck9p3Kah1eQny9R1SAbnj4gLyrVF42YESESWHoSwvFyfKr8AwZ4m7hWUBPYDUKfycYe",
  "key32": "4YPftzejAzkJiFfU7mTGobg5gTfzHixf5rC2pg5F5xpY7iqpZ2H4BXzKNiPYGff2BAsTSYEzPAEANngdfLD8wrTW",
  "key33": "VPiX8zr9aEG4oyCSVcLEWBVFL4QseCm8smFJCf8bue74bSFmf4zGkFMRWJWyRED6aJzAzW9cn9NxPnUhFF8XxbN",
  "key34": "psZDALuAynkwzC5L6yw4QkJRbrAPhJ7AAgDKLG8gfH7fhZ2HyzYRLuFNcgGZFJzfA7oF3ynjsspHPDVWAZ8n6bM",
  "key35": "4QVcHhZdfBDTDfePAByJ22wdgFtaARcDTSdjjxcuRP6QtnbST6YJnU2ky9VyccAmZhKEbCyAn7K3S8W8sbyasXZN",
  "key36": "3gAACXus1PiCVxv42tj1xBrsCssdBRaVQjRwKDVKRtvcEEo2SZQUvhAsUJL8AhBGXth1MJv4HbgRZYqRcJjC3CQf",
  "key37": "5jra8BTCWW1eVRvTLo18dqkjC8og2ZoKtbuBJ4T5RaoVbSQEhPJUmKjXmEpa4PsQvNuhJ6Fvq7zpY89EJW3HKX3v",
  "key38": "25PxDYQv8K3A9zhDgM6Uy2YHnb1KkAWsQWF2BGBACpyjU8Y3rM3r98AwBJoa8tL7froJtdSkpp7qJcnBZf6KBFaa",
  "key39": "5ox9RrLArMpwRGFEjW7UWW4MmMm3yGRFYxRFGKeSS4g93SUqsuZELLF4nbadYytESn2EGD2xXtwvaQGyy4sFQR82",
  "key40": "5c2xyBSf96yNd7pus3RxRj2nD58ozgrYMaoW7JtibQFzzWgbmGb58QYxzxFTWSkP1jGdjpJtbanvwWzqv7d5WNJa",
  "key41": "4cABDbFJ6o3wd4BevhdvE1dQLeTDwmNsJQaVrEDcmCimkVdAoZhSu6g76UeS5covHRv72e6AdSw2vDeuGhBb8ZDw",
  "key42": "3Pu8zp4KxEnMJso2CHkY3h4VuBrbLXWnHV7TL9XBure2k5haiteFoXAqnLM1Edf7DZkgsuCvCabFuorLFoeGZZoS",
  "key43": "4DrBPK6dtYERj3hzkCt5ZFjM7gxoj9V4axAbe1LKMtnhgQ7NmgN5nhjv5nyfHFQ7AZZWLoB4ViPv48Q6NFEyiJe8"
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
