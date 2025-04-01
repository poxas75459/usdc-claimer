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
    "3Ma4XD4xKeh2r7aaUstNiMJEqMARJ8h5XGaWNQ1v24WB73SPe7rz6gyyDmm5eWhYdtdPfYE5jmfXFUyXopTzHv2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYspHqKBCdMCmaRLxKPryNzszmwr1sP72o7J3wF5grbimbXwGtUSZS2FdoMyyvK17ZQ4KSMFnrm8i2jcD6YZy2W",
  "key1": "4tnAkXaU1HDyXQWNNmGwLsLaqqciXrmfuMwpt5FyJYKB1VncqCriWa8oSLWp8VbtqwryFcLKCoKEGax95sRjfEyS",
  "key2": "5JByUesxtZxSMx3JkYKVPsGaLfbAnSDLQWYBkJLcRkNJyvVs7Pa8A7E6C2uWfBBuPmzrJVSzeFTEdw8TWsZAxB3r",
  "key3": "puR4sDJksYAbLd2Qo6z5zpu2WtA9TZXZGCMzGzwUWwzDHELQLTXCrWNQxTmyhKUXpndGNYruBwU1deqh7AhKtCN",
  "key4": "3LzetzY2rKAXYpdKssEGGehjphGSd6EUWbG6hFEheaNtHFqpypgjXMzMW1E2MjXPj7YzGNG8Su7QuD6p7j6Bmk4v",
  "key5": "3xPCGGZz63zXRUfavgvURBmdKiHBEJyfh9eBzK7UbYc8A15Vh8qa3jxEzBtaDDJ8hxQZKhdvH3xTA9niBrrDizXx",
  "key6": "EMZChccQBuMtuvwqfMvAGo66mpC7eGVRCJw45BTmjNheJLTCEHWKKiZevUfXD16c9yujKVc9REi14fa8tjmnow3",
  "key7": "qQKABKSaLnvmaHcwJfSA3e9sWkSzvQkdHtdZX5brbjtYdo2TqhKW34uBL62JLkn21ww8ZmsTD97rMutPabQso1S",
  "key8": "5CxRWWHAj69RBwAi3Yp3Kp5CZYBjz6dXZwJccpqswz46xP76RoJE2KS2s3uRnAaLoCzQ3wq4AeXXbzCiuhihd7oW",
  "key9": "5CLds72X6qnh2AKNa4EJ6veBVeDe82mvJYJuDw8SijJYD6YHWu4G14iuR456tap1LQoB8ZZ24toDXxw2Dh4krdQH",
  "key10": "3m4DRBWfrZr574ykhfTFV4DYbn34VdZWza6m41buAKAJ8Auc58SEegqgsjob1Lm7H3drLWFEpYif6yD3VMfPqYGZ",
  "key11": "3QmVQEy61oqzYPxGwemiBr6FwnfhXQmXpzD723MHLsqF6VGJAL1AJZM3AW4pfPKyqahBa7utE23kettpRV2eRCJF",
  "key12": "5euysZ7yG7MjvjBA2dFx487v4hav3ygR9GRqGjXik4yioVnbu5cpgzT5Zdu9gWR6cpLLVHTaP5F1ick2KvdMK3u6",
  "key13": "5CzJ4WapLxFdxy3t2kQtu8ptqpTByeL92e9XUcki96hCZQze84NKY7wSX7va4C2oyy58y5dgkJzkHAAnXd4tkwH3",
  "key14": "5WnwcboCqnwabE9mm6hNZuAGGH5xyCGo2quD2FfQCZcFHzkE4Hab9tCYKRkFMwXgbWFH4qPJF8CDML2uyLY4Uzd5",
  "key15": "2dwfJVVsvF6hEVsySehvfeZayFAXuXvkCWFsvj2VnRw4JYLxyqyLhPiWFwNuo3f6oZxP8jwZBy7YVnam73sXboPw",
  "key16": "4iNKaFzsQHLEUWinRyRhFtatLfK46QXBsrKYGKGFhC2F48CrsXwzE8nN4zuqUiLCPFQuR62zRixhYGBF3VtpECZB",
  "key17": "5kF3oXa4fpYNNM9HbqVLU2agu5H2VFvCjsBhbFJrt7bPu6Z5aK7FXRiC71TJUSiKbKPtcU3bFVVVWMNCaLsxLmAb",
  "key18": "S9sBouQn4v9T3SmDA21ihUy56sqU8GhKNwXdtB223u2JJRByNt1TSr2BDefquWKaCm7vhttTqB4SKUGAdAr9Zdj",
  "key19": "3bdJMt9oRPcA1g8qcUzE49GssUuaXr2Uy9d1oByzYtqkoxEL4RBPcF7W9yhGupYVrY99kUn2QJgioCXZjvNxrSU7",
  "key20": "SirWokipVdZbbtDW1Jvoabs8RFdy18HwJYznAFsiSNqpR328aecd5NG5ERC8DE7MXox4CJ1SamBYiSWQL26oEDF",
  "key21": "3A6FrLyLA5APgDuiDnrF5EC85tNzm5URbnqcTmxS9fF7j177deg2n7mEy8ovd4sbmW8vUjf9nxTXRSgYMUyJfG57",
  "key22": "21EMmer35w1TNmMo7g5VJBGYL9JnCVCa4DLsg6dH9daNdStmSUQ44rzQFfHeQcjoV4qE4dTaWGJv2TSZypqfzwjD",
  "key23": "49fQTccyqMAyUeLE2hWeqsWR9c2DtboGC4DAPz7WUNjLfRpwC3JKsNMbygF9pZgDSfG6wWHK2YtjjRaM2EGX5sxr",
  "key24": "2dZBRLKwcs1U2nucxBkgzXekoi9DUZ9MUQP75coGoCbSYaXaeS1i2uDegz94b6EYH3wqeQvtiiTP4yNG8ufLz2jf",
  "key25": "5N2a6WLuLW2n9X75PAqn8KkZiMSG8vWbVyiERh4rSXgz65PZhd7zWaeCHqshC1m8kLd93wavCFJBrsAZDCj8aQ2n",
  "key26": "2wMY44W14wbwZnQEcjk6YvLd1EZp9xGF5EvzzJaJiwuFYdrPs7ywp11Pu6LUAsjAadUjxvsYdpTcjhkNUpmQZrx7",
  "key27": "4wWAJrnhcHyGNDPF8qQ36vuLo8YhPybH6Xjv4zsH8UphPM85QwVRCsELU1VPoSNDMNNSMmRdWYMk2FoBy2KbEWJp",
  "key28": "4aoCmerHgo65sTqGoBRyH8721jc3A4wECGD8rXGyzGL4ZJX6pehuG6PV5YKLRPV2fsfaowpxnCjHfw6J6wga4Jhy"
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
