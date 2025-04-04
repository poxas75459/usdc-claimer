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
    "5y1oapgn5rdA61dmBDEbZFc3ccWSzx5pCKY1gctbNeHS9TeJm7WGpCew18Epq7jrjoKyFW9ENdp93tdf85s6o9RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gddCkW8kTCVebmKtFYabJ3rhKHT1WsDzVu94gd1HSDAZjvisNUF12j5eVXvyXMosSvNhoaZSqdfw8P1K1aMoWC7",
  "key1": "e6gGLWDV8zZtdjhK2tZLnHu7Jqm2UqUNEHaipZJKwc8kpMdjHWhjNZuHzz7oJwiV6NrnVo1oQMEQ3wvwgmrsT3d",
  "key2": "2hLDpLSJv1wzFjDcrRGiygU9GTo6SMwwG3ooWaQjbZvnXRFUWmT21njcWGCtea55zFPhU1Xaej25w4Cv2y6Lc1ax",
  "key3": "2kvz8WV13ax1zioGBEeVnkMAAvDLRJihoyAQrgpiVPTh2fPL3dgMCToYrGw4fSfKqUXgxhNBQD3oDyTRNi8YSrRZ",
  "key4": "hWERUNFxtRWBuFc6YY1T14mg8Uxa4KqgUAJnP2n77vJY1uHZeFhziQFmE9EzjYaCjJhW3ae1ojEJEKYf9PkQ7wS",
  "key5": "3Vibfne2VgWNwFVCEecx9udYpBTtMztjgx6BkbswcfjZNR8vXjsqR4dPoqQdbUfsmNKeTgc4jCHDBSo4nvRJDzfi",
  "key6": "2TU7uyU9qsW8rrLMoFSzq937RTTUbHPyo37BaqMyeqYU9r2xndnMx7j1eekd7zFAAyA9mfRNQacZvoqmv8UsJtSi",
  "key7": "b3WcvqcSM66reG7syuhfretNPLQgru1kYtujKa2uRAD42bGUFoJzEeKYrKMtec7w7aSctiii6Q5ZoEP3H59vSFU",
  "key8": "5D6LVExPMAU497czdo87Dupvwh7qZRC8wHFXQJGNfztpGPtMVCUxJFAQL1RonTAamEJDFp5g6yazBzeX6vdH5s8H",
  "key9": "5Hv5ha7XVV6jtoQ5udZKmxB6447fNJbULayB74qYN3kkx4E8eoeh8Y9gQeJBq9tMdLNaA1wcpFxi6j9PsNTxExcA",
  "key10": "ahTf5hAsqrLa1LtmAPKhpz4tKJTwLfZrN7Tn29UBsSibCSkveTJny5vSRi7hdmgZ5E2gEoPa5cSwMEyKZbVZk4A",
  "key11": "2wUPoUgmN2SvDRe7r1cpv1zaTpdystCXzttj7FEunr71eKxaFfevUwR4L2Kvdbp3pJ8mdc4YMDG7f37EWDjPk1A3",
  "key12": "56M3FTsajzfVCSG39djRBcszgMmPeCXL9Hb1nfU3Y2YteMnGhoWzQUafAXjWKEoD6C6xqQcjG84VjzzgjJd732HJ",
  "key13": "5m6t8GAqbaDFuNv6LB6XHLKsFihgEEsS5whsdMXzxvpfospv3gj64CjAUbKre5AgZeCBPYu883m9HqauP3nGrUZJ",
  "key14": "4TVvTPAGcJPhpjVaJt2K1wPvj9yQCvm42fh5ymQS4g3uYYamrpGWfgcvvYzQNJh2CyoPJmYkmLndedWsiEn7Mx9K",
  "key15": "61Nn58ja866ZaaQdcp597AM69kA2rLZNmGQoNAyqaFnva3BstN8yLyetL6at6itCqR7Qg33YwXmBcCqbAtiWKtHV",
  "key16": "cfz5jGBJ3m6b9ZL35LyV3LDBKcXFSCofLRSqjmRTqaQabh4fHXryzpTsDJgwy5SS9hnQ7pWnECLMjxzLYbD9Rs1",
  "key17": "5C9RsmM2m4kiwMmSEPrgNeVBMGJmNqfG5gUZjEHChiakYbfCrMnjcbZZqaBu7vZaYqSUcwSqjAsjzSoPVmUFDU4q",
  "key18": "2DCkKJVFZAeio8aiN9eYXZC6p4hFoojJnGRuDP3cBq1Uvys4Tv7gWsdEV1LYJJxSU8EqFevt76RFMEn6mGqL1Qt8",
  "key19": "53WhhHFgy4MkykX6tHTbLnTgMPJ3p3HL8W4P7dfa2n7FPphMGQbbxRy9od9yFVA7rmL2Z24aXacDrhHUiokeBCZN",
  "key20": "621frrSTCdYRYmvfYDpkWn5cAv2wNuSx2LYr3NDUusFb8rh8vMTMyUUkEpjs4Vsx3zumh93KDvhkrzt7K6pBW3gm",
  "key21": "33DBxkinYEFce2oopoRKwna91V9v7i3eVDvoSyfcUqk9wLJH2PrAwTQK6X5idcZXD9ERQqF7WtUjSnykDPjxWzDm",
  "key22": "2LnyVrt95u7kzPT359A1JRRDXRNs6Ehfk9XB3V2XjvDZicjfpAt4c4ShvbcwDbHGNCmGpPduNuymsvf9NGn7stNt",
  "key23": "3iN5MvooEgSnWR6BRK7DgsZECnZj9HYTEyDQixgY7uMvKFPkZJJiqwbYR1kW3AH71sbta95B5UNQ5nRd5DwmJjZg",
  "key24": "5tPSLnQhZ2vXeqQAFZHPbLu4LLWqHgouFRHMWRYp6hbQtwPnC1gNoaN2FZruxuMFzT5kXexRqbF8yV4kwnQxeBYo",
  "key25": "3JruwErwZ7ff9Jy7f9fZGxHiAdLzh13w6wmq2gypnqQBUnAoAKyig2eDw1qWK8oe4kM8rwcnXieVDjYAKmfXRhJN",
  "key26": "5zXHGgC5NpadY4DcfhVAMtfRQ99QY6YEsUyu9mdJQpMMUXwbbLTi6cRAeZ3gwzPa8aUFHEfxJUkVhmrP83Mt5rLs",
  "key27": "5oCFRd1jpEMjRWHbcUzFVVwRhVkAjA5nNWsUfPvWQLsnyzkx7TUvDLzNZ4e2zqwoEUjhaT7rj38B3mhe9GgdjsQN",
  "key28": "sSayZNKWm1KMcNmJRC4nuTBbrSLSXFaM4SENfzp8TpA6QtQtpgutZYCQ1syE2kR3H9UGtC2v7UE27Y959NXc3df",
  "key29": "4Xj8qqA4f9L9TCP7anMmWCg6ZSSjXMTm1vYHWzf56zqukLK7c7Frxf4ZXQuiuXW5uLktXTs76bjirjSiEkmM1gVQ"
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
