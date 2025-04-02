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
    "4zWj8XFoZpEPBWFjt37sSbDrraz2kpobDTmgg6HvNJ47eFyy8Fxpa5aERRiD1YUYCvKAiux2CVGcctLYgx3168fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJTxzSLPCRu22i8FBrsMh1BN3eodFcZfDD32HpkEHxEtHnnbMr27qZJNTDypnUs52mSZ2ZeDSeRuknWfSRnTjzo",
  "key1": "2W9ZQZMSYQUjgnGaLjyYw8VDxD3hSFpj5eKHzKczt9WtQv2Yx1VQvczQsvWjJLSnE5msVREp5GkWG2QfCiEjqD1h",
  "key2": "21vJLKAAswHa8wEVdiZ1su3Y64zYoKNsDcqFauByZZi9NBVt626G373RB2yKgqMG8wfV4rRMu2LeyGToZZRRSmBU",
  "key3": "5Nw6Kta6Mr6idRYBhdGphJFwchCuLbsYpmWn4NeHt4imUiA2VsrgnZNJALCJhqP32DFLLskHSBQArkVGz1pU4Mph",
  "key4": "Dd47XJi3Zk8TycXV9iUsMEenCmcm83xjc2tkJNQbW97fae3LzzTVktsYG8VVkjeacVmTs21fz3djj2MDGzpWSuL",
  "key5": "D6iimWL9pacagYtFwe7GeKBVg9DEUMPgEWij1xxDHxYHcCUMybfH5wCSCqu1E9am7ZLivzT3aYR5uvQWAqceVp4",
  "key6": "2gEEYDMu9xQNuxFC42hfAGPAtPx5mdDJHLq2fPje25gfQwL8TQLMxarbNv6zfUbfm4qrBvTzcSB8eBZCWGYmbpn1",
  "key7": "54wtsci72VHXrBw1p147GsR4Mi8RKxAbYSKcTq1yzpXWf6hioZkpQtjzHpYjtEwgS18uogrRTeabjSbqWgmbQUZE",
  "key8": "5gx87RaQ6LTxKCyZuuuN69DsEgeZy7LmSBLD7gzy9seC3gZQMHg19mMrmoJrLsVo614FMgLfikyZRP22XDXXZ7y1",
  "key9": "2X1MceDZBZq5EroKyFUdk2hUUmhhaPH47b94JRxrp89Fa1VL7BLV6XfbPH3Bi2j3S8X2qR8nVMWTDHwMAEibTs4A",
  "key10": "2BR91HQmprjQeTy12SiMA53ereWVLc1HZqfSpZjG8Zb1Q8gA8yjQQUVZPCskUxLZsJtEXkEXg6VHcTj1MSDynuBS",
  "key11": "51c3tikdkBW8yFaxEijak3wHwLfdzNJVBfyYrV5ydj1SVvjb5DM19Sj2YB7VB2ukoMDzk4oQTmsqm5A3c9A2XAa4",
  "key12": "2FtFjwmk5D6XHrRtTZEiMuaj7ajPCYTv6bS6NiCrejmL8s1uGNyC6AQ7qEQraWrJpZVzTJmjBezDjVwr9j5KKHfa",
  "key13": "Urn2VsaTFww2z6L6cUw1dkozRFKAiyktV9XTi2WRscyN7XSspbbwUuJnzwXVfu2Xo4foEywqUeavvvgTuuB5qwB",
  "key14": "2zZvXLAfMTNeDrjWu9xuTUrmLzveUHceV5KDXEiFzKMRXfou2iJE8vSa4vVHkh32xJa3fhfFyyz5gyofGqwbGLGR",
  "key15": "5iWa1QA1B5zNJVdQnfQ5cH3sH5vaAqQtjXZPXAVt7s2r9W4x9ofSLDqsF5iar2xHFkcr7QbwmA8uMBQrpczwX9XC",
  "key16": "33qu6P95h2mQZmu9htGAGpBATjdVDsZZ47mb47VTZZovrNKh5ACywWMCMAVLdfPHVDWMsZPTTvJrBYWfg3UJ9eGN",
  "key17": "YVrMseStm9Mt4mbQpsSWnNAono1f2E8wmiKKB6fhJASXzRrS27jmQX3BAvp6WRHc9zmRi5sbnSHfpMFGz7hdqou",
  "key18": "Smp6qzXK2MRPETwF5T94Cp3DRPwNuJNT5oV6Bh8ZtBnnVFGi75BQyo6mNT9Abh5vqBwKtQSsQc3DQdBM5GP5Vn5",
  "key19": "31amjMpoA3XLxUTe64axhieoockLyDajLCWyA6wdpWmAvCMixB4nXYkHAJsJMrQGhjbZWdZAdT6yViBjUSnaSaXN",
  "key20": "2Ga8H4qta2Yo8oveWJfUUz6a9v2aQKRR6AbFmX2JhcF5gnyBpsG3agjK8V6ZL1jUUkaKXY9s7RphUbend9KKe2b",
  "key21": "47d6hyA8zdrK3b5uvzzeEcveA8qaXDgVgHbG7ntY8WEWBkSXubV3AeYWnz3AjtigpdDjSKt6vGfCbsMJZ7L5tfFE",
  "key22": "7MhzVyadtGGsy9NjwZdgbc6oX7qd9mB5Hk813ndgYabGPtPQVRmssDrVGyBQzJhiy2psvkwecZpGGwztBGVK8hm",
  "key23": "2UeGXKnNdmraorqoJg4362q8RPhcWxkbKSuAEazEUMjsNxY1HXoFVHbA6hF6hrr63ngr94poJ2qtrPuPgnVpUyey",
  "key24": "43aLqnKSfCk7LcwqoF79BkDS141GX7zrrV8hA9EXcPwdoo8G9wBcdaENwUsi1JyFuB2if8ocmjxARwK6Js8NcsEQ",
  "key25": "5PFjFu4RYFUHPBGGhTC7YMZS4FRcnktKPSjUYqEveAYrW1fVQKkrcV9CKht16v43hjxeKsafmqKVvrTCeFAAPBbx",
  "key26": "r4pqpYoZZ8rPPDKGMCxjrcx19fZzFayZe3ENmGsrVVCxEkRY84MgG5SB6JKWWminTTosyZpWSSUi29DDWDXojCE",
  "key27": "3sMUfomaggPSZvs4PpyzWwrG9amZQ9yBwSdjpkq9hrbyCoeYtjcLgPum1YAQVvkfYfVh7nnfC34UGqLQPyXxor7Q",
  "key28": "5oh49s5ph5QtfP6zKv6bZMz1DYtKF38h4D9W4mgFvFT9jvkRAqaa5wB8xXUfgSPfcjcLAVub8F55s8ixRUKrtpNC",
  "key29": "37nenuqQiALh7Hrwa7hxTVCqgTjZ5B4fDU6hp2HevMFxKPnyh1zSqapQsvVnj95YLMCLtcYj8AhENc2xq7Eh1Fu5",
  "key30": "5Q6FjR2Fo9NcgYPJs727BMs1dNiAoMTHEMuGrGw4oLQ57g58Q9K6vbhb2UuV7hjsSM7WnkzBsNYtsYo5ErDjKNmN",
  "key31": "3WC7HL1kssELqFFA4XjR2YEyLAP6L4CyT6SdUbtj4KSJiEA59bm1KLbovhzLsRDn1QqgyECBncP6Ebsu4Q5KaHqf",
  "key32": "5gz3LQGhembMUzeVPRqZuP5qLHD1sE8nVRTgAQ4tahAzuWuYt9vbRMfNHioQqNkSy3XQRM4MaJgJ6p1TRRknU5vU",
  "key33": "4mwYnbmkjcLHQNSJGE9cAYZcfuNpxHN8wv8nanxEE9zFo8eofxtLAUTMkVueHLMgxnVN8RjzviFtmjjMRgkKJJkx",
  "key34": "5ph3sNvpa9f7e2JRi6Yij4ic4Le2GoMizvrKzxT376hbZyFuti4cpYG61TMCtoXnqPzmjQTax1aL8JP6EXW4aiBF",
  "key35": "5yDLJaTHN2yVaiNQHCsWpqDViymoJXTk75PKwU7wZmYtRQRZaqPsNcBvRoNSvrRXUfkYysLiPrPPLLFvg3hxury4",
  "key36": "4g3G6Ss88Kie9QPQ5QMVjgvf9GwX6WA4VdZyvTYBEefTpjntvcZrMgPG1bgM3q6nE3YozMBAirG3arMd15cDeesF",
  "key37": "38AVAWDtRLdMz6GEtXKYG3dzc3EDEnwE2eNxJLabfXzBEiZiDYbAnZ38AxD4Hc2n87pcp8PQGUPDCJCs5qikQwmD",
  "key38": "5hSMW4ycCq3egX9wQEcn6cuufs1AzcmUvjGuxY4Zv54gtUFN1eWWRHeAjGwnQ5HLqLqhzVVv7SHTi3ADncSFrYMp",
  "key39": "3wHoin6bgE9JRXU28KC6kN5ugFH56kXJd7hNqq4vsSZyFwsWtxrqwvzuyUyxxrSkXafNynfasMJmDH8hhYMXJTZU",
  "key40": "3qy6WhEtg4nJUTmEr4t2nTjXfMU2vJXNySTDSF55zz6KXFxJpDPkZ9Zcjkf81wW1ZEcNf5bP47M5SUSBK5VQXRp4",
  "key41": "4dmGD5K4GR28pxLhZonSwD6keYq4m9kEfHtAAiFj4qjGGm5xTV17hnYdy2xxJQuy7W2ngmKh5EJez3nNJFdJnC19",
  "key42": "4o3jNH2J6T63E2ZdFdfJmLTZatqW9CEFyvnFhk8C84tM6d8wiy1jru9LxXnQt4uTnL4x6VxYMSwjzkXs1ARVzrZF",
  "key43": "4DQXpdDoh2KRnJBQ1G1tUdYj2xpoo8ZVTBurbx5pQ7Ls3J8aGFW7hwrU2V51hjt99HD6Ch1RpGAsCqzCZ4X9BJ3V",
  "key44": "64tPLw5vfhfGzeeLVXubGDXqpu1rt1W7PWckAcfsfRpPooGwoeUaikf49UHwcTTjGjh6r3MdREeazDapARJD7zXD",
  "key45": "4PbJM6sZKLzydokB8BbN15STQN59XMfh1QvDVa11TaL3tytvieKvZSCCGDeNxddwsNp6pQj1Li2RRb7hJAzLGbEU"
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
