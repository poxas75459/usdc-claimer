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
    "4ttPe9WrvD5fFPwXB3tbqeWAuaPG1CpNH2isHQPJg9v1pdne7E7sKeKepfZpWNHSZu63MrD6jHd7xazsU2kzPiFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSYLac1BCPLGyogKWFR1z1GsEN6YFerjeoJmjUHvLcgrH2boZqqJiP4tQNY4QzhmkTenw2r7Xp7fRRauheDq9eB",
  "key1": "45nXUiPhJijiAEXx6MDNNALtWTm5ijmVkwJMkSX2pqUuzqVTrEVvyBKqyoDiM6qHEa7Rfmm9XkLFbL3wyKZJc5AT",
  "key2": "4f7RjC8pTT2VLLuBsi1g8yDmtyHee4Nqb4uqCuPcgzZxfenx6bcYU1ukvWnmtNMC9XhEMpfjj1x9KauNCEWApc4t",
  "key3": "4hH8GKmw3ScJTF3vDiNPmkx8DZJzHpStbxrW7iZCdYfLiPdqJ2WqWiuzJb96w79MtgrSBdL7zGYvCRUSZhM32zdz",
  "key4": "5Byv6owEsRjtWmrkUgdW6eSZVsV3ihKSakzztRANe6seg7fW4anRr4fvZLgyuzCPfX28DHrThce9LGZ6G5o1DjpZ",
  "key5": "qziiJ1B7Xj5sACsDweeKWtesphN1JTgVv5ZsAktEFjUPJCB5X6s3sn7Jwt3DRLpzRERhFHTSoAJkSa6TiN3EPN1",
  "key6": "5u5obZQcncUi1gm6VCYmtsQC2WSoyPBmwoJiG3KVeXKwAsFnRQRQbwANQUwia1s6u77A1EgiGgatfs2h21Amrbb9",
  "key7": "62HcAaXrZJk31zvL1Zaow24mfTgWPiKUaAtPPTnkN2Vch8tZFSSLpAqpyn7ggovvXuudwyGyXTKKdkAWs3R4vFCf",
  "key8": "2ZtvU2vYdZY3izCBkPsbXqt1fvNPrUBjLW8RYDckCwPFx9sVVV4HP3qLdR8iZkjg4ve7q4ZoApxXszyaDqhJ9LA4",
  "key9": "47P8sELSJxcFrPMcqdarAtxELZ4dT9MYzePaex25jr8pSoLunjS2TF22rP8deWmT4eBdgXxvFnyJh5YoHCrcYcFJ",
  "key10": "3e32GLu3ZDjQeaCpdyLsEJJyBmA3aVtyqTNEzd6kW6ZQ4GDzbxrZq4ZPcc1kKQYJxigNDZ3w2uzxznrKFKSCNnMM",
  "key11": "vMhd6wK67LLKKHQfoj5QKnURCFNgPSNJu2s1HkPyyEcr1vn7tm2YQQKS3AP8shRQcDiLEa7mcbjFnZ3jNS8G87Y",
  "key12": "5jcUSD236pNhEfsQWdSoUYRWrgSpBkM14RjB58RKLmK6Aq4sb3xf65Q4nV2pzoWXsMGJp8fKCGGQj1srtnS7Ss1D",
  "key13": "2RBv4GyUwA5siA2uT5ddu1r9V9TAQ4GStAaVAATB8dZyL41pYTSvWcMfYte2mA2sPyZyYz7ApbbQ8daM2jdEUgwR",
  "key14": "GkmMU3omFH6UJNMxqEfETySYKws6n9yHx4cjbhKvMFK8yTpvYx9Pg7Bu859SnnJhawpBzmnp4Bc65pi1DzUjdwy",
  "key15": "jVwxGnRdTQyf4QnrSYTxVUCK4VRLTYd4jrWVRea9mGVMTWj93fQtMzteLz8viMeVN3jYMP25sPJUsuSH1HtsVjP",
  "key16": "3yiiaEJPZNmdYexdwa5mCZd8GNyKZ9a5VW3RvsAwYSa5qYUFeHtG1JW3rsENGaytb5vLCqHByfFcgfW15u3zknY5",
  "key17": "3YYvsrQu1EkeRhM4HAK1z57W6qefQ8cXobG1iWCVvU4sugUhE32wQU9sveoN2sWBUHeECXgxVUyiTcdhWEB7ALYu",
  "key18": "2M6Sq6inWSyi3A9cy2gcSbPCPoXJcAzWdY3PpYB31Nox21kuF95T84pzxXNj4iqDSbpY11uAozAHm53bghqt3Mfv",
  "key19": "4etDiFE4JtQ2dbkJVUdNxcVv22LBtPsTeUcs2u7y7JSQPPYthNXUd5JivAW8SB1696tYqw3Bew2MkGFFtDiyLf2S",
  "key20": "3Y2UiEfVcGevr8JCQZiRXmntNgPs93SMJVr7yW1ziPdr1nsqo9iBt3ZzoUpKBWDAVG2978VWCykaENDCbdgvqxfg",
  "key21": "2F7FU6FcxtvdsykXKwXyFUStowGkvVG2q3BmZHoJG3dXdmxfKd5yC6UpTuyuocbMW9nneVEus9bhYaSQy8JMevmh",
  "key22": "32rNRWoVpv9GksncBfgw9WEMGDsFrZnPcVoLsTKrTveAV2hgycmR1Tq8RLtQUyYKYQSYjJBHZKMmaS1Le57a6Psd",
  "key23": "5Xvi7Avo8QqzdmW5ATYcTYRbseiQFy1nNd848v47KAbniVzzpD7wxeiBE1cNCE6arYi4MWPtTh4sGUWxm1pJN8YR",
  "key24": "5mGhP2dd6Wfsmrb8py5YLq9mGEjS96SWakboeU5RaBVWVu7wKCXzwsGMgmaTpVekA9sP1nRimy75PEsPYmRo9Wvt",
  "key25": "5mKgjpmpCLBZqSRu2HbEzeKCS8aRWTE3HnNApX2KBR6xXT2vZt6gBeffSevAWN1AP91HuyuEvJFBEMeQKME2Ubx4",
  "key26": "asBXHFRYWMzsunCo4V4qV45guUTc3Qo3P664uGzJpupiYziaGygrP1JhUqAHxhJx8J4GN5S6AmQhN25osRQ53KB",
  "key27": "4dAMQQL3jgnHhBDzAjzAtmcYT2YnJ3YUP6bfTAvhTbAUURKLjH9mwnaiYJzQVTRxUu4Qje34eyJkgdBGQbAYpEmd",
  "key28": "5z7iErNVqWXL85tZN98TuDQfM1dMjhxWXG6DHFqhDMNojD8D7gZjNm7Kky3i7qyMRcxyg5RCcoV8PknFiAkfDVMx"
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
