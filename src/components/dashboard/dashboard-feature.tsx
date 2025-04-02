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
    "2JJYmc8nxyETnvquuY4HwfUDjkSjHtk3CyrbjwxeGuVSDPbFgoSatkNML4qES2vn96qpujnEzbVDdYWM7cxuFPkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGG9G69ZU5qqj9sJWPho43RQhqNgo5DUu4F5Jjy6wWbDzV8q8oZ5PPToAhMLQGvQL1NvFetUUnDHqSKHP84rTxY",
  "key1": "267jP2nsQVZPfmyjQM6y2ivKo6U2RN43RhkrSUmx825dA51ibGEkwrtQot4j1RDayN5UDoUpgabAQ6Kj52WgZgrt",
  "key2": "4XCxug6FEvS7iVA1tnL5WBVXXdwDqsaJvnd9JMh9qLQu7CcNnzTMrgMGPQ2WWh6TW2DHEHxs7oSNoE31KLAvrhzj",
  "key3": "2KVMWM35nqFh72ucG2j4efk8moPJhMVBYhvXAevaay3paYCstonuCsP5dkUSW5DJekfoNQZat9U9WszrHi76NKHs",
  "key4": "4Nv2k1aqZeJABFykoCfpMMUW9KFZsAMxWQEZeRumEWiskbLYBRE9bHU5HKLMdN929qiWnmrwuxr7nCem55RQGKZF",
  "key5": "52Z95xPsWpkbMihujKdECsmC4Qk7APWNcm8Aj738ygmnEPJ2ofhRetgLAj8VThdjwb3gwJ17PpgEvFcjZq4HST99",
  "key6": "4ARYtXxeotobGKrWsf8sQTAdzDppaKyKHK6gf4Pf8ArRuzXSrcxt6QRUqmNhQt1vyMAerPCQ5wLAke71i1is7FiU",
  "key7": "PRLqt84qbVM1NsS8fprumatGrFJdMzXAYRHzHm14UMf4kxBME5fnFCgTuXWhWHTm8Xjm3bDNXY85DxBJeSwuBVS",
  "key8": "5eZ8dFVPhzwNn1ykxGCxy4hPXcGBVdsJwFTu2Sfr1sqnXFPVjjoWYT8SNYSMMnFDAJH2BBXqXR93sjzbadm4tGfq",
  "key9": "mcYLVHs6C5kZHEzAn54goPR8hAdtuzYe31n4xmcLtXunWNJqmPWHawRCfGBnrPsK5R7PTWNqFNSpF3wvfw795WK",
  "key10": "5uz4P7uFEbrDS81E8CD5X1oXw2Z84j5yPspc274WMEKikyZPLQZ2SqbCVeyTw9F5DqPzdLCQoka6FvrCNLtVzU2K",
  "key11": "kqGnx3e2vcjwaCwMd4wQ4yLjL9ohg7zhu1viZs9XhL3jBPDf4i7gFUVtp1Zj1NdGuvxdz8sfg95qand8bRL61LP",
  "key12": "2DrvkN66HYKtqRQ1ccwvZQTmSwRLPUPRfGPdDL68gt4YY5YtQYi3JP54FPYMaHqeorVnq84kA9fbvMvpqySh8B47",
  "key13": "NUg4arJDkq2DxM6z8ztAyLLrFKfLm5CS9iDucvnMWtrNR4doBwwAEGfqqDcxcc5CmQYvZNAMRYMhqYmuwdcHgFh",
  "key14": "4TyutyvzRs7fxo54R1jmMswYuhgzjyz9QRMYLMyhwLVgpH1w3teNnpKaEAN5fHejri6MmCoU9fHf2LNYUY9Ympnw",
  "key15": "3o36PQ2emNZNkAaQPjESgzmSSArTrrgi5YSJhqASzQSwYJkktpbfcnYwyZ4sxmPvVAgQ2fXxx1zF4Dc94BfoRUbs",
  "key16": "2oxkLPwFcVaoxweAARxGSnye1WJdnUicKLqkeBiiFii3J1yLeAPdtGUeRMxjoz1Mpg9DYuEwqfQCPtdnvAg8PA7m",
  "key17": "5ETbzghtc9F48S7zRNDEwdJLPp8PnxgTv7wwTRTGLAWEBTiVvNmbRuQu6bkE5AAZRZ378jEtejfZ9haVGgmzhcSC",
  "key18": "4DbAU463UxrBN39TFckfn7uJbaskmH8qG1TkBekun2fVJgVWhCayGEpzLKdCiEb6zLwNT4bJsTdWv2yK1gxQwfAo",
  "key19": "5inZbkTaviegSRgD1QAm3vfCgRSue3cEY5FAhsUFHazSk9iG2yigYgtyJZ7iDhh8rWQtAbet5dHCsoKuEa7AUKpW",
  "key20": "31rjD1wyMAFpYG2EXTCesasqjSCNHahcpiYQ5zBJNfU7wKd52hk5dceuzBMqp5SYTMKq1y3aJHQsvoTCUnmPS4YY",
  "key21": "mEQVTFHaUbSkLGqqir4JT3H5U2aU5ohm4YJzvkwrcuQgoLyYXb1p7PCiyzCJZftwVtAeHnfcccMJF4pVaxnP2Rf",
  "key22": "2J15xwk4iHnxs8TwdndgVygzDeWy1uLxSY8oLCfYYjX7Y79vnprUewSyg3PJuyQRv91aT1mUQYnVNicrTGuTJLZY",
  "key23": "4aFuJuaoxutCMYCkUYUp4hWMR7oqzHLnJgiDhVDHb4Nx68DzSK2BPevyidtEXJ6GkjX9V7pccyxG6DGj9mPc1waD",
  "key24": "YyDLW7pA1mTYAZ15WFyHTHbpy8XAk8feRWfRYcwdjzdQA7XTWWfFJ1h3ykSdM1bAbG2KpsUmtQXEg4WgBN3qwQD",
  "key25": "pgn8E4gZXzZmC4fvVt7J4pkDXvowwJj8xe814Bw1BP71tZoNGTWfWaF9abxqpUvXMYmNq3bZFKi7fsJYAZuQWom",
  "key26": "gSJLWVeZzqFXfmUt4WSaCGXBLmdMTX7AcLy5VBYzikb7EX2rdmqZj3R1MvAH4jW84V8u9nLLpPiM488LxfS6N7A",
  "key27": "5Djbog2uzw62mHdQGWeWbhE3BMX6dhy94bKrNFT4oyGA2wNc5FwTmNTyzFchWYLaUzv5kkFsXUbhPJRvpfvmqXzy",
  "key28": "4VUUyh8DbQCeSMqE8gV6veRUHSFHWQXb3fb9WwhE5xWSe597nn2tF1u6UGUPtb8TRKwcXcTc29KD3LsG3PFuHvRk",
  "key29": "56mkbRfVz3YBmHSDPMBoHk9ZMhdGnC9yXzY8FJHXktJX5AReKH7yYzDf2Kf47rnudYFJfBDHWicQfTFSB2M8hYGo",
  "key30": "5dTrCcficibh5s2H8BicPhUrqd7H1sXxR8CEGxK9pDK4S3F7PBRih2u4HtsEwUukcueReCvkQvvNz8poYSRsvnoN",
  "key31": "2Sf9pyzhu3cqLNeSywXXwBjWjRPxAhvTXa4A9RnnSbiNeyr5NrAKAiuX6dgrAv5wSiaKdye6AkEARk433sY812zq",
  "key32": "QzBL6NZYdTgfYScdAsofhwxFVYge46Mqi8PkLe3tLnXnkmFkbpuGmhSMV3Zk6ZNWzQzYVeuxRZacVPfyAa1wuM7",
  "key33": "565eLYNTaq212vKmwfTTVLqMonVbrW4X9UwsSfhycBv6CbvxVazi4u33HhPpWfqjrWadfy5ejEVHndRtmEpXJgiZ"
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
