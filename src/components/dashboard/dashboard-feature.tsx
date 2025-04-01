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
    "5YmfmkMw5nhKz8CCMjttZJDrd21AyBWmxwRjAkxpQ46XkoUkWRKisPwWr3unzJbKkbL2WDSR1uucQKYZFPDbFQGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuAffPALQMcdSbcYhMk6QmtDznJQTnrapYhc3zuvF2dMEzMMJ8mMNC7AcQwRLhiemKhQFWS5GJV4dzFEJKHpWu6",
  "key1": "pBo13VBWnUC3FL95NtUfSmovLipQLcumQ8FVcG9oJsFvrnPXJCKT3chiqhfu6ZR3H16HTXvWtfKiuMVP6TpHW2h",
  "key2": "k6Xmgr3QqJoLesBGZbRMXhwwqD9bnRPhqEfeJKYs4UMpCVKxRatXWHiWCtrNMSTHFF7fNeeZvhshnVoCQRFwBsj",
  "key3": "2Cj9VPG2WtF58iMwAQ3MiYDULxGPF3zLbSFyyTvQHfTvQFfvbgMe4s52LYYkvz22NWNnt3XqT5fhehCECWv9N562",
  "key4": "39F9hRtBcgRKVjd58gKihP5UKGC8dQt4tV2Awv14ABpZ8R2FgvasZv7wJ6NEZ3sQ9dWCV6RzXRSVSD8xDjZCYsmW",
  "key5": "516uBk8TaMo92muJJPVGz1V57hRyEyEx3qfJL1kMjMKuD74thfuChyhPgGStaLhGFQRYvpSZgQpoSPUe3w9oo6gf",
  "key6": "JMNrJ87PHq9k8MRYZL7FkMRhs6WiH2eBayLCu3WbGVwyTaQUJ9knG7UmiauDUuTsncvWyx7gcw47BrNZ2mxN5Cq",
  "key7": "3mr3kyL9hMbYWn7tsqZjjAsxg1XJ9oZnnvqdTQ889r1TfQpSVTmws7b84a8NMJ5oJboCaTydAxuBDqmagotED3H3",
  "key8": "3RYq6sxKi98JysLnCqrgj2PqQHpAgobGjheMuKAimuWQU5zHcTaNCm4Qu2G99BFaRpPSriw9HwNemQNmxzagmuXC",
  "key9": "4n3CT1zDTQp4JqaEr6VW2dNfHe3Tf76PeMnqCWpi2q8tJjPZkEed8s5AWQ35XtsHL63bWLg5mBfpudMwDg1RGa3n",
  "key10": "hQebxMPdEDCPoUt3y7y7hPMNrJqsyoXvc227gEuuuiy5bRr3672FngLNfGHoumyEJhJSPWNTgYUbbPkE16uoywC",
  "key11": "DxBmgwxvfMvatdPVpT45CzHj4ac22UhUz4HShQX4UommgRkZXEtmd6CMAdqmfCv3MiK4YUu1r3TRnfPtco2pdWn",
  "key12": "5SiN9pcHACJG7ySfahxDMEfSVYp8D8S1QfxaNrcvVQUAHd65snkCiGHKf7pgd88pVqt6dwX3uFvJvS9VPju3DvqA",
  "key13": "4Bg7dQZ52JFppoUuTAR8ZcWsQuqK27e9v9YuuCs87SjEKWujuWmAWpQjHVToqmWkfuHwk8nwvotX34H6NU2wSuJy",
  "key14": "4o3mbqgtQZMtvMswHJ9Tizx81Cyejmrw3MUkyzsyKu3LM9LVS1YuKFUN853d8mjsMzTrCvYAFCaWkapHfPNmoXCd",
  "key15": "zqxvgRJ6yM4CuMSeFtSGJa2nBQQoyFiHXFc9XZo4y13aRNRNSTRGWAmt9Y8tWdLgJpGu61aCuiPTFyZ2m6LgaTT",
  "key16": "2G36e65rdtPrbQh8sABDnyvb75sY7junDaCNzvdwy4ctxEiJpJnKiUkmuQJeYPdjF9F41nxVp6y2zPyJrvRKQs8i",
  "key17": "2QB7tBXzqj6G3tLCuvdgMJ4CEXCf5xFFZthc8Unvrd51xUqMwPjrAy723xFLjomPjVNgYHdphFfriVfFuKijkzU",
  "key18": "mmYMq1TvDQsMfBgMJPBrE3bjbC56xF81yXgP3jBpKwn6mNHreYQFPguozRyWpcFVSoNbXeRFLaEMmDNALApinFL",
  "key19": "2NJsUkxTF1fLsJvf6cK7rTyYBo8vA7idwHHdGxQ8QNzSehytav3N1AzKqmYGkTGhPsXW6Nd2rrsxKaQPproDKrfe",
  "key20": "N1Y8fz8wr2Tm9pMBgNsNGNWN7d3SNMXgdsz5wn3ERZ8y3QEEtHkvxzS4vXQCyrA1AGGS6AsNGiVz7khhtCBCgic",
  "key21": "3MyXPbCYQbHDVXCX3eHgMTR67PoYSd6zbUvF2f1Ukws9TBYXcJmE2AvfnXfPCXSnbu5dFEs3zr5KgfKSFDgxXEQh",
  "key22": "ABi7uzBUDrXy8Ktzm2QqKjzJfjeRTxuuzo7srjYMtisAE7FNEDeg2yQTRVpi9wFkGeH2SpP2uaHT2mrRNTu2wwU",
  "key23": "2EFUYeR6BNKzwaeD9GwakyHWg3sCexw3HhAee1B283pVbExoZssiRzd8g7rtpPLRH25xpXu5qLGh8FtisnpuRTA5",
  "key24": "2MEo6w9Pq59YrRds7vbZjtx8UL84i3jLt8qFmcgoMXrzXK38jgsRXNwS915oC9PqdsmpKkDS6bUDrZMg6DrF2CXg",
  "key25": "3PAYXRV8L76uvGv9yLUCT4DQCUe2uRny8RXRcedVHxPGCyZ48MF3gs2FSLjXQYS7A9hLqzDrBjqZjnPDt3NRLgK4",
  "key26": "PVS6SbF1cfc3VMzmLRpaQXHZsf4F2DsVyLQy4CrQcFWaY5vJpt7ZrsBEKxdX31TJj6nSeYH55CocLHMpqJN4nU4",
  "key27": "5Td6adyHXHdTZRDRBsE1aCX436n2gNvA4bAFxsy4tMtFuAWSRYW8Rz387sJDTHecScDvUxam4uaEY2zfv2J8Pf2m",
  "key28": "4FzH2xTBGuuvX2MWaoGH2Hm1XMVmoVRNtXMSUVrHkrgYUUGNrqmRLynapuEy4wEfHUDXSPeBbwgyqfSD8Afa7HEi",
  "key29": "3kFN85JMYcrGH2cgUmZ8Kws9rHDZvYyEAZURqzDsj4v9GgXzswzCerjXJaY8BVjFJjxRQEFUaWKeh1A8pbwaQUAm",
  "key30": "2aUHrytf8PVCokv5toV8p9MLLgahrU7jPZksofQiyQvnDXDvpMWZqwdBHGwxEHdQfMfDvdrA72VU7qNFBg4PTHAH",
  "key31": "2PQ9yCX9XWnePfvE4XJGUjqEsrLWPYRXC1hLGfN7pjNcRoJiKC1emv9bEmt7dV9BTXHXwpRcBvhxWF8fCaU3C2bj",
  "key32": "2Ws1oooBtN7hRnL4huF37SDZEN1huHRuq6FezeGXXQokaexeCdQHsQkmKakeZhXKzTnuJh8MptyFaHawU2naq6tA",
  "key33": "5Sr3WuirDLYoXYiS5dcKWp3ta3giKKFQWEfs9d7s525tvVbPy5MCBwnJAWGLBfyNTW7EKjzkVBh1ZrwV7B3FjjMj",
  "key34": "bbbTKLw1GJMuDwWnzfMvD9nssirJq4yrHY1sM6HMybBPz5yLW4JSBaXAyApri4jjyiDPXRTwhdLABtXHSefCM7z",
  "key35": "2y2grWyH14AxEdXnHNmsKwqyQFCe7rAbsZ1492mH1ybaTW5CVAWzuxEZ6SjFaurdjXFJaB7czecBY8QXsJmmdyeQ"
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
