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
    "5hDJSokmFkkJkxRUmjdueaQzNZagXtW66eS3Ydx83bn2S6ti3EQpDd8CSm8Vr1uL8PduxmC7XyCU87xLy3vSYmD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFg1xHS1a9jD458PHcrQBP5XY1cx7gZ5paHdcUBKtw21Rx9SCnViapfLB19zvxr2hdn6mUxbGp3FyxZb7Pw7a8L",
  "key1": "3w5FL9BTwDuA1h8ezunLjCWspyYnHGjzDSnSWEHazPFxkDQSogndqwSekgLVCDqQs6cNCoV6vgKmFQ8gACHq9abA",
  "key2": "5U1h68qsjkmjrLQk3wDG8vtSqFHRLHYprCdhquz9avoZgWJd31osvEKWZz2Ui1CnUz24ruyc4mamEuffpa7jUnMH",
  "key3": "4cig1mupB23Rb7ybpFHQ1P2ycJbh4AmMzVDs45TnhBtm8F4kzLUCiFmvdEY6hTuhFTNpvsAMMFiCnLeJXeQrijci",
  "key4": "3kkGR97pgXYbAV8Ejza29pUiZHgJuukD5seS2zKVZaB1ybho9CPavx7WBAFuTkBLc2Hqa3e6mUgTvCZsEKA9wMtx",
  "key5": "3xUBginy8FQ8JVLZrWZWwwfw3NPh7G16ecFFFLkxyqipjwWC6UrnxGMgRTTCPMknBkUNuWju28JeHv2StkzDPxcH",
  "key6": "2WR6r8ZuLgzcZfzmo63BrKVUUYhEKWSfm7CCfc3a9xorkc12ErAsHvhhhaiKLHmWrZYkfkqsTbJL2ERwtK67WLHm",
  "key7": "5aPvPgFWYBXAd5bW6WjwnHVUVNndkYchyhE46Preys8kxZr4LuRE8RBmVHKT26q76mxtzDaH3E5tiWd6zad4M49H",
  "key8": "3GtKiJBnbnS9HezwNP5M7B3nzEz1s3L6vSgeUvgHKUGuLKiNjCkBQgRZp5ueL7Ep8LnMZ9GyPQdh38ZPiEKbvuey",
  "key9": "33AAU9ekdys2sKYmo3ttW9MfGA6qmehba9PrCKa7ZjDbwsi4cSEd4MDUW5BYGV96Ey8ytTnncSkwVrSNqpNze33T",
  "key10": "5ymETeWdQDMuKi2W2MvJwFvrk9fpR7fqfk89KBvBW9cE3Gc2zPhXdd1H99TmyQKcSAcBSVMpsEitWCuWtGj3gfUc",
  "key11": "5CwXGBgAPWXYu2AkwtszP54os4VpzDgu1jpnRU9VFmBGsa3HVuKCVsmY8eMhVd2PNNmxEcTqGyUZnGTbc4ShJMRr",
  "key12": "2ZE88xdbmL6hdqBgLFx2nrMEVp9MYp9Eb7gRdBsQypKnBbHgYiNdSj8XBjQ7gSsKgy5FXr1NsNoKAPqkVcFACcq1",
  "key13": "4QBY3CxqwLT7vAqrqGGoMT5xm8bG6ffABA7eWGqMC5ZwbegtSdU32SrFgpfmzmE7i3N866Q9KvcPHusZvnamxQu7",
  "key14": "hoFqBeMFhE6A3dzhB2MJxCnobkcxGwW1jBy9UmAQQMYqtD2nkRWZdrUpvCfHUdeg99ReAnP6JVkP4FsnH3WumrY",
  "key15": "44vM9h1ioSshk8iVFfrRkKLCk4eeBrmqSNieqnniAGznj4NeQSoXPnk38u85VQ3gg65a6T4m3xs7cRMYGnBhkDPT",
  "key16": "5BGypPJPRPBpUUKgZ6jk3nq3k4EaPeTEjAxc13CrHNEdoVamNtRbLNR9JA6Noyh6Rzp7LzqTYQ1o1m1HiTCJtCvy",
  "key17": "4baf2uKSdSQd6XCpbmZbLSJXhD9Buo5JB92AzjsuuSCzMzQJYwaN8khpjrZzxYywa5VtQpkSL8ECUf2gBRphTGhU",
  "key18": "3TyGZA1E44KrsaZYFXMiMJiNncbDuqwfid4RR7mfRRfWbm5WqWxBJzKAk4SzbYTvaCbmMTAvNW9e4vBvgdDiCRf4",
  "key19": "2KugaMezcFSafLPtCqQ9u6Qjk1TwwnnsJT6QfhhvLF6HhgrjycG8HP2Cmh8VFWcp2mHCLsmNZ4D7heoxD8iJgaVG",
  "key20": "5zesbsQEsGaEfcDzhH2VPqPLbMaefVVphfD7ZwoG3H1Lp8pVqpFFfc931ze4ivWYczvjEo3cJe9KheCBqkyBAakD",
  "key21": "3ajTbv3MMSFG2KVwjNnXrm7ZysbgoMcwjzJ4a2bDau8Pw9gQ1qdKoxzhmdZNeqhjL3VAjBgjk8rVjTZM6J9yuBcd",
  "key22": "4ducKtv9SBWV8WN4gQY9HPnbsv4kbFCRJvCum6swqZY6kH6pUcyxqjk957Vxp7ZEVJr6aQyY1bGS3Gv5WDN9LimH",
  "key23": "3iXRMz8iVqC1PPd6LU2N8PQSpDeC5XGtXTyj8vvQQHXQHGEBvdktsh1ov9aEKxyZdaEcofGZ1MyJN46d8QpGMXAL",
  "key24": "4zNsnKCeFYimb2dXgK4jnwC5yMDnDm1dMVwpynt8GttwzZRQJps4P51FFz1AmT6rcacuVWm1M6WcuWr1tWZJoGPg",
  "key25": "5V61duDAM6MUzhgmRnZbcPCUyLc54qx1V4XaxQKmLYt8vFAvXLE1894tniZuFTLXDtUszpfGBXT5LYh5yASjFnAW",
  "key26": "2nzCYimfo6LhFtmLyJoNB7q3yjd3LtStpxiqTgoSjhtJnm3XS7gDGLGr1H5QqGztc3gY9Pzsr5bkTfXLqABco2au",
  "key27": "4ZQT9WpJDi8VS7orF4sxp3ZEZpE2bSWZ6pDTUuqPmBoBCbU7Ke7nWEyQ3AAunnuFZUcCibjekvThQtKx61UqWpny",
  "key28": "PQUDoWn7H4E9BaxQTPGyR66tMD21cSwsFaMEiYjWiSMzsXuSc8t2tNrKuMDmAjA27oy5PrPf1Bbana8iTTNmFgf",
  "key29": "3xcPnZsCaS2ujWWzqqvkK2AzN4zDwZbCtNCiRkNocZbddScBxadKN8CHqUqZtMm2icLv7M1qxsXbpauZVGZzLzBP",
  "key30": "4iz6mUz8fVF8fW8BrppzFgkSA1tmsgGqW65BtgAsYdGjNYv69tRgtqWEpGpcEvkvsJVjzxkiEjq3qvKKRMNDcsQS",
  "key31": "Rxg2NZmfuHx6YyrU8HLLn6QBhftYWWHkR35EML985qARJrL58Bfz4qxq4MUriv7bKDNNeHj1kZzMJY8eD5bARVx",
  "key32": "4aehHQvFMfoJn7Jzqw3hAwfHUDuDimvqRmsJQnJU9N3dTQP5qzhAnuRESsh8L1VS9T3wonrzWvbtVJQTaZoEv4zg",
  "key33": "3wRGFMVAwQwXKMzqDiiaFwyEh7Mx2gGxwRE12zmEQxsaAdmrTrhAKpZrMywCgRGyYrHi5egrXMowFYuNCc8FBvVm",
  "key34": "97Gp5dzLBVE9NxxEWJznK3kZpUDs25JiQF21zVGtoX4SdFSGsrF3DKNYJ27FGkBrQq29TbnpdNtJWNZhcKxczfC",
  "key35": "5d2EZnjEqC9ND8CFEW3yV48LwJSqKuysWgNC8bCb2BSs9iz7vF3ZGpNQBPhk2c9G1EBsbZs2t2ahgU7mC4amijx8",
  "key36": "aEREtGqgZSYoiaXHXtX8HZcdxgDX2sixqpfuhhTgoohCE5NRaktbXxj4tWSbgVU88hU44ohKcQ9MTdFGssquG91",
  "key37": "3NwXpexBtGGTSGiZznmogNK3MHSzk1zi5EaSWqtLxUrASqVkpStQ6DMWxZSqiWCS3TnwnAKMkgfZLgn8aJBaCuda",
  "key38": "5FC3BuPwYNUPomEyM638KcxGMVERrkk9AspuHGAW87qzUpzbjdVfdd6zUWY7xZ5dyB42bmqTf6XjC8ikjEoW4Ao4",
  "key39": "5sFnpCL3UryNvC8J1mTBESLGWpPPQZvbVU1Dm9gWRJPtr9pdJU8yqvvJEMf3TW89GfJTaSgefjFKxmSjLhU7meLd",
  "key40": "5EXVLcyjYJx1AnbauPnatcdREpMeyZDCr4GKDURtWB2hJ6Ppe13seTtbKXQ3XsRmV1EJpJ83Gzn7K4cdey9JctR7",
  "key41": "62MoDoAA35YFwnctcPaW7hytUPneQgwjLZrTB6eK1moZRvtSD5CJtNE2Q79ks6LHoEMqc9L44Y97kSyA8UKqBmCS",
  "key42": "3mFqsnQ5bnoigkMacLnjCoegVSRF4fsv66vfh6r9R3Z2S6xWCfpSxptiffnnXJ5xu3vJKNSGRrT34BfBt4i5T6xA",
  "key43": "2WWArk8dTzctDwJUaQLTTYBaNox1BF49UfE88pNiJ5tCmft1LM2TXopZLpXF3xpg6xVczUWFarHzXMuNiaxMKHE7"
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
