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
    "2TeezGcnwM78PdX3uY6P6axdzjtiwQCgQqyBJiPzFpPWNQgiK8FvqPPmfFeZDiBZcnPcbsh7s4M71F2VNoQg9QGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Rb7f6BSrYdxzMGAV99h2N54NYkqnkxDqaLQnB9P2boWZixLxM1nEw38eLt2xSz8u1Nxr4VMHEfbd3TNTzc1BRC",
  "key1": "2H8cZbwnyjoMttNJH2V8G72ZF5BcHEo7woF1PzEupKLYsw14Wr6Wrk53XBSPe5awwR3c7gTXNM1S1ftRpgzn1JHU",
  "key2": "5q1HrGZ39w2jXdi29WQNggPCSAY3n4636txrHfq4NS5JzBBQPmcuXdGZRnUSJAevPzwkocDG2sHKjP92LFsuNNCK",
  "key3": "3sLaQTrcoT1smsmRRDGS8ftTa6i3Kahb6QL5vJGdAxBs3scgHwVzJD8BXwTSAgzDzwvfjJT8Dj65sCqRs1TmmGa2",
  "key4": "4bi4vsNHoR3DjXyepnTguzU7KzTtySYLYCT1Aj3fQPEEZumMNRiiHoEPBedCupS9E7crhGNL2nZ49RRrBUm6H15C",
  "key5": "5T86JvfSffzVqJLicqGAsxr64nF2fx5Xv9zoQSNsrt1qExHcwo8bhHLiM78kfbD5wMMNFbGJEwceMibeGxbBqH9x",
  "key6": "5KVea1Zc6Pyqk93ZtLVmt6u6KTNFw2GHDFyjq1uBfvHYA9spWEFu5nz2T8dXDXxcAkpxjE1aAMPVJE632jUinnhr",
  "key7": "vn5FmVzuVRcMVJFwcfADiF41jTZde5BepKPyBuJZcXc4aLBwExxbw8MLFcZozZC3ToMXVUs9idiiXV9PfKghDyr",
  "key8": "2pXtpqATMYb7wCFYBnqxjtDE38bXzDzWzaLNQCxu56QryBCNmTGypkEvRAaes2Lo9PmwXoRMhgk4BD8akGJTjYwb",
  "key9": "5PgJSv53Hi5UvVeSZXnqT3Dw7PEaBKbNYmj1PmqadGswmzKA8LrywLHs3J2Qj7v6sD9hoJ7WZY7tiT9u66UW5SoL",
  "key10": "2isLTPRnmshNUQNNUxR9ykcau2491Qez9r3YLmzdbrpzJZz62bBMm848wgKwWTAXY3TKNpSEgGm8QB89hzAxF7UK",
  "key11": "5f26bFmnV15Cgu7XgnMCxPjk5T7jRmxPiimn4dHyoMUoisuMU1R1mB7QyEfpuKQgxT54ZZUyAzuhYc3N4gKytQjp",
  "key12": "4xcXLHGMR4T9uqECa9goJmsT75giDUUQQqCHEywUjwQiHq1Hzny993HFpb7bwUpZsiyZocnhUu2GmD15sPivspt5",
  "key13": "2xLe3Vy39LTsFkUfs2Ys8N5upcWpQLdGChEHhPxiHP1328KQ4i6cLXLKjSnDnoXpcrNdQRxX38M3rjAQ3L1PChmh",
  "key14": "5Q7Tr7s3j5d1LpR3NSd1ku7KGn8PZsrrThPnaw1RHubsWWSrg8STsS5bVc7jURQZvkeYPGUWJ1XBaCupBYcKvL8y",
  "key15": "2kT7hvS5xqwUbt1gPXZdSHvgtP7ThqERyVMJS7ewTmWwPZWX5CAFpV4G1fvmv2GN7wxBeWGfykXdbr4pxwtwocjP",
  "key16": "2QfSd55BNg9vWPmUYofopz9bNCHGJqNKMh5QMaxAdG4UYDgySsi23HSjNuUvLDfuxHsZvLKczm9YeAejdGn5xfrC",
  "key17": "5cyFCsLVJZxs1yVA94RqhMgPbDLjHfSQH12KUxtYsNakvSr2uNUw6L2m5JJfcPAcdsTjREsL9biXJNBitWL7MWyS",
  "key18": "2YjC2LSGKCV79CWUErWJMMgqVyWZnSg37JZzp1NUqAwwcpyDdp88q1RzjsBfW18UCjRLu8VMAUj5M3nESpGb9EZV",
  "key19": "4HkMRMzxmKEEKCJ9bRz1RbKJ6FK24WvyKmc2wNnnyZsvCceZLjNRHKWiFNFv3mzLrEnxGJyYH6fBApHe2ZkQ7rZx",
  "key20": "2DarRegXeiaicFsCQ4kQdfxVeWQjj5iyLZJTpWzFLEKjdZT2v2qwU3PBtqiZNrJj9AMDiPFswn32japKhthQrxTf",
  "key21": "5KQSE11X2WaoSRARXP2asLWVEVMnJK6VCXaDx3W68hpZT24ixkiJUNy1wrQDSyKCk1jCGMzQcJ9mTjWDdHctVErX",
  "key22": "32yHYzN5cZEkyZjH5F7Kd6Vs2JGzDpBEbsbmqJJzsVbGpQashS436AWN68Wpd6W33LPfFTdUkBMPZHEN6xpzo1yn",
  "key23": "59Q4Kxpcd4QWAFtNMjtgmowSxUo1TWRCTHdSWbD74uTUSzoKchbBpsirVuZ2V9TkxeMUgzYBVkJtZA2D92Yud1Hk",
  "key24": "5t6C2LsiXNdFQQbSWYLyV3GnVJgnqd7RUm6mruTnVFgiM3JpwMQLQ6tAp9S9aJbV9LVTYHjnb82jyoxWpYLGQADU",
  "key25": "XLqLy6gstsCFucZVR4bxxnwserGDtZ7ptKhvJHm3i5VH2q8Gdb1x9bzCpfCt5WpfyFdkftQxU3vmvYbaoRxHVW4",
  "key26": "5x1e4pjhuviwnuaXeXfh3PDHyUQomUCAEnCs8PCZXx1KLg5gsQWddAbaUH8hSitefoyNnstPELR4KuTWfu28LUKU",
  "key27": "5Dj3vkvVVxF7VaLGL8xdzP34YrSFts1K9JjZ4FF8hSR5QNyF9FyxL3Tw6hqJVSaNC6VphWDxWcr7sPvZtC71iNs2",
  "key28": "C9V7QWE83TkKXc13mPv2tMHNN1xeC5fpj281ZyC9F2dmoNaBtP1QQNJPdLiov3VowQo5asbofCiXAe3EJWHDsyH",
  "key29": "2EKVPZUJ31NTg27imwWgcDRQ5DwRqUjH8Ubq9avRHLRQaB7o7rYn68r74pMhczGMBK5vzLGFP76Luhb9W8fLY19C",
  "key30": "4QjyyPEaw1dk44f2td1xgqMwEW4XwrSwwEfLwqpXhMCevA3f9Tiiva8ohJK6aZeqFrwmHBP1QRw7FrZy35ZNprw1",
  "key31": "52aWzptLxUytYeXJTuz8moftZrT3qs28MkpPVfjBZdSq5CpdomV7BwCRKVjV6CEfzu99pYFDMhMNfVUcCuLoBaSr",
  "key32": "nuHdgQQG4iJY8FSQPpQj2MZHw6qzKA97ktKEsJzxBeHn8DhVHeYoRSwkXRRvF51sonSX75CoQGYAFFP9EExrzD5",
  "key33": "4F6oDbcfbqSKaHpB3QGdPPN7LCraadsTt2GacgWheKrduhCQm5GbTY3fWEQrSokwe41TN2n2joRNvj7GrqUVsZ2p",
  "key34": "4iRcu6hdKBsTem3vMM2gTqhKh79XagaQKJDbsMktrj6efScaYBtemTfP8cN7QvbmoH5Y3BpQZ21Vb5s5HeTXhAYc",
  "key35": "GKF7AvJ3X57dPtqE97Bkg1mA6ENLKRDD3sJQTR6LmcTDGwM9yA2Vni8UthATmnRsrAaaRGgGPPPtbfU242nwDg6",
  "key36": "2gtijkdrgSk5jPtJJuWgvQFvGbJh5X2M261aCMqv6AcFWXssPvVUSbXUtijJNRTJ1i3NWnHmTKM76qfSBGKmjbyK",
  "key37": "22r4ZmAftqxz2p2dDBNRsPsMeBpXu56QSUuvnmBJqPYznpAmBMpbECfvoQJiwHSGSjRobpLaSCWvBjmP6zTXrdXn",
  "key38": "59YPjmB6nYT9Vq34HZ3Z1UCCPq5Cr8EaNcR4R83Y65cauWNQATT4HhuFMNdXbmSiooirZs3MEQ4xMQwZQwjRELqY",
  "key39": "4qqYjhJxzXERSy7AxDY46tqq2xyWKWANBDGtprYXK19eEmQPRNFEyZJAC9A8YRd2wwFYSGntnjXNLcCBh3f7geVj"
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
