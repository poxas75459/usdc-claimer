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
    "4DfkzWMXHZftXaLZaVpzEudaSDGcFQsSrqaW6a5qj3PzZqXUtM7QhM4KuJ3vzfn87oVgbpQ2ZiDReiap28gKYykU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49cgfikunu4EWM1WMqpvsKaaprcgwA6neBpCi9KU2EJ4eLMBCupkTBugaExcEcooGUK5WGbAtgUYMBq5u3ogxDFH",
  "key1": "3JbUw3PFwb4sD4SMaPbnExECiU6bXLVrxxdEUvKbvFXoqvRXnxeih5NbDzWAmHRVFc54DdRDzA6AjuiiCn4mBVYE",
  "key2": "2dXM745qzVRoa69L438QYBFYRvEuMr9qDBSuGSjDo5xVkbJd1RCkyC26DktiY7owypaHy2CDuUee3HquNmWc3dnr",
  "key3": "sMrkzkZA932qJH7HKPu1LfdS4dWCvgQ57Nxt7rdReXngNXZjraAWusS9bLtG7qAW7KfM4bHhrLFfZyurRjVkngR",
  "key4": "kUssnFnYhMRDR9C2MyNZZa3KZby3X2G8b5iqTCLJJpE3MANS7C2pRT8Je2Hpi9KZXHfscSqaLyKQaQ5FPXATM5x",
  "key5": "4FA8RrvSJhtU6ZuTedJNxaLCeMiqJchZHdJ1trov1Yu2GqPmcihNiU8uAeaZpFvLk77YJHgqzvvQE3uQtUmQ3PmH",
  "key6": "38ew3nsVN5uHt7sFJptANzGXh2SUokr5yVmb2xJSKPtG4Vryr4EkjsztT5o231mDhAwv4TuDYcRYLfSDCZvXxtis",
  "key7": "dKe7NuPaWhpSW1h22FYgWXLEmatsaRrnn3peV91eZJqXCLN3DmJbG4X9TV7fgKNjnRFKvq6oTHfGowUnkHQcDY2",
  "key8": "5hYUXkphZvFqpo6xq8dyMA3eJhnJApdhnkyKjMu9X5vEjwtA4aZzA6hZKotZ2mvzQ3Fsy9ZYVrg7bC1Ez7mny93U",
  "key9": "538YBstsPjcjZxq9fGNFXENzArXgXTME5XbBu83mgiGH19hAV62jougXuzDMTY2yzKfScCbGRRoHYV55rRjewrEj",
  "key10": "4NbusmZLwkbXJGrfzvP6FQwK95SP4ePrc85NnBggJhbjHKAL4iErfZnd4RtGVGmK21PtGmBJoEr3JhR4ks8UoaN5",
  "key11": "8eQBCjpMn3xEkmmvmZrmFcSZjizMeFbcGDdvgZSEQZsKe65Sxo545ae5RrduAFo4fbf37HaZGjafefZMWBXKwau",
  "key12": "5ZYBGV1YQ88dVgapGJc2gQc7qEQCe7GXsRfYUrbk2h6dbdwr5yQRzLBz2mFdk2pJMZqbS8YoRzirDJwhR6etZdLJ",
  "key13": "4gDNNipjupgsEfd8DHXwTQ9rKLBDrSZ4z5Ah2oZ5tRcbsDTeduigaWV5PZ4XHRzchUgJwSSACySVrRoXvoNsHEUh",
  "key14": "TGof8down4b6NGuDAqi6avd1zrSadZpVYD9ARuor17TtRh4fB5jVLbYWi2yUCzzPDVxkx6nX9UhCPS8HQtQr4sq",
  "key15": "2FVByekEobhuPzzo6yeRb6ReaxjsZZUFdeYfKFcoRveeAq35uRfqPbcU5Ts8mna7zdMWyjx615czcTigJQSLgiY5",
  "key16": "BNprZFHRsTtZGgWYmPsC5F4SkHpykk1ZU1Nyv3j4X1U3heNtF5sieV4SjxqCgzNBsYp3w9tUowfcE9KkYJieUQp",
  "key17": "hKZfXUvjBMDmAkDMyS8BD9S9PV7LeTTR9YWBjsmoix4Cz3FXRhLqDrVKkTrYeetM7HSKrTbWTp9BwJnyNELpi9J",
  "key18": "2sECfMM5KBkBRaxsq93oV1no9edgSnoEerSYncdXxAzWBb3aDzjJhd4dxiRgqMGicthTTkVCAVfmwprarrSDkCXh",
  "key19": "5u4GkorhNeTJKn9pCMynG7QxnN1ERjpZF2mkfhsWa3VmL6RDkprt4tpZYrvwYsrWxBoRPHNxVkiyQ2yLdPYKq4jW",
  "key20": "5oYqABsPkEf4AMm99vBf51iXhnPDXbZt9uwRpMby5X552SGRLsnebMgcCQWugntCtxgySY1uG7JXYfbnu4yraFKF",
  "key21": "3Bu9maD1mGiQAf97VfEU5AiaUkXhGGs9CqEbZ13zpa2P5Wd2k888Ba8aaKB24nJWWw4QEeRvpnM5QYCjeweeu8R5",
  "key22": "23ACQrWcZpEExDjwikbQVhHDkNMomFfJN5cSGxtzx7kw54Utt9ndrdRe6k1emvqC7YmpUNuMFXQCykq23pKNRaFd",
  "key23": "5hX9YBYRZ66yrU7239hmDzGuog3bXwbZULsfb2iZrR8uYv6EeUSoB151fapWQJ7C1E3Ba7aXoQkt7ArgE25kqkVh",
  "key24": "49RwyYb8cbxXXgdckABtEfCA5QP8ndT7TWtGVQurKJwwFtR6hxbdoaZ2bT3E78PUAY8T3mjbYFfLSWUMqsu6Wk17",
  "key25": "cMmqZxMR5jZQ4PYjiqbVSQJ1nhkUq55bRhd6nKB18hWeWXDJEUeXaHF5QbJEKUEHMvRonkwua5gNiwD8at6bAzy",
  "key26": "3ULGkXHhHTNE6s42K9mLU1AGoD2dMsuVjXR2vpa7q5mQAqr2SfW5Yawco72xiQ9mEyHkuH11rZ39WsP6RKn5ckws",
  "key27": "4osXqvH2zoXPVDbTQtJjgDi8AwmDs5prZXTL8izq8mhSAV2WEhkE9ZfEGfEhkoX6ii2ScdCLzkwBgPvEL7fUD3BU",
  "key28": "gNYRhURhiHywgGVyYC1Qq8qj5WrddcJoDY9dqCm9Ky4skiVyTB2qhkqyW12b48u2RBJgCVF4jonU1Tis4ZdV5wJ",
  "key29": "3ZHWijh3jGCyzioUSrL7PZ8wYPT3z7Xzgqwr2duRLH8Jo95foxK4kzPVZp4psFF91r63GoPuHmHVLRkq5izcX5gp",
  "key30": "3dkefKBeBjfK6fYY4DN2yAiP2sYCAymmjHt9ufTQeE5rQuHqYZAnAfSr1BguixexJ8ASHVMdjeiqU7tnu7WqaHK3",
  "key31": "3o8ss6i8fufxVnJErW3ebXW57sdFGhx6FKaCodKynd93S1xWA4RdGTSbovB24dfVKCtSxX9mV8qFmqzn9FUXRWCc",
  "key32": "5mRcFbvxXVJxyPL6HjnkXVhT3Pc9RnYrnjzQsXwiz2vBDqs2Mh7uSDnRDYyiQ2Z6mLugPgh6P1aYKEzhXdDokVcW",
  "key33": "49mtxpnoScb3kpPjhSGXo5RDVgucHbS8b4LU3SryDrWPA6QdSDhmchDPUy7MFV1fm5MvHww5MbnPT8XeoD5F9vA9",
  "key34": "1hVk5MSLcvRt3SjA48bbzBzWvBFTq6Nw6amYk1vhqa4ir6rDa2xJGN78hvgtFNnB9ccpQh9BeBxNG9MdU2igCR3",
  "key35": "4XGaxzhQZCAPLhaQ91GdyKHAeSUu5Hwsfz4LWkrZMg8zQfCxZ7WrZyEGsUpkfGfdNF7zaU4b7APrsxKdWLxFca3e",
  "key36": "29Fk1bSASEBhD5pQ6PQjNP8HRCEmK6EUQcHiRebY8qWNQQnZWAjAAte6WJ31cKDnjXeimjxzYkznALELbt8sQEzU",
  "key37": "25Sqty6KTjvWuPS7ijYnAsDSvznTT58kZ6pETz9Vvz8y8DCDXACco9XitpM9pWcfPX8gG7te49RJ2TgufyYTbDmC",
  "key38": "3jekfHHx9Uf9kgap2qEEKXWhm8aXbmHr12JMDVQ4QWowCkYUtPb3HEhUs5CGTgfrz6u6yCofmiqFdafixgvttmUP",
  "key39": "5hZcQsd2FcBoUxQMnMzdhyHa8fMbNGC3vh2evehHMpCyCvL6Vj5RZjCqY1wfEkPA7LyFeLeRHeJLvL4q8FQrWGYf",
  "key40": "2qTux87WAdKv4yN9CNAN4j1JpzGPhkbpdxnSnR1fyStL8cpvq4Miiv9JYV3Xujq9r33AjYKjrHnKCGzcHgHKkmHH",
  "key41": "3evyQeXtwWkXtWsSmss7St2KGTBZPE8ZMyqufeMTrvWrXhtNQvBxiNANAjGcwVSxEsSstiCBNLw5cuGDdWjAZedK",
  "key42": "3jDNgozkwdcJ6Qj2kvzyTnKU7qV8vXKyhNPqJ21JnExDyGqBSfsNHdHqndHcwfLqW4ApL5BmjuonH7rsgHm8cw6R",
  "key43": "4nQYkAx6mLEE13AunrpJBYoEpHWiMvUx53xe35Hr7T4yuakwgQN6YvNTEDY7y5PUZGDSTK2rMkWMt4LWcFY9vAKH",
  "key44": "35Qe5wNivvU4rtfwr2rmTmK1Hf29FpW3jXrBr3NLZRYVjSCBS35GPGh7SU3wyQGt4UzE5tZCxnduYvntezxPGctc",
  "key45": "5E8GViUnMC6YK8KZZLRCoVRuQise7XkPVrFWiGjv3hF1kfXDSFhirRLAf1d5uHJyrQquACFM42rVB1LXxyoPcDUg"
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
