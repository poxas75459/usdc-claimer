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
    "4APL8ctTtsMxvc9ZDsqtZZPVFvroyEttuatPYTgAjnuFMU45VKNwcrbMh15MmAeMDJ4Ac1oLqvQ6iW1ok9fbbE2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJbthRoyLPAv9Ym6YXEZ27HF7heUNBH71KYirhzS21QjRW9CUkCD7LrUQUWeXVNhm7h51a1VFBy2bVmjjWSg9Ng",
  "key1": "3gHVEKCicZJCRyFMnm76amhY3JUEH3iFXr68RfTi5UnFho6pf5wD2Q2UirYXmkQGJBbYsRQs5CJyvuaJraZxdNfW",
  "key2": "2itNoEV3iXwkVvZvTJsBMM9CquZiGM8ohgG8bAo4Wak24RwTiG3j5tBmWcoA4UHbt7aBfAUWnAss87TiXV85z777",
  "key3": "4kAQFCdbKv2Q2E4mbVa3EPoB4qQ18xUxjtYmpxxDBENUX9W5rVEtDcfdDdYy1aJdUeKepyHZYFVyvst9foCx8gCv",
  "key4": "2YjU8WR7sksiUGmFtgwgtQqGBcj79Nt5Hdxk3sNPdDSPosLKEERHmA792qBMTpyMNQiGr9q6SudssDivi8jLeaA1",
  "key5": "cYwhBdazgEmo8pVSbneYhKL4aL87t3xrsfcnDAF7DiFV8XqvofQmqPgMVNTghMi7D7RXzy824wkiMjWJSppJnqV",
  "key6": "4tnwZM98cUMYfDwyofR7oUQWcNmEiFGS5jQXvcoPXcKbMPgAAG5GZFiskEA3ZupwLLTYV2WuDJR5iRy6wsXT68Zk",
  "key7": "2wQtWruMaZj5esVHnjqzbe7hK8a9HffnZtE321dAjWAtQMpzMTi3RN2DCyC9f8qdScQKx4UxaEc7nNteH85fmP5m",
  "key8": "5LM71fDzRYpDYWZHCs5LJQUdo25k7bGWmKJkcVCoD9c9RgEfTrUM6hJ8Qzj7TSnce2TG8twnYtwjytf4J32ag1xE",
  "key9": "sTzT61buEZPxEfYmaQ1fsVp7MAFv2rAKK4SZrx2zJWagZDtrvagXPt94tNgxVaNAiHvvguxdCcgq6DkrSn6CcbM",
  "key10": "rboiqx1wtEXk9m7JNjzjXe7HRMr4AX5mmnRHsQ5FzvUDpqUNcSx7KPNJcWV7dEnct8WU3rqs8ioV4A5FypNBgSb",
  "key11": "2froJDmJsNL3YoSvemkW2GJG57k9BYj8QyH8Q2AWwzNjTG9UnRrupWAE3YvFA1WDaqio72GVzLv91AcnE5XDkFSj",
  "key12": "4qKJkYy7HHeuYWvqk4jr9aQPtcs42afYySnT2mhaBfBXEnmBD4Z6gUdbcKqhbn1PFUCao3biXHeY3kdvqsPn2ZAC",
  "key13": "5EyBNwUjXYXvCRziy3ZB4xAa3kzpJmZYJM8jjMKR22LHWHzWvUGxRYVry5cvmUee5oNJ6YhScSSBAg1g2pE8qXu2",
  "key14": "56z7jwU4kVuMeuJzUwYcwVi7Qtn1zE56ggGJto2EpMy238vnYBR2E5KFokjRLEZj3fKEXiE6WBJHgZBcAHzdqxoF",
  "key15": "fd3cRSnLUS3X5BAXukSBozzJgjECf1HzVrCoYLGhh1GRGuVZqBru2Nqs1WeKUTgxqrvyu53d5ViEmRTgC5XQt1p",
  "key16": "MLDxrNMFVQk2gHFA2MAGzFNfSdfpNL5yS97DdkJEQtbnxoAEwoqJtg95YuZMt81qTiA7g3D2n8NDwKB3fJkRfTD",
  "key17": "4DvW1LeUba7RE6jZ9F2YXcQ2zCAk2p7LEW6ghcNhvQYmfMKD4GHKPmicqasHXcvZwYcWD95rBkkzccg61CKu8FFj",
  "key18": "3fsgdroRM3QV5EMYZ3g9SVrbDzgWmaKxY1iMYs7szhJ5D6GdeJ2KVFJyv6YWRXuVHgNy82AzGGrUDzNVTi1U5FLw",
  "key19": "5EQ7Qu5aBmTsCMX4saVTkiqrzFmCLoAK6P3AV1XPb1CeVhbNyTjPLkUqwgXf6dhtjgzw7BLQHioaTBrPbzydYLaX",
  "key20": "2Z3hcvfA5rTZtUCBxqbYpt3qun26DJpfhU4jDsZQjGagpKc5LBsvk1ABhY4mXzqxyYHeHiZPubWXihf6RAjMtWnz",
  "key21": "3Mm1krrX4fFHaQ4Za7rUZtcHas3MAv2w9Qh3HBXSnnS7FSAw38gqVvLYQyHav4kt2RtuvGmoaDJTMaFwjFj8WhFQ",
  "key22": "35MJsd8TPTV7axbhdfAdkCxXnnwqdPBd6QtKMVC3PqbtyRnSJLt6Wd4gcpSEveFN1ZX1nUPx7oqsqkouZsYEZAr5",
  "key23": "AjJNacCAEiKsCGjDD2Co55j9p5bsJ9zxbWMebvVBNCh8saVmmd7izLYDroj14YCUtAj3rii1oMMjWdZJpu2ZXRm",
  "key24": "N2LiqbCCfHRHkjJaUQ8JKNi56saJHQouJg7QyKnvcR3CnRiMZU1QagyvMSZxwHcZt6YzTxm4XTpEWvziN7oatj8",
  "key25": "fnoSWqA941Ne7CszbYWWkRoPxxH4FRiyBfe468zQU6bh7den7YGkHL3SSGgzXhtoAepDX2PQYK8r771PLLHnnzA",
  "key26": "PYuoYVDnDRfPQzvQKJ6DPimPqjuHtv3hAqnCZqu5W9KnkNCRDFkr1ASzKsqPGDMfftkYhsGRE8gQfUwbdKbc6Rn",
  "key27": "4q13YSfWn8epzaWab1jo9T4zXn6o9FtR4TcAPRZ7dW5q2xSn9Uj1FC5ehp6Q6vtZwx1NavVaAJs1qc4pKpu931Ts",
  "key28": "2cgcR6E95txffihHiZ1XC76nM4cxrUNXMoa9AKwD3hCvkCM2DikufDbnrRXDwe86VrUVRdEuP16RCJDWtRfSj8w2",
  "key29": "2WJx7RRRHdYUoHwn924iyFwt5AMSPvrAbN2gmHiobrqxqzyRB6vHzNf4upKvfCyBtxtZADY1BoQoikr7TEX3qJec",
  "key30": "43FWJbKpzAw1q5iWby3mQLgmSup9euuSDJeVhe9MX1QYDpVAvouXe42PHAoSg2gpMMAZ3CSm2QjizXmia2jx38ii"
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
