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
    "4shY5RbjuTKjU8f58BiBL3r4CkrHZQrPtJHv7qw4BVu8bvVVn6DRe3BVwXTJNbVoL1wMHar4AqSQoSZKkjz32sy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mtYRXTX7rWLZm9XyhjFESWuttWgcN6hhvRUocP6JQh3n3SFq7eAWg4R8811KyKbrNfd2C9actcnKrkVkWtSaqwm",
  "key1": "9aJpbA7dcrjLnDNDXJKLubdrdDN5s9qhWi8JBuAv1Cq6G2vdezqSQG7Rj4LYSdSaTCNhz5DdGENX2QtBs1c8fet",
  "key2": "2pyczzurJpFAziuv3eqNvp88XU5aSFkvFwuUvmUYrU2nNsetD43BJGQ92BhAXKbMcvG9f5itMaYMZZ2NJ8CY2xEs",
  "key3": "41N4CxLg1z94JeQRGV6wW6vXCLtkFRjkvZjPxLvwLcXYKEDYWVCRohWpfR7ghdgFCkiaarXab7jrnb26BLwZhqnD",
  "key4": "316qbZRKUuTeRXdnEGxX9U8J1HXbfo1TnLRzxdTQR9fMQESREF72TEykzMWifUQKc56ArTzhvXLpTzAhhFhr1U9A",
  "key5": "jMKE7xcLYNuJsvG4tQ8QLf9NZtrbX5ovk5CrrFUxrEtRiN2Qz4zPhWwqsnuEsGbVC5JZYskqjiJJzKUuHAqEKCf",
  "key6": "3ttEvi4AYYFZLDaE25WPqgkggdYNusAiszhvAzJDzqrtBQPr9L3SpCBbHg85sRsmygCce1aPLDy4nVbnGTWVyZ5o",
  "key7": "4qUxnq4845wuCHPQKam9UkaGMCtyLaz58A1L9f9iRvhmBKoBH8btLfq6kDuCK64RT5ajt6wDcQpTCERap4uUkdkE",
  "key8": "zPp2kTXGcAX5LW9KrR16YXXHjDexSBm41QcXHMoNt8jW6hxNMoKzyYokApCt3rebCcTD94zugz3N2EiufvPvuXM",
  "key9": "4TWvRfVcpchnt5npwL4mAvTuJsKrPyWewGQ7wTVreEcLQqppbhdLkf4nMNzaaqCX9d4PQTAyqfaFDLAqiHz5y8NH",
  "key10": "3KesKhgvgaau2wW15oGRhiPedHyc6TQs8VZxdpGNkPXXhdP3aX84Fd3dUGqZi4k3hFfdKMaVK9nF8dpbaiDxgj52",
  "key11": "2vmo5KH6zVxJsLGfvt2YthrWPPkD7YbtFFx3Am3Sey14odtwrrJP6yMGHBzAqQC589hMYhoriUgaeWpksLUKVtMb",
  "key12": "9bnZef6NNRFHvmugzy5pq9EexPkUKjCvYJHZunw4MumSAmPjPiYEfMXApgAFD2mD8JNLodiz2SSAXSraENP8LVK",
  "key13": "3zZCAnx1LEqyKx7heWUMTDVq3dTZYUZGSLehhJDeQzhSEmieSEoCo2MM7zrXnigBYsKntEvwnuoUnJkkJmB8LU9W",
  "key14": "2RiZ5bobDiznmAfbRB5pWnv4xkvWQfktyBLQ2iHSFfsbpor2jVH1UBaidzxEUVi9NSQEFVACJ6NX7wUR4pVc6FzU",
  "key15": "551S6K4mzcVpYvd8zaJtj9ZyhM92VLY8XmoDuFj6Q6VkYbwtxQHX2QRbF8Nc9R2GhgrshqhtsxdetWyvb1Bh7sS",
  "key16": "48xoGYQ8mXZ7FK7t4ti3qEFmycFth6frqf28zgYvAu2392uqgxBiWPKrb5QVz5a3peVgdmCHpzoWqpvrv9Pys1an",
  "key17": "4c4FuikDaQEAWja49gdkHb44UR5yZTvFyTrntrNAGbrQ56keXXjMSmCf5Dk1Fz9KpBMjUn9doGNDmo6NrS6PoW93",
  "key18": "4sMpkVF9eHbDFxb19p3x2u5muQASBMXiSi15cdVZf7zScrvYBVwtxseoPJ2ArKouQzZCjD7YZwMHpyUcmLvoDFuq",
  "key19": "21LWRb8PTWd64EdgFLjSpGFFJ6sFY175JzDB4dEBo1MDERd6qfUs3ZoSBsKB1m6eHUm3Se8JC8BnCZFXxViVz6es",
  "key20": "2zeHyjdQPSLCRifEdTFbcf7dTsfxfanxqcwzbX3zJ9v2mNHokkwdn5M9wAo4hkHXDMCCbxb3qhiYVePa4CPWTkZV",
  "key21": "emw21R1B8kyyetTRe4asbEV27vtPG8BJtxS9jHekd4yMDx1saQhPCAfVgocy31g4Mu5Z4Q8DiyFx4BVbu5QM6Cx",
  "key22": "2LdykEykhid4nqharMTGB9yYvQrdmM4xaSrxhEjtmp5srezUMC9T1VxaGuKLw2ZBsQMH1S8udeRLLHcJfVjZZdP6",
  "key23": "3VT1bB8RkgW1ZPDBQoMzekkCWpNtVpqaPPX4gXR2j7KFejSs69FzhEuJqEDA1R3LMFfX81BhSiYiV2dKZ513wxjq",
  "key24": "tCujcgTrUsddEAuRZmkTTpWkSyj2Rhpt3uqSjAznxp6qrmUMJoJu7tS1nnRBw5W1HxqQLP7vpUgVHtd8kAPW3JS",
  "key25": "kUBuaxv7hjSCfpGNNSUXkrUFf75yUQ6PtDZbkgXPGLPWCaQu7FZjpNsSCkjUEViGZcgTiqmmfA6NcJJRFZLBH8u",
  "key26": "bCKWos7FTwwKBjDZ8SupCFxK5Q7yPxrNncznmAsMSegPN7m7BGUXMTJBKKjoD8bW4bU2nqCLectCQdASJSvJBbV",
  "key27": "5Mknb1a81MhFDb2GCSRoT2Dqe4BAkH3f9UnyS3D3RbBi7csHenZgjKmDcL7g4gAj6bdt8s1kRwyi5sqmdr3KgFBx",
  "key28": "4zGXGNi1ZmaTsQewCshYhTWdGSrP5f4L4SsNPqkN4KCJYtbEbjmKbDvGySN6PhK5pgMseUrP5sbaiBu6Zbw5LD7J",
  "key29": "4sY6TgmnrjmPgstNYBL7vVXuwfPg5ixSkakTXr7h9A6gXA1BZPfs4p9PU8tz8YGK88PfZ2PYGdyDs2HPakSe6qhd",
  "key30": "2LP3F4VswadPaauHUfKCHzc6bwuedFfzE6MT7vJAFkNwNXGA9CcfgyEL6e3He7168H2ZM1ZvJWZ37wtty4uahcoR",
  "key31": "4EJ7maqEr2CftfbEh9BbxzTJDZV4oEkD1hfy6C2aVnWKWigkbP3nodgUAcoAAXh5CVhh3E5kkRtpgG56GxqHgyg8",
  "key32": "3ocQ99tmo1FZfEkh18jY2gi9GLFDNk1UVxRUJQWAPykjUgwoK5z5yfZQqs7knBk5uexYD6HaJm8od7ZDEY1N39hm",
  "key33": "Wu1UJgp8FucxM97Wus9uC72RaXrKcFe8HguMJwx3yCdr7Ck2NQ72mUGJc8s4YZjy1ZAgM7WDVhUHE5bhSEqbnHk",
  "key34": "5k4zM2w8Bx86YMHNTcoTSKaC4YeZUsW4iUUoHPiBcfpc7pWbVqJpJ7qwAQgZqFVj4Nn4QF58UPM2B1VogXdMbkAu",
  "key35": "G2eSraeeemofucL6pue3NMKxtC8vGvrpfgstSQq5EkQngKBcfqD8K5PsjLwrPkxgmACWwBC15hdbEFARMxJFtb3",
  "key36": "5D86bUQimoHFu7oC1dvUF5fA5uZJSixtybbZSC11AmcVJYjFRt7bVn8DpDYTKA2xgr8woMVQ33JvceRYMRcNSYG",
  "key37": "5byA9qwNGDSBYStZDB2okWmvez136n15tXMaNgoUHhUxhQqtUvTbXsgvCj2hRWx5KCEMftZoVUMK9JAfvCb45S2v",
  "key38": "2GkeuYFyGxAH8w2Gzy3HcNHSzUu27ZXGEx767ewCYKpp83zVJCyBomXdS9uoXZiXBRgoXfJdEpBeybvYMpYYbJbB",
  "key39": "5xfcsJzrzbiT2gX764HhRyELaF9X9whim7a6K7nF7g5ZK7C6sCAbZSerZxX9GcUVKr6skQECn4Kux17x3t9U1iCV",
  "key40": "5tM5rhWNwmpjRgTdBiwFPLthGhtAHtstCyZHif3XGCmw5Hg5vjkB642vjhqL3bwLphhtfbzQnSE1ezd5oTLNacyN",
  "key41": "3iRguvMtHhMU8v6CwFmg6NJ5Pvuf7v9ctphAPshnUYNTRAMsAJPaQdFr37ANB6xjX5MhaXjkKuTam4PhCjKNqVpD"
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
