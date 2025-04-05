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
    "3WqfYUVVPgWCb3Vvfn5jtxrDfuHxpsgdu44bRKVV1nsVb32UMMuiYATbzZFi1r29yR7GdUgfNRLYV5aXYKCx7ddA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SJnWBmjPWnzp8bzSzWSw37dXMLBRzRiH51F7qvaCQzcMbNQUmmrTZ6zyjst8iroLimRfgruPVGF7Nwo6Z4XAtXq",
  "key1": "4s24s4ikPFrCcFdqNzKsUW6e2BVGopTuBbuCN1Z2GPR4DC9mWmbrRQU5FLs3SDeUJ6iEGk77Ww5igap5VRma5FjD",
  "key2": "52AuMggBjerRMVg56Mz1vyL7nUQiGaHhq3EVEfLsNtY69AwxWjE7zVeig8d5vsrxoSXjWT41y5uzNdrbATSXzYHP",
  "key3": "QwC35jt8mzpHhFWYCh2hqnDpUaLB7yvXDJHegvASam4s9pd2aRnGnRtRYgvG9JZV4ECoMcomPvuoZgamfTvysXN",
  "key4": "5HsnvvWzMYwfvnG8XLJU9QsUcXaygZdp9ZNJ4TUVG2rpUzu8TzBsiUJy9QB2U93QNubXvfa1N9WW1bXwMkoegTi2",
  "key5": "31zTRQWWecA7hT6TbzK8isEKQVDpWrAaCuhzy6CR3mEESQ7jdZpFBNryo7t1G39Qn71GXAGG7822pNhAJdFeGW5T",
  "key6": "28iLvqMMPv4fhEp5F5xR8fomHnz6bS5BSWVdannhLbMJGFsViEf6FoNgKpj2EDHwFSnLXZfJbjt2kde7BrfgbUD9",
  "key7": "4QFdbM1dfi8S2bpSnwjt7awaWpG5v49q5wN7dRn19Zjfxgx4nwXPnG6395SBbN8rSMUS33h1LfbtQKyMujNtVgxj",
  "key8": "3qf6CtvnzyJqooiaFPanUiPCSGDfdUWMo7BV6So8pyst9mTff5Sd1tk5xW9U5Jh99pzmfdSWC57SHwPEHqQ5E7ww",
  "key9": "8VkJDCGmZVPKS4acxW5j3eZ61Gg9jDhv5GeqyK4HHVmaV3Lz17A13P7iU4PFUvd9Va3UVdjfqjq9rVStvpHLQ5m",
  "key10": "2U6zyvTd5fwa9WyLEjFLST5P7xUECfyiVFPBQfKt4DzS3gonds3ZUhtmCzEdHqYKphjcoKmiHCZkP7fXWTsbrhV9",
  "key11": "4M9piTvsjZbc2NYooS6czxmRVyPK9V9xjnRNFHW4pPWy9td4jmLNFDyk8HfLbw6Bis4ro5KoZwukH4SeYQWvyzp5",
  "key12": "3PNreN3AJzPSgEun55uiE43PP4JBb5TDjP5t4tincPahNKZYzDbHzuzQ7RBqxHusxJAG6xKD65KYFMfwjyiuifJJ",
  "key13": "4amAXqaFiDrsrLy1KvNA8EGiCdQ3dyxHbFn3WbMx5PM7VLr1BfhfseGooxVk34NXZDL6n3BkhMQEfrYFLzj6ZbcM",
  "key14": "3ddhq2VhD17L7pfrwSFjw1NHhKBXNxWBkTLJ7snjoUdzys7EJQaVyVLxMi1oK4KcdrtJG7TqNGTLQGPPJuxHVUJx",
  "key15": "2UgKQotrt6ULmtLHPVjNPy2CQSz893LW9R9Rzw4tL47BTNKczFvMvgEfR5mxd3CQzBD8KgK3KcEoUMWHXprskvP3",
  "key16": "5a7aR4YTXRX4tRqqTcjYhA66DosuhbQLBFMMZaDEx5rJMFHQrrLmWP5YC2diGyS477BsXAwohjtYdZYpvu4c5HRB",
  "key17": "24zdMXFRqXPjQELcMxeotbVaskkPShLnBSwoKzyAGFVkVnPa5SXtSQqeqGTWugHKG6Ju1GaHmAEUJHh3sZUK1BC7",
  "key18": "2CjT4JibpGWwYf5WVq3MZCUmGqiHxicU82coh78JXYh3CLw4r3WZeNSEmGhGjJinmdNTStJYkPTFE3nxAQBFZgej",
  "key19": "5GJgGyNzTsz9UwrDthTkJFhKej4wXHzCSsDaC39JiRn4tykdrzMBfUUKeGzpD6fuCqRdwsghvAfNhZYCAHMZ29qv",
  "key20": "S3yznxhZ5Yn1ADFpzHocPft86BVHcHnNmBzkqXhfkLF6WBbAsqyt1RLmr574CmnADvzn1aX4reoCqwSRiXJcXyJ",
  "key21": "s1gi5h4uVkbcdCwsYjCdNPspFj3xZPbwacba3J2vZCG46hAGseHMy5EqY4WXpN1yLYmLgWQ2eSXFyvA5LKctKjp",
  "key22": "2Qdw2B2vRg3wvUKtatQdsD7vz2Rg1mXk28JeeEUKDFyfcJeqXEn1hHVCYPKxgboBGqrqg3km1g3PXVhT4SJLacYq",
  "key23": "oCuasSFxp9e6y3fNPyH3Wx17PfS2T3j4AA79hm3Tb3dPwpWcCeRDzWxfMAWZREn1oMN1efkmh755PvhDveHMaqF",
  "key24": "3BkUbMBXxxT5P3w1g4fdbybGLsQ9mextDBzXZXwFRZKy1ZrXMkiSxxzzUpmvbT52ZBK3gVjgJiRcYvjiGzuYrC78",
  "key25": "nYmEHKteKDEF9VmUhgHgDdrsNvsLkvSHzsk1G5LRYyvZJfBYbYrcKhiJpyZN859GV2Bx1UHwtVitZGkGN8uEevb",
  "key26": "2dNDZYLDE9nFLdFxkBrSPVhF7BHKqDNJ2qscsFJggxVd7mghnikKYQiUFYh1ePzCTqnLbcVEe2XJKXBDDpM5K4Zd",
  "key27": "3LP7n5Y5XVAQDR8J4AYmZxhw413BiA1T2aeoSPeKNbT2XZb3FsHRSEzqTyLr5CfGtfavQ2TtyVsqfCo4SUZy89zw",
  "key28": "2Ms1cbbhdj9FDuXfy5D1T4hMEmYXbYzfNqLG8vUFGWeNBbMgwhaJGjjJyknQkEQZkHvdykHoFM3KEg8SLaHZZ4Em",
  "key29": "2zzwMrT3JFFRarMPT5uCMQTXTuJZXxwHdcHmu9LtsdNS3qrAwwkGD7kDyhTNByHNH1Rqj6Q2ehjKAzEQH3foxFd7",
  "key30": "2kNf1PnUQsQ4YmtJZMpC2Eat4cS1ng9aVQ3ccQsNDCnoyLrQ3eRvR4kQY9mitSbNNTffbsppHU5beLoS6RLp4vPg",
  "key31": "4qwKCmWBJAR55qQWvgN5MsHmWkk99WYWEe4brGSQz2mmE4q2N6AC13JNgE1b9huChQUXYjNL9t4GRMsxZU8nvGdH",
  "key32": "57eDXVuxZL8viY2W4xtzbLQq17u2gAV94gREa2NNjBFPtDRjUVekGJYjY9NBGYVmCWs8Q17CGxBvDbg7pNvhyDHj",
  "key33": "dvEFFcn2Y4JTydq9kE1bLdGMWtUJnBgiL8wob5cPBu2KN38w5qrSt8zPEMHwSJCN8eT1rbgX4PZThGjAnZPcUdp",
  "key34": "fFTTKc72FiuUPp86ZeyaKf9HywbiXSuW8j8oShM44NrSHLvtnjttqnfaXuDcQpRhYnnyP7yNR4uG3S4Pe5KPQqK",
  "key35": "3zyxs75MfKYYpFY6i82WNFShQ3eAwif5eQxvJPJcochMEikwAZS7jXjmUnSS6bMJG7t8xGdyfefesAmQ4U9DuE3w",
  "key36": "4JdFSHzX1vrcTEm2G4JfCn2fV9cDipPrsUT8bNoqSDmEVCiDLv8psVnHGnh6j6UpCf1DcLjL2kyQJpdGQPtn47Gz",
  "key37": "2P25okuSAed2HRMh8tvoRkCKPcsuhZPFbEtxnpNLx14ueK1YNAMBFmkD4FrQXbUyb4Hbwsh2iSQs4t1rnsxHfVpQ",
  "key38": "2LpKYVLQhgieWWpu5P9uwYBW1CvrfLeB4PqSsv2woKzgks94ZUCiv9mjdrC4HXnzUfbUB3EwprrDwwb1YPEMfKrP"
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
