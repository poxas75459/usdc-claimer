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
    "4U5PBM4RQPkjTvFbUc6sM8sCBBdnjLDSXuPMpt4ysdtqv96FUHRdXuHp4BH1K6LZ9aCHQkoCqUU5ecn2siTjeChq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBcR1q8T19n3swrmXkxcJ8pHbNc2xZs3bwo1PJeBU6XY5QvJ7GWfZNGJJ9UL9PHXM1zzELHKJFfe6bBCgHYJyk6",
  "key1": "2WfJdqwGtj16czWBUMHMxjK5CjKkJDJ5dCSw4ubhgQE1ehMxYkwmm9XWxew1wAmr93KJjDcJmtcakkSjnVZTghb9",
  "key2": "jabem2313uyCRgiPDQtF3mteemdtQwMUqKFzvmF2nTeqry2EHiHb8ywLbvsZyeMqw9ZZSqLDtGoHy7wiLyar6JF",
  "key3": "4fySgx1zqvU8FtPMShwPUKNyYWegabUbLcwaU8hpexaxqapzLofRU9QZghiv5ehLgysHP2aR7cvZ3LZ75TkDHBx9",
  "key4": "551JsREV72LXuAhSCShMNXjtAxzQ3rxJZaKXJcsoEbkXvBqXA97MewRVemMcvqw5ieitD2Ynxfa7wCBY3nbiKQue",
  "key5": "3Nf1zdUBKrYjqFdPgbvxQXBhmEhfHnruconwXYxG1uGwMYUEQnh46o9etVVsmgSug1Vuvbo7UjgTxGQnSwDsJoHB",
  "key6": "2TZPQ4xeUEJbXMq2kjnKAJchABsWbCpQkgG5ex7bfqepQJqeGaX1dSEmGb81DZx83pTS1Tyw6o5MhfQrKAtX5SNe",
  "key7": "26FcbzcU1ziPTAoK7betyWuVDYddSDvvHUQ1r91bxYKdmjN6fFzwxzC6zYFzx62NhibdUGMANTjMLhMorRryk3hR",
  "key8": "4RGCjQbYPtsaDXn1WnBip3GkfbSaLZnD7ciEneQPXQAD3fgxkKESGqoY9Hvc4551MrBwtoJnGjeWieZU16Fqs6hW",
  "key9": "2iTTkqfTATZBXA81n1DhoyPLbuyp4rH1yH4BSc9jtzNwSnqSMRgedHwVjGyoKaGJab3JMNUZamuY6K3dDU2iQXgQ",
  "key10": "2Yvs3k7mnDYcE1sRVwB17iUNuv4jgdh11Vc43yPPqUAmD2Xuq3HwPJ2AZMQnChLwg9pGTMu5X3NsWP9ARWaACvTn",
  "key11": "49WSid5Zp5uCyCPkx6MHWuihXJwfme7CzA1N9idZtp1TUUDRgKdRUfwQmMgJkT9Krk2zrWWt6KwzdWdaZkMdUNyN",
  "key12": "3LYUXxwpsz3SEykH5wkX1wcGT4kU4UJxdimMYJFoVrZYNfAeoo5VJFa53NC9YWoMSNY96WitxTYh5qLcDFxpaNhp",
  "key13": "4siS66kXdU5WW7myJHyJSunXWxPkt96xiSuoPZLjsNrEsEtjJcrMnSQzfRaDgtq6BAjPb7Y1WuahZjSj2HeP3NsX",
  "key14": "4rBjLXx9dbZWX5Wd4j6zFdYq4seM3uq7DYbLW6qrkRVWySdeevqAVuMNTjkX7gWqsVQYuSnvqfXxFXuSaSYUfuve",
  "key15": "zHnUShyCqMSivubieBDJsADY8QUPi1WNeAEX7Hcn4aWXxWhx6YKX5cnbGHSV8PweJgZ8L1QA7YDBcHJBZGRXRSN",
  "key16": "23JoXf2xjiakEVUfLvbGwnSBep7KbyN4Ca4y3qCk27RUhAJ9UFCUc9aHPDodh6ZB5HRYbx1aRcEq8iAESSGuFiPy",
  "key17": "5qAJuU1xeJpsgPceKdPehesc2xg5ec6fQdCQmUYiMNKF2F8ZBRYuXn9Fa5i2dWPgSLCGRBS5sh2tcjSVExHknkKE",
  "key18": "4Wo9U2zDRT8v2Kf7z8HunwWYVniFnpXWG5EremeHypxeS6UMgcKjfsskMjABNBdAUVhWkBhEqxsDQUNR4n1UB9m9",
  "key19": "333Kj4rGTdetJ3q8iAwpoxTwj2R4Q8hLf6ZMa44e4QJEh7WVZDwGYcMvBf19FRNRLK83Gom6AVg9NXo81bvMbcAR",
  "key20": "45NYCgAyfVQZhXhtijzCJUrEG1S7enAi1Z63J2xyHTnkj7v4TEhp33SW3v1WHzXUBdwLeHmxv5i52iL3DvFDfcYx",
  "key21": "86WKU9BZLru1kM743KSqkAcNuadUbHJBZ96qW7eJ8i58yJV1jhFT3Xiyj8TweQjJbsp25ht4J3S67Xze4sT48UB",
  "key22": "VcpkvYkgZu18Nw55mYwen59xkUGiAatPdMUwJ9zdcPCdUfFvz7nh2QdxxH4cgnUwmkB4kppmi5oPSPTyLJR1Ypc",
  "key23": "j6JJRq4zPeBG6PaJgScqWH89Fw1ucyC1MAZyM7ij5bZnpPmYfKuQBgveVTBEQRMfBTpL3Xas4xnqBqTHrZPgYY7",
  "key24": "2wrNWiKt2VDfNZyT4fCkmvHaJ3PdXj6N8H2zUTBurJ5JKDsjbHCjYFNMumg6evwS3ysqog6X77sTa8cWKKhSKabL",
  "key25": "57EsZHJEf5iHf5TrYSHEXTcRjX3Bsw75vCdzPLsbFRpxjT7dXD8gKsGxcHXMPENQAJDoQaQov42gwoLonn8CJu1Q",
  "key26": "5AUSEJtxEyawaQsy4mCZJqAxtnAa6UFEiaF7p3uXfNC5CgeVfFx8qjksADJWreaQabNBUptfhLfDJ4DrzRsdYtbK",
  "key27": "4t8GDxVPrZ92qK1Aj1R6ifzYM2gQYcGcG6tD7Cjrufacs8VpVcZNSptuLGfKaEHpYbg5hgPG7isJT1DmWhL8Gt7n",
  "key28": "2gAKLmsxBcvL5umxrREf6QQtsm63kzSEa345168HChnfJRkPFQjjV3eAyEPSkYGVUdgi7mx4yiNBWmyus2beuH7z",
  "key29": "9Qg9Xcv7AtFtckGYDwXt7g2LgTZzzi5EUe3eFLCFteLhSZiKve6DLeyoXWbHucpJNSuA5LNV2J4jwUq6v2MUnaD",
  "key30": "aVEaAEntgqKnU9FXNfFXdMQFb8sfHxJS27Q8vNBL2trWZzkoo4TPqJRN7rBYXFk8DzmJ3BqQaXJURL7ySnAqhC5",
  "key31": "2e6r8TubNLfFux4mqAayjqwrcyZk9jBWQrzcnK1AwfstwBN3GMJi7ckxE5PomLeb7rkbULg52bDUfUNHKW1pLNK7",
  "key32": "3knzLo1qkQWMU7x8RsFG9FRNYZDJxchiAC3tv9Novj3ZThdKCaUf3bU1VYddQLGfnu7GLzPrWtBmFy6XUxsQSEw3",
  "key33": "468UHFMs1scRFng7F5fMCxJU8zLt8JfMtqR8KVgBKZfJfmmoc96QLDHEoiDbtqZ1rJCHJEer5uxhjXBWHFy28yjM",
  "key34": "2kdbzVJNDf8x7hpJot34NckkRiX22nS2ULavMeoxkBwTPAGyXFreryDNBu4k68bEo7eru1jWWp5YYTKUjVQpZ4G1",
  "key35": "5NLz7yd2ZHtbugBQ8JFnWgKbUauo6mxmPavZJe2PmmLgeikSbBmXPB1pvKAbeJWpnKR3uXoS94u116w8TdAduXAA",
  "key36": "P4kAPj7EPAZiu8swoNjHtbqf1xA17sy5PmbsRyuUc7thca2josYZeLfZHEc24htDo8XMyb1Bi7KYjNhqgpfTvDb",
  "key37": "2UzpfmyKtGUYPmbMgHMokpDQC2xazAZfPkd28fxNv7WiFQWJzw9k4cdjrBg2oCjiknYZtmdwKSUoGn7xGfXSjz6J",
  "key38": "EMdwy9ZypvDWByre8AFMTa5R8dKRRZTBvJszD18i2iPdD3gE9HmUWDBj8p2Z9DgkAWWGokBfieSXrBJ2q71SDoN",
  "key39": "2JrYR7T7ndFCyKUrFdPxJqQeKokbkoctmHztquTGwH8hPkf1EGqPgZKiWVeJypuyNhEWrRkdzK12mzQcJLqByGno",
  "key40": "66pHtFb7yMFyrfPW7S4J47ik23ydUoEVc21ZPrK9j4rgjr6GkfHPBj5zV96nn7xtrNy1RgVQQjBqbg2EKBtfjUTw",
  "key41": "3LTRfNzLAHjYt4pyxLAoY5Du33jn73McCAVRCc3jjaVpsUCGyKdatRFeXzaWGPGhD8E5rbRsmSwPhrGFeayJhDZu",
  "key42": "64p4yQKD7EzpBphsfvkFAPXsenTQw3psv79PnPbHaU2SpWMKqfRmtGrcDzDPXnK6NYBxgcmvgo2tdPB8Dqba6zz7",
  "key43": "2iUmydNNUCAnquZ8U1UPNjPx8twN1Dr6N18ezLPS6cjhYj3yUjgyZjCiwEMiAKMGR1JUmWGhgpTBuMx4rYMLMbec"
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
