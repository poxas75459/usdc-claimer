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
    "3P4t4vjZXM6L9zGHGTS4b8T6Ze2zNqqYjxPkf9RBcwLN4S7G17qf6EXHskTP7vh3xu1dEHdFN4xkrjSFmV1oLcJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAJ3aKSoct2RAWHwZ9nad18gB9sgbGi1dCZ8ztKVnXCY8NXwc3APo8jYX7ycb236HQGBQ3mVXCCcLAzoxrJBSBh",
  "key1": "4eTL2qY9VG3vxei53of2RAdfNaugdeqYEY3xSwwW3WQVGNUgb1tL5Er7frsjZwgaaX8BDgk871fe6eubT1DxTc46",
  "key2": "3zRh7APszmQYkKECbednib8gDLvj6z35F679EL5cHpZqM6nzsww8FsAFbiz9snFq1RaZD9xcknqrEXRsA21aUADV",
  "key3": "vjngSRdSUvPep3ca1EppQvr7ceFvhuo6S8TnfXDkC2nnoDpQP9DB3h35twFs9Qun8Vh336gEqLWTsNCRKUyTxpz",
  "key4": "3n5xSMu9EDgaUqbM3eWWxQS9gEKQJAniKv6WGrxyMNUbkQ2JLQ1fcvg3vuNqjuyxWTL2WpLNUGyRMyJ3uXmmq2NG",
  "key5": "5Hwq17kEP76xDA1rXzYWL6aSSartciWM1DtzQ6HKXzTsJUJeYt1qhgQTU1o3Ys6HwSaT2F23XF6F6RTU6Tj5X4B5",
  "key6": "4g7hLeKqE771TrAKSwBQhN8jcbN3pQWaPgsd1Pgn3nq3j1E5AH7Qdp2jaWEpmMDGk4k9zBfaVW5TMZHNUjkq8hzD",
  "key7": "RYVKuL1Rg8xwWWknHoPMAvSxKacknPHBFbLmaRdpQfJrtuKGTKaajsPhvaTxkeoC87V174Q2z55qi2ZSDQPvszb",
  "key8": "271AHT3xCoqWyqzT9WTEX9wgjAiAv4BMNxStBDabeFqqt7aYQZP1vxPs3bkGHCAzU5QUVajzLc3iknTQvXUoxMuQ",
  "key9": "RxNEjJViX3s7xuKGeVaLrgrbAaXpgb7qBCtsYaTvGT948DsDdHAvsdqAhfEokBHV3opqwvmj4N61Q8GBgFCkvGU",
  "key10": "5DPpM81ydHV4fLJW5Nt6mweTvExvYTMt7UnP2BVEpeCzAP8H1ve9WenaMmXxfVbJWikwEknfAmuCezAJf7EmQGfF",
  "key11": "4a7eY7PuLavV3S232ekyLPVWz92iVdErz5A9uvMpusEEuJL4iybbpHgQnApBaHY4eajEPJ32Kaf3BkcEcMmZfcMg",
  "key12": "27ZkmMdcZJCYpGjoYsSc72xt1c7vmWjpPt6i433vRcZAUfEW9T4aUeGdTmUrAvh1NvAfvEskHjGPyaQoKhCR524K",
  "key13": "4FyUTY5fL4B1GLTHZpdHDAymc5PCPg41rqhzttEcY6gkDH9L79YRvMe9UKeHSLW9UARquQ2HcsFCPQKNbZN3JFka",
  "key14": "4NiDqtDM2UVqpuPJPHs6YL8deGFT5NESWPACyH6Y85Dk2wpbXjAXXxKNBRPMZHNcmmgMXaPX8K1umSktsk4td8CY",
  "key15": "8xbsj72gtWZCbKmHusrPCE4fpgBLwiyWYBkZ1nLzPU7DtbUxiyKqE1NXgzd7QoqNDMpfPq46wvY4Tz9dUbFqSyk",
  "key16": "2iHjcH1uuVGyH43Eewk7R5MhUaicuEjiPNH96pUdy4d2kg1y9Dm7NNXCUuB3YjJ2P9Pn7oPhr5AePXEeZ8mnSqG6",
  "key17": "5esqMgAhQJaHN1oRFfeQ6mrCyBQ9hxv2gmKjq9ASXKguLGqKCL9CVbwuNoGjRBXWXHU3xbDEcMPESSrGknQegJDp",
  "key18": "4uXfYEn6nC25pjXH3pAzuEpNmHXLMzzksEev3CpkpAJFKYNmSjFLbwwLjxPbd7mLP9ejm383MAsPf6Cyh2qbVhvN",
  "key19": "TQVQmXXQTh9DeqA45KmKJLgMiQdSco2DvHoFCVxbuD8LWtZSt14TDUhsRpyowuRDVXLHMSXGyyMdHMQgzcSZeRs",
  "key20": "2kQ7fGqPnXSLMKapXmAqnFm93GKoN2PcnLNocHW4FG4qvKGHrAe8moUZv6Q2zH9Kud1YR37Ffka4nNRBf9AMFiE2",
  "key21": "2JNZNpJxP8DRoSop45qUACExkNFHJvJF5ftNcx8e1gFCVSkTjTpKXLksc2JJLD8EZisdqGBX1anRtZ6oDMNAJRjM",
  "key22": "3WtPJa6pBpqjAsTzLky2wgZfsU2E4sxL7hHASKDG89oNpqfR6kRGi8BJvA7WsvMaqVtfD8qCidRXTCZTbci2Wu1m",
  "key23": "4cp1FfvsaHsh2qwWj2FZbBRUuMgYEPudLYdPMF2ZvDVgF6qRgibeAwLv7RfCm8Rw96WiGoTJRsNDDzTSXq5rMP3q",
  "key24": "2BrWEXjJAZirJEaBSt8yN59vzFgt3tNLSc8wjeB1w5WnRcZp4LcfgRmyApuVw9Vru5guwPVrzjPTsz74Ud1vBA1j",
  "key25": "2eTWvnf1eCY7dCLvkivKhCd311ty3NHiGZMq9tx4bSy9dDyobAjY3xyTPysxmXLsAR317DnNpd7YssdGobABPGfi",
  "key26": "3oY8ezARhSX2LztPh7YhAEFjoRLDHmJQfS8HBPbzWTuUhx1wtuesg4zsoEWxygzB2BC8rYsRLkLr9pNu78iQqNVA",
  "key27": "2UDFWew2Cx53p8jSpW8v3aY1miDehUndYYQJvWS5iFWaWP5a2qZ3ePbZn7L6oZDzJaApcNC28DSb6EKZKyVQVUab",
  "key28": "2MEj3g4xpoRJNoAsf6obGRpoULtfhSQPMU9AipDQ13FhtmPwfqdHh5XBqy59zCNAYYta7Rtvft9RP3X7o8fNRzud",
  "key29": "4MqXu6E3uQuPFddja3o8y632e1TqbrrxWsUarWmPheniVC1EFCFixvRSpz4sZAyfqLefiXmJ8r3LLATP59VVU3Af",
  "key30": "4SJQ3AYz1Wmjp9tE8Whje66nbwZrqpywkTEHvH5D3TywMDTzXuu7u6FpiheSkjQ9iHp3XHCWiA1gBkELWxr2tW9n",
  "key31": "3JA6Gjiis8fTcBsUDmhvGMmbSLF8CNdjTWenFBFBFVD4Kyu5yELzhMnePRAsLRPhi6HXFejonbKpyG2L8jo324nY",
  "key32": "4gjHjxKV4C37GLiBZaPtD1eXrSWXts1psRsPxpqSDZGXKuQDqYWeGpWwWN4gTgccVTQbXszjqw4EjHGTKKZCJuej",
  "key33": "5bnuyWsStvpjZuKHDfV6JfXqfgeSW2X9d48NtqpEH3uHrBdi1P2G2LZKsdCzwRivyHvuZPBTUNnfWjqKfm7AJ2Bx",
  "key34": "wx1Qe5owYXZf2KC32vBuVv3eNBhnjrSUqBvQsFyYNQ1zA6GAN7JH6bLKB7EKhM5S5v79Z7HMW8JcL4wr18J7dmr",
  "key35": "5k8Uy3LrUUdEcoQcADVm295ZWPeCZPJpEdjJgguFwkpXpp2JVqw5QfsuTFWjTsRGicu9ACzTDKM8wWZdcuzPQkhC",
  "key36": "2KhaFwYDH7iz5GRWpaPCm4C4CMLhM3nHaMiXghve9upjUoaMbTnUJeV9LvZWtzN3AFwevfAWB2CVJQp7cBTVi7e1",
  "key37": "HDzocjHkT45PzhfU69btJ3yJSw1LxVreoLUkEUCtavCUM7xpZHsSW5Ukk91Bvbcs5hSDrEjKwDLYtYMmPVvHx3X",
  "key38": "3o5CzRmPJtZ9vKgXUqqSQ3T2sJxVvJ3Qi9uNbUqFouvJnsmMYv9B7eLPyrDp85rJrnkJDgQRpDJPnRC8BBTteoki",
  "key39": "3LTAB8tSAZcPatBNLodbNivYQn88je7MHMXv2XNPAnoL2zWB7KsptQERTWtwrF66DAinfswxWwGCLvnKGSGdRHQM",
  "key40": "4wVW7VXTH861mGoSszXAXHNvELStpAZSuYAoRSfqvF6YFQHzZMU583HX5oKH1WwUT3v458ieUAkybcpJx3viSmxb",
  "key41": "5xTnWaHdDLtxHEFSs3x8xU48uc8Ad47USj1gzZrFYgUWjzTnBGsyM36wEgFr6mDcGaHdZr4ZqGTUi3i7JEHscQGJ",
  "key42": "5NstDHUHN4XDPuwCFJcuo3QzR8NjKVQQsVNKz2NbVCa2skXQmbPpTDp4zCf385FbvJK8QDyjNq9P6ehPRC9yxuKK",
  "key43": "4Azy1TK5SFRCAgfcm6gjfbRgiWbdJVL8N5cKzjQWWLRBbcsy2LzMf8ytHG1anDnZ1UPSFuXAuNCVZsjxSr3rKJmk",
  "key44": "LWqbdBq3ZypsfG5QLkEp1UoRxEmr9F48En7PUQ2K5DbN3LBFie9oBF6WXks2PSnEyWEr1X4tThBbPzTuoR63orD"
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
