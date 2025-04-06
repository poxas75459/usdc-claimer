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
    "2wXhz35RtuwvMojyZRTzZsFArZpcjdkF8TB9hwxxJx8u9KzUYnBfxXCZNiYx35fvkhty7KKkZ9jVEpSxi7vtLw6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tn9qMyu5JnkZzSvF2GJZxY4CnLnBS7B5QkR4QXYCW8bGsEYCcSYaThf4VgHMqQXpDHdPj66LcCCoLgWpsDK8w7W",
  "key1": "4TqXhZxZsQKesyuDT7r5gA3HaDsFAJB49iEX5zKpEfYb6b9eTYFVHALgC8nixsXV9kHUXdJkYxpS7X4VAAvrYsLn",
  "key2": "5NKLgv2S4vN2JvXtn3AWZ4XNXoCWrcHff4Bte3ytWTbrN7za1QzJrUC4cj46rLAX69Pv9fsKdVNCzVjNymGbZcFh",
  "key3": "3wLYtrVoFRWYK7ThXxL8WvPApXJmSCkWJrsHkUox3hsSrS4ENg8uCWXS1Ea4YBmRoMFqyHQL4w4Qmzu1ZSdTVfrx",
  "key4": "4MCd412SW1bSp8JcDrFMfsZ8rXya3nBpwkLUoSzaAwCNSfeE3TaoYhR9NfbyQtMLXczSBbBe4td3niYkdLeXzaE3",
  "key5": "2HhVdjHVrxZ6DvhSqcsTD1f4QXP6aSpMaFa8Bcxyw9tfrxAXanmwLi93Wq78Do5Eur6RcnjeM9cY55PNWcAMifJc",
  "key6": "4qTLbGmrfXidi26uCpcfFWDXJC8ouifi9LVbXeseMjHfeTmioTpdvxsMeyMgkSWFgynfamBDkv3pnPABeh9pwFuQ",
  "key7": "2A11pCytZypEAMzeomaSzUE8GmVwCxxgv1uLY9YquLezhqcajLZYFhmmYGvKrcrc3FPx2ZMKQsiLLZMi8nc1vqd4",
  "key8": "AsWUVi1vgyTfz7cKcXTkiywph4qsoAD5Fv5fPVwxxq1qFdhnk8r7PewKRFtZwtCoNyPhHETaSdgNfBxpXpwx1jM",
  "key9": "64obAhWszcK7LinJxfHKfb9h86C53XMbMwAjhQvtUKVAo5zuudBJjE3rojhDmWKcscJCrz3FgWoXMX4wJhbnH1jH",
  "key10": "51g7yD5M7DXNMGLnYbebUVfqM3tmfarWkWBK8GhWT6YAJbWgNToMCfZemv8xbg4YHmNpBsSHU9cZVYyZwDR1M5Qa",
  "key11": "xpAuFmbPASApiZ9EY7iDKPrHkhEj1U7qsmz973cx2WnA6cUXcesM2rKw1dgDhTyKST3WdB5stHD3WJbAmxgnKt5",
  "key12": "2kqYeVk4dXqzHnnRThtvsdxVAShiiY5xnWPeWfS4sAYLbrCU3sw626aSQkApR476voKNfCoetaqVncpR4pmQgPet",
  "key13": "jMqft7dBjGpBsgvdnKdzkZKUoCBdwW4HdbNfPyauSm4bXChM2jRzH1rVn2na7XTvx8giTKXMs5HoCBR6cux82RP",
  "key14": "3jXdGZbsARvh2q2L9Ko9euTyPTfAj9hR1xchNuHzikEKCZ38qSq3vYjwNhxH55dahVoLtEdZupXCFLCs3k3XMEjV",
  "key15": "A781fNbehhk2QxS4Qum8XJ5T1kNeBzLuHueyxHoAqSoU114C5o25u8Phf5HJsqJVGdNoAx7KxUS6jaj54eZuKzv",
  "key16": "4dsgareY75kfTDKET3FHmQgw5qkEvwMUfywHrSHasmhroHDmk5qLuk8Uoisw9Bz2wxki6xbAnEsdrLVGrHGQuNsz",
  "key17": "4e8NxutkBDbK3u6GVmk6FRvPRsfPtYpr6mkc9832poWDivr3bkfrjbBq7Knns1BM5e2CXYg3QsRJPfS81xUWLb4V",
  "key18": "4sL474HsyGvSis6DvWqFd9QocxMxwohe6a2KNZZTZxKtFB8D5DczVLAdHE4Bv5HjwGir24MGYQqLkKsSPUg29rfD",
  "key19": "49cw62qoTP7tJgkZgDyrG2SNGzNLrYsBczPLS3RXpFsvwCWbegEQfpXSCX68j3rWt73ZC8zbMWGmWLQJCHEYURt4",
  "key20": "32r7zUQvku9hF7qt1wXYuD8kJuQ5eo4ywypm8wo5ajPqybsWHZDcKZVuNo2rCFt4XHtQqrYjRoHyuDAFz7VBzFJ2",
  "key21": "5a2XN5S3CJExuJ4nMJKrbZskhSZFxJopmrNvHKrKBvJ681VG8LaegpaooTpXgNNLuphiWWGMrCrceK1J2PTMJKwa",
  "key22": "2L4e7PhwSUJVNPPF8bG3yARgUmhyGTqLyia6f9j28UbnWk85pUWBtUsMsc756H4JVgUNHCCscuzma7MnZsqfBTaZ",
  "key23": "NSwVLycYYWmYCCTt3xrxRvxzSSQ27sLtQLzXXWkRgH2W4TYhbeURDJwhPob5FvCNTPtW9AWwqCQtVJjZ13dFUKf",
  "key24": "5fzobVrn6aCsMfPucKgfhby2WUrbC2UMquW4Ky3Zrsrn4Gr5PK5Z9kfKT2xcZHs5mA1dQodHWYgQYbx9cLwQC648",
  "key25": "3hL7GdTwxFHedj9XvsM3fqjU74fMT2THMHb9d18u9k6ojRaeAzwe6hsMNv9KwaPKGC2WX4RBsS4JtVreaPRS5bjL",
  "key26": "5dcDEZiQmLVqqqmuJmz837f2Men3RBU75FNuADSHE9daDJry3BzqDN2Xue42Ju2a8MveKorVedqUvUm3Yczg1yRt",
  "key27": "SWEzyzc2CbKREQcbay3s2FETertRhUZ1y9tMeKjGzcfgNfAN2qNBg9pS8JzXDBdwDCD2mC6tmgpp41o3Jwr5N7N",
  "key28": "33rnPGaGNZa4mssWyoeTZwJrHmftYGzg7uHHqptSLpFzsUvN7SWrmJcAga4ZcHyRNeYSQGXFFpfbczHUUY9PpRST",
  "key29": "51XggfFaYmRK4Wv8qEjruMavRabCqKqz7REMGXS68pg1sRAuFHQvDGoa9DuAJtJn4wC6DtAA15wyR7fUSWyd7CFC",
  "key30": "5Unkw5wDbLLFRqB3kHBg4546j675vm8TzBL3Jxc48Zb75QCWG1Lbo2CZEEXEJmJVrBUViu1EZbK8e8ARH8gpUtfk",
  "key31": "2MVfrfvVeTLNzFUUiB4RDnEWtkh9EwvbuuLaJ7sZH1UVkqJL2YJUE4Z1KyQAcyXfsiK53eqA5RXXNTNsx5SNhKzT",
  "key32": "2saPshyv6GRBzTqBkssY7581WS4dmecZgHJ9EDqywvnmbouzsoP9rPw5dZaArgY6CzV4GnjBWcDDsJ8ybWADWitN",
  "key33": "to5nrzdwEAAnMK299fbwW4y5t6mWGJjgqPM4iL8D8MzAeRTk8F4jaWe5tKLSZWgVveJ9UnSM63HzzmMyLxatjja",
  "key34": "RqjpzvHpMTUr2R7LSoZeSXhUQUc5LCZroYZ1sBDcMqbWmrRSmqJZtpMzjma5AkFNjRLZ1jujC4m1ApEXu7mYAcJ",
  "key35": "bYXhVoJxPt9BrHqvBWFRNnBeRcRWUvWDvgTTcL1xrKtavA947t3VtVDC1WUSRmW3uKf7AZdMcKjFiYiQwm4AUVz",
  "key36": "UWryoTMxhFRFyKykV2mDFhuSqcarYkS5J6MRq7Xyt8XqEnoxSFLkWL89FKBREzzrp7dW1FRXwabGoiZCZziSaS7",
  "key37": "4eERT3BAZjcMfXJAnF7mULif9rjSr3sfUMD19M1qcDS95PGWQnkbAnUSHRsNv7cgikts4s1dpeSk6kM1LyBS2RGC",
  "key38": "4H6XYAEFvEaRr8TrbgydHFEGEnXXWtFRzEfJFYYd8owdWupEjmXHzLiQnG2rSSUEMMkmn2kwHQ4kS31L7qLopvqc",
  "key39": "3km9FN9h9cYkb1dDBhVbAHwbKp5ALwyDTxRFG466anFUeQeZcF2iXJCvi6HwaHg3718fsfBkDmgVN2AWFqoaixUh",
  "key40": "cgyZRCfK5hfscd4C6EMSMrRTGjJ5FxkLbHVi7m1tGrBWTARdzepUJj38nE4Vj3U5Ut5iQoojMJPgewFrMtxRuwR",
  "key41": "2BcPQMcrYKyTFXnzszkSBn2mHNZPG1TnVjSmkauUABCuprfhQgWWJDMro8Lcg8LE1uU4XLKAzXs3eZRRpaPdURWN",
  "key42": "2UoY7KueZPU8eCwuQU9Z3uaLNR83Q3UGeRDEXrjJMKhjAG6EpxtYvSoFHGcxtCasrdEKqo4ef5CNxvNz5RjQ4TGF",
  "key43": "5up9KeUXienZHzqgM1SJ2Q1xyAgRLVaYxVKqLdM8VeWFL7qe4S7vLi1xLZCzWmxGdXSAA3qgcg7HBoS5PByFdLg1"
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
