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
    "5Yo5JXw9JDFtaAuMqXTR3gGyMSkwiffBkwiQJJErKqsxMy3hkAaWpYtZag9YBvSh15iPLnb2CCdiVZNWtcS4N191"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipgzgyQAidD9XNrdpiq8hX4KyUhB16rUWcAabnAAU44mSGMrGKhVMP4avz7neC3apakXdA2KJFy7gyuRpX5fQVz",
  "key1": "61dfRwfAYYmx6LXrYUVGpjX75H5qZ2dbaw3TwS45cBXWeTmdgaA6UgjXSdvcP1UcyhukGcbKudZJVK877PnrwTXk",
  "key2": "5x2Zde4KLHwkNsxtQqC8mqdNfLzMPxojNwk8QLgNRpSqdj2H15rNc7s22LBKw2iKJQyZhkPu79CvxXUr1Ue2bE94",
  "key3": "5nRzL6BUYwGipo6ZLFsLzuqQLjaoJesxbK3gpJFnHkCJFsY4yjYvtXLszZCRpvdK3wAUFyNZJKLtPLrb22aky3rD",
  "key4": "YwVj1qrh8xoRRnUE6JPsPrTbeXNujhHTiyYuEFp6f7hnQTkcYzTbR2b9sB9qzWkH4WfhsxtTnQnXbG4VeqAExNd",
  "key5": "36tes1UsdwN9Y6yah5mhY1CCJ2qfeAEpZFp5MHkVP8Hj6eZpe7S55JCaF8Xc3Xn57mVEiXvvpqFUpKmDzM5A96jL",
  "key6": "4ErUvJBSdphF8yyz2EmcvFExG2fJdpzPuufFxkbdcmQVU2k9ZoWSCzh8WuBPH5n7N1t77PubQMvBrGBEWzrQTQVc",
  "key7": "5cGf432S2ct4ibuDuURecC7ioEv5ZFBeCjeKQBdmJhBfgNxEwENDm5ds13gkcsgkCN8RAT8rQhEWZBSXTR51bGAv",
  "key8": "4rBVyyznbvgT8wYBDrYVJN5soxRfz7T8xNh35Qmw9yPvfGc3XG5YeC7JFNzsgdUaKux214UrrsxmVsUkz9KULqhQ",
  "key9": "51gTH78LDGVqX3uNb7Z3Sv18Gf7sCouAKbrCdQGutr6RVKnosPrhkCGECqH17rbGH5cf4hPKedeEUBZtzaNvussN",
  "key10": "xqkkJJRURqa573JBxiWAvP1fg2Eo7zWtdpUzEzihcT2iuBpSrbtFKXHAYxhtvW3rF8tH3M9soUrB7CPCcw7cSke",
  "key11": "3EcGEJDa3tMgYh5LuYJuwqMUxjNxjnevr1bBPc6RXdgpVNS17LJGtaopSY6Fwwt4qZ1M75AmGFfXmB8ejBa2ceEG",
  "key12": "2KeUDjVom7ob7YSaLDrmogx8b8TdWaHVS1R86ekPeaapjXFu3HsN6BqRDo9MH8rDALR63q23rrJBHok8SKS5PLKU",
  "key13": "57bSp99icAr3LMCPr4Fg6PTxDNNpNx3w6jSjLANLTX8nmdfFuFcANFNHssgH4DFgeKnPck6QyGT2EmdeSJHbYAow",
  "key14": "3n1BbhswpDaWuvdzBGL9bRsa8Jf5YESfNQU3i1xc33R6sMMba9Fg6fr4AgtEWSEKke12Krk84h41G7YyVA7vbHc6",
  "key15": "3j3vjR4Hdu516f7WWYQSssLFgdta8oAqZnt4y1Tvq7vak6BksR81vp77yZ892dGHmnrQpfkaLeJCsQDTJrQ2zMth",
  "key16": "5dj9buyE6iEGxsA6CodB4Zd7hF7h5CKr4qjg4tygZ5oPKFhg9uncMG7P7WsKFr8RJ4iuHC2QjmRFcr98o54AH6Hn",
  "key17": "Msp83mkx1zJGheBL3WSH8pSf44DNJQmkgG8BoYHjftGLv9E7AodiJEsGUUjR8NV63gjAkb789it2dq2N1CaUQCV",
  "key18": "5a9Lp9rg4VPZe5TqF6Y5P9a1oM7Z1ZNXhoVZrgmHxSR4tHHSU7N4xzMbvmaiCZaJB8c2NGzE3b9fRa6NyFznBUXX",
  "key19": "4d8tETEJ4PDkeZUpbs1kbJa7LQm2PyjWcEMbkahv8tjBsFQhZXwjCUqcP8iFpR4aMAjE56DtcH7iCNNmvTTxZSts",
  "key20": "5wDivYVqHjaGGLd9UiWVoKhpRgoj4wuHJQngi2PvkHuEzVwkvtoNEPdUhvCJ7SgWwxZ4MVZBBjcUChYkURHveNLp",
  "key21": "iH9XN4SzbL7VxxQnNkGxEz2mTFV1fUJ5bJngzfQdjBNS4pVP8KVMVk5q3YB6e6WGShvH4mqa3BeMt7AKEFM3hLi",
  "key22": "quJ13M2N2HbA8yAubvhUfR3wrK6o3JmNKtNiBjMWdMc49wuVgnrLmcZVNF8nZVt1tNwaEczcRLSedmHzDDCyvvp",
  "key23": "L3MRdEVBoE7pPBGTW1p8pDzNSzAczBQEPhh8TPLmpMEuD11K84AGiQ6WmTgpjscDA18BfqR96g6rRrVCNVyjBkD",
  "key24": "36WqxFq2Sszi7rYi77YaVXjxCgUkzDMRgaQjzfpwdsTp4MqHGeFqmJsoLKmRoEvumzcdNybH3TGzJxGRsiJDTqyn",
  "key25": "5wTaYZj1UTWTX59cpFfyxJjtGdvewuPPksMHtDTB889askHrgC4bf1sSExhH6GyxrcHG7dff3ZHGpEokvtx9mgiU",
  "key26": "GvHuRWTfqifHheV2QkhRW7WAgDsDWAADjqP5T49FAU2khHgqUBAi5n9KF8QZg52s6sKPQgn6BYyU7aaPHmfaBhN",
  "key27": "2gikG79J8q8CgNmPT9bNPutwhcHxSvQWvmUvQ6VrYbLzPX9Tg9YiiwzszmHUC2AphszqkN4719gi6vcJsVyci7UV",
  "key28": "5BYwFbgrhWux5zNMf18wTFEW6DrrNGTwFEvkezUtmTnjHQTmfvyiNw3tZG2geY9qkCnVCiTTfW1DpDYcLseNcE2Y",
  "key29": "5h5SrNHkzgW5nLBcMipiwPKCDyWzDGjfB9BgqiSfMGaumZausJbErRqspdjBaeh6AP1nfLHSjKv1TmKXkGT23zBY",
  "key30": "2PwAMjtQnPJBGrrhtK5xptUFsKeN2QERcktyP6NQ5jrDqx3yBsUNpcdAaTDL77LtngnS3ENkJDbCYiRNmW2Ghcx5",
  "key31": "trduHKGtsgVXnGR87V6WSiLnfgeWBfGPwhH2VCa2AuWuYhNEWyD7faSgQY21p8VC4KoAtLDc6D1LVuoEWKJH4m8",
  "key32": "4jxGZKaoVAaEuL67UJaSWBv2ttbFnYMaejGsmsgPzGGtMUHitiEGSHUikpjpUTPEVpPdAeVKDYcGFoHvUoT8FefL",
  "key33": "36vh2jAoxRW7N6fuYJsPcTND7FxdCAwzVrWcHxsBWSm4rr7UKR2aryZ9XAaYJRVaHB6boGrUCxGftkKAobEmaS6d",
  "key34": "62FhuW2L8i23rnB4CKhEeAUe8fauozcmz7wSixeDusqh1GYYfAdkXEqnakcFi4bSkGdks9LiLzbBBToK6HqkadtU",
  "key35": "d4ogwkWXbwGVRXXe7NVAUaB7Pb2J1jp6of27g9PXkmzFQpmk9s88KNcXV7M3zaD6UgzFxvuJryMXp3uFKHZsEb4",
  "key36": "4FnyBK3mrezMaorcRTDNfP9AkgdeePRJocsgxTG8j5JzK832vJQcmFybmBLh9QE7Bf5qBLLWZcdbnYsbmWRJPuTA"
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
