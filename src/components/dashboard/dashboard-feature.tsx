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
    "brTE527gz1wf9sSQb9ZseZKovv4ZzUC3UB8HrVibwoowHRDZg3aiMWf5cdHAztjehXWXGb7sPHQpBCFWSq7TVpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2USsowvwgTWB1fqCUf94BN9KytuZ86NcEPtk3sAPw5kcemqpJW4EBtxLq3EagzHbuuqTYBWev8w5aPQyJ9diWuvx",
  "key1": "4FBUmQMYph6GcQDizxSLsz1rANTZR838guUAaTsPNWpAX6LemtFRbXKm1GuK94PcHSZWSkYy4qdTFfF1oDZxPUi2",
  "key2": "4S3MdX9jkYArR7THe65DUhR8pNXM5eQYZTRHDcNHbpdjbkNWcx39GTkLeMf5bex6SYtG3MwGG1kKptmub4Uugn43",
  "key3": "2MKH774KCfoWfxC7Xs7mUj76He6KGnFP5wVikMxTWQ2TCA6Y9KhSty5tedj47JAbuqNjJQdyvkk76ZADhyJNdwrw",
  "key4": "4fEsmqRTmND1LT3uoTkcbY6fizZJHuLSPtZ5JUVnsXwMBi4n38mwMMMmfTed7kpokuvcgTVtarsoSjnFcdNZoZCu",
  "key5": "24N9qaJ2cKX3wP478BDDUMfaXfanNLtdLsirhbHFkiZETUw7g2LRYUNCr2AQDpaYAYcTyrV5RXHe2SW4ZtEn5YF9",
  "key6": "5NcEZSMNXTPjx7dCJHppdE3j1soXZFxDwTAsUYBeh37Qx3ULeD8JTke65WEu89WeSa25niuQBJWDFCbEBmQ7bBQ",
  "key7": "2DXKMTSU75utdh9zCrzBj8MS1gmNsBS4LsWVsws5Mk8JUgKchDawEQbMGfnyfG69BYDGCfw5ondcPdxkFV4qAMnt",
  "key8": "5Bg9SjFhGGDu51Gwqq3nhxtWY8X9vk4QoesW39FErFZix8A7pZHgiCawAehYeFPWY7p5dCLgcpxb2RiFb3nZ69ym",
  "key9": "3hr7oEfXen7JgE2e8daeCmeWRdxH7DeF1cXZs6H1s4VdP5m9DU3MfNQmTvDH2cbakDTmW3Rochst3pVKG3PP4r9q",
  "key10": "4XhvKFE99ZWvYP2Me4LJSykDUUhGYrP9TG8isgNLh2FhSR5Vc5mNbCXyaG9CZQ2L4r1ZhmHkb6VT65aHqK2vP5Xx",
  "key11": "4cSmYN1qBJtgJHiHQfcWpYMLJQKtDfKicdRrVETTeL5NDiCoL2dqJtexrA6tundT66su6yc5XqpiT94PQYU2FJYu",
  "key12": "2AGQG4xkyXYuC2E6noWUriqV5CEyGGKAwfUNJyc5N4ew4uygw3CQyUNW6cFkMAXvkVPzYf35tJP6gXXX6JSq8EKv",
  "key13": "3YWgGm7faH2i5uyJB1abvSkSqGgxosk4xaHLiNde7zZVAQY9z3HusAUeUbFgZiXnuXBsy6rC6nbB3mgiE9qhvMYZ",
  "key14": "42tkxM2tL8iLZhCgbraYx8hikxj9gjxhZjYfiP5zyCWWCXmBAMRLWS6GKxKvG1c57yx2X3zkESAiPrdDh6FWi17Y",
  "key15": "4WAWDzCiywUAtNS4YT18C6VmWPcBPVSPpqqoV5RPhHFLe12bKQGXYLJedWW8asZRwfqYJcZCnfYSWJGLYNzQvjzk",
  "key16": "55NaoKbjmStGQgAT8xCC9NNtw4tF6HsZLbZEP9VmsdPMNPdgqo5uanH4QZM5XLaRuEtDqB8Js5g7rqCukXaNAAbn",
  "key17": "3jRQBrfeGaQvTFjKfc18RcQAw2KZcRr2riKAbvCkVGEPhfzCX8dKRzimiryQaNgAmrTorsmrU6A3F6N4STGhxsbF",
  "key18": "5kyh9eJjoGLRWQG8BwpQ1dmzm9oanbajtUv44KygC1PiuhDK3M5g9CKXqDh37BdumLYGK1WugK3JPRU7fVK53sv9",
  "key19": "2EkyFs7iCyAm4HzcsE3phPtQyEZ5eXN8StmZVM2mp6AA43g6x4X3V7sexLmc2S7DZwmhGkUXrsSLPER3L8hrcXRw",
  "key20": "2hQNvAFLmeXhwuDk92CRqTJtYCuEddggccUBvHZuc8obhTp3Q8of7bGRTbW8RTpGAdpHgBq66xt7zkmkWSNCkZvb",
  "key21": "5TN3v4dFDbhNPyz4Jvyb3B4o1MEEcGEwCT8qwbF6D2HNquDo7rk6z5HrynkDWeiMR6dwXW9YXPJn4btYAYufpDRE",
  "key22": "2JNwGpywn8TiGyprE38R6AFBAx4nMySgZZsAeZ6kizSC1vjfm3CBsBeaXLofo3EvygTFJmtZoow3yV2wLAoeGw9y",
  "key23": "63E8v7WqxcvViBRZn6edKzJ5p4PXxNwt7yFmTv86eiRtE88i8ZcJ6JLRNqs1JVj1StjzxAAXLZ2hhtsGZSAdWufQ",
  "key24": "4761UwxXGF6yjwrX2i2mKho6nSLpeZ3YuXakwu8NcVLAhMwmfNMsK78KHjM61Px72sk4KQqEg4A1XHR7WMyYcsmu",
  "key25": "4mmEVWB29pFsx8MZzeR3MTyJqhDr4MigegtqyShhEBNrXXsmVdjXzFP77p4mQ3qP8BBgFMv2LknyLdXPhnDcxTig",
  "key26": "5MgZodNHD5NSvMfh2WQGA7YqPivnyfaMgBoS4rVSagmNtubV9P7ecArbFAJzBHUJVErkVsueHh15Kfiw3d9TKVsf",
  "key27": "3PidGqXpkWRSsdMvqGH1LvwToPeesSwPEex3WjQSt1tgzqa5d3mo5u5HSvZ9AqYv8uAxCSzMX6qr35yrFt8xv7Pg",
  "key28": "342xc8pzSYDcvvELMgS78cEvEWn12WhW2fGEz26SVpMWE4yH3JZStSsmXJe8HzW2Wvz6XB8bCAiFUr4jKapFXXcm",
  "key29": "JdCG2PKDXVr6g51AoVWdj2L4Mby4G7cAfXVyYoKbYsv8tFPB9EHEJHN5FHJd5cADyCVk1ntnYGc8gG4opXN6aJt",
  "key30": "48bXaKBNdzj1jBKbJ5BxzCx5KRArakoQzYe2Yh6Gfhn951hepofFpLfNN82xSS69pfsA5vrrhZSvS6LDoJ2YMKAu"
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
