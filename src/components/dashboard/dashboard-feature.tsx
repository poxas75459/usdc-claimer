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
    "3fv7fKT3EDkZDdEJy7UnxePyjDLzjmNUvYFYvDCJyoeyw6JqgLLT7VKqA3JeD3yHXo5GYbZVPUsv5wHaqpU8HbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHRFkA7EDCjyZoRPobETNWfHbwFxK2jAMLAYZNUL78it7Bvn3qKw7EoLRKoFtWztjQMuvkPCxShBmYbbzqM9uYb",
  "key1": "5Ez2gF9XmNaCZ5ePcbrXaxwkFPZDZZ1Gwc8Bgauqcu3he1HuaQLYd3MKUt46eq8BX2D1Uno8X8PbheRWmxhow5Cv",
  "key2": "3hcMmEfk1nrgGWNXi7Ljg9H2uT2qNr53rkG4nmEtZJceaYU8Jo6FMmybGfuuTCF4WdBpTvaNctBBKrptsfjR3JvY",
  "key3": "4s43SDU5Pcr3J1aMXqTpRtRhGkUeiyH5AtPCa4RpBTFuof3T8XYJ9kFWgZ3GpVtwsYmj2Z5xZjwYM6wDyoiWbBdn",
  "key4": "5eEi4nBHX1mPPoabexdgBu3h8HXD5BA4ER5pJ8BkdjUr47MxgfNQoKcZWAE23Tujeen73iU6ZzoqMSp9MyVoTyuX",
  "key5": "5r4bJPafPS8i5bXDsucGpLqoaWMnJgtRGQLttf3hJ7c2sq643LbeGekyms44qGXxFKsgYfDmVBZdBgiuuayg7cnH",
  "key6": "8Jw2kwjwEDxtKd64H7acXsEneW9axmPWKAW9HDaJQCqjpXHAUJWN8RXX976uD9BNjtb5WM8DYRqTeJAiqYw3VCa",
  "key7": "5mb2ME18yPCe68AxogjtTJ9R62t2oETULuDXAQv4uQZHKPTEFEmXkzEpozcGNQeHr9nLdv88GaVihBHbFeTsvfog",
  "key8": "5bbCFWcFTdfjVvx1YMYNc5Q8Ydd3YU7tQKbF56YE1i7HqQ5uvLC6Y4rfMTtv9i7pxEThYTfgY4Usm35Vo7x4HCUF",
  "key9": "2V72brekUWTohTC4maaPdBXjFs3xVMnvtUJtPmcXR6osSGK9Yp8VNdsVuGdD3mXFRr8eDW4765JK5KnpHaB2iN5",
  "key10": "2XkM61bKMDQSxdj32J44roCNNDD4KFc4vt3oPN42jVY3CRbkkvvACBVyCTqHn6Wboyo2RKCMFuUG6ZMubFf7msnb",
  "key11": "7QUx5DG7JqTqoQTrjNG7s8YTVgH98e9QnkdPkCAuQqdZpSgQMJZTmR12bojNn7P4hswLrh5tabeYHu7LcQKuxWH",
  "key12": "4YFV3Z6nC5L3RtfYMP3XT6qpGUR5yuaaACbpBwUi4Uc4SAhwDGn4hYpEnZGmiKYTA79zejRreNAGpKTEgpHCUGLQ",
  "key13": "28Eto9WYyV8mUPtMEZg9dRN5K2ZBRUGruCRqwzW4geTiAQnyfe3TSkZsVTBrSJf3ujc9TPnbXJCWG2RmSeW51ZPH",
  "key14": "4iC3P98rdXNbf7X6uiyPtK66mf8WtcoTv9qaKK7uDPUKMvKU5s66tTifJZMgoK8yHjKnCjjZRN8G4kajsFCbNsHW",
  "key15": "4f9nzGgEAPQV7PJmQgn5DWpB74j7EpXLmAp4vyf35fDVkiZ3jwiy4gz6E2JebEMb7vf6e9AyXh68f1w7xzVfubTK",
  "key16": "4FE1W7NsmBrSpsv4nRbPThpUEuqX8qcDGLzcDJWAK4K3FCvFax6uJScpJ83gqpSTozTSzd5M2YD8fokpigS2AaKG",
  "key17": "3WJmqcxEVKtwxSWKvejCqxqtLhNLhVeADgw9tMrSQUWrevurSY3F9RYKdKzPUvifyQep5RYHnxDrZDPgWosPhG1Q",
  "key18": "wmLKMttudJ7NDRyiCmczfhVLHZ8NZpdKyAD8uZv9nkvduoL9cAbV1aVaQq8SbV55qfqJxbanAU22bvqBxJ9TBtH",
  "key19": "yT5vjDMa3uB5tKUtoUniFczWAeXUZtHupwpn3SCh4Mg1e99SFt8zWpSWvLwJJU4aAfL7xL6epoXV4NiRgZ5MpG1",
  "key20": "47rSiXn7wnYWmezLia9Q7fw5yPXKNrKWk1VWaxGXSvVXSBM8BimNcdF5sW52hWgfCezEAxobu4K7jtLxKhfM4EDy",
  "key21": "5Y8p8xU6TPJZVFQzZu1NVLVquV5q8877eVnVw1gJ32rv1moTEMw9f77voZvh6WiSaRKVuzufw6ZzwskphM9Pm8Dm",
  "key22": "34zb7v4PE9CuJToZydwuYPY5pQd17dT8y2gDMiq4sruSCE2N391CUbzkAhVDzZr9PrFCvWEw4wPRdM2FbeNvsHXp",
  "key23": "5arSj2Uw93qsJafaYgusCDCykkg63Sv4whfcWgRvoSRWiNwvR4BjFkSSzonw8Rt1YoGnMXWnYFdvPMtDn72gL74f",
  "key24": "5gtzeGjaMjWfsQ2vngFerv6eiXfi8scbrpJrZdbR6bPqrvdLuYkXXgLJ54cVuYym6Vd5PCMuFQuN1oAfZreSaY7D",
  "key25": "4NRLwzYJw6shX1KfiASBGF6kNVERhtbGMhfPtkkxWKiqwmh7anyLoMciYME95ZCcDPB7iVNN1HU8aYwC8XCJyHBw",
  "key26": "2VDG8UjhtXLjKxsTchEG7Ktu4DR8tvb4Mi2RdXTgjCqRsJ4gQnBFoZi7nQM5eFBE3sEC87E3nF44gpD8p6uLGFUU",
  "key27": "4T8oLSehxhUVXvGVrT8fmQqvdHKEaKoYPdpA64BfZtBCYHgeYwudS63zNaZdm8mPXUh27WZE6LFBzhnMrGJRCHeF",
  "key28": "4TkJSc6Daa8ZgnWZmb2JqFQppq69dCFv1uXiC89G54EGejrDxcdFD1XdnSCYyV8L96afnEUFVNWHtDz9xRCPnzS5",
  "key29": "uhC9Kx6YFGghiqw9yeucSXRXJML4ChQTXAVJue8nmyv24HUvKC93fjhBTEPnRERvLrPAJSuioy9TiKXbbMUm7Ge",
  "key30": "3TZJXLm6KB58aZQe6JtKhWpXRjbsHWMtLUmt1Uom39jTDQCid5o3deYK4F6Pmv6vKrgJu8Bsuav7pvV5zwLHbyQm",
  "key31": "4K3GeJ6v6yXTzwZ8nkHCAmCBAJk8TUq1Ckvf7BRgCLsogNaG1AmgzD8ekfqkSjWWr6o2JXJmnGRB4uFBbmcdEfEE",
  "key32": "45NbKTqycWHeVMrBiY1ZCLfRRzuDqczEJuzBuEgFJhEt7F8kaV7gNjyCtQ7dc8n9jRqg7G8NUZ8Utimo3nHFDkUE",
  "key33": "34tL9ChayJVxPpxwhs82hEcfijP58cXbSzKSnDcXmRzs1cWgu5BnKtTmcUbrhkhNCaJasHyv5zaYJ1gjRMWj2aGX",
  "key34": "4jsSgzjJ2rJ2BpN8gZYAm9ity2e96bvehAh4MPgA5yVbsmob37nrNfXh65bD1bAQfL2QrjqaaCmiKrMJLx7L2zCz",
  "key35": "5Lcbgax1ZWS991acjajpRtCj3peJvzJhk3a1k4RHpms3D6Tfo37sxt1fDaVKamnYoVo7AwsEhezTaGVUrKUbwpZy",
  "key36": "2MMZzEFz8TV2oTUDz4rnPLN3GhXVw3gFjsyK6898Ko1GK12B3qXagCXpuDhB3dU9h3aLjCjRWWsYvaQXTCqG3VnJ",
  "key37": "5WsJhijT8fwNmitKH4rtoUb7qXnxEk8AmxmrtYDJfzSnYv7fA1BSCFYKKjosaNmMPCmELz2LC1mZqxKksiqudqGB",
  "key38": "46rxf5kLsUVCZ3FKB5BCktWtFoqJ9DeqBQzSu3YsrDbqjrJF3xm82fievpD7R82Gk9ZTKwJhq4Cdm5uFZRy4GZD3",
  "key39": "3xVhYB8tpKGU5KZvYQUej2MqeXEQMa7sAntg99mghEv4e5M4MWpnSghCqtqmHhN8c2Z3RWQGQ1K1ETGwGTxSAAhr",
  "key40": "4uTPq7oUCfH7hjnNx3Rby7Y9UxVRkSjPTcFYyYLG22vfEoBxbnFnN4AwYZYkhLpSMKWsTkGFQzdX9ME3YkRBraZX",
  "key41": "5885EfFznJ5dnRh49R9LVzAxGnGBg6DNgF7SADE8g6ac4HgR3gpVkEicmB5CGZv72cNwHcWEwQxQn8CznbFtKKu4",
  "key42": "3ES6pN9DbzjA8DecHV5tyZ7bjqCBQp2gtwpDoYBsFNm8eJWQMhYRMwRRuoJou3ZXoZskr3ALE3m312Gm9BgmrTr5",
  "key43": "5jSrZ3qJCFHcHyZURRkyirxZMJijkvqXupFp8i5AvCjfJZybRN4mfP2FXdPonRVXrf1YDfgpaPEEAnG69Y1fCVaA",
  "key44": "3DQpoHPs6v9zH2xo4GWPiQ49ebMFT88iPq9K9pp3PviHrNj1SSXKZsgsekCQahtpsckyajpvHasX6mpEMYKbGa3a"
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
