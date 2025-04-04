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
    "41VSHt9vRJzxFdBHwCrmDrBydxFyyQxsg8pHxnhsEMiUepWQmCejVzbxJxpfsgHJKq5naoM9zQabpkuPv44u7w6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDDGgNZHMNA3TXPbq24Tdmka8Wkn95kiVZqZLhCchZ3XqMct6JH8ddBdqFe6zaUHd634P5uuyrMpENj4LHkXwCk",
  "key1": "2dgsrxvKtDtEpm8pzRZYrJNugwBmAz1E3FugFWRPsbJ8LKAoCu7BmXi36NPMQTp12DhY177EcA9unLpJRMJ6Cmkw",
  "key2": "3ch8mTvBWqVbnoYuS6GyMsvf2bwhmPdBQr4CMNGxpnJ38cgcasz4qWuap7vxGDx23xng5j6ixWHneWA6P7fyq9rK",
  "key3": "5MmejeWoHR6NyzfHB5kFmg1kWrJwafm1TBwuJYVkmGZyEVYdS1N1BXzon3gB3VMsqvX5yEC83zJwauF7uqu1rQVs",
  "key4": "3junrXP3G78urLugdxXL4jhNsoXHD5jd1RDH1VSUWgqqkCCGbyYSddN2p9dYFKym49gBuD2UwLaUBXxWZEDJStJx",
  "key5": "3FJwF39EX9j8m2zTwovaUMcExz99BfEt51QTRiGsj37HMp1UeGReBHxcbMWwUyjfiaXEHzVYvmgnUjXqQWLgEPTq",
  "key6": "thv1LrDzBvHL6CtZYzYDYGv1vyR4cVKv784J6vsfssRafEKvpjrMXarYv3NgcW2vVT4FHw6qcxK4paCDxK3ysbx",
  "key7": "25AnKV6ajeucaBkBrDQNxfysVL27UZQhsxGzbANpU3CzUHEcefrN6QxsGGLrVF8GfbTKAhaumFP9SuvrVuQJDfNm",
  "key8": "5TyL9XxzNCvVbToYLnpeDAk7KoKLkzwEaooJvf6Q8XHrBbQek8GhxnLXD39Jeo8DQFgcimT3QAVaAft7sqYVgvKd",
  "key9": "4A7RCSH6GfbamxWUFHA2J2tGTkPk5wiQ9ey62yggx7Ra5XyoLT6aotUcTPC1KsYe8yHG2XPWCUbMyeS8BkL4orRr",
  "key10": "3U2SnqBaf5san6mJHgnksuRpTuM15rMVZkXRfwQLxvW9rTzYELgBweJQEyR7sr1pY16UoLXdaUBQzveUxmgnbCQX",
  "key11": "4kLT4vbhdCzeg4WWbqqsA1XJ9W4nKgPfnQBFa8UxJouzoBoTCVPvX7ms4VDjLhdSNRALx53uav96tAdtPzTVv1ym",
  "key12": "4Tt56J8KsBs4gNLiH9expYQjbwJrbmnRZTrA4JYQ9uC8g3pjc3aDmcPPZdErdewhYAzSJYjQFzQ2cAeCYktmzRDT",
  "key13": "mLSHNqofcB2ii3RzbaLDDogMbBYoV3PHv96oxG35y7EE4cJYBEMXULr4Nyt8BGbyKYVgQHHVxL7iDDcf9Nd5rKy",
  "key14": "2GABbWHieuE2EUQsfARGDWnh2tTho9zQQDPAttjftYn63ZpaebNMKvF2C4kBYNViJD2dZVUaAWRgHbyWK6CLA9XE",
  "key15": "4avd6o29VAn9GZ4tfwrisy6QcD2HQ5SkQxAELESggS3LGzLzf2yEbphJgtTxQEdJiefRyMeM1oNrc8tKxHEBN4sX",
  "key16": "sEYg8bJ9td82imQKYH4186AMKS5iR6YLYPpLeRqrtwVNoZ2YJ8R9guL3Y6oUn2W8hiYpoJbjtE7FXqTPD9JwTi9",
  "key17": "2PTL69EEG7MERbrvwpz4gyg6VLkAVuwN1w7hhZUtrspRMqTUazVBJVZdbWHc81cRE8MqogJzFdK3TqKF69rM8hhC",
  "key18": "2vKSQPVb5SPfLwibeoyT1KBfvMnhZpY325SSDStAaopfdoV6mrpLhvYmnkZJLZoB9WbZ3Zzqdqrdab2oXQgDU7C",
  "key19": "2fTFeuc5c6YnquogmEQJ3smvEznEELYaFXVKMfgY19LyxBRbRmck1LSwahjyiApNtSa97bq8JKdo9NWNpDAmmYHC",
  "key20": "4qrQUYzqYkc9JRaE5vKmcAKrjkVYTGymp6Kb76ZU8nQnG6neUuwDFmhZgg21LCDUbJWLNxSnnoJHSAbHgyi7HqNK",
  "key21": "2W3xHZRrvop2T5gnxv7HpfPiocsxFsbijLXp6Q87cFYoqyLcoW1GKkAFyu2p6558qM2B57SJcc7ZrAGjupKEKjtn",
  "key22": "2vhUBQBfJdAYe71mPKYm3dCU21seKrF6MyZfizRAvyAagUh8dZ4xx94jKopimxmbcHzkQUacovBPWSdBetBwSYJX",
  "key23": "2UUi4UmnrDNkYEkooZqqXjUifaofTSMEekoYah2kfzpCbqJaLSczPTWKyVFnZfiLj9oJWfzhRoJ4A4rhCt821mJ5",
  "key24": "4QoakTrvJGFCmgdS5oRXDbgmKiTo3PZY7moyeX5osHVfup7TjeLKL7bhdvpo5yiC1ni69d4oW5gFAFEenke2Nwa3",
  "key25": "2MZp9qL7aGYRSAkibymUj8Cbxk9f131kGnS7o7BHRWGggSKDcsvGfUsnvNeeKXZQEcFT2RjXmbmWA9xWFC7h2FX1",
  "key26": "3ATLxCRyBgCJzGZRKui6qXxpb35zaDX99iNgegapQbxFtsKZtYP3svzGWrcwngaGsd6vYW9GhySVL2mfR7sCtVAa",
  "key27": "5nUcsH8Yhix3k61UtQfEA9Ro7L5qCzFbtrExzR4YVobsBW64hEvjkQc8PeYRxZFGZq9wzWVeZXgQJNKadoiEePhP",
  "key28": "5neCJW1yUrbL9NAR3MS7vsmACXLyGz1CmPXAgyvmwih3DUtEmVXxqhcqnmPidSo2z9QQEhveSiHzE22aKSiqC3SS",
  "key29": "4GtB7DT8cYB3rHXrL6xEMxhrbWZuzPcK3JqoGAb3pVWnu8Pgjox56fA8GiLo7wWQDuAaUiHJSG8u8fqR3CPsxuS2",
  "key30": "63evwwjibJAvzCRJqEEQFvsyajKp9QfGXM2ovTVvprkJSQmBzniHsGRoSVndG5B7DSHZ3pHh73EvTX4hRWiMUVGH",
  "key31": "56Q6J4xttjThokphc47e2wN7dsNMuWhbTWyL7MeUerGxhPkFaZy9tnfrc1eLp1hwx9EEZEYfPdJqv7LuRkb8oMsL",
  "key32": "RwD1uwpMqJVxKWfVaSZ3ewiPobKcU2NYU4q5aBG4r74G7LVfQvpp5ui82aHc137rkxoheDRYVFhbjLNcyxE1QQG",
  "key33": "4aNJDU8Fs1yzYGecG3YSFkupKBxq8cuWXowcx4Ft5buLrhq7qNsi7ZgvekHvrrfXYPkwhAqZTFp4eV5WesaokQTk",
  "key34": "5VZjHX9ZhQsCSjLFg7hpWvCkcPFyvXPiTJqyWJ523c53ikXw5KFC49WgHJPg2G87RuoJ1fRkaynHPMmM8XSSKCqL",
  "key35": "5hEuq8vRYGrzpBJiT4LZUWJbJkXhhGjUoENArDc481xhDngXmvwudAZ1MDxpisfciYChtgSzwKg44SpnioSVEGEZ",
  "key36": "3ESWGAjjqnWyUBWg6Nu9fvPFHRsvZweRXNCi2WHJ7KC3aNjRu3KJMWbL16ribSVugfBvCGMSwGZBWV63VvJCzoZC",
  "key37": "og4e4NY4znPqt22gsYc3giLuXPkX5ghM5foq9p9UpvWZBRSkW7SULdMJ4qc44FMKetQWUm8SERqxQ3m7vKMsbRv",
  "key38": "CFZXsekbmjLZ5s7wAjBLUSYzTKxuQ6EQjb6mrr8ApQASKbSJvMZVFFvX4PuQhKwMShYbVXQHBCuzUBt7b3CM2nt",
  "key39": "39wRYJsWc1WiqErL4aPPaYepDhS7KB6SSQ8XaFS5q8V16sQdps8WpbHzK9ZgARSeU5D6KDv5n5rBm7Q9wNJGEMXd",
  "key40": "4vysvFXYUWAvJ124CpodTXDZY9aDwNWemWVGqA9GAAXRq27U4P4utPrWBwRcLm1tYn8ggZqmHqp4F6N3KShHtxP1",
  "key41": "3aFvDBR9CiVsAiuN2jEK88LwgPKibV6AqjweB2L86gj72ugGnx8QZRdBfWMSRwCffWcMzmWNWSrocLT3V97Gc1JK",
  "key42": "4TxhoYD1nNeU2FoiGxj8LCqBeLQNCyaiD61jJF7SmeVSC4CV83NT66dACM8js64c2DEt9LCC6Vsbsend3D5mWFtk",
  "key43": "3fjCtU5DFQ7PLfkV7ukoFoAhebVudHvFmZrZF3kdc5m3mjkkfBZEDyMfZ9UXU7pMYCijBpxFL3tSW6jHF9LjcAgC",
  "key44": "gWJukNVQTFakBsSAa3nsZ7Xrpx4oGS9nbYy66sHEb2kNzU5vWfGcKYPbSh3dQhijvrUnUk8wfrkgvah9mBJbvsr",
  "key45": "3gwA5WE4L9ZGWjkEuLLtAbzDGDW1BgedoYqyM6dCxtT2ayxCynisXxSKjQkXYcJLu3ngsDHyfq9V1tfmB4nee1Ea",
  "key46": "4WB8ox1vMAuzgbGDpEhM8bpvGT4MvF6LuKZ8zPVk8LP1zUY2FshxRYR8pGSwZW1gjAdeu3YmxWh5tQ3KpNtjf4wG"
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
