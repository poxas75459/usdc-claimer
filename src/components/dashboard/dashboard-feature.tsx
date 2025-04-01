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
    "mwXuMBDZ6y1idzZ3sJmAAVhtyEUPCZw5Yu4uJBBNPB27FR9ncyAQ9bBm3E2ogDGoNrxNoXNZNnb3Kki88fBrsm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31a3K3dmR5qx5v9rjihggHCyKc5cV7jbgkXHHHZNT7ikZExapVsatF6rhWkv8eHC6k85CsxgwDXj28qx6ZVu7Zb8",
  "key1": "4273jeb3GPGjMAD6s2CLLRCUEbTAgX2t12qC9P8jy9MCXMnrpYMNd3vkjPgLmfqxcFFAaXXGFgV6YpkyJifSgtmc",
  "key2": "rtdWE2up3QaVthyZE3fBN1h2Efye3xABwjTuNrq6QVsgjJ6xs54fvNyViUpKW8UpBY5y6ezSbcNEbJjWNdcYN9n",
  "key3": "5kQrbePT9TQYb37wf5wH7D34yhn3kCmTuw8sasyNkvXhTPJLvQYFtBxEG9o5kVHUcqTVX4Lz7VdaoXSFyVAee6pR",
  "key4": "2SLNevnREAzG6UeAB9hd2u5W65mHPBXU8B2uJtok6NgkKXEHR7r6dRQ1UxrkmWZkVdfzfZmERDnnCc27T8CxU3Qt",
  "key5": "5z6ruuzEMnmSBrYRBzdyHvLRS2cAA9yAFU1rAtKVYxwc1L3fW6fbxoXSbqbgxTBeYtEw5bidFqhoeGZCB1ogUxnv",
  "key6": "5AqhAXuxDM95kVgth1GgLo95YLncoh4HGQ5xkhzyqBJYQZvUnfv2H5DSkMuqzt5DRZNDsETMysAFnz8D8RDLpBiB",
  "key7": "2s2TeF3juqzmDXf7WytVMHKDrxMJNVDvy8Rbp4mKPtq2iisDzwsu5QVPaoSJEETehGQ9MmcqW53nKHkxiD8eQo9u",
  "key8": "5oA6D7DhJmkmzo1yyLVCT1i2S88Jd1ZRbgqYw2ktBYiSXe2vrztgiatcqYq76urSQoa6Qy76DBfki1kEiqLT6feY",
  "key9": "2gkPCqk6kJx8rnDpn2jf6YnJmQfhHnuYSJHTxgBDWE7hnZxsNTVAVj2nRcLFi6J7YionpuikQhmrBMiCCABhrMFZ",
  "key10": "439v62c6TcUVo3B5qUUavY64N4a9z2mAYEdbhUvP55kcRcD321MwKmWqyRSRx81dxSNp9cCBjMk4AWQBHzKz6bPw",
  "key11": "4bNbCMvqLSGFFJNyHYvkda7w65eqP3BqtyzuRa7nnMb4E4xffQJHWcmKjNjbPnC25eMrkME2tAVW6ECwCJ23uAHh",
  "key12": "4bthKxPtZeZyNrtEmDhGPf6KqXvjmrrSj9r6NLhxz9gUcYmY5y7adcRK6kSm67kmEFub9K2T55P3q6heeJzGUhMc",
  "key13": "4LPyYE2mGzdM6ai5NJLTpXkNPj2d3z42SScPVwxU7jsmq1GCXbj2yyEWz7La5W7g1vJQ7dEGDRNdB8Wr6gymn9ak",
  "key14": "5QMgbDHrT9s4yGfYtgNgGeGFPp5Z8kA7vNpHiJPst7aTj2gEJpmeb9ouwVjFWEFdFuW4o5xHB9edZkoFEoParuEE",
  "key15": "5oSmazKLVM3zT38EUUQxQpm3kwHiFrNE8ttegm9eD662dDRj6MYmT5Fh57VCPKtamKjBtzqaVMY9nVHifb1vMb4g",
  "key16": "5D3GJ8cao4U1RXdssLMkhchWhFRuhGgjTmT9rT9M28T4LR7mfa5JGiYZRQEDRkroWp3fSfUpEGZA3Bc5ogt8cRD1",
  "key17": "3vvTkz6HbpP3yEuWFPQAL4pCi9VEsZpbX2imbB36khAfte41YG5iP9CShu3oLJxUhVrZuU8gaYrh6m2W76YxuaMw",
  "key18": "2cAtQRTAdNo4YF2uVtpAVfPQR5DognrwYXWBMNEvg7RTsuYbsf1KPHif5rbuFWxpuh2uHiKfFtjJpoCKAf6H8QcC",
  "key19": "4owv2T1p1cxj2JvsKKYHc9F88e1Pnjf6VYkS1BUtiNWVrJrtPWygAQ5mQm6N6WT3eBz81pFyNcMdWKF55XMZGmd7",
  "key20": "u58C1LaKUfGe53xGxkG9ZscdsAdqmQNpAi3jGDU25b5wqGeCaLcyhoBsgRtXtJ9AP42jnyDgMi8mBDEE8PSbWZz",
  "key21": "42LMAnHZqRqr6ofYSmXSR7Hmf4BieqS7ZbuJdNRUPmHtREftWBiPra5w6QZU964cbPLpyiEWR6mjegRZDHd9N7Rm",
  "key22": "2HiJSgZ2kDURVajDMr1YaMPzF899pmwxk8HSXGAyzvanMdDMnMxCAkttwErenMgSvmZCRLcd9qs1SubcWw7sZcg6",
  "key23": "3WeSKjaHUkzi3AKNr9AeBeVLAJaPrCWdxwYmwAkiWGDMFqkuyKt4gf7tfrkGHtuZMSxqDrsUbychcvahHRszmNk7",
  "key24": "2rGfxd2gqFmnFGo3DzCBVjuHLffoHfXUPvTouStwje62ce8VhA2ZjZb1rJTocokXk1mgZFMvJU4xM7qbfnmwPqWK",
  "key25": "3NjcLhaYegxjCxLEs4ENZ4b3aToukEuuHn8Cr537erSiTJ94S1m1NV7gVrz1TFqS2B3oxvWracG9XE1rkV7DwimZ",
  "key26": "5uDEEXGR6impz7D69YZFhzMBeYqddMBo7mToqTXvNcTQezUVZKgy4t3h3vWqiSQpSPvN2ntdLW9iR8ynadwgvZzq",
  "key27": "31xhHZ4FPBWHBstNrJMfRjgovA8ezpwraEuiMrQG7RoxugkL7BmDufyrNdhK2eZuQC16FmVmUZiLUdBRsbsKe7Lx",
  "key28": "4jV5judBRHTmTJ5saSQr2FAU5fpL1WPHXcXa9tZ3TJqF9aZfWPU8JP6NPHwoUZnbwew7GJx5KNdWUZnHGwT29aRj",
  "key29": "4a1SBivpTT4DCxSCC1h5BVSTkTDkwHjJTqjYxDH75t8NxC66aBHYR5p4LJSD3ufjHRa88S5LeggtszEVvXCbUQz3",
  "key30": "3J9Wp6H4oTu2rH7H6zAeNgf44W4CsYpbAn9bKNgdk2HcsLG5w7LHpBM2pkzayrPELKdrjnA5Ax1pSoHJh56LaNDv",
  "key31": "5yaAKZXR119BVwHcNBd6KsGqdzZ8ccVMu1hR5tfV998T1TMEidx6ysCj87CRHTWuqeNTE9UhHyTmD4jCQrqpxyjW",
  "key32": "668APZTFhzUkiyT7MgukzT5NjTejpKNSQjPLSMWR2kuuVuAy5wQPfSEbqWPLHsKfwzkwMwvktH8MrVeCkX147NBG",
  "key33": "5PrB4xLojyietxjEmiA3LmvbfDYtuDvchJC392mwKtteeLoe5PQDe5TLLmSPpFcy5W4aroi6cL68nuMY3DSTD2Fi",
  "key34": "4eJWvPgpfZpVyBdn4a3Qo5ZAugE4j6XnczgufCtuk9hFdftyEPG1xQrrwFD42F9hN54yRqwb5SDPPtnQWYNy76hw",
  "key35": "2KTaMKYfWxkuboTSCnTvhh7EeH7rf35SYEmimCRvqcYgDWYuPV4j636y5nWhL2nkxHXRMXUJ7uGHVgSkS8k7rqLG",
  "key36": "5oLeeqQQwdteWX4jqqfPi2U7MWCaeRsh6tmx782vUGC4WqpD4fgaAzeeQA8RrS4QiYjDsULu5ykHz221KdGbh6Hy",
  "key37": "2HtQ69mDNzUXDrW8yyGLjNLwKbxyBcWUNcUVYRt1rEWpLehkwV9RAfNcST5zHTfqs6QZZ4HwFVFfcZfGKq2bez6q",
  "key38": "58f6hPGwnkUWiCJCS7UWRyTMy8MKV1VZTxXAAG7FpBmKNR5CswfXGxwtUvRWqLrT4PiHsZqCn77dbhjGohtQdDkn",
  "key39": "1wQaTT7QbSRY6djAZnabNUpTBfKwkQSC57tQjyYn4ZmBsP6RSCWD7yuHTkbqSowU2i47Cv4qrociqd7HiEix4uy",
  "key40": "5bvTJWqr14EQALyoSEivjAYiubHQUhxNHyRq1Q2XJsfnBEbSHxzK3jzJ4BcGVUA8pdGF5p2Vq9TDsUU666ZHkuX8",
  "key41": "4QFaVzu35CphmMwiazHNM6AL15UBPJCnbJN85FkbQ6TZbQzTQypNCwBejoK1f5G8dExa8SBYMCGyaBVjXUydiaYy",
  "key42": "Eo9sdxJZwjj1w98ZweR9enG9PRCLEDe8gdobXdFBoiGfDFwRYreSsr7SS2JoL9Zcdeq7VmojAVeHCzFSV7UXRha",
  "key43": "3drueLesEU9W2kc6PdHM6naqRQZqBwcbWd4fsHSstdrVwdxgzc6KZ43AsKs8UzhLFv9mmsHULcgJzjzPR79b1S6S",
  "key44": "5sXZpsWuXoewcgDjwH5vE5eVgKijLdzMsuUeGLFq73vUpUBir4Xtwyy7PZswBjGXcVBrje6xppPUC78CvfQTUCuD",
  "key45": "4Vyg7ASLv28bgEwrTPne84QPsQQ5m1AXU3dsdbDMdhLJ8oyQWupxW6tt8vMU7QrMXFtw1Ut7rJAUmzpcL4hLDwov",
  "key46": "5S5ZoL2ZkUPPtCD5gTefcs9foCSzJw7K1qBoAz3Bp7MfPL6wpRnNKhMw5PRdnBg2HefvhKxfJNEiYHtkBPavLYtD"
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
