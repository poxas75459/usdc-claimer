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
    "5s81mC5f4Rvqvep6JFGbomR3gAZy4nMAnNcUmG23KpAtcvBWzhC4eV5HsoA29c2RibU9kwXJ3CvGtaGyBmCGk3n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMQP8AUxBatSErQjbhDxvEJmEs2NpEmdZhEZM5uv2vnsMMmMzRSm2hDVCyoJBXYRwHXtbRreEQ9KLXE6EeQWU2r",
  "key1": "5j3bHJNSot7ZVdaEP1EVbtnRtbqfiGM6SAgm8qvyWq2zmLZoEkagFyM1Qj9zoCcQuFoxaAAkBFU7Xy2Ayy24hSqD",
  "key2": "5ywpnDEhXgZSGd1YvRLba4NDae7s8RRPrxwWqkWxSeqYyfxjjBNCrkTALy4jSgmuAVRWatZk4NLsgF3CFJwbkEtx",
  "key3": "5oivB11XQSNhNo1BERS5TYKGvnJsjTwyZ6G6YNevqiMQb5SR7qX18nHm4zHAwYHh3iniDH2Q1RmU7oy1iPdmAMpx",
  "key4": "37VZEzak71pAq9XDUYgnpM1HBYYwLkWKinnXo83eaG1Ugjhn4yUmhbQgMkdimqZykHxNWu2BUb3W27MKdUd9xwrJ",
  "key5": "4RDoD7deMb24tJfwLs4qdoAQMovZFCxgZHDSswkN4cLi2Qm3MYkWoUWqETs7BQEfMDgiF8RbVnkRBiwnExUE5npZ",
  "key6": "2pbf2HUJpDRiPjMhRwLpYZFeuK6DFeKTAVGvkPDhKSK5VPEcobm2X5fa8fDYpJfSePYh7V6DNxJMwLiQRMFs8yfq",
  "key7": "dytsJNYiBtLjzUvQdVAn4Tx7jgQDBP9Q6EGDTEg5hRY2bMLrXYPn13fVTZK9GbVVtNY8ySk42bwMkiAd8zhEwPB",
  "key8": "2SrSQLxkLGkP1ZmcodmtxDQh5VjnYhTDEsLnb4JabPQ52Eork9ewbTQeEN9rtv4fuccVPsXf6DHzjtxoFBCznouQ",
  "key9": "5Tvjo2pZgmLL2YA8WMznzihZLqzt3w55UFAiH8yGwWjL8PbT6DgCHdNzNfg2aNu32mFhyVLgy7Q9RK5S2mK1SEZj",
  "key10": "59fNbRcptUskvXfdsxzjeMnGNMDrCnaNMct8AnFLPn7KC4L3g4jCj621HKz8mLvvdFRzZj3QiMDN6tJm4zo754yy",
  "key11": "5pBNyZC5K9AVuTYnn68TLAsYENhoMRUEDy4N3w4fardeq7zbFn74cMwqL9uLEJ2GQ4FJTuSA3R9zshbdPRXUf4V4",
  "key12": "2SfL6cHxxKVf5jM1h9gfudLMctHeFicKnVpGvXNk4iMexVe6UERnatgLTKVE51r4Qw3TMZS37j6rfpjr4BjpER7p",
  "key13": "2zLLC66CZgpkW7YEajJqLyTguhoCoQoNeCMGKzTeZKv3QopEyb3vvjAVsWTdKqw5kHVCTcmREJggBpXnEQz6RBdd",
  "key14": "xzHGrPmXU2suNh6LMY9Y8ZSijEodcEgeQo4XgZNFPiHRaB3jqrqC8S7UNGxWTuzksMTsmrBoFmocxGW7bE8haKE",
  "key15": "5KmkjD67hG4MSf4m8zdPSqHyj94gFztRHqyv4KpcXTwRKcETNgpedejgYmZhqTPCrqNVJ9mZkKQHfjtyjNER34ye",
  "key16": "59hMyuUZhnrTYwuhdNcr7R5DxnSVGvbCUphBujY3xxidJn1sEhJfS88jLPZGfUaXGRjswiH6yPueKeRusK1MvS6D",
  "key17": "ib2e5AMbdt71phJvmxcHjzTaisSs1Y9BnfV3RZ69H8T5znU1uoa2wtgWCBwT1q8ZZLhxmsc7kmycHBkFtDVHbfy",
  "key18": "4DUbaCqmsZmYeQt4WeSFEYsNqzvt5jW3qQn4uy5C7rkUYwkAG9r3meWbkZcpN2F1yCYrbG2r9um5NZnJyXXgQQUu",
  "key19": "4AXpgocafw1AVT3jsir7Hm1JsMKeHXTiYDJ1Mf7tED6rYptaYhwP2byG6K53yZoEgcMfkf7Cfv8AdQLUTuWiDkaw",
  "key20": "67jRo81mrdbuxR4UX82ihwBf26JDSCVfMntLF7YFtDWpJPpuQXZHenB8KXaLmftCMTBk8wN8eRsyCTm2i9NzcWQg",
  "key21": "49Esw3V8NjbFRSCJpTypQtCCmCZsEa4uqYfX4bYJ8vCxQsQ26qdGJZa2e5164EYZgqDk3REaCCA2wPz61CBdXQGz",
  "key22": "4fMV8sEM6287gj1iugnAM9V1jxbVQxj8KEeFK438QU39DbnzDKsWQQa93bN32Rm3ciyo8vvHLoSg3TqLby6ofRSP",
  "key23": "5zooWJoY8BA1uiHYkGnYdgqAcA241uuTtvMQCi2uTCFUdgTzPdR8mvXKwuT2YWZxPcddGbNBU2mgfrpRxMBvyrwY",
  "key24": "5Y4M4icYmH3ZuUC1sdQFKNRaXesGyyeVTSKFu5AEJxk1YeB3hy71ma179HFok7Zr5cWpLhRnzzZbRHcvTSFwMr6t",
  "key25": "2YuKryyaMQN5NQppNmRGHQ8fy1hexcVjntBRMWzKW98dJoA8wPSPXUPw5Fzpdw9wDprYD5wtwkvKdX1TUL8NoPhe",
  "key26": "4QR8Nu3ihabmowWLuhjhrx8Akvd5UMM8BBDSbPfnyeZ5niQvZFJfytphibAGR46JXycaqkshrGGxe6V6b4UM5kaF",
  "key27": "2DDTcgBiN9od76PYodtYJwZuj2vrV14pHU94XuyFyiVz85fLpLm8mqbmJTzwanaDJkZARwWwTsLZxKxYGqJeQxxh",
  "key28": "2fMqEQtvL8EgbNX6UM7MNKTDjmBjzgsMsnkpBnshworoFSNggBu3pZv3KYcQ3DdaLu3HeZPGKNLKU7s4M2g59E26",
  "key29": "3uqF3vEdvUS8eX97H7huoWiB73Np6Xwq2S3SuxJK9BQK8ymYqssjdRoc4ssTpBST3dWtQKPrtMbXLYwF2Urr82mA",
  "key30": "4ZmZFFTtMns5o4zFgTB4YMypX36XQPuvA2aFvGAVMR2UwbyVyoV1TUwM3nWmc2jSiBxtBXSwzD1TsMg2rASJ2sdF",
  "key31": "2YJh9m8FTeapUYDXN9astY9TEg5WXnFYBNWUGLdxMfzTmyUQ9xPV8TQEQXrBuAghvTwsGsMMtmUFTFBmGo5MHEAy",
  "key32": "5UaVrLosdnPwuXDhkzfEMGqVX7QfgDjtQXpmop2GHVAvRw31B655DiioyFD8WzuAEhVUX8Q4WUStBRQ1S7iLGAHu",
  "key33": "3h9rquDVUevbEtcgnd1AmrPUMjWBwtjSAWFNCmEgpZKv9mmDNtv4UukrYee1Zi5hM8cgx9tcXnv1YyNaEn6XrAX",
  "key34": "4SpxsjZ2AtqsdqYZGrPctcGwkHhpXsasEAwRkToLQbo8sp7wibBUrM1CSCwSqQxAXreLtGHGhApC7aGFbekLsbrk",
  "key35": "57aaViJQDaNqUs8AffbFciqUZw1mp6vgQ7yLQE6ehZTomLUzdRYbxxXr1wQPuDv8A2cPZGLrE1x5CmznmLjSzdsE"
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
