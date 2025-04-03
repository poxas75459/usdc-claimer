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
    "4x3ZQbjB26zPFykRmv9YckRLCknvEfjRSPmB2bHKmn92TCTwDanNLeYP56T2yFgZZnTnYurEEuH56FpLnaU3NWCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Snv8itdDRN4mfAf6CrCQ273uz9tEszFjjGt7etdAuPFyzAYncNnH4hD7MrDUYZp9Udn326X199sRemSPNADF6Q",
  "key1": "wxSkvhdRNPT9HdkXz57HXE1v4eCnzg2dmXATgiggN3vgNVLXUaWQeZjcUioimb1LW1aTU5HFJrevhMfKURBX9vY",
  "key2": "34pKC9sdvTNUgCC7F4jWejBnPzn4JkayBbAn6MgYGSvKWihUmXBY2Z8uG4SzDMwB6ZHTyahiE6hmBN56vDFUC39T",
  "key3": "56dmPESfJbxXekumydU27QcBgkphzTPM3MyMi9PHmANmegD4fkUAEQsYxQszMGytLWWrzi8RQe8ou4vgAftAismk",
  "key4": "5ZGu7ffwKr3Lq2YRWpJ18ekmk8mg4wxY7hBJTKStX8KHQWJ7hV9WtirVBJj1bjQtSrfq9fUd6shWQ6r5RmP8Y21Z",
  "key5": "mGWB1UZLnyWK8x2N1gGykkYJcgPQEQ4WyPWvsiksCDoPeVUdGzE2NE1ZdjuATfdtq3uXMj8pw5zmu7JucuicFCu",
  "key6": "zndmXCf64zAw89Qch46HVqXav84ZhyRBTmmDR3q6n3Q3Jn6fBUA2P9omiXi8iPKTufwsGC5MAcoz8EX63tde2Xe",
  "key7": "4WWnDZ4aVyHUk2uU5vWTtQ9SuA7vmw1HcDSAawDK582hfHuHfiV6BGBSCkAtt9xjfFFCvmvPGpsv5RmXBKQh2MVH",
  "key8": "5NmuBq6Cxb8tRsjQkPvtkTtE1a7eCjsMGC9TiVSze32XhWy1icjj2mnaDveWw9yAX4JSSrUPXfQikUTuQ27vqSGM",
  "key9": "28aGoYjzaxsdyoPRmoykwnAyTZ3DgV4AKKpq4bWMsjPsk7pmgL7GA4wHJ7D6BbcTkiKauTE5uV2M7sc9XSfz8BPx",
  "key10": "4GDsKGkGjAEvQQG7BTb9icZvcrPdyB79rj5GZjPNqLQjiq6XdHAh49fG2g8NhgD9d3XRwocJYi77a7pYQMfGfsk2",
  "key11": "5pmGh4ewFXQHdW1QxQ3WBW5adxXRnXg5omfk3mqAV8BGifUu7xMTsRvSfNvQ4FwhKuJVTANGwNysUrLjEFmrMYrg",
  "key12": "35chYzA3EVrnfzotvPs17bykWs6iqo7FiZJnHEkSbTMwHGnN9gTHWbyLDymDkcPWLTkkBgYfaJgTMcLxh5AkGxkt",
  "key13": "SRRniZbJQGxNPjPUi7j7HfkDif7NcB2xtd7PQhUooDFJddh7Gof5WupALXh1Y69gywJxNeFwNXFMiee68svWs5S",
  "key14": "HtJrqQRyMj87gxUzdpKFZcAeSkpJzWkxcD2uvWorhNcXXnXPML82CS49V2yL7bnYmfhxQEgWexhaAG7So66eP2R",
  "key15": "2FP4BjKPtZihhytGEoLy5gok5vsRCdPnsoBjZwahGjXdzVKLWB2dXAXeJ2rfxjv4JL4LnaZF8xaJemU3fMjMUHtx",
  "key16": "2L5hGqTzRg6fz3xiu98phs3Ays8oP1Uyg3sMYqtmL8HT8pES39fmAhEDC66T3D1yc3so5Av3A2e73Wj4fQ5Xoacf",
  "key17": "5UVHqryn3AqTEt4a1BHzHevAAmNgMp7gEtsKT14bgiNG5Ch1m4u5UQHyV7ocBv36xYLerSC2h4t8QSAncJUoR3wj",
  "key18": "4achD1VuL7b4dVAA8i2tfjRTGZT5QN2zCFQwrFQLhDwBUkat8VmTumTGYSDA9JVgA54DV3x55Q8xVumVGgfqNxVL",
  "key19": "2fR249oSXUC62zkDVLuJAX8EPSfi1UA4cdpAQzWrh3mJ9dU2RYJxdhoR3fGa2aux27EEcsHPoqCquEGfxyvBWQwg",
  "key20": "j4xJXzHNCE3Gac7RETD6dno8GCZfdjXaZip1ELrhKAo2M3jztze2aM8pcthD6VW8LH7vpkyoZ9RzvEJBhpqAwBU",
  "key21": "4GvUTFUxhpTecNVvcaVcuuTnvNn6nBBfFW2HRydGn4Cpt6Bs24TsbFrii28C83rY2pmXd2Djvj8GWbzWiMsZu88P",
  "key22": "5T1kLz5S3BnTR3Zdr3TyxvjeBLhkVv8KHcKh2e9hGWycfcnrezTFfhjQFN33X4thKbfZx3DZhZpTLBCpzAq8N4kp",
  "key23": "4LF8an9DYBY3D6pfCo5ytr7Lu5c56iv1cfnhGDjmGfdRBP8B5vGo3RSLHM55jnU6GZQsxwgkAD5njNAh7QHW2Zmw",
  "key24": "2dsaAJUZXXMVSKgHKySJ7Z6GFhKY5JfNXebix2eubdc798nmdxoGbqiDEiPNWVs6B9JKumzMain7n7GBd3i9RwsG",
  "key25": "4zzUGwGAwAjXydQkgqUAWqtWFkcD11cZk77cpZLvMqAYAeF2mHF55Uvo5rACHzrjTrt8YCA8BEd5jmvvPoyRvMyn",
  "key26": "3e7VxdvKKHPwLT7jrrqwujQ3iXdypwhHRpZsVCgthM5mWbLWzrhvGBxT7ypLN8aFWw73Ceb94SaArwccZZzuBjap",
  "key27": "eZc2cDKyezPYWxmCGdrKbPHBRSTQKaFXz2jx3QFTGGqnjYLKg1vJAk2vrZWXASLZuRL818tYpuSGa139jkATdFm",
  "key28": "3G1gcK7SnB2oCT4deNatNfw1BqFLoCmub7Yu16EA34ZNXUPvDomXuqW9M7YWeao1B9CeeMcYAx5zm4YPGSfxTAGx",
  "key29": "5i1e7CoPgxC6Pvur4yXnzKoviBNTJ2aLZxXomdKZsPtyBie9hxCkJwB5n9KDPyFmBqRzWA7XUGeNrjnyeEMJ1rHn",
  "key30": "4Z8iWop9qY6a6NRDqvAkP9ZPr7Fpn7Za3NHdJE6qALNmhmkmbzNHLCGy5YNn85SsKbeDUVnYF8qYb74x1EJGMFoe",
  "key31": "2ntmjEQRpLZy4HR3vYtaDehojWah5JQFL1eedbX4wXX1QsiAwi4RonceogK8zUxnLBRVQDKXUXcWvQgxiZqy23Xs",
  "key32": "3NyCwfX6aGozNyB2GBxrDxdyhwrkDf5yNSmW5Paizmz7s4JvVWhT5MZeaqsQDBJceCrvecACwuxD5x8bX7EozrPV"
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
