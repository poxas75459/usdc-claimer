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
    "67mMFedJAnuX2oPAfAbbvYWeXrUGrGM4Yyp7Xm7B9hiu58wboEyPtmgnwcrPJxhDDCTprAM46HaG9Lavx1CoqSHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rjB8UwQTqhA6XWWeFgzvHvn4LZitnPMjJasGcFCeaaDCUtn3WNYCQX16bxpd51bYbCVutiCEfZepsiy9kPUX5nC",
  "key1": "3KELix8G2K9pbh9xYNfYxuDj3Fsuh651jKDvsta7YiouFNhUm2WJQ53UeDsqsiRKhVEimUwaXm9pthDMbCgybQdJ",
  "key2": "5KGo9D52tN5j4sYqoCYQadZd5SPJjRjooMmCnSbeiK5M9PpGwW5vGDJud8EFDZdu2xDmSiLjuvbqWHb8G7hqvEtg",
  "key3": "2aeEXx9vay5URurEjP9g4m2YNfQijXXYenrgzcMCACR1tnbYv7gtCRhcnyrKygEYKHRWRJCFcgZusioHZVLBACxK",
  "key4": "32yvrGNyeecmJdgELyhuaWG48cdEcK8DiFaDXTcmWD7VP5Rpmt62USSPn8fCUvs2zcJYgvpkr85WehY3WiYtkMHw",
  "key5": "29StGkxCh42uL9h3N5WhKf3W9G1xJHX6LFWRTQJUGwsPhFRGLFRinShLhzTsrhMRP7RA5KS1aJtFaRX9mehiKJ3G",
  "key6": "3ubBNhFiP4wqyXiXzfvoNZyj2VXfUNaMCq5ZuYBjbAUvP9T5rzv3iKfCew2VBihbMr712hDkjW6VQok9fhg143sE",
  "key7": "6sdmUxuLtqFUYP3N6VYgGtQp8wKvx316eJxuCLpLoNg9FLZjwi5KuU3HXafVKuJTSj7qekWWLGQQcHeGF3w48yZ",
  "key8": "aRN4WNS6rwAinHA6qA1J4U9fmBBBNX6FTkQnhngwVQrdP5LzjzcsCYC7RobaS7ZP5GtbzMxbkxzW2XTrm6x81xr",
  "key9": "5JPBZoy2T6NTHUxmbwRhzFSanqAPikwW8rmaf3t7okxxzTuNwkUbhRX8EPyaTTWXWZ4VHXBR1FR7zEVTNFDpFq2n",
  "key10": "4WeU7kgbs9Gc4tZdtyYCCKQxTSGZqzkcAv3cjDpsWMAoGLzy1di2GmHUHwJwCGX1Uf7yjfjbef7jFhs4y5rWreRJ",
  "key11": "56xrt3abptSTHqqXwBVYyHzWEgCvUin1zN41Va7zNSPMw8BKrhN1PyN3Bbb5TESteQNoncUxcYFqtUiGohgtgJeG",
  "key12": "2e6LRVLwMtcvsvJBKsekf3oqgDZ8upJ4MjkyFBnGZG6YYwCUq1H4ndd2XJT7MP4GdP1iYvcQAw3mBrrQuYZSDLxd",
  "key13": "4rKH4os3vyxGcVuNr2Kp2e2ef3kLjYVnTqSUw1aJCUoR4PGRvy8XDSnBNEagybvScZ5Z2XfTCJeMA17djp7fjbnT",
  "key14": "4WkUsZz8WVvEjD9UzHrJcLgL9EzA2Up84fNH3SgRREW1K17MREsH5SzN6EGaBss7YKUJJNqayDToS1w9V4LB2Gss",
  "key15": "5oVNTwwEm7suNmEhz595bMqowPX8co9nQKzhAbTpq9BRwSgByRS3uFWJ3DBVMx3i9QayRaKG9bAuS2zhyCsf9NeV",
  "key16": "3aY1hnVSCGjTvLp76yn7Tm78RNsVjAWGCHJV68oFDNxe5FQcneuRcdL9e9dZ7iym1DqvhRnoF819XicAThqs3KdT",
  "key17": "5e2vuDvct212Nnw2nYUGhfBU1AUvvr92Nv25mSgL5Y52AzVBrfApjgQyyUcvJjKsJuavbfDUuubNf51KA9xYbwzn",
  "key18": "3a8YAQUrGakVopay2wH3NRBFnMC4LxoV3u34Bb5BtKtWRUkmDkJFjFs1cHo5bBi5umigJvAbyduMbJbzerkNW1Hk",
  "key19": "3sovfimG4QAMU2nWqKXfeRsnj7JpSwmS2pKfmqZLkdeGLwAdPTs3h8mw9uwtDPVm1714D2Tsv3HBYjjf5WDNKAdR",
  "key20": "tSVoyuRxSkYqZZfuqD5HKWvCfLb42B24Wu4WZeStmdFXZjiPpq7tV5k9XiEzXfQa141x4X7hDGAN1MnrT2YWiyF",
  "key21": "4USn2115thJhRogaE9ECKSoBHUaPMkAZN1KkUyh1An5WP8ybbKV3EcE5hP3MRCEFMEcnXjUC2Jz7S8uTrXnupFvk",
  "key22": "5Yar6J6sKTXQYafQpDCRGEGiFJMjaQeR7eTPjbPyaZm5np6BTJYvMiqqtBPWoi8838sfmYMzaF3N3r3NJz6hWoqi",
  "key23": "317jSjv8qZgRnzHgMzvKL2Nz4URuTZ1AHaLWfX3RLGhUCTLtXEBY2Bv1PJYjbGLwQ8AZWaRhXbVa7nDuNpHtm35j",
  "key24": "4hrHB41xFrC1d24XkncKTGzE3Zy6siqxbondWVNCFa1pfydji1cFrskpApaLBUm3qwzfs1ocsZoaSrvTUEygvtws",
  "key25": "5wEKZ8P2nFme5wnTPMCSiQywCXsih4SpGPtvacNfDTCYuf4ReqE4QyLabVJJewd4sVPfY3MZJxC8kn7kLqLS75dN",
  "key26": "56S4jEZoKEYZHUbf46bYQdNoPuYgsyoPCGFSqVcypHMewKn1qyF3T3zvAiKCDv8oTrDPAWM7pj8orfG6taZ7ETAu",
  "key27": "3VKm9RKUNeVmpHTDEWw8NHXdNoVA553uN3hnP1oy1f7rdZPb7eHcmUTcMJgo1gkdfRxgbnK8dZG88xSdT6A4wByJ",
  "key28": "4bpYj8bcFqWv6xXzYYLxdmaTog85K1qDTYXTFLiHA3WaUSuNUMirHhTggGUakJyvemjLgXikhsb6YTtFfQnpjjZD",
  "key29": "2kfZNHHFzyZ8rzb9brB7hYJKHiZixaPVvvUZSreZwAY7d8rqCJ7pRkWSo64wRSjTFhjTfyzNvMyisfVpw1aWSuqZ",
  "key30": "3mnrhNsBXMJYjoBjNmg1PwopGY2rHCCLzHyckkB4zy2NUgYaC6QEuFfzagsamP4Vvga3pLB9ZrCPt27nfgm37het",
  "key31": "2PJdK6B3PojwLKxkfV8TvywBdw78boq3Bwpt8FTVunJEcPdBXVrqKwJpE67dLW3HnaFCYFFLev4hquPmZUwS16rW",
  "key32": "5THci7nJMiFobJqtUBbSn1HHsu3kDJZkKPz2MvGoUX29W6inF1pmQHRedCC7vWvad8ncX3PiUUG4zHtgXbcT1gVN",
  "key33": "5xaC3fXGWRiT2UFAEhysrdbtdbsSW7NrySyrL1JmPY78U1ZHqiWhMWeDnGdc2MwfH2tQaarVoBn8XT2hcvSW3rNX",
  "key34": "4PzVZfUasBn6ZMidoPgnuCShM8VgyCRtycgsyHEvkYSL1uzPxKGM4v2QXBREJ71Reg77pBwmDuqH4iAwGDbrR4tc",
  "key35": "3xBmhSZC3kN8Vx1zQh9B2QU1PPa12NXt6nqpHZJKw771k2vEZnGcfra22bnyVP23fnU3pgaCTzFJn3rRMqfdqoSn",
  "key36": "nnkFNKBrcJhUHyAeE6zTe9a3qLbZwv3kBnHv7eivT6h54SGj273LbYxqc3pQnrecaumyAShfCq7D21fsNm3UZBa",
  "key37": "3Hct2UEBJxr4zxZ2tNsfenQH6BXowUjy5jdGKuHjQLShFEmkSWxkCHHEQszTYATLwEFzYwogQGdEjupQj2tySHFh",
  "key38": "49SNWVbiX5ys2xC1ciFn5zkWmyZXfkaKrMy8j4ioxRCffS9hM1jH1hk84F83LbuGKMHUKdmTGpdbJdHAg55Pcse6",
  "key39": "4e1WQGrmqNZDSSEZsgxVbvpqmTrVDVZtxj7EnUoWbeg6GQXnYUp75dyDoXELJZ1gxhYRX2MdKwTqx2H44HrFDAmS"
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
