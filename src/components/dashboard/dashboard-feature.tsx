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
    "43rtSvUcgAY6i71XdSfCPbgRTSjsHhvGC4KsZVs6RdvL2tXSdKjw9uwSGhx1aEQ5czhyECuYqpHGP5EegL7Fsf5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHUcddwFrN4Af76qCcViLp6L6uTb2y8qZEu6C9QeE5EtF2E6jPqVFcYcWZwzoN3cT6GfRZUFCLTXs6XU59hFyBY",
  "key1": "4EvYw6PbStxq8qH1imNr43eVBxbaU3aFnWHBV3GU8VLajZDwJ9VG3fCM7j3nDpuDHjBeaRMX7mgJcWi4sANxdd9H",
  "key2": "5ga6TMkAsbceMz94vWZGHnMbt5hiHK83FCWBJE69YnYgEyjJj7QxabCCaj1zmPY8phJVMfcVEm1L7xmd2ir8ForB",
  "key3": "3AQMzJCsSs2roPw8ATr8gZffKh3UwEH267np2aLbVwBs6Zn2zcK8LjgkEsGcwvTHoBjjQpM6kfHVCR5fkGh5oFUH",
  "key4": "nvMAR1uPr86YiA1RcHXoDoWP6GUvNTMFdFLK8AJsSLuS2p9LJLTvzfapr3PwANwRwZsBwFXQzSXcpFDwGNj5DKX",
  "key5": "2aU1w6rkvn3W6fYc7Dq94oez5r7unU1BCS4pnMDYh7LSj4TNSeWjyp3emoJnNf5q9Y18qNWAUdgs2DMBnzXau3K5",
  "key6": "4miUszAjrbyx4pioktiQfK9EMmbHtJBnZ165eaEX3YteYQnMFNDebgZobVJ3cwWav54cCnxnfqy5gxaNF3VJ4mUf",
  "key7": "x3bQFWtxaFZozYH9YeusLZ88g79Z23EzFwnZZUw55mh7HyQzg5smbdf9mmKPgAFf2ak8LTEQe8thGWhdhTeZwTb",
  "key8": "2hjg8Ai2rdYzbaE2HactfsRiLuMLQnY43sMvLxxHRmX3nfUhyi4fgAW4mHHARSUNvpMYCwhnsqD8s6GV6d9W8HFJ",
  "key9": "3pGHuqxyQXuHKmQUF66DNE4nJBpZ3R17ymZSUBPeMUpKMXXyYN6Xbe2d1bMPo6mB2SgRwKGbwA3swaHq8kkYSUg",
  "key10": "5yaBpVsvK2HXt6Me2cgA6fk8kTd2rZy61sNY61oFpwC7aFQAg5bGLaYMbc12AWwiFj5XD3w8F18WfUZqvdcYSHSg",
  "key11": "iDLyMzkSCcQWzj611R2RekkXNWYZZdjdM4bF6mjTPRHPAJxX1iiscg7b9kn9Qv1Fe2xrUGkjKgzDvM47C6VGeuh",
  "key12": "3JEEimneENdZNtwvJrqo79ih3HsYV91bppDiXMkWuPo5LYsWn65s5fKB4xQxnNaxxpUXkkenKwrQxFPKbKkDpSeG",
  "key13": "2UsK56op6MsdGNA3d4Qc4vJFUhmY5gKghntKfCuGjugrRJKDEo25Qo1dHJyU17hfuXGw65X4hriVmjMdrxA2ktDT",
  "key14": "2jRoBGh7JeSxWBvr33zbKnC8f685vpe5mC1fH3F4SWGut4FexDkQGiBGcc8HVDq5z8o4Umd1NPsDGAKg8xNW5bqA",
  "key15": "FicYpLiSMPbpWBxDS7i3C38XHiwESFWNVMuLhNVghbBvWZNmNwvDTnjxD6SdUotTLX2t6nDb4xkvtBt9bcc8Aiu",
  "key16": "4Sa1b9rVVqgXVTGNJGxGKuUdgvkoGevARUBxaqUkVYFHxxRUsNLemg36m2Bdv7QRLxvKktRsL8hxgpxc9TptbKEh",
  "key17": "4uUJXkEt8JYG4X91aiS1mXFfrhGR3q3W54t8ectUj7JaYCDVRXpz5FVuWzRWdTvf7hoUvLRjS63yBjyCi2qzsMvh",
  "key18": "5KewxP6mXHYvZivJHwknQt6P6Da9EAPa4ry8ZUSbaGR98JNhB8UsCei7fW9VWBuJVpQ3MGfSADWzvuwXq7P1sH1G",
  "key19": "2DFShDpw9aVCi55fVMgapLBFboHJFSs3562jR47uwsTLdxqw3bR7KhWJc1cXh8tRTspB992Tv9kXqbNNsoy5E1jr",
  "key20": "5owUYPz3JNJA37ym897TqEy8uAwjWLqDQPP4QJhvyRFjstjMZKLqyg6YrpwtoMQtoxmDGhapm9BDqvcWzMa6jEy8",
  "key21": "kiXQRYEagjFEjdpFb237NUFnracFVoAU1vJLRU5FhBrxWSPNfiPXcFmYdRFeX4aRfKvccY9TpKHSsmJ2En3ac6c",
  "key22": "4izCjaq3EgfhuD9RMkV2cLL3WKyUorh8Gnzw4ojBNQdfvNSQwDm5mEiBdxmJ1nyKkXXmWcjeZrSn71WygiA2A2Je",
  "key23": "2gjUapDgBuvogcxKSbW5yLpzLbDXRxv5s5YupGZSUwnt7y1kS759hz7bb15ztZUfeqBpksEA34DyohQXRbH6Qmp5",
  "key24": "4Qgr8GSMzz8oyZY5VHmRsv55LNdupWikhZzMaDropwVGW39xhtm2GMdPMDkpjQyUQ8UjjfhyikLVsHXdt2FLhHhu",
  "key25": "5NZThw1BdunHkJKchKDwViXeLmtxUJmbn9ZUiTUzUmhxZiskQxERtQeTRLMGqJ3KRuzkeJb5NTRviPqBKHw3buaH",
  "key26": "3V3nCreuffmzJ5KUaFjJh8M6tJGgrNp7Q3Zp84GwaGtb5KokKk91jaUi2utF1esa6xdizXUaEFyfgyJtAzCENMdi",
  "key27": "58KbUhhgi1E2gKfNNfrEbtG7bBYTHEpKRUstCdARjKzBWfrYv2eLRz9sXEy4V7q7EwHJYhX1b3B9WiPHkAq56EUr",
  "key28": "4niBYjiTPABSTkGpXTE1bjfCFs8MCLMLyxkurLbdLboLrEtwykoZvDF5svRHEREbQrFtSBaXsJLEHBF9gTBFDuPh",
  "key29": "366Zbnk1FQUPYjzqF9CKGTA8FfpT2sri7zqardjX5py5Gx7KkeTMvfctye3pwbCnsnQtYTRMcBvadEGQUYwpc618",
  "key30": "2GPrQyZg8vQBcMGL6B66TKGee6nGFuZAYxA1BuwCJFEABfyE9TNTzc7wWUXqbL1D9NRae97sBT8FYDoXyxZ9vaNk",
  "key31": "5oyinMmYLNyz8U448hzdhFVcMWDxUQWq8K95N8sjQd2bsV1bKYEH24Sm39neE6RNte6pPG6Vfc5SJynVqJtKqe2Y",
  "key32": "4cQwe4kski9ke2CQtu1pbPfy9C23k84eVYPep26RwJnBWsSVUaPoRGF9jMYenENesJyGJgMcdzzqk1xkA8E4eVZi",
  "key33": "4ENbLgaJ7YATMe4UcHusQ4XgJUgywuLty71JD64AtdsVVmShMyvLB3Cyhgrve43CD9PYzoVqqcGfuNFEkH3iG1mH",
  "key34": "3tept8kwgSrAUNjkPLy1iQxyJEtu6M2qAn3pQV51eVx5ZLsWwn7DdYd3nBAe1uHRW2WyQzacqijJXgebuCP6TNgy",
  "key35": "CuPUgBXHgxa3QkAcXjnuU1Q3tPH7D19bUYhAkwMJ3o6HSWtWJFnCoSWt1HQ8GPPwiocoKiUfM25PYQHMZSGRqaY",
  "key36": "2y7wW31cHRQ3yrMdDt4SMVorsYtsmobDyePZNtCTSzrAXTmZ2EWDcUkLuF7bPrLDb9TrznVMHY4UzfXb9gDq8vKW",
  "key37": "EzThXtwiJUsSHupySMy27gdjgzxQK31rG43Mfa8NtUoGbjZWYTkU3MRWz6bVonHPt3wigJetVi1qev6caJvnsXF",
  "key38": "44WuXN3CpFzj36pKSSM16nX2Fm1NY5gzQLnaWiAQY69urpfcVtdLdMGiHtekE9YvTMFGNVzNM3feRDkJ6yFiyB5V",
  "key39": "xd2uo5J8smub54Sd34YXbBH9DRdkPMhPJmyMg8iaonKvgccpHcgjbm6LXGrZVKudYuxxJigBhrEefGLJ6kEVAPc"
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
