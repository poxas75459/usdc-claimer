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
    "2LbLjxxENdXAXeRnpyFobWobhQahjvRC9qTavDuVEyoDtsUKpDfBKnuc5SQMnGZcX15QZpXkuQVUmt1ge1onaJgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVGVgCFNyUzkvfGdUZ6uy76tYKy5KyzXJVbfWpiq8resYGWPhuWwHGQQZa34Eb55fqGE8NPgXXzN5Zv5x85Hxej",
  "key1": "2Ycd1ZcRJ6va7Vr2TtDAYGothKbfHPJmLTs8sVcmZmdTK4aQjYypetpZwmoPPvAzE9zHAyncEcjrUMw3ZDcyW22k",
  "key2": "59kyGzG91srJLAc9fQaUK2cvZs42mbENWYm4X88AQ2oFQGaun55D33rNRD1So5nj3eH1pCujSQD8bMoYqRGnRzA8",
  "key3": "24CKcUpTKgHmU4DWvHLNaZPh9W9TGq9WTTDcAnNnaKHZsXYx2sxncLzBWySbBRaFfn5XjaMAVCL9FYsNxYN9heiM",
  "key4": "RiBvC32w1Xy29qTVXExKWbM2Rha9nN1YCr3D2vkfa4kJtnDc7ZXCMqSjYtCxAdJedDRXtyCxBVUrEPrC5ooB4yN",
  "key5": "5GLeD2KsksAYVkULupK18BKAY7XWiqkjzavj6WC4jpqVetH75G5sAJcfPk6P7GV9U7JsJKQ357rRfsx7b7QmWbaC",
  "key6": "3fmScWY4vmUGbPkynSNho57GeSDmqYqcCtZJdtUzyQhXRxLtMiSJFQ7GeRcqBgLoSn8xGr3bKt5pQYf23M3B88U5",
  "key7": "5jZR5gFSmpJ9q6Ai1LmL3qndyNEZtdu62sNS12D7kN5Vdw85JdhF8TpWCQAysRMjDQt7EXTfDsEEKMBxMjc4YDFr",
  "key8": "tmd2LNmFQHre99roCvaNnXFnBxvCvNHBUWpFveGB8ThJG7Xdg5ingxaDmyD3P61fCrCGrsi2KuCWc5ebczRys8D",
  "key9": "yb1AQ9nU5DAPXeeD9P8qhFcpVSBr75FG7GVM3H4nXK4DmJU6fnjBttE7wV6tLVwTWqkB817PvM2gJVdYtkN9Pob",
  "key10": "2kMGt9jwmKHMqhTUEQK4dQsUBMTVvB2mTXEZCLaeC2LGSt4B7fG8khYDQifWuU4sNqWDqWtqcTXN93Xk4cMcz67e",
  "key11": "2qxswqPomMeEB9KCQefRrgf7YMTanrPX3pen5hXnJPyNcgdnj3Diqyv3gupYFM82fFcomkihdbpRyUezcRAMpZED",
  "key12": "3rwYxC9sZyoCtZXVu9okiZ9jLQobgCLYAZg4LpqoUYuwqEyDdnHUTWyK91c8UV12RQkRpaewSSELQMExHcNmjz5M",
  "key13": "5M1sZ12XpK7843gqV8SPJxBdgxEV1ioiMnnA32tBd6FaYFXXhTyh4iSPFir2W727Y7zyVffP7pPqN3U94Mcr1fxw",
  "key14": "2Rp5hL5zdHqmwSPpFtob2xf1kiGmSnaEzxE2z3dzeLNaZGwRNtqKp9SfvjMqTZit4STtJpwwq5s8RHW423T8vaH5",
  "key15": "4NGJn8wUDVdxcoUM1WpF9AKH6yYiiBmK4LFPv8AdamUyceLQzc3mgporjbsFm3zDNqrEX7Jgxoqgv7jNJSP4A4np",
  "key16": "3LssAiQYgzqoo6uNtcnHkD1EqKqwRjGUvubpnXruUubMjNHxnQD8KFspxkTFNvAH143TeMjJ5fRDcEstrXdhnwas",
  "key17": "5DkaKMDFfC4897WSJxMocWbMWmm9CcRMchA9XMrQdRU5gtqDh7oAjHmixxNo2HGi8bG6c9KX6Sr4tseDKDWREENY",
  "key18": "3q7y3anzZJBinvGRLDKuVxVtVGNKNCEoGazcBqz7VeK419xyUVnHfdyUF3bP1RYZFGPaws5dWnHiydbJ8AVrJVNb",
  "key19": "2g25NHcPQgnjvdMCV6Z8oWuGPsieMacCM3QNcgwQyL4iJxmrjmdash2dVWbf4bvRJ7aYbzw6je3nMHEYDrV3YLYA",
  "key20": "EPfAHr5CNarDUxVp9fpF6Jcf2yn6wCrG8S9TG3M1T8dzUtiAY4qDnwf9yNodDptom1J4n9yAjtyiagHQK4zRBFq",
  "key21": "2RND7yGSAsbNW5pKD84pMgdvorNPnFEt2pQwGxMdPeJH1zqGCprc1NiydJ2simdUvmKdcwwY1QDKHk3oYdHgGqxM",
  "key22": "29kc6yJoZcQDPVi4DmxRRJ19F3wH1oYAc1N57PVW8uh2tRhuRZL97feRhoGbsithBVWZyRVh1oLDU28xP4vnVh6J",
  "key23": "2PPRVFP557Ro48CkCTWrtFmPBMG3eGxZxmamkqUAcqR3aZGeimgJY2GZwqrW18DcQnHqdvYmopgHcJDBb4deDPWE",
  "key24": "4vrP1SzR4oDU1ev6bfdQoEyT1Wv5Tor3zH8kM2q8ggLWEuaR58fPcAro4PFVSUT1nP16S6LxFsXxQXutDF1z5SSg",
  "key25": "5DD33gZuNYX4KHBgoNYDFPACdLQfHQvTfo3n255KX1Nfw1fnMhdaggSR8b5Lt5UoPP3NiMEJP5VBhr3NNdxtHTgs",
  "key26": "3caGMV1iNB2DT8gL8kwf4uLdcxpMmnkz74ufLRvhRTvcz88AGaacU9iDycmTi5f4uR9upf3hAiKV5tzgQCoCqwST",
  "key27": "52CV9dgnYyoqtAuSnYxp6pfhRxeWpCC65RwQti9uf7FNWGTSCnwAMMtb38D5SYnZ8Fx8R2VZnzU58HmHdWLyx535",
  "key28": "24hmRQyuhTV8Zzw31hZfZ7eXjZHaWp5UhDvss3s2aR3yWPs3wGLMa3Fb16JYrW83Q5r9A8SqWKYp5J399AosLPMd",
  "key29": "2fbnBt39KKQ7sNsLxfCjN7cpGcSyJRQVB9XYhNz4EFNwCr4Rywv86Dj3Q4boDA67tsa9YG64Uwg4HLCGn3aYCXpQ",
  "key30": "5HwBv2bxrJJSkM5uyyxWG5W5dWQMYmaeRmGr2gDpcsGvRDzr8AvDpcfPcx7oYTWuZi87WoymAH9QYC14kTQEHTvb",
  "key31": "5HTwpVMhAzak8wv9zDPF4y1X5ACGBqLuHiRpc97VcsTauSeyGefuhXSdWqGjG2vy6KbbjzRPkgGnzSyNg8Yw867A"
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
