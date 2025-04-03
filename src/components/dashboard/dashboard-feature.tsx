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
    "5fGUBcaqGUDNcinskczV5xoP2BVs62rukGFA3tFgZtm2PYXDiLHQrtZJcFqujYZDEt1zbZcHntY9xR4kwRy7FhME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDtCTJEi3kzQNn76xc8FwLJNf1RrLgMnz2ei4Xf7XFj8fXEWX8uDdh4xDbfAo8wPH3eroHsuVZGUBHSeTWphTTL",
  "key1": "216MrmXerSejrP5jBEGWyn4VcmY2euiibqwjaXriouajfi5TpPvAB3yvfMEK5T3dMgNezrx8d1x1q5YvkgKvZc9H",
  "key2": "5f88ptfiwj3kj6JbsyNF5mFFozv8VxAkh53SKXLb56c4suawMEuNABTJ1LRncSD6bmLcceYjaRt7DK4j4nciksFV",
  "key3": "3XZFG5WBek7h5ULaKoToE6nkKXHbkXxTgdw96H2vFixE56kRq2foHT24BGS48GoZrsBFjg87tkAfgYzeA8MTzb5C",
  "key4": "zkguv7pg9gkCJMUgVkG4J83TLPo6rRrBnCTDtwJTidkPNdon1CffdXXjY3PQWhPkWaAAY4im9VXYa3cMU4qKRLB",
  "key5": "5Kicie3KfJgTADcdJDQR7GAtzREb25tReGJwt1Gc2pVXtMrF5QnqnVBUGsf5onhc9gqRnoUkUsMcrgMxz4H734YR",
  "key6": "37wqB7qrXi1xKNF71o1ot1QtzSQroJGytwASfaptDj7CCjnQMaeaf8TnDVsw7ANUQesGYyLGjJu7ta5d5SVqGxdA",
  "key7": "1vFfpwTvYuL591RcBrkaqMAVTbjJisPy8Hv9kKD1yxrR4y8e6gJy3S3LJ7ET9yFfRAMPDQBNXeQ6SQdFKHStfQE",
  "key8": "48Kzo3AbX1W4zwXJxktCANKHwc3XhQ8GMv5SC9dLEjynedWUtAbrJZx6Qj5kux9XLwBTTcaBzdJv1gq7Ca4bXMag",
  "key9": "5h5CiLYP9j3f8bz1jSNSADYwUwbJUi9A9GmdsBCn5RhDT6btUut6Qe5xvTHx5y9Mh4YHZvKi4LaGjBx2BseUrj52",
  "key10": "261N3X3YgGEpAqpMPwsaCC2bMC8KenUaLdKBPBFGAyMHfQUYjdTiuN6o624csf4cquqCsBkX3C1Pfuh5EkeviGCM",
  "key11": "3988eSo2bEHpyuLtLyMgVXzYc39DSZnBFcEniyqtYNj1P6oRvwQa1TJr9qU7dHoRJjS8kAXd6BmNi1YpW6uFmcUZ",
  "key12": "2pWwyMwiQpjkUfy1vXP2AE68bDitJuyH2WZsS1Gp64DAHuPBHTGdjcBcz34vp5hAjRY3tY1BfuT4zWQS2P12SHFW",
  "key13": "3jDziDZtZoe7yqqACYYRvpKnhgG7gq2N3xBd9ikwzAbW4xfdpXKAXauCDgbWoHK2didfMmtqEX7VSguXw2mmE7fQ",
  "key14": "4vfy1n2nrrHdB7dyqFYt7DYd7TviVw4tVqpPKuDzCw2KWm8Qam9P7LvyDYB18BEPm8k8vnL8Ygn1MVp6LiSJZBQa",
  "key15": "5RGS9JSgJXcxpbSEWVEF5Vo8WSKTejzy5hT74HpnYAAw3Ga3VhZzP3m5iGUdg6vVfyycEY5FypjtbPAKPfBWbvR2",
  "key16": "5yHrbyC9z3oL3oEQWGsrL3mYUTdxmWUZFueqLznjAdXpGDLbRBLrSyp4C58tr7wemH6FwLW1rKqyhXcqnKx2sHmJ",
  "key17": "4wQUJf7exUdms7iCMMK44LPmArbAg54pe1H7YRpGQtYtC5jKYR52qs3a5x88akXxk61kNXHGFTrVK8waNaENQ1H",
  "key18": "5o7Y6Y5VgP7E3HYpq7mMMhCQxTF7HYAVJHHma8pJEwMcSBMi2RL8cqroGrf4xVgt8Xenh86WjWpanGNqC8YUsDzJ",
  "key19": "UeqSFFhbcz4Fu81cS22PY78rApigaDDY3Vuv8nXWobeTncQX5ZZC5k8LDwhdaEEThSa18VpdknPWN8RxDZe3qaK",
  "key20": "66AuNRwN19fu9z4Vqno8CCrYDJGqnTcgWwFugK14FaS69XcyShXUAPxdc262Yn1XQmXU5XzH3RkfofUSHwyjoafC",
  "key21": "43QaZvrdKdSQCNiRawdE5U4phaDJ2ktv49a5VcfFr2YPT7GNrTLtssNRP1AALCEBqEzp6E1vTxwPiiu6SU5bM98b",
  "key22": "2cupddNeUh5ivLhL5aG3uLhTN6uozywqVp731NUHwpPdxrfuXLhZzjjLB9eX693ihcsBTNW4w2SkASRQfUvEt6ir",
  "key23": "3K8USQpFkhxT2W5jMWQXsKn47K8ydMXe4jZYADd1yXs6SkdWJw4Usfv1qxZKUcY2kBEaDZ39m4Gn69UTSXnReqqu",
  "key24": "5VUhnQ2KpijgejGmMojehXa3sQcp5FvBnk5dGhRYr1p7z9CEiidcPGd3b96KH7JeP8myuVNcPPBAi7yT8XyBJWrF",
  "key25": "2fTH7Uxo3a1UpXFRHzMqx7rHsqKN6oLQ4b82uoC19qwp1THdWanouTqwzhExeJ9WHi8cxBRsQ5cMkxT23QRYyVXT",
  "key26": "5Cb3PUef8mZZiGfkaFAWbxDMe5x6MUT1VH2oTFjrS5h6wEEJFtz6UjsQzZjF2r1EA5YUEoUDLiwDiQv5woZ4tqdb",
  "key27": "2fEVN7YVadD6B1BFSYJaWxWVQBzKjCuonJchNzSEHyxXEWpeJFdp8T9Uz4a2EXqCtZvDgJoFssttwgwJyHrH79Xv",
  "key28": "36NpNYdhhjgM26WkwMPyC1X4Jec9SGHyjqmLcrYL4svoMihscFszFK8o2Jt3oEEZN1PUGsWSfBuFqFrAmoR91hk9",
  "key29": "3sJ9XtiufXis9ffFR5fRSswgQgw5djVZ4AFvvuES6vsc2yC99UssH3wieSj6ooMpaqMyCGpQPiajSz8wuvpKGcQ6",
  "key30": "3MRco1kCtaQUdQZjBPBXTwRdXLzYqxLkVoyveke8WRyuoQrTgW4y7PF6Gd8EzkahgQdykaeXVLC89srKLx1bKbTL",
  "key31": "3tY1u9GzSfN3uP5bkwPXDCSq8pjTEyz1dfwfTpz3CwXFbo2W4RY4wK9G4pVrgi2LWmo2WanNtEDoeAVqcsxpAUX9",
  "key32": "8eVSKUUS1TSrwMWePp4RHDB8WrRks5owG1Q9tuHpX5tBKbgjU75VNvQScPDUfr6CvYC5WVpLa6txhQnuUPojPUz"
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
