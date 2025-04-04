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
    "2N7Xb3wBqttY5wC8QhwfsCVoEGELWdrbjgi7sL1hbD7bdnYaAAdEuDpeFVdW8TithxrNBoWKqAiwq7hwMyBzUE9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsZKMjJ1rS5oN7qxpxaumkppPifRHCHSSJV4x7bFnEQ4pMnDVgbTgAMkynzj3Fmbd3XpoqutdZkzFxNsraVZ96x",
  "key1": "5dggc4YadfACmVXnr9cKQjB3bdMBxYYGd28NUnisAuBRduoyzG5qZkuTZkck9YgHV2R9AiF9QPsKvKPxhktw68Ur",
  "key2": "37s42aoFJmnSkBoYE4iB5KHTPiDwbEnr2YvRbymCPwaVTdQrucYKk5XzWiGzBHRDu7XBTwbYj4dfG7h1dRPLqNrm",
  "key3": "4fhjLyQka34jetjPiVRRzrcrBAmDGANSNYd7it4vRykruF4P4rm5A3CmWepaGEu3XT1gN6bCjZ2hSSVWpKwiQdWM",
  "key4": "5XF6Vqzwso2Mqg9aCqLuaJWbLrRfLPw4rg6X3D2UV7cMYozHHA2TcSLd7fhLy64PajV7T6srMjnFBYPgJxGkSnsq",
  "key5": "5DX3hZA1mzRqwJZbfPf9bYTTuJmAbQBEXthsafqwZBWXcq5D7LWB8H3UJ27bMRR47qPogqG3abMzDLej9Y3ReqxV",
  "key6": "jpiUgHDc6LhyAEY4HMxnBGjRJpa8g7zTUY5BYNZyFELQHND6W344pcFe11y3mUJQxPuFLwtgwHCcm8kAUPHhw4S",
  "key7": "3NbsMPXMshuKdBjVzJTuEvR9DAp2Ta1ViMc5NmQQGGCUnDS8Vt7wh6eag9KtYTo7aMSbGpH1reRPmrYPAwDngFiG",
  "key8": "YAUZehL3Em7YBGgEib9R65FQmJSkiR1Jf7EgFUxumEcJ651mVA93BTvKXoYipvVFMAgR7mgcE8QR13eHkpRscUu",
  "key9": "NEvQDS4nhEjPF4dtFpPSbnNPNiioc3CHVKbXEiVszZE3dkfCNq3SBYgELQwj6sTdprkwjhMpJYvbwhAionPrijw",
  "key10": "33w2872ofg2wpuFnRAidzHJsuqsdJYGEke37JG1Xp67V9EV1mx9dJC29a7fxse1LySLexsBB32pTeDvXnRfzFNiQ",
  "key11": "2hNdB9xq8ZgJ37jw3wUE86g8JAdn93KJaLAa3sr1kLiq1Hov6etDjGVztaZ8GyxG3ZTWNp4KQeVpSQRZn9qYU69Q",
  "key12": "jGH1sd6DR3MEbtdG7hNaNdCATzVqrfgCtzh1Rcrvo86jdFkL3irY9Faks6Y2AUnZcaKWZqZxs7RA7reayCXC94W",
  "key13": "5YX8jHi8SQZ7Hi5YVoNhcAf6a9tp7UXHwWvL83DqzFc7dWMEPQnTP8hmFxP66nKyq6V4SwVi5SWgHtyhR7v3zU4r",
  "key14": "2qvY7Dx8U1M7Ucmi9HtHf1cXoSoGydSdXUrTmfKYyLsnhiF4nFbpVEe7zEp27wash95BrxwDWgjJfvfXUBzk6AiW",
  "key15": "5ce7Rsr55mMydXgTkGyqG9iELKVEDgKswWNhSvZauGw6ACRRoTj9QM88PSJ4ksH6VnU23HWehnZYKwJU2x68zfSr",
  "key16": "3QMCQgqKGnRTMbYDejxCq2pdYPb1vVstDN6bpfu59Ri7E6xVWW7kwjAeZ9Gz8mA3FMYzi4A2p98vAZrtfyoWS5NZ",
  "key17": "4QU3t276a5355WDVrayPGfA4RWgaY56wh2tAv9d5ETJvP9rAgRFpsVGVx9NVNRHStbNMWBrfRiUjtBeB3Ch96w9o",
  "key18": "4YxC77XVmGXx1pKaQS7dqj4F62fKm2p19AgebQJbMHcqeYwpcjv5iRWT44ySHdeyt8dQr3odTsnoLanM1o8Ay5rt",
  "key19": "2h1qDXsUuE8bMgZUvM7bGsangAFHr28VGL4n4Frj6dLW5HSM2F4Xq8xHi2coFbsqrr26mhmsGEwxrrX6gnHD62iQ",
  "key20": "4PmjD48zG1NRpA57Sa6yYa7nSYqi4BCpJAVkhffPRCQuAvgxhkm3cpYzKwrNn6grTupUnbWqrnpX7QHxBwYaY112",
  "key21": "45gf4rsKs2tR74nuR2zqNJRcBATK1FriP329SK7fzz3uwR4NFMiLac2ZG5tHCBZPwxwdSf6kiNRsudpuXhicPxA5",
  "key22": "Xn6Tfo4N1hpuyCkNfSXQu4DyKckhkMBKL4mVtDkLgEuVshB1Y8hm6ZH5G45KKDRJBjVHQhpdjtRq2tSsSiBjgcT",
  "key23": "3HjzHichmqs9EFv7StZHJ3iCDH6rF9n4qm8p1sqxikf6TXwRh5e6B573wPwjJTapRJUvaGouwtZFeh2JWmrtDyPP",
  "key24": "iN35yLezrnwjUhMwxPRAHf3vNQfipehjg9aB8J3sW2eBuu3931DkKKidFWctSwVTYyhdVs5TivynsRs2YyPnZo5",
  "key25": "5CjG6TDwUpSNeSwPxEbMwVfX3cq5Ytmuu671kEQnhiEuGRxQDKBGNnK7jT7VrkXerdx8c6smDkNtWRUUDhzqkja",
  "key26": "4YrUiYc4Svv3xhHKCdGju9fc1GX3yqDRpVkawCYnEbdkoF4ks3yGpFPSpouwijwdXMuBBrL1pfnfPppypCTVchnZ",
  "key27": "3cRBTJPj7k5qFC6fcbikkcAZTY4VugZVRoUo861MsRY1KfVif6b8KLHmUZUnTP4rRRD3mHTxD4CJ7dzmmKuEdNA9",
  "key28": "5U2qetfgJsDbDKjkmYfTRMD4DVxk3ww9c9xpdYYbRriqNWHLAsFd5uZDmUJny4unCYjJfG3Tz81VR7aMeBGBv7wf",
  "key29": "bdqjFwMPNdS4aa81rnAJ6MjGTbtUi6mcWFxa2vtkbzNWnJttuUecaGiSAe4Jqbsw5irz9WDGraevHVNavvo8GHQ",
  "key30": "7qxU7K1Jar6grx4UzWKfvvyDTsdCGSR1L9rtSNrwHYeT1bZugnAE5yJiYtdajGHVS8Tm8D7GrhCKoNQLzzFjue8",
  "key31": "4NhaXetVd24b15WSGDLYRnWAyjKoFfkGsD7AxC7SXz72bkZyT1S596bjwcT4f4pJjvvwJeCSKdASpfBvJPGnMP8B",
  "key32": "5EPLz5fVNUQqeTeG1Xg7HWmSy1HiXMJxjy56fR6kS4wQThCYLvAiBspoFXPjDvp1zYpN4rDHKmKLCjbcfoWAAhij",
  "key33": "5qgdvmGddAZF23ehwBpPohnN1o8X7gtd7RBW6s2kYL4ivXQRFM2JZBeorj8H9FEjheV3ro6Qg9btZq9JeYKrTKqx",
  "key34": "36sqL2TCSvW4GF8u3G9RAGUm1Q9R22pQ12mLWGaXYrCgZs29YwUh8Badwwt7Ka6xEEfNKoXgkHKe2wVJDj2gnhtF",
  "key35": "51tq74Ya758T23rqftF2rXWYDKw9xyashpqmv5e8cBenMLPZvuM8pf9X8oGjqtASTw3StxDLg5ZPxKGG8PWBbquS",
  "key36": "3UwJxPSz6qooNebuiU12Cfedw1N7fMLrmip4T4t4MRqoB4unyXvYQ29ZCfW8dM25WKz8sVaicYDYUpoEF75kHoYD",
  "key37": "4Q5a5dZJVHARDbFTX3pbZAGEzNwgFoyd8eGpaUxn37JdhbNGeqzF3aCzJpbMQSSxd1QfbJoGgQJTV1omyvKDUPZm",
  "key38": "3Uupw7bk3wn87JsGGY1iowZqf4gg3txBEpG7VZWf8mHjXzXCVeWFny43FfUCqKs8FSVMFFpARwPrKnU3nY6EESwp",
  "key39": "3B9WNA6DByCcKyPt8yV2riVME5T1zn9WQRRnLp7KjNKAXF8Bv4zjn6V5ba8hb12V2Yhp7AUQbZACQnSpAnj1w4GC",
  "key40": "FXE5P9kWoxWVo7nUZCVBXGzfpiGoo3jQpbPTSkXHmA4XAoUaK7rFhdRBwifRBJ5dMooazAVViLsdsh87Eq4ovus"
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
