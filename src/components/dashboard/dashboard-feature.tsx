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
    "49BtVTWmNm6CH1LPhtDmzYQrQSFpHPbF6wQEP8rnQy1abv4w6Zk3soccqBPrF6VVGqwrMAGgdB7GgemK8BWMoZfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVtmFTRokzSVmcbw2D5J2BLrkwzrhCTcDDKYZe57Q6wRCXGPnRFtiCVf6KpvAKy84bZLmk1y3ovkgfqsF8BHMGB",
  "key1": "2VMB7gnMSpeAQSHB7NngqZJY8D8RVo2LYP6JEXM45iLCbbAC7VkyaGGpjjmbcQpuUS5FksyHsHTyFYJKyDz6tpFU",
  "key2": "rMP8FRMpaM5D4bSytQJHT4mSzY1vadtGmRtRdYDLakua2Jh8YQtrm7XHwqaXFVrFhn642ZVcJKstJMnwQnF9K8a",
  "key3": "4p1fsS7KvUdvtWsTXrST8B6hqWytgWfPViFVQTYsx2FinHQrax7cF4kaEzgcniGn5Z927hKcw2itouj9ZWk4HmiR",
  "key4": "3ZXLcRVL5ArJisE6XFg6keupdrdZhN4SdMHuF9apYUB1MyCiWLZWp4RWwam6KP8jKWAGGejDEL7EwEqoitwFYocZ",
  "key5": "51HRGoU6a7MXXMFAccauBCspKcRFajoezSkUc4agEi9u1myKeNQseBgMAGrx2Ha2VR6rfhzAchwric7tu6F5daen",
  "key6": "3bTmsy61EKac3i2mQzRuDJ9LRDasrBVdLF5qu2AVZDpYQ4QVVHTHxDXnRZpF9nppY2YfVPMT4PmNKHryLojKR2pK",
  "key7": "4FqbM7jAoDan2ubKihdmG9VAXeMJdrosnjxbL7AgxYqAgURmLG4sbwZzKwtNKi2LDxDtuVYfeL5c8DUoSzVvi6cH",
  "key8": "2JpTKDVyBmQgtYGD1qk5Vs1M7WXH1b2Z7b1MTYDtUY7iv4zyTphZ1KH762bFjknjXKghWqVy8gaHV1oaLSfdiM8C",
  "key9": "SXTpLd1eTCfCAABnfc1qr5JJ8B7AqyfZnX1vAU7FJTTJ5yvU9ud3dw9KdWnmUQxwEn7B2ViCAhJ8xdwDE5CR7bU",
  "key10": "2xrLSLgpesE7jju75WtQK2vmWvUcYKd6j2qQ3LjoeKE1m2n5GiEmvzsR7i7zSqp6XKRCgeH6TYZLveAAnZc81jEF",
  "key11": "2r8M7rNwHn45ky1mZJn3Ko5T8EJXrvTad5uycHaVH96KXXir39F11zcff6Xk7WuG6VXxryd5kw9uBh6GAZYfMhcr",
  "key12": "4XtDqCJrf4CQ6snjr8GN9GJi8uBZeyWG3FbDLy29s5RozVUrN4QY23N6Sg8cc83XdXuQqnksDP6DnVT3eB5KhmkB",
  "key13": "2jwje6C54365XJGy9tqdLf5GxNxAihKcgM6mEZBxfnGiivDwBSJg6cqZpcgefVcAim4P7GYKSGvWhbX889ocdBj",
  "key14": "4M8oQgh3KE6bw7yk3Pqc3W2vpJEtts5FF4dKm3ADTyvxUyeFHftEHhQdmR9JRNkM74322ia8bzzHqhTR49zbrEmK",
  "key15": "56CQUFWsunVR868TqhC2UuMrDYZfYo6f1o75p5mZ7A2yJMDR9H9QDsXYaxrhYgNoAYkp47Ccgi2BanNL1fk132LK",
  "key16": "5JGpLJjDJ7xgj4depDANm7sNrH5yzdDzwqPTnwXNnyzHustD6zK9bJqXkgNds2sKupAMP3GEhQB35FF8nh2Y75Qa",
  "key17": "2gWPXzV9uTKFvxrV9kjQBfARRNEV436svfybuxSMcBKxvfSGSe4Csjf5o4S6aJxHbF3bUCnbH5QYFiodLEuSBCZn",
  "key18": "uXGYieznu9txmVgwenwzeyR7yH6E4m1SkmgU3qERHKv4nkVDPmmHD2qNJbve1gaCbfmfmfHafpihZiqyLAAHVDu",
  "key19": "v2M6aLd4Dkn4Nsi1KLUzHSST92KqYjHBp11GpzoJobK36jdG2nzrykPatXEFGF89JtmDhf6jpQUMDrmzhbAR8Gg",
  "key20": "5scVmuh9N6VCLjPHkewcNbfzEZqZh6vHuJMjEKTHydSRKjdaQLFqSt1tQ1PYBVZcVQsUhsU5685c3PbgZp9MAZVx",
  "key21": "8LhqsLsq85Skh6hkK6GAFTk241nFWiYmEePAVsCVm9SdGVAMrS7jQKgqoPho2sR1e5vYE32mQUPvjJyJuqX6qRG",
  "key22": "hRLzu8iMedVFykGHUpk8S8arqLRTJ62sL7KSnoxU7RcTf6Rs1jRtwh2Yyi1srACkT2xcBAWQjRv92tATGbu7vNQ",
  "key23": "2gh93aMvgA2MLWd39i5vo6VS4q8vbNoyz2Ut8DzN5MVY18V96QrbPV9mxa5F2qJzNMuF6WgFcCULEPE11FcCrKqp",
  "key24": "2tbz1Xy5XEBdJesNDUpjHo4ZQkft15JeUiLx36bJcm4HgV4DbM91jo2vymVHmNQWvavQboYupDdv7VDXx5td9NrZ",
  "key25": "3FcKrFb2RPrJzyZfXDRtALc1S2MWt7KV79731W4nmxe3NxoksLv3zfZ6EkBrt4xga4fN3GgDHbcNZmDApRHtLG28",
  "key26": "5DzuuTDXUskjkjnTGvFFZNxjban5UCfndqHPeZYUZQgSyAuYyiYfsKf5yLagFPjZS6PVSPfJXGAA3RB3VsK1twuu",
  "key27": "67jejCkxqZWtPVLFxoWpxohki6nt46hdbUZjHFJW3dUGYYYejP7XfXPyGnxihgzNxGMa7ogCS19rpi7MUHw8ZZyV",
  "key28": "4VzK1b9nagCVntssB8XAXDAQMGyAPHZ1mRnL26U9uCPrgzEuFjk5keXRqvLjcpuVmMTj5GPYD4D4AmJkBwb2JfJC",
  "key29": "4GFSsDhR41KaTt5x8JcCPKUCxmGjqZ5AfEE98dCkRSg6o1xurjQKYtErYfKr3NAdXJ2YnvD6fA9mX1F3yNvjjKqH",
  "key30": "UihUbBMVnjD1Sh5jiLEXG7kSAvvaALPp3uJpz2wBrAYVmGwpToaBFaMDPXZeXPC4zUTbGKEp6UiaR3uWBjXNCjk",
  "key31": "2Rz51gJzaUKR7csYiYrQb3QufYUFp6eAJ8JYF4yVZPL3wBH7THbeUy1j6UXbWSCMpWj9zddxScxo7au8dMRMJNJn",
  "key32": "2bZHvgYQzvvjBgmCjjhQNDakpt53HfesWh3De5Yhy7E34o6Lm5bF8izi8DBqvXh7wz1aJqtuhoVNBwQmdz4VzfNs",
  "key33": "cSigZqhokw4qhFzNcLi9tncZj7TVThkMnFpgjEH7ZqEVWtVuCyxPc191EK2gx3ei6vZKJXKKSYwegSuSjfVdFTC",
  "key34": "MiJg1hN52JBAnmhv8Buonjq81QYxFpYbiGCNyLxk755zfmE4me3x1H9z2GvRjgbLi46np3jSpPhkB4LM5FcRafG",
  "key35": "5nEakrQnVKAbxoMPSsm9yW68seJCwrM9uupEL4qqFiaT3r81kLycXQ6kRj1fZqMTPM9GcvbqzbKrw28VzBJpjvfF",
  "key36": "5psmCisPehgjrA6czHWDBU2uehirsb6o7hAeRtFhXsk44M6rdfDPaqFzwKPvtowQAmoj6tAdnz2uA5WpfWeb6SwW",
  "key37": "2M886k4vTZJwACJqVLSZN13AoKSPLFcuF3ap9uxEF3BjUevyyjEWUT1xK1snCbAWkusbaLRrbd2UjGkZa636vERY",
  "key38": "2Sb4oNT73WnViHtfZdkWm4zajFoRkq3MSwZXgCiW1u2G6vzr9mfqxpuLSJPVUfAbvsG6n54Wqk7QgnsLA3JAZQhy",
  "key39": "4o7p5oq9vPRDBxemLnKgZhipuo4SUDQ19cAvusX4VhXn7Bm12hTbg8MM7nhYXYrJeWbB97C8FjKhSiPXSMsw3tSo",
  "key40": "4dC3r2QxE4vzFrjAdvrjRSAvaPK6ySXPD16yDZbC9WGhqjjDPnug2z4R4vf48Td2qaZ8U4tuDrZvF46W2jEE5yHx",
  "key41": "3QL34YFiUzJBkR3h1zuPe5J92fjjTU6vLmx8Mr2C3widosGYRcm7gSi5ve21rFbqXr6TnH42ucPLRGVYEqu6ZuZV"
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
