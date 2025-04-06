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
    "odMnPAsGPfpPLhGnD4ezTbavxDtBBa37QrwN8SxBSKXiLLjLZerZnCP4THtxZTbisT5kNF8t9B3j6CCbL7mYauw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3GF21P52UgtN6WVenPiZag98NGLmYCJDr4iXsHcvDYyFt2RqqbdCGs9dABp6zeooFVDWBFmuqoDnd5tCwMYw8i",
  "key1": "2eLoA5oh1r96NS2hBZaACULn7okR1d7kxr3gyJtnzxy9XECcBwSx18ijunH4qNmjReaEbjirEKRs4AvXEM3agWwd",
  "key2": "5UAV9LG4CU6i7worMCRtTqNkGKsY8rCuYMQ6taxeZvirapB5ZfSP1m2HHVv6L5fYQ16tLdD8TFzJy8tDppX1C3UF",
  "key3": "3RN43aEWwR4TUBRuaR9kgeYHpxrzScc4FFCM5oyu2eXYhLhZgzqHXoxz2fHGn4iyNc8hewyoPn7NL9f9HqjnNhHh",
  "key4": "3n4MRuV9mWwKhWZKgGn6kGsN62w7k4XGascntiCWyYMEmWAuyyDGyaJdNvsJQdq4Hz4J7QkN65t9prMf3Lo5zvjS",
  "key5": "53BpiBnNix1aNExGUiS2GqpwqnvMFCNyiCJohA49vqc3XQ6xKxzPK9eD5zUpJ4S5eU578xSA1b4V19HgUbE5A6HN",
  "key6": "4JR8KVRgHCpqUiGZsRPvCf2BGb7pG59SNZ5R1uP7mzDR7NYW8f8CkBYjx5Pbeg2LTMR1YTvuv1yYe1CqBcRL2Dp2",
  "key7": "2qg1VyzhtQsJBhEFBTCu4fVbGVFucrNZhoLSkuBrWG7PuwzGXCBoZZ3oJ1kaJm8Q5uqQvQZtxyCPWiAy2WBrUaas",
  "key8": "2GpKPEda1iR18y7qskVxzjAbSkMNthvJjs5WZw7e3DMQNmCeX6Mnpp6aGcbGAe96aL6shGaD9rb18MQ1jfv5v6HT",
  "key9": "3fnuhZ5hynYU9pXUPeYGQ8a4b3qyy2nQkEKQWVoMcJcFrftE2DsgsqTj2GDvBVHzDSYtJiyJh7VbvVjRrUAYkPPU",
  "key10": "5PXJPvfjbfwydCY4B7nHGNxaP7rekE8Z4PB3dNwoJu23yh6EnhGcweEbAhtrR2KkRfMXibzDegMqiMbzPH3AorvE",
  "key11": "3MbmS9RELToKkFRhJnPreJGFBuzgaaFHCnBdXEYqnUXTftirffGXBwpEbBhanJ27Rs3gnouvc6s1z9TvPF7PXT8y",
  "key12": "jb1DCtChdWPD9bYiXrCur7nmJekgUswwgmNiPXL1pr5c1SzFZEZGXHK2YeEHLe6yUKdg9uUbAQkkhDEdzbuFhSm",
  "key13": "239YoTCfY7E5gH1Du7hJmTFbhAbD7GFQXAXn8UYz5R4GRXe8CP9CRksKoNnHAgQu1PJvSRTdQKvkdDfagmnfKgPp",
  "key14": "6262ij55iiXLH3BpTgVHXAUiKxn2P41c6LFzfgFeCCEnxjT5TGbwhebb7fdEWv2j1ed3at3F1WwkjSaxSNcYErfr",
  "key15": "Y9oyZzi6f8bqVRyZ6N5hC1xcpXKYtRQ1rynEXnab7quYtxJEefoS8MPYrXb4FY4heEyfoSjk2JeyXJsRFY1M9Yh",
  "key16": "EgnEwrAXDfeTa5AxvN6x8ZYVccMjSF4v2pc8YiNWkQVN2V6s4fvd7jcD5R4eTqDQqVnTcQoxoMjHK98QXn3KaM8",
  "key17": "28KJWK6NjzPtQBeTq2rkT33EQiDb2b2UCZuebW46X9SzE9APZse5Mf3g1964JDhKwvsQG8K1TPepVBYMKeBKSPrb",
  "key18": "3r1XWFHLXLadGCksjSxiY5MG8vDnYFj7noT4R8FF8kUDVTTagZ98XYjzSnDSdtV9n3w8o9PuKhcVh2vL135yZYJD",
  "key19": "5vKBX9KDqSg5vGdQrv6AJy8yz1o5cCT7JHM1uH3wMbagGZ1W9s8t4sPjGLpxxHFtwt3gekdttU9jG643giAxqvXq",
  "key20": "5GNb7NSzSrEWs6KVLmeeccYBm8PmM57hEs5UswnTZat5tAdtk32V5QCdCznkaGfgo74iuZJPTHRBWQaM7VZ7aAFi",
  "key21": "mZ27yfJe7WyDUHSSywqiiDMwx7c4M2Qad4DD4mJme8EaKTnSP4bhoR9c7eWYZDZ35wkM4EwvBGwNCQn6dHCysAA",
  "key22": "2L9EcQ9nGK1SiurDDVyXtSeQtD77AfExj9zi33BLGRBPZ2MWjVAq2WZ1onTz23ZgzeLK4kedpAAASD2ZyjYKwLDz",
  "key23": "232Y3TfhrYtBT27nSmFTYJjjfxdKsJPGtB1m4WszN6ormbPuwCgycq2bD3dr5y74isbAYNj3jEWKo6ki7iXDFURR",
  "key24": "58KXZ1biYhMDx3yvmZshcBDPS4UXn4AHV3S2voDJe3SaxYWzaiME9mo3ubuaHV8PjfKRuKPLnqEWaVcviKZJW2LV",
  "key25": "5hqrV5HwfgbjHbouhq8UusBQDaHQUSzmjjBaMqoYX9ZoN6uh4BisxT8MHAQVLA1LR7Lfkc3gdGR1NudnMedHjjDD",
  "key26": "VBgZDCfPFmrGBheC6kYybNVMdgtdeggMMLdd8NfHvVrmBcnwNVLTjjtHBmdURDkX9Ar6XRMbuta35gFRnEbNfkP",
  "key27": "5tpkoeu9ubWdCU3qDRG4UoxoDBs5GDKdup1gLPNjT4dJ9y3juad9rvuxDoFYkon728tarrd7yx4CSkAz5h42Z9nJ",
  "key28": "xW4nKrrELgZM2wAXmaPF48gkRGU2pHCV3ncg84zjESmXUXSHWatk8JeuuLTB2uKPLdTgYCoY4xd6D3uG2RERpta",
  "key29": "5aAMJTCPNSE7MbrDS115MKSChHXwzUEgGKjCxtctRcWTNghXmk83nWr1mps7xZ75cj1PpFtiXNpoAgwdNLnE3h65",
  "key30": "RoVFdDLJz8EDYkd6xZTtsYJYLyjavh7EngMAzozWEeVXfn8ZhxgtdKobqaWwcKnT98zSPJPqDRoMc7rjN58wKdU",
  "key31": "4QGsJhsDrwqyioe1juSKtRPmXxzCAR3sEKKvZsGvbuWcRCxUqeEvtefP7tbbCB3dxFSEbxrRJhSDnnfg2DrjxEHv",
  "key32": "RF21jhe7hMaYr3CWJqjV6V6H6w3e4pMxgJz7pQKoESPbyTira6KzsYYRHHAUQiCzwQYj3SDTnGnT4NkwyQDoxJM",
  "key33": "bSUkdsvUMMAh6e6RUeBNFxsUzuhJGBLm51TwKiMEnnHuHrp28B772QSJ9cVYSMQRFMJ46YgdJMsAUyvFkWaWKVA",
  "key34": "5UEG5tQX6q97MhAoUbujUjsSSvYkYVS1TXE9CoNmCXUF9wiiXdqZkcWMrxVpuNjTEnboMh8es48ohzVt1ZTpqVzY",
  "key35": "3BfPFWtSJHdq6nLyrxxrJdVGuSaPKTC2noFUXaLGD5vrVNeKpur5YDspPW1aChHHuimPYieopWdhotUKUuj3TwyC",
  "key36": "4Js1wVfXnK9hToWfY5QsDwQD6hWBZFv2nRgFryWc43LztBVfk1pjHJ8U8GwSrjxRRAvkSziWVBL87GMWubGy4H7v",
  "key37": "2W1r22c49susGw4oWEWC5Wj6UiUK7tByCXUcTnSEMR1skgwokLX1yUTxQ89ovqPEyfbwuFwAewu5eRmP2m9StvWj",
  "key38": "FpWBX8GtzCSTRepQSyKKn7d5WKxJRUbNP9AhweTHQJKxZd4Le3ZMEApTqkMoDJ7vxvCv6k54XCNHXuRWqou9ec7"
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
