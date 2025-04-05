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
    "r7AXZC9Vzy2XgKAnrZSAYhmxkNBLECgtmV7rcgKeM5Rd6iZncdXKHoR2Q3cGBygrigBfkTFwZ71c1VAMkFE7qD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YS1Pwcwvdr6FmCixZqgfJnBozXxvj49e5MFG8VMfJ5vNCPt2yRCMtrJivVYxxJk3vpk3T2KWQAJgBMq25kaysib",
  "key1": "3wYyX9ETaF4qHwMrg9X9Pa7dyJUVLjrY2iE2Lp1hn3q4e6FaeAzpk7RPeXay2pKukxFrTWcPTxyMaEjfe7snY5Co",
  "key2": "2KmitCtP1T9J3PxPaSnMXQLgeLmRHng4h5V1A6wwRJyGkC6hjysGEDZSECtGWqtmmG4WezjZ4z4rcbsZiTrYUqe7",
  "key3": "3jWBzyAsrJJttg45S7wiuCTg9heQz8B5ENi5Bd8osgPmPTMFEsh4WQ5cM9ShCtHr2PzFTT9rH4kzsTtKRbVSWRYP",
  "key4": "5xc3jGxydgm5YdEzcgA3PYdoNNDHaVTP1pxPdUy6Z9XfcwdjMhuDDAYevoEm4d1znvAmXC98Qgvqte7K7XNn5wxP",
  "key5": "5YXHFSoHzHLFZapPKz2bbcbFd4t39F3p9LXb1VYy8QJU94saz48AUMLeRfBdJLZ9cyvF6tATGWje34Tm2zWQ6dBs",
  "key6": "TQunQj7F1zi8PyAcfwQ3BcmJJoHAQbLr3zKhAegeQNuasGD4vKkGwuCjbbADeLXwrzJTUjQDYMRYbisKjc9ue4Y",
  "key7": "G3U9v37AztB5JvT2MVFFrUbxEuKV3p8RvDVcWcZ2HorPVhXivuEAs18DqdU9nucRJqVdxhXgcMyx9hkMZPeZXTG",
  "key8": "4Lizitd2wrGry37ny5TFGFtx2uPZ8EMNmQxibGWLmZXZZMtCh9HNBZhrDUX73tHUhYKfjjdzaAJAS8UqgzmEGwXr",
  "key9": "4fj7ySv7JRVC5PZ3J8Me9ghJSRLDszdK2LeXtGpukfNQCPguENvQRwv4gCg164N5pLMmBnDbC4gcby1tEqpYisqP",
  "key10": "5t1aqV7NCz6M4bJLCkup6wyWnxozxJdxqgyQ9rUAJ7uyGZNrN6jqLDRDMudp418ARyVzyncA4AwcU5Eb3zMou9Lt",
  "key11": "ekySSy3Wfb8dSxVDgHkEYUQLU2ezqsonYAvukxmybMwxSvB9iFjX2pLNdV3fqTm86mZoFERYWvRdaFiMCtnX9Gg",
  "key12": "32RAWtK5gqGu7ALGDoFNmh8FBL5LeHyzpJbKwBQ9aXXcqYjLP4b8W5FbHwXnb1ifCKyKWBqNNsbA7au29zSkCVFW",
  "key13": "3c2cubMuQYwViuwfQgbdWfHKPkmQCb1zaZrpmty1rSsdQLGfFzsWtgjxrdmedPrY7L4Q9Nn48kSz4tTCFwXrpnbA",
  "key14": "4TPog3aFyLcVH6KTqw3VqqjRuLL8ufBhCK3UuRA5LPyUHFetCP7D3coygGJpKHQMgcFLDR6MRkTL2VkKep8n2xVq",
  "key15": "5FhcZ6ubbonjAMED6Aiodc9YZvMC2G5azB9we1fZRTpKRBGmZSwVYxRYWxkHPUFPkFiQ1ouPWc5vcFegBgwx6drc",
  "key16": "4hBnqckrzG87zfLsunNzv9ZBtLsLbGDMWWctyosBn2aGDabi76TVny4iQAVLJTq8VTYkhz1XgK3nU3sQYUrdxDWh",
  "key17": "3SLCD3VWhRLytz6cN4pt7tbFXkjDNKY2t7Voc16isLh6JtE3thzGmmXCGFTkcmQt8gZEStfgvwRUTcKemD2JjQWy",
  "key18": "b2wjjunFE9i4V1r7Xfo1Ju9H5dbthYDRwPnBMCupnkF91crUPKTePRSRERAmNuxSu2bowk8P8az689596JrA49L",
  "key19": "2upRUCKNc7cGRZZ8WHrnCvqhJARRKgJrTYRnURu7MCc4UpcAz7KXW4rvteCkG81Vmx9a94LxRufQBqssLCAbWxgX",
  "key20": "4qDrLF5hsead3eKKPv9aRZLp7TQfsb9Z59w3c1GwkunfeKbLXjtrWGd6jjxpRRfQ4JWZQj7VFFKvo9GugvaLRfCT",
  "key21": "2E3UkY5PzYbXyk7bWaNpFFgTn9pRKRAyjcvYCftDSmP1CWopKmvdbkBtJ9o2J8fbf9G2YG7m7qxf7WCEzizv6iMq",
  "key22": "4uuD4Bnf8YPgeNpWsFJFFZW3cu42eby1jrJsgD8sdXno4rPAR1FCfascF8Abf4J5yR1gC4fp4kEyLdnj5rTitHwW",
  "key23": "5YN1dmKzpBiNJHrpsm3owE9cJPYEqv6zMQgV1L49PKiEFr4zFE4UcXpw2opDm7oe2RUDUgbFEL6PgNNX2Xc3JN1t",
  "key24": "5bPrAooFfyH8L1uznSVaSeAhPxGiDVGf2PnpDHuCdFNHgHuek4QRT8WLyaUoSjtq6sdkkhGn73s4xEk1wAZbyDCX",
  "key25": "4zvxiYF7pgKSRXE7yNbvoHZSB9L1FRC1DQegeAHq6FVGZFvGJd6eXvRccJP7ukvKEWLQeTpYasDs7E9MXguiuHdp",
  "key26": "2eYFdjoK8YB5EuCvsBvrhtBaLsoAU8YDeq8VA7DTCStq3hjv2zLBAmkWi5VhPuY29dPrNhfHwEMQx2mChH3evoaP",
  "key27": "y2srR5vEVbeEMBddedYxLiX2C3qzjfVqXTXcFhggTjQHP3eLgy9PgQpnmdmhxfTktxbggk1DUqv6UKjbu4x1xv2",
  "key28": "2jUacsiSFXGPgFXBiRwR5ufMiKED7JtEJ2eKga8iVzvaEwNURQ41YrwHGqMf77PXo3GuFoc65gVpjsNR4JLqXvai",
  "key29": "5PNELc5t9qTWdA9RhB8nqYt1KDRD4ejS3PABqLhq2m2aYMPhyhnVCH1T5eCraC3EsQxrMvBiQZMVhMpLdgoNqYHg",
  "key30": "2gKWeJpb8W4Tp1H7Dpq6R6W3anQ1DVq43zxvhUC4LnFf7kYUUg2PtyaTDrwfdkUcoREpAjUTxYuTkJEcFGMmpByq",
  "key31": "3c5tBMnQEv9q6zjDgC57CkSGbKV9dPTGDRPAubhg6V3ETBNpBTzyukfKLTWozEqxjQkYU2sba7xgPVig1DUrAmfZ",
  "key32": "Y42EbWr1ymao7MzwvsZbmCCerubuj8sGrnXU3YfLvxAahncP8Q35UNAUCdC3s7MjGhZyzP2986kSCuAPjvxjgyv",
  "key33": "3uehingsVP58SC8U3B4pGQz5SwjSQasJo8YjQt9udEjjdFRqNYh6NJEzBK59QVrQwtq1vAr9mAGA3pwxUPkhmLrX",
  "key34": "41Bij9GcjqTvJ9i7Z5KDTtCb2TmNX2pYjKhjgSnWVgwLrC2mnHTuXx2MQBej5vT3WUyqE2Wqe9vvAd4rGdF6Nv9x",
  "key35": "23x68Byzkz65RdmQvHKCqyzaqZwApR3TAzp3MuHbtVkDNETqfsUC1pMAKk55stTTH1F6eS2WiLEUpsMn1mSoP9B2",
  "key36": "4jKq4cGL7QtqMMqVFzfKnysWrCsKZVZE8AVj9WoykTzAnh5BncWe4YReUMLtrFBDpmbXuugpPdJZd7L1ydLchixf",
  "key37": "KUZ3miarYK7yz1j1UbVto8acQaY9m11weQy6aFDG63F8xUpVwaLVLBg8TMjCpnox1j8hdyFnscR4JnXaukVVh51"
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
