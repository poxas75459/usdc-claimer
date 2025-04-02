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
    "24nKUQia3Rbi3m3CEXB3wfzT7aLZYZza8iaVweWhj9PvyxZ5miJRVii3ZR2v3UJQmq4dcBqJwu4VkRmPxt2gaYqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ULGzD3t7ZrULjbHbtCXU5qoHtcuTbzx1w6X114Jbi5g7k91nmKVaBMszVw7qbdwPhv5GiJxxc9VeBvDz5zfHdF",
  "key1": "w6GjiKnez14FwTFnhtit9SjRzdLyWVG4FLjAFYSZ3D2esixRpf6KHNHciwJ1ivr8DAwbhMTEHqvChL5G5barQXY",
  "key2": "HMHjvCyJQCMPskHu4nzLQtVKeYMwk4LaEznWw4jTpGnNz6w4uvnGAgagfQfHBaAGrayeQAi9g8W77dEu55jFYDF",
  "key3": "4HA29wLnXWdquzbcq5dM6spFrtsAPb54gdH8579okPpPYxr3wMGe6nm7mBMKPdBD6FrbYop7kAnGgtmM37hibvwG",
  "key4": "4TRjdoEmk7341tLw1syQVgiU5YyFvYpYorP7BqsBuRZHEByj1venLsNEfNrwYRRDw7MDWhwVjhSG4qgGWbiCW8r6",
  "key5": "2YcJeKDPQhqn4YcXX83PcetuS5suFYzP6iZWT1xY5iD93jQh1RaXhx8vZrkLJTK6J5Xi9kYNTBCHi4aMapu4ZsUb",
  "key6": "2SxpHo6bh3pyZtjzvQBdpjoBDEiqzikAkehRFoGQR5Cyvbrg6PavF53fFg1PeBv37pPprGcwLkiyjTKAVAFQuvBc",
  "key7": "4nWm8bVZ9BZubnBLhZ5en26RKDaWcw4XwWDPJFkUkdNWA7KQgUjR32MoxjBxLeWmX6ThWZ4fNCVveMDxdzXQJ1pE",
  "key8": "4uKwSmFVCSD7C5AGy5MA177dayZu2v6P6KNG6yAQoXYUL5LJuhYar6cFA6KHNQZEaPpS1eJkBbjvSTDM4FK89vD4",
  "key9": "4kc3UM3BFCoWyZUxUEb4q8NAfDaGaAhvndHQgFh623khaKn8TbMz1W68FyeeetTkRget1Vhx7dh1tviNH1kpW8i7",
  "key10": "3gPX8hVnryPfggyWSnr1F12uRzTEcP2wvDNUL2K5pqaLKnGLAuMxVH997NnPokhR2E4ABG5EzeXqoKQjCkm97KQM",
  "key11": "5WyZCamA8GuWU9ULUHtk61jE1hasU635FMiXbNdscq1Gvuqgh3t7EhZ9JbUHKrdgmyCDxKbuMt1LaWohzsuAHkLH",
  "key12": "5qKshMEi1vbZCCNFY4FPzRaxMvgPAwkVjPX6QdbwcG2c2EeBtJtL4kCppTwysqpvFp9S1AabvC4jRSSvhpxBCABx",
  "key13": "5avommmpDiD9P51WRY41FN629J5sQKdZ51jrAhAsdsLp2othTzatErTwgWydbiEAf1Jpf6Z2bEtLnW8o3r3xJUGs",
  "key14": "3CcAJjQEm7jZiXigGeCtYW9fcF7CvrTV649mdjSPt43c1NG3vovtwehzK5xP5ALRVQYoPFvQeoVNXWjfM5hg1svk",
  "key15": "2F6Df21X2TuBNNTzbp4qxAJGho4DtVRHswt3snXPtppcgtJjwhnSkPQTAYwVrFyENTYUBsyiz13pZJtXWfx3iTtW",
  "key16": "N5fG8cwyjUWwpm9VP1y9Dk5SCy53xTypriJhPdJVmBQZpGS2Ny8vdyWuMqSgGVgvEQpQtF4kSUZYnHUAT4H2zFP",
  "key17": "3ybRnBesdNeZueU2Md3KdLSRoexGYxHDGhPyMaXW3DbK5bqYrzJ7rpWHVXGCLxtp5SHWyLpWVLXwT8wyJX59qs6e",
  "key18": "FPUGPTSA11dbFuJGPGerQamqwDavoP8rd1JAqTWt4CH3M2YSvPv7BEqaXFjhbYSdkqxxWbgaBmg3MKWcPor6mVB",
  "key19": "2wX7TBe7LECzmjAQkTr7C9qYBc9z8uEr13u1SvusSJDVa6ZR6KxaKqnGVxBvQwwenBpFBeUDdUMjmLP5iFnntJjo",
  "key20": "2pisGnJ9vK2GmbdKFYXzRHL35ZkqLzDJQ2EFYhDrsaoksrnanRJRU44rzffPYgFQr1dhRzHSkk79T6vxRwgU6sXg",
  "key21": "4y8fzFGYJ7v4b3EZLqSQhH7zdYof7bH2o3iLcyi9QsibL9ftrrcw9QPrjMvwdeUKYSzJYzxttiqLFuTAXnqQfpBT",
  "key22": "2SCtiJppq9RQc7SboAxpKPQhi3AUK1wRxbZ3P8KYGacVwnVGfyr6UU8ckdJBd2Tb8SF7tRT2ha23U1sZWfzXWjWM",
  "key23": "4qp4jkER6Pfy4Y1oiVAW7D1apfQ3DQZEEFFYH7jrYKDmrGhhkuN1r4QfD8dQwKgF4Xq71ACYh9kzQhCTuSJqFStm",
  "key24": "5S4eu4KMWo4VUbHjaCbrcb17REf3NvxBLj4pY82ZTxT4bj4ofBgr46sevnDQhxyFW8jueAMyozr4kLrFB2k4uCSH",
  "key25": "67LaeZ1CVDDa5TATSFn83gyL6iXZnyazw1CZzHYNoUXmSHA4xSZmPHpoH37tb82MFd8fnmo5f4DZZbHCxZjgd2bi",
  "key26": "515huoq1WWUhtQ373uWnkxyCqvfLowoVEiDFyv1xj2F6QoVabsP7qBnSDG9YnzvbJiwnJSukYz15wX7DtLeSjj4r",
  "key27": "yZc3kPAXRg9WmaWw3mi7PoqMLsKWDnntMuqYKRxyZnfT7pYFXyeqYTewofkSZoHFpYGGYvoNQQ9ZC8xbPLKQaLi",
  "key28": "k6PRVBAHNA2BDz4K4UPHYFeGtf2q6spKYMbdux7oe8Wy3VeythYVge4MvHcpFb7Y9ZNjKD8wL5ZfEZPh5qR8GTS",
  "key29": "3ghRzYnEi1r2AjVoA6LHKopMMgnJP9ZfybRczmBNmB8kPgWjxYeexP4E8ZVnbPUAfb8t2TVdmcj42NcjN8ik1R8C",
  "key30": "2VsJzMoij59UzE4WKMYUn9Va842vJF77HSYhg4JHbFDFb3ymxkBXbZBkdqCZ9JVk62BdPZDrcAKRAozdg985tSrN",
  "key31": "52qfcrG2pgTReShj3mZJ5ek4xJqyZTEGmeqUhY9CVTqqp3tMFXXPk1HbRABYweEeo5da2cMRiVz46ouUqcu6Cor5",
  "key32": "3bxduUuUgfvyZ9xkmXMuByEo3uMhWfQ7EaqgtUVJiimLCbBbCZU8355benU1efkW4GhdK3fqdzxi8cLmYGaygM1V",
  "key33": "3wCF2JjS7KHLLBj267AZkAJ3nsYp9WPatmNJsDAgPJ5W3XTWK5sCDVJcAtitf4RJSM5pN4UPWurnByzaowWskN9M",
  "key34": "2J6TMLnKzybAYnPfVQwMBSCd8zdGMUCcq6SLwHBy3aHihGx7UiK8ExWhA6vMnKCy1FdochrohB3AMHrWtAGqsjCA",
  "key35": "55GptKQZWdXmR97GqmCmQ1rshVxwkxjCzLTvU5oL6o2mzgDYkzC8r5nyE3yAK2zsxpfKovAyeeqicseGbox96szE",
  "key36": "2MkSFnx7TFcYzc3mPY1XpuktL6KLbJuNaAmH23AEVF8TT8vL2k1pD47AXinY1uhyBWJa39pPGefNTp3bvxn9xnce",
  "key37": "2WoZ6GqMbasCx3Rgtp7V7kMWms94RL25z1MP1nUMWjUXhJnHjupfvLTfuPerfGPHC3DYNW1QRWVqjeckHSEjLcrK",
  "key38": "34qrHinc4iAkfyKi3HrqDbqztgv2o8faC6wMP4QzHPVJXumPdTm5tuyreuevi3VaFjXUxYNVVKRyaBRFV7kSK7GV"
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
