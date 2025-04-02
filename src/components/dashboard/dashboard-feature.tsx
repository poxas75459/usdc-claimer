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
    "5ufHppzGyrx1uvURinbZ92KUVoA7WRNStLDB7wLhKizJkhvZmnrwm3vgbhsgYc2ogUi3mm3khpys91PWAUSto5dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDucePo615CRDiE5YyN1PaU5ewBrejzzW1nSaZkwmGfkU9zgbSiDVi4Co9PquTUQbEnJ7HdNvKcQFHEyGEmtLrk",
  "key1": "5fVjBz4wnGHqvXDBmQgA7tMH3FBNc4Jb96CPNfaUpk3bJ5nQxCSq6exBjjS3jed3a9wggypmFa3Yhwpjjyc5U6oH",
  "key2": "SaAtSAcV5zDq76Mrc5ks9nsJ7ibTScDjQeTAmvJLcmK7apMMfxtb1DkUTrucRK1am3xt4bdhBjiYrFz5ykta9j7",
  "key3": "44XmgbwQaAGQmorXExWynF5jT5NNtQotzveunc3w9hfEbD39M6ic5mscZucUvNT9AVdci6WbF5PaLV3av8VmPzFq",
  "key4": "3N9VDFns3MuMqj2QPEwEkai5sJ1YpDhfqUxSnGmJQ5KWb5cF4oGoeik67REkHdp22Q583ucPsPee2JcSMrZL2RYD",
  "key5": "3j8bGoegWzRKiFbq3GHpc4Jdz2KpsG4ct6Jdn3XpSK4WKbgCeFTx6rQMRmiPWiykHGus5qbEEzJ11fmPxi7K9ANe",
  "key6": "67S8Zth2kLY9g4PuRqKCw4kYLLG1d31T4ZcvtZk6z8YjisB79co3aTzFHWGgsn2Lpu4aFc3aNTw2trH4Eqagd6sq",
  "key7": "2AtBroSZK19zh9KWdpwrNM7FBnZgJmfiS7f5r3oSUdDtW88n4hSSQ4vryM1emNT3WPr8sXjtpEktSFVEwURMHGyN",
  "key8": "5WpyyCjF8Y11FenoqZMySRNfH4Kou2d7yaph2GquCgyKhfbj7nhJGSmQ6LTzGJ2mffo45Wt9u7ZxU5bB5ywyiyEJ",
  "key9": "4Xyt4RbHiTws158Br2X61xVkeaTWL9GNigHGhesPS9JFY8ftdREFibFiTydvHMcQcioVDv39ie4kJac2GCuAN8aR",
  "key10": "3mUFwaPKgWkJaR8Wzuq2F7FWRFxhXRX3McvRhEUNnCU2w7h5XA1gpmTzsoK5J8YviAg9GaDKncmXz4E7AnCssNv3",
  "key11": "4sVLdnVYGtUiQfoZd6biA8AggRtjzS9SeQVrR3MHWBgb552mZLNjp3EKyBNe5ZRq64mTR6eDxT4c47cdwukjtFEW",
  "key12": "uiXRc9b926db8zRGi21sDgHFqnK2cCpMgPGS6h43CRckhAv6iukYCSRswJwNB4KFL9MBpCzRDvidTyTJ9JtrbeE",
  "key13": "4QJWg1DzZJxRvC2CWZcbHcwsjCZtLU5BZDYHMQs8WmRm8ZnqxPyNc42jt6sr3ArVZBrRB6eJBSABeUxGLjQvcLRM",
  "key14": "3npRecTv5YVxCQJ6j119hpczi33FVrrfr2xhimXULhTAN29JPTwPRrPpuQtzDU12WVzDYkSx1xjVwgUMaT46vW4r",
  "key15": "EvZgPuLkzGqXA7U4CGT94zJJoEe3TgXX7Sa1dpKRxrcGNzEUtWUTQXPe5q7yYnroon5GAnnFfoLvPvZeYv6jZwS",
  "key16": "SiwHcUEdaW2Eb7ASip2FG1e8zvopfDQmRW788b8EPEpJsq6fPfKWY77xZ1gyhzrw2ozzwDeEEQLpLQfx4MpUPKz",
  "key17": "4hUUHZXkFUqhK8Pe1cKH68835YKc1tRe6ssCnccDHgBUWnPfqwvFBWRhALUiqNC7hg97oNXNZmAFM3kUuiqRBMpN",
  "key18": "3XQXFY7DYAJtfQbSKeKoWgWbasro5Dpdj8xkMGE6eVt5AEM72taSjJgfge9BoPo2eySNxA9PtXhwXPtkwczztH87",
  "key19": "474ve5GyYVyL5aD8CrhGssvKd8Kjt38VNnYtx6FLFJbYL68EvtUc4nMR5DCQktxFxhLbzzi4vzgNtGG98wf4rdhw",
  "key20": "xDs8nvtarWqa2YxLn3tpjJg5iLsjr3Y3iG5ZPF4rNxuHFghux2GLYtBS6s3Tb3X2xRhGSPkYCkVUKuLpPBN874g",
  "key21": "33vJDPwBhvhZJr412uoWJYmhViHSjSsxG5LiUEkAEaiQQDc6qSeSdjiejtnnv99aHFVXs8DzkxGHkfa86um9DAfd",
  "key22": "8Ym2TRnbh7s5AJDsR7jPNgoRL9u19Rt7u4C2REkphnEQoZ9CmoKiiEpMEZGgemGf3d2ynkcFW9Me21VHfQzqcMU",
  "key23": "63SJrYNBDy8ECeMax6s9Z5TNPgydH3K58oAr9WddYCgRsvE8w9Eihyr99gjze9qXmpdd5k3mwTUjRLt67f1YaEEA",
  "key24": "2UKrzZdmFwqjYpXhypDnVjGYyMC6BmWPDmsD1yYbTaywX8r1EAZVbhMTrkKZcG2UPpALSQTk4JspSL3nwMcbvzZ2",
  "key25": "4DkWDdFu69nvQRU2uD3RTjxESfQCWZw4N6UtrqpxwZ8GMHTXg3myQZSGXz9uRaQ3QSmj1Yy9McGuSKvEm8EQ31Mq",
  "key26": "2J13Ba1KbwQTCNdkAPUpKPYrMbfyWsmFuL4QjFmuVMVi1agdYqMn5YXoV1kvgCfUzenpavUQJ9QdYey882FEfHG4",
  "key27": "356AtTTgtm8MyNnsL2Wj7KHawWGPRbn4rxTazvLNpN1M4GFAE5Uvsm2w6qtfUXGHeYZiccBiKXbH4dDBYToiQBYj",
  "key28": "4GttyBjALEcGQrNiLLuf2jsgt8TRC4DnbS6CTsS5Dx8aLNyqPCaCcNpniPTeMKUpQT3ANasoXYRrgK5k6RLnm8Xd",
  "key29": "5GdiyiwoomuRwTYAZDHXRrYZQFZ5nmx1wAU3c6pdr3RTYAvQA94SzUht7uuPg4hQEaRjmJiVwWB7iC7eGqDKvvaS",
  "key30": "3RdgYWL9ULoYonp51TTCn2yPkih378qvvg6oKUdZATgHkuJv1S9bBFn79b3BUpzheJeRZs17EccMoJrZAv3CEaqA",
  "key31": "4HArbxX7HsaeU5iy7fwqT5oTiE8LVWirNnqjhYbN2HZqNjSbgkq1GyAKijRdG8mLQx7zDwwTzyLC2U1mvimobSwE",
  "key32": "aSHeEJ9UUpaGUJfpb6xyQWR9AGn4bB7Wwh53YSekQhQUNaYwgqgTaACxq1Df8BXfHe2UMYMUamMQnun8cpcJhjL",
  "key33": "iYRAYqZf8fLg4j2AVBBiJxhLXCFpzHMcRje8ZsUmDEzTyi8Qf1PygWJoTgMi8pZdvxvTHTFX4WWAJ6A1dEtpyeD",
  "key34": "4Lsv3hJp29TCFsyHqiAZPe66apfMEn5a7hexSPjeikkX46smZEsL5BBx7skX6KrND2Hwo7pgQwa519tEYC3hzn2M",
  "key35": "2ZC7fW5w5P8vm6KrpkJDYBP775xW8Y2gnUNRq2aWK1adc5t3yTypNMzHtthQLNtNJA4F28nj8jehTjy3ydS7tDGq",
  "key36": "2cUp4RHMJE4bBf6aYyp1RYFiSaABvzgcBCMLmAx4K9vEwZjMM9L74AnmZxM84b2S1vChecR63yTF29NmdyTUdMtN",
  "key37": "5gWYLiF9pUk6hpNCSbRWfDuVUG28yz9RAj5XHpwdGCrzfw3QKBx4wMy9ScdCmbkwva4FCjEiYahHSLzHm9LJGjpJ",
  "key38": "qNdds2d6Kke9dPX2abzwPK91vSdXjba2KCH2oot9ttL2iemeXf3Zn9S3fF3JqQYSAUv2Uonf3NX8k8iKMFPVcJt",
  "key39": "4vyhFseXL4Fn5nvzX8bhsyUqJdiRhfSLweJb3xwy3YTydXQphYJ6zeQCDuzqb8ZLfAjfcgzHT58qJqTHt1UGyCTy",
  "key40": "2Ld98SnR6x4NyxspySTVZvVNKFjbnY88fLmkEumXxCXQ5cfbW4dWqECYFmYrcjCFtqeZQbGbh5GkpmiGweoZR7xz",
  "key41": "31sWwCXNyGus3Q1XfFuce1P2LbzRC4RKt4FAxwKsoJvjhh11rUbE5vsYzzaZUodC57Jiuzdp2DLUd4BESZkTxxzs",
  "key42": "5kDxvZPeB4xpsYPgnvpqoaKdafjh77bihFU1avtso399STAs22vA4672ZRXyfZfNxZ8hVH6VZW79EWRXaZXwYbwW",
  "key43": "2uXfWCvJxrymZWx1aXdzciPAN2c4BM3T5hQs6VCscYKsBqJ2WRgMGdFYfiF1VBqtmzy4Jg6Hp2g3wdQ8yFL6GQpG",
  "key44": "5Rm94M6deCugWRPkL47yprXMKSJy8RMqJczwuwvP3cr5DMd1XJ3Wk88aCKLXqwGkpAJjQh8fZq7UbhGjh6nDGkHE",
  "key45": "5nxxeSm9fUnr93pdEXDSMTxQvWmfUTueNXiN7sww263bKD6g4bSsMbSZ7kWXsjmuMBnzKPfxJnGGvGcDeKRkKEQQ",
  "key46": "4q4yoacMb8CjbWfGkkK6yVHXxVS34HDUDzAPzYu127cSH4B5ot3TiJ8enXMRrpPACGHKnRbex2CNCZ39BVJ1B5ZM",
  "key47": "3Exj1Soib3DHLNgWoBCXui22UYZoFKiFtyxTGQuYZtw8XDAv8QEWdGtdW31zYXGN4GkbVooCD3DuHhnjjLohBPo8"
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
