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
    "2J9eh8eUWVyJm6hG61yVMZupJEC3vMEyzj73Ji6SPW5ULSAwTnC9PtVTVEmtqz9mCz2NFu8gmijauZcSWe8mMK8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Qz4WSq4Vy1nDkdnGSgpZqkQkJoRvXSAjCtVE6zSJQdXkyxcAYaMix2Gx23p1JiR55MabfD1cuqh1YHBqWVi8Ei",
  "key1": "EZRkHupxqz1yAuQRXQP7hdhqyNj1M7Ru6XhhVrU2EPY6yy2zrvXT8Bv1zfmRw6i7fxtScsQ1sRgfMSpJTwUgHuu",
  "key2": "J19ENBGgMfrXw5pYH7bRC7hyFEavbqEPgcUMqB73smDhGepQghv6SLhZLjkBdAHAjbB8bg72whpwry9y3eHoFq8",
  "key3": "4oyXyiYbSBfQYeCchnms4CK4GfMBbXD1P4b7ayU41QJasEQvKdBGFeo8PxBVH5QyEeefd1uKbi1up1wvB9KxZ31G",
  "key4": "57LhkXcSpJMx3MujoLod21mb6n5m1fZEhMmocGH4r6YbxRC5tAUiUQdM2qT27yrkdriLouJiHwPU1LJv8bDr8eRq",
  "key5": "V7XyxgM9ZxMAxwS5sFEkV3nPe2L6ujEZLGBGekzsxHoEqqMcuxJ4yFfp5HVMWzbiPd6uwqNud76iSwF4ysBVe6w",
  "key6": "5NnZbsSu5cWr8jn2UrwmM9usxLzmFgnkMfD6ukEqijYnuL214mpyMoFwE2oGnzhQuJa3sFEQRUwcfJdNPwprLuzL",
  "key7": "5UqaUfTjefxk15gCefbny1iHqQ2bsiYwzAfQuJHz1ftbMk7TSKz72mbhrhg11iSab8RcxeH75wFmhDtfMQJvQC3Z",
  "key8": "644sMXVg3wcttEcbem4zPeWH63Z5kg6MaBW7Lmsgh36wfr8puVNUUYNS8WtaVR8unTzc3Z4YXUyXSNMW4YfXsBq3",
  "key9": "5hZ7nTCZrYo2dgjFjhXCzfiuk4oGx4S1bqzxLJyyPk9DXQBaCLrUGEnE7ifjQucwsUKSKjby2pXxYcY39cuZXGUK",
  "key10": "4vYi1HLvygMtWPQrVEMrpXQmWikLPmVBaYWQjAJbTYsrXdPQGtHEj4zkLYXEp6ebearscoM9aNfLdTKvjJuTohZy",
  "key11": "51QbYh4aegHeDiZt4Lo9iC5CuZcCtgHpyzmFQuN2Jq2jKuUcCHqMez3cuxAKFqLfGsHfn4TQGQjhohx5H4B13xTf",
  "key12": "5o5Z2cVeF7aaSf4DmuZgwbVKLEzEuaVAVLM7HTyMTexQHhoBeJXWbJxAyTWRpdKmxBY4sJfFikRrAvvHaUfCuMYt",
  "key13": "Ri5XHLBMKK1iuyWwCgJYdhkznfeFjnyE76GCnAzL5HSHVywDxngxkJudXpKmt3LYdcnqtT5b7TzppmTEvvFWS9N",
  "key14": "3gMqjBCFDmbVwZWpvts5A5nBJuZhH5ZnEyGcJr2kEtKt8zp5MmrLieZ1hzJrXKT5wKCJeU9GRSTzgJCUGMsjXb6N",
  "key15": "5x4JUdGoaGjJuoND4o6MtjRzVFHTzXSjQzE64QRCDBoJJBdxhWejDXecvdLxzYjnvMxxuoyiiRe3bcmqkvKRzEZA",
  "key16": "4wyA3BhVgsP2FPBRTd2i8WGR5y8mutQgQXZiz2FtEqDdduTiEMNCPaKad94gfruH7iGtYvY6dr2RnfMFFtfQpx1g",
  "key17": "3ifMaGkFF8uFw12hjgFFypMpyZ7SKRS5GrqW3ZBjQcGw3QU13whizxML3g4eDs9cRB4F56UDQemXBCijLMwgUHjd",
  "key18": "3G7FbBNX4reZjwnrYifzLntNj8R2kUeGAX99M1WjcukFiPe9z3Jf28mJ44MejBmN2QsRfzrV6Q8vKYDu4ztviUDU",
  "key19": "31iLGbYHagtYTYvRwPuLYhX99Jn8A8RMTVAfSzVHWygtem72vUeZGH1c6BZg7HKgTbs86Ubktms5nTNb5KGKB7mv",
  "key20": "2qvQtaqS7SNBJDV6yCcqhRKkCPG1chejwwNEvPJV2DPBoEhRfgNLcu6BPRaEa3KJkSX9XmeqGzxHLbCoLbBFimXG",
  "key21": "58AFR8fY6tLrW24pi1YeLD4JigiTzjsWSuXDCjGh9F2qvxFENnV1BU7QV7PvYQANRevg5eMtE8RV9CAyi4iYZnhE",
  "key22": "Y39KUtfMYUD3EZfmUtJLScpCaP33hmRgzQ1QtHQc3uiT5AgyxLfRRKKFx48TrGw2Crqm7U68cDqnzE5EP5qYHn6",
  "key23": "4eR3GhvBGqumnJJnJgkmusksqbKw8HwLXBkZmAAu3M6om6BsYvVTtcTrjKaR8dg41ZsrfCd1hJ1vynZMGjysisX6",
  "key24": "4RimV9xVUi4i28bkPzsrViyMdWRdMKE2egNTCD3Nb7MUCrvrPH6fPUD61Et64Kk2qyesodANxmyTnz389p8YKwbW",
  "key25": "3xfJbHxsGx6yVnfSWRKZxBxc3DQk2cqVkDPyMkxtSXRibJFdhVCv3JWoHJpF7UDYDLmseGiDuqCggCB5gt2yYvC5",
  "key26": "4zohvLc91uKcrGVMAuiRaywqEiuT31b7pcZsPUesrE6bxDz1DG26Zs6hVkUptMVbVVqzmtrMSiJjVx9Z44sVeQRA",
  "key27": "2mceoJBx7r2Z6Kyb8YKP7A4zNUjYgc37sMhNxPUB5aANp5gPLFjMK5W8huwMeRsKGupiYwVvj4VziDok7thViEQh",
  "key28": "4DHsuHDHqnkxxDwjdjjaUh2YtyBckpVsTpnQbQ6UHsnHeE8B6sLzE5MDWV5Q1R6Ugz6RTfrxzcyWqXA3bhCBTtE1",
  "key29": "4NQkqu9SzSxEG8zU4kdikR9FeRJdvk68C1Wg5tvXinT8NLGMjEx6TiRFLjPJgeV3cDwjXo2kcyXmosqqV3mMaxKC",
  "key30": "kBo4WJCJRRf6F9QeYQwU9NrzVvHhPB2z1dZnHZ8N89E7qL7dVDSP6JfXccdkGpiNhnh8jhBo99e6umParAqry1F",
  "key31": "3dXtgf5X5Dfo8TdpLugeRoF1Nz9QcKf1gqs4ZRPc9D5Di3X2TUvAkHVvx3QDJCsd9XvBtw3xtB2MNtEDgJh8U6cf",
  "key32": "2ZEnhcGszA3XyftvySpJg5oe9NPTREAEuBuaLTwxjM8tyKY9NFYvQ3rG5my7TrivFM2cQaqXG5mvMS4JYiopvZDt",
  "key33": "5tGpmzVBLkcDhjGnP5Gf64VB3iKtFv62nVhjZLVMKMXpmUiGaVPUvPq2MDv8bnRChRfmPGiJKXjtF4xLmuSZhuMd"
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
