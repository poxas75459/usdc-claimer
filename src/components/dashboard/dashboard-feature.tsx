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
    "2cQzKmAozPp51wcdaXdJtwCqJFqRHAK263zuAHiFNb3SMQ4Kr8wbd17QAobFfxHsRsAK6pVNDGN2HYUdyCitLdTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPFrg9u11qg2fsik9gQCBFeoiDB494VCgdbsKEStM8zFCNcDTj97118boewDaah8ZRErb3PiFCt84VV9c5Y6hax",
  "key1": "FD95qjj93v8iNBBks2F4FsBQRfYNodjHex7georyWNTg9nhrrDqDMKCHnPPcMTUxyiDDPipcNgUyc8QZXK39thH",
  "key2": "55BF1kg637AP3coGHkHZ7dmi8NviW4ghcFtZDUkSgR8cJi15NM81PgLpqcDwGme4GZyuhzaNUbNMT2LLZqNSn4bi",
  "key3": "354dZ5rbT2Gu6j5T93cnMrxtF8YmX69BiLhL1AtjSrARLL5wt5KA6oXN5XZ1AKcSE6dAvqdC3Fw49fW5BrXTT5Qg",
  "key4": "XMoBLPCXGRaii2pvhP4XmsKzzoFL16HGQpfXqpeZGYVuHnxnTqcrkaLSV4R5wiYtmMA6o3hLcM5L6tw8itM8Gfx",
  "key5": "5umx5xXjqEpdCwZA5L1Kp3BbjLDEMVtbe4GY7peSDR9K8nXTHyGznKnVXydATHup9shGJKACG75xDqJ25jmEtdWF",
  "key6": "2c8o2zqYf686hsEMKqsan8i7aF7vYPBYbKkKqrHrChXJRuMmt8P2M4WD9XC6dDVqhcf2ByPmTfnuYJPW3AgFpfnX",
  "key7": "4tdmDpN7TTnardCcPcK6rmdYeRpwiYzmRxubmVAUhaeF7vnvjsEE4ZF9ZjgFPT2bRHqADibfK5bTgoFujxjsyFJr",
  "key8": "3SFf7csFNjjkvars1FoJLgim4ndeLWzkHuUtrcZQeZDibDj5oikD8DLJrpkGESGevQLZf5mwMTop8gRXEz7WV7MQ",
  "key9": "2WzKbc4WABDmxy6VgQNgfKoUkfk14V9Vjrp6D5Jdcp3U2q9uxCgRYPCDdb3bTRi8bu2a2RL3nEwSEwXo4GfhaFtp",
  "key10": "4NK52798aHBBESsqdqu3rAKGF3UFrGZDMPRjZ3iiW7ZStVVGjSxBLFALFAAym9sUhefznEAwT2EVfh6B5HVgDsgq",
  "key11": "3wSHgv7pqoacq4sRkJphzkLqSsACQJQTteKrssjxCEbztiSeLYmLkE5qKXBspirCdX3vuaGjt588EumMicTLaahx",
  "key12": "3LHkMAFNjFNX2b95Pyj6mVCRNPpd837qvtiGBXo4suB1ABZcF3nsgXVbWuJrVqeSAtQHhYVTyrwPUN771H1s1RC9",
  "key13": "3ThEqCimFskLR392FdKwHb8rrQTjXoe9vFZo4GN9nYvp9ep6HSxgnGcHNTaNrvrYDFHrxKwVPnuFXfRZUfCCKFF8",
  "key14": "5EunuLe7nMvjAkUsUJSfTzE3EVWpsrsue38uitSvZzZhJHGfM8LqYD4XZcP9uy1kJHbXLZttncNkdZW2rDBfmqqQ",
  "key15": "3sTS7jVdzjBuGAkR9jBytDXQb4R2vJg8g3NjCmed9DqmDfKHJyNu6F5yR8BL8Zu5oHo1B81CXTegbDzsDNMeQF2p",
  "key16": "4Q3zGERacQz4gJtXbtPWYSEQpfpSeHMdFTQFRyhbwJyCQSkVsGBE5H46qSYBSkTun81MHA5tM7xUVCmr17RncvaX",
  "key17": "W3VFNNmKg7HYWth9w53EFeuVcRnuBfwnMG2wg3QEAF66EaGkLekmteoQxzDrUTrTRJfJRPWr8ebSthgX4t8mUvB",
  "key18": "RBUaNsKxR2dnmZNBi5tWqcUUojZ8nK6BYTKUJACE6sN2s8azAs673z3qsgkdVVkeC9cHvpDgKUggn9fRLvay5cz",
  "key19": "3w95MQ5gdxoKRDFiMdRbqR5kJjWw2TaybJCcb5ydpvNrRGt4JagsFC6DcAdC2PiSE15ApU9iazqHNygEnLwqDfi7",
  "key20": "62pxxPAhj3epsxkxprBQ7W3EY6L9E9R39gdeiYq4ZsLF1eBtPkv6v6KxEDWgAN8jGE59gYQZFT8Qf8WwkJqpG45y",
  "key21": "3ND5LXWivB6LKAnWzvgfAQDtSdS45F2pfhngVLPKtfDJTYJNL9TuUECbFSGuv9MDBGMPD4Lpipi8PMss2KKwxcCj",
  "key22": "3W5FVuzCXgMDT2W7z3qbFmdGUeSS2CUQ9C1LAyfEudwoUrumu2ghfsMKT8kVHH7zwG7sBm7JvyAWLBiLCDGASMmh",
  "key23": "38dMZxvAaWboV8eQ11QhYSYVERXLfSsjXDMmYbJC5qykp5GnEMq3X7syoGbzfb5tTjLN89ZGXEzqG6uuXMepaGoV",
  "key24": "63MkAfUTQcAkxXA69EwWUcHsC91veGpKb8bzr533mLkLz3hCdbxQPNEGWD1UhTDjeK1p43ZbRxXyc1TsjFMx49eV",
  "key25": "3f7ji8YXMEjwdKLoe3WcgvYvvoKqs8vXhZyrdtjur8U9diawWQ9jQXZQPUJMw5nJYHAVQerfVL4pDJFmQANZWNDJ",
  "key26": "23ABn73WcQmAGTTnAbXZUX8ENqit65h155xryHRFwruQtA69NeuZ4y5sSWY8XXLrJEM2Miao5bXmy1FvCMBxd2oA",
  "key27": "5yxx3sR1Gdv1SBnUjcKTwi72WhvCrBDz14ihFiVU4xT3S2bn9fZFtk4ohgfRbrWdegvf8SGVAZmbj2JSDFKTEx2k",
  "key28": "5cKc11LTXADaMg3THCAgD3CnotwPCD5H6wMvWtheqUPwRdqMpaEPghfxYtxPZmDq6VNbwzGjYVZL9tNvo2WgF354"
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
