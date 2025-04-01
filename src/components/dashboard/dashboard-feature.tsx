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
    "5M5RAaZrF6AjWRBGHcenT8BmUgs3fqnCTTFmUxUi8kug7VrUoiEuULwSFE4vBQpcD8UJb4zo6X6tD5TSeRjw7zM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKeCt2G9sCagGDMHAP9ZXJyhg3URiRFbp2tU1WxrfZude4TRowoUdE57v7kUKaK3dF2nmrjVzwWJXoPHFySphTQ",
  "key1": "uYdzEvkidgWZ4X3wY1nExuzPXjK1t55a9yPL8ouvrVpDTYXUzidTXaiZaUYuUtemi8FXnVTBEPB1hAtvB7nj7xh",
  "key2": "TkztLr9QAkSEDZaVg91ZK6mzhrzcGpRpyB17xVF6znDahkjf9h7gNspp4nuXDjUFfXh5CNPfetNb5jH3gkkeyUf",
  "key3": "66MxEnbXV1pcM7NqZp3du4GE5mhjhDxxsUE7c8fHCrWkawFmEni7gDpMWaNtmbeNuPoUEam5prw1HaWCaYkasnH3",
  "key4": "4NdVwq9mYLtkKK6HdoKv5B17y8PrLKZe2dxjHHoomaHd4pSN1jp55YsnJaz18bCg6Fc8QSNU151L7gZ1XCy95zPK",
  "key5": "2vACb6SSPQTJujqMqgXA526fF95Z2HPL7FfmPmvg9S5NW7iDVRVB1aLsMkKyLyxDsc7PXgmb4yYJ8VddZ5Lqwot2",
  "key6": "24RYTG7CKs4uJPTeWVaYqoBASo5Gh6ydV3GLNzCvr4bxDN7HfdPP1w3yqcPsF1VFPrKtRb3xWHhLV3pcoJ9APG2J",
  "key7": "2BcrMF99im3ze9EQGohdGBdccdNnDD8g6gGdkdn1V6HniddqJMiSxfC6HHgtaHpZQYzXfzWiT2jF5APvPaHtVBzf",
  "key8": "2SGxo3gW6XGn9sDG9MnR8H42f54scBqDrdNw4D8ERac65bNva9ae7GvzMNoMxrPfqr4gUhu8B1dyToy2ifHbnZ9v",
  "key9": "29YDEhwHjkdqt6b8cddk8oKq5CeDFoc7AtNNmM1Dhd2jfeD1x9JFx8x3yMgrxLWy4ZwtzXTGGTVZy3n8ZMjMfLuD",
  "key10": "5WfxiuEpLTkzfag2Wi6A7odiXDkXc1GU7CNUarF2xqUXPt7EYD1ygqZfKMarhPrhmX4KyQG3r8MtcsM699LUD1sA",
  "key11": "52E1wKTe4EsrfLjE8dWqqba1wTs9vx8kzcBHGL4VjPMEK3DdKQkoKJFEn6pcoYSnVWcRP6LJoJYNTQPihNQfjp4H",
  "key12": "51CfWKk1ekfeo5rHHcmNWyJnkpmSBJ4UwkmBSme3tkMbjKntdTscwauzS2RJHT2dX9YC9js6z7D1nJ3DHpk8Uvy9",
  "key13": "5C4TVpZ3oW9hU3njVyeRUqLfspZkkRt2aU1152VdAkDnk5q3JCicNvMuGBAz1f3oS5KEQecUtmGzt2FNQ3eDcUEV",
  "key14": "36s1UdXYRMbNJzNovnEbWYnXFqyt1afaDAZAWv6tTW17vD5TnCehb1oJHKDbMYzbeg5azawqfDNcS3UEqgVoXsQR",
  "key15": "uEXupspJ1XarA3ZHxyJEXbLyg8qcGsEJ1vMtgTw8ei4s5P7w4p599vj2Qe7myhCWRCKuPgGSVCZEYg94YWxGhzT",
  "key16": "23h1w8nZTnFLjEHnLoycsiLsFXUbs4br8JV1BNxt4fvYWhC2e1PZqgwPMVtyFWyTApS6ZKc9NhEMvy3Dm7h4RD2z",
  "key17": "3dnRMyjShSrBGyVBqxBHR6V1tKf1QUMy3P7SmXgcne79WEvnkWWBSFR5e6nQNMgofGYwwAofq7sns9xX1QqtW6LQ",
  "key18": "2ap5duyusZquQbiv68HdUeU4ciWNB2HbCRamrusXj2L4gdt8iPu9FB5pxAa7baMPXhzfA5hzbxdwKk8JPRhfLZFN",
  "key19": "3dK92FToU2dgMv6k5fCGPomr99TvefoMiBmb9j6My9wABwfbEgwPd3XmSsurTsQ7uMZBGCEBQxfd8QWsjtsY941Y",
  "key20": "3Lwt3dNb32iTfNdunxjjuibDVJLbVeDTtU2siyC1kJ6tAmrnHbp39YXAPVeN2UfhvmbwYLZmHFpLzmAgeAAg72u3",
  "key21": "5M74CmfygEhdsx8MLtXfs3brtJFofmD1zPH9mMAAZDepdgGPHRAxPPSmM1mhQcEtHPeapPmkmPuNtAkmyVgAdZeS",
  "key22": "3pV26eDX1B6W9o6zWmEPixrU9x4kzncJJrxCL6t88fLmFbpggB9SU6Ut48avGwKXdMU66HKV59QM9Fyw5CHPZuQ7",
  "key23": "2riTH2NR4EPDySw1nW4CxtKmj5TXcf8DsvQJiY8KWd8nEXXpWEYWB5PHtLNEb65gtuYaTgkQf4K5ft8hh3r6p4y2",
  "key24": "3ygJ2hyhsX4gDNK1y6bzy39sQLVTtzHgA8yKaMayCkGEknVGeipNZKUReX4wd6oE9Z7qP15VRchQbfahz96mMjkM",
  "key25": "36QySsYNE48EkJJvqMmsgwpMEdsGWitE5q8Go8tEhSx7VSndtYMKqhxRwQ3Grxf6Ty6Gpq1WbeWxJexQr3fiJNVS",
  "key26": "5uurX6chhZemu5sz3RU6AD74NArikJr6U83P3gQGTvq6KmauAo3m8xZY1xJenHSS5HKiHZVv79GQmNoRgQ67MQjr",
  "key27": "4WtgcNFpCBpvEP4VfQVokve56Wo7Vaatjhy25N4gjXTGiSMTAeYdLHF8WfoNi9C6eHqQh7D2zmrQwkypNGZ3zQh2",
  "key28": "3DGhvvYXWMvVbFourNXRPTAyn5d92WDSobHAEZ9ajLVaUmnyAjYzJDch66MTnzGddNwQracrAGictxjAnKrAis29",
  "key29": "2wVS2ssSkAdAnRoMqexCfSVqrjccfBP756MSfgPyjQRY1U7uqtPdvbopJEkU49uynj6Qd9UNACZSGnJQACAw8j4n",
  "key30": "PSbgdpiaiWEU9TQatmTKaL3acSxvPQhTP8SuEZtZvcaBAPzqSdXZUa5j6TZouSgN3jw3E5SnM6jsPgGBfiKtNq8",
  "key31": "p9FdmRHZVzJs13YzJDfqNbzrqY9MZ2UFT3Z8rjsaFkuovWevf37NzhrDSTeumrU4yPpEU4KW7aVygvbk5p9SvZK",
  "key32": "YZbECJf5CHd5PhXVP3qgXVUW6uvsjwGruNPHnqVJ8dM2FZCKqNWPEYbkyZuJtcLjzcsK678y9XdhBYiwukpBkMh",
  "key33": "DF4qqqFM11ucvYLpeGrRnAG5KMuFtKCSTTQJMqydKzGh3xEZuT7rXbq8bpMYrSs4wH3aHnZdgASLm2gBEUgBT84",
  "key34": "5Urp3qWe3mC1rFNBQQXupzbpojHrZd5EQCLN4Q27m3Mbv8XhD5wwKJHAvTwW7vVXap1MKKxzEFeBBtLwFq3pBBZJ",
  "key35": "2axUAVhamsbQ2CKPt5NPwbadFacTTRauKjvaPPz2Ct2Pj29qnTH5KE83Unw2qJpeqhELkcvruJ7TB3JRAUvMiyES",
  "key36": "3k1hK3HYStHnSz34HUVKo3np3d9eouwpvagieBvhmPXgekR1mN9Coyq4TZ8kuNAhU9PgCA2jUScAoaHUipuqCuMi"
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
