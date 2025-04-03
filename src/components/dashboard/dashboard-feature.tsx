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
    "fvohTaDKPDp9rRcVLWhpssGit8ByPGsQkMVKNP6BRhdQxQRUJhNrRQXQVYP4whPu8S8KdouPzqDgJL6pJgLZpga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2my9VCnB5fSYsjkgQWQKYnSGWgxDYqo2eBuaCSNTwismeu3H8AePxfh7w4evnPpScs3Td11knyK56UjDLcB9QEfa",
  "key1": "3xEz1shXYmNyofFvMwie9esAAtmAJFQfFpgi929mr8rcJdXPGQ1figoZZPXdLaWBSqwFX7tmwFipmfNMde9nTe7s",
  "key2": "2iaqziEa3T1m5HtA2kGq5CgqqKavsoE1yAXsksNFg4ybeJ3kqdqSFyEWinLbDMKDkarybTdsSvVNuGXopK8826oC",
  "key3": "2Pz9SrFvGgKjjebsoTRq9YrqPZ5LwrQXDo77JfyjfdB9dUm6TAhzkq7TQ5mFNe4xsdpYmVi1NmnWYdhExxvnb2yA",
  "key4": "5Q5yHLzgRNvZJDcsfTARQPKPK1BxdzkdNfs1X7KSThBNkaCY8KsdrQpgnnL72aW7u5eqMNobNF4Zwrc2spDBb3GY",
  "key5": "KTgj8CLzWwJ68zKR12BiCoN6upMibJcgHqfwD96TseKGYXse31rtLEq1e2ZYgHoD6eRJ3rxLjgbzmM1JMnMEfid",
  "key6": "5QsQsRiWPk5rg12Gii7BAaSKhvjr6Aob7qDy8yb7aGWoEaup1mktVvduoSxRjXM4VqDXyFQnHKuuXpPkA6caXLGR",
  "key7": "yuCrL5cbroUPLLqda2Vnd1RiNphLNDo8q1RbhVyJXf5dJdY8hFgTxL9NRuAgLKGyqaAQkmAA8Ti5AWxVz3LGzhY",
  "key8": "4rN1BkdsFC8xYca5ZqzxNjzsdmYxBmQF4QrS35HtQcj2iHMEmae2EpzoLv6qeKGBiX6ncpCs5Ja8rzzDtUCHVPDb",
  "key9": "3sE58KXCHuuBEyURSh3Mu8wNEKcTvvxHL5PghKm5jU5y2JNyjfDU3BRRqnCrCusBnoG45hUJ5x6nf22hKaquU4QZ",
  "key10": "3jf4gSFHR4XED1BfVqrWcb7dySwmQ5tCCaKwYxAShu27B9BGdds9uiQmy48UGhAFTFgzS5Pb8ZjPnHHjNrkZjkY3",
  "key11": "3q6hLdAxyUGHPBqCMoGRCySJXxbogR74ap6UB1HQ5cVcDSXzhCvFMttDqCUs3hzxphRnmu8QFrQw73Ju1AfDtoG8",
  "key12": "56A1Y7nzsbMWNLYvAU5dzGQ5c7Czq46msmWJJveFezmZx1Stwrzvvhdx46J3SdJtu4RhjF2soaxL9uU6EfuZ9mDw",
  "key13": "MEwiS4WuEkzAQU4q5gNZKvXDawaMvRZDBTW3bC12AtgoZg4StNuAaJ6ownMH6wVavwGgWMViW26ZA5c6UabQgzP",
  "key14": "2jNsKgNUDrkx2Wr9sxhvr4evSQkbqgNTxWD6syQ5i8zA9pTe7nMK8WS2RTvgZ4Y82dUVh12QDbX63UH489urJ4uy",
  "key15": "43YJYx6nrbVSBfCkqNmHyYXqNuRNhRXCVrLMRphLrou7h1JrjEwprrdKbx1fjfBbJUcPsAbxAi13QWcjczc6i2fH",
  "key16": "5r6N4A2PXfoZceMkpL5mxeVk1oVPP5LpuRUeR7uiHPaqCGTqMCi1R9L58psFgwvaUBPgSTqYT98XrSyB7jVvKoXv",
  "key17": "2vePnCvBhGCWJ4kJot5aTVshQGAhkMERjdGzpoHQ3s31VNUCxTGhdfgtjEHoqNJfPpf15NnhxuqFxv8DZd6Puqhz",
  "key18": "2PuFfF3Aan1jK4Sb44CZqKoFLSph8BeQw8YUnzG6xRuc1FfTKiRkekd4vKd9WhXPydBNy9HQTSr3QKCwiS6d47bw",
  "key19": "2jn9vWU2eHWX6dpxvTn1WUzTRC7yuk2xm2BVZ7DpUEbYaXMUNc1jiwtov8zffzetHCRrFLqiHbSV1Nq9BPQcmYCQ",
  "key20": "3emfgk6HSwzZfxsV9s4Jztw1NFAU3QwfjFBd6fY6wG9DJT4YJ3x5LHZNhoetr3Tjy5JhQTapbBLMMtFAGX5w8Hca",
  "key21": "59dJcPq2T1jUZxrpn2SLns2gBjvBmRCt6TkYTHDC9qtgzFLJgccF7fiDFomjgrZcCp7PVxKTCcGvJVeQAjPBAJcS",
  "key22": "PMU5HCBbyVM3qqa4yszpJVP6B3PfbvGEzRWAcN6XQKtwDNFKpLr9nbjPaFPuRdEwxDn2maHojEEbMx4DH73HGFL",
  "key23": "5HYCsiYT8QVnz85LsPa6jVW3JyXJmsdiygRT5ZyLpAnLzhvQDqboqnx4rt5Um7DY2YrRHsv8msTMpTYBYpbgkZqm",
  "key24": "2zF6ksd5os9QJrVwCw6ff3CPpxxAQgtpbhu7cfQ8y9FrK2vKjVTQSNvkpLwPTjKFjhe8gSfkQMTSe4Qig5QSBv59",
  "key25": "5w3x1qgePtFo4yXJVsPZgR4Bngkubeyn9on6JZQbrnN9c14i1pATCvs2AHRAfdoaynoovczefXem4fbUZiNWvntK",
  "key26": "4a4B8yq6pzC9Xc7bDboBa5iKgwXPUK9pMEey3ZYtXx3Px7F74Rv16rZ7h8pHLK3GPqjmFg3LjN9CdFkPC81GvWiS",
  "key27": "42mSWtHf3xjFsqLGnMeupweYabZG1BkxfYvEf9aBaNgHxj5CKSTUJQeSGXQmynjnh8C6PoYbbDDvVjRtxNRCd2uy",
  "key28": "2C6TxwcM4h5STdwDrzvxXNrWuM1XL5ZvuzP3wFYWF3odP4pBXsZfwPePBfKiqjRF1Wvj8CT2yDy3XGHF66qCDnWN",
  "key29": "53JUrpxqmCWmSYiigVE8eAPdSyvbKt6EYbtMemRodcjSbacQVfcdS9J4eEgYZAJNfQi5w4uHT72uAQMzzLE487MK",
  "key30": "3hFWfTbx3K7x8pQD6TbyGf1FuxNhXuqRARPqB7zgDbL6u8bs1YnEaWbEJJHPnpRJL6FYPSdorZgqfm3gaXJ2FtwC",
  "key31": "44uZ3KzPQeaY7MSwnAPYiC7ueyjA4atAMZ3p8ibUMtfdm4XL82q93E7ekw3Apy7c3u6mNEE2EAhwwUX3iP2ctL5j",
  "key32": "45XuRQKqVfyKkanQybg1mMGZbjW4uVnf1jkprpTuXAWdQf4G1ghNoB7uC4YxoJqWRBF5oyqq4XWgjxXnAmyiSGJk",
  "key33": "5MPbGz2ooJYyc3C314ee7drexNdaH8y5egTJCcNtNCv2A6ZaAkz4Dgga4zvRpN62CqBkbc2KRNp8NmPhZXhvU2z6",
  "key34": "3TccRoSksPuh7i2ZoDsVMkGT4HDsJ8LS3LZN52F4nf2uiazrcPiu8LTwxAmamVEEMXMH3V6QCL6bv9u1534wrF2j",
  "key35": "7wYStDGwQNQdEEd4imtyU122x9QWCQs8NDMwGXde4fMG4LQ7RXEfuAPFxaGWHGcPJq3gwARWVhDKPg78cvMkf3H",
  "key36": "4SWaBmdqcwhUUbHbLnnJdAiNFyR5hkt2uEUt8Y8atjvZzSH27WXxN9ma4CmXUUAUg8N5H9Cce5WKDLR86WvFgzCP",
  "key37": "3duYtW3EYgaqB51EZwoU2T7vk8SrsaE8MkKK29qfVq33Pe1wCjEXZzEHGWdLHvLJst9n4mCM1m8fV1LP3sv5LSG6",
  "key38": "887Qhec4Da9d7z9YsnURH61j4Y2jCkukrtfd2LxUcJCxDcpch78GgBMWKtN7X2WFFNW5zYPP2Y8mQaG7csebAje",
  "key39": "4Y3JdhGs4tFoxsWUHf8isz86WEEQSSgrQ3Ma1wRaKnenavtdeZDTwGwy5D8KgzAYFPx1pmk9dnboupseLykzjScX",
  "key40": "3TgTwRVeoRhWKssPa4oTrfTBuGbrGHwpDFo8U4XmgJM1UeWccawdherN7ZPSMSxdapr1d8mZUvGGLJasY222FSC",
  "key41": "3uTtbgxzBijPCxnABmpZdeScycDFqbBENZTfebawZvj94bUoziuAac5Mj9nu6qXT6NMZ1HbEZQ7DvScTK8NeBw1w"
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
