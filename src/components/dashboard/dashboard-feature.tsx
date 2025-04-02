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
    "5d4zyZ4f4X3KLbC6aUJDn9x6ucMeeTqWNMKN2EvRZtDSk9n7GBd7HcHfjXCmYoHtMr5LHb1THtMKf6HjUJchxeA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDADv3akmUkujJYcJyD5Pf8cdpTBoxBxQ7su7btGCPT4KGN4TZF4u7G9eob7ijbDMoqDKRY8f2tqXH6ecgRjQsf",
  "key1": "5fYktvJGjrVmPtkTZmSx4P5TGNMc6CipxweVGp648MbjxENjwgm4W6svZmVhTLtSFQA1pz5z3Qry3ZSi3qHnjXnb",
  "key2": "2hA9knTarjK3j25MLDQ8aKXH9Aooz93qZKvhfsLW5zFWjrBH9knDwbvprBhK4ViNuUYKVeurSDuyF7L884zVCEUw",
  "key3": "2Yz18uBcZMDJQdDLzLrAge9jwoETX1zKB3FQ95RsV3MFTuVfn8R7tUSuusu3jPoPt63cFQVS4VWhZBnRYaDBSY6j",
  "key4": "3T9KrWEvjWSobWBwSGhzAbEC5183n9qKvTCpaxQG9iDxH3D2ft5tRxh3bAadD6H1nfgVC32EsYdwyoLV1KcRxCr6",
  "key5": "5jmL8jUFuE39URyuEo2DbbwbX5wErzDRiMr48wNk5j9w7o7ebycKRDRHoLNJVkh2w3RduRgJM73fiHbhR5pmAEgM",
  "key6": "3zsLsTyX2H7rX3GvJ2SdgfmYE3josU6ju5eGrqk4qxdjxvVDGcpcwQBGkeXCoXwKb1W1JzhUvKDkTFX6pZ3gZCjC",
  "key7": "3HSqykrtuoQesycEZ1hxhd2o5euYeyMqsnQUjuWWxdRGrQiS9DmQNbyMWB1tsygtgQXTcEiU2pZEiWZ6upqMg9hz",
  "key8": "4tsBNtQkJ4vaPonFyju69Ekhe6TXFTNcQWqDhi7bvo2Wj3QS7WzPwFou2jU7j5JqBGSXBkJHtu3mQ6uoA1und3St",
  "key9": "HTuY56Xefz5nM8URoFuFfYGHGs4vM3ZEeVX2mTvh8iL6HHxAz4p2BhtfT6fxta1Kz6T37fJnDaWEGSUfeFzHiXX",
  "key10": "2ZxNmwrxhZcnH6B88Keh6aAKkQdYNTEZiNYMA16cp1vPVxNox6rjcjwoni4jMvJCbPJr2r1efDuDtTstsmkVw3ZP",
  "key11": "4Gi3D1eJpUMTt5eNqP4Skqx7VwaubXYFSna8nbzFhJmZXLkcuPRLE51SDyDNxs11CzQgZoFj7EfnszuHbYanGv3b",
  "key12": "ouC1WSxKVyP9JcoyaQHYxhKMijMCVs6UMUhmpJNmDL9daqMmbPsBJMb8ELjQaMf6aFNEoMab9gH8N5T9Ar1PobV",
  "key13": "2SuiAF3swYSx8nUUiD1nyDwojHfbo7zxdrFiPf2TCfGU1xG7mEtdq5Sn6kJdEni6PjrVpVLQXtx7qU8yZW8ofEuc",
  "key14": "5f7NKtJuAhwsJz2cPQZFVSRdgv2a2Lccx1YhZxhbvdnGCQsLCGz6dmWS17vZBebzEKmwoYHNbh8WZVcnFmPvgaEj",
  "key15": "5njR4WU7p9MxkzsbUYam4PmLBJRFydD288EHjGczp3te6GPvN7hCB2vwKNzfMjw74qYSmNUQ17muwCxs4Tyim6SH",
  "key16": "3oT8PPNcgo47u5eGUeaTyXHhmGhqmeDtJB3JYWSQtoS86svS85xhzho4HjjhsJnrWexxnff4Lo9Z2Dh54Bk8WjVf",
  "key17": "66p2LviGkYpKBAHaHpPJurq4CV81FzFdmJ4AmFPvCeBgHahkJWFfSwshWhCj7viVcL1o6Td8u3TEufERamNvpMBf",
  "key18": "5WkCM6Qhr2U4z78PAS8i9omKhMsSFecHZGETFU9BfGQeSpKMAVzyhiKKNtiuYpZcLHKbPCuLYtYATKq99kvASGqL",
  "key19": "2EJr76jHyBdcNePW48r1XzBFwdUnnbNJdbpLifbXvqY1TCwtVL9Bhttg7Df1ggB8uvnLhtNCh75xkeeZZXUuaqgT",
  "key20": "DafL1kDUP2iydHWXynvqoc9NoNgRAdajmes9QKxRSYhHV2wvWiyrfVujexj5T3sWrydpDSDzhf42bgQstEoNPa7",
  "key21": "5qsz6rQpxUTfs9hM4z51M4cVBtP4hfzLsAd71MXmUMkqeV5LP2WZkD3CKWdy6FprFUj3EL64vkMjcWUPcLHAmhiG",
  "key22": "3HeFQnDGtQww1iK8PPawpmvmE44ruHN255wKS2f2Ve5d1yNiJq3Pp258q1heK2hWyyL2yTpPMtkdY65gr9G847uq",
  "key23": "2up5Pi7TViKvigvpfQxvMaDmPg51mUmCNnX8tFKgavkSj3nhjxyzwKobpkzBLZNxWC15FJQcKrgZDkDk3qwA3wyg",
  "key24": "3TYP5su4Mg9nNtCtJUxLhfxRnB4XgzL2cGmenvrgygBD7gWPwUciDsk5ucCWZsSQd6pVPUfiehUgDZtnVqDmQfkR",
  "key25": "2yPu7Wmt5rzNFiMHMsr7JcqaEbmBM4SdpftDebAstjj4f5z6DBYYhHnTPyaJoh7fYtxzQfpiiEhmR2zjMeroQaQK",
  "key26": "3dkxmq2Pt87kjJE3NEKFi1Foz6R668r9u4Ncft2uen5Qhzw9pLUhHcbsMQ2BkGTzMMiCkv8E2ypuYGPrHQh1n5Wz",
  "key27": "4Mvp8tjoffb92Lxd5GA4ibWvXvg25k2pv7BhTrt9jFcine6A2ftGThbnPiJeERibYjdb8kyyoBz2ivGxNR2P39Qv",
  "key28": "TKrH3wMKNUFvvQBTViG6Lkh3Uy5drfFqKhNeEhZLKZgkBK77qm1PKgrVuv8k7n2RTVF1ZUvvvAH45huDr7oNFYy",
  "key29": "4j9LMZoHpWixkmmoJZd1ZeKmUyzwrHWfPwuqwGV1TEhiTBZ2JFf784n8bgCiDsqy5AryyndgHF7Dkh1mFQkrpfsa",
  "key30": "iGFWCdj7sdbkyiNQ4Q3Hmg5ZjBsQQS1z9qVvzb8vZLzmobhnAoL6xSu8Yd3cdHQrEjX8UeFrEqUBMDhDFgfvSoV",
  "key31": "2Rf7py61TCCWschE7dYpEzCVf1pRTkNQL3SQmxjrL4oCZkeGzERnhi4UkCx53RCsMko2NvuTs5sy1VRfLBJUsXNB",
  "key32": "xpQNzDkRHFPQg3TDWEBskX6XSCQXFgRdjcHMjnjSrDpr7kwjqKQGrrmssiKM24vh5ZY5qva8oWCJM1f7AZPMbK9",
  "key33": "5ismwz7ftqAwLzWSkyzuc9BX8jPm4nhgPD7VkAEiBSDdHNxC3GbtDzPmjhFWQJjrULDtQtLut4JAg5QgAhAtJhM",
  "key34": "5uRgTyAuDadK8tnueo1Z8QY8G1obPYut9sg5YrSBbzp9FnL9dW8ZFPnzzWcRK7PLFEKMPfHZRKnodftqztDt1XVp"
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
