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
    "4tjh7y3CbXRZqJRKWzQ4X2zLSS88Hk8zxsAo4wbP5oHV5MtS7SbLKrAqT1e9heAwbFiWjFMVSY2tFPJ2DFFLuiDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgpDdxjRpaiH7VnHjbtoUReCx13U2DDxq9faBDhzcaTuXGUFHySaZKqtJv8Tc5fcbcpakYsMSdbMsYS96Ygk7Z",
  "key1": "5kdcYgBsyYLLmZxhc3N4TCSANrJniueMsefzovgG3ArTJursaHiG2NHfM7W3DJWuz6DY172VXhT5SZK9dJTTfXkw",
  "key2": "3oUgsWN3Kc9sVi86S3SMz1eiAgyMmtevE55onLg23p3P6QKZ22d8GH18Pkd2NmTqCAcXw7XusXFQhuJnzSLdSXjY",
  "key3": "38s8D9YUt1x1SYgky23qBr9V9EgSxL1rVFQe6mCJgryqhXWhfS185ttaFJesyjvQ5V3w2bkNv33KQaHpQ37Do44T",
  "key4": "Zvrq2wcyJv7j8G486jcUCGwiQXPMVbM3wxhcMbr6SFbTmNcCXmM2x6MygyqnYh1RYhinawQnHtzbaMfe8L9fMw4",
  "key5": "5eczijcdU9EC72CKyFeugX9NrTcFSsYcGiMndkDUNjWB7YNppcXq5bnzuDrfFfkVaW3nmwRHqWpefXzFdvBE9c2W",
  "key6": "mxSFX5mGySUo6nGxaZWWPhn1CENhtVQTcgLpYfkwXZPXwVmtgEZytjqttDdChtDrN1PUmGnG3LY5zJcwUyAXf3m",
  "key7": "4t3WBkTxrBjmSeDcFN7azwsiSHL7mB5z1Jt6MYWuEtWhnu1ZaEJ3am1xWvUFo5usfXSX4ZNz2FvvnfrsUjrMMEtt",
  "key8": "2B6VBThWeZ6hUsXQSLeasM1P98n1MEbC18EmANNcrNPMTdRkMqFBuLXQuTXofUk93vSmRCgauxeYkvvUdxrnfZeh",
  "key9": "1BR3J7AVYZPGUb1v4ADTXrbBFqcSoYMzxpJidHqiZYy7xXc58qM3h27qcv8dGwBSBsCmRbnFdAcKqQqvEbeYTpn",
  "key10": "31ierMw9S5HeJ7KHcLQrZ4pv9NZEPyoKQYJ5nsgWbt88UN3QJadxab1ZCZWGc4rVLgTnjhM8vbB62RTgUcMtUaRN",
  "key11": "511DRBWCa52C4A7khEPjegm6k5LvpjaNAFZx6edBGHTLY2nVDsBxxjxZftLFW4eHsPA1ydoZn5ZsAw2VPEF1ggmu",
  "key12": "4kwFB1Kh6SU3eqzMWRGD9WjCA2va6owz5sdSETC2FPEKvgsddSVTPUPKDLpi8RPhdDFdcEZdL4cE3GPAPxiWtpFE",
  "key13": "4jhSMYBTmMnNEcoDeyPmSdsmCAWVuwEMUrtotnNvNJwWYv9dNk5JyK9pFwy4uZwE859e7gNAjapvNiDJ613F5yPP",
  "key14": "238NKriGTFiWiESTDwUpRE3WLWmknzbDp3Q6A98yoCch3x68rSLBcUo9TzvDbzkoZZsdMmSBZNmTEBEEBmxYRkeA",
  "key15": "2apSZ18V2Y7PSsBhZAMqURaMhih3u2J5VQYn1hudxX19aEkEgKC9SX4dHwkyzkBjggjdG6hGGXRmXp1GuT8uXLry",
  "key16": "5VaTE9Ze4mQpfTSUCMrEbDNhwGBHMmxyha9uq1BYpYZcmwKbQHqMHi8mdDZhE8MYsg6TAwyFEkmHeWwaMRKJJA4",
  "key17": "3TPVvjiYV5LJdfrXMjYSWBKdAX6DJMN1UAuCJM7xtSguDDt7gYCCuW9hHwmUvNBpAYSrNrgSGDRJxSP1Nv4hJxpE",
  "key18": "24De5d6rHxHtSyKHp7C5itxnVP9zuTQsgNBrQXqdqjwsgfvZ7M85bSJzRfsSjuAtQbcZoMSuEtM3FUjd4tM9ffrU",
  "key19": "6eRxTHwzCCSePCjxbma6R4kzUxYdj5UeMYnRm4BEwNMMei6Y4BtLynSjgXnvjj3vQGt6uceFbjJp6vnF4z7dcoa",
  "key20": "ChS6uom78BrHe6geMUi4UZuo3SGUepQGZk9HpLckASSLRXAbysSdsEFNc7LDEP5dV2bmeVJtoA23cFQgo3PHF3p",
  "key21": "3su3GD8H6wcC7bHFx6kaTe3quHSfr6hSLTeRq8m4VdiVLEdfNWvopxrLuL5SnAA4biBnNJK9AJuCkU5oan5z1i57",
  "key22": "2cZ5bA7fzuxfEe9G9Tu2FAa11eYY379KMhEGyCPXDsFKPNnj7KfYvG4FeCeZqCfYUGMNxXMy7SJvz9EMPZa56Vii",
  "key23": "5NFLAQnRkso6ptpKDcnaDfN4asSoz3jza34KqfNHfMj1EMaeHafj3hjh7ZuD1jhd3WJ5K591dR6c37ThtGwXRQBD",
  "key24": "5RqJqtxt475PiCV8y8dv64YRZa54EEAWS7BuazAhse3Rvb3EiPa44MQREC3btewWvFuiASQs7etPaE99boS2SpYC",
  "key25": "33n9WzFCRHepyX36qJr8tnnedYK2jeaP7SptNQs6D6gF5M9p8Qq8ZPJJEQWZaFPWUh3KYG6nTri532sVdRPH57Bc"
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
