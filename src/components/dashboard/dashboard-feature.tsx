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
    "5MNUQVJc4H4y3mf2hz5KMhFbW6mVAQ7okeGn8W8BfgxEx78Z5XEKZTTCBD9WdSScKTJzRtMW8ynXU8W687YphTTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCppMEhLmVEAkpgGMk1H5grNVR89CPb8xxKPM9EyydMNHKSwzFjjT4vakpPGRsxZS1KMW6FmyjZjcxX5HEB2BRL",
  "key1": "4uE7P9Zd8kPZtV4G7DaJQTZTGvMgVYvwahpRpP217Whw1oeyJDfkvyVvMb9FmVzKiAJhT8ZTUvwCNM8rtEdUXXvF",
  "key2": "Gw3UtXHDgzsAWB2jvnhvDmo4o9Xs6w4SUSjYrAR1NeNztayFPAMrEWGDDq6MKb77wzd7enRXodRNX6R6efYaeWB",
  "key3": "3QnCyBA8wkor3bMqQMjxL9dkbNDYWMU47CjY5ztLYZD34tmsSaMfRT9F5cbcUz6Ng4cfdBTKuhRTNVWBsXQ6ppUC",
  "key4": "5z9Z4HwihtMXTQiRUgkPaWnZXawj5TPAc2vLDcEus7RBXiE9YD4bfzkPt2fkAo9zkzLnse368aHjSX8xEaKuzPiR",
  "key5": "3bFwb6rc3pLcZk6HkciPpsyvKDHfhdfUKfc9UMb5PXjoQYYcyUAe4z3jFGq6v6Liyfkt91Qbr5CnUy7sEQfA1roM",
  "key6": "Q1Qxk7GFKNRrVePTnDLScoS2N2e4WgHZ9ezA4sqM6V7mTiwvgHFEVM2Ps9YrAX1b3N8dxuGQBncYMiPuBzdcYNz",
  "key7": "4DrrargCfqwmdswEmJKooJ3yRJdfgvwAdrfV9QN6qkWXEQYWcSS3ubwrSTHX5dixmFVM4yytY7rCaes93m1jnSBM",
  "key8": "4akEvahcfTmLGMbimgKwRwjRfC4ZN6BdXJGN1MPksSRCfHgXZzcpMM9oDWee4pddQLQwMhQtzV44YWJT1C6Rr8ve",
  "key9": "2CXBPKFnSi86GB7M9T1dk6P3HYEnHPCZ2JA3v2armWHrDQNaU4Mu715KtVRgg2brkk5osznRpR3zoF3PBp1ReNoY",
  "key10": "5qxKK44E6BcPXtPj7E9JGt2n5GRBPdPAcVh2ohQWYTSizWYsijWYRRiY7QT9PWZToZahBADHKDmNeqJkEbWBvTZk",
  "key11": "3hotxNr5mRCSacNnwhgfSi3r47DKG94gLtMJBHYcEuiGC2UW7gd223gFwC3MjAUMi79Ep2Bu8wCFwJBsp2fQuwVC",
  "key12": "2C7NfZdZZyNRpt4vskY5TB7xy1EFQVD7uyKNPFhLLzRXSoSCGgjkBpxr7y2mR2tNCrJmYf7DCjngeN2TdFN6exNU",
  "key13": "5F2bbQtobpERBRVvR9pLtSGvbcR9KMdYdh9pHFmJKDWBLdG5DfA7WzL1v2MNwMtvz3R1jcQbZhYjTMUArfyyUfoc",
  "key14": "5npYC7i81WDRAGPEeF6SHqvsm5maMDF25gJXyaebCa1wqF3gCFQobkeKs6MYAv3Sics29bsbcCPprdBPiArYaBjg",
  "key15": "VjKmgC9mrN3E5X8oqWrpYLG29eeJHyDEeXycfZv74anKob3pGCMjNHBAuG7i1fs3HntVeEdMkTSaPV867R2nTnj",
  "key16": "4C1FmWt78aVy1jEXbYYSUQ2Vgnr2mUtDgHzuv3mVVnbuX13J9a3G9RV3GhFVttbeNpgiBahBJ7LWVWRm2j55SLpE",
  "key17": "3X9BQGorD4PKttoNXL8U4VEKUCY7PPiQTbmDf8Dm3Q1Cvj4S8QppdFu7KK5yTyVdcHdfd7PKLaGVLMKE3xndx6WM",
  "key18": "JZi2C1SokgjuP1sg2c2WHnXmMMhTa363bb9VouZ3fnbJGxj72zDPHfCoRCn8YuzNhCHnJrBvPJed46q6fXLLCxw",
  "key19": "51HV1BAqDi6jcTrWgr9AUznMQzy315EYwvpvmqUyVJEPfyTKFSoqtokq4j1p4dXtDGgShe4Er7yr9VrD31o6bM4p",
  "key20": "4cfsdD6ubox8CUuiYizHqNYEqzUfz3wPd6bBSJQ1GeAEZstChuHEtNnDd4A5XLBTH19vin9XfPW1jzBJ9C11YZjB",
  "key21": "3XV6PLyaovZP6ydmBe2xCkBGk2i1ECmRE186Li7RYpnNeVTQy6AnYjfV65WqfJWEdcyu4CpDWWhqxGwQpvEEBbC8",
  "key22": "WaMGMujU8nSDm52S8YK2mjPwvMrPSA5mkJSewvYa4s4aKCriorYXwq28qvZzY1wg9i1TfsZVd8YrcJpGGwd9ejh",
  "key23": "59GiNt1uPzUMSKoiMbaZVZowpvFm1xB2DxKxPHuYrDyPVN3rDshMfXWxY3CUCw23T8YVJNQEiu922RmhNo6n5d1W",
  "key24": "2c5TY5JF4jKhBXwztLeQTyxm519uEwg63ekiYPN3Fqww2kXa2nHJ4E7e7frU89bb1N5CxmQ9UA4XK6Z2kpgiDe9F",
  "key25": "2juToBSyk5oir4qwNG1wF4b1KVe1sAYj7FeUzib6P6wGbKeZ83JLUo2TF1jammo9hYPDwCer8zHHoHaiodZW2UcU",
  "key26": "583F1qcV1p46GeUnWQ1pbyPX1pQJnQNBWhkrXjscwCG77U2EGEDPk8wJDZreSvHAK1Rv1if2isQ61hruKWeW9zsQ",
  "key27": "2Y6MJ24a41e83rBMwwN1XS8w6sA7vmHvfPJ4tCtDJWDKtwwfV681kr5X1JnJsFDozKzhU6fQZ2UYgTPoY3QmJfwh",
  "key28": "29DzhuJkyc4ZDBwsNNd2KvMnGuXmH2HjvrqKAaXkZg6nhuXXQU6n64dLXigAn9LS6b27cbaKT5tx2A4J1Bq69vEa",
  "key29": "59ANBgo2Nsjt3D6j6i59WiCozqWJhVhBfJEmnM2cQe2KG7n7itpLB88X2umisa4kyYoyQmQmnmdkZwofpjrEgtWJ",
  "key30": "2hj9wjafUpZCuEi2bb45v6iHd3r2PZXNd6Af6t9YxJoxsP33xMjmUd22fdZ1o8RqVUyKVziMFvCkEvHURpXw1RDq",
  "key31": "5WcuBF34rNmmHYxy95yzuWTUuWX87p5CpvXtpGosJRbFSLfU4uaD7G7PzwN1d9wECA6vnzq5Q3tbr6ad1jXNJb31",
  "key32": "3RPMs2KiH4RDLnAKqmsufNffxzc1yGDnyrvmQp2ax2SezCf2oibqCVecCQfpctg5JCEWVpZVchfXDgD57YFH9kq2",
  "key33": "2cfji8HDM4gyLgazJ9MmbPoKeUWC2h2Ati79zDhmJnpBo8pSZdskVz6UvziBdcW4ncbHmq3Qs5rFFf32dKPoULYo",
  "key34": "2CUyitt3mZwgqKPxb1S7M27JDPjbQ316smMWtgpNLfxan8a6srTXZN1rhxCiENP59h9bHMvs2wNerqcSN91tGz43",
  "key35": "4sdfEEc3RX8p4jXk5pP2z6ujWAffec8ghycdmCzMCh7NwWS4N6CLF6H3ZVoisPDWQgMDqJLPSgFhtZGmCjE3jnA6",
  "key36": "24fuyQ1JeB7jEWe7NDn3Uy9YeZKeK7tJ8qW7EQzT1ae8bjaM3VdoMuxZacZKVQPd4CzAF5evkzUciAifuxUhsgqP",
  "key37": "VFiP3uNhywUd2uYkCUeemMxCC41torbvFMD7mH3f3mZVueNx3gsDPu2MZ11YvC3pxSWUUZV6rMuVAzhADp5U3km",
  "key38": "22J9ShqL5oUFFjVu1MocYMtEHf3mfyxH4sHtru2gEaXUjT5vm4AnfTuvQoZ4pesrCeYCTcBr61jXrcp5RsQwzNPj",
  "key39": "5KvoAy9PLyfaNKHMLqPTZwBfyTKTdhNbkcUHJZY9uZ6RwMQ1dg6DGrAdidssCKrQdTNDZDMC661VwxrVYaK9gD97"
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
