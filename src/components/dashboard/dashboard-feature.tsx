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
    "p5xWMXLUa9ZTzcCCCDC7c3rZxquGP52GcHovV8Fr6YxN5aWE656NXLsBXBGiE8XUMdfbN8LLQGEHSYeg2H3J1HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35F14srn4JuZUqbjxxrvr3njMJ7VYjY9ZxrZfyc2RdxRVnkrep2Wm2eHLxv7aSMip4EHsqFqHFModLPoXf3YHyNv",
  "key1": "2RJuKfdY7P8jq4Z5v1vmNB22yFATtcQ8P6LD4eZpN2VifqGzpejGzKtNjmR9SbmWoW9VLRPN7GKVWiR8KDvRFTVv",
  "key2": "49hFCn5DYU8C2RCDPchfrGnqX4bFGekjN22jb3jWehduiKRkj3iasY638mmSYX1gxajX2xebE3oBsVatfuEuNPCd",
  "key3": "662MRXvRKEXWLNteBEkzkqTVnvVr11Uv7qCzRHcXnq4iKBzdy5fLMyzkRHdRNrx7dobb3Rp1CD4UKXvLjgnNBFQs",
  "key4": "5GHw2rPXeXkKhZC8Q799bXozqqRks9sU99VsmtnGUEs1GtjPRd67wDpQnr71oX8NpTdkDM4sPWrGijh5JPHEaTnn",
  "key5": "cYSd6wtiwDjxF8Pgy4sdGvFgpFrMsYpEAwS228BUR5mH5i8ZWCNKZ8o5PMmKD5FJgAePmUWLrkbJRAdmL73KpUX",
  "key6": "vo1dYHTDrtKEUEC1q1RLbgk4rreEkkzCYXfii5qcKWbSx7ZLsRLpuQK9SyU7yDK6aVQyhLr8oGq6NaQhJC4Tbwj",
  "key7": "3P16fScJY46w7wEWaku1sTyyDHXMNvJamPdZMHRyVhQscbmVFUqbWpDxRPJN4fn7d3zPK1za7WrSRJv9QuGpTHm2",
  "key8": "3kB4N2pu3HoheGYyEk76nwKNtzihmy1tRHqLX1DY3Dw1CTdvM9dU3JtT6XsoMVHrcEVmXbWgkYgNFTKB4m9AHwxX",
  "key9": "5jWndtccBZtp9JvLYXe9Tr5E5psgWCstRPamx7ChnnpPpyYPQNbGDNLFuBTgXxUcN6zizYypahi4gvXMXSHURCyT",
  "key10": "3BLSvpaciCaCkSKgPQ63MjDbRVsu9oKiaC35GpNYwNvg5DNVWg6xVnSCirPYxhicbeZFHjRSnbU6qDYS9SY3X2Lt",
  "key11": "5fie5g9pjXvvRwqicRbwK4pQwy4rU2mrLzsEa4iVBZgn8SV3RcxPRmKTHuF8THmgnft4Nq5s9mTiV8HeNxaJwxEj",
  "key12": "2wMqKN6SjYwcMr16JEJX5urryoEiho4SctSLgC2C1hVvbhj1W32CTZdMP1xQCeqNY2pfqwR8ney2HXQgUQzrZHxc",
  "key13": "4npzYqVEVoPkaVe43gXfkpBsa77P4EqqVfUjKZcjdEYzJUeR9pCyTbJehAzQbYBBPn33zLkXYaWm8d4DzVNNsEnE",
  "key14": "27rPjDfzq613tGfdrzTt2Ux5F5D86K19ha6yPQJZWBwQZbGgj2dg7KLrsJEAiFsy89RiUK66byGLgBpTqCRE2Ldj",
  "key15": "4ngvYZ1oUdw9gZGyijBXotbKoueWNuxZw2YWs2Z7zkZydtTHrQmGy62WVLH3hcLaFFJj4aCrDBrDBU7qQj3bRpPe",
  "key16": "2NhtAFH4qzX2kEMraoZqoiKkNtSfLizpfXqKeyL7uXHHkoPVAuh7mwxzfgpUQfbW4U2aZ3kL3GvkpSrci14hoGCG",
  "key17": "VpBu4zpTmhL6wz9vSrS9zQAPvEvdHNgiRyFsLZjXhJ5makkWYEfnBipDsUiUa1BsMEvjPAxoJPV3SXjLDvUXr5H",
  "key18": "5yDMoiGnJwkpcLaubF7X1bZrAYhLVknpdMx2iKMkqk3jmLzHQsxCjpq3Np7wWLSgWRYCf2ETaaX1karVPBSeLFZr",
  "key19": "ZQQGjUMhu5M8BKQMUm9xdX45JYEjfiT3ZNv23iMTrCiFrJt6YNrexUvkaSTyDtQRsqgM9bVUKtjtvGT6fv3CMCd",
  "key20": "3cc6KoppW4UfiZjcaTG4Fnp7jUhhjXUMQQB2YgFA3dnXPykqgZQTwTesg5xf1eV76NTiLonxHKDR5oomZFiGrPyd",
  "key21": "46H9DF3prRkZBBvmXHyhCEEw1Zj4SenuhiP5xqMGbwiXn3hn1n3zr877Q8PsnkobtcYJAS7kTgCb6eJCuGxyJyq2",
  "key22": "4uByiZSBLurTRm42X6qynF3ZJfCiLPf7SzNb8kMZX8DqgvE3akbGdVLyyP7Vb3SuYq8Fc1b43Xzq1skTVbtmBHhw",
  "key23": "542Y4JB4PH5vnWdcqWSbLsvFdEe9reeypKEBtFC3BKni9FAeBdXaqJEPy1vA7ghKpUcKYdEqRvZRJ7pGchequSSu",
  "key24": "3uPU3fGCgAoe7Fg2vkcZwN4wAhEod4U8uR7s4KhadmjwaPmjfZ6HxV8yoNrFhYJQTe3dLix842GVPC7pkBnsr7wW",
  "key25": "2BGy1zkcjJ125ityC8hsRGQXMikNkHaxJ5LffCuHZKKkXhJa1NAvMGkGf8KRTPWLEkQqVXQytmLjmnq5nBGc4BrX",
  "key26": "3Rgky7zheqc5ZiLmLWsohZhBnxj89NVPhsrt3LTHShLbnACN7oEzAfErNEg6XBZF9Tec6J9ZYR6S64um933vyRrX",
  "key27": "4qhmPhPjnjttbPy2ZyMevxRMgQJAnoJWyStUdfHWSkmaQzrwHPtWeCc1pMW7DFc3W7gZ6otxceZ7ycUra8Kh2Lg",
  "key28": "5QmGoDkdvncbReepQSEfXbC3P98tMkNj3iJi74dXUNoKay9UW9rS34jesxE3HEE6KjjDURwT3EtYB87WB5Byoaup",
  "key29": "37qKeENUAxRJVxAXVj73Sz6svSg4qo4Y2FhJ75GB6Yu6TR9yUEZKWJwCATA4SBWxcakfSL7Mu3nHdT9tS9yyZNpn",
  "key30": "4CdXQtyu5vHFKAzo3e5oqaoHatgcq5Ri7M8dEpKPAnDvJ3UhAAmcBTWB3ti5xum2tYtDCBJEmSsorFEzwCReLcLK",
  "key31": "5BZVnF2jvnC2oMhCgoTiqZnyDBctkpjk4UMe2j5Pvybjw3AoHm13goJFSG5vbHn3nAscXrmK4Xfk4xm15E7NHa1o",
  "key32": "o6rvCXnAxQj6myQXJCPXNSBHvzdwLoMMJi3Pm1vH41dMyXqzpoKWC3bZTNDnN7bdKLQhBqKgyrL2MsfQEDPsh1v",
  "key33": "zhL3TxzvBAhGVhoHmyyqPG6dyVoxUW39EVsibWY7rNq2i1iKJ8UGU8AC7Yqa5h9d5cV31YhZ9bR9mxcdjK3xWtC",
  "key34": "4oFiwsyXEwzYeZmN2pn4bbeDapFGFQRCvsRbR73fYsQ11uvUJvNv3SCHvPWU34okG3aarix3JQTUe7aZfsTSqRHC",
  "key35": "4wKtCAUHAXu1hU6yGKT7fg5wreLaK3QGAxVcqPNALTGADbEEaFGWhVWxFneCPhKUY2hrhgNjjfAcw8jG5UmtLoCE",
  "key36": "5k2Sydan11PXiu5F5wKvaA9KKQDp3irUXDssKJNMPvxhaVdNRmRADmBEsh7J1PGtucgK1eU18UzP3SxWGcjVmPda"
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
