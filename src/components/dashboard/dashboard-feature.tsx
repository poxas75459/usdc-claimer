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
    "42GTZBm4VZowfY96xxntR62NF43DvhFAdK44Aui9btSQkSyXux7jMFiSVVLahskjaUiX6XJoCs7Nerozac2DMLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qj3vpbMpYJBK92usfZnYC17DXVbJpukQgXPdHmjJ6PCtdzzWkZVq7PhgDzwvAsbPkqCbtCZbckAriRxNs7zarXo",
  "key1": "3ZYj6cLZkt4gtUWchAeZuMXqQFaKyDeGbKmiSYNzGWHNaG7A7cQf1JFu6wFVYwHCeXzYUfqsGZA4jYbMPTr1Ywdg",
  "key2": "3iyrWpGvhsrPue2eHwJYPcguEWc5iXMt6jTLEoCAF81DzkqwcV6UZ2hiP1TzCtJjAs7gaHHvyPBLPSHnNTnboJCL",
  "key3": "Bsu4R5kvdiPvyAikt5GPFQYVVuAjtsEQRCiawaNzdL22W1xfwww93pBUDYras9TZNpQrUTKhjfSi5RHy13CEsP8",
  "key4": "4cQh114BLEKBtegNcSkQgkmCcF2edczMbbd2a4Swir4UBuogUJBhyjomKbPZ3vXv7UW3V6Nmftz85z9ye7euHigi",
  "key5": "3PVwdHVZFH6oDCgDsku8hMaXFXyeE5eoMJJLbLBCymCaDRw7vH97kcjx7qguKYZcXTFLa3m3LKee4fRRV9zPSrvy",
  "key6": "5ygGMVNgLeLh7WMt5o2WwydfTvTRWYcHRUohcQe2feUQAqiH16xaqLTf2U8W115wt3yjmsUeCEtw7RVyrCvQFiV6",
  "key7": "5R4ufnE1TsU8hy7bcT7tEU5cpCVjgQyu2QQhQ3d7AGQk4kjW6dYpkeGraNwinfpbScxQfZHyBXt3hewKeqMNfh5M",
  "key8": "31oidm9WLZSHyXMcJPbQotfDs7UAwRMsDiXSWmuoD8c1CzjfrkvnXneEBeMgCrpy91rKBHap7QnaFH4c3n4me16M",
  "key9": "54avD4M7kRzAa2xRogfpLCTioGGgDCVFQpLg2BwqjLeC6GPtDe91EPJqoF5mKqt8SgffcLwtVe8ANxZbCDx7q6zj",
  "key10": "2prkRXf93BqvnAVTKAT6DGQfHD3akhZrxdt5SkGGadsjJ7d2SN8tgbFZv6eonk5uza1nP5Q57bw3pXS5DCsrhgso",
  "key11": "3AmQYtanoJtXSsa3SG5xtu2cMBu2supEEryHGKa95kDaitXGmebWbH8ygStb5mmtQVqi9KGBpz2T72pCuL3xUH9f",
  "key12": "58Wx9yxPHoqufpwg6Yo3hHaky2T8L7r6icdSd5vcrULrqczZM1v7gkuqZc7L3KvPCcMcYyDKYhB4Yro25tUw9yUd",
  "key13": "4iYb1t6yk897EEASDg7qyF1Z1Nt8PPRo3aQW265BjXne9EuuN1dJmXTy4rbnoRDyErDCdt8z6VF39RyJxcfsghSj",
  "key14": "3pvZrL2NG6khZgGVZstp4xGsJfGWPWbZq85eDSaUZNrZVUu8y6RB2CwByZBqAgdP8X73tsKyCJXGpGiSLVFr8baA",
  "key15": "2ixyVQLHeCErfpvMYvGK8WXwmstSzFdQN2yrrU68kGJp4j4qnrHdYKfn4R1R1ZLU8L6oWvyq1egRBrjon8pVmgcm",
  "key16": "67djeBw7dCiey7uDj2m6PvqYvN7kqRGUM4Vxvs3dcRWXGVKteKGgWUhySsahrRG25Ho2J2hmQkYCA18NJmcjEFct",
  "key17": "4qJ5Hukmq4k5x5ReMcbZ1prDfdjhjRoHuVEXETdxvBTVq9Y1ozqFYnT66A4axK6VhXFKFMD8PMwzpEjVLAJVm1Y",
  "key18": "4rfxaHNJo5EH92kNTVEgh8BSytgPnBG6Rfd9g9whCdUpNT7MbbPM8YPUNmwbFmvrqHBVAPxBrNFXWNvuqPPPjgJt",
  "key19": "2KoLZtZ6fSKr8ggSYxx5afCwW4umTVA6ECeCc2ChGPtZHwga7BtR7ZbnYLXDFB24BqMdZ2Nr8AdtbkbKKGzTb8vP",
  "key20": "3tZFtq41aWC9Nang8DP3VCSM1YPYryGR4EyU4WCgAZtDzyC9VX42ztRgSLj5o7grbRMwJTatXRzJPc6oqtKmCrxw",
  "key21": "5RtqVcgVp2BGAWrau5u7Uj518Zo5ShWPiJfBYSXnQNcq7Ev1uBjh45qc6q1dWGQSwQ3kZKbbGVqVVqMskXGbSgxh",
  "key22": "3qURDXqtVELxBkWggm8fzqhvZ5qukHFT7cb3PqRsGfG7ye7Vu4tq6asNyXrQhrRSLpB1NzGStSqoUwCJaAZbJ3Ro",
  "key23": "3PpXyWjBgbMzeTQidwR9oE1v1qfGTmjPTbR3chigZNmVcbnZnLfy3dkgvqjvDejiQtevyPL2e14nZmVoPNJWmdLC",
  "key24": "2mpXXRrYdQDs4HDfkEf8kydA9t1mD6wUkJYeKmThTNy2YyLg4ZgSD7neCSpZSogej5DCZzMkbSGYqkXVZVjKS55w",
  "key25": "oz3GaEoo2eP51aVEsJeAKgu24oASNnrJPxm3KeUwkPSfjseXWCi9sSWn9rnHyBNRDBgT1HL2dC2Z1cZQQRbjsrK",
  "key26": "5QuG5MFNz38F5eps6fJzjmgPpC2U7Xy2HE4XhyM6fzuRYE9xFNByEgiEtmKZAw5X34iNWy2Dq1kzNJRo3PJWTaiW",
  "key27": "NeuXBDZfNcBmCFujfETPaVGoUouCQet9cUDcanrrWXGKeqXzWBKZG5miyqYzHpDVfcxkFutz8rn1teGk1frDzwc",
  "key28": "2hQ6FV3afycWBX1Kr5mL5Yuyts84rcpZWqTFYYFQjebe4spJvrdtbBxeakt2rkmmC9Pm1dYb3mtR3KbWZ9dmqt6f",
  "key29": "3VudSLiDftCi5jUFkgdSj9go32juRB5zqYYayevjZxpSPUNT64rg3jSALyhU97PtpjAYEbTvcb4rY1GuR8pm4uhG",
  "key30": "3AWEnGV6oJWHkGX55Mdtnt9qwiXVZhXoQLGfBUZ5B7F9tLMszFbQ43KyXYnpY9zowmjusbC5EMyXTYxgjrqwH3iT",
  "key31": "RXw9Z8Wa7XMvLUWKqAiuDCrhJUU9SM98bkCCKb3rojbxRyFWv6tL2gL6MbDTnkKf6QQgma1WmLQw2iLiz8U1nyg",
  "key32": "xY3WR53XyXukkmuhj2Pt9WLvW5Dg6v6Ubgoh2Ytd5raeijvX33NiZYaSPifxhoiXH8xfFen5PH19Sg2rja6WkCM",
  "key33": "4SfdFZMC4CvWjwABsnceUQTWT9fse7d8dre1WwrsH5pNqFsJ7CbCT6HtM2b6hhM2w2jiE3V2CusNW38JPvHKaitV",
  "key34": "2Cm7qZPsK5BZYcwU8iGHqT6W5EdJiavbBxox41WZzgVfon2fGioM23Ug3E5Rc6DMrLrtoer5gP8buKkQ2PrEEws5"
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
