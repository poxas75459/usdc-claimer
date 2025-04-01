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
    "26AmFoRJEaDsKtkM5XniBg4AmyWzuiq56ujk5ceEHcoFwcf775yrvr95StUaXLG6SaEpKavL395Femkd11HHNrSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQ8pbznuvC1qFxM54bHff1u8r3tEQozmQJkEoWZ9ea1FhJCJGjV7CwG8L4VcGKRMuaMcxexeN7eqmq5bAdMfQMo",
  "key1": "eBSLQYiJN44pUcxgSF8bjCLQce1HFZfZMvmihohb6cePKrSU7dMBctU3dwi49hkxsUA2hVd4MzZgbHuwZqAJ3PX",
  "key2": "5dz2izkACi3LoDNwZTnTHSpp55491Z8ZmZ9nBxRFb7K2Xozf6uxRqt8ZdB4EyueeSinXSXyeeBrigD5vFVLtQwRt",
  "key3": "54nmAd2mV21MsrqvJijmA17kLuJL6yq65BeQAZaEeC8GRkqyFbR1HskffGKut4Z4pgMD5SVjCm85JzPLrBvqeEfG",
  "key4": "3wXjeGiiSistr4akZDATdi8tjRoVvVq4mvEQSCrmCe8JFdASZxBB8e8q8zq6ySmTBwTVsBKJRZ4Uu6f7p3qRrxPq",
  "key5": "3w3KDAf6KkoYZjeaxH9Y8s44fEwRBnCJZ7418k9c4K5dqipwJCAEb1R9NNPjRgaG8AWU7KYaQKKa95omkLgssutm",
  "key6": "5ha696UnEWcKY8CvuMtXHXM7BnArKo44CVViyL87pqNLmVhGE61GnJxyX3i9uiVtXLRqoGLKGM1sMZHZJ6RSwuA1",
  "key7": "TXQdvJ8fe5HfqmroA2LSk33X36L8cWTpoQhKVbqbKAPQJ1Gj8noA5jeZMmoTyrxAe2Cxq8vboJdUYmwk3gTkCiX",
  "key8": "28KRK5dKHEzZwNPBDBK72JshJ82LxK4ziB7xSi6FpMKXfgEQmS9sx42yAmSrphvWEoqNCkvhPHBCAPwjZvacqama",
  "key9": "L1eVqdd2kiToH3HYVdFPBn1vAH34to8YUXG7Fp4VX7PMpRgHph8sRLor9STVBG4RmJCL7k5gK9SZj5Jeb6DdUdi",
  "key10": "4TkKfDVG5LL2ACQNuJPEwkP2ttC2AeViZGkEtsFcALTgp7knzGJgUMijLCCspJs6g1AU3fQTrxdeejc18taYUU66",
  "key11": "zF5hYcRBcqnjvpXrXp1Vqp61pCtYuRJNciWBZ14z8Bt6qfssTPbj7sgF11SW6q5JJWi4Nyx7MSkJoTcosDJuKsN",
  "key12": "3bLG68BhUMg7UsweFXg5EHhe7nLKrbduTTQULSGWwK4ES6xropz9dTV1JAEdZFgRm4PGGGajgLVp9UMSQ9MFemsd",
  "key13": "ijPZCoqpeP14pBDpHBGSoumpLPvoaeF9RhoQkJkh9mA3ntorYZN9qaZX47B9V4WFU7F2E8AiN46irdSJHxpEoxR",
  "key14": "3Pcp7KPDhRnqH1UBMCcv6VA6hYagE8D6rLFh9gboRBV1xsZyeD6EKcxBLsU4nkWKk2w36xxucBWwWwt5mPJW5sHb",
  "key15": "5u2S4pTsCDWVdA8oEvDXzhyMfN7Lj3oajsBN7CYor2esFSKyhEmpJRneLrZK355K4YXDCnv5KrjMnrcuhaqBaN2x",
  "key16": "458vB6qaeYAkjWK1jqwV3VAW1NwzpP6rwtVxCQUULXGjEBuz4cMfWXFZtAu8RJjJVZS9zuFE4KvoszvBzk23DDqg",
  "key17": "dSF1XsGG9VcVxUPtq85QMZW271tLuDoGCQECyLXnn88T1RoZ5egDbG2gFSCejSUBHUd7YgtidUFJ6LwwLBczrk3",
  "key18": "5g4xtGmDwHcz7WavNS3Soqw4cxL9VUpzW2tujyRcNsyUUKgdLTQxeLaRGfoV5bpmptSUTYdaJpx7c2Fp4sdTYiVJ",
  "key19": "27dAaCJBkrxm9TDsadqx4bc66EtdBhoP9TpXREqkNrxP3QQJnQsxDTWMA86UBFkhW1P7jspupUXy3CgHVrnFnh2W",
  "key20": "4x3JhKM4mdpyY5pBxkvT7WQAcjMa7rFPhnDAouVNkfEMeDPT78BpbKQ9N3GxhfkzbhnaLscMDh16oARbKj1Ke9tx",
  "key21": "4uRGhV52tpUkw6BQ2tFkWeYkJYxdq2e9fBUEAx54Th7kGtvr1dvTkmDyidindLKCdNb2MSBqanAbvg1JXSBd2doc",
  "key22": "4kVbEQGQ3Ts7m36b16nvsUmcMppCADFuGoP7hb5WTPJg197LZJ4jBCZjaMkNVz2Cbg2bvGXJYozkQRHULKLBzMDD",
  "key23": "5Z3apnTSAMf3zmPS7HaUv4uZtsRtzK4Aqo1XYSD8kWEuWy1S4pHESJogEVWhpKDKfDRmAoc2RYUFCsqLLdb6wFkc",
  "key24": "4QMa6dsPCYYaJegXQF6GSFKT3LyQQ67o6wvqYU68UC2U7woAjgmwGo2ktSni9PMLggTxz2CEsvwQuq4KbYqHyjVf",
  "key25": "3aHmtnSZx48a1FdoKFGPkZkkaUc68K9jpiJjoGDershUmpFkVrQBmzyd4tvxdNofGAQr218d2HAxx6KhqfBtWLV",
  "key26": "3RK5Wpo5f5Joix61FHvPtZVbT89phZmq8wfc6LRiyQumKuNcqPCXKAxzJsr5pq8Q562eCgbXKZw1Sc2hTf31EbKR",
  "key27": "ZpTSoBFUZCNdFGXSqWsxKZVuDvkcRMf31ZvPmXFteXtXyjegwq4WddcQ9VkoZiWPWxcBpZs4aBxjGWm8Nm1YW1U",
  "key28": "57SAH68HdqVq3WWBGaHxc1Q3gxgUiBNHJHDNf1KjXAF2asqwNTQbcHhKtypjxWRhRTh45Nkbsu8AutH5dz5iN2eT",
  "key29": "2KEF67YzRj3VZYS9jDbpnSRwNZ4nL1JATSbevHuWtsWmUc6Au28YbSnAMr5oJwLVCHSUWcbdR1MCAFuviBqYYSB3"
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
