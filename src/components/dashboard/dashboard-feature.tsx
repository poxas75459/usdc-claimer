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
    "5dYwFWVhLpL7Tk16gtdrr34koz1yXqTsnkieMH36C7KAa8P47bR82jYYJkzEwLa16YajBedHjkhhspX3uzpBaaRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41pG8rzRirhtKwLdbtzcQkRFktpQ9PQrTXAM2pfw2bN9zHccc7twG7JoXKGNTz3bDCF9FgEx5dNngyp2nVgWYCqQ",
  "key1": "p7HFyaFVxz7bhGyZjZYn347BPUvxN5RfiEsC2xz6dkrRhEofgeaCReQsZK44CRDi5Nruf3k1tETntsv813CyhBn",
  "key2": "TdZYzbEBRonBhj8mfWPdgamxiayLthdsjqMybHckpLzgUQjFJHfNusepALiGdkuQxzgPe5NDs7mg3f5yjwiZZbe",
  "key3": "2Ywz3Nvyk4w3eovXkGyMf3GkegMgtBousukr46CXFkAMgyJqwAgfrYUEvCNBUmUw2wkFa2ND2Z8XTTvGgL1o93JY",
  "key4": "3xuNyc9UJfrSP7YVACNosVANDosXzVwj3hboHDEfjPkFr1etZRuTdSREfLAu9V8Q8UM2tXZw1m3czW4BxZRi9JDY",
  "key5": "8uCfC36jhn5Dd2JWDKbuKXKRJboeiBXVEameWwbxqtUq4tCQRx9Jk5eUEGYUzJhBoZKbMFbK1ykGUNHLkkUZsk8",
  "key6": "gVbsyrLXsR5qJ15vZRAUonQHbskdkUHGuWM6yM5AyjuVfYCRACJ2dZDuerjp3oJ9m6EcMrQNBb7CKrZvRSJBRH2",
  "key7": "49N7tHN5TQNMJna2PEnSF4PQJTDgTaNW28okcajk4YeiRoLdaVRv5FzdjHb4KDs47RzNpSbN2UJSPmqZzxdPzzDE",
  "key8": "5g7HWxXkr6HPtsutQvfijCgQwiS5z2zFmE8uVvcotnz4M1UtG7WAhy3ovvjMvYuq5GxBgfUm6m5FCLkWNhSsDnfm",
  "key9": "21NW7pvV3WUw38BChWPdj4QN3anzvn5g3q81WEy8LRiD1t5xGxnXrxavijo356ptaD1Dkgzd18ywbS7YW9DQVCrL",
  "key10": "4yPeJTpSH8csEpiS3TcmYkXKC5KfzhuSsqNo1V3pkCiamDLXPHb7fbbvXLpaRtBZ1myXsMXUkQdyE2tsnBbMUc9V",
  "key11": "5XoQGADSNeofL6wCCuyXipMkWt6ZYYuGgZRTUR1Gg9vvd8c39XXFeaDbMem7Trd6aLxsfuMepw9U4YuHB9WqT2av",
  "key12": "4gB3jnnCcu5PxjduskPj2ckjNZRwzHNeY6hKV5ribypcPkawD7mkoffFBEawkYnqgEpeqqCnetSMuGaZTXRBdxFM",
  "key13": "3SgVZP6EhnpUVtYHfwzEQoSqYMm1WRNnezH4sVEbRhTvjqxw1Y9kfdD8VbKUwKs4R6cNmY3goyRYFYgdB2zxy95w",
  "key14": "3gMS1g8ZMoPgMnWtiETmQEPVZi2KPZWGeDMAi5FV4Wk6Bi45Gv3R1eL9uxUot52yxkDLQ3S1ihVVWXd26usuWXk4",
  "key15": "4kMToCwGP4pGy7w9APTPE4R3vf7oLLwWH47WQ7SVobJgnBUNJXmwXw5HfjXgZoiQNnpCUepvw3bJQfv5zL5bidEi",
  "key16": "8mvQDoFHZgSnFfQzsVUJxgCRQ3b4DxQgqsbhCci71rWWWaiB2ZtdYj16kXyELLcf8avz1pXGXkX7o9PWx9qtJdc",
  "key17": "51kdBM8yZZCH7mfD2eYgRZBtaGXcCyc9trN98tEZb9brsEoGC6Lfq7aHQ656XVRAu6eWRH3QsZad6KAqUonvo5z1",
  "key18": "cByfRi8mRAzWeshPmqGRVYzFKxJbGpnZNBdBmCfruoVAiDz9f9yYAA5fryGQyhx362J54hQJJz47i1FameZu1YQ",
  "key19": "3MUraxJo2u13UXLyZ5zzuQhwpeofG5bZYz6ShHCJFsK9LUTjotCvNLE1mR8ZapVrxEDWq8xsJxybAFias7PpxXgH",
  "key20": "35Mb4LSCSVvLdUX3ZsmVekjhi2zrbUjGumcdFaMSxtuJuzMJ5iLacAxwh7qqWNsVKBVyoCKnVxaCVJn4FCAybCZX",
  "key21": "4txMbekZUGxMeLL6a5XceKT5AmqAwdbEHRy9cw1gc4Y6oEMDZ6RQRGEcXnG7SMCingAGPxN3aarmjcECFT3PRGFJ",
  "key22": "2yYFG1KfYWwj6CcZaSmPVgrNgRySfsdurrJzkz6t3Zh51aqreiL9Lm9z5PzwfC73TVP8V9kMfG4i2nC4SN3zAh8b",
  "key23": "U9ToRF84HDf2pqy6B24frBHnWb1V4YJdh2HzfW4o5ghq1qtU71RXGbyhhe9wVU1zPmSnkftoA9UoByfRqMk8YQn",
  "key24": "657iYPNnjrmkSBQPZv2zKJqNwW6x5TPZz6LPXEwy2gJ6SNV2FggaCyymzH5dufx8UEA5rgyb9h8Heh5nLEkpx3Cj",
  "key25": "3tZ5FseBvTMcM9wai791RzEgESDBmxeiNLYXkHfRhavDUudUAFXfrWPMRWkasBM3L2dQ3Pa2dJwq9AkGqQHjKfnK",
  "key26": "2DjGTHeZVSaZfsMBXPrhLxALmzeWF9AuUYzZXM5sNNoVyCxCKAbbpCnxcBhJWwCHtN6zkCWqF7kt3LUmY5QgKvNj",
  "key27": "3fD14xsnnv6Rhc6KhgyMTaqp2U69pXgdCHxf1Ep7SdXHQjqZJ3GuXuWUVZEZ1Vbzeu9fP4EHHu6Wv8zda47Ar22j",
  "key28": "3yZxXNN5T38mY6RitL3DVNvUYVCGVB1ExgHa5ctJSr4TKSugD5ZppWHyk1p8UU3XcPvemq9P5ud2gfUMMora87TZ",
  "key29": "2fEpFtKgpdm9JydVXj3sYuowpAtRy5xVg2hBEVthnAzRb7pCTNXkD6VkQAUqB2p3rvahrKQbdnB5oDZDFoSQA8UU",
  "key30": "4Ne4DV5Em4tMs7BH8PfJwhkLWQokmPRs2tPFNbeMHbwucf8ngCCGMikn8apU6wmF6p37XpVCiaSMUDDa3J2e7WLL",
  "key31": "4enB9yjp9Sj9Q8JiVbTZznEjJKz3c7nKLM5HB7ZT1pXXCtmacj1V6uDuf5zkinE5iibMiHdp7rHpuHZdwgoBoCDu",
  "key32": "5fCRzAvxnM5gbfkGCeH3B5veAKoCJ2DzpibSDvqY9Q6rnhgf9DCRqMG86vTR9nNxJfKf8Kdinqh8qBLERuAuYRpH",
  "key33": "2md4kP3ZBvxthF3h4JGRB8Ee3UD5wTiniRa839t1ahN9WqJdk7DpxUHSTaMBAMyzyEM6zTSgyffJoXAMoWbG4dHx",
  "key34": "3akD1Pd39SUBCTKvxGKEYfirbwMod2YQgzswSwUDx8xBp2V6DCagE3a4z1TgTdr3LDuSY3nTYnt29719gBdRvBbG",
  "key35": "3KVjp2frsLVVxd3bFircSs2aBBJC8BrWV16C1s9os3gAtvVoRyRoTxZLgj8DqmVSBTbBXboaDMCFmZqmdH1vmrfL",
  "key36": "5uZjeChbavKk9Hq6WEvzBApsTYwhe1Lj1vKd23K52wuenw3FJvSFNPSb25MMJ4Qn3NSecMWkUmBwoXokzxuKQbgJ"
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
