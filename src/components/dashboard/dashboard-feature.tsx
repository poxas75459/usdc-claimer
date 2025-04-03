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
    "5ThrRPcR8oweVEo2zhe8x51FtCxaWqEGj1GG9AEbVeU8iPkr85FGfzsGw6wruDqDkCS4Uu1GKZUskmrnosGcoHGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4kFRRGmvkLBbsvLaDvdTCm85ePw3ME9oXr8pw6FsP9qCBzK2UJ6qhg7pAHWDhsFg8dum8FUmULxmAbsBqdsF1H",
  "key1": "4QsEV5G39SLEddJUYsPjNrbmXpEE6mCmaUTsYu1CZvfQAHGaftykmZZEj2H4d5qtDK8FvdniQhAFv6dK4sxAAGEw",
  "key2": "2G4eseHQwBEEcofj6HY77urGvKq7nCecA6CEWT9Rs1M9wccoJ5X5y1kkJAfXvjfhq2nz5be5UyJwAALANFZNwi2J",
  "key3": "twvDRp9WZmqi4LeupRardD4FKRPvMCsN5VuhGy1SumN8XfAf1wcvQ9qi8nH9LxK828g4azhtDEvJpMo5qg9sgfZ",
  "key4": "5N8kxoXe1LqA38ZYijvbn9m6jzkMx8JkpWQYHLyJT6QZntqxgUgW7mvAuUMtLu298JugqYP7jJF6FyX6Ej1V9bWF",
  "key5": "5nwN9TgWdJytNwXEn4R22o1wmzgRUZxQ3NCg55yavmrsqKgJRs43UiH9R77JM6cDEPon1v6meD84s8taF4Wpysf4",
  "key6": "4LdrmDVvCW6ZUK4icRYV15atdpK8jESQWmPVYVPrSroheA8p68vKgJ8hXV8Qf1BCHc4LDsQri7HPBLYGSQpBuegU",
  "key7": "5bPgtfAUxuvXEqi77gmR1mh1p2VQ78eXDG6hgCG9V3gLtWYyXmGraWKaCR6Hk9zptwsxLH8DZmJ3NTxaJUrXMtLo",
  "key8": "aT58FrTtJhKAGZ6v3NGmAoHoxrYqbKNtrxkSbiH8tDD3VKFZY6ccXADnD75mEtTnx3zLyUsrQLF72shAaKgXXRT",
  "key9": "6M5BqP9daaUct8ZUX3KhwoskmuW5x2KkETAPTmJHRx3BpT9bA5mQ4UDm1qQfih6cvxiyvhWYGF3ijGV324zrygU",
  "key10": "3cPZd7DepgcZRtidhcPsRH6ZmovuyPV2DV4PVWDo7NEEtfgeCwn3KnAkebQaNRM47p2j2PzhHayTxF1uEkXTPGQp",
  "key11": "4FYEhhoabRZqsyTkEouQUxCT3phRoPVyQBxav3LiPxC8hGfipszzChwZjV8R7yr6UPz5vfBLmG8ibrygmNVi2ucL",
  "key12": "5qfk4RySkrSp9eQ1b63Rgt8SKYq5yHoPwQD174HSmKvgwPLavMonXv6PZ3RU2TvBrZh8UYdGeyVRCWhUnYGKbQSa",
  "key13": "PPLbh22CBs6QkGewwCWjcr6YA5Hwp6ZRKBUwX5cPp5rxBZdXY19CBQBKgSMeY1LQqWqnrpoBsU8exF2etWkefNn",
  "key14": "C2inD1uhmftpHjq5w8nCq6wpaoD9aSXM6ZWkinVDzsj61mmFDn1NsLSKeFx1bLyh5UFBkND7DA8Y1rpEBkMQ1D8",
  "key15": "5BvFrvzU5YtUzmAjNxXSDtPLpJ4kjGALybyQTTnbbxAEU5NbiADCRWRth7RC1zbZ9AQwbQKb6Rb14JJNWoKmmdWn",
  "key16": "5hnLZyp3mYQhsE4Ui3LAF8Sn4hyzJqEE4gwXoXTquwHUAF44QJwiG7QtF77HZFA5CKuHU5G68AsCuyPiCr81BuM6",
  "key17": "2YVeqYUzpY4d4jWScSfujgkQm2WqQkAVAys8RFz4uq3Xbcju7vfCuwhhErywY2ocVcdMPW7GXWPJ1Fzd2YkbZRDt",
  "key18": "3QeuVphKR5gJm424arN9m7pzdF4hkGPDLGZVbt5QNGCCgMxVCsoJ8kkas55njMwnLZXRhfAixmB56F6kFmV5pXNf",
  "key19": "41nD3px8eh9YaaJpaKqBma3qhECWNdV1QtZJytEVouDFmBk1FkE7Vz2Lpr8358wEMVQoeb5ZaPdKfFX76XrSmgCk",
  "key20": "3oWxNJP68p1W1Aj6dcqtBUVk7HX1JWsDjWV82tr6j9a88ZsrGYiQF2dvzSKkbcWNX1LnMT6NNncaeptQcUYQATTA",
  "key21": "V4DcXinANZWPBDysgAYywPmQLuWkPPp2oaxcZb9xgVdDFyCJjSVZKtzaXZdT2wn2BtC1Ee4MTQQoU8HPWSNywb8",
  "key22": "3g3YFRrUmBXV5N7EqtnehAZa2AbC8tos3eeUvR6M71YKRdajcKJ9L7mkYfwENzwnjXb34uCdKDc1drYSyzHeF8ps",
  "key23": "4uv2Ew4YZLQZdanXhCAPcpF9CAcS4ERFMMotfQbns3AC1ZUU9KVjFqyaZ9ThFyFKrswy5rJnUCp1nesQnEVt63sD",
  "key24": "5ARntH4hSGEuxg2xUq4io8oMN7wSHpZSdnq3wuS8MXXWkYD1enCFftcHxrxkhZAToZH3jcApvxnttK3g8AwQPhmZ",
  "key25": "5tExCWwEL5EyPas6FSpADED7DeYVhyyCHNnggdsSA2mLZwUKBZhfTxvhwBzktiTPM5QQq7WWdTomv292RzizUxXK",
  "key26": "5P8EHfZKxiMJvJ5qEhncmv8E3vkSjPyCHFf3j2amnuGg8r2T4R5qkZrMk46wVD4gRE6DqRj8pvTcTga3KiUiCqUk",
  "key27": "2HetpZkpXWCJdj4zUruzuT29UARfAifdPD3oA2YtB2hY2SDYgWwZDpMdSK3wHdwdC4xCHgoPki6FBy3MHUhGQRrq",
  "key28": "3b9rJkaZeu1BwGaPM5yuFxuZd9tpPmEBubmtvzhg7ndNCLdchSLDMb3hhxXPmiUeMvMkHC7wbEgJtdBDENMTzW3Y",
  "key29": "5ozZ4Ftveh6nMy9Jt17sCu3ZJgxdy6BWFL7TosL63QfhuavnV2gWpGf2q7yuM2rJRVrBR6KhWBGG9qUUFMd8gpov",
  "key30": "5yg8WodqnqMLCinYe81knj8QVvQViQ95o41PW241hrpWoUXmwYv35t2PB6HzosKxq847Kmtkre235U6N9V55v6r1",
  "key31": "a7cdhiSiGaxDq7Yj54WeuNdcneHhxR8gzSdYLAcnUzw9BvCHUvFPBEfyEAnpnuTSmRyPYaAim17Roa5nTTZP2bo",
  "key32": "qY6xvuG8yYkURCSbA7sMGbeAKxxjV11RnTuBjxegZbYNfcieGfjk5HRNLtnX7DRhz2fKVj9vHzsFSM1NjP9rjZR",
  "key33": "5NsPPpZREpWS8tAJ4WFpbX9q2iV2Weg8H5sURvkoTpMag1oT5o8TJ1jf9zEVxxpC7rNj8G88itBfs9vGBg6T4UFE",
  "key34": "3348JjikrJBVz63ZR8CJYN7wqdSSCi7wqNNoMC1BtMH4rMgmXafHUgztCdgxN5R4udKb9SstCDUWeSZKkFmL2q4P",
  "key35": "Xr8y8zh2Kjvjhf8G7nSzzAp8iS3tiH7uv6hCnUsTemYAfWYf4qRD6n6GHCsyQLcC1sp3z9JMCzymsHAURvH3hhR",
  "key36": "3PsxshrEu942b8uHpiRP4CCasnxXeJAVGncVZmTus1fyymVkGH9srpxU6qvXck2vTnfWpngB85mcQ9djuRB4Qpw6",
  "key37": "3SfWPWyGACAUBXdWAV2unELzv94wVDgxeexgYY4VDnPdRMpYRSMUdaWdEDrhj77V74kzUxkdA5uEXKoGUAhsA595",
  "key38": "5K4i3rtVPqn8TPkquddrD7kt7Ra59avV3jNhcQdUHDayRUntj4MAWwSpSzV8hkyb2vySzWcz2WAnrgyja1fSrjYS",
  "key39": "3yh7YkntGN6omQ5VCpn9SLzJSBU2qahYsraY4f4EA3Fq8SYztgTEwXVHPz4EmCS4J469amkF9JXmFCrzL2SCpAFN",
  "key40": "3JBFYoammuPkGNDpSTCPy7aejRGZo7kbMxfEn7c4aGc5UHaQnWBdpjs41b7xU4AySyNJeHJ1SZWxL51wy5hA47QG",
  "key41": "22j6Vc7bt5bRwdseLXvb5BkgqVX38bTTevYAHqJbpbuUWh8VTS6N6LZC6YfNN9uJarQRUcaoQ9nnYKwJb6j1ohkB",
  "key42": "26s6H6akS43az5LfPPsnR2Hpx91iJjjTNMqjVQQE3dBaqSriFemg3ACFLonjyuiY76wcxhUYkhff5NepYF6NbnVn",
  "key43": "dpvy8LeLZJdT4ARnhUX5tuK3cgvVcWWvZgHCWv4hRwtzGX3sr86mHA3ouAwkMHeTRfi1TZGvwo5WauSGwaXBtf6",
  "key44": "5WF1cHvfQJv7qkj9BKNCxRQbhWYGrLZAiMqTKm4cHRXTPyuiJewxqKHEXxT4JUY9R7LR5bgUxg11wayN3eWcPGXB",
  "key45": "3uRLTaeVJfhK6mtAeK9rsPfVpDENgxQh5KoFTTfpdxnQmFE1vTy1AvXDAH27tsVtvRMPwsvf4YvMHR8JDgopj1L2",
  "key46": "5pd2d9LowTvZppxSNFUdg7d6hC7WeX2Zw7JZTNX5qjbyAEgrjtw2eFNpVhjeJffN8ZiZWZMgACPnXBtwawqERPWc",
  "key47": "4qjUofsnhySKRsu3DAqJBEGsXv7WE18srJxaeaCZvnAv3WFhD9oXML9vS2Fe9icxQPFYKAXGtfSvS5Lkd4H77D7Y",
  "key48": "39TAUrak7DJeCpWghfFqzV1reWd3Hz9usc2kgfcpwgdgV3L8eTvmfJvZboLcxmg9a7DyrVBX13sMZhKE4UJYpN7n",
  "key49": "4pCTX5qdpbLJijKz33o2QCS73Vo6VazDhaSX2CE8NC4SSYD6t68RdwQhPn2phpvMxDPNFpG3x4fMXFYWnvouUBRb"
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
