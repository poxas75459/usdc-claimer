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
    "p9w6ZYYPK7LimeGBU1ooGxhocGLtZc5mvShgcGNrAoGrM6TVH4qBvspSXTXEmEv7obg63HzwAXdDiP7D3xSa7PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRMiR6odaxb9mrto8xw93U98p77BSbu936LwbVVe4HKBWD1ZWJ27N6jsh7agpuDTuvAEGWBgiwoTKN492PHWScZ",
  "key1": "wivb6p76BabVSg8KVKU8PuVR7hUkftK5rPFiCZmJBrsfQggCScSxs8jwz7AgH2GvPt5n1ahjKNBbn5mrTWJqSQ9",
  "key2": "4TJ7SVWWT342eEELJQMnV14bk7USLt6GBL2kA3FKYHFaUy5XEVyGonstWRDpibzES3wEwXrd2oiYkexSru3zaFqB",
  "key3": "3WKsjDsjmL3RThvU7HLRR54AuSTEkTiRjxf349oStx9eBHV74MJ996iyVMTr8dXdhW9bJPuyTnSedWvkLrJcqN2u",
  "key4": "2tcUEZEN9K9yK1UnX9ueBngR3ndARvHdMA6V5VFssxgXNTeNmpWNRBeyEu7gBdC88TMmU4VU6Do3BrKQZoRvn7xW",
  "key5": "3jWRPZWJjmNJqAZNiXXmpiNyvwhycQqCs68domGMy4RZ2S3CpGZKJHmFATNeKn83VUYuRsHhR9rLk17J4c6fZmG1",
  "key6": "uSfrVRf4JeSfnzvn2cHbqeE7yeqKTkcWbeextnjuwP65VyLC3bVXDyLBuYHEzc9MuENwwcUkX1r1QSg4Lyd4PEX",
  "key7": "43eFcGxcEhgYKEE8z7BFZTDmHLmJ39LDbRoEjLLZ2gT3UynxbcqvPeUVytVfNSdRnAty92sywCHnq4B4FLga9Ueu",
  "key8": "2VHgP1FurPEB16QBqAPGR7UnQVC9RH3pjshgQ28SGBXRqTvaCvptLnXaHvZtQFMMvYaUqhJPp8G9vid6zjEot643",
  "key9": "2emcnoR9sH4j8gEC6y24HdFukwtiSGJXmFmgsCZrwYrZNyfqLt2nnTPe6U4TVQS3gsYpsguYtuYz5QDw3DjCjrWD",
  "key10": "3AB8vhj7iQB1nmLCBaGkfZCxxj4Z1aQpWRb2SuQUTZGxcuyuN7KAEGp3aPqQm8dGJM7yyfreRd7WRMdZfjTqHQV1",
  "key11": "2X3p7fw31GwyqUSorkZoeSAQcxV6ANBbbCQSXqJ43a6qk2SLtWFx6VxuUDi3wpsFm3FQUee6PKix1aFGJG9hAiHk",
  "key12": "CDGekLxNpSn8E9NHYyKdshUyS2gmZSC4Esh1eAX1v2hrTvCVcMN1EBMjCMewgWRP3GEof4b1qN7qpSrwJbv9gKq",
  "key13": "BVmuB1bgo5R6fTKbCKSjBSp9Cor8m4NpgQ5xFN44B2uwWoc5V8M81BnJNMoCWGhSABgYF42j7Pu5zSTkwsGnGWB",
  "key14": "4bYPv4fL8AjpLopn8EKsC5PmQ1gQTCizETk35JxZzj9yvpeq2RaHAC5fcUhopAjFZ7L6GVS9krj757DKap2iiBgn",
  "key15": "2DpeaiKUZCyNnk1pZFunVhbH2bsCJ6oWte8hrwQg2brjNrmWmsqcsCWiEa7pt327AH1DreF5emqVXPdoiTWHCUcX",
  "key16": "wr4HFE6UvMDoHuQUDNWY3rtiLBcmkC1qJPBmd5RYPWydNW1rAZSWfPgEJS1w7U4SHs6m1f8oUzAYs2QQXpL3pd3",
  "key17": "5h3ectFDqd1AXutFEP1qXCkeCz9e68WP6mo4hfbT8QXNTRMtjKDyS8N2sRpZEPjAPNUE8RFEv8S8iTtZu7hxMdgE",
  "key18": "fZ1aFVRyT7ZBXSmWm7CtBVkfJ7UFur5sG7AnyyzAt4jBkWooiBM7yHQh4WgfoMJmNNqfafiHVGnAt83BKkpzpqw",
  "key19": "4S3coacACCZNJnEqem7Bto9dmsb15KUJbecRt6FBtjcJBowotniyjby96pedHRTAWETU7yT1W8KcqRAobCFFXyks",
  "key20": "4bUFywF8UBYVawV9M54uDyDSX6ax3QynurWh2fnv9eo7nx2jExVCJnuw13gzfgfMwMfNtYXSznofQZUgmvCDX2qK",
  "key21": "QrfDTbY5cTDrfjKxnFB4NDExVV2PuvXGbQfMsY893MzkvUZmPPHLf4ah25fLpAFypnoWYt2YKBu1FKeQCFtWjvE",
  "key22": "4ecyF4dcpR5g1ZFQqivZwTsQPXw6uwxwNr9i5JH7p65T2M7kcFdLUheZ8xTjTPskWjfHTLoBhiThSRdAgYcr15PU",
  "key23": "nen6fxzs9oKr6RxjZsx5F55WDJP8tAgwzSF2ye4G7rAu7iwPJ84Auwbm3QUVnHYDCZ9r6Mt1FwcA3bKtdDikfRn",
  "key24": "BFCLfmNAZUtCha4KH92uhzYpYoxdcVDiHgTMKuMx76aQmAGZZcQScENizq1BeGYg9SHdY22aPA6pX1GLNVU6UUq",
  "key25": "tkNXgBkJFmeaDjdXy6jKBBCte1zWAUWzE44Hbs3ojyVGBi6LQsLqmcEi6ZG4QY55bNFveeqW75dFGo36GJijHom",
  "key26": "4CmbHRRmMsjWT5bRoZ9AhdnTvWLkZj9BWzrAK69Vbh9WaUjXgoFy96ttN5QRF72QN9twWXj5ZGAt2ZuZ2Sz6f536",
  "key27": "5XAkesVAWhNNKGSUoqLzC4o4PLFFDVcteKMgAfACwdF3ERFY5Y5DuvWX1HSQDcAAgdP9JMSfQ4s4MgYpBmxEH7Kf",
  "key28": "2p7BarDZtU2V3c8SWwMzQnbuQNjSAf5b6c6znzWM9y1uDiiQUAWANBk6NXe7BU1qve8Gr8GtE858iAwzGzyfygrC",
  "key29": "4y75H7PMEviWUDTzxY2ePdECjMdjQuKgPL9yonVqJMC73yReXoSwaTErh4qcXzcMwWc1BgbZYhQoRHCz6nBv4Tqy",
  "key30": "isxmfu1gCTUmcF54poBi4muRgysJtGJkJpG13HsY6hazbenfYJychhqbbTpLdKjTdEEdjJA9ZR9qLnLHiKYjMLN",
  "key31": "3iY1sAruLk4onqpkf8S4KoJ72xt1duepMUDfikeH5f8ZmfzknEUeQp8g4vf9ajcnrtQ8aERFepQCifHGwQbkqzAQ",
  "key32": "34wBNK3vy4U3BJF5MZxZN9VPE2Gf9xLGx82yrJXuiUjYyUGjEon1ddkrpekGLtRk9D1i6nZcpi6UvKwR4jsZs4xN",
  "key33": "JB5pHZB1txBv6ysSYRGXLEhY6RDYBuJR27hweFYYLxLPbszU7vL7PJ1ADDiakfyNrbd96QShNikRCoY9V9nTcsD",
  "key34": "4m8Vhe1vDN8MmAeuJosfoZWvrL5eGT5cUKn6Xyf8A25A7UuatwF8KjUtjQHY9bJcediS2Y2GRpJZchcPVCH7DhbM",
  "key35": "DPCDooWm7WivZJ233gN2yUFFiJLBDMpuFVC3up9vtTYF62fyQjjQ8SRPpzweyNiaCNKHZRu78qP19sSNti5jxdW",
  "key36": "kekrBBqqWYaT9xwmSdesBccDLZbpATBJxo7ZsZgSydJUfLGVC1YihqLKzm27924W4yUKWjo5vK3PKF9n3kqq9Uf",
  "key37": "43iupDihWevkiNXBMMHwntBkpSJByk9CTaBxqgFcuG597DaBSoRZNoJ9d9p8iYiEU5ssde1jHxy1LNAHjBY5jWdy",
  "key38": "2Xe1ypg2VDUmTywvXNsqxi7bCoEiYkK4V5yEitPUc4G3G6XJyXsG1AMM6vuc9vvLzzWKMCD5iLxwxRVxcFRcuYjP",
  "key39": "dDzWpzgbut9aq1LVgKjrCcLXSATJWcgeh7AnMWypZZ9tr7MfbtUqDG2ve89pqV5jBpHLmAkVB9GcdSpnPtimWZ4"
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
