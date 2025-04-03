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
    "5aEfVmF73Wrbiu5umjXLjdoXGZdRRX1XA1WEk5aXMJ8hetZTiTvN8XuoRQVh9TvKmhq5T8wKZpZVaWp3q7T4dgdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aV1wuDnzaTfyxDdmiMjXgndCZJWzdWFnCH95rbPyDAEFniNrn3vMyZ1VLrFgvXnLqfb8eAsE6C5YDCR4EcV23ez",
  "key1": "CfaYj6xuEZ6gU9gPEXgdwpJ6qM5FJ9RrrYKmTAkQq735UGe22KMYXyNzQ26hEocWybHq2admm88jqMQxh7Lisry",
  "key2": "67KZejtgL3YQ2gFbjADo6T68EaUVthDM3JzAaSASP3JHDvfnnh7U8kzTpzvd5bv5FFXVH4pxm3XKnMsBTf39Ga85",
  "key3": "3FQgjfJQzZgqngJYGN1Vd7MSH4sKCZNCHWmHpxnoodD8E9iMojpB6kUZMcCVYNf2AmeHW8iMadDeqz1xDebkTpDf",
  "key4": "2YwKpFD65hiiCDawsTQ1nmQKSmxnaZk8Md66bdvgZ65Toowa5c6avHCqhF9Pg48EgLS5b8U8QYP623YyEZ1Vz3nJ",
  "key5": "44ifRnXvnSHQdiriWbXw7CW65KGnbvxbMrt36nJaQUgGWnz8zw7Nt5Qdzsep8Z8ersx2RfWf69G3zecAc97LSCqi",
  "key6": "3u5KH27nscDryL5CZqdJmtDsbPfNwVVGKYk2S8bJyaqMdCckbxWZ3zKknrpisdcV7muXbamsQA9z2ZuDEnFjUs2a",
  "key7": "3H6qtmbqf8DB2k4u5yiQ1ooWH9pbTfc5UyafrQqttxg5rf8pd9LrAgccP8ghJondXwk2F6q44HXXMbwuRJ5UjdZg",
  "key8": "4THrXdzsjAKuhA3oUSeSc1LJV7iUWjqSPZjUMTYXKnN4uLDe9UCBqGuvJkPsnwzh5VNppmaeoZe8uzaCUkWrSPgK",
  "key9": "5RopDGxTzyfkxgAVmGWxKPeAwZ4hNupWLA4qT4P24PdcLNSaySCbAtm6npgrwH3htpLnPaGW7Hh4mNCnW64vAGtX",
  "key10": "4LMszQAHUdEokQTNP6kAf3kdAKETpP7SjRqY6bhMDNLjcDRZSsb9KxRwfv8TLEeCpUewwvEz6XYw9JwHvwbDu96j",
  "key11": "3wdsDrWFpYF77tcjFdUXPHMXiaxBDUX7qbsjbJNTAS93vDGFcxmWKrsX6WcEyt6dSJ8kJgcT6T7Sf1GpugYaE7DS",
  "key12": "5pBL3DGgc2ePWg9qq7tKMAjmXWcY4GiKvZNdBitBLs9kj6FfmitA5q3siD56j9m6Bty8rv6rAnLsqXo96vVgdTbc",
  "key13": "5STS4GF3jccbKXN25UDZa9so9vMasKK4hLaQt5jJ9JNV5zFomTHoDpmmgA7NLYS6NaPeQ5bkqeBCRd9e9GsZnWRN",
  "key14": "2qpwYDApU55BC73EGB2DuHQo8UPPHzztFb1hMLTgTKKjYbvyXkvsk4eupfHsLAZbeSk9FrKt3rAqpmWGTfNKaN9s",
  "key15": "54a2q5aDnV5Qa9i7paEuzFGupatoGTmSTnMToCMDcGyjDKghHqW97xgAncN4iMYo8Ewua9hjgCAeQjVDrKcp6GfQ",
  "key16": "5YSEdS4psNfFLXwLCKePGf1BrGuw2yYneMkdpBXfEon49NY4f3FxLhHxgQZi6T2AeUJtqEPXWFmuKMnNd4c2zGP9",
  "key17": "z4s9fQAAHLDeQxwrT3jyi5vmr8Y4Esu7SXjbKcLpMx2dw9GCroQqnnYY8ZLD8YH9VdNQ6cUWXPYMDJnMAFDadU1",
  "key18": "4pDKFgqnuLxSVvK9XFDfusNaJm6PoM4ZzDNFbQmf2KvPuhuGto9f1gboDdZxDsUV4yG9Qzgi2eCxm4v6LLUE4nK6",
  "key19": "3EPRSccAWxPRqAMb2983CmdGonxUayNGyK4KaPFqKVwHMm6cRvhyRokro9SsmnEGjzVW4BCwWSiAg8REh1zeSQgY",
  "key20": "3AX5o4PvVRe8XVMh99huvbqtu8YJg7oGPLdBVFQkFyF8h5DxVspRmFVm2Hog6dhLmskdgPzGZP5R3sAeqHzbS4Ao",
  "key21": "4Q7s3kn2hN3p1SBaCRVJyKGZChRiFXL2u1h1a6ypCgGBHuAcgNkouf4vGeLsgr9XZSSGQyTuTbfoNyds7rTeGAtp",
  "key22": "5ZALhbp1ckA6PL2aHgGFU45yN3ysd3MzKYjxKBsehFtHppzsgWwryaF18s6VhdFRkXw1DW69GrfA5LTB8ZupJ4XM",
  "key23": "5kUSjgmzqRZZPyfyBNguUnug39gMWun2vtSASLae4az2DAdhTnJapDmgcHBrUeaR3HgibRxUXgMFdchcqTsGNHiz",
  "key24": "fAQZftt7iD2eKYzYognD2DjCv1PU8LErCWr75JhWa8MR9bHzjLDkMnoy1asMhmRWMTo45pmb7vhgFM2H9GkiTV2",
  "key25": "a1Wccbw7igdKGKuzLthyRRojyjwzkRkFYsQazD4cchwP8QeArDzDgEhPGAp8peGR3EujDspsyaBvzPUZa7tAzwm",
  "key26": "2pP7RwgEszq5j4jxxKgXVdjbh6rmB246VWo7A9bAcZuBkABc9BX4Su5r316SEfuBkEARvef5WGYFSdZGwxDLHiAq",
  "key27": "4CTTBPz8gt1VptJSDjBeRngKcvoGjgqvS6uZ7hnfmBGddqVMQXD87ZotyL57fzCC5SK5WTbXzVEv9B3Ak1amhP1x",
  "key28": "4HSqjNvGebbLHWabGqruezeJvyTiUmqk8oPtMoQt3UkxD2Bwf3PVTFihdXzzmnVEo5EkpfTfWxG725BrPjf3AzKK",
  "key29": "2tZ2BqYgdqyvSQgoaQwCciM7X8eBdBeB83URZ5M9rJyGsDpHptrCAhsV8ZVpyggexHtN8VaKVN13w2gk2NJfpL4t",
  "key30": "XoV8dTM9tQu81K1JSvZeNLpyXDqNjdGP63PRb1duGPMbbncVabiofrnPcG7YqKwV33B5Ab6Ta7AQ9HyRBWsoa3M",
  "key31": "3ty1c5NRN6mg8sVsFvwd6pjTouprWjQMkxgSzZ6BPGGd2vSPJ5cXqPCmx6btbUqBLmGijkrH7ecuoPHzS1wjLfq4",
  "key32": "2Qg2xFnTUXDmcPeSvP6QoibJAS3XFWM8FMt6qoMvDG2EAKV8jxrZ54r5prRKXpSwN3jeu2MRLCwzaxvv95Xt49X3",
  "key33": "4XxJntLopFzpXk4UkS3dxFYNqxC5MB7jxCy2BSSHYcjpqHXZxao5fow2Ci5QZoYJe63mawxKoNvmvGFtymf4s4Sz",
  "key34": "4XXCzps5rb1Yg3C2aSdVGb9xR7ownApYw5T5YHFPsDeZ9TxgRsUTsj1n9e617HYKm3BTSfEjqy7AMdnofjPrHzzt",
  "key35": "2HmLCkqXFkgkWq8XTZPe8QwiEnfwptgY7Ne1SC7nFDZTxSXHqfxAK55RmDFZ9najtxAmyFc1kosB2BDzSwAd6PcD",
  "key36": "23HXrfRc7TZxb7cqFfniSWvdWpErQGhKEU5YBGwYihAuQ2CbVKeqFrVTzUdLbKQt2fEF2ZuCDR3C2sTorG3FBtGZ",
  "key37": "Fx8eSvaKxRDEG7u4ZbVDyPo3ssoSxiWYoruP1zSHVafDRB6XZpcUb19dCT6fPWocRN1EwHRKYyHf49LeEsjQobG",
  "key38": "4qTo1o8vynUfPoCpy95M8k7PKP3t2bnjkbmsT9AJifcakhUsWtkrgWRKjaAGvNd1r8sfqi6yuvxQfVaWqgyHRkNb",
  "key39": "3sHhmT12EYRSs7A752QZJZVQZJYtpy2eQjcaZ3HLvUHA5TwnAWR53oM2C8Z9RNBchKGsEeYLvH98sjUZU6uUzhrX",
  "key40": "4x8cZr8enn41ko2K2pGAET7vR46yBun9hEw1tqwWXtxC5Wt29LajYrGLNhbwfBdgjefBf6PiKXkHav5Er9YJZgPe",
  "key41": "3eqGdepCz4eqAbYqDRdbHJ3PTeJV4wFTY3mWV22F4r8k8D6idZX3RCtw6Q8Nfz9McmjM3DtpEzm5kZUVnthyByPA",
  "key42": "VhMJZWo6myzifHUqpdpR1AtnxHnYhQv6sxq7B2CoxB5xmdkJLhijK2z8ByrMaoypwRa6w1XEr8PYuvCVhhYxgRD"
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
