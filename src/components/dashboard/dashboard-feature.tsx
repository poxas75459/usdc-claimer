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
    "P54fSfCyFwDV6SxdCixvwPhpWYj2rqBGmpDYC1MTF1uPAih8czdvpJz5heUDSuzyiV7boFKos5ktzcvs1QupUL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZAzt2aV4kwTvg54rirjQdFtgjJZK1xaX7T34PDemM7aM8cyURwBa5Et36WajZ6vqhyiP43wFo8SAxA6TkitkRv",
  "key1": "3fq3acoBcFfxWBhJMaqrHxDJQLzzmADcBjs4UGhGK9iFM4VAVNTHC4MycQt4kvVc9LSHRVcHvXxk5uC1PzFCRKTT",
  "key2": "3bna2QzUGzPChAnE6WDPfwqdxLnvcxRQQZHQcKmjYF36rLn1sxmivK8WRTYwLcbShRSybtu3wzYXmTqVCAujwPrv",
  "key3": "4DVHn6EFxSBsuCv3nyxwSWyGutxpeU5go7j7BFqoChGNwziXXpGE8hoc45PNQGXiAhBxN1rULztAePhd5rP3J5eK",
  "key4": "4H4iWepP1i5qgPDqVSkAS8uAqr6qobk5w8AyV7RvZj9xtbPqRzcnN1PonXpqieiA7qVG5HFPSuopAvs34imew686",
  "key5": "oj7XiSbpRau25zhp2QhAHnJYc1Y8t6UvSXnT5JCXzvaqYtLbKhb7hDoiAxf8GGxa76owUmG1mfU66WiV3eJFNpa",
  "key6": "BC7y3XvsdxiNhdrR6HLeMApAbZTZNzkDm8cw2zgh1D3qPqhJWtDQBAzTbfFU9MkrM68MUknaAaHyKH33YfVuxeH",
  "key7": "4RaeG2botQ7F9XHFUEKLKRbKeJR3uJJEg9p8V8eRuL1wUrCdqER8LahdQHpb9iQAzKGUStk3HDjNVPjuBMH7Kyvg",
  "key8": "h6B9iJ1FqYvY3sK9Z1wNNEPuknUSAs1wD43uyheTE9jgkNBdEmBrhL3371SjitYR1Qa9Ynw49tEJE6mpSNb7xVg",
  "key9": "3dyU2J7CPGhESFWMF6ZNQYHRaMcYdQ9UbvGfE2hcmKvsPznSiGv7rqX9bUv9vKbBqYH6u9GtKLJd3sJFZYQf1c94",
  "key10": "4tKYu5sQfubBxJ1U1bDCWJPUEWx8KyUz3mHg6PURigRWZcru2s94vWn3GYvP4xNczkz4R9zwmo2R5pW7Yn9VHPWg",
  "key11": "2N5YhzEKofqax8RgtMvwMBhs5r3NuCyDW948CqY9k1PAZFTABM3DMki2kNKufMxS6SaAEHpJf4Z8gHNuJJGpXMSn",
  "key12": "MT93gr15BvemdoCKCkBwGCxbMwVJqmCoK5CzYmFVZ9sVRYaQpk1bqdtV1dLoioKXaYvYJJ4aC56QyWkXKVyTAJG",
  "key13": "49NFLaiN57WBshntPnXXabSK6q4H26ZPQbjBD8L7TUWZXVZdXY89pBzU6HkJurfUC7xmeN2YDxu6cRCJD7qzqPgU",
  "key14": "7ycTVuj46BNsxuU5vBvcnT9hQcopohokCbCZobpszmY2rgba1d2uKL7ZvAUWpMgJ3vv58cjKdctUbu6vgte98fT",
  "key15": "2CsrjvxFaHy8mCRScp7LeXLRAHZXMhjX1Pwb3Aht3gDUGGSgHHa6LW2iwuP5PFxEEFA49AN19z8K7qczV7vxZtLT",
  "key16": "3d6rv1tT3aQmnvu9PoW22uRoDppmm6BRFxLD3yygcczV5JvYui3SyE9tM8DZTLiEPmHMEAWWVr1LofHdPXBCkJDV",
  "key17": "35qKVWu7HCjNf9umcxWVAnZwjBmJDVjzhmQWRKCjbQaP2TqdooZDSY7sCgMXcsEMNzFyfcqdbs3vYsERMZSUHfCm",
  "key18": "4Nz754vix2obfGcb3MoPGvsVKxWnUTssrQCGMGiLcSDws4ySNvMWRfiuPnULcv7xbSMpMnAApwahc3PvbRhK65zG",
  "key19": "4XSarHEKSjez63nCKDsBmMTKtmL7D7K87pvcnVNcmi2bRDKW9YGLEwvgXJYNMNAv4HKubRMW2h2mUMGoEQgLxTSZ",
  "key20": "2cuUtn6R3GgFbYrXijWkQjHev5Xh6MF1KhuA2rdJmN2EqLQMYoeP6haSDt7sfWrD9gfTWbdd6zRFqrZgkoRGNufE",
  "key21": "yzXQTDmo17QbPEx81hsabhwSfnrB1xn5CsudYCnjgbZabPWGUAfuHgQHFmTGsoGbRQG3tQbAKV6SgZV8UySK62e",
  "key22": "3VNXAxs31H2iUnSRHpFbj6UmXJKhF4qqgwafQfvxLjN4FntkSMvMkHsCBDL38f4DwbKpYG8dGNxTWfoG7ckhaBsq",
  "key23": "RmaxAm4a6wBSD1YrdGBDWceAL6KKFXxzREmADZtEtCv9PJnNf2piy6a52UT3Y2y6XyX4nrPxFs91sv686bMikWf",
  "key24": "2LkvZ1YH2ghbQjTxsugTv1bNAHsY63wJK1PLmLWMbWzPncciZmAaTs7DRx6xwd8T4JxhRxmtbmsgFdYSRWuptiiN",
  "key25": "KTb5VxuyqUYT6brrCnLrvnvmu77EYzsv6nxx7H8s9cGZLvNh2qV7gNX3Kt7jG3YXhELBUGssEYLRMAx3GDb13FX",
  "key26": "31fJpF1yP8DT5KR4TWDZzg6H68qQd8gdYKj6LD67RYkWcj4AidsQZnMazQXK5kADjeDF74V732tvLdGzef7oo2RD",
  "key27": "3KQMkXUQdPJLgoN5za4DR7jAVxF6NZZsNmAFQrcDtqkJfL8KtoxcsPJvZxcqaBdHPfkf1XYDeCkAQkuZTPQ9vvwb",
  "key28": "3NHj47DPgnayeSsYBWkVgoVK7u1YzjDx1MMN9sKhALPHsvtmgULV6RZKwRd99MeTUwnLS8QGStRBXfdkUCrSpfpY",
  "key29": "4pWQLXLvV621wV3yguwQDAbToUSpT3bcLShUuCHDtFpg3WkK2fS2TGUR7LKBiLtACJzcquhQgqqgBTbki9TSG97E",
  "key30": "5qrYjC4w84CbeiCS2RRJ1ND7WrpqXhiByv61tGfRGggYWKJLmzoUfFCNzSucnvmcfyWCizBmdKj777v4YuS7xbTX",
  "key31": "oZpnKZ43K7UMpWxaJ7eNwYtzQCpf9AJzETC7VAq5dk6wDa11XSJEPj7RBo3ypcYXjcYHydnUrdazdjHfs6ZTKgk",
  "key32": "2cS4jVehT9vGTTGKbsewP7cNYyWjmEweNHkWZCU4CHyLR3rZtp1xYntPJuVqdzRnv4AuVrysLdJuePaB4MznzicC",
  "key33": "5kivALGMcByJyvSddckR2eTdbeczB5MMz2WtLeGoXSCutNKnNqig1FFqtSvbzX42HwEynz1WLcVR3cHHZGURRx6S",
  "key34": "5KHa9FafGgL9vVUYcsRr3QL4nhKvYPijSxsZj6AcD94zbwaW5p4TDYMhjBLnbKJq3uZhFd4oRp7xpsw33x6Xu3Du",
  "key35": "MdU8kAAiRGCC19tbsDnSQ7YTVguNyv1sDqTQb3br66td8SdS1u49eayx9aCEyg8sXBDV5u9kdBmChd5LAZbNFia",
  "key36": "3qmNgZt3G1376t2ZLKFTtXAnt7sbdA5HqX1aeRTzSd9HUgDjhZwsfqn6dgaoTtzWKX4miEBp9M7gVBTi9dccer6n",
  "key37": "umcMrbPvXnVYAKfQqUzmMsKWZUNbRHn4Q18VT9BEQN3M89agbyVPcyirsaKnVeZDDKHJNT2dfEgY4yaiW8v7qi4",
  "key38": "2NrCvYKTZCEQAqaTNQ1AQZYxsL3LCfcUQTXHMETyEUWqKhZNHxtamkBQL313xvZP3qGRDk92n6BBBRFkn2LAHbQ"
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
