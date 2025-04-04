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
    "2cFroApSRQDsbikhN5QanYHHpKzsUQpSc5Bz9pntnSFwRVsEEKamzfPFqKhjhcphob6sNxSrySdXuuzsBp8B98aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMePmSSBY9pAx98KrHAmhaqzeiSeyMSV2Uqwxo6ZGnWMrpEv66y4D6HYMmfq8Xm3wUJE9TfUGYaFnLY16JkhXyc",
  "key1": "4c2zifpj26ojmoK7guDXmEfnhJRLE7Vkw1LHasZ8L23RJsykpD7QQGYA8vTzoAhZYhmty2ccPXdHCgYDYUqPZFHm",
  "key2": "4ezRTDGwBZFEjgAWTbLrMNS9shLpW6ybovcGxgxCLeCAVnSzGnEqv8Qx843WmPdN98eAyzJpbNFWY1sRzdG1JJB",
  "key3": "3U1xCsnkxJYCesnSB2gu6XjpJL3MYux2CgVubwYAN4wrcyJJ9vRBSXFzRkTnUMHTQFAA1SC8222MWx6r2qmyGHxJ",
  "key4": "2XNgNQSB53GgYFVio8G6CMxyjePYx6HzdKEeCZC8ExYLrCXucLeFNsRUdjZc1LhUDKUHiYXmqi5tbxStUcRLh2Pv",
  "key5": "4Zd7qevGyo2kTKPemJZDbZdNRiJgfXPERuHGGV1DTYmsYHtUeQfbe1ABNURjBVYJes7jKR9cz6RttjWSuEmGGhQm",
  "key6": "2Lbr1iUYUqfprmqDM3mfa2Ei7zowyfdtwaizVdsQpZEsxsAobnikm1DgJ4ad5WLTMi5KTrbEK77Eb6baDAJa4oLk",
  "key7": "4Qkb5PSW8zQ7UbMdYSQJudxnX5sBH8qSpomrD2SwVF6VykTatVENzuncEAmYXAfHWAwc31ZDK1Q4GUzXq8x1zgtX",
  "key8": "9BaZbfiZviKPpinku7UN4YfgDiwS48C7RJYiYLcrQutTMxbo46k4c8uQMT6BXAsWuxbajAqmdL4dr62F49fajq8",
  "key9": "5qF8EAjLKAp1zdHvBGebNKrcMsq9PTYUCoknmkdwRkL3PrhS9jqMuJqTKBCzcCUy2QdbDN3tqLeUVN5qoAGevYw3",
  "key10": "4XZ8ZecaXsNxrDEmJzRKb6GNia2ss4oDm43bBWy48AsYTfk7qYHEpr1fQwHPnP1UUGJNaAYW5LLKa7ym8p6f5H6F",
  "key11": "piccfu198vQ3RVebpA4bBj9Zc9CeQhHonbnR6ZAWS8ByUFrtfk8LMcSKUmyHEEhHy8nNz8CjbtQdpTqVHYymY2u",
  "key12": "3F9H4p2aAiVdwbv6TmzuRK8X1Hc11GnF75SJysUaDq4A3WPpFQXwqFW3H44uuw7omqUov5JNECupmqij6Qd6hebj",
  "key13": "MoZLpaW6gNJ5w9XhXztvWGtW2xn9otUVw61dZmh1iLXXBNo3BnT4uGjPFRfjtHZteGfZZX8zRM6zAaLq2DQia6q",
  "key14": "3YeK2vANc1FhQRzNJ3aM5XbUQte3TrrZjmH1iFx1qGbCeYp53LKbBDakneRwfMHhqZDtSWdTQyqvPkYKLMFrRCCU",
  "key15": "3xQ7zyKhTCJ161ak7ka3jnVKtfMaQ1KQ17yzkyNkP6xBt962PhV9uHF3vKNg8SkKKL7tTAtxNvBSW19B4aX6Jabf",
  "key16": "31LKyJRkYg4r9V3Qud4VwPFNLoKqPLMPxFSpyL1J3sTyKMGGJfquqhiGosTqYZa6NmwnBShcNmjZ1b6jdsnjjt3B",
  "key17": "5rT3akXxQEFj9VcW83D8ko4EsG2JNjURESAHHgKDimyVTBB2K3b6aJYXya1a5boYBZLH5AChk84Tw4z3tUiUjoRf",
  "key18": "4pT8rY4N3JMjXgBkQS6azcH2NQy4fuJSu8t6bs7mwFB4yWbeKyntsb6SAS8VRUVFu56P2EoECxEGFrUDfBdDrLiH",
  "key19": "39kxj4sconJJhs7sAyXoNZSbL3uPKLbep5bMs6VLBXETL9wTo1ALzDtZfc5AU1TPwKTVpn9BbntCGzSXAZV9Hrss",
  "key20": "2LrfSzJMKfsrEyDAeKPTttHBnsJNqi5XDbyqGY4PGZjv5VHsmA7imVKzFg4ZBAd41ABZCoxhMPKP61nPDu5ihY1m",
  "key21": "2EHw496Mj3gWhmLDHJtMbnFKkcNcCzmuMu8wwmMh1ZRQ9JsXnHbiKxkaLuQwy34zvT8N9hA52yafzZcCn6fZ34s",
  "key22": "3EaX3WfePFS6Z3ZpNCDJudL5c7Cyi7nR96zndr2uTLmMsdoHsz99kG1cJKL6LHMhD9VTJ1v4WiSH1S65SqJiobv6",
  "key23": "3qF9xkL2yNhjiLGtb3aJd8hehTW8L2DnH526Za6xskNbCF8gTFmeG9f9g5V54TAKkbTnvmMSVGfRyYjDH6NHwF1s",
  "key24": "3vhBajXLJScjB8fvvfPtoLYxfNBpWFT1PsgSRbACUBdcDxYWMdcQ11ULywSd3j5KTtz2kT8e5Kz3qv28E65yxo9G",
  "key25": "2r98BTHy9s8Z93SRxNBAKqB8NHdCwn6WMi8CX8tXv9jAJkMFc1UZG5sCDyBHJPHS4GMRZrEj68nM99Lnf29vG6C1",
  "key26": "2vmNSBBLm3cJZkgYz7nUKw14Z5whZ9UpMr3xaq379h3tpN7wE3BTC2WTf6aG4bv8wLXWSRt3vmp4AoLXCSzee8nS",
  "key27": "4M4yxhWrWh2HSrEbreAxtYEiMuyZVzQywoSFf17AZ23iYjj3DtQPG6xzYhkKHwFenuLGN7U5KYHquHzwXEtrS6Ah",
  "key28": "2a9q8QWzZKdzuzok5RczwthJwwduazKFXtEqLDb8xZLxKGk1BUWmSVCT9dM8XKkRPnGZPtuVhTMCiNJfxhk3qjfn",
  "key29": "ueBXjYEaMdzNEUfBUhvLi44Bjbbn2XdoFDGbiRTXssj5op1zdpdShzMc9xy1v12ZSieCTgBphj4UHBiZtXzpJy4",
  "key30": "w9TC1JQznEcuQJXLxdUwawrXFo5kqsuyvDRc9VhTc2t9aiCWz2xFSBXizA3aqrTEiK4sURjAZEAEMSYq1rwNjKH",
  "key31": "3JLZdUv2CB1LQhwqXemM25eY92XLaXFHtM4cvkjVQBACtgeHfy9bfTsNvxZvjAFz7qNrZNR1X2pMvPQv7XA2haf1",
  "key32": "3MLBRPU3sFFUSFXrzVEtLDZtacNCT2u7ZtDtvbFpC26W8egArrUmqPaqsCijjUW9TnLrBCDVXVSSfZ7qN6WAYL3J",
  "key33": "3q6BPthKG1GR6rEwZEfz4sJSfXtNxKjLzFAoXhmWtQsf7QNypZKkyqMiCrh2jKGE2LJzxMMeF17pSdWz9w7quc5U",
  "key34": "2gQphu7uNpczVpbnHBZcWkbvEp8ezGPy5fSkvFLzXqNCuZDsBNqpmHhZKTZbR6jzaAxY5vGH9RRFCJEfQWAB9FmL",
  "key35": "2HSkkkV2GKvYC6PWFfVyKDkMr4C3LGFtrB3oGMyVNEC2UyYAyYrzqQp94qeenZ68rMUBmtHy4myFhpbRqLdjhB3r",
  "key36": "3LYT7gzLRkC5AwXrgRfi4VkgjH4bvWrXqxCWJNHBJdBJ43KsFs84hiL2bQQAxYfYd25MhDAuKiFqNPU2gcnBNjnG",
  "key37": "3CtMknFJFTsf5EDqowq6VvrneD3sbBj4CJuiuWmBiARCjFNDQyByBUzSWTN9KGrTYXf1WNs3bwLskd7KpBqLWuic",
  "key38": "3m4tEhHWypDQS5gPSqajPtPhWTR9HCGtQxDJLDeKKMZ49oKLWDB4ptM3g9MKyjcQHxAqKKFgVGVnr5NqJsXXbfUB",
  "key39": "umrhVoSqWcLNhVLJUFWQ3nJNYaruWrjGqU37b2WymAx8K7gfX55P47XUmtaTzYbc3Dzk7FPn6SZt99x32M5p8HQ",
  "key40": "4tcMjStLW69BhGw7CBcKj1EXDyGdZDVKTqAgTyg9CbAXHQjwbQ44Fb7TyvktTCsKYAmh2wvxDfnpU6KbdBHzX8Xr",
  "key41": "u113die4qNesd6gs5ZDt8VrcV5r3A1zBmqJnEwq9uDxnK94MTKE92wrVzqTjgKyKck7hgmNM2d8MBk8pMewy6Pv",
  "key42": "36D15St8fDaXMQjyVi52VzFxifn1uAgyuqBY1Z3CZr1y4KVvvnZgcvJNCALuqsryoBuC3i3Hok1A1TN7mStWUBZa",
  "key43": "3vX8YymGQTTKxF2xbd2fZigoBUiSevWY1dx6TNfiXWtK77HhV7n93ynT5AgSnue3GKMn4B7cs4ookbawRrCH3Lk3",
  "key44": "hMvkP2JaTiHftWe3Haq58exGXy6QXV3gXnowsDK8j6ka1sJBnUn6BpkRM79JYPy77Y2hs8nMK2a4Ad4Ua85DUby",
  "key45": "47Mt3dCBXwpDGmzJzDqSorYuVDoBZ6qFCqTV26twbemUNtiRBeyQ3f9b17vLLp5gSGkdXEm7xdKweYbD9smaDYLR",
  "key46": "3LrsFQjRQLqHXvB6dAaM1ZMx1M3tCvwWNAPQjJuHgNqZoR8gFMK6tDQBFU7C1Crn2v98GadBDPb4eWvjwUeG5Cuu",
  "key47": "4KGaBCucQi5wW6MNYEZvdA35Mn6oT1B6G6uGZWcZ2XuAZfMtT76xQmVaQtj8EZLowNXYLD3WmnUNuUUNSTCjyKC8",
  "key48": "4zf3rp3LFq3VdkKTFQvKLBYHeMwJMAnfpcsY9gpgHXEmAFCghzdsGRdr3SLHBDqubCasCZgefVqBoki7mThTxxo6"
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
