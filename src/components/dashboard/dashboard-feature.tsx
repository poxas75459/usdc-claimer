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
    "f5Zi4zoJ1mjDVi23h1YaHhuwefN7r5Z8VsJppdUKn8h3e87F3yY69LJ4hFk5zowgP89AnWYDB7WuCSUtDhc3Jio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWaf4KpDfNVuikGsAH79sFn8dxAhoQftkcU8fkPDBAWUaymv5EqgfZWUhgMUUykq6m9PsE1VV6ZPy8JV4CBtfJR",
  "key1": "4DV71HiqPVXsKbJvbNTuaWMYCVtv3WeqXoaExvfqc3eYgDF2vsmXtUwjSunNKLj56m8CNks4Tqh435MuWHry98ia",
  "key2": "4bCowCCqdB92oSUHhmz1jwp57Ms8vrfvCJRD28ySZnVt4m9JP4FDcuD9wwemovxRTMmz1tca8gVEJFUR1WZWhCTK",
  "key3": "2qbnP384jaw85rBz7tPpeYSXR3tyoYYdyzGSAWAybyCjVZDbE2Er3Ny2RTkbsSYRUj2QvJG69Ttb29yzuVqtZRDq",
  "key4": "7HEgi1DjSYuv2SKP9cNn9KaFVkXyHNymFa6Lzu9MExU4dRHhezBrSnWHqXnZKwrZN7kHA7aQrWxxa6mMYWMs9o2",
  "key5": "ny8vfBHZNHcriQRRr6wbL7eC1mt8PsKiF4gYfc8jrT6bGMXqvBQ4DHcca6rv2QbCYhaXSgUZ1bq3PNUEK18imR7",
  "key6": "47wsQiKLBT6kUfKhKum9k6Ws6nH38d1HWJQKgbhvzNbWBv2dwQubTW8i4mcvg7qJk5egDgd13uqajAECv7d4hH44",
  "key7": "4WWAwqgN4vvPSAQ9DeXphqg77dBZ63dgCBivmMeAoowCBMPt426VQbFHXnomDQquhcN28t4UpahwPBqfHibdVoAq",
  "key8": "5VeF7N95joq5JhzBQwvPVFF9WMro5dJMhpgBYVGiZhBZG7LZwaJcUWcDATTqENLJryHwFPyT7J3tqJsWNyyX7o3o",
  "key9": "33nuhS6M3F1nsMacoQiWUpW7xJbt53HG7Z2FtcxEhq58QBkVcgUhrnw3f6X9S91rpHu9PcT7L7vka8LGyvhoFe7T",
  "key10": "4M26d6dz7yU7juSm2WgDVyVnso25oq6uNTdEQCREkGmXhuEe3AsG495FYYA1DDydyyJ9gVgQF2SxV93tFYWB9DyD",
  "key11": "4TxZXj2PR8xx3hZuyeroJrSsLfxq7aEtKDqgGdbWJXWg9USpz32nahdFiRUHGqShprKuc1uny5u3aJ7bHF5S7ZFK",
  "key12": "35hN5uUUczz19xWHcHFJwEkjc8WYq3o8BLz4DHjyfz1x1668UZ7PNquNkaKE3BySxtkwU8eQbX9wX9XVqcVdMLVY",
  "key13": "4sbNTJzff6wQ8TXn8YJykUijQKsPjWxkKLst1GiXcAXa8ANKTHFhPbtjQtp1yVNicMUz41hbB8hPnBrRVAuaJs3x",
  "key14": "5VEFBVe7sp7T5PtBzJnttV9j6D5PB85qQ7c7uSe7Q3mSg8brXeP8EFdjaWBSebtNyUVQj7cMQZeqY8ggyoBUL7cA",
  "key15": "4ZGUXXNLgniqPfpTfJzgMJUWdDHTa8mBM3d9ycuiVuimAZJjPfMBmtvr4iC2QMYRHg5uL7RgCStacxnGbRYHi9GJ",
  "key16": "3uGWEK9twa9si13iuavxyw7UJaxKQZVwALfHp97RvbstkVYVeAGbkdh7Ugi1HnELwpp2xGddHEhPFsUwpZcmaEhT",
  "key17": "3GkWFsXohWmTGcV1DjjkFiQzdKnP2B4vN4yzNSwP9YDyDozvESNLJxdz1NbYZpwsVDGoxFfvw1E865HWynBN8Zih",
  "key18": "44mYqwmTnpYDC6wbAWqJZXto4LsC9HmGqVLNwmmUag7f2LWaisxpYby27uzcpZEfZt4LgLjCbaV7DmMK8G5T21Ko",
  "key19": "4YFXhJ6o2zR9hjtN4TjsvdMnABvYDx8ehGnQLQBjp27qTH7H9UPJNBs8GyHeTHcG1r2rptdMBHMZAVr2ks8YfzmB",
  "key20": "34fRkNntSwHYgQHJRwLHBBf79497tsv9tthPmGPf1jno1yrXKCJvrAzJMmjyFUVnoGXj7vKMsCJQi6Fbcyw6kVha",
  "key21": "57imLCg2xLMzb2Ua1h4XMm6AZghY9TQ7Kz5ZMRik2tv4f73379g1nopSapVbjFyrocEQ6FA2VU7u22zsVu8JUifZ",
  "key22": "56HYuNXAScU3GwX1mm5sqq4iJ1YZYuDTAmYQiQ4ftqEX2vmteg2fZsbCKMCzo7jwJrD5T8LE1F7TsPzSMCxSfxs8",
  "key23": "94mdJkqfjeHtxHyYRPkbzRt7oY5AoYHgfP6qhGz1cs5GALjYRmFE6y3bCAaNMASr2D1Zv5uMuf6qjj59UJWQ6pJ",
  "key24": "6423qDzKK8ujGoniW4wLWH9XmQmJiPLa7RoMEgn8qoRX4SsJZNVFAwESyvWJks8jR49uBBp7Y8GbxcT1a8XkoPRb",
  "key25": "3urjitgbP7gsHcCABbXcEyJGTWfvXTeX7g8PE9rdtDt6o4Y9cKgg2paJkBMw48p8LxFcNAUT73Q6o2BEZS3nZ7QY",
  "key26": "5bvRkbdQDZt9pV4DgbJc9iqxpxFj8HB6T6dqtSgS3RwTqqr29aK2zGdsAhhuREetieNSCLJrQCyxFxZw7rHeW6jr",
  "key27": "2p9sUGA4unP2r7iEYkkuEHspGCRgyJJuuRfkRYM8pN8egxmRmHHxDdQ5Ceegq4U1mHRZC6Xanoqr9kJtzaKSkj2y",
  "key28": "5dXXaCHR4uHtFnHCQVqG9NsEnG7Lx1qvUd41ieuR8pqBXDJ2b2z6wSHqsC4gFBagjpNRXAZwdVXS1d91FdEPubiN",
  "key29": "CwspMtmap5M2axJEVVVHet3PbyvYZNhm6Rtf94oe8ou9LQyAmoKrcf7jD2VKKtWD4SHXL3kKuSDu1firigssQ3p",
  "key30": "4fwHfqY7PWbJBgAd7mdvB9SbzqvEK9otYXfRfdtGep7fdcriQPqYgPHD7uQo8hHiGvG1gdH9NPBLeXqNs5UGSy8L",
  "key31": "41isRbkc7uE9NnRRwxq1QBk9z7XA3ApyWJhv94uAui8ZnenjrVW1y1XbkrW1Afj7u5Q8wPsNfjqWx9d8W9sQF3VL",
  "key32": "zawaFnrJssTcP2MXqKchWht9KeyDTmjrNjYYwTqzGVBKgJBBgUiCxpg7uR1iTqP4v1d5bPDdauHaqpVJM4U1s3A",
  "key33": "4LT3NWDYrPRBkEFhUpRMVuTgUMviWHnoruLa2WB5DwVBMDsefAaKMPRqW5E46StzZYfPX7E3RsMimRvAxA5DmJBP",
  "key34": "38sXtC6wvmHETDJvn65uQGAfBu8jCEN3iTzFR7pLVY3FDnvVscpMu5WjgKb2SqmW9AP2uYqkBPrLVymEgjm2QJQt",
  "key35": "4QWQ9Z492kuQQivg8K1b8chNfGkKVDkkrTkHcNHJkTZPKQXiKCD8qqfyUPm1R36wjfiBe98X1RvsQJja6z4qqAmp",
  "key36": "5pU2NVAUnwV1aMvUnrNbBDTM6YbUbteTHKF28xC3uA9dScqAuZYQv4pdTq4LJXmpciqSTkiAyKhk6xPGkyLkffpe",
  "key37": "321W3MPnJpNpG2zAPvondbNiVUrebpVf4mJjd93JJsEDmQV4NHPLzHkeGdu7VJZEjgF2pRZuQ4zgQMTLHUm4aiam",
  "key38": "eUnQE2dJCMP6BFyvyM9e46EG1wnev6Z6fwHcc7BKBeTeEhRmufT2NzUktLkv1h5pZeVGPBzKUfXSutSzCmvJqMa",
  "key39": "bQYq8L2G9pJ9FQ5e7whhRh72HiwZbYL4ivRM55ceA7aNaN4J1ULxYDTw46Xvn4o4yQ2MdSgfJJd1uXbkj2sYz7u",
  "key40": "5b8rqEz8frRZAp2uCvNHRDkWKHtMidTDTiabL67XbQ9iRcV1LUFEzfMYJRiaMt1QUgvJwpFQVfjcSGxVuZWgsN1q",
  "key41": "5fF79ymDM2mDv5kuPk9gr4mfv5YcWQe9TwJ4Zmu98rbT3aHqziuLzCMUFTPLBRxt76LZMzbuB4FBcWwtFvzayd4U",
  "key42": "yBTw6aEFnoJ1bUYd2ZvrKaVgV7kx1NKa13UxCApTby717VJeDujdFDauJZMkTGmvCRMmvNbS5R2jftBxPD4jP6y"
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
