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
    "yi4io5xyN9zud6YdvLZky1tMAYneKmTSRGNhzbsLrVMxBuRZpLZf4v9G2XvFK1Q96qiW4oniVCpDUUGdh34yLAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCTzZTf7uqN8LQxa8TCm9DQnKpbiF113gjTHX8a6zTZfSgwT1vpvkELV658SJtZMkNg5yE7zLz1vy7UUjZGKoBu",
  "key1": "4USn1Ri4eUtw977qBQkWABtFw8JkHUSFtnUXsyS8JC75Cb9vfr1xsjQFPxZKjcBWh4sjvj9jxEXeK2ag2MUjtsdP",
  "key2": "45kPSesH3r2p129Q98U1SagTRmick27hZA65JaLKe3G86K832areomMepaqNB5ExdNN7iMQKgsczGXvP8RSXXbMx",
  "key3": "4omLTpUnzEAZDyXpedExPvsjkX6Rz9EPAFvy8JsqhgzVBVxqdfRPLXgMa6jhiDg5qjtZSDayCpSfchGTG8XC6Nji",
  "key4": "WnkkofHwKvKn99CuSAer3a8vQysNy7BLSTbTuUfyEFQVzVPrxNN8DsJMR5DqHoPVEZicb7wikBDRJJmcRD8UFyY",
  "key5": "2k9HWMJte2tdsTHXnPEYDZKGjbeuQTrMJ9RqAHfw833ggL1dedJ2QiuJV4jfiXm5SdH1kkzw8Uv2HW4eAvQ9RscU",
  "key6": "2YAgx1j2XarvnxEhoUQTNdXLnNz3T4vV8DyypRgjEyzWw9TFkhZroMYFo32NRxk6x3tvPVVdvsLbA5YhyZDfdjva",
  "key7": "5DfCzWdbJv1GtbxWuiZfHRhyVnoZxPGbNVzmJAhXXDfVJhhQP2fWTaZNZbYViZANR4n6jAnL2b1dSnusjrFiFkyM",
  "key8": "4BH7JcMUdV3FXkemJEMRA3BFPBGfsyXEr1WxNb4yWrHR899ohqaPA8hr12kfHi3LLBZmkP4qAAvT9DVW7LYGws9R",
  "key9": "3J7dzw7eoa4DS27BcdEMu5iGUpaKKq45wbdqCFm2nHmMWLBjqhTCdasFvMai8aiWrcLH9VsKhDkupDJ36SBf4WdL",
  "key10": "641e6hVZ3SVRKvuE1rddY6b1WifxmsumCmzJAPPkoo8bXG8U14VJxyHgT6M1VUKEpnNeJY6eCxbHMtNDn3ZvhWTB",
  "key11": "4xB1cFPpVBbtYQ7yk66RX9nVNuwzHysYT4CHN67tPLHAo9ToSh9P4DUQ2tzEn3C6FFE245AL3eDjbXnDT2heaYaT",
  "key12": "3NY6Mw2KdWsp8FPeso4ew7Gmnpp33ZFTtkdCJnR8CD5iPigHQT6yZKmSh1XLnKzPBDbnxM7wK8DJkf1CQ6R3iy5t",
  "key13": "bdZbrQUNcfjYkK1XSr31qaG9AUr3CP46qygMnW2EyW5baNDP3zkFNKzaJAppDNyuedCQmJcNR4JjkEXs239YyTY",
  "key14": "4Tm9zj4fSfufhFFgioWFMF2Pb4rnyfYaPwc9thfFcc98eY3fWvCVQJ3SWJ9HvU9Qw7V6KJCWSjKxnPumVmrUhFaS",
  "key15": "2EnTjCop5BLXWDLuyHdLqL67s2WqJmo4yVPwQ2kRZuQhe1uRPY66ymGuxDJAzGCGZQDQyH7fj4MbYkVQugT83Hzf",
  "key16": "5jC9xtbLc4fGxLM8y3qqqGZuD87anJf61AkeMtmWbFKGGYFWCRwBMxR8uJj5eTsSPiysaMSj76KRSXGuJpfJ7B4G",
  "key17": "3x2yPzeE6Gmom6DoH29Ch6gAY6rWusnEkpBdKv8mD1tDnxGJtKJnqhn3DSHfDC1rXrBwugBDGh73WxmdsPNa8UDH",
  "key18": "2E9TjjUW9v5LZo5AFy1mYMoVxnw7HFwdweSJM6LBBkMDcs5sFv1qXhHg9wg9ZpQ3G1AB3s1owGeuGkLUyhEQ2FRe",
  "key19": "4ZVqhWgdMHFGgGzegs1umMZXP2oSqSyYSeb9kFnzfvSo7g2x88SqyVut1pUbssrF8USA6Qk4rbLzAeoJWaqrm4fd",
  "key20": "2CG5hCPvteBZ4M8fbsY1JbDbvsnfzswavGoARjnXUHAKf3szLBPGYNe1gfTHcw3Gy6iQN7f3WXkn2uLtx7zxr6VV",
  "key21": "SbeJ4kSkzC6raqjjeL6ubbh8is5TwUCXseKe5pfHkbYcUZJmPKAoNyToxTfUNFThutUaRtZS4R3TiUkhruhRLJU",
  "key22": "364ATpmrp7QrLYjcJa3duMyxJp6ZeNctY1Q48TdTFWrNfFefEt1vgGXA5GgG24yrZg2DM3gcs7M9XRFrnHEBR8Bm",
  "key23": "3BfVbgxbFcco3v6nAz2x5GBFhwV4dBQo4yQpbo6PNHu59wyXdRgRiHPKXhcodPWbR9UZshFs7jS8QAmcX8RSKEJw",
  "key24": "25GeXruzr8RRx1EVMjKCaeSrcaiYuAUfpmLBD97hjaGoc3M2t7gKPw4LaWghRMchRNhDEGaX4gW2rhUQv4YziArb",
  "key25": "3HvdigrjQjj7kMibDhPyYFnYuQ4bbiNuG1JzUyPxfYyt4oihcd7G4uG2NDDr5aZTCK2AMmyjPPcJ7WPKJJMQNYMX",
  "key26": "4SFEzpkpSp31gJfagaM6LwdQMtVrDagLQvSeQwexTkogfiGro2UmnJFgewUxANfTRumJNbj7Gu45A3tT1iuDicCD",
  "key27": "2tvcEkDxjR7aLzGjtqvrtLPqEpdBWCQ5bYesHXJcaGkUZVWpav31gBqhjfdVSm5Sy6oS9f7Nkzf7hSiEVotMw1gi",
  "key28": "xko3t2jBYeYzqqPLp5nSe2sy73X3uCtHDFDz7Y34qAHvH69DZ1upKea2GpH9gt3iAW381qxjpfbBFNTtRnFBVee",
  "key29": "3MqqLkmeSYTaiwEWHpQpsf2KJZiza7CWsUV6NpLT89Z9nNZxUizgo4ZThZRThNvDmNF9gYnxfVSjiMcYDQYizRpJ",
  "key30": "2aTscvH2ksrVkxPvfBzHb7FAPs3qrgwyr16w3acbLkha1HAMk3ktfGnAyQXsDYj91j6g9DAigjEUPTmHL19gB95a",
  "key31": "2FXqzVxi2mt4ahexzvqHFyEqQYLNTAS8HjoDPCJicPqRskfF6RQm1UVGz9chLJvMApsRfFPpJ5NSu5XEhZKx8auM",
  "key32": "5zBS9FcjgyfRzSYRaEWssMnftXroFZp4eApYb37aZVUgL2etv8ZdNGTGwsCsgyAcmnDxpSH8EoKLJz4jWuyy48YS",
  "key33": "Kiyx3n7nEp8xk6jEWxfrNxDAmakcjN4TMGMj4rTv3m2Xk2wzGfFycVyDkRj5def8KqJN6h1pUR3XN6r4JymKv4e",
  "key34": "64sZQEd12jX6rWXiZD1koyzcziSCgDaCjcMVj8JAje6kvPRGRdAzWvF1kY81XY8mSD7BWhEaodCJ8XAtXbpukCMp",
  "key35": "42V6JaMcov2GGVqiBEZkhQJdJfSm1faGrURjsZRd53ovMJhnJe5atuqZeauLMdFGoQrZd2JaA6i97aDzJUUECAis",
  "key36": "VieTsTb43ug3Qvo1x2aFGVg61pC1aDXGiwxCL4Dkm7dKzZWiYGKJEmoSRpCUMBZBSd19jYQM8MZXC6MS6nWEGcp",
  "key37": "47f1UPGaUdh4vo6ZnhHg8zLnQBEwiML67NL7kYoiU2Pdp74BJoDXcCP3E55mu2aMignCswGVZMRzPYG1NWWyWAE1"
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
