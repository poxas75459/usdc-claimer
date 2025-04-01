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
    "YzgVLVyJc71mCETrsFoCoYDjbGDNo7cvvrZ4xvnGFYB2vE6gHExJiGRsrTrwnv3mpH6XedECnm8MNFoC2xwTjcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUjckiY2q7JXGRnxpub93xS8jp9oXtbzF1GhnofPgUuQmxTdbjioYSA8TayNBUqcUAxkeawBBZe1qTaNeQ7Egz8",
  "key1": "vG8HrzKwzk6ud9f4nS5AjpDNZU9V4zeGztJ6Gnf22D9faGFRHebumdr2qAkwTDCXpPkYwUVCtbF6j24hm6xqjpA",
  "key2": "T6zpUs6D2zVKk1n5hDf3mrpcA2X97pSASwfTSfJWfXWCppYsJYhAoeNcivY3w4cBLyppxWpu32ffg4Q7naPNsF6",
  "key3": "3hVdbopYLcEyGTG6qHWNErZQcHC96e5gsXvtReMyiWfj68G3J4qgicmikto1KZ4U77wk2J9MdF95w2VMpvdTDD7U",
  "key4": "4iAR3yDWfVVfRCpnCLzN6umFhsHg3qBr225ZbGcELBGqu66nWeTwrx88wTmiTz34DTpnb8XmeCuZRVRKS5mRXjPd",
  "key5": "32ywoSB4zU4cUWbcrzCQ9SPVQ12VBUToaVnZtKiyykzT1p2kdqpKudFeuQ5tZS43SsFTZUGoeRdPY19Pidg9TJEd",
  "key6": "4sYEw88b2iWHwbQhecvMBvwTJCpvJmKG4wdwfZvwDJ6KcqQrobJ5z84NrBxdHEAz5LksLwGPbkF4LnEtTsmZP6mX",
  "key7": "4RrPGgzMB391baHYKDXPYkLvL7Aw2qyuMRRwyCXTtwZXHNRpR9V6Sk4YPxzCzbxKSBtYdowCTFwnY2n7oy8FyNX6",
  "key8": "3Fg2vk6upvCFs1qSMJ7hf6Fn3s4U5nGTpUNyRHzHzBrHwvVs6cypNPf3tYsutjv2LLZEh8Ax3rtVbXvtJRHe2RKy",
  "key9": "5zmNbkEM4vYGcsByLPUxHPJc4VHCe8S9795FVBt62g4KcGoMpEJYEu3CAJCtvy2r515ixKoo7qvxyvG9eVKhtp1j",
  "key10": "5YVMuPrdchjpkFF9Mzu7yiP3zVEsMNApY5JwKZRm62phqFP8y6Nab6h8nHoj1fqfLVHdSdChTGcf4QCUDLGHHpoy",
  "key11": "5Eo7SP9DosZCohxE7z94xW57GVSoPcjjVqxm91o8aUKiL6xdLRvFcQKLAiot2T9YpxRkuwTNzcjhP3t8suA4dekR",
  "key12": "2DuJNQSR4fYREwqpJ8zHC1D3ugBbaxiZC1KkFbxwRAGqLsNkmKNPGNDrwT3nd17MJE7BDyE3Qnwzvv1hupUnDTys",
  "key13": "5YLmvFs1cVhtn27DnxwE5u68HZbWnPaZmrM4uqUKWg3LWUYEbMK7zGrkyBoJUg2Fpws8jTmMLTfy2naFZNfHv25s",
  "key14": "5dEAy8RWUHXq1TEhp8i4dqge8NCiP8LPdv7UW5sJPj1SUMnfKQGu81EWh8ua5SiyrLkRiDABccJVfz5atR588yE3",
  "key15": "2zWND5kat4hYMbNxJU1ZqvNk8J8MQMuSsvXT9mWAgjXWa94ErHZrKUEngXNJh6CiWfVbxkENtaYibT6zK6S1y5k",
  "key16": "4wiS7ivso7j47Wre79nF7acjkYLSHNAtpeBeM9TRWVn2KWreNY7V7rA7zrMkLJXn9c6w6ecTQiXz4XzHCDD58diV",
  "key17": "4NrDsU2mAF49BTersKbTKyL6Gem2wnypCwZNP9p9rLiYZrGnMkznNKeFSwdBoFeATceXnyq13a8QkuD7vwcsFwNx",
  "key18": "5TiEPiUHw4oGz53ZYiWKFGCj9y9pxs9ygonbYJa6sD17YMU1c6cLrwkTtWjzyYLzcWKCYv1TqNwWPF8g1fZhJ1QN",
  "key19": "3df57WVLDdjdbDeKLPNBZ2GLZJJWATwnYxcXyQwBagiwud5jd3AsQgn7i4JYg17NC9Zy8oJyB9N4BLzxjKcjcheW",
  "key20": "47FmfC8USp6G3jDsNEEPYeCh83eSP5RwVPf7jtyj4SwiHHtMD1VhV3st3bfTyq39ATarafsZ5npyL9YEKmQXV79x",
  "key21": "4NxAscHwtDHexdkSvMyXtQ8WhbiJFz7Qx2Crj8Bxr26DpLw1diWirnd4TX9UKakLnRmabZrfkvaQiidRr4nE4Km3",
  "key22": "3nZWLBkh9J69s7usGVBXpWbpPQ81pRptKM1Bh94RJrxHLpU3oPZwp1kiQk22PfBa3nBbKdkXaHdsnrT3oRdX3Acd",
  "key23": "4xxwWNm6h1yrJ7gRZ48Nf5oq8AKhoNSP33AcUNPKiYKEWxNHAshKebPYz5aWofPXL5Q43mpMiyez11pSc3C5Gae8",
  "key24": "3zGL37n5cCx2Z5zhWZg9V6hcwV5FKZsNxabym2hUNpLkaqhQZsk6N4Qipz24UnrFm4ZPAkLuS3m76Pc3TQx6b5Rv",
  "key25": "2T1rMp3PDtDXx84jBtyfdTTZWQJRwzxBQjbUam4CZ3RCcR4QLdt6zJb1bkT6MjiJpvt4tKUSpEzEtG5hmVVeBmmT",
  "key26": "5goNMqJPCtSSHinJi4TTx3N4p1rehYPbz7LFNe4X6cz5unHKa2UwA8P2d2VXntGFL3EANV7QUDeUms6JR4a8bWQY",
  "key27": "rWrjE1efYvCUEZHn7UQyZYBpr3QV2GzH7q4LDYvKsmMrVUMdsoD4g7WRBDqE28EaPEfTL8WGVn8EXdcqKhhpSNb",
  "key28": "3epRy6xDELSkwfKRxNubvx67BwoL3HUhnf9GjyYhdE9Qduu8pmXcxsaDfPFs4xcf8yPPXgc8F2TTynT6SPtrDkUJ",
  "key29": "8EutpgkzwAFyWAsa4kgCH8urWZxBuBDKoCyN6qt9TZeQmj9yJFo4crCs5ZBSjqPrxvVpdb312NRVaWxRuhbAkuK",
  "key30": "5Z3Gv4v681qwsd5FLEdbW8GqxSmEUeLd2C9H2WWY8DHugjvpuPgF8dhdTtETutuk5pHjTLyKFwJPbQ154RR5pvV8",
  "key31": "255KpEP3C1zzLQoyJRKyRAAzZg82ALPGBRyWJMR4ZVrxKFg73dc5HvbksU4LUEAiT7QkX8wAmKNAneHeUoJpJrXS",
  "key32": "ueBnHWQhAiRcMzFNgpCTen5aQ1NbCYyXFzdWLJk3UZCrjt5xs1SMCzfgwtrdhLyK34QmnNT6GJeYNcBWLRXvk2U",
  "key33": "4WL9vhuh5ew9vTbrZGgyWEDvhx7nodDtaVjyGGKeD2WeG5Ji8cAMWGktTbxvhdmf7afPSu6v5sWKnDPxKA9Sh8Td",
  "key34": "2iQEkpSu1xtbVhApevbwh2JriJ6p7JyuQ8nCcgg8DYxKHhkeVSrxnBdSt95n7RxKJjiBAJVds3GSxeTtei7ubQv3",
  "key35": "2RfJ4jYLSRP39VHjkoGZLcwKqHqmtZF7Z1ZU6PymVDiSVBcJSiwaW9WYfkh2YFc9LbufwEXURc9CjJNmEnfY4EQG",
  "key36": "3GHUaK7UzbJRKY9Lx3hn5tmwp38rGtiaS6PXJcmgEEQBh8HEmmVgPdsR2ru17X1AHbDx3pTLBPATEc2cRrMZQw9u",
  "key37": "3Wz4ACwAUp6F9fXLNADrRH8d7TBD9H29KHGwEf3q2o13Y3YjEqFzNCWhAnyjtYLe3yGcqRXojjFctFtQjNa3FabX",
  "key38": "5ECf41hs56se4SHSHT7mrshV72oup2iix7PUFq274HrvU5EvCXPBax7LBBY9stsqrvy4NpZHzKqwEV53haLk53qv",
  "key39": "3nDY5BYRKLwmofef43EZ6XjHonYRHY7UCH1m4Jy3yE4VjhtgnUdRT5TWfFxa7AWmwMn1REqPpMpDmY9SGYNw4mfY",
  "key40": "3i2hfjqMm8wKhpV7VZe6APNsiVYu9TMz8XyLWwa9NBJBQPjdSkVEGqTn4LY8o5FoTeLXF56MKKFKfckHYaxpxV4Z",
  "key41": "4gsFEVLGAFp8LWwUqNXHbuKoNL3f6KXAKVbGrcpk9F9P5H1yjCARbMJYgPt47nQwjMo3s8QiFwSTbDoHeWZPDt1z",
  "key42": "5gjLwKfNFZYvqqZJNeDgkh4v2HoAHJAoYokibuaCYVxQ5iej7RCzvAWYpPAB9hEyv4whTsHeHgkDicoe8LdfVR3Z",
  "key43": "3i7HT35xDBfqsWQpjJqzZsKpJkrfTeZF57166PvMYxeP3Jvfp4BmrcmMLsZNrWyhoMDWVraGGorQaQBAk4LvjHUz",
  "key44": "GXbxyZY6fDKMtenVJRz6ZgVW2Jg6c3T3ZDqEQ1ADMFQUmVsEyg5zHRvjk6E81hsj4sN94nJEthK3pongLeQvMn3",
  "key45": "3JrqK8fP7s2V18jtNQ7CsMdS5ncqWpT8Km6oPaNxW5BpvNJT1nBUNNfWfKvXfVBESNSt7tBFHsALPkUE6YhbgFZM",
  "key46": "QUw31w8MNw9vjz6Z7JAgFiZVNw48n4E8WhtBHnq4zwMdBLZhNgcUcJJUM5zXvPYR8FMUHyN8YNJ1X62WTirEfXd"
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
