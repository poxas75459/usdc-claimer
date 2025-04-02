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
    "5VkdYEBT6r8xWg1jk4iPbekHLPWg1JvTC99bZqkwZG26EENEArH68PHXQZD3MkySxBu7rz7wffKwtZYqHVcjExK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6osmjZoPasXsdpnZXq7YBsjSNYqLqEuFNYVPJPmvcps3kLazmCCwSU2J427nDXky7JYwAH5TBu9iNir42w8quCx",
  "key1": "5StnjBp1i19MJdQpKVoMt6QF58doNTurXcnLQbM6ZZxENt8fKp4dDr3LAKVWbmqRCFKy8q4a4SEU1ewFe3VcNSZB",
  "key2": "5owC3qph3kZ2ekqLwhdbQoKzgwRrudbEtvtCvTnQQYhSgv57DtZotfKYAx2HsGZvFze4Q8cdVbUKziuaNNDRc2EK",
  "key3": "5C8tHTF9xcUx1yiunBenJWrxUSSDruFrwm27ScNMCwQBy983xVwMTS5jPZBqW9XmfmWARQNJnppLyEBFSQrXAo4N",
  "key4": "KFjYeFW6WTMoTshWVQziF6dnSNXL76y3PcaY1SKGqKz7Did1jUxjqScxxf2HgQMW2AzqMCRxcqMT7DZvSw33Amv",
  "key5": "4D8GMgjQ2iyjUZPBeJwu87HvxYBzhsiGhA2meMCDAexJXeTCaQG5hsRmYkVTxGuomNe1Z6Jin2J9rQvPUbR6HoX2",
  "key6": "NNdSjHBpCDUKyV3VArfVQvJtgwjE5JzuQPvfsQe6RQEWgiMrwyWu8Z5xj3mYYCPtrLN54QQ5uoe4THW6KN2pnoL",
  "key7": "3HcL77PRZfiHJYyJttrqj7nbPZBwoHBtsUEQ93Mho4weMjRJkqWXY5HgSqo5qGKw6a6wN5pe2EgMGZcqLegEjAKL",
  "key8": "3TNAaQFEe1YBjZkQWLkiBNEnk239oPGJ5g6mvkxZ9j8S76XqHjLe2gP5uJbek9C6MWvsK9dmRWiy4C7oxkzK17z6",
  "key9": "5VMRmVvG9gKP13Rf5SyWQk58Nb52HAEFvg1y77nJMDEZKLkuWCFrqcBRBbGaLLGKAcDE56o6AMamHtezxkMSGwug",
  "key10": "2BHwD8f4kraUxAP25EE68ibfXuKq2eKhoYLa72mMo4NbPyGqocZFFmr61PK7e2ppe6P4fguH8fs1UR9ZQxaKnUrR",
  "key11": "2oXdXRz9qc41BEi26xC18S3Rv6zfmtRwZfBGqpzSjfsu5FFH8c4hbwPDZuGHwQ5TRavPs3eawonhUvgf19kwTzQV",
  "key12": "3H2wkqkCx9ogX2CapmrCCoc4G87bePXips4MhGqicaHNu3MZAxmX2sJ7wZJS6uetw7kHDLjviD1fz8Scz6zcdtrP",
  "key13": "4BzwcgLtNAUXxFeJ42V8nn6AxzwayLZmTGWY3hXcWtrectJpsU1LBGTKRRz9QUMkroJwsiZ1h9zaeApxhX9GQPYb",
  "key14": "3i6odKt3J5JVrqsTaLKcdUXadaskjGhmZxyN1FwWM5qGvLjztW9r3pzKPA58ED8QcUqZf3c2mFosns76j7NpieRa",
  "key15": "2VDEN5dcAUtzscyz5Fo8v9kKtjVbFMri3N2Z81Jq1PAWvqUN8vN78sC2M7oaL2NNoaYQes9w1AcT8VcYbGxMpeLc",
  "key16": "5htqttN7gnruvsG8WEcmtLY6JLRyoBPnLMagaR9inKi8jSSBZwoY6tvx6nC9CJAVPHuKXpmAKTV5xqQLhrrbWrLi",
  "key17": "3uprxhvXXYL2c4EsJk5caVW2JKDxm8nVeV4EkoCvP6mZ5wqZcHKYt2fUS2wb7dHyjmRAGyTkjGeewdegcRucagN5",
  "key18": "DGNv9AErYaG5zFED5khAPAgcxWQNnFxP6Xpak5W486gsc2YxxZQHMKzLmGLeBz9W7gmgUQUZBtMf5UKGHCMPmdz",
  "key19": "Z7fcSgcyG2GSEH4u6rJMSJ67khTD5g6eKH84Fk4UQqr5MERLP4F8RjSRpEWe9rYA7V5LoV4oM6CocN5Z8qYy7c7",
  "key20": "rmqP16gyPhuLjL3frZYK2UKM2FPU5AwTssHNLP6YTkZbZno6HsfXsgTqjFVW3dxemErbdyA5HH3z3X4HhHWRNJf",
  "key21": "56UkDDyYGdh69YCC3teBazwrPTJeLC7T8tDg3b64qqiEoCwMrs4cZ5PToWWqrUDjdcuEZ5exugMmbBBUNeVSAVir",
  "key22": "292SUFA3k7bKm4tt7jEsn5de91wtiszzfCVtY9PAP5eh9VRg6prJ66J965Rq3fYHwpiFfQF39UTajx3D7NtWGwi6",
  "key23": "2u3JFGaN6KyBiYCHhAwVmbmw3U7kMg9sMqDia2YpfmfGxkdhYTKD8s822xSuSaqhf4JjRyMviGYiCtxoHct7RLcp",
  "key24": "4Q3nPhrcX77LsniVtfnUeoFxTLLpRjTftu7zksZbLMYs28FS6aqCLY6Gmv6VkZoXTw3CncLQzaMtZufRLZ8VuMxZ",
  "key25": "3z6Y8KJL7S8sa715L68vyL7QTQGSwsoaWQgeLeoxqPbDoews6PpSaJYSgV1vSfCjFrmYJJFPQPUrtwGZft8MqWkv",
  "key26": "2JXymFpy6DzEPNdW3hE6VyXbibSnvZtfuHymntFgGKDufcDi8jxLTaT15jidzwLPLne3CFSpLTAbfk8iw3H8Qov2",
  "key27": "36QZszxjAYNt1fMcwR1KZRsapMYCvcHeRbg9SH79DTBWga5dwyiEu5e6p7HypxEPdTvZGh3C5H5detpvDksTmAn4",
  "key28": "33aVKfMb8YwDi2hFjZQ1KLCktbGYRhTUUgSRwNjkBDSMkAPLbmRzxYuMcymvrGQNGKXhA1B871vXm8QEuJrDcd9q",
  "key29": "3SvVJo7jzuN8JoFRkSynn2AF26h9MmcuhJ2LChDmhvYvS5HTXN3hg5Xz3LSbokudpR6AeQXLNbqjXLzDPf89ffGD",
  "key30": "erexW1b4KimvwrJTHNhcReFTBbwGFud45z3WJQy3iUaqidp23Ev8Xk69K5zB36XHdSusJNBLXCzo9kiQpMLcwNW",
  "key31": "3cKrv5cjjNTe5zYASr6LAF9RkpwvkkmGGS6GGdPcGM952QYhBmhPaCAStcpy4nrQzJ8QoryHaCgKm91DigSvEY2y",
  "key32": "4RWYDJ5uteZA9ixwDs83VYubwA5kugHXga7r1HTTyQjEJM3UscaJVRtD26ukP3dzb8HUzGyocnX3hgpetTPD8Fpe",
  "key33": "4BSR72YVXDGYAKHUiahb6gKPXPufsffAZ2x5eF8PSf4MYgQD7iGLBWRipGpCA12FFATtMVyziNMkakgXNcXxaKZe",
  "key34": "SWMtPtUE7Z4nYAtUxw7mWE28367wesREhiaETpWQQhpLHWTRSmek7ta41RBRQFrqmu4gEV31PAKaNMu5eCE4oCo",
  "key35": "5LxudzcVNn8pntqzcCPka4NUfaCUYmJKg1jUgcBRyTJxzHrjrQ3TZhtV3UQjtv1BfCLYZKs9n5rTB3RHoBPs1QBE",
  "key36": "2iwH5mUTXwYGXehZY7qhDRDpJNNqhmM2V3jt99LJFGUBYGCQBuzsgKYRRf7QCsgJHqNzLRoVYwywq2Dq8tQNqFie",
  "key37": "4jMvYfwktAd4sZGVvRpXkyzzGncJ5HWxhxHHUUzTZMkjE5oi3dj1BebvTUmJzYLkHdPjxkNMgoDgMq1eVodHChWX",
  "key38": "3n8UYi3YT5xzcd6SetLEKPFaZboDAFcQ95uRPpKnZEFiiacnPWKTqCEGNxpZ43x6h2MLC29bqeWiwV8jvvjYzKUN",
  "key39": "HM8keYhbgqC5dYtNsnhURLRwtwmoqx9gRsmjojgiTJ62ubC57RoThtgAznE6cGPrNA673mKeHDKy9iQKKHXJUrA",
  "key40": "392Npe4TtTUvCbwZCB8QtxUuBULHrD6RiAMR1ytWQHdRyL4DReq7GyiyifeXaHLZic1V4UNr1husdyXzdezWJwEa",
  "key41": "3h5VvZAKsTygVRX9LbfEAxAV39QuKTUWXC4utmgSRaRAf8Uyav4gmVeZuRsdzHJEaPxubyPbwLiBHVGCcMPHBShD",
  "key42": "5U83dBJ9219N2Qk2Yv2XTnCB6ZX9QJuq4Kp6Nxne98Lu2B3HTSaRHRjZnEptoenPrw4omnVH8SU8aQgTxeWYb8Sx",
  "key43": "2CiMKExoPcsVEqtnGhoB8aWKxniKA5fciE6d16ynVaYsa4tYfatR97TpZotZAVCCHhpXYVH9EQXkZpX6XthvPpA6",
  "key44": "22d9fm798jXujiE9FTQUf2qYZdHeeDbsEktHRshG2gAaTfZE7cMzcvqiZiYXC4DU5xqaZL4qBE575AGZjZa6GTQH",
  "key45": "665gnkwQmzFcS5i3upEbo64vWY41pF2dvA3NgbdadpLVw2KXZ2Byg9jsDC7SsvL7UgGaohFxVEzELyUATqU6LzVL",
  "key46": "5cKcTDasLepfr1Ldfan9JPu9DW4C494g64Y9LmnuVbbHqFU6ps3f3aEBUDXhynq92vXCqoMemB1E9D8S1kEcqTWM",
  "key47": "4GZZxnWbJ2hN3qqmCLDkXgUmk1HRPV8Qu9a9FQpy4k3gUcmbfMSCr1WQ7PnCcwvA5Gvx3RSCZF1RMxsVJStdVQSb",
  "key48": "cnMT9gNaBhauypw8KzpgbWM9xPReGsyUPidJj9k1eYjLacbK2xRgqRVW9wcVmQEXmBuHXEFEhhfnXEk9idBXinM",
  "key49": "3LE2MknWJhve3samWo9rtPoX1aRcnvNmVbfqR8tvRgUUomLmTqvLZaZJsMPszjFezZ9RwvC7HZf2YJtmNsXpdanv"
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
