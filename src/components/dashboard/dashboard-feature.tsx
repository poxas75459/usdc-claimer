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
    "62TyKyqsCHJqVj8jrCRggfB6JzUeVsupfnP5qGLzdtnJHHzbZrH32krokYFKgGYoqPznGtfi5i7ZeeZDqYcoZxD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FsDSxZ1UqDhhug3C1wh1MSWLnYy1RPExwom8HzYqtuMFe3RovrR4gH9Gsh93qx1mHMWCaKP7JkjkyzYoyc4B3C",
  "key1": "52GyCVYsjMKgS3Kdtkg3jiw4KM6FVVrTdjUo4WBfMgiGumCAVnHm9aCUP59m1s6tyV2sKzpWbopZUGexySeYdgTd",
  "key2": "4gwKEToRauS3ZJKVQfu8hkjutXJMKbLbsUmUN5nbq2CcCtNfQhtnW1FNiwNgakNUn1pu2TV9FKD8zcaTb5ZyQMDB",
  "key3": "5kmB3aMmVoCHV7PPadqFwCa6Qx8Jo4VxcPWdFpF62QWKQphvF9SjP9bjnJMtAm93Hjz76D7mipR6mWyMM4YP72fz",
  "key4": "3J7AEu28MNezjhEeWbcQpHxMap16vTsac3C124uyuKFGzDtRX7H1tLCjgQkLQT6raMjsJwzW6y3nafERfgCdTuRT",
  "key5": "5MyVg7EgQ2NQqYpqHHvxAtRD4TyCFSz8L67C8LT8kPcSseNcLtQzjdw7cFqUg9jNXDViZQTQ6KhSSnpbMTps3KDq",
  "key6": "2tVRwNp8irQHJNr8WQAGNc9W5dLv144D975cqHzeRgoWhb8pTrdz96mP7NyeUHWiMUDj9M8rEssXTwdCiLWyKpVk",
  "key7": "61fhN7ckPY4uiR4Z82NqJqidC6AtUMMePzpKzMkgra1kdk6W1vyaZxTtAm1cnZZn2aki2yBczhFy73ic3o834UgF",
  "key8": "3iAoy8vzdkiWEQFdTX6v7KuzwZQ3yyEYJKXqyM9PP88Hbja2XXSpe5YH8hh96cyLkXsNTBfd6ThDfP2FFiscuKrD",
  "key9": "4S6izAWHqwU1MZhcWbHatufCeUj2wT6KCxRqJL9i8pLH4RQxyD4qBZg86Nca7PrQiqFhyKmC4UGQQqVArw5J72Bu",
  "key10": "4sC7aX9yt5GMmwsPZeGRQwrGQCK4kzDfr3Jyp5Mr5oWWG9Q3yy7N529n16jz2UeTEHuE9mU6GgcDFewyf7bnqyvk",
  "key11": "3XEcjB6ReHn7zQHVqksL39YP3me5RWVPjYpWw6Vohs1vxwWVm7XEnzbF8EYwHVARGedvTmYDnV2nbKWfz9V8F7vT",
  "key12": "4gunR3pWPqBB8FCQmyM28fzKXVkjaBhNHxJo5JkdVKSTsRgWhk6vFkbbVveXupmHz85Ny7s4d2DVMxGjDZURSdhp",
  "key13": "5iGZ362A3n2tLovTHZ9SZirNnUfN4NEsrvTsX5LhXx57kW4vami7aMSMPTi1TUSVti61yWpBa4oV2aSTfoUQB6WW",
  "key14": "5TyhtMivBpcGFSjopMjj3j6ixfVniu4FaSZdAtVEtD5U1x2PJDK72LbjjTTzAw7tbfeuE3WWUyh2GXedLTVNpAx8",
  "key15": "GAWN9L24UF5UqyWqTcZnea8c4WY6L3rSGazYpqF6Qc4h8VPKU2Hgse7JyiV4VpgtLzmDcETp47rdFrCnqoXjPdY",
  "key16": "3vPYAT3FMCpyefp8B2comHp73k2fbFvqHfDpkmHQTNL4z2gm3yXgjK2TR3GKCb6DbkUVRYAQrbXAg3JXJPiQvWWm",
  "key17": "4MgUqTKLubUfTxXxqEqmwBRXnuttj6afXDhBwDacB9mwKj8kDRrY8GFpwVjRRxvUfpyijdZK2VWXfAn69m99AwuF",
  "key18": "AoHVWVzSHwK2f4JBL9bF91AwYMeYn6B1NfaTggPuNgjS7imKXjCwQCHq11VfDh7gQpNgyMC6DXAgod8a6HL9Q6W",
  "key19": "5dz8cXhdx5zswRbSxCgEEeDqyNW2UFnithW8bnKjFLZV1KfHWoy7pHQfbwWxX7cVKNfdXJTBVMuApgJhSDnPrifW",
  "key20": "5a6ajeDJJmdK4irS3tK9A3YQj41PBkEqpqBenz2MAaWm3A9J5M8kJfU5ytBjAxsuu5ntWGH18XYxcMMvJZE3Qf96",
  "key21": "3Jtf4bKCTAUbVbXgvDCX8wf7C7Az9a3UHkw18o8Y66hHdf4sdyfMcpn9LJqHnBKHaRmc3eapccjGPr5fHYBc57gs",
  "key22": "3VY3aASgeugxCSN5UAZW6L8KpK4QeYEfXqSB5DqcLLr5bowRth5Tij88aM5PFJ7h3qrHNCBT6ofEyG6hUoUKAjc9",
  "key23": "3e4yz9tKMSZJNLk2yEKUyYfbPwMUkx9tqvU6icSpFirVC9gAi28cL4Rkv9nZk3TSPVxtiWa4wMbFEJEV8GfGnbkd",
  "key24": "hdZDLfkRNaJKhXvamiQ11oqBiVTmTz4okibM1QeLQPiW1VtPwEZkdcrpV9MQoHCtygVehgXRQ1U9zr5aR1e5ReT",
  "key25": "RBaTrceU13QP2XGG5CAk6rRDCRQEDwGGPjutCqdE2NFbkapeCEeVVPeQn5BcMsXtFLwmG1ZqsfiyzC4ap2iVbSS",
  "key26": "5R2D8yozfykAGyWaT4yKUjg4NFbD8kSuVxNGtfM9gHV7tqiH37uSVdiqB2GzpViW8Xg9dDG7Cjk53yzZJqCoGEQL",
  "key27": "Qyxe9KAcUSt91LNNxzFeXvd1KqdEV1HQhtpFzieNTSwAP3TtPDxFb9HQ8FUzxkd7ACLEY1HF9x4ex2k3KJo6RLF",
  "key28": "QRyw6TMMnWQFKcTMjroWTQH78irJDtLGFibS4HHpG3Lm7R88XcefZ9r9GgX385r165isDactCw5FYgzKGdFJKwS",
  "key29": "uWD4yDrDmXcp6cvKAsUwj9qoVgwcM3t7dtL1zTcrcD36RzFvcsYrDk3KF9a9XGCtgE3XoCQYd6EZcHkLQcEyWdx",
  "key30": "39evhpBNQMR9oEXGmJeQqYgJ2UyqLo6wa7RCC8BDfLVeUyQ1iooDatcg6BBeUVUa4pCAJWU6ZCFjXdf8DJa7kvJc",
  "key31": "4GU6dbBeYEvtf37dNwQkmBicLdrdpKEBi5FjP1fdvxzG2qaRBnfoMp1RSVrX4F1YcCXHHg5QsuTAEXBvwptfa3Cd",
  "key32": "3sSGrMhJnk7wtN6no61GQUfuH7tEhFakLSVCKjk4yMHooEitdBBjDpgCyNtbKxQrkyWfuR2EjGLqWJi8UmHZ2vKM",
  "key33": "DjdPuaAfxbZ9kzNK1HCyFk8UfDvNVPhPsPhDRZcFBQU3erVmeg9y9u59M9bkEm1aZ8XsjZjU9dbAGrjx2JDtgZC",
  "key34": "Pz8ZNJ9skoMkArqps47geo8B9uXk6ue5cAAuHtJSFECKhUAoWzaGLCX4eHstduwfyvsV43nra9EpC5uKPX1MCoJ",
  "key35": "8hSAjbARLEzb1aC4JSnKq9DccRwwnuxi5VigPviGnL2yprr2MzpZ6YNGt7DmBkCJXhQ4uXbdPqTxW6D8cgyhLdp",
  "key36": "KfkWddaJzEdtFDZSThiFYwXRmNVfsYyNJsVTnkMZVjbME72SpSQkobmJPZobg8T9tMHs8cSYEj1fjSCfW5MNZLF",
  "key37": "4vgC3L8FLJ3nngqqmt63mCLK9B83wDq1rKT6E4qefH6EVgTqgywtmMPQsd68qoLGg7o2fheztBVRZUK11FWx3mX8",
  "key38": "3e6u7Zrczy6dojazpzzb4wa9Kd7sPPVYFVQGS8x7Md2PoeZEJ5piuSk2pZPUdPEjKzssDrwCBni5Dfue3nzqBysw",
  "key39": "WeHt4dpmH4tfYiAJH8XMDVybD2Luxu3oUkPhvJ627qxKCxznZfUwuhZfg4k4dnh1T2cci7fYvGdG5khDpQAUhx9"
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
