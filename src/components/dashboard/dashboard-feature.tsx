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
    "44TAJFbYEVVbL4ocu7v8dmLRCsTxL5B7zK9S7dd3VqxT5Q6LzvRtkTGzV2uZ9ZAw3ua9wE6ZUh8npgGBaML4qc2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcbHmgVydzp9jTXShdBNCK2AFK3pRZViQLPdhf6HLPzgmLsKCG2JCiYnwAYu6fL3upp62giDQ4jQ7rbELPWSavW",
  "key1": "UF2CQtKsdauy6xiAFA6v7751vJUiuaCTvzUVPG8Rm8AJyZe3eQBRNaL8zqjuiTNdALNWxWS6jY6e5SWnPK3FE7E",
  "key2": "5maZ3pqEsdHqdG8avHHXWBVsuN6AbeEarTRKGRbJgGrDTAqhoMxGzDAEMKjYtAJpNnBf66DGdN9n3bggNTdDRH8T",
  "key3": "RnWKmWJK53fBnWvNiqnLopTpa5qkRA8voKFQnVHCLjxaTgEAzTtz4VHNxTCkGGREzvTkVXuNyBBbuQkV3vhmBjs",
  "key4": "4doJUKMzm8eQUt5PUiXAVnUdwM6aEozqNBvm8Ju9g8sNSQa68v6KgfBRL9PCJzzSrw7MLQ6KH7uAgUiZ2B2Gyszg",
  "key5": "49Af4X8q9esM15EcjHkzfEdBaJHojChC6FVaP3KYACJs9yoU1dQkXjVwkb6dVAWj8QTfKCtwfH88LUGFhcS5tbbs",
  "key6": "3Ms6AkQhei8YQ3YaVP2JNA4g6uzfQfY6CU2YLSLzbugjzSutodHKy4m2B8S52dJppseCDkwjBSK2V2NUXm1tEyd4",
  "key7": "4SgSTEYaeunsSXJEshahsoqf7gMZQRXDpAqPVM3c2gBRqSi8ZZ7a8yL8oB19Vpk9yv8aXBXHNQ63eHmFnoUHCLbp",
  "key8": "3GCddweFsbwECuK7Brh9xLbotTDdFCq6R1dsfRJMsAjqdwkgBtkUzfi3uuEpuGPLRS4YML9FLSCNj6z52kKa9HWn",
  "key9": "47Wi8xxcAqsf5iJsZkLvQYLQzZofpmz6QSXNfQ62NB9eBVag85qpQj5VcQt9FRMZUn1uEzezCvEDYAxYbrdSEG9h",
  "key10": "SZhv6sYYyXHM8xuVoSNx5UPGwQBhL2jTVyRDSU1QgDs1a43Y7qzDKqYFEjzYQXhhetEA2YWSQUr8DBxde8BtUND",
  "key11": "2TesRvv8z74wYkV8yxx54DjPduxXRBqcRchb6X5WwJsaSBcGp33ULyJCfvY8s3r8BvHjb4yqoMcw5ujgMt4Cmyj9",
  "key12": "qFd3qfbsM9634nBysjxWY2hnhmQ7kASjUTemihC4pCZ2sXoqJdmUCQKnNb9GaJLqZi73zs5H1kvGBbryKEFh7GE",
  "key13": "5jG8X3fWJCKHuxaVH5PPHiMJvGD94seGS2uc2dhsZgjenLUdgEh3BGPUsyXBkiwyQDbCyNwfyAKUJmnmULGj8tE3",
  "key14": "44AZ97ymckdmHNL4oSfDqgURwFdz8gpoAstvZLuqiQb7vr2EEGpB6yxkVKrJSAvUDoF7PrS2UahAkYGL15T9ArUk",
  "key15": "YrX4Dc4ywKvzBepLcGXQG1TYVgsgKwD3Gh4o76ZejagYfgkku5w1RTC6xHQp8BrtJSduq3F3PdNLgFXSnwHH64U",
  "key16": "nshw78fsha2p3TqCeVbBS8ir9Npr97TTVUJemWsm7vcH314QLXBRxxGiDi3YxiwTThUawnKN7t7huGkEv2YKdFt",
  "key17": "3eqq2nGWDKsvUs7PBQe5znSwmrMb4dTKYTqC1QEfvzJPLZXzqs7gNt2r9k5Em46Ap6CnXgMp17U9bidG71gxSnPz",
  "key18": "4TRPqnTitUQj9zYQryqReiGSpSEwkttMaH7xLb3eCESPkSrsmR9Zq7wUXVRqnU6SePituAJLwMHBGo8AEXNYnCDN",
  "key19": "5ebnTY1g1aAttVahb492rm76R3U1oFHEdPjUBqYhLjMdhzGQsc6GqzExQY28thyufL8EtxHAv5VApQ9XBL56JGV4",
  "key20": "5USq5AG3xVnGRutr6U2uAFs981PpgNTSYTsTsa2AF6k8fGFKWbFfDN6jAXhMendPT4BuvA99MrZWBo8d2YJGpjTQ",
  "key21": "48wbm7q3hgGChH7zt8s4Dq6iqT2Qkz2YnMRbdfgQgFANgfxAvyGtLgbnEyL72oG92vdZ64YsAwCHBQwKv7qw6hcd",
  "key22": "2tUKAWsXgBLnCy5qy3cTWXXZaWbkMiidXe4LTgtkh4ERCs83wjZq1XNaqF48GPo7zEPeSp2SHk4apo2Qrw23nggS",
  "key23": "4d1FNKjxc5vA5KP5MjMqaNSJDNUmicHnH7ZQwmrwvz6BbZG824ZtJDYijbd3LeFQfanDgzJtsc5nPi9EozKCYH3p",
  "key24": "2a81gZwomgTB4RaCjqUisZoypxbS4ekZRn41LdpqpCW2eGHXwTLVzyVfj1aYgfcRjBrdQLHsYfiJasAZuVFeWnjR",
  "key25": "4aqj2jQAaZWhFTP7n3reX9mZ76ZJCpUMNVJhECrRkbAtcNAq1YpksB5qVJjuqf6sVsuo63AyM6Wgg8QT1Wt9MZwM",
  "key26": "4bjXrATzCNHMBZ61CKujyVsRrwVPcEHXFgHfMZmZphdsmrrT46kq7hP7c4txmTbbppFF1qUDKQ7E2xRMt2UEEtRx",
  "key27": "443L5sDnirRjDyMB7vbSrjvV6bgHVqREZBBpV7Lcr7pi6aP1QGmRwCrBevHYBocqvH2X3pXCKxZiwq6ws5rnLyH7",
  "key28": "3mvigGAQ5xRjwpwoSvj5g5sL3AyxPigpG5KtALia7maXnKC8ji78pfDsQ8pZk6iqvEx2dct5mgKXgmxb2dZN3ut8",
  "key29": "4fkQY6B1JHjgYRJSNJqETNVVjgUvZBgHVrZBGbtYys1CUQnsxYhAJo8iEjufgr5rkocyUU18csXJfL8nHf35MEZi",
  "key30": "542qCQHGpiWF6o8arFw6vnpTHP3vXLJpjFJ6WZm1XmuFZRHZLVh3oAQ4BnCQRnJ16x3tFC39gNtvxfoStTs7vWsf"
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
