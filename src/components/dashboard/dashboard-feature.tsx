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
    "4Vytf1caRN8nFTvvRRWM64MCdC3kivQfjNKBtKUoDvYHjCJbJ22P14aWU1GXdAHpZVmu2NfhmRZruQpa3kQ5P3CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGeGtquxkDRxnnpgdBx4GuPcoFexaDpabj1LU6SxEkrW1VRs9jEW9V7DaQ4KmfZ3UDUTb9nPrQPPns3FJVE4Xxm",
  "key1": "2e9Qhret8Tm4aUqdNrgU1ZVkCZyPSspNpKBUXHuoZSuGQZ4tQdoZAhDqLDpa8ugKHJ6CRb9VyJYoEdjXJwwsf7am",
  "key2": "pP61p2jBvj1nrooVPPFvRRxYeKTFycwxc5VV7vTTsjZ37KMUaKx8auQ95dM9SYtXAUU6ogwsbYhH6EsLXXxQ122",
  "key3": "41nAAmUzJJFnX3PzMznUrjs3Jr2LEGNVR1w9WRKcJZddb9PmuUKVP9ioofFJohtz2sTgSeY5zhvJUuyq2tEybxN7",
  "key4": "4RhYaUPKomWhDMkNsQFhJ1WhmFRAkUFuTSBsAbGKGNSdmCT6VgELgg89uRrCe8QSJeuZbHRTFffoqVg1ugVxD8Ks",
  "key5": "2GWFQwXMbxJU9oDLdEJYpzZtxqYwQYSzWkfdn98Lcu6yok6QDMi8EK1yT55KYiBCZyZzBLRpNziUebjxP8z6X8gx",
  "key6": "3QQDgrNGFrMW82NKD47Rc6YhU3qVt5Ep2HWZ9TxVT9TZCtWCfscgoSLugn2eTb2Won4GUcJ9LEF2B1TqisDGM3Hy",
  "key7": "5Ac7FaQyNThWdo9WwkJbmwHfpxnKib4Sqesw1mtpBmgbg4wPUZmCfiR4nz4ghk4297wHbFottvHcrz8CFFwU59w5",
  "key8": "5yea8c1kaL9kHdBf2JDVsUMZtHgMM9KeLQGjVzFtZEcMYp6usz44FPntH9ZDpBM97or85AmUddZWsJ5QCr2sGg4F",
  "key9": "3JCXyetCwgz5pmoJG8MkGQzrUD5dniVwASv1ZDp7r6Wi5bE9FbLnhwApf48FbadGmstQHTLEXvd6WRivZiTmuFVa",
  "key10": "4tseGcBrodsBLuoAsoC42QabPZpjH1wkPYbPybcPH8CkUgqyHjcQQncUCkaqoKytJ9VnZfPZuKw3eDep4MP1TMQ8",
  "key11": "2mtVVDi9jGqR9zCSKLtaoE7qEzhxXZTg9zjQTgNV7BoKAe4aSMwUtNvrejiHKGE9ag23hJ5LcwveAJ1W9zYMHViR",
  "key12": "2YW2SWA8GjSiGFNfB3pMjEu5QyTdFN7dxtbkHwWdnLNHQUgtaSx1K81oRuDngeebCTFfiDUYMPqrRpi3fV8vGNFJ",
  "key13": "UJjNCrxb5avcaLzHfH91Y6Ya4AX4FZD7ktq6s89qtNPMMrSwtcp82XNmVnzFDak8TnGWs4VgSfSimg2cHkXTdtY",
  "key14": "ATD6rCGHc3J7HxXKQMuJRziNecufPv3BKB5s44ecPiCphjbKKDEBUhLS13RgTAefqxDRLTedsnYRDpK9exqrD7V",
  "key15": "3ikycJbGMqzjUKwi3HMMP4sz71TMjonrLTLc95fyhVo4z2Ud8GagjE63b9mW2DYsZkMUu9xZo3yJmq6iuNoGbVty",
  "key16": "2nehmHsYBdUnq6jrdjaq4rfQVKbphqsKDyvUdJvVM1RqhiPCzPuJmA72kiXLyjakzxwXhMkjWwbvYKvCtpKXvdgT",
  "key17": "B3YaHVy4CkGkJMdp1e8s4bkSkGeyXzh6spYT4SQDXwawvp5TmtVMSW3q2DjZVUodsrGGKzfpqojwnaF6Wer9W1A",
  "key18": "dDcqEsqXuNCmucHvM58Bn4QNwWhtzXLyd7sNSHzrj7JuxodnuVa7fmysasmcSeeiQTJdJANeWkHXS6vekAhS23P",
  "key19": "32kPP9CwCbf65TXL6KT6mLJtraNfrYdAV1NvqibYTExLJYGqJRs2TPUjCRpJQQgXEQyVd5VeFfpTNAqtfSJKNHmV",
  "key20": "4uGd8yaBxFar8fHMBDUSWwRyGVecrgVS7qYH2thQrhNScvcH4ggiZvwone1yyPnTvv7NnL62jva6xE2uo6i3uKZe",
  "key21": "4GNbYTESRc6dyg3i9RaAWhtjTkgEyTFC1DryDK96TGvhpz1XwNuTZug4FCiHt1u3RsnyoZUUxt18YXRKDZFTeDJW",
  "key22": "4LCDsCkAEc783CUmghUfeoD5WTHzxSEyKEUwhPZ1xPice15BXktzxqAcrCsYs65EPNQRUWmuLUpmi8XuhtvQ6dzP",
  "key23": "322Jj3W66iR8pR6UUpZ7NYDe41M79PHDSjZcGat9an3PSjNF2gKAjdQ3sFNabGNi9GCqsLMQQSjcxLvRB2VE2gRE",
  "key24": "36YHgmuEFYawv6RYkrVQ9PKS5Su1Lcd1t4TpPyibbqem7GdAnS3d3fpSeYomAfJysCY18B5dsT3HEvDDCKpCbLjy",
  "key25": "H62XHJJ7j5o5hN9DKQe8TFPLpYJuCGi9Hu1SvgFfVtHEkokVn6192qsm1yuiGFjJjge1PSBFAoA8HsxrcnXpxt2",
  "key26": "5RtwTGZzdWPFZkcWi9BBrJgaavAusLGPeDuY7krFg5K83Yvu7f2bZsJJQAiobFRLR1YBswnxToaQJbi5Hzb5RPnR",
  "key27": "456G6DFGkoncQg1VDjuDF9ASZW9bgaCwHQUZB1WoFomdbcNSaHcNwiJyaN1WVzyQzGUBVDZhWUqN92qhCXizh46b",
  "key28": "4NvZzXr2Ys2DbVZ2aTzsPBNTqChJHnqXvST6r1yNhdzbFSRFYGauaYx3ujn3VujDz3me327TDazTuPd6iaq7tbke",
  "key29": "2HsY2zKq5u6pxxzydgYYzVrXxxJJcptxjQuATimcpFX5dxVKnw12uANELSpLExLysFKCPRonMRpcuJxAXwPCfb9r",
  "key30": "5jpSzxWqKz72DmH5hQTjjuWcboXJj3JMzui6BwkmGCba6cTGi93kwGpJnsan5oib4CA1XJY92SWzPNZ4BWw32fYr",
  "key31": "538Tc2BjSUNLytnS61Wo3usRGnRP8QUs8rkHAKEod2QUufwb3QX2iv3kiHexUgxTXtMjts6BpA818HdJuwfvrjCs",
  "key32": "3KMaX5gkqAWG4k7CkirvBcpoTeQd3Swe7MNG93i8rbFdqpV2YLGZPFU4vipMpHj6Mn55CETYSiDqrRHvrfy75LF2",
  "key33": "2aqNUkNZf58UpmZkcFNsDEcwVJMFdZdtXMz9WFRD9j8LGFJpqyTkaMcfg4uPYf3LkjGbAZYjCa9VDdw4oc6NV9ES",
  "key34": "3UEMWzCH7ZeYVxdW979hAaaxkQyNfxmQhSe9FESdxPdhrkEMR9AQjwjNh4GhxHyWF77k9diXpKPshX5zam1M1kVz",
  "key35": "13Lvo1XpDxaMb3PpowXS1xy6Ue1YiNKsojiomTddKT8Sb4u2KG49Sf9VCN4hRuubVy3RLRBAdiYiA14AApXFNRj",
  "key36": "3rfXhGt3XimnXzZ1n6iMkMfng1na2xNuqwxL8PYa8kYMwKGaqnDJgqzRLdZPNnrLT1fJEd4UtvnwHe9zpw2MQ2hv",
  "key37": "5SwVEaPgGUHJUo21ZCkXKDQsH29a1DwbUey88vScKoZrUBS1DW2da5myAVw3v9Lj4YH6RZvWYHtvodjpy6xVpT8V",
  "key38": "5PLeFiVLKJjGbULJW1EeRtTvvCBJkbgJXKyugVgZWvc2U2EZTnMhfaPZm1iGrTgMUbDESmfqM5jJfxYWDXtLWtgZ",
  "key39": "4H8ZP6XKAQtytKfNRa9wwGjbZfA6npzD6zfdqpJ9EDCwmzQaqjKYFsPYYgpuuUhvnFCFQdef1cGbqg2AsWMRY1s9",
  "key40": "5cWSB5tc5ifSQ6vBvsjEiNC2rhmaD5S38zrfoDhGprWostJhgtCzPMpoWZdmgHi5SQrAaWuj4QENxfQJPKDrJyfA",
  "key41": "2rffnUW5bpugbHzoMsX49v5dye9PQnC3pSqh6N1PxFuR5WnsX6JrSTmoEsDXQU85EAvLJRpQuXqJmmiBLkeduScq",
  "key42": "2qHHLXFY8W4jPBiEzQtxWkQAnnAWkDyDUFTwW9pj6KeH9PwFxzpesozG7dkpjoVBgnouKAnfNF1WpejwaeSFRbbs"
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
