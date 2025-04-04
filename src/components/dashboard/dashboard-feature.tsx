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
    "5qehmMsrvX2JvXdB3XfBFfgLcdNHYVr9QrKhdv4yRPzKiB4imngBibFA8ZLDaLDezUi2SdGVUmwJqp9XN2vY7r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqtfYJbdGscrYPsjKBHrNm9gNX4W36WQfYEPm85Tsz7cDaiMXYQaWf4LkzGFJuWN8QiPiWe6p7wtx8G4LhRzUC8",
  "key1": "53UePe1hSLUDNmQDvVvgndd3cKe6iyeSJbrbckMo7CFNZj8VDXCWVekPqF2zBn1t5SNEBoi63a2oiPRHYkZwcXmY",
  "key2": "Auu8NoMCxXvQSbnyKZGeodJBMNXv35kLtHdwWA13soTrDWsd2JCDx59wG3AdbNRYfPzhy5BGjexragF1kXLcptr",
  "key3": "4jpw997bjMtCqcJ68yyPtzmawRM4gXwtwTisHnc6XB5ZR585t5Ukaif9Y9fmM4hoi2g65RYQkAxvtGh85ohEFBcC",
  "key4": "5HR1ufjyk863bzbELsENwDpS6cpkv5VwF3ya611Piqmw6fanW9H4bEHd853ovDbhtpucG974iPHELivHgq6KCGUK",
  "key5": "3tmNbxYyTfoN3fd26pDuMjkwaa5mUaxai1QmDFrS623qt7QqaEEVGJFp6UNUBFwyVWu8NrdbTsXZyLLy3612VUqc",
  "key6": "4Xfi86Lo3R5LHM9UYWfw5SxWYhnF4rNoPpWtgLd1ixBnU9AoXSnXQp4DZAcRNQXH6d3TDfmyLmnffWns7NSUQZNp",
  "key7": "27JUuaoDxkNuLSVQRRoWQKfnKsKknhmK6jFV4Q5aCPjx3aLtGmbEKdM5EHijQ6JsE4KoVRq8knRuGKpa9eMscHbs",
  "key8": "W8FiTNVYcFNm6aFpYwf5oqpUzi25KhB5UZhZC8QLY5rcE4bCeg1X7uRokXXVYGjeaoijt3uR7VLC1oGhNvAWarx",
  "key9": "35vuvVNkyygjx9PGe4yyCfVymZFLkECD92wgF2y2aDvQeigFPNTFrRhNuNnP6nZYy3SBmTQLxNaKyTS6vtWFANLS",
  "key10": "5RxSEP3kuowVCGZtEiiHkCD9pcHudULC4npjGDeAxzb13Nvq8JymA2adX5pmEGhQqp98w2iDPDH3xHtPLm5k6tSg",
  "key11": "43Qz4fGGFSRPXtoGLE7nS8uByyakqvVbsPNEorDD5WFKeTCAtqLxNmSwixPRcNYuXgYNAXmV5pQdNJLegFpASF1k",
  "key12": "2FefrpA9BDmXWSh3KoDyy2LPRE2WZRMF4aQ7Le9Lo7ijqq3bZ3R4K5SxWEiw9RENh2Y8sK7xAqHgYztCQrxvVEnU",
  "key13": "3x1j6FEaQrLx5KYFu4C3hqRKduZjghYXHFbREFLYsHqkd79YciGVJa1qQSNjdhMCgksNkSS6s7E2XtYWrCvUDwQg",
  "key14": "546H3kCHtJQ8s2HDHzJX65Fx1qJaeQ3BqVUwxkPBfqkhYzYzzRnmC8QrHjqYeSMz72YTRtoEU7U6WtjA2zLVwKLV",
  "key15": "2SoiV1weswbNNAv43oZn6P6GQgKPid7b9pwnHEECJ5AUSgF627wPyYExuWABGtSTzCZjh7TYtwfhb37GBxNnDVDR",
  "key16": "2nNowGHqmd49sdkxru1nf3RFZjhvC6hJLXV56SJuQEnXB6g34S6uReWGu2b4uV36trKDe7v9fbi9ZcwjyiDiBbSf",
  "key17": "2ANdgW3bgSPgHKrhVa8TCRM8q4voA2jARnTpGYuaEdQcfJr1GKwF4oznC6tsJvrMSUkUVHDX25sccB76vRCgdiDw",
  "key18": "5qW2eHrYowYCvJhTetMHEJh3sgTmNiFk6vAJbZ2kH9PT3UKtCQhQ4kkDeicYmeud1hvLPDJYGshZnuvKioQLSJP3",
  "key19": "4sMdXcV9eZQTzmQ4s8kc4bQkzsRKZ5xyU59mUU4gwbB6zsKFn1eykzMYVijBxZkkHcLTRTXom5JijRgdVZEeJz4y",
  "key20": "4zXFeYEva9nDwnxBgoz64eb6jvTTtBxRSkJRk8e42KqpadfZ64rGscBCero8rrQ7GhzfZav9VgM4MhLFxagYiLbr",
  "key21": "5TriHdZkS1JL48QiWLSHWNPyeVizdnzsiG8zNczFhUN2n35EEDqAeRtPJjkNg31HDhjbsg4AgfFf4EHUCnCUPy83",
  "key22": "3yR8xfw4M9VYpxvKnkBhf9aE4Nb2QPjR5TvpMPCMWaRpnbR5bomxhjC93vTNS1M661csr8dpKa7RcoWKtNcvabMF",
  "key23": "2tLPaBmLBo6UUFAR7APVcYhE5d4zkmEiFyfPhfT59nfJ65GAepT6LvCo1VXeiLcs7phW1zRa7z8QrDVAcVW6XkP",
  "key24": "36CQCrCPuwwDqS1V1NMKP1wiLDFKCyQcFtvJLcFq6VFvf9XvKghRKZLEDjNgAsjffLpU78o2R1vWyR4v4keZrf7X",
  "key25": "2UpkY6m1njz7e3EqzxgAKiZwXM8Mr8ZKiL2M9isLEjHtx4gYZanEMMnixrXhSDyfWB4RHC4e5eLALyrnW8Ydben",
  "key26": "67BgAkoix9dk5UQRoQxPtmXjr9H4wvMvvUzWAbKFcAT8hBrbPhxHGXzdTdjZdhtVTeJLuyw97ZUyaxCMTy6bTKY7",
  "key27": "47fQRruhser8GXxRQbMCJxtDxHJCAWj6suPWUWVS4SYFhr65ScEC8CoEd14dvdc6Zd4rbAQgkDYwjkqCmaFSLCDx",
  "key28": "3MoUDqU1H6B4hcsWMerXuU1qmUDjajybpZnB8FPWesfDAJR8TxakQmozAgzXtMh1Bv1GX6y5ZVb8TVqg3cMVaCGE"
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
