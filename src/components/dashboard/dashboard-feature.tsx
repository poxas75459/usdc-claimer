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
    "2Q5MeiSYh4L4qdjHR5pRvQjwQMV17CqPymL6dD8moukvCRqaWEkAfqJkX2CZBJQbUhquyPP3FLVdNrXXTJyiwqXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1bXjD8dRRxdBpQEyd6KHH5xwzNe7y6DGazzg8BHMvuTYtzhxZpWuqdFnxfK5TT9QRiUD4xiWMzSWrxxkMfnWEx",
  "key1": "3TqV4E2xm9mBK67MH1SmCDdU7pUq9hDuWwFEKTTXftcqpTJiWSfrc359iLrKaeVKcGYV62eZbh4wbKrXnyeA4eUN",
  "key2": "271B5bcQoSsCPkJHC9dwcaiTSgr486jofX3ky8oyHzS2KyWiTGvoDefyJ66Yx5p1tmyGvYUw4B7wyLsai73xopMZ",
  "key3": "y45VPFeQNB1J8SJK23qujXQAy9rb8qZ63NyZboosqTyFm3NfMUvLTF2b4BKK9hZjhwdkVp21BNtxvv7EyvMFpUc",
  "key4": "3ouJKxevStraFYjqH44ZrDzav5spph8XG8LAbv5S9fn9hFVB5tNf9xXPEjKjXzVbiuUzdtoEh4bgZNYvwjr1337X",
  "key5": "4PBAquw5sgPndZhaSEMMRerLiCz6NyrWmjYsY3SfwAaaaU85kNZayqvjskhFdeEdunBZD9tDCW1n5CP5SFMZdSSY",
  "key6": "5ciBhYVUQsPh1R69S4iJSUvfimQL5piZniuEkR5Tq2em9s9ERcRuye5MTzmDoKWK3Dr2QeEqdKvQ87b42nxDEGow",
  "key7": "4UmRmXiX52fdF2tkEYXTBTfYjv2UpBCx1HAZK4t7VpSCChRUtEjbpUrMXjb6jq56Pw5s8JPGFSke5s6znp1cEupd",
  "key8": "TeentXbTPoYvRpxsWPgKoXkT4yCD6SvmmHBPgrYbAsR65pSmCM1CntDoxvky1kPsv1jrLm3eaMQdDguikDKajmm",
  "key9": "3MF1DH82ijCZSDZtZkzs3HEYM7vyXr4DcwfsnSMvJ61Bx3JrF7cx4H6pVUspWcirnqiN5uXLfZnrVPdDGkZfCR9G",
  "key10": "5pYcTSWJWj8DYpS3LcNeGNkWm6hffWrxhBxKx1vZjEbghNmcPMFsxTLGQth1PxW8XfhKP8kNh93dj5J422qjCAah",
  "key11": "5Z6MPEc8fymNFvpRmCKDHbRfCMidkstEtmJMSPQt6U9wtW2SqSLXEZNHvQvMgJHKo6GHeQS9XoPcwcyFtQLrPfLP",
  "key12": "wmAPSnPPMYTstENwnhJnE5J8gJ7TYaJ9Wn4AbkHWmUww7FuQHCNi4zkY4QbdVJEukGsXFXJaWfroutAbGN3pDQX",
  "key13": "4dLQP7vegiuBhbmNu9xF2QxhC3hH7hJ9UNaDaEEkemU9derVBCxM9LEDLDnhuwT44ucHkvLt9Xj4m6kEAcTEzq7T",
  "key14": "2rgqKUxW5M3fSxBACnm6TS8SgVqA4Epdk8MJy4JPuGPQRTawqKWDB2VqRFEiYgQgTMecCNKVLeya7oxdFH6wkkuV",
  "key15": "3gmbKhQziDgTZabht4xmmu854GPTKRFu7RtKawriGMzdnuJFsyzw5oMTsDYPzGiWdMsu5zTpjLwyCEP9DuPvhJwD",
  "key16": "SMKnTsU95uF8hR11AxYxx7u2fA42cx1ELwwCPsFiWxvhhMgZERENNLQqGH2c4RnkV4DJYp77gJAXWbXtshYP7zL",
  "key17": "ZijTLcd1DJ8TWn5DndMqWsMgbJKHXfst2ZLPmSAccSDAQpVdEV3wVXZrb9M1fW7UWruQULWZyZ99a23P4jUYVpa",
  "key18": "Dtn8tVNAyiVoRHvAxVHr5un4sacxUDKtD2GYPrzUVWuThPyHvGeHnVPdQwKx7MUrmUUUBneA2Rc71Bu1G1hdcCU",
  "key19": "2bCP6ibun35LFc5VzUCBvckiFpGXaZiWYZJWEYJn3ygw3NAMmRsgEHFgnDLDepgy6X8PSm47gs8TWq4eWP6z4gwL",
  "key20": "5VitTsbPoRx2hTepVW33c6LcNYisQAZCXuLE9dntRsYDTzDRC9i3ay1N7iKgAqZK1JKy2JCyCLC75wMxLynEyGpx",
  "key21": "3VuRbrJ4cXkcEuNXgP6V1zPDZiVtL7swip11Y4We4uD6KWcegpdnRsjKCgd24feess7V8X1LXKWKXs3guwhBkd6B",
  "key22": "5Rx4SdSvnT3VMtRckJQ9tAvbj5Aj7fYaFNAB2ufWhzJyX5MagHHAKjEspJmC475JjqtJVBbwCgVY9oCgRyArBGHS",
  "key23": "4UszeMJhHrUgDWejhdjhxBHwzwtJPRC1fwnnuiNFerGMD34brjkrHFX7s4YGWsU4kyhc63rmNwPvwZrsc4BDoNUf",
  "key24": "5bqnLn6VcsBe2wFAdz3cdnUibZCp1sPdZLptZJKorpjC8Ydp3wiJbrmqnuXv9tk5i3KzKicF3u8miQqCsrGz9vdZ",
  "key25": "LHudsecqC2nYwJKQjmsDFaqxXC613QZhyDp4rgtvZH6GLTjXrhhvURi8Ss7b3A53haVC1kk2zhMqysbWBSCEEsG",
  "key26": "55QZXhRguLs9BPrCH9F6bH7PewbaQpZSCihuA487DPEPSGM4azxg1BS7LgNzwY1YyurPSgmR4wM4EY9uuE9waiEi",
  "key27": "2kUcF2F95x2z2Ywq8g28mPvx3gGwqCBYLK86LV3GtFYPX3bv3qUtapisLNxiar1cARDSoEkoJnU1zURTbk6DJZVG",
  "key28": "5T8BYNQip8BkYuRqPKccKhmV5FYfQVvVewctRRyBVZa3x23cFvhKhL1mvwLKSTBs4SBAcMwFpvo7BLVH9Z3m5sFV",
  "key29": "2dxmKGZLtoBqdRstyF2tptmzLCPdsUySTjN9FoJikKNTdNaGUetrHUt8bP2gapu4B99VgRXVmocqDCg4YXUqJrUw",
  "key30": "42tHVUfR4E6owzm17G8k18V7597YPVXinpuipm8Tpap1XkUwQxUrwe3qL6s3sebKVf3mQLvNpX7RunoUPL6nxqot",
  "key31": "4h4TQgMaY5jFfYMHxQ7woyt8ReHdPERfMgZXWrLND827EpRmKcC6N4dBq1iS2Y3TnJxXNZP6EoBD6nfvEtHFusZf",
  "key32": "569SeMdd2ErxkY7DsWLMDTBtNYZCZyrfj2bz9gyd2jzt24P8cdFh3wSFKSB7NbNFGZvyA4ydeHVtnLCFsaNN5XSj",
  "key33": "3X4mzLdhNdB75hUofLe2ha3Xr7J2yQaUWFSe8s7F24ssVzuufRRGaYRwSX4RxStuM28qTVafXYZ2YEHgK9PkZiVw",
  "key34": "6fRoJQAVsMZL6WeY2vrGFiVbqVRsqvEJp5ZkfA4m9uLuF8QRPKiLpfnM3R1eqocSLHdBh6xq5KUC5Fw4aoUV28n",
  "key35": "4u71ACcSJwjd2epwmbTiQGEmYKTkMMxybUZEBQ4yT5HhBEzcu8FLotHykqhYb5vk3XGKLC7rt7WMJGsjihXwqvQC",
  "key36": "2otpu1cHdUCQuYEFVM7hd3wwdqP72QvYUXGUkHfZfGwiSVMY4TVdgvtLrVZu6EXwj7H2bjPSTLd18ujCPVKRzxEm",
  "key37": "3Yfw3VkJ31ETTWJGjLBz65VoMvY8kfL64vXm5mUtgxgBiJrHJNbajdLMUhUFd82nN43X6Dcp5TNQdQ3Dmbsc9r72",
  "key38": "5aCxmTKYHdSHfwp6ewvBec5QkvHPu2u6oiWpZ2pjNE66q1W5YenKpwbhN1ULNC5qhNvHp7p9GAWEhHEDk75gHTGa",
  "key39": "47xfpQFZEr7mzAA8i3NgxRWi47EWp4kEWr759ozeGNWA8ca2bjik1G9UVasZWws1M8tUEtGsoN8zKK6oe3vY9eLr",
  "key40": "tjepyNaL6YjF4RqGi8AWmmyzjscXLBDFrAAzjU7QfxcJQWRCqSk6jXpbxUZmYXLqa2KLic5sTmMxyHFRXTs9G1g",
  "key41": "28SriTaZsFB6fhzb5U1NXD77zraVF2nCWZUDr2WEJz73A1V4NwLQvprR8v6kLQFCv4HP18Ms1vdnhtz6MwWG2M55",
  "key42": "54GgUp1K2R2GUJ1d9ykH7FA2owGiBis3swz4AqieGtDSN2ywtqPAX1RkU78pDhmeZPtL1GLVsFrD6RaNLZNUhhXW"
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
