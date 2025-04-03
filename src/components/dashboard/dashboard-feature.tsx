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
    "2H1c4ujWKJgZSMui7kELfyGRZ7o3zwvrXmBKfg25iD9Y9aKQa1gFTSYvQASzoTMLmXJRcf6xnRJa3D2M11j52Lq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2de21nRci6vo1WsUdsjwpsH7vxUJprMggNhgP31yuUdrqRJJK94oZQz5f62tFnrmoHY7FBi7hcdJM4KeLJLGsE1w",
  "key1": "5aLdEYiTYjTXaK9WLt7s5YBZi4ANhAPATuqaevvaFmLTHFj497TGfXgCQrLPkQ2H2LT5P1TpHZUm7ZSXEeDz3PQ1",
  "key2": "2Xy7nD42kWc6ybd8NiywVdPpPC9MAXZgVmQCmAktTW9i6ZacFwvujniEgsU2u18sB5CukVxjUtQSq2815utTqnCq",
  "key3": "49Lm9aV5pP86LTDNJsdWzMvZ1hX9hfeXgDhHKHBZYKFtgnFqcqXnYFr8CfrKaRiDvgCodruUSV6E74NCcpEa17c2",
  "key4": "2YMH2SrWASLrwcyawAXBYo6gLMWxmTVYyF2kkm84bJiZGERrn4BaBrm753mTgnSVPLMXJ2NNJhD8mrMX3yvqW1aS",
  "key5": "45j3aEQGLTJ5WFPP7rZyq1mdJLPAWQdvbFafCJioUCDsSwDacqriLvV9wiUE7xBCfivqzsE7cQ7xqFfsQUBow24n",
  "key6": "4aMbhD2wMTXvQfsnmQGY5Lr1P8sDMHyRt8BQWXCq4e8tPpnSNWHdA6USR9ZZG28mMzJYiBvCjwTSQv4mHDysudHv",
  "key7": "2r92rXviYLm4g1HAeXb6t1Jwfo434AGv9b8RbdHfPhA13rfNrH2GtfDoNKFjMcBJH8pqpj7Mu1f7Sgy19Zimbdkx",
  "key8": "4axVG9UnXz57nGdNS41S2Yf2K2JF7WtuG3xf4pwdFfkxqV3TnSdiMFe4a2anHoHeo3gDRBzS5cSQfqrTK2F7n73K",
  "key9": "2h5TuiDF8ERaVxTr8c3YVikNrdypwkHKTw8vcge8U6UWQrNzmDiX1uTgtKBGBpu19VHCYJyBEPtYNsg44mQLEqPa",
  "key10": "U4FsDsqUgsCDp2LhhgziZddbKcmD3YrDVGKkAjobcjvPPz2tyYTkLxdLSs9qRU1v8XhoCmBht55xFvWAvTqPGAv",
  "key11": "dJyW1wNpPiYLSuDqXn4F8JgUnwAw6RzaS3TpijgdoDY16k515F4vPqifTBgWfnU5qQJ9PAVBMZgg9cgRBV9xu8r",
  "key12": "4gMWZ5ud9h5udneomFSD5Q59q7oSNwR78qHmLCiZqmxe7nRFCrXWmtzv4s9nDG5wXnngZVepxe5nY96q1DpzpNst",
  "key13": "5jpJrvLBpRJoYHcbtARciLQNupT3mH6XWgqMaC3zPeE35wrefFYTAU3VsmUuFW4gbGdJgf86QAHC5MrFzzZHw8q1",
  "key14": "3tNtXBreZ8oK4kQEqL5DZFPGxzrWXShkySM51zhKEzqGhkwaYT11KrzpKHRTqj6wWDkbzzoZL9dsnQewyPoeZ6Fe",
  "key15": "4fhzusBjHssihAFFdWAmfCuVVaBCFabqe5wJhZFycVnKwLB4jmrQvt1MNZPQnhQZ2T4ScuhNgcN2sRH4x4FxuBv8",
  "key16": "7PpofsZ3Ar65Nq7z3PXXHehmvaKd41DdQUpi4YtCkJ23gGFxuRUvGo6U7ysrDS72J5WXa1bKU1PpYDx9bhAKSR7",
  "key17": "2F1crHZijMQMjKwBs4gRtzp9B2q3XqNhf8Q2ApBqt4dvnT9upSNGZyMHAZiNdiWDPqRD7HfsqjmrvjeSCFkaBYxG",
  "key18": "2CEmq3tdVFKLK7UbHj2r57nrBFX6paF3DV1sQZ5o1WZ1aWrjH1y9mN2NcQw4ugeVzZuaCiUDBtrXiUs4HJ7q5jh5",
  "key19": "38rbVmg8Yaiaz5TuxRwMeMdJLksx6EeyoCp7rHhosHeUJk1cWQcEExBeAE441WKLkbWW9D695RqwE2Eq9tW4cvRg",
  "key20": "EEBd67kqUvLGdsVibmSH1Rddia8daLgSyWXKQuYRVS1zBrSwNGifWBDg6iJq2Lsmo2bR5LHWAGoHc1ZFeWZY1e6",
  "key21": "3MkBeVYBf5ybAix1RRv7XRtNBmByFqWnmvRPmt4v9GrYfBvzFDcJNDMJBLeWrJa7Fu2zv91bhYS7UTavxBJpHRZm",
  "key22": "4UXzP4T378Et2eJwYGJdcyBCef8awj8eT1B8GREgkZx41C8CzuKTWYVkP7XN8CZHUdWWY1H1cJWYsZ24712ivaQs",
  "key23": "5DUSKPDSQmq9yXSXrcVTjp82uCv6H6ZE6az5rGoNNjfW7ExGPxV7gfrS1pcbgkLFNFUvTGkiQSmux5pm6GxefsBr",
  "key24": "XEs3Yy3sUn6fuprLRcLZKQb8adgSufJwZt1J9Tm7XTqyRamjm2ZAkchaprdnygrucPHxdoET2rPELkKwWnyrYkD",
  "key25": "5ai69isoB8apoMx12bhDCCCiTRoWPNpREH4HxeKsCvTijAY5fHPeAUE1R9NjhibZUU6oJ9wWH3M1nzhudQUwzbjf",
  "key26": "3vsdPQj6bZgWH4hX2q8wLC3kmCEbR2TmnJSjymfwpVigTiPLuLxpjgKfhGy1FCFD9Zotr37M7RWNErrfzsKUNkLE",
  "key27": "3qitg9HZgDv7b7VsyNLqDSuJYgJXyVmVrzQaWPv9TdeZ3YSxSVh1S1us5obPA1Wj4s4LHz4cRuKypZ2yxzNoJSg5",
  "key28": "4PPnqgSxq2tiyqBXnEW9AJHzY23NSRxCuLqoxJ9ri3NRs1WmRsPm1miZ5xCmNo7LzH1zR2p6dVShpMsDC9tJ7Ccj",
  "key29": "2zA5xJGCKK3n9mUYAByzC17aUJqHKNveS7sbMX6kzhxo7skChfNjjkGaVfNPmchCiLfGvJ5qLJH6Fp7wH6SBsic8",
  "key30": "2BBcgxptb3dHEmqyMF1JCERUBtKnbLGSc6Aq2Hzsdw5Rm5WYU8bgiRPQWvgwUKC919WqmBBCnquxeZW4R8d1jSWk",
  "key31": "346dztzToCPYwWLGQMSfb2xiWywdkm9Tvpy6AV9PEDtiUckpsPrdbTU1Vix4Y2H9EXAoV5oJBP2bFCbadkYD6f9B",
  "key32": "5rHa4xER4JQPdtrqDydJft47rF6XaYn5dayAUBNTvzUQUDzgjWf7mXp4HgoPVJJnAeGFcLz4qXCWHGBgdJcJhBj3",
  "key33": "4ZwcUhhgac3MrPL2uwyamMpwHcDSRpsmBM3W7QGjZYqU6XZw6tmUBiLMKEtndQ3XtwADLPzgPfixPzMvn8AgGRxm",
  "key34": "664upiHbpq1LwpqTsPEBJfoJ3XXGLCGvwrpMnm9pLggL4DQsb6dYbMgSjhgcUkh7Zcm4snFGJwfJBLxieuLnXRx8",
  "key35": "2MAHgfom23RDgeN9SiUmjH7x3JYGcq62SASt9DYaeBe9x3HJUoRPUY9d64oYh7KzxLA8adn7F2g1KFB38twTmPYV",
  "key36": "55NrXbfvEqGA52HN3VwkQynrPLWvxESTFYvuxcjxyDkNWXvgDi8nDhKxESPtxk1NtLaLRwMAVecedDiSt7ZSHVnN",
  "key37": "5JKXsdWx1U4d91QQobZxz5LtmqA2DW8ihnTqrX9qJ6NXWw12jhGVJaWe8cCSwQqTkyjZ46QAUYvDQFbwUcAF85mp"
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
