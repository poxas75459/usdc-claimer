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
    "4aqsDU5VZFVr7DckVJB4UwAi97asFWg8rVhW2Cu4nane6Z8RwLLayb22PNkRvWSyFwgKJ54EphtneSGTmba8yz74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsAN7z4ZrHtTPa2AeEbUngnvax7fU1wFgxhHmgLseFThwZHa96Urap3akRYuaL1bHhoVuTyAF4rdeLfjQXw1hmr",
  "key1": "2mFmBQeHoCVHFM67RZVnwa4wW1U686WSqNKb2ZMSjDjHBSZ3mZLCG4DPBY32RfzpK3Aa3dNtX3UCS1u42imepB1v",
  "key2": "4FhuXbUNFbnAwXdFaHypU1szS4GcpLLW6rSFjxtMxinLo59bWdscmLyy2fxgz9XPAyDnwMWnex1NGL26UPPojT88",
  "key3": "hQPY2VjprfhHa88DufrgpeC2eUZxetCfYtf75DXjNf1j99fsa2ZgdumFJ1cqAcdC9VnGSVkdAG9J3T8fXKvU9fn",
  "key4": "22pX4UtamsBpQqg8qj7VPyCqysuV5iw3FSHg18F8t9MYNmkowPZYDmaV6apRoT3tE73XtTpNwCGeqWiKiJREKkTv",
  "key5": "Kn64gWTkADnhMEqmYzJrM3oWm8yhQwyanwfaKbiThPoXARZPdvfUGkC6sSR1w4xvADGM64YQNwLzRhq7VmhbByg",
  "key6": "53cMh25Gw4i6x2DMCNqgDDpYFsborhPmk9fRqF6TEdcg3RrLZZPxf9Huw1kPs8n7FWmHWEsSjvCBAM1nh3TZBAJh",
  "key7": "67Z5GC3WEvxZHDATZMxjYbF9ZdEeYpt6NoyZ29bBb7v5cuRvzLCXcqhWTqZczH8kxvTZJqK2bMmvDGnFm7EugVpE",
  "key8": "3Papm25g9G173bWtzzBzcwtE2eTBkA6R36qAmUmegEn5rkdyURbuiR9eZG5x5CfZ1vcGTAVAhDHQH9dEgj74Phgv",
  "key9": "4MVhMFtv1AnaxkVUqdRWap2eJAyPXKH27MWFKy3J4HJZMHqSHdoarQ8G8Q1ydLgg8iqhbnaCKYU9cz1zYQKnPXjH",
  "key10": "4XQJaYMCpayNpxX1ahaaLdHAyJK1sBPobNrfCpMwzvUPiUt9vkoy6LsHoJ91vaUq7C3ABBS6eMWh8bEqq1EijKiD",
  "key11": "4QNWuQtg2ijeGDtxHJNsd3UBRZeZGPTue5k4oKrbrEfr1o25fHwC9XEdxQL5NGMpfni26aCdAUtvEznQVvh4zTc8",
  "key12": "2wyFa3TTNtGuHyccdJg2STQcTq33Q83okux9jKRfehT5EUxqCcT8cPZqxm7SdYWufJVKRcwYpZj15K3YwKEWrnA8",
  "key13": "2zSigPng4ThAnHWzLmZVA2VVeUA8Xm71KwtYrXE6xeTo7Ums9PKSg6XWtGJxnAQohjzDMSZmDNmXTyNN74AgU9YL",
  "key14": "2QdidqyajdTYARouLfRUnwBie8FtVqE6y5aPJWzKhgEPbv3AZfBTjCuC831vHGELZFqPVy1rFTPYfnS3gLqvwU7T",
  "key15": "5i1UyDizVnEGUuQZBSrJUM5ePBpACY4ydLcKAcU8VBLvCSdg5oGrYbq9U4C4Gcdg4eMYPGDqQYXYa5uMwTfbJyH9",
  "key16": "4hGGyKQ2SPNobti2DmbUp7VaXF3FRdVY4Jw5rkeDoMSEjhJbU1VcjhEMikW6mfJF6vfsu4gEUgZudLfQsjVgESCY",
  "key17": "34BcbNQcNpaz2GogoYXPUzcgmZVKeMjBCSze8Qx28VNU596ZCH5bhj36MtFXjGToWWfXkxvRfAckryqdU2vSq8ug",
  "key18": "s9o88AiaVDBqBBGWpSzgCUbBwEUzwVszt3Ccx5VgdRzpNPFxStsKWeAM4d42WWSSDnimdhJQiQvfgzrEWCsqmAn",
  "key19": "2hLKsr5EaTma72iqg8JcT8vUagbAJN2JArxsMEPz9djkLwymocTgAUGmsUv4JMBC3kzB4rBCTgD7sxuBCUFKAf91",
  "key20": "4diUXAS6RETwHoSUSjuV5oX1LxPMMBqrpQq92HfzT5QYCNasZ9Un7U2TNBd21qWDJdg4mM9GSAe9CtS61durBNbZ",
  "key21": "5R9C92G8nLUBJSBj7i6t3vMjeSFT2TT5uCMkq7DqW7FNkKhzdsMHaa9NPHjrZE2yFFEdQxTTbfYjvh7DhqdsGZ6M",
  "key22": "65YedxikL2DWCwToJyr8u78kAgad3nbpGizr3QkwK76rTyy7uuYHSydUNNhj61kSjapFYVm5mZABW9Uu4fibmEKg",
  "key23": "6i8vFk5Xh5esJ3NqCcwFDmjnccVkuT4tuFXSa7reie2LUYZsfFq2auvFbews71T4esAB1QDpSr6ArA4nykLkJHg",
  "key24": "2PLrDanFRVc5af5eGQ3Q5xLsiTVaSCVp5nrhYHRVBL1vqU5uJpRSfXdscNuB5Fw3ZV7C4sRJtAUUUH36C2QARE5J",
  "key25": "3LxdQroE4aVQy37HkPQsgzCmzQ5LM3naLkMS7dWRnD3mSK2iaHFSeBwcxLbozPCvm2RQFLQABvDMjUgMKGEdcVkD",
  "key26": "3pJivFoYFfZrAL4ZGL3LfbKRzUk8ZU9Pc8EnPd6tXzto4CAXbpaGXjTtMGqF4fdjhYZYTg6DUezi72TXuL9cXy9J",
  "key27": "4wgJ319M3WnFcdQqycSKpAWgvPm8qkJu5ChTN2UXJcEjbYtLeV2dWd813APZJ7NwawaSGF3Jszi98LGxmy4jVHK1",
  "key28": "5nTdgbp6BsWEgccMAVaH84zQnCDkdpc4AJHmnepTTCTjkUQrotUbu4cAnvvJyicH6X13kGDL11puEtK8z4eCgAyA",
  "key29": "28y1DhF1DHRy3XLiVA3zq4hCNywur9QB8fVUjjG11Xw9DKB3gTkeaAD3dRdNJfyKc2DJycSCafoTxTkkgSn2wdz4",
  "key30": "rQQC2vgzyjoYL3Kq3LCaToc7P1yXTjXvAPptsuAxAVs9V4eEGpFf69boR3YUJFeFmBFmixdonqPXFJXgageepxM",
  "key31": "4Bkxbk1fR6ujZxjHDZqYrgQXcV3h6TwUWr44To1AtrPhA7M6QwP3huWyaw9bPo7ngCYeDGQFw5mQC1NfLFKZLJhL",
  "key32": "L99h1X9iifD1sfJVHuffKYxfaRXxypaZ4r5iHs2sPYgkSTGpShDFFQV6SQ845bMTzy84gBcni5sgZxS92Di1CFC",
  "key33": "UwAGxAQi3aCtMKxmeioyyjSBQwXXD4wAQAYpZQDzK2uU1CoHmme7Hf5rGgqKxwyPNNWRDFBkBdiTWJaFSnt4Wcz",
  "key34": "2BTKjqWqp2Xium5hoTfZePcCDgwSUtHWiiCP6qeoFmQqFjRsmN9NcBJ9jsFoJvSRcHkwXSduWtjZ35gZNF7FaesE",
  "key35": "3QNcQQwT2TyGh3aB1s2K12TRj7ZRfpYxt69W8uvSJNe64LXiF4s6hSVqa54wFdFsvTETS2wCdPnV5fmceakF1Lqq",
  "key36": "xy56wmcqGC5AooMDDp63xnJhma9EJYxMVS8DJfmxB1XKFaFh3z7iu2q9cSZWnqwwuxDyaG31vG9EjnknDe65fwU",
  "key37": "4KUdwS94qBxpBR6YLCRA8zMH88svTHiVVRa2DLENtaU3TPQRDRo3KKKEpv4NVABoFX9hyJTBdLKWSQYSdq6hVUz7",
  "key38": "2iCjEJFXXQLvxaFuSPuVPPzKtToPDFbKGXAWeGCDnh5xPgjT7Fqdn7vRvHhdvFkEf18QZCB2j1W4zgHvoSPdkVPz"
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
