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
    "5iVfYEj94HxxWMkXU1qmNQqcCRJ9dyqUyWHotuVANAah4qEZNf2wD1Nmc6eXCZnuyp56jbQ7rr9EPFBjEiiszNfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNsYy4rFJhihFsQhVVhU3i3XrQXu6vczMWLxP6FvbKL92XAwPo1ztVH1U9M9Yd7598GRJ2t1a1ripJbP4efw5sj",
  "key1": "4NMMuDJaYiAkR7YBQTgL6mBF7UixcArszQszxczhc3F7WTSsGavFgDsdNimDRC5Uz754bH7yWBRwx21x28w8PaTb",
  "key2": "3L6LUkpXoC8ZRwhYo69sfwpjD2gmWhdTNdLEYVfkWngBiqQC79RXxfqTkjcAfR29HaYxEGtW3h7qmhpt6JZcKJjr",
  "key3": "5acW3fLwZHt7jC9oxBKjSkiedcENnUao3bNZxhpYxDPbWDSH6gkVBe4Ynj42LmQJ6hpgrsYZyqkqTMw5QdgHsRtk",
  "key4": "4T5Ft8T4UEai9dy3qiQvuSTNgVMZjcRVfy2eP95BTejRzwh5ihKXERYm6QmRM4gUR223yp8jwNqWvncf8WcpDkzC",
  "key5": "3aqSEUqwMCAPBqFQV8q45HDa8dv3C8Jy64zZgTVHWVF3tMawrMgoRDFj2HJYQCbyB6ZcfWCCffJFEzwUbKPtJBQ4",
  "key6": "nbUzG5WfgidNSAJSZJTPmpWna3MJm4MEnbQL4Nwdb9YbByDLh1hfNaYSweygTKFpKf3uzs67gfkhMo9Mkcf3hbQ",
  "key7": "5AjmGTUhxFQ49AayNDwVsgWa9hMzDfAxie31bfQETZ66UojRXFhvzKX5Zm6PdEERAKf79ZR4y1xMify1e8P6N3t7",
  "key8": "66DTRnSbMnngz4SzYk4jsAzV94D8Jcsmi8MYwsVvievX8nt1YsEWPJD22xHoFdxd1tcQtj47qAkAVXGJX4gRwhMT",
  "key9": "45ufozwaKRSj8PouPukwWHmDBcTKihxe7WDpJTe6uUNwWRrhspu6HK8pKes9NSNPP1A1f7pHicHQrXxGyD6fPHNH",
  "key10": "3PfrdPAiANJqPiVXNAKKrLSfbdxKiZFHoXwtMt6PWJbXo7q6UHj18QRRh8n8SRNuBvWkhk7xjLNWGsFAvavvU63n",
  "key11": "44TP1D5av34Pmuf5aDfcBz4mjgL9N5kECfsUakZ6XGZ5kQihbbTFnBw26DordV9847gt5kkPeZedtK6S7TzX1sgf",
  "key12": "sB1nxb8EUcgqhenx47ZAwuq7c2KepMm9pyUNMTyb6eJqNRQJWYm2TVzmXrGeSzasBHu1XnA4gX6j5dHonBanhFn",
  "key13": "dwKQ8wfG3CaxhiEgKzEsRTxjJH9Ruu5XgNYtR3uCKhXnpZH9XBMhSwnTWBNvZf19miFVx9Jk2QBZ2wyzrh32fYJ",
  "key14": "D46fHC9Lf1SToFh4muusEFgr2r7tFwcSCymK5wiTf3kqk4LgzJx5Siox1jiYxNY2LFhxDFVe6Jh8Zo56kfuykko",
  "key15": "4LN6rZPCkodjEsmMJ7qv5AHRca26BeKEq2DskWrUHdhAjYnJ8b3WM4EaDqGukDnCNU84jn626Xc2s8B6zdDjLDtf",
  "key16": "RWg91eNhE7kKkZKHgyDf4ZM4ejwdvUGRef3QRJm5cqAGK5dDRWz9b6ZHt4Tg2rDPPJVgfTZkxVzSKbHE7SeMrdp",
  "key17": "5HbHeNWScCRhPUCf4yCEJcFgcwMDKSP2yTLiiXBniv97gSEov9MrNs4syjivM8mCk5EAzWsnjRUiYShCNrsJW3tt",
  "key18": "4S4S4dB7dji2PjjQFtkWgD2YpcEbkaQ6Ach8Y6LPxn4ZfqeWjuKKD9JZFNQ8bNBUoNg7dEDJBGkxNhmBTwpvT4Nz",
  "key19": "4c87KYc88Fru46qqeXsLWSDuxKBH8sxKtyDpX3MZtPXBE7Lwe5Nszr994yc3twoymDZHFLmNtAQq9NuCuUGWM9iJ",
  "key20": "5pFybNLXszsPhXWmyhe3iG8o1JR2gwfSMxi1QUhxRbYkZay6DQAKYqRUZuwnKacCeeTSbMtDS5fUhpHLsGJFT9vi",
  "key21": "2GnRDMt3TqGcwMEbnH1pfgvZTQfxiBnRF24c99YGexhyiyC1SQbamka6NsL4J2GeEiXoBSBPefxBNhatyQiQk1Jz",
  "key22": "5kPTQJajPb5ygsHenHZNC6qsdMPq5F9abB3YUyNT7rLkbqGv7ndY35BRFpgejmbdx34RGsx6AW1tQjWnGFM4LrA6",
  "key23": "3FD8z8rm69g18QrxSwangCJKyUtjqNw5Y4HhL6vhTAKRkXHipS3YWv8jRcWVrX551yzanwyfSCmqhtAnfiuhyzGZ",
  "key24": "3hDDCwXPHWcMseShAaRzRdHut9bxeyUWj78JQJC96kGssXMK775SkV7SvfocidAzSakfREzhQecnx9798y29hMHQ",
  "key25": "3BXnepyC2DaZZUGhdHTLG1LhXkmvR6xcZK4vdJja39T4Ci196qfoJRpYzCqEpBGzengySwuEALgYiCgBJnuWTsrm",
  "key26": "4RJSZxku58ErNsL6pNir7Tt8SbLk8eFEtfa7BxRRwndga53fRAbpVSb6NjDyi2DN1h2vqHDHCnfya7i3iUcJLUQs",
  "key27": "3pm15GYSGKviPcmLSTnnCoJfd4gCDz695UeaJpjo2G1NQ98toCPB8DdSCDhXHm49cB2xMw1nFpQDTgTza9yLXYh3",
  "key28": "2WmHTSVLrgqw6iw1GGdYij4kYgmCkQT6dRYW58VxnCG73xZMdRG69GN6iMGqguaVTmjkYonr2XgT7ioR75bz58d5",
  "key29": "491v7Z6fEZTbx2qR79QT8jxVxCLL5hqoXtqj77YtxEAGBpCZPFcaac1EkxC1DWfZXjKvaCECTn5YohMmTDHxjzCf",
  "key30": "47y8xF7gmfMfY2S8e7TmMnMZaAkYnoK1Qtrrj5B349zEizG2h3yqkFJs4eQssi2gokyA4xrQf2Dxs3hmaSjUiidQ",
  "key31": "5wRQXU3frvXBtwuPL3neuH6b3tzqUNvR6zsV4a9S4aU7Trk2tobMdzvageTwdrVXxqVVQAdETzYqTRsyGGPbrU1J",
  "key32": "3nT7WEGYwkZEidMYMVMfWFfJSHmLmVM8a6rYUPrx5t6LCTsYtJQ9mJxNTvLJFKN7Uz6Rfj7VCiHz5HDxPt7GBgru",
  "key33": "Jrzhj9wxRv7t3k3yvJ2ZS3APJHcKUyxxxhDupHz2REnJsATfVrJLBfqFHQWPEQNQ5Y5yt3rdqQ3b4ugUZQ5B4om",
  "key34": "35FZ1g8UFK7jUrMVAhXLckFWD8gXXWCvTyGeYYWfuPcQk8sZDsfYRjnVoFgNgapRBGyv4AqQqqZt5gqdaqVicZpT",
  "key35": "4Pkopin9FtixwjjSAdfYdcpUe3YagJqfTNdqeMpKRXU4chzqhFh6wirHWHw6sVodcoHg4oZQJcf1NuxoX9qWt5v2",
  "key36": "C7vr5Nz5kMChWqrL8DF3aoA33fGWyYd3kZP15cCS7xd5cfxdG4XxwVHzF1WH8HDmmXNpf7J8YNEewdYaaFbJEUn",
  "key37": "5SRcatD9h1sbYrifhzrim7LLPZ2notga4yhfGe8Savz6hfwpM6R1wjuVjAtsVZRAhLTAqixu3isRgMzXvNsPSxcY"
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
