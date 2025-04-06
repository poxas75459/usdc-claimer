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
    "3uyKTquEdWsgHdsKMFTLPLM9Eh9D2dmjtKcnJQE2o4P9E38k7fucwAqmNCypZ2NNE1UUUPwn3qiPJrxVpwPEi24N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PhG3uPtHnrh9hu5nEaTdfXWU4ziox3FALgAwU5udwjCYesVTj8CZGscGPKouLFbyxsA2XomdcevUNrbADksJGnq",
  "key1": "D6W61K7azg7qrHtcbeT2RbjvfesNUKJbWpqbHLfYZUryzPDRgzY1jpw3GLjySejVUYSs74Yf24yp9s9cKqHsDDR",
  "key2": "57LYwgu62oA51LsGDY1GL61ppyrs9ucrDDW1z6GSV7NwZGNsnJbzXy16h2sSrwiBoJJaN22T9eeRDP3scmWB231M",
  "key3": "4sJYHZSF147UYT2LdjzJ2RdcNVz3xmxFTTvhWAnxHy1Z7FTTzRLXpGLgKz4acbPk9iAQ7bHnJjEHXDYELriJJpV5",
  "key4": "5Wr4YQj5FMcLEQYjhAyZHFAsNJkQFLYs2AVSfjoGuiF7dctfKdqVYYGJdNJskaWnqs8X2pyREfmNVEyLgxfJ1Biw",
  "key5": "4Bvu6KUrtASrW4eCrMazYpQuXnakUknc9vzENxbCUtbpLJ4oCq2DeqKKMg8w3UkDwNn4BXDXamLXEjzGLywMYNTV",
  "key6": "TmF6MVz28RoZzwVrP45vgqV2UdY8aXEvm7ddrAvFCnHvpSmKh42azAPdvzechGjqRMz5JzS6gzinUPWPyHfiXyo",
  "key7": "53MMVD6uzCMpySoW5KSWaganUZupL9pYQYVzxALC4Sd5EmhgMX6GF5GioxUF5HfwvGqSNBySbi9ZTKUW5Y6wLijQ",
  "key8": "4MWyAuaUBVuBu86k2VJt7cKZ6JYmM8X7ZPtFbSoQs2QMKkiMbaXDk4ZKc7PdAzvjYuj8Lf9NFcYW89mmPfExA8yV",
  "key9": "4rSUDoygNpLxHTJWy63MZnmtCfudoMFo1niSsPi13XTXvEEdwf7vdnBx9Wahxau6B4svS3z5bRpeRguPNoR4qnGZ",
  "key10": "4Ky4PYRKrEtdNghn2zJaP6NzKfj84GqYz1UuVLaYxfgrAKwS5Py7vNftXDyFwQeyFdokyGn68wrc4Uq2VosZMiTG",
  "key11": "AYEumBBv49ZM4VFsRnm4tbeAi7mXjkLRbAYi2HBhLdW32KKJGn1aidD7UUD9QgxcNFEF8Mn58uBwf2FMrDdFLbM",
  "key12": "4cqnDrXY6qDz45rGBdmhScThiKgLas1xwXZMWk2so96TJJJZpTodgXyFhFAn5CTpPR38bvkewxhbuzruzRHPX4Z4",
  "key13": "3xDBxTi3e7ar8DYQstgx68p1DikZtjaPmvMfpp2mw5jSoUsv3C1C1TYuiKY7SvSvDwgMT9S6bh8VBC274a2vPzmr",
  "key14": "4DnAttNfuarDnv5r1uA7tUVkfiy5PqSYeJ1u1hxoN97WP9Tpm3WnWifckCFsMuBnnfs4KyNSm2T6ozqMCk7TQUZ2",
  "key15": "5naoJEb2oDANcwJdku2rGqrHBhi4iE9YCvAGAkkmJzsfiJ1Zf83bj49ozJQjJhDJNDVRsuY7api3fXQb5VhcAtGN",
  "key16": "gSLL2ET28te13fHBeH3bb7zv67rZiHwwnBfGBiqbUz8zq4wagkVir5C42YParUkp68Hxyq9pupgNq1n9ZsAx8dd",
  "key17": "5aXU1sk1JxYpPVtnNJjQHexWbjLht1JMYRb6E3m7RabMtE9nXbD5zWbHzn5Ny9gZwrUrhG5xis2hCTiAG84KT5XN",
  "key18": "3j7rLDMoSct5TmBKVHYnej32m4EGacfMib1Xe1nb2vscL2ymF49Ebp8Uam4dHNfFj4nbxN5LCzu2Ae1A3By2GgpD",
  "key19": "DJ8iEeLSZKhk3HjQikhC6kuzpoqkbeBUoKCw6AFVeFy1evbaFayH1hdDefVm9JUFuPndyHDxHD8vuAwFjHin2DN",
  "key20": "5GHwJggadztJPinRSQ96nU8cJNcn5RGJ9WbQkgEZcKkqwMcXXVbtZNTwGjgCbA4GQFsyLj2NUsHstjnRmJMwaDeE",
  "key21": "5edyhUAASymzJt7T1XktvePskYeNK9v9hGCj6nNZz8EDcsYm8oRnY5QoJHC5k4fitsad7h55Up6Cw9LwixGpTDep",
  "key22": "2J9akJ9sKTCzdLBpAQ6mm9wcf1q49S32av3fDjSTHKMmMtaj2mBheappLXLEyxVvXCcCUvPKNX9AUs5RqatrrJ8q",
  "key23": "2bga9KzMTWqhEYJ5x6VPihnZ2MoPiT71simnz74Kgn8heLcsiwNYi2cd7c4HaJ9Z8h22cU3xcYqJegwtSTZ7MKuL",
  "key24": "254aqK98LNLsefKrNjkMXu38oKKBcNk15DYLT4PT1uewdoUjd5eASjHMv95iJ49P6vYwxKAVGVmCvgdEwZigBEjR",
  "key25": "5u84qygc1pymL86qB5kpmW2THUPAXTyjKVPYSCsB4SD8HHFk3cY1TNoxRHzD4Vt5e3znFErEjZhJCibzZoFiUGRA",
  "key26": "4SDmsP5fMj4N1KEGsNwjNsh6rvzDeCdxM2PkPYMAsPjxGoKJg3Vj3ckgLFu5s3nf2WmZCVfYJjNcqN5DT9W7QFpk",
  "key27": "2uvQd2LcpJj9bFTeFYiM2MUXBGWjqcSzc2SUxZbrE8GpcVyXQh9ze6TFNkSnHbVvksDRJFxgpSnS16XbrjEyYVUF",
  "key28": "7JSEHn9JggwAu8Y5tC9cA2Nve1shg1kFBoHefy1KWp8xf4i9vWNfscsxaPXwbZAyBRzgPBDDRTTVyxjwPnix298",
  "key29": "4KLzJhNzpgikzy46pNpUocJQcVNDeQdCSkT5kk3BQ5bHyGtywQ2KBT2SyfyiRi8ucttUVUG4SH9gsiWR9nr5P5Uj",
  "key30": "n9io3kqYuAgBVmQK84kJZefB8ngUpt4xNYayi1VKTWH2acw5rimYjEoVVPth33FajRqPpa9jeAfms557biHYPTg",
  "key31": "X3Wgpsn7rBnhM3ySViq3uiADxRVoRSoJRS6o7fd3AdnffFFq3ZpJu7ZMbA79LboxfooB9vhftE3VhkQxbJf2rv2",
  "key32": "bEYx1UWDpvNUkuCGRQXyt67LWHqLCEsEMuxxuPacRBnd7njE4KoRJk3Pi9FvvGgK4AqJxtea2WJVbVB3GZbUe9q"
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
