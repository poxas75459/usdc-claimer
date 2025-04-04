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
    "JUuyoWvohmgPjNwp677HsHy2usbTwfZAyEAQKsGzu8MuFnBBHD4Jr9VVZ1Um9ecUawp3X1EJhMYSZ3RSQWjVV5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EASmJDe7FggNUSE9f2RPWtgy6npy9w8ifmfZJmkCRoutPdHK72SDF5XSHUkeGqzyMYhr2ipAVr9T8ARCeYmob7Y",
  "key1": "3CuP539gHrSMKYCaf8FG3EFdD9NvkVNTfXgUgnREaiz3fJvduxfHyY37BqNB2TGv5ZnJUwQkfv7Acefki21NeA7S",
  "key2": "5yUGi1bsjRfjesvdfTriUvfP3ySUKYMnZb58NVptH976JuELzMxqaXktEWrTN2T3QTsVty6kX1fh2yHT1E7Xa9oV",
  "key3": "EyXimZW1ahckSLaiPiM5jT5L9M2SpFfdZVL26jezvj3Nqw8rJ1sDmCxH7dXxtHpDcYAU4KiB4TDrXRk3JeE7krK",
  "key4": "4aQgYjPiDWwqwmhfDg1SDK1H3Yomw4HNABY2fn3yCD6fCtwASJVDk7pySfq7upMcw3Mo61tVt6kid4XbSyrxZcDW",
  "key5": "5t17RgTtxW5AfUntZ9RNPz96aKBc4RjWzYswoRRFu1N9qW1gcTYxMTkaFBonN7KaALGVY6t9dBrurBpdMFduP5aD",
  "key6": "5XkzKufXUNq5DdmSBiLkkyYkAjLfUCnTUUFWfVLkPUk5HAscqXGQz3VBdhSPqK9MUECb94h2DYZMAP2jr4sJZUEW",
  "key7": "dfwQLiu6rVsxvuB8sz353Rg5ZA1PL1joDkMxZJj8hczRRUDo6FVJpHGXMtjU4ES1y69WCBcTd3x15C6sUFzvgu3",
  "key8": "iqnV4hQ7e69Jsu1cksrLsB8NYEg3hyXSDoz63sundXCRGeG2gn2v8azPKoicg1QV7NXgknJ1ap8UzepmYSC9iRL",
  "key9": "3vpod6ckhF4RtCCGqkC8BLKVQBXUrKMViwuGiwiYf4NiiKrUjLgFNKe9nzAJuBvjhm5NWGnKtZmcnh2dzEmDs4aM",
  "key10": "3dai9xo7bHt8fARaJFuVH9Y8UacmS4EGyCBDfzBTC3DtRRW7YzGAqGPDxYf1fRrYAWD53UiQR6o7UsBLDAjR4sXX",
  "key11": "4HN6AKFYpxLTJLHJBa595s545AHUsaG2ZZLiiPY7PobWTfSFfDaME2CP9itKz2CcjrBTKG8RdAQTrRV8e46vmZDX",
  "key12": "2hVNRB4xMVbQgb97ucG7P5dGApd4XtrbaZFsNiBwPUzBXdXA3EZEQhFWzDNhxF4AAo582frf4yq2K2eKbDHoutGB",
  "key13": "35w1yADCcVCqgZHpfCgMtZmdcEHEQSiZ5GXDGrmMa6DKWMmRcCawYvimTnCnutUc18VKMnYYHKK2w24woAUPuRxE",
  "key14": "37MNnRhBnAbXapshjM58UCZzBHwhGmyDKX5aeQzGR3MJyo8tweBoCjZLoDPMRBiHejwfQTSVfV1KKCzUWuS288z6",
  "key15": "4kjvzGv5sigfLdtDhSjHZc3UwKXKck26PUcAe6S82JBxSX23oqco9VVoJ2sJBVC1yudtGDRmZp7HT8Xsjg1BRSec",
  "key16": "qo6TaeAGzuAVC6EZaWJCEgAHvJb7tGmGtc6zMJZoM5TdiEhiSduLTq2rkcY1hRma9mZWZHfpg4jM43dRyaSXmo1",
  "key17": "35SGDMYGhVqDnL9AdHtqb7x4Qg9zExGBvVV7SESeex7Ca5JCgNYaPuCVR6UK6KYBKJKaF6bDrWKGwTSTcpYiNSQh",
  "key18": "3jeWwXGF7V1MpcKeizxJVEiMkK7wfgxWXHocwNTjeHNNwkKKCh4Ca2t2GjB5KFR9jQrFyXBn1cWyAAmiC73nPd1K",
  "key19": "5bQH8jSG2QURhj9NPWakw1h3J8hGLwroSNaAAexsjWfRfrmveEm4rAt2duQWHo1UF5q264tzTjbdHQ3gqjWkYLKy",
  "key20": "3KicXPAE7iQePbPxZxE6JY3JhxUZvWDXJHKCrHaLQHMyns9eioRHvTsZ2Pc67vmNEW9wsa61EPQMUiRSwmMvXE4E",
  "key21": "2AbCjsx6mDk8R9nKT9DTKzPjxqGBAPA7B6Xx6CGiTH313GkYMybKhyvZc8DTRc5pDtp2WgLq395QHd8AjfdKwWaF",
  "key22": "dusYTQ6p4C5cGYUpeStwCQeAvptBCmhSALL8GeYS5hK7zu1LT7CPbpTUaiia8tP1YUrCfKFn12BHekuNo6W5iWh",
  "key23": "dVuTpqvE48xqRcUxm68r2NHh4PsLMoAPfnHRJeEbEGQEg4owdgTDhSUGhkccGUhx3MstcYbM6dyDdssfftBcxLD",
  "key24": "JPrDqqs7NWa9w9FYKTDot8ipRgEmZYBBfbRhUHCwgn8SunHYdKVMnv78QMJ2sizXipMPf77KfCRaWWLpwg1Nr9x",
  "key25": "3kdQqKpsB7BVEon3eR2NhqUYdKLKBybuwvcjrLvj5cuCZ9ejbVRhkoJCLdZz7MS6tcfzkF1KQ31m2R9PZKqTw3AY",
  "key26": "2sVqUzMjeM8SmejKXivD3CsiJXSQ4LazoWjqJCLjdhiB44kVe93H5PAHUR2MZ5nUKkHaEue3VGX4QYY3Gm4zfLnN",
  "key27": "3f21dyizvTNw42bixv6qGh18p216rkFToqkSuzsXWhvyeNP3EoUegiVaDppZSuJ3CPHJxRAPWHYPQRR9KrbvtqXP",
  "key28": "5JUjZ1emv2Abx7g7yDXUjJAG4ng5iHpK2FnXK7bPg2gT1vo7pEKjbuGVkqJK6NTcZYP3kaVipj2ak7sR1uJAvJCq",
  "key29": "3jLpAX6CvCoDr94fFyfDYm6RL1g7GLYF7EPPgh5qyHVEGBoHWKsCXywwbva6vtqtt3PHvKonNRBcHXFXmyfAwAvW"
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
