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
    "4jVNDXcNGAQa4QteWepVsVkhWvtyitvztk6swgH8EzWr7g5qdZMkqek2dbs3fJahNFkaZYQPgoiNk7sRWeWSmdRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38G842viFgta9mo6qyUEGNpbNnXrX9apS3YzVXGJnSg87jVDewr1Uxk5XMqoXQH4xgfgvWM3z4zyGfrhC9Xwo17r",
  "key1": "3KqHMXRFTGFFnMetit3DzveSv9s6Ttdbp3vkvpSJKAdJHgnRMd26vSCmmsGRm3dHMxPDPaUxoPetowzjh64UBq49",
  "key2": "2QMMiXNvmV6F4Y6kgqL84RA16y9J5UWn1onGL23GZgvKQG6TUHeAHr83cRrzEy8c1337D5QkdpcmYQ19M8zyXLoH",
  "key3": "5reawDPMFKUJYsP7rWzqPvbAMHXywi1S9tDMfvxncULCrx9NRDHiGnZCoWoVe77da9Q6CcZkmv86d8ZY16FCGFVK",
  "key4": "P4UuCXHGhRcoNkdqhypNeQpLgTmneEHWVVCPGmX5iL8SnG3UX9TFG4iaY5S64ygsAYgFPYkK6QoQEvzXFXkgKsJ",
  "key5": "2CGLE9a2sD9aaG6WoonBeDnFMu1dS3qVkZMZBSDExxZPJAcuQZ8aVDSgqjzEVjzeWSiGcRUxxAz18i1LwUpaMWx3",
  "key6": "3FqkghkhJ6s2Z4QG8D1AnWsDmPD7U4dTzfq1kDdMZFNjTdkDoK5TR4RGMAGNyr1MBQKcDUU5T6euD9GUFMdsKKEm",
  "key7": "2bC9sXvF3h1aR1JfBHyXyznREGiKF4TpZan74L9Vs12TpMcWD917SVQZBBd5iUB5vYGduCYvnG5HLuE2cEUA5R9K",
  "key8": "GLFEXSjCauWB21NAwith4EwjCr8M19WjK5kXYdCSHi6F3LoRYnUeeMuAbJBxwtJcGc4g9ZtZ2N2pvsQy9t5MMtT",
  "key9": "n33NNGv5iGEUCiZ666Jbve9Fn3sBp19i8qCGQtfPrTUjJPtLEzZmonYX2KFe3xcRUfFvH2bR2svx4ru2NqEYyos",
  "key10": "3YPC8pkQ5jGBKfPp9jF9fUUdzXbyAUgcZH1e5wwkPSAcj69Sr4GT9MfXDoNyR3MUms4J5KJ6E812SC85QHa5bgux",
  "key11": "chBsGAy4hr4pDdxiosCxsF3Bdz6s7tgGx4RhAct3yUBTokmGzFYKhfjNByZdHXytABRtQuf4wQvCzpgdPP6Myp8",
  "key12": "3gUQ3hZZZYSmgtY4x3ojfN4N7PwuNh6MNTzPDK1ZMEhAMSCrvEaz5gh4xb4oRi1YxRsrdbtGA5eKvVb7bvmNTd3k",
  "key13": "53z19cyZHBe2LDDQBCeo6KSHWd8t3kFhzbWh8xqec8t7mJXeAwpNc4f3hBLc1uVR3b4DsAtCuDBBKem4qFuS19dZ",
  "key14": "3h7gURJ371atgyZ9UqPeFLRvEw8bbpiF2aTuRHMGP35PQUGFhw6Qr4HXuHzcJAbfgnBCYNvNYH7J7k2ADP3Ufh6S",
  "key15": "2tVkThLruFTTYfopLbcyjuJLGaQ2Wz1skDeu6hpKKuTxvJ7mWRCL3mEPEbrnjztRx8PE4KX5VqvosAxkYqwtT2NT",
  "key16": "3haVQZTcLbWG9DgdTmqPxeB7umz52n7mZvYw3ZeFb7LDhHY7BjzTzeoPkrz9istNGpZemacdXK8nw8xBHt3QZUUk",
  "key17": "3LFQiyhLFuz5xtHGfdK56jY6bBojswX1zyRjensemLGFHuys6AR2ymMjs94wKzY6rAhJvSb4bKZ1kpCTHK4Jo6mU",
  "key18": "aSoicWmwWEoL3MCkSj2VKnRYxZrUJvJmzmjDUfL6eZmkxMbvtG8nezbYeR28oJ2TwsAbjuxvzauNTUAKueXzWFg",
  "key19": "DxBfc1pfPi5guhbM3P7aUxzJE78Dsr5H4H6UhHCZXJaCG8Z94EJP4dwUZq5FznGtyya1Uhk7UNRi3213UWekoMf",
  "key20": "SRmPRtKxWBQaLT8JgWECVsUDZVj7U2f3GRhDBR5Bg9WcBhh1MTTRTL49HDdzgsYWuwH1h9y4Jyx7cDW89ahxk6b",
  "key21": "5LBoGq8CRHry5QmWJE1xYcJ2yyDubgQYYAz1oGc7AAiDPc5BgSwu5qpLvxWDzvPCVfTZHfX484vTg642xQWn8FrE",
  "key22": "8aouR11E1868gvLwXUsS7rJice9opkWvx93YMsCLA28FDMRUSCWt1xt8xTTR6AesZ9UtXRwnTAia6J9iv6iLCZc",
  "key23": "4mg1XAxLgFT2Ytgj6sNrz8X8ebNyPSvbDq4WFSakpEv4hUuesNZgoyaGv3C7sTwAbjbmmagdhvJ5Es7t7jUQtaaF",
  "key24": "SUseDpJsnRdUxSiiJ6bTEB9792AnjFvFDAqksmn6wPDULPREoVEbQsbkEko7ycniUQe4qd6t8CXkF88ktix17aC",
  "key25": "3hp4fRAtDASxn937pccbPy9qmURguFHz9hBgF1jLDnqBu2ru9wh3UP57DctyWCH1gTJAnuzE8F6d2LRFBHVmCAT2",
  "key26": "6t4K5ywEqE4SssePwod4okJGhms2Ly3vb31h4DsYsBXDZLeUPPhjvXHmXF215p29QkJ7u6J7fTjdME2umh5CRad",
  "key27": "32oKZ6aGpie7aLaA2bksn6p2gRPu53TzybpZ5VVZkkwaeHj7FWtCmV9TmeMc6U7AE6oL5aYP3kRENBWaduTJbdEL",
  "key28": "3nhB5YuYd3o96Vo2h1QKZ4YVHPG8hR6pf1C9Qryr7mTfpTjFXraDkeY2GrKXLoEfG7SsiYT6ZTj5humoK8RJVKpr",
  "key29": "iupmuARx38QjwbAbWgSYCD4mRBVkxNjd5WgpiBNxYjDiDS9nZFmg18k3bV9CpesXyrn5eY9Q5Vku5YNPkRFCJtR",
  "key30": "3veAWg3msJnyNakYji5ygyY9zebnpEwjxepm9LGeYo7gbmrLDGj9x75nuTHWo3ZvLRNJZ8VcFYquVf7kHVbYv1MY",
  "key31": "v3BHEQTHwHJETw7MrUPvPP7vrTCBWyHjJ8kusFxirHps1cqdH4yBxzwnsZFK7MnbVWSfJqYQTpeFDsbvmA5pXBW",
  "key32": "5QdpdtoPNxxsqQhQwKDkNigShsGeF6d3CFULCtvAV21Xvp1hC5oZL8RYyvqAh63LFa4pR5zBUauS21HAc8e9hCYs",
  "key33": "q7odbCVZpAqvsjEkSVYnY3YkjfnJTiKnPY1JxjU9oeema5qWMNVofgVMZv1K4AKuatC6YhoSBpaN4pKBGffAQ5R",
  "key34": "e9RrrWP1NEx4av78WHgYNoSC8Lv6GtfFdEMkePe4eySeD4kg9T7P8KhFUxy2ZjFKbQxSQqUCNtxmdKS5uTWZNgz",
  "key35": "z5A1XfVYWYTS2GUhg5hWHK7dMCArrYrvhKx1MAZyDKnUsv3xXDxLto5oxsanAzrb5sdt9nsnDKtYXYcQgTsvw5m",
  "key36": "64RiNnVkuQYHgrpFMwypS96ML5v57HeRG5w7jEuKRfWMzAdAgrYdqtsohcVg4hc9vAhascVfZxfodWqGySxLAr5q",
  "key37": "5ZJ4krutEdZG26X57qFFnQZRmpDxqg7LCUopAuuMps3NgJgtop5uatJmjJcg2LKm6H8CvBMLVSvn5HeM5MnZgsxt",
  "key38": "4hJKZ75nfeT71LUVu4f9wi8LLWqXKcRLWKgpmzUnYXY4F9K1JAQJFx8FBtyyEST7LM8VKaZg6g9bTirKPCkbaczs",
  "key39": "4XmE2D4Nm1Vt4wX2uvEwkgdVwrg6hcWLaVXwAYoE2gZBg97s6Lhn25Ehkd3BrKE1w7vhqcRWoS4FR9jBSNBZH75D",
  "key40": "52JJ5eT1u7fYLzHxA48oBBsNTEpVX49Wa3N5bzsSnhLucMapgVpSPkBJKxMjqu6yZSRzz44DXYcQhRaYDYDDtFjp",
  "key41": "Ej8Z3PRcLsNtReACgKzugjpTqKXRm1WNJdzN1PqU31Gic71T63ZSagWHTenTgV9YZBaxsBmVyK3qwDhDJ1i49ee",
  "key42": "4gF87qvX9ip3e85LfTrpLy4khXccn2ZZpqQtfmUDagWhkD4Et8EqiSAds2JYg6MgGpT7hHovgkgW3kfnhQNR9Yxt",
  "key43": "5thMM3WzcsPmzHciw5V7x88htQiDUz7jjjb8ekUHet18bEeMAECuvMyoZik6PiKi2nMHZTaBTs3oD9RoZtfko3yG",
  "key44": "xZEh1e5VfDK4BhKDqdvz9T8L4Hijq6mdo65mcrrXz2PmQShqpScmgkNjaX22ZfSHizF5AHtTuRX7qXUhXAM3osa"
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
