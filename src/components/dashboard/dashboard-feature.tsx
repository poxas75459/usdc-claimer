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
    "3JBiQScXFsTbEMEsHtBZvyu4CEWoFjYGWY9RZ4JryrLgYYEECTrRm71wcQByUum5nthh49FeF5feqUH4qzUMGXR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNhfdwQ5GyNBrX4Fvp4fCP8jembr7muT66zLchGp2E9icpoiZcWwigGJY78adrzfURcGFfgf61fZA483EHg6ZrZ",
  "key1": "QGTVZsj7iaScscNa2d4pXGAHNQ1Y1BxLzWMvUkK2gDUy8DvV55nsuRS3syuRY7vAJuRWYLA5kXsdHGfmbUS1sj5",
  "key2": "4Z4xFVDWjAroLtEQFL2axXVFjHbZoesu2DF4uErdXh287WiJ3fmSLbnrThTbKWS5B1UKyZ8Zdw8expYLoHX1aUQL",
  "key3": "4hkBJ7uFvQgWtozqpZ8tAKRxJt89QnLhWwMXFAnNNgjwu66NXN42aDTAvgUvqDciTfZp61k4WmRRHwUN6wxhafJF",
  "key4": "3e4S975CEKf2JfJjeFcG52EbksXeXgSJRWhabjSgW1VBZmtyxgqRsXDpZznMtW5E229EM37nk6T3wkJug2ozR8LL",
  "key5": "5JHJ4oqPvYW6K56E7HVn7Gb37NCEtKyFNMuTjMuFTcTApn9nvDvUXMbEvTVjifgX7238XGLFhaewActeQPLVqa1u",
  "key6": "2g2SJugbSLWy2RudhDeMgffefNaGoGfX8Mqpdj4Uii2fuuVPH9nZwfyBLnWysQx8Xv2XGSZszxZ8Kjto8pZevj4z",
  "key7": "Mpsv8VK27quGBQHzXQtLzBPReWcsP4CCj8ahbRxY3S6UPVh5YaXEqxLSCiFYGeTPKsguiNeqQnk3f3LGBbPTzah",
  "key8": "s4rNtjnyvGoqDT4cLNDXdEPMyCHCePf6Nw3BaqPQ1k7vy56WNRiWqwSTYnU2RfjaMEc78ZH2188Wx3cXyokA6aF",
  "key9": "3RZ6boKmZPJLKrrz9dwD8gU92926zW3p6yZHcpHeiV6HhXJxhpu64WYumADrWyhqCcjzY71sfLTnFJk498aZqSMW",
  "key10": "5yCzDSoZZ8EtvFhugb2rUTD4aBDmqaQGz1twLFddmQS4Ces4tm1Uv9f5eQjVpSA9PhxfairGfEmiT4qyNmuf52XF",
  "key11": "2W95ZeXvk4VGpDwbvLuanHR9SW8MzYCvSFFeA1qSE5NSY1PXRuc8SeiLYSpCzdb4UZLC4GuEFqUjdX18D6iDv4g",
  "key12": "5vRMyMAq3xe2xC2zVi9wq9FnNnt4RREweCHLTUzz8U7ijJGLDENY9ifjCwYxHmaQ57Mmk1FcNWGeeB4N65Q9QjPS",
  "key13": "2hLj4JsecpYNKF1Y3KeusmhKkMXHhGWggJtVRVd1gJ3SeDJmFmjfKo6EutBkFVykp9AyPK6imv61MoiapSXxR6QV",
  "key14": "3ghDTQvUoVjDq8t3AP4MqJGXub93MPYF33iFhBTPrQnrPeUonZXt8vBo2J7NCkXCAsA4zJkX4TncQorcCFUu3ByT",
  "key15": "4BVHJWzTkhHjK2mhnBrAZ7S4w8qi1WGMGGaZAwuJjJGw4wjiBb9SAwfTGB9kZdD9hmkeM5HowUcxn93nPYMb5oHk",
  "key16": "4XZGhEM5vG5eVG3QK1aagzH1T5hMvcMgX3s7Lij1HuadPiKwJpEZYC1siksKSmMiPxCBaDa16zrYFhKKc74ifvbf",
  "key17": "5Fu1HXEvUfjQfyyEk9eW37GzRaNgxQ5XydUp69Pbuur3ra2poMTEKwpfeoEkoP96vLSuAXQm3bVjD4X8GUJPeCRd",
  "key18": "33rn5pxDsdsSheq514jwGjP8iEH5k6h7yXzSKmvKGanNjjwBS2nb6BqhSWiHKZPgg3Uhrf5roiKwT2TVZ1QeGcmN",
  "key19": "29Yec3aNgtjv3KQwCJtVUfcUJpaQw1nkNJTHVqY4DVs1EqzsD5bZ2Wi3XpUGRNmw5z98Db864u31nB93YMG4yQMF",
  "key20": "4fDCPhqUfMXqUL4CQvdbp8gJ1ZVhL7rkdbX3X4GWTRL48zyYnPZKa7YEQtXeixvnb3ZpkNBmGdHC2hWFp2nbnT8F",
  "key21": "48pc9pJqLTfT2ag5CJxmwHJAL45pHwcyd2SAUSEmccthEVW3rB3eDinrcb2cfKPtT2pT2Edjkv4ddiGUy7HiiuLQ",
  "key22": "5Cwog4UjJ6Tg5qY3S2Ghy5xZqJY9b5opqmQcVkwMLzvmUe78yMNbMGaE7xJHqmcYDh2rzunrjfknWAGuiBPHiuwe",
  "key23": "jT78ziXi4m6EJ1tKTc6tuiJpXd8fN8YYFnUkBXgi9tmbUMpxqgHuewi3Lc592bHpwWuQ1svC69nyWbzSTHxTF7G",
  "key24": "2A25HUnRn1Tb2HJUgzeapi8dKUc5h3a7wcxMBaypJNdS9PafCy4YUPbHjynZcic8Vzq9EGaAuZwYP6X9aBavDXVe",
  "key25": "5G7xNyxBJ7Uyakvq13LikGqMDAHzTExPeRaRJaBfBhQzpoJyCbG2g6rhHWonzJihSgcbdxtumaJDcdZoBwskhqUC",
  "key26": "14UZoRX9mPkP67UEnUpFs1jdczU5a7cTT8gBCzWuWsBhpDYSyaP9TKF24mQQamTPQynjBSKXw6ZFXD9sbPZGV6s",
  "key27": "2G5RvJjGZja1uiCyBfQuDQNFHEGs1eag1wqBTwayY8yBpLWM3A5dHsGj6u6yUyDdTEfmqzez73U5o8oDNjUJSdYd",
  "key28": "5q5rx2RFS4sXwr4WDk9iNfaZsw393qEC9pmPcmiCRWHKqxYgf8QUW9SmBJcbH4FbXmUs9caQZdGsQWJp58Yc4aeg",
  "key29": "5Sj8TsLcjF7Ta4t9hc97zBk3H2oEonva3F1HZWSoS8gBnGGcid5k2zWKMhRqJsJN4zSTrLSiQVQdXwhgagqYyS9N",
  "key30": "5RG3rpGU4bZpjDw5FzW3ACkxaQbQd3Kre5UVzvWJEdR1nY66j6tSBLC3WqDADoJRZ2rBpTUKQJ4jZK5UL8pb2HYN",
  "key31": "2YRUt92hCDXTcStiLVkn86TMu9rDQcGmhLDNM4buMCdrAtgVi6CgnYdrk9S6Gb9TgnJKcMyG7dDKxCJZe97zjmDh",
  "key32": "2sduaffkUXjum4ipw64yFhc6MSYd5Lf7FEE5f9b6KmBbRj1gSb8Ya83f61XC5bTUvUUBTPRvjTuY6xXFk7BBmjYb",
  "key33": "5KDbWXZjjZZpPvFL4Cwqr4JLJfdn4bmhqRemT98oi68mdvsBGZ8jgBxyEtsNyzF6jQYdvaq8ZPTNgdtv5oPEBN8w",
  "key34": "5QEbpWHjoPJ3rKJLekWrUzeq7q7b3L1XApmrETCEoXxLTaL9NSRgWG8REq5cURb19ikD9e6VCs9ThF5oGv5FUoej",
  "key35": "kNG23zFskQZvaWZjQJdPdmszMt3f5WRGb8VWBj7iraGWoQ1dWDaMahiYsxB5kj7iUXU9XAnEwoFkpu9k3ocTue1"
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
