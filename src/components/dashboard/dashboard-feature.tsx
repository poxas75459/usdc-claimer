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
    "3pESXPHTgbpc911hWf14hrhZNVzrWy4YFEeFMCmCFbKHGc5f1QX3MpoCeNLBZw6Ss3FT5SvscBpcS7vm5TggZ6Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAdbT5ALsQEN8T5nQfci28Ze4brMkCwdbKaXhm7LGTk3MmDAZv7sivzpFh6KL9BoJXWoEajFCUJVN7GJqxAcYXU",
  "key1": "CgVo2KG1Z7kATBcWUfaCZN7Uh1JvQChVX2HPJsj1ftS8AmABS6y6rdQr6s1aQDv4YxXZVcWCA5f1vEUKNroRru8",
  "key2": "2zbuPR5VtsVUNjKyHUdxGykbDhuvpuBxhSk2NCXgJ7x9FmvchBbe4iXYtoBsoEhimDrDCNvXuhy5oxtbzNB5hMES",
  "key3": "2bTso4qPpdiFrgsEutYwidFBTbWLcMzbaPVmA3k8VJpJHNJRwpxXd1gfQkyDkhmzj73fgqtY4F1jXPTrAisgxXkm",
  "key4": "TaDjdLHjgiEWKBn5WKYigHJMKc7ZcURpepYxsTortN4mE6cnT5MqfY2zCxCKU5ouAmeQwxrNdxxnVMyfAM3yFBx",
  "key5": "YRt9pdneySA7hQNpRHyeSz1RDLZgCqKb4BtXWZefBAGktXzD4nfBhnDWNCeWsdjhwMNsMCtC1nnUzPJmexpH93K",
  "key6": "3TEQ5EoKtormuiMvXwDm4EhZeL8Coiz5ySUza6wfiM771QHoBERwYCaTwFy8FFX8ojLTAj4xuHEmaj3bNYU2vmwd",
  "key7": "5LEZcjh7tT4JiQ4JMbDpQN21EWMErfpBGZ3xphLiDYVeQ6dAn8APSayYt5TyPKjYhw453ZDYFB4Atmu5mZFpGz7F",
  "key8": "4V7QGxio41R8e4SkRwx3fUf8PdTyYHv94NseHcS9A4BieXHRnoT4GWXg4gtNCNj9DJzGABGhbKSx5vWCurWfsQ1X",
  "key9": "5uffp3kWSJc95yyeL9JMh98X4MP9aGXZ39EUk8h53ocXrX3fRYfWwJkA8hQGaKdJRcAC1N4F2dy8M6U9ZPakRkcM",
  "key10": "2yRFb119eFyqnxLF3QwvfGJFkQhAFB4yQqRo7wLYfvbFTD4bd7sHLdvzLJ3E9izfUoK5DmeNK2oNuU4H5uruZG7C",
  "key11": "5kdWhsNgBPN7EspypLV1uMszfx35f2d69NcdF6QCjjidnwk1RAo2qiHJ3sw4KWcvaYRsEAqmuozeeDo5Dm3mtz36",
  "key12": "48iKvujTcj6JPZEiyLPjWxzup7WNwDeWfwVvNo8UMV2jXgGeNK5knzErcxtAagL9vtTuTHY4rx8o9sWbwWaSFD1N",
  "key13": "5brDjDEyBTvesxyCG4zZZUdwzKy3p23eTxExkDN3r9pQdTE8y9oXfoQSJN9qDubWXyGsMXrjQfEMHUwN5Za1LXXq",
  "key14": "4UgihLCBxaf2GBGsAThbuQhkZo3QUwjSVuzE8gmy3p7iE1getbmnhpcvjZNr51VD6po2cgALm4sAoLz2yt4xCRFJ",
  "key15": "3qFDQzR1pj3tNZCjcXXzfNVEBUF8ypbZPEfs2pxVriLH3X3dp4BQFHPy7w7WSG6LWJmszNJT3FZfJ8qLRxpbNyHx",
  "key16": "2QFttLk5ELHRDp2damov614SFJzP8i9oEWkiywJR9uaVghjR6q3hkCSJmiNtLqQfVdsrvE3rZwp1Sd45TFtbZ9rk",
  "key17": "31rPzJM486Tz7q2XJJw9pVbumfkcQHwnubfHeuvPnkDqGrckudndgV6m2jTVVtPTZtmNAAvRfbXYkXDZxpTAkLpC",
  "key18": "tMQj55SM1TTEBXD8tuhAZTg7gbD2ZfHeLakkX4DxDk6SG94bqdxKUZmt4xc2GnAejU7nsygdV619pDfUuhpvrYS",
  "key19": "2tvkuSTr5ZanxjotVXi8Kr8YY6UJ8hKqYreyy7SuiW1prcUoD6dyvMyBZo2RAvcRa2SBshmtxRhU2Eugzex4xqU1",
  "key20": "2fbzKqEaFhz2S4ZBPhiBopy2utiEVQoM6jWT51ied8xRwmjs9SXe4Jh6k9cT1zj6pwHwazmfgc4c8kA7Ahy6EYB5",
  "key21": "2rXj8XbHheJBbLygEKFy8PiuL5wLSRWKvjT3btS4muCjKuoZzxnybhJGNdjTLAXL1EhbMfsgypuDqXzeEjxo77Yd",
  "key22": "2hnD3rU9pJ7t8KKVxxnU56denENn55jzoV2KyGzwbqU3f8ztG2THKPNrea9PYzQG199hJwA5HQnuprsMSmPRsazP",
  "key23": "g3SkajC64nhiETLvCpPpUtm4h42gfELnTcqTDYucXwDgjUmQuA6GxazvhJhLnmLJXong2uVT8H9njx4LJ3pYWMC",
  "key24": "4SVyYCo5WzzfXYsyTTd4sJc8tgqZAuRYQqBraZ3wEPiW55KVvAm2RA6HEesK1JBWpas2tgJDuxoCPF9t2zmQvpzg",
  "key25": "4qCpapd1SmYfYoyKdgFHQ6YTUiURgNPUHJfZAkkTHbbrTwYvqVhMapMBxDxGHRK39dCoi8JURoBza2Fb8gC6tauM",
  "key26": "4yVWXViYdTrxM1wh7RCbs64XVc9XdEGnEnNreZGhmKdGcepxch7kdepFtjXDAfJchFhbbkSxe7o5eqCPwUZQEnmd",
  "key27": "4JkHDsKhUdjQ6wkS2To7xsNzUnxaBedCmn97qcvFTSrtxWLsgXKvUqC35iTWEykq5RZPqTssHWUjbuuEWVpmG13t",
  "key28": "2V56zdg38A42bPPzEnuZ5mKZWmPmJCzkurytbztHtzbkK32App97qUCL8ae6P6Z49rrqfmRN7La9NwYyvwbg7mg1",
  "key29": "3MY6qjAdUG1oS6hqicpLNgudT8WQSLZc8i3UDHD1DZXK37Qc94QKgCM2maZ7RqANegSRMPiyMAxwH7ovC5kSaCfN",
  "key30": "4qRqMJ3qALZCDa2vyFtx3ffEWtWCGttyyf3CCKQedpGtSxe3LxhgkFjnmhrsKgCddfQC9WM5MmdN1aUEduE9RBYM"
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
