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
    "2YFSWB6BnMAYBDRmY94aAZ1io9W26pLLGadZHiqdHMaydRi57iUSeniNzJcxYiDcvZGVWEACfFWp3h5FU2ACBckg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekzwtgcJsnE11BXHke1roQRRoqdUQfGRXZs5qGm68E6QojuUgShwZjE5VQuTyd7oGhW8htDhm4PARUF7fZKz6DJ",
  "key1": "2o5UbYq1Nv66N6HoG7si7AFyFuyCu2JkHgqJMyUHDSC3UQtemq22fc7stsdqU8w1MVKgipY9Qfzp32ows5P3cTeJ",
  "key2": "2GkCXqZmqvBprQzPEgSYhVCnS4okSnvH8pMbzgjwoLXbRfTRQZqAMPTsoyiMQmsZyeSpqDvBPBmQdSikNqvXzNKk",
  "key3": "5WcQRL3qGBy2zaRfnRc6v7ngU1HRoboWiSR2dqnUU6oFfoHewYjQRfL6Qj8yeAet1gZ3fHTLpM3MhKySB8X6CGYG",
  "key4": "5A6qDtxkWzLpKrVzumuYpFnNroDgpKbyGLh4vbiE69ZcA2pSv9T6BLHLhqSZip8mt33FAjdUqNcSfRoqZp9xU7WG",
  "key5": "2PNMC7HEvdF9L2WDeGKeD5z9bLiaFu6sCSswagS2Bcuv2tw72jMVjA3Lask96bpeLsuvrMconkY4onrBQfePHAqW",
  "key6": "2nDZj37YktoD4WFgyVXmcsTRb17yLQHewom8qAtoqEnEHZjKEWhsUuZSMGn2KGQcGBadwHnesXivMFhTRHc65oS4",
  "key7": "2DZaGQ8YPiWt75JkDkUbSifFfAvKHhRrCdX7Gz1gphfcH9kETQVsgvTunbYYrdCNxdEaZ2L8T2Xux7zi5LnP3q1C",
  "key8": "3UuvzkgcTJp1HtzVuheAkVYmY8vJByW32YNB9Q9bH8FGF2qhfXawUzzkEG9yPmRbgWjz737wDDYFszbSqdxAEsek",
  "key9": "2LsCZcrF7J4RJkuDq4pn2xxK4LQLcbvtpb4eJC3bFL2LodA92pkQgtZkSr6TD4T8ERrH6GcZToFavUiPCRqptJp4",
  "key10": "51WmwCba7cbmCXWW6XLVqTo4UamnBtowuKgeypssJmH2TgxK6rKPcrva6urAJGtzGCBTG8239SxenFHDhJjWELSw",
  "key11": "PAi3VQ86KsUKg2p2iph1KXkzEbfUgVnLykGGVCX23KnQJKpXhKWGnZCRieVR9cgS1AynW4h443pLcA4Fn4MaHGG",
  "key12": "5K2RQcjy7U1asE4uE5C52Nwrq7g8PtwGFgjXdryfusJVm8E4eZp1YuJWhqkTfQ1R2VHeQy1FvfFv1qEoC4Uvy1uW",
  "key13": "3LVTjMFrUoeTEKi7YTCbAgk7XN2AgKzpXWrDKdE1Hh7QBRGAsGmep5iFgAAryLFe2wXs7kd8sMqfKj2sDZszTncZ",
  "key14": "4GeztFE8bjPusRZ1pB1j4NZ5fCwDyuyBCXD5cVE51dkaogXqgsd5jrwkrBLUgHYmL1fwjuSW9ihqBmFeGqS2C5LN",
  "key15": "5fU9fE2JVeW2c5JEAJASMDV8tQVoavxnRSvnxpMXLCxhJun2k7zkh1KgMA54AeDx2GYsShJNkkw35Su7W1xRC2rw",
  "key16": "5c388Nqb8PwhdHKWPVT7s1rPbA4pnjhEhQtxHGaAeaKChECfUJTAZnk1DiqHGNJZhDieRJV4SoCo8VZerMTJV3A5",
  "key17": "31RaNNgjk5GVhqwrzivMxxoH9fXjv6U8BiyMp83dtTnY22zDbh1tFJAuoZzTxBwWJ2YYqHRYXmuyDwToXWLRHXpP",
  "key18": "4GcQdZjgRFZwanvDaUuuUFLL7yQU13D7ctzHmkEsQBvERcFLseFs1n3Qw1xGewsKzQMa4RGHVGyq4KXSHC8wDJjR",
  "key19": "59Uv1JS3yrYy6Ak3i4shwV8bARdtJUw7qUPVP8CSoSUZNbhVk77WVTRpzkYfRwEnJx49ikZtNjuwU2767nF8Nra4",
  "key20": "23jSYvwBLxZ89tf5ydVKsYYJbDWD3FzgAzaz17rcN9xc1N3guob5ezc1tFGAXpLZnckjZwGsWUsDfzfrjUegys3c",
  "key21": "uki9FKP4XPtbYcyVKqZVRSPv8qBQG4cJbWPBVeeNP7ZBirp5CXYLXSP9Tytr5ayGGZrwdZYpQsFRsZ7AHH8wy6E",
  "key22": "3quQgTrdkHN1qwFRJi2gG28yAWCVYUYy4CMxSdn23grs3fZqDinFC8cw2L91vMR8dHsnDR4x9qBi5Na8S4rWZXN8",
  "key23": "55hBZvRZHVEDD62YoLmQkBj8t9NoiGohNzfHHzcU8jtuDBwd3v8dAQbdn8NxKTpzrz7uM7BH4f3kzKDkMpFbnhbN",
  "key24": "3qUssgtxHofbU4c92EzfvbRkEbzoBM4JYnUV8CScznsd3wavPi9m2d5eCyFWbp7r7ue8DV2UnZ9cEoWtrfidbq24",
  "key25": "3RSJEFMeWwDCAApZjHMCiSfewym7Qxd5CJbReX6ak8oS63ddh3qqJ3ozkk2mJx5nXMW23pCcMJWbmeiDJX4ySup2",
  "key26": "4h8gQGSJE93DYU4GX9a4AzysxBsvGC4waHX7KEb6QoM2QwQ3JDZF3RRwgKFtTTtRUGsPsh2wBsxDLoRnTw2jaV8f",
  "key27": "5QcMhw25yZi6nAgJuaHmA6nDQbtDc5c5UJzAWdLav8tT8pwZYtT2pWS2qrDMuzuD13kCXSCfNNxcVDKCBNWtUWD7",
  "key28": "4BYuD5r1W4BtYhEYMjnXcyxjYFTchQvcbpRRvrEtxLLoHC2tWayovxVG6SUXG27aHi9W4bPz8ZAnch7cLpsuvtNH",
  "key29": "4rM8BwSYnjXFN4nYww96343728yjMtq8VbcSJu6F8jgJ6u2qjudQ8Q2zqfirYjYjAbaqSasPvmmyo8GTiMz58eeE",
  "key30": "tr2FkWw42Z4EaXxjx1SyVqzxWjXsb5VWTC8nvv6R9s28318bF7JfSZuWvKMKYLUUfXN5cXThgibRot9qxtXCp6i",
  "key31": "268PmAMsWZ2DtHUjwg6Va8cgkwUMjMwYm9vFwvfrdUBkVUTfSmsHvfddg6GhpVopdRzgGaMjL8o5YEparoSjxpjs",
  "key32": "3rwjCHk4riY71deCBYWTTtkXRiu6hsJTXVvCdHiTvDN4p8SUAf3N1ZaLr9cLX7UDwVooKt1ccan8uWy9K9RM3bEA",
  "key33": "2gjJu86CKhv88VqttgNo3DX49M8nNgMCBqY3z5EQYiC6SMQhfCktCSdGvWU6yhH75rqYAXsQ8YWX2Gi32qkvu4Yh"
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
