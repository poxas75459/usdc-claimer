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
    "3mWeTtRX8fuxXibxKTijtZveNjSm8GBmxpssQ3pCaA72tgQFvHiaHHB1eQTCeBHBRqdxaMZfSJchwFaHX9dJthKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkcZAzVMW3yNyjrsHqMRQjotLeC7oeZsAezxjL9ZQhhAx8pwYUugSApmSCvcHP82RYDxRWC1XwaWmjw1bBPE798",
  "key1": "2xAycGu8YRxaTjFWYcXvCxJ5QQe21N8bLTr1u1odWQqoUcAWcAEU6XxwFkDQ2bzpcococusaUJD5Q2mAVGxJnNAi",
  "key2": "4uvXoZwx6y8BJhGv7sHrzwMaXMtagXofQnF6Mj82eBUMYKa2DQv2FL1Ynwp2zodHyEf1SDYSswEzDYPmV81bBygw",
  "key3": "GNJLeBBFWqvEg8iUHxYJ1RSJ7cNuUJTXsg8EKJkQ4HP6HGjze6nqAYe3cubkr8t35icHqs5poFzHco3enW21N8B",
  "key4": "2BN6nWbjEBeaJMPamLjCNeMBi1pe1UEJeGi4bfLsray6Kque8CNXUuyT1LUVP8f7j3UgZ7fwYgLkgkVG2f4nYQLx",
  "key5": "2DixFFniuNeKaYKqZqdjap8T4pwqs2XpMaR37RBjyPkcGrWA72uRZZHRADQhkXXKnpFmnP1P1LHvHusuRE2uWa7j",
  "key6": "4hPX6USFYbRq5cU2wv4LKc39LxAgQoC3ACUj6VWGSRkJsRB95ouRjBwVWa3EUe9gtPm14VwdaQcgkKCXUzYZ2MSw",
  "key7": "38ASPhw58vTEKXzbX2JR183N1cKETCzwJJd54unku4yZRfTw87ocGax7awR7iVEwbQRQQcSgXwpnr5Mvdabo96mQ",
  "key8": "4i3M2pRmRv2Z19FPvmj3Z1XtroGup9ejVqJxGo2NKZWkoJvpEV6dbGRzDzy6UXTVKh3qKGemqQrDSkvxi3jnTV7w",
  "key9": "4SgeQio21ynqjcqmb3h2ggw7ceprY9sswoQQJyZkgWy8s7SGi5ZND1Nhv9AyxcDNSthsH85McHA72XMegmfzDkJQ",
  "key10": "61ES8YXnzjuWM61eMHoML9z7MQdasUiFZHC8F5N7pgyZYdkPdzehq14i6d8KEEf9ThbR58xhoJJWMSPQp3bxdZ5",
  "key11": "2vyYUFeeNLLrBDpvpey9SUmKfK8tAvkD2pKvmD4s5FMEfSY6bcNBC5jScsKWmCRJuxjGap39xyT4VEKefLvFerWn",
  "key12": "KbNtymmCSC5NDdkpt7uzd1Wy7oZ21N5qPvbxQN2PMgzKqEBHdJsPMTKCJ5Nv6pD8KdxY4DL2MGLNEsqNKycnN6q",
  "key13": "64DENwXp5vwgKZSTVqNtskCyHmteo2wSfaWT2HHGE7ZvsKctvQ3ewTQ2Ei9faV3Me12dSwBwpBDVN9fpFMXdioRT",
  "key14": "2t6uLUXrRuBmhg5dtAWyj6jxCsDsdvZ4bvnc3VPRaKLKnnSAXpGYoewhw3LpqmNtdWvfL6RKP8gkP6pGAh8q7vvb",
  "key15": "3SBswTR7PhVnSK3ogYrq86kfaU5ZGtN6Jyk8GRauwtiBEzVhVEARBY41a98oPdmcZ4UnGxxFRbd7zUTFAk9M5ctk",
  "key16": "5xkFUPAMA7AjiJEdB5BGDeJt5CMHvdQAjMJLctQdqW1ahhVsYKvcCUMyMrHtou97WdCa1BaZ2QYhZXcEvkuFFsQG",
  "key17": "rxPRQu3SKwW41GxJsMf5X2jPsKgJx7Pg22H8qoz9mWKzbXqafVuQ6nDEBqAtTCgZ1qvfn8FzzuV3Bw9GxnDVQcL",
  "key18": "2TjSj12Z65KA2tPbYzGuy9Sub4TSmtenetsBGB2oPwPBgSozKhJVFRwKnzRByRWjQhgaLeBnccBJ5kQY3KynePGb",
  "key19": "3qZXC1Y2TiLicWMfhQQtZXX2Pkc2921pZ3ghLenbKWG37Q38jcNGCqo49j1ou9pXBSzmK8Jh3JKiTcy5ZBaPyrv4",
  "key20": "3P46oetJyJHt9BCnUB1QmJKGBA1zRqdbHpUYn8hdPWEdhUWesFmBoZYGkdVB27MNk1wcBCSFwHZQhH76GmwBrPGt",
  "key21": "4d8mJ7i9Z9Wpdb1ftfqfTh5bcH7SMfCF3SoQ9fAP3CpmvPCiLsBGTGDfPkAtMKCFw1sYGzHMtyL5ECWHqcLHna5v",
  "key22": "GFCqG3A31VybL6wD1GT7mASAXuQCov6fuF8ViVb3T4MkjV64W4iJHzHVnLv5ifDomP9UXWEaEFrGtKT1mH11qbo",
  "key23": "4WssfouJnEcBBUz6EA3hoWRqb1bCgrDEM5VLBsujTnAGSVq78gzCpibxTSTr2xHsRAtTh4HDpgaVh71KMqJmbiBX",
  "key24": "5V9pFE5f7cgJiZGrnamVaDfLfZkHhCQx3yJJeNgeyxBK2djSXhU7oifU5wL1wsgZ85zLhBnL3pGy9rriD275ciiB",
  "key25": "22CjhqXNZfifMTdRxeRny58XUqirDvJQ6f4dAV91byY1mpn1jtgjpSgMS9hyMx712LokPLyBAY6e9LrKovBLHrZE",
  "key26": "io9Zqpe1nbbopqkcCHRc4mpNsM3XPhGbTWcoAMHfJR5hc8iC9XnML8tzxLHZt996Efwsx9KaVYDTQQDVZ7hxEy3",
  "key27": "2HfEHoG44zVfwkx3RhDvSRjwL6iEAcinFDYrScZoCMLMsQQJ2LZCwfL8jB945fMZ1zkcGLk4WQV28KuzGazSrSpq",
  "key28": "bYuH3Mv7mSCXVh8uvz3nrTkKrJg9fxivPbwTmnBxWdGqYLkXgChLUrtVk8aKDFYgCdUV6veYzY3gfEN6FMVrpzZ",
  "key29": "39kfTMQmVXhwj87PnvxhUQhLDCM43AdeRLasS2XZLcUSZmU7HbBh9NVdVnGGFRTyAxX9AZtF1tySUpQLqxne6Csf",
  "key30": "2AuZcPLyzsoDKwjsfG8WzvgkbN4TiyeLvyY3mCkzhomTqCaWtJNQe8R5dmbK7f7Yry1urBj1A9ZWQa71g7n8GK2U",
  "key31": "5WLFg4V7GySfwZKCib4Bcd7vCyu85a8JvZhzze8QysvdWHoJPuxCdbmhqAaFQ7GFdjwySqXgv4u8ZGdsdLAYeuvr",
  "key32": "5k3n65pC5s2XCn1JKcQjbmfMC6wbhrYyCyshfMJfXGsVCBNiZWz12jJW7t96ksgRjEeR98Q5FCzXj9K5bSSTvYgr",
  "key33": "4Chf1WB6HgdcXMysHfQBsdRbH5erPzAw7qPghdrtHUU6r69Tm7f6EFgTjYjjBTVR143Qg9JmCfpYvNsMXYE1eGm1",
  "key34": "39S1CUiagMVGQ39CP6sMRrrz7tgUTjFL76Aeznrn112i7qBAoGzn2FdhdtfDWdQX34jkEVqC2VdnqXKjNzqMn28s",
  "key35": "zSF3QDAtX7rZZroKvpgZBYNWrtbtZ37jygEhtRQRrg8s2zwNRNb9drKiDiW7zYXwo3gUv4ECUrQeAEmyGUuicFE",
  "key36": "4ZbZc1Lw9Gd4omUELQihQZzGgdJY9aYNjkMJQ8UyvfPo79WdBPcniM52qPKU1ELsPcxcve1FBWdQqfba1N1kbQwJ"
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
