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
    "3Fiz4f5cKKEry3EYiNs4ATxBLmb2PXoSVG2A8LepXHmyTiu5oH7ikxKXz3C9SKSn7ftaE46N4hZ8gn4TSqr31Ea4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXZsJ4su3KiMcEjEKo1hvBGPnZardhYRjXyvDFuTF7eHY5xprTHA4N4isxzs6pevBwkTQfembuDZTYH14X2uk7n",
  "key1": "2MPww5i3HnSbtwdCEm1ch1cfC8ejBfMuA3wNYmsYsrCJBuG6qwzZsoY1LTBimMwB1VCkmkQBDiyjTquF5RUcXChQ",
  "key2": "2jRkhExzFWpMxKJxYU2d3DyQoN7MCedA972MUV88raHmFpmCY7PvDECyGiPEV7TEWivoPpQWUq9gJodUCPNMED6w",
  "key3": "ruLz6HGcVVzbdaZhFP8JAMmBf2WGzebVh7PByZJvBJL6pM1bvK2JMaCcgH2r2xGXiwBemZtK82ny28uHur58twy",
  "key4": "22F8dokYKFb37ELEcefLohuuZ2Zy6VkAGrEyb4kvSVMESnFda9VV1p99aBBkingiswrenKJHRoyTjbPfWAVVAjPB",
  "key5": "pGonr1DXQwNE8bowiZDSddkHuoRSpuszWhEvtAx2Hyx4SYiPPCa3moA7wXJFtPrTQrXdq7FhcoTUqA3fyXoCDPx",
  "key6": "5CXF4dmJ8pevekk94pHA5UBDdZ3EnK4TJ5kpVxMsAaZGkQxdgbA9JN495E7fmccfyN43vnfhYningkRSsuAE18M9",
  "key7": "2MTWpyPB9yQ2PYRi3sfGjcvKNuNdYhLsK7ALrKQbzheVCxmNt81eoBVXhHtSxG2s2Znvj1QtfWaaF2EXynrfXbjF",
  "key8": "54sCkXqZQWy1UMHW4N3M9V7bw2bUcshNDARdwhU7C5RkuTygET7mh5J8wdjoszZ9RQbtTR2qjQGNkxPSR8xszTWh",
  "key9": "4oRkn8NrQmvqr75BqvMv8HVDXQQAeTRbTu1L5NgxyWqQgbNH5SHikGh3eEQRGs2URqwRc91TWoczK4d9SwYhmjRg",
  "key10": "3hbBsViqfCHZGPXxULkeUK7wK7Bn3RwBcef21Kme1DLFdFhJh8HnbMEztXmw6c5iWTvL3rRxsWMWtfURxjzdQpyf",
  "key11": "2FQEf76dKKkwRcHtUzr4gcwEYJ1264GofiWbSkRcUgUCHFF9J2mp4FhAXw7tXj2aGJqiejfxioG9EcLR7KsYcWL5",
  "key12": "5iVYyVhQnBiGrQ4zKo9f6AtNJgpNhwFJ8Kd5M6vMBJ4RftLo1wQynRGyt682JsYpH7c1pwcdnM7SjVMbScbPco3m",
  "key13": "39Z94KSFGragNDCGXzrkbZ2UmLeJgpcfNmBSseuuWX9XbK6idJjPZJFci34KbxWL5nFqrozcFoqSvpsztCTLczFw",
  "key14": "2jjGP2KViirMhy1KCb1NapPANHdksBjVbVZum1GPLDgs7io5Ti2kYmzdRPehV1eJkrAC1Vs6nc7krJma2c8p8Fnb",
  "key15": "5U5tLqwDtQJbmCZN94yF5HiVcfyahc6ZGDRmPNkNrGx7z7ThYLYdqQbWhMX3STuEPjdEKxNgZKNYsFw2AwG8pNA6",
  "key16": "5qVskZ4pjzsugrGak1eCPrAV5ut1vbahhe1tS4fvM4LCrrkWMhr5j4XmRfjkAUr5nKsjpiHqZyiXC7Cbj15avUiU",
  "key17": "2MjDkCeS3SLHyUpqf5GHnaG7rZFB2KxvXRCH3Rond4o5qPy6nF3R5jrTwPzsFxS97RunRx1wsD1XanvmnF8iSwUJ",
  "key18": "4WPmhBHWsfa4c7TrBkiAsAQhFXVXAhhVqAXVRLqGLgpuBGhHJibd1LxQQriyQvqAxgXEWA3kfhqX39infYYa75k3",
  "key19": "27oSyQCNADG9qzVU7XXye41SM6ynxnUZLBAReoqS4U63cArFTDQ71xuShwEVgXkWxBU55atVhk3CR8CcQw3LCDPX",
  "key20": "4sznPWVwemef8tVRrX6yWvvFt6cCDD1w1KzHqfdFNEQ212MRL2Ha8Yd3aARjJUDH5M7W212aCAry44QdfyEdMA3m",
  "key21": "637HpLbULWbACR9GWNadfX4aAqZuXK7W2yUWd6FZYqijbdacCVKhkKyPcPfaMimvY6TJKg6UFaZeWnQtC6fSqCLt",
  "key22": "2sq5b3xYm4vfiKhWS1Bg3Xu7LGTGnCBFafZn5pC8KQGwyPoaPXqQaoke6XTZS7zjvYk9yvNVTKADd1d5yAfg1asr",
  "key23": "4DqtNjFexivp2SWvg1XWGFZHZNuhgsQE2zERJLpRVPveDAG2yC8gyTHFp1BHJnXSxEQ8A2P8a6RSTNCjXpPqDtET",
  "key24": "2ujB93XkzdFp6pXunfQ8HFApkYCJWztsujjZtN5WzJP7PaRMmxg72hM4jZuj6LHmN3mimF4fnY4VN9uLhuUH26bB",
  "key25": "5HofyxPEK9JiRrSQGUa1VSApQ6TVRk1A9Z3FgVzVwfQCwhrM3f29ydjg9WgbLAfqoF9Xpmoh7KLcqhaJdFj8ytsT",
  "key26": "31iMp3Er5anxqsv24TyqKQzcT7tuJ3P5fDWvhFn1Eo4weGC5vFhHezzMaMmpGt2T5AboGqcNy9PTU7o86Jpx9pJP",
  "key27": "pmsxgmjyoxBRNBv91toNFWkJjzQCKKMLC8SDLF4ujd7SK7BmzV5q9y6UrFXr9L38RMgsjHkxwqViK1FWpxHHN1z",
  "key28": "BLYPdK9aUX4ziAyGQV4QGTGW4LwUGuvHDoHbssE44SKgs8PUMjqH393ZtxdqypYd8nCevksdqYybfrC5Vkztga2",
  "key29": "4RbeCxDpiQbsJCVyboAjTVWEs4ASSUfe9AJgYcJEr6xp2V5LjA3fiGQbFxBEXjit5LVcukC2NeHzZBbRC2kHma3h",
  "key30": "dMfzrQAwpnZbum2aLoFvQZcHvBfUtRtB5ULPiRjYHanfYD6yXnA59H7qBmGaAJDQtpYz7XBL6pY8Bof3xtgSXaJ",
  "key31": "5xd3WBEqWGYoeK3SCMqb6ZMxru2kwBSLdve2FQJjyXaiegWn95dy5fucZ99m1qMN4UZ62p5cLJNq7sgtw6m9T88U",
  "key32": "2QB2iKKa5tX7SzBp4oKbGeLBx1Wyz6VJvfDSdAj3YbXhTk92y5e7PxsV2iZGWGx6ykyRwzGHEFxFnZQzNJfbjnhv",
  "key33": "3gNi15n6eZmv63vjoHjpEoDFjZm7goW9X15AFBNfr9V3DsVXczVs3zMCgMaRLqmbq5AVj9edvcrqa9X6cXGscBED",
  "key34": "2cFU5hqHapzWtpcbMJHSExAFSSEUbA7agH12421CCjLTNK2PdCPAt2GvCTCEiNRNRGAkK32BBY8DGQLqenpREoZo",
  "key35": "k7JYpabqSE4GTeGsG3Fb9A5BmmNqvMEaxyRLmAadSrjZZHrAfdCNpXJYTtt4rXyQun5AC2kYvPUcaa6knDxYVXs",
  "key36": "4JfkhXCkRM3fiUq4Yt85v5ygXmjVXpyiLPXWKWnN51j6BoGsC2CUqstwQQvkPu9KD6YP13Sqod3hmECG97y4x7Tw",
  "key37": "5JZcU9tioSSD2432tEBRJYNNQUhqqrU18mUPA2E7te6XtzJT4BQ3Kw55M4cq5SM7SADR8nTqmTNB3UZnzXojS3pF",
  "key38": "21JaNJMraXCWUpDpQsqaNKzD2R9fmAAn7qCsijqxRL1ky7spT4poFkVPUZ3ntj7D5v3U8hzZBD7UcFsd9ptCiXCk",
  "key39": "4x13HFyTnoNH7PTN6JCcuknDwLhnVuFaxSVPFLR3G4FmEXiwk1F6tprGaKHEYmsDRgn5aHtdFt7EfgSuRzMR23jC",
  "key40": "uVNXmUjorTXaQrVfnbg68XTo84BAEcXtK6MA1Bncs1BE87JxkWQV5myxDZV69Fwspuik3CFXRfMn557YzfxRYTY",
  "key41": "33egJXvwve2LyecA128TEmp5CWVtaoy5qYoebjHamaw7HDnBx3AYSbQxMZ851FHbC69RmwJHvwDaRaTi5F1kNta4",
  "key42": "4Afo9bdaDYc4GWUyTcS3vN6Nowf27qarunt8G4LWy1A8Q8pYKGTi6UUsd4DeTFbLUPoGhEtLb3qcP2CziyPJywLw",
  "key43": "22UtztXsGEy2cJfQXnXfWQQasd6BzjPM3DM3tiqDM2SFKRSC4hcsshmwP6duJHTxJG5NC35tLLwyg9d9KMoTsqNo",
  "key44": "5cs9kHZqxtbD2YvgqodwvFH3LrAmWD3zSrPEVsCPTeKF5BSoEZ3JJnN5MBUZwwETvKpWWr5GdNi9gizkMbzasXQz",
  "key45": "3whm7U94LaeeVv2uiWAuLZzhogr5uMQyEyVPUjfiqQXZtH4Xz1LLu669P8nwAGXxfxaUn22oZMs5ccHZpUSDicME"
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
