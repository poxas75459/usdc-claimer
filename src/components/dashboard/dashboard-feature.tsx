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
    "2p36P1hDVGjHtCx2kz26knnRP6e85KfJHCgtHJSWjhKenFVYnmiwSHc421AgshNan9t6gaUPrgJuAEHSibZpHJ5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pW8dCLzVYEqR5P79FAjZFzUPrgvEcsSUVYCG78ea7pquoqu3YH2mLbTnRGwCMfwuULKLUJnLP5gJdsyk2AVf6ZJ",
  "key1": "837EWDoVRWVcUrSUoNf2kDiFn1r8ZfBzukmYHUvmW6uwSw93iqWoeL8kznn3r1oQEgVyNcLBF2E2JQf4haF5wej",
  "key2": "67DFDcGsAjQJXskDCsWFWyERJ8wRuGVfdG9prUFoga7ZWMGZv73bhiYHUHroYvioMJXvucGw9NWXHgSdKFDgLKAu",
  "key3": "yh5hicVQpQpH4L6rvQZPpTqHot36d98GMrmK1ERWduTkiGsL6Fmrdz8JwNPMfRUgZj7Yt7f83Afzkp14B6BxYSJ",
  "key4": "373z6TntjDZuLdQtg12eCU3ixnKrv5Ghmm5yFMndTRA2WZH1kSB5CLjPGz75wqFLmvwcVnU1DTAhRBt9C2Ex7P6D",
  "key5": "KD2WMbNdGrhMkfwzAGvfbn6juLbpuAddUCVH8tXexYLqzEbyCDJPVtVxUxDKc39YVitQ6JnqP2bMQYJRmMbPDK3",
  "key6": "3TZcdyd4DDPuy4ZHBsN2AsntiLPaswUXcdtBpaepL5ihmChxsmnpJU4nzEDTNe9b43XCXX9wBi3qYpsUzCrLsoMg",
  "key7": "5Bu3yK4P98pzssnX5VszXCGxw2mbpUCDeVsGSZnHnb1KrgWPG4dFRw1Yh78iovpi9x5UysDTxwpQeko5oRENy3YR",
  "key8": "3ArYas7FKiouroDTNGtsjuwhKzZXCPJEptN5kcbDkUS591eB4pVGA1BQGnd3QMAJcwo9xc3sPn8U44GzSNp6v4mh",
  "key9": "5yfrt3qdfZpz6mCxYFDKNRChpa6yBSh6d1ipTpDVmaSbn6bsHg897kr3LaXmutbdhix34YQew31YUVEanaDBF1Ge",
  "key10": "4MUXg12jFSh6ixNSXAh6tyKAAYb8Krnrub48iUDQUVSgk3YbQWKbTXoFnv95qh1V3j5NNA2Mo7mbThnRB9DQ64M6",
  "key11": "5EZ8H3DcxeKbYQoJiNNTLXMzdZRejynDCULTHNKwr76r2TqUBXeR9QKCiSJXFesDih35kMVfbERQEgGSCqDYo3z1",
  "key12": "2jb3TR2ezJ64pAshkUbEWGscPnSGgDViWPLQ3q4jasGgzNutJsxy7T5EiEGGxqZFU8Rt8zErmAUgmsza2WZ5JqiL",
  "key13": "53HLdT2ycSNwkyoNZa9wxjDHP1xL2Y5whvTMKapREmSUvfaSoSPbzvEbCALjrBCKRHpEhj5WVcHy81LqpFB2Zf5u",
  "key14": "59DJ1K5b3dfNJrPJR9JfGTQhjFPLCwwDm2khM1Pg5JpTPGk9eUetbEtti1kyQE4V7gG6Le38T1HDey7tEazG74gK",
  "key15": "5YjPtJc6SXQvwyhQjSCb1jSnTKwndRWkoim8DecBNqSMCCDHy3kGoj47ag3RHu38TqBaxQppQCWLgjwphtQMsWH3",
  "key16": "3z4tfwFp5Ctjg2RT9WMYZBvDUguFHNfVi6rkhToeA2F4cBsLRw5vc9F3E637zLkb5r3oKDMTNrskUxm129YFeLmh",
  "key17": "naD9ETiT5XbgWYzcpiwffnjjpqVVN8rBXdyApCTweQrrm6sKmE3drmifsMUKmWNa5vpDQS1nzymbkuwPVrBE54h",
  "key18": "37cS6PWgY1L5y176imq993ra2LgpdhHiNaiYRvLprnwKZPXYsJLswwHK3nyCy3p4Nv7menMJd8V7CemN7GiD9UR6",
  "key19": "3zn4XMLk5DFFyj5YMKsnfGDqaatGcdun5syqJS2afHWPLrkoLWt95XVeJCvcrH2a7FKTtxd4spsoDKmNuC5eaiTD",
  "key20": "4UZJSm7LzH4Z2dDXX3UDVvoUDjBmyUxYJhCwktDzyAmds4Yh2w3kBv7rpLAporzKYZurQ8HSTmK54tibJectVRds",
  "key21": "5rKtCCvBYYVeVLd1VTJM767zGNWfwmaVQVFhgstDy3xF9wZ9A5T5kzDdVPELwEXTu8FtbzZgotwRtgbQUEMbfnrJ",
  "key22": "3hzEenB5N8LERM4JiQCLWouFLwLL4BdtpXczZvXRVZtGMyc22kNDBBnjgh6NH5yhxzfCEycHHcteJH3FeNvBWKpq",
  "key23": "47zKAqEbhBZ2sxskzh13x8eo5Kj2qeyVmLcPc1JMTUYVems93YwXmVbPZC3aDWdtP3pKe9qFrF3nK4KDGWhCusHM",
  "key24": "1Bf9oA8MQpkXpFKr8cKfmB3tBFyzSwSRSFA5wxfWWPdxm8GZd9qn7FE6F72owSHsRawDv1jH3whjdJWbUAhi6rk",
  "key25": "3DevSwbNs68tig1mRyGMht4SWyV2yiN5aPt9osdmpRwGRqgwQMFvdTeFL2BmyTdr3zR8hcH2432NBDSRwEAKJtW1",
  "key26": "4meHRbthbUF9tHftHLfPCLdPMQFCPxHcefTQGAA1BMwakwPaacBh7VrvYYrruqSxz9zvXbitKnbM9Ki1jeDLpzF4",
  "key27": "qEn4hdRxrjK2uPuaJ4ntjr7BVU6WGYCcJdtSUVgpe8FrqtDBeqkou4U2NsmDmx1kxsQZcBno6K8yK5bcFiDTSep",
  "key28": "49Zxd5jHnATSV3cR96vahgor25C9VtZtiaQgFZB2DbgCK39faCLE7vopMYjC9ogpqntjLMMTDDbq42ALKbHgNS28",
  "key29": "ncmSyUcqNVJxETbPif9BjvUYbHrX35mN6ybBMyzVcW3PDcmug3zdjEHdQaodPqTEiyCLV5KAuof6e3pSKKRVQyv",
  "key30": "3s28Md416WGM27pkj1GiZtoVCJS6T5RVYoBALHYzuiuLx81wmMLiCJBtRN1Bci1BoZYoQEJfNcaSbnTpq2gUTYjY",
  "key31": "3tj49dGBokRTZd98oAJ7wyzfzEFbrz5zVooVF2Bmke6XNjEpuzuWvMpPDrNdreFDaZxHD4oZ1sBYH1cc6v5foyvp",
  "key32": "JASbHHYKpa7HQWAjo3QP9xFojMPGLfV1ueNrQvfktNXJ63eYjeXPHzr4PrqSSk3oH8z3vnTxVbFCaUeqBj3m469",
  "key33": "586nKxNAwDUcPpzmJn8Nfwyx6aiFXFzMU35jRxk5nmPUPBZBWVRQjbfR4bqHZksmi84CNSie93D4Es9XJG4JcZVS",
  "key34": "4ptansvMEmBzDZu7334gQikCbKHW2PY9nYynFD8JvmwYzmUHEpQ8LcLhgRdkjExmc33pEofWSwxRzeTqAPGUj2Nw",
  "key35": "3tnHVTdzQpaXCJeZ37LXgA13rAG6gzrfSLSNA162ZAKfcoM4cZwmR6TQu1pKFrkRambKDF6mdnXFsSNEtnPz4ozA",
  "key36": "4eAp2oRDHGLHPyk6buWbXCmAbPn54ddNKxPD6pP4R41LZo6FbiWs4ZpWH4yefvtJ9ZVeEanFGHDej3Gd56M2AkAv",
  "key37": "5AXBN3hL8KiphibwC4ZCBVfBttaAtxtMgiPMmbqyRYwiGvDtYvyoSx5yp6dr1NH1U2nkXNsACKkQMjJm7kNdHYpa",
  "key38": "5G9VZZYT3AHN1rsaAWU9zqitYsPG16xNs9rqkraCB91UKZp7f5d4sstui9Grx15JiVh3CrVntm7Ra3sTbkApH7C"
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
