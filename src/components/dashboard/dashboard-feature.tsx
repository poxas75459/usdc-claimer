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
    "3tkXEYw1Dnn443GwfcUn1RaqVWr9byqBQnDVKuwheL1uNJbcsJbtKUiVFJqa5qHXudGCRcRQCM2LQDoNuF2QdWhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xH6yGG8uGjE1PCqeLRLsvFwVk6jSSNUHoziR3UHqLdUNESZteK5RyajMXEt8QQjJKy2iS746rmpUq3B4b2fwunL",
  "key1": "5Hi4uWxUjybPuvXWgtrqAu9Xfm6u2izV98mPdoDD98AsvdptQ1tknBaYQRGfNBkGRS7eHvjWo2EymSTrsP9qVUqA",
  "key2": "EW3jR6kKzXVAi7k9YbuoBtmWKuX1a21GgV7vZyJGD6QA85UHrQnMksvVHoe1UKYc4Q7vfkeEpFFq7fa9b4yQXkb",
  "key3": "2Z1ciExyn7GLDPEUajY6fgTHJMjHuHUympWfJgGXrSmg4hqZrhtczdHuZDkX97xkimC6Uj4vk9FhARFGu7UsFJv4",
  "key4": "3dTdEvXrcSPhLXDyDQjUpKDbWSuzk9bQjrVgUN3FngQKHerCxV8HzE9aDn3nrQkF8eskuuAko8LQh7SjFyrgw2bH",
  "key5": "2hwEUuAF3Ln4xCUqUub8FGZPXKpwjhhYxEHMMYxticEt2YVuqmmEWtw2gjL7qHWTGfNmp7hTi7axtygXrxfBW5U4",
  "key6": "4D2KTW1zsVVWh477yF7iEP3JAMT1obYbSPaXxXc8QWh9m8QvLokpcQXryPJye4t5t5skWBjx5KpQr1muqikFWFfU",
  "key7": "2wckPFowKUPnKw5cD8osPBzjYb6CwsjfyyMuZCFvpAQiCqXxt2ScgwCKzjyK8RFbxWd34CHFfSgVXLBiaBv3Asxm",
  "key8": "4T6TZ7k5UyhR3wSdFuKQkmhKZ7FRJj96ndpTEz1We2AsuqY3q25oi2pK1MT6XSmG9csfmhy3TytE7ZKufzD5JAHj",
  "key9": "5VtunJqmhpeCyxTdJ5YzgZQGTVnKC1pb3xFivamtbAZBkutQqtfVrK79akvRuf78B2eKWFEJSutHaxhPNHvhNVrC",
  "key10": "47bSya2NLJwHnps35BuSGc1TfgTfuuDREXy2MSyQSbK5E9fCjoyAxbn5CgM3mT6dcXjbw6wteHL1vRV1P6DqY4pB",
  "key11": "4EELBAcZxyjeoYPaWHwobF2qpVtevr1Rw4Xa8kL4i9bqEUwmiWBYdWewdL9v5nWN9otFZ8mMxemSCnwMtfki1cgf",
  "key12": "DbkMyWF8epVhngSfpzQ5sst2nEpG9QsJHUksVbxJWC1ruE9hb4jGsxbSRmTgpyxFwHB6gTgpU31QW8uCaGgbw2L",
  "key13": "2CY75UVzxXSB4iGSmA6KSPUy4YDVa136WiQuKknRaQn3ae9ses1h9rRgEg7EJPtQrWL1nPRW5hdqRhHSAMsj81K",
  "key14": "vD4NboBHiUstiivuWDYzoFMzAPPMv6Ub7DMWku8zVjfZ9CajnSZp3C2MoVM4WWL3cY1K8AbMNqA1Qg6apWSW91y",
  "key15": "44kBSqwN45eS7Vgk5PqLkDTVq5ro2MqzqeiGLcNpEYaTPnwEkaqhDyP5rPMfR5YfhqZSQaegJiWV4VbPuYjNzsH6",
  "key16": "4o8YMAdynHEfJjFWqirzoGQXyagFJXvBUhAYtRyfLtHfk89FQGkW1o4AkNgXZAq6Kt13CaN7F5yaFxnGcf8FAPyq",
  "key17": "2h5AWsRUCLkC6peNM2etaVgVAK8BNP7JYN5Y2BrBmN8aqbwqDBLHnoL2C4Fo1m8cvHYmLVf9vijJFQgj6jAQzAQ5",
  "key18": "4SXNLDbyFBHMjDTNFPvmF2J9AYEamMhrXtL3LSkysZekPMQZeq27656g2G3JY27LqaJ677pMDV8WmgDBKf19YtQf",
  "key19": "mA6g4KVHFzSjL4WKH5iWDaLiHgHbkh4TfDJP2eWT7K2htDzgtQYDtRCwyXmEajxsA4AgMkcFMD9cfuQ42FuracY",
  "key20": "3Adk1a9XMxq2MhxVuXncR72Z95y2QHrrmfWGpaK5WWdw15PuvMwhb3XAkttKrdS87uWu7tT9B7S7rVXgUC1kVHT7",
  "key21": "y3mZm4JvvxFMmH3h3XsabnpwWKS6ta9ii3Q4sksgeREyocDzambR6yr1HkvvG7TckGfkqANUyvHiG18cUaNb9bv",
  "key22": "keRa1RTgy8ooaWkaapsZSMhQNekuRDFoZTu8TaVwAH78BbaMbzSZtvZbTzpcTTD4zviaQD5rzX1veUEUGjsjuXz",
  "key23": "Bk7rYLDUvEC6KrfLKYzXpbiUaDB9vA6JTqdUwTuDwuKn3fXXHLYvMVv61faqvXX8eSXGpNYkLJJGwUfRggiH6vH",
  "key24": "2fhH5H3sLahshoQ6Mxs7va7DxKBzT9CNvH8CuToap2LhfMJaoxnG1Mg7qhGmSRw1U18ZD1VEDhogScdC3Hwy6CXh",
  "key25": "3TrfZrqmTUMaP8oqpKtoAah1DVGW1uZEVk5ZDRDFh6yLCsxmiCmXdJrnfspo6VZwehvcfGFvgU5D4H4aANiCpHCv",
  "key26": "5LujyxtVrU6hNoXyaQx8SVrEi9gJpjwD6QKmq1xsecXbkefBUD7fxhoP5gWyaES67LQFrZwsjgPAxfrtrEy9t5HD",
  "key27": "4GX337XxBR2EWHLGxRkNhZhfm5BrjtP6vyQJyzUP57JCcoBdXbfcfte3WRiyjpx8uXmQmpRqMcLy8HBcidDqCGi1",
  "key28": "2aKoHpYty2DFVR21vUp18L5aue2uRLWzkds71tAmhxkpJWRzmFJDroR2zAzAG65iJVJtdxbB3tCnnDn96bZsU7d",
  "key29": "2ifuyEXbmwraA2oZsgFxuNRubwYr9nLbmiuy9K9baK6QP3rUCxTctVGpnqxawNKz8hWf714bFSxi3VxGUk72tcZw",
  "key30": "4DZn25chuzr261fHbQv9T3LEyk1MX433ndnVGJidD6BeqxBFNcYUNRx2VfHMi5bBZrZy885YwkVNNR2bxriF4mbK",
  "key31": "6ngrWZLnSNNLPfZZvokf172ZVpKVipgDQ38UwNAx72H2Zbe4cb3iz5xMWKsSWqC5JSZNtybqgwTy88yANaue3F4",
  "key32": "3ghjnQ6x6G3VP7G3MBsd36dKCDCs7VcydrSkb1HMx4ypUs8CQ5dVsvfpNNWe3N7Bu6oRXTvjv5NFjBKuTLefCqRK",
  "key33": "4iVjdntv5kLXhEc4JdB1YLNbMDV5r7MyPTL6vXjDdtUBZbPPAPJ3i1NXywdeMHto6dBvMTwfMoYSVZ2kFkLjg1S4",
  "key34": "uxkAJ5gnDLGeJQdc4idT5khQrqsKooMUiJFGewQ9jVuWZgguFkCQicvmfmAmGeWAVYRZ2zVELodJkeJDRqK7epJ"
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
