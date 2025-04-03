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
    "34w1V2qxws4twDk2gMkMf2ChEAeAvfzREfNnGgLA4pQgDpH99Xa6mVDGChLgk1kevE8xe7AeNfh2JxoiWqAnTQc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6zSwtGXpWb6RDpiCT3qnrzLoGxyS9f9XcD3AR2R169ChY4iGam7YSBqbhyeznvVqyrtFddg3izboDfiDrTQd9K",
  "key1": "4LvFifkv3PBpmqMD3QjCGUksrzuTXbdiCFCKVsozsHKgrhjpLVc5JFM9h5xj34RULHdJDYBrzhe1mxLWcQvY32zP",
  "key2": "5oydXc1H1N8d45BQCT6GoPfeekKXxoFaF1LRiwSbwVTXEwZ5qMqSa6C7un1T6faFKi47q1Ys5ytFRhmg9ytRUsa8",
  "key3": "3vwipZ184KmGPLmogHdx9HhAsVPFS8Aif4pZcyqFagknCuRC2vdHxvKQ1yZRX8L2XBCocPXPzvqQgxfxmkRUdNrT",
  "key4": "5ohU39J5TEHUNkCQmdYqDgU1bVxkgE9XYNkSZepEHAnoHpUXwoD6Z3oMHUDGYfjdnxGeEEiuW2segNCfWZEdYEhW",
  "key5": "4i38KzAk3JqKos7Whh2iC1gLE1bv6RxHacHjy84L6jSQceWaR4VVfebQ9xG4AbPvRxR2Lpzwv2DcNSpiS4Hj5UGU",
  "key6": "3hAvFHXsWqKHX7kc5GsF2BRLMvj4MFpU8xtQE3irGgqEPcWDDPAArru71BUgRHdcoykwxRo6XWaatK4UaoUopdTE",
  "key7": "3GipjRv5yxvp7bd3rbhRSa1nfiKfyMquFUvQKXLzdWFR2XTmVkFfUEro4wbovLEKjCu819ajBiVqv5gWDm5mdq7T",
  "key8": "2YFnJbPVHxZDDbGyh9WitszJGqmvF1aQLb5t9CsJrJJF16MCoP5Vd6HPqrBfBHmQsXQy4E4UUbmZAd6Vp5wtYmcS",
  "key9": "66UuxTjsBfBdrd5f9LiP2a6BFD7XoYxzTtw31zoM9UFNU9PgyFndddx7V5j1HWeAMHbjFCAyTqcs8WKND3qYkFCy",
  "key10": "2Rkv3iFvdAVeofNssxTqvHULvVtGzv4rhLsJ9RNoWyPDkeRNAXamiX8LioQXYBTtN9oGJBVn9tJUYerVfPS8Mrdt",
  "key11": "4fdNATs3HpSCiJYiZNvq2NSVuwB8YMtjXheRkEVX1QbbiHuJjrmXB4sHCPHwT45WTyy9LWT49fvfj7VyDf3ZYjtL",
  "key12": "514TDyxFxhK1Wp8ScBpieDygZfa1kbAk4Cnr4EfUgfdLJSWe8hz4wa9CZ7GBUxSMzvfNu4qbkcgTKVvGagBqNvqo",
  "key13": "Bs9qK5jR41tYepkkT9L3Xgach8dxpvqy1UDpHio2eAnxTQJffjuugukHfH7Y6ficyyyEAQrhBrok1eN2LNgXYzo",
  "key14": "2GZUYXffJ2jJYSdoPSX2Hvet6Rk2ddg2KuVmmBQB6TJMcyA1mHPAgjTzA9p3zAhcGFhFZ71iQ2a7WrKkovU8KvqX",
  "key15": "3Ha2XPEEm14ykqQFS2JBBaAha4RCE7KsdALiyB2QkPvKcAbQPoKj4tcxPkvkfvuRwR57RfLdBzTLd4bQ5HSBWJiP",
  "key16": "4WaSv6e9Ze2svEtTBXvL4rGTYUhxf145uxMca9eYZXNYB7mRkFTkvxXDg8CuciVu96cxQhbf4m6Mah39pWZUdxgd",
  "key17": "3RqGqrBmQwoyRCM13Tf5zJXb6BVytk13VRXh1Py6bRYrczcxoNFuHJg1g73wPAV5K9PvWBpvq9XnLmXtNeiUbMwB",
  "key18": "5WQoUzgfM3yZcWcrECnoCiS4NByEyEaHdNtdhTyVDqnytc2hn1c6sXRHt6uVCDtMDay4yUx32qo3BQ9HFPhGyP5x",
  "key19": "3M5xd8voQx6heaSAz3k1uvMF2Hxi3wS4rdTZXGax35Xq3rx8rF96FUtw2hagxknnZ5hp6pkKeAYjxPrqViJoLkMu",
  "key20": "F9JA3SK9dgjovpU5wztk6k9XBQp2EpdcejoLWX7RuT29JKypSFP4rDVSUaerULV9x9mJ66MNTFuFyZSAa4e6LPZ",
  "key21": "3op65fk1xgx7hnXUM4JSWJXRzJ71ogqgqcseYosbEgmpnxeFbD1FNRRbNHzdWyktAhe46DHAdYekqMVAgd43mQS4",
  "key22": "4XZwYZ2Ew6oZ4WubZXHtQG7j9eEWS4WbQYdaTsJMxRyJ8zZDcYvXZiHeTXT3KB6tP1xke5Zk94BGpiE6UXzrX8oi",
  "key23": "3iNU4yBAxYJjegk8uFBDs3byYqskQRQ7FZUPpNL8Rz6P1hh7J2Bu4Y2ofvhGmaLo3H1dkC3X5qF2RvdPmwg8gPtw",
  "key24": "3SFFNs5gwVT9UMfkMCr5zHWWyrFQSHSWdBVusypcpPQwjMaW59JFZCpej79hZ8w8uGCqiGxqQ9KPGdMup4HfeyrX",
  "key25": "3YRH5MsrtFBD15qQb5ZHzzrdWpB9yqzhqeKg7wbm7bixrsRVEcUxXF1DZfeCbua3Mrm8oNDNEfqCm3sqPLwSnHJJ",
  "key26": "47agHVx4JbifmzDA3CApuSDaz8L3YC7jMXMMSFmNy1c6vNDVSo9REGELoapkgrQ2aCB5YfqXdoxQPsyCpiJRE11g",
  "key27": "4t5CzvSCQRxCN681mYm974xqtq6mzcYeag3afFb9SUkonUkERFG7HiM5UaRkRo85rrtWGkmUYDrtZJWReyNjpBnw",
  "key28": "4r51kgb5aVGQMcWLaCdY3zmqJMVyPQzpeVyH56J3amLadHhMeEdvZ4wjy9kL89id9bMcw4ZuVT7STobh4ZfrK3EH",
  "key29": "kPihLrb3F5XyYXDhPaEvoTDnjhEAV5H3Rk5SUXfLKxGchkMe7sy4guQccAn6z4P72XACwwJCq4czFxYMw55ihPv",
  "key30": "5W5r19WWM6zLP6MURRZRedi2mJkZkZBh4MKcJktKMkFbb3YoApTWgmfyUth1YfWDSebvdiRpu3h8S8qt28tWSL65",
  "key31": "eEFGZQQ4HPZpn1rkZJAsjCFsJfnL3JdFM6L3M7c7LpyxuE3Za737NJARjYvp2NSSnBmvo9h6Hr9SVx2Katxuipg",
  "key32": "57AuH3Bys1n1waHxkUf7qp4mPE6zbvTVhmJkZ78fT4NbrotfroSrSLyH9nEdh8ekfU6p155mUeu7afRomfcnSvqg",
  "key33": "3RmMJ86dSpmJ6Z6YdF7uqcFqirjL5sufBEg38KdXRmCpowceoHKtCabmYvNWBgRv1rAeCP8hNwkuLRE4yGpTLXmB",
  "key34": "5SgE7Nh2fDE6DMqZV4Td3PiQRXvmnH34sWUbEUZiUMvQcKuZqCm61CFRxDxWrT6W1xHbD7DMDk5DCnbq3EGdtZqm",
  "key35": "4Cqncys4VexiJxHhRvm8fvrLykVLmC7AgZGz2aoEFFa8ms9uzV75mz3AutswvKFdTUGhqmrwZ9c2mmFANaY3CcDV",
  "key36": "32vAFpnxcxjPuF6hHJNSTtvuMjeHTDLRW7Aoyuo3317izpt8V6vnxEvhDrvKogwvWGi7iGu8eC3dUgSJnVyBtTKw",
  "key37": "5dq2jY85cWaojvKK75QP6fg8sDdH6L9unMnt4fgHf9AjTdgZTWiez4ikJ52ygS4obJZ7fsPMDXhGtWgisHf4eaZ2",
  "key38": "61ndUNANkoCT6gYmJ5HV6FJmWh8TYfu8tn72RCSjYf1HxRjC7SZD2drRk7n9spRF7aL7ngihZ5L8BoEYHGREuwKS",
  "key39": "525Lfp45nCX2enumope6Gj81MkoBmocDhvgtyGeKSV5uRvx8Y2NcWKkEtkfhMCHqsCPHSczB16ajrUPTTjT4CU9Z",
  "key40": "iJaZY9NZMp8jeLjaEZyurDQHqyBrJUn9zoy8HXjmkyGyY2UjdEdEECXbEftpRGSjDDqoZMRazRP8tmakWMe2uNE",
  "key41": "2fzZq3zbuSk4jUEydtT7AUS2c5nGSmFuaAh8HwZSGhmgA5QCUjfEq93XyPf4ocpDXCJALN6nN48z6RxCVH8b56v4",
  "key42": "39rNoNXwnyJ7g4hJTERnrEyqdD23k8C528q51jQyujCWBXxMQ164s2tANgJvf79J4XtHVeesUUrk6X9QjNdPhYLe",
  "key43": "3u14Eo95DQNEbN6u9XD6Fm3SmbLdcV9cBT3vwfNLwADQPPTVG6cTbB6FqubLZj13Qoz2TeJGDvcKMFzvVonVo79a",
  "key44": "4LA1HnmykrMLTeAhtxcm4jCquu36aUbGfqj82sbYWJ4B6NhdTLNMPDNQobinvtQwHJ2a3chcwMTPn8iYSye1zu5",
  "key45": "2HWVGvPTyuMjtZy69aE5y7Uj7ujjWoimJbPq8FPcoE6yKXMWUbpJuZf4t4VojfrdR7uWwFhqdKrT9t8ZZzJ7KbJ6",
  "key46": "64NYgLe66b1tQvPBaF7r8AKrFaVh46M54UTmhZ284bonwMMZSJWibXKFcmBwb8qBsXu6LYa2mMcodPE4P3WRtLwQ"
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
