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
    "5wgJZErM27QsrzGcFTVUNMC95UaZhWUKbUXfk1YWjcxs93pLD8yL7Qbu4SXadrWREJc6LAjddqAbbjCfiDRqf66h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37amzqAm6e5FyGbgBVj7keBRkforRwtM7MhYXw7NyaWKDq7q2UqSWppdTkYLtLoFJPe3dp6Jqac9rzMo4CRoC9fq",
  "key1": "3hULkWgcaGM7eLFdS9ADinfzppc92Steu6Qtoct6CUuk8xrqrpNoi9wViu56hHE7W8XaQTLvy57pZrTyRJAnYDwN",
  "key2": "3CzKFHE96AKyytFHCV4mDyGNMwwHTtwtAZjig6YAsP6tDHzRYMyaqPUqryhMY1HmVhPJqVYh9oJrZJKYHrfu4KwG",
  "key3": "r7KxK36NW2d7YzzxUegAYNnzvJZY2ywBPx5Wq8P8ej3TeZf8qdtP7nVydU6JPKf2Aey388V67jZ34it8uDbgU2n",
  "key4": "59KVWtH6iJFQnCoy8u8sDibqeWBKRsJuk6AwgmWWgzehcPywksV8ZvmhkR2UPX8ysUfcDwpUQkAsar455o2iAW74",
  "key5": "4kf4G4TfHzJR7nDQjgoDvSaNUVqFBcW8QMB546eM7uSDN1mXenAaxYjKaVsoKFH41yRMhgmXdc2UQebNSExUdygD",
  "key6": "oJsvFMAPopvmbgvZPe7ayDMPaYUBWKq9ecvMzVomKktwwF1x1b7vzMyE5UnXpt3R2W77YYnkXtED7KDkZLTYCvU",
  "key7": "4nYdDkk9kGRQB2sZKrEXwU947NB6xvpdh88n8TnxJ3sp8GbejeFJymAGLmhRrRkWVzzkGHEVL1pAsCFsaUvFs7Nq",
  "key8": "22Cy6aCk4c1WNMB1djaSyfJGob1EQhigo7WSGmB5Z8dz3s3fL48raqjAVoFwbNMAszbLN2gK1EhsuiEHBWWKjZuX",
  "key9": "675m7AbAMJiWS8qTkYWht146J3Rna7HtC1aFosiyWbqMjdtUFugkrNnZoztG5PfHCPxPWYEQiWYeGAuxQpdmjE1x",
  "key10": "JqdqHcGvktXGmLEeoxyUAmSjgUczGHNFDKisMw5BdG6EFDvQim2ifFJB1iF9npcN5mqYaKZqSAmkr7pZ8btCx3R",
  "key11": "orVh51HpwfxActSTZuhE9Q1gcTdX3bBMJRPzgynux1WqWFLZv6LzmfJqNRDpX53DDf9SELQubLoMHPPhv28odmb",
  "key12": "2VZZrD61wNghuGgXjzWMTpGgxbk4yc7LziYhYUArKFpNXHNXa6f1pnsvautRmbXY8Jcf3ciTg9bNKSqXxScVSw2j",
  "key13": "63LzBh5aN4RNP2un5GuBq1HL9VtR6kgXbcbNnsFJ8czkxeFaoCcJqVkBRSLAA1DZxYS1QueH16y1AzTCRUAWdGBG",
  "key14": "26nPP9qPsa7BVQ6feazPfa9AEUUVrob1pwawvjCnuwmuqnwip8hYUHoh5ziwMGNXUvQzTg6gu51djx8xTuwqFbWW",
  "key15": "4oDcNFAcLnkW6iGYUss1WdzQ6X4qMqQHem6PnrhM1FY2KkaSqFdm9HcckzRcdBVCUNEktQ1kYS4M19W66xt9ae4",
  "key16": "2U8uodeJoeGVMyxZ4ayNy2mLb2QKgxG8UsmRqp427zfprdLvvCHgNwxe7BBr1DF6NFB6vAfi7E4PH2DUnqKu9FXy",
  "key17": "5YZkzuuEjoa3eHL6NMvtHgkfybBvLzs755wgMPR8mdoYSM9eyVST2fNPYk3UbfbPga2sLHRNniNmnku39ubz5mTa",
  "key18": "2c84aYDWPzrCJGUzxCLAusaQLB4Lgya14RdXkhpn7ceB157t7umoXk9wnN2CG1vYeDBQAwsAF2pERK4KvaYYGFjb",
  "key19": "3qJE3eHMZy5YE421SxDvgZVhtoVvV8kwDwAvLYfp6gySVBFPQ9iV2Rc5L9QxSeFjNBfcQXuYWPyDh5tVipqLgTCG",
  "key20": "M3dA8pt9ysq8ukmbo6uNK3HWgPwy7XRU4AU7NYUhXXu3BzEFiduTRacqG6zUhSbPPiPgqvEac4vPNnfHADTakCB",
  "key21": "4BTevy2Xbs87eer7VxJkd9MUYYevZNMfiEAnhSpgsjt1ZTciKPPRpnPjRMn4UjJcQi8BeYTmRY3yRd6syF84WVw8",
  "key22": "59Q2mthdbLBv3UXGAQ4bZ5pp8N2g66dHGg4ewxDNWCHdNtUmnbQicZZWffLveMSFiTmAYSPvACBCzNoMdqLDRutf",
  "key23": "2KddXQ8Hc7J4Y3c82kEH2XQhZ3LaMBaMZTJ27ypJYhxTLKKNKDiv46tzeJ4sqZnzRmmSSjhWqxdci9TEXAV4DEPC",
  "key24": "4hn1EviP4tXuuMY9KxRr1xGrfUs4YFT5vJdwfqTs2tJhN58hAuNSqxG2M7seE6QF2YvNPmvLQTHMjr7fUQhyFQTw",
  "key25": "4WbCakb9wJRGNzUBH7oosqgL63LorFp9syeAhxVbXsqz96oCFjeokAHP4yYy7Z3Cv96nhkgTcSDJ2ywYyh61Wtcy",
  "key26": "sX2Lpz7pHXZAGroP1zZ4kF6YrN8ckV6en2Ri9zMwuXppRCBovoW6Qhm6LCXzaB3seB8aZNUqEEprovadQXojuJv",
  "key27": "3yh4dwWHBU6BGYRn4xHGYm1Hk4ywpoYqmoxJ51jmRTDJ5p2fEoT4fpDSpthrjToPdtaQL6V73oEQwjTucvHHaXWN",
  "key28": "2hXCfsHJWw14tZTMbxxK4PGpzKN7ACF93iAt4D7psfV6TZZBgf8dGHX5tKhGTrZbw5RofwnvXH7niWnmGsRV49Bj",
  "key29": "1rkQG4MyszRBW8CPu5csp82c46ce9jQbPUmetNqAotxXH1iYLsHRM4WkS25ZSPNYKkdb1WQzMwB3nLxoajBDHLr",
  "key30": "593gGq69wq8vyWgu7wYTtopgTYpjgfSfqRsXAE6kh5q2KkD68QotwL5Sr2pMZQvm8tMJ8E8gvJTqy25FQJSQGHfF",
  "key31": "4dVhojD2wEqkYj5wpHsob7EPRoubqCHin2J8cTB6F3FkzkkRoxjYM8XF3p7xHPNnLxhFFdUiM5A5ageT3xGprD4K",
  "key32": "41DZ3HWkhKMV3P83U5MNxTf9H42SZrM7e6y1YtNbDgZVy2inE3pTJrWW6HbtmXWWmbK4BtVNuiKx7WmppXkAvHoP",
  "key33": "3REU3mryqVqH3WPZfjb4Gk6onCTuAtDvjMhJTgCCFdnFypiP8kB6zoxtkwiLXdSuigetpGNiq8TMRWoN6EsMjNGt",
  "key34": "4BndYBDJVuipRNVQpszuSUJeibj5yp9cXCJ3h1rdwom4pSVrbPeJQiPh8TFrzzV7ZXtLiKMtvtXTutZhXgzJ5QtA",
  "key35": "4TzGk6eaoTyk9L1L5GqC2R2hGy2HK7TRUrgQgKx4dqTuvm9pzssCYqCtXsaxGQccSWtRjn2C9GfEP7M5CUYD1rg4",
  "key36": "2pBx7NCeVE4rkTXh1LFD1QVrPaTUeMkU8rjydeCzMWRsNfCR1A4q5kVDGbLvSYX7KRfG3ZftrGdxof2P9h2nEo4W",
  "key37": "ZEuWQPePnFguJ7zLCnqsyXQCyVVh6Ax64xMBmFsaHkAZCeV6gAyL2TCSNE6riVZHAhvYN2pWGAWC6ctEMVRRn9H",
  "key38": "h4xZv7KG13KCwJqWWR2Nhte6LpBcoPxKobWPdUg1gp7q4ybQVXEbuWMYfr1rzw9e6WRVppmq5RsyZjnWug83hbg"
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
