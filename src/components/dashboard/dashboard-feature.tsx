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
    "2d7KgmEA9afgUoC1ukNwycoXuA3hdkM7zFBBqQuz8XXKA8v3mSzSD59rNkPpVykPCXhHkQjtshbezmDpXryZhyBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgGT8u1MdvjeXMpCn1WeLEVCDhe6xa8tasShVqg1wQMcxxajCr5dx1K1DVXbETK2cSExUXSiCC6hwoFT7e98nSh",
  "key1": "3co4yzKzoTVt59m1jngG9YM8VokQhP8wkGQGxjVGZUfcxTHr6JVoRg45e6hvQjuLBYykYjnB8uUTMzHL8pJbbo4M",
  "key2": "35oPvyDXrMjByyoLj5hoynNrkYRUFj4hw8Q1Wpg5WmBpCBzcT3bDyEiw8ZznFJHekiThrP3ZVCThGCVeTRS5xmBm",
  "key3": "52sz5DMmZCzG6exYrLRpbrgQyRTdeTou7maLo5JVKny3rAQ3dQL6G47YZ2bn7fHGYiVuySLdvdWuj4yNya2GRFo8",
  "key4": "5ry2jAhFiXRZR8uZ686onXSrobNp18Hq5juFWk6DjzHRpsd26wNXC69uBUuiqBbRhxss3xWZ41DW4u1bfwauGqBE",
  "key5": "3RPorvBbr4xRwH8s1uXF4mG13wNXdtrBWjoGAQ8cykzd6cKr9jz1KqA4kssjieEUrPdZC4s9THSwom3moMcA3irW",
  "key6": "4Yqjpu6Lo9V1XyhGJuhBEy9dfrGtfmQgm6kJj1F1VTdTTYrjzCf5ov7vpgidXFFUDmN78tNL95GVHRaVwqWZf7su",
  "key7": "4h9FEiCCtfcECeJYbtt7cTzqgMCckLrjpMMPvLCDRyZU2A3kFrN3unhy4MpbEBMusZELdSnvo6XQzunmBBP62vsJ",
  "key8": "2nVXJQugQZM9HpBqnBKgxJLGMNX2iYtKEVFiZ2f5jNHF7FN9nbUc39A7yUyPdEqa3dtM25hkjMBGtZs8uhiigBFm",
  "key9": "4AnDH4on8KcZqqchHzo9dtCkrjWSPR11rFC8PHLaZDf5ZbjYTDc37jpvaTvNjPBQ6jYUiT6hHfJTubpEBXyTpyXS",
  "key10": "5hCPhDjFUQ9iWfC45cvRS3RxRk7N3XMCCwTJZCTaUKu1EkvYGYqzBHqM2UiF1p56P5oiBdELfbkWy4y5RteAS1vJ",
  "key11": "4ngD2i4Hd9GoGhwah1mhkT1Ghog3Tt5L43wW7hEqcSvSp9Z9f2Fg8SJ82UModBt51e46wPVE6x1a432AoL784ZZH",
  "key12": "631apYMgjpTdJeVHRrnYLH9mMQy5G6YNfT8gELxevWCVD8EgP3hyuoxaETMF2MW9FSUyBKJWXBqmmTSpqPxgXpQz",
  "key13": "LApsHxP3oeDmDjKF4i1vK8ZatDXDYHTZyU9wxfdw9aCHK7Y7xrRevwHUzext5LoaMd13LawBJGuqa3tyGdM4QE2",
  "key14": "4UheEEPPPHz4Xy6i5TW3Wf7wu2RBWspLhxo2UZMbxK5BGJ2eaicxoYUm5gBW9NUa4PmaZkQY7EJ3QmSg2SxbobWN",
  "key15": "5UzNNc8SRqsMJRVBksdta2JzH3fBykwDv2vZd2TCYUeEVaqQqkrX29fw5aGZkjGuQbsKWf7b17K6Hhs3FqXLFSxq",
  "key16": "4t3wELmQV79WhGMe1LtP6okaqQkWijuvdSqXvJSWjLeqJTzgFfWaQPMzBXww9dsfcWk8Lfr4WaS8qvcDhYyWetxe",
  "key17": "5k4e4BQjceFaVqg7HfjyDL658wzSEcwY67Qyt4fX7wQAWAsutyWL3KFVWfzog9TkXfNe2vzKfXu3vwukiFHYYZrm",
  "key18": "3geQKsWMfu9z8Zn8A3SjRvNzuqYrn4Yi6oSHPKrNYmMHS3WTCYtKZUWFbFi3gPNMA4vdLnLCQyVotK6xbA76ZXP4",
  "key19": "351yiBooqQeTw1UmsvYorgmnjTT8NtAuqWdXFM13bvB33WcERcrLVCBCMwgj4omFvga4gwHrHmhHoSCFFXPYbkBR",
  "key20": "k3WYvzN94ps8Erbp2gAbGvo6e3zLxmj7fMr6iEvabtRLTwyRMnkNFF4ygWSWhsZstZzq1wo41mVezcnfPj4ML3s",
  "key21": "Kq8uEbVnhnLmtwkMKrXaz39sTrjijVrPMNBDYHquh2GJb84fsjkSBWjFiaXdQ1wkEnZyRWA9Em7Baw1Cmwt8RWy",
  "key22": "5r2NwGL6VchrvWzYnGoTeLYyNSZdzihxiM8jmNXi3dWiP87fDumgRjdVmkQKYQvXo3GKr3iSuunmDa41ziAuoQyS",
  "key23": "5Z5gE6VHqjdMGEqjCekFN7haM64ZBFWXNGvvRzYAyERkKnsX5AFsPSrZi5An84kLPXBaSQTTsdYaP6guXgpigs52",
  "key24": "D5zaQYeh2sg172s6G1ZQqB52ibGZq2kyLwjS3PTWX8g7cunJuVUdhuEUs2pAtVBkPx2VKHe9fD945crwCrTrF4c",
  "key25": "31M3tJeUVHZvgD6nKveKEWfiNQ2M9xPQL6cCrdqKhqxxFJx3GnNUDtHY57YjHG1o61B2C2Bpo5v9watLYwd8fhhQ",
  "key26": "3GhKShQwqj9pwffMbpTxS2BUstq1DyDUriRVq2bXevNsuBzBPPaY3VMbLGXcKZnL8v8MHPw948Q8BejXaKvuiEem",
  "key27": "5F4EKZVRiXmKH5kd6XJQGQjsVoZGbKZJmb1WU4agAZJfkNRPBm6ks8GTzsnPY7ChsSWd4KFofkujJDaVSGAyapLA",
  "key28": "2HjtfAy845egdbQm19mz93XX99z1at8TNuMqc14McNARy9ZT1bf4p33FkDcrMkcsywsvkLajTuxvdc8ZYXnmi793",
  "key29": "3EjkCDLShq8hFjmUtf2uGofrM4WgqCfXwvVojQbm4ZcbcgdtchESvhpMQvkUskqJHpPEQrRvKemJoGVCeu7Z2GLn",
  "key30": "3Y5P7XCHeGZmYmedGN1wv1scTpjAeoby8Jen79YkHN7KYGpuHft7r3ygAjhsVRp932FvguNqoh2RzLnAcUGdNHcx",
  "key31": "63XjfnBbxUY87r2JdW56RqH2M8f6bKWJvpP9xcD1kckYPtVEtbYyefHjz3uBMrzcZgYXtbQ4s7J1GCbKqNtiRBeb",
  "key32": "2qqa9uFEquv7H2zwqxctVJHRFPENSe838HwFAFQFTqQ7H9T6Fa4pYgAquB7S9N1nEXNtnLwCmMAQRaBbJSUBfnY2",
  "key33": "3Qgdw87gZJGdDpwpGX219z16NdPYjeeurgozZCbmBto8j7Sddnvj2NDPX37KmurMuoEWHEC852A9P4bC57RKKBPd",
  "key34": "4FbNox8tT53CXuosfBQKkX2JYh5ZuA1oXq7zr3dU6Bp5o2hyy5tBtDzJ68N23b2zVDyy8xcf6yo5wYgJ4EvtRdYc",
  "key35": "2NzaEyBrwgpzFzPJZKK6LzPrL9GGDkoy3TK8RoGCnhyRdDnvsa7Q7zPN1QuhhJMDgtuF24M5mjpQ7q8w5JrQMRax",
  "key36": "SsUxmhxoTfcUG97AuF5d4tiovho7aEcCtM679yh1UydJdqPN2BK6RtzAmMtTC5QSur9B7SHzaEFKWE55Pvp3jED"
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
