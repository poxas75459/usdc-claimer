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
    "5uKhV8U8W3ab8igPsNoVqtKaKFCKJt1HxwUG3d3myoYtqJkWd272XC2XdMr3fsHZRJXpiHTfZEmwFEpS3MsNLqwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYAn8Ma2eE4V1MQWPL8Mc1VN4ZVvAu7FcKqaYk2gPtmbMEDyeBzocUecxR3ByaaGJ7aMtrZ9BdCqEnywbKQydPv",
  "key1": "4DiByiT5nY2Lwbu44uG8YWfoAXDpAbDJonDhMJ8TQcewz8D67WZkPgv1YZzV1hGEPrhezbWRDCJojdjYnLAJ23Vt",
  "key2": "47DREbZ94U4DvCS8rcQSFx8JV2NgwfKbX74dW9ij6m92sUSVnkHnw8XtAM5kLr9u9rQQedZzhgRAZDnvNYaAi4gk",
  "key3": "4ckdvHp1G6matjfCfU8ertQuWGAPHwPA7MBynWmy8bbxQUSgaRMtx4b5yvmyANCUq7qdvwqFXx7r83qgwZKcmuRo",
  "key4": "4LPNvHEBN1kYxYtfYuwnD6CaJdki4tzcRL32JjLKZ89tTTvEzd76fhAaMRayCnXKCwuDazofT11NEAh4erQw321Q",
  "key5": "4QeUPb44Y9BFMjoAf5DVWWDVEVwNpnzz81yVbFzU5Dutfv8rU4TyerQLAFRRSEH1gST9sawsCAwfCNSPKa2ZNwfR",
  "key6": "46CqqVTAcwXdrCkw6va1XFtxAUTnn3vEJV2bxTqNjXP33vHzRdS7ytmKjiMU99aEZ3mk4Mv9tqAy6rT6FZxVyCzC",
  "key7": "5rWYe2Mr4RD52AkGaq3hR2dkWp6i3gDevp4CPJMykwCnAWmBVY3gfGHhnRKqCU9Z7q8YSzg4EgDv6tAzBbVJcMFQ",
  "key8": "DAJApg1vVmzSHzWHFjy51piFsecm2mXpF7a1sN1yr4t2SBP1uJSV6n2qFVU7YCE7C8zYqipFYZdSuA9HdfjNzcZ",
  "key9": "218UXGhsuf4cfz6fbMXQ8wYzQfsh6XXS1TLM5PCfpowFbPMVx46viNivAN6y5fc7ZkKrwaAFjyvZR1SifS9tPgGK",
  "key10": "2Arp7eDcEGE62hNogbgXRUa3pzbYwZYMcK1xjnSf8p5ush2VXikpvatq8iPuky89zh6V6UNTr98ocArPW73Gmy4G",
  "key11": "3z8DPmZYcPGEvQ9yjh7op5aVtNY6UxnQKwhz4PFb2xqgVoc7CQ7mvNff7UNSPMT7e4MvY1rGqyVRXptzAPFA2upr",
  "key12": "2aUEHTwENzQkk3P33yFwTGHN77GnV8sfWSdairCU8CXutVhezahWoVpoe8xPivPbipy9RF5o8PLyP71fHFxuXSJt",
  "key13": "4Pd98BGkuMjRU3m9LrLw3AAcumCtwLUSPCQYMxo4ZhVEf85bYs9FYxASNbQnB7vDDgdRPqnZBdm5x5hsFYTgCgem",
  "key14": "2kRGwHBUgRj8Lb9iQYNZsemm6BChJfqpPYRRH1e61Y96BemELEWUZFuLin38Yviih6HE8q6HS8ugoYcYMih3sRvf",
  "key15": "4RhwnPzTBGzpKAhfZd9oBCmZu4ZboU1SXvkhpw4duY1yyuBcagMwcibkdfaJZJnxHJt5h5AkuJaLBQm4MtCYkqKm",
  "key16": "4cPqBiKL6FRdZeYcyZ3fXMSA3Mjqsvh6vepBKPFQFrghXDmHRwVYRRcqjfXbHVDCWJu1H2PsG4sCt1pEsHV8VLg9",
  "key17": "vFYLKzZknYhwgvQgsaJSPvtQt5jnasdcJK1byiDRE4RmVU8L9r2Kx2FE2siTtpxgvTrbSNSMVKiyQFTv1GwNKTB",
  "key18": "8sA4956UiJy66E52NxkSrnWSb7RmNEqFEdHDeminvqKko1hZATG5hywF3Ju4V77nX5gAmcS3hs38DNN4cR9npeq",
  "key19": "4M4sJjTu1gDuDNXSA1Xa5RwxRhX6rcZNhCr5gMjuqKnW7sezYAFpHJPT3RWDWmZjBCZXX8bCQNyiSkXWTMQsZxbp",
  "key20": "3rZSynEF84BbdZF29twpME8w4CC9shHSo3Andr4sHRoERa29ocM5CK4KNFVZXMv2JhM15HY4t9JvrymF16jMzDTV",
  "key21": "DejP4kRdqZ7bDDPpbhJiKxpZZYEnwT6biR87gRHUZf1m61isJB5YtUCX9zuoLBBaqNZFesZRxqNRGhVPcDbqGqY",
  "key22": "3jR6P2vJFRiHxmVfgd8i3QAx5qXatpz2vJw9H4Tuqub2HjdT3tbMLJiNvwaMsFMLxduREZv4acG1V4k9D9pBNenV",
  "key23": "yQDtVbjw62pQqsw1zpnPfMFyeC3uuZ5NiP8GiFJvjXA1iMaTiaMCncfhoWGCEFWThxhZriScDbp53boXGmYiXKy",
  "key24": "62jq9qpLvFniC47HxAzkkMQsEK65Aaiwkom4rYJa6meq6Lo1oQ43Z6KB7HBFN7g7w29kQnL6Tz8p1aw7MG2ynXS3",
  "key25": "4rrmAnKgrtwRVEiAC4HayVtvs8igP3RA7sLCRRnLMcUYN9JrBbAXu99iUdp75rPy5QwKy2YUwndb55Q1YDQJVHok",
  "key26": "wPbLpJ5KGtX6piJ1YgqB6Q2TDY4cfhdzsTJpgvQwVEfubtGat2wHoRyc2t4GML8ThAx3K8S32pcxsQ7mv9S3b7Z",
  "key27": "3szCVufmzoVnBPsyhLnwhzEXUY7qgyqhQQwrsndm1RViXDUjLGLPcBTSH8YVUb4qa1UFj9r2iCQdoPzK6xKrTqXh",
  "key28": "HAw5aWhfCypgAjQzuAt6MTQWAb2AW4MiPKyTxj9d8nLHr48UBf4Qhh4ZgfWa8SvdQrfbshod548zVm4yQTfo6Ce",
  "key29": "4X18fzNhUfS9m9FMtxN3XNwW1RYUBkpcDws4ax3CubnefCByuZFsxa6zdHHoM13wpA31vmXHpU6NZu7VkmcNTxxW"
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
