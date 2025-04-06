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
    "5YHJx4NvFupJHFVnuEcTM1roMeurvhCuwrtrGeWtf6Cm27DaHM4DPW2EtDjAqpdXvKmcWDiCfanLj6df7fUN9XiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qj5rVAXTvutmVwWazD5qhLPHRnxZVYVRKcqaeijvxBePe2bWHFQsKJ8p7WUEbe253QSwFTVQ1qJCvtR93ob2JKh",
  "key1": "4qbrZT34oj9BBbDfXB3dPf1EbsHKhsPX8rDq6yonb4gntK9Jv2bgXUbyBH9AZQpSNrFVu2TNj558uy4B6kCRA1Q1",
  "key2": "2Wsrrp4ENejGstcTkYKXLrHtTSbaPtKHkRJwfkj9xkhY9E3gJE1t7pcb8Cvja1GCWusUekPSrcxuNZyG9Nt7hET",
  "key3": "4a3UtV3r8vDmpTaLt7SwoDV25mb9YBgEeHgxtASfuNoZh3NKZEXnqeTyjxEazZgV31ty7iiXxa5w8KexcFgL7YCv",
  "key4": "3fuRG1Zpv8JruGAGKCRHWu2cXtKaRJXkHXDmzFc78K5uLFZovMVwqE6bctFJz5JQAzqRAhCtrJriqJd7EX9tE9rU",
  "key5": "2nrB9MgKzGF2M8EzRs2gSjKj9u9z8vpvmwZ2xJkcwtsm96USV5umMPb5Gsu5LtsmodTEA2rEGegq6QCbcmGcktN4",
  "key6": "LrTpA9VzKBQPd6XgWrfeV5HXi6pxysQsEHKB33HyrPocNT4JfdLUdFncgU7JdnAFhjhzScZWwpxHP7eMrBSrXPW",
  "key7": "3KPUCcuqh58GdovmXFSUNav9Ge6EAhd7uVmE8KD8McLaH34TaHA4QeUZ97B9TfLwDy8Gv42SzFpan4gy8h12x54q",
  "key8": "3fdsXDFA53kFy4njkdVyXvv9o3FVAPeLmE5h476MvhnLQqrJ22ZSWGGbozZJh4a5qd6W7wcdL9dwp8FHSmNp8c1s",
  "key9": "61t2HAoiJpADEjAaZugnDSgxAxmWUUfFU8am2QqUsQJAH9qRkUcCDgDTFp4M9YTmsQvKNU8iw6AxmC2bh3271Gsh",
  "key10": "3aqEZ9PtRpBBXcJYx9iD2CwrnmymCGLCLAR5PV4tnSAY1qPUTWcnr93FaeQsKUn6xoaXpPa9ug15LZSp81rpm1eA",
  "key11": "6VjVvCZ42TdHNBg8DcZgPcNvr8ZRJKNCZFe1wJyQBfkR3hLvaVegdtZE8UWaxJA9BjdsBYrBv3XmodCXe1mKddW",
  "key12": "3PL2q4FfZyhXhunGieDC6V9Yr4Eb2NmuFyYNFvfTd5ChUjaPE7kQ9X6jXjBqYNCmFXAVrDZR7JbPdxyPPm4jQrSj",
  "key13": "nYLFP9VhoRvv3RF3jKaeKfDq1ZQiZANzHo3jP8qNH7HsdKw2mGinAFgD8rXcfwBoaQzNQjtXNZHswjNBRMf1GFt",
  "key14": "PHM1HbqQ4tG8f4HgqaET2ueyqTGtu4C38PygWzi398GVUPa8a6VkVTTvoyULbgE6wRXdurGoe9kGoPZWrJS31qz",
  "key15": "5FgHDFpC5mZgPGxDNBvS8tXr5PvE7LzE8SCpC3Lv2vNVyDCU2hJ1FwDHmtuE7eQjRxNCZSyo32dmpf72QQK6kEy",
  "key16": "6754b8JGyzXosGAiyLSkdRYxLnoy1Tzma6Km3cm9PHCzAZVaJJ8nq7aQ2KukgX3axtStfR7FNAiUsQ6NMAoYQ3jX",
  "key17": "5Lz55wvGVX1o4VMWzGCL4dYkwfjYbf2z8jNqBza2FxTL3gkSaBSRfniphEzCMoA3wSJzFkJKweBWaxMCD6dmxyX8",
  "key18": "5qrwL3idEhpu9TEsPe531gn6bkQui3PhKu4MFEAWMmzJUaBJyck5k9N63kBDYq5TDFspZtUbzgWDh2qLcABwksCn",
  "key19": "2AZNj6Z77WAz8s7SsAi6LWY3XRMH8dEowsZsSfLybWBCa69XohoGogHykmAogeAc5SbtfSztRnjoAx6KPBmAHZP5",
  "key20": "N2KJD2UTN2jpDhbu34BhZYjo7EgM7xCYH5XUPE3VU9Bui1z2hvJ3o2q4cqWKnWUz2XGMU56UoazAg5RyUdFi1nv",
  "key21": "3dWPWuXHrpwCCHm51uvfsYJjQiQCGk6YM4UFNPK3EgYc1RuSq2HzubviV5CUxzK9nFkHW18z94KyZKcE4vUUcaxc",
  "key22": "4DZyFDJxbvUC14Jb3KcbNGmjpUvw8w4YYuPP1wTrwN5NmcitvX4yroR9jivXSZDukDn8Ze9KowcSvqzQW6Z7DZQn",
  "key23": "3hr1cSaBdVcP5NjAzRKEY8t27cwworiXkQMzPNWch2cBGoeWtdMzStDz55K6cceDYCWvGW99cfRC2JDYyXL3mdzv",
  "key24": "BTjBix1uX4BAbXQjqWy3aCJx7PhJx51UX7VzskwCE23B5u3MLyXfdpdq1BPsKrfwCiNrbTDAihNtVb7vu82xCnF",
  "key25": "4CRjmZJMdzxUJLU6CQChZsWqEvJq4yeoDTKpnk7ugwLrronTggf6q4oksUejRfByvnDw3gjMPF4rNfaq2pW9tQRC",
  "key26": "3fP8VSd6XkExYoruaUDvxEyAu5vUEKmHhfGYgSoinXVeUbizZTRi6sp1gLSY37UxakRqnpcx93RGCh3B7Y8vRJks",
  "key27": "3LEZdeV6EmgTNmDPE1tKhePaE6qgGLc92cNsAPzaRtt5BtM3VHcuaMQKzJ1WXJ1PbbPKmTDsQZy5YFhqDJm4CQ1j",
  "key28": "2QuuM1Ctq9YGGzidWJMY32TvBRQSrVyJePpEWLedBUB7gQjdMmNX1zGeCX67uVvcBeSxugKHQ9T99cmH5vfsjKKN",
  "key29": "2iUm7JHzTe6SQgv9Zqb7YBAaXKKE98wjDJvTQiTSgixuby2nnST6SS5bRgtX5QjdvXsfz2CuqsA7GVaiwQ1fXk3D",
  "key30": "3p5SXQt2bCKaSH34awEzw2Hs5hAbhuDRo7wt6uQyoXNb1Vq7ohrFyo2VKS1NKyjcZm95WffcNTiLo1y94bKAKZgp",
  "key31": "5r8bqHf1Yde1wKN7qtx4hcp2EQpsWuPaDzBuLsSdoTQYxGLH5UHXPA6ErA2Z7wV9FN6frcHRjsARHf9WRDReBAJe",
  "key32": "2DCjNadEdxtmEXnoHuYWuP3TQYN3mTNAnsbM5hHieYuDD2P8hmuD7ZKiHh9wiYJsjZXqZnWWbSfUhH8JBtyDvaYU",
  "key33": "4V3STooUwcYhfFNnggSmV9xxe8fCAE1eH4mmVcSd4YH7uvohncF3rLEGkkFzAHE3kByMqVVjXjpv5YwWTVpRZSzm",
  "key34": "4Ni9D6YhkbjURyjQhv9iszLXhGsqUAWSpy9f1FXFoC5cH9Y5gsvrgvS7RKtHnjUjxajTyzUBe8NfUGH2zpDWbZTw",
  "key35": "h6upR1g33vSz6xTV7mH6r1pih7e1fQg3kfoLx1hapGyEZbWLaqovYD3g65UPKTaWbkqvV6HWAPz4ucLkSypR4kH",
  "key36": "5riEGFKB37WKmyF3BztmNh55m8Tcw7idvq3K8dRaWUFtEudEuz4wLWR1cKBi1GwmGBLAeqMuYXnSe5Dmy1J31jVX",
  "key37": "54pUKWnKFgmGG7kLEDiA1GbSnf2k17pLPAVBcdc73qnxAuiQK5JXFfHQ668M9xvaH59jrsE94AL2BknP27QVQhz9",
  "key38": "4i3Q95Lpgdbvoic7JQizqZgF3j5rW9DjNMYXDKdavKznsN9XKyN1KeqhU7Qt7tsNgaWq2LPtQaj5DiUkQbhALCqF",
  "key39": "4amMXfyRdwMxDhVHVJgTGNm3gcXiWjzwXS4SByr3VfoF2kbLFyLX9X4ZRPeekStvDXk6mT6BTTMjbM1VH9kV9em4",
  "key40": "2iigMd528CWWKAxfy2rmjCrj8fjMmZPv6yhv4H1UG1vdFSjiin4QSPrhXENPU6cwd5AwyW51eZWb9KNuncSPB3gb",
  "key41": "4zDM6NZGuxDsBFMnn8z39J4NM2GjR62qKppFPpKHi9NmHHiHZVp4rrcE4HWkvSkE4XGFL93iDJ46FLncUqBwM41N",
  "key42": "418eecLGaQjZZPBqTzQRJGm2Z14pZ9zTK2Z5bSmFSU3ir7Ht5Tnq1opUGdop7Ljud42XLRzjGZA9JRYf6kv6owxy",
  "key43": "5A7HnKwiU4a67aX3dPpsHtF8JuiCxJqUfmMEMuZogA2HvuVRDYiPctYc9GpM7zKeZvrs3zcWakXFAF1opxJojJvK",
  "key44": "3ExhKNK2Q8Z48x3GsGWPgzyZbqGSAp4NjAimB33kC6ojtWD8KTD1f7mydw3CWcv9F3hTKWqHWhrm4PT6N6GHDDmx",
  "key45": "3RMS9dH3fxoGSUpwMXshJU2nXik9baK54yTXTvWpJYNAUcRMB1XvM3HpzN2T1nHt2NAhc748rrCHACLQ9NJZsKYM",
  "key46": "5wEHrqizF9UiC3SsEo6aVUaSLRuiqPevd3d4upAGNLzoMLSdPWb97JGRNyaFoAEn7wXjBs8DXhBdMAeMC6tA2gP7"
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
