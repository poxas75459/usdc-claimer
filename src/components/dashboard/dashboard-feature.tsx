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
    "485MYawrmPVcMdLp5uVwEYp8qy55uTmoH7C15uWvdCr1uKN6mpYWsSYQj8Fc4bbYqVSbUg3HY5RSmfwttLh8cnxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWMTV19jMhhDS6TxKoP5XFt4WcWDKLF1WXQ9zsi2bQ4NGmFgmRka6fHsuBXHS9zWV5w8AkzWs9H7mcn9QuZ3RHC",
  "key1": "5a6eMJzCEHVbohzDxB8WEnZVTC7yertcKEu1XwujHZHQLJwNU7dMsZdbAhDmCVk9oxXwbNag5RLfu6pvA4w98mkm",
  "key2": "5BfAd4ZinPm1Rt6WBbYKaS3vDAN8TcdaXj8vbLExfHY2YaMabuCg7KkXF7jEawyCiYGPsZu3Brm5w32EpfVqkpu8",
  "key3": "5D7FrKSabxbL2sk1Atc72hzBHz5rcg9j1UHqRwPRmrkpWUK8mLXJA6gWR7ZFGdjmynr3yyYPUFR2zDQvJzw5YQkh",
  "key4": "TZeHShXa6nXZ3vWxL8bqgVbopWLivrs84McpbsfRiDJhhjC4fuCR9idDT3bvfYvvmaLZ9FJNBjMX9MRzjeeTLkw",
  "key5": "3sctCUbvbnxkSoebhZmJMo4P5mqZQ5g7CvNcC1yN5hk3uZo8ciFWBr69UUVtquGtn42UaW47HJm8eGhtnh2Mact7",
  "key6": "3bDqUSMH2KSJx4123rKLcAfw89jWaNFzmLL3zmBLDgKQGGr8iEBa6BqRH7AvdFe2AZXU2L3XN6VaFv7McFwR9Axo",
  "key7": "4EySpNj9zBZM6xQDtD3WLZbiyiwgiXCZG1AAnE1HPZt4NkAJbFvGUsZ6GoXEiPUQMk1HyBLmCFGz8Nu14AWbPH4s",
  "key8": "D2XeupMpUvKZ9ZqEtGTTBmrCRHC1X5NzcabCWxxptQgMAovNbmV9NQFZkkDdrDDfSC2An5TkxgzAC6GixNTmDDD",
  "key9": "5JMdQvSnmBoLvbFfNHe7nJxaDEC3inVh198asax94JVyXYBArmGwRgd4YXymyjtPW3xi5zAQckZb9hSpb8WiEb7B",
  "key10": "2ZmXDGxByfkXmfedJzSWrfSYraTqAaDE7HUjSrb2dZNVeo5UndAp4AHrRxHRFMUaTNkrKfNt1bfRBb7eZxZsHbeE",
  "key11": "3qgbfLsyKC8CZhaBkLp1Vfk9UpSR1e3L1SxoPYk7qHC4tCFgpC1J6suhok3FutREyMjSeeBzjWEoMfbi5i9oDAwT",
  "key12": "2uRfgiRRMx4dvewKNsE7GW9Rtj3thDxgVxD2uu3QifdpBKiwc1Jib96U75o7FTiPQSPc5JnF8p9toxSUQzHnYeGR",
  "key13": "WgCwQ1BVHNX88rmBwidtm4ix9Xi3n9U5Ym8zqD3MHAJnMjwJMY6LBJ9BPbTjphubjQ8hEZZGVAPDzmw1ehyRvbU",
  "key14": "98Dh4sAet9DnjmZx7ob5sDiExtWCXcNJmwMJ2AbXQuAsfFCdEY9HgXxwLWbq92X7JD7YKXgn5eNLXCPhrPnncmY",
  "key15": "4MFF3pearcv1ENYqxxmz96UYkHMnNprsWkggKYZP6Am1AqUkiTgX3GVDFvSn18Pfs5sVXvSS41xF2GJ9DrjBr5uj",
  "key16": "4FQVTUHimDtVo3YFiTozYVyvgG4gKwnM7vx61sWkNbGanN1wboYpiKKEfPFW1h6aLKZNsG1SiMoLWMEU5QixkuEJ",
  "key17": "3ubYnE7HA35iiyw2oNhzgUKJED2M7kNPJLpk4YUB8NcCwKgFXDsJLiY8DHKADhsrfC3cXtcf7vYE9336obwqfnZq",
  "key18": "4K1xAWDSaaGiuWjriJnV946oFMfPAkx3xHREhRHhBUp49Ps9JRGhfqYJS1w4RaA65rQq6j3N7sDubpNTHHnh1FE3",
  "key19": "5S5vYiVKNuhUQT7LCxTemaRbFCDeSLBPjFQTQqK7w7jqnCwM4MLv7vpxmFpp5rL3j87FiVDd5F7X8niCCSt7yuxY",
  "key20": "2D4LBom9CsRdrs7RAXGtKdjkJChby4gxRbs7QaE3sRVYwCnj6bFA9MQQwnWWbWsa36pUgzQxAioNaZ5uqQitHmEu",
  "key21": "29mD6KRHRA5s3bYzVidRTJJqmYfoUxybgFbM8Rha7CmVxWqpmmpikFMjewv57mGfCMHaaoyFBab5FjamTrnVQFC2",
  "key22": "5JX5w3yGJFWqsFCEjcgEhuBo9ZE24P8TEtGE2rTftegCE4NFUFmChPuqbunJd8zkWviYPVzTx1D9ve3ffENxj8oD",
  "key23": "iCS8NHYqEdCYBmQUw3B2pidmhV4uouR2FFwJzMJwJNkczLEfsjpeKa48qWV14GB8E6KGW5ag9FhJ9srpe7zLE3H",
  "key24": "ziYxEmfYxbSWMjcQGLn2gk7F22yVEj84VjVW47rK7H99KktSPZKuYyEkij5X2ABebYgZF3W64v7bQX4YdRnroCM",
  "key25": "5zSRU4g2RWBSRWfzpfhYfSYZ48vanV7YLGoa2jV935z2vCFJoqLBLyNyB17vBHB7gjQbyJ5GaCWJ97vWYPra5sJS",
  "key26": "2n5sH197FkivjUgu8CzwBiCWe6g7L2ShbmeEhwJkzy3PDDw7vb7h5bmwYmd6qzokkgUrSbL7S4DQWCJv7DfYohsN",
  "key27": "53ndm2q7wki8nDu1S1zxW7nw82t4jMtsyDP3e5fsntBDpXfBNXcuiP4QYBs2Vq8JFizoEpTjbQcEKkpg2zCxrMfu",
  "key28": "492g2L8qnDg9eRXUsRm6c7WZ3EoJtVALpwwT2jmoiNff9MfrdUcmFkYQQKbjrt4rHhe3QBsJWnWqnxSip3g6XAuw",
  "key29": "ysEUqd6UUU1VEfSHpMMKWcmg5MefpivPm4zPR5AzbQFCN6DSABUpAzwQkdFeP1yZcGWXige8HC8uEpTpKdQQA94",
  "key30": "5HyWguqC6gQZYLzaNvymSaD94J84mSHNrtH3oDLZBd57np74VCgeis7yxG7PuBD4zz8XBgpwdaamMY9n9AyQqk38",
  "key31": "4e7mUQtZradWA8VrfQ8evnaxhFqZNuzfHC8Wx4shVWaKQ35F2cwsqY15Kt3PSLRUwxDBRmuoHWLcDEutES2Ai9YY",
  "key32": "4jSHRFGBUAgcX7YmCeXFL8z4urzoccNMdwWxkmgUGsChBrMxPhcMuwLUs8bJkBSgi4CU4BUpifZpz1HhShFUr9vo",
  "key33": "5GhCYPnbH1Uan4WYwgNfsnUksmEE7djf9NWBpF9bZBD5pGtWKHHSdSJtpDTooCfKriSf4wAsLBxG39WZfLn4zKfM",
  "key34": "5BhAVkApFaAps81z9VXbKuQE2Xon6RX22sNuc3fxHcC9v1Bh749ikVQn5a5sP9iCDAjPB3nZCvN2Yc1kQP8Anftq",
  "key35": "34oaAt693EZCiG71of6APj7oKzQQBH5WWAKfXBv417J3WBcdRyr2uxHc1GtBJRLheBiq6dpPcxU6thiXX9KzYAM7"
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
