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
    "298KTWRp6CDDoS4GxLJEwa6LfSHBnEWcAHmgq7onQAgg1pcP4ZQqGxi8ET9uVdVfXVug6EycUHgZ65jvJZciRV98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vTWn2KKJ1UB5LS1X8TdKggEXHBgNLMQeXGVsgX11WnFMR7YrSuQKCqikA9eQ6ffQXohamVxrUoi8RtDSYNPYquD",
  "key1": "z44C5Mb6PSyGLZNBySMYbeopoY6MsZBi8Zcdt8tjBXHiSBXhrwRmJhn3U5w5p293Tr24YQm7np2YcpU5LuDd3NT",
  "key2": "4rfZoZrK48epz1jSwQZERcrd7MJHFTg4vEpMj6wrM5xK1BeNbecPAWKqoehGjCuUyrhMqvJ6o8BfFnY2fP38Ndqc",
  "key3": "2unp6W16aWAsw9cjFLQyYfRe9HWsyUGsmJcxTnsw91qotFzmd7R6FfWmpABUn6ndmPZYg3de8TK1wUHrpL5HMNBV",
  "key4": "3LUDSU95ArNiUA5oHWd4apmjBdw71JEyA9iQk51DoouhrUvtU1G59QJ6Nvq9TakJ4UcbPrbtPNeMH7izboAH22yK",
  "key5": "2GU2XyrMRN7UhjHz93ZZAcT2oYQLbx3kmFtgjQi9dduWybhB1KqCeGuiM2qo4tLeKQLv2ainENA1Ss14FpfvLpxc",
  "key6": "2fAhYeGQs6QtHF17B2qgT2UBsNvz49MGuufVjdrk3c1HmnygVVtoyQVaJxwkYUawZK8HVkHnbUrD3KyLVoQhSkqs",
  "key7": "4Ex7QpKNjahdynX862sR2D4Ei9s5QjwoLLFmrZ14hDx9yPcw38yxfJqScniuyFnDJGfRqG9oazZ9CfyTi6ZJKoHm",
  "key8": "y2mHdya4YTedYK2AeQHCHRw6iDmvpeKSkgTpRukuy2duoFTJm8iLXGfYD4rveepMFefFu5N2TP8xCosAd383aAT",
  "key9": "3ixM3u9wZaYY4K8L4hyXD6KK46e8CESkuYFG99wb4qt9p5KQUpCFF9Lxeu6iYLPVTDyd5kzMAWEYRddTXwTwZqcc",
  "key10": "4Rewc7iZqPLEDBVwH2QTz6jjyEeKPM9hsJZic47PJzCjjAQmNDbFXv1okJdTwgCJDqLTtF6puBmLDQ1h3agufmTQ",
  "key11": "2bqoBjJgM4HqFS2Z4GRRfBkevxPC17iDKWT9bMJJ3Lwdcq4uhrZ2V5tkGNn3sPbV6rATLCEfgkhMsh2cDLBM81hq",
  "key12": "5fGVPmNtNLiqkBnREkhsWBaaNrr9e12vnU4mEUZxJRST2bBjGskVyVR4trqouuzUhuBtFfVvgFFy97zWVTbk4U2K",
  "key13": "f2damV8koFHs92K4cR6dioHDSznrJ6DZ6iSUqdebQj3y5cUeSAr5sdiDa2ituEovdj7tqVn2Ye9hLSDocTG4bn3",
  "key14": "5s4spUnfxrbuz8r1M9XE1ipot5Gj89ooDS9xVRh4gzCNAdwnSLtYjqn8YJgLzCDQfv4zLrmBeVoRzKWRM4q1iBUY",
  "key15": "47Gz6JVSUhfGriiwuZUWwZacQfhpgQKYm1o6XDky1hMCLUBjyJaZTV4P9mk43yqSpX19RMXP7jkeMzwsEHGADaP4",
  "key16": "5DhRJL4hZNWmnmGjWQXfHUzmQsZuQMFumdANZizYckhTzFCEnCGr1QtUjAUc5gPi7yZ8QCEfFo4YikmM4BxqKB1C",
  "key17": "rfFJtjGkcSPTX56WhJ97BXDFXumYwS83LD89Hr4CnUtYLGMJbocXxTpgTK9vGwZe9wyT3S4RynscJsfMKqKBZrS",
  "key18": "S6QsJn3dWSLmy3geRcuhF6JSatSskY9SD9WsXnJ59RcnsAMDvQibxVDUnaU8GxvJhZimBG2s8ve8gtPFbhmmwEH",
  "key19": "t1bt5Arg9Pq7fxVe1EFexuD6Gv2NXvA9Y7xL7VsuYcqRUwHkREJa373SaGTM5Saaztp8DEZczbndysjqJkBEAUK",
  "key20": "5zEUQkiGaUGeaTAcqiDRhrwzQf8bQWg6p7mPDKVYCfnBAKGARJri6qSFGrAQy3isccMVeCN73vmD7d8vA7f8pFc6",
  "key21": "3bkZ26ynxtwZyYgBhTrqjALonTii2idxDLyFNyJyiAfR6uobBp5Bkve8JuDDyFXVKWnyYwuEeWofchScCEssnsDP",
  "key22": "gLSjrFzF8xGtbMnwf7MAF41UnN4iTeSF6MYpkvk9uRuAFm1NwBD6URczL6gCD5MLWJcEGfkLMPfosYEz32c9zqQ",
  "key23": "4yvaSAXPjetcTErmhd4cijFKRZiACmbucUfPxMVHVAMGTsPg8NkY6VQiwBtBvLAhujr1ZKohScAbF2tQsnJ9dvyk",
  "key24": "3xesA3ZTbLfYQf6bBZ1CjBw2BuZj67nEEoBVd2i6wBGwa4H4boqipU1advV79ot4C3TyvVWv6kMdNZguTW3KF2hM",
  "key25": "gPWqKQDgaBwQwEtL9koX1r2vPQvRAWhcb7vYzu9DfRSnSvGvGZA4aVkq929SSoqxUQiLBPNcA4F34B7f85HFKmd",
  "key26": "3E9SeDGYcczRqz7U8cTe8u1rQMEQJsn6LMJ7sdsQbHJfGbFP6F8Ua2X2cWymov6oTM18EdQkNDSP431FvkRax743",
  "key27": "36Bf4gKFdj8194kUxp1XKXPg7s3qsv3f1FdQfMvtyA7cjCrpLbT62rFSKhzLjAkDodZR9XVxvuPKyQbTUTBtHnRw",
  "key28": "qiuXsJBANMAq8pruQPVVjdoUSSe7JDCYWFHBQY8q2muvow6zH1JH6n2BiWgxFiDCwZzwouZQKCJBrYRPgaSKu7J",
  "key29": "FAPp2fFRLhp6x5VMtccNrFap3S4wDdt9LMFKPNJaKJmP5eKootzKmBnLv3EwfKcggi42jJNvySqxuXS15xBqYbT",
  "key30": "2ihUmMvQP92qxA12UE3wXAE4ba8mEJZ63rNp5jtMExk1a4osntEUXqFFWja5G425fp9ak4spvke7w1Y3hDEK9Hj3",
  "key31": "RXcdvG9CjacnfBKA93GGCcWgpA4f37FL636B1shoXz9724tk57g5HNPtketqCgYV1t57GCQyPiMYW4uP1kexGwM",
  "key32": "5YbHjmuwRvqu4ij5o1EmBLzH5X8HZgsaUffaTZX5mbDiKpZM1jq5kkdh7MTF5x7S9EcPPXbLYFubGHkRLTMv4Zj5",
  "key33": "2xB1wooGTU41YKkoudZ9V6kTpDGf798XJ6QYicJiphDENgvW9KaWESxkPL8ofUbzW14qphZbYL9GgKTvTnTRiMf2",
  "key34": "5odrfwFpv7gBtaSgnu4s7DFmnwy5moxFpbFjkRwNqizuxmCzokfU5FWtrBRhjbzTL7LKxuUj62oPDF8Dx1ydRK13"
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
