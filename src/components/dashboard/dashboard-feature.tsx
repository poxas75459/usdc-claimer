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
    "3yxyd9KZKr7eDGULh11DXFM1yzhffXaiCbQhStW1JsS2ynnpfVtwfzBQmfEtgtnpFujSTESRdwigmeBA9XHGb4ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9e6xjkCeGGtVqfPCeWhsD2ojefTHMVonGrh7PiD6Azzib5JdamZJYrtKNYWqPzGaR8RoNYjnVGHwM5X99Q3v3vF",
  "key1": "4ufNQAqeQNCbf7C8jfaoHm1SB1J9ZUq3nLBHbPSWsp9Jk9dyRtiDFfzCsDScxRWageffQDaNAp9hvbQqaE9tgdRn",
  "key2": "2RRpw9sHthg1JzPd8fgzx3q1B1LA7FonLiS45yajFMWXc3EXoUVkqftARt45L2cdxBd3wYuYitxUp6ndu3rxBik6",
  "key3": "2FnFwkDEN61nUrqDFpnLPNyg26E32nb1GKgn2LfdVdupeoHZRPGwN542SHt67gqA7qiiDZsMmvtBGkSKH5ixp8db",
  "key4": "3b3Vn2z83TxsH1v5NHT7Hb7St5QpqkjNB9j4tiqtZASF4uSkSsmCsvSmnu8C8L8qKVR81CwzJbDUqmJ9djAczhMt",
  "key5": "4MnwUkRWkUzHLCf9NqzadbdmSETPd2zC5KBsEzEzLnm6g3WC39JzfRiehTTN5hWWQLuNKE3sJdxeJ1WrSQYW8DE5",
  "key6": "5iYWgcWVr7SNkhEaTNreXua8Pb9SAcQESPr4hyYJ4zkMJ3F6dnREFqGbskinTttFpxQXyFAYSXsQK18Aj4EJQLFo",
  "key7": "3FPzskkRm9yD69ffHm3tUppQgqXkk2aXvZ7W3L3XS7Syn5CobF9QioEfdToJV7BdVhUyfcicu3vZm97jZMS4F6BE",
  "key8": "5xXjPXSdR1Y5je13Q8pVxQfLAJwQdAgfpTxq4uZn1wp5peQccrCHT7YtHaKN83k3SsKksxxetRE6GqyzAV5X9xc3",
  "key9": "41KLyU8xdWLQaThGfnNL5MtntndkruyiQ4rLNY96BQwUzKYLKshq33gzvtYThk4Re8kBZF5JG6JGHqg6TuUj6f6r",
  "key10": "4MFNL7ahv266y5Dob6XhMWNvBF4ZQ3yFX9aN3gAZynD1fj5HM7KRiUS7dMfjtJLXGrGJ6pYasSL7R4w9oLeicTwF",
  "key11": "s2gswQKxg37jXjzmRGHU9HvVZDqR8uxxuse3RwdmE9QxdtUBgRqcA1Tf3dCV5TMQPgS3J6kmqZzJEHTauTrBAQc",
  "key12": "5Y4f6ZMK8SmPW4wKMAft3FnMu5Ma5pHy6TVHDjzmJpZq9vs1rF2wTJHgyVdR32qaQcWnjE4a5wotGZnWHo4dxF5X",
  "key13": "3sEQuHJFTzy39jQREkGZn8P3WbpSWg7jszxQ2vgVeHndqwKyZGYUu3tyU36uSuRTkFQr9sRJ4mkMLZ5Lpve7hqZ4",
  "key14": "5coBoBCCpKF8d8jEkKxxabXBKQ1WMuZT1xSxozX93usnMYYzB5oVuHn9W9YRs77NuSfz5NDahbmE3MXKujJ2yysD",
  "key15": "2vFsD9Vy4NFuF6iEfcajvQ6rjhSBQ6SHuV11PjxJsXqEFuSn3HWMimXPpFH4KQWWC8Vn6LWnZjCWfrJRyz9D2uCf",
  "key16": "2o4EWtUE7Uc7KQQskNpTYdc7eM5FiXP4mSQqmAUPqgiKbSHwuv5io2RNGwjnPh7pkfowmNE2JX1Sb9DNSxDNabjG",
  "key17": "2VR5mSCCWsJUTs9knC9zNwZ85aVFgawtMsmYCPDkzHHv6JxHGkSgSiekaRW8FsgKUPWEttb84L6EuGCUzKFT7AQU",
  "key18": "9jpGPc1WFegci89KyS4QTV75PBe1bNgBQPTvwBu7FkLE5UW6miZ2Cv1CGYnBYgemraAx7aKDn6D1DzRHaF5nVKb",
  "key19": "1fGVSLNk7fxtBvJzLrPiuPWDQ4bzoqkSETGyz4mqSVZUfzE7BNY7oxY7M91xK4ZvmJ9SEAWuPqKZXSXuduD4yCs",
  "key20": "3rJPAtPVSysQkB5HiN6TAhFHZbQaM24wDKgoGGH78nrGkfyYsMeB7KvAXCpDCZLqWm6MXLHyHXgYfoCtwfeSb9Fg",
  "key21": "34QtHLJqmvKNaun9wYuCn4ogipUTZReGrq58d2WtmVLxrE9ZyFRZ763vnyP1MbC4VcwqsJw76jrbK2HX45cFSAWF",
  "key22": "5rvpPLr4e2b5MaqrbS69GfttczNSG8GcxeWsmpAx7YRZ7vymTT8YuTX1ogDogN6a3KpHu137a7NZQwuUi6MbH5ur",
  "key23": "2jqXFJ24zwqaw2RzFGqCU234FfSLFM55St3dnxnM6h1DiRZP3eL5hbapBVKutA6pQazuyg2PtHfE42ijtJkej2Br",
  "key24": "4W6FCDdz9TQkqDGc1f5KJe7js8LPprrPiSFjVrnzJtVFoegudKrGDdkk2XUm2Qy9ZdGB2nCApfmc8B43Ft7ep65i",
  "key25": "4cU438e1LYbACMatb16Go2NVkesfkyU8QzRpGCwEri26tQKZnneXw7QnWiqqqYfpVvaA7XubHoLJLevwthGD9EN3",
  "key26": "3oFc6w4SzBjLdE4M4cEZPv7fXTeBBYCPXSRdfC2MoV3VNifBw9H8PrAJsbvBiDcNimjnqCBZyn1Qj8Y2u4gNhMuE",
  "key27": "5KAZCK5eKscatSYZhtd5yqXbkGEY3mDBX8qH1LqBdHP82eMPdoswSCfYrgLsJfBMYTPApfYP2gj4u9SjHK1jhVKT",
  "key28": "4J3EdnDzV4QCoPxuV6wWER6M3Wh1ReK4yJydQQAumnFR7KdFaKMpU4EzxqEX8agiRg9tJ9tXKkhLDrpyMfUL2DUK",
  "key29": "2zhJY3EAwri8W7qPxEBP1CXyESiJb1vSJ8Zy38QJoizerEzmikXe3P4nD9NBTJfEu21vq1GCWS7qPG8hckZCfLWP",
  "key30": "ZpnyY6LtGUnkbf2MhGsnybiYLrJWpH356FcSFzbbrHykhdU5ygRAmLJTps9hULs4nFEsx43TgKNX2fHG2C8i6cj",
  "key31": "5QLWdKjm6GaPsuQYwxt2zhSjK6gCZKdufGfHCi6pQ9seZ7YUe5EBBuM8zJh2SjmjXCC2iK2eNfjB5K6XN7ND6JSN",
  "key32": "2JLzteKTgDQR6p2qQ17AqnEUisft1xN38fGWB5F5RGkYCu571jMGejsmcXNmhxbwsTHeTZ23Hbhh1zgQhvG3Pi4z",
  "key33": "3bCSvpMrNXhvmCeN3cnyMwi5L2DMBTfqTon6A8pNcuRt72R6NrQ8M2ztGRWBmh8Z4ijwQfnuPbqsyRY1ZrEAu5wZ",
  "key34": "4Waa8FabyRaNSoA85PUTZAs7B5DzCmkWCfQ2hnPDRYtUCJS83jKrABqGf47k3M1Ay9yUT5cRbqmL6oufMFktPvXR",
  "key35": "FwYUfn5cW3XxM8bqnRk1CfZeuPU6ejSfHpMVyGV87EikfWpWJPLaQxGHbfoKfz13tzcjY8RECXNvZXG3y3dkHn4",
  "key36": "mdb4WSfjXeT4zUj5QaxeiCND7GBrRdMiArQLMCbh8wc38cQnhXnCak6xfSk7BgsTbnUoCAwoiEWXpkVMS8jj66v",
  "key37": "2o3dY4VUhabgkPGfpcASQHPGVQYxvvG4qc7Dk4oQiVfCEh5pVMMpUogQSJhqjVU5KkfG5BsrHCabmZp2sCtojxkM",
  "key38": "48Pv8SCS3fDTajARE1j9dBTMsw4PBAyPfxKJmrvYePtH3YeP6KbdzTUHGJdJES7XKTaU2adJbj7tXRzSuW5iKYSE",
  "key39": "2fepdpZKjrz8pJnbNeJaDmuQUyYnm5dZY6PXdRzsYvmHzPMaqyj53Uwe1pKUM86bCuv2o5qYaMT9UhgsttZc2stC",
  "key40": "44WUF7p389riCQBA7sJMSHHCkdd8Xdv95JFkxKFH8gApzkQidWyKLVr1gv4mZ4jiv8oJqNWVsJUcX2uu8Ao98WjV",
  "key41": "64hCCfFdhPq7dduGfaKErtpqP5NFknNonhpsYZxzBokcVwpBdht91wwViEzZMbFksDZvzyEZvsYmgrPXe9gF3EFC"
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
