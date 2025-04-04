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
    "3gWuuSNonqzfxUdkaTic5gr8fxiZLZsEvVkY67JoTuE6NRLEqjTcnEka8eAb1vJd37mvYnJkDAWpms76PmaLWUpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGwnpqUFxF48QjcaNs99qn37kX6UvsRPcDaBTGnjomq4CW6PWg8s3ANmDmSx85qPgKiPSNGxVDnKWPSQB3N4SYe",
  "key1": "gppa5sjaZkXguELETSfx3L84CyWfXN2u6nhNDfShW9ghQbYZLSas5dXt1zPVJEMb2G7vtJJ6gENBRc1L5iE6Eu2",
  "key2": "2cfS3hp8QQemgy8qXt5TjodsofW1jjaeFjXPz4eWELPuMvrGdtYJDiZUwCFX9E4RDzVhw29t7DycCfY9UCih5e7Q",
  "key3": "2L4JzXFWaJHL1tuR3ZPq32gcwQhfRXiVMJisU9XbkGirPnrL7zwTKvws5uc6cTdoBDkdRBr1HajaA5UcziWnJBrA",
  "key4": "3VSu2hfRxsWyTapfBRbi4MXCqeNwppend6i3jsAGMJWXwv2yfr89ehPMt5not8QphonNJzw9RFTTDnngozX8aeQM",
  "key5": "5AmVXmQXwft8SoggZ7qoc8s5nX6kQTJvJ8NsAQQSqH6LfkSKpX5mYu7v38indULyzqwQDEDc9y3m47V7PJCY9Z34",
  "key6": "4wBRc5ftYKm67XeNm3Yuc8AcaT9Y8S96cdfVxnXDdpbezcdGFpLoTzFUTbZupPxZ3Ma6VP7APka3kuYKrHpvUbdv",
  "key7": "4ph2EwNhedcQRNv85bukQ9dPQ9onSuRZ33Tt6sDbcAF6pR8B3QU7yD2Zs7X2nNBDKfsv1ee7NmH41f1XE5QTCXEw",
  "key8": "85HUFgrLfq2vt1WihsG9JXMcRpshsSQvPHki1JEWPsLqcSjmPobGLvScjo2gBos4kDd1fY111S3q5EyQaTDuHzv",
  "key9": "J6u41r8Jx5QsCiRSYNbWL96jNmQsN3EbMsgcUgffYK7buHNMGbC3FFHP5fdYGNANRjB7eMgCwXeFsPbtdfu49JK",
  "key10": "4hcYr3grJQ1QyJqBNuX2fZ9DuqJos4fRvxfA6arNujN7Qkh3s7BXy6FeLpFQDaZxoT2p1QvjEt1TpRQVnqHGCoLA",
  "key11": "4UsUDbj43n5i8w8AZBjWWmDMLWBPYg1Vng3i1Um1siiyKN26cMkyJYLqxnJhCW9U4q6UHW6UjKrhF7zBPsaciPPm",
  "key12": "5eyW1qi2kjyy77vSa3cu1TAXFme5YDi9iyKY5dKVnkaEww57k794YUUES3wf6VsYZ2Aud3TjbLwz9iVBGxYpCws2",
  "key13": "4AtpALFxLVkXMHqXMH2pSjD9FQEefBRUiZypVHdHkTNWFUtPinoF4XZKD7J8321DrLVs7vEyJdfoRJoMqCy3jRue",
  "key14": "62vmGJN2aW5GZL7sSaUX8fZgaRz7H7j3TPQYcm9rhmdQSorygPSZRbHvkmVfqvn5B1Tr2S3XTaV9GKkGtChQic2m",
  "key15": "3NsXaDGgFj3ygbnWg5qKSGjvzDfWFPi5yF8KUvLrfAL1dTdRhnpKWHdtZhBFStKMx8Wpxgf8TeRQwz9npBZ9DVRJ",
  "key16": "3qScWPuurioKgvTfiJS3eoMUFMsULVwY8Axegz8gEadDJCsdsr141HS3ER6J7PyeZp7vDeHW4Aw9H1JWHZ1HeTEF",
  "key17": "5TaA5tpJ26kCzZtEcW2SX3KjwS3TnYeMaZRWpB2e5KQ2Hp1g3cCYhkVoqN4RLsepHfg6qomViqm4TyaPqNnbhuMD",
  "key18": "9u1epSJ7pKgEA8MHaewSuxC9F7e69n9MvzKbrJHxRVijh3YfHHHyiZq3CdG6Su5fcMwcQ9bJpUjv9SiJTEhTwhu",
  "key19": "67GdP2NUGhq9QgAHuszzN6dQHxnMPh3Yo8Ze1RszWs3kUGToj6KrMdcPUjJqHsZPhamadxmFY544AYXAkvCkFFUV",
  "key20": "2Q57QWFUr1iohEkaivrmfv8khUnbaEBa2DAa1hNeGabMUAMFuw8Z9iVanTQjynt423Ft6DVXdKu4SrGDNnnhnd67",
  "key21": "dpK9QASXocvvZxEvkpaBMEjiq1iDHEK5qPU6Ze2fsDyoyHWv4hTqpko3yu33kHdAgDPGwFf6npmaEPfr1Gakms3",
  "key22": "4o4GPS1xpgd7RMvrnep1ChCpeQDj5u3m1A6JvaMfEcz2dza8SMcC3Y8AJM2gBAc1C5Fh18rcVcVGfSn9KcXWdiTn",
  "key23": "3mzSgeQLEfGTdFjDRcGw5pyr32VR4Py9JySCQ7kQx5MoFNYo5dCPgdxU7K5gwLwJvCgyyD5T6B8KqabD63vPVqdX",
  "key24": "4WdbN3k2Sc7Eb9Ccy3BF1epy6UzgWuRX83GGbHcQY9kkMhxFoFfnGWUnKSgpjgzPSa4WpKhZ7Z5HuetWGwGGmo8a",
  "key25": "3oTYZwfjk1bVpMgewcqKtBoC1jGCpbzjNFtCBFHePQvdkHg6ZmjfBZ97Xy4hdLstd3ChQzaxNUH4Q9Xmmv1Vbfxh",
  "key26": "5C97tXr5x3KDqNFY2avDZXTGZJgEVZ6JapoRB4MPyaVp7pnYCYvxiH9yygCxzU1SVodzM2xmnvGhGEteJjvsv7jg",
  "key27": "4Vc1y2YRnujJLESoecV9rL8gxZ96jFwGPFD9Sk7vHHwtBBUCUjU3NDLWXYeyBsHdEgT33NVu3SPrfFSoWyiLQx7a",
  "key28": "5EpfCE66QwmHHtiw3rRh3gSTcyxVNfNQzNy5zgDQn7Y9Ndo9UBsrHA9gNg3H1B39uBZipQwP4xHoittCDScExTMb",
  "key29": "3c7gWFTws3xowaHL2Q3wMxv5qquCXZ463cNYEZgQTiZBAuJZy1v5idE129m3RF3N5rZDKU8ZUZE6C5ThrF8quX4r",
  "key30": "ndKBh9W21hWMjnpnMA6SdijTbfHU7X2cNBz8oTardNa6vaAxKNW9a4GiwVehRjY96ffKyJeWzvKyQLCqQcVCNwz",
  "key31": "59odWK2VZHn7hdCeaNr5qty4YjbnhRvmAVSZW3QXb73xoPvywdkvkGqu7tcT68eVvhxH6AgVNoesFM8SYdnMpcA5",
  "key32": "2KghX11XVXnwmzxz1WY4qhTo2cV7kJqDacr4Lvvu5PmBD8EfXSh73xkXv7LnBWbELc9KD4tKG3CNn3r2RTsNaDSd",
  "key33": "41W9YRxfxfzeiMamhmokR5i7xc4v8AeEASEcDoFVDVCWca1YZ58TERZnECJ6ZpniMJb9q1ZYRYazBvQxwhRQWeiV",
  "key34": "3Jr9dVbSM7pDPqFzMT2rtT3AsPK9cAkm11zYEjCZbgwcdX4846V5BvMMJaUXSRVCEkd6MgbVpi4cmELy27ui5YfV",
  "key35": "3sXuKoMTHxovTBnAeAZVkjQFMrSRxc5TVvZZjyyQggqNdiEpVg4ugYig7bPNJtGV87gYkv6XSQ2e62SGKy8qps7p",
  "key36": "2bjsCLBN5Jvv2ayEPsAZ4B1Fd6c3CC8sYyhQscZQwjV1aaqxTeTkjFkXLYpuqXH8ApzW3xqWa6kNnb835LcSfiJB",
  "key37": "4XQX1RmTCqJSsVVKXNuWLAFmiBSfmCfXjvthcDFHCGPifet9ZyNgRccCzeRtCKznxRtgMqQqrmizTLXh3vo2yhNc",
  "key38": "38a36wxvksGX79moUdpWCXJhbaSk847FGPk6yyVmKqkmaHbF3jo8CqgRFUu5v9etTdHszcKS9P6QtyVMYVZ2vCAh",
  "key39": "2gXLDDmA3Ad5mycFb4gVYV2CjCiKMPVQS2uS5MmBoFkigk4TD6jBDu1dgbyVFQttcaSCCitnabF4Mpo8SAgz88DH",
  "key40": "5HjCYeMCEwzwaijrm1mhYRtZFZVWT5yWqyW3we1B7CUh212fbkjqZEQzYrMZiss48XmZ6kfnQpZVsUP71XqhzHxP",
  "key41": "LcNiYPbic8P4qRi2KP78jh9KemfyeQUkgpnnXuR8u56JZnmCACJpaXpWubn6NGVM51WMQ3aZAQUKrAKEFxhzvfL",
  "key42": "2VyQXuThTmoqvSVmVqtLpH4BcYJ1j8DN6VUCo4EvBegZBiKugYGNhkBU7Sc1F7mjoE44id2X3XUT7qyQUPPT8q2T"
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
