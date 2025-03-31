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
    "4BDm8h4fF8XdhhKJp1pnLgZo541WuMkFYLSRsFBB8mUPCiTM4Hs165Sjs1oUfBpnfVYtqoB6UDejdR6pWZjJHsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fC2LeEmzW7fzoykdp5r5dLwexXphKVAJWj61Bg981bSCvVx3yPuzER4E1b6dovP6wBXBzZi87xoj5cAgEiAwkQo",
  "key1": "4QjjqmqoZoVrre9YhcY4cJt8oiDJzqYy5URUFdwzmiadshTSHj5Ekgsvuh7xGuJzSey4v58T2PgLGYt9qfLy672t",
  "key2": "37FmXHq22gUZPaY3jvR39xYSzB9tmDGiDM2HyJ7Dv8kby2Ybbtde6fcrAseTApZeno89sn4CebN7o9dgRgAU6mvz",
  "key3": "4a7HJMvxVAAAoRBzxLDSigiGC4Z5t69oN6QUi3t3DBbyBZzVVF5kkoiaY696zU2P8Awf1RxbeEm4gzfUZNB5W1pu",
  "key4": "DPYEUTKG1dqYhWuEiWSchGMw3HMrfm9tHtWgc3rq6BNRqM2jgZYFWCHrLxG68oU3zrp54fYoE2pHghAVhSU1TTC",
  "key5": "4ZmDoFK8znj91PyEiHyhW72uRbR9aAs1kctjT1r12dqAvXBGH9BFY5Da7s6KMeLDUA7jGkENRGXdBf9jtKFZXyLS",
  "key6": "8R3xJYmThuTk8jRsjK4BwJbzFAUqqMSyE8GNUWdSAgnF5zGuprjfNAzSZjMFY63BAAUqtArtiwAyjcuxwfSg5qn",
  "key7": "bES2wmgtYEwricGE1GhamgsD5MSP7xVVWuKKwQ2MLXaRGZ43fLtDXCtUYrDa2ACkSigpSbWKsQktHtb9fAjaWgm",
  "key8": "37JGk8qrAYkXHMjHW49QHzV16EcRu6LeVTavyTSx2xNgn7jZbNuVRtxbNPjsjDT9X15mSMomd6YyDUSKfpYePycB",
  "key9": "3aggoCUYKDWQK82wUfZVo18CJn9QAkqR6KCgHsEhb3Ku8phuyZptQwRViPkrkCQyQaynTHcZGFxZxnFwxe6Jmkww",
  "key10": "5DZ14pCxjnxZGedtnSif2NUHURLR3DQ4irjDvLh4FkPgbFVWzoDZzVDK8TDBZisvNX4srjtUetFjbPPMpbYteQam",
  "key11": "3dxBsWmZi1TEXxhbdxZFvdc5VaXZqJAAW5SbZfYpTZHHmCSRthV9yJ8VTkjrNDtTbH8XLuxvaXYv2oFbvnWYPb5D",
  "key12": "5hAU8GhhpcVwjzTaWq671aPrLxSbKZW1sFm6UJ9Tp425fnKU3e3aRCvN4prhWiY9B2xcYCHGRvkAM7nFW44pDWFX",
  "key13": "5bjW8VbvnhrMdyPZDyG4B2opDnWXTTKU7pFcSK7DXuekv7obu5qB4SGCzYnSkHuBEGar1bodhvgBbhghTG4qHVdN",
  "key14": "2qKL4JUnscqToSPR7oHfh7JAymt8WBy6FFbD7UQXcgPjjEXi1ybCGdgT7De4Nyazsiz2RoWMVf5zChDcgVQvqKwm",
  "key15": "35MV5eH2JRqoUQuco7jaWompT4gmBNUTSMsSiFaeEkoWx9Rr4pTBHQf6DD6Fb4RoaxrcBsQ7W6a9tmcrz2vT1mmC",
  "key16": "3hMyxaEvz3482j4LE2P6q5kuPyqmHxktfc39ig9dg5s2BUU5A4Q45WJcW4wukHKLXEnACbdZCdiEBzSjNRkm7rfY",
  "key17": "48KyXSEMbC6cnyoj8jvhrVXAEVAwmWEEovxohuRtFfKXJdGLfM1k7Qpam2G9QbVUdxKdjobuzVM2xxmXWwrw1vEJ",
  "key18": "5khvPTDXgwhEWBxPKPhh33Lop1NZBxTnGADTiLjLMTmYD3Bu8tnKvktju9bMbxKHcGkBb98gAi3aRmBeWexZqHXz",
  "key19": "5M3b4m6KVoShw2EnLFT6n76u6oFAvVLS6T8HEZu7cmQRiL2PEExk9jC53pPmYH4Wy3aLnpHkJVRPvs7xnSqpptka",
  "key20": "vR7xogsoZAaVzmBmdNaFnQpEdknyzm52KF4ejrubgBc5ThDLY9ZQPk2yj5Fo8HnFm6gtrVpF49W2ffkrqmZ6HW5",
  "key21": "3j4BTvUQtCgygYqAMcdV92Ccx3tJXnX8uuM6dNeUp3pYMYfTvPwXvbFXmbXzSJejWBka8RVTBJ1CfaeGsKm6VPMG",
  "key22": "2bayGXcSDDs4Rf6MAGsczQLx3ZgtTgvbvsRM4t8ZkptwM3BkgmYrYFzK2v7cwYJfREST6smtAoFStWLgd8WfK1h1",
  "key23": "4gs3jUyVZdcDbPwCLdfeHCQX9St8TFiuGbpHJNxc82FVBV9SovfQntx74Zc5NDX54vRmSqAhnFeNSWeR2GznNve7",
  "key24": "2e8T3ZTrRwbXfyaHRUpY79bNGPfgQtizpYu1no8qhdyAujm4BpES7zwwTvysnrH5eVEULAvWhcnescXFiA4Adm9W",
  "key25": "2ycxegrGLbnUSLKFm4Pecbvhsq53y5FeWeYdo8HVyVgWiyG6GPuk4aTPxK9mzhEnve8ztQCs77Wm7PSkSYR1LwQf",
  "key26": "4PEoprwsDEMXJjmqNA6bBboKDqYftqvVH23qDHFYR8SQqhA9t9mQy2fyxgZH4mRjdhDoKf3Zo6tVYNDsWBEgXQxX",
  "key27": "fEs7uMCjxr9hZYj2CJuHHuKDsZkEc859Ch7JDyKJHQGCRZA5a8QsFEjLWnfGeTHnPH96ToSoBbSedFUGDnK75Cm",
  "key28": "44itBe19wLKD3epVthStciWabp5ttF2s3N63nzpwFDRZhzXGYD2LBP96FVNqtezDeayEvB1pVydhuz9ySchKTfLF",
  "key29": "4prVshKeeU9XeDbVwSSV81vSwFUBVmG4gb1EHxo5zrFTaCGqWCjj558rFBEB78BvXeor3tFuMGzphLkrjcgPK3QV",
  "key30": "39ByFKKDDEk2KGm4cvDjyu4mDfJ9DYW8RK8yDJYXqeMPW3VEiZiXfkPRTfuT2MUcxEgmCMREKvHxqg79TjiMvhbA"
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
