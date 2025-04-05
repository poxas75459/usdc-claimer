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
    "XiMN87FkRDjurSb94z6ouG8ZPSRPPSXVRoAYiPAgM4s2Y8g8tXZwFB73ut4bHkvQwaj3rp5P3niNuWtVRAtkV8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQaAnDPBCtajnXLj8Rnb13vVxe97w4i2cb5dqZjvNStiACbysjC9YhduiQRRWDazeEJT31dTGhWpEi3ZwGCkgP9",
  "key1": "2Q6FmAqbmWV1TTJLmqaD4y5hY4QJcePtPMvKvUQpBEmU2BMSL7vBHHrmWxcG1WBf85mFQbeR7pmE6oHFUgWme5bw",
  "key2": "3qQTCUHXWYHa8DbCYno6TQqGq8gGQJeci7XvXv8h6kuqE9P9qvhcJqK5HdkSS95NR6DbnCnbB7DfAcxioFEQP2Mf",
  "key3": "2J1e3arja9NCSkhmon88bAm3w4MGyBiQchrXqdZPK31rSy4Ave7QpcT6mKgw6N9mF5NctJHNQZYoVvsJj8o483GV",
  "key4": "e8VFhtxD1q45Dje3cTn4FjfXLkXD7BmFdkc4qwb8aFoaxiJQwzzq8aq4aTxWTwdgAoKDubVACx7s4EXYRiCANfe",
  "key5": "56MRSdxURQmd5EUF8tMMqofjqCFvRVDd52wwD26D7vtUxpB8XVyLoTAzbcnoDJ6E5HT2PfhmjDY8vncuP1voxB23",
  "key6": "5F1kVZf6nPT81mEF79DEvkbGj3msJqjYMpWSvqhr88Ti5tzzYp9LHfj5xPBz4phKcDbcNjUXvMxH4WV5RHwckHLs",
  "key7": "58uWUBu13rzSNXHa11FWmCzJrf4Xyr3k2gvokHZguyW9pCHHDjQy5oxGd9KLACo9f6JTwGSabGtSbj55s26GXMhS",
  "key8": "5hcVznEui8rRYb612Zqvk39RZ6Dt7txSVRS1ycLNHFxgyYWXVSmYn9QYJi6tjKV2W9ymLnkjgFM28Vsc1aa7WzvM",
  "key9": "2Vg2GtKr4HkarLwxKm8LZJtC4jWthMWo2UUmr57VEKhsBU1rdALZd2nEfKbqrTSzyvytHzwo3RRZvzb131K7DVEi",
  "key10": "3SCdb8apj71e3DPLEn6fLjiwGRSMQzZ2CBdtgURiFSeAoHDiCNhg9ikM9qp5VoeWLAHrqX8s6ReKkvNgrxT4hGrk",
  "key11": "zo362jMjZ2hPDd9BZxW4fVWuwgkjN5vbtZ92K8nYBnTYArgAQhCbEozf4X6stM7ijjtBwudEAwcgqe6Q8tgrKeH",
  "key12": "m6hBqnmWxv86T98YW5Cq1Gj3fTVnby9EHraAYyG9TRKFNjLB4Zq3ojUUDsv14vMTs5yC55Am4cYEEmbZ2K5sRMd",
  "key13": "3bo5Mnvx8BCEbMinEB5kUmJ1J3BxY791h5owZkn25aSXR19gTZdUpc9BjY5WxMAq1jAqxAEkMkpyGGJ8aPim1VpT",
  "key14": "38fVeqERV75WH3agQwFNrouKP1cNwjFAHErpQozb3iModTRjy9Ma44iCySVjLZHP8nH9S1WtDvTaJR6EeZ5rZLvv",
  "key15": "2JFVnq3dzHq1iVCZHFxreZxUEUh1tUptLyV4EYgu9phx36XaTUg7J1ruzJ9wkHxxjD4iPzEAfXuqqS6cx4DVE66p",
  "key16": "3jsgUWG6NFaAdP1P3X1VStXSHqbgQPKVmNAUQZHHm1y2UEzRD8jARqnSqjTddJJ2ZiL69LyYEZg81F1pLq1oLWww",
  "key17": "2iv7TX3GhmnHVBmRuDgjEds483qHsir3oHU7YTinYWTPhn62Bo7e99sspnQxUoojao8ssLqDCQJ3T8aaY16DUttA",
  "key18": "4wymM349QVchKmW1DLZBcdytt4NdvmAXJY3o3EcY31s8czUkDyBSSc9eAqQT8FPfVwLq78EBpjsSZjWXnx2NYoea",
  "key19": "5EvUCFM2wv6J7otCvqq2CdqxSmAhGLM55smGfeYsjPvgR1mhyrxhzBHkzppSeoon2QGi1yMVvHeEnA7MN7iMDXSn",
  "key20": "4vyVyZrGpgEq5NvfRgeXSv6WTbZfpSGaSVuvC88532zvQMzwrGa5MPkqm4DoLAbNLmMAmhATuEWUmJ2RXhgfQ9pV",
  "key21": "2pCDsc4YPpeWZ66W2sZrkXXhzX4MqLbsJgyZ3rhfcDL2ACdiucKBd9fXZwMA16TKWt3EyxdQKSEosya2dUs8E9nv",
  "key22": "3bcuQaH2Cq5hy4VvxKbpGrKptv9WJS7i7p3aXVdaUBeEnCUBfucGmktVU7K2z6z5EKXjqB4yeEYkqAYsTwmn2Le6",
  "key23": "59svN72m5S2tK3SoHZSTdZUzEvNjVGCAEPbTGj84rJjeHDji8RuRYqzP227YJVY5QPEfHSJJv9wugEVHUhvQbigG",
  "key24": "53YcHuaST4yks7uRTganz55jE6pY9VqidKuCEgDCfGsn6BSG2aP6z1U2c9YSFqw5W3cr88ZL645wQckdqJMFSip6",
  "key25": "4epQuDpTbD6GtYZVcCqp4g7U5UyRckEHZcTWPqNXRnBjVZUGxTpCViH3fmkomzHrpGyZDCN7dKBddaASbHbLCPHv",
  "key26": "2J9FDvzfX7HFvZ3ui2F2AG1cEA9K9FUVXcHNk3QShyvnRqQoe6EErWoAKdukBhgcoEAA3uKf1hyhG6FhJSreyhAm",
  "key27": "4xMMhcfMMDvnqLvGcYoCKU63vmNJm99uZJRFAtuVoTas4v1yvQXHctipXZZpPaKSkqaivRdejZdKTE1M19ZzrgwK",
  "key28": "3cSyPWtfhrdnLqT3z2A17nuHPHEta2AjbCJE692Tw3SpywBwPheBpAxDMnyzZHX1DkSFK9vuA4yisUCWfc4H7QUk",
  "key29": "4geehLXW6ccceSxPndWWHYQyingRr6VjzfeiQQ3Y38Ci9cX4RdHmjqG1jxvNzJnDGD28KKcxkBQH8M4aPH7egD8P",
  "key30": "2H8acuMeSnrPgUBRqhjdDkSAJooYsEXTtExEzaV3aaswSQVaqkEGLSaFi8fbTpennS5L5t9VuXi8gerx6fWnAuWz",
  "key31": "57Y6HHvqL6CbqvKA72af6TDEM4njZZsHz3Vtz7tqLem2kXoeMspUuWP41gVdxqho2c7rBLHnQMtzpey6ozXXqLuE",
  "key32": "4oNufTQaBXEzt7QL1MEPThW7e2WMx2RGjC7U5dZ3A4TZrCv3mjcA4mpZtA7vrmiDjNyVhHTof7aU1Kk2oWJsfQG6",
  "key33": "9dzTTJjDnWYZ67cAXGndJ7N1tuxvfHHWwv2fX3BfRnvPeqTWYsoSHPdDrftzAD3NSFyFdfVBRU3VFVNjd72mEzN",
  "key34": "5K1r1we6zsGTfMRBEZz3r5Gkg9MDMttzo8GfpXHsvVu4zZdWsZjnLNxhoxCDrvbJkXA9aNX8edUHxvDHJKnd3N2D",
  "key35": "5Nqcpno1LG7vs46294Q14hDjp5etxZ6vFnzyzZejzDbeURcRUHQ5WFEpcgJ5DwGoELbYunqLDZ8NpbNGsGuhKjdn",
  "key36": "3Nkcsc1NiMvvPRdrMiMyrSxzEpxEviSZqQSdgoBA7BDhTxbHGsC9M1wL9zmhpsUTqCLz28ZTKGxZAnn1QrHeeTsX",
  "key37": "2h99dkA1i1P1ztrYa1jTH94VBzh1MTZVV6fdgeSUsmuHAGz3HZoxDfAUf2psHawPAEZkB5tMy2zaHbRD1GUV6aha",
  "key38": "z76Huv7KtYahPPrZCjYi5NQiZCKAqHKLYu5RktNrqBjRaLjfLu2ttfhpEKWyMUywo7RaWWtmbxR6mtQbiKFoKkk",
  "key39": "3yLfjCzMnkaAoH5kbjCLtHvst9qVzgWtCBVYDdqbQvRidmoD2DwMAgsZM3TDSpYhxtrUcKjAQLj8Nb1dvg3YihUA",
  "key40": "13YzfaWZ4YccuGFaT8jEwK3F6bNPqYgNQsqyGxY4LUeZi9Qd4G18qaH89yfd7bafHDDvmHyARDP1rjbJDUVdMt3",
  "key41": "563QiFb3eqDHAKvpYChToDfSxyHzJhNQFMx24FxprDru4EaGV5G9pxFZGEPMyFYrCs3jsRQURwWTDm4y829wM6tS",
  "key42": "5WnsqMmwL2GkmAWKv2QdfRoo6xFHp5QLbnqwd4iqBjzi7VhkCV1XCThGpgkEWkNJTK4C7DkNW9JwoBgMVhxvRS72",
  "key43": "24xmS6Bk3nQsqGvYwiwhdz5tg9kuu1KvzoUYgpaHmJN5wcg9bpnvL8oEqFBFYYaFBDSw5WptoTY5gcZ19pzxe5aU",
  "key44": "3acJdxaMBsbHpCvwoEFAKHcLdUkFei3gBLkAx6vKw5nmvuf2tKTDapPnyfA85cbT7A7GKKBUw58sraMmkQQQtsCj"
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
