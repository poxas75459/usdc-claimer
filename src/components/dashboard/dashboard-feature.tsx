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
    "vY9QqicMgHTsCPARhGLnWijtgKHSvRfWVdTmNjP5z5CHwwZ8EyqPeiqQmpbZGiCKkVsYNqPaqDAxHHB5oksVxQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JnfNjFGJajTsqEbxynkUFmux6mJD8Se7jtqa94vpSHxXN2jz5MQUZ84tNXxbV1TnzYmEqGNDbVLgFKucyA5GSK",
  "key1": "5bsPWo5eyzNJhkBjCaBPysGL9LPwRwtFa1aRcbV5tKc8EXTnzEysCSNuVW7AvSJDjEnkVcbY7X35it8LeqWS6qmv",
  "key2": "3Mgpt8UEQWzt6C78wUsPNaSrozLkH7y4CMjBxYgG7JhNFgJJTHvfC5WZttAN6JY7hBwR5vaGM1qs2n8qvF6AWKTY",
  "key3": "2hnqwaTnXEMYDpEH24GisE5KoPex42nhUhcbSv6Fc9uRANsPJYCEPycqXkudQc2aALF8KJPMoFJGMJ4Bmv2DUfsa",
  "key4": "2uHFD6XaPTnvetCwNDY21kePcjsgMzhhESSyCgbzu1eHeWme8LZwpxSnGkrXj1kcUxj5CqasNxXBmgr6u5vJfwAo",
  "key5": "3Y67HFR6nm9BZSEZausW9bV4eS1v4CeQJppy14uGz8Rmk64WmCCtaisWCUv5LE7Y7eiiuxhBuRmKbMQKopAomfzV",
  "key6": "5mhHZHjoPdnC3r28kgiKwsGae8xTZfdrELMsTDVHLyU5GYhZn26mCfXpguZfJi3rua31n9DmFnU8unZ8RPMKtthB",
  "key7": "JvH6ByUqiauLE5Cp69MEbm9ptDuzpqMv26cnr6MdpfbMkrhMiiBG9fcAWn8CHgXDSusSjRsd9RkxkmEzNkYo7ca",
  "key8": "25RVWa6WD4EPEsVvDrDzihnMBbaHn7LXhfHtUqJf2g7KWNsHifMP3ervbrZpHWzeiyhtHpyeY137NYPkR51pnVew",
  "key9": "4CdCVNQD41ErY7E7H6cs1Zd4ZwpAfF5Gx3A5e883trYxeGiGLQFaQW5QYKLETN4ZqKj6eA9qReRZf3tAcz25iN3m",
  "key10": "3W3sWAGegicSxHUHdTB92ePM8PUp8czU88HyGYx6zYkk5Nk6pdZcHxLvoDKGxbGsKQNBxiESbemcC4nW2oAy625J",
  "key11": "35A68xdptkXnGfAReqjdP9U2gRu4RSUzQ2fsnwmcKeAHycziMRFiXqFZFbaVFnc5JnmbqhMPfis9QndHrJ6SEVGP",
  "key12": "5zXuMH2qHogM3SpLdKX9z4wBjdV8961phf9HruYExQQWrHUdsiBEMRtrVHuSqhL5xWQyAK6tTPzQC1fVXB5PzxG6",
  "key13": "4rYpe7EQGsWPC2TSkKov8QoUn6DicGYFi8TWCbeNT5LEmVpmwb5QKaNebeH8hNE2Km4iig2iGHK27GyUWSDLTvU",
  "key14": "5GRM5L5AmrG48GGMRCLNpGoawBtFvhps7sZ7FtpqmGEoRdMCfQ2eZAWVX4FULrroYN6xPtu4QCw4Y8aqfGf2WVDu",
  "key15": "4JAuXPnLzVejEZVeZBCgzvw965uQL6EGa79hKkqLkdiawJgdFdqeNKabLyhXCDnpytcy3g3Eh4qFCypfLGzN9E86",
  "key16": "263kByRGuGr9Hz8Kc53MnHHc4WjRUoB4r52TJDRJeqqNHhS9QwMyo95B162FQ57NVGPK94nvCTdZkJbyoSbgmJdP",
  "key17": "5h6huvCMyK7FRdDuCPC59jqFvKmGwJKvpT2waKFkA2rMYNnnZytq7JoFkkfXqjBSV86nbGs4yRyc54ohMS4ejA4Q",
  "key18": "4BUZpapS1vqVQg2sTupDiu7vQaSAuQgksAfs4sXemCQK1jH2GkArSQeeEg5vaBeGTgU5SNaTsJPitprTJbce9TWK",
  "key19": "ywmujcGsKVSg3YTteejtUaiXhaz6GqDUmnDu2GUt4pnJx7H6FEBzVrwe6yLr1hTCDHkPZTWSrzc4pXbRQcKZ34u",
  "key20": "AHfSPA2MHFCvHXWWWbzWQX7BnwgGTB8uJz2VSpGQZeDWPPy6fUCT3FGoRVBttSyu1X7RRiWt62fM2wRQJf8mns8",
  "key21": "2BM7bnAHKuTjyGsxDeZrFbVx9kR398KamUCHCw63QcjhXh8y4N3XDQPyeYWFEDakaLoA1euTWP8iZcF54qRcS4ZA",
  "key22": "2uvzdoMZ41E47VhiKzRy2u1CS9npZxp6i8Tdbd81VLFHD7PCoXa8A2oJfWm25itd6cbJ5Q1X4ygKYu6FMzXzjVAM",
  "key23": "4eF6ysPtAwsSutM8xeRND2zdBNZYzFgtaqLTTXna9vB1sYuyshnXDTgV5yd5kLaWfTKvC75MP5SmN7LcY7UeBUrG",
  "key24": "5zCJeHgVBExmKLTKWWQSvRWaGjJ7bPPvgPvws9SdiT8A8V8HECZ5Sy6dWGEhYQkC3MQpfpbFF5MaUEMkzhqTtbhZ",
  "key25": "37NMuNcSe2wQeBMt7KAoHRjQdp3M8RNpmFoVxDLzqpTJ7kBbEkaC6Gjuzh1x5AiftM77PupHWhxU79rn4LghHpqo",
  "key26": "4eM1ZfxmPYHytEzYQYiGYQhPW3PmhwfKN8UWLvRDGmh5fAX42UTdzBtTDeFBdtzWAj6p1j1VorNB1rrjh3MFqjVJ",
  "key27": "488v1FwuNBRQbqCjX3AfBHZXBFZhJh8D4PL6N75Jk95HtceXPzdKG38xjcqVTa3XhAbCyTqE1zZaMTKGrb51SiDq",
  "key28": "FTFEi59PKwVxQQqDDCaWKEohHM1TAGekG1XtakR9eahRK8rFJGFRqm2J3CKpLjSBFKbSZBVHnuXsCATt8kA9Qt7",
  "key29": "62EQvRaPwy85Z5ohEj3zNVigCLFwvenC5H2iXmDExywmrneVPi6NBJ5XVoNJoDBboYMn7Jy3ZBtHLov43daav6CB"
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
