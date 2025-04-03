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
    "4pAWbFknYgG2bhUhX5h9forJWCeLuTT9TRCSMnPZBUAQ22Wbazez2JAFxGLrZcnDnRLVMJVjaHb7JQ3mdWALqa1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djnS2gZmm2fssuLjF7gWbjnoct3Tugq4J3wrvy1v8i9DCv7fEH6k4tEVTzKVNqS2PpidnmDDkuX3hMkz9twrFou",
  "key1": "28brmfpJ95gi7aUzxGChnYc8MwiL4LALBoJEdfHFfavphJWBu1hkgjhARDzaBzjZPGJjwQLQ3YUUfpkYBPFFKawL",
  "key2": "39LxjogrvUCDbRvzvaymVc2FwkKASmUTbz2boVyGRzPhECeKvmnxJtQ9NjhrW1CDpSTFERt2ZpFuKynrmzazd9yp",
  "key3": "3ALbiKYF8T1kJ6JZdQMjC3fDfVro5dHjADCn5Viurfcpa2xrEFfv3tyRfBi2nJVbG93Y9WU3QBqDYPEPZutRaSxQ",
  "key4": "48wNrWRNmrW8S1aTWr8bAZeMoyUf3AMimHAtALwxg4A1X1oLfyazQATYUM6MKsmt7qKtVKfqvuKqdMQw6uCsmvMN",
  "key5": "2ihEbhrJbwcX8fzPMpS6DRDCkqckhsV71oaXJxpHHo6utoJGTN8dh7NKqbMnTKgXgXvd2U6HqAipQTiKDgC1pjX5",
  "key6": "67iFbgLwvqUZCpjExJKUutS4JgwYE5cge7cbX5aBC1y4JXCsrdcRYPi8DzBnfJ3zgfHXAn3pkUXdBN3bof29j85p",
  "key7": "67qVTwjTVtnwhFafC5DDAZY3UJniFKcMUbFWvNb3RADVzSU5NUvPioAfDT9aY6u3mhVWvMH18UfNtHaZ9yBXnwVm",
  "key8": "61Uci6ZKdu3chV96gCHHw4bTZ2yp8ETyFLJgmgTjf3yGDvyFES8ZGfVikxPxVKrmZhzViCNaq4xJ4jP7Hnmtemsk",
  "key9": "3z7swpWcqWycyggYSXp3eovQc63G8fMkCjZXGCgERAe4CxTCQfLwpE9J5XsgE7mbWYLp5sLVFVqkAutLCZdwRofr",
  "key10": "5VURtsho98NsWu3tbu58VZf4mUkFgAxpcTLdnkiyCvewyjiUEct2B6EdJuymXBQ8MjJZnwX6ghaoanNaz1cVDoUM",
  "key11": "57GmXas5ZCSqB3Ecj1XmiCZocMF67J9TyioYWQ1gzJjB9tVyyvDyxNUKiuueF1R4BpqZzqQyXhswxUXhUGmVd7dr",
  "key12": "3mxiHfmBxWZjDcd8H4EdoFqeBdt3wDtTfcx6YDMgR63wbencvXMVC5HXtzE2cLLPyjUXpee3u8H9ezQCLzbqgCkE",
  "key13": "4VCP3uEPBzN5EFNaXX5UCwinHkVzYipRnbxD7cKUvFoBrg1vmNNLrgQEimVvocuA2pxNgkrK3giVTxoXpHpFbZ61",
  "key14": "532jXiU6aiDP8XqYLPP6dNTYknaU1ooMXXNZfAkt7piJYGKDvpejASza4trA6yCK4FJ6fhoVFJu9N4abtuQkrHTB",
  "key15": "3AgUweQS32NqoQjDPs7U3tikqUJCq3Q1CHaSPH4oNTHzpy52pQ4DcYELqHMizQyQm7XtZYJ8iem4iXDBNPaAX1cX",
  "key16": "4mj7JvCff7nZzSj5mcGZWZQ1jWaKHUoFFWnit1Vx3kym4RNwAzTwHHMQzFCPXFDS6cVytsMV7upF1AirmvS3ffsW",
  "key17": "4D32Xts8UJ3cnQYFz8f3f6Th7F6FeCR9bCUDUWCSvm3fd5ct23Yw9NFxia62BnXvwLNCAgFtAbKxhmPnPFyAdWaW",
  "key18": "uhcHgccKUaBdUnhiENNCVgxWCydLo5dsBpXXisUs7NpoiSfw85bSbQGf9ELME8qyXsLWJhpGoUhV4Jydo9DztcG",
  "key19": "2djEuArXSR2XNvtb2JWD661yKjWYeSN4hi3jE7ZbQ1JgvfFA3z6JjzZPr7si9vwkGgy71Nmh9a5hBjrLz9MtoPsv",
  "key20": "5JN12WMq7m7q6UdfZ9WTRtqD25j7RNy7fZTBcM8GUUnmTu3U7tUAFF2PRG2DG3vrFXcQzbmM5k5dWz5vu2yabnrW",
  "key21": "5kcmWYkQ6QbcZtomBe33euwJwCdG5SP1oLL34yJUmp3wjxj3f8omtC46UzQ6FU2kW8AQ1RxtcnaUZ6kuxy8qa1nZ",
  "key22": "522d18mdgt7hE2vw1a4Wv6ynxCYphUEhKjiZCaCth6UaDejDGENdGAtWbhyoTrBg7B3tFud5WuwNZgWJbrXGtxxJ",
  "key23": "38RWFZYk82VVpJKifbN1RCbFgwx8tPNLmGoP8SZ2Y2YAgE1HLCw4yPBzcmNNgP3YacxX8J5u83xfndcpP5pRKxBz",
  "key24": "S5CE49ozhs1CMCZtBJ8QKS1wofwgHPAAJzLp6qxBtsukjHGFEWVS3Z91vzKxpG4icgZFe2HKGx5RQEvFTUN6aiW",
  "key25": "3EqZuinVaEe9NJY6A8YV9FXtnmki5sptMzrbDyNnpsa9fjCHL6zYQsVN6XprqF3k91JDEzqgKMS6emU8bVvvq9N5",
  "key26": "5TVygFtou5geovs2wbTCMzfXFaiBBggQVJ6QoCFgXBJgqBvd7tu348i48ohTj5SCfupG3G915E3XF5GVsSruDEfv",
  "key27": "3zvRnqZZd5qDoQZR1pZU1m9WAuF6CdnXbjXRExfsPoehhzEfXiJBKTh1aFiy1YrNUiRVdQXpiH6xYGBpoS7BP4aV",
  "key28": "xPm4V2uHLiWpEn419fWKqDKTEXb5nxmeUWKhimDdfHy8nRdhZSAqFvpBiS1LGoGYz1CpeNbxABHSt8rDYnXmdy5",
  "key29": "4CCARYqDUypri6EtLrcQRmj4iBUVtDezBwe7QWyeJNpjtcLmPsrSszUAqUuJqE5trah4nYph9jDrjvJK8Dw1Bfuz",
  "key30": "5esv7c7mw2rpYENp6LXBZ418SyMxdCbs95av3KwY23dxk2GkGETTKZSuBsHfQ2izTX3BRWFf1VQCtmgqpHV7XWet",
  "key31": "2XAUvum1ejAArnLqYS9RfeZPwQaMQPWALhQn2f33UXEtJ5Mzwo9xrtyKBFKYeNxUxrJDuiNQ7DWoiCvBgeX8QjjR",
  "key32": "4LeSF4xevjTfKBhnV2p3UHaeP6kAWGkt6f6zQhrw54vB81BAHs2HxxUxZtqE8SuftnFr6z4ExyybGbmdVAcfcvZj",
  "key33": "5ptYnmzQ1gLQ11vM1R3zHJXjXNByqCb6vUdnzLa7iUVpwiLmh5AWsLXYfmeYssT7RyzLrF1kBfVoruTdHrp3CJMQ",
  "key34": "2mcZd6wKfzNUVanuhc9KYtPdxSkvmcdusfrvCARcTHUuUHQKA8b3D9CFMuvWp5aPBAqEY3gaD4rxehT7KJ4kmxp7",
  "key35": "2ESiZtmS1GGi89nKFDZo7auQ2b6KQb75FqpmCMcXWQ2CToukUEKqG8z285kcziuLaDLX3bnc7mCPwQUj5UUa1UYe",
  "key36": "D2ttbf2U24qbHUMBaKU3DHKDcRD5D6hCy5QDudTMmEC7YgZ9Smh9cuqioNyftmcMKXqQyEdEsMs52RTsak4Hexy",
  "key37": "4RH445ymdd81FCp3padYipfkPB8pTrmkgjENJDCuQuwDhzBiVcEnhYi32DQKL8nuhek6undDqNDTiDm6ZoS7XpR5",
  "key38": "5PC1og1sNMenEbaubSpSjCC2Zga1zygdzbJidjgvqm2T3nJqajUef5Zck1NoUBpyRrdRUomRF6qCBTKczMES77B4",
  "key39": "3doBp1t2V3uq56vzp2nW6V5xS5bwdkfunoZTC7Z6pni2vVH5mP5AK1V38jspRf9EUU2W3vY67tWNsbKWhHYiyyLN",
  "key40": "BSaQDZWeQUqcswh1D58e8Tq4Z6Yv2DQtfris5VDC2F2n7iMEdrusxjatW2cwEonWifGyrA46kAZETdqxFhx36sd"
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
