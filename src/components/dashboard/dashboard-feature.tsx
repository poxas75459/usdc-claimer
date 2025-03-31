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
    "5RnAKGC5JQiExworQYs8h73jAWehGWKmD5C65yafGdhN9aoS69tsMGf5EtZMmZSSvWAKQbQ8FM85rKRTLmWL4Yw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEU1edWANQ74XLTCwe88dShWJspH51179hFbzwLCLiVpiU3sC9txUbZutvUtzP8xqhvdEtsGwCt197Y5uxNSTpL",
  "key1": "2rbFvCeCf5Z2S7aNayAKPVSorrPLFo3KUFE6CQuRLt2fUJaEEpHzLwAfiDRD8fLq841L9SDkuBG69HMMXS6jwfoJ",
  "key2": "4Ad7cSEmNhY7yukWbTMLPqLULEqneUHfH2ftnPqqjPrH3CpsyggmjuSeoXXET7NWk9Qtg6LtbzoicVrpcZp5cakC",
  "key3": "iuadprhpteYHxEdatHoY9ZTsQ7BQXHqp6rZE1PrpmJ7Wf9hLYihkG3LzAUvNxSyH1LjzyAijNBjvSyg38VAMyVf",
  "key4": "4Nq7rms1ecmCfjDuddXGVLZiPFYMWEtsXb9GMxxae8qzaWTdB1o42oxRsRriH2xTCby4NbDoSWZMF5fiFd8SP8GK",
  "key5": "2UK2HEt7UiUjmv4y1Prg7UGucagc6mppEjLi9a7VMndPX7S3YXpNCa4nUt7ugEpRy9BabyJKdcrFviDLMyoWfcBN",
  "key6": "5r3D3h9meSwFkhmQfahCgGKaHKXLDQnXVJmPhorhV7iDXEsoJ7PUmzebLHneas8oL1TRBZoYxRnEJBN1F5TiXF3Z",
  "key7": "62ELKNgdfYRtRCwQVjpCmDxpXa362qwYETGFxAvNJwakuJaznfTweXGHWZp1uwhYngzR9Vy4kWz4TcpqCP5BNzFr",
  "key8": "4gjTwcGE3qPrCGWt8Vhwa5JGKQsYJ68ZCPc1HEBN1y9njshPpTMyd7kEbWrxXdtN7NoKforuzAPy1ktkX4DJgWkE",
  "key9": "3vG43pBxs73zr3BsnSXAdU6QJqpz6QqNG4Ux1SoDXGKpZULa7nP3twP1cTXx7bd3oDm2TA6rvxLs1s1q5cUyjLp4",
  "key10": "58cQX7XJZM6LFqdZUvGpRJLiA7WtNLCA4JqDRoUBTorQTo14G5kLvx6A4q92X8WDcEcRq3bwEh4biJ37i9dg4X7Z",
  "key11": "2F9v97zL62CLzWq2WPPBHxAEM3SsFJQYka2sA2Qepp2JpBRrcZS4xNYK3wQeCkh9itBa7HPGVzAFgSModbdH3AZA",
  "key12": "2o42bMwRuenw3Y4FCk3jYn1BNQ4HFWSC2w6AL9LHFfWeED5iNcw6FuLS2c5XY4TaL8Hy6G7PGXsqk8XEsRUiutkK",
  "key13": "44EWwKwmX7tyHSgicbo7y5RfciPstv7ZjUWbfGSSKwFqSPizShKTh2sci8CFxGZ3nVGkoLuArv8b5c4NXJbyN2NJ",
  "key14": "61YNRGa6EGqvDHHTAiENwthb5Ue4xnTjpAThdasA1QgkFaeTdZP8GQwNohir7233sVddDgpDZsbYQ1QoBh9S3JKm",
  "key15": "46GoNVtr7E2fWYDkP6QnbvTeHCo7upod7cUAGKBXcSuf9xmSZeiymxBoY8o7r21JESWHSW3n4PngfRArgF7mfiVK",
  "key16": "rdrt9n9zymU8o9z2g7tQLKHQmRQnAccwSv2QxEA9p7Jmf2gLC8i5Zqfy1t7yBdaEyoP3ETkQa3ugAh53RjS1pDL",
  "key17": "3KGQaLH24VmEsUYoWNBJPmwca2C86yvDY5ZKPRK7cNH2wBtvCRLg3PdefRSYwcQenrV9mzXouNqCy7LL6TEVSm83",
  "key18": "5SR1iQM4kEAR2u5iuzngVjdXoN1B118d9jsEequJLo4Ssmw4b41pWq1AwSwMJfCPB5V8XWEoL8zZKbHtzW7Woz2h",
  "key19": "39BtiwAsWhzprTPDmUrAWVdEkLbza7FU6PBKnWyd1uKKkdxbaZA8m6LfmERutNtKsuVmc2rw66npNeVcACQGwLZh",
  "key20": "concdohpbe4L55G46oEMUCyWQiU6Yu3cnwictX69bHW4jopj1r7mTEe2kvmpDQBTSuDcKu1CsMMKitHoXTjsfgz",
  "key21": "574EwSgvG3f6De24xizksHwR93PpcMXcTcsr42V1fbaJZC3JriJwKYzhv9Sr4LvfniUo9KxgWLekgWkrRg2L5keS",
  "key22": "B3YwPq3ui2TszFhgvKcPUzEHvXAu1VHuHcnLvA1iRMHEFk1bRLqDNdYmChGqczzZBYSELbjBzDzQVcXwRuzPrfW",
  "key23": "3z6KNDDcCEeXCXattcawxJDgY1CqNUtF2a796ja3qkwygxN1M2hxyw5YB3WR51Q7nj1Pgd1hEX8hFWCtraAd2KBm",
  "key24": "26qi3RGDGDkk8C4ihge5FHyBjrUdhXZRX2ASzLYiyeVizgLGtTPQLNDZdKqTEUCRbMHUHg3XPpvPHHsPsDexHw6o",
  "key25": "4j6yq7CvctGGP8vDUvdoz2ZQcUQnrNGBGhxHLBUUzvBuZdMsHPbWBVCb3ZcwDHn5jmddmZ4UfFg3CYcQdcj3EjKe",
  "key26": "5wcvDMhpBuujDr3hoknRBMWoAJSNqjHMSunk2gENQmQKXhX8Spr1GpUj45e9t9arRwsBNYgaJNomQo27Qi49W3TY",
  "key27": "44xCYuRUxP6FyinLWmDJ58999N35yNxc4GY3dstEmaZvvyC7LkuVeQhG9ZUUwzCmwqVexGtUfttLLpEmAB84K6m8",
  "key28": "25URVu8qozh7ektREhuvA4xYHYn1zZaAD6Qyc6gi2GMUnWPe7qoUkYN2yNaCsJz7vqoEmngTcucpGE7XWrFTSigb",
  "key29": "5PEjSaNC1owq1QmcRFia1TXYimMqCuF4B7Dj2Vmw2UWiLtYGTfPJDodGh7agNAvBg3N2cwcxeAxdgCpPZeHBbGF4",
  "key30": "2mcm7GVmNvXfkXJz6tMuhSnBv4rV1fn8ZD77KpLjmaeZxVGzER6yd91XaE6hy7aKRn3SPRGS5XrLVaq56FgAfJGk",
  "key31": "2gdmbfrxSceddutKAheAXKg42Pq691AQ2sBjvuncuKJAkvY79R1hwHJd3Ngr8ejPT82EVR6UWCEp4DbdeweNJCzJ",
  "key32": "3SrGVmjrPKNLymn5vFRQfoiVPtMHhRa738a4aeiB91G2n2V4YpTrzdVxXpcku6BiyNmSaPnfuXspWXtjzTT1Fn95",
  "key33": "4UQDxEudwUjNREAmpnofMFN7DHgoS5mHN7HSSkdQkt5VUVZtXMLE6meTDo8zBhLf4cEcLAYxXhXDpJgkcuaCc1JQ",
  "key34": "3o1CYxvsBnC881ZMXLbHeaE8gNwjjXNPoLW8ZytzbGqPCwELoXhRtUafQLYXTt1LqQDdbTfNGisjmdbA8TXAG8RL",
  "key35": "2TDxYvH1aXiCkWvsoebAxfAZjbEcfh9rcsodvhuTJs5Yrvu9WWkJ7tPa7yky9xbaRrG4bQ71T8KjTant5gdadLQ7",
  "key36": "36frEjCbEnWqWGCeNaRtQ695urUaniWjP2nTtdfYTPj16fGf2DYJCXEb9J6JXRPfpJ61DZ1EWNPJb6Ye1uK1VFuq"
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
