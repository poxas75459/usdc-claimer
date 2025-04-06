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
    "2RHe2ZaiYvLkpsJPEQ91Npgu3dUJ1BzgtxJse3z1vLX94zevQVjynMmq8nCY6CWuk4HBo8w525125hXnJfmhBE6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8feo18JvUjMpWYZX1BAbtruEQRsPP8uNp56ZLpcW8Zj5YSfTMoKpyhkQHWS2jNMtsojSK3mkDKBQBZUjoQUKPv",
  "key1": "5z8PR9WG8iBiAs5fQFivWhTowwKZgsdppHVxcATC5vMvdeWGttrfB5cLyd6Mey4DKQNK6ryCKLJsjXGNQbNLEQzs",
  "key2": "4VLkshVwEzHftPBbf65d7cE3ne3gRTnG2FaCDvCBEE5TfkSDSbcdMw9wwRdWTYEpFywE9QsMN5qS4xS73S5tBKL1",
  "key3": "JKSZ27wgXZXV8R7vB1BL9K2orVukrpADwCywmNYmnjNdb6dQHUAJ5fMBAJ1pnPyUJEXDEdJ9QpHkKQMwaXFzPf7",
  "key4": "5mwVKrYBmP8faxgyEGVRzGYvV1pED53CA3tLBBCGoadTT5MwDrmefPdZ89sscS3mFo6Hf5b3evPLSr12zr2gCKbn",
  "key5": "42r3bmjBkwwiJ9xzaA59aewAx2ECJC9ZMyq6yDYCjvFggiHp7fnTMt9CLfTBR5mjBGhXLm74Pt2SBPDJWVaydQBt",
  "key6": "4LLwsbLBG1DdsF3ejSeHbwmaWxeP6GP3oHRZVp3PbLzeHW1zSmUfwm2EHFrP4PFy3SFGwyxXPLRuoxoun1rGxmpK",
  "key7": "5LGrqUFwb533tDkadqTqWYewgZ1mkZ3BdspW1MwNL6tdmhn2CrB7mzMxJMWLbJ6wDCQYddZUkGtytZh18aR8eJpX",
  "key8": "5mNQGE8XbmGiatqzXv5XZPe7zyWcaYUXbfMNnEWSGd2nCPo1c2UAXdy2sZRp3YyMpyYzo2sjq2RfsLoAQfb325U",
  "key9": "5LSUoJFFxcDcfvzShrHM1KewN94N8Mq7hppAjufuWxbswWouBhHuR2M13FQpW4W5kUgn7SgKE2bajBtzNSoeAnhj",
  "key10": "AtPQnBNdF2kjUdwaETZ7ooknHFNCEBY7EqE38LTNktiWWHsakoTMWCzQsRyFQP4mwreqG5XCKB3zdeHpqqPQo3o",
  "key11": "5NMvBUPzzXMRo2AwgGmBwFesCoVU5Ekd4QhuNe76sYDFHtaH3KZK7eHhdH4nsw9kp28wXG892Lo9YMgYqFWGcdUg",
  "key12": "5cv23q69FYiaunC1w4u22bK7iGnyJj9gHr5z8b7qaWe1c7SnaiZycmhuZ4pugaR3S4qyAsUrGHrZFLGPqcXVRLB3",
  "key13": "4h1efZx9Gbo5t7Nf9SK8C6MV7bqCeu2j4xgrmNGR7jhmKNgrjwjnSVxcZmyMrQtzMLKr3i3fJDXaTiwy4m3wNEyD",
  "key14": "641QrWMKdCkFm4o9LuwUFNvkBfDC3C7VUeqtde1jcYjMXJnb8QjzAB5pBX72nTRfzX4Eusd24rDVW2x4gKF1mZ6A",
  "key15": "3R2deEzHBQxpcd2PH8KKFFFBunUD46WEX9DrToMJMUKJGMdVbhAESrqPgE4C4VcWCizDK4UstJ4G9KXdkX2jBRhN",
  "key16": "3nFoLPFNEHaR1t3gsjVJM8wNz5NWStFH21VwWxq3VuWEaBEEirq61gAvM5TiKjwotsGSzsAMFHb2hhta7fzTMfUe",
  "key17": "4X5aFQXJwaRTTZpc6yfQeSh6FiWqdBqsSbYPdwB9sz1QeF3QS2fbDa3x7DZGYd5gxv2H5es3nHDjZ4FRuyqfYHGD",
  "key18": "3AavfymB8q4NBMG4GWFY5ABhJ1vSz2XVZeVaL3RfxcEeEy2ErTMnYej5U1Wp69pgs3xV94YfRpwog8EgMVZjKUie",
  "key19": "4iTXRFURjnkRJrfRGYPUQAcNBoiLE5ZW8kgVivSZpVYAeMCJevM3HP5TV6ZpHk8sJ49km6F6tKMAJxj4vtbtmBxj",
  "key20": "uU7AH5UxLwSTtXKrFGY84VneJ9z3TWL7QUk2QAqqoLzX5h5uc9jqLVxjMEi5Z5dLhRCC4TxccVd4Uz9BQVa8GwN",
  "key21": "4ssLX6xAQvpVop1qX9yEKrN5dfoDofcARqaq93sPDfUMVSnpfXAj99VbnozneYJGo8aprprcRKx1f5p7E7qEQ1kt",
  "key22": "5c94QaTDu4sTLRuoARdtme4hPpXErgp61uTJno2ZsLUp9jtHAd1EV1NGHdthPaRoJvdam8vhqHhDJT8Ye2tK5b7T",
  "key23": "5ptEsehHRdQSoPPrFgKvxvtkcEEmo8YE7rRu488FyGV8oELAHErpRRi6U9T4qNUqXMhX6CEvpjXfKkKb8Cer4zdw",
  "key24": "2HL4aNPbcxb4XLQP6U35GDZ2M9kPf4xeNGc2Vu62ScikXF93bztA2Q6WK8qpibf4nsCZbjtuoxgWHmYGnY49BHco",
  "key25": "4V5fPvzQTmNZ1EvPvPfRZrnH3FyCwNuskFuAb3Ux2zt9U2WoUh8tr81eehmPmr4xKWLDJGHbwtjhQVcDRdyfSrLH",
  "key26": "4G4cChZETqam47BPaqvspxqguRmkBv3tHurA2ofgdLL3X9i9kUpiUH1t8mnSbHWwMctfmKwy6DTUFcUA4zSKwaSj",
  "key27": "4qTyCxPEsSMM5tnvcQKQ9SCqsWzotAx8Q1fWxGyKAcGKAhMBbxEwmvunUPFPHJGW4U8eTeUYPMNWqWMqS1yyXLfr",
  "key28": "5soE41xZTbEggZmtyCyXbBTiyWehbfZLHmYSwv4PPVCWDkAsZn2EysipFfEkPUFo95Mdcr3wa2JPFHzkRdzML23o",
  "key29": "9uLq5RJWcYxbkFGr3JqkKiu7MnukHfkUaukTnQheZUUV6qxjQfjnpenw4Ci77um6v9Kf3X3mVWB64yMJUqn9TGC",
  "key30": "5EwwtEj1jB4j8E73W9rdHghiFCpydmp3ot9T2h3h8fYaj7WykUgyaCPgyJqa3i1Z4gJkBUGRB9L9Tj7Zy9WsgVRz",
  "key31": "3tYedqFaLggktyjAa4Muji6wC8WbFwH9cLM1Vb67HeMPwaU2yDvPAUwgcJfRVRPvtWQnQ7aPrzsR2t9ynMSwKpXe",
  "key32": "512pukL4X3JcBrJEN2Wjx6kvmorVxEodJRjxVof7DdfJunssEEeposyGMen6Ek5G1xixu5spuUjuvW1wV4zthL8V",
  "key33": "53GJ1C1Poj12h1xzSmKN3hBquxX23fVt3kCCYQmDmZYfi3Amr6yhdfpn7wTpEPZ7ZBtYT3Gx9bmPRKhfWqXetkKB",
  "key34": "21us2pMos1Gsja8X9Zep6t1UGXF7YCL9uzboRgf3nkkMPbJ4bVMDWbfs9yfYW4GvWMfXP5MeFvf3ENUMjRk7unxf",
  "key35": "4DR1caXP1ns6CmhAvyLFw7mFPEQkwdtCoUL3aw8yxncqtWwzbVpmLZZWVhMJymAQBotnHprZLqLhdm7xMwkKT3pn",
  "key36": "56CtiEmqGBtVksqN7eRYpK623ppHhsT2Bm6FguR7sq7xUZ2VJq6s1odbyPRxpPjCPY8ZszbL5sEUG5PrV75bE7wa"
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
