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
    "5XCxADbegej6RyuFSGsKHqcrLumM2kPuW4PEM8QHWtg5J55j6Wes6cju6ANzb2DARQwufAVAsk6a6jgUTgob5jyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cRm72a8QaEgt3YtjHGvtD76wyG2RQsncfohn6FofbynqrhDuubQ5iDy7QDWZEFfdMecA2QaGxrQsZKm7CSwaxGu",
  "key1": "4W4huihEcLWBo6owpUT69LeBNJ3CWZ89zfa7ohjcz9KTGfMADtesBEZYgnaaKmDvdNiiCmUHWXjzSdihT76rbAA9",
  "key2": "4kJ7sMkdNpctwyixL3oiMmJXEfLEtirWiGEwKFjRmABQUNmbAwX1ix1fGRgi4bHjbZNh4NHqo9swdPBpHH6EQpda",
  "key3": "3mHwFmBGWtCiq9QDAjLpPTnJw78jc8RqKv7P7P5fksNLY2Km2phzvGMGxT2CiPqipEQ7RGBZg7Nrjvjy3vdKrcSa",
  "key4": "fVoXumM4vYHyYJbpPKL9F6dSFDjJNM3Q2WqWZaWeXnhuGz4qoZDK29tm5EWcYnMautvsQtkmEYHtvKgCTT1AuCL",
  "key5": "4UNVTmRzsSRuoUZqD8N52BjApT1arXEMm1zKhDiGQRXuzfi7e3oukMa5EmUrkddeJAMNBaFeJMFNXPQtNDMkYXGD",
  "key6": "5E4ykds6C73M3vUhm81qLKUPKfNYi1y19TStNV2ung9Zk4EApdPUL1ARgVNYbaUjP6gp7ZmQjTJ9M2R4iAjwiFE8",
  "key7": "5nK6rw9rPwwaADrpHpSG8taKGrsVicQ3y3CiTeVLkukRakmQsjsrqtxwCFaE1pTcxiApY9WGCeGNFjqNfJyXiUpZ",
  "key8": "47exq4qPskxWpLGdUwWXbjptw3yQBa4aY13xXsXESLRDFWcYqBj5N7epAFan9wV6hHEz4Mp2zXSiaBo41B2LiMeb",
  "key9": "A9Effac4L5mXkhH2diwXG3ankL3QG8L6Nbf5dTZ6iM6xwmaLeCUh8B2q2JeAMxF5Sk7aN9hfeCDekVuywVpLWUa",
  "key10": "3Aerrpe7L2axnug5UQoWs6k3DCCgi3sP76hTE8eK9kaRoiEVYtVfYuUu4pudsWGaEzN9qN66sMtzVHw512pTVsFB",
  "key11": "4Rx7cbHM7bZL1sxQcvNnPbMJqiPcyq1KP7iRfRb61aAwqkctUezijXBC8NpXd2fDEkswfLAh557JHkUicx5Vh7oq",
  "key12": "4CURUed5t1NUfECsBY38N6FATk8Na5MZ8KvgKp9ntWdF1qxkygFFjZ1Qw5By8dwhUdhRcRuBe4WmxV119jMDLJzG",
  "key13": "4dDQy7bk2d9HHn1gm2fKw1z51RXzdb3djhRMNVeqKSZmLqxWKyvUzY9KgG6ARJogQfattxhwx2jYf8m1wMbHfxhQ",
  "key14": "2PLVAMrYHtAkMecppKiRYdkwp5ZLjqVv4nfTdd2FGB2RNnAwRtvC6KprSNwV25GCf2mxH5ZpbvugzdAyCbzfeDn5",
  "key15": "4YcYfQMHPQxPEpfJCKiF49vX6vFB3pjrnEUcvp4tvK4UW5LQaAY8PBUU7bWLeUtYRWZbzUiy31wZ7ySmxHBrdEW3",
  "key16": "39LDPNjn3X2rAPEn3EddvVqinMAzcoUiTgPvq7FeYGhZwMuWREBTERjxz1m87JTGsQdhXDoY9wc11e1Q1sQ6fS8Q",
  "key17": "2oQhCjWGzHLRBu9rM8vjVtqYZRrDjpbXJFQpoSRuJxTe2wsUNsajEfHYJtHEB6WyPAhGjznPWPFdKCgMfxeL7xDg",
  "key18": "4fC5QFFxxYzWdrxLTytLenLU88sp5J6MVot3kYQVUoPL8Wun8Y44TBn7gLkbEBzLhWDsWG9fVC1FXAkCPmD2s17J",
  "key19": "4jyWPkrL5HaFwcpozbCcHGEw9QaUs7re2monBZheGuCBVtXExCqPypeD65DdRd7R5QBHGDARU3KEkUD5hAviVKr6",
  "key20": "3jJ7apTzfCvNAFm3zUsqAbUD1qH31LgFJaTMWFD2tPb7iKNeCa1VkVitghHSWz3KXTDNkyQfQGV3VdbXFFV7F9UW",
  "key21": "453nBdy95nrkdgm8RuXBzEiuUpQmmDtcHmh1eq5LWpMFLvF5tGXSvamSzo1riuQWf3qL9Apo3DoTss79hUD8XVuE",
  "key22": "2moCXqUcCVXpmxR4LXdDb7tHC2iyZ88U3VcaZaqcr72U7K6Tv6eg6x5XeKYA7Jbrt4bUxWQ5wWiaoUdavMRHh6vC",
  "key23": "2hhhu1Hbsn3Lxk6yyrrQDuBt31rCnQr249jE5rkH3gtQHktd9w5fWs8gtcQ2qQTMURgbytLG7SyHzDm4fvJw7qoq",
  "key24": "8jEjhsQUAUgRW5do2zvUo9f8T7yzvkAcJ2YSvF9UuQFW7s9b8nWAntfHn28jbn3afuNDdfzX8MfwLx7UNasniDy",
  "key25": "2NqYrbEozk8RBB5Y15K4ck5iydXRZzxRwc9QSMoEQpDfjA7uyhkNoo7xeaxdwtrpKaM5uGTkC9VR7wyNGaYJ7Htq",
  "key26": "2GDy9q3MGR3KdpuVXHQX9HyajrL5Qb6NigbrW8wsHikzP8H4m9dAY7eeGhPTQJTJhGeuBNWy89HQHtRQNxv4WSKB",
  "key27": "4kDynjkL8jcgBNC1UhUZToyxtiEhGgNd4pwwyMWv3kFouRq27e1dXK63GZxGvpm1ypk6hjqDSb1pepk6ToipBkEF",
  "key28": "5sVQUMRJFysW1Y9yLWaec6tPCwe4MFeoArc4X2cTJ6RNnLrzoNoHwVUxQhWngCb61sHHnqaTAUscLsXbDN1498pV",
  "key29": "3kaMiTK3CJucEAEVFZ7pwcc7ANJbRGgJciBru8U1bTxhoWYCYnpJr3qFBSNki4Qj8cboTiwDTU5NzLkwZP1XcnQQ",
  "key30": "4angFPaJY8NZLVbLkgKVQEFLCFyqcCQPbq7nrgPHyjzft43DFNJnnRh7FvaUXiwCPHf2ZUmqyeVcGeSBYAhAY6ib",
  "key31": "122csYkyo96GuEBio8bQrw2v9Mx7eTcvN6YeJtbfAA1CdLPxtteaFBJZmsoDgJUBCQHDLdcM2iTSQHudpZ1juC9q",
  "key32": "3ekSeRvLuHCZ7nJ1ZUYD74oGaWuHrHwz9nWyoHy1og3uAnsagDLdrCSAjF8nGTxEU3bu2aZQ6KXQxqjonhRS1Nwe",
  "key33": "2HwCfWsHehf5W7gLmLVaRtMTh78CxQvWpWsQ4Lv3ggRveT5JoqJUMJ7MRHdjZuDzdWpuPnEihafvbhxgdBwivkXh",
  "key34": "5d7knejyMFrihtaoaeKzPn1j6v8FM3YZPCGqRZPt8nVBfCRGV4KYEAUAF8yEry8mg2CqhkTeSbsXcXQMmWtUjkcV",
  "key35": "4dgn8P7FkWDefQnDDL3bSxLKmPRamrY5qeSbkVHd2tGQ3osMrWeRrTMXnQVQHfvpmC9nZJ5muU51ZDsrk9BxqBd3",
  "key36": "3NXdkkcEjHmNdamjMPYFNJqtGkgbsCtL8yann1PLBvGsLKY9yW64R7KebJiXPBZavZFDjkzmNUq4122XjzMB4Hbf",
  "key37": "W2fRhF3xuUpdRnP59FJ2sAK6oBW4UruE1zPCBDwDFyinfNCBJaNLHA9SXPfXjGEQpcptN85zyxdoiFVYEDnKBU7",
  "key38": "4yLQSz1yqRLqkLWK6eRaYhuZneHcQijxLrmR1xjMvGYmSVyCE7p62sqA2uyafKPBsaaoWdQqt2zZW47rBhwu7dMg",
  "key39": "3iiYfBmoddjd82ZDkVN2ov3eyJfgXXRRJ653U8KAxqCQa3DsGkcS913sinjAJYiQQF5BTM4Z3rhNrLG3fCdfUuF4",
  "key40": "2trb1Hi8JXDTCm4a8SAJv8rj4csvxFD6TgXDmQHVkwUhSphXg5wtgyG8DxFag8nHwnJcP5cc3xP1wvLz8z339caf",
  "key41": "27mp7gGta715LdDJyBbUbt97ERBY4khJnefKZFd3P2Kpvq48r6CbuRYxdNYZpmMv5s1rWmfbM4Ub65AiymbVNMW9",
  "key42": "3oPuAGmYVfE9v6Kx22rdUL5mpvaATJKfhXX31A19y2h5zR3dEqdRzzmDWRvUAgGyWgNBgRzPQbJoW5hrbeod7Mbs",
  "key43": "27J9E3mmWw1mH3dfZitedtMQ8nkZ7KxB9nF9HWpFEsUW9dJ8KhzfQm6t9NPcHeXr3gGNoG47UqNxMtanBXUKLRtY",
  "key44": "3m5U5MnL7y9Abw2sQPemkPrDjfUPaaMAUngjVf8X8jyr7FZUtfaMfrG4r1FMdhwq82irPusna35DVsejivyzgGoB",
  "key45": "3QsG41bJDSScbzUP37ovLVe5E1W38nu9DWdfuqfepbT62Hw4x8FsCff27mRfi54FBm5H8SXNp3b23m38S82kPhvo",
  "key46": "2wvhbcsZ6xARLhu8exmj5ho8AY7V4a3LMxvjuvGueWCV3oKcNuQ3vKPkUESvtyPuJ47Ki1ZXhojA1aQTm1on81d4",
  "key47": "2e4tfVCZWYALZsiD3LCnBrfLBQfQoXmNAEjT7i6Q6XNAZBf9u16xTzE2d6hTix1BatUVCyyvL9YdNiBrLshuifMp",
  "key48": "XwzvQF1ZQhL2xxQo41kPZGqZUdmpoyErjKKsLYEwD9x9BKzdkADmvav7Zecv3mns6nzb5MddsWGP4uQmm9EHW9Z",
  "key49": "h6kcV6VdnZEJChvoYA9y5htFwNNYLWHTjEENh5t4Joo3MvM2qrKdXTnbiDiCkYpiZbRLJru8ukcbxYcUaK2MoE2"
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
