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
    "4yW8Zjz6pbRhhCXQ4rPNuEBokhFm6oguXatZvNHkeb2T7AyaNXQrwMEiDizbmbjcR1tQChvFbayeRqTCiCMoiy6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mXMve2zsEbnr4YbK4ek4Wb69uJsov4drV7b51BvVaozB3zeqjW5hbA7tGabsSnaE4o2euxcx32wmQSVLK366dYh",
  "key1": "3uG4G3k7MpL8C7f7eSeotXnhGMVJFvqDAejNgK6ESFZbSSup6LQi9yUXYUq5QLPrk4MWssxp8bBPfTmTqJdNtR5f",
  "key2": "6yUpCFVTurBqBdtnfMj4P2R5Xmn5gRGu5FSj6Rsbhp39L1yARtrBtBcxpJ332oXQSZVLbc1kCnSWLuvXADFhw2U",
  "key3": "5DcMevxxp6WpA6mrnVkqGqAHrUP5MpE87R11aHsTrVooTY7ioDnDA4C7ugnQPHKBjagavmiBr5tdYHh2npX3ATtf",
  "key4": "3JNMvuxfQDg8FssvHdbWNcABo51v8VtynCvnPixjYnB1mMGYN9cG7mHeDnjXvhBwqmj3kTtRVtrvgfNpBm9kjbHH",
  "key5": "4DcM4pQrudL6DMez7zmxbEVFhPM8j3BrcGnNcKkyyieJM2pxSGryhVFNETKU52XfxbYNf5QGGZ1vsNu9BAi68X8Z",
  "key6": "4kmWEyiRPSuNumGk1Z82CXqFrLQsaMaaCs32sUgCZs6BdmhtqKXwqsAU5hwwh4p6SuE3CSPPRbYPWsDB2HcwtL4",
  "key7": "4gwuctZBXy3qCnwQpzoA2DDfsnCtm9n6vTjSaq8Z3Fcimw5iNXG52xziUqxPCAWTrQRP523PtbdGDmPNH1LX5gYu",
  "key8": "5G91dvprpiZ522kFuQYTb6zXc6Res9LLZm1osR74umk6ecjjXLRpXnULCzxrVxEnPSWxcZA8pgc5RiX2KW1F5VuS",
  "key9": "5wGEPDwxw4FZKYfDWfWwe5MpsrrN8PhprzfLzavyoSSbt5tbkqWrxJ9wpKknCTZN9JmTiSuKsToGFzaJD6vPZhbz",
  "key10": "3qnoVWPt9G7fhjhuG7Pfyi4Ga2FhKzRgtt6Y6mARuyy91pTq3p5aHmV4vtqZYsy1sorDVtNJx6q9pngSeQVY1Ce3",
  "key11": "5YuvfqBMxe7goxSZbGvFW4ffXSj8kPKTcHdh3pS7NvqWfmjXWgeoWy3VNnneLHXKNvKT5bn9yYMFWCfm5Qz3Hnvc",
  "key12": "4ofgENB8sJFo988vwCCmsGBRbmJugf432n6gnpeoVJq9kr3QREyLocYt6khj4f1yKsmn14xFmEoeyBbnuLDajTNJ",
  "key13": "3r2PTNf1YXRcSSTi6vkhqidQ5pruXZPLDfDoqmHQGP3rBmkpNEA6t2wKpbgkZVYe6VP6ztyfgmVpWv4AY5xwPwdh",
  "key14": "5GnxXgsKFsKEeCsEovU8VGUTBtVpMxHwk77zvAbGj424v11vNHMJNBpLUMx1WSwv67LZspH1bmzY5WqbhhtLFoM3",
  "key15": "NtX26ymfqgy9tYj1J7tVFPJQLFfbB6wKjax37qrmV7GQMT8RcHqKcXzny19HGyn2owULdWwfJCtJyxBb6o8wjHk",
  "key16": "2JtXYfPppKfZoHDKE93Pw1AMdbo43Por1xAfNs91MNueemRVgaynLVkU2DGW4npXZYqmDeMc9YSKzsbzzERCn3xp",
  "key17": "3p1GZDASr84zEbwyDAFHqbmNPpzMGKFbFc3Yzskf8WTpzxZFfczjdo4aavTzvwCNy4KjEn8UT8u4zHJUaSMTU7gm",
  "key18": "n9H699pjtp3hPGonrQZQQrP8NtZZ5kaDfoP8HDvM69qzCrmk2pUdA7N4KcxvjqddBaz64wh8Dx6LdyMJ7RPqrXh",
  "key19": "5Ld95muWTGtd9XXekn5f83a1PMjEV6HvY5k7TEMju2P5Xu2P3wPd3JKKKRNqNS6BC4uJtexJozJoh6cFN3VRu2H8",
  "key20": "i6CwnhCK5J8G22ZbA6Q3zDyNLo5YmJaNoRsCJwiXgG6UuY2qKomkNF5Jf416c1uf1iwM7E54zFQ6GAVjqXWFUje",
  "key21": "2yAUocTqfao9ANAPAkkp6EigNichpgiKXVshUmevSaBPEGV1XX3euMMqquHn6XDgTj22f26hBNL4xJFyi17adqxU",
  "key22": "noFreRFvogp9ToxHNZnznaQRwcC8CfPBsy34h23f9TpY8mqEoo9Yh4F2tCr6NjnWxUEbXUpy8hYjh1wox6ddZ8F",
  "key23": "7yYFMFunLXLHQ4oc9pgvCsRK4za5fnj2kxDq15wyL6yZ3Uog8PC6NUyzoV9UP7SSrMSByRhQj8P1SB4Qt1XrEwn",
  "key24": "5RDEec7R5qwMfhnA5i1vzeHLMmET7kUd7FBuiS4tczgL2eBHX5nwLA7D4SH4aBwoMGhApp5V4xwRPcPnysmRSwv7",
  "key25": "TqiPLkfh6kvmazF4SrvLpWuK67JszZSDHQQSYLdQrbAaB7U4gkrScjav1gfpMNrt6swnPEscrQwgN7ptwgVTRtj",
  "key26": "KmVecR4ZrH8U5XddZgV8NGjJSa4ADQyWAUuXYt9ADtWJydqcQjnvpRTsLR4qMJtmizknCmEt7gr51rSgPo5A7ot",
  "key27": "2f8BCQwr5bCD69CvmoZFe7WadpHX2DR7RMW28TWbE5iax2dhxpwwbqK3RwzrEWZ5EKW9ZPErmJWwSFA8AgXFyEMD",
  "key28": "249oHEuLm8N5BWTesTWtWUCjzPREnMyXNu1bdwH6rbsLNKdbaFyZtbc4J6wHLYsA1LbPwqHc7y2eqKe2z18WgzA9",
  "key29": "5dpiz7oYLJWRxFgX5YXDkRh2xUXCJdfaS1XbyuEenzugXquEPRH3P9LPVVmEFmcEKVQ86y649WT7J9ZDQXabsWzg",
  "key30": "54puabwLjoJFBpGcq47896KyUymfokMca3XXYHfQ5pBtANrHgwUA6hPooMo5t3RvbbUbiZqJcpXuUFEYmPSgM1Um",
  "key31": "39VMHmuNuV1AV1uu1pFTnvsuUF7zXB4gCtduv8pCqbhcK3rPSdJPQ3tKoQUt6py1ocLK3h4Eqki5eP694VRmMjaW",
  "key32": "5RBPrgYjsASWFEg78yrMxm5yek9D7BYun3g61gxwSrV6RajDjBmgNCwAnvDH7bopyXw52fH9VfA7wAokNtaqQYzb",
  "key33": "F1GrDNNrmkqssTKvdgSeALpAzokLtnPWepkWndQMGzgZt2rvimrUBbQk2Cq3tSimv7R4r4S9WQzXyoLFGr8DNjj",
  "key34": "3XGj2phN9trM49UkQhcmWnkjDM3hQuZtQEcirgLuKFNZuJyosa5Bd31FAssptPSWhxxtGKRkjhhBt9HKkKAguiTw"
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
