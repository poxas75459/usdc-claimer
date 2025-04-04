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
    "3CJWRZZx4DHPKDr2E9AXfnWa1fTdU9pPZj2ei4sMsM3kPYNZ5tAFgH6UzW3qVLRbB5yiWFQ27KxRkT47DoxA6V6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3GAcyPHXqnMYe9TnaNQdkLmP9ozHDCK6exNUTu8g9mQMd5mkWiRtk42PxxrHDYHRiKXjKickaUASU8TytsPg6r",
  "key1": "4LexSCg6QKNg4fqhPdqCCmWN3L1MMMf5BhbVrU1W9f7cGBUE9DnBiyE9YbyRtpivF5VCW1SRrjQD92NErAXHB6Jq",
  "key2": "3KPsoMQgT9RcJrccXPgLtUMD2VSTdoTwNfQk78TbjMkSwiDUaWxnqhBtvz7dsBToewhXoXGYaHDeKhy4aDmyFK9X",
  "key3": "49Tacs5qmY1nJy3xRRaGGN5WTJSHXeiRvcnxdhEBtAQEpsKyddUmGf7ZLkyfe463KX2JKqpXLZYJs51Pczicj4Nm",
  "key4": "5McSrNJBYGVqzs8vgMFNkg43QpBLfvESipaCwT9nwB3KG2rfbSbSYZAcfYu63V7fA9tDcEZFwb5HQJpoMvn7eBxR",
  "key5": "3qFYF5vhL6qW6qWELci8JRqmuKpKSKZWDKPDR3z1rghTGauMKA3LheUQFGRGM2yTAfAbmpYgDxnC6uFkAcQfb3yq",
  "key6": "4axYZEGNymmWc6mrNap7tRA8UCKRFHvtcCsbV9SnUDNhx2hZxsYXcivDQ59gMqoEUvAP9yd4w11tMferRioe32Nd",
  "key7": "5eCMAcrz6kXWKaPZXrXvXz6dsk3DqY8drCpEDG4ARCuyAQdnXVuRy9HViT68Hpi3uzAAa6muVR8feASSSA7rcgcN",
  "key8": "JwjqLfXwoAUD7TPBrMkhp5rTifh3iCEbGL8EYHubJvnxSXr6VJLqitENw7nUzauW7SEpqxVdtkLAf63ZjTxHMAL",
  "key9": "LhNfqYL7huuRCpuh3YupHZojMwmd8CL5au8p35H5DUZQEWgFcc7mEL9sW7dwRCn3CgvQ7XMcRxkauCRfGq2Cp9x",
  "key10": "2wXJUqN2CFZmxMvsTMLpRaLeFmZSRnVkQu186HCSPBkkqBwarnPWWVt3RyiY2eD5AGBhKybLWm8riHnsD1gWmAzZ",
  "key11": "58n91SFXciCU3zZhJxa53SsUpLZ3hK6LEzDWcTuyB1ARprDVyfKMuorxbcUeHntsAePjX3AdPjaoEBshZEum9Yxi",
  "key12": "49sze4N9BqgxoaucYs6ZhDGXgMxhJVLjvGTRYHEy4fcENqcHresoKbEFJNWpoWyM4EmnvTSF9Yta8m2XPwSFiRyt",
  "key13": "5qYqaoYmZvpg3iDhfTCTs6LdMQrcviJ54RrFsJmANMqXsRKjmEf5ZM4WgDt5gTyuby97xhZWXw2HxzngRLhmrjtf",
  "key14": "5upydmqY4sWocxWXb8vG7wkrejyUrY5LggnpxTEx6HtdR6nk8uLHTfiDZmudTb7odYoEa9WphBB2A89cz2XHSQUa",
  "key15": "273Vt6sbjPYAUaDKv7FECXmEYSkkqTpHJyK9T7BTSEdVs1TpQPkjUENw6NJx3E4BmzTknkAobwYUzkJwFGECjpai",
  "key16": "24QJmyB8fUswmdJ2WP73NHU5rLSvuRbRMngqZC9F2sHi73yAhrA9ftZAVVRi2CunPezNwEGi7TthXEfC1kR1egs9",
  "key17": "5V4GDvnLMJS2nWTCTvqHiVg9ip91fnncUHJ81ri3yZaBWDksybS4jYdVnh5cEK33KGmyNDMr6Y8zuJx4MeWdfMbo",
  "key18": "2BWjrxBPW4hoDAGyqMfSd7mEjoUgJgtAiwVMHWsaK5SZjNsny97LKPnNqmyrcw9VSduErhpn3HLLXTJ6grRjkWAv",
  "key19": "2cV8C52qP35Mt9D4QSrz7PaUGdyTDnYdUZH4ucjJ24x74F4FrBZkxbzQZncsdNmx5HDUxuTcHqtuHfX5Z8g9K2pC",
  "key20": "5e1qpWk71GJFMi7b3UvQLVNbLTCyNPuA2vpSgHaPZwtBBhCnn91BLUwh5eXTPN5jcNViT78DFQv5PaoSvitFadHb",
  "key21": "51jHfdz88VjjPythgnT1cUWaGmufFRyLZZfT2tBzoWcHNHkas6GmCiZBSTbcto1AS1CGLgDpecY7TvQL5vpNRjnc",
  "key22": "59m62YtRRB9QVmJHc4myn1rRD8Sv6NMNU3hjxXvEGM1cVyZWvo5ufg39xxAykyii2c2PNqqXCvdnz4tvpPt45Yu8",
  "key23": "51H3A8WLfNmBQKetu5RejFD1xZPLmHCtc2DL3BdgizXbLUDuxpkvg5wPmaVz6HmJqphx7qm4q3oYH5SLQJGzCkFv",
  "key24": "21RSsEfUtvdeUpFHY3UwVLy9PhfhqxM4Sa8ihYmirwCDLEv3efbVJ3XA5gBnxMktBvv6kHxiVKuS65tB3pW3hcs1",
  "key25": "4h4ZZxgtvccXmKcBXm1Yg6XZJraE2EeCzmukfYptSDWCPhSoXo3bgm8WBf7yVSXb5ob6Btq7gx7aEQYSzWnN484V",
  "key26": "W9Tk7STtjeVuYnUGdnxVb2jcnpn4z22vpDed38N6dmfEs8yc7VmUfWvudWwDb6u3LTofDeoQAtUJdZb7EmVDR5k",
  "key27": "22UhH1wmr8s5DiS5q3gQ9yXQRDeM72kQtDmr4zzoZu9k9FQLcPaKFw3hMS9VXW3aZrqPrhAecPqfgwWNtKhtEBXw",
  "key28": "DwmDfk32bg37muUntYFcknRp8uMAgjYc6vSDdiKzkwTamTKxpyzaitMgSdDqykcyK5nrKGr9Cvpxnk5J6U4kxYq",
  "key29": "3rhKyd4TW4EeA1BqGeg1zkUhVXrL4LXAeMB6ibJX3gh8i3e9oFVV4XoKSFXBqLq7ycshxcx4ZdAZ6qEQPXFsEXGc"
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
