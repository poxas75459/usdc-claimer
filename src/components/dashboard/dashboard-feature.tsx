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
    "4UUwAGKAfSNtsVwH28TFAwhpGDNUTWhp8Pp1vpsQaBtKAbJCLDYgALS4X4aZbnQf84UBg2khncXo7Q7BDu1TmHVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mqtc4UmAGcBurhMmbmnULSVJAfkYMnNYwUfA9TuB2dQi4dbySPWq5XsrfPVWBY1L8pG2Pzk2kU4mYmzEoRcdVi1",
  "key1": "5K1k6QURWs7MyZpTU5qx8KsKUsG5Zxxxv7NwVkg8UA61mTtRyBfAHdtpVxMdDiBYSvjq2YLS6z2WeF7AbX84rW82",
  "key2": "5xcV3gAVUvGNhyhEdjtwgG2PnssRVFiR8LkDgs7pMNVUipuc611r5EVARyPxAJVgz3u1G4oUiiBtffNbuka36CNM",
  "key3": "z76RjhQS6uzdgpenKRjX94C67NwktT7ExL7yP4aPbANy17jWHGXbje3e51UgrrMBqt7KjSnXnrbbt5XSXbQiz1J",
  "key4": "4TPxGLSqyeYQQR3F1m8zfS5ESnL4hhWu93XZyNuE1LHhxQtSifzyGcwC3CaG3UxXg4SH6qGj7JQkLx8Vajx27b6c",
  "key5": "3JvbRyRn68obn7VHcuU5aqS6bmPaUtTPpcRMG1uZ67dXRAAYyDiGa7FFXnwirAZK238GrNrNJbFC74Fek6zDs3uv",
  "key6": "5EY6D4rUi5VGouc6wgWrf1QBZouXghGN3Crn2vwhtTQEJh7XwTPGPGN716FuSnZVTDUZKyUkRgnfPzDZg8yCUkzj",
  "key7": "4dcJ3Bd82C3zM7kK9dn3fnNWMjSmAQuTAxMM8rna5xT4GQhttSekyaDY6SBU6qmmuM9TtszwfsM1t6Qys17A6hP1",
  "key8": "4QGycTc4G4aksupp54VFtvsaEhvkkXXAK43d753vTQ26ues4G5LoejFyoFyrYJY4EwKSNcrZGVUjZKg2Fn67qLn1",
  "key9": "SHE2NxZqSBLYHNk1oUhd6TBdQLZaZ5Stp2iFukZVeMpZvyXtQug9C3VcW5VA5EgXu1U8q2P5Thf83VUskgoNhhY",
  "key10": "5hz2HN2YFuMafSUYpJZ6YyaZaZFjTzNcTWiPvWFmXYnSnKMVoy7a4z25AVhmFZwHQVrniiJRkp55FhZteo1wvH2Z",
  "key11": "4vgkZMwZnB74TNwuyoUu5E2u6CvWqsRvU7TsbTcpqJx8yPb6JXz9cZ12XPDtmGPXk5xiqeUS4GZcTtJ3WLVWrNmP",
  "key12": "5AA1zK9oV15KthcnJyhEoLbGp6BaLfj41xuqeoDfEi8cgK3zApmctGKrAB5UHrT4oXTsUWC9D2jFck14haCbXoXd",
  "key13": "3A97QmZ1S2rZyx2S7th4miVCeY1NDpabFrZ4dFhs59k9yoS7JDkqGVgTP5b86TTGPJAsRTkMevxArENWHLgEmAdF",
  "key14": "2cu9hogKuNXhotJmwrnYWfuiuBZ4a4xRpefTUa3bzhd5Mse9vsGyZgpbwguYrVr1qZevgF4WaMBPfgRuKLuSirBS",
  "key15": "4XzZfyGrEmNQW9ydCe7mHzSLDfFrHAwJqMgWQ2nWE8rSjHfJg247HZH7WXo1Tdrrms7DosibgkYnRgBBEmyVTyV7",
  "key16": "5hiufQDUKDXyDKWWobnth5atiwYGKcYcskWHJDsrm4VmMjMyWFVsiyGaKsjZdin9wBwoFNxX1GS4V7XS7dZ13dyB",
  "key17": "wmW617VBTy91yyanARWo4jDrxNQRys7Qncd4GzyBKQW3wgKjmxF9Q7joXidUiWnpoqfxfG6YJHyXnAMEBQuZXVz",
  "key18": "4uQtWjWKLrQEr7Q4AqMHDXr3KRsiarshAFBxi4qdBLLvhQy2iAb6YzQHi8njCHiAsvBDjjradan9uaHcWLLs3xs1",
  "key19": "53oPsGuaBmEjVza8FBNPFdm5z73r7aBmTioC3Q1ZtZdPyEN5LH4RHvnKTVPKg6h9dfBKehTPUWASw8euabtpb9KQ",
  "key20": "5fEpz7tsq7LwFyEYU71BrbhCCQrWN4zGFwNHYzMzQg3i51PRVEP48uXdi49ja7czyc1atHySRTJxMGgaudenKYCX",
  "key21": "23ifSSZkwkcCLAk1KxqmNGstM7Dosmj1RicFZpJTrPEwRHERFVafdLDM8PoQ4gjwfsSXwXsc3A2bEPyhMv3r28sN",
  "key22": "CJ4S7Cevz4M63g8ot7M8G62VJF7Qy2Q1NvmYBtw8wg2rgnsroFgUZFTQkwcMxDfckynmxFbMhJUUNUNTEH4S2TZ",
  "key23": "gin6x8fYScZ7J4e45wpq2FJrhtwSwXSQg8a3SFiibj2YsGqTNQ7VZZLmiQThne74fqWuHhycXaaMjFZXpZuZ4XA",
  "key24": "35faxbfs1FGjZKu84KQ4Ju2Xo5bzudDqzQuu1AveMbygF1wtgfurBpJD39pTadio9mw4S9VUou1sRv63x2Jto3Xa",
  "key25": "47RLJ51PXntu4bqKR78YafzxQkj6wAZusACE7YRcKDC9c3m1k6QPkbBUx9EWfm9GKxM1YrTByFBA3KMC5zLsSSHR",
  "key26": "mas4cfFcAUG4NGLA2oTPfAUY3KTZrSAQbEVDBbiZRwAYkE7T4YVHtxuPypfJwCKuBRzRt9h9P7xqJhFwNmA8hwi",
  "key27": "3PG2jkjpbXHByuXQTPeqhcBza8uJnLc9ncZqaQTWVaknqbW6r3TAQmC1YAafAa4YaQHYysaqNkY9j6qdJRfyZ3Gs",
  "key28": "38MCzXEiRLenvX1VvmXqPhsPyd7ie1KLqmrsxTho5mUuvvPhurxcfQpoGm5gJAzTAZTDSFf1HfSgE4ApWztG8W27",
  "key29": "5K7zrqC97sNNR7Za7YWqgV9CX2M983RuWocpXCoX6RBNE1WSMMYFTDPRmyKrCBTnE5raDbTkDRZdnKMyBSg4u3wd",
  "key30": "4SMMhbpwyWpR7GzmKAqYUTCdkEcAWq3KvnrHRHVAR5Qubr1s3oC32twH6Dv3irg4Kv69aH63Zb7mWoNKYFsTADvo",
  "key31": "3FWYjsjpmLFpFNh6C89bEsZB5gSEDNvu9B8sjGMuQ7Gb3YAKRaJtAAq3xiQBXFFsVLuLGWqm1cVKpTNnv8RFAPzP",
  "key32": "3LPXJVkbqkG8K4p4zeKnfoC1MND1scAcWDLikQR1g1RSa7Bdz5Mo9wpvq93nLrMSXu4dN3AQQQGDy2QYwBrmzdDJ",
  "key33": "2svXAh12t6QV2GEH88FNdov8oDaDRsao3vZcmUEGixM4gyk65EtACzTtszVC29nsriUnLCX9QtDBeE58dUmG8aTi",
  "key34": "4NLw8Knn4JwJdDnSiEvQju6AhebruogpEYDug8eHtWycpP5zHYVXyMJPFXRDas7TSNSGo8qi84Fpzf5v3weUcm7w",
  "key35": "5oHDDpGQkVhxu9mR9X35DJCWau8oHTo3Tn7CcTmJMPLRJJ1ETEthMuaPiVuA3RvMs1RtVJwWor3Sm31W8qN4M1Qc",
  "key36": "4GaZreBmfUwvK1URW8FNLy78cAx17FhdKDjLm6d7uZ5J62dBaZAtybgYtFeNGDcsam1f3h9Tv5cPQajMFSc31kFA",
  "key37": "4xSUW8tv2P628sw97JVGSu6D2anZGQZbp7FYYUtGe862DdoW8VrdZrC8jZoZQg54cxqAeKQUPptB2SqgQouUEcnU",
  "key38": "2e6MxMUC3hnKdeyZMzqA29UMiDKBAcHEu64KeNyeopuwk4YAbrXUX2954755UHBhwBZw6gaWRm5o9unh8z8Yadpm",
  "key39": "4Smo2Q7upFC2aBhxBSUzjsvg7vEWABWSmKHCM8MqNftn9GwDHU5KujtVxmpRTZqe1mg6PCV8MNj8LTUXAHvSVPGL",
  "key40": "ABCZA1Tu7UZhAQRHuz5wFxVB6kdLGF7SLMnCRJhcvBABw9L7pkwU1L82NnbVqsoNoBfUDDT6pSdEyNfQ8hxMNFi",
  "key41": "62YQGynRC3d8zPjRopKqPRtpHWbEXa2G7ffwFh6wQjXxd3Xesnr2E72F9rDwiXSmLE92JBUDo1TZphfW67dDBz2v",
  "key42": "44tRZBh7pd8wpc9KFbo11DcBjz7tXUarnZn7ayfcnKHfCtNkSggeVREYdeNuk1karpbMZWgMwB5JTGKFUWFW6wdR",
  "key43": "5dyWCiqMcJZUZ3wUjRgKkwCn2J7BDuy7HyFgduuSytgiGSwYCygnSPHrN7d9krgANMCEoYs71RUJgjvXuL3A4kFt",
  "key44": "4emBjUtR6qiTMZcPC3zauUvTuaBM3dsQo5TswnJHbbshYFxmXVq7zvMwfW6FsbAC2ndAGMc7mbZkmP3hvzvTC6Y4",
  "key45": "2sS1Ps8tmLdjM6mqZ5Z2vZ8A7tFewJuEKJQcATjtqe61uUFSbtFCZNNvsXbo9a8ENANH9W6VYijBpbeMTzq7sd7J",
  "key46": "H9oNDWXtCkYZi2NMmmc8r1Ds4QAvVGWfKcoPRXCvdYFy3yEtASouyYs7ZuFBDDQKqsFydDDmkbvsK9yaw9N7sL1",
  "key47": "2hjuH7bUVC1TUTMAevCHxckGuGGZNCcdBQf8x95zTDDGqv4ZyYhiR1eJyRcotw3BHkVm3ZSdEC2QTg2YzQ8rKWLF",
  "key48": "6mJTurofxx4EYW4yWfd2oLWdjDVdCFGtdGq5u4oFjJDwjvW3GFbkj2xJxBiJokg7aQ7j6ZP3v5X8xSyTStwL6Ls"
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
