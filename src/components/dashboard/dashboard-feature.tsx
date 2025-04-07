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
    "4QxSpkpknJ4x9QaMMrvvmZaHPg1GnaQndfa55T6qHKpCv9Dh2MwBSDEeH8k4WzvJkkMUNSRN2mwi3tNf48dtrhJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X83EiUuYxtQ49tsTZYzNWvQHNTXkzBeXz79azNeDUeDSUsZmPaKXuvzUZdBtuFokRHAN92CnHVy71bouAnutu4a",
  "key1": "2pCi1p4WXR3D5BSwjKw2vWPToXg8NCUkL1QpH5vPfvWZh99fAHhkYLoKDNRp5xaYeVZENHMyN4SuNmAbMVVV7y7x",
  "key2": "4braFdyT1Re53SvG9gY9MSNvH7EjSLUVV6amT4621jfo8XFE9i76EJb7YZdQgY8bEq3faeCJiTrDNu6uQm2FzL5U",
  "key3": "4v8FtUAjgtqC7VsMPA6kbve7BSwN9U4Vqoueh8FUy55a8P5TTALfNhpLgRYRuThPsAsZK1MwzpTEmLoBhWuQyHLb",
  "key4": "2uss26p3com5hZ8zGmVWn4xXy56mL9djzCEmKJ4EJfBnqB9b8HvG4vsApGmRzeheC23FoRGTWW1UwzTjaGwAHa3z",
  "key5": "bMjsXJ7cYfHdsWLbxbXx7QGmNNYiih8xF4KgftDbEnFoCpZpmSj33bPWxna2Peswrrozy4DNxh8wno3kfXFvUgC",
  "key6": "2UQ87BbU9ZKUBuGdDGvnt6p2LZTrFX659Jrcu1AykZ9J8cF9TJsG2y9ZByVXnKWXyR99nKtDjhH9araJ6nZ3b7pK",
  "key7": "2U4AAp7QZBUsc9bSN7w3VJT3teuaTrukJVwmf6YEaJraHazDQzL7xbcmVVqjkC7LZDTLaqj7dGH7zNm8yvtkoEHj",
  "key8": "3b3TEV3ChXYBb9hevrs2J6PhjBPqdv5MXEbjr8D2rN6L7LgCX6uzx9KUz7rUJQJBV28xmxWsmgutdrdNSYurAJe1",
  "key9": "4vfcWm4FNH9yFC38SjsKz6T8jPeFqEh3XT7iirrrZuqpVLpQmiM1hAZuikTRcANXTnGmP4RjKX43M63Nh9hTRHcz",
  "key10": "3bt973btBC74ow9p6FQ6K58DUX89M5PajUe3NhLoLMtNVYWSojQUhfDNaWBWJK8G4pYxQNBEiNLvMdMdmvAtrn91",
  "key11": "5LbuLfoW3wFUnsMuzzHzc4wYPJo9F2X1Ncun7xpRzJG3FNPZAHbgBatQSZpoqbbmbDs2kJd6ZMr2SHQsDRCmgsCj",
  "key12": "2VnmrMaTWyrr5wq4RTMfZX935Ne4mMVe2WAkV4HrtcVpGUEjoWWsBk13PyZ9sHZMR2eEpGX6U8Nyd6Aj2XDYQ4uE",
  "key13": "giWeacTH1bEo9VxvPSpuUEZZACiurWkTwFv45f2x3FRWCQUGRzEB4BeitPTQsAubDMv34scT2qH6yE6BEe3ttJS",
  "key14": "pbhLJoRcqWk8xLmxYz1FtpsaSyqH1mYKCSYrLbG19CjKBwZdqFfSfQve29HtbSjHAPCAjkqHk5p94E5dYhRoCC3",
  "key15": "3WNaqgCqxdbk1enN9viYmQTDXqb7LuHsbmHDdir2aW6LGQSEvACkepFUxm6899XAaUHRsH9XhAMKXokjNJPC3X6M",
  "key16": "4hoinSLaLJR5xYe2EMpYBVmdzSLcFme5osm9tSme6cGTLSUF37GQDz3beVvwoP58QLAy5iRXr1RwhtiqpJ2DNDA",
  "key17": "gVtAurD8jKecumcBqr81652GiEXes4bwLJ4mTJELHxmo3ZYKkoPChnxm3vx2SUfZck9QcQBDYnKAQGEtFeMCaU9",
  "key18": "2MpSbcccehoi6q74ZdLXXfEegDUwQrmohFJWAL5FnNJ3Crdd1A8sjfMmnmeNjLLPLt62p2igdzpseeu7si48sDZd",
  "key19": "oZiGy6fEyeXzVo6oiB5a3p4D21M5iZbRHhc16NpCw7iuWMWk8YaxypaDX6CJef3xwVLCxkY9RHD6E2EjiURHAUQ",
  "key20": "3g4frfkakKRwdfrdvDgChA8bHsPf6mzQE45kUQCcS6v9ZhURRXduqqbZhFKbdXeTwKQmtTXWsUug8CQk4tx7s8Y7",
  "key21": "4NNshVbkzWQZ53DRukPPEaegKPw5ZiBJL5WeGqbcfDyC43ig6XJ2S1HRFXs74mYR6Qsp1142XoQFTmy45UKesF9M",
  "key22": "zETNydKN1T5PGsKpkCfCwbno2Qawc7NEjvPwJBpHFAVPCcszFh1gf3yCgaEdixiexjAyBTfRmwc6VqXa1Xbzmm1",
  "key23": "4N4W4AA4QYFUxS93zoeFM4o1mV1QAvaC4toYXMjVypx9J3gL4StMDTGDC2qZ9akTJ1df7fEkEhJDKvtDhtAXxyr4",
  "key24": "3cU1quHRSekSoxTAazBiGbyKCqZNPmPYKVz68vc4KvNtETsag4pEmtriKofbKbevWa6B9LQAUzs9Ejz2zb9mhwZv",
  "key25": "2YkKWbL1tcaSGtwar2bM36t1HH5TkvnCk3ALh21FJr1Cpyz9fQy3gsPDcabwqsiu8EkeYy3My7skV5WAtuNQejEb",
  "key26": "NcBzR6stuUDyLqSew6hk1AarWLCrfcik1ytYU74Cy4WXhEpjrFzv5f2HBddMytsMUVju92QiTkX6SDyaF6cp4Ba",
  "key27": "2AL7S6sHeGQYBxHd8vzdkSQjMbuuar4goD6BbstF3CY9nsdgh1zcJ1gTLjDjCHt8ELdm5uUptNBrp5ePwZRGmzEq",
  "key28": "647NnYbrbKiZLzPNj5nmmvzjyt1EFVCJpLkfTBZ7Z54GTGfMJ4zGbVtMQesdALkMCgvkpfsHcbTpSC5KYTr27kGD",
  "key29": "3GXpFt8gscpcvG2MrsgCqdsKXJ5rWtXoG5zZmJpxPn3b43t6BzVBtnfAW71cUYgQ6aTQdMYKrLAcUoX5fhvNWehs",
  "key30": "5fhS7dTb6pYhJUiZhraf8RRdbPXNWJ6FGJ1mBHzmFf7YP2KXwadWc349z4Lur2qe71gogbAUEgLb5aTJgRPAEeQD",
  "key31": "4x5fXcLbjPfyPmHRVTdc1YyGZ6YRKDSFiutRSyAjVn7qV8aZC5vFaWACuBJbatdurLtxmH4ebkarJwNa2QTydkQY",
  "key32": "2h1aivrc4E9qVGctcJj93ysrTVgiR7GRgDCaaFGEPnEzMeEMWQTQgq71jLqW2nqmW2W1ExU8d2QRZ6TFpyRXU9L8",
  "key33": "ebWDiZ9JezTgGwHW5zCzFBHvyRBgnBZRZ326EVc9gf89Qh7sGRzVyJdb4A2wdF5f4GVZXSQk9bBJZVQx6WYqSvV",
  "key34": "AHG9v3i6mAZQjj9ejDwkCv8UQEhUf6iQvMZsezZChGBnMmJapbzQds9FMBETPTwDX2eG26YuwsGQCSn5PvSyRqR",
  "key35": "2fwndAUg7v39trc1ZyRGFBJ3wviXTCvqjsjscSApjTmawR7CM4ug9MsNzzNbcsdxLNz5HqB6ef3GyjaaZ9tQGtqq",
  "key36": "xA3mm8LgJS5ah2L2MKyaUGdXTVwBuCgRdAXttdg1vvg2zD7kzXJ7bNUpLzWfZfaTxc9uQzjMAfFzHozuK4bHE73",
  "key37": "NikXzHX5E1fJabzca3ZJuNJSiJqNPNhhv6HL72HX5xY1iQTU73EC56ZBrDrVozZNCkTr9PP6bwtsqtSaFGPUrQH",
  "key38": "YwsYZwiW3brY7kmk4EeZqYmkexZPTF4sPQqDnEDKoq74VNLMcmTJvemvxco6iVeHkRYPuYZ2F9u2Aq3vbMKq2Ca",
  "key39": "3FvJ2mndYqqCieKaVaYzarxUUt65A9s2ZaCuW3DRGQpsb4mjDB7ViPwF3C1TqPV7XVpgg1uGjrr5xFyrMVr45QHo",
  "key40": "3bMmCEtQguqdDPw4SiBAYB4vWcWM7tePQm63hCuZAYcxUKNH59hSKhb9j1Jx5F4wtEKR6uGsCMrv3Ps9fV69Hhjs",
  "key41": "2heCfgCSHxqqLWsbyNz4KrkH3Ku2kWUx6vjhYkKCGaweeXpogoA93qRAqvQS2uq5UAVKvEDjTuND6bBZ9BPjwQc4",
  "key42": "5cwnwrV2VrGCmrSJ6ypTUc5NdHxJQAWgSj4xcbd3puax9pTKY8ecLVm5GAwXsmbd3Vd6WLTaxCpHNHozT2FG9gkN",
  "key43": "3EUeqJrEWr4jaVox9ePzU1W7Ar6yTuQ5kToD8HXNmsX1GJQMETFdfZ3W4BgdmXCZfCWqyVGWowGhht5AVoPSkXde",
  "key44": "5Eimzrio218vA255T9BaEsjKxPx4UCUiqZop4TSE4EUgBJmdE8uoD6eKJ2ce344NHkpJrM9nq9EDxP2TxmjqSvK3",
  "key45": "qzq6yBqSLNRdUh5bSra6ooLhmNAekRxBPgRNi9B8QxPQGb8tALsfyVSWBRJ64qUtbP158nyZucExZSp63bLY4U9"
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
