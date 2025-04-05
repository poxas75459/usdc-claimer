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
    "4SS9Ez1Cwq5GFsCdtS76DXiMoWv11suTPC6LbpTHPnv5PgtGf1hkLummTgnRQw7qCSUWTk1AW9N1RhT9F9EFvtag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYWKNhbGvw8ySVxBcRtZbtfjUFHWFEXmWDfHigZaeA6knqEtQNYTMRApKzT4H2xCCH58dyJR5UDqQzNutdcsiSL",
  "key1": "4mPBjHKMiAJmkLjrh19WMBpL6M8QZnkaMv33B7QgRPiWojpXTpTEsCGbMWdexqhpeeiHyCYNUxwZma4V9kEzPnSt",
  "key2": "2PVPBTRsCS71dPQ52d2ruEDve4jqfNvA5Q2YeiBfwBRCrzsobHZ1Yik5qd9EPyfAN6RvE9UGAy1C3pBuUq9NBKpa",
  "key3": "4xYnMsQWcQNMWMLzVxcoY7DrSxC6QDSjNN1Pt2RsFJYSRhugzWJwCUu74i7j943N4ZcUism9WKSxs263Whe26pWp",
  "key4": "7keGrG7r3UZqf5ubcm3GKMPiVefftNsSt8iidEDothQMQTUy9Pa2RbzZF8XaexUNyKftMTxWrLUej2xVjKYN15W",
  "key5": "5y7kFh6wCT1h19odocHyiGB5HtLcmBSLYdmMVynqYETLsMncYJqvsvr6kWrZv4P4MPXX1DdUaK7B7vXgzZ3XSmBG",
  "key6": "3oNwHijKnvkeEaYFYkYrt8hJBJZzyTqo6m2Z2Ew4ca7NMvZAVWvBMnBH7NBLBugvueEnYDGCcaFrffFPQxFQkqAn",
  "key7": "3e6o6XPfvHViDvrFNGAiPJKUioepenZCyHwx9BN67WRFTjN9yPjjJh4PMjzkJNL3w23ujF38kEgZUqgmoR9dnCNh",
  "key8": "35DQGvAfH9L8W6m4idsnEipNegHzeo9JGq4HRU9i9Vkuhj4jN2bfXpp6jkymVpLnTgfsVcpooeobxCuz1XWZWdJy",
  "key9": "2ewZhDxU5zeKZ4ZJNuqv1i5QewWau1ALsejvyziPtjR5Syh9ga8AAvFCwQ8BVpaDZosdt3ryBTAyve4vXxnThcXV",
  "key10": "3wdRW9smayz6LBsMangDnt8d4ZK4ck6Wvg5Fv5HHtUyeyQeC7RzChRhe6Put7q1tWWvFf3gUpFeABdJyfrEZghrh",
  "key11": "5yYRTPG1J8PnkqqXVg6wS98RQMW4MMb6GdxtsjSuUydsRdfVhGxuQnJAHRGKZsnhNCE8xWQXr99dpZUffucBZBqM",
  "key12": "3diqT1aMLXT1hSJ3EP3Ay34UtRRTkGLMC29shy1xjjoba2eLT51EdKC6DFJhDFDgkUKEAE49UCevNstD8H9zXnc4",
  "key13": "PGcosp9WKpF3F1wj45qMwEuq5vdKuCgqqvG5K1hzckDGSA29ZB3gCvJDTHHsbT9e1oD6vziMZhVepcUFJ1gF8Vi",
  "key14": "5KQQosqFfucPgHKnZ8mpgYenkGxofm7cQAzkbymDEqieSDkn839pvj6A8itmxYstbXVh5SLm6uDk1YaY5Ru8ZeaD",
  "key15": "5qEB6RbfUB7FkVLuak5UoFHqg3KXYf3ar3SfJB1vXd1pa9e8oL4Xzuk9yPXHddaonUqBZKtWCWXnqxdL7qpfkQGG",
  "key16": "2u62iozf88bBxaabHZ3UqQkFMzvA2dSEtcDAT9FiPPjQb3W3xYRBZNnHRn6syZzvcHFRZ9VrtRArXSfXMqv1ZYvV",
  "key17": "3nyz2DmsH6KzzwFxoKHve8XrnSLBwAvsdJ91rG3hTMiwwUuD1FKZW6VCUXaxeQxwWiQMvr7eYLi1RNEyGPRGPW6a",
  "key18": "sVCaugZ2GnsHwWrrb3QUjAS5pSykrasRbU2pHk6trnf6qLtGvNVH6HjkgAxzmnwsyCQzCDtSHHsDUkcXAkxm7Rz",
  "key19": "3YazgeZ2XSKcu8JuRXcM6rjvdcy1AVUrWG2pQ2u2wFzbtZWGDBesueFtG2sHuVHQjPb6fzP9yGPhNpDnfmpH8SRL",
  "key20": "2hoAhZEdd91eCSe996nrKitLNPQEmn95jee7XiuEEM1hRe9yrAbpuPgjrY7VUBzh69R8CaSahwumrQgrUkc1Yr78",
  "key21": "5DezXu2BdSwBTYLo6TQkbqgbhSbTLR3kX5gSdXm8WzbHoTQpHF6rtMUj5GtJbj5rrmQUoSZkxL9hRMfy3de9YgSq",
  "key22": "4fMwZAxxKWdM4nm2y2ks4snUhnaUqEcbJ1F53FjzN4myC3DWisvfYk4paCbsjd9yADXAiAiYKWygyvG2z9xy3eu7",
  "key23": "2fuPLR43iez6qLXWt4DETPSe355QUJkd9rRMHbWWroe2VWiRV8RZ66rQLULEivE2o4XqZP94rVKuqZzMmti1WXte",
  "key24": "3PP6iEiBzP8zkKGyksZV327ezKCwsyF2eSEBifkNzQFKNSEiVxurX8E4u24Exid76BwPjr2ei2zxezC5HKKQmpcp",
  "key25": "4LhJXwatCaPBdF72nSri6zC5bmqXfs3fSGYemBspnWkRrQM2BVW4QNFLUQjb2C3J17Pu2xcdeuLUuVM5mQtuZz3Z",
  "key26": "aFuisaw6bU294YrQAqRmmP4FgbjmPQA8UQhcim3XLjwDCeq9k2LkVqZ7YpgX3zrwo7aDQxxrnZxeZeRVQ4KrRRe",
  "key27": "3yrtR1KX63N5JEVAHPEgVyzuamAf79Zo4ZA8XpnfQddRzh86gbQxa3oXVsWdgmmw61nmkWyFbXBKRXMtNGjEDy9k",
  "key28": "5Xuc8Y1QhTUz9oXpzG1a4TuJ7XKZW3pZyty2wsuRFTEd7ksDsWfqgTQgfwRZfss6Zgx8mfXm6R1nbzdwXeWXW34S",
  "key29": "4pTvz2J1J7Mm5VF1QvgN5CBbmGA2v8vMpfByLzWWhcn6pvmRqDzmvBvgxcTLjnm1HiNxuGxHp5hpcYbDHYEhnVDD",
  "key30": "5fSnX7v3j6VBuWfSBVt4L34efCK9osjDrb1r7q7X2UbRM88K6tLxHoicaXddfkEZ1hKznoE19sEzuMuK9LE4gsxU",
  "key31": "2Njyfo2gCAHiH58WtisSr9jxachJ4ix6FKFtqndah8wVz8gcsK3qMQvL3hB4SuHEWBwCdq8dq3NWso1bQraULp8s",
  "key32": "3ApwhZKd9SBffLg6QDbeV3swDN4WpvWDhHfP2AZG8R6e1dbamqYdixfS6zchNLNPAZJ7aUmBxoXbT8qEDDUD4Gh8",
  "key33": "57bDJVUhCBqe1hMpPsC85Vysi7DjKwPGDo6d4Ak4NuZtw2DvaaePnbnH8M6a6ni5HLymGcr3CVxBLvQEute13NgD",
  "key34": "5zmAUpDYPpz75fXUcqPD8h3kueRzNGNb5ZGwfFih4MtL7jx38JNdGNkCvecmhd1BXvoA85oHc6sq8eQjwQMLueFv",
  "key35": "42qf7oHvwGTtXZ4yFqH8ShZYj89VVoGeiKHiYU2CWDr9sEuJe4uY9TkCi93bQvJcfLduU4gGpH1R5y3Aq8pmPkmo"
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
