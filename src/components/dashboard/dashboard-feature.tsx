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
    "2M6advX8NWQR16yAFF1TNdr6mg5Tq8breq7RHAeNWCXgZ4G4qsnfW4b1joTCJkhEHi7Se4QxswKkeJBaMqPy2zi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gn7DCKYttLUebRUxys1PnG7qoRZ6KpgCEiRRhXALuh199VF9evk4fMvMgfp3iht3YG2rCryHXjy26MgbuPqgK17",
  "key1": "QkiF4ToP5AcRDktECry4dcxNDHogqnBsmiXZNUxYs9XmVSJKGUMAjzwpZ8JVvB5jecZ6mGKD5jgj8pja82jkGf5",
  "key2": "2V2C7UFxb8JZJsAMPoRug5rcJPzAyisMe1k2kNzuxRDbjk8KSqi2nH5siqaux1vJV7bu62yun8dRsXAsCXdHbao",
  "key3": "24jqLSGbg8NaoRXPKoggvqx9pyvVstyqAB6D91goYnfEKuhHqUoMrggd7Z8tRQdUHgvKdNSMQHEBARyTJRYjq1yW",
  "key4": "fJtKWcCuQASCFP47h2cfRrhNuMkQ4AfgfyXUikSsZjGcfXVdDZHj4dricNrCQGGQiD17oVDLXi1gdFceRSoYfoD",
  "key5": "62VwcjNrWBwQ3VPRtUMg15jvFmXddcKvGkffmt8bmFkjjLQp31vtGh9nDTLrcWC2NcBNStmcGBsHaDnEVMmhNRrK",
  "key6": "4phd5XHz2dgoz9FWdanc5w39J3G8QhQXhPAyctcqsmj33zzgv8Jfk9gN7Jx9a3s3D6q1QkV4aQS4Khkosw9fmhw2",
  "key7": "43JMJMEp3Rvq7gkCSiuTuEJZpj7UQARWmkVEPkEC8Lt1VYCZmtoi7tgujHCMW2Qn5xB2pgTZPwxuf3UF9vG3kqPv",
  "key8": "3t6JbraYyoRQ7FU5XRejRMHG4EHWp5hN1s9H1dZRNQgZkxDnCW9uxopDTBafa2o1y3XC8t8KemSWkydDvoweJHzz",
  "key9": "2zGusub7qrjiK4z6YLrBXVrmqw9qX8A4j8wkBWFATjh4xYzBib2XDt17hTQC9MDngRHtGTPuxrFBvhwXUGpKVo4c",
  "key10": "4RFXSoqyoDocBkLsai63RBKxVnBb5ebnDdi56NcH4vCMhtWdfmDMUMaoV7biVo4M8ezxHuxrZ9AfTeeUrp2LyVXc",
  "key11": "3RehFMCtNMvD3fPq3N1JKFkBaDrsKu9cXztKXuhwwQVoxtLPRGccBG3h2ZHLgDK6c6WVpdRJp73oJ6vWd14NDV2h",
  "key12": "xsDxe265irSZaJxiTdwptiFEdK6qUGH62DooWPjzTDiN17xeEdCkTBekuYzX7SKJfmtp7RXrNVJ6PQ1nG7VoaUT",
  "key13": "2xNQJZKdCSLf21Yxpn6BCFqWXofWVhNm8iuvvohUtqBJ2QzfJbX24cbC3GTbK1hVBHJG2Gp1db2yTjDEwnbe1L8D",
  "key14": "5Vvxq6W1wcG48Q9AJM46GCKWE1kpMoksyTyutoKiZFXtfFCGWYnB8ydhSAyarWT2SKRuN3fgjYUHpWUNyBVojmLP",
  "key15": "2QvmTeFCgFaY6C9uG9mcRBLK2x6ey4mhfQZwNoWWVAVFQQ4U6sFEUAY8rfAfbt1hCFYjamjWPEzEJ4zEf4uhp7rf",
  "key16": "ou1cpEEz7s5TZ4HERxVVQzk3oLtAVEH4xQXjSUm98bHh31z9kW5xdG3qGmcV2gpMjsH6t2z8KWftjm43Vr7FTKN",
  "key17": "3nu81jy7Gs3S1L6eRJugfsyvnKTdmf1fn5FadNGX3YDThLr1asNSoiwZGkia4i3a9jxYv5SRMMDen3tpZ3XgMCT4",
  "key18": "5PvWNDJtpVkXKK7tQbRcupdgpusaYMVUFw6zFnRevoax4TgqUUKWzPFauUUFnGEsCRL7Noyhw7qTHj3tjG1xUrh9",
  "key19": "2rAFAvAHcHeBiCeazkGY91a4Absqunj1Fagch1Wp7HzXtSZuqdqbezZpRrcj8H6oZ56cM3PL4ypPJgxXoPcZtwWP",
  "key20": "3fxE1jAheDiWCJSvH2FEzbArHCm1iK6vjceCmbuuwQ6EZNbmRKL1sdvq5UtLbLQ3My8bp7FdTMfH1i3zJwSYrTN6",
  "key21": "5FsHcjSgax5yJ38F7nUd1r5wCuDw8dwfP1q3X4fVj3CkmHendP5t1o5SQVFHBpULyaSo7qqDNLE8tUn1JpanfdNM",
  "key22": "2XwjyituDWWc9r4KcX2MTqyFQ4ozKfdXEGm1kxkspzrcmCYvBfSUiNDWtgUbGpP821Ruv5ATL5aN8wuuPwLxvWdV",
  "key23": "5XgVcEryRV9A2Hx3Ftjy6o5MUBeL2bLnTtbzoFKzD5kBhjAKcgY4YYggAg83ercs1Rmt87yXRhbRdzfhgtzyo9xA",
  "key24": "3PfPck1ngJMpfSwGDMvFRtBjK1rxSjYoK9fJtUhs1bf5nJfuahYvzetfKCkG9qYxxukP8ytzQ5tN5jx86jgyka6h",
  "key25": "4HjuhPQUseFwL8mxdsDcZYtTZNwLZmzgQ5ig6iEsaVUPf46dfD1uxSwCwANemP6f61vaNPYopkx3GPYbd9sZj5Lz",
  "key26": "2K9ioEwYvbZvgp24KZ4pdbq855y3hfHkvEgro9mFoGo33VTfb3HhSvnxLypDkAku5ZJ8x1L9JnGSvFhYNa9g4qH9",
  "key27": "4TDBMVa5zyLHT2GtHRinjsGDLn14e8bzUhC58uRFos3ckxXhC8V4CEcxetquwmVVqpnSijC3UXqdDbmJPsC1kFLn",
  "key28": "4wVLptUjWrYPXyRwzWhpKSFchnMqn1naVVsPtf6bikNkXJQVkAeuVnoa41L6UqWqGNCY77PzUvcACkZCfakQ7oYZ",
  "key29": "2Wb6Jsc6eHLnXbikZoqJVHQDQSVTbWDHjRMJ5dTSWgn5zggKpwxNs5y6XsYxPtK7fY5MobBUXeRjQuKk78un46Tm",
  "key30": "5Yg7n9JWuHikwYeYwT5LbSsZbnztV4iDcddzCEnk1mejE66N1AUBb24AznZzXzpzpTRT4jLJNsejeb7S5mVrsAgw",
  "key31": "63bXqSvGRLggok4YFnX8N9rnS9wrPRjQ3tJfbdQJzdj6GYwsSqLMKSVkrUKtLRMaEWdNwsgPv28Z15vLbmAfzZkd"
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
