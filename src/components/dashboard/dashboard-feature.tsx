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
    "4cXdj8QPopMwn76dyaRcExBCnoj1ZrSztkYc1vCrJWGHTvvoJr7dmsiLML65FMRisNVZeNAWg7Y8VJY8V7iPoxAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3uExQCsNnEm57rNS3M4BBwPUzWLg2NexzoWK44NVGNJNKzW8Xvgouiu8ZQATu74MJ9oCudtZ9ct66t46ejBaXp",
  "key1": "5i9DxXzsVuT4gYKHzesfssow6tHHHBg11V2xEz7AmsSxREd4712nUpkCkYju9tp7mpuRdTbVbKNcJYDpDTYs44Z7",
  "key2": "4ZYCXdXRpz9b7LjgFdpPSwyR3kkVVqq1DG7hfhM4E2mt8NxLhdZzdizJ7bZpnXAkfcDkuWGDmtWjVKD21bfc7Mab",
  "key3": "iLXmBUBHEjYtqNGUuwEYoumwxMViSwL4atgxvH4WY6f4HdUxLcM1U5mpd5mLpkt9zNdhmD2QF8bZm6DvZJ2AWHr",
  "key4": "2L2UfuzVE4TNmXFvAFB53czGmGPM7KUbT1MFofbP7r9MdudbxCLynafMZD84ak7UuhnhPCbB4wcdkymP8zPMqp2n",
  "key5": "2zHB6kjMaS9sPsfKxt1Eq3kSGbhdaAiDgCwz9HJfbNNKNMUYkdiDTfcVmJJEzkkPjRh8eGzD4ubKUwwmsoNwfzY4",
  "key6": "3fbz4GEU6MAuEVsTw8cGueWCXsj3y4ApkM3Wajiu1bHdw5zMKjRTvEracWZUxpEcAsotUWhuTAHmfekPLaUN4dhY",
  "key7": "34kDSAgGXk45QK7pyHKKNVsEiXzd46Zoo2WLQwJVEEZUAyWm12obK8yzbHjQqVLr83AFZyCpbbwzskC6a6TQihfu",
  "key8": "2qmZ54tJSE7oxZyHXdVuGDzHZQk272mrehmtfYY3g6FmrhC4wE9HmF4HUyL3iY2H1v7xiVuJvPUjcZuJd8rZkQq9",
  "key9": "3DMRcGXXN7J3VjybViiYkPfkmEmex8WEFkf7MEEUxTKb8k8zKaWiyuPXoZjQ8UsS4RxxTxJuu1v2rDGXEMQb4X5R",
  "key10": "2NMnYSb5kxgWLEMrBC9sRk1CRfkALXyUzh7F41xNhjKuo9ZPAM94Vc31kKZ373ABJ5YkrYHhg9ZssbHYmneNxBV6",
  "key11": "WdXPjSrTL44VYWPVq5LnUiDCXyeuwHtu2XZ5DqHhjXZL8wA5gxw18Ar7Rvgo1j9HFPD9AYELcWfoAMyJvUVewGW",
  "key12": "25ia4zXoSpdF5fBLW9tayPVWT9NAhe4Ypt5H5wh3cdVumfrwLLkZuN3nbrRGRNg2gHo5kMxSESQ6NGnLvfeUaUA1",
  "key13": "ocdyJiHcRvu5Kq5sRX5FkB28rHicZ2FBd82u7fytuzwKFQGEPcPk7Eyd5KAnBqF88JZBdA3Eb4ZKyYSJdFxUar8",
  "key14": "4i3FijVWVmJp7miz9SufEtKQhxFVWSJkftV2bk8KtVuXtSVhcj9GFSDEnFhfkHYPgbyBPwHCk9srE4Ged6wRXRXH",
  "key15": "3T3XzuUVVhyzEE3mWpA5hP2rdc5ne9bULKYY7T2W39k2q6J44bnJ9nH1rboqhWb7wFdyc5YRiy83eCc7rEJ25AKn",
  "key16": "tENhYjVWDCpQ25ADUHEuGM2sHbrzyYGGfRGhokjcRo4z1KnU25dwuAjTepNYdUnBwnumcAuBq4vwK5g3cYndLQY",
  "key17": "4c26xhieo62WyRwr7sp4EpL6Ab43CBixmtJRinnsF37yBhVdACMT1YKpUBsb6BEcAiQ9UtbRX3S1cbNjyfeJDUkg",
  "key18": "8fZfwtQskqKcaq3cjzECXYberCbwH1uiaLe6r3o71qZ1E2r631oruJ3G8cwhksqbxi1U8ZaUeiSx7AckYNW6k9c",
  "key19": "vY1y7p8iFsjTP293c4mgKRuAYH1aZgvR2mD5yZ6Xqayry4JTCgCCtw4BESgeMaF469dFPiSCMq2m9WveKUf577C",
  "key20": "BCK27p82XD3KavFD9o2toA8BLoos4QLyaNE2AQhLq99Vj4qYEytAmLVogT998piSztQWkCfFGoLMrzQzPpZMjHo",
  "key21": "44Z9BDVQgwohboeYve39SPCzB9N2YU7Q8EJwwWoo39GgRjZFVNzuc8Lvso6xDYGoyNFRNEdjANccbooEvgFe2JY5",
  "key22": "4ANrJw1dkS5UtbDKG1gYtywwkSBwpRiJDaMibScEPejhNY5i3FvSNsXRqVE4sCzuG8Q2k7q3bYmb3n9jq7gx2dKM",
  "key23": "5hGpKtysF84NmyA1FnN9nJwhp2mtV7kVtxavo9U8Mx3wz5a5ca68i6dbrdW3T3J5BmxLEYr1y6Sd9m6VJDafTRpx",
  "key24": "5FJ46Wv6AS5SvWrpDa62FPjXzD53Zm5WcvfN2xEzn86ArxTj1DbWSfUdHtkFUkxVA26hwBD5jgC7ABfGUfb5VEiZ",
  "key25": "2dgKEy1BQgc8UvDn2Q5JBdDFanK7CsDRJ4SimbRZyGPFNALYE6iyjarkuo7AhKP9SAgwkNSVKcb1XbzqommdLjBy",
  "key26": "3DWp6Wg4ayccbmJjV4Cd7FV7goLELkYnKn9WdukakSnktqHEFC5pGwmJdTutae7mzSk67k3UVZcbAMkHj6n6GWxh",
  "key27": "4EheGUaKob2EtMED6czADdEYkGzaVbRE4QQAWNknWa6Lyaw5PqHsTXiKyimuhrwfNWwfSxQhSFakWqmEWZ1R7Ypv",
  "key28": "4VakhRXb8J99M6VyDx68HANx8UGYEASy8R1Tv46RhWVNQWnvKRfKZ19EGv2U9g1XftPPKGCTBnUKM5CNpBKeAmYu",
  "key29": "4phA9jytd9jpEF4NRi2A2nBtbkgq2WSfKZARrS3HoSohZbzStRYGJneSs9K6MFBWaz7k1LeayZMV9Rr6Y184e4F7",
  "key30": "3Qp5RxGJTuTghyqiQY3tKALsojECjogu6AAGSDTfGLDnKzxzv441VEeKhS4hQ5esUwdvdwZ2x82VV17soLZp9Ceh",
  "key31": "3mxdsoFRygYHW82WEzHpv6oPaiDytqhkqpqTyqnY5AL4sWbxpp1mqGGUNgkvzDdT8dhUCLtwckiC3A9PByydKYhn",
  "key32": "2UGB936rQkZdtCez73AL32oDHnMJtLLbbgH9chZg7cxBxwwZoqn2c2cpcT5KmXAvkr1N4N21VXbKCX28TiNsFetU",
  "key33": "3rvcfx2CtuRhRKfvr6QSXh8tCyPD9ViSpUMr7VH9eHieRRLNk2gr5RofJgggWgWBvxCG1uuMsvbj4DHRBirrhx3a",
  "key34": "53YEZLGVTFogVAbUaEm7MLWYeD72KAaZcGTyhdJTqcAdTxXPS4K9d67p9j2bGBHYK2byJPcfV14YDkkEQSpdhvEp"
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
