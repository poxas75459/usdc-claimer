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
    "WxAeFk8FtwtgEDd3mbWcP2FqP37XBt4osKZADuDykZBQVEpxQNSJPq6bkn6FJmcna4yHTX8CVayLXMcLAacHSqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JiKq3T7j88ZyqVstys8zC73wFnuwaTGm4sPaNz2Rm6Z5FNXJa9y2do3QvNKQqSXVebQpYKKK2sXh52Sqa987VCD",
  "key1": "5APE5hUVGvtDADgEta7Kz8fvEWXAe6Tm13YBUjFL1AL7zGCpSqYCNpFXVpAEVB4J5xhmDNoZd1KYnTCTAkSXeJmH",
  "key2": "3KuY7BBWHvmCZCfmUaafkbDLzugxcqKJUZRn83WyN44BynDnh9NnRLhgpF83Ph7kDPTGcTiQGCDDZtfn4wnJyr2J",
  "key3": "4tcqhNz69TyvVU3m5Bm4hP5BAR4by5CyGmBGY3aMah1nCXEMjfsZ5HRHjwHZUJGhu9VvrRY5VELq4JvES8NLo83N",
  "key4": "5tQ5L2anBKpzfBzy3rBC242wJwJBSfGbvggZKWif5yxx6Ug3qUdKQkpiR9Boh1QChizJbWmFPumEboG1ArtFWKmv",
  "key5": "35ESvCi2mj5J7TMoKhB9UwjXqMS2vvE7tnvEiPnUpGgVAuMsHCvKqeBDejSfZcpfhXmFjhCbK3orfmcZqXMqDWG4",
  "key6": "5XZTKjMAmc1kjSYkMpNqhKQAptwS8XccxJtgpNi6ZzxHgzpwGVm3QTTHkw2bB7tTq8TGU8V2cWZATLkXg8HEQHP2",
  "key7": "29jw1FjNxV67HAvC6i7LLEvzh2e2gBgygwZ4KAMtKj9fyu39iwaFCTfRRs6im7oBrCu9x8fxbfNK8VkYFcH1JNXy",
  "key8": "3iRaLnoVuAXA6FEuBT1A1HRaS4Gf35q86x2osDhEbmVoZ9tyFkAty84jKGv76ghegNEYxB9VKCnjUDAi7w1kLH6q",
  "key9": "21cVCZuJSgc1vsWH1GHWJMe64NjdjrTuw5Ui99F5GUxccXxaPxPp9giX7Rg1Fykq8RQStMShR4aXGNpx6mX9rJKe",
  "key10": "4oxL3SjE8bwGd9pXnh7eXMQKXjYupHygnAgJPv57x2QyV76eviPzWL125qQzFSfHT1wkcbpHGb7Xz3LjoBujviZE",
  "key11": "4z3EcpaQDtdzM1v49wGVz3omf4s9FRqrWeCqSwh8ukEzaLWqJoCZjTLVLR3eRTgDZcPenbMFnJvKfyBRMbJLkGVE",
  "key12": "45qFE3Vn21PeoWiWSDL8cnjaTxFRAwfDnZACGyXJW44AdRMgGoFHC1W6Lekfxy4aqyFc8QGgiQ5VRwTbpmpScPfH",
  "key13": "5DMr6pZTDs6aFqAqnTHUgZaLqEMasVdeA2cNzFyCxby8wUR6vsjRjnyUnZm4UgSAneqoKJg1HenEd4g6hKoG2yG5",
  "key14": "b38NyMABma3J7gPMushWeW12rgVmeTEkx9qwoS3twTTe4kLMTbDeTEpzaVwPwLk4SxxApJauedYB7xG7u4aPcRk",
  "key15": "5FHZuCkTPRFkU3TPjiyYv3L4QrpjJGvuZaQYzgAofcqYNbgDWo6uDUYMCba8czEhbCaD6xB1equxevSU6Yvzfcqi",
  "key16": "31Vxu6t4unHVAJqnm5Cbj3HrEodBb7vu5gfZYUPhFv2HTL3WbAbwaXu6YB1McoGL3FftBqWm23kHEEc9oNiyg4uU",
  "key17": "4qwHQKL9DDJrFqD5UhwWnzczfHZZcGg9hLBhMWALXmAhPy2Do7XXzL2j6W6nVaAvq4HSH5mpjz5tLDtCYvdvxHdV",
  "key18": "5BWxSgJemiNTYDFsYby8CcCSAog3o3JbacCXahgP1MT9NGy5VtmcvVTAgCRa8oLdJ43jpezKm7aP7hfXRLmBDbc9",
  "key19": "3oHvmS9xCjrsKpyptuVxGhkN7wjjCGKS72WTT4ZguQKoj5HX8yab85YJwjafkSUMzBApRkmF2uCENPv6TXkafm15",
  "key20": "3rYrTRBKPka9FxwMpkcu8dgeTvrZtDWDz2cRDCdMqcoUQPDW9T8Dwa6dXU6dGm5wEZuhpf3t9fjcYmSPHqnTbFjz",
  "key21": "65wCiyBcaJVuogKds8RFw1pxeLZjhzDLjoKKAW4Nta2ftD8zbpyXGD4q2ovbJmFWepx4vSYWRwuHUSRm8vnnuJQt",
  "key22": "2BktppqtsEpaJBGx4dLNJQKwz6ZjSX2XXNnDVPaZRU97ccFtiPKGCe46hPMWxCSRTGtRpDWPqmMvM8yThw2MqDKS",
  "key23": "3DLSkstUH7xd3eaTfigbp8aQTTJiYtWtatcaCSsZo1oQ1gbZwD6pa74PndXNBPKxUCuHCh4Aw3U4kgmYQE5Di4xv",
  "key24": "2pA22c2xUYZFxfxuL52wqb1oqDhoUW61Cj3SrMX4zASMp94ttyn2R1smhCLqHH2EvVHV7JaUz1zdSrz56C5kWLGm",
  "key25": "5tQzKEairns5cmnxib73Q98NsPy94KVpk38LQjYjUvVnvkbTSTFH4nsVLurDT9JDSMrru6ydVnqqdX2AbTgmY7jk",
  "key26": "5kSz7Hf8ucc2rk1AMimBEvhe7pzU61qCqtB7RtkRGRXqpqQigkunUeKyZ5aePC1kGUonVzSRJQ8GcdCgZNJBPKxp",
  "key27": "4gebYByqCQpPgCWdS18ZEcwhMBjDFHRLFYbURh1t8PsupWgwTK2CJc39VddS1WPMerqGSvrbUWW2jQ9ULddqCCiR",
  "key28": "3n9Zi8mFoSZwSf7zZVyeWA4FKwf8acTbpB5iLyGvnwY7P26L682K875zdEX7HowbnsfoJa8StbouTdeyErzircJW",
  "key29": "4qXGDYtPURXPVuQHvXHSnidoDE4k3kHF2AH1GJqxnAJhN3rsHrBH7ibiKRv8vDF9KpRRj2oRpR2Rr5WTfwrgQo2N",
  "key30": "3BWkXf1fZ23SD9x2p28rBH7QYQzAvPhbhPLEcgtyytd8Y1vxcQFQduATeZE9fZjhVtCciKMnVvAC1RNNW2SLEbfm",
  "key31": "5TTSFGb8iypuBd64FuV6B3wAVJxH6eTUaMkirix8WTfjQR8zcgs84bTUNuDLtV8MTXLzB1RH7MHQjSP6UW79gWFP",
  "key32": "3nfNJBaPBE7NsdmQmQPZ4oddrnNsbbrqwdcfp2W14tJj8TkASi3C27qwMLp6xo6LJA1EWhyUdntb9kU5tr9tQrLJ",
  "key33": "3pkeMmnpboXNQFx6Q4Mz4QoH4XNsJoAq8Xp1C3q622KZEN154EPHYoYaNJbktZaX6ZEE5rzEX4TDq1kDBS9RA2jk",
  "key34": "4CTZt737LuG2dpoBKafbbDdyyQCQWAPzHNZSWYJsQhBWse5R1JXdEtf4DD2aqr4pPgY3KNB1w3Bf6rdcazhcYuP9",
  "key35": "2S3BfJbT5Z9HzKAV5sZD9HDXHRjByNsvsRiTd3ZCdMDRx9cHBte9UTmjWBECj3kPqMjrFFDnhQKvyVQLgdxu27s6"
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
