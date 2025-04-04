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
    "2ZG5njR5VERe7rgWt1YcDrySbSmKNAA2AkduoSMzJJTYzLDNnmeM91pDAxdVLf8KPsBjY24hcAuHQDUKNWVJmAfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eZcGsXtyrbwnkCynznA6iQq8r2o4CTMTpmzd9rzc7FcHL3gPjFH8dQ9GP6wM7GhqxZAmuM1idJwTNDdoZdUhYk",
  "key1": "49iQBYtQX5DBnsiRCQewHHspmQAEXEVtvQzbAXs84koQXW4EGnxBNAbLyuhGs8PPXgdEjAaBg2F4TapNmiU8GBZ1",
  "key2": "2C7KoJL58r6x4q7GomSdwfwqGKNALVnv5ZF5DVq2b2EYKkzGeHEza5yxwdJ353nKKDCGpjhBYDUm9zL3ypsi6FGE",
  "key3": "3jwKU1JtvmHYXUJa8kdbvwjBap1G99WvZS2My32btaFdK4tnrxACnx2wWp2VcSbHFtd9Deg12qRJqNCtBj39aa8Z",
  "key4": "5cg4WPWuN895ZRBWirfj4jpXMKQdeCHMmbd4pR58ApaiAp6uGWDSyFevYPCvz9TNffrt7BfdsmNr9T8vp9GuUb8T",
  "key5": "ytWNB7qwwZxa3Xu9wcDqZyqqXQWkVrz3kz2pbekFmU5f7DGstPAibK1nqmnsAoLPGrc5cVbkeNXKVQU9AJNLLH7",
  "key6": "2VaDyC3MPudxk6YbzSidCQGFY6TbmfxDh9ZYVXR4cQ26ps8g6bdGLK9etvK4qGD933qdE73gGhHWVPJLba9m7NCS",
  "key7": "5v3b6nKRsUU6BqJ6UfueVN5kFB7ATTDR41HFqGSV4qaKw7HiPTrsosfBLyFs3jKuzpveFZvBsNj1astKCD2NqPpU",
  "key8": "3QacFyw7DQajiLF1Luc3eWk8M2VmNFLGR3TQFLNB4XkHaBs6qrFgU86yQdrWAAZqA62rs5saqJ8H628YoDFxBjp7",
  "key9": "SPxL7k6mhWJSsJAjXb6HkSHyagq28isqx4wpFkK1tu9mHZwzJS9EwdGxziz6QSAjis4TPdd4WU61MMuHg8LCA9N",
  "key10": "2Ebrzk9wnMFJPo2YLYErWA2zBEfCDF7B2QNR1nNpUccQuqjy8fBRUp68w2VdW5AuwNb7cuPmP4t5cpPpyTbpqkFW",
  "key11": "3njDATiGZno9J2iiQnkE5USNPKMWRQniYSB1MXGzhJA2wrS7Z6Zu54vo1uXQBysAzW88HhfcyAaXZALd3xfhF4tb",
  "key12": "5PQESMUCdhR1uCt41tCBniGPgmatsduHjkC9KdZpT3nKoXcA9kmPnAAH7q5GXUNdmFaRV3CLoWhaCZyyY57AXERu",
  "key13": "35QxrDTKauDrS5tMbypiv6FWNyPBQq4f9DtB76EeJk93yCtpQQ2aU9rrDnabFV4MLh2gcz3CnogWTyxC4LoiRkbs",
  "key14": "4pY86Fu8nRai1UUcqUzXsvmjVfUZ1gJbJTUj18222FdKCajv9nALnsjiHfKboMLc1T6TsQmFUj6MFYeQxJJH2TjQ",
  "key15": "2q6tH5uMiwzRiyD7Ej7DEKhmynT9h8Dftr3XgTAqGHtcBYSV8cNmt2PspjLxdZyKcB6Z7Zc3z1H95rzjLcvo2eQf",
  "key16": "5mxtUgZVQPyFKqEmeMsLWt1rPC3ymfDBEHgghKrEc3X5gXgssbrkYDYDb8YgJRtXrjXsqgHfn8F9F1EjTC4mTUSh",
  "key17": "4DRu32VNFvmfJ3QKDs3nSwMh9jNAVWGnjXdQ5crJ1Nu7A89uyHooaagLAL3DFBurboUQ5ZKuxsKEHRiz8tkK6mk1",
  "key18": "5FexLNSth5sDfhPxTEMEvNMPVriPbEqJANnSKWPgXJTonzsoJRGvsqAvGLpbWicgLN34zirnSw1qeE8DXH2vDLpA",
  "key19": "2Pd3sBsQzEcwng4rPQqknnAK3vF9HwfzoG7XtBk8x3kvSZDS3hGVs96MXF5X8uAUg4zrFYggSwWftuRgkW2pF9cq",
  "key20": "5dh19c9U2SRuom9nDm26PGpFZNY4znYSettYG4DZLSwWfgyCUiYZeRXBydKNTkkLzeHEy8Kw3Wzs6aoMRTpcE8Mb",
  "key21": "3WEDmvYNcVN22abpDmmLCi8z3vBsZS4NFCyactzARDAgWfo1YT7WCseH8CRk6R7rer6ck5YC3c5h2fhhVomNB5HB",
  "key22": "2zaFRB8tcag7TJWEJbVd8d5NiAt1hAgGGB225U7hBBPbS3SDiW21XDqr4jksFE7BRgpx5uj4wa1nmBXP12sTxz4S",
  "key23": "4yCXR7znprj9HngfeBgiipRPovHXebR8wgw9EpF8mfb6q5ni8xjLLQZ7baA2fayT1LFvDTkqMA6Q27ntLqj8DMLZ",
  "key24": "5Hcr1yiUPqqg4o4TnBZDoPEFLatXW1nmSR7N8HL12WjRaJahrvd7qcHYd7VNzRHFLRqEPXWmFL1GCQ42Ye6DfRpe",
  "key25": "21YXD57qcftVxT5V6624whkiXurhuYwT15gy1ZTAwh7yqxDZC96Ejc4jeBUgV2JAV9RftWhtoKmqZhFvJsuxJp8G",
  "key26": "umrLhoTMM3AGizxd2b9UUsKHGihVpD3sy7ViHCeSBtvTbxqz4nQDeq5ZtuJXLgyYomGSeqvSiLdhV3eZtD1xdHR",
  "key27": "3Xp6fycLEf8NUy55TuDMQLcx5RPgrHW3PcAEPu643SqD8d2ZDsSYqWVjyG8rx1MNXTq8iFKCcsWPfPPBjzoY5V3s",
  "key28": "5pMyioEpbKRKPsE35eA7LanTNdJNRFxxA2y2UC6rPGvoaajGYNNnKacgWaCz9nToCtTC3ErTzpRf66NGTPB4Gztg",
  "key29": "qECoAhsEX49YDLRa2itHRF6EDyw8bNqAes6Xiitg5qXLvc2cT9bDVYtmc3AfT3FSfkmVHyVZu2aVApHHMCVau3c",
  "key30": "6tFY7ZetS6osP2m38LdJrvVXtMPufGboVnyrs5yAQzn35YvnsSXxGjUo4Jaot7MoMH3JQquxKmLWMjqbBKceYvd",
  "key31": "2ucQs87fDR5R7mA2D8HGAPweYCRNjrYS9pypdvvehVDNbrpPYFGwExdY7xsUK2bwY52peaNdzvFpELpkz22outwG",
  "key32": "2M9o7ixJ4N89ZbzaRPM1JNYQHCckgcK9tpk4ZB1X9cXrct5Yr9bK5q8J45DxSKd8y5js6cavNX3wUJAnN9LxJSGw",
  "key33": "tL9JjCEGJC9YU7HsZoE5vhGa7Z2mHpQBWf43PNpGz7BStiVhP3vNte5P99czaM4xUPVQZWV3MBRgR62visxovw3",
  "key34": "5UxA2dr4wURGuXNJHMU6Z6mLZKb2Pmg2FJ2LrtTFjzUFSVgWVQHjMfXzXCgTmENdxnhnhWEz5mre3QCfBd8pmfxj",
  "key35": "3q7wr1tYkoaQ8ETeRK7MFyFznG12TQuDFjp8A6nvX69KqMd5niE9qGmKLBFped5gcD55hpYACWxidknWMZE2cSLe",
  "key36": "EutnNvGZufrRt4kivvntszYQTwARPEFvXbnKRLd6eWVBcMY173MX5jjc3QqMK8hBURrZ5QQZpNXZJXFo5K3uvw7",
  "key37": "NkBaBhPG9DB8miH7KDN7zoqycjcukZtT824rPF9PF3nMB86rJm29hnMadAZFHN7B8kMwbLBCvP2tAH8qGHRX6wd",
  "key38": "2gwQEeXToSdGFG2gQ3xoFu5upNWwyuVQTcTMEXinE2gVgNoeiEQ44bAR1Xhc5xEH5yQbjUmgMbG9S7W7R5UW8KZh",
  "key39": "jcWWrvgkg4Vz8YtVPgJxz2sJ3WKmhkozf2VjtvDEfxZ4SDfLyzDidtZq3ZThJ7aUmNBs8zjJ5AaijXX6juW3Jce"
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
