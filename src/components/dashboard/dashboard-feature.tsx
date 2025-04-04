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
    "4PfhsFCJLodBKwVnSgj9rreQMkUaqoSHoXFyLLFYAB5s1zZF7MKKyZrHtzWNsQJUdC9uPZ21WHqLBEh5XVjUVd3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7kFnSs9Zz4BBKhkvzzNq2fL3xoZDskabB8moBDNTgf6jMs326N7CpAvgRaN8zU66VJESiBDYKf1PfQ6E5M2GdM",
  "key1": "e5FhE3T2wfJHoCNkx6SQcC7Mov5FMa1L6Ye5hS9vSBJKEs2wdLJx26U2ZpmSA3hReLYPHrtkSKZxMTyGMq2NMjX",
  "key2": "5rLXFV1YShT6TYx2P9ew2bZn7ot2h9M7wi5jfDvNgcbts1uQVq84yRyeVyexTxhVYJ3HUQ6nJqkM6jLdSzEvDd7y",
  "key3": "2Tdhkvd7vtB4ZeB7yVhWyF6AGZfFY81GmKSBKYgVC695FnnzLWQWJeWAR7WKtbDdHa7MRBLPAZoKZge5bb1tmqt",
  "key4": "PK6LBe5RhwWrbrdyGFsWLbWVgmjnyug1RW2xqdKCTxTCWe8rzD7J3GZRQwz6EyEX6i8c3MjhoRRAF2HP29c5ikB",
  "key5": "3XSnCaxSN5YShAGawYyieY56Wps6U9sxQc8WVM68EFP5egwx4iwBBTymj6zWFGsFNRTpRzfHKsiHTB9Pyusvr6mq",
  "key6": "jWYyUj1sp44PWQfDhEqzJGi5KBMhmR7KBNuaM6jt2AKEuX1ecketM7MWBTYGh4ggr8RQjPcwZ3xxe8uhByn8gjm",
  "key7": "3mwESYjd3vmaYcxJHYDT4yB8ZrLmWKmxwy67fAiBDGeUTc9vNACY7yPbPqr7Nw9dzkewqwUTuzxrRzjPZk42S8A3",
  "key8": "5mxvPX6hf9jFpzYs1uDMpWBikGaK9ofv9hczq9XPmA7RKZNBh84yTHUq6zRL7uaoR6AEp6895DtJUQpyQGwm7fWd",
  "key9": "5gQgUDaTaNZbYvVEywCTQr7AcKQyhP3EoWhY1Yd5cgqUii4WA53JyFoftrMaufTY2zmzzGegbHxEQwTN8Fwubze9",
  "key10": "25dh1vSibTsHi3NbfvGtKRUaJoA9Mq4AmunG7aQCo1XgJkEit1dzZ9Fw3T1ioHSsHQ8jw8Bi1F5HjfqSeddUzJGm",
  "key11": "499wuLBrGWmTXQYJ24FVJis2QKaYbU1bjtxXVBuvGXD64tT3GQLEMDHe3wqqA7YrahorXGKfazXYHA46CyYPTtK8",
  "key12": "6215RumLvuFZhR1uUJ6f3x2cEK9qXh57aVCKBJpbB9bvv5CoaSgRk9yMeNUExEtaSHWMx4QiNudHWhzh5KyMLiQW",
  "key13": "475rrW8QyafjkeTCL7vsjfUBeSuJBJpcthxyZmtXbuH2ouYhX92PoySUJgSQFuQ7EbnVGxkZcRDxGQEeEpKpq3BU",
  "key14": "3Y1PnkKwLx3tcnnm35m3QKdV3p1RnNzUSNULckQnMJ6tfW1h57tcySZ4RgDLJQB5oWBzzzHEc2r8ELwEcd5rwfob",
  "key15": "4HkeTRPqeQD6JUNHBJEwQL262XSE13X1ozaDkx9M9cWzz9BLJoyPRWM8EAAmPvEBeXsNbjVWfiGB2i2UBAeR844Y",
  "key16": "2ZAWiwDUkYJ7sPV3sQxw9qe3Adu6ixMDjefJQxHqcuY5LDCzPDbnfPVBbk6kwVPDWD3iYhexYPNUk3MmSTsF9QYS",
  "key17": "3TM8VocuXpsZxfmHdsB1xcQxcdR6CVSYrrG3ExBvJKVCkY6d3ZdabrZoBZaiogzfjnVuSrFBeNGZT17StxWAYj5S",
  "key18": "3yS68aeSzZPdgJ1Tk7MfWVkpFxHRqjjmhLyz2Ch9CNz4obzuneq7VToEptcAoNN3wevuJgYNA58N8tQpUgNP9VyZ",
  "key19": "2fRAUwe3fQk66ezNEJY2LRLBMSySyUcz83Xj1k8NMdNA6f1H8oh1XBoam2FCXKGJT4AX5awuiPK2vLpBMSGBFntG",
  "key20": "3NSCkDEBL64qg4Mft1EGTCp7UGRN4DPn1eyMEbxSihLBh1AxqsW277m96YgZLNE8RkXRFDaA9okyKPrLrh7BgTD",
  "key21": "4ZyQqAMLouwQZntauAqEbsHNoZrXHi5gwQgijboLn85d51n2WgAGv4cpwfXLRauM1xEDFMoXZC217iYGAwHXoNtn",
  "key22": "GizygBpq2Wz7gHkTxweshzRpYbyiheiQ8MSJP9tPamGDC2wcnADz83QmW973RBpmag6h5Wgqy5jArNtiPborZVA",
  "key23": "5qEhdiwvCHcWaviFBmb73cbVWeEZ63EHEteJikv5pfZ3LLJoQm8wBcmUUcszVz8nG3ruL3rYEMGGtLwixsXtgyoN",
  "key24": "5Aw8hzMb6A846A7DrMwueJAwD1ojgPc3gGSNizRtGmdLKpJULyA2pfAbKNnMV7W2ErhzuUoo1WgyPqHDEBjfzHnd",
  "key25": "2ncex33f9V6Fqh1zspnGndUejgLbk7a5bmmXJtFUDi7EMDsdwqQYZAMcjesuixxXSgbnmBaVMpnKnGH6gdHfztzy",
  "key26": "4LtqcXRwyv9wpYeQiy5EoK5kd9AdcAYG4FBREfoXZwiyjzebhgudNRLtX2Fx5Ad3E4qRBePTTpwmDcmittr6UXCV",
  "key27": "aP39jABkf5dG8o34BHCiDNhsSDQCy2esGA5zeShpygexWA2dnmn6s2HDKEeEVzM9HszAetzQxQTVZzeZ4sSBaak",
  "key28": "35ENUnJTYN6wdk6tJXBN2zibYNgunyx3dHSNhqTuSEC51G6etnRPW6kWcqJ5XaBFjFBU7GTxZ4EiUsH22fz88YAQ",
  "key29": "4CQ81sYAXywggUhCkZkTV9ageu3SVvKVznrRaNDzE3SjFNVJnPky88rpBhwZhD7HfAYPKcGfUfZGp6hHmYmsVGuZ",
  "key30": "4GPSHBr2yAQFbZadWWSEEVoWKE3Ra2Ciz8A3UsAMj2pi3kK8EpUF4NPxuyU7tSFJyxWaDnAxRD5r9vPPKRv2qtpp",
  "key31": "55SgeraqXGjCSLA4a4EJKC8utEkZx34FBj8H1YxgbrSPafwfWvwZm3CifJNRZ5xs3PVJzeCXM95brMSCgn3URwTY",
  "key32": "3Speaqdy9QuGdXpYp26RAgoTAsqMBH8CwkpxVf5QhCHr1uaFGR5KdqSCrSVdY7fvsU5Km2ig1uqqzAbV1uh83FsT",
  "key33": "5UmYpqTvo9DimAy6VnzZxA54GFooHGC3nGrbccXAASch9b5jsiAfWiUxnGJYMmFa5dJAn1UDep4WUr446bTZd6kF",
  "key34": "39n8o1gJP5Ync5uZtHqZj68QD4UtHPi91kn1BYZ2H1xtF7KyXv6DUDXz427AJMYwFZcWZqejfzJQqffXC6nwpMqK",
  "key35": "45cekL11BYQyVtEbmzzYCQrCW5BYAaUnGg5zjh2cA2umPQwEg9MJDLQXKvSUoUbTvKjnYeaAqukSmgERm178CZ2P",
  "key36": "3W7FkJ4S8AmVbzV9dCCTAP7GLH61sDwUcewytwjRAsdvM2wfoEArxQLREzp8MAT5WYwoVnt1AprsVwcXaVrWUJ4G",
  "key37": "3b2P37h857odEvzyh8r5Sc1tUEbEffFAJMHnhEE9SAd8TT9xdGFkGft5iB7NotuSQq6imVRTVqAK7rN1YeXF4gEZ",
  "key38": "4LG5g3w3K28BQTp9hWS6XzgsHmbzmn9HZbs29hbc2xwJkTt25jK7MQnQHgZtrc8cZmWdgpTdS1ap9kq99H5noKWe",
  "key39": "4t7wBV5DkJ5PNDHcPa6M96dU2htpLY2f5v4oWot4TDxcETcphPgmCv4J1sSQX3tn7bTMxSeYwaQn3p2qj7pNuPqd",
  "key40": "3NFQcGUfbD8JyhEy14JMMwmMmpf4aqQe1me9itJerHMMWvhN1tjhnxas89UrAE3VFfv93UF8uZDgwSDhYmESZThN",
  "key41": "4GALy16bZ1yFYu53Bek5kQbx2L6wPpGJVUoQawNSC28tFGWXpbHtKFo93iMBfp1esYFw1ggVjXB1WioDomMqLYBW",
  "key42": "s8QgoCLP2pP1Ms2fj5CVESLiLoQ3Vx5G59ivcqFKnQfdomCDAr64pfFwXT2SgB6W9WszckjkPcavAeETmHjtH8h",
  "key43": "9WRubjWrmCx4M34NDw5ojdY4qmKUQCWWxxH6btHjNbCUDaQRgm2ntZ1hBGqwE9UUvDLSP7YKAqJ19fjXTvbMGdj",
  "key44": "3HjmebmiabPQCWjdtpX6d6B8UkTPTdL4nYwyTbsSUNQ4v6T1WX1iyEfKQ8eDVntHnfp68ofwWQDyopo5Viqfu99m",
  "key45": "3knwjEvj43VwLHESf9iW12gbAnoQrfJwiApqCJLSvAFvXnRNaEHL65rtz5EUeyZftkmcrFaV98gSSuKPbVBN1Rsf",
  "key46": "3fZinqojUw7iFDBkYaC7ksQHeFvs8Po3EqkhtbNyZzsNAzSwD1TiQE3Y1yJKc18Eo4bieCEpEuCKMtUVHyB3CfJw",
  "key47": "2jKqD2JhhYjiQRzf91iDg5vshePPRuGcZ1mHdaBxtSe5nUHASyx1dC8YjgDpMJtWdqnUf99oW7yDZzSvFJRbrNzb",
  "key48": "2Y9NzgAga4pZ2iZhRjVmL5oiVubEoaTJcLnJEcXxnQYw2VdhEmeTR1n78iLMgBdnNAzygtKVjYVAGdxPY7VrBiCK",
  "key49": "3SuEzavmzn84WskngQc6ncwEtX4qq2L8upTCbYYCCxvqCYq496U8E3BSUUdCKiqfYVX95QzqDduqmBa2FMrJJdpr"
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
