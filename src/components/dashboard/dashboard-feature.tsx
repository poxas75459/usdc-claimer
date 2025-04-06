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
    "3oy2d9Y2cax9yoAijWgcdb8NPWnWRZrD7tESMUnYdjJMUS5hzPvgiSwREs6sVV84v27sK2YgAd7WedQRjHKjmbNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kLRizpAYkpQbLcvbkexEKBQM3z7mcvYsebxDum6yABExdt17L9AEpkGz1ycXULrZnGs9AmjpJV8VhmdeDZnZWu9",
  "key1": "28fB6kb1uq1EngtTxc9oCYEYpdwKvvmfzV693YjZLaFURRFBCcC2Gx5NR72ji5Hiva7Jd9ZH2aQHYWhTximhDB4G",
  "key2": "4H9ekuJ7SxcjPujZ23yT56SZKrn4NQ5jFqBzXpKUYN7pFZMAFjcLgYRB68i1xdVbJ1ZpwZSQDDnBU5Zs6ZwPkq6j",
  "key3": "gBi3HQ1nbxhYvQt7s7hvMaJDhuCwzXJMW4cicTfpKctKhNaWSpawrCMWb1iyL9Q5r6yT76RgZb3mbmBKqrxLBRf",
  "key4": "5t9EgLwUPShkKcpYcYHysVBzAqAZ5o3kZPjDr36fuUAoMqL1LkAZDymEYB8voR4z7n4kU3SAKriPo6uiqknS9kYF",
  "key5": "5G3f7z1LUoCZeqcPX5Jvciy9hBX9rPJbdi4BkL8izxVaWZNM2fsL7f2yZ9AD2k8bdaR4zNXVm867AyGdJhFMdXMw",
  "key6": "25RQzLqSNf8GcQ9iMZPW7HENbCX1EjuiAo4ayCsRK99WL3B9iPo8xEesaPraSUdxR4ZpbTdhF8xUdqnAP94KBeZT",
  "key7": "3nT5rfQYWcCEnNAmEbcDJ7UgPKv558M1G1cpeDom741244jYSk8nES3xTPdv4umc5EcJ177KwAZb6B7542EEh8et",
  "key8": "2kyJD9wCaooAFK4Bjhj75edfa8LjPTuabyp9jF34geJiLKCyeHE8urRLoJvsj7jFXX9bKf9UEVhMWW5z5B8BeCqh",
  "key9": "GM8fX8nGgHMiFSbbp4Wde6U3DeJSZiSdXs1wcNovyBBpg4hpr2P1vrijfnt3mgqnMA3cgZrzQUqQUJjQbXopnB3",
  "key10": "3mZGu8JarPX2gSXFNfmL8owJgVZfravRJRUyJbwTSBGDkCnEWqS7jMPLki7E4SzkDXeSNSQBsbH5jPvZvqa1bMBa",
  "key11": "5469ucdCxr5ef8ZWnh6f6172zzgL2oE4bpSCCZxJaqfHcqzGFTac9AGdMs9v3DvNrt2nNNsU2UUET3oz4N5RsZmP",
  "key12": "2sfAyCB8sUXSKPrdJxHAgDoMLMgufPKKkCsJJWWQw6uG628e7sKWZ3SJvS7WbugEroEZkeACegkz4HAVpnJkwqFn",
  "key13": "2v9pCyx4J6m3qcaUkAiH84tAdYXz6r9nvm3JQ1yMNAKDEMKqFUHKcaPPtiXzM2ndSmEQh8EtrogkfbzXXDGoNs6u",
  "key14": "4tP65UUTbxMzNThfVCKkJLwMBfxBM4XdZsWX8ycwFnm4z5gbBcuQ16PyLzC6wwdM5cd6YPtF4LR8VCdQqjsNmoTd",
  "key15": "TNEwwPXEogkpehuXNyWKxhyWiiTFwtT3m7D287mMqcdmsE1pwKfg6y11dEGtixXdohC9iRQxqHHLTAH6dokQ4ac",
  "key16": "4kKLy7zRQmPn5Bh3tA5cdrAgB1hT1Myf1KNCQvD5DcXtVHJKSPS2egNHYyHhBqDWiUoJijLzxdQSgzb1EbnxK3JT",
  "key17": "kRA3XUyuZdvvb4R5FF1Aqz2hrn7RnrNX8toFUkCbHL2RiSgMHqzkiAX6xiLAb6Dt9xpf6XrwPR1G5GeCW9tCPAs",
  "key18": "3hd5xnnoGDwddJpkPJbd7k5my4yAwUTBx9vPVKxtXYSmm1j3QBkKCGPdSYL2fPXpE1oqErLRKjav6q6of4SbLXyj",
  "key19": "LdN4R5VmwMEjS4CnVGobbLs5DxFSWc3yNEzXKracjGRbnR8SCzFFx76hTTr8wxh6YLrFERHzBNoLd1GiBrhXG5J",
  "key20": "2cKXtH63AhDhqjinB3y9ymKmq8EKW1PpyB47JF6wEXABqEDik47nkYXW8FaPFAAponJ7HvJpLutsUENDnAuWYyZY",
  "key21": "5fmVyhX5g5G2QiGn4xt1c6dLSjNG6wzS3rHMoDHjUyJA9oFWANpsjDjehmW8wMathmpnVFgqra2tqApCryrD5gwX",
  "key22": "4LXceA2ktNf8AuekNkz4ZHA4F71C3NjtTHstidhqdsbippReewJvMaXummLCoXAG7rCxPg8X677sDhFY2ENDQx9s",
  "key23": "2SNnEzYf7EaCRoQD9fjJtXVTCbwdzhoMyzjXvUtxhR3aXpxWf1Gtt6ew4TweUSLLnnNa1xQ9iy3urVkyuxAsC1RW",
  "key24": "qLuYN8n8MphYjBqq8Qk1r4ysdV2tAyVuo2gsAUVdW8sdQh8Bbv4X3uBb6ArKdNrkdXbZEGVanXq9eotrNnNSbDZ",
  "key25": "5SqEEkUh9Bu2U3qw84k4Bsfc8ZzZzMBH5ucyWUf2PzHBLsadnPGKALMSsbu56VchPVEcVoCkm9u82S1UdiFjiGRx",
  "key26": "57c6LBC5osijPmP4PTNJjD5CnAbNxjXmLF4HXArJRtme27FgZ9mMg3V4fbvPRpEWvLxv6ZHTUNQmEuUnpbbCZmhj",
  "key27": "2sfi2WLaiEmW2jCK2qKBQnDNDNPLphMGRRb8BDPZ6USs7TNnt83d9SqmTZVe2g2PdRgF3dji7tw97Lqk2J96FXmA",
  "key28": "4f6FmS8EYif153vvRaCKSUmzRrHqc8hjTTesYyKYstHPZwMqNFYp2e8Ga4tQDbFDPk4kQMP9wmahgPWQ7UdZE16",
  "key29": "5RK5WrC2GhQTcFtiym3cmjdrSLaqFuFpUhici7KkkHyFgTvePf2aM7Guzh5MFTXvV7msGtC69jAsXnwpJE4HfPx4",
  "key30": "3BHSHmSeBQrJhZw8MoumJwZXpND4AiLYu1aydW8WwWcWpDwUSg2Aen6Ck8QKWMHVizEmWnPxtFLLx24UfzkihHSc",
  "key31": "4zDVDXcvj9GbsGi7fbvZej4QnKUpsfgE6qj7521y15kJebfymrjswHmD5YsxcZG1rDQpVppLYqZZcejyvXc1wV5X",
  "key32": "25mhJAa35Ux86Ruxkeqwr48VRpXHYFCE5a6XMTeXoW4cMyrERTfs8bpzqYBBsDxdgaqzBu3qmFnDJJM8tmSUdL5k",
  "key33": "5iiAKromKUa9X6Ksf1Vfeshe5i3ZFomJRNRP5aBT3DXfW1H2wBchKMArELKSGeiNLXzgiQxEC9Z14RGvxQfnpEeg",
  "key34": "2miD19fujsfZKYyPKJZCYZZwMc734tsWeCdBSZSqDjGY9jgfuMC8z8RLoAMrinFXSEJbD5rW96F89AunSJn9M1WQ",
  "key35": "5qjuKxFQBWKx1S1cUK5HaoEqxV4sFV87fsefc1kxsBQNVgUNuiiS9UgvnmjHqfcJyZCSzxB6yATR1EmrxaVp3rYx",
  "key36": "XNtJGwEwsWbcHUN7zP6YUgaCFTeSgNCVTaBvG2zSjZmtF1DpzCuuPrBM8bFhjJcDEnQkLWW4R3a13gnwYUJmBHN",
  "key37": "3L1WqiujSaW7djwrNGWrCYASbLGPXYJVw5var1r3ksc7NbwfAwuWDGq8inqAAj685CaLjXMViG3tCy4bis2fhWbC",
  "key38": "5dVTs7yQJf6j6brrxXkjnQfjge2S4orzaofbCVDrbMJ6wz1hP9jz8GL9Eiw4Skgxdm58h3ndqrrKWrsNK95Z38FE",
  "key39": "3GpMmMUPjS8fQqsRCCP1kerPT6dt4We2jteubfuKQGbR8PfVMNQUu2o3Ky7dMVNHpsiCDvvedXpDA2Q2VXhRWnRX",
  "key40": "4k424SVuQbVpGxNgZ8Xdz2Yc65JSGYJRYMnhCTcbKpoJ5Y9zRWEoQQcZY8G9XEWiRyEqDFUWMrgwyQx9dCuednAd",
  "key41": "SmrzyXFrY8AK4iZie6yqECRfhrv3QxFnbhFB6UtXvr9tenUYxrefGNxRvzUWdUbVdupP3WoywH6o9UkVxeXE2Zr",
  "key42": "61ctAVF7j49go8LRNeAKTjEq1ijto6XAMpCcLHSGTNZdKiE2tZ3PvvAyNGorPzDdbe38L3NQarM7gdzYAT754A8Q"
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
