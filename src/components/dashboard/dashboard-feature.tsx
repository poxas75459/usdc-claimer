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
    "5ZNfz2iV5PscT128uUfbacDxxo3RkybmfrMLG43SbRkFWTNvfZktTfrHMdEtnbmtCvsKRVw5QZz58RUW1tcKUDSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyhCDfGo3vwxdkk5rSo6vxWx4dfvUFjqUWFc5pY5Dcsq6fiKnYWQ2NBqL8iqMPiwqEbVSRt4JZrT65Kqo4wWVqq",
  "key1": "4xaT3frmzDoPFCg6hSiXAuo4jKgcKb5WrEmcVWx2GU2W2h3EohteUVuH3bPVSEGCxZPpKhU7uqsPtGKEFaXYp4Pu",
  "key2": "2dkFkZG9PcL7HN2TEgAc8Z7p4NiVCzsnJ3saFxp98cbRHo7AmqNyqK4XRsffnxy7vFfdHmkEGdqxxX4cZoTpkBrX",
  "key3": "3bkgqeG66YmMr74kzNXGGW2hEzKjAMs9BhGsQA62N38m1UJ2AZx5DkaogT4PVn9yPKszRMowtxPPEGm87f8yv2iP",
  "key4": "4J78Rc8EkbCFksa1E57hRQX9wgzudMKgX577BXN3TiYJq7iBDQyUVBxGTuRti9Jh7QrMZxfdEKKEASgkU56yZ6Dk",
  "key5": "2ua2ComhTsVa799Vp3ADatCvfF6ZDE5GS8PvE5xYfEvPjMMvyf4fzbdPvazecC1SRHvZEUE2mBvx8EgPyDAJDWWZ",
  "key6": "4W9GSt3RkFRMR8KXF4W2Nn9d7TJJLnRYpqhpTvEczak9ZGL29AtwXj4EgYVPMcW9n71DAyTi3odvomxXnTERn6FH",
  "key7": "3PwDjdGVXqKUNbxY9YfzBoJUxsVXTgsfpfUniYYidsMiKUeUK9WwQwxbmjGuqgwGd73bpurzw6sooV4rzgBY5bao",
  "key8": "3djdvS6PWEjcNeGzpvQqZnWPJzpUop8uc1VehGdNqWG56o1mzdjpyP1MxvLFRVRRSLvg4nxdD9GaXv3fj94hU6p8",
  "key9": "nMnVHwfLTy9G7tp29aKpJxF3ALBsnHUJ1e9h9FkZ13stiPquWTRvrHatD8FAF7JWQK5H4nHw3nopGzyXdfJn3Hc",
  "key10": "4ZvdXsQjANXHJFkm3Sr6KfQ3SnjkkX7pabwSSTTk9YMzNWX8oXymGRHMn4CJhftLErTofdB5V5nzWNyY2hQwckYW",
  "key11": "n3ZP4vwJEFDDK47AvDZybBAw7PrdCR2KyEzYrDt617tdN5YvdiJQx92eDcTNyW7anXtYBv7gLWjv3wQLd8fyDHD",
  "key12": "3r5UAztjMevTHYJTpLrkARUBBjmuapWNSi8cGxk93WHhHLJFvoBFc4JjgSjbGxAddy5vX1HyGmRvt23NitVTkX3p",
  "key13": "59pPpsfwsv4NxW3qEhw9Y2oHd9ZGfnyi72vCo88KvBaxoiAAU9N9riXyJNdnzmVbuda7JKUH78ZK7LM8EdQ4HvwY",
  "key14": "2xRXjQtWpHj753JWWwRo2iQhjsdh7nR3Mt6Vfv2PgXwavwrUEA45HirAiULfFymHKwQ1BzwiFMxJ8fwoY6JdH1fa",
  "key15": "DpLe3647hTyoUt7FXnKfeqDMtJ9ZoT8dw2xGSmgzX6EMEyRiRGE2TNA33FEuXWz7XxkbpKWAZkvSXaUMz9AkAHk",
  "key16": "36K5zNPNPaEHrbz3JeGvdUAwS56cXwC6arBNcH4vMeBy4rq1ibn2wJthaTw89eGSzkRZbp2GtUDCofPFcg7yHiDX",
  "key17": "EPsm9Ln98rENAf6AaRwHN3G6Uny34D9cwG3vXi2WpRMTt5Vkd57x67tDjYGVzynFarCzBjwEVNCohEJq7YEtNdA",
  "key18": "3NnfxSJvqHATy5MYvitoXLzLPUpbdQeB4W7XYPBj8ZTTAE5nwTCjuBWp3ao7H5QERm2Nf1ioy9dacb7fgXEDgXr7",
  "key19": "5Et7mVPxiq6iYT1oj3JRneC8WgVDYGBSvTGke5apiXPVCGhLHW979Mu3JZe5kPyzCJmYaQ8wZvsrVJfdd5W9SLxi",
  "key20": "2HQVRQURwaS61uHqYHkBMjickg8mp2KbXor1S1PAgQLEZfTLhKv9xWU4B72tSFu55a9jc5x3vFtzSL83sshXnwUM",
  "key21": "3AnDPCfwUvm4cubZNgVhUPpEibfemDLKEPYNrAAijGLth9cpLYGNciwBYn4H8Y6QdyRLUDtGWJDBWjHEPfcCBYZV",
  "key22": "27znw2PuCNSxwTqV5WYFgW523amFTEBbtBquJqoVafWGScm31keCGACFvhJYR24vKJBtEPaBkrrmZEzMnMvArtmc",
  "key23": "2bZH1qnZNswPN6z4cAAQ54jsacUZFFh3iHpsHvgerES9aMZFbBh2jg1st2gDHhkLE7erwU71PyDndgPzXi86CB7G",
  "key24": "2wBUbbRHxrvv6KvAaGyM8v8spxpiDk9Mernnzpmpf4JeQhTpYr2SPnHTHTaynWNzxPME1Sdc4JJ4tdLtTvzKZnZt",
  "key25": "3KGd6Vr7meDfb14NCW11Q8rkPBsicrT4w3dNQFj8JK9TEZZRnwF2hCGbBhaQYLP3HyRMTBHEDByqh74AmE9WYHLJ",
  "key26": "4Tcebkyj1PdZdAJvopmoqaGVSWEGoDp84cDu69ThGMD5JmoQVoeDqZhGMTRC7Q58EA79Hff4FsRyMtUHLFsdRt5D",
  "key27": "2ULSbrGntiY2niDFsfuMHfWS7aEUvXBJoohbrTC6bLGEhLXPJewXDWeNLZ8RV18FBva4KRihkZrcpdzCXowT2DSG",
  "key28": "5zZapCKisFbXMXjtsv8y2fiJ7xiCYXdHDtCQJqeiyHuULGrw2RYWw6t68Xj9JJonYyTH8FiMGtrR6nPX58fg9tQt",
  "key29": "63c4A2ZLBUtyLosLrvUGdxRi1bdYFHKAxKnyD1q2PPJsNNitD8KX1p2QFvKBPhKFR2x2bLTdQ3LCgjqKuptdc3js",
  "key30": "4uRHebHTL6hKskq2Vx8i5KZKfGUWuA3Z7ert9yipRdHt6EtkcAGQu3FdEGTpnLps2XdnEtRMtvyfp8HqHPuLRVbz",
  "key31": "3cTw6uqwAbwGpcwGGykdQR67KFzSbNRxDhjDjCNA7Y8zj9CgPq9cFBnVNWLekC6cTW9xQC6SMs6yqfBrZHZwVr3J",
  "key32": "5XtgiR9u2ddVhnrkgXT19SShJhn5zHzcAUZL1SezgX1FJpQ1yJyGuszLqdFZEXqgFSXcNV8UPBf7t6puSsZsZUN7",
  "key33": "2fn6pYnFkMdiJ9p7DX433ZYfejCETNnw5YoCD51rE2P8SGugKzwmdao7dF9nvg8a3yUiK8hn7bGWhrgoyrq91Gy3",
  "key34": "4mQ6NUF2dyYFiNJcyxmaCXnyU1DjVJ568NbWkZtZTs1aupj8JGLbNTbmg7HvAA9HJmpBb1TETHESupZ5M3N197Wa",
  "key35": "5G4G7s565EUqXTRx3yMAwYdvtqZMrkGx2HAUV6bvQgF6SWPSWWnuTKU1ScXX8xb9zKNo3SDZEaxbAgeuBHW7HNbe",
  "key36": "2wUidgyHFJveyUPpQUA9VvytNLQZrhGU81JKUGyC6KdP4SfcVotSGqRHsK46fYUUQ9oJ6UuZfDFBNZR3Cvt66MCu",
  "key37": "2Yh8qLGt1Lbd949LyUHD2ZGecyRfYcgRmpp24FC2N6PDf1efxcTKAnKWivxEHCSAdre1Q5hg335vkYTSfjnFu8je",
  "key38": "5dRAEGpRbz42oU8T9RbyDV4g6Vd9dZBSHYQ8gxsHYXP8N6p3zmPP6mKJL2ATHxgSwSzCyuAz7qm1Gn6RcoU8E315",
  "key39": "7AB7s3He8njLZtf56LH6dBzzQPNyw8nzqHaweeiEFnfoZfpwvQsKJQjCgnZvYPYy5peBoyhCQ2nwhbcUw3LKFWx",
  "key40": "3onwtaox76a6FDP7HiapgdUXrwpJZ19Nvp3qkALja1Nh861AQ2xeP5Z2NZA3t292cs6mtcixJhJtVGMwFsJpRu8g",
  "key41": "4KbUSyQQYbXDs1kzdv7ahvwfBmpaY4kvWcfsnuZEAVmpMBoknx868x6HJTYqUKJFUTLoD6m2cgAyGqwnVvCkV1Gc",
  "key42": "5TKaL9EFNSH4rvqniPER9vD86cxhC8swDN6J4okVTptifdjJc49Z2YJRRFt66Sz4xpG86Tdp4f5P4o1WuPo192tY",
  "key43": "23iY3KSMoeqwWZYXSwT3vdpifTWuQe9JrSD4ci4FxMctAryZ9qbAETLyJ63yoq7nEppKSeXojKc2Wb6KoZJEjFrc",
  "key44": "3GF9xjXD2fRPrVFDym1svJ7dF33HCp8JM7Mhfvgb2UALfxVtZJdYBLoE7id5QmXKpjJCyCiU79oxBrG6ujLnYwGN"
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
