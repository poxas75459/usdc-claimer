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
    "5x6vZ73wuq3fpJtmBUMKcq2vauYQkhEo4AQedbZwRe8s85mdyQdGhM6CZCzCajPsJ5U1FQ4DGcg2sDXzofxRssF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1XGT5wNHaSA91Y13m9mSdLM2gpZwETJwJbtWFk5T17j74ns1wGeoKvd4bidx4Dos91ygeJRUAQRGiY769GmQ9u",
  "key1": "3xsKFejhuxb845U4AbtD97jEmMHRUdxpSvD5zVGnEydqHzpY3KAvyPbdQ2N4mCFdc6YW8vMYtbWiRGg14TweEkVb",
  "key2": "2oxucqooz3RpGCV8Sny5SuSbGL2qp9rnmgqoHto6KzDAx4LSDRPWKmHBmEo6xFAUDQ7EvW2PTJeTTap7baV2jtLd",
  "key3": "2c5CToWQ9A1i2GTcPT5Wrz38B8r5NzgsYvQpLdTwfSUFSSBX2PS3CR15iraH2yP6k1Nri5reSUv18GZuduNd2o7P",
  "key4": "2Z7ETrmw5NCg9Ng55Uqa2XTnrY3HbKLZVT6Hb3Y5mCit4FhBYDmDueKHXD1WygwSaeBaTA6HpGA8zb86LWkSko4D",
  "key5": "A5MkXg9nPQKMu2VcVkL52waE3C9dLFvYkuwjAofMi7zWp6uL2BK6ow6Wy39PMVfKtbyyVBfuJNR4rgsjMMZ82an",
  "key6": "2VR6UzxeX4HcsgWSFuY7jHasHjVqvE93U8z5YrorMFJASbokcvXNAuuSDiEnYL6ctF1sZmsYRvztZnPhYJwHa8Sm",
  "key7": "2VtoeFH5bjK3Nv8LcvChBT5vCYpN52uyf8awDRhx124bMrGwskz9YGTBVY5PNmz9LpUqDpxxYSshCUXfeWCDNYCq",
  "key8": "CQiMrZXAAHNmq6TW8fUHnGAqRTgc6c9yKC7wTcCT1V5tqMZFng4rbDubTQfFZ115iLJ7jrQyt1B77ew2r6tmBaa",
  "key9": "2pMFfrphxMQYyxfC6MnNVSjDtHQpeoqoD8gnCuKuJATGBbNiragLVGGGF45pKNSN6eB27xKUmEPAQ6HWHpCWhAqr",
  "key10": "5Mj44bFeRPYU7MTx2mtGwxRhu18x5uhBXqBd9kPrwPZ8yaPqSugPqchidqaqYjhtqw2e7FrUg76SbA7QZCKgVAe2",
  "key11": "2Mt7mLb5dxeSnbXSz8N4SnFtUo7iMFgweJuGQ5ChviHF2bWRqxa9nWkwqo355rFX7RruEdWVnqUE55E6LnNfYgLp",
  "key12": "2mepdne9tHC3H1Y8raJBkUPYrK6R2NMw9H3cyHaNrPzo6LFzYoGwkHfbNsvq6Bi6eb38fk2FEKNnUEiodZTzmuTn",
  "key13": "2DF5jGxQNt81JRAVqMCJZxeQfUPh9M9BWUDr6qJYJeAJ3vx3SpvB1GHjdvFX25JhKQHGW6Yp7JVuCZnCZZGbmCf3",
  "key14": "3oc5L439hvULYs2LX1pj7Y6JBMD5xD22nXPRFUD1Af6EdsXjhdCfdnHugUdnnAKGsYd94VBNjMuqdmCPngtBQhiN",
  "key15": "23c4jsTQcZLbBcXtF6c74Yrv4S9fKgTSq69AkKvSm7H5ZxicNJsAYGMVAKva4jX3NQxob2AiMFovPWyVjmKyP4zr",
  "key16": "gpdDqkYhFCUaYPCGkRoi1BNGqwfdswXSfMEFNfFwrGkoyh9qsr8bXa9xKJVjPbx4ypKeT26N7KLJLQyftUBc4Qj",
  "key17": "23VQvpqQ7q6qYWVz3ansmqXHbJzQXrpZCeNS2f4pW8BuP3qvkVazNvWPjrfcT1pRS1kadJPRy3jfdckvoKFefqbt",
  "key18": "WGbmvyuUxEvb8buUBZNXJiwv7mZUG3eHtKLqRmmf1QVfm4cMXDV1cJPnfz4wAACE1Qyu8FirBBNW4GyJ1V84Lvk",
  "key19": "ec9pkEenx3ytDmgC4YuPbhXgWqkEXXe3jbrm2dHaSSWxmd7A89wPwFaA9sF1riWXfoWYAaVuAoT9jp9uM3axa5s",
  "key20": "4CqbrcQMifE47SYEcMVoqBeHtNMdHSt3pL8dyjAyjhDfUihrM5LNzJijKFVhvPp6GEAYq1ZdRNUEu2szM8r3iXwW",
  "key21": "3rvUoRTWZc8toQuVfSDxakYpAyx9ekUNFcZAWBHES8bvqdWgyFdJ9KW7MZ8AukRQCTgXU7YaJg7cmsTsGmCak1e6",
  "key22": "2L21hnbUnRVauxNbhQNFaTrSEmtu3vsr9pQtbZii82qwLDAGzkMbXcAchrdYexTotDgpUkXyoJsqS3j8oxnj2aT9",
  "key23": "LF4fpfywP37AAVZxZJxw7MmocyU7xK72Tzcc4sCGPjYdKfKoEPQT2efafdVupnHo6u92eiZkJc57yaQqR5J1CTE",
  "key24": "57zUo5vDXMomkGDYsREnnkGJ6MN9xz9ZYpPRfNikpPsz6bApEvkti5vbudEz6DehXzCGPKww4TS5PhQkj8cRqy9K",
  "key25": "3UcG2muWaEdKfyaK5Q4DPFbSQS9sgRXQnhHVppuvCc6Cx72omSWrPN1cbro5zZFHXiQycnUDq7QkkNzLGnXxvDKz",
  "key26": "35UfNgRwSD1tR36xb7q97TSwhTj4Whg1RBbqpy2Y5VCHhxq3Pt4KkVpLnQNmqH1w7dDnGzF1JN6rnPTo2vqquGbA",
  "key27": "3BofurjgQ7ZCjusdVNTVX3SZcPqDATDMrwJGymifyAPUGkzgkvB51DuNp2VwMaAf3FTDxFDYHd1qywHhTFSnHMoj",
  "key28": "9aundVDtvUfhsCzsiGwkb935x5TKgWYifkKZm3KdphNDSA7JmTeHWrBp7kjbmkCfskBmxXgLnrVahyrPPLG6fRH",
  "key29": "2TATHrTtZ8HVBUQs3YuCHdw5zameGubhCfdzLm5ixwifLAb8mpPAyScyNWB9Dyz5X7w8JRL36MuBkZE37E6CFaKu",
  "key30": "59Mps1n6bPnVpR7JSMx8fEspdsnq6FXMike8nPujccuNtFCPpp3A7DCz3v8N7JxixzbqDYRCawQYUEcbdcYJdwxa",
  "key31": "P61jgm9joiySgFgatfzq1A9GdEzKx5BV3L62i39eE7NQ1TZKyH5uZvQhSZcVz3rELdjhcjQSKoR5ibyHVKV9MdT",
  "key32": "46nB3D9R7jBimwwyXffApzvwuzngqXDonTqbg5nCVn7daTkpdRfinvQfZtcNHJTJDPtgVWdmUHxFPBhE4i3VarDF",
  "key33": "39rcYbeZPbg75gQzHepS8R7ZwAAsMJBBdGucvcHNNFvsBCHgsbwoqdVukZ8WscezkTAaAHjvVueSfNvpK3264iU4",
  "key34": "4irGQUXP8tjKv9aozsghtYZjNv2ExmVuHHcLsT6JuYqQnJFihBBfRAcYk44Ypj8oQCdbozSoCDVsEAH1QucBf828"
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
