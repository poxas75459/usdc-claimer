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
    "4ifjEgY7tYPf8F9ynQCETGMXHUT1hjTFmWRtpCyWuksQAnwbuoAtbsV9sj2BjyAUsWUtQ8v9iEdSSwh48oZ8vgQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHexeqiGqwXTwk863RbtGuKUnFk8HRfGoZ91BKYwR6aQMatWxRGp4p9sRS2Ha6q2EaZEZNiuEnbDYBLLYXhBRHU",
  "key1": "4m5icZzwPnLVd8pEJ8wMRq1fx1XWpuZMR7r4LW44TAwv7v2DrzUxf6a6BuqqmHZbmJkZm9Su2r7hprStebRFsYbT",
  "key2": "5bAfy9116Zu2NE7iUbeg5X9fMnfw9gC9ctKqreCSFnukpofV1fu63tSrakTPUojpDrC8xWh7JZHypr6qV9C5yEmy",
  "key3": "Smv9DGw55EjkjMMVJEDQM4ZD3tHzzWSNMureXkVD94JjC7PbPXso42esLmELHG3oTLth7CzeBbCYB1HEBnv7Yut",
  "key4": "5JufHkNacYhiWzVf2q5PG6ECt61WfZfhTZFAgWbAePynCZVFNJHpj3wTCtDhviye8GLKJjYLp54vn5kXsBQ1dWja",
  "key5": "LGDviufA1dtdvDNcNgzqoSp6VVdb22cLiC5hwoGE8WHKLPbzx6fLdbDT47nMMERJX2fZyvEMsFdgEnmutjnkhVg",
  "key6": "5yJCfvRJrNRBq1XyXNkFbTL3dr9YBzKszSr7BauFaHxWE8jnobaRjgezDcrceQ13a3Nh1woVVvUyVUj917wN7Bjm",
  "key7": "45mDJW79MmpoWwaFSwSb1W4dfyQDuRdMeCp9zs7jZucunUJBNGboz5hAgkTCdpTHMTgtWszkTWdbR1cq6bufo7fQ",
  "key8": "Rk227sZZwVcko6YGPHHG9xEbmoikANzY1F9zYS5uqNU3mtpitH91PPKYj1DkoGn9sFo9366keWVGysKAgLZr7Cq",
  "key9": "5TEnDV12ahLTZH2oRnQpU34XtjS82xxnxrPKuF23tQfcnwsAGFibUqYiTLm6rSV2zxRxmq5DpiedzFiEDRf7NBx7",
  "key10": "3WopH6qR8dPLLgEnp81wipNDf1U37Vc1DUxU4wBZ4n4EqWtgA7M5sV13D5BPHjmnmdbHG8Nu1ut2YoENHXLHMk3W",
  "key11": "sdrc6ENiVmDHynG8BntvrT7455MocpXdGhNxVdYha2VP7MLR8y4FYDDxuesSg6Rn566jEML8o78fxMRi4Rx2dtw",
  "key12": "4zdQbyWJ65td3jACS4hyKag3AGQd1zv2sxvkwG6NMYdT2Mv2er5vpgSa4V4JLT9RXPG253deQmNLV5R7GMXKj1cT",
  "key13": "ysPJVh8xabaCem3UV57oNUeNaQThN72HRBNGAm6E1MMfD1s6PkjgXdp3AhAtuevMQHHFrgC96vVp44KbEL3yFmp",
  "key14": "xQFYmSb3VQx4HFin28QgosEt7FUwEFWh64axRmsixRZK2d7UoRXyds2WsstoyfY6FCoxXcRfrnhzHrVt2yUNZE7",
  "key15": "EbqBZyozARE5iL2wpgppvoqjE2qheRwngJWWusFXF3ankqTEiwidCmxSN59coQ8pEx5DJ2DrUzQn6v3FefgminM",
  "key16": "2Ja8mE2fpKySB66iUdZys5dAVAx8ZShX62K2PTrAv6awPoVxRV6XX6eJxLGX2zY1NfwEv1YKYeNbbfEYDrRLv1HN",
  "key17": "4jLYP5qwJ3AiDMLav1ZxsrPZTGdeBhoTTcyT6vcpXt8aSmKCz7sD3tZb9mkLZc1y7KgGGBm6dYK7aTP1y2tS2LL8",
  "key18": "BNvww89uBYjgFbdWB2iDBnv7nEM9UTxHMjooSfx3pB77iKbqMHUEBU7o1SLVngUnEtH8JkMZtJoq64QuuZwW9S9",
  "key19": "2p6Y1joaa1PRLGD4CKkerGUS8ZC3vFr83p9sVSQhcSogQYQqgZ9xRmkYnuLY9qZZNL67aGPPoa38i6DQwMYaMRue",
  "key20": "2YB3LAZsMUvpA2XBNA7GV6xfHVNPpaQzsqcgaej6Scic5D6Z9pWPopfbAW2WrD3dvTUwUTcJ9k8oieF5bRK5bAeo",
  "key21": "4uNTzH574ys9nNaLrZnKcfvULpeamorjKFV1knjTP2YLhhMtnV8uBPtkknVDLD2RrHMapduuaUsevfB1gFxfQKbu",
  "key22": "eruMSwH4E5YE4aner4LaCV3uf4QhzL4fYfnkcNQiQnRKVRRGXwXLrykkL9yZUvCMdwDA7VbqyZPxNcb9re9tiSX",
  "key23": "4ot7fhz48LdZnHyU1bqgrxc4f5zA2tobLCRYVWB5vUg8D4FZ8EWDudyZV8fUSEkZ7mU17QqonB9cBKBQ43qnUrX6",
  "key24": "2e9Dxhcb6U8XB6Nfp6ZLwxeZfCtUAVNTaaeGvsP1yw6ygiks72PWB8V49NR9Lm2aaTvGZjDt57m4kHDPCxbX92YT",
  "key25": "35uUxBcb4btsh5uyjMjEJ5wZZtZRXC6CbYsvDqxSgXGq1t9fjY5BTFCTteRW5FzZcWomArXbrp2HMjRSfRXjXm6D",
  "key26": "4FrE3X2CzFMuvjBdpLv7BPoRjELu51EC6ynuP5DhXZ8po63NxVUErw229tf3M4XYkeDXa8VeotRgTsnohS5hAE21",
  "key27": "4GeXELGeP7MUc4u45U8kvxcK9R5KTH9h8sDPBiRDZoqfvcPPJMkyrnsy6TigKg6138xm3mzUaJGNicGTiYRDqwwa",
  "key28": "DegHtahG2rVJ2aeMWBdSQafeUw92L5keG5mWp3tB2EUEJnxawXW7saz9w7zY6ZPbFPPj8KYV7ePz1tiChxfyBdx",
  "key29": "25ctkJ1Ri2VnXtBzdLPSLVLQFgCMYqJfBGGonEVVR5EanBvxGudkS65h6jpPC9NjnKigYysheyd5FfiLHHoyiNhH",
  "key30": "5yKtD1XorSgMSbicBYEbbvXXV8CNWQR9KAXgEvbG5RJPsTeSW1zidD5oVLzVGZ2PpBKirbqLvaj11ME83VjEkRh4",
  "key31": "412PtBSfTHkZQWksA7id91RNfLqMKatUkbk6XJw2TzHM9GvGzY2LvjaHfhP4iXtweN4rP9ZwBBamKYGT1pC25Xf6",
  "key32": "3EZc9evwQgF11bbzL5vvN9UBbXgtL1CgvZuwKqg4vhoAfASqcHqr9kf5qZFFPXmcrQ8yT5989y7jA2fsfJsXHArD",
  "key33": "RWMhxgNcPZbnTqoxwgagK9Y18wmjuWyVbYSx3wxYB4xiyUaLCuGvv16vpWfpzeFwAUT3DbHxs69tnHQ4egx1FpP"
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
