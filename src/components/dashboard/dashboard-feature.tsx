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
    "26AkSaW1zSrNYhXkB4ZmChZ1qeS54KNDrXgjkeE6XwAhyXWf3hm9PywF8vA1bLY3oeYotf9S9ftzDAUJ7qGa2hcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gG85SSsgzc8P5HFLSfviC3gjKdoVUdZSZTo79qncN2FDM8micbCHoSCvh63GhVPiEqVWw3ZXSNEKfcjhB4QKx5",
  "key1": "51PjC2mqfVoV5iRXAEqxgoS9686hATj9JXEizpSpMgxR5t8zpHAC1n7USG3yaKWfEwvgcKcWzMUau7j9ZXTC4XrP",
  "key2": "4jERwcGkkBCppciHcJWdkk28Hd9z1hM5m6w3KHXJBkn4d3fDEdBXyCmZ77hnVaduCS93RH4yZRVCx6cP7MjTp7Rc",
  "key3": "66tZyVbuwyMrMYUHSvw18JUSqwFW5vqw7575kbEy5iYswBX5Yo9jB3uPVrPBVVgg7wrp1skwh4ifeZo7gTfq4A5U",
  "key4": "2ZuEwUabxQmzwD54LWvRUdE4WRk3qr5zGTCTMNfuxm1mQ9PPSF6iuMuQGVd8vhioFx1QxvKqKxCcWqTjFVZLcoNK",
  "key5": "2XXSVWffwxMsRUfPdzh2FWZ5DRTAnEdjRXESPExGXxkMNBhAF6NgKfAYZbF8cW5LibpZhm2wK9EvnW4zr99uEfL",
  "key6": "5owH37g7u49M4LMijqTcmv6w57PuHDUSteYcqATHPqTFVnk1JBPaJjaJceRwD89ccXjzY4xtpuSHq1RwcQBzQM87",
  "key7": "2KLVFR9nvK9AqrwL3Wixa4LiFccnNCubEPPSKA2PtYzkTAHMoR1z2H1NDraT5jKR5jJh5L2KxuZD1PC29XxiNpjC",
  "key8": "364MPyE8SKwhkje45SkHQ6FXrbqfHCzgdNRg9R9xdbcKLu9vb5U2p5jSzNLbtAqXiNVjyJb95Ri6Cfk49bK49wnT",
  "key9": "61qnqeEyyf2y27kYNFXCNJ35KKVy9tr8GrySC8wr7Q1RRany2gzC7rUSK5JnBuzsBR7S2jLMXGouPFKrDT7eTXam",
  "key10": "WefWe7KQnz9AgTTsEuiKDKnK2MgKPcxE3NesFiCXfqvN4GVrQvhiDSV3W5CXGXWuFx3fnkR7xudtQoxisAes71G",
  "key11": "2w5X3Y6pjBE1WMYkkRmiFYDWUMdBgJUmfDYr7oQXJ5mPbXrXiPhPBWpJxkHorCvfVpsEtB7yrcwYyUpRCzBMXfju",
  "key12": "2urKMK49rJkm4MRWTiXGk9vvihmGmLKLFDcLMGXQPey43qFn79KBw56ogvCJWNGxbfk8MpXqaYgTuZqqyyzubMb",
  "key13": "3fFZGR73mtwVEffvJuo596o7o9gY82qvTKgzTNrTxnfmRn7TJR2gvmEEucFX4yjmHkuwhQWrcghKyv42tRKaAHv1",
  "key14": "5xHirwMyfFnHHbwWS37gsLrjyuMiQQHq55zPhfqaDF711QmAbMV1N9h6sb2J9Nun4ogSeByus7L9LcxLL1ufJfGm",
  "key15": "4d2JWi14VrUCARoBkfyFfCkrF2QfJuBsXaWKtXgvjEpnfpEih2NnF15kN1dgGDSEM9qskEVngubqiMhuazgDs56a",
  "key16": "5x7oviCtMVPWopovU5owVprqG5HHrWGht7cjgSmACi5sSepJBV24LJzonssw557P1wCMC2nwcgyWScCdcUeGc9yh",
  "key17": "4TtTjnFhF3NEfadi1aJjZ189bMRit3iZmKHzZW1cWjWnzcrtq3dn9Ex6zeAEc9sN2WGucRp199NgeV7UUGqarLS5",
  "key18": "3FX9emqePzVhHBzxhPcCVxxY5CziZobdd6kvMAQAqoLqFupR5ns4BiZeJtp2jSBvpYis5QGKHDPL2tKs4qfDWrSZ",
  "key19": "2dwJnnNEqsU2Sb7cCW5tovJQuyyRDgrQssszBbuSV89mvn6hTzRZGE8UBwS1yjPVxvXX7rBKMxMJUvkJr5S95xfb",
  "key20": "4GcwKYWCejzXktrYgfB7goNyTyuKkosNob2bdPnAHZW5C6GUtz8d5umAdJL2ipKAv45fnPKzFbHa7XikYapWSEda",
  "key21": "22GnfSUguDLAStySzi2aBCt5Wkbp56ZVQQ7C56qkdQDCEghUxgA9XjjxVMmjRVwHbPBZoWTYmnaZkNmXPGFrx4wm",
  "key22": "LJLxjEcKj93HWsHsJ493Pvyop3MA47YtoG4iDm1T8KS3gRwpbTevcLKXBa2FpW7wZcrjrSSdfpM9Xgs3TRSDZ9v",
  "key23": "r7f6q7JX4jzZUoFEbY6xhGdo3niWTPeBVuVS96Byd4j5RLuUCbKh85ciCCABMvQczHusdCieSSoTZ9RcU9gtfdU",
  "key24": "24Mgt9g32MYBZRztwrNE2kV6T9rMTuFJgy5Mn9rdtvk3sWUU5xXywCAxZXqHVBuGAUpbzaQ67N35XmKgLTnT1YbS",
  "key25": "2M6GdRJJzZsBWtXXByBA5w2a5sqjwfomgABoSRfpVFd6cqVuXX1HEyz9Up5k98DuVeRdzTauQmg2ff1N4W5v9VnS",
  "key26": "B4ayjJVrfzHx12QaDKoLrUfko7t8GKzHmDHNt1AFeEudTQPf9igrwcJg3BMFYRY9UJAGSAeNG6zsTZb7vGWS5Ep",
  "key27": "4HZkgWSmgKZqBY3KRWLoZGdTy1XP6NzRTafAgdcQmiE2SX7QBf4PdcbgQThrjBnFjz2sbdBjs4vujRCnyNeWVSQm",
  "key28": "QQG6HSnAVrSm1ab4NtmBh3dhAMf18EJPmEo47a571A8UUuRE5apZccWUcGv2WcHZfsMFLgr9pazoFwe2sAUmwYm",
  "key29": "57VeD3GsrPHqywKrd97LiZw2NUDr1aGNWT2GzY27q9L1UjCEKpN6pX57HRSYHnqsXVjEnfbTjhdwEAZdbFtbdnnd",
  "key30": "2ZM89m6mnkKYP4aR2kMEhFzq5gtTq3t67mx7FDW85tRxmeibW9e2KQZgwNkgHZgPTFcgKeAJWoXRaHkgXHbYS2rw",
  "key31": "4XRrr6wtV3L7a8vqGY1B3h7nVgiBGxnLt5DS42cR7s8SS3FMiePSjnfDtB3qwwJb8unXhNT248tgdG9KSNPybzqs",
  "key32": "2JGGyuX8VFCgo1Qvaze1sQm8LpnPuZ1zPnqQWXitCWmnmrtoBPRJcBEX1uvqZkv379i3VKrCW9qqAU6hgDtGnXMr",
  "key33": "4xh84sbk2apmph1sDu88LKnCtfwg72kDmGk9nRJu34oDQznMCriscZr7sEEj3EJ8WvfLM37sfTXdzKtnBp1hh4Vx",
  "key34": "38b228kmE5YZV41SvdPM7mV3br8dn5wjmEw7HAFJD3KykXdfSXqHoBad7YvK2k5Z1sCUxraYWQjdDXrGDJjyy9op",
  "key35": "3kBs15gnAKgZayHPAy16HeTkVCGBKwCYgkpqdTtYJF2V7ErzBrsmiEPx1FD8TP2o67cFa9SaSCCoHiYay5EeCD2G",
  "key36": "5PRAicyWA9euMv5Bp5V4zZ9cUySvthpqbyy7wDGNTfok2edJxqvAkfwwYg7PUGndvE5DF9X2T26QvpG4HaWXcsrX",
  "key37": "wCivCb6Tj7N73m8h4sGYpazAiBdqQQby5KpqDQ63DJm6QLVGk2LX9QHD7A1SKCeKgRzg6589u3cnhPCuMRXNxJn",
  "key38": "4eUEJpTvTw1XT6x3vHcaNVPS7SzydMfE3HN9v9J93gavJDataB9hgPi6EGWM628r1frbDfiXdP4quJSSgLwz85HK",
  "key39": "26febWjXybJ32rBnpZxPkWwSDxonukSbNvhNTxUWJahbht12Dk6R6vzcaX32kT7we5Zwd4rWT1Pvm5b44K4NGD43",
  "key40": "34wp6hhz9j9BGJ2hkVp2jAx7kJmqiUT4ac5Rui9JavduP9evmCQQXMYw4mvw9w5YZSp1BxNkDFCxfahbBom4CMTe",
  "key41": "BWyuRq3Mvn3fUAKc9r4yw1RBpzAprpNUqb2ouFcyfPUqyWTETArfPxbNKSynVdrwa8gHQVdKXn1PsjSvF8V6YrS",
  "key42": "5YqMGCM8wh1LUPsWzktkMdDFHZ9EFhYtbhCTcGbeNPMEkGS6ZycjEX4swmvf9VymRpmpvDZMx2rXbs4Gyb7P9A5r",
  "key43": "4L1FvCeQCHy4wMZiA7pwF1QEvZ4WeRAeCXMuk2C6vxkKTCsvk47QgwJaxUc6Hq3i5D5wrwGcodt9TXAn5XjDYAc7",
  "key44": "43jamux71BsSThM286PkxRMxwsCTTvxJdgyCc5vh6H4Q4U1wEH1F9LVw8WyvAaevMGTdL3KxndU7fGjNQ5LUCZnJ",
  "key45": "4yh3Q1v9yv66925h9ifsSe6MnzZrLVErJMVdnq3tRtJGRyVgY3u7KNtowu7HpudN4SKgqatS98sRnDZgmskbmJJ9",
  "key46": "2ogXRG66ExmCH1iZv8hNy66AZmJnfox4gnbRxxo7ZC3bJLSkYnXFcM7BAn6eN8a4TdQFQgbPUXTVcfjMC9Yc96NN",
  "key47": "4WkE7Kv3UPMPSbthRJ5wjbgEW5xEhV2c7ZR8Mdc4sDwdLB42eLxBchMXTWuqcL2pr8GJA7vwH9zz7rAKHP3TEkG2",
  "key48": "uAv8a4UX9ZpxNszZdUpoX33z1iZBxC7n1Grw2Z4mM52WZezT6AzP9gHhPuxmsBAUToXtwXTZ9E4af4CB4BXWf5P"
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
