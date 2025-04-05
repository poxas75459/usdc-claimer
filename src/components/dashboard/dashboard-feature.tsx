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
    "MNAdJWgR3BGD7vWtyCesWcYVVRc6tsoXgpbRqG9EoVF8QR1dK1jtUasUbtF2MsbUtbjEG5sXKrK8sX63QJrF15T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgwRY71KjgRE6wDJg8mUSXVMyvmPLwzrRfHMbNVeuDndxUW7kkaQNtkEL4yPcUU835HFQCvHC6Xr1FmrHkZDMN7",
  "key1": "3dvjEgieeTd5x5RgmVTbZYeru7bGCp6TqT9VzqBmK8doxWVFwPnEB91wW3KoGBSFYGg1yvNViHaYZ3VdodCburAM",
  "key2": "dPUDY7Uw6vBP3ErMG86rSpAT25SiuuppcTYpxp8cKUKRizJqPvmisoujFXPuur3sHivKBKfpThQZgqSFFKZdXDL",
  "key3": "2ipNJxQXvhQ39AUQXwPqYgrhnC9H94j3EnjGj6akgpWMxuVkCyXJPUzuQ5sD2xwxR7N5UKuiuk6eZQGMXRiTztMN",
  "key4": "3x9Whsx3gGddYDs2qonQvRhfUZJcaJmpxwJXrxpuPhqdrPXjDoBm8uiuqGNCqUGoN8JtzJUasfono3LFszLhPZfA",
  "key5": "Cnv9uSvJfctfgAvCQ3A7H7mBQmpQDDExpmvoSTgsfWqcMFRCBhv8g4nKhAjrK3LETdq87J5DThNn67LfNDz8HyW",
  "key6": "289BuHchA71KnHG2iEqpGh1waDM1BHhR5Mey5Qf145a9dKPf3XUwNHFHEAz3VVjh2ygfuYhBmQ6z1TLy46vjEZgr",
  "key7": "4Ze6LWMi1mokxpUbV7fdNWcLdiwNAfviAaWxw55k5cjzUAmK9FaPgBJP2qcfExETd3nrpS2xFj2FZ5GSkvRuoYA6",
  "key8": "w19mEMi2bz6fVUjYRdWw8UXMMi5oxkLz3Ws5TxeYteBgfNDpzCoMxt7ZyQsacA1WEzXM3Mk2BA2b2AXXajgcE29",
  "key9": "5VK1G33rJGS2tSsNM77sUJYDwuxwAhdVwpXhAZGwpQCGLh6EeQawstc8nVqFJF23RgDqJNLAuo7xRbKzLVTZf5yC",
  "key10": "5713swdeqBaFXEHNTBJR13Gr3QkKu1fTL7AeKWJRCFmEzXCuhU9cApDEqmTjtEdKijDi5u6XGtJsii94HcxRMT3Z",
  "key11": "3WhH8oQjjbLTNV33S62bF937D13jiVy5nELe7uAWr68ABUbUA4Wuaxti5uxN2PkVn7VsBArLWhxtbuC95VSFmSKH",
  "key12": "WfQH72Uotkt4nEc2Dur1c6Kk1vwQtw4eAstFpcCpB5pb3oQGXnrjDATnLHzNMfTVeqoSCaG5rsC9PnrQRXFkayJ",
  "key13": "2boevkJ3mGpHFpKKBaG3hTRco6huJbQ6FgHMrYAmBKyttYmBm5UMtuJMy32aAjDRxVB76La6EvewoucwysWRozss",
  "key14": "36U5yq4eixURDtLBM7GyUZVMGZe4tdkbe9gkzd6pePYDa84L6mD2mauGjAz74tBrR7mEzEtsmz1AuFTT9c3SkwiY",
  "key15": "43ukgezQpWtAsVdggGmfoVf9MVFMLTnMwKe8UoLr9xX3qf7Hs5eTmrvb8rjoAvstYNZi29waHUb7K4f8T5ofDANQ",
  "key16": "vgoXw9FUWdNzxJK8xHjHcbQ52NU1oB8R5hAAzSo77waw798juT61bAS4ftE7N7YMB9HqNQCoSfppCiFgEaV8mep",
  "key17": "B3QTiHg3HU8s35SUY4HQhLF5U6ha8EvpvDpVikvoH7XKt71gVSS1P2F7re9jjSTxce44N96jFYDrrESMLY2oLLc",
  "key18": "5k1PGVXoqVnLtFQttQKa38XxB5h91QmuDSeeXZa1nrsn1uoWjbnG2EA3fCrMbsgnTWot28QTVmWs1a9BoCcYVHbC",
  "key19": "5anJjAf8rqsLHfLA36S5pLqDwgcbrbNYsMGrgFVruuxLJYTzZHQYydvHiNfoVDJcupYxiqVpUgEvrP7kyCQHN6qd",
  "key20": "4QpUtX5VWMTAZdhpNsxUQUFv2w9BwBqpdJdQHkyLwZqeeCzkT4q43mRDZDbefcRzpD6HzYxNM11jFoV868Bftd3z",
  "key21": "2W8yeMdJS6D3taWxhfpihcGtiDKPWRAaCqg4663YbeJx8yfCDVwy6QvYV46iwZoHrNehrBPJLpw4qJbij8ou6QUY",
  "key22": "3ZSMvpNoAC5Eo5mTLXHC45gYSHkJcvv3SRfSk1sDDpNBbJMPNtTCx6yc5jNtHQfyo3F11PJefgAM1zv3GA6Ap4gZ",
  "key23": "2Fj9G5FqiLCtjxhndTMeksmn2uRzgQik7mhYcsCGQzHH99s3U7C5mhtSjjNNqtAwM482GNqSyPWKngnmJickBet2",
  "key24": "6713Ugcx76Qh4k5sThS5fPqzzuBsevEjtQ8wAwaey6T2aXEymrtT9WGwebnQTzSbBw6hQEzL3wcC5dY4k4K6pxPP",
  "key25": "DNqrG4iiL51i7P6SUTovPhwWCncmyfcwZ6ydXrauKuqhJR1jBN9H4W6t8We2BT6WkzZn4DwFSK5qCsxYuqt6XRQ",
  "key26": "3DL7BidxFVwh99wMbhXcqbVVtVsmxWL9HrEQvBaDGiky8kTo73gixeYKzVWqTPmijnmho9TiMrWSiWf4WwDmFnNY",
  "key27": "z39PzHGqr1VSEuuXEkQGq2NYJkkLfTCJdvP9vWDQau1AGUiKo8xGiKohsXwwgHuPAvwi8FaJoeEt1RWWX99aTMF",
  "key28": "3Re241UkvUiuXSUAUwtXD4gXQENXkPhRiiuhYVXWHNZd6x8FnSjHqCQwwViACpjsMw8ZkX1hwvQfjTuSvmKns2UH",
  "key29": "62gsMJoKMFKNSWEQWoMyxg57dePwgPMncv4hmuqesm4Sw7iyPP8Jv4BgpyiXSwjRsTKnJCm7w28Wm2jbcez9N4kx",
  "key30": "3M5jZDvupYAMrz9AcREuwgaXGzCSwQ5kyvymwF8bu5WK8Jtzz1ZUBoWWXHquru2iQbfoTPrtPZNKHW6mQkhDgpDe",
  "key31": "3CTWp1i8MHsVmLKsQa85zXCVShm1GKE8L17Txt95iRNx3u2B5nV1gKy7zvPxm3dSDD7KsNY61utKLcupiVUJkwWP",
  "key32": "2mxDg9q7gvCAx1Yewbr9hcisSdd3G3s6EJDicpex9RWMEPUWzbeYg4qBhHsPv6SvWopg8ycw98y8Vc45N9hAxub3",
  "key33": "5spuDVHZjw9aKMg8ETE5ep4nAmxjCC3Zg5xwpskAygfjSxXKXB31gf5FddXPysLskaVANcZaPzu2vW8fu7SjPpF6",
  "key34": "3kE221V8wEo9bbKfsXSXuLDCPC2JPPjQTd1LjEBsyzzspUuVZBpD12iePepbdoJcDhVY6i6K3P9pE8h8msXiGUhu",
  "key35": "2ZEUUownkWAYRCJdSev9c4QKWwV2GVZeDXdkxmPa4yKb15MeMsdVn9d3Kvb5RiBRnCZ2YQNeNxcKzmsBRUgKh2Lo",
  "key36": "39fjZTGXzUHZydRHtrYw4pVSQjjo9zDuRTSqDAB6acC4cfjCtj7g4dRWKhL84gJCKWzw2YX3gT7ynQzqkuRf6MsY",
  "key37": "3WmmdNcJCDHGsC6xxfp9cMPjWWaLyUpdhPVGhXmjAiS7rKC6xvUiDVZDeuBHrRUyso38ECNW7VWNEj3srFQxxf2Z",
  "key38": "2aHd94Bhkw5jpZPD7CizCgXDgC3jsvy8XaQrJf1BF2UWieJWhkWPNeJ7y5tW84J8HaHuxfYWAvydogMyCLANacd3"
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
