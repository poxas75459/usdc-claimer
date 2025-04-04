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
    "8rEffL4bNgBLhpxYn2FVhYQxpv914BqJrqUjPFCZxzYBoxyLWAbgrWvNU1H74YH31nNwKrAA9fNXhYTURpMBpx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVNbQEdb2KHdC1ehpo3ttk9AC6da9D8i7yoszojysCQ4wyPoerbWBiEXtT2ao7aZE1N2fgoM9HchzXe2G5x2QSf",
  "key1": "5KnbnTi5xusW9Q21vLapZmq8tyU4pxTYCBBSVE1utZAwoyD64NeorWgSxNcpQdNwDsvzjvReWmWn1QbMY6vLM7tJ",
  "key2": "26CAKQdegpvuzwUrfBNAqASgYDBRMyRMQNykeiWp4QnoJt45iUPNkAGCWubVRqb2EedGwDWEtjwPDfSWSJeHGiZZ",
  "key3": "4EordpAcpot5GxRWB1FhjQeajRMb9ZxGN5RjDeWuZFZhfCELc4r3GmpBjkTuQqfAf3z9bogtEkwXoFxALoKwfAk8",
  "key4": "3rRMKiFAeTMMLBxDEcBjQEo3ywU8qTSdnTRCdiPePACNPWRXJ7TKeBv96fuwevZ9NW5TWUh562mZHw2xiy8gDuMF",
  "key5": "4oRea9xCGayef9kYVQyznipWpkQD4psp76461DyhZmt2FtWu9YKcFkGBKLkPEQsnUkfmMo14Evn4cnDazrBtyqiL",
  "key6": "4LqRvX2MExhwSLZfSWtLGNPMWRU7dzPykBBusRre2oRbrm4uCrQ4EXGN6JH7bD4wrkRNmF4iwTyjKzcXMTMvDANa",
  "key7": "E31ydHF22erM8UJEcusoFSW5vNy5fdJhHz6dMMLdkUQPXRnRQ3Vhamf6MqaSaCHk59zXEQSBPgmuMmNteWfbiBC",
  "key8": "5gdzA98X9qyhQdQ4SpcQjWR7gGTq28x6vL2yEndShjgwnCf5bRHoKVTeRvZDtmCbS7zc9YxScboMwuZuf4F5wuGB",
  "key9": "4ucT8yiAZLWqFW7KRUV9KJQw2R4B9bsxAwqUhL48QbXZia9njfBrsCkCFLnEr5gYtFgr6kybjC4NLDsBBd8S9m5C",
  "key10": "2rbFnk73qhWtT89ZW3ZrVg5wAti3LsFxRk3ssKTE4qfPF94ivE9RMgTyDiC5u3GAktNc5AEzszwGd2zGgE27Xs7F",
  "key11": "1JMPHyrUGst4Y6X3ybGCfNxEddPAZJkZdXYEu4ZAYBdb8kkdQMMvhmvDkENCcStJg3vFkz231drJYJpPpMkC579",
  "key12": "2QXjwc1Wym5kc7rXb8FhUaL2vUoPBM6TAMbXqaCG2EhKGzHUADLVskfUpAPadm86qDdYSQjXsd52PPQHpjTffUjz",
  "key13": "4psh73JLL7psF6NTpmCm96nnAS3m4FnYg6B4PAkJnJ6CF5WMegd2SpEnKx6RtHhAdPZeS3kMoq8a3Hf8E3mC4ZGC",
  "key14": "31fmnDe2ZTTfduknDvru44Be2Qb1WKisBGg9oovtiZmYCfCrw1A3vHWeqF3iXJqDhC8voyeqAQKpSWc9mmPpDRuH",
  "key15": "rkdDcCTxF2urGBzL2tRrpa55H57BNjmwQ94PDvvmMn68sciGg3NhnQwv7XBM3DHdXpHhYmxhZuJ5n618Fp4fxrq",
  "key16": "4qVnfgbHsjGWX5kmBsCdyGD154BaEXYwoiXEideQMBpYP9TswGZWJDrAZ8TdaFivq4H23kNKUpt9yB4qthVcdgRT",
  "key17": "2x7Ty2A7ZM2a1mJYaJifGRaoTGzP8DWkx3aft6Z2mh4XReemzyXR1f6SeVNCcTZGoWCm7Eijs6bT2Jd9NhZupEtM",
  "key18": "SkkXkEajdu4zdG8pBLaSamvUg2PLaSftwxNwnNW6rvY3EMie8AnAKU9vVdH5UWPHYvN3Uuom14bPCC46qet5Dtm",
  "key19": "2S2juvwFN1BpVCfrCbsRCBkKXsCKBEWseDaTpVzQJdu1M3wu2ZFFKvgKikYKFdfzwA3fbYTvDNB4nVPKvtweFzML",
  "key20": "4n92do7j1iGJvWjpSVGwt4EJRFeQsDw8b2iybXxqbm563LFe13jWbbXFV36MUTLRkwNkAFLGtytDpkxEnX8EoeGE",
  "key21": "5AKXfNjnY6GuPWGTxQRh27aNaP8Sf5bEzXqR2SNfzNJHvnapJMxT24ih44NT2Sz7fgubTCjMWNkf2VvaErvSo6A4",
  "key22": "S66QUPVJDvR5cxDz3mMGF5nD5T7kJHNQJsDbJXhTRzWKeTwy44YfafHNgzetCEJhFozZUFT5ztSUngyjNAE5wU2",
  "key23": "5LBHcYJuh6SVe8upb7acYfpyQyANMFoBXRKMaEMVqSB58Tjdk1eQUu5g5GmimjT5yEqTt73vrkJQVp6QgsLCAZSz",
  "key24": "4SfdJExzcGmvsSo7za6qQkfVXopwYCGwX3hDgat3WSzBQQsooNL5wdc4YXH1qeZTHrjHCHdJ4HBiQ7r9mfQ4AbaQ",
  "key25": "2twQxFzHazTeJsPKX9YmkyaWpr7NkkcPUS9wMSVrjCEMFb9YJoXSYGKcGrnf8V9TXH2Yp3pQomxWY7QvVrmRhrzz",
  "key26": "2fFi6nArSWUAWcaWKcWNvRfskW3oQhHNcdQ34Ga4zMgZ3ocp4GvFbLc7J629FszHFDwpYok9JsX9C8KJhRtaAzBH",
  "key27": "46sEpo9dEJwb82gUTtHPc5gERq7cDMRHWifgZ4bKm8bEKNsSoT5d3ebzpMK1yMWwGzE6XYrdoB7CWjVof1q29W7u",
  "key28": "4DhqTNF6MtcipvzNsTvtfDWNumcvLFy9LEyXPoDvT74jeSwaqoXDVWqGx1q4ge3UvF7WUHfQJRcbZupL6wgWZD18",
  "key29": "46WY2Drne1sugxJw2VbjSv73EPyMFhnfs6LYJaFBvkKRThh4E8zKW3cEgpPJKP7mQjBCX9EZLM7vPqara47wvUMy",
  "key30": "o3mBtbPizEa11LNxBBSTHA7BZFfFAcAaBA3Pu3GHcQQ7DgaGf2qBs7Rc4LSwUCS7HrRF3x7AYpwLSd42P7dn1Em",
  "key31": "5aeRTdTiNdxw2AqVk9RnhEWiZCMfVvAo1wm8W6RkS2SWzQSEsqbY3VX27SFw2Wvh2oV4VqZYNvtH3UNVgjez89ir",
  "key32": "5k2i2xDspviY99J6xbaKQnvUy8JxxjyLsvNC8Hd21AxNgxJ4HMmMUaMLt64UL8Aw74rmMuSiwBqLNu9ActoNvxaF",
  "key33": "2i8LRuGkkL3RjEtYER5urGP2cqytyw8UHQgL6ADVdr8D1SzEpepKM61doCpwvbY8GR2CHu1cqN4LHf3nqxVjX2nB",
  "key34": "5L3XcqkXZGHKvjdt6CHR3gjtpxnzc1Z998o1g9prBJVNkcbJUyCYMRkZLAz1DRe6ATQaYcznLzUQdLHcJjtP7PZn",
  "key35": "2eZF141nACmqSvh3LkSzztokNdneyk5B4yL8spUmWoh8BsEjNTzvvUTTxWX2xZ59Y9bC1V8ByXGtse3ee8N8Q5ur",
  "key36": "5CivECzxiaTrRc8V6wZHh5iPYSsKJTABZ5HSQzZcVasR4CtdP2mnpAG1AVFjxW8SGxFb5WMmn2TeM2k88RdLoBt1",
  "key37": "2SX2wuXoshcNwiWuy3dxq6YTq74ELsCLsWuWjRFwS8MrFeujRYXoqRXFGCiBKMKHaPFiPuSyygeEzk8YQLL1Pq37"
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
