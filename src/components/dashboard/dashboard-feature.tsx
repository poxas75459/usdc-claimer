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
    "67LAecMWqw2GeVt15nkp54QWHwGKyxHoF7W8XK4hGiE8Gf6UAJKYTBeoiNYKm6CiX4KqzgCTNqTF953uvgwGwaFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdJZwqBNwPVoDGPjBRwyZ9tUv32wSijD5bztNPA6qbBMEe9FGdPVC47YB18kpAk4bUMep1YQgbY2PKBT2uvtSbE",
  "key1": "3Z5U4whsgEcysxyL48W42cMRw6JdcZoKcPDwUmHjUmteozLJWho7HvXZXi5YftqaXPUVTqFK5VaebNyDzDZcqTDg",
  "key2": "3JnARJPJQsM1SnB4weYQ9XsKsemQfXbHUpNfVW7wzxGsCBRTcdiac6VxGFybdWUUi38XLYvAk1UhQ7q3wdTBtzjJ",
  "key3": "2eYqz1otZrWKDmCD9E8ukNzYPKeCNizD9g3cADmm712p9RGpvLLazngCLgqzni53dii2F2aAwRgRaphAbnCKrGu8",
  "key4": "3NeXXLmB9VJYUwVtVywk5Kx5kmwYgU9iMe5xRZjMgQwuhtUrKvoRvLvP1dt61TxranFGWSmmL8oyRiqBssCRFM9Q",
  "key5": "2hPNJ67GsE3sBj6ns3PUtNKf96snPtGf8DPmq7HohE8xu1CFRtvuUCdNdYfr8PGcqY5kLt4ghEfURDUwsm2HJVP3",
  "key6": "3NKn5SjJNrwQAz6sndExbwgVHDWXYKpBke8FxdJ2Xhtz8c6wH4agvfKzTyasCAk25LKEfGvQWSWJA5w6eyGgskrA",
  "key7": "5dwdJXYVB4FEDBu9TKEGqWuCvqeooQfcPF7cZwu71zxZ8xxzrLApDw7rDJr7ZuUvwC5mNkiYGcFtBF1uH4dskroQ",
  "key8": "4kvdnJSyDWJDJgJBA65UvubAzBW7FyAoUJ3kdHKcnW74mA2DD8JQ3ZanxYDxcCtW9XBWFACfWcLfLyuTM2SFESvc",
  "key9": "41jpguZDaiT9WdYrp1ttgK5oHdjhc7FaU4YsBwL1LjwsR97JUXP6DTPTeitRJCyjsJ36KuJdrYFg8iK4KYTcyPhk",
  "key10": "678wc9BSrbQJHuJpQRZydMYGzFd87C4aZ4xyNozDQvpHM3P6WjWsQvfTfjxv2jtyvoERaMatXeecMq5mkvdmujV9",
  "key11": "2AcHxXshWWvmgowDjEhButE77jCCCrbZEDd1mTrLMuN6qbrhATuBupHQMoqCdRtERDMCdbCBAciX2DpJ5aQAcZRL",
  "key12": "4wN1KmzK5mvHojNH7ygm3UtTeX26utcdt8BzvC6QXL1wAUzjrDiwSQS9GDkuhBzR1qNugtxekobYS27TvNq3HE7j",
  "key13": "4BgPX7U2CdhLv6sDqWuVQYtDE4gnWEqGh8Ub8KPetY5uQZB28ZFpn3ezvi9vTFDCQ8QquBpag6qKw2UJPqbFb6Tu",
  "key14": "5E8ayT6RCKKhMi1GFEydjvRQ3EYH7gDEyqDZMSVzPBwFB5ovubRNoyrX96GNQN26pFG6PMn6BxFY6BhwBGgrA4Sd",
  "key15": "4jxYfh2AxW9pFa35dXsaHvtNqpJwZVK2DXt1LrsfkDcWibF2XTa5r2u6VZvkpzmK225nWN2o79ejYxM3T7KyXUjR",
  "key16": "3FUtT8xFwWd83LGgo75Z5hnoy9KiovRazKfWYj4wEoSWWqiFAndeYjJCkhjEAXAyTjLEKVzHyhSsTWU5bnzbiakc",
  "key17": "bTHD4f3xxu3S2uL2wfjEtRc5y2g5si9wa4yPTvErhRhtVHo4xQiqRfCn9xYENwfTADWBAQrf8e1BS5m4PZcULmk",
  "key18": "5bk6W5ocjuZYWikB121MhZ7MqxEVY2kMkbomvHzhzZ7C1MWCHEqgLh9QAt17VrkRqUZkLt7EwanPBmM6v8wrkYDb",
  "key19": "2CLVZJiQKT4NrBngRgFA4BpxBHKqPkteG3gd2Z8CSACspTcMngaxGVZRLM5DPMH3DbgYytmnDdoZU4DrpBDKYKKi",
  "key20": "icbCuXL1r42Wd1db7xFbW8xcA3RcUeeWYC4xvFhm8R98Nj4VgvmiFwszm98pkmzm4p4ZCtTUrYogsn83qaYwAMn",
  "key21": "b6hxS7sWn3Hy6km7GRp4PDXrdhdryWdBf4zDqrQHTi1YbatYqYj4sWasikLZxRmQDWUoZYPM5sEegfvusqnJ6sS",
  "key22": "4jY9wvb5TyHhfUfHxAkc6Arb7ESbJ9EdBjQJ7BJXYkatov2KwJ4BAsLRxzMcNYHwpjtbR7S81KoUocSDEaFB9ELV",
  "key23": "r3DqsP57mdYEJSKHxvnQKbMbxkNVbqCjgKieyLH3tXsjFtyYenonjaqj8DoBZmn41j7QKhh2zmDJRQXoCM93iG1",
  "key24": "EKaRGozGiwrTtoGsaUxzLAVAW1szRedZekTvUwVJC6u2Jeg78vDsSqpm1CH7AewZ9dssBdfwNV91Qe91vw6y5Au",
  "key25": "3pievqMwBzhHvCBg1BmfTwZBSjLa54xLVgE7D3xXi9b6LpHH5ZRwHYzMLhcXjYDZne2h3jBPA5acyC2MqSzDWdzL",
  "key26": "2BtvDwb3PTRHdoABNN5AKt69SLYEZmEvAkbqccVwvsFJXWuxW4AYcraWDy1FqE6dRZnwwKS5qqptRLhiZcy5smaX",
  "key27": "3nd8N4K9AnDp7mUVRLJ37eozh7frfAeuB8DJBCbrzuWK5nQHo3jEdCoKd7JuwNRZdsZ5rU8FEg2hyXorprFEKWGQ",
  "key28": "3wUiBW4of1fpMXjq1FFk3HkgoRdkXAim1RZtXt75XUrJzDYUhDxNhAr51ggbenmKAtnduiBGAUqbF1ZiysDEtR81",
  "key29": "5MrfjFLwwTxjtz52t9rsGU1wTtvhFTrGS7psQt6D6Hgtgf3vM1vVxBiYBE1J8dtsPA2fBudF9iXbtSj5VYNuCE57",
  "key30": "4GA6EnrHXcpunYpa2cfeLjn3ZfHTNReFYGWLzw3VxoYTzFYLb91VUypbTEjh6ZQ5QY6KevtYj2VYZk2MAqhCyfrG",
  "key31": "4REeRsuqefqrWT9SuqqUefqDGm4fwGwsbrcFkaFTCrtWf4UHX3Dp4ZbsfQsbzRq4hu1UVTpGzghF6i6anS7nKNvB",
  "key32": "a87n1agvxXHwbeQ4JC99aixDvsFv9eU85YmSKXSPYdxduoWeBpBcCEHhH4eDDMZNnw4x7qwJ16qGfomaz5CpvKy",
  "key33": "5PQPLUQmpf3t5PBV8ybicYSgDThuE98UREzAbFMo8YKpFvjjXG4PSh2mKgR3TF5WAhC6M3gfNrGsGzjA8grx6wkT",
  "key34": "59fEY5BZZ7bUTqPeBJYFg3PvzUGYoFVYVaiHjVWEYdy58vjX9p4J3p19wC8y5LoezjqdAHRdQn586A5Nn9ndNZCy",
  "key35": "5Zw4unKArtch9UjLDGNvAg4zWNckvsNDAR6eyFz7kyyjYvJveRsHpeeVaeScGGU3yVUA2reKbQ7DJDKxahm28JtG",
  "key36": "3PTkdBP9wMXujjMihYHa6VWjHurz9r4ertbbHBtCghSRMsS5aQtKtSzYdymte5B16t3mjFjLn3Pa5fbTuNZowUZB",
  "key37": "5ofNkkC8X99VrvHsMvg2J2T5a7Pv3KbofQzC7P4ugeAxjUS4XaJaMuLAMS65W2AT18wrSsqMvqBp9qbpcn39K7gb",
  "key38": "3thprZT54EnuMJgU2SKMDWSQWXtjDvukBB4PNjVXMm8HUvJy1ccCKSz6RTraTPgxKNsKicWwkwSrBTpcs8h3seFJ",
  "key39": "44gzcSJ3dAwkxkuXUvBhD5bzftPdyLsrNLin1yKcDFCbDkym8HQM8kJ7Sp5kPt3HESjAkRwFvvLoesKqgrdBC6PC"
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
