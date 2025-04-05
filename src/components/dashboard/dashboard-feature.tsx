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
    "2uc7tN4fqNTb7mQ7xM3Kh1xuWwDrneodgwUmLGYmtC3BgWMnhvCCRHXhQ5y8EGrkL7CujhJopX8HE54YwsUm7a68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x25LBZAdKESyoPAAVSYvgzkfGHNyfpYxFHY4WbThsvS5U8QC2T83QSAWsqd884MtUCLwApRPHGUzLgbacGmEkpX",
  "key1": "5ZHE2b9h18K8mpp7kcgf6G1PR5hx1QotMoMxkFN5XtJVi6XH1owkDzBkByPGVEK8qsUwu3Jw7LcSvA4akzMZvQJf",
  "key2": "3CQpDntRU6SwLY3ZuruLhFUNB3uqCLKj9KKoZaUG9Z4hL6eTc3VK5oWrip2pKzJFYmqZiogTt7B7WshDXcZgPRDg",
  "key3": "3aAkinNZecBjXrCsZTVq3e7P65LJW9uWd3zsAkohTUxzRdXuXyLSkxhRCRXLv6p2zpxb3ZVGT4mAow3YhsndyfjG",
  "key4": "4ht8ETh8k6pAfst44TXDaYZpoKLRXn8ybW3QwZVMqsJeYD85McyZeuGpyNynhDW6q965EQ9YHUQJhuh7teu2pWuo",
  "key5": "MLDtmP8BSg9kZtkrVpLQ5wXpvMdYgDgtzn2GWNErMoXaCogXXg27teJhXLtR3ymVw4rz2GjRZZfbJLm63mYdeBH",
  "key6": "5QRXcZN8uVZFXouih9E9NUxpHyTMq1ZUg2BDxbVkaRr3HxJ3ZiDq1ByJQx5HbxXRpSXESwReaZWgLhQTwoHeNfBX",
  "key7": "XUd7TMBGdaKrvwTufyMdMV6eNsukBrDyYk2gZkcFeJ2SPMWLVFZEzYxcKUfar8o7vhAqVWPai8JKhHDfgacRBQh",
  "key8": "3gdHzFT8thvZRZ7btAotH2aQdmHbX8smuY1yKMJhWw9QPDvMqGqnc74GdntTs6VxVprnHopLvSHSGJrFaDQnaiJb",
  "key9": "42KDcLC1W1W7bE5qidrP3pjhojBoHXEkdTCJzZwNiUMjwaHpr7EcjUXcNn4FUyfKzWWpxqTaLF48yschTbBtj6AP",
  "key10": "4ehJsvHUas4nL4yMqRPhzYE5LGTfPAjuhEGC1kqNm4GS6RTBak3Zs17diFgwjKoE999Ene4kyq99Xj5yndhnCop5",
  "key11": "2c5vgtYXqpPF3SKe9JV6uBARgwqbFyvzB7LuSJBqEjf8FedDn6wfJDw2CF1fD1L3Xc2pmJhjVzyoXZCP2GNJMAqn",
  "key12": "2s4kLe1vPQ5TyDa2VDwHxcBV2Db3pKTxfPpe7PN4QpYN2Y3gMfjWjKbevmqVPZkXiWiA6Uktd3VqTKbqgw2dXjet",
  "key13": "3ZpQkerjkZFTBCsxpmAtMCyZz297UB9kNBj6eZtymvUAayPVQt6kgiRUQCS9m7LZoYynJPWDXwESsFRyim6oEbde",
  "key14": "4MajwegotLtStK6XvbEviyc7AFitPSd6FQRuPPPMWWYNUx8cfqXnybgesKUZVUr49Z3jWfrpo3siDpV16Tx7RjtX",
  "key15": "5vXdrC3ZuZX2pHizF5JoHHauaBmymiFxaespR4zetXZDbDWPjUDetQ52ynuwhTAyvNVFUMiCkioAPmoZcv9QYFuX",
  "key16": "2ZsLAy3uViZhsqBH6R7Nh7ZbjH3iDb6eAU4UwZXxN4iP5VwkZGvUswvE8h3XECVpG2TgsYNxWG8jHZmk1RgibCeG",
  "key17": "38PPEJj3BiE5HSLJudgwzkhYAmJrgMHUdMUb6sQ78fC4ptMZ36VzUyXAgo9AB8CMqksvn7qtsekBEkScnKLtbBae",
  "key18": "kZvKV6Uh21H58MENvxvCE7SJR43NPDpZMgNVyU39aTzRFnA4j2ibR2XW894Jojyy3Gcfz9pz5xgrEjra1i9GWHd",
  "key19": "5zZEYBhD9DyDw2NrNJR1gBM52hLy6oVYkRZZQwpCF5yov2dfk1711tzkD4RcDdBSPLUsH5BN5Dy2Ut49ekU1UWft",
  "key20": "5NyYiTrfCxTiikvYEEa87c3DGYdZG9zRvTNawFpYbico3V6SXPymq1kf9AkDGHEDVmtSoHb9v5goD76HFeH7r9YT",
  "key21": "4WTb9xhiiJPiM6Haywu15XuZkzSFMAHgoA1pbcLnn5cTFXor2jvVLNBXX7RyJHuSrnotk4ca9Zcn7nn17khYnMGs",
  "key22": "n2FwPuuPJp9giCfYMQMGEtXh7dZjEiahWZV6NE9Tj3huMGkbNhmdeLNJHVJyskjoeK6SkXvXYX6J8YWYbZXAb1z",
  "key23": "2oTU2CkGtwJGfMpeyyobcw99qS89vjiqcnVBhZcgwf4R4ruA8ou4bhChDk9Swr5BfLCh4zctqfeDvkYyng2VKcFT",
  "key24": "73mBJhf9WQK66eNVcZ8jWE6nX9PQwuwUaKRYBU6WuxxU4CA9K5qyhWfP6c6r3MLk85p2wQ172FnAojPv6Y8hhff",
  "key25": "3wYZ9oqJuGBgoBSDsQiKu1WUYnEcLig6UQmrjTTB8AaGXdeE57pP4zWABmZBBjWhz1fBW9JuaX7UmJiHduxphLaA",
  "key26": "2ioVQDZjXMixGtQK2hKNQLeTrJwvpBAN4Q4Kity38Q29qxpdnA7hb46SDWzrnnmD1metS6JTVam7ihpTbUjhPZ2X",
  "key27": "4kiovE4XDommWa2KPjc2H16drPk9e7nbxBZpTHJTabKMzvswrHi7ZPTkteYtRdLa9Bp9n31BLL4DEqWh66i65ZsZ",
  "key28": "63gLhHqv2xQvCCgMf7DiVStJwB5g2oiudRG9a5vsYhgMvfaXQXoKWiyzsjZtzJf94Fya8mqQB9J18poSFcXmwKRB",
  "key29": "2ZMRFUSmLXM8dgoAAfH76zyayDgij29U7CKyuBbXHnfHrpCAfkWTxeGz9p8rCddPXRwyU6pbpSwYxCdDjndaUNk7",
  "key30": "3dvGaNV4kmfsDNgZ4J1eWEdv3icNRAddbnA2XRAYmvGr4MN2djoQtd6zmSnKa85xoYHf4U3mvwPwLJqxEMm4w8UQ",
  "key31": "5XviDmjiaSXbprzJKqYyRkhsjfiMhKVf4UGkLQNi1MSSq1Am8pNWQHeeJL1TaR52NghAEFzEg8g8iAzMVZw8yKzE",
  "key32": "vdsdyK6Hg6qu3GMiw3sGNkebVfmvBEb2VvGx4pG8vp33VZFZ7CoizNFBDd41a4WkMioB68cXrE6seU2iMuZiTPx",
  "key33": "5Jr6cbTZUJEWXnCeUg161ejgkAf9bfyQthSwmP3u544UnLH6WkxQqmdKCn6xPJKtndfT3y8P7WC9q5HpMKeqjS8W",
  "key34": "3dQJgy1FxzyCUcfDuSTK6qZL7b1nbM19KckDkLtzKvuvooVthwMZCxuU5THWHdWHP1EYn7LsaETejbZHAhhFQHXu",
  "key35": "qM4uBnhx5vQVEDL192hbLL3RENjYaRa5dpsh5ZzaXSTuoLYggtTVgtD2XSXaKfBhwoGWLwJccPrk9DsMymojP21",
  "key36": "2apAUMgwiyc4qgywg9i2uViPxQGaAv4mzkeqZGKBFB6TT8paX4HJtH1LCeppBosSPTZhCMsiWkiZf4PQo6dSCBaF"
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
