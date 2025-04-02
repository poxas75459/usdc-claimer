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
    "3L7bYHKcQSafeo7b2tQhVw2ZaPTK5Ct2rujwraBJKSgHRB2bwLsU9YyhkWBbPBGhygShuG23uNyavUFsU6wzxDMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXJYKJ1SX791opxRjhSR5vY38hXJCNPbyV7J7sLwYv6jFqSKdZ4h63yN5LkVr2hpbNa4RojkxXdg4Yr4EAtqUef",
  "key1": "2mPGguaGf8Y3sP86JHL7nFoD1S9TFneXdMZMAQADKcE9fw7RD3MA4jNsm7LPrYReicfPAxgYWd7Jk68hLK2k7mvT",
  "key2": "5NXzVWwxserNZhMSEtsJY9cZUsedicK1j47W3ECrkTPyRmUPmaTt5gR38ggXxfqhrNC3vi7R3d3wsfUZvAXBXzpx",
  "key3": "qHLSkviYmssYbLD4RT4uXERGV4YQmCfUyJYYEzEHocsMFrAPtGqRphczcKLH1GveYHPn9MenHibB5Cj7o5fnXL9",
  "key4": "3q3f8CNshw8o1zzNXq7XE4J3VrUhFtA42x9N8euMapNBLV1hBiYyrc4UtLANdCudTX7PHt86xVi1ieYkuCtv7EPz",
  "key5": "fQTf8cHc6AH9C6r35Szxz3JSaqrX4CMZqpTKujQYiVJ2DHgvHN8fvhdiTZqQM1kRfzizoGs5H3a4nxHouSHXPmf",
  "key6": "2Gepqrr9s87VGSLT7oZUT2bm2ao9WkewzakeJNxPek9CNprKPBtXmp6QHwxGTkzZR8T4giRkVfG6HUDS4uniRjVV",
  "key7": "5Qw79jDvMnTXSSxB68J9UQuDg3eXYdLG9xuvtZFCpvjF9sTuzC5TJy21fdKY1PEQeygMULahw2UYSpEynUKCKcJ9",
  "key8": "268c4uiGmHVc1QWLrgA1URAqGNQtbokgZnz8JT6knch43RBAg4G2jKRxTxymcGaT33cuL1aiquDsKvib4ahNYm1c",
  "key9": "2EdeZhRNES8JcNeJFDmH61AHSPbM2F3zVxAnA9XuAkQnMqEsudinQLmp9nuj9Jv16HyxFnjjw4sVFXPjK2ihHZYA",
  "key10": "5dBttkax9iFjtfdju8Rcj618eBjN3s3pXhfPYWH3ZFxY8U91zRBUYnT5R1Y7UgWbVk1Wh115kYJk5azwrQgbMcsc",
  "key11": "2tYLWXR7eAzmPg8MYCRinFY5pVxZJEFgAmXzMWoAMDZeVhebHkbHEBPshxKPrjwd16d7RRwgBRi5YZqScJFt5hJf",
  "key12": "32Az5VPFL1DMcF9kD3UMHV4Aj4b8YW19Xze4wjMwkzUWSQAX9YiNpSxURfUULwywP1CfPPbKcqnQzebpxCvLXwEj",
  "key13": "647jRdHXuB6dymMvyPCG7rGEi8Pr1DsmarjJmbGnU6uw7eDZyk8Bm6dDciK65V55nZTmybsPVuWU8MWW5DxB4uJH",
  "key14": "tCoKtFd6LPxq1LaMZzt23cmFmahoREWyNouFTRXcUMEkYpyehrsvkpm4jGNQWjQasqoduRvAxLe5gXw6LCJ8Lpf",
  "key15": "2q3JHxmXkxvctyDGkjwH9zEDrUZxehrS1nFzvZkFVgxDwVqhLt4WRoe3iwmr752x2i1uzXbfnbcDgAE469yjYqLn",
  "key16": "4qrcK98b3girp7aeGcphF6TKRmjzN9ZNSd8LT3vvvqCHC1p2GCeDujaX6b1HoHbQGaUBC8dUz3oVRbVDFjCinnTJ",
  "key17": "3putTSQ3hQcaCDRVdng11aFJ3aYCzJXsUWGruC4StEXxP6xG5CmZJiY6DwDuJ8J9y13y23XWZG6j6kKPzEfxxSGh",
  "key18": "xs3i7L61o1E7PSuzqPveKvPTbbLL3dw5dTwFznGz1jSQ7Zige1PCEAtmTGdAY3JQxJEaAAYLa35LWsKq1fzG3bB",
  "key19": "28yskUZgydC4dVraPPRmJptLtfApqXJ2DYkgy3gANpe8NpcPkxANwFD6xYR6E72tKkfoSByQNak2bjmzA8eidSN1",
  "key20": "61ihbhBKLSsgY4pq2FbvFmdrZTWPDp2c92Agzjbu1G3Hw4XfnvyStZiTGLUP9DH9tbTTowQ5mJvjEbzgJkfYAdwz",
  "key21": "4EMuytUp1ek1oivjejJQd41Vrq4YGfH1ng9BRFX1rJCGVm7nRKqiGYr3mDw4p6Ejm4gm3oXHKzc6NBki8JxsUeNU",
  "key22": "cEWjg8t9BMnftnP1nBQLfPR8UsNbw5o6bWrrZH2Gr9wcZscCgkG9KC2iXfugK58Ci8MewEX6yEnyk5JFcw2cSWP",
  "key23": "38kyvRovCWsLXQk1EpX43giiS13Pb971GJQzfwgUKdCP9ZsJswf2PN1XimjBv5JMn1MDiJyvbUGvgUW2npbuqKs5",
  "key24": "5xutHLxJq21g5uye4gyiy4tDAs7dbcuA3YJvjLip5xz1qwZBK4cU7sYKJzbiMTs5gFmazdgAGRriYvTUqTzc8s9t",
  "key25": "4C6mMzdWKEs3rhF79XtzLsojSoFfLTbQcJgktCNHSz9o3kTnXMLnA8nqc1fe5fsoTRNMpLXgybYzRpj3hdDa8rBc",
  "key26": "2bKSwXHJzZTXEcwySiARohBoapmWUsH67Bymgubq9yoFE236ksamMEtUA2tKgXb7oXCwrC7M7oyr5ZQUDNxW9d2F",
  "key27": "29j2nmu5o4dduezQH2mb91oSCqpepiVZm8Acp51yUWBwVqHNNk65QYgseo5ozNKtDAa89YPpoyZhAnr3VUN6eJ6R",
  "key28": "3Qhv62wvTktjccWqUxRvkh8kBS19oYVoUWY746uSCU4weBmLXNAW3zmEgGCKXozCdTR5568fzuCXnyReJzBwxUKZ",
  "key29": "39B6qmAruxadbNzGWxgectjxDmthMickJCvQRAN6xrhi8ZNKAeKhJ9seGpZDFTS2YvR4mWY3evZo2TPvo5EBAthU",
  "key30": "3Eenemj4nbhvotPnMFRpTfVqN3DjmakQCUNYtDYt8yyaYgoPU6KTskrXfCDFYgjXXaqT9FSQPZCgZks6rGzm38gr",
  "key31": "4M1T9xsXz4UjGsu2tUieGPh7AJRGfun7Pw7gMwfaQBQgTnXgHPd5Anj7q8MLwXf9Ma1PsTrT9Wg8S4eVG93JV8T5",
  "key32": "5SeZmoTurzfw1R8ygy12w4tL6GJeVhDSKXCEfDU5XAg1uprWMgZnfXboMG4a5RABQCiCU7cacuj3qGuUr4j9crLZ",
  "key33": "26FkrBYTHLiezKzzShFC41vg8qWALThUsDQDiyPUeZLFiw8SppzJKunqLmx1K1u5aSv8vrryNr9vqpKaaajwWjHK",
  "key34": "3HN1CbKChz4JCJpGHnPTaD28VrAAJaEvJ92zad1L7A9XEZrGsLETQ9s43jNcTEcUEW7hCqGxwkspKHDAgxCT3WyL",
  "key35": "3Lg4xc74ikSm1sWDvcRboyCweh1hB26jJfUdZUAjzwUqyeU8oYiWauzYnFvZGPx5MRU4u4UkthypUkBrHwQwZ8nM",
  "key36": "2UN71dx3yrWGy1Jgm5pgn73NABG1kwD2rXmGEmqLhZWE8Lp73F1PwCFeSq19a9jjyAJtfe2mX9QuwGoyXYks4b1t",
  "key37": "2MWRrmHziHXgFMdBFv4wp5L8JAWVPvuZ2RRjaJSQGRMo73vmp1YRYC2o2LsewjrHa4CeWAizjiHxPkJtFNVQ4igZ",
  "key38": "4Kxh2SSna6Y9ecmdez8cpyM37yDeN8PeHgPGN7y4mmBCbXwdpk9KhHSdzs8ouUkjgcVKYKRtbkJVyKvUymmMxxbq",
  "key39": "5u9gUwDf6xqD7Gw5AKrYwtsGaaC41htpXd2D5uMN2pdeh9TqZUVkUYsuvfLqHZ4tNGPD8NR9WMUp3wZDNmgGEHqn",
  "key40": "3DGPDet3EZMtUCb33BuZ2czkBLKNDoBNbtPGSgpYm1mSL9T5G9GLiXLta8PwduSKtwdgYjAFyvDm73NgePaSoMy4",
  "key41": "GeSVFJyhNzqXD4kCbB1FNifUPud6aVrMpC5EUhq9ueXiwiFX8fWmrHKKEseiVa36zHHZ4kSTQcroUZUtSoGedCy",
  "key42": "259ErNzaSbrGR7JDAPGeQZtXtghneLpEMgL2BL1VBUVueYvQgv7myKmF1c1kQcss1LRXaPKfiL8q8tAjPqgFPuyE",
  "key43": "5rYv4pyoXGGUFyYkzcHxR5WyUYV5h2GvKKCvGXvB8oZWnuf3JDnCJ5W53qr1RtV9fKH8B1T2n9fojYUbH9gByKj3",
  "key44": "58giiW6c51NGyP74z72QUjrUwbchuXYsrUBCoKourgAfMSVuu8Tf8qd837ohYvCijFvyJJCt9BSTNenyLEcGwhNx"
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
