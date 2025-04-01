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
    "5e3WDjBkX71EFiwBuRg5DKzqSScwVS1sBLWde2GAogvhtusiMUbD3pcPrG9MnWWNkQ6mTES1U13GHZFuYixipbu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgLwFJmWEGduvnRcEG2AEi1fBbwtySarFBLgujU9qsxomWYhCdAq6oY4ZfaSnDSB1xhvWobGEARnU5DtYkweq4g",
  "key1": "cMAQ7rZ5rW6N1kxQgvGnaL6d1u4VbFgJNXSxouGCwRmtNtxQtGPqmDDHvW4CNKbtgSQ566xj58m2YJzLn2fKgJi",
  "key2": "4QR7LB69Mm8Dsn26UbL9S31QTe2vvdw64CAiUrJMpiXoo8V34DyZEejbeQN3ty262kC8Xx7wkyGw6i2JLT7rKUCN",
  "key3": "5Uokex8Vz1nftT4LMYNTbsyNJKtGAD3B7kXXUxTr1ZAd4oF3bKdetsYAvWp8KBLZhN4587LfqGxp9RUGbrz7kJ8L",
  "key4": "5cfzuFWoUtYkpWfJ8S79UzJ29idmTc2WBEhXBNqeYyUrqGXzgZbvCVeUGD4orQPufMRM6TYh21gpZ33nTX1YDB1d",
  "key5": "1LA1JTyaaJih6DexXxmrJXH9ypHtuWvy7pTV2p9rYTFcGmGqAJfiAkxWuAUZRDTKWAzfWiGjpWxi6ggrfe7uCnq",
  "key6": "375xdb6fJEFxcRJj6tH8sQSBkfHC37i2zdKExgZav2YmHyCPjh6gRGwdv6TzetFAx56fBmwwZ34UiBU33UjbPDsD",
  "key7": "3uDCL8SwcqY4t5ydaKbMCSfbWrsdKPVSFhGbQncMHiQyUzHYLWRixmPuzJoqqehCcnKVvakN9JpMVq4wXyxkeXgZ",
  "key8": "4k9dZbPKxw2AJZCi6g4Z9Wm4E9ipfnkUDgn9eE4D3aPr6x72TWE5aWiCMGwkCTCu4CrkHgR3djWqVCfqpTgpwxcQ",
  "key9": "3mqUSnEFuXdZURH1A51sLRSd6ukcMaAF2VGVLMd44Pb2pLgxhr7qXyV3WJzMp5uG9iF3RP8Qo6bY185RgJwpqrqp",
  "key10": "31s8dgUXgyGqqUmWJoPnGVG8vTUJEarXP2SRUwh92qsxcCpNskK7KidGVpbkovtRxL7r5VgMMiqpv1RkHV1qBsug",
  "key11": "24ErYD1Lfftz27SmyjfidF6x59oSUF47XuQts7K8mB8KjzqMMotr4Pb19yXZENVHnYpczpYFy8QMeZXzxKzf4wAp",
  "key12": "4Py1z1muYNY4zACYKvmVRMUA4gSP8nFqX3r7a1UKEvMxKjQP9sCCU12b41yCvvf72CHAUSmTA1oyF3fSAVwQeF2D",
  "key13": "5L4ACobriXqHGV3x464xcyakCms5uajPuSDbeYDXHWvvivdeqwav7BH8FKr5JCmbY3aU7VhAubno5WeVrmL5fXsf",
  "key14": "5sy7tHvJSKX5EY4aZbihvQfLcTP5wVQbw2VBrHT4dnkdtvnKrf3mtnZTyoG7BobgUDPoGCWHmvD9PHs34xcjCLR4",
  "key15": "5WWRM5X1ndJECWt7qja5Q7jUDErGoL1WJs7uHiHxb6cwq7TwmHC7qvkySXcMDTYJ6SvULkdYgs8ot42L6cAob8GR",
  "key16": "5CZCe5SjQ36jAaNK9z4pucnBV1NWqzvkwhARi2nHDmUeJLXg9TNbLzm4gvPV1FHDXaTKS8nvq7TJDxdNGefyziH7",
  "key17": "5hECvgdJ2q6Nh1inrK2RRN7yeaBM6HEJ2h5T2amNL6neG7fyMF23ZmqHmNfD8CJ6LyEuVhqsnVNxPLfjJEzHfXyF",
  "key18": "5bq3m5pcteRBpt4mCMn1th7ZuKCLGax58bkobeE8edgX25DzG3eJPVpYJEC5Po4PK6jMVty4jZYnH14GGWgP7Dph",
  "key19": "4Rz24AaAwaNYpQbV191kpQEQPaatTvzivGAUxzs7QENc5o2ZVwBA86buuVBrB1phBs5V5FsSMLtdhG3e5PDaGY1w",
  "key20": "2cg1TXGYXghpSbENRNEP6iTrraPxJsBsXkXVtuo8mk7RSzebNE56yU969tPsPevsDix4J8qwrwwQYGup8gNtFQof",
  "key21": "otW55ChheMBNW1rTYzLWt72qjfGvi9S3ajqHv5nPQUr5sWbUi36TnYAxrwKdG1jt9dojSRBFPR4QsdLKQjH4XCn",
  "key22": "5usLGwb1NG2kMN7fh2aNzsYZyf5atvjfY93AA6sZRdWDqz5WVPwVLt31dZQ4vLUoNHMymQkNvcna57oVyaDJTYit",
  "key23": "X7hhiQB7zsEU8rb3orQWVJKBTcQZoLC14QZNcY5ryh6YW9k4JL3yhKDvEzbbGReGtFSZUnkswy5CsmnPYZsJU2n",
  "key24": "2AeWR1widNJGwNbiziVavmzSsCKYunNvDadE9wiGoJoddcWAE45AjtbyQ1V3u6JC6vhXpTBSgRqwHhxQEfzqk1Th",
  "key25": "4FvDHXKyRtQNQci6NoHJfxHNf7Zkn8CVsCkwkcyGbFj28PNzTf4g7o6oARQCnQGrfbZwJZShKJRgNVGuDCYCtKw",
  "key26": "49Phf89q16Hgppujj4rSEve1t18mjAinSbCzwdMHm4cfznKoHeojwYzzqs7UiQDnLEuzz9uNNYLMnZCknCwwstAi",
  "key27": "5KDC2WrVUKktqjpyP4qRJfmVX47nYDNZZfHUvBWeWn17BPWYHVCzxuDQThook1qEAaPtDAPt3Gfr97KGkxweuqyC",
  "key28": "2vwwMm8tQqdwZqRHJ1xoNu7MxkwzrZrmCRahXcqRnEo9afJcG2js2e3ZBGFHFf9ZiR3MytLukdvjSKXzP1ps6z2h",
  "key29": "Hi5dKsAGAjWYw5HRBz2icUE5EGcwKmDW7LZJGTSvCBzXoAT8evixTJmjQMywbYQhLx9XRBJcR1FcnFzjDE3VGa7",
  "key30": "4BYHBPEfwFj1HMG9siPPyJkTtGRLpizxTiFMQybnkdRuXC2b81GXjLzv8FhCTGv9YXdeur7WXwnqn4nhVq7eftzH",
  "key31": "52VkPLmebftK448PbbUMQt8dp3ZCH7zYfkNkbgoTuriTykXjxQqkzYwVAyr8LQ9UiXpcWME8pwNhNYTV35fchoxq",
  "key32": "4pKM4iv79CWSvw5HLC7t8FCGiVb8BY5BC2xARwKDShzUEc2CemMQFc7Z53LPh9P44ZLdWJjYbuQRQQPNL6KWYjX5",
  "key33": "4YezqJY8CqC3yuATitGhRyQG3kWpnFvDqWW9spmTkV8exdmuw7ZmtGLLreSEmjc2kyTbcKAVsdx5PECsEG3HFjwt",
  "key34": "3Ff9HwA62CrX6r819gsNCyWJ6ySPp3JJdbuqE9YBd2EGtwnYztMvymMPGpaRNz2nLmqh9DM3axJRo4QqSZsDCELA",
  "key35": "5MTSp9F8Xopd3ubQyqMgvmung8cuKw3NUUizi8qmMQfJ57M1ZDJvuS5ALtEtmyTAqdYBDMVRdakuTuoZU1sBGvt9",
  "key36": "5uyjfGGRW9ViXYQpqo5oHAEaJC5vHGBsbC9fRHDPfxSxJ4cRTMXk12JVVwWWDuLWQ6TUwVsWkFV3apBWEiUaVwBD",
  "key37": "ycZZjyccGbqT7vL862DdUvDrnqXEoadpSFHZFKzcFcFxoftfQJhXMP7CeojjDLP8Mf9d1JFtQPZk44XtfgEqHQn",
  "key38": "QnybPmv3eJpFM37wWYmkSV1HiKRjpsgqgbmFamqNVwBXYyUHqKYBZJUrdk5Wvi2wcKrhxSsroE8r32LQ5pWkFUF",
  "key39": "4YvP8qQXheE5RsxWk5Rbsvdt9h34m7ti3s2ZeLKTzrjSTv9h5s6KThChgkX5eK1SJkKSUuo7QvbaPgwShBPY7cx3",
  "key40": "4hAu7K5Lp4i4ihWjtfVYRjiv5BrkhJAo5MWeyBShgt8WXGMzv9V4voYBrVU8LL3wKX1yvVB59vR2AJKJGgKERMj4",
  "key41": "4KB1v4AQtpTvY9CNNtzthiurwf292XKYkitFLgevMRj3V5FkBPhZiXX5cDCQWD5odXtvpUWcmgXUxkZdP6wCDL57",
  "key42": "WYUtBZKSiVwPeg7rbriDYkWDyvPphfD4V11qPcBMPztsDWWqTryvYez9CpAJjfP7eMMKWZXjNVNnxo868RYuszV",
  "key43": "53teB5nt8fsmAMxPoANyS48soE32hizPVSmMqM78yCrPPoF6C4BWujL3LSTeNYABwfxiSzts2AN6q1cZrBcFEcD6",
  "key44": "2K2zxM4S1surVPXW9GnV3ftCYRkjEQ4Qx2ucNhwzGUbFCUTrcWBYtbzkD2XPtXJu8H9xjSwzJEyyNZEzSqJq8Vrg"
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
