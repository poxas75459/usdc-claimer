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
    "3EAPWsatRmN7E7fyxaQQAGB2AtRyVaQuiujhaXucLG81atXiUsENUcBSFnUdHpby7Z9x9XW4tg4WfxYroj1Yg3fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGZtges3RPRT8WWxFojWrkbXTwrzAbFVZRXH9GhvwpvSpxxP8KiewmhetREXbLG6Z4ZkeGkjMdDW1x8qQDqYEvr",
  "key1": "5isEeAX2WGcR5a4jYXHdYpxFzsFxML1N7E8vjSJnANG5eoYCiftrbsnrgAuPcvD6ZH8cRUjsqsHF3zX4BgnnnRde",
  "key2": "4wVykrLAEkrzURs4PXJ2HStnAgm53tMbz5Y3e8KLp9RQPSDg5ArJ2F6AfpEddMjxbuD7VGN4jNqpMoqCQnisggwV",
  "key3": "4HyMP6WnLXV8qxiPC2tyJCLjCPqy7hdx8sTVxf8WBeYF9YYgnBejixZ9NVJLM4AwifEz2wDic4WvzAFxiVgyF8zs",
  "key4": "2M4wSpULfkHG4txVRJwHbtEJVEENdYF43kYJYrJq7XEm442C5WyoBPJJse2MG64pjnaVBMEHwCnCkkbom5bPRRpt",
  "key5": "5o4m7sYqsE36VDUZXppyvLWkWJLf1ixszikzt2rGoQ1DVSWAuNrMSFwK3q1WN2U8mzYjroiSm8cAHVAkXAs1wHMV",
  "key6": "5nwEMyduSMTc9MsSjrfcRovgbG6ouT9PUju4xbSxwuHovGFa8HPByNVcxSQgZp6CchghLGoSA17tvsVZveTZh8GF",
  "key7": "5qBfzYpEy42sK9tuZULVyM5P6wbbShjAbPs7M1W7gPx8E1zfJ3Fg58NT596UmSopJUDFgV488VWBQbYhK7Bu5Kga",
  "key8": "2rxVoch2fPwjjUh9UA7SFjmpbY6AMQAK4aVTHXmjNhsK7dPMufKpumYab1qsbU5XwXSRf8EdezTBJReZ6bQDvnog",
  "key9": "5Wp3cxcn34Cn4uaSQkHaqk4usvpaDJU7KHruyMwpF5matwBGuQ54zunf9DM5jvhX1cmFogqCJKrt4dcVGwFjDuvH",
  "key10": "274TpfoT72RXrWqn9gExQwBKVUzPtvFP3deovgmFVhrCtUrKHNH2sFRhxC12eU11vYr4znhyydbSiYxgcsGyQTyH",
  "key11": "2BtXnUMJZ3mC9aUrZDzJhWR1LSUogTr3tsMZWkiv54oJDDfKmwjaQYvKmPGZtocuzSv9bc9AxzkbXYsZLj5KF39r",
  "key12": "4sjULXbmMhcCai326en1tzBZMwj8wEuNh2VZK1HLkQxFnPCdgmLN7ZcBorn4QKkaiyqPf7C3yyBRn2aF164TobnB",
  "key13": "5t6Cmrezbh5NyPf9PiURB4F9r7rE4oWNXftsAP2DeBxviPje12QbYnWotdPgGGZ5TPgpCFDo3vw7zsJBYbGdBJzQ",
  "key14": "5SGizAB3aKo44ecTsbQMyUnQP3t1jiAAeieyzk21TMnb7sLUCt4FL83Qv9ikQxQap68nNdBruW5Hn2vvtt8CNSiC",
  "key15": "5Rq8dYK7iVpxACTy12G6BVEwJcdrBPb5PHiR8CoacMFfMKUHYn6yEaA5g74Y6onUePwN2bYrqwEuxoZaAm8faDbd",
  "key16": "3PuGnQgzwNAgKphmNrdKysfY2kmoVhBMZaMfJ2c9jAXc1Bh6HpyR6hEZ6JamK6gktEAVeGPDaUK2C6Jkjo9Bnv14",
  "key17": "2yPDiq6ZGqjAa3jPTM9BHyq99JQwJ8uWuJfSksTLgA3ujwQdNs51v3wR7uWzrMNKFVETnDRzxbVLY4zHS2credUZ",
  "key18": "AktsMY1ELoRnti63NbMbiCa5wuxitjHrTHiXgM2gTKM6wJXPtfFfS9qrczWhWmBWUYvi1g6athaUyxz8RUTHggC",
  "key19": "4aeSDHLJ1BG55fJArYcWNJnUobZzhSw9hvfQN4TRh6k1mb1rb3YX5jD5BmtDZg6eoUr7Ci7TZBKaLYgZj35eDsER",
  "key20": "3D4C7B46v3jWJY6wUQxXUjtHVfZvNoHofkKdkg5uUfAHV3g7QkyWNeAeu2wSc5eUQyLYxsc7Wkn82QEXaF1zFNHA",
  "key21": "CDpX7b2otv8ZzK9Lu1Wwpe64GBwaX2zUtruFxWbzb7ZCzjMN1BePq6rAHQP93RuEwnvkMXQrAh58FbD3ZtfYuTP",
  "key22": "5YyJ27U54jq8RYf7JP4PHUXzdRhDfc8WHNLX2PbMpBD1bjeQ6wYS5hnRrr4T7z7BLPdCwFHzNDkKNV8senB9cGtc",
  "key23": "4Z9bF12AsLb8MAPmXfFJzGfDUmsi7bMfzB63UoinVz2R61n6mG1xALNc45w1jEUcxw2hUv2udS4YHz3nPSb8Rx8q",
  "key24": "2rLnt1xdY6qApWtutZtpvbLdmthaChj1NLYqzSpDeaoef8wYpUsqyX9LEBWJEWofb4dVHc6LsefBhTQ77XnihfZT",
  "key25": "5B8456o9vYZmrUq4kKSb62rYP17oehwZNTysYJ8X9sFXRWCCYiw796sNoTC5zCy2iTQEjU7Nb89UNMEzP1CrLa2",
  "key26": "C12PGt8dbNxXZ5zLS6tCv4TzKND6fUL1dRtD6xyarkEceb4WUHLps2QFdenZWMqkGAd4vkp21uNtuPX7u7crqu7",
  "key27": "4xcZSYeWequLCXMj7TLb1pm5unXMV1t7gUfQ7TLSyA3a9gRJx3brGZ27Nyr1d2H8wsenGxe54rYHHuj1t6K1z9DE",
  "key28": "2HjJKY8bxuXu24CfnqdXptHA325qD4BRZugMdaNS2rpHDngwD1PwuRUhVebwczKbW64XqatFi3HP9dE8XMEGdSez",
  "key29": "2TdQc9QEoC3Wm3DJhQfhxfWFDX8FUiDj6Bjx5cQqeyDGxCsw3uW89cgPkGbdAKuA3LAUEnkKC6BB3Bb6uxFyGUEA",
  "key30": "2YJDmMmvqUg4a9QsSbiwy4i8xbdE3r1mejbnnSqw7geZiEeiFzUuQ4Wu6iUfQ4JeutDzjxNx9CpkMVpz9Uvyetkc",
  "key31": "5pADnonpYA2LS2CR8qCkJrZwXrd4mwd3LdtYj6PioVhgYUx3u8rxVuA9SnSHGFk6u8Nh9w4bSFrpRaLqNW8XRcQD",
  "key32": "2wv5aKhomN5iFnbmL3hyfcnUd3PCAunTGDzFeWA79X93e8ttqJ6DXRykAcvVkgMzm55UyGqe3f8jdobVHcWAk8EG",
  "key33": "4wDwy63QJbEWPaZTLFmfRTvNwuEqMag7gd2ZhzauUhKsi9SRrJfykMeXENpuPEifHwfTxNYQDqSTq1eZtoMdP3F3",
  "key34": "5UDJqLjhu3dFP7EzkRkmXrFto88YtG3uErGAaY8WKcjEfzE3JbjMhRwuCfoHjH457F3aBvNYMYgpxxCVQ6StDsRd",
  "key35": "4NbY9uNdmQ8999jSFmu7VXz2AedpNbUafCC8oN8yet3WgDvhqUVa6snydiSgP3HcJqxjG1J6vyYaQKZ8JQbjyvcW",
  "key36": "2y851pNc1gf8duJQr2iwkYd2NwxkvUE3Yu6HUAQwkpGREP7v4NN4XqCKparkoo3JzqMpk3QMZSynK4HrMPn1cY1X",
  "key37": "662X63AEtATerAz2s9QGiCLUEmzraWxZTt3xVG3jTnKgYpJQ9v7yobNMUJ9pC4JeBhx1tirMZkvei7Fys1sPRiK5",
  "key38": "3HTznU9NWwzDGTyhPdjTB2QUcZb2Doq6oXZ1QEZvjD8xFSpcCg2MJ2pSeg5h2CrsDcmEX4czd9PnA62kZEihcGwy",
  "key39": "34EHBDspDHR7X4HiZEGcLsVayVogQrPUGtgHtBvM78U3FmDQU4wFMwZEb4MZaZXK2DAA1wHjEumiJKJoqdsrouv",
  "key40": "331kLMT32nPsoZQ5inu45i7WXYoDsouCEK8ysJPiofoi1Pxm9siAJenAD2HQqMHwPLM5V5n6zso8M2HiCs9By5CZ",
  "key41": "34rruZDG7e6nAjSRrXNpCGsFxgRtihcbr9YBnyuvX5jZMsQxZ2faQWKtrffiKN5boPMQnncc5Yui9gs1RKJxdRrW",
  "key42": "5bXkf6RAH9FRFXUpwmabTTEtZ78bVaYTub3Qp7yMz2T5fTMdExs74az36s9cKqytcViz2wZpLkSCQN4tFW4oTtiq",
  "key43": "5iQLydC9swNEcMWS4Giy6ChqCegMhmiY57YVnHkHaRwiWHoKCb45oFC5tmkxuA92EqiNwyquLm8wTJw6AXnrx9H",
  "key44": "R666u8B1T4jX6Ay3S1F1AhmpDnZ1F1QsDJUW55A4iY1XnSsNAC26hQWGpKhh51k4pY7Fk4DfeffSupDftfAHWtZ",
  "key45": "4qvi1Sef8BapcXsaPmNhJLRs9hHr82ASyHXwZViqRokkanuG2GRsxiUNRYaLqnff4fhMXAioumjDTeVhqG5xXyWN",
  "key46": "3XsmHW4t4GQo8qETZZjbCsvMZ69mv4r7PEzpFHmNT1MZ513Afeed7HuFzFfPEqJojZ9inSnEbuEBiECWqdqGRe5P",
  "key47": "57RnCwjh9DaurdW7efNTLbaofGpFXEPJAERRKfZPMRTEud7J1yediUmpaBaGW8gqkzxmwQVR3BNDDfNWRTv5VaUS",
  "key48": "3XKw6GHEkhvC6x4mpUX1HrrSus1ofpG9c5e1s6EvJ4T46EL577H6ggYRYQGpQTwGFJZeX64bZASk6AJP8ou7CbZ9",
  "key49": "4hivaoUWfK17WjeqJ638x8xTRg9nqEYApS2aZ2cMRgwvpw7D1YShXS2vStvu611LxYkVcKDT2A73W4YMttSV6fPk"
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
