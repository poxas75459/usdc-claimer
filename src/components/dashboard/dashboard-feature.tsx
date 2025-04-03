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
    "3BevzvvpStfyrJFMZ97FV9gaNb9QZnQixfNkeaafpuhdyYSFZCUYAfbteksW7cVTtP5hUD9wX4eUrr7Qb1MyNPiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydXBnsL8NGcBv5Z5xbsRDnXCr6kN8CLTmwVgywKENjDyKm8Zxbtqz6JtrYimzCqU47bdYVVg2UyP5pJnvygH6jr",
  "key1": "2HTB3LeefkJkYFWtKb6iXCxwboY87ZVyLappTSThfkrVZwzvDmxNjPCa7VytgCtjrob4GqApJzEP7ayKmkw25f9h",
  "key2": "ifm7F1EvXnhXmR6RUCqLFFjPrWTixK3hzHK75ceiRBWDNnzCRTD2ucVZoC596YkMLtWZCFctLhiyb9xQNaGMWPx",
  "key3": "5znBTH2hYec3LPo4Uzoz5ZLjdGaohvBTE8uHaqrDPov8WD2Sx8qe8KeMDxxWDDmRLDV7PxK4Q6V65WigPQ3Y7EZr",
  "key4": "3FWPP9JMMWPPT1q1nPepSTgXFFMuyr5kEBB5pvRFsRiebPE93SW4rrXCXc1L42Rw9NrD4QBDgnvegwJ5GWp9NQG5",
  "key5": "4fogt6VzYRvCNa3JBqUFQAnnpVsfHjQDFTTzytvSG9X5EBN9sviZDFiFfJmjWsNkrne2ovY2JrnNT5N6icxxPS6J",
  "key6": "2g3hos7SPzeNUaeBsRpVvUPqiUdtMqoXB4H2u7CU6yYqtqvDg5VJ5EABxtq4zYRZh9L6FYbooppFpydEEqKKiVFb",
  "key7": "3Ln5uaqAP5yimt4WCnj3MmXBcov4aE7RBw75STzYbkG9ZfR5KqnwnJJo1WcfGrUYHRXYG6SENvFvwWe5fPCH3oL5",
  "key8": "34wAGKp35MybiUsBWsezLu5vPq3mUWEM6nT7MCAwjny9mRwhR2TDL1ZAViZ3c8m2nh5hfzgsXyZTmW8bY5PLkX4f",
  "key9": "3RGTr9W85zaUZcYDWxCZ2FXuisY3oWzhft8crpYhhQYcyZnVxiLqq7qhsNb7sM88u8PgvVrgRfn76E557swNg2bW",
  "key10": "2heaxPxwmKaqLSm3goSEnsJJUB8UeZvZQhAVBbBjBRQXddAdyYtEFuLH5CBc4CdQNkg7BiJuCJzeYi8sXNuLrd4S",
  "key11": "2GCHSVnQ9eis1St3eNBTj7T1mUXLbAV9m54Gav7WEE3TBCuRAq8fXNZspSqz1WxXPDzuLf6VycHMkBe2vhir2SeJ",
  "key12": "5juK15JsdGUP92Tj5rvPSDvdGto1tFR1iE2U2X2HpBYchyF2sPURATUpRpqD6ghn1DTVij4taN7kBPshzDQ6Nby5",
  "key13": "2yB3ANV2wcMAWtQWjJnF8WigcEJMAWYD89LuyWnwN4nzGnTkcmyTXMSGQaY2J6gfEUFnfsAy4jX8ZDKVmdYYjzw9",
  "key14": "2NUHXeo2EbxE42ve1tCZaqxHPknjPD8A7edZ3GbsGRHDfYrg1nwQD54hGCXX4TjqrJx3QBpgSUN3eP8DWsTpHnkw",
  "key15": "25AaU9vNmWEZL7RSGWhsPCKSVE1CD1ducH7WY7Q7sBZqQHuqYV5bmuNzhNuVTLXSVU47wMjNU1dZptzzaxTp8uem",
  "key16": "F5Kb6p2ojmDLS6HY7j2xMAxSz8ekPELAaMiiFNFPBYV84N46Gv2QF1o5bG8kZKMDy2MCXbL4t8F4ivrxa1KAySY",
  "key17": "49bntRvNpD8Ds6vGH4PqXcZfgEUcTWmNYhpKurLaoFM5Ct4Jm5oW4614pSRyXzwFXHrTegB7ejAy1ofBBpxxYXD6",
  "key18": "uvSdgqJgjFYeetgkbroUrugk9qqBKNKqzekMRxcb9jVey2CyTG5fYo4Xx2LFpvkSZ3cxwEYhuJA3397PpxUaugp",
  "key19": "3PHJJwjhmJBjM2EJHdyna9D6XXWngJ3Lg9AJqUD58jej2gKrz2pP2joSKsxY8RfKXyTYxD7vJBcuGsSukLLWGLwQ",
  "key20": "5S7RHqYgVBc7rk6HPsj481c7LTCsJkS9ZMdmbm2e8LfdABGfzxq8X3GaiUZuQYLfAwAx8kCqZ3MFtXE8irAFJ69L",
  "key21": "3gxXW827BsM5M5yrJ8dzkw2EjuXw61sZgoRbAL7vboMm8JNnu1pZYGNFLeG4jyhfLH2EJk8aSqikgmt4x3MtLwvd",
  "key22": "zGuiviVGgbPj8EnvW8whNmExkHzcwuVw5t8pU1sdrSr8CiGgQxmXHQbyTLqybgG4JMBdXRsJsL19XKgUHKsZLM8",
  "key23": "dUTji5x8suiK6BWjEnPMrW5gDVWJgwruLuPTwTZkGYwMGu6bxmNSkkQVGSvVc9Tfsfv3wy9ftxgCMXw6irEUoEc",
  "key24": "4gcm3PhsRZRNHVn1UERtV6VHfQL7cmx5kUgfDEP6Xej5KrP3AydDZBbdqLk8cLYs35qE3DQBP4yx7WwXrWFR7jGN",
  "key25": "4dyWLmokYjoq4Nz1BdDijz7oQRXHcJKZzNDKnLoQKSf6UsRmAy1feDLcXpZsWaNu3qqfVuCzjKU2TGH9ZniLs18n",
  "key26": "542tsR7LW9NRuQvopS4kTdcogVU7VhUL5TjqqsbNSvwPJ89tAwwPK3qgZyAhVzGsChNeZh7KcwpKrfnQnHdcjH3N",
  "key27": "2PkSKxjyHQcdzdRhZEGqjAFoe6Y8NoeCDdhJm1RHtR3TbXYB9J6YR8dLnamo6sVhRMvMeBLncJQ2GEr63VRfqmoA",
  "key28": "Z2L3ag2469csWB2hhpbguNCmCfSz2cgdT4GG7J5nCkaDRjB9uGubDGQ6EnPj4JH1AvCkidZDHLGFJCpVtbj62ry",
  "key29": "5NiNo3Z1Pngw5a6xMhtfRyLxgeYrAMNRf6vUkv6WGkVnZkSYgMAYbTESKZ2VFQPdZNYDmGzsAqTP5mbM84ZzuDuG",
  "key30": "5Ho1rkvMeUFuDKajJ5VPGNGs92ev3969MeBjwNJ88XN9D3p91FFEXMJzhQLG1L5kPHzeZyJuideW9D3KbJ4uCXmo",
  "key31": "UHnMhcDuHft4x2wmXwFPN9x67ZuYg77JzVpksJtDhSbTNpLCWRcr2q4V3ox58A7BsnWbiy7uHm4bfHpaZE7ArW4",
  "key32": "qsoTubQR43EkaDZsmir4EFaPaVhuoyxjGkdT7PhAxKmxqCpTbrv2w1WR3zzQZ2djPC3kD3ZCAmaDghBpCqW7eWx",
  "key33": "icduNMLKaETj6LpHEN5zRp2L1oWqyTUwtA1ZEL2NY8NMVmJm8RT8y7Nu2o9XDbZZvaPnjCHZigo7drP6U7T8hv2",
  "key34": "5qSeNHKCh5XZYjqvjSrzXDs7HVtkRTT7nUagpUdFfKyAHoYc8WdxTN1goEiqTJTAi6UbbP4GktgjM3Rzjo3X8rjS",
  "key35": "2va5eKzvDgG1rxH28BwVtJVxyFCVqL2z7LMDsJUWgTHHVS3jAQ6ACUR5Ro4mtMQWaHPfvVBJBQ1rpdpMvszEMNGL",
  "key36": "5etmCfZ41XcjPmdtxyoFyJSMqhoeJRb8cjBficYKrAm5mjoPXhaBWnRXXPyGTSMciErmS9jF6mQdh7PpTSz3GJNE",
  "key37": "5iWwpwcrDpAfmX3npxpW9sX8uMyfV5F2qPYgiKSk8kGfCW7s4LqEKxNGHVYNHRJJfar372ST92MQSjq2eenEEPhQ",
  "key38": "rCy2aHJGDzmxHdq7CWaNHxtjFhQYxMhR7z6p49izXC4GPv1ucNtZSz4DYzfyBLhuKqZYAmUKCBTXRNhcZFMoS2D",
  "key39": "3kzCRAbiU8z3i2hbSupTxaH2hye4WovKpkBDoAsSc16gA6xfRRaCZnVqed7HztWSBCpCy54kZoDwX29m8HSWqsUT",
  "key40": "3iz13Y19d57QveXei1bPSysxj87xSXfPXyfTcPzMPCGCVJ3D1vV5JbXbkHNZePkGGyyE6mpeSowhXReUisY5KoGz",
  "key41": "4hop6VqgdTxD3E3bQoidLKamDKCqrpFM9ibgshFR5ApggC3RHrq13supZoctqG4N14iUF2ca9LrSSE8vZnLm8134",
  "key42": "3Ytrf3dNZcS9UfQJAc9zdX66SENu5fD1utSxdqHXAQKb4P9TncBLuK3iqdhw27W22M26s74J8UjHEmRqogFqGnTS",
  "key43": "5RBToGF5zsgUJh1sCdN8DcQ6JbWZdbMVnGgrHUydZRhKGCinjdp6r5Gh2Gwu8CYfhjtPVVJ7DLVYhTK6J3PxXgMJ"
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
