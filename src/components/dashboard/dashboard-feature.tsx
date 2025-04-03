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
    "4xNhZ9CeP83L8YSe8uqHNAzUoRz4dLt8USaMBh87TERDNKbQoZcFdbkw7b78TGeHd62cdSbmTCuqYCrJ5DawVvGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o94LtcLvVGr669vdQouMihfeokMVKZhJnvAA971iQPgcom1YLbBUBqPfj2dAasQpNGXc1JzoEcCFLzVrfVATYUk",
  "key1": "5zYxjZsGQxhAcvMF1g8qjsrHearFvSm7fFmNr2t46YzLpZTitTXZF4yK8d6TPeVixsVf95eYiWNcd1mfVfNRaaqd",
  "key2": "4cue8SHGKtPY2kzwcBomuuQqAFimmcdGtpBV7Ddoygq1pRDvMN1uUBZB3w13qs38k2MnjnRdWmxN2UsRqDDCSc9d",
  "key3": "2jdSa13xkZP7dvBVVPCCb7mJzwnBCrKwEVsqxesU4HaXMje7vPKuqkP5XoCfWcvPEUdVbYxYxu9LY76pMUjaWSCW",
  "key4": "4skpqafE5kGwQTj5uwkmw4H98hpGnE5M288YwPfKSNtUQLfN8xt1mP3Q6Ttf8LCsFxej5VJz8XKZ3bJg2PbRhCJh",
  "key5": "5DYLgbKQajUR4c6wVehsStcFscEqTLxA8Py2XKsN7g5DFDxfzJLczciyxiisETEpEhbN9M3SXFtZM6uS99tT7kyi",
  "key6": "5qhPCqzVUrNgbzeft9dn7yadDFjFEy1eDdKbmoeH8F5qZkEjAK2GhXn1XQEVNqu7GfVY526cjAYNWqj7rmnuacJ4",
  "key7": "vHiMiQ7rBHCNkpMGbW9XPQhkcZWUVDjRaYZ8PN3wrNng8precyAHQmQFyr1ebCWsha6FKDDEHCPCMnAr5KzKLRb",
  "key8": "3R9BAJSWXdPmj1FFYGSGe7VSFMNci78HyN9CbeVu3fvT1RNbaqWpDGC8injTmfqXnbyvsZYoqArXtvAYGSBaptLF",
  "key9": "4GpWbJ5uEH1vY4A354ynGU3NWLCsiXtacmjJ45yqFnrhvNzjpvegSkuYwmwTKQToyeyBH9XkaQ5c3mMCRkuR7erG",
  "key10": "3y7UZcxtoYMd2MwfLw1gQpw2ZJtZposXccxPGZ8deM7P8KJU9LLQLi3Lc6iyh6GiiKB7UV5C3dz2ThVZFTZ5svoQ",
  "key11": "5RRGWtgaNqkMXzsG9EYAzDt9qKXWMrMyDWmiRPVbN9BLHjMfrGK2JYpJJw16RjiK7xjRz4Pqc3RtoZFA8X7sHJAG",
  "key12": "2YbZeqaXPZr4WqPfJ2jpkKJAc65SsuKZAmUU4dzi195nAMasXqnXHEMJLsjpRsiQQBLT54JZ3VtEKAg3BNRH2oaw",
  "key13": "fAGpHSbnDVHSARnNR4apGvqB2wv7Pzwj36atnGU65XN3qAD7tVK32h9xazSC1NMcyPpHevTbRdthvBRP99p3CPp",
  "key14": "qihmny2SsmrF57J6sYsYFXC5TMMPyJD28va1wovCwmXV7RZADoPo6qsL1xjDv1eLcjbTm5viCSNE7k62rb2WSrQ",
  "key15": "33VyEfV6pqf1peqKaKkXn7ps5MBZ2KURwS3hWMPfSYA6YYeT6q7tHwpRga3WHARPdJXQ8uegUJns9K5R5UC96Foi",
  "key16": "3azNC29aEDPj6TQpfi1NZoqkvzqAhVAn7W6e5Vo9oV4L1vaWqJT9k1Fc3b71cDDHT8q5q8NSveJbxes6Xo9QubMH",
  "key17": "Yppi3iFhPoQ45o5AW7qXfTwVYguGbUeWyMuiXZNWjZmi4Atuh7M8qRJNhKEJB6bsWPXP35bX7edBa4HY2UrKnu4",
  "key18": "pkUdG8c3Jqk8J6ifaJmNqNvo7nYMu26PLatG5EpGbd3z1RAJe1aGzC3dyr76iFHtR8pRfgCBADuAHqsH3GPd4a8",
  "key19": "4LRxUtczCdngL25ZXvQqENvkNMA5LPfUzb9HiDKh7MvvbtGSEGx5neskAAFQbvDvtgB4P4dzFwvidLpsKSqJSakF",
  "key20": "3Bayo8WKbqaZyck8yh7ikPAfZQaJWZq6BAWoi2AGNSyfBw6k3qhHceubsL5EADKrKyZQJPwwxM6jh1sWDYcL65n9",
  "key21": "UqtJmp2zULfe5YJuEqJG462ZHXTeEqs7t3CUUX96UrF865tiU8Mom4NE9r4r78UrdesL2cPuBwi58Vsr7xdQ2tA",
  "key22": "4M8GaK2wuy8XUHqzsoeixwQtZWE1dHTNFcfqbWL3q4i1Qe5uJTyXRzey4zcSTKqp7hUaut9zjmfGXFarJMYdp2wf",
  "key23": "2L4esv4Prj9zAKhLx1GBNfLvQgzCSZpgEnizvhbvxnLvxkHQBN5HhXHZTLQZGx3c6HnYJHcSAJP5sGcvrs2sz2Pf",
  "key24": "3F7NJndE6GeDe1YeAVHHEF2TL1YnLZRKW9G5UTr9o9Ygg2kYZ5FCZZR734Dre33rRKcsEfYsgJSwBbJsBanj4HWm",
  "key25": "4G3tWKQ1JUTVJUc4x6h3eJ5uRdvtvZyfP9ZGEKEZPmyBPKSM5b297TftMS7htau6MQmSLBu1g5JDwdrpkXRgGxwk",
  "key26": "xaqdirJMRbsGR147HCKSgbfn99hNW2Hwi7x6nKxjDrh26zYEyCweGwsCX5K24vhwp8GuCP67bG95AN1kkapKgUm",
  "key27": "DTY1uT9YJBagtRqyyiBumStjrofVpL2fg44m7d6gwUmpa3y79jfAFWBWz3daZB83vMcSjH6pAtYQz8KtrQjbiyD",
  "key28": "5xHdd4HxzeDktLtkxzmHUaXWdKkYaNSfqQEFbjLPAYtr8iyTACy5uaYhscypkobLoK5qPrj55Tmzk9LcVxpZFboa",
  "key29": "m6FnRrCR7r5v9afcM9iUd1qv2BUfnRDvDmEzRLyEPkVyXJeW49ztiLMHQTCFVzw5riZRSLUyCMwi2ohbv7PVjFp",
  "key30": "3mkCy8QtxkAsBKT9eL7seNp51e2ytmPbuXxxcrCuKzw2DoGBCtYmwfzLFshD1aXpSwGyvqwoJx59SgJ7SLjBi7vb",
  "key31": "5tBX6zcpPQt11YqeXux5v8QAdk9KV5ewTUqSMC87W8ewdZYXDqpx4KekJ63f22XzoGDGepVu2JeWyV7sKsvGNDMu",
  "key32": "4RjEPQ7WjR82wQrMfjuqHYTuQwoBznJ5vJV647y9twiz4t1cTXqhHdjRXPPX6T11QQv6XC65kkqqYKNGyNPKxcWz",
  "key33": "4FKqTBDK4dQjJ5eYGnQyQjhAjS9ABJpZDFuyTj4KmNhyymc1AmsAHz8d3BaEBrJNpKN8ag5oFj9dWtgrpLXAj3wz",
  "key34": "5n6NwkGXdMasa31W9giezzqA8yQNqwDBmkEh4R9eUvgDAzdWKEJ41V9VPgLuKeZsFGj3bSAeoA67vMuQudWYEnQY",
  "key35": "R7YiFyLLiRuhdYbyvtaUqjuT3U7mirTUNqpDgVXfbwhVxZB7Edy3J2YankdmQM53szrCnuxLzhsXVRwu1DFe6S9",
  "key36": "3o9YFtvRjhD7wSB5dQ1tVZBzcCbeePNdspVJDmDRcTnniEXDEAz7i8vaaR2rRgUncnCxEuxbzLXVQoKB1sxgxZHn",
  "key37": "4WfJUqaujQHJrsqjHb8znkxzxiLYZUGq4zYU6mVgtNgYhykg7ez9rPX3Z19VoN4Uh7LByQP5kaN2KjmPZQQy7i29",
  "key38": "25wxZUR58XU9EfEAGpKgMbZLQxeNpBN6TR69E5FVbGfC3Gmwf6wxus5XpkchdwhQdYMHSHFMnf5457gZWQUVsrvT",
  "key39": "2N7mQkGXhNo692WWYSK5GSVyAbm6KVhqjfv9yf5XUQddxkaY69seGKwrVhyjJh2XWNf6SEAa5xyfTTFo3AgmTwbh",
  "key40": "3gYH6WfoEx1NADWyhUvwc4QE7DLWkv6GHTzarK77ncy9AAbX8rzpPVArbCkUWaJ9cTrb4gdoCc7o38CenMQdBYok",
  "key41": "45EBzMXwQxE58VcGCfxANEmBgkyndoZJWDAo6vkgTyrBgEMYoMtdJ2fSfURZAa6PocAH2qHtDb7F5CqimM3c8huo",
  "key42": "4TpD9h3ooL5hRLRbcEGd674PJnhzcrLyPhjDfsGQuMrTH8AJxiLbQeSAfzgeUM3x7nc9gXxaTvpHv2gCRStwAGyC",
  "key43": "3oGEWjZNyFqzmxmacstx6adyf8EAs77e757VECfT2hEzujRfup1Adu1Nfp8aLT3PdDTWKe4m5imfzD97YMqPqP5u",
  "key44": "S8bLmFVDGQbMSRAkJyAnwCwjQE4ZiBGuieovpWcvWWqZB5tXiktGkmTu7YJ9Uz7sHF4x33SxsyoGWtbpymeD32n",
  "key45": "3pdj62khzmSLHesgc2dNCzhTF627gBR8X9vVcvdBEcDVu4cJZ4kTDABZk5LVnmkofQvNW7YMUsbkKBQZ2CMiM7Wq",
  "key46": "bGVn5KmDUgYCm8bBgxRwUzcwFPjLNQzMPbprYE3VgFcq5UCpbU4V1vMemK3K2seQFbtipECUY8683RhRBuVYcJT",
  "key47": "5jyuW2eZyNBCuJ3rpUJXGKMJzdhtw92UFy4MVbM15HD3ekeQ5yhoKRa4GFLPP5dDdvTsa73puPa3AW9kRWtg5ii8",
  "key48": "2uLyzHuAwjwkM7EpCFCe2HSRGtNmH3FT3kKQXeq1tAKTuUExtgwDKsjLXU1K2swnG4Rb4CvXxt9nc1uBxdudBpFi"
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
