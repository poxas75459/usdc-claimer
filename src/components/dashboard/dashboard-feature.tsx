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
    "5fQPpnGv6KZVS2RecDBBf9x9mvSMFVCB1kNjQumTJyMA148ZZduLVHTVYVUWvQqARckkXB85uLbuFd2nrHTvpz5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8ThgHWepLa476XJqdkL7cBVUM9oAGCRrBNqpy6Btc7tbaB1sVz2AWXiJC9YXa5MkJbfgP5eeTNqFVhWMRa71U",
  "key1": "5Qc9Js3vpUxbCA6wQmGDENyFLxpcYVY59FzaEBVz6PmYP3qYE4hZ2NBJnGxAJg8N7aDPYWDE1VRdLTPZ3qBpr3bZ",
  "key2": "36ETKuqHskX8HGLgCztkqgtksr3YfcZJau7qrRhnJ3ST7symasC2d7J4LRDi1eq4Dd2Wj3wMSWLenkN2ED1AuUXh",
  "key3": "ZHkdn9iTYFgu3ahqiQMje1yi1PeZuszroCauFatWiE3Vc1N77WZTx8rkp8EQMsRcbZhbP9pj6W4RSv1f6TrQHz5",
  "key4": "3bmJGoeBj9pcaqz2ofPDsSHbAZjvB8KHvkUJyuQ3wWqfw8Tok4YW79VUJV9by8BF4rSm8LedBxzpt8NyyLAbRfk",
  "key5": "3DCysJbDmGG5mxRtjYCPivQ1Ma9HcEQTQEP6V2qEggdinHxhVrYXkz7gxVF2aY42eYkijem8EPnKRwW5pGQM7wgi",
  "key6": "3hnzdTRpEMSQZKeFUGCLj7JJykPiMvk8pcfoWorBicLiFYGnnM9HryDGA8SCgmfgcLFQwJUEHYd1f4bFJhj2jc9n",
  "key7": "5idn2yrQ39AWVa3DGuxurRqv4VxbquW4knyscb3sZAMBVfRR4zp7pAb1VAk6t7cM2gpjWtB16pKaAtDBuQ6mLmHH",
  "key8": "54VA82pVayDGPZUJnqsM9267zAYAriXtgTK2wkYQ5RLEDDjhSSQYVpLg7Uv26177A3D8nKjiuiAWcNASc1faCjUx",
  "key9": "QgVnsWVCAiVVDrRP9bSqAoBouvdPq1pLAJhiRABQ7zCYrVri6XP5xwSM4QgZoaGzEjeejvXTsamTAJfxLFAYKum",
  "key10": "5NQcorV98oX2HKSUWSj2zj5vZvnGmpRFLc9uqUytoUnPQYV8Qa3YBuTGPqFZTP6yBrj6uSjPGVwBxJNaEW78mA8Q",
  "key11": "2QEFh2eyX8vBYgMFMvEgc2fJdrv3ggGCULJVeKbmKUD3Fbk2NkMxcU3kB9m6ENHye3mHCspML4D1KBhCoSGk9zFs",
  "key12": "2BJJxpvM7XjcTngGeY8LHnLdYGhiDqexueWaKXsEAwXHG6idyYq5ANsBBMrS9pFrPhEeVLECSYwqjWMut5hNGnpe",
  "key13": "GmE5eB7LZH9Wuwsw77Lh8CUNJf6m3pevhCEeGBgG7rRTvn5GDbNQxA8Pa1moXemMjPk3LoCsniNNFrDtD48yLYg",
  "key14": "62G71fxJYqZimQ9F91ZkhWJgdgy1TYjWFTBnyvTnnctsTYCJjUKuBWo6AHQcfBJEEDpY2SLR9fKG1zXUoCmR2RZs",
  "key15": "4kXHBoNVXKs72vAZ9b61jwzgz5zznJEbZZCPdFcVqd3JRf5agLLp3iXHkjUs9JaLn2rJ5BVVJ28SWeRwyeTsUNb1",
  "key16": "5MQc3iEXiQLgJDPMzp5VMMaFKDpkHdMkPiXijQ8aCaU9WgS6AZAcmRU6sg4yBZPVjJ1JDLmzSRjvqfreRWuTa8X8",
  "key17": "5Rasfd5wjNpa7kJH9wy5bkKLBtJMwtFo4Z7SznCNdBQi2H3911922M8PgL2RUgLBRzSVV32rvFDzz3JW4CqMs4BD",
  "key18": "ipKhaW5g57BLeV4yCjCyMk31DWoJtb4dFFjrwVBBgEDjrK7FhAUV5HbsdNvehwtZTudLGNjuLpuRojVNrHBJ9yv",
  "key19": "5Ztk881YgCJfEgAxttmEfbvaYgWjCLcAAFCy7BRnN7Dvuw5d42j4oBK6AeaanjmDT3RNkmoDxfWCh21MaXKNHsfs",
  "key20": "3BE2gQEricAV2rUoSQaiuRKPEswBgvuuczYav6unZkizveJbLYjZ9ZgihAQTtUi4Rjm5bHB2soNw1QyN1yKDsdTC",
  "key21": "5o72rpd8LkL2aK1LMkcw4JwMKM4KYFwGkgcxd5CPzUkm3AoKPVUz2SbmnGB8wmTXYSDVwYq3Yiwuhiy7vBQxevgE",
  "key22": "3jFRSJAgd61p5iLwkK8sKNr1Znm6C4tPga3ryVBWLHcGUAiwnUAVLzhr4dditWujbKJd2AtpEfJ8KgqvPQnofMgx",
  "key23": "7TQcRAhhEdqhTL3Xfz3Q22J4GzgaAjeKN4BABanbp2WxePZJRsTrguYVRaaTjeYtq9akMAmz9qRPTB28ZLcX7nX",
  "key24": "2u5RXWatx1HWPdq1USxPwJMF18cfW6YRex8Egnua1rrFhjdLfkmHSBVA87f63MqPygQDygUGR8uengmA5gkbAUxx",
  "key25": "59VCDZwLPkzAZvA4skYj68Mgkmt6pG9SG6BBCyAnEE166M2Ti4wJ8ZML7hfuLpyKZBtqDRAuAzQeh1HpzgR1aXJ7",
  "key26": "31CGF3EehyfbuMy97xvCZWqhdfTNGGeSTyR45RHw7p5NH9BpaFGWsPPwFAQBeMhApESzP75kN22F5ZdhMy3VoSgz",
  "key27": "3gmfaaDe9tLqg6JeKPiRJDiJFcEhQWxBo3FH5mw46WMNfpr1HRZmsKFbA9bLhQDknT9iF13Xor4cMsgXqycC9cxX",
  "key28": "5Ybu6wJi6DkHmT5Pb8VVasx5NiveWSmXHNTDmsTo86U5ufq4u4RcUMcPKGnX561UHpupr3fcGua6VyP515r3G4aM",
  "key29": "5J3fnDrDpwyQFWn6D1zCQ1gupLfcEDXvRfAVLKLRGw7JgXkkVkbsAwhhXTgBguAJ111cjvdSFMsEbQqjyCfG6T5A",
  "key30": "2ZQ7nDE8GHzt28Hi1eJeBxAsqPsg4qoHFiCtrFYm1a9iYBk6Agw1G4XUWYCTkL4zbJjkzqY1oGfNtpUiFxhKUCpF",
  "key31": "53firkf9aUdm4jcSYawqX9eeLhdP31w43fTzkFUGAiiNgbaojyEuXeXhhH4Q119AwfifigQk6gWzMSDb2MxGyWav",
  "key32": "4RKmecApsWYFmGy9nyFqpJxHrP3b2zfJovvKGxsv6ZCXZ6o2gbjqRUiFebpTbPxa1abzJmsFFC5X1CFd2cJYL5Mz",
  "key33": "2baiEBAGQJC4pZBXmRUu6RCmTuBpBi7HbkZaT2p8xvsbSRVJfXidMgnhFjsw6doNyEuNcTT8qMSAfEjFvfJKz8aZ",
  "key34": "2spZiUpGh2xQhZoyjmpt3t7gnCHRDcbJfK4JyEny2JgccwBo3Vk97QxrzxwViYVnHTb3HaSuRNXB6KjGnqwNctLU",
  "key35": "769DwuKg9Cb7MiuTPjUNDpLwCnBhZxfrHQjZR1HhMG47Khu4E3GECwyBjrmv599hdUSbrAgXCa4XeGhpvj3nLwB",
  "key36": "cNx1mN5tg8t2XLvBdDieyZii8tv9dnXs7RC5LxLBjT5uGkRTzmk64Vpxa4q1oGvuafZCzcJwAiSpu4GyyzqWxig",
  "key37": "3m1tmCNXan5UdDsqjdPay1X4dmLz2wvUFSa8Dxt6GLAYBVZv1H8Wt1GPif8txQFDXME6gEGTsf55xCreahg7S1JM",
  "key38": "3nKEnLroKtbuSnh5RjkfF4bhnxk9oteh9oRrwUVp1eQkJuyGNSCetThY7xn1vZxoJT5dY4PAKJaHyFDTzdqm5w4k",
  "key39": "3TA7yA52MeiDDb3utg8oW4W2cJ1v83T7WCYbNAj8vr1DQWPLXe2EkaCZRDW4rCc1ymEaM115VaRP2AYWPaVZYMor",
  "key40": "4pPiCHnvd6Wn81dd6hSrxrVUgJ4LeGPqPx5UXiwRmg4QhwWVExfmroNqr6MnGhTQMP5ZyZBhfK8qevtvC5qEcNiw",
  "key41": "3aRThgBMmALeF1KTMNhSdrir7P5YW4VrKCzk9mV5WGebDyeuJ7MwnyEHMKuoPYr7g98DtX6SgqHcQajTF1rxLxiq",
  "key42": "W2ysiLahbW7PXMa31uPgQTZfWFssqraoqVLbBKzfNny3vNPJSqTVZp5w5TNMS7jiD4iQq4SNdHdtgHeDnrmuNkf",
  "key43": "3EVwXE5iAn1eMwZSBFmB8Ev7Hg23TXYtTNBijxhTK3tkhmH4XqC3api8e3XpbWvLV1RMSkzhXpoT5rQGmLxjfLRG",
  "key44": "3giC89hXc7UKFRBUC9HVyqm2y5UfQuaxEeR5qELedv1gYExLHAY54BCRdrxhaBruKFdsFKV2ic99wBmu5D6Utkcw"
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
