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
    "3TwjJ1MLEgpUam1voHWhEFsbPuMfLBBnHLC9WeyL6TQYzGzyNGv67RWFjhm6gecpyTzinJK56GueCm7EEyV4i9zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSmGeyvGNxsp8pYBnDkxeRebmHS7KRvgUkiacKnxgrPWqEi7ytXj9N64RzjZVWMbMKCYcu8P1CB7ZtxVBeUwMue",
  "key1": "3VzXyMoaa5Aee33JmacenCrs34QrEkTGuhnyMEety9pJZRn7HQKyqkSop3XXVeWmA1FcPuwYBh2VACVHitrfqkVL",
  "key2": "5tLggtrKRQXDou4TrbqKEEdbPRwXX8knhYXJbWsbonJTEy87u8oP8LLc9HxKn1uhjmg7hHk7TiEwxw5TRknbWmDY",
  "key3": "55X2NSvnrdekatMxBtjRXRsC8nKHtVmiDadB2Gf9TMEb3KzgdhpgqBfviVLN6dj52R6mMS1AVxpKL87rR2gvBCgV",
  "key4": "2cQ99WmMFJybzS4r7376utHXU3bhbDwaq5zEJqjurmHkPitRam4jHr6gKSgwwxkA4NT8u2Vr9WCVuJBVkAwUn4nn",
  "key5": "3q6v1gH4VcGpWtnbUSs6bu1KA6Et1qypCmUERUP54p8wYM8n7HwtsYCXjvP47UhfjbTejgDbwazy2kVQDNiix8qy",
  "key6": "2jyN1e6EGzDBLKQj1ZmR8CJ2uKseepWAkfcJzz1yrUprTfDG9uXy8uZmqftUhd1LL5YJ3rzJYWZfTLXUnznWm5f1",
  "key7": "2fpgmYTR4K9MZsqwmF7cnV1RB9ZsLHsQjQVXcNKuAEPkAmDYWa6ASCjQtf73cBDauLcA6FMV98jAL7EhLfkdfbso",
  "key8": "2xkdKfY7QfvNYrAexU1TX2AJQ6q45bSrMoLUtxmJTSiVmoHtNG5SaVQiek4fo8AKJfpCSwtwdWd6KkgtN986X2MR",
  "key9": "4ztd2CP5ASWZxeT4sdhGPtoBPGrWXxhpTKqoevXW55WXz1meqQJcLku3CqF8T4mm2pMZ67nD93taFo5G1duq38NY",
  "key10": "4Fo5shYnBrRCMq23nWGFRcPnSfFpMyZDRpjVA2VHM1CZi35iVNMkD3oKyQeYrxUmzi3EzSGgpxvTXcPL9C2gL4bT",
  "key11": "Kuz3TT3Rzr5fnQMmYrN8wruQHDRkpxeJJDcBYMrQfqkKpy6W3WJCPA1wW3vQNx7Gh2WES8M8r9HMHhAYYHvkXXQ",
  "key12": "Z6VnZBg5JL4Dcm4MUsExTawpC8xfw26EjQLwXW1zE1cAnS2qGvwpuag1uni45749bBqgun1d1x7HVvvAbvVxcYy",
  "key13": "5CNA6BZovLiUqQfToRSoiHisCMGAi4pc4TMAfVasuMDFhnGj7fdoCsPmYXPDA4T53Q1jfmX645xgFKrnXm8VnoZF",
  "key14": "Uzu2Cpgtwe8fLY2RsTqzoLR7kgi7fgu8D1jW6W2jnPfP34Fi9xTKCEHt4mJeAV7debnj7ZR7eXEWv3WsH5s9uGX",
  "key15": "2jwQoEoxKgRXDUKn9kXL4B25HfmPi7LBEfFn7GhXzicetomRtBVV94aovT8JmWVUTcQcAairHppjWoLrt8bKyho4",
  "key16": "oVoGujdTMNRHiPpE9s2ufq9aTRxp26Pfr49iMjqewjCtdKkdhJb3JeEMXZcV2DaRoF8C1xJ2efpckZjjmzj8kGV",
  "key17": "48aADPPK7B6nU82Mym8sLwz8drfj1JuTdmCqrWaSHtTBS4o4CK6U3peZDT9VeogtYiyxZQ3Bs1RVCpdmCJYtYMVD",
  "key18": "48aRa2NGWmd5snqw429HtFnvW52X35cw931GktJNHhVtVCPRTJgQmt6DiyRuRCpPjVLUhbAurefrSxzBB3yua1M5",
  "key19": "2omX6gQvVQwAKnLkzYcaVBfuQSG9PUXZCTdfqnz6w89YgwicuuaSdwbcEUkw6wGiTqaKX1x9CSTG1MtMVoRi8GaL",
  "key20": "4iLqR1cmCTephUpU9Asz8rmamPAA12CYg7UruPqXjWu9PYNejFhDWYpnMwDRLM46qntgSfamXgokVBUDeFUjZawK",
  "key21": "5WNYWqC5VrcmbUXUtNSvciwxRe3qutFzMSeuSfmc8tqNnraYvuSURma63uKfQKmyJ4yDkVvm5rHMDvsGN127qeaU",
  "key22": "2HbnZSdrj6sEWgjxLfbHiUHDZiykA5eSafsrjsiBrqfLNyEAhqW59isbw3qyUhry8vsmG9NpXdfQExzSC7feQkB5",
  "key23": "42vy9D9LVHZr4zKw3Qi3282f614FEWCGwZvs5xGqXQTdoVfUgUdvETNv7Moj2krhYBzEvTHbhZykbYLNiaVFC5jd",
  "key24": "3My3vNSHVjKKFE11cX5ok8tMH4Re6cr7cXzHUkWc775vDmS3KbY8QVkz22wmMXKVKDumeciLFhXWGHPbW3njd2Q",
  "key25": "1fBxvAAoCt7weUSYNnDvkyPaFDt3KwioqHUWkgu6rdAGV3sue65Yq8v7q7vXVRmGXFsQ2o8idoCQh3bdsGcBjPD",
  "key26": "54ZCPFJVcf9YMEHtaz3cak2dD4ohHdvwcXS8pQvowCjHnR8sVyv5Vp9V4QuZqFQyTB1rBxCKiGPVzRZGT2mDcgMR",
  "key27": "DDLsGGCTmp4WnDsJ3eHdFjMu4cS9i48zQ2uMHmGTZQctDaweyzJnBjEzTJdrGB7dDV19KjDbMDVc9kDLtKK92ej",
  "key28": "5cRBkRMmY7yboZZXyebfqFR6k9fHQwZzDY5p7KRmzNzjCe2MToGFMcgsWfT56YvYsCDTDupFZ4o4mmyB1trnWcxC",
  "key29": "62BN95enpsia495TkW1YYPRptq9tUWtGNHwit2iC5iZyHDctXSmMZjwMFo6B9ubtHoUu4Ho8pTQoaUFKreQZaseL",
  "key30": "5eXKyLn9iyhgGgTsc4ZvLxCNJ7N8Ck3BQ9jUs2vo8CCRU5KoSuheRmMZ7tK17a8VGWvmMAS9LemKt3NMYoGiy1Si",
  "key31": "5oSshyomiNW9odbSmx64RZb3jWZeKzniWyAX3u4qNTm3vu3qKjoHJf2pVPGuY8unQ4JbUd32yXAGQUnfoPxcgczz",
  "key32": "3USr6VLpatNonHSi8hJHoiXbUC3sJYNKtEh7Jf6PrUD3nMEEaBBQkfgbgFb6Dx1wTaDcGL7u5fC4Ay2kvY9Do9KW",
  "key33": "46vckPm1CcxCaS6HFRr8kG2RVdnXEZcxayY4WbPaoHztfZYTMMTsTTsYDCwfjdsfxCvUxP44JcKE3zYjqN2HkQyK",
  "key34": "4V2pFfMLGJ6cSh75nvA5iDkouBZh5y9rKoKLnAAciHiQSFBkt8rjCnzRTbfzNM8ywAtymmszh3rBjBTBpJutX6kq",
  "key35": "5MHYxkV5SCuS21fPffq9g6tamKpTX2TSjAQL3piG6XhdqyUcDfKRqhNn4o86dDwfbTDW1EHCm48N33PXxA9bbomm",
  "key36": "45UMznbB1uRrDsnqdWZv3V5Yjmk8h7pK3weYF8erPAEjV8cQH22MtWKDgnuvY8bexPbAGoVEHk4N2L43DhAFhB5N",
  "key37": "3F4voYDDXiEUCgUHJdcyza1jrXPH6NDi9mv9sHvDRbuEJZ2AmhUvr3CnMafEZB2uBQw2EcMPpbbde2ANg2wXW8dM",
  "key38": "5GJjuVhTcLXULsz3tKwAwhN8JFEKv15ucr3tm48XzHdSraYUA8ZmaoaU7sRosyCjUXv8D2RiA26pto7i5ZNs5rVn",
  "key39": "c6n8juTNex18nz1bYBpH4u2CKqRj9GtRf6zci6ZMKvWVKQs1PZVZpgM2fQ3mzzAMFwp3ydn6dKpDHb2AdXb9yjq",
  "key40": "5zy6T3dicmNsTsVJWAhZoMy7RWL3Y9CtvJkbuWPRPrNFkfgcCsqipfgbDG5nzcmGfdZqViD2r4tWEzkqQecov3YW",
  "key41": "3ixbjCfb3W2zDEWQg7deXPpSdr9jpt8xQ4tLgm1qStbgivWAMW93rj8xyV8wzPN49NtKba4A6haQP2Cd9sazjXku",
  "key42": "4ywjaRgGFa8ZE9V5J97WsyayPpCzDP4QbfKmer3BxsD4DpwdCcb44fwPduqiR8iEcbWkLSA8q8ZNhSyN3XTPeaHS"
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
