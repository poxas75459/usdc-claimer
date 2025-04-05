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
    "2kt3YVeeq9QC4jmwRGZrr7nnXLUJ9j1fmed9MVM8DLg9QJmzwqfQLaVTir6DXRzCdjtfx4nF6WNeapULoC2ZtAjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvRGRECsnzr34k2ZLNnrDPPkaFAsVf1GN9r793qrj3sxbno6pMNZP6PN7EtnBzRXLvaFdgf7V5UCBpnds3rCf3G",
  "key1": "4sUkckZ6btEh9p5aN9foZnFCcQWphDXchhTXkyKVvHgL6b3tHG5WHgJfaykaUgSvb9e4h1nUTrTCdP2fz5MkP9L9",
  "key2": "4pYHenFL86ASUQpbpNpX4nWJV6uPW813uFii5ECmeoPaNQG8fu9chSkXoyzuxpKZrybqUBYG6MDWUGocado5ZYBU",
  "key3": "36eyYwqVSzokXkrxYR7zV1UynA4HtWjUh4Vxo91WFAthxjA92rLMkbY21xuWbBJyQXy6hFnLERKqcEHqKxgDCmcx",
  "key4": "5nLE1YRvjXhM7BnXsN7urUuoniTGtj5HugiesUfJzy12WDqiasxTe4wY1c4BzgaUWiUyMcMiEXdN8uaaLixnpgfF",
  "key5": "yyqaFcKFTXBSNguKRU726b32MAKETWz7M3N3XtXaVULHuCgm3ffpB5hiMGcr3EVRLr5CwnQERDmvCMbMmqkJSCC",
  "key6": "4Q9NBNmSUHfNh8JRtWD9CTk4za8Xb3G9WEnQiRi8ZXtW6PdyjsTCJNhdahBzrPSkKdUVJyqnjs8S9rxZfEzjE8o4",
  "key7": "3RQpEZt6Ks55Nys2qPqsPaMq32n5S2uLTchGgdWQTifjq9C97jZL73KNAUEWknXJQqiJQqwMrvSBrULrWCNgotkQ",
  "key8": "3X1cDAtzp5EYCaVWstoJy95GBJjhjwMAnfAmsgi9HXZierzUAsir5aF54syYhgRYezAezxVWujRjB1FQBZhwDa86",
  "key9": "2G9y7dC6ZzbR7d4oXvViMG3Ww3AqSEBmJmjoKjugNW4znc4znBmU7LpVza7m6ztsaawmg1GCAQ9SCt9gwo4MV7gR",
  "key10": "hs5KrG1YmNcAfBJGA1HX8uyRor5TPpofLipXXKRhZJ162DWFPWZxTwL7J4vjXqpKy1h5kxYyudqEXAFKpNU6KNQ",
  "key11": "2XgGmQa6shv9ia4hyRqrZRhs7HFX3u51o37xifGwF4hDkUgzrJCk5p6usqtCxCoT2Rxc4gXa9zJtV8rLgoRRhzxZ",
  "key12": "4z5oHfNo6zSjEqWoDFG8ggaJHCP2ERNymVk4pTnMKozM5K1xXkm4LKkemrRjQeWtd2krXc4Zv2o338LBTa3SGHiW",
  "key13": "5on9g2mLcAvixfb5GpLBoshRQGRNSXRGPyY1vZGkCjM19RYTRZGZ6hx4HSAVqARiocxJG25N1R2GXVWQuHrEsxkg",
  "key14": "MWicGu5zt16RdaRU7XfY5UwaRqEpFs764N1mMn9B1f5TWkhSZ4tGvYvEk8gGxhTHqFwtVTU7s2TZPsECHyE2Y6z",
  "key15": "2pRUtqvDz7YwWEwT2MKSQ2RUNUPnH8EQVMAVtGAphDBpVUYUb8HMnCKip3Bx7YaqNthQUNK6e5eKuJxxCeRcPkFB",
  "key16": "26NJpx5t83G41B21qaSHyYEymGBBtVrSEgFVAokH1ozLhc56MDC8N4msNswtb3EuYFQTbi8YfHZMJiCH8nTaGmFw",
  "key17": "4wwg1n9AcMBX3nGkUMtsjjfXZExqnX41716yjxj3FTjrdQPEw6JuCKBVBVTmkV3wgxjosG7MKJwqgwYfnAWnoUAd",
  "key18": "dY1iZEKSEfHxnv5qPhXtKCV7TY4rZ8kBF6o1RoABtV8NUFkZTNpnfKX9ebsCd5fiEeskegvtKNGh5nehvrd49R8",
  "key19": "54jvGtq8QGzfXNKKHgoZE9dSaP6kFsw7tVB1ZzTA8ufG1xSdfvfNTCcMD2EsiiH977mv2st5Uuu8X6xXxnQThiwu",
  "key20": "2FgTS2y3BXM6wuYGV9zskksNQkeFSbg5cnjcWsarHVeJMbyb65abDvzMxevUTCt3ZU7uK6DgaahoCLvsPNkjvwjN",
  "key21": "BjKXp9c7MGZz4R5SpUvcSfDGBxrBAcsspx2px6U1QfkcoYVwsb8UtLn6NZH9uYqihjNeLyR1p5ZEFyA9p72UeCZ",
  "key22": "2ziv23u5S2hTeYTkUdCkz8xsAzzVNco4xm1zaPkF5x28BNWqhe2V4eoWqgairR4DL1uK6wSaZxsWXq8HK19EKyCD",
  "key23": "2boAiSicojfMFohHNCerCmcdzGWRNvk9jEm9pnDZ2xce6FK8EwseZM937NvaYCB5fs4eMjjKcVQCFT76TTitQy7G",
  "key24": "2H3vFYYJ8CcaWyyWmtbw4LMNwPBaCU7UsqiJdX9jfsAsYxrGfGVxyJXFehRoCwoCb9r4ixcQNbi4ChjiePad9mbM",
  "key25": "22eotZrmaBgErG7V1QhFyrzjhxbxGPotmju1mCBtTfZVyxAqiz41WcUniw4cbKgnj12XCX4syMQSGfWqenUn2LA8",
  "key26": "WbctLvxoPErQDBgTKWrco5Ej2RxrDvNEvk1Zjp2UrQjLEjooHmuHp3SbnogRiUmikVN2TGhN8xFPSUVSzQZVoYX",
  "key27": "55ZT1wZtSrPyxGSUqwK5ZH4edXYHnF9KDgyoFCVjvB4fTg7mTZEJ8xjjLFYop9cMZhpKex3oZyKaKZcwnqkV7v9M",
  "key28": "3ChtjKXw8yoQ2HGcGQXKDDCXhKUJXXqcsZX3VocHTotZci4M1b6UojJuRA6Moe1KTPWxH13TFKMJxGdDkQ3oSEaj",
  "key29": "5wix2Xah4kQLMebyaFETCtCUE89in5buQAyvLQ6gQnFd1uq3Y4xkSX3J9rde9TvCaJc575DA84CkCkchxHeApWsw",
  "key30": "4hpjzuscFJ8B4gctGN2YpjwVAzADT4TfCgBVk5a5jWPPLTyqiTroaMG15Kn3p2KkfQVBd8M1jX5BktTFytYqU13W",
  "key31": "4sJ57H3zfh2EaH7khc9CnGM6LzASSfdbg6Df73RwJ4M3HBaij8jDkVVpucDjAYBFM3J4B5WkQ54q1iLCFyHemCZq",
  "key32": "5ZegVAW89aGboqZ9XLGcX46v6AsLBYVeKfQKqC6VZWiGQ5GrDU1PFmh5qBc4EqxfNpLPZBdaEeZcvppiFAY1ZYH7",
  "key33": "46ZrYuwtm8ai9BYYZxHQdTm4U3M3YtDpWrCzY3R2PjqD9pqBCcpv3pMF2NhWSgUgvU9NkzwYhxG5sijMLnJWyVM1",
  "key34": "4965LX4dUts1Ecfdu8MdBNao2eN3275eCVHCqDjNfZBVCZrbK1Amn4V4GfcVC2PUGe5czw135WPui3YLsgewuWUU",
  "key35": "2kt6TaFWdjqQQgPZDmLMjWNddJ1dkkdpxy17T4Ww984XXF43yskRJmpdoiBgfgqCJMSk472e97xopQBMiJsmXb7S",
  "key36": "4jVD629Ch8DkstCngbbyCYXHtxMMWhEp9Jb3afTTNZRwmtXtXCCuZFPXXJpu1saK2oQyKdGtcC6TwbGoVQh3WQfc",
  "key37": "DBMZrsH72FTRj3DEzGgBqkJdXpb6Nb8bsn1pbSqmoEp1QHqWuo71VGdhnTtGhobu4SKd3mNw5E7kzQkAMKo6sSY",
  "key38": "2LvAaauN6oP1fXT82iQwAmfhq9v2XUDd7rxyj18AwRq5EuvD3fEuv2uHu3xySvYqctaHfnbQCMMN8HofEkfpECAs",
  "key39": "5fTJbahhGhrsRsG1Ahh4WLmccWBkjdpKEK8PrYdHqbChtdi84kER5iwsYBerTxWvXmSiB5KBPGXLN1q7jSEZF3Bp",
  "key40": "fGjmwXXn7mwXvEdWHoJn9W1a6xiAkvLTy5ypoNZeshENYojt5X3QsEF1UWA2LkNi3roEyESFdv1eBUnaML6dYRv",
  "key41": "5vFwMqJjnJs8VpMWkdTBCraBMuFu5qKaYdxTWH6RJQGPCEfMM7RE5DLgAKxVMwkiBVGhzJbnMMGvQKYH2DZTeBrF",
  "key42": "2AnmKmECSGKHf3qmbpjcCdTwJNCuymHeTSfHXHd6jjWS4T9tUrA2KcDSrYpGFjd7kvJPWsZicPJNb5Z6KjFjeo5F",
  "key43": "3v4yBLC8vVMFfZehE9ijY1M3Rg9e6FkQbq4iZAfZ8RorwGGxjKsaUSihwKJYnaCY8hfuMNaPUmQFaKNqig4J7xxB",
  "key44": "r5c1B6dbx8ue2drc2LXf46uenL1RuntS1Rvi5T95wypAx9e7fWmou8Xhu5gAF1DmQ9zn7job5N8Z4btwZpRJUeB",
  "key45": "2gL7zoaUQETDT5uimwRWqiNxiD56ncxKTJocDf2CnRJUc8raJ5YEQtGvevd6gBhaDdytqigPpCFan8n9PN7Y7yQU",
  "key46": "3bSBBjE1mQTDcR2GggGb2M8BFmiEKDBd5WLAi7u24Y24rt1NEDx9eGgbBD3HvcbjVysjhzzX6kAezdMJhmC2i4rK",
  "key47": "3x4VPjHNhvpvfNWs34xMRvV8dTz8s7DDS2ai6WofQi79BoVasVVzHKUJokmfyB63CHjWqpTFDigUkyn6P8uRdAuE",
  "key48": "hEzo1FV89DKnwhsy2b4YcxE352o8vU5fhR4spEzSbuC8PLXsi7b5tgz94R7GKLFV9LbtAcLuE5wo3qq4ZHBsLED",
  "key49": "3pk8pCgY2jjqmEbbUji6onzEo4mqXg9N4F3EAGin1ru58wtozHpMhCzHq2XZg1TpEnZ5LVWALJebNzjXe9z4LdTr"
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
