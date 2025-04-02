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
    "5yi49qurhxqNzWfzfDbTaCSqGvsD2pYhCNHX5aFZARmgZzFHqDUqYgBCbkMBzMdzii3Bf77Vbk6MRYWmRNwZquPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmH2MEwFbvypnbceBjFYUdCzy4ScbYsyrF4pft8XuvnfAZjiCrm8v2c7mW586nfwVE6cgGRfUcyJUMgq7vNjmkd",
  "key1": "3vPJ5P7TXcFSFiDG6m2N3fhVYwgSdNE73uHpW2tQv1gGc7nxtLwSh7ZdygyyPDj3TpRk1aZkL7fBwm18TKD8h4GA",
  "key2": "WAiuWy92aFWTgsByXhPh1dw2axtFQtTxXAbikF6HcYkecfoTUZTX4hsLH4vvzzyMitRUvyUod2egwPgpUotZH1f",
  "key3": "4XTqZgvvECKgzvYoA2bC5z6toppMDYGjWXN1hNFKkgcV41FbZyRNNhMq1o2VxMsmQibSiyrHf2N5mZqhSmAk67UK",
  "key4": "2oQtyyoghbKD1yREdfw3ENNwWiCE9oR7BPmuVC98MsaVGcPRqN2JmwuAD7qXZpNMmhxU6rYPsLNGzjukVoNYhKYr",
  "key5": "4Gpv3EPHu8bpK7vtNEXYeuc7DRJaRUacxDoAKsLdGQeJZimPsMRbwqDaapcykVYb9QFC9rvGkKvBZL1fv3SpRwD2",
  "key6": "Lnzh8E2UPhQn5jBa15biK8QPFmtf8YQYvsXEZFRfpzeCe4AMA9zBfwGKMsjWZHs9d77FyjAhYhJznSmPXqLv6bk",
  "key7": "4kCyExZLXCgNBVhvFtDjpQFoRVqJ2Atuv81FbqKKfyDFnba6kHTAoWCBEURYZRdnAQEDKV19aWHSizAJtePLCbfN",
  "key8": "2HefDokDtiSTGKFkLLPfua2deoAjbHyV3Ac84DKhjrvc9geAe24TdnfurnkWQkYJuSe6UqhFxyzGHrFLd7VyZ9eN",
  "key9": "4d8qJgbYew2zEy6txfG259WdXCJqm4qtf3wtaY2wpogJFRhjFNHTUiK54K2vE3qhMACUZi526ny8JsG6XV22ptR7",
  "key10": "5acL8pXv8q79Pppqv9uGGmn8ki9WTqx8tJuAMhLeMFtNJXNCx7kDWAevcrPSdnFnryuwnCbUVJ3VyPn2CqNWTv9a",
  "key11": "2rEGMKcGRG4Do2qcSuq1mU3kHFif15qpWiK5iJatHisaPCY5BJnwAGXbmwMy3eKHjm5H8aAKhdH8QK4GXGbSQVVX",
  "key12": "2rB4qXy1wra18x8TRND6BhurcMgniu9LBVm9FXN9kqtgfT99XxZg8sdZ78H9TYWEzDtcyypZah1MZTgDow2GqMKG",
  "key13": "5PTjddcnXV2zcqywHJS4DPE9CJ6C5zgobtcYV73eZkB1qUcrRq9pevoHP5Ztza1E5q3Vejdk13dG6nuvZz9ias9x",
  "key14": "5xMuh8FfJaKHwhuLp1bLVu7vCFjj2LKaad4z7kc65CQfxP9dsvywFuEyZ56TeT6t4chc8FVvNzxib8ADVFTEZTnn",
  "key15": "VpGoLgdBkEKHH17Uvc9UxDAvvNPr6yhEjRPHaEX4jPSqUevtQx4Vi7wVLvdhfjU9LKxRCHU9CDAzAUMXX7QHoqi",
  "key16": "vR1AGTTpscBB8abchkDw8S5J2fsgYXjKqWLamTyHUwPD2ktuyaxPW71rX2LBPk8krYXccYrYSC7ZW7iuTWFpnR3",
  "key17": "3vjQZUfhBSSGerSvi8HiJ3XcVpTnw8fSZFjUqcSjbgHpwP1134qwtc81PMYwQPt9qUVM216MaWKs7bZD9o2HhLWz",
  "key18": "5a1qEdeZwC2bmpsPA9fEZQLvpp17EH15MYW7MUo2tyEVBASucjDPiU2T4ZTB6NTnidvUvab3BJ1tfUBvEC3RKW4t",
  "key19": "2VCEfHf2MA2s1HMo2N497G6T8Bopn2d7z5i8zMREvEQSb54TsbBsCHy3RRHgpubQfwiBPSJ18JUgW66YXY9jUDdr",
  "key20": "2diCSRCDgSAoT2uwrvjTqb8iRYsm8WMg1YF73GdaAvQVBSbruE3hHd1AdA1XUeUdPNHuerBanuiejwcgmbnR85qP",
  "key21": "4rQZ3KKJ7USXnHm6eFdtKnuG3sZ8cCaj41fJJjQYKCrnvWBbArJhPbETD17ei86T5R6gHx3kog8fo8r62C7CYpNC",
  "key22": "5XSN8ByV6RxEB6TESxio9xBTHaA25L6DpK34zS3sEDFDiegTkkqek7WpKJaCMgiAKFCQEuGvmoNyGKSP4i6gsm2R",
  "key23": "4racf89dMi39rc5GtinQsYMz2zRVmTkQvGV9qkm9hMZsCXWpfTRiWoK5o71u1AkxAE18UTd9SdTzcjK2Gp56qmiC",
  "key24": "5hwX7H8y8PCEVZD7otJr6YwmxsCb2JtoPP9u84YghhD36DxwAaFZrhiVy6KNiJanmWzC6wTDKG92U7YYZeNM9zid",
  "key25": "23D14zH8kC83ah3j339wYbdSK9Du4wXMyuRBK7rBwWyPriNUtc8xBshDZDmF179qcTP2UNe6QtQef1e3ot8CvcLc",
  "key26": "5nN3EEQuWjbfCe226ncVEMuiBTgvNgppwQbk7LkgArNZvnajUq4nj6T4Fn374UmppBLePbMythdEnNTJm3iwubB6",
  "key27": "3c2JVsqNuANonRvrzZKmnWHGSg1mK6B26yVAHJLe87Fbz7xbFwJGH8LRKGCDQssqjar6gFWQQHMU3sj2VEP7GtwJ",
  "key28": "5j3PsehAvCfM1SDBsC677NiFpsf7kRSYe9eQBY8BUYfWKWoDyaHgstR8EFwMcp7pwnjP77X4MQuxgL7G3HHYDSCV",
  "key29": "4dwqTUhntNARTWux6aHFHSMWFqrBd4kpqtQn1Tkbbwu9NCFU8yQDWJE55qXbNEhMZQUMDyZCnEqE55XyDFATu9nZ",
  "key30": "2zAAUEwti7bcdEGRRCbi4FArbRJscZ8rxYrifsRDS1ga9MFXd2hLEvTkGdP7DVmPqqqmFHhBzxozgi7JVKfgnu4W",
  "key31": "4iktZuJp9DfnbCR3b8xC8xjbmAg5xTde7GpsQ46KnDQdBDbSTd3FH6Hv4JL4KMKfwyyVRYGqkoP5qc92fRQgpMqv",
  "key32": "5s6aZnFsLi8TAtc6vCgA1xmdgyiXt4wrUmueYY576G8pvH8Pz2zkvtvH6M2A5koH4NrPA9KkV9QQLwRVknqT7o64",
  "key33": "4FTvsiLY7g4zQVzasByCNZ2zCuJTm9aHqAnSHFCNvT4RbFmYjxWDAzyxCkNJ4B8Sr3f3BgvMzJ9vkBnnbFjEBjzb",
  "key34": "5SE9HrXbGsBJHfxZnfMNFf6fFNGs2saHAoDSXZTo86hz2DArPYRYnWPcFEQXjbCydow1xMcwtqBLegmozv5aN5qi"
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
