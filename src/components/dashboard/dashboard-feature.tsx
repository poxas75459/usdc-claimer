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
    "3U7aHSQavkaKvSU5EenFbLf6gdSb4jk9CwR6AqcfNsXVfutMGc6LUUhgHmPaKvyWMBa56dERLfLApNEcWDTarwjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rBAto7mrCJwxZ1yaFtrTfrgKyofFpnpXzEkDV6fFYGDCJvCdbr9sNUuAyBq1dJFQRY8Xov9F4EDZgeV83i6gsHk",
  "key1": "5YBC27agzkKDWNTmFBwLm9PLg5G29VKatCM9VjYbTRDbBpi8LgiX3nraGgNNzBQZ4DvCCigfRXz7AknsYYchhZqM",
  "key2": "5o1qQEJHwBW6s1ZQn2wzQErU9Pre7v96k4KDLCDBFHEdbPcZj8KoTVig6tQYWrxsdcZjcJJpin42G23R8zeifVX2",
  "key3": "3QKT3AUVk8Y7GBgATHpxWKZYagrNWPsekCVuQ2i1kJP7VrG6jmCSpyc1hiba59RZKQ4LN8J7r3x1CDYHdSwqAXFU",
  "key4": "gyBRwSuojdtqinzbyAM5uXsLz6JQgkUHw7g1k8J4BsaDcxPPQzBdAD7QsGqREKTaNrhSfyfsryZ1PCVX55UKjxU",
  "key5": "zciBzpzGvgGGeVNCTJXHX7pF4VrxrdEPbD6Tq2D42qnM5W6pbcBBVR4jZ3BMVnQTiK5tmVShUvkK4mv4ZWGsBvb",
  "key6": "3tyMXVVFvyrV9YNrRfXGB6zp9bRxxTZeWgEeNTMzGNhyYMZSjHwkPcyWacyWL7t4f7bLrWAjtFyjh7Qc9P2hb8Uk",
  "key7": "2SyWfyb3nfdvXRuRU3MDZ63EsfhU2vXAEbbNrjoMNt8sLVvBsNmNNPzxapfTiwj786WLQz65hcK5E87FE1D5GXMr",
  "key8": "4dis8PBGKrGBdaXimWjgqSdmVRJUNiPkVCMfbBoruRmdEBJ6eaYCrHeXjCU2SmQKF2hyaa1SRRbdLfkpuZittkHS",
  "key9": "LzvM8UyzuWEVaCH1nRoiuXS3jkbTiqgMNx2U9EZpAgtTFn68WVVwsGbdfRaPsCPhYfPtpuC3NXW19cQK1EPVtj4",
  "key10": "3NtDVfERDnFNYpsTrp17QYZt7psqisWcg2oXAXzfa2g9G36mGF5cgH8Ysrnp79q1PuNiDXvuyJLf8XdUrGyE3qsX",
  "key11": "cW7B5MhRXJGRPPq9mXWXAD8Y8u6JkC6oASu84MSNPV1SRDmtLbnaekVncyPLxcmFz13JHDfKYq1jx3HxF1N7MSw",
  "key12": "C7SUz9jPLFiGBwQttEcTgek2h5PmRZL38gddFMQuyzWzcXBkj7pYYTirTjzg6GRPNXQ9pGgsB8Uk7BT3ojScFKV",
  "key13": "5Wqou55b4Vkrj6jhhDSKzaR43fNYsc2JDoChRVNcqoTtH7Qjfc8biJgoqvZJsnAMcCUCMLcJjzNWgGEsiqunGwvy",
  "key14": "RW3W684d9TJetpG3CCeKZp8maxTnYtperxiGcMaz5j448tftfaZtsgbYkeqYn6EyCLa4L99dibbhRVqqN367D2R",
  "key15": "43RvCr5HR7c3zsJpr7onx2W4zdt81PKoKcGvgm5y569yHNyS4HXwEoizrQJ5GMBo3f34oi1mb8aMs2rcnFLbPDcv",
  "key16": "5HKWYUeU8jYqdrokYs31jANEabdkZV2tqeVX2nN3X6CNmUJiRVp6LKsQHbTJWbU7nSk3uB9gvVUsxxZ5dGUqCFDG",
  "key17": "5ubjze5129bQuBSBVL1aMwcJkx596VQqdYFdzKFBjHJXQTbpA2EsH5xje5UbT1Bfck6kmqNN6Z46MDJGw1XzTeVm",
  "key18": "3p5tNGKpR8fjthzsDyMeMAULWUi7SUd6mrDTji394XRgVzLePYWJBWwTrkQTNTjSGqcTqhcqaKH5CuLgBsVygTs5",
  "key19": "3G5FFJL9SZk2LrYStL1DR3nKDyUeVmhQW6xj6Z1iJDdtCCogMLS5Y9nR2hDQgQ8ZfkRbFUd14fqRhqst9b9x6iJH",
  "key20": "4YTdP46mYS3khWdL54sg6qcqsgX2JcEsKaR8TDaobheoSv49QtqwWzswqsrfeMDDtYD2uPhZjTynBdK9FBJwjgr5",
  "key21": "2jDPfim2yuwvKqssaPbpuuYSbPYPxkX26cAsadMBmXFMEPJ78Y4Krx3cHASETg2MsbivSaXQ5ztoMeKB6Cv653GZ",
  "key22": "Vr5LBJb1ifVnwNwyuDwQ6KzEYseTDtGNUvVaBy9AJ84NbGnky7j6rudAmfo4g7Kab9q2HY4F9FZLSuu1vSofy4T",
  "key23": "5HJD3qF6obTBfnYMannoQM5318JikdgNpkD8gGgxU3KAv5b1A3pojZCo6eGf1wE22xhu5P5Xa1SPaZKZD9AoFpYy",
  "key24": "4LnZ4CUaaUFC96LxVdeby4B1v6ui3NfkJxh3N97DRqAPHEfGNLMoKE7vANTk6Mxf3G6gm9fWxZsVgjSHZzXkspQ8",
  "key25": "63FEyXgC3NDdYRcXwYM7dcfZe45MLAgd1CfLux7Br6F3nwK9cXWYgowJJj6SBssyrEjpsPy9ZKboPkr7qMm7dmbR",
  "key26": "2p7cYHCXs9z7nzm8KiVHJCRaGNQex2RPTYFGAXJbLxq6pCq1YAjkYPeVYacEYoYHXxoBakKYXvNg1AaXniJK5Ktj",
  "key27": "bYtydnbpaMK4JdmGGa3jcCiZiSYdQmLPKMrfAmLuDjVStcA1dg13f4dfC4sy9JCVj4voZv91PRaRPhv2FpvoyDL",
  "key28": "5UybmgAXbb8a3WdtLDayRPapouFr5be3UgipBU8zxWdgsXSW1PCQAx8bA479xb27LWa9c8YzW6MjiZSNP8saWuyi",
  "key29": "3BsucBJArJ6VTwnhd6wnP57Ecww9UFWk1VFRvJhyQzLytaJy15UuGwZ8MquVZT8DbGL9QryxqCVPwVZytz8tGCWJ",
  "key30": "2vjsfnivQiAf44rgaV2rEBKN1utXjAZfhFF4LXrGuGQfXxNC4qYyic1XiTNcRSnQzdpJ2u2THptVbqd7i6omUyJQ"
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
