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
    "4wFDREhrkws1WcZGbVv7Z3WQ3L9btuurcXUMmNQ9ExaxBBTpw5JH9ZqPrcVtS83EENQn28yJqMwuyacsHvS4kacF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2te7ob67HU2Py3f6bRi4UWyZd4NYQUU3VzuuVk7EDmGKQmYhUXRT8uiTDFEyvF9tTSoX9dqYP9UoM2vobXeY4fcz",
  "key1": "S2XzwWG87RKmxjYFXFvYZjZXjs6QWjqLDkwFvz6sxhyhsUvvaYq84BrKwhsEZHypUkwDkoFWkfKrpTZfRdLZpXY",
  "key2": "2kG6u4gqKwPnM5FriHgc9KoFxscARrCZCnXH47FiKztiS4YMbA4vaXgSYT6Ks2ZKmfWDh8HZUoYpTv4WgFyGtjQF",
  "key3": "2rFNyc6AWm17aP5g4xCrC8kcMNkkN4Uadsxy2HJqQ7FL6BNZVuKUVgJmjD2Q13pnp6ZiiGC61Hbt4zSmBLqxtj8T",
  "key4": "3uSBqAdiQFmwVxHXSjxEDeKqZHCwvREiWmnjPunuH8sbJKhXPrTLx2mxX6khkiuMhjfBqrhfa6yvvDcPUuZZd2sb",
  "key5": "5359pit8myARjSwoGM1Zfmc7Kq1ejucuNDTErXEJQYNurr6YSi5e5d6kUiTkhW1DmrF75uxJCHDi3Eh2rNmSmzet",
  "key6": "gTdo5CRLYk1C2j1BiBQekczej2dZN84fzwFHoN3eV7FPays8WLgQ7ksfyEJhx2AD6Gp2H7rut1cyzXUqguYH5Ew",
  "key7": "3kAjBmdWwaDCEjaiY5J9HxxojDia2LYmowquBM3YAtD7qvLctsTFE8g9kZhVkZW3rj79XzAg8dDQYZGrYZrTPbec",
  "key8": "28AZDtKVxQ66ELCxqFVxQRz5t9EfSLZxUP2vgSuVmsFpuEteHo9SeGiL8M5FkiripK7yM4JvKJXpYrAj3YPjb8Qt",
  "key9": "2MqV1geECYPP1FbrSn2iuNStWRP8Kh4v4ikJVcCM7bWkqLTndnyEuPY6sK3LGgJrBmiUugq9GpJPi2A5rfRVB9i4",
  "key10": "4ngzkB9b9wHvZ6Dsdz56bzPH3mYSm6ru29opcpsabwuYPzf9boEcJMkC2wLNGWMKJBqGEM9dd8dX5SuiLoBwvxZA",
  "key11": "5qapXhjBwvxxv2xRYe9aWZ5h7HMPk3pGPiXyojec3Bk4Pf1CdT3BChnqahMnmYoPC6mg3hVePabVd3mSBReDesfn",
  "key12": "2KdEFzYiNgsAZqGQHwdpPbZXMxt87oJDsCHV4yB96AxBeRh8nGBteqq8nXbVpxXnkviNYFJf6eC45Uq1t3fwV4Q3",
  "key13": "2EmayxuwohADMnmtNmLqguHsv3dmm1dFsCwVRoQYta6o7c2SHRYBNZ7X4Y9rWMVHPZaQN7V6yUzZvMk7FaxpgmFF",
  "key14": "2LenzL7xn9pmFY2wRfvhhGQotaJrukH7qmv9MPaQdnKMnETeMoKGHN7WGWtYjyEDQSF4uPJB3xXegYDvpPFhofQp",
  "key15": "mNdgR8UZLoNdDDRWfMjXVtWLTPM2zcdeGKP4VpxQsUmQ4rjvStWpZiWDYe448Rh7u4xRkW1hG6YehGt7yydDdse",
  "key16": "3qy3WceDPe6V7shB6sKvScnfokiivzQhHyKXJht8Duw7ZvdKeqJrRfuuxbqWybrrfviyMVWXezgJJCxwWD5J7nLY",
  "key17": "4DsApm3qXC8LQKfZuJWGr6AEZ4CRLM4g13nJfWzExSAGuDNii1zVYKQzbdfEwZYNvSNgAH4e6US7UA8khBJXiZe5",
  "key18": "3J1He8iyjaGNyWdGdTXxDhsE6RL4YYjNc8HrJMoMCgVN3XhY8x9ADcTQNgmksQ76XKSDFeJuwTKE19jpWbxoEDfp",
  "key19": "2h6yXC5GUzmiKDdWKYcHkVgxrQ8Rr8moCm6zQFhk6GYBJZ48KBKjvRUog1tHQYLuBEnDDn6hoHtCRKBtm3y2qRk8",
  "key20": "45MPiaZHTQWXCR4BbzemVTX5SiYPdGCPHtYjuC4XQBrdk6QqNs87aBNDnocP8KZnQr7KVvmGqDUDhkaPQnuiYH1X",
  "key21": "3vd1jXVyZHnVTNhS2ajCaicpGfTLuSFqinGXG7Vk5NXhV348fqpu6ASVZqyP7ucqGErZwWw57cPiUQSFNuH9mgE5",
  "key22": "7yaU1DyMxu1dE3mWzLrcoMSHHgFre2sBAkykknM3tuFBQNdGEJAQvQm63J2KA2bGwvguoBmx1XCgB9dhQowYP5F",
  "key23": "3TyJbj5ikwpvQkNRD1wUGeKmV4qrZQCid2Lo3XvdvX6eMm9t68Y3Da8XoeGtFUrgRoPYaJJP2jZ6WpLn671gifog",
  "key24": "4tBpm6uYDJ2vs482aoRx5yLW5h4mjuik5KwwKhNdrtqjufKrPVsffMnv2yvrd7DKgWEFmM8LWPLidPw7fU4Cr6qX",
  "key25": "rBd6P1Teu24pfGLWZdummyjHogeb1GsV9XwL9g8TtNGitMw1Ai9nksyWMfcFgcPGp9EbG8GdmMLuEiN4T7Lmv8s",
  "key26": "3rQXV8Uvk6Erfo4vXdkWpniBXML8ofy9kBhDGWnD546HTDLqiTCWcXv9ABFcYtxKeft5JGxSQ5WLMQNc8W4aKaau",
  "key27": "3eJdw3Re5oMkQzRcDFxREokaP45TgBXdhJ31Jw5Mp9FPuKjpzQSqnvUAduDv57DMEuUA8Rw8Uehcu7wKRrTsA2RZ",
  "key28": "4FQ2UgemcM6jDV7gxu78jnGG3Aj9VJrXYJqqLS6LyhXjMuRPMJny7kV6tHopMC4HoAFBAJ7W5VYvonLD9vYeBfyx",
  "key29": "4PECrnEZck2CwbwVSWCR5Faw4d1DFGuktXZr6nUdwo2e9ndpshmvkEk9DHq4amq4Gv6CV5ZLghiquXFxqPqfLanY",
  "key30": "5oCyuzJTaqGcoh75j6oeQo4R6zTfEnBVnAkfK4KvX4f4xmev4hwXsBC9hZ33nFWwoss52pemj9Ha2irUx6KmUZtN",
  "key31": "mFujaYRAff7sPughgApR5aQXUceCDv7CJTFUjULUTS4oFPykyXPMT5e9LZ2hs6XBdM4LfPnBnMoPiD8V1dD9mi1",
  "key32": "BhDsq7CfjbmwuLXyg7uLf5JBAh1jFnTzRB2ktp5TnhJqLAHKZeJczbRLvNQ4PhLPCWqPfD4uHcKaRckuX4ympob",
  "key33": "5sjBwXyvVv6SSFTDdqC2F6duWmX4cmo4QtRJhhLvzb1S86YH6UEQXLk6rNNzoAPNzqARmnT5k5ZDxiMJoT68NwG6",
  "key34": "5Z5m5eaux5j2kfgQQemB9yixn1MmXr3F5R2GGMV4JaTtYVLnDACT4dqdbtMzdvsAQVy4W6BhdCxeAdeJaGR8r1NH",
  "key35": "4ZdksSFheWCwnv5YPZQXh6hKUFA1exsiUchqRGbyvWTxMo83QUp9t66UnwgdzsAxhWwdZnDhWicn7cXGMsc6X1X4",
  "key36": "29BNFyzZExksBNxds6kNTJZsNQ89S5xUMPnz1yeEEG48N27cm4W8EPiGuqu1r1MHrmTkt7Srhh9E1ktPDd3skUDT",
  "key37": "2Rosc62sVMbAayWkvPmKNN6j8ZuK6JXgTJCVi1KrJHb1GhgbDtXnvyjyggpWUhi3jo726KSKqB2rHDQXbkhVWo3m",
  "key38": "3cAC6PP2cnHMPj8Wtg5bFavffx2w4L4tYH46AkNMfsUJSNd215E79bm5RzpKD8JZvh76LndMArGPcfnZVFWAi2mf"
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
