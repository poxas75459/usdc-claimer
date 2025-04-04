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
    "4BjJhCkXuSaXwEFumw1KuucUm5PJL9S91ogtjrGbosxtKJJmeYnap9UjD6PfvZ9woi9dmBSeP4m13FooueNUPhV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4GxtQF7rZBo9JQGVyGuoihKkWptkv5morvq2eZoze1uzA6HgCd4rZMugELUCs8xBt8yLieKEpM8HtfjhiqUc9T",
  "key1": "4STCAM2umwKuKXLh3W6EMUYU7zcZwehWuS7osE8XBU5cgcw2X8CzQidymwHZHdMfijrKWHBNP4sVG4NnWsqXwhSS",
  "key2": "44qj3rH6H7WjyMDWdXymuQ1wkZFid9rtZ1AZokaeoF2LkpXJcnHtrGaGHHnbVHWGuhkWPAcHSg5af3yzpjAmiCLS",
  "key3": "3VZwC8ymnJ5sCA4xdAwAzrTP8os3LiQhefcfqFwJWLJowzLnpiobiu38Ec8dUUN9fyzmp26p17cPN1wjSGPdkQVD",
  "key4": "naw2WEicMPNnt2m697NK8Av9QReUN2a8DbAXmX1ryqbo3nJev8uQG66ZKDYa5DWE6AQuuc9bBLywgd1FBfPu9jj",
  "key5": "2dnRWWjqBYDN5Ui3iwbhzE6MtU7qcEjWSKFmjk3dmzJiNmnJg1ojpRmeohSLrmamGD9y9YdZVqLftQLnkq8WZYGg",
  "key6": "3H6EKhxsXZ2uweXrcoKPAsSYu4TpUsUxwfm1B118oG1izXy4VoBrW2aP1a6weVZnqS3j1TDzKf7ZYE69LG7dBwx3",
  "key7": "2bnhJdKnoVUqCp8fAoXWDotCVjFvnkQntJhDAvbSmqZNDj3MK8rsAMDVsH91WdTmXLvCpA1v6ymvLdrhrGRXEEbf",
  "key8": "3ZVi5R3p4yrxs5wiwuMM1TXbeZDWivYzXqVrDG9eDm3fp7bQm38ovndG16jhS9NTdv65urmzgLf9jgyxwkTGD4cp",
  "key9": "4WmRtSLqSKELcsuCAcin11kfM9LVnCQupaZFXk42NMPz5cxRjrAoNgoPWUVBfRAbaxyofwpB3fyoLWnpmPd6o6u6",
  "key10": "5NgV9xnKjgBdZ1LB1AB5vcEAkyzSUruYR9dZ9z4npCsqUBh4XUrNeP4RPSCE55EG1SZGrTUVKj86JraJ33HGCyfK",
  "key11": "5ywJMxvAFPz74aLY91o5YcXNBAKcETQu3991Bye2J5RGPRWaimEHCA6UTZDEiyhz3XDpqr3dtWPgqpTeBEf1JvDB",
  "key12": "3EmHR5ox9hKbwEcoSSucsauHbvCAnpViYoUPPJoffusxPbGYtYBpHMjtAYFau4aRH4QxUiF33pLYJm4Mc2y4kDH3",
  "key13": "4TDniLGhGBGa9iVx9mki2mYENjETo9PeKbXxse2CXL5PtR6cJTseR4vdN9arMRRpLghyab4tCf93ZKwMKmRgbJ4h",
  "key14": "5t4RufhHzry8VGu2mtwDdDDHg7QRpr8sMStDQiSfK6NXnV7hmVi9T9ksSpRwSSG75xib2mGCJxwKZSPxokom2zmj",
  "key15": "5UFt6xWaqUNEAwCwSPRdaTCo3Rr7aC9TkLhtoNhotnHSxve4HBwh5nsfrYj34yv9tBoeLWiLkfG3GN9keknbvs2k",
  "key16": "5isWEU5YVqfbpw2wnFPkEqeMATQANbYK6oaE2ohEodfWa9We8bqVLkRAvorTXeRGNgJCsK8RafHgTX92tH2TJcMF",
  "key17": "5vG9cEa2GJiUwLmuSxy1rk3vh3RNkmc5ki5gknoKcHWRVFJqysza5Gu4iexbB8kAq5NsmWUP6jV3N8o1ueycFEyY",
  "key18": "5m28kyuAweYrkxBRrMx3XTHuNBZd4p91Dvm9ueCnspf5ogUPEwmTTTxQzwqBLRv14fgs6He7ZqHrFyw5mT7TjJeC",
  "key19": "3ymNnYobmYafS3h5H9EDrANfnFi7fmFrKtVyRdkgKJeyJe27nYcoQfCRhHP2EF3kJjfVBqB9AzMc4WwfTVR4V5VF",
  "key20": "Di6mx7LHtgzMzMYQog9ouyu936fS1gjVAHkJMy5uzsDHR3SkPAEbKx1xGfML6sJHvxBYZUkx1UNLGSn4uqxLBhf",
  "key21": "5vsqWpw1rPoDQpwyp42mWSQKaqAwkEyXCbDtFXAQo1FJ134gaBvx66FmNQKN7LWSsuoeMLC11kLk7aV172TkJGpi",
  "key22": "3fQfpNRfK7s8ZiiDAcqW721WeMjjsGpESMiabxuqTSQLwgo1MR66Hnvv6TdKtQ22AyRtLjNA6EYQncPAQX8wxok",
  "key23": "57iN41dAV6B5AxjAjT7VkQ8jPgsRttzzXbaUUtsMaaN8dPZJqBX8geLDy2Q1F8e1P8LyTENb8qt7dRqZuJ9nxZwu",
  "key24": "2C7XTcCNtsK1LrKh17qTJSWPcnbQz5Vdrpg3X4QXDmKtenjqoCxkpsfbK6H3xpX9BJof8K8vqqfvTk2mdJCdDXAn",
  "key25": "3GpTWRquKhADGJiBdn5aU2YMpyQpjKZtMjHn48LV4T2jtNTmBgSYtpA6fYgjHPRsgDfuf9WpZmKsQ5nbC5chfUxP",
  "key26": "5H4r7CZon2CJTP2daAkqcQQ5pUJGjGVAz8Xda33BHrnfCjwuHuvbuQP4c7ApeEsJbQtKNPxM6Q7ojU6EenGekCRH",
  "key27": "4tir7MXur5uFCSPsXhUpyDkWcbtrGijc6ACcY4Hrn4wYP85rm1EQGK3BQoGAWA1gHPiQH26rJutMqr2CSQurDhx2",
  "key28": "48UKiopEJrBpKw2hwMTaRxhAdyA3Q5md6d6saeDkJDZYheG57idTJsU5rfTWPAh9C5YTJJwrfVijQjEdth9cSZh9",
  "key29": "4b69UFUtfebBvFn9T5AD48fszf4oDuKrZGUj929aDj32YxeQvTcNackAXv5njMcDCz2iypERroAPQn3ZG81wSs4m",
  "key30": "3nzvvMwSnM1fppeLtWuccy5P988BEqCvwDR1qoZxzRMdxYDJNca3Dkk3CfWfFMPiY8PUAF8g7YC77NTPJrYbxQKo",
  "key31": "d2vtcqqvrcwebMgJKXxF82npuAFJy54ukxBmzze3gLthZnz6mTr9pgDQUU7CCTXGyFeYh99pPLLpiyfeHHU6iVk",
  "key32": "MLc3ER737BisdQbC1rH2rFd47hZKBdQb3m3DJYCnUEv49GaycgeFeiXKoyFdtgYH93WRKsUv3RdrHLsMfGU2mGS",
  "key33": "zn91ewvtDBkzCAzW1FP8ZNWWLmHZFBiMR5yxxaCsfTrQPKgut7Nw3BrPi7DdZeyPKTmmnkqk59n22BvTwbVorbq",
  "key34": "4ceB8q6kwvT5KeQgx9iUEkFd4DEj92zVcYGbAjuBAhUdcz6HdyAyATmrdca1TnxX7knwtY2WS3Eyss9R1WLnXjnE",
  "key35": "ajfLd2JbPVbHh1RypKRhTV4dkeSUk2ojoVmWLJcnMEM5DZvJtV7pTsTZZ3sKHQSEMuXJvVnjG5YNY2jRQg15SRf",
  "key36": "4mUBX7a5oXJaMGDndv4FMRPdHCp8eufoieYzjDPPRh6ouqiZwURfGjqbnb1Yiq2YP2gC8NjoTpbz2DTBDQpT76Xt",
  "key37": "XaswGwmZrgatxkux1P1B2JnosutpjvrQZmxsCJGQvaTckvEhmjn6Yc1JbH8CopNZzoitVmqz37JCuZ7sonoq77d",
  "key38": "u3tmVz5hkNst1toSsMo7YqiZfpRrE9QCHio3VQWtUAQBhk9cyyNLSrwihzdWA23euAF2Ue8tGWg5MsCj453LkUR",
  "key39": "4bf62Qqa8UPSSM72UHfTxhy7BQttJiLAh84VzGk8cxysNrSDfULTQQoZx1kbKuV6sMuRjiKZ7kUatrTRaGgLK1DY",
  "key40": "341zHjkKUeVZFvMCcdoHwL9Lt5ABwh2qMe2Nw4YR6iGz11JMfg6Gbwd5a2hf7dh8H2Qqo9Tc7UHUNPrXxddsZFro",
  "key41": "D3bLMnw6avpyL5DBXUfLC4qiK7WT3YYmi4zz9ERV4ZCMH4ZE9AEXJE9JzzFXvvLuh5K55ySnXDpoVJRAttUkprb",
  "key42": "3LMFhDfwhTcoXmY1aFXbqNHp3K36t4jwBKCsmtoqDQbRLtm9JyqGKkhC2ySsqWGWD9JTF9ZoNn7Wx3Lvc9EL6q21",
  "key43": "4YxPSqD95NfQMg5L4hwvgo4pRPq7AgAwnxjccHuckFBszS1e3mn3MREZcPi8yY5vgJ2KQSRKQofwtRye1BPhCdYu",
  "key44": "tZkrWaKeiJp42VTUv2PJ7oB354LpFe1BcyRsKZAtPR4YBU6VnXSdo7B3WTCkwjdYja3jCUHgFc66qA4txUcG2DT",
  "key45": "VEpYt7AVDnKsZq7TuFG2PUZpsohBizTqpeGFn2a2x3ZL8ieTWUW6JsG5Y5E5376jPbmuRV8Y6ggG8PPCZVAnXMK",
  "key46": "4q86nqwMvehwQSPgYNvSG4CqMGaF1BUFcPhLTSqAqGwpNas1gVZXHcibwhwMFSM4VeWcDukfjrtYMxDpo7wm8iFa",
  "key47": "4JTWPD7fpAMRETLV5ytFCyFJQvVnvT9tKHukFC8MZLT1fgkz4MoSn7sugtWWsZqwuxJCTYd1jJTCajou8cJg633X",
  "key48": "4Tc9zVNftGCYNhwKnR9KZpuuYEvF2ZjTXkchEbPVsdRn1AXFgh7WLqXWmvr2wetxxQg9znWtuXSojZTYvqYY8V6k",
  "key49": "3FMtwERm8w3rQNdQqB6X1whcV1GHtc8hSa369qL9Y41FZVryLMRminfbGNVuFqomQhPqjJfyYFdzx15ZsjS6MscN"
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
