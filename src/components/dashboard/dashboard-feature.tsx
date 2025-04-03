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
    "RoMcd5YrdwaFGcc1BWQX682GMyDDNm9mtev6xGdURg6jdEzuyNvZ5VwRGFSx1ttq1HY6ZUEXW7yK38JHV8mwwxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gwVfkCwRhPcy889zEDaA8vfv52oEMcyetZaokh8t2CWrBRBzpWETZN8ML5Fo7yw2vxaKKaL7jwfarbnrJweqSRw",
  "key1": "2WS1yaZANgFBpBSEJykXVvEzJMGvfnAcrRqb1YhX2CqeT7YLXioXmy5DLraQym1mS1euRhGUPZwaKSxe1dfKGW6b",
  "key2": "2StPSowjgCK5uk6ikSna2MY23LKfs3HTBj81JzSWE78CkYUwsb67WNDSLnsoGZfHweQUc2k6MLNHBMa8jxJBZpkT",
  "key3": "4jHfQFD1N48iRJHTX1QTo3mSqfCsoCFEzBSX9EaNYHaQfxuL4877eUprJWCUrQwG2tFnUoYbBbBYMkhJAW52CxDF",
  "key4": "5KK7VggnWNjXid9etSvnrN1Tj1WNvHJwMay7Kvy2EyURast6ByHNqDrry3tEiVG3L9wJzSe4x4TUVbYsXRG6sW7h",
  "key5": "2CFEHneLP3z2EsX1huQB2aZEZX4ZVqvgojjZrMSd8P82jkhon2NdNtuFcf8rZr5tTK1eS9csy3t2zaWuxTwLMJp6",
  "key6": "5wHUK4eZRnhjmr5bP4wzUVkKriCwSvm1hCmpSWrCGfarzGstXthLebrJkzJgnqbn36YxX1oCSgFNyXxg26mMqB3q",
  "key7": "2hfAPJvys8st5LPT1LoxxVGV2MGW9tfQT2tGySUgiS94cnbj9DiLUry5DVvqMuctfUhfyCMu22Tsv4TYFPksovzG",
  "key8": "2MjpuJGLEYp84B7WukQsJW3TExt37YdKi6cfF4kijwJukvcacZUremQRQGaTybF1BgmBnbsH8pjatogYiA14Gvn2",
  "key9": "491autS8a3tEKVJTPvBYop4XyVfzjmm2kBQjkDcbdXL6DdG1Ys22LfQRjWxVSviShfSg4jN6tZtqatCFKxmpvqrT",
  "key10": "4QLuUkUXb9XDqHQftuMABz52RAn9Vi3ZsRnsAqrBahCup4obFQ1Bodp8V9kJVdPVUNtuCabZV4C34H1HKGTpepJk",
  "key11": "5tFdjj4iiUGxNPf54ncqpR3wSraqcnEHA2DEfd3nVtfPTwq46zofWf4r9FhwYx25A73DoFukVePNM5Xbyc7H5V7E",
  "key12": "oPDNPUXaBEUD67WDfwbtipiVBK7WTMK8xPZpMw5mFgAfxFLbdHpPh447nLqqyJtNKZqkFCiAEYhMrjdKNF7RGeD",
  "key13": "2U8SsdxCQDjrh36r4dYgeTjAKGLx2BqnuKpdDM4iocjcUTYz4ZKtgTz6bsuxthJrLfjiepayNY9pskyq3HC9ecm3",
  "key14": "3zb6puCQpdvSjsMhJ51mf8p4Z6vR3Vw1UYJEW4cbzqzvarfMyqsZT41oBMeb7JLWGwWxR7qGFafkbMcBJJWoej53",
  "key15": "213GVoTJZwawVYAbYR6YcSpmUsqyF8MQ7RL9jMxRFKcWm7PUQz1giPnnL7h9at3p9zaT4j3HxgQwTs5etXni3okE",
  "key16": "2aixbGxZYMjscVRaTiYDMmE32n6RK7mz5ANcPUTzuVtLHnGb8KJ3PXimK8ds4UxkKeh7hFt5gict9s3Q7Qz2cfri",
  "key17": "2eRCy7vBDg5MihUPTbdPFQE2Wg28MLfHXAfmJGi79RUmBPycvy64D8B5iMXHx7q1VCbFdjCxpopFM4QHUprKjNzY",
  "key18": "rzutR3zQ2W5YGsaEuMe25RS3hTsdpN5fqHgtWGdtWXeW49kxM5kxvGFdTidP5SC75zP2hUFstB4VsuNqHJ8Wdzs",
  "key19": "4Td2X2YD6EGs8nPdaM3jBz2rpAsR3AcfREUaRo8ebUnfyosBtFmKfQZtFcLWzVdLMowkMsqMcFR4NK6oMMTqVRS8",
  "key20": "2P4n7txWgomNwbvFkuqagJLEKoKVWh2Mo5V1eR5thmCRXzKX852UVUPxNopSqf8RYm5wvoPmNYMsYFYFueaQVGPK",
  "key21": "2eiuzV3ft3oVCdE2ystbFg9hd7QFapCNYynnN7uCLyhgbhR1TaPAC2a5faDxUmQfumfoxjrzQgepEnbHU63oti5L",
  "key22": "2poGhMWuq1FNKs6NHKg2MYF5hVjWjQX6y9X7gx7MwStiBgVi8VqLnFEhkTJPdKhb1NYmP2equa8LGtskd6EC85kT",
  "key23": "4KjHEKZpdA3rRLVhQASg4kEW1Xkc7xLgttiwTjxUU6NR1PP3FWNdEyoz29RdU9br1NidD8pQAGZ3EXm7ohxLW9tR",
  "key24": "24dVff9kVe6xskdB34a2GW2UPFGXqZnnDECob6nLY1W5HYFmSy1mPg5HWAVFyT9ktLF7XbKeobY64hbeKJthHGwN",
  "key25": "dbhb8cq6tgwsQ8LATagXpP3BEzEmKFayw44TU6NmvzgLyybfpJzNkwSq56411TYEXycs9M18ZaoyrFhWdTBXSQM",
  "key26": "TATDUJSXPiCVguVcZtJkqd6yMbALTFeXuhBVR3dbT8gNrRsC33CDogS1HC642k9FMu2utRJngJUwWB3meBbBy77",
  "key27": "36LFA4rsDk9gxcr973x8da8XbbeVjhDoVzvNakRtQxGUNr46BHM5ZtKvZ52foK8JQdyqRaHJ269A6QUs2nWBM6Sq",
  "key28": "2vjyJp7a3j1vpT1gAxNjo55W2f4oJRc8Snga8ZpLfr9XHEB1wDkrKZJ3FbDi6gVjT7CUyQ58BBQVhdibjBuDWC8D",
  "key29": "35uigcJVNHGf9ZEnx8DFD8ev2NQMnsEYki3aXpTp9cV4RPBjZUS7y56wo2Di3uaXv8TdRbmVWmuXsyb1o7k6KHfS",
  "key30": "3yJ9qjDMimCPyWfa8oGfbnDyn6fQektsBQpAdzafgmi9mAXjpNRJLnnFP32yp2D2oPFAq3MXUe3Ae6E2KdNto9Se",
  "key31": "5vu34phHByBxT8j8CKvRfSGnAuNUH4Jx9Aei2akE8izJsjdRkNxJCs1tHt8WY5VjZgopqwaRbQVP3QKJVwkWfJba",
  "key32": "2vXxT4w3bgeXgh3frNzMckc83JagTSCYrcGvGy2cq4x8iwx56GdGMkf53SGKgXfn4s77i1XYdPNXNrijbrygqK9p",
  "key33": "5pEFfXDcJsXqeB1mgi3ydPfrfhbeAGDru89TBXHqFLBnCQtWEZDremKeH6zyjympypjJCC7Ui9CNb8XWS7WYyVu7",
  "key34": "5CPUTvVELUAdLRsLNeuRW9Sd6wDCmQdwP665sJcC65PiCrMLhDd711dK4rgcxi7wSjhzvW9RQq1D8WikLCmGoC8b",
  "key35": "2wzspExATHbqDbyqGt715su7kPAgpSJR4giVCMgsVRNvzwtUS8Th7VHzrcYqYCt61ddW5ZRatwMs7aApeuNpguC7",
  "key36": "yfCKqpF3tjbDoDgAEdyD3pBLWZ8W8gA1q7mQLTiw8oAcqHaxw1icytVCPYa7z19B93x1D3xeeb1cPBsNZ1dY428",
  "key37": "YGGooFuHpQprneWWhoSNdWo4S2fHVngy1varLWHQTJohavTj7rV2mXmnDUc8urHD4BbHvhUne9oyhUTNPyMv8ae",
  "key38": "5Hqi8ZwUfYfxoVx27ew6FsMQuaBDbPwVK3xhapZrsBFENuiq8F83J3WWLxZPD2gvTvGHJAAztoi4kS4TdFYnEh8W"
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
