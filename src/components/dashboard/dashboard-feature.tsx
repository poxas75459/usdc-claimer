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
    "5VyQnSVUoRX3iRYWcef6zmyYwwU8EXMjuhw36PyhsPGbGsQ4qrF1rHZaXYpZbip1hyraWap2sjWgMLAdHuJMNnww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkreWwPCWRo3G2Qom6WVCGWxacnmLpoLYrGseMERSTV65u84cxNkDRxtcdR1xi9i2fTq5anajeTL4yt1CFcAoU8",
  "key1": "nJypzLw1SQdponCJffz93TJsFu8Zv3MPVS1a7QyrsTpyxcnZ1Hzo4RfncGxhfKerL6QoFwgPbSro8VSFf8gxPRM",
  "key2": "5w39RspDXWQd7U79TmT2JyfVBFm7YsqRFEwoHDR7AwrH9rmDAU9ERey6LxapZEVrZkpLpinmg8KudtyHLZCJCpEZ",
  "key3": "B8QVasCnmfbgjxwFwniBXMTQDoN8HnWD6qsd8ajWSp3YGnANUSEcgof3nuZybz6J5aazs5Gvse8ENJCYa9EkiL1",
  "key4": "3ZHC4GAuepqo3qByRPnn2avL2DGb6X8pkJx15GLVyMqVhSNuQM1zKtscAcDS1G3vsMaqG5aw4sLF5tiw7c2ZTy15",
  "key5": "5mUhs7JYPMG7PTybkx9vd2ybP6au9pkGkVsi7iKf76GH7VnU15oVJjaGeprhh1ueiJtm5MpSghE1SBAfjEmPNqGd",
  "key6": "4TnCeYWKvw8B6FLPwG4EKCKjnWY2CTJm9nmDgsh7FBzEK4bbvfEiUPpxzCrghvSz3vaMv5bAdMrmMrRyvTAMEDPJ",
  "key7": "4myGggmzvGQiaobVzPspskK6PBFKkE7o8cwWuE7Ymk5Y6h7qWPLgrriuVa122WTyp34rHtepiQeozvDx91UvTWos",
  "key8": "37p8m7sfdGXrbkUusEXjVBANdn28hjWd5YMsF2NQgQKbYwUdNgpJRxBpnTEM3Lj2nSWBGMt2UMQnkLuPbhCRaL3g",
  "key9": "4gLMapK2xZmJ7FbbAw4LjvDTdxJefCABJSM8kxaBZHxSfvb1ckHu4H7Yn1nEC34L3CmzZ2YDpNazxrc7oGDoywJm",
  "key10": "JvWBMpisRSrKDJwWzb6qwK8odTFVEfjzoYYshCkTeBP7GCFKKaXEuHd1wqTLVNHigqHf2QLCWWpxX1Z3nxuvKsx",
  "key11": "5fYpaDoi9SNTb6G5b9e3h3Jiaqa4fndtUTtdLvVDvwRsWk7CnJCNFnd1nXTWfr3WZe5MoGkFtNGXW9zVquAhw9F4",
  "key12": "SqUM3mKwPWEQ2WStLLd8Yhe5VCx28YKXWtwGwdXCoSkgUQLrzdU6WYZG4thYyeByGV4YbB8kxbPNSBLdy4FxmsM",
  "key13": "3P7LTPzMRprmoPRTjpRQEGwQJvmttghjhtQFw4vAceUp2VocX5W3MGpJNotNWcM5iYa5PEMPHL3JEZbgwWCnyaco",
  "key14": "5BZjZC5bLVWiYZris1QdUT5Qe8rpzqrXjnd9bQgdqp6L7BxBrHZRsRh2NWRFxfyDVkG6XaavreDhmrQtXe3PudrX",
  "key15": "Ak5dGHiwFBgCJLMWxPAsrcmcrQTMFnE68NAYh3aE3KxEPNhwg9kgyt4xQU1y4UR7ENf3kTYXCb6SDdRLNWLmcsz",
  "key16": "eLrryCdL25UBiTRXLDiJqJj7fXZpjfxPAHcjU6eRRknEZ6tkqHqov7FAii1aUzKBbnAEFtpSJPJwvKpY5erSrv7",
  "key17": "2w3HodwW6WYjHLAHG7tgGX4DtBXmtWRqajtBiNVzGFWp8kF6HmYK1iMUvNvvq5iXKDDpRKLkRbBczNbqffxYHUQo",
  "key18": "4msvGEQApkvfK2gQSNCQt15aPuBexSWgb19XxF9RKbEEtKvQbBurtVjJFLr1DtLmF1Cb5keciKHDVF6My6tPEJZ4",
  "key19": "5pR31tEnG6kewc6KJ8neAqkzK9SZTuKQGUUiD8jh7mVwTdFqzufprcCVyBBXTnSTYH4PvYgtnYZj9mk7sXq1MwvD",
  "key20": "314jA8UY6ABQ9iYxwhgWPdSf6isPKdpdVWNNpZqij4somYCQN6x8ZTSfqKenuNDHQDbxn6gNzVP3fdwbHxhyWu9s",
  "key21": "38oLpLjHnAvB5x9iXPo3tCKyBrRuJeytS5pVrHqcjGL3bSDrfaZ1XuLELew48YAmt9ygbwCQ3kvKsDQTFPoVoZhu",
  "key22": "4gBGv5MiAQap3doDGtDYVfqK2KmsEK7w424BSM3K7ujUJE59kz99GSh5kwNwC6TapdWctWYC9jNQhqR7soQYogww",
  "key23": "5RRbWCy12hwVor1ZqK4NA32kQQxKpJhws8Dru9a873w4JvAwYBnFMhdeGpUpWN31ZvZpkNisybxbvTTFjGYoUyzV",
  "key24": "4A1XTY77gZMpyyW9zyNvdhYMf4aCZ57pDGyN1mutEphEiKjS1mP9RATHP9tG1KDFe8R7LVACpscRAUfGTqh6ERbM",
  "key25": "3CY2SVoPqXGYA78Hidmi4QXhRVLjQN2VCqt8bsMJKE5dxpGvzcZpa6d6W1owXHu3VwCF2SjD81rZpfX98mvPnmKR",
  "key26": "hy95RzPTVAX1h2MEeyS4GvShMc3mxu7AqoFeutdHqAcwFUJzA6tZeLx3JZ6eMryD2VAmhF3PBtxLcdK6GALH4RP",
  "key27": "27zKS5KkBqZQHsm2NRon8ajZfCTUxyXyRjum3HxFyH54aNjFBShHP7ag6Q6B585bQGLvDijoFHPurLhfGkmhqcBJ",
  "key28": "5nFsko7GCZytyJLbF7WXadkazUtgHpRrPep68HUYPB8QRXJTzzDgkaKGxE2MN8ZmaDGuLXEUxVZ4epxu5pNg21K4",
  "key29": "4ogg2RRbfT5zNuZcv1KDTDzf7vnhesgZ6pKYyKP7QYyKng1nyF8aAVMQZXUZhFL5koWsngS6CcSoLWMHqsWJv8U4",
  "key30": "2YfL23GS3UFoiDZrkUztfdkX2whhvK4EEHWzUEQcKzbfLiKWLjgk6y8QwPDDvtqMZfisdf9Ykf76osBSomSpbwxP",
  "key31": "2xFLMNQATf5eStMx6ZndGzggc58cSEk7G4grKCKkHNjDu3QrhmgkGPad3rVj69BfFneMvo3QdVQBKVZoqivTQcBm",
  "key32": "64KtMc8X2HUvWomuz9jqwPLJLe9mWhupiCnBSKXemAUdq9NLSPX9GcYW7fW75sywWdwgCzZG4QQibznH5W9GNvo",
  "key33": "5i2cXHT9cQEn3HE81782wSqd8oUTCKkNHxtQFkFyZ1ZXjCrCRjZZMexL6FtmFo7XmnUwkDSPCJyjsCMzfWhmVDAu"
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
